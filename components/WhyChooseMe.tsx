const ITEMS = {
  tr: [
    {
      icon: "🤝",
      title: "Güvene Dayalı İş Birliği",
      text: "Uzun vadeli, şeffaf ve karşılıklı güvene dayanan ilişkiler kurarım; süreç boyunca aynı muhatapla çalışırsınız.",
    },
    {
      icon: "📚",
      title: "Güncel ve Resmi Kaynaklara Dayalı Danışmanlık",
      text: "Devlet destekleri ve teşviklerde her zaman güncel mevzuatı ve resmi kurum kaynaklarını takip ederim.",
    },
    {
      icon: "🌍",
      title: "Geniş Kapsamlı Deneyim",
      text: "Yurt içi ve yurt dışı şirket kuruluşundan yatırım teşviklerine kadar birçok alanda uçtan uca destek sağlarım.",
    },
    {
      icon: "🎯",
      title: "Sonuç Odaklı Yaklaşım",
      text: "Her sürecin somut, ölçülebilir bir hedefe hizmet etmesini önceliklendiririm.",
    },
    {
      icon: "🔒",
      title: "Gizlilik",
      text: "Şirket bilgileriniz ve süreç detaylarınız gizlilik ilkesiyle korunur.",
    },
    {
      icon: "📞",
      title: "Doğrudan İletişim",
      text: "Aracı kurum ya da ekip yerine doğrudan benimle görüşür, süreci birebir takip edersiniz.",
    },
  ],
  en: [
    {
      icon: "🤝",
      title: "Trust-Based Partnership",
      text: "I build long-term, transparent relationships based on mutual trust; you work with the same point of contact throughout.",
    },
    {
      icon: "📚",
      title: "Consulting Grounded in Official Sources",
      text: "For government grants and incentives, I always follow up-to-date legislation and official institutional sources.",
    },
    {
      icon: "🌍",
      title: "Broad Experience",
      text: "I provide end-to-end support across domestic and international company formation, investment incentives, and more.",
    },
    {
      icon: "🎯",
      title: "Results-Oriented Approach",
      text: "I make sure every process serves a concrete, measurable goal.",
    },
    {
      icon: "🔒",
      title: "Confidentiality",
      text: "Your company information and process details are protected under strict confidentiality.",
    },
    {
      icon: "📞",
      title: "Direct Communication",
      text: "You work directly with me, not an intermediary team, and follow the process one-on-one.",
    },
  ],
};

const STRINGS = {
  tr: { label: "Neden Ben", heading: "Neden Beni Tercih Etmelisiniz?" },
  en: { label: "Why Me", heading: "Why Choose Me?" },
};

export default function WhyChooseMe({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const items = ITEMS[lang];
  const t = STRINGS[lang];

  return (
    <section
      id="why-choose-me"
      className="bg-[#071A2F] py-20 lg:py-24 text-white scroll-mt-[1px]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-lg sm:text-xl font-bold uppercase tracking-[2px] mb-3">
            {t.label}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            {t.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 p-8 transition hover:border-orange-400"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
