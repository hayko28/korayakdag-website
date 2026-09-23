import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB Girişimci Destek Programı 2026: Kimler Başvurabilir, Ne Kadar Destek Alınır? | Koray Akdağ",
  description: "Geleneksel ve İleri Girişimci Destek Programı arasındaki fark, kuruluş/performans/sertifika desteği tutarları, makine-teçhizat desteği, genç-kadın-engelli ek desteği ve adım adım başvuru süreciyle 2026 güncel KOSGEB Girişimci Destek Programı rehberi.",
  keywords: [
    "kosgeb girişimci destek programı",
    "kosgeb yeni girişimci desteği",
    "geleneksel girişimci destek programı",
    "ileri girişimci destek programı",
    "kosgeb kuruluş desteği",
    "kosgeb performans desteği",
    "uygulamalı girişimcilik eğitimi",
    "genç girişimci hibe 2026",
    "kadın girişimci desteği kosgeb",
    "kosgeb 2026 destekleri",
  ],
  alternates: {
    canonical: "/blog/kosgeb-girisimci-destek-programi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Girişimci Destek Programı Nedir? Kimler Başvurabilir, Ne Kadar Destek Alınır?"
      description="Geleneksel Girişimci Destek Programı ile İleri Girişimci Destek Programı arasındaki fark, kuruluş/performans/sertifika desteği tutarları, makine-teçhizat-yazılım desteği, genç/kadın/engelli ek desteği, gerekli eğitim şartı ve adım adım başvuru süreciyle 2026 güncel rehber."
      category="KOSGEB • GİRİŞİMCİLİK DESTEĞİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kosgeb-girisimci-destek-programi-2026"
      programDurumu="kapali"
      sonBasvuruTarihi="8 Mayıs 2026 (2. dönem, kapandı — yeni dönem henüz ilan edilmedi)"
      coverImage="https://images.unsplash.com/photo-1752051548874-7d2176a84007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Girişimcilik Sürecinizi Baştan Sona Yönetelim"
      ctaText="Uygulamalı Girişimcilik Eğitiminden başvuru evrakına, kurul sunumundan ödeme talebine kadar KOSGEB Girişimci Destek Programı sürecinin tamamında yanınızdayız. İş fikrinizi birlikte değerlendirelim."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in en çok bilinen ama detaylarında en çok karıştırılan
          desteklerinden biri Girişimci Destek Programı&apos;dır. Çoğu kişi bu
          programı tek bir destek sanıyor, oysa aslında birbirinden farklı
          şartlara ve tutarlara sahip iki ayrı yapıdan (Geleneksel ve İleri
          Girişimci Destek Programı) oluşuyor. Bu yazıda ikisi arasındaki farkı,
          hangi desteğin ne kadar olduğunu ve başvuru sürecinin nasıl
          işlediğini adım adım anlatıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Geleneksel ve İleri Girişimci Destek Programı arasındaki fark</li>
          <li>✔ Kuruluş, performans, sertifika ve makine-teçhizat desteği tutarları</li>
          <li>✔ Genç, kadın, engelli, gazi ve şehit yakınına özel ek destek</li>
          <li>✔ Uygulamalı Girişimcilik Eğitimi nasıl alınır</li>
          <li>✔ Adım adım başvuru süreci</li>
          <li>✔ Dikkat edilmesi gereken zaman sınırları</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. KOSGEB Girişimci Destek Programı Nedir?
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir? Temel Şartlar
          </Link>
          <Link href="#destekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Unsurları ve Tutarları
          </Link>
          <Link href="#ek-destek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Genç, Kadın, Engelli ve Gazi Ek Desteği
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#is-gelistirme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. İş Geliştirme Çağrısı: Ayrıca Bilinmesi Gereken
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. KOSGEB Girişimci Destek Programı Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Girişimci Destek Programı, KOSGEB&apos;in yeni kurulan işletmelerin
          ilk yıllarında ayakta kalmasını kolaylaştırmak amacıyla yürüttüğü,
          geri ödemesiz destek ağırlıklı bir programdır. Program tek bir
          yapı değil, hedef kitlesi ve destek tutarları farklı iki ayrı alt
          programdan oluşur:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌱</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Geleneksel Girişimci Destek Programı
            </h3>
            <p className="text-gray-700">
              Uygulamalı Girişimcilik Eğitimini tamamlayan hemen hemen her
              girişimcinin başvurabildiği, sektör kısıtı görece geniş, temel
              destek kalemlerinden (kuruluş, performans, sertifika) oluşan
              giriş seviyesi program.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🚀</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              İleri Girişimci Destek Programı
            </h3>
            <p className="text-gray-700">
              KOSGEB&apos;in belirlediği stratejik sektörlerde, iş fikri
              değerlendirmesinden geçerek İleri Girişimcilik Eğitimini
              tamamlayan girişimcilere yönelik; temel desteklere ek olarak
              makine-teçhizat-yazılım ve mentörlük desteği de içeren daha
              kapsamlı program.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            İki programın da temel mantığı aynıdır: önce ücretsiz bir
            girişimcilik eğitimi tamamlanır, ardından işletme kurulur ve
            destek başvurusu yapılır. Farkı yaratan, eğitimin türü, hedef
            sektörler ve desteğin kapsamıdır. Tüm destekler geri ödemesizdir,
            yani hibedir.
          </p>
        </div>
      </section>

      {/* 2. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir? Temel Şartlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Her iki alt program için de aranan ortak şartlar büyük ölçüde
          benzerdir, ancak eğitim türü ve sektör kısıtı farklılaşır:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Ortak Şartlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Eğitim şartı:</strong> Geleneksel Girişimci Destek
              Programı için Uygulamalı Girişimcilik Eğitimi, İleri Girişimci
              Destek Programı için ise İleri Girişimcilik Eğitimi
              tamamlanmış olmalıdır.
            </li>
            <li>
              <strong>Ortaklık payı:</strong> Başvuru sahibi girişimcinin
              işletmedeki ortaklık payı en az %50 olmalı ve destek süresi
              boyunca bu oranın altına düşmemelidir.
            </li>
            <li>
              <strong>İşletmenin başında bulunma:</strong> Girişimci,
              işletmenin fiziki ve fiili olarak başında bulunmak zorundadır;
              işi bir yönetici üzerinden yürütmek desteğe uygunluğu
              etkileyebilir.
            </li>
            <li>
              <strong>Kuruluş zamanlaması:</strong> İşletme, ilgili eğitim
              tamamlandıktan sonra kurulmalıdır; eğitimden önce kurulmuş
              işletmeler genel olarak kapsam dışında kalır.
            </li>
            <li>
              <strong>Sektör/NACE şartı:</strong> İşletmenin faaliyeti,
              KOSGEB&apos;in belirlediği destek kapsamındaki sektörler
              (imalat, bilgisayar programlama ve danışmanlık, bilişim
              altyapısı ve veri işleme, telekomünikasyon, bilimsel araştırma
              ve geliştirme gibi alanlar) arasında yer almalıdır.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          İleri Girişimci Destek Programı&apos;na özel olarak, girişimcinin iş
          fikri KOSGEB tarafından o dönem için belirlenen öncelikli
          alan/sektör tablosuna uygun olmalı ve bir jüri değerlendirmesinden
          geçmelidir; bu nedenle İleri Girişimci başvuruları görece daha
          seçicidir.
        </p>
      </section>

      {/* 3. DESTEKLER */}
      <section id="destekler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Unsurları ve Tutarları (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kuruluş, performans ve sertifika desteği her iki programda da
          aynı tutarlarla uygulanır. Makine-teçhizat-yazılım ve mentörlük
          desteği ise yalnızca İleri Girişimci Destek Programı kapsamındadır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek Unsuru</th>
                <th className="p-5">Tutar</th>
                <th className="p-5">Hangi Programda</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kuruluş Desteği (gerçek kişi işletme)</td>
                <td className="p-5">5.000 TL</td>
                <td className="p-5">Geleneksel ve İleri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kuruluş Desteği (sermaye şirketi)</td>
                <td className="p-5">10.000 TL</td>
                <td className="p-5">Geleneksel ve İleri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sertifika Desteği</td>
                <td className="p-5">5.000 TL</td>
                <td className="p-5">Geleneksel ve İleri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Performans Desteği (1. ve 2. dönem, kademeli)</td>
                <td className="p-5">Her dönem 5.000-20.000 TL</td>
                <td className="p-5">Geleneksel ve İleri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Makine/Teçhizat/Yazılım Desteği</td>
                <td className="p-5">100.000-300.000 TL (%75 oran, teknoloji seviyesine göre)</td>
                <td className="p-5">Yalnızca İleri</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Mentörlük/Danışmanlık/Koçluk Desteği</td>
                <td className="p-5">10.000 TL</td>
                <td className="p-5">Yalnızca İleri</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          3.1. Performans Desteği Nasıl Hesaplanır?
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Performans desteği, işletmenin fiilen kaç gündür faaliyette
          olduğuna göre iki ayrı dönemde ve kademeli olarak ödenir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Dönem</th>
                <th className="p-5">Faaliyet Süresi</th>
                <th className="p-5">Destek Tutarı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold" rowSpan={3}>1. Dönem</td>
                <td className="p-5">180-539 gün</td>
                <td className="p-5">5.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">540-1.079 gün</td>
                <td className="p-5">10.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">1.080 gün ve üzeri</td>
                <td className="p-5">20.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold" rowSpan={3}>2. Dönem</td>
                <td className="p-5">360-1.079 gün</td>
                <td className="p-5">5.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">1.080-1.439 gün</td>
                <td className="p-5">15.000 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5">1.440 gün ve üzeri</td>
                <td className="p-5">20.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            İleri Girişimci Destek Programı&apos;nda makine-teçhizat-yazılım
            desteğinde yerli malı belgeli ürün tercih edildiğinde destek
            oranına %15 ilave edilir. Tüm destek kalemleri geri ödemesizdir;
            yalnızca makine-teçhizat alımlarının işletmenin kuruluşundan
            itibaren ilk yıl sonuna kadar gerçekleştirilmesi gerekir.
          </p>
        </div>
      </section>

      {/* 4. EK DESTEK */}
      <section id="ek-destek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Genç, Kadın, Engelli ve Gazi Ek Desteği
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Girişimcinin genç (35 yaş altı), kadın, engelli, gazi veya şehit
          yakını statüsünde olması durumunda, performans desteğine her
          dönem için ayrıca <strong>5.000 TL</strong> ek ödeme yapılır. Bu
          ek destek, hem Geleneksel hem de İleri Girişimci Destek
          Programı&apos;nda geçerlidir ve başvuru sırasında ilgili belgelerle
          (nüfus kaydı, engelli raporu, gazi/şehit yakını belgesi vb.)
          desteklenmelidir.
        </p>
      </section>

      {/* 5. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Adım Adım Başvuru Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Süreç, eğitim tamamlanmadan işletme kurulmasıyla başlamaz; sıra
          önemlidir. Genel akış şu şekilde işler:
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Girişimcilik Eğitimi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">İşletme Kuruluşu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">e-Devlet Üzerinden Başvuru</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Kurul Kararı ve Ödeme</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.1. Girişimcilik Eğitiminin Tamamlanması
          </h3>
          <p className="leading-8 text-gray-700">
            e-Devlet üzerinden KOSGEB hizmetleri içinden &quot;Girişimcilik
            Eğitimi Başvurusu&quot; hizmeti seçilir, yüz yüze veya online
            eğitim tercih edilerek başvuru formu doldurulur. Eğitim
            tamamen ücretsizdir ve sonunda bir sertifika/belge verilir. İleri
            Girişimci Destek Programı için ayrıca iş fikrinin bir jüri
            önünde değerlendirilmesi gerekir.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.2. İşletmenin Kurulması
          </h3>
          <p className="leading-8 text-gray-700">
            Eğitim tamamlandıktan en az 1 gün sonra, gerçek kişi (şahıs
            işletmesi) veya sermaye şirketi (limited/anonim şirket)
            statüsünde işletme kurulur. Kuruluş tarihi, destek başvurusunda
            işletmenin yaşının hesaplanmasında temel referans noktasıdır.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.3. Başvuru Formlarının Doldurulması ve Belge Yüklemesi
          </h3>
          <p className="leading-8 text-gray-700">
            KOSGEB e-hizmetler portalı üzerinden başvuru formu doldurulur,
            işletme belgeleri, faaliyet belgesi ve destek talep edilen
            kalemlere ilişkin belgeler (fatura, teklif vb.) sisteme
            yüklenir.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.4. Kurul Değerlendirmesi ve Ödeme Talebi
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru, ilgili KOSGEB Kurulu tarafından değerlendirilerek karara
            bağlanır. Onay sonrası destek süresi ilk kurul kararının evrak
            kaydı tarihinden itibaren 2 yıldır. Ödeme talebinin, program
            tamamlandıktan sonraki 4 ay içinde yapılması gerekir; bu süre
            kaçırıldığında hak kaybı yaşanabilir.
          </p>
        </div>
      </section>

      {/* 6. İŞ GELİŞTİRME ÇAĞRISI */}
      <section id="is-gelistirme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. İş Geliştirme Çağrısı: Ayrıca Bilinmesi Gereken
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yukarıda anlatılan Geleneksel ve İleri Girişimci Destek Programı
          tutarlarının dışında, KOSGEB zaman zaman 0-3 yaş arası genç
          işletmelere yönelik ayrı ve daha büyük ölçekli bir
          &quot;Girişimci Destek Programı İş Geliştirme Çağrısı&quot; da
          açıyor. 2026 yılında bu çağrının 1. dönemi 3-31 Ocak, 2. dönemi ise
          20 Nisan-8 Mayıs tarihleri arasında uygulanmış; bu dönemde işletme
          başına 1,5 milyon TL&apos;ye kadar %80 oranında geri ödemesiz iş
          geliştirme desteği ve 1 milyon TL&apos;ye kadar kredi finansman
          desteği sağlanmıştı.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu çağrının dönemleri yıl içinde değişebiliyor ve her yeni
            döneme özel duyuru yapılıyor. Genç bir işletmeniz varsa ve
            makalede anlatılan temel destek tutarlarının ötesinde daha
            büyük bir finansman ihtiyacınız varsa, KOSGEB&apos;in güncel
            duyurularını takip etmenizi, yeni bir çağrı açıldığında hızlı
            hareket edebilmeniz için de başvuru sürecini önceden bizimle
            planlamanızı öneririz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Güncel çağrı durumunu birlikte kontrol edelim.
            </Link>
          </p>
        </div>
      </section>

      {/* 7. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İşletmeyi eğitim tamamlanmadan kurmayın, aksi halde destek dışı kalabilirsiniz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ortaklık payınızın destek süresince %50&apos;nin altına düşmediğinden emin olun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Makine-teçhizat alımlarını kuruluşun ilk yılı sonuna kadar tamamlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ödeme talebini program bitiminden sonraki 4 aylık süre içinde yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faaliyet konunuzun destek kapsamındaki sektör/NACE listesinde olduğunu önceden teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Genç/kadın/engelli/gazi ek desteğine hak kazandıran belgeleri eksiksiz sunun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Daha önce Teknogirişim Sermayesi Desteği veya BiGG desteği aldıysanız tekrar başvuramayabileceğinizi bilin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Güncel tutar ve tarihleri her başvuru öncesinde KOSGEB&apos;in resmi sayfasından teyit edin
          </div>
        </div>
      </section>

      {/* 8. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Geleneksel Girişimci Destek Programı ile İleri Girişimci Destek Programı arasındaki fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Geleneksel program, temel kuruluş, performans ve sertifika
              desteğinden oluşur ve görece geniş bir girişimci kitlesine
              açıktır. İleri Girişimci Destek Programı ise aynı temel
              desteklere ek olarak makine-teçhizat-yazılım ve mentörlük
              desteği sunar; ancak belirli stratejik sektörlerde iş fikri
              değerlendirmesinden geçmeyi gerektirir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şahıs işletmesi mi limited şirket mi kurmalıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Her iki yapı da destek kapsamındadır; kuruluş desteği tutarı
              sermaye şirketlerinde (10.000 TL) gerçek kişi işletmelere göre
              (5.000 TL) daha yüksektir. Doğru seçim, iş modelinize,
              büyüme planınıza ve vergi yükünüze göre değişir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek almak için belirli bir başvuru dönemini mi beklemem gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Geleneksel ve İleri Girişimci Destek Programı kapsamındaki
              kuruluş, performans, sertifika ve makine-teçhizat destekleri
              için eğitim ve kuruluş sırasına uyulduğu sürece belirli bir
              takvim şartı aranmaz. Ayrı bir program olan İş Geliştirme
              Çağrısı ise dönemsel olarak açılır ve ilan edilen tarihler
              arasında başvuru gerektirir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Daha önce KOSGEB girişimci desteği aldıysam tekrar başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel kural olarak, bir girişimcinin aynı işletme için
              programdan bir kez yararlanması esastır. Ayrıca daha önce
              Sanayi ve Teknoloji Bakanlığı Teknogirişim Sermayesi Desteği
              veya TÜBİTAK BiGG desteği almış olanlar, bazı yeni çağrılara
              başvuramayabilir; güncel kısıtlar başvuru öncesi teyit
              edilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Toplamda ne kadar destek almam mümkün?
            </h3>
            <p className="leading-8 text-gray-700">
              İleri Girişimci Destek Programı&apos;nda kuruluş, iki dönem
              performans, sertifika, makine-teçhizat-yazılım ve mentörlük
              desteği kalemlerinin üst limitleri toplandığında yüz binlerce
              TL&apos;ye ulaşan bir destek potansiyeli ortaya çıkabilir;
              ancak gerçek tutar, işletmenizin teknoloji seviyesine,
              performans süresine ve genç/kadın/engelli statüsüne göre
              değişir.
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
          KOSGEB Girişimci Destek Programı, doğru sırayla ilerleyen (önce
          eğitim, sonra kuruluş, sonra başvuru) girişimciler için ciddi bir
          maliyet avantajı sunar. Geleneksel program temel bir başlangıç
          desteği sağlarken, İleri Girişimci Destek Programı doğru sektörde
          ve doğru iş fikriyle başvurulduğunda makine-teçhizat ve mentörlük
          desteğiyle çok daha güçlü bir finansman imkânına dönüşür. Hangi
          programın işletmeniz için daha uygun olduğuna, eğitim aşamasından
          önce karar vermeniz, sürecin ilerleyen aşamalarında zaman ve hak
          kaybı yaşamamanızı sağlar.
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
            href="/blog/tekmer-nedir-basvuru-sureci-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKMER • KOSGEB • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TEKMER Nedir? Teknoloji Geliştirme Merkezlerine Nasıl Başvurulur?</h3>
          </Link>
          <Link
            href="/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • NACE KODU • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">NACE Kodu Ürettiğim Ürünle Uyuşmuyorsa KOSGEB Desteği Alabilir miyim?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Geleneksel Girişimci Destek Programı ile İleri Girişimci Destek Programı arasındaki fark nedir?","acceptedAnswer":{"@type":"Answer","text":"Geleneksel program, temel kuruluş, performans ve sertifika desteğinden oluşur ve görece geniş bir girişimci kitlesine açıktır. İleri Girişimci Destek Programı ise aynı temel desteklere ek olarak makine-teçhizat-yazılım ve mentörlük desteği sunar; ancak belirli stratejik sektörlerde iş fikri değerlendirmesinden geçmeyi gerektirir."}},{"@type":"Question","name":"Şahıs işletmesi mi limited şirket mi kurmalıyım?","acceptedAnswer":{"@type":"Answer","text":"Her iki yapı da destek kapsamındadır; kuruluş desteği tutarı sermaye şirketlerinde (10.000 TL) gerçek kişi işletmelere göre (5.000 TL) daha yüksektir. Doğru seçim, iş modelinize, büyüme planınıza ve vergi yükünüze göre değişir."}},{"@type":"Question","name":"Destek almak için belirli bir başvuru dönemini mi beklemem gerekiyor?","acceptedAnswer":{"@type":"Answer","text":"Geleneksel ve İleri Girişimci Destek Programı kapsamındaki kuruluş, performans, sertifika ve makine-teçhizat destekleri için eğitim ve kuruluş sırasına uyulduğu sürece belirli bir takvim şartı aranmaz. Ayrı bir program olan İş Geliştirme Çağrısı ise dönemsel olarak açılır ve ilan edilen tarihler arasında başvuru gerektirir."}},{"@type":"Question","name":"Daha önce KOSGEB girişimci desteği aldıysam tekrar başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Genel kural olarak, bir girişimcinin aynı işletme için programdan bir kez yararlanması esastır. Ayrıca daha önce Sanayi ve Teknoloji Bakanlığı Teknogirişim Sermayesi Desteği veya TÜBİTAK BiGG desteği almış olanlar, bazı yeni çağrılara başvuramayabilir; güncel kısıtlar başvuru öncesi teyit edilmelidir."}},{"@type":"Question","name":"Toplamda ne kadar destek almam mümkün?","acceptedAnswer":{"@type":"Answer","text":"İleri Girişimci Destek Programı'nda kuruluş, iki dönem performans, sertifika, makine-teçhizat-yazılım ve mentörlük desteği kalemlerinin üst limitleri toplandığında yüz binlerce TL'ye ulaşan bir destek potansiyeli ortaya çıkabilir; ancak gerçek tutar, işletmenizin teknoloji seviyesine, performans süresine ve genç/kadın/engelli statüsüne göre değişir."}}]}) }}
      />
    </BlogLayout>
  );
}
