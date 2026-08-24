import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "KOSGEB Kapasite Geliştirme Destek Programı 2026 | 3. Dönem Başvuruları Açık | Koray Akdağ",
  description:
    "KOSGEB Kapasite Geliştirme Destek Programı 3. dönem başvuruları 22 Ağustos - 15 Eylül 2026 arasında açık: kimler başvurabilir, 30 milyon TL'ye kadar kredi limiti, 20 puan faiz/kâr payı desteği, desteklenen giderler, başvuru şartları ve süreci.",
  keywords: [
    "KOSGEB Kapasite Geliştirme Destek Programı",
    "KOSGEB destekleri 2026",
    "KOSGEB 3. dönem başvurusu",
    "KOSGEB kredi faiz desteği",
    "KOBİ destekleri 2026",
    "KOSGEB başvuru şartları",
    "KOSGEB kredi limiti",
    "üreten KOBİ desteği",
    "KOSGEB Bilgi Sistemi başvuru",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Kapasite Geliştirme Destek Programı 2026: Kimler Başvurabilir, Destek Tutarları Nedir?"
      description="3. dönem başvuruları 22 Ağustos - 15 Eylül 2026 arasında açık: üretim kapasitesini artırmak isteyen KOBİ'ler için 30 milyon TL'ye kadar kredi limiti ve 20 puana varan geri ödemesiz faiz/kâr payı desteği sunan programın şartları, desteklenen giderler, başvuru süreci ve güncel takvimi."
      category="KOSGEB • DEVLET DESTEKLERİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kosgeb-kapasite-gelistirme-destek-programi-2026"
    >
        <div className="mb-10 rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
          <p className="text-lg font-semibold text-green-800">
            🟢 Güncelleme (24 Ağustos 2026): Programın 2026 yılı 3. başvuru
            dönemi 22 Ağustos 2026&apos;da başladı, son başvuru tarihi 15 Eylül
            2026. Genel kredi üst limiti bu dönem için 30 milyon TL&apos;ye
            yükseltildi. Aşağıdaki 5. bölümde güncel takvimi ve tutarları
            bulabilirsiniz.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            KOSGEB&apos;in 2025 yılında hayata geçirdiği Kapasite Geliştirme
            Destek Programı, üretim kapasitesini büyütmek, dijital dönüşümünü
            hızlandırmak ve büyük işletmelerin tedarik zincirinde güçlü bir yer
            edinmek isteyen KOBİ&apos;ler için 2026 itibarıyla en kapsamlı
            finansman araçlarından biri hâline geldi. Programın mekanizması
            klasik hibe desteklerinden farklı işlediği için birçok işletme
            sahibi kredi limitini, faiz desteğinin nasıl hesaplandığını ve
            başvuru takvimini doğru bilmiyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Program nasıl çalışıyor, hibe mi kredi mi?</li>
            <li>✔ Kimler başvurabilir, hangi sektörler kapsam dışı?</li>
            <li>✔ Kredi ve faiz/kâr payı desteği üst limitleri</li>
            <li>✔ Desteklenen gider kalemleri</li>
            <li>✔ 2026 başvuru dönemleri ve takvim</li>
            <li>✔ Adım adım başvuru süreci</li>
            <li>✔ Dikkat edilmesi gereken kritik noktalar</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Program Nedir, Neden Önemli?
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Kimler Başvurabilir?
            </Link>
            <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Kredi ve Destek Tutarları
            </Link>
            <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Desteklenen Gider Kalemleri
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. 2026 Başvuru Dönemleri
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Adım Adım Başvuru Süreci
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. BÖLÜM */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Program Nedir, Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Kapasite Geliştirme Destek Programı, KOSGEB&apos;in üretim yapan ve
            belirli hizmet sektörlerinde faaliyet gösteren KOBİ&apos;lerin
            verimliliğini, üretim kapasitesini, dayanıklılığını ve kurumsal
            yapısını güçlendirmek amacıyla yürüttüğü bir finansman
            programıdır. Program, doğrudan hibe modelinden farklı olarak
            <strong> kredi + faiz/kâr payı desteği</strong> mantığıyla çalışır:
            işletme, KOSGEB ile protokol imzalamış bir banka veya finans
            kuruluşundan kredi kullanır, taksitlerini öderken kredi
            faizinin/kâr payının belirli bir puanlık kısmını KOSGEB geri
            ödemesiz olarak işletmeye öder.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Programın Öne Çıkan Amaçları
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ KOBİ&apos;lerin ölçek büyütme yatırımlarını finanse etmek</li>
              <li>✔ Makine-teçhizat ve dijital dönüşüm yatırımlarını hızlandırmak</li>
              <li>✔ Büyük işletmelerin tedarik zincirindeki KOBİ&apos;leri güçlendirmek</li>
              <li>✔ Nitelikli personel istihdamını ve kurumsallaşmayı desteklemek</li>
              <li>✔ İşletme sermayesi ihtiyacına düşük maliyetli finansman sağlamak</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            KOSGEB&apos;in kendi açıklamalarına göre, 2025 yılında uygulamaya
            konulan program kapsamında bugüne kadar binlerce KOBİ&apos;ye
            milyarlarca TL tutarında finansmana erişim imkânı sağlanmış
            olması, programın klasik KOSGEB hibelerine kıyasla çok daha
            yüksek bütçeli yatırım ihtiyaçlarına da cevap verdiğini
            göstermektedir.
          </p>
        </section>

        {/* 2. KİMLER BAŞVURABİLİR */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Başvurabilir, Kimler Başvuramaz?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programa başvuru şartları hem işletmenin ölçeğine hem de faaliyet
            gösterdiği sektöre göre belirlenmiştir. Başvuru öncesi aşağıdaki
            kriterlerin tamamının sağlanması gerekir.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Başvuru Şartları
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Limited veya Anonim Şirket statüsünde olmak</li>
                <li>✔ KOBİ Bilgi Sistemi&apos;ne kayıtlı ve İşletme Beyanı güncel olmak</li>
                <li>✔ Küçük veya orta ölçekli işletme sınıfında olmak</li>
                <li>✔ En az 10 çalışan (3.600 prim gün) istihdam etmiş olmak</li>
                <li>✔ Son 3 yılda istihdam veya net satışlarda ortalama büyüme göstermiş olmak</li>
                <li>✔ İlgili NACE kodlarında faaliyet göstermek</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Başvuramayacak Yapılar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Mikro ölçekli işletmeler</li>
                <li>❌ Şahıs firmaları / şahıs işletmeleri</li>
                <li>❌ Kapsam dışı NACE kodlarında faaliyet gösterenler</li>
                <li>❌ Programdan daha önce bir kez yararlanmış işletmeler</li>
                <li>❌ Dernek, vakıf gibi tüzel kişiler</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🏭 Hangi Sektörler Kapsamda?
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              Program, ağırlıklı olarak imalat sanayii ile teknoloji ve
              bilişim odaklı hizmet sektörlerini hedefler. Kapsamdaki temel
              NACE bölümleri şunlardır:
            </p>
            <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6">
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li><strong>Kısım C</strong> – İmalat</li>
                <li><strong>61</strong> – Telekomünikasyon</li>
                <li><strong>62</strong> – Bilgisayar Programlama ve İlgili Faaliyetler</li>
                <li><strong>63</strong> – Bilgi Hizmet Faaliyetleri</li>
                <li><strong>72</strong> – Bilimsel Araştırma ve Geliştirme Faaliyetleri</li>
              </ul>
            </div>
            <p className="mt-6 leading-8 text-gray-700">
              İşletmenin ölçek sınıfı ve sektör uygunluğu, başvuru formunun
              işletme tarafından ilk onaylandığı tarihteki KOBİ Bilgi Sistemi
              kayıtlarına göre belirlenir; onay tarihinden sonra oluşan sınıf
              değişiklikleri değerlendirmeye alınmaz.
            </p>
          </div>
        </section>

        {/* 3. TUTARLAR */}
        <section id="tutarlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Kredi ve Destek Tutarları Ne Kadar?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programın finansman mantığı; işletmenin protokollü bir banka veya
            finans kuruluşundan kredi kullanması, KOSGEB&apos;in ise bu
            kredinin faiz veya kâr payı giderinin belirli bir puanlık kısmını
            geri ödemesiz olarak işletmeye ödemesi üzerine kuruludur. Yani
            kredinin anaparası işletme tarafından geri ödenirken, faiz
            yükünün önemli bir kısmı devlet tarafından karşılanır.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kalem</th>
                  <th className="p-5">Tutar / Oran</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti (genel – 2026/3. dönem)</td>
                  <td className="p-5">30.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti (savunma, havacılık, uzay tedarikçileri)</td>
                  <td className="p-5">30.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti (teknogirişim rozetli / hızlı büyüyen işletmeler)</td>
                  <td className="p-5">20.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Alt Limiti</td>
                  <td className="p-5">1.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Faiz / Kâr Payı Destek Puanı</td>
                  <td className="p-5">20 puana kadar (geri ödemesiz)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Azami Faiz/Kâr Payı Desteği</td>
                  <td className="p-5">7.000.000 TL&apos;ye kadar</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Azami Kredi Vadesi</td>
                  <td className="p-5">36 ay</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Azami Proje Süresi</td>
                  <td className="p-5">24 ay</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6">
            <p className="text-gray-700">
              ⚠️ Genel kredi üst limitinin 30 milyon TL&apos;ye yükseltilmesi
              2026 yılı 3. başvuru dönemi itibarıyla kamuoyuna yansıyan güncel
              bir gelişmedir. KOSGEB&apos;in resmî Başvuru Kılavuzu&apos;nun
              her dönem yeniden yayımlanabildiği dikkate alınarak, başvuru
              anında güncel tutarı KOBİ Bilgi Sistemi üzerindeki ilgili dönem
              duyurusundan teyit etmeniz önerilir.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Faiz Desteği Nasıl Ödeniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Destek, tek seferde peşin ödenmez. İşletme krediyi kullanır,
              taksit ödemelerini gerçekleştirdikçe ve şartları sağladığı
              sürece KOSGEB, ilgili taksite denk gelen faiz/kâr payı desteği
              tutarını işletmenin hesabına geri ödemesiz olarak aktarır.
              Destek tutarı, KOSGEB&apos;in yayımladığı Destek Hesaplama
              Tablosu&apos;na göre; onaylanan gider tutarı, destek puanı ve
              kredi vadesi birlikte değerlendirilerek belirlenir.
            </p>
          </div>
        </section>

        {/* 4. GİDERLER */}
        <section id="giderler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Desteklenen Gider Kalemleri
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Kurul tarafından onaylanan proje kapsamında kullandırılan kredi;
            hem yatırım hem de işletme sermayesi ihtiyaçlarını
            kapsayabilmektedir.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                ⚙️ Yatırım Giderleri
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Makine-teçhizat ve kalıp alımları</li>
                <li>Dijital dönüşüme yönelik yazılım giderleri</li>
                <li>Üretim kapasitesini artırıcı ekipman yatırımları</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🧾 Hizmet Alım Giderleri
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Eğitim, danışmanlık ve yönderlik hizmetleri</li>
                <li>Belgelendirme, test ve analiz hizmetleri</li>
                <li>Pazarlama ve tasarım hizmetleri</li>
                <li>Sınai mülkiyet hakları (patent, marka vb.)</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                👥 Personel ve Kurumsallaşma
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Nitelikli personel istihdamına yönelik giderler</li>
                <li>Kurumsal yapıyı güçlendirici danışmanlık kalemleri</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                💰 İşletme Sermayesi
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Projenin amacı ve kapsamına uygun işletme sermayesi ihtiyacı</li>
                <li>Kullandırım tutarına Kurul, proje niteliğine göre karar verir</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. TAKVİM */}
        <section id="takvim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. 2026 Başvuru Dönemleri ve Güncel Durum
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Program, yıl içinde belirli başvuru dönemlerinde açılıp
            kapanmaktadır. 2026 yılı için KOSGEB tarafından ilan edilen
            dönemler şu şekildedir:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">1. Dönem</h3>
              <p className="text-gray-700">3 Şubat 2026 – 28 Şubat 2026</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">2. Dönem</h3>
              <p className="text-gray-700">6 Haziran 2026 – 30 Haziran 2026</p>
            </div>
            <div className="rounded-xl border-2 border-green-500 bg-green-50 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-green-700">3. Dönem (Başvuru Açık)</h3>
              <p className="font-semibold text-gray-800">22 Ağustos 2026 – 15 Eylül 2026</p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 Ağustos 2026 İtibarıyla Durum: Başvurular Açık
            </h3>
            <p className="leading-8 text-gray-700">
              Program 2026 yılında üçüncü kez başvuruya açıldı: 3. dönem
              başvuruları 22 Ağustos 2026&apos;da başladı ve son başvuru
              tarihi 15 Eylül 2026 olarak ilan edildi. Bu dönemde genel kredi
              üst limitinin 30 milyon TL&apos;ye yükseltildiği, savunma,
              havacılık ve uzay tedarikçisi geliştirme projelerinde de aynı
              şekilde 30 milyon TL&apos;lik üst limitin korunduğu, teknogirişim
              rozeti bulunan veya hızlı büyüyen işletme tanımına giren
              projelerde ise 20 milyon TL&apos;lik limitin uygulandığı
              bildiriliyor. Son başvuru tarihine yalnızca birkaç hafta kaldığı
              için proje dosyanızı, mali tablolarınızı ve teklif almanız
              gereken banka görüşmelerini hızlı ilerletmeniz kritik önemde.
              Güncel duyurular ve kesin tutarlar KOSGEB&apos;in resmî internet
              sitesi ve KOBİ Bilgi Sistemi üzerinden yayımlanmaktadır.
            </p>
          </div>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Adım Adım Başvuru Süreci
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Başvuru süreci tamamen elektronik ortamda, KOBİ Bilgi Sistemi
            üzerinden yürütülür.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🖥️</div>
              <h3 className="text-xl font-bold">1. KOBİ Bilgi Sistemi Kaydı</h3>
              <p className="mt-3 text-sm text-gray-600">
                İşletme Beyanı&apos;nın güncel ve doğru olduğu teyit edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">2. Proje Başvuru Formu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yatırım/işletme sermayesi ihtiyacı ve gider kalemleri detaylandırılır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📎</div>
              <h3 className="text-xl font-bold">3. Belgelerin Yüklenmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Formun eklerinde istenen belgeler sisteme yüklenip başvuru onaylanır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">4. Kurul Değerlendirmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Uygun bulunan projeler için destek üst limiti ve puanı belirlenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏦</div>
              <h3 className="text-xl font-bold">5. Banka ile Kredi Kullandırımı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onaylanan tutar, protokollü finans kuruluşu üzerinden krediye dönüştürülür.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💸</div>
              <h3 className="text-xl font-bold">6. Taksit Ödemesi ve Destek</h3>
              <p className="mt-3 text-sm text-gray-600">
                Taksitler ödendikçe faiz/kâr payı desteği işletmeye aktarılır.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ Başvuru Onayında Kritik Detay
            </h3>
            <p className="leading-8 text-gray-700">
              İlan edilen son başvuru tarihine kadar projesini KOBİ Bilgi
              Sistemi üzerinden onaylamayan işletmelerin başvurusu
              değerlendirmeye alınmaz. Bu nedenle formun eksiksiz
              doldurulması kadar, son güne bırakılmadan sistem üzerinden
              onaylanması da başvurunun geçerliliği açısından belirleyicidir.
            </p>
          </div>
        </section>

        {/* 7. DİKKAT EDİLECEKLER */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Bir işletme bu destek programından yalnızca <strong>bir kez</strong> yararlanabilir.</li>
              <li>Destek, hibe değil <strong>kredi + faiz/kâr payı desteği</strong> modelidir; kredinin anaparası işletme tarafından geri ödenir.</li>
              <li>İşletme sınıfı (küçük/orta) ve sektör uygunluğu, başvurunun ilk onaylandığı tarihteki kayıtlara göre sabitlenir.</li>
              <li>Kredi kullandırımı, KOSGEB ile protokol imzalamış banka/finans kuruluşlarının kendi kredi değerlendirme süreçlerine de tabidir.</li>
              <li>Onaylanmayan veya proje kapsamı dışında kalan harcamalar için faiz/kâr payı desteği ödenmez.</li>
              <li>Güncel destek üst limitleri, puanları ve gider kalemleri için KOSGEB&apos;in yürürlükteki Uygulama Esasları ve Başvuru Kılavuzu esas alınmalıdır; bu tür programlarda üst limitler yıl içinde güncellenebilir.</li>
            </ul>
          </div>
        </section>

        {/* 8. SSS */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Şu anda başvuru dönemi açık mı?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet. 2026 yılı 3. başvuru dönemi 22 Ağustos 2026&apos;da
                başladı ve 15 Eylül 2026&apos;da sona erecek. Bu tarihten
                sonra başvuru yapabilmek için KOSGEB&apos;in yeni bir dönem
                ilan etmesi gerekir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Program hibe mi, kredi mi?
              </h3>
              <p className="leading-8 text-gray-700">
                İkisinin karışımı gibi çalışır. İşletme bankadan kredi
                kullanır ve anaparayı geri öder; KOSGEB ise kredinin
                faiz/kâr payı giderinin 20 puana kadar olan kısmını geri
                ödemesiz olarak işletmeye öder.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Şahıs şirketleri başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Programa yalnızca limited veya anonim şirket
                statüsündeki işletmeler başvurabilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Yeni kurulan bir KOBİ başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Program, en az 10 çalışan istihdam eden ve son 3 yılda
                istihdam veya net satışlarda büyüme göstermiş işletmeleri
                hedeflediğinden, henüz bu geçmişe sahip olmayan çok yeni
                kurulmuş işletmeler için uygun olmayabilir. Bu tür işletmeler
                KOSGEB&apos;in girişimcilik odaklı diğer destek programlarını
                değerlendirmelidir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Kredi hangi bankadan kullanılıyor?
              </h3>
              <p className="leading-8 text-gray-700">
                KOSGEB&apos;in protokol imzaladığı banka ve finans
                kuruluşlarından kullanılır. Kredi başvurusu, ilgili bankanın
                kendi kredi değerlendirme kriterlerine de tabidir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Danışmanlık desteği almak zorunlu mu?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır, zorunlu değildir. Ancak proje başvuru formunun doğru
                kurgulanması, gider kalemlerinin uygun şekilde
                sınıflandırılması ve Kurul sürecinin doğru yönetilmesi
                onay ihtimalini ve alınacak destek tutarını doğrudan
                etkilemektedir.
              </p>
            </div>
          </div>
        </section>

        {/* 9. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            KOSGEB Kapasite Geliştirme Destek Programı, üretim yapan ve
            teknoloji odaklı hizmet sektörlerinde faaliyet gösteren
            KOBİ&apos;ler için 30 milyon TL&apos;ye kadar kredi limiti ve
            20 puana varan geri ödemesiz faiz desteğiyle klasik KOSGEB
            hibelerinin çok üzerinde bir finansman hacmi sunuyor. 2026
            yılının 3. dönemi 15 Eylül 2026&apos;da kapanacağı için
            başvurusunu değerlendiren işletmelerin vakit kaybetmeden harekete
            geçmesi gerekiyor. Programın kredi temelli yapısı, banka
            süreçleri ve KOBİ Bilgi Sistemi üzerindeki başvuru detayları
            doğru yönetilmediğinde zaman kaybına ve reddedilen başvurulara
            yol açabiliyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin bu programdan ve diğer güncel devlet destek/teşvik
            programlarından hangileriyle örtüştüğünü belirlemek, proje
            başvuru dosyanızı KOSGEB kriterlerine uygun şekilde hazırlamak ve
            başvuru sürecini uçtan uca yönetmek için Koray Akdağ / Sistem
            Global Danışmanlık olarak yanınızdayız. Ayrı bir danışmanlık
            firması aramanıza gerek kalmadan, hem destek başvuru sürecinizi
            hem de sonrasındaki raporlama yükümlülüklerinizi tek noktadan
            yürütebiliriz.
          </p>
        </section>
    </BlogLayout>
  );
}
