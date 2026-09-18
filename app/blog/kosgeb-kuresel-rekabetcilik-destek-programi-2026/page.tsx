import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB Küresel Rekabetçilik Destek Programı 2026 | Koray Akdağ",
  description:
    "7-30 Eylül 2026 başvuru döneminde KOBİ'lere 30-75 milyon TL kredi limiti ve 20 puanlık geri ödemesiz finansman desteği sunan KOSGEB Küresel Rekabetçilik Destek Programı'nda kimler başvurabilir, destek nasıl işler, güncel rehber.",
  keywords: [
    "KOSGEB Küresel Rekabetçilik Destek Programı",
    "KOSGEB 75 milyon TL kredi",
    "hızlı büyüyen işletme KOSGEB",
    "KOSGEB finansman desteği 2026",
    "KOSGEB yüksek teknoloji destek",
    "Turcorn 100 Programı",
    "KOSGEB kredi garanti fonu",
    "KOBİ ihracat artışı destek",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Küresel Rekabetçilik Destek Programı 2026: 30-75 Milyon TL Kredi Desteğine Kimler Başvurabilir?"
      description="KOBİ'lerin küresel pazarlarda rekabet gücünü artırmayı hedefleyen KOSGEB Küresel Rekabetçilik Destek Programı'nda 2026 yılı 1. başvuru dönemi 7-30 Eylül 2026 tarihleri arasında açık. Hızlı büyüyen işletme şartı, 30-75 milyon TL kredi limiti, 20 puanlık geri ödemesiz finansman desteği ve başvuru sürecini güncel kaynaklarla derledik."
      category="KOSGEB • KÜRESEL REKABETÇİLİK • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kosgeb-kuresel-rekabetcilik-destek-programi-2026"
      programDurumu="acik"
      coverImage="https://images.unsplash.com/photo-1699588999949-e25959a59550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Küresel Rekabetçilik Destek Programı Başvurunuzu Birlikte Hazırlayalım"
      ctaText="İşletmenizin hangi başvuru kriterine uyduğunu belirlemekten KOBİ Bilgi Sistemi üzerindeki başvuru sürecine, kredi kullanım planından izleme dönemlerine kadar tüm süreci birlikte yürütelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        KOSGEB&apos;in klasik hibe destekleri genellikle birkaç yüz bin
        TL&apos;lik proje bütçeleriyle sınırlı kalıyor. Ama büyümüş,
        ihracatını artırmış veya yüksek teknolojili bir alanda faaliyet
        gösteren bir KOBİ için bu rakamlar çoğu zaman yetersiz kalıyor.
        Küresel Rekabetçilik Destek Programı, tam olarak bu boşluğu
        doldurmak için kurgulandı: 30 milyon TL&apos;den başlayıp 75 milyon
        TL&apos;ye kadar çıkabilen kredi limitiyle, KOSGEB&apos;in bugüne
        kadar KOBİ&apos;lere sunduğu en yüksek tutarlı finansman
        mekanizmalarından biri haline geldi. 2026 yılının 1. başvuru dönemi
        7 Eylül 2026&apos;da açıldı ve 30 Eylül 2026&apos;ya kadar sürüyor.
        Bu yazıda programın kimleri kapsadığını, destek tutarının nasıl
        hesaplandığını ve başvuru sürecinin nasıl işlediğini güncel
        kaynaklarla ele alıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ 2026 yılı 1. başvuru dönemi <strong>7-30 Eylül 2026</strong>{" "}
            tarihleri arasında açık; başvurular KOSGEB e-Hizmetler
            platformu (e-Devlet üzerinden) yapılıyor.
          </li>
          <li>
            ✔ Kredi limiti işletme başına <strong>30 milyon TL ile 75
            milyon TL</strong> arasında; kullanılan kredinin{" "}
            <strong>20 puanlık</strong> kısmı KOSGEB tarafından geri
            ödemesiz karşılanıyor.
          </li>
          <li>
            ✔ Başvurabilmek için dört alternatif kriterden{" "}
            <strong>en az birinin</strong> sağlanması yeterli: hızlı
            büyüyen + yüksek teknoloji işletmesi, hızlı büyüyen +
            ihracat/Ar-Ge artışı, HAMLE öncelikli ürün listesindeki yüksek
            teknoloji orta ölçekli işletme veya Turcorn 100 Programı
            kapsamındaki girişim.
          </li>
          <li>
            ✔ Kredi yalnızca dört protokollü finans kuruluşundan (Ziraat
            Bankası, Halkbank, VakıfBank, Ziraat Katılım) kullanılabiliyor.
          </li>
          <li>
            ✔ Makine-teçhizat, yazılım, personel istihdamı, eğitim/
            danışmanlık/tasarım hizmetleri ve işletme sermayesi ihtiyaçları
            desteklenen gider kalemleri arasında.
          </li>
          <li>
            ✔ Proje süresi 24 ay, kredi vadesi azami 36 ay; ilk kredi
            kullanımının proje başlangıcından itibaren 9 ay içinde
            gerçekleştirilmesi şart.
          </li>
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
            3. Destek Tutarı ve Oranı
          </Link>
          <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Hangi Giderler Karşılanıyor?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Süreci
          </Link>
          <Link href="#durum" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Program Şu An Açık mı?
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

      {/* 1. PROGRAM NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Program Nedir, Neden Önemli?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Küresel Rekabetçilik Destek Programı, KOSGEB&apos;in KOBİ&apos;leri
          küresel pazarlarda daha dayanıklı hale getirmeyi ve rekabet
          avantajı kazandırmayı hedefleyen bir finansman mekanizması. Program
          klasik bir hibe değil; işletme protokollü bir bankadan kredi
          kullanıyor, anaparayı kendisi geri ödüyor, KOSGEB ise bu kredinin
          faiz veya kâr payı yükünün 20 puanlık kısmını geri ödemesiz olarak
          karşılıyor. Bu yapı, işletmenin nakit akışını koruyarak büyük
          çaplı bir yatırımı normal piyasa koşullarına göre çok daha düşük
          maliyetle finanse etmesine imkân tanıyor.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Programın Öne Çıkan Özellikleri
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Yenilikçi ürün geliştirme, üretim verimliliği ve küresel pazarlara erişimi hedefliyor</li>
            <li>✔ 30-75 milyon TL arası kredi limitiyle KOSGEB&apos;in en yüksek tutarlı programlarından biri</li>
            <li>✔ Kredi, yalnızca dört protokollü kamu bankası üzerinden kullandırılıyor</li>
            <li>✔ Teminat konusunda Kredi Garanti Fonu (KGF) kefaleti imkânı sunuluyor</li>
            <li>✔ Başvuru şartları dört ayrı kriterden oluşuyor; birini karşılamak yeterli</li>
          </ul>
        </div>
        <p className="leading-8 text-gray-700">
          Kredi yalnızca <strong>T.C. Ziraat Bankası, Türkiye Halk Bankası,
          Türkiye Vakıflar Bankası ve Ziraat Katılım Bankası</strong>{" "}
          üzerinden kullandırılıyor. İşletmenin teminat yapısı yeterli
          değilse, Kredi Garanti Fonu kefaleti devreye girebiliyor; bu da
          özellikle büyüme aşamasındaki, henüz büyük ölçekli gayrimenkul
          teminatına sahip olmayan KOBİ&apos;ler için önemli bir avantaj.
        </p>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Programın en kritik özelliği, başvuru şartlarının tek bir kalıba
          değil, dört alternatif kritere dayanması. İşletmenin bu dört
          kriterden yalnızca birini karşılaması yeterli.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              1) Hızlı Büyüyen + Yüksek Teknoloji İşletmesi
            </h3>
            <p className="leading-8 text-gray-700">
              Hızlı büyüyen, orta-yüksek veya yüksek teknoloji seviyesinde
              faaliyet gösteren ve son 3 yılda yıllık ihracatını düzenli
              artıran işletmeler.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              2) Hızlı Büyüyen + İhracat ve Ar-Ge Artışı
            </h3>
            <p className="leading-8 text-gray-700">
              Hızlı büyüyen işletme niteliğinde olup son 3 yılın her
              birinde hem ihracatını hem de Ar-Ge harcamasını düzenli
              olarak artıran işletmeler.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              3) HAMLE Öncelikli Ürün Listesinde Yer Alan İşletme
            </h3>
            <p className="leading-8 text-gray-700">
              Yüksek teknoloji düzeyinde faaliyet gösteren orta ölçekli
              işletme olup Sanayi ve Teknoloji Bakanlığı&apos;nın Teknoloji
              Odaklı Sanayi Hamlesi (HAMLE) Programı kapsamında belirlediği
              öncelikli ürünler listesindeki bir ürüne ilişkin faaliyet
              yürütenler.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              4) Turcorn 100 Programı Kapsamındaki İşletme
            </h3>
            <p className="leading-8 text-gray-700">
              Sanayi ve Teknoloji Bakanlığı&apos;nın, 1 milyar dolar
              değerlemeyi hedefleyen yüksek büyüme potansiyelli
              girişimleri kapsayan Turcorn 100 Programı&apos;na dahil
              edilmiş işletmeler.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: Küresel Rekabetçilik ile Kapasite Geliştirme Aynı Program Değil
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            KOSGEB&apos;in{" "}
            <Link href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026" className="text-red-700 underline">
              Kapasite Geliştirme Destek Programı
            </Link>{" "}
            ile bu program sık sık karıştırılıyor, çünkü ikisi de kredi
            + faiz desteği modeliyle işliyor ve ikisinde de &quot;hızlı
            büyüyen işletme&quot; kriteri geçiyor. Ancak aralarında
            önemli farklar var: Kapasite Geliştirme&apos;de kredi limiti
            20-30 milyon TL iken Küresel Rekabetçilik&apos;te bu limit
            30-75 milyon TL&apos;ye çıkıyor. Kapasite Geliştirme genel
            üretim ve dijital dönüşüm yatırımlarına daha geniş bir KOBİ
            kitlesine açıkken, Küresel Rekabetçilik daha dar bir kitleye,
            yani ihracat/Ar-Ge artışı göstermiş, yüksek teknolojili veya
            Turcorn 100/HAMLE gibi özel programlara dahil olmuş
            işletmelere odaklanıyor. İki programa aynı anda başvurmadan
            önce hangi kritere uyduğunuzu netleştirmek gerekiyor.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru sürecinde en sık gözden kaçan nokta, dört kriterin
            birbirinden bağımsız ve &quot;veya&quot; bağlacıyla
            bağlı olması. Birçok işletme sahibi yalnızca ihracat artışı
            kriterine bakıp kendisini programın dışında sayıyor; oysa
            Ar-Ge harcamalarını düzenli artırmış ama ihracatı henüz sınırlı
            bir işletme de ikinci kriterden yararlanabilir. &quot;Hızlı
            büyüyen işletme&quot; niteliği, KOBİ Bilgi Sistemi üzerinden
            başvuru sırasında sistem tarafından otomatik kontrol edildiği
            için, başvuru öncesinde SGK prim gün kayıtlarının ve net satış
            beyanlarının güncel ve tutarlı olması kritik önem taşıyor.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            📐 Hızlı Büyüyen İşletme Nasıl Tanımlanıyor?
          </h3>
          <p className="leading-8 text-gray-700">
            KOSGEB mevzuatına göre hızlı büyüyen işletme; hesaplamaya esas
            başlangıç yılında en az 10 çalışanı (3.600 prim günü karşılığı)
            bulunan ve üç yıllık dönemde çalışan sayısında veya net
            satışlarında yıllık ortalama en az %10 büyüme gösteren
            işletme olarak tanımlanıyor. Bu tanım, KOSGEB&apos;in Kapasite
            Geliştirme Destek Programı&apos;nda kullandığı tanımla aynı.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            Genel Ön Şartlar
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>KOSGEB Veri Tabanı&apos;nda (KBS) kayıtlı ve aktif olmak</li>
            <li>Güncel İşletme Beyanı&apos;na sahip olmak</li>
            <li>Türk Ticaret Kanunu&apos;nda tanımlı gerçek veya tüzel kişi statüsünde olmak</li>
            <li>Yukarıdaki dört kriterden en az birini karşılamak</li>
          </ul>
        </div>
      </section>

      {/* 3. TUTARLAR */}
      <section id="tutarlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Tutarı ve Oranı
        </h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Değer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kredi Alt Limiti</td>
                <td className="p-5">30.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kredi Üst Limiti</td>
                <td className="p-5">75.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Geri Ödemesiz Finansman Desteği</td>
                <td className="p-5">20 puan (faiz/kâr payı üzerinden)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Proje Süresi</td>
                <td className="p-5">24 ay (3&apos;er aylık dönemlerle izlenir)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kredi Vadesi</td>
                <td className="p-5">Azami 36 ay, 3&apos;er aylık eşit taksitlerle</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">İlk Kredi Kullanım Süresi</td>
                <td className="p-5">Proje başlangıcından itibaren en geç 9 ay içinde</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Destek Pratikte Ne Anlama Geliyor?
          </h3>
          <p className="leading-8 text-gray-700">
            Örneğin işletme 40 milyon TL kredi kullandığında, bankanın
            uyguladığı faiz veya kâr payı oranının 20 puanlık kısmı KOSGEB
            tarafından karşılanıyor; işletme yalnızca anaparayı ve kalan
            faiz farkını geri ödüyor. Kredinin banka tarafından onaylanması,
            KOSGEB desteğinden ayrı bir süreç: destek onaylansa bile
            kredinin nihai kullandırımı, protokollü bankanın kendi risk
            değerlendirmesine tabi.
          </p>
        </div>
      </section>

      {/* 4. GİDERLER */}
      <section id="giderler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Hangi Giderler Karşılanıyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kredi kullanım amacı, klasik bir yatırım kredisinden daha geniş
          bir gider yelpazesini kapsıyor:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">🏭 Yatırım Giderleri</h3>
            <p className="text-gray-700">Makine, teçhizat ve kalıp alımları</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">💻 Yazılım</h3>
            <p className="text-gray-700">Kurumsal yazılım ve dijitalleşme yatırımları</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">👥 Personel İstihdamı</h3>
            <p className="text-gray-700">Yeni personel istihdamına ilişkin maliyetler</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">🎓 Hizmet Alımları</h3>
            <p className="text-gray-700">Eğitim, danışmanlık, tasarım ve sertifikasyon hizmetleri</p>
          </div>
          <div className="rounded-2xl border-2 border-orange-400 bg-orange-50 p-6 shadow-sm md:col-span-2">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">💰 İşletme Sermayesi</h3>
            <p className="text-gray-700">
              Programın en dikkat çekici tarafı, kredinin yalnızca sabit
              yatırıma değil, işletme sermayesi ihtiyacına da
              kullanılabilmesi. Bu, büyüme sürecinde nakit akışı sıkışan
              KOBİ&apos;ler için önemli bir esneklik sağlıyor.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Başvuru, KOSGEB e-Hizmetler platformu (edevlet.kosgeb.gov.tr)
          üzerinden elektronik ortamda yapılıyor.
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">KBS Kaydı ve İşletme Beyanı</h3>
            <p className="mt-2 text-sm text-gray-600">Kayıt ve beyanın güncel olduğu teyit edilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Kriter Kontrolü</h3>
            <p className="mt-2 text-sm text-gray-600">Dört kriterden hangisine uyulduğu belirlenir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">e-Hizmetler Başvurusu</h3>
            <p className="mt-2 text-sm text-gray-600">e-Devlet üzerinden proje ve destek başvurusu yapılır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">KOSGEB Değerlendirmesi ve Onay</h3>
            <p className="mt-2 text-sm text-gray-600">Başvuru incelenir, onaylanırsa sözleşme aşamasına geçilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Banka Kredi Kullanımı</h3>
            <p className="mt-2 text-sm text-gray-600">Protokollü bankadan en geç 9 ay içinde ilk kullanım yapılır</p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Onay sonrası proje 24 ay boyunca 3&apos;er aylık dönemlerde
          izleniyor; her dönemde izleme formlarında olumlu bulgu alınması
          ve kredi taksitlerinin düzenli ödenmesi, destek ödemesinin
          devamı için gerekli.
        </p>
      </section>

      {/* 6. GÜNCEL DURUM */}
      <section id="durum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Program Şu An Açık mı?
        </h2>
        <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
          <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
            📅 2026 Yılı 1. Başvuru Dönemi
          </h3>
          <p className="leading-8 text-gray-700">
            KOSGEB&apos;in 7 Eylül 2026&apos;da yaptığı duyuruyla program 2026
            yılı 1. başvuru dönemi için başvuruya açıldı ve{" "}
            <strong>30 Eylül 2026&apos;ya kadar</strong> devam ediyor. Bu
            yazının yayımlandığı tarih itibarıyla başvuru penceresi hâlâ
            açık, ancak son tarihe kalan süre kısıtlı olduğundan, uygun
            olduğunu düşünen işletmelerin KBS kayıt ve beyan güncelliğini
            hemen kontrol etmesi ve başvuru dosyasını vakit kaybetmeden
            hazırlaması öneriliyor. Güncel duyurular KOSGEB&apos;in resmî
            internet sitesi ve KOBİ Bilgi Sistemi üzerinden takip
            edilebilir.
          </p>
        </div>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Kredi yalnızca dört protokollü bankadan (Ziraat, Halkbank, VakıfBank, Ziraat Katılım) kullanılabilir; başka bir finans kuruluşundan alınan kredi desteğe konu olmaz.</li>
            <li>KOSGEB desteği onaylansa bile kredinin nihai kullandırımı bankanın kendi risk ve teminat değerlendirmesine tabidir.</li>
            <li>İlk kredi kullanımının proje başlangıcından itibaren 9 ay içinde yapılmaması, destek hakkının kaybına yol açabilir.</li>
            <li>&quot;Hızlı büyüyen işletme&quot; niteliği KBS tarafından otomatik kontrol edildiğinden, SGK prim gün ve net satış kayıtlarının tutarlı ve güncel olması önemlidir.</li>
            <li>Proje 24 ay boyunca 3&apos;er aylık dönemlerde izlenir; olumsuz izleme bulgusu destek ödemesini durdurabilir.</li>
            <li>Güncel rakamlar ve şartlar KOSGEB tarafından dönemsel olarak güncellenebileceğinden, başvuru öncesi yürürlükteki Uygulama Esasları&apos;nın teyit edilmesi gerekir.</li>
          </ul>
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
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/9206/kuresel-rekabetcilik-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Küresel Rekabetçilik Destek Programı
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/detay/9476/kobilerin-kuresel-rekabet-gucunu-artiracak-destek-programina-basvurular-basladi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - KOBİ&apos;lerin Küresel Rekabet Gücünü Artıracak Destek Programına Başvurular Başladı
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/detay/9216/kuresel-rekabetcilik-destek-programi-isletmeler-icin-uluslararasi-basari-firsati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Küresel Rekabetçilik Destek Programı: İşletmeler İçin Uluslararası Başarı Fırsatı
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

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Program hibe mi, kredi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Kredi + faiz desteği modeli. İşletme protokollü bir bankadan
              30-75 milyon TL arası kredi kullanır, anaparayı kendisi
              öder; KOSGEB faiz/kâr payının 20 puanlık kısmını geri
              ödemesiz olarak karşılar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İhracatım yok ama Ar-Ge harcamam artıyor, başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Dört kriterden ikincisi (hızlı büyüyen işletme + ihracat ve
              Ar-Ge harcaması artışı) her iki unsurun birlikte
              gerçekleşmesini şart koşuyor. Yalnızca Ar-Ge artışı varsa,
              işletmenin diğer üç kriterden (yüksek teknoloji sınıfı,
              HAMLE öncelikli ürün listesi veya Turcorn 100) birine
              uyup uymadığını kontrol etmek gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Küçük ölçekli bir işletme miyim yoksa orta ölçekli mi, bu önemli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Programın dört kriterinden üçü ölçek sınırlaması getirmiyor;
              yalnızca HAMLE öncelikli ürün listesi kriteri açıkça &quot;orta
              ölçekli işletme&quot; ifadesini kullanıyor. Diğer kriterlerde
              belirleyici olan ölçek değil, hızlı büyüme, ihracat/Ar-Ge
              artışı veya teknoloji seviyesi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kredi Garanti Fonu kefaleti otomatik mi sağlanıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. KGF kefaleti, işletmenin teminat yapısının yetersiz
              kalması durumunda başvurulabilecek bir imkân; otomatik
              olarak her başvuruya uygulanmıyor. Kefalet talebi, kredi
              sürecinde banka ve KGF&apos;nin kendi değerlendirmesine
              tabi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              30 Eylül 2026&apos;dan sonra başvuru yapabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              2026 yılı 1. dönemi için hayır; başvuru penceresi 30 Eylül
              2026&apos;da kapanıyor. KOSGEB dönemsel programlarda
              genellikle yıl içinde ek dönemler açabiliyor; bir sonraki
              başvuru döneminin açılıp açılmayacağını KOSGEB&apos;in
              resmî sitesinden takip etmek gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Aldığım krediyi işletme sermayesi olarak kullanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Program, klasik yatırım kredilerinden farklı olarak
              kredinin bir kısmının işletme sermayesi ihtiyacına ayrılmasına
              izin veriyor; bu, büyüme sürecindeki nakit akışı baskısını
              hafifleten önemli bir esneklik.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin Uygunluğunu Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Hangi kritere uyduğunuzu netleştirmekten KOBİ Bilgi Sistemi
            üzerindeki başvuru dosyanızın hazırlanmasına, banka süreciyle
            koordinasyondan izleme dönemlerinin takibine kadar tüm süreci
            birlikte yürütebiliriz.{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Şirketiniz için Küresel Rekabetçilik Destek Programı
              uygunluğunu ücretsiz ön analizle değerlendirelim.
            </Link>{" "}
            veya{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              doğrudan bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Küresel Rekabetçilik Destek Programı, hızlı büyüyen, ihracatını
          veya Ar-Ge harcamasını artırmış ya da yüksek teknolojili bir
          alanda faaliyet gösteren KOBİ&apos;ler için KOSGEB&apos;in
          sunduğu en yüksek tutarlı finansman araçlarından biri. 75 milyon
          TL&apos;ye kadar çıkabilen kredi limiti ve 20 puanlık geri
          ödemesiz destek, klasik ölçekteki KOSGEB hibelerinin çok
          ötesinde bir büyüme finansmanı imkânı sunuyor. 2026 yılı 1.
          başvuru dönemi 30 Eylül 2026&apos;da kapanacağından, uygun
          olduğunu düşünen işletmelerin başvuru hazırlığına hemen
          başlaması gerekiyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin bu programa ve diğer güncel KOSGEB/TÜBİTAK destek
          mekanizmalarına uygunluğunu belirlemekten başvuru dosyanızın
          hazırlanmasına, banka süreciyle koordinasyondan izleme dönemi
          raporlamasına kadar Koray Akdağ / Sistem Global Danışmanlık
          olarak yanınızdayız. Ayrı bir danışmanlık firması aramanıza
          gerek kalmadan, hem başvuru sürecinizi hem de sonrasındaki
          takibi tek noktadan yürütebiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı 2026</h3>
          </Link>
          <Link
            href="/blog/kosgeb-stratejik-urun-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • TEKNOLOJİ HAMLESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Stratejik Ürün Destek Programı</h3>
          </Link>
          <Link
            href="/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • NACE KODU • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">NACE Kodu Ürünle Uyuşmuyorsa KOSGEB Desteği Alınır mı?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
