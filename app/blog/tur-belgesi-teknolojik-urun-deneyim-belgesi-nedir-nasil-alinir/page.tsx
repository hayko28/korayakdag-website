import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TÜR Belgesi Nedir? Nasıl Alınır, Kamu İhalesi Avantajı | Koray Akdağ",
  description:
    "18 Aralık 2025'te yürürlüğe giren yeni yönetmelikle Teknolojik Ürün Deneyim Belgesi (TÜR Deneyim Belgesi) ve TÜR Belgesi; başvuru şartları, yerli malı belgesi bağlantısı, TÜBİTAK değerlendirme süreci ve kamu ihalelerindeki fiyat avantajıyla 2026 güncel rehber.",
  keywords: [
    "tür belgesi nedir",
    "teknolojik ürün deneyim belgesi",
    "tür deneyim belgesi başvurusu",
    "turbelgesi sanayi gov tr",
    "kamu ihalesi fiyat avantajı teknolojik ürün",
    "ar-ge sonucu ürün belgelendirme",
    "yerli malı belgesi tür belgesi farkı",
    "teknoloji hazırlık seviyesi tür belgesi",
  ],
  alternates: {
    canonical: "/blog/tur-belgesi-teknolojik-urun-deneyim-belgesi-nedir-nasil-alinir",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="TÜR Belgesi (Teknolojik Ürün Deneyim Belgesi) Nedir? Nasıl Alınır, Kamu İhalesinde Ne Avantaj Sağlar?"
      description="Ar-Ge projeniz tamamlandı ve ürün piyasaya çıktı: sırada TÜR Belgesi mi var? 18 Aralık 2025'te yürürlüğe giren yeni yönetmelikle TÜR Belgesi ve TÜR Deneyim Belgesi arasındaki fark, başvuru şartları, adım adım süreç ve kamu ihalelerindeki somut avantajla 2026 güncel rehber."
      category="AR-GE VE İNOVASYON • TÜR BELGESİ • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="tur-belgesi-teknolojik-urun-deneyim-belgesi-nedir-nasil-alinir"
      coverImage="https://images.unsplash.com/photo-1650530415027-dc9199f473ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Ar-Ge Ürününüz İçin TÜR Belgesi Başvurusunu Birlikte Planlayalım"
      ctaText="Ürününüzün hangi kapsamda (kamu destekli proje, Teknogirişim, TGB veya özkaynak) başvuruya uygun olduğunu, yerli malı belgesi ve piyasaya arz şartlarını karşılayıp karşılamadığınızı değerlendirir, turbelgesi.sanayi.gov.tr üzerinden başvuru sürecinizi baştan sona birlikte yürütürüz."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Ar-Ge veya tasarım merkezinde, teknoparkta ya da özkaynaklarınızla
        yürüttüğünüz bir proje sonunda elinizde artık piyasaya sürülmüş somut
        bir ürün var. Bu noktada çoğu işletmenin gözden kaçırdığı bir adım
        kalıyor: TÜR Belgesi. Bu belge, Ar-Ge çıktınızı hem teknolojik olarak
        tescilleyen hem de kamu ihalelerinde size iş deneyimi ve fiyat
        avantajı sağlayan resmî bir araç. 18 Aralık 2025&apos;te yürürlüğe
        giren yeni yönetmelikle başvuru şartları ve süreç yeniden
        düzenlendi, bu yazıda güncel haliyle neyin nasıl işlediğini
        anlatıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ TÜR Belgesi ile TÜR Deneyim Belgesi farklı şeyler: biri
            ürünün <strong>teknolojik niteliğini süresiz</strong> gösterir,
            diğeri <strong>kamu ihalelerinde 5 yıl geçerli iş deneyimi</strong>
            {" "}kanıtı sunar.
          </li>
          <li>
            ✔ Kapsam geniş: teknoloji merkezi (TEKMER), Ar-Ge merkezi,
            Teknoloji Geliştirme Bölgesi (teknopark), kamu destekli projeler,
            Teknogirişim sermaye desteği ve <strong>özkaynaklarla yürütülen
            Ar-Ge projeleri</strong> de başvurabiliyor.
          </li>
          <li>
            ✔ TÜR Deneyim Belgesi için <strong>yerli malı belgesi</strong>{" "}
            şart (yazılım ve hizmetler hariç) ve ürünün piyasaya arz edilmiş
            olması, fatura veya sevk irsaliyesiyle kanıtlanmalı.
          </li>
          <li>
            ✔ Piyasaya arz kanıtınız yoksa alternatif yol var: ürünün{" "}
            <strong>Teknoloji Hazırlık Seviyesi (TRL) en az 7</strong>{" "}
            olduğunu göstermek.
          </li>
          <li>
            ✔ Başvuru <strong>turbelgesi.sanayi.gov.tr</strong> portalı
            üzerinden elektronik yapılıyor, Sanayi ve Teknoloji Bakanlığı
            Milli Teknoloji Genel Müdürlüğü değerlendiriyor.
          </li>
          <li>
            ✔ TÜR Deneyim Belgesi, kamu ihalelerinde hem iş deneyimi yerine
            geçiyor hem de 4734 sayılı Kanun kapsamındaki yerli/orta-yüksek
            teknoloji ürünlere tanınan <strong>fiyat avantajına</strong>{" "}
            kapı açıyor.
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
            1. TÜR Belgesi ve TÜR Deneyim Belgesi Nedir?
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Hangi Projeler Kapsamda, Kimler Başvurabilir?
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Başvuru Şartları
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Başvuru Süreci: Adım Adım
          </Link>
          <Link href="#ihale-avantaji" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Kamu İhalesindeki Avantajı
          </Link>
          <Link href="#yeni-yonetmelik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Yeni Yönetmelik Neyi Değiştirdi?
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

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. TÜR Belgesi ve TÜR Deneyim Belgesi Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          18 Aralık 2025 tarihli ve 33111 sayılı Resmî Gazete&apos;de
          yayımlanan Teknolojik Ürünlerin Belgelendirilmesine İlişkin
          Yönetmelik, Ar-Ge ve yenilik projeleri sonucunda ortaya çıkan mal,
          yazılım ve hizmetler için iki ayrı belgeyi düzenliyor. İkisi sık
          karıştırılıyor ama amaçları farklı.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Belge</th>
                <th className="p-5">Ne Gösterir?</th>
                <th className="p-5">Geçerlilik Süresi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">TÜR Belgesi</td>
                <td className="p-5">Ürünün Ar-Ge/yenilik projesi sonucu ortaya çıkan, teknolojik nitelikli bir ürün olduğunu gösterir</td>
                <td className="p-5">Süresiz</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">TÜR Deneyim Belgesi</td>
                <td className="p-5">Kamu ihale mevzuatı çerçevesinde iş deneyimini tevsik eder, ihalelerde kullanılır</td>
                <td className="p-5">Piyasaya arz tarihinden itibaren 5 yıl</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="leading-8 text-gray-700">
            Yerli Malı Belgesi ile TÜR Deneyim Belgesi aynı şey değil. Yerli
            Malı Belgesi, ürünün Türkiye&apos;de üretildiğini gösteren ayrı
            bir belge ve sanayi odalarından alınıyor. TÜR Deneyim Belgesi
            başvurusunda (yazılım ve hizmetler hariç) bu belgeye zaten sahip
            olmanız şart, yani TÜR Deneyim Belgesi başvurusunun önkoşulu
            niteliğinde. Birini alıp diğerini otomatik elde ettiğinizi
            düşünmek yaygın bir hata.
          </p>
        </div>
      </section>

      {/* 2. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Hangi Projeler Kapsamda, Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yönetmeliğin kapsamı sanıldığından geniş. Sadece Ar-Ge merkezi
          sahibi büyük şirketler değil, çok daha küçük ölçekli işletmeler de
          bu belgeye başvurabiliyor:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>Teknoloji merkezi işletmelerinde (TEKMER) gerçekleştirilen projeler</li>
          <li>Ar-Ge merkezlerinde gerçekleştirilen projeler</li>
          <li>Teknoloji Geliştirme Bölgelerinde (teknopark) gerçekleştirilen projeler</li>
          <li>Kamu kurum ve kuruluşları, kanunla kurulan vakıflar veya uluslararası fonlarca desteklenen Ar-Ge ve yenilik projeleri (örneğin KOSGEB veya TÜBİTAK destekli projeler)</li>
          <li>Rekabet öncesi işbirliği projeleri</li>
          <li>Teknogirişim sermaye desteğinden yararlanılarak yapılan projeler</li>
          <li>Hiçbir dış destek almadan, işletmenin kendi özkaynaklarıyla geliştirdiği Ar-Ge projeleri</li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Son madde özellikle önemli: destek almadan kendi imkânlarınızla
          geliştirdiğiniz bir ürün de bu kapsama giriyor. Tek fark,
          özkaynaklı projelerin teknik değerlendirmesinin TÜBİTAK tarafından
          yapılması.
        </p>
      </section>

      {/* 3. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Başvuru Şartları
        </h2>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Piyasaya arz:</strong> Ürün veya hizmetin satışa
              sunulmuş olması ve bunun fatura ya da sevk irsaliyesiyle
              kanıtlanması gerekir.
            </li>
            <li>
              <strong>Teknoloji Hazırlık Seviyesi (TRL) alternatifi:</strong>
              {" "}Piyasaya arz kanıtı sunulamıyorsa, ürünün en az TRL 7
              seviyesinde olduğu gösterilerek de başvuru yapılabilir.
            </li>
            <li>
              <strong>Yerli malı belgesi:</strong> TÜR Deneyim Belgesi
              başvurusunda zorunlu (yazılım ve hizmetler bu şarttan muaf).
            </li>
            <li>
              <strong>Proje bitirme belgesi:</strong> Kamu destekli
              projelerde, projeyi destekleyen kurumdan alınan ve projenin
              başarıyla tamamlandığını gösteren belge istenir.
            </li>
            <li>
              <strong>Türkiye&apos;de geliştirilmiş olma:</strong> Teknolojik
              geliştirme faaliyetinin Türkiye sınırları içinde
              gerçekleşmiş olması aranıyor.
            </li>
            <li>
              <strong>Yetkili başvuru:</strong> Başvuru, işletmeyi temsil ve
              ilzama yetkili kişiler tarafından elektronik imza veya ıslak
              imzayla yapılır.
            </li>
          </ul>
        </div>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Başvuru Süreci: Adım Adım
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Başvuru turbelgesi.sanayi.gov.tr portalı üzerinden elektronik
          yapılıyor. Süreç, özkaynaklı projelerde biraz daha uzun sürüyor
          çünkü akademik hakem değerlendirmesi devreye giriyor.
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Elektronik Başvuru</h3>
            <p className="mt-2 text-sm text-gray-600">Portal üzerinden belgelerle birlikte başvuru yapılır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Ön İnceleme</h3>
            <p className="mt-2 text-sm text-gray-600">Milli Teknoloji Genel Müdürlüğü yaklaşık 10 iş günü içinde inceler</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">TÜBİTAK Değerlendirmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Yalnızca özkaynaklı projelerde: iki akademisyen hakem, ~20 iş günü + gerekirse 15 gün ek süre</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Belge Düzenleme</h3>
            <p className="mt-2 text-sm text-gray-600">Eksiksiz dosyada 5 iş günü içinde belge düzenlenip firmaya gönderilir</p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Eksik belge tespit edilirse başvuru reddedilmiyor, işletmeye
          eksikleri tamamlaması için en fazla 3 ay süre tanınıyor. Bu süre
          içinde tamamlanmayan başvurular ise işlemden kaldırılıyor.
        </p>
      </section>

      {/* 5. İHALE AVANTAJI */}
      <section id="ihale-avantaji" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Kamu İhalesindeki Avantajı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TÜR Deneyim Belgesi&apos;nin asıl ticari değeri burada ortaya
          çıkıyor. 4734 sayılı Kamu İhale Kanunu çerçevesinde yerli istekliler
          ile orta ve yüksek teknolojili sanayi ürünleri lehine kamu
          ihalelerinde yüzde 15&apos;e varan fiyat avantajı tanınabiliyor.
          TÜR Deneyim Belgesi&apos;ne sahip bir ürün bu avantajdan
          yararlanma yolunu açıyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bunun yanında belge, EKAP (Elektronik Kamu Alımları Platformu)
            üzerinden kullanılabiliyor ve ihalelere katılımda istenen iş
            deneyimini kanıtlayan belgelerin yerine geçebiliyor. Yani henüz
            kamu ihalesine hiç girmemiş, ama Ar-Ge projesi sonucu
            geliştirdiği ürünü piyasaya süren genç bir şirket bile, klasik
            iş deneyim belgesi biriktirmeyi beklemeden kamu alımlarına
            katılma şansı yakalayabiliyor.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurularda en sık gözden kaçan nokta, TÜR Belgesi ile TÜR
            Deneyim Belgesi&apos;nin kamu ihalesi açısından farklı işlevler
            taşıdığının ayırt edilmemesi. Yalnızca TÜR Belgesi almak,
            ürününüzün teknolojik olduğunu gösterir ama ihalede fiyat
            avantajı veya iş deneyimi ispatı sağlamaz; bunun için ayrıca
            TÜR Deneyim Belgesi&apos;ne, dolayısıyla yerli malı belgesine
            ve piyasaya arz kanıtına ihtiyaç var. Kamu ihalesi hedefi olan
            işletmelerin bu iki başvuruyu birlikte planlaması gerekiyor.
          </p>
        </div>
      </section>

      {/* 6. YENİ YÖNETMELİK */}
      <section id="yeni-yonetmelik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Yeni Yönetmelik Neyi Değiştirdi?
        </h2>
        <p className="leading-8 text-gray-700">
          Eski düzenlemede başvuru süreleri daha kısa (ön inceleme 5 iş günü,
          eksik tamamlama 15 iş günü) tutulmuştu. 18 Aralık 2025&apos;te
          yürürlüğe giren yeni yönetmelik hem süreleri (ön inceleme ~10 iş
          günü, eksik tamamlama en fazla 3 aya kadar) güncelledi hem de
          piyasaya arz kanıtı bulunmayan ürünler için Teknoloji Hazırlık
          Seviyesi (TRL 7) alternatifini getirerek, henüz satışa
          sunulmamış ama teknik olarak olgunlaşmış ürünlerin de başvuru
          yapabilmesinin önünü açtı. Amaç, kurumun kendi ifadesiyle,
          teknolojik ürünlerin belgelendirilmesinde uygulama birliğini
          sağlamak ve önceki mevzuattaki belirsizlikleri gidermek.
        </p>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yerli malı belgeniz yoksa TÜR Deneyim Belgesi başvurusundan
            önce bu süreci başlatın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Piyasaya arz kanıtınız (fatura/irsaliye) yoksa TRL 7 kanıtını
            önceden hazırlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kamu destekli projelerde proje bitirme belgenizi destekleyen
            kurumdan zamanında temin edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Özkaynaklı projelerde TÜBİTAK hakem sürecinin ek 15 gün
            uzayabileceğini başvuru takviminize dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Eksik belgeyi 3 ay içinde tamamlamazsanız başvurunuz işlemden
            kaldırılır, süreyi takip edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Belgeyi aldıktan sonra yerli malı belgeniz iptal olursa TÜR
            Deneyim Belgesi de aynı tarihte geçersiz sayılır
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
              href="https://www.resmigazete.gov.tr/eskiler/2025/12/20251218-3.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Resmî Gazete - Teknolojik Ürünlerin Belgelendirilmesine İlişkin Yönetmelik (18 Aralık 2025, Sayı 33111)
            </a>
          </li>
          <li>
            <a
              href="https://turbelgesi.sanayi.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              T.C. Sanayi ve Teknoloji Bakanlığı - TÜR Belgesi Başvuru Portalı
            </a>
          </li>
          <li>
            <a
              href="https://www.yatirimadestek.gov.tr/assets/upload/dosyalar/ozet-teknolojik_urun_deneyim_tur_belgesi_destegi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Yatırıma Destek Ofisleri - TÜR Belgesi Desteği Özeti
            </a>
          </li>
          <li>
            <a
              href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.4734.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              4734 Sayılı Kamu İhale Kanunu (mevzuat.gov.tr)
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
              TÜR Belgesi ile TÜR Deneyim Belgesi arasındaki fark tam olarak nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              TÜR Belgesi, ürünün Ar-Ge veya yenilik projesi sonucu ortaya
              çıkan teknolojik nitelikli bir ürün olduğunu süresiz şekilde
              gösterir. TÜR Deneyim Belgesi ise kamu ihale mevzuatı
              çerçevesinde iş deneyimini tevsik eder, piyasaya arz
              tarihinden itibaren 5 yıl geçerlidir ve yerli malı belgesi
              şartına bağlıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ar-Ge merkezim veya teknoparkta kaydım yok, yine de TÜR Belgesi alabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Yönetmelik, özkaynaklarınızla hiçbir dış destek almadan
              geliştirdiğiniz Ar-Ge projelerini de kapsıyor. Bu durumda
              teknik değerlendirmeyi Sanayi ve Teknoloji Bakanlığı adına
              TÜBİTAK, en az iki akademisyen hakem üzerinden yapıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ürünümü henüz satmadım, hiç faturam yok. Başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Piyasaya arz kanıtı (fatura veya sevk irsaliyesi) sunamıyorsanız
              yönetmelik bir alternatif tanıyor: ürününüzün Teknoloji
              Hazırlık Seviyesi (TRL) açısından en az 7. seviyede olduğunu
              gösterebiliyorsanız başvuru yine mümkün.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yazılım ürünleri için de yerli malı belgesi gerekiyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Yerli malı belgesi şartı mal (fiziksel ürün)
              başvurularında aranıyor; yazılım ve hizmetler bu şarttan muaf
              tutuluyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TÜR Deneyim Belgesi kamu ihalesinde gerçekten ne sağlıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              İki somut fayda var: ihaleye katılımda istenen iş deneyimini
              tevsik eden belgelerin yerine geçebiliyor ve 4734 sayılı Kamu
              İhale Kanunu kapsamında yerli ve orta/yüksek teknolojili
              ürünlere tanınan yüzde 15&apos;e varan fiyat avantajından
              yararlanma yolunu açıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuru ne kadar sürede sonuçlanır?
            </h3>
            <p className="leading-8 text-gray-700">
              Kamu destekli veya Teknogirişim kapsamındaki başvurularda ön
              inceleme yaklaşık 10 iş günü, eksiksiz dosyada belge düzenlemesi
              5 iş günü sürüyor. Özkaynaklı projelerde buna TÜBİTAK hakem
              değerlendirmesi için ~20 iş günü, gerekirse 15 gün ek süre
              ekleniyor.
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
          Ar-Ge yatırımınız ürüne dönüştükten sonra işin bitmediğini, aslında
          ticari getiriyi büyütecek yeni bir adımın başladığını unutmayın.
          TÜR Belgesi ve özellikle TÜR Deneyim Belgesi, kamu alımlarına
          erişimde hem bir kapı aralıyor hem de fiyat rekabetinde somut bir
          avantaj sağlıyor. Yeni yönetmelikle süreç daha net, daha öngörülebilir
          hale geldi; eksik kalan tek şey çoğu işletmenin bu belgenin varlığından
          haberdar olmaması. Ürününüz piyasaya çıktıysa veya TRL 7 seviyesine
          ulaştıysa, başvuruyu ertelemenin bir maliyeti var.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-teknoyatirim-destek-programi-basvuruya-kapandi-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • TEKNOYATIRIM DESTEK PROGRAMI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB TEKNOYATIRIM Programı Kapandı mı? Alternatifler</h3>
          </Link>
          <Link
            href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">AR-GE MERKEZİ • 5746 SAYILI KANUN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ar-Ge Merkezi Nedir? Nasıl Kurulur?</h3>
          </Link>
          <Link
            href="/blog/teknopark-nedir-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKNOPARK • AR-GE • YAZILIM</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Teknopark Nedir? Avantajları ve Başvuru Rehberi</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"TÜR Belgesi ile TÜR Deneyim Belgesi arasındaki fark tam olarak nedir?","acceptedAnswer":{"@type":"Answer","text":"TÜR Belgesi, ürünün Ar-Ge veya yenilik projesi sonucu ortaya çıkan teknolojik nitelikli bir ürün olduğunu süresiz şekilde gösterir. TÜR Deneyim Belgesi ise kamu ihale mevzuatı çerçevesinde iş deneyimini tevsik eder, piyasaya arz tarihinden itibaren 5 yıl geçerlidir ve yerli malı belgesi şartına bağlıdır."}},{"@type":"Question","name":"Ar-Ge merkezim veya teknoparkta kaydım yok, yine de TÜR Belgesi alabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Evet. Yönetmelik, özkaynaklarınızla hiçbir dış destek almadan geliştirdiğiniz Ar-Ge projelerini de kapsıyor. Bu durumda teknik değerlendirmeyi Sanayi ve Teknoloji Bakanlığı adına TÜBİTAK, en az iki akademisyen hakem üzerinden yapıyor."}},{"@type":"Question","name":"Ürünümü henüz satmadım, hiç faturam yok. Başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Piyasaya arz kanıtı (fatura veya sevk irsaliyesi) sunamıyorsanız yönetmelik bir alternatif tanıyor: ürününüzün Teknoloji Hazırlık Seviyesi (TRL) açısından en az 7. seviyede olduğunu gösterebiliyorsanız başvuru yine mümkün."}},{"@type":"Question","name":"Yazılım ürünleri için de yerli malı belgesi gerekiyor mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Yerli malı belgesi şartı mal (fiziksel ürün) başvurularında aranıyor; yazılım ve hizmetler bu şarttan muaf tutuluyor."}},{"@type":"Question","name":"TÜR Deneyim Belgesi kamu ihalesinde gerçekten ne sağlıyor?","acceptedAnswer":{"@type":"Answer","text":"İki somut fayda var: ihaleye katılımda istenen iş deneyimini tevsik eden belgelerin yerine geçebiliyor ve 4734 sayılı Kamu İhale Kanunu kapsamında yerli ve orta/yüksek teknolojili ürünlere tanınan yüzde 15'e varan fiyat avantajından yararlanma yolunu açıyor."}},{"@type":"Question","name":"Başvuru ne kadar sürede sonuçlanır?","acceptedAnswer":{"@type":"Answer","text":"Kamu destekli veya Teknogirişim kapsamındaki başvurularda ön inceleme yaklaşık 10 iş günü, eksiksiz dosyada belge düzenlemesi 5 iş günü sürüyor. Özkaynaklı projelerde buna TÜBİTAK hakem değerlendirmesi için yaklaşık 20 iş günü, gerekirse 15 gün ek süre ekleniyor."}}]}) }}
      />
    </BlogLayout>
  );
}
