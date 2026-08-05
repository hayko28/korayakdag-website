import { notFound } from "next/navigation";
import BlogLayout from "@/components/blog/BlogLayout";
import { initializeDatabase, sql } from "@/lib/database";

export const dynamic = "force-dynamic";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  await initializeDatabase();
  const rows = await sql`SELECT title, excerpt, content, published_at FROM posts WHERE slug = ${slug} AND status = 'published'`;
  const post = rows[0];
  if (!post) notFound();

  return (
    <BlogLayout
      title={post.title}
      description={post.excerpt}
      category="BLOG • İÇERİK"
      date={
        post.published_at
          ? new Date(post.published_at).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "2026"
      }
      readTime="5 Dakika"
      slug={slug}
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
