import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB SEGEM Destek Programı Nedir? KOBİ Doğrudan Başvurabilir mi? | Koray Akdağ",
  description:
    "21 Aralık 2025'te yürürlüğe giren KOSGEB Sektörel Gelişim Merkezi (SEGEM) Destek Programı kimlere yönelik, KOBİ'ler doğrudan başvurabiliyor mu? İşletici kuruluş şartları, 2026 yılı 6.506.000 TL üst limiti, desteklenen giderler ve başvuru süreciyle güncel rehber.",
  keywords: [
    "KOSGEB SEGEM",
    "Sektörel Gelişim Merkezi destek programı",
    "SEGEM destek programı nedir",
    "KOSGEB işletici kuruluş",
    "SEGEM kimler başvurabilir",
    "model fabrika KOSGEB desteği",
    "Rekabetçi Sektörler Programı KOSGEB",
    "SEGEM 2026",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB SEGEM Destek Programı Nedir? KOBİ Olarak Doğrudan Başvurabilir miyim?"
      description="21 Aralık 2025'te yürürlüğe giren Sektörel Gelişim Merkezi (SEGEM) Destek Programı, KOBİ'lere doğrudan nakit destek vermiyor; sektörel eğitim ve danışmanlık merkezi kuracak/işletecek anonim şirketleri destekliyor. Kimler işletici kuruluş olabilir, KOBİ'ler bu programdan nasıl dolaylı yararlanır, 2026 destek tutarları ve başvuru süreci nedir? Güncel kaynaklarla derledik."
      category="KOSGEB • SEGEM • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="kosgeb-segem-destek-programi-kobi-basvurabilir-mi"
      programDurumu="acik"
      coverImage="https://images.unsplash.com/photo-1690356107685-3725367f6f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Sektörünüzü Temsil Eden Bir Kuruluşsanız SEGEM Başvurusunu Birlikte Kurgulayalım"
      ctaText="Derneğiniz, biriminiz, odanız, vakfınız veya üniversite/TTO'nuz adına SEGEM işletici kuruluş statüsü için anonim şirket kuruluşundan jüri başvurusuna kadar süreci birlikte yönetebiliriz. KOBİ olarak sektörünüzdeki bir SEGEM'den veya diğer KOSGEB destek programlarından nasıl yararlanabileceğinizi öğrenmek isterseniz de bize ulaşabilirsiniz."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        KOSGEB&apos;in Aralık 2025&apos;te duyurduğu Sektörel Gelişim Merkezi
        (SEGEM) Destek Programı, kısa sürede birçok işletme sahibinin
        gündemine girdi. Ama isim benzerliği ve &quot;KOSGEB destek
        programı&quot; ibaresi, çoğu KOBİ sahibinde yanlış bir izlenim
        yaratıyor: sanki bu programa doğrudan başvurup nakit destek
        alınabilirmiş gibi. Oysa SEGEM, KOSGEB&apos;in bugüne kadar
        alıştığımız KOBİ&apos;ye doğrudan destek modelinden farklı işliyor.
        Bu yazıda programın gerçekte kime yönelik olduğunu, kimlerin
        &quot;işletici kuruluş&quot; olarak başvurabileceğini, KOBİ&apos;lerin
        bu yapıdan nasıl faydalanabileceğini ve 2026 güncel destek
        tutarlarını KOSGEB&apos;in resmi uygulama esaslarına dayanarak
        anlatıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ SEGEM Destek Programı, <strong>21 Aralık 2025&apos;te</strong>{" "}
            yürürlüğe girdi ve sektörel eğitim/danışmanlık merkezlerinin
            sürdürülebilirliğini destekliyor.
          </li>
          <li>
            ✔ Destek, tek tek KOBİ&apos;lere değil, <strong>&quot;işletici
            kuruluş&quot;</strong> adı verilen anonim şirket statüsündeki
            merkezlere veriliyor. Sıradan bir şahıs şirketi veya limited
            şirket doğrudan başvuramaz.
          </li>
          <li>
            ✔ Üç yapı başvurabilir: <strong>model fabrikalar</strong>,{" "}
            <strong>Rekabetçi Sektörler Programı</strong> kapsamındaki
            merkezler ve <strong>sektörün gelişimine katkı sunan
            işletmeler</strong> (bu üçüncüsü, dernek/oda/birlik/vakıf/üniversite
            gibi kuruluşların kurabileceği yeni bir A.Ş.&apos;yi de kapsıyor).
          </li>
          <li>
            ✔ Desteklenen giderler personel, yazılım, eğitim, danışmanlık,
            organizasyon ve tanıtım; hepsi <strong>%100 oranında ve geri
            ödemesiz</strong>.
          </li>
          <li>
            ✔ Destek süresi <strong>10 yıl</strong>, yıllık destek üst limiti
            2026 için <strong>6.506.000 TL</strong> (ilk yıl olan
            2025&apos;te 5.000.000 TL olarak belirlenmiş, her yıl
            TÜFE-Yİ-ÜFE ortalamasına göre güncelleniyor).
          </li>
          <li>
            ✔ Başvuru <strong>sürekli açık</strong>; KOSGEB sistemi üzerinden
            yapılıyor ve jüri değerlendirmesiyle karara bağlanıyor.
          </li>
          <li>
            ✔ KOBİ&apos;ler bu programdan <strong>dolaylı yararlanıcı</strong>{" "}
            olarak, kurulan SEGEM&apos;lerin sunduğu ücretsiz eğitim ve
            danışmanlık hizmetlerinden faydalanabiliyor.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#program-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Program Nedir? Neden Çıkarıldı?
          </Link>
          <Link href="#kimler-basvurabilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler İşletici Kuruluş Olarak Başvurabilir?
          </Link>
          <Link href="#destek-unsurlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Desteklenen Giderler ve Tutarlar
          </Link>
          <Link href="#kobi-rolu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. KOBİ&apos;ler Bu Programdan Nasıl Yararlanır?
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Süreci: Adım Adım
          </Link>
          <Link href="#guncel-durum" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
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
      <section id="program-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Program Nedir? Neden Çıkarıldı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          SEGEM Destek Programı Uygulama Esasları&apos;na göre programın
          amacı, işletmelerin planlı yönetim anlayışına ve modern işletmecilik
          düzeyine kavuşturulmasını sağlamak üzere; farklı sektörlerde
          yatırımları yönlendirecek, atıl kapasiteleri değerlendirecek,
          verimliliği artıracak, şirket birleşmeleri, aile anayasalarının
          oluşturulması, kurumsallaşma, modernizasyon, üretim, yönetim,
          pazarlama, enformasyon ve teknoloji adaptasyonu gibi konularda
          eğitim, teknik yardım ve danışmanlık sağlayacak yapıların (SEGEM
          adı verilen &quot;ara yüz&quot; kuruluşlarının) sürdürülebilirliğine
          katkı sağlamak.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Basitçe ifade etmek gerekirse: KOSGEB, tek tek KOBİ&apos;lere
          destek vermek yerine, bir sektördeki çok sayıda KOBİ&apos;ye
          birden hizmet verecek merkezlerin kurulmasını ve on yıl boyunca
          ayakta kalmasını finanse ediyor. Bu merkezler, sektörlerindeki
          işletmelere ücretsiz veya sübvansiyonlu eğitim, danışmanlık ve
          teknik destek sunuyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Program, 13/1/2024 tarihli ve 32428 sayılı Resmî Gazete&apos;de
            yayımlanan KOSGEB Destek Programları Yönetmeliği&apos;nin 5.
            maddesine ve KOSGEB İcra Komitesi&apos;nin 4/6/2025 tarihli
            2025/04 sayılı ile 17/9/2025 tarihli 2025/05 sayılı kararlarına
            dayanıyor. Uygulama esasları 21 Aralık 2025&apos;te yürürlüğe
            girdi.
          </p>
        </div>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler-basvurabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler İşletici Kuruluş Olarak Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Uygulama esasları, üç ayrı yapının destek programından
          yararlanabileceğini belirtiyor. Her üçünde de ortak şart, başvuru
          yapan yapının bir <strong>anonim şirket</strong> statüsünde
          olması ve bu statüyü destek süresi boyunca koruması.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kategori</th>
                <th className="p-5">Kim Olabilir?</th>
                <th className="p-5">Ek Şart</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Model Fabrikalar</td>
                <td className="p-5">
                  Sanayi ve Teknoloji Bakanlığı ile &quot;Yetkinlik ve Dijital
                  Dönüşüm Merkezi (Model Fabrika)&quot; protokolü imzalamış
                  veya bu statüyü almış yapılar
                </td>
                <td className="p-5">Anonim şirket statüsünde olmak</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Rekabetçi Sektörler Programı Merkezleri</td>
                <td className="p-5">
                  Bakanlık tarafından yürütülen Rekabetçi Sektörler
                  Programı kapsamında kurulmuş veya projesi desteklenmeye
                  hak kazanmış merkezler
                </td>
                <td className="p-5">Anonim şirket statüsünde olmak</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Sektörün Gelişimine Katkı Sunan İşletmeler</td>
                <td className="p-5">
                  Kamu kurumu, üniversite, oda/borsa gibi kamu kurumu
                  niteliğindeki meslek kuruluşları veya bunların kurduğu
                  vakıf/şirketler; ya da dernek, birlik, vakıf, TTO gibi
                  kuruluşların yeni kuracağı A.Ş.
                </td>
                <td className="p-5">Aşağıda detaylandırılan NACE kodu ve personel şartları</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-5 mt-12 text-2xl font-bold text-[#071A2F]">
          2.1. Üçüncü Kategori İçin İki Alt Yol
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          &quot;Sektörün gelişimine katkı sunan işletmeler&quot; kategorisi,
          en geniş başvurucu kitlesini kapsıyor ve iki alt şarta ayrılıyor:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li>
            <strong>a bendi:</strong> Sermayesinin çoğunluğu doğrudan kamu
            kurum/kuruluşlarına, üniversitelere veya kamu kurumu
            niteliğindeki meslek kuruluşlarına (oda, borsa, birlik gibi) ya
            da bunların kurduğu vakıf veya şirketlere ait olan başvurucular
            için: faaliyet kodları arasında NACE Rev. 2 kapsamındaki
            &quot;70.22.02 İşletme ve diğer idari danışmanlık
            faaliyetleri&quot; veya NACE Rev. 2.1 kapsamındaki &quot;70.20.01
            İşletme ve diğer idari danışmanlık faaliyetleri&quot; kodu
            bulunan bir anonim şirket olmak ve KOBİ Danışmanı (Seviye 6)
            Mesleki Yeterlilik Belgesi sahibi veya ilgili alanlarda deneyimli
            en az 10 kişi çalıştırmak gerekiyor.
          </li>
          <li>
            <strong>b bendi:</strong> Sermaye yapısı a bendindeki gibi
            olmayan başvurucular (örneğin bağımsız bir dernek, birlik veya
            vakıf) için: jüri onayı halinde yeni bir anonim şirket kurarak
            başvurulabiliyor. Bu durumda kurulacak şirketin, Bölgesel
            İstatistik Sınıflandırması&apos;nın (BBS) Düzey-1 bölgelerinin
            en az 5&apos;inde faaliyet göstermesi, aynı NACE kodlarına sahip
            olması ve en az 30 kişi (aynı nitelikte personel) çalıştırması
            gerekiyor.
          </li>
        </ul>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru şartlarında en sık gözden kaçan nokta, &quot;anonim
            şirket olmak&quot; ifadesinin tek başına yeterli sanılmasıdır.
            Oysa hem a hem de b bendinde, şirketin belirli bir NACE kodunu
            taşıması ve belirli sayıda, belirli niteliklere sahip personel
            çalıştırması eş zamanlı aranıyor. Bir dernek veya birliğin
            sektörünü temsil eden bir SEGEM kurmak istemesi durumunda, önce
            hangi alt yoldan (a mı b mi) ilerleyeceğinin netleştirilmesi,
            kurulacak şirketin NACE kodundan personel profiline kadar baştan
            doğru kurgulanmasını sağlar.
          </p>
        </div>
      </section>

      {/* 3. DESTEK UNSURLARI */}
      <section id="destek-unsurlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Desteklenen Giderler ve Tutarlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kabul edilen işletici kuruluşlara, beş gider kalemi kapsamında
          %100 oranında ve geri ödemesiz destek sağlanıyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Gider Kalemi</th>
                <th className="p-5">Kapsam</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Personel</td>
                <td className="p-5">
                  İşletici kuruluş yöneticisi, uzman personel ve teknik
                  personelin SGK prim esas kazancı kadar; aylık üst limit
                  yönetici için brüt asgari ücretin işverene toplam
                  maliyetinin 5 katı, uzman/teknik personel için 4 katı
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yazılım</td>
                <td className="p-5">
                  Faaliyetle ilgili yeni yazılım lisans bedeli, buluttan
                  erişimli zaman sınırlı lisans kullanım bedeli ve
                  raporlama yükümlülüğü için gereken yazılım alımları
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Eğitim</td>
                <td className="p-5">
                  KOBİ&apos;lere veya işletici kuruluş personeline yönelik,
                  yurt içi/yurt dışı kurum ve kuruluşlardan alınan eğitim
                  hizmetleri
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Danışmanlık</td>
                <td className="p-5">
                  KOBİ&apos;lere yönelik hizmet alımı yoluyla organize
                  edilen yalın dönüşüm, üretim, satış, pazarlama, kalite,
                  insan kaynakları, finans, yönetim, sürdürülebilirlik,
                  dijital/yeşil dönüşüm, dış ticaret, kurumsallaşma, şirket
                  birleşmeleri ve aile anayasası danışmanlığı
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Organizasyon ve Tanıtım</td>
                <td className="p-5">
                  KOBİ&apos;lere yönelik hızlandırma programları, inovasyon
                  kampları, mentor görüşmeleri ve benzeri faaliyetler
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Destek süresi her işletici kuruluş için <strong>10 yıl</strong>.
          Yıllık destek üst limiti, uygulama esaslarının yürürlüğe girdiği
          2025 yılı için 5.000.000 TL olarak belirlenmişti; her takvim yılı
          başında Tüketici Fiyat Endeksi ile Yurt İçi Üretici Fiyat
          Endeksi&apos;nin on iki aylık ortalamalarına göre güncelleniyor.
          Bu güncellemeyle <strong>2026 yılı için yıllık üst limit 6.506.000
          TL&apos;ye</strong> çıktı. Her işletici kuruluş, kendi başlangıç
          tarihinde geçerli olan üst limit üzerinden sabitleniyor; yani
          farklı tarihlerde programa dahil olan iki merkezin yıllık dönem
          limitleri birbirinden farklı olabiliyor.
        </p>
      </section>

      {/* 4. KOBİ ROLÜ - KARIŞTIRMAYIN */}
      <section id="kobi-rolu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. KOBİ&apos;ler Bu Programdan Nasıl Yararlanır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu, yazının en kritik bölümü. Bir üretim veya hizmet KOBİ&apos;si
          iseniz, SEGEM Destek Programı&apos;na <strong>doğrudan başvurup
          nakit veya hibe alamazsınız</strong>. Programın parasal desteği
          yalnızca işletici kuruluşa (SEGEM&apos;e) ödeniyor. Sizin
          konumunuz, kurulan bu merkezin hizmetlerinden faydalanan bir
          &quot;nihai yararlanıcı&quot; konumu: sektörünüzdeki bir SEGEM
          faaliyete geçtiğinde, o merkezin sunduğu eğitim, danışmanlık,
          mentorluk ve teknik yardım hizmetlerinden genellikle ücretsiz
          veya çok düşük bir bedelle yararlanabilirsiniz.
        </p>

        <div className="mt-6 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: SEGEM ile TEKMER Aynı Şey Değil
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            KOSGEB&apos;in kurduğu iki &quot;ara yüz&quot; destek modeli sık
            sık birbirine karıştırılıyor:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-600">
            <li>
              <strong>SEGEM</strong> (bu yazının konusu): mevcut,
              faaliyetteki sektörel KOBİ&apos;lerin kurumsallaşma,
              modernizasyon, üretim, yönetim ve pazarlama konularında
              eğitim/danışmanlık alacağı sektörel merkezleri destekliyor.
              Hedef kitle, halihazırda üretim/hizmet yapan işletmeler.
            </li>
            <li>
              <strong>
                <Link href="/blog/tekmer-nedir-basvuru-sureci-destekleri-2026" className="text-red-700 underline">
                  TEKMER
                </Link>
              </strong>: 3624 sayılı Kanun kapsamında yürütülen, girişimcilerin
              fikir aşamasından şirketleşmeye kadar geçtiği ön kuluçka,
              kuluçka ve hızlandırma süreçlerini destekliyor. Hedef kitle,
              henüz kurulmamış veya yeni kurulmuş teknoloji girişimleri.
            </li>
          </ul>
          <p className="mt-4 leading-8 text-gray-700">
            Kısacası SEGEM, &quot;büyümüş bir işletmeyi daha kurumsal ve
            verimli hale getirmeyi&quot; hedeflerken, TEKMER &quot;yeni bir
            girişimi hayata geçirmeyi&quot; hedefliyor. İkisi de KOBİ&apos;ye
            doğrudan nakit vermez; ikisi de hizmet sağlayacak bir ara
            yapıyı finanse eder.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Sektörünüzü temsil eden bir oda, birlik, dernek veya vakıfsanız
            ve bu programdan yararlanarak kendi SEGEM&apos;inizi kurmayı
            değerlendiriyorsanız, hangi alt kategoriye (2. bölümdeki a veya
            b bendi) uyduğunuzu netleştirmek ve buna göre şirket kuruluş ve
            personel planlamasını yapmak sürecin ilk ve en kritik adımı.
          </p>
        </div>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Süreci: Adım Adım
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Başvuru, KOSGEB&apos;in dijital sistemi (kosgeb.gov.tr ve/veya
          e-devlet üzerinden erişilen sistem) üzerinden elektronik ortamda
          yürütülüyor:
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Sistemde Kayıt ve Aktif Durum</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Kategoriye Uygun Başvuru Dosyasının Hazırlanması</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Ön Değerlendirme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Jüri Değerlendirmesi ve Karar</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Kabul Sözleşmesi ve Taahhütname Onayı</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.1. Jüri Onayı Sonrası
          </h3>
          <p className="leading-8 text-gray-700">
            Jüri tarafından uygun bulunan başvuru sahibi, KOSGEB ile bir
            kabul sözleşmesi imzalıyor ve idari, mali, hukuki taahhütleri
            içeren taahhütnameyi sistem üzerinden onaylıyor. Bu iki adım
            tamamlanmadan destek programı başlangıç tarihi işlemiyor.
            Model fabrikalar ve Rekabetçi Sektörler Programı merkezleri için
            başlangıç tarihi, ilk jüri kararının evrak kaydına alındığı
            tarih; b bendi kapsamında yeni kurulan şirketler için ise
            taahhütnamenin sistem üzerinden onaylandığı tarih esas alınıyor.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.2. Ödeme Mekanizması
          </h3>
          <p className="leading-8 text-gray-700">
            Onaylanan işletici kuruluş, program süresince üç aylık
            dönemlerde faaliyet ve harcamalarını KOSGEB&apos;e raporluyor.
            Ödemeler, bu dönemsel raporlama ve gerçekleşme oranına dayalı
            olarak yapılıyor; ayrıca destek programı kapsamında erken ödeme
            (avans niteliğinde ön ödeme) alınabilmesi de mümkün.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Anonim şirket kuruluşundan NACE kodu ve personel planlamasına,
            başvuru dosyasının hazırlanmasından jüri sunumuna kadar süreci
            birlikte yürütebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Kuruluşunuzun SEGEM işletici kuruluş şartlarına uygunluğunu
              birlikte değerlendirelim.
            </Link>
          </p>
        </div>
      </section>

      {/* 6. GÜNCEL DURUM */}
      <section id="guncel-durum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Program Şu An Açık mı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Evet. SEGEM Destek Programı, çağrı dönemli değil{" "}
          <strong>sürekli başvuru esasıyla</strong> işliyor; başvurular
          KOSGEB sistemine kayıtlı ve aktif her başvuru sahibi tarafından
          yıl boyunca yapılabiliyor ve jüri tarafından dönemsel olarak
          değerlendiriliyor. Uygulama esasları ayrıca KOSGEB Başkanı Oluru
          ile özel bir çağrı dokümanına bağlı olarak &quot;çağrı esaslı
          başvuru&quot; alınabilmesine de imkân tanıyor; böyle bir çağrı
          açılırsa şartlar ayrıca duyurulan çağrı dokümanında belirtiliyor.
        </p>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            Program yeni olduğu için uygulama esaslarında zaman içinde
            küçük güncellemeler yapılması olası. Başvuru öncesi güncel
            uygulama esaslarını ve varsa açılmış özel çağrı dokümanlarını
            kosgeb.gov.tr üzerinden veya 444 1 567 numaralı KOSGEB Çağrı
            Merkezi&apos;nden mutlaka teyit edin.
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
            ✅ Bu program KOBİ&apos;ye doğrudan nakit destek değil, sektörel
            merkez kuran/işleten anonim şirkete destek sağlar
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Anonim şirket statüsü, destek süresi boyunca (10 yıl)
            korunmak zorunda
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Her işletici kuruluş bu destek programından yalnızca bir kez
            yararlanabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ NACE kodu ve personel sayısı/niteliği şartları, sermaye
            yapınıza göre (a veya b bendi) farklılaşır
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yıllık destek üst limiti her yıl güncellenir; sizin dönem
            limitiniz, başlangıç tarihinizdeki güncel limitle sabitlenir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İstihdam edilen personelin yalnızca işletici kuruluşta SGK
            kaydı olmalı, aksi halde o ay için destek ödenmez
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
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/9327/sektorel-gelisim-merkezi-segem-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Sektörel Gelişim Merkezi (SEGEM) Destek Programı
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/detay/9324/sektorel-gelisim-merkezi-segem-destek-programi-hayata-gecirildi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - SEGEM Destek Programı Hayata Geçirildi (Duyuru)
            </a>
          </li>
          <li>
            <a
              href="https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/SEGEM/2025.12.20/SEGEM_Destek_Program%C4%B1_Uygulama_Esaslar%C4%B1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              SEGEM Destek Programı Uygulama Esasları (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/SEGEM/2025.12.20/SEGEM_Destek_Program%C4%B1_%C3%96n_Ba%C5%9Fvuru_Formu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              SEGEM Destek Programı Ön Başvuru Formu (PDF)
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
              Limited şirket olarak SEGEM işletici kuruluş başvurusu yapabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Uygulama esasları, işletici kuruluşun anonim şirket
              statüsünde olmasını ve bu statüyü destek süresi boyunca
              korumasını şart koşuyor. Limited şirket veya şahıs işletmesi
              statüsüyle doğrudan başvuru yapılamıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bir imalat KOBİ&apos;si olarak SEGEM&apos;den nakit destek alabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Parasal destek yalnızca işletici kuruluşa (SEGEM&apos;e)
              ödeniyor. Siz, sektörünüzdeki bir SEGEM faaliyete geçtiğinde
              onun sunduğu eğitim ve danışmanlık hizmetlerinden nihai
              yararlanıcı olarak faydalanabilirsiniz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026 yılı için yıllık destek üst limiti ne kadar?
            </h3>
            <p className="leading-8 text-gray-700">
              6.506.000 TL. Bu tutar, programın yürürlüğe girdiği 2025 yılı
              için belirlenen 5.000.000 TL&apos;lik limitin, TÜFE ve Yİ-ÜFE
              ortalamasına göre güncellenmiş hâli. Destek oranı %100 ve geri
              ödemesiz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              SEGEM ile TEKMER aynı destek mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. SEGEM mevcut sektörel KOBİ&apos;lere kurumsallaşma ve
              verimlilik odaklı hizmet verecek merkezleri, TEKMER ise yeni
              girişimlerin ön kuluçka/kuluçka/hızlandırma sürecini
              destekliyor. İkisi de farklı yönetmeliklere dayanan ayrı
              programlar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bir dernek veya birlik olarak SEGEM kurabilir miyiz?
            </h3>
            <p className="leading-8 text-gray-700">
              Doğrudan dernek veya birlik tüzel kişiliğiyle değil, ancak
              uygulama esaslarının 6. maddesinin yedinci fıkrası (b) bendi
              kapsamında jüri onayıyla yeni bir anonim şirket kurarak
              başvurabilirsiniz. Bu durumda kurulacak şirketin, en az 5
              Düzey-1 bölgesinde faaliyet göstermesi ve belirlenen NACE
              kodu ile en az 30 kişilik personel şartını sağlaması
              gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuru için belirli bir dönem veya son tarih var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, program sürekli başvuru esasıyla işliyor. Sistemde
              kayıtlı ve aktif başvuru sahipleri yıl boyunca başvuru
              yapabiliyor; KOSGEB Başkanı Oluru ile ayrıca özel bir çağrı
              da açılabiliyor.
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
          SEGEM Destek Programı, KOSGEB&apos;in geleneksel &quot;KOBİ&apos;ye
          doğrudan destek&quot; modelinden farklı, ama uzun vadede
          sektörlere geniş kitleli fayda üretmeyi hedefleyen bir mekanizma.
          Sektörünüzü temsil eden bir oda, birlik, dernek, vakıf veya
          üniversite iseniz, on yıl boyunca %100 oranında ve geri ödemesiz
          destek alacak bir sektörel gelişim merkezi kurmak ciddi bir
          fırsat. Bir imalat veya hizmet KOBİ&apos;siyseniz ise bu
          programdan beklentinizi doğru kurmanız önemli: doğrudan destek
          değil, sektörünüzde kurulacak merkezlerin sunacağı eğitim ve
          danışmanlık hizmetlerinden yararlanma imkânı söz konusu.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/tekmer-nedir-basvuru-sureci-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKMER • KOSGEB • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TEKMER Nedir? Başvuru Süreci ve Destekleri</h3>
          </Link>
          <Link
            href="/blog/teknopark-nedir-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKNOPARK • AR-GE • YAZILIM</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Teknopark Nedir? Avantajları ve Başvuru Rehberi</h3>
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
