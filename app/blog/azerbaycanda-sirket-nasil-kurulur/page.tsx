import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Azerbaycan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları (2026) | Koray Akdağ",
  description:
    "MMC (Limited Şirket) kuruluşu, %20 kurumlar vergisi ve %18 KDV, sadələşdirilmiş vergi rejimi, Alat Serbest Ekonomi Bölgesi, uzaktan vekâletnameyle tescil, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Azerbaycan rehberi.",
  keywords: [
    "azerbaycanda şirket kurma",
    "azerbaycan mmc kuruluşu",
    "azerbaycan şirket kurmanın avantajları",
    "azerbaycan kurumlar vergisi",
    "alat serbest ekonomi bölgesi",
    "azerbaycan sadələşdirilmiş vergi",
    "azerbaycanda banka hesabı açma",
    "2026 azerbaycan şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Azerbaycan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="MMC (Limited Şirket) kuruluşu, %20 kurumlar vergisi ve %18 KDV, sadələşdirilmiş vergi rejimi, Alat Serbest Ekonomi Bölgesi, uzaktan vekâletnameyle tescil, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Azerbaycan rehberi."
      category="YURT DIŞI ŞİRKET • AZERBAYCAN • 2026"
      date="2026"
      readTime="11 Dakika"
      slug="azerbaycanda-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Azerbaycan, coğrafi yakınlığı, dil ve kültür bağı sayesinde Türk
          girişimciler için diğer yurt dışı yapılanma noktalarına kıyasla
          daha az bürokratik sürtünmeyle ilerlenebilen bir pazardır. Buna ek
          olarak yabancı yatırımcılara tanınan %100 mülkiyet hakkı, asgari
          sermaye şartının bulunmaması ve büyük ölçüde dijitalleşmiş tescil
          süreci, Azerbaycan&apos;ı Kafkasya ve Orta Asya&apos;ya açılmak
          isteyen firmalar için pratik bir merkez haline getiriyor.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ MMC (Limited Şirket) ve diğer şirket türlerinin karşılaştırması</li>
          <li>✔ Alat Serbest Ekonomi Bölgesi ve yatırım teşvik mekanizması</li>
          <li>✔ Adım adım, uzaktan yürütülebilen kuruluş süreci</li>
          <li>✔ Güncel %20 kurumlar vergisi, %18 KDV ve sadələşdirilmiş vergi rejimi</li>
          <li>✔ Banka hesabı açma sürecinin gerçekçi tablosu</li>
          <li>✔ Türkiye tarafındaki bildirim yükümlülükleri ve destekler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#neden-azerbaycan"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden Azerbaycan&apos;da Şirket Kurmalısınız?
          </Link>
          <Link
            href="#sirket-turleri"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. Şirket Türleri: MMC, ASC ve Temsilcilik
          </Link>
          <Link
            href="#serbest-bolge"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Alat Serbest Ekonomi Bölgesi ve Yatırım Teşviki
          </Link>
          <Link
            href="#surec"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            4. Adım Adım Kuruluş Süreci
          </Link>
          <Link
            href="#vergi"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            5. Vergi Sistemi ve Oranlar
          </Link>
          <Link
            href="#banka"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Banka Hesabı Açma Süreci
          </Link>
          <Link
            href="#turkiye"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link
            href="#dikkat"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDEN AZERBAYCAN */}
      <section id="neden-azerbaycan" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Azerbaycan&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye ile Azerbaycan arasındaki tarihi, dilsel ve kültürel
          yakınlık, ticari ilişkileri de kolaylaştıran pratik bir zemin
          oluşturuyor. İş yapış kültürünün ve resmi süreçlerin görece
          anlaşılır olması, Türk girişimciler için diğer coğrafyalara kıyasla
          uyum sürecini kısaltıyor. Buna ek olarak Azerbaycan&apos;ın Kafkasya,
          Orta Asya ve Rusya pazarlarına açılan konumu, ülkeyi bölgesel
          ticaret ve lojistik merkezi olarak öne çıkarıyor.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Bölgesel Pazar Erişimi
            </h3>
            <p className="text-gray-700">
              Orta Koridor (Orta Dehliz) güzergâhı üzerinde yer alan
              Azerbaycan, Türkiye ile Orta Asya, Çin ve Rusya pazarları
              arasında lojistik bir köprü konumundadır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hızlı ve Dijital Tescil
            </h3>
            <p className="text-gray-700">
              MMC kuruluşu, Vergilər Nazirliyi&apos;nin elektronik tescil
              sistemi üzerinden genellikle 1-3 iş günü içinde
              tamamlanabilir; asgari sermaye şartı bulunmaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💰</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              %100 Yabancı Mülkiyet
            </h3>
            <p className="text-gray-700">
              Yerel ortak zorunluluğu yoktur; yabancı gerçek veya tüzel
              kişiler MMC hisselerinin tamamına doğrudan sahip olabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Şirket Türleri: MMC, ASC ve Temsilcilik
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Azerbaycan mevzuatı birden fazla tüzel kişilik türü tanısa da,
          pratikte yabancı yatırımcıların neredeyse tamamı{" "}
          <strong>MMC (Məhdud Məsuliyyətli Cəmiyyət — Limited Şirket)</strong>{" "}
          yapısını tercih eder. Bunun temel nedeni, esnek yönetim yapısı,
          düşük kuruluş maliyeti ve asgari sermaye şartının bulunmamasıdır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Şirket Türü</th>
                <th className="p-5">Uygun Olduğu Durum</th>
                <th className="p-5">Öne Çıkan Özellik</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">MMC (Limited Şirket)</td>
                <td className="p-5">KOBİ ölçekli yatırımlar ve çoğu yabancı yatırımcı için standart tercih</td>
                <td className="p-5">Asgari sermaye şartı yok, %100 yabancı ortaklık, tek ortakla kurulabilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">ASC (Açıq Səhmdar Cəmiyyəti)</td>
                <td className="p-5">Büyük ölçekli, halka açılma potansiyeli olan projeler</td>
                <td className="p-5">Pay senedi ihracı mümkün; kuruluş ve raporlama yükümlülükleri daha ağır</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Filial / Nümayəndəlik (Şube / Temsilcilik)</td>
                <td className="p-5">Türkiye&apos;deki ana şirketin doğrudan uzantısı olarak faaliyet göstermek isteyenler</td>
                <td className="p-5">Ayrı tüzel kişiliği yoktur; temsilcilik ticari faaliyet yürütemez, sorumluluk ana şirkette kalır</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          İhracat, danışmanlık, e-ticaret veya hizmet sektöründe faaliyet
          gösterecek çoğu Türk girişimci için MMC, hem maliyet hem de
          operasyonel esneklik açısından en uygun yapıdır. Hangi türün
          iş modelinize uygun olduğunu birlikte değerlendiriyoruz.
        </p>
      </section>

      {/* 3. SERBEST BÖLGE */}
      <section id="serbest-bolge" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Alat Serbest Ekonomi Bölgesi ve Yatırım Teşviki
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bakü&apos;nün yaklaşık 70 km güneybatısında, Hazar Denizi
          kıyısında kurulan{" "}
          <strong>Alat Serbest Ekonomi Bölgesi (Alat Sərbəst İqtisadi
          Zonası — AFEZ)</strong>, ihracat odaklı üretim ve uluslararası
          ticaret hizmetleri için özel bir teşvik rejimi sunar.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🏝️ AFEZ&apos;in Sağladığı Başlıca Avantajlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-600">
            <li>
              Bölge içi faaliyetlerden elde edilen gelirler kurumlar
              vergisi (mənfəət vergisi) ve KDV&apos;den (ƏDV) muaftır.
            </li>
            <li>
              Yatırım Teşvik Sertifikası (Investment Promotion Certificate)
              sahibi yatırımcılar, 7 yıl boyunca %50 kâr vergisi
              indiriminden yararlanabilir.
            </li>
            <li>
              Üretilen ürünlerin belirli bir oranının ihraç edilmesi
              şartıyla gümrük vergisi muafiyeti uygulanır.
            </li>
            <li>
              Bölge, yüksek katma değerli üretim ve uluslararası ticarete
              yönelik firmaları hedefler; genel amaçlı hizmet şirketleri
              için AFEZ dışında standart MMC kuruluşu daha pratik olabilir.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          AFEZ dışında kalan yatırımlar için de{" "}
          <strong>Yatırım Teşvik Belgesi (İnvestisiya Təşviqi Sənədi)</strong>{" "}
          mekanizması, belirli yatırım projelerine gümrük ve vergi
          kolaylıkları sağlar. Bu belgenin başvuru süreci Ekonomi
          Bakanlığı&apos;nın tek pencere prensibiyle çalışan yatırım ajansı{" "}
          <a
            href="https://azpromo.az/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            AZPROMO
          </a>{" "}
          üzerinden yürütülür ve proje ölçeğine göre değerlendirilir.
        </p>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Azerbaycan&apos;da MMC kuruluşu, doğru belgelerle başvurulduğunda
          büyük ölçüde uzaktan yürütülebilir ve genellikle toplamda
          1-2 hafta içinde tamamlanır.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Yapı & Unvan Seçimi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Vekâletname & Apostil</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Elektronik Tescil Başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">VOEN, Kaşe & Banka</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Şirket Yapısı, Faaliyet Konusu ve Unvan Seçimi
          </h3>
          <p className="leading-8 text-gray-700">
            Süreç, şirket türünün (genellikle MMC), ortaklık yapısının (bir
            ortakla kurulabilir, ortak gerçek veya tüzel kişi olabilir) ve
            faaliyet konusunun belirlenmesiyle başlar. Şirket unvanının
            daha önce alınmadığı, Vergilər Nazirliyi&apos;nin tescil
            kayıtları üzerinden kontrol edilir.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Vekâletname, Pasaport ve Belgelerin Apostillenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Yabancı ortaklar Azerbaycan&apos;a fiziken gelmeden, noter
            onaylı ve apostilli bir vekâletname (power of attorney) ile
            yerel temsilciye yetki verebilir. Türkiye ve Azerbaycan her
            ikisi de Lahey Apostil Sözleşmesi&apos;ne taraf olduğundan,
            ayrıca konsolosluk tasdikine gerek kalmadan noter onaylı
            belgelere apostil şerhi düşülmesi yeterlidir. Pasaport
            kopyaları da bu aşamada noter onaylı ve apostilli olarak
            hazırlanır.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Nizamnamə Hazırlığı ve Elektronik Tescil Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket ana sözleşmesi (nizamnamə), kuruluş kararı ve yasal
            adres belgesi hazırlanarak Vergilər Nazirliyi&apos;nin
            elektronik tescil sistemine başvuru yapılır. Bu sistem, ticaret
            sicili ve vergi kaydını tek çatı altında birleştirdiğinden ayrı
            bir ticaret sicili başvurusuna gerek kalmaz.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. VOEN Alınması, Kaşe ve Banka Hesabı Süreci
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru onaylandığında şirkete VOEN (Vergi Ödəyicisinin
            Eyniləşdirmə Nömrəsi — Vergi Kimlik Numarası) verilir ve tescil
            genellikle 1-3 iş günü içinde tamamlanır. Ardından şirket
            kaşesi çıkarılır, yetkili temsilci için ASAN İmza (Azerbaycan
            devlet e-hizmetlerinde kullanılan dijital imza) tanımlanır ve
            banka hesabı açılış süreci başlatılır.
          </p>
        </div>
      </section>

      {/* 5. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi ve Oranlar (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Azerbaycan vergi sistemi, standart kurumlar vergisi rejiminin
          yanında küçük ölçekli işletmeler için ayrı bir basitleştirilmiş
          vergi seçeneği sunar. 2026 itibarıyla geçerli temel oranlar
          şöyledir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Vergi</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar Vergisi (Mənfəət vergisi)</td>
                <td className="p-5">%20</td>
                <td className="p-5">Standart oran, ticari faaliyet gösteren tüm MMC ve ASC&apos;ler için geçerli</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV (ƏDV)</td>
                <td className="p-5">%18</td>
                <td className="p-5">Yıllık cirosu 200.000 AZN&apos;yi aşan işletmeler için zorunlu kayıt; altındaki firmalar ihtiyari kayıt yapabilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sadələşdirilmiş Vergi</td>
                <td className="p-5">%2 (ciro üzerinden)</td>
                <td className="p-5">Belirli ciro eşiğinin altında kalan ve KDV mükellefi olmayan küçük işletmeler için opsiyonel basitleştirilmiş rejim; kurumlar vergisinden muaf tutulur</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Temettü Stopajı</td>
                <td className="p-5">%10</td>
                <td className="p-5">Yurt dışına dağıtılan kâr paylarında uygulanan standart stopaj oranı</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Sadələşdirilmiş vergi rejiminin ciro eşiği zaman zaman
            güncellenebildiğinden, başvuru öncesinde güncel rakamın{" "}
            <a
              href="https://www.taxes.gov.az/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Vergilər Nazirliyi
            </a>{" "}
            resmi kaynağından teyit edilmesi gerekir. Türkiye ile
            Azerbaycan arasında 1994&apos;te imzalanan ve 1997&apos;den
            beri yürürlükte olan Çifte Vergilendirmeyi Önleme Anlaşması
            (ÇVÖA) kapsamında, Azerbaycan&apos;da ödenen verginin
            Türkiye&apos;de mahsubu mümkün olabilir; bu değerlendirme somut
            duruma göre yapılır.
          </p>
        </div>
      </section>

      {/* 6. BANKA HESABI */}
      <section id="banka" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Banka Hesabı Açma Süreci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket tescili hızlı ilerlese de, kurumsal banka hesabı açılışı
          genellikle en fazla planlama gerektiren aşamadır ve bankadan
          bankaya değişen belge ve prosedür farklılıkları içerir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Banka Hesabı Açma Sürecinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Kapital Bank, PASHA Bank ve Bank of Baku gibi yerel bankaların
              çoğu, hesap açılışı için yetkili imza sahibinin veya noter
              onaylı vekâletnameyle yetkilendirilmiş yerel temsilcinin
              şubeye gelmesini talep eder; tamamen uzaktan onboarding
              istisnai durumlardır.
            </li>
            <li>
              UBO (Ultimate Beneficial Owner — Gerçek Faydalanıcı) beyanı,
              sermayenin kaynağının netliği ve faaliyet konusunun açık
              tanımlanması, kara para aklamayı önleme (AML) kontrollerinde
              onay ihtimalini artırır.
            </li>
            <li>
              Banka hesabı açılışı, tescilden bağımsız olarak birkaç gün
              ile birkaç hafta arasında sürebilir; bu süre planlamaya
              dahil edilmelidir.
            </li>
            <li>
              Geleneksel banka süreci uzarsa, Wise Business veya Payoneer
              gibi fintech çözümleri, ilk dönemde uluslararası tahsilat ve
              ödeme için pratik bir ara çözüm sunabilir; ancak bu çözümler
              yerel AZN hesabının yerini tam olarak tutmaz.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. TÜRKİYE TARAFINDAKİ YÜKÜMLÜLÜKLER */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Azerbaycan&apos;da şirket kurmak, Türkiye tarafında da bazı
          bildirim yükümlülüklerini beraberinde getirir; buna karşılık
          Ticaret Bakanlığı&apos;nın sunduğu destek kalemlerinden de
          yararlanmak mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Azerbaycan&apos;da şirket kuruluş sürecinizi doğru şirket türü
            seçiminden vekâletname ve apostil işlemlerine, elektronik
            tescil başvurusundan banka hesabı sürecine kadar baştan sona
            biz yürütüyoruz. Kuruluş sonrasında da muhasebe, KDV beyanı ve
            kurumlar vergisi raporlama hizmetinizi, ayrı bir yerel firma
            aramanıza gerek kalmadan biz sağlıyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Sürecin tamamı için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🇹🇷 Yurt Dışı Yatırım Bildirimi
          </h3>
          <p className="leading-8 text-gray-700">
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler,
            Azerbaycan&apos;da şirket kurmak veya mevcut bir şirkete ortak
            olmak amacıyla yaptıkları ilk sermaye ihracını takip eden{" "}
            <strong>3 ay içinde</strong>, Ticaret Bakanlığı&apos;nın Yurt
            Dışı Yatırım Bildirimi formunu doldurarak Hazine ve Maliye
            Bakanlığı ile Ticaret Bakanlığı&apos;na göndermekle
            yükümlüdür. Bu bildirim her yıl güncellenmeli, ihmal edilmesi
            cezai yaptırımlara yol açabilmektedir.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Yurt Dışı Birim, Marka ve Tanıtım Desteği
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              Azerbaycan&apos;da açılan ofis, depo, showroom veya mağaza
              gibi birimlerin kira giderlerinde temel destek oranı %50
              olup, Bakanlık tarafından hedef ülke olarak belirlenmesi
              halinde bu oran %20 ilave edilerek uygulanabilir.
            </li>
            <li>
              Yıllık üst limit mağazalar için 100.000 ABD Doları, diğer
              birimler için 75.000 ABD Doları civarındadır; destek ülke
              bazında en fazla 4 yıl uygulanır.
            </li>
            <li>
              Marka tescili ve tanıtım faaliyetlerine yönelik ayrı destek
              kalemleri de mevcuttur.
            </li>
            <li>
              Başvuru için şart: Türk Ticaret Kanunu&apos;na göre kurulmuş
              Limited veya Anonim Şirket olmak ve desteğe konu ürünlerin
              Türk menşeli olması.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu destek ve bildirim yükümlülükleri, hedef ülke Azerbaycan olsa
          da genel çerçevesi diğer ülkelerdeki yapılanmalarla aynıdır.
          Konunun tamamına ve güncel destek oranlarına{" "}
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="text-orange-600 underline"
          >
            Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
          </Link>{" "}
          başlıklı rehberimizden ulaşabilirsiniz. Güncel oranların
          doğrulanması için{" "}
          <a
            href="https://ticaret.gov.tr/destekler/ihracat-destekleri/yurtdisi-birim-marka-ve-tanitim-destegi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            Ticaret Bakanlığı&apos;nın resmi sayfası
          </a>{" "}
          esas alınmalıdır.
        </p>
      </section>

      {/* 8. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Vekâletname ve pasaport kopyalarını noter onaylı ve apostilli hazırlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılışında fiziki başvuru gerekebileceğini planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Sadələşdirilmiş vergi eşiğinin güncel değerini başvuru öncesi teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında mahsup imkânını mali müşavirle teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ AFEZ veya Yatırım Teşvik Belgesi&apos;nin iş modelinize uygunluğunu değerlendirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ UBO beyanı ve sermaye kaynağını net belgelerle destekleyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
          </div>
        </div>
      </section>

      {/* 9. SIK SORULAN SORULAR */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Azerbaycan&apos;da şirket kurmak için ülkede fiziken bulunmak gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Noter onaylı ve apostilli bir vekâletname ile yerel
              temsilciye yetki verilerek tescil süreci baştan sona uzaktan
              yürütülebilir. Ancak banka hesabı açılışında bazı yerel
              bankalar yetkili imza sahibinin veya temsilcinin şubeye
              gelmesini isteyebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              MMC kurmak için asgari sermaye şartı var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, Azerbaycan mevzuatında MMC kuruluşu için asgari
              sermaye şartı bulunmuyor. Sermaye tutarı, ortakların iş
              planına ve ihtiyaç duyulan işletme sermayesine göre serbestçe
              belirlenebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Azerbaycan&apos;da kurulan şirketin Türkiye&apos;de de vergi yükümlülüğü olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişilerin
              Azerbaycan&apos;daki şirketten elde ettiği kazançlar
              Türkiye&apos;de de beyan yükümlülüğüne tabi olabilir.
              Türkiye-Azerbaycan Çifte Vergilendirmeyi Önleme Anlaşması
              kapsamında Azerbaycan&apos;da ödenen verginin Türkiye&apos;de
              mahsubu mümkün olabilir; detaylar somut duruma göre
              değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sadələşdirilmiş vergi rejiminden kim yararlanabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Yıllık cirosu belirli bir eşiğin altında kalan ve KDV
              mükellefi olmayan küçük işletmeler, ciro üzerinden %2
              oranında sadələşdirilmiş vergi ödeyerek kurumlar vergisinden
              muaf tutulabilir. Güncel eşik tutarı Vergilər Nazirliyi
              tarafından belirlenir ve mevzuat değişikliklerine tabidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Belgeler eksiksiz olduğunda elektronik tescil genellikle 1-3
              iş günü içinde tamamlanır. Vekâletname, apostil ve pasaport
              hazırlıkları dahil edildiğinde toplam süreç ortalama 1-2
              hafta, banka hesabı açılışı dahil edildiğinde ise birkaç
              haftaya kadar uzayabilir.
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
          Azerbaycan, coğrafi ve kültürel yakınlığı, asgari sermaye
          şartının bulunmaması ve büyük ölçüde dijitalleşmiş, uzaktan
          yürütülebilen tescil süreciyle Türk girişimciler için pratik bir
          yurt dışı yapılanma alternatifidir. Ancak doğru şirket türünün
          seçilmesi, vergi rejimi tercihinin iş modeliyle uyumlu olması ve
          banka hesabı sürecinin gerçekçi planlanması, sürecin sağlıklı
          ilerlemesi için kritik önemdedir. Bu kararları doğru vermek ve
          Türkiye tarafındaki yükümlülükleri eksiksiz yönetmek için
          profesyonel destek almak, sürecin hatasız tamamlanmasını sağlar.
        </p>
      </section>
    </BlogLayout>
  );
}
