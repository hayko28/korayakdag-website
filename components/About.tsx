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
    paragraphs: [
      "İş dünyasında sürdürülebilir başarının; doğru strateji, güçlü iş birlikleri ve doğru uzmanlıkların bir araya gelmesiyle mümkün olduğuna inanıyorum.",
      "Satış yönetimi, iş geliştirme ve stratejik iş ortaklıkları alanındaki deneyimimle; şirketlerin büyüme, yatırım, teşvik, ihracat ve kurumsal gelişim hedeflerine yönelik doğru çözümlere ulaşmalarına katkı sağlıyorum.",
      "Bu yaklaşımı, Sistem Global'in farklı uzmanlık alanlarını ve kurumsal deneyimini iş dünyasının ihtiyaçlarıyla buluşturan güçlü bir ekosistem içerisinde sürdürüyorum. Yatırım teşviklerinden devlet desteklerine, Ar-Ge ve inovasyondan sürdürülebilirliğe, ihracat ve uluslararasılaşmadan kurumsal gelişime kadar farklı alanlardaki uzmanlıkları, şirketlerin ihtiyaçları doğrultusunda bir araya getirerek uçtan uca değer yaratmayı hedefliyorum.",
      "Benim için iş geliştirme yalnızca yeni müşteriler kazanmak değil; doğru ihtiyacı doğru uzmanlıkla buluşturmak, güvene dayalı ilişkiler kurmak ve ölçülebilir sonuçlar üreten uzun vadeli iş birlikleri geliştirmek.",
      "Kısacası, şirketlerin büyüme hedefleri ile ihtiyaç duydukları doğru çözüm ve uzmanlıklar arasında güçlü bir köprü kuruyorum.",
    ],
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
    paragraphs: [
      "I believe that sustainable success in business is only possible with the right strategy, strong partnerships, and trust-based relationships.",
      "With my experience in sales management, business development, and strategic partnerships, I develop solutions that contribute to companies' long-term growth objectives.",
      "I build long-term partnerships that create value for organizations, guided by trust, sustainable relationships, and a results-oriented approach.",
    ],
  },
};

export default function About({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const t = STRINGS[lang];

  return (
    <section
      id="about"
      className="bg-white py-10 scroll-mt-[80px]"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-8 items-center rounded-3xl border-2 border-orange-400 px-8 py-5 lg:px-12">

          <div>
            <p className="text-orange-500 text-xl font-bold uppercase tracking-[2px] mb-4">
              {t.label}
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#071A2F] leading-tight">
              {t.heading}
            </h2>
          </div>

          <div>
            {t.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-gray-700 text-base sm:text-lg leading-6 sm:leading-7 mb-3 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
