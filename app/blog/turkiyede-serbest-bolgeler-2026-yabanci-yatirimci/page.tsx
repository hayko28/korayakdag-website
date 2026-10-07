import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Türkiye'de Serbest Bölgeler 2026: Vergi Avantajları | Koray Akdağ",
  description: "Türkiye'de 19 serbest bölge var. %100 kurumlar vergisi istisnasından kim yararlanır, 2026'da ne değişti, serbest bölge ruhsatları nasıl işler ve serbest bölge ne zaman doğru tercih değildir?",
  keywords: ["serbest bölge", "serbest bölge vergi istisnası", "serbest bölgede şirket kurmak", "3218 sayılı kanun", "serbest bölge imalat ruhsatı", "Ege Serbest Bölgesi", "serbest bölge mi anakara mı"],
  alternates: {
    canonical: "/blog/turkiyede-serbest-bolgeler-2026-yabanci-yatirimci",
    languages: {
      tr: "/blog/turkiyede-serbest-bolgeler-2026-yabanci-yatirimci",
      en: "/en/blog/free-zones-in-turkey-2026-guide-foreign-investors",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "Türkiye'de kaç serbest bölge var?",
    "a": "Ticaret Bakanlığı'nın 2025 sonuçlarına dair Ocak 2026 açıklamasında 19 serbest bölge sayılıyor."
  },
  {
    "q": "Serbest bölgelerde %100 kurumlar vergisi istisnası var mı?",
    "a": "Evet, imalat ruhsatlı şirketlerin imalat kazancı için var. Ticaret veya depolama gibi diğer ruhsat türleri aynı istisnayı otomatik olarak almaz."
  },
  {
    "q": "2026'da serbest bölgelerde ne değişti?",
    "a": "1 Ocak 2026'da yürürlüğe giren 7577 sayılı Kanun, üreticilerin kurumlar ve gelir vergisi istisnasını ihracata ek olarak aynı serbest bölgedeki ve diğer serbest bölgelerdeki kullanıcılara yapılan satışlara da genişletti."
  },
  {
    "q": "Serbest bölge şirketi Türkiye iç piyasasına satış yapabilir mi?",
    "a": "Serbest bölgeden anakara Türkiye'ye satış ithalat sayılır ve gümrük ile KDV sonuçları doğurur. Serbest bölgeler, müşterileri ağırlıklı olarak yurt dışında veya diğer bölgelerde olan şirketlere uygundur."
  },
  {
    "q": "Serbest bölge anakara şirketinden daha mı iyi?",
    "a": "Faaliyetinize ve müşterilerinize bağlı. İhracatçı imalatçılar çoğu zaman avantaj sağlar, ancak 2027 döneminden itibaren anakara imalatçıları %12,5 kurumlar vergisi ve teşvik belgesi imkânı elde ediyor; bu, yurt içine satış yapan şirketler için anakarayı rekabetçi yapabilir."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türkiye'de Serbest Bölgeler 2026: Vergi İstisnasından Kim Yararlanır, Kim Yararlanamaz?"
      description="Türkiye'nin 19 serbest bölgesine açık bir bakış: imalatçılar için kurumlar vergisi istisnası, 7577 sayılı Kanun'la 2026 değişikliği, ruhsat türleri, 2025 ticaret verileri ve serbest bölge ile anakara şirketi arasında karar verme."
      category="SERBEST BÖLGELER • VERGİ TEŞVİKLERİ • 2026"
      date="Ekim 2026"
      readTime="8 Dakika"
      coverImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="turkiyede-serbest-bolgeler-2026-yabanci-yatirimci"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 Kısa Cevap</h2><p className="mb-6 text-lg leading-9 text-gray-700">Türkiye&apos;de 3218 sayılı Kanun kapsamında <strong>19 serbest bölge</strong> var. Öne çıkan avantaj, <strong>imalat ruhsatlı</strong> şirketlerin imalat kazancında <strong>%100 kurumlar vergisi istisnasıdır</strong>. Ticaret veya depolama ruhsatı aynı istisnayı otomatik olarak getirmez. Serbest bölgeler ihracat odaklı imalatçılara ve bazı hizmet faaliyetlerine uygundur; her yabancı yatırımcı için doğru seçim değildir.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. Serbest Bölge Sistemine Genel Bakış</h2><p className="mb-6 text-lg leading-9 text-gray-700">Türkiye&apos;de serbest bölgeler 1987&apos;den beri Ticaret Bakanlığı gözetiminde faaliyet gösteriyor. Bakanlığın 2025 sonuçlarına dair Ocak 2026 açıklamasına göre:</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Gösterge (2025)</th><th className="p-5">Değer</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Serbest bölge sayısı</td><td className="p-5">19</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Serbest bölgelerden ihracat</td><td className="p-5">12,5 milyar dolar (%4 artış)</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Toplam ticaret hacmi</td><td className="p-5">28,55 milyar dolar</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Net döviz girdisi</td><td className="p-5">3,68 milyar dolar</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">İhracatın bölge satışlarındaki payı</td><td className="p-5">%75,5</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Orta-yüksek ve yüksek teknolojinin ihracattaki payı</td><td className="p-5">%57,4</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">İhracatta en büyük bölge</td><td className="p-5">Ege Serbest Bölgesi, 3,26 milyar dolar</td></tr></tbody></table></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. Vergi Avantajları</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li><strong>Kurumlar vergisi:</strong> imalat ruhsatlı şirketlerin imalat kazancı kurumlar vergisinden müstesnadır. İstisna yalnızca ruhsat süresi boyunca geçerlidir.</li><li><strong>2026 değişikliği:</strong> 1 Ocak 2026&apos;da yürürlüğe giren 7577 sayılı Kanun&apos;la istisna, üreticilerin ihracatına ek olarak aynı serbest bölgedeki ve diğer serbest bölgelerdeki kullanıcılara yaptığı satışları da kapsayacak şekilde genişletildi.</li><li><strong>KDV ve gümrük vergisi:</strong> bölgeye yurt içinden alınan veya yurt dışından getirilen mallarda genel olarak istisna vardır.</li><li><strong>Kâr transferi:</strong> kârlar özel izin olmadan yurt dışına aktarılabilir.</li><li><strong>Çalışan gelir vergisi:</strong> nitelikli ihracatçılar için ücret istisnası vardır, ihracat oranı şartına bağlıdır.</li></ul><div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8"><h3 className="mb-4 text-2xl font-bold text-[#071A2F]">⚠️ İstisna Otomatik Değildir</h3><p className="leading-8 text-gray-700">İstisna ruhsat türüne ve faaliyet şartlarına bağlıdır. Ticaret ruhsatıyla serbest bölgede olan veya ağırlıklı olarak yurt içine satış yapan bir şirket aynı muameleyi görmez. Bölgeyi seçmeden önce ruhsat kategorisini teyit edin.</p></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. Serbest Bölge mi Anakara mı?</h2><p className="mb-6 text-lg leading-9 text-gray-700">2027 vergilendirme döneminden itibaren sanayi sicil belgeli anakara imalatçıları üretim kazancında %12,5 kurumlar vergisi ödeyecek (<Link href="/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci" className="font-semibold text-orange-600 underline">2026 vergi paketi rehberimize</Link> bakın). Bu, bazı imalatçılar için serbest bölgeyle farkı daraltıyor. Karşılaştırma:</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Soru</th><th className="p-5">Serbest bölge</th><th className="p-5">Teşvikli anakara</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Ana müşteri tabanı</td><td className="p-5">İhracat ve diğer bölge kullanıcıları</td><td className="p-5">Yurt içi ve ihracat</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">İmalat kazancı vergisi</td><td className="p-5">İstisna (ruhsat şartlarıyla)</td><td className="p-5">2027 döneminden itibaren %12,5, ayrıca teşvik belgesi avantajları</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Anakara Türkiye&apos;ye satış</td><td className="p-5">İthalat sayılır, gümrük sonuçları doğar</td><td className="p-5">Normal yurt içi satış</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Kuruluş</td><td className="p-5">Bölge işleticisi ruhsatı ve kira</td><td className="p-5">Standart şirket kuruluşu</td></tr></tbody></table></div><p className="mb-6 text-lg leading-9 text-gray-700">Anakara yatırımcıları <Link href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026" className="font-semibold text-orange-600 underline">yatırım teşvik belgesi</Link>, teknopark avantajları ve yeni vergi paketini de birleştirebilir. Doğru cevap müşterilerinizin nerede olduğuna bağlı.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Serbest Bölgede Kuruluş Adımları</h2><ol className="ml-6 list-decimal space-y-4 text-lg text-gray-700 marker:font-bold marker:text-orange-500"><li>Sektör, liman veya havalimanı erişimi ve arsa durumuna göre bölgeyi seçin.</li><li>Bölge işleticisine başvurup <strong>faaliyet ruhsatı</strong> (imalat, ticaret, depolama, hizmet) alın.</li><li>Şirketi kurun ve bölge kira sözleşmesini imzalayın.</li><li>Vergi, SGK ve gümrük kayıtlarını tamamlayın.</li></ol><p className="mb-6 text-lg leading-9 text-gray-700">Ruhsat süreleri türe göre değişir, genellikle imalatta ticarete göre daha uzundur. Süre sektöre ve bölgeye bağlı olduğundan birkaç hafta ile birkaç ay arasında planlama yapın.</p></section>
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
        <p className="mb-6 text-lg leading-9 text-gray-700">Serbest bölgeler ihracat odaklı imalatçılar için güçlü bir seçenek ve 2026 değişikliği istisnayı genişletti. Ancak her yabancı yatırımcı için kısayol değil. Ruhsat türüne ve müşteri konumuna göre seçin, ardından anakara teşvikleriyle karşılaştırın.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık, projeniz için serbest bölge ve anakara yapılarını karşılaştırabilir, teşvik planını hazırlayabilir. <Link href="/#contact" className="font-semibold text-orange-600 underline">İletişime geçin</Link>.</p>
        <p className="mt-6 text-sm leading-7 text-gray-500">Ekim 2026 itibarıyla genel bilgilendirmedir; hukuki veya mali tavsiye değildir. İşlem yapmadan önce güncel kuralları ilgili kurumdan teyit edin.</p>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">İlgili Yazılar</h2>
        <div className="grid gap-6 md:grid-cols-2"><Link href="/blog/turkiyede-sirket-kurma-maliyeti-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU</div><h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;de Şirket Kurma Maliyeti 2026</h3></Link><Link href="/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">VERGİ TEŞVİKLERİ</div><h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;nin 2026 Yatırım Vergi Paketi</h3></Link></div>
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
