const ITEMS = {
  tr: [
    {
      icon: "target",
      title: "Stratejik Danışmanlık",
      text: "Şirketlerin sürdürülebilir büyüme hedefleri doğrultusunda stratejik yol haritaları oluşturuyorum.",
    },
    {
      icon: "trending",
      title: "İş Geliştirme",
      text: "Yeni pazarlar, yeni müşteriler ve stratejik büyüme fırsatları geliştiriyorum.",
    },
    {
      icon: "handshake",
      title: "Stratejik İş Ortaklıkları",
      text: "Yüksek katma değer sağlayan iş birlikleri kuruyor ve yönetiyorum.",
    },
    {
      icon: "briefcase",
      title: "Satış Yönetimi",
      text: "Satış süreçlerinin geliştirilmesi ve performansın artırılması konusunda danışmanlık veriyorum.",
    },
    {
      icon: "bars",
      title: "Yönetim Danışmanlığı",
      text: "Yönetim ekiplerinin karar alma süreçlerini güçlendirecek çözümler sunuyorum.",
    },
    {
      icon: "rocket",
      title: "Kurumsal Büyüme",
      text: "Şirketlerin sürdürülebilir ve ölçeklenebilir büyüme stratejileri oluşturmasına destek oluyorum.",
    },
  ],
  en: [
    {
      icon: "target",
      title: "Strategic Consulting",
      text: "I create strategic roadmaps aligned with companies' sustainable growth objectives.",
    },
    {
      icon: "trending",
      title: "Business Development",
      text: "I develop new markets, new clients, and strategic growth opportunities.",
    },
    {
      icon: "handshake",
      title: "Strategic Partnerships",
      text: "I build and manage high value-added business partnerships.",
    },
    {
      icon: "briefcase",
      title: "Sales Management",
      text: "I provide consulting on improving sales processes and increasing performance.",
    },
    {
      icon: "bars",
      title: "Management Consulting",
      text: "I offer solutions that strengthen the decision-making processes of management teams.",
    },
    {
      icon: "rocket",
      title: "Corporate Growth",
      text: "I support companies in building sustainable and scalable growth strategies.",
    },
  ],
};

const ICONS: Record<string, React.ReactNode> = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-9" />
      <path d="M15 6h6v6" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 12.5 6.5 8.7l5.3 3.7" />
      <path d="M22.5 12.5 17.5 8.7l-5.3 3.7" />
      <path d="M9 14.6 10.6 12.6 12 14.6 13.4 12.6 15 14.6" />
      <path d="M3 11 5 9.6" />
      <path d="M21 11 19 9.6" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </svg>
  ),
  bars: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19V10M10 19V5M16 19v-7M4 19h16" />
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
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 mb-5 [&>svg]:h-6 [&>svg]:w-6">
                {ICONS[item.icon]}
              </span>

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
