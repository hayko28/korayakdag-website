import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "2026 Yatırım Vergi Paketi: %12,5 Kurumlar Vergisi | Koray Akdağ",
  description:
    "Türkiye'nin 2026 yatırım vergi paketi: imalatta %12,5 kurumlar vergisi, transit ticaret ve nitelikli hizmet merkezi indirimleri, yurt dışından gelen kişilere 20 yıllık gelir muafiyeti.",
  keywords: [
    "imalat kurumlar vergisi %12,5",
    "7582 sayılı kanun",
    "Güçlü Yatırım Merkezi Programı",
    "transit ticaret vergi indirimi",
    "nitelikli hizmet merkezi",
    "yurt dışı kazanç 20 yıl muafiyet",
    "yabancı yatırımcı vergi teşviki 2026",
  ],
  alternates: {
    canonical: "/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci",
    languages: {
      tr: "/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci",
      en: "/en/blog/turkiye-2026-tax-incentive-package-foreign-investors",
    },
  },
};

const sss = [
  {
    q: "2026'da Türkiye'de kurumlar vergisi oranı kaç?",
    a: "Genel kurumlar vergisi oranı %25 olarak devam ediyor. 4 Haziran 2026'da Resmî Gazete'de yayımlanan 7582 sayılı Kanun'a göre, nitelikli şirketlerin fiilî imalat ve tarımsal üretim kazançları 2027 vergilendirme döneminden itibaren %12,5 oranında vergilendirilecek. 2026 döneminde imalat kazançlarında 1 puanlık indirim sürüyor.",
  },
  {
    q: "%12,5 orandan kimler yararlanabilir?",
    a: "Sanayi sicil belgesine sahip ve fiilen imalat faaliyetinde bulunan şirketler ile nitelikli tarımsal üretim yapan şirketler. Oran yalnızca bu faaliyetlerden elde edilen kazanç için geçerlidir; karma faaliyet gösteren şirketler gelirlerini kaynağına göre ayrı izlemek zorundadır.",
  },
  {
    q: "Yurt dışından gelenlere tanınan 20 yıllık muafiyet nedir?",
    a: "1 Ocak 2026 ve sonrasında Türkiye'de vergi mukimi olan ve önceki üç takvim yılında Türkiye'de ikametgâhı veya engel teşkil eden vergi yükümlülüğü bulunmayan kişilerin yurt dışı kaynaklı gelir ve kazançları 20 yıl boyunca vergiden muaf olabilir. Türkiye kaynaklı gelir vergilendirilmeye devam eder.",
  },
  {
    q: "Nitelikli hizmet merkezi nedir?",
    a: "En az üç farklı ülkedeki ilişkili kuruluşlara hizmet veren ve yıllık cirosunun en az %80'ini bu yurt dışı ilişkili hizmetlerden elde eden sermaye şirketidir. Uygun kazançlarda %95, İstanbul Finans Merkezi veya belirlenen sanayi bölgelerinde %100 indirim 20 hesap dönemi boyunca uygulanır.",
  },
  {
    q: "Bu düzenlemelerin hepsi yürürlükte mi?",
    a: "Birçoğu yürürlükte, ancak başlangıç tarihleri düzenlemeye göre değişiyor (bazıları 2026 dönemlerinden, %12,5 oranı 2027'den itibaren) ve ayrıntılar ikincil mevzuata bağlı. Yatırım kararı vermeden önce güncel metni teyit edin.",
  },
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türkiye'nin 2026 Yatırım Vergi Paketi: %12,5 Kurumlar Vergisi, Transit Ticaret ve 20 Yıllık Muafiyet"
      description="2026'da yabancı yatırımcılar için neler değişti: imalatçılara indirimli kurumlar vergisi, transit ticaret ve nitelikli hizmet merkezi indirimleri, Türkiye'ye yerleşen kişilere özel rejim."
      category="VERGİ TEŞVİKLERİ • YABANCI YATIRIM • 2026"
      date="Ekim 2026"
      readTime="10 Dakika"
      slug="turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci"
      coverImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 2026&apos;da Ne Değişti?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          24 Nisan 2026&apos;da Türkiye, ülkeyi yatırım, ihracat ve bölgesel
          yönetim merkezi hâline getirmeyi hedefleyen &quot;Güçlü Yatırım
          Merkezi Programı&quot;nı açıkladı. Vergi ayakları{" "}
          <strong>7582 sayılı Kanun</strong> (21 Mayıs 2026&apos;da kabul, 4
          Haziran 2026&apos;da Resmî Gazete&apos;de yayım) ve 30 Nisan 2026
          tarihli 11257 sayılı Cumhurbaşkanı Kararı ile düzenlendi.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ İmalat ve tarımsal üretim kazancında 2027&apos;den itibaren %12,5 kurumlar vergisi</li>
          <li>✔ Transit ticaret kazancında %95 ile %100 arası indirim</li>
          <li>✔ Bölgesel merkezler için yeni nitelikli hizmet merkezi rejimi</li>
          <li>✔ Nitelikli hizmet ihracatında %100 indirim</li>
          <li>✔ Türkiye&apos;ye yerleşen kişilere 20 yıllık yurt dışı gelir muafiyeti</li>
        </ul>
      </div>

      <section className="mt-16 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Düzenlemelere Genel Bakış
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Düzenleme</th>
                <th className="p-5">Avantaj</th>
                <th className="p-5">Uygulama başlangıcı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">İmalat ve tarımsal üretim</td>
                <td className="p-5">Bu kazançta %12,5 kurumlar vergisi (genel oran %25)</td>
                <td className="p-5">2027 vergilendirme dönemi</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Transit ticaret</td>
                <td className="p-5">%95 indirim, İstanbul Finans Merkezi veya belirlenen bölgelerde %100</td>
                <td className="p-5">1 Ocak 2026 ve sonrası dönemler</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Nitelikli hizmet merkezleri</td>
                <td className="p-5">Uygun yurt dışı kazançta %95 / %100 indirim, 20 hesap dönemi</td>
                <td className="p-5">7582 sayılı Kanun&apos;un yürürlük hükümlerine göre</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Hizmet ihracatı (yazılım, mühendislik, tasarım vb.)</td>
                <td className="p-5">Nitelikli kazançta %100 indirim</td>
                <td className="p-5">1 Ocak 2026 ve sonrası dönemler</td>
              </tr>
              <tr>
                <td className="p-5">Yerleşen kişiler</td>
                <td className="p-5">Yurt dışı gelir ve kazançta 20 yıl muafiyet, %1 veraset vergisi</td>
                <td className="p-5">1 Ocak 2026 sonrası mukimler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. İmalatçılara %12,5 Kurumlar Vergisi
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Sanayi sicil belgesine sahip ve fiilen imalat yapan şirketlerle
          nitelikli tarımsal üretim yapan şirketlerin bu faaliyetlerden elde
          ettiği kazanç, 2027 vergilendirme döneminden itibaren %12,5 oranında
          vergilendirilecek. 2026 döneminde 1 puanlık indirim devam ediyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            💡 Uygulamada Dikkat
          </h3>
          <p className="leading-8 text-gray-700">
            İndirimli oran yalnızca imalat kazancını kapsar. Şirketiniz ticaret
            veya hizmet faaliyeti de yürütüyorsa gelir kalemlerini ayrı takip
            etmeniz gerekir. Hem imalat ruhsatı hem fiilî üretim faaliyeti
            önemlidir.
          </p>
        </div>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Transit Ticaret ve Nitelikli Hizmet Merkezleri
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          <strong>Transit ticaret</strong>, malın yurt dışından alınıp Türkiye&apos;ye
          sokulmadan yurt dışında satılmasıdır. Bu faaliyetin kazancında %95
          indirim uygulanır; İstanbul Finans Merkezi veya belirlenen sanayi
          bölgelerinde oran %100&apos;e çıkar. Mal Türkiye dışında kalmalı, alıcı ve
          satıcı yabancı olmalı ve kazanç beyanname süresine kadar Türkiye&apos;ye
          getirilmelidir.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          <strong>Nitelikli hizmet merkezi</strong> olmak için en az üç farklı
          ülkedeki ilişkili kuruluşlara hizmet veren ve yıllık cirosunun en az
          %80&apos;ini bu hizmetlerden elde eden bir sermaye şirketi olmak gerekir.
          Finansal danışmanlık, hazine yönetimi, İK, veri analitiği, uyum,
          teknik destek ve Ar-Ge koordinasyonu uygun işlevler arasındadır.
        </p>
        <p className="leading-8 text-gray-700">
          Avrupa, Orta Doğu ve Orta Asya&apos;ya yakın bölgesel merkez kurmak
          isteyen holding yapıları için paketin en ilgili bölümü budur.
        </p>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Yerleşen Kişilere 20 Yıllık Muafiyet
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          1 Ocak 2026 ve sonrasında Türkiye&apos;de vergi mukimi olan ve önceki üç
          takvim yılında Türkiye&apos;de ikametgâhı veya engel teşkil eden vergi
          yükümlülüğü bulunmayan kişilerin yurt dışı kaynaklı gelir ve
          kazançları 20 yıl boyunca muaf olabilir. Türkiye kaynaklı gelir
          vergilendirilmeye devam eder. Muafiyet süresince veraset yoluyla
          intikal eden varlıklarda %1 sabit veraset vergisi uygulanır.
        </p>
        <p className="leading-8 text-gray-700">
          Bir sınırlama: yurt dışında ödenen vergiler Türkiye&apos;de ödenecek gelir
          vergisinden mahsup edilemez. İkamet ve çalışma izni kuralları ayrıca
          geçerlidir. Aynı anda şirket kuracaksanız{" "}
          <Link
            href="/blog/turkiyede-sirket-kurma-maliyeti-2026"
            className="font-semibold text-orange-600 underline"
          >
            şirket kurma maliyeti rehberimize
          </Link>{" "}
          bakabilirsiniz.
        </p>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Diğer Teşviklerle İlişkisi
        </h2>
        <p className="leading-8 text-gray-700">
          Vergi paketi,{" "}
          <Link
            href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026"
            className="font-semibold text-orange-600 underline"
          >
            yatırım teşvik belgesi
          </Link>
          , teknopark avantajları ve sektörel desteklerle birlikte
          değerlendirilir. Bunların birleştirilmesi otomatik değildir ve bazı
          düzenlemeler birlikte kullanılamaz; yapı yatırım başlamadan önce
          planlanmalıdır.
        </p>
      </section>

      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Sık Sorulan Sorular
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
          2026 paketi imalatçılar, bölgesel merkez kuracak gruplar, hizmet
          ihracatçıları ve Türkiye&apos;ye yerleşecek kişiler için ülkeyi daha
          cazip kılıyor. Oranlar, şartlar ve başlangıç tarihleri düzenlemeye
          göre değiştiği için doğru yapı faaliyetinize ve kazancı nerede
          kaydettiğinize bağlıdır.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık, hangi düzenlemelerin
          projenize uyduğunu test etmenize ve şirket ile teşvik yapısını buna
          göre kurmanıza yardımcı olabilir.{" "}
          <Link href="/#contact" className="font-semibold text-orange-600 underline">
            İletişime geçin
          </Link>
          .
        </p>
        <p className="mt-6 text-sm leading-7 text-gray-500">
          Ekim 2026 itibarıyla genel bilgilendirmedir; hukuki veya mali
          tavsiye değildir. Kaynaklar: 7582 sayılı Kanun, 11257 sayılı
          Cumhurbaşkanı Kararı, KPMG, EY ve Köksal Hukuk Bürosu analizleri.
          İşlem yapmadan önce güncel mevzuat metnini teyit edin.
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
