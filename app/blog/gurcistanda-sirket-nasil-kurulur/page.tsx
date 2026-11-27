import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Gürcistan'da Şirket Nasıl Kurulur? Vergi Avantajları ve 2026 Rehberi | Koray Akdağ",
  description: "Gürcistan'da LLC kuruluşu, dağıtılan kâr üzerinden %15 kurumlar vergisi modeli, Virtual Zone ve Small Business statüleri, 1 iş gününde tescil süreci ve Türkiye'deki CFC riskiyle 2026 güncel rehber.",
  keywords: [
    "gürcistanda şirket kurma",
    "gürcistan şirket kuruluşu",
    "gürcistan llc",
    "gürcistan kurumlar vergisi",
    "gürcistan virtual zone",
    "gürcistan small business status",
    "gürcistanda vergi avantajları",
    "2026 gürcistan şirket kuruluşu",
  ],
  alternates: {
    canonical: "/blog/gurcistanda-sirket-nasil-kurulur",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Gürcistan'da Şirket Nasıl Kurulur? Vergi Avantajları ve Kuruluş Süreci"
      description="LLC kuruluşu, dağıtılmayan kâra vergi uygulanmayan Estonya modeli, Virtual Zone ve Small Business statüleri, Public Service Hall üzerinden 1 iş gününde tescil ve Türkiye tarafındaki kontrol edilen yabancı kurum (CFC) riskiyle 2026 güncel Gürcistan rehberi."
      category="YURT DIŞI ŞİRKET • GÜRCİSTAN • 2026"
      date="Kasım 2026"
      readTime="13 Dakika"
      slug="gurcistanda-sirket-nasil-kurulur"
      coverImage="https://images.unsplash.com/photo-1759506377231-95bf486d44e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Gürcistan'da Şirket Kuruluşu İçin Destek Alın"
      ctaText="LLC kuruluşu, Virtual Zone veya International Company statüsü başvurusu, banka hesabı açılışı ve Türkiye'deki Yurt Dışı Yatırım Bildirimi ile CFC risk değerlendirmesi. Gürcistan yapılanma sürecinizi baştan sona yönetiyoruz."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gürcistan&apos;da şirket kurmak isteyen Türk girişimciler için
          öne çıkan temel noktalar:
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ En yaygın yapı, sınırlı sorumlu şirket (LLC); minimum sermaye şartı yok ve tek ortakla kurulabilir.</li>
          <li>✔ Kurumlar vergisi, 2017&apos;den beri Estonya modeline göre işliyor: kâr <strong>dağıtılmadığı sürece vergilendirilmiyor</strong>, dağıtılan kâr üzerinden <strong>%15</strong> vergi alınıyor.</li>
          <li>✔ Tescil, Public Service Hall / Ulusal Kayıt Ajansı (NAPR) üzerinden standart olarak <strong>1 iş günü</strong> içinde tamamlanabiliyor.</li>
          <li>✔ Yazılım/dijital hizmet ihracatı yapan şirketler <strong>Virtual Zone Person</strong> statüsüyle bu gelir üzerinde kurumlar vergisinden muaf olabiliyor.</li>
          <li>✔ Şahıs işletmesi (Individual Entrepreneur) düzeyinde <strong>Small Business Status</strong> (ciro üzerinden %1) ve <strong>Micro Business Status</strong> (%0) ayrı rejimler; LLC&apos;ye uygulanmıyor.</li>
          <li>✔ Türkiye&apos;de yerleşik ortaklar için en kritik risk, Kurumlar Vergisi Kanunu madde 7&apos;deki <strong>kontrol edilen yabancı kurum (CFC)</strong> hükümleri; şartlar oluşursa dağıtılmayan kâr da Türkiye&apos;de vergilendirilebiliyor.</li>
          <li>✔ Türkiye-Gürcistan Çifte Vergilendirmeyi Önleme Anlaşması 2010&apos;dan beri yürürlükte.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-gurcistan" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Neden Gürcistan&apos;da Şirket Kurmalısınız?
          </Link>
          <Link href="#sirket-turleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Şirket Türleri: LLC, JSC ve Bireysel Girişimci
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Adım Adım Kuruluş Süreci
          </Link>
          <Link href="#vergi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Vergi Sistemi ve Oranlar
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Karıştırmayın: Virtual Zone, International Company ve Small Business Status
          </Link>
          <Link href="#banka" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Banka Hesabı Açma
          </Link>
          <Link href="#turkiye" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Türkiye Tarafındaki Yükümlülükler ve CFC Riski
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
        </div>
      </div>

      {/* 1. NEDEN GÜRCİSTAN */}
      <section id="neden-gurcistan" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Gürcistan&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gürcistan, son yirmi yılda yürüttüğü kapsamlı vergi ve bürokrasi
          reformlarıyla Dünya Bankası&apos;nın iş yapma kolaylığı
          sıralamalarında istikrarlı biçimde ön sıralarda yer alan bir
          ülke haline geldi. Türkiye&apos;ye kara sınırıyla komşu olması,
          Türk vatandaşlarına vizesiz giriş imkânı tanıması ve basit bir
          şirketler vergisi rejimi sunması, onu özellikle hizmet ihracatı,
          yazılım, ticaret ve lojistik alanında faaliyet gösteren Türk
          girişimciler için pratik bir alternatif yapıyor.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💰</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Dağıtılmayan Kâra Vergi Yok
            </h3>
            <p className="text-gray-700">
              2017&apos;den beri uygulanan Estonya modelinde, kurumlar
              vergisi kârın şirkette tutulduğu sürece tahakkuk etmiyor;
              yalnızca dağıtıldığında %15 oranında vergilendiriliyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🛫</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Coğrafi Yakınlık ve Vizesiz Erişim
            </h3>
            <p className="text-gray-700">
              Türk vatandaşları kimlikle 1 yıla kadar vizesiz kalabiliyor;
              İstanbul-Tiflis arası doğrudan uçuşla yaklaşık 2,5 saat,
              Sarp sınır kapısından karayoluyla da doğrudan geçiş mümkün.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hızlı ve Dijital Kuruluş
            </h3>
            <p className="text-gray-700">
              Şirket tescili, yerleşik veya yabancı herkes için standart
              olarak 1 iş gününde tamamlanabiliyor; asgari sermaye şartı
              bulunmuyor.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Şirket Türleri: LLC, JSC ve Bireysel Girişimci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gürcistan hukukunda en sık kullanılan üç yapı, sınırlı sorumlu
          şirket (LLC), anonim şirket (JSC) ve bireysel girişimci (IE)
          statüsüdür. Türk girişimcilerin büyük çoğunluğu LLC&apos;yi
          tercih eder; çünkü hem kurumsal hem de yurt dışı tüzel kişilik
          ihtiyacını sade bir yapıyla karşılar.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Yapı</th>
                <th className="p-5">Tanım</th>
                <th className="p-5">Minimum Sermaye</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">LLC (Limited Liability Company)</td>
                <td className="p-5">
                  Tek veya çok ortaklı sınırlı sorumlu şirket. Türk
                  vatandaşları ve tüzel kişiler yerel ortak zorunluluğu
                  olmadan %100 hissedar olabilir.
                </td>
                <td className="p-5">Şart yok</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">JSC (Joint Stock Company)</td>
                <td className="p-5">
                  Anonim şirket; halka açılma, büyük ölçekli yatırım veya
                  pay senedi çıkarımı planlanan yapılar için tercih
                  edilir.
                </td>
                <td className="p-5">Şart yok (esas sözleşmeyle belirlenir)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Individual Entrepreneur (IE)</td>
                <td className="p-5">
                  Tüzel kişilik olmayan şahıs işletmesi statüsü; Small
                  Business veya Micro Business vergi rejimlerinden
                  yalnızca bu statüdeki kişiler yararlanabilir.
                </td>
                <td className="p-5">Şart yok</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Yazılım, danışmanlık veya dijital hizmet ihracatı yapacak ve
            kurumsal bir yapı içinde büyümeyi planlayan girişimciler için
            LLC genellikle en doğru seçimdir; çünkü hem Virtual Zone
            statüsüne başvurabilir hem de ortak eklenerek
            büyütülebilir. Tek kişilik, küçük ölçekli ve basit bir
            faaliyet söz konusuysa IE + Small Business Status
            kombinasyonu daha düşük maliyetli olabilir, ancak bu yapı
            tüzel kişilik taşımadığı için uluslararası sözleşme ve banka
            ilişkilerinde LLC kadar esnek değildir.
          </p>
        </div>
      </section>

      {/* 3. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Şirket tescili, Ulusal Kamu Kayıt Ajansı&apos;na (National
          Agency of Public Registry - NAPR) bağlı Public Service Hall
          şubelerinde, NAPR&apos;nin bölge ofislerinde veya yetkili
          temsilci aracılığıyla yürütülür. Standart işlem süresi 1 iş
          günüdür; aynı gün sonuçlanan hızlandırılmış seçenekler de
          mevcuttur.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Unvan & Yapı Seçimi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Vekâletname & Belgeler</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">NAPR Başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Vergi Kaydı & Banka</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.1. Ticari Unvan ve Yapının Belirlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket unvanının daha önce tescil edilmediği teyit edilir,
            faaliyet konusu ve ortak sayısına göre LLC veya JSC kararı
            verilir. Kayıtlı adres Gürcistan içinde olmak zorundadır; bu
            adres yerel bir hukuk/muhasebe ofisinin sanal ofis hizmeti
            üzerinden de sağlanabilir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.2. Vekâletname ve Kurucu Belgelerin Hazırlanması
          </h3>
          <p className="leading-8 text-gray-700">
            Kurucu Gürcistan&apos;a gitmeden, Türkiye&apos;de noterde
            düzenlenip apostil şerhi eklenen ve Gürcüceye yeminli
            tercümesi yapılan bir vekâletname ile tüm süreç yerel bir
            temsilci üzerinden yürütülebilir. Esas sözleşme, kurucu
            kararı ve imza örnekleri bu aşamada hazırlanır.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.3. NAPR / Public Service Hall Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru, Public Service Hall gişelerinde, NAPR&apos;nin bölge
            ofislerinde, yetkili temsilci aracılığıyla veya my.gov.ge
            üzerinden uzaktan yapılabilir. NAPR&apos;nin resmî ücret
            tarifesine göre standart tescil süresi 1 iş günüdür; resmî
            tarifedeki ücretler işlem türüne göre değişir ve hızlandırılmış
            (aynı gün) seçenekler ek ücrete tabidir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.4. Vergi Kaydı ve Banka Hesabı
          </h3>
          <p className="leading-8 text-gray-700">
            Tescil tamamlandığında şirket otomatik olarak Gelirler
            Servisi&apos;ne (Revenue Service of Georgia) vergi mükellefi
            olarak kaydedilir. KDV mükellefiyeti, ciro eşiği aşıldığında
            zorunlu, altındaysa ihtiyaridir. Kurumsal banka hesabı ayrı
            bir süreçtir ve genellikle tescilden sonra başlatılır.
          </p>
        </div>
      </section>

      {/* 4. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Vergi Sistemi ve Oranlar (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gürcistan&apos;ın kurumlar vergisi rejimi, 1 Ocak 2017&apos;den
          itibaren Estonya&apos;dan esinlenen bir modele göre işliyor:
          vergi, kâr elde edildiğinde değil, ortaklara dağıtıldığında
          tahakkuk ediyor. Bankalar, sigorta şirketleri, mikrofinans
          kuruluşları ve bazı özel sektörler bu modelin dışında tutulup
          ayrı oranlarla vergilendiriliyor.
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
                <td className="p-5">%15</td>
                <td className="p-5">
                  Yalnızca dağıtılan kâr üzerinden; şirkette tutulan kâr
                  (reinvestment) vergilendirilmiyor
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Temettü Stopajı</td>
                <td className="p-5">%5</td>
                <td className="p-5">
                  Gerçek kişi ortaklara yapılan kâr payı dağıtımında
                  kurumlar vergisine ek olarak uygulanan stopaj
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV (Standart)</td>
                <td className="p-5">%18</td>
                <td className="p-5">
                  İhracat ve bazı hizmetler (örn. sağlık, eğitim) istisna
                  veya %0 kapsamında
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV Kayıt Eşiği</td>
                <td className="p-5">100.000 GEL</td>
                <td className="p-5">
                  Hareketli (rolling) 12 aylık dönemde aşıldığında zorunlu
                  kayıt; eşik altında ihtiyari kayıt mümkün
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Gelir Vergisi (Ücretli Çalışan)</td>
                <td className="p-5">%20</td>
                <td className="p-5">
                  Sabit oran; işveren bordro üzerinden stopaj yoluyla
                  keser
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Türkiye ile Gürcistan arasında 21 Kasım 2007&apos;de imzalanan
            ve 10 Şubat 2010 tarihli Resmî Gazete&apos;de yayımlanarak
            yürürlüğe giren Çifte Vergilendirmeyi Önleme Anlaşması
            kapsamında, Gürcistan&apos;da ödenen vergilerin Türkiye&apos;de
            mahsubu mümkün olabilir. Güncel oranlar için{" "}
            <a
              href="https://www.rs.ge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gürcistan Gelirler Servisi (rs.ge)
            </a>{" "}
            resmi kaynağının kontrol edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* 5. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-red-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Karıştırmayın: Virtual Zone, International Company ve Small Business Status
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gürcistan&apos;ın vergi avantajları anlatılırken genellikle
          birbirine karıştırılan üç ayrı statü var. Bu statüler farklı
          tüzel/gerçek kişi türlerine, farklı faaliyet alanlarına ve
          farklı oranlara karşılık geliyor; hangisinin size uygun olduğu
          şirket yapınıza ve faaliyetinize göre değişir.
        </p>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-5 text-gray-700 marker:text-red-600">
            <li>
              <strong>Virtual Zone Person (VZP):</strong> Yalnızca
              Gürcistan&apos;da tescilli bir LLC/JSC&apos;ye verilen bir
              statü. Yazılım veya dijital hizmetin yurt dışına ihracından
              elde edilen kazanç kurumlar vergisinden muaf tutulur; ancak
              bu muafiyet temettü stopajını kapsamaz, dağıtılan kâr
              üzerinden ayrıca %5 stopaj uygulanır. Maaş ve diğer
              giderlere herhangi bir ayrıcalık getirmez.
            </li>
            <li>
              <strong>International Company (IC) Statüsü:</strong>
              Belirli sektörlerde (bilgi teknolojileri, gemi işletmeciliği
              gibi) ve ciddi bir sektör tecrübesi şartını karşılayan
              şirketlere verilir; kurumlar vergisi %5&apos;e iner. Bir
              şirket aynı anda hem Virtual Zone hem International Company
              statüsünü taşıyamaz; IC statüsü verildiğinde VZP statüsü
              otomatik olarak sona erer.
            </li>
            <li>
              <strong>Small Business / Micro Business Status:</strong>
              Bunlar LLC&apos;ye değil, tüzel kişiliği olmayan Bireysel
              Girişimci (Individual Entrepreneur) statüsüne tanınan
              rejimlerdir. Small Business Status&apos;ta ciro üzerinden
              %1 (yıllık ciro belirli bir eşiği aşarsa %3), Micro Business
              Status&apos;ta ise düşük cirolu, çalışanı olmayan
              girişimciler için %0 vergi uygulanır. Bir LLC bu statülere
              başvuramaz.
            </li>
          </ul>
        </div>
      </section>

      {/* UZMAN NOTU */}
      <div className="mt-14 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          💡 Uzman Notu
        </h3>
        <p className="leading-8 text-gray-700">
          Gürcistan&apos;ın en çok öne çıkarılan avantajı, kârı şirkette
          tutarak kurumlar vergisini fiilen ödememe imkânıdır. Ancak
          Türkiye&apos;de yerleşik ortaklar açısından bu aynı zamanda
          Kurumlar Vergisi Kanunu&apos;nun 7. maddesindeki kontrol edilen
          yabancı kurum (CFC) hükümlerini tetikleyebilecek bir durumdur.
          Başvuruda gözden kaçırılmaması gereken nokta, vergi
          planlamasının yalnızca Gürcistan tarafındaki oranla değil,
          Türkiye&apos;deki CFC testinin dört şartıyla (kontrol oranı,
          pasif gelir oranı, efektif vergi yükü ve ciro eşiği) birlikte
          değerlendirilmesi gerektiğidir. Aşağıdaki 7. bölümde bu dört
          şart ayrıntılı olarak ele alınıyor.
        </p>
      </div>

      {/* 6. BANKA HESABI */}
      <section id="banka" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Banka Hesabı Açma
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gürcistan&apos;da şirket tescili büyük ölçüde uzaktan
          yürütülebilse de, kurumsal banka hesabı açılışı genellikle
          şahsi başvuru ve kimlik doğrulama gerektirir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Banka Hesabı Sürecinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Çoğu yerel banka (TBC Bank, Bank of Georgia gibi), yetkili
              imza sahibinin kimlik doğrulama ve UBO (gerçek faydalanıcı)
              beyanı için en az bir kez şubeye gelmesini talep eder.
            </li>
            <li>
              Kara para aklamayı önleme (AML) mevzuatı gereği, faaliyet
              konusunun net tanımlanması ve gelir kaynağının belgelenmesi
              hesap açılış hızını doğrudan etkiler.
            </li>
            <li>
              Banka süreci tamamlanana kadar Wise Business veya Payoneer
              gibi fintech çözümleri uluslararası tahsilat için pratik bir
              ara adım olabilir; ancak düzenli ticari faaliyet ve KDV
              işlemleri için yerel IBAN&apos;lı bir kurumsal hesap
              genellikle gereklidir.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. TÜRKİYE TARAFINDAKİ YÜKÜMLÜLÜKLER */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye Tarafındaki Yükümlülükler ve CFC Riski
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gürcistan&apos;da şirket kurmak, Türkiye tarafında da bazı
          bildirim yükümlülüklerini ve dikkatle değerlendirilmesi gereken
          bir vergi riskini beraberinde getirir.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            LLC kuruluşundan Virtual Zone veya International Company
            statüsü başvurusuna, vekâletname ve tescil işlemlerinden
            banka hesabı açılışına kadar süreci baştan sona biz
            yürütüyoruz. Kuruluş sonrasında Gürcistan&apos;daki yıllık
            beyanlar kadar Türkiye tarafındaki Yurt Dışı Yatırım
            Bildirimi ve CFC risk değerlendirmesini de, ayrı bir yerel
            firma aramanıza gerek kalmadan biz sağlıyoruz.{" "}
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
            Gürcistan&apos;da şirket kurmak veya mevcut bir şirkete ortak
            olmak amacıyla yaptıkları ilk sermaye ihracını takip eden{" "}
            <strong>3 ay içinde</strong>, Ticaret Bakanlığı&apos;nın Yurt
            Dışı Yatırım Bildirimi formunu doldurarak Hazine ve Maliye
            Bakanlığı ile Ticaret Bakanlığı&apos;na bildirmekle
            yükümlüdür. Bu bildirim her yıl güncellenmeli, ihmal edilmesi
            cezai yaptırımlara yol açabilmektedir.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            ⚠️ Kontrol Edilen Yabancı Kurum (CFC) Riski
          </h3>
          <p className="mb-5 leading-8 text-gray-700">
            Kurumlar Vergisi Kanunu madde 7&apos;ye göre, Türkiye&apos;de
            tam mükellef gerçek veya tüzel kişilerin doğrudan veya
            dolaylı olarak kontrol ettiği bir yurt dışı iştirak, aşağıdaki
            dört şartın tümü birlikte gerçekleştiğinde kontrol edilen
            yabancı kurum (CFC) sayılır ve iştirakin <strong>dağıtılmamış
            kârı</strong> da Türkiye&apos;de kurumlar vergisi matrahına
            dahil edilir:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-600">
            <li>Doğrudan veya dolaylı kontrol oranının %50&apos;yi aşması,</li>
            <li>İştirakin gayrisafi hasılatının %25 veya fazlasının pasif gelirden (faiz, kira, lisans, menkul kıymet satış kazancı gibi) oluşması,</li>
            <li>İştirakin ticari bilanço kârı üzerindeki toplam vergi yükünün %10&apos;un altında kalması,</li>
            <li>İştirakin ilgili yıldaki toplam gayrisafi hasılatının 100.000 Avro karşılığı Türk Lirasını aşması.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Gürcistan&apos;daki Estonya modeli, kâr dağıtılmadığı sürece
            fiilen %0 vergi yükü yarattığından, özellikle pasif gelir
            ağırlıklı (örn. yatırım geliri, lisans/royalti) yapılarda
            üçüncü şartın gerçekleşme ihtimali yüksektir. Faaliyeti
            fiilen aktif ticari/hizmet geliri üreten ve kârını düzenli
            dağıtan şirketlerde bu risk genellikle daha sınırlıdır; ancak
            her yapı, somut gelir kompozisyonuna göre ayrıca
            değerlendirilmelidir.
          </p>
        </div>
      </section>

      {/* 8. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ LLC mi IE mi kararını faaliyet ölçeğine ve ortak sayısına göre verin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Virtual Zone ve International Company statülerini aynı anda taşıyamayacağınızı bilin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kurumsal banka hesabı açılışının tescilden daha uzun sürebileceğini planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ CFC testinin dört şartını gelir kompozisyonunuza göre önceden değerlendirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ KDV kayıt eşiğini hareketli 12 aylık dönem üzerinden takip edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Sektörünüze özel ek izin/lisans gerekliliği olup olmadığını önceden araştırın
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
              Gürcistan&apos;da şirket kurmak için ülkede bulunmam gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Noterde düzenlenip apostil şerhi eklenen bir
              vekâletname ile tescil süreci yerel bir temsilci aracılığıyla
              yürütülebilir. Ancak kurumsal banka hesabı açılışı için
              çoğu banka yetkili imza sahibinin en az bir kez şubeye
              gelmesini istiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Gürcistan&apos;da kurumlar vergisi neden "dağıtılan kâra" uygulanıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              2017&apos;den beri yürürlükte olan Estonya modeli, yeniden
              yatırımı teşvik etmek amacıyla şirkette tutulan kârı
              vergilendirmiyor; vergi, kâr ortaklara dağıtıldığı anda
              %15 oranında tahakkuk ediyor. Bu, kârı bilanço içinde
              tutan büyüyen şirketler için nakit akışı avantajı
              sağlıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Virtual Zone statüsünü hangi şirketler alabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Yalnızca Gürcistan&apos;da tescilli, yazılım geliştirme veya
              diğer nitelikli dijital hizmetleri yurt dışına ihraç eden
              LLC/JSC yapıları bu statüye başvurabilir. Statü, ilgili
              ihracat gelirini kurumlar vergisinden muaf tutar; ancak
              dağıtılan kâr üzerindeki %5 temettü stopajı devam eder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Gürcistan&apos;da şirket kurarsam Türkiye&apos;de ek vergi ödemem gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Her zaman değil, ama gerekebilir. Türkiye&apos;de yerleşik
              ortak için Kurumlar Vergisi Kanunu madde 7&apos;deki
              kontrol edilen yabancı kurum (CFC) hükümleri, kontrol
              oranı, pasif gelir oranı, düşük efektif vergi yükü ve ciro
              eşiği şartlarının tümü gerçekleştiğinde devreye girer ve
              dağıtılmamış kârı da Türkiye&apos;de vergilendirir. Bu
              nedenle yapı kurulmadan önce gelir kompozisyonunuzun bu
              dört şart açısından değerlendirilmesi önemlidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Belgeler eksiksiz hazırlandığında NAPR/Public Service Hall
              üzerinden standart tescil 1 iş günü içinde tamamlanabiliyor.
              Vekâletname, apostil ve tercüme süreçleri dahil edildiğinde
              toplam süre birkaç gün ile 1 hafta arasında değişiyor; banka
              hesabı açılışı bu süreye ayrıca eklenmelidir.
            </p>
          </div>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a href="https://napr.gov.ge/en/page/fees-and-terms" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              NAPR (Ulusal Kamu Kayıt Ajansı) - Ücret ve Süre Tarifesi
            </a>
          </li>
          <li>
            <a href="https://www.investingeorgia.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Invest in Georgia - Resmî Yatırım Tanıtım Ajansı
            </a>
          </li>
          <li>
            <a href="https://www.rs.ge" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Gürcistan Gelirler Servisi (Revenue Service of Georgia)
            </a>
          </li>
          <li>
            <a href="https://www.resmigazete.gov.tr/eskiler/2010/02/20100210-3.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Türkiye-Gürcistan Çifte Vergilendirmeyi Önleme Anlaşması (Resmî Gazete, 10 Şubat 2010)
            </a>
          </li>
          <li>
            <a href="https://gib.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Gelir İdaresi Başkanlığı - Kontrol Edilen Yabancı Kurum (KVK madde 7) Uygulaması
            </a>
          </li>
        </ul>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gürcistan; hızlı ve sade kuruluş süreci, dağıtılmayan kâra vergi
          uygulamayan Estonya modeli, yazılım/dijital hizmet ihracatına
          yönelik Virtual Zone statüsü ve Türkiye&apos;ye coğrafi
          yakınlığıyla Türk girişimciler için cazip bir yurt dışı
          yapılanma seçeneği sunuyor. Ancak bu avantajların gerçek
          değeri, doğru şirket türünün ve statünün seçilmesine, kuruluş
          sürecinin sağlıklı yürütülmesine ve en önemlisi Türkiye
          tarafındaki CFC riskinin gelir kompozisyonunuza göre önceden
          değerlendirilmesine bağlı. Bu kararları iş modelinize uygun
          şekilde vermek ve Türkiye-Gürcistan tarafındaki yükümlülükleri
          eksiksiz yönetmek için profesyonel destek almak, sürecin
          hatasız tamamlanmasını garanti altına alır.
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
            href="/blog/azerbaycanda-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • AZERBAYCAN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Azerbaycan&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Gürcistan'da şirket kurmak için ülkede bulunmam gerekir mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Noterde düzenlenip apostil şerhi eklenen bir vekâletname ile tescil süreci yerel bir temsilci aracılığıyla yürütülebilir. Ancak kurumsal banka hesabı açılışı için çoğu banka yetkili imza sahibinin en az bir kez şubeye gelmesini istiyor."}},{"@type":"Question","name":"Gürcistan'da kurumlar vergisi neden dağıtılan kâra uygulanıyor?","acceptedAnswer":{"@type":"Answer","text":"2017'den beri yürürlükte olan Estonya modeli, yeniden yatırımı teşvik etmek amacıyla şirkette tutulan kârı vergilendirmiyor; vergi, kâr ortaklara dağıtıldığı anda %15 oranında tahakkuk ediyor. Bu, kârı bilanço içinde tutan büyüyen şirketler için nakit akışı avantajı sağlıyor."}},{"@type":"Question","name":"Virtual Zone statüsünü hangi şirketler alabilir?","acceptedAnswer":{"@type":"Answer","text":"Yalnızca Gürcistan'da tescilli, yazılım geliştirme veya diğer nitelikli dijital hizmetleri yurt dışına ihraç eden LLC/JSC yapıları bu statüye başvurabilir. Statü, ilgili ihracat gelirini kurumlar vergisinden muaf tutar; ancak dağıtılan kâr üzerindeki %5 temettü stopajı devam eder."}},{"@type":"Question","name":"Gürcistan'da şirket kurarsam Türkiye'de ek vergi ödemem gerekir mi?","acceptedAnswer":{"@type":"Answer","text":"Her zaman değil, ama gerekebilir. Türkiye'de yerleşik ortak için Kurumlar Vergisi Kanunu madde 7'deki kontrol edilen yabancı kurum (CFC) hükümleri, kontrol oranı, pasif gelir oranı, düşük efektif vergi yükü ve ciro eşiği şartlarının tümü gerçekleştiğinde devreye girer ve dağıtılmamış kârı da Türkiye'de vergilendirir. Bu nedenle yapı kurulmadan önce gelir kompozisyonunuzun bu dört şart açısından değerlendirilmesi önemlidir."}},{"@type":"Question","name":"Kuruluş süreci ne kadar sürer?","acceptedAnswer":{"@type":"Answer","text":"Belgeler eksiksiz hazırlandığında NAPR/Public Service Hall üzerinden standart tescil 1 iş günü içinde tamamlanabiliyor. Vekâletname, apostil ve tercüme süreçleri dahil edildiğinde toplam süre birkaç gün ile 1 hafta arasında değişiyor; banka hesabı açılışı bu süreye ayrıca eklenmelidir."}}]}) }}
      />
    </BlogLayout>
  );
}
