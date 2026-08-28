import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "TÜBİTAK 1711 Yapay Zeka Ekosistem Çağrısı 2026: Kimler Başvurabilir, Destek Oranları? | Koray Akdağ",
  description:
    "TÜBİTAK 1711 Yapay Zeka Ekosistemi 2026 Çağrısı; şirket-üniversite konsorsiyum şartı, 5 öncelikli alan, 10 milyon TL bütçe üst sınırı, %60-%70 destek oranı, 18 Eylül 2026 son başvuru tarihi ve adım adım PRODİS süreciyle güncel rehber.",
  keywords: [
    "TÜBİTAK 1711",
    "Yapay Zeka Ekosistemi Çağrısı",
    "TÜBİTAK yapay zeka desteği",
    "TEYDEB 1711",
    "1711 çağrısı 2026",
    "TÜBİTAK yapay zeka enstitüsü",
    "PRODİS başvuru",
    "yapay zeka Ar-Ge desteği",
    "üniversite sanayi işbirliği yapay zeka",
    "2026 TÜBİTAK çağrıları",
  ],
};

export default function Tubitak1711Page() {
  return (
    <BlogLayout
      title="TÜBİTAK 1711 Yapay Zeka Ekosistem Çağrısı 2026: Kimler Başvurabilir, Destek Oranları Nedir?"
      description="Şirketlerin üniversite veya kamu araştırma kurumlarıyla konsorsiyum kurarak başvurduğu TÜBİTAK 1711 Yapay Zeka Ekosistemi Çağrısı'nda 5 öncelikli alan, 10 milyon TL bütçe üst sınırı, %60-%70 destek oranı ve 18 Eylül 2026 son başvuru tarihiyle güncel rehber."
      category="TÜBİTAK • YAPAY ZEKA • 2026"
      date="2026"
      readTime="12 Dakika"
      coverImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="tubitak-1711-yapay-zeka-ekosistemi-cagrisi-2026"
    >
      {/* GİRİŞ / UYARI KUTUSU */}
      <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🔴 Son Başvuru 18 Eylül 2026: Ön Kayıt İçin Zaman Daralıyor
        </h2>
        <p className="leading-8 text-gray-700">
          TÜBİTAK, 2022&apos;den bu yana her yıl açtığı{" "}
          <strong>1711 Yapay Zeka Ekosistemi Çağrısı&apos;nın</strong> beşincisini
          15 Haziran 2026&apos;da başvuruya açtı. Başvurular{" "}
          <strong>18 Eylül 2026 saat 23:59&apos;da</strong> kapanacak; ancak kuruluş
          bazlı ön kayıt işleminin <strong>14 Eylül 2026 saat 17:30&apos;a</strong>{" "}
          kadar tamamlanmış olması gerekiyor. Bu çağrının en kritik özelliği,
          şirketlerin tek başına değil, mutlaka bir üniversite veya kamu
          araştırma kurumuyla birlikte konsorsiyum kurarak başvurabilmesi.
          Konsorsiyum kurma ve işbirliği sözleşmesi hazırlama süreci zaman
          aldığından, hazırlığa hemen başlamak gerekiyor.
        </p>
      </div>

      {/* BU REHBERDE NELER VAR */}
      <div className="mt-16 rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yapay zeka tabanlı bir çözüm geliştirmek isteyen ama bunu tek
          başına değil bir üniversite veya araştırma merkeziyle birlikte
          hayata geçirmeyi planlayan şirketler için TÜBİTAK 1711 Yapay Zeka
          Ekosistemi Çağrısı, geri ödemesiz hibe desteğiyle önemli bir fırsat
          sunuyor. Bu yazıda çağrının işleyişini, şartlarını ve başvuru
          sürecini uçtan uca ele alıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ 1711 Çağrısı tam olarak nedir, kimler için tasarlandı?</li>
          <li>✔ Konsorsiyum yapısı nasıl kurulur, kimler ortak olabilir?</li>
          <li>✔ 2026&apos;nın 5 öncelikli alanı neler?</li>
          <li>✔ Destek tutarı ve oranları ne kadar?</li>
          <li>✔ Hangi giderler destekleniyor?</li>
          <li>✔ Adım adım başvuru süreci ve kritik tarihler</li>
          <li>✔ Diğer yapay zeka destekleriyle farkı</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. TÜBİTAK 1711 Nedir?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir? Konsorsiyum Yapısı
          </Link>
          <Link href="#alanlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. 2026 Öncelikli Alanları
          </Link>
          <Link href="#destek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Destek Tutarı ve Oranları
          </Link>
          <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Desteklenen Giderler ve Süre
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Diğer Yapay Zeka Destekleriyle Karşılaştırma
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

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. TÜBİTAK 1711 Yapay Zeka Ekosistemi Çağrısı Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          TÜBİTAK 1711 Yapay Zeka Ekosistemi Çağrısı, TEYDEB tarafından
          yürütülen ve şirketlerin sahip olduğu gerçek iş problemlerini,
          üniversite veya kamu araştırma kurumlarının yapay zeka alanındaki
          bilimsel birikimiyle buluşturmayı hedefleyen geri ödemesiz bir hibe
          programıdır. İlk kez 2022 yılında açılan çağrı, 2026 itibarıyla
          beşinci kez tekrarlanıyor; bugüne kadar 61 proje toplam 353,7
          milyon TL destek almış durumda.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Programın temel felsefesi, şirketlerin &quot;yapay zeka
          kullanmak istiyoruz ama bunu nasıl uygulayacağımızı bilmiyoruz&quot;
          sorusuna, akademik/bilimsel bir teknoloji sağlayıcıyla ortak proje
          yürüterek somut bir cevap üretmesidir. Bu nedenle 1711, TÜBİTAK
          1501 veya 1507 gibi şirketlerin tek başına başvurduğu klasik Ar-Ge
          destek programlarından farklı olarak, zorunlu bir{" "}
          <strong>şirket + üniversite/araştırma kurumu konsorsiyumu</strong>{" "}
          üzerine kurulu.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Programın Amacı
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Yapay zeka teknolojilerini somut ürün/çözümlere dönüştürmek</li>
            <li>✔ Şirket ile üniversite/araştırma kurumu işbirliğini güçlendirmek</li>
            <li>✔ Türkiye&apos;nin yapay zeka ekosistemini büyütmek</li>
            <li>✔ Sektörel sorunlara bilimsel temelli çözümler üretmek</li>
            <li>✔ Ticarileşme potansiyeli yüksek çıktılar elde etmek</li>
          </ul>
        </div>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir? Konsorsiyum Yapısı Nasıl Kurulur?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          1711 Çağrısı&apos;na tek bir şirket veya tek bir üniversite başvuramaz.
          Başvuru, en az iki farklı tür kuruluşun bir araya gelmesiyle
          oluşturulan bir konsorsiyum üzerinden yapılır.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🏢 Talep Eden Kuruluş (Şirket)
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ En az 1 adet Türkiye&apos;de kurulu şirket</li>
              <li>✔ Gerçek bir iş problemi/ihtiyacı olan taraf</li>
              <li>✔ Projenin ticarileşme ve pazara giriş sorumluluğunu üstlenir</li>
              <li>✔ KOBİ veya büyük ölçekli işletme olabilir</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              🎓 Teknoloji Sağlayıcı Kuruluş
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ En az 1 üniversite araştırma laboratuvarı/merkezi</li>
              <li>✔ Veya bir kamu araştırma merkezi/enstitüsü</li>
              <li>✔ Yapay zeka alanında bilimsel/teknik altyapı sağlar</li>
              <li>✔ Proje bütçesinin en fazla %25&apos;i bu tarafa ayrılabilir</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            ⚠️ Başvurudan Önce Yapılması Zorunlu İki Adım
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
            <li>
              <strong>Niyet Beyan Formu:</strong> Konsorsiyum, başvurudan önce
              TÜBİTAK Yapay Zeka Enstitüsü ile görüşerek bu formu hazırlar.
              Bu ön görüşme, proje fikrinin çağrının önceliklerine uygunluğunu
              netleştirmek açısından önemlidir.
            </li>
            <li>
              <strong>İşbirliği Sözleşmesi:</strong> Konsorsiyum üyeleri
              arasında fikri mülkiyet paylaşımı ve ticarileşme planını
              düzenleyen bir sözleşme, başvuru öncesinde imzalanmış olmalıdır.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. ÖNCELİKLİ ALANLAR */}
      <section id="alanlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. 2026 Çağrısının 5 Öncelikli Alanı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Projelerin bu beş alandan en az biriyle doğrudan ilişkili olması
          bekleniyor. Alan dışı, genel amaçlı yapay zeka projeleri
          değerlendirmede dezavantajlı konuma düşebilir.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🏭</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Akıllı Üretim Sistemleri</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🌾</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Akıllı Tarım, Gıda ve Hayvancılık</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">💳</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Finans Teknolojileri</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🌍</div>
            <h3 className="text-xl font-bold text-[#071A2F]">İklim Değişikliği ve Sürdürülebilirlik</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🎓</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Akıllı Eğitim Teknolojileri</h3>
          </div>
        </div>
      </section>

      {/* 4. DESTEK TUTARI VE ORANLARI */}
      <section id="destek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Destek Tutarı ve Oranları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Proje bütçesi üst sınırı, genel gider, proje teşvik ikramiyesi ve
          kurum hissesi hariç olmak üzere{" "}
          <strong>en fazla 10.000.000 TL</strong> olarak belirlenmiştir.
          Destek oranı, konsorsiyumdaki her tarafın niteliğine göre
          farklılaşır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Konsorsiyum Tarafı</th>
                <th className="p-5">TÜBİTAK Destek Oranı</th>
                <th className="p-5">Kendi Katkı Payı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KOBİ (Talep Eden Kuruluş)</td>
                <td className="p-5 font-bold text-green-600">%70</td>
                <td className="p-5">%10 (nakdi katkı)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Büyük Ölçekli Şirket</td>
                <td className="p-5 font-bold text-green-600">%60</td>
                <td className="p-5">%20 (nakdi katkı)</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Üniversite / Kamu Araştırma Kurumu</td>
                <td className="p-5 font-bold text-green-600">%100</td>
                <td className="p-5">Toplam bütçenin en fazla %25&apos;i bu tarafa ayrılabilir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Not: Destek oranları ve bütçe üst sınırı resmî çağrı metnindeki
          genel esasları yansıtır; kesin ve güncel rakamlar için başvuru
          öncesinde TÜBİTAK&apos;ın 2026 yılı 1711 çağrı metni birebir kontrol
          edilmelidir.
        </p>
      </section>

      {/* 5. GİDERLER VE SÜRE */}
      <section id="giderler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Desteklenen Giderler ve Proje Süresi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Projenin azami destek süresi <strong>24 ay</strong>dır. Bu süre
          içinde aşağıdaki gider kalemleri destek kapsamına alınabilir.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              👨‍💻 Personel ve Danışmanlık
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Proje ekibindeki teknik/bilimsel personel giderleri</li>
              <li>Danışmanlık ve dışarıdan hizmet alımı</li>
              <li>Talep eden kuruluş tarafındaki işgücü desteği (en fazla 18 adam/ay ile sınırlı)</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🖥️ Alet, Teçhizat ve Malzeme
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Sunucu, GPU ve hesaplama altyapısı gibi ekipmanlar</li>
              <li>Yazılım lisansları ve teknik doküman giderleri</li>
              <li>Sarf malzemesi ve prototip üretim maliyetleri</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ✈️ Seyahat
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Proje kapsamındaki teknik ziyaret ve toplantı seyahatleri</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🔬 Ar-Ge Hizmet Alımı
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Test, analiz ve doğrulama hizmetleri</li>
              <li>Üniversite/araştırma kurumu bünyesindeki laboratuvar hizmetleri</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. BAŞVURU SÜRECİ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Adım Adım Başvuru Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🤝</div>
            <h3 className="text-lg font-bold">1. Konsorsiyum Oluşturma</h3>
            <p className="mt-2 text-sm text-gray-600">Şirket + üniversite/araştırma kurumu ortaklığı kurulur</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💬</div>
            <h3 className="text-lg font-bold">2. Enstitü Ön Görüşmesi</h3>
            <p className="mt-2 text-sm text-gray-600">TÜBİTAK Yapay Zeka Enstitüsü ile görüşülüp Niyet Beyan Formu hazırlanır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">✍️</div>
            <h3 className="text-lg font-bold">3. İşbirliği Sözleşmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Fikri mülkiyet ve ticarileşme planı imzalanır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💻</div>
            <h3 className="text-lg font-bold">4. PRODİS Ön Kaydı</h3>
            <p className="mt-2 text-sm text-gray-600">14 Eylül 2026, 17:30&apos;a kadar tamamlanmalı</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📤</div>
            <h3 className="text-lg font-bold">5. Nihai Başvuru</h3>
            <p className="mt-2 text-sm text-gray-600">18 Eylül 2026, 23:59&apos;a kadar PRODİS üzerinden</p>
          </div>
        </div>
        <div className="mt-12 overflow-x-auto rounded-2xl border bg-white">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Aşama</th>
                <th className="p-4">Tarih / Saat</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Çağrı Açılışı</td>
                <td className="p-4">15 Haziran 2026</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Ön Kayıt Son Tarihi</td>
                <td className="p-4">14 Eylül 2026, 17:30</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-red-600">Nihai Başvuru (Çağrı Kapanışı)</td>
                <td className="p-4 font-semibold text-red-600">18 Eylül 2026, 23:59 (UTC+3)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Başvurular, TEYDEB Proje Değerlendirme ve İzleme Sistemi (PRODİS)
          üzerinden elektronik ortamda ve e-imza ile yapılır. Konsorsiyum
          kurma ve işbirliği sözleşmesi süreci genellikle birkaç hafta
          sürdüğünden, ön kayıt tarihine yaklaşırken aceleye getirilmemesi
          için hazırlığa erken başlanması önerilir.
        </p>
      </section>

      {/* 7. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Diğer Yapay Zeka Destekleriyle Karşılaştırma
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin yapay zeka projesi için üniversite ortağı bulunmuyorsa
          veya hedefiniz kredi/finansman ise, aşağıdaki alternatif programlar
          da değerlendirilebilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Program</th>
                <th className="p-4">Destek Türü</th>
                <th className="p-4">Ortaklık Şartı</th>
                <th className="p-4">Üst Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">TÜBİTAK 1711</td>
                <td className="p-4">Geri ödemesiz hibe</td>
                <td className="p-4">Şirket + üniversite/kamu araştırma kurumu zorunlu</td>
                <td className="p-4">10.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">
                  <Link href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026" className="text-orange-600 hover:underline">
                    TÜBİTAK 1501 / 1507
                  </Link>
                </td>
                <td className="p-4">Geri ödemesiz hibe</td>
                <td className="p-4">Yok, şirket tek başına başvurur</td>
                <td className="p-4">20.000.000 TL / 3.500.000 TL</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">
                  <Link href="/blog/kosgeb-yapay-zeka-kredi-programi-2026" className="text-orange-600 hover:underline">
                    KOSGEB Yapay Zeka Kredi Programı
                  </Link>
                </td>
                <td className="p-4">Faizsiz kredi</td>
                <td className="p-4">Yok, Teknogirişim Rozeti sahibi olmak yeterli</td>
                <td className="p-4">5.000.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>
              Konsorsiyum şartı zorunludur; yalnızca şirket olarak veya
              yalnızca üniversite olarak başvuru yapılamaz.
            </li>
            <li>
              İşbirliği sözleşmesi ve Niyet Beyan Formu, başvuru{" "}
              <strong>öncesinde</strong> hazır olmalıdır; son haftaya
              bırakılması ciddi zaman kaybına yol açar.
            </li>
            <li>
              Proje konusunun 5 öncelikli alandan biriyle net biçimde
              ilişkilendirilmesi, değerlendirmede önemli bir avantaj sağlar.
            </li>
            <li>
              Ön kayıt son tarihi (14 Eylül), nihai başvuru tarihinden (18
              Eylül) önce geldiği için bu iki tarih birbirine
              karıştırılmamalıdır.
            </li>
            <li>
              Rakamsal üst limitler ve destek oranları TÜBİTAK tarafından her
              çağrı döneminde güncellenebilir; başvuru öncesinde güncel çağrı
              metninin teyit edilmesi önemlidir.
            </li>
          </ul>
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
              Üniversite ortağı bulamıyorum, yine de başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, 1711 Çağrısı&apos;nda konsorsiyum şartı zorunludur. Üniversite
              veya kamu araştırma kurumu ortağı yoksa, üniversite ortağı
              aramak yerine TÜBİTAK 1501/1507 veya KOSGEB Yapay Zeka Kredi
              Programı gibi tek başına başvurulabilen alternatifler
              değerlendirilebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek geri ödemeli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, 1711 Çağrısı kapsamındaki destek{" "}
              <strong>geri ödemesiz hibe</strong> niteliğindedir. Onaylanan
              harcamaların ilgili oranı TÜBİTAK tarafından karşılanır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Birden fazla şirket veya üniversite konsorsiyuma dahil olabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, konsorsiyum yapısı birden fazla talep eden kuruluş ve
              birden fazla teknoloji sağlayıcı kuruluşla genişletilebilir.
              Önemli olan asgari şartın (en az 1 şirket + en az 1
              üniversite/kamu araştırma kurumu) sağlanmasıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ön kayıt ile nihai başvuru arasındaki fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Ön kayıt, kuruluşun PRODİS sisteminde tanımlanması ve başvuru
              sürecine teknik olarak hazır hale gelmesi anlamına gelir. Nihai
              başvuru ise proje önerisinin tüm ekleriyle birlikte PRODİS
              üzerinden TÜBİTAK&apos;a resmi olarak sunulmasıdır. Ön kayıt
              tamamlanmadan nihai başvuru yapılamaz.
            </p>
          </div>
        </div>
      </section>

      {/* 10. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sonuç
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          TÜBİTAK 1711 Yapay Zeka Ekosistemi Çağrısı, gerçek bir iş problemini
          bilimsel bir ortaklıkla çözmek isteyen şirketler için önemli bir
          fırsat sunuyor. Ancak konsorsiyum kurma zorunluluğu, işbirliği
          sözleşmesi ve Niyet Beyan Formu gibi ön hazırlık adımları, süreci
          klasik Ar-Ge destek programlarına kıyasla daha planlı yönetmeyi
          gerektiriyor.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          18 Eylül 2026 son başvuru tarihine kadar kalan süre kısıtlı
          olduğundan, uygun bir üniversite/araştırma kurumu ortağı belirleme,
          işbirliği sözleşmesini hazırlama ve PRODİS ön kaydını tamamlama
          adımlarına vakit kaybetmeden başlanması önerilir.
        </p>
      </section>
    </BlogLayout>
  );
}
