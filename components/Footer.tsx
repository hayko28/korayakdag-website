"use client";

import { OPEN_CONTACT_FORM_EVENT } from "@/components/Contact";

const STRINGS = {
  tr: {
    title: "Strateji ve İş Geliştirme Danışmanı",
    blurb:
      "Devlet destekleri, yatırım teşvikleri ve yurt dışı büyümede uçtan uca danışmanlık.",
    linksHeading: "Hızlı Linkler",
    links: [
      { name: "Hakkımda", href: "#about" },
      { name: "Uzmanlık Alanları", href: "#expertise" },
      { name: "Hizmetler", href: "#services" },
      { name: "Blog", href: "#blog" },
    ],
    contactHeading: "İletişim",
    cta: "Ücretsiz Ön Görüşme →",
    legalHeading: "Yasal",
    privacy: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
    rights: "© 2026 Tüm Hakları Saklıdır.",
    privacyHref: "/gizlilik-politikasi",
    homePath: "/",
  },
  en: {
    title: "Strategy & Business Development Consultant",
    blurb:
      "End-to-end consulting on government incentives, investment support, and international growth.",
    linksHeading: "Quick Links",
    links: [
      { name: "About", href: "#about" },
      { name: "Expertise", href: "#expertise" },
      { name: "Services", href: "#services" },
      { name: "Blog", href: "#blog" },
    ],
    contactHeading: "Contact",
    cta: "Free Consultation →",
    legalHeading: "Legal",
    privacy: "Privacy Policy & Data Protection Notice",
    rights: "© 2026 All Rights Reserved.",
    privacyHref: "/en/privacy-policy",
    homePath: "/en",
  },
};

export default function Footer({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const t = STRINGS[lang];

  return (
    <footer className="bg-[#031120] text-gray-400">
      <div className="mx-auto max-w-7xl px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-2xl font-bold text-white">Koray Akdağ</h3>
            <p className="mt-1 text-sm font-semibold text-orange-400">{t.title}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">{t.blurb}</p>
            <a
              href="https://www.linkedin.com/in/koray-akda%C4%9F-07709368/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-5 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-white transition hover:bg-white/10"
            >
              in
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wide text-white">
              {t.linksHeading}
            </h4>
            <ul className="space-y-3">
              {t.links.map((link) => (
                <li key={link.name}>
                  <a href={`${t.homePath}${link.href}`} className="text-sm transition hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wide text-white">
              {t.contactHeading}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+905060931828" className="text-sm transition hover:text-white">
                  0506 093 18 28
                </a>
              </li>
              <li>
                <a
                  href="mailto:koray.akdag@sistemglobal.com.tr"
                  className="text-sm transition hover:text-white"
                >
                  koray.akdag@sistemglobal.com.tr
                </a>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_CONTACT_FORM_EVENT))}
              className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              {t.cta}
            </button>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wide text-white">
              {t.legalHeading}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={t.privacyHref} className="text-sm transition hover:text-white">
                  {t.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm md:flex-row">
          <p>{t.rights}</p>
          <p>{t.title}</p>
        </div>
      </div>
    </footer>
  );
}
