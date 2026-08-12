"use client";

import { useState } from "react";

export const categoriesByLang = {
  tr: [
    {
      icon: "scale",
      title: "Hukuk Danışmanlığı",
      items: [
        "Sözleşme Hukuku",
        "Dava Hukuku",
        "İş Hukuku",
        "Vergi Hukuku",
        "Halka Arz",
        "Şirket Kurma",
        "KVKK Danışmanlığı",
        "Aile Anayasası",
        "Tasfiye ve Tür Değişikliği",
      ],
    },
    {
      icon: "globe",
      title: "Yurt Dışı Şirket Kuruluşları",
      items: [
        "🇵🇱 Polonya",
        "🇮🇹 İtalya",
        "🇩🇪 Almanya",
        "🇬🇧 İngiltere",
        "🇳🇱 Hollanda",
        "🇦🇪 Birleşik Arap Emirlikleri (Dubai)",
        "🇸🇦 Suudi Arabistan",
        "🇺🇸 Amerika Birleşik Devletleri",
        "🇸🇬 Singapur",
        "🇦🇿 Azerbaycan",
        "🇰🇿 Kazakistan",
        "🇺🇿 Özbekistan",
        "🇧🇬 Bulgaristan",
      ],
    },
    {
      icon: "rocket",
      title: "İhracat Teşvikleri",
      items: [
        "Uluslararası İş Geliştirme",
        "Yurt Dışı Pazar Analizleri",
        "Ticaret Bakanlığı Destekleri",
      ],
    },
    {
      icon: "chip",
      title: "Teknoloji ve Ar-Ge Destekleri",
      items: [
        "Teknopark'a Giriş",
        "Ar-Ge Tasarım Merkezi",
        "TEKMER Danışmanlığı",
        "Proje Yazımı",
        "Mali ve Teknik Sürdürme Hizmetleri",
      ],
    },
    {
      icon: "coins",
      title: "Yatırım Destekleri",
      items: [
        "TÜBİTAK Destekleri",
        "TURQUALITY",
        "KOSGEB",
        "Yatırım Teşvik Belgesi",
        "IPARD",
        "TKDK",
        "Tarım ve Hayvancılık Destekleri",
      ],
    },
    {
      icon: "bars",
      title: "Vergi ve Finansal Yönetim",
      items: [
        "Ulusal Vergi Danışmanlığı",
        "Uluslararası Vergi Danışmanlığı",
        "Mali ve Finansal Danışmanlık",
      ],
    },
    {
      icon: "trending",
      title: "Şirket Değerleme",
      items: [
        "Şirket Değerleme",
        "Şirket Birleşmesi (M&A)",
        "Due Diligence",
        "Finansal Analiz",
      ],
    },
    {
      icon: "file",
      title: "Yeminli Mali Müşavirlik",
      items: [
        "Bağımsız Denetim",
        "Tam Tasdik",
        "KDV İade",
      ],
    },
    {
      icon: "leaf",
      title: "Sürdürülebilirlik",
      items: [
        "Karbon Ayak İzi",
        "Su Ayak İzi",
        "TSRS ve Sürdürülebilirlik Raporları",
        "Güvence Denetimi",
      ],
    },
    {
      icon: "shield",
      title: "Marka ve Patent",
      items: [
        "Patent Başvurusu",
        "Yurt İçi Marka Başvurusu",
        "Yurt Dışı Marka Başvurusu",
        "Marka Tescili",
        "Telif Hakları",
      ],
    },
    {
      icon: "users",
      title: "SGK ve Bordro",
      items: [
        "Sosyal Güvenlik Mevzuatı Danışmanlığı",
        "Fesih, İhbar ve Kıdem Mevzuatı",
        "SGK Teşvikleri",
        "Bordro Hizmeti",
      ],
    },
    {
      icon: "landmark",
      title: "Uluslararası Fon ve Kredi Danışmanlığı",
      items: [
        "Uluslararası Fon Danışmanlığı",
        "Kredi Süreçleri",
        "Yatırım Finansmanı",
      ],
    },
    {
      icon: "building",
      title: "Kurumsal Gelişim ve Yönetim Danışmanlığı",
      items: [
        "Organizasyon ve Süreç Tasarımı",
        "Performans Yönetimi",
        "Kurumsallaşma",
        "Stratejik Planlama",
      ],
    },
    {
      icon: "robot",
      title: "Yazılım ve Yapay Zekâ Çözümleri",
      items: [
        "Yapay Zekâ Danışmanlığı",
        "AI Agent Çözümleri",
        "Süreç Otomasyonu",
        "CRM ve Satış Teknolojileri",
      ],
    },
    {
      icon: "wallet",
      title: "Finans Danışmanlığı",
      items: [
        "Finansal Analiz",
        "Bütçe ve Planlama",
        "Yatırım ve Teşvik",
        "Finansal Performans",
      ],
    },
    {
      icon: "send",
      title: "Pazarlama ve Satış Geliştirme",
      items: [
        "Satış Stratejisi",
        "Kanal ve Bayi Yönetimi",
        "CRM Süreçleri",
        "Müşteri Kazanımı",
      ],
    },
    {
      icon: "monitor",
      title: "Web Sitesi Oluşturma",
      items: [
        "Bireysel Web Sitesi",
        "Kurumsal Web Sitesi",
        "Ticari Web Sitesi",
      ],
    },
    {
      icon: "globe",
      title: "Uluslararası İş Geliştirme",
      items: [
        "Yurt Dışında Müşteri Bulma",
        "Yurt Dışı Pazarlarına Açılma",
        "Yurt Dışı Pazar Analizleri",
      ],
    },
  ],
  en: [
    {
      icon: "scale",
      title: "Legal Consulting",
      items: [
        "Contract Law",
        "Litigation Law",
        "Labor Law",
        "Tax Law",
        "Public Offering (IPO)",
        "Company Formation",
        "Data Protection (KVKK) Consulting",
        "Family Constitution",
        "Liquidation & Type Conversion",
      ],
    },
    {
      icon: "globe",
      title: "Overseas Company Formation",
      items: [
        "🇵🇱 Poland",
        "🇮🇹 Italy",
        "🇩🇪 Germany",
        "🇬🇧 United Kingdom",
        "🇳🇱 Netherlands",
        "🇦🇪 United Arab Emirates (Dubai)",
        "🇸🇦 Saudi Arabia",
        "🇺🇸 United States",
        "🇸🇬 Singapore",
        "🇦🇿 Azerbaijan",
        "🇰🇿 Kazakhstan",
        "🇺🇿 Uzbekistan",
        "🇧🇬 Bulgaria",
      ],
    },
    {
      icon: "rocket",
      title: "Export Incentives",
      items: [
        "International Business Development",
        "Overseas Market Analysis",
        "Ministry of Trade Support Programs",
      ],
    },
    {
      icon: "chip",
      title: "Technology & R&D Support",
      items: [
        "Technopark Entry",
        "R&D / Design Center",
        "TEKMER Consulting",
        "Project Writing",
        "Financial & Technical Follow-up Services",
      ],
    },
    {
      icon: "coins",
      title: "Investment Incentives",
      items: [
        "TÜBİTAK Grants",
        "TURQUALITY",
        "KOSGEB",
        "Investment Incentive Certificate",
        "IPARD",
        "TKDK",
        "Agriculture & Livestock Support",
      ],
    },
    {
      icon: "bars",
      title: "Tax & Financial Management",
      items: [
        "Domestic Tax Consulting",
        "International Tax Consulting",
        "Financial & Fiscal Consulting",
      ],
    },
    {
      icon: "trending",
      title: "Company Valuation",
      items: [
        "Company Valuation",
        "Mergers & Acquisitions (M&A)",
        "Due Diligence",
        "Financial Analysis",
      ],
    },
    {
      icon: "file",
      title: "Certified Public Accountancy",
      items: [
        "Independent Audit",
        "Full Certification (Tam Tasdik)",
        "VAT Refund",
      ],
    },
    {
      icon: "leaf",
      title: "Sustainability",
      items: [
        "Carbon Footprint",
        "Water Footprint",
        "TSRS & Sustainability Reports",
        "Assurance Audit",
      ],
    },
    {
      icon: "shield",
      title: "Trademark & Patent",
      items: [
        "Patent Application",
        "Domestic Trademark Application",
        "International Trademark Application",
        "Trademark Registration",
        "Copyrights",
      ],
    },
    {
      icon: "users",
      title: "Social Security & Payroll",
      items: [
        "Social Security Legislation Consulting",
        "Termination, Notice & Severance Legislation",
        "Social Security Incentives",
        "Payroll Services",
      ],
    },
    {
      icon: "landmark",
      title: "International Funding & Credit Consulting",
      items: [
        "International Fund Consulting",
        "Credit Processes",
        "Investment Financing",
      ],
    },
    {
      icon: "building",
      title: "Corporate Development & Management Consulting",
      items: [
        "Organizational & Process Design",
        "Performance Management",
        "Institutionalization",
        "Strategic Planning",
      ],
    },
    {
      icon: "robot",
      title: "Software & AI Solutions",
      items: [
        "AI Consulting",
        "AI Agent Solutions",
        "Process Automation",
        "CRM & Sales Technologies",
      ],
    },
    {
      icon: "wallet",
      title: "Financial Consulting",
      items: [
        "Financial Analysis",
        "Budgeting & Planning",
        "Investment & Incentives",
        "Financial Performance",
      ],
    },
    {
      icon: "send",
      title: "Marketing & Sales Development",
      items: [
        "Sales Strategy",
        "Channel & Dealer Management",
        "CRM Processes",
        "Customer Acquisition",
      ],
    },
    {
      icon: "monitor",
      title: "Website Creation",
      items: [
        "Personal Website",
        "Corporate Website",
        "Commercial Website",
      ],
    },
    {
      icon: "globe",
      title: "International Business Development",
      items: [
        "Finding Customers Abroad",
        "Expanding into Foreign Markets",
        "Overseas Market Analysis",
      ],
    },
  ],
};

