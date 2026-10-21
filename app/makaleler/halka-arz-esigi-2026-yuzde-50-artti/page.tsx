import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "halka-arz-esigi-2026-yuzde-50-artti"
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
        Kurumsallaşma sürecine &quot;üç yıl içinde halka açılırız&quot;
        hedefiyle giren bir aile şirketi düşünün. Finansal tablolarını
        düzene koydu, bağımsız denetime geçti, danışmanlık desteği aldı.
        Hedef, o günkü rakamlara göre tahtaya yazıldı. Sonra yıl başında
        rakamlar değişti.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Eşik tek bir kararla neredeyse iki katına yaklaştı
      </h2>
      <p>
        Sermaye Piyasası Kurulu, 31 Aralık 2025 tarihli bülteniyle halka
        arz başvurusu için istenen asgari aktif büyüklüğü 2,4 milyar
        TL&apos;den 3,6 milyar TL&apos;ye, ciro eşiğini de 1,2 milyar
        TL&apos;den 1,8 milyar TL&apos;ye çıkardı. İki ölçütte de artış
        aynı: yüzde 50. 2026&apos;nın ilk başvurusundan itibaren her
        şirket bu yeni tabloya göre değerlendiriliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Üç yıl önce kurulan plan, bugün aynı çizgide değil
      </h2>
      <p>
        Ortalama büyüme hızıyla ilerleyen orta ölçekli bir sanayi ya da
        perakende şirketi için bu fark soyut kalmıyor. Aynı büyüme
        oranıyla ilerlese bile eşiğe ulaşma süresi kısalmıyor, uzuyor.
        Üç yıl önce &quot;şu tarihte hazır oluruz&quot; diye not edilen
        tarih, bugün geçerliliğini kaybetmiş bir varsayıma dönüşüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ertelemek, zaman kazanmak anlamına gelmiyor
      </h2>
      <p>
        Halka açılmayı &quot;piyasa biraz daha olgunlaşsın&quot; diyerek
        bir sonraki yıla bırakmak kulağa temkinli bir karar gibi geliyor.
        Oysa eşik sabit kalmıyor, Kurul&apos;un yeniden değerleme
        kararlarıyla her yıl yukarı taşınıyor. Hedefi geciktiren bir
        şirket, aslında hedefin kendisinin büyümesine izin veriyor.
        Kurumsallaşma planını bu yılın rakamlarıyla değil, üç yıl
        sonraki olası eşikle karşılaştırmak, bütçeyi gerçekçi kurmanın
        tek yolu.
      </p>
    </MakaleLayout>
  );
}
