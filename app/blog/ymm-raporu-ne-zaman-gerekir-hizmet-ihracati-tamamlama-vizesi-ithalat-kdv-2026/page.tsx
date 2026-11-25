import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "YMM Raporu Ne Zaman Gerekir? Hizmet İhracatı, Tamamlama Vizesi ve İthalat KDV | Koray Akdağ",
  description:
    "Yurt dışına verilen hizmetlerde kazanç indirimi, yatırım teşvik belgesi tamamlama vizesi ve ithalatta indirilemeyen KDV için YMM raporu ne zaman isteniyor? 2026 için süreç, hazırlık ve dikkat edilecek noktalar.",
  keywords: [
    "YMM raporu ne zaman gerekir",
    "hizmet ihracatı YMM raporu",
    "yatırım tamamlama vizesi YMM raporu",
    "özel amaçlı YMM raporu",
    "ithalatta indirilemeyen KDV",
    "yurt dışı kazanç indirimi YMM tasdik",
    "YMM raporu danışmanlığı",
  ],
  alternates: {
    canonical: "/blog/ymm-raporu-ne-zaman-gerekir-hizmet-ihracati-tamamlama-vizesi-ithalat-kdv-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="YMM Raporu Ne Zaman Gerekir? Hizmet İhracatı, Yatırım Tamamlama Vizesi ve İthalat KDV İçin 2026 Rehberi"
      description="2026'da üç ayrı başlıkta YMM raporu gündeme geliyor: yurt dışına verilen hizmetlerde kazanç indirimi, yatırım teşvik belgesi tamamlama vizesi ve ithalatta indirilemeyen KDV. Hangi durumda rapor isteniyor, süreç nasıl işliyor ve başvurudan önce nelere hazırlanmalı?"
      category="YMM RAPORU • VERGİ • TEŞVİK • 2026"
      date="Kasım 2026"
      readTime="9 Dakika"
      slug="ymm-raporu-ne-zaman-gerekir-hizmet-ihracati-tamamlama-vizesi-ithalat-kdv-2026"
      coverImage="https://images.unsplash.com/photo-1758271941610-dbf5ce7d3c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="YMM Raporu Sürecinizi Birlikte Planlayalım"
      ctaText="Hangi dosyanız için rapor gerektiğini, hangi belgeleri hazırlamanız gerektiğini ve süreyi kaçırmadan nasıl ilerleyeceğinizi birlikte netleştirelim. Raporu yetkili YMM düzenler; hazırlık ve koordinasyon tarafında yanınızdayız."
    >
      {/* KISA CEVAP */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: YMM Raporu Hangi Durumlarda İsteniyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>Yurt dışına verilen hizmetlerde kazanç indirimi:</strong> indirimden yararlanan mükellefin, şartların sağlandığını gösteren YMM tasdik raporu sunması gerekebiliyor.</li>
          <li>✔ <strong>Yatırım teşvik belgesi tamamlama vizesi:</strong> 2026/1 sayılı Yatırım Teşvik Tebliği ile SMMM raporu uygulaması sona erdi, süreç YMM raporu üzerine kuruldu.</li>
          <li>✔ <strong>İthalatta indirilemeyen KDV:</strong> gözetim, damping ve korunma önlemi kaynaklı kalemlerde mükellef, bildirim vermek veya Özel Amaçlı YMM Raporu sunmakla yükümlü olabiliyor.</li>
          <li>✔ Her başlığın eşik tutarı, kapsamı ve süresi farklı. Rakamlar her yıl güncellenebildiği için başvurudan önce güncel mevzuat ve duyurularla teyit edilmeli.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-12 rounded-2xl border bg-gray-50 p-8">
        <h2 className="mb-6 text-2xl font-bold text-[#071A2F]">İçindekiler</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#hizmet-ihracati" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Yurt Dışına Verilen Hizmetlerde Kazanç İndirimi
          </Link>
          <Link href="#tamamlama-vizesi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Yatırım Tamamlama Vizesinde YMM Raporu
          </Link>
          <Link href="#ithalat-kdv" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. İthalatta İndirilemeyen KDV ve Özel Amaçlı Rapor
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. YMM Raporu Süreci Nasıl İşler?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1 */}
      <section id="hizmet-ihracati" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Yurt Dışına Verilen Hizmetlerde Kazanç İndirimi
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yazılım, mühendislik, tasarım, veri analizi ve benzeri hizmetleri yurt dışındaki müşterilere
          Türkiye&apos;den veren şirketler ve serbest meslek erbapları, bu kazançları için vergi indiriminden
          yararlanabiliyor. 30 Nisan 2026 tarihli Resmî Gazete&apos;de yayımlanan 11257 sayılı Cumhurbaşkanı Kararı
          ile indirim oranı, 1 Ocak 2026 ve sonrasında başlayan vergilendirme dönemleri için %100&apos;e yükseltildi.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          İndirim otomatik değil, şarta bağlı. Uygulamada YMM tasdik raporunun şu hususları teyit etmesi bekleniyor:
        </p>
        <ul className="mb-6 space-y-3 text-lg text-gray-700">
          <li>✔ Hizmetin fiilen Türkiye&apos;den verilmesi</li>
          <li>✔ Hizmetten yurt dışında yararlanılması</li>
          <li>✔ Faturanın yurt dışında mukim müşteri adına düzenlenmesi</li>
          <li>✔ Hizmet bedelinin beyanname verme tarihine kadar döviz olarak Türkiye&apos;ye getirilmesi</li>
        </ul>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-gray-700">
          <strong>Rapor zorunluluğunun eşiği:</strong> Raporun hangi indirim tutarından itibaren zorunlu olduğu
          kaynaklarda farklı rakamlarla anlatılıyor ve tutarlar güncellenebiliyor. Kendi durumunuzda rapor
          gerekip gerekmediğini, ilgili tebliğdeki güncel haddi kontrol ederek belirlemek gerekir. Rapor süresinde
          sunulmazsa indirimin reddedilmesi, eksik verginin cezası ve gecikme faiziyle talep edilmesi riski vardır.
        </div>
      </section>

      {/* 2 */}
      <section id="tamamlama-vizesi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Yatırım Tamamlama Vizesinde YMM Raporu
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yatırım teşvik belgeli projelerde yatırım bittiğinde belgenin kapatılması için tamamlama vizesi yapılıyor.
          9 Nisan 2026 tarihli Resmî Gazete&apos;de yayımlanan 2026/1 sayılı Yatırım Teşvik Tebliği ile yatırım
          tutarına göre ayrım kalktı ve SMMM raporu uygulaması sona erdi. Böylece belge kapatma sürecinde YMM
          raporu merkezi bir yere geldi.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Raporun elektrik enerjisi üretimi yatırımları dışında hangi dosyalarda zorunlu aranacağı konusunda
          uzman yorumları birbirinden ayrışıyor: bir kısmı enerji dışındaki tüm yatırımlarda rapor aranacağını,
          bir kısmı ise Genel Müdürlüğün gerekli gördüğü hallerde isteneceğini yazıyor.
        </p>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-gray-700">
          <strong>Pratik öneri:</strong> Belgeniz kapanış aşamasına yaklaşıyorsa, rapor gerekip gerekmediğini
          Bakanlığın dosyanıza ilişkin yazısından veya yetkili birimden teyit edin. Yatırım dönemi bitmeden
          harcama belgelerinizin, makine-teçhizat listenizin ve fatura kayıtlarınızın hazır olması süreci
          belirgin biçimde hızlandırır.
        </div>
      </section>

      {/* 3 */}
      <section id="ithalat-kdv" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. İthalatta İndirilemeyen KDV ve Özel Amaçlı YMM Raporu
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Gözetim uygulamasında tevsik edilemeyen tutarlar, korunma önlemi kaynaklı vergi ve ek mali
          yükümlülükler, damping ve telafi edici vergiler gibi kalemlere isabet eden ithalat KDV&apos;si,
          7846 sayılı Cumhurbaşkanı Kararı kapsamında indirim konusu yapılamıyor. Usul ve esaslar, 31 Ocak 2026
          tarihli Resmî Gazete&apos;de yayımlanan KDV Genel Uygulama Tebliği değişikliğiyle belirlendi.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bu kapsamda ithalat yapan mükellefler, altışar aylık dönemler itibarıyla iki yoldan birini izliyor:
        </p>
        <ul className="mb-6 space-y-3 text-lg text-gray-700">
          <li>✔ Belirli bir tutarın altında kalanlar vergi dairesine <strong>bildirim</strong> veriyor.</li>
          <li>✔ Eşiği aşanlar <strong>Özel Amaçlı YMM Raporu</strong> ibraz ediyor.</li>
          <li>✔ Süresinde düzenlenmiş tam tasdik sözleşmesi ve raporunda bu konuya ilişkin açıklama bulunanlarda ayrıca rapor aranmıyor; ancak sözleşmenin varlığı tek başına yetmiyor.</li>
        </ul>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-gray-700">
          <strong>Süre ve eşik:</strong> İbraz süreleri uzatılabiliyor ve eşik tutarı yıllık güncelleniyor. 2026&apos;nın
          ikinci dönemi (Temmuz-Aralık) için kaynaklara göre son gün 31 Ocak 2027. Başvurudan önce GİB&apos;in
          güncel KDV sirkülerlerini mutlaka kontrol edin.
        </div>
      </section>

      {/* 4 */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. YMM Raporu Süreci Nasıl İşler?
        </h2>
        <ol className="mb-6 space-y-4 text-lg text-gray-700">
          <li><strong>1. Hangi rapor gerekiyor, netleştirilir.</strong> Faaliyetiniz, ithalat yapısı veya teşvik belgeniz bakımından yukarıdaki üç başlıktan hangisinin sizi kapsadığı ve eşiği aşıp aşmadığınız belirlenir.</li>
          <li><strong>2. Belgeler toplanır.</strong> Fatura ve sözleşmeler, döviz giriş kayıtları, gümrük beyannameleri, teşvik belgesi ve harcama kayıtları gibi dosyaya özgü belgeler hazırlanır.</li>
          <li><strong>3. Yetkili YMM ile sözleşme yapılır.</strong> Raporu yalnızca yetkili Yeminli Mali Müşavir düzenleyebilir. İş kapsamı ve takvim baştan yazılı olarak netleştirilir.</li>
          <li><strong>4. İnceleme ve rapor.</strong> YMM şartları belgeler üzerinden inceler, eksik varsa tamamlatır ve raporu düzenler.</li>
          <li><strong>5. Raporun sisteme yüklenmesi.</strong> Rapor, ilgili mevzuatta öngörülen süre içinde ibraz edilir veya yüklenir. Süre kaçırılırsa yaptırım gündeme gelir.</li>
        </ol>
        <p className="text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak raporu düzenlemiyoruz. Hangi raporun gerektiğini
          belirleme, belge hazırlığı ve YMM ile koordinasyon aşamalarında şirketinize destek oluyoruz.
        </p>
      </section>

      {/* 5 */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Dikkat Edilmesi Gerekenler
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Üç başlık birbirinin yerine kullanılamaz; her birinin dayanağı, eşiği ve süresi ayrı.</li>
          <li>✔ Eşik tutarları ve ibraz süreleri yıllık değişebilir. Eski yıllara ait bir yazıya güvenmeyin.</li>
          <li>✔ Raporu geç sunmanın bedeli, indirimin veya teşvikin kaybedilmesine kadar gidebilir.</li>
          <li>✔ Rapor tek başına yeterli değildir; altındaki belgelerin ve kayıtların düzenli olması gerekir.</li>
          <li>✔ Kendi durumunuzda rapor gerekip gerekmediğinden emin değilseniz önce kısa bir ön değerlendirme yaptırın.</li>
        </ul>
      </section>

      {/* 6 */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Resmî Kaynaklar
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Resmî Gazete: 11257 sayılı Cumhurbaşkanı Kararı (30 Nisan 2026), 2026/1 sayılı Yatırım Teşvik Tebliği (9 Nisan 2026), KDV Genel Uygulama Tebliği değişikliği (31 Ocak 2026)</li>
          <li>✔ Gelir İdaresi Başkanlığı (gib.gov.tr): KDV ve vergi sirkülerleri</li>
          <li>✔ T.C. Sanayi ve Teknoloji Bakanlığı: yatırım teşvik mevzuatı ve duyurular</li>
          <li>✔ mevzuat.gov.tr: güncel kanun ve tebliğ metinleri</li>
        </ul>
      </section>

      {/* SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">YMM raporunu siz mi düzenliyorsunuz?</h3>
            <p className="text-gray-700">Hayır. Raporu yalnızca yetkili YMM düzenleyebilir. Biz hangi raporun gerektiğinin belirlenmesi, belge hazırlığı ve YMM ile koordinasyon konusunda destek veriyoruz.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Hizmet ihracatında rapor her durumda mı zorunlu?</h3>
            <p className="text-gray-700">Hayır. Rapor zorunluluğu indirim tutarının ilgili tebliğdeki yıllık hadlere göre değerlendirilmesine bağlı. Güncel hadleri kontrol etmeden karar vermeyin.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Yatırım tamamlama vizesi için SMMM raporu hâlâ geçerli mi?</h3>
            <p className="text-gray-700">2026/1 sayılı Yatırım Teşvik Tebliği ile SMMM raporu uygulaması sona erdi ve süreç YMM raporu üzerine kuruldu. Raporun hangi dosyalarda aranacağını Bakanlık yazısından teyit edin.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">İthalat KDV bildirimi mi, Özel Amaçlı YMM Raporu mu vermeliyim?</h3>
            <p className="text-gray-700">Belirlenen tutar eşiğinin altında kalanlar bildirim veriyor, üzerindekiler rapor ibraz ediyor. Tam tasdik sözleşmeniz ve raporunuzdaki açıklamalar da bu karara etki edebiliyor.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "YMM raporunu siz mi düzenliyorsunuz?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Raporu yalnızca yetkili YMM düzenleyebilir. Hangi raporun gerektiğinin belirlenmesi, belge hazırlığı ve YMM ile koordinasyon konusunda destek veriyoruz.",
                },
              },
              {
                "@type": "Question",
                name: "Hizmet ihracatında YMM raporu her durumda zorunlu mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Rapor zorunluluğu indirim tutarının ilgili tebliğdeki yıllık hadlere göre değerlendirilmesine bağlıdır. Güncel hadler kontrol edilmeden karar verilmemelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Yatırım tamamlama vizesi için SMMM raporu hâlâ geçerli mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2026/1 sayılı Yatırım Teşvik Tebliği ile SMMM raporu uygulaması sona ermiş ve süreç YMM raporu üzerine kurulmuştur. Raporun hangi dosyalarda aranacağı Bakanlık yazısından teyit edilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "İthalat KDV bildirimi mi, Özel Amaçlı YMM Raporu mu verilmeli?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Belirlenen tutar eşiğinin altında kalanlar vergi dairesine bildirim verir, üzerinde kalanlar Özel Amaçlı YMM Raporu ibraz eder. Tam tasdik sözleşmesi ve raporundaki açıklamalar da bu karara etki edebilir.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
