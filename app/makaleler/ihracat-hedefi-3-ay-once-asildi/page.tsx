import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "ihracat-hedefi-3-ay-once-asildi"
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
        Ticaret Bakanı Ömer Bolat&apos;ın açıklamasına göre Türkiye&apos;nin
        2026 yılı için Orta Vadeli Program&apos;da belirlenen 282 milyar
        dolarlık mal ihracatı hedefi, yılın bitmesine tam üç ay kala aşıldı.
        Eylül ayı ihracatı yüzde 15,4 artışla 26 milyar dolara çıktı; bu,
        Cumhuriyet tarihinin en yüksek eylül ayı rakamı oldu ve
        yıllıklandırılmış toplam ihracatı 283,7 milyar dolara taşıdı.
        Hedefin 1,7 milyar dolar üzerinde ve üç ay erken kapanması, çoğu
        şirketin kendi bütçe toplantısında da tanıdık bir ikilemi gündeme
        getiriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Erken biten kota, farklı bir sorun demek
      </h2>
      <p>
        Danışmanlık pratiğinde sıkça görülen bir sahne var: bir satış ekibi
        yıllık hedefini ekimde değil ağustosta doldurur. İlk tepki
        kutlamadır, haklı olarak. Ama kalan aylarda rapor tabloları
        incelendiğinde genelde aynı örüntü ortaya çıkar; haftalık görüşme
        sayısı düşer, yeni fırsat girişi yavaşlar, ekip bir sonraki yılın
        bütçesini beklemeye geçer. Hedefe ulaşmış olmanın verdiği rahatlama,
        hedefi aşmanın getirdiği fırsattan daha ağır basar.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Hedefin kendisi sorgulanmalı
      </h2>
      <p>
        Milli ölçekte de sorulması gereken soru aynı: 282 milyar dolarlık
        hedef gerçekten iddialı mıydı, yoksa gerçekleşen talebin biraz
        altında mı kalmıştı? Bolat&apos;ın açıklamasına göre Cumhurbaşkanlığı
        tarafından verilen 410 milyar dolarlık toplam ticaret hedefine (282
        milyar dolar mal, 128 milyar dolar hizmet ihracatı) kalan mesafe
        artık yaklaşık 900 milyon dolara indi. Bu da gösteriyor ki hedefin
        erken aşılması, geri kalan üç ayın değersiz olduğu anlamına
        gelmiyor; tam tersine, asıl mücadele şimdi başlıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kalan üç ay, bir test penceresi
      </h2>
      <p>
        Bir şirket için hedefini vaktinden önce yakalamış olmak, elindeki en
        değerli ama en çabuk kaybedilen kaynağı taşır: zaman. Kalan dönem,
        normal şartlarda riskli görülüp ertelenen bir girişimi (yeni bir
        pazara giriş denemesi, fiyat testi, farklı bir müşteri segmentine
        açılma) güvenli bir bütçe içinde denemek için kullanılabilir. Kotayı
        doldurmuş bir ekip, kaybedecek marjı en az olan ekiptir; bu da onu
        en cesur denemeleri yapabilecek konuma getirir, tabii yönetim bunu
        fark edip yönlendirirse.
      </p>

      <p>
        Aralık ayı bütçe toplantılarında her yıl aynı tablo tekrar ediyor:
        hedefini erken tutturan ekipler kutlanıyor, ama nadiren
        sorgulanıyor. Oysa asıl stratejik karar, hedefin aşıldığı günde
        değil, aşıldıktan sonra geçen üç ayda alınıyor.
      </p>
    </MakaleLayout>
  );
}
