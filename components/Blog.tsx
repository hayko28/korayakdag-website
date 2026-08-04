import Link from "next/link";
import Image from "next/image";
import { initializeDatabase, sql } from "@/lib/database";

const posts = [
  {
    slug: "tubitak-1501-1507-ar-ge-destekleri-2026",
    title: "TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri (2026)",
    excerpt:
      "2026 ikinci dönem çağrısında neler değişti, kimler başvurabilir ve güçlü bir başvuru nasıl kurgulanır?",
    image: "/tubitak-1501-1507-kapak.png",
  },
  {
    slug: "teknopark-nedir-avantajlari",
    title: "Teknopark Nedir? Avantajları Nelerdir?",
    excerpt:
      "Teknopark başvurusu, vergi ve KDV avantajları, SGK teşvikleri, uzaktan çalışma, proje türleri ve Ar-Ge Merkezi farkları.",
    image: "/teknopark-kapak.png",
  },
];

export default async function Blog() {
  await initializeDatabase();

  const databasePosts = await sql`
    SELECT slug, title, excerpt
    FROM posts
    WHERE status = 'published'
    ORDER BY published_at DESC
  `;

  const allPosts = [...posts, ...databasePosts];

  return (
    <section
      id="blog"
      className="relative bg-white pb-16 pt-5 scroll-mt-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* BAŞLIK */}

        <div className="mb-12 text-center">

          <p className="mb-3 text-lg font-bold uppercase tracking-[2px] text-orange-500 sm:text-xl">
            Blog
          </p>

          <h2 className="text-3xl font-black text-[#071A2F] sm:text-4xl lg:text-5xl">
            Yazılarım
          </h2>

        </div>


        {/* KARTLAR */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {allPosts.map((post) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2"
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
                Devamını Oku →
              </span>

            </Link>

          ))}


          {/* 3. KART - YAKINDA */}

          {allPosts.length < 3 &&
            Array.from({ length: 3 - allPosts.length }).map((_, item) => (

              <div
                key={`empty-${item}`}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl"
              >

                <div className="mb-6 h-48 rounded-2xl bg-gray-100" />

                <h3 className="text-2xl font-bold text-[#071A2F]">
                  Blog Yazısı
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  Yakında yatırım teşvikleri, iş geliştirme, satış yönetimi
                  ve strateji üzerine içerikler burada yayınlanacak.
                </p>

              </div>

            ))}

        </div>

      </div>
    </section>
  );
}