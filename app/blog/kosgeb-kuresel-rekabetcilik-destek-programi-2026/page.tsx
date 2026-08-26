import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "KOSGEB Küresel Rekabetçilik Destek Programı 2026: 50 Milyon TL'ye Kadar Kredi Faiz Desteği | Koray Akdağ",
  description:
    "KOSGEB'in sürekli başvuruya açık yeni programında 20-50 milyon TL kredi limiti ve 20 puanlık geri ödemesiz faiz/kâr payı desteği kimlere, hangi şartlarla sağlanıyor? Başvuru şartları, desteklenen giderler ve adım adım süreçle 2026 güncel rehber.",
  keywords: [
    "KOSGEB Küresel Rekabetçilik Destek Programı",
    "KOSGEB 50 milyon TL destek",
    "KOSGEB kredi faiz desteği 2026",
    "hızlı büyüyen işletme KOSGEB",
    "KOSGEB Turcorn 100",
    "KOSGEB Kapasite Geliştirme farkı",
    "KOSGEB e-Hizmetler başvuru",
    "orta yüksek teknoloji ihracat desteği",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Küresel Rekabetçilik Destek Programı 2026: 50 Milyon TL'ye Kadar Kredi Faiz Desteği Kimlere Sağlanıyor?"
      description="KOSGEB'in 2025'te hayata geçirdiği ve 2026'da sürekli başvuruya açık olan Küresel Rekabetçilik Destek Programı'nda 20-50 milyon TL kredi limiti, 20 puanlık geri ödemesiz faiz/kâr payı desteği, başvuru şartları ve adım adım süreç."
      category="KOSGEB • İHRACAT & REKABETÇİLİK • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="kosgeb-kuresel-rekabetcilik-destek-programi-2026"
      coverImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            KOSGEB&apos;in Ocak 2025&apos;te duyurduğu ve 2026 itibarıyla
            sürekli başvuruya açık tuttuğu Küresel Rekabetçilik Destek
            Programı, klasik hibe desteklerinin çok üzerinde bir bütçeyle
            (20-50 milyon TL kredi limiti) çalışan, ihracat ve teknoloji
            odaklı büyüyen KOBİ&apos;lere yönelik özel bir finansman aracı.
            Ancak program herkese açık değil; başvuru şartları arasındaki
            &quot;hızlı büyüyen işletme&quot;, &quot;orta-yüksek teknoloji&quot;
            ve &quot;artan ihracat&quot; gibi teknik kriterler birçok işletme
            sahibi tarafından net bilinmiyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Program nasıl çalışıyor, hibe mi kredi mi?</li>
            <li>✔ Kimler başvurabilir, hangi 4 kriterden biri sağlanmalı?</li>
            <li>✔ Kredi limiti ve faiz/kâr payı desteği ne kadar?</li>
            <li>✔ Hangi giderler desteklenir?</li>
            <li>✔ Kapasite Geliştirme Destek Programı ile farkı ne?</li>
            <li>✔ Adım adım başvuru süreci nasıl işliyor?</li>
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
              3. Kredi Limiti ve Destek Tutarları
            </Link>
            <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Desteklenen Gider Kalemleri
            </Link>
            <Link href="#fark" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Kapasite Geliştirme Programı ile Farkı
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Adım Adım Başvuru Süreci
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

        {/* 1. NEDİR */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Program Nedir, Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Küresel Rekabetçilik Destek Programı, KOSGEB&apos;in 6 Ocak 2025
            tarihinde &quot;Büyüme ve Küreselleşme Destekleri Tanıtım
            Programı&quot; kapsamında Kapasite Geliştirme Destek Programı ile
            birlikte duyurduğu iki yeni finansman aracından biri. Amacı,
            zaten belirli bir büyüklüğe ve teknolojik olgunluğa ulaşmış
            KOBİ&apos;lerin; yenilikçi ürün geliştirme, üretim süreçlerini
            optimize etme, tedarik zinciri yönetimini güçlendirme ve küresel
            pazarlarda yeni teknolojileri etkin kullanma kapasitesini
            artırarak uluslararası rekabette daha dayanıklı hale gelmelerini
            desteklemek.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Program, klasik KOSGEB hibelerinden farklı olarak{" "}
            <strong>kredi + faiz/kâr payı desteği</strong> mantığıyla
            çalışıyor: işletme, KOSGEB ile protokollü bir banka veya finans
            kuruluşundan (Ziraat Bankası, Halkbank, VakıfBank, Ziraat
            Katılım gibi) kredi kullanıyor; kredinin anaparasını kendisi geri
            öderken, faiz veya kâr payı giderinin belirli bir puanlık
            kısmını KOSGEB geri ödemesiz olarak işletmeye aktarıyor. Aynı
            mekanizma, sitede daha önce ele aldığımız{" "}
            <Link href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026" className="font-semibold text-orange-600 hover:underline">
              Kapasite Geliştirme Destek Programı
            </Link>
            &apos;nda da kullanılıyor; ancak iki program hedef kitle ve
            başvuru şartları açısından belirgin şekilde ayrışıyor (bkz.
            Bölüm 5).
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Programın Öne Çıkan Amaçları
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ İhracatını ve teknoloji seviyesini artıran KOBİ&apos;lerin büyümesini finanse etmek</li>
              <li>✔ Ar-Ge harcaması yapan, orta-yüksek/yüksek teknoloji sektöründeki işletmeleri desteklemek</li>
              <li>✔ Küresel tedarik zincirlerinde yer alma kapasitesini güçlendirmek</li>
              <li>✔ Turcorn 100 Programı kapsamındaki yüksek potansiyelli girişimlere finansmana hızlı erişim sağlamak</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Programın belki de en pratik özelliği, çoğu KOSGEB desteğinden
            farklı olarak <strong>belirli bir başvuru dönemi/takvimi
            olmaması</strong>. Başvuru şartlarını sağlayan bir işletme,
            KOSGEB&apos;in ilan ettiği bütçe elverdiği sürece yılın herhangi
            bir gününde başvuru yapabiliyor.
          </p>
        </section>

        {/* 2. KİMLER BAŞVURABİLİR */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Başvurabilir?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Program, Kapasite Geliştirme Destek Programı&apos;na kıyasla
            daha dar ve seçici bir kitleyi hedefliyor. Temel şartların yanı
            sıra, işletmenin aşağıdaki dört profilden en az birine uyması
            gerekiyor.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Temel Başvuru Şartları
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Limited veya Anonim Şirket statüsünde olmak</li>
                <li>✔ KOBİ Bilgi Sistemi&apos;ne (KBS) kayıtlı ve güncel işletme beyanına sahip olmak</li>
                <li>✔ KOSGEB veri tabanında aktif kayıtlı olmak</li>
                <li>✔ Aşağıdaki dört profilden en az birine uymak</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Başvuramayacak Yapılar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Şahıs firmaları / şahıs işletmeleri</li>
                <li>❌ Mikro ölçekli, düşük teknoloji ve düşük büyüme performanslı işletmeler</li>
                <li>❌ Dernek, vakıf gibi tüzel kişiler</li>
                <li>❌ Dört profilden hiçbirini sağlamayan işletmeler</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🎯 Dört Profilden Hangi Birine Uymalı?
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              KOSGEB&apos;in resmî destek sayfasına göre işletmenin
              aşağıdaki dört kriterden en az birini sağlaması gerekiyor:
            </p>
            <div className="space-y-4">
              <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6">
                <p className="font-semibold text-gray-800">1) Hızlı büyüyen + orta-yüksek teknoloji + artan ihracat</p>
                <p className="mt-2 text-sm text-gray-600">İstihdam veya net satışlarında sürekli büyüme gösteren, orta-yüksek teknoloji sınıfında faaliyet gösteren ve ihracatı artan işletmeler.</p>
              </div>
              <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6">
                <p className="font-semibold text-gray-800">2) Hızlı büyüyen + artan ihracat ve Ar-Ge harcaması</p>
                <p className="mt-2 text-sm text-gray-600">Hızlı büyüyen işletme tanımını sağlayan, aynı zamanda hem ihracatını hem de Ar-Ge harcamasını artıran işletmeler.</p>
              </div>
              <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6">
                <p className="font-semibold text-gray-800">3) Yüksek teknoloji + öncelikli ürün listesinde yer almak</p>
                <p className="mt-2 text-sm text-gray-600">Sanayi ve Teknoloji Bakanlığı&apos;nın öncelikli ürün listesinde yer alan, yüksek teknoloji sınıfındaki işletmeler.</p>
              </div>
              <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6">
                <p className="font-semibold text-gray-800">4) Turcorn 100 Programı kapsamında yer almak</p>
                <p className="mt-2 text-sm text-gray-600">Sanayi ve Teknoloji Bakanlığı&apos;nın yüksek büyüme potansiyelli teknoloji girişimlerini desteklediği Turcorn 100 Programı&apos;na dahil olan işletmeler.</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600">
              &quot;Hızlı büyüyen işletme&quot; tanımı ve büyüme/teknoloji
              sınıfı hesaplamaları KOSGEB&apos;in kendi veri setleri ve GSYH
              deflatörüyle düzeltilmiş üç yıllık periyotlar üzerinden
              yapılır; işletmenin bu kriterlerden hangisini karşıladığı
              başvuru formunun ilk onaylandığı tarihteki KBS kayıtlarına
              göre belirlenir. Kendi durumunuzun hangi profile girdiğinden
              emin değilseniz, başvuru öncesinde KOSGEB Başvuru Kılavuzu ile
              teyit edilmesi önerilir.
            </p>
          </div>
        </section>

        {/* 3. TUTARLAR */}
        <section id="tutarlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Kredi Limiti ve Destek Tutarları
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programın finansal çerçevesi, Kapasite Geliştirme Destek
            Programı&apos;na göre hem daha yüksek bir üst limit hem de daha
            yüksek bir alt limit içeriyor — bu da programın küçük ölçekli
            yatırımlar için değil, belirli bir büyüklüğe ulaşmış işletmelerin
            ölçek atlaması için tasarlandığını gösteriyor.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kalem</th>
                  <th className="p-5">Tutar / Oran</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Alt Limiti</td>
                  <td className="p-5">20.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti</td>
                  <td className="p-5">50.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Faiz / Kâr Payı Destek Puanı</td>
                  <td className="p-5">20 puan (geri ödemesiz)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Azami Kredi Vadesi</td>
                  <td className="p-5">36 ay</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Azami Proje Süresi</td>
                  <td className="p-5">24 ay (3&apos;er aylık dönemler)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Faiz Desteği Nasıl Ödeniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Destek tek seferde peşin ödenmiyor. İşletme krediyi
              kullandıktan sonra taksitlerini bankaya kendi kaynağından
              öder; KOSGEB, ilgili döneme ait izleme ve harcama belgelerini
              onayladıktan sonra, o taksite denk gelen faiz/kâr payı desteği
              tutarını işletmenin hesabına geri ödemesiz olarak aktarır. 20
              puanı aşan faiz farkını işletme kendisi karşılar; bu nedenle
              başvuru öncesinde bankanızdan alacağınız güncel faiz/kâr payı
              teklifini bu 20 puanla kıyaslayarak gerçek maliyeti hesaplamanız
              önemlidir.
            </p>
          </div>
        </section>

        {/* 4. GİDERLER */}
        <section id="giderler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Desteklenen Gider Kalemleri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Kullanılan kredi, aşağıdaki gider kalemlerinden bir veya
            birkaçı için kullanılabilir; hangi kalemlerin projeye dahil
            edileceği, işletmenin sunduğu proje başvuru formunda
            belirlenir ve KOSGEB Kurulu tarafından değerlendirilir.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Personel giderleri",
              "Makine, teçhizat ve kalıp alımı",
              "Yazılım giderleri",
              "Eğitim, danışmanlık ve mentorluk hizmetleri",
              "Tasarım ve belgelendirme hizmetleri",
              "Test, analiz ve sertifikasyon giderleri",
              "İşletme sermayesi",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <span className="text-orange-500">✔</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg leading-9 text-gray-700">
            Bu geniş gider yelpazesi, programın yalnızca makine-teçhizat
            yatırımına değil; personel, yazılım, danışmanlık ve işletme
            sermayesi gibi büyüme sürecinin farklı ihtiyaçlarına aynı anda
            cevap verecek şekilde tasarlandığını gösteriyor. Bu, özellikle
            ihracat kapasitesini büyütmek için hem üretim hem de kurumsal
            yapı yatırımı yapması gereken işletmeler için avantajlı bir
            esneklik sunuyor.
          </p>
        </section>

        {/* 5. FARK */}
        <section id="fark" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Kapasite Geliştirme Programı ile Farkı
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            KOSGEB&apos;in aynı dönemde duyurduğu iki program sık sık
            karıştırılıyor. Aradaki en belirgin fark, hedef kitle ve giriş
            şartlarında ortaya çıkıyor:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Konu</th>
                  <th className="p-5">Küresel Rekabetçilik DP</th>
                  <th className="p-5">Kapasite Geliştirme DP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi limiti</td>
                  <td className="p-5">20-50 milyon TL</td>
                  <td className="p-5">1-20 (istisnai durumlarda 30) milyon TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Hedef profil</td>
                  <td className="p-5">İhracat/teknoloji/Ar-Ge odaklı hızlı büyüyen işletmeler</td>
                  <td className="p-5">Ölçek büyütme, dijital dönüşüm yatırımı yapan imalatçı/hizmet KOBİ&apos;leri</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Sektör kısıtı</td>
                  <td className="p-5">Belirgin bir NACE kısıtı yok, profil kriterleri belirleyici</td>
                  <td className="p-5">İmalat, telekomünikasyon, yazılım, Ar-Ge ağırlıklı NACE kodları</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Ekstra belge şartı</td>
                  <td className="p-5">Profil kriterine göre değişir (Ar-Ge/ihracat verisi)</td>
                  <td className="p-5">İmalatta Sanayi Sicil Belgesi ve YODA raporu</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Başvuru dönemi</td>
                  <td className="p-5">Sürekli</td>
                  <td className="p-5">Dönemsel çağrılar (yılda birkaç kez)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-lg leading-9 text-gray-700">
            Pratikte, ihracatını ve teknoloji seviyesini istikrarlı biçimde
            artıran, orta-büyük ölçekli bir yatırım ihtiyacı olan işletmeler
            için Küresel Rekabetçilik Destek Programı daha uygun bir seçenek
            olarak öne çıkarken; üretim kapasitesini büyütmek isteyen ve
            dönemsel başvuru takvimine uyum sağlayabilen imalat/yazılım
            KOBİ&apos;leri için Kapasite Geliştirme Destek Programı daha
            erişilebilir bir alternatif sunuyor.
          </p>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Adım Adım Başvuru Süreci
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">1. KBS Kaydı ve Beyan</h3>
              <p className="mt-3 text-sm text-gray-600">
                İşletme, e-Devlet üzerinden KOBİ Bilgi Sistemi&apos;ne (KBS)
                kayıtlı olmalı ve İşletme Beyanı&apos;nı güncel tutmalıdır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔎</div>
              <h3 className="text-xl font-bold">2. Profil Teyidi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Bölüm 2&apos;deki dört kriterden hangisini sağladığınızı,
                gerekiyorsa ihracat/Ar-Ge harcaması verileriyle netleştirin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💻</div>
              <h3 className="text-xl font-bold">3. e-Hizmetler Başvurusu</h3>
              <p className="mt-3 text-sm text-gray-600">
                KOSGEB e-Hizmetler platformu üzerinden proje başvuru
                formu doldurulur ve talep edilen kredi tutarı, gider
                kalemleriyle birlikte beyan edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧮</div>
              <h3 className="text-xl font-bold">4. Kurul Değerlendirmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Başvuru, KOSGEB Kurulu tarafından değerlendirilir; kredi
                tutarı ve destek puanı onaylanır veya revize edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏦</div>
              <h3 className="text-xl font-bold">5. Banka Kredi Kullanımı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onay sonrası, protokollü bir banka/finans kuruluşundan kredi
                kullanılır; ilk kullanım proje başından itibaren 3 ay içinde
                yapılmalıdır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📊</div>
              <h3 className="text-xl font-bold">6. İzleme ve Geri Ödeme</h3>
              <p className="mt-3 text-sm text-gray-600">
                Taksitler ödendikçe, KOSGEB uzmanının onayladığı dönemsel
                izlemeye bağlı olarak faiz/kâr payı desteği işletmeye
                geri ödemesiz aktarılır.
              </p>
            </div>
          </div>
        </section>

        {/* 7. DİKKAT */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Dikkat Edilmesi Gerekenler
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="space-y-4 text-gray-700">
              <li>✔ Bu bir hibe değil, kredi + faiz desteği mekanizmasıdır — anapara işletme tarafından geri ödenir.</li>
              <li>✔ Faiz/kâr payı oranı 20 puanı aşıyorsa aradaki farkı işletme kendisi karşılar; başvuru öncesi banka teklifini mutlaka kıyaslayın.</li>
              <li>✔ Program, KOSGEB veri tabanındaki büyüme/teknoloji/ihracat verilerine dayanır; bu verilerin güncel ve doğru olması başvurunun onaylanabilirliğini doğrudan etkiler.</li>
              <li>✔ Erken kapatılan taksitler ve yeniden yapılandırılan krediler için destek ödemesi kesintiye uğrayabilir.</li>
              <li>✔ Aynı proje için birden fazla banka/finans kuruluşundan eş zamanlı kredi kullanılamaz.</li>
              <li>✔ Başvuru sürekli açık olsa da yıllık program bütçesi sınırlıdır; erken başvuru avantaj sağlayabilir.</li>
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
                Küresel Rekabetçilik Destek Programı hibe midir?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Program, işletmenin protokollü bir bankadan kredi
                kullanmasına dayanır; anapara işletme tarafından geri
                ödenir. KOSGEB yalnızca kredinin faiz/kâr payı giderinin 20
                puanlık kısmını geri ödemesiz olarak karşılar.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Şahıs firması bu programa başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Program yalnızca Limited veya Anonim Şirket
                statüsündeki işletmelere açıktır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                İhracat yapmayan bir işletme başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Dört başvuru profilinden ikisi ihracat performansına
                dayanıyor, ancak yüksek teknoloji + öncelikli ürün listesi
                veya Turcorn 100 Programı kriterlerinden birini sağlayan
                işletmeler için ihracat şartı aranmıyor. Kendi durumunuzu
                Bölüm 2&apos;deki dört profille karşılaştırmanız gerekir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Başvuru için belirli bir dönem beklemem gerekiyor mu?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Kapasite Geliştirme Destek Programı&apos;ndan farklı
                olarak Küresel Rekabetçilik Destek Programı&apos;nda sabit
                bir başvuru dönemi yoktur; şartları sağlayan işletmeler
                yılın herhangi bir zamanında başvurabilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Kredi için hangi bankalarla çalışılıyor?
              </h3>
              <p className="leading-8 text-gray-700">
                KOSGEB, Ziraat Bankası, Halkbank, VakıfBank ve Ziraat Katılım
                Bankası ile protokol imzalamış durumda. Güncel protokollü
                kuruluş listesi KOSGEB&apos;in resmî destek sayfasından
                teyit edilmelidir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Hem Kapasite Geliştirme hem Küresel Rekabetçilik Programı&apos;na aynı anda başvurulabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Bu, işletmenin hangi programın şartlarını sağladığına ve her
                bir programın kendi kısıtlarına (örneğin daha önce
                yararlanma durumu) bağlıdır. Kesin cevap için başvuru
                öncesinde KOSGEB Bilgi Sistemi üzerinden veya bölge
                müdürlüğünden teyit alınması önerilir.
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
            Küresel Rekabetçilik Destek Programı, ihracatını ve teknoloji
            seviyesini büyüten, belirli bir ölçeğe ulaşmış KOBİ&apos;ler için
            KOSGEB&apos;in sunduğu en yüksek bütçeli finansman araçlarından
            biri. Ancak 50 milyon TL&apos;lik kredi limitine ulaşmak, doğru
            profili doğru şekilde belgelemekten geçiyor — hangi kriterden
            başvurduğunuzu, ihracat/Ar-Ge verilerinizin KOSGEB sisteminde
            nasıl göründüğünü ve kredi/faiz yükünüzün gerçek maliyetini
            başvuru öncesinde netleştirmek, sürecin en kritik adımı.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin hangi profile uygun olduğunun tespitinden başvuru
            dosyasının hazırlanmasına, kredi/faiz karşılaştırmasından
            destek sonrası izleme ve raporlama süreçlerine kadar tüm
            aşamalarda Koray Akdağ / Sistem Global Danışmanlık olarak
            yanınızdayız. Ayrı bir danışmanlık firması aramanıza gerek
            kalmadan; teşvik başvurunuzdan mali danışmanlık ve raporlama
            ihtiyacınıza kadar tüm süreci tek noktadan yönetebiliriz.
            Şirketinizin bu programdan yararlanma potansiyelini birlikte
            değerlendirmek için bizimle iletişime geçebilirsiniz.
          </p>
        </section>
    </BlogLayout>
  );
}
