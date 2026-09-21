import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "arge-merkezinden-vazgecmenin-3-yanlis-gerekcesi"
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
        Danışmanlık görüşmelerinde sık karşılaşılan bir tablo var: mühendislik
        veya Ar-Ge ekibi büyüyüp 15 tam zaman eşdeğer personel eşiğini geçmiş,
        muhasebeci ya da mali müşavir &quot;Ar-Ge Merkezi başvurusu
        yapalım&quot; demiş, ama yönetim bu fikri üç gerekçeyle rafa kaldırmış.
        Üçü de mevzuatla örtüşmüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Birinci yanlış: &quot;Bu sadece teknoparktaki yazılım şirketleri için&quot;
      </h2>
      <p>
        5746 sayılı Araştırma, Geliştirme ve Tasarım Faaliyetlerinin
        Desteklenmesi Hakkında Kanun, Ar-Ge Merkezi&apos;nin şirketin kendi
        tesisinde, kendi organizasyon yapısı içinde ayrı bir birim olarak
        kurulmasına izin veriyor. Teknoloji geliştirme bölgesine taşınma
        şartı yok; imalat, mühendislik, makine ya da otomotiv yan sanayi
        firmaları da bu yapıyı kendi fabrikasında kurabiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İkinci yanlış: &quot;Süreç aylarca sürer, sonucu belirsiz&quot;
      </h2>
      <p>
        Başvuru, Sanayi ve Teknoloji Bakanlığı&apos;nın AGTM Portalı üzerinden
        elektronik ortamda yapılıyor. Bakanlığın ön incelemesi 5 iş günü,
        eksiklik tamamlama süresi en geç 15 iş günü, Değerlendirme ve Denetim
        Komisyonu&apos;nun kararı ise en geç 30 iş günü içinde tamamlanıyor.
        Dosya eksiksiz hazırlandığında süreç genelde iki ayı bulmuyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Üçüncü yanlış: &quot;Bu ölçekte bir firmaya kim böyle bir teşvik versin&quot;
      </h2>
      <p>
        Eşik büyük bir şirket değil, 15 tam zaman eşdeğer Ar-Ge personeli
        (belirli sektörlerde 30). Orta ölçekli birçok imalat ve mühendislik
        firması bu sayının zaten üzerinde çalışıyor, sadece hiç başvuru
        yapmamış oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Masada duran rakam
      </h2>
      <p>
        Karşılığında duran teşvik paketi küçük değil: Ar-Ge/tasarım personeli
        ücretlerinde eğitim durumuna göre yüzde 80&apos;den yüzde 95&apos;e
        kadar gelir vergisi stopajı teşviki, sigorta primi işveren hissesinin
        yarısının Hazine bütçesinden karşılanması ve üzerine bir de Ar-Ge
        indirimi. Bu unsurların büyük kısmı 31.12.2028 tarihine kadar
        mevzuatta yer alıyor.
      </p>

      <p>
        15 kişilik bir ekip zaten varsa, sorulması gereken soru &quot;başvuralım
        mı&quot; değil, &quot;bu teşviki şimdiye kadar neden kullanmadık&quot;
        olmalı. Uygunluk analizinden AGTM başvuru dosyasının hazırlanmasına,
        belge alındıktan sonraki stopaj ve SGK prim desteği uygulamalarının
        doğru işletilmesine kadar bu süreç Koray Akdağ / Sistem Global
        Danışmanlık tarafından uçtan uca yürütülüyor.
      </p>
    </MakaleLayout>
  );
}
