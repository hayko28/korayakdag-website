import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Kazakistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları (2026) | Koray Akdağ",
  description:
    "TOO (Limited Şirket) kuruluşu, AIFC (Astana Uluslararası Finans Merkezi) ve 2066'ya kadar %0 kurumlar vergisi ayrıcalığı, %20 kurumlar vergisi ve 2026'da %16'ya yükselen KDV, Avrasya Ekonomik Birliği pazar erişimi, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Kazakistan rehberi.",
  keywords: [
    "kazakistanda şirket kurma",
    "kazakistan too kuruluşu",
    "aifc astana uluslararası finans merkezi",
    "kazakistan kurumlar vergisi",
    "kazakistan kdv oranı 2026",
    "kazakistanda banka hesabı açma",
    "avrasya ekonomik birliği kazakistan",
    "2026 kazakistan şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Kazakistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="TOO (Limited Şirket) kuruluşu, AIFC (Astana Uluslararası Finans Merkezi) ve 2066'ya kadar %0 kurumlar vergisi ayrıcalığı, %20 kurumlar vergisi ve 2026'da %16'ya yükselen KDV, Avrasya Ekonomik Birliği pazar erişimi, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Kazakistan rehberi."
      category="YURT DIŞI ŞİRKET • KAZAKİSTAN • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="kazakistanda-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kazakistan, Orta Asya&apos;nın en büyük ekonomisi ve Avrasya
          Ekonomik Birliği&apos;nin (AEB) kurucu üyelerinden biri olarak,
          Rusya, Belarus, Ermenistan ve Kırgızistan pazarlarına gümrüksüz
          erişim sağlayan stratejik bir konumda bulunuyor. Türk
          girişimciler için hem Orta Asya&apos;ya açılan bir kapı hem de
          Astana&apos;daki AIFC (Astana Uluslararası Finans Merkezi)
          sayesinde uzun vadeli vergi avantajı sunan nadir yapılanma
          noktalarından biri.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ TOO (Limited Şirket) ile standart kuruluş süreci</li>
          <li>✔ AIFC&apos;nin sunduğu 2066&apos;ya kadar %0 kurumlar vergisi ayrıcalığı</li>
          <li>✔ Adım adım, büyük ölçüde dijital kuruluş süreci</li>
          <li>✔ Güncel %20 kurumlar vergisi ve 2026&apos;da %16&apos;ya yükselen KDV</li>
          <li>✔ Banka hesabı açma sürecinin gerçekçi tablosu</li>
          <li>✔ Türkiye tarafındaki bildirim yükümlülükleri ve destekler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#neden-kazakistan"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden Kazakistan&apos;da Şirket Kurmalısınız?
          </Link>
          <Link
            href="#too-aifc"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. TOO mu, AIFC mi? Kritik Karar
          </Link>
          <Link
            href="#aifc-detay"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. AIFC: Astana Uluslararası Finans Merkezi
          </Link>
          <Link
            href="#surec"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            4. Adım Adım Kuruluş Süreci (TOO)
          </Link>
          <Link
            href="#vergi"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            5. Vergi Sistemi ve Oranlar
          </Link>
          <Link
            href="#banka"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Banka Hesabı Açma Süreci
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

      {/* 1. NEDEN KAZAKİSTAN */}
      <section id="neden-kazakistan" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Kazakistan&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kazakistan, Orta Koridor (Trans-Hazar) güzergâhı üzerindeki
          konumu ve Avrasya Ekonomik Birliği üyeliği sayesinde, tek bir
          tescille beş ülkelik gümrüksüz bir pazara erişim imkânı sunuyor.
          Bu özellik, ülkeyi Azerbaycan veya Gürcistan gibi diğer bölge
          alternatiflerinden ayrıştıran en somut avantaj.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              AEB Üyeliği ile Bölgesel Pazar
            </h3>
            <p className="text-gray-700">
              Avrasya Ekonomik Birliği (AEB) üyeliği, Kazakistan&apos;da
              kurulan bir şirketin Rusya, Belarus, Ermenistan ve
              Kırgızistan&apos;a gümrük vergisi ödemeden mal satabilmesini
              sağlar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hızlı ve Dijital Tescil
            </h3>
            <p className="text-gray-700">
              TOO kuruluş başvurusu, elektronik imza (EDS) ile e-Gov
              sistemi üzerinden yapıldığında genellikle 1 iş günü içinde
              onaylanır; belge hazırlığıyla birlikte toplam süreç kısa
              sürer.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏛️</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              AIFC ile Uzun Vadeli Vergi Ayrıcalığı
            </h3>
            <p className="text-gray-700">
              Astana Uluslararası Finans Merkezi&apos;nde nitelikli
              faaliyet yürüten katılımcı şirketler, 1 Ocak 2066&apos;ya
              kadar %0 kurumlar vergisinden yararlanabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TOO VS AIFC */}
      <section id="too-aifc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. TOO mu, AIFC mi? Kazakistan&apos;ın En Kritik Kararı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kazakistan&apos;da yapılanırken verilecek en önemli karar,
          şirketin standart Kazakistan hukuku altında bir{" "}
          <strong>TOO (Товарищество с ограниченной ответственностью
          — Limited Şirket)</strong> olarak mı, yoksa Astana&apos;daki
          ayrı yargı bölgesi olan{" "}
          <strong>AIFC (Astana International Financial Centre —
          Astana Uluslararası Finans Merkezi)</strong> bünyesinde mi
          kurulacağıdır. Bu iki yapı, hukuk sistemi, vergi rejimi ve
          hedef faaliyet alanı bakımından temelden farklıdır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">TOO (Standart Rejim)</th>
                <th className="p-5">AIFC (Astana Uluslararası Finans Merkezi)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yetkili Kurum</td>
                <td className="p-5">Adalet Bakanlığı / Halka Hizmet Merkezleri (NCA), e-Gov portalı</td>
                <td className="p-5">AFSA (Astana Financial Services Authority) ve AIFC Kayıt Ofisi</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hukuk Sistemi</td>
                <td className="p-5">Kazakistan Cumhuriyeti hukuku (Kazakça/Rusça)</td>
                <td className="p-5">İngiliz common law esaslı bağımsız hukuk sistemi, kendi mahkemesi (AIFC Court) ve tahkim merkezi (IAC)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar Vergisi</td>
                <td className="p-5">Standart %20</td>
                <td className="p-5">Nitelikli faaliyetlerde 1 Ocak 2066&apos;ya kadar %0 (substance şartına tabi)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Uygun Faaliyet Alanı</td>
                <td className="p-5">Her türlü ticari faaliyet: üretim, ticaret, ithalat-ihracat, hizmet</td>
                <td className="p-5">Finansal hizmetler, fintech, holding yapıları, yatırım şirketleri, Astana Hub kapsamında teknoloji girişimleri</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kimler İçin Uygun</td>
                <td className="p-5">Kazakistan iç pazarına veya AEB ülkelerine mal/hizmet satacak firmalar</td>
                <td className="p-5">Uluslararası yapı, holding, fon veya fintech kurmak isteyen, İngiliz hukuku güvencesini önceleyen yatırımcılar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kısaca: Kazakistan veya AEB pazarına doğrudan mal veya hizmet
            satacak, üretim tesisi kuracak ya da yerel bayilik ağı
            oluşturacak firmalar için standart TOO yapısı daha
            uygundur. Uluslararası finansal hizmet, fintech, holding
            veya yatırım şirketi kurmak isteyen, İngiliz hukuku
            güvencesinden ve uzun vadeli vergi ayrıcalığından
            yararlanmak isteyen yatırımcılar için ise AIFC öne çıkar.
          </p>
        </div>
      </section>

      {/* 3. AIFC DETAY */}
      <section id="aifc-detay" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. AIFC: Astana Uluslararası Finans Merkezi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2018&apos;de faaliyete geçen AIFC, Kazakistan&apos;ın geri
          kalanından ayrı, kendi yasama, yargı ve düzenleyici organlarına
          sahip özel bir yargı bölgesidir. İngiliz common law
          esasına dayanan hukuk sistemi, kendi mahkemesi (AIFC Court) ve
          Uluslararası Tahkim Merkezi (International Arbitration Centre
          — IAC) ile Kazakistan&apos;ın genel yargı sisteminden bağımsız
          çalışır. Bu yapı, özellikle yabancı yatırımcılara tanıdık bir
          hukuki güvence sunar.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 AIFC&apos;nin Sağladığı Başlıca Avantajlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Nitelikli faaliyet (qualifying/priority activity) listesine
              giren AIFC katılımcı şirketleri, 1 Ocak 2066&apos;ya kadar
              %0 kurumlar vergisinden yararlanabilir; bu ayrıcalık AFSA
              tarafından yasayla güvence altına alınmıştır.
            </li>
            <li>
              Yabancı çalışanların AIFC kaynaklı gelirleri de belirli
              şartlarda gelir vergisinden muaf tutulabilir; ayrıca AIFC
              sınırları içindeki gayrimenkuller için mülk ve arazi
              vergisi muafiyeti uygulanır.
            </li>
            <li>
              Vergi muafiyetinden yararlanmak, &quot;esaslı varlık&quot;
              (substantial presence) şartına bağlıdır: şirketin AIFC
              içinde gerçek bir faaliyet yürütmesi, faaliyet hacmiyle
              orantılı gider yapması ve yeterli sayıda tam zamanlı
              personel istihdam etmesi gerekir.
            </li>
            <li>
              AIFC kayıt süreci büyük ölçüde dijitaldir ve AFSA
              üzerinden genellikle yaklaşık 3 iş günü içinde
              tamamlanabilir; şirket kuruluşunda yerel ortak zorunluluğu
              yoktur.
            </li>
            <li>
              AIFC bünyesindeki Astana Hub programı, teknoloji
              girişimlerine ayrı vergi ve vize kolaylıkları sunarak
              AIFC&apos;yi yalnızca finansal kuruluşlar için değil,
              teknoloji odaklı şirketler için de cazip hale getirir.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          AIFC&apos;nin %0 vergi avantajı otomatik değildir; şirketin
          faaliyet konusunun nitelikli faaliyet listesine girip
          girmediği ve substance şartlarının sağlanıp sağlanmadığı somut
          olarak değerlendirilmelidir. Bu değerlendirmeyi iş modelinize
          göre birlikte yapıyoruz.
        </p>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Kuruluş Süreci (TOO)
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Standart TOO kuruluşu, belgeler eksiksiz olduğunda büyük ölçüde
          uzaktan yürütülebilir ve genellikle toplamda 1-3 hafta içinde
          tamamlanır; belge hazırlığı, tercüme ve apostil süreçleri
          toplam süreyi belirleyen ana değişkendir.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Unvan & Yapı Seçimi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Belgeler, Vekâletname & Apostil</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Elektronik Tescil (e-Gov)</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">BIN, Kaşe & Banka</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Şirket Yapısı, Ortaklık ve Ticari Unvanın Belirlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Süreç, faaliyet konusunun, ortaklık yapısının (tek ortakla
            kurulabilir; ortak gerçek veya tüzel kişi, %100 yabancı
            olabilir) ve ticari unvanın belirlenmesiyle başlar. Küçük
            işletme statüsündeki TOO&apos;lar için asgari sermaye şartı
            sembolik düzeydedir; orta ve büyük ölçekli şirketlerde ise
            Aylık Hesaplama Endeksi&apos;nin (AHE) 100 katı tutarında
            nominal bir kayıtlı sermaye öngörülür.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Kuruluş Belgelerinin Hazırlanması, Vekâletname ve Apostil
          </h3>
          <p className="leading-8 text-gray-700">
            Ana sözleşme (statüt), kuruluş kararı, kurucu kimlik/pasaport
            kopyaları Kazakça ve Rusça&apos;ya yeminli tercüme edilir.
            Yabancı ortaklar Kazakistan&apos;a fiziken gelmeden, noter
            onaylı ve apostilli bir vekâletname ile yerel temsilciye
            yetki verebilir; Türkiye ve Kazakistan her ikisi de Lahey
            Apostil Sözleşmesi&apos;ne taraf olduğundan ayrıca
            konsolosluk tasdikine gerek kalmaz.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Elektronik Tescil Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru, elektronik imza (EDS — elektron sandık qoyush) ile
            e-Gov portalı veya &quot;Azamattarğa arналған үкімет&quot;
            (Halka Hizmet) merkezleri üzerinden yapılır. Belgeler eksiksiz
            olduğunda tescil başvurusu genellikle 1 iş günü içinde
            değerlendirilir ve devlet harcı alınmaz; bu aşama, yerel
            temsilci aracılığıyla uzaktan yürütülebilir.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. BIN Alınması, Kaşe, Vergi Kaydı ve Banka Hesabı
          </h3>
          <p className="leading-8 text-gray-700">
            Tescil onaylandığında şirkete BIN (Business Identification
            Number — İşletme Kimlik Numarası) verilir ve şirket otomatik
            olarak vergi dairesine kaydedilir. Ardından şirket kaşesi
            çıkarılır, KDV mükellefiyeti gerekiyorsa ayrıca kayıt
            yapılır ve kurumsal banka hesabı açılış süreci başlatılır.
          </p>
        </div>
      </section>

      {/* 5. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi ve Oranlar (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kazakistan, 1 Ocak 2026&apos;dan itibaren son on yılın en
          kapsamlı vergi reformunu yürürlüğe koydu. Reformun en dikkat
          çeken maddesi, standart KDV oranının %12&apos;den %16&apos;ya
          yükseltilmesi ve KDV mükellefiyet eşiğinin ciddi ölçüde
          düşürülmesi oldu.
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
                <td className="p-5 font-semibold">Kurumlar Vergisi (KStV)</td>
                <td className="p-5">%20</td>
                <td className="p-5">Standart oran, TOO ve AO gibi tüm şirket türleri için geçerli (AIFC&apos;deki nitelikli faaliyetler hariç)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV</td>
                <td className="p-5">%16</td>
                <td className="p-5">1 Ocak 2026&apos;dan itibaren geçerli yeni standart oran (önceki oran %12 idi); ilaç ve tıbbi hizmetlerde %5 indirimli oran uygulanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">AIFC Nitelikli Gelir</td>
                <td className="p-5">%0</td>
                <td className="p-5">Substance şartını sağlayan AIFC katılımcılarının nitelikli faaliyetlerden elde ettiği gelir, 1 Ocak 2066&apos;ya kadar kurumlar vergisinden muaftır</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Temettü Stopajı</td>
                <td className="p-5">%15</td>
                <td className="p-5">Yerleşik olmayanlara dağıtılan kâr paylarında standart stopaj oranı; Türkiye-Kazakistan Çifte Vergilendirmeyi Önleme Anlaşması kapsamında indirimli oran uygulanabilir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            2026 reformuyla birlikte KDV mükellefiyet eşiği önemli
            ölçüde düşürüldüğünden, daha küçük ciro hacmine sahip
            şirketler de artık KDV mükellefi olabiliyor. Türkiye ile
            Kazakistan arasında 1995&apos;te imzalanan ve 1996&apos;dan
            beri yürürlükte olan Çifte Vergilendirmeyi Önleme Anlaşması
            kapsamında, Kazakistan&apos;da ödenen verginin
            Türkiye&apos;de mahsubu mümkün olabilir. Güncel oranlar için{" "}
            <a
              href="https://kgd.gov.kz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Kazakistan Vergi Dairesi (kgd.gov.kz)
            </a>{" "}
            resmi kaynağının kontrol edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* 6. BANKA HESABI */}
      <section id="banka" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Banka Hesabı Açma Süreci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket tescili hızlı ilerlese de, kurumsal banka hesabı açılışı
          Kazakistan&apos;da da sürecin en fazla planlama gerektiren
          aşamasıdır ve bankadan bankaya değişen prosedürler içerir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Banka Hesabı Açma Sürecinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Kurumsal hesap açılışı için şirketin BIN&apos;i ve
              yetkili müdürün/başkanın bireysel kimlik numarası (IIN —
              Individual Identification Number) gereklidir; IIN, şirket
              tescili tamamlandıktan sonra otomatik olarak veya ayrı bir
              başvuruyla alınabilir.
            </li>
            <li>
              Freedom Finance Bank gibi bazı bankalar kurumsal hesap
              başvurusunun uzaktan başlatılmasına imkân tanır; ancak
              banka kartı ve bazı sözleşme belgelerinin teslimi çoğu
              zaman şubeye fiziki ziyareti gerektirir.
              Halyk Bank, ForteBank ve Kaspi Bank gibi diğer büyük
              bankalarda ise yetkili imza sahibinin şubeye gelmesi
              standart uygulamadır.
            </li>
            <li>
              UBO (Ultimate Beneficial Owner — Gerçek Faydalanıcı)
              beyanı, sermayenin kaynağının netliği ve faaliyet
              konusunun açık tanımlanması, kara para aklamayı önleme
              (AML) kontrollerinde onay ihtimalini artırır.
            </li>
            <li>
              Geleneksel banka süreci uzarsa, Wise Business veya
              Payoneer gibi fintech çözümleri ilk dönemde uluslararası
              tahsilat ve ödeme için pratik bir ara çözüm sunabilir;
              ancak bu çözümler yerel tenge hesabının yerini tam olarak
              tutmaz.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. TÜRKİYE TARAFINDAKİ YÜKÜMLÜLÜKLER */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kazakistan&apos;da şirket kurmak, Türkiye tarafında da bazı
          bildirim yükümlülüklerini beraberinde getirir; buna karşılık
          Ticaret Bakanlığı&apos;nın sunduğu destek kalemlerinden de
          yararlanmak mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Kazakistan&apos;da TOO veya AIFC şirketi kuruluş sürecinizi
            doğru yapının seçiminden vekâletname ve apostil işlemlerine,
            elektronik tescil başvurusundan banka hesabı sürecine kadar
            baştan sona biz yürütüyoruz. Kuruluş sonrasında da muhasebe,
            KDV beyanı ve kurumlar vergisi raporlama hizmetinizi, ayrı bir
            yerel firma aramanıza gerek kalmadan biz sağlıyoruz.{" "}
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
            Kazakistan&apos;da şirket kurmak veya mevcut bir şirkete
            ortak olmak amacıyla yaptıkları ilk sermaye ihracını takip
            eden <strong>3 ay içinde</strong>, Ticaret Bakanlığı&apos;nın
            Yurt Dışı Yatırım Bildirimi formunu doldurarak Hazine ve
            Maliye Bakanlığı ile Ticaret Bakanlığı&apos;na göndermekle
            yükümlüdür. Bu bildirim her yıl güncellenmeli, ihmal
            edilmesi cezai yaptırımlara yol açabilmektedir.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Yurt Dışı Birim, Marka ve Tanıtım Desteği
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              Kazakistan&apos;da açılan ofis, depo, showroom veya
              mağaza gibi birimlerin kira giderlerinde temel destek
              oranı %50 olup, Bakanlık tarafından hedef ülke olarak
              belirlenmesi halinde bu oran %20 ilave edilerek
              uygulanabilir.
            </li>
            <li>
              Yıllık üst limit mağazalar için 100.000 ABD Doları,
              diğer birimler için 75.000 ABD Doları civarındadır;
              destek ülke bazında en fazla 4 yıl uygulanır.
            </li>
            <li>
              Marka tescili ve tanıtım faaliyetlerine yönelik ayrı
              destek kalemleri de mevcuttur.
            </li>
            <li>
              Başvuru için şart: Türk Ticaret Kanunu&apos;na göre
              kurulmuş Limited veya Anonim Şirket olmak ve desteğe konu
              ürünlerin Türk menşeli olması.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu destek ve bildirim yükümlülükleri, hedef ülke Kazakistan
          olsa da genel çerçevesi diğer ülkelerdeki yapılanmalarla
          aynıdır. Konunun tamamına ve güncel destek oranlarına{" "}
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

      {/* 8. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ TOO/AIFC kararını faaliyet konunuz netleşmeden vermeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ AIFC&apos;deki %0 vergi avantajı için substance şartlarının sağlandığından emin olun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ 2026&apos;da yükselen %16 KDV oranı ve düşen mükellefiyet eşiğini bütçenize yansıtın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Vekâletname ve kimlik belgelerini noter onaylı ve apostilli hazırlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılışında fiziki ziyaret gerekebileceğini planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında temettü stopajı mahsup imkânını teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
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
              Kazakistan&apos;da şirket kurmak için ülkede fiziken bulunmak gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Noter onaylı ve apostilli bir vekâletname ile yerel
              temsilciye yetki verilerek TOO tescil süreci büyük ölçüde
              uzaktan yürütülebilir. Ancak banka hesabı açılışında
              çoğu banka yetkili imza sahibinin şubeye gelmesini talep
              eder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              AIFC şirketi gerçekten %0 vergi mi öder?
            </h3>
            <p className="leading-8 text-gray-700">
              Yalnızca nitelikli faaliyet (qualifying/priority
              activity) listesine giren ve &quot;esaslı varlık&quot;
              (substance) şartlarını sağlayan AIFC katılımcıları, ilgili
              gelirleri için 1 Ocak 2066&apos;ya kadar %0 kurumlar
              vergisinden yararlanır. Bu şartları sağlamayan gelirler
              standart %20 oranına tabi olabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TOO kurmak için asgari sermaye şartı var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Küçük işletme statüsündeki TOO&apos;lar için asgari
              sermaye şartı sembolik düzeydedir. Orta ve büyük ölçekli
              şirketlerde ise Aylık Hesaplama Endeksi&apos;nin 100 katı
              tutarında nominal bir kayıtlı sermaye öngörülür; bu tutar
              işletme sermayesi ihtiyacına göre serbestçe belirlenebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kazakistan&apos;da kurulan şirketin Türkiye&apos;de de vergi yükümlülüğü olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişilerin
              Kazakistan&apos;daki şirketten elde ettiği kazançlar
              Türkiye&apos;de de beyan yükümlülüğüne tabi olabilir.
              Türkiye-Kazakistan Çifte Vergilendirmeyi Önleme Anlaşması
              kapsamında Kazakistan&apos;da ödenen verginin
              Türkiye&apos;de mahsubu mümkün olabilir; detaylar somut
              duruma göre değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Belgeler eksiksiz olduğunda elektronik tescil genellikle
              1 iş günü içinde onaylanır. Vekâletname, apostil ve
              tercüme hazırlıkları dahil edildiğinde TOO için toplam
              süreç ortalama 1-3 hafta, AIFC şirketi için ise yaklaşık
              3 iş günü; banka hesabı açılışı dahil edildiğinde ise
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
          Kazakistan, Avrasya Ekonomik Birliği üyeliğiyle sağladığı
          bölgesel pazar erişimi ve AIFC&apos;nin sunduğu 2066&apos;ya
          kadar uzanan vergi ayrıcalığıyla, Türk girişimciler için iki
          farklı ve güçlü yapılanma alternatifi sunuyor. Ancak TOO/AIFC
          kararının iş modeline uygun verilmesi, 2026 vergi reformunun
          bütçeye doğru yansıtılması ve banka hesabı sürecinin gerçekçi
          planlanması, sürecin sağlıklı ilerlemesi için kritik önemde.
          Bu kararları doğru vermek ve Türkiye tarafındaki
          yükümlülükleri eksiksiz yönetmek için profesyonel destek
          almak, sürecin hatasız tamamlanmasını sağlar.
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
          href="/blog/ozbekistanda-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • ÖZBEKİSTAN • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Özbekistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        <Link
          href="/blog/azerbaycanda-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • AZERBAYCAN • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Azerbaycan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
