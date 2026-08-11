import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "İstihdamı Koruma Destek Programı 2026 | Kimler Başvurabilir, Destek Tutarları Nedir? | Koray Akdağ",
  description:
    "İstihdamı Koruma Destek Programı 2026: imalat sanayi KOBİ ve büyük işletmeler için çalışan başına 3.500 TL geri ödemesiz destek, 50 milyon TL'ye kadar kredi ve 10 puan faiz desteği, şartlar, başvuru takvimi ve güncel durum.",
  keywords: [
    "İstihdamı Koruma Destek Programı",
    "KOSGEB istihdam desteği 2026",
    "imalat sanayi istihdam desteği",
    "KOSGEB 3500 TL personel desteği",
    "imalat sanayi finansman desteği 2026",
    "KOBİ istihdam koruma programı",
    "Sanayi ve Teknoloji Bakanlığı istihdam desteği",
    "KOSGEB prim gün desteği",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İstihdamı Koruma Destek Programı 2026: Kimler Başvurabilir, Destek Tutarları Nedir?"
      description="İmalat sanayinde istihdamı koruyan işletmelere çalışan başına 3.500 TL'ye varan geri ödemesiz destek ve 50 milyon TL'ye kadar kredi imkânı sunan yeni programın şartları, destek tutarları, 2026 başvuru takvimi ve güncel durumu."
      category="İSTİHDAM DESTEKLERİ • KOSGEB • 2026"
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
            nesil bir destek mekanizmasıdır. Program hakkında piyasada
            çok sayıda yanlış ya da eksik bilgi dolaşıyor; bu rehberde
            programın işleyişini, rakamlarını ve güncel başvuru
            durumunu net biçimde ele alıyoruz.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Program nasıl çalışıyor, hibe mi kredi mi?</li>
            <li>✔ Kimler başvurabilir, hangi şart aranıyor?</li>
            <li>✔ Performans desteği ve finansman desteği farkı</li>
            <li>✔ Hangi sektörler 3.500 TL&apos;lik desteği alıyor?</li>
            <li>✔ 2026 başvuru takvimi ve Ağustos 2026 itibarıyla durum</li>
            <li>✔ Adım adım süreç ve aylık yükümlülükler</li>
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
              3. Destek Türleri ve Tutarları
            </Link>
            <Link href="#sektorler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Hangi Sektörler Performans Desteği Alıyor?
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. 2026 Başvuru Takvimi ve Güncel Durum
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Adım Adım Süreç
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
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Başvuru Şartları
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ İmalat sanayi sektöründe faaliyet göstermek</li>
                <li>✔ KOBİ statüsünde ise KOBİ Bilgi Sistemi kaydının ve beyannamesinin güncel olması</li>
                <li>✔ 2025 yılı Kasım-Aralık dönemine ait ortalama SGK prim gün sayısını 2026&apos;da koruyor veya artırıyor olmak</li>
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
                <li>❌ 2025 Kasım-Aralık ortalama prim gün sayısını 2026&apos;da koruyamayan işletmeler</li>
                <li>❌ KOBİ Bilgi Sistemi kaydı veya beyannamesi güncel olmayan KOBİ&apos;ler</li>
                <li>❌ Yapılandırılmamış, vadesi geçmiş KOSGEB borcu bulunan işletmeler</li>
                <li>❌ Büyük ölçekli işletmeler için KOSGEB yerine Sanayi ve Teknoloji Bakanlığı kanalı geçerlidir</li>
              </ul>
            </div>
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
                  <td className="p-5">Çalışan başına aylık 3.500 TL (30 prim günü karşılığı)</td>
                  <td className="p-5">10 puana kadar faiz/kâr payı desteği</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti</td>
                  <td className="p-5">—</td>
                  <td className="p-5">İşletme başına 50.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">2026 Toplam Bütçe</td>
                  <td className="p-5" colSpan={2}>100 milyar TL finansmana erişim imkânı</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Destek Süresi</td>
                  <td className="p-5" colSpan={2}>Onay tarihinden itibaren 12 ay</td>
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
              hesabına aktarılır. Finansman desteğinde ise işletme
              protokollü bir banka veya finans kuruluşundan kredi
              kullanır, anaparayı kendisi öderken faiz/kâr payı
              yükünün 10 puana kadar olan kısmı KOSGEB tarafından geri
              ödemesiz olarak karşılanır. Destek tutarının önceki
              uygulamada çalışan başına 2.500 TL olduğu, 2026
              döneminde 3.500 TL&apos;ye yükseltildiği kaynaklarda yer
              almaktadır; bu nedenle güncel tutarın işletmenin başvuru
              tarihindeki resmî düzenlemeye göre teyit edilmesi
              önerilir.
            </p>
          </div>
        </section>

        {/* 4. SEKTÖRLER */}
        <section id="sektorler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Hangi Sektörler Performans Desteği Alıyor?
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
            5. 2026 Başvuru Takvimi ve Güncel Durum
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Program, 1 Ocak 2026 – 31 Aralık 2026 tarihleri arasında
            uygulanmak üzere tasarlanmıştır. KOBİ ölçeğindeki
            işletmeler için başvuru penceresi ise belirli bir tarih
            aralığıyla sınırlı tutulmuştur.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">KOBİ Başvuru Dönemi</h3>
              <p className="text-gray-700">3 Mart 2026 – 30 Nisan 2026</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Ödeme Talebi Son Tarihi</h3>
              <p className="text-gray-700">31 Mart 2027</p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 Ağustos 2026 İtibarıyla Durum
            </h3>
            <p className="leading-8 text-gray-700">
              Bu yazının yayımlandığı tarih itibarıyla, KOBİ&apos;lerin
              programa yeni başvuru yapabildiği 3 Mart – 30 Nisan 2026
              dönemi sona ermiştir; yeni bir başvuru penceresine
              ilişkin resmî bir tarih henüz KOSGEB tarafından ilan
              edilmemiştir. Bununla birlikte program, 31 Aralık
              2026&apos;ya kadar uygulamada kalmaya devam etmektedir:
              daha önce onaylanan işletmeler, 12 aylık uygulama
              döneminde her ay istihdamlarını korumaları koşuluyla
              ödeme talebinde bulunmaya devam edebilir ve bu talepleri
              en geç 31 Mart 2027&apos;ye kadar iletebilir. Henüz
              başvuru yapmamış işletmelerin ise olası yeni bir başvuru
              dönemi ilanına karşı, SGK prim gün verilerini, KOBİ Bilgi
              Sistemi kayıtlarını ve gerekli belgeleri şimdiden hazır
              hale getirmesi, ilan anında zaman kaybetmemek açısından
              önemlidir. Güncel duyurular KOSGEB&apos;in resmî internet
              sitesi ve KOBİ Bilgi Sistemi üzerinden yayımlanmaktadır.
            </p>
          </div>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Adım Adım Süreç
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
                Onaylanan destek/faiz tutarı en geç 31 Mart 2027&apos;ye kadar işletmeye aktarılır.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ İstihdam Korumasının Ölçüm Şekli
            </h3>
            <p className="leading-8 text-gray-700">
              Destek tutarı, işletmenin 2025 yılı Kasım ve Aralık
              aylarına ait ortalama SGK prim gün sayısı referans
              alınarak hesaplanır. 2026 yılı boyunca her ay bu
              ortalamanın korunması ya da aşılması gerekir; ortalamanın
              altına düşülen aylar için performans desteği veya
              finansman desteği talep edilemez.
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
              <li>Destek, yalnızca <strong>imalat sanayinde</strong> faaliyet gösteren işletmeleri kapsar; hizmet ve ticaret sektörleri programın dışındadır.</li>
              <li>Performans desteği ile finansman desteği aynı işletmede birlikte değil, faaliyet gösterilen NACE koduna göre <strong>tek bir kanaldan</strong> uygulanır.</li>
              <li>2025 Kasım-Aralık ortalama prim gün sayısının altına düşen aylar için destek talep edilemez; bu nedenle personel planlaması yıl boyunca dikkatle yönetilmelidir.</li>
              <li>Finansman desteğinde kredi anaparası işletme tarafından geri ödenir; devlet yalnızca faiz/kâr payının belirli bir kısmını karşılar.</li>
              <li>Kredi kullandırımı, KOSGEB ile protokol imzalamış banka ve finans kuruluşlarının kendi değerlendirme kriterlerine de tabidir.</li>
              <li>Güncel destek tutarları, üst limitler ve başvuru tarihleri zaman içinde güncellenebileceğinden, başvuru öncesinde KOSGEB&apos;in yürürlükteki Uygulama Yönetmeliği ve Yönergesi esas alınmalıdır.</li>
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
                İstihdamı Koruma Destek Programı hibe mi, kredi mi?
              </h3>
              <p className="leading-8 text-gray-700">
                İkisini de içerir. Tekstil, giyim, deri, mobilya ve
                düğme/fermuar sektörlerinde çalışan başına aylık 3.500
                TL doğrudan geri ödemesiz destek verilir. Diğer imalat
                sanayi KOBİ&apos;lerinde ise işletme bankadan kredi
                kullanır, anaparayı öder; KOSGEB faiz/kâr payının 10
                puana kadar olan kısmını geri ödemesiz olarak karşılar.
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
                2026 KOBİ başvuru dönemi kapandıysa şimdi ne yapılabilir?
              </h3>
              <p className="leading-8 text-gray-700">
                3 Mart – 30 Nisan 2026 başvuru penceresi sona erdiğinden
                yeni başvuru için KOSGEB&apos;in olası ek bir dönem
                ilanı beklenmelidir. Bu süreçte işletmenizin uygunluk
                şartlarını, SGK prim gün verilerini ve KOBİ Bilgi
                Sistemi kayıtlarını hazır hale getirmek, yeni bir
                dönem açıldığında hızlı hareket etmenizi sağlar.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Büyük ölçekli işletmeler nasıl başvuruyor?
              </h3>
              <p className="leading-8 text-gray-700">
                Büyük ölçekli işletmeler KOSGEB&apos;e değil, doğrudan
                Sanayi ve Teknoloji Bakanlığı&apos;na başvuruda
                bulunur. Değerlendirme kriterleri ve istihdam koruma
                şartı ise aynı mantıkla işler.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Destek tutarı her ay otomatik mi yatıyor?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. İşletmenin her ay istihdamını koruduğunu SGK
                kayıtlarıyla göstermesi ve ödeme talep formunu
                doldurması gerekir. Talepler en geç 31 Mart 2027&apos;ye
                kadar iletilmelidir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Danışmanlık desteği almak zorunlu mu?
              </h3>
              <p className="leading-8 text-gray-700">
                Zorunlu değildir, ancak işletmenin hangi destek
                kanalına (performans mı finansman mı) uygun olduğunun
                doğru tespit edilmesi, prim gün hesaplamalarının
                titizlikle takip edilmesi ve başvuru/ödeme talep
                süreçlerinin zamanında yürütülmesi alınacak destek
                tutarını doğrudan etkilemektedir.
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
            İstihdamı Koruma Destek Programı, imalat sanayinde faaliyet
            gösteren işletmeler için hem doğrudan nakdi desteği hem de
            50 milyon TL&apos;ye kadar kredi imkânını bir araya getiren,
            2026&apos;nın en kapsamlı istihdam odaklı destek
            mekanizmalarından biri. KOBİ&apos;ler için yeni başvuru
            penceresi şu an kapalı olsa da program 31 Aralık 2026&apos;ya
            kadar uygulamada kalmaya devam ediyor; hem mevcut yararlanıcılar
            için aylık takip ve ödeme talebi süreci hem de olası yeni bir
            başvuru dönemine hazırlık büyük önem taşıyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin bu programdan ve diğer güncel devlet destek/teşvik
            programlarından hangileriyle örtüştüğünü belirlemek, SGK prim
            gün takibini doğru yönetmek, başvuru ve ödeme talep sürecini
            uçtan uca yürütmek için Koray Akdağ / Sistem Global Danışmanlık
            olarak yanınızdayız. Ayrı bir danışmanlık firması aramanıza
            gerek kalmadan, hem destek başvuru sürecinizi hem de
            sonrasındaki raporlama ve uyum yükümlülüklerinizi tek noktadan
            yürütebiliriz.
          </p>
        </section>
    </BlogLayout>
  );
}
