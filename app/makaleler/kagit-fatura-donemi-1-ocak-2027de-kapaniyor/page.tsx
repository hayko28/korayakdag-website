import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kagit-fatura-donemi-1-ocak-2027de-kapaniyor"
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
        Bir manav, bir kuaför, bir oto yedek parça satıcısı. Türkiye&apos;deki
        yüz binlerce küçük işletmenin ortak noktası, hâlâ kağıt fatura ile
        çalışabiliyor olmaları. Basit usul ve işletme hesabı esasına göre
        defter tutan mükellefler, 589 Sıra No&apos;lu Vergi Usul Kanunu Genel
        Tebliği uyarınca vergiler dahil 3.000 TL&apos;ye kadar olan
        satışlarda kağıt fatura düzenleyebiliyor. Bu hakkın ömrü 31 Aralık
        2026&apos;da doluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        1 Ocak 2027&apos;den itibaren değişen şey
      </h2>
      <p>
        Yeni yılın ilk günüyle birlikte tutar sınırı tamamen kalkıyor.
        Satış 50 lira da olsa, 5.000 lira da olsa, her fatura Gelir İdaresi
        Başkanlığı&apos;nın e-Arşiv sistemi üzerinden elektronik olarak
        düzenlenmek zorunda. Bilanço esasına göre defter tutan şirketler için
        bu geçiş zaten çok önce tamamlanmıştı; değişikliğin asıl ağırlığı,
        şimdiye kadar kağıt faturayla işini yürüten esnaf ve küçük işletme
        grubunun üzerine biniyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlıkta sık görülen gecikme
      </h2>
      <p>
        Bu değişikliği ilk duyan esnafın tepkisi genelde aynı cümleyle
        başlıyor: &quot;Şimdi bana bir yazılım mı gerekiyor?&quot; Soru
        yanlış değil, ama çoğu zaman aralık ayının son haftasında soruluyor.
        GİB&apos;in portali üzerinden ücretsiz fatura kesmek mümkün olsa da,
        kasa veya POS entegrasyonunun kurulması, personelin yeni akışa
        alışması ve muhasebe sürecinin buna göre yeniden düzenlenmesi birkaç
        günde bitmiyor. Son haftaya bırakılan bir geçiş, panikle yapılan bir
        geçişe dönüşüyor.
      </p>

      <p>
        İki ay önceden hazırlanan işletmeyle, yılbaşı gecesi haberi gören
        işletme arasındaki fark, genelde ocak ayının ilk haftasında, ilk
        fatura kesme denemesinde ortaya çıkıyor.
      </p>
    </MakaleLayout>
  );
}
