import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Ukrayna'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları (2026) | Koray Akdağ",
  description:
    "TOV (Limited Şirket) kuruluşu, %18 kurumlar vergisi ve %20 KDV, Diia City teknoloji rejimi, Temmuz 2026'da onaylanan Türkiye-Ukrayna Serbest Ticaret Anlaşması, banka hesabı açma süreci, güncel kambiyo/güvenlik durumu ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Ukrayna rehberi.",
  keywords: [
    "ukraynada şirket kurma",
    "ukrayna tov",
    "ukrayna llc kuruluşu",
    "ukrayna kurumlar vergisi",
    "diia city",
    "türkiye ukrayna serbest ticaret anlaşması",
    "kiev şirket kuruluşu",
    "2026 ukrayna şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Ukrayna'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="TOV (Limited Şirket) yapısı, %18 kurumlar vergisi ve %20 KDV, Diia City teknoloji rejimi, Temmuz 2026'da onaylanan Türkiye-Ukrayna Serbest Ticaret Anlaşması, banka hesabı açma süreci, güncel kambiyo/güvenlik durumu ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Ukrayna rehberi."
      category="YURT DIŞI ŞİRKET • UKRAYNA • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="ukraynada-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ukrayna Yüksek Radası&apos;nın 14 Temmuz 2026&apos;da onayladığı
          Türkiye-Ukrayna Serbest Ticaret Anlaşması, iki ülke arasındaki
          ticari ilişkileri yeni bir aşamaya taşıyor. Sermaye şartı
          aranmayan TOV (Limited Şirket) yapısı, dijitalleşmiş devlet
          hizmetleri ve teknoloji şirketlerine özel Diia City rejimi
          Ukrayna&apos;yı bölgede dikkat çeken bir yapılanma noktası haline
          getiriyor. Ancak devam eden savaş koşulları nedeniyle bu ülkede
          şirket kurmak, diğer ülkelerden farklı olarak ekstra dikkat ve
          güncel risk takibi gerektiriyor.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ TOV (Limited Şirket) yapısı ve sermaye şartı bulunmaması</li>
          <li>✔ Temmuz 2026&apos;da onaylanan Serbest Ticaret Anlaşması fırsatı</li>
          <li>✔ Diia City: teknoloji şirketleri için özel vergi rejimi</li>
          <li>✔ Adım adım kuruluş süreci ve yabancı müdür istisnası</li>
          <li>✔ Güncel %18 kurumlar vergisi, %20 KDV oranları</li>
          <li>✔ Banka hesabı, vize ve güncel kambiyo/güvenlik durumu</li>
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
            href="#neden-ukrayna"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden Ukrayna&apos;da Şirket Kurmalısınız?
          </Link>
          <Link
            href="#sirket-turleri"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. Şirket Türleri: TOV Neden Standart Tercih?
          </Link>
          <Link
            href="#diia-city"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Diia City: Teknoloji Şirketleri İçin Özel Rejim
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
            6. Banka Hesabı, Vize ve Güncel Durum
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

      {/* 1. NEDEN UKRAYNA */}
      <section id="neden-ukrayna" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Ukrayna&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2022&apos;de imzalanan, Türkiye&apos;nin 2024&apos;te ve
          Ukrayna&apos;nın 14 Temmuz 2026&apos;da onayladığı Türkiye-Ukrayna
          Serbest Ticaret Anlaşması, Ukrayna menşeli malların %84&apos;üne
          Türkiye pazarına gümrüksüz erişim sağlıyor; mal ticaretinin
          yanında hizmetler, ticari varlık (yerleşiklik), e-ticaret ve
          finansal hizmetler gibi alanları da kapsıyor. Bu gelişme,
          Ukrayna&apos;da üretim veya ticaret amaçlı bir yapı kuran Türk
          girişimciler için iki yönlü bir pazar erişimi fırsatı doğuruyor.
          Buna karşılık, devam eden savaş koşulları nedeniyle bu ülkedeki
          yapılanma kararı, diğer ülkelerden farklı olarak güncel güvenlik
          ve mevzuat takibini zorunlu kılıyor.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🤝</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Serbest Ticaret Anlaşması Fırsatı
            </h3>
            <p className="text-gray-700">
              Temmuz 2026&apos;da onaylanan anlaşma ile Ukrayna menşeli
              ürünlerin büyük bölümü Türkiye&apos;ye gümrüksüz girebiliyor;
              tarım-gıda, savunma sanayii ve lojistik alanlarında yeni iş
              birliği kapıları açılıyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💰</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Sermaye Şartı Yok
            </h3>
            <p className="text-gray-700">
              2018&apos;de yürürlüğe giren kanunla TOV kuruluşunda yasal
              asgari sermaye şartı kaldırıldı; kuruluş maliyeti bölgedeki
              diğer alternatiflere kıyasla düşük seviyede kalıyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Diia ile Dijital Devlet
            </h3>
            <p className="text-gray-700">
              Ukrayna, Diia dijital devlet platformu üzerinden şirket
              tescili, e-imza ve birçok resmi işlemi büyük ölçüde online
              yürütüyor; standart tescil talepleri kısa sürede sonuçlanıyor.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Şirket Türleri: TOV Neden Standart Tercih?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ukrayna mevzuatında yabancı yatırımcıların önünde birden fazla
          yapı bulunsa da, pratikte neredeyse tüm yabancı sermayeli
          girişimler tek bir yapıyı tercih ediyor: TOV (Товариство з
          обмеженою відповідальністю).
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
                <td className="p-5 font-semibold">TOV</td>
                <td className="p-5">Limited Şirket (LLC)</td>
                <td className="p-5">
                  Yabancı yatırımcıların standart tercihi; %100 yabancı
                  sermaye ile kurulabilir, ortakların sorumluluğu koydukları
                  sermaye ile sınırlıdır, yasal asgari sermaye şartı yoktur
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">AT</td>
                <td className="p-5">Anonim Şirket (JSC)</td>
                <td className="p-5">
                  Halka açılma veya büyük ölçekli sermaye ortaklığı
                  planlayan, karmaşık kurumsal yönetim gerektiren yatırımlar
                  için tercih edilir
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">FOP</td>
                <td className="p-5">Şahıs İşletmesi / Girişimci</td>
                <td className="p-5">
                  Tüzel kişilik gerektirmeyen küçük ölçekli faaliyetler için
                  Ukrayna vatandaşları ve mukim yabancılar tarafından
                  kullanılır; yurt dışından yapılanma için tipik tercih
                  değildir
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            TOV&apos;nin öne çıkma nedeni yalnızca esnekliği değil; 2018
            tarihli &quot;Limited ve Ek Sorumluluk Şirketleri Hakkında
            Kanun&quot; ile yasal asgari sermaye tutarı tamamen kaldırıldı
            ve kayıtlı sermaye sembolik bir tutarda (örneğin 1 UAH)
            belirlenebiliyor. Bu yapı, küçük ve orta ölçekli ticaret,
            danışmanlık, üretim ve hizmet firmaları için en pratik çözümdür.
          </p>
        </div>
      </section>

      {/* 3. DIIA CITY */}
      <section id="diia-city" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Diia City: Teknoloji Şirketleri İçin Özel Rejim
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ukrayna&apos;nın yazılım ve teknoloji sektörünü güçlendirmek için
          hayata geçirdiği Diia City rezidanslık statüsü, 2026 başı
          itibarıyla 4.000&apos;i aşkın şirket tarafından tercih edilen özel
          bir hukuki ve mali rejim sunuyor.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            💻 Diia City Rezidanslığının Sağladığı Avantajlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              Rezident şirketler, standart %18 kurumlar vergisi ile
              yalnızca kâr dağıtımı gibi belirli işlemlere uygulanan %9
              &quot;çıkış sermayesi&quot; (exit capital) vergisi arasında
              seçim yapabilir.
            </li>
            <li>
              Diia City bünyesinde çalışanlar ve gig-sözleşmeli
              uzmanlar için gelir vergisi %5, askeri vergi (military levy)
              %5 olarak uygulanır; sosyal güvenlik primi asgari tutar
              üzerinden hesaplanır.
            </li>
            <li>
              Rezidanslık şartları arasında ayda en az 1.200 Euro ortalama
              ücret, en az 9 çalışan/gig-uzman ve gelirin en az %90&apos;ının
              nitelikli teknoloji faaliyetlerinden gelmesi bulunur.
            </li>
            <li>
              Yazılım geliştirme, BT danışmanlığı ve dijital hizmet
              ihracatı yapan Türk girişimciler için Ukrayna&apos;daki en
              avantajlı yapılardan biridir.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Diia City rezidanslığı, standart TOV kuruluşuna ek bir başvuru ve
          onay süreci gerektirir; şartların sağlanıp sağlanmadığı Diia City
          idaresi tarafından değerlendirilir. Faaliyet alanınız teknoloji
          odaklıysa, bu rejimin sunduğu vergi avantajlarını kuruluş
          aşamasında planlamak önemlidir.
        </p>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Ukrayna&apos;da TOV tescili, Adalet Bakanlığı&apos;na bağlı devlet
          kayıt sistemi üzerinden noterler aracılığıyla veya doğrudan
          online olarak yürütülür. Belgeler eksiksiz olduğunda ve otomatik
          doğrulama şartları sağlandığında tescil dakikalar içinde
          sonuçlanabilir; aksi halde süreç devlet sicil memuru üzerinden 1
          iş günü içinde tamamlanır.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Unvan Rezervasyonu & Belge Hazırlığı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Tüzük & Vekâletname</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Devlet Sicilinde Tescil Başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Vergi Numarası, Mühür ve Banka Hesabı</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Ticari Unvan Rezervasyonu ve Belge Hazırlığı
          </h3>
          <p className="leading-8 text-gray-700">
            Süreç, şirket unvanının kontrolü ile başlar. Yabancı ortak
            gerçek kişiyse pasaportun Ukraynaca noter onaylı tercümesi ve
            Ukrayna vergi kimlik numarası (reyestratsiynyi nomer) alınması
            gerekir; tüzel kişiyse ticaret sicil kaydı örneği ve kuruluş
            belgeleri hazırlanır. Türkiye&apos;de düzenlenen belgelerin
            apostil ile tasdik edilmesi ve Ukraynaca yeminli tercümesinin
            yapılması zorunludur.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Tüzük (Statut) ve Vekâletnamenin Düzenlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketin ana sözleşmesi (statut), kurucular kararı ve
            gerçek yararlanıcı (UBO) beyanı hazırlanır. Yabancı ortağın
            Ukrayna&apos;da fiziken bulunması zorunlu değildir; noter onaylı
            ve apostilli vekâletname ile süreç Türkiye&apos;den yürütülebilir.
            Belgeler önceden hazırlanıp iletildiğinde, noter huzurunda imza
            aşaması yaklaşık 20 dakika içinde tamamlanabilir.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Devlet Sicilinde Tescil Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Belgeler, devlet kayıt memuru veya bu yetkiye sahip noter
            aracılığıyla elektronik tescil sistemine yüklenir. Otomatik
            doğrulama şartları sağlandığında onay dakikalar içinde
            gelebilir; ek inceleme gerektiren başvurularda veya çok ortaklı
            yapılarda süreç birkaç iş gününe kadar uzayabilir.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Vergi Numarası, Mühür, Banka Hesabı ve Yönetici İstisnası
          </h3>
          <p className="leading-8 text-gray-700 mb-6">
            Tescil tamamlandıktan sonra şirketin vergi numarası otomatik
            oluşturulur, mühür hazırlanır ve kurumsal banka hesabı açılışı
            başlatılır; bankalar standart şartlarda hesabı 1-3 iş günü
            içinde açabilmektedir.
          </p>
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
            <h4 className="mb-4 text-xl font-bold text-yellow-800">
              ⚠️ Ukrayna&apos;ya Özgü Kritik Detay: Yabancı Müdür ve Çalışma İzni
            </h4>
            <p className="leading-8 text-gray-700">
              Diğer ülkelerdeki yapılanmalardan farklı olarak, bir yabancı
              vatandaşın Ukrayna&apos;da kurulu bir şirketin resmi müdürü
              (direktörü) olarak atanabilmesi için ilke olarak çalışma izni
              gereklidir. Uygulamada, kuruluş aşamasında geçici olarak
              mukim bir müdür atanması ve yabancı ortağın çalışma izni
              sürecini paralel yürütmesi ya da vekâletname ile yetkilendirme
              yoluna gidilmesi yaygın bir çözümdür. Bu yapı, şirketin
              hukuki temsilinde aksama yaşanmaması için kuruluş öncesinde
              netleştirilmesi gereken bir konudur.
            </p>
          </div>
        </div>
      </section>

      {/* 5. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi ve Oranlar (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ukrayna&apos;nın vergi sistemi, standart rejim ile küçük ve orta
          ölçekli işletmelere yönelik basitleştirilmiş &quot;tek vergi&quot;
          (єдиний податок) rejimi arasında seçim imkânı sunuyor.
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
                <td className="p-5">%18 (standart)</td>
                <td className="p-5">
                  Bankalar için %50, sigorta dışı finansal hizmet
                  sağlayıcıları için %25 oranı uygulanır
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV</td>
                <td className="p-5">%20</td>
                <td className="p-5">
                  Standart oran; belirli ilaç ve sağlık ürünlerinde %14,
                  bazı tarım/gıda kalemlerinde %7 indirimli oran uygulanır
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tek Vergi (Grup 3 - Tüzel Kişi)</td>
                <td className="p-5">%3 (KDV mükellefiyse) / %5 (değilse)</td>
                <td className="p-5">
                  Yıllık cirosu yaklaşık 10,09 milyon UAH&apos;yi (2026)
                  aşmayan işletmeler için ihtiyari basitleştirilmiş rejim
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Diia City Çıkış Sermayesi Vergisi</td>
                <td className="p-5">%9</td>
                <td className="p-5">
                  Rezident teknoloji şirketleri için standart kurumlar
                  vergisine alternatif; kâr dağıtımı gibi belirli işlemlerde
                  uygulanır
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Türkiye ile Ukrayna arasında 1996&apos;dan bu yana yürürlükte
            olan ve 2017&apos;de imzalanan protokolle güncellenen Çifte
            Vergilendirmeyi Önleme Anlaşması kapsamında, Ukrayna&apos;da
            ödenen verginin Türkiye&apos;deki beyan üzerinden mahsubu mümkün
            olabilir. Güncel oranlar için{" "}
            <a
              href="https://mof.gov.ua/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Ukrayna Maliye Bakanlığı
            </a>{" "}
            resmi kaynağının kontrol edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* 6. BANKA HESABI VE VİZE */}
      <section id="banka-vize" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Banka Hesabı, Vize ve Güncel Kambiyo/Güvenlik Durumu
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket kuruluşu görece hızlı ilerlese de, devam eden sıkıyönetim
          koşulları banka işlemleri ve kâr transferi planlamasını diğer
          ülkelere kıyasla daha dikkatli yönetilmesi gereken bir sürece
          dönüştürüyor.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Banka Hesabı Açma Sürecinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Ukrayna bankaları standart şartlarda kurumsal hesabı 1-3 iş
              günü içinde açabiliyor; ancak sıkıyönetim döneminde
              uygulanan güçlendirilmiş KYC/AML (müşterini tanı / kara para
              aklamayı önleme) kontrolleri süreci uzatabilir.
            </li>
            <li>
              Gerçek yararlanıcının (UBO) şeffaf beyanı ve net faaliyet
              tanımı, başvurunun hızlı onaylanma ihtimalini artırır.
            </li>
            <li>
              Ulusal Banka (NBU), Şubat 2022&apos;den bu yana uygulanan
              kambiyo kısıtlamalarını 14 Ocak 2026&apos;dan itibaren daha
              risk odaklı ve kademeli bir çerçeveyle gevşetmeye devam
              ediyor; Nisan 2026&apos;da alınan ek kararlarla piyasa
              katılımcıları lehine yeni düzenlemeler yürürlüğe girdi.
            </li>
            <li>
              Kâr payı (temettü) transferinde, 1 Ocak 2023 sonrası
              döneme ait kazançlar için ihraççı başına aylık 1 milyon Euro
              sınırı ve ilgili vergilerin ödenmiş olması şartı gibi
              koşullar uygulanabiliyor; bu limitler ve şartlar dönemsel
              olarak güncellenebildiğinden işlem öncesi teyit edilmelidir.
            </li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🛂 Vize ve Güncel Güvenlik Durumu
          </h3>
          <p className="leading-8 text-gray-700">
            Türk vatandaşları, 180 günlük dönem içinde 90 günü aşmamak
            kaydıyla Ukrayna&apos;ya vizesiz seyahat edebilir; bu süre
            kuruluş sürecinin ilk aşamalarını ve banka görüşmelerini
            planlamak için genellikle yeterlidir. Ancak devam eden savaş
            koşulları nedeniyle seyahat öncesinde Türkiye Dışişleri
            Bakanlığı&apos;nın güncel seyahat uyarılarının ve bölgesel
            güvenlik durumunun mutlaka kontrol edilmesi gerekir. Ukrayna
            vatandaşı erkeklere uygulanan seferberlik kapsamındaki yurt
            dışına çıkış kısıtlamaları, yabancı yatırımcı ve temsilcileri
            doğrudan kapsamaz; ancak bu durum, yerel kadroda çalışacak
            Ukraynalı personel planlamasında dikkate alınmalıdır.
          </p>
        </div>
      </section>

      {/* 7. TÜRKİYE TARAFINDAKİ YÜKÜMLÜLÜKLER */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ukrayna&apos;da şirket kurmak, Türkiye tarafında da bazı bildirim
          yükümlülüklerini beraberinde getirir; buna karşılık Ticaret
          Bakanlığı&apos;nın sunduğu destek kalemlerinden de yararlanmak
          mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Ukrayna&apos;da şirket kuruluş sürecinizi doğru şirket türü
            seçiminden tescile, yönetici atamasından banka hesabı
            açılışına kadar baştan sona biz yürütüyoruz. Kuruluş
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
            Ukrayna&apos;da şirket kurmak veya mevcut bir şirkete ortak
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
              Ukrayna&apos;da açılan ofis, depo, showroom veya mağaza
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
          Bu destek ve bildirim yükümlülükleri, hedef ülke Ukrayna olsa da
          genel çerçevesi diğer ülkelerdeki yapılanmalarla aynıdır. Konunun
          tamamına ve güncel destek oranlarına{" "}
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
          </Link>
          ,{" "}
          <Link
            href="/blog/azerbaycanda-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            Azerbaycan
          </Link>{" "}
          ve{" "}
          <Link
            href="/blog/ozbekistanda-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            Özbekistan
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
        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-red-700">
            🔴 Savaş Dönemine Özgü Riskler
          </h3>
          <p className="leading-8 text-gray-700">
            Ukrayna&apos;da yapılanma kararı, standart ticari
            değerlendirmelerin ötesinde güncel güvenlik durumunun takip
            edilmesini gerektirir: enerji altyapısına yönelik saldırılar
            nedeniyle bölgesel elektrik kesintileri yaşanabilir, kambiyo ve
            kâr transferi kuralları dönemsel olarak değişebilir, sigorta
            maliyetleri yükselebilir ve mevzuat sıkıyönetim koşullarına
            bağlı olarak hızla güncellenebilir. Bu nedenle yatırım kararı
            öncesinde güncel resmi kaynaklardan teyit alınması ve sürecin
            profesyonel destekle takip edilmesi önemle tavsiye edilir.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Belgelerin apostil ve Ukraynaca tercüme sürecini önceden planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yabancı müdür/çalışma izni konusunu kuruluş öncesinde netleştirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Güncel kambiyo kısıtlamalarını ve kâr transferi limitlerini bankanızla teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında mahsup imkânını mali müşavirle teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Diia City rejimine uygunluğu, teknoloji faaliyeti planlıyorsanız değerlendirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Seyahat öncesinde güncel güvenlik uyarılarını mutlaka kontrol edin
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
              Savaş koşulları nedeniyle Ukrayna&apos;da şirket kurmak güvenli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Ukrayna&apos;da şirket kuruluşu hukuken mümkün ve devlet
              sistemi işlevini sürdürüyor; ancak bölgesel güvenlik durumu,
              altyapı riskleri ve mevzuat dönemsel olarak değişebiliyor.
              Yatırım kararı öncesinde güncel resmi kaynaklardan ve
              profesyonel danışmanlıktan teyit almak, riskleri
              yönetilebilir seviyede tutmanın en doğru yoludur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ukrayna&apos;da şirket kurmak için ülkede bulunmak gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Kuruluş başvurusu noter onaylı, apostilli vekâletname
              ile Türkiye&apos;den yürütülebilir ve tescil büyük ölçüde
              elektronik sistem üzerinden tamamlanır. Ancak kurumsal banka
              hesabı açılışı için bazı bankalar yetkili imza sahibinin
              fiziken bulunmasını talep edebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yabancı bir kişi Ukrayna şirketinin müdürü olabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Yabancı bir kişinin resmi müdür olarak atanabilmesi için
              ilke olarak çalışma izni gereklidir. Uygulamada geçici olarak
              mukim bir müdür ataması veya vekâletname ile yetkilendirme
              yaygın çözüm yollarıdır; bu konu kuruluş öncesinde
              netleştirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TOV kurmak için asgari sermaye şartı var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 2018 tarihli kanun ile TOV kuruluşunda yasal asgari
              sermaye şartı kaldırıldı; kayıtlı sermaye sembolik bir
              tutarda belirlenebilir. Bankacılık, sigortacılık gibi
              düzenlemeye tabi sektörlerde ise ilgili otoritenin belirlediği
              çok daha yüksek sermaye eşikleri uygulanır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ukrayna&apos;da şirketin %100&apos;ü yabancıya ait olabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Ukrayna mevzuatı yabancı gerçek veya tüzel kişilerin
              TOV&apos;un tamamına sahip olmasına izin verir; yerli ortak
              zorunluluğu bulunmaz. Rusya ve bazı durumlarda Belarus ile
              bağlantılı kişilere yönelik yaptırım kapsamındaki kısıtlamalar
              ise ayrı bir değerlendirme konusudur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Belgeler eksiksiz olduğunda ve otomatik doğrulama şartları
              sağlandığında TOV tescili dakikalar içinde tamamlanabilir;
              ek inceleme gerektiren veya çok ortaklı yapılarda süreç
              birkaç iş gününe uzayabilir. Banka hesabı açılışı dahil
              edildiğinde toplam süreç 1-2 haftaya kadar çıkabilir.
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
          Ukrayna, sermaye şartı aranmayan TOV yapısı, Temmuz 2026&apos;da
          onaylanan Türkiye-Ukrayna Serbest Ticaret Anlaşması&apos;nın
          getirdiği pazar erişimi ve teknoloji şirketlerine özel Diia City
          rejimiyle dikkat çeken bir yapılanma alternatifi sunuyor. Ancak
          devam eden savaş koşulları, bu kararı diğer ülkelerden farklı
          olarak güncel güvenlik takibi ve dikkatli risk yönetimi
          gerektiren bir sürece dönüştürüyor. Doğru şirket türünün
          seçilmesi, yabancı müdür/çalışma izni konusunun netleştirilmesi,
          güncel kambiyo kurallarının teyit edilmesi ve Türkiye
          tarafındaki yükümlülüklerin eksiksiz yönetilmesi için
          profesyonel destek almak, sürecin hatasız ilerlemesini sağlar.
        </p>
      </section>
    </BlogLayout>
  );
}
