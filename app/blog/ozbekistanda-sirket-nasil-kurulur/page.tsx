import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Özbekistan'da Şirket Nasıl Kurulur? 2026 | Koray Akdağ",
  description: "Özbekistan'da MChJ kuruluşu, %15 kurumlar vergisi, IT Park teşvikleri ve dijital tek pencere kayıt sistemiyle güncel rehber.",
  keywords: [
    "özbekistanda şirket kurma",
    "özbekistan mchj",
    "özbekistan yatırım teşvikleri",
    "özbekistan kurumlar vergisi",
    "özbekistan serbest ekonomi bölgesi",
    "özbekistan it park",
    "taşkent şirket kuruluşu",
    "2026 özbekistan şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Özbekistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="MChJ (Limited Şirket) yapısı, %15 kurumlar vergisi ve %12 KDV, serbest ekonomi bölgeleri ile IT Park teşvikleri, dijital tek pencere kayıt sistemi, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Özbekistan rehberi."
      category="YURT DIŞI ŞİRKET • ÖZBEKİSTAN • 2026"
      date="2026"
      readTime="11 Dakika"
      slug="ozbekistanda-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Özbekistan, 2016 sonrasında başlattığı ekonomik reform süreciyle
          Orta Asya&apos;nın en hızlı açılan pazarlarından biri haline geldi.
          %100 yabancı sermaye ile şirket kurma imkânı, düşük kuruluş
          maliyeti ve Türkiye ile olan dil ve kültür yakınlığı, Özbekistan&apos;ı
          Türk girişimciler için pratik bir yurt dışı yapılanma noktası
          yapıyor. Ancak doğru şirket türünü seçmek ve süreci eksiksiz
          yönetmek, sonuç almanın ön koşulu.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ MChJ (Limited Şirket) yapısı ve %100 yabancı sermaye imkânı</li>
          <li>✔ Dijital tek pencere kayıt sistemi ve kuruluş süresi</li>
          <li>✔ Serbest ekonomi bölgeleri (FEZ) ve IT Park teşvikleri</li>
          <li>✔ Adım adım kuruluş süreci</li>
          <li>✔ Güncel %15 kurumlar vergisi, %12 KDV oranları</li>
          <li>✔ Banka hesabı açma sürecinin gerçekçi tablosu</li>
          <li>✔ Türkiye tarafındaki yükümlülükler ve destekler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#neden-ozbekistan"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden Özbekistan&apos;da Şirket Kurmalısınız?
          </Link>
          <Link
            href="#sirket-turleri"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. Şirket Türleri: MChJ Neden Standart Tercih?
          </Link>
          <Link
            href="#fez-itpark"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Serbest Ekonomi Bölgeleri ve IT Park
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
            href="#banka-vize"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Banka Hesabı, Vize ve Oturum İzni
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

      {/* 1. NEDEN ÖZBEKİSTAN */}
      <section id="neden-ozbekistan" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Özbekistan&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Özbekistan, 35 milyonu aşan nüfusu ile Orta Asya&apos;nın en
          kalabalık iç pazarına sahip. 2016&apos;dan bu yana süren reform
          programı; döviz kontrollerinin kaldırılması, yabancı sermaye
          önündeki engellerin azaltılması ve kayıt süreçlerinin
          dijitalleşmesiyle sonuçlandı. Türkiye ile tarihi, dilsel ve
          kültürel yakınlık, iş ilişkilerinin kurulmasını da kolaylaştırıyor.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌏</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Büyüyen İç Pazar
            </h3>
            <p className="text-gray-700">
              Orta Asya&apos;nın en kalabalık ülkesi olarak genç nüfusu ve
              artan tüketici talebiyle üretim, ticaret ve hizmet
              sektörlerine geniş bir iç pazar sunar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💰</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Düşük Kuruluş Maliyeti
            </h3>
            <p className="text-gray-700">
              MChJ kuruluşu için yasal olarak asgari sermaye şartı
              bulunmaz; kuruluş masrafları bölgedeki diğer ülkelere kıyasla
              belirgin şekilde düşüktür.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Dijital ve Hızlı Kayıt
            </h3>
            <p className="text-gray-700">
              Şirket tescili büyük ölçüde online tamamlanabilir; standart
              süreç birkaç iş günü içinde sonuçlanır.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Şirket Türleri: MChJ Neden Standart Tercih?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Özbekistan mevzuatında yabancı yatırımcıların önünde birden fazla
          şirket türü bulunsa da, pratikte neredeyse tüm yabancı sermayeli
          girişimler tek bir yapıyı tercih ediyor: MChJ (Mas&apos;uliyati
          Cheklangan Jamiyat).
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Şirket Türü</th>
                <th className="p-5">Türkçe Karşılığı</th>
                <th className="p-5">Kullanım Alanı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">MChJ</td>
                <td className="p-5">Limited Şirket (LLC)</td>
                <td className="p-5">
                  Yabancı yatırımcıların standart tercihi; %100 yabancı
                  sermaye ile kurulabilir, ortakların sorumluluğu koydukları
                  sermaye ile sınırlıdır
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">AJ</td>
                <td className="p-5">Anonim Şirket (JSC)</td>
                <td className="p-5">
                  Halka açılma veya büyük ölçekli sermaye ortaklığı
                  planlayan, karmaşık kurumsal yönetim gerektiren yatırımlar
                  için tercih edilir
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Şube / Temsilcilik</td>
                <td className="p-5">Branch / Representative Office</td>
                <td className="p-5">
                  Yurt dışındaki ana şirketin bağımsız tüzel kişiliği
                  olmadan Özbekistan&apos;da faaliyet göstermesi; temsilcilik
                  ticari faaliyet yürütemez
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            MChJ&apos;nin öne çıkma nedeni yalnızca esnekliği değil; yasal
            olarak zorunlu bir asgari sermaye tutarı öngörülmemesi ve
            taahhüt edilen sermayenin kuruluştan itibaren 1 yıl içinde
            ödenebilmesidir. Bu yapı, küçük ve orta ölçekli ticaret,
            danışmanlık, ithalat-ihracat ve hizmet firmaları için en pratik
            çözümdür.
          </p>
        </div>
      </section>

      {/* 3. FEZ VE IT PARK */}
      <section id="fez-itpark" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Serbest Ekonomi Bölgeleri ve IT Park
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Özbekistan genelinde Navoi, Angren, Cizzah, Termez, Kokand ve
          Nemengan başta olmak üzere 20&apos;yi aşkın serbest ekonomi
          bölgesi (Free Economic Zone – FEZ) faaliyette. Sanayi üretimi,
          tarım, ilaç ve turizm gibi farklı sektörlere odaklanan bu
          bölgelerde kayıtlı yatırımcılar, yatırım tutarına bağlı olarak
          3-10 yıl arasında değişen sürelerle kurumlar vergisi, arazi
          vergisi ve gümrük vergisi muafiyetlerinden yararlanabiliyor.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            💻 IT Park Uzbekistan: Yazılım ve Teknoloji Firmaları İçin
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              IT Park rezidanslığı alan şirketler için kurumlar vergisi ve
              sosyal vergi (social tax) oranı %0&apos;a iner.
            </li>
            <li>
              Çalışanların gelir vergisi (personal income tax) oranı
              standart tarifeden düşük, %7,5 olarak uygulanır.
            </li>
            <li>
              İhracat gelirlerinde KDV %0 oranına tabidir.
            </li>
            <li>
              Yazılım geliştirme, BT danışmanlığı ve dijital hizmet
              ihracatı yapan Türk girişimciler için Özbekistan&apos;daki en
              avantajlı yapılardan biridir.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          FEZ veya IT Park bünyesinde kuruluş, standart MChJ&apos;ye kıyasla
          ek başvuru ve onay süreci gerektirir; teşviklerden yararlanmak
          için ilgili idarenin rezidanslık/katılımcı statüsü onayı şarttır.
          Faaliyet alanınıza uygun bölgenin belirlenmesi, bu aşamada kritik
          bir karardır.
        </p>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          2026 itibarıyla Özbekistan, işletme kayıt süreçlerini tek bir
          dijital platform altında topladı; belge hazırlığından tescile
          kadar süreç büyük ölçüde elektronik ortamda yürütülüyor. Standart
          bir MChJ kuruluşu, belgeler eksiksiz olduğunda birkaç iş günü
          içinde tamamlanabiliyor.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Unvan Rezervasyonu & Belge Hazırlığı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Ana Sözleşme & Vekâletname</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Tek Pencereden Tescil Başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">TIN, Mühür ve Banka Hesabı</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Ticari Unvan Rezervasyonu ve Belge Hazırlığı
          </h3>
          <p className="leading-8 text-gray-700">
            Süreç, şirket unvanının kontrolü ve rezervasyonuyla başlar.
            Yabancı ortak gerçek kişiyse pasaport kopyası, tüzel kişiyse
            ticaret sicil kaydı örneği ve bankasından alınmış referans
            mektubu hazırlanır. Yabancı belgelerin Özbekistan
            konsolosluklarından veya apostil ile tasdik edilmesi gerekir.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Ana Sözleşme (Ustav) ve Vekâletnamenin Düzenlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketin ana sözleşmesi (ustav) ve kurucular kararı hazırlanır.
            Yabancı ortağın Özbekistan&apos;da fiziken bulunması zorunlu
            değildir; noter onaylı vekâletname ile süreç Türkiye&apos;den
            yürütülebilir. Bu aşamada faaliyet kodu (OKED) ve varsa FEZ/IT
            Park başvurusu netleştirilir.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Tek Pencereden Tescil Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Belgeler, Adalet Bakanlığı bünyesindeki Devlet Hizmetleri
            Ajansı&apos;na (Public Services Agency) bağlı tek pencere
            portalı üzerinden veya doğrudan hizmet merkezine sunulur.
            Standart başvurular genellikle 1-3 iş günü, ek onay gerektiren
            faaliyetler ise daha uzun sürede sonuçlanır.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Vergi Kimlik Numarası, Mühür ve Banka Hesabı
          </h3>
          <p className="leading-8 text-gray-700">
            Tescil tamamlandıktan sonra Devlet Vergi Komitesi&apos;nden
            (tax.uz) vergi kimlik numarası (TIN/STIR) otomatik olarak
            oluşturulur, şirket mührü hazırlanır ve son adımda kurumsal
            banka hesabı açılışı başlatılır. Taahhüt edilen sermayenin
            bankaya yatırılması, kuruluş tarihinden itibaren 1 yıl
            içinde tamamlanabilir.
          </p>
        </div>
      </section>

      {/* 5. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi ve Oranlar (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Özbekistan&apos;ın genel vergi rejimi, orta ölçekli işletmeler
          için bölgesel ölçekte rekabetçi kabul edilir. Vergi idaresi ve
          beyan işlemleri, tax.uz üzerinden büyük ölçüde elektronik
          ortamda yürütülür.
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
                <td className="p-5 font-semibold">Kurumlar Vergisi</td>
                <td className="p-5">%15 (standart)</td>
                <td className="p-5">
                  Bankalar, mobil operatörler, çimento üreticileri ve
                  alışveriş merkezleri gibi belirli sektörlerde %20
                  uygulanır
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV (QQS)</td>
                <td className="p-5">%12</td>
                <td className="p-5">
                  Standart oran; ihracat işlemleri genel olarak %0 oranına
                  tabidir
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Basitleştirilmiş Vergi (Ciro Vergisi)</td>
                <td className="p-5">%4 - %25 arası (sektöre göre)</td>
                <td className="p-5">
                  Yıllık cirosu 1 milyar UZS altında kalan küçük
                  işletmeler için ihtiyari alternatif rejim
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">IT Park Teşviki</td>
                <td className="p-5">%0 kurumlar vergisi</td>
                <td className="p-5">
                  IT Park rezidanslığı alan yazılım/BT firmaları için
                  kurumlar vergisi ve sosyal vergi muafiyeti
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Türkiye ile Özbekistan arasında 1996&apos;dan bu yana yürürlükte
            olan ve 2020&apos;de imzalanan protokolle güncellenen Çifte
            Vergilendirmeyi Önleme Anlaşması (ÇVÖA) kapsamında,
            Özbekistan&apos;da ödenen verginin Türkiye&apos;deki beyan
            üzerinden mahsubu mümkün olabilir. Güncel oranlar için{" "}
            <a
              href="https://www.soliq.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Özbekistan Devlet Vergi Komitesi (tax.uz)
            </a>{" "}
            resmi kaynağının kontrol edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* 6. BANKA HESABI VE VİZE */}
      <section id="banka-vize" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Banka Hesabı, Vize ve Oturum İzni
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket kuruluşu hızlı ilerlese de banka hesabı açılışı ve seyahat
          planlaması, gerçekçi bir zaman çizelgesi gerektiren ayrı
          süreçlerdir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Banka Hesabı Açma Sürecinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Devlet bankaları (örn. Kapitalbank, Ipoteka Bank) genellikle
              yetkili imza sahibinin en az bir kez Özbekistan&apos;da fiziken
              bulunmasını ve KYC/AML (müşterini tanı / kara para aklamayı
              önleme) sürecini tamamlamasını talep eder.
            </li>
            <li>
              Bazı özel bankalar, hazırlanmış vekâletname ve detaylı şirket
              dosyasıyla süreci kısmen uzaktan başlatmaya izin verse de, tam
              anlamıyla fiziksel temassız hesap açılışı istisnadır.
            </li>
            <li>
              Net faaliyet tanımı, gerçek ortaklık yapısının (UBO) şeffaf
              beyanı ve iş planı, başvurunun hızlı onaylanma ihtimalini
              artırır.
            </li>
            <li>
              Yerel banka süreci tamamlanana kadar Wise Business gibi
              fintech çözümleri, uluslararası tahsilat için geçici bir ara
              çözüm olabilir; ancak yerel para birimiyle (UZS) işlem ve
              yerel tedarikçi ödemeleri için Özbekistan banka hesabı
              gereklidir.
            </li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🛂 Vize ve Oturum İzni
          </h3>
          <p className="leading-8 text-gray-700">
            Türk vatandaşları, Özbekistan&apos;a 30 güne kadar vizesiz
            seyahat edebilir; bu süre kuruluş sürecinin ilk aşamalarını ve
            banka görüşmelerini planlamak için genellikle yeterlidir. Daha
            uzun süreli faaliyet için şirket üzerinden iş/yatırımcı oturum
            izni başvurusu yapılabilir. Ayrıca Özbekistan&apos;da belirli
            bir tutarın üzerinde (bölgeye göre değişen, gayrimenkul veya
            ticari yatırım şartına bağlı) yatırım yapan yabancılara oturum
            izni tanınan ayrı bir program da mevcuttur; bu programın güncel
            şartları teyide açıktır.
          </p>
        </div>
      </section>

      {/* 7. TÜRKİYE TARAFINDAKİ YÜKÜMLÜLÜKLER */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Özbekistan&apos;da şirket kurmak, Türkiye tarafında da bazı
          bildirim yükümlülüklerini beraberinde getirir; buna karşılık
          Ticaret Bakanlığı&apos;nın sunduğu destek kalemlerinden de
          yararlanmak mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Özbekistan&apos;da şirket kuruluş sürecinizi doğru şirket türü
            seçiminden tescile, banka hesabı açılışından FEZ/IT Park
            başvurusuna kadar baştan sona biz yürütüyoruz. Kuruluş
            sonrasında da muhasebe, KDV beyanı ve kurumlar vergisi
            raporlama hizmetinizi, ayrı bir yerel firma aramanıza gerek
            kalmadan biz sağlıyoruz.{" "}
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
            Özbekistan&apos;da şirket kurmak veya mevcut bir şirkete ortak
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
              Özbekistan&apos;da açılan ofis, depo, showroom veya mağaza
              gibi birimlerin kira giderlerinde temel destek oranı %50 olup,
              Bakanlık tarafından hedef ülke olarak belirlenmesi halinde bu
              oran %20 ilave edilerek uygulanabilir.
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
          Bu destek ve bildirim yükümlülükleri, hedef ülke Özbekistan olsa
          da genel çerçevesi diğer ülkelerdeki yapılanmalarla aynıdır.
          Konunun tamamına ve güncel destek oranlarına{" "}
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="text-orange-600 underline"
          >
            Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
          </Link>{" "}
          başlıklı rehberimizden ulaşabilirsiniz. Bölgedeki diğer
          alternatifleri karşılaştırmak isterseniz{" "}
          <Link
            href="/blog/kazakistanda-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            Kazakistan
          </Link>{" "}
          ve{" "}
          <Link
            href="/blog/azerbaycanda-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            Azerbaycan
          </Link>{" "}
          rehberlerimize de göz atabilirsiniz. Güncel oranların
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
            ✅ Belgelerin apostil/konsolosluk tasdik sürecini önceden planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılışı için Özbekistan&apos;a en az bir seyahati planlarınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ FEZ/IT Park teşviklerinden yararlanmak için ilgili idarenin onay sürecini yürütün
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında mahsup imkânını mali müşavirle teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Taahhüt edilen sermayeyi 1 yıllık ödeme süresi içinde tamamlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ 30 günü aşan kalışlarda uygun vize/oturum iznini önceden başvurun
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
              Özbekistan&apos;da şirket kurmak için ülkede bulunmak gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Kuruluş başvurusu noter onaylı vekâletname ile
              Türkiye&apos;den yürütülebilir ve tescil büyük ölçüde
              dijital tek pencere sistemi üzerinden tamamlanır. Ancak
              kurumsal banka hesabı açılışı için çoğu banka yetkili imza
              sahibinin en az bir kez fiziken Özbekistan&apos;da
              bulunmasını talep eder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              MChJ kurmak için asgari sermaye şartı var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel MChJ yapısı için yasal olarak asgari sermaye tutarı
              öngörülmez; taahhüt edilen sermaye kuruluş tarihinden
              itibaren 1 yıl içinde ödenebilir. Bankacılık, sigortacılık
              gibi düzenlemeye tabi sektörlerde ise ilgili otoritenin
              belirlediği çok daha yüksek sermaye eşikleri uygulanır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Özbekistan&apos;da şirketin %100&apos;ü yabancıya ait olabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Özbekistan mevzuatı yabancı gerçek veya tüzel kişilerin
              MChJ&apos;nin tamamına sahip olmasına izin verir; yerli ortak
              zorunluluğu bulunmaz. Bazı stratejik sektörlerde (madencilik,
              enerji gibi) ek lisans veya izin şartları olabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Özbekistan&apos;da kurulan şirketin Türkiye&apos;de de vergi yükümlülüğü olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişilerin
              Özbekistan&apos;daki şirketten elde ettiği kazançlar
              Türkiye&apos;de de beyan yükümlülüğüne tabi olabilir.
              Türkiye-Özbekistan Çifte Vergilendirmeyi Önleme Anlaşması
              kapsamında Özbekistan&apos;da ödenen verginin Türkiye&apos;de
              mahsubu mümkün olabilir; detaylar somut duruma göre
              değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Belgeler eksiksiz olduğunda MChJ tescili, dijital tek pencere
              sistemi üzerinden genellikle 1-3 iş günü içinde tamamlanır.
              Banka hesabı açılışı ve varsa FEZ/IT Park başvurusu dahil
              edildiğinde toplam süreç birkaç haftaya kadar uzayabilir.
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
          Özbekistan, düşük kuruluş maliyeti, %100 yabancı sermaye imkânı ve
          hızlanan dijital tescil süreciyle Türk girişimciler için ciddi
          bir yurt dışı yapılanma alternatifi sunuyor. Ancak MChJ yapısının
          doğru kurgulanması, FEZ/IT Park teşviklerinden yararlanma
          fırsatının değerlendirilmesi ve banka hesabı açılışının gerçekçi
          planlanması, sürecin en kritik unsurları. Bu kararları iş
          modelinize uygun şekilde vermek ve Türkiye tarafındaki
          yükümlülükleri eksiksiz yönetmek için profesyonel destek almak,
          sürecin hatasız ilerlemesini sağlar.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • İHRACAT • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?</h3>
        </Link>
        <Link
          href="/blog/kazakistanda-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • KAZAKİSTAN • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Kazakistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        <Link
          href="/blog/tacikistanda-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • TACİKİSTAN • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Tacikistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
