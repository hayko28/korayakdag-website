import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "sosyal-medyada-reklamdir-ibaresi-eksikse-ne-oluyor"
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
        Bir kozmetik markasının anlaştığı içerik üreticisi, ürünü kendi
        rutinine katmış gibi anlattı: &quot;son zamanlarda kullandığım,
        gerçekten bayıldığım bir ürün&quot; dedi, markayla ücretli bir iş
        birliği olduğunu hiçbir yerde belirtmedi. Takipçiler için samimi bir
        tavsiye gibi duran paylaşım, Reklam Kurulu için doğrudan tüketiciyi
        yanıltma riski taşıyan bir reklamdı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        32 hesap neden resen incelemeye alındı
      </h2>
      <p>
        Ticaret Bakanlığı Reklam Kurulu&apos;nun 8 Ekim 2026&apos;da
        gerçekleştirdiği 374&apos;üncü toplantısında, reklam niteliği
        belirtilmeden paylaşım yapan 32 sosyal medya hesabı ayrıca resen
        incelemeye alındı. Kuralın kendisi basit: bir içerik üreticisi bir
        marka ile ücretli, ürün karşılığı ya da başka bir ticari iş birliği
        içindeyse, bunu paylaşımda &quot;reklamdır&quot;, &quot;işbirliği&quot;
        ya da benzer açık bir ibareyle belirtmek zorunda. Paylaşımın
        beğenilme oranı, takipçi sayısı ya da içeriğin ne kadar
        &quot;organik&quot; göründüğü kuralın istisnası değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sorumluluk sadece içerik üreticisinde değil
      </h2>
      <p>
        Çoğu marka bu riski &quot;paylaşımı yapan kişinin sorumluluğu&quot;
        diye görüyor, oysa inceleme markayı da kapsıyor. Bir ürünü tanıtması
        için anlaşma yapılan hesabın ibareyi eklememesi, markanın
        pazarlama bütçesinin kurulun önüne bir dosya olarak gitmesine yetiyor.
        Sözleşmede &quot;yasal ibareleri eklemek içerik üreticisinin
        sorumluluğundadır&quot; yazması da markayı incelemenin dışında
        tutmuyor; kurul, paylaşımın son haline bakıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kampanya onayında eksik kalan tek kalem
      </h2>
      <p>
        Birçok pazarlama ekibi influencer içeriğini görsel kalitesi, metin
        tonu ve yayın saati üzerinden onaylıyor; ibarenin paylaşımda
        görünür şekilde yer alıp almadığı onay listesine hiç girmiyor. Oysa
        bu, kampanya yayına girmeden önce tek bir bakışla kontrol edilebilecek
        kadar basit bir kalem. Son çalışılan iş birliğinde bu kontrol
        gerçekten yapıldı mı?
      </p>
    </MakaleLayout>
  );
}
