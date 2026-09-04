import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TEKMER Nedir? Nasıl Başvurulur? 2026 Rehberi | Koray Akdağ",
  description:
    "TEKMER'in Teknopark'tan farkı, kimlerin başvurabileceği, kuluçka-hızlandırma süreci ve KOSGEB destek tutarlarıyla 2026 güncel Teknoloji Geliştirme Merkezi rehberi.",
  keywords: [
    "TEKMER nedir",
    "TEKMER nasıl başvurulur",
    "TEKMER destekleri",
    "TEKMER Teknopark farkı",
    "Teknoloji Geliştirme Merkezi",
    "KOSGEB TEKMER",
    "TEKMER kuluçka merkezi",
    "TEKMER hızlandırma programı",
    "TEKMER proje yazımı",
    "TEKMER danışmanlığı",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="TEKMER Nedir? Teknoloji Geliştirme Merkezlerine Nasıl Başvurulur?"
      description="KOSGEB'in girişimcilik ekosistemindeki en önemli yapılarından biri olan TEKMER'in ne olduğu, Teknopark'tan farkı, kimlerin başvurabileceği, ön kuluçka-kuluçka-hızlandırma sürecinin nasıl işlediği ve KOSGEB'in TEKMER'lere sağladığı destek tutarlarıyla 2026 güncel, uygulamaya dönük rehber."
      category="TEKMER • KOSGEB • 2026"
      date="2026"
      readTime="13 Dakika"
      coverImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="tekmer-nedir-basvuru-sureci-destekleri-2026"
    >
      {/* GİRİŞ */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          TEKMER Nedir?
        </h2>
        <p className="text-lg leading-9">
          Teknoloji tabanlı bir iş fikriniz var ama henüz şirketleşmediniz mi?
          Ya da kurduğunuz genç bir teknoloji şirketi düşük maliyetli bir
          ofise, mentorluğa ve yatırımcı ağına erişmeye mi ihtiyaç duyuyor?
          KOSGEB'in desteklediği <strong>TEKMER (Teknoloji Geliştirme
          Merkezi)</strong> yapıları, tam olarak bu ihtiyaca cevap vermek
          için kuruldu.
        </p>
        <p className="mt-6 text-lg leading-9">
          Ancak TEKMER, sıkça karıştırıldığı Teknopark'tan (Teknoloji
          Geliştirme Bölgesi) hem hukuki dayanağı hem de sunduğu avantajlar
          açısından farklı bir yapıdır. Bu rehberde TEKMER'in ne olduğunu,
          kimlerin başvurabileceğini, hangi desteklerin sağlandığını ve
          başvuru sürecinin adım adım nasıl işlediğini güncel kaynaklara
          dayanarak inceliyoruz.
        </p>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a href="#nedir" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            1. TEKMER Nedir? Hukuki Dayanağı ve Amacı
          </a>
          <a href="#surec" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            2. Ön Kuluçka, Kuluçka ve Hızlandırma Süreci
          </a>
          <a href="#teknopark-farki" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            3. TEKMER ile Teknopark Arasındaki Fark
          </a>
          <a href="#kim-isletir" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            4. TEKMER'i Kimler Kurar ve İşletir?
          </a>
          <a href="#kimler-yararlanir" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            5. Kimler TEKMER'den Yararlanabilir?
          </a>
          <a href="#imkanlar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            6. TEKMER Bünyesinde Sağlanan İmkanlar
          </a>
          <a href="#destek-tutarlari" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            7. KOSGEB'in TEKMER'e Sağladığı Destek Tutarları
          </a>
          <a href="#basvuru" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            8. TEKMER'e Nasıl Başvurulur? Adım Adım Süreç
          </a>
          <a href="#sonrasi" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            9. TEKMER Sonrası: Diğer KOSGEB Destekleriyle Bağlantı
          </a>
          <a href="#proje-yazimi" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            10. Proje Yazımı Neden Kritik?
          </a>
          <a href="#sss" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            11. Sık Sorulan Sorular
          </a>
          <a href="#sonuc" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            12. Sonuç
          </a>
        </div>
      </div>

      {/* 1 */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. TEKMER Nedir? Hukuki Dayanağı ve Amacı
        </h2>
        <p className="mb-6 text-lg leading-9">
          TEKMER (Teknoloji Geliştirme Merkezi), KOSGEB'in{" "}
          <strong>3624 sayılı Küçük ve Orta Ölçekli İşletmeleri Geliştirme
          ve Destekleme İdaresi Başkanlığı Kurulması Hakkında Kanun</strong>{" "}
          kapsamında yürüttüğü Teknoloji Merkezi Destek Programı çerçevesinde
          kurulan veya kurdurulan yapılardır. Üniversite ve araştırma
          merkezlerinin bilgi birikiminden yararlanılarak, yeni ve ileri
          teknolojiye dayalı iş fikirlerinin uygulamaya yönelik, üretime hazır
          hâle getirildiği ve işletmelerin kullanımına sunulduğu merkezler
          olarak tanımlanır.
        </p>
        <p className="mb-6 text-lg leading-9">
          Programın temel amacı; girişimcilik ekosisteminde yer alan
          üniversite, teknoloji geliştirme bölgesi, organize sanayi bölgesi,
          oda/borsa ve benzeri aktörlerin iş birliğiyle, Ar-Ge, inovasyon ve
          teknolojik girişimcilik alanında faaliyet gösterecek işletmelerin
          kurulmasını ve sürdürülebilir olmasını sağlamaktır. Bunu da{" "}
          <strong>ön kuluçka, kuluçka ve kuluçka sonrası (hızlandırma)</strong>{" "}
          hizmetlerini bir arada sunan fiziksel ve kurumsal bir yapı üzerinden
          yapar.
        </p>
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            TEKMER'in Öne Çıkan Özellikleri
          </h3>
          <ul className="ml-6 list-disc space-y-3 marker:text-orange-500">
            <li>Doğrudan KOSGEB tarafından desteklenen bir program yapısıdır.</li>
            <li>Üniversite, TGB veya kamu kurumu iş birliğiyle kurulur/işletilir.</li>
            <li>Şirketleşmemiş girişimcilere de kapı açık tutar (ön kuluçka).</li>
            <li>Ofis, laboratuvar, mentorluk ve eğitim hizmetlerini tek çatı altında sunar.</li>
            <li>Program kapsamında toplam destek süresi en fazla 10 yıldır.</li>
          </ul>
        </div>
      </section>

      {/* 2 */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Ön Kuluçka, Kuluçka ve Hızlandırma Süreci
        </h2>
        <p className="mb-8 text-lg leading-9">
          TEKMER'in en önemli özelliği, bir girişimin yolculuğunu tek bir
          çatı altında üç aşamada desteklemesidir. Bu üç aşama, hem KOSGEB'e
          hem de girişimciye başvuru ve değerlendirme sürecinde net bir yol
          haritası sunar.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
            <div className="mb-3 text-3xl font-black text-green-700">1</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Ön Kuluçka (Pre-Incubation)
            </h3>
            <p className="leading-7 text-sm">
              Henüz şirketleşmemiş, elinde yalnızca teknoloji veya yenilik
              tabanlı bir iş fikri bulunan girişimcilerin bu fikri
              doğrulamasına, iş modeline dönüştürmesine yönelik eğitim,
              danışmanlık ve mentorluk hizmetleri sunulur.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <div className="mb-3 text-3xl font-black text-blue-700">2</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Kuluçka (Incubation)
            </h3>
            <p className="leading-7 text-sm">
              İş fikri doğrulanan ve şirketleşen girişimin iş planının
              olgunlaştırılması, ekibin oluşturulması, ürünün geliştirilmesi
              ve gerekli kaynaklara (ofis, ekipman, danışmanlık) erişmesi
              sağlanır.
            </p>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <div className="mb-3 text-3xl font-black text-orange-700">3</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Kuluçka Sonrası (Hızlandırma)
            </h3>
            <p className="leading-7 text-sm">
              Büyüme potansiyeli taşıyan girişimlerin pazara açılması,
              yatırımcıyla eşleşmesi ve ölçeklenmesi için hızlandırma
              programları, demo day etkinlikleri ve mentor ağına erişim
              devreye girer.
            </p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section id="teknopark-farki" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. TEKMER ile Teknopark Arasındaki Fark
        </h2>
        <p className="mb-8 text-lg leading-9">
          TEKMER ve Teknopark, ikisi de teknoloji odaklı işletmelere hitap
          etse de farklı kanunlara dayanır ve farklı ihtiyaçlara cevap verir.
          Teknopark'ın (Teknoloji Geliştirme Bölgesi) sağladığı vergi ve KDV
          istisnalarını{" "}
          <Link
            href="/blog/teknopark-nedir-avantajlari"
            className="text-orange-600 underline"
          >
            Teknopark Nedir? Avantajları, Vergi İstisnaları ve Başvuru
            Rehberi
          </Link>{" "}
          yazımızda detaylı olarak ele almıştık. TEKMER'i bu yapıdan ayıran
          temel noktalar aşağıdaki tabloda özetlenmiştir.
        </p>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[750px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5 text-left">Kriter</th>
                <th className="p-5 text-left">TEKMER</th>
                <th className="p-5 text-left">Teknopark (TGB)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Hukuki Dayanak</td>
                <td className="p-5">3624 sayılı KOSGEB Kanunu</td>
                <td className="p-5">4691 sayılı Kanun</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Hedef Kitle</td>
                <td className="p-5">İş fikri aşamasındaki girişimciler ve genç teknoloji şirketleri</td>
                <td className="p-5">Kurulu, Ar-Ge/yazılım faaliyeti yürüten şirketler</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Vergi/KDV İstisnası</td>
                <td className="p-5">Doğrudan vergi istisnası sağlamaz</td>
                <td className="p-5">Gelir/kurumlar vergisi ve KDV istisnaları mevcuttur</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Temel Fayda</td>
                <td className="p-5">Düşük maliyetli ofis, mentorluk, kuluçka ve hızlandırma hizmetleri</td>
                <td className="p-5">Vergi teşvikleri, üniversite-sanayi iş birliği, ekosistem</td>
              </tr>
              <tr className="bg-white">
                <td className="p-5 font-semibold">Şirketleşme Şartı</td>
                <td className="p-5">Ön kuluçkada gerekmez</td>
                <td className="p-5">Şirket kurulmuş olmalı</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Birlikte de Değerlendirilebilir
          </h3>
          <p className="leading-8">
            Pek çok girişim, önce TEKMER'de iş fikrini olgunlaştırıp
            şirketleşir; ürün ve satış hacmi belirli bir olgunluğa ulaştığında
            ise Teknopark'a geçerek vergi ve KDV istisnalarından yararlanmayı
            hedefler. Bu nedenle iki yapı birbirinin rakibi değil, bir
            girişimin farklı büyüme evrelerine karşılık gelen tamamlayıcı
            araçlardır.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section id="kim-isletir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. TEKMER'i Kimler Kurar ve İşletir?
        </h2>
        <p className="mb-6 text-lg leading-9">
          TEKMER'ler tek başına KOSGEB tarafından açılmaz; KOSGEB'in
          program kapsamında yetkilendirdiği bir "işletici kuruluş"
          tarafından kurulur ve işletilir. KOSGEB'in güncel uygulama
          esaslarına göre işletici kuruluş olabilecek kurumlar şunlardır:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <ul className="ml-6 list-disc space-y-3 marker:text-orange-500">
              <li>Üniversiteler</li>
              <li>Teknoloji Geliştirme Bölgesi (Teknopark) yönetici şirketleri</li>
              <li>Teknoloji transfer ofisleri (TTO)</li>
              <li>Organize sanayi bölgesi (OSB) yönetimleri</li>
              <li>Kamu kurum ve kuruluşları</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <ul className="ml-6 list-disc space-y-3 marker:text-orange-500">
              <li>Ticaret ve sanayi odaları, borsalar</li>
              <li>İhracatçı birlikleri, araştırma merkezleri</li>
              <li>Vakıf, kooperatif, dernek ve birlikler</li>
              <li>Bireysel yatırımcılar ve tüzel kişi statüsündeki firmalar</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Önemli Şart
          </h3>
          <p className="leading-8">
            Üniversite veya Teknoloji Geliştirme Bölgesi dışındaki kurucuların
            (oda, dernek, OSB, yatırımcı vb.) mutlaka en az bir üniversite
            veya TGB ile iş birliği yapması gerekir. Bu, TEKMER'lerin
            akademik bilgi birikiminden kopmadan işlemesini garanti eden bir
            mekanizmadır.
          </p>
        </div>
      </section>

      {/* 5 */}
      <section id="kimler-yararlanir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Kimler TEKMER'den Yararlanabilir?
        </h2>
        <p className="mb-8 text-lg leading-9">
          TEKMER'in kapısı büyük Ar-Ge şirketlerinden çok, iş fikrini
          henüz olgunlaştıran girişimcilere ve genç teknoloji şirketlerine
          açıktır.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-green-700">
              Kimler Başvurmalı?
            </h3>
            <ul className="ml-6 list-disc space-y-3">
              <li>Teknoloji veya yenilik tabanlı bir iş fikri olan, henüz şirketleşmemiş bireyler</li>
              <li>Yeni kurulmuş Ar-Ge/inovasyon odaklı KOBİ'ler</li>
              <li>Üniversite öğrencisi/mezunu teknoloji girişimcileri</li>
              <li>Ürünü ticarileştirme aşamasına gelmiş start-up'lar</li>
              <li>Mentorluk, ofis ve yatırımcı ağına ihtiyaç duyan genç teknoloji şirketleri</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Temel Şart Nedir?
            </h3>
            <p className="leading-8">
              Başvuru sahibinin sunduğu iş fikri veya projenin{" "}
              <strong>teknoloji veya yenilik (inovasyon) tabanlı</strong>{" "}
              olması esastır. Her TEKMER'in kendi sektörel odağı, başvuru
              takvimi ve değerlendirme kriterleri farklılık gösterebilir;
              bu nedenle başvuru öncesinde hedeflenen TEKMER'in güncel
              şartlarının netleştirilmesi gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section id="imkanlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. TEKMER Bünyesinde Sağlanan İmkanlar
        </h2>
        <p className="mb-10 text-lg leading-9">
          TEKMER'in sunduğu değer, tek bir hibe kaleminden ibaret değildir.
          Asıl fayda, girişimin ihtiyaç duyduğu pek çok kaynağa tek bir çatı
          altında erişebilmesidir.
        </p>
        <div className="space-y-8">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🏢 Fiziksel Altyapı
            </h3>
            <p className="leading-8">
              Ortak çalışma alanları, atölyeler, etkinlik ve toplantı
              salonları, bazı TEKMER'lerde paylaşımlı laboratuvar ve test
              ekipmanı imkanları sağlanır. Bu imkanlar, genç bir girişimin
              piyasa koşullarında karşılayamayacağı maliyetleri önemli
              ölçüde azaltır.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🎓 Mentorluk, Eğitim ve Danışmanlık
            </h3>
            <p className="leading-8">
              İş modeli geliştirme, finansal okuryazarlık, pazarlama ve
              satış, fikri mülkiyet gibi konularda düzenli eğitim ve
              danışmanlık hizmetleri sunulur. Bu hizmetler girişimcinin
              deneyim eksikliğinden kaynaklanan hataları en aza indirmeyi
              amaçlar.
            </p>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Yatırımcı ve Network Erişimi
            </h3>
            <p className="leading-8">
              Demo day etkinlikleri, yatırımcı eşleştirme programları ve
              girişimcilik ekosistemindeki diğer aktörlerle bir araya
              gelme fırsatları, özellikle hızlandırma aşamasındaki
              girişimler için kritik önem taşır.
            </p>
          </div>
          <div className="rounded-2xl border border-purple-200 bg-purple-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              📄 KOSGEB Ar-Ge Teşviklerine Kapı Aralar
            </h3>
            <p className="leading-8">
              TEKMER bünyesindeki kuluçka firmaları, KOSGEB'in Ar-Ge, Ür-Ge
              ve İnovasyon Destek Programı gibi diğer teknoloji geliştirme ve
              yenilik destekleri kapsamında ayrıca değerlendirilme imkanına
              sahiptir.
            </p>
          </div>
        </div>
      </section>

      {/* 7 */}
      <section id="destek-tutarlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. KOSGEB'in TEKMER'e Sağladığı Destek Tutarları
        </h2>
        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Önemli Ayrım
          </h3>
          <p className="leading-8">
            Aşağıdaki tutarlar, KOSGEB'in doğrudan girişimciye değil,{" "}
            <strong>TEKMER'i kuran/işleten kuruluşa</strong> (üniversite,
            OSB, TGB yönetici şirketi vb.) sağladığı kurumsal desteklerdir.
            Girişimciye yansıyan fayda; bu kaynakla finanse edilen ofis,
            ekipman, mentorluk ve eğitim hizmetleri şeklinde dolaylı olarak
            gerçekleşir.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[750px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5 text-left">Destek Türü</th>
                <th className="p-5 text-left">Yıllık Üst Limit</th>
                <th className="p-5 text-left">Süre</th>
                <th className="p-5 text-left">Toplam Üst Limit</th>
                <th className="p-5 text-left">Geri Ödeme</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Kuruluş Desteği</td>
                <td className="p-5">6.506.000 TL</td>
                <td className="p-5">3 yıl</td>
                <td className="p-5">19.518.000 TL</td>
                <td className="p-5">Geri ödemesiz</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5 font-semibold">Performans Desteği</td>
                <td className="p-5">6.506.000 TL</td>
                <td className="p-5">7 yıl</td>
                <td className="p-5">45.542.000 TL</td>
                <td className="p-5">Geri ödemesiz</td>
              </tr>
              <tr className="bg-white">
                <td className="p-5 font-semibold">Hızlandırma Desteği</td>
                <td className="p-5">6.506.000 TL</td>
                <td className="p-5">10 yıl</td>
                <td className="p-5">65.060.000 TL</td>
                <td className="p-5">Geri ödemeli*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          * Hızlandırma Desteği kapsamındaki geri ödemeler, program
          tamamlandıktan 36 ay sonra 4 eşit taksitte başlar. Kuruluş Desteği
          üst sınırının %50'sine kadar teminat karşılığında erken ödeme
          talep edilebilir. Yıllık üst limitler her takvim yılı başında
          (TÜFE + Yurt İçi ÜFE)/2 oranında güncellenir; toplam program
          süresi 10 yılı aşamaz.
        </p>
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Program Sürekli Başvuruya Açık
          </h3>
          <p className="leading-8">
            Teknoloji Merkezi Destek Programı, dönemsel bir çağrı takvimine
            bağlı olmaksızın kuruluş süresince başvuruya açık tutulmaktadır.
            Bunun yanında KOSGEB, zaman zaman belirli bir tema etrafında özel
            çağrılar da açabilmektedir; örneğin{" "}
            <Link
              href="/blog/kosgeb-cop31-odakli-hizlandirma-destegi-cagrisi-2026"
              className="text-orange-600 underline"
            >
              COP31 Odaklı Hızlandırma Desteği Çağrısı
            </Link>{" "}
            kapsamında TEKMER işletici kuruluşlarına ve Teknokent yönetici
            şirketlerine ek destek imkanı sağlanmıştır.
          </p>
        </div>
      </section>

      {/* 8 */}
      <section id="basvuru" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. TEKMER'e Nasıl Başvurulur? Adım Adım Süreç
        </h2>
        <p className="mb-8 text-lg leading-9">
          Girişimci tarafında TEKMER'e başvuru süreci, genel hatlarıyla
          aşağıdaki adımlardan oluşur. Her TEKMER'in kendi başvuru formu ve
          değerlendirme takvimi olduğu için ilgili merkezin güncel
          duyurularının takip edilmesi önemlidir.
        </p>
        <div className="space-y-6">
          <div className="flex gap-5 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-500 font-bold text-white">1</div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Uygun TEKMER'i Belirleyin</h3>
              <p className="leading-7">
                Sektörünüze, bölgenize ve iş fikrinizin niteliğine uygun
                bir TEKMER seçin. TEKMER'ler genellikle belirli sektörlerde
                (yazılım, biyoteknoloji, tıbbi cihaz vb.) uzmanlaşmıştır.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-500 font-bold text-white">2</div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">İş Fikrinizi/İş Planınızı Hazırlayın</h3>
              <p className="leading-7">
                Teknoloji veya yenilik tabanlı iş fikrinizi somut bir iş
                planına dönüştürün: problem tanımı, çözüm, hedef pazar,
                gelir modeli ve ekip yapısı netleştirilmelidir.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-500 font-bold text-white">3</div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Çevrimiçi Başvuru Formunu Doldurun</h3>
              <p className="leading-7">
                İlgili TEKMER'in başvuru formu ve istenen belgeler (kimlik,
                varsa şirket evrakları, iş planı) eksiksiz şekilde
                hazırlanarak sisteme yüklenir.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-500 font-bold text-white">4</div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Ön İnceleme ve Değerlendirme Kurulu</h3>
              <p className="leading-7">
                Ön incelemeyi geçen başvurular Değerlendirme Kurulu'na
                sunulur; genellikle bir mülakat/sunum aşaması eşliğinde
                projenin teknik ve ticari yeterliliği değerlendirilir.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-500 font-bold text-white">5</div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Sözleşme ve Ofis Tahsisi</h3>
              <p className="leading-7">
                Kabul edilen girişimlerle sözleşme/taahhütname imzalanır ve
                girişimciye TEKMER bünyesinde çalışma alanı tahsis edilir.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-500 font-bold text-white">6</div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Ön Kuluçka → Kuluçka → Hızlandırma</h3>
              <p className="leading-7">
                Girişim, iş fikrinin olgunluk seviyesine göre ön kuluçka,
                kuluçka veya doğrudan hızlandırma aşamasına dahil edilir ve
                süreç boyunca mentorluk/danışmanlık desteğinden yararlanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 */}
      <section id="sonrasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. TEKMER Sonrası: Diğer KOSGEB Destekleriyle Bağlantı
        </h2>
        <p className="mb-8 text-lg leading-9">
          TEKMER, tek başına bir son nokta değil; girişimin daha büyük
          destek programlarına geçiş yapabildiği bir basamaktır. TEKMER
          bünyesinde olgunlaşan bir girişim, aynı zamanda KOSGEB'in diğer
          destek programlarına da başvurabilir:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
            className="rounded-2xl border border-green-200 bg-green-50 p-8 transition hover:border-orange-500 hover:shadow-md"
          >
            <h3 className="mb-3 text-xl font-bold text-green-700">
              KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı
            </h3>
            <p className="leading-7 text-sm text-gray-700">
              Herhangi bir tarihte başvurulabilen, 900.000 TL'ye varan destek
              üst limitiyle Ar-Ge ve inovasyon faaliyetlerini finanse eden
              program.
            </p>
          </Link>
          <Link
            href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026"
            className="rounded-2xl border border-blue-200 bg-blue-50 p-8 transition hover:border-orange-500 hover:shadow-md"
          >
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Ar-Ge Merkezi
            </h3>
            <p className="leading-7 text-sm text-gray-700">
              Personel sayısı ve Ar-Ge bütçesi büyüyen şirketler için 5746
              sayılı Kanun kapsamındaki vergi ve SGK avantajlarını sunan bir
              sonraki basamak.
            </p>
          </Link>
        </div>
        <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-8">
          <p className="leading-8">
            Ayrıca yeni kurulan veya kurulacak girişimler için KOSGEB'in ayrı
            bir çatı altında yürüttüğü{" "}
            <strong>Girişimci Destek Programı</strong> da 2026 yılında
            2.000.000 TL'ye varan destek üst limiti sunmaktadır; kadın, genç,
            engelli, gazi veya şehit yakını girişimciler için bu üst limit
            ayrıca 150.000 TL artırılmaktadır. TEKMER'de olgunlaşan bir iş
            fikri, bu programa başvuru için de güçlü bir zemin oluşturur.
          </p>
        </div>
      </section>

      {/* 10 */}
      <section id="proje-yazimi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Proje Yazımı Neden Kritik?
        </h2>
        <p className="mb-6 text-lg leading-9">
          TEKMER başvurusunda ve TEKMER sonrasında başvurulacak KOSGEB/TÜBİTAK
          destek programlarında en çok gözden kaçırılan konu, iş fikrinin
          kalitesinden çok, bu fikrin{" "}
          <strong>Değerlendirme Kurulu'nun anlayacağı bir dile ve
          formata</strong> nasıl döküldüğüdür.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-red-700">
              Zayıf Hazırlanmış Bir Başvuruda Ne Olur?
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-sm">
              <li>Teknik yenilik unsuru yeterince ortaya konamaz</li>
              <li>Pazar analizi ve gelir modeli inandırıcı bulunmaz</li>
              <li>Bütçe kalemleri mevzuata uygun gerekçelendirilmez</li>
              <li>Değerlendirme Kurulu'nda ret veya revizyon riski artar</li>
              <li>Aylarca süren bir sürecin baştan tekrarlanması gerekir</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-green-700">
              Profesyonel Proje Yazımının Katkısı
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-sm">
              <li>İş fikri, ilgili mevzuatın aradığı teknik/ticari çerçeveye oturtulur</li>
              <li>Bütçe ve gider kalemleri KOSGEB mevzuatına uygun gerekçelendirilir</li>
              <li>Pazar ve rekabet analizi somut verilerle desteklenir</li>
              <li>Başvuru, ilk sunumda kabul edilme ihtimalini önemli ölçüde artırır</li>
              <li>Girişimci, zamanını ürün geliştirmeye ayırabilir</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Tek Elden Danışmanlık ve Proje Yazımı
          </h3>
          <p className="leading-8 text-gray-700">
            Koray Akdağ / Sistem Global Danışmanlık bünyesinde, TEKMER
            başvurusundan iş planının hazırlanmasına, KOSGEB Ar-Ge/Ür-Ge
            İnovasyon ve Girişimci Destek Programı gibi sonraki adımların
            proje yazımına kadar süreç tek elden yürütülmektedir. Girişimci,
            başvuru sürecinin farklı aşamaları için ayrı ayrı danışman
            aramak yerine, tek bir uzman ekiple ilerleyebilir.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              TEKMER başvurunuz ve proje yazımı ihtiyacınız için bizimle
              iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-10 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              1. TEKMER ile Teknopark arasındaki temel fark nedir?
            </h3>
            <p className="leading-8">
              TEKMER, 3624 sayılı KOSGEB Kanunu kapsamında çalışan ve iş
              fikri/erken aşama girişimlere ofis, mentorluk ve kuluçka
              hizmeti sunan bir yapıdır; vergi istisnası sağlamaz. Teknopark
              ise 4691 sayılı Kanun kapsamında, kurulu şirketlere gelir/
              kurumlar vergisi ve KDV istisnaları sunan farklı bir yapıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              2. TEKMER'e başvurmak için şirket kurmuş olmam gerekir mi?
            </h3>
            <p className="leading-8">
              Hayır. Ön kuluçka aşaması, henüz şirketleşmemiş, elinde
              yalnızca teknoloji veya yenilik tabanlı bir iş fikri olan
              bireylere de açıktır. Şirketleşme genellikle kuluçka
              aşamasında gerçekleşir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              3. KOSGEB'in TEKMER'e verdiği destek doğrudan bana mı ödenir?
            </h3>
            <p className="leading-8">
              Hayır. Kuruluş, performans ve hızlandırma desteği tutarları
              TEKMER'i kuran/işleten kuruluşa (üniversite, OSB, TGB yönetici
              şirketi vb.) ödenir. Girişimciye yansıyan fayda; bu kaynakla
              finanse edilen ofis, ekipman, eğitim ve mentorluk hizmetleri
              şeklindedir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              4. TEKMER'de kalış süresinin bir sınırı var mı?
            </h3>
            <p className="leading-8">
              Program kapsamında TEKMER'e sağlanan toplam destek süresi en
              fazla 10 yıldır (3 yıl kuruluş + 7 yıl performans desteği,
              hızlandırma desteği bu süreyle birlikte değerlendirilir).
              Girişimcinin TEKMER bünyesinde kalabileceği süre ise ilgili
              merkezin kendi kuralları ve girişimin gelişim aşamasına göre
              belirlenir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5. Her sektörden girişimci TEKMER'e başvurabilir mi?
            </h3>
            <p className="leading-8">
              TEKMER'ler genellikle belirli sektörlerde (yazılım,
              biyoteknoloji, tıbbi cihaz, tarım teknolojileri vb.)
              uzmanlaşmıştır. Başvuru öncesinde iş fikrinize en uygun
              odağa sahip TEKMER'in belirlenmesi önemlidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              6. TEKMER'i kimler kurabilir?
            </h3>
            <p className="leading-8">
              Üniversiteler, Teknoloji Geliştirme Bölgesi yönetici şirketleri
              ve teknoloji transfer ofisleri doğrudan başvurabilirken; OSB
              yönetimleri, odalar, borsalar, dernekler ve bireysel
              yatırımcılar gibi diğer kurumların en az bir üniversite veya
              TGB ile iş birliği yapması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              7. TEKMER'den mezun olan bir girişim ne yapar?
            </h3>
            <p className="leading-8">
              Hızlandırma sürecini tamamlayan ve büyüyen bir girişim,
              genellikle Teknopark'a geçerek vergi/KDV istisnalarından
              yararlanmayı veya KOSGEB'in Ar-Ge Merkezi ile Ar-Ge/Ür-Ge
              İnovasyon Destek Programı gibi bir sonraki aşama
              programlarına başvurmayı değerlendirir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              8. TEKMER'e başvuru ücretli midir?
            </h3>
            <p className="leading-8">
              Başvurunun kendisi ücretsizdir. Ofis/çalışma alanı kullanımına
              ilişkin şartlar (ücretsiz süre, sembolik kira vb.) ise
              TEKMER'den TEKMER'e farklılık gösterebilir; bu nedenle ilgili
              merkezin güncel şartlarının teyit edilmesi gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 TEKMER Başvurusu ve Proje Yazımında Yanınızdayız
          </h3>
          <p className="leading-8 text-gray-700">
            Hangi TEKMER'in iş fikrinize uygun olduğunu belirlemek, iş
            planınızı Değerlendirme Kurulu'nun beklediği çerçevede
            hazırlamak ve TEKMER sonrasında hangi KOSGEB/TÜBİTAK destek
            programlarına yönelmeniz gerektiğini planlamak, başvurunuzun
            kabul edilme olasılığını doğrudan etkiler.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Girişiminiz için TEKMER ve proje yazımı sürecini birlikte
              değerlendirmemiz amacıyla bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sonuç: TEKMER Girişiminiz İçin Doğru Basamak mı?
        </h2>
        <p className="mb-6 text-lg leading-9">
          TEKMER, henüz iş fikri aşamasındaki girişimcilerden yeni kurulmuş
          teknoloji şirketlerine kadar geniş bir kitle için düşük maliyetli
          bir başlangıç noktası sunar. Ofis, mentorluk, eğitim ve yatırımcı
          erişimi gibi imkanları, özellikle sınırlı kaynakla yola çıkan
          girişimler için önemli bir avantaj oluşturur.
        </p>
        <p className="mb-6 text-lg leading-9">
          Ancak KOSGEB'in TEKMER'e sağladığı kurumsal destek tutarlarının
          doğrudan girişimciye ödenmediğini, başvuru kriterlerinin merkezden
          merkeze değiştiğini ve TEKMER'in Teknopark'ın yerini almadığını
          unutmamak gerekir. İki yapı, bir girişimin farklı büyüme
          evrelerine hizmet eden tamamlayıcı araçlardır.
        </p>
        <p className="mb-10 text-lg leading-9">
          Doğru TEKMER'i seçmek, iş fikrinizi doğru bir proje diline
          dökmek ve süreci baştan sona profesyonel bir danışmanlıkla
          yürütmek, başvurunuzun kabul edilme ve girişiminizin büyüme
          hızını doğrudan etkileyecektir.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/teknopark-nedir-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKNOPARK • AR-GE • YAZILIM</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Teknopark Nedir? Avantajları, Vergi İstisnaları ve Başvuru Rehberi</h3>
          </Link>
          <Link
            href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">AR-GE MERKEZİ • 5746 SAYILI KANUN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ar-Ge Merkezi Nedir? Nasıl Kurulur? 2026 Şartları, Vergi ve SGK Avantajları</h3>
          </Link>
          <Link
            href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
