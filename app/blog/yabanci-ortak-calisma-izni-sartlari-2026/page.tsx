import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yabancı Ortak Çalışma İzni Şartları 2026 | Koray Akdağ",
  description: "Türkiye'de şirket hissesine sahip olmak şirkette çalışma veya yönetim hakkı vermez. 2026'da yabancı ortak çalışma izni şartları: sermaye, hisse oranı, Türk çalışan sayısı ve başvuru süreci.",
  keywords: ["yabancı ortak çalışma izni", "şirket ortağı yabancı çalışma izni 2026", "yabancı müdür çalışma izni", "çalışma izni 500.000 TL sermaye", "6735 sayılı kanun çalışma izni", "yabancı yatırımcı çalışma izni türkiye"],
  alternates: {
    canonical: "/blog/yabanci-ortak-calisma-izni-sartlari-2026",
    languages: {
      tr: "/blog/yabanci-ortak-calisma-izni-sartlari-2026",
      en: "/en/blog/work-permit-for-foreign-company-owners-turkey-2026",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "Türk şirketinde hisse sahibi olmak orada çalışma hakkı verir mi?",
    "a": "Hayır. Hissedarlık mülkiyet hakkı verir; şirkette çalışmak veya yönetmek için 6735 sayılı Kanun uyarınca çalışma izni gerekir."
  },
  {
    "q": "Yabancı ortak çalışma izni için ne kadar sermaye gerekir?",
    "a": "Çalışma ve Sosyal Güvenlik Bakanlığı kriterlerine göre yeni kurulan işyerinde ödenmiş sermaye en az 500.000 TL olmalıdır. 2026 uygulama rehberleri ayrıca yabancı ortak payının en az %20 olmasını, ortağın payı yaklaşık 100.000 ABD dolarına ulaşırsa muafiyet uygulandığını belirtiyor. Başvurudan önce güncel kriterleri teyit edin."
  },
  {
    "q": "Kaç Türk çalışan istihdam etmem gerekir?",
    "a": "Genel olarak her yabancı çalışan için en az beş Türk vatandaşı gerekir ve izinli yabancı sayısı Türk çalışan sayısını aşamaz. Yeni izinde bu şart yaklaşık yedinci aydan itibaren kontrol edilir."
  },
  {
    "q": "Çalışma izni kararı ne kadar sürede çıkar?",
    "a": "Uygulayıcı kaynaklar, eksiksiz başvurudan sonra yaklaşık 30 gün içinde karar verildiğini belirtiyor."
  },
  {
    "q": "Türk şirketimi yurt dışından izinsiz yönetebilir miyim?",
    "a": "Yurt dışından ortak olabilirsiniz. Limited şirkette müdürlük veya icracı yönetim kurulu üyeliği gibi bir görev üstleniyorsanız izin konusu gündeme gelir; bu yüzden tam görevinizi kontrol edin."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yabancı Ortak Çalışma İzni Şartları 2026: Hissedar mı Yönetici mi?"
      description="Hissedarlığın tek başına Türkiye'de çalışma hakkı vermemesi, hangi yabancı ortakların izin alması gerektiği, sermaye ve Türk çalışan şartları ve başvurunun işleyişi."
      category="YABANCI YATIRIMCI • ÇALIŞMA İZNİ • 2026"
      date="Ekim 2026"
      readTime="8 Dakika"
      coverImage="https://images.unsplash.com/photo-1763965367191-6455ef032c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="yabanci-ortak-calisma-izni-sartlari-2026"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 Temel Nokta</h2><p className="mb-6 text-lg leading-9 text-gray-700">Türkiye&apos;de şirket kurmak ile şirkette <strong>çalışmak veya yönetmek</strong> iki ayrı hukuki konudur. Yabancı yatırımcı, Türk vatandaşlarıyla aynı kurallara tabi olarak ortak olabilir. Ancak şirkette müdür, temsil yetkili yönetim kurulu üyesi olarak görev alacak veya başka şekilde çalışacak yabancının 6735 sayılı Uluslararası İşgücü Kanunu uyarınca <strong>çalışma izni</strong> alması gerekir.</p><p className="mb-6 text-lg leading-9 text-gray-700">İzinsiz kurucu veya yönetici olarak hareket etmek bu işlemlerin geçersizliğine ve idari para cezalarına yol açabilir; bu yüzden izin süreci şirket kuruluşuyla birlikte planlanmalıdır.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. Kimler Çalışma İzni Almak Zorunda?</h2><p className="mb-6 text-lg leading-9 text-gray-700">Uygulayıcıların anlatımı ve Bakanlık çerçevesi şu görevleri şirkette çalışma olarak değerlendiriyor:</p><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li><strong>Limited şirkette ortak olan müdür</strong></li><li>Anonim şirkette <strong>yönetim kurulu üyesi olan pay sahibi</strong> (yurt dışında oturan yönetim kurulu üyeleri genellikle farklı değerlendirilir)</li><li>Sermayesi paylara bölünmüş komandit şirkette yönetici komandite ortak</li><li>Şirket bünyesinde çalıştırılacak her yabancı</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">Şirkette çalışmayan ve yönetmeyen bir yabancı pay sahibinin yalnızca hisse sahibi olduğu için çalışma izni alması gerekmez.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. Yeni Şirket İçin Şartlar</h2><p className="mb-6 text-lg leading-9 text-gray-700">Çalışma ve Sosyal Güvenlik Bakanlığı çalışma izni değerlendirme kriterlerini yayımlıyor. 1 Ekim 2024&apos;ten beri yürürlükte olan sürüm, bilanço esasına göre değerlendirilen işyerleri için şunları öngörüyor:</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Şart</th><th className="p-5">Kural</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Yeni kurulan işyerinin ödenmiş sermayesi</td><td className="p-5">En az <strong>500.000 TL</strong></td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Türk çalışan sayısı</td><td className="p-5">Her yabancı çalışan için en az <strong>5 Türk vatandaşı</strong></td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Yabancı ve Türk çalışan sayısı</td><td className="p-5">İzinli yabancı sayısı Türk çalışan sayısını aşamaz</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Üçten fazla yabancı</td><td className="p-5">Dördüncü ve sonraki yabancılar için ayrıca 5&apos;er Türk çalışan ve mali yeterlilik şartı aranır</td></tr></tbody></table></div><p className="mb-6 text-lg leading-9 text-gray-700"><strong>Yabancı ortaklar</strong> için 2026 uygulama rehberleri ayrıca, ortak payının şirkette en az <strong>%20</strong> ve değer olarak en az 500.000 TL olmasını belirtiyor. Beş kişilik istihdam şartı ilk iznin yaklaşık yedinci ayından itibaren aranıyor. Ortağın sermaye payı yaklaşık <strong>100.000 ABD doları</strong> ve üzerindeyse bu sermaye, oran ve istihdam şartları uygulanmıyor.</p><div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8"><h3 className="mb-4 text-2xl font-bold text-[#071A2F]">⚠️ Rakamlara Güvenmeden Önce Teyit Edin</h3><p className="leading-8 text-gray-700">Eşikler Bakanlık duyurularıyla değişiyor ve eski yazılarda hâlâ daha düşük rakamlar (örneğin 40.000 TL veya 100.000 TL sermaye) geçiyor. Başvurudan önce Bakanlığın güncel kriterleri ve kendi görevinizi teyit edin.</p></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. Başvuru Nasıl İşliyor?</h2><ol className="ml-6 list-decimal space-y-4 text-lg text-gray-700 marker:font-bold marker:text-orange-500"><li>Önce şirket kurulur. Başvuran işveren şirkettir, kişi değil.</li><li>Başvuru Bakanlığın <strong>e-İzin</strong> sistemi üzerinden yapılır. Yurt dışındaysanız süreç Türk konsolosluğu üzerinden başlar; Türkiye&apos;de geçerli ikamet iznine sahipseniz çevrimiçi başvurabilirsiniz.</li><li>Şirket belgeleri, yabancı ortağın pasaportu ve gerekli formlar sunulur.</li><li>Karar genellikle yaklaşık 30 gün içinde beklenir; ilk izin çoğunlukla uzatmada kontrol edilen şartlarla verilir.</li></ol><p className="mb-6 text-lg leading-9 text-gray-700">Çalışma izni aynı zamanda Türkiye&apos;de ikametin dayanağı olur. İzin reddedilirse veya şartlar korunmazsa uzatma reddedilebilir; bu yüzden istihdam rakamları sürdürülmelidir.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Bilmeye Değer Diğer Yollar</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li><strong>Turkuaz Kart:</strong> 6735 sayılı Kanun kapsamında nitelikli profiller için puan esaslı yol; geçiş süresi ve şerh kuralları ayrıdır.</li><li><strong>Teknoloji yatırımcısı hızlı yolu:</strong> yabancı teknoloji girişimcileri ve mühendisleri için davet esaslı hızlandırılmış yol; uygulayıcılara göre standart sermaye ve Türk çalışan oranları aranmıyor.</li><li><strong>Bağımsız çalışma izni:</strong> belirli bir çalışma süresinden sonra şartları sağlayanlar için mümkün.</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">Hangi yolun uygun olduğu faaliyetinize ve takviminize bağlı. Kuruluş ve izin bütçesini birlikte planlamak için <Link href="/blog/turkiyede-sirket-kurma-maliyeti-2026" className="font-semibold text-orange-600 underline">şirket kurma maliyeti rehberine</Link> bakabilirsiniz.</p></section>
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
        <p className="mb-6 text-lg leading-9 text-gray-700">Çalışma iznini şirketle aynı anda planlayın: sermaye, pay yapısı ve Türk çalışan sayısı, yabancı ortağın işi yasal olarak yönetip yönetemeyeceğini belirler. Bunu başta yanlış yapmak, kısa bir kontrol listesiyle doğru yapmaktan çok daha pahalıya gelir.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık, şirket yapınızı izin şartlarıyla eşleştirebilir; kuruluş ve izin başvurularını birlikte koordine edebilir. <Link href="/#contact" className="font-semibold text-orange-600 underline">İletişime geçin</Link>.</p>
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
