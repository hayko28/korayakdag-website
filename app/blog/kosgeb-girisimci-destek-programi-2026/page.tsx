import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB Girişimci Destek Programı Yeniden Yapılandırıldı: 2026 Üç Destek Modeli | Koray Akdağ",
  description: "KOSGEB, 12 Ekim 2026'da Girişimci Destek Programı'nı tamamen yeniden yapılandırdı. Geleneksel/İleri ayrımı kalktı; yerine İş Kurma Desteği, 2.250.000 TL'ye kadar İş Geliştirme Desteği ve kadın/genç girişimciye özel Faiz/Kâr Payı Desteği geldi. Güncel şartlar ve 2026 3. dönem takvimiyle rehber.",
  keywords: [
    "kosgeb girişimci destek programı 2026",
    "kosgeb iş kurma desteği",
    "kosgeb iş geliştirme desteği",
    "kosgeb iş geliştirme çağrısı 2026",
    "kosgeb girişimci destek programı yenilendi",
    "kosgeb faiz kar payı desteği",
    "geleneksel ileri girişimci destek programı kalktı mı",
    "kosgeb 2.250.000 tl destek",
  ],
  alternates: {
    canonical: "/blog/kosgeb-girisimci-destek-programi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Girişimci Destek Programı Yeniden Yapılandırıldı: 2026'da Üç Destek Modeli Nasıl İşliyor?"
      description="12 Ekim 2026'da yürürlüğe giren yeni yönergeyle Geleneksel ve İleri Girişimci Destek Programı ayrımı sona erdi. Yerine İş Kurma Desteği, 2.250.000 TL'ye kadar geri ödemeli İş Geliştirme Desteği ve kadın/genç girişimciye özel Faiz/Kâr Payı Desteği geldi. Güncel şartlar, tutarlar, değerlendirme süreci ve 2026 3. dönem başvuru takvimiyle rehber."
      category="KOSGEB • GİRİŞİMCİLİK DESTEĞİ • 2026"
      date="Ekim 2026"
      readTime="13 Dakika"
      slug="kosgeb-girisimci-destek-programi-2026"
      programDurumu="acik"
      sonBasvuruTarihi="İş Geliştirme Desteği 2026 3. dönem: 31 Ekim 2026 (İş Kurma Desteği başvuruları sürekli açık)"
      coverImage="https://images.unsplash.com/photo-1752051548874-7d2176a84007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Yeni Modelde Hangi Destek Size Uygun, Birlikte Belirleyelim"
      ctaText="İş Kurma Desteğinden İş Geliştirme Desteğine, Faiz/Kâr Payı Desteğinden başvuru evrakına kadar yeniden yapılandırılan KOSGEB Girişimci Destek Programı sürecinin tamamında yanınızdayız. İşletmenizin hangi destekten ve ne kadar yararlanabileceğini birlikte değerlendirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in 12 Ekim 2026 tarihli duyurusuyla yürürlüğe giren
          yeni yönergeye göre:
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ <strong>Geleneksel ve İleri Girişimci Destek Programı</strong> ayrımı kaldırıldı; İleri Girişimci Destek Programı yürürlükten kaldırılan destekler listesine alındı.</li>
          <li>✔ Program artık üç ayrı mekanizmadan oluşuyor: <strong>İş Kurma Desteği</strong>, <strong>İş Geliştirme Desteği</strong> ve <strong>İş Geliştirme Faiz/Kâr Payı Desteği</strong>.</li>
          <li>✔ İş Geliştirme Desteği&apos;nde üst limit <strong>2.250.000 TL</strong>, destek oranı <strong>%80</strong>; genç/kadın/engelli/gazi/şehit yakını girişimcilerde limit 2.500.000 TL&apos;ye çıkıyor.</li>
          <li>✔ Bu destek artık <strong>geri ödemeli</strong>; faiz veya komisyon uygulanmıyor, geri ödemeler 24 aylık proje süresinin bitiminden 12 ay sonra başlıyor.</li>
          <li>✔ 2026 yılı <strong>3. dönem İş Geliştirme Desteği çağrısı 12-31 Ekim 2026</strong> tarihleri arasında başvuruya açık.</li>
          <li>✔ İş Kurma Desteği (performans + platform giderleri desteği) başvuruları yıl boyunca sürekli alınıyor.</li>
          <li>✔ Kadın ve genç girişimciler, ayrıca 1.000.000 TL&apos;ye kadar işletme sermayesi sağlayan ve maliyetinin yarısı KOSGEB tarafından karşılanan Faiz/Kâr Payı Desteğinden yararlanabiliyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#yenileme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Program Neden ve Nasıl Yeniden Yapılandırıldı?
          </Link>
          <Link href="#uc-destek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Üç Destek Mekanizmasına Genel Bakış
          </Link>
          <Link href="#is-kurma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. İş Kurma Desteği
          </Link>
          <Link href="#is-gelistirme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. İş Geliştirme Desteği
          </Link>
          <Link href="#faiz-destegi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. İş Geliştirme Faiz/Kâr Payı Desteği
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Karıştırmayın: Eski Program ile Yeni Model
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Kimler Başvurabilir? Ortak Şartlar
          </Link>
          <Link href="#degerlendirme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Değerlendirme ve Sıralama Nasıl İşliyor?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. YENİLEME */}
      <section id="yenileme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Program Neden ve Nasıl Yeniden Yapılandırıldı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in yeni kurulan işletmelere yönelik en bilinen desteği
          olan Girişimci Destek Programı, 12 Ekim 2026&apos;da resmî
          internet sitesinden yapılan duyuruyla kökten değişti. Daha önce
          birbirinden ayrı iki yapı (Geleneksel Girişimci Destek Programı ve
          İleri Girişimci Destek Programı) üzerinden yürüyen program, artık
          tek bir çatı altında üç farklı destek mekanizmasıyla uygulanıyor.
          KOSGEB, bu değişikliğin amacını yeni kurulan işletmelerin ayakta
          kalmasını ve büyümesini daha etkili desteklemek olarak açıklıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Değişikliğin arka planında, programın önceki İş Geliştirme Desteği
          bacağının gösterdiği güçlü talep de var: KOSGEB&apos;in kendi
          verilerine göre 2024&apos;te uygulamaya alınan İş Geliştirme
          Desteği kapsamında bugüne kadar 4.476 proje için toplam 6,4 milyar
          TL destekleme kararı alınmış. Yeni yönerge, bu kalemi programın
          kalıcı ve daha büyük bütçeli bir parçası haline getiriyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Daha önce bu program hakkında bilgi edinmiş ya da eski
            terimlerle (&quot;Geleneksel Girişimci Destek Programı&quot;,
            &quot;İleri Girişimci Destek Programı&quot;) arama yapan
            okuyucular için önemli bir not: bu iki alt program artık
            uygulanmıyor. KOSGEB&apos;in yürürlükten kaldırılan destekler
            listesinde İleri Girişimci Destek Programı da yer alıyor. Aşağıda
            güncel üç destek modelini ve eskisiyle farkını ayrıntılı
            anlatıyoruz.
          </p>
        </div>
      </section>

      {/* 2. ÜÇ DESTEK */}
      <section id="uc-destek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Üç Destek Mekanizmasına Genel Bakış
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yeni yapıda &quot;Girişimci Destek Programı&quot; tek bir başlık,
          ama içeriği üç farklı destek türünden oluşuyor ve her birinin
          hedef kitlesi, tutarı ve başvuru mantığı farklı:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek Türü</th>
                <th className="p-5">Tür</th>
                <th className="p-5">Üst Limit</th>
                <th className="p-5">Başvuru</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İş Kurma Desteği</td>
                <td className="p-5">Geri ödemesiz</td>
                <td className="p-5">8 brüt asgari ücret + platform giderleri</td>
                <td className="p-5">Sürekli açık</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İş Geliştirme Desteği</td>
                <td className="p-5">Geri ödemeli, faizsiz</td>
                <td className="p-5">2.250.000 TL (%80 oran)</td>
                <td className="p-5">Dönemsel çağrı</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">İş Geliştirme Faiz/Kâr Payı Desteği</td>
                <td className="p-5">Kısmen geri ödemesiz (finansman maliyetinin %50&apos;si)</td>
                <td className="p-5">1.000.000 TL işletme sermayesi</td>
                <td className="p-5">İş Geliştirme Desteği sürecine bağlı</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. İŞ KURMA DESTEĞİ */}
      <section id="is-kurma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. İş Kurma Desteği
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İş Kurma Desteği, programın giriş seviyesi ve en geniş kitleye
          açık kalemi. KOSGEB&apos;in desteklediği sektörlerde faaliyet
          gösteren, 0-1 yaş aralığındaki işletmeler başvurabiliyor. İki alt
          kalemden oluşuyor:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏁</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Performans Desteği
            </h3>
            <p className="text-gray-700">
              İşletmenin kuruluşunu ve ilk dönem faaliyetini teşvik eden,
              en fazla <strong>8 brüt asgari ücret</strong> tutarında
              geri ödemesiz destek. Girişimcisi genç, kadın, engelli, gazi
              veya birinci derece şehit yakını olan işletmeler bu
              kalemden yararlanabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💻</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Platform Giderleri Desteği
            </h3>
            <p className="text-gray-700">
              Sanayi ve Teknoloji Bakanlığı&apos;nın tanımlayacağı
              &quot;Dijital Şirket&quot; niteliğindeki işletmelerin
              platform kayıt ücretlerini karşılayan destek kalemi.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Yönergeye göre 16 Aralık 2024 ve sonrasında kurulan işletmeler,
            diğer şartları taşımaları kaydıyla, kuruluşlarından itibaren
            1 yıl içinde ve 31 Aralık 2026 tarihine kadar, işletme yaşı
            sınırlaması aranmaksızın başvurabiliyor. Bu geçiş hükmünün
            kendi işletmeniz için geçerli olup olmadığını başvuru öncesinde
            netleştirmenizi öneririz.
          </p>
        </div>
      </section>

      {/* 4. İŞ GELİŞTİRME DESTEĞİ */}
      <section id="is-gelistirme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. İş Geliştirme Desteği
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Programın en büyük bütçeli kalemi İş Geliştirme Desteği. 0-3 yaş
          aralığındaki işletmeler başvurabiliyor; teknogirişim rozeti sahibi
          işletmelerde yaş şartı aranmıyor. Destek, aşağıdaki beş NACE
          alanındaki işletmelerle sınırlı:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
            <li>İmalat (NACE C)</li>
            <li>Telekomünikasyon (NACE 61)</li>
            <li>Bilgisayar programlama, danışmanlık ve ilgili faaliyetler (NACE 62)</li>
            <li>Bilişim hizmet faaliyetleri (NACE 63)</li>
            <li>Bilimsel araştırma ve geliştirme (NACE 72)</li>
          </ul>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          4.1. Tutar, Oran ve Geri Ödeme
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Değer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Üst limit (standart)</td>
                <td className="p-5">2.250.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Üst limit (genç/kadın/engelli/gazi/şehit yakını)</td>
                <td className="p-5">2.500.000 TL (+250.000 TL)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Destek oranı</td>
                <td className="p-5">%80</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Geri ödeme</td>
                <td className="p-5">Faizsiz/komisyonsuz, 24 aylık proje süresi bitiminden 12 ay sonra başlar</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Proje süresi</td>
                <td className="p-5">24 ay</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          4.2. Desteklenen Giderler
        </h3>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>Personel giderleri</li>
          <li>Makine, teçhizat ve kalıp alımı</li>
          <li>Yazılım alımı</li>
          <li>
            Hizmet alımı: eğitim, danışmanlık, belgelendirme, test-analiz,
            pazarlama, tasarım ve sınai mülkiyet hakları
          </li>
        </ul>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          4.3. 2026 Başvuru Takvimi
        </h3>
        <p className="leading-8 text-gray-700">
          2026 yılı 3. dönem İş Geliştirme Desteği başvuruları <strong>12-31
          Ekim 2026</strong> tarihleri arasında KOSGEB&apos;in e-hizmetler
          portalı üzerinden alınıyor. Önceki dönemler 3-31 Ocak ve 20
          Nisan-8 Mayıs 2026 tarihlerinde uygulanmıştı; dönemler yıl içinde
          değişebildiği için her yeni çağrı KOSGEB&apos;in kendi sitesinden
          ayrıca duyuruluyor.
        </p>
      </section>

      {/* 5. FAİZ/KÂR PAYI DESTEĞİ */}
      <section id="faiz-destegi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. İş Geliştirme Faiz/Kâr Payı Desteği
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu kalem, yalnızca <strong>kadın ve genç girişimcilere</strong>{" "}
          yönelik ve İş Geliştirme Desteği sürecine bağlı olarak işliyor.
          KOSGEB&apos;in protokol yaptığı bankalar ve kredi garanti
          kurumları üzerinden kullandırılan bir işletme sermayesi kredisi
          modelidir:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">Tutar</p>
            <p className="mt-2 text-sm text-gray-600">En fazla 1.000.000 TL işletme sermayesi</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">Geri ödemesiz kısım</p>
            <p className="mt-2 text-sm text-gray-600">Kredi finansman maliyetinin %50&apos;si KOSGEB tarafından karşılanır</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">Vade</p>
            <p className="mt-2 text-sm text-gray-600">En fazla 36 ay</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">Teminat</p>
            <p className="mt-2 text-sm text-gray-600">Kredi garanti kurumları ve finans kuruluşlarıyla iş birliği çerçevesinde</p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu destekten kimlerin yararlanabileceği, İş Geliştirme Desteği
          değerlendirme sonucuna bağlı; bu bağlantıyı bir sonraki başlıkta
          anlatıyoruz.
        </p>
      </section>

      {/* 6. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karıştırmayın: Eski Program ile Yeni Model
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Artık Uygulanmayan Terimlerle Karıştırmayın
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Eski model (2026 Ekim öncesi)
              </p>
              <p className="text-gray-700">
                Geleneksel Girişimci Destek Programı (kuruluş, performans,
                sertifika desteği) ile İleri Girişimci Destek Programı
                (ek olarak makine-teçhizat-yazılım ve mentörlük desteği);
                her ikisi de tamamen geri ödemesizdi ve başvuru için
                önce bir girişimcilik eğitimi tamamlanması gerekiyordu.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Yeni model (12 Ekim 2026&apos;dan itibaren)
              </p>
              <p className="text-gray-700">
                İş Kurma Desteği (geri ödemesiz, sürekli açık), İş
                Geliştirme Desteği (2.250.000 TL&apos;ye kadar, geri
                ödemeli, dönemsel çağrı) ve kadın/genç girişimciye özel
                Faiz/Kâr Payı Desteği.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Dikkat edilmesi gereken en kritik fark: İş Geliştirme
            Desteği&apos;nin büyük bölümü artık <strong>geri
            ödemeli</strong>. Eski İleri Girişimci Destek Programı&apos;ndaki
            makine-teçhizat desteği tamamen hibe (geri ödemesiz) idi; yeni
            modelde aynı mantıkla kullanılan 2.250.000 TL&apos;lik üst
            limit, faizsiz olsa da proje bitiminden 12 ay sonra geri
            ödenmesi gereken bir finansman. Bütçe planlamasını buna göre
            yapmak gerekiyor.
          </p>
        </div>
      </section>

      {/* 7. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kimler Başvurabilir? Ortak Şartlar
        </h2>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Her İki Ana Destekte de Geçerli Ortak Şartlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Ortaklık payı:</strong> Girişimcinin işletmedeki
              payı en az %50 olmalı ve işletmeyi tek başına temsil ve
              ilzam yetkisine sahip olmalıdır. Dijital şirket tanımına
              uyan işletmeler ile teknogirişim rozeti sahipleri bu
              şarttan muaftır.
            </li>
            <li>
              <strong>Sektör şartı:</strong> İş Kurma Desteği KOSGEB
              destek kapsamındaki tüm sektörlere açık; İş Geliştirme
              Desteği ise yalnızca imalat ve bilişim/Ar-Ge ağırlıklı beş
              NACE alanıyla sınırlı.
            </li>
            <li>
              <strong>İşletme yaşı:</strong> İş Kurma Desteği&apos;nde
              0-1 yaş, İş Geliştirme Desteği&apos;nde 0-3 yaş aralığı
              esastır; teknogirişim rozeti sahiplerinde yaş şartı
              aranmaz.
            </li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Yeni yönergede, eski programdaki &quot;Uygulamalı Girişimcilik
            Eğitimi&quot; şartına doğrudan bir atıf bulunmuyor. KOSGEB
            hâlâ kosgeb.gov.tr ve lms.kosgeb.gov.tr üzerinden ücretsiz
            çevrimiçi girişimcilik eğitimleri sunuyor; ancak bu eğitimin
            başvuru için önkoşul olup olmadığı yönerge metninde açıkça
            belirtilmiyor. Başvurudan önce bu noktayı KOSGEB&apos;in
            güncel yönergesinden veya il müdürlüğünden teyit etmenizi
            öneririz.
          </p>
        </div>
      </section>

      {/* 8. DEĞERLENDİRME */}
      <section id="degerlendirme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Değerlendirme ve Sıralama Nasıl İşliyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İş Geliştirme Desteği başvuruları, İş Kurma Desteği&apos;nin
          aksine bir puanlama ve sıralama sürecinden geçiyor:
        </p>
        <div className="space-y-6">
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">1</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Sektör Bazlı Kurul Değerlendirmesi</h3>
              <p className="text-gray-700">Başvurular, ilgili sektör kurulları tarafından incelenir ve ilk puanlama yapılır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">2</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Jüriye Davet</h3>
              <p className="text-gray-700">Ülke genelinde en yüksek puanlı ilk 1.000 proje ve her ildeki ilk 6 proje jüri önünde sunum yapmak üzere davet edilir.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">3</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Nihai Sıralama</h3>
              <p className="text-gray-700">Jüri ve kurul puanlarının ortalamasına göre ülke genelinde ilk 500 proje ve her ildeki ilk 3 proje destek almaya hak kazanır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">4</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Faiz/Kâr Payı Desteği Talebi</h3>
              <p className="text-gray-700">Desteğe hak kazanan kadın veya genç girişimciler, talep etmeleri hâlinde İş Geliştirme Faiz/Kâr Payı Desteği&apos;nden de yararlanabilir.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Yönergede gözden kaçan önemli
            bir ayrıntı şu: jüri puanı 50 ve üzeri olduğu halde ülke veya
            il sıralamasına giremeyen kadın ya da genç girişimciler, İş
            Geliştirme Desteği&apos;ni (hibe/kredi kısmını) alamasa da
            Faiz/Kâr Payı Desteği&apos;nden yararlanabiliyor. Yani
            sıralamaya giremeyen bir proje için başvuru süreci tamamen
            boşa gitmiyor; eşik puanın üzerinde kalmak, en azından
            finansman maliyeti avantajlı bir işletme sermayesi kredisi
            kapısını açık tutuyor. Başvuru formunu bu eşik puanı göz
            önünde bulundurarak hazırlamak önemli.
          </p>
        </div>
      </section>

      {/* 9. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Adım Adım Başvuru Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">e-Devlet ile Giriş</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Başvuru Formu ve Proje Belgesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Onay ve Değerlendirme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Kurul Kararı ve Ödeme</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            9.1. KOSGEB e-Hizmetler Üzerinden Giriş
          </h3>
          <p className="leading-8 text-gray-700">
            KOSGEB&apos;in resmi sitesindeki e-hizmetler bölümünden
            Girişimci Destek Programı seçilir ve e-Devlet şifresiyle
            giriş yapılır.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            9.2. Başvuru Formu, Proje Bilgi Dokümanı ve Ekler
          </h3>
          <p className="leading-8 text-gray-700">
            İş Geliştirme Desteği için sistem üzerinden proje başvurusu
            oluşturulur; Proje Başvuru Formu doldurulur, Proje Bilgi
            Dokümanı (PDF/Word) yüklenir, gerekiyorsa İşletme Değerlendirme
            Raporu (İDR) eklenir. Ayrıca en fazla 100 MB ve 10 dakika
            süreli, mp4/avi/mpeg formatında bir tanıtım videosu
            yüklenebiliyor. İş Kurma Desteği&apos;nde ise süreç yalnızca
            e-Devlet üzerindeki başvuru formunun doldurulmasından ibaret.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            9.3. Başvurunun Onaylanması
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru dönemi içinde sistem üzerinde düzeltme yapılabilir,
            ancak her değişiklik sonrasında başvurunun yeniden
            onaylanması gerekir. Son başvuru tarihinden önce
            onaylanmayan projeler değerlendirmeye alınmaz.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            9.4. Kurul/Jüri Değerlendirmesi ve Ödeme Talebi
          </h3>
          <p className="leading-8 text-gray-700">
            Onaylanan başvurular ilgili kurul (ve İş Geliştirme
            Desteği&apos;nde gerekirse jüri) tarafından değerlendirilir.
            Olumlu karar sonrası destek süresi boyunca harcamalar
            yapılır, ardından belgelerle birlikte ödeme talebinde
            bulunulur.
          </p>
        </div>
      </section>

      {/* 10. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İş Geliştirme Desteği&apos;nin artık geri ödemeli olduğunu bütçe planınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faaliyet konunuzun İş Geliştirme Desteği&apos;ndeki 5 NACE alanına girip girmediğini önceden teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ortaklık payınızın en az %50 olduğundan ve tek başınıza temsil yetkisine sahip olduğunuzdan emin olun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Başvurunuzu son tarihten önce sistemde onaylamayı unutmayın; onaylanmayan proje değerlendirmeye alınmaz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kadın veya genç girişimciyseniz jüri puanınızın 50&apos;nin üzerinde kalmasının Faiz/Kâr Payı Desteği için önemini göz önünde bulundurun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Eski &quot;Geleneksel/İleri Girişimci&quot; terimlerine dayanan güncel olmayan kaynaklara güvenmeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Girişimcilik eğitiminin başvuru için ön şart olup olmadığını başvuru öncesi KOSGEB&apos;den teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Güncel tutar, oran ve tarihleri her başvuru öncesinde KOSGEB&apos;in resmi sayfasından teyit edin
          </div>
        </div>
      </section>

      {/* 11. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı aşağıdaki birincil kaynaklara dayanmaktadır. Başvuru
          öncesinde güncel tutar ve şartları doğrudan KOSGEB&apos;in
          yönerge metninden teyit etmenizi öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <a href="https://www.kosgeb.gov.tr/site/tr/genel/detay/9499/girisimci-destek-programi-yenilendi-girisimcilere-yeni-destek-modeli" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              KOSGEB &quot;Girişimci Destek Programı Yenilendi&quot; duyurusu (12 Ekim 2026)
            </a>
          </li>
          <li>
            <a href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/1231/girisimci-destek-programi" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              KOSGEB Girişimci Destek Programı destek detay sayfası
            </a>
          </li>
          <li>
            <a href="https://www.kosgeb.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              KOSGEB resmî internet sitesi (kosgeb.gov.tr)
            </a>{" "}
            (güncel yönerge metni ve başvuru dönemleri)
          </li>
        </ul>
      </section>

      {/* 12. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Geleneksel ve İleri Girişimci Destek Programı hâlâ var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 12 Ekim 2026&apos;dan itibaren bu ayrım kaldırıldı.
              İleri Girişimci Destek Programı, KOSGEB&apos;in yürürlükten
              kaldırılan destekler listesine alındı. Program artık İş
              Kurma Desteği, İş Geliştirme Desteği ve İş Geliştirme
              Faiz/Kâr Payı Desteği olmak üzere üç ayrı mekanizmadan
              oluşuyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İş Geliştirme Desteği gerçekten geri ödemeli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Üst limiti 2.250.000 TL (özel grup girişimcilerde
              2.500.000 TL) olan bu destek, %80 oranında ve faizsiz/komisyonsuz
              şekilde geri ödemeli. Geri ödemeler, 24 aylık proje süresinin
              bitiminden 12 ay sonra başlıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026 yılı 3. dönem İş Geliştirme Desteği başvurusunu ne zamana kadar yapabilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              KOSGEB&apos;in duyurusuna göre 2026 3. dönem başvuruları
              12-31 Ekim 2026 tarihleri arasında alınıyor. Başvurunun
              son tarihten önce sistemde onaylanmış olması gerekiyor;
              onaylanmayan projeler değerlendirmeye alınmıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İş Kurma Desteği&apos;ne her zaman başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, İş Kurma Desteği başvuruları İş Geliştirme
              Desteği&apos;nin aksine dönemsel bir çağrıya bağlı değil;
              0-1 yaş aralığındaki uygun işletmeler yıl boyunca başvuru
              yapabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Faiz/Kâr Payı Desteği&apos;ne kimler başvurabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu destek kadın ve genç girişimcilere özel. İş Geliştirme
              Desteği&apos;nden faydalanmaya hak kazanan ve talep eden
              kadın/genç girişimciler ile jüri puanı 50 ve üzeri olup
              sıralamaya giremeyen kadın/genç girişimciler, en fazla
              1.000.000 TL işletme sermayesi kredisinden, finansman
              maliyetinin yarısı KOSGEB tarafından karşılanarak
              yararlanabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Daha önce Geleneksel veya İleri Girişimci Destek Programı&apos;ndan destek aldıysam yeni modele tekrar başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Yeni yönergede eski programdan yararlananlara özel bir
              geçiş hükmü ayrıntılı olarak yayımlanmadı. Genel KOSGEB
              uygulamasında bir işletmenin aynı destek türünden tekrar
              yararlanması sınırlı tutulur; durumunuzu başvuru öncesinde
              KOSGEB il müdürlüğünüzle netleştirmenizi öneririz.
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
          KOSGEB Girişimci Destek Programı&apos;nın yeniden yapılandırılması,
          hem destek tutarını büyüten hem de programın mantığını
          değiştiren köklü bir dönüşüm. İş Kurma Desteği, temel bir
          başlangıç desteği olmayı sürdürürken; İş Geliştirme Desteği artık
          çok daha büyük bir bütçeye (2,25 milyon TL&apos;ye kadar) ama geri
          ödeme yükümlülüğüne bağlı şekilde ulaşılabiliyor. Kadın ve genç
          girişimciler için eklenen Faiz/Kâr Payı Desteği ise, sıralamaya
          giremeseniz bile değerlendirmeden belirli bir puanı aldığınızda
          elinizi güçlendiren ek bir kapı açıyor. 2026 3. dönem çağrısının
          31 Ekim&apos;de kapanacağı göz önüne alındığında, uygun bir
          işletmeniz varsa başvuru belgelerinizi hazırlamaya şimdiden
          başlamanız önemli.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin kuruluşundan İş Kurma veya İş Geliştirme Desteği
          başvurunuza, destek sonrası muhasebe ve raporlama süreçlerinize
          kadar tüm süreci Koray Akdağ / Sistem Global Danışmanlık olarak
          tek elden yürütüyoruz; ayrı bir yerel mali müşavir aramanıza
          gerek kalmıyor.{" "}
          <Link href="/#contact" className="text-orange-600 underline">
            İşletmenizin hangi destekten yararlanabileceğini birlikte
            değerlendirelim.
          </Link>
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
            href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı 2026</h3>
          </Link>
          <Link
            href="/blog/tekmer-nedir-basvuru-sureci-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKMER • KOSGEB • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TEKMER Nedir? Teknoloji Geliştirme Merkezlerine Nasıl Başvurulur?</h3>
          </Link>
          <Link
            href="/blog/genc-girisimci-bag-kur-destegi-kalkti-mi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ VE SGK • GENÇ GİRİŞİMCİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Genç Girişimcilerde Bağ-Kur Prim Desteği 2026&apos;da Kalktı mı?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Geleneksel ve İleri Girişimci Destek Programı hâlâ var mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır. 12 Ekim 2026'dan itibaren bu ayrım kaldırıldı. İleri Girişimci Destek Programı, KOSGEB'in yürürlükten kaldırılan destekler listesine alındı. Program artık İş Kurma Desteği, İş Geliştirme Desteği ve İş Geliştirme Faiz/Kâr Payı Desteği olmak üzere üç ayrı mekanizmadan oluşuyor."}},{"@type":"Question","name":"İş Geliştirme Desteği gerçekten geri ödemeli mi?","acceptedAnswer":{"@type":"Answer","text":"Evet. Üst limiti 2.250.000 TL (özel grup girişimcilerde 2.500.000 TL) olan bu destek, %80 oranında ve faizsiz/komisyonsuz şekilde geri ödemeli. Geri ödemeler, 24 aylık proje süresinin bitiminden 12 ay sonra başlıyor."}},{"@type":"Question","name":"2026 yılı 3. dönem İş Geliştirme Desteği başvurusunu ne zamana kadar yapabilirim?","acceptedAnswer":{"@type":"Answer","text":"KOSGEB'in duyurusuna göre 2026 3. dönem başvuruları 12-31 Ekim 2026 tarihleri arasında alınıyor. Başvurunun son tarihten önce sistemde onaylanmış olması gerekiyor; onaylanmayan projeler değerlendirmeye alınmıyor."}},{"@type":"Question","name":"İş Kurma Desteği'ne her zaman başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Evet, İş Kurma Desteği başvuruları İş Geliştirme Desteği'nin aksine dönemsel bir çağrıya bağlı değil; 0-1 yaş aralığındaki uygun işletmeler yıl boyunca başvuru yapabiliyor."}},{"@type":"Question","name":"Faiz/Kâr Payı Desteği'ne kimler başvurabilir?","acceptedAnswer":{"@type":"Answer","text":"Bu destek kadın ve genç girişimcilere özel. İş Geliştirme Desteği'nden faydalanmaya hak kazanan ve talep eden kadın/genç girişimciler ile jüri puanı 50 ve üzeri olup sıralamaya giremeyen kadın/genç girişimciler, en fazla 1.000.000 TL işletme sermayesi kredisinden, finansman maliyetinin yarısı KOSGEB tarafından karşılanarak yararlanabiliyor."}},{"@type":"Question","name":"Daha önce Geleneksel veya İleri Girişimci Destek Programı'ndan destek aldıysam yeni modele tekrar başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Yeni yönergede eski programdan yararlananlara özel bir geçiş hükmü ayrıntılı olarak yayımlanmadı. Genel KOSGEB uygulamasında bir işletmenin aynı destek türünden tekrar yararlanması sınırlı tutulur; durumunuzu başvuru öncesinde KOSGEB il müdürlüğünüzle netleştirmenizi öneririz."}}]}) }}
      />
    </BlogLayout>
  );
}
