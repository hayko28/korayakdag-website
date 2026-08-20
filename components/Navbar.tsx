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

  if (pathname === "/en/privacy-policy")
    return { href: "/gizlilik-politikasi", label: "TR", available: true };

  if (pathname.startsWith("/en")) {
    return { href: "/", label: "TR", available: true };
  }

  // TR -> EN
  if (pathname === "/") return { href: "/en", label: "EN", available: true };
  if (pathname === "/blog")
    return { href: "/en/blog", label: "EN", available: true };
  if (pathname === "/gizlilik-politikasi")
    return { href: "/en/privacy-policy", label: "EN", available: true };

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

  const homePath = isEn ? "/en" : "/";

  const links = isEn
    ? [
        { name: "Home", href: `${homePath}#hero` },
        { name: "About", href: `${homePath}#about` },
        { name: "Expertise", href: `${homePath}#expertise` },
        { name: "Services", href: `${homePath}#services` },
        { name: "Blog", href: `${homePath}#blog` },
        { name: "Contact", href: `${homePath}#contact` },
      ]
    : [
        { name: "Ana Sayfa", href: `${homePath}#hero` },
        { name: "Hakkımda", href: `${homePath}#about` },
        { name: "Uzmanlık Alanları", href: `${homePath}#expertise` },
        { name: "Hizmetler", href: `${homePath}#services` },
        { name: "Güncel Gelişmeler", href: "/guncel-gelismeler" },
        { name: "Destek Uygunluk Analizi", href: "/destek-uygunluk-analizi" },
        { name: "Blog", href: `${homePath}#blog` },
        { name: "İletişim", href: `${homePath}#contact` },
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
          href={`${homePath}#hero`}
          className="flex min-w-0 flex-col justify-center"
        >
          <div className="truncate text-[13px] font-black tracking-tight text-white sm:text-[19px] lg:text-[21px]">
            {isEn ? "Business Development Services" : "İş Geliştirme Hizmetleri"}
          </div>

          <div className="mt-0.5 hidden whitespace-nowrap text-[11.5px] font-medium tracking-[1px] text-[#9FB2C9] sm:block">
            Koray Akdağ — {isEn ? "Strategic Consulting" : "Stratejik Danışmanlık"}
          </div>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[14px] font-medium text-[#C9D6E4] transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`${homePath}#hero`}
            aria-label={isEn ? "Home" : "Ana Sayfa"}
            title={isEn ? "Home" : "Ana Sayfa"}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition hover:border-orange-400 hover:text-orange-400"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M4 11.5 12 4l8 7.5" />
              <path d="M6 9.5V20h12V9.5" />
            </svg>
          </a>

          <BlogSearch lang={isEn ? "en" : "tr"} variant="navbar" />

          <LanguageSwitch />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/10 xl:hidden"
            aria-label={isEn ? "Open menu" : "Menüyü aç"}
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 top-[78px] w-full bg-[#0F2A47] shadow-lg xl:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 px-6 py-4 text-[#E7ECF2] transition hover:border-orange-400 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
