import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tcmb-kobi-kredi-buyume-sinirinin-gevsetilmesi"
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
        Bir işletme sahibi bankadan kredi talebine aldığı cevabı genelde
        kişisel bir değerlendirme gibi okur: &quot;bizi yeterince güvenilir
        bulmadılar&quot;. Oysa &quot;bu çeyrek için KOBİ kotamız doldu&quot;
        cevabının arkasında çoğu zaman bankanın kendi tercihi değil,
        Merkez Bankası&apos;nın koyduğu teknik bir tavan vardır.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Tavan nasıl işliyor
      </h2>
      <p>
        TCMB, zorunlu karşılık uygulaması üzerinden her bankanın KOBİ kredi
        portföyünü belirli bir dönemde ne kadar büyütebileceğine bir sınır
        koyuyor. Banka bu sınırı aşarsa, aştığı kısım için ek zorunlu
        karşılık ayırmak zorunda kalıyor; yani kredi vermeye devam etmek
        banka için aniden daha maliyetli hale geliyor. Bankanın KOBİ&apos;ye
        &quot;hayır&quot; demesinin çoğu zaman gerçek sebebi bu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Oran neden gidip geliyor
      </h2>
      <p>
        1 Ekim 2026&apos;da bu sınır yüzde 4,5&apos;ten yüzde 5&apos;e
        çıkarıldı. Aynı oran Mayıs ayında tam tersi yönde, yüzde
        5&apos;ten yüzde 4,5&apos;e indirilmişti. Beş ay arayla iki kez yön
        değiştiren bir düzenleme, TCMB&apos;nin kredi genişlemesini gevşek
        bir musluk gibi değil, aralıklarla açıp kapadığı bir vana gibi
        yönettiğini gösteriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Pratikte değişen şey
      </h2>
      <p>
        Bir işletmenin kredi başvurusunun kabul ya da ret olasılığı, bazı
        dönemlerde başvurunun içeriğinden çok hangi ayda yapıldığına bağlı
        kalıyor. Vananın az açık olduğu bir dönemde reddedilen bir dosya,
        vana açıldığında aynı bankada yeniden değerlendirilebiliyor. Bu
        yüzden bir reddi doğrudan şirketin kredibilitesine yormak yerine,
        önce bankanın o dönemki genel KOBİ kotasını sormak daha doğru bir
        ilk adım.
      </p>

      <p>
        Finansmana erişim planlanırken asıl soru artık sadece
        &quot;hangi bankaya gidelim&quot; değil, &quot;bu ay vana ne
        durumda&quot; olmalı.
      </p>
    </MakaleLayout>
  );
}
