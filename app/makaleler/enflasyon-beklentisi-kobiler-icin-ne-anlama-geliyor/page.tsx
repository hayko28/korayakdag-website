import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "enflasyon-beklentisi-kobiler-icin-ne-anlama-geliyor"
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
        TCMB&apos;nin 10-12 Ağustos tarihleri arasında 68 katılımcıyla (52
        finansal sektör, 16 reel sektör) yaptığı Ağustos ayı Piyasa
        Katılımcıları Anketi&apos;ni okurken dikkatimi çeken bir ayrıntı
        oldu: beklentiler tek yönde hareket etmiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Anket ne diyor?
      </h2>
      <p>
        Cari yıl sonu enflasyon beklentisi bir önceki anket dönemine göre
        %29,21&apos;den %29,43&apos;e çıktı. Ama 12 ay sonrası için beklenti
        aynı dönemde %23,95&apos;ten %23,69&apos;a geriledi. 24 ay sonrası
        beklenti ise %17,83&apos;ten %18,03&apos;e hafif yükseldi.
      </p>
      <p>
        Yani piyasa şunu söylüyor: bu yılı kapatmak biraz daha zor olacak,
        ama önümüzdeki 12 ay için umut hâlâ canlı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bu KOBİ&apos;ler için ne anlama geliyor?
      </h2>
      <p>
        Danışmanlık yaptığım firmaların çoğu tek bir sayıya göre karar
        veriyor — genelde de o an medyada en çok konuşulan sayıya. Ama bu
        ayki anket, yıl sonu ile önümüzdeki 12 ay arasında gerçek bir
        ayrışma olduğunu gösteriyor. Fiyatlama, tedarik sözleşmesi ve
        finansman kararlarını tek bir beklentiye göre kurmak, bu tabloda
        risk taşıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Benim önerim
      </h2>
      <p>
        Yıl sonuna kadar nakit akışında bir miktar ek tampon bırakın —
        kısa vadeli beklenti hâlâ yukarı yönlü. Orta vadeli tedarik ve
        finansman anlaşmalarını ise 12 ay sonrası için piyasanın gördüğü
        göreli iyileşmeyi hesaba katarak kurgulayın. İkisini aynı sayıyla
        planlamak, ya bugün gereksiz temkinli ya da yıl sonunda hazırlıksız
        yakalanmak anlamına geliyor.
      </p>

      <p>
        Rakamlar ay ay değişiyor, ama bu ayrışmayı takip etmek — tek bir
        beklenti yerine eğrinin şekline bakmak — karar kalitesini gerçekten
        değiştiriyor.
      </p>
    </MakaleLayout>
  );
}
