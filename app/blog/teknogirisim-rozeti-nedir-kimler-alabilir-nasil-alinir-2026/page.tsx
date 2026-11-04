import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Teknogirişim Rozeti Nedir, Kimler Alabilir, Nasıl Alınır? (2026) | Koray Akdağ",
  description:
    "Sanayi ve Teknoloji Bakanlığı'nın Teknogirişim Rozeti: başvuru şartları, 15 yıl kuralı, TGB/TEKMER/BiGG ile doğrudan belgelendirme, 15 iş günü itiraz, 3 yıllık geçerlilik ve KOSGEB Yapay Zeka Kredisi bağlantısı.",
  keywords: [
    "Teknogirişim Rozeti",
    "Teknogirişim Rozeti nasıl alınır",
    "Teknogirişim Rozeti başvuru şartları",
    "teknogirisim.sanayi.gov.tr",
    "Teknoloji ve Yenilik Odaklı Girişimlerin Belirlenmesi ve Belgelendirilmesine Dair Yönetmelik",
    "Teknogirişim Rozeti itiraz",
    "Teknogirişim Rozeti yenileme",
    "KOSGEB Yapay Zeka Kredisi rozet şartı",
  ],
  alternates: {
    canonical: "/blog/teknogirisim-rozeti-nedir-kimler-alabilir-nasil-alinir-2026",
  },
};

