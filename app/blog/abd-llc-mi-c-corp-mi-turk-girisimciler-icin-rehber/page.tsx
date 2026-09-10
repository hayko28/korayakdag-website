import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "ABD'de LLC mi C-Corp mu? Yapı ve Eyalet Seçimi Rehberi 2026 | Koray Akdağ",
  description:
    "LLC ve C-Corp farkları, Türk ortak açısından vergi sonuçları, Delaware-Wyoming-Nevada-Florida-Texas maliyet karşılaştırması, Form 5472, BOI ve nexus riskiyle 2026 karar rehberi.",
  keywords: [
    "llc mi c-corp mu",
    "abd llc kurma",
    "delaware wyoming karşılaştırma",
    "form 5472 cezası",
    "abd şirket vergi",
    "boi bildirimi 2026",
    "foreign qualification nedir",
    "abd ekonomik nexus eşiği",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="ABD'de LLC mi C-Corp mu? Türk Girişimciler İçin Yapı ve Eyalet Seçimi Karar Rehberi"
      description="ABD'de şirket kurarken verilen en pahalı hata, yanlış yapı ve yanlış eyalet seçimidir. LLC ile C-Corp arasındaki gerçek vergi farkı, Delaware, Wyoming, Nevada, Florida ve Texas'ın 2026 maliyet tablosu, foreign qualification ve nexus riski, EIN ve ITIN süreci, Form 5472 cezaları, BOI bildiriminin 2026 itibarıyla değişen durumu ve iş modeline göre karar tablosu."
      category="YURT DIŞI ŞİRKET • ABD • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="abd-llc-mi-c-corp-mi-turk-girisimciler-icin-rehber"
      ctaHeading="ABD'de Şirket Kuruluşu İçin Destek Alın"
      ctaText="LLC mi C-Corp mu, hangi eyalet, EIN ve banka hesabı, ABD ile Türkiye tarafındaki vergi yükümlülükleri. ABD'de yapılanma sürecinizi baştan sona yönetiyoruz. İş modelinize uygun kurguyu birlikte belirleyelim."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          ABD&apos;de şirket kurmak teknik olarak kolaydır. Zor olan, doğru
          kararı vermektir. Kuruluş belgesi bir iki gün içinde onaylanır, ancak
          o belgede yazan iki bilgi (şirket türü ve eyalet) sonraki yıllarda
          ödeyeceğiniz vergiyi, katlanacağınız idari yükü, yatırımcı
          görüşmelerinizin seyrini ve Türkiye tarafındaki beyan
          yükümlülüklerinizi doğrudan belirler. Yanlış kurulmuş bir yapıyı
          sonradan değiştirmek ise hem maliyetli hem de vergisel olarak
          risklidir. Bu rehber, genel kuruluş adımlarını değil, bu iki kararı
          derinlemesine ele alır.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ LLC ve C-Corp arasındaki gerçek fark: vergi, ortaklık, kâr dağıtımı, idari yük</li>
          <li>✔ Türkiye&apos;de mukim bir ortak için iki yapının vergisel sonucu ve ÇVÖA etkisi</li>
          <li>✔ Delaware, Wyoming, Nevada, Florida ve Texas&apos;ın 2026 maliyet tablosu</li>
          <li>✔ Foreign qualification zorunluluğu ve nexus riski</li>
          <li>✔ EIN, ITIN, banka hesabı ve fintech alternatiflerinde gerçekçi beklenti</li>
          <li>✔ Form 5472 ve 1120 yükümlülüğü, 25.000 USD&apos;lik ceza riski</li>
          <li>✔ BOI bildiriminin 2026 itibarıyla değişen durumu</li>
          <li>✔ Dört somut iş modeli için karar tablosu</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#llc-ccorp-fark"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. LLC ve C-Corp Arasındaki Gerçek Farklar
          </Link>
          <Link
            href="#turk-ortak-vergi"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. Türkiye&apos;de Mukim Ortak Açısından Vergisel Sonuç
          </Link>
          <Link
            href="#eyalet-karsilastirma"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Eyalet Karşılaştırması: 2026 Maliyet Tablosu
          </Link>
          <Link
            href="#nexus"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            4. Foreign Qualification ve Nexus Riski
          </Link>
          <Link
            href="#ein-itin"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            5. EIN, ITIN ve Banka Hesabı Gerçeği
          </Link>
          <Link
            href="#beyan"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Form 5472, 1120 ve BOI: 2026 Durumu
          </Link>
          <Link
            href="#sales-tax"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. Sales Tax ve Ekonomik Nexus Eşikleri
          </Link>
          <Link
            href="#karar-tablosu"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            8. Karar Tablosu: Dört Somut Senaryo
          </Link>
          <Link
            href="#turkiye"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            9. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link
            href="#hatalar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            10. Sık Yapılan Hatalar
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            11. Sık Sorulan Sorular
          </Link>
          <Link
            href="#sonuc"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            12. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. LLC VE C-CORP FARKLARI */}
      <section id="llc-ccorp-fark" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. LLC ve C-Corp Arasındaki Gerçek Farklar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İki yapı da sınırlı sorumluluk sağlar, yani şirketin borcundan
          ortağın kişisel malvarlığı sorumlu olmaz. Ayrım bundan sonra
          başlar. LLC, ABD hukukunda sözleşme serbestisi üzerine kurulmuş,
          esnek bir ortaklık yapısıdır. C-Corp ise hisse senedine dayalı,
          kurumsal formaliteleri belirlenmiş klasik sermaye şirketidir.
          Aradaki fark yalnızca vergisel değildir, şirketin nasıl
          yönetileceğini ve nasıl büyüyeceğini de belirler.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">LLC</th>
                <th className="p-5">C-Corp</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Vergilendirme mantığı</td>
                <td className="p-5">
                  Varsayılan olarak şeffaf (pass-through). Şirket düzeyinde
                  federal kurumlar vergisi doğmaz, kazanç doğrudan ortağın
                  vergi matrahına aktarılır
                </td>
                <td className="p-5">
                  Şirketin kendisi vergi mükellefidir. Kazanç üzerinden %21
                  federal kurumlar vergisi ödenir, temettü dağıtımında ortak
                  düzeyinde ikinci vergi doğar
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kâr dağıtımı</td>
                <td className="p-5">
                  Kâr, dağıtılsın veya dağıtılmasın ortağa atfedilir. Nakit
                  çekişi genellikle ayrı bir vergilendirme olayı yaratmaz
                </td>
                <td className="p-5">
                  Kâr şirkette bekletilebilir. Vergi yalnızca temettü
                  dağıtıldığında ortak düzeyinde doğar, bu da zamanlama esnekliği sağlar
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ortaklık yapısı</td>
                <td className="p-5">
                  Ortaklık payları operating agreement ile serbestçe
                  düzenlenir. Farklı kâr paylaşım oranları kurgulanabilir
                </td>
                <td className="p-5">
                  Hisse sınıfları (common, preferred), opsiyon havuzu ve
                  vesting standart olarak kurgulanabilir
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yatırım alma</td>
                <td className="p-5">
                  Girişim sermayesi fonlarının çoğu şeffaf vergilendirme
                  nedeniyle LLC&apos;ye yatırım yapmaktan kaçınır. SAFE ve
                  benzeri standart araçlar LLC&apos;ye uyarlanmak zorunda kalır
                </td>
                <td className="p-5">
                  Piyasa standardı. Delaware C-Corp, melek yatırımcı ve VC
                  görüşmelerinde neredeyse ön koşul niteliğindedir
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İdari yük</td>
                <td className="p-5">
                  Yönetim kurulu, yıllık genel kurul ve hisse defteri
                  zorunluluğu yok. Yıllık işlem sayısı düşük
                </td>
                <td className="p-5">
                  Yönetim kurulu kararları, hisse defteri, yıllık toplantı
                  tutanakları ve daha ağır bir beyan takvimi gerekir
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Yıllık taşıma maliyeti</td>
                <td className="p-5">
                  Genellikle daha düşük. Eyalet ücreti, registered agent ve
                  sınırlı muhasebe yükü
                </td>
                <td className="p-5">
                  Daha yüksek. Franchise tax hesaplaması, kurumsal beyanname
                  ve daha kapsamlı muhasebe gerekir
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Sık atlanan bir ayrıntı: LLC&apos;nin vergisel sınıflandırması
            sabit değildir. Tek ortaklı bir LLC varsayılan olarak
            &quot;disregarded entity&quot; (sahibinden ayrı görülmeyen
            işletme), çok ortaklı bir LLC ise ortaklık (partnership) olarak
            sınıflandırılır. Form 8832 ile şirket olarak vergilendirilmeyi
            seçmek de mümkündür. Yani &quot;LLC kurdum, o zaman pass-through
            oldum&quot; cümlesi otomatik doğru değildir, seçim ve tercihler
            sonucu değiştirir.
          </p>
        </div>
      </section>

      {/* 2. TÜRK ORTAK AÇISINDAN VERGİ */}
      <section id="turk-ortak-vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Türkiye&apos;de Mukim Ortak Açısından Vergisel Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu bölüm, İngilizce kaynaklarda kolay bulunamayan ve Türk
          girişimcilerin en çok yanlış bilgilendirildiği alandır. ABD
          vergilendirmesinin çıkış noktası, gelirin ABD kaynaklı olup
          olmadığıdır. Teknik adıyla effectively connected income (ECI),
          yani ABD&apos;de yürütülen bir ticari faaliyetle fiilen bağlantılı
          kazanç.
        </p>

        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            2.1. LLC&apos;de pass-through yapısının Türk ortak için anlamı
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Pass-through, verginin ortadan kalkması değil, vergilendirme
            noktasının şirketten ortağa taşınmasıdır. Türkiye&apos;de mukim
            bir kişi ABD&apos;de tek ortaklı LLC kurduğunda iki farklı senaryo
            ortaya çıkar:
          </p>
          <ul className="ml-6 list-disc space-y-4 leading-8 text-gray-700 marker:text-orange-500">
            <li>
              <strong>ABD kaynaklı kazanç yoksa:</strong> Şirketin ABD&apos;de
              ofisi, çalışanı, deposu veya bağımlı temsilcisi yoksa ve hizmet
              fiilen Türkiye&apos;den veriliyorsa, kazanç genellikle ECI
              sayılmaz. Bu durumda ABD&apos;de federal gelir vergisi doğmayabilir.
              Ancak dikkat: bu, &quot;vergi ödenmiyor&quot; demek değildir.
              Kazanç Türkiye&apos;de mukim ortağın beyanına girer ve Türkiye
              mevzuatı çerçevesinde vergilendirilir.
            </li>
            <li>
              <strong>ABD kaynaklı kazanç varsa:</strong> Ortak, ABD&apos;de
              Form 1040-NR ile beyanda bulunmak durumundadır. Bu da ITIN
              alınmasını gerektirir. Kazanç, kişisel gelir vergisi dilimlerine
              göre vergilendirilir ve bu dilimler yüksek kârlarda %21 sabit
              kurumlar vergisi oranını aşabilir.
            </li>
          </ul>
          <p className="mt-6 leading-8 text-gray-700">
            İkinci senaryo, LLC&apos;nin sanılanın aksine her zaman avantajlı
            olmadığını gösterir. ABD&apos;de gerçek bir operasyon kuracaksanız
            pass-through yapı, kazancınızı ABD kişisel vergi dilimlerine
            maruz bırakır.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            2.2. C-Corp&apos;ta %21 kurumlar vergisi ve temettü stopajı
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            C-Corp&apos;ta hesap çok daha öngörülebilirdir. Kazanç üzerinden
            önce %21 federal kurumlar vergisi ödenir. Kalan tutar temettü
            olarak yabancı ortağa dağıtıldığında, ABD iç mevzuatı gereği
            prensip olarak %30 stopaj uygulanır. Türkiye ile ABD arasındaki
            Çifte Vergilendirmeyi Önleme Anlaşması bu oranı düşürür.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Gelir türü</th>
                  <th className="p-5">ABD iç mevzuatı</th>
                  <th className="p-5">Türkiye-ABD ÇVÖA sınırı</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Temettü (portföy)</td>
                  <td className="p-5">%30</td>
                  <td className="p-5">%20</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">
                    Temettü (oy hakkının en az %10&apos;una sahip şirket ortağı)
                  </td>
                  <td className="p-5">%30</td>
                  <td className="p-5">%15</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Faiz</td>
                  <td className="p-5">%30</td>
                  <td className="p-5">%15</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-5 font-semibold">Gayrimaddi hak bedeli (royalty)</td>
                  <td className="p-5">%30</td>
                  <td className="p-5">%5 veya %10 (hak türüne göre)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Anlaşma oranından yararlanabilmek için ödemeyi yapan tarafa Form
            W-8BEN (gerçek kişi) veya W-8BEN-E (tüzel kişi) verilmesi ve
            Türkiye&apos;den alınan mukimlik belgesinin ibrazı gerekir. Bu
            belge verilmezse anlaşma oranı değil, %30&apos;luk iç mevzuat oranı
            uygulanır. Uygulamada en sık karşılaşılan kayıp buradadır.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Basit bir karşılaştırma mantığı
          </h3>
          <p className="leading-8 text-gray-700">
            100 birim kâr eden bir C-Corp, önce 21 birim federal kurumlar
            vergisi öder. Kalan 79 birim, oy hakkının en az %10&apos;una sahip
            bir Türk şirketine temettü olarak dağıtılırsa ÇVÖA kapsamında en
            fazla %15 stopaja tabi olur ve yaklaşık 67 birim net kalır.
            ABD&apos;de vergilendirilebilir kazancı olmayan bir LLC&apos;de ise
            ABD tarafında bu katmanlar oluşmaz, ancak kazancın tamamı
            Türkiye&apos;deki ortağın beyanına girer. Hangi yapının daha
            avantajlı olduğu, kârın ABD&apos;de mi bekletileceği yoksa hemen
            Türkiye&apos;ye mi aktarılacağına ve ABD&apos;de gerçek bir
            faaliyet bulunup bulunmadığına göre değişir. ABD&apos;de ödenen
            verginin Türkiye&apos;de mahsubu, anlaşma ve iç mevzuat
            çerçevesinde mümkün olabilir.
          </p>
        </div>
      </section>

      {/* 3. EYALET KARŞILAŞTIRMASI */}
      <section id="eyalet-karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Eyalet Karşılaştırması: 2026 Maliyet Tablosu
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Eyalet seçimi çoğu içerikte &quot;Delaware mi Wyoming mi&quot;
          ikilemine indirgenir. Oysa gerçek operasyonu olan girişimler için
          Florida ve Texas, gizlilik önceliği olanlar için Nevada da masada
          olmalıdır. Aşağıdaki rakamlar 2026 itibarıyla ilgili eyaletlerin
          resmi ücret yapılarına dayanır, registered agent ve hizmet
          bedelleri hariçtir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Eyalet</th>
                <th className="p-4">Kuruluş (LLC)</th>
                <th className="p-4">Yıllık zorunlu ödeme (LLC)</th>
                <th className="p-4">Eyalet gelir/kurumlar vergisi</th>
                <th className="p-4">Gizlilik</th>
                <th className="p-4">Yatırımcı algısı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Delaware</td>
                <td className="p-4">110 USD</td>
                <td className="p-4">
                  300 USD sabit franchise tax, 1 Haziran son tarih. LLC için
                  ayrıca yıllık rapor zorunluluğu yok
                </td>
                <td className="p-4">Eyalet dışında elde edilen gelire eyalet kurumlar vergisi yok</td>
                <td className="p-4">Orta. Ortak isimleri kuruluş belgesinde yer almaz</td>
                <td className="p-4">En yüksek. VC standardı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Wyoming</td>
                <td className="p-4">100 USD</td>
                <td className="p-4">
                  En az 60 USD yıllık lisans vergisi. Kuruluş ayının ilk günü
                  son tarih
                </td>
                <td className="p-4">Eyalet gelir vergisi ve kurumlar vergisi yok</td>
                <td className="p-4">Yüksek. Ortak bilgisi kamuya açık sicilde görünmez</td>
                <td className="p-4">Düşük</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Nevada</td>
                <td className="p-4">
                  Toplam 425 USD (75 USD kuruluş, 150 USD ilk liste, 200 USD
                  eyalet işletme lisansı)
                </td>
                <td className="p-4">
                  350 USD (150 USD yıllık liste, 200 USD lisans yenileme)
                </td>
                <td className="p-4">Eyalet gelir vergisi yok, ancak brüt hasılat vergisi rejimi mevcut</td>
                <td className="p-4">Yüksek</td>
                <td className="p-4">Düşük</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Florida</td>
                <td className="p-4">125 USD</td>
                <td className="p-4">
                  138,75 USD yıllık rapor, 1 Mayıs son tarih. Geciken
                  başvuruya 400 USD ceza
                </td>
                <td className="p-4">Kişisel gelir vergisi yok, kurumlar vergisi mevcut</td>
                <td className="p-4">Düşük. Yönetici bilgileri kamuya açık</td>
                <td className="p-4">Orta</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">Texas</td>
                <td className="p-4">300 USD</td>
                <td className="p-4">
                  Franchise tax beyanı, 15 Mayıs son tarih. 2026 raporlarında
                  2.650.000 USD yıllık hasılat eşiğinin altında vergi çıkmaz,
                  ancak bilgi raporu yine de verilir
                </td>
                <td className="p-4">Kişisel gelir vergisi yok. Franchise tax oranı %0,375 veya %0,75</td>
                <td className="p-4">Düşük</td>
                <td className="p-4">Orta</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          C-Corp tarafında tablo değişir. Delaware&apos;de bir C-Corp, 50 USD
          yıllık rapor ücretine ek olarak franchise tax öder. Yetkilendirilmiş
          hisse yöntemiyle asgari tutar 175 USD, varsayılan itibari değer
          yöntemiyle asgari 400 USD, azami tutar ise çoğu şirket için 200.000
          USD&apos;dir. Son tarih 1 Mart&apos;tır ve geç kalınması halinde 200
          USD ceza ile aylık %1,5 faiz işler. Yüksek sayıda hisse
          yetkilendiren yeni kurulmuş bir startup, hesaplama yöntemini yanlış
          seçtiğinde beklenmedik şekilde on binlerce dolarlık bir fatura ile
          karşılaşabilir. Bu tablo, gerçek kuruluş sürecinin adımlarıyla
          birlikte değerlendirilmelidir.{" "}
          <Link
            href="/blog/amerikada-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            ABD&apos;de şirket kuruluş sürecinin tamamı için genel rehberimize
            bakabilirsiniz.
          </Link>
        </p>
      </section>

      {/* 4. NEXUS */}
      <section id="nexus" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Foreign Qualification ve Nexus Riski
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          ABD&apos;de yapılan en pahalı hatalardan biri, &quot;vergisi yok&quot;
          diye Wyoming&apos;de şirket kurup fiilen başka bir eyalette
          faaliyete geçmektir. ABD federal bir sistemdir ve her eyalet, kendi
          sınırları içinde iş yapan şirketlerden kayıt olmasını ister. Bu
          kayda foreign qualification denir. Buradaki &quot;foreign&quot;
          yabancı ülke değil, başka bir eyalet anlamına gelir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            ⚠️ Hangi durumlarda ikinci eyalete kayıt gerekir?
          </h3>
          <ul className="ml-6 list-disc space-y-4 leading-8 text-gray-700 marker:text-yellow-600">
            <li>O eyalette fiziksel bir ofis, mağaza, depo veya showroom açtıysanız</li>
            <li>O eyalette çalışan istihdam ediyorsanız</li>
            <li>O eyalette stok tutuyorsanız, üçüncü parti bir depoda dahi olsa</li>
            <li>Faaliyetlerinizi o eyaletten yöneten bir yönetici bulunuyorsa</li>
            <li>O eyalette düzenli ve sürekli ticari faaliyet yürütüyorsanız</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Sonuçları somutlaştırmak gerekirse: Kaliforniya&apos;da fiilen iş
          yapan ancak kayıt yaptırmayan bir eyalet dışı LLC, yıllık 800
          USD&apos;lik asgari franchise vergisinden kurtulmaz. Üstelik kayıtsız
          faaliyet nedeniyle yıllık 2.000 USD tutarında ayrı bir cezaya muhatap
          olabilir ve eyalet mahkemelerinde sözleşmelerini icra edemez hale
          gelebilir. Yani &quot;Wyoming&apos;de kurdum, Kaliforniya beni
          ilgilendirmez&quot; yaklaşımı hukuken karşılığı olmayan bir
          varsayımdır.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratik kural şudur: ABD&apos;de fiziksel bir varlığınız
            olmayacaksa, kuruluş eyaletini maliyet ve gizlilik üzerinden
            seçebilirsiniz. Ancak belirli bir eyalette gerçek operasyon
            kuracaksanız, doğrudan o eyalette kurmak genellikle hem daha ucuz
            hem de idari olarak daha basittir. İki eyalette birden kayıtlı
            olmak, iki ayrı registered agent, iki ayrı yıllık rapor ve iki
            ayrı ücret demektir.
          </p>
        </div>
      </section>

      {/* 5. EIN ITIN BANKA */}
      <section id="ein-itin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. EIN, ITIN ve Banka Hesabı Gerçeği
        </h2>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Şirket tescili</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">EIN başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Banka veya fintech hesabı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Gerekiyorsa ITIN</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.1. SSN&apos;i olmayan yabancı için EIN
          </h3>
          <p className="leading-8 text-gray-700">
            EIN, şirketin federal vergi kimlik numarasıdır ve banka hesabı ile
            beyan süreçlerinin ön koşuludur. IRS&apos;in online EIN aracı,
            işletmenin esas faaliyet yeri ABD dışında olan başvuru sahiplerine
            kapalıdır. Bu durumda Form SS-4 doldurularak telefon, faks veya
            posta yoluyla uluslararası başvuru yapılır. SSN veya ITIN sahibi
            olmayan sorumlu kişi (responsible party), formun ilgili alanına
            &quot;Foreign&quot; yazar. Telefon başvurusu genellikle aynı gün
            sonuçlanırken, faks yaklaşık dört iş günü, posta ise haftalar
            sürebilir. EIN&apos;in ITIN ile karıştırılmaması önemlidir: EIN
            şirkete, ITIN kişiye aittir.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.2. ITIN gerçekten gerekli mi?
          </h3>
          <p className="leading-8 text-gray-700">
            ITIN, yalnızca ortağın ABD&apos;de kişisel beyan verme
            yükümlülüğü doğduğunda gereklidir. Bunun en yaygın nedeni,
            LLC&apos;nin ABD&apos;de ticari faaliyet yürütmesi ve ECI elde
            etmesidir. Bu durumda Form 1040-NR beyanı için Form W-7 ile ITIN
            başvurusu yapılır ve başvuru genellikle beyannameye eklenir.
            Yoğun dönem dışında işlem süresi yedi ila on bir hafta arasında
            değişebilir. Buna karşılık, ABD kaynaklı vergilendirilebilir
            kazancı olmayan bir LLC ortağının ITIN alması çoğu durumda
            gerekmez. Sırf &quot;olsun&quot; diye ITIN başvurusu yapmak
            gereksiz bir bekleme süresi yaratır.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.3. Banka hesabında gerçekçi beklenti
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Kuruluş uzaktan tamamlanır ancak geleneksel bankacılık uzaktan
            çalışmaz. Chase ve Bank of America gibi bankalar kurumsal hesap
            açılışında genellikle yetkilinin şubede fiziken bulunmasını ister.
            Bu nedenle yabancı kurucuların büyük bölümü fintech çözümleriyle
            başlar.
          </p>
          <ul className="ml-6 list-disc space-y-4 leading-8 text-gray-700 marker:text-orange-500">
            <li>
              <strong>Mercury:</strong> Kayıtlı bir ABD şirketi, geçerli EIN ve
              kurucu pasaportu ile SSN aranmadan online başvuruya izin verir.
              Ancak bir kabul garantisi yoktur, belirli ülke ve sektörler
              kapsam dışında tutulabilir.
            </li>
            <li>
              <strong>Wise Business ve Payoneer:</strong> Çok para birimli
              tahsilat ve ödeme için pratiktir. Klasik anlamda bir ABD banka
              hesabı olmadıkları, çoğu senaryoda tamamlayıcı bir katman
              oldukları unutulmamalıdır.
            </li>
            <li>
              <strong>Sıkılaşan durum tespiti:</strong> 2025 ve 2026 boyunca
              kara para aklamayla mücadele mevzuatı gereği yabancı sahipli
              şirketlere yönelik inceleme belirgin şekilde sertleşti. Net bir
              faaliyet tanımı, tutarlı web sitesi ve doğru beyan edilmiş nihai
              ortaklık yapısı, onay ihtimalini artıran en önemli unsurlardır.
            </li>
          </ul>
        </div>
      </section>

      {/* 6. BEYAN YÜKÜMLÜLÜKLERİ */}
      <section id="beyan" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Form 5472, 1120 ve BOI: 2026 Durumu
        </h2>

        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🚨 Form 5472: Gelir olmasa da zorunlu, cezası 25.000 USD
          </h3>
          <p className="mb-5 leading-8 text-gray-700">
            Yabancı sahipli tek ortaklı bir ABD LLC&apos;si, gelir vergisi
            açısından &quot;disregarded entity&quot; olsa dahi, bilgi beyanı
            bakımından ayrı bir kurum gibi değerlendirilir. Ortakla veya
            ilişkili kişilerle arasında raporlanabilir bir işlem varsa, ki
            sermaye koyma, ortak cari hesabı ve kâr çekişi gibi hareketler bu
            kapsamdadır, her yıl Form 5472 ile birlikte pro forma Form 1120
            verilmesi zorunludur. Pro forma beyannamede yalnızca şirketin adı,
            adresi ve ilk sayfadaki belirli kutucuklar doldurulur.
          </p>
          <p className="leading-8 text-gray-700">
            Beyanın verilmemesi veya eksik verilmesi halinde ceza 25.000
            USD&apos;dir. IRS bildiriminden itibaren 90 gün içinde eksiklik
            giderilmezse, her ilişkili kişi için 30 günlük her dönem başına
            25.000 USD ek ceza uygulanır. Bu, hiç geliri olmayan bir şirketi
            dahi kısa sürede altı haneli bir borçla karşı karşıya bırakabilecek
            bir yaptırımdır. Ayrıca bu beyan, elektronik olarak değil,
            IRS&apos;in yabancı sahipli işletmeler için belirlediği özel adrese
            posta veya faks yoluyla iletilir.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-green-800">
            ✅ BOI bildirimi: 2026&apos;da kural değişti
          </h3>
          <p className="mb-5 leading-8 text-gray-700">
            Corporate Transparency Act kapsamındaki nihai ortaklık bilgisi
            (Beneficial Ownership Information) bildirimi, 2024 ve 2025
            boyunca en çok tartışılan konulardan biriydi. Mart 2025&apos;te
            yayımlanan geçici nihai düzenleme ile ABD&apos;de kurulmuş
            şirketler kapsam dışına çıkarılmış, 11 Ağustos 2026 tarihli nihai
            kural ile bu muafiyet kalıcı hale getirilmiştir.
          </p>
          <ul className="ml-6 list-disc space-y-4 leading-8 text-gray-700 marker:text-green-600">
            <li>
              ABD hukukuna göre kurulmuş şirketler, örneğin Delaware veya
              Wyoming&apos;de kurulan bir LLC, artık FinCEN&apos;e BOI
              bildirimi yapmakla yükümlü değildir. Ortakların Türk vatandaşı
              olması bu sonucu değiştirmez.
            </li>
            <li>
              Yükümlülük, yabancı bir ülke hukukuna göre kurulmuş ve bir ABD
              eyaletinde faaliyet göstermek üzere kayıt yaptırmış şirketler
              için devam etmektedir. Örneğin Türkiye&apos;de kurulu bir anonim
              şirketin ABD&apos;de şube açması bu kapsama girebilir.
            </li>
            <li>
              Kapsamdaki yabancı şirketler, kaydın yürürlüğe girdiğine dair
              bildirimden itibaren 30 takvim günü içinde beyanda bulunur ve ABD
              vatandaşı nihai ortakları raporlamaz.
            </li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            İnternette hâlâ &quot;ABD LLC sahipleri BOI bildirimi yapmazsa
            günlük ceza öder&quot; diyen çok sayıda içerik bulunuyor. Bu
            bilgiler 2024 dönemine aittir ve güncel değildir. Güncel durum için{" "}
            <a
              href="https://www.fincen.gov/boi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              FinCEN&apos;in resmi BOI sayfası
            </a>{" "}
            esas alınmalıdır.
          </p>
        </div>
      </section>

      {/* 7. SALES TAX */}
      <section id="sales-tax" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Sales Tax ve Ekonomik Nexus Eşikleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          ABD&apos;de katma değer vergisi yoktur. Onun yerine eyalet ve yerel
          düzeyde uygulanan satış vergisi (sales tax) bulunur. Bu, e-ticaret
          yapan Türk girişimcilerin en sık gözden kaçırdığı yükümlülüktür.
          2018 tarihli Wayfair kararından bu yana, bir eyalette fiziksel varlığı
          olmayan satıcılar dahi belirli bir satış hacmini aştıklarında o
          eyalette satış vergisi toplamak ve beyan etmekle yükümlüdür. Buna
          ekonomik nexus denir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Eşik seviyesi</th>
                <th className="p-5">Örnek eyaletler</th>
                <th className="p-5">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">100.000 USD</td>
                <td className="p-5">Çoğu eyalet</td>
                <td className="p-5">En yaygın eşik. Genellikle önceki veya cari takvim yılı satışına bakılır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">250.000 USD</td>
                <td className="p-5">Alabama, Mississippi</td>
                <td className="p-5">Orta seviye eşik uygulayan eyaletler</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">500.000 USD</td>
                <td className="p-5">Kaliforniya, Texas, New York</td>
                <td className="p-5">En büyük pazarlar, en yüksek eşikler. Küçük satıcılar için nefes alanı</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Önemli bir trend var: eyaletler işlem adedine dayalı eşikleri
          kaldırıyor. Eskiden birçok eyalette 200 işlem sınırı vardı ve düşük
          fiyatlı ürün satan bir satıcı 5.000 dolarlık ciroyla bile kapsama
          girebiliyordu. Alaska 2025 başında, Utah 2025 ortasında, Illinois ise
          1 Ocak 2026 itibarıyla işlem adedi eşiğini kaldırdı. Ağustos 2026
          itibarıyla bu eşiği kaldıran eyalet sayısı 17&apos;yi aşmış durumda.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Amazon FBA ile satış yapanlar için iki ek konu vardır. Birincisi,
            Amazon&apos;un depolarında stok bulundurmak birçok eyalette
            fiziksel nexus doğurabilir. İkincisi, marketplace facilitator
            düzenlemeleri sayesinde Amazon çoğu eyalette satış vergisini
            kendisi tahsil ve beyan eder. Bu, satıcının tüm yükümlülüğünün
            ortadan kalktığı anlamına gelmez. Kendi web siteniz üzerinden
            yaptığınız doğrudan satışlar ile birden fazla kanalın birlikte
            değerlendirildiği durumlar ayrıca incelenmelidir. Dijital hizmet ve
            yazılım satanların ise SaaS&apos;ın hangi eyalette vergiye tabi
            olduğunu kontrol etmesi gerekir, çünkü bu konuda eyaletler arasında
            ciddi farklar vardır.
          </p>
        </div>
      </section>

      {/* 8. KARAR TABLOSU */}
      <section id="karar-tablosu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Karar Tablosu: Dört Somut Senaryo
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Aşağıdaki tablo, Türk girişimcilerde en sık karşılaştığımız dört iş
          modeli için tipik yönlendirmeyi özetler. Her şirketin durumu
          farklıdır ve nihai karar mutlaka somut verilerle verilmelidir.
        </p>
        <div className="space-y-8">
          <div className="rounded-2xl border-l-4 border-blue-500 bg-white p-8 shadow-sm">
            <div className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
              Senaryo 1
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Yazılım / SaaS ve yatırım alma hedefi
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              <strong>Öneri: Delaware C-Corp.</strong> Girişim sermayesi
              fonları, hisse sınıflandırması, opsiyon havuzu ve devir kolaylığı
              nedeniyle bu yapıyı bekler. Delaware&apos;in özel ticaret
              mahkemesi ve köklü içtihadı, yatırımcı açısından öngörülebilirlik
              yaratır. Kâr şirkette bekletilerek büyümeye aktarılacağı için
              %21&apos;lik sabit oran, kişisel vergi dilimlerine kıyasla
              genellikle daha avantajlıdır.
            </p>
            <p className="leading-8 text-gray-700">
              <strong>Dikkat:</strong> Franchise tax hesaplama yöntemi baştan
              doğru kurgulanmalı, yetkilendirilen hisse sayısı gereğinden
              yüksek belirlenmemelidir.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-emerald-500 bg-white p-8 shadow-sm">
            <div className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-600">
              Senaryo 2
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              E-ticaret ve Amazon FBA
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              <strong>Öneri: Wyoming veya Florida LLC.</strong> Yatırımcı
              beklentisi olmayan, kârı düzenli olarak çeken bir modelde
              C-Corp&apos;un çifte katmanı gereksiz maliyet yaratır. Wyoming
              düşük yıllık maliyet ve gizlilik, Florida ise lojistik
              yoğunluğunun bulunduğu bir eyalette operasyon kurulacaksa yerinde
              kayıt avantajı sunar.
            </p>
            <p className="leading-8 text-gray-700">
              <strong>Dikkat:</strong> Asıl konu yapı değil, satış vergisi
              uyumudur. Stokun tutulduğu eyaletler ve ekonomik nexus eşikleri
              düzenli olarak izlenmelidir.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
            <div className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-600">
              Senaryo 3
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Danışmanlık ve hizmet ihracatı
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              <strong>Öneri: Wyoming tek ortaklı LLC.</strong> Hizmet fiilen
              Türkiye&apos;den veriliyor, ABD&apos;de ofis veya personel
              bulunmuyorsa kazanç genellikle ECI sayılmaz ve ABD tarafında
              federal gelir vergisi doğmayabilir. Yıllık taşıma maliyeti en
              düşük seçenektir.
            </p>
            <p className="leading-8 text-gray-700">
              <strong>Dikkat:</strong> Vergi doğmaması, beyan yükümlülüğünün
              olmadığı anlamına gelmez. Form 5472 ve pro forma Form 1120 her
              yıl verilmelidir. Türkiye tarafında kazancın beyanı ayrıca
              değerlendirilmelidir.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-purple-500 bg-white p-8 shadow-sm">
            <div className="mb-3 text-sm font-bold uppercase tracking-wide text-purple-600">
              Senaryo 4
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ABD&apos;de gerçek fiziki operasyon (ofis, personel, depo)
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              <strong>Öneri: Operasyonun bulunduğu eyalette kuruluş, yapı
              tercihi analiz gerektirir.</strong> Texas ve Florida, kişisel
              gelir vergisi bulunmaması ve işletme dostu düzenlemeleri
              nedenleriyle öne çıkar. Delaware veya Wyoming&apos;de kurup o
              eyalette foreign qualification yaptırmak, ikinci bir maliyet
              katmanı yaratacağı için genellikle gereksizdir.
            </p>
            <p className="leading-8 text-gray-700">
              <strong>Dikkat:</strong> Bu senaryoda kazanç kesin olarak ECI
              niteliği taşır. C-Corp&apos;un %21 sabit oranı ile LLC&apos;nin
              artan oranlı kişisel vergilendirmesi, kârlılık projeksiyonu
              üzerinden karşılaştırılmalıdır. Ayrıca bordro vergileri, işveren
              yükümlülükleri ve eyalet düzeyindeki lisans gereklilikleri
              devreye girer.
            </p>
          </div>
        </div>
      </section>

      {/* 9. TÜRKİYE TARAFI */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Türkiye Tarafındaki Yükümlülükler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          ABD tarafındaki kurgu ne kadar doğru olursa olsun, Türkiye
          tarafındaki yükümlülükler ihmal edildiğinde tüm yapı risk altına
          girer. Üç başlık özellikle kritiktir.
        </p>

        <div className="space-y-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Kontrol edilen yabancı kurum kazancı
            </h3>
            <p className="leading-8 text-gray-700">
              Kurumlar Vergisi Kanunu&apos;nun 7. maddesi, belirli koşulların
              birlikte gerçekleşmesi halinde yurt dışındaki iştirakin kazancını,
              dağıtılmasa dahi Türkiye&apos;de vergilendirilebilir hale getirir.
              Bu koşullar özetle şunlardır: sermaye, kâr payı veya oy hakkının
              en az %50&apos;sine doğrudan ya da dolaylı olarak sahip olunması,
              iştirakin gayrisafi hasılatının en az dörtte birinin faiz, kira,
              lisans bedeli gibi pasif nitelikli gelirlerden oluşması, ticari
              bilanço kârı üzerindeki toplam vergi yükünün %10&apos;un altında
              kalması ve iştirakin ilgili yıldaki toplam gayrisafi hasılatının
              100.000 TL karşılığı yabancı parayı aşması. Vergi ödenmeyen bir
              ABD yapısı kurgulandığında bu maddenin devreye girip girmediği
              mutlaka değerlendirilmelidir.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Transfer fiyatlandırması
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;deki şirketiniz ile ABD&apos;deki şirketiniz
              arasında mal veya hizmet alışverişi varsa, bu işlemler ilişkili
              kişi işlemi sayılır ve emsallere uygunluk ilkesine tabidir.
              Fiyatlandırmanın belgelendirilmesi, yıllık transfer
              fiyatlandırması formunun kurumlar vergisi beyannamesi ekinde
              verilmesi ve eşikler aşılıyorsa raporlama yapılması gerekir.
              ABD tarafında da aynı işlemler Form 5472 kapsamında
              raporlanacağı için iki ülkedeki beyanların tutarlı olması
              önemlidir.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Yurt dışı yatırım bildirimi
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişiler, yurt dışında
              şirket kurmak ya da mevcut bir şirkete ortak olmak amacıyla
              yaptıkları ilk sermaye ihracını izleyen 3 ay içinde Ticaret
              Bakanlığı&apos;nın yurt dışı yatırım bildirim formunu
              doldurmakla yükümlüdür. Bildirim her yıl güncellenmelidir.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Yapı ve eyalet seçiminden registered agent atanmasına, EIN
            başvurusundan banka hesabı sürecine kadar ABD tarafını baştan sona
            biz yürütüyoruz. Kuruluş sonrasında Form 5472 ve 1120 gibi bilgi
            beyanları, eyalet yıllık raporları ve satış vergisi uyumu ile
            Türkiye tarafındaki kontrol edilen yabancı kurum, transfer
            fiyatlandırması ve yurt dışı yatırım bildirimi süreçlerinizi de
            ayrı bir yerel firma aramanıza gerek kalmadan tek çatı altında
            yönetiyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Sürecin tamamı için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 10. HATALAR */}
      <section id="hatalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Yapılan Hatalar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ &quot;ABD LLC vergi ödemez&quot; genellemesine inanmak. Vergi
            yükümlülüğü kazancın kaynağına ve ortağın mukimliğine göre belirlenir
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Yatırım alma hedefi olan bir startup&apos;ı LLC olarak kurup,
            tur öncesinde masraflı bir dönüşüm süreci yaşamak
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Fiili operasyonun bulunduğu eyalette foreign qualification
            yaptırmayıp ceza ve dava ehliyeti riskine girmek
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Form 5472 ve pro forma 1120&apos;yi &quot;gelirim yok&quot; diye
            atlamak. Ceza 25.000 USD&apos;den başlar ve katlanır
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Temettü ödemesinde W-8BEN veya W-8BEN-E ile mukimlik belgesini
            vermeyip anlaşma oranı yerine %30 stopaja katlanmak
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ E-ticarette satış vergisi uyumunu tamamen platforma bırakmak ve
            doğrudan satış kanallarını gözden kaçırmak
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Güncelliğini yitirmiş BOI içeriklerine göre hareket edip
            gereksiz işlem veya panik yaşamak
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Türkiye tarafındaki kontrol edilen yabancı kurum ve transfer
            fiyatlandırması boyutunu hiç hesaba katmamak
          </div>
        </div>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sonradan LLC&apos;den C-Corp&apos;a geçebilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Teknik olarak mümkündür. Uygulamada statutory conversion, birleşme
              yoluyla dönüşüm veya Form 8832 ile vergisel sınıflandırma değişikliği
              gibi yollar kullanılır. Ancak dönüşüm hem hukuki hem vergisel sonuçlar
              doğurur, mevcut sözleşmelerin ve banka hesaplarının yenilenmesini
              gerektirir ve yatırım turu baskısı altında yapıldığında maliyeti
              artar. Yatırım alma ihtimali ciddi ise baştan C-Corp kurmak
              genellikle daha ekonomiktir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Türkiye&apos;deki limited şirketim ABD&apos;deki şirkete ortak olabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Bu yapı, temettü stopajında ÇVÖA&apos;nın %15&apos;lik
              indirimli oranından yararlanma imkânı da sunabilir, çünkü bu oran
              oy hakkının en az %10&apos;una sahip şirket ortakları için
              öngörülmüştür. Buna karşılık kontrol edilen yabancı kurum kuralları
              ve transfer fiyatlandırması yükümlülükleri daha belirgin hale gelir.
              Karar, gerçek kişi ortaklık ile karşılaştırmalı olarak verilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026&apos;da BOI bildirimi yapmam gerekiyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Delaware, Wyoming ya da başka bir ABD eyaletinde kurulmuş bir
              şirketiniz varsa hayır. 11 Ağustos 2026 tarihli nihai kural, ABD&apos;de
              kurulmuş şirketleri BOI bildiriminden kalıcı olarak muaf tuttu.
              Yükümlülük yalnızca yabancı ülke hukukuna göre kurulup bir ABD
              eyaletinde faaliyet için kayıt yaptıran şirketler açısından devam
              ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Wyoming&apos;de kurup Kaliforniya&apos;dan müşteri kabul edersem sorun olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Sadece o eyaletten müşteri kabul etmek tek başına genellikle
              kayıt zorunluluğu doğurmaz. Sorun, o eyalette fiziksel varlık
              oluşturduğunuzda başlar: ofis, çalışan, depo veya sürekli ve
              düzenli ticari faaliyet gibi. Satış vergisi tarafında ise
              tamamen ayrı bir eşik sistemi işler ve fiziksel varlık olmasa
              dahi hacim eşiği aşıldığında yükümlülük doğar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hangi eyalet gerçekten en ucuz?
            </h3>
            <p className="leading-8 text-gray-700">
              Yalnızca eyalet ücretlerine bakıldığında Wyoming, yıllık 60
              USD&apos;lik asgari lisans vergisiyle listenin en altındadır.
              Ancak toplam maliyet, registered agent ücreti, muhasebe ve beyan
              hizmetleri ile varsa ikinci eyalet kayıtlarını da içerir. Yanlış
              eyalette kurulmuş bir şirketin ilerideki düzeltme maliyeti,
              başlangıçta ödenen birkaç yüz dolarlık farkın çok üzerindedir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              ABD&apos;de şirket kurmak bana vize veya oturum hakkı sağlar mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Şirket sahibi olmak, ABD&apos;de çalışma veya ikamet hakkı
              vermez. Göçmenlik statüsü tamamen ayrı bir süreçtir ve şirket
              kuruluşuyla otomatik bir bağlantısı bulunmaz. Bu iki konunun
              karıştırılması, yanlış beklentiye yol açan yaygın bir durumdur.
            </p>
          </div>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          ABD&apos;de yapı ve eyalet seçimi, bir tercih meselesi değil bir
          modelleme meselesidir. Doğru cevap, iş modelinizin kazancı nerede
          ürettiğine, kârı ABD&apos;de mi bekleteceğinize yoksa
          Türkiye&apos;ye mi aktaracağınıza, yatırımcı alma ihtimalinize ve
          ABD&apos;de fiziksel bir varlık oluşturup oluşturmayacağınıza göre
          değişir. Yatırım hedefi olan bir teknoloji girişimi için Delaware
          C-Corp, hizmet ihracatı yapan bir danışman için düşük maliyetli bir
          Wyoming LLC, ABD&apos;de gerçek operasyon kuracak bir üretici içinse
          operasyonun bulunduğu eyalet doğru başlangıç noktasıdır.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          Hangi yapıyı seçerseniz seçin, iki nokta değişmez: Form 5472 ve pro
          forma 1120 gibi bilgi beyanları geliriniz olmasa dahi verilmelidir ve
          Türkiye tarafındaki kontrol edilen yabancı kurum, transfer
          fiyatlandırması ile yurt dışı yatırım bildirimi yükümlülükleri
          sürecin ayrılmaz bir parçasıdır. Kuruluş kararını bu iki tarafı
          birlikte gören bir bakışla vermek, ilerideki düzeltme maliyetlerinin
          tamamını baştan ortadan kaldırır.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/amerikada-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              YURT DIŞI ŞİRKET • ABD • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Amerika&apos;da (ABD) Şirket Nasıl Kurulur? Kuruluş Süreci ve
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
            href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              VERGİ • DANIŞMANLIK • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Ulusal ve Uluslararası Vergi Danışmanlığı: KOBİ&apos;ler İçin Neden
              Gerekli?
            </h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
