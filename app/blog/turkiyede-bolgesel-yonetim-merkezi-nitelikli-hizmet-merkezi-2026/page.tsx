import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Türkiye'de Bölgesel Yönetim Merkezi: Nitelikli Hizmet Merkezi 2026 | Koray Akdağ",
  description: "Çok uluslu gruplar 2026 Nitelikli Hizmet Merkezi rejimiyle bölgesel veya küresel işlevlerini Türkiye'den nasıl yürütebilir: şartlar, %95 ile %100 indirim, personel vergi desteği ve İstanbul Finans Merkezi.",
  keywords: ["türkiye bölgesel yönetim merkezi", "nitelikli hizmet merkezi", "istanbul finans merkezi vergi teşvikleri", "7582 sayılı kanun hizmet merkezi", "ortak hizmet merkezi türkiye teşvik"],
  alternates: {
    canonical: "/blog/turkiyede-bolgesel-yonetim-merkezi-nitelikli-hizmet-merkezi-2026",
    languages: {
      tr: "/blog/turkiyede-bolgesel-yonetim-merkezi-nitelikli-hizmet-merkezi-2026",
      en: "/en/blog/regional-headquarters-turkey-qualified-service-centre-2026",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "Türkiye'de Nitelikli Hizmet Merkezi nedir?",
    "a": "İlişkili şirketlere veya en az üç ülkede faaliyet gösteren bir gruba hizmet vermek için kurulan ve gelirinin en az %80'ini yurt dışındaki ilişkili kuruluşlardan elde eden sermaye şirketidir. Bu yurt dışı kazancına kurumlar vergisi indirimi uygulanır."
  },
  {
    "q": "Vergi indirimi ne kadar?",
    "a": "Uygun yurt dışı kazancın %95'i; İstanbul Finans Merkezi veya belirlenen sanayi bölgelerinde %100'ü, 20 hesap dönemine kadar."
  },
  {
    "q": "NHM çalışanlarına vergi desteği var mı?",
    "a": "Evet. Nitelikli personelin ücretinin brüt asgari ücretin 3 katına kadar olan kısmı gelir vergisinden müstesnadır; İstanbul Finans Merkezi'nde bu 5 kata çıkar."
  },
  {
    "q": "Rejim ne zaman başladı?",
    "a": "7582 sayılı Kanun 4 Haziran 2026'da Resmî Gazete'de yayımlandı. Beyanname uygulaması ve ayrıntılar Kanun'un yürürlük hükümlerine bağlıdır."
  },
  {
    "q": "Yalnızca Türk müşterilere hizmet eden şirket yararlanabilir mi?",
    "a": "Hayır. Yıllık gelirin en az %80'i yurt dışındaki ilişkili kuruluşlardan gelmelidir."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türkiye'de Bölgesel Yönetim Merkezi: 2026 Nitelikli Hizmet Merkezi Rejimi Açıklaması"
      description="Nitelikli Hizmet Merkezi şartları, yurt dışı kazançta %95 ve %100 kurumlar vergisi indirimi, personel gelir vergisi desteği ve İstanbul Finans Merkezi'nin çok uluslu gruplara eklediği avantajlar."
      category="BÖLGESEL MERKEZ • VERGİ TEŞVİKLERİ • 2026"
      date="Ekim 2026"
      readTime="8 Dakika"
      coverImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="turkiyede-bolgesel-yonetim-merkezi-nitelikli-hizmet-merkezi-2026"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 Kısaca</h2><p className="mb-6 text-lg leading-9 text-gray-700">7582 sayılı Kanun (Resmî Gazete 33270, 4 Haziran 2026), çok uluslu grupların birkaç ülke için yönetim, finans, teknoloji, İK ve koordinasyon işlevlerini Türkiye&apos;den yürütebilmesi için <strong>Nitelikli Hizmet Merkezi (NHM)</strong> modelini getirdi. Yurt dışından elde edilen uygun kazanca <strong>%95, İstanbul Finans Merkezi veya belirlenen sanayi bölgelerinde %100 kurumlar vergisi indirimi</strong> 20 hesap dönemine kadar uygulanıyor.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. NHM Olmanın Şartları</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>İlişkili şirketlere veya bir şirket grubuna hizmet vermek üzere kurulmuş <strong>sermaye şirketi</strong> (limited veya anonim).</li><li>Grubun <strong>en az üç farklı ülkede</strong> fiilen faaliyet göstermesi.</li><li>Yıllık gelirin <strong>en az %80&apos;inin</strong> yurt dışındaki ilişkili kuruluşlardan elde edilmesi.</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">Uygun faaliyetler iki grupta toplanıyor: grup içi destek (finans, yönetim, İK, teknoloji, hukuk) ve koordinasyon hizmetleri (satış, Ar-Ge, satın alma).</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. Sağlanan Avantajlar</h2><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Avantaj</th><th className="p-5">Genel</th><th className="p-5">İstanbul Finans Merkezi veya belirlenen sanayi bölgeleri</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Uygun yurt dışı kazançta kurumlar vergisi indirimi</td><td className="p-5">%95</td><td className="p-5">%100</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Süre</td><td className="p-5">20 hesap dönemine kadar</td><td className="p-5">20 hesap dönemine kadar</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Nitelikli personel ücret istisnası</td><td className="p-5">Brüt asgari ücretin 3 katına kadar</td><td className="p-5">Brüt asgari ücretin 5 katına kadar</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Yurt içi asgari kurumlar vergisi</td><td className="p-5">İndirilen kazanç hesaplamadan çıkarılır</td><td className="p-5">İndirilen kazanç hesaplamadan çıkarılır</td></tr></tbody></table></div><p className="mb-6 text-lg leading-9 text-gray-700">Yurt dışı kazancın beyanname süresine kadar Türkiye&apos;ye transfer edilmesi şarttır.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. İstanbul Finans Merkezi Ne Ekliyor?</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Nitelikli finansal hizmet ihracatı kazancında %100 indirim <strong>31 Aralık 2047&apos;ye</strong> kadar uzatıldı.</li><li>Finansal faaliyet harçları muafiyeti 5 yıldan <strong>20 yıla</strong> çıkarıldı.</li><li>Transit ticaret kazancında %95 yerine %100 indirim uygulanıyor.</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">Yer seçimi bu yüzden önemli: aynı rejim İstanbul Finans Merkezi veya belirlenen bölgelerde daha iyi oranlar veriyor.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Grubunuz İçin Uygun mu?</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li><strong>Uygun:</strong> üç veya daha fazla ülkede iştiraki olan, hazine, ortak hizmetler, teknoloji veya bölgesel yönetim merkezi kurmak isteyen ve Türkiye&apos;de gerçek içerik (insan, ofis, karar) oluşturabilen gruplar.</li><li><strong>Uygun değil:</strong> Türkiye&apos;deki şirketi ağırlıkla Türk pazarına hizmet eden gruplar; %80 yurt dışı ilişkili gelir testi karşılanmaz.</li><li><strong>Kontrol edilecekler:</strong> transfer fiyatlaması, grup için daimi işyeri riski ve yabancı personelin çalışma izni durumu (<Link href="/blog/yabanci-ortak-calisma-izni-sartlari-2026" className="font-semibold text-orange-600 underline">çalışma izni rehberi</Link>).</li></ul><div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8"><h3 className="mb-4 text-2xl font-bold text-[#071A2F]">⚠️ İkincil Düzenlemeler</h3><p className="leading-8 text-gray-700">Uygun hizmetlerin listesi, başvuru adımları ve çalışan şartları gibi ayrıntılar ikincil düzenlemelerle netleşebilir. Yapıya karar vermeden önce güncel uygulama metnini teyit edin.</p></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">5. Paketin Geri Kalanıyla İlişkisi</h2><p className="mb-6 text-lg leading-9 text-gray-700">NHM rejimi, <Link href="/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci" className="font-semibold text-orange-600 underline">2026 vergi paketi rehberimizde</Link> anlatılan imalat oranı, transit ticaret ve hizmet ihracatı düzenlemeleriyle birlikte duruyor. Türk şirketinden yabancı ortaklara kâr payı dağıtımı ise <Link href="/blog/yabanci-sermayeli-sirket-kurulus-sonrasi-yukumlulukler-2026" className="font-semibold text-orange-600 underline">yükümlülükler rehberindeki</Link> stopaj kurallarına tabidir.</p></section>
      <section id="faq" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">6. Sık Sorulan Sorular</h2>
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
        <p className="mb-6 text-lg leading-9 text-gray-700">NHM rejimi gerçek bir bölgesel merkez kurmak isteyen gruplara yönelik. Vergi oranı cazip, ancak avantaj gerçek içeriğe, gelir yapısına ve grup genelinde doğru kurguya bağlı.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık, grubunuzun NHM şartlarını karşılayıp karşılamadığını test edebilir; Türkiye&apos;deki şirket, kadro ve vergi yapısını planlayabilir. <Link href="/#contact" className="font-semibold text-orange-600 underline">İletişime geçin</Link>.</p>
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
