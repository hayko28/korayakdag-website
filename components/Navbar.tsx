"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#071A2F]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-5">

        {/* Logo */}

        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-white">
            Koray Akdağ
          </h1>

          <p className="text-xs lg:text-[15px] uppercase tracking-[2px] text-orange-400 mt-2">
            Strateji ve İş Geliştirme Danışmanı
          </p>
        </div>

        {/* Masaüstü Menü */}

        <nav className="hidden lg:flex items-center gap-10 text-white font-medium">

          <a href="#hero" className="hover:text-orange-400 transition">
            Ana Sayfa
          </a>

          <a href="#about" className="hover:text-orange-400 transition">
            Hakkımda
          </a>

          <a href="#expertise" className="hover:text-orange-400 transition">
            Uzmanlık Alanları
          </a>

          <a href="#services" className="hover:text-orange-400 transition">
            Hizmetler
          </a>

          <a href="#blog" className="hover:text-orange-400 transition">
            Blog
          </a>

          <a href="#contact" className="hover:text-orange-400 transition">
            İletişim
          </a>

        </nav>

        {/* Hamburger */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-4xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobil Menü */}

      {menuOpen && (
        <div className="lg:hidden bg-[#071A2F] border-t border-white/10">

          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-white/10"
          >
            Ana Sayfa
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-white/10"
          >
            Hakkımda
          </a>

          <a
            href="#expertise"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-white/10"
          >
            Uzmanlık Alanları
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-white/10"
          >
            Hizmetler
          </a>

          <a
            href="#blog"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-white/10"
          >
            Blog
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:bg-white/10"
          >
            İletişim
          </a>

        </div>
      )}

    </header>
  );
}