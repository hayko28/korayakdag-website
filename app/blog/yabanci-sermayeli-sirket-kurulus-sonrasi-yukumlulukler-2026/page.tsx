import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yabancı Sermayeli Şirket Kuruluş Sonrası Yükümlülükler 2026 | Koray Akdağ",
  description: "Kuruluştan sonra yabancı sermayeli şirketin devam eden görevleri: E-TUYS yabancı sermaye bildirimi, vergi ve muhasebe, kâr transferi ve %15 kâr payı stopajı. 2026 kontrol listesi.",
  keywords: ["yabancı sermayeli şirket yükümlülükleri", "E-TUYS yabancı sermaye bildirimi", "kâr payı stopaj %15", "yabancı ortak kâr transferi", "4875 sayılı kanun bildirim", "yabancı sermayeli şirket yıllık bilgi formu"],
  alternates: {
    canonical: "/blog/yabanci-sermayeli-sirket-kurulus-sonrasi-yukumlulukler-2026",
    languages: {
      tr: "/blog/yabanci-sermayeli-sirket-kurulus-sonrasi-yukumlulukler-2026",
      en: "/en/blog/foreign-owned-company-obligations-turkey-after-incorporation",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "Yabancı yatırımcı Türkiye'de şirket kurmak için izin almak zorunda mı?",
    "a": "Hayır. 4875 sayılı Kanun yabancı sermayeli şirket kuruluşu ve pay edinimi için izin şartını kaldırdı; ancak bildirim yükümlülükleri geçerli ve bazı düzenlemeye tabi sektörlerin kendi ruhsatları var."
  },
  {
    "q": "Yabancı sermayeli şirket neleri bildirmek zorunda?",
    "a": "Yıllık faaliyet ve sermaye bilgileri mayıs sonuna kadar, sermaye değişiklikleri, pay devirleri ve ilgili ödemeler ise bir ay içinde E-TUYS üzerinden bildirilir."
  },
  {
    "q": "Yabancı ortaklar için kâr payı stopajı kaç?",
    "a": "Gerçek kişilere ve dar mükellef kurumlara dağıtılan kâr payında %15; 9286 sayılı Cumhurbaşkanı Kararı ile 22 Aralık 2024'ten beri geçerli. Vergi anlaşması, anlaşma ülkesi mukimleri için oranı düşürebilir."
  },
  {
    "q": "Yabancı ortaklar kârı serbestçe yurt dışına gönderebilir mi?",
    "a": "Evet. 4875 sayılı Kanun, ilgili vergiler ödendikten sonra net kâr, temettü ve satış veya tasfiye bedellerinin bankalar aracılığıyla serbestçe transferini güvence altına alıyor."
  },
  {
    "q": "Mevcut bir şirketin hissesini alırsam yine E-TUYS bildirimi gerekir mi?",
    "a": "Evet. En az %10 sahiplik veya oy hakkı sağlayan pay edinimleri ve sonraki pay devirleri bir ay içinde E-TUYS üzerinden bildirilir."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yabancı Sermayeli Şirketin Kuruluş Sonrası Yükümlülükleri: 2026 Kontrol Listesi"
      description="Tescilden sonra yabancı sermayeli şirketin devam etmesi gerekenler: E-TUYS üzerinden yabancı sermaye bildirimi, olağan vergi ve muhasebe görevleri, kâr transferi ve %15 kâr payı stopajı."
      category="YABANCI YATIRIMCI • UYUM • 2026"
      date="Ekim 2026"
      readTime="8 Dakika"
      coverImage="https://images.unsplash.com/photo-1763965367191-6455ef032c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="yabanci-sermayeli-sirket-kurulus-sonrasi-yukumlulukler-2026"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 Kısa Özet</h2><p className="mb-6 text-lg leading-9 text-gray-700">4875 sayılı Doğrudan Yabancı Yatırımlar Kanunu uyarınca yabancı yatırımcıların şirket kurması veya satın alması için izin gerekmiyor ve Türk yatırımcılarla aynı muameleyi görüyorlar. Karşılığında yabancı sermayeli şirketin olağan vergi ve muhasebe yükümlülüklerine ek <strong>bildirim görevleri</strong> ve yabancı ortaklara kâr dağıtılırken <strong>kâr payı stopajı</strong> var.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. Türk Şirketleriyle Aynı Vergi Rejimi</h2><p className="mb-6 text-lg leading-9 text-gray-700">Yabancı sermayeli şirket, her Türk şirketi gibi kurumlar vergisi mükellefidir. Kurumlar vergisi, KDV, stopaj yükümlülükleri ve damga vergisiyle karşılaşır, defterlerini yeminli veya serbest mali müşavirle tutar, beyannamelerini ve SGK bildirimlerini verir. Aylık muhasebe bu yüzden kalıcı bir gider olur; <Link href="/blog/turkiyede-sirket-kurma-maliyeti-2026" className="font-semibold text-orange-600 underline">kuruluş maliyeti rehberimiz</Link> bunu da ele alıyor.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. E-TUYS Üzerinden Yabancı Sermaye Bildirimi</h2><p className="mb-6 text-lg leading-9 text-gray-700">Yabancı sermayeli şirketler ve şubeler, Sanayi ve Teknoloji Bakanlığı Teşvik Uygulama ve Yabancı Sermaye Genel Müdürlüğü&apos;ne <strong>E-TUYS</strong> sistemi üzerinden bildirimde bulunur:</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Olay</th><th className="p-5">Süre</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Yıllık faaliyet ve sermaye bilgileri</td><td className="p-5">Her yıl mayıs ayı sonuna kadar</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Sermaye artırımı veya azaltımı</td><td className="p-5">1 ay içinde</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Yerli veya yabancı yatırımcılar arasında pay devri</td><td className="p-5">Devrin tamamlanmasından itibaren 1 ay içinde</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Sermaye artırımı veya pay devrine bağlı ödemeler</td><td className="p-5">Ödemeden itibaren 1 ay içinde</td></tr></tbody></table></div><p className="mb-6 text-lg leading-9 text-gray-700">Yabancı sermaye kapsamına yabancı sermayeli şirket veya şube kuruluşu, sermaye değişiklikleri ve en az %10 sahiplik veya oy hakkı sağlayan pay edinimleri giriyor (bu oranın altındaki borsa alımları hariç). Bildirim yükümlülüğü eski izin sisteminin yerini aldı; işlem bir bildirimdir ama atlanması uyum riski doğurur.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. Kârı Yurt Dışına Göndermek</h2><p className="mb-6 text-lg leading-9 text-gray-700">4875 sayılı Kanun, yabancı yatırımcılara net kâr, temettü, satış ve tasfiye bedelleri ile lisans ödemelerini bankalar aracılığıyla serbestçe transfer etme güvencesi veriyor. Uygulamada en önemli konu dağıtım üzerindeki vergi.</p><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Türk şirketinin başka bir Türk kurumsal ortağa dağıttığı kâr payında stopaj <strong>%0</strong>&apos;dır.</li><li>Gerçek kişilere ve <strong>dar mükellef kurumlara</strong> dağıtılan kâr payında stopaj <strong>%15</strong>&apos;tir. Oran, 9286 sayılı Cumhurbaşkanı Kararı ile 22 Aralık 2024&apos;ten itibaren %10&apos;dan %15&apos;e çıkarıldı.</li><li>Vergi anlaşmaları, anlaşma ülkesi mukimleri için daha düşük oran öngörebilir; bu yüzden ilk dağıtımdan önce ortağın ülkesi ve ortaklık yapısı kontrol edilmeli.</li></ul><div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8"><h3 className="mb-4 text-2xl font-bold text-[#071A2F]">⚠️ Yapıyı Erken Planlayın</h3><p className="leading-8 text-gray-700">Stopaj, anlaşma avantajları ve 2026 <Link href="/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci" className="font-semibold text-orange-600 underline">vergi paketi</Link> Türkiye&apos;deki iştirakin net getirisini değiştirebilir. Ortaklık yapısını kâr oluşmadan önce tasarlamak daha ucuzdur.</p></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Yıllık ve Sürekli Rutin</h2><ol className="ml-6 list-decimal space-y-4 text-lg text-gray-700 marker:font-bold marker:text-orange-500"><li>Aylık muhasebe, KDV ve SGK bildirimlerini güncel tutun.</li><li>Yıl sonundan sonra kurumlar vergisi beyannamesini ve finansal tabloları verin.</li><li>E-TUYS yıllık bilgi bildirimini mayıs sonuna kadar yapın.</li><li>Sermaye değişikliği veya pay devrini bir ay içinde bildirin.</li><li>Çalışma izinlerini ve Türk çalışan sayısını izin şartlarıyla uyumlu tutun (<Link href="/blog/yabanci-ortak-calisma-izni-sartlari-2026" className="font-semibold text-orange-600 underline">çalışma izni rehberi</Link>).</li><li>Şirket 2024&apos;ten önce kurulduysa, yıl sonu son tarihinden önce sermayesinin yeni asgari tutarları karşılayıp karşılamadığını kontrol edin (<Link href="/blog/anonim-limited-sirket-asgari-sermaye-artirimi-2026" className="font-semibold text-orange-600 underline">asgari sermaye rehberi</Link>).</li></ol></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">5. Sık Yapılan Hatalar</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>İzin gerekmiyor diye E-TUYS bildirimini isteğe bağlı sanmak.</li><li>Kâr payını yurt dışına, anlaşma oranını ve stopaj mekanizmasını kontrol etmeden ödemek.</li><li>Yabancı yöneticiyi çalışma izni olmadan çalıştırmak.</li><li>Bütçelerken tekrarlayan muhasebe giderini küçümsemek.</li></ul></section>
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
        <p className="mb-6 text-lg leading-9 text-gray-700">Uyum yükü takvime bağlandığında yönetilebilir: aylık muhasebe, mayısta yıllık E-TUYS bilgisi, değişikliklerde bir aylık bildirim. Pahalı hatalar kâr dağıtımında ve insan kaynağında (izinler) yaşanıyor; bunları ilk günden yapıya dahil edin.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık, Türkiye&apos;deki iştiraciniz için uyum takvimi hazırlayabilir; muhasebe, E-TUYS bildirimi ve teşvik başvurularını birlikte koordine edebilir. <Link href="/#contact" className="font-semibold text-orange-600 underline">İletişime geçin</Link>.</p>
        <p className="mt-6 text-sm leading-7 text-gray-500">Ekim 2026 itibarıyla genel bilgilendirmedir; hukuki veya mali tavsiye değildir. İşlem yapmadan önce güncel kuralları ilgili kurumdan teyit edin.</p>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">İlgili Yazılar</h2>
        <div className="grid gap-6 md:grid-cols-2"><Link href="/blog/turkiyede-sirket-kurma-maliyeti-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU</div><h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;de Şirket Kurma Maliyeti 2026</h3></Link><Link href="/blog/yabanci-ortak-calisma-izni-sartlari-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">ÇALIŞMA İZNİ</div><h3 className="text-lg font-bold text-[#071A2F]">Yabancı Ortak Çalışma İzni Şartları 2026</h3></Link></div>
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
