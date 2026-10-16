import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "sozlesmede-fiyat-artis-maddesi-olmayinca-enflasyonu-kim-oder"
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
        Bir temizlik hizmeti firması, bir AVM zinciriyle iki yıllık bakım
        sözleşmesi imzaladı. Fiyat, sözleşmenin ilk sayfasında net bir
        rakamla sabitlenmişti; personel sayısı, kullanılan malzeme ve hizmet
        kapsamı da aynı şekilde yazılıydı. Tek eksik, sözleşmenin hiçbir
        yerinde geçmeyen bir cümleydi: fiyat ne zaman, hangi ölçüte göre
        güncellenecek.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        On sekizinci ayda ortaya çıkan fark
      </h2>
      <p>
        Asgari ücret ve girdi maliyetleri sözleşme süresince iki kez arttı.
        Firma, maliyetindeki artışı AVM&apos;ye ilettiğinde karşılaştığı
        cevap kısaydı: sözleşmede böyle bir madde yok, mevcut fiyattan devam
        edilecek ya da sözleşme feshedilecek. On sekiz aylık bir hizmet
        ilişkisi, kârlı başlayıp zararına biten bir döneme dönüştü; sorun
        hizmetin kalitesinde değil, kağıda hiç yazılmamış bir cümledeydi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Eskalasyon klozunda genelde atlanan üç nokta
      </h2>
      <p>
        Birincisi, hangi endeksin esas alınacağı. TÜİK&apos;in tüketici fiyat
        endeksi mi, üretici fiyat endeksi mi, yoksa sektöre özgü bir maliyet
        kalemi mi; sözleşmede isim verilmeden &quot;güncel ekonomik
        koşullara göre&quot; gibi muğlak bir ifade bırakmak, tarafları her
        yıl yeniden pazarlık masasına oturtur. İkincisi, hangi eşikte
        devreye gireceği: yıllık otomatik bir revizyon tarihi mi var, yoksa
        belirli bir yüzdelik artış aşıldığında mı tetikleniyor. Üçüncüsü,
        talep etme yükümlülüğünün kimde olduğu; çoğu sözleşmede bu hak
        taraflardan birine &quot;isterse kullanabilir&quot; şeklinde
        bırakılıyor, ama kriz anında kimse ilk adımı atmak istemiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sabit fiyat, güvence değil risk devri
      </h2>
      <p>
        Uzun soluklu bir sözleşmede sabit fiyat genelde alıcı için güvence,
        satıcı için risk anlamına gelir. Enflasyonun yüksek seyrettiği
        dönemlerde bu fark birkaç ay içinde fark edilir hale gelir. Eskalasyon
        klozu, sözleşmenin en az kuruluş maddesi kadar önemli bir parçası;
        imza öncesinde üzerinde konuşulmazsa, sonradan eklenmesi neredeyse
        her zaman taraflardan birinin aleyhine bir pazarlığa dönüşüyor.
      </p>
    </MakaleLayout>
  );
}
