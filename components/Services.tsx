"use client";

import { useState } from "react";

const servicesByLang = {
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

const STRINGS = {
  tr: { label: "Hizmetler", heading: "Profesyonel Danışmanlık Hizmetleri" },
  en: { label: "Services", heading: "Professional Consulting Services" },
};

const COLUMN_COUNT = 3;

function toColumns<T>(items: T[], columnCount: number): T[][] {
  const perColumn = Math.ceil(items.length / columnCount);
  return Array.from({ length: columnCount }, (_, col) =>
    items.slice(col * perColumn, col * perColumn + perColumn)
  );
}

export default function Services({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const [open, setOpen] = useState<number | null>(null);
  const services = servicesByLang[lang];
  const t = STRINGS[lang];
  const columns = toColumns(
    services.map((service, index) => ({ service, index })),
    COLUMN_COUNT
  );

  return (
    <section
      id="services"
      className="bg-[#071A2F] pt-20 pb-24 text-white scroll-mt-[1px]"
    >
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-14">
          <p className="text-orange-500 text-2xl font-bold uppercase tracking-[2px] mb-5">
            {t.label}
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {column.map(({ service, index }) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition hover:border-orange-400"
                >
                  <button
                    onClick={() =>
                      setOpen(open === index ? null : index)
                    }
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >
                    <h3 className="text-lg lg:text-xl font-semibold">
                      {service.title}
                    </h3>

                    <span className="text-3xl text-orange-400 font-light">
                      {open === index ? "−" : "+"}
                    </span>
                  </button>

                  {open === index && (
                    <div className="px-6 pb-6">
                      <ul className="grid gap-3">
                        {service.items.map((item, i) => (
                          <li
                            key={i}
                            className="bg-white/5 rounded-lg px-4 py-3 text-sm text-gray-200 border border-white/5"
                          >
                            ✔ {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
