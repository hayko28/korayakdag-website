import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    slug: "tubitak-1501-1507-ar-ge-destekleri-2026",
    title: "TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri (2026)",
    excerpt:
      "2026 ikinci dönem çağrısında neler değişti, kimler başvurabilir ve güçlü bir başvuru nasıl kurgulanır?",
    image: "/tubitak-1501-1507-kapak.png",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-white pt-5 pb-16 scroll-mt-12 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-orange-500 text-lg sm:text-xl font-bold uppercase tracking-[2px] mb-3">
            Blog
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A2F]">
            Yazılarım
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:-translate-y-2 transition duration-300 block"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#071A2F]">
                {post.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {post.excerpt}
              </p>

              <span className="inline-block mt-4 text-orange-500 font-semibold">
                Devamını Oku →
              </span>
            </Link>
          ))}

          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
            >
              <div className="h-48 rounded-2xl bg-gray-100 mb-6"></div>

              <h3 className="text-2xl font-bold text-[#071A2F]">
                Blog Yazısı
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Yakında yatırım teşvikleri, iş geliştirme,
                satış yönetimi ve strateji üzerine içerikler
                burada yayınlanacak.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}