// Her grup, categoriesByLang dizisindeki kategorilere index ile referans verir.
export const GROUP_DEFS = [
  {
    icon: "building",
    tr: { title: "Devlet Destekleri ve Teşvikler" },
    en: { title: "Government Grants & Incentives" },
    categoryIndexes: [2, 4, 3, 11],
  },
  {
    icon: "globe",
    tr: { title: "Yurt Dışı Şirket Kuruluşu ve Uluslararası İş Geliştirme" },
    en: { title: "Overseas Company Formation & International Business Development" },
    categoryIndexes: [1, 17],
  },
  {
    icon: "scale",
    tr: { title: "Hukuk, Vergi ve Mali Danışmanlık" },
    en: { title: "Legal, Tax & Financial Consulting" },
    categoryIndexes: [0, 5, 7, 14, 10],
  },
  {
    icon: "bars",
    tr: { title: "Kurumsal Gelişim ve Değerleme" },
    en: { title: "Corporate Development & Valuation" },
    categoryIndexes: [6, 12, 9, 8],
  },
  {
    icon: "target",
    tr: { title: "Pazarlama ve Satış Geliştirme" },
    en: { title: "Marketing & Sales Development" },
    categoryIndexes: [15],
  },
  {
    icon: "chip",
    tr: { title: "Yazılım ve Yapay Zekâ Çözümleri" },
    en: { title: "Software & AI Solutions" },
    categoryIndexes: [13, 16],
  },
] as const;

