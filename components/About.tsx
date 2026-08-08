const STRINGS = {
  tr: {
    label: "Hakkımda",
    heading: (
      <>
        Strateji ile büyüyen,
        <br />
        güven ve kalıcı değer
        <br />
        oluşturan iş birlikleri.
      </>
    ),
    p1: "İş dünyasında sürdürülebilir başarının; doğru strateji, güçlü iş birlikleri ve güvene dayalı ilişkilerle mümkün olduğuna inanıyorum.",
    p2: "Satış yönetimi, iş geliştirme ve stratejik iş ortaklıkları alanlarında edindiğim deneyimle; şirketlerin uzun vadeli büyüme hedeflerine katkı sağlayan çözümler geliştiriyorum.",
    p3: "Güven, sürdürülebilir ilişkiler ve sonuç odaklı çalışma anlayışıyla kurumlara değer katan, uzun vadeli iş birlikleri oluşturuyorum.",
  },
  en: {
    label: "About Me",
    heading: (
      <>
        Growth through strategy,
        <br />
        building trust and
        <br />
        lasting value.
      </>
    ),
    p1: "I believe that sustainable success in business is only possible with the right strategy, strong partnerships, and trust-based relationships.",
    p2: "With my experience in sales management, business development, and strategic partnerships, I develop solutions that contribute to companies' long-term growth objectives.",
    p3: "I build long-term partnerships that create value for organizations, guided by trust, sustainable relationships, and a results-oriented approach.",
  },
};

export default function About({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const t = STRINGS[lang];

  return (
    <section
      id="about"
      className="bg-white py-20 scroll-mt-[110px]"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <p className="text-orange-500 text-2xl font-bold uppercase tracking-[2px] mb-5">
            {t.label}
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#071A2F] leading-tight">
            {t.heading}
          </h2>
        </div>

        <div>
          <p className="text-gray-700 text-xl leading-8 mb-6">
            {t.p1}
          </p>

          <p className="text-gray-700 text-xl leading-8 mb-6">
            {t.p2}
          </p>

          <p className="text-gray-700 text-xl leading-8">
            {t.p3}
          </p>
        </div>

      </div>
    </section>
  );
}
