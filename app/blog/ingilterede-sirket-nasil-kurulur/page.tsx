import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "İngiltere'de Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları (2026) | Koray Akdağ",
  description:
    "İngiltere'de Ltd, Sole Trader ve LLP şirket türleri, Companies House'a online kayıt, director/shareholder/registered office şartları, adım adım kuruluş süreci, Corporation Tax/VAT oranları ve Türkiye tarafındaki yükümlülükler. 2026 güncel rehber.",
  keywords: [
    "ingilterede şirket kurma",
    "ingiltere ltd kuruluşu",
    "companies house şirket kayıt",
    "ingilterede şirket kurmanın avantajları",
    "ingiltere vergi sistemi",
    "ingiltere corporation tax vat oranı",
    "yurtdışında şirket kurma ingiltere",
    "hmrc utr kaydı",
    "2026 ingiltere şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İngiltere'de Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="Ltd, Sole Trader ve LLP şirket türleri, Companies House'a online kayıt, gerekli belgeler, adım adım kuruluş süreci, vergi oranları ve Türkiye tarafındaki yükümlülüklerle 2026 güncel İngiltere rehberi."
      category="YURT DIŞI ŞİRKET • İNGİLTERE • 2026"
      date="2026"
      readTime="11 Dakika"
      slug="ingilterede-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Londra&apos;nın küresel finans merkezi konumu, İngilizcenin
          uluslararası iş dilinde sağladığı avantaj ve Companies House
          üzerinden birkaç gün içinde tamamlanabilen kuruluş süreciyle
          İngiltere, yeni pazarlara açılmak isteyen Türk girişimciler ve
          ihracatçı firmalar için en hızlı ve düşük maliyetli yurt dışı
          yapılanma alternatiflerinden biridir.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ İngiltere&apos;de hangi şirket türleri mevcut?</li>
          <li>✔ Ltd kuruluşu için gerekli belgeler ve şartlar</li>
          <li>✔ Adım adım kuruluş süreci</li>
          <li>✔ Güncel Corporation Tax ve VAT oranları</li>
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
            href="#neden-ingiltere"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden İngiltere&apos;de Şirket Kurmalısınız?
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

      {/* 1. NEDEN İNGİLTERE */}
      <section id="neden-ingiltere" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden İngiltere&apos;de Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İngiltere, dünyanın en köklü ticaret hukuku sistemlerinden birine,
          Londra merkezli güçlü bir finans ekosistemine ve Companies House
          üzerinden tamamen online yürütülebilen, birkaç gün içinde
          sonuçlanan bir kuruluş sürecine sahiptir. Bu özellikler, İngiltere&apos;yi
          yabancı yatırımcılar için en erişilebilir yurt dışı yapılanma
          noktalarından biri haline getirir.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hızlı ve Düşük Maliyetli Kuruluş
            </h3>
            <p className="text-gray-700">
              Companies House&apos;a online başvuru genellikle 24 saat
              içinde sonuçlanır; resmi kuruluş harcı diğer birçok AB
              ülkesine kıyasla oldukça düşüktür.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏦</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Güçlü Finans Ekosistemi
            </h3>
            <p className="text-gray-700">
              Londra, dünyanın önde gelen finans merkezlerinden biri olarak
              fintech, ödeme altyapıları ve yatırımcı ağlarına doğrudan
              erişim sağlar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              İngilizce İş Dünyası Avantajı
            </h3>
            <p className="text-gray-700">
              Sözleşmeler, resmi yazışmalar ve müşteri iletişimi
              uluslararası iş dilinde yürütüldüğünden operasyonel süreçler
              basitleşir ve global müşteri güveni artar.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. İngiltere&apos;de Şirket Türleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yabancı yatırımcıların en çok tercih ettiği yapı Private Limited
          Company (Ltd)&apos;dir. Bunun dışında Sole Trader ve LLP (Limited
          Liability Partnership) seçenekleri de mevcuttur, ancak bu iki yapı
          çoğu yabancı yatırımcı için daha sınırlı avantaj sunar.
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
                <td className="p-5 font-semibold">Private Limited Company (Ltd)</td>
                <td className="p-5">Sınırlı sorumluluk; asgari sermaye şartı yok, 1 GBP&apos;lik sembolik hisse ile dahi kurulabilir</td>
                <td className="p-5">Ciddi ticari faaliyet, marka güvenilirliği ve yatırımcı erişimi hedefleyen çoğu yabancı yatırımcı için en uygun seçenek</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sole Trader</td>
                <td className="p-5">Sınırsız kişisel sorumluluk; sermaye şartı yok</td>
                <td className="p-5">Tek kişilik, düşük hacimli faaliyetler; yabancıların İngiltere&apos;de bu yapıyla vergi mükellefi olması pratikte zor ve önerilmez</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">LLP (Limited Liability Partnership)</td>
                <td className="p-5">Ortaklar için sınırlı sorumluluk; en az 2 ortak gerekir</td>
                <td className="p-5">Profesyonel hizmet ortaklıkları (danışmanlık, hukuk, muhasebe gibi) için uygun; klasik ticari şirket yapısından farklıdır</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Türkiye&apos;deki Limited Şirkete en yakın ve yabancı yatırımcılar
            için en pratik yapı Ltd&apos;dir. Sınırlı sorumluluk avantajı,
            düşük kuruluş maliyeti ve asgari sermaye şartının bulunmaması
            nedeniyle Türk girişimcilerin büyük çoğunluğu bu yapıyı tercih
            eder. Sole Trader, yabancı uyruklu kişiler için İngiltere&apos;de
            fiziksel ikamet ve vergi mükellefiyeti gerektirdiğinden pratikte
            sınırlı bir seçenektir.
          </p>
        </div>
      </section>

      {/* 3. ŞARTLAR VE BELGELER */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kuruluş Şartları ve Gerekli Belgeler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İngiltere&apos;de Ltd kurmak isteyen yabancı gerçek veya tüzel
          kişilerin karşılaması gereken temel şartlar ve hazırlaması gereken
          belgeler şunlardır:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Gerekli Belgeler ve Şartlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>En Az 1 Director:</strong> 16 yaşını doldurmuş, gerçek
              kişi olması gereken en az bir şirket yöneticisi (director);
              İngiltere&apos;de ikamet zorunluluğu yoktur.
            </li>
            <li>
              <strong>En Az 1 Shareholder (Hissedar):</strong> Director ile
              aynı kişi olabilir; hissedarın da İngiltere&apos;de ikamet
              etmesi gerekmez.
            </li>
            <li>
              <strong>Registered Office (Tescilli Adres):</strong> Şirketin
              kurulu olduğu bölgede (İngiltere/Galler, İskoçya veya Kuzey
              İrlanda) resmi tebligatları alabilecek fiziksel bir İngiltere
              adresi; sanal ofis/kayıtlı ajan hizmetleriyle karşılanabilir.
            </li>
            <li>
              <strong>PSC (Person with Significant Control) Bildirimi:</strong>
              {" "}Şirkette %25&apos;in üzerinde hisse veya oy hakkına sahip
              kişilerin kimlik bilgilerinin Companies House&apos;a
              bildirilmesi.
            </li>
            <li>
              <strong>Kimlik Doğrulama (Identity Verification):</strong> 2025
              itibarıyla yürürlüğe giren Economic Crime and Corporate
              Transparency Act kapsamında, tüm director ve PSC&apos;lerin
              GOV.UK One Login veya yetkili bir aracı (authorised agent)
              üzerinden kimlik doğrulaması yapması zorunludur.
            </li>
            <li>
              <strong>SIC Kodu:</strong> Şirketin faaliyet konusunu
              tanımlayan Standard Industrial Classification kodu.
            </li>
            <li>
              <strong>Memorandum ve Articles of Association:</strong>
              {" "}Şirketin kuruluş beyanı ve iç yönetim esaslarını
              düzenleyen, Companies House&apos;un standart şablonlarıyla da
              hazırlanabilen kurucu belgeler.
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
          Süreç, şirket adı ve türünün belirlenmesinden banka hesabı
          açılışına kadar dört ana aşamadan oluşur ve banka hesabı hariç
          genellikle birkaç gün içinde tamamlanır.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Şirket Adı & Tür Seçimi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Companies House Online Kayıt</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">UTR & Corporation Tax (HMRC)</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Banka Hesabı</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Şirket Adı ve Türünün Belirlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Öncelikle Companies House&apos;un çevrimiçi sorgu aracıyla
            seçilen şirket unvanının daha önce tescilli olmadığı teyit
            edilir. Ardından şirket türü (çoğu yabancı yatırımcı için Ltd),
            registered office adresi ve faaliyet konusunu tanımlayan SIC
            kodu belirlenir.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Companies House&apos;a Online Kayıt
          </h3>
          <p className="leading-8 text-gray-700">
            Director, shareholder ve PSC bilgileri, memorandum/articles of
            association ile birlikte GOV.UK üzerinden veya yetkili bir
            company formation agent aracılığıyla Companies House&apos;a
            online olarak sunulur. Director ve PSC&apos;lerin kimlik
            doğrulama adımını tamamlamış olması gerekir. Başvuru onaylanınca
            Certificate of Incorporation düzenlenir ve şirket tüzel kişilik
            kazanır; süreç genellikle 24 saat içinde sonuçlanır.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. UTR Alınması ve Corporation Tax Kaydı (HMRC)
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket kuruluşunun ardından HMRC, şirkete otomatik olarak bir
            Unique Taxpayer Reference (UTR) numarası göndermek üzere
            süreci başlatır; bu numara genellikle posta yoluyla 10-15 gün
            içinde ulaşır. Şirketin faaliyete başladığı tarihten itibaren
            <strong> 3 ay içinde</strong> HMRC nezdinde Corporation Tax
            için kayıt tamamlanmalıdır.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Banka Hesabı Açılışı
          </h3>
          <p className="leading-8 text-gray-700">
            Certificate of Incorporation ve şirket belgeleriyle bir İngiliz
            bankasında ticari hesap başvurusu yapılır. Geleneksel bankaların
            yabancı yönetici/hissedarlar için kimlik doğrulama süreci
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
          İngiltere&apos;de kurumlar üzerindeki temel vergi yükü Corporation
          Tax&apos;tan oluşur; buna belirli bir cirodan itibaren VAT (KDV)
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
                <td className="p-5 font-semibold">Corporation Tax – Small Profits Rate</td>
                <td className="p-5">%19</td>
                <td className="p-5">Yıllık kârı 50.000 GBP&apos;ye kadar olan şirketlerde uygulanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Corporation Tax – Marginal Relief</td>
                <td className="p-5">%19 – %25 arası kademeli</td>
                <td className="p-5">Kâr 50.001-250.000 GBP arasında olan şirketlerde, marjinal indirim (3/200 katsayısı) ile kademeli olarak artan efektif oran</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Corporation Tax – Main Rate</td>
                <td className="p-5">%25</td>
                <td className="p-5">Yıllık kârı 250.000 GBP&apos;yi aşan şirketlerde uygulanan tavan oran</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">VAT (KDV) – Standart</td>
                <td className="p-5">%20</td>
                <td className="p-5">Genel mal ve hizmetler için uygulanan temel oran</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">VAT Kayıt Eşiği</td>
                <td className="p-5">90.000 GBP</td>
                <td className="p-5">12 aylık dönemde bu ciroyu aşan şirketler, aşımı takip eden ayın sonundan itibaren 30 gün içinde VAT mükellefi olmak zorundadır</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            50.000-250.000 GBP arası kâr diliminde uygulanan marginal relief
            mekanizması, kârın büyüklüğüne bağlı olarak efektif oranı %19
            ile %25 arasında kademeli şekilde artırır; küçük ve orta
            ölçekli çoğu Ltd şirketi için efektif yük %19-%25 bandında
            kalır. Türkiye ile İngiltere arasında Çifte Vergilendirmeyi
            Önleme Anlaşması (ÇVÖA) bulunduğundan, İngiltere&apos;de ödenen
            verginin Türkiye&apos;de hesaplanan kurumlar vergisinden mahsup
            edilmesi mümkün olabilir; somut durum için mali müşavir teyidi
            gereklidir. Güncel oranlar için{" "}
            <a
              href="https://www.gov.uk/government/organisations/hm-revenue-customs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              HM Revenue &amp; Customs (HMRC)
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
          İngiltere&apos;de şirket kurmak, Türkiye tarafında da bazı bildirim
          yükümlülüklerini beraberinde getirir; buna karşılık Ticaret
          Bakanlığı&apos;nın sunduğu destek kalemlerinden de yararlanmak
          mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            İngiltere&apos;de şirket kuruluş sürecinizi belge hazırlığından
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
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler, İngiltere&apos;de
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
              İngiltere&apos;de açılan ofis, depo, showroom veya mağaza gibi
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
          Bu destek ve bildirim yükümlülükleri, hedef ülke İngiltere olsa da
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
            ✅ Director ve PSC kimlik doğrulama adımını kuruluş öncesinde tamamlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılış sürecinin uzayabileceğini planlarınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Corporation Tax kaydını faaliyete başladıktan sonra 3 ay içinde tamamlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ VAT eşiğini (90.000 GBP) yakından takip edin, aşımda 30 gün içinde kayıt yaptırın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında mahsup imkânını mali müşavirle teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yıllık confirmation statement ve mali tabloların Companies House&apos;a zamanında iletilmesini sağlayın
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
              İngiltere&apos;de şirket kurmak için İngiltere&apos;de ikamet etmek gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Türk vatandaşları İngiltere&apos;de ikamet etmeden,
              tamamen online olarak Companies House üzerinden Ltd
              kurabilir. Director ve shareholder&apos;ların İngiltere&apos;de
              ikamet zorunluluğu yoktur; yalnızca geçerli bir registered
              office adresi ve kimlik doğrulama adımının tamamlanması
              gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ltd kurmak için asgari sermaye şartı var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. İngiltere&apos;de Ltd kuruluşunda yasal bir asgari
              sermaye şartı bulunmaz; şirket 1 GBP&apos;lik sembolik bir
              hisse sermayesiyle dahi kurulabilir. Sermaye tutarı, şirketin
              faaliyet hacmine ve kurumsal itibar hedeflerine göre
              belirlenir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İngiltere&apos;de kurulan şirketin Türkiye&apos;de de vergi yükümlülüğü olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişilerin
              İngiltere&apos;deki şirketten elde ettiği kazançlar
              Türkiye&apos;de de beyan yükümlülüğüne tabi olabilir.
              Türkiye-İngiltere Çifte Vergilendirmeyi Önleme Anlaşması
              kapsamında İngiltere&apos;de ödenen verginin Türkiye&apos;de
              mahsubu mümkün olabilir; detaylar somut duruma göre
              değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ltd ile LLP arasındaki temel fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Ltd, hissedarlar için sınırlı sorumluluk sağlayan, klasik
              sermaye şirketi yapısıdır ve ticari faaliyet planlayan çoğu
              yabancı yatırımcı için en uygun seçenektir. LLP ise en az iki
              ortak gerektiren, kâr paylaşımının ortaklar arasında
              doğrudan yapıldığı bir ortaklık yapısıdır ve daha çok
              profesyonel hizmet ortaklıkları için tercih edilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Companies House&apos;a online başvuru, kimlik doğrulama
              tamamlandıktan sonra genellikle 24 saat içinde sonuçlanır ve
              toplam süreç 3-5 gün içinde tamamlanabilir. UTR numarasının
              posta yoluyla ulaşması 10-15 gün, banka hesabı açılışı dahil
              edildiğinde toplam süreç 4-6 haftaya kadar uzayabilir.
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
          İngiltere, düşük kuruluş maliyeti, hızlı ve tamamen online
          işleyen kayıt süreci ve güçlü finans ekosistemiyle Türk
          girişimciler için en erişilebilir yurt dışı yapılanma
          alternatiflerinden biridir. Ltd, sınırlı sorumluluk avantajı ve
          esnek sermaye yapısıyla çoğu yatırımcı için doğru seçenek olarak
          öne çıkar; ancak kimlik doğrulama süreci, Corporation Tax ve VAT
          yükümlülükleri, Türkiye tarafındaki bildirim gereklilikleri ve
          yerel mevzuata uyum konularında profesyonel destek almak,
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
          href="/blog/hollandada-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • HOLLANDA • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Hollanda'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        <Link
          href="/blog/almanyada-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • ALMANYA • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Almanya'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
