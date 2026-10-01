import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "arge-muhendisi-maasinin-vergi-kalemi"
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
        Bir imalat firmasında yönetim kurulu toplantısında Ar-Ge maliyeti
        konuşuluyor. Mühendis maaşları büyük bir kalem, çünkü ekip büyüdükçe
        bordro da büyüyor. Çoğu zaman gözden kaçan şey, bu bordronun içinde
        devletin geri verdiği bir kısım olduğu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Tek bir mühendis üzerinden hesap
      </h2>
      <p>
        Brüt 90.000 TL maaşlı bir Ar-Ge mühendisini düşünelim. Çalışan SGK ve
        işsizlik kesintisi sonrası gelir vergisi matrahı 76.500 TL olur. Örnek
        olarak yüzde 20 dilim oranı alındığında aylık gelir vergisi 15.300 TL
        çıkar. Gerçek tutar kümülatif tarifedeki dilime göre değişir.
      </p>
      <p>
        Ar-Ge Merkezi belgesi olan bir şirkette yüksek lisanslı personel için
        bu verginin yüzde 90&apos;ı stopaj teşviki olarak terkin edilir. Yani 15.300
        TL&apos;lik verginin 13.770 TL&apos;si Hazine tarafından karşılanır, işverenin
        beyan ettiği tutar 1.530 TL&apos;ye iner.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ekibe yayıldığında
      </h2>
      <p>
        Aynı eğitim düzeyinde altı mühendis olduğunu varsayalım. Aylık yaklaşık
        82.600 TL, yıllık yaklaşık 991.000 TL tutarında bir stopaj teşviki
        ortaya çıkıyor. Üstüne SGK işveren priminin yarısının Hazine&apos;den
        karşılanması ve Ar-Ge indirimi geliyor. Bu rakamlar tek bir ekip için
        bile bir mühendisin yıllık maliyetini aşabiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Neden hâlâ kullanılmıyor?
      </h2>
      <p>
        Çünkü teşvik otomatik gelmiyor. Ar-Ge Merkezi belgesi olmadan bordroda
        bu terkin yapılamıyor. Belge de ancak başvuru ve Bakanlık onayıyla
        alınıyor. Eşik 15 tam zaman eşdeğer Ar-Ge personeli ve ekip bu sayıya
        ulaşmış bir firmada başvurmamanın maliyeti her ay bordroda görünüyor.
      </p>

      <p>
        Mühendis maaşlarını sabit bir gider olarak kabul eden şirketlerle,
        aynı maaşın bir kısmını geri alan şirketler arasındaki fark çoğu
        zaman tek bir belgeye bağlı.
      </p>
    </MakaleLayout>
  );
}
