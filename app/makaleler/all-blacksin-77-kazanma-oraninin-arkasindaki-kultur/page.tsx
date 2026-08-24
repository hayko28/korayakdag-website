import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "all-blacksin-77-kazanma-oraninin-arkasindaki-kultur"
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
        Yeni Zelanda ragbi milli takımı All Blacks&apos;in 150 yılı aşkın
        resmi maç geçmişindeki kazanma oranı yüzde 77&apos;nin üzerinde.
        Herhangi bir büyük spor dalında, herhangi bir ülkenin milli
        takımında görülen en yüksek oran bu — dünyanın hiçbir kulüp ya da
        milli takımı bu sürekliliğe yaklaşamıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sır yıldız oyuncularda değil, bir kuralda
      </h2>
      <p>
        Bu oranın arkasında parlak transferlerden çok basit bir alışkanlık
        var: &quot;sweep the sheds&quot; — soyunma odasını, kaptan da olsa
        en genç yedek de olsa, maçtan sonra oyuncular kendileri süpürür.
        Kimse bu işi başkasına bırakmaz, kimse &quot;bu benim seviyemin
        altında bir iş&quot; demez. Fikir açık: takımı gerçekten büyük
        yapan, bireysel yıldızlık değil, herkesin işin en sıradan parçasını
        da sahiplenmesi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Şirketlerde de aynı mantık işliyor
      </h2>
      <p>
        Danışmanlık sürecinde en yüksek performanslı ekiplerin genelde en
        yetenekli bireylerden değil, hiç kimsenin küçük sorumluluğu
        savsaklamadığı bir kültürden çıktığını görüyorum. Sürdürülebilir
        başarı, tek bir parlak çeyrekten değil, sıradan görevlerin hiç
        aksatılmadan tekrarlanmasından geliyor — tıpkı soyunma odasını
        süpürmek gibi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bir şirketin kültürünü ölçmenin en pratik yolu, en tepedeki kişinin
        en sıradan işi kimseye devretmeden yapıp yapmadığına bakmak.
        %77&apos;lik oranın arkasında büyük bir strateji değil, hiç
        bozulmayan küçük bir alışkanlık var.
      </p>
    </MakaleLayout>
  );
}
