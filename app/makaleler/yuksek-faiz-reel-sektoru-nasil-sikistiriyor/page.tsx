import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "yuksek-faiz-reel-sektoru-nasil-sikistiriyor"
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
        Bu hafta BDDK verilerine dayanan bir haberi okurken bir rakam
        dikkatimi çekti: 2026&apos;nın ilk yarısında bankaların takipteki
        alacakları geçen yılın aynı dönemine göre %81 artarak 773,3 milyar
        TL&apos;ye ulaşmış. Sektörel kırılım ise asıl konuşmayı hak eden
        kısım.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamlar ne söylüyor?
      </h2>
      <p>
        Tarımda takibe düşen borçlar %242, toptan-perakende ticarette %146,
        metal sektöründe %106, imalat sanayisinde %103, tekstilde %84,
        gıdada %47 arttı. KOBİ&apos;lere ait takipteki krediler ise %116
        artışla 276,3 milyar TL&apos;ye çıkmış. Yani sorun tek bir sektöre
        özgü değil — üretimin neredeyse tamamına yayılmış bir finansman
        baskısından bahsediyoruz.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlık masasında gördüğüm üç hata
      </h2>
      <p>
        <strong>Birincisi:</strong> Üretimden elde edilen kârı yatırıma değil,
        kredi faizine harcamak. Kısa vadede nefes aldırıyor gibi görünüyor
        ama makine yenileme, kapasite artırma gibi kararlar ertelendikçe
        firma iki-üç yıl sonra rakibinin gerisinde kalıyor.
      </p>
      <p>
        <strong>İkincisi:</strong> Tek bankaya ve tek kredi türüne bağımlı
        kalmak. Teminat sıkışınca elde alternatif olmuyor; oysa finansman
        yapısını erkenden çeşitlendiren firmalar bu dönemde çok daha rahat
        hareket edebiliyor.
      </p>
      <p>
        <strong>Üçüncüsü:</strong> KOSGEB, TÜBİTAK ve yatırım teşvik
        sistemindeki faizsiz veya düşük maliyetli finansman araçlarını hiç
        değerlendirmemek. Bu programların büyük kısmı tam da bugün takipteki
        alacaklara giren sektörler — imalat, metal, tekstil, gıda — için
        tasarlanmış durumda.
      </p>

      <p>
        Faiz politikasını bir firma tek başına değiştiremez. Ama borç
        yapısını, finansman kaynaklarını ve yatırım zamanlamasını
        yönetebilir. Bu rakamlar bana bir kez daha gösterdi ki, kriz
        dönemlerinde asıl fark yaratan, panikle değil planla hareket etmek.
      </p>
    </MakaleLayout>
  );
}
