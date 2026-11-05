import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "İşyerim Selden Zarar Gördü: KOSGEB'den Faizsiz Kredi Nasıl Alırım? (2026) | Koray Akdağ",
  description:
    "KOSGEB, 3 Kasım 2026 duyurusuyla sel ve taşkından etkilenen mikro ve küçük işletmelere faiz/kâr payı tamamen karşılanan işletme sermayesi kredisi sağlıyor. Mikro işletmede 500.000 TL, küçük işletmede 1.000.000 TL'ye kadar destek, 24 ay vade, 6 ay ödemesiz dönem, hasar tespiti şartı ve 31 Aralık 2026 son başvuru tarihiyle 2026 güncel rehber.",
  keywords: [
    "kosgeb sel desteği 2026",
    "kosgeb taşkın kredisi",
    "kosgeb acil durumlar desteği",
    "selden etkilenen işletmelere kredi",
    "kosgeb faizsiz kredi sel",
    "kosgeb hasar tespiti başvuru",
    "kosgeb acil destek kredisi 2026",
  ],
  alternates: {
    canonical: "/blog/kosgeb-sel-taskin-isletme-destegi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İşyerim Sel ve Taşkından Zarar Gördü: KOSGEB'den Faizsiz Kredi Nasıl Alırım?"
      description="KOSGEB, 3 Kasım 2026'da yaptığı duyuruyla ülkenin farklı bölgelerinde sel ve taşkından etkilenen mikro ve küçük işletmelere, faiz ve kâr payının tamamı kendisi tarafından karşılanan bir işletme sermayesi kredisi sağlayacağını bildirdi. Kimler başvurabilir, ne kadar destek alınır, hangi belgeler gerekir ve son başvuru tarihi ne zaman; resmî duyuruya dayanarak güncel rehber."
      category="KOSGEB • ACİL DURUM DESTEĞİ • 2026"
      date="Kasım 2026"
      readTime="11 Dakika"
      slug="kosgeb-sel-taskin-isletme-destegi-2026"
      coverImage="https://images.unsplash.com/photo-1657069344312-a500de53b566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      programDurumu="acik"
      sonBasvuruTarihi="31 Aralık 2026"
      ctaHeading="Hasar Tespiti ve Başvuru Dosyanızı Birlikte Hazırlayalım"
      ctaText="Selden zarar gören işletmenizin KOSGEB'e başvuru dosyasını, hasar tespit belgelerinden kredi talep formuna kadar eksiksiz hazırlamak başvurunun hızını belirler. İşletmenizin durumunu birlikte değerlendirelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        KOSGEB, 3 Kasım 2026 tarihli duyurusuyla, 2026 yılı içinde ülkenin
        farklı bölgelerinde meydana gelen sel ve taşkın felaketlerinden
        etkilenen mikro ve küçük ölçekli işletmelere yönelik bir finansman
        desteği açıkladı. İşyeri su baskınından zarar gören, üretimi veya
        hizmeti durma noktasına gelen işletme sahipleri için bu destek, faizi
        tamamen KOSGEB tarafından karşılanan bir işletme sermayesi kredisi
        anlamına geliyor. Bu yazıda, resmî duyuruya dayanarak kimlerin
        başvurabileceğini, destek tutarlarını, kredi şartlarını ve başvuru
        sürecini netleştiriyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Destek, sel veya taşkından etkilendiğini resmî makamlardan
            alınacak belgelerle kanıtlayan <strong>mikro ve küçük ölçekli</strong>{" "}
            işletmelere açık; orta ve büyük ölçekli işletmeler kapsam dışı.
          </li>
          <li>
            ✔ Küçük işletmeler işletme sermayesi için en fazla{" "}
            <strong>1.000.000 TL</strong>, mikro işletmeler en fazla{" "}
            <strong>500.000 TL</strong> krediye başvurabiliyor.
          </li>
          <li>
            ✔ Kredinin faiz veya kâr payının <strong>tamamı KOSGEB
            tarafından karşılanıyor</strong>; işletme sadece anaparayı geri
            ödüyor.
          </li>
          <li>
            ✔ Vade <strong>24 ay</strong>, ilk <strong>6 ay geri ödemesiz</strong>.
          </li>
          <li>
            ✔ Kredi kullanımında harcamalara ilişkin belge (fatura vb.)
            aranmıyor; işletme sermayesi serbestçe kullanılabiliyor.
          </li>
          <li>
            ✔ Başvurunun temel şartı, ilin valiliği veya ilçenin
            kaymakamlığınca yapılacak <strong>hasar tespiti</strong>; bu belge
            olmadan başvuru değerlendirilmiyor.
          </li>
          <li>
            ✔ Son başvuru tarihi <strong>31 Aralık 2026</strong>; anlaşmalı
            bankalar hasar tespit süreci tamamlandıktan sonra ayrıca
            duyurulacak.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#destek-ne" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Destek Tam Olarak Ne, Kimler Başvurabilir?
          </Link>
          <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Destek Tutarları ve Kredi Şartları
          </Link>
          <Link href="#hasar-tespiti" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Hasar Tespiti Nasıl Yapılıyor, Hangi Belgeler Gerekiyor?
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Başvuru Süreci Adım Adım Nasıl İşliyor?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Karıştırmayın: Bu Bir Hibe Değil, Faizsiz Kredi
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Geçmiş Afet Destekleriyle Karşılaştırma
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

      {/* 1. DESTEK NE */}
      <section id="destek-ne" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Destek Tam Olarak Ne, Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in 3 Kasım 2026 tarihli duyurusuna göre destek, 2026
          yılında ülkenin farklı bölgelerinde meydana gelen sel ve taşkın
          felaketlerinden işyeri doğrudan etkilenen mikro ve küçük ölçekli
          işletmelere yönelik. Duyuruda belirli bir il listesi verilmiyor;
          kapsam, coğrafi bir sınırlamadan ziyade{" "}
          <strong>işletmenin fiilen zarar görmüş olması ve bu zararın
          resmî makamlarca tespit edilmiş olması</strong> koşuluna
          dayandırılıyor. Bu, programın yalnızca belirli bir sel olayına özel
          değil, 2026 yılı boyunca yaşanan farklı sel/taşkın vakalarının
          tamamını kapsayacak şekilde tasarlandığını gösteriyor.
        </p>
        <p className="leading-8 text-gray-700">
          Başvuru için aranan temel şartlar şöyle özetlenebilir:
        </p>
        <ul className="ml-6 mt-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            İşletme, KOSGEB&apos;in tanımına göre <strong>mikro veya küçük
            ölçekli</strong> bir işletme olmalı (orta ve büyük ölçekli
            işletmeler bu destek kapsamında değil).
          </li>
          <li>
            İşyeri, 2026 yılı içinde yaşanan bir sel veya taşkın olayından
            doğrudan zarar görmüş olmalı.
          </li>
          <li>
            Zarar, valilik veya kaymakamlık gibi yetkili bir mülki idare
            amirliği tarafından resmî olarak tespit edilmiş olmalı.
          </li>
          <li>
            Zararın etkisinin hâlâ sürdüğü (işletmenin normal faaliyetine
            dönememiş olduğu) gösterilebilmeli.
          </li>
        </ul>
      </section>

      {/* 2. TUTARLAR */}
      <section id="tutarlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Destek Tutarları ve Kredi Şartları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Destek, işletme ölçeğine göre iki farklı üst limitle uygulanıyor.
          Her iki durumda da kredinin faiz veya kâr payının tamamı KOSGEB
          tarafından karşılanıyor; işletme sadece kullandığı anaparayı geri
          ödüyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Kriter</th>
                <th className="p-4">Mikro İşletme</th>
                <th className="p-4">Küçük İşletme</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Azami kredi tutarı</td>
                <td className="p-4">500.000 TL</td>
                <td className="p-4">1.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Kullanım amacı</td>
                <td className="p-4" colSpan={2}>İşletme sermayesi (harcama belgesi aranmıyor)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Faiz/kâr payı</td>
                <td className="p-4" colSpan={2}>Tamamı KOSGEB tarafından karşılanıyor</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Vade</td>
                <td className="p-4" colSpan={2}>24 ay</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">Geri ödemesiz dönem</td>
                <td className="p-4" colSpan={2}>İlk 6 ay</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kredinin faiz/kâr payı oranı ve bankalarla paylaşım esasları gibi
          teknik detaylar, duyuru tarihinde henüz netleşmemişti; KOSGEB bu
          konuları anlaşmalı bankalarla imzalanacak protokollerle
          belirleyecek. İşletme açısından önemli olan nokta, kullanacağı
          anaparanın dışında bir faiz yükümlülüğü taşımayacak olması.
        </p>
      </section>

      {/* 3. HASAR TESPİTİ */}
      <section id="hasar-tespiti" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Hasar Tespiti Nasıl Yapılıyor, Hangi Belgeler Gerekiyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu destekte başvurunun merkezinde harcama belgesi değil,{" "}
          <strong>hasar tespit belgesi</strong> var. KOSGEB, işletmenin
          beyanını değil, valilik veya kaymakamlık tarafından yapılan resmî
          tespiti esas alıyor. Pratikte süreç şöyle işliyor:
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">1.</span> İşyerinizin
            bulunduğu ilçenin kaymakamlığına veya il AFAD müdürlüğüne, selden
            zarar gördüğünüze dair başvuruda bulunun ve hasar tespit talep
            edin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">2.</span> Yetkili
            ekipler işyerinizde hasar tespiti yapar ve bu tespiti resmî bir
            belgeye (hasar tespit tutanağı/raporu) bağlar.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">3.</span> Bu belgeyi,
            işletme kayıt bilgileriniz (vergi levhası, ticaret sicil kaydı
            veya esnaf sicil kaydı gibi) ile birlikte KOSGEB&apos;e veya
            KOSGEB&apos;in yönlendirdiği kanal üzerinden iletin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">4.</span> KOSGEB, bu
            belgeleri değerlendirip anlaşmalı bankalara iletir; kredi tahsisi
            bankalar üzerinden gerçekleşir.
          </div>
        </div>
      </section>

      {/* 4. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Başvuru Süreci Adım Adım Nasıl İşliyor?
        </h2>
        <p className="mb-8 leading-8 text-gray-700">
          Duyuru tarihinde anlaşmalı banka isimleri henüz açıklanmamıştı;
          KOSGEB bunları hasar tespit süreci tamamlandıktan sonra ayrıca
          duyuracağını belirtti. Yine de işletmelerin şimdiden hazırlık
          yapabileceği adımlar var:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            Mülki idare amirliğine (valilik/kaymakamlık) hasar tespiti
            başvurusunu gecikmeden yapın; bu belge olmadan sürecin
            başlamayacağını unutmayın.
          </li>
          <li>
            İşletmenizin KOSGEB Veri Tabanı&apos;na kayıtlı ve aktif durumda
            olup olmadığını kontrol edin; KOSGEB&apos;in kredi destekli
            programlarının çoğunda bu kayıt ön şart oluyor.
          </li>
          <li>
            Vergi levhası, ticaret/esnaf sicil kaydı, imza sirküleri gibi
            standart işletme belgelerinizi güncel ve hazır tutun.
          </li>
          <li>
            KOSGEB&apos;in resmî duyuru sayfasını ve yerel KOSGEB müdürlüğünüzü
            (444 1 567) anlaşmalı banka listesi açıklanana kadar düzenli takip
            edin.
          </li>
        </ul>
      </section>

      {/* 5. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Karıştırmayın: Bu Bir Hibe Değil, Faizsiz Kredi
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            KOSGEB haberlerini takip eden işletme sahiplerinin en sık düştüğü
            yanılgı, her KOSGEB &quot;desteğini&quot; geri ödemesiz hibe
            sanmak. Bu programda durum farklı:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>
              <strong>Bu destek bir kredidir, hibe değildir.</strong> KOSGEB
              yalnızca kredinin faiz/kâr payı kısmını üstleniyor; anapara
              işletme tarafından 24 ay içinde (ilk 6 ayı ödemesiz) geri
              ödenecek.
            </li>
            <li>
              <strong>Girişimci Destek Programı, KOBİGEL gibi programlar
              farklı bir kategori.</strong> Bu programlarda belirli kalemler
              (makine, yazılım, personel gideri gibi) için geri ödemesiz hibe
              söz konusu olabiliyor; bu afet desteğinde ise amaç harcama
              değil, işletme sermayesi ihtiyacını hızlıca kapatmak.
            </li>
            <li>
              <strong>Hasar tespiti şart.</strong> Yalnızca &quot;işyerim
              selden etkilendi&quot; beyanı yeterli değil; valilik/kaymakamlık
              tespitine dayanmayan başvurular değerlendirmeye alınmıyor.
            </li>
          </ul>
        </div>
      </section>

      {/* 6. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Geçmiş Afet Destekleriyle Karşılaştırma
        </h2>
        <p className="mb-8 leading-8 text-gray-700">
          KOSGEB, geçmişte de deprem ve sel gibi afetlerden etkilenen
          işletmeler için benzer mantıkta acil destek kredileri
          uygulamıştı. Tutarlar ve vadeler afetin büyüklüğüne göre dönemsel
          olarak farklılık gösterse de, temel yapı hep aynı kaldı: faizi
          KOSGEB&apos;in karşıladığı, hasar tespitine dayanan bir işletme
          sermayesi kredisi.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Dönem/Olay</th>
                <th className="p-4">Azami Tutar</th>
                <th className="p-4">Ortak Özellik</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">2020 Elazığ-Malatya Depremi</td>
                <td className="p-4">100.000 TL (ilgili dönem)</td>
                <td className="p-4" rowSpan={3}>
                  Faizi KOSGEB karşılıyor, hasar tespitine dayanıyor,
                  ödemesiz dönem içeriyor
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">2023 Kahramanmaraş Depremi</td>
                <td className="p-4">Bölgeye göre kademeli (yüksek limitli)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">2026 Sel/Taşkın (bu program)</td>
                <td className="p-4">Mikro: 500.000 TL / Küçük: 1.000.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Buradaki amaç tutarları birebir kıyaslamak değil, mantığı
          göstermek: KOSGEB her afet sonrasında benzer bir çerçeveyi yeniden
          devreye alıyor. Bu nedenle işletmenizin bulunduğu bölgede ileride
          başka bir afet yaşanırsa, bu yazıda anlatılan başvuru mantığının
          büyük ölçüde tekrarlanacağını öngörebilirsiniz.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Bu tür afet kredilerinde en sık gözden kaçan nokta, hasar
            tespitinin başvurudan önce değil, başvurunun ön koşulu olarak
            alınması gerektiğidir. İşletme sahipleri çoğu zaman önce KOSGEB&apos;e
            veya bankaya başvurmayı, hasar tespiti işini sonraya bırakmayı
            deniyor; oysa süreç tam tersi işliyor. Mülki idare amirliğinden
            resmî tespiti almadan yapılan bir başvuru, dosya eksikliği
            nedeniyle zaman kaybına yol açar. Zararın büyüklüğü ile
            başvurulacak tutar (mikro/küçük işletme sınırı) arasındaki
            uyumun da başvuru öncesi netleştirilmesi, sürecin aracı bankaya
            iletildikten sonra tekrar düzeltme yapılmasını önler.
          </p>
        </div>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hasar tespiti için valilik/kaymakamlığa başvuruyu geciktirmeyin,
            son başvuru tarihi 31 Aralık 2026
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bu bir kredi, hibe değil; anaparayı 24 ay içinde geri ödeyecek
            nakit akışınızı planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Mikro/küçük işletme ölçek sınırınızı KOSGEB&apos;in güncel KOBİ
            tanımına göre doğrulayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Anlaşmalı banka listesi açıklanmadan kredi başvurusu
            yapamayacağınızı bilin, bu süre zarfında belgelerinizi hazırlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faiz/kâr payı oranı ve ek şartlar banka protokolleriyle
            netleşecek, güncellemeleri KOSGEB&apos;in resmî sayfasından takip
            edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Üçüncü taraf haber sitelerindeki eski (2020, 2023) tutarları bu
            programla karıştırmayın
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
              href="https://www.kosgeb.gov.tr/site/tr/genel/detay/9505/kosgebden-sel-ve-taskin-felaketlerinden-etkilenen-kobilere-faizkr-payi-destegi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB&apos;den Sel ve Taşkın Felaketlerinden Etkilenen
              KOBİ&apos;lere Faiz/Kâr Payı Desteği - Resmî Duyuru (03.11.2026)
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Destek Programları ve Kredi Faiz Desteği Mevzuatı
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB Resmî Web Sitesi
            </a>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Hasar Tespiti ve Başvuru Dosyanızı Birlikte Hazırlayalım
          </h3>
          <p className="leading-8 text-gray-700">
            Bu destekten yararlanmak için hasar tespit belgesi, işletme kayıt
            belgeleri ve KOSGEB Veri Tabanı kaydınızın eksiksiz ve zamanında
            hazır olması gerekiyor. İşletmenizin ölçeğine ve zararının
            kapsamına göre süreci birlikte planlayabiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçebilirsiniz.
            </Link>{" "}
            Ayrıca{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Destek Uygunluk Analizi hizmetimizi
            </Link>{" "}
            ve{" "}
            <Link href="/kosgeb-danismanlik" className="text-orange-600 underline">
              KOSGEB danışmanlığı hizmetimizi
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
              Orta veya büyük ölçekli bir işletme bu destekten yararlanabilir
              mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Destek, KOSGEB&apos;in tanımına göre yalnızca mikro ve
              küçük ölçekli işletmelere açık. Orta ve büyük ölçekli
              işletmeler bu program kapsamına girmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hasar tespiti olmadan başvuru yapabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Başvurunun ön şartı, valilik veya kaymakamlık gibi
              yetkili mülki idare amirliğince yapılan resmî hasar tespitidir.
              Bu belge olmadan başvurunuz değerlendirmeye alınmaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kredinin faizini gerçekten ben ödemeyecek miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, krediyi kullandığınız anaparayı geri ödüyorsunuz ancak
              faiz veya kâr payının tamamını KOSGEB üstleniyor. Kesin oran ve
              uygulama detayları, KOSGEB&apos;in anlaşmalı bankalarla
              imzalayacağı protokollerle netleşecek.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kredi kullanımında fatura veya harcama belgesi sunmam gerekiyor
              mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Resmî duyuruya göre bu kredi kullanımında harcamalara
              ilişkin belge aranmıyor; destek, işletme sermayesi ihtiyacınızı
              hızlıca karşılamak amacıyla tasarlandı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hangi bankadan başvuracağımı nasıl öğrenirim?
            </h3>
            <p className="leading-8 text-gray-700">
              Duyuru tarihinde anlaşmalı banka isimleri henüz açıklanmamıştı.
              KOSGEB, hasar tespit süreçleri tamamlandıktan sonra bankaları
              ayrıca duyuracak; bu nedenle KOSGEB&apos;in resmî duyuru
              sayfasını veya yerel KOSGEB müdürlüğünü takip etmeniz gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Son başvuru tarihi ne zaman?
            </h3>
            <p className="leading-8 text-gray-700">
              KOSGEB&apos;in resmî duyurusuna göre son başvuru tarihi 31
              Aralık 2026 olarak belirlendi.
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
          KOSGEB&apos;in sel ve taşkından etkilenen işletmelere yönelik 2026
          desteği, afet sonrası nakit akışı sıkışan mikro ve küçük
          işletmeler için pratik bir çözüm sunuyor: faizi tamamen KOSGEB
          tarafından karşılanan, harcama belgesi gerektirmeyen bir işletme
          sermayesi kredisi. Ancak bunun bir hibe değil, geri ödemeli bir
          kredi olduğunu ve başvurunun önce resmî hasar tespitine
          dayandığını unutmamak gerekiyor. 31 Aralık 2026&apos;ya kadar
          başvuru imkânı olan bu destekten yararlanmak isteyen işletme
          sahiplerinin ilk adımı, vakit geçirmeden mülki idare amirliğine
          hasar tespiti başvurusunda bulunmak olmalı.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar ve Hizmetler
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/kosgeb-danismanlik"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • KOSGEB DANIŞMANLIĞI</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Danışmanlığı</h3>
          </Link>
          <Link
            href="/destek-uygunluk-analizi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • DESTEK UYGUNLUK ANALİZİ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Destek Uygunluk Analizi</h3>
          </Link>
          <Link
            href="/blog/kosgeb-destekleyiciler-yonetmeligi-kaldirildi-hibeler-bitiyor-mu"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • MEVZUAT GÜNDEMİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB&apos;de 23 Yıllık Yönetmelik Kaldırıldı</h3>
          </Link>
          <Link
            href="/blog/kosgeb-girisimci-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • GİRİŞİMCİ DESTEK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Girişimci Destek Programı 2026</h3>
          </Link>
          <Link
            href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • KAPASİTE GELİŞTİRME • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı</h3>
          </Link>
          <Link
            href="/blog/kobi-tanimi-2026-siniflandirma-ve-destek-uygunlugu"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOBİ TANIMI • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">2026 Güncel KOBİ Tanımı ve Sınıflandırma</h3>
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
                name: "Orta veya büyük ölçekli bir işletme bu destekten yararlanabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Destek, KOSGEB'in tanımına göre yalnızca mikro ve küçük ölçekli işletmelere açık. Orta ve büyük ölçekli işletmeler bu program kapsamına girmiyor.",
                },
              },
              {
                "@type": "Question",
                name: "Hasar tespiti olmadan başvuru yapabilir miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Başvurunun ön şartı, valilik veya kaymakamlık gibi yetkili mülki idare amirliğince yapılan resmî hasar tespitidir. Bu belge olmadan başvurunuz değerlendirmeye alınmaz.",
                },
              },
              {
                "@type": "Question",
                name: "Kredinin faizini gerçekten ben ödemeyecek miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, krediyi kullandığınız anaparayı geri ödüyorsunuz ancak faiz veya kâr payının tamamını KOSGEB üstleniyor. Kesin oran ve uygulama detayları, KOSGEB'in anlaşmalı bankalarla imzalayacağı protokollerle netleşecek.",
                },
              },
              {
                "@type": "Question",
                name: "Kredi kullanımında fatura veya harcama belgesi sunmam gerekiyor mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Resmî duyuruya göre bu kredi kullanımında harcamalara ilişkin belge aranmıyor; destek, işletme sermayesi ihtiyacınızı hızlıca karşılamak amacıyla tasarlandı.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi bankadan başvuracağımı nasıl öğrenirim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Duyuru tarihinde anlaşmalı banka isimleri henüz açıklanmamıştı. KOSGEB, hasar tespit süreçleri tamamlandıktan sonra bankaları ayrıca duyuracak; bu nedenle KOSGEB'in resmî duyuru sayfasını veya yerel KOSGEB müdürlüğünü takip etmeniz gerekiyor.",
                },
              },
              {
                "@type": "Question",
                name: "Son başvuru tarihi ne zaman?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "KOSGEB'in resmî duyurusuna göre son başvuru tarihi 31 Aralık 2026 olarak belirlendi.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
