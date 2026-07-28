export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Arka Plan */}

      <div className="absolute inset-0 -z-20">
        <img
          src="/hero-bg.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Koyu Katman */}

      <div className="absolute inset-0 bg-[#071A2F]/45 -z-10"></div>

      {/* İçerik */}

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">

        <div className="max-w-2xl">

          <h1 className="text-white font-black leading-[1.05] text-5xl sm:text-6xl lg:text-7xl">
            Büyüme
            <br />
            Tesadüf
            <br />
            Değildir.
          </h1>

          <h2 className="text-orange-400 font-bold mt-8 text-2xl sm:text-3xl lg:text-4xl">
            Doğru Stratejinin Sonucudur.
          </h2>

          <blockquote className="border-l-4 border-orange-400 pl-6 mt-10 italic text-gray-200 text-xl lg:text-2xl leading-10">
            "Satmak Bugünü,
            <br />
            Üretmek Yarını,
            <br />
            Ürettiğini Satmak Bir Ülkenin
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
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-semibold"
            >
              İletişime Geç
            </a>

            <a
              href="#services"
              className="border border-white/30 hover:border-orange-400 hover:text-orange-400 transition px-8 py-4 rounded-full text-white font-semibold"
            >
              Hizmetler
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}