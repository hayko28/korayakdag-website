import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "TÜBİTAK 1831 Yeşil İnovasyon Teknoloji Mentörlük Çağrısı: KOBİ'ler Danışmanlığın %90'ını Nasıl Hibe Alır? | Koray Akdağ",
  description:
    "TÜBİTAK'ın sürekli açık 1831 Yeşil İnovasyon Teknoloji Mentörlük Çağrısı, KOBİ'lerin yeşil dönüşüm danışmanlığı maliyetinin %90'ını hibe olarak karşılıyor. Çözüm Ortağı mekanizması, ödeme şekli, başvuru şartları ve PRODİS süreciyle 2026 güncel rehber.",
  keywords: [
    "TÜBİTAK 1831",
    "Yeşil İnovasyon Teknoloji Mentörlük Çağrısı",
    "TÜBİTAK yeşil dönüşüm mentörlük",
    "Çözüm Ortağı TÜBİTAK",
    "KOBİ yeşil dönüşüm danışmanlığı hibe",
    "Türkiye Yeşil Sanayi Projesi",
    "PRODİS başvuru",
    "TEYDEB 1831",
    "1601 yeşil inovasyon mentörlük",
  ],
  alternates: {
    canonical: "/blog/tubitak-1831-yesil-inovasyon-teknoloji-mentorluk-cagrisi-2026",
  },
};

export default function Tubitak1831Page() {
  return (
    <BlogLayout
      title="TÜBİTAK 1831 Yeşil İnovasyon Teknoloji Mentörlük Çağrısı: KOBİ'ler Danışmanlığın %90'ını Nasıl Hibe Alır?"
      description="Türkiye Yeşil Sanayi Projesi kapsamında yürütülen TÜBİTAK 1831 Yeşil İnovasyon Teknoloji Mentörlük Çağrısı, KOBİ'lerin yeşil dönüşüm yol haritası ve teknoloji danışmanlığı hizmetinin %90'ını hibe olarak karşılıyor. Çözüm Ortağı mekanizması, ödeme şekli, başvuru şartları ve PRODİS üzerinden adım adım süreçle güncel rehber."
      category="TÜBİTAK • YEŞİL İNOVASYON MENTÖRLÜK • 2026"
      date="2026"
      readTime="12 Dakika"
      coverImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="tubitak-1831-yesil-inovasyon-teknoloji-mentorluk-cagrisi-2026"
      programDurumu="acik"
      sonBasvuruTarihi="Sürekli Açık (TÜBİTAK ayrıca duyuru yapana kadar)"
      ctaHeading="1831 Başvurunuz İçin Çözüm Ortağı Seçiminden Yol Haritasına Birlikte Çalışalım"
      ctaText="Hangi hizmet kapsamının başvurunuza uygun olduğundan proje önerisinin PRODİS üzerinden doğru kurulmasına kadar, 1831 başvuru sürecinizi birlikte netleştirebiliriz."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Çoğu KOBİ için yeşil dönüşüm, önce bir yatırım kalemi gibi
        görünür: güneş paneli, yeni makine, enerji verimli ekipman. Ama
        işin gerçek başlangıç noktası genelde farklı bir soru: şirketin
        mevcut üretim sürecinde nerede, ne kadar kaynak israf ediliyor ve
        hangi teknolojiye öncelik verilmeli? TÜBİTAK&apos;ın 2024&apos;ten
        bu yana sürekli açık tuttuğu 1831 Yeşil İnovasyon Teknoloji
        Mentörlük Çağrısı, tam olarak bu soruya cevap arayan KOBİ&apos;lere
        yönelik; uzman bir Çözüm Ortağından alınan danışmanlık
        hizmetinin %90&apos;ını hibe olarak karşılıyor. Bu yazıda programın
        nasıl işlediğini, kimlerin başvurabileceğini ve adım adım süreci
        TÜBİTAK&apos;ın resmî çağrı duyurusuna dayanarak ele alıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ 1831, TÜBİTAK&apos;ın <strong>Türkiye Yeşil Sanayi
            Projesi</strong> kapsamında yürüttüğü bir mentörlük/danışmanlık
            programı; yatırım değil, uzman desteği finanse ediyor.
          </li>
          <li>
            ✔ KOBİ, TÜBİTAK&apos;ın belirlediği bir <strong>Çözüm
            Ortağından</strong> yeşil dönüşüm danışmanlığı alıyor; hizmet
            bedelinin <strong>%90&apos;ını TÜBİTAK</strong>, kalan
            KDV hariç %10&apos;unu ve KDV tutarını KOBİ ödüyor.
          </li>
          <li>
            ✔ Hizmet alımı üst sınırı KDV hariç <strong>7.000 ABD
            Doları</strong> karşılığı Türk Lirası olarak belirleniyor; bu
            tutar dönemsel olarak güncelleniyor (ilk dönemde 210.000 TL
            idi).
          </li>
          <li>
            ✔ Destek süresi proje başına <strong>en fazla 6 ay</strong>;
            çağrı, bu bileşene ayrılan 20 milyon ABD Doları kaynak
            tükenene kadar <strong>sürekli başvuruya açık</strong>.
          </li>
          <li>
            ✔ Başvuru yalnızca <strong>Türkiye&apos;de yerleşik,
            KOBİ tanımına giren sermaye şirketlerine</strong> açık; şahıs
            şirketi, dernek, vakıf, kooperatif ve ortaklı başvuru kabul
            edilmiyor.
          </li>
          <li>
            ✔ Bir KOBİ bu çağrıdan <strong>en fazla 3 defa</strong>,
            aynı Çözüm Ortağı ile <strong>en fazla 2 defa</strong>
            yararlanabiliyor.
          </li>
          <li>
            ✔ Başvuru PRODİS (eteydeb.tubitak.gov.tr) üzerinden,
            kuruluş bazlı ön kayıt sonrası elektronik olarak yapılıyor.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. TÜBİTAK 1831 Nedir?
          </Link>
          <Link href="#mekanizma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Çözüm Ortağı Mekanizması Nasıl İşliyor?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Başvurabilir?
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Hangi Hizmetler Destekleniyor?
          </Link>
          <Link href="#destek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Destek Tutarı ve Ödeme Şekli
          </Link>
          <Link href="#ortaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Çözüm Ortakları Kimlerdir?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Başvuru Süreci: Adım Adım
          </Link>
          <Link href="#limitler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Yararlanma Sınırları ve Değerlendirme
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. TÜBİTAK 1831 Yeşil İnovasyon Teknoloji Mentörlük Çağrısı Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          1831, Sanayi ve Teknoloji Bakanlığı, TÜBİTAK ve KOSGEB&apos;in
          Dünya Bankası finansmanıyla birlikte yürüttüğü Türkiye Yeşil
          Sanayi Projesi&apos;nin bir alt bileşenidir. Projenin toplam
          bütçesi 450 milyon ABD Doları; TÜBİTAK&apos;ın yürüttüğü üçüncü
          bileşenin bütçesi ise 175 milyon ABD Doları olarak belirlenmiş.
          Bu bileşen kapsamında hem geri ödemeli Ar-Ge finansmanı (1832
          Sanayide Yeşil Dönüşüm Çağrısı) hem de doğrudan danışmanlık
          desteği (1831) sağlanıyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          1831&apos;in amacı, bir KOBİ&apos;nin kendi başına fark
          etmekte zorlanabileceği teknoloji ve yenilik ihtiyaçlarını,
          TÜBİTAK&apos;ın belirlediği uzman kuruluşlar (Çözüm Ortakları)
          aracılığıyla ortaya çıkarmak. Resmî çağrı metninde bu amaç şöyle
          tanımlanıyor: &quot;Yeşil dönüşüm çerçevesinde iş modellerini,
          tedarik ve değer zincirlerini, ürün ve hizmetlerini gözden
          geçirmek isteyen KOBİ&apos;lere teknik yardım sağlanacaktır.&quot;
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Çağrının Hedeflediği Çıktılar
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ KOBİ&apos;nin yeşil dönüşüm konusundaki mevcut durumunun belirlenmesi</li>
            <li>✔ İyileştirmeye açık başlıkların boşluk analiziyle ortaya konması</li>
            <li>✔ Bu ihtiyaçlara uygun teknoloji/çözüm önerilerinin geliştirilmesi</li>
            <li>✔ Çözümlerin hayata geçirilmesi için bir yol haritası hazırlanması</li>
            <li>✔ Yol haritasının uygulanmasında KOBİ&apos;ye rehberlik edilmesi</li>
          </ul>
        </div>
        <p className="leading-8 text-gray-700">
          Burada ortaya çıkan Yol Haritası Raporu tesadüfi bir çıktı
          değil. Çağrı metni, bu raporun 3305 sayılı Yatırımlarda Devlet
          Yardımları Hakkında Karar kapsamında hazırlanacak olan Yeşil
          Dönüşüm Destek Programı&apos;nın talep ettiği Yol Haritası Raporu
          formatı dikkate alınarak hazırlandığını belirtiyor. Yani 1831
          kapsamında alınan danışmanlık hizmetinin çıktısı, KOBİ&apos;nin
          ilerleyen bir aşamada fiilî yeşil dönüşüm yatırımı için başka bir
          destek programına başvururken doğrudan kullanabileceği bir
          belgeye dönüşüyor.
        </p>
      </section>

      {/* 2. MEKANİZMA */}
      <section id="mekanizma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Çözüm Ortağı Mekanizması Nasıl İşliyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          1831&apos;i diğer TÜBİTAK programlarından ayıran en belirgin
          özellik, desteğin doğrudan KOBİ&apos;ye nakit olarak
          aktarılmaması. KOBİ, TÜBİTAK&apos;ın önceden belirlediği bir
          &quot;Çözüm Ortağı&quot;ndan hizmet alıyor; Çözüm Ortağı
          hizmeti verdikten sonra KOBİ&apos;ye fatura kesiyor ve
          TÜBİTAK bu faturanın %90&apos;ını doğrudan Çözüm Ortağına
          ödüyor. KOBİ&apos;nin cebinden çıkan kısım, fatura bedelinin
          KDV hariç %10&apos;u ile KDV tutarından ibaret.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Örneğin hizmet bedeli KDV hariç 200.000 TL ise: Çözüm
            Ortağı KOBİ&apos;ye 200.000 TL + KDV tutarında fatura
            keser. TÜBİTAK, bu 200.000 TL&apos;nin %90&apos;ı olan
            180.000 TL&apos;yi doğrudan Çözüm Ortağına öder. KOBİ ise
            kalan 20.000 TL&apos;yi (%10) ve fatura üzerindeki KDV
            tutamını Çözüm Ortağına öder; bu ödemeyi en geç Dönem
            Raporunu TÜBİTAK&apos;a sunduğu tarihe kadar tamamlamalıdır.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: 1831, 1832 ve KOSGEB Yeşil Sanayi Destek
            Programı Üç Farklı Şey Finanse Ediyor
          </h3>
          <p className="leading-8 text-gray-700">
            Aynı Türkiye Yeşil Sanayi Projesi şemsiyesi altında
            yürütülen bu üç program sık sık birbirine karıştırılıyor.{" "}
            <strong>1831</strong>, bir Ar-Ge projesi değil; KOBİ&apos;nin
            mevcut durumunu analiz edip yol haritası çıkaracak bir{" "}
            <strong>danışmanlık/mentörlük hizmetini</strong> finanse
            ediyor, üst sınırı KDV hariç 7.000 dolar civarında.{" "}
            <Link
              href="/blog/tubitak-1832-sanayide-yesil-donusum-cagrisi-2026"
              className="text-orange-600 underline"
            >
              TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı
            </Link>{" "}
            ise bambaşka bir ölçekte, enerji/su/atık verimliliğini
            artıracak bir <strong>Ar-Ge projesinin</strong> bütçesini
            (büyük ölçekte 51,5 milyon TL&apos;ye kadar) önce faizsiz
            kredi olarak kullandırıp sonuca göre kısmen hibeye
            dönüştürüyor.{" "}
            <Link
              href="/blog/kosgeb-yesil-sanayi-destek-programi-2026"
              className="text-orange-600 underline"
            >
              KOSGEB Yeşil Sanayi Destek Programı
            </Link>{" "}
            ise danışmanlık veya Ar-Ge değil, doğrudan{" "}
            <strong>yatırımı</strong> (örneğin çatı tipi güneş enerjisi
            sistemi kurulumunu) destekliyor. Bir KOBİ, önce 1831&apos;den
            yol haritasını çıkarıp ardından ihtiyacına göre 1832&apos;ye
            veya KOSGEB Yeşil Sanayi&apos;ye başvurabilir; bu üç program
            birbirinin yerine geçmiyor, birbirini tamamlıyor.
          </p>
        </div>
      </section>

      {/* 3. KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Başvurabilir?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Başvuru Yapabilecekler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ 25/05/2023 tarihli ve 32201 sayılı Resmî Gazete&apos;de yayımlanan Küçük ve Orta Büyüklükteki İşletmeler Yönetmeliği&apos;ne giren KOBİ&apos;ler</li>
              <li>✔ Türkiye&apos;de yerleşik, kanuni ve iş merkezi Türkiye&apos;de bulunan sermaye şirketleri</li>
              <li>✔ Proje bazlı ön kaydını PRODİS üzerinden tamamlamış kuruluşlar</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ❌ Başvuru Yapamayacaklar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✘ Kanuni ve iş merkezi yurt dışında olup Türkiye&apos;de dar mükellefiyet statüsünde temsilcilik/şube açanlar</li>
              <li>✘ Vakıf, dernek, kooperatif, birlik ve bunların iktisadi işletmeleri</li>
              <li>✘ Şahıs şirketleri ve adi ortaklıklar</li>
              <li>✘ Birden fazla kuruluşun ortaklı yaptığı başvurular (bu çağrıda kabul edilmiyor)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Hangi Hizmetler Destekleniyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Çağrı kapsamında yalnızca TÜBİTAK&apos;ın belirlediği bir
          Çözüm Ortağından alınan aşağıdaki türde hizmetler destek
          kapsamında değerlendiriliyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl">🔍</div>
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Mevcut Durum / Boşluk Analizi</h3>
            <p className="text-gray-700">KOBİ&apos;nin yeşil dönüşüm konusundaki mevcut durumunun belirlenmesi ve iyileştirmeye açık başlıkların tespiti</p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl">🧭</div>
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Teknoloji Danışmanlığı</h3>
            <p className="text-gray-700">Tespit edilen ihtiyaçlara uygun teknoloji ve çözüm önerilerinin geliştirilmesi</p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl">🗺️</div>
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Yol Haritası Hazırlığı</h3>
            <p className="text-gray-700">Belirlenen çözümlerin hayata geçirilmesine yönelik yazılı bir yol haritası oluşturulması</p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl">🤝</div>
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Uygulama Rehberliği</h3>
            <p className="text-gray-700">Yol haritasının uygulanması sürecinde KOBİ&apos;ye uzman rehberliği yapılması</p>
          </div>
        </div>
      </section>

      {/* 5. DESTEK TUTARI */}
      <section id="destek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Destek Tutarı ve Ödeme Şekli
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Tutar / Oran</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">TÜBİTAK destek oranı</td>
                <td className="p-5 font-bold text-green-600">Hizmet bedelinin %90&apos;ı (hibe)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KOBİ&apos;nin ödediği pay</td>
                <td className="p-5">Fatura bedelinin (KDV hariç) %10&apos;u + KDV tutarı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hizmet alımı üst sınırı</td>
                <td className="p-5">KDV hariç 7.000 ABD Doları karşılığı TL (dönemsel güncellenir)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Destek süresi</td>
                <td className="p-5">En fazla 6 ay</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Bileşene ayrılan toplam kaynak</td>
                <td className="p-5">20 milyon ABD Doları (tükenene kadar çağrı açık)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Not: TÜBİTAK, hizmet alımı üst sınırını dönemsel olarak Türk
          Lirası cinsinden güncelliyor; ilk dönemde (16.05.2024 -
          30.06.2024) bu tutar 210.000 TL olarak belirlenmişti. Başvuru
          tarihinizde geçerli olan güncel TL tutarını PRODİS üzerindeki
          çağrı duyurusu ekinden teyit etmeniz gerekir.
        </p>
      </section>

      {/* 6. ÇÖZÜM ORTAKLARI */}
      <section id="ortaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Çözüm Ortakları Kimlerdir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          KOBİ, bu çağrı kapsamında yalnızca TÜBİTAK&apos;ın önceden
          onayladığı ve resmî Çözüm Ortağı listesinde yer alan bir
          kuruluştan hizmet satın alabiliyor; listede yer almayan bir
          danışman veya firmadan alınan hizmet değerlendirmeye
          alınmıyor. TÜBİTAK, çağrı kapsamında yeni Çözüm Ortakları
          ekleyebiliyor veya mevcut ortakları listeden çıkarabiliyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Liste geniş bir yelpazeyi kapsıyor: sanayi ve ticaret odaları,
          üniversitelerin teknoloji transfer ofisleri, teknokent yönetici
          şirketleri, sektör dernekleri ve yeşil dönüşüm/sürdürülebilirlik
          konusunda uzmanlaşmış danışmanlık kuruluşları bu kapsamda yer
          alıyor. Hangi kuruluşların hangi dönemde aktif Çözüm Ortağı
          statüsünde olduğu değişebildiği için, başvuru öncesinde güncel
          listenin TÜBİTAK&apos;ın resmî 1831 çağrı sayfasından kontrol
          edilmesi gerekiyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurularda en sık gözden kaçan nokta, Çözüm Ortağı
            seçiminin başvurudan önce netleşmiş olması gerektiğidir.
            KOBİ, uzman desteği alacağı Çözüm Ortağını belirledikten
            sonra başvurusunu TÜBİTAK&apos;a sunabiliyor; yani süreç
            &quot;önce proje onaylanır, sonra ortak bulunur&quot; şeklinde
            işlemiyor. Bu nedenle başvuru öncesinde, ihtiyaç duyulan
            hizmet alanına (örneğin enerji verimliliği mi, döngüsel
            ekonomi mi, karbon ayak izi hesaplaması mı) en uygun uzmanlığa
            sahip Çözüm Ortağının seçilmesi, hem panel değerlendirmesinde
            hem de alınacak hizmetin kalitesinde doğrudan fark yaratıyor.
          </p>
        </div>
      </section>

      {/* 7. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Başvuru Süreci: Adım Adım
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🧾</div>
            <h3 className="text-lg font-bold">1. İhtiyaç Belirleme</h3>
            <p className="mt-2 text-sm text-gray-600">Hangi konuda (enerji, su, atık, döngüsel ekonomi) destek alınacağı netleştirilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🏢</div>
            <h3 className="text-lg font-bold">2. Çözüm Ortağı Seçimi</h3>
            <p className="mt-2 text-sm text-gray-600">Güncel Çözüm Ortağı listesinden uygun kuruluş belirlenir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💻</div>
            <h3 className="text-lg font-bold">3. Kuruluş Bazlı Ön Kayıt</h3>
            <p className="mt-2 text-sm text-gray-600">PRODİS (eteydeb.tubitak.gov.tr) üzerinden ön kayıt tamamlanır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📝</div>
            <h3 className="text-lg font-bold">4. Proje Önerisi Gönderimi</h3>
            <p className="mt-2 text-sm text-gray-600">Problem tanımı, çözüm önerisi, iş planı ve bütçe PRODİS&apos;e e-imzayla yüklenir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="text-lg font-bold">5. Panel Değerlendirmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Öneriler aylık gruplanarak panel yöntemiyle değerlendirilir</p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Proje önerisinde uyum (çağrı kapsamıyla ilişki), yapılabilirlik,
          projenin etki potansiyeli ve proje ekibinin (KOBİ ve Çözüm
          Ortağı) yetkinliği gibi başlıklar yer almalı. Onay sonrasında
          hizmet fiilen verilir, Çözüm Ortağı KOBİ&apos;ye fatura keser,
          KOBİ kendi payını öder ve süreç TÜBİTAK&apos;a sunulan Dönem
          Raporu ile tamamlanır.
        </p>
      </section>

      {/* 8. SINIRLAR */}
      <section id="limitler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Yararlanma Sınırları ve Değerlendirme Kriterleri
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-xl font-bold text-[#071A2F]">Yararlanma Sınırları</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Bir KOBİ, çağrı kapsamında en fazla <strong>3 defa</strong> proje desteğinden faydalanabilir</li>
              <li>✔ Aynı Çözüm Ortağı ile en fazla <strong>2 defa</strong> proje başvurusunda bulunulabilir</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-xl font-bold text-[#071A2F]">Değerlendirme Boyutları (her biri %25)</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Projenin 1831 kapsamına uyumu</li>
              <li>✔ Projenin yapılabilirliği</li>
              <li>✔ Projenin etki potansiyeli</li>
              <li>✔ Proje ekibinin (KOBİ + Çözüm Ortağı) yetkinliği</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Panelistler her boyutu 1 ile 5 arasında puanlıyor; kuruluş
          yetkilisi kadın olan, sermayesinin çoğunluğu kadın ortaklara ait
          olan veya çalışanlarının çoğunluğu kadınlardan oluşan
          KOBİ&apos;lerin panel değerlendirme puanına 3 ek puan
          ekleniyor.
        </p>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Çözüm Ortağını başvurudan önce belirleyin, listede olmayan bir kuruluştan alınan hizmet değerlendirmeye alınmaz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hizmet alımı üst sınırının TL karşılığı güncellenebilir, başvuru anındaki tutarı teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ KOBİ payını (%10 + KDV) Dönem Raporu sunulmadan önce Çözüm Ortağına ödemiş olmanız gerekir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bu çağrıda ortaklı (birden fazla kuruluşun birlikte yaptığı) başvuru kabul edilmiyor
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kuruluş bazlı ön kayıt tamamlanmadan proje önerisi gönderilemez
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Alınan Yol Haritası Raporu, ileride Yeşil Dönüşüm Destek Programı gibi yatırım destekli başvurularda kullanılabilir; raporu sağlam kurdurun
          </div>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.tubitak.gov.tr/tr/destekler/destek/sanayi/ulusal-destek-programlari/cagri-1831-yesil-inovasyon-teknoloji-mentorluk-cagrisi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜBİTAK - 1831 Yeşil İnovasyon Teknoloji Mentörlük Çağrısı Program Sayfası
            </a>
          </li>
          <li>
            <a
              href="https://tubitak.gov.tr/sites/default/files/2024-05/1831_2024-1_Cagri_Duyurusu_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              1831-2024-1 Çağrı Duyurusu (Resmî PDF)
            </a>
          </li>
          <li>
            <a
              href="http://eteydeb.tubitak.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              PRODİS - Proje Değerlendirme ve İzleme Sistemi
            </a>
          </li>
          <li>
            <a
              href="https://www.resmigazete.gov.tr/eskiler/2023/05/20230525-7.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Küçük ve Orta Büyüklükteki İşletmeler Yönetmeliği (32201 sayılı RG)
            </a>
          </li>
        </ul>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TÜBİTAK 1831 desteği KOBİ&apos;nin hesabına mı yatırılıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Destek, KOBİ&apos;ye nakit olarak aktarılmıyor.
              TÜBİTAK, hizmet bedelinin %90&apos;ını Çözüm Ortağına
              doğrudan ödüyor; KOBİ ise fatura bedelinin kalan %10&apos;unu
              ve KDV tutarını Çözüm Ortağına ödüyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              1831&apos;in son başvuru tarihi var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Çağrı, TÜBİTAK ayrıca bir kapanış duyurusu yapana kadar
              sürekli başvuruya açık tutuluyor; resmî sayfada başvuru
              bitiş tarihi 1 Ocak 2030 olarak görünüyor, ancak bu
              bileşene ayrılan 20 milyon ABD Doları kaynak tükendiğinde
              çağrının kapatılması söz konusu olabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İstediğim herhangi bir danışmanlık firmasından hizmet alıp 1831&apos;e başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Hizmet, yalnızca TÜBİTAK&apos;ın başvuru
              tarihinizde güncel Çözüm Ortağı listesinde yer alan bir
              kuruluştan alınmalı. Listede olmayan bir danışmandan
              alınan hizmet destek kapsamında değerlendirilmez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              1831 ile TÜBİTAK 1832 aynı programın farklı aşamaları mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, ikisi ayrı destek mekanizmaları. 1831, bir
              danışmanlık/mentörlük hizmetini (üst sınır KDV hariç 7.000
              dolar civarı) finanse ediyor. 1832 ise çok daha büyük
              ölçekli bir Ar-Ge projesinin bütçesini önce faizsiz kredi
              olarak kullandırıp sonuç odaklı şekilde kısmen hibeye
              dönüştürüyor. Bir KOBİ önce 1831&apos;den yol haritasını
              çıkarıp sonra 1832&apos;ye başvurabilir, ama bu zorunlu bir
              ön koşul değil.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şahıs şirketi veya adi ortaklık 1831&apos;e başvurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Çağrı yalnızca Türkiye&apos;de yerleşik, KOBİ
              tanımına giren sermaye şirketlerine açık. Şahıs şirketleri,
              adi ortaklıklar, dernek, vakıf ve kooperatifler başvuru
              yapamıyor; ortaklı (birden fazla kuruluşun birlikte yaptığı)
              başvuru da bu çağrı kapsamında kabul edilmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bir şirket bu destekten birden fazla kez yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, sınırlı sayıda. Bir KOBİ, çağrı kapsamında en fazla
              3 defa proje desteğinden faydalanabiliyor; ancak aynı
              Çözüm Ortağı ile en fazla 2 defa proje başvurusunda
              bulunabiliyor.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 1831 Başvuru Sürecinizi Birlikte Netleştirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Hangi yeşil dönüşüm başlığında (enerji verimliliği, döngüsel
            ekonomi, karbon ayak izi gibi) uzman desteğine ihtiyacınız
            olduğunu, buna uygun Çözüm Ortağı profilini ve proje
            önerinizin PRODİS üzerinde panel değerlendirmesini geçecek
            şekilde nasıl kurulması gerektiğini birlikte
            değerlendirebiliriz.{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Şirketinizin destek uygunluğunu ücretsiz ön analizle
              değerlendirelim
            </Link>{" "}
            veya{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              doğrudan bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          TÜBİTAK 1831 Yeşil İnovasyon Teknoloji Mentörlük Çağrısı,
          büyük bir yatırım kararı vermeden önce &quot;şirketimde gerçekte
          nerede iyileştirme yapmalıyım&quot; sorusuna profesyonel bir
          cevap arayan KOBİ&apos;ler için düşük riskli, yüksek hibe
          oranlı bir giriş noktası. Danışmanlık maliyetinin %90&apos;ının
          karşılanması, çoğu KOBİ&apos;nin kendi bütçesiyle
          karşılayamayacağı bir uzman desteğini erişilebilir kılıyor.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          Çağrının sürekli açık olması, acele etmenize gerek olmadığı
          anlamına gelmiyor; ayrılan 20 milyon dolarlık kaynak
          tükendiğinde çağrı kapatılabilir. Doğru Çözüm Ortağını seçip
          başvurunuzu zamanında hazırlamak, hem sürecin hızını hem de
          elde edeceğiniz Yol Haritası Raporu&apos;nun kalitesini
          doğrudan etkiliyor.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/tubitak-1832-sanayide-yesil-donusum-cagrisi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • YEŞİL DÖNÜŞÜM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı</h3>
          </Link>
          <Link
            href="/blog/kosgeb-yesil-sanayi-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • YEŞİL DÖNÜŞÜM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Yeşil Sanayi Destek Programı</h3>
          </Link>
          <Link
            href="/blog/karbon-ayak-izi-hesaplama-kobiler-icin-rehber-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • KARBON AYAK İZİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Karbon Ayak İzi Hesaplama: KOBİ&apos;ler İçin 2026 Rehberi</h3>
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
                name: "TÜBİTAK 1831 desteği KOBİ'nin hesabına mı yatırılıyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Destek, KOBİ'ye nakit olarak aktarılmıyor. TÜBİTAK, hizmet bedelinin %90'ını Çözüm Ortağına doğrudan ödüyor; KOBİ ise fatura bedelinin kalan %10'unu ve KDV tutarını Çözüm Ortağına ödüyor.",
                },
              },
              {
                "@type": "Question",
                name: "1831'in son başvuru tarihi var mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Çağrı, TÜBİTAK ayrıca bir kapanış duyurusu yapana kadar sürekli başvuruya açık tutuluyor; resmî sayfada başvuru bitiş tarihi 1 Ocak 2030 olarak görünüyor, ancak bu bileşene ayrılan 20 milyon ABD Doları kaynak tükendiğinde çağrının kapatılması söz konusu olabilir.",
                },
              },
              {
                "@type": "Question",
                name: "İstediğim herhangi bir danışmanlık firmasından hizmet alıp 1831'e başvurabilir miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Hizmet, yalnızca TÜBİTAK'ın başvuru tarihinizde güncel Çözüm Ortağı listesinde yer alan bir kuruluştan alınmalı. Listede olmayan bir danışmandan alınan hizmet destek kapsamında değerlendirilmez.",
                },
              },
              {
                "@type": "Question",
                name: "1831 ile TÜBİTAK 1832 aynı programın farklı aşamaları mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır, ikisi ayrı destek mekanizmaları. 1831, bir danışmanlık/mentörlük hizmetini (üst sınır KDV hariç 7.000 dolar civarı) finanse ediyor. 1832 ise çok daha büyük ölçekli bir Ar-Ge projesinin bütçesini önce faizsiz kredi olarak kullandırıp sonuç odaklı şekilde kısmen hibeye dönüştürüyor. Bir KOBİ önce 1831'den yol haritasını çıkarıp sonra 1832'ye başvurabilir, ama bu zorunlu bir ön koşul değil.",
                },
              },
              {
                "@type": "Question",
                name: "Şahıs şirketi veya adi ortaklık 1831'e başvurabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Çağrı yalnızca Türkiye'de yerleşik, KOBİ tanımına giren sermaye şirketlerine açık. Şahıs şirketleri, adi ortaklıklar, dernek, vakıf ve kooperatifler başvuru yapamıyor; ortaklı (birden fazla kuruluşun birlikte yaptığı) başvuru da bu çağrı kapsamında kabul edilmiyor.",
                },
              },
              {
                "@type": "Question",
                name: "Bir şirket bu destekten birden fazla kez yararlanabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, sınırlı sayıda. Bir KOBİ, çağrı kapsamında en fazla 3 defa proje desteğinden faydalanabiliyor; ancak aynı Çözüm Ortağı ile en fazla 2 defa proje başvurusunda bulunabiliyor.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
