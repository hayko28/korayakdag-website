export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#020B18] h-[calc(100vh-90px)] min-h-[650px]"
    >
      <img
        src="/hero-bg.png"
        alt="Koray Akdağ"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 pointer-events-none" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex h-11 w-7 items-center justify-center rounded-full border border-white/50 bg-black/10 backdrop-blur-sm">
          <span className="animate-bounce text-orange-400 text-lg">↓</span>
        </div>
      </div>
    </section>
  );
}