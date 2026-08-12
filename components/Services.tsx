"use client";

import { useState } from "react";

export const categoriesByLang = {
  tr: [
    {
      title: "⚖️ Hukuk Danışmanlığı",
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
      title: "🌍 Yurt Dışı Şirket Kuruluşları",
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
      title: "🚀 İhracat Teşvikleri",
      items: [
        "Uluslararası İş Geliştirme",
        "Yurt Dışı Pazar Analizleri",
        "Ticaret Bakanlığı Destekleri",
      ],
    },
    {
      title: "💻 Teknoloji ve Ar-Ge Destekleri",
      items: [
        "Teknopark'a Giriş",
        "Ar-Ge Tasarım Merkezi",
        "TEKMER Danışmanlığı",
        "Proje Yazımı",
        "Mali ve Teknik Sürdürme Hizmetleri",
      ],
    },
    {
      title: "💰 Yatırım Destekleri",
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
      title: "📊 Vergi ve Finansal Yönetim",
      items: [
        "Ulusal Vergi Danışmanlığı",
        "Uluslararası Vergi Danışmanlığı",
        "Mali ve Finansal Danışmanlık",
      ],
    },
    {
      title: "📈 Şirket Değerleme",
      items: [
        "Şirket Değerleme",
        "Şirket Birleşmesi (M&A)",
        "Due Diligence",
        "Finansal Analiz",
      ],
    },
    {
      title: "🧾 Yeminli Mali Müşavirlik",
      items: [
        "Bağımsız Denetim",
        "Tam Tasdik",
        "KDV İade",
      ],
    },
    {
      title: "🌱 Sürdürülebilirlik",
      items: [
        "Karbon Ayak İzi",
        "Su Ayak İzi",
        "TSRS ve Sürdürülebilirlik Raporları",
        "Güvence Denetimi",
      ],
    },
    {
      title: "🛡️ Marka ve Patent",
      items: [
        "Patent Başvurusu",
        "Yurt İçi Marka Başvurusu",
        "Yurt Dışı Marka Başvurusu",
        "Marka Tescili",
        "Telif Hakları",
      ],
    },
    {
      title: "👥 SGK ve Bordro",
      items: [
        "Sosyal Güvenlik Mevzuatı Danışmanlığı",
        "Fesih, İhbar ve Kıdem Mevzuatı",
        "SGK Teşvikleri",
        "Bordro Hizmeti",
      ],
    },
    {
      title: "🌐 Uluslararası Fon ve Kredi Danışmanlığı",
      items: [
        "Uluslararası Fon Danışmanlığı",
        "Kredi Süreçleri",
        "Yatırım Finansmanı",
      ],
    },
    {
      title: "🏢 Kurumsal Gelişim ve Yönetim Danışmanlığı",
      items: [
        "Organizasyon ve Süreç Tasarımı",
        "Performans Yönetimi",
        "Kurumsallaşma",
        "Stratejik Planlama",
      ],
    },
    {
      title: "🤖 Yazılım ve Yapay Zekâ Çözümleri",
      items: [
        "Yapay Zekâ Danışmanlığı",
        "AI Agent Çözümleri",
        "Süreç Otomasyonu",
        "CRM ve Satış Teknolojileri",
      ],
    },
    {
      title: "💵 Finans Danışmanlığı",
      items: [
        "Finansal Analiz",
        "Bütçe ve Planlama",
        "Yatırım ve Teşvik",
        "Finansal Performans",
      ],
    },
    {
      title: "📣 Pazarlama ve Satış Geliştirme",
      items: [
        "Satış Stratejisi",
        "Kanal ve Bayi Yönetimi",
        "CRM Süreçleri",
        "Müşteri Kazanımı",
      ],
    },
    {
      title: "🖥️ Web Sitesi Oluşturma",
      items: [
        "Bireysel Web Sitesi",
        "Kurumsal Web Sitesi",
        "Ticari Web Sitesi",
      ],
    },
  ],
  en: [
    {
      title: "⚖️ Legal Consulting",
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
      title: "🌍 Overseas Company Formation",
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
      title: "🚀 Export Incentives",
      items: [
        "International Business Development",
        "Overseas Market Analysis",
        "Ministry of Trade Support Programs",
      ],
    },
    {
      title: "💻 Technology & R&D Support",
      items: [
        "Technopark Entry",
        "R&D / Design Center",
        "TEKMER Consulting",
        "Project Writing",
        "Financial & Technical Follow-up Services",
      ],
    },
    {
      title: "💰 Investment Incentives",
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
      title: "📊 Tax & Financial Management",
      items: [
        "Domestic Tax Consulting",
        "International Tax Consulting",
        "Financial & Fiscal Consulting",
      ],
    },
    {
      title: "📈 Company Valuation",
      items: [
        "Company Valuation",
        "Mergers & Acquisitions (M&A)",
        "Due Diligence",
        "Financial Analysis",
      ],
    },
    {
      title: "🧾 Certified Public Accountancy",
      items: [
        "Independent Audit",
        "Full Certification (Tam Tasdik)",
        "VAT Refund",
      ],
    },
    {
      title: "🌱 Sustainability",
      items: [
        "Carbon Footprint",
        "Water Footprint",
        "TSRS & Sustainability Reports",
        "Assurance Audit",
      ],
    },
    {
      title: "🛡️ Trademark & Patent",
      items: [
        "Patent Application",
        "Domestic Trademark Application",
        "International Trademark Application",
        "Trademark Registration",
        "Copyrights",
      ],
    },
    {
      title: "👥 Social Security & Payroll",
      items: [
        "Social Security Legislation Consulting",
        "Termination, Notice & Severance Legislation",
        "Social Security Incentives",
        "Payroll Services",
      ],
    },
    {
      title: "🌐 International Funding & Credit Consulting",
      items: [
        "International Fund Consulting",
        "Credit Processes",
        "Investment Financing",
      ],
    },
    {
      title: "🏢 Corporate Development & Management Consulting",
      items: [
        "Organizational & Process Design",
        "Performance Management",
        "Institutionalization",
        "Strategic Planning",
      ],
    },
    {
      title: "🤖 Software & AI Solutions",
      items: [
        "AI Consulting",
        "AI Agent Solutions",
        "Process Automation",
        "CRM & Sales Technologies",
      ],
    },
    {
      title: "💵 Financial Consulting",
      items: [
        "Financial Analysis",
        "Budgeting & Planning",
        "Investment & Incentives",
        "Financial Performance",
      ],
    },
    {
      title: "📣 Marketing & Sales Development",
      items: [
        "Sales Strategy",
        "Channel & Dealer Management",
        "CRM Processes",
        "Customer Acquisition",
      ],
    },
    {
      title: "🖥️ Website Creation",
      items: [
        "Personal Website",
        "Corporate Website",
        "Commercial Website",
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
    tr: { title: "Şirket Kuruluşu ve Uluslararasılaşma" },
    en: { title: "Company Formation & Internationalization" },
    categoryIndexes: [1],
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
    tr: { title: "Pazarlama, Satış ve Dijital" },
    en: { title: "Marketing, Sales & Digital" },
    categoryIndexes: [15, 13, 16],
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

            <div className="grid gap-6 sm:grid-cols-2">
              {activeGroup.categoryIndexes.map((catIndex) => {
                const category = categories[catIndex];
                return (
                  <div key={catIndex}>
                    <h4 className="mb-3 text-sm font-bold text-orange-300">
                      {category.title}
                    </h4>
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
