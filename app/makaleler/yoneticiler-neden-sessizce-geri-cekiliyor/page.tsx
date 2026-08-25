import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "yoneticiler-neden-sessizce-geri-cekiliyor"
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
        Gallup&apos;ın 2026 Küresel İşyeri Raporu&apos;nda gözden kaçması
        kolay ama önemli bir rakam var: yönetici bağlılığı 2022&apos;de
        %31 iken 2025&apos;te %22&apos;ye düştü. Aynı dönemde çalışan
        bağlılığı neredeyse yerinde saydı. Yani son üç yılda asıl geri
        çekilen taraf, ekipleri değil, o ekipleri yönetmesi beklenen
        kişiler.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamların asıl söylediği şey
      </h2>
      <p>
        En sert düşüş son bir yılda yaşanmış: 2024&apos;te %27 olan
        yönetici bağlılığı, 2025&apos;te %22&apos;ye inmiş. Küresel
        ölçekte çalışan bağlılığı %20&apos;ye kadar gerilerken, Gallup
        bunun başlıca nedenini yönetici katmanındaki bu çöküşe bağlıyor.
        Başka bir deyişle: şirketler çalışan bağlılığını artırmaya
        çalışırken, sorunun kaynağı bir kademe yukarıda duruyor olabilir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlık masasında gördüğüm tablo
      </h2>
      <p>
        Bu veriyi soyut bulmuyorum, çünkü aynı örüntüyü sahada da
        görüyorum: üst yönetim yeni bir hedef koyduğunda, orta kademe
        yönetici artık itiraz etmiyor, sadece iletiyor. Ekibiyle
        arasındaki tampon rolünü bırakmış, mesajı olduğu gibi aktaran bir
        aracıya dönüşmüş oluyor. Bu, bağlılığın değil, tükenmişliğin
        belirtisi — ve çoğu zaman üst yönetim bunu &quot;disiplinli
        liderlik&quot; sanıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Neden özellikle yöneticiler?
      </h2>
      <p>
        Orta kademe yönetici hem üstünden gelen baskıyı karşılamak, hem
        ekibini korumak, hem de kendi işini yetiştirmek zorunda —
        üstelik bu üç rolün hiçbiri için ayrı bir zaman tanınmıyor. Şirket
        büyüdükçe bu kademeye yeni sorumluluk eklemek kolay, ama o
        sorumluluğu taşıyacak zamanı veya yetkiyi vermek genelde ihmal
        ediliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ne yapılabilir
      </h2>
      <p>
        KOBİ sahiplerine önerim şu: yıllık memnuniyet anketini yalnızca
        çalışanlara değil, orta kademe yöneticilere de ayrı bir başlık
        olarak uygulayın ve sonuçları karşılaştırın. Bir şirketin
        çalışan bağlılığını gerçekten yükseltmek istiyorsa, önce o
        çalışanları doğrudan yöneten kişinin ne kadar bağlı olduğuna
        bakması gerekiyor — çünkü bağlılık, tıpkı tükenmişlik gibi,
        yukarıdan aşağıya sızan bir şey.
      </p>
    </MakaleLayout>
  );
}
