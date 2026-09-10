import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "yeni-tesvik-belgesinde-100-milyon-1-milyar-esigi"
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
        3 Eylül 2026 tarihli ve 33359 sayılı Resmi Gazete&apos;de, Sanayi
        ve Teknoloji Bakanlığı iki yeni finansman aracını yürürlüğe koydu:
        Öncelikli Finansman Belgesi (OFB) ve Teknik ve Stratejik Öncelik
        Belgesi (TSP). İkisi de yatırım teşvik belgesi sahiplerine
        verilen, bankalara &quot;bu yatırımcı finansmana uygun&quot;
        sinyali gönderen bir ön onay niteliğinde.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Haber duyulunca telefon trafiği başladı
      </h2>
      <p>
        Yeni bir teşvik haberi çıktığında danışmanlık pratiğinde ilk
        tepki genelde aynı olur: küçük ve orta ölçekli işletme sahipleri
        &quot;bize de bir kapı açıldı mı&quot; diye sorar. Bu belgelerde
        de öyle oldu. Ama rakamlara bakınca tablo hızla değişiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Eşikler kimin için tasarlandığını gösteriyor
      </h2>
      <p>
        Öncelikli Finansman Belgesi, imalat sanayine yönelik yatırım
        teşvik belgesi sahiplerine veriliyor ve asgari yatırım tutarı
        Ar-Ge harcamaları dahil 100 milyon TL. Puanlama sistemiyle
        değerlendiriliyor; 50 puan ve üzerindeki başvurular belgeyi
        alabiliyor. Teknik ve Stratejik Öncelik Belgesi&apos;nde eşik
        çok daha yukarı çıkıyor: asgari 1 milyar TL yatırım, üstüne en
        az 50 milyon TL özkaynak veya ödenmiş sermaye şartı. Bu belge
        ayrı bir Teknik Komite tarafından değerlendiriliyor.
      </p>
      <p>
        Yani her iki belge de günlük cirosu birkaç milyon TL olan tipik
        bir KOBİ için değil, büyük ölçekli ve sermaye yoğun yatırım
        planlayan firmalar için kurgulanmış. Belgeyi alan firma için
        avantaj gerçek: banka kredisi başvurusunda ön onaylı bir profil
        sunuyor. Ama nihai kredi kararı yine bankanın kendi
        değerlendirmesine bağlı, belge otomatik kredi anlamına gelmiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl beceri, ölçeği doğru okumak
      </h2>
      <p>
        Teşvik sisteminde en sık yapılan hata, her yeni duyuruyu kendi
        şirketine otomatik olarak uyarlanabilir sanmaktır. Oysa Türkiye
        teşvik mimarisi katmanlı çalışıyor: küçük ve orta ölçekli
        işletmeler için asıl kapı hâlâ KOSGEB&apos;in ve TÜBİTAK&apos;ın
        kendi destek programlarında, orta-büyük ölçekli yatırımlar için
        klasik yatırım teşvik belgesi mekanizmasında, büyük ölçekli
        stratejik yatırımlar için de artık bu yeni OFB ve TSP
        belgelerinde duruyor. Bir işletmenin yapması gereken ilk şey,
        hangi katmanda yer aldığını net biçimde tespit etmek; sonra o
        katmana uygun mekanizmayı takip etmek.
      </p>
    </MakaleLayout>
  );
}
