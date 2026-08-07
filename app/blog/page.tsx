import Link from "next/link";
import Image from "next/image";
import BlogHero from "@/components/blog/BlogHero";
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

  const allPosts = [...BLOG_POSTS, ...databasePosts];

  return (
    <div className="bg-white">
      <BlogHero />

      <section className="pb-16 pt-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2"
              >
                {"image" in post && post.image ? (
                  <div className="relative mb-6 h-48 overflow-hidden rounded-2xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-orange-50 text-5xl">
                    ✍️
                  </div>
                )}

                <h2 className="text-2xl font-bold text-[#071A2F]">
                  {post.title}
                </h2>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>

                <span className="mt-4 inline-block font-semibold text-orange-500">
                  Devamını Oku →
                </span>
              </Link>
            ))}
          </div>
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
