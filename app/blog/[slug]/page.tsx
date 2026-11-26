import { notFound } from "next/navigation";
import BlogLayout from "@/components/blog/BlogLayout";
import { getPublishedPost } from "@/lib/published-posts";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedPost(slug, "tr");
  if (!post) return {};
  return {
    title: `${post.title} | Koray Akdağ`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedPost(slug, "tr");
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
