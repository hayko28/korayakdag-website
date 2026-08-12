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
      className={`flex overflow-hidden rounded-lg border border-white/20 ${className}`}
    >
      {isEn ? (
        alternate.available ? (
          <a
            href={alternate.href}
            className="px-3 py-1.5 text-[13px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            TR
          </a>
        ) : (
          <span
            title="Turkish version not available"
            aria-disabled="true"
            className="cursor-not-allowed px-3 py-1.5 text-[13px] font-semibold text-white/30"
          >
            TR
          </span>
        )
      ) : (
        <span className="bg-orange-500 px-3 py-1.5 text-[13px] font-semibold text-white">
          TR
        </span>
      )}

      <span className="w-px bg-white/20" />

      {isEn ? (
        <span className="bg-orange-500 px-3 py-1.5 text-[13px] font-semibold text-white">
          EN
        </span>
      ) : alternate.available ? (
        <a
          href={alternate.href}
          className="px-3 py-1.5 text-[13px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          EN
        </a>
      ) : (
        <span
          title="İngilizce çevirisi henüz yok"
          aria-disabled="true"
          className="cursor-not-allowed px-3 py-1.5 text-[13px] font-semibold text-white/30"
        >
          EN
        </span>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 z-[9999] w-full h-[78px] bg-gradient-to-b from-[#0F2A47] to-[#0A1B30]/95 backdrop-blur-md shadow-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">

        <a
          href="#hero"
          className="flex min-w-0 flex-col justify-center"
        >
          <div className="truncate text-[13px] font-black tracking-tight text-white sm:text-[19px] lg:text-[21px]">
            {isEn ? "Business Development Services" : "İş Geliştirme Hizmetleri"}
          </div>

          <div className="mt-0.5 hidden whitespace-nowrap text-[11.5px] font-medium tracking-[1px] text-[#9FB2C9] sm:block">
            Koray Akdağ — {isEn ? "Strategic Consulting" : "Stratejik Danışmanlık"}
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[#C9D6E4] transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
          <BlogSearch lang={isEn ? "en" : "tr"} variant="navbar" />

          <LanguageSwitch />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/10 lg:hidden"
            aria-label={isEn ? "Open menu" : "Menüyü aç"}
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 top-[78px] w-full bg-[#0F2A47] shadow-lg lg:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 px-6 py-4 text-[#E7ECF2]"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
