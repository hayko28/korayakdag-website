import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yapay Zeka ve KVKK: Otomatik Karar Almada Kişisel Veri Sınırları Nedir? | Koray Akdağ",
  description: "CV eleme, kredi skorlama, müşteri segmentasyonu gibi yapay zeka destekli otomatik kararlarda KVKK'nın 11/1-g maddesi, KVKK Kurulu'nun 2024-2026 rehberleri ve şirketler için pratik uyum adımlarıyla güncel rehber.",
  keywords: [
    "yapay zeka KVKK",
    "otomatik karar alma KVKK",
    "münhasıran otomatik sistem itiraz hakkı",
    "KVKK madde 11 g bendi",
    "yapay zeka kişisel veri işleme",
    "işe alımda yapay zeka KVKK",
    "kredi skorlama KVKK",
    "KVKK yapay zeka tavsiyeleri",
    "üretken yapay zeka kişisel veri",
    "AI Act Türkiye KVKK",
  ],
  alternates: {
    canonical: "/blog/yapay-zeka-kvkk-otomatik-karar-alma-kisisel-veri-isleme-sinirlari",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yapay Zeka ve KVKK: Otomatik Karar Alma ile Kişisel Veri İşleme Sınırları"
      description="CV eleme, kredi skorlama, müşteri segmentasyonu ve fiyatlandırma gibi alanlarda kullanılan yapay zeka araçları, kişisel verileri münhasıran otomatik sistemlerle işleyip kişi aleyhine sonuç doğurduğunda KVKK'nın 11/1-g maddesi devreye giriyor. KVKK Kurulu'nun 2024-2026 döneminde yayımladığı güncel rehberler ışığında şirketlerin karşılaştığı riskler ve pratik uyum adımları."
      category="HUKUK DANIŞMANLIĞI • KVKK • YAPAY ZEKÂ • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="yapay-zeka-kvkk-otomatik-karar-alma-kisisel-veri-isleme-sinirlari"
      coverImage="https://images.unsplash.com/photo-1620121692029-d088224ddc74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Yapay Zeka ve KVKK Nerede Kesişiyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ KVKK m.11/1-g, ilgili kişiye kişisel verilerinin <strong>münhasıran otomatik sistemler vasıtasıyla analiz edilmesi</strong> suretiyle kendisi aleyhine bir sonucun ortaya çıkmasına <strong>itiraz etme</strong> hakkı tanır.</li>
          <li>✔ CV eleme, kredi skorlama, fiyatlandırma algoritması ve performans değerlendirme gibi araçlarda insan müdahalesi olmadan verilen kararlar bu maddenin kapsamına girebilir.</li>
          <li>✔ Sürece anlamlı bir insan müdahalesi (kararı değiştirebilecek gerçek bir inceleme) eklenirse, işlem &quot;münhasıran otomatik&quot; sayılmaktan çıkabilir; ancak bu, aydınlatma ve veri güvenliği yükümlülüklerini ortadan kaldırmaz.</li>
          <li>✔ KVKK Kurulu, 2024-2026 arasında yapay zekâya özel üç ayrı rehber/tavsiye metni yayımladı: Yapay Zekâ Alanında Tavsiyeler (2024), Üretken Yapay Zeka Rehberi - 15 Soruda (2025) ve İş Yerlerinde Üretken Yapay Zekâ Kullanımı (2026).</li>
          <li>✔ Türkiye&apos;de henüz yürürlükte, bağımsız bir &quot;Yapay Zeka Kanunu&quot; yok; boşluğu şimdilik KVKK ve genel mevzuat dolduruyor, TBMM&apos;de konuya ilişkin çalışmalar sürüyor.</li>
          <li>✔ Üçüncü taraf bir YZ aracı (CV tarama yazılımı, skorlama motoru vb.) kullanılıyorsa, tedarikçiyle veri işleyen sıfatını netleştiren bir sözleşme kurulması gerekir.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-onemli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Bu Konu Şirketler İçin Neden Kritik?
          </Link>
          <Link href="#kvkk-madde-11" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. KVKK Madde 11/1-g: Otomatik Karara İtiraz Hakkı
          </Link>
          <Link href="#kvkk-rehberleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. KVKK Kurulu&apos;nun Güncel Yapay Zeka Rehberleri
          </Link>
          <Link href="#turkiye-ab" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Türkiye&apos;de Ayrı Bir Yapay Zeka Kanunu Var mı?
          </Link>
          <Link href="#riskli-alanlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Hangi Kullanım Alanları Risk Taşır?
          </Link>
          <Link href="#uyum-adimlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Şirketler İçin Pratik Uyum Adımları
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Kimler İçin Öncelikli?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Adım Adım Uyum Süreci
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

      {/* 1. NEDEN ÖNEMLİ */}
      <section id="neden-onemli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Bu Konu Şirketler İçin Neden Kritik?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yapay zeka araçları artık sadece büyük teknoloji şirketlerinin
          değil, orta ölçekli birçok şirketin gündelik operasyonunun
          parçası. İK departmanı CV&apos;leri otomatik eleme yazılımıyla
          filtreliyor, finans ekibi kredi ya da tahsilat riskini skorlama
          modeliyle değerlendiriyor, pazarlama ekibi müşteri
          segmentasyonunu algoritmik olarak kuruyor, satış ekibi ise
          dinamik fiyatlandırma modelleriyle çalışıyor. Bu araçların ortak
          noktası şu: hepsi kişisel veri işliyor ve hepsi, en azından
          kısmen, insan müdahalesi olmadan bir sonuç üretiyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          KVKK açısından mesele, yapay zekânın kendisi değil; yapay
          zekânın kişisel veriyi nasıl işlediği ve ürettiği sonucun kişi
          üzerinde ne tür bir etki doğurduğu. Bir işe alım sürecinde
          otomatik olarak elenen bir aday, bir kredi başvurusunda
          otomatik olarak reddedilen bir müşteri ya da bir performans
          sisteminde düşük puanla etiketlenen bir çalışan, bu kararın
          nasıl verildiğini öğrenme ve gerekirse itiraz etme hakkına
          sahip. Bu hak soyut bir ilke değil, kanunun açık bir maddesine
          dayanıyor.
        </p>
        <p className="leading-8 text-gray-700">
          Konuyu daha da güncel kılan nokta, KVKK Kurulu&apos;nun son iki
          yılda konuya özel art arda üç ayrı rehber yayımlamış olması.
          Bu, Kurulun yapay zeka destekli veri işlemeyi artık aktif bir
          denetim ve yönlendirme alanı olarak gördüğünün açık bir
          göstergesi.
        </p>
      </section>

      {/* 2. KVKK MADDE 11 */}
      <section id="kvkk-madde-11" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. KVKK Madde 11/1-g: Otomatik Karara İtiraz Hakkı
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun 11.
          maddesi, ilgili kişilere veri sorumlusuna başvurarak
          kullanabileceği bir dizi hak tanır. Bu hakların sonuncusu olan
          (g) bendi, doğrudan yapay zeka destekli karar sistemlerini
          hedef alır. Madde metni şöyle:
        </p>
        <div className="rounded-2xl border-l-4 border-[#071A2F] bg-gray-50 p-8">
          <p className="text-lg font-medium italic leading-8 text-gray-800">
            &quot;İşlenen verilerin münhasıran otomatik sistemler
            vasıtasıyla analiz edilmesi suretiyle kişinin kendisi
            aleyhine bir sonucun ortaya çıkmasına itiraz etme&quot;
          </p>
          <p className="mt-4 text-sm text-gray-600">
            6698 Sayılı Kişisel Verilerin Korunması Kanunu, Madde 11/1-g
          </p>
        </div>
        <p className="mt-8 mb-6 leading-8 text-gray-700">
          Bu hükmün işlemesi için iki koşulun birlikte gerçekleşmesi
          gerekir:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li><strong>Münhasıran otomatik işleme:</strong> Karar, insan müdahalesi olmadan, tamamen algoritmanın/sistemin ürettiği çıktıya dayanarak alınmış olmalı.</li>
          <li><strong>Kişi aleyhine sonuç:</strong> Bu kararın, ilgili kişi üzerinde olumsuz, önemli bir etkisi (işe alınmama, kredi reddi, düşük performans notu, fiyat dezavantajı gibi) olmalı.</li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          KVKK Kurulu&apos;nun ve doktrindeki yaygın yorumun ortak
          noktası şu: &quot;münhasıran otomatik&quot; ifadesi, sürece
          hiçbir insan müdahalesi olmaması anlamına gelmiyor; kararı
          gerçek anlamda değiştirebilecek, anlamlı bir insan
          değerlendirmesi olup olmadığı belirleyici. Bir çalışanın,
          algoritmanın ürettiği listeyi sadece şeklen onaylayıp
          imzalaması, bu maddenin kapsamı dışına çıkmak için yeterli
          kabul edilmiyor.
        </p>
      </section>

      {/* KARIŞTIRMAYIN */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: &quot;Otomatik İşleme&quot; ile &quot;Münhasıran Otomatik Karar&quot;
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Otomatik İşleme (genel anlamda):</strong> Bir yazılımın veriyi toplaması, sınıflandırması veya bir öneri/puan üretmesi. Bu aşamada henüz kişi aleyhine bağlayıcı bir karar yok; sistem sadece bir girdi/öneri üretiyor.</li>
            <li><strong>Münhasıran Otomatik Karar (KVKK m.11/1-g kapsamı):</strong> Bu öneri veya puanın, gerçek bir insan incelemesinden geçmeden doğrudan kişi aleyhine sonuç doğuracak şekilde uygulanması. Örneğin skorlama motorunun düşük puan verdiği bir başvurunun, hiçbir insan görmeden otomatik olarak reddedilmesi.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Aradaki fark önemli çünkü uyum stratejisini belirliyor.
            Şirketin yapması gereken, yapay zekayı tamamen devre dışı
            bırakmak değil; algoritmanın çıktısı ile nihai kararın
            arasına, kararı gerçekten değiştirebilecek bir insan
            değerlendirme adımı yerleştirmek.
          </p>
        </div>
      </section>

      {/* 3. KVKK REHBERLERİ */}
      <section id="kvkk-rehberleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. KVKK Kurulu&apos;nun Güncel Yapay Zeka Rehberleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KVKK Kurulu, kanundaki genel hükmü somutlaştırmak amacıyla son
          iki yılda konuya özel üç ayrı doküman yayımladı. Şirketlerin
          uyum çalışmasını bu üç metne dayandırması, hem denetim
          risklerini azaltır hem de politika oluştururken referans
          alınabilecek somut bir çerçeve sağlar:
        </p>
        <div className="grid gap-6 md:grid-cols-1">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              📋 Yapay Zekâ Alanında Kişisel Verilerin Korunmasına Dair Tavsiyeler (17.07.2024)
            </h3>
            <p className="text-gray-700">
              Geliştirici/tasarımcı, üretici, hizmet sağlayıcı ve karar
              vericiler/denetçiler olmak üzere dört paydaş grubuna
              yönelik ilkesel tavsiyeler içerir: mümkün olduğunda
              anonimleştirme tercih edilmesi, etkilenen kişilerin
              katılımıyla yapılan risk değerlendirmesi, sistemin tüm
              yaşam döngüsünde hesap verebilirlik, otomatik kararlardan
              önce anlamlı insan gözetimi ve algoritmik önyargı/ayrımcılık
              riskinin önceden tespit edilip azaltılması.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              💬 Üretken Yapay Zeka ve Kişisel Verilerin Korunması Rehberi - 15 Soruda (24.11.2025)
            </h3>
            <p className="text-gray-700">
              ChatGPT, Copilot gibi kamuya açık üretken yapay zeka
              araçlarının bireysel kullanımına odaklanır. Aydınlatma
              yükümlülüğü, veri güvenliği ilkeleri ve kullanıcıların
              günlük hayatta hangi verileri bu araçlara girmemesi
              gerektiğine dair pratik uyarılar içerir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              🏢 İş Yerlerinde Üretken Yapay Zekâ Araçlarının Kullanımı (05.03.2026)
            </h3>
            <p className="text-gray-700">
              En güncel ve şirketler için en doğrudan uygulanabilir
              rehber. Çalışanların kurumsal onay olmadan, bireysel
              tercihle kullandığı üretken yapay zeka araçlarının
              kurumsal düzeyde izlenmesinin güçleştiğine dikkat çeker ve
              şirketlere farkındalık oluşturma, riskleri önceden
              tanımlama ve sorumlu kullanım politikası oluşturma çağrısı
              yapar.
            </p>
          </div>
        </div>
      </section>

      {/* 4. TÜRKİYE AB */}
      <section id="turkiye-ab" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Türkiye&apos;de Ayrı Bir Yapay Zeka Kanunu Var mı?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Avrupa Birliği, 2024 yılında kabul edilen ve kademeli olarak
          yürürlüğe giren Yapay Zeka Yasası (AI Act) ile işe alım, kredi
          skorlama gibi &quot;yüksek riskli&quot; yapay zeka
          uygulamalarına özel, doğrudan bağlayıcı ek yükümlülükler
          getirdi. Türkiye&apos;de ise bugün itibarıyla yürürlükte,
          bağımsız bir &quot;Yapay Zeka Kanunu&quot; bulunmuyor; bu
          boşluğu şimdilik KVKK ve ilgili genel mevzuat (Türk Ticaret
          Kanunu, Tüketicinin Korunması Hakkında Kanun gibi)
          dolduruyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Konu tamamen gündem dışı da değil. TBMM Yapay Zeka Araştırma
          Komisyonu, Mart 2026&apos;da yayımladığı raporda bir Türkiye
          Yapay Zeka Kurumu kurulmasını ve Avrupa Konseyi Yapay Zeka
          Çerçeve Sözleşmesi&apos;nin onaylanmasını önerdi. Bununla
          birlikte, farklı milletvekilleri tarafından TBMM&apos;ye
          sunulmuş birden fazla kanun teklifi de henüz yasalaşmadı.
          Ayrıca kamuoyuna duyurulan Türkiye Yapay Zeka Eylem
          Planı&apos;nda (2026-2030), vatandaşın haklarını koruyan bir
          düzenleyici ortam kurulması bir öncelik alanı olarak yer
          alıyor.
        </p>
        <p className="leading-8 text-gray-700">
          Şirketler için pratik sonuç şu: bağlayıcı, sektöre özel bir
          yapay zeka kanunu beklemek yerine, bugün yürürlükte olan
          KVKK&apos;ya ve KVKK Kurulu&apos;nun güncel rehberlerine göre
          uyum sağlamak gerekiyor. Yeni bir kanun çıktığında bu uyum
          çalışması, sıfırdan başlanacak bir yük değil, üzerine
          eklenecek bir temel olacak.
        </p>
      </section>

      {/* 5. RİSKLİ ALANLAR */}
      <section id="riskli-alanlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Hangi Yapay Zeka Kullanım Alanları KVKK Riski Taşır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Her yapay zeka kullanımı aynı düzeyde risk taşımıyor. Kişi
          üzerinde hukuki veya önemli bir etki doğuran, insan
          müdahalesinin zayıf kaldığı süreçler önceliklidir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kullanım Alanı</th>
                <th className="p-5">Otomatik Karar Riski</th>
                <th className="p-5">İşlenen Kişisel Veri</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İşe alımda CV/aday eleme</td>
                <td className="p-5">Yüksek</td>
                <td className="p-5">Özgeçmiş, eğitim, deneyim, bazen fotoğraf</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kredi/tahsilat skorlaması</td>
                <td className="p-5">Yüksek</td>
                <td className="p-5">Finansal geçmiş, ödeme davranışı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Performans değerlendirme</td>
                <td className="p-5">Orta-Yüksek</td>
                <td className="p-5">Çalışan verimlilik/davranış verisi</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Dinamik fiyatlandırma</td>
                <td className="p-5">Orta</td>
                <td className="p-5">Satın alma geçmişi, konum, cihaz verisi</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Müşteri segmentasyonu/pazarlama</td>
                <td className="p-5">Düşük-Orta</td>
                <td className="p-5">Demografik ve davranışsal veri</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* UZMAN NOTU */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, şirketlerin yapay
            zekayı sadece bir &quot;verimlilik aracı&quot; olarak görüp
            onu bir veri işleme faaliyeti olarak ayrıca değerlendirmeyi
            atlaması. Oysa bir CV tarama yazılımı devreye alındığı andan
            itibaren, o yazılım için de aydınlatma metninin
            güncellenmesi, gerekiyorsa VERBİS kaydının veri işleme
            amaçları listesine eklenmesi ve tedarikçinin veri işleyen
            sıfatının sözleşmeyle netleştirilmesi gerekir. Genel bir{" "}
            <Link href="/blog/kvkk-uyum-sureci-sirketler-icin-kisisel-verilerin-korunmasi-rehberi-2026" className="text-orange-600 underline">
              KVKK uyum çalışması
            </Link>{" "}
            yapılmış olması, yapay zeka araçlarının doğurduğu bu ek
            yükümlülükleri otomatik olarak kapsamaz; süreç, her yeni
            otomasyon aracı devreye girdiğinde ayrıca gözden
            geçirilmelidir.
          </p>
        </div>
      </section>

      {/* 6. UYUM ADIMLARI */}
      <section id="uyum-adimlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Şirketler İçin Pratik Uyum Adımları
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📢 Aydınlatma Yükümlülüğü</h3>
            <p className="text-gray-700">
              Adaylara, müşterilere veya çalışanlara, kararlarının
              yapay zeka destekli bir sistem tarafından işlendiği
              açıkça bildirilmeli. Aydınlatma metninde, hangi verilerin
              hangi amaçla otomatik sisteme girdi olarak verildiği
              anlaşılır dille açıklanmalı.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">✍️ Açık Rıza Gerekiyor mu?</h3>
            <p className="text-gray-700">
              Otomatik karar sürecinin kendisi için ayrı bir açık rıza
              şartı yok; asıl kural aydınlatma ve itiraz hakkının
              sağlanması. Ancak işlenen veri özel nitelikli kişisel veri
              (sağlık, etnik köken gibi) içeriyorsa veya işlemenin
              hukuki dayanağı sözleşme/kanuni yükümlülük dışında bir
              sebebe dayanıyorsa açık rıza gerekliliği ayrıca
              değerlendirilmeli.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🙋 İnsan Müdahalesi/İtiraz Mekanizması</h3>
            <p className="text-gray-700">
              Algoritmanın ürettiği sonucu gözden geçirebilecek, gerekçe
              isteyebilecek ve kararı değiştirebilecek yetkiye sahip bir
              insan onayı süreci kurulmalı. İlgili kişinin itirazını
              iletebileceği net bir başvuru kanalı tanımlanmalı.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📉 Veri Minimizasyonu</h3>
            <p className="text-gray-700">
              Yapay zeka sistemine, kararın amacıyla doğrudan ilgisi
              olmayan veriler (ör. adayın yaşı, medeni durumu gibi
              ayrımcılık riski taşıyan alanlar) girdi olarak
              verilmemeli; modelin hangi değişkenlere dayandığı
              belgelenmeli.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🤝 Tedarikçiyle Veri İşleyen Sözleşmesi</h3>
            <p className="text-gray-700">
              Üçüncü taraf bir yapay zeka aracı (CV tarama platformu,
              skorlama motoru, üretken YZ tabanlı müşteri hizmetleri
              yazılımı) kullanılıyorsa, o tedarikçi KVKK anlamında veri
              işleyen sıfatını taşır. Şirket ile tedarikçi arasında
              verinin nerede işlendiği, ne kadar süre saklandığı, yurt
              dışına aktarım yapılıp yapılmadığı ve güvenlik
              tedbirlerini netleştiren yazılı bir sözleşme kurulmalı.
              Bu konu, yapay zekaya geçiş sürecinin genel çerçevesini
              ele alan{" "}
              <Link href="/blog/kobiler-icin-yapay-zeka-danismanligi-surec-otomasyonu-nereden-baslamali" className="text-orange-600 underline">
                KOBİ&apos;ler İçin Yapay Zeka Danışmanlığı
              </Link>{" "}
              yazımızda değinilen tedarikçi seçim sürecinin, KVKK
              boyutuyla tamamlayıcısı niteliğinde.
            </p>
          </div>
        </div>
      </section>

      {/* 7. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kimler İçin Öncelikli?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🚀 Bu Uyumu Öncelikli Ele Alması Gerekenler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ İşe alım sürecinde CV eleme veya aday puanlama yazılımı kullanan şirketler</li>
              <li>✔ Kredi, tahsilat veya risk skorlaması yapan finans ve fintek şirketleri</li>
              <li>✔ Çalışan performansını otomatik metriklerle değerlendiren İK sistemleri</li>
              <li>✔ Üretken yapay zeka araçlarını (ChatGPT, Copilot gibi) kurumsal veri ile kullanan ekipler</li>
              <li>✔ Compliance/uyum yöneticileri ve KVKK sorumluları</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              ⏸️ Önceliği Görece Düşük Olan Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Tüm kararların halihazırda insan tarafından verildiği, yazılımın yalnızca raporlama/görselleştirme amaçlı kullanıldığı şirketler</li>
              <li>✔ Kişisel veri içermeyen, tamamen anonim/toplu veriyle çalışan analiz araçları</li>
              <li>✔ Yapay zekayı henüz hiçbir müşteri/çalışan/aday kararında kullanmayan, sadece iç doküman özetleme gibi düşük riskli işlerde kullanan şirketler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Adım Adım Uyum Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="text-base font-bold">1. Envanter Çıkarma</h3>
            <p className="mt-2 text-sm text-gray-600">Şirkette hangi süreçlerde hangi yapay zeka araçlarının kullanıldığının ve hangi verinin işlendiğinin tespiti</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">⚖️</div>
            <h3 className="text-base font-bold">2. Risk Değerlendirmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Her aracın münhasıran otomatik karar üretip üretmediğinin, insan müdahalesi düzeyinin belirlenmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📄</div>
            <h3 className="text-base font-bold">3. Aydınlatma ve Sözleşmeler</h3>
            <p className="mt-2 text-sm text-gray-600">Aydınlatma metinlerinin güncellenmesi, tedarikçilerle veri işleyen sözleşmelerinin kurulması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🙋</div>
            <h3 className="text-base font-bold">4. İtiraz Mekanizması</h3>
            <p className="mt-2 text-sm text-gray-600">İlgili kişinin itirazını iletebileceği kanalın ve insan onay adımının tanımlanması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔄</div>
            <h3 className="text-base font-bold">5. Periyodik Gözden Geçirme</h3>
            <p className="mt-2 text-sm text-gray-600">Yeni araç eklendiğinde veya mevzuat güncellendiğinde sürecin yeniden değerlendirilmesi</p>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>&quot;Sistem sadece öneri veriyor, kararı biz veriyoruz&quot; savunması, insan müdahalesi gerçek ve belgelenmiş değilse yeterli görülmeyebilir; onay adımının şeklen değil fiilen işlediği gösterilmeli.</li>
            <li>Üçüncü taraf bir yapay zeka aracının verileri yurt dışındaki sunucularda işlemesi, ayrı bir yurt dışına veri aktarımı değerlendirmesini gerektirir; bu konu sözleşme aşamasında netleştirilmeli.</li>
            <li>Algoritmanın hangi değişkenlere göre karar verdiği belgelenmezse, hem itiraz sürecinde hem olası bir KVKK Kurulu incelemesinde şirketin kararını savunması zorlaşır.</li>
            <li>KVKK Kurulu&apos;nun rehberleri bağlayıcı bir yönetmelik değil, tavsiye niteliğinde metinlerdir; ancak Kurul&apos;un denetim ve karar pratiğine yön verdiği için göz ardı edilmemesi gerekir.</li>
            <li>Yapay zeka mevzuatı hızla değişen bir alan; bugün uygulanan uyum çerçevesi, yeni bir kanun veya KVKK Kurulu kararı çıktığında güncellenmeye açık tutulmalı.</li>
          </ul>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6698.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                6698 Sayılı Kişisel Verilerin Korunması Kanunu (Madde 11) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.kvkk.gov.tr/Icerik/2036/Ilgili-Kisinin-Haklari" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                İlgili Kişinin Hakları - Kişisel Verileri Koruma Kurumu
              </a>
            </li>
            <li>
              <a href="https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/25a1162f-0e61-4a43-98d0-3e7d057ac31a.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Yapay Zekâ Alanındaki Gelişmeler ve KVKK Kapsamında Alınması Gereken Tedbirlere İlişkin Tavsiyeler (2024) - KVKK
              </a>
            </li>
            <li>
              <a href="https://www.kvkk.gov.tr/Icerik/8547/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-15-soruda" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Üretken Yapay Zeka ve Kişisel Verilerin Korunması Rehberi (15 Soruda) - KVKK
              </a>
            </li>
            <li>
              <a href="https://www.kvkk.gov.tr/Icerik/8674/is-yerlerinde-uretken-yapay-zeka-araclarinin-kullanimi" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                İş Yerlerinde Üretken Yapay Zekâ Araçlarının Kullanımı (2026) - KVKK
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
              Yapay zeka ile CV eleme yapmak KVKK&apos;ya aykırı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Kullanmanın kendisi aykırı değil; aykırılık riski, adayın
              aydınlatılmaması, itiraz mekanizması kurulmaması veya
              kararın hiçbir insan incelemesinden geçmeden otomatik
              olarak verilmesinden doğuyor. Aday, elendiğinde bu kararın
              yapay zeka destekli olduğunu bilmeli ve itiraz
              edebilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KVKK m.11/1-g kapsamına girmemesi için ne yapmalıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Algoritmanın ürettiği sonuç ile nihai karar arasına,
              kararı gerçekten değiştirebilecek yetkiye ve zamana sahip
              bir insan değerlendirmesi eklemek gerekir. Bu adım
              belgelenmeli; sadece şeklen &quot;onaylandı&quot; kutucuğu
              işaretlemek yeterli görülmeyebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yapay zeka aracı kullanmak için mutlaka açık rıza almam gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Her durumda değil. Asıl zorunluluk aydınlatma ve itiraz
              hakkının sağlanmasıdır. Açık rıza, işlenen veri özel
              nitelikli ise veya işlemenin dayandığı hukuki sebep
              (sözleşme, kanuni yükümlülük, meşru menfaat gibi) yeterli
              değilse ayrıca gerekebilir; bu değerlendirme veri türüne ve
              işleme amacına göre yapılmalı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Türkiye&apos;de yapay zekaya özel bağlayıcı bir kanun var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Bugün itibarıyla yürürlükte, bağımsız bir Yapay Zeka Kanunu
              bulunmuyor. TBMM&apos;de konuya ilişkin kanun teklifleri ve
              komisyon raporları mevcut, ancak yürürlükteki temel
              çerçeve hâlâ KVKK ve KVKK Kurulu&apos;nun yayımladığı
              rehberler.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              ChatGPT gibi üretken yapay zeka araçlarını iş yerinde kullanmak sorun mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Aracın kendisi değil, ona girilen veri sorun oluşturabilir.
              Müşteri bilgisi, çalışan verisi veya ticari sır niteliğinde
              içerik, kamuya açık üretken yapay zeka araçlarına
              girildiğinde, o verinin nerede saklandığı ve model eğitimi
              için kullanılıp kullanılmadığı belirsizleşir. KVKK Kurulu,
              bu konuda 2025 ve 2026&apos;da ayrı ayrı rehber yayımlayarak
              kurumsal kullanım politikası oluşturulmasını tavsiye etti.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Üçüncü taraf bir yapay zeka tedarikçisiyle çalışırken hangi sözleşme gerekli?
            </h3>
            <p className="leading-8 text-gray-700">
              Tedarikçi KVKK anlamında veri işleyen sıfatını taşıdığı
              için, verinin hangi amaçla işlendiğini, ne kadar
              saklandığını, yurt dışına aktarım olup olmadığını ve
              güvenlik tedbirlerini düzenleyen yazılı bir veri işleyen
              sözleşmesi kurulmalı. Bu sözleşme, hizmet sözleşmesinin
              ayrı bir eki olarak da düzenlenebilir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Yapay Zeka Araçlarınızın KVKK Uygunluğunu Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            İşe alım, kredi/risk skorlama, performans değerlendirme veya
            müşteri segmentasyonu süreçlerinizde kullandığınız (veya
            kullanmayı planladığınız) yapay zeka araçlarının aydınlatma,
            itiraz mekanizması ve tedarikçi sözleşmesi boyutuyla
            KVKK&apos;ya uygunluğunu birlikte gözden geçirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              KVKK ve yapay zeka danışmanlığı hizmetimiz kapsamında
              şirketinizin mevcut süreçlerini değerlendirmemiz için
              bizimle iletişime geçin.
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
          Yapay zeka araçları, doğru kurgulandığında şirketlere gerçek
          bir verimlilik avantajı sağlıyor. Ancak bu araçlar kişisel veri
          işlediği ve kişi üzerinde önemli sonuçlar doğurduğu sürece,
          KVKK&apos;nın 11/1-g maddesi ve KVKK Kurulu&apos;nun güncel
          rehberleri devre dışı kalmıyor. Türkiye&apos;de henüz ayrı bir
          yapay zeka kanunu olmaması, şirketleri bu konudan muaf tutmuyor;
          tam tersine, mevcut KVKK çerçevesinin yapay zeka özelinde nasıl
          yorumlanacağını KVKK Kurulu&apos;nun kendi rehberleri
          belirliyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, KVKK uyum
          danışmanlığı ve yapay zeka süreç otomasyonu hizmetlerimizi bir
          arada sunuyor; şirketinizin hem otomasyondan verim almasını hem
          de bu süreçte kişisel veri işleme yükümlülüklerini eksiksiz
          karşılamasını birlikte sağlıyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/kvkk-uyum-sureci-sirketler-icin-kisisel-verilerin-korunmasi-rehberi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HUKUK DANIŞMANLIĞI • KVKK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KVKK Uyum Süreci: Şirketler İçin Kişisel Verilerin Korunması Rehberi 2026</h3>
          </Link>
          <Link
            href="/blog/kobiler-icin-yapay-zeka-danismanligi-surec-otomasyonu-nereden-baslamali"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YAZILIM VE YAPAY ZEKÂ • SÜREÇ OTOMASYONU • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOBİ&apos;ler İçin Yapay Zeka Danışmanlığı ve Süreç Otomasyonu: Nereden Başlamalı?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Yapay zeka ile CV eleme yapmak KVKK'ya aykırı mı?","acceptedAnswer":{"@type":"Answer","text":"Kullanmanın kendisi aykırı değil; aykırılık riski, adayın aydınlatılmaması, itiraz mekanizması kurulmaması veya kararın hiçbir insan incelemesinden geçmeden otomatik olarak verilmesinden doğuyor. Aday, elendiğinde bu kararın yapay zeka destekli olduğunu bilmeli ve itiraz edebilmelidir."}},{"@type":"Question","name":"KVKK m.11/1-g kapsamına girmemesi için ne yapmalıyım?","acceptedAnswer":{"@type":"Answer","text":"Algoritmanın ürettiği sonuç ile nihai karar arasına, kararı gerçekten değiştirebilecek yetkiye ve zamana sahip bir insan değerlendirmesi eklemek gerekir. Bu adım belgelenmeli; sadece şeklen \"onaylandı\" kutucuğu işaretlemek yeterli görülmeyebilir."}},{"@type":"Question","name":"Yapay zeka aracı kullanmak için mutlaka açık rıza almam gerekir mi?","acceptedAnswer":{"@type":"Answer","text":"Her durumda değil. Asıl zorunluluk aydınlatma ve itiraz hakkının sağlanmasıdır. Açık rıza, işlenen veri özel nitelikli ise veya işlemenin dayandığı hukuki sebep (sözleşme, kanuni yükümlülük, meşru menfaat gibi) yeterli değilse ayrıca gerekebilir; bu değerlendirme veri türüne ve işleme amacına göre yapılmalı."}},{"@type":"Question","name":"Türkiye'de yapay zekaya özel bağlayıcı bir kanun var mı?","acceptedAnswer":{"@type":"Answer","text":"Bugün itibarıyla yürürlükte, bağımsız bir Yapay Zeka Kanunu bulunmuyor. TBMM'de konuya ilişkin kanun teklifleri ve komisyon raporları mevcut, ancak yürürlükteki temel çerçeve hâlâ KVKK ve KVKK Kurulu'nun yayımladığı rehberler."}},{"@type":"Question","name":"ChatGPT gibi üretken yapay zeka araçlarını iş yerinde kullanmak sorun mu?","acceptedAnswer":{"@type":"Answer","text":"Aracın kendisi değil, ona girilen veri sorun oluşturabilir. Müşteri bilgisi, çalışan verisi veya ticari sır niteliğinde içerik, kamuya açık üretken yapay zeka araçlarına girildiğinde, o verinin nerede saklandığı ve model eğitimi için kullanılıp kullanılmadığı belirsizleşir. KVKK Kurulu, bu konuda 2025 ve 2026'da ayrı ayrı rehber yayımlayarak kurumsal kullanım politikası oluşturulmasını tavsiye etti."}},{"@type":"Question","name":"Üçüncü taraf bir yapay zeka tedarikçisiyle çalışırken hangi sözleşme gerekli?","acceptedAnswer":{"@type":"Answer","text":"Tedarikçi KVKK anlamında veri işleyen sıfatını taşıdığı için, verinin hangi amaçla işlendiğini, ne kadar saklandığını, yurt dışına aktarım olup olmadığını ve güvenlik tedbirlerini düzenleyen yazılı bir veri işleyen sözleşmesi kurulmalı. Bu sözleşme, hizmet sözleşmesinin ayrı bir eki olarak da düzenlenebilir."}}]}) }}
      />
    </BlogLayout>
  );
}
