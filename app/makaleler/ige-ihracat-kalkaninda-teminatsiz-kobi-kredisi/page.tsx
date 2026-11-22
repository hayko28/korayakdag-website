import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "ige-ihracat-kalkaninda-teminatsiz-kobi-kredisi"
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
        İhracatçılarla yapılan finansman görüşmelerinde sık duyulan bir cümle
        var: banka kredibiliteyi yeterli buluyor, ama teminat yetmiyor.
        İhracatı Geliştirme A.Ş. (İGE), 12 Ekim 2026&apos;da duyurduğu İhracat
        Kalkanı Destek Paketi&apos;yle tam bu boşluğu hedef alıyor. Program,
        öz kaynağından kefalet vererek KOBİ&apos;lere 30 milyon TL&apos;ye,
        KOBİ dışı ihracatçılara ise 50 milyon TL&apos;ye kadar ek kredi
        imkanı açıyor; toplam hedef 12,5 milyar TL&apos;lik ilave finansman.
        Rakamlar cazip görünse de başvuru öncesi gözden kaçan birkaç ayrıntı
        var.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kefalet bireysel firmaya değil, birliğe bağlı
      </h2>
      <p>
        İGE&apos;nin kefalet mekanizması, Ticaret Bakanlığı koordinasyonunda
        TİM, Türk Eximbank, ihracatçı birlikleri ve bankalar üzerinden
        işliyor. Bir firmanın bu kapsamdan yararlanabilmesi, önce ilgili
        ihracatçı birliğine üye olmasına bağlı; üyeliği olmayan bir firma
        başvuru ekranına ulaşamadan süreç orada bitiyor. Danışmanlık
        sürecinde çoğu zaman gözden kaçan ilk adım, kredi başvurusundan önce
        birlik üyeliğinin güncel olup olmadığını kontrol etmek.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        KOBİ sınırını yanlış yazmak başvuruyu baştan bitiriyor
      </h2>
      <p>
        Program, KOBİ ve KOBİ dışı ihracatçılar için farklı üst limitler
        tanımlıyor. Cirosu veya bilançosu KOBİ sınırına yakın bir firmanın
        kendini yanlış kategoride beyan etmesi, başvurunun daha ilk
        aşamada reddedilmesine yol açabiliyor. Bu sınırın her yıl yeniden
        değerleme oranına göre güncellendiği düşünüldüğünde, bir önceki
        yılki kategoriye güvenmek de ayrı bir risk taşıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Takvim açık görünüyor, kaynak sınırlı
      </h2>
      <p>
        Başvuru penceresi 31 Aralık 2027&apos;ye kadar açık görünüyor, ama
        kefalet İGE&apos;nin kendi öz kaynağından ayrılan sınırlı bir
        bütçeden karşılanıyor. Benzer destek programlarında daha önce
        görülen örüntü tekrarlanıyor: dosyasını erken hazırlayan firma
        kefalet kaynağı dolmadan masaya otururken, son çeyreğe bırakan
        firma aynı koşullarla karşılaşmayabiliyor. Teminat yüzünden kredi
        başvurusunu rafa kaldırmış bir ihracatçı için asıl soru artık
        kredibilite değil, bu üç ayrıntıyı ne zaman kontrol ettiği.
      </p>
    </MakaleLayout>
  );
}
