import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB Stratejik Ürün Destek Programı 2026 | Koray Akdağ",
  description:
    "Teknoloji Odaklı Sanayi Hamlesi (HAMLE) Programı kapsamında onaylanan ürünler için KOSGEB'in KOBİ'lere sunduğu Stratejik Ürün Destek Programı: 50.000 TL bağımsız değerlendirme desteği, 10.000.000 TL'ye kadar personel gideri desteği, başvuru şartları ve süreci.",
  keywords: [
    "KOSGEB Stratejik Ürün Destek Programı",
    "Teknoloji Odaklı Sanayi Hamlesi",
    "HAMLE programı KOSGEB",
    "stratejik ürün destek programı 2026",
    "personel gideri desteği KOSGEB",
    "bağımsız değerlendirme desteği",
    "HAMLE çağrısı 2026",
    "KOSGEB yüksek teknoloji desteği",
  ],
  alternates: {
    canonical: "/blog/kosgeb-stratejik-urun-destek-programi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Stratejik Ürün Destek Programı: Teknoloji Hamlesi'nde Onaylanan Ürünüme Ne Kadar Destek Alırım?"
      description="Teknoloji Odaklı Sanayi Hamlesi (HAMLE) Programı çağrı planında onaylanan ürünleri üreten KOBİ'lere KOSGEB'in sağladığı 50.000 TL bağımsız değerlendirme desteği ve 10.000.000 TL'ye kadar personel gideri desteğinin şartlarını, güncel HAMLE çağrı takvimini ve başvuru sürecini güncel kaynaklarla derledik."
      category="KOSGEB • TEKNOLOJİ HAMLESİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kosgeb-stratejik-urun-destek-programi-2026"
      programDurumu="kapali"
      coverImage="https://images.unsplash.com/photo-1748000970909-845f4aa144d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="HAMLE ve Stratejik Ürün Destek Programı Sürecinde Yanınızdayız"
      ctaText="Ürününüzün HAMLE çağrı planına uygunluğundan Program Portalı üzerinden KOSGEB'e yönlendirme sürecine, personel gideri destek başvurunuzdan bağımsız değerlendirme raporuna kadar tüm süreci birlikte yürütelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Sanayi ve Teknoloji Bakanlığı&apos;nın yürüttüğü Teknoloji Odaklı
        Sanayi Hamlesi (HAMLE) Programı, Türkiye&apos;de orta-yüksek ve
        yüksek teknolojili, katma değeri yüksek ürünlerin yerli imkânlarla
        üretilmesini hedefleyen büyük ölçekli bir teşvik mimarisi. Ama çoğu
        işletme sahibi, HAMLE&apos;nin sadece TÜBİTAK Ar-Ge desteği ve
        Yatırım Teşvik Belgesi&apos;nden ibaret olmadığını, KOBİ
        ölçeğindeki işletmeler için KOSGEB&apos;in ayrı ve doğrudan bir
        finansman kapısı daha açtığını bilmiyor. Bu kapının adı Stratejik
        Ürün Destek Programı. Üstelik bu program 2020&apos;de kökten
        yeniden yapılandırıldığı için, internette hâlâ dolaşan pek çok
        &quot;5-6 milyon TL&apos;ye kadar destek&quot; başlıklı içerik
        artık güncelliğini yitirmiş durumda. Bu yazıda programın bugün
        gerçekte nasıl işlediğini, kimlerin başvurabileceğini ve 2026
        HAMLE çağrısıyla bağlantısını güncel kaynaklarla ele alıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Program, KOSGEB&apos;in bağımsız bir başvuru sistemi değil;
            yalnızca <strong>Teknoloji Odaklı Sanayi Hamlesi (HAMLE)
            Programı&apos;na</strong> onaylanmış, Program Portalı üzerinden
            KOSGEB&apos;e yönlendirilmiş KOBİ&apos;lere açık.
          </li>
          <li>
            ✔ Güncel yapıda iki destek unsuru var: <strong>Bağımsız
            Değerlendirme Desteği</strong> (50.000 TL, %100 geri ödemesiz) ve{" "}
            <strong>Personel Gideri Desteği</strong> (10.000.000 TL&apos;ye
            kadar, %80 oranında geri ödemeli).
          </li>
          <li>
            ✔ Personel gideri desteği yalnızca, başvurudan önceki 4 ay
            içinde işletmede çalışmamış <strong>yeni istihdam edilen
            personel</strong> için kullanılabiliyor.
          </li>
          <li>
            ✔ Geri ödemeli kısım faizsiz/komisyonsuz; proje bitiminden
            sonra 6 ay ödemesiz dönemin ardından 3&apos;er aylık dönemlerde
            8 eşit taksitte geri ödeniyor.
          </li>
          <li>
            ✔ 2026 HAMLE çağrısı 20 Mayıs 2026&apos;da yayımlandı; ön
            başvuru <strong>31 Temmuz 2026&apos;da kapandı</strong>, kesin
            başvuru süreci 30 Eylül 2026&apos;ya kadar devam ediyor.
          </li>
          <li>
            ✔ Yeni bir işletmenin bu döngüye dahil olabilmesi için bir
            sonraki HAMLE çağrısını beklemesi gerekiyor; KOSGEB
            desteği ise ancak HAMLE onayından sonra devreye giriyor.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#program-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Program Nedir? HAMLE ile İlişkisi
          </Link>
          <Link href="#kimler-basvurabilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir?
          </Link>
          <Link href="#destek-unsurlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Unsurları ve Tutarları
          </Link>
          <Link href="#geri-odeme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Geri Ödeme Nasıl İşliyor?
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Süreci: HAMLE&apos;den KOSGEB&apos;e
          </Link>
          <Link href="#guncel-durum" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Program Şu An Açık mı?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. PROGRAM NEDİR */}
      <section id="program-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Program Nedir? HAMLE ile İlişkisi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Stratejik Ürün Destek Programı, Sanayi ve Teknoloji
          Bakanlığı&apos;nın yürüttüğü Teknoloji Odaklı Sanayi Hamlesi
          (HAMLE) Programı çerçevesinde onaylanmış, orta-yüksek ve yüksek
          teknoloji sektörlerinde katma değeri yüksek ürünlerin üretimine
          yönelik yatırım projelerini destekleyen bir KOSGEB programı. Ama
          burada kritik bir ayrım var: bu program, klasik bir KOSGEB
          desteği gibi kendi başına başvurulabilen bağımsız bir çağrı
          değil. İşletmenin önce HAMLE Programı&apos;na ön başvuru yapıp
          kesin başvuruya davet edilmesi, ardından HAMLE&apos;nin kendi{" "}
          <strong>Program Portalı</strong> üzerinden KOSGEB&apos;e
          yönlendirilmesi gerekiyor. KOSGEB desteği, bu yönlendirme
          gerçekleştikten sonra devreye giriyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          HAMLE&apos;nin kendisi TÜBİTAK&apos;ın 1511 kodlu Ar-Ge desteğini,
          Yatırım Teşvik Belgesi&apos;nin KDV/gümrük/vergi avantajlarını ve
          KOSGEB&apos;in bu yazıda ele aldığımız desteğini tek bir çağrı
          takvimi altında birleştiren bir &quot;uçtan uca teşvik
          paketi&quot;. KOSGEB ayağı ise özellikle KOBİ ölçeğindeki
          işletmelerin, büyük ölçekli bir yatırım projesi yürütürken
          karşılaştığı iki somut maliyeti hafifletmeye odaklanıyor:
          projeyi değerlendirecek bağımsız danışmanlık firmasının raporu
          ve projeye özel yeni istihdam edilecek personelin maliyeti.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            KOSGEB kendi mevzuatı gereği yalnızca küçük ve orta ölçekli
            işletmelere doğrudan destek verebiliyor. HAMLE kapsamındaki
            büyük ölçekli işletmeler ise bu KOSGEB desteğinden değil,
            TÜBİTAK ve Sanayi ve Teknoloji Bakanlığı&apos;nın proje bazlı
            diğer bileşenlerinden yararlanıyor.
          </p>
        </div>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler-basvurabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in resmî destek sayfasında sıralanan başvuru şartları
          şöyle:
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Başvuru Şartları
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Türkiye&apos;de yerleşik, sermaye şirketi statüsünde olmak (limited veya anonim şirket)</li>
              <li>✔ Küçük veya orta ölçekli işletme (KOBİ) sınıfında olmak</li>
              <li>✔ HAMLE Programı çağrı planında yer alan bir ürünü üretmek üzere ön başvuru ve kesin başvuru sürecini tamamlamış olmak</li>
              <li>✔ HAMLE&apos;nin Program Portalı üzerinden KOSGEB&apos;e resmi olarak yönlendirilmiş olmak</li>
              <li>✔ KOSGEB Bilgi Sistemi&apos;nde (KBS) kayıtlı, aktif ve İşletme Beyanı güncel olmak</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ❌ Başvuramayacak Yapılar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>❌ Şahıs firmaları / şahıs işletmeleri</li>
              <li>❌ Büyük ölçekli işletmeler (bu bileşen için; büyük işletmeler HAMLE&apos;nin diğer bileşenlerinden yararlanır)</li>
              <li>❌ HAMLE Programı&apos;na hiç başvurmamış veya ön başvurusu reddedilmiş işletmeler</li>
              <li>❌ Program Portalı üzerinden KOSGEB&apos;e henüz yönlendirilmemiş işletmeler</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: &quot;Eski&quot; Stratejik Ürün Destek
            Programı ile Güncel Yapı Aynı Değil
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            İnternette bu program hakkında dolaşan pek çok içerik, hâlâ
            2020 öncesindeki yapıyı anlatıyor: 5-6 milyon TL toplam limit,
            makine-teçhizat/yazılım/referans numune için ayrı ayrı %60
            destek oranı ve büyük işletmelerle serbestçe kurulabilen
            iş birliği modeli. Programın Aralık 2020&apos;de HAMLE
            çerçevesine entegre edilmesiyle bu yapı tamamen değişti;
            KOSGEB&apos;in resmî sayfasında 1 Ağustos 2024 sonrası
            uygulama esasları olarak yalnızca iki destek unsuru
            (bağımsız değerlendirme + personel gideri) yer alıyor. Eski
            rakamlarla hazırlanmış bir bütçe planlaması yapmak, başvuru
            aşamasında ciddi bir hayal kırıklığına yol açabilir.
          </p>
          <p className="leading-8 text-gray-700">
            Ayrıca bu programı,{" "}
            <Link href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026" className="text-red-700 underline">
              Kapasite Geliştirme Destek Programı
            </Link>{" "}
            ile de karıştırmayın: ikisi de yüksek limitli finansman
            içeriyor, ama Kapasite Geliştirme genel üretim/dijital dönüşüm
            yatırımlarına açık, Stratejik Ürün Destek Programı ise
            yalnızca HAMLE çağrı planında onaylı bir ürünü üreten
            işletmelere özel.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Bağımsız Değerlendirme Desteği&apos;nin varlığı tesadüfi değil.
            HAMLE sürecinin kendisi, başvuruların Bakanlık tarafından
            yetkilendirilmiş bağımsız danışmanlık firmalarınca
            değerlendirilmesini şart koşuyor ve bu değerlendirme raporunun
            belirli bir tarihe kadar sisteme yüklenmesi gerekiyor. KOSGEB,
            bu zorunlu maliyeti karşılayarak KOBİ&apos;lerin HAMLE
            sürecinde büyük işletmelerle rekabet gücünü dengelemeyi
            amaçlıyor. Başvuru sürecinde en sık gözden kaçan nokta,
            personel gideri desteğinin yalnızca projeye özel yeni istihdam
            için kullanılabildiği, mevcut çalışanların maaşlarına
            aktarılamadığıdır.
          </p>
        </div>
      </section>

      {/* 3. DESTEK UNSURLARI */}
      <section id="destek-unsurlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Unsurları ve Tutarları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Programın güncel (1 Ağustos 2024 sonrası uygulama esasları)
          yapısında iki destek unsuru bulunuyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek Unsuru</th>
                <th className="p-5">Üst Limit</th>
                <th className="p-5">Oran</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Bağımsız Değerlendirme Desteği</td>
                <td className="p-5">50.000 TL</td>
                <td className="p-5">%100 (geri ödemesiz)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Personel Gideri Desteği</td>
                <td className="p-5">10.000.000 TL</td>
                <td className="p-5">%80 (geri ödemeli)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="mt-8 ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            Bağımsız Değerlendirme Desteği, Bakanlık tarafından belirlenen
            formatta, yetkili bağımsız danışmanlık firmalarınca hazırlanan
            değerlendirme raporu giderlerini karşılıyor.
          </li>
          <li>
            Personel gideri desteğinde kişi başına aylık destek üst
            limiti, <strong>brüt asgari ücretin işverene toplam
            maliyetinin 2 katı</strong> ile sınırlı.
          </li>
          <li>
            Bu destek yalnızca, başvuru tarihinden önceki 4 ay içinde
            işletmede çalışmamış olan, <strong>yeni istihdam edilen
            personel</strong> için kullanılabiliyor; mevcut kadronun
            maaşları desteğe konu edilemiyor.
          </li>
          <li>
            Proje süresi en az 8, en fazla 36 ay olmak üzere, 4&apos;er
            aylık katlar halinde belirleniyor.
          </li>
        </ul>
        <div className="mt-10 rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6">
          <p className="leading-8 text-gray-700">
            ⚠️ <strong>Dikkat:</strong> Bazı danışmanlık sitelerinde hâlâ
            &quot;6.000.000 TL toplam destek, makine-teçhizat ve yazılımda
            %60 oran&quot; gibi eski rakamlar dolaşıyor. Bu bilgiler
            programın 2020 öncesi sürümüne ait; güncel uygulamada geçerli
            değil. Başvuru öncesi güncel rakamları mutlaka
            kosgeb.gov.tr&apos;deki resmî destek sayfasından teyit edin.
          </p>
        </div>
      </section>

      {/* 4. GERİ ÖDEME */}
      <section id="geri-odeme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Geri Ödeme Nasıl İşliyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bağımsız Değerlendirme Desteği tamamen geri ödemesiz; işletmeye
          iade edilmesi gerekmiyor. Personel Gideri Desteği&apos;nin
          geri ödemeli %80&apos;lik kısmı ise KOSGEB&apos;in genel geri
          ödemeli destek mantığıyla işliyor:
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Proje bitiminden sonra 6 ay ödemesiz dönem</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">3&apos;er aylık dönemlerde 8 eşit taksit</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Faiz veya komisyon uygulanmaz</h3>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Yani işletme, aldığı personel desteğinin %80&apos;lik geri
            ödemeli dilimini faizsiz olarak, proje tamamlandıktan
            yaklaşık 2,5 yıl sonrasına kadar yayılan bir takvimde geri
            ödüyor. Bu, ticari bir krediyle kıyaslandığında oldukça
            avantajlı bir finansman maliyeti anlamına geliyor.
          </p>
        </div>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Süreci: HAMLE&apos;den KOSGEB&apos;e
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Bu programa &quot;doğrudan&quot; başvuru yapılamıyor; süreç
          HAMLE&apos;nin kendi çağrı takviminde başlıyor:
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">HAMLE Ön Başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Kesin Başvuruya Davet ve Kesin Başvuru</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Bağımsız Değerlendirme Raporu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Program Portalı Üzerinden KOSGEB&apos;e Yönlendirme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">KOSGEB&apos;e Destek Başvurusu ve Sözleşme</h3>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          KOSGEB&apos;e yönlendirilen işletme, KOBİ Bilgi Sistemi üzerinden
          İşletme Beyanı&apos;nı güncel tutarak destek başvuru formunu ve
          ilgili belgeleri (proje bilgi formu, taahhütname, bağımsız
          değerlendirme raporuna ait fatura/sözleşme, yeni istihdam
          edilecek personele ait bilgiler gibi) sisteme yüklüyor.
          Başvurular KOSGEB tarafından şekli ve içerik yönünden
          değerlendirildikten sonra sözleşme aşamasına geçiliyor.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            HAMLE ön başvurusundan Program Portalı yönlendirmesine, KOSGEB
            destek dosyanızın hazırlanmasından sözleşme sürecine kadar
            tüm adımları birlikte yürütebiliriz.{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Şirketinizin HAMLE ve Stratejik Ürün Destek Programı&apos;na
              uygunluğunu ücretsiz ön analizle birlikte değerlendirelim.
            </Link>
          </p>
        </div>
      </section>

      {/* 6. GÜNCEL DURUM */}
      <section id="guncel-durum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Program Şu An Açık mı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2026 yılı Teknoloji Hamlesi Çağrı Programı 20 Mayıs 2026&apos;da
          yayımlandı ve iki ana çağrı konusu belirlendi:{" "}
          <strong>İleri Malzeme Teknolojileri ve Kritik Hammaddeler</strong>{" "}
          ile <strong>Biyoteknoloji ve Sürdürülebilir Yaşam
          Teknolojileri</strong>. Bu çağrıda yatırım büyüklüğü alt sınırı
          genel projeler için 40 milyon TL (Ar-Ge bileşeni varsa bunun en
          az 5 milyon TL&apos;si Ar-Ge&apos;ye ayrılmak zorunda), yalnızca
          yazılım odaklı projelerde ise 15 milyon TL olarak belirlendi.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Aşama</th>
                <th className="p-5">Tarih</th>
                <th className="p-5">Durum (16 Eylül 2026 itibarıyla)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Çağrının yayımlanması</td>
                <td className="p-5">20 Mayıs 2026</td>
                <td className="p-5 text-gray-500">Tamamlandı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ön başvuru</td>
                <td className="p-5">20 Mayıs - 31 Temmuz 2026</td>
                <td className="p-5 text-red-600 font-semibold">Kapandı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kesin başvuru</td>
                <td className="p-5">31 Temmuz - 30 Eylül 2026</td>
                <td className="p-5 text-emerald-600 font-semibold">Devam ediyor</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Bağımsız değerlendirme raporu son yükleme</td>
                <td className="p-5">31 Ekim 2026</td>
                <td className="p-5 text-gray-500">Henüz gelmedi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu tabloya göre, 2026 çağrısı için yeni bir ön başvuru yapmak
            şu anda mümkün değil; pencere 31 Temmuz 2026&apos;da kapandı.
            Bu yazının yayımlandığı tarihte HAMLE sürecine yeni katılmak
            isteyen işletmelerin bir sonraki çağrı dönemini takip etmesi
            gerekiyor. Zaten ön başvurusunu yapmış ve kesin başvuru
            aşamasında olan işletmeler için süreç devam ediyor; bu
            işletmelerin bağımsız değerlendirme sürecini ve ardından
            Program Portalı üzerinden KOSGEB&apos;e yönlendirilme adımını
            takip etmesi gerekiyor.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Güncel çağrı takvimini hamle.sanayi.gov.tr üzerindeki &quot;Çağrı
          Planı&quot; sayfasından, KOSGEB tarafındaki başvuru sürecini ise
          kosgeb.gov.tr&apos;deki Stratejik Ürün Destek Programı sayfasından
          veya 444 1 567 numaralı KOSGEB Çağrı Merkezi&apos;nden teyit
          edebilirsiniz.
        </p>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bu KOSGEB desteğine doğrudan başvurulamaz, önce HAMLE
            sürecinin tamamlanması gerekir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Eski (2020 öncesi) rakamlarla hazırlanmış bütçe
            planlarını güncelleyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Personel gideri desteği yalnızca yeni istihdam için
            geçerli, mevcut çalışanlar kapsam dışı
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Büyük ölçekli işletmeler bu KOSGEB bileşeninden
            yararlanamaz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Geri ödemeli %80&apos;lik dilim faizsiz olsa da nakit akışı
            planınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Çağrı takvimini hem hamle.sanayi.gov.tr hem
            kosgeb.gov.tr üzerinden teyit edin
          </div>
        </div>
      </section>

      {/* 8. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/6492/stratejik-urun-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Stratejik Ürün Destek Programı
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekler/6234/stratejik-urun-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Stratejik Ürün Destek Programı Belge Listesi
            </a>
          </li>
          <li>
            <a
              href="https://hamle.sanayi.gov.tr/Home/ProgramHakkinda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              T.C. Sanayi ve Teknoloji Bakanlığı - Teknoloji Odaklı Sanayi Hamlesi Programı
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB Resmî Web Sitesi
            </a>
          </li>
        </ul>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Stratejik Ürün Destek Programı&apos;na doğrudan KOSGEB&apos;e giderek başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bu destek, yalnızca Teknoloji Odaklı Sanayi Hamlesi
              (HAMLE) Programı&apos;na ön başvuru ve kesin başvurusunu
              tamamlayıp Program Portalı üzerinden KOSGEB&apos;e
              yönlendirilen işletmeler için açılıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Toplam destek üst limiti gerçekten 6 milyon TL mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, bu programın 2020 öncesindeki eski yapısına ait bir
              rakam. Güncel uygulamada iki ayrı destek unsuru var:
              50.000 TL bağımsız değerlendirme desteği ve 10.000.000
              TL&apos;ye kadar personel gideri desteği.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Personel gideri desteğini mevcut çalışanlarım için kullanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Destek yalnızca, başvurudan önceki 4 ay içinde
              işletmede çalışmamış, projeye özel yeni istihdam edilen
              personel için kullanılabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Büyük ölçekli bir işletmeyim, bu KOSGEB desteğinden yararlanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. KOSGEB mevzuatı gereği yalnızca küçük ve orta ölçekli
              işletmelere destek sağlayabiliyor. Büyük ölçekli işletmeler
              HAMLE kapsamında TÜBİTAK Ar-Ge desteği ve Yatırım Teşvik
              Belgesi gibi diğer bileşenlerden yararlanıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026 HAMLE çağrısına şimdi ön başvuru yapabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 2026 çağrısının ön başvuru penceresi 31 Temmuz
              2026&apos;da kapandı. Yeni başvuru yapmak isteyen
              işletmelerin bir sonraki HAMLE çağrı dönemini
              hamle.sanayi.gov.tr üzerinden takip etmesi gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Geri ödemeli destekte faiz uygulanıyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Personel gideri desteğinin geri ödemeli %80&apos;lik
              kısmında faiz veya komisyon uygulanmıyor; proje bitiminden
              sonra 6 ay ödemesiz dönemin ardından 3&apos;er aylık
              dönemlerde 8 eşit taksitte geri ödeniyor.
            </p>
          </div>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB Stratejik Ürün Destek Programı, HAMLE çatısı altında
          yüksek teknolojili bir ürün üretmeyi planlayan KOBİ&apos;ler için
          küçük ama stratejik bir finansman aracı: bağımsız değerlendirme
          maliyetini tamamen sıfırlıyor, yeni istihdamın maliyetinin
          %80&apos;ini faizsiz olarak erteliyor. Ancak bu desteğe
          ulaşmanın yolu doğrudan KOSGEB&apos;den değil, HAMLE&apos;nin
          kendi çağrı takviminden geçiyor. 2026 çağrısında ön başvuru
          penceresi kapandığı için, şu anda hazırlık yapan işletmelerin
          önceliği bir sonraki çağrı dönemine hazır olmak olmalı.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ürününüzün HAMLE çağrı planına uygunluğunu değerlendirmekten
          Program Portalı üzerindeki yönlendirme sürecine, KOSGEB destek
          başvurunuzun hazırlanmasından sözleşme sonrası raporlama
          yükümlülüklerine kadar Koray Akdağ / Sistem Global Danışmanlık
          olarak tüm süreçte yanınızdayız. Ayrı bir danışmanlık firması
          aramanıza gerek kalmadan, hem başvuru sürecinizi hem de
          sonrasındaki takibi tek noktadan yürütebiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
          </Link>
          <Link
            href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı 2026</h3>
          </Link>
          <Link
            href="/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • NACE KODU • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">NACE Kodu Ürünle Uyuşmuyorsa KOSGEB Desteği Alınır mı?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Stratejik Ürün Destek Programı'na doğrudan KOSGEB'e giderek başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Bu destek, yalnızca Teknoloji Odaklı Sanayi Hamlesi (HAMLE) Programı'na ön başvuru ve kesin başvurusunu tamamlayıp Program Portalı üzerinden KOSGEB'e yönlendirilen işletmeler için açılıyor."}},{"@type":"Question","name":"Toplam destek üst limiti gerçekten 6 milyon TL mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, bu programın 2020 öncesindeki eski yapısına ait bir rakam. Güncel uygulamada iki ayrı destek unsuru var: 50.000 TL bağımsız değerlendirme desteği ve 10.000.000 TL'ye kadar personel gideri desteği."}},{"@type":"Question","name":"Personel gideri desteğini mevcut çalışanlarım için kullanabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Destek yalnızca, başvurudan önceki 4 ay içinde işletmede çalışmamış, projeye özel yeni istihdam edilen personel için kullanılabiliyor."}},{"@type":"Question","name":"Büyük ölçekli bir işletmeyim, bu KOSGEB desteğinden yararlanabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. KOSGEB mevzuatı gereği yalnızca küçük ve orta ölçekli işletmelere destek sağlayabiliyor. Büyük ölçekli işletmeler HAMLE kapsamında TÜBİTAK Ar-Ge desteği ve Yatırım Teşvik Belgesi gibi diğer bileşenlerden yararlanıyor."}},{"@type":"Question","name":"2026 HAMLE çağrısına şimdi ön başvuru yapabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. 2026 çağrısının ön başvuru penceresi 31 Temmuz 2026'da kapandı. Yeni başvuru yapmak isteyen işletmelerin bir sonraki HAMLE çağrı dönemini hamle.sanayi.gov.tr üzerinden takip etmesi gerekiyor."}},{"@type":"Question","name":"Geri ödemeli destekte faiz uygulanıyor mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Personel gideri desteğinin geri ödemeli %80'lik kısmında faiz veya komisyon uygulanmıyor; proje bitiminden sonra 6 ay ödemesiz dönemin ardından 3'er aylık dönemlerde 8 eşit taksitte geri ödeniyor."}}]}) }}
      />
    </BlogLayout>
  );
}
