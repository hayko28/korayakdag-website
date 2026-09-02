import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "satin-almada-ihmal-edilen-entegrasyon-kultur"
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
        Nisan 2026&apos;da tamamlanan bir işlem: İspanyol devi Santander,
        İngiliz bankası TSB&apos;yi 2,9 milyar sterline satın aldı. Anlaşma
        kapandıktan kısa süre sonra TSB&apos;nin yaklaşık 5.000 çalışanına
        yeni bir kural bildirildi — Nisan 2027&apos;den itibaren haftada en
        az üç gün ofiste çalışma zorunluluğu. TSB&apos;de bugüne kadar böyle
        sabit bir gün sayısı hiç dayatılmamıştı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bilanço değil, çalışma şekli mahkemelik oldu
      </h2>
      <p>
        TBU sendikası konuyu İş Mahkemesi&apos;ne taşımaya hazırlanıyor;
        bazı yöneticilerin kuralı resmi yürürlük tarihinden önce fiilen
        uygulamaya başladığını da iddia ediyor. Sendika, sağlık ya da kişisel
        nedenlerle bu düzene uyamayacak çalışanların haklarının yeterince
        korunmadığını savunuyor. Santander tarafı ise ortalama ayda 12 gün
        ofis şartıyla aslında geniş bir esneklik sunduklarını belirtiyor. İki
        taraf da haklı gerekçeler öne sürüyor — ama tartışma artık bir iş
        mahkemesinde.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Entegrasyon planlarının kör noktası
      </h2>
      <p>
        Bir satın alma sürecinde bütçenin büyük kısmı finansal durum
        tespiti, operasyonel entegrasyon ve yasal uyuma ayrılır. Çalışma
        düzeni ve kurum kültürü genelde işlem kapandıktan sonraya, tek
        taraflı bir duyuruya bırakılır. Oysa danışmanlık pratiğinde görülen
        şu: devralınan tarafın çalışanları önce belirsizlikle, sonra
        dayatmayla karşılaşınca güven en hızlı kırılan şey oluyor. Bu güven
        kaybı daha sonra hukuki masraf, itibar zedelenmesi ve — genelde en
        pahalısı — kilit personel kaybı olarak geri dönüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Zor kısım rakamlarda değil
      </h2>
      <p>
        Bilançoyu okumak bir satın almanın nispeten kolay kısmı; onu
        okuyacak analist bulmak zor değil. Zor olan, devraldığınız
        şirketteki insanları okumak ve yeni düzeni onlara nasıl, ne zaman
        ve kimin ağzından anlatacağınıza baştan karar vermek.
      </p>
    </MakaleLayout>
  );
}