const ICONS: Record<string, React.ReactNode> = {
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19h16" />
      <path d="M6 19V9l6-4 6 4v10" />
      <path d="M10 19v-6h4v6" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.4 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.4-3.6-8.5s1.2-6.1 3.6-8.5Z" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 3 7 6M12 3l5 3M7 6l-3.5 7a3.5 3.5 0 0 0 7 0L7 6ZM17 6l-3.5 7a3.5 3.5 0 0 0 7 0L17 6ZM4 21h16" />
    </svg>
  ),
  bars: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19V10M10 19V5M16 19v-7M4 19h16" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9.5 7V4M14.5 7V4M9.5 20v-3M14.5 20v-3M7 9.5H4M7 14.5H4M20 9.5h-3M20 14.5h-3" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5c2.8 1.6 4.5 4.6 4.5 8.2 0 2-.6 3.8-1.6 5.3l-2.9 3-2.9-3c-1-1.5-1.6-3.3-1.6-5.3 0-3.6 1.7-6.6 4.5-8.2Z" />
      <circle cx="12" cy="10.5" r="1.6" />
      <path d="M9 16.5 6.5 19a3 3 0 0 0-.8 2l2-.8Z" />
      <path d="M15 16.5 17.5 19a3 3 0 0 1 .8 2l-2-.8Z" />
    </svg>
  ),
  coins: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6.2" rx="7" ry="2.3" />
      <path d="M5 6.2v5.8c0 1.3 3.1 2.3 7 2.3s7-1 7-2.3V6.2" />
      <path d="M5 12v5.8C5 19.1 8.1 20 12 20s7-.9 7-2.2V12" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-9" />
      <path d="M15 6h6v6" />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3h7l4 4v14H7Z" />
      <path d="M14 3v4h4" />
      <path d="M9.5 12h6M9.5 15.5h6M9.5 8.5h3" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-8.5 5-14.5 14-15.5 1.2 9.3-5 15-14 15.5Z" />
      <path d="M5 19c2-4.3 5.3-7.6 9.5-9.7" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 5-3 8.5-7 9.5-4-1-7-4.5-7-9.5V6Z" />
      <path d="M9 12.2l2 2 4-4.4" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8.5" cy="8" r="3.2" />
      <path d="M2.2 19.5c0-3.4 2.8-6 6.3-6s6.3 2.6 6.3 6" />
      <circle cx="17" cy="8.8" r="2.6" />
      <path d="M15.3 13.1c2.9.3 5 2.6 5 6.4" />
    </svg>
  ),
  landmark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l9 5H3Z" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
      <path d="M3 21h18" />
    </svg>
  ),
  robot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="9" width="14" height="10" rx="3" />
      <circle cx="9.5" cy="14" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="14" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 9V6" />
      <circle cx="12" cy="4.5" r="1.3" />
      <path d="M3 13h2M19 13h2" />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8A2.5 2.5 0 0 1 5.5 5.5h10A2.5 2.5 0 0 1 18 8" />
      <rect x="3" y="8" width="18" height="11" rx="2.5" />
      <circle cx="16" cy="13.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 3 3 10.5l7 2.4 2.3 7L21 3Z" />
      <path d="M10.3 12.9 21 3" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="12" rx="1.8" />
      <path d="M8 21h8M12 16.5V21" />
      <path d="M9.5 8.5 7.5 10.5l2 2M14.5 8.5l2 2-2 2" />
    </svg>
  ),
};

const STRINGS = {
  tr: {
    label: "Hizmetler",
    heading: "Profesyonel Danışmanlık Hizmetleri",
    close: "Kapat",
    areaCount: (n: number) => `${n} hizmet alanı`,
  },
  en: {
    label: "Services",
    heading: "Professional Consulting Services",
    close: "Close",
    areaCount: (n: number) => `${n} service areas`,
  },
};

export default function Services({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const [open, setOpen] = useState<number | null>(null);
  const categories = categoriesByLang[lang];
  const t = STRINGS[lang];
  const activeGroup = open !== null ? GROUP_DEFS[open] : null;

  return (
    <section
      id="services"
      className="bg-[#071A2F] pt-12 pb-16 text-white scroll-mt-[1px]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-10">
          <p className="text-orange-500 text-2xl font-bold uppercase tracking-[2px] mb-3">
            {t.label}
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {GROUP_DEFS.map((group, index) => (
            <button
              key={group.icon}
              onClick={() => setOpen(index)}
              className="flex flex-col items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-6 text-left transition hover:border-orange-400"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 [&>svg]:h-6 [&>svg]:w-6">
                {ICONS[group.icon]}
              </span>
              <h3 className="text-lg font-semibold leading-snug">
                {group[lang].title}
              </h3>
              <span className="text-xs text-gray-400">
                {t.areaCount(group.categoryIndexes.length)}
              </span>
            </button>
          ))}
        </div>

      </div>

      {activeGroup && (
        <div className="fixed inset-0 z-[10000]" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
          <button type="button" aria-label={t.close} onClick={() => setOpen(null)} className="absolute inset-0 bg-[#071A2F]/70" />
          <div className="relative mx-auto mt-12 max-h-[82vh] max-w-2xl overflow-y-auto rounded-2xl bg-[#0B2340] border border-white/10 p-8 shadow-2xl">
            <div className="mb-6 flex items-start justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 [&>svg]:h-5 [&>svg]:w-5">
                  {ICONS[activeGroup.icon]}
                </span>
                <h3 id="service-modal-title" className="text-2xl font-bold">
                  {activeGroup[lang].title}
                </h3>
              </div>
              <button type="button" onClick={() => setOpen(null)} aria-label={t.close} className="rounded-lg p-1 text-2xl text-white hover:bg-white/10">×</button>
            </div>

            <div className="sm:columns-2 sm:gap-6">
              {activeGroup.categoryIndexes.map((catIndex) => {
                const category = categories[catIndex];
                return (
                  <div key={catIndex} className="mb-6 break-inside-avoid last:mb-0">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400 [&>svg]:h-4 [&>svg]:w-4">
                        {ICONS[category.icon]}
                      </span>
                      <h4 className="text-sm font-bold text-orange-300">
                        {category.title}
                      </h4>
                    </div>
                    <ul className="grid gap-2">
                      {category.items.map((item, i) => (
                        <li
                          key={i}
                          className="bg-white/5 rounded-lg px-3 py-2 text-sm text-gray-200 border border-white/5"
                        >
                          ✔ {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
