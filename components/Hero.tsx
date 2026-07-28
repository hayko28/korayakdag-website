export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#071A2F] flex items-center pt-28 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">

        {/* Sol Taraf */}

        <div className="text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
            Büyüme
            <br />
            Tesadüf
            <br />
            Değildir.
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-orange-400 font-bold mt-6">
            Doğru Stratejinin Sonucudur.
          </h2>

          <blockquote className="border-l-4 border-orange-400 pl-5 mt-10 italic text-gray-300 text-lg sm:text-xl lg:text-2xl leading-8 lg:leading-10">
            "Satmak Bugünü,
            <br />
            Üretmek Yarını,
            <br />
            Ürettiğini Satmak Bir Ülkenin Kaderini Değiştirir."
          </blockquote>

          <p className="text-gray-300 text-lg sm:text-xl mt-10 leading-8 max-w-xl mx-auto lg:mx-0">
            İş dünyasında sürdürülebilir başarının; doğru strateji,
            güçlü iş birlikleri ve güvene dayalı ilişkilerle mümkündür.
          </p>

        </div>

        {/* Sağ Taraf */}

        <div className="flex justify-center mt-10 lg:mt-0">

          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[520px] lg:h-[520px]">

            <div className="absolute inset-0 rounded-full border border-white/10"></div>

            <div className="absolute inset-8 lg:inset-10 rounded-full border border-white/10"></div>

            <div className="absolute inset-16 lg:inset-20 rounded-full border border-white/10"></div>

            <div className="absolute inset-24 lg:inset-32 rounded-full bg-gradient-to-br from-orange-400 to-blue-500 opacity-90 blur-sm"></div>

          </div>

        </div>

      </div>
    </section>
  );
}