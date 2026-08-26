import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Tacikistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları (2026) | Koray Akdağ",
  description:
    "ҶДММ (Limited Şirket) kuruluşu, %18 standart / %13 üretici kurumlar vergisi ve %14 KDV, 5 serbest ekonomi bölgesi, Adalet Bakanlığı'na tescil süreci, e-vize ile iş vizesi ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Tacikistan rehberi.",
  keywords: [
    "tacikistanda şirket kurma",
    "tacikistan ҶДММ kuruluşu",
    "tacikistan yatırım teşvikleri",
    "tacikistan kurumlar vergisi",
    "tacikistan serbest ekonomi bölgesi",
    "duşanbe şirket kuruluşu",
    "tacikistan vize e-vize",
    "2026 tacikistan şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Tacikistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="ҶДММ (Limited Şirket) yapısı, %18 standart / %13 üretici kurumlar vergisi ve %14 KDV, 5 serbest ekonomi bölgesi, Adalet Bakanlığı'na tescil süreci, e-vize ile iş vizesi ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Tacikistan rehberi."
      category="YURT DIŞI ŞİRKET • TACİKİSTAN • 2026"
      date="2026"
      readTime="11 Dakika"
      slug="tacikistanda-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tacikistan, Orta Koridor ve Çin-Orta Asya ticaret güzergâhı
          üzerindeki konumu, düşük kuruluş maliyeti ve yabancı yatırımcıya
          yerli yatırımcıyla eşit muamele ilkesiyle Orta Asya&apos;da henüz
          yeterince keşfedilmemiş bir yapılanma noktası. Ancak vize
          rejiminin 2024&apos;te değişmesi, serbest ekonomi bölgelerinin
          şartları ve vergi sisteminin katmanlı yapısı, sürece başlamadan
          önce netleştirilmesi gereken kritik detaylar.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ ҶДММ (Limited Şirket) yapısı ve yabancı yatırımcıya eşit muamele</li>
          <li>✔ Adalet Bakanlığı&apos;na tescil süreci ve gerekli belgeler</li>
          <li>✔ 5 serbest ekonomi bölgesi (FEZ) ve vergi muafiyetleri</li>
          <li>✔ Adım adım kuruluş süreci</li>
          <li>✔ Güncel %18 standart / %13 üretici kurumlar vergisi, %14 KDV oranları</li>
          <li>✔ 2024&apos;ten itibaren değişen vize rejimi ve e-vize seçeneği</li>
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
            href="#neden-tacikistan"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden Tacikistan&apos;da Şirket Kurmalısınız?
          </Link>
          <Link
            href="#sirket-turleri"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. Şirket Türleri: ҶДММ Neden Standart Tercih?
          </Link>
          <Link
            href="#fez"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Serbest Ekonomi Bölgeleri (FEZ)
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
            6. Banka Hesabı, Vize ve Oturum İzni
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

      {/* 1. NEDEN TACİKİSTAN */}
      <section id="neden-tacikistan" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Tacikistan&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tacikistan mevzuatı, yabancı ve yerli yatırımcıya eşit muamele
          ilkesini temel alır; genel bir yatırım ön onayı aranmaz ve
          şirketin tamamı yabancı sermayeye ait olabilir. Yabancı Yatırım
          Kanunu kapsamında yatırımcılara, mevzuatın daha az elverişli hale
          gelmesi durumunda mevcut yatırım şartlarının korunduğu 15 yıllık
          bir istikrar (stabilizasyon) garantisi de tanınır.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌏</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Stratejik Ticaret Koridoru
            </h3>
            <p className="text-gray-700">
              Çin&apos;i Orta Asya ve İran üzerinden Basra Körfezi&apos;ne
              bağlayan güzergâh üzerinde yer alır; lojistik ve transit
              ticaret faaliyetleri için elverişli bir konumdadır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💰</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Düşük Kuruluş Maliyeti
            </h3>
            <p className="text-gray-700">
              ҶДММ kuruluşu için yasal asgari sermaye tutarı sembolik
              düzeydedir (500 TJS civarı); devlet harcı da bölgedeki diğer
              ülkelere kıyasla düşüktür.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🛡️</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              15 Yıllık İstikrar Garantisi
            </h3>
            <p className="text-gray-700">
              Yabancı Yatırım Kanunu, sonradan aleyhe değişen mevzuata karşı
              mevcut yatırım koşullarının 15 yıl boyunca korunmasını
              güvence altına alır; kâr transferi serbesttir.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Şirket Türleri: ҶДММ Neden Standart Tercih?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tacikistan mevzuatında birden fazla şirket türü tanımlanmış olsa
          da, yabancı sermayeli küçük ve orta ölçekli girişimlerin neredeyse
          tamamı tek bir yapıyı tercih ediyor: ҶДММ (Ҷамъияти дорои
          масъулияти маҳдуд — Limited Şirket).
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
                <td className="p-5 font-semibold">ҶДММ</td>
                <td className="p-5">Limited Şirket (LLC)</td>
                <td className="p-5">
                  Yabancı yatırımcıların standart tercihi; %100 yabancı
                  sermaye ile kurulabilir, ortakların sorumluluğu koydukları
                  sermaye ile sınırlıdır
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">CJSC</td>
                <td className="p-5">Kapalı Anonim Şirket</td>
                <td className="p-5">
                  Halka açık olmayan, sınırlı sayıda ortakla kurulan ve
                  hisselerin serbestçe devredilmediği ortaklık yapısı
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">OJSC</td>
                <td className="p-5">Açık Anonim Şirket (JSC)</td>
                <td className="p-5">
                  Hisselerin halka açık şekilde işlem görebildiği, yüksek
                  kamuyu aydınlatma yükümlülüğü olan büyük ölçekli yapılar
                  için tercih edilir
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            ҶДММ&apos;nin öne çıkma nedeni yalnızca esnekliği değil; yasal
            asgari sermaye tutarının sembolik düzeyde olması (yaklaşık 500
            somoni) ve taahhüt edilen sermayenin kuruluştan itibaren 1 yıl
            içinde ödenebilmesidir. Bu yapı, ticaret, danışmanlık,
            ithalat-ihracat ve hizmet firmaları için en pratik çözümdür.
            Bankacılık, sigortacılık, madencilik, medya ve güvenlik gibi
            düzenlemeye tabi sektörlerde ise ayrıca sektörel lisans/izin
            şartı aranır.
          </p>
        </div>
      </section>

      {/* 3. SERBEST EKONOMİ BÖLGELERİ */}
      <section id="fez" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Serbest Ekonomi Bölgeleri (FEZ)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tacikistan genelinde Danghara, Panj, Sughd, İşkoşim ve Kulob
          olmak üzere 5 serbest ekonomi bölgesi (Free Economic Zone – FEZ)
          faaliyette. Bu bölgelerde kayıtlı işletmeler; gelir vergisi ve
          sosyal vergi dışında kalan kurumlar vergisi, KDV, yol kullanım
          vergisi, doğal kaynak vergisi, tüketim vergisi ve gümrük
          vergilerinden muaf tutuluyor.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            🏭 FEZ&apos;de Kayıt İçin Asgari Yatırım Eşikleri
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Üretim (imalat) şirketleri:</strong> en az 500.000 ABD
              Doları yatırım
            </li>
            <li>
              <strong>Ticaret şirketleri:</strong> en az 50.000 ABD Doları
              yatırım
            </li>
            <li>
              <strong>Hizmet ve danışmanlık şirketleri:</strong> en az
              10.000 ABD Doları yatırım
            </li>
            <li>
              2026&apos;da yürürlüğe giren düzenlemeyle, FEZ&apos;de üretilen
              ürünlerin yurt içi pazara arzında uygulanan ithalat gümrük
              vergisi kaldırıldı; bu, FEZ&apos;de üretim yapan firmaların
              hem ihracat hem de iç pazar satışlarında maliyet avantajını
              artırdı.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          FEZ bünyesinde kuruluş, standart ҶДММ&apos;ye kıyasla ilgili bölge
          idaresine ayrı bir başvuru ve katılımcı statüsü onayı gerektirir.
          Faaliyet alanınıza uygun bölgenin ve yatırım eşiğinin
          belirlenmesi, bu aşamada kritik bir karardır.
        </p>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Tacikistan&apos;da tüzel kişilerin devlet tescili, Adalet
          Bakanlığı&apos;nın yetkisindedir; işletme ayrıca Vergi Komitesi,
          istatistik ve sosyal güvenlik kurumlarına da kaydedilir. Belgeler
          eksiksiz olduğunda standart tescil birkaç iş günü içinde
          tamamlanabiliyor.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Unvan & Belge Hazırlığı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Tüzük & Vekâletname</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Adalet Bakanlığı&apos;na Tescil</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">TIN, Mühür & Banka Hesabı</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Ticari Unvan Kontrolü ve Belge Hazırlığı
          </h3>
          <p className="leading-8 text-gray-700">
            Süreç, şirket unvanının kontrolü ve yasal adresin
            belirlenmesiyle başlar. Yabancı kurucu gerçek kişiyse pasaport
            kopyası, tüzel kişiyse ticaret sicil kaydı örneği hazırlanır.
            Tacikistan, 2015&apos;ten bu yana Lahey Apostil Sözleşmesi&apos;ne
            taraf olduğundan, yabancı belgelerin tasdiki konsolosluk yerine
            apostil ile ve ardından yeminli Tacikçe tercümeyle
            tamamlanabilir.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Kuruluş Sözleşmesi (Tüzük) ve Vekâletnamenin Düzenlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketin tüzüğü (charter) ve kurucular kararı hazırlanır.
            Yabancı ortağın Tacikistan&apos;da fiziken bulunması zorunlu
            değildir; noter onaylı ve apostilli bir vekâletname ile süreç
            Türkiye&apos;den yürütülebilir. Bu aşamada faaliyet kodu ve
            varsa FEZ katılımcı başvurusu netleştirilir.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Adalet Bakanlığı&apos;na Tescil Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Belgeler, tüzel kişilerin devlet tescilinden sorumlu Adalet
            Bakanlığı&apos;na veya bağlı hizmet merkezlerine sunulur.
            Standart başvurular belgeler eksiksiz olduğunda genellikle 3-5
            iş günü içinde, hızlandırılmış işlemler ise daha kısa sürede
            sonuçlanabiliyor. Onaylanan şirket, Tekil Devlet Tüzel
            Kişiler ve Şahıs İşletmeleri Siciline kaydedilir.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Vergi Kimlik Numarası, Mühür ve Banka Hesabı
          </h3>
          <p className="leading-8 text-gray-700">
            Tescil tamamlandıktan sonra Vergi Komitesi nezdinde vergi kimlik
            numarası (TIN) otomatik olarak oluşturulur, şirket istatistik ve
            sosyal güvenlik kurumlarına kaydedilir, şirket mührü hazırlanır
            ve son adımda kurumsal banka hesabı açılışı başlatılır. Taahhüt
            edilen sermayenin bankaya yatırılması, kuruluş tarihinden
            itibaren 1 yıl içinde tamamlanabilir. Belge hazırlığı ve
            tercüme süreleri dahil edildiğinde toplam süreç genellikle 3-4
            hafta içinde tamamlanır.
          </p>
        </div>
      </section>

      {/* 5. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi ve Oranlar (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tacikistan&apos;ın kurumlar vergisi rejimi, faaliyet konusuna göre
          değişen katmanlı bir yapıya sahip. 2022&apos;de yürürlüğe giren
          güncel Vergi Kanunu, üretim yapan işletmeleri düşük oranla teşvik
          ederken finans kuruluşlarını daha yüksek oranda vergilendiriyor.
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
                <td className="p-5 font-semibold">Kurumlar Vergisi (Genel)</td>
                <td className="p-5">%18</td>
                <td className="p-5">
                  Ticaret, hizmet ve genel faaliyet gösteren şirketler için
                  standart oran
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar Vergisi (Üretici)</td>
                <td className="p-5">%13</td>
                <td className="p-5">
                  Mal üretimiyle doğrudan iştigal eden işletmeler için
                  indirimli oran
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar Vergisi (Finans/Telekom)</td>
                <td className="p-5">%20</td>
                <td className="p-5">
                  Bankalar, finans kuruluşları ve mobil operatörler için
                  uygulanan yüksek oran
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV</td>
                <td className="p-5">%14</td>
                <td className="p-5">
                  1 Ocak 2024&apos;ten 31 Aralık 2026&apos;ya kadar geçerli
                  oran; 1 Ocak 2027&apos;den itibaren %13&apos;e düşürülmesi
                  planlanıyor. Temel gıda, eğitim ve sağlık hizmetleri
                  KDV&apos;den istisna
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sosyal Vergi</td>
                <td className="p-5">%20 işveren / %2 çalışan</td>
                <td className="p-5">
                  Brüt maaş fonu üzerinden hesaplanan işveren ve çalışan
                  primleri
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Temettü Stopajı</td>
                <td className="p-5">%12</td>
                <td className="p-5">
                  Yerleşik olmayan ortaklara dağıtılan kâr paylarında
                  standart stopaj oranı; çifte vergilendirme anlaşması
                  kapsamında indirim mümkün olabilir
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Türkiye ile Tacikistan arasında 2001/3336 sayılı Bakanlar Kurulu
            Kararı ile yürürlüğe giren Çifte Vergilendirmeyi Önleme
            Anlaşması (ÇVÖA) kapsamında, Tacikistan&apos;da ödenen verginin
            Türkiye&apos;deki beyan üzerinden mahsubu mümkün olabilir.
            Güncel oranlar için Tacikistan Vergi Komitesi&apos;nin resmi
            kaynaklarının kontrol edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* 6. BANKA HESABI VE VİZE */}
      <section id="banka-vize" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Banka Hesabı, Vize ve Oturum İzni
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket kuruluşu hızlı ilerlese de banka hesabı açılışı ve seyahat
          planlaması, gerçekçi bir zaman çizelgesi gerektiren ayrı
          süreçlerdir. Tacikistan&apos;a özgü en kritik değişiklik ise vize
          rejiminde 2024&apos;te yaşandı.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Banka Hesabı Açma Sürecinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Kurumsal hesap açılışı için tescil belgesi, tüzük, vergi
              kimlik numarası ve yetkili imza sahibinin kimlik belgesi
              bankaya sunulur; çoğu banka yetkili imza sahibinin en az bir
              kez fiziken şubede bulunmasını talep eder.
            </li>
            <li>
              KYC/AML (müşterini tanı / kara para aklamayı önleme) süreci
              kapsamında gerçek faydalanıcı (UBO) beyanı, sermayenin
              kaynağının şeffaflığı ve net bir faaliyet tanımı, başvurunun
              hızlı onaylanma ihtimalini artırır.
            </li>
            <li>
              Yerel banka süreci tamamlanana kadar Wise Business gibi
              fintech çözümleri, uluslararası tahsilat için geçici bir ara
              çözüm olabilir; ancak yerel para birimiyle (somoni) işlem ve
              yerel tedarikçi ödemeleri için Tacikistan banka hesabı
              gereklidir.
            </li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🛂 Vize: 2024&apos;te Değişen Rejim ve E-Vize Seçeneği
          </h3>
          <p className="leading-8 text-gray-700">
            20 Nisan 2024&apos;ten itibaren umuma mahsus (bordo) pasaport
            hamili Türk vatandaşları için Tacikistan&apos;a girişte
            vizesiz seyahat uygulaması kaldırılmış, vize zorunluluğu
            getirilmiştir. Kuruluş ve iş görüşmesi amaçlı seyahatler için
            en pratik çözüm, evisa.tj üzerinden başvurulan ve genellikle
            2-3 iş günü içinde sonuçlanan iş (business) e-vizesidir; bu
            vize 90 gün geçerlilik süresi içinde 60 güne kadar kalışa izin
            verir. Daha uzun süreli faaliyet için şirket üzerinden
            oturum/çalışma izni başvurusu ayrıca değerlendirilmelidir.
            Güncel vize koşullarının seyahatten önce{" "}
            <a
              href="https://www.mfa.gov.tr/tacikistan-seyahat-edecek-turk-vatandaslarinin-dikkatine.tr.mfa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              T.C. Dışişleri Bakanlığı
            </a>{" "}
            duyurusundan teyit edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* 7. TÜRKİYE TARAFINDAKİ YÜKÜMLÜLÜKLER */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tacikistan&apos;da şirket kurmak, Türkiye tarafında da bazı
          bildirim yükümlülüklerini beraberinde getirir; buna karşılık
          Ticaret Bakanlığı&apos;nın sunduğu destek kalemlerinden de
          yararlanmak mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Tacikistan&apos;da şirket kuruluş sürecinizi doğru şirket türü
            seçiminden tescile, banka hesabı açılışından FEZ başvurusuna
            kadar baştan sona biz yürütüyoruz. Kuruluş sonrasında da
            muhasebe, KDV beyanı ve kurumlar vergisi raporlama hizmetinizi,
            ayrı bir yerel firma aramanıza gerek kalmadan biz
            sağlıyoruz.{" "}
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
            Tacikistan&apos;da şirket kurmak veya mevcut bir şirkete ortak
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
              Tacikistan&apos;da açılan ofis, depo, showroom veya mağaza
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
          Bu destek ve bildirim yükümlülükleri, hedef ülke Tacikistan olsa
          da genel çerçevesi diğer ülkelerdeki yapılanmalarla aynıdır.
          Konunun tamamına ve güncel destek oranlarına{" "}
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="text-orange-600 underline"
          >
            Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
          </Link>{" "}
          başlıklı rehberimizden ulaşabilirsiniz. Bölgedeki diğer
          alternatifleri karşılaştırmak isterseniz{" "}
          <Link
            href="/blog/ozbekistanda-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            Özbekistan
          </Link>{" "}
          ve{" "}
          <Link
            href="/blog/kazakistanda-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            Kazakistan
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
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Seyahat öncesi e-vize başvurunuzu (evisa.tj) mutlaka planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Belgelerin apostil tasdik sürecini önceden başlatın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılışı için Tacikistan&apos;a en az bir seyahati planlarınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ FEZ&apos;den yararlanacaksanız asgari yatırım eşiğini iş planınıza yansıtın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Arazi tüm mevzuatta devlete ait olduğundan mülkiyet değil kullanım hakkı aldığınızı unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında temettü stopajı mahsup imkânını mali müşavirle teyit edin
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
              Tacikistan&apos;da şirket kurmak için ülkede bulunmak gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Kuruluş başvurusu noter onaylı ve apostilli
              vekâletname ile Türkiye&apos;den yürütülebilir ve tescil
              Adalet Bakanlığı üzerinden birkaç iş günü içinde
              tamamlanabilir. Ancak kurumsal banka hesabı açılışı için
              çoğu banka yetkili imza sahibinin en az bir kez fiziken
              Tacikistan&apos;da bulunmasını talep eder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              ҶДММ kurmak için asgari sermaye şartı var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel ҶДММ yapısı için yasal asgari sermaye tutarı sembolik
              düzeydedir (yaklaşık 500 somoni); taahhüt edilen sermaye
              kuruluş tarihinden itibaren 1 yıl içinde ödenebilir.
              Bankacılık, sigortacılık gibi düzenlemeye tabi sektörlerde
              ise ilgili otoritenin belirlediği çok daha yüksek sermaye
              eşikleri uygulanır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Tacikistan&apos;da şirketin %100&apos;ü yabancıya ait olabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Tacikistan mevzuatı, yabancı ve yerli yatırımcıya eşit
              muamele ilkesini benimser ve yabancı gerçek veya tüzel
              kişilerin ҶДММ&apos;nin tamamına sahip olmasına izin verir;
              yerli ortak zorunluluğu bulunmaz. Bankacılık, sigortacılık,
              telekomünikasyon, enerji, madencilik ve medya gibi
              düzenlemeye tabi sektörlerde ek lisans/izin şartları
              aranabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Türk vatandaşlarının Tacikistan&apos;a seyahati için vize gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. 20 Nisan 2024&apos;ten itibaren umuma mahsus pasaport
              hamili Türk vatandaşları için vize zorunluluğu getirilmiştir.
              İş amaçlı seyahatler için evisa.tj üzerinden alınan iş
              e-vizesi, genellikle 2-3 iş günü içinde sonuçlanan pratik bir
              seçenektir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Tacikistan&apos;da kurulan şirketin Türkiye&apos;de de vergi yükümlülüğü olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişilerin
              Tacikistan&apos;daki şirketten elde ettiği kazançlar
              Türkiye&apos;de de beyan yükümlülüğüne tabi olabilir.
              Türkiye-Tacikistan Çifte Vergilendirmeyi Önleme Anlaşması
              (2001/3336) kapsamında Tacikistan&apos;da ödenen verginin
              Türkiye&apos;de mahsubu mümkün olabilir; detaylar somut
              duruma göre değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Belgeler eksiksiz olduğunda ҶДММ tescili Adalet Bakanlığı
              nezdinde genellikle 3-5 iş günü içinde tamamlanır. Belge
              hazırlığı, apostil ve yeminli tercüme dahil edildiğinde
              toplam süreç ortalama 3-4 hafta; banka hesabı açılışı dahil
              edildiğinde ise birkaç haftaya kadar uzayabilir.
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
          Tacikistan, düşük kuruluş maliyeti, %100 yabancı sermaye imkânı,
          15 yıllık istikrar garantisi ve stratejik ticaret koridorundaki
          konumuyla Türk girişimciler için henüz yeterince değerlendirilmemiş
          bir yurt dışı yapılanma alternatifi sunuyor. Ancak ҶДММ yapısının
          doğru kurgulanması, 2024&apos;te değişen vize rejiminin seyahat
          planına doğru yansıtılması ve FEZ&apos;deki yatırım eşiklerinin
          iş modeline uygunluğunun değerlendirilmesi, sürecin en kritik
          unsurları. Bu kararları iş modelinize uygun şekilde vermek ve
          Türkiye tarafındaki yükümlülükleri eksiksiz yönetmek için
          profesyonel destek almak, sürecin hatasız ilerlemesini sağlar.
        </p>
      </section>
    </BlogLayout>
  );
}
