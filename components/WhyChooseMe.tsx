const ITEMS = {
  tr: [
    {
      icon: "handshake",
      title: "Güvene Dayalı İş Birliği",
      text: "Uzun vadeli, şeffaf ve karşılıklı güvene dayanan ilişkiler kurarım; süreç boyunca aynı muhatapla çalışırsınız.",
    },
    {
      icon: "book",
      title: "Güncel ve Resmi Kaynaklara Dayalı Danışmanlık",
      text: "Devlet destekleri ve teşviklerde her zaman güncel mevzuatı ve resmi kurum kaynaklarını takip ederim.",
    },
    {
      icon: "globe",
      title: "Geniş Kapsamlı Deneyim",
      text: "Yurt içi ve yurt dışı şirket kuruluşundan yatırım teşviklerine kadar birçok alanda uçtan uca destek sağlarım.",
    },
    {
      icon: "target",
      title: "Sonuç Odaklı Yaklaşım",
      text: "Her sürecin somut, ölçülebilir bir hedefe hizmet etmesini önceliklendiririm.",
    },
    {
      icon: "lock",
      title: "Gizlilik",
      text: "Şirket bilgileriniz ve süreç detaylarınız gizlilik ilkesiyle korunur.",
    },
    {
      icon: "users",
      title: "Kurumsal Güç, Birebir İlgi",
      text: "Sistem Global Danışmanlık bünyesindeki 700 kişilik uzman ekibin bilgi birikimi ve kaynaklarına dayanarak çalışırım; sürecinizi yine doğrudan benimle, birebir takip edersiniz.",
    },
  ],
  en: [
    {
      icon: "handshake",
      title: "Trust-Based Partnership",
      text: "I build long-term, transparent relationships based on mutual trust; you work with the same point of contact throughout.",
    },
    {
      icon: "book",
      title: "Consulting Grounded in Official Sources",
      text: "For government grants and incentives, I always follow up-to-date legislation and official institutional sources.",
    },
    {
      icon: "globe",
      title: "Broad Experience",
      text: "I provide end-to-end support across domestic and international company formation, investment incentives, and more.",
    },
    {
      icon: "target",
      title: "Results-Oriented Approach",
      text: "I make sure every process serves a concrete, measurable goal.",
    },
    {
      icon: "lock",
      title: "Confidentiality",
      text: "Your company information and process details are protected under strict confidentiality.",
    },
    {
      icon: "users",
      title: "Institutional Strength, Personal Attention",
      text: "I draw on the expertise and resources of Sistem Global Danışmanlık's 700-person team of specialists, while you still work directly with me, one-on-one, throughout the process.",
    },
  ],
};

const ICONS: Record<string, React.ReactNode> = {
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 12.5 6.5 8.7l5.3 3.7" />
      <path d="M22.5 12.5 17.5 8.7l-5.3 3.7" />
      <path d="M9 14.6 10.6 12.6 12 14.6 13.4 12.6 15 14.6" />
      <path d="M3 11 5 9.6" />
      <path d="M21 11 19 9.6" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6.2c-1.5-1.1-3.6-1.7-6.5-1.7-1 0-1.5.3-1.5 1v12.4c0 .7.5 1 1.5 1 2.9 0 5 .6 6.5 1.7" />
      <path d="M12 6.2c1.5-1.1 3.6-1.7 6.5-1.7 1 0 1.5.3 1.5 1v12.4c0 .7-.5 1-1.5 1-2.9 0-5 .6-6.5 1.7Z" />
      <path d="M12 6.2v14.4" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.4 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.4-3.6-8.5s1.2-6.1 3.6-8.5Z" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2.2" />
      <path d="M7.5 11V7.5a4.5 4.5 0 0 1 9 0V11" />
      <circle cx="12" cy="15.7" r="1.3" fill="currentColor" stroke="none" />
      <path d="M12 17v1.8" />
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
};

const STRINGS = {
  tr: { heading: "Neden Tercih Etmelisiniz?" },
  en: { heading: "Why Choose Me?" },
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            {t.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white/5 border-2 border-white/10 p-8 transition duration-300 hover:border-orange-400 hover:bg-orange-500/5 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 mb-4 transition duration-300 group-hover:scale-110 group-hover:bg-orange-500/25 [&>svg]:h-6 [&>svg]:w-6">
                {ICONS[item.icon]}
              </span>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
