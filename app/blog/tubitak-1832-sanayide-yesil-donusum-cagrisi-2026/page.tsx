import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı 2026-2: Kimler Başvurabilir, Destek Oranları? | Koray Akdağ",
  description:
    "Dünya Bankası destekli Türkiye Yeşil Sanayi Projesi kapsamındaki TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı 2026-2; 51,5 milyon TL'ye varan bütçe üst sınırı, %70-%90 destek oranı, geri ödemeli desteğin en az yarısının hibeye dönüşmesi ve 28 Eylül 2026 son başvuru tarihiyle güncel rehber.",
  keywords: [
    "TÜBİTAK 1832",
    "Sanayide Yeşil Dönüşüm Çağrısı",
    "1832 çağrısı 2026",
    "Türkiye Yeşil Sanayi Projesi",
    "TÜBİTAK yeşil dönüşüm desteği",
    "TEYDEB 1832",
    "PRODİS başvuru",
    "yeşil Ar-Ge desteği",
    "Dünya Bankası TÜBİTAK",
    "2026 TÜBİTAK çağrıları",
  ],
};

export default function Tubitak1832Page() {
  return (
    <BlogLayout
      title="TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı 2026-2: Kimler Başvurabilir, Destek Oranları Nedir?"
      description="Dünya Bankası destekli Türkiye Yeşil Sanayi Projesi kapsamındaki TÜBİTAK 1832 Çağrısı'nda 51,5 milyon TL'ye varan bütçe üst sınırı, %70-%90 destek oranı, geri ödemeli desteğin en az yarısının hibeye dönüşmesi ve 28 Eylül 2026 son başvuru tarihiyle güncel rehber."
      category="TÜBİTAK • YEŞİL DÖNÜŞÜM • 2026"
      date="2026"
      readTime="13 Dakika"
      coverImage="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="tubitak-1832-sanayide-yesil-donusum-cagrisi-2026"
    >
      {/* GİRİŞ / UYARI KUTUSU */}
      <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🔴 Son Başvuru 28 Eylül 2026: Ön Kayıt İçin Zaman Daralıyor
        </h2>
        <p className="leading-8 text-gray-700">
          TÜBİTAK, Dünya Bankası destekli Türkiye Yeşil Sanayi Projesi
          kapsamında <strong>1832 Sanayide Yeşil Dönüşüm Çağrısı&apos;nın</strong>{" "}
          2026-2 dönemini <strong>3 Ağustos 2026</strong>&apos;da başvuruya açtı.
          Kuruluş bazlı ön kayıt işleminin{" "}
          <strong>24 Eylül 2026</strong>&apos;a kadar tamamlanması, proje
          önerisinin PRODİS üzerinden gönderilmesinin ise{" "}
          <strong>28 Eylül 2026</strong> tarihine kadar yapılması gerekiyor.
          Çağrının en dikkat çekici yanı, kullanılacak desteğin geri ödemeli
          olmasına rağmen en az yarısının proje sonunda hibeye dönüşmesi ve
          KOBİ&apos;ler için destek oranının %80&apos;e, deprem bölgesindeki
          KOBİ&apos;ler için %90&apos;a kadar çıkabilmesi.
        </p>
      </div>

      {/* BU REHBERDE NELER VAR */}
      <div className="mt-16 rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Üretim sürecinde enerji, su veya kaynak verimliliğini artırmaya,
          atığı azaltmaya ya da yeni bir yeşil teknoloji geliştirmeye yönelik
          bir Ar-Ge fikri olan KOBİ ve büyük ölçekli şirketler için TÜBİTAK
          1832 Çağrısı, faizsiz ve büyük kısmı hibeye dönüşen bir finansman
          fırsatı sunuyor. Bu yazıda çağrının kapsamını, şartlarını ve
          başvuru sürecini uçtan uca ele alıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ 1832 Çağrısı tam olarak nedir, hangi projeye dayanır?</li>
          <li>✔ Kimler başvurabilir, hangi şartlar aranır?</li>
          <li>✔ Desteklenen 5 öncelikli alan neler?</li>
          <li>✔ Bütçe üst sınırı ve destek oranları ne kadar?</li>
          <li>✔ Geri ödeme nasıl işliyor, hangi kısmı hibeye dönüşüyor?</li>
          <li>✔ Hangi giderler destekleniyor, hangileri kapsam dışı?</li>
          <li>✔ Adım adım başvuru süreci ve kritik tarihler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. TÜBİTAK 1832 Nedir?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir? Aranan Şartlar
          </Link>
          <Link href="#alanlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Desteklenen Öncelikli Alanlar
          </Link>
          <Link href="#destek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Bütçe Üst Sınırı ve Destek Oranları
          </Link>
          <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Desteklenen ve Desteklenmeyen Giderler
          </Link>
          <Link href="#gostergeler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. THS Şartı ve Yeşil Dönüşüm Göstergeleri
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Diğer Yeşil Dönüşüm Destekleriyle İlişkisi
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          1832 Sanayide Yeşil Dönüşüm Çağrısı, Sanayi ve Teknoloji
          Bakanlığı&apos;nın koordinasyonunda, TÜBİTAK ve KOSGEB tarafından
          yürütülen ve Dünya Bankası&apos;nın 450 milyon dolarlık finansman
          tahsis ettiği <strong>Türkiye Yeşil Sanayi Projesi&apos;nin</strong>{" "}
          bir parçasıdır. Proje kapsamında TÜBİTAK-TEYDEB, 6 yıl sürecek
          program boyunca sanayinin yeşil dönüşümünü desteklemek üzere 175
          milyon dolarlık finansman ayırmış durumda. 1832 Çağrısı, bu
          finansmanın firmalara Ar-Ge desteği olarak aktarıldığı ana
          araçlardan biri.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Çağrı kapsamında, firmaların yeşil dönüşüm faaliyetlerine yönelik{" "}
          <strong>Teknoloji Hazırlık Seviyesi (THS) 3-9</strong> aralığındaki
          Ar-Ge çalışmaları destekleniyor. Beklenen; kavramsal aşamayı geçmiş
          bir teknolojiye yönelik yeni prototip geliştirme, mevcut bir Ar-Ge
          prototipi üzerinde ileri geliştirme/iyileştirme çalışması veya
          prototipin doğrulanmasına/onaylanmasına yönelik ticarileşme odaklı
          teknoloji doğrulama testleri yürütülmesi. Geliştirilen teknoloji ya
          da prototipin ölçek büyütme (scale-up) faaliyetlerinin de
          yapılması zorunlu tutuluyor.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Çağrının Amacı
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Üretimde enerji ve kaynak verimliliğini artırmak</li>
            <li>✔ Çevresel etkiyi azaltan yeni teknoloji, ürün ve süreçler geliştirmek</li>
            <li>✔ Sanayinin karbon ayak izini küçültmesine katkı sağlamak</li>
            <li>✔ Prototip aşamasındaki yeşil teknolojilerin ölçeklenmesini desteklemek</li>
            <li>✔ Türkiye&apos;nin yeşil sanayi dönüşümünü hızlandırmak</li>
          </ul>
        </div>
        <p className="text-lg leading-9 text-gray-700">
          Önceki çağrı dönemlerine göre 2026-2 döneminde birkaç önemli
          değişiklik var: bir kuruluş için geçerli olan &quot;en fazla 2
          proje&quot; sınırlaması kaldırılıp kuruluş bazlı bütçe takibine
          geçildi, konu başlıkları genişletildi, projenin önceki bir Ar-Ge
          çalışmasının devamı olma şartı kaldırıldı ve THS kapsamı 5-9&apos;dan
          3-9&apos;a genişletildi.
        </p>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir? Aranan Şartlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Çağrıya, yeşil teknoloji, ürün veya süreç geliştirmeye yönelik
          Ar-Ge faaliyetinde bulunan <strong>Türkiye&apos;de yerleşik
          sermaye şirketleri</strong> başvurabilir. Başvuru sahibi KOBİ veya
          büyük ölçekli kuruluş olabilir; en fazla üç ortaklı başvuru da
          mümkündür.
        </p>
        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            ✅ Temel Başvuru Şartları
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
            <li>
              Firmanın tescil tarihinin üzerinden <strong>en az 2 yıl</strong>{" "}
              geçmiş olmalı (spin-off&apos;lar ve TÜBİTAK 1512/1812 desteğiyle
              kurulmuş şirketler bu şarttan muaf).
            </li>
            <li>
              Yürütücü kuruluş, <strong>en az %75 oranında özel sektöre
              ait</strong> olmalı (ortaklı projelerde bu koşul ortaklar için
              aranmıyor).
            </li>
            <li>
              Desteklenmesi halinde teminat sunulabileceğine dair bankadan
              alınan <strong>Referans Mektubu</strong> başvuruya eklenmeli.
            </li>
            <li>
              Son 3 yılın ortalama aktif toplamı veya net satışları, talep
              edilen geri ödemeli finansman tutarından büyük olmalı.
            </li>
            <li>
              Başvuru ekibinde proje konusuyla ilgili en az lisans
              derecesine sahip bir personel bulunmalı.
            </li>
            <li>
              Proje, Çevresel ve Sosyal Risk Yönetimi Beyan Formu&apos;nda
              tanımlanan tarama kriterlerine göre iklim, çevresel ve sosyal
              risklerle ilişkilendirilmeli.
            </li>
          </ul>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Çağrı, Dünya Bankası finansmanıyla yürütüldüğü için başvuru
          sahiplerinden ulusal çevre mevzuatına uygunluğun yanı sıra Dünya
          Bankası&apos;nın Çevresel ve Sosyal Çerçevesi&apos;ne uygun
          belge/rapor sunması da istenir (ÇED durumu, atık su/emisyon
          yönetimi, iş sağlığı ve güvenliği belgeleri, NACE kodu beyanı
          gibi). Bu belgelerin başvuru öncesinde derlenmesi süreci önemli
          ölçüde hızlandırır.
        </p>
      </section>

      {/* 3. ÖNCELİKLİ ALANLAR */}
      <section id="alanlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Desteklenen Öncelikli Alanlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Sunulacak projenin, 2026-2 çağrısında genişletilen aşağıdaki beş
          konu başlığından en az biri kapsamına girmesi bekleniyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🌍</div>
            <h3 className="text-xl font-bold text-[#071A2F]">İklim Değişikliği, Çevre ve Biyoçeşitlilik</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">♻️</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Temiz ve Döngüsel Ekonomi</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">⚡</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Temiz, Erişilebilir ve Güvenli Enerji Arzı</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🌾</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Yeşil ve Sürdürülebilir Tarım</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🚆</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Sürdürülebilir Akıllı Ulaşım</h3>
          </div>
        </div>
      </section>

      {/* 4. DESTEK TUTARI VE ORANLARI */}
      <section id="destek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Bütçe Üst Sınırı ve Destek Oranları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Proje bütçesi üst sınırı, firma ölçeğine göre değişiyor. Destek
          süresi en fazla <strong>24 ay</strong>.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Firma Ölçeği</th>
                <th className="p-5">Bütçe Üst Sınırı</th>
                <th className="p-5">Destek Oranı</th>
                <th className="p-5">Kendi Katkısı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mikro / Küçük Ölçekli KOBİ</td>
                <td className="p-5">15.000.000 TL</td>
                <td className="p-5 font-bold text-green-600">%80</td>
                <td className="p-5">%20</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Orta Ölçekli KOBİ</td>
                <td className="p-5">24.000.000 TL</td>
                <td className="p-5 font-bold text-green-600">%80</td>
                <td className="p-5">%20</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Deprem Bölgesindeki KOBİ</td>
                <td className="p-5">Ölçeğine göre 15-24 milyon TL</td>
                <td className="p-5 font-bold text-green-600">%90</td>
                <td className="p-5">%10</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Büyük Ölçekli Şirket</td>
                <td className="p-5">51.500.000 TL</td>
                <td className="p-5 font-bold text-green-600">%70</td>
                <td className="p-5">%30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-green-500 bg-green-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            💰 Destek Geri Ödemeli mi, Hibe mi?
          </h3>
          <p className="leading-8 text-gray-700">
            Sermaye şirketlerine sağlanan destek, <strong>faizsiz geri
            ödemeli</strong> nitelikte; ancak kullanılan desteğin{" "}
            <strong>en fazla %50&apos;si</strong> geri ödenmek üzere
            veriliyor. Yani destek tutarının en az yarısı proje sonunda
            hibeye dönüşüyor. Geri ödenmesi gereken kısmın ödemesi, proje
            bittikten <strong>1 yıl sonra</strong> başlıyor. TÜBİTAK&apos;tan
            talep edilen geri ödemeli desteğin tamamı için başvuru
            aşamasında Banka Referans Mektubu, sözleşme aşamasında ise
            Teminat Mektubu sunulması gerekiyor.
          </p>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Not: Rakamlar TÜBİTAK&apos;ın resmî 1832 program sayfasındaki genel
          esasları yansıtır; kesin ve güncel tutarlar için başvuru öncesinde
          2026-2 çağrı duyurusu birebir kontrol edilmelidir.
        </p>
      </section>

      {/* 5. GİDERLER */}
      <section id="giderler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Desteklenen ve Desteklenmeyen Giderler
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-green-700">
              ✔ Desteklenen Giderler
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
              <li>Personel giderleri</li>
              <li>Seyahat giderleri</li>
              <li>Danışmanlık giderleri</li>
              <li>Hizmet alımı giderleri (CE, kalite belgelendirme ve sertifikasyon dahil)</li>
              <li>Alet, teçhizat, yazılım ve yayın alım giderleri</li>
              <li>Malzeme ve sarf giderleri</li>
              <li>Ekonomik fizibilite raporu hizmet alım gideri (Yönetim Kurulu&apos;nun belirlediği tutara kadar)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-red-700">
              ✘ Desteklenmeyen Giderler
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
              <li>Ortaklı projelerde kuruluşların birbirinden aldığı danışmanlık/hizmet alımı giderleri</li>
              <li>
                Patent, faydalı model, tasarım, coğrafi işaret ve marka
                tescil giderleri (bu giderler için ayrıca 1602 TÜBİTAK Patent
                Destek Programı&apos;na başvurulabilir)
              </li>
              <li>
                &quot;Proje Özel Hesabı ve Ödemeler&quot; esaslarına uygun
                yapılmayan harcama ve giderler
              </li>
              <li>1801 Uygulama Esasları&apos;nda genel olarak kapsam dışı sayılan giderler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. THS VE GÖSTERGELER */}
      <section id="gostergeler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. THS Şartı ve Yeşil Dönüşüm Göstergeleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Projenin başlangıç Teknoloji Hazırlık Seviyesi (THS) en az 3,
          bitiş seviyesi en az 7 olmalı ve proje kapsamında ölçek büyütme
          (scale-up) çalışmaları mutlaka yer almalı. THS 3&apos;ten önceki
          çalışmalar temel araştırma niteliğinde sayıldığından, THS
          8&apos;den başlayan çalışmalar ise Ar-Ge sürecinin büyük kısmı
          tamamlanmış kabul edildiğinden çağrı kapsamı dışında tutuluyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ayrıca, projenin aşağıdaki Yeşil Dönüşüm Göstergelerinden (YDG) en
          az birini proje sonunda karşılamış olması gerekiyor. Hangi
          göstergenin hedeflendiği ve hedefe ulaşıldığının hangi iş paketiyle
          doğrulanacağı, proje önerisinde açıkça tanımlanmalı.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#071A2F]">YDG 1</h3>
            <p className="mt-2 text-gray-600">Üretim birimi başına elektrik tüketiminde en az %10 azalma</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#071A2F]">YDG 2</h3>
            <p className="mt-2 text-gray-600">Üretim birimi başına su tüketiminde en az %10 azalma</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#071A2F]">YDG 3</h3>
            <p className="mt-2 text-gray-600">Geri dönüştürülemeyen atık miktarında en az %10 azalma</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#071A2F]">YDG 4</h3>
            <p className="mt-2 text-gray-600">Yenilikçi yeşil teknoloji çözümlerinin geliştirilmesi</p>
          </div>
        </div>
      </section>

      {/* 7. BAŞVURU SÜRECİ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Adım Adım Başvuru Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📋</div>
            <h3 className="text-lg font-bold">1. Belge Hazırlığı</h3>
            <p className="mt-2 text-sm text-gray-600">Referans Mektubu, Çevresel ve Sosyal Risk Beyan Formu ve ekleri derlenir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📝</div>
            <h3 className="text-lg font-bold">2. Proje Önerisi Hazırlama</h3>
            <p className="mt-2 text-sm text-gray-600">THS aralığı, YDG hedefi ve gider bütçesi netleştirilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💻</div>
            <h3 className="text-lg font-bold">3. Ön Kayıt</h3>
            <p className="mt-2 text-sm text-gray-600">PRODİS üzerinden 24 Eylül 2026&apos;ya kadar tamamlanmalı</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📤</div>
            <h3 className="text-lg font-bold">4. Nihai Başvuru</h3>
            <p className="mt-2 text-sm text-gray-600">28 Eylül 2026&apos;ya kadar PRODİS üzerinden gönderilir</p>
          </div>
        </div>
        <div className="mt-12 overflow-x-auto rounded-2xl border bg-white">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Aşama</th>
                <th className="p-4">Tarih</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Çağrı Açılışı</td>
                <td className="p-4">3 Ağustos 2026</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Kuruluş Bazlı Ön Kayıt Son Tarihi</td>
                <td className="p-4">24 Eylül 2026</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-red-600">Proje Önerisi Gönderim Son Tarihi (Çağrı Kapanışı)</td>
                <td className="p-4 font-semibold text-red-600">28 Eylül 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Başvurular, TEYDEB Proje Değerlendirme ve İzleme Sistemi (PRODİS,{" "}
          eteydeb.tubitak.gov.tr) üzerinden elektronik ortamda yapılıyor. Ön
          değerlendirmede uygun bulunan projeler hakem değerlendirme sürecine
          alınıyor; hakem değerlendirmeleri firma ziyaretiyle birlikte
          yürütülüyor. Proje önerileri; endüstriyel Ar-Ge içeriği/teknoloji
          düzeyi/yenilikçi yönü, proje planı ve kuruluş altyapısının
          uygunluğu, proje çıktılarının ekonomik yarara dönüşebilirliği olmak
          üzere üç boyutta puanlanıyor. NACE kodu çağrı kapsamına uygun
          olmayan, THS aralığı dışında kalan veya YDG&apos;yle
          ilişkilendirilemeyen projeler, hakem sürecine gitmeden reddedilme
          riski taşıyor.
        </p>
      </section>

      {/* 8. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Diğer Yeşil Dönüşüm Destekleriyle İlişkisi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          1832 Çağrısı, şirketin Ar-Ge tarafındaki yeşil dönüşüm yatırımını
          finanse ederken; sürdürülebilirlik alanındaki raporlama
          yükümlülükleri ve dolaylı destek mekanizmaları farklı
          düzenlemelerden geliyor. Aşağıdaki tablo, ilgili başlıkları
          birbirinden ayırmaya yardımcı olur.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Konu</th>
                <th className="p-4">Odak</th>
                <th className="p-4">İlgili Yazı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">TÜBİTAK 1832</td>
                <td className="p-4">Yeşil dönüşüm Ar-Ge/prototip finansmanı</td>
                <td className="p-4 text-gray-500">Bu yazı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">
                  <Link href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026" className="text-orange-600 hover:underline">
                    TÜBİTAK 1501 / 1507
                  </Link>
                </td>
                <td className="p-4">Genel amaçlı sanayi Ar-Ge projeleri (geri ödemesiz hibe)</td>
                <td className="p-4 text-gray-500">/blog/tubitak-1501-1507-ar-ge-destekleri-2026</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">
                  <Link href="/blog/kosgeb-cop31-odakli-hizlandirma-destegi-cagrisi-2026" className="text-orange-600 hover:underline">
                    KOSGEB COP31 Hızlandırma Desteği
                  </Link>
                </td>
                <td className="p-4">TEKMER/Teknokent üzerinden yeşil dönüşüm hızlandırma</td>
                <td className="p-4 text-gray-500">/blog/kosgeb-cop31-odakli-hizlandirma-destegi-cagrisi-2026</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">
                  <Link href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026" className="text-orange-600 hover:underline">
                    TSRS Sürdürülebilirlik Raporlama
                  </Link>
                </td>
                <td className="p-4">Belirli eşiği aşan şirketler için zorunlu raporlama</td>
                <td className="p-4 text-gray-500">/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>
              Ön kayıt son tarihi (24 Eylül) ile nihai başvuru tarihi (28
              Eylül) farklıdır; ön kayıt onayı alınmadan PRODİS üzerinden
              proje önerisi gönderilemez.
            </li>
            <li>
              Destek faizsiz olsa da geri ödemeli kısmı için başvuruda Banka
              Referans Mektubu, sözleşme aşamasında Teminat Mektubu
              sunulması zorunludur; bu belgelerin temini zaman alabileceğinden
              erken başlanmalıdır.
            </li>
            <li>
              Proje, Dünya Bankası&apos;nın Çevresel ve Sosyal Çerçevesi&apos;ne
              uygun yürütülmek zorunda; ÇED durumu, atık/emisyon yönetimi ve
              iş sağlığı-güvenliği belgelerinin eksiksiz sunulması gerekir.
            </li>
            <li>
              Firmanın tescil tarihinin en az 2 yıl önce olması şartı,
              yeni kurulan şirketleri (spin-off ve 1512/1812 destekli
              girişimler hariç) kapsam dışında bırakır.
            </li>
            <li>
              Rakamsal üst limitler ve destek oranları TÜBİTAK tarafından her
              çağrı döneminde güncellenebilir; başvuru öncesinde 2026-2 çağrı
              duyurusunun güncel metninin teyit edilmesi önemlidir.
            </li>
          </ul>
        </div>
      </section>

      {/* 10. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              1832 desteği geri ödemeli mi, hibe mi?
            </h3>
            <p className="leading-8 text-gray-700">
              İkisinin karışımı. Destek faizsiz geri ödemeli olarak
              veriliyor, ancak kullanılan tutarın en fazla %50&apos;si geri
              ödenmek üzere sağlanıyor; yani en az yarısı proje sonunda
              hibeye dönüşüyor. Geri ödenmesi gereken kısmın taksitleri,
              proje bittikten 1 yıl sonra başlıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeni kurulan bir şirket başvurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel kural olarak hayır; firmanın tescil tarihinin üzerinden
              en az 2 yıl geçmiş olması gerekiyor. Ancak spin-off şirketler
              ile TÜBİTAK 1512 veya 1812 desteğiyle kurulmuş şirketler bu
              şarttan muaf tutuluyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ortaklı başvuru yapılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, çağrıya en fazla üç ortaklı başvuru yapılabilir. Ortaklı
              projelerde, %75 özel sektör ortaklığı şartı yalnızca yürütücü
              kuruluş için aranır; diğer ortaklar için bu koşul aranmaz.
              Ancak ortakların birbirinden aldığı danışmanlık/hizmet alımı
              giderleri desteklenmez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              THS 3-9 aralığı ne anlama geliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Teknoloji Hazırlık Seviyesi (THS), bir teknolojinin fikir
              aşamasından ticarileşmeye ne kadar yakın olduğunu gösteren bir
              ölçek. 1832 Çağrısı&apos;nda projenin THS 3&apos;te başlayıp en
              az THS 7&apos;ye ulaşması ve ölçek büyütme çalışmaları içermesi
              bekleniyor; THS 3&apos;ten önceki (temel araştırma) ve THS
              8&apos;den sonraki (Ar-Ge&apos;si büyük ölçüde tamamlanmış)
              çalışmalar kapsam dışında.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 TÜBİTAK 1832 Başvuru Dosyanızı Birlikte Hazırlayalım
          </h3>
          <p className="leading-8 text-gray-700">
            Projeyi doğru öncelikli alanla ilişkilendirmek, THS ve Yeşil
            Dönüşüm Göstergesi hedeflerini gerçekçi kurgulamak, gerekli
            Referans Mektubu ve Çevresel/Sosyal beyan belgelerini eksiksiz
            derlemek, 28 Eylül 2026 son başvuru tarihine kadar PRODİS
            sürecini sorunsuz tamamlamak için kritik önemde.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Projenizi TÜBİTAK 1832 çağrısına hazırlamamız için bizimle
              iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 11. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı, üretim sürecini
          çevresel açıdan iyileştirmeyi hedefleyen KOBİ ve büyük ölçekli
          şirketler için hem yüksek destek oranı (%70-%90) hem de
          desteğin büyük kısmının hibeye dönüşmesi nedeniyle diğer sanayi
          Ar-Ge programlarına kıyasla avantajlı bir konumda. Buna karşılık
          Dünya Bankası finansmanına bağlı çevresel/sosyal uygunluk
          şartları, projenin sadece teknik değil idari açıdan da özenle
          hazırlanmasını gerektiriyor.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          28 Eylül 2026 son başvuru tarihine kadar kalan süre kısıtlı
          olduğundan, ön kayıt için gereken belgelerin derlenmesine ve proje
          önerisinin THS/YDG hedefleriyle uyumlu şekilde kurgulanmasına
          vakit kaybetmeden başlanması önerilir.
        </p>
      </section>
    </BlogLayout>
  );
}
