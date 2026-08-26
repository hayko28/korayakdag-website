import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tubitak-1832-geri-odemeli-hibeye-donusen-destek"
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
        TÜBİTAK&apos;ın Sanayide Yeşil Dönüşüm Çağrısı&apos;nın (1832) yeni
        döneminde bütçe üst sınırları kuruluş ölçeğine göre kademelendi:
        büyük işletmeler için 51,5 milyon TL&apos;ye kadar destek öngörülüyor.
        Ama bu programı gerçekten farklı kılan rakam değil, geri ödeme
        yapısı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Önce kredi, sonra kısmen hibe
      </h2>
      <p>
        Proje bütçesi önce faizsiz, geri ödemeli bir finansman olarak
        kullandırılıyor. Proje tamamlandığında enerji tüketimi, su tüketimi
        ve geri dönüştürülemeyen atık miktarında azalma gibi yeşil başarı
        kriterleri tutturulduğunda, geri ödenmesi gereken tutarın yarısına
        kadarı hibeye dönüşüyor. Yani destek, taahhüt değil sonuç üzerinden
        ödüllendiriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bu yapı neden daha akıllı
      </h2>
      <p>
        Saf hibe programlarında işletmenin asıl motivasyonu bazen projeyi
        başarıyla bitirmek değil, parayı almak oluyor. Burada geri ödeme
        riski baştan var olduğu için, hedeflenen verimlilik kazanımına
        gerçekten ulaşmak işletmenin kendi çıkarına dönüşüyor — devletin
        parası, işletmenin disiplinine bağlanmış oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Enerji verimliliği yatırımı planlayan bir sanayi kuruluşu için asıl
        soru &quot;ne kadar destek alırım&quot; değil, &quot;yeşil başarı
        kriterlerini gerçekten tutturabilir miyim&quot; olmalı — çünkü
        hibeye dönüşen kısım, ancak o soru cevaplanırsa gerçekleşiyor.
      </p>
    </MakaleLayout>
  );
}
