import Link from "next/link";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import { BLOG_POSTS } from "@/lib/blog-data";
import { initializeDatabase, sql } from "@/lib/database";

export const dynamic = "force-dynamic";

const BlogPage = async () => {
  await initializeDatabase();

  const databasePosts = await sql`
    SELECT slug, title, excerpt
    FROM posts
    WHERE status = 'published'
    ORDER BY published_at DESC
  `;

  const allPosts = [...BLOG_POSTS, ...databasePosts] as {
    slug: string;
    title: string;
    excerpt: string;
    category?: string;
    image?: string;
  }[];

  return (
    <div className="bg-white">
      <BlogHero />

      <section className="pb-16 pt-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlogList posts={allPosts} />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#071A2F] p-10 text-center text-white shadow-xl">
            <h2 className="mb-4 text-3xl font-bold">
              Sorularınız veya Danışmanlık İhtiyacınız mı Var?
            </h2>
            <p className="mb-8 text-lg leading-8 text-gray-300">
              Şirketiniz için en uygun destek ve teşvik programlarını
              belirlemek için bizimle iletişime geçebilirsiniz.
            </p>
            <Link
              href="/#contact"
              className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 shadow-lg"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
