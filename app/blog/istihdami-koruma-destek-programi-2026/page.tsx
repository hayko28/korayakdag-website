import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "İstihdamı Koruma Destek Programı 2026-2 Dönemi | Koray Akdağ",
  description: "1 Eylül-31 Ekim 2026 başvuru döneminde sadece finansman desteği (12 puan) açık; KOBİ 50M TL/büyük işletme 150M TL kredi limiti, Ocak-Haziran 2026 referans dönemiyle güncel rehber.",
  keywords: [
    "İstihdamı Koruma Destek Programı",
    "İstihdamı Koruma Destek Programı 2026-2 dönemi",
    "KOSGEB finansman desteği 2026",
    "imalat sanayi istihdam desteği",
    "istihdamı koruma kredi limiti hesaplama",
    "KOBİ istihdam koruma programı",
    "büyük işletme istihdamı koruma",
    "KOSGEB prim gün desteği Ocak Haziran 2026",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İstihdamı Koruma Destek Programı 2026-2 Dönemi: Sadece Finansman Desteği Açık (1 Eylül-31 Ekim 2026)"
      description="KOSGEB'in 2026-2 başvuru döneminde (1 Eylül-31 Ekim 2026) sadece finansman desteği (12 puan) sunuluyor; 3.500 TL'lik performans desteği bu dönemde yok. Ocak-Haziran 2026 referans dönemi, Temmuz-Aralık 2026 koruma dönemi, KOBİ/büyük işletme kredi limitleri ve örnek hesaplamalarla güncel rehber."
      category="KOSGEB • İSTİHDAM DESTEĞİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="istihdami-koruma-destek-programi-2026"
      coverImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            İstihdamı Koruma Destek Programı, imalat sanayinde faaliyet
            gösteren işletmelerin istihdamını korumaları karşılığında
            geri ödemesiz destek ve uygun koşullu kredi imkânı sunan,
            KOSGEB tarafından dönemsel olarak (belirli tarih
            aralıklarında açılıp kapanan &quot;dönem&quot;ler hâlinde)
            yürütülen bir destek mekanizmasıdır. Program şu ana kadar
            iki farklı dönemde, iki farklı kural setiyle uygulandı:{" "}
            <strong>2026-1 döneminde</strong> (3 Mart-30 Nisan 2026
            başvuru) hem 3.500 TL&apos;lik performans desteği hem de
            10 puanlık finansman desteği birlikte sunulmuştu.{" "}
            <strong>Şu an açık olan 2026-2 döneminde</strong> (1
            Eylül-31 Ekim 2026 başvuru) ise kurallar değişti:
            performans desteği bu dönemde YOK, yalnızca finansman
            desteği (12 puana çıkarıldı) uygulanıyor ve kapsam artık
            büyük işletmeleri de kapsayacak şekilde genişletildi. Bu
            rehberi, hangi dönemin hangi kurala tabi olduğunu net
            ayırt edecek şekilde güncelledik.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Şu an açık dönem (2026-2) ile geçmiş dönem (2026-1) arasındaki fark</li>
            <li>✔ Kimler başvurabilir, hangi şart aranıyor?</li>
            <li>✔ Neden bu dönemde performans desteği (3.500 TL) yok?</li>
            <li>✔ Kredi limiti nasıl hesaplanıyor? (KOBİ ve büyük işletme, formüllü örnekler)</li>
            <li>✔ Referans dönem ve koruma dönemi hangi aylar?</li>
            <li>✔ Başvuru tarihleri ve Eylül 2026 itibarıyla durum</li>
            <li>✔ Şirketlerden gerçekçi örnek hesaplamalar</li>
            <li>✔ Dikkat edilmesi gereken kritik noktalar</li>
          </ul>
        </div>

        {/* KISACA / TEK CÜMLE ÖZET */}
        <div className="mt-10 rounded-2xl border-2 border-[#071A2F] bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🎯 Kısaca: Program Ne Yapıyor?
          </h2>
          <p className="text-xl leading-9 text-gray-800">
            <strong>Şu an açık olan 2026-2 döneminde</strong> (başvuru:
            1 Eylül-31 Ekim 2026), <strong>2026 yılı Ocak-Haziran
            ayları ortalama SGK prim gün sayısını Temmuz-Aralık 2026
            döneminde koruyan imalat sanayi işletmelerine</strong>{" "}
            kredi faizinin/kâr payının bir kısmını karşılayan{" "}
            <strong>finansman desteği</strong> sağlanır — bu dönemde
            çalışan başına nakdi <strong>performans desteği (3.500 TL)
            yoktur</strong>, sadece finansman kanalı açık. Şirket yeni
            personel almak zorunda değil; Ocak-Haziran 2026
            döneminde çalıştırdığı kişi sayısını (prim günü olarak)
            Temmuz-Aralık 2026&apos;da düşürmeden sürdürmesi yeterli.
            (Geçmiş 2026-1 döneminde hem 3.500 TL performans desteği
            hem finansman desteği birlikte sunulmuştu ve referans
            dönem Kasım-Aralık 2025&apos;ti — bu eski dönemin kuralları
            Bölüm 3&apos;te ayrıca özetlenmiştir.)
          </p>
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
              3. Destek Türleri, Tutarları ve Kredi Limiti Formülü
            </Link>
            <Link href="#ornekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Şirketlerden Gerçekçi Örnek Hesaplamalar
            </Link>
            <Link href="#sektorler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Hangi Sektörler Hangi Destekten Yararlanıyor?
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Başvuru Süreci ve Ağustos 2026 İtibarıyla Durum
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Adım Adım Süreç ve Ödeme Mekanizması
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              10. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. BÖLÜM */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Program Nedir, Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            İstihdamı Koruma Destek Programı, imalat sanayinde üretim
            sürekliliğini korumak, işverenlerin personel maliyetlerini
            hafifletmek ve işletmelerin finansmana erişimini
            kolaylaştırmak amacıyla 2026 yılında hayata geçirilen yeni
            bir destek mekanizmasıdır. Program, tek bir kurumun değil;
            Sanayi ve Teknoloji Bakanlığı, Çalışma ve Sosyal Güvenlik
            Bakanlığı, KOSGEB ve İŞKUR&apos;un ortaklaşa yürüttüğü geniş
            kapsamlı bir yapıya sahiptir. KOBİ ölçeğindeki işletmeler
            başvurularını KOSGEB üzerinden yaparken, büyük ölçekli
            işletmeler doğrudan Sanayi ve Teknoloji Bakanlığı&apos;na
            başvuruda bulunmaktadır.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Programın Öne Çıkan Amaçları
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ İmalat sanayinde mevcut istihdam seviyesinin korunması</li>
              <li>✔ Özellikle emek yoğun sektörlerde işten çıkarmaların önüne geçilmesi</li>
              <li>✔ Üretim sürekliliğinin ve tedarik zincirinin güçlendirilmesi</li>
              <li>✔ İşletmelerin uygun koşullu krediyle finansmana erişiminin kolaylaştırılması</li>
              <li>✔ Rekabet gücü zayıflayan alt sektörlere hedefli destek sağlanması</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Program, tarihe göre iki ayrı destek unsurunu barındırabiliyor:
            belirli emek yoğun sektörlerde çalışan başına doğrudan
            ödenen <strong>geri ödemesiz performans desteği</strong>{" "}
            (2026-1 döneminde vardı, 2026-2&apos;de yok) ve imalat
            sanayinin geneline yönelik <strong>kredi faiz/kâr payı
            desteği</strong> (her iki dönemde de mevcut). Ağustos 2026
            itibarıyla KOSGEB, sadece bu program üzerinden 17.843
            işletmeye 11,2 milyar TL destek sağlandığını ve 685.953
            istihdamın korunmasına katkı sunulduğunu açıkladı — bu da
            programın klasik KOSGEB hibelerine kıyasla çok daha büyük
            bir bütçeyle tasarlandığını gösteriyor.
          </p>
          <div className="mt-10 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🆕 2026-2 Dönemi (1 Eylül-31 Ekim 2026): Ne Değişti?
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              28 Ağustos 2026&apos;da KOSGEB &quot;İstihdamı Koruma
              Destek Programının Kapsamı Genişletildi&quot; başlıklı
              duyuruyla yeni bir başvuru dönemini (2026-2) açtı. Bu
              dönemde geçerli başlıca kurallar:
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-emerald-600">
              <li><strong>Performans desteği (3.500 TL) bu dönemde uygulanmıyor</strong> — sadece finansman desteği açık.</li>
              <li>Finansman desteğinde destek puanı <strong>10 puandan 12 puana</strong> çıkarıldı.</li>
              <li>Kredi limiti KOBİ&apos;ler için <strong>50 milyon TL</strong>, büyük işletmeler için <strong>150 milyon TL</strong>&apos;ye kadar.</li>
              <li>Kapsam ilk kez <strong>büyük işletmeleri</strong> de içerecek şekilde genişletildi (önceki dönemde sadece KOBİ&apos;ler başvurabiliyordu).</li>
              <li>Referans dönem <strong>Ocak-Haziran 2026</strong>, koruma dönemi <strong>Temmuz-Aralık 2026</strong> olarak belirlendi (önceki dönemden farklı).</li>
              <li>Kredi vadesi yine azami 36 ay, ilk 6 ayı anapara ödemesiz.</li>
            </ul>
          </div>
        </section>

        {/* 2. KİMLER BAŞVURABİLİR */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Başvurabilir, Kimler Başvuramaz?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programdan yararlanmak isteyen işletmelerin hem sektörel hem
            de istihdam ile ilgili belirli koşulları sağlaması
            gerekiyor. Başvuru öncesinde aşağıdaki kriterlerin
            tamamının karşılandığından emin olunmalıdır.
          </p>
          <div className="mb-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ❓ Mevcut Personel mi, Yeni İşe Alım mı? En Çok Karıştırılan Nokta
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Programın adı (&quot;istihdamı <strong>koruma</strong>&quot;)
              zaten cevabı veriyor: KOBİ&apos;ler ve genel imalat
              işletmeleri için bu program <strong>yeni personel almayı
              değil, mevcut personeli işten çıkarmamayı</strong>
              destekliyor. Somut bir kişi sayısı şartı yok; ölçüt tamamen
              göreceli — kendi geçmiş ortalamanıza göre.
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
              <li><strong>KOBİ / genel imalat işletmesi iseniz:</strong> referans döneminizdeki ortalama aylık prim gün sayınızı (2026-2&apos;de Ocak-Haziran 2026, 2026-1&apos;de Kasım-Aralık 2025), koruma dönemi boyunca (en az 6 ay) koruyor veya aşıyor olmanız yeterli. 40 çalışanla başladıysanız 41. kişiyi işe almanız gerekmiyor; 40 kişiyi (veya eşdeğer prim gününü) korumanız yeterli.</li>
              <li><strong>Yatırım teşvik belgeli büyük ölçekli işletme iseniz:</strong> Durum farklı. Bu işletmelerin, bu programdan bağımsız olarak zaten teşvik belgelerinde taahhüt ettikleri bir &quot;ilave istihdam&quot; (yeni yaratılacak iş) sayısı var. Destek/kredi almak için, tamamlama vizesini takip eden 6 aylık dönemde toplam SGK prim gün bildiriminin, <strong>taahhüt edilen ilave istihdamın yarısı × 180 gün</strong> eşiğine ulaşması gerekiyor — yani burada gerçekten yeni personel alıp sürdürmeleri gerekiyor (detaylı hesaplama için Bölüm 4, Örnek 3&apos;e bakınız).</li>
            </ul>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Başvuru Şartları
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Merkez veya şube ana ya da yan faaliyetinin NACE Kodu Kısım C (İmalat) altında olması</li>
                <li>✔ KOBİ statüsünde ise KOBİ Bilgi Sistemi kaydının ve beyannamesinin güncel olması</li>
                <li>✔ 2026-2 döneminde: 2026 yılı Ocak-Haziran ortalama aylık prim gün sayısını Temmuz-Aralık 2026&apos;da koruyor olmak (2026-1 döneminde katılanlar için referans Kasım-Aralık 2025&apos;ti)</li>
                <li>✔ İstihdam koruma döneminin en az 6 ay olması</li>
                <li>✔ Referans dönemde ortalama prim gün sayısının sıfırdan büyük olması (sigortalı çalıştırmayan işyerleri kapsam dışıdır)</li>
                <li>✔ 2026-2 döneminde artık büyük işletmeler de başvurabiliyor (önceki dönemde sadece KOBİ&apos;ler kapsamdaydı)</li>
                <li>✔ KOSGEB&apos;e vadesi geçmiş herhangi bir borcunun bulunmaması (veya yapılandırılmış olması)</li>
                <li>✔ Programın öngördüğü taahhütname ve başvuru formunun eksiksiz sunulması</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Başvuramayacak / Dikkat Edilmesi Gereken Durumlar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ İmalat sanayi dışında faaliyet gösteren işletmeler</li>
                <li>❌ Referans döneminde ortalama prim gün sayısı sıfır olan veya sigortalı çalıştırmadığı için beyanname vermeyen işyerleri</li>
                <li>❌ Referans dönem ortalamasını koruma dönemi boyunca sağlayamayan işletmeler</li>
                <li>❌ KOBİ Bilgi Sistemi kaydı veya beyannamesi güncel olmayan KOBİ&apos;ler</li>
                <li>❌ Yapılandırılmamış, vadesi geçmiş KOSGEB borcu bulunan işletmeler</li>
                <li>❌ Büyük ölçekli işletmeler için KOSGEB yerine Sanayi ve Teknoloji Bakanlığı kanalı geçerlidir</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              📐 İstihdam Korunmuş Sayılma Yöntemleri
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Bir işyerinin istihdamı koruduğu, aşağıdaki iki yöntemden
              biriyle tespit ediliyor (kıyaslama noktası, başvurulan
              döneme göre değişir — 2026-2 döneminde Ocak-Haziran 2026
              ortalaması, 2026-1 döneminde Kasım-Aralık 2025
              ortalamasıdır):
            </p>
            <ol className="ml-6 list-decimal space-y-3 text-gray-700 marker:font-bold marker:text-blue-600">
              <li>Ödeme talep edilen ayın prim gün sayısının, referans dönem ortalamasına eşit veya fazla olması</li>
              <li>Koruma dönemi başından ödeme talep edilen aya kadarki ortalamanın, referans dönem ortalamasına eşit veya fazla olması</li>
            </ol>
            <p className="mt-4 leading-8 text-gray-700">
              Prim gün hesaplamasında küsuratlar dikkate alınmıyor; 30
              günden az prim günü olan aylarda destek tutarı orantılı
              olarak hesaplanıyor (bkz. Bölüm 3).
            </p>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🏭 İşletme Ölçeğine Göre Başvuru Kanalı
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Program, işletme büyüklüğüne göre iki ayrı başvuru
              kanalına sahiptir:
            </p>
            <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6">
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li><strong>KOBİ ölçeğindeki işletmeler</strong> — başvurularını KOSGEB üzerinden yapar.</li>
                <li><strong>Büyük ölçekli işletmeler</strong> — başvurularını doğrudan Sanayi ve Teknoloji Bakanlığı&apos;na yapar.</li>
              </ul>
            </div>
            <p className="mt-6 leading-8 text-gray-700">
              İşletmenin KOBİ ya da büyük ölçekli sınıfında
              değerlendirilmesi, güncel KOBİ Bilgi Sistemi kayıtları
              esas alınarak belirlenir. Bu nedenle başvuru öncesinde
              işletme beyannamesinin güncel olduğundan emin olunması
              kritik önem taşır.
            </p>
          </div>
        </section>

        {/* 3. TUTARLAR */}
        <section id="tutarlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Destek Türleri ve Tutarları
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Program iki farklı destek unsurunu barındırabiliyor:
            belirli emek yoğun sektörlere özgü <strong>geri ödemesiz
            performans desteği</strong> ve imalat sanayinin geneline
            yönelik <strong>kredi + faiz/kâr payı desteği</strong>
            (finansman desteği). Ancak bu iki unsur her dönemde birlikte
            sunulmuyor — <strong>şu an açık olan 2026-2 döneminde
            (1 Eylül-31 Ekim 2026) sadece finansman desteği var,
            performans desteği bu dönemde uygulanmıyor.</strong> Aşağıdaki
            tablo her iki dönemi ayrı ayrı gösteriyor.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kalem</th>
                  <th className="p-5">2026-1 Dönemi (kapandı)</th>
                  <th className="p-5">2026-2 Dönemi (şu an açık)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Başvuru Tarihleri</td>
                  <td className="p-5">3 Mart - 30 Nisan 2026</td>
                  <td className="p-5">1 Eylül - 31 Ekim 2026</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Referans Dönem</td>
                  <td className="p-5">Kasım-Aralık 2025 ortalama prim günü</td>
                  <td className="p-5">Ocak-Haziran 2026 ortalama prim günü</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Koruma Dönemi</td>
                  <td className="p-5">Ocak-Aralık 2026</td>
                  <td className="p-5">Temmuz-Aralık 2026</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Performans Desteği</td>
                  <td className="p-5">Var — tekstil/giyim/deri/mobilya/düğme-fermuar, çalışan başına aylık 3.500 TL (KOBİ üst limiti 10.458.000 TL)</td>
                  <td className="p-5 font-semibold text-red-600">Yok</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Finansman Desteği Puanı</td>
                  <td className="p-5">10 puana kadar</td>
                  <td className="p-5">12 puana kadar</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti</td>
                  <td className="p-5">İşletme başına 50.000.000 TL</td>
                  <td className="p-5">KOBİ: 50.000.000 TL · Büyük işletme: 150.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kimler Başvurabilir</td>
                  <td className="p-5">Sadece KOBİ&apos;ler</td>
                  <td className="p-5">KOBİ&apos;ler + büyük işletmeler</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Kredi Vadesi</td>
                  <td className="p-5" colSpan={2}>Azami 36 ay (ilk 6 ayı anapara ödemesiz), faiz sabit %37 azami veya TLREF+1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Not: 2026-1 döneminde başvurup onay alan işletmeler, kendi
            koruma dönemleri (Ocak-Aralık 2026) boyunca eski kurallara
            göre ödeme talep etmeye devam edebilir. Yeni başvuru yapacak
            işletmeler için geçerli olan, 2026-2 dönemi kurallarıdır.
          </p>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Destek Nasıl Ödeniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              <strong>Şu an açık olan 2026-2 döneminde</strong> işletme
              KOSGEB&apos;in protokollü olduğu bir banka veya finans
              kuruluşundan kredi kullanır; anaparayı kendisi öderken
              faiz/kâr payı yükünün <strong>12 puana kadar olan
              kısmı</strong> KOSGEB tarafından geri ödemesiz olarak
              karşılanır. Bu dönemde nakdi/performans desteği talep
              edilemez. (2026-1 döneminde katılmış olan işletmeler,
              kendi koruma dönemleri boyunca eski kurala göre —
              performans desteğinde çalışan başına aylık 3.500 TL,
              işletme/SGK hesabına veya Go Dijital Cüzdan&apos;a
              aktarılarak, finansman desteğinde 10 puana kadar —
              ödeme talep etmeye devam edebiliyor.) Aynı destek unsuru
              için KOSGEB&apos;ten eş zamanlı çifte ödeme yapılmaz.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border border-purple-200 bg-purple-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🧮 Kredi Limiti Nasıl Hesaplanıyor?
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              <strong>Şu an açık olan 2026-2 döneminde</strong>{" "}
              geçerli formül:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border bg-white p-6">
                <h4 className="mb-3 text-lg font-bold text-[#071A2F]">KOBİ&apos;ler ve Büyük İşletmeler (2026-2)</h4>
                <p className="text-gray-700">
                  2026 Ocak-Haziran dönemine ait muhtasar ve prim
                  hizmet beyannamelerinde beyan edilen, destek
                  kapsamındaki işyerleri bazında prime esas kazanç
                  toplamının aylık ortalaması. Finansal veya Ar-Ge
                  yetkinliği olan işletmelerde bu tutar bir kat
                  artırımlı (2 katı) uygulanabilir. KOBİ&apos;lerde üst
                  limit 50.000.000 TL, büyük işletmelerde 150.000.000
                  TL&apos;dir.
                </p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <h4 className="mb-3 text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgeli İşletmeler (2026-1, kapanan dönem)</h4>
                <p className="text-gray-700">
                  2026-1 döneminde katılmış yatırım teşvik belgeli
                  işletmeler için: teşvik belgesinde öngörülen ilave
                  istihdam sayısı × Ocak ayı asgari ücreti × 6. Bu,
                  yalnızca o dönemde başvurmuş işletmeler için geçerli
                  eski bir kural — Bölüm 4, Örnek 3&apos;te ayrıca
                  gösterilmiştir.
                </p>
              </div>
            </div>
            <p className="mt-6 leading-8 text-gray-700">
              Aşağıdaki bölümde bu formülleri gerçekçi şirket
              örnekleriyle adım adım hesaplıyoruz.
            </p>
          </div>
        </section>

        {/* 4. ÖRNEK HESAPLAMALAR */}
        <section id="ornekler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Şirketlerden Gerçekçi Örnek Hesaplamalar
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Aşağıdaki örnekler, resmî yönetmelikteki formüller
            kullanılarak hazırlanmış varsayımsal şirket senaryolarıdır;
            gerçek şirket adları veya verileri değildir. İlk iki örnek{" "}
            <strong>kapanmış 2026-1 dönemine</strong> ait (yeni
            başvuru yapacaklar için artık geçerli değil, sadece o
            dönemde katılmış işletmeler için referans niteliğinde);
            dördüncü örnek <strong>şu an açık olan 2026-2 dönemine</strong>{" "}
            göre hazırlandı. Kendi işletmeniz için kesin tutar, SGK
            kayıtlarınız ve KOSGEB değerlendirmesiyle netleşir.
          </p>

          <div className="space-y-8">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🧵 Örnek 1 — Tekstil KOBİ&apos;si (2026-1 Dönemi, Performans Desteği — kapandı)
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                <strong>Anadolu Tekstil Ltd. Şti.</strong>, NACE 13
                kapsamında konfeksiyon üretimi yapan, 40 çalışanlı bir
                KOBİ. 2025 Kasım-Aralık referans döneminde ortalama 40
                çalışanın tamamı 30 prim günü üzerinden bildirilmiş.
              </p>
              <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6">
                <p className="text-gray-700">
                  Ağustos ayında da 40 çalışanın 30&apos;u tam ay (30
                  gün), kalan 10&apos;u ise işe giriş/çıkış nedeniyle
                  ortalama 20 gün prim ödemiş olsun:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-700 marker:text-orange-600">
                  <li>30 çalışan × 3.500 TL = <strong>105.000 TL</strong></li>
                  <li>10 çalışan × (20/30 × 3.500 TL) ≈ 10 × 2.333 TL = <strong>23.330 TL</strong></li>
                  <li>Toplam aylık destek ≈ <strong>128.330 TL</strong></li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🪑 Örnek 2 — Mobilya İmalatçısı KOBİ (2026-1 Dönemi, Eski Finansman Formülü — kapandı)
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                <strong>Ege Mobilya San. Tic. A.Ş.</strong>, NACE 31
                kapsamında 25 çalışanlı bir mobilya üreticisi. 2025
                Kasım-Aralık referans döneminde tüm çalışanların aylık
                ortalama prime esas kazanç toplamı 750.000 TL.
                İşletme, 12 aylık bir koruma dönemi taahhüt ediyor.
              </p>
              <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6">
                <p className="text-gray-700">Kredi limiti hesaplaması:</p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-700 marker:text-orange-600">
                  <li>750.000 TL × (12 ay ÷ 6) = 750.000 TL × 2 = <strong>1.500.000 TL</strong></li>
                  <li>Teknik kriterleri karşılıyorsa bir kat artırımla ≈ <strong>3.000.000 TL</strong></li>
                  <li>Bu tutar üzerinden kullanılan kredinin faiz/kâr payının (2026-1 döneminde geçerli olan) 10 puana kadarlık kısmı geri ödemesiz karşılanır</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🏭 Örnek 3 — Yatırım Teşvik Belgeli Büyük Ölçekli İşletme
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                <strong>Marmara Otomotiv Yan Sanayi A.Ş.</strong>,
                yatırım teşvik belgesinde 50 kişilik ilave istihdam
                taahhüt etmiş büyük ölçekli bir üretici. 2026 Ocak ayı
                brüt asgari ücret 33.030 TL.
              </p>
              <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6">
                <p className="text-gray-700">1) Kredi limiti hesaplaması:</p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-700 marker:text-orange-600">
                  <li>50 kişi × 33.030 TL × 6 = <strong>9.909.000 TL</strong></li>
                  <li>50.000.000 TL üst limitinin altında kaldığı için tutarın tamamı geçerli olabilir</li>
                </ul>
              </div>
              <div className="mt-4 rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
                <p className="text-gray-700">2) Desteği fiilen hak etmek için — bu, kredi limitinden ayrı bir şart:</p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-700 marker:text-red-600">
                  <li>Tamamlama vizesi en geç 1 Haziran 2028&apos;e kadar alınmalı</li>
                  <li>Vizeyi takip eden 6 aylık dönemde toplam SGK prim gün bildirimi, (50 ÷ 2) × 180 = <strong>4.500 prim günü</strong> eşiğine ulaşmalı</li>
                  <li>Yani Marmara Otomotiv, 50 kişilik taahhüdün tamamını değil, en az yarısını (25 kişi eşdeğeri) 6 ay boyunca fiilen istihdam etmiş olmalı</li>
                </ul>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Not: Asgari ücret formülde brüt mü net mi esas
                alınacağı Bakanlık tebliğiyle netleşecektir; bu örnekte
                Ocak 2026 brüt asgari ücret (33.030 TL) kullanılmıştır.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-emerald-500 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                ⚙️ Örnek 4 — Metal İşleme KOBİ&apos;si (2026-2 Dönemi, Şu An Açık — Sadece Finansman Desteği)
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                <strong>Trakya Metal İşleme Ltd. Şti.</strong>, NACE 25
                kapsamında metal işleme yapan bir KOBİ. 2026 Ocak-Haziran
                döneminde, destek kapsamındaki işyerlerinde beyan edilen
                prime esas kazanç toplamının aylık ortalaması 1.200.000 TL.
                İşletme Temmuz-Aralık 2026 boyunca bu seviyeyi (prim günü
                olarak) koruyor.
              </p>
              <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6">
                <p className="text-gray-700">Kredi limiti hesaplaması:</p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-gray-700 marker:text-emerald-600">
                  <li>Aylık ortalama prime esas kazanç: <strong>1.200.000 TL</strong> → kredi limiti bu tutar kadar</li>
                  <li>Finansal/Ar-Ge yetkinliği varsa bir kat artırımla ≈ <strong>2.400.000 TL</strong></li>
                  <li>50.000.000 TL (KOBİ üst limiti) altında kaldığı için tutarın tamamı geçerli olabilir</li>
                  <li>Bu tutar üzerinden kullanılan kredinin faiz/kâr payının <strong>12 puana kadarlık</strong> kısmı KOSGEB tarafından geri ödemesiz karşılanır</li>
                  <li>İşletme bu dönemde ayrıca nakdi/performans desteği talep <strong>edemez</strong> — 2026-2&apos;de sadece finansman kanalı açık</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SEKTÖRLER */}
        <section id="sektorler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Hangi Sektörler Hangi Destekten Yararlanıyor?
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            <strong>Şu an açık olan 2026-2 döneminde bu ayrımın bir
            önemi yok</strong> — performans desteği hiçbir sektör için
            uygulanmıyor, NACE Kısım C (İmalat) altındaki tüm KOBİ ve
            büyük işletmeler yalnızca finansman kanalından
            yararlanabiliyor. Aşağıdaki sektör ayrımı, geri ödemesiz
            performans desteğinin uygulandığı 2026-1 dönemi için
            geçerliydi ve o dönemde katılmış işletmeleri ilgilendiriyor.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🧵 Performans Desteği Kapsamındaki NACE Kodları
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li><strong>NACE 13</strong> – Tekstil ürünlerinin imalatı</li>
                <li><strong>NACE 14</strong> – Giyim eşyalarının imalatı</li>
                <li><strong>NACE 15</strong> – Deri ve ilgili ürünlerin imalatı</li>
                <li><strong>NACE 31</strong> – Mobilya imalatı</li>
                <li><strong>NACE 32.99.02</strong> – Düğme, fermuar ve benzeri ürünlerin imalatı</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🏗️ Finansman Desteği Kapsamındaki İşletmeler
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Yukarıdaki beş sektör dışındaki tüm imalat sanayi KOBİ&apos;leri</li>
                <li>Metal, makine, kimya, gıda, plastik gibi diğer imalat alt sektörleri</li>
                <li>Uygun koşullu kredi ile faiz/kâr payı desteğinden yararlanabilir</li>
                <li>Kredi kullandırımı, protokollü bankanın kendi değerlendirme sürecine de tabidir</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. TAKVİM */}
        <section id="takvim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Başvuru Süreci ve Eylül 2026 İtibarıyla Durum
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Program dönemsel olarak yürütülüyor; her dönemin kendi
            başvuru tarih aralığı var. 2026-2 dönemi başvuruları{" "}
            <strong>şu anda açık.</strong>
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">2026-2 Dönemi Başvuru Tarihi</h3>
              <p className="text-gray-700 font-semibold">1 Eylül - 31 Ekim 2026 (açık)</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">2026-1 Dönemi Başvuru Tarihi</h3>
              <p className="text-gray-700">3 Mart - 30 Nisan 2026 (kapandı)</p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 Eylül 2026 İtibarıyla Durum
            </h3>
            <p className="leading-8 text-gray-700">
              28 Ağustos 2026&apos;da KOSGEB&apos;in yaptığı duyuruyla
              2026-2 dönemi başvuruları <strong>1 Eylül 2026&apos;da
              açıldı ve 31 Ekim 2026&apos;a kadar</strong> devam ediyor.
              Bu dönemde sadece finansman desteği başvurusu alınıyor;
              performans desteği (3.500 TL) için yeni başvuru
              yapılamıyor. 2026-1 döneminde (Mart-Nisan 2026) başvurup
              onay almış işletmeler, kendi koruma dönemleri (Ocak-Aralık
              2026) boyunca istihdamlarını korumaları koşuluyla ödeme
              talebinde bulunmaya devam edebiliyor — bu iki grup
              birbirinden bağımsız işliyor. Henüz başvurmamış ve şu an
              açık olan finansman desteğinden yararlanmak isteyen
              işletmelerin, 31 Ekim 2026 son tarihine kadar KOSGEB
              üzerinden başvurusunu tamamlaması gerekiyor. Güncel
              duyurular KOSGEB&apos;in resmî internet sitesi ve KOBİ
              Bilgi Sistemi üzerinden yayımlanmaktadır.
            </p>
          </div>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Adım Adım Süreç ve Ödeme Mekanizması
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Süreç, başvurudan ödeme talebine kadar aşağıdaki adımları
            izler.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🖥️</div>
              <h3 className="text-xl font-bold">1. Kayıt Kontrolü</h3>
              <p className="mt-3 text-sm text-gray-600">
                KOBİ Bilgi Sistemi kaydı ve beyannamesinin güncel olduğu teyit edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">2. Başvuru Formu ve Taahhütname</h3>
              <p className="mt-3 text-sm text-gray-600">
                Başvuru formu doldurulur, taahhütname onaylanır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">3. KOSGEB İncelemesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Sorumlu personel başvuruyu değerlendirip uygulama birimi onayına sunar.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📊</div>
              <h3 className="text-xl font-bold">4. Koruma Dönemi Başlar</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onay sonrası koruma dönemi başlar (2026-2&apos;de Temmuz-Aralık 2026, 6 ay), her ay istihdam korunmalıdır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📎</div>
              <h3 className="text-xl font-bold">5. Aylık Ödeme Talebi</h3>
              <p className="mt-3 text-sm text-gray-600">
                SGK prim gün kayıtları esas alınarak her ay için ödeme talep formu doldurulur.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💸</div>
              <h3 className="text-xl font-bold">6. Desteğin Aktarılması</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onaylanan destek/faiz tutarı, talebi takip eden ayın sonuna kadar SGK hesabına veya Go Dijital Cüzdan&apos;a aktarılır.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ İstihdam Korumasının Ölçüm Şekli
            </h3>
            <p className="leading-8 text-gray-700">
              Destek tutarı, işletmenin referans döneme ait ortalama
              SGK prim gün sayısı esas alınarak hesaplanır (2026-2
              döneminde referans Ocak-Haziran 2026, koruma dönemi
              Temmuz-Aralık 2026). Ortalamanın altına düşülen aylar
              için finansman desteği talep edilemez; ayrıca aynı
              destek unsuru için eş zamanlı çifte ödeme yapılmaz.
            </p>
          </div>
        </section>

        {/* 7. DİKKAT EDİLECEKLER */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li><strong>2026-2 döneminde (şu an açık) performans desteği (3.500 TL) YOKTUR</strong> — sadece finansman desteği başvurusu alınıyor, bu konuda yanlış/eski bilgiyle hareket etmeyin.</li>
              <li>Destek, yalnızca <strong>imalat sanayinde (NACE Kısım C)</strong> faaliyet gösteren işletmeleri kapsar; hizmet ve ticaret sektörleri programın dışındadır.</li>
              <li>Referans dönem ortalama prim gün sayısının altına düşen aylar için finansman desteği talep edilemez; personel planlaması koruma dönemi (2026-2&apos;de Temmuz-Aralık 2026) boyunca dikkatle yönetilmelidir.</li>
              <li>Referans döneminde ortalama prim gün sayısı sıfır olan veya sigortalı çalıştırmadığı için beyanname vermeyen işyerleri programdan yararlanamaz.</li>
              <li>Kredi limiti formülle hesaplanır ve KOBİ&apos;lerde 50.000.000 TL, büyük işletmelerde 150.000.000 TL üst limitini aşamaz.</li>
              <li>Finansman desteğinde kredi anaparası işletme tarafından geri ödenir; KOSGEB yalnızca faiz/kâr payının 12 puana kadar olan kısmını karşılar.</li>
              <li>Kredi kullandırımı, KOSGEB ile protokol imzalamış banka ve finans kuruluşlarının kendi değerlendirme kriterlerine de tabidir.</li>
              <li>2026-1 ve 2026-2 dönemleri farklı kurallara tabidir — hangi döneme göre başvurduğunuzu/onay aldığınızı karıştırmayın.</li>
              <li>Güncel destek tutarları, üst limitler ve başvuru tarihleri zaman içinde güncellenebileceğinden, başvuru öncesinde KOSGEB&apos;in yürürlükteki Uygulama Yönetmeliği ve Yönergesi esas alınmalıdır.</li>
            </ul>
          </div>
        </section>

        {/* 8. SSS */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                İstihdamı Koruma Destek Programı hibe mi, kredi mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Duruma göre değişir. <strong>Şu an açık olan 2026-2
                döneminde</strong> sadece kredi + faiz desteği modeli
                var: işletme bankadan kredi kullanır, anaparayı öder;
                KOSGEB faiz/kâr payının 12 puana kadarlık kısmını geri
                ödemesiz karşılar. Geçmiş 2026-1 döneminde ise tekstil,
                giyim, deri, mobilya ve düğme/fermuar sektörlerinde
                çalışan başına aylık 3.500 TL doğrudan geri ödemesiz
                (hibe niteliğinde) destek de vardı — ama bu, yeni
                başvurular için artık geçerli değil.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                30 günden az prim günüm varsa destek nasıl hesaplanır?
              </h3>
              <p className="leading-8 text-gray-700">
                Orantılı hesaplanır. Örneğin bir çalışan ayın yalnızca
                20 günü prim ödemişse, o çalışan için (20/30) × 3.500 TL
                ≈ 2.333 TL destek talep edilebilir. Örnek 1&apos;deki
                Anadolu Tekstil hesaplamasında bu mantık uygulanmıştır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Hizmet veya ticaret sektöründeki bir şirket başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Program yalnızca imalat sanayinde faaliyet
                gösteren işletmeleri kapsamaktadır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                2026-2 döneminde başvurmak için şimdi ne yapmalıyım?
              </h3>
              <p className="leading-8 text-gray-700">
                Başvurular <strong>1 Eylül - 31 Ekim 2026</strong>{" "}
                arasında açık. İşletmenizin Ocak-Haziran 2026 dönemine
                ait prime esas kazanç/prim gün verilerini, KOBİ Bilgi
                Sistemi kayıtlarınızı güncel tutup KOSGEB üzerinden
                başvurunuzu 31 Ekim 2026&apos;ya kadar tamamlamanız
                gerekiyor — bu tarihten sonra bu dönem için başvuru
                alınmaz.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Büyük işletmeler kredi limitini nasıl hesaplar?
              </h3>
              <p className="leading-8 text-gray-700">
                <strong>2026-2 döneminde (şu an açık):</strong> 2026
                Ocak-Haziran dönemine ait prime esas kazanç toplamının
                aylık ortalaması esas alınır, 150.000.000 TL üst
                limitini aşamaz (bkz. Örnek 4). <strong>2026-1
                döneminde (kapandı), yatırım teşvik belgeli işletmeler
                için</strong> farklı bir formül geçerliydi: teşvik
                belgesinde öngörülen ilave istihdam sayısı × Ocak ayı
                asgari ücreti × 6 (bkz. Örnek 3) — ama bu yalnızca o
                dönemde başvurmuş işletmeleri ilgilendiriyor, kredi
                limitini belirler; desteği fiilen hak etmek ayrı bir
                şarttır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Bu programda mevcut çalışanlarım mı korunuyor, yoksa yeni personel mi almalıyım?
              </h3>
              <p className="leading-8 text-gray-700">
                KOBİ&apos;ler ve genel imalat işletmeleri için:
                <strong> mevcut çalışanlarınız</strong> korunuyor;
                somut bir kişi sayısı şartı yok, yalnızca referans
                dönem ortalama prim gün sayınızı koruma döneminde
                (en az 6 ay) koruyor olmanız yeterli. Yatırım teşvik
                belgeli büyük ölçekli işletmeler için ise durum farklı:
                bu işletmelerin teşvik belgesinde zaten taahhüt ettiği
                &quot;ilave istihdam&quot; sayısının en az yarısını,
                tamamlama vizesini takip eden 6 aylık dönemde
                (yarısı × 180 gün prim eşdeğeri) fiilen istihdam etmiş
                olması gerekiyor — bu grup için gerçekten yeni personel
                alıp sürdürme şartı var.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Destek tutarı her ay otomatik mi yatıyor?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. İşletmenin her ay istihdamını koruduğunu SGK
                kayıtlarıyla göstermesi ve ödeme talep formunu
                doldurması gerekir. Onaylanan tutar, talebi takip eden
                ayın sonuna kadar SGK hesabına veya Go Dijital
                Cüzdan&apos;a aktarılır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Danışmanlık desteği almak zorunlu mu?
              </h3>
              <p className="leading-8 text-gray-700">
                Zorunlu değildir, ancak işletmenin hangi destek
                kanalına (performans mı finansman mı) uygun olduğunun
                doğru tespit edilmesi, kredi limiti formülünün doğru
                uygulanması, prim gün hesaplamalarının titizlikle
                takip edilmesi ve başvuru/ödeme talep süreçlerinin
                zamanında yürütülmesi alınacak destek tutarını
                doğrudan etkilemektedir.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 İstihdamı Koruma Desteği Hesaplamanızı Birlikte Yapalım
            </h3>
            <p className="leading-8 text-gray-700">
              Şirketinizin çalışan sayısına ve varsa yatırım teşvik
              belgenize göre ne kadar destek ve kredi avantajından
              yararlanabileceğinizi doğru hesaplamak, çevrimiçi başvuru
              sürecini eksiksiz yönetmek için uzman desteği önemlidir.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Şirketiniz için destek tutarını hesaplamamız amacıyla
                bizimle iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* 9. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            İstihdamı Koruma Destek Programı dönemsel olarak işliyor ve
            her dönemin kuralları farklı olabiliyor. <strong>Şu an açık
            olan 2026-2 döneminde (1 Eylül-31 Ekim 2026 başvuru)</strong>{" "}
            sadece finansman desteği var — performans desteği (3.500
            TL) bu dönemde uygulanmıyor — ama karşılığında finansman
            puanı 12&apos;ye çıkarıldı, kredi limiti büyük işletmelerde
            150 milyon TL&apos;ye kadar yükseldi ve kapsam ilk kez
            büyük işletmeleri de içerecek şekilde genişledi. İmalat
            sanayinde faaliyet gösteren KOBİ ve büyük işletmeler için
            2026&apos;nın en kapsamlı istihdam odaklı finansman
            mekanizmalarından biri olmaya devam ediyor. 31 Ekim 2026
            son başvuru tarihine kadar zaman var, ama referans dönem
            (Ocak-Haziran 2026) verilerinizi ve KOBİ Bilgi Sistemi
            kayıtlarınızı şimdiden hazırlamanız başvuruyu hızlandırır.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin bu programdan ve diğer güncel devlet destek/teşvik
            programlarından hangileriyle örtüştüğünü belirlemek, kredi
            limiti hesaplamasını doğru yapmak, SGK prim gün takibini
            yönetmek, başvuru ve ödeme talep sürecini uçtan uca yürütmek
            için Koray Akdağ / Sistem Global Danışmanlık olarak
            yanınızdayız. Ayrı bir danışmanlık firması aramanıza gerek
            kalmadan, hem destek başvuru sürecinizi hem de sonrasındaki
            raporlama ve uyum yükümlülüklerinizi tek noktadan
            yürütebiliriz.
          </p>
        </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/6111-sayili-kanun-genc-kadin-istihdam-tesviki-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">SGK TEŞVİKLERİ • İSTİHDAM • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">6111 Sayılı Kanun İstihdam Teşviki: Genç, Kadın ve Mesleki Belge Sahibi Çalışanlar</h3>
        </Link>
        <Link
          href="/blog/kosgeb-kobi-dijital-donusum-destek-programi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DİJİTAL DÖNÜŞÜM • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB KOBİ Dijital Dönüşüm Destek Programı 2026</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
