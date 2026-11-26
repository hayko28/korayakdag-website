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
    // Veritabanı erişilemezse (limit, kesinti) statik yazılarda arama yine çalışmalı.
    let dbPosts: Record<string, unknown>[] = [];
    try {
      await initializeDatabase();
      dbPosts = await sql`
        SELECT slug, title, excerpt, content FROM posts
        WHERE status = 'published' AND locale = ${locale}
        ORDER BY published_at DESC
      `;
    } catch (err) {
      console.error("posts search: db unavailable", err);
    }

    const dbDocs = dbPosts.map((post) => ({
      slug: post.slug as string,
      title: post.title as string,
      excerpt: post.excerpt as string,
      category: "",
      basePath,
      text: [post.title, post.excerpt, post.content].join(" \n "),
    }));

    const needle = q.toLocaleLowerCase(jsLocale);
    // Alaka sırası: başlık > kategori > özet > gövde (gövdede geçiş sayısı).
    // Sıralama olmadan ilk 8 sonuç listedeki sıraya göre kesiliyordu ve
    // başlığında aranan kelime geçen yazı dışarıda kalabiliyordu.
    const lower = (s: string) => (s || "").toLocaleLowerCase(jsLocale);
    const score = (doc: { title: string; excerpt: string; category: string; text: string }) => {
      let s = 0;
      if (lower(doc.title).includes(needle)) s += 1000;
      if (lower(doc.category).includes(needle)) s += 300;
      if (lower(doc.excerpt).includes(needle)) s += 200;
      s += Math.min(lower(doc.text).split(needle).length - 1, 50);
      return s;
    };
    const matches = [...getStaticSearchDocs(locale), ...dbDocs]
      .filter((doc) => lower(doc.text).includes(needle))
      .map((doc) => ({ doc, s: score(doc) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map(({ doc }) => doc)
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
