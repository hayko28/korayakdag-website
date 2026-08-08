const ITEMS = {
  tr: [
    {
      title: "🎯 Stratejik Danışmanlık",
      text: "Şirketlerin sürdürülebilir büyüme hedefleri doğrultusunda stratejik yol haritaları oluşturuyorum.",
    },
    {
      title: "📈 İş Geliştirme",
      text: "Yeni pazarlar, yeni müşteriler ve stratejik büyüme fırsatları geliştiriyorum.",
    },
    {
      title: "🤝 Stratejik İş Ortaklıkları",
      text: "Yüksek katma değer sağlayan iş birlikleri kuruyor ve yönetiyorum.",
    },
    {
      title: "💼 Satış Yönetimi",
      text: "Satış süreçlerinin geliştirilmesi ve performansın artırılması konusunda danışmanlık veriyorum.",
    },
    {
      title: "📊 Yönetim Danışmanlığı",
      text: "Yönetim ekiplerinin karar alma süreçlerini güçlendirecek çözümler sunuyorum.",
    },
    {
      title: "🚀 Kurumsal Büyüme",
      text: "Şirketlerin sürdürülebilir ve ölçeklenebilir büyüme stratejileri oluşturmasına destek oluyorum.",
    },
  ],
  en: [
    {
      title: "🎯 Strategic Consulting",
      text: "I create strategic roadmaps aligned with companies' sustainable growth objectives.",
    },
    {
      title: "📈 Business Development",
      text: "I develop new markets, new clients, and strategic growth opportunities.",
    },
    {
      title: "🤝 Strategic Partnerships",
      text: "I build and manage high value-added business partnerships.",
    },
    {
      title: "💼 Sales Management",
      text: "I provide consulting on improving sales processes and increasing performance.",
    },
    {
      title: "📊 Management Consulting",
      text: "I offer solutions that strengthen the decision-making processes of management teams.",
    },
    {
      title: "🚀 Corporate Growth",
      text: "I support companies in building sustainable and scalable growth strategies.",
    },
  ],
};

const STRINGS = {
  tr: { label: "Uzmanlık Alanları", heading: "Deneyimle Güçlenen Uzmanlık" },
  en: { label: "Areas of Expertise", heading: "Expertise Built Through Experience" },
};

export default function Expertise({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const items = ITEMS[lang];
  const t = STRINGS[lang];

  return (
    <section
      id="expertise"
      className="bg-white py-20 lg:py-28 scroll-mt-0 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-lg sm:text-xl font-bold uppercase tracking-[2px] mb-3">
            {t.label}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A2F]">
            {t.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#071A2F] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
