import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Şahıs Şirketi mi, Limited Şirket mi Yoksa Anonim Şirket mi? Girişimciler İçin Bu Denklem Nasıl Çözülür? | Koray Akdağ",
  description:
    "Şahıs şirketi, limited şirket ve anonim şirket arasındaki kuruluş maliyeti, sorumluluk, vergi, asgari sermaye ve yönetim farkları, 2026 güncel rakamlarla karşılaştırmalı olarak anlatılıyor.",
  keywords: [
    "şahıs şirketi mi limited şirket mi",
    "limited şirket anonim şirket farkı",
    "şirket türü seçimi",
    "şahıs şirketinden limited şirkete geçiş",
    "anonim şirket avantajları",
    "limited şirket kuruluş maliyeti 2026",
    "kurumlar vergisi oranı 2026",
    "asgari sermaye limited anonim",
    "nevi değişikliği",
    "girişimci hangi şirket türünü kurmalı",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Şahıs Şirketi mi, Limited Şirket mi Yoksa Anonim Şirket mi? Girişimciler İçin Bu Denklem Nasıl Çözülür?"
      description="Kuruluş maliyeti, sorumluluk, vergi yükü, asgari sermaye ve büyüme potansiyeli açısından şahıs şirketi, limited şirket ve anonim şirket arasındaki farkları 2026 güncel rakamlarla karşılaştırıyor, girişimci profilinize uygun türü seçmenize yardımcı oluyoruz."
      category="ŞİRKET KURULUŞU • GİRİŞİMCİLİK • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="sahis-limited-anonim-sirket-karsilastirma"
      coverImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* GİRİŞ */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yeni bir iş kurarken sorulan ilk soru genellikle &quot;hangi ürünü
          satacağım&quot; ya da &quot;hangi pazara gireceğim&quot; değil,
          &quot;hangi şirket türüyle başlamalıyım&quot; sorusudur. Şahıs
          şirketi, limited şirket ve anonim şirket arasındaki fark yalnızca
          kağıt üzerinde bir isim değişikliği değildir; kuruluş maliyetinizi,
          vergi yükünüzü, kişisel sorumluluğunuzu ve şirketinizin ileride
          yatırım alıp alamayacağını doğrudan belirler.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Üç şirket türünün yasal çerçevesi ve temel farkları</li>
          <li>✔ 2026 güncel kuruluş maliyeti ve süre karşılaştırması</li>
          <li>✔ Sınırsız ve sınırlı sorumluluk arasındaki kritik fark</li>
          <li>✔ Gelir vergisi ve kurumlar vergisi karşılaştırması</li>
          <li>✔ 2026 asgari sermaye şartları ve uyum zorunluluğu</li>
          <li>✔ Girişimci profiline göre karar tablosu</li>
          <li>✔ Şirket türü sonradan değiştirilebilir mi?</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a href="#tanimlar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            1. Şahıs, Limited ve Anonim Şirket Nedir?
          </a>
          <a href="#maliyet-sure" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            2. Kuruluş Maliyeti ve Süresi
          </a>
          <a href="#sorumluluk" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            3. Sorumluluk Farkı: Neden Kritik?
          </a>
          <a href="#vergi" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            4. Vergi Farkları
          </a>
          <a href="#sermaye" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            5. Asgari Sermaye Şartları (2026)
          </a>
          <a href="#ortaklik" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            6. Ortak Sayısı, Yönetim ve Pay Devri
          </a>
          <a href="#itibar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            7. Kurumsal İtibar ve Büyüme Potansiyeli
          </a>
          <a href="#karar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            8. Hangi Girişimci İçin Hangi Tür?
          </a>
          <a href="#nevi-degisikligi" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            9. Şirket Türünü Sonradan Değiştirmek
          </a>
          <a href="#sss" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </a>
          <a href="#sonuc" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            11. Sonuç
          </a>
        </div>
      </div>

      {/* 1 */}
      <section id="tanimlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Şahıs, Limited ve Anonim Şirket Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9">
          Türk hukukunda ticari faaliyet üç ana yapı üzerinden yürütülür.
          Şahıs şirketi Türk Ticaret Kanunu (TTK) ve Gelir Vergisi Kanunu
          kapsamında tek bir gerçek kişi adına kurulan işletmedir; tüzel
          kişiliği yoktur ve işletme sahibiyle hukuken bütünleşiktir. Limited
          ve anonim şirket ise TTK&apos;nın sermaye şirketleri başlığı
          altında düzenlenen, kendine ait tüzel kişiliği bulunan yapılardır.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Şahıs Şirketi
            </h3>
            <p className="leading-7 text-gray-700">
              Tek bir gerçek kişi tarafından kurulur, tüzel kişiliği yoktur.
              İşletme sahibi ile işletme hukuken aynı kişidir; borç ve
              alacaklar doğrudan şahsa aittir.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Limited Şirket
            </h3>
            <p className="leading-7 text-gray-700">
              1-50 ortakla kurulabilen sermaye şirketidir. Ortakların
              sorumluluğu, taahhüt ettikleri sermaye payıyla sınırlıdır.
            </p>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Anonim Şirket
            </h3>
            <p className="leading-7 text-gray-700">
              Sermayesi paylara bölünmüş, en az 1 ortakla kurulabilen ve
              ortak sayısı yasal olarak sınırlandırılmamış sermaye
              şirketidir.
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg leading-9">
          Uygulamada en sık kurulan sermaye şirketi türü limited şirkettir;
          büyüme, yatırım alma veya halka açılma planı olan girişimler ise
          genellikle anonim şirket yapısını tercih eder ya da zamanla bu
          yapıya geçiş yapar.
        </p>
      </section>

      {/* 2 */}
      <section id="maliyet-sure" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kuruluş Maliyeti ve Süresi Karşılaştırması
        </h2>
        <p className="mb-8 text-lg leading-9">
          Kuruluş maliyeti girişimciler için genellikle ilk belirleyici
          kriterdir. 2026 itibarıyla üç şirket türü arasındaki maliyet farkı
          oldukça belirgindir.
        </p>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Kriter</th>
                <th className="p-4 text-left">Şahıs Şirketi</th>
                <th className="p-4 text-left">Limited Şirket</th>
                <th className="p-4 text-left">Anonim Şirket</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Kuruluş Maliyeti</td>
                <td className="p-4">~8.000 - 13.500 TL</td>
                <td className="p-4">~24.000 - 32.000 TL</td>
                <td className="p-4">~33.000 - 42.000 TL</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Sermaye Blokajı</td>
                <td className="p-4">Yok</td>
                <td className="p-4">Yok</td>
                <td className="p-4">Sermayenin 1/4&apos;ü bankada bloke</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Kuruluş Süresi</td>
                <td className="p-4">1-3 iş günü</td>
                <td className="p-4">3-7 iş günü</td>
                <td className="p-4">5-10 iş günü</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold">Defter/Beyan Yükü</td>
                <td className="p-4">Görece düşük</td>
                <td className="p-4">Orta - yüksek</td>
                <td className="p-4">Yüksek</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Rakamlar il, ticaret odası ve tercih edilen mali müşavirlik
          hizmetine göre değişebilen ortalama tutarlardır; kesin maliyet için
          bizimle iletişime geçebilirsiniz.
        </p>

        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Anonim Şirkette Sermaye Blokajı Ne Demek?
          </h3>
          <p className="leading-8 text-gray-700">
            Anonim şirket kuruluşunda, taahhüt edilen nakdi sermayenin en az
            dörtte birinin tescilden önce bir bankaya yatırılıp bloke
            edilmesi zorunludur. Limited şirkette böyle bir peşin ödeme
            şartı yoktur; sermaye taahhüdü genellikle kuruluştan sonraki 24
            ay içinde şirkete aktarılabilir.
          </p>
        </div>
      </section>

      {/* 3 */}
      <section id="sorumluluk" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Sorumluluk Farkı: Neden Kritik Bir Karar Kriteri?
        </h2>
        <p className="mb-8 text-lg leading-9">
          Şirket türü seçiminde en çok göz ardı edilen, ancak en yüksek risk
          taşıyan konu sorumluluk rejimidir. İşiniz büyüdükçe ya da borç
          yükümlülüğü artan bir sektörde faaliyet gösterdikçe bu fark
          giderek daha fazla önem kazanır.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-red-700">
              Şahıs Şirketi: Sınırsız Sorumluluk
            </h3>
            <p className="leading-8 text-gray-700">
              Şahıs şirketinde işletme ile işletme sahibi hukuken aynı
              kişidir. İşletmenin borçları için girişimcinin tüm kişisel mal
              varlığı (ev, araç, banka hesapları dahil) sorumluluk
              kapsamındadır. İş riski düşükse bu durum yönetilebilir; ancak
              tedarikçi, kredi veya sözleşme riski yüksek işlerde önemli bir
              dezavantaja dönüşebilir.
            </p>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-green-700">
              Limited/Anonim: Sınırlı Sorumluluk
            </h3>
            <p className="leading-8 text-gray-700">
              Limited ve anonim şirkette ortakların sorumluluğu, esas
              itibarıyla şirkete taahhüt ettikleri sermaye payıyla
              sınırlıdır. Şirketin ticari borçları için ortağın kişisel mal
              varlığına genel kural olarak başvurulamaz. (İstisna: limited
              şirket ortakları, şirketten tahsil edilemeyen kamu borçlarından
              -vergi, SGK primi gibi- sermaye payları oranında hâlâ sorumlu
              tutulabilir.)
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Vergi Farkları: Gelir Vergisi mi, Kurumlar Vergisi mi?
        </h2>
        <p className="mb-8 text-lg leading-9">
          Vergi yükü, kâr marjınıza ve büyüme hızınıza göre şirket türleri
          arasında ciddi farklılık gösterir. 2026 itibarıyla geçerli temel
          oranlar şöyledir:
        </p>

        <div className="space-y-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Şahıs Şirketi: Artan Oranlı Gelir Vergisi
            </h3>
            <p className="leading-8 text-gray-700">
              Şahıs şirketi kârı, işletme sahibinin ticari kazancı olarak
              Gelir Vergisi Kanunu&apos;na göre %15 ile %40 arasında değişen
              dilimli tarife üzerinden vergilendirilir. 2026 yılı için
              ücret dışı (ticari) kazançlarda ilk dilim sınırı 190.000 TL,
              son dilim eşiği ise 5.300.000 TL&apos;dir. Vergi tek aşamada
              alınır; ayrıca bir kâr payı stopajı yoktur.
            </p>
            <p className="mt-5 leading-8 text-gray-700">
              18-29 yaş arasında, ilk kez mükellefiyet tesis eden genç
              girişimciler için 2026&apos;da 400.000 TL&apos;lik kazanç,
              3 vergilendirme dönemi boyunca gelir vergisinden istisnadır.
              Bu istisna yalnızca gelir vergisini kapsar; KDV ve diğer
              yükümlülükleri etkilemez.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Limited/Anonim: İki Aşamalı Vergilendirme
            </h3>
            <p className="leading-8 text-gray-700">
              Limited ve anonim şirketlerde kâr önce şirket düzeyinde
              %25 kurumlar vergisine tabidir (bankacılık ve finans kuruluşları
              için %30, ihracat kazançlarında 5 puanlık indirimle %20).
              Kâr ortaklara dağıtıldığında ise ikinci aşamada, 22 Aralık 2024
              tarihli Cumhurbaşkanı Kararı ile %10&apos;dan %15&apos;e
              yükseltilen kâr payı stopajı devreye girer.
            </p>
            <p className="mt-5 leading-8 text-gray-700">
              Kârını şirkette bırakıp yeniden yatırıma yönlendiren, dağıtım
              yapmayan şirketler için bu ikinci aşama gündeme gelmez; bu
              nedenle büyümeyi önceliklendiren girişimler için sabit %25
              oranı, yüksek kârlarda dilimli gelir vergisi tarifesine göre
              avantajlı olabilir.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              KDV Açısından Fark Var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              KDV yükümlülüğü şirket türünden bağımsızdır; her üç yapı da
              genel oran olan %20 (bazı mal ve hizmetlerde %1 veya %10)
              üzerinden KDV mükellefidir. Şirket türü, KDV oranını değil
              yalnızca kazancın hangi vergi rejimine tabi olacağını
              belirler.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Vergi Kalemi</th>
                <th className="p-4 text-left">Şahıs Şirketi</th>
                <th className="p-4 text-left">Limited / Anonim</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Kazanç Üzerinden</td>
                <td className="p-4">Gelir Vergisi (%15 - %40)</td>
                <td className="p-4">Kurumlar Vergisi (%25)</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Kâr Dağıtımı</td>
                <td className="p-4">Ek stopaj yok</td>
                <td className="p-4">%15 kâr payı stopajı</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold">KDV</td>
                <td className="p-4">%20 (genel oran)</td>
                <td className="p-4">%20 (genel oran)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5 */}
      <section id="sermaye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Asgari Sermaye Şartları (2026 Güncel)
        </h2>
        <p className="mb-8 text-lg leading-9">
          Şahıs şirketi için yasal bir asgari sermaye şartı bulunmuyor.
          Sermaye şirketlerinde ise TTK ve Cumhurbaşkanı Kararı ile
          belirlenen tutarlar geçerlidir.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-gray-50 p-6 text-center">
            <p className="text-sm font-semibold text-gray-500">
              Şahıs Şirketi
            </p>
            <p className="mt-2 text-3xl font-extrabold text-[#071A2F]">
              Asgari Sermaye Yok
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
            <p className="text-sm font-semibold text-blue-700">
              Limited Şirket
            </p>
            <p className="mt-2 text-3xl font-extrabold text-[#071A2F]">
              50.000 TL
            </p>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 text-center">
            <p className="text-sm font-semibold text-orange-700">
              Anonim Şirket
            </p>
            <p className="mt-2 text-3xl font-extrabold text-[#071A2F]">
              250.000 TL
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Kayıtlı sermaye sistemini benimseyen halka açık olmayan anonim
          şirketlerde başlangıç sermayesi 500.000 TL&apos;dir.
        </p>

        <div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ 31 Aralık 2026 Uyum Zorunluluğu
          </h3>
          <p className="leading-8 text-gray-700">
            Bu tutarlar 1 Ocak 2024&apos;ten sonra kurulan şirketler için
            zaten geçerli. Bu tarihten önce kurulmuş olup sermayesi bu
            tutarların altında kalan mevcut limited ve anonim şirketlerin,
            <strong> 31 Aralık 2026&apos;ya kadar</strong> sermayelerini
            yasal asgari tutara yükseltmesi gerekiyor; aksi halde şirket
            kanunen infisah etmiş (sona ermiş) sayılıyor. Yeni şirket
            kuruluşunda bu konu netse de, mevcut bir şirketi devralacak veya
            eski tarihli bir şirketle çalışacak girişimcilerin bu tarihi
            mutlaka gündeminde tutması gerekir.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section id="ortaklik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Ortak Sayısı, Yönetim Yapısı ve Pay Devri
        </h2>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Kriter</th>
                <th className="p-4 text-left">Şahıs Şirketi</th>
                <th className="p-4 text-left">Limited Şirket</th>
                <th className="p-4 text-left">Anonim Şirket</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Ortak Sayısı</td>
                <td className="p-4">Tek kişi</td>
                <td className="p-4">1 - 50 ortak</td>
                <td className="p-4">1 - sınırsız ortak</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Yönetim</td>
                <td className="p-4">İşletme sahibi</td>
                <td className="p-4">Müdür(ler)</td>
                <td className="p-4">Yönetim kurulu</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold">Pay Devri</td>
                <td className="p-4">Devredilemez, işletme kapanır</td>
                <td className="p-4">Noter onayı + tescil + ilan gerekir</td>
                <td className="p-4">Pay defteri kaydıyla, genelde daha basit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-lg leading-9">
          Limited şirkette bir ortağın payını devretmesi noter onaylı devir
          sözleşmesi, genel kurul onayı, tescil ve ilan aşamalarını
          gerektirir; bu da maliyet ve zaman anlamına gelir. Anonim şirkette
          ise -özellikle hamiline yazılı pay senedi çıkarılmışsa- pay
          devri çok daha hızlı ve düşük maliyetli şekilde gerçekleşebilir.
          Bu fark, yatırımcı almayı veya hisse devrini sık yapmayı planlayan
          girişimler için önemli bir ayrım noktasıdır.
        </p>
      </section>

      {/* 7 */}
      <section id="itibar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kurumsal İtibar ve Büyüme Potansiyeli
        </h2>
        <p className="mb-8 text-lg leading-9">
          Şirket türü seçimi sadece bugünkü maliyeti değil, şirketin
          ilerideki büyüme rotasını da etkiler. Kurumsal müşteriler,
          bankalar ve yatırımcılar şirket türüne göre farklı bir güven
          algısıyla yaklaşır.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-gray-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Şahıs Şirketi
            </h3>
            <p className="leading-7 text-gray-700">
              Düşük bürokrasiyle hızlı başlangıç sağlar; ancak kurumsal
              müşteri ve ihale süreçlerinde bazen sermaye şirketi kadar
              güven telkin etmeyebilir. Dış yatırım almak neredeyse mümkün
              değildir.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Limited Şirket
            </h3>
            <p className="leading-7 text-gray-700">
              Kurumsal görünürlük ile makul maliyet arasında denge kurar.
              Melek yatırımcı ve az sayıda ortaklı yapılar için uygundur;
              çok sayıda yatırımcıyla büyük turlar için ideal değildir.
            </p>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Anonim Şirket
            </h3>
            <p className="leading-7 text-gray-700">
              Kurumsal yatırımcı, girişim sermayesi fonu ve halka arz
              süreçleri için en uygun yapıdır. Pay devrinin nispeten kolay
              olması, hisse bazlı teşvik (opsiyon) planlarına da imkân
              tanır.
            </p>
          </div>
        </div>
      </section>

      {/* 8 - KARAR TABLOSU */}
      <section id="karar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Hangi Girişimci Profili İçin Hangi Tür Uygun?
        </h2>
        <p className="mb-8 text-lg leading-9">
          Doğru karar; iş modelinizin ölçeğine, risk yapısına, kâr
          beklentinize ve büyüme planınıza göre değişir. Aşağıdaki karar
          şeması genel bir çerçeve sunar; kesin karar için işinizin
          detaylarının analiz edilmesi gerekir.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex w-fit rounded-full bg-gray-200 px-3 py-1 text-sm font-bold text-gray-700">
              ŞAHIS ŞİRKETİ
            </div>
            <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-gray-700 marker:text-orange-500">
              <li>Tek kişilik, küçük ölçekli işler</li>
              <li>Düşük başlangıç bütçesi</li>
              <li>Freelance / danışmanlık faaliyeti</li>
              <li>Dış yatırım/ortaklık planı olmayan işler</li>
              <li>Riski sınırlı, borç yükü düşük sektörler</li>
            </ul>
          </div>
          <div className="flex flex-col rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
            <div className="mb-4 inline-flex w-fit rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
              LİMİTED ŞİRKET
            </div>
            <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-gray-700 marker:text-blue-600">
              <li>2-10 arası ortaklı, orta ölçekli işler</li>
              <li>Sınırlı sorumluluk isteyen girişimciler</li>
              <li>Kurumsal müşteri/ihale ile çalışanlar</li>
              <li>Az sayıda melek yatırımcı alma planı</li>
              <li>Teknopark, e-ticaret, hizmet şirketleri</li>
            </ul>
          </div>
          <div className="flex flex-col rounded-2xl border border-orange-200 bg-orange-50 p-6 shadow-sm">
            <div className="mb-4 inline-flex w-fit rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
              ANONİM ŞİRKET
            </div>
            <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-gray-700 marker:text-orange-500">
              <li>Kurumsal/girişim sermayesi fonu alacaklar</li>
              <li>Halka açılma potansiyeli olanlar</li>
              <li>Çok ortaklı, karmaşık pay yapıları</li>
              <li>Hisse opsiyonuyla çalışan büyütecekler</li>
              <li>Yüksek ciro/kâr beklentisi olan şirketler</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            Basit Karar Akışı
          </h3>
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            <div className="flex-1 rounded-xl border bg-gray-50 p-4 text-center text-sm font-semibold">
              Yatırım/halka arz hedefi var mı?
            </div>
            <div className="text-center text-2xl text-orange-500 md:rotate-0">→</div>
            <div className="flex-1 rounded-xl border border-orange-200 bg-orange-50 p-4 text-center text-sm font-semibold">
              Evet: Anonim Şirket
            </div>
          </div>
          <div className="mt-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            <div className="flex-1 rounded-xl border bg-gray-50 p-4 text-center text-sm font-semibold">
              Sınırlı sorumluluk + orta ölçek mi?
            </div>
            <div className="text-center text-2xl text-blue-500 md:rotate-0">→</div>
            <div className="flex-1 rounded-xl border border-blue-200 bg-blue-50 p-4 text-center text-sm font-semibold">
              Evet: Limited Şirket
            </div>
          </div>
          <div className="mt-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            <div className="flex-1 rounded-xl border bg-gray-50 p-4 text-center text-sm font-semibold">
              Tek kişi, düşük risk, hızlı başlangıç mı?
            </div>
            <div className="text-center text-2xl text-gray-500 md:rotate-0">→</div>
            <div className="flex-1 rounded-xl border bg-gray-100 p-4 text-center text-sm font-semibold">
              Evet: Şahıs Şirketi
            </div>
          </div>
        </div>
      </section>

      {/* 9 */}
      <section id="nevi-degisikligi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Şirket Türünü Sonradan Değiştirmek Mümkün mü?
        </h2>
        <p className="mb-6 text-lg leading-9">
          Girişimcilerin çoğu ilk yıllarda düşük maliyetli bir yapıyla
          başlayıp işleri büyüdükçe sermaye şirketine geçmeyi tercih eder.
          Bu geçiş Türk hukukunda mümkündür ve &quot;nevi (tür) değişikliği&quot;
          olarak adlandırılır.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-green-700">
              Şahıstan Sermaye Şirketine Geçiş
            </h3>
            <p className="leading-8 text-gray-700">
              Ticaret Sicili Yönetmeliği ve TTK 182-193. maddeleri
              uyarınca, gerçek kişi ticari işletmeler tür değiştirerek
              limited veya anonim şirkete dönüşebilir. Bu süreçte tür
              değişikliği planı hazırlanır, MERSİS üzerinden başvuru
              yapılır, yeni şirket sözleşmesi tescil ve ilan edilir; SGK,
              vergi dairesi ve GİB nezdinde gerekli bildirimler yapılır.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Limitedden Anonime Geçiş
            </h3>
            <p className="leading-8 text-gray-700">
              Limited şirket de aynı tür değişikliği hükümleri çerçevesinde
              anonim şirkete dönüştürülebilir. Bu genellikle şirket
              yatırımcı almaya hazırlanırken, ortak sayısı arttığında veya
              halka arz planı gündeme geldiğinde tercih edilen bir adımdır.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Ne Zaman Gerekir?
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>Ciro ve kâr, gelir vergisi tarifesinde yüksek dilime girmeye başladığında</li>
            <li>Kurumsal müşteri/ihale şartları sermaye şirketi istediğinde</li>
            <li>Melek yatırımcı, girişim sermayesi fonu veya kurumsal ortak alınacağında</li>
            <li>Sorumluluğu sermaye ile sınırlamak öncelik haline geldiğinde</li>
            <li>Halka arz veya kurumsallaşma planı netleştiğinde (genelde anonime geçiş)</li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Doğru Türü Seçmek de, Kuruluş da, Sonrası da Bizde
          </h3>
          <p className="leading-8 text-gray-700">
            Hangi şirket türünün sizin iş modelinize uygun olduğuna karar
            vermek, birçok girişimci için tahmin edilenden daha karmaşık bir
            süreçtir. Bu değerlendirmeyi, kuruluş sürecinin tamamını ve
            kuruluş sonrasındaki muhasebe, beyanname ve raporlama
            hizmetlerinizi ayrı bir yerel firma aramanıza gerek kalmadan
            baştan sona biz yürütüyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirket türü seçiminden itibaren sürecin tamamı için bizimle
              iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 10 SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-10 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              1. Yeni başlayan bir girişimci için hangi şirket türü daha
              mantıklı?
            </h3>
            <p className="leading-8">
              Tek kişilik, düşük riskli ve sermaye ihtiyacı sınırlı işler
              için şahıs şirketi hızlı ve düşük maliyetli bir başlangıç
              sunar. Birden fazla ortak, sınırlı sorumluluk veya kurumsal
              müşteri beklentisi varsa limited şirket genellikle daha
              dengeli bir seçimdir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              2. Limited şirket ortakları hiçbir borçtan sorumlu değil mi?
            </h3>
            <p className="leading-8">
              Ticari borçlarda sorumluluk esas olarak sermaye payıyla
              sınırlıdır. Ancak şirketten tahsil edilemeyen vergi ve SGK
              prim borçlarında, kanuni temsilciler ve ortaklar belirli
              şartlarda sermaye payları oranında sorumlu tutulabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              3. Anonim şirket kurmak için neden 250.000 TL sermaye
              gerekiyor?
            </h3>
            <p className="leading-8">
              Bu tutar, 1 Ocak 2024&apos;ten itibaren TTK çerçevesinde
              Cumhurbaşkanı Kararı ile belirlenen asgari sermaye şartıdır.
              Sermayenin tamamının nakit olarak hazır bulundurulması
              gerekmez; ancak en az dörtte birinin tescilden önce bankaya
              yatırılıp bloke edilmesi zorunludur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              4. Şahıs şirketimi limited şirkete çevirmem ne zaman mantıklı
              olur?
            </h3>
            <p className="leading-8">
              Kazancınız gelir vergisi tarifesinde yüksek dilimlere
              yaklaştığında, kurumsal müşteri/ihale süreçleri sermaye
              şirketi istediğinde veya sorumluluğunuzu sınırlamak
              öncelik haline geldiğinde nevi değişikliğini
              değerlendirmenizi öneririz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5. Yatırımcı almayı planlıyorsam hangi türü kurmalıyım?
            </h3>
            <p className="leading-8">
              Kurumsal yatırımcı, melek yatırımcı ağı veya girişim sermayesi
              fonlarıyla çalışmayı planlayan girişimler için anonim şirket
              yapısı, pay devrinin görece kolay olması nedeniyle genellikle
              daha uygundur. Erken aşamada limited şirketle başlayıp
              yatırım öncesinde anonime dönüşmek de sık kullanılan bir
              yoldur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              6. Kâr payı stopajı hangi şirket türlerinde uygulanır?
            </h3>
            <p className="leading-8">
              Kâr payı stopajı yalnızca limited ve anonim gibi kurumlar
              vergisi mükellefi sermaye şirketlerinde, ortaklara kâr
              dağıtımı yapıldığında uygulanır. 2026 itibarıyla bu oran
              %15&apos;tir. Şahıs şirketinde ayrı bir kâr dağıtım stopajı
              yoktur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              7. Genç girişimci istisnası hangi şirket türünde geçerli?
            </h3>
            <p className="leading-8">
              Genç girişimci kazanç istisnası, gerçek usulde gelir vergisi
              mükellefiyeti açan şahıs şirketleri için geçerlidir; limited
              veya anonim şirket ortaklığı bu istisna kapsamına girmez.
            </p>
          </div>
        </div>
      </section>

      {/* 11 SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç: Doğru Denklem Nasıl Çözülür?
        </h2>
        <p className="mb-6 text-lg leading-9">
          Şahıs şirketi, limited şirket ve anonim şirket arasında
          &quot;en iyi&quot; tek bir seçenek yoktur; en doğru seçenek vardır.
          Bu seçim iş modelinizin ölçeğine, risk toleransınıza, kâr
          beklentinize ve yatırım/büyüme planlarınıza göre şekillenir.
        </p>
        <p className="mb-6 text-lg leading-9">
          Düşük riskli, tek kişilik ve hızlı başlangıç gerektiren işler
          şahıs şirketiyle; sınırlı sorumluluk isteyen orta ölçekli
          girişimler limited şirketle; yatırımcı çekmeyi ve büyük ölçekte
          büyümeyi hedefleyen şirketler ise anonim şirketle daha uyumlu bir
          yapıya kavuşur.
        </p>
        <p className="mb-10 text-lg leading-9">
          Bu kararı verirken kuruluş maliyetini, vergi yükünü, sorumluluk
          rejimini ve gelecekteki büyüme planınızı birlikte değerlendirmek
          gerekir. İhtiyacınıza uygun şirket türünün belirlenmesinden
          kuruluş sürecine, kuruluş sonrasındaki muhasebe ve raporlama
          yükümlülüklerinize kadar tüm süreçte yanınızdayız.
        </p>
      </section>
    </BlogLayout>
  );
}
