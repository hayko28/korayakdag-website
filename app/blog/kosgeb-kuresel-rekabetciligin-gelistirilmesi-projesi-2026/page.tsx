import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB Küresel Rekabetçilik Destek Programı 2026 Rehberi | Koray Akdağ",
  description:
    "KOSGEB Küresel Rekabetçiliğin Geliştirilmesi Projesi'nde 30-75 milyon TL kredi, 20 puan geri ödemesiz faiz desteği, başvuru şartları ve 2026 1. dönem takvimiyle güncel rehber.",
  keywords: [
    "küresel rekabetçiliğin geliştirilmesi projesi",
    "kosgeb küresel rekabetçilik destek programı",
    "kosgeb kredi desteği 2026",
    "hızlı büyüyen işletme kosgeb",
    "kosgeb 75 milyon tl kredi",
    "kosgeb ihracat kredisi",
    "turcorn 100 kosgeb",
    "kosgeb kobi bilgi sistemi başvuru",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Küresel Rekabetçiliğin Geliştirilmesi Projesi: Kimler Başvurabilir, Destek Tutarları Nedir?"
      description="KOSGEB Küresel Rekabetçilik Destek Programı kapsamında sunulan 'Küresel Rekabetçiliğin Geliştirilmesi Projesi'nde kimler başvurabilir, kredi ve faiz/kâr payı destek tutarları ne kadar, 2026 başvuru takvimi ve süreç nasıl işler?"
      category="KOSGEB • İHRACAT VE REKABETÇİLİK • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kosgeb-kuresel-rekabetciligin-gelistirilmesi-projesi-2026"
    >
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
        <p className="text-lg font-semibold text-green-800">
          🟢 Güncel: KOSGEB Küresel Rekabetçilik Destek Programı&apos;nın 2026
          yılı 1. başvuru dönemi 7 Eylül 2026 tarihi itibarıyla başladı, son
          başvuru tarihi 30 Eylül 2026. Bu yazıdaki tüm oran ve limitler
          KOSGEB&apos;in resmî destek sayfası ve başvuru kılavuzu esas
          alınarak hazırlanmıştır.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in 2025 yılında uygulamaya aldığı ve KOBİ&apos;lerin
          küresel pazarlarda rekabet gücünü artırmayı hedefleyen{" "}
          <strong>Küresel Rekabetçilik Destek Programı</strong>, işletmelerin
          KOBİ Bilgi Sistemi (KBS) üzerinden sunduğu{" "}
          <strong>&quot;Küresel Rekabetçiliğin Geliştirilmesi Projesi&quot;</strong>{" "}
          başvurularını değerlendirerek 75 milyon TL&apos;ye varan kredi ve
          20 puanlık geri ödemesiz faiz/kâr payı desteği sağlıyor. Bugüne
          kadar sadece 2025 yılında işletmelere toplam 3 milyar TL&apos;lik
          finansmana erişim sağlayan program, 2026&apos;nın ilk döneminde
          yeniden başvurulara açıldı.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Program tam olarak nedir, hibe mi kredi mi?</li>
          <li>✔ Kimler başvurabilir, &quot;hızlı büyüyen işletme&quot; şartı nedir?</li>
          <li>✔ Kredi ve faiz/kâr payı desteği tutarları</li>
          <li>✔ Desteklenen gider kalemleri</li>
          <li>✔ Adım adım KBS başvuru süreci</li>
          <li>✔ 2026 başvuru takvimi</li>
          <li>✔ Diğer KOSGEB programlarıyla farkı</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#program-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Program Nedir, Amacı Ne?
          </Link>
          <Link href="#kimler-basvurabilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir?
          </Link>
          <Link href="#destek-tutarlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Unsurları ve Tutarları
          </Link>
          <Link href="#gider-kalemleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Desteklenen Gider Kalemleri
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. 2026 Başvuru Takvimi
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Diğer KOSGEB Programlarıyla Farkı
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. PROGRAM NEDİR */}
      <section id="program-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Program Nedir, Amacı Ne?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in resmî adıyla <strong>Küresel Rekabetçilik Destek
          Programı</strong>, işletmelerin küresel rekabet ortamında daha
          dayanıklı olmalarını ve rekabet avantajı elde etmelerini sağlamak
          amacıyla yürütülüyor. Program kapsamında işletmelerin KBS
          üzerinden sunduğu başvuruya &quot;Küresel Rekabetçiliğin
          Geliştirilmesi Projesi&quot; deniyor; bu nedenle piyasada iki isim
          bir arada, birbirinin yerine kullanılıyor. Program; yenilikçi
          ürünlerin geliştirilmesini, inovasyon faaliyetleriyle geliştirilmiş
          ürünlerin üretim ve ticarileştirilmesini, üretim süreçlerinin
          optimize edilerek verimliliğin artırılmasını, tedarik zinciri
          yönetiminin güçlendirilmesini, yeni nesil teknolojilerin etkin
          kullanımını ve küresel iş birliklerini içeren projeleri destekliyor.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🚀</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hibe Değil, Kredi + Faiz Desteği
            </h3>
            <p className="text-gray-700">
              İşletme, KOSGEB&apos;le protokollü bir bankadan kredi kullanır;
              KOSGEB bu kredinin faiz/kâr payı giderinin 20 puanlık kısmını
              geri ödemesiz olarak karşılar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Küresel Rekabet Odaklı
            </h3>
            <p className="text-gray-700">
              Hedef, ihracat kapasitesini, Ar-Ge yoğunluğunu ve teknolojik
              seviyeyi yüksek olan ya da hızla büyüyen işletmelerin
              uluslararası pazarlardaki konumunu güçlendirmek.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💰</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Yüksek Tutarlı Finansman
            </h3>
            <p className="text-gray-700">
              KOSGEB&apos;in KOBİ&apos;lere sunduğu kredi destekli
              programlar arasında en yüksek üst limitlerden birine sahip:
              işletme başına 75 milyon TL&apos;ye kadar.
            </p>
          </div>
        </div>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler-basvurabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in resmî Başvuru Kılavuzu&apos;na göre başvuru
          yapacak işletmenin öncelikle iki temel şartı sağlaması gerekiyor:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Genel Şartlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              KOSGEB Veri Tabanı&apos;nda kayıtlı, aktif durumda olmak ve
              İşletme Beyanı&apos;nın güncel olması.
            </li>
            <li>
              Türk Ticaret Kanunu&apos;nda tanımlı gerçek veya tüzel kişi
              statüsünde faaliyet göstermek (uygulamada limited veya anonim
              şirket statüsü aranıyor).
            </li>
          </ul>
        </div>
        <p className="mt-10 mb-6 text-lg leading-9 text-gray-700">
          Bu iki genel şartın yanında, işletmenin aşağıdaki beş kriterden{" "}
          <strong>en az birini</strong> sağlaması gerekiyor:
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="text-gray-700">
              <strong>1)</strong> Orta-yüksek/yüksek teknoloji düzeyinde
              faaliyet gösteren ve son 3 yılda ihracatını artıran{" "}
              <strong>hızlı büyüyen işletme</strong> olmak.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="text-gray-700">
              <strong>2)</strong> Son 3 yılda hem ihracatını hem Ar-Ge
              harcamasını artıran hızlı büyüyen işletme olmak.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="text-gray-700">
              <strong>3)</strong> Yüksek teknoloji düzeyinde faaliyet
              gösteren ve Sanayi ve Teknoloji Bakanlığı&apos;nın öncelikli
              ürün listesinde yer alan bir ürünü üreten orta ölçekli işletme
              olmak.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="text-gray-700">
              <strong>4)</strong> Turcorn 100 Programı kapsamında yer almak.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="text-gray-700">
              <strong>5)</strong> İlgili başvuru döneminde KOSGEB tarafından
              ilan edilen çağrılarda belirtilen sektörel/bölgesel şartları
              sağlayan ihracatçı işletme olmak.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🚀 &quot;Hızlı Büyüyen İşletme&quot; Nasıl Tanımlanıyor?
          </h3>
          <p className="leading-8 text-gray-700">
            KOSGEB&apos;in genel tanımına göre hızlı büyüyen işletme;{" "}
            <strong>
              hesaplamaya esas başlangıç yılında en az 10 çalışanı (3.600
              prim günü) olan ve üç yıllık periyotta istihdamında veya net
              satış hasılatında GSYH deflatörüyle enflasyondan arındırılmış
              olarak yıllık ortalama %10 ve üzerinde büyüme gösteren
            </strong>{" "}
            işletme olarak tanımlanıyor. Hesaplama yalnızca başvuru sahibi
            işletmenin kendi verileri üzerinden yapılıyor; ortak/bağlı
            işletmeler dikkate alınmıyor. Başlangıç yılı ve karşılaştırma
            periyodu her başvuru dönemi için KOSGEB tarafından yeniden
            belirlendiğinden, güncel baz yılın başvuru öncesinde KBS
            üzerindeki dönem duyurusundan teyit edilmesi gerekiyor. KBS&apos;ye
            başvuru yapılırken bu şart sistem tarafından otomatik olarak
            kontrol ediliyor.
          </p>
        </div>
      </section>

      {/* 3. DESTEK TUTARLARI */}
      <section id="destek-tutarlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Unsurları ve Tutarları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program, doğrudan hibe modeliyle değil <strong>kredi + faiz/kâr
          payı desteği</strong> mantığıyla çalışır: işletme, KOSGEB ile
          protokol imzalamış bir banka veya finans kuruluşundan kredi
          kullanır; kredinin faiz/kâr payı giderinin belirli bir puanlık
          kısmını KOSGEB geri ödemesiz olarak işletmeye öder. Kredinin
          anaparası ise işletme tarafından bankaya geri ödenir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Unsur</th>
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
                <td className="p-5 font-semibold">Faiz/Kâr Payı Destek Puanı</td>
                <td className="p-5">20 puan (geri ödemesiz)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Proje Süresi</td>
                <td className="p-5">24 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Azami Kredi Vadesi</td>
                <td className="p-5">36 ay (3&apos;er aylık eşit taksitler)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Anlaşmalı Kuruluşlar</td>
                <td className="p-5">Ziraat Bankası, Halkbank, VakıfBank, Ziraat Katılım Bankası</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>20 puan ne anlama geliyor?</strong> KOSGEB, kredinin
            faiz/kâr payı oranının en fazla 20 puanlık kısmını karşılıyor.
            Anlaşmalı bankanın uyguladığı gerçek faiz oranı 20 puanın
            üzerindeyse, aşan kısmı işletme kendisi ödüyor. Destek tek
            seferde peşin ödenmiyor: işletme krediyi kullanıyor, taksitlerini
            ödedikçe ve şartları sağladığı sürece KOSGEB, ilgili taksite
            denk gelen faiz/kâr payı desteği tutarını işletmenin hesabına
            geri ödemesiz olarak aktarıyor. Kredinin tamamı tek bir finansal
            kuruluştan kullanılabiliyor; kredi alt limitin altında talep
            olması durumunda başvuru KOSGEB Kurulu tarafından
            değerlendirmeye alınmıyor.
          </p>
        </div>
      </section>

      {/* 4. GİDER KALEMLERİ */}
      <section id="gider-kalemleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Desteklenen Gider Kalemleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kredi kullanımı, aşağıdaki gider kategorilerinden birine veya
          birkaçına yönelik olarak yapılabilir; kredinin hangi kalemlere
          ayrılacağı proje başvurusunda belirtilir:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li><strong>Personel giderleri:</strong> Proje kapsamında istihdam edilecek/edilen personelin maliyetleri.</li>
            <li><strong>Makine, teçhizat ve kalıp giderleri:</strong> Üretim optimizasyonu ve kapasite artırımı için gerekli yatırımlar.</li>
            <li><strong>Yazılım giderleri:</strong> Üretim, tasarım, tedarik zinciri veya dijitalleşmeye yönelik yazılım lisans/geliştirme maliyetleri.</li>
            <li><strong>Hizmet alımı:</strong> Eğitim, danışmanlık, mentorluk, test-analiz, sertifikasyon, tasarım, pazarlama ve fikri mülkiyet hizmetleri.</li>
            <li><strong>İşletme sermayesi:</strong> Projenin yürütülmesine bağlı işletme sermayesi ihtiyacı.</li>
          </ul>
        </div>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Adım Adım Başvuru Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Başvurunun tamamı elektronik ortamda, KOBİ Bilgi Sistemi (KBS)
          üzerinden yürütülür; fiziksel evrak teslimi gerekmez.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">e-Devlet ile KBS Girişi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Şart Kontrolü (Otomatik)</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Proje Başvuru Formu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">KOSGEB Kurulu Değerlendirmesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Onay ve Taahhütname</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">6</div>
            <h3 className="text-lg font-bold">Bankadan Kredi Kullanımı</h3>
          </div>
        </div>

        <div className="mt-14 space-y-10">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5.1. KBS&apos;ye Giriş ve Şart Kontrolü
            </h3>
            <p className="leading-8 text-gray-700">
              İşletme yetkilisi, e-Devlet şifresiyle KOBİ Bilgi Sistemi&apos;ne
              giriş yapar. Sistem, işletmenin KOSGEB Veri Tabanı kaydını,
              güncel İşletme Beyanı&apos;nı ve &quot;hızlı büyüyen
              işletme&quot; şartını (veya diğer dört kriterden birini)
              otomatik olarak kontrol eder.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5.2. Küresel Rekabetçiliğin Geliştirilmesi Projesi Başvuru Formu
            </h3>
            <p className="leading-8 text-gray-700">
              Şartları sağlayan işletme, proje amacını, hedeflenen ürün/süreç
              iyileştirmesini, talep edilen kredi tutarını ve gider
              kalemlerini içeren başvuru formunu elektronik olarak doldurup
              KBS üzerinden gönderir.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5.3. Değerlendirme ve Onay
            </h3>
            <p className="leading-8 text-gray-700">
              Başvuru, ilgili KOSGEB biriminin incelemesinin ardından
              KOSGEB Kurulu tarafından değerlendirilir; onaylanan projeler
              için işletmeden taahhütname alınır.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5.4. Anlaşmalı Bankadan Kredi Kullanımı
            </h3>
            <p className="leading-8 text-gray-700">
              Onay sonrasında işletme, Ziraat Bankası, Halkbank, VakıfBank
              veya Ziraat Katılım Bankası&apos;ndan (KOSGEB ile protokollü
              şube üzerinden) krediyi kullanır. Taksit ödemeleri ilerledikçe
              işletme, o döneme ait harcamaları belgeleyerek (fatura, SGK
              prime esas kazanç tablosu vb.) KBS üzerinden destek talebinde
              bulunur; onaylanan tutar geri ödemesiz olarak işletme hesabına
              aktarılır.
            </p>
          </div>
        </div>
      </section>

      {/* 6. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. 2026 Başvuru Takvimi
        </h2>
        <div className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-green-700">
            📅 2026 Yılı 1. Başvuru Dönemi
          </h3>
          <p className="leading-8 text-gray-700">
            KOSGEB&apos;in resmî duyurusuna göre program 2025&apos;te
            uygulamaya alındı ve sadece ilk uygulama yılında işletmelere
            toplam 3 milyar TL&apos;lik finansmana erişim sağladı. 2026
            yılının ilk başvuru dönemi <strong>7 Eylül 2026</strong>{" "}
            tarihinde başladı ve başvurular <strong>30 Eylül
            2026</strong> tarihine kadar alınacak. KOSGEB, dönemsel çağrı
            usulüyle çalıştığından yıl içinde ek dönemler açılması mümkündür;
            güncel takvim ve olası yeni dönemler için başvuru öncesinde{" "}
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/9206/kuresel-rekabetcilik-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB&apos;in resmî destek sayfasının
            </a>{" "}
            kontrol edilmesi gerekir.
          </p>
        </div>
      </section>

      {/* 7. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Diğer KOSGEB Programlarıyla Farkı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in kredi destekli birden fazla programı bulunduğundan,
          işletmelerin hangi programın kendi profiline uygun olduğunu
          karıştırması sık rastlanan bir durumdur. Aşağıdaki tablo, en çok
          karıştırılan üç programı özetliyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Program</th>
                <th className="p-5">Hedef Kitle</th>
                <th className="p-5">Kredi Üst Limiti</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Küresel Rekabetçilik Destek Programı</td>
                <td className="p-5">Yüksek teknoloji/ihracat/Ar-Ge&apos;de hızlı büyüyen KOBİ&apos;ler, Turcorn 100 işletmeleri</td>
                <td className="p-5">75.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  <Link href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026" className="text-orange-600 underline">
                    Kapasite Geliştirme Destek Programı
                  </Link>
                </td>
                <td className="p-5">Sanayi Sicil Belgeli, hızlı büyüyen imalatçı KOBİ&apos;ler</td>
                <td className="p-5">20-30.000.000 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  <Link href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026" className="text-orange-600 underline">
                    Ar-Ge, Ür-Ge ve İnovasyon Destek Programı
                  </Link>
                </td>
                <td className="p-5">Ar-Ge/inovasyon projesi olan girişimci ve KOBİ&apos;ler (herhangi bir tarihte başvuru)</td>
                <td className="p-5">900.000 TL (destek üst limiti)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kısaca: proje küçük ölçekli bir Ar-Ge/inovasyon fikriyse Ar-Ge,
          Ür-Ge ve İnovasyon Destek Programı; imalat kapasitesini büyütme
          ihtiyacı varsa Kapasite Geliştirme Destek Programı; işletme zaten
          yüksek teknoloji/ihracat/Ar-Ge performansıyla hızlı büyüyorsa ve
          çok daha yüksek tutarlı bir finansmana ihtiyaç varsa Küresel
          Rekabetçilik Destek Programı doğru adres oluyor. İhracata yönelik
          diğer destek kalemlerinin tamamı için{" "}
          <Link href="/blog/ticaret-bakanligi-ihracat-destekleri-2026" className="text-orange-600 underline">
            Ticaret Bakanlığı İhracat Destekleri rehberimize
          </Link>{" "}
          göz atabilirsiniz.
        </p>
      </section>

      {/* 8. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ &quot;Hızlı büyüyen işletme&quot; hesaplamasındaki baz yıl her
            dönem değişebilir, başvuru öncesi KBS&apos;den teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Talep edilen kredi tutarı 30 milyon TL alt limitin altındaysa
            başvuru değerlendirmeye alınmaz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ 20 puan üzerindeki faiz/kâr payı farkını işletmenin kendisi
            karşılar, kredi maliyetini bankanızla önceden netleştirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kredi tek bir anlaşmalı finansal kuruluştan kullanılabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Destek, taksitler ödendikçe ve harcama belgeleri onaylandıkça
            kademeli olarak aktarılır, peşin ödeme beklemeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Başvuru dönemi kısa (3 hafta); proje formunu ve gider
            planlamasını dönem açılmadan önce hazırlayın
          </div>
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
              Küresel Rekabetçiliğin Geliştirilmesi Projesi ile Küresel
              Rekabetçilik Destek Programı aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, iç içe geçmiş iki isim söz konusu. KOSGEB&apos;in resmî
              destek programının adı &quot;Küresel Rekabetçilik Destek
              Programı&quot;dır; işletmelerin bu program kapsamında KBS
              üzerinden sunduğu başvuru ise &quot;Küresel Rekabetçiliğin
              Geliştirilmesi Projesi&quot; olarak adlandırılır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Program hibe mi, geri ödemesi olan bir destek mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Kredinin anaparası bankaya geri ödenir; KOSGEB yalnızca
              kredinin faiz/kâr payı giderinin 20 puanlık kısmını geri
              ödemesiz olarak karşılar. Dolayısıyla program tam bir hibe
              değil, sübvansiyonlu kredi modeliyle çalışır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Her KOBİ başvurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Genel KOSGEB kayıt şartlarının yanında, işletmenin
              hızlı büyüyen + yüksek/orta-yüksek teknoloji, hızlı büyüyen +
              ihracat/Ar-Ge artışı, öncelikli ürün üreten orta ölçekli
              işletme, Turcorn 100 kapsamı veya ilan edilen çağrı şartları
              kriterlerinden en az birini sağlaması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kredi hangi bankalardan kullanılabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              KOSGEB ile protokol imzalamış Ziraat Bankası, Halkbank,
              VakıfBank ve Ziraat Katılım Bankası üzerinden kredi
              kullanılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026&apos;da başka başvuru dönemi olacak mı?
            </h3>
            <p className="leading-8 text-gray-700">
              KOSGEB program açıklamasında dönemsel çağrı usulünü
              kullanıyor; 1. dönem 30 Eylül 2026&apos;da kapanacak. Yıl
              içinde yeni dönem açılıp açılmayacağı KOSGEB&apos;in resmî
              duyurularından takip edilmelidir.
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
          KOSGEB Küresel Rekabetçilik Destek Programı, ihracat performansı,
          Ar-Ge yoğunluğu veya teknoloji seviyesiyle zaten öne çıkan ve hızlı
          büyüyen KOBİ&apos;ler için KOSGEB&apos;in sunduğu en yüksek tutarlı
          kredi destekli finansman kaynaklarından biri. Ancak başvuru
          şartlarının teknik detaylı olması (hızlı büyüyen hesaplaması,
          beş kriterden birinin sağlanması, kısa başvuru penceresi), proje
          formunun ve gider planlamasının başvuru dönemi açılmadan önce
          hazır olmasını gerektiriyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Başvuru Uygunluğunuzu Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            İşletmenizin &quot;hızlı büyüyen işletme&quot; şartını sağlayıp
            sağlamadığından proje formunun hazırlanmasına, gider kalemlerinin
            planlanmasından anlaşmalı banka süreciyle koordinasyona kadar
            başvurunuzu baştan sona birlikte yürütebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Uygunluk değerlendirmesi için bizimle iletişime geçin.
            </Link>
          </p>
        </div>
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
            href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
          </Link>
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri (2026 Rehberi)</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
