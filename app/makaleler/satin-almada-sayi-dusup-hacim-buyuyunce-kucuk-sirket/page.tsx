import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "satin-almada-sayi-dusup-hacim-buyuyunce-kucuk-sirket"
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
        Orta büyüklükte bir üretim şirketinin sahibi, bu yıl şirketini
        satışa çıkarmayı düşündüğünde danışmanından ilk duyduğu söz
        rahatlatıcı değildi: &quot;Piyasa canlı ama bu yıl eskisi kadar
        kolay değil.&quot; EY-Parthenon Türkiye&apos;nin 2026&apos;nın
        ilk sekiz ayına ilişkin derlediği veriler, bu cümlenin neden
        söylendiğini sayısal olarak doğruluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        117 işlem, 9 milyar dolar, ama işlem sayısı düşüyor
      </h2>
      <p>
        Ocak-Ağustos 2026 döneminde Türkiye&apos;de açıklanan değeri
        bulunan 117 birleşme ve satın alma işlemi gerçekleşti; bu
        işlemlerin toplam açıklanan değeri 9 milyar doları aştı. Rakam
        kulağa güçlü gelse de piyasa genelinde işlem sayısı bir önceki
        yılın aynı dönemine kıyasla azaldı. Hacmi yukarı çeken,
        100 milyon doların üzerindeki büyük ölçekli anlaşmaların
        toplam tabloyu domine etmesi oldu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Daha az alıcı, daha seçici bir eleme
      </h2>
      <p>
        Bir satın alma piyasasında işlem sayısı düşüp toplam hacim
        büyüdüğünde, aradaki boşluğu dolduran genelde orta ölçekli
        şirketler oluyor; yani tam da üretim şirketinin sahibinin
        bulunduğu segment. Alıcılar az sayıda, ama büyük ve hazır
        hedefe odaklanırken, finansal tabloları dağınık, operasyonel
        verisi düzensiz tutulan bir orta ölçekli şirket masaya hiç
        oturtulamadan elenebiliyor. Üretim şirketinin sahibi, danışman
        ekibiyle ilk toplantıda şirket değerini değil, son üç yılın
        bağımsız denetimden geçmiş mali verisinin eksik olduğunu
        konuştu; değerleme süreci, rakam üzerine konuşmadan önce bu
        eksiği kapatmakla başladı.
      </p>

      <p>
        Piyasanın seçiciliği aslında bir fırsat da taşıyor. Alıcı
        sayısı azaldıkça, verisini düzenli tutan ve değerleme
        hazırlığını satış kararından önce tamamlayan az sayıdaki
        şirket, kalan büyük alıcıların radarına daha kolay giriyor.
        Soru artık &quot;şirketim satılır mı&quot; değil, &quot;bu
        seçici piyasada hangi az sayıda şirketten biri
        olacağım&quot;.
      </p>
    </MakaleLayout>
  );
}
