import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Turizm Ücret Desteği Nedir? Çalışan Başına 3.500 TL SGK Desteği İçin Başvuru Gerekir mi? (2026) | Koray Akdağ",
  description:
    "7590 sayılı Kanun'un 4447 sayılı Kanun'a eklediği geçici 36. madde ile turizm işletmesi belgeli konaklama tesislerine, 2026 Mayıs-Aralık döneminde sigortalı başına aylık yaklaşık 3.500 TL'ye kadar sigorta prim desteği sağlanıyor. Destek otomatik mi geliyor, hangi işletmeler kapsam dışı, imalat sanayi istihdam desteğinden farkı ve dikkat edilmesi gereken noktalarla SGK Genelgesi 2026/21'e dayanan güncel rehber.",
  keywords: [
    "turizm ücret desteği",
    "turizm ücret desteği nedir",
    "turizm sigorta prim desteği",
    "7590 sayılı kanun turizm desteği",
    "konaklama tesisi sgk desteği",
    "turizm işletmesi 3500 tl destek",
    "turizm çalışan desteği 2026",
    "sgk genelgesi 2026/21",
  ],
  alternates: {
    canonical: "/blog/turizm-ucret-destegi-3500-tl-sgk-prim-destegi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Turizm Ücret Desteği Nedir? Çalışan Başına 3.500 TL SGK Prim Desteği İçin Başvuru Gerekir mi?"
      description="7590 sayılı Kanun'un 4447 sayılı İşsizlik Sigortası Kanunu'na eklediği geçici 36. madde ile turizm işletmesi belgeli özel sektör konaklama tesislerine, 2026 yılı Mayıs-Aralık döneminde sigortalı başına aylık yaklaşık 3.500 TL'ye kadar sigorta prim desteği sağlanıyor. Destek otomatik mi geliyor, kimler kapsam dışında, imalat sanayi istihdam desteğinden farkı ve destek dönemi biterken dikkat edilmesi gerekenlerle güncel rehber."
      category="SGK TEŞVİKLERİ • TURİZM ÜCRET DESTEĞİ • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="turizm-ucret-destegi-3500-tl-sgk-prim-destegi-2026"
      coverImage="https://images.unsplash.com/photo-1741375003259-91460664b739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      programDurumu="acik"
      ctaHeading="SGK Prim Desteklerinizi ve Bordro Uyumunuzu Birlikte Kontrol Edelim"
      ctaText="Turizm işletmenizin bu destekten fiilen yararlanıp yararlanmadığı, bordro ve muhtasar prim hizmet beyannamesi süreçlerinizin doğru işlemesine bağlı. Mevcut durumunuzu birlikte değerlendirelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Turizm sektöründeki işverenler, Temmuz 2026&apos;dan bu yana
        bordrolarına yansıyan ama çoğu zaman kaynağının ne olduğunu tam
        bilmedikleri bir SGK prim desteğiyle karşılaşıyor. Bu destek, 31
        Temmuz 2026 tarihli ve 33326 sayılı Resmî Gazete&apos;de yayımlanan
        7590 sayılı Kanun&apos;un 4447 sayılı İşsizlik Sigortası
        Kanunu&apos;na eklediği geçici 36. maddeyle geldi: &quot;turizm ücret
        desteği&quot;. Konaklama tesisi işleten özel sektör işverenlerine
        sigortalı başına aylık yaklaşık 3.500 TL&apos;ye kadar prim desteği
        sağlayan bu düzenleme, 2026 yılı Mayıs-Aralık dönemini kapsıyor. Bu
        yazıda, SGK&apos;nın resmî genelgesine ve kanun metnine dayanarak
        desteğin kapsamını, hesaplama yöntemini, başvurunun gerekip
        gerekmediğini ve en sık karıştırılan noktayı netleştiriyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Destek, 2634 sayılı Turizmi Teşvik Kanunu kapsamında{" "}
            <strong>turizm işletmesi belgesine</strong> sahip özel sektör
            konaklama tesislerini (NACE 55 grubu) kapsıyor; basit konaklama
            turizm işletme belgesi sahipleri kapsam dışı.
          </li>
          <li>
            ✔ Dönem <strong>2026 yılı Mayıs-Aralık</strong> ayları; yani
            Kasım ve Aralık için de uygulanmaya devam ediyor, ancak kanunda
            2027&apos;ye uzatıldığına dair bir hüküm yok.
          </li>
          <li>
            ✔ Tutar, sigortalının o ayki prim gün sayısının{" "}
            <strong>116,67 TL</strong> ile çarpılmasıyla bulunuyor; 30 gün
            tam çalışan bir sigortalı için bu yaklaşık{" "}
            <strong>3.500 TL/ay</strong>&apos;a karşılık geliyor.
          </li>
          <li>
            ✔ <strong>Ayrı bir başvuru yapmanız gerekmiyor.</strong> Kültür
            ve Turizm Bakanlığı uygun işletmelerin listesini her ay SGK&apos;ya
            bildiriyor, destek sistem tarafından otomatik hesaplanıp
            primlerden mahsup ediliyor.
          </li>
          <li>
            ✔ Prim ve idari para cezası borcu olan, muhtasar ve prim hizmet
            beyannamesini geç veren veya sigortasız çalıştırdığı tespit
            edilen işletmeler destekten yararlanamıyor ya da aldıkları tutarı
            gecikme cezasıyla geri ödüyor.
          </li>
          <li>
            ✔ Bu destek, imalat sanayine yönelik <strong>istihdamı
            koruma</strong> desteğiyle (geçici 35. madde) karıştırılmamalı;
            ikisi farklı sektörü, farklı mekanizmayı ve farklı süreyi
            kapsıyor.
          </li>
          <li>
            ✔ Fondan karşılanan tutarlar, gelir ve kurumlar vergisi
            uygulamasında gelir, gider veya maliyet unsuru sayılmıyor.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#destek-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Turizm Ücret Desteği Nedir, Yasal Dayanağı Ne?
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kim Yararlanabilir, Kim Kapsam Dışı?
          </Link>
          <Link href="#tutar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Tutarı Nasıl Hesaplanıyor?
          </Link>
          <Link href="#basvuru" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Başvuru Gerekiyor mu? Süreç Nasıl İşliyor?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Karıştırmayın: İmalat Sanayi İstihdamı Koruma Desteğinden Farkı
          </Link>
          <Link href="#yararlanamama" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Hangi Durumlarda Destek Kesilir veya Geri Alınır?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. DESTEK NEDİR */}
      <section id="destek-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Turizm Ücret Desteği Nedir, Yasal Dayanağı Ne?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          7590 sayılı Kanun, 31 Temmuz 2026 tarihli ve 33326 sayılı Resmî
          Gazete&apos;de yayımlandı. Kanunun 11. maddesi, 4447 sayılı
          İşsizlik Sigortası Kanunu&apos;na yeni bir geçici madde (geçici 36.
          madde) ekleyerek turizm sektörüne özel bir sigorta prim desteği
          getirdi. Amaç, turizm işletmelerinin yoğun sezon sonrasında
          istihdamını koruyabilmesi için işveren üzerindeki sigorta primi
          yükünü, belirli bir dönem boyunca İşsizlik Sigortası Fonu
          üzerinden hafifletmek.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Düzenlemenin önemli bir özelliği, yürürlük tarihiyle ilgili. Madde,
          yayımı tarihinde yürürlüğe girmesine rağmen, metinde &quot;2026
          yılı Mayıs dönemi itibarıyla uygulanmak üzere&quot; ifadesi yer
          alıyor. Bu, kanunun Temmuz 2026&apos;da yayımlanmasına rağmen
          desteğin geriye dönük olarak Mayıs 2026&apos;dan itibaren
          hesaplandığı, uygun işletmelerin Mayıs-Temmuz dönemine ait
          tutarları da sistem üzerinden aldığı anlamına geliyor.
        </p>
        <p className="leading-8 text-gray-700">
          Uygulamaya ilişkin usul ve esaslar, Çalışma ve Sosyal Güvenlik
          Bakanlığı tarafından, Kültür ve Turizm Bakanlığı&apos;nın görüşü
          alınarak belirlendi ve <strong>SGK Genelgesi 2026/21</strong> (4
          Eylül 2026) ile detaylandırıldı.
        </p>
      </section>

      {/* 2. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kim Yararlanabilir, Kim Kapsam Dışı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Destek, herkesin turizmle ilişkilendirdiği her işletmeyi değil,
          belirli bir belge türüne sahip işverenleri kapsıyor. Kapsamın
          sınırları şöyle:
        </p>
        <ul className="ml-6 mt-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            İşyeri, 2634 sayılı Turizmi Teşvik Kanunu kapsamında düzenlenen{" "}
            <strong>turizm işletmesi belgesine</strong> sahip olmalı. Bu
            belge, Kültür ve Turizm Bakanlığı tarafından verilen ve
            konaklama faaliyetini resmî olarak tanımlayan belgedir.
          </li>
          <li>
            İşletme <strong>özel sektöre</strong> ait olmalı; kamuya ait veya
            kamu payı ağırlıklı konaklama tesisleri kapsam dışında.
          </li>
          <li>
            Faaliyet konusu, NACE kodu olarak <strong>55 grubu
            (55.10-55.90 arası konaklama faaliyetleri)</strong>na girmeli.
          </li>
          <li>
            <strong>Basit konaklama turizm işletme belgesi</strong> sahibi
            işletmeler, destek kapsamının dışında tutulmuş durumda. Bu,
            uygulamada en çok karışıklık yaratan noktalardan biri; &quot;turizm
            işletme belgesi&quot; ile &quot;basit konaklama turizm işletme
            belgesi&quot; aynı şey değil.
          </li>
          <li>
            İşyeri fiilen faaliyette olmalı; destek yalnızca tesisin
            faaliyette bulunduğu ay/dönemler için hesaplanıyor.
          </li>
        </ul>
      </section>

      {/* 3. TUTAR */}
      <section id="tutar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Tutarı Nasıl Hesaplanıyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hesaplama yöntemi, kanun metninde oldukça açık şekilde tanımlanmış.
          İşyerinde 5510 sayılı Kanun&apos;un 4. maddesinin birinci fıkrasının
          (a) bendi kapsamında (yani normal hizmet akdiyle) uzun vadeli
          sigorta kollarına tabi bildirilen her sigortalı için, o ayki prim
          ödeme gün sayısı <strong>116,67 TL</strong> ile çarpılıyor. Çıkan
          tutar, işyerinin SGK&apos;ya ödeyeceği primlerden mahsup ediliyor
          ve İşsizlik Sigortası Fonu üzerinden karşılanıyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Değişken</th>
                <th className="p-4">Değer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Günlük destek tutarı</td>
                <td className="p-4">116,67 TL / prim günü</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">30 gün tam çalışma (aylık karşılık)</td>
                <td className="p-4">Yaklaşık 3.500 TL / sigortalı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Destek dönemi</td>
                <td className="p-4">2026 Mayıs-Aralık (en fazla 8 ay)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">Teorik üst sınır (sigortalı başına, 8 ay)</td>
                <td className="p-4">Yaklaşık 28.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bir önemli sınır var: eğer işyerinin o ay ödeyeceği prim tutarı,
          hesaplanan destek tutarından düşükse, destek yalnızca prim borcunu
          kapatacak kadar uygulanıyor. Kalan kısım boşa gitmiyor; SGK primi
          aşan kısım İşsizlik Sigortası Fonu&apos;ndan karşılanıp SGK&apos;ya
          aktarılıyor ve Türkiye İş Kurumu&apos;na önceden bildiriliyor.
        </p>
      </section>

      {/* 4. BAŞVURU */}
      <section id="basvuru" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Başvuru Gerekiyor mu? Süreç Nasıl İşliyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Turizm işletmelerinin bu konuda en çok sorduğu soru şu:
          &quot;destekten yararlanmak için SGK&apos;ya veya bir başka kuruma
          ayrıca başvuru yapmam gerekiyor mu?&quot; Cevap hayır. Süreç, diğer
          birçok KOSGEB veya TÜBİTAK destek programının aksine, işverenin
          dosya hazırlayıp başvurduğu bir mekanizma değil; tamamen kurumlar
          arası veri paylaşımıyla otomatik işliyor.
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">1.</span> Kültür ve
            Turizm Bakanlığı, turizm işletmesi belgesine sahip (basit
            konaklama belgesi hariç) işletmelerin güncel listesini her ay
            SGK&apos;ya bildiriyor.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">2.</span>{" "}
            İşverenin o ay için zamanında verdiği muhtasar ve prim hizmet
            beyannamesindeki sigortalı ve prim gün bilgileri sistem
            tarafından otomatik işleniyor.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">3.</span> SGK
            sistemi, borç/ceza/eksik bildirim kontrollerini yaptıktan sonra
            destek tutarını otomatik hesaplayıp ilgili ayın prim
            tahakkukundan mahsup ediyor.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">4.</span> İşveren
            tarafında yapılması gereken tek şey, bordro ve SGK
            bildirimlerinin (muhtasar ve prim hizmet beyannamesi) her ay
            doğru ve zamanında verilmesi; eksik veya geç bildirim, desteğin o
            ay için hiç yansımamasına yol açabiliyor.
          </div>
        </div>
      </section>

      {/* 5. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Karıştırmayın: İmalat Sanayi İstihdamı Koruma Desteğinden Farkı
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Aynı 7590 sayılı Kanun&apos;un 10. maddesi, imalat sanayine
            yönelik farklı bir desteğin (4447 sayılı Kanun geçici 35.
            madde) süresini 31/12/2026&apos;dan <strong>31/12/2028&apos;e</strong>{" "}
            uzattı. Haberlerde her iki düzenleme de bazen aynı başlık altında
            anılıyor ve işverenler iki farklı programı birbirine
            karıştırıyor. Oysa mekanizmaları tamamen farklı:
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Turizm Ücret Desteği (geçici m.36)</th>
                  <th className="p-4">İmalat Sanayi İstihdamı Koruma (geçici m.35)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Sektör</td>
                  <td className="p-4">Turizm işletme belgeli konaklama tesisleri</td>
                  <td className="p-4">İmalat sanayi (tekstil, giyim, deri, mobilya vb.)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Dönem</td>
                  <td className="p-4">Yalnızca 2026 Mayıs-Aralık</td>
                  <td className="p-4">2025&apos;ten başlayıp 31/12/2028&apos;e kadar</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Mekanizma</td>
                  <td className="p-4">Otomatik SGK prim mahsubu</td>
                  <td className="p-4">KOSGEB/İŞKUR üzerinden performans ve finansman desteği</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Temel şart</td>
                  <td className="p-4">Turizm işletme belgesi + prim gün sayısı</td>
                  <td className="p-4">2025 Kasım-Aralık ortalama istihdamın korunması</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            İmalat sanayi istihdamı koruma desteğini daha ayrıntılı
            incelemek isterseniz{" "}
            <Link
              href="/blog/istihdami-koruma-destek-programi-2026"
              className="text-red-700 underline"
            >
              İstihdamı Koruma Destek Programı yazımıza
            </Link>{" "}
            bakabilirsiniz.
          </p>
        </div>
      </section>

      {/* 6. YARARLANAMAMA */}
      <section id="yararlanamama" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Hangi Durumlarda Destek Kesilir veya Geri Alınır?
        </h2>
        <p className="mb-8 leading-8 text-gray-700">
          Destek otomatik gelmesine rağmen koşulsuz değil. Kanun ve SGK
          Genelgesi 2026/21, hem desteğin o ay hiç hesaplanmayacağı hem de
          daha önce ödenen tutarın geri alınacağı durumları ayrı ayrı
          tanımlıyor.
        </p>
        <p className="mb-4 font-semibold text-gray-800">
          Destek o ay için hesaplanmaz, eğer:
        </p>
        <ul className="ml-6 mb-8 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            Muhtasar ve prim hizmet beyannamesi süresinde verilmemişse.
          </li>
          <li>
            Sigorta primleri (işsizlik sigortası primi dahil) süresinde
            ödenmemişse.
          </li>
          <li>
            İşyerinin vadesi geçmiş prim, idari para cezası veya bunlara
            bağlı gecikme cezası/zammı borcu varsa. Bu borç 6183 sayılı
            Kanun&apos;un 48. maddesine göre tecil veya taksitlendirilmişse,
            taksitler düzenli ödendiği sürece destek devam ediyor.
          </li>
        </ul>
        <p className="mb-4 font-semibold text-gray-800">
          Daha önce ödenen tutar gecikme cezası ve gecikme zammıyla birlikte
          geri alınır, eğer:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            İşletme kapatılıp aynı faaliyetin farklı bir ad veya unvanla
            yeniden açıldığı tespit edilirse.
          </li>
          <li>
            İstihdam, ortaklık ilişkisi bulunan şirketler arasında destekten
            yararlanmak amacıyla kaydırılırsa.
          </li>
          <li>
            İşletme sahipliği, desteği elde etmek amacıyla değiştirilirse
            veya benzer muvazaalı işlemler tespit edilirse.
          </li>
          <li>
            Sigortasız çalıştırma, bildirilen sigortalının fiilen
            çalıştırılmaması veya prime esas kazancın eksik bildirilmesi
            tespit edilirse. Ancak eksik bildirim küçük ölçekli kalıyorsa ve
            SGK&apos;nın yapacağı yazılı uyarıdan sonraki 15 gün içinde
            düzeltilirse, destek kesilmeden devam ediyor.
          </li>
        </ul>
      </section>

      <div className="mt-16 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          💡 Uzman Notu
        </h3>
        <p className="leading-8 text-gray-700">
          Uygulamada en sık gözden kaçan nokta, bu desteğin otomatik
          gelmesine rağmen tamamen pasif bir süreç olmamasıdır. Destek
          tutarı, işletmenin o ay verdiği muhtasar ve prim hizmet
          beyannamesindeki prim gün sayısı üzerinden hesaplanıyor; bordroda
          yapılan küçük bir hata ya da geç verilen bir beyanname, o ay için
          desteğin hiç yansımamasına yol açabiliyor ve geriye dönük düzeltme
          her zaman mümkün olmuyor. Turizm işletmelerinin, diğer SGK prim
          teşviklerinden (genel prim indirimi, asgari ücret desteği gibi)
          aynı anda yararlanıyorsa, bu destekle birlikte toplam indirimin
          ödenecek prim tutarını aşamayacağını da hesaba katması gerekiyor.
          Yani bordro sürecini yöneten kişinin, her ay sadece &quot;prim
          ödendi mi&quot; değil, &quot;destek doğru ayda doğru tutarla
          yansıdı mı&quot; sorusunu da kontrol etmesi gerekiyor.
        </p>
      </div>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Turizm işletme belgenizin &quot;basit konaklama&quot; türünde
            olmadığını mutlaka doğrulayın, aksi halde kapsam dışı
            kalabilirsiniz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Destek 2026 Aralık ayında sona eriyor, 2027&apos;ye uzatıldığına
            dair şu an yürürlükte bir hüküm yok
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhtasar ve prim hizmet beyannamenizi her ay zamanında ve
            eksiksiz verin, destek buna bağlı hesaplanıyor
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Prim veya idari para cezası borcunuz varsa tecil/taksitlendirme
            yaptırmadan destekten yararlanamazsınız
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bu desteği, imalat sanayine yönelik farklı bir program olan
            istihdamı koruma desteğiyle karıştırmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Aynı ay başka prim teşviklerinden yararlanıyorsanız, bu destek
            kalan prim tutarını aşamaz
          </div>
        </div>
      </section>

      {/* 8. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.resmigazete.gov.tr/eskiler/2026/07/20260731-2.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              31 Temmuz 2026 Tarihli ve 33326 Sayılı Resmî Gazete, 7590
              Sayılı Kanun
            </a>
          </li>
          <li>
            <a
              href="https://www.sgk.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Sosyal Güvenlik Kurumu (SGK) Resmî Web Sitesi
            </a>
          </li>
          <li>
            <a
              href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=4447&MevzuatTur=1&MevzuatTertip=5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              4447 Sayılı İşsizlik Sigortası Kanunu (Mevzuat Bilgi Sistemi)
            </a>
          </li>
        </ul>
        <p className="mt-6 text-sm text-gray-500">
          SGK Genelgesi 2026/21&apos;in (4 Eylül 2026 tarihli) tam metni bu
          yazının hazırlandığı tarihte SGK&apos;nın genel kullanıma açık
          sayfalarında ayrı bir doküman olarak yayımlanmamıştı; genelgenin
          içeriği, kanun metnindeki hükümlerle birlikte değerlendirilmiştir.
          Güncel uygulama detayları için işyerinizin bağlı olduğu SGK il
          müdürlüğüyle teyitleşmeniz önerilir.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 SGK Prim Desteklerinizi ve Bordro Uyumunuzu Birlikte Kontrol
            Edelim
          </h3>
          <p className="leading-8 text-gray-700">
            Turizm işletmenizin bu destekten fiilen yararlanıp
            yararlanmadığını, hangi diğer SGK prim teşvikleriyle birlikte ne
            kadar prim avantajı elde ettiğinizi ve bordro süreçlerinizin
            desteği riske atmadan işleyip işlemediğini birlikte
            değerlendirebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçebilirsiniz.
            </Link>{" "}
            Ayrıca işletmenizin başka hangi devlet desteklerine uygun
            olduğunu görmek için{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Destek Uygunluk Analizi hizmetimizi
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
        </div>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Turizm Ücret Desteğinden yararlanmak için SGK&apos;ya ayrıca
              başvuru yapmam gerekiyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Kültür ve Turizm Bakanlığı, turizm işletmesi belgeli
              işletmelerin listesini her ay SGK&apos;ya bildiriyor, destek
              tutarı sistem tarafından otomatik hesaplanıp o ayki primlerden
              mahsup ediliyor. İşverenin ayrıca bir başvuru formu doldurması
              gerekmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek hangi ayları kapsıyor, Kasım-Aralık için hâlâ
              yararlanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Destek, 2026 yılı Mayıs-Aralık dönemini kapsıyor; yani
              Kasım ve Aralık ayları için de şartları sağlayan işletmelere
              uygulanmaya devam ediyor. Ancak kanun metninde bu desteğin
              2027&apos;ye uzatıldığına dair bir hüküm bulunmuyor; aksi yönde
              yeni bir düzenleme çıkmadıkça destek 2026 sonunda sona eriyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Her tür konaklama tesisi bu destekten yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Destek, 2634 sayılı Turizmi Teşvik Kanunu kapsamında
              turizm işletmesi belgesine sahip özel sektör konaklama
              tesislerini kapsıyor. Basit konaklama turizm işletme belgesi
              sahibi işletmeler ile kamuya ait tesisler kapsam dışında.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek tutarı tam olarak nasıl hesaplanıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Ay içinde uzun vadeli sigorta kollarına tabi bildirilen her
              sigortalının prim ödeme gün sayısı 116,67 TL ile çarpılıyor.
              30 gün tam çalışan bir sigortalı için bu, aylık yaklaşık
              3.500 TL&apos;ye karşılık geliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu destek, imalat sanayine yönelik istihdamı koruma
              desteğiyle aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Aynı kanunla düzenlenmiş olsalar da iki ayrı program.
              Turizm Ücret Desteği, konaklama tesislerine özel otomatik bir
              SGK prim mahsubu; imalat sanayi istihdamı koruma desteği ise
              farklı bir sektörü kapsayan, KOSGEB/İŞKUR üzerinden işleyen ve
              2028 sonuna kadar uzatılmış ayrı bir mekanizma.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Prim borcum varsa destekten yararlanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Vadesi geçmiş, ödenmemiş prim veya idari para cezası borcu
              bulunan işyerleri kural olarak yararlanamıyor. Ancak bu
              borçlar 6183 sayılı Kanun&apos;un 48. maddesine göre tecil
              veya taksitlendirilmişse ve taksitler düzenli ödeniyorsa
              destek kesilmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sigortasız işçi çalıştırdığım tespit edilirse ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Fondan karşılanan destek tutarı, gecikme cezası ve gecikme
              zammıyla birlikte geri alınır. Tek istisna, eksik bildirimin
              küçük ölçekli kalması ve SGK&apos;nın yazılı uyarısından
              sonraki 15 gün içinde düzeltilmesi durumudur; bu durumda
              destek kesilmeden devam eder.
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
          Turizm Ücret Desteği, turizm işletmesi belgeli konaklama
          tesislerine özel, ayrı bir başvuru gerektirmeyen ve 2026 yılı sonuna
          kadar devam eden otomatik bir SGK prim desteği. İşverenin tek
          yapması gereken, muhtasar ve prim hizmet beyannamesini zamanında ve
          eksiksiz vermek; desteğin devamı buna, prim borcu bulunmamasına ve
          kayıt dışı istihdamdan uzak durulmasına bağlı. 2027&apos;ye
          uzatılacağına dair bugün itibarıyla bir hüküm bulunmadığı için
          turizm işletmelerinin kalan Kasım-Aralık dönemini doğru
          değerlendirmesi, hem mevcut hakkını kaybetmemesi hem de 2027
          planlamasını gerçekçi yapması açısından önem taşıyor.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar ve Hizmetler
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/destek-uygunluk-analizi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • DESTEK UYGUNLUK ANALİZİ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Destek Uygunluk Analizi</h3>
          </Link>
          <Link
            href="/blog/sgk-tesvikleri-2026-hangi-isverenler-hangi-prim-destegi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SGK TEŞVİKLERİ • BORDRO • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">SGK Teşvikleri 2026: Hangi İşverenler Hangi Prim Desteğinden Yararlanabilir?</h3>
          </Link>
          <Link
            href="/blog/istihdami-koruma-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İSTİHDAM DESTEĞİ • İMALAT SANAYİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İstihdamı Koruma Destek Programı 2026</h3>
          </Link>
          <Link
            href="/blog/6111-sayili-kanun-genc-kadin-istihdam-tesviki-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İSTİHDAM TEŞVİKİ • SGK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">6111 Sayılı Kanun Genç ve Kadın İstihdam Teşviki</h3>
          </Link>
          <Link
            href="/blog/kidem-tazminati-ihbar-suresi-fesih-mevzuati-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İŞ HUKUKU • SGK VE BORDRO • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Kıdem Tazminatı, İhbar Süresi ve Fesih Mevzuatı 2026</h3>
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Turizm Ücret Desteğinden yararlanmak için SGK'ya ayrıca başvuru yapmam gerekiyor mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Kültür ve Turizm Bakanlığı, turizm işletmesi belgeli işletmelerin listesini her ay SGK'ya bildiriyor, destek tutarı sistem tarafından otomatik hesaplanıp o ayki primlerden mahsup ediliyor. İşverenin ayrıca bir başvuru formu doldurması gerekmiyor.",
                },
              },
              {
                "@type": "Question",
                name: "Destek hangi ayları kapsıyor, Kasım-Aralık için hâlâ yararlanabilir miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Destek, 2026 yılı Mayıs-Aralık dönemini kapsıyor; yani Kasım ve Aralık ayları için de şartları sağlayan işletmelere uygulanmaya devam ediyor. Ancak kanun metninde bu desteğin 2027'ye uzatıldığına dair bir hüküm bulunmuyor; aksi yönde yeni bir düzenleme çıkmadıkça destek 2026 sonunda sona eriyor.",
                },
              },
              {
                "@type": "Question",
                name: "Her tür konaklama tesisi bu destekten yararlanabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Destek, 2634 sayılı Turizmi Teşvik Kanunu kapsamında turizm işletmesi belgesine sahip özel sektör konaklama tesislerini kapsıyor. Basit konaklama turizm işletme belgesi sahibi işletmeler ile kamuya ait tesisler kapsam dışında.",
                },
              },
              {
                "@type": "Question",
                name: "Destek tutarı tam olarak nasıl hesaplanıyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ay içinde uzun vadeli sigorta kollarına tabi bildirilen her sigortalının prim ödeme gün sayısı 116,67 TL ile çarpılıyor. 30 gün tam çalışan bir sigortalı için bu, aylık yaklaşık 3.500 TL'ye karşılık geliyor.",
                },
              },
              {
                "@type": "Question",
                name: "Bu destek, imalat sanayine yönelik istihdamı koruma desteğiyle aynı şey mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Aynı kanunla düzenlenmiş olsalar da iki ayrı program. Turizm Ücret Desteği, konaklama tesislerine özel otomatik bir SGK prim mahsubu; imalat sanayi istihdamı koruma desteği ise farklı bir sektörü kapsayan, KOSGEB/İŞKUR üzerinden işleyen ve 2028 sonuna kadar uzatılmış ayrı bir mekanizma.",
                },
              },
              {
                "@type": "Question",
                name: "Prim borcum varsa destekten yararlanabilir miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vadesi geçmiş, ödenmemiş prim veya idari para cezası borcu bulunan işyerleri kural olarak yararlanamıyor. Ancak bu borçlar 6183 sayılı Kanun'un 48. maddesine göre tecil veya taksitlendirilmişse ve taksitler düzenli ödeniyorsa destek kesilmiyor.",
                },
              },
              {
                "@type": "Question",
                name: "Sigortasız işçi çalıştırdığım tespit edilirse ne olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fondan karşılanan destek tutarı, gecikme cezası ve gecikme zammıyla birlikte geri alınır. Tek istisna, eksik bildirimin küçük ölçekli kalması ve SGK'nın yazılı uyarısından sonraki 15 gün içinde düzeltilmesi durumudur; bu durumda destek kesilmeden devam eder.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
