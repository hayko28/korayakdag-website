import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı: Kimler Başvurabilir? (2026) | Koray Akdağ",
  description:
    "KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı'na girişimciler ve KOBİ'ler herhangi bir tarihte başvurabilir. 900.000 TL'ye varan destek üst limiti, gider kalemleri, başvuru şartları ve KBS üzerinden adım adım süreçle 2026 güncel rehber.",
  keywords: [
    "kosgeb ar-ge destek programı",
    "kosgeb ür-ge inovasyon desteği",
    "kosgeb ar-ge desteği nasıl alınır",
    "kosgeb girişimci ar-ge desteği",
    "kosgeb 900.000 tl destek",
    "kosgeb kobi bilgi sistemi başvuru",
    "kosgeb ar-ge desteği şartları 2026",
    "kosgeb ür-ge projesi nedir",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı: Kimler Başvurabilir, Destek Tutarları Nedir?"
      description="Girişimcilerin ve KOBİ'lerin herhangi bir tarihte başvurabildiği KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı'nda 900.000 TL'ye varan destek üst limiti, gider kalemleri, başvuru şartları ve KBS üzerinden adım adım süreçle 2026 güncel rehber."
      category="KOSGEB • AR-GE DESTEĞİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kosgeb-arge-urge-inovasyon-destek-programi-2026"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in Ar-Ge Merkezi statüsü, teknopark şartı veya asgari
          personel sayısı gibi ön koşullar aramadan; yeni bir iş fikrine
          sahip girişimcilerin ve her ölçekten KOBİ&apos;nin doğrudan
          başvurabildiği <strong>Ar-Ge, Ür-Ge ve İnovasyon Destek
          Programı</strong>, KOSGEB&apos;in en kapsamlı ve en çok başvurulan
          Ar-Ge destek mekanizmasıdır. Programa yılın herhangi bir gününde
          başvuru yapılabilir.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Ar-Ge/İnovasyon projesi ile Ür-Ge projesi arasındaki fark</li>
          <li>✔ Kimler başvurabilir, hangi şartlar aranır?</li>
          <li>✔ Gider kalemi bazında destek tutarları ve oranları</li>
          <li>✔ KBS üzerinden adım adım başvuru ve değerlendirme süreci</li>
          <li>✔ Proje süresi, izleme ve geri ödeme koşulları</li>
          <li>✔ Dikkat edilmesi gereken kritik noktalar</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#program-nedir"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Program Nedir? Neden Önemli?
          </Link>
          <Link
            href="#kimler-basvurabilir"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. Kimler Başvurabilir? Şartlar Nelerdir?
          </Link>
          <Link
            href="#destek-kalemleri"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Destek Kalemleri ve Tutarları
          </Link>
          <Link
            href="#surec"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            4. Adım Adım Başvuru ve Değerlendirme Süreci
          </Link>
          <Link
            href="#proje-suresi"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            5. Proje Süresi, İzleme ve Geri Ödeme
          </Link>
          <Link
            href="#dikkat"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Dikkat Edilmesi Gerekenler
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. Sık Sorulan Sorular
          </Link>
          <Link
            href="#sonuc"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
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
          KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı, bilim ve
          teknolojiye dayalı yeni bir fikri; yeni bir ürün, süreç veya
          hizmete dönüştürmek isteyen girişimcilerin ve KOBİ&apos;lerin
          projelerini destekler. Program iki ayrı proje kapsamı sunar:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Ar-Ge ve İnovasyon Projesi
            </h3>
            <p className="text-gray-700">
              Yeni bir ürün/süreç/hizmet üretilmesi, mevcut bir ürün veya
              hizmetin geliştirilmesi, kalitesinin yükseltilmesi ya da
              maliyet düşürücü yeni tekniklerin geliştirilmesine yönelik
              projeler. Hem yeni girişimciler hem de KOBİ&apos;ler başvurabilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🔧</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Ür-Ge (Ürün Geliştirme) Projesi
            </h3>
            <p className="text-gray-700">
              Değişen pazar taleplerine uyum sağlamak amacıyla orijinal,
              iyileştirilmiş veya değiştirilmiş yeni ürünler üretilmesine
              yönelik projeler. Yalnızca KOSGEB&apos;in desteklediği
              sektörlerde faaliyet gösteren KOBİ&apos;ler başvurabilir ve
              başvuruya konu ürünün daha önce desteklenmiş bir Ar-Ge/yenilik
              projesi, patent, doktora çalışması veya TÜR Deneyim Belgesi
              gibi belirli kaynaklardan birinden ortaya çıkmış olması
              gerekir.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Programın en önemli farkı: KOSGEB&apos;in Ar-Ge Merkezi
            teşviklerinden (5746 sayılı Kanun) farklı olarak burada asgari
            personel sayısı, teknopark kaydı veya belirli bir ciro şartı
            aranmaz. Bir iş fikrine sahip tek kişilik bir girişimci de,
            yıllardır faaliyet gösteren bir KOBİ de aynı programdan
            yararlanabilir.
          </p>
        </div>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler-basvurabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir? Şartlar Nelerdir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Programa iki grup başvuru sahibi kabul edilir: <strong>Yeni
          Girişimciler</strong> ve <strong>KOBİ&apos;ler</strong>. Başvuru
          sayısı üst limiti de bu ikisi arasında farklılaşır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kapsam</th>
                <th className="p-5">Uygun Başvuru Sahibi</th>
                <th className="p-5">Başvuru Sayısı Üst Limiti</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ar-Ge ve İnovasyon Projesi</td>
                <td className="p-5">Yeni Girişimciler ve KOBİ&apos;ler</td>
                <td className="p-5">
                  Girişimci olarak en fazla 1 defa; KOBİ&apos;ler için sınırsız
                  (aynı anda yalnızca 1 proje desteklenir)
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Ür-Ge Projesi</td>
                <td className="p-5">Yalnızca KOBİ&apos;ler</td>
                <td className="p-5">En fazla 3 kez</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Temel Başvuru Şartları
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Girişimci tanımı:</strong> Bir iş fikrine dayalı olarak
              kendi işini kurmak isteyen gerçek kişi; proje kabul edilirse
              işletmesini kurup KOSGEB Veri Tabanına kaydolması gerekir.
            </li>
            <li>
              <strong>KOBİ tanımı:</strong> Anonim, limited veya sermayesi
              paylara bölünmüş komandit şirket statüsünde, KOSGEB veri
              tabanında kayıtlı ve güncel işletme beyanına sahip küçük/orta
              ölçekli işletmeler.
            </li>
            <li>
              <strong>Personel giderleri desteğinde ek şart:</strong> Ar-Ge ve
              İnovasyon Projesi kapsamında işletmesini sermaye şirketi olarak
              kuran girişimcinin kendisi ve/veya projede görevli ortağı, başka
              bir işletmede %30 ve üzeri ortaklığı bulunmaması ve başka bir
              işveren nezdinde SGK&apos;ya tabi çalışmaması şartıyla nitelikli
              personel desteğinden yararlanabilir.
            </li>
            <li>
              <strong>Tek proje kuralı:</strong> Bir yararlanıcının aynı anda
              yalnızca bir Ar-Ge, Ür-Ge veya İnovasyon projesi desteklenir;
              projenin tamamlanmasının ardından yeni bir proje sunulabilir.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. DESTEK KALEMLERİ */}
      <section id="destek-kalemleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Kalemleri ve Tutarları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program kapsamında hem girişimciler hem de KOBİ&apos;ler için{" "}
          <strong>toplam destek tutarı üst limiti 900.000 TL</strong>&apos;dir.
          Bu tutar; makine-teçhizat, nitelikli personel, sınai mülkiyet
          hakları, test-analiz ve diğer giderler olmak üzere dört ana gider
          grubuna dağılır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Gider Kalemi</th>
                <th className="p-4">Geri Ödemesiz Üst Limit</th>
                <th className="p-4">Destek Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">
                  Makine-Teçhizat, Donanım, Yazılım ve Hizmet Alımı
                </td>
                <td className="p-4">
                  150.000 TL hibe (+ 300.000 TL&apos;ye kadar geri ödemeli)
                </td>
                <td className="p-4">%75 (yerli malı belgesi ile +%15)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Nitelikli Personel Gideri</td>
                <td className="p-4">200.000 TL</td>
                <td className="p-4">%100</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sınai Mülkiyet Hakları (Patent, Faydalı Model vb.)</td>
                <td className="p-4">100.000 TL</td>
                <td className="p-4">%75 (TÜRKPATENT&apos;ten alınan belgelerde %80)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Test, Analiz ve Belgelendirme</td>
                <td className="p-4">100.000 TL</td>
                <td className="p-4">%75 (TSE hizmetlerinde %80)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">
                  Diğer Giderler (danışmanlık, eğitim, tanıtım, kongre/fuar ziyareti, işletme kuruluş gideri)
                </td>
                <td className="p-4">50.000 TL</td>
                <td className="p-4">%75</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Ek destek oranları:</strong> Projede açık kaynak kodlu
            yazılım kullanılması halinde nitelikli personel dışındaki geri
            ödemesiz destek oranlarına +%15; işletmenin son 3 yılda KOSGEB
            KOBİ ve Girişimcilik Ödülleri&apos;nde kategori birincisi olması
            halinde +%10 ilave edilebilir (toplam ilave oran %15&apos;i
            geçemez). Girişimcilere ayrıca bir defaya mahsus <strong>işletme
            kuruluş gideri desteği</strong> de sağlanır (gerçek kişi
            işletmesi için 5.000 TL, sermaye şirketi için 10.000 TL, oran
            uygulanmaksızın). Makine-teçhizat için geri ödemeli destek
            kullanılırsa, ödeme öncesi banka teminat mektubu veya KGF kefalet
            mektubu istenir.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <p className="text-gray-700">
            ⚠️ Yukarıdaki tutarlar KOSGEB&apos;in resmî uygulama esaslarına
            dayanmaktadır ve programın kuruluşundan bu yana güncellendiği
            görülmemiştir; yine de destek üst limitleri ve oranları zaman
            zaman revize edilebildiğinden, başvuru öncesinde kosgeb.gov.tr
            üzerinden veya KOBİ Bilgi Sistemi&apos;nden güncel tutarları
            teyit etmenizi öneririz.
          </p>
        </div>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Başvuru ve Değerlendirme Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Başvurular, KOSGEB&apos;in internet sitesi ve e-Devlet üzerinden
          erişilen <strong>KOBİ Bilgi Sistemi (KBS)</strong> üzerinden
          yürütülür ve yılın herhangi bir tarihinde yapılabilir.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">KBS Üzerinden Başvuru</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Kontrol ve Kurul Değerlendirmesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Taahhütname ve İzleme</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Başvuru Formunun Doldurulması
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru sahibi, Ar-Ge, Ür-Ge ve İnovasyon Destek Programı Proje
            Başvuru Formu&apos;nu KBS üzerinden doldurup onaylar. Projesi
            kabul edilen girişimci, işletmesini kurduktan sonra KOSGEB Veri
            Tabanına kaydolmak zorundadır.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Başvurunun Kontrolü
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru, en geç 1 ay içinde KBS üzerinden kontrol edilir.
            Eksik veya hatalı bulunan başvurular düzeltmeye açılır; uygun
            bulunan başvurular değerlendirilmek üzere Kurula sevk edilir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Kurul Değerlendirmesi ve Karar
          </h3>
          <p className="leading-8 text-gray-700">
            Değerlendirme ve Karar Kurulu, başvuruyu kabul edebilir,
            reddedebilir veya düzeltme talep edebilir. Çağrı esaslı olmayan
            başvurularda nihai karar doğrudan Kurul tarafından alınır. Kurul
            kararına, çağrı esaslı olmayan reddedilen başvurularda kararın
            bildirildiği tarihten itibaren 15 gün içinde bir defaya mahsus
            itiraz edilebilir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Taahhütname ve Programın Başlangıcı
          </h3>
          <p className="leading-8 text-gray-700">
            KOBİ başvurularında programın başlangıç tarihi, destekleme
            kararının evrak kaydına alındığı tarihtir. Girişimci
            başvurularında ise Kurul kararının bildiriminden itibaren 6 ay
            içinde (gerekirse ek süre ile birlikte en fazla 30 gün daha)
            işletmenin kurulup Taahhütname&apos;nin KBS üzerinden onaylanması
            gerekir; onay tarihi programın başlangıcı sayılır.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.5. Proje Süresince İzleme
          </h3>
          <p className="leading-8 text-gray-700">
            Desteklenen her proje, KOSGEB tarafından görevlendirilen bir
            öğretim elemanı (izleyici) tarafından 4&apos;er aylık dönemler
            halinde izlenir; harcamaların ve faaliyetlerin plana uygunluğu
            Dönemsel İzleme Formu ile raporlanır.
          </p>
        </div>
      </section>

      {/* 5. PROJE SÜRESİ */}
      <section id="proje-suresi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Proje Süresi, İzleme ve Geri Ödeme
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ⏱️ Proje Süresi
            </h3>
            <p className="text-gray-700">
              Proje süresi 4 ay ve katları olacak şekilde en az 8, en fazla
              24 aydır. Kurul kararıyla 4 ay ve katları şeklinde en fazla 12
              ay ek süre verilebilir; ek süre dahil toplam süre 24 ayı
              geçemez. Her gider, ilgili olduğu faaliyet dönemiyle
              ilişkilendirilerek planlanır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              💳 Geri Ödemeli Kısımda Geri Ödeme
            </h3>
            <p className="text-gray-700">
              Makine-teçhizat için tercih edilen geri ödemeli kısımda,
              programın tamamlanma tarihinden itibaren 12 ay ödemesiz olmak
              üzere, kalan tutar 4&apos;er aylık dönemler halinde 6 eşit
              taksitte, faizsiz ve komisyonsuz olarak geri ödenir (zamanında
              ödenmesi kaydıyla).
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Erken ödeme talep edilmesi halinde, Kurul/komite kararında
            belirtilen tahmini geri ödemesiz destek tutarının %50&apos;sine
            kadar teminat karşılığında avans ödemesi yapılabilir. Bu, özellikle
            nakit akışı sınırlı girişimciler için projeye başlangıçta
            finansman sağlar.
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
            ✅ Projenizin Ar-Ge/İnovasyon mu yoksa Ür-Ge mi olduğunu başvuru
            öncesi netleştirin; Kurul gerekirse kapsam değişikliği talep
            edebilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Aynı gider kalemi için farklı kurumlardan (ör. Yatırım Teşvik
            Belgesi) eşzamanlı destek alınamaz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yararlanıcı, sahip/ortaklarının yakınlarından veya kendi
            ortağı olduğu işletmelerden destek kapsamında mal/hizmet satın
            alamaz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Reddedilen bir proje başvurusu, aynı proje için tekrar
            sunulamaz; itiraz hakkınızı süresi içinde (15 gün) kullanın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ödemeler banka/PTTBank aracılığıyla yapılmalı; nakit ödemeler
            destek kapsamı dışındadır
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Destek ödeme talebi, tamamlama kararının evrak kaydından
            itibaren en geç 4 ay içinde yapılmalıdır
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Destekle alınan makine-teçhizatın mülkiyeti işletmeye aittir;
            program sonrası izlemeye kadar satılamaz veya devredilemez
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Proje başvurusu, teknik inceleme ve bütçeleme aşamalarını
            profesyonel destekle hazırlamak, ret ve düzeltme risklerini
            azaltır
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
              Şirketim yok, sadece bir iş fikrim var. Yine de başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Program &quot;Yeni Girişimci&quot; kategorisiyle henüz
              şirketi olmayan, bir iş fikrine dayalı olarak kendi işini
              kurmak isteyen gerçek kişilerin de başvurmasına imkân tanır.
              Proje kabul edilirse, Kurul kararının bildiriminden itibaren
              belirlenen süre içinde şirketinizi kurmanız gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek tutarının tamamı hibe midir?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Nitelikli personel, sınai mülkiyet, test-analiz ve diğer
              giderler geri ödemesiz (hibe) niteliktedir; makine-teçhizat,
              donanım ve yazılım gideri kaleminde ise hem hibe hem de
              (üst limiti aşan kısım için) geri ödemeli seçenek bulunur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ar-Ge Merkezi teşviklerinden farkı nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Ar-Ge Merkezi statüsü (5746 sayılı Kanun), en az 15 tam zaman
              eşdeğer Ar-Ge personeli çalıştıran büyük ölçekli yapılar için
              tasarlanmış, gelir vergisi stopajı ve SGK primi gibi ayrı bir
              teşvik paketidir. KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek
              Programı ise personel sayısı şartı aramaz; tek kişilik
              girişimcilerden büyük KOBİ&apos;lere kadar geniş bir kitleye
              proje bazlı hibe/kredi desteği sağlar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuru için belirli bir dönem veya çağrı takvimi var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, program sürekli açıktır ve başvurular yılın herhangi
              bir tarihinde KBS üzerinden yapılabilir. KOSGEB, bu program
              kapsamında ayrıca dönemsel çağrılar da açabilir; ancak temel
              başvuru yolu her zaman kullanılabilir durumdadır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Proje reddedilirse tekrar başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Aynı proje için doğrudan tekrar başvuru yapılamaz; ret
              kararına 15 gün içinde bir defaya mahsus itiraz edilebilir.
              İtiraz da reddedilirse veya süresinde kullanılmazsa, farklı
              veya yeniden kurgulanmış bir proje ile ileride tekrar
              başvurulabilir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Başvuru Hazırlığından Proje Yönetimine Kadar Yanınızdayız
          </h3>
          <p className="leading-8 text-gray-700">
            KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı başvurusunun
            doğru kapsamda (Ar-Ge/İnovasyon veya Ür-Ge) kurgulanması,
            bütçenin gider kalemlerine uygun şekilde planlanması ve KBS
            üzerindeki süreçlerin eksiksiz yürütülmesi, projenin kabul
            edilme ve sorunsuz tamamlanma olasılığını doğrudan etkiler.
            Başvuru dosyanızın hazırlanmasından proje süresince izleme ve
            raporlama süreçlerine kadar tüm aşamaları bizzat biz
            yürütüyoruz; ayrı bir danışmanlık firması aramanıza gerek
            kalmıyor.{" "}
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
          KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı, personel sayısı
          veya teknopark şartı aramadan; iş fikri olan girişimciden köklü
          bir KOBİ&apos;ye kadar geniş bir kesime 900.000 TL&apos;ye varan
          destek üst limitiyle ürün geliştirme ve inovasyon yolculuğunu
          finanse eden, herhangi bir tarihte başvurulabilen kritik bir
          destek mekanizmasıdır. Doğru proje kurgusu ve eksiksiz bir başvuru
          dosyası, hem onay sürecini hızlandırır hem de proje süresince
          yaşanabilecek revizyon ve düzeltme taleplerini en aza indirir.
        </p>
      </section>
    </BlogLayout>
  );
}
