import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "İstihdamı Koruma Destek Programı 2026 | Yeni Esaslar, 15 Puan Destek, Örnek Hesaplamalar | Koray Akdağ",
  description:
    "İstihdamı Koruma Destek Programı'nda 28 Ağustos 2026'da yayımlanan yönetmelik değişikliğiyle gelen yeni esaslar: çalışan başına 3.500 TL destek, 15 puana kadar kredi desteği, yatırım teşvik belgeli işletmeler için özel kredi limiti formülü, çevrimiçi başvuru portalı ve gerçekçi şirket örnekleriyle hesaplama.",
  keywords: [
    "İstihdamı Koruma Destek Programı",
    "İstihdamı Koruma Destek Programı yeni esaslar",
    "KOSGEB istihdam desteği 2026",
    "imalat sanayi istihdam desteği",
    "KOSGEB 3500 TL personel desteği",
    "istihdamı koruma kredi limiti hesaplama",
    "KOBİ istihdam koruma programı",
    "yatırım teşvik belgesi istihdam koruma",
    "KOSGEB prim gün desteği",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İstihdamı Koruma Destek Programı 2026: Yeni Esaslar, Destek Tutarları ve Örnek Hesaplamalar"
      description="28 Ağustos 2026'da yayımlanan yönetmelik değişikliğiyle güncellenen İstihdamı Koruma Destek Programı: çalışan başına 3.500 TL destek, 15 puana kadar kredi desteği, yatırım teşvik belgeli işletmeler için kredi limiti formülü ve gerçekçi şirket örnekleriyle hesaplama."
      category="KOSGEB • İSTİHDAM DESTEĞİ • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="istihdami-koruma-destek-programi-2026"
      coverImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            03 Mart 2026 tarihli ve 33185 sayılı Resmî Gazete&apos;de
            yayımlanan Uygulama Yönetmeliği ile yürürlüğe giren
            İstihdamı Koruma Destek Programı, imalat sanayinde faaliyet
            gösteren işletmelerin istihdamını korumaları karşılığında
            geri ödemesiz destek ve uygun koşullu kredi imkânı sunan,
            Sanayi ve Teknoloji Bakanlığı, Çalışma ve Sosyal Güvenlik
            Bakanlığı, KOSGEB ve İŞKUR&apos;un birlikte yürüttüğü yeni
            nesil bir destek mekanizmasıdır. <strong>28 Ağustos
            2026&apos;da Resmî Gazete&apos;de yayımlanan Uygulama
            Yönetmeliği değişikliğiyle</strong> programın kredi limiti
            hesaplama yöntemi, destek puanı, koruma dönemi kuralları ve
            başvuru mekanizması yeniden düzenlendi; program süresi de
            2028&apos;e kadar uzatıldı. Bu rehberi hem eski hem yeni
            esasları birlikte, gerçekçi şirket örnekleriyle
            güncelledik.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ 28 Ağustos 2026&apos;da neler değişti?</li>
            <li>✔ Kimler başvurabilir, hangi şart aranıyor?</li>
            <li>✔ Performans desteği ve kredi desteği farkı</li>
            <li>✔ Kredi limiti nasıl hesaplanıyor? (formüllü örnekler)</li>
            <li>✔ Hangi sektörler 3.500 TL&apos;lik desteği alıyor?</li>
            <li>✔ Yeni başvuru süreci ve Ağustos 2026 itibarıyla durum</li>
            <li>✔ Şirketlerden gerçekçi örnek hesaplamalar</li>
            <li>✔ Dikkat edilmesi gereken kritik noktalar</li>
          </ul>
        </div>

        {/* KISACA / TEK CÜMLE ÖZET */}
        <div className="mt-10 rounded-2xl border-2 border-[#071A2F] bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🎯 Kısaca: Program Ne Yapıyor?
          </h2>
          <p className="text-xl leading-9 text-gray-800">
            <strong>2025 yılı Kasım ve Aralık aylarına ait ortalama SGK
            prim gün sayısını 2026 yılında koruyan imalat sanayi
            işletmelerine</strong>, sektörüne göre ya çalışan başına
            aylık 3.500 TL geri ödemesiz <strong>performans desteği</strong>
            ya da kredi faizinin bir kısmını karşılayan
            <strong> finansman desteği</strong> sağlanır. Yani şirket yeni
            personel almak zorunda değil; 2025 Kasım-Aralık
            döneminde çalıştırdığı kişi sayısını (prim günü olarak)
            2026&apos;da düşürmeden sürdürmesi yeterli. Tek istisna:
            yatırım teşvik belgeli büyük ölçekli işletmeler — onlar
            için ayrı ve gerçekten &quot;yeni istihdam&quot; gerektiren
            bir kural var (Bölüm 2&apos;de detaylandırılmıştır).
          </p>
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
              3. Destek Türleri, Tutarları ve Kredi Limiti Formülü
            </Link>
            <Link href="#ornekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Şirketlerden Gerçekçi Örnek Hesaplamalar
            </Link>
            <Link href="#sektorler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Hangi Sektörler Hangi Destekten Yararlanıyor?
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Başvuru Süreci ve Ağustos 2026 İtibarıyla Durum
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Adım Adım Süreç ve Ödeme Mekanizması
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              10. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. BÖLÜM */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Program Nedir, Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            İstihdamı Koruma Destek Programı, imalat sanayinde üretim
            sürekliliğini korumak, işverenlerin personel maliyetlerini
            hafifletmek ve işletmelerin finansmana erişimini
            kolaylaştırmak amacıyla 2026 yılında hayata geçirilen yeni
            bir destek mekanizmasıdır. Program, tek bir kurumun değil;
            Sanayi ve Teknoloji Bakanlığı, Çalışma ve Sosyal Güvenlik
            Bakanlığı, KOSGEB ve İŞKUR&apos;un ortaklaşa yürüttüğü geniş
            kapsamlı bir yapıya sahiptir. KOBİ ölçeğindeki işletmeler
            başvurularını KOSGEB üzerinden yaparken, büyük ölçekli
            işletmeler doğrudan Sanayi ve Teknoloji Bakanlığı&apos;na
            başvuruda bulunmaktadır.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Programın Öne Çıkan Amaçları
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ İmalat sanayinde mevcut istihdam seviyesinin korunması</li>
              <li>✔ Özellikle emek yoğun sektörlerde işten çıkarmaların önüne geçilmesi</li>
              <li>✔ Üretim sürekliliğinin ve tedarik zincirinin güçlendirilmesi</li>
              <li>✔ İşletmelerin uygun koşullu krediyle finansmana erişiminin kolaylaştırılması</li>
              <li>✔ Rekabet gücü zayıflayan alt sektörlere hedefli destek sağlanması</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Program iki ayrı destek unsurunu bir arada barındırıyor:
            belirli emek yoğun sektörlerde çalışan başına doğrudan
            ödenen <strong>geri ödemesiz performans desteği</strong> ve
            imalat sanayinin geri kalanına yönelik <strong>kredi
            faiz/kâr payı desteği</strong>. 2026 yılı için ayrılan
            finansmana erişim imkânının 100 milyar TL seviyesinde
            olduğu açıklanmış olması, programın klasik KOSGEB
            hibelerine kıyasla çok daha büyük bir bütçeyle
            tasarlandığını göstermektedir.
          </p>
          <div className="mt-10 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🆕 28 Ağustos 2026&apos;da Ne Değişti?
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Resmî Gazete&apos;de yayımlanan Uygulama Yönetmeliği
              değişikliğiyle program, 4447 sayılı İşsizlik Sigortası
              Kanunu&apos;nun geçici 35. maddesine dayandırılarak
              <strong> 2028&apos;e kadar</strong> uzatıldı. Başlıca
              değişiklikler:
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-emerald-600">
              <li>Kredi desteğinde destek puanı üst sınırı <strong>10 puandan 15 puana</strong> çıkarıldı.</li>
              <li>Genel imalat KOBİ&apos;leri için kredi limiti artık net bir <strong>formülle</strong> hesaplanıyor.</li>
              <li>Yatırım teşvik belgeli büyük ölçekli işletmeler için ayrı bir <strong>kredi limiti formülü</strong> getirildi.</li>
              <li>İstihdam koruma dönemi en az <strong>6 ay</strong> olacak şekilde netleştirildi; iki farklı hesaplama yöntemi tanımlandı.</li>
              <li>Başvurular, ÇSGB ve KOSGEB&apos;in ortak yöneteceği yeni bir <strong>çevrimiçi portal</strong> üzerinden alınacak.</li>
              <li>Destek ödemeleri SGK hesabına veya <strong>Go Dijital Cüzdan</strong>&apos;a aktarılabilecek.</li>
            </ul>
          </div>
        </section>

        {/* 2. KİMLER BAŞVURABİLİR */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Başvurabilir, Kimler Başvuramaz?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programdan yararlanmak isteyen işletmelerin hem sektörel hem
            de istihdam ile ilgili belirli koşulları sağlaması
            gerekiyor. Başvuru öncesinde aşağıdaki kriterlerin
            tamamının karşılandığından emin olunmalıdır.
          </p>
          <div className="mb-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ❓ Mevcut Personel mi, Yeni İşe Alım mı? En Çok Karıştırılan Nokta
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Programın adı (&quot;istihdamı <strong>koruma</strong>&quot;)
              zaten cevabı veriyor: KOBİ&apos;ler ve genel imalat
              işletmeleri için bu program <strong>yeni personel almayı
              değil, mevcut personeli işten çıkarmamayı</strong>
              destekliyor. Somut bir kişi sayısı şartı yok; ölçüt tamamen
              göreceli — kendi geçmiş ortalamanıza göre.
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
              <li><strong>KOBİ / genel imalat işletmesi iseniz:</strong> 2025 yılı Kasım-Aralık dönemindeki ortalama aylık prim gün sayınızı, koruma dönemi boyunca (en az 6 ay) koruyor veya aşıyor olmanız yeterli. 40 çalışanla başladıysanız 41. kişiyi işe almanız gerekmiyor; 40 kişiyi (veya eşdeğer prim gününü) korumanız yeterli.</li>
              <li><strong>Yatırım teşvik belgeli büyük ölçekli işletme iseniz:</strong> Durum farklı. Bu işletmelerin, bu programdan bağımsız olarak zaten teşvik belgelerinde taahhüt ettikleri bir &quot;ilave istihdam&quot; (yeni yaratılacak iş) sayısı var. Destek/kredi almak için, tamamlama vizesini takip eden 6 aylık dönemde toplam SGK prim gün bildiriminin, <strong>taahhüt edilen ilave istihdamın yarısı × 180 gün</strong> eşiğine ulaşması gerekiyor — yani burada gerçekten yeni personel alıp sürdürmeleri gerekiyor (detaylı hesaplama için Bölüm 4, Örnek 3&apos;e bakınız).</li>
            </ul>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Başvuru Şartları
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ İmalat sanayi sektöründe faaliyet göstermek</li>
                <li>✔ KOBİ statüsünde ise KOBİ Bilgi Sistemi kaydının ve beyannamesinin güncel olması</li>
                <li>✔ 2025 yılı Kasım-Aralık dönemine ait ortalama aylık prim gün sayısını 2026&apos;da koruyor veya artırıyor olmak (yönetmelik bu referans dönemini ileride Bakanlık kararıyla güncelleyebilir)</li>
                <li>✔ İstihdam koruma döneminin en az 6 ay olması</li>
                <li>✔ Referans dönemde (2025 Kasım-Aralık) ortalama prim gün sayısının sıfırdan büyük olması (sigortalı çalıştırmayan işyerleri kapsam dışıdır)</li>
                <li>✔ KOSGEB&apos;e vadesi geçmiş herhangi bir borcunun bulunmaması (veya yapılandırılmış olması)</li>
                <li>✔ Programın öngördüğü taahhütname ve başvuru formunun eksiksiz sunulması</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Başvuramayacak / Dikkat Edilmesi Gereken Durumlar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ İmalat sanayi dışında faaliyet gösteren işletmeler</li>
                <li>❌ 2025 Kasım-Aralık döneminde ortalama prim gün sayısı sıfır olan veya sigortalı çalıştırmadığı için beyanname vermeyen işyerleri</li>
                <li>❌ 2025 Kasım-Aralık ortalamasını koruma dönemi boyunca sağlayamayan işletmeler</li>
                <li>❌ KOBİ Bilgi Sistemi kaydı veya beyannamesi güncel olmayan KOBİ&apos;ler</li>
                <li>❌ Yapılandırılmamış, vadesi geçmiş KOSGEB borcu bulunan işletmeler</li>
                <li>❌ Büyük ölçekli işletmeler için KOSGEB yerine Sanayi ve Teknoloji Bakanlığı kanalı geçerlidir</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              📐 İstihdam Korunmuş Sayılma Yöntemleri
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              28 Ağustos 2026 değişikliğiyle bir işyerinin istihdamı
              koruduğu, aşağıdaki iki yöntemden biriyle tespit
              edilebiliyor (her iki yöntemde de kıyaslama noktası,
              2025 Kasım-Aralık ortalama prim gün sayısıdır):
            </p>
            <ol className="ml-6 list-decimal space-y-3 text-gray-700 marker:font-bold marker:text-blue-600">
              <li>Ödeme talep edilen ayın prim gün sayısının, 2025 Kasım-Aralık ortalamasına eşit veya fazla olması</li>
              <li>Koruma dönemi başından ödeme talep edilen aya kadarki ortalamanın, 2025 Kasım-Aralık ortalamasına eşit veya fazla olması</li>
            </ol>
            <p className="mt-4 leading-8 text-gray-700">
              Prim gün hesaplamasında küsuratlar dikkate alınmıyor; 30
              günden az prim günü olan aylarda destek tutarı orantılı
              olarak hesaplanıyor (bkz. Bölüm 3).
            </p>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🏭 İşletme Ölçeğine Göre Başvuru Kanalı
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Program, işletme büyüklüğüne göre iki ayrı başvuru
              kanalına sahiptir:
            </p>
            <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6">
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li><strong>KOBİ ölçeğindeki işletmeler</strong> — başvurularını KOSGEB üzerinden yapar.</li>
                <li><strong>Büyük ölçekli işletmeler</strong> — başvurularını doğrudan Sanayi ve Teknoloji Bakanlığı&apos;na yapar.</li>
              </ul>
            </div>
            <p className="mt-6 leading-8 text-gray-700">
              İşletmenin KOBİ ya da büyük ölçekli sınıfında
              değerlendirilmesi, güncel KOBİ Bilgi Sistemi kayıtları
              esas alınarak belirlenir. Bu nedenle başvuru öncesinde
              işletme beyannamesinin güncel olduğundan emin olunması
              kritik önem taşır.
            </p>
          </div>
        </section>

        {/* 3. TUTARLAR */}
        <section id="tutarlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Destek Türleri ve Tutarları
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programın kalbinde iki farklı destek unsuru yer alır:
            belirli emek yoğun sektörlere özgü <strong>geri ödemesiz
            performans desteği</strong> ve imalat sanayinin geri kalanına
            yönelik <strong>kredi + faiz/kâr payı desteği</strong>
            modeli. Hangi işletmenin hangi destekten yararlanacağı,
            faaliyet gösterdiği NACE koduna göre otomatik olarak
            belirlenir.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kalem</th>
                  <th className="p-5">Performans Desteği</th>
                  <th className="p-5">Finansman Desteği</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kapsam</td>
                  <td className="p-5">Tekstil, giyim, deri, mobilya, düğme/fermuar imalatı</td>
                  <td className="p-5">Diğer tüm imalat sanayi KOBİ&apos;leri</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Destek Türü</td>
                  <td className="p-5">Geri ödemesiz nakdi destek</td>
                  <td className="p-5">Kredi faiz/kâr payı desteği</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Tutar / Oran</td>
                  <td className="p-5">Çalışan başına aylık 3.500 TL (30 prim günü karşılığı, eksik günde orantılı)</td>
                  <td className="p-5">15 puana kadar faiz/kâr payı desteği</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti</td>
                  <td className="p-5">—</td>
                  <td className="p-5">İşletme başına 50.000.000 TL (formülle hesaplanan tutar bu limiti aşamaz)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Vadesi</td>
                  <td className="p-5">—</td>
                  <td className="p-5">Azami 36 ay (ilk 6 ayı anapara ödemesiz)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">2026 Toplam Bütçe</td>
                  <td className="p-5" colSpan={2}>100 milyar TL finansmana erişim imkânı</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Program Süresi</td>
                  <td className="p-5" colSpan={2}>4447 sayılı Kanun geçici 35. madde kapsamında 2028&apos;e kadar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Destek Nasıl Ödeniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Performans desteğinden yararlanan işletme, her ay
              istihdamını koruduğunu SGK kayıtları üzerinden kanıtlar
              ve ödeme talep formunu doldurur; onaylanan her ay için
              çalışan başına 3.500 TL geri ödemesiz olarak işletme
              hesabına, SGK hesabına ya da Go Dijital Cüzdan&apos;a
              aktarılır ve vergi/SGK prim borçlarıyla mahsuplaştırılabilir.
              Ödeme, talebin yapıldığı ayı takip eden ayın sonuna kadar
              gerçekleştirilir. Finansman desteğinde ise işletme
              protokollü bir banka veya finans kuruluşundan kredi
              kullanır, anaparayı kendisi öderken faiz/kâr payı
              yükünün 15 puana kadar olan kısmı KOSGEB veya Bakanlık
              tarafından geri ödemesiz olarak karşılanır. Destek
              tutarının önceki uygulamada çalışan başına 2.500 TL
              olduğu, 2026 döneminde 3.500 TL&apos;ye yükseltildiği
              kaynaklarda yer almaktadır. Aynı destek unsuru için
              KOSGEB ve Bakanlık&apos;tan eş zamanlı çifte ödeme
              yapılmaz.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border border-purple-200 bg-purple-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🧮 Kredi Limiti Nasıl Hesaplanıyor?
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              28 Ağustos 2026 değişikliğiyle kredi limiti artık iki
              ayrı formülle belirleniyor:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border bg-white p-6">
                <h4 className="mb-3 text-lg font-bold text-[#071A2F]">Genel İşletmeler</h4>
                <p className="text-gray-700">
                  2025 Kasım-Aralık referans döneminizdeki aylık
                  ortalama prime esas kazanç × (koruma dönemindeki ay
                  sayısı ÷ 6). Belirli
                  teknik kriterleri karşılayan işletmelerde bu tutar
                  bir kat artırımlı uygulanabilir.
                </p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <h4 className="mb-3 text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgeli İşletmeler</h4>
                <p className="text-gray-700">
                  Teşvik belgesinde öngörülen ilave istihdam sayısı ×
                  Ocak ayı asgari ücreti × 6. Tamamlama vizesinin en
                  geç 1 Haziran 2028&apos;e kadar yapılmış olması
                  gerekir.
                </p>
              </div>
            </div>
            <p className="mt-6 leading-8 text-gray-700">
              Her iki formülle bulunan tutar da işletme başına
              50.000.000 TL üst limitini aşamaz. Aşağıdaki bölümde bu
              formülleri gerçekçi şirket örnekleriyle adım adım
              hesaplıyoruz.
            </p>
          </div>
        </section>

        {/* 4. ÖRNEK HESAPLAMALAR */}
        <section id="ornekler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Şirketlerden Gerçekçi Örnek Hesaplamalar
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Aşağıdaki örnekler, resmî yönetmelikteki formüller
            kullanılarak hazırlanmış varsayımsal şirket senaryolarıdır;
            gerçek şirket adları veya verileri değildir. Amaç, rakamları
            somutlaştırmaktır — kendi işletmeniz için kesin tutar,
            SGK kayıtlarınız ve KOSGEB/Bakanlık değerlendirmesiyle
            netleşir.
          </p>

          <div className="space-y-8">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🧵 Örnek 1 — Tekstil KOBİ&apos;si (Performans Desteği)
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                <strong>Anadolu Tekstil Ltd. Şti.</strong>, NACE 13
                kapsamında konfeksiyon üretimi yapan, 40 çalışanlı bir
                KOBİ. 2025 Kasım-Aralık referans döneminde ortalama 40
                çalışanın tamamı 30 prim günü üzerinden bildirilmiş.
              </p>
              <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6">
                <p className="text-gray-700">
                  Ağustos ayında da 40 çalışanın 30&apos;u tam ay (30
                  gün), kalan 10&apos;u ise işe giriş/çıkış nedeniyle
                  ortalama 20 gün prim ödemiş olsun:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-700 marker:text-orange-600">
                  <li>30 çalışan × 3.500 TL = <strong>105.000 TL</strong></li>
                  <li>10 çalışan × (20/30 × 3.500 TL) ≈ 10 × 2.333 TL = <strong>23.330 TL</strong></li>
                  <li>Toplam aylık destek ≈ <strong>128.330 TL</strong></li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🪑 Örnek 2 — Mobilya İmalatçısı KOBİ (Finansman Desteği Formülü)
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                <strong>Ege Mobilya San. Tic. A.Ş.</strong>, NACE 31
                kapsamında 25 çalışanlı bir mobilya üreticisi. 2025
                Kasım-Aralık referans döneminde tüm çalışanların aylık
                ortalama prime esas kazanç toplamı 750.000 TL.
                İşletme, 12 aylık bir koruma dönemi taahhüt ediyor.
              </p>
              <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6">
                <p className="text-gray-700">Kredi limiti hesaplaması:</p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-700 marker:text-orange-600">
                  <li>750.000 TL × (12 ay ÷ 6) = 750.000 TL × 2 = <strong>1.500.000 TL</strong></li>
                  <li>Teknik kriterleri karşılıyorsa bir kat artırımla ≈ <strong>3.000.000 TL</strong></li>
                  <li>Bu tutar üzerinden kullanılan kredinin faiz/kâr payının 15 puana kadarlık kısmı geri ödemesiz karşılanır</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🏭 Örnek 3 — Yatırım Teşvik Belgeli Büyük Ölçekli İşletme
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                <strong>Marmara Otomotiv Yan Sanayi A.Ş.</strong>,
                yatırım teşvik belgesinde 50 kişilik ilave istihdam
                taahhüt etmiş büyük ölçekli bir üretici. 2026 Ocak ayı
                brüt asgari ücret 33.030 TL.
              </p>
              <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6">
                <p className="text-gray-700">1) Kredi limiti hesaplaması:</p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-700 marker:text-orange-600">
                  <li>50 kişi × 33.030 TL × 6 = <strong>9.909.000 TL</strong></li>
                  <li>50.000.000 TL üst limitinin altında kaldığı için tutarın tamamı geçerli olabilir</li>
                </ul>
              </div>
              <div className="mt-4 rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
                <p className="text-gray-700">2) Desteği fiilen hak etmek için — bu, kredi limitinden ayrı bir şart:</p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-700 marker:text-red-600">
                  <li>Tamamlama vizesi en geç 1 Haziran 2028&apos;e kadar alınmalı</li>
                  <li>Vizeyi takip eden 6 aylık dönemde toplam SGK prim gün bildirimi, (50 ÷ 2) × 180 = <strong>4.500 prim günü</strong> eşiğine ulaşmalı</li>
                  <li>Yani Marmara Otomotiv, 50 kişilik taahhüdün tamamını değil, en az yarısını (25 kişi eşdeğeri) 6 ay boyunca fiilen istihdam etmiş olmalı</li>
                </ul>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Not: Asgari ücret formülde brüt mü net mi esas
                alınacağı Bakanlık tebliğiyle netleşecektir; bu örnekte
                Ocak 2026 brüt asgari ücret (33.030 TL) kullanılmıştır.
              </p>
            </div>
          </div>
        </section>

        {/* 4. SEKTÖRLER */}
        <section id="sektorler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Hangi Sektörler Hangi Destekten Yararlanıyor?
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Geri ödemesiz performans desteği, özellikle emek yoğun ve
            rekabet baskısı yüksek beş alt sektörle sınırlı
            tutulmuştur. Bu sektörler dışında kalan tüm imalat sanayi
            KOBİ&apos;leri, finansman (kredi + faiz desteği) kanalından
            yararlanabilir.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🧵 Performans Desteği Kapsamındaki NACE Kodları
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li><strong>NACE 13</strong> – Tekstil ürünlerinin imalatı</li>
                <li><strong>NACE 14</strong> – Giyim eşyalarının imalatı</li>
                <li><strong>NACE 15</strong> – Deri ve ilgili ürünlerin imalatı</li>
                <li><strong>NACE 31</strong> – Mobilya imalatı</li>
                <li><strong>NACE 32.99.02</strong> – Düğme, fermuar ve benzeri ürünlerin imalatı</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🏗️ Finansman Desteği Kapsamındaki İşletmeler
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Yukarıdaki beş sektör dışındaki tüm imalat sanayi KOBİ&apos;leri</li>
                <li>Metal, makine, kimya, gıda, plastik gibi diğer imalat alt sektörleri</li>
                <li>Uygun koşullu kredi ile faiz/kâr payı desteğinden yararlanabilir</li>
                <li>Kredi kullandırımı, protokollü bankanın kendi değerlendirme sürecine de tabidir</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. TAKVİM */}
        <section id="takvim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Başvuru Süreci ve Ağustos 2026 İtibarıyla Durum
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Program, 4447 sayılı Kanun&apos;un geçici 35. maddesi
            kapsamında 2028&apos;e kadar uygulamada kalacak şekilde
            uzatıldı. 28 Ağustos 2026 değişikliğiyle birlikte başvuru
            mekanizması da yeniden kuruluyor.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Yeni Başvuru Kanalı</h3>
              <p className="text-gray-700">ÇSGB ve KOSGEB&apos;in ortak yöneteceği çevrimiçi portal (kuruluyor)</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Yatırım Teşvikli İşletmelerde Tamamlama Vizesi</h3>
              <p className="text-gray-700">En geç 1 Haziran 2028</p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 Ağustos 2026 İtibarıyla Durum
            </h3>
            <p className="leading-8 text-gray-700">
              Bu yazının güncellendiği 28 Ağustos 2026 itibarıyla,
              programın yeni esasları Resmî Gazete&apos;de yayımlanmış
              olsa da; başvuru sırasında istenecek belge ve bilgiler
              ile çevrimiçi başvuru portalının açılış tarihi henüz
              Bakanlık ve KOSGEB tarafından ayrıca ilan edilmedi. Daha
              önce Mart-Nisan 2026 döneminde başvurmuş ve onay almış
              işletmeler, koruma dönemleri boyunca istihdamlarını
              korumaları koşuluyla ödeme talebinde bulunmaya devam
              edebiliyor. Henüz başvurmamış işletmelerin, yeni portal
              açıldığında hızlı hareket edebilmek için SGK prim gün
              verilerini, KOBİ Bilgi Sistemi kayıtlarını ve (varsa)
              yatırım teşvik belgesi/tamamlama vizesi belgelerini
              şimdiden hazırlaması önerilir. Güncel duyurular
              KOSGEB&apos;in resmî internet sitesi ve KOBİ Bilgi
              Sistemi üzerinden yayımlanmaktadır.
            </p>
          </div>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Adım Adım Süreç ve Ödeme Mekanizması
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Süreç, başvurudan ödeme talebine kadar aşağıdaki adımları
            izler.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🖥️</div>
              <h3 className="text-xl font-bold">1. Kayıt Kontrolü</h3>
              <p className="mt-3 text-sm text-gray-600">
                KOBİ Bilgi Sistemi kaydı ve beyannamesinin güncel olduğu teyit edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">2. Başvuru Formu ve Taahhütname</h3>
              <p className="mt-3 text-sm text-gray-600">
                Başvuru formu doldurulur, taahhütname onaylanır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">3. KOSGEB İncelemesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Sorumlu personel başvuruyu değerlendirip uygulama birimi onayına sunar.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📊</div>
              <h3 className="text-xl font-bold">4. 12 Aylık Uygulama Dönemi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onay sonrası 12 aylık süreç başlar, her ay istihdam korunmalıdır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📎</div>
              <h3 className="text-xl font-bold">5. Aylık Ödeme Talebi</h3>
              <p className="mt-3 text-sm text-gray-600">
                SGK prim gün kayıtları esas alınarak her ay için ödeme talep formu doldurulur.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💸</div>
              <h3 className="text-xl font-bold">6. Desteğin Aktarılması</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onaylanan destek/faiz tutarı, talebi takip eden ayın sonuna kadar SGK hesabına veya Go Dijital Cüzdan&apos;a aktarılır.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ İstihdam Korumasının Ölçüm Şekli
            </h3>
            <p className="leading-8 text-gray-700">
              Destek tutarı, işletmenin 2025 yılı Kasım-Aralık dönemine
              ait ortalama SGK prim gün sayısı esas alınarak hesaplanır;
              koruma dönemi en az 6 ay olmalıdır. Ortalamanın altına
              düşülen aylar için performans desteği veya finansman
              desteği talep edilemez; ayrıca aynı destek unsuru için
              KOSGEB ve Bakanlık&apos;tan eş zamanlı çifte ödeme
              yapılmaz.
            </p>
          </div>
        </section>

        {/* 7. DİKKAT EDİLECEKLER */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Destek, yalnızca <strong>imalat sanayinde</strong> faaliyet gösteren işletmeleri kapsar; hizmet ve ticaret sektörleri programın dışındadır.</li>
              <li>Performans desteği ile finansman desteği aynı işletmede birlikte değil, faaliyet gösterilen NACE koduna göre <strong>tek bir kanaldan</strong> uygulanır.</li>
              <li>Referans dönem ortalama prim gün sayısının altına düşen aylar için destek talep edilemez; personel planlaması koruma dönemi (en az 6 ay) boyunca dikkatle yönetilmelidir.</li>
              <li>Referans döneminde ortalama prim gün sayısı sıfır olan veya sigortalı çalıştırmadığı için beyanname vermeyen işyerleri programdan yararlanamaz.</li>
              <li>Kredi limiti formülle hesaplanır ve her durumda işletme başına 50.000.000 TL üst limitini aşamaz; yatırım teşvik belgeli işletmelerde tamamlama vizesi en geç 1 Haziran 2028&apos;e kadar alınmalıdır.</li>
              <li>Finansman desteğinde kredi anaparası işletme tarafından geri ödenir; devlet yalnızca faiz/kâr payının 15 puana kadar olan kısmını karşılar.</li>
              <li>Kredi kullandırımı, KOSGEB ile protokol imzalamış banka ve finans kuruluşlarının kendi değerlendirme kriterlerine de tabidir.</li>
              <li>Aynı destek unsuru için KOSGEB ve Bakanlık&apos;tan eş zamanlı çifte ödeme yapılmaz.</li>
              <li>Güncel destek tutarları, üst limitler ve başvuru tarihleri zaman içinde güncellenebileceğinden, başvuru öncesinde KOSGEB&apos;in yürürlükteki Uygulama Yönetmeliği ve Yönergesi esas alınmalıdır.</li>
            </ul>
          </div>
        </section>

        {/* 8. SSS */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                İstihdamı Koruma Destek Programı hibe mi, kredi mi?
              </h3>
              <p className="leading-8 text-gray-700">
                İkisini de içerir. Tekstil, giyim, deri, mobilya ve
                düğme/fermuar sektörlerinde çalışan başına aylık 3.500
                TL doğrudan geri ödemesiz destek verilir. Diğer imalat
                sanayi KOBİ&apos;lerinde ise işletme bankadan kredi
                kullanır, anaparayı öder; KOSGEB veya Bakanlık faiz/kâr
                payının 28 Ağustos 2026 itibarıyla 15 puana kadar
                yükseltilen kısmını geri ödemesiz olarak karşılar.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                30 günden az prim günüm varsa destek nasıl hesaplanır?
              </h3>
              <p className="leading-8 text-gray-700">
                Orantılı hesaplanır. Örneğin bir çalışan ayın yalnızca
                20 günü prim ödemişse, o çalışan için (20/30) × 3.500 TL
                ≈ 2.333 TL destek talep edilebilir. Örnek 1&apos;deki
                Anadolu Tekstil hesaplamasında bu mantık uygulanmıştır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Hizmet veya ticaret sektöründeki bir şirket başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Program yalnızca imalat sanayinde faaliyet
                gösteren işletmeleri kapsamaktadır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                28 Ağustos 2026 değişikliği sonrası şimdi ne yapmalıyım?
              </h3>
              <p className="leading-8 text-gray-700">
                Yeni çevrimiçi başvuru portalının açılış tarihi henüz
                ilan edilmedi. Bu süreçte işletmenizin referans dönem
                prim gün verilerini, KOBİ Bilgi Sistemi kayıtlarını ve
                varsa yatırım teşvik belgesi/tamamlama vizesi
                belgelerini hazır hale getirmek, portal açıldığında
                hızlı hareket etmenizi sağlar.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Büyük ölçekli, yatırım teşvik belgeli bir işletme kredi limitini nasıl hesaplar?
              </h3>
              <p className="leading-8 text-gray-700">
                Kredi limiti formülü: teşvik belgesinde öngörülen ilave
                istihdam sayısı × Ocak ayı asgari ücreti × 6. Örnek
                3&apos;te 50 kişilik ilave istihdam taahhüdü olan bir
                işletme için bu hesaplama yaklaşık 9,9 milyon
                TL&apos;lik bir kredi limitine karşılık gelmektedir.
                Ancak bu, yalnızca limiti belirler; desteği fiilen hak
                etmek ayrı bir şart — bkz. bir sonraki soru.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Bu programda mevcut çalışanlarım mı korunuyor, yoksa yeni personel mi almalıyım?
              </h3>
              <p className="leading-8 text-gray-700">
                KOBİ&apos;ler ve genel imalat işletmeleri için:
                <strong> mevcut çalışanlarınız</strong> korunuyor;
                somut bir kişi sayısı şartı yok, yalnızca referans
                dönem ortalama prim gün sayınızı koruma döneminde
                (en az 6 ay) koruyor olmanız yeterli. Yatırım teşvik
                belgeli büyük ölçekli işletmeler için ise durum farklı:
                bu işletmelerin teşvik belgesinde zaten taahhüt ettiği
                &quot;ilave istihdam&quot; sayısının en az yarısını,
                tamamlama vizesini takip eden 6 aylık dönemde
                (yarısı × 180 gün prim eşdeğeri) fiilen istihdam etmiş
                olması gerekiyor — bu grup için gerçekten yeni personel
                alıp sürdürme şartı var.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Destek tutarı her ay otomatik mi yatıyor?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. İşletmenin her ay istihdamını koruduğunu SGK
                kayıtlarıyla göstermesi ve ödeme talep formunu
                doldurması gerekir. Onaylanan tutar, talebi takip eden
                ayın sonuna kadar SGK hesabına veya Go Dijital
                Cüzdan&apos;a aktarılır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Danışmanlık desteği almak zorunlu mu?
              </h3>
              <p className="leading-8 text-gray-700">
                Zorunlu değildir, ancak işletmenin hangi destek
                kanalına (performans mı finansman mı) uygun olduğunun
                doğru tespit edilmesi, kredi limiti formülünün doğru
                uygulanması, prim gün hesaplamalarının titizlikle
                takip edilmesi ve başvuru/ödeme talep süreçlerinin
                zamanında yürütülmesi alınacak destek tutarını
                doğrudan etkilemektedir.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 İstihdamı Koruma Desteği Hesaplamanızı Birlikte Yapalım
            </h3>
            <p className="leading-8 text-gray-700">
              Şirketinizin çalışan sayısına ve varsa yatırım teşvik
              belgenize göre ne kadar destek ve kredi avantajından
              yararlanabileceğinizi doğru hesaplamak, çevrimiçi başvuru
              sürecini eksiksiz yönetmek için uzman desteği önemlidir.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Şirketiniz için destek tutarını hesaplamamız amacıyla
                bizimle iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* 9. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            İstihdamı Koruma Destek Programı, 28 Ağustos 2026&apos;da
            yayımlanan yönetmelik değişikliğiyle çok daha güçlü bir
            mekanizmaya kavuştu: kredi desteği 10 puandan 15 puana
            çıkarıldı, kredi limiti artık net formüllerle hesaplanıyor,
            yatırım teşvik belgeli büyük işletmeler için ayrı bir
            formül tanımlandı ve program 2028&apos;e kadar uzatıldı.
            İmalat sanayinde faaliyet gösteren işletmeler için hem
            doğrudan nakdi destek hem de 50 milyon TL&apos;ye kadar
            kredi imkânını bir araya getiren bu program, 2026&apos;nın
            en kapsamlı istihdam odaklı destek mekanizmalarından biri
            olmaya devam ediyor. Yeni çevrimiçi başvuru portalının
            açılışını beklerken, referans dönem verilerinizi ve
            belgelerinizi şimdiden hazırlamanız kritik önem taşıyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin bu programdan ve diğer güncel devlet destek/teşvik
            programlarından hangileriyle örtüştüğünü belirlemek, kredi
            limiti hesaplamasını doğru yapmak, SGK prim gün takibini
            yönetmek, başvuru ve ödeme talep sürecini uçtan uca yürütmek
            için Koray Akdağ / Sistem Global Danışmanlık olarak
            yanınızdayız. Ayrı bir danışmanlık firması aramanıza gerek
            kalmadan, hem destek başvuru sürecinizi hem de sonrasındaki
            raporlama ve uyum yükümlülüklerinizi tek noktadan
            yürütebiliriz.
          </p>
        </section>
    </BlogLayout>
  );
}
