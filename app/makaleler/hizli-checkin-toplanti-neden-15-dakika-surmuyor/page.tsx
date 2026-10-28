import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "hizli-checkin-toplanti-neden-15-dakika-surmuyor"
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
        Danışmanlık yaptığım şirketlerin takvimlerinde hep aynı davetle
        karşılaşıyorum: &quot;hızlı check-in, 15 dakika&quot;. İlginç olan şu,
        bu davetin gerçekten 15 dakikada bittiğine neredeyse hiç
        rastlamadım. Saat 14.00&apos;te başlıyor, 14.13&apos;te biri
        &quot;bu arada bir konuyu da buraya ekleyeyim&quot; diyor, saat
        14.47&apos;de herkes hâlâ ekranda.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakam küçük görünüyor, kayıp büyük
      </h2>
      <p>
        Bunun tek bir şirkete özgü bir tuhaflık olmadığını, London School of
        Economics&apos;in bir raporuna bakınca anlıyorum: kurumsal
        toplantıların yüzde 35&apos;i verimsiz geçiyor ve bu tek başına
        ABD&apos;de yılda 259 milyar dolarlık bir kayba denk geliyor. Bana
        göre bu rakamın asıl değeri, &quot;toplantı kötüdür&quot; demek
        değil; süresinin neden sürekli taştığını sormak.
      </p>

      <p>
        Gözlemim şu: &quot;15 dakika&quot; yazan bir davet genelde bir süre
        taahhüdü değil, bir dilek. Gündemde net bir karar noktası yoksa,
        konuşma kendi sınırını kendi buluyor ve bu sınır hemen hemen hiçbir
        zaman 15 dakika olmuyor. Bir müşterimle oturup bir sonraki
        toplantıyı planlarken artık &quot;ne kadar sürsün&quot;den önce
        &quot;bu sürenin sonunda hangi karar alınmış olacak&quot; sorusunu
        soruyorum. Cevap net değilse, davet daveti değil, davetin kendisi
        sorunun bir parçası oluyor.
      </p>
    </MakaleLayout>
  );
}
