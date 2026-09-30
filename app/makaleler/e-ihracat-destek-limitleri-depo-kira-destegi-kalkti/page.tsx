import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "e-ihracat-destek-limitleri-depo-kira-destegi-kalkti"
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
        22 Eylül 2026&apos;da Ticaret Bakanlığı, e-ihracat destekleri
        genelgesinde bir güncelleme yaptı. Haberin manşeti nettir: destek
        üst limitleri yüzde 29,28 arttı. Ancak genelgeyi yalnızca bu
        rakamdan ibaret sananlar, aynı metnin içindeki bir başka
        değişikliği kolayca gözden kaçırabiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Limitler yükseldi, hedef ülke listesi genişledi
      </h2>
      <p>
        Şirketler, perakende e-ticaret siteleri, pazaryerleri, B2B
        platformları ve e-ihracat konsorsiyumları için tanımlanan destek
        tavanları bu güncellemeyle birlikte yükseldi. Dijital pazarlama,
        sipariş karşılama hizmeti alımı ve pazaryeri komisyonu gibi
        kalemlerde destek oranı, standart pazarlarda yüzde 50 iken,
        Bakanlığın belirlediği hedef ülkelerde yüzde 70&apos;e kadar
        çıkabiliyor. Hedef ülke listesi de bu yılki güncellemeyle
        26&apos;dan 35&apos;e genişledi; Almanya, Fransa, İtalya ve Rusya
        gibi büyük pazarlar artık bu kapsamda. ABD ise öncelikli pazar
        konumunda tutulmaya devam ediyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Aynı genelgeyle bir destek kalemi tamamen kalktı
      </h2>
      <p>
        Genelgenin daha az konuşulan tarafı şu: yurt dışı depo kira
        desteği yürürlükten kaldırıldı. Bu destekten yalnızca daha önce
        ön onay almış, süreci genelge değişmeden önce başlatmış firmalar
        yararlanmaya devam edebiliyor. Yeni başvuran bir e-ihracatçı için
        bu kalem artık bütçe planında yer almıyor. Yurt dışında depo
        kiralayarak teslimat sürelerini kısaltmayı planlayan bir işletme,
        eski genelgeye göre hazırladığı maliyet tablosunu güncellemezse,
        gerçekte var olmayan bir destek üzerinden bütçe kurmuş oluyor.
      </p>

      <p>
        Devlet destekleri takibinde en sık yapılan hata, bir güncellemeyi
        yalnızca artan rakamlar üzerinden okumak. Oysa aynı metin genelde
        hem genişleyen hem daralan kalemleri birlikte taşıyor. Bir
        e-ihracat stratejisini genelge güncellenmeden önceki varsayımlarla
        sürdürmek, planlanan bütçenin bir kısmının fiilen karşılıksız
        kalması riskini taşıyor.
      </p>
    </MakaleLayout>
  );
}
