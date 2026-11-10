import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "nefes-kredisinde-5-milyon-tl-tamamlama-hakki"
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
        8 Haziran&apos;da açılan bir kapı, 3 Kasım&apos;da tekrar aralandı.
        Ama bu ikinci açılışı gören KOBİ sahiplerinin çoğu, kendisini
        ilgilendiren bir ayrıntıyı atlıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Programın seyri: 45 milyardan 95 milyara
      </h2>
      <p>
        TOBB, Kredi Garanti Fonu ve sekiz bankanın (Denizbank, QNB Bank,
        Ziraat Bankası, Garanti Bankası, Halkbank, Vakıfbank, Yapı ve Kredi
        Bankası, Ziraat Katılım Bankası) ortak yürüttüğü Nefes Kredisi,
        Haziran ayından bu yana 45 milyar TL kullandırdı. 3 Kasım
        itibarıyla devreye giren yeni dilimle bu rakama 50 milyar TL daha
        eklendi. Kredi en fazla 48 ay vadeli, ilk 6 ay anapara ödemesiz;
        24 aya kadar vadede yıllık faiz yüzde 36, daha uzun vadede yüzde
        34. Başvuru, oda veya borsaya üye olan işletmeler için bankalar
        üzerinden yapılıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Haziranda kapıyı kapatan işletme
      </h2>
      <p>
        Danışmanlık masasına benzer bir soru sık geliyor: bir mobilya
        atölyesi sahibi haziranda bu krediden 2 milyon TL kullanmış,
        firma başına üst limitin 5 milyon TL olduğunu o gün öğrenmiş ama
        kalan kısmı &quot;ihtiyacım olursa ayrı bir kredi bulurum&quot;
        diyerek rafa kaldırmış. Kasım&apos;da yeni dilim haberini
        okuduğunda ilk tepkisi, programın tamamen yeni ve ilk
        kullananları kapsamayan bir fırsat olduğunu düşünmek oldu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Gözden kaçan cümle: toplamı tamamlama hakkı
      </h2>
      <p>
        Oysa program koşulu farklı yazılıyor: daha önce bu krediyi
        kullanan işletmeler, toplam tutarı 5 milyon TL&apos;ye
        tamamlayacak şekilde yeni dilimden de başvuru yapabiliyor.
        Haziranda 2 milyon TL kullanan bir işletme için masada hâlâ 3
        milyon TL&apos;lik bir pay var; bunu bilmeyen işletme sahibi, o
        payı bir daha hiç sormuyor.
      </p>
      <p>
        Her yeni dilim haberi aynı ikiliği yaratıyor: bazı işletme
        sahipleri hiç kullanmadıkları bir fırsatı birinci defa
        değerlendiriyor, bazıları ise zaten içeride oldukları bir
        programın tamamlanmamış kısmını, sırf haberi &quot;yeni
        başvuru&quot; başlığıyla okudukları için bir kez daha atlıyor.
      </p>
    </MakaleLayout>
  );
}
