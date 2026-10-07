import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yatırım Yoluyla Türk Vatandaşlığı 2026: Resmî Şartlar | Koray Akdağ",
  description: "Yatırım yoluyla Türk vatandaşlığı 2026'da gerçekte neyi gerektiriyor: 400.000 dolarlık gayrimenkul yolu ve şartları, 500.000 dolarlık iş ve finansal yollar, elde tutma süreleri ve yaygın yanlış anlamalar.",
  keywords: ["yatırım yoluyla türk vatandaşlığı 2026", "400.000 dolar gayrimenkul vatandaşlık", "sabit sermaye yatırımı vatandaşlık", "türk vatandaşlığı şartları", "5901 sayılı kanun yatırım vatandaşlık"],
  alternates: {
    canonical: "/blog/yatirim-yoluyla-turk-vatandasligi-2026-resmi-sartlar",
    languages: {
      tr: "/blog/yatirim-yoluyla-turk-vatandasligi-2026-resmi-sartlar",
      en: "/en/blog/turkish-citizenship-by-investment-2026-official-requirements",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "2026'da Türk vatandaşlığı için asgari yatırım ne kadar?",
    "a": "Resmî yönetmeliğe ve uygulayıcı özetlerine göre gayrimenkul yolunda 400.000 dolar, diğer yatırım yollarında (sabit sermaye, mevduat, fon payı) 500.000 dolar. İşlem yapmadan önce güncel tutarları teyit edin."
  },
  {
    "q": "Taşınmaz ne kadar süre elde tutulmalı?",
    "a": "Üç yıl; tapu kaydına satılmaması şerhi konur."
  },
  {
    "q": "Yapısız arsa kullanabilir miyim?",
    "a": "Hayır. 12 Aralık 2023'ten itibaren tarımsal vasıflı taşınmaz ve yapısız arsa gayrimenkul yolunda kullanılamıyor. Taşınmazda yapı bulunmalı."
  },
  {
    "q": "Türkiye'de şirket sahibi olmak vatandaşlık verir mi?",
    "a": "Hayır. Tek başına şirket sahipliği vermez. Sanayi ve Teknoloji Bakanlığı'nca belgelendirilen en az 500.000 dolarlık nitelikli sabit sermaye yatırımı ayrı bir yoldur."
  },
  {
    "q": "Yatırım yoluyla vatandaşlık ikamet izniyle aynı şey mi?",
    "a": "Hayır. İkamet izni ve vatandaşlık farklı şartlara sahip ayrı hukuki statülerdir."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yatırım Yoluyla Türk Vatandaşlığı 2026: Resmî Kurallar Ne İstiyor?"
      description="Türk vatandaşlığına giden gayrimenkul ve iş yolları, resmî tutarlar ve elde tutma süreleri, 2023'te arsa için neyin değiştiği ve sürecin neyi garanti etmediği."
      category="VATANDAŞLIK • YATIRIMCI • 2026"
      date="Ekim 2026"
      readTime="8 Dakika"
      coverImage="https://images.unsplash.com/photo-1763965367191-6455ef032c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="yatirim-yoluyla-turk-vatandasligi-2026-resmi-sartlar"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 Okumadan Önce</h2><p className="mb-6 text-lg leading-9 text-gray-700">Yatırım yoluyla vatandaşlık bir <strong>hukuki statü kararıdır</strong>, şirket kuruluş ürünü değildir. 5901 sayılı Türk Vatandaşlığı Kanunu kapsamında Cumhurbaşkanı kararıyla verilir ve kurallar uygulama yönetmeliğinde belirlenir. Bu yazı Türkiye&apos;nin yetkili kurumlarının yayımladığı resmî şartları özetler; vatandaşlık için gayrimenkul almaya veya yatırım yapmaya davet değildir. Güncel kuralları mutlaka lisanslı bir avukatla teyit edin.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. Gayrimenkul Yolu (Resmî İfadeyle)</h2><p className="mb-6 text-lg leading-9 text-gray-700">Resmî Your Key Türkiye portalına göre, Türk Vatandaşlığı Kanununun Uygulanmasına İlişkin Yönetmeliğin 20&apos;nci maddesinin ikinci fıkrasının (b) bendi uyarınca yabancı kişi, aşağıdaki durumlarda Cumhurbaşkanı kararıyla Türk vatandaşlığını kazanabilir:</p><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li><strong>En az 400.000 Amerikan Doları</strong> veya karşılığı döviz değerinde taşınmazı, tapu kaydına <strong>üç yıl satılmaması şerhi</strong> konularak satın alması; veya</li><li>Kat mülkiyeti veya kat irtifakı kurulmuş taşınmazın satış vaadi sözleşmesinin noterden düzenlenmesi, en az 400.000 dolarlık tutarın peşin yatırılması ve üç yıl devredilmeyeceği ve terkin edilmeyeceği taahhüdünün tapuya şerh edilmesi.</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">Tutar, Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından tespit edilir.</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Kural</th><th className="p-5">Ayrıntı</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Asgari değer</td><td className="p-5">400.000 dolar (19 Eylül 2018&apos;den itibaren; öncesinde 1 milyon dolar dönemi vardı)</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Para birimi</td><td className="p-5">Türk lirası seçeneği 2022&apos;de kaldırıldı; döviz tutarı Merkez Bankası&apos;na satılmak üzere bir bankaya satılmalı</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Arsa</td><td className="p-5">12 Aralık 2023&apos;ten itibaren tarımsal vasıflı taşınmaz ve yapısız arsa kullanılamıyor. Arsada yapı bulunmalı</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Elde tutma</td><td className="p-5">Üç yıl, tapuya şerh</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Alt tutar</td><td className="p-5">Eski 250.000 dolarlık yol sona erdi</td></tr></tbody></table></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. İş ve Finansal Yollar</h2><p className="mb-6 text-lg leading-9 text-gray-700">Aynı yönetmelik, gayrimenkule bağlı olmayan <strong>500.000 dolarlık</strong> yollar da öngörüyor. Yönetmeliğin uygulayıcı özetlerine göre bunlar:</p><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Sanayi ve Teknoloji Bakanlığı&apos;nca tespit edilen en az 500.000 dolarlık <strong>sabit sermaye yatırımı</strong></li><li>Üç yıl tutulan en az 500.000 dolarlık banka <strong>mevduatı</strong></li><li>En az 500.000 dolarlık <strong>gayrimenkul yatırım fonu veya girişim sermayesi yatırım fonu katılma payı</strong>nın üç yıl elde tutulması</li><li>En az 50 kişiye <strong>istihdam yaratma</strong> esaslı yol</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">Şirket sahipleri için sabit sermaye yatırımı yolu, <Link href="/blog/turkiyede-sirket-kurma-maliyeti-2026" className="font-semibold text-orange-600 underline">şirket kurma maliyeti rehberimiz</Link> ve <Link href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026" className="font-semibold text-orange-600 underline">teşvik belgesi rehberimizde</Link> anlatılan yapılarla kesişir. Nitelikli yatırım ve belgelendirmesi özeldir; sıradan bir şirket sermaye koyma işlemi otomatik olarak yeterli sayılmaz.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. Yaygın Yanlış Anlamalar</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li><strong>Türk şirketinde hisse sahibi olmak vatandaşlık değildir.</strong> Çalışma izni de vermez (<Link href="/blog/yabanci-ortak-calisma-izni-sartlari-2026" className="font-semibold text-orange-600 underline">çalışma izni rehberi</Link>).</li><li><strong>İkamet izni ve vatandaşlık ayrı yollardır.</strong> Bir taşınmaz, vatandaşlık eşiğini karşılamadan ikameti destekleyebilir.</li><li><strong>3 yıllık elde tutma şartı bağlayıcıdır.</strong> Erken satış statüyü riske atabilir.</li><li><strong>Toplam maliyet eşikten yüksektir.</strong> Harçlar, değerleme ve hukuki giderler ayrıca gelir.</li><li><strong>Kurallar değişir.</strong> Eşikler ve şartlar birkaç kez değişti (2017, 2018, 2022, 2023); eski yazılar bu yüzden çoğu zaman güncel değildir.</li></ul></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Pratik Tavsiye</h2><p className="mb-6 text-lg leading-9 text-gray-700">Vatandaşlık kararları kişisel ve uzun vadelidir. Güncel yönetmeliği ve Bakanlığın değerleme şartlarını kontrol edin, lisanslı avukat ve lisanslı değerleme uzmanıyla çalışın, ödeme ve döviz bozdurma kayıtlarını saklayın. Amaç pasaport değil Türkiye&apos;de iş varlığıysa, bu serideki şirket, çalışma izni ve teşvik yolları genellikle daha doğru başlangıçtır (<Link href="/blog/turkiyede-yatirim-yapmanin-avantajlari-2026" className="font-semibold text-orange-600 underline">avantajlar genel bakışı</Link>).</p></section>
      <section id="faq" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">5. Sık Sorulan Sorular</h2>
        <div className="space-y-6">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">{item.q}</h3>
              <p className="leading-8 text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">Sonuç</h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">Resmî kurallar birçok satış sayfasının ima ettiğinden daha dar ve katıdır. Vatandaşlığı hukuki bir karar olarak görün, güncel yönetmeliği doğrulayın ve Türkiye&apos;de yatırımın iş gerekçesinden ayırın.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık, Türkiye&apos;deki yatırımın iş tarafının kurgulanmasında destek olabilir. Vatandaşlık başvurularının kendisi için lisanslı bir göç avukatına danışın. <Link href="/#contact" className="font-semibold text-orange-600 underline">İletişime geçin</Link>.</p>
        <p className="mt-6 text-sm leading-7 text-gray-500">Ekim 2026 itibarıyla genel bilgilendirmedir; hukuki veya mali tavsiye değildir. İşlem yapmadan önce güncel kuralları ilgili kurumdan teyit edin.</p>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">İlgili Yazılar</h2>
        <div className="grid gap-6 md:grid-cols-2"><Link href="/blog/turkiyede-yatirim-yapmanin-avantajlari-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">GENEL BAKIŞ</div><h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;de Yatırım Yapmanın Avantajları 2026</h3></Link><Link href="/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">VERGİ TEŞVİKLERİ</div><h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;nin 2026 Yatırım Vergi Paketi</h3></Link></div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </BlogLayout>
  );
}
