import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "eylul-enflasyonu-ovp-hedefi-farki"
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
        Bir perakende zincirinin finans müdürü, 2026 bütçesini yıl başında
        yüzde 16&apos;lık resmi enflasyon hedefine göre hazırlamıştı. Eylül
        ayı verileriyle o varsayımın aslında iki kez değiştiğini fark etti:
        önce Orta Vadeli Program&apos;ın hedefi Eylül başında yüzde 28,4&apos;e
        revize edildi, ardından TÜİK&apos;in 5 Ekim&apos;de açıkladığı
        gerçekleşen rakam yüzde 29,73 çıktı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Düşüş trendi gerçek, ama fark henüz kapanmadı
      </h2>
      <p>
        TÜİK&apos;in açıkladığı verilere göre yıllık enflasyon Eylül&apos;de
        yüzde 29,73&apos;e geriledi; Ağustos&apos;taki yüzde 31,51&apos;den
        belirgin bir iyileşme var, aylık artış ise yüzde 1,84 olarak
        gerçekleşti. Yön doğru. Ama OVP&apos;nin güncellenmiş yüzde 28,4
        hedefiyle arasında hâlâ 1,33 puanlık bir fark duruyor; yılın son
        çeyreğinde bu farkın kapanıp kapanmayacağı, birçok şirketin fiyat ve
        maliyet planlamasını doğrudan etkiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl dikkat çeken ayrıntı üretici-tüketici farkında
      </h2>
      <p>
        Aynı dönemde Yurt İçi Üretici Fiyat Endeksi yıllık yüzde 27,38
        artarken, tüketici fiyatları yüzde 29,73&apos;e çıktı. Aradaki yaklaşık
        2,3 puanlık ayrışma, işletmelerin girdi maliyetinin satış
        fiyatlarından daha yavaş yükseldiği anlamına geliyor; kağıt üzerinde
        marjı genişleten bir boşluk. Ama bu boşluk kalıcı değil. Fiyatlama
        stratejisine zamanında yansıtılmazsa ya hızla kapanıyor ya da
        rakip firma aynı boşluğu kendi lehine dolduruyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bütçe hangi rakama göre kurulu
      </h2>
      <p>
        Yıl sonuna üç ay kala kira artış oranları, tedarik sözleşmeleri ve
        ücret zamları büyük ölçüde bu dönemin enflasyon rakamlarına göre
        şekilleniyor. Ocak ayında kurulan bir bütçe varsayımı, aradan geçen
        dokuz ayda resmi hedefin kendisi bile iki kez değiştiği için çoktan
        güncelliğini yitirmiş olabilir.
      </p>

      <p>
        Bir şirketin 2026 bütçesi hangi rakama göre kurulu: ocak ayındaki
        varsayıma mı, yoksa bu haftanın TÜİK verisine mi?
      </p>
    </MakaleLayout>
  );
}
