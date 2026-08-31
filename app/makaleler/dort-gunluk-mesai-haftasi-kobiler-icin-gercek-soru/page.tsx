import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "dort-gunluk-mesai-haftasi-kobiler-icin-gercek-soru"
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
        Orta Vadeli Program&apos;da (2026-2028) geçen tek bir cümle son
        günlerde iş dünyasında geniş yankı buldu: &quot;İş-yaşam uyumunun ve
        çalışan verimliliğinin artırılması doğrultusunda çalışma günleri
        ayarlaması için pilot uygulama yapılacaktır.&quot; Başlıklar hızla
        &quot;Türkiye dört günlük mesaiye geçiyor&quot;a dönüştü. Oysa metnin
        kendisi çok daha temkinli: ne kapsam netleşmiş, ne tarih, ne de hangi
        kurumların pilot uygulamaya dahil olacağı. Belli olan tek şey,
        konunun artık resmi bir belgede yer aldığı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Dünyada tablo nasıl?
      </h2>
      <p>
        Polonya, Temmuz 2025&apos;ten bu yana çalışanlara iki seçenek
        sunuyor: haftada 4 gün ve toplam 32 saat, ya da haftada 5 gün ve 35
        saat. İngiltere&apos;deki pilot uygulamalarda çalışan memnuniyeti
        belirgin şekilde arttı, üretkenlikte ise kayda değer bir düşüş
        görülmedi. Ama bu sonuçların büyük kısmı ofis, teknoloji ve
        yaratıcı sektörlerden geliyor. Vardiyalı üretim yapan, müşteriyle
        yüz yüze çalışan ya da sabit mesai saatine bağlı bir işletme için
        koşullar aynı değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Aslında iki farklı model karıştırılıyor
      </h2>
      <p>
        İş Kanunu&apos;nun 63. maddesi haftalık azami çalışma süresini 45
        saat olarak belirliyor, bunu gün sayısına değil toplam saate
        bağlıyor. Yani &quot;4 gün 45 saat&quot; modeli — saatleri dört güne
        sıkıştırmak — teorik olarak bugün bile mevcut mevzuatla
        tartışılabilir bir zemine sahip. &quot;4 gün 32 saat&quot; modeli
        ise tamamen farklı bir şey: ücret kesintisi olmadan gerçek bir
        süre kısaltması. Kamuoyunda ikisi sık sık aynı başlık altında
        anılıyor, ama bir işletme için maliyeti ve uygulanabilirliği
        birbirinden çok uzak.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        KOBİ&apos;ler için asıl soru
      </h2>
      <p>
        Danışmanlık masasında bu konu gündeme geldiğinde ilk soru genelde
        &quot;biz buna hazır mıyız&quot; oluyor. Ama ondan önce cevaplanması
        gereken bir soru var: işletme, mevcut beş günün kaçında gerçekten
        üretken çalışıyor? Çoğu KOBİ bunu hiç ölçmüyor — toplantı süresi,
        bekleme süresi, tekrar eden manuel işler genelde hiçbir zaman
        kayıt altına alınmıyor. Gün sayısını tartışmadan önce zamanın nereye
        gittiğini görmek gerekiyor; aksi halde pilot uygulama genişlese
        bile, hazır olmayan bir işletme için bu sadece maliyetin adının
        değişmesi olur.
      </p>
    </MakaleLayout>
  );
}
