import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "İtalya'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları (2026) | Koray Akdağ",
  description:
    "İtalya'da SRL, SRLS ve SpA şirket türleri, sermaye şartları, adım adım kuruluş süreci, IRES/IRAP/KDV oranları ve Türkiye tarafındaki bildirim yükümlülükleri. 2026 güncel rehber.",
  keywords: [
    "italyada şirket kurma",
    "italya srl kuruluşu",
    "italyada şirket kurmanın avantajları",
    "italya vergi sistemi",
    "italya ires irap",
    "yurtdışında şirket kurma italya",
    "italya kdv oranı",
    "2026 italya şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İtalya'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="SRL, SRLS ve SpA şirket türleri, sermaye şartları, adım adım kuruluş süreci, vergi oranları ve Türkiye tarafındaki yükümlülüklerle 2026 güncel İtalya rehberi."
      category="YURT DIŞI ŞİRKET • İTALYA • 2026"
      date="2026"
      readTime="10 Dakika"
      slug="italyada-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Roma&apos;nın tarihi mirasının ve Milano&apos;nun moda merkezinin
          ötesinde İtalya, Avrupa Birliği&apos;nin en büyük sanayi
          altyapılarından birine, güçlü bir lojistik ağa ve geniş bir iç
          pazara sahiptir. Bu nedenle AB pazarına açılmak isteyen Türk
          girişimciler ve ihracatçı firmalar için İtalya, güçlü bir
          konumlanma noktası oluşturur.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ İtalya&apos;da hangi şirket türleri mevcut?</li>
          <li>✔ SRL, SRLS ve SpA için sermaye ve kuruluş şartları</li>
          <li>✔ Adım adım kuruluş süreci</li>
          <li>✔ Güncel IRES, IRAP ve KDV oranları</li>
          <li>✔ Türkiye tarafındaki bildirim yükümlülükleri ve teşvikler</li>
          <li>✔ Dikkat edilmesi gereken riskler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#neden-italya"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden İtalya&apos;da Şirket Kurmalısınız?
          </Link>
          <Link
            href="#sirket-turleri"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. Şirket Türleri
          </Link>
          <Link
            href="#sartlar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Kuruluş Şartları ve Gerekli Belgeler
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
            href="#turkiye"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link
            href="#dikkat"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. Dikkat Edilmesi Gerekenler
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            8. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDEN İTALYA */}
      <section id="neden-italya" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden İtalya&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İtalya, Avrupa Birliği&apos;nin dördüncü büyük ekonomisi olarak
          hem üretim hem de tüketim tarafında güçlü bir pazar sunar. AB üyesi
          olması nedeniyle İtalya&apos;da kurulan bir şirket, gümrük
          engeli olmadan tüm AB iç pazarına mal ve hizmet satabilir.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏭</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Güçlü Sanayi Altyapısı
            </h3>
            <p className="text-gray-700">
              Makine, otomotiv yan sanayi, tekstil ve mobilya sektörlerinde
              Avrupa&apos;nın önde gelen üretim merkezlerinden biridir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">👗</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Moda, Gıda ve Tasarım
            </h3>
            <p className="text-gray-700">
              Milano ve çevresi, moda ve tasarım markaları için küresel
              ölçekte tanınırlık ve dağıtım ağı sağlar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              AB Pazarına Doğrudan Erişim
            </h3>
            <p className="text-gray-700">
              İtalya&apos;da kurulan şirket, tek pazar avantajıyla diğer AB
              ülkelerine gümrüksüz ticaret yapabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. İtalya&apos;da Şirket Türleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yabancı yatırımcıların en çok tercih ettiği yapılar SRL, SRLS ve
          SpA&apos;dır. Bunun dışında şube (branch) açma seçeneği de
          mevcuttur.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Şirket Türü</th>
                <th className="p-5">Minimum Sermaye</th>
                <th className="p-5">Kimler İçin Uygun</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">SRL (Türk Ltd. muadili)</td>
                <td className="p-5">10.000 EUR (kuruluşta en az %25&apos;i, yani asgari 2.500 EUR ödenir)</td>
                <td className="p-5">KOBİ ölçeğinde ticari faaliyet, çoğu yabancı yatırımcı için en uygun seçenek</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">SRLS (Basitleştirilmiş SRL)</td>
                <td className="p-5">1 EUR – 9.999 EUR</td>
                <td className="p-5">Düşük bütçeli girişimler, pazar testi amaçlı yapılar; standart şablon sözleşme zorunludur</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">SpA (Anonim Şirket)</td>
                <td className="p-5">50.000 EUR (en az %25&apos;i peşin ödenir)</td>
                <td className="p-5">Büyük ölçekli yatırımlar, halka arz veya kurumsal ortaklık planlayan yapılar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Türkiye&apos;deki Limited Şirkete en yakın yapı SRL&apos;dir ve
            hem esneklik hem de sınırlı sorumluluk avantajı nedeniyle Türk
            girişimcilerin büyük çoğunluğu için en uygun seçenek olarak öne
            çıkar. SRLS ise düşük sermaye ile hızlı giriş imkânı sunsa da
            sözleşme serbestisi kısıtlıdır ve genellikle küçük ölçekli
            başlangıçlar için tercih edilir.
          </p>
        </div>
      </section>

      {/* 3. ŞARTLAR VE BELGELER */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kuruluş Şartları ve Gerekli Belgeler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İtalya&apos;da şirket kurmak isteyen yabancı gerçek veya tüzel
          kişilerin hazırlaması gereken temel belgeler şunlardır:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Gerekli Belgeler ve Kayıtlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Codice Fiscale:</strong> Hem kurucu ortaklar hem de
              şirket için alınması zorunlu İtalyan vergi kimlik numarası;
              İtalyan konsolosluklarından veya İtalya&apos;daki yetkili
              ofislerden temin edilebilir.
            </li>
            <li>
              <strong>Kimlik/Pasaport:</strong> Noter işlemleri için
              gerekli, gerektiğinde apostilli tercümesiyle birlikte.
            </li>
            <li>
              <strong>İtalyan İş Adresi (Sede Legale):</strong> Şirketin
              tescilli merkezi olarak gösterilecek fiziksel veya sanal ofis
              adresi.
            </li>
            <li>
              <strong>PEC (Posta Elettronica Certificata):</strong> Resmi
              yazışmalar için zorunlu sertifikalı elektronik posta adresi.
            </li>
            <li>
              <strong>Ana Sözleşme (Statuto/Atto Costitutivo):</strong>
              {" "}Şirketin faaliyet konusu, ortaklık yapısı ve yönetim
              esaslarını belirleyen kurucu belge.
            </li>
            <li>
              <strong>Sermaye Yatırım Dekontu:</strong> Kuruluş sermayesinin
              ilgili kısmının İtalyan bankasına yatırıldığını gösteren
              belge.
            </li>
          </ul>
        </div>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Süreç, notere ana sözleşme onaylatmadan Ticaret Siciline kayda
          kadar dört ana aşamadan oluşur ve tipik olarak 2-4 hafta sürer.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Codice Fiscale & Adres</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Noter & Ana Sözleşme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Registro Imprese Kaydı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Partita IVA & Banka</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Codice Fiscale Alınması ve Adres Belirlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Süreç, kurucu ortaklar ve şirket için İtalyan vergi kimlik
            numarası (Codice Fiscale) alınmasıyla başlar. Eş zamanlı olarak
            şirketin tescilli adresi (sede legale) ve zorunlu sertifikalı
            e-posta adresi (PEC) belirlenir.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Noter Huzurunda Ana Sözleşmenin İmzalanması
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketin ana sözleşmesi (atto costitutivo) ve tüzüğü (statuto)
            hazırlanarak İtalyan noteri (notaio) huzurunda imzalanır. Bu
            aşamadan önce sermayenin yasal olarak istenen kısmının bankaya
            yatırılmış olması gerekir. Noter onayıyla birlikte şirket resmi
            olarak kurulmuş sayılır.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Ticaret Siciline (Registro Imprese) Kayıt
          </h3>
          <p className="leading-8 text-gray-700">
            Noter, imzalanan sözleşmeyi elektronik başvuru sistemi
            (Comunica Unica) üzerinden yerel Ticaret Odası&apos;na
            (Camera di Commercio) bağlı Registro Imprese&apos;ye tescil
            eder. Bu kayıtla şirket tüzel kişilik kazanır ve resmi olarak
            faaliyet gösterebilir hale gelir.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Vergi Numarası (Partita IVA) ve Banka Hesabı
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket, Agenzia delle Entrate (İtalyan Vergi Dairesi) nezdinde
            KDV mükellefiyeti için Partita IVA numarası alır. Ardından
            şirket adına ticari banka hesabı açılarak sermaye transferleri
            ve faaliyet ödemeleri bu hesap üzerinden yürütülür. Toplam süreç,
            banka hesabı açılışı dahil genellikle 6-10 hafta içinde
            tamamlanır.
          </p>
        </div>
      </section>

      {/* 5. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi ve Oranlar (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İtalya&apos;da kurumlar üzerindeki temel vergi yükü, ulusal
          kurumlar vergisi (IRES) ile bölgesel üretim vergisinden (IRAP)
          oluşur; buna KDV (IVA) de eklenir.
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
                <td className="p-5 font-semibold">IRES (Kurumlar Vergisi)</td>
                <td className="p-5">%24</td>
                <td className="p-5">Net vergilendirilebilir kâr üzerinden; finans kuruluşlarında %27,5</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">IRAP (Bölgesel Üretim Vergisi)</td>
                <td className="p-5">%3,9 (standart)</td>
                <td className="p-5">Bölgeye göre ±0,92 puan değişebilir; üretim değeri üzerinden hesaplanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV (IVA) – Standart</td>
                <td className="p-5">%22</td>
                <td className="p-5">Genel mal ve hizmetler için uygulanan temel oran</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV (IVA) – İndirimli</td>
                <td className="p-5">%10 / %5 / %4</td>
                <td className="p-5">Gıda, sağlık, temel ihtiyaç ürünleri gibi belirli kalemlerde</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            IRES ve IRAP birlikte değerlendirildiğinde efektif kurumlar
            vergisi yükü yaklaşık %27-28 seviyesindedir. Türkiye ile İtalya
            arasında Çifte Vergilendirmeyi Önleme Anlaşması (ÇVÖA)
            bulunduğundan, İtalya&apos;da ödenen verginin Türkiye&apos;de
            hesaplanan kurumlar vergisinden mahsup edilmesi mümkün olabilir;
            somut durum için mali müşavir teyidi gereklidir. Güncel oranlar
            için{" "}
            <a
              href="https://www.agenziaentrate.gov.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Agenzia delle Entrate
            </a>{" "}
            resmi kaynağının kontrol edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* 6. TÜRKİYE TARAFINDAKİ YÜKÜMLÜLÜKLER */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İtalya&apos;da şirket kurmak, Türkiye tarafında da bazı bildirim
          yükümlülüklerini beraberinde getirir; buna karşılık Ticaret
          Bakanlığı&apos;nın sunduğu destek kalemlerinden de yararlanmak
          mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            İtalya&apos;da şirket kuruluş sürecinizi belge hazırlığından
            tescile, vergi numarası alımından banka hesabı sürecine kadar
            baştan sona biz yürütüyoruz. Kuruluş sonrasında da muhasebe ve
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
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler, İtalya&apos;da
            şirket kurmak veya mevcut bir şirkete ortak olmak amacıyla
            yaptıkları ilk sermaye ihracını takip eden <strong>3 ay
            içinde</strong>, Ticaret Bakanlığı&apos;nın Yurt Dışı Yatırım
            Bildirimi formunu doldurarak Hazine ve Maliye Bakanlığı ile
            Ticaret Bakanlığı&apos;na göndermekle yükümlüdür. Bu bildirim
            her yıl güncellenmeli, ihmal edilmesi cezai yaptırımlara yol
            açabilmektedir.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Yurt Dışı Birim, Marka ve Tanıtım Desteği
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              İtalya&apos;da açılan ofis, depo, showroom veya mağaza gibi
              birimlerin kira giderlerinde temel destek oranı %50 olup,
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
          Bu destek ve bildirim yükümlülükleri, hedef ülke İtalya olsa da
          genel çerçevesi diğer ülkelerdeki yapılanmalarla aynıdır. Konunun
          tamamına ve güncel destek oranlarına{" "}
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="text-orange-600 underline"
          >
            Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
          </Link>{" "}
          başlıklı rehberimizden ulaşabilirsiniz. Güncel oranların doğrulanması
          için{" "}
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

      {/* 7. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ PEC ve Codice Fiscale işlemlerini kuruluş öncesinde tamamlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılış sürecinin uzayabileceğini planlarınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ IRES ve IRAP&apos;a ek olarak yıllık muhasebe/denetim maliyetlerini bütçeleyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında mahsup imkânını mali müşavirle teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Sektörünüze özel izin/lisans gerekliliği olup olmadığını önceden araştırın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ SRLS&apos;in standart sözleşme şablonu nedeniyle esneklik kısıtını göz önünde bulundurun
          </div>
        </div>
      </section>

      {/* 8. SIK SORULAN SORULAR */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İtalya&apos;da şirket kurmak için İtalya&apos;da ikamet etmek gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Türk vatandaşları İtalya&apos;da ikamet etmeden, uzaktan
              vekâletle veya bir seyahatle noter işlemlerini tamamlayarak
              şirket kurabilir. Ancak Codice Fiscale, PEC ve tescilli adres
              gibi belgelerin önceden hazırlanması süreci hızlandırır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              SRL kurmak için tüm sermayeyi baştan yatırmak gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Standart SRL&apos;de 10.000 EUR&apos;luk sermayenin en
              az %25&apos;i (asgari 2.500 EUR) kuruluş anında bankaya
              yatırılması yeterlidir; kalan kısım daha sonra ödenebilir. Tek
              ortaklı SRL&apos;lerde ise genellikle sermayenin tamamının
              peşin yatırılması istenir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İtalya&apos;da kurulan şirketin Türkiye&apos;de de vergi yükümlülüğü olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişilerin
              İtalya&apos;daki şirketten elde ettiği kazançlar Türkiye&apos;de
              de beyan yükümlülüğüne tabi olabilir. Türkiye-İtalya Çifte
              Vergilendirmeyi Önleme Anlaşması kapsamında İtalya&apos;da
              ödenen verginin Türkiye&apos;de mahsubu mümkün olabilir;
              detaylar somut duruma göre değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              SRL ile SRLS arasındaki temel fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              SRLS, 1-9.999 EUR arası sermaye ile kurulabilen, düşük maliyetli
              ancak standart bir sözleşme şablonuna bağlı basitleştirilmiş
              bir yapıdır. SRL ise 10.000 EUR asgari sermaye ile kurulur,
              ortaklık sözleşmesinde tam özelleştirme imkânı sunar ve ciddi
              ticari faaliyet planlayan çoğu yabancı yatırımcı için daha
              uygun bir seçenektir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Codice Fiscale alımından Registro Imprese kaydına kadar olan
              temel işlemler genellikle 7-14 iş günü içinde tamamlanır;
              banka hesabı açılışı dahil edildiğinde toplam süreç 6-10
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
          İtalya, güçlü sanayi altyapısı, AB pazarına doğrudan erişimi ve
          nispeten öngörülebilir şirket kuruluş süreciyle Türk
          girişimciler için ciddi bir yurt dışı yapılanma alternatifidir.
          SRL, çoğu yatırımcı için doğru dengeyi kuran şirket türü olarak
          öne çıkar; ancak vergi planlaması, Türkiye tarafındaki bildirim
          yükümlülükleri ve yerel mevzuata uyum konularında profesyonel
          destek almak, sürecin hatasız ilerlemesini sağlar.
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
          href="/blog/almanyada-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • ALMANYA • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Almanya'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        <Link
          href="/blog/bulgaristanda-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • BULGARİSTAN • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Bulgaristan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
