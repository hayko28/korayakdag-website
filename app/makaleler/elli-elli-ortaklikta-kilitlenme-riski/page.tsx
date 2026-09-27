import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "elli-elli-ortaklikta-kilitlenme-riski"
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
        İki ortağın da bir şirkette yüzde 50 hissesi olduğunda, kritik bir
        kararda taraflar anlaşamazsa o kararı kim verir? Uygulamada bu
        sorunun cevabı çoğu zaman &quot;kimse&quot; oluyor. Bu tür eşit
        ortaklıklar, danışmanlık pratiğinde &quot;kilitlenme&quot; (deadlock)
        adı verilen ve sözleşme aşamasında en sık gözden kaçan risklerden
        biriyle karşı karşıya kalıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bir oylamanın hiç bitmediği durum
      </h2>
      <p>
        Bir yazılım girişiminde iki kurucu ortak, şirketi tam olarak yüzde
        50-yüzde 50 pay ile kurmuştu. Yurt dışından gelen bir yatırım teklifi
        masaya geldiğinde ortaklardan biri kabul etmek, diğeri hisse
        sulanmasını istemediği için reddetmek istedi. Yönetim kurulu
        oylaması 1-1 çıktı. Teklif ne kabul edildi ne reddedildi, ortada
        kaldı. Sonraki aylarda şirket yeni bir borçlanma kararında, hatta
        yeni bir çalışan işe alımında da aynı kilitlenmeyi yaşadı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sözleşmede eksik olan tek satır
      </h2>
      <p>
        Kuruluş sözleşmesinde bu ihtimale karşı hiçbir hüküm yoktu: bağımsız
        bir üçüncü oy, hakem mekanizması ya da bir tarafın diğerinin payını
        önceden belirlenmiş bir yöntemle satın alma hakkı gibi hiçbir çıkış
        maddesi bulunmuyordu. Türk Ticaret Kanunu, şirketli ortak
        girişimlerde esas sözleşmenin yanına ayrı bir pay sahipleri
        sözleşmesi eklenmesine izin veriyor; kilitlenme senaryosu tam olarak
        bu belgede çözülmesi gereken bir konu. Ama pratikte taraflar
        ortaklığın kurulduğu iyimser dönemde bu ihtimali hiç konuşmuyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Güven, riski sözleşmeden çıkarmıyor
      </h2>
      <p>
        Eşit ortaklık, çoğu zaman güvenin en yüksek göstergesi sayılır. Ama
        sözleşmede kilitlenme ihtimaline hiç yer vermemek, o güvenin hiç
        test edilmediği anlamına gelir. Bağımsız üçüncü oy hakkı, önceden
        kararlaştırılmış bir hakem mekanizması ya da bir tarafın diğerinin
        payını belirli bir fiyattan devralma opsiyonu gibi çözümlerin hepsi,
        ortaklık kurulmadan önce, taraflar hâlâ iyi niyetliyken yazılması
        gereken maddeler. İhtilaf çıktıktan sonra bu maddeleri eklemeye
        çalışmak neredeyse hiçbir zaman mümkün olmuyor.
      </p>
    </MakaleLayout>
  );
}
