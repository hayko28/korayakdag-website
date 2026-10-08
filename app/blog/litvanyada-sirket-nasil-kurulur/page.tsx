import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Litvanya'da Şirket Nasıl Kurulur? UAB, MB, Vergi ve Süreç 2026 | Koray Akdağ",
  description:
    "Litvanya'da UAB ve MB kuruluşu, 1.000 euro asgari sermaye, %17 kurumlar vergisi, küçük işletme %0/%7 oranı, KDV, temettü stopajı, oturum izni ve banka hesabı için 2026 güncel rehber.",
  keywords: [
    "litvanyada şirket kurma",
    "litvanya uab şirket kuruluşu",
    "litvanya mb mažoji bendrija",
    "litvanya kurumlar vergisi 2026",
    "litvanya küçük işletme vergisi",
    "litvanya registrų centras",
    "litvanya gerçek faydalı sahip jangis",
    "2026 litvanya şirket kuruluşu",
  ],
  alternates: {
    canonical: "/blog/litvanyada-sirket-nasil-kurulur",
  },
};

const faqs = [
  {
    q: "Litvanya'da şirket kurmak için ülkede bulunmam veya oturum izni almam gerekir mi?",
    a: "Şirket kurmak için oturum izni gerekmez ve yabancı ortaklığa genel bir kısıtlama yoktur. Kuruluş, Registrų centras'ın elektronik sistemi (JAREP) ve noter doğrulaması üzerinden yürütülür; kimlik doğrulama yöntemi ortağın uyruğuna ve elektronik kimliğine göre değişir. Oturum izni yalnızca Litvanya'da yaşamak veya şirketi orada yönetmek istediğinizde gündeme gelir.",
  },
  {
    q: "Litvanya'da UAB için asgari sermaye ne kadardır?",
    a: "UAB (özel limited şirket) için asgari sermaye 1.000 euro'dur. Kaynaklar, tescilden önce sermayenin en az dörtte birinin (250 euro) yatırılması ve kalanın 12 ay içinde tamamlanması gerektiğini aktarır. Bu kuralı kuruluş öncesinde Registrų centras ve güncel Şirketler Kanunu üzerinden teyit etmenizi öneririz. MB (küçük ortaklık) için asgari sermaye şartı yoktur.",
  },
  {
    q: "Litvanya'da kurumlar vergisi oranı kaç, küçük şirketler için indirim var mı?",
    a: "1 Ocak 2026'dan itibaren standart kurumlar vergisi oranı %17'dir. Yıllık geliri 300.000 euro'yu aşmayan küçük şirketler belirli koşullarla %7 oranından yararlanır. Yeni kurulan küçük şirketler için ilk iki vergi döneminde %0 oranı uygulanır. Koşulların (faaliyet türü, ortaklık yapısı) VMI'dan şirketinize göre doğrulanması gerekir.",
  },
  {
    q: "Litvanya'da kâr dağıtmazsam vergi öder miyim? Estonya gibi mi çalışıyor?",
    a: "Hayır, Litvanya Estonya ve Letonya'dan farklı olarak klasik sistemi kullanır. Kurumlar vergisi kâr dağıtılmasa bile yıllık kâr üzerinden hesaplanır. Dağıtım yapıldığında ortağa ayrıca temettü vergisi söz konusu olur. Bu nedenle Litvanya'yı seçerken avantajı vergi ertelemesinde değil, düşük küçük işletme oranlarında aramak gerekir.",
  },
  {
    q: "Litvanya'dan Türkiye'ye temettü gönderirken stopaj kesilir mi?",
    a: "Litvanya'da yerleşik olmayanlara ödenen temettüde 2026'dan itibaren standart stopaj oranı %17 olarak aktarılmaktadır. Türkiye ile Litvanya arasındaki çifte vergilendirmeyi önleme anlaşması dikkate alındığında anlaşmanın 10. maddesi uyarınca kaynak devlette alınacak vergi brüt temettünün %10'unu aşamaz. Gerçek kişi ortak için hangi oranın uygulanacağı ortak yapıya göre ayrıca belirlenmelidir.",
  },
  {
    q: "Litvanya'da KDV'ye ne zaman kaydolmak gerekir?",
    a: "Litvanya'da yerleşik şirketler için KDV kaydı, 12 aylık vergilendirilebilir ciro 45.000 euro'yu aştığında zorunlu olur. Standart KDV oranı %21'dir, belirli mal ve hizmetlerde %12 ve %5 indirimli oranlar uygulanır. Bu eşik altında olsanız da AB içi iş yapacaksanız gönüllü KDV kaydı mantıklı olabilir.",
  },
  {
    q: "Litvanya'da şirket kurmak ne kadar sürer ve ne kadar tutar?",
    a: "Belgeler eksiksiz olduğunda Registrų centras'taki tescil genellikle 3 iş günü içinde sonuçlanır. Elektronik UAB kuruluşunda devlet harcı yaklaşık 30,83 euro olarak aktarılmaktadır. Noter, tercüme, adres ve danışmanlık bedelleri bu tutara dahil değildir. Banka hesabı açılışı sürece ayrıca eklenir.",
  },
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Litvanya'da Şirket Nasıl Kurulur? UAB, MB, Vergi Sistemi ve Süreç"
      description="UAB ve MB şirket türleri, 1.000 euro asgari sermaye, %17 kurumlar vergisi, küçük işletmeler için %0 ve %7 oranları, KDV, temettü stopajı, oturum izni, banka hesabı, gerçek faydalı sahip bildirimi ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Litvanya rehberi."
      category="YURT DIŞI ŞİRKET • LİTVANYA • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="litvanyada-sirket-nasil-kurulur"
      ctaHeading="Litvanya'da Şirket Kuruluşu İçin Destek Alın"
      ctaText="UAB veya MB yapısının seçimi, kuruluş, KDV kaydı, banka hesabı ve kuruluş sonrası muhasebe. Litvanya'daki yapılanma sürecinizi baştan sona yönetiyoruz."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Litvanya; AB, Schengen ve Euro Bölgesi üyesi, dijital kayıt altyapısı
          güçlü bir Baltık ülkesidir. Türk girişimciler için şirket kuruluşu
          elektronik ortamda ve birkaç iş günü içinde tamamlanabilir. Vergi
          avantajı kâr ertelemesinde değil, küçük işletmeler için düşük
          kurumlar vergisi oranlarındadır.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Şirket türü: Yabancılar için en yaygın yapı UAB (özel limited şirket); gerçek kişi ortaklar için MB (küçük ortaklık)</li>
          <li>✔ Sermaye: UAB için 1.000 euro, MB için asgari sermaye şartı yok</li>
          <li>✔ Süre: Tescil standart olarak 3 iş günü, harç yaklaşık 30,83 euro</li>
          <li>✔ Vergi: Standart %17, küçük şirketlerde %7, yeni küçük şirketlerde ilk iki yıl %0 (koşullu)</li>
          <li>✔ KDV: Standart oran %21, kayıt eşiği 45.000 euro</li>
          <li>✔ Oturum izni: Şirket kurmak için gerekmez, Litvanya&apos;da yaşamak için ayrıca başvurulur</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-litvanya" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Neden Litvanya?
          </Link>
          <Link href="#sirket-turleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Şirket Türleri ve Asgari Sermaye
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Adım Adım Kuruluş Süreci
          </Link>
          <Link href="#vergi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Vergi Sistemi (2026)
          </Link>
          <Link href="#oturum" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Vize ve Oturum İzni
          </Link>
          <Link href="#banka" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Banka Hesabı, Muhasebe ve Raporlama
          </Link>
          <Link href="#maliyet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Maliyetler, Avantajlar ve Dezavantajlar
          </Link>
          <Link href="#turkiye" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
        </div>
      </div>

      {/* 1. NEDEN LİTVANYA */}
      <section id="neden-litvanya" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Litvanya?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Litvanya, Baltık ülkeleri içinde AB iç pazarına, euroya ve Schengen
          alanına erişimi tek bir yapıda sunar. Şirket kayıt işlemlerinin büyük
          bölümü elektronik yürütülür, 1.000 euroluk asgari sermaye giriş
          eşiğini düşük tutar ve küçük işletmelere tanınan %0 ile %7 oranları
          özellikle yazılım, danışmanlık ve hizmet şirketleri için dikkat çekicidir.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💶</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Düşük Küçük İşletme Oranı
            </h3>
            <p className="text-gray-700">
              Yıllık geliri 300.000 euroyu aşmayan küçük şirketlerde %7, yeni
              kurulanlarda ilk iki dönem %0 oranı uygulanabilir. İkincil kaynaklara göre 2026'dan itibaren çalışan sayısı sınırı kaldırılmış, koşul esas olarak gelir sınırına bağlanmıştır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🇪🇺</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              AB Pazarı ve Euro
            </h3>
            <p className="text-gray-700">
              AB içi KDV numarası ve euro bazlı muhasebe ile Avrupa genelinde mal
              ve hizmet satışı için uygun bir üs.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💻</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Dijital Kayıt Altyapısı
            </h3>
            <p className="text-gray-700">
              Tüzel kişi kaydı, Registrų centras&apos;ın JAREP sistemi üzerinden
              elektronik yapılır; vergi işlemleri VMI&apos;nın elektronik
              sisteminde yürütülür.
            </p>
          </div>
        </div>
      </section>

      {/* KARIŞTIRMAYIN */}
      <div className="mt-16 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-red-800">
          ⚠️ Karıştırmayın: Litvanya, Estonya ve Letonya gibi &quot;kâr dağıtılana kadar vergi yok&quot; ülkesi değildir
        </h3>
        <p className="leading-8 text-gray-700">
          Baltık ülkelerinin hepsini aynı vergi sistemi gibi okumak sık yapılan
          bir hatadır. Estonya ve Letonya dağıtılmayan kâra kurumlar vergisi
          uygulamaz. Litvanya ise klasik sistemi kullanır: kurumlar vergisi
          yıllık kâr üzerinden hesaplanır, kâr dağıtılırsa ortağa ayrıca
          temettü vergisi doğar. Litvanya&apos;nın cazibesi, küçük şirketler
          için tanınan %0 ve %7 oranlarından gelir, vergi ertelemesinden değil.
        </p>
      </div>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Şirket Türleri ve Asgari Sermaye
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yabancı yatırımcılar için en yaygın seçenek UAB (Uždaroji akcinė
          bendrovė) yapısıdır. UAB, Türkiye&apos;deki Limited Şirket&apos;e en
          yakın karşılıktır ve tek ortakla kurulabilir. MB (Mažoji bendrija),
          yalnızca gerçek kişilerin kurabildiği, en fazla 10 kurucusu olan ve
          asgari sermaye şartı bulunmayan küçük ortaklık yapısıdır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Şirket Türü</th>
                <th className="p-5">Tanım</th>
                <th className="p-5">Asgari Sermaye</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">UAB</td>
                <td className="p-5">
                  Özel limited şirket. Tek veya birden fazla ortakla,
                  gerçek veya tüzel kişi tarafından kurulabilir.
                </td>
                <td className="p-5">1.000 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">MB</td>
                <td className="p-5">
                  Küçük ortaklık. Yalnızca gerçek kişiler kurabilir, en fazla 10
                  kurucu. Girişimci, serbest çalışan ve aile işletmeleri için
                  yaygındır.
                </td>
                <td className="p-5">Şart yok</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">AB</td>
                <td className="p-5">
                  Halka açık anonim şirket. Büyük ölçekli ve düzenlemeye tabi
                  yapılar için kullanılır.
                </td>
                <td className="p-5">Kanunda belirlenen üst düzey tutar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            MB&apos;nin sermaye şartı olmaması ilk bakışta UAB&apos;a göre daha
            avantajlı görünür. Ancak ortaklığa tüzel kişi giremediği için
            bir Türk şirketinin Litvanya iştiraki olarak MB kullanılamaz.
            Gelecekte yatırımcı alma veya ortak şirket ekleme ihtimaliniz
            varsa, yapıyı baştan UAB olarak kurmak sonradan dönüşüm
            maliyetinden kaçınmanızı sağlar.
          </p>
        </div>
      </section>

      {/* 3. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Kuruluş, Registrų centras&apos;ın (Centre of Registers) yönettiği Tüzel
          Kişiler Sicili&apos;ne yapılan başvuruyla tamamlanır. Şirket, sicile
          tescil edildiği anda kurulmuş sayılır. Belgeler eksiksiz olduğunda
          tescil genellikle 3 iş günü içinde sonuçlanır.
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Ünvan, Adres & Yapı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Ana Sözleşme & Noter</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Sermaye & Başvuru</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Tescil, Vergi & JANGIS</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.1. Ünvan, Kayıtlı Adres ve Yönetim Yapısı
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket ünvanının sicilde kullanılabilir olduğu kontrol edilir.
            Litvanya&apos;da şirketin tebligat alabileceği kayıtlı bir adresi
            (registered office) bulunmalıdır. Ortaklar ve yönetici (genel müdür)
            belirlenir; yönetici olarak Litvanya&apos;da yerleşik olmayan bir
            kişi atanabilir, ancak banka ve vergi işlemlerinde ulaşılabilirlik
            ayrıca önem taşır.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.2. Ana Sözleşme, Noter ve Elektronik Başvuru
          </h3>
          <p className="leading-8 text-gray-700">
            Ana sözleşme (statü) hazırlanıp imzalanır. UAB başvurusu
            sicile iletilmeden önce noter, başvurudaki bilgilerin doğruluğunu,
            ana sözleşmenin kanuna uygunluğunu ve şirketin tescile elverişli
            olduğunu doğrular. Başvuru, Registrų centras&apos;ın JAREP elektronik
            hizmeti üzerinden yapılır. Kimlik doğrulama yöntemi ortağın uyruğuna
            ve sahip olduğu elektronik kimliğe göre değişir. Türkiye&apos;den
            yürütülecek süreçlerde noter ve apostil şerhli vekâletname yolu
            kullanılır.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.3. Sermaye Yatırma
          </h3>
          <p className="leading-8 text-gray-700">
            UAB için asgari sermaye 1.000 euro&apos;dur. Kaynaklarda,
            tescilden önce sermayenin en az dörtte birinin yatırılması ve kalan
            bölümün 12 ay içinde tamamlanması kuralı aktarılmaktadır; kuruluş
            öncesinde bu kuralın güncel hâlini Registrų centras üzerinden
            teyit etmek gerekir. MB için sermaye şartı yoktur.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.4. Tescil, Vergi Kaydı ve Gerçek Faydalı Sahip (JANGIS)
          </h3>
          <p className="leading-8 text-gray-700">
            Tescille birlikte şirket vergi mükellefi olarak VMI&apos;ya
            (Devlet Vergi Müfettişliği) kaydedilir. Gerçek faydalı sahip
            bilgisi, Registrų centras&apos;ın yönettiği Tüzel Kişi Katılımcıları
            Bilgi Sistemi&apos;nin (JADIS) alt sistemi JANGIS&apos;e iletilir.
            Değişiklik hâlinde güncel verinin 10 takvim günü içinde sisteme
            girilmesi gerektiği aktarılmaktadır. Bildirim, nitelikli
            elektronik imzayla yapılır ve bu yükümlülük yöneticiye aittir.
          </p>
        </div>
      </section>

      {/* 4. VERGİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Vergi Sistemi (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          1 Ocak 2026&apos;dan itibaren standart kurumlar vergisi oranı %16&apos;dan
          %17&apos;ye, küçük işletme oranı %6&apos;dan %7&apos;ye yükseldi. Yeni
          kurulan küçük şirketlerde %0 oranı bir yıldan iki vergi dönemine
          uzatıldı ve çalışan sayısına ilişkin 10 kişilik sınır kaldırıldı.
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
                <td className="p-5 font-semibold">Kurumlar vergisi (standart)</td>
                <td className="p-5">%17</td>
                <td className="p-5">Yıllık vergilendirilebilir kâr üzerinden, kâr dağıtılsa da dağıtılmasa da</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Küçük işletme oranı</td>
                <td className="p-5">%7</td>
                <td className="p-5">Yıllık brüt geliri 300.000 EUR altındaki küçük şirketler; koşullar VMI&apos;dan doğrulanmalı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yeni küçük şirket</td>
                <td className="p-5">%0</td>
                <td className="p-5">Yeni kurulan, geliri 300.000 EUR&apos;yu aşmayan şirketler için ilk iki vergi dönemi</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Temettü stopajı (yerleşik olmayan)</td>
                <td className="p-5">%17</td>
                <td className="p-5">Standart oran; Türkiye-Litvanya ÇVÖA'sı (Madde 10) kaynak vergisini %10 ile sınırlar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV</td>
                <td className="p-5">%21 / %12 / %5</td>
                <td className="p-5">Standart oran %21; belirli mal ve hizmetlerde indirimli oranlar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV kayıt eşiği</td>
                <td className="p-5">45.000 EUR</td>
                <td className="p-5">Litvanya&apos;da yerleşik şirketler için zorunlu kayıt eşiği</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Sosyal güvenlik (Sodra)</td>
                <td className="p-5">%1,77 + %19,5</td>
                <td className="p-5">İşveren payı yaklaşık %1,77, çalışan payı yaklaşık %19,5 olarak aktarılır; ayrıntı için Sodra doğrulaması gerekir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            %0 ve %7 oranlarının cazibesi, şirketin gelir sınırı ve faaliyet
            koşullarını sürekli karşılamasına bağlıdır. Gelir 300.000 euroya
            yaklaştığında, oranın %17&apos;ye dönmesi hem fiyatlamayı hem de
            temettü planını etkiler. Büyüme planı olan bir yapıda bu eşiği
            baştan hesaba katmak, yıl ortasında sürpriz yük doğmasını önler.
            Türk ortak bakımından Litvanya&apos;da ödenen vergilerin Türkiye&apos;deki
            vergilendirmeyle nasıl birleşeceği ayrıca planlanmalıdır.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Beyan takvimi: Kurumlar vergisi beyanı, mali yıl sonunu izleyen
          6. ayın 15&apos;inde (takvim yılı şirketlerinde 15 Haziran) VMI&apos;ya
          verilir. Aylık KDV beyanı izleyen ayın 25&apos;ine kadar verilir. Bu
          tarihler ikincil kaynaklardan derlenmiştir, güncel takvim VMI&apos;dan
          doğrulanmalıdır.
        </p>
      </section>

      {/* 5. OTURUM */}
      <section id="oturum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vize ve Oturum İzni: Türk Vatandaşları İçin Noktalar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket kurmak oturum izni gerektirmez. Litvanya&apos;ya kısa süreli
          seyahatlerde Türk vatandaşları Schengen vizesine ihtiyaç duyar.
          Litvanya&apos;da yaşamak ve şirketi yönetmek için geçici oturum izni
          başvurusu gerekir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🛂 Oturum İzni Seçenekleri (Migracijos departamentas)
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Şirket yöneticisi olan yabancı, Yabancıların Hukuki Statüsü
              Kanunu&apos;nda belirlenen koşulları sağlarsa geçici oturum izni
              alabilir.
            </li>
            <li>
              Yenilikçi girişimler için Startup Visa programı bulunur. İkincil kaynaklara göre geçici oturum 2+3 yıl verilir, devlet harcı standart başvuruda 160 euro, acil başvuruda 320 euro olarak aktarılır, başvuruda 30.000 euro teminatlı sağlık sigortası ve asgari ücrete bağlı geçim güvencesi (2026 için yaklaşık 1.153 euro/ay) aranır; güncel tutarlar Göç Departmanı'ndan doğrulanmalıdır. Başvuruda
              Innovation Agency&apos;nin faaliyetin girişim niteliğini ve
              gerekli yeterlilik, finansman ve iş planının varlığını
              onaylaması aranır.
            </li>
            <li>
              Başvuru, Litvanya Göç Bilgi Sistemi MIGRIS üzerinden elektronik
              yapılır; başvurudan sonra belirli süre içinde biyometrik veri ve
              orijinal belgelerle şahsen başvuru yapılır.
            </li>
            <li>
              Göç mevzuatı sık değiştiği için başvurudan önce
              Migracijos departamentas&apos;ın güncel şartlarını mutlaka
              doğrulayın.
            </li>
          </ul>
        </div>
      </section>

      {/* 6. BANKA */}
      <section id="banka" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Banka Hesabı, Muhasebe ve Raporlama
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Litvanya bankaları, kara para aklamayı önleme kuralları çerçevesinde
          yabancı ortaklı şirketlerde müşteri tanıma sürecini sıkı yürütür.
          Türkiye&apos;den gelen ortaklı bir şirkette hesap açılışı,
          kuruluştan daha uzun sürebilir ve bankayı ikna edecek ticari gerekçe
          önemlidir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Hesap Açılışında Dikkat Edilecekler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>Faaliyet konusu, müşteri ve tedarikçi profili ve para akışı net tanımlanmalıdır.</li>
            <li>Gerçek faydalı sahip ve fon kaynağı belgelerle desteklenmelidir.</li>
            <li>Litvanya veya AB ile gerçek bir ekonomik bağ (sözleşme, müşteri, ofis) hesap açılışını kolaylaştırır.</li>
            <li>Bankalar bazı durumlarda ortağın veya yöneticinin görüşmesini isteyebilir; politika bankadan bankaya değişir.</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kuruluştan sonra yıllık finansal tablolar mali yıl sonundan sonraki 4
          ay içinde hazırlanıp ortaklar tarafından onaylanır ve onaydan
          sonra 30 gün içinde Registrų centras&apos;a sunulur; bu süreler ikincil
          kaynaklarda bu şekilde aktarılmaktadır. KDV, kurumlar vergisi ve
          gerçek faydalı sahip bildirimi, yıllık uyum takviminin ayrı
          kalemleridir.
        </p>
      </section>

      {/* 7. MALİYET */}
      <section id="maliyet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Maliyetler, Avantajlar ve Dezavantajlar
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Tutar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Devlet harcı: elektronik UAB kuruluşu</td>
                <td className="p-5">yaklaşık 30,83 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Asgari sermaye: UAB</td>
                <td className="p-5">1.000 EUR</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Asgari sermaye: MB</td>
                <td className="p-5">Şart yok</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Bu tutarlara noter, apostil, yeminli tercüme, kayıtlı adres ve
          profesyonel hizmet bedelleri dahil değildir; bunlar kapsama göre
          değişir. Harç tutarı ikincil kaynaklardan aktarılmıştır, başvuru
          anında Registrų centras tarifesinden teyit edilmelidir.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">✅ Avantajlar</h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
              <li>Küçük şirketler için %0 ve %7 kurumlar vergisi oranları</li>
              <li>Düşük asgari sermaye (UAB 1.000 euro, MB şart yok)</li>
              <li>AB pazarı, Schengen ve euro kullanımı</li>
              <li>Elektronik kayıt ve kısa tescil süresi</li>
              <li>Yabancı ortaklığa genel kısıtlama olmaması</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">⚠️ Dezavantajlar</h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-600">
              <li>2026&apos;da oranların artması ve kâr ertelemesinin olmaması</li>
              <li>Temettüde stopaj (Türkiye ÇVÖA'sı ile en fazla %10)</li>
              <li>Sıkı banka KYC süreci ve hesap açılış süresi</li>
              <li>JANGIS bildirim yükümlülüğü ve yaptırım riski</li>
              <li>Göç mevzuatındaki değişiklikler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. TÜRKİYE */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Litvanya&apos;da şirket kurmak, Türkiye tarafında da bildirim
          yükümlülükleri doğurur. Buna karşılık Ticaret Bakanlığı&apos;nın yurt
          dışı birim, marka ve tanıtım desteklerinden yararlanmak mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Litvanya&apos;da UAB veya MB kuruluşunu, belge hazırlığından
            Registrų centras başvurusuna, banka hesabı açılış sürecine
            kadar baştan sona biz yürütüyoruz. Kuruluş sonrası muhasebe, KDV
            ve kurumlar vergisi beyanları ile raporlama hizmetinizi de
            ayrı bir yerel firma aramanıza gerek kalmadan biz sağlıyoruz.
            Şirketinizin Litvanya yapılanmasını ve vergi planınızı birlikte
            değerlendirelim.{" "}
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
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler, yurt dışında
            şirket kurmaları veya mevcut bir şirkete ortak olmaları halinde
            ilgili yurt dışı yatırım bildirim yükümlülüklerine tabidir. Bildirim
            süresi ve yıllık güncelleme kuralları için Ticaret Bakanlığı
            ve Hazine ve Maliye Bakanlığı mevzuatının güncel hâli esas alınmalıdır.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Yurt Dışı Birim, Marka ve Tanıtım Desteği
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>Litvanya&apos;da açılan ofis, depo, showroom veya mağaza giderleri için Ticaret Bakanlığı destekleri kapsamında kira desteği söz konusu olabilir.</li>
            <li>Destek oranları, üst limitler ve hedef ülke statüsü zaman zaman güncellenir.</li>
            <li>Başvuru için Türk Ticaret Kanunu&apos;na göre kurulmuş şirket olmak ve desteğe konu ürünlerin Türk menşeli olması gibi şartlar aranır.</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Genel çerçeve için{" "}
          <Link href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari" className="text-orange-600 underline">
            Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
          </Link>{" "}
          rehberimize bakabilirsiniz. Güncel oranlar için{" "}
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

      {/* DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ UAB ve MB arasında ortak yapınıza ve büyüme planınıza göre seçim yapın</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ %0 ve %7 küçük işletme koşullarını ve 300.000 euro gelir sınırını yıl boyunca izleyin</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Gerçek faydalı sahip bilgisini JANGIS&apos;te güncel tutun</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Banka hesabı açılış süresini ve ticari gerekçeyi önceden planlayın</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Türkiye&apos;deki yurt dışı yatırım bildirimini süresinde yapın</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Muhasebe ve raporlamayı ayrıca yerel firma aramadan bize devredebilirsiniz</div>
        </div>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">{f.q}</h3>
              <p className="leading-8 text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Litvanya, elektronik kuruluşu, 1.000 euroluk sermaye eşiği ve küçük
          şirketler için %0 ile %7 oranlarıyla AB&apos;ye açılmak isteyen
          girişimciler için erişilebilir bir seçenektir. Karar verirken
          kâr ertelemesi sunmayan klasik vergi sistemini, banka sürecini ve
          Türkiye tarafındaki bildirimleri birlikte değerlendirmek gerekir.
          Şirketinizin Litvanya yapılanmasının uygunluğunu birlikte
          değerlendirmek için{" "}
          <Link href="/#contact" className="text-orange-600 underline">
            bizimle iletişime geçebilirsiniz.
          </Link>
        </p>
      </section>

      {/* RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li><a href="https://www.registrucentras.lt/en/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Registrų centras (Centre of Registers)</a></li>
          <li><a href="https://www.registrucentras.lt/jar/e-gidas_en/index.php?l=2&tipas=uab&steig-fiz=on" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Registrų centras: UAB kuruluş e-rehberi</a></li>
          <li><a href="https://w2.registrucentras.lt/bylos/savitarna/UAB%20steigimas%20JAREP_EN.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Registrų centras: UAB kuruluş kuralları (JAREP)</a></li>
          <li><a href="https://www.vmi.lt/evmi/en/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Litvanya Devlet Vergi Müfettişliği (VMI)</a></li>
          <li><a href="https://www.migracija.lt/en" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Migracijos departamentas: oturum izni bilgileri</a></li>
          <li><a href="https://investlithuania.com/blog/taxes-in-lithuania-income-corporate-vat-and-more-explained/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Invest Lithuania: Litvanya vergileri</a></li>
          <li><a href="https://investlithuania.com/blog/starting-a-business-in-lithuania-a-7-step-guide/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Invest Lithuania: Litvanya&apos;da iş kurma rehberi</a></li>
          <li><a href="https://kpmg.com/lt/en/insights/2025/10/lithuania-amendments-to-corporate-income-taxation-effective-january-1-2026.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">KPMG Litvanya: 1 Ocak 2026 kurumlar vergisi değişiklikleri (ikincil kaynak)</a></li>
          <li><a href="https://taxsummaries.pwc.com/lithuania/corporate/taxes-on-corporate-income" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">PwC Worldwide Tax Summaries: Litvanya kurumlar vergisi (ikincil kaynak)</a></li>
          <li><a href="https://taxsummaries.pwc.com/lithuania/corporate/withholding-taxes" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">PwC Worldwide Tax Summaries: Litvanya stopaj vergileri (ikincil kaynak)</a></li>
          <li><a href="https://ticaret.gov.tr/destekler/ihracat-destekleri/yurtdisi-birim-marka-ve-tanitim-destegi" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">T.C. Ticaret Bakanlığı: yurt dışı birim, marka ve tanıtım desteği</a></li>
        </ul>
        <p className="mt-6 text-sm leading-7 text-gray-500">
          Bu yazı bilgilendirme amaçlıdır; kişiye özel hukuki veya vergisel
          görüş niteliği taşımaz. Oranlar ve eşikler 7 Ekim 2026 itibarıyla
          derlenmiştir. Registrų centras ve VMI sitelerine otomatik erişim
          sağlanamadığı için bazı detaylar ikincil kaynaklardan aktarılmıştır;
          uygulama öncesi resmî kaynaklardan doğrulanmalıdır.
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
            href="/blog/letonyada-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • LETONYA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Letonya&apos;da Şirket Nasıl Kurulur? SIA Kuruluşu, Vergi Sistemi ve Süreç</h3>
          </Link>
          <Link
            href="/blog/polonyada-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • POLONYA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Polonya&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </BlogLayout>
  );
}
