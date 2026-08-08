import { initializeDatabase, sql } from "@/lib/database";
import { getStaticSearchDocs } from "@/lib/blog-search-index";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") === "en" ? "en" : "tr";
  const q = (url.searchParams.get("q") || "").trim();
  const basePath = locale === "en" ? "/en/blog" : "/blog";
  const jsLocale = locale === "en" ? "en-US" : "tr-TR";

  if (q.length < 2) return Response.json([]);

  try {
    await initializeDatabase();
    const dbPosts = await sql`
      SELECT slug, title, excerpt, content FROM posts
      WHERE status = 'published' AND locale = ${locale}
      ORDER BY published_at DESC
    `;

    const dbDocs = dbPosts.map((post) => ({
      slug: post.slug as string,
      title: post.title as string,
      excerpt: post.excerpt as string,
      category: "",
      basePath,
      text: [post.title, post.excerpt, post.content].join(" \n "),
    }));

    const needle = q.toLocaleLowerCase(jsLocale);
    const matches = [...getStaticSearchDocs(locale), ...dbDocs]
      .filter((doc) => doc.text.toLocaleLowerCase(jsLocale).includes(needle))
      .slice(0, 8)
      .map(({ slug, title, excerpt, category, basePath }) => ({
        slug,
        title,
        excerpt,
        category,
        basePath,
      }));

    return Response.json(matches);
  } catch {
    return Response.json([]);
  }
}
