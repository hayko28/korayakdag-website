import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tcmb-2027-enflasyon-tahmini-alti-puan-artti"
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
        Orta ölçekli bir tekstil ihracatçısının finans ekibi, bu hafta
        2027 bütçesini son haline getirmek için toplandı. Masadaki
        rakam netti: TCMB&apos;nin 12 Kasım&apos;da açıkladığı yılın
        son Enflasyon Raporu&apos;na göre 2026 yıl sonu tahmini yüzde
        28&apos;den 29,5&apos;e çıkmıştı. Toplantıda konuşulan,
        fiyatlandırma ve tedarikçi sözleşmelerinde bu 1,5 puanlık
        farkın nasıl karşılanacağıydı. Raporun ikinci sayfasındaki
        çok daha büyük bir rakam ise gündeme hiç gelmedi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl revizyon 2026&apos;da değil, 2027&apos;de
      </h2>
      <p>
        TCMB Başkanı Fatih Karahan&apos;ın sunduğu raporda 2027 yıl
        sonu enflasyon tahmini yüzde 15&apos;ten yüzde 21&apos;e
        yükseldi; altı puanlık bir fark, oranla bakıldığında
        2026&apos;daki artışın dört katına yakın. 2028 tahmini de
        yüzde 9&apos;dan yüzde 13,5&apos;e çıktı. Bu, çoğu şirketin
        şu anda kapattığı 2027 bütçesinin varsaydığı finansman
        maliyeti, tedarikçi fiyat artış kloz&apos;ları ve maaş
        zam planlaması için 2026 rakamından çok daha belirleyici
        bir sinyal. Raporda petrol fiyatı varsayımı da 2026 için
        87,8 dolardan 97,2 dolara, 2027 için 76,4 dolardan 86,7
        dolara revize edildi; enerji maliyeti üzerinden bütçeye
        ikinci bir baskı daha eklenmiş oldu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bütçe toplantısında sorulması gereken soru değişti
      </h2>
      <p>
        Çoğu şirket bütçe sunumunu hâlâ &quot;2026&apos;yı nasıl
        kapatıyoruz&quot; sorusu üzerine kuruyor. Oysa önündeki 2027
        bütçesi, merkez bankasının kendi tahmininde altı puanlık bir
        sapma öngördüğü bir yıla dayanıyor. Fiyat artış maddeleri
        yıllık bazda sabit yüzdeyle kurulmuş sözleşmeler, sabit
        faizle planlanmış yatırım kredileri ve enflasyona göre
        değil geçen yılın zam oranına göre kurulmuş maaş bütçeleri,
        bu altı puanı hesaba katmadan hazırlanıyor olabilir. Soru
        basit: bütçe toplantısında 2026&apos;nın 1,5 puanı mı, yoksa
        2027&apos;nin altı puanı mı masaya geldi?
      </p>
    </MakaleLayout>
  );
}
