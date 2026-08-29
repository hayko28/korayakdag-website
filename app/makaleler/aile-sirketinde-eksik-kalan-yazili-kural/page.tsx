import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "aile-sirketinde-eksik-kalan-yazili-kural"
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
        İki kuşaktır ayakta duran bir aile şirketinde kurucu vefat edince,
        şirkette hiç çalışmamış bir kardeşin avukatı devreye giriyor: pay
        oranı net, ama şirketten &quot;kâr payı mı, hisse mi, hangi
        değerleme üzerinden&quot; sorularının hiçbirinin yazılı bir cevabı
        yok. Danışmanlık masasında bu tablo istisna değil, kural — büyüyen
        her aile şirketinin er ya da geç karşılaştığı bir sınav.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sorun aile sevgisi değil, yazılı kural eksikliği
      </h2>
      <p>
        Kurucu hayattayken her şey sözlü anlaşmayla yürür: kim yönetir, kim
        ne kadar alır, yeni nesil ne zaman şirkete girer. Bu sistem, tek bir
        kişi kararı verdiği sürece işler. Kurucu ortadan kalktığı ya da iş
        göremez hale geldiği an, aynı sözlü anlaşma artık bağlayıcı değil —
        herkesin hafızasında farklı bir versiyonu var. Uzmanların altını
        çizdiği gibi, aile uyumu iyi niyetle korunur ama sadece iyi niyetle
        sürdürülemez.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamlar bunu doğruluyor
      </h2>
      <p>
        PwC&apos;nin küresel aile şirketleri araştırmasına göre şirketlerin
        yalnızca yüzde 33&apos;ü ikinci nesle, yüzde 12&apos;si üçüncü nesle
        sağlıklı bir geçiş yapabiliyor. Standard Chartered&apos;ın 2026
        raporu, dünya genelinde aile şirketlerinin yaklaşık yüzde 70&apos;inin
        elinde hiçbir halefiyet planı olmadığını gösteriyor. Türkiye
        tarafında da tablo farklı değil: ortaklığın giderilmesi davalarının
        sayısı 2014&apos;te yaklaşık 25 bin iken 2021&apos;de 54 binin
        üzerine çıktı. Kapanan köklü aile şirketleri üzerine yapılan bir
        incelemede, kapanma nedenlerinin yüzde 43&apos;ü kardeş kavgası,
        yüzde 19&apos;u miras kavgası olarak kayda geçti.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Aile anayasası ne içermeli
      </h2>
      <p>
        Aile anayasası bir hukuk metni değil, aile ile şirket arasındaki
        sınırları önceden çizen bir mutabakat metni. Doğru kurulmuş bir
        anayasada en az şunlar net olmalı:
      </p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>
          <strong className="text-[#071A2F]">Ortaklık şartı</strong> —
          şirkette çalışmayan bir aile üyesi hangi koşulda pay sahibi
          kalabilir, hangi koşulda hissesi devredilir.
        </li>
        <li>
          <strong className="text-[#071A2F]">Yönetim yetkisi</strong> —
          ikinci ve üçüncü nesil şirkete hangi kademeden, hangi kritere göre
          girer.
        </li>
        <li>
          <strong className="text-[#071A2F]">Değerleme ve çıkış
          mekanizması</strong> — bir ortak ayrılmak istediğinde ya da miras
          süreci başladığında hangi değerleme yöntemi esas alınır.
        </li>
      </ol>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bir aile anayasası, kurucu hâlâ hayattayken ve herkes hâlâ aynı
        masada otururken yazılmalı — devir süreci başladıktan sonra
        yazılmaya çalışılan her kural, taraflardan birinin çıkarına
        yontulmuş gibi görünür. Yazılı kural olmadığında aile şirketini
        koruyan tek şey, herkesin aynı anda iyi niyetli kalması oluyor; bu
        da en kırılgan güvence.
      </p>
    </MakaleLayout>
  );
}
