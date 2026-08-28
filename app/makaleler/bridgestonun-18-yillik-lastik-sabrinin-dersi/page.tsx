import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "bridgestonun-18-yillik-lastik-sabrinin-dersi"
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
        Bridgestone&apos;un patlamayan &quot;AirFree&quot; lastiği, hava yerine
        esnek termoplastik reçineden destek kolları kullanıyor. Teknolojinin
        üzerinde 18 yıl çalışıldı. Ve 8 Temmuz 2026&apos;da, dünyanın dört bir
        yanındaki otoyollarda değil, Japonya&apos;nın Shiga eyaletindeki
        Higashiomi şehrinde, nüfusunun yüzde 60&apos;ından fazlası yaşlı olan
        küçük bir dağ köyünde trafiğe çıktı. Aracın adı Okueigenji Keiryu Car
        — 4,8 kilometrelik bir güzergahta yolcu taşıyan, hızı saatte 20
        kilometreyi geçmeyen küçük bir otonom araç.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        En riskli değil, en güvenli yerde test etmek
      </h2>
      <p>
        Şaşırtıcı olan, teknolojinin kendisi değil, seçilen ilk sahne.
        Bridgestone büyüklüğünde bir şirket, 18 yıllık yatırımının meyvesini
        büyük bir otoyolda, yüksek hızda, geniş kitleye açık bir lansmanla
        gösterebilirdi. Bunun yerine düşük hız, düşük trafik yoğunluğu ve
        düşük risk taşıyan bir kırsal toplu taşıma hattını seçti. Ürünün
        gerçek dünyada başarısız olma ihtimalinin en az zarar vereceği yeri
        bulmuş oldu.
      </p>
      <p>
        Danışmanlık süreçlerinde sık görülen tablo bunun tam tersi:
        şirketler yeni bir ürünü, yeni bir pazarı ya da yeni bir sistemi
        doğrudan en büyük müşteriye, en kritik operasyona ya da en görünür
        kampanyaya bağlıyor. Aksilik oradan çıkarsa, kaybedilen sadece bir
        deneme değil, itibarın büyük bir kısmı oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        18 yılın asıl karşılığı
      </h2>
      <p>
        On sekiz yıl boyunca bir teknolojiye yatırım yapmak zaten nadir bir
        disiplin. Ama o yatırımı, en gösterişli değil en kontrollü sahnede
        sınamak ayrı bir stratejik olgunluk. Küçük ölçekte doğrulanan bir
        fikir, büyük ölçekte çok daha az sürprizle büyüyor — bu, yalnızca
        lastik teknolojisi için değil, herhangi bir yeni ürün ya da hizmetin
        pazara çıkış sırası için de geçerli bir ders.
      </p>
    </MakaleLayout>
  );
}
