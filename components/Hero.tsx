import Globe from "./Globe";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#071A2F] flex items-center pt-24 lg:pt-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

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
            güçlü iş birlikleri ve güvene dayalı ilişkilerle mümkün
            olduğuna inanıyorum.
          </p>

        </div>

        {/* Sağ Taraf */}

        <div className="flex justify-center items-center mt-12 lg:mt-0">
          <Globe />
        </div>

      </div>
    </section>
  );
}