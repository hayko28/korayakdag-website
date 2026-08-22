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
        Danışmanlık görüşmelerinde son günlerde en çok sorulan konulardan
        biri SGK borç yapılandırması oldu. Haklılar da — 7582 sayılı Kanun
        ile 6183 sayılı Kanun&apos;un tecil-taksitlendirme hükümlerinde
        yapılan değişiklik, işverenler için gerçekten kayda değer bir fırsat
        yaratıyor. Ama fırsatın önemli bir kısmı 31 Ağustos 2026&apos;da
        kapanıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Değişen ne?
      </h2>
      <p>
        Daha önce azami tecil süresi 36 aydı, şimdi 72 aya çıktı. Teminat
        aranmaksızın tecil yapılabilecek borç tutarı da ciddi biçimde
        yükseltildi. Kapsama 2026 Haziran ayı ve öncesine ait sigorta
        primleri, işsizlik sigortası primleri ve kesinleşmiş idari para
        cezaları giriyor. Yani salgın sonrası dönemde biriken, ötelenen ya
        da unutulan borçların büyük kısmı bu düzenlemenin içinde.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Tarih neden bu kadar kritik?
      </h2>
      <p>
        31 Ağustos&apos;a kadar başvuranlar için yıllık tecil faizi %29
        olarak uygulanıyor; bu tarihten sonra oran %39&apos;a çıkıyor. On
        puanlık bu fark, birkaç yüz bin TL&apos;lik bir borç için bile
        binlerce TL&apos;lik ek yüke dönüşebiliyor. Üstelik başvuru
        yapılmadığı sürece SGK&apos;nın icra ve haciz süreçleri normal
        seyrinde devam ediyor — yani beklemenin maliyeti yalnızca faiz farkı
        değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İşverenler için pratik üç adım
      </h2>
      <p>
        <strong>Birincisi:</strong> Muhasebeciyle veya mali müşavirle
        borcun güncel dökümünü çıkarmak — SGK e-Devlet üzerinden borç
        durumu birkaç dakikada görülebiliyor, ertelemenin bir maliyeti yok
        ama bilmemenin var.
      </p>
      <p>
        <strong>İkincisi:</strong> Nakit akışına göre 36 ay mı yoksa 72 ay
        mı daha uygun, buna göre taksit planını seçmek. Uzun vade rahatlık
        sağlıyor ama toplam faiz maliyetini de artırıyor; bunun hesabını
        önceden yapmak gerekiyor.
      </p>
      <p>
        <strong>Üçüncüsü:</strong> Başvuruyu 31 Ağustos&apos;u beklemeden
        yapmak. Son güne bırakılan başvurularda sistem yoğunluğu ve evrak
        eksikliği yüzünden fırsatın kaçırıldığı çok görülüyor.
      </p>

      <p>
        Faiz oranlarının yüksek seyrettiği bir dönemde, devletin kendi
        alacağı için sunduğu bu tür yapılandırma imkanları aslında bir
        işletme için en ucuz finansman kaynaklarından biri. Kullanılmadan
        geçirilecek her hafta, bu maliyet avantajının küçülmesi anlamına
        geliyor.
      </p>
    </MakaleLayout>
  );
}
