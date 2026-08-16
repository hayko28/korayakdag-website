import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "sessiz-cokus-ekipte-fark-edilmeyen-tukenmislik"
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
        Son dönemde İK literatüründe yeni bir terim dolaşıyor:{" "}
        <strong>quiet cracking</strong>, yani &quot;sessiz çöküş&quot;.
        &quot;Quiet quitting&quot;den (sessiz istifa) farkı şu — çalışan işi
        bırakmıyor, açıkça şikayet de etmiyor. Sadece sessizce, çoğu zaman
        kendisi de fark etmeden motivasyonunu ve performansını kaybediyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlık yaptığım ekiplerde gördüğüm üç belirti
      </h2>
      <p>
        Birincisi, toplantılarda artık hiç itiraz etmeyen, her kararı hemen
        kabul eden biri var. Bu çoğu zaman bağlılık değil, tam tersine
        vazgeçmiş olmanın işareti — tartışmaya değecek kadar önemsemiyor.
      </p>
      <p>
        İkincisi, iş kalitesi aniden düşmüyor; sessizce &quot;iyi&quot;den
        &quot;yeterli&quot;ye kayıyor. Teslim tarihleri tutuyor, iş görünürde
        tamam, bu yüzden kimse fark etmiyor.
      </p>
      <p>
        Üçüncüsü, tatilden dönen biri eskisi gibi enerjik gelmiyor; birkaç gün
        içinde tekrar aynı durgun hâle dönüyor. Dinlenme artık işe yaramıyor,
        çünkü sorun yorgunluk değil, anlam kaybı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Neden fark edilmiyor?
      </h2>
      <p>
        Çünkü bunların hiçbiri performans değerlendirmesinde bir
        &quot;sorun&quot; olarak görünmüyor. Rakamlar hâlâ tutuyor, iş hâlâ
        teslim ediliyor. Ama üç ay sonra o kişi ya işten ayrılıyor ya da
        kalıp, en az enerjiyle en az işi yapan biri hâline geliyor — ki bu
        ikincisi bir işveren için genelde daha maliyetli.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Benim önerim
      </h2>
      <p>
        KOBİ sahiplerine ve yöneticilere hep aynı şeyi söylüyorum: birebir
        görüşmelerde &quot;işin nasıl gidiyor&quot; sorusuyla yetinmeyin.
        Bunun yerine ara sıra &quot;bu iş sana hâlâ anlamlı geliyor mu&quot;
        diye sorun. İlk soru statü raporu ister, ikincisi gerçek bir cevap
        gerektirir — ve sessiz çöküşü yakalayan genelde ikinci sorudur.
      </p>
    </MakaleLayout>
  );
}
