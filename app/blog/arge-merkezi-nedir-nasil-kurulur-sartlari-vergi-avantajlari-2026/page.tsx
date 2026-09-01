import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Ar-Ge Merkezi Nedir, Nasıl Kurulur? | Koray Akdağ",
  description: "Ar-Ge Merkezi olma şartları, en az 15 personel eşiği, %95'e varan gelir vergisi stopajı teşviki ve SGK avantajlarıyla 2026 rehberi.",
  keywords: [
    "Ar-Ge Merkezi nedir",
    "Ar-Ge Merkezi nasıl kurulur",
    "Ar-Ge Merkezi şartları 2026",
    "5746 sayılı Kanun",
    "Ar-Ge Merkezi vergi avantajları",
    "Ar-Ge Merkezi SGK teşviki",
    "gelir vergisi stopajı teşviki",
    "Ar-Ge personeli sayısı",
    "Tasarım Merkezi nedir",
    "AGTM başvuru",
    "Ar-Ge indirimi",
    "Ar-Ge Merkezi Teknopark farkı",
  ],
};

export default function ArgeMerkeziPage() {
  return (
    <BlogLayout
      title="Ar-Ge Merkezi Nedir? Nasıl Kurulur? 2026 Şartları, Vergi ve SGK Avantajları"
      description="En az 15 tam zaman eşdeğer personelle kurulabilen Ar-Ge Merkezi'nin şartları, adım adım başvuru süreci, %95'e varan gelir vergisi stopajı teşviki, SGK işveren primi desteği ve 2028'e kadar geçerli vergi avantajlarını tek bir rehberde inceliyoruz."
      category="AR-GE MERKEZİ • 5746 SAYILI KANUN • 2026"
      date="2026"
      readTime="13 Dakika"
      coverImage="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026"
    >
      {/* GİRİŞ */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          Ar-Ge Merkezi Nedir?
        </h2>

        <p className="text-lg leading-9">
          Ar-Ge Merkezi, 5746 sayılı Araştırma, Geliştirme ve Tasarım
          Faaliyetlerinin Desteklenmesi Hakkında Kanun kapsamında; bir
          şirketin kendi bünyesinde, organizasyon yapısı içinde ayrı bir birim
          olarak kurduğu ve münhasıran yurt içinde Ar-Ge faaliyeti yürüten
          yapıdır.
        </p>

        <p className="mt-6 text-lg leading-9">
          Teknoparktan farklı olarak Ar-Ge Merkezi, şirketin kendi
          tesisinde/ofisinde kurulur; bir teknoloji geliştirme bölgesine
          taşınma zorunluluğu yoktur. Buna karşılık en az 15 (bazı
          sektörlerde 30) tam zaman eşdeğer Ar-Ge personeli istihdamı gibi
          daha yüksek bir eşik gerektirir. Karşılığında ise kurumlar vergisi,
          gelir vergisi stopajı, SGK işveren primi, damga vergisi ve gümrük
          vergisi başta olmak üzere önemli teşvik unsurları sağlar.
        </p>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <a href="#nedir" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            1. Ar-Ge Merkezi Nedir?
          </a>
          <a href="#sartlar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            2. Ar-Ge Merkezi Olma Şartları
          </a>
          <a href="#surec" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            3. Kuruluş ve Başvuru Süreci
          </a>
          <a href="#avantajlar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            4. Vergi ve SGK Avantajları
          </a>
          <a href="#stopaj" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            5. Gelir Vergisi Stopajı Teşviki Detayı
          </a>
          <a href="#tasarim" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            6. Tasarım Merkezi ile Farkı
          </a>
          <a href="#teknopark-karsilastirma" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            7. Ar-Ge Merkezi mi, Teknopark mı?
          </a>
          <a href="#dikkat" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </a>
          <a href="#kimler" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            9. Kimler İçin Uygun?
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
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Ar-Ge Merkezi Nedir?
        </h2>

        <p className="mb-6 text-lg leading-9">
          T.C. Sanayi ve Teknoloji Bakanlığı'nın tescil ve izleme sürecini
          yürüttüğü Ar-Ge Merkezleri; kanuni veya iş merkezi Türkiye'de
          bulunan sermaye şirketlerinin, organizasyon yapısı içinde ayrı bir
          birim şeklinde örgütlenmiş, münhasıran yurt içinde Ar-Ge ve yenilik
          faaliyeti yürüten birimleridir.
        </p>

        <p className="mb-6 text-lg leading-9">
          Amaç; şirketlerin kendi bünyelerinde sürdürdükleri araştırma,
          geliştirme ve yenilik faaliyetlerini kurumsal bir yapıya
          kavuşturmak, bu faaliyetleri belgelendirmek ve karşılığında vergi
          ile SGK alanında somut teşviklerden yararlanılmasını sağlamaktır.
        </p>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            Dayanak Mevzuat
          </h3>
          <ul className="ml-6 list-disc space-y-3 marker:text-orange-500">
            <li>5746 sayılı Araştırma, Geliştirme ve Tasarım Faaliyetlerinin Desteklenmesi Hakkında Kanun</li>
            <li>Araştırma, Geliştirme ve Tasarım Faaliyetlerinin Desteklenmesine İlişkin Uygulama ve Denetim Yönetmeliği</li>
            <li>2016/9093 sayılı Ar-Ge Merkezlerinde İstihdam Edilecek Ar-Ge Personeli Sayısının Tespiti Hakkında Karar</li>
            <li>2016/9092 sayılı Ar-Ge, Yenilik ve Tasarım Harcamalarının Kazancın Tespitinde İndirim Konusu Yapılması Hakkında Karar</li>
          </ul>
        </div>
      </section>

      {/* 2 */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Ar-Ge Merkezi Olma Şartları
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-green-700">
              Personel Sayısı Şartı
            </h3>
            <p className="leading-8">
              Genel kural olarak en az <strong>15 tam zaman eşdeğer (TZE) Ar-Ge
              personeli</strong> istihdam edilmesi gerekir. Motorlu kara taşıtı,
              hava/uzay araçları, askeri savaş araçları ve motosiklet imalatı
              gibi belirli NACE kodlu sektörlerde bu eşik{" "}
              <strong>30 TZE</strong> personele çıkar.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Hukuki Yapı Şartı
            </h3>
            <p className="leading-8">
              Başvuru sahibi, kanuni veya iş merkezi Türkiye'de bulunan bir{" "}
              <strong>sermaye şirketi</strong> olmalıdır (dar mükellef
              kurumların Türkiye'deki işyerleri dâhil). Şahıs şirketleri bu
              kapsamda başvuru yapamaz.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            Ayrıca Aranan Diğer Kriterler
          </h3>
          <ul className="ml-6 list-disc space-y-3 marker:text-orange-500">
            <li>Ar-Ge faaliyetlerinin organizasyon yapısı içinde ayrı bir birim şeklinde örgütlenmiş olması</li>
            <li>Faaliyetlerin münhasıran yurt içinde yürütülmesi</li>
            <li>Yeterli Ar-Ge yönetimi, insan kaynakları, fikri haklar ve proje/bilgi kaynakları yönetim kapasitesinin bulunması</li>
            <li>Personelin merkezde fiilen çalıştığının fiziki kontrolünü sağlayacak mekanizmaların bulunması</li>
            <li>Konusu, süresi, bütçesi ve personel ihtiyacı tanımlanmış program ve projelerin bulunması</li>
            <li>Merkezin tek bir yerleşke veya fiziki mekân içinde, ayrı bir birim olarak yer alması</li>
          </ul>
        </div>
      </section>

      {/* 3 */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kuruluş ve Başvuru Süreci
        </h2>

        <p className="mb-8 text-lg leading-9">
          Başvurular, Sanayi ve Teknoloji Bakanlığı'nın AGTM (Ar-Ge ve
          Tasarım Merkezleri) Portalı üzerinden, e-Devlet Kapısı girişiyle
          elektronik ortamda yapılır. Süreç sırasıyla şu adımlardan oluşur:
        </p>

        <div className="space-y-6">
          {[
            {
              n: "1",
              t: "Ön Hazırlık",
              d: "Şirket, personel sayısı, proje dokümantasyonu ve fiziki alan gibi şartları sağladığını gösteren bir hazırlık raporu oluşturur ve gerekli altyapıyı kurar.",
            },
            {
              n: "2",
              t: "Elektronik Başvuru",
              d: "agtm.sanayi.gov.tr üzerinden e-Devlet girişi yapılarak Ar-Ge ve Tasarım Merkezleri Portalı'na erişilir, \"Kabul ve Taahhütler\" onaylanarak online başvuru dosyası oluşturulur.",
            },
            {
              n: "3",
              t: "Ön İnceleme (5 İş Günü)",
              d: "Bakanlık, başvuru dosyasını eksiklik bakımından 5 iş günü içinde inceler. Eksiklik varsa işletmeye bildirilir.",
            },
            {
              n: "4",
              t: "Eksiklik Tamamlama (15 İş Günü)",
              d: "İşletme, bildirilen eksiklikleri en geç 15 iş günü içinde tamamlar.",
            },
            {
              n: "5",
              t: "Değerlendirme ve Denetim Komisyonu (30 İş Günü)",
              d: "Eksiksiz dosya, Komisyon tarafından en geç 30 iş günü içinde değerlendirilip karara bağlanır.",
            },
            {
              n: "6",
              t: "Belge ve Bildirim",
              d: "Karar olumluysa Ar-Ge Merkezi Belgesi düzenlenir; sonuç 5 iş günü içinde Gelir İdaresi Başkanlığı, SGK ve işletmeye bildirilir.",
            },
          ].map((s) => (
            <div key={s.n} className="flex gap-6 rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                {s.n}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-[#071A2F]">{s.t}</h3>
                <p className="leading-7">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Önemli Nokta
          </h3>
          <p className="leading-8">
            Süreç, tek bir başvuru formundan ibaret değildir; personel
            yapısının, proje dokümantasyonunun ve fiziki kontrol
            mekanizmalarının başvuru öncesinde eksiksiz kurgulanması,
            değerlendirme aşamasında ret riskini önemli ölçüde azaltır.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section id="avantajlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Ar-Ge Merkezi Vergi ve SGK Avantajları
        </h2>

        <p className="mb-8 text-lg leading-9">
          5746 sayılı Kanun, Ar-Ge Merkezi belgesine sahip işletmelere birden
          fazla teşvik unsuru sunar. Aşağıdaki tablo, güncel teşvik
          unsurlarını özetlemektedir.
        </p>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[750px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5 text-left">Teşvik</th>
                <th className="p-5 text-left">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Ar-Ge/Tasarım İndirimi</td>
                <td className="p-5">
                  İlk madde-malzeme, amortisman, personel, genel gider ve
                  dışarıdan sağlanan hizmet giderleri kurum/ticari kazancın
                  tespitinde indirim konusu yapılır.
                </td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Performansa Dayalı İlave İndirim</td>
                <td className="p-5">
                  Belirli göstergelerde bir önceki yıla göre asgari %20 artış
                  sağlanması hâlinde, harcama artış tutarının %50'si{" "}
                  <strong>31.12.2028</strong> tarihine kadar ayrıca indirim
                  konusu yapılabilir.
                </td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Gelir Vergisi Stopajı Teşviki</td>
                <td className="p-5">
                  Ar-Ge/destek personeli ücretlerinde eğitim durumuna göre{" "}
                  <strong>%80 – %95</strong> oranında stopaj teşviki (detay
                  aşağıda).
                </td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">SGK İşveren Primi Desteği</td>
                <td className="p-5">
                  Ar-Ge/Tasarım personeli ile destek personelinin sigorta
                  primi işveren hissesinin <strong>yarısı</strong> Hazine
                  bütçesinden karşılanır.
                </td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Temel Bilimler Personel Desteği</td>
                <td className="p-5">
                  Matematik, fizik, kimya, biyoloji gibi temel bilim
                  programlarından mezun Ar-Ge personeli için, 2 yıl boyunca
                  kişi başı aylık asgari ücret (2026'da brüt 33.030 TL)
                  tutarında Bakanlık desteği.
                </td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Damga Vergisi İstisnası</td>
                <td className="p-5">
                  Ar-Ge, yenilik ve tasarım faaliyetlerine ilişkin düzenlenen
                  kâğıtlar damga vergisinden istisnadır.
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-5 font-semibold">Gümrük Vergisi İstisnası</td>
                <td className="p-5">
                  Ar-Ge faaliyetlerinde kullanılmak üzere ithal edilen uygun
                  eşyalar gümrük vergisi ve fonlardan muaftır.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Not: Kurumlar vergisi mükelleflerinden yıllık beyanname üzerinden
          1.000.000 TL ve üzerinde Ar-Ge indiriminden yararlananların, indirim
          tutarının %2'sini (yıllık azami 20.000.000 TL) girişim sermayesi
          fonuna veya kuluçka merkezi girişimcilerine aktarma yükümlülüğü
          bulunmaktadır; aktarılmaması hâlinde indirimin %20'si o yıl
          kullanılamaz.
        </p>
      </section>

      {/* 5 */}
      <section id="stopaj" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Gelir Vergisi Stopajı Teşviki Detayı
        </h2>

        <p className="mb-8 text-lg leading-9">
          Ar-Ge/Tasarım personeli ile bunların en fazla %10'u kadar destek
          personelinin ücretlerinde, 31.12.2028 tarihine kadar aşağıdaki
          oranlarda gelir vergisi stopajı terkin edilir:
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <div className="mb-3 text-4xl font-black text-green-700">%95</div>
            <p className="leading-7">
              Doktoralı personel ile temel bilimlerden en az yüksek lisans
              derecesine sahip olanlar
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8 text-center">
            <div className="mb-3 text-4xl font-black text-[#071A2F]">%90</div>
            <p className="leading-7">
              Yüksek lisanslı personel ile temel bilimlerden lisans derecesine
              sahip olanlar
            </p>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8 text-center">
            <div className="mb-3 text-4xl font-black text-orange-600">%80</div>
            <p className="leading-7">Diğer Ar-Ge, tasarım ve destek personeli</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            Hesaplamada Dikkat Edilecekler
          </h3>
          <ul className="ml-6 list-disc space-y-3 marker:text-orange-500">
            <li>Teşvik, personelin fiilen Ar-Ge/tasarım faaliyetine ayırdığı sürenin toplam çalışma süresine oranına göre uygulanır.</li>
            <li>Haftalık 45 saati aşan mesai ve ek çalışma ücretleri kapsam dışıdır.</li>
            <li>Merkez dışında geçirilen süreler, toplam sürenin belirli bir oranını (Cumhurbaşkanı kararıyla artırılabilen bir sınır dahilinde) aşmamak kaydıyla teşvik kapsamında değerlendirilebilir.</li>
            <li>Destek personelinin tam zaman eşdeğer sayısı, toplam Ar-Ge/tasarım personeli sayısının %10'unu geçemez.</li>
          </ul>
        </div>
      </section>

      {/* 6 */}
      <section id="tasarim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Tasarım Merkezi ile Farkı
        </h2>

        <p className="mb-6 text-lg leading-9">
          Aynı kanun (5746 sayılı Kanun), Ar-Ge Merkezi'ne paralel bir yapı
          olarak <strong>Tasarım Merkezi</strong>'ni de düzenler. Teşvik
          unsurları büyük ölçüde aynıdır; temel farklar personel eşiği ve
          faaliyet alanındadır.
        </p>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[650px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Kriter</th>
                <th className="p-4 text-left">Ar-Ge Merkezi</th>
                <th className="p-4 text-left">Tasarım Merkezi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Personel Eşiği</td>
                <td className="p-4">En az 15 (bazı sektörlerde 30) TZE Ar-Ge personeli</td>
                <td className="p-4">En az 10 TZE tasarım personeli</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Faaliyet Alanı</td>
                <td className="p-4">Araştırma ve geliştirme faaliyetleri</td>
                <td className="p-4">Sınai tasarım, grafik/ürün tasarımı gibi belirlenen tasarım alanları</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold">Personel İstihdam Desteği</td>
                <td className="p-4">Temel bilimler mezunu desteği geçerli</td>
                <td className="p-4">Bu destek Tasarım Merkezleri için geçerli değil</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7 */}
      <section id="teknopark-karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Ar-Ge Merkezi mi, Teknopark mı?
        </h2>

        <p className="mb-8 text-lg leading-9">
          Ar-Ge veya yazılım faaliyeti bulunan şirketler açısından iki farklı
          yapı öne çıkar: kendi bünyesinde kurulan{" "}
          <strong>Ar-Ge Merkezi</strong> ve bir teknoloji geliştirme
          bölgesinde faaliyet gösteren{" "}
          <Link href="/blog/teknopark-nedir-avantajlari" className="text-orange-600 underline hover:text-orange-700">
            Teknopark
          </Link>
          . İkisi farklı kanunlara (5746 ve 4691) dayanır ve farklı teşvik
          mekanizmaları sunar.
        </p>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[750px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5 text-left">Kriter</th>
                <th className="p-5 text-left">Ar-Ge Merkezi</th>
                <th className="p-5 text-left">Teknopark</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-5 font-semibold">Konum</td>
                <td className="p-5">Şirketin kendi tesisi/ofisi</td>
                <td className="p-5">Teknoloji geliştirme bölgesi sınırları</td>
              </tr>
              <tr className="border-b">
                <td className="p-5 font-semibold">Personel Şartı</td>
                <td className="p-5">En az 15 (bazı sektörlerde 30) TZE</td>
                <td className="p-5">Genel bir minimum personel şartı yok</td>
              </tr>
              <tr className="border-b">
                <td className="p-5 font-semibold">Öne Çıkan Teşvik</td>
                <td className="p-5">Ar-Ge indirimi, gelir vergisi stopajı, SGK primi desteği</td>
                <td className="p-5">Kazanç istisnası, uygun satışlarda %100 KDV istisnası</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Uygun Profil</td>
                <td className="p-5">Orta-büyük ölçekli, kendi tesisinde Ar-Ge yürüten şirketler</td>
                <td className="p-5">Küçük-orta ölçekli yazılım/Ar-Ge şirketleri, start-up'lar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8 */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>

        <div className="space-y-6">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-red-700">
              ⚠️ Personel Eşiğinin Sürekliliği
            </h3>
            <p className="leading-8">
              15 (veya 30) TZE personel şartı yalnızca başvuru anında değil,
              faaliyet boyunca da izlenir. Personel sayısının eşiğin altına
              düşmesi, denetim ve belge iptali riski doğurabilir.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ⚠️ Fiziki Kontrol Mekanizması Zorunluluğu
            </h3>
            <p className="leading-8">
              Personelin merkezde fiilen çalıştığının izlenebilir şekilde
              kontrol edilmesi (giriş-çıkış sistemleri, çalışma raporları vb.)
              başvuru ve sonraki denetimlerde aranan bir şarttır.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ⚠️ Harcamaların Doğru Sınıflandırılması
            </h3>
            <p className="leading-8">
              İlk madde-malzeme, personel, genel gider ve dışarıdan sağlanan
              hizmet giderlerinin Ar-Ge indirimine konu edilebilmesi için
              mevzuattaki gider tanımlarına uygun şekilde muhasebeleştirilmesi
              gerekir. Yanlış sınıflandırma, vergi incelemesinde indirimin
              reddine yol açabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 9 */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Kimler İçin Uygun?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-green-700">
              Uygun Olabilecek Şirketler
            </h3>
            <ul className="ml-6 list-disc space-y-3">
              <li>15 ve üzeri Ar-Ge/mühendislik personeli çalıştıran imalat ve teknoloji şirketleri</li>
              <li>Kendi tesisinde Ar-Ge yürütmek isteyen, teknoparka taşınmak istemeyen şirketler</li>
              <li>Yüksek personel gideri nedeniyle SGK ve gelir vergisi maliyetini düşürmek isteyen işletmeler</li>
              <li>Ürün geliştirme, prototip ve inovasyon projeleri yürüten sanayi şirketleri</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Henüz Uygun Olmayabilecekler
            </h3>
            <ul className="ml-6 list-disc space-y-3">
              <li>15 personel eşiğinin altında kalan küçük ekipler (Teknopark daha uygun olabilir)</li>
              <li>Şahıs şirketi olarak faaliyet gösteren işletmeler</li>
              <li>Fiziki kontrol ve raporlama altyapısını henüz kuramamış şirketler</li>
            </ul>
          </div>
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
              1. Ar-Ge Merkezi kurmak için minimum kaç personel gerekir?
            </h3>
            <p className="leading-8">
              Genel kural en az 15 tam zaman eşdeğer Ar-Ge personelidir.
              Motorlu taşıt, hava/uzay aracı, askeri araç ve motosiklet imalatı
              gibi belirli sektörlerde bu eşik 30 TZE personele yükselir.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              2. Şahıs şirketi Ar-Ge Merkezi kurabilir mi?
            </h3>
            <p className="leading-8">
              Hayır. Başvuru sahibinin kanuni veya iş merkezi Türkiye'de
              bulunan bir sermaye şirketi (anonim, limited vb.) olması
              gerekir.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              3. Ar-Ge Merkezi belgesi ne kadar sürede alınır?
            </h3>
            <p className="leading-8">
              Bakanlığın ön incelemesi 5 iş günü, eksiklik giderme süresi en
              geç 15 iş günü, Değerlendirme ve Denetim Komisyonu'nun kararı
              ise en geç 30 iş günü içinde tamamlanır. Dosyanın eksiksiz
              hazırlanması bu süreleri kısaltabilir.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              4. Gelir vergisi stopajı teşviki her personel için aynı oranda mı uygulanır?
            </h3>
            <p className="leading-8">
              Hayır. Oran, personelin eğitim durumuna göre değişir: doktoralı
              veya temel bilimlerden yüksek lisanslı personelde %95, yüksek
              lisanslı veya temel bilimlerden lisanslı personelde %90, diğer
              personelde %80'dir.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5. SGK işveren primi desteği ne kadardır?
            </h3>
            <p className="leading-8">
              Ar-Ge/tasarım personeli ile bunların azami %10'u kadar destek
              personelinin sigorta primi işveren hissesinin yarısı Hazine
              bütçesinden karşılanır.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              6. Bu teşvikler ne zamana kadar geçerli?
            </h3>
            <p className="leading-8">
              Gelir vergisi stopajı teşviki ve performansa dayalı ilave
              indirim gibi süreye bağlı unsurlar mevcut mevzuatta 31.12.2028
              tarihine kadar öngörülmüştür. Kanunun uzatılıp uzatılmayacağı
              yasama sürecine bağlıdır; bu nedenle güncel durumun başvuru
              öncesinde teyit edilmesi önemlidir.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              7. Ar-Ge Merkezi ile Teknopark aynı anda kullanılabilir mi?
            </h3>
            <p className="leading-8">
              Şirketin farklı faaliyetleri için farklı yapılar tercih
              edilebilir; ancak aynı faaliyetin hem Ar-Ge Merkezi hem
              Teknopark teşviklerinden birlikte yararlanması mümkün değildir.
              Hangi yapının şirketin faaliyet ve personel yapısına daha uygun
              olduğu proje bazında değerlendirilmelidir.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              8. Yabancı uyruklu personel Ar-Ge Merkezi'nde çalıştırılabilir mi?
            </h3>
            <p className="leading-8">
              Evet. 4817 sayılı Kanun ve ilgili mevzuat çerçevesinde yabancı
              uyruklu Ar-Ge/tasarım personeli çalıştırılabilir; çalışma izni
              başvuruları Sanayi ve Teknoloji Bakanlığı'nın uygun görüşü
              doğrultusunda sonuçlandırılır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Ar-Ge Merkezi Kuruluş Sürecinde Yanınızdayız
          </h3>
          <p className="leading-8 text-gray-700">
            Ar-Ge Merkezi olma şartlarının karşılanıp karşılanmadığının
            değerlendirilmesi, AGTM başvuru dosyasının hazırlanması ve
            5746 sayılı Kanun kapsamındaki vergi ve SGK avantajlarından
            tam olarak yararlanılması, uzmanlık gerektiren aşamalardır.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Ar-Ge Merkezi kuruluş sürecinizi değerlendirmemiz için
              bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 11 SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç: Ar-Ge Merkezi Şirketiniz İçin Doğru Adım mı?
        </h2>

        <p className="mb-6 text-lg leading-9">
          Ar-Ge Merkezi olmak, belirli bir büyüklüğe ulaşmış ve kendi
          bünyesinde düzenli Ar-Ge faaliyeti yürüten şirketler için önemli bir
          vergi ve SGK avantajı kapısı açar. Ancak bu avantajlar otomatik
          değildir; personel yapısının, proje dokümantasyonunun ve gider
          sınıflandırmasının mevzuata uygun şekilde kurgulanması,
          başvurunun kabulü kadar sonraki denetim süreçlerinin sorunsuz
          geçmesi açısından da belirleyicidir.
        </p>

        <p className="mb-10 text-lg leading-9">
          Başvuru öncesi uygunluk analizinden AGTM portalı üzerinden yürütülen
          başvuru sürecine, belge alındıktan sonraki gelir vergisi stopajı ve
          SGK prim desteği uygulamalarının doğru işletilmesine kadar tüm
          süreç, ayrıca bir yerel danışmanlık firması aramanıza gerek
          kalmadan bizzat Koray Akdağ / Sistem Global Danışmanlık tarafından
          uçtan uca yürütülmektedir. Şirketinizin Ar-Ge Merkezi olmaya uygun
          olup olmadığını değerlendirmek ve süreci birlikte planlamak için
          bizimle iletişime geçebilirsiniz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • TEYDEB • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri 2026</h3>
        </Link>
        <Link
          href="/blog/teknopark-nedir-avantajlari"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">TEKNOPARK • AR-GE • YAZILIM</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Teknopark Nedir? Avantajları, Vergi İstisnaları ve Başvuru Rehberi</h3>
        </Link>
        <Link
          href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
