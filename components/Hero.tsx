export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#020B18]"
    >
      {/* HERO GÖRSELİ */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Koray Akdağ - Strateji ve İş Geliştirme Danışmanı"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Hafif karartma - görselin parlaklığını bozmadan yazıları okunabilir tutar */}
      <div className="absolute inset-0 bg-black/5" />

      {/* İçerik */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-28 lg:px-10 lg:pt-32">

        {/* Sol tarafta görseldeki yazıların bulunduğu alan */}
        <div className="w-full max-w-2xl">

          <h1 className="text-4xl font-black leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Büyüme
            <br />
            Tesadüf Değildir.
          </h1>

          <h2 className="mt-6 max-w-xl text-2xl font-bold leading-tight text-orange-400 sm:text-3xl lg:text-4xl">
            Doğru Stratejinin
            <br />
            Sonucudur.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-gray-200 sm:text-lg lg:text-xl lg:leading-8">
            Global vizyonum ve stratejik yaklaşımım ile
            işinizi bir üst seviyeye taşıyor, sürdürülebilir
            büyüme için doğru çözümler sunuyorum.
          </p>

          {/* Butonlar */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-lg bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              İLETİŞİME GEÇ
              <span className="ml-3">→</span>
            </a>

            <a
              href="#about"
              className="rounded-lg border border-white/40 bg-black/20 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:border-orange-400 hover:text-orange-400"
            >
              HAKKIMDA
            </a>

          </div>

        </div>

      </div>

      {/* Aşağı kaydırma işareti */}
      <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 lg:block">
        <a
          href="#about"
          className="flex h-11 w-7 items-center justify-center rounded-full border border-white/50"
        >
          <span className="mt-1 text-orange-400 animate-bounce">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}