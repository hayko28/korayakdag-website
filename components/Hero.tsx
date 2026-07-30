export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] max-h-[850px] min-h-[550px] w-full overflow-hidden bg-[#020B18]"
    >
      {/* HERO GÖRSELİ */}
      <img
        src="/hero-pg.png"
        alt="Koray Akdağ"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_35%]
        "
      />

      {/* Scroll göstergesi */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-11 w-7 items-center justify-center rounded-full border border-white/50 bg-black/10 backdrop-blur-sm">
          <span className="animate-bounce text-lg text-orange-400">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}