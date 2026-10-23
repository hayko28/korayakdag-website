import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tcmb-faiz-indirdi-reel-kesim-guveni-dustu"
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
        Aynı hafta, Türkiye Cumhuriyet Merkez Bankası iki farklı yöne işaret
        eden iki açıklama yaptı. 21 Ekim 2026&apos;da yayımlanan Reel Kesim
        Güven Endeksi bir ay önceye göre 1,4 puan geriledi. Ertesi gün, 22
        Ekim&apos;de toplanan Para Politikası Kurulu politika faizini yüzde
        37&apos;den yüzde 36&apos;ya indirdi. Bir imalatçının finans
        departmanında bu iki haberi art arda okuyan kişi için soru nettir:
        önümüzdeki çeyreğin bütçesi hangi sinyale göre kurulacak?
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Manşet tek, veri iki yönlü
      </h2>
      <p>
        Faiz indirimi manşetlerde &quot;kredi maliyeti düşüyor, rahatlama
        başlıyor&quot; başlığıyla yer aldı. Oysa bir gün önce yayımlanan aynı
        kurumun anketi, imalat sanayindeki işletmelerin kendi geleceğine
        dair güvenini düşük gösteriyordu. İki haberi tek bir yönde okumak,
        birini görmezden gelmek anlamına geliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Alt kalemler ayrışıyor
      </h2>
      <p>
        Anketin alt kalemlerine inildiğinde tablo daha da karışık: kapasite
        kullanım oranı yüzde 74,3&apos;e çıkarak mevcut siparişin sorunsuz
        karşılandığını gösteriyor. Buna karşın önümüzdeki üç aya dair yeni
        sipariş ve üretim beklentisi kalemleri zayıflıyor. Aynı ankette
        sabit sermaye yatırımı, istihdam ve ihracat beklentisi ise
        iyileşiyor. Kısacası bugünkü tablo iyi, yakın vadeki beklenti zayıf,
        orta vadeli beklenti ise olumlu; üçü birbirini götürmüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Tek göstergeye göre karar almanın bedeli
      </h2>
      <p>
        Tek puanlık bir faiz indirimi, kredi maliyetini bütçeyi değiştirecek
        ölçüde hemen düşürmüyor; etkisi birkaç PPK kararına yayılarak
        ortaya çıkıyor. Bir yatırım veya işe alım kararını sadece faiz
        başlığına, bir stok veya üretim kararını sadece güven endeksi
        başlığına göre vermek, elindeki dört göstergeden sadece birine
        bakmak demek. Danışmanlık sürecinde bütçe toplantısına gelen
        şirketlere önerim hep aynı: tek bir PPK kararını değil, kapasite
        kullanımı, sipariş beklentisi ve yatırım eğiliminin aynı yönde
        hizalanıp hizalanmadığını birlikte okumak.
      </p>
    </MakaleLayout>
  );
}
