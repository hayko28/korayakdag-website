import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "bigg-yatirim-programi-45-milyon-tl-degerleme"
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
        TÜBİTAK&apos;ın 11 Eylül 2026&apos;da duyurduğu BiGG Yatırım
        Programı&apos;nın 2026 yılı ikinci çağrısı, ilk bakışta iki ayrı
        destek rakamı sunuyor gibi görünüyor. Aşama 1 hızlandırma sürecini
        tamamlayıp Mükemmeliyet Mührü alan girişimlere yüzde 3 hisse
        karşılığında 1.350.000 TL yatırım yapılıyor. En yüksek puanlı üç
        girişim ise GCIP kapsamında yüzde 5 hisse karşılığında 2.250.000
        TL&apos;ye kadar yatırım alabiliyor. Başvurular 30 Eylül 2026&apos;ya
        kadar sürüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İki farklı rakam, tek bir değerleme
      </h2>
      <p>
        Bu iki paketi hisse yüzdesine bölmek yeterli: 1.350.000 TL /
        %3 = 45.000.000 TL. 2.250.000 TL / %5 de aynı sonucu veriyor:
        45.000.000 TL. Programın hangi kolundan geçerse geçsin, TÜBİTAK
        girişimin bugünkü değerini örtük olarak aynı noktaya sabitliyor.
        Bu bir tesadüf değil, programın kendi iç mantığı; ama başvuru
        formunu dolduran çoğu girişimci bu hesabı hiç yapmadan imza
        atıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bu rakam neden önemli
      </h2>
      <p>
        Bir erken aşama girişim için resmi bir kurumdan gelen 45 milyon TL
        değerleme, sadece o anki yatırım için değil, altı ay sonra bir
        melek yatırımcı ya da kurumsal bir alıcıyla oturulacak masa için
        de bir referans noktası oluşturuyor. Şirketin gerçek büyüklüğü,
        cirosu ve pazar konumu bu rakamın altındaysa, ortaklık payı
        gereğinden fazla dağılmış oluyor. Üstündeyse, bir sonraki turda
        yeni yatırımcıyı ikna etmek zorlaşıyor; çünkü kamu kurumunun
        koyduğu değerleme, sonraki görüşmede tersine bir referans olarak
        geri dönüyor.
      </p>

      <p>
        Başvuru formunu göndermeden önce sorulması gereken soru, &quot;bu
        yatırımı alabilir miyim&quot; değil, &quot;45 milyon TL, şirketimin
        bugünkü gerçek değerlemesiyle örtüşüyor mu&quot; olmalı. Hisse
        karşılığı her destek, aynı zamanda bir değerleme kararıdır; bu
        kararı hızlandırma sürecinin son haftasında değil, başvurudan
        önce netleştirmek gerekiyor.
      </p>
    </MakaleLayout>
  );
}
