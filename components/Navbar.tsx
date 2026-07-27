export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#071A2F]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div>
          <h1 className="text-3xl font-black text-white">
            Koray Akdağ
          </h1>

          <p className="text-[15px] uppercase tracking-[2px] text-orange-400 mt-2">
            Strateji ve İş Geliştirme Danışmanı
          </p>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-white font-medium">

          <a
            href="#hero"
            className="hover:text-orange-400 transition"
          >
            Ana Sayfa
          </a>

          <a
            href="#about"
            className="hover:text-orange-400 transition"
          >
            Hakkımda
          </a>

          <a
            href="#expertise"
            className="hover:text-orange-400 transition"
          >
            Uzmanlık Alanları
          </a>

          <a
            href="#services"
            className="hover:text-orange-400 transition"
          >
             Hizmetler
          </a>

          <a
            href="#blog"
            className="hover:text-orange-400 transition"
          >
            Blog
          </a>

          <a
            href="#contact"
            className="hover:text-orange-400 transition"
          >
            İletişim
          </a>

        </nav>

      </div>
    </header>
  );
}