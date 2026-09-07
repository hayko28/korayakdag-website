import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB Girişimci Destek Programı 2026 | Koray Akdağ",
  description:
    "KOSGEB Girişimci Destek Programı'nda iş kurma, iş geliştirme ve kredi faiz desteği tutarları, kimler başvurabilir, 2026 başvuru dönemleri ve adım adım süreç.",
  keywords: [
    "kosgeb girişimci destek programı 2026",
    "kosgeb iş kurma desteği",
    "kosgeb iş geliştirme desteği",
    "genç girişimci desteği kosgeb",
    "kadın girişimci desteği kosgeb",
    "kosgeb kredi faiz desteği",
    "kosgeb girişimci destek programı başvuru",
    "kobi bilgi sistemi başvuru",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Girişimci Destek Programı 2026: Kuruluş, İş Geliştirme ve Kredi Faiz Desteği Nasıl Alınır?"
      description="Yeni bir iş fikri olan girişimcilerin ve 0-3 yaş aralığındaki genç işletmelerin başvurduğu KOSGEB Girişimci Destek Programı'nda iş kurma desteği, 1,5 milyon TL'ye varan iş geliştirme desteği, kadın/genç girişimciye özel kredi faiz desteği, şartlar ve 2026 başvuru takvimiyle güncel rehber."
      category="KOSGEB • GİRİŞİMCİLİK DESTEĞİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kosgeb-girisimci-destek-programi-2026"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in girişimcilere yönelik en köklü ve en çok başvurulan
          programlarından biri olan <strong>Girişimci Destek Programı</strong>,
          henüz şirketi olmayan bir iş fikri sahibinden, kuruluşunun üzerinden
          en fazla 3 yıl geçmiş genç bir işletmeye kadar geniş bir kitleyi
          hedefler. Program üç ayrı destek bileşeninden oluşur ve doğru
          kurgulandığında toplamda önemli bir finansman sağlar.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ İş Kurma, İş Geliştirme ve Kredi Faiz Desteği bileşenleri</li>
          <li>✔ Destek tutarları, oranları ve kadın/genç girişimciye özel avantajlar</li>
          <li>✔ Kimler başvurabilir, hangi şartlar aranır?</li>
          <li>✔ KOBİ Bilgi Sistemi üzerinden adım adım başvuru süreci</li>
          <li>✔ 2026 başvuru dönemleri ve güncel durum</li>
          <li>✔ Dikkat edilmesi gereken kritik noktalar</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#program-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Program Nedir? Neden Önemli?
          </Link>
          <Link href="#bilesenler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Program Bileşenleri ve Destek Tutarları
          </Link>
          <Link href="#kimler-basvurabilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Başvurabilir? Şartlar Nelerdir?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Adım Adım Başvuru ve Değerlendirme Süreci
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. 2026 Başvuru Dönemleri ve Güncel Durum
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. PROGRAM NEDİR */}
      <section id="program-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Program Nedir? Neden Önemli?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB Girişimci Destek Programı, bir iş fikrine dayalı olarak
          kendi işini kurmak isteyen gerçek kişileri ve kuruluşunun üzerinden
          henüz uzun zaman geçmemiş genç işletmeleri, kuruluş aşamasından
          büyüme aşamasına kadar destekleyen bütünleşik bir mekanizmadır.
          Programın en ayırt edici özelliği; hem &quot;henüz şirketi olmayan
          bir fikir sahibine&quot; hem de &quot;kurulmuş ama hâlâ genç
          sayılan bir işletmeye&quot; farklı bileşenlerle destek
          sağlamasıdır. Bu nedenle girişimcilik yolculuğunun en kritik ve en
          çok finansmana ihtiyaç duyulan ilk üç yılını kapsar.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Program, KOSGEB&apos;in &quot;Girişimci Destek Programı İş
            Geliştirme Çağrısı&quot; adı altında dönemsel olarak açtığı
            çağrılarla yürütülür; yani her bileşen yılın her günü açık
            değildir, belirli başvuru dönemlerinde başvuruya kapatılır ve
            değerlendirilir.
          </p>
        </div>
      </section>

      {/* 2. BİLEŞENLER */}
      <section id="bilesenler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Program Bileşenleri ve Destek Tutarları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program üç ana bileşenden oluşur. Bileşenler ayrı ayrı
          değerlendirilir; bir girişimci uygun olduğu her bileşene başvurabilir.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏁</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">İş Kurma Desteği</h3>
            <p className="text-gray-700">
              Gerçek kişi statüsünde kurulan işletmelere <strong>10.000 TL</strong>,
              sermaye şirketi olarak kurulan işletmelere <strong>20.000 TL</strong>{" "}
              geri ödemesiz destek verilir. Girişimcinin kadın, genç, engelli,
              gazi veya birinci derece şehit yakını olması hâlinde bu tutara{" "}
              <strong>+10.000 TL</strong> ilave edilir. Ayrıca uygun personel
              istihdamı için yıllık asgari ücret düzeyinde, geri ödemesiz
              personel gideri desteği sağlanır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📈</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">İş Geliştirme Desteği</h3>
            <p className="text-gray-700">
              0-3 yaş aralığındaki işletmelerin personel, makine-teçhizat,
              yazılım ve hizmet alımı giderlerini kapsayan, geri ödemeli
              nitelikte üst limiti <strong>1.500.000 TL</strong> (kadın, genç,
              engelli, gazi ve şehit yakını girişimcilerde{" "}
              <strong>1.650.000 TL</strong>) olan destek. Destek oranı{" "}
              <strong>%80</strong>&apos;dir; proje süresi 36 aya kadar
              çıkabilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💳</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">Kredi Faiz/Kâr Payı Desteği</h3>
            <p className="text-gray-700">
              Yalnızca <strong>kadın ve genç girişimcilere</strong> özel;
              jüri değerlendirmesinde en az 50 puan alan işletmelerin
              kullandığı kredide, <strong>1.000.000 TL&apos;ye</strong> kadar
              kredi tutarı üzerinden faiz/kâr payının <strong>%50&apos;si</strong>{" "}
              geri ödemesiz olarak karşılanır.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Destek Bileşeni</th>
                <th className="p-4">Üst Limit</th>
                <th className="p-4">Oran / Niteliği</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">İş Kurma Desteği</td>
                <td className="p-4">10.000 – 30.000 TL (kategoriye göre)</td>
                <td className="p-4">Geri ödemesiz (hibe)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Personel Gideri Desteği</td>
                <td className="p-4">Yıllık 1 asgari ücret x 3 yıl (360 gün/yıl SGK şartıyla)</td>
                <td className="p-4">Geri ödemesiz (hibe)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">İş Geliştirme Desteği</td>
                <td className="p-4">1.500.000 TL (özel kategoride 1.650.000 TL)</td>
                <td className="p-4">%80 – geri ödemeli</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">Kredi Faiz/Kâr Payı Desteği</td>
                <td className="p-4">1.000.000 TL kredi üzerinden</td>
                <td className="p-4">Faizin %50&apos;si – geri ödemesiz (sadece kadın/genç)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <p className="text-gray-700">
            ⚠️ Yukarıdaki tutarlar KOSGEB&apos;in güncel uygulama esaslarına
            dayanır; destek tutarları ve oranları dönemsel çağrı
            duyurularında revize edilebildiğinden, başvuru öncesinde
            kosgeb.gov.tr veya KOBİ Bilgi Sistemi (KBS) üzerinden güncel
            rakamları teyit etmenizi öneririz.
          </p>
        </div>
      </section>

      {/* 3. KİMLER BAŞVURABİLİR */}
      <section id="kimler-basvurabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Başvurabilir? Şartlar Nelerdir?
        </h2>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Temel Başvuru Şartları
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>İş Kurma Desteği:</strong> İşletmesinin yaşı 0-1 yıl
              olan girişimciler başvurabilir; bir iş fikrine sahip henüz
              şirketi olmayan gerçek kişiler de bu kapsamda değerlendirilir,
              proje kabul edilirse belirlenen süre içinde işletmesini kurup
              KOSGEB Veri Tabanına kaydolması gerekir.
            </li>
            <li>
              <strong>İş Geliştirme Desteği:</strong> İşletmesinin yaşı 0-3
              yıl olan, KOSGEB&apos;in desteklediği sektörlerde (başta
              imalat sanayi olmak üzere yazılım/bilgisayar programcılığı,
              bilgi hizmet faaliyetleri ve bilimsel Ar-Ge gibi seçili NACE
              kodları) faaliyet gösteren işletmeler başvurabilir.
            </li>
            <li>
              <strong>Ortaklık payı:</strong> Girişimcinin/ortağın
              işletmedeki payının destek süresince en az %50 olması şart
              koşulur.
            </li>
            <li>
              <strong>Kredi Faiz Desteği:</strong> Yalnızca kadın veya genç
              girişimcilere (ve jüri değerlendirmesinde en az 50 puan almış
              işletmelere) açıktır.
            </li>
            <li>
              <strong>Personel gideri desteğinde ek şart:</strong> İstihdam
              edilecek personelin, işletme ortağının veya girişimcinin
              birinci derece yakını olmaması, yıllık en az 360 gün SGK
              primine tabi çalıştırılması gerekir.
            </li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Henüz şirketiniz yoksa ve KOSGEB destekli girişimcilik yolunu
            değerlendiriyorsanız, hangi şirket türünün (şahıs, limited veya
            anonim) sizin için daha uygun olduğunu{" "}
            <Link href="/blog/sahis-limited-anonim-sirket-karsilastirma" className="text-orange-600 underline">
              şirket türleri karşılaştırma rehberimizden
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
        </div>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Başvuru ve Değerlendirme Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Başvurular e-Devlet şifresiyle erişilen <strong>KOBİ Bilgi
          Sistemi (KBS)</strong> üzerinden, KOSGEB&apos;in duyurduğu başvuru
          dönemleri içinde yapılır.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">KBS Üzerinden Başvuru</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Sektör Kurulu ve Jüri Değerlendirmesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Taahhütname, İzleme ve Ödeme</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Başvuru Formunun Doldurulması
          </h3>
          <p className="leading-8 text-gray-700">
            Girişimci, ilgili bileşenin başvuru dönemi içinde iş planını
            (kuruluş hedefleri, personel istihdam planı, makine-teçhizat/yazılım
            ihtiyacı ve bütçesi) KBS üzerinden doldurur ve onaylar.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Sektör Bazlı Kurul Değerlendirmesi
          </h3>
          <p className="leading-8 text-gray-700">
            İş Geliştirme Desteği başvuruları, KOSGEB personeli, öğretim
            elemanları ve bağımsız sektör temsilcilerinden oluşan sektör
            bazlı kurullarda puanlanır. Ülke genelinde en yüksek puanı alan
            başvurular, il bazında belirlenen bir kontenjan dahilinde jüri
            sunum aşamasına davet edilir; bu aşamada girişimci projesini
            sözlü olarak da savunur.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Karar ve Taahhütname
          </h3>
          <p className="leading-8 text-gray-700">
            Kabul edilen projeler için Taahhütname KBS üzerinden onaylanır;
            İş Kurma Desteği kapsamında henüz şirketi olmayan girişimcinin,
            karar bildiriminden itibaren belirlenen süre içinde işletmesini
            kurup KOSGEB Veri Tabanına kaydolması gerekir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Proje Süresince İzleme ve Ödeme
          </h3>
          <p className="leading-8 text-gray-700">
            İş Geliştirme Desteği kapsamındaki projeler dönemsel olarak
            izlenir; harcamalar fatura ve ödeme belgeleriyle KBS üzerinden
            raporlanır, uygun bulunan giderler için ödeme yapılır. Nakit
            ödemeler destek kapsamı dışındadır; ödemelerin banka aracılığıyla
            yapılması gerekir.
          </p>
        </div>
      </section>

      {/* 5. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. 2026 Başvuru Dönemleri ve Güncel Durum
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Girişimci Destek Programı İş Geliştirme Çağrısı, 2026 yılında
          şimdiye kadar iki dönem halinde açıldı:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Dönem</th>
                <th className="p-5">Başvuru Tarihleri</th>
                <th className="p-5">Durum</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">2026 Yılı 1. Dönem</td>
                <td className="p-5">3 – 31 Ocak 2026</td>
                <td className="p-5">Kapandı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">2026 Yılı 2. Dönem</td>
                <td className="p-5">20 Nisan – 8 Mayıs 2026</td>
                <td className="p-5">Kapandı</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">2026 Yılı 3. Dönem</td>
                <td className="p-5">Henüz ilan edilmedi</td>
                <td className="p-5">Yıl sonuna kadar açılması bekleniyor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu yazının hazırlandığı tarih itibarıyla üçüncü dönemin kesin
            başvuru tarihleri KOSGEB tarafından henüz duyurulmadı. İş Kurma
            Desteği bileşeni ise dönemsel çağrıdan bağımsız olarak, işletme
            yaşı 0-1 arasındaysa büyük ölçüde sürekli başvuruya açık şekilde
            işler. Üçüncü dönem çağrısının açılıp açılmadığını
            kosgeb.gov.tr üzerindeki güncel duyurular sayfasından veya
            e-Devlet üzerinden KOBİ Bilgi Sistemi&apos;nden takip
            edebilirsiniz.
          </p>
        </div>
      </section>

      {/* 6. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İş planınızı, jüri sunumunda somut rakam ve pazar verisiyle
            savunabilecek şekilde hazırlayın; genel geçer ifadeler puan
            kaybına yol açar
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İş Geliştirme Desteği&apos;nde işletmenizin faaliyet gösterdiği
            sektörün destek kapsamında olup olmadığını KBS üzerinden NACE
            kodunuzla teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ortaklık payınızın destek süresince %50&apos;nin altına
            düşmemesine dikkat edin; aksi hâlde destek iptal riski doğar
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Personel istihdamında SGK gün sayısı ve bordro uyumluluğu
            desteğin ödenip ödenmeyeceğini doğrudan etkiler
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kredi Faiz Desteği&apos;nden yararlanmak için önce banka
            kredisi kullanmanız ve jüri puanınızın en az 50 olması gerektiğini
            unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ödemeler yalnızca banka/PTT aracılığıyla yapılan, fatura ile
            belgelenen harcamalar için gerçekleştirilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İş Geliştirme Desteği&apos;nin geri ödemeli kısmı için taksit
            takvimine uyum, gelecekteki KOSGEB desteklerine erişiminizi de
            etkiler
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Başvuru dönemi kısa (genellikle 2-4 hafta) olduğundan, iş
            planı ve bütçe hazırlığına dönem açılmadan önce başlamak rekabet
            avantajı sağlar
          </div>
        </div>
      </section>

      {/* 7. SIK SORULAN SORULAR */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketim yok, sadece bir iş fikrim var. Başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. İş Kurma Desteği bileşeni, henüz şirketi olmayan ancak bir
              iş fikrine dayalı olarak kendi işini kurmak isteyen gerçek
              kişilerin başvurusuna açıktır. Proje kabul edildikten sonra
              belirlenen süre içinde işletmenizi kurup KOSGEB Veri
              Tabanına kaydolmanız gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İş Geliştirme Desteği&apos;nin tamamı hibe midir?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. İş Geliştirme Desteği geri ödemeli niteliktedir; destek
              oranı %80&apos;dir, kalan %20&apos;lik kısmı işletme kendi
              kaynağından karşılar. Yalnızca İş Kurma Desteği ve personel
              gideri desteği geri ödemesizdir (hibe).
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kredi Faiz Desteği&apos;nden herkes yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bu bileşen yalnızca kadın veya genç girişimcilere, jüri
              değerlendirmesinde en az 50 puan almış olmaları şartıyla
              açıktır. Kredi kullanılan bankadan alınan kredi üzerinden
              1.000.000 TL&apos;ye kadar olan kısmın faiz/kâr payının
              %50&apos;si geri ödemesiz olarak karşılanır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              3. dönem başvuruları ne zaman açılacak?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu yazının hazırlandığı tarih itibarıyla KOSGEB tarafından
              kesin bir tarih duyurulmadı; önceki yıllardaki uygulamaya göre
              üçüncü dönemin yıl sonuna kadar açılması bekleniyor. Güncel
              duyuruları kosgeb.gov.tr üzerinden takip etmenizi öneririz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TEKMER veya KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek
              Programı&apos;yla aynı anda yararlanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Programlar farklı amaçlara hizmet eder ve genel olarak birbirini
              dışlamaz, ancak aynı gider kalemi için birden fazla KOSGEB
              programından veya başka bir kurumdan (örneğin Yatırım Teşvik
              Belgesi) eşzamanlı destek alınamaz. Hangi programın işletmeniz
              için daha uygun olduğunu netleştirmek amacıyla{" "}
              <Link href="/blog/tekmer-nedir-basvuru-sureci-destekleri-2026" className="text-orange-600 underline">
                TEKMER rehberimizi
              </Link>{" "}
              ve{" "}
              <Link href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026" className="text-orange-600 underline">
                Ar-Ge, Ür-Ge ve İnovasyon Destek Programı rehberimizi
              </Link>{" "}
              de incelemenizi öneririz.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 İş Planınızdan Başvuru Dosyanıza Kadar Yanınızdayız
          </h3>
          <p className="leading-8 text-gray-700">
            KOSGEB Girişimci Destek Programı&apos;nda başvuru dönemleri kısa
            ve rekabet yüksektir; iş planınızın hangi bileşene, hangi
            bütçeyle ve hangi gerekçelerle kurgulanacağı, jüri
            değerlendirmesinde alacağınız puanı doğrudan etkiler. Başvuru
            dosyanızın hazırlanmasından KBS süreçlerine, projenizin
            izlenmesinden sonraki adım olan iş geliştirme ve büyüme
            stratejinize kadar tüm süreci bizzat biz yürütüyoruz; ayrı bir
            danışmanlık firması aramanıza gerek kalmıyor.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Projenizi değerlendirmemiz için bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB Girişimci Destek Programı, iş fikrinden şirket kuruluşuna,
          kuruluştan büyümeye uzanan yolculuğun her aşamasında finansman
          sağlayan, girişimcilik ekosistemindeki en kapsamlı devlet destek
          mekanizmalarından biridir. İş Kurma Desteği ile ilk adımı atmak,
          İş Geliştirme Desteği ile büyümeyi hızlandırmak ve kadın/genç
          girişimciler için Kredi Faiz Desteği ile finansmana erişimi
          kolaylaştırmak mümkündür. Dönemsel çağrı takviminin kısa olması
          nedeniyle iş planı ve bütçe hazırlığına erken başlamak, başvurunun
          kabul edilme olasılığını doğrudan artırır.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
          </Link>
          <Link
            href="/blog/tekmer-nedir-basvuru-sureci-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKMER • KOSGEB • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TEKMER Nedir? Nasıl Başvurulur?</h3>
          </Link>
          <Link
            href="/blog/sahis-limited-anonim-sirket-karsilastirma"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU • GİRİŞİMCİLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şahıs mı, Limited mi, Anonim mi?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
