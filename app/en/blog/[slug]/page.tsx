import { notFound } from "next/navigation";
import BlogLayout from "@/components/blog/BlogLayout";
import { initializeDatabase, sql } from "@/lib/database";

export const dynamic = "force-dynamic";

export default async function PostPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  await initializeDatabase();
  const rows = await sql`SELECT title, excerpt, content, published_at FROM posts WHERE slug = ${slug} AND status = 'published' AND locale = 'en'`;
  const post = rows[0];
  if (!post) notFound();

  return (
    <BlogLayout
      title={post.title}
      description={post.excerpt}
      category="BLOG • CONTENT"
      date={
        post.published_at
          ? new Date(post.published_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "2026"
      }
      readTime="5 Min Read"
      slug={slug}
      lang="en"
    >
      <div className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed space-y-6">
        {post.content
          .split("\n")
          .filter(Boolean)
          .map((paragraph: string, index: number) => (
            <p key={index} className="text-lg leading-8 text-gray-700">
              {paragraph}
            </p>
          ))}
      </div>
    </BlogLayout>
  );
}
