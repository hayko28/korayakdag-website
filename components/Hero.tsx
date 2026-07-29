export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-116px)] w-full overflow-hidden bg-[#020B18]"
    >
      <img
        src="/hero-bg.png"
        alt="Koray Akdağ"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </section>
  );
}