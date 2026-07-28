export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 lg:pt-36"
    >
      {/* Arka Plan */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/hero-bg.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Karartma */}
      <div className="absolute inset-0 bg-[#071A2F]/40 -z-10"></div>

      {/* İçerik */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="max-w-2xl">

          <h1 className="text-white font-black leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            Büyüme
            <br />
            Tesadüf
            <br />
            Değildir.
          </h1>

          <h2 className="mt-8 text-orange-400 font-bold text-2xl sm:text-3xl lg:text-4xl">
            Doğru Stratejinin Sonucudur.
          </h2>

          <blockquote className="mt-10 border-l-4 border-orange-400 pl-6 italic text-gray-200 text-lg sm:text-xl lg:text-2xl leading-9 lg:leading-10">
            "Satmak Bugünü,
            <br />
            Üretmek Yarını,
            <br />
            Ürettiğini Satmak
            <br />
            Bir Ülkenin
            <br />
            Kaderini Değiştirir."
          </blockquote>

          <p className="mt-10 text-gray-200 text-lg lg:text-xl leading-9 max-w-xl">
            İş dünyasında sürdürülebilir başarının;
            doğru strateji, güçlü iş birlikleri ve
            güvene dayalı ilişkilerle mümkün olduğuna
            inanıyorum.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              İletişime Geç
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:border-orange-400 hover:text-orange-400"
            >
              Hizmetler
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}