import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "asgari-ucret-2027-isveren-maliyet-carpani"
)!;

export const metadata: Metadata = {
  title: `${meta.title} | Koray Akdağ`,
  description: meta.excerpt,
  alternates: { canonical: `/makaleler/${meta.slug}` },
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
        Bir mobilya üreticisinin mali işler müdürü, 2027 bütçe taslağını
        yönetim kuruluna sunmadan önce tek bir satırı tamamlayamadan
        bekliyor: personel gideri. Asgari Ücret Tespit Komisyonu aralık
        ayında toplanacak, ama oran henüz açıklanmadı. Şirket içinde
        tartışma şimdiden başlamış durumda: yüzde 20 mi gelir, yüzde 30
        mu? Oysa bu tartışmanın kendisi, bütçeyi gerçekten etkileyecek
        asıl rakamı gözden kaçırıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Zam oranından önce bilinmesi gereken rakam: çarpan
      </h2>
      <p>
        2026&apos;da brüt asgari ücret 33.030 TL, çalışana ödenen net
        tutar ise 28.075,50 TL. İşverenin fiilen cebinden çıkan toplam
        maliyet, uygulanan SGK prim teşvikine göre değişiyor: imalat
        sektöründe teşvikli hesapla yaklaşık 39.223 TL, teşvik
        uygulanmadığında 40.874 TL&apos;ye kadar çıkıyor. Yani
        çalışanın eline geçen net ücretin üzerine, SGK işveren primi ve
        işsizlik sigortası fonuyla birlikte neredeyse bir maaş daha
        biniyor. 2027 için konuşulan zam oranı ne olursa olsun, bu
        çarpan sabit kalmıyor; komisyon kararı büyüdükçe çarpanın
        üzerine eklenen mutlak tutar da büyüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bütçeye asıl yük tek bir maaş kaleminden gelmiyor
      </h2>
      <p>
        Asgari ücret artışının etkisi, asgari ücretli çalışan sayısıyla
        sınırlı değil. Kıdem tazminatı tavanı, bazı sözleşmelerdeki
        yemek ve yol yardımı limitleri, idari para cezası tutarları ve
        çoğu tedarik sözleşmesindeki fiyat güncelleme maddeleri de
        asgari ücrete endeksli kuruluyor. TCMB&apos;nin kasım ayında
        2027 enflasyon tahminini yüzde 15&apos;ten yüzde 21&apos;e
        çıkarmış olması, komisyonun karar vereceği oranın bu kez
        geçen yılın alışıldık bandının üzerinde çıkma ihtimalini
        güçlendiriyor. Bütçe toplantısında sorulması gereken soru, o
        yüzden &quot;zam kaç olacak&quot; değil, &quot;şirket içinde
        asgari ücrete endeksli kaç kalem var ve bu kalemler toplamda
        hangi tutara karşılık geliyor.&quot;
      </p>
    </MakaleLayout>
  );
}
