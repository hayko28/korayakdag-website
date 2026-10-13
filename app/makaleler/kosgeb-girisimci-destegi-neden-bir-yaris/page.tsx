import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kosgeb-girisimci-destegi-neden-bir-yaris"
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
        Bir girişimci, KOSGEB&apos;in yeniden yapılandırdığı Girişimci Destek
        Programı&apos;na başvururken genelde şunu düşünür: proje iyi
        anlatılırsa, evraklar eksiksiz olursa destek gelir. Oysa programın en
        çok tercih edilen parçası olan İş Geliştirme Desteği&apos;nde işleyiş
        biraz daha farklı çalışıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sıralamanın ödülü
      </h2>
      <p>
        12-31 Ekim arasında alınan 2026 yılı üçüncü dönem başvuruları önce
        sektör bazlı kurullarda puanlanıyor. Ülke genelinde en yüksek puanı
        alan 1.000 proje jüri değerlendirmesine çağrılıyor; oradan da
        yalnızca 500&apos;ü (ilde en fazla 3 proje) destek kararı alabiliyor.
        Kadın ve genç girişimciler için ayrı bir esneklik var: jüriden 50 ve
        üzeri puan alıp genel sıralamaya giremeyenler, iş geliştirme desteği
        yerine kredi finansman maliyetinin yarısını karşılayan faiz/kâr payı
        desteğine yönlendirilebiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamlar ne anlatıyor
      </h2>
      <p>
        Program 2024&apos;ten bu yana 4.476 projeye toplam 6,4 milyar TL
        destek kararı verdi; tek proje için üst sınır 2,25 milyon TL&apos;ye,
        dezavantajlı grup girişimcilerinde ek 250 bin TL ile daha yükseğe
        çıkabiliyor. Ama bu tutarlar başvuran herkese değil, o dönem en
        yüksek puanı alan sınırlı sayıda projeye gidiyor.
      </p>

      <p>
        Danışmanlık sürecinde en sık karşılaşılan hata, başvuruyu bir evrak
        işi gibi hazırlamak. Oysa karşıda gerçek bir sıralama var; aynı dönem
        başvuran yüzlerce projeden önde çıkmayı hedeflemeyen bir başvuru, iyi
        bir fikir olsa da listenin dışında kalabiliyor.
      </p>
    </MakaleLayout>
  );
}
