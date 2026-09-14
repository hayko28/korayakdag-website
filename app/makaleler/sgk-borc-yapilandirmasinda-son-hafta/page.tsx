import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "sgk-borc-yapilandirmasinda-son-hafta"
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
        Ağustos ayı boyunca danışmanlık görüşmelerinde en çok sorulan
        konulardan biri SGK borç yapılandırmasıydı. 6183 sayılı
        Kanun&apos;un tecil-taksitlendirme hükümlerinde yapılan değişiklik,
        işverenler için gerçekten kayda değer bir fırsattı. Ancak başvuru
        süresi 31 Ağustos 2026&apos;da sona erdi ve şu an itibarıyla yeni
        başvuru alınmıyor. Bu yazıyı bu aramayla bulanlar için asıl soru
        artık şu: fırsatı kaçırdıysanız elinizde ne kaldı, sırada ne var?
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kapanan fırsat neydi?
      </h2>
      <p>
        Daha önce azami tecil süresi 36 aydı, bu düzenlemeyle 72 aya
        çıkarılmıştı. Teminat aranmaksızın tecil yapılabilecek borç tutarı
        da ciddi biçimde yükseltilmişti. Kapsama 2026 Haziran ayı ve
        öncesine ait sigorta primleri, işsizlik sigortası primleri ve
        kesinleşmiş idari para cezaları giriyordu. 31 Ağustos&apos;a kadar
        başvuranlar için yıllık tecil faizi %29 olarak uygulandı; bu
        tarihten sonra başvuru kapısı tamamen kapandı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Fırsatı kaçırdıysanız durumunuz ne?
      </h2>
      <p>
        Başvuru yapılmadığı için bu düzenlemeden yararlanma hakkı kalmadı.
        Ama bu, SGK borcu için hiçbir seçenek kalmadığı anlamına gelmiyor.
        6183 sayılı Kanun&apos;un genel tecil-taksitlendirme hükümleri
        (bu özel düzenlemeden bağımsız, süresiz olarak var olan
        mekanizma) hâlâ işliyor; sadece koşullar (36 aylık üst sınır,
        güncel gecikme zammı oranı) daha az avantajlı. Başvuru
        yapılmadığı sürece SGK&apos;nın icra ve haciz süreçleri normal
        seyrinde devam ediyor, bu yüzden borcu görmezden gelmenin bir
        maliyeti var.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İşverenler için pratik üç adım
      </h2>
      <p>
        <strong>Birincisi:</strong> Muhasebeciyle veya mali müşavirle
        borcun güncel dökümünü çıkarmak. SGK e-Devlet üzerinden borç
        durumu birkaç dakikada görülebiliyor.
      </p>
      <p>
        <strong>İkincisi:</strong> Genel tecil-taksitlendirme hükümleri
        çerçevesinde başvuru yapıp yapmamayı değerlendirmek. Şartlar
        Ağustos&apos;taki kadar avantajlı olmasa da, hiç başvurmamaktan
        her zaman daha iyi bir konumda bırakıyor.
      </p>
      <p>
        <strong>Üçüncüsü:</strong> Bir sonraki genel yapılandırma dönemine
        hazırlıklı olmak. Türkiye&apos;de bu tür düzenlemeler periyodik
        olarak tekrar gündeme geliyor; borç dökümünü ve nakit akış
        planını güncel tutan işletmeler, yeni bir fırsat çıktığında
        hazırlık kaybetmeden hareket edebiliyor.
      </p>

      <p>
        Devletin kendi alacağı için sunduğu bu tür yapılandırma imkanları,
        çıktıkları dönemde bir işletme için en ucuz finansman
        kaynaklarından biri oluyor. Bir sonraki fırsat çıktığında hazır
        olmak isteyen işverenler için borç durumunun ve stratejinin önden
        netleştirilmesi, kaybedilecek zamanı en aza indiriyor.
      </p>
    </MakaleLayout>
  );
}
