export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-white pt-10 pb-20 scroll-mt-16 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-orange-500 text-lg sm:text-xl font-bold uppercase tracking-[2px] mb-3">
            Blog
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A2F]">
            Yakında Yayında
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:-translate-y-2 transition duration-300"
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