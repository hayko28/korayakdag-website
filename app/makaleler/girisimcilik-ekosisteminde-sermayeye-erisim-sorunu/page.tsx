import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "girisimcilik-ekosisteminde-sermayeye-erisim-sorunu"
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
        EY&apos;nin 18 Ağustos&apos;ta yayımladığı Girişimcilik Barometresi
        2026&apos;nın ikinci sayısını okurken beni asıl durduran rakam,
        beklenen &quot;kriz&quot; tablosu değil, tam tersiydi: girişimcilerin
        genel ekosistem algısı aslında iyileşiyor. Olumsuz değerlendirmeler
        geçen yıl yüzde 51&apos;deyken bu yıl yüzde 25&apos;e gerilemiş,
        olumlu değerlendirmeler yüzde 34&apos;e çıkmış. Yani girişimciler
        geleceğe daha umutlu bakıyor.
      </p>

      <p>
        Ama aynı raporda ikinci bir tablo var, ve bu ikisi yan yana durduğunda
        asıl mesele ortaya çıkıyor: girişimcilerin yüzde 71&apos;i finansmana
        erişimi, yüzde 70&apos;i ekonomik belirsizliği, yüzde 41&apos;i
        yüksek faiz oranlarını hâlâ en büyük engel olarak sıralıyor. İştah
        büyüyor, ama kaynak çeşitliliği aynı kalıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bir rakam her şeyi özetliyor
      </h2>

      <p>
        Rapora göre girişimcilerin işlerini finanse etme yöntemi yüzde
        61&apos;lik oranla hâlâ öz kaynaklar — kendi birikimi, aile desteği,
        ortakların cebi. Banka kredisi yüzde 20&apos;de, devlet teşvik ve
        hibe programları ise sadece yüzde 14&apos;te kalıyor. Danışmanlık
        tarafında baktığımda bu tablo hiç şaşırtıcı değil; çoğu girişimci
        için &quot;dış kaynak&quot; demek hâlâ ya bankaya gitmek ya da hiç
        gitmemek. Aradaki geniş alan — KOSGEB, TÜBİTAK, yatırım teşvik
        sistemi gibi faizsiz veya hibeye dönüşebilen mekanizmalar — büyük
        ölçüde kullanılmıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Neden yüzde 14&apos;te takılıp kalıyoruz?
      </h2>

      <p>
        Bunun nedeni programların yetersizliği değil. Çoğu girişimci için bu
        kanallar ya bilinmiyor ya da başvuru süreci karmaşık görülüyor; bu
        yüzden zaman kaybetmeden bildiği yola, öz kaynağa veya krediye
        yöneliyor. Oysa doğru eşleştirilmiş bir teşvik veya hibe, sermaye
        maliyetini banka kredisine göre ciddi şekilde düşürebiliyor —
        özellikle yüksek faiz ortamında bu fark, bir yatırımın yapılabilir
        olup olmadığını belirleyen kritik bir eşiğe dönüşüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>

      <p>
        Ekosistem algısının iyileşmesi iyi haber, ama tek başına yeterli
        değil. Bir girişimin büyüme hızını asıl belirleyen, o iyimserliğin
        arkasında hangi finansman karmasının durduğu. Öz kaynak ve kredi
        dışındaki üçüncü seçeneği — teşvik ve hibe sistemini — masaya
        koymadan alınan bir büyüme kararı, aslında elindeki seçeneklerin
        yalnızca üçte birini kullanmış oluyor.
      </p>
    </MakaleLayout>
  );
}
