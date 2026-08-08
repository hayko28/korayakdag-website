import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Almanya'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları (2026) | Koray Akdağ",
  description:
    "Almanya'da GmbH, UG ve AG şirket türleri, sermaye şartları, Handelsregister tescili, adım adım kuruluş süreci, kurumlar vergisi/Gewerbesteuer/KDV oranları ve Türkiye tarafındaki yükümlülükler. 2026 güncel rehber.",
  keywords: [
    "almanyada şirket kurma",
    "almanya gmbh kuruluşu",
    "almanya ug haftungsbeschränkt",
    "almanyada şirket kurmanın avantajları",
    "almanya vergi sistemi",
    "almanya gewerbesteuer körperschaftsteuer",
    "yurtdışında şirket kurma almanya",
    "handelsregister tescili",
    "2026 almanya şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Almanya'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="GmbH, UG ve AG şirket türleri, sermaye şartları, Handelsregister tescili, adım adım kuruluş süreci, vergi oranları ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Almanya rehberi."
      category="YURT DIŞI ŞİRKET • ALMANYA • 2026"
      date="2026"
      readTime="11 Dakika"
      slug="almanyada-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Avrupa Birliği&apos;nin en büyük ekonomisi ve Türkiye&apos;nin en
          önemli dış ticaret ortaklarından biri olan Almanya, güçlü sanayi
          altyapısı, geniş iç pazarı ve AB&apos;nin merkezinde yer alan
          lojistik konumuyla yurt dışında yapılanmak isteyen Türk
          girişimciler ve ihracatçı firmalar için en çok tercih edilen
          ülkelerin başında gelir.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Almanya&apos;da hangi şirket türleri mevcut?</li>
          <li>✔ GmbH, UG ve AG için sermaye ve kuruluş şartları</li>
          <li>✔ Adım adım kuruluş süreci</li>
          <li>✔ Güncel kurumlar vergisi, Gewerbesteuer ve KDV oranları</li>
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
            href="#neden-almanya"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden Almanya&apos;da Şirket Kurmalısınız?
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

      {/* 1. NEDEN ALMANYA */}
      <section id="neden-almanya" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Almanya&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Almanya, Avrupa Birliği&apos;nin en büyük ve dünyanın önde gelen
          ekonomilerinden biridir. AB üyesi olması nedeniyle Almanya&apos;da
          kurulan bir şirket, gümrük engeli olmadan yaklaşık 450 milyon
          nüfuslu AB iç pazarına doğrudan mal ve hizmet satabilir.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏭</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Güçlü Sanayi ve İhracat Gücü
            </h3>
            <p className="text-gray-700">
              Otomotiv, makine imalatı, kimya ve mühendislik sektörlerinde
              Avrupa&apos;nın lokomotif ekonomisi konumundadır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🇹🇷</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Türkiye ile Güçlü Ticari Bağ
            </h3>
            <p className="text-gray-700">
              Almanya, Türkiye&apos;nin en büyük dış ticaret ortaklarından
              biridir; geniş Türk kökenli iş ve tüketici ağı ek bir avantaj
              sağlar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              AB Pazarına Doğrudan Erişim
            </h3>
            <p className="text-gray-700">
              Almanya&apos;da kurulan şirket, tek pazar avantajıyla diğer AB
              ülkelerine gümrüksüz ticaret yapabilir ve güçlü lojistik
              altyapıdan yararlanır.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Almanya&apos;da Şirket Türleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yabancı yatırımcıların en çok tercih ettiği yapılar GmbH, UG
          (haftungsbeschränkt) ve AG&apos;dir. Bunun dışında Türkiye&apos;deki
          ana şirkete bağlı şube (Zweigniederlassung) açma seçeneği de
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
                <td className="p-5 font-semibold">GmbH (Türk Ltd. muadili)</td>
                <td className="p-5">25.000 EUR (kuruluşta en az yarısı, yani asgari 12.500 EUR ödenir)</td>
                <td className="p-5">KOBİ ölçeğinde ticari faaliyet; çoğu yabancı yatırımcı için en güvenilir ve tanınır seçenek</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">UG (haftungsbeschränkt) – Mini GmbH</td>
                <td className="p-5">1 EUR&apos;dan itibaren (kârın en az %25&apos;i yasal yedek akçeye ayrılarak sermaye GmbH seviyesine çıkarılana kadar biriktirilir)</td>
                <td className="p-5">Düşük bütçeli girişimler, pazar testi amaçlı yapılar; ileride GmbH&apos;a dönüştürülebilir</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">AG (Anonim Şirket)</td>
                <td className="p-5">50.000 EUR (en az %25&apos;i nakit sermayede peşin ödenir)</td>
                <td className="p-5">Büyük ölçekli yatırımlar, halka arz veya kurumsal ortaklık planlayan yapılar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Türkiye&apos;deki Limited Şirkete en yakın yapı GmbH&apos;dır ve
            hem kurumsal güvenilirliği hem de sınırlı sorumluluk avantajı
            nedeniyle Türk girişimcilerin büyük çoğunluğu için en uygun
            seçenek olarak öne çıkar. UG ise düşük sermaye ile hızlı giriş
            imkânı sunar; ancak dağıtılabilir kâr üzerindeki yasal yedek
            akçe zorunluluğu nedeniyle GmbH kadar esnek değildir.
          </p>
        </div>
      </section>

      {/* 3. ŞARTLAR VE BELGELER */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kuruluş Şartları ve Gerekli Belgeler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Almanya&apos;da şirket kurmak isteyen yabancı gerçek veya tüzel
          kişilerin hazırlaması gereken temel belgeler şunlardır:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Gerekli Belgeler ve Kayıtlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Kimlik/Pasaport:</strong> Noter işlemleri için gerekli;
              gerektiğinde apostilli tercümesiyle birlikte sunulur.
            </li>
            <li>
              <strong>Şirket Unvanı ve Faaliyet Konusu:</strong> Handelsregister
              tarafından uygun görülecek, ayırt edici bir ticaret unvanı
              belirlenir.
            </li>
            <li>
              <strong>Alman İş Adresi (Geschäftssitz):</strong> Şirketin
              tescilli merkezi olarak gösterilecek fiziksel veya sanal ofis
              adresi.
            </li>
            <li>
              <strong>Ana Sözleşme (Gesellschaftsvertrag/Satzung):</strong>
              {" "}Şirketin ortaklık yapısı, sermaye payları ve yönetim
              esaslarını belirleyen kurucu belge.
            </li>
            <li>
              <strong>Sermaye Yatırım Dekontu:</strong> Kuruluş sermayesinin
              ilgili kısmının Alman banka hesabına yatırıldığını gösteren
              belge.
            </li>
            <li>
              <strong>Yönetici (Geschäftsführer) Bilgileri:</strong> Şirketi
              temsil edecek müdür/müdürlerin kimlik ve iletişim bilgileri;
              müdürün Almanya&apos;da ikamet etme zorunluluğu yoktur.
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
          Süreç, notere ana sözleşme onaylatmadan Ticaret Siciline tescile
          kadar dört ana aşamadan oluşur ve tipik olarak 4-8 hafta sürer.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Noter & Ana Sözleşme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Handelsregister Tescili</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Vergi Numarası (Steuernummer)</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Gewerbeamt & Banka Hesabı</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Noter Huzurunda Ana Sözleşmenin İmzalanması
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketin ana sözleşmesi (Gesellschaftsvertrag) hazırlanarak Alman
            noteri (Notar) huzurunda imzalanır ve onaylanır. Bu aşamadan önce
            sermayenin yasal olarak istenen kısmının bir Alman bankasında
            açılan şirket hesabına yatırılmış olması gerekir. Noter, kuruluş
            başvurusunu elektronik olarak Handelsregister&apos;e iletir.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Ticaret Siciline (Handelsregister) Tescil
          </h3>
          <p className="leading-8 text-gray-700">
            Noter tarafından iletilen kuruluş belgeleri, şirketin merkezinin
            bulunduğu yerdeki yerel mahkemeye (Amtsgericht) bağlı
            Handelsregister&apos;de incelenir ve tescil edilir. Bu kayıtla
            şirket tüzel kişilik kazanır (GmbH i.G. aşamasından tam GmbH
            statüsüne geçer) ve resmi olarak faaliyet gösterebilir hale
            gelir.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Vergi Numarasının (Steuernummer) Alınması
          </h3>
          <p className="leading-8 text-gray-700">
            Handelsregister tescilinin ardından yerel vergi dairesi
            (Finanzamt) nezdinde şirket için vergi numarası (Steuernummer) ve
            KDV mükellefiyeti kapsamında gerekiyorsa AB içi ticaret için KDV
            kimlik numarası (Umsatzsteuer-Identifikationsnummer) başvurusu
            yapılır. Bu işlemler Bundeszentralamt für Steuern (BZSt) ve
            Finanzamt üzerinden yürütülür.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Gewerbeamt Kaydı ve Banka Hesabı
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket, faaliyet göstereceği belediyedeki Ticaret Ofisi&apos;ne
            (Gewerbeamt) kaydedilerek işletme ruhsatı (Gewerbeanmeldung)
            alınır; bu kayıt otomatik olarak Finanzamt&apos;a ve ilgili
            meslek/sanayi odasına (IHK) bildirilir. Sermayenin tamamının
            transferi ve faaliyet ödemeleri, kuruluş sürecinin başında
            açılan şirket banka hesabı üzerinden yürütülür. Toplam süreç,
            banka hesabı açılışı dahil genellikle 4-8 hafta içinde
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
          Almanya&apos;da kurumlar üzerindeki temel vergi yükü, federal
          kurumlar vergisi (Körperschaftsteuer) ile dayanışma ek vergisi
          (Solidaritätszuschlag) ve belediyeye ödenen ticaret vergisinden
          (Gewerbesteuer) oluşur; buna KDV (Umsatzsteuer) de eklenir.
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
                <td className="p-5 font-semibold">Körperschaftsteuer (Kurumlar Vergisi)</td>
                <td className="p-5">%15</td>
                <td className="p-5">Net vergilendirilebilir kâr üzerinden sabit federal oran</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Solidaritätszuschlag (Dayanışma Ek Vergisi)</td>
                <td className="p-5">%5,5</td>
                <td className="p-5">Kurumlar vergisi tutarı üzerinden hesaplanır (efektif ek yük ≈ %0,825)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Gewerbesteuer (Belediye Ticaret Vergisi)</td>
                <td className="p-5">%8 – %17 (şehre göre)</td>
                <td className="p-5">Temel oran %3,5&apos;in belediyenin belirlediği çarpanla (Hebesatz) çarpılmasıyla hesaplanır; büyük şehirlerde daha yüksektir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV (Umsatzsteuer) – Standart</td>
                <td className="p-5">%19</td>
                <td className="p-5">Genel mal ve hizmetler için uygulanan temel oran</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV (Umsatzsteuer) – İndirimli</td>
                <td className="p-5">%7</td>
                <td className="p-5">Gıda, kitap, kültürel hizmetler ve belirli temel ihtiyaç kalemlerinde</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Körperschaftsteuer, Solidaritätszuschlag ve Gewerbesteuer birlikte
            değerlendirildiğinde efektif kurumlar vergisi yükü, şirket
            merkezinin bulunduğu belediyeye göre yaklaşık %27-32 seviyesine
            ulaşabilmektedir. Türkiye ile Almanya arasında Çifte
            Vergilendirmeyi Önleme Anlaşması (ÇVÖA) bulunduğundan,
            Almanya&apos;da ödenen verginin Türkiye&apos;de hesaplanan
            kurumlar vergisinden mahsup edilmesi mümkün olabilir; somut durum
            için mali müşavir teyidi gereklidir. Güncel oranlar için{" "}
            <a
              href="https://www.bzst.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Bundeszentralamt für Steuern (BZSt)
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
          Almanya&apos;da şirket kurmak, Türkiye tarafında da bazı bildirim
          yükümlülüklerini beraberinde getirir; buna karşılık Ticaret
          Bakanlığı&apos;nın sunduğu destek kalemlerinden de yararlanmak
          mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Almanya&apos;da şirket kuruluş sürecinizi belge hazırlığından
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
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler, Almanya&apos;da
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
              Almanya&apos;da açılan ofis, depo, showroom veya mağaza gibi
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
          Bu destek ve bildirim yükümlülükleri, hedef ülke Almanya olsa da
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
            ✅ Sermayenin bankaya yatırılması ile noter onayı sürecini önceden planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılış sürecinin uzayabileceğini planlarınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Gewerbesteuer&apos;in belediyeye göre değiştiğini, şehir seçiminin vergi yükünü etkilediğini unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında mahsup imkânını mali müşavirle teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Sektörünüze özel izin/lisans (Erlaubnis) gerekliliği olup olmadığını önceden araştırın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ UG&apos;de yasal yedek akçe zorunluluğunun kâr dağıtımını sınırlayacağını göz önünde bulundurun
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
              Almanya&apos;da şirket kurmak için Almanya&apos;da ikamet etmek gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Türk vatandaşları Almanya&apos;da ikamet etmeden, vekâletle
              veya bir seyahatle noter işlemlerini tamamlayarak şirket
              kurabilir. GmbH müdürünün (Geschäftsführer) de Almanya&apos;da
              ikamet zorunluluğu yoktur, ancak vergi ve resmi yazışmalar için
              geçerli bir adres gösterilmesi gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              GmbH kurmak için tüm sermayeyi baştan yatırmak gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Standart GmbH&apos;da 25.000 EUR&apos;luk sermayenin en
              az yarısının (asgari 12.500 EUR) kuruluş anında şirket banka
              hesabına yatırılması yeterlidir; kalan kısım daha sonra
              tamamlanabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Almanya&apos;da kurulan şirketin Türkiye&apos;de de vergi yükümlülüğü olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişilerin
              Almanya&apos;daki şirketten elde ettiği kazançlar Türkiye&apos;de
              de beyan yükümlülüğüne tabi olabilir. Türkiye-Almanya Çifte
              Vergilendirmeyi Önleme Anlaşması kapsamında Almanya&apos;da
              ödenen verginin Türkiye&apos;de mahsubu mümkün olabilir;
              detaylar somut duruma göre değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              GmbH ile UG (haftungsbeschränkt) arasındaki temel fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              UG, 1 EUR&apos;dan itibaren kurulabilen, düşük maliyetli bir
              GmbH varyantıdır; ancak yıllık kârın en az %25&apos;ini yasal
              yedek akçeye ayırma zorunluluğu bulunur. GmbH ise 25.000 EUR
              asgari sermaye ile kurulur, kâr dağıtımında bu kısıtlama
              olmadan ciddi ticari faaliyet planlayan çoğu yabancı yatırımcı
              için daha uygun bir seçenektir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Noter onayından Handelsregister tesciline kadar olan temel
              işlemler genellikle 1-3 hafta içinde tamamlanır; vergi
              numarası ve banka hesabı açılışı dahil edildiğinde toplam
              süreç 4-8 haftaya kadar uzayabilir.
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
          Almanya, güçlü sanayi altyapısı, AB pazarına doğrudan erişimi ve
          kurumsal itibar sağlayan şeffaf bir hukuk sistemiyle Türk
          girişimciler için en cazip yurt dışı yapılanma alternatiflerinden
          biridir. GmbH, çoğu yatırımcı için doğru dengeyi kuran şirket türü
          olarak öne çıkar; ancak vergi planlaması, Gewerbesteuer&apos;in
          belediyeye göre değişkenliği, Türkiye tarafındaki bildirim
          yükümlülükleri ve yerel mevzuata uyum konularında profesyonel
          destek almak, sürecin hatasız ilerlemesini sağlar.
        </p>
      </section>
    </BlogLayout>
  );
}
