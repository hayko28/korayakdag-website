import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB Sanayide Temiz ve Döngüsel Ekonomi Çağrısı 2026 | Koray Akdağ",
  description:
    "KOSGEB'in 3 milyar TL bütçeli Sanayide Temiz ve Döngüsel Ekonomi Teklif Çağrısı'nda imalatçı KOBİ'ler 7 milyon TL'ye kadar, %70 oranında, faizsiz geri ödemeli destek alabiliyor. Ön başvuru 9 Aralık 2026'da kapanıyor. Şartlar, gider kalemleri ve başvuru takvimiyle güncel rehber.",
  keywords: [
    "KOSGEB Sanayide Temiz ve Döngüsel Ekonomi Çağrısı",
    "KOSGEB Yeşil Sanayi Destek Programı",
    "KOSGEB yeşil dönüşüm desteği 2026",
    "imalatçı KOBİ KOSGEB desteği",
    "KOSGEB 7 milyon TL destek",
    "KOSGEB geri ödemeli destek",
    "KOSGEB ön başvuru 2026",
    "sanayi sicil belgesi KOSGEB destek",
  ],
  alternates: {
    canonical: "/blog/kosgeb-sanayide-temiz-dongusel-ekonomi-teklif-cagrisi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB'den İmalatçı KOBİ'lere 7 Milyon TL'ye Kadar Yeşil Dönüşüm Desteği: Sanayide Temiz ve Döngüsel Ekonomi Çağrısına Nasıl Başvurulur?"
      description="KOSGEB, Yeşil Sanayi Destek Programı kapsamında 3 milyar TL bütçeli yeni bir çağrı açtı: Sanayide Temiz ve Döngüsel Ekonomi Teklif Çağrısı. İmalat sektöründeki KOBİ'ler, enerji/su/hammadde verimliliği ve döngüsel ekonomi yatırımları için proje başına 7 milyon TL'ye kadar, %70 oranında, faizsiz geri ödemeli destek alabiliyor. Şartlar, gider kalemleri ve ön başvurusu 9 Aralık 2026'da kapanacak takvimle güncel rehber."
      category="KOSGEB • YEŞİL SANAYİ DESTEK PROGRAMI • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="kosgeb-sanayide-temiz-dongusel-ekonomi-teklif-cagrisi-2026"
      programDurumu="acik"
      sonBasvuruTarihi="9 Aralık 2026 (ön başvuru)"
      coverImage="https://images.unsplash.com/photo-1786913507799-0ddbb3e7dbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB, 16 Kasım 2026&apos;da Yeşil Sanayi Destek Programı
          kapsamında &quot;Sanayide Temiz ve Döngüsel Ekonomi Teklif
          Çağrısı&quot;nı açtı. İmalat sektöründe faaliyet gösteren KOBİ&apos;ler,
          enerji, su ve hammadde verimliliği, atık geri dönüşümü, endüstriyel
          simbiyoz ve döngüsel ekonomi yatırımları için proje başına
          7.000.000 TL&apos;ye kadar, %70 oranında, faizsiz geri ödemeli
          destek alabiliyor.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Çağrının bütçesi 3 milyar TL, proje üst limiti 7 milyon TL</li>
          <li>✔ Destek %70 oranında, faizsiz ve geri ödemeli (hibe değil)</li>
          <li>✔ Ön başvuru 16 Kasım - 9 Aralık 2026 arasında yapılıyor</li>
          <li>✔ Başvuru şartı: imalat sektöründe en az 2 yıldır faaliyet, geçerli Sanayi Sicil Belgesi, bilanço esasına göre defter</li>
          <li>✔ Asgari proje bütçesi 1.000.000 TL, bilanço veya net satış tutarınız proje bütçesini aşmalı</li>
          <li>✔ TÜBİTAK&apos;ın benzer adlı 1832 çağrısıyla karıştırılmamalı, ikisi farklı kurum ve kapsama sahip</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Çağrı Nedir, Neden Önemli?
          </Link>
          <Link href="#karistirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Hangi Program Hangisi? Karıştırmayın
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Başvurabilir, Şartlar Nedir?
          </Link>
          <Link href="#tutar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Destek Tutarı ve Geri Ödeme Koşulları
          </Link>
          <Link href="#alanlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Desteklenen Alanlar ve Gider Kalemleri
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Başvuru Süreci ve Takvim
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sık Sorulan Sorular
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Resmî Kaynaklar
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Çağrı Nedir, Neden Önemli?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Dünya Bankası finansmanıyla yürütülen Türkiye Yeşil Sanayi
          Projesi&apos;nin üç ortağı var: KOSGEB, TÜBİTAK ve Sanayi ve
          Teknoloji Bakanlığı. Her kurum projenin farklı bir bileşenini
          yürütüyor. KOSGEB bileşeni, KOBİ&apos;lerin yeşil dönüşüm
          yatırımlarına yönelik <strong>geri ödemeli destek</strong>
          sağlıyor; TÜBİTAK bileşeni Ar-Ge ve inovasyon odaklı; Bakanlık
          bileşeni ise ihtiyaç analizi, kapasite geliştirme ve Yeşil Sanayi
          Akademisi gibi teknik destekleri kapsıyor.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          16 Kasım 2026&apos;da Sanayi ve Teknoloji Bakanı Mehmet Fatih
          Kacır&apos;ın açıkladığı{" "}
          <strong>Sanayide Temiz ve Döngüsel Ekonomi Teklif Çağrısı</strong>,
          KOSGEB bileşeninin yeni dönemi. Çağrının bütçesi 3 milyar TL;
          imalat sektöründeki yaklaşık 1.000 KOBİ&apos;nin enerji, su ve
          hammadde verimliliği ile döngüsel ekonomi yatırımlarını
          desteklemesi hedefleniyor.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Çağrının Önemi Neden Bu Kadar Yüksek?
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Proje başına 7 milyon TL&apos;ye kadar, faizsiz ve uzun ödemesiz dönemli finansman</li>
            <li>✔ Enerji/su/hammadde faturalarını kalıcı olarak düşürecek makine yatırımlarına doğrudan destek</li>
            <li>✔ 2027&apos;den itibaren üretim kazancında %12,5 kurumlar vergisi indiriminden yararlanan şirketler için ayrıca verimlilik kazancı</li>
            <li>✔ İhracatta artan sürdürülebilirlik/SKDM baskısı altındaki imalatçılar için somut bir çözüm aracı</li>
          </ul>
        </div>
      </section>

      {/* 2. KARIŞTIRMAYIN */}
      <section id="karistirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Hangi Program Hangisi? Karıştırmayın
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Aynı Türkiye Yeşil Sanayi Projesi şemsiyesi altında, birbirine çok
          yakın isimler taşıyan iki ayrı çağrı var. İkisini karıştırmak,
          yanlış kuruma başvurup zaman kaybetmenize yol açabilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-red-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Özellik</th>
                <th className="p-5">KOSGEB Sanayide Temiz ve Döngüsel Ekonomi Çağrısı</th>
                <th className="p-5">TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-red-50">
                <td className="p-5 font-semibold">Odak</td>
                <td className="p-5">Somut yatırım: makine-teçhizat, verimlilik</td>
                <td className="p-5">Ar-Ge, inovasyon, ürün/süreç geliştirme</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kimler başvurabilir</td>
                <td className="p-5">Yalnızca imalatçı KOBİ&apos;ler</td>
                <td className="p-5">KOBİ&apos;ler ve büyük ölçekli şirketler</td>
              </tr>
              <tr className="border-b bg-red-50">
                <td className="p-5 font-semibold">Destek üst limiti</td>
                <td className="p-5">7.000.000 TL</td>
                <td className="p-5">55.000.000 TL&apos;ye kadar</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Geri ödeme yapısı</td>
                <td className="p-5">Faizsiz, geri ödemeli (sabit koşul)</td>
                <td className="p-5">Geri ödemeli, hedeflenen göstergelere ulaşılırsa hibeye dönüşebiliyor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Projenizde ağırlık Ar-Ge veya yeni bir ürün/sürecin geliştirilmesindeyse{" "}
          <Link href="/blog/tubitak-1832-sanayide-yesil-donusum-cagrisi-2026" className="text-orange-600 underline">
            TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı
          </Link>{" "}
          daha uygun olabilir. Danışmanlık maliyetinizi karşılamak
          istiyorsanız{" "}
          <Link href="/blog/tubitak-1831-yesil-inovasyon-teknoloji-mentorluk-cagrisi-2026" className="text-orange-600 underline">
            TÜBİTAK 1831 Yeşil İnovasyon Teknoloji Mentörlük Çağrısı
          </Link>{" "}
          incelenmeli. Projeniz doğrudan makine modernizasyonu, verimlilik
          veya döngüsel ekonomi yatırımıysa bu yazının konusu olan KOSGEB
          çağrısı doğru adres.
        </p>
      </section>

      {/* 3. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Başvurabilir, Şartlar Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Çağrı, yalnızca imalat sektöründe faaliyet gösteren KOBİ&apos;lere
          açık. Başvuru öncesinde aşağıdaki şartların tamamının sağlanması
          gerekiyor:
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">🏭</div>
            <h3 className="text-lg font-bold">NACE Rev. 2.1 C Grubu</h3>
            <p className="mt-2 text-sm text-gray-600">
              İşletmenin faaliyet kodu, imalat sanayini kapsayan NACE Rev.
              2.1 C grubunda olmalı.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">📅</div>
            <h3 className="text-lg font-bold">En Az 2 Yıllık Faaliyet</h3>
            <p className="mt-2 text-sm text-gray-600">
              İşletme, çağrı ilan tarihinden en az 2 yıl önce kurulmuş
              olmalı.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">📄</div>
            <h3 className="text-lg font-bold">Güncel İşletme Beyanı</h3>
            <p className="mt-2 text-sm text-gray-600">
              KOSGEB Veri Tabanı&apos;nda onaylı ve güncel bir İşletme
              Beyanı bulunmalı.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">🏷️</div>
            <h3 className="text-lg font-bold">Sanayi Sicil Belgesi</h3>
            <p className="mt-2 text-sm text-gray-600">
              Ön başvuru tarihi itibarıyla geçerli bir{" "}
              <Link href="/blog/sanayi-sicil-belgesi-nasil-alinir-ssbs-basvuru-2026" className="text-orange-600 underline">
                Sanayi Sicil Belgesi
              </Link>{" "}
              şart.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">📊</div>
            <h3 className="text-lg font-bold">Bilanço Esası</h3>
            <p className="mt-2 text-sm text-gray-600">
              Son onaylanmış hesap döneminde bilanço esasına göre defter
              tutulmuş olmalı.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">💳</div>
            <h3 className="text-lg font-bold">Findeks Kredi Skoru</h3>
            <p className="mt-2 text-sm text-gray-600">
              Skor, orta risk, düşük risk, iyi veya çok iyi grubunda
              olmalı.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💰 Mali Büyüklük Şartı
          </h3>
          <p className="leading-8 text-gray-700">
            Asgari proje bütçesi 1.000.000 TL olmalı. Ayrıca işletmenin son
            onaylı yıl bilançosu veya net satış hasılatı, hazırlanan toplam
            proje bütçesini aşmak zorunda. İşletmenizin{" "}
            <Link href="/blog/kobi-tanimi-2026-siniflandirma-ve-destek-uygunlugu" className="text-orange-600 underline">
              KOBİ tanımı
            </Link>{" "}
            kapsamında kalıp kalmadığını da başvuru öncesinde kontrol etmek
            gerekir.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, destek üst limitine (7
            milyon TL) odaklanıp kendi mali büyüklüğünüzün buna uygun olup
            olmadığını hesaba katmamak. Bilanço veya net satış tutarınız
            kurgulayacağınız proje bütçesinden düşükse başvuru,
            değerlendirme aşamasına geçmeden elenebilir. Proje bütçesini
            belirlerken önce kendi mali büyüklüğünüzü, sonra ihtiyacınız
            olan yatırım tutarını birlikte değerlendirmek, hem ret riskini
            düşürür hem de gerçekçi bir geri ödeme planı kurmanızı sağlar.
          </p>
        </div>
      </section>

      {/* 4. TUTAR */}
      <section id="tutar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Destek Tutarı ve Geri Ödeme Koşulları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Destek, klasik KOSGEB hibelerinden farklı olarak{" "}
          <strong>geri ödemeli</strong> bir finansman aracı. Ancak faizsiz
          olması ve uzun ödemesiz dönem içermesi, bu desteği piyasa
          koşullarındaki bir krediden ayırıyor.
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Tutar / Koşul</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Çağrı Bütçesi</td>
                <td className="p-5">3.000.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Proje Başına Destek Üst Limiti</td>
                <td className="p-5">7.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Destek Oranı</td>
                <td className="p-5">%70</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Proje Süresi</td>
                <td className="p-5">12 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Faiz</td>
                <td className="p-5">Yok (faizsiz)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ödemesiz Dönem</td>
                <td className="p-5">İlk 24 ay</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Toplam Geri Ödeme Süresi</td>
                <td className="p-5">36 ay</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Diğer bir deyişle, destekten yararlanan bir işletme proje süresi
          boyunca ve ardından 24 ay hiç ödeme yapmadan yatırımını
          kullanabiliyor; geri ödeme yalnızca kalan dönemde başlıyor. Bu
          yapı, makine modernizasyonu gibi geri dönüşü zaman alan
          yatırımlar için nakit akışı baskısını önemli ölçüde azaltıyor.
        </p>
      </section>

      {/* 5. ALANLAR */}
      <section id="alanlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Desteklenen Alanlar ve Gider Kalemleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Çağrı kapsamında hazırlanacak projelerin aşağıdaki konu
          başlıklarından en az birine odaklanması gerekiyor. Makine
          modernizasyonu ve ürün yaşam döngüsü yönetimi, değerlendirmede
          öncelikli alanlar olarak belirtiliyor.
        </p>
        <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>Enerji verimliliği</li>
            <li>Su verimliliği</li>
            <li>Hammadde verimliliği</li>
            <li>Sürdürülebilir atık geri dönüşümü</li>
            <li>Endüstriyel simbiyoz</li>
            <li>Döngüsel ekonomi yatırımları</li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🧾 Desteklenen Gider Kalemleri
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-blue-500">
            <li>Personel giderleri</li>
            <li>Makine ve teçhizat giderleri</li>
            <li>Yazılım giderleri</li>
            <li>Hizmet alım giderleri</li>
          </ul>
        </div>
      </section>

      {/* 6. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Başvuru Süreci ve Takvim
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Başvuru, tek aşamalı değil; ön başvuru, ön değerlendirme ve tam
          proje başvurusu olmak üzere üç adımlı bir süreç şeklinde
          ilerliyor. Başvurular e-Devlet üzerinden KOSGEB&apos;in KOBİ
          Bilgi Sistemi&apos;ne girilerek yapılıyor.
        </p>
        <ol className="space-y-6">
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 1 (16 Kasım - 9 Aralık 2026):</span>{" "}
            Ön Başvuru Formu, KOBİ Bilgi Sistemi üzerinden doldurulup
            gönderiliyor.
          </li>
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 2 (10 - 18 Aralık 2026):</span>{" "}
            KOSGEB ön başvuruları ilk aşama kriterlerine göre değerlendiriyor;
            sonuçlar 18 Aralık 2026&apos;da ilan ediliyor.
          </li>
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 3 (21 Aralık 2026 - 31 Ocak 2027):</span>{" "}
            İlk aşamayı geçen işletmeler, Proje Başvuru Formu (1. ve 2.
            Bölüm) ile Taahhütname ve Çevresel ve Sosyal Durum Tespit
            Formları dahil tam başvuru dosyasını hazırlayıp sunuyor.
          </li>
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 4 (31 Mart 2027):</span>{" "}
            Desteklenecek işletmeler ilan ediliyor.
          </li>
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 5 (1 Nisan 2027):</span>{" "}
            Desteklenen projeler için program başlangıç tarihi.
          </li>
        </ol>
        <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
            📅 En Yakın Kritik Tarih: 9 Aralık 2026
          </h3>
          <p className="leading-8 text-gray-700">
            Bu yazının yayımlandığı tarih itibarıyla en acil adım ön
            başvurudur. Ön başvuru formunu 9 Aralık 2026&apos;ya kadar
            tamamlamayan işletmeler, sonraki aşamalara geçemiyor. Tam proje
            başvurusu için Ocak ayı sonuna kadar süre olsa da, bu sürece
            girebilmenin ön şartı ilk aşamayı geçmiş olmak.
          </p>
        </div>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Çağrı yalnızca <strong>imalat sektöründeki</strong> KOBİ&apos;lere açık; ticaret veya hizmet şirketleri bu çağrı kapsamında değerlendirilmiyor.</li>
            <li>Destek <strong>hibe değil, geri ödemeli</strong> bir finansmandır; 24 aylık ödemesiz dönemin ardından 36 aylık toplam süre içinde KOSGEB&apos;e geri ödenir.</li>
            <li>Bilanço veya net satış tutarınız proje bütçenizden düşükse başvurunuz ilk aşamada elenebilir; proje bütçesini mali büyüklüğünüze göre kurgulayın.</li>
            <li>Ön başvuru ile tam proje başvurusu farklı aşamalardır; ön başvuruyu 9 Aralık 2026&apos;ya kadar tamamlamayan işletme sürece devam edemez.</li>
            <li>Bu çağrı, TÜBİTAK&apos;ın benzer adlı 1832 Sanayide Yeşil Dönüşüm Çağrısı&apos;yla aynı program değildir; ikisinin kurumu, kapsamı ve limitleri farklıdır.</li>
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
              Ön başvuru ile proje başvurusu arasındaki fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Ön başvuru, işletmenin temel uygunluk bilgilerinin verildiği
              ilk aşamadır ve 16 Kasım - 9 Aralık 2026 arasında yapılıyor.
              Bu aşamayı geçen işletmeler, 21 Aralık 2026 - 31 Ocak 2027
              arasında Proje Başvuru Formu ve eklerini içeren tam dosyayı
              sunarak ikinci aşamaya giriyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek hibe mi, kredi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Ne klasik hibe ne de bankadan alınan ticari bir kredidir.
              Destek faizsiz ve geri ödemelidir; 12 aylık proje süresi ve
              ardından gelen 24 aylık ödemesiz dönemin sonunda, toplam 36
              ay içinde KOSGEB&apos;e geri ödenir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sanayi Sicil Belgem yoksa bu çağrıya başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Ön başvuru tarihi itibarıyla geçerli bir Sanayi Sicil
              Belgesi, çağrının zorunlu şartlarından biridir. Belgeniz
              yoksa önce bu belgeyi almanız, ardından ön başvuruya
              geçmeniz gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu çağrı ile TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı
              aynı anda kullanılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              İki çağrı farklı kurumlar tarafından yürütülüyor ve farklı
              kapsamlara sahip; KOSGEB çağrısı somut yatırım/verimlilik
              odaklıyken TÜBİTAK 1832 Ar-Ge ve inovasyon odaklıdır. Aynı
              projenin aynı giderleri için mükerrer destek alınamaz, ancak
              farklı kapsamlı iki ayrı proje için her iki kuruma da
              başvurmak mümkün olabilir. Kesin değerlendirme, projenizin
              içeriğine göre yapılmalıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Findeks kredi skorum düşükse ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Çağrı, Findeks kredi skorunun orta risk, düşük risk, iyi
              veya çok iyi gruplarından birinde olmasını şart koşuyor. Bu
              gruplar dışında kalan bir skorla yapılan başvurular
              değerlendirmeye alınmıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hizmet veya ticaret sektöründeki bir KOBİ bu çağrıya
              başvurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Çağrı, NACE Rev. 2.1 C grubunda (imalat) faaliyet
              gösteren işletmelerle sınırlıdır. Hizmet veya ticaret
              sektöründeki işletmeler bu kapsamda değerlendirilmiyor.
            </p>
          </div>
        </div>
      </section>

      {/* 9. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/9022/yesil-sanayi-destek-programi" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                KOSGEB, Yeşil Sanayi Destek Programı resmî sayfası
              </a>
            </li>
            <li>
              <a href="https://edevlet.kosgeb.gov.tr/SupportsLogin" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                KOSGEB, e-Devlet KOBİ Bilgi Sistemi başvuru girişi
              </a>
            </li>
            <li>
              <a href="https://www.yatirimadestek.gov.tr/pdf/assets/upload/dosyalar/ozet_yesil_sanayi_destek_programi.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                Yatırıma Destek Ofisleri (Cumhurbaşkanlığı), Yeşil Sanayi Destek Programı özet belgesi
              </a>
            </li>
            <li>
              <a href="https://tubitak.gov.tr/tr/destekler/sanayi/ulusal-destek-programlari/1832" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                TÜBİTAK, 1832 Sanayide Yeşil Dönüşüm Çağrısı resmî sayfası
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Bu yazıdaki bütçe, oran ve takvim bilgileri, Sanayi ve Teknoloji
            Bakanı&apos;nın 16-17 Kasım 2026 tarihli resmî açıklamalarına ve
            KOSGEB&apos;in Yeşil Sanayi Destek Programı sayfasına dayanmaktadır.
            Çağrının kesin ilan metni ve yönergesi için başvuru öncesinde
            KOSGEB&apos;in güncel duyurusunu kontrol etmeniz önerilir.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin Bu Çağrıya Uygunluğunu Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            İmalatçı bir KOBİ olarak Sanayide Temiz ve Döngüsel Ekonomi
            Teklif Çağrısı&apos;na uygun olup olmadığınızı, Sanayi Sicil
            Belgesi ve bilanço şartlarını karşılayıp karşılamadığınızı ve
            proje bütçenizi nasıl kurgulamanız gerektiğini{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              destek uygunluk analizi
            </Link>{" "}
            üzerinden birlikte değerlendirebiliriz. Ön başvuru tarihi
            yaklaştığı için{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              bizimle iletişime geçerek
            </Link>{" "}
            süreci şimdiden planlamanız önemli.
          </p>
        </div>
      </section>

      {/* 10. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in Sanayide Temiz ve Döngüsel Ekonomi Teklif Çağrısı,
          imalat sektöründeki KOBİ&apos;lere enerji, su ve hammadde
          verimliliği ile döngüsel ekonomi yatırımları için faizsiz ve uzun
          ödemesiz dönemli bir finansman imkânı sunuyor. 7 milyon TL&apos;ye
          kadar, %70 oranındaki bu destek, hem işletme giderlerini kalıcı
          olarak düşürmek hem de artan sürdürülebilirlik baskısına uyum
          sağlamak isteyen üreticiler için ciddi bir fırsat.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ancak başvuru süreci çok aşamalı ve şartlar teknik; Sanayi Sicil
          Belgesi, bilanço esası, Findeks skoru ve proje bütçesinin mali
          büyüklüğünüze uygunluğu gibi detaylar, başvurunun kabul
          edilip edilmemesini doğrudan belirliyor. Şirketinizin bu çağrıya
          uygunluğunu değerlendirmek, başvuru dosyanızı doğru kurgulamak
          ve süreci uçtan uca yönetmek için Koray Akdağ / Sistem Global
          Danışmanlık olarak yanınızdayız. Ayrı bir danışmanlık firması
          aramanıza gerek kalmadan, hem destek başvuru sürecinizi hem de
          sonrasındaki muhasebe ve raporlama yükümlülüklerinizi tek
          noktadan yürütebiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/tubitak-1832-sanayide-yesil-donusum-cagrisi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • YEŞİL DÖNÜŞÜM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı 2026-3</h3>
          </Link>
          <Link
            href="/blog/sanayi-sicil-belgesi-nasil-alinir-ssbs-basvuru-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SANAYİ SİCİL BELGESİ • ÜRETİM ŞİRKETLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Sanayi Sicil Belgesi Nasıl Alınır?</h3>
          </Link>
          <Link
            href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı 2026</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Ön başvuru ile proje başvurusu arasındaki fark nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ön başvuru, işletmenin temel uygunluk bilgilerinin verildiği ilk aşamadır ve 16 Kasım - 9 Aralık 2026 arasında yapılıyor. Bu aşamayı geçen işletmeler, 21 Aralık 2026 - 31 Ocak 2027 arasında Proje Başvuru Formu ve eklerini içeren tam dosyayı sunarak ikinci aşamaya giriyor.",
                },
              },
              {
                "@type": "Question",
                name: "Destek hibe mi, kredi mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne klasik hibe ne de bankadan alınan ticari bir kredidir. Destek faizsiz ve geri ödemelidir; 12 aylık proje süresi ve ardından gelen 24 aylık ödemesiz dönemin sonunda, toplam 36 ay içinde KOSGEB'e geri ödenir.",
                },
              },
              {
                "@type": "Question",
                name: "Sanayi Sicil Belgem yoksa bu çağrıya başvurabilir miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Ön başvuru tarihi itibarıyla geçerli bir Sanayi Sicil Belgesi, çağrının zorunlu şartlarından biridir. Belgeniz yoksa önce bu belgeyi almanız, ardından ön başvuruya geçmeniz gerekir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu çağrı ile TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı aynı anda kullanılabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "İki çağrı farklı kurumlar tarafından yürütülüyor ve farklı kapsamlara sahip; KOSGEB çağrısı somut yatırım/verimlilik odaklıyken TÜBİTAK 1832 Ar-Ge ve inovasyon odaklıdır. Aynı projenin aynı giderleri için mükerrer destek alınamaz, ancak farklı kapsamlı iki ayrı proje için her iki kuruma da başvurmak mümkün olabilir. Kesin değerlendirme, projenizin içeriğine göre yapılmalıdır.",
                },
              },
              {
                "@type": "Question",
                name: "Findeks kredi skorum düşükse ne olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Çağrı, Findeks kredi skorunun orta risk, düşük risk, iyi veya çok iyi gruplarından birinde olmasını şart koşuyor. Bu gruplar dışında kalan bir skorla yapılan başvurular değerlendirmeye alınmıyor.",
                },
              },
              {
                "@type": "Question",
                name: "Hizmet veya ticaret sektöründeki bir KOBİ bu çağrıya başvurabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Çağrı, NACE Rev. 2.1 C grubunda (imalat) faaliyet gösteren işletmelerle sınırlıdır. Hizmet veya ticaret sektöründeki işletmeler bu kapsamda değerlendirilmiyor.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
