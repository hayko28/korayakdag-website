import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "performans-gorusmesinde-gelisime-acik-alan-cumlesi"
)!;

export const metadata: Metadata = {
  title: `${meta.title} | Koray Akdağ`,
  description: meta.excerpt,
  alternates: { canonical: `/makaleler/${meta.slug}` },
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
        Orta ölçekli bir yazılım firmasının İK müdürü, kasım ayında kırktan
        fazla yıl sonu performans görüşmesi yaptı. Görüşmeler bitip notları
        tek tek gözden geçirilince ortaya ilginç bir tablo çıktı: en az
        yirmi sekiz kişiye, neredeyse birebir aynı cümle söylenmişti.
        &quot;Genel olarak çok iyisin, sadece biraz daha proaktif
        olabilirsin.&quot;
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        &quot;Proaktif ol&quot; cümlesinin arkasında genelde boş bir not
        defteri var
      </h2>
      <p>
        Bu cümleyi duyan bir çalışan, toplantıdan çıktıktan sonra ne
        yapacağını bilmiyor. Proaktif olmak sabah dokuzda ofiste olmak mı,
        toplantılarda daha çok söz almak mı, yoksa kimsenin kendisinden
        istemediği bir işi üstlenmek mi anlamına geliyor? Cümle kulağa iyi
        niyetli geliyor, ama hiçbir somut davranışa karşılık gelmiyor.
      </p>
      <p>
        Bir pazarlama ekibinde bu cümle artık şirket içi bir şakaya
        dönüşmüş durumda. &quot;Gelişime açık alan&quot; duyan herkes,
        aslında yöneticisinin o anda söyleyecek somut bir şey bulamadığını
        anlıyor. Şaka tatlı ama altındaki mesaj değil: geri bildirim
        sistemi, yöneticinin hafızasına ve o günkü ruh haline bağlı kalmış.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Akılda kalan geri bildirim, soyut değil somuttur
      </h2>
      <p>
        Aynı şirkette bu yıl farklı giden görüşmeler de vardı. Bir yönetici,
        bir ekip üyesine &quot;proaktif ol&quot; demek yerine 14 Ekim&apos;de
        hangi müşteri sunumunda hangi sorunu kendi başına çözdüğünü hatırlattı,
        sonraki üç ay için tek bir somut hedef verdi. Görüşme beş dakika
        sürdü, ama çalışan toplantıdan çıkarken tam olarak ne yapması
        gerektiğini biliyordu.
      </p>
      <p>
        Kurumsal gelişim süreçlerinde en sık rastlanan sorun bütçe veya
        strateji eksikliği değil, bu kadar sıradan bir ayrıntı: geri
        bildirimin ölçülebilir bir örneğe değil, herkese uyan genel bir
        cümleye dayanması. Soyut cümleler toplantı bitince unutuluyor, somut
        örnekler aylarca akılda kalıyor.
      </p>
    </MakaleLayout>
  );
}
