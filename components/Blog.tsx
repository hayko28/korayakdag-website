import Link from "next/link";
import Image from "next/image";
import { initializeDatabase, sql } from "@/lib/database";
import { BLOG_POSTS } from "@/lib/blog-data";
import { EN_STATIC_POSTS } from "@/lib/blog-translations";

const STRINGS = {
  tr: {
    label: "Blog",
    heading: "Yazılarım",
    readMore: "Devamını Oku →",
    emptyTitle: "Blog Yazısı",
    emptyText:
      "Yakında yatırım teşvikleri, iş geliştirme, satış yönetimi ve strateji üzerine içerikler burada yayınlanacak.",
    allPosts: "Tüm Yazılar →",
  },
  en: {
    label: "Blog",
    heading: "Articles",
    readMore: "Read More →",
    emptyTitle: "Article",
    emptyText:
      "More articles on investment incentives, business development, sales management, and strategy are coming soon.",
    allPosts: "All Articles →",
  },
};

export default async function Blog({
  lang = "tr",
}: {
  lang?: "tr" | "en";
}) {
  await initializeDatabase();

  const databasePosts = await sql`
    SELECT slug, title, excerpt
    FROM posts
    WHERE status = 'published' AND locale = ${lang}
    ORDER BY published_at DESC
  `;

  const staticPosts = lang === "en" ? EN_STATIC_POSTS : BLOG_POSTS;
  const allPosts = [...staticPosts, ...databasePosts].slice(0, 9);
  const basePath = lang === "en" ? "/en/blog" : "/blog";
  const t = STRINGS[lang];

  return (
    <section
      id="blog"
      className="relative bg-white pb-16 pt-5 scroll-mt-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* BAŞLIK */}

        <div className="mb-12 text-center">

          <p className="mb-3 text-lg font-bold uppercase tracking-[2px] text-orange-500 sm:text-xl">
            {t.label}
          </p>

          <h2 className="text-3xl font-black text-[#071A2F] sm:text-4xl lg:text-5xl">
            {t.heading}
          </h2>

        </div>


        {/* KARTLAR */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {allPosts.map((post) => (

            <Link
              key={post.slug}
              href={`${basePath}/${post.slug}`}
              className="block rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400 hover:bg-orange-50/40 hover:shadow-orange-400/20"
            >

              {"image" in post ? (

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

              <h3 className="text-2xl font-bold text-[#071A2F]">
                {post.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                {post.excerpt}
              </p>

              <span className="mt-4 inline-block font-semibold text-orange-500">
                {t.readMore}
              </span>

            </Link>

          ))}


          {/* YAKINDA KARTLARI */}

          {allPosts.length < 9 &&
            Array.from({ length: 9 - allPosts.length }).map((_, item) => (

              <div
                key={`empty-${item}`}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl"
              >

                <div className="mb-6 h-48 rounded-2xl bg-gray-100" />

                <h3 className="text-2xl font-bold text-[#071A2F]">
                  {t.emptyTitle}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {t.emptyText}
                </p>

              </div>

            ))}

        </div>

        <div className="mt-12 text-center">
          <Link
            href={basePath}
            className="inline-block rounded-xl border-2 border-[#071A2F] px-8 py-3 font-semibold text-[#071A2F] transition hover:bg-[#071A2F] hover:text-white"
          >
            {t.allPosts}
          </Link>
        </div>

      </div>
    </section>
  );
}
