export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-white pt-16 pb-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="text-orange-500 text-2xl font-bold uppercase tracking-[2px] mb-5">
            Blog
          </p>

          <h2 className="text-5xl font-black text-[#071A2F] mt-4">
            Yakında Yayında
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {[1,2,3].map((item)=>(
            <div
              key={item}
              className="rounded-3xl shadow-xl border p-8 hover:-translate-y-2 transition"
            >
              <div className="h-48 rounded-2xl bg-gray-200 mb-6"></div>

              <h3 className="text-2xl font-bold text-[#071A2F]">
                Blog Yazısı
              </h3>

              <p className="text-gray-600 mt-4 leading-8">
                Yakında yatırım teşvikleri, iş geliştirme,
                satış yönetimi ve strateji üzerine
                içerikler burada yayınlanacak.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}