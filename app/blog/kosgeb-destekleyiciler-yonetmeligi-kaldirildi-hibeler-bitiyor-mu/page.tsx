import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "KOSGEB Destekleyiciler Yönetmeliği Kaldırıldı: Hibeler Bitiyor mu? | Koray Akdağ",
  description:
    "16 Ekim 2026 tarihli 33402 sayılı Resmî Gazete'de KOSGEB Destekleyiciler Yönetmeliği yürürlükten kaldırıldı. Bu değişikliğin KOSGEB'in hibe ve kredi faiz destekleriyle ilgisi var mı? Kaldırılan yönetmeliğin gerçekte neyi düzenlediği, hangi destek yönetmeliklerinin hâlâ yürürlükte olduğu ve işletmelerin ne yapması gerektiğiyle 2026 güncel açıklama.",
  keywords: [
    "kosgeb destekleyiciler yönetmeliği kaldırıldı",
    "kosgeb 23 yıllık yönetmelik",
    "kosgeb hibeler bitti mi",
    "kosgeb destek programları yönetmeliği",
    "16 ekim 2026 resmi gazete kosgeb",
    "kosgeb kredi faiz desteği yönetmeliği",
    "kosgeb destekleri 2026 devam ediyor mu",
  ],
  alternates: {
    canonical:
      "/blog/kosgeb-destekleyiciler-yonetmeligi-kaldirildi-hibeler-bitiyor-mu",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB'de 23 Yıllık Yönetmelik Kaldırıldı: Hibe ve Kredi Destekleri Sona Eriyor mu?"
      description="16 Ekim 2026 tarihli Resmî Gazete'de yayımlanan üç maddelik bir yönetmelikle KOSGEB Destekleyiciler Yönetmeliği yürürlükten kaldırıldı. Haber başlıkları 'KOSGEB'de 23 yıllık yönetmelik kaldırıldı' diye duyururken, girişimciler haklı olarak soruyor: hibe ve kredi faiz destekleri de bitiyor mu? Resmî metne dayanarak gerçek cevabı veriyoruz."
      category="KOSGEB • MEVZUAT GÜNDEMİ • 2026"
      date="Ekim 2026"
      readTime="11 Dakika"
      slug="kosgeb-destekleyiciler-yonetmeligi-kaldirildi-hibeler-bitiyor-mu"
      coverImage="https://images.unsplash.com/photo-1768158989131-64cbff67f292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="İşletmeniz İçin Hangi KOSGEB Desteği Hâlâ Açık, Birlikte Netleştirelim"
      ctaText="Bu yönetmelik değişikliği sizin başvurunuzu etkilemiyor, ama güncel KOSGEB programlarından hangisine uygun olduğunuzu bilmek önemli. İşletmenizin NACE kodu ve ölçeğine göre hangi destek programının açık olduğunu birlikte değerlendirelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        16 Ekim 2026 tarihli ve 33402 sayılı Resmî Gazete&apos;de yayımlanan
        kısa bir yönetmelikle KOSGEB Destekleyiciler Yönetmeliği yürürlükten
        kaldırıldı. Haberi gören bazı haber siteleri konuyu &quot;KOSGEB&apos;de
        23 yıllık yönetmelik kaldırıldı&quot; gibi dikkat çekici başlıklarla
        duyurdu ve bu da birçok işletme sahibinde haklı bir endişe yarattı:
        KOSGEB&apos;in hibe ve kredi faiz destekleri de mi sona eriyor? Bu
        yazıda, 16 Ekim 2026 tarihli resmî metne ve kaldırılan 2003 tarihli
        yönetmeliğin kendi içeriğine dayanarak soruyu net bir şekilde
        cevaplıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Hayır, KOSGEB&apos;in işletmelere ve girişimcilere verdiği hibe
            ve kredi faiz destekleri <strong>sona ermedi</strong>.
          </li>
          <li>
            ✔ Kaldırılan yönetmelik, KOSGEB&apos;in kendisine özel ve tüzel
            kişilerden <strong>sponsorluk/ayni-nakdi katkı</strong> alma
            usulünü düzenliyordu (fuar, eğitim, tesis yapımı gibi KOSGEB&apos;in
            kendi faaliyetlerine destek); işletmelere verilen hibeyle hiç
            ilgisi yoktu.
          </li>
          <li>
            ✔ İşletmelere destek veren asıl mevzuat, <strong>KOSGEB Destek
            Programları Yönetmeliği</strong> ve <strong>Kredi Faiz Desteği
            Yönetmeliği</strong> gibi tamamen ayrı yönetmelikler; bunlar bu
            düzenlemeden etkilenmedi.
          </li>
          <li>
            ✔ Kaldırma işlemi 3 maddelik, yürürlüğe yayım tarihinde girdi ve
            uygulaması KOSGEB Başkanına bırakıldı.
          </li>
          <li>
            ✔ &quot;23 yıllık&quot; ifadesi doğru (2003&apos;ten 2026&apos;ya),
            ama &quot;yönetmelik kaldırıldı&quot; başlığı, konunun kapsamı
            belirtilmeden okunduğunda yanlış bir izlenim yaratıyor.
          </li>
          <li>
            ✔ KOSGEB&apos;in güncel destek programları (Girişimci Destek,
            Kapasite Geliştirme, İstihdamı Koruma gibi) normal şekilde
            işlemeye devam ediyor.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#ne-oldu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. 16 Ekim 2026&apos;da Tam Olarak Ne Oldu?
          </Link>
          <Link href="#eski-yonetmelik-ne-diyordu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kaldırılan Yönetmelik Aslında Neyi Düzenliyordu?
          </Link>
          <Link href="#hibeler-ne-oluyor" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Peki Hibe ve Kredi Faiz Destekleri Ne Durumda?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Karıştırmayın: İki Farklı &quot;KOSGEB Yönetmeliği&quot;
          </Link>
          <Link href="#neden-boyle-haber" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başlıklar Neden Yanıltıcı Oldu?
          </Link>
          <Link href="#karsilastirma-tablosu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Yürürlükte Kalan ve Kaldırılan Mevzuat Karşılaştırması
          </Link>
          <Link href="#simdi-ne-yapmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. İşletme Sahibi Olarak Şimdi Ne Yapmalısınız?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NE OLDU */}
      <section id="ne-oldu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. 16 Ekim 2026&apos;da Tam Olarak Ne Oldu?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          16 Ekim 2026 Cuma günü yayımlanan 33402 sayılı Resmî Gazete&apos;nin
          Yönetmelikler bölümünde, KOSGEB tarafından çıkarılan &quot;KOSGEB
          Destekleyiciler Yönetmeliğinin Yürürlükten Kaldırılmasına Dair
          Yönetmelik&quot; başlıklı bir düzenleme yer aldı. Metin sadece üç
          maddeden oluşuyor:
        </p>
        <div className="rounded-2xl border bg-gray-50 p-8">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <strong>Madde 1:</strong> 12 Temmuz 2003 tarihli ve 25166 sayılı
              Resmî Gazete&apos;de yayımlanan KOSGEB Destekleyiciler
              Yönetmeliği yürürlükten kaldırılmıştır.
            </li>
            <li>
              <strong>Madde 2:</strong> Yönetmelik yayımı tarihinde yürürlüğe
              girer.
            </li>
            <li>
              <strong>Madde 3:</strong> Yönetmeliğin uygulanması KOSGEB
              Başkanına aittir.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Metnin kısalığı aslında önemli bir ipucu. Bir kurumun hibe ve kredi
          sistemini kapatan bir düzenleme, genellikle onlarca maddeyle yeni
          kurallar, geçiş hükümleri ve uygulama esasları getirir. Burada ise
          tek yapılan, 2003 yılından kalma ve dar kapsamlı bir yönetmeliğin
          ismen ortadan kaldırılması. Bu da bizi ikinci soruya götürüyor:
          kaldırılan yönetmelik gerçekte neyi düzenliyordu?
        </p>
      </section>

      {/* 2. ESKİ YÖNETMELİK NE DİYORDU */}
      <section id="eski-yonetmelik-ne-diyordu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kaldırılan Yönetmelik Aslında Neyi Düzenliyordu?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          12 Temmuz 2003 tarihli KOSGEB Destekleyiciler Yönetmeliği&apos;nin
          amaç maddesi şöyle:
        </p>
        <div className="rounded-2xl border bg-gray-50 p-8">
          <p className="leading-8 text-gray-700">
            &quot;Bu Yönetmeliğin amacı, KOSGEB&apos;in 3624 sayılı Kuruluş
            Kanunu ile kendisine verilmiş olan görevler çerçevesinde;
            işletmelere ve girişimcilere vermekte olduğu hizmetler, destekler
            ve faaliyetlerin ifası için yerli ve yabancı özel ve tüzel kişiler
            tarafından destek yapılmasına ilişkin esasları belirlemektir.&quot;
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Cümle ilk okunduğunda kafa karıştırıcı görünebilir, ama kapsam
          maddesi konuyu netleştiriyor. Yönetmelik, özel ve tüzel kişilerin
          KOSGEB&apos;in <strong>kendi faaliyet organizasyonlarında, araştırma
          faaliyetlerinde ve tesislerinin yapım/onarımında</strong>{" "}
          &quot;destekleyici&quot; (yani sponsor) olmasına ilişkin usulü
          düzenliyordu. Somut olarak kapsadığı konular şunlardı:
        </p>
        <ul className="ml-6 mt-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            Fuar, sergi, seminer, sempozyum, kongre, panel ve eğitim gibi
            KOSGEB organizasyonlarının tanıtım, kira, dekorasyon, tercüme,
            yol, konaklama gibi giderlerine üçüncü kişilerin ayni veya nakdi
            katkı sağlaması,
          </li>
          <li>
            KOSGEB&apos;in işletmelerin rekabet gücünü artırmaya yönelik
            yaptırdığı araştırma faaliyetlerinin giderlerine destek olunması,
          </li>
          <li>
            KOSGEB&apos;in kendi tesislerinin (enstitü, KÜGEM, TEKMER gibi
            hizmet birimleri) yapımı, onarımı ve tefrişi için arsa, bina,
            araç, gereç veya malzeme katkısı sağlanması.
          </li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Başka bir deyişle bu yönetmelik, bir şirketin veya bireyin
          &quot;sponsor&quot; sıfatıyla KOSGEB&apos;in kendi etkinlik ve
          tesislerine nasıl katkı sunacağını anlatıyordu. İşletmelerin KOSGEB&apos;e
          başvurup hibe veya kredi faiz desteği alması süreciyle hiçbir
          doğrudan bağlantısı yoktu; muhatabı işletmeler değil, KOSGEB&apos;e
          destek vermek isteyen üçüncü taraflardı.
        </p>
      </section>

      {/* 3. HİBELER NE OLUYOR */}
      <section id="hibeler-ne-oluyor" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Peki Hibe ve Kredi Faiz Destekleri Ne Durumda?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in işletmelere ve girişimcilere verdiği hibe, geri
          ödemesiz destek ve kredi faiz desteği sistemi, Destekleyiciler
          Yönetmeliği&apos;nden tamamen bağımsız ayrı yönetmeliklerle
          yürütülüyor. Bu düzenlemenin kaldırılması, aşağıdaki mevzuatın
          hiçbirini etkilemedi:
        </p>
        <ul className="ml-6 mt-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <strong>KOSGEB Destek Programları Yönetmeliği</strong>: Girişimci
            Destek Programı, Kapasite Geliştirme Destek Programı, KOBİ
            Dijital Dönüşüm Destek Programı gibi işletmelere doğrudan hibe ve
            geri ödemesiz destek sağlayan ana mevzuat.
          </li>
          <li>
            <strong>KOSGEB Kredi Faiz Desteği Yönetmeliği</strong>: İşletme
            kredilerinde faiz/kâr payı desteği sağlayan ayrı düzenleme.
          </li>
          <li>
            <strong>İstihdamı Koruma Destek Programı Uygulama Yönetmeliği</strong>:
            İstihdam odaklı finansman desteğinin yürütüldüğü mevzuat.
          </li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Bu üç yönetmelik (ve KOSGEB&apos;in diğer güncel uygulama esasları),
          16 Ekim 2026 tarihli düzenlemede hiç anılmıyor. Kaldırılan tek
          metin, yukarıda özetlenen 2003 tarihli sponsorluk/destekleyicilik
          usulü. Dolayısıyla halihazırda açık olan veya önümüzdeki dönemlerde
          açılacak KOSGEB destek çağrılarının hiçbiri bu değişiklikten
          etkilenmiyor.
        </p>
      </section>

      {/* 4. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Karıştırmayın: İki Farklı &quot;KOSGEB Yönetmeliği&quot;
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Karışıklığın asıl kaynağı, iki yönetmeliğin isminin birbirine çok
            benzemesi:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>
              <strong>KOSGEB Destekleyiciler Yönetmeliği</strong> (kaldırılan):
              Üçüncü kişilerin KOSGEB&apos;e sponsorluk yapmasını düzenliyordu.
              &quot;Destekleyici&quot;, burada KOSGEB&apos;e katkı sağlayan
              kişi/kurum anlamına geliyor.
            </li>
            <li>
              <strong>KOSGEB Destek Programları Yönetmeliği</strong>
              (yürürlükte): İşletmelerin ve girişimcilerin KOSGEB&apos;den
              hibe, geri ödemesiz destek ve kredi faiz desteği almasını
              düzenliyor. Burada &quot;destek&quot;, işletmeye verilen
              finansmanı ifade ediyor.
            </li>
          </ul>
          <p className="mt-4 leading-8 text-gray-700">
            &quot;Destekleyiciler&quot; ve &quot;Destek Programları&quot;
            kelimelerinin benzerliği, haber başlıklarında &quot;yönetmelik
            kaldırıldı&quot; ifadesinin işletmeye verilen desteklerle
            ilişkilendirilmesine yol açtı. Oysa ikisi birbirinden tamamen
            farklı konuları düzenleyen, ayrı tarihli, ayrı amaçlı iki ayrı
            metin.
          </p>
        </div>
      </section>

      {/* 5. NEDEN BÖYLE HABER */}
      <section id="neden-boyle-haber" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başlıklar Neden Yanıltıcı Oldu?
        </h2>
        <p className="mb-8 leading-8 text-gray-700">
          &quot;23 yıllık yönetmelik kaldırıldı&quot; ifadesi teknik olarak
          doğru: yönetmelik gerçekten 2003&apos;ten beri yürürlükteydi ve
          gerçekten kaldırıldı. Sorun ifadenin yanlışlığında değil,
          eksikliğinde. Haberlerin büyük bölümü, kaldırılan metnin kapsamını
          (yani yalnızca üçüncü taraf sponsorluğunu düzenlediğini) açıklamadan
          doğrudan &quot;hibe ve kredi destekleri etkileniyor mu&quot; sorusunu
          gündeme getirdi. Bazı haberler bu soruyu yanıtlarken
          &quot;etkilemiyor&quot; notunu ekledi, bazıları ise başlık
          seviyesinde belirsizlik bırakarak okuyucuyu kendi yorumuna bıraktı.
          Mevzuat gündemini takip ederken, bir düzenlemenin adının benzer
          görünmesiyle kapsamının aynı olması aynı şey değil; bu ayrımı
          yapmak için resmî metnin kendisine bakmak gerekiyor.
        </p>
      </section>

      {/* 6. KARŞILAŞTIRMA TABLOSU */}
      <section id="karsilastirma-tablosu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Yürürlükte Kalan ve Kaldırılan Mevzuat Karşılaştırması
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Yönetmelik</th>
                <th className="p-4">Durum (Ekim 2026)</th>
                <th className="p-4">Ne Düzenliyor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-red-50 hover:bg-red-100">
                <td className="p-4 font-semibold">KOSGEB Destekleyiciler Yönetmeliği</td>
                <td className="p-4 font-semibold text-red-700">Kaldırıldı (16.10.2026)</td>
                <td className="p-4">Üçüncü kişilerin KOSGEB&apos;e sponsorluk/ayni-nakdi katkısı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">KOSGEB Destek Programları Yönetmeliği</td>
                <td className="p-4 font-semibold text-emerald-700">Yürürlükte</td>
                <td className="p-4">İşletmelere hibe ve geri ödemesiz destek (Girişimci, Kapasite Geliştirme, Dijital Dönüşüm vb.)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">KOSGEB Kredi Faiz Desteği Yönetmeliği</td>
                <td className="p-4 font-semibold text-emerald-700">Yürürlükte</td>
                <td className="p-4">İşletme kredilerinde faiz/kâr payı desteği</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">İstihdamı Koruma Destek Programı Uygulama Yönetmeliği</td>
                <td className="p-4 font-semibold text-emerald-700">Yürürlükte</td>
                <td className="p-4">İstihdam odaklı finansman desteği</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. ŞİMDİ NE YAPMALI */}
      <section id="simdi-ne-yapmali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. İşletme Sahibi Olarak Şimdi Ne Yapmalısınız?
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Bu değişiklik işletmenizin KOSGEB başvuru planını hiçbir şekilde
          değiştirmiyor. Eğer bir KOSGEB destek programına başvurmayı
          düşünüyorsanız, yapmanız gereken adımlar aynı:
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">1.</span> Haber
            başlıklarını değil, KOSGEB Destek Programları Yönetmeliği ve
            ilgili program usul ve esaslarını güncel kaynak olarak esas alın.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">2.</span> NACE
            kodunuzun ve işletme ölçeğinizin hangi KOSGEB programına uygun
            olduğunu belirleyin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">3.</span> İlgi
            duyduğunuz programın (örneğin Girişimci Destek veya Kapasite
            Geliştirme) o anki başvuru döneminin açık olup olmadığını KOSGEB&apos;in
            resmî duyuru sayfasından teyit edin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">4.</span> Benzer
            isimli ama farklı kapsamlı mevzuat haberlerini gördüğünüzde,
            kaynağın resmî metne atıf yapıp yapmadığını kontrol edin.
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Mevzuat takibinde en sık yapılan hata, bir düzenlemenin başlığını
            görüp içeriğini okumadan sonuca varmak. KOSGEB gibi çok sayıda
            farklı yönetmeliği aynı anda yürüten bir kurumda, isimlerin
            birbirine benzemesi (destekleyici, destek, destek programı gibi)
            kafa karışıklığı yaratmaya çok müsait. Bir işletme sahibinin asıl
            yapması gereken, kendi başvuracağı programın usul ve esaslarını
            doğrudan takip etmek; genel mevzuat haberlerini ise yalnızca bir
            uyarı sinyali olarak değerlendirip, etkisini resmî metinden teyit
            etmek.
          </p>
        </div>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ &quot;KOSGEB yönetmeliği kaldırıldı&quot; başlığını görünce
            paniğe kapılmadan önce hangi yönetmelikten bahsedildiğini kontrol
            edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ KOSGEB Destek Programları Yönetmeliği ve kendi başvuracağınız
            programın usul ve esasları hâlâ geçerli
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Sponsorluk/destekleyicilik sistemi sadece KOSGEB&apos;e üçüncü
            taraf katkısını ilgilendiriyordu, sizi değil
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ KOSGEB mevzuatı sık güncellenebiliyor, başvuru öncesi güncel
            usul ve esasları mutlaka yeniden teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Üçüncü taraf haber kaynaklarını değil, Resmî Gazete ve KOSGEB&apos;in
            kendi duyurularını birincil kaynak olarak kullanın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hangi destek programının sizin için uygun olduğundan emin
            değilseniz, başvurmadan önce profesyonel destek alın
          </div>
        </div>
      </section>

      {/* 9. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.resmigazete.gov.tr/eskiler/2026/10/20261016-13.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB Destekleyiciler Yönetmeliğinin Yürürlükten Kaldırılmasına
              Dair Yönetmelik - Resmî Gazete (16.10.2026, Sayı 33402)
            </a>
          </li>
          <li>
            <a
              href="https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/Mevzuat/KOSGEB_DESTEKLEY%C4%B0C%C4%B0LER_Y%C3%96NETMEL%C4%B0%C4%9E%C4%B0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB Destekleyiciler Yönetmeliği - Kaldırılan Orijinal Metin
              (KOSGEB resmî mevzuat arşivi)
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Destek Programları Yönetmeliği ve Güncel Destek
              Programları
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

      {/* CTA */}
      <section className="mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Değişen KOSGEB Yapısında Şirketiniz İçin Hangi Yol Açık?
          </h3>
          <p className="leading-8 text-gray-700">
            Yönetmelik değişikliğinden sonra hangi programların açık, hangilerinin kapalı olduğunu şirketiniz özelinde değerlendirmek gerekir. Güncel durumu birlikte gözden geçirebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçebilirsiniz.
            </Link>{" "}
            Ayrıca <Link href="/kosgeb-danismanlik" className="text-orange-600 underline">KOSGEB danışmanlık hizmetimizi inceleyebilirsiniz</Link>.
          </p>
        </div>
      </section>

      {/* 10. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOSGEB Destekleyiciler Yönetmeliği kaldırıldı diye KOSGEB
              hibeleri bitiyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Kaldırılan yönetmelik, işletmelere verilen hibe ve
              kredi faiz desteklerini değil, üçüncü kişilerin KOSGEB&apos;in
              kendi faaliyet ve tesislerine sponsorluk yapmasını
              düzenliyordu. İşletmelere verilen destekler KOSGEB Destek
              Programları Yönetmeliği ile devam ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kaldırılan yönetmelik ne zaman yürürlüğe girmişti?
            </h3>
            <p className="leading-8 text-gray-700">
              12 Temmuz 2003 tarihli ve 25166 sayılı Resmî Gazete&apos;de
              yayımlanmıştı; 16 Ekim 2026&apos;da yürürlükten kaldırılana
              kadar yaklaşık 23 yıl yürürlükte kaldı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kaldırılan yönetmelik tam olarak kimi ilgilendiriyordu?
            </h3>
            <p className="leading-8 text-gray-700">
              KOSGEB&apos;in kendi faaliyet organizasyonlarına (fuar, eğitim,
              seminer gibi), araştırma faaliyetlerine veya tesislerinin
              yapım/onarımına ayni veya nakdi katkı yapmak isteyen özel ve
              tüzel kişileri, yani &quot;destekleyici&quot; olarak
              adlandırılan sponsorları ilgilendiriyordu.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu değişiklikten sonra hangi KOSGEB mevzuatı hâlâ geçerli?
            </h3>
            <p className="leading-8 text-gray-700">
              KOSGEB Destek Programları Yönetmeliği, Kredi Faiz Desteği
              Yönetmeliği ve İstihdamı Koruma Destek Programı Uygulama
              Yönetmeliği gibi işletmelere ve girişimcilere destek sağlayan
              tüm temel mevzuat yürürlükte kalmaya devam ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu düzenleme KOSGEB&apos;e başvurumu nasıl etkiler?
            </h3>
            <p className="leading-8 text-gray-700">
              Hiçbir şekilde etkilemez. Girişimci Destek Programı, Kapasite
              Geliştirme Destek Programı gibi işletmelerin başvurduğu
              programların usul ve esaslarında bu değişiklikten kaynaklanan
              hiçbir güncelleme yok.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOSGEB mevzuatındaki değişiklikleri nereden takip edebilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              En güvenilir yol, Resmî Gazete&apos;nin kendisini ve
              KOSGEB&apos;in resmî web sitesindeki mevzuat ve duyuru
              sayfalarını takip etmek. Üçüncü taraf haber başlıkları bir
              uyarı sinyali olabilir, ama kesinleşmiş bilgi için her zaman
              birincil kaynağa bakmak gerekir.
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
          16 Ekim 2026 tarihli Resmî Gazete&apos;de yayımlanan düzenleme,
          KOSGEB&apos;in 2003&apos;ten kalma, üçüncü kişilerin kendisine
          sponsorluk yapmasını düzenleyen dar kapsamlı bir yönetmeliği
          kaldırdı. İşletmelere ve girişimcilere verilen hibe, geri ödemesiz
          destek ve kredi faiz desteği sistemi bu değişiklikten hiçbir
          şekilde etkilenmedi; KOSGEB Destek Programları Yönetmeliği ve ilgili
          diğer mevzuat aynı şekilde yürürlükte. Haber başlıklarındaki
          belirsizlik, iki farklı yönetmeliğin isminin birbirine benzemesinden
          kaynaklanıyor. Mevzuat gündemini takip ederken başlığa değil,
          düzenlemenin kapsamına bakmak, hem gereksiz endişeden kurtarıyor
          hem de gerçekten önemli bir değişikliği kaçırmamayı sağlıyor.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar ve Hizmetler
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/kosgeb-danismanlik"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • KOSGEB DANIŞMANLIĞI</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Danışmanlığı</h3>
          </Link>
          <Link
            href="/destek-uygunluk-analizi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • DESTEK UYGUNLUK ANALİZİ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Destek Uygunluk Analizi</h3>
          </Link>
          <Link
            href="/blog/kosgeb-girisimci-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • GİRİŞİMCİ DESTEK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Girişimci Destek Programı 2026</h3>
          </Link>
          <Link
            href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • KAPASİTE GELİŞTİRME • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı</h3>
          </Link>
          <Link
            href="/blog/istihdami-koruma-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • İSTİHDAM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İstihdamı Koruma Destek Programı</h3>
          </Link>
          <Link
            href="/blog/kosgeb-tubitak-yatirim-tesvik-belgesi-ayni-anda-kullanilir-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">DEVLET DESTEKLERİ • MÜKERRER DESTEK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB, TÜBİTAK ve YTB Birlikte Kullanılır mı?</h3>
          </Link>
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
                name: "KOSGEB Destekleyiciler Yönetmeliği kaldırıldı diye KOSGEB hibeleri bitiyor mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Kaldırılan yönetmelik, işletmelere verilen hibe ve kredi faiz desteklerini değil, üçüncü kişilerin KOSGEB'in kendi faaliyet ve tesislerine sponsorluk yapmasını düzenliyordu. İşletmelere verilen destekler KOSGEB Destek Programları Yönetmeliği ile devam ediyor.",
                },
              },
              {
                "@type": "Question",
                name: "Kaldırılan yönetmelik ne zaman yürürlüğe girmişti?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "12 Temmuz 2003 tarihli ve 25166 sayılı Resmî Gazete'de yayımlanmıştı; 16 Ekim 2026'da yürürlükten kaldırılana kadar yaklaşık 23 yıl yürürlükte kaldı.",
                },
              },
              {
                "@type": "Question",
                name: "Kaldırılan yönetmelik tam olarak kimi ilgilendiriyordu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "KOSGEB'in kendi faaliyet organizasyonlarına (fuar, eğitim, seminer gibi), araştırma faaliyetlerine veya tesislerinin yapım/onarımına ayni veya nakdi katkı yapmak isteyen özel ve tüzel kişileri, yani destekleyici olarak adlandırılan sponsorları ilgilendiriyordu.",
                },
              },
              {
                "@type": "Question",
                name: "Bu değişiklikten sonra hangi KOSGEB mevzuatı hâlâ geçerli?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "KOSGEB Destek Programları Yönetmeliği, Kredi Faiz Desteği Yönetmeliği ve İstihdamı Koruma Destek Programı Uygulama Yönetmeliği gibi işletmelere ve girişimcilere destek sağlayan tüm temel mevzuat yürürlükte kalmaya devam ediyor.",
                },
              },
              {
                "@type": "Question",
                name: "Bu düzenleme KOSGEB'e başvurumu nasıl etkiler?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hiçbir şekilde etkilemez. Girişimci Destek Programı, Kapasite Geliştirme Destek Programı gibi işletmelerin başvurduğu programların usul ve esaslarında bu değişiklikten kaynaklanan hiçbir güncelleme yok.",
                },
              },
              {
                "@type": "Question",
                name: "KOSGEB mevzuatındaki değişiklikleri nereden takip edebilirim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En güvenilir yol, Resmî Gazete'nin kendisini ve KOSGEB'in resmî web sitesindeki mevzuat ve duyuru sayfalarını takip etmek. Üçüncü taraf haber başlıkları bir uyarı sinyali olabilir, ama kesinleşmiş bilgi için her zaman birincil kaynağa bakmak gerekir.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
