"use client";

import { useState } from "react";

const services = [
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
];

const COLUMN_COUNT = 3;

function toColumns<T>(items: T[], columnCount: number): T[][] {
  const perColumn = Math.ceil(items.length / columnCount);
  return Array.from({ length: columnCount }, (_, col) =>
    items.slice(col * perColumn, col * perColumn + perColumn)
  );
}

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);
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
            Hizmetler
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Profesyonel Danışmanlık Hizmetleri
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