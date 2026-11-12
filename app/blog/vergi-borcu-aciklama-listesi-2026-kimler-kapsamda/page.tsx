import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Vergi Borcu Listesi 2026: Şirketiniz Açıklanacak mı? | Koray Akdağ",
  description: "VUK 597 sıra no'lu Tebliğ'e göre 5 milyon TL üzeri vergi borcu olan şirketler Aralık 2026'da kamuya açıklanıyor. Kapsam, tarihler, hariç tutulan borçlar ve şimdi yapılabilecekler; resmî kaynaklarla güncel rehber.",
  keywords: [
    "vergi borcu açıklama listesi 2026",
    "vergi borçlusu listesi",
    "VUK 597 sıra no'lu tebliğ",
    "5 milyon TL vergi borcu",
    "vergi borcu ilanı ne zaman",
    "kamuya açıklanan vergi borçluları",
    "vadesi geçmiş vergi borcu açıklama",
    "şirketin vergi borcu açıklanır mı",
  ],
  alternates: {
    canonical: "/blog/vergi-borcu-aciklama-listesi-2026-kimler-kapsamda",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Vergi Borcu Listesi 2026: Şirketiniz Aralık Ayında Açıklanacak Mükellefler Arasında mı?"
      description="10 Kasım 2026 tarihli ve 33426 sayılı Resmî Gazete'de yayımlanan 597 sıra no'lu Vergi Usul Kanunu Genel Tebliği'yle, her bir vergi dairesine 5 milyon TL ve üzeri borcu olan veya bu tutarda kesinleşmiş vergi/cezası bulunan mükellefler yeniden kamuya açıklanıyor. Kapsam, I-A/I-B liste ayrımı, hariç tutulan yapılandırma borçları, ilan takvimi ve şirketlerin şimdi yapabilecekleriyle resmî kaynaklara dayanan güncel rehber."
      category="VERGİ DANIŞMANLIĞI • VERGİ BORCU İLANI • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="vergi-borcu-aciklama-listesi-2026-kimler-kapsamda"
      coverImage="https://images.unsplash.com/photo-1641477176034-1a3e10c343a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Şirketinizin Vergi Borcu Riskini Birlikte Netleştirelim"
      ctaText="Aralık ayında açıklanacak listeye girme riskiniz olup olmadığını, yapılandırma veya tecil seçeneklerinizi ve genel vergi risk durumunuzu birlikte değerlendirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Vergi Borcu Listesi 2026&apos;da Ne Oluyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>10 Kasım 2026</strong> tarihli, <strong>33426 sayılı</strong> Resmî Gazete&apos;de yayımlanan <strong>597 sıra no&apos;lu VUK Genel Tebliği</strong> ile 2026 yılı açıklaması resmen duyuruldu.</li>
          <li>✔ Açıklama kapsamı: her bir vergi dairesine <strong>5.000.000 TL ve üzeri</strong> borcu olan veya bu tutarda <strong>kesinleşmiş vergi/cezası</strong> bulunan mükellefler.</li>
          <li>✔ Esas alınan borç: <strong>31/12/2025</strong> tarihi itibarıyla vadesi gelmiş ve <strong>20/11/2026</strong> itibarıyla hâlâ ödenmemiş vergi ve cezalar.</li>
          <li>✔ Kesinleşen tarhiyatlarda dönem: <strong>1/6/2025 - 31/5/2026</strong> arasında kesinleşen vergi incelemesi sonuçları.</li>
          <li>✔ İlan takvimi: <strong>1-15 Aralık 2026</strong> vergi dairesi panolarında, <strong>16-30 Aralık 2026</strong> arasında GİB&apos;in internet sitesinde.</li>
          <li>✔ Bazı borçlar kapsam dışı: 6736, 7020, 7143, 7256, 7326 ve 7440 sayılı kanunlar kapsamında hâlâ <strong>yapılandırması devam eden</strong> borçlar listeye girmiyor.</li>
          <li>✔ İlan, borcu ortadan kaldırmıyor; sadece kamuya açıklıyor. Tahsilat süreci (haciz, e-haciz vb.) ayrı ve bağımsız şekilde devam ediyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Vergi Borcunun Kamuya Açıklanması Nedir?
          </Link>
          <Link href="#597" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 597 Sıra No&apos;lu Tebliğ Tam Olarak Ne Diyor?
          </Link>
          <Link href="#listeler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. I-A ve I-B Listesi Arasındaki Fark
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. 2026 İlan Takvimi
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Karıştırmayın: İlan, Haciz veya İcra Değildir
          </Link>
          <Link href="#haric" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Hangi Borçlar Kapsam Dışı?
          </Link>
          <Link href="#riskler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Şirketler İçin Gerçek Risk Ne?
          </Link>
          <Link href="#ne-yapmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Listeye Girmemek İçin Şimdi Ne Yapılabilir?
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
          1. Vergi Borcunun Kamuya Açıklanması Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Vergi mahremiyeti, 213 sayılı Vergi Usul Kanunu&apos;nun temel
          ilkelerinden biri. Vergi daireleri, müfettişler ve diğer görevliler
          bir mükellefin vergi matrahını, gelirini veya servetini üçüncü
          kişilere açıklayamaz. Ancak bu kuralın kanunda açıkça düzenlenmiş
          bir istisnası var: <strong>VUK madde 5&apos;in dördüncü fıkrası</strong>,
          Hazine ve Maliye Bakanlığı&apos;na, mükelleflerin beyanlarını,
          kesinleşen vergi ve cezalarını, vadesi geçtiği halde ödenmemiş
          vergi ve cezalarını kamuya açıklama yetkisi veriyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yetki her yıl tek seferlik bir karar değil; Gelir İdaresi
          Başkanlığı, hangi tutarın üzerindeki borçların açıklanacağını ve
          açıklamanın hangi tarihlerde yapılacağını her yıl ayrı bir
          <strong> Vergi Usul Kanunu Genel Tebliği</strong> ile belirliyor.
          Uygulamanın usul çerçevesi ilk olarak 27 Ocak 2001 tarihli, 293
          sıra no&apos;lu tebliğle oluşturuldu; sonraki her yıl yayımlanan
          tebliğler (geçen yılki 583 sıra no&apos;lu tebliğ ve bu yılki 597
          sıra no&apos;lu tebliğ gibi) bu temel usule, güncel eşik ve
          tarihleri ekliyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Kasım 2026&apos;da konunun yeniden gündeme gelmesinin sebebi, 2026
          yılı açıklamasının usul ve tarihlerini belirleyen tebliğin
          yayımlanmış olması. Bu yazıda, hangi şirketlerin kapsamda olduğunu,
          açıklamanın ne zaman ve nerede yapılacağını ve ilan edilme
          riskinize karşı şimdiden yapabileceklerinizi resmî kaynaklara
          dayanarak anlatıyoruz.
        </p>
      </section>

      {/* 2. 597 TEBLİĞ */}
      <section id="597" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 597 Sıra No&apos;lu Tebliğ Tam Olarak Ne Diyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          10 Kasım 2026 tarihli ve 33426 sayılı Resmî Gazete&apos;de
          yayımlanan <strong>Vergi Usul Kanunu Genel Tebliği (Sıra No:
          597)</strong>, 2026 yılı açıklamasının çerçevesini çiziyor.
          Tebliğ, Hazine ve Maliye Bakanlığı (Gelir İdaresi Başkanlığı)
          tarafından hazırlandı ve dayanağı VUK madde 5/4.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📌 Eşik ve Kapsam</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>Her bir vergi dairesine <strong>5.000.000 TL ve üzeri</strong> borcu bulunan mükellefler</li>
              <li>Aynı tutarda <strong>kesinleşmiş vergi ve cezası</strong> bulunan mükellefler</li>
              <li>Eşik, &quot;her bir vergi dairesi&quot; bazında hesaplanıyor; birden fazla vergi dairesine kayıtlı mükelleflerde her daire ayrı değerlendiriliyor</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📅 Referans Tarihleri</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>Vadesi geçmiş borçlar: <strong>31/12/2025</strong> itibarıyla vadesi gelmiş, <strong>20/11/2026</strong> itibarıyla hâlâ ödenmemiş</li>
              <li>Kesinleşen tarhiyatlar: <strong>1/6/2025 - 31/5/2026</strong> arasında kesinleşen vergi incelemesi/ikmalen/re&apos;sen tarhiyatlar</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu eşik, bir önceki yılın açıklamasında (583 sıra no&apos;lu
            tebliğ, 2025) de aynı seviyedeydi: 5 milyon TL. 2024 yılı
            açıklamasında bu eşiği aşan <strong>56.086 mükellef</strong>
            {" "}kamuya açıklanmış ve toplam borç tutarı <strong>1,5 trilyon
            TL&apos;yi</strong> aşmıştı. Eşiğin sabit kalması, enflasyon
            ortamında aslında kapsamın her yıl biraz daha genişlediği
            anlamına geliyor; çünkü nominal tutarlar büyürken eşik sabit
            kalınca daha fazla şirket bu sınırı aşıyor.
          </p>
        </div>
      </section>

      {/* 3. LİSTELER */}
      <section id="listeler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. I-A ve I-B Listesi Arasındaki Fark
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          293 sıra no&apos;lu tebliğin belirlediği temel usule göre açıklama
          iki ayrı liste üzerinden yapılıyor. Bu ayrımı bilmek, şirketinizin
          hangi sebeple listede yer alabileceğini anlamanız için önemli:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Liste</th>
                <th className="p-5">İçeriği</th>
                <th className="p-5">Tipik Sebep</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">I-A Listesi</td>
                <td className="p-5">İkmalen, re&apos;sen veya idarece yapılan tarhiyatlar dolayısıyla kesinleşen vergi ve cezalar</td>
                <td className="p-5">Vergi incelemesi, tespit veya idari tarhiyat sonucu doğan ve itiraz/dava yolları tükenerek kesinleşen borç</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">I-B Listesi</td>
                <td className="p-5">Vadesi geçtiği halde ödenmemiş vergi ve cezalar</td>
                <td className="p-5">Beyan edilmiş ama ödenmemiş normal vergi borcu (ek bir inceleme/tarhiyat gerekmez)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bir şirket her iki listede de yer alabilir: hem geçmiş bir vergi
          incelemesinden kesinleşmiş bir borcu olabilir (I-A), hem de cari
          dönemde beyan edip ödeyemediği bir vergi borcu bulunabilir (I-B).
          I-B listesinde tahsil kabiliyeti bulunmayan alacaklar için
          açıklama sütununa ayrıca <strong>&quot;Alacağın tahsil kabiliyeti
          bulunmamaktadır.&quot;</strong> notu ekleniyor; bu not, borcun
          fiilen tahsil edilemeyecek nitelikte görüldüğünü (örneğin
          mükellefin aktifi olmadığını) belirtiyor, borcun ortadan kalktığı
          anlamına gelmiyor.
        </p>
      </section>

      {/* 4. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. 2026 İlan Takvimi
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🗓️</div>
            <h3 className="text-base font-bold">20 Kasım 2026</h3>
            <p className="mt-2 text-sm text-gray-600">Ödenmemiş borç tutarının tespit edileceği son referans tarihi</p>
          </div>
          <div className="rounded-xl border-2 border-orange-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">1-15 Aralık 2026</h3>
            <p className="mt-2 text-sm text-gray-600">Listeler, yurt genelindeki vergi dairelerinin ilan panolarında asılı duruyor</p>
          </div>
          <div className="rounded-xl border-2 border-emerald-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">16-30 Aralık 2026</h3>
            <p className="mt-2 text-sm text-gray-600">Listeler, Gelir İdaresi Başkanlığı&apos;nın internet sitesinde yayımlanıyor</p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Defterdarlıklar, kendi bölgelerindeki listeleri elektronik ortamda
          ve resmî bir üst yazıyla merkeze gönderiyor: I-A listeleri Gelir
          Yönetimi Daire Başkanlığı&apos;na, I-B listeleri ise Tahsilat ve
          İhtilaflı İşler Dairesi Başkanlığı&apos;na iletiliyor. Bu, şirket
          açısından teknik bir ayrıntı; önemli olan nokta, listenin fiilen
          kamuya açık hale geldiği <strong>Aralık ayı</strong> penceresi.
        </p>
      </section>

      {/* 5. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Karıştırmayın: İlan, Haciz veya İcra Değildir
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ İki Farklı Süreç, İki Farklı Sonuç
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Bu tebliğ duyurulduğunda sıkça yapılan bir hata, açıklamayı
            doğrudan bir tahsilat tehdidiyle (haciz, e-haciz, banka hesabına
            bloke) aynı şey gibi değerlendirmek. İkisi birbirinden bağımsız
            işliyor:
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Kamuya Açıklama (VUK m.5/4)</th>
                  <th className="p-4">Tahsilat İşlemleri (6183 sayılı Kanun)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Amacı</td>
                  <td className="p-4">Şeffaflık; kamuoyunu ve ticari muhatapları bilgilendirme</td>
                  <td className="p-4">Borcun fiilen tahsil edilmesi</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Hukuki sonucu</td>
                  <td className="p-4">Borcu artırmaz, azaltmaz; ödeme yükümlülüğünü değiştirmez</td>
                  <td className="p-4">Haciz, e-haciz, ihtiyati haciz gibi doğrudan icra sonuçları doğurabilir</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Zamanlaması</td>
                  <td className="p-4">Yılda bir kez, tebliğde belirlenen takvimde</td>
                  <td className="p-4">Borç vadesi geçtiği andan itibaren, tebliğ takviminden bağımsız olarak sürekli işleyebilir</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Dolayısıyla bir şirket Aralık ayındaki ilan listesinde adı
            geçmese bile, tahsilat işlemlerinden (örneğin daha düşük bir
            borç tutarı için başlatılmış bir e-haciz işleminden) muaf
            değildir. Benzer şekilde, listede adı geçmesi tek başına
            otomatik bir haciz anlamına gelmez; ama ticari itibar açısından
            ayrı bir risk taşır.
          </p>
        </div>
      </section>

      {/* 6. HARİÇ */}
      <section id="haric" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Hangi Borçlar Kapsam Dışı?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          597 sıra no&apos;lu tebliğin 3. maddesi, belirli borçları
          açıklama kapsamının dışında tutuyor. Şirketler için en pratik
          olanı, hâlâ geçerli bir yapılandırma kapsamında olan borçların
          listeye girmemesi:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li><strong>6736, 7020, 7143, 7256, 7326 ve 7440 sayılı kanunlar</strong> kapsamında yapılandırma başvurusu yapılmış ve bu yapılandırma hâlâ devam eden borçlar</li>
            <li>5216 ve 5393 sayılı kanunlara göre belediyeler ve bağlı kuruluşlarının 31/12/2004 öncesi vadeli, kabul edilmiş mahsup başvurusuna konu borçları</li>
            <li>6111 sayılı Kanun&apos;un 167. maddesi kapsamındaki, 31/12/2004 öncesi vadeli büyükşehir belediyesi ve bağlı idare borçları</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Buradaki vurgu şu: bir borç yapılandırılmış ve taksitler düzenli
          ödeniyorsa, o borç artık &quot;vadesi geçmiş, ödenmemiş&quot;
          kategorisinde değil. Ancak yapılandırma kapsamında bir taksit
          kaçırılır veya yapılandırma bozulursa, borç yeniden normal vadesi
          geçmiş borç statüsüne döner ve teorik olarak sonraki yıl
          açıklamalarına girebilir.
        </p>
      </section>

      {/* 7. RİSKLER */}
      <section id="riskler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Şirketler İçin Gerçek Risk Ne?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          İlanın kendisi doğrudan bir ceza veya ek vergi getirmiyor. Asıl
          risk, dolaylı ve ticari:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li>
            <strong>Banka ve finansman ilişkileri:</strong> Bankalar, kredi
            değerlendirmesi yaparken kamuya açık vergi borcu listelerini
            kontrol edebiliyor; listede yer almak, kredi yenileme veya limit
            artırım taleplerinde ek sorgulama ya da olumsuz not anlamına
            gelebilir.
          </li>
          <li>
            <strong>İhale ve kamu işlemleri:</strong> Kamu ihalelerine
            katılımda ve bazı teşvik/destek başvurularında vergi borcu
            olmama şartı aranıyor; kesinleşmiş ve ödenmemiş bir borcun
            kamuya açıklanması, bu süreçlerde ayrıca sorgulanmanıza yol
            açabilir.
          </li>
          <li>
            <strong>Ticari ortaklıklar ve tedarik zinciri:</strong>
            Distribütörler, tedarikçiler veya potansiyel yatırımcılar, due
            diligence sürecinde bu tür kamuya açık kayıtları tarıyor;
            listede görünmek, bir satın alma veya ortaklık görüşmesinde
            beklenmedik bir soruya dönüşebilir.
          </li>
          <li>
            <strong>İtibar ve basın takibi:</strong> Ekonomi basını, her yıl
            açıklanan listelerin toplam tutarını ve büyük mükellefleri haber
            yapıyor; belirli bir büyüklüğün üzerindeki şirketler için bu,
            istenmeyen bir görünürlük anlamına gelebiliyor.
          </li>
        </ul>
      </section>

      {/* 8. NE YAPMALI */}
      <section id="ne-yapmali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Listeye Girmemek İçin Şimdi Ne Yapılabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Referans tarihi 20 Kasım 2026 olduğu için, bu yazının yayımlandığı
          tarih itibarıyla hâlâ hareket alanı var. Şirketlerin
          değerlendirebileceği başlıca seçenekler:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">1. Tam veya kısmi ödeme</h3>
            <p className="text-gray-700">
              5 milyon TL eşiğinin altına inecek şekilde kısmi ödeme bile,
              o vergi dairesindeki toplam borcu eşiğin altına çekebilir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">2. Tecil ve taksitlendirme başvurusu</h3>
            <p className="text-gray-700">
              6183 sayılı Kanun madde 48 kapsamında vergi dairesine yapılan
              ve kabul edilen bir tecil/taksitlendirme talebi, borcu
              &quot;vadesi geçmiş, ödenmemiş&quot; statüsünden çıkarabilir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">3. Mevcut yapılandırma kapsamına giriş</h3>
            <p className="text-gray-700">
              Hâlâ başvuru imkânı açık bir yapılandırma veya varlık barışı
              benzeri düzenleme varsa, bu kapsama girilmesi borcu tebliğin
              3. maddesindeki istisna grubuna taşıyabilir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">4. Kesinleşmemiş tarhiyatlarda dava/itiraz süreci</h3>
            <p className="text-gray-700">
              I-A listesi sadece <strong>kesinleşen</strong> tarhiyatları
              kapsar; itiraz veya dava süreci devam eden, henüz
              kesinleşmemiş bir tarhiyat bu listeye girmez.
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
            <li>Eşik &quot;her bir vergi dairesi&quot; bazında hesaplanıyor; birden fazla ilde şubesi veya işyeri olan şirketler, farklı vergi dairelerindeki borçlarını topluca değil, dairesi bazında kontrol etmeli.</li>
            <li>&quot;Alacağın tahsil kabiliyeti bulunmamaktadır.&quot; notu, borcun silindiği veya zaman aşımına uğradığı anlamına gelmiyor; sadece o anki tahsil imkânının sınırlı görüldüğünü belirtiyor.</li>
            <li>Tebliğin kapsamı yalnızca 5 milyon TL ve üzerini içeriyor; bu tutarın altındaki borçlar kamuya açıklanmasa da vadesi geçmiş borç olmaktan çıkmıyor ve tahsilat işlemlerine konu olabiliyor.</li>
            <li>Yapılandırma kapsamındaki bir borçta taksit ödemesi geciktiğinde yapılandırma bozulabilir; bu durumda borç, önümüzdeki yılın açıklama kapsamına yeniden girebilir.</li>
            <li>Şirket birleşme, bölünme veya pay devri gibi işlemler öncesinde, hedef şirketin vergi dairesi nezdindeki durumu due diligence kapsamında ayrıca sorgulanmalı; kamuya açıklanan liste tek başına yeterli bir kontrol değil.</li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, I-A ve I-B listelerinin
            farklı sebeplerden doğduğunun ayırt edilmemesi. Bir şirket
            cari dönem beyanlarını düzenli ödediği için kendini &quot;güvende&quot;
            hissedebilir; ama yıllar önce yapılan bir vergi incelemesinden
            kalan, dava süreci tükenmiş ve kesinleşmiş bir tarhiyat, I-A
            listesi üzerinden hâlâ açıklama kapsamına girebilir. Bu yüzden
            yıl sonu öncesinde yalnızca cari borç durumuna değil, geçmiş
            vergi incelemelerinden kaynaklanan ve kesinleşmiş ama henüz
            ödenmemiş tarhiyatlara da ayrıca bakılması gerekiyor.
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
              <a href="https://www.resmigazete.gov.tr/eskiler/2026/11/20261110-6.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Vergi Usul Kanunu Genel Tebliği (Sıra No: 597), 10 Kasım 2026, RG 33426 - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.alomaliye.com/2001/01/27/vuk-293-vergi-usul-kanunu-genel-tebligi-sira-no-293/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Vergi Usul Kanunu Genel Tebliği (Sıra No: 293), 27 Ocak 2001 - temel usul tebliği
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.213.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                213 Sayılı Vergi Usul Kanunu, Madde 5 - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6183.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                6183 Sayılı Amme Alacaklarının Tahsil Usulü Hakkında Kanun, Madde 48 (Tecil) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Gelir İdaresi Başkanlığı - Resmî Duyurular (gib.gov.tr)
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
              Vergi borcu listesi 2026&apos;da gerçekten yayımlanacak mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. 10 Kasım 2026 tarihli ve 33426 sayılı Resmî Gazete&apos;de
              yayımlanan 597 sıra no&apos;lu VUK Genel Tebliği, 2026 yılı
              açıklamasının usul ve tarihlerini resmen belirledi. Listeler
              1-15 Aralık 2026 arasında vergi dairelerinde, 16-30 Aralık
              2026 arasında GİB&apos;in internet sitesinde yayımlanacak.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketimin vergi borcu kaç TL&apos;yi aşarsa listede çıkar?
            </h3>
            <p className="leading-8 text-gray-700">
              Her bir vergi dairesine olan borcunuz 5.000.000 TL veya daha
              fazlaysa ya da aynı tutarda kesinleşmiş vergi/cezanız varsa
              listeye girme riski var. Bu eşik, birden fazla vergi
              dairesine kayıtlı şirketlerde her daire için ayrı ayrı
              hesaplanıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Vadesi geçmiş borcumu ödersem listeye girmekten kurtulur muyum?
            </h3>
            <p className="leading-8 text-gray-700">
              Referans tarihi 20 Kasım 2026. Bu tarihe kadar borcunuzu
              tamamen öderseniz veya eşiğin altına inecek şekilde kısmen
              öderseniz, I-B listesi kapsamına girme riskiniz ortadan
              kalkar ya da azalır. Kabul edilmiş bir tecil/taksitlendirme
              başvurusu da aynı etkiyi sağlayabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Vergi incelemesine itiraz ettiğim, henüz kesinleşmemiş bir tarhiyat listeye girer mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. I-A listesi sadece dava ve itiraz yolları tükenerek
              kesinleşmiş vergi ve cezaları kapsıyor. Henüz yargı süreci
              devam eden veya idari itiraz aşamasındaki bir tarhiyat, bu
              listeye girmez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Listede adım çıkarsa hesabıma haciz gelir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Kamuya açıklama ile tahsilat işlemleri (haciz, e-haciz)
              hukuken ayrı süreçler. İlan tek başına bir haciz işlemi
              başlatmaz; ancak borcunuz zaten 6183 sayılı Kanun
              kapsamında tahsilat sürecinde olabilir ve bu süreç ilan
              takviminden bağımsız olarak devam eder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yapılandırma kapsamındaki borcum bu listeye girer mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, 6736, 7020, 7143, 7256, 7326 ve 7440 sayılı kanunlar
              kapsamında yapılandırılmış ve taksitleri düzenli ödenen
              borçlar, 597 sıra no&apos;lu tebliğin 3. maddesine göre
              açıklama kapsamının dışında tutuluyor.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin Vergi Borcu Riskini Birlikte Netleştirelim
          </h3>
          <p className="leading-8 text-gray-700">
            20 Kasım 2026 referans tarihine kadar hâlâ hareket alanınız
            olabilir. Şirketinizin vergi dairesi nezdindeki kesinleşmiş ve
            vadesi geçmiş borç durumunu,{" "}
            <Link href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026" className="text-orange-600 underline">
              Vergi Risk Analizi hizmetimiz
            </Link>{" "}
            kapsamında birlikte gözden geçirelim ve gerekirse tecil,
            taksitlendirme veya ödeme planlaması seçeneklerini
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
          Vergi borcunun kamuya açıklanması, her yıl tekrarlanan ama her
          seferinde yeniden gündeme gelen bir uygulama. 2026 yılı için 597
          sıra no&apos;lu tebliğ, eşiği 5 milyon TL&apos;de sabit tutarak,
          Aralık ayında vergi dairesi panoları ve GİB&apos;in internet
          sitesi üzerinden açıklamanın yapılacağını resmen duyurdu. İlan
          başlı başına bir yaptırım değil, ama ticari itibar, banka
          ilişkileri ve ihale süreçleri üzerinde somut bir etkisi olabilir.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirketlerin
          vergi dairesi nezdindeki kesinleşmiş ve vadesi geçmiş borç
          durumunu önceden tespit etmesine, uygun tecil/taksitlendirme
          veya yapılandırma seçeneklerini değerlendirmesine ve genel vergi
          risk yönetimini düzenli bir sürece bağlamasına yardımcı oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ & FİNANSAL YÖNETİM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ&apos;nin İhtiyacı?</h3>
          </Link>
          <Link
            href="/blog/varlik-barisi-2026-nedir-sartlari-oranlari-basvuru-sureci"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Varlık Barışı 2026 Nedir? Şartları, Oranları ve Başvuru Süreci</h3>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Vergi borcu listesi 2026'da gerçekten yayımlanacak mı?","acceptedAnswer":{"@type":"Answer","text":"Evet. 10 Kasım 2026 tarihli ve 33426 sayılı Resmî Gazete'de yayımlanan 597 sıra no'lu VUK Genel Tebliği, 2026 yılı açıklamasının usul ve tarihlerini resmen belirledi. Listeler 1-15 Aralık 2026 arasında vergi dairelerinde, 16-30 Aralık 2026 arasında GİB'in internet sitesinde yayımlanacak."}},{"@type":"Question","name":"Şirketimin vergi borcu kaç TL'yi aşarsa listede çıkar?","acceptedAnswer":{"@type":"Answer","text":"Her bir vergi dairesine olan borcunuz 5.000.000 TL veya daha fazlaysa ya da aynı tutarda kesinleşmiş vergi/cezanız varsa listeye girme riski var. Bu eşik, birden fazla vergi dairesine kayıtlı şirketlerde her daire için ayrı ayrı hesaplanıyor."}},{"@type":"Question","name":"Vadesi geçmiş borcumu ödersem listeye girmekten kurtulur muyum?","acceptedAnswer":{"@type":"Answer","text":"Referans tarihi 20 Kasım 2026. Bu tarihe kadar borcunuzu tamamen öderseniz veya eşiğin altına inecek şekilde kısmen öderseniz, I-B listesi kapsamına girme riskiniz ortadan kalkar ya da azalır. Kabul edilmiş bir tecil/taksitlendirme başvurusu da aynı etkiyi sağlayabilir."}},{"@type":"Question","name":"Vergi incelemesine itiraz ettiğim, henüz kesinleşmemiş bir tarhiyat listeye girer mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. I-A listesi sadece dava ve itiraz yolları tükenerek kesinleşmiş vergi ve cezaları kapsıyor. Henüz yargı süreci devam eden veya idari itiraz aşamasındaki bir tarhiyat, bu listeye girmez."}},{"@type":"Question","name":"Listede adım çıkarsa hesabıma haciz gelir mi?","acceptedAnswer":{"@type":"Answer","text":"Kamuya açıklama ile tahsilat işlemleri (haciz, e-haciz) hukuken ayrı süreçler. İlan tek başına bir haciz işlemi başlatmaz; ancak borcunuz zaten 6183 sayılı Kanun kapsamında tahsilat sürecinde olabilir ve bu süreç ilan takviminden bağımsız olarak devam eder."}},{"@type":"Question","name":"Yapılandırma kapsamındaki borcum bu listeye girer mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, 6736, 7020, 7143, 7256, 7326 ve 7440 sayılı kanunlar kapsamında yapılandırılmış ve taksitleri düzenli ödenen borçlar, 597 sıra no'lu tebliğin 3. maddesine göre açıklama kapsamının dışında tutuluyor."}}]}) }}
      />
    </BlogLayout>
  );
}
