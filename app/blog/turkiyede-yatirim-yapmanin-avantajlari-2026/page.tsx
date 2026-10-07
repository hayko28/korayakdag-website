import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Türkiye'de Yatırım Yapmanın Avantajları 2026 | Koray Akdağ",
  description: "2026'da Türkiye'de yatırım yapmanın başlıca avantajları ve arkasındaki gerçekler: yabancı sermaye kuralları, serbest kâr transferi, teşvikler, 2026 vergi paketi, serbest bölgeler, ticaret anlaşmaları ve ihracat kapasitesi.",
  keywords: ["türkiye'de yatırım yapmanın avantajları", "türkiye'de neden yatırım yapılmalı 2026", "yabancı yatırımcı teşvikleri türkiye", "türkiye'de iş yapmanın avantajları", "doğrudan yabancı yatırım 2026"],
  alternates: {
    canonical: "/blog/turkiyede-yatirim-yapmanin-avantajlari-2026",
    languages: {
      tr: "/blog/turkiyede-yatirim-yapmanin-avantajlari-2026",
      en: "/en/blog/advantages-of-investing-in-turkey-2026",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "Türkiye'de yatırım yapmanın başlıca avantajları nelerdir?",
    "a": "Açık yabancı sermaye kuralları, güvence altındaki kâr transferi, teşvik sistemi, yeni 2026 vergi düzenlemeleri, serbest bölgeler, AB Gümrük Birliği erişimi ve yaklaşık yirmi dört serbest ticaret anlaşması ile geniş ihracat imalat kapasitesi."
  },
  {
    "q": "Yabancı biri Türkiye'de şirketin %100'üne sahip olabilir mi?",
    "a": "Çoğu sektörde evet, Türk yatırımcılarla aynı kurallarla. Bazı düzenlemeye tabi sektörlerin ruhsat veya sahiplik kuralları vardır."
  },
  {
    "q": "Türkiye ne kadar doğrudan yabancı yatırım alıyor?",
    "a": "2025'te yaklaşık 11,4 milyar dolar; 2026 için projeksiyonlar 12-15 milyar dolar."
  },
  {
    "q": "2026'da yatırımcı için en önemli vergi değişiklikleri hangileri?",
    "a": "2027 döneminden itibaren imalatçılara %12,5 kurumlar vergisi, transit ticaret ve nitelikli hizmet merkezlerinde %95 ile %100 indirim, nitelikli hizmet ihracatında %100 indirim ve Türkiye'ye yerleşen kişilere 20 yıllık yurt dışı gelir muafiyeti."
  },
  {
    "q": "Yeni bir yatırımcı nereden başlamalı?",
    "a": "İş modelinden: müşterilerin nerede olduğu, üretim, ticaret veya hizmet yapıp yapmadığınız ve şirketi kimin yöneteceği. Ardından yapıyı ve teşvikleri seçin."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türkiye'de Yatırım Yapmanın Avantajları 2026: Yabancı Yatırımcı Gerçekte Ne Elde Ediyor?"
      description="2026'da Türkiye'de yatırımın sunduklarına doğrulanmış genel bakış: açık sermaye kuralları, serbest kâr transferi, teşvik belgeleri, yeni vergi paketi, serbest bölgeler, ticaret anlaşmaları ve ihracat kapasitesi; ayrıntılı rehberlere bağlantılarla."
      category="TÜRKİYE'DE YATIRIM • GENEL BAKIŞ • 2026"
      date="Ekim 2026"
      readTime="9 Dakika"
      coverImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="turkiyede-yatirim-yapmanin-avantajlari-2026"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 Tek Paragrafta</h2><p className="mb-6 text-lg leading-9 text-gray-700">Türkiye; <strong>açık yabancı sermaye rejimi</strong>, <strong>güvence altındaki kâr transferi</strong>, katmanlı bir <strong>teşvik sistemi</strong>, imalatçılar ve bölgesel merkezler için yeni <strong>2026 vergi düzenlemeleri</strong>, <strong>serbest bölgeler</strong> ve AB Gümrük Birliği ile yaklaşık yirmi dört serbest ticaret anlaşması üzerinden <strong>tercihli pazar erişimini</strong> bir araya getiriyor. 2025&apos;te doğrudan yatırım girişi yaklaşık 11,4 milyar dolardı ve 2024-2028 UDY Stratejisi küresel akımlardan %1,5 pay hedefliyor. Her avantajın size uygulanıp uygulanmayacağını ayrıntılar ve şartlar belirler.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. Avantajlara Genel Bakış</h2><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Avantaj</th><th className="p-5">Uygulamada anlamı</th><th className="p-5">Ayrıntı</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Açık sermaye rejimi</td><td className="p-5">Çoğu sektörde %100 yabancı sahiplik, Türk yatırımcılarla aynı kurallar, izin gerekmeden</td><td className="p-5"><Link href="/blog/turkiyede-sirket-kurma-maliyeti-2026" className="font-semibold text-orange-600 underline">Kuruluş maliyeti rehberi</Link></td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Kâr transferi</td><td className="p-5">Net kâr, temettü ve satış veya tasfiye bedelleri bankalar aracılığıyla yurt dışına aktarılabilir (%15 kâr payı stopajı, vergi anlaşmasıyla indirim mümkün)</td><td className="p-5"><Link href="/blog/yabanci-sermayeli-sirket-kurulus-sonrasi-yukumlulukler-2026" className="font-semibold text-orange-600 underline">Kuruluş sonrası yükümlülükler</Link></td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Yatırım teşvik sistemi</td><td className="p-5">9903 sayılı Karar kapsamında KDV ve gümrük muafiyeti, vergi indirimi ve diğer destekler</td><td className="p-5"><Link href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026" className="font-semibold text-orange-600 underline">Teşvik belgesi rehberi</Link></td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">2026 vergi paketi</td><td className="p-5">2027&apos;den itibaren imalatçılara %12,5 kurumlar vergisi, transit ticaret ve hizmet merkezi indirimleri, yerleşen kişilere 20 yıllık muafiyet</td><td className="p-5"><Link href="/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci" className="font-semibold text-orange-600 underline">Vergi paketi</Link></td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Serbest bölgeler</td><td className="p-5">İmalat ruhsatlı şirketler için kurumlar vergisi istisnası olan 19 bölge</td><td className="p-5"><Link href="/blog/turkiyede-serbest-bolgeler-2026-yabanci-yatirimci" className="font-semibold text-orange-600 underline">Serbest bölgeler rehberi</Link></td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Pazar erişimi</td><td className="p-5">Sanayi ürünlerinde AB Gümrük Birliği ve yaklaşık yirmi dört serbest ticaret anlaşması</td><td className="p-5"><Link href="/blog/turkiye-jeostratejik-konum-yatirim-avantajlari-2026" className="font-semibold text-orange-600 underline">Jeostratejik konum</Link></td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">İhracat kapasitesi</td><td className="p-5">2025&apos;te rekor 273,4 milyar dolarlık mal ihracatı; otomotiv, kimya ve elektronik başta</td><td className="p-5"><Link href="/blog/turkiye-jeostratejik-konum-yatirim-avantajlari-2026" className="font-semibold text-orange-600 underline">Jeostratejik konum</Link></td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Ar-Ge ve teknoloji desteği</td><td className="p-5">Teknoparklar ve Ar-Ge hibeleri</td><td className="p-5"><Link href="/blog/teknopark-nedir-avantajlari" className="font-semibold text-orange-600 underline">Teknopark rehberi</Link></td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Satın alma yolu</td><td className="p-5">Yabancı alıcılar mevcut şirketleri satın alabilir; belirli eşiklerin üzerinde birleşme-devralma kontrolü var</td><td className="p-5"><Link href="/blog/turkiyede-sirket-satin-alma-yabanci-yatirimci-rehberi" className="font-semibold text-orange-600 underline">Satın alma rehberi</Link></td></tr></tbody></table></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. Hükümet Nereyi İşaret Ediyor?</h2><p className="mb-6 text-lg leading-9 text-gray-700">Türkiye&apos;nin 2024-2028 UDY Stratejisi küresel doğrudan yatırım akımlarından %1,5 pay ve Orta ve Doğu Avrupa, Orta Doğu ve Kuzey Afrika bölgesine yönelen akımlardan yaklaşık %12 pay hedefliyor. Öncelikli alanlar yeşil ve sürdürülebilir yatırım, dijital ve ileri teknolojiler, tedarik zinciri kaydırma ve yüksek istihdam ile katma değerli projeler. Nisan 2026&apos;da hükümet Güçlü Yatırım Merkezi Programı&apos;nı açıkladı ve vergi ayakları 7582 sayılı Kanun&apos;la yasalaştı.</p><p className="mb-6 text-lg leading-9 text-gray-700">2025&apos;te doğrudan yatırım girişi yaklaşık 11,4 milyar dolardı; iş dünyasının 2026 beklentisi 12-15 milyar dolar. Bunlar beklenti, taahhüt değil.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. Her Avantaj Sizden Ne İstiyor?</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li><strong>İzinler ve insan kaynağı:</strong> şirkette yönetici olarak çalışacak yabancı ortağın çalışma izni gerekir (<Link href="/blog/yabanci-ortak-calisma-izni-sartlari-2026" className="font-semibold text-orange-600 underline">rehber</Link>).</li><li><strong>Ruhsat ve şartlar:</strong> serbest bölge istisnası imalat ruhsatına, %12,5 oranı sanayi sicil belgesi ve fiilî üretime bağlıdır.</li><li><strong>Zamanlama:</strong> yatırım teşvik belgesi başvurusu yatırım başlamadan önce yapılmalıdır.</li><li><strong>Bildirim:</strong> yabancı sermayeli şirketler E-TUYS üzerinden bildirim yapar ve kâr payında stopaj keser.</li></ul></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Dengeli Bir Bakış</h2><p className="mb-6 text-lg leading-9 text-gray-700">Avantajlar şartlıdır. Kur ve enflasyon koşulları, mevzuat değişiklikleri, bölgesel çatışmalar ve izin kuralları her durumda ayrıca analiz edilmelidir. En iyi yaklaşım, iş modelinizden başlamak, yapıyı (anakara, serbest bölge, teknopark, teşvik belgesi) seçmek ve sermaye koymadan önce rakamları test etmektir.</p></section>
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
        <p className="mb-6 text-lg leading-9 text-gray-700">Türkiye gerçek bir avantaj seti sunuyor; her birinin şartları var. Bu genel bakışı, modelinize uyan iki veya üç avantajı seçmek için kullanın, karar vermeden önce her biri için ayrıntılı rehberi okuyun.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık, bu avantajları projenizle eşleştirebilir; yapıyı ve teşvik planını tasarlayabilir. <Link href="/#contact" className="font-semibold text-orange-600 underline">İletişime geçin</Link>.</p>
        <p className="mt-6 text-sm leading-7 text-gray-500">Ekim 2026 itibarıyla genel bilgilendirmedir; hukuki veya mali tavsiye değildir. İşlem yapmadan önce güncel kuralları ilgili kurumdan teyit edin.</p>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">İlgili Yazılar</h2>
        <div className="grid gap-6 md:grid-cols-2"><Link href="/blog/turkiye-jeostratejik-konum-yatirim-avantajlari-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">STRATEJİ</div><h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;de Neden Yatırım Yapılmalı? Jeostratejik Konum</h3></Link><Link href="/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">VERGİ TEŞVİKLERİ</div><h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;nin 2026 Yatırım Vergi Paketi</h3></Link></div>
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
