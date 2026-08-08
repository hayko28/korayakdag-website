"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { getEnglishSlug, getTurkishSlug } from "@/lib/blog-translations";
import BlogSearch from "@/components/blog/BlogSearch";

function getAlternateLocale(pathname: string): {
  href: string;
  label: string;
  available: boolean;
} {
  // EN -> TR
  if (pathname === "/en") return { href: "/", label: "TR", available: true };
  if (pathname === "/en/blog")
    return { href: "/blog", label: "TR", available: true };

  const enBlogMatch = pathname.match(/^\/en\/blog\/([^/]+)$/);
  if (enBlogMatch) {
    const trSlug = getTurkishSlug(enBlogMatch[1]);
    return trSlug
      ? { href: `/blog/${trSlug}`, label: "TR", available: true }
      : { href: "/blog", label: "TR", available: true };
  }

  if (pathname.startsWith("/en")) {
    return { href: "/", label: "TR", available: true };
  }

  // TR -> EN
  if (pathname === "/") return { href: "/en", label: "EN", available: true };
  if (pathname === "/blog")
    return { href: "/en/blog", label: "EN", available: true };

  const trBlogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (trBlogMatch) {
    const enSlug = getEnglishSlug(trBlogMatch[1]);
    return enSlug
      ? { href: `/en/blog/${enSlug}`, label: "EN", available: true }
      : { href: "/en/blog", label: "EN", available: false };
  }

  return { href: "/en", label: "EN", available: true };
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEn = (pathname ?? "/").startsWith("/en");
  const alternate = getAlternateLocale(pathname ?? "/");

  const links = isEn
    ? [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Expertise", href: "#expertise" },
        { name: "Services", href: "#services" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
      ]
    : [
        { name: "Ana Sayfa", href: "#hero" },
        { name: "Hakkımda", href: "#about" },
        { name: "Uzmanlık Alanları", href: "#expertise" },
        { name: "Hizmetler", href: "#services" },
        { name: "Blog", href: "#blog" },
        { name: "İletişim", href: "#contact" },
      ];

  const LanguageSwitch = ({ className = "" }: { className?: string }) => (
    <div
      className={`flex overflow-hidden rounded-lg border border-[#123b63]/20 ${className}`}
    >
      {isEn ? (
        alternate.available ? (
          <a
            href={alternate.href}
            className="px-3 py-1.5 text-[13px] font-semibold text-[#123b63] transition hover:bg-[#123b63]/10"
          >
            TR
          </a>
        ) : (
          <span
            title="Turkish version not available"
            aria-disabled="true"
            className="cursor-not-allowed px-3 py-1.5 text-[13px] font-semibold text-[#123b63]/40"
          >
            TR
          </span>
        )
      ) : (
        <span className="bg-[#123b63] px-3 py-1.5 text-[13px] font-semibold text-white">
          TR
        </span>
      )}

      <span className="w-px bg-[#123b63]/20" />

      {isEn ? (
        <span className="bg-[#123b63] px-3 py-1.5 text-[13px] font-semibold text-white">
          EN
        </span>
      ) : alternate.available ? (
        <a
          href={alternate.href}
          className="px-3 py-1.5 text-[13px] font-semibold text-[#123b63] transition hover:bg-[#123b63]/10"
        >
          EN
        </a>
      ) : (
        <span
          title="İngilizce çevirisi henüz yok"
          aria-disabled="true"
          className="cursor-not-allowed px-3 py-1.5 text-[13px] font-semibold text-[#123b63]/40"
        >
          EN
        </span>
      )}
    </div>
  );

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
            {isEn
              ? "STRATEGY & BUSINESS DEVELOPMENT CONSULTANT"
              : "STRATEJİ VE İŞ GELİŞTİRME DANIŞMANI"}
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

        <div className="flex items-center gap-3">
          <BlogSearch lang={isEn ? "en" : "tr"} variant="navbar" />

          <LanguageSwitch />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#123b63]/20 bg-white/70 lg:hidden"
            aria-label={isEn ? "Open menu" : "Menüyü aç"}
          >
            <span className="h-0.5 w-5 bg-[#123b63]" />
            <span className="h-0.5 w-5 bg-[#123b63]" />
            <span className="h-0.5 w-5 bg-[#123b63]" />
          </button>
        </div>
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
