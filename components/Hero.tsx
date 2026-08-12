"use client";

import { OPEN_CONTACT_FORM_EVENT } from "@/components/Contact";

const STRINGS = {
  tr: {
    kicker: "Strateji & İş Geliştirme",
    heading: (
      <>
        Büyüme tesadüf değil,
        <br />
        <em className="not-italic text-orange-400">doğru stratejinin</em> sonucudur.
      </>
    ),
    lead: "Global vizyon ve stratejik yaklaşımla işinizi bir üst seviyeye taşıyoruz — devlet destekleri, yatırım teşvikleri ve yurt dışı büyümede uçtan uca danışmanlık.",
    ctaPrimary: "Ücretsiz Ön Görüşme Talep Et",
    ctaSecondary: "Hizmetleri İncele",
    stats: [
      { value: "15+", label: "Yıllık Deneyim" },
      { value: "13", label: "Ülkede Kuruluş Desteği" },
      { value: "700+", label: "Kişilik Uzman Ekip" },
    ],
    portraitName: "Koray Akdağ",
    portraitTitle: "Strateji ve İş Geliştirme Uzmanı",
  },
  en: {
    kicker: "Strategy & Business Development",
    heading: (
      <>
        Growth isn&apos;t luck —
        <br />
        it&apos;s the result of <em className="not-italic text-orange-400">the right strategy</em>.
      </>
    ),
    lead: "With global vision and a strategic approach, we take your business to the next level — end-to-end consulting on government incentives, investment support, and international growth.",
    ctaPrimary: "Request a Free Consultation",
    ctaSecondary: "Explore Services",
    stats: [
      { value: "15+", label: "Years of Experience" },
      { value: "13", label: "Countries Supported" },
      { value: "700+", label: "Expert Team Members" },
    ],
    portraitName: "Koray Akdağ",
    portraitTitle: "Strategy & Business Development Expert",
  },
};

export default function Hero({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const t = STRINGS[lang];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#0A1B30] py-16 lg:py-20"
    >
      {/* Bağlantı çizgileri deseni */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#2A4468" strokeWidth="1" fill="none">
          <path d="M40,320 Q220,180 420,90" />
          <path d="M420,90 Q480,140 560,120" />
          <path d="M40,320 Q260,340 420,90" strokeDasharray="3 5" />
        </g>
        <g fill="#D9670F">
          <circle cx="40" cy="320" r="3.5" />
          <circle cx="420" cy="90" r="3.5" />
          <circle cx="560" cy="120" r="3.5" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:px-8">

        {/* Metin */}
        <div className="order-2 lg:order-1">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-orange-300">
            <span className="inline-block h-px w-5 bg-orange-500" />
            {t.kicker}
          </span>

          <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            {t.heading}
          </h1>

          <p className="mb-8 max-w-[46ch] text-base leading-relaxed text-[#B9C4D3] sm:text-lg">
            {t.lead}
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_CONTACT_FORM_EVENT))}
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              {t.ctaPrimary} →
            </button>
            <a
              href="#services"
              className="inline-flex items-center rounded-xl border border-white/25 px-5 py-3.5 text-sm font-semibold text-[#E7ECF2] transition hover:bg-white/10"
            >
              {t.ctaSecondary}
            </a>
          </div>

          <div className="flex flex-wrap gap-8">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-extrabold text-white sm:text-2xl">{stat.value}</div>
                <div className="text-xs text-[#8FA0B5]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Görsel — tam daire portre */}
        <div className="order-1 flex flex-col items-center gap-5 lg:order-2">
          <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full ring-4 ring-white/10 shadow-2xl sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/hero-pg.png)",
                backgroundSize: "227% auto",
                backgroundPosition: "100% 29%",
              }}
              role="img"
              aria-label={t.portraitName}
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-orange-400/30" />
          </div>

          <div className="text-center">
            <div className="text-base font-extrabold text-white">{t.portraitName}</div>
            <div className="mt-0.5 text-xs font-semibold text-orange-400">{t.portraitTitle}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
