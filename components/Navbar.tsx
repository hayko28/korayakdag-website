export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div>
          <h1 className="text-3xl font-black text-[#12365A]">
            Koray Akdağ
          </h1>

          <p className="text-[15px] uppercase tracking-[2px] text-orange-500 mt-2">
            Strateji ve İş Geliştirme Danışmanı
          </p>
        </div>

        <nav className="hidden lg:flex items-center gap-10 font-medium">

          <a
            href="#hero"
            className="text-[#12365A] hover:text-orange-500 transition duration-300"
          >
            Ana Sayfa
          </a>

          <a
            href="#about"
            className="text-[#12365A] hover:text-orange-500 transition duration-300"
          >
            Hakkımda
          </a>

          <a
            href="#expertise"
            className="text-[#12365A] hover:text-orange-500 transition duration-300"
          >
            Uzmanlık Alanları
          </a>

          <a
            href="#services"
            className="text-[#12365A] hover:text-orange-500 transition duration-300"
          >
            Hizmetler
          </a>

          <a
            href="#blog"
            className="text-[#12365A] hover:text-orange-500 transition duration-300"
          >
            Blog
          </a>

          <a
            href="#contact"
            className="text-[#12365A] hover:text-orange-500 transition duration-300"
          >
            İletişim
          </a>

        </nav>

      </div>
    </header>
  );
}