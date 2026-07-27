export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#071A2F] flex items-center pt-28">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          

          <h1 className="text-6xl lg:text-6xl font-black leading-tight text-white">
            Büyüme
            <br />
            Tesadüf
            <br />
            Değildir.
          </h1>

          <h2 className="text-4xl text-orange-400 font-bold mt-6">
            Doğru Stratejinin Sonucudur.
          </h2>

          <blockquote className="border-l-4 border-orange-400 pl-6 mt-12 italic text-gray-300 text-2xl leading-10">
            "Satmak Bugünü,
            <br />
            Üretmek Yarını,
            <br />
            Ürettiğini Satmak Bir Ülkenin Kaderini Değiştirir."
          </blockquote>

          <p className="text-gray-300 text-xl mt-12 leading-10 max-w-xl">
            İş dünyasında sürdürülebilir başarının; doğru strateji,
            güçlü iş birlikleri ve güvene dayalı ilişkilerle mümkündür.
        
          </p>

          

</div>

        <div className="flex justify-center">

          <div className="relative w-[520px] h-[520px]">

            <div className="absolute inset-0 rounded-full border border-white/10"></div>

            <div className="absolute inset-10 rounded-full border border-white/10"></div>

            <div className="absolute inset-20 rounded-full border border-white/10"></div>

            <div className="absolute inset-32 rounded-full bg-gradient-to-br from-orange-400 to-blue-500 opacity-90 blur-sm"></div>

          </div>

        </div>

      </div>
    </section>
  );
}