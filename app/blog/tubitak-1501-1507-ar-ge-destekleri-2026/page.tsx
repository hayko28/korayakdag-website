import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri 2026 | Koray Akdağ",
  description: "TÜBİTAK 1501 ve 1507 Ar-Ge destekleri: 2026 2. çağrı takvimi, kimler başvurabilir, destek oranları ve başvuru süreci rehberi.",
  keywords: [
    "TÜBİTAK 1501",
    "TÜBİTAK 1507",
    "TEYDEB",
    "Ar-Ge desteği",
    "TÜBİTAK destekleri",
    "1501 başvuru",
    "1507 başvuru",
    "Ar-Ge teşvikleri",
    "2026 TÜBİTAK",
  ],
  alternates: {
    canonical: "/blog/tubitak-1501-1507-ar-ge-destekleri-2026",
    languages: {
      tr: "/blog/tubitak-1501-1507-ar-ge-destekleri-2026",
      en: "/en/blog/tubitak-1501-1507-rd-grants-2026",
    },
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri 2026"
      description="Başvuru şartları, destek oranları, değerlendirme kriterleri, desteklenen giderler ve 2026 yılında değişen tüm kuralların yer aldığı kapsamlı rehber."
      category="TÜBİTAK • TEYDEB • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="tubitak-1501-1507-ar-ge-destekleri-2026"
    >
        <div className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🟢 Güncelleme (14 Ağustos 2026): 2026 Yılı 2. Çağrısı Açık
          </h2>
          <p className="mb-6 leading-8 text-gray-700">
            TÜBİTAK, 1501 Sanayi Ar-Ge Destek Programı ve 1507 KOBİ Ar-Ge
            Başlangıç Destek Programı&apos;nın 2026 yılı 2. çağrılarını 20
            Temmuz 2026 tarihinde başvuruya açtı. Başvurular hâlâ devam
            ediyor; aşağıdaki tabloda güncel çağrı takvimini bulabilirsiniz.
          </p>
          <div className="overflow-x-auto rounded-xl border bg-white">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-4">Program</th>
                  <th className="p-4">Çağrı Açılışı</th>
                  <th className="p-4">Ön Kayıt Son Tarihi</th>
                  <th className="p-4">Çağrı Kapanışı (Son Başvuru)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">1501</td>
                  <td className="p-4">20.07.2026</td>
                  <td className="p-4">22.10.2026, 23:59</td>
                  <td className="p-4 font-semibold text-red-600">26.10.2026, 23:59</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">1507</td>
                  <td className="p-4">20.07.2026</td>
                  <td className="p-4">09.11.2026, 23:59</td>
                  <td className="p-4 font-semibold text-red-600">11.11.2026, 23:59</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Kuruluş bazlı ön kayıt işlemi PRODİS üzerinden yapılır ve çağrı
            açılışının beklenmesine gerek yoktur; zaman kaybetmemek için ön
            kaydın erken tamamlanması önerilir. Ayrıca bu çağrı döneminde
            1501 Programı&apos;na yalnızca <strong>KOBİ ölçeğindeki</strong>{" "}
            sermaye şirketleri başvurabilmektedir; büyük ölçekli firmalar bu
            dönem 1501 çağrısına başvuru yapamaz.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Ar-Ge yapan ya da yapmayı planlayan bir şirketseniz, TÜBİTAK&apos;ın 1501
            ve 1507 destek programlarından maksimum fayda sağlayabilmek için
            yalnızca başvuru yapmak yeterli değildir. Doğru hazırlanmış bir
            proje, gerçekçi bütçe, güçlü teknik içerik ve ticarileşme stratejisi
            başarı ihtimalini ciddi ölçüde artırmaktadır.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ 1501 ve 1507 programlarının kapsamı</li>
            <li>✔ İki program arasındaki temel farklar</li>
            <li>✔ Kimler başvurabilir?</li>
            <li>✔ 2026 değerlendirme değişiklikleri</li>
            <li>✔ Desteklenen giderler</li>
            <li>✔ Vergi avantajları</li>
            <li>✔ Başarılı başvuru stratejileri</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="#nedir"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              1. TÜBİTAK 1501 ve 1507 Nedir?
            </Link>
            <Link
              href="#kimler"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              2. Kimler Başvurabilir?
            </Link>
            <Link
              href="#degisiklikler"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              3. 2026 Değişiklikleri
            </Link>
            <Link
              href="#hakem"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              4. Hakem Değerlendirmesi
            </Link>
            <Link
              href="#giderler"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              5. Desteklenen Giderler
            </Link>
            <Link
              href="#surec"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              6. Başvuru Süreci
            </Link>
            <Link
              href="#vergi"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              7. Vergi Avantajları
            </Link>
            <Link
              href="#basari"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              8. Başarılı Başvurunun Ortak Özellikleri
            </Link>
            <Link
              href="#sss"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              9. Sık Sorulan Sorular
            </Link>
            <Link
              href="#sonuc"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              10. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. BÖLÜM */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. TÜBİTAK 1501 ve 1507 Nedir?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            TÜBİTAK 1501 ve TÜBİTAK 1507 programları, TEYDEB tarafından
            yürütülen geri ödemesiz Ar-Ge destek programlarıdır. Her iki program
            da teknoloji geliştiren işletmelere finansman sağlarken hedef
            kitlesi ve proje büyüklüğü bakımından birbirinden ayrılmaktadır.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Ortak Amaç
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Ar-Ge faaliyetlerini desteklemek</li>
              <li>✔ Teknoloji geliştirilmesini teşvik etmek</li>
              <li>✔ Katma değerli üretimi artırmak</li>
              <li>✔ İhracat potansiyeli oluşturmak</li>
              <li>✔ Rekabet gücünü yükseltmek</li>
            </ul>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                TÜBİTAK 1501
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Sanayi Ar-Ge Projeleri Destekleme Programı</li>
                <li>✔ TÜBİTAK katkısı proje başına en fazla 20 Milyon TL</li>
                <li>✔ 24 ay, istisnai hallerde 36 aya kadar proje süresi</li>
                <li>✔ İlk 5 proje %75 hibe, 6. proje ve sonrası %60 hibe</li>
                <li>✔ 2026/2 çağrısında yalnızca KOBİ ölçekli firmalar başvurabilir</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                TÜBİTAK 1507
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ KOBİ Ar-Ge Başlangıç Destek Programı</li>
                <li>✔ 3,5 Milyon TL bütçe üst limiti</li>
                <li>✔ 18 aya kadar proje süresi</li>
                <li>✔ %75 sabit hibe desteği</li>
                <li>✔ Bir firma ömrü boyunca en fazla 5 proje sunabilir</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Özellik</th>
                  <th className="p-5">TÜBİTAK 1501</th>
                  <th className="p-5">TÜBİTAK 1507</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Destek Bütçe Limiti</td>
                  <td className="p-5">TÜBİTAK katkısı en fazla 20 Milyon TL (proje başına)</td>
                  <td className="p-5">3,5 Milyon TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Proje Süresi</td>
                  <td className="p-5">Maks. 24 Ay (istisnai 36 Aya kadar)</td>
                  <td className="p-5">Maks. 18 Ay</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Hedef Kitle</td>
                  <td className="p-5">2026/2 çağrısında yalnızca KOBİ'ler</td>
                  <td className="p-5">Sadece KOBİ'ler (İlk 5 Proje)</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Destek Oranı</td>
                  <td className="p-5">İlk 5 proje %75 - 6. proje ve sonrası %60</td>
                  <td className="p-5">%75 Sabit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Uzman Yorumu
            </h3>
            <p className="leading-8 text-gray-700">
              Ar-Ge faaliyetlerine yeni başlayan KOBİ'ler için TÜBİTAK 1507
              Programı prosedür açısından daha hızlı ve ideal bir başlangıç
              fırsatıdır. Ancak bütçe ihtiyacınız 3,5 Milyon TL'yi aşıyorsa veya 5
              proje hakkınızı doldurduysanız doğrudan TÜBİTAK 1501 Programı ile
              yolunuza devam etmelisiniz.
            </p>
          </div>
        </section>

        {/* 2. KİMLER BAŞVURABİLİR */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Başvurabilir, Kimler Başvuramaz?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            TÜBİTAK 1501 ve 1507 programlarına başvurabilmek için şirketlerin
            Türkiye'de kurulmuş sermaye şirketi olması gerekmektedir. Bunun
            yanında sunulan projenin gerçek anlamda Ar-Ge niteliği taşıması en
            önemli değerlendirme kriterlerinden biridir.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Başvurabilecek Yapılar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Limited Şirketler</li>
                <li>✔ Anonim Şirketler</li>
                <li>✔ Teknokent / TGB Şirketleri</li>
                <li>✔ Yabancı Ortaklı Türkiye Şirketleri</li>
                <li>✔ Yazılım ve Bilişim Şirketleri</li>
                <li>✔ İmalat Sanayi Şirketleri</li>
                <li>✔ Savunma Sanayi Şirketleri</li>
                <li>✔ Biyoteknoloji ve Medikal Firmaları</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Başvuramayacak Yapılar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Şahıs Firmaları / Şahıs İşletmeleri</li>
                <li>❌ Dernekler ve Vakıflar</li>
                <li>❌ Üniversiteler (Tek başına başvuramaz, ortak olabilir)</li>
                <li>❌ Türkiye'de tüzel kişiliği (şubesi/şirketi) bulunmayan yabancı firmalar</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🌍 Yabancı Ortaklı Şirketler Başvurabilir mi?
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              Evet. Bu konu en çok yanlış bilinen konuların başında gelmektedir.
              Bir şirketin yabancı sermayeli olması tek başına TÜBİTAK desteği
              almasına engel değildir.
            </p>
            <p className="mb-6 leading-8 text-gray-700">
              Örneğin Alman ortaklı bir yazılım şirketi, ABD yatırımcılı bir
              startup veya İngiliz sermayeli bir teknoloji şirketinin Türkiye'de
              kurulmuş tüzel kişiliği (Limited veya Anonim Şirket) bulunuyorsa
              gerekli şartları sağlaması halinde başvuru yapabilir.
            </p>
            <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6">
              <h4 className="mb-4 text-xl font-bold text-[#071A2F]">
                Başvuruda Belirleyici Unsurlar
              </h4>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Türkiye'de kurulmuş sermaye şirketi olması</li>
                <li>Projenin gerçek Ar-Ge niteliği taşıması</li>
                <li>Teknik belirsizlik ve yenilik unsurları içermesi</li>
                <li>Yenilikçi çözüm ve prototip üretmesi</li>
                <li>Ticarileşme ve pazarlanabilme potansiyelinin bulunması</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. 2026 DEĞİŞİKLİKLERİ */}
        <section id="degisiklikler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. 2026'da Değerlendirme Sistemi Nasıl Değişti?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            2026 yılı çağrılarıyla birlikte değerlendirme sisteminde bazı önemli
            güncellemeler yapıldı. Artık yalnızca teknik yeterlilik değil,
            projenin ekonomik çıktıları, sürdürülebilirliği ve firmanın geçmiş
            performansı da puanlamayı doğrudan etkilemektedir.
          </p>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📈 Ticarileşme ve Performans Takibi
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              Daha önce desteklenen projelerin gerçekten ticari başarıya
              dönüşüp dönüşmediği değerlendirme puanını kritik düzeyde
              etkilemektedir.
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Ürünleşip ticari satış oluşturdu mu?</li>
              <li>İhracata dönüştü veya döviz kazandırıcı etki sağladı mı?</li>
              <li>Patent/Faydalı Model tescili veya lisanslama yapıldı mı?</li>
              <li>Seri üretime geçiş sağlandı mı?</li>
            </ul>
          </div>
          <div className="mt-12 overflow-x-auto rounded-2xl border">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Öncelikli Alanlar & Odak</th>
                  <th className="p-5">Değerlendirme Avantajı</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-5">Endüstride Teknolojik Sıçrama & Derin Teknoloji</td>
                  <td className="p-5 font-bold text-green-600">+ Öncelikli Puan / Ayrıcalık</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5">Dijital Dönüşüm ve Yapay Zekâ Teknolojileri</td>
                  <td className="p-5 font-bold text-green-600">+ Öncelikli Puan / Ayrıcalık</td>
                </tr>
                <tr>
                  <td className="p-5">Yeşil Mutabakat ve Sürdürülebilirlik Odaklı Projeler</td>
                  <td className="p-5 font-bold text-green-600">+ Öncelikli Puan / Ayrıcalık</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ Yeni Çağrı ve Başvuru Sınırı
            </h3>
            <p className="leading-8 text-gray-700">
              Aynı çağrı döneminde bir şirket, TÜBİTAK 1501 ve 1507
              programlarının toplamında kural olarak en fazla iki başvuru
              yapabilir. Ancak çok ortaklı ve siparişe dayalı Ar-Ge projeleri bu
              sınırlandırmaların istisnası kapsamında tutulabilmektedir.
            </p>
          </div>
        </section>

        {/* 4. HAKEMLER PROJEYİ NASIL DEĞERLENDİRİYOR? */}
        <section id="hakem" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Hakemler Projenizi Nasıl Değerlendiriyor?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            TÜBİTAK hakemleri projeleri yalnızca teknik açıdan değil,
            uygulanabilirlik, ekonomik katkı ve ticarileşme potansiyeli
            açısından da değerlendirir. Başarılı bir başvuru için bu üç alanın
            birlikte güçlü kurgulanması gerekir.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl">🧪</div>
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Ar-Ge Niteliği
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Teknik belirsizlik var mı?</li>
                <li>Yenilik seviyesi yeterli mi?</li>
                <li>Literatürde karşılığı bulunuyor mu?</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl">⚙️</div>
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Yapılabilirlik
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Ekip yeterli mi?</li>
                <li>İş paketleri doğru planlanmış mı?</li>
                <li>Bütçe gerçekçi mi?</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl">📈</div>
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Ekonomik Fayda
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Hedef pazar kim?</li>
                <li>İhracat potansiyeli var mı?</li>
                <li>Ticarileşme planı güçlü mü?</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-red-700">
              🚫 En Sık Yapılan Hatalar
            </h3>
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>
                Projeyi Ar-Ge yerine rutin yazılım geliştirme veya ticari ürün
                kopyalama olarak anlatmak
              </li>
              <li>Teknik belirsizliği ve aşılması gereken zorlukları netleştirmemek</li>
              <li>Piyasa gerçekleriyle örtüşmeyen afaki bütçe hazırlamak</li>
              <li>Ticarileşme ve pazarlama planını yüzeysel bırakmak</li>
              <li>İş paketlerini zaman ve yetkinlik açısından kopuk tasarlamak</li>
            </ul>
          </div>
        </section>

        {/* 5. DESTEKLENEN GİDERLER */}
        <section id="giderler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Hangi Giderler Destekleniyor?
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            TÜBİTAK tarafından uygun görülen Ar-Ge faaliyetleri kapsamında
            gerçekleştirilen birçok gider kalemi hibe desteği kapsamına
            alınmaktadır.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                👨‍💻 Personel Giderleri
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Yazılım geliştiriciler ve mühendisler</li>
                <li>Veri bilimciler ve sistem mimarları</li>
                <li>Test ve kalite uzmanları</li>
                <li>Proje ekibinde yer alan teknik personel</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🖥️ Makine ve Teçhizat
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Projede kullanılacak özel sunucular</li>
                <li>Laboratuvar ve ölçüm ekipmanları</li>
                <li>Prototip geliştirme donanımları</li>
                <li>Test ve analiz cihazları</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                💻 Yazılım Lisansları & Hizmet
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>CAD/CAM ve Simülasyon araçları</li>
                <li>Geliştirme ve analiz yazılımları</li>
                <li>Danışmanlık ve prototip üretim hizmetleri</li>
                <li>Test ve kalibrasyon hizmet alımları</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                ✈️ Malzeme, Seyahat ve Patent
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Prototip üretiminde harcanan hammaddeler</li>
                <li>Teknik ziyaretler ve proje seyahatleri</li>
                <li>Patent tescil ve fikri mülkiyet giderleri</li>
                <li>Yeminli Mali Müşavir (YMM) rapor giderleri</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ Destek Kapsamına Girmeyen Harcamalar
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Rutin pazarlama, reklam ve satış faaliyetleri</li>
              <li>Standart, Ar-Ge niteliği olmayan web sitesi yapımı</li>
              <li>Hazır ticari yazılımların kurulum ve uyarlamaları</li>
              <li>Seri üretim aşamasındaki yatırım ve hammadde harcamaları</li>
            </ul>
          </div>
        </section>

        {/* 6. BAŞVURU SÜRECİ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Başvuru Süreci ve Çağrı Takvimi
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Başvurular tamamen PRODİS (TEYDEB Proje Değerlendirme ve İzleme
            Sistemi) üzerinden elektronik ortamda ve e-imza ile yürütülmektedir.
          </p>
          <div className="grid gap-5 md:grid-cols-4">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💡</div>
              <h3 className="text-xl font-bold">1. Proje Fikri & Kurgu</h3>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">2. Teknik & Bütçe Dosyası</h3>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💻</div>
              <h3 className="text-xl font-bold">3. PRODİS Başvurusu</h3>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">4. Hakem & Kurul Değerlendirmesi</h3>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 2026 Yılı 2. Çağrısı — Güncel Takvim
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              TÜBİTAK 1501 ve 1507 programları genellikle yılda 2 kez çağrıya
              çıkmaktadır. 2026 yılı 2. çağrısı 20 Temmuz 2026&apos;da açıldı
              ve son başvuru tarihleri 1501 için <strong>26 Ekim 2026</strong>,
              1507 için <strong>11 Kasım 2026</strong> olarak belirlendi.
              Kuruluş bazlı ön kayıt zorunlu olduğundan ve ön kayıt son
              tarihleri (1501 için 22 Ekim, 1507 için 9 Kasım) çağrı
              kapanışından önce geldiğinden, PRODİS üzerindeki ön kayıt
              işleminin erken tamamlanması gerekir. Proje hazırlık süreci en
              az 1-2 ay sürdüğünden teknik kurgunun vakit kaybetmeden
              başlatılması önerilir.
            </p>
          </div>
        </section>

        {/* 7. VERGİ AVANTAJLARI */}
        <section id="vergi" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Vergi Avantajları ve Diğer Teşviklerle Birlikte Kullanım
          </h2>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <ul className="ml-6 list-disc space-y-5 text-lg text-gray-700 marker:text-green-600">
              <li>
                <strong>Özel Fon Hesabı:</strong> TÜBİTAK’tan alınan hibeler bilançoda özel bir fon hesabında tutulur ve ticari kazanç olarak vergilendirilmez.
              </li>
              <li>
                <strong>Çifte Destek Yasağı:</strong> Aynı gider kalemi hem TÜBİTAK hibesi hem de başka bir kamu kurumu (KOSGEB vb.) tarafından iki kez fonlanamaz.
              </li>
              <li>
                <strong>Teknokent ve Ar-Ge Merkezi Entegrasyonu:</strong> Teknokentlerde veya Ar-Ge merkezlerinde yürütülen projeler; Gelir/Kurumlar Vergisi istisnası, SGK prim teşvikleri ve damga vergisi muafiyetleri ile eş zamanlı olarak birleştirilebilir.
              </li>
            </ul>
          </div>
        </section>

        {/* 8. BAŞARILI BAŞVURU */}
        <section id="basari" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Başarılı Bir Başvurunun Ortak Özellikleri
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ Net tanımlanmış teknik problem ve Ar-Ge hipotezi
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ Ölçülebilir, gerçekçi ve doğrulanabilir Ar-Ge hedefleri
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ Piyasa koşullarına uygun hazırlanmış detaylı bütçe planı
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ Proje konusuna uygun yetkinlikte teknik ekip kadrosu
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ Somut ticarileşme ve pazara giriş stratejisi
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ İhracat ve ithal ikamesi oluşturma potansiyeli
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ Teknik ve idari risklerin öngörülüp B planının yapılması
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ İş paketleri, zamanlama ve çıktıların birbiriyle uyumu
            </div>
          </div>
        </section>

        {/* 9. SIK SORULAN SORULAR */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Yeni kurulan şirket başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet. Yeni kurulmuş (startup) olmak tek başına engel değildir.
                Şirketin sermaye şirketi olması ve projenin güçlü bir Ar-Ge
                içeriğine sahip olması yeterlidir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Geliri veya cirosu olmayan firma başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet. TÜBİTAK değerlendirmesinde şirketin geçmiş cirosundan ziyade
                projenin niteliği, ekibin yetkinliği ve ticarileşme potansiyeli
                ön plandadır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Destek geri ödemeli midir?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. TÜBİTAK 1501 ve 1507 programları <strong>geri ödemesiz hibe</strong>
                desteğidir. Onaylanan harcamalarınızın belirtilen oranları (%75 veya
                %60) hesabınıza ödenir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Danışmanlık almak zorunlu mudur?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır, zorunlu değildir. Ancak projenin TÜBİTAK terminolojisine uygun
                yazılması, bütçenin doğru kurgulanması ve hakem sürecinin yönetilmesi
                açısından profesyonel danışmanlık almak başarı oranını artırmaktadır.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 TÜBİTAK Başvuru Dosyanızı Birlikte Hazırlayalım
            </h3>
            <p className="leading-8 text-gray-700">
              TÜBİTAK 1501 ve 1507 destekleri için proje önerisinin doğru
              kapsamda kurgulanması, bütçe kalemlerinin PRODİS üzerinde
              eksiksiz sunulması ve başvuru takviminin kaçırılmaması,
              projenizin kabul edilme olasılığını doğrudan etkiler.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Projenizi TÜBİTAK çağrısına uygun şekilde hazırlamamız için
                bizimle iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* 10. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            TÜBİTAK 1501 ve 1507 destek programları, teknoloji geliştiren işletmeler
            için Türkiye&apos;nin en önemli geri ödemesiz Ar-Ge finansman kaynakları
            arasında yer almaktadır. Başarılı bir başvuru yalnızca teknik bir form
            doldurmaktan ibaret değildir. Projenin Ar-Ge derinliği kadar bütçe
            kurgusu, iş paketleri ve ticarileşme stratejisinin de bir bütün halinde
            tasarlanması gerekir.
          </p>
        </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/tubitak-1711-yapay-zeka-ekosistemi-cagrisi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • YAPAY ZEKA • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1711 Yapay Zeka Ekosistem Çağrısı 2026</h3>
        </Link>
        <Link
          href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">AR-GE MERKEZİ • 5746 SAYILI KANUN • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Ar-Ge Merkezi Nedir? Nasıl Kurulur? 2026 Şartları, Vergi ve SGK Avantajları</h3>
        </Link>
        <Link
          href="/blog/teknopark-nedir-avantajlari"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">TEKNOPARK • AR-GE • YAZILIM</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Teknopark Nedir? Avantajları, Vergi İstisnaları ve Başvuru Rehberi</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
