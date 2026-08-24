import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "plak-satislari-neden-hala-artiyor"
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
        Herkes müziği telefonundan dinlerken, plak satışları geçen yıl 1
        milyar doları geçti — RIAA verilerine göre bu, 1983&apos;ten bu yana
        ilk kez yaşanan bir rakam. 46,8 milyon plak satıldı, bu da art arda
        19&apos;uncu büyüme yılı anlamına geliyor. Mantıken bu formatın
        çoktan kaybolmuş olması gerekirdi — sınırsız ve neredeyse ücretsiz
        bir dijital alternatif varken kim otuz santimlik, kırılabilir bir
        disk için para versin?
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Vinyl&apos;i ayakta tutan üç şey
      </h2>
      <p>
        Birincisi, fiziksel sahiplenme hissi — dijital bir çalma listesinde
        olmayan, elle tutulan bir ritüel. Bir plağı zarfından çıkarmak, iğneyi
        yerleştirmek, kapak tasarımını incelemek; dinleme deneyiminin kendisi
        kadar önemli bir parça haline geliyor.
      </p>
      <p>
        İkincisi, &quot;premium&quot; algısı — aynı albüm dijitalde neredeyse
        bedavayken, plak versiyonu daha yüksek bir fiyata hâlâ alıcı
        buluyor. Fiyat burada bir engel değil, ürünün değerini gösteren bir
        işarete dönüşüyor.
      </p>
      <p>
        Üçüncüsü, sadık ve niş bir kitle — büyük kitleye ulaşmaya çalışmak
        yerine, gerçekten önemseyen küçük bir gruba hitap etmek, o grubun
        cebini açmaya fazlasıyla yetiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Aynı formül işletmeler için de geçerli
      </h2>
      <p>
        Herkese en ucuza satmaya çalışan bir ürün, er ya da geç fiyat
        rekabetine mahkum kalıyor. Ama doğru kitleye anlamlı bir deneyim
        sunan, kolay kopyalanamayan bir ürün ya da hizmet, dijital rekabetin
        ve fiyat baskısının ortasında bile büyümeye devam edebiliyor —
        tıpkı otuz yıl önce &quot;ölmüş&quot; sayılan bir formatın bugün
        rekor kırması gibi.
      </p>
    </MakaleLayout>
  );
}