const faqs = [
  {
    q: "Teknogirişim Rozeti için başvuru ücreti var mı?",
    a: "Yönetmelikte ve Bakanlığın portalındaki başvuru süreci anlatımında bir başvuru ücretinden söz edilmiyor. Başvuru teknogirisim.sanayi.gov.tr üzerinden elektronik ortamda yapılıyor. Güncel belge ve ücret bilgisi için portaldaki duyuruları kontrol etmek gerekir.",
  },
  {
    q: "Teknopark firması değilsem rozet alabilir miyim?",
    a: "Evet. TGB, TEKMER veya TÜBİTAK 1512/1812 yolu doğrudan belgelendirme sağlar ama zorunlu tek yol değildir. Bu kriterlerin hiçbirini sağlamayan girişimlerin başvurusu, Genel Müdürlük komitesi veya değerlendirici kuruluş görüşü üzerinden Ar-Ge kapasitesi, yenilikçi yönler, ekonomik ve toplumsal etki, büyüme ve ölçeklenme potansiyeli kriterleriyle değerlendirilir.",
  },
  {
    q: "Şirketim 15 yıldan eskiyse rozet alabilir miyim?",
    a: "Hayır. Yönetmeliğe göre başvuru tarihi itibarıyla kuruluşundan itibaren en fazla 15 yıl geçmiş olması gerekir. Bu süre, rozetin yenilenmesi aşamasında değil başvuru koşulları kapsamında aranan bir şarttır.",
  },
  {
    q: "Başvurum reddedilirse ne yapabilirim?",
    a: "Kararın bildirilmesinden itibaren 15 iş günü içinde yazılı olarak bir kez itiraz edebilirsiniz. İtiraz Değerlendirme Komisyonu'nun kararı kesindir. Olumsuz sonucun ardından yeniden başvuru için de karar tarihinden itibaren en az 6 ay beklemek gerekir.",
  },
  {
    q: "Rozet süresi dolunca ne olur?",
    a: "Rozet verildiği tarihten itibaren 3 yıl geçerlidir. Süre sonunda yenileme için yeniden başvuru yapılması gerekir. Süresinde yenileme başvurusu yapılmazsa belge iptal edilir ve yeniden başvuru en erken 6 ay sonra mümkün olur.",
  },
  {
    q: "Rozeti aldıktan sonra şirket yapısı değişirse bildirmem gerekir mi?",
    a: "Evet. Başvuru kriterlerinde değişiklik olursa değişiklik tarihinden itibaren en geç 90 gün içinde bildirim yapılmalıdır. Ortaklık yapısında %10'un üzerinde değişiklik de aynı 90 günlük süre içinde Genel Müdürlüğe bildirilir. Bildirim ve bilgi taleplerine uyulmaması rozetin iptaline yol açabilir.",
  },
  {
    q: "Rozet KOSGEB Yapay Zeka Kredisi için zorunlu mu?",
    a: "Evet. KOSGEB Yapay Zeka Kredi Programı'na başvurabilmek için başvuru tarihinde geçerli bir Teknogirişim Rozeti'ne sahip olmak gerekiyor. Rozetiniz yoksa önce Bakanlık portalından rozet başvurusunu yapmanız, onaydan sonra KOSGEB tarafında kredi başvurusuna geçmeniz gerekir.",
  },
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Teknogirişim Rozeti Nedir, Kimler Alabilir, Nasıl Alınır? (2026 Rehberi)"
      description="Sanayi ve Teknoloji Bakanlığı'nın teknoloji ve yenilik odaklı girişimleri belgelendirdiği Teknogirişim Rozeti için şartlar, doğrudan belgelendirme yolları, başvuru adımları, itiraz ve yenileme kuralları."
      category="SANAYİ VE TEKNOLOJİ BAKANLIĞI • TEKNOGİRİŞİM ROZETİ • 2026"
      date="Kasım 2026"
      readTime="11 Dakika"
      slug="teknogirisim-rozeti-nedir-kimler-alabilir-nasil-alinir-2026"
      programDurumu="acik"
      coverImage="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Teknogirişim Rozeti, Sanayi ve Teknoloji Bakanlığı&apos;nın teknoloji
          ve yenilik tabanlı, ölçeklenebilir iş modeline sahip girişimleri
          belirleyip belgelendirdiği resmî bir statüdür. Dayanağı, 3 Temmuz
          2025 tarihli ve 32945 sayılı Resmî Gazete&apos;de yayımlanan
          yönetmeliktir. Başvuru artık yalnızca bir prestij meselesi değil:
          KOSGEB Yapay Zeka Kredi Programı gibi uygulamalarda başvuru ön şartı
          olarak karşımıza çıkıyor.
        </p>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Kim başvurabilir: Türkiye&apos;de kurulmuş, KOBİ ve bağımsız işletme niteliğindeki şahıs veya sermaye şirketi; kuruluşundan en fazla 15 yıl geçmiş olmalı</li>
          <li>✔ Yenilikçilik nasıl kanıtlanır: Son 3 yılda TGB, TEKMER veya TÜBİTAK 1512/1812 (BiGG) yolundan biri ya da komite değerlendirmesi</li>
          <li>✔ Nerede başvurulur: teknogirisim.sanayi.gov.tr (elektronik portal)</li>
          <li>✔ Geçerlilik: Verildiği tarihten itibaren 3 yıl</li>
          <li>✔ Ret halinde: Bildirimden itibaren 15 iş günü içinde bir kez itiraz</li>
          <li>✔ Kapsam dışı: Tütün, alkol, bahis, siyasi/etnik içerikli faaliyetler ve yalnızca gayrimenkul yatırımı yapan şirketler gibi</li>
        </ul>
      </div>

      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">📑 İçindekiler</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">1. Teknogirişim Rozeti Nedir?</Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">2. Kimler Başvurabilir?</Link>
          <Link href="#yenilikcilik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">3. Yenilikçilik Nasıl Belgelenir?</Link>
          <Link href="#kapsam-disi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">4. Kapsam Dışı Faaliyetler</Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">5. Adım Adım Başvuru Süreci</Link>
          <Link href="#sonrasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">6. İtiraz, Yenileme, İptal ve Bildirim</Link>
          <Link href="#fayda" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">7. Rozet Ne İşe Yarar?</Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">8. Resmî Kaynaklar</Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">9. Sık Sorulan Sorular</Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">10. Sonuç</Link>
        </div>
      </div>

      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Teknogirişim Rozeti Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Teknogirişim Rozeti, &quot;Teknoloji ve Yenilik Odaklı Girişimlerin
          Belirlenmesi ve Belgelendirilmesine Dair Yönetmelik&quot; kapsamında
          Sanayi ve Teknoloji Bakanlığı Millî Teknoloji Genel Müdürlüğü
          tarafından verilen bir belgedir. Yönetmelik 3 Temmuz 2025&apos;te
          yayımlandığı gün yürürlüğe girdi. Amaç, teknoloji ve yenilik tabanlı
          faaliyet yürüten, ölçeklenebilir iş modeline sahip girişimleri tespit
          etmek ve bu girişimlerin kamu desteklerine, yatırımcılara ve iş
          ortaklarına erişimini kolaylaştırmaktır.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bakanlığın portalındaki Sıkça Sorulan Sorular bölümü rozetin
          girişimlerin kamu desteklerine erişimini kolaylaştırdığını,
          yatırımcılarla iletişimi güçlendirdiğini ve iş birlikleri için
          fırsat yarattığını belirtiyor. Somut bir ön şart örneği ise
          KOSGEB&apos;in Temmuz 2026&apos;da başlayan Yapay Zeka Kredi
          Programı: başvuru tarihinde geçerli rozeti olmayan girişim, diğer tüm
          şartları sağlasa bile krediye başvuramıyor. Programın ayrıntılarını{" "}
          <Link
            href="/blog/kosgeb-yapay-zeka-kredi-programi-2026"
            className="font-semibold text-orange-600 underline hover:text-orange-700"
          >
            KOSGEB Yapay Zeka Kredi Programı yazımızda
          </Link>{" "}
          bulabilirsiniz.
        </p>
      </section>

      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yönetmeliğe göre başvuru tarihi itibarıyla girişimin aşağıdaki
          şartların tamamını sağlaması gerekir:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-gray-700">
            <thead>
              <tr className="bg-[#071A2F] text-white">
                <th className="border p-4">Şart</th>
                <th className="border p-4">Ne anlama geliyor?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4 font-semibold">Şirket türü</td>
                <td className="border p-4">Türkiye&apos;de kurulmuş şahıs işletmesi veya sermaye şirketi (anonim, limited vb.)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-4 font-semibold">KOBİ statüsü</td>
                <td className="border p-4">KOBİ Yönetmeliği&apos;ne göre küçük ve orta büyüklükteki işletme olmak</td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">Bağımsızlık</td>
                <td className="border p-4">KOBİ Yönetmeliği&apos;ndeki bağımsız işletme statüsünde olmak (büyük bir grubun bağlı/ortak işletmesi sayılmamak)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-4 font-semibold">Kuruluş yaşı</td>
                <td className="border p-4">Kuruluşundan itibaren en fazla 15 yıl geçmiş olmak</td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">İş modeli</td>
                <td className="border p-4">Teknoloji ve yenilik tabanlı, ölçeklenebilir bir iş modeline sahip olmak</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Burada &quot;girişim&quot; sözcüğü yeni kurulmuş şirket anlamına
          gelmiyor: 15 yıl sınırı, olgunlaşmış ama hâlâ KOBİ ölçeğindeki
          teknoloji şirketlerini de kapsıyor. Kamu kontrolündeki işletmeler
          yönetmeliğin kapsamı dışındadır. KOBİ ve bağımsızlık tanımları için
          ilgili yönetmelikteki ölçütlere bakmak gerekir; ortaklık yapısı
          karmaşık şirketlerde bu iki şart başvurunun ilk engeli olabilir.
        </p>
      </section>

      <section id="yenilikcilik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Yenilikçilik Nasıl Belgelenir? Doğrudan Yol ve Komite Yolu
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Rozetin en kritik kısmı, girişimin &quot;teknoloji ve yenilik
          odaklı&quot; olduğunun ispatıdır. Yönetmelik iki yol tanımlıyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">A. Doğrudan Belgelendirme</h3>
            <p className="mb-4 leading-8 text-gray-700">
              Başvuru tarihi itibarıyla son 3 yıl içinde aşağıdakilerden birini
              sağlayan girişimin başvurusu doğrudan belgelendirme kapsamında
              değerlendirilir:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>Teknoloji Geliştirme Bölgeleri&apos;nden (Teknopark) kabul almak</li>
              <li>KOSGEB TEKMER&apos;den kabul almak</li>
              <li>TÜBİTAK 1512 (BiGG) veya 1812 (BiGG Yatırım) kapsamında destek almış olmak ya da destek sürecinin devam etmesi</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">B. Komite / Değerlendirici Kuruluş Yolu</h3>
            <p className="mb-4 leading-8 text-gray-700">
              Yukarıdaki kriterlerden hiçbirini sağlamayan girişimler elenmez.
              Başvuru, Genel Müdürlük komitesi veya değerlendirici kuruluş
              görüşüyle şu ölçütlere göre incelenir:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>Ar-Ge kapasitesi</li>
              <li>Çıktıların yenilikçi ve özgün yönleri</li>
              <li>Ulusal ve küresel teknolojik gelişime katkı</li>
              <li>Ekonomik ve toplumsal etki</li>
              <li>Büyüme performansı ve ölçeklenme potansiyeli</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Doğrudan yol daha öngörülebilirdir, çünkü karar zaten başka bir
          kurumun kabul veya destek kararına dayanır. Teknopark ve TEKMER
          süreçleri için{" "}
          <Link href="/blog/teknopark-nedir-avantajlari" className="font-semibold text-orange-600 underline hover:text-orange-700">Teknopark avantajları</Link>{" "}
          ve{" "}
          <Link href="/blog/tekmer-nedir-basvuru-sureci-destekleri-2026" className="font-semibold text-orange-600 underline hover:text-orange-700">TEKMER başvuru süreci</Link>{" "}
          yazılarına, BiGG tarafı için{" "}
          <Link href="/blog/tubitak-bigg-yatirim-1812-programi-2026-2-cagrisi" className="font-semibold text-orange-600 underline hover:text-orange-700">TÜBİTAK 1812 yazımıza</Link>{" "}
          göz atabilirsiniz.
        </p>
      </section>

      <section id="kapsam-disi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Kapsam Dışı Faaliyetler
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yönetmeliğin 14. maddesine göre aşağıdaki faaliyetleri yürüten
          girişimlere rozet verilmez:
        </p>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>Mevzuata aykırı üretim veya hizmet faaliyetleri</li>
            <li>Hukuka, kamu düzenine ve genel ahlaka aykırı faaliyetler</li>
            <li>Tütün, alkol, kumarhane ve bahis faaliyetleri</li>
            <li>Siyasi veya etnik içerikli faaliyetler</li>
            <li>Münhasıran gayrimenkul yatırımı yapan şirketler (GYO dahil)</li>
          </ul>
        </div>
      </section>

      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Adım Adım Başvuru Süreci
        </h2>
        <ol className="ml-6 list-decimal space-y-5 text-lg leading-8 text-gray-700 marker:font-bold marker:text-orange-600">
          <li>
            <strong>Uygunluğu kontrol edin.</strong> Şirket türü, KOBİ ve
            bağımsızlık statüsü, 15 yıl sınırı ve kapsam dışı faaliyet
            listesini başvurudan önce gözden geçirin.
          </li>
          <li>
            <strong>Yenilikçilik yolunu seçin.</strong> Son 3 yılda TGB,
            TEKMER veya 1512/1812 yoluyla bir kabul/destek varsa doğrudan
            belgelendirme; yoksa komite değerlendirmesi için Ar-Ge, özgünlük
            ve ölçeklenme kanıtlarını hazırlayın.
          </li>
          <li>
            <strong>Portaldan başvurun.</strong> Başvuru teknogirisim.sanayi.gov.tr
            üzerinden yapılır. Başvuru formu ve gerekli belgeler portalda
            duyurulur; Bakanlık, form örneğini (6. ve 7. bölümler),
            girişimci sunumu örneğini ve süreç akış şemasını &quot;Dokümanlar&quot;
            sayfasında paylaşıyor. Taahhütname de portal üzerinden onaylanır.
          </li>
          <li>
            <strong>Eksikleri 90 gün içinde tamamlayın.</strong> Eksik belge
            tespit edilirse girişime en fazla 90 gün süre verilir; bu sürede
            tamamlanmazsa değerlendirme sonlandırılır.
          </li>
          <li>
            <strong>Değerlendirme.</strong> Başvuru Bakanlık tarafından, gerekirse
            komite veya değerlendirici kuruluş görüşüyle incelenir.
          </li>
          <li>
            <strong>Sonuç.</strong> Sonuçlar portal üzerinden ilan edilir ve
            girişime bildirilir. Olumluysa rozet 3 yıl süreyle geçerli olur.
          </li>
        </ol>
      </section>

      <div className="mt-12 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">⚠️ Karıştırmayın: Rozet Başvurusu ile Kredi Başvurusu Ayrı Kurumlarda</h3>
        <p className="leading-8 text-gray-700">
          Teknogirişim Rozeti başvurusu Sanayi ve Teknoloji Bakanlığı&apos;nın
          portalında yapılır ve sonucu o kurum açıklar. KOSGEB Yapay Zeka
          Kredisi ise ayrı bir başvurudur ve rozet onaylanmadan başlamaz. Rozet
          başvurusunun olumlu sonuçlanması krediyi garanti etmez; teminat,
          GO Dijital Cüzdan ve KOSGEB şartları ayrıca aranır. Kredi için bir
          son başvuru tarihi (31 Aralık 2026) bulunduğundan rozet sürecini bu
          takvimi gözeterek planlamak gerekir.
        </p>
      </div>

      <section id="sonrasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. İtiraz, Yenileme, İptal ve Bildirim Yükümlülüğü
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-gray-700">
            <thead>
              <tr className="bg-[#071A2F] text-white">
                <th className="border p-4">Konu</th>
                <th className="border p-4">Kural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4 font-semibold">İtiraz</td>
                <td className="border p-4">Olumsuz karara karşı bir kez; kararın bildirilmesinden itibaren 15 iş günü içinde yazılı. Komisyon kararı nihaidir.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-4 font-semibold">Yeniden başvuru (ret sonrası)</td>
                <td className="border p-4">Karar tarihinden itibaren en erken 6 ay sonra</td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">Geçerlilik</td>
                <td className="border p-4">Verildiği tarihten itibaren 3 yıl</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-4 font-semibold">Yenileme</td>
                <td className="border p-4">Süre sonunda yeniden başvuru; süresinde yapılmazsa belge iptal edilir, yeni başvuru en erken 6 ay sonra</td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">Kriter değişikliği</td>
                <td className="border p-4">Değişiklik tarihinden itibaren en geç 90 gün içinde Genel Müdürlüğe bildirim</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-4 font-semibold">Ortaklık yapısı</td>
                <td className="border p-4">%10&apos;u aşan değişiklikte 90 gün içinde bildirim</td>
              </tr>
              <tr>
                <td className="border p-4 font-semibold">İptal</td>
                <td className="border p-4">Yükümlülüklere uymama, bilgi talebini karşılamama veya kriterleri kaybetme halinde iptal; yeniden başvuru en erken 6 ay sonra</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Bakanlık rozet sahibi girişimleri izleyebilir ve denetleyebilir. Ayrıca
          başvuruda verilen bilgi ve belgelerin doğruluğundan girişim sorumludur;
          yanlış bilgiye dayanan işlemlerden elde edilen menfaatler kazanılmış
          hak sayılmaz.
        </p>
      </section>

      <div className="mt-12 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
        <p className="leading-8 text-gray-700">
          Rozet başvurularında en kolay gözden kaçan nokta, rozetin bir kerelik
          alınıp unutulan bir belge olmadığıdır. Yönetmelik, başvuru kriterlerinin
          rozet süresi boyunca sürdürülmesini ve ortaklık yapısındaki %10&apos;luk
          değişikliklerin 90 gün içinde bildirilmesini şart koşuyor. Yatırım turu,
          hisse devri veya şirket birleşmesi planlayan girişimlerin, bu işlemleri
          rozetin devamlılığı ve KOSGEB gibi rozeti ön şart sayan programlar
          açısından birlikte değerlendirmesi gerekir. Aynı şekilde 15 yıl sınırı
          başvuru tarihi itibarıyla aranır; kuruluşa yaklaşan şirketlerde başvuruyu
          ertelemek, hak kaybına yol açabilir.
        </p>
      </div>

      <section id="fayda" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Rozet Ne İşe Yarar?
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-lg leading-8 text-gray-700">
          <li>
            <strong>Kamu desteklerine erişim:</strong> Bakanlık, rozetin
            girişimlerin kamu desteklerine erişimini kolaylaştırdığını belirtiyor.
            Güncel somut örnek, rozeti başvuru ön şartı yapan KOSGEB Yapay Zeka
            Kredisi. Tek tek hangi programların rozeti şart koştuğu zamanla
            değişebileceğinden her çağrının kılavuzu ayrıca kontrol edilmelidir.
          </li>
          <li>
            <strong>Yatırımcı iletişimi:</strong> Resmî bir kurumun belgelendirmesi,
            girişimin teknoloji kimliğine dair üçüncü taraf doğrulaması sunar.
          </li>
          <li>
            <strong>İş birlikleri:</strong> Bakanlık, rozetin görünürlük ve iş
            birliği fırsatları yarattığını belirtiyor. Bu bir hukuki avantaj değil,
            itibar ve ekosistem erişimi sağlayan bir unsurdur.
          </li>
        </ul>
        <p className="mt-6 leading-8 text-gray-700">
          Rozetin kendisi doğrudan bir hibe, vergi istisnası veya teşvik
          sağlamaz; yönetmelikte böyle bir hak tanımlanmış değildir. Ar-Ge
          ve tasarım merkezi teşvikleri ayrı mevzuata bağlıdır, bkz.{" "}
          <Link href="/blog/arge-merkezi-tasarim-merkezi-teknopark-tesvik-hesaplama-personel-ornekleri" className="font-semibold text-orange-600 underline hover:text-orange-700">
            Ar-Ge, tasarım merkezi ve teknopark teşvikleri
          </Link>
          .
        </p>
      </section>

      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <ul className="space-y-3 text-gray-700">
            <li>
              <a href="https://teknogirisim.sanayi.gov.tr/about" target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-600 underline">
                Teknogirişim Rozeti Portalı: Programlar Hakkında
              </a>{" "}
              (T.C. Sanayi ve Teknoloji Bakanlığı)
            </li>
            <li>
              <a href="https://teknogirisim.sanayi.gov.tr/faq" target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-600 underline">
                Teknogirişim Rozeti Sıkça Sorulan Sorular
              </a>
            </li>
            <li>
              <a href="https://teknogirisim.sanayi.gov.tr/documents" target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-600 underline">
                Dokümanlar ve Mevzuat (başvuru formu örneği, akış şeması, yönetmelik)
              </a>
            </li>
            <li>
              <a href="https://www.resmigazete.gov.tr/" target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-600 underline">
                Resmî Gazete
              </a>
              : 3 Temmuz 2025 tarihli, 32945 sayılı nüsha, &quot;Teknoloji ve Yenilik Odaklı Girişimlerin Belirlenmesi ve Belgelendirilmesine Dair Yönetmelik&quot;
            </li>
            <li>
              <a href="https://www.kosgeb.gov.tr/" target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-600 underline">
                KOSGEB
              </a>
              : Yapay Zeka Kredi Programı duyuruları
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Bilgiler 4 Kasım 2026 itibarıyla yönetmelik metni ve Bakanlık portalı esas alınarak derlenmiştir. Bu yazı bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği taşımaz.
          </p>
        </div>
      </section>

      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">{f.q}</h3>
              <p className="leading-8 text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Rozet Uygunluğunuzu Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketinizin Teknogirişim Rozeti için KOBİ ve bağımsızlık
            statüsünü, 15 yıl sınırını, doğrudan belgelendirme ihtimalini ve
            KOSGEB Yapay Zeka Kredisi gibi bağlantılı programlarla sıralamasını
            Koray Akdağ / Sistem Global Danışmanlık olarak birlikte
            değerlendirebiliriz. İsterseniz önce{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              destek uygunluk analizi
            </Link>{" "}
            sayfasından hangi programlara uygun olduğunuza bakabilir,{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              ardından bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sonuç
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Teknogirişim Rozeti, teknoloji girişimleri için yalnızca bir unvan
          değil, kamu destek programlarına giden yolda giderek daha sık
          karşılaşılan bir ön koşul. Şartlar net: Türkiye&apos;de kurulmuş KOBİ
          ve bağımsız işletme, en fazla 15 yıllık kuruluş yaşı ve ölçeklenebilir
          bir teknoloji iş modeli. Teknopark, TEKMER veya BiGG geçmişi olan
          girişimler için yol kısa; olmayanlar için komite değerlendirmesi
          devrede. Asıl dikkat edilecek nokta, rozet alındıktan sonra 3 yıllık
          süre boyunca kriterlerin korunması ve değişikliklerin 90 gün içinde
          bildirilmesi.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Başvuru dosyasının hazırlanmasından, rozeti ön şart sayan KOSGEB ve
          benzeri programlara geçişe ve sonrasındaki raporlama süreçlerine kadar
          tüm adımları Koray Akdağ / Sistem Global Danışmanlık olarak tek
          noktadan yürütüyoruz. Ayrı bir danışmanlık firması aramanıza gerek
          yok.
        </p>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-yapay-zeka-kredi-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • YAPAY ZEKA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Yapay Zeka Kredi Programı 2026</h3>
          </Link>
          <Link
            href="/blog/go-dijital-cuzdan-nedir-nasil-acilir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">GO DİJİTAL • CÜZDAN</div>
            <h3 className="text-lg font-bold text-[#071A2F]">GO Dijital Cüzdan Nedir, Nasıl Açılır?</h3>
          </Link>
          <Link
            href="/blog/tubitak-bigg-yatirim-1812-programi-2026-2-cagrisi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • BiGG • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1812 BiGG Yatırım Programı</h3>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </BlogLayout>
  );
}
