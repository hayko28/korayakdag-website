import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Kamu İhalelerinde Vergi ve SGK Borcu Sınırı 50.000 TL Oldu | Koray Akdağ",
  description: "16 Ekim 2026 tarihli 33402 sayılı Resmî Gazete'deki Kamu İhale Genel Tebliği değişikliğiyle, ihale dışı bırakılma sebebi sayılan kesinleşmiş vergi ve SGK prim borcu sınırı 5.000 TL'den 50.000 TL'ye çıktı. Değişiklik 15 Kasım 2026'da yürürlüğe giriyor. Kapsam, geçiş hükmü ve şirketlerin dikkat etmesi gerekenlerle güncel rehber.",
  keywords: [
    "kamu ihalesi vergi borcu sınırı",
    "kamu ihalesi SGK borcu sınırı 2026",
    "Kamu İhale Genel Tebliği değişikliği 2026",
    "ihale dışı bırakılma vergi borcu",
    "kesinleşmiş vergi borcu ihale",
    "4734 sayılı kanun madde 10",
    "geçici teminatın gelir kaydedilmesi",
    "borcu yoktur belgesi ihale",
  ],
  alternates: {
    canonical: "/blog/kamu-ihalelerinde-vergi-sgk-borcu-siniri-50000-tl-oldu-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Kamu İhalelerinde Vergi ve SGK Borcu Sınırı 50.000 TL'ye Yükseltildi: Şirketiniz İhaleye Girebilir mi?"
      description="16 Ekim 2026 tarihli ve 33402 sayılı Resmî Gazete'de yayımlanan Kamu İhale Genel Tebliğinde Değişiklik Yapılmasına Dair Tebliğ ile, 4734 sayılı Kanun madde 10 kapsamında ihale dışı bırakılma ve geçici teminatın gelir kaydedilmesi sonucunu doğuran kesinleşmiş vergi borcu ve SGK prim borcu sınırı, 2018'den beri sabit kalan 5.000 TL'den 50.000 TL'ye çıkarıldı. Değişiklik 15 Kasım 2026'da yürürlüğe giriyor. Kapsam, geçiş hükmü ve şirketlerin şimdi kontrol etmesi gerekenlerle resmî kaynaklara dayanan güncel rehber."
      category="KAMU İHALELERİ • VERGİ VE SGK BORCU • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="kamu-ihalelerinde-vergi-sgk-borcu-siniri-50000-tl-oldu-2026"
      coverImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Şirketinizin İhale Uygunluğunu Birlikte Netleştirelim"
      ctaText="Kamu ihalesine katılmadan önce vergi dairesi ve SGK nezdindeki kesinleşmiş borç durumunuzu, yeni 50.000 TL sınırı çerçevesinde birlikte değerlendirelim ve gerekirse ödeme/tecil planlaması yapalım."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Kamu İhalelerinde Borç Sınırı Ne Değişti?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>16 Ekim 2026</strong> tarihli, <strong>33402 sayılı</strong> Resmî Gazete&apos;de yayımlanan Kamu İhale Genel Tebliğinde Değişiklik Yapılmasına Dair Tebliğ ile değişiklik resmen yürürlüğe girdi.</li>
          <li>✔ Değişen maddeler: Kamu İhale Genel Tebliği&apos;nin <strong>17.3.2</strong> (SGK prim borcu) ve <strong>17.4.1</strong> (vergi borcu) maddeleri.</li>
          <li>✔ Eski sınır <strong>5.000 TL</strong> (2018&apos;den beri sabitti), yeni sınır <strong>50.000 TL</strong>; yani on kat artış.</li>
          <li>✔ Bu sınırı aşan <strong>kesinleşmiş</strong> vergi veya SGK prim borcu, isteklinin 4734 sayılı Kanun madde 10 kapsamında <strong>ihale dışı bırakılmasına</strong> ve geçici teminatının gelir kaydedilmesine yol açıyor.</li>
          <li>✔ Yürürlük tarihi <strong>15 Kasım 2026</strong>; bu tarihten önce ilanı veya yazılı duyurusu yapılmış ihalelerde eski 5.000 TL sınırı uygulanmaya devam ediyor (Geçici Madde 24).</li>
          <li>✔ Sınır yükselmesi borcu sildirmiyor; sadece ihale dışı bırakılma eşiğini değiştiriyor. Borcunuz 50.000 TL&apos;nin altındaysa bu madde kapsamında elenmezsiniz, ama borç hâlâ tahsilat sürecine konu olabilir.</li>
          <li>✔ Bu değişiklik, aynı hafta gündeme gelen ve <strong>5 milyon TL</strong> eşikli &quot;vergi borcu açıklama listesi&quot;yle (VUK 597 sıra no&apos;lu tebliğ) karıştırılmamalı; ikisi tamamen ayrı iki düzenleme.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Kamu İhalesinde Vergi/SGK Borcu Şartı Nedir?
          </Link>
          <Link href="#degisiklik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 16 Ekim 2026 Tebliğiyle Ne Değişti?
          </Link>
          <Link href="#tablo" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Eski ve Yeni Sınır Karşılaştırması
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Hangi Borçlar Kapsama Giriyor?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Karıştırmayın: 50.000 TL mi, 5 Milyon TL mi?
          </Link>
          <Link href="#gecis" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Geçiş Hükmü: Hangi İhaleler Hangi Kurala Tabi?
          </Link>
          <Link href="#sonuc-sirketler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Şirketler İçin Pratik Sonuç
          </Link>
          <Link href="#ne-yapmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. İhale Öncesi Ne Kontrol Edilmeli?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Kamu İhalesinde Vergi/SGK Borcu Şartı Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          4734 sayılı Kamu İhale Kanunu&apos;nun 10. maddesi, kamu
          ihalelerine katılacak isteklilerde aranan yeterlik şartlarını
          sayıyor. Bu maddenin dördüncü fıkrasının <strong>(c) bendi</strong>,
          Türkiye&apos;nin veya kendi ülkesinin mevzuatı uyarınca
          <strong> kesinleşmiş sosyal güvenlik prim borcu</strong> bulunan
          istekçileri; <strong>(d) bendi</strong> ise aynı şekilde
          <strong> kesinleşmiş vergi borcu</strong> bulunanları ihale dışı
          bırakılacaklar arasında sayıyor. İhale tarihi itibarıyla bu
          durumda bulunduğu sonradan tespit edilen bir istekli, ihale
          dışı bırakılıyor ve varsa geçici teminatı gelir kaydediliyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Kanun, &quot;kesinleşmiş vergi borcu&quot; veya &quot;kesinleşmiş
          prim borcu&quot; ifadesinin hangi parasal eşiğin üzerindeki
          borçlar için uygulanacağını kendi metninde yazmıyor; bu eşiği
          belirleme yetkisi, idarenin uygulama usul ve esaslarını
          düzenleyen <strong>Kamu İhale Genel Tebliği</strong>&apos;ne
          bırakılmış durumda. Tebliğin <strong>17.3.2</strong> maddesi SGK
          prim borcu sınırını, <strong>17.4.1</strong> maddesi ise vergi
          borcu sınırını belirliyor. Bu iki madde, 2018&apos;den beri
          <strong> 5.000 TL</strong> seviyesinde sabit kalmıştı; Kasım
          2026&apos;da ilk kez değişti.
        </p>
      </section>

      {/* 2. DEĞİŞİKLİK */}
      <section id="degisiklik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 16 Ekim 2026 Tebliğiyle Ne Değişti?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Kamu İhale Kurumu tarafından hazırlanan{" "}
          <strong>Kamu İhale Genel Tebliğinde Değişiklik Yapılmasına
          Dair Tebliğ</strong>, 16 Ekim 2026 tarihli ve 33402 sayılı Resmî
          Gazete&apos;de yayımlandı. Tebliğ dört maddeden oluşuyor:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📌 1. ve 2. Maddeler</h3>
            <p className="text-gray-700">
              17.3.2 ve 17.4.1 maddelerinde geçen <strong>&quot;5.000
              TL&apos;yi&quot;</strong> ibaresi, her iki maddede de
              <strong> &quot;50.000 TL&apos;yi&quot;</strong> olarak
              değiştirildi.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📌 3. Madde</h3>
            <p className="text-gray-700">
              Tebliğe, &quot;Başlamış olan ihaleler&quot; başlıklı
              <strong> Geçici Madde 24</strong> eklendi; bu madde yeni
              sınırın hangi ihalelere uygulanmayacağını belirliyor.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Tebliğin 4. maddesi yürürlük hükmünü içeriyor: değişiklik,
          yayımı tarihinden <strong>30 gün sonra</strong>, yani{" "}
          <strong>15 Kasım 2026</strong>&apos;da yürürlüğe giriyor. 5.
          madde ise yürütme yetkisini Kamu İhale Kurumu Başkanı&apos;na
          veriyor.
        </p>
      </section>

      {/* 3. TABLO */}
      <section id="tablo" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Eski ve Yeni Sınır Karşılaştırması
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Konu</th>
                <th className="p-5">15 Kasım 2026&apos;dan Önce</th>
                <th className="p-5">15 Kasım 2026&apos;dan Sonra</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kesinleşmiş SGK prim borcu sınırı (md. 17.3.2)</td>
                <td className="p-5">5.000 TL</td>
                <td className="p-5 font-semibold text-emerald-700">50.000 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kesinleşmiş vergi borcu sınırı (md. 17.4.1)</td>
                <td className="p-5">5.000 TL</td>
                <td className="p-5 font-semibold text-emerald-700">50.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Pratikte bu, kesinleşmiş borcu 5.000 TL ile 50.000 TL arasında
          olan ve eskiden bu madde gereği ihale dışı bırakılma riski
          taşıyan şirketlerin, 15 Kasım 2026&apos;dan sonra ilan edilen
          ihalelerde artık bu gerekçeyle elenmeyeceği anlamına geliyor.
          50.000 TL&apos;nin üzerindeki kesinleşmiş borçlarda durum
          değişmiyor; ihale dışı bırakılma ve geçici teminatın gelir
          kaydedilmesi riski aynen devam ediyor.
        </p>
      </section>

      {/* 4. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Hangi Borçlar Kapsama Giriyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Kamu İhale Genel Tebliği&apos;nin 17. maddesi, &quot;vergi
          borcu&quot; ve &quot;SGK prim borcu&quot; kavramlarını ayrı ayrı
          tanımlıyor:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li><strong>Vergi borcu:</strong> Yıllık gelir vergisi, yıllık kurumlar vergisi, katma değer vergisi, özel tüketim vergisi, özel iletişim vergisi ve motorlu taşıtlar vergisi gibi, 213 sayılı Vergi Usul Kanunu kapsamındaki vergi türlerinden doğan ve bu türlerin toplamı 50.000 TL&apos;yi aşan <strong>kesinleşmiş</strong> borçlar.</li>
            <li><strong>SGK prim borcu:</strong> İşveren veya sigortalı sıfatıyla doğan ve itiraz/dava yolları tükenerek <strong>kesinleşmiş</strong>, toplamı 50.000 TL&apos;yi aşan sosyal güvenlik prim borçları.</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Buradaki kritik kelime <strong>&quot;kesinleşmiş&quot;</strong>.
          Bir vergi tarhiyatına veya prim tahakkukuna karşı dava açılmış
          ve yargı süreci devam ediyorsa, bu borç henüz
          &quot;kesinleşmiş&quot; sayılmıyor ve bu madde kapsamında ihale
          dışı bırakılma sebebi oluşturmuyor. Sadece itiraz/dava yolları
          tamamen tükenmiş, idarece artık tartışmasız kabul edilen borçlar
          bu hesaba dahil ediliyor.
        </p>
      </section>

      {/* 5. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Karıştırmayın: 50.000 TL mi, 5 Milyon TL mi?
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ İki Ayrı Düzenleme, İki Ayrı Eşik
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Kasım 2026&apos;da neredeyse aynı haftalarda gündeme gelen iki
            farklı düzenleme, kolayca birbirine karıştırılabiliyor. Bunları
            ayırt etmek önemli, çünkü ikisinin hukuki sonucu tamamen farklı:
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Kamu İhalesi Borç Sınırı</th>
                  <th className="p-4">Vergi Borcu Açıklama Listesi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Dayanak</td>
                  <td className="p-4">4734 sayılı Kanun md. 10, Kamu İhale Genel Tebliği md. 17.3.2/17.4.1</td>
                  <td className="p-4">VUK md. 5/4, VUK Genel Tebliği Sıra No: 597</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Eşik</td>
                  <td className="p-4">50.000 TL (15 Kasım 2026&apos;dan itibaren)</td>
                  <td className="p-4">5.000.000 TL (her bir vergi dairesi bazında)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Sonucu</td>
                  <td className="p-4">İhale dışı bırakılma, geçici teminatın gelir kaydedilmesi</td>
                  <td className="p-4">Sadece kamuya ilan; otomatik bir yaptırım doğurmaz</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Kısacası, 50.000 TL&apos;lik sınırı aşan bir borç sizi doğrudan
            girmek istediğiniz bir ihaleden eleyebilirken, 5 milyon
            TL&apos;lik eşiği aşan bir borç yalnızca Aralık ayında kamuya
            açıklanan bir listeye girmenize yol açıyor. Bir şirketin
            ihale riski taşıması için 5 milyon TL&apos;lik borcu olması
            gerekmiyor; çok daha küçük, 50.000 TL&apos;yi aşan kesinleşmiş
            bir borç bile yeterli.
          </p>
        </div>
      </section>

      {/* 6. GEÇİŞ */}
      <section id="gecis" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Geçiş Hükmü: Hangi İhaleler Hangi Kurala Tabi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tebliğe eklenen Geçici Madde 24, yürürlük tarihinden önce ilanı
          veya yazılı duyurusu yapılmış ihalelerin <strong>eski kuralla</strong>
          sonuçlandırılacağını belirtiyor. Bu, üç adımlı bir mantıkla
          özetlenebilir:
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">İhale ilan/duyuru tarihi 15 Kasım 2026&apos;dan önce</h3>
            <p className="mt-2 text-sm text-gray-600">Eski sınır (5.000 TL) geçerli; ihale ne zaman sonuçlanırsa sonuçlansın bu kural değişmiyor.</p>
          </div>
          <div className="rounded-xl border-2 border-orange-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">İhale ilan/duyuru tarihi 15 Kasım 2026 veya sonrası</h3>
            <p className="mt-2 text-sm text-gray-600">Yeni sınır (50.000 TL) geçerli.</p>
          </div>
          <div className="rounded-xl border-2 border-emerald-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">Belirleyici tarih: ilan/duyuru, ihale günü değil</h3>
            <p className="mt-2 text-sm text-gray-600">İhale tarihi Aralık veya Ocak&apos;ta olsa bile, ilan/duyuru tarihi Kasım öncesindeyse eski kural uygulanır.</p>
          </div>
        </div>
      </section>

      {/* 7. SONUÇ ŞİRKETLER */}
      <section id="sonuc-sirketler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Şirketler İçin Pratik Sonuç
        </h2>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li>
            <strong>Daha fazla küçük/orta ölçekli şirket ihaleye girebilir
            hale geliyor:</strong> 2018&apos;den beri sabit kalan 5.000 TL
            sınırı, özellikle enflasyonun etkisiyle çok küçük borçları
            bile ihale dışı bırakma sebebi haline getirmişti. 50.000
            TL&apos;ye çıkış, bu daralmayı kısmen tersine çeviriyor.
          </li>
          <li>
            <strong>Risk tamamen ortadan kalkmıyor:</strong> 50.000 TL
            üzeri kesinleşmiş borcu olan şirketler için durum aynı; ihale
            dışı bırakılma ve geçici teminatın gelir kaydedilmesi riski
            devam ediyor.
          </li>
          <li>
            <strong>Yapım işi, mal ve hizmet alımı ihalelerinin hepsini
            kapsıyor:</strong> Değişiklik, 4734 sayılı Kanun&apos;a tabi
            tüm ihale türlerinde geçerli; sadece belirli bir sektörle
            sınırlı değil.
          </li>
          <li>
            <strong>Teklif aşamasında sunulan belgeler değişebilir:</strong>
            İdareler, isteklilerden teklif tarihine yakın bir tarihli
            &quot;vergi borcu yoktur&quot; ve &quot;SGK prim borcu yoktur&quot;
            belgesi istiyor; bu belgelerin değerlendirilmesinde artık yeni
            50.000 TL eşiği esas alınacak (ilan/duyuru tarihi 15 Kasım
            2026 sonrasındaki ihalelerde).
          </li>
        </ul>
      </section>

      {/* 8. NE YAPMALI */}
      <section id="ne-yapmali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. İhale Öncesi Ne Kontrol Edilmeli?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir kamu ihalesine teklif vermeden önce, şirketinizin
          kesinleşmiş vergi ve SGK prim borcu durumunu şu adımlarla
          netleştirebilirsiniz:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">1. Vergi dairesi borç durumunu sorgulayın</h3>
            <p className="text-gray-700">
              İnteraktif Vergi Dairesi üzerinden kesinleşmiş ve kesinleşmemiş
              borçlarınızı ayrı ayrı görebilirsiniz; sadece kesinleşmiş
              olanlar bu madde kapsamında dikkate alınıyor.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">2. SGK e-borcu yoktur sorgulamasını yapın</h3>
            <p className="text-gray-700">
              e-Devlet veya SGK e-Bildirge üzerinden işveren prim borcu
              sorgulamasıyla kesinleşmiş prim borcu bulunup bulunmadığını
              kontrol edin.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">3. İhalenin ilan/duyuru tarihine bakın</h3>
            <p className="text-gray-700">
              Girmeyi planladığınız ihale 15 Kasım 2026&apos;dan önce ilan
              edilmişse, hâlâ 5.000 TL&apos;lik eski sınır geçerli; buna
              göre hareket edin.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">4. Sınırı aşan borç varsa tecil/ödeme planı yapın</h3>
            <p className="text-gray-700">
              Kesinleşmiş borcunuz yeni sınırı da aşıyorsa, teklif
              vermeden önce borcu kapatmak veya kabul edilen bir tecil/
              taksitlendirme başvurusuyla statüsünü değiştirmek, ihale
              dışı bırakılma riskini ortadan kaldırabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Sınır, vergi ve SGK borcu için ayrı ayrı 50.000 TL; ikisi toplanmıyor, her biri kendi kategorisinde değerlendiriliyor.</li>
            <li>Yalnızca <strong>kesinleşmiş</strong> borçlar bu madde kapsamında; dava veya itiraz süreci devam eden bir tarhiyat/tahakkuk bu hesaba girmiyor.</li>
            <li>15 Kasım 2026&apos;dan önce ilanı yapılmış bir ihalede, ihalenin kendisi Kasım sonrasında gerçekleşse bile eski 5.000 TL sınırı uygulanmaya devam ediyor.</li>
            <li>Sınırın yükselmesi borcu ortadan kaldırmıyor; 6183 sayılı Kanun kapsamındaki tahsilat işlemleri (haciz, e-haciz) bu değişiklikten bağımsız olarak sürüyor.</li>
            <li>İdareler teklif değerlendirmesinde EKAP üzerinden sorgulama yapabiliyor; teklif tarihine yakın tarihli borcu yoktur belgelerinin güncelliğine dikkat edilmeli.</li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, &quot;borcum yok&quot;
            algısıyla &quot;kesinleşmiş borcum yok&quot; gerçeğinin
            birbirine karıştırılması. Bir şirket cari dönem vergi ve
            prim yükümlülüklerini düzenli ödüyor olabilir; ama geçmiş bir
            vergi incelemesinden veya SGK denetiminden kalan, itiraz
            süreci tükenmiş ve kesinleşmiş küçük bir borç, teklif
            aşamasında fark edilmeden ihale dışı bırakılma sebebine
            dönüşebilir. Bu yüzden ihale öncesi kontrolün yalnızca güncel
            beyanlara değil, geçmiş kesinleşmiş tahakkuklara da
            uzanması gerekiyor.
          </p>
        </div>
      </section>

      {/* 10. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2026/10/20261016.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                16 Ekim 2026 Tarihli ve 33402 Sayılı Resmî Gazete - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.4734.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                4734 Sayılı Kamu İhale Kanunu, Madde 10 - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://ebulten.ihale.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Kamu İhale Kurumu - Resmî Duyurular (ihale.gov.tr)
              </a>
            </li>
            <li>
              <a href="https://intvrg.gib.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Gelir İdaresi Başkanlığı - İnteraktif Vergi Dairesi
              </a>
            </li>
            <li>
              <a href="https://www.sgk.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Sosyal Güvenlik Kurumu - e-Borcu Yoktur Sorgulama
              </a>
            </li>
          </ul>
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
              Kamu ihalelerinde vergi ve SGK borcu sınırı gerçekten 50.000 TL&apos;ye mi çıktı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. 16 Ekim 2026 tarihli ve 33402 sayılı Resmî
              Gazete&apos;de yayımlanan Kamu İhale Genel Tebliğinde
              Değişiklik Yapılmasına Dair Tebliğ ile, Kamu İhale Genel
              Tebliği&apos;nin 17.3.2 ve 17.4.1 maddelerindeki 5.000
              TL&apos;lik sınır 50.000 TL&apos;ye yükseltildi. Değişiklik
              15 Kasım 2026&apos;da yürürlüğe giriyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu değişiklik hangi ihaleleri kapsıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              4734 sayılı Kamu İhale Kanunu&apos;na tabi tüm yapım işi,
              mal alımı ve hizmet alımı ihalelerini kapsıyor. Ancak
              Geçici Madde 24 gereği, 15 Kasım 2026&apos;dan önce ilan
              veya yazılı duyurusu yapılmış ihalelerde eski 5.000
              TL&apos;lik sınır uygulanmaya devam ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kesinleşmemiş, itiraz sürecindeki bir vergi borcum ihale dışı bırakılmama sebep olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 4734 sayılı Kanun madde 10 ve Kamu İhale Genel
              Tebliği, yalnızca dava ve itiraz yolları tükenerek
              <strong> kesinleşmiş</strong> vergi veya SGK prim borçlarını
              dikkate alıyor. Yargı süreci devam eden bir tarhiyat veya
              tahakkuk bu kapsamda değerlendirilmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              50.000 TL sınırı ile 5 milyon TL&apos;lik vergi borcu açıklama eşiği aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, ikisi tamamen ayrı düzenlemeler. 50.000 TL&apos;lik
              sınır, kamu ihalesine katılırken ihale dışı bırakılma
              sebebi olan kesinleşmiş borç eşiği. 5 milyon TL&apos;lik
              eşik ise VUK 597 sıra no&apos;lu Tebliğ kapsamında, her
              yıl Aralık ayında vergi dairelerince kamuya açıklanan borç
              listesine girme eşiği; ihaleyle doğrudan bir ilgisi yok.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kesinleşmiş borcum 50.000 TL&apos;nin üzerindeyse ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu durumda değişiklik öncesinde olduğu gibi risk devam
              ediyor: ihale tarihi itibarıyla bu borcunuz tespit edilirse
              ihale dışı bırakılabilir ve varsa geçici teminatınız gelir
              kaydedilebilir. Teklif vermeden önce borcu ödemek veya
              kabul edilmiş bir tecil/taksitlendirme başvurusuyla
              statüsünü değiştirmek bu riski ortadan kaldırabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sınırın yükselmesi borcumu siler mi veya hacizi durdurur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bu değişiklik yalnızca ihale dışı bırakılma eşiğini
              yükseltiyor; borcun kendisini ortadan kaldırmıyor. 6183
              sayılı Kanun kapsamındaki tahsilat işlemleri (haciz,
              e-haciz) bu düzenlemeden bağımsız olarak sürmeye devam
              eder.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin İhale Uygunluğunu Birlikte Netleştirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Bir kamu ihalesine teklif vermeden önce, şirketinizin vergi
            dairesi ve SGK nezdindeki kesinleşmiş borç durumunu,{" "}
            <Link href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026" className="text-orange-600 underline">
              Vergi Risk Analizi hizmetimiz
            </Link>{" "}
            kapsamında birlikte gözden geçirelim; sınırı aşan bir borç
            varsa ödeme veya tecil/taksitlendirme seçeneklerini
            değerlendirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 12. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2018&apos;den beri sabit kalan 5.000 TL&apos;lik sınırın 50.000
          TL&apos;ye çıkarılması, enflasyon karşısında giderek daha fazla
          şirketi etkisiz hale getiren bir eşiği güncel koşullara
          taşıyor. Ancak bu, kamu ihalelerine katılacak şirketler için
          vergi ve SGK borcu takibinin önemini azaltmıyor; aksine, sınırın
          üzerinde kalan kesinleşmiş borçlarda risk aynı şiddette devam
          ediyor. 15 Kasım 2026&apos;dan itibaren ilan edilecek ihalelerde
          yeni sınırın, bu tarihten önce ilan edilmiş ihalelerde ise eski
          sınırın geçerli olacağını unutmamak gerekiyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirketlerin
          kamu ihalesine katılmadan önce vergi dairesi ve SGK nezdindeki
          kesinleşmiş borç durumunu tespit etmesine, gerekirse ödeme veya
          tecil/taksitlendirme seçeneklerini planlamasına ve genel vergi
          risk yönetimini düzenli bir sürece bağlamasına yardımcı
          oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/vergi-borcu-aciklama-listesi-2026-kimler-kapsamda"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Vergi Borcu Listesi 2026: Şirketiniz Açıklanacak mı?</h3>
          </Link>
          <Link
            href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ & FİNANSAL YÖNETİM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ&apos;nin İhtiyacı?</h3>
          </Link>
          <Link
            href="/blog/tam-tasdik-nedir-kimler-yaptirmali-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YEMİNLİ MALİ MÜŞAVİRLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Tam Tasdik Nedir? Kimler Yaptırmalı, Avantajları Neler?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Kamu ihalelerinde vergi ve SGK borcu sınırı gerçekten 50.000 TL'ye mi çıktı?","acceptedAnswer":{"@type":"Answer","text":"Evet. 16 Ekim 2026 tarihli ve 33402 sayılı Resmî Gazete'de yayımlanan Kamu İhale Genel Tebliğinde Değişiklik Yapılmasına Dair Tebliğ ile, Kamu İhale Genel Tebliği'nin 17.3.2 ve 17.4.1 maddelerindeki 5.000 TL'lik sınır 50.000 TL'ye yükseltildi. Değişiklik 15 Kasım 2026'da yürürlüğe giriyor."}},{"@type":"Question","name":"Bu değişiklik hangi ihaleleri kapsıyor?","acceptedAnswer":{"@type":"Answer","text":"4734 sayılı Kamu İhale Kanunu'na tabi tüm yapım işi, mal alımı ve hizmet alımı ihalelerini kapsıyor. Ancak Geçici Madde 24 gereği, 15 Kasım 2026'dan önce ilan veya yazılı duyurusu yapılmış ihalelerde eski 5.000 TL'lik sınır uygulanmaya devam ediyor."}},{"@type":"Question","name":"Kesinleşmemiş, itiraz sürecindeki bir vergi borcum ihale dışı bırakılmama sebep olur mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır. 4734 sayılı Kanun madde 10 ve Kamu İhale Genel Tebliği, yalnızca dava ve itiraz yolları tükenerek kesinleşmiş vergi veya SGK prim borçlarını dikkate alıyor. Yargı süreci devam eden bir tarhiyat veya tahakkuk bu kapsamda değerlendirilmiyor."}},{"@type":"Question","name":"50.000 TL sınırı ile 5 milyon TL'lik vergi borcu açıklama eşiği aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, ikisi tamamen ayrı düzenlemeler. 50.000 TL'lik sınır, kamu ihalesine katılırken ihale dışı bırakılma sebebi olan kesinleşmiş borç eşiği. 5 milyon TL'lik eşik ise VUK 597 sıra no'lu Tebliğ kapsamında, her yıl Aralık ayında vergi dairelerince kamuya açıklanan borç listesine girme eşiği; ihaleyle doğrudan bir ilgisi yok."}},{"@type":"Question","name":"Kesinleşmiş borcum 50.000 TL'nin üzerindeyse ne olur?","acceptedAnswer":{"@type":"Answer","text":"Bu durumda değişiklik öncesinde olduğu gibi risk devam ediyor: ihale tarihi itibarıyla bu borcunuz tespit edilirse ihale dışı bırakılabilir ve varsa geçici teminatınız gelir kaydedilebilir. Teklif vermeden önce borcu ödemek veya kabul edilmiş bir tecil/taksitlendirme başvurusuyla statüsünü değiştirmek bu riski ortadan kaldırabilir."}},{"@type":"Question","name":"Sınırın yükselmesi borcumu siler mi veya hacizi durdurur mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Bu değişiklik yalnızca ihale dışı bırakılma eşiğini yükseltiyor; borcun kendisini ortadan kaldırmıyor. 6183 sayılı Kanun kapsamındaki tahsilat işlemleri (haciz, e-haciz) bu düzenlemeden bağımsız olarak sürmeye devam eder."}}]}) }}
      />
    </BlogLayout>
  );
}
