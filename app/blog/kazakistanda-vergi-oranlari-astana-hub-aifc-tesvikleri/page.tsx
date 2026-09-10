import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Kazakistan'da Vergi Oranları 2026: AIFC ve Astana Hub Teşvikleri | Koray Akdağ",
  description:
    "2026 Kazakistan vergi reformu, %16'ya çıkan KDV, %20 kurumlar vergisi, temettü stopajı, AIFC'nin 2066'ya kadar muafiyeti ve Astana Hub'ın %0 vergi rejimi. Sayısal karşılaştırmalı rehber.",
  keywords: [
    "kazakistan vergi oranları 2026",
    "kazakistan yeni vergi kanunu",
    "kazakistan kdv oranı 16",
    "astana hub vergi muafiyeti",
    "aifc vergi avantajları",
    "kazakistan kurumlar vergisi",
    "kazakistan temettü stopajı",
    "türkiye kazakistan çifte vergilendirme anlaşması",
    "kontrol edilen yabancı kurum kazancı kazakistan",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Kazakistan'da Vergi Oranları, 2026 Vergi Reformu, AIFC ve Astana Hub Teşvikleri"
      description="1 Ocak 2026'da yürürlüğe giren yeni Vergi Kanunu ile KDV %16'ya çıktı, kayıt eşiği yarıya indi ve sektörel kurumlar vergisi oranları yeniden düzenlendi. AIFC'nin 2066'ya kadar uzanan muafiyeti, Astana Hub'ın 2029'a kadar geçerli %0 rejimi, temettü stopajı, çifte vergilendirme anlaşması ve Türkiye'deki kontrol edilen yabancı kurum kuralıyla sayısal karşılaştırmalı rehber."
      category="YURT DIŞI ŞİRKET • KAZAKİSTAN • VERGİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kazakistanda-vergi-oranlari-astana-hub-aifc-tesvikleri"
      ctaHeading="Kazakistan'da Şirket Kuruluşu İçin Destek Alın"
      ctaText="TOO mu AIFC mi, vergi kurgusu, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülükler. Kazakistan'da yapılanma sürecinizi baştan sona yönetiyoruz. İş modelinize uygun yapıyı birlikte belirleyelim."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kazakistan, 1 Ocak 2026&apos;dan itibaren bağımsızlık
          döneminin en kapsamlı vergi reformlarından birini yürürlüğe
          koydu. Yeni Vergi Kanunu yalnızca oranları değiştirmedi;
          KDV mükellefiyet eşiğini yarıya indirdi, sektörel kurumlar
          vergisi oranları getirdi, temettü stopajını kademelendirdi ve
          teşvik rejimlerini daraltarak yeniden tanımladı. Kazakistan&apos;a
          bakan bir Türk şirketi için asıl soru artık &quot;vergi kaç
          puan?&quot; değil, &quot;hangi yapı altında, hangi gelir kalemi,
          hangi oranda vergileniyor?&quot; sorusudur.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ 2026 reformunun getirdiği somut değişiklikler ve yürürlük tarihleri</li>
          <li>✔ Kurumlar vergisi, KDV, gelir vergisi, stopaj ve işveren yüklerinin tam tablosu</li>
          <li>✔ AIFC&apos;nin 2066&apos;ya kadar uzanan muafiyet rejiminin gerçek kapsamı</li>
          <li>✔ Astana Hub&apos;ın yazılım şirketlerine sunduğu %0 rejimi ve 2029 sınırı</li>
          <li>✔ Aynı kazanç üzerinden TOO, AIFC ve Astana Hub vergi yükü karşılaştırması</li>
          <li>✔ Türkiye&apos;deki kontrol edilen yabancı kurum kuralının bu yapıları nasıl etkilediği</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#reform"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. 2026 Vergi Reformu: Ne Değişti?
          </Link>
          <Link
            href="#oranlar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. Güncel Vergi Oranları Tablosu
          </Link>
          <Link
            href="#kdv"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. KDV: %16 Oran ve Yarıya İnen Eşik
          </Link>
          <Link
            href="#temettu"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            4. Temettü, Stopaj ve Kâr Transferi
          </Link>
          <Link
            href="#aifc"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            5. AIFC: 2066&apos;ya Kadar Muafiyet
          </Link>
          <Link
            href="#astana-hub"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Astana Hub: Teknoloji Şirketleri İçin %0
          </Link>
          <Link
            href="#karsilastirma"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. AIFC mi, Astana Hub mı?
          </Link>
          <Link
            href="#oeb"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            8. Özel Ekonomik Bölgeler ve Yatırım Sözleşmeleri
          </Link>
          <Link
            href="#cvoa"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            9. Türkiye-Kazakistan Vergi Anlaşması
          </Link>
          <Link
            href="#ornek"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            10. Sayısal Örnek: Üç Yapının Vergi Yükü
          </Link>
          <Link
            href="#turkiye"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            11. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link
            href="#hatalar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            12. Sık Yapılan Hatalar
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            13. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. REFORM */}
      <section id="reform" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. 2026 Vergi Reformu: Ne Değişti?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kazakistan Cumhurbaşkanı Kasım Cömert Tokayev tarafından
          18 Temmuz 2025&apos;te imzalanan yeni Vergi Kanunu,
          1 Ocak 2026 itibarıyla yürürlüğe girdi. Reformun açıklanan
          amacı, vergi tabanını genişletmek, teşvikleri sadeleştirmek ve
          bütçe gelirlerini artırmaktı. Uygulamadaki karşılığı ise şu
          oldu: dolaylı vergi yükü arttı, teşvikler daraldı ve
          teşvikten yararlanma şartları çok daha somut kriterlere
          bağlandı.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              KDV oranı %12&apos;den %16&apos;ya çıktı
            </h3>
            <p className="leading-8 text-gray-700">
              Standart KDV oranı dört puan artarak %16 oldu. İlaç, tıbbi
              cihaz ve lisanslı sağlık hizmetlerinde 2026 için %5,
              2027&apos;den itibaren %10 indirimli oran uygulanıyor. Yurt
              içinde üretilen süreli yayınlarda oran %10, ihracatta ise
              %0 olarak korundu.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              KDV kayıt eşiği yarı yarıya indi
            </h3>
            <p className="leading-8 text-gray-700">
              Zorunlu KDV mükellefiyet eşiği 20.000 AHE&apos;den 10.000
              AHE&apos;ye düşürüldü. 2026 için Aylık Hesaplama Endeksi
              (AHE) 4.325 tenge olduğundan, eşik yaklaşık 43,25 milyon
              tengeye karşılık geliyor. 2025&apos;te bu eşik 78,6 milyon
              tenge civarındaydı.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Sektörel kurumlar vergisi oranları geldi
            </h3>
            <p className="leading-8 text-gray-700">
              Standart oran %20&apos;de kaldı; ancak bankacılık (KOBİ
              kredilendirmesi hariç) ve kumar faaliyetleri için oran
              %25&apos;e çıkarıldı. Eğitim ve sağlık gibi sosyal alan
              kuruluşlarında 2026 için %5, 2027&apos;den itibaren %10,
              tarımsal üretim ve su ürünleri yetiştiriciliğinde ise %3
              oran uygulanıyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Gelir vergisi artan oranlı hale geldi
            </h3>
            <p className="leading-8 text-gray-700">
              Uzun yıllar tek oranlı (%10) uygulanan bireysel gelir
              vergisi artan oranlı yapıya geçti. Yıllık 8.500 AHE&apos;ye
              (2026 için yaklaşık 36,76 milyon tenge) kadar olan kısım
              %10, bu tutarı aşan kısım %15 oranında vergileniyor. Aylık
              temel indirim de 30 AHE&apos;ye yükseltildi.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Reformun az konuşulan ama şirketler açısından en kritik
            tarafı, özel vergi rejimlerinin yediden üçe indirilmesi ve
            44 faaliyet türünün basitleştirilmiş beyan rejiminden
            çıkarılması oldu. Kazakistan&apos;da küçük ölçekli bir
            yapıyla başlamayı planlıyorsanız, faaliyet kodunuzun bu
            listede olup olmadığı doğrudan vergi yükünüzü belirler.
          </p>
        </div>
      </section>

      {/* 2. ORANLAR */}
      <section id="oranlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kazakistan&apos;da Güncel Vergi Oranları (2026)
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Vergi Türü</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar vergisi (standart)</td>
                <td className="p-5 font-bold text-orange-600">%20</td>
                <td className="p-5">TOO ve AO dahil tüm mukim şirketler için genel oran</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar vergisi (banka ve kumar)</td>
                <td className="p-5">%25</td>
                <td className="p-5">Bankaların ticari kredilendirme geliri %20&apos;de kaldı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar vergisi (sosyal alan)</td>
                <td className="p-5">%5 (2026)</td>
                <td className="p-5">Eğitim ve sağlık kuruluşları; 2027&apos;den itibaren %10</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar vergisi (tarım)</td>
                <td className="p-5">%3</td>
                <td className="p-5">Tarımsal üretim ve su ürünleri yetiştiriciliği</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV</td>
                <td className="p-5 font-bold text-orange-600">%16</td>
                <td className="p-5">1 Ocak 2026&apos;dan itibaren; ilaç ve sağlık hizmetlerinde %5, ihracatta %0</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Bireysel gelir vergisi</td>
                <td className="p-5">%10 / %15</td>
                <td className="p-5">Yıllık 8.500 AHE&apos;ye kadar %10, aşan kısım %15</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Temettü stopajı (yerleşik olmayan)</td>
                <td className="p-5">%15</td>
                <td className="p-5">%25 ve üzeri pay sahipliğinde 230.000 AHE&apos;ye kadar %5; kara listedeki ülkelere %20</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Faiz stopajı</td>
                <td className="p-5">%10</td>
                <td className="p-5">Kredi, borçlanma ve borçlanma araçları faizi</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Gayrimaddi hak (royalty) stopajı</td>
                <td className="p-5">%15</td>
                <td className="p-5">Lisans, marka ve know-how ödemeleri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hizmet bedeli stopajı</td>
                <td className="p-5">%20</td>
                <td className="p-5">Yönetim, danışmanlık, mühendislik, pazarlama, denetim ve hukuk hizmetleri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Emlak vergisi (tüzel kişi)</td>
                <td className="p-5">%1,5</td>
                <td className="p-5">Taşınmazın ortalama net defter değeri üzerinden</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Arazi vergisi</td>
                <td className="p-5">Değişken</td>
                <td className="p-5">Arazinin kullanım amacı, büyüklüğü ve kalite sınıfına göre belirlenir</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          2.1. İşveren Üzerindeki Sosyal Güvenlik Yükleri (2026)
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Kazakistan&apos;da 2026 için asgari ücret 85.000 tenge, Aylık
          Hesaplama Endeksi 4.325 tenge olarak belirlendi. Bordro
          maliyetini hesaplarken aşağıdaki kalemleri birlikte
          değerlendirmek gerekir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Kimin Üzerinde</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Zorunlu emeklilik katkısı (OPV)</td>
                <td className="p-5">%10</td>
                <td className="p-5">Çalışan (ücretten kesilir, 50 asgari ücret tavanı)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Zorunlu sağlık sigortası katkısı (VOSMS)</td>
                <td className="p-5">%2</td>
                <td className="p-5">Çalışan (20 asgari ücret tavanı)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sosyal vergi</td>
                <td className="p-5">%6</td>
                <td className="p-5">İşveren (ödenen sosyal katkı payı kadar mahsup edilir)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sosyal katkı payı</td>
                <td className="p-5">%5</td>
                <td className="p-5">İşveren (7 asgari ücret tavanı)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İşveren sağlık sigortası payı (OOSMS)</td>
                <td className="p-5">%3</td>
                <td className="p-5">İşveren</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">İşveren emeklilik katkısı (OPVR)</td>
                <td className="p-5">%3,5</td>
                <td className="p-5">İşveren (1 Ocak 2026&apos;dan itibaren geçerli oran)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          İşveren emeklilik katkısı kademeli olarak artan bir kalem
          olduğundan, çok yıllı bordro bütçesi kurarken sabit oran
          varsaymak yanıltıcı olur. Personel maliyetini hesaplarken bu
          oranın ilerleyen yıllarda yükselmeye devam edeceğini
          öngörmek gerekir.
        </p>
      </section>

      {/* 3. KDV */}
      <section id="kdv" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. KDV: %16 Oran ve Yarıya İnen Kayıt Eşiği
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2026 reformunun şirketleri en doğrudan etkileyen tarafı KDV.
          Oranın %12&apos;den %16&apos;ya çıkması fiyatlama üzerinde
          dört puanlık bir baskı yaratırken, eşiğin 20.000 AHE&apos;den
          10.000 AHE&apos;ye inmesi, önceki yıl KDV mükellefi olmayan
          birçok orta ölçekli şirketi mükellefiyet kapsamına aldı.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            📋 KDV Mükellefiyetinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Zorunlu kayıt eşiği takvim yılı içinde 10.000 AHE
              (2026 için yaklaşık 43,25 milyon tenge) cirosunun
              aşılmasıyla doğar. Eşik aşıldıktan sonra başvurunun
              <strong> 5 iş günü içinde</strong> yapılması gerekir.
            </li>
            <li>
              Tek bir işlemle eşiğin aşılacağı öngörülüyorsa, başvurunun
              o işleme ilişkin teslim gerçekleşmeden önce yapılması
              gerekir. Bu ayrıntı, tek büyük sözleşmeyle Kazakistan
              pazarına giren şirketlerin en sık atladığı noktadır.
            </li>
            <li>
              Elektronik fatura (ESF) düzenleme yükümlülüğü, teslim
              tarihinden önce olmamak ve teslimden itibaren 15 takvim
              gününü geçmemek kaydıyla yerine getirilir.
            </li>
            <li>
              İhracatçılar için hızlandırılmış iade imkânı mevcuttur:
              sıfır oranlı teslimleri toplam vergiye tabi cironun en az
              %50&apos;sini oluşturan mükellefler, denetim olmaksızın
              15 iş günü içinde iade alabilir.
            </li>
            <li>
              Avrasya Ekonomik Birliği içi teslimlerde KDV, varış
              ülkesi prensibine göre uygulanır. Rusya veya Kırgızistan&apos;a
              satış yapan bir Kazakistan şirketi için ithalat KDV&apos;si
              ve beyan yükümlülüğü alıcı ülkede doğar.
            </li>
          </ul>
        </div>
      </section>

      {/* 4. TEMETTÜ */}
      <section id="temettu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Temettü, Stopaj ve Yabancı Ortağa Kâr Transferi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kazakistan&apos;da kazancın vergilenmesi kurumlar vergisiyle
          bitmiyor. Kârın Türkiye&apos;deki ortağa aktarılması aşamasında
          ikinci bir katman devreye giriyor ve toplam yük asıl burada
          belirleniyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-7">
            <h3 className="mb-4 text-xl font-bold text-green-700">
              Temettü İstisnasının Dört Şartı
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Yerleşik olmayan tüzel kişilere dağıtılan temettülerde
              stopaj istisnası, aşağıdaki şartların <strong>birlikte</strong>
              {" "}sağlanmasına bağlıdır:
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
              <li>Pay veya hissenin elde tutma süresinin 3 yılı aşması</li>
              <li>Temettüyü dağıtan şirketin yer altı kaynakları kullanıcısı olmaması</li>
              <li>Dağıtan şirketin değerinin %50 veya daha fazlasının yer altı kaynağı varlıklarından oluşmaması</li>
              <li>Ödemenin kara listedeki bir yargı alanında kayıtlı kişiye yapılmaması</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-7">
            <h3 className="mb-4 text-xl font-bold text-red-700">
              2026&apos;da Dikkat Edilecek Yenilikler
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
              <li>
                Kazakistan şirketlerindeki pay satışlarında 3 yıldan
                uzun elde tutmaya bağlı <strong>değer artış kazancı
                istisnası kaldırıldı</strong>. Çıkış (exit) planlaması
                yapanlar için bu, doğrudan maliyet doğuran bir
                değişikliktir.
              </li>
              <li>
                Kanuna &quot;örtülü kâr dağıtımı&quot; kavramı girdi.
                Ortağa yapılan piyasa dışı ödemeler temettü sayılıp
                stopaja tabi tutulabilir.
              </li>
              <li>
                %25 ve üzeri pay sahibi yabancı ortaklar için indirimli
                %5 oran, dağıtılan temettünün 230.000 AHE&apos;yi aşmayan
                kısmıyla sınırlıdır; aşan kısma %15 uygulanır.
              </li>
              <li>
                Vergi anlaşması hükümleri, vergi sorumlusunun stopajı
                yerleşik olmayanın gelirinden kesmeyip kendi kaynağından
                ödemesi halinde uygulanamaz.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. AIFC */}
      <section id="aifc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. AIFC: 2066&apos;ya Kadar Uzanan Muafiyet Rejimi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Astana Uluslararası Finans Merkezi (AIFC), Kazakistan
          Anayasası&apos;na dayanan özel bir statüye sahip. Kendi
          düzenleyici otoritesi (AFSA), İngiliz common law esasına
          dayanan kendi hukuk sistemi, kendi mahkemesi (AIFC Court) ve
          uluslararası tahkim merkezi (IAC) bulunuyor. Mahkemenin
          İngiliz ve diğer common law yargı alanlarından gelen
          hâkimlerle çalışması, sözleşmesel uyuşmazlıklarda yabancı
          yatırımcıya tanıdık bir güvence sunuyor. Türkçesi şu:
          Kazakistan&apos;da faaliyet gösteriyorsunuz ama ticari
          uyuşmazlığınız Kazakistan genel mahkemelerinde değil, ayrı bir
          sistemde görülüyor.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 AIFC Katılımcılarına Tanınan Muafiyetler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              <strong>Kurumlar vergisi:</strong> AFSA tarafından
              lisanslanmış finansal hizmet faaliyetlerinden elde edilen
              gelir 1 Ocak 2066&apos;ya kadar %0 oranına tabidir.
            </li>
            <li>
              <strong>KDV:</strong> AIFC katılımcılarının sunduğu
              finansal hizmetler KDV&apos;den muaftır.
            </li>
            <li>
              <strong>Temettü ve değer artışı:</strong> AIFC
              katılımcılarının dağıttığı temettüler ile AIX borsasında
              işlem gören menkul kıymetlerin satışından doğan kazançlar
              muafiyet kapsamındadır.
            </li>
            <li>
              <strong>Yabancı personel geliri:</strong> AIFC kaynaklı
              ücret ve ikramiyeler için yabancı çalışanlara bireysel
              gelir vergisi muafiyeti uygulanır.
            </li>
            <li>
              <strong>Emlak ve arazi vergisi:</strong> AIFC sınırları
              içindeki taşınmazlar bu vergilerden muaftır.
            </li>
            <li>
              <strong>Vize ve çalışma izni:</strong> AIFC bünyesindeki
              yabancı çalışanlar 5 yıla kadar çok girişli vize
              alabiliyor; ayrıca çalışma izni alınması gerekmiyor.
            </li>
          </ul>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          5.1. Muafiyet Kapsamı Sanıldığından Dar
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          AIFC&apos;nin %0 oranı, &quot;AIFC&apos;de kurulan her şirket
          vergi ödemez&quot; anlamına gelmiyor. Muafiyet iki ana kümede
          tanımlanmış durumda:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">
              Finansal hizmetler
            </h4>
            <p className="leading-8 text-gray-700">
              Bankacılık (konvansiyonel ve katılım), sigorta ve
              reasürans, menkul kıymet aracılığı ve alım satımı, varlık
              yönetimi, yatırım danışmanlığı, aracılık yüklenimi ve fon
              yönetimi gibi AFSA lisansına bağlı faaliyetler.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">
              Yardımcı hizmetler (ancillary services)
            </h4>
            <p className="leading-8 text-gray-700">
              Sınırlı ve sayılı bir liste: hukuki hizmetler, denetim
              hizmetleri, muhasebe hizmetleri, belirli bir konuda uzman
              görüşü veya danışmanlık, kredi skorlama. Bu hizmetlerin
              muafiyet kapsamına girmesi için AIFC organlarına veya
              finansal hizmet sunan AIFC katılımcılarına verilmiş olması
              gerekir.
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            Buradaki incelik kritik: yardımcı hizmet muafiyeti,
            hizmetin <strong>kime verildiğine</strong> bağlıdır.
            AIFC&apos;de kurulmuş bir danışmanlık şirketinin AIFC dışındaki
            Kazakistan müşterilerine veya üçüncü ülkelere verdiği
            hizmetten elde ettiği gelir bu kapsamda değerlendirilmez ve
            standart oranlara tabi olabilir. Ayrıca tüm AIFC şirketleri
            Kazakistan vergi mukimi sayılır; muafiyet, mukimlikten değil
            faaliyetin niteliğinden doğar. Yeni Vergi Kanunu&apos;nun
            teşvikleri en az %20 oranında daraltma ve net kriterlere
            bağlama hedefi de dikkate alınarak, kayıt öncesinde
            faaliyetin muafiyet listesindeki karşılığı somut olarak
            teyit edilmelidir.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          <strong>Kuruluş süresi ve maliyeti:</strong> AFSA lisans
          süreci, yardımcı hizmet başvurularında yaklaşık 1 ay, finansal
          faaliyet lisanslarında 2-3 ay sürebiliyor; hazırlık dahil
          toplam süreç genellikle 2-4 aya yayılıyor. Başvuru ücretleri
          faaliyet türüne göre belirgin biçimde ayrışıyor: yardımcı
          hizmetlerde 2.000 ABD Doları civarındayken, mevduat kabulü
          içeren bankacılık lisansında 15.000 ABD Doları, dijital varlık
          işlem platformlarında ise 70.000 ABD Doları seviyesine
          çıkabiliyor. Bu tutarlar yalnızca başvuru ücretidir; sermaye
          yeterliliği, iç kontrol, AML prosedürleri ve nitelikli yönetici
          şartları ayrıca değerlendirilir.
        </p>
      </section>

      {/* 6. ASTANA HUB */}
      <section id="astana-hub" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Astana Hub: Teknoloji Şirketleri İçin %0 Rejimi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Astana Hub, Kazakistan&apos;ın uluslararası teknoloji parkı ve
          yazılım şirketleri için bölgenin en agresif teşvik
          rejimlerinden birini sunuyor. AIFC&apos;den farkı şu: AIFC
          finansal hizmetler için, Astana Hub ise bilişim faaliyetleri
          için tasarlanmıştır ve şirketin AIFC yargı alanında kurulması
          gerekmez, standart Kazakistan hukuku altındaki bir TOO da
          katılımcı olabilir.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Astana Hub Katılımcılarının Vergi Avantajları
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>Bilişim (informatizasyon) hizmetlerinden elde edilen gelirde kurumlar vergisinde %100 indirim</li>
            <li>Yurt içi teslimlerde KDV muafiyeti</li>
            <li>Yabancı çalışanlar için sosyal vergi muafiyeti ve indirimli bireysel gelir vergisi</li>
            <li>Gayrimaddi hak (royalty) ödemelerinde stopaj avantajı</li>
            <li>
              Belirlenen listedeki bilişim donanımı ithalatında KDV
              muafiyeti. Yapay Zekâ ve Dijital Gelişim Bakanlığı&apos;nın
              2 Haziran 2026 tarihli 281/НK sayılı emriyle, bilgisayar
              donanımı, elektronik bileşenler ve veri depolama cihazlarını
              kapsayan 41 ürün grubu GTİP kodlarıyla belirlendi.
            </li>
          </ul>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          6.1. Kimler Katılabilir, Hangi Faaliyetler Uygundur?
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Astana Hub&apos;ın temel eşiği, cironun en az <strong>%90&apos;ının
          uygun bilişim faaliyetlerinden</strong> elde edilmesidir.
          Yazılım geliştirme, yapay zekâ ve makine öğrenmesi, siber
          güvenlik, fintech, edtech, oyun geliştirme, blokzincir, bulut
          bilişim, nesnelerin interneti ve coğrafi bilgi sistemleri gibi
          alanlar uygun faaliyet listesinde yer alıyor. Bilişim dışı
          gelirler standart oranlarda vergilenmeye devam ediyor.
        </p>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-7">
          <h4 className="mb-4 text-lg font-bold text-red-700">
            Katılım engelleri
          </h4>
          <p className="leading-8 text-gray-700">
            Sermayesinin %50 veya fazlası devlete ait şirketler, yer
            altı kaynakları çıkarma faaliyetinde bulunanlar, başka bir
            özel ekonomik bölgenin katılımcısı olanlar ve bilişim geliri
            %90 eşiğinin altında kalanlar Astana Hub statüsünden
            yararlanamaz.
          </p>
        </div>

        <h3 className="mb-8 mt-14 text-2xl font-bold text-[#071A2F]">
          6.2. Başvuru Süreci
        </h3>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h4 className="text-lg font-bold">Online Kayıt ve Başvuru Formu</h4>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h4 className="text-lg font-bold">Proje ve Belge Yüklemesi</h4>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h4 className="text-lg font-bold">Astana Hub Ön Değerlendirmesi</h4>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h4 className="text-lg font-bold">Devlet Komisyonu Onayı</h4>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kayıt ücretsizdir ve süreç genellikle 15 iş günü civarında
          tamamlanır. Ancak asıl yük başvuruda değil, sonrasındadır:
          katılımcının %90 bilişim geliri şartını sözleşmeler ve banka
          hareketleriyle her yıl belgelemesi gerekir.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h4 className="mb-4 text-xl font-bold text-[#071A2F]">
            2026&apos;da sertleşen şart: personel ve kaynak yeterliliği
          </h4>
          <p className="leading-8 text-gray-700">
            Yeni Vergi Kanunu&apos;nun 739, 740 ve 741. maddeleri
            kapsamında, bilişim hizmetleri gelirinde kurumlar vergisi
            indiriminden yararlanmak isteyen Astana Hub katılımcıları,
            yeterli sayıda ve nitelikte personele ve kaynağa sahip
            olduklarını Astana Hub&apos;dan alınacak yıllık teyitle
            belgelemek zorunda. Beyan edilen göstergelerle fiili
            göstergeler arasında en fazla %20 sapmaya izin veriliyor.
            İlgili kurallar, Yapay Zekâ ve Dijital Gelişim Bakanlığı&apos;nın
            27 Kasım 2025 tarihli emriyle onaylandı ve 1 Ocak 2026&apos;da
            yürürlüğe girdi. Kısacası &quot;kâğıt üzerinde Astana Hub
            katılımcısı olmak&quot; artık yeterli değil.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Kritik tarih:</strong> Astana Hub vergi ayrıcalıkları
            mevcut düzenlemeye göre <strong>1 Ocak 2029&apos;a
            kadar</strong> geçerli. Uzatılacağına dair bir garanti
            bulunmuyor. Beş yıllık bir yapılanma kararı verirken bu
            tarihi bir varsayım değil, planlanması gereken bir kırılma
            noktası olarak ele almak gerekir.
          </p>
        </div>
      </section>

      {/* 7. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. AIFC mi, Astana Hub mı? Hangi İş Modeline Hangisi Uygun?
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">AIFC</th>
                <th className="p-5">Astana Hub</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hedef faaliyet</td>
                <td className="p-5">Finansal hizmetler, fon ve varlık yönetimi, holding, fintech lisansı</td>
                <td className="p-5">Yazılım, yapay zekâ, siber güvenlik, oyun, bilişim hizmetleri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hukuk sistemi</td>
                <td className="p-5">İngiliz common law esaslı, ayrı mahkeme ve tahkim</td>
                <td className="p-5">Kazakistan hukuku (şirket standart TOO olarak kurulabilir)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Muafiyet süresi</td>
                <td className="p-5 font-bold text-green-700">1 Ocak 2066&apos;ya kadar</td>
                <td className="p-5 font-bold text-orange-600">1 Ocak 2029&apos;a kadar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Giriş maliyeti</td>
                <td className="p-5">Yardımcı hizmetlerde 2.000 USD&apos;den başlayan lisans ücretleri, finansal lisanslarda çok daha yüksek</td>
                <td className="p-5">Kayıt ücretsiz, temel maliyet muhasebe ve raporlama</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Süreç</td>
                <td className="p-5">1-3 ay lisans süreci, hazırlıkla 2-4 ay</td>
                <td className="p-5">Yaklaşık 15 iş günü</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Temel şart</td>
                <td className="p-5">Faaliyetin lisanslı finansal veya sayılı yardımcı hizmet listesinde olması</td>
                <td className="p-5">Cironun en az %90&apos;ının uygun bilişim faaliyetinden gelmesi</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kimin için</td>
                <td className="p-5">Fon, holding, yatırım ve finans yapıları kuran, common law güvencesi arayan yatırımcı</td>
                <td className="p-5">Yurt dışına yazılım ve bilişim hizmeti satan teknoloji şirketi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Pratik ayrım şu: yazılım geliştiren ve hizmet ihraç eden bir
          teknoloji şirketi için Astana Hub hem hızlı hem düşük maliyetli
          bir giriş sunar. Buna karşılık uluslararası bir holding, fon
          veya finansal hizmet yapısı kuruyorsanız, 2066&apos;ya uzanan
          süre ve ayrı hukuk sistemiyle AIFC daha güçlü bir zemindir.
          Sadece &quot;vergi sıfır&quot; olduğu için AIFC&apos;yi seçmek,
          faaliyetiniz muafiyet listesine girmiyorsa maliyeti olan ama
          faydası olmayan bir yapı doğurur.
        </p>
      </section>

      {/* 8. ÖEB */}
      <section id="oeb" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Özel Ekonomik Bölgeler ve Yatırım Sözleşmeleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Üretim yatırımı yapacak şirketler için asıl teşvik kanalı AIFC
          veya Astana Hub değil, Özel Ekonomik Bölgeler (ÖEB) ve yatırım
          sözleşmeleridir. Kazakistan genelinde farklı sektörlere
          odaklanmış çok sayıda ÖEB bulunuyor ve yeni bölgeler açılmaya
          devam ediyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              🏭 ÖEB Katılımcısı Avantajları
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Öncelikli faaliyetlerden elde edilen gelirde kurumlar vergisinde %100 indirim</li>
              <li>Arazi vergisi ve emlak vergisi muafiyeti</li>
              <li>Bölge içinde satılan ve öncelikli faaliyette tamamen kullanılan mallarda %0 KDV</li>
              <li>Gümrük kolaylıkları ve serbest gümrük bölgesi rejimi</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              📄 Yatırım Sözleşmesi Kapsamındaki Tercihler
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Gümrük vergisi ve ithalat KDV&apos;si muafiyeti (belirli sınırlarla)</li>
              <li>Ayni devlet hibeleri</li>
              <li>
                Girişimcilik Kanunu kapsamındaki &quot;yatırım
                yükümlülükleri anlaşması&quot; ile belirli taahhütler
                karşılığında 10 yıla kadar istikrarlı vergi rejimi
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            2026&apos;dan itibaren yatırım sözleşmelerinde performans
            denetimi sertleştirildi. Taahhüt edilen yükümlülüklerin
            ihlali, sözleşmenin tek taraflı feshine ve daha önce
            yararlanılan vergi avantajlarının cezalarıyla birlikte geri
            istenmesine yol açabiliyor. Yatırım taahhüdü verirken
            gerçekçi olmak, teşvik tutarını maksimize etmekten daha
            önemli hale geldi.
          </p>
        </div>
      </section>

      {/* 9. ÇVÖA */}
      <section id="cvoa" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Türkiye-Kazakistan Çifte Vergilendirmeyi Önleme Anlaşması
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye ile Kazakistan arasındaki Çifte Vergilendirmeyi Önleme
          Anlaşması 1995&apos;te imzalandı ve 1996&apos;dan bu yana
          yürürlükte. Anlaşmanın pratik değeri, Kazakistan&apos;ın iç
          mevzuatındaki stopaj oranlarını Türk mukimleri için aşağı
          çekmesinde ortaya çıkıyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Gelir Türü</th>
                <th className="p-5">Kazakistan İç Mevzuatı</th>
                <th className="p-5">Anlaşma (Türkiye)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Temettü</td>
                <td className="p-5">%15 (şartlı %5 veya istisna)</td>
                <td className="p-5 font-bold text-green-700">%10</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Faiz</td>
                <td className="p-5">%10</td>
                <td className="p-5 font-bold text-green-700">%10</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Gayrimaddi hak bedeli</td>
                <td className="p-5">%15</td>
                <td className="p-5 font-bold text-green-700">%10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-yellow-800">
            ⚠️ Anlaşmanın Uygulanması İçin Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-yellow-600">
            <li>
              Türkiye&apos;den alınacak <strong>mukimlik belgesinin</strong>
              {" "}Kazakistan&apos;daki ödemeyi yapan tarafa süresinde
              ibraz edilmesi gerekir. Belge olmadan iç mevzuattaki daha
              yüksek oran uygulanır.
            </li>
            <li>
              Pasif gelirlerde <strong>gerçek lehtar (beneficial owner)</strong>
              {" "}teyidi ve işyeri durumunun belgelenmesi aranıyor.
              Çok Taraflı Sözleşme (MLI) uygulamasına ilişkin çerçeve de
              yeni Vergi Kanunu&apos;nun genel hükümlerine taşındı.
            </li>
            <li>
              Anlaşmanın en pahalı unsuru genellikle temettü değil,
              hizmet bedelleridir. Türkiye&apos;den Kazakistan&apos;daki
              iştirakine yönetim, danışmanlık veya mühendislik hizmeti
              faturalayan şirketlerde iç mevzuata göre %20 stopaj
              gündeme gelebilir. Bu tür ödemelerde anlaşmanın ticari
              kazanç ve işyeri maddelerinin uygulanabilirliği ayrıca
              değerlendirilmelidir.
            </li>
          </ul>
        </div>
      </section>

      {/* 10. SAYISAL ÖRNEK */}
      <section id="ornek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sayısal Örnek: Aynı Kazanç, Üç Farklı Yapı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kazakistan&apos;da yıllık <strong>100 milyon tenge</strong> vergi
          öncesi kazanç elde eden ve kârın tamamını Türkiye&apos;deki ana
          ortağına dağıtan bir şirketi ele alalım. Üç yapı altında
          Kazakistan&apos;da doğan toplam vergi yükü şöyle ayrışır
          (temettüde anlaşmanın %10 oranı esas alınmıştır):
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Standart TOO</th>
                <th className="p-5">AIFC (nitelikli faaliyet)</th>
                <th className="p-5">Astana Hub</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Vergi öncesi kazanç</td>
                <td className="p-5">100.000.000 ₸</td>
                <td className="p-5">100.000.000 ₸</td>
                <td className="p-5">100.000.000 ₸</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar vergisi</td>
                <td className="p-5">%20 = 20.000.000 ₸</td>
                <td className="p-5">%0 = 0 ₸</td>
                <td className="p-5">%0 = 0 ₸</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Dağıtılabilir kâr</td>
                <td className="p-5">80.000.000 ₸</td>
                <td className="p-5">100.000.000 ₸</td>
                <td className="p-5">100.000.000 ₸</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Temettü stopajı</td>
                <td className="p-5">%10 = 8.000.000 ₸</td>
                <td className="p-5">Muafiyet kapsamında 0 ₸</td>
                <td className="p-5">İndirimli oran, örnekte %5 = 5.000.000 ₸</td>
              </tr>
              <tr className="border-b bg-orange-50 hover:bg-orange-100">
                <td className="p-5 font-bold">Kazakistan&apos;daki toplam vergi</td>
                <td className="p-5 font-bold">28.000.000 ₸</td>
                <td className="p-5 font-bold">0 ₸</td>
                <td className="p-5 font-bold">5.000.000 ₸</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-bold">Efektif vergi yükü</td>
                <td className="p-5 font-bold text-orange-600">%28</td>
                <td className="p-5 font-bold text-green-700">%0</td>
                <td className="p-5 font-bold text-green-700">%5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
            Tablonun okumadığı satır: Türkiye
          </h3>
          <p className="leading-8 text-gray-700">
            Bu karşılaştırma yalnızca Kazakistan tarafını gösterir.
            Türkiye&apos;de yerleşik bir ortak açısından hikâye burada
            bitmez. Standart TOO senaryosunda %28&apos;lik yük, Türkiye&apos;de
            beyan edilecek temettü gelirinde mahsup imkânı doğurabilirken,
            AIFC senaryosundaki %0, aşağıda anlatılan kontrol edilen
            yabancı kurum kuralını devreye sokabilir ve kazanç dağıtılmasa
            bile Türkiye&apos;de vergilenebilir. Yani &quot;sıfır vergi&quot;
            görünen yapı, konsolide bakıldığında en pahalı seçenek haline
            gelebilir. Bu tablo bir sonuç değil, doğru soruyu sormak için
            bir başlangıç noktasıdır. Rakamlar temsilidir ve somut
            durumda faaliyet niteliği, elde tutma süresi ve substance
            şartlarına göre değişir.
          </p>
        </div>
      </section>

      {/* 11. TÜRKİYE */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Türkiye Tarafındaki Yükümlülükler
        </h2>

        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          11.1. Kontrol Edilen Yabancı Kurum Kazancı (KEYK)
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Kurumlar Vergisi Kanunu&apos;nun 7. maddesi, düşük vergili
          ülkelerde kurulan iştiraklerin kazancını, dağıtılmasa bile
          Türkiye&apos;de vergilendirmeye imkân tanır. Aşağıdaki dört
          şartın <strong>birlikte</strong> gerçekleşmesi halinde kural
          devreye girer:
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-2 text-2xl font-black text-orange-500">1</div>
            <p className="text-gray-700">
              Türkiye&apos;de tam mükellef gerçek kişi ve kurumların,
              doğrudan veya dolaylı olarak sermaye, kâr payı veya oy
              hakkının en az <strong>%50&apos;sine</strong> sahip olması
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-2 text-2xl font-black text-orange-500">2</div>
            <p className="text-gray-700">
              İştirakin gayrisafi hasılatının <strong>%25 veya
              fazlasının</strong> pasif nitelikli gelirlerden (faiz, kâr
              payı, kira, lisans ücreti, menkul kıymet alım satım
              kazancı) oluşması
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-2 text-2xl font-black text-orange-500">3</div>
            <p className="text-gray-700">
              İştirakin ticari bilanço kârı üzerinden taşıdığı toplam
              efektif gelir ve kurumlar vergisi benzeri vergi yükünün
              <strong> %10&apos;dan az</strong> olması
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-2 text-2xl font-black text-orange-500">4</div>
            <p className="text-gray-700">
              İştirakin ilgili yıldaki toplam gayrisafi hasılatının
              <strong> 100.000 TL</strong> karşılığı yabancı parayı
              aşması
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h4 className="mb-4 text-xl font-bold text-yellow-800">
            AIFC ve Astana Hub bu kural karşısında nerede duruyor?
          </h4>
          <p className="mb-4 leading-8 text-gray-700">
            <strong>AIFC yapıları için risk yüksektir.</strong> %0
            kurumlar vergisi, üçüncü şarttaki %10&apos;luk vergi yükü
            testini doğrudan tetikler. AIFC&apos;nin öne çıkan kullanım
            alanı olan holding, fon ve yatırım şirketi yapıları ise
            doğası gereği pasif gelir üretir ve ikinci şartı da
            karşılayabilir. Kontrol şartı da sağlanıyorsa, Kazakistan&apos;da
            hiç vergi ödenmemiş olsa dahi kazanç Türkiye&apos;de kurumlar
            vergisine tabi tutulabilir.
          </p>
          <p className="leading-8 text-gray-700">
            <strong>Astana Hub yapılarında tablo farklıdır.</strong>
            {" "}Yazılım geliştirme ve bilişim hizmeti geliri aktif
            ticari kazanç niteliğindedir; bu durumda pasif gelir oranı
            şartı sağlanmayabilir ve kural devreye girmeyebilir. Ancak
            gelir kompozisyonu lisans ve royalty ağırlıklıysa
            değerlendirme değişir. Her iki yapıda da sonuç, şirketin
            gelir kalemlerinin dökümüne bağlıdır ve peşin hüküm
            verilemez.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Buna ek olarak, Kazakistan&apos;daki iştirakten alınan
          temettünün Türkiye&apos;de yurt dışı iştirak kazancı
          istisnasından yararlanabilmesi için, ilgili kazancın yurt
          dışında belirli bir asgari vergi yükü taşımış olması aranır.
          %0 oranla vergilenmiş bir AIFC kazancı bu şartı sağlamayacağı
          için, Türkiye&apos;de tam vergileme gündeme gelebilir.
        </p>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          11.2. Transfer Fiyatlandırması
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Grup içi işlemler her iki tarafta da inceleniyor. Türkiye
          tarafında Kurumlar Vergisi Kanunu&apos;nun 13. maddesi
          kapsamında ilişkili kişilerle yapılan işlemlerin emsallere
          uygun olması, yıllık transfer fiyatlandırması raporunun
          hazırlanması ve kurumlar vergisi beyannamesi ekindeki formun
          doldurulması gerekir. Kazakistan tarafında ise transfer
          fiyatlandırması ayrı bir kanunla düzenlenmiştir ve dikkat
          çekici biçimde <strong>sınır ötesi işlemleri, tarafların
          ilişkili olup olmadığına bakılmaksızın</strong> kapsayabilir.
          Türkiye&apos;deki merkez ile Kazakistan&apos;daki iştirak
          arasındaki hizmet, lisans ve mal akışlarının fiyatlandırması
          bu nedenle kuruluş anında kurgulanmalıdır.
        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Kazakistan&apos;da doğru yapının seçilmesinden AIFC veya
            Astana Hub başvurusuna, KDV mükellefiyeti ve bordro
            kurgusundan Türkiye tarafındaki KEYK ve transfer
            fiyatlandırması değerlendirmesine kadar sürecin tamamını
            biz yürütüyoruz. Kuruluş sonrasındaki muhasebe, beyan ve
            raporlama hizmetinizi de ayrı bir yerel firma aramanıza
            gerek kalmadan biz sağlıyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Sürecin tamamı için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Sermaye ihracına bağlı Yurt Dışı Yatırım Bildirimi ve Ticaret
          Bakanlığı&apos;nın yurt dışı birim destekleri gibi Türkiye
          tarafındaki diğer yükümlülük ve fırsatları{" "}
          <Link
            href="/blog/kazakistanda-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            Kazakistan&apos;da Şirket Nasıl Kurulur?
          </Link>{" "}
          başlıklı rehberimizde ayrıntılı olarak ele aldık.
        </p>
      </section>

      {/* 12. SIK YAPILAN HATALAR */}
      <section id="hatalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sık Yapılan Hatalar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-2 font-bold text-red-600">❌ Hata</div>
            <p className="text-gray-800">
              AIFC&apos;de kurulan her şirketin vergi ödemeyeceğini
              varsaymak. Muafiyet şirkete değil, sayılı faaliyet
              listelerine bağlıdır.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-2 font-bold text-red-600">❌ Hata</div>
            <p className="text-gray-800">
              Kazakistan&apos;daki %0 oranı planlamanın sonucu sanmak.
              Türkiye&apos;deki KEYK kuralı hesaba katılmadan yapılan
              kurgular sonradan çok daha pahalıya mal olur.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-2 font-bold text-red-600">❌ Hata</div>
            <p className="text-gray-800">
              2025 verileriyle bütçe kurmak. KDV dört puan arttı, kayıt
              eşiği yarıya indi, AHE değişti. Eski tabloyla yapılan
              fiyatlama marjı doğrudan eritir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-2 font-bold text-red-600">❌ Hata</div>
            <p className="text-gray-800">
              Astana Hub&apos;a girip %90 bilişim geliri şartını yıl
              içinde takip etmemek. Tek bir bilişim dışı büyük fatura
              oranı bozabilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-2 font-bold text-red-600">❌ Hata</div>
            <p className="text-gray-800">
              Astana Hub avantajlarının 2029 sınırını görmezden gelerek
              uzun vadeli yapı kurmak.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-2 font-bold text-red-600">❌ Hata</div>
            <p className="text-gray-800">
              Mukimlik belgesi olmadan temettü veya lisans ödemesi
              yapmak. Anlaşma oranı yerine iç mevzuattaki daha yüksek
              oran uygulanır.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-2 font-bold text-red-600">❌ Hata</div>
            <p className="text-gray-800">
              Değer artış kazancı istisnasının hâlâ yürürlükte olduğunu
              düşünerek çıkış planlamak. Bu istisna 2026 ile kaldırıldı.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-2 font-bold text-red-600">❌ Hata</div>
            <p className="text-gray-800">
              Türkiye&apos;den Kazakistan iştirakine kesilen hizmet
              faturalarında %20 stopaj riskini fiyatlamaya
              yansıtmamak.
            </p>
          </div>
        </div>
      </section>

      {/* 13. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          13. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kazakistan&apos;da KDV oranı 2026&apos;da kaç oldu?
            </h3>
            <p className="leading-8 text-gray-700">
              Standart KDV oranı 1 Ocak 2026&apos;dan itibaren
              %12&apos;den %16&apos;ya yükseldi. İlaç, tıbbi cihaz ve
              lisanslı sağlık hizmetlerinde 2026 için %5 (2027&apos;den
              itibaren %10), yurt içi süreli yayınlarda %10 ve
              ihracatta %0 oran uygulanıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KDV mükellefi olmak için ciro sınırı nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Zorunlu KDV kayıt eşiği 10.000 AHE&apos;dir. 2026 için AHE
              4.325 tenge olduğundan bu yaklaşık 43,25 milyon tengeye
              denk gelir. Eşik aşıldıktan sonra 5 iş günü içinde
              başvuru yapılması gerekir; tek işlemle eşiğin aşılacağı
              hallerde başvuru teslimden önce yapılmalıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Astana Hub&apos;a yabancı sermayeli bir şirket katılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Yabancı ortaklı şirketler Astana Hub katılımcısı
              olabilir. Belirleyici olan ortaklık yapısı değil,
              cironun en az %90&apos;ının uygun bilişim faaliyetlerinden
              elde edilmesi ve bilişim hizmetleri gelirinde kurumlar
              vergisi indirimi için gerekli personel ve kaynak
              yeterliliğinin yıllık olarak teyit edilmesidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              AIFC&apos;deki %0 vergi avantajı Türkiye&apos;de sorun yaratır mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Yaratabilir. Türkiye&apos;de yerleşik ortaklar iştiraki
              kontrol ediyorsa, iştirakin geliri ağırlıklı olarak pasif
              nitelikliyse ve efektif vergi yükü %10&apos;un altındaysa,
              kontrol edilen yabancı kurum kuralı gereği kazanç
              dağıtılmasa bile Türkiye&apos;de vergilendirilebilir.
              Yapının bu açıdan önceden değerlendirilmesi gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kazakistan&apos;dan Türkiye&apos;ye temettü transferinde stopaj kaç?
            </h3>
            <p className="leading-8 text-gray-700">
              İç mevzuattaki genel oran %15&apos;tir. Türkiye-Kazakistan
              Çifte Vergilendirmeyi Önleme Anlaşması kapsamında bu oran
              %10 olarak uygulanabilir; anlaşma oranından yararlanmak
              için mukimlik belgesinin ibrazı şarttır. Payın 3 yıldan
              uzun elde tutulması ve diğer şartların birlikte sağlanması
              halinde tam istisna da mümkündür.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Astana Hub avantajları 2029&apos;dan sonra devam edecek mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Mevcut düzenleme, vergi ayrıcalıklarının 1 Ocak
              2029&apos;a kadar geçerli olduğunu öngörüyor. Uzatılıp
              uzatılmayacağı bugün itibarıyla belirsizdir. Uzun vadeli
              yapılanma kararlarında bu tarihin bir senaryo olarak
              planlanması, teşvik sona erdiğinde yapının nasıl
              devam edeceğinin baştan belirlenmesi gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kazakistan&apos;da işveren üzerindeki toplam bordro yükü ne kadar?
            </h3>
            <p className="leading-8 text-gray-700">
              İşveren tarafında sosyal vergi %6, sosyal katkı payı %5,
              sağlık sigortası payı %3 ve işveren emeklilik katkısı
              %3,5 olarak uygulanır. Sosyal vergi, ödenen sosyal katkı
              payı kadar mahsup edilerek beyan edilir. Çalışan tarafında
              ise %10 emeklilik katkısı, %2 sağlık katkısı ve artan
              oranlı gelir vergisi bulunur.
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
          2026 vergi reformu, Kazakistan&apos;ı Türk şirketleri için hâlâ
          rekabetçi bir yapılanma adresi olarak bırakıyor. Ancak reformun
          yönü açık: dolaylı vergi yükü arttı, mükellefiyet tabanı
          genişledi ve teşvikler daha dar, daha denetlenebilir ve daha
          somut şartlara bağlanmış durumda. AIFC&apos;nin 2066&apos;ya
          uzanan muafiyeti ile Astana Hub&apos;ın %0 rejimi ilk bakışta
          benzer görünse de, biri finansal hizmetler için tasarlanmış
          uzun vadeli bir yargı alanı, diğeri 2029 sınırı olan sektörel
          bir teşvik programıdır.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Doğru karar, Kazakistan&apos;daki en düşük oranı bulmakla değil,
          Kazakistan ve Türkiye tarafını birlikte hesaplamakla verilir.
          Kazakistan&apos;da %0 vergi ödeyip Türkiye&apos;de kontrol
          edilen yabancı kurum kuralı nedeniyle tam oranda vergilenen bir
          yapı, kâğıt üzerinde avantajlı görünen ama pratikte kaybettiren
          bir kurgudur. Faaliyet niteliğinizi, gelir kompozisyonunuzu,
          ortaklık yapınızı ve kâr dağıtım planınızı birlikte
          değerlendirerek başlamak, sonradan yapı değiştirmenin
          maliyetinden çok daha ucuzdur.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kazakistanda-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • KAZAKİSTAN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Kazakistan&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
          </Link>
          <Link
            href="/blog/ozbekistanda-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • ÖZBEKİSTAN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Özbekistan&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
          </Link>
          <Link
            href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ulusal ve Uluslararası Vergi Danışmanlığı: KOBİ&apos;ler İçin Önemi</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
