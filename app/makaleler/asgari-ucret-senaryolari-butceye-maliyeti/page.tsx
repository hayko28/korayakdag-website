import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "asgari-ucret-senaryolari-butceye-maliyeti"
)!;

export const metadata: Metadata = {
  title: `${meta.title} | Koray Akdağ`,
  description: meta.excerpt,
};

export default function MakalePage() {
  return (
    <MakaleLayout
      title={meta.title}
      tag={meta.tag}
      date={meta.date}
      readTime={meta.readTime}
      slug={meta.slug}
    >
      <p>
        2027 yılı asgari ücreti henüz belirlenmedi; Asgari Ücret Tespit
        Komisyonu&apos;nun Aralık ayı sonunda toplanması bekleniyor. Ama
        birçok şirketin finans ekibi, gelecek yılın bütçesini şimdiden
        kapatmak zorunda. Aradaki üç ay, rakamın belirsiz kaldığı ama
        kararların alınmak zorunda olduğu bir boşluk.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Masadaki üç senaryo
      </h2>
      <p>
        2026&apos;da net asgari ücret 28.075,50 TL. Piyasada konuşulan üç
        senaryoya göre yüzde 20 artışla 33.690 TL&apos;ye, yüzde 25 artışla
        35.094 TL&apos;ye, yüzde 30 artışla 36.498 TL&apos;ye çıkıyor.
        En düşük ve en yüksek senaryo arasındaki fark, çalışan başına
        aylık 2.807 TL. SGK işveren primi ve kıdem tazminatı tavanı da aynı
        oranda değiştiğinden, işverenin gerçek maliyetindeki fark bu
        rakamın üzerinde kalıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Küçük bir yüzde, büyük bir toplam
      </h2>
      <p>
        Tek bir çalışan için 2.807 TL küçük bir fark gibi görünebilir.
        Ama elli asgari ücretli çalışanı olan bir imalat firması için bu
        fark aylık 140 bin TL&apos;ye, yıllık 1,6 milyon TL&apos;nin
        üzerine çıkıyor. Danışmanlık sürecinde sık karşılaşılan bir hata,
        bütçenin tek bir senaryo üzerinden, genelde orta noktadan
        kurulması ve kararın o noktanın dışında çıkması ihtimaline karşı
        hiçbir tampon bırakılmaması.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl soru hangi rakam değil
      </h2>
      <p>
        2027 bütçesini şimdi kapatan bir şirket için doğru soru, üç
        senaryodan hangisinin tutacağını tahmin etmek değil. Seçilen
        senaryo tutmadığında farkı nereden karşılayacağını, fiyatlamaya mı
        yansıtacağını, marjından mı keseceğini, yoksa önceden ayrılmış bir
        rezervden mi finanse edeceğini şimdiden netleştirmek.
      </p>
    </MakaleLayout>
  );
}
