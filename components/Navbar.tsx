"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Ana Sayfa", href: "#hero" },
    { name: "Hakkımda", href: "#about" },
    { name: "Uzmanlık Alanları", href: "#expertise" },
    { name: "Hizmetler", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-[9999] w-full h-[78px] bg-[#e8f2fa]/95 backdrop-blur-md shadow-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">

        <a
          href="#hero"
          className="flex flex-col justify-center"
        >
          <div className="text-[24px] font-black text-[#123b63]">
            Koray Akdağ
          </div>

          <div className="mt-0.5 text-[13px] font-semibold tracking-[1.6px] text-orange-500">
            STRATEJİ VE İŞ GELİŞTİRME DANIŞMANI
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[#123b63] transition hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#123b63]/20 bg-white/70 lg:hidden"
          aria-label="Menüyü aç"
        >
          <span className="h-0.5 w-5 bg-[#123b63]" />
          <span className="h-0.5 w-5 bg-[#123b63]" />
          <span className="h-0.5 w-5 bg-[#123b63]" />
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 top-[78px] w-full bg-[#e8f2fa] shadow-lg lg:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[#123b63]/10 px-6 py-4 text-[#123b63]"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}