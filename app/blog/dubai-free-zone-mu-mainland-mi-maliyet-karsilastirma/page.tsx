import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Dubai'de Free Zone mu Mainland mı? 2026 Maliyet Karşılaştırması | Koray Akdağ",
  description:
    "Dubai'de free zone ve mainland farkları, 2026 güncel lisans/vize/ofis maliyet tablosu (AED-USD), QFZP %0 istisnasının şartları, KDV eşiği, UBO yükümlülüğü ve Türkiye tarafındaki CFC riski.",
  keywords: [
    "dubai free zone mu mainland mı",
    "dubai şirket kuruluş maliyeti 2026",
    "ifza dmcc meydan shams maliyet",
    "qualifying free zone person şartları",
    "bae kurumlar vergisi %9",
    "dubai lisans yenileme maliyeti",
    "bae kdv kayıt eşiği",
    "kontrol edilen yabancı kurum dubai",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Dubai'de Free Zone mu Mainland mı? Karar Kriterleri ve 2026 Gerçek Maliyet Tablosu"
      description="Mülkiyet, yerel pazara satış hakkı, ofis şartı, vize kotası ve denetim yükümlülüğü açısından free zone ile mainland arasındaki gerçek farklar. 2026 güncel maliyet karşılaştırması, QFZP %0 istisnasının kaybedildiği durumlar, öne çıkan serbest bölgelerin iş modeli eşleşmesi ve Türkiye tarafındaki vergi sonuçları."
      category="YURT DIŞI ŞİRKET • BAE (DUBAİ) • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="dubai-free-zone-mu-mainland-mi-maliyet-karsilastirma"
      ctaHeading="Dubai ve BAE'de Şirket Kuruluşu İçin Destek Alın"
      ctaText="Free zone mu mainland mı, hangi serbest bölge, lisans türü, vize kotası ve %9 kurumlar vergisi sonrası doğru kurgu. BAE'de yapılanma sürecinizi baştan sona yönetiyoruz. İş modelinize uygun seçeneği birlikte belirleyelim."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          BAE&apos;de şirket kurmaya karar veren hemen herkes aynı soruda
          takılıyor: free zone mu, mainland mi? İnternette dolaşan cevapların
          çoğu &quot;free zone daha ucuz ve vergisiz&quot; şeklinde
          özetleniyor. 2023&apos;te yürürlüğe giren kurumlar vergisi ve
          2025&apos;te güncellenen serbest bölge düzenlemeleri sonrasında bu
          cevap artık doğru değil. Karar, iş modelinizin BAE içine mi yoksa
          BAE dışına mı satış yaptığına, vergi tarafında hangi gelir türünü
          ürettiğinize ve Türkiye&apos;deki ortaklık yapınıza göre değişiyor.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Mülkiyet, yerel pazara satış, ofis, vize kotası ve denetim açısından gerçek farklar</li>
          <li>✔ 2026 güncel maliyet karşılaştırması (AED ve yaklaşık USD)</li>
          <li>✔ IFZA, DMCC, SHAMS, Meydan, JAFZA ve DIFC hangi iş modeline uygun?</li>
          <li>✔ %9 kurumlar vergisi ve QFZP %0 istisnasının kaybedildiği durumlar</li>
          <li>✔ KDV kayıt eşiği, Ekonomik Öz ve UBO yükümlülükleri</li>
          <li>✔ 5 somut senaryo üzerinden karar ağacı</li>
          <li>✔ Türkiye tarafındaki CFC, transfer fiyatlandırması ve temettü sonuçları</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">📑 İçindekiler</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#gercek-farklar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Free Zone ve Mainland Arasındaki Gerçek Farklar
          </Link>
          <Link
            href="#maliyet"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. 2026 Maliyet Karşılaştırma Tablosu
          </Link>
          <Link
            href="#bolgeler"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Hangi Serbest Bölge Hangi İş Modeline Uygun?
          </Link>
          <Link
            href="#vergi"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            4. %9 Kurumlar Vergisi ve QFZP %0 İstisnası
          </Link>
          <Link
            href="#kdv-uyum"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            5. KDV Eşiği, Ekonomik Öz ve UBO
          </Link>
          <Link
            href="#karar-agaci"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Karar Ağacı: 5 Senaryo
          </Link>
          <Link
            href="#turkiye"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link
            href="#hatalar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            8. Sık Yapılan Hatalar
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. GERÇEK FARKLAR */}
      <section id="gercek-farklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Free Zone ve Mainland Arasındaki Gerçek Farklar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Free zone ve mainland ayrımı, sadece şirketin kurulduğu coğrafi
          alanı değil, kimin size fatura kesebileceğini, kaç kişiye vize
          alabileceğinizi ve yıl sonunda denetim yaptırmak zorunda olup
          olmadığınızı belirler. Aşağıdaki tablo, kararı gerçekten etkileyen
          altı başlığı karşılaştırıyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">Free Zone (Serbest Bölge)</th>
                <th className="p-5">Mainland (Anakara / DET)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yabancı Mülkiyet</td>
                <td className="p-5">
                  Tüm serbest bölgelerde %100 yabancı mülkiyet, kuruluştan
                  itibaren garanti altında
                </td>
                <td className="p-5">
                  2021 sonrası çoğu ticari ve sınai faaliyette %100 mümkün.
                  Stratejik kabul edilen bazı faaliyetlerde hâlâ yerel ortak
                  veya BAE vatandaşı hizmet acentesi şartı olabiliyor
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">BAE İç Pazarına Satış</td>
                <td className="p-5">
                  Doğrudan satış yapılamaz. Üç yol var: yerel distribütör
                  atamak, mainland şube açmak veya Dubai&apos;de 2025&apos;te
                  yürürlüğe giren düzenleme kapsamında DET ikili lisansı
                  (dual license) almak
                </td>
                <td className="p-5">
                  BAE genelinde her müşteriye doğrudan satış ve fatura,
                  kamu ihalelerine katılım serbest
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ofis Şartı</td>
                <td className="p-5">
                  Çoğu bölgede flexi-desk veya paylaşımlı masa yeterli.
                  DMCC, JAFZA ve DIFC gibi üst segment bölgelerde ise fiziki
                  ofis veya kayıtlı flexi-desk zorunlu
                </td>
                <td className="p-5">
                  Ejari&apos;ye kayıtlı fiziki ofis kira sözleşmesi zorunlu.
                  Instant License ile ilk 12 ay muafiyet tanınabiliyor
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Vize Kotası</td>
                <td className="p-5">
                  Pakete bağlı ve sınırlı. Vizesiz paketler mevcut,
                  flexi-desk paketleri tipik olarak 1-6 vize hakkı verir.
                  Daha fazlası için fiziki ofis kiralamak gerekir
                </td>
                <td className="p-5">
                  Kota, Ejari&apos;ye kayıtlı ofis alanına göre hesaplanır.
                  Yeterli metrekare kiralandığında pratikte üst sınır yoktur
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Denetim (Audit)</td>
                <td className="p-5">
                  Bölgeye göre değişir. DMCC, JAFZA ve DIFC denetlenmiş mali
                  tablo ister. Vergi tarafında ise QFZP statüsünü kullanan
                  her şirket, bölge şartı olmasa dahi denetlenmiş finansal
                  tablo tutmak zorundadır
                </td>
                <td className="p-5">
                  DET tarafında genel bir denetim zorunluluğu yoktur.
                  Kurumlar vergisi mevzuatı kapsamında yıllık geliri 50
                  milyon AED&apos;yi aşan mükellefler için denetim
                  zorunludur
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Gümrük</td>
                <td className="p-5">
                  Serbest bölge içinde ve yeniden ihracatta gümrük muafiyeti.
                  Mal BAE iç pazarına girdiğinde standart %5 GCC gümrük
                  vergisi doğar
                </td>
                <td className="p-5">
                  İthalatta doğrudan %5 gümrük vergisi. Yeniden ihracatta
                  iade mekanizmaları kullanılabilir
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Dubai&apos;de 2025&apos;te yürürlüğe giren ikili lisans
            düzenlemesi, free zone şirketlerinin serbest bölge lisansını ve
            ortaklık yapısını koruyarak mainland&apos;de şube açmasına imkân
            tanıyor. Şube lisansı ve uzaktan şube için yıllık yaklaşık 10.000
            AED, altı aylık geçici izin için yaklaşık 5.000 AED seviyesinde
            bir ek maliyet öngörülüyor. Bu, &quot;BAE içine de satmam
            gerekebilir&quot; diyen firmalar için mainland&apos;e geçmeden
            önce değerlendirilmesi gereken bir ara çözümdür.
          </p>
        </div>
      </section>

      {/* 2. MALİYET */}
      <section id="maliyet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 2026 Maliyet Karşılaştırma Tablosu
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          BAE dirhemi ABD dolarına sabitlenmiştir (1 USD ≈ 3,67 AED), bu
          nedenle dolar karşılıkları yıl içinde değişmez. Aşağıdaki rakamlar
          2026 için piyasada gözlemlenen bantları yansıtır. Bölge, faaliyet
          sayısı, vize adedi ve seçilen paket kombinasyonuna göre gerçek
          teklif bu bantların içinde ciddi şekilde değişebilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Free Zone (AED / yaklaşık USD)</th>
                <th className="p-5">Mainland (AED / yaklaşık USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Ticaret lisansı (yıllık)
                </td>
                <td className="p-5">
                  Giriş segmenti 5.500-15.000 AED (1.500-4.100 USD), orta
                  segment 20.000-35.000 AED (5.450-9.500 USD)
                </td>
                <td className="p-5">
                  10.000-25.000 AED (2.700-6.800 USD). Genel ticaret
                  faaliyetinde DET faaliyet harcı tek başına 15.000 AED
                  seviyesine çıkabiliyor
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Kuruluş / tescil (tek seferlik)
                </td>
                <td className="p-5">
                  Genelde lisans paketine dahil. JAFZA gibi bölgelerde ayrı
                  yaklaşık 5.000 AED (1.350 USD) kayıt ücreti
                </td>
                <td className="p-5">
                  İsim onayı, ön onay, ana sözleşme noter ve DET işlem
                  bedelleri toplamı yaklaşık 2.000-4.000 AED (550-1.100 USD)
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Ofis / flexi-desk (yıllık)
                </td>
                <td className="p-5">
                  Vizesiz paketlerde 0. Flexi-desk paket dışıysa 5.000-19.000
                  AED (1.350-5.200 USD). DMCC tarafında bu kalem üst banda
                  yakın seyrediyor
                </td>
                <td className="p-5">
                  Ejari&apos;ye kayıtlı küçük ofis veya iş merkezi için
                  15.000-40.000+ AED (4.100-11.000+ USD). Ayrıca yıllık kira
                  üzerinden yaklaşık %5 belediye/pazar harcı
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Kuruluş kartı (establishment card)
                </td>
                <td className="p-5">
                  Yaklaşık 1.500-3.500 AED (400-950 USD), bölge bazında
                  değişiyor
                </td>
                <td className="p-5">
                  MOHRE ve GDRFA kayıtları dahil yaklaşık 2.000-4.000 AED
                  (550-1.100 USD)
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Yatırımcı vizesi (2 yıl, kişi başı)
                </td>
                <td className="p-5">
                  Bölge kotası içindeyse yaklaşık 3.500-7.000 AED (950-1.900
                  USD)
                </td>
                <td className="p-5">
                  Yaklaşık 3.500-6.500 AED (950-1.770 USD) devlet harcı
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Emirates ID, sağlık kontrolü, vize damgası
                </td>
                <td className="p-5" colSpan={2}>
                  Her iki yapıda da vize bedeline ek olarak alınır. Kişi başı
                  yaklaşık 1.000-2.000 AED (270-550 USD). Zorunlu sağlık
                  sigortası kişi başı yaklaşık 600 AED&apos;den (165 USD)
                  başlar
                </td>
              </tr>
              <tr className="border-b bg-orange-50 hover:bg-orange-100">
                <td className="p-5 font-semibold">
                  1. yıl toplam (1 ortak vizesi dahil)
                </td>
                <td className="p-5 font-semibold">
                  Yaklaşık 20.000-40.000 AED (5.450-10.900 USD). Üst segment
                  bölgelerde 50.000 AED (13.600 USD) ve üzeri
                </td>
                <td className="p-5 font-semibold">
                  Yaklaşık 40.000-90.000 AED (10.900-24.500 USD)
                </td>
              </tr>
              <tr className="bg-orange-50 hover:bg-orange-100">
                <td className="p-5 font-semibold">
                  Yıllık yenileme (2. yıl)
                </td>
                <td className="p-5 font-semibold">
                  Tek faaliyet, 1 vize ve flexi-desk için yaklaşık
                  18.500-28.000 AED (5.000-7.600 USD)
                </td>
                <td className="p-5 font-semibold">
                  Lisans yenileme 8.000-15.000+ AED (2.200-4.100+ USD), buna
                  Ejari yenileme ve pazar harcı eklenir
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-yellow-800">
            ⚠️ Tabloda Görünmeyen Maliyetler
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-yellow-600">
            <li>
              Kurumsal banka hesabı için bazı bankaların talep ettiği asgari
              bakiye şartı, çalışma sermayenizi fiilen bloke edebilir.
            </li>
            <li>
              Kurumlar vergisi ve KDV beyanları için muhasebe ve raporlama
              hizmeti, yıllık işletme giderinin sabit bir kalemidir.
            </li>
            <li>
              QFZP statüsünü kullanacaksanız denetlenmiş mali tablo
              zorunludur ve denetim ücreti ayrı bir kalemdir.
            </li>
            <li>
              Kurumlar vergisi kaydının süresinde yapılmaması hâlinde 10.000
              AED tutarında idari para cezası uygulanmaktadır.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. BÖLGELER */}
      <section id="bolgeler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Hangi Serbest Bölge Hangi İş Modeline Uygun?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          BAE genelinde 40&apos;ın üzerinde serbest bölge otoritesi var.
          Aralarındaki fark yalnızca fiyat değil, bankaların bölgeye bakışı,
          faaliyet listesinin genişliği ve fiziki altyapıdır. En ucuz bölgeyi
          seçip banka hesabı açamamak, BAE&apos;de en sık karşılaşılan
          maliyet hatasıdır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Bölge</th>
                <th className="p-5">Uygun Olduğu İş Modeli</th>
                <th className="p-5">Yıllık Maliyet Bandı (yaklaşık)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">SHAMS (Sharjah)</td>
                <td className="p-5">
                  Tek kişilik danışmanlık, medya, içerik, yazılım ve test
                  amaçlı ilk yapılanma
                </td>
                <td className="p-5">
                  Lisans 5.500 AED&apos;den (1.500 USD) başlıyor. En düşük
                  giriş maliyeti, buna karşılık banka onayı görece zor
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Meydan (Dubai)</td>
                <td className="p-5">
                  E-ticaret, dijital hizmet, KOBİ ölçekli ticaret. Dubai
                  adresi isteyip bütçeyi kontrol etmek isteyenler
                </td>
                <td className="p-5">
                  Lisans 12.500 AED&apos;den (3.400 USD) başlıyor, vize
                  eklendikçe yükseliyor
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">IFZA (Dubai)</td>
                <td className="p-5">
                  Danışmanlık, hizmet ihracatı, çok faaliyetli KOBİ
                  yapılanmaları
                </td>
                <td className="p-5">
                  Vizesiz paket 12.900 AED&apos;den (3.500 USD) başlıyor. İlave
                  her vize yaklaşık 2.000-3.000 AED (550-820 USD)
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">DMCC (Dubai, JLT)</td>
                <td className="p-5">
                  Emtia ticareti, kurumsal itibar gerektiren yapılar, banka
                  ilişkisi kritik olan firmalar
                </td>
                <td className="p-5">
                  Lisans yaklaşık 20.000 AED&apos;den (5.450 USD) başlıyor.
                  Zorunlu flexi-desk yılda ilave 16.000-19.000 AED
                  (4.350-5.200 USD)
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">JAFZA (Jebel Ali)</td>
                <td className="p-5">
                  Depolama, üretim, toptan dağıtım, yeniden ihracat ve liman
                  bağlantılı lojistik
                </td>
                <td className="p-5">
                  Lisans 5.500-15.000 AED (1.500-4.100 USD) artı yaklaşık
                  5.000 AED tek seferlik kayıt. Depo ve vizelerle birlikte
                  gerçekçi ilk yıl 40.000-150.000 AED (10.900-40.900 USD)
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">DIFC (Dubai)</td>
                <td className="p-5">
                  Fon yönetimi, varlık yönetimi, finansal hizmetler, aile
                  ofisi ve bölgesel holding yapıları
                </td>
                <td className="p-5">
                  Yaklaşık 12.000-18.000 USD bandı. Onaylı fiziki ofis
                  zorunlu, İngiliz hukuku esaslı ayrı mahkeme sistemi
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. VERGİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. %9 Kurumlar Vergisi ve QFZP %0 İstisnası
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          BAE&apos;de kurumlar vergisi 1 Haziran 2023&apos;ten itibaren
          yürürlükte. 375.000 AED&apos;ye kadar olan vergiye tabi kazanç için
          oran %0, üzerindeki kısım için %9. Free zone şirketleri bu
          çerçevenin dışında değil. Fark şurada: &quot;Nitelikli Serbest
          Bölge Kişisi&quot; (Qualifying Free Zone Person, QFZP) şartlarını
          sağlayan bir free zone şirketi, yalnızca nitelikli geliri
          üzerinden %0 oranla vergilendirilir.
        </p>

        <h3 className="mb-5 mt-12 text-2xl font-bold text-[#071A2F]">
          4.1. QFZP Statüsünün Beş Şartı
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Bu statü kayıt sırasında verilen bir etiket değil, her vergi
          döneminde yeniden test edilen bir uyum pozisyonudur. Şartlardan biri
          bile sağlanmazsa statü kaybedilir.
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h4 className="text-base font-bold">Yeterli Ekonomik Öz</h4>
            <p className="mt-2 text-sm text-gray-600">
              Serbest bölgede fiili personel, varlık ve gider
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h4 className="text-base font-bold">Nitelikli Gelir</h4>
            <p className="mt-2 text-sm text-gray-600">
              Gelir, mevzuattaki nitelikli faaliyet listesinden doğmalı
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h4 className="text-base font-bold">De Minimis Sınırı</h4>
            <p className="mt-2 text-sm text-gray-600">
              Nitelikli olmayan gelir, cironun %5&apos;ini veya 5 milyon
              AED&apos;yi aşmamalı
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h4 className="text-base font-bold">Emsallere Uygunluk</h4>
            <p className="mt-2 text-sm text-gray-600">
              İlişkili taraf işlemlerinde transfer fiyatlandırması
              dokümantasyonu
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h4 className="text-base font-bold">Denetimli Tablo</h4>
            <p className="mt-2 text-sm text-gray-600">
              Denetlenmiş mali tablo tutma ve standart rejimi seçmemiş olma
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🚨 İstisna Hangi Durumlarda Kaybedilir?
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>
              <strong>De minimis eşiği aşılırsa:</strong> Nitelikli olmayan
              gelir, toplam cironun %5&apos;ini veya 5 milyon AED&apos;yi
              (hangisi düşükse) aştığı anda statü düşer. Bu durumda şirket
              ilgili vergi dönemi ve onu takip eden dört vergi dönemi boyunca
              QFZP olamaz, yani etki beş yıla yayılır.
            </li>
            <li>
              <strong>Faaliyet listeye girmiyorsa:</strong> Nitelikli
              faaliyetler ve hariç tutulan faaliyetler, Eylül 2025&apos;te
              yayımlanan ve 2023&apos;teki ilk düzenlemeyi yürürlükten
              kaldıran yeni Bakanlık kararıyla yeniden belirlendi. Karar,
              kurumlar vergisinin başlangıcından itibaren geriye dönük
              uygulanıyor. İmalat ve işleme, borsada fiyatı kote edilen
              emtia ticareti, hisse ve menkul kıymetlerin yatırım amaçlı
              tutulması, gemi işletmeciliği, reasürans, fon ve varlık
              yönetimi ile grup içi genel merkez, hazine ve finansman
              hizmetleri nitelikli faaliyetler arasındadır.
            </li>
            <li>
              <strong>Ekonomik öz yoksa:</strong> Serbest bölgede gerçek
              personel, varlık ve işletme gideri bulunmayan, yönetim kararları
              BAE dışında alınan bir yapı, kâğıt üzerinde free zone olsa da
              QFZP sayılmaz.
            </li>
            <li>
              <strong>Mainland&apos;e satış varsa:</strong> Free zone
              şirketinin BAE anakarasındaki müşterilere yaptığı satışlardan
              elde ettiği gelir kural olarak nitelikli gelir değildir ve de
              minimis hesabına dahil olur.
            </li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratikte en çok yanılgıya yol açan nokta şudur: BAE dışındaki
            müşterilere verilen genel danışmanlık, pazarlama, yazılım
            geliştirme veya serbest meslek benzeri hizmetler, nitelikli
            faaliyet listesinde yer almadığı için tek başına %0 oranı
            sağlamaz. Bu tür bir gelir yapısında free zone tercih etmenin
            gerekçesi vergi değil, düşük işletme maliyeti, %100 mülkiyet ve
            hızlı kuruluştur. 375.000 AED üzerindeki kazanç %9 ile
            vergilendirilir. Yıllık geliri 3 milyon AED&apos;yi aşmayan
            işletmeler ise Küçük İşletme Muafiyeti&apos;ni tercih ederek bu
            yükü 31 Aralık 2026&apos;da sona eren dönem için sıfırlayabilir,
            ancak bu muafiyet QFZP statüsüyle birlikte kullanılamaz.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Büyük Gruplar İçin: %15 Asgari Tamamlayıcı Vergi
          </h3>
          <p className="leading-8 text-gray-700">
            BAE, OECD İkinci Sütun kurallarına uyumlu olarak 1 Ocak
            2025&apos;ten itibaren geçerli Yurt İçi Asgari Tamamlayıcı Vergi
            (DMTT) uygulamasını yürürlüğe koydu. Konsolide yıllık hasılatı,
            önceki dört yılın en az ikisinde 750 milyon avroyu aşan çok
            uluslu grupların BAE&apos;deki efektif vergi oranı %15&apos;e
            tamamlanır. Bu ölçeğe ulaşan grupların BAE&apos;deki free zone
            yapıları için %0 avantajı fiilen ortadan kalkar.
          </p>
        </div>
      </section>

      {/* 5. KDV VE UYUM */}
      <section id="kdv-uyum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. KDV Eşiği, Ekonomik Öz ve UBO Yükümlülükleri
        </h2>

        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          5.1. KDV (%5) Kayıt Eşiği
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          BAE&apos;de standart KDV oranı %5&apos;tir ve eşikler free zone ile
          mainland için aynıdır. Son 12 ayda vergiye tabi arz ve ithalat
          toplamı 375.000 AED&apos;yi (yaklaşık 102.000 USD) aştıysa veya
          önümüzdeki 30 gün içinde aşılacağı öngörülüyorsa kayıt zorunludur.
          187.500 AED (yaklaşık 51.000 USD) eşiğini aşan şirketler ise
          ihtiyari olarak kayıt yaptırabilir. İhracat ağırlıklı çalışan
          firmalar için ihtiyari kayıt, yüklenilen KDV&apos;nin iadesi
          açısından çoğu zaman avantajlıdır.
        </p>
        <p className="mb-10 leading-8 text-gray-700">
          Serbest bölgelerin bir kısmı KDV mevzuatı bakımından
          &quot;Designated Zone&quot; (belirlenmiş bölge) statüsündedir. Bu
          bölgelerde mal hareketleri belirli şartlarla BAE dışında
          gerçekleşmiş sayılır. Hizmetler için ise böyle bir ayrıcalık
          yoktur, standart kurallar uygulanır. Kurumlar vergisindeki QFZP
          statüsü ile KDV&apos;deki Designated Zone statüsü birbirinden
          tamamen bağımsız iki kavramdır ve sık sık karıştırılır.
        </p>

        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          5.2. Ekonomik Öz (Economic Substance): Değişen Kural
        </h3>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu başlıkta 2026 itibarıyla en çok eskimiş bilgi dolaşıyor. Eylül
            2024&apos;te yayımlanan Bakanlar Kurulu kararıyla, klasik
            Ekonomik Öz Düzenlemeleri (ESR) kapsamındaki bildirim ve rapor
            yükümlülükleri 31 Aralık 2022&apos;den sonra biten mali yıllar
            için kaldırıldı. Bu tarihten sonraki dönemler için kesilmiş idari
            para cezaları da iptal edildi. 2019-2022 dönemine ilişkin
            yükümlülükler ise geçerliliğini koruyor. Dolayısıyla bugün
            kurulan bir şirket ESR bildirimi yapmaz. Buna karşılık ekonomik
            öz kavramı ortadan kalkmadı, kurumlar vergisi mevzuatı içine
            taşındı: QFZP statüsünü kullanacak free zone şirketleri için
            serbest bölgede yeterli personel, varlık ve işletme gideri
            bulundurma şartı devam ediyor.
          </p>
        </div>

        <h3 className="mb-5 mt-12 text-2xl font-bold text-[#071A2F]">
          5.3. Gerçek Faydalanıcı (UBO) Bildirimi
        </h3>
        <p className="leading-8 text-gray-700">
          Kasım 2023&apos;te yürürlüğe giren düzenleme uyarınca hem mainland
          hem de finansal olmayan serbest bölgelerde kurulu tüm şirketler,
          gerçek faydalanıcı kaydı tutmak ve lisans veren otoriteye bildirmek
          zorundadır. Gerçek faydalanıcı, şirketin paylarının veya oy
          haklarının %25 ve üzerine nihai olarak sahip olan ya da yönetim
          üzerinde fiilen kontrol sahibi gerçek kişidir. Ortaklık yapısında
          değişiklik olduğunda kaydın güncellenmesi gerekir. Uyumsuzlukta
          yazılı uyarıdan başlayan ve tekrarlanan ihlallerde 100.000
          AED&apos;ye kadar çıkabilen idari para cezaları ile lisans askıya
          alma yaptırımı uygulanabilmektedir. Halka açık şirketler ve kamu
          iştirakleri kapsam dışındadır.
        </p>
      </section>

      {/* 6. KARAR AĞACI */}
      <section id="karar-agaci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karar Ağacı: Hangi İş Modelinde Hangisi?
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Kararı verirken sorulacak ilk soru vergi değil, müşterinin nerede
          olduğudur. Aşağıdaki dört adım, çoğu vakada doğru yapıyı ortaya
          çıkarır.
        </p>

        <div className="mb-14 grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Müşteri Nerede?</h3>
            <p className="mt-2 text-sm text-gray-600">
              BAE içindeyse mainland veya ikili lisans, BAE dışındaysa free
              zone
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Gelir Türü Ne?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Nitelikli faaliyet listesinde mi, değil mi? %0 beklentisi buna
              bağlı
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Kaç Kişi Çalışacak?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Vize kotası ihtiyacı, ofis şartını ve gerçek maliyeti belirler
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Türkiye Ayağı Ne?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Ortaklık yapısı CFC ve transfer fiyatlandırması sonucunu
              değiştirir
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Senaryo 1: Yazılım veya danışmanlık ihracatı
            </h3>
            <p className="leading-8 text-gray-700">
              Müşteriler Avrupa, Körfez veya ABD&apos;de, BAE içinde satış
              yok, ekip 1-3 kişi. <strong>Öneri: free zone</strong> (IFZA,
              Meydan veya SHAMS bandı). Gerekçe düşük işletme maliyeti,
              flexi-desk yeterliliği ve hızlı kuruluştur. Vergi tarafında
              gerçekçi beklenti %0 değil, 375.000 AED üzeri kazanç için
              %9&apos;dur. Ciro 3 milyon AED&apos;nin altındaysa Küçük
              İşletme Muafiyeti dönem sonuna kadar değerlendirilmelidir.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Senaryo 2: BAE içi perakende, showroom veya servis
            </h3>
            <p className="leading-8 text-gray-700">
              Mağaza açılacak, BAE&apos;deki son kullanıcıya doğrudan satış
              ve fatura kesilecek, yerel personel istihdam edilecek.{" "}
              <strong>Öneri: mainland (DET lisansı)</strong>. Free zone bu
              modelde çalışmaz, distribütör zinciri hem marjı hem müşteri
              ilişkisini bozar. Ejari kayıtlı ofis veya dükkân zorunludur,
              ilk yıl bütçesi 40.000-90.000 AED bandında planlanmalıdır.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Senaryo 3: Bölgesel dağıtım ve lojistik merkezi
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;den mal gelecek, BAE&apos;de depolanacak, Körfez ve
              Afrika&apos;ya yeniden ihraç edilecek.{" "}
              <strong>Öneri: JAFZA veya liman bağlantılı bir serbest
              bölge</strong>. Serbest bölge içinde gümrük muafiyeti ve depo
              altyapısı belirleyicidir. İmalat ve işleme ile emtia ticareti
              nitelikli faaliyet kapsamında olduğundan %0 oranı bu senaryoda
              gerçekten mümkün olabilir. Malın BAE iç pazarına girdiği kısım
              için %5 gümrük vergisi doğar ve bu gelir nitelikli sayılmaz.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Senaryo 4: Holding, aile ofisi veya grup finansmanı
            </h3>
            <p className="leading-8 text-gray-700">
              Amaç iştirak paylarını tutmak, grup şirketlerine hazine ve genel
              merkez hizmeti vermek. <strong>Öneri: DIFC, ADGM veya
              DMCC</strong>. Hisse ve menkul kıymetlerin yatırım amaçlı
              tutulması ile grup içi genel merkez, hazine ve finansman
              hizmetleri nitelikli faaliyetler arasında olduğu için %0 oranı
              teorik olarak uygulanabilir. Buna karşılık bu senaryo,
              Türkiye&apos;de yerleşik ortaklar için kontrol edilen yabancı
              kurum riskinin en yüksek olduğu yapıdır. Kurgu, Türkiye
              tarafındaki sonuç hesaplanmadan yapılmamalıdır.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Senaryo 5: E-ticaret ve pazaryeri satışı
            </h3>
            <p className="leading-8 text-gray-700">
              Satışın bir kısmı uluslararası pazaryerlerinden, bir kısmı
              BAE&apos;deki tüketiciden geliyor.{" "}
              <strong>Öneri: free zone e-ticaret lisansı, gerekirse ikili
              lisans</strong>. BAE içi satış payı büyüyorsa mainland şube ya
              da DET ikili lisansı devreye alınmalıdır. Bu senaryoda de
              minimis eşiğinin takip edilmesi kritiktir, çünkü BAE içi satış
              nitelikli olmayan gelir olarak birikir.
            </p>
          </div>
        </div>
      </section>

      {/* 7. TÜRKİYE */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye Tarafındaki Yükümlülükler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          BAE tarafında kusursuz kurgulanmış bir yapı, Türkiye tarafı
          hesaplanmadığında beklenen avantajı sağlamayabilir. Türkiye&apos;de
          tam mükellef gerçek kişi veya kurum ortaklar için dört başlık
          belirleyicidir.
        </p>

        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            7.1. Kontrol Edilen Yabancı Kurum (CFC)
          </h3>
          <p className="leading-8 text-gray-700">
            Kurumlar Vergisi Kanunu&apos;nun 7. maddesi uyarınca,
            Türkiye&apos;de tam mükellef gerçek kişi ve kurumların doğrudan
            veya dolaylı olarak sermayesinin, kâr payının ya da oy hakkının
            en az %50&apos;sini elinde tuttuğu yurt dışı iştirakler, üç şartın
            birlikte gerçekleşmesi hâlinde dağıtılmasa dahi Türkiye&apos;de
            vergilendirilir: gayrisafi hasılatın %25 veya fazlasının pasif
            nitelikli gelirlerden oluşması, ticari bilanço kârı üzerindeki
            toplam vergi yükünün %10&apos;dan az olması ve yıllık gayrisafi
            hasılatın 100.000 TL karşılığı yabancı parayı geçmesi. BAE&apos;de
            QFZP statüsüyle %0 vergi ödeyen bir yapı, ikinci şartı doğrudan
            karşılar. Pasif gelir ağırlıklı bir holding kurgusunda %0
            avantajı Türkiye tarafında büyük ölçüde geri alınabilir.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            7.2. Transfer Fiyatlandırması ve İş Merkezi Riski
          </h3>
          <p className="mb-5 leading-8 text-gray-700">
            Türkiye&apos;deki şirketiniz ile BAE&apos;deki şirketiniz
            arasındaki mal, hizmet ve fikri mülkiyet işlemlerinin emsallere
            uygun bedelle yapılması ve belgelendirilmesi zorunludur. Bu
            yükümlülük çift taraflıdır: emsallere uygunluk ilkesine uymak
            aynı zamanda BAE tarafında QFZP statüsünün de şartlarından
            biridir.
          </p>
          <p className="leading-8 text-gray-700">
            İkinci ve daha az konuşulan risk iş merkezi riskidir. BAE&apos;de
            kurulmuş olsa dahi, iş bakımından işlemlerin fiilen toplandığı ve
            yönetildiği yer Türkiye ise, şirketin Türkiye&apos;de tam mükellef
            sayılması gündeme gelebilir. BAE&apos;de gerçek bir operasyon
            kurmak, sadece QFZP için değil bu risk için de belirleyicidir.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            7.3. Temettü Vergilendirmesi ve Çifte Vergilendirme
          </h3>
          <p className="mb-5 leading-8 text-gray-700">
            BAE&apos;de temettü dağıtımı üzerinde stopaj yoktur. Kârı
            Türkiye&apos;ye getirdiğinizde ise yurt dışı iştirak kazançları
            istisnasının klasik şartlarından biri, iştirakin bulunduğu ülkede
            en az %15 oranında vergi yükü taşınmasıdır. BAE&apos;nin %9 ve
            özellikle %0 oranları bu şartı sağlamaz. Buna karşılık 7491 sayılı
            Kanun ile getirilen düzenleme, yurt dışı iştirakin ödenmiş
            sermayesinin en az %50&apos;sine sahip olunması ve kâr payının
            ilgili yıla ait kurumlar vergisi beyannamesinin verilmesi gereken
            tarihe kadar Türkiye&apos;ye transfer edilmesi şartıyla, diğer
            şartlar aranmaksızın kâr paylarının %50&apos;sinin istisna
            edilmesine imkân tanır. Gerçek kişi ortaklar için ise elde edilen
            kâr payı menkul sermaye iradı olarak beyana tabidir.
          </p>
          <p className="leading-8 text-gray-700">
            Türkiye ile BAE arasında yürürlükte olan Çifte Vergilendirmeyi
            Önleme Anlaşması, BAE&apos;de ödenen verginin Türkiye&apos;de
            mahsubuna imkân tanır. Ancak BAE&apos;de vergi ödenmemişse mahsup
            edilecek bir tutar da oluşmaz. Bu, %0 kurgusunun Türkiye ayağında
            neden avantaj yaratmayabileceğini açıklayan temel noktadır.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            7.4. Yurt Dışı Yatırım Bildirimi
          </h3>
          <p className="leading-8 text-gray-700">
            Türkiye&apos;de yerleşik gerçek ve tüzel kişiler, BAE&apos;de
            şirket kurmak veya mevcut bir şirkete ortak olmak amacıyla
            yaptıkları ilk sermaye ihracını takip eden 3 ay içinde Yurt Dışı
            Yatırım Bildirimi formunu ilgili bakanlıklara iletmekle
            yükümlüdür. Bildirim her yıl güncellenmelidir. Konunun genel
            çerçevesi ve yararlanılabilecek Ticaret Bakanlığı destekleri için{" "}
            <Link
              href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
              className="text-orange-600 underline"
            >
              Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
            </Link>{" "}
            başlıklı rehberimize bakabilirsiniz.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Sonrasını Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Free zone ile mainland arasındaki kararı, bölge seçimini, lisans
            ve vize kotası planlamasını, kurumlar vergisi ile KDV kayıtlarını
            ve kuruluş sonrasındaki muhasebe, denetim ve raporlama sürecini
            baştan sona biz yürütüyoruz. Türkiye ayağındaki bildirim ve
            vergi sonuçlarını da aynı masada değerlendirdiğimiz için ayrı bir
            yerel firma aramanıza gerek kalmıyor.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Sürecin tamamı için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 8. HATALAR */}
      <section id="hatalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sık Yapılan Hatalar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-[#071A2F]">
              ❌ &quot;Free zone otomatik olarak %0 vergi demek&quot;
            </h3>
            <p className="text-sm leading-7 text-gray-700">
              %0 oranı sadece QFZP şartlarını sağlayan şirketin nitelikli
              gelirine uygulanır. Danışmanlık ve benzeri hizmet gelirleri bu
              kapsamda değildir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-[#071A2F]">
              ❌ En ucuz bölgeyi seçip banka hesabı açamamak
            </h3>
            <p className="text-sm leading-7 text-gray-700">
              Lisansta kazanılan birkaç bin dirhem, hesap açılamadığında
              faaliyete geçememe maliyetine dönüşür. Bölge seçiminde banka
              kabul oranı fiyat kadar önemlidir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-[#071A2F]">
              ❌ Vize kotasını paket seçilirken hesaba katmamak
            </h3>
            <p className="text-sm leading-7 text-gray-700">
              Vizesiz paketle kurulan şirkette ikinci yıl personel almak
              gerektiğinde paket yükseltmesi ve ofis şartı gündeme gelir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-[#071A2F]">
              ❌ De minimis eşiğini takip etmemek
            </h3>
            <p className="text-sm leading-7 text-gray-700">
              Nitelikli olmayan gelir eşiği bir kez aşıldığında statü kaybı
              beş vergi dönemine yayılır. Bu, tek yıllık bir hata değildir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-[#071A2F]">
              ❌ &quot;ESR kaldırıldı, ekonomik öz aranmıyor&quot; sanmak
            </h3>
            <p className="text-sm leading-7 text-gray-700">
              ESR bildirimleri kaldırıldı, ancak ekonomik öz şartı kurumlar
              vergisi mevzuatı içinde QFZP kriteri olarak devam ediyor.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-[#071A2F]">
              ❌ Kurumlar vergisi kaydını geciktirmek
            </h3>
            <p className="text-sm leading-7 text-gray-700">
              Kazanç olmasa bile kayıt zorunludur. Gecikmede 10.000 AED idari
              para cezası uygulanır.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-[#071A2F]">
              ❌ UBO bildirimini ve güncellemesini atlamak
            </h3>
            <p className="text-sm leading-7 text-gray-700">
              Ortaklık yapısı değiştiğinde kayıt güncellenmezse lisans askıya
              alınmasına kadar giden yaptırımlar söz konusu olabilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-[#071A2F]">
              ❌ Türkiye tarafını hiç hesaplamamak
            </h3>
            <p className="text-sm leading-7 text-gray-700">
              CFC kuralları, iş merkezi riski ve temettü istisnasının %15
              vergi yükü şartı, BAE&apos;deki avantajı büyük ölçüde
              dengeleyebilir.
            </p>
          </div>
        </div>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Free zone şirketi BAE içindeki bir firmaya fatura kesebilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Doğrudan ve sınırsız şekilde kesemez. Yerel bir distribütör
              üzerinden çalışmak, mainland şube açmak veya Dubai&apos;de
              2025&apos;te yürürlüğe giren düzenleme kapsamında DET ikili
              lisansı almak gerekir. Bu satışlardan doğan gelir, kurumlar
              vergisi tarafında nitelikli gelir sayılmaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Free zone mainland&apos;den her zaman daha mı ucuz?
            </h3>
            <p className="leading-8 text-gray-700">
              Genellikle evet, ancak istisnaları var. Vizesiz veya tek vizeli
              bir free zone paketinin ilk yıl maliyeti 20.000-40.000 AED
              bandında kalırken mainland tipik olarak 40.000-90.000 AED
              bandındadır. Buna karşılık DIFC gibi üst segment serbest
              bölgelerin maliyeti çoğu mainland yapısını aşar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Danışmanlık geliri elde eden bir free zone şirketi %0 vergi
              öder mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Kural olarak hayır. Genel danışmanlık ve benzeri hizmet
              gelirleri nitelikli faaliyet listesinde yer almadığı için
              375.000 AED üzerindeki kazanç %9 oranında vergilendirilir. Ciro
              3 milyon AED&apos;yi aşmıyorsa, süresi dolana kadar Küçük
              İşletme Muafiyeti seçeneği değerlendirilebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Free zone&apos;dan mainland&apos;e sonradan geçilebilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Free zone lisansını kapatıp mainland şirketi kurmak
              mümkün olduğu gibi, mevcut free zone şirketini koruyup
              mainland&apos;de şube açmak ya da ikili lisans almak da bir
              seçenektir. İkinci yol, vize ve banka ilişkisinin sıfırlanmaması
              açısından çoğu zaman daha az sürtünmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KDV kaydı free zone şirketleri için de zorunlu mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Eşikler aynıdır. Son 12 ayda vergiye tabi arz toplamı 375.000
              AED&apos;yi aşan her şirket, free zone veya mainland ayrımı
              olmaksızın kayıt yaptırmak zorundadır. Bazı serbest bölgelerin
              KDV bakımından Designated Zone statüsü, yalnızca belirli mal
              hareketleri için özel sonuç doğurur, kayıt yükümlülüğünü
              ortadan kaldırmaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              BAE&apos;de %0 vergi ödersem Türkiye&apos;de hiç vergi ödemez
              miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Tam tersi bir sonuç doğabilir. BAE&apos;de vergi ödenmediğinde
              Türkiye&apos;de mahsup edilecek bir tutar oluşmaz ve pasif
              gelir ağırlıklı yapılarda kontrol edilen yabancı kurum kuralları
              devreye girerek kâr dağıtılmasa bile Türkiye&apos;de
              vergilendirme gündeme gelebilir. Yapı kurulmadan önce her iki
              ülke tarafı birlikte modellenmelidir.
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
          Free zone mu mainland mi sorusunun tek bir doğru cevabı yok. Ancak
          doğru cevabı bulmanın yolu belli: önce müşterinin nerede olduğunu,
          sonra gelirin hangi türe girdiğini, ardından personel ve vize
          ihtiyacını, en son da Türkiye ayağını hesaplamak. BAE dışına satış
          yapan, küçük ekiple çalışan firmalar için free zone maliyet ve
          esneklik açısından hâlâ güçlü bir seçenek. BAE iç pazarına doğrudan
          satış yapacak firmalar içinse mainland ya da ikili lisans
          kaçınılmaz.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          Kritik olan nokta şu: 2023 sonrası BAE artık &quot;vergisiz
          ülke&quot; değil, düşük oranlı ve kurallı bir vergi ülkesi. %0
          beklentisiyle kurulan ama nitelikli faaliyet listesine girmeyen
          yapılar, ilk beyanname döneminde beklenmedik bir vergi yüküyle
          karşılaşıyor. Kararı, lisans fiyatı üzerinden değil, üç yıllık
          toplam maliyet ve iki ülkedeki vergi sonucu üzerinden vermek gerekir.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/dubaide-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              YURT DIŞI ŞİRKET • BAE (DUBAİ) • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Dubai&apos;de (BAE) Şirket Nasıl Kurulur? Kuruluş Süreci ve
              Avantajları
            </h3>
          </Link>
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              YURT DIŞI ŞİRKET • İHRACAT • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
            </h3>
          </Link>
          <Link
            href="/blog/suudi-arabistanda-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              YURT DIŞI ŞİRKET • SUUDİ ARABİSTAN • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Suudi Arabistan&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve
              Avantajları
            </h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
