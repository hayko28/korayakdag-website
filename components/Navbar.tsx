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
    <header className="relative z-50 h-[90px] w-full bg-[#e8f2fa] shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo / İsim */}
        <a href="#hero" className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center font-black text-[30px] tracking-[-4px] text-[#123b63]">
            KA
          </div>

          <div className="leading-none">
            <div className="text-[25px] font-black tracking-tight text-[#123b63]">
              Koray Akdağ
            </div>

            <div className="mt-1 text-[12px] font-medium tracking-[2px] text-orange-500">
              STRATEJİ VE İŞ GELİŞTİRME DANIŞMANI
            </div>
          </div>
        </a>

        {/* Masaüstü Menü */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[16px] font-medium text-[#123b63] transition hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobil Menü Butonu */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#123b63]/20 bg-white/60 lg:hidden"
          aria-label="Menüyü aç"
        >
          <span className="h-0.5 w-6 bg-[#123b63]" />
          <span className="h-0.5 w-6 bg-[#123b63]" />
          <span className="h-0.5 w-6 bg-[#123b63]" />
        </button>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="absolute left-0 top-[90px] w-full border-t border-[#123b63]/10 bg-[#e8f2fa] shadow-lg lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#123b63]/10 py-4 text-base font-medium text-[#123b63] transition hover:text-orange-500"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}