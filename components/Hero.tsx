export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#020B18]"
    >
      {/* Ana Hero Görseli */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Koray Akdağ"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Hafif renk katmanı */}
      <div className="absolute inset-0 bg-[#020B18]/10" />

      {/* Hero içeriği */}
      <div className="relative z-10 min-h-screen w-full">
        {/* Görselin üzerine ekstra yazı EKLEMİYORUZ.
            Çünkü slogan, dünya ve kişi görselin içinde. */}

        {/* Scroll göstergesi */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="flex h-12 w-8 items-center justify-center rounded-full border border-white/60 bg-black/10 backdrop-blur-sm"
          >
            <span className="animate-bounce text-lg text-orange-400">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}