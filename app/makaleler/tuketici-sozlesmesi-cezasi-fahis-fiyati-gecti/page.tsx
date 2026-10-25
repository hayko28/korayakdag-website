import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tuketici-sozlesmesi-cezasi-fahis-fiyati-gecti"
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
        Ticaret Bakanlığı, 6 Ekim 2026&apos;da 2026 yılının ilk dokuz ayına
        ait piyasa denetim bilançosunu açıkladı: 360.578 firma denetlendi,
        toplam idari para cezası 2,6 milyar TL&apos;ye ulaştı. Haberin en çok
        paylaşılan kısmı fahiş fiyat cezalarıydı: 399,5 milyon TL. Ama
        tablonun tamamına bakıldığında en büyük kalem o değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        En büyük ceza fahiş fiyatta değil, sözleşmede
      </h2>
      <p>
        Bakanlığın verilerine göre tüketici sözleşmelerine ilişkin
        ihlallerden kesilen ceza 735,3 milyon TL&apos;ye ulaştı; fahiş
        fiyattan neredeyse iki kat fazla. Reklam ve haksız ticari
        uygulamalardan kesilen 232,1 milyon TL ile birlikte, denetimin ağırlık
        merkezi fiyat etiketinden sözleşme metnine kaymış durumda. Bir
        işletme fiyatını mevzuata uygun belirlese bile, sözleşme ve satış
        süreci metinleri eksikse aynı denetimden pay alabiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bakanlığın öncelikli baktığı üç nokta
      </h2>
      <p>
        Bakanlığın önceki yıllardan bu yana mesafeli satış denetimlerinde
        öncelik verdiği alanlar değişmedi: stok yokluğu gerekçesiyle yapılan
        haksız sipariş iptalleri, cayma hakkının kullanımına fiilen engel
        olunması (iade sürecinin zorlaştırılması, muhatap bulunamaması) ve
        iade bedelinin veya kargo ücretinin mevzuata aykırı şekilde
        tüketiciden talep edilmesi. Üçü de büyük bir hukuki ihlal gibi
        görünmüyor; çoğu zaman bir müşteri hizmetleri prosedürü ya da
        sözleşme şablonundaki eksik bir madde olarak kalıyor.
      </p>

      <p>
        Asıl risk burada: fiyat etiketi her gün kontrol edilen, görünür bir
        kalem. Sözleşme metni ve iade süreci ise bir şikayet gelene kadar
        kimsenin yeniden okumadığı bir doküman. Bakanlığın bu yılki bilançosu,
        o doküman görünmez kaldığı sürece faturanın görünür kalemlerden daha
        ağır çıkabildiğini gösteriyor.
      </p>
    </MakaleLayout>
  );
}
