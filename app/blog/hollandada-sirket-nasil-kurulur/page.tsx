import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Hollanda'da Şirket Nasıl Kurulur? 2026 Rehberi | Koray Akdağ",
  description: "Hollanda'da BV ve NV kuruluşu, KVK tescili, vergi oranları ve Türkiye'deki yükümlülüklerle 2026 güncel adım adım rehber.",
  keywords: [
    "hollandada şirket kurma",
    "hollanda bv kuruluşu",
    "kvk ticaret odası tescili",
    "hollandada şirket kurmanın avantajları",
    "hollanda vergi sistemi",
    "hollanda kurumlar vergisi btw oranı",
    "yurtdışında şirket kurma hollanda",
    "belastingdienst vergi numarası",
    "2026 hollanda şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Hollanda'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="BV, Eenmanszaak ve NV şirket türleri, KVK tescili, gerekli belgeler, adım adım kuruluş süreci, vergi oranları ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Hollanda rehberi."
      category="YURT DIŞI ŞİRKET • HOLLANDA • 2026"
      date="2026"
      readTime="11 Dakika"
      slug="hollandada-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Rotterdam Limanı ve Schiphol Havalimanı&apos;nın sağladığı lojistik
          erişim, Avrupa&apos;nın en gelişmiş dijital altyapılarından biri ve
          yabancı yatırımcılara yönelik esnek mevzuatıyla Hollanda, AB
          pazarına açılmak isteyen Türk girişimciler ve ihracatçı firmalar
          için güçlü bir konumlanma noktasıdır.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Hollanda&apos;da hangi şirket türleri mevcut?</li>
          <li>✔ BV kuruluşu için gerekli belgeler ve şartlar</li>
          <li>✔ Adım adım kuruluş süreci</li>
          <li>✔ Güncel kurumlar vergisi ve BTW (KDV) oranları</li>
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
            href="#neden-hollanda"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden Hollanda&apos;da Şirket Kurmalısınız?
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

      {/* 1. NEDEN HOLLANDA */}
      <section id="neden-hollanda" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Hollanda&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hollanda, coğrafi konumu itibarıyla Avrupa&apos;nın lojistik ve
          ticaret merkezlerinden biridir. Rotterdam Limanı üzerinden AB
          pazarına deniz yoluyla, Schiphol Havalimanı üzerinden hava yoluyla
          erişim mümkündür; bu altyapı, Hollanda&apos;yı özellikle ihracat ve
          dağıtım odaklı şirketler için cazip kılar.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🚢</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Güçlü Lojistik Altyapısı
            </h3>
            <p className="text-gray-700">
              Rotterdam Limanı Avrupa&apos;nın en büyük limanı, Schiphol ise
              önde gelen kargo havalimanlarından biri olarak AB pazarına
              hızlı erişim sağlar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hızlı ve Erişilebilir Kuruluş
            </h3>
            <p className="text-gray-700">
              BV kuruluşu, notere tek bir randevu ve KVK tesciliyle
              genellikle birkaç iş günü içinde tamamlanabilir; asgari sermaye
              şartı bulunmaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              AB Pazarına Doğrudan Erişim
            </h3>
            <p className="text-gray-700">
              Hollanda&apos;da kurulan bir şirket, tek pazar avantajıyla
              gümrük engeli olmadan tüm AB üyesi ülkelere mal ve hizmet
              satabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Hollanda&apos;da Şirket Türleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yabancı yatırımcıların en çok tercih ettiği yapı BV (Besloten
          Vennootschap)&apos;dir. Bunun dışında Eenmanszaak (şahıs işletmesi)
          ve NV (Naamloze Vennootschap) seçenekleri de mevcuttur.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Şirket Türü</th>
                <th className="p-5">Sorumluluk / Sermaye</th>
                <th className="p-5">Kimler İçin Uygun</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">BV (Besloten Vennootschap)</td>
                <td className="p-5">Sınırlı sorumluluk; yasal asgari sermaye şartı yok, 0,01 EUR&apos;luk sembolik hisse ile dahi kurulabilir</td>
                <td className="p-5">Ciddi ticari faaliyet, yatırımcı erişimi ve kurumsal itibar hedefleyen çoğu yabancı yatırımcı için en uygun seçenek</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Eenmanszaak (Şahıs İşletmesi)</td>
                <td className="p-5">Sınırsız kişisel sorumluluk; sermaye şartı yok</td>
                <td className="p-5">Hollanda&apos;da ikamet eden tek kişilik girişimciler; yabancı uyruklu ve Hollanda&apos;da ikamet etmeyen kişiler için pratikte uygun değildir</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">NV (Naamloze Vennootschap)</td>
                <td className="p-5">Sınırlı sorumluluk; asgari sermaye 45.000 EUR</td>
                <td className="p-5">Büyük ölçekli yatırımlar, halka arz veya çok sayıda hissedarla kurumsal ortaklık planlayan yapılar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Türkiye&apos;deki Limited Şirkete en yakın ve yabancı yatırımcılar
            için en pratik yapı BV&apos;dir. Sınırlı sorumluluk avantajı,
            asgari sermaye şartının bulunmaması ve noter aracılığıyla
            vekâletle dahi kurulabilmesi nedeniyle Türk girişimcilerin büyük
            çoğunluğu bu yapıyı tercih eder. Eenmanszaak, Hollanda&apos;da
            fiziksel ikamet gerektirdiğinden yabancı yatırımcılar için
            pratikte sınırlı bir seçenektir.
          </p>
        </div>
      </section>

      {/* 3. ŞARTLAR VE BELGELER */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kuruluş Şartları ve Gerekli Belgeler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hollanda&apos;da BV kurmak isteyen yabancı gerçek veya tüzel
          kişilerin karşılaması gereken temel şartlar ve hazırlaması gereken
          belgeler şunlardır:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Gerekli Belgeler ve Şartlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>En Az 1 Direktör ve 1 Hissedar:</strong> Aynı kişi
              olabilir; Hollanda vatandaşlığı veya ikameti şartı yoktur,
              pasaportu olan her yabancı BV kurabilir.
            </li>
            <li>
              <strong>Notere Vekâlet veya Bizzat İmza:</strong> BV
              kuruluşunda ana sözleşme mutlaka bir Hollandalı medeni hukuk
              noteri (notaris) huzurunda imzalanır; yurt dışından vekâletle
              işlem yapmak mümkündür, bu nedenle Hollanda&apos;ya seyahat
              zorunlu değildir.
            </li>
            <li>
              <strong>Hollanda İş Adresi:</strong> Şirketin KVK&apos;ya
              tescil edileceği fiziksel veya sanal ofis adresi; posta
              kutusu adresi kabul edilmez.
            </li>
            <li>
              <strong>Kimlik Doğrulama:</strong> Direktör ve hissedarların
              geçerli pasaport veya kimlik belgesi; bazı durumlarda noter
              tarafından ek kimlik doğrulama istenebilir.
            </li>
            <li>
              <strong>UBO (Ultimate Beneficial Owner) Bildirimi:</strong>
              {" "}Şirkette %25&apos;in üzerinde hisse veya oy hakkına sahip
              gerçek kişilerin kimlik bilgilerinin KVK&apos;nın UBO
              register&apos;ına bildirilmesi; bu kaydı noter, kuruluş
              sürecinde otomatik olarak yapar.
            </li>
            <li>
              <strong>Ana Sözleşme (Akte van Oprichting):</strong> Şirketin
              faaliyet konusu, hisse yapısı ve yönetim esaslarını düzenleyen,
              noter tarafından hazırlanan kurucu belge.
            </li>
            <li>
              <strong>BSN (Burgerservicenummer):</strong> Şirketi bizzat
              Hollanda&apos;da yönetecek ve orada ikamet edecek
              direktörler için gereklidir; yalnızca yurt dışından yönetilen
              yapılarda genellikle zorunlu değildir.
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
          Süreç, notere ana sözleşme onaylatmadan banka hesabı açılışına
          kadar dört ana aşamadan oluşur ve banka hesabı hariç genellikle
          birkaç iş günü içinde tamamlanabilir.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Noter & Ana Sözleşme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">KVK Tescili</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Vergi Numarası (Belastingdienst)</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Banka Hesabı</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Noter Huzurunda Ana Sözleşmenin İmzalanması
          </h3>
          <p className="leading-8 text-gray-700">
            Süreç, şirket unvanının belirlenmesi ve bir Hollandalı medeni
            hukuk noteri (notaris) seçilmesiyle başlar. Noter, direktör ve
            hissedar bilgilerini toplayarak ana sözleşmeyi (akte van
            oprichting) hazırlar ve imza için taraflarla randevu ayarlar.
            İmza, Hollanda&apos;ya seyahat edilmeden noter huzurunda
            düzenlenmiş bir vekâletname ile de gerçekleştirilebilir.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. KVK (Kamer van Koophandel) Tescili
          </h3>
          <p className="leading-8 text-gray-700">
            Ana sözleşme imzalandıktan sonra noter, şirketi Hollanda Ticaret
            Odası (Kamer van Koophandel – KVK) Ticaret Siciline tescil eder
            ve aynı işlemle UBO bilgilerini KVK&apos;nın UBO
            register&apos;ına kaydeder. Tescille birlikte şirket tüzel
            kişilik kazanır ve bir KVK numarası alır.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Vergi Numarası Alınması (Belastingdienst)
          </h3>
          <p className="leading-8 text-gray-700">
            KVK tescili tamamlanınca bilgiler otomatik olarak Hollanda
            Vergi Dairesi&apos;ne (Belastingdienst) iletilir; şirkete kısa
            süre içinde bir kurumlar vergisi numarası ve, faaliyet konusuna
            göre, bir BTW (KDV) numarası atanır. Bazı durumlarda
            Belastingdienst ek belge veya bilgi talep edebilir.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Banka Hesabı Açılışı
          </h3>
          <p className="leading-8 text-gray-700">
            KVK tescil belgesi ve ana sözleşme ile bir Hollanda bankasında
            ticari hesap başvurusu yapılır. Geleneksel bankaların yabancı
            yönetici/hissedarlar için kimlik doğrulama (KYC) süreci
            haftalar sürebilir; bu nedenle birçok yabancı yatırımcı, hesap
            açılışını hızlandırmak için Wise Business veya Revolut Business
            gibi fintech çözümlerini ilk aşamada tercih eder.
          </p>
        </div>
      </section>

      {/* 5. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi ve Oranlar (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hollanda&apos;da kurumlar üzerindeki temel vergi yükü kurumlar
          vergisinden (vennootschapsbelasting) oluşur; buna BTW (KDV)
          yükümlülüğü eklenir.
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
                <td className="p-5 font-semibold">Kurumlar Vergisi – Alt Dilim</td>
                <td className="p-5">%19</td>
                <td className="p-5">Yıllık vergilendirilebilir kârı 200.000 EUR&apos;ya kadar olan şirketlerde uygulanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar Vergisi – Üst Dilim</td>
                <td className="p-5">%25,8</td>
                <td className="p-5">Yıllık kârı 200.000 EUR&apos;yu aşan kısım için uygulanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">BTW (KDV) – Standart</td>
                <td className="p-5">%21</td>
                <td className="p-5">Genel mal ve hizmetler için uygulanan temel oran</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">BTW (KDV) – İndirimli</td>
                <td className="p-5">%9</td>
                <td className="p-5">Gıda, ilaç, kitap gibi belirli temel ürün ve hizmetlerde</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">KOR (Küçük İşletme Rejimi)</td>
                <td className="p-5">20.000 EUR ciro eşiği</td>
                <td className="p-5">Yıllık cirosu bu tutarın altında kalan işletmeler, isteğe bağlı olarak BTW muafiyeti başvurusunda bulunabilir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            İki dilimli kurumlar vergisi sistemi, küçük ve orta ölçekli
            şirketler için görece avantajlı bir yapı sunar; kârın büyük
            kısmı 200.000 EUR&apos;nun altında kaldığı sürece efektif vergi
            yükü %19 seviyesinde kalır. Türkiye ile Hollanda arasında Çifte
            Vergilendirmeyi Önleme Anlaşması (ÇVÖA) bulunduğundan,
            Hollanda&apos;da ödenen verginin Türkiye&apos;de hesaplanan
            kurumlar vergisinden mahsup edilmesi mümkün olabilir; somut
            durum için mali müşavir teyidi gereklidir. Güncel oranlar için{" "}
            <a
              href="https://www.belastingdienst.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Belastingdienst
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
          Hollanda&apos;da şirket kurmak, Türkiye tarafında da bazı bildirim
          yükümlülüklerini beraberinde getirir; buna karşılık Ticaret
          Bakanlığı&apos;nın sunduğu destek kalemlerinden de yararlanmak
          mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Hollanda&apos;da şirket kuruluş sürecinizi belge hazırlığından
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
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler,
            Hollanda&apos;da şirket kurmak veya mevcut bir şirkete ortak
            olmak amacıyla yaptıkları ilk sermaye ihracını takip eden
            <strong> 3 ay içinde</strong>, Ticaret Bakanlığı&apos;nın Yurt
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
              Hollanda&apos;da açılan ofis, depo, showroom veya mağaza gibi
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
          Bu destek ve bildirim yükümlülükleri, hedef ülke Hollanda olsa da
          genel çerçevesi diğer ülkelerdeki yapılanmalarla aynıdır. Konunun
          tamamına ve güncel destek oranlarına{" "}
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

      {/* 7. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Noter seçimini ve vekâletname sürecini kuruluş öncesinde netleştirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılış sürecinin uzayabileceğini planlarınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ UBO register kaydının eksiksiz ve güncel olmasını sağlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ BTW mükellefiyeti ve KOR eşiğini faaliyet planınıza göre değerlendirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında mahsup imkânını mali müşavirle teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yıllık mali tabloların KVK&apos;ya zamanında iletilmesini sağlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
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
              Hollanda&apos;da şirket kurmak için Hollanda&apos;da ikamet etmek gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Türk vatandaşları Hollanda&apos;da ikamet etmeden, noter
              huzurunda düzenlenmiş bir vekâletname ile BV kurabilir.
              Direktör ve hissedarların Hollanda&apos;da ikamet zorunluluğu
              yoktur; yalnızca geçerli bir iş adresi ve noter işlemlerinin
              tamamlanması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              BV kurmak için asgari sermaye şartı var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Hollanda&apos;da BV kuruluşunda yasal bir asgari sermaye
              şartı bulunmaz; şirket 0,01 EUR&apos;luk sembolik bir hisse
              sermayesiyle dahi kurulabilir. Sermaye tutarı, şirketin
              faaliyet hacmine ve kurumsal itibar hedeflerine göre
              belirlenir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hollanda&apos;da kurulan şirketin Türkiye&apos;de de vergi yükümlülüğü olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişilerin
              Hollanda&apos;daki şirketten elde ettiği kazançlar
              Türkiye&apos;de de beyan yükümlülüğüne tabi olabilir.
              Türkiye-Hollanda Çifte Vergilendirmeyi Önleme Anlaşması
              kapsamında Hollanda&apos;da ödenen verginin Türkiye&apos;de
              mahsubu mümkün olabilir; detaylar somut duruma göre
              değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              BV ile NV arasındaki temel fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              BV, hissedarlar için sınırlı sorumluluk sağlayan, asgari
              sermaye şartı olmayan ve hisseleri serbestçe devredilemeyen
              yapıdır; ticari faaliyet planlayan çoğu yabancı yatırımcı için
              en uygun seçenektir. NV ise en az 45.000 EUR asgari sermaye
              gerektiren, hisseleri halka arz edilebilen bir anonim şirket
              yapısıdır ve daha çok büyük ölçekli yatırımlar için tercih
              edilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Noter randevusu ve KVK tescili genellikle birkaç iş günü
              içinde tamamlanır; vergi numarasının Belastingdienst
              tarafından atanması ile birlikte toplam süreç ortalama 1-2
              hafta sürer. Banka hesabı açılışı dahil edildiğinde süreç
              birkaç haftaya kadar uzayabilir.
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
          Hollanda, güçlü lojistik altyapısı, AB pazarına doğrudan erişimi
          ve asgari sermaye şartı olmadan yürütülebilen kuruluş süreciyle
          Türk girişimciler için ciddi bir yurt dışı yapılanma
          alternatifidir. BV, sınırlı sorumluluk avantajı ve esnek sermaye
          yapısıyla çoğu yatırımcı için doğru seçenek olarak öne çıkar;
          ancak UBO bildirimi, kurumlar vergisi/BTW yükümlülükleri, Türkiye
          tarafındaki bildirim gereklilikleri ve yerel mevzuata uyum
          konularında profesyonel destek almak, sürecin hatasız
          ilerlemesini sağlar.
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
          href="/blog/ingilterede-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • İNGİLTERE • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">İngiltere'de Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
