import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kurulan-sirket-sayisi-artti-kapanis-orani-sabit-kaldi"
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
        Bana göre bu haberin en ilginç yanı, manşete çıkan rakam değil,
        manşete çıkmayan rakamdı. TOBB&apos;un açıkladığı veriye göre 2026
        yılının Ocak-Ağustos döneminde Türkiye&apos;de kurulan şirket sayısı
        bir önceki yıla göre yüzde 6,4 artışla 75.814&apos;e yükseldi. Haberin
        devamını okuyunca başka bir satır dikkatimi çekti: aynı dönemde
        kapanan şirket sayısı sadece yüzde 1,1 azalarak 18.284&apos;te
        kalmış.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İki rakam, tek tablo
      </h2>
      <p>
        Kuruluş tarafında artış yüzde 6,4, kapanış tarafında düşüş yüzde 1,1.
        Yani pazara giriş altı kat daha hızlı kolaylaşırken, pazardan çıkış
        neredeyse aynı hızda devam ediyor. Kurulan şirketlerin yüzde 90&apos;ı
        limited şirket, ama bu şirketler toplam sermayenin yalnızca yüzde
        70,1&apos;ini oluşturuyor. Düşük sermaye ile hızlı kuruluş, bana göre
        bir kolaylık değil, ilk yılın nakit sıkışıklığını büyüten bir risk.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Makasın gerçek anlamı
      </h2>
      <p>
        Bu tabloyu danışmanlık sürecinde gördüğüm örneklerle yan yana
        koyduğumda şunu fark ediyorum: e-devlet üzerinden kuruluşun
        kolaylaşması, bir girişimciye rekabet avantajı sağlamıyor; sadece
        rekabetin kendisini büyütüyor. Her ay binlerce yeni oyuncu aynı
        pazara, aynı hızla giriyor. Oysa bir şirketin üçüncü yılını görüp
        görmeyeceğini belirleyen şey, kuruluş hızı değil; ilk yıl nakit akışı
        planı, ortaklık yapısı ve pazarlama bütçesinin gerçekçiliği.
      </p>

      <p>
        Bu yüzden bir girişimciyle ilk oturduğumda sorduğum soru hiçbir zaman
        &quot;şirketi ne kadar hızlı kurdunuz&quot; olmadı. Asıl soru,
        kuruluştan sonraki on iki ayı hangi bütçeyle, hangi müşteri
        varsayımıyla ve hangi nakit tamponuyla geçireceğiniz. TOBB&apos;un
        tablosu bunu bir kez daha gösteriyor: kuruluş sayısı artık haber
        değeri taşımıyor, hayatta kalma oranı taşıyor.
      </p>
    </MakaleLayout>
  );
}
