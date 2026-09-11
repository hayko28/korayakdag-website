import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yurt Dışında Şirket ve Marka Satın Alma Desteği: 2026 Güncel Oranlar | Koray Akdağ",
  description: "Ticaret Bakanlığı'nın 11007 sayılı Kararla güncellediği Şirket ve Marka Alım Desteği: 28 milyon TL danışmanlık, 171 milyon TL faiz desteği, kira/tanıtım kalemleri, kimler yararlanabilir ve DYS üzerinden başvuru süreciyle 2026 güncel rehber.",
  keywords: [
    "yurt dışında şirket satın alma desteği",
    "ticaret bakanlığı şirket ve marka alım desteği",
    "ileri teknoloji şirket alımı desteği",
    "yurt dışı marka satın alma desteği",
    "5973 sayılı karar",
    "11007 sayılı karar",
    "DYS başvurusu ihracat destekleri",
    "yurt dışı şirket alımı faiz desteği",
    "2026 ihracat destekleri",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yurt Dışında Şirket ve Marka Satın Alma Desteği: 2026 Güncel Oranlar ve Başvuru Süreci"
      description="Ticaret Bakanlığı'nın 7 Mart 2026 tarihli 11007 sayılı Kararla güncellediği Şirket ve Marka Alım Desteği'nde 28 milyon TL danışmanlık, 171 milyon TL faiz desteği bütçesi, kira ve tanıtım gideri kalemleri, kimlerin yararlanabileceği ve DYS üzerinden adım adım başvuru süreciyle kapsamlı rehber."
      category="İHRACAT DESTEKLERİ • M&A • 2026"
      date="2026"
      readTime="9 Dakika"
      slug="yurt-disinda-sirket-marka-satin-alma-destegi-2026"
      coverImage="https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Yurt Dışında Şirket veya Marka Satın Almayı mı Planlıyorsunuz?"
      ctaText="Hedef şirketin değerlemesinden due diligence sürecine, danışmanlık ve faiz desteği başvurusundan Türkiye tarafındaki bildirim yükümlülüklerine kadar süreci uçtan uca yönetiyoruz. İhtiyacınızı birlikte değerlendirelim."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de büyüyen ve ihracatını artırmak isteyen şirketler için
          organik büyümenin yanında bir başka güçlü yol daha var: yurt dışında
          yerleşik bir şirketi veya markayı doğrudan satın almak. Ticaret
          Bakanlığı, bu tür satın almaların maliyetini azaltmak için
          &quot;Şirket ve Marka Alım Desteği&quot; adı altında danışmanlık,
          kredi faizi, kira ve tanıtım giderlerini kapsayan bir destek paketi
          sunuyor. 7 Mart 2026&apos;da yürürlüğe giren değişiklikle bu
          destekteki üst limitler ciddi oranda yükseltildi.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Desteğin dayandığı 5973 sayılı Karar ve 11007 sayılı güncelleme</li>
          <li>✔ Danışmanlık, faiz, kira ve tanıtım desteği kalemleri</li>
          <li>✔ Kimler yararlanabilir, &quot;ileri teknoloji şirket&quot; ne demek?</li>
          <li>✔ 2026 güncel destek tutarları tablosu</li>
          <li>✔ DYS üzerinden adım adım başvuru süreci</li>
          <li>✔ Dikkat edilmesi gereken şart ve sınırlamalar</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#genel-bakis" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Destek Neden Önemli? Genel Bakış
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Destek Kapsamı ve Unsurları
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Yararlanabilir? &quot;İleri Teknoloji Şirket&quot; Tanımı
          </Link>
          <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. 2026 Güncel Destek Tutarları
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#turkiye" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. GENEL BAKIŞ */}
      <section id="genel-bakis" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Destek Neden Önemli? Genel Bakış
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket ve Marka Alım Desteği, Ticaret Bakanlığı&apos;nın 5973 sayılı
          İhracat Destekleri Hakkında Karar&apos;a dayanan destek
          mekanizmalarından biri. Amaç açık: Türk şirketlerinin yurt dışında
          yerleşik, özellikle ileri teknolojiye sahip şirketleri veya tanınmış
          markaları satın alarak hem teknoloji transferi sağlamasını hem de
          uluslararası pazarlarda doğrudan bir marka ve müşteri ağına
          kavuşmasını teşvik etmek.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu destek yeni değil, ancak 7 Mart 2026 tarihli ve 33189 sayılı
          Resmî Gazete&apos;de yayımlanan <strong>11007 sayılı Cumhurbaşkanı
          Kararı</strong> ile 5973 sayılı Karar&apos;ın 9. maddesinde önemli
          bir güncelleme yapıldı. Danışmanlık ve faiz desteğindeki üst
          limitler ciddi oranda yükseltildi, kira ve ortak ofis üyeliği
          giderleri de destek kapsamına dahil edildi. Aynı kararla, artık
          kullanılmayan sanal fuar katılım desteğine ilişkin 22. madde
          yürürlükten kaldırıldı.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💼</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Doğrudan Pazar ve Marka Erişimi
            </h3>
            <p className="text-gray-700">
              Sıfırdan yurt dışı yapılanma yerine, o pazarda zaten yerleşik
              bir şirketi veya markayı satın alarak süreci hızlandırma imkânı.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🔬</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Teknoloji Transferi
            </h3>
            <p className="text-gray-700">
              İleri teknolojiye sahip yurt dışı şirketlerin alımında hem
              danışmanlık hem faiz desteğinde belirgin şekilde yüksek
              limitler uygulanıyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📉</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Maliyetin Yarısını Devlet Karşılıyor
            </h3>
            <p className="text-gray-700">
              Danışmanlık ve kira giderlerinde destek oranı %50; kredi faiz
              giderlerinde de puan bazlı önemli bir indirim söz konusu.
            </p>
          </div>
        </div>
      </section>

      {/* 2. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Destek Kapsamı ve Unsurları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket ve Marka Alım Desteği tek bir kalemden oluşmuyor, üç ayrı
          destek unsurunu bir arada barındırıyor. Bir şirket, satın alma
          işleminin niteliğine göre bu unsurların birden fazlasından aynı anda
          yararlanabilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek Unsuru</th>
                <th className="p-5">Neyi Kapsar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mali ve Hukuki Danışmanlık Desteği</td>
                <td className="p-5">
                  Satın alma sürecinde alınan değerleme, due diligence, hukuki
                  inceleme ve sözleşme danışmanlığı gibi hizmetlerin gideri
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kredi Faiz Desteği</td>
                <td className="p-5">
                  Satın alma bedelini finanse etmek için kullanılan kredinin
                  faiz giderinin bir kısmı
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kira, Ortak Ofis ve Tanıtım Desteği</td>
                <td className="p-5">
                  Satın alınan yurt dışı şirketin ofis/birim kira gideri,
                  paylaşımlı ofis üyeliği ve tanıtım-pazarlama faaliyetleri
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Destek, hem &quot;ileri teknolojiye sahip şirket alımı&quot; hem de
            &quot;yurt dışında yerleşik şirkete ait marka alımı&quot;
            işlemlerini ayrı ayrı kapsıyor. En yüksek üst limitler, teknoloji
            transferi sağlayacak nitelikteki şirket alımlarına uygulanıyor;
            marka alımı ve teknoloji unsuru taşımayan genel şirket alımlarında
            limitler daha farklı belirleniyor. Bu nedenle başvurunuzun hangi
            kategoriye girdiğini netleştirmek, doğru destek tutarını
            hesaplamak açısından kritik.
          </p>
        </div>
      </section>

      {/* 3. KİMLER YARARLANABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Yararlanabilir? &quot;İleri Teknoloji Şirket&quot; Tanımı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Destekten, Türk Ticaret Kanunu&apos;na göre kurulmuş ve yurt dışında
          yerleşik bir şirketi veya yurt dışında yerleşik bir şirkete ait
          markayı satın alan (veya satın almayı planlayan) şirketler
          yararlanabilir. Başvuru öncesinde şirketin faaliyet konusu,
          ihracatçı birliği kaydı ve satın alma işleminin niteliği
          incelenmeye tabi tutulur.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Temel Şartlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Şirket türü:</strong> Türkiye&apos;de Türk Ticaret
              Kanunu&apos;na göre kurulmuş bir şirket olmak.
            </li>
            <li>
              <strong>Satın alınan yapı:</strong> Yurt dışında yerleşik bir
              şirket veya yurt dışında yerleşik bir şirkete ait marka olması.
            </li>
            <li>
              <strong>Teknoloji transferi (yüksek limit için):</strong> Satın
              alınan şirketin ileri teknolojiye sahip ve teknoloji transferi
              sağlayacak nitelikte olması; bu değerlendirme Ticaret Bakanlığı
              ve ilgili incelemeci kuruluş tarafından başvuru bazında yapılır.
            </li>
            <li>
              <strong>Marka alımında süreklilik şartı:</strong> Genelgeye göre,
              alınacak markanın yerleşik olduğu ülkede veya uluslararası
              düzeyde uzun süredir (genelgede belirtilen asgari yıl kadar)
              tescilli olması ve tescilin geçerliliğini koruması aranıyor.
            </li>
            <li>
              <strong>Danışmanlık hizmeti veren kuruluş:</strong> Değerleme,
              hukuki ve mali danışmanlık hizmetlerinin bu konuda yetkin,
              belgelendirilebilir bir kuruluştan alınmış olması.
            </li>
          </ul>
        </div>
      </section>

      {/* 4. TUTARLAR */}
      <section id="tutarlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. 2026 Güncel Destek Tutarları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          11007 sayılı Karar ile ileri teknolojiye sahip şirket alımlarına
          yönelik danışmanlık ve faiz desteğindeki üst limitler önemli ölçüde
          yükseltildi. Aşağıdaki tablo, güncel destek tutarlarını özetliyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Üst Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mali/Hukuki Danışmanlık (İleri teknoloji şirket alımı)</td>
                <td className="p-5">%50</td>
                <td className="p-5">Yıllık 28.000.000 TL&apos;ye kadar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kredi Faiz Desteği (İleri teknoloji şirket alımı)</td>
                <td className="p-5">TL kredide 5 puan, döviz kredide 2 puan</td>
                <td className="p-5">Toplam 171.000.000 TL&apos;ye kadar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kira / Ortak Ofis Üyeliği</td>
                <td className="p-5">%50</td>
                <td className="p-5">Birim başına yıllık 7.500.000 TL&apos;ye kadar</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Tanıtım / Pazarlama Gideri</td>
                <td className="p-5">%50</td>
                <td className="p-5">
                  Ülke başına yıllık 9.500.000 TL, birim yoksa markalı
                  başvurularda 15.000.000 TL&apos;ye kadar
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Faiz desteği tutarı, ödenen faiz giderinin %50&apos;sini aşamaz ve
            ilk faiz ödeme tarihinden itibaren belirli bir süre boyunca
            (genelgeye göre azami 5 yıl) uygulanır. Destekten toplamda en
            fazla 4 yıl ve en fazla 25 birim/ülke için yararlanılabiliyor.
            Marka alımı ve ileri teknoloji unsuru taşımayan genel şirket
            alımlarında danışmanlık ve faiz desteği limitleri farklı ve daha
            düşük seviyelerde belirleniyor. Başvurunuza uygulanacak kesin
            tutar ve oranlar için mutlaka{" "}
            <a
              href="https://ticaret.gov.tr/destekler/ihracat-destekleri/5973-sayili-ihracat-destekleri-hakkinda-karara-iliskin-genelgeler/sirket-ve-marka-alim-destegi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Ticaret Bakanlığı&apos;nın resmi Şirket ve Marka Alım Desteği
              sayfası
            </a>{" "}
            ve güncel genelge kontrol edilmelidir; destek üst limitleri her
            yıl enflasyon oranına göre de güncellenmektedir.
          </p>
        </div>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Adım Adım Başvuru Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Başvuru dönemi &quot;sürekli aktif&quot; olduğu için belirli bir
          takvime bağlı değil; ancak süreç iki aşamalı ilerliyor: önce ön onay,
          sonra fiili gider gerçekleştikten sonra ödeme başvurusu.
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">DYS Üzerinden Ön Onay Başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Değerleme ve Danışmanlık Süreci</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Satın Alma ve Gider Gerçekleşmesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Ödeme Başvurusu (6 Ay İçinde)</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.1. DYS Üzerinden Ön Onay Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketler, satın alma işlemine başlamadan önce Destek Yönetim
            Sistemi (DYS) üzerinden Ticaret Bakanlığı&apos;na ön onay
            başvurusu yapar. Bu aşamada satın alınacak şirket/markanın
            niteliği, ileri teknoloji unsuru taşıyıp taşımadığı ve destek
            kategorisi belirlenir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.2. Değerleme ve Danışmanlık Süreci
          </h3>
          <p className="leading-8 text-gray-700">
            Ön onayın ardından şirket/marka değerleme raporu ile mali ve
            hukuki danışmanlık hizmetleri alınır. Başvuru dosyasında EK-A1,
            EK-A2, EK-A3, EK-A4 ve EK-A5 formları ile şirket/marka değerleme
            özet formlarının doldurulması gerekir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.3. Satın Alma İşleminin Gerçekleştirilmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Satın alma işlemi tamamlanır, kredi kullanılmışsa faiz ödemeleri
            başlar, kira ve tanıtım giderleri fiilen gerçekleştirilir. Tüm
            işlemlerin fatura ve ödeme belgeleriyle desteklenmesi gerekir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.4. Destek Ödemesi Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Destek ödemesi başvuruları, ödeme belgesi tarihinden itibaren en
            geç 6 ay içinde gerekli belgelerle birlikte DYS üzerinden Ticaret
            Bakanlığı&apos;na veya Bakanlık tarafından görevlendirilen
            İhracatçı Birlikleri Genel Sekreterliği&apos;ne (incelemeci
            kuruluş) yapılır. Bu süreye dikkat edilmemesi, gerçekleşmiş gider
            için dahi destek hakkının kaybedilmesine yol açabilir.
          </p>
        </div>
      </section>

      {/* 6. TÜRKİYE TARAFINDAKİ YÜKÜMLÜLÜKLER */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Türkiye Tarafındaki Yükümlülükler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yurt dışında şirket veya marka satın almak, Türkiye tarafında da
          bazı bildirim ve raporlama yükümlülüklerini beraberinde getirir. Bu
          süreç, sadece destek başvurusundan ibaret değil; sermaye ihracı
          bildirimi, değerleme ve due diligence raporlaması, satın alma
          sonrası konsolide raporlama gibi adımları da içerir.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Değerlemeden Başvuruya, Süreci Uçtan Uca Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Hedef şirketin veya markanın değerlemesi, mali/hukuki due
            diligence süreci, Şirket ve Marka Alım Desteği başvurusunun DYS
            üzerinden hazırlanması ve Türkiye tarafındaki yurt dışı yatırım
            bildirimi gibi yükümlülüklerin tamamını ayrı bir yerel firma
            aramanıza gerek kalmadan biz yürütüyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Planladığınız satın almayı birlikte değerlendirelim.
            </Link>
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🇹🇷 Yurt Dışı Yatırım Bildirimi
          </h3>
          <p className="leading-8 text-gray-700">
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler, yurt dışında
            şirket satın almak veya mevcut bir şirkete ortak olmak amacıyla
            yaptıkları sermaye ihracını takip eden <strong>3 ay içinde</strong>
            {" "}Ticaret Bakanlığı&apos;nın Yurt Dışı Yatırım Bildirimi
            formunu doldurarak ilgili kurumlara göndermekle yükümlüdür. Bu
            bildirim her yıl güncellenmelidir.
          </p>
        </div>
      </section>

      {/* 7. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Satın alma işlemine başlamadan önce DYS üzerinden ön onay alın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hedef şirketin &quot;ileri teknoloji&quot; kapsamına girip girmediğini net şekilde belgeleyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Değerleme ve danışmanlık faturalarını destek başvurusuna uygun şekilde saklayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ödeme başvurusu için 6 aylık süreyi asla kaçırmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Marka alımında tescil süresi şartını önceden kontrol edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faiz desteğinin ödenen faizin %50&apos;sini aşamayacağını bütçenize yansıtın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde yapın ve her yıl güncelleyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Güncel tutar ve oranları başvuru öncesinde ticaret.gov.tr üzerinden teyit edin
          </div>
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
              Bu destekten sadece büyük şirketler mi yararlanabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, destek belirli bir ciro veya ölçek şartına bağlı değil.
              Belirleyici olan, Türk Ticaret Kanunu&apos;na göre kurulmuş
              olmak ve yurt dışında bir şirket veya marka satın alma işlemine
              girişmek. Ancak satın alma bedeli ve danışmanlık giderleri genelde
              yüksek tutarlar olduğundan destek, pratikte orta ve büyük ölçekli
              yapılanmalarda daha sık kullanılıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Danışmanlık desteği hangi giderleri kapsıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Satın alma sürecinde alınan şirket/marka değerleme raporu, mali
              ve hukuki due diligence hizmetleri ile sözleşme danışmanlığı
              gibi giderler kapsam dahilinde. Danışmanlık hizmetinin bu konuda
              yetkin bir kuruluştan alınmış olması ve fatura ile
              belgelendirilmesi gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Faiz desteği için hangi kredi türleri geçerli?
            </h3>
            <p className="leading-8 text-gray-700">
              Satın alma bedelinin finansmanında kullanılan Türk Lirası
              kredilerde 5 puan, döviz kredileri ve dövize endeksli kredilerde
              2 puanlık faiz desteği uygulanıyor. Destek tutarı, ödenen faiz
              giderinin yarısını aşamıyor ve belirli bir süreyle sınırlı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuru için son tarih var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, başvuru dönemi sürekli açık. Şirketler satın alma
              sürecine girmeden önce DYS üzerinden ön onay başvurusu yapabilir;
              destek ödemesi başvurusu ise ilgili giderin gerçekleştiği ödeme
              belgesi tarihinden itibaren en geç 6 ay içinde yapılmalıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Marka alımı ile şirket alımı desteği aynı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, ikisi ayrı kalemler olarak değerlendiriliyor ve limitleri
              farklı belirleniyor. En yüksek limitler, teknoloji transferi
              sağlayacak nitelikteki şirket alımlarına uygulanırken, marka
              alımında ayrı bir danışmanlık ve faiz desteği oranı geçerli.
              Kesin tutarlar için başvuru öncesinde resmi genelgenin
              incelenmesi gerekiyor.
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
          Yurt dışında bir şirket veya marka satın almak, uluslararası
          pazarlara açılmanın en hızlı yollarından biri olabilir. Ticaret
          Bakanlığı&apos;nın 11007 sayılı Kararla güncellediği Şirket ve Marka
          Alım Desteği, bu tür işlemlerin danışmanlık, finansman ve ilk
          operasyonel maliyetlerini önemli ölçüde azaltıyor. Ancak destek
          kalemlerinin çokluğu, kategori ayrımı (ileri teknoloji şirket alımı
          ile marka alımı arasındaki fark) ve sıkı belge/süre şartları
          nedeniyle süreç, doğru planlanmadığında kaçırılan bir fırsata
          dönüşebilir. Satın alma öncesi değerlemeden başvuru dosyasının
          hazırlanmasına kadar profesyonel destek almak, hem doğru desteği
          hem de sürecin risksiz ilerlemesini sağlar.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri: Pazara Giriş, Fuar, E-İhracat ve Diğer Programlar</h3>
          </Link>
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ&apos;ler İçin Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">M&A • DUE DILIGENCE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Due Diligence Nedir? Şirket Satın Alma ve Birleşme Öncesi Neden Kritik?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
