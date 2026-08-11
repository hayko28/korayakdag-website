import Link from "next/link";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import BlogComments from "@/components/blog/BlogComments";
import BackButton from "@/components/BackButton";
import { initializeDatabase, sql } from "@/lib/database";
import { EN_STATIC_POSTS } from "@/lib/blog-translations";

export const dynamic = "force-dynamic";

const BlogPageEn = async () => {
  await initializeDatabase();

  const dbPosts = await sql`
    SELECT slug, title, excerpt
    FROM posts
    WHERE status = 'published' AND locale = 'en'
    ORDER BY published_at DESC
  `;

  const allPosts = [...EN_STATIC_POSTS, ...dbPosts] as {
    slug: string;
    title: string;
    excerpt: string;
  }[];

  return (
    <div className="bg-white">
      <BlogHero lang="en" />

      <section className="pb-16 pt-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {allPosts.length > 0 ? (
            <BlogList posts={allPosts} basePath="/en/blog" lang="en" />
          ) : (
            <div className="mx-auto max-w-2xl rounded-3xl border border-gray-100 bg-white p-12 text-center shadow-xl">
              <div className="mb-6 flex justify-center text-5xl">✍️</div>
              <h2 className="text-2xl font-bold text-[#071A2F]">
                English articles are coming soon
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                We are currently preparing English versions of our articles.
                Please check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#071A2F] p-10 text-center text-white shadow-xl">
            <h2 className="mb-4 text-3xl font-bold">
              Have Questions or Need Consulting?
            </h2>
            <p className="mb-8 text-lg leading-8 text-gray-300">
              Get in touch with us to determine the most suitable support and
              incentive programs for your company.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/en#contact"
                className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 shadow-lg"
              >
                Get in Touch
              </Link>
              <Link
                href="/en"
                className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
              >
                Home
              </Link>
            </div>

            <div className="mt-4 flex justify-center">
              <BackButton
                lang="en"
                fallbackHref="/en"
                className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
              />
            </div>
          </div>

          <BlogComments />
        </div>
      </section>
    </div>
  );
};

export default BlogPageEn;
