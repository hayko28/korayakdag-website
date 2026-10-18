import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "varlik-barisi-2026-erken-bildirim-farki"
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
        Bir ihracat şirketinin yurt dışı hesabında üç yıldır bekleyen 1,2
        milyon dolar vardı. Gerekçe hep aynıydı: &quot;bir gün lazım olur&quot;.
        Varlık Barışı düzenlemesi yürürlüğe girince şirket ilk kez bu paranın
        Türkiye&apos;ye hangi maliyetle taşınabileceğini masaya yatırdı ve
        asıl sürprizle burada karşılaştı: maliyeti belirleyen tek şey
        paranın miktarı değil, bildirimin hangi takvime denk geldiğiydi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Taahhüt arttıkça vergi oranı düşüyor
      </h2>
      <p>
        7582 sayılı Kanun&apos;la Kurumlar Vergisi Kanunu&apos;na eklenen
        geçici 19. madde, yurt dışındaki para, döviz, altın ve menkul
        kıymetler için kademeli bir vergi tablosu kurdu. Herhangi bir taahhüt
        verilmeden yapılan bildirimde oran yüzde 5. Varlık; vadeli hesapta,
        devlet iç borçlanma senedinde, kira sertifikasında ya da girişim
        sermayesi yatırım fonunda en az bir yıl tutulmayı taahhüt ederse oran
        yüzde 4&apos;e, beş yıl taahhüt edilirse 2026 içinde yapılan
        bildirimde yüzde 0&apos;a kadar iniyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        2026 ile 2027 arasındaki yarım puan
      </h2>
      <p>
        Asıl gözden kaçan detay burada başlıyor. Aynı beş yıllık taahhüt,
        2027&apos;nin ilk yedi ayında yapılan bir bildirimde yüzde 0,5
        ödetiyor; taahhütsüz bildirimde de oran benzer şekilde yarım puan
        artıyor. Yüzde 0 ile yüzde 0,5 arasındaki fark küçük görünse de, bir
        milyon dolarlık bir varlıkta bu sırf takvimden kaynaklanan beş bin
        dolarlık bir maliyete karşılık geliyor; büyük holding bakiyelerinde
        bu rakam hızla katlanıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Af değil, bir yatırım kararı
      </h2>
      <p>
        Çoğu şirket sahibi bu düzenlemeyi &quot;vergi affı&quot; diye
        tanımlayıp bir kenara not ediyor, oysa karar aslında klasik bir
        yatırım kararı. Parayı hangi araca, ne kadar süreyle bağladığın,
        bildirimi hangi tarihte yaptığınla birlikte ne kadar vergi
        ödeyeceğini belirliyor. Bildirim 31 Temmuz 2027&apos;ye kadar her
        zaman yapılabilir, ama 2026 içinde karar verenlerle 2027&apos;yi
        bekleyenler aynı taahhüdü verseler bile aynı faturayı ödemiyor.
      </p>
    </MakaleLayout>
  );
}
