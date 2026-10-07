import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Letonya'da Şirket Nasıl Kurulur? SIA, Vergi ve Süreç 2026 | Koray Akdağ",
  description:
    "Letonya'da SIA kuruluşu, 1 euro sermaye seçeneği, dağıtılmayan kâra vergi uygulanmayan %20 kurumlar vergisi sistemi, KDV, oturum izni ve banka hesabı için 2026 güncel rehber.",
  keywords: [
    "letonyada şirket kurma",
    "letonya sia şirket kuruluşu",
    "letonya kurumlar vergisi",
    "letonya dağıtılmayan kâr vergisi",
    "letonya 1 euro sermaye",
    "letonya enterprise register",
    "letonya oturum izni yatırımcı",
    "2026 letonya şirket kuruluşu",
  ],
  alternates: {
    canonical: "/blog/letonyada-sirket-nasil-kurulur",
  },
};

const faqs = [
  {
    q: "Letonya'da şirket kurmak için ülkede bulunmam veya oturum izni almam gerekir mi?",
    a: "Hayır. Şirket kurmak için oturum izni gerekmez ve yabancı ortaklık sınırlaması yoktur. Süreç noterde düzenlenip apostil şerhi eklenen bir vekâletname ve güvenli elektronik imza ile uzaktan yürütülebilir. Oturum izni yalnızca Letonya'da yaşamak veya çalışmak istediğinizde gündeme gelir.",
  },
  {
    q: "Letonya'da şirket kurmak için asgari sermaye ne kadardır?",
    a: "Standart SIA için asgari sermaye 2.800 euro'dur. Bunun yanında sermayesi 1 euro ile 2.799 euro arasında olan düşük sermayeli SIA kurulabilir. Düşük sermayeli SIA, sermaye 2.800 euro'ya ulaşana kadar yıllık kârın en az %25'ini zorunlu yedek olarak ayırmak zorundadır.",
  },
  {
    q: "Letonya'da kâr dağıtmazsam şirket vergi öder mi?",
    a: "Letonya'da kurumlar vergisi kârın elde edilmesine değil dağıtılmasına bağlanır. Şirket içinde bırakılan kâr için kurumlar vergisi doğmaz. Temettü dağıtıldığında net tutar 0,8'e bölünerek %20 oranı uygulanır, bu da net dağıtılan tutarın %25'ine denk gelir. Dağıtıma sayılan bazı işletme dışı giderler de aynı şekilde vergilendirilir.",
  },
  {
    q: "Letonya'da KDV'ye ne zaman kaydolmak gerekir?",
    a: "Letonya'da yerleşik bir şirket için takvim yılı içindeki vergilendirilebilir ciro 50.000 euro'yu aştığında KDV kaydı zorunlu olur. Standart KDV oranı %21'dir, belirli mal ve hizmetlerde %12 ve %5 indirimli oranlar uygulanır. Letonya'da yerleşik olmayan işletmeler için ciro eşiği bulunmaz.",
  },
  {
    q: "Letonya'dan Türkiye'ye temettü gönderirken stopaj kesilir mi?",
    a: "Letonya'da yerleşik olmayanlara ödenen temettüde, vergi cenneti listesindeki ülkeler hariç, kaynakta stopaj uygulanmaz. Vergi, şirket seviyesinde dağıtım anında kurumlar vergisi olarak ödenir. Türkiye'deki beyan ve ÇVÖA kapsamında mahsup imkânı, ortağın durumuna göre ayrıca değerlendirilmelidir.",
  },
  {
    q: "Letonya'da şirket kurmak ne kadar sürer ve ne kadar tutar?",
    a: "Belgeler eksiksiz olduğunda Enterprise Register'daki tescil standart olarak 3 iş günü içinde yapılır; vekâletname, apostil ve tercüme dahil toplam süre genellikle 1-2 hafta olur. Devlet harcı standart SIA için 3 iş günü içindeki tescilde 75 euro, 1 iş günü içinde 225 euro, düşük sermayeli SIA için 3 iş günü içinde 20 euro'dur. Banka hesabı açılışı bu süreye ayrıca eklenmelidir.",
  },
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Letonya'da Şirket Nasıl Kurulur? SIA Kuruluşu, Vergi Sistemi ve Süreç"
      description="SIA şirket türü, 1 euro sermaye seçeneği, kâr dağıtılana kadar vergi doğmayan %20 kurumlar vergisi sistemi, KDV, oturum izni, banka hesabı, gerçek faydalı sahip bildirimi ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Letonya rehberi."
      category="YURT DIŞI ŞİRKET • LETONYA • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="letonyada-sirket-nasil-kurulur"
      ctaHeading="Letonya'da Şirket Kuruluşu İçin Destek Alın"
      ctaText="SIA kuruluşu, kâr dağıtım stratejisinin vergi açısından planlanması, KDV kaydı, banka hesabı ve kuruluş sonrası muhasebe. Letonya'daki yapılanma sürecinizi baştan sona yönetiyoruz."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Letonya; AB ve Schengen üyesi, euro kullanan, kârı dağıtılana kadar
          kurumlar vergisi almayan Estonya benzeri bir sisteme sahip bir
          ülkedir. Türk girişimciler için şirket kuruluşu uzaktan
          yapılabilir ve sermaye şartı sembolik düzeye indirilebilir.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Şirket türü: Yabancı yatırımcılar için en yaygın yapı SIA (limited şirket)</li>
          <li>✔ Sermaye: Standart SIA için 2.800 euro, düşük sermayeli SIA için 1-2.799 euro</li>
          <li>✔ Süre: Tescil standart olarak 3 iş günü, toplam süreç genellikle 1-2 hafta</li>
          <li>✔ Vergi: Dağıtılmayan kâra kurumlar vergisi yok; dağıtımda %20 (net tutarın %25&apos;i)</li>
          <li>✔ KDV: Standart oran %21, yerleşik şirketler için kayıt eşiği 50.000 euro</li>
          <li>✔ Oturum izni: Şirket kurmak için gerekmez, Letonya&apos;da yaşamak için ayrıca başvurulur</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-letonya" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Neden Letonya?
          </Link>
          <Link href="#sirket-turleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Şirket Türleri ve Asgari Sermaye
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Adım Adım Kuruluş Süreci
          </Link>
          <Link href="#vergi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Vergi Sistemi: Dağıtılmayan Kâra Vergi Yok
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

      {/* 1. NEDEN LETONYA */}
      <section id="neden-letonya" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Letonya?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Letonya, Baltık ülkeleri içinde Estonya ile birlikte kurumlar
          vergisini kârın elde edildiği anda değil, dağıtıldığı anda
          alan nadir sistemlerden birine sahiptir. Euro Bölgesi ve Schengen
          Alanı üyesi olması, şirket kuruluşunun uzaktan yapılabilmesi ve
          düşük sermayeli SIA seçeneği, ülkeyi büyümek için kâr
          biriktirmek isteyen küçük ve orta ölçekli şirketler için cazip kılar.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📈</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Kâr Dağıtılana Kadar Vergi Yok
            </h3>
            <p className="text-gray-700">
              Şirkette bırakılan kâr kurumlar vergisine tabi değildir. Yeniden
              yatırıma dönen kazanç vergisiz büyür, vergi yalnızca dağıtımda doğar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🇪🇺</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              AB Pazarı ve Euro
            </h3>
            <p className="text-gray-700">
              AB iç pazarına erişim, AB içi KDV numarası ve euro bazlı
              muhasebe ile Avrupa genelinde mal ve hizmet satışı için uygun bir üs.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💻</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Dijital Kayıt Altyapısı
            </h3>
            <p className="text-gray-700">
              Enterprise Register başvuruları elektronik yapılabilir, KDV ve
              kurumlar vergisi beyanları VID&apos;in elektronik sisteminden verilir.
            </p>
          </div>
        </div>
      </section>

      {/* KARIŞTIRMAYIN */}
      <div className="mt-16 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-red-800">
          ⚠️ Karıştırmayın: &quot;%0 vergi&quot; ile &quot;vergi ertelemesi&quot;
        </h3>
        <p className="leading-8 text-gray-700">
          Letonya&apos;da şirket kârı kalıcı olarak vergisiz değildir. Vergi,
          kâr dağıtıldığında veya dağıtım sayılan işlemler yapıldığında
          doğar. Temettüyü ortağa aktardığınız anda net tutar üzerinden
          efektif %25 yük ortaya çıkar. Ayrıca işletme faaliyetiyle ilgisi
          olmayan giderler, uygunsuz ilişkili taraf işlemleri ve tahsili
          imkânsız alacak gibi kalemler de &quot;dağıtılmış kâr&quot; sayılarak
          aynı oranda vergilendirilir. Sistem ertelemedir, muafiyet değildir.
        </p>
      </div>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Şirket Türleri ve Asgari Sermaye
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yabancı yatırımcılar Letonya&apos;da büyük ölçüde SIA (Sabiedrība ar
          ierobežotu atbildību) yapısını tercih eder. SIA, Türkiye&apos;deki
          Limited Şirket&apos;e karşılık gelir ve tek ortakla kurulabilir.
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
                <td className="p-5 font-semibold">SIA (standart)</td>
                <td className="p-5">
                  Limited şirket. Tek veya birden fazla ortakla kurulabilir.
                  Hisse devri ve genel kurul işleyişi ticaret kanunuyla düzenlenir.
                </td>
                <td className="p-5">2.800 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">SIA (düşük sermayeli)</td>
                <td className="p-5">
                  Aynı hukuki yapı, sermaye 1-2.799 EUR arasında. Sermaye
                  2.800 EUR&apos;ya ulaşana kadar yıllık kârın en az %25&apos;i
                  zorunlu yedeğe ayrılır.
                </td>
                <td className="p-5">1 EUR</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">AS (anonim şirket)</td>
                <td className="p-5">
                  Halka açık veya büyük ölçekli yapılar ve düzenlemeye tabi
                  sektörler için kullanılan anonim şirket.
                </td>
                <td className="p-5">Kanunda belirlenen üst düzey asgari tutar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            1 euro sermaye cazip görünse de bu seçimin iki pratik sonucu
            vardır. Birincisi, kâr dağıtımından önce zorunlu yedek ayırma
            kuralı nedeniyle temettü planınız gecikebilir. İkincisi, banka ve
            muhatap firmalar sembolik sermayeli bir şirketi daha dikkatli
            değerlendirebilir. Müşteri veya ihale beklentiniz varsa, standart
            2.800 euro sermaye ile başlamak çoğu zaman daha az sürtünme
            yaratır.
          </p>
        </div>
      </section>

      {/* 3. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Kuruluş, Letonya Cumhuriyeti Enterprise Register&apos;ına (Uzņēmumu
          reģistrs) yapılan başvuruyla tamamlanır. Belgeler eksiksiz
          olduğunda tescil standart olarak 3 iş günü içinde sonuçlanır.
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Ünvan, Adres & Yapı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Vekâlet & Belgeler</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Sermaye & Başvuru</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Tescil & Vergi Kaydı</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.1. Ünvan, Kayıtlı Adres ve Yönetim Yapısı
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket ünvanının Enterprise Register&apos;da kullanılabilir olduğu
            kontrol edilir. Letonya&apos;da bir yasal adres, yani şirketin
            tebligat alabileceği kayıtlı bir adres gerekir. Ortaklar ve yönetim
            kurulu üyeleri belirlenir; yabancı gerçek veya tüzel kişilerin
            ortak olmasında kısıtlama yoktur.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.2. Vekâletname, Elektronik İmza ve Belgeler
          </h3>
          <p className="leading-8 text-gray-700">
            Letonya kimlik numarası olmayan bir yabancı, tescil
            kapsamında kendisine ait bir gerçek kişi kayıt formunu güvenli
            elektronik imza ile imzalayarak elektronik başvuruda bulunabilir.
            Elektronik imzanız yoksa belgeler noter onayıyla sunulur. Türkiye&apos;de
            noterde düzenlenip apostil şerhi eklenen ve tercüme edilen
            bir vekâletname ile süreci Türkiye&apos;den ayrılmadan yönetmek
            mümkündür. Kuruluş sözleşmesi ve karar belgeleri Letonca olarak
            hazırlanır.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.3. Sermaye Yatırma ve Başvuru
          </h3>
          <p className="leading-8 text-gray-700">
            Sermayesi 2.800 euro ve üzeri olan standart SIA için tescilden
            önce geçici bir hesap açılarak sermaye yatırılır. Sermayesi 2.800
            euro&apos;nun altındaki düşük sermayeli SIA için kuruluşta geçici
            hesap şartı yoktur. Başvuru dosyası Enterprise Register&apos;a
            elektronik olarak iletilir ve devlet harcı yatırılır.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.4. Tescil, Vergi Kaydı ve Gerçek Faydalı Sahip
          </h3>
          <p className="leading-8 text-gray-700">
            Tescille birlikte şirket vergi mükellefi olarak Devlet Gelir
            Servisi&apos;ne (VID) kaydedilir. Gerçek faydalı sahip (UBO) bilgisi
            Enterprise Register&apos;a bildirilir ve değişiklikler olduğunda
            14 gün içinde güncellenmelidir. Bildirimin yapılmaması veya eksik
            yapılması, şirketin kayıttan çıkarılmasına kadar varabilen
            yaptırımlar doğurabilir. KDV mükellefiyeti için ayrıca VID&apos;e
            başvuru gerekir.
          </p>
        </div>
      </section>

      {/* 4. VERGİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Vergi Sistemi: Dağıtılmayan Kâra Vergi Yok (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Letonya kurumlar vergisi (UIN), şirketin yıl sonu kârına değil,
          ortaklara dağıtılan kâra veya dağıtım sayılan işlemlere uygulanır.
          Oran, brüt dağıtılan tutar üzerinden %20&apos;dir. Pratikte net
          dağıtılan tutar 0,8&apos;e bölündüğü için, ortağın eline net 100 euro
          geçiyorsa şirket 25 euro vergi öder.
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
                <td className="p-5 font-semibold">Dağıtılmayan kâr</td>
                <td className="p-5">%0</td>
                <td className="p-5">Şirket içinde bırakılan kâr için kurumlar vergisi doğmaz</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar Vergisi (dağıtımda)</td>
                <td className="p-5">%20 (net tutarın %25&apos;i)</td>
                <td className="p-5">Temettü ve dağıtım sayılan işlemler için; ortaklara ayrıca Letonya kaynaklı stopaj uygulanmaz</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Alternatif rejim (2026)</td>
                <td className="p-5">%15 + %6</td>
                <td className="p-5">
                  Yalnızca gerçek kişi ortaklı şirketlerin seçebildiği, %15
                  kurumlar vergisi ve ortağa ödemede %6 gelir vergisi
                  kesintisi içeren seçenek; koşulları VID&apos;den doğrulayın
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV</td>
                <td className="p-5">%21 / %12 / %5</td>
                <td className="p-5">Standart oran %21; belirli mal ve hizmetlerde indirimli oranlar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV kayıt eşiği</td>
                <td className="p-5">50.000 EUR</td>
                <td className="p-5">Yerleşik şirketler için yıllık ciro eşiği; yerleşik olmayanlar için eşik yok</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Sosyal güvenlik (işçi)</td>
                <td className="p-5">%23,59 + %10,50</td>
                <td className="p-5">İşveren payı %23,59, çalışan payı %10,50; asgari ücret 2026&apos;da aylık 780 EUR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            Bu sistemin avantajı, yalnızca temettü çekilmediğinde ortaya çıkar.
            Türk ortak bakımından asıl soru, Letonya&apos;da ödenen kurumlar
            vergisinin Türkiye&apos;deki vergilendirmeyle nasıl birleştiğidir.
            Dağıtımı yapmadan önce hem Letonya tarafındaki dağıtım sayılan
            işlemleri hem de Türkiye tarafındaki beyan etkisini birlikte
            planlamak, yanlış zamanlanmış bir temettünün maliyetini önler.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Beyan takvimi: Dağıtım olan aylarda kurumlar vergisi beyanı izleyen
          ayda verilir; dağıtım yoksa beyan yıllık rapor ile birlikte verilebilir.
          KDV beyanları aylık, düşük cirolu mükelleflerde üç aylık
          olabilir. Güncel gün ve eşikler VID takvimiyle doğrulanmalıdır.
        </p>
      </section>

      {/* 5. OTURUM */}
      <section id="oturum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vize ve Oturum İzni: Türk Vatandaşları İçin Noktalar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket kurmak oturum izni gerektirmez, ancak Letonya&apos;da bulunmak
          için Türk vatandaşları kısa süreli kalışlarda Schengen vizesine
          ihtiyaç duyar. Letonya&apos;da yaşamak ve şirketi yönetmek istiyorsanız,
          yatırımcı oturum izni gündeme gelir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🛂 Yatırımcı Oturum İzni (PMLP)
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Sermaye şirketine yatırım yoluyla ilk geçici oturum izni için
              devlet bütçesine <strong>10.000 euro</strong> ödenmesi ve ek
              olarak şirkete yatırım koşulu aranır.
            </li>
            <li>
              Çalışan sayısı en fazla 50 olan ve yıllık ciro veya bilanço
              toplamı 10 milyon euroyu aşmayan şirketlerde yatırım tutarı en az{" "}
              <strong>50.000 euro</strong>, daha büyük şirketlerde{" "}
              <strong>100.000 euro</strong> olarak belirlenmiştir.
            </li>
            <li>
              Oturum izni en fazla 5 yıl süreyle verilir ve yatırımcının
              onay sonrası üç ay içinde şirkette yönetim kurulu üyesi olarak
              kaydedilmesi gerekir.
            </li>
            <li>
              Göç mevzuatı sık değiştiği için başvurudan önce PMLP
              (Vatandaşlık ve Göç İşleri Ofisi) güncel şartlarını mutlaka
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
          Letonya bankaları kara para aklamayı önleme konusunda sıkı
          davranır. Türkiye&apos;den gelen ortaklı bir şirkette hesap açılışı,
          kuruluştan daha uzun sürebilir ve bankayı ikna edecek ticari
          gerekçe önemlidir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Hesap Açılışında Dikkat Edilecekler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>Faaliyet konusu, müşteri ve tedarikçi profili ve para akışı net tanımlanmalıdır.</li>
            <li>Gerçek faydalı sahip ve fon kaynağı belgelerle desteklenmelidir.</li>
            <li>Letonya ile gerçek bir ekonomik bağ (sözleşme, müşteri, ofis) hesap açılışını kolaylaştırır.</li>
            <li>Bankalar bazı durumlarda ortağın veya yöneticinin bizzat görüşmesini isteyebilir; politika bankadan bankaya değişir.</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kuruluştan sonra şirket, yıllık raporunu (finansal tablolar) VID&apos;in
          elektronik sistemi üzerinden verir; rapor Enterprise Register&apos;a
          da aktarılır. Standart olarak yıllık rapor mali yıl sonundan
          itibaren 4 ay içinde, orta ve büyük ölçekli şirketlerde 7 ay içinde
          verilir. Gerçek faydalı sahip bildirimi, yıllık uyum
          takviminin ayrı bir kalemidir.
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
                <td className="p-5 font-semibold">Devlet harcı: standart SIA (3 iş günü)</td>
                <td className="p-5">75 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Devlet harcı: standart SIA (1 iş günü)</td>
                <td className="p-5">225 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Devlet harcı: düşük sermayeli SIA (3 iş günü)</td>
                <td className="p-5">20 EUR</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Sermaye</td>
                <td className="p-5">1 EUR ile 2.800 EUR arası</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Bu tutarlara noter, apostil, yeminli tercüme, yasal adres ve
          profesyonel hizmet bedelleri dahil değildir; bunlar kapsama göre değişir.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">✅ Avantajlar</h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
              <li>Dağıtılmayan kârda vergi doğmaması</li>
              <li>Sembolik sermayeyle kuruluş imkânı</li>
              <li>AB pazarı, Schengen ve euro kullanımı</li>
              <li>Uzaktan ve elektronik kuruluş</li>
              <li>Yabancı ortaklığa kısıtlama olmaması</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">⚠️ Dezavantajlar</h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-600">
              <li>Dağıtımda efektif %25 yük</li>
              <li>Sıkı banka KYC süreci ve hesap açılış süresi</li>
              <li>Kuruluş belgelerinin Letonca hazırlanması</li>
              <li>Dağıtım sayılan kalemlerin yanlış yönetilmesi halinde beklenmedik vergi</li>
              <li>Göç mevzuatındaki sık değişiklikler</li>
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
          Letonya&apos;da şirket kurmak, Türkiye tarafında da bildirim
          yükümlülükleri doğurur. Buna karşılık Ticaret Bakanlığı&apos;nın yurt
          dışı birim, marka ve tanıtım desteklerinden yararlanmak mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Letonya&apos;da SIA kuruluşunu, sermaye ve belge hazırlığından
            Enterprise Register başvurusuna, banka hesabı açılış sürecine
            kadar baştan sona biz yürütüyoruz. Kuruluş sonrası muhasebe, KDV
            ve kurumlar vergisi beyanları ile raporlama hizmetinizi de
            ayrı bir yerel firma aramanıza gerek kalmadan biz sağlıyoruz.
            Şirketinizin Letonya yapılanmasını ve kâr dağıtım planınızı
            birlikte değerlendirelim.{" "}
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
            <li>Letonya&apos;da açılan ofis, depo, showroom veya mağaza giderleri için Ticaret Bakanlığı destekleri kapsamında kira desteği söz konusu olabilir.</li>
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
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Standart (2.800 EUR) ve düşük sermayeli SIA arasında kâr dağıtım planınıza göre seçim yapın</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Dağıtım sayılan işlemleri (işletme dışı gider, ilişkili taraf borcu) takip edin</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Gerçek faydalı sahip değişikliklerini 14 gün içinde bildirin</div>
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
          Letonya, kâr dağıtılana kadar vergi ödemeyen sistemi, uzaktan
          yapılabilen kuruluşu, euro ve Schengen üyeliği ile büyüme
          odaklı şirketler için güçlü bir seçenektir. Doğru sermaye
          seçimi, dağıtım stratejisi ve banka sürecinin gerçekçi
          planlanması başarıyı belirler. Şirketinizin Letonya yapılanmasının
          uygunluğunu birlikte değerlendirmek için{" "}
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
          <li><a href="https://www.ur.gov.lv/en/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Letonya Enterprise Register (ur.gov.lv)</a></li>
          <li><a href="https://www.ur.gov.lv/en/register/company-or-merchant/llc-with-no-min-capital-requirement/changes/beneficial-owners/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Enterprise Register: gerçek faydalı sahip bildirimi</a></li>
          <li><a href="https://www.vid.gov.lv/en" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Letonya Devlet Gelir Servisi (VID)</a></li>
          <li><a href="https://www.vid.gov.lv/en/annual-financial-statements" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">VID: yıllık finansal tablo yükümlülüğü</a></li>
          <li><a href="https://www.pmlp.gov.lv/en/how-long-may-residence-permit-be-issued" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">PMLP: oturum izni türleri ve yatırımcı şartları</a></li>
          <li><a href="https://www.liaa.gov.lv/en/media/9129/download" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">LIAA (Letonya Yatırım ve Kalkınma Ajansı): şirket kuruluşu bilgi notu</a></li>
          <li><a href="https://investinlatvia.org/assets/upload/Latvian%20Tax%20System%20Overview%202026%20(1).pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Invest in Latvia: Letonya vergi sistemi 2026 özeti</a></li>
          <li><a href="https://taxsummaries.pwc.com/latvia/corporate/taxes-on-corporate-income" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">PwC Worldwide Tax Summaries: Letonya kurumlar vergisi (ikincil kaynak)</a></li>
          <li><a href="https://ticaret.gov.tr/destekler/ihracat-destekleri/yurtdisi-birim-marka-ve-tanitim-destegi" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">T.C. Ticaret Bakanlığı: yurt dışı birim, marka ve tanıtım desteği</a></li>
        </ul>
        <p className="mt-6 text-sm leading-7 text-gray-500">
          Bu yazı bilgilendirme amaçlıdır; kişiye özel hukuki veya vergisel
          görüş niteliği taşımaz. Oranlar ve eşikler 7 Ekim 2026 itibarıyla
          derlenmiştir, uygulama öncesi resmî kaynaklardan doğrulanmalıdır.
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
            href="/blog/bulgaristanda-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • BULGARİSTAN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Bulgaristan&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
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
