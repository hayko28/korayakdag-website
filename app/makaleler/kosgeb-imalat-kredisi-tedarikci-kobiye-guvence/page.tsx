import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kosgeb-imalat-kredisi-tedarikci-kobiye-guvence"
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
        Bir tedarik zincirinde en kırılgan halka çoğu zaman zincirin en
        büyük firması değil, ona parça, ambalaj ya da yarı mamul satan
        küçük işletmedir. Büyük firmanın üretim hattı yavaşladığında ilk
        kesilen sipariş, genelde en küçük tedarikçininkidir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kredi büyüdü, kapsam genişledi
      </h2>
      <p>
        KOSGEB, 28 Ağustos 2026&apos;da İstihdamı Koruma Destek
        Programı&apos;nın kapsamını genişletti. Program artık yalnızca
        KOBİ&apos;lere değil, imalat sanayindeki büyük işletmelere de
        açık. KOSGEB&apos;in finansman katkısı 10 puandan 12 puana
        çıkarılırken, kredi üst limiti büyük işletmelerde 50 milyon
        TL&apos;den 150 milyon TL&apos;ye yükseltildi. Kredi azami 6 ay
        anapara ödemesiz, 36 ay vadeli. Yeni dönem başvuruları 1
        Eylül-31 Ekim 2026 arasında NACE Kısım C-İmalat kodlu
        işletmelerden alınıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Haberi genelde ıskalayan taraf, sipariş veren değil sipariş alan
      </h2>
      <p>
        Bu duyuru genelde büyük fabrikaların finans ekiplerinin gündemine
        giriyor; küçük tedarikçi çoğu zaman haberi hiç görmüyor. Oysa
        siparişini bağladığı büyük firma, üretim hattını ve istihdamını 6
        ay anapara ödemesiz, 3 yıl vadeyle sabitleyebiliyorsa, o
        firmadan gelen siparişin önümüzdeki yıl aniden kesilme riski de
        azalıyor demektir. Program kapsamında bugüne kadar 685.953
        istihdamın korunmasına katkı sağlanmış olması, bu tür kredilerin
        sadece kredi alan firmada değil, onun etrafındaki tedarik
        ağında da bir istikrar etkisi yarattığının bir işareti.
      </p>

      <p>
        Bir KOBİ&apos;nin sorması gereken soru artık &quot;bu kredi bana
        mı açık&quot; değil: siparişlerinin büyük bölümünü aldığı
        firmalar bu destekten yararlanıyor mu, yararlanmıyorsa neden.
        Tedarikçi olunan büyük firmaların finansman ve istihdam
        planlarını takip etmek, KOBİ&apos;nin kendi 2027 üretim
        planlamasının da bir parçası olmalı.
      </p>
    </MakaleLayout>
  );
}
