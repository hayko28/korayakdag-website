import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Türkiye'de Şirket Satın Alma: Yabancı Yatırımcı Rehberi 2026 | Koray Akdağ",
  description: "Yabancı yatırımcı olarak Türk şirketi satın almak: hisse devri mi varlık satışı mı, durum tespiti, pay devri formaliteleri, 2026 Rekabet Kurumu eşikleri ve E-TUYS bildirimi.",
  keywords: ["türkiye'de şirket satın alma", "yabancı yatırımcı şirket satın alma", "hisse devri sözleşmesi", "rekabet kurulu birleşme devralma eşikleri 2026", "due diligence şirket satın alma", "limited şirket pay devri"],
  alternates: {
    canonical: "/blog/turkiyede-sirket-satin-alma-yabanci-yatirimci-rehberi",
    languages: {
      tr: "/blog/turkiyede-sirket-satin-alma-yabanci-yatirimci-rehberi",
      en: "/en/blog/how-to-acquire-a-company-in-turkey-foreign-investor-guide",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "Yabancı bir kişi Türkiye'de şirket satın alabilir mi?",
    "a": "Genel olarak evet. Yabancı yatırımcılar Türk şirketlerinde pay edinimini serbestçe yapabilir; bazı sektörlerin kendi ruhsat ve onay şartları vardır."
  },
  {
    "q": "Türkiye'de hisse satın almak varlık satın almaktan daha mı iyi?",
    "a": "Hisse devri en yaygın yapıdır ve genellikle daha az usul adımı gerektirir, ancak şirketin yükümlülüklerini de devralırsınız; bu yüzden durum tespiti ve sözleşme korumaları daha önemlidir."
  },
  {
    "q": "Rekabet Kurumu izni ne zaman gerekir?",
    "a": "11 Şubat 2026'dan itibaren tarafların toplam Türkiye cirosu 3 milyar TL'yi ve en az iki tarafın ayrı ayrı cirosu 1 milyar TL'yi aştığında, ya da bir tarafın Türkiye cirosu 1 milyar TL'yi, diğerinin dünya cirosu 9 milyar TL'yi aştığında. Türkiye'deki teknoloji teşebbüsleri için 1 milyar TL'lik eşik 250 milyon TL'dir."
  },
  {
    "q": "Limited şirket pay devri nasıl tamamlanır?",
    "a": "Yazılı ve noter onaylı sözleşme, esas sözleşmede aksi yoksa genel kurul onayı, pay defterine kayıt, ardından ticaret siciline başvuru ve Gazete'de ilan."
  },
  {
    "q": "Yabancı alıcı pay edindikten sonra neyi bildirmeli?",
    "a": "En az %10 sahiplik veya oy hakkı sağlayan edinimler bir ay içinde E-TUYS üzerinden bildirilir."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türkiye'de Şirket Satın Alma: Yabancı Yatırımcı İçin 2026 Rehberi"
      description="Hisse devri mi varlık devri mi, durum tespiti neleri kapsamalı, pay devri nasıl tamamlanır, Şubat 2026 eşik değişikliğinden sonra Rekabet Kurumu izni ne zaman gerekir ve işlem sonrasında neler bildirilir."
      category="BİRLEŞME VE DEVRALMA • YABANCI YATIRIMCI • 2026"
      date="Ekim 2026"
      readTime="10 Dakika"
      coverImage="https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="turkiyede-sirket-satin-alma-yabanci-yatirimci-rehberi"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 Önce Bilinmesi Gerekenler</h2><p className="mb-6 text-lg leading-9 text-gray-700">Yabancı kişi ve kurumlar Türk şirketlerini genel olarak devlet izni olmadan satın alabilir; bazı düzenlemeye tabi sektörler ve büyük işlemler ek onay gerektirir. Özel işlemlerin çoğu <strong>hisse devri</strong> şeklindedir ve varlık satışına göre genellikle daha az adım gerektirir. Ana kontrol noktaları: <strong>durum tespiti, hisse devri sözleşmesi, formel devir, birleşme-devralma kontrolü ve E-TUYS bildirimi</strong>.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. Hisse Devri mi Varlık Devri mi?</h2><p className="mb-6 text-lg leading-9 text-gray-700">Hisse devrinde şirketi geçmişiyle birlikte alırsınız: sözleşmeler, ruhsatlar, çalışanlar ama aynı zamanda gizli yükümlülükler. Varlık devrinde istediğiniz varlık ve borçları seçersiniz; ancak her sözleşme, ruhsat ve çalışanın genellikle ayrıca devredilmesi gerekir. Türkiye&apos;de hisse satışı yaygın yapıdır ve çoğu zaman usul ve vergi açısından daha basittir; bu yüzden asıl iş durum tespitine ve sözleşme korumalarına kayar.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. Durum Tespiti: Neleri Kontrol Etmeli?</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Şirket yapısı, ortaklık ve pay defteri</li><li>Sözleşmeler, kiralar, ruhsatlar ve izinler</li><li>Finansal kayıtlar, vergi durumu ve açık incelemeler</li><li>İstihdam ve sosyal güvenlik uyumu</li><li>Fikri mülkiyet ve veri koruma (<Link href="/blog/kvkk-uyum-sureci-sirketler-icin-kisisel-verilerin-korunmasi-rehberi-2026" className="font-semibold text-orange-600 underline">KVKK uyumu</Link>)</li><li>Davalar, rehinler ve pay veya varlıklar üzerindeki teminatlar</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">Fiyat ancak değerlemeden sonra anlamlıdır. <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="font-semibold text-orange-600 underline">Şirket değerleme rehberimiz</Link> başlıca yöntemleri, <Link href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026" className="font-semibold text-orange-600 underline">durum tespiti yazımız</Link> ise süreci daha ayrıntılı anlatıyor.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. Hisse Devir Sözleşmesi</h2><p className="mb-6 text-lg leading-9 text-gray-700">Sözleşme fiyatı ve ödeme mekanizmasını, beyan ve taahhütleri, tazminatları ve kapanış koşullarını belirler. Durum tespitinde çıkan bulgular raporda kalmamalı; fiyat ayarlamasına, özel tazminata veya ön koşula dönüşmelidir.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Devrin Tamamlanması (Limited Şirket)</h2><p className="mb-6 text-lg leading-9 text-gray-700">Limited şirkette devir, sözleşmenin yazılı ve noter onaylı olması, genel kurulun onaylaması (esas sözleşmede aksi yoksa) ve devrin pay defterine işlenmesiyle geçerli olur. Ardından noter onaylı sözleşme, noter onaylı genel kurul kararı ve pay defteri sayfasıyla ticaret siciline başvurulur ve değişiklik Ticaret Sicili Gazetesi&apos;nde ilan edilir. Anonim şirket paylarında formaliteler farklıdır; esas sözleşmeyi ve pay türünü kontrol edin.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">5. Rekabet Kurumu İzni</h2><p className="mb-6 text-lg leading-9 text-gray-700">Türkiye&apos;de birleşme ve devralma kuralları 11 Şubat 2026&apos;da değişti (2026/2 sayılı Tebliğ, Resmî Gazete 33165). Aşağıdaki testlerden biri karşılandığında Rekabet Kurulu izni gerekir:</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Test</th><th className="p-5">Eşik</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Tarafların toplam Türkiye cirosu ve en az iki tarafın ayrı ayrı cirosu</td><td className="p-5">Toplam 3 milyar TL&apos;yi ve en az iki tarafın ayrı ayrı 1 milyar TL&apos;yi aşması</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Bir tarafın Türkiye cirosu ve başka bir tarafın dünya cirosu</td><td className="p-5">Türkiye cirosunun 1 milyar TL&apos;yi, diğer tarafın dünya cirosunun 9 milyar TL&apos;yi aşması</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Türkiye&apos;deki teknoloji teşebbüsleri (yazılım, dijital platform, fintek, biyoteknoloji, sağlık teknolojileri vb.)</td><td className="p-5">1 milyar TL&apos;lik Türkiye ciro eşiği 250 milyon TL&apos;ye iner</td></tr></tbody></table></div><p className="mb-6 text-lg leading-9 text-gray-700">Küçük hedefler çoğu zaman eşiklerin altında kalır, ancak teknoloji hedefleri çok daha düşük cirolarla kapsama girebilir. İzin gerekirken izinden önce kapanış yapmak ihlaldir; bunu en başta kontrol edin.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">6. Kapanıştan Sonra</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Pay edinimini (en az %10 sahiplik veya oy hakkı) bir ay içinde E-TUYS üzerinden bildirin (<Link href="/blog/yabanci-sermayeli-sirket-kurulus-sonrasi-yukumlulukler-2026" className="font-semibold text-orange-600 underline">yükümlülükler kontrol listesi</Link>).</li><li>Çalışma izinlerini ve yönetim atamalarını güncelleyin.</li><li>Pay devirleri KDV&apos;den müstesnadır. Satıcının kazancına ilişkin gelir veya kurumlar vergisi muamelesi satıcının statüsüne, elde tutma süresine ve varsa vergi anlaşmasına bağlıdır; vergi planlaması imzadan önce yapılmalıdır.</li></ul></section>
      <section id="faq" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">7. Sık Sorulan Sorular</h2>
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
        <p className="mb-6 text-lg leading-9 text-gray-700">Türkiye&apos;de bir satın alma imzadan önce kazanılır veya kaybedilir: değerleme, durum tespiti, sözleşme korumaları ve birleşme-devralma kontrolü. Yapı planlandıysa sonraki formaliteler rutindir.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık, satın almanız için değerleme, durum tespiti koordinasyonu ve kapanış sonrası uyum süreçlerinde destek olabilir. <Link href="/#contact" className="font-semibold text-orange-600 underline">İletişime geçin</Link>.</p>
        <p className="mt-6 text-sm leading-7 text-gray-500">Ekim 2026 itibarıyla genel bilgilendirmedir; hukuki veya mali tavsiye değildir. İşlem yapmadan önce güncel kuralları ilgili kurumdan teyit edin.</p>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">İlgili Yazılar</h2>
        <div className="grid gap-6 md:grid-cols-2"><Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">DEĞERLEME</div><h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemler ve Süreç</h3></Link><Link href="/blog/yabanci-sermayeli-sirket-kurulus-sonrasi-yukumlulukler-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">UYUM</div><h3 className="text-lg font-bold text-[#071A2F]">Yabancı Sermayeli Şirketin Kuruluş Sonrası Yükümlülükleri</h3></Link></div>
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
