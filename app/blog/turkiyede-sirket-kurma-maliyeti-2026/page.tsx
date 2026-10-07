import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Türkiye'de Şirket Kurma Maliyeti 2026 | Koray Akdağ",
  description:
    "2026'da Türkiye'de limited ve anonim şirket kurmanın maliyeti: asgari sermaye, noter, oda, gazete ilanı, defter tasdiki ve mali müşavir kalemleri, ek giderler.",
  keywords: [
    "türkiye'de şirket kurma maliyeti",
    "şirket kuruluş maliyeti 2026",
    "limited şirket kurma maliyeti",
    "anonim şirket kurma maliyeti",
    "şirket kurmak ne kadar tutar",
    "yabancı şirket kuruluş maliyeti türkiye",
    "asgari sermaye 2026",
  ],
  alternates: {
    canonical: "/blog/turkiyede-sirket-kurma-maliyeti-2026",
    languages: {
      tr: "/blog/turkiyede-sirket-kurma-maliyeti-2026",
      en: "/en/blog/company-formation-cost-in-turkey-2026-guide",
    },
  },
};

const sss = [
  {
    q: "2026'da şirket kurmak için asgari sermaye ne kadar?",
    a: "Limited şirkette asgari sermaye 50.000 TL, anonim şirkette 250.000 TL'dir. Halka açık olmayıp kayıtlı sermaye sistemini kabul eden anonim şirketlerde başlangıç sermayesi 500.000 TL'dir.",
  },
  {
    q: "Yabancı bir kişi Türkiye'de şirketin %100'üne sahip olabilir mi?",
    a: "Çoğu sektörde evet. Yabancı gerçek ve tüzel kişiler Türk vatandaşlarıyla aynı kurallara tabi olarak şirket kurabilir. Bazı düzenlemeye tabi sektörlerin kendine özgü izin veya pay sınırları vardır.",
  },
  {
    q: "Sermayenin tamamını kuruluşta mı yatırmam gerekir?",
    a: "Hepsini birden değil. Anonim şirkette sermayenin en az dörtte biri tescilden önce ödenir, kalanı tescilden sonraki 24 ay içinde tamamlanır. Limitedde kuruluşta aynı banka blokajı zorunluluğu yoktur ve sermaye 24 ay içinde de ödenebilir. Kendi yapınız için kuralları teyit edin.",
  },
  {
    q: "Sermaye kuruluş maliyetine dahil mi?",
    a: "Hayır. Sermaye şirketin hesabında kalır ve faaliyetlerinde kullanılır. Kuruluş maliyeti, sermayenin üzerine eklenen noter, ticaret sicili, oda, ilan ve mali müşavir gibi tek seferlik giderlerdir.",
  },
  {
    q: "Yabancı ortak olmak Türkiye'de çalışma hakkı verir mi?",
    a: "Hayır. Ortaklık tek başına şirkette çalışma veya yönetim yetkisi vermez. Yabancı bir yönetici veya çalışan için çalışma izni gerekir.",
  },
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türkiye'de Şirket Kurma Maliyeti 2026: Yabancı Yatırımcılar İçin Kalem Kalem Rehber"
      description="2026'da limited veya anonim şirket kurmanın gerçek maliyeti: asgari sermaye, resmî giderler, profesyonel hizmet bedelleri ve çoğu rehberin atladığı ek maliyetler."
      category="ŞİRKET KURULUŞU • TÜRKİYE • 2026"
      date="Ekim 2026"
      readTime="9 Dakika"
      slug="turkiyede-sirket-kurma-maliyeti-2026"
      coverImage="https://images.unsplash.com/photo-1763965367191-6455ef032c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türkiye&apos;de şirket kurmanın iki ayrı maliyet katmanı vardır:{" "}
          <strong>sermaye</strong> (şirketin hesabında kalır) ve{" "}
          <strong>kuruluş giderleri</strong> (tek seferlik harcamalar). 2026&apos;da
          asgari sermaye <strong>limitedde 50.000 TL</strong>,{" "}
          <strong>anonimde 250.000 TL</strong>&apos;dir. Kuruluş giderleri ise
          yayımlanan 2026 tahminlerine göre ofis kirası hariç yaklaşık{" "}
          <strong>limitedde 15.000 – 40.000 TL</strong>,{" "}
          <strong>anonimde 20.000 – 90.000 TL</strong> aralığındadır. Aralığın
          geniş olmasının başlıca nedeni, mali müşavir ve e-imza hizmetlerinin
          dahil olup olmamasıdır.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          Bunlar piyasa tahminleridir, resmî tarife değildir. Nihai tutar il,
          sermaye, faaliyet alanı ve hizmet sağlayıcıya göre değişir.
        </p>
      </div>

      <section className="mt-16 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Şirket Türüne Göre Asgari Sermaye
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Şirket türü</th>
                <th className="p-5">Asgari sermaye (2026)</th>
                <th className="p-5">Ortak sayısı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Limited şirket</td>
                <td className="p-5">50.000 TL</td>
                <td className="p-5">1 – 50</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Anonim şirket</td>
                <td className="p-5">250.000 TL</td>
                <td className="p-5">En az 1</td>
              </tr>
              <tr>
                <td className="p-5">Kayıtlı sermaye sistemindeki halka kapalı anonim</td>
                <td className="p-5">500.000 TL</td>
                <td className="p-5">En az 1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Bazı sitelerde tek ortaklı limited için hâlâ 10.000 TL yazıyor; bu
          bilgi eskidir. Güncel eşikler ve eski şirketler için son tarih{" "}
          <Link
            href="/blog/anonim-limited-sirket-asgari-sermaye-artirimi-2026"
            className="font-semibold text-orange-600 underline"
          >
            asgari sermaye artırımı rehberimizde
          </Link>{" "}
          anlatılıyor.
        </p>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kuruluş Giderleri: Kalem Kalem
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hukuk ve mali müşavirlik büroları 2026 için birbirinden epey farklı
          rakamlar yayımlıyor; bu yüzden tablo birkaç kaynaktan derlenen
          aralıkları gösteriyor. Resmî tarife değildir, il ve sağlayıcıya göre
          değişir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Gider kalemi</th>
                <th className="p-5">Limited (TL)</th>
                <th className="p-5">Anonim (TL)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Noter</td>
                <td className="p-5">4.000 – 6.500</td>
                <td className="p-5">7.500 – 13.500</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Ticaret odası, ticaret sicili ve gazete ilanı</td>
                <td className="p-5">8.000 – 13.000</td>
                <td className="p-5">12.000 – 32.000</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Rekabet Kurumu payı</td>
                <td className="p-5" colSpan={2}>Sermayenin %0,04&apos;ü (50.000 TL için yaklaşık 20 TL, 250.000 TL için 100 TL)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">E-imza ve mali mühür</td>
                <td className="p-5" colSpan={2}>Toplamda yaklaşık 4.500 – 5.500</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Mali müşavir kuruluş hizmeti</td>
                <td className="p-5">11.000 – 15.000</td>
                <td className="p-5">22.000 – 30.000</td>
              </tr>
              <tr className="bg-orange-50 font-semibold">
                <td className="p-5">Tipik toplam (sermaye ve ofis hariç)</td>
                <td className="p-5">Yaklaşık 15.000 – 40.000</td>
                <td className="p-5">Yaklaşık 20.000 – 90.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Rakamları Nasıl Okumalı?
          </h3>
          <p className="leading-8 text-gray-700">
            Aralıkların alt ucu ağırlıklı olarak resmî kalemleri (noter, oda,
            sicil, ilan) kapsar. Üst uç, sağlayıcıdan sağlayıcıya çok değişen
            mali müşavir ve dijital sertifika hizmetlerini de ekler. Teklifleri
            karşılaştırırken neleri kapsadığını sorun; güncel ücretleri noter,
            oda ve mali müşavirinizden teyit edin.
          </p>
        </div>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Çoğu Rehberin Atladığı Maliyetler
        </h2>
        <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">
          <li>
            <strong>Merkez adresi:</strong> Gerçek bir adres gerekir. Sanal veya
            paylaşımlı ofis kiralık birimden ucuzdur ancak ticaret sicili ve
            vergi dairesince kabul edilmelidir.
          </li>
          <li>
            <strong>Çalışma izni ve ikamet:</strong> Ortaklık, Türkiye&apos;de
            çalışma veya yönetim hakkı vermez. Yabancı yönetici için çalışma
            izni gerekir ve kendi harç ve şartları vardır.
          </li>
          <li>
            <strong>Aylık muhasebe:</strong> Tescilden sonra aylık defter, KDV
            ve SGK bildirimleri sürekli bir gider olur.
          </li>
          <li>
            <strong>Banka hesabı ve sermaye transferi:</strong> Yurt dışından
            getirilen sermaye Türk bankası üzerinden aktarılır; banka masrafı
            oluşur.
          </li>
          <li>
            <strong>Sektör ruhsatları:</strong> Finans, enerji, gıda veya sağlık
            gibi düzenlemeye tabi faaliyetlerde ek izinler gerekir.
          </li>
        </ul>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Süreç Nasıl İşliyor?
        </h2>
        <ol className="ml-6 list-decimal space-y-4 text-lg text-gray-700 marker:font-bold marker:text-orange-500">
          <li>Şirket türü seçilir ve ana sözleşme hazırlanır.</li>
          <li>Ticaret Bakanlığı&apos;nın MERSİS sistemi üzerinden kayıt yapılır. Yabancılar pasaport veya yabancı kimlik numarasıyla giriş yapabilir.</li>
          <li>Noterde imza atılır (yurt dışındaysanız vekâletname kullanılabilir).</li>
          <li>Tescilde gereken sermaye payı banka hesabına yatırılır.</li>
          <li>Ticaret sicili ve oda kaydı yapılır.</li>
          <li>Vergi dairesi ve SGK kaydı, defter tasdiki ve banka hesabı tamamlanır.</li>
        </ol>
        <p className="mt-6 leading-8 text-gray-700">
          Adım adım detay için{" "}
          <Link
            href="/blog/turkiyede-adan-zye-sirket-kurmak-avantajlari"
            className="font-semibold text-orange-600 underline"
          >
            A&apos;dan Z&apos;ye şirket kurma rehberimize
          </Link>{" "}
          ve{" "}
          <Link
            href="/blog/sahis-limited-anonim-sirket-karsilastirma"
            className="font-semibold text-orange-600 underline"
          >
            şirket türleri karşılaştırmasına
          </Link>{" "}
          bakabilirsiniz.
        </p>
      </section>

      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          {sss.map((item) => (
            <div key={item.q} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">{item.q}</h3>
              <p className="leading-8 text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Sermayeyi ve kuruluş giderlerini ayrı bütçeleyin, her hizmet
          sağlayıcıya teklifinin tam olarak neleri kapsadığını sorun. Çalışma
          izni, muhasebe veya ruhsat adımları eksikse en ucuz teklif çoğu zaman
          en ucuz sonuç olmaz.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık, projenize özel maliyet
          tahmini hazırlayabilir; kuruluş, teşvik ve sonrasındaki uyum
          süreçlerini tek noktadan yönetebilir.{" "}
          <Link href="/#contact" className="font-semibold text-orange-600 underline">
            İletişime geçin
          </Link>
          .
        </p>
        <p className="mt-6 text-sm leading-7 text-gray-500">
          Bu yazı genel bilgilendirme amaçlıdır; hukuki veya mali müşavirlik
          tavsiyesi değildir. Tutarlar Ekim 2026 itibarıyla yaklaşık piyasa
          tahminleridir ve işleme geçmeden önce teyit edilmelidir.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: sss.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </BlogLayout>
  );
}
