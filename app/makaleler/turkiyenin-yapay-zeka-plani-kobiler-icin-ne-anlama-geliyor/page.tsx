import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "turkiyenin-yapay-zeka-plani-kobiler-icin-ne-anlama-geliyor"
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
        Geçtiğimiz hafta bir müşterim, Resmî Gazete&apos;de yayımlanan
        Türkiye Yapay Zeka Eylem Planı&apos;nı gördükten sonra beni aradı.
        &quot;Devlet milyarlarca dolarlık altyapı planlıyor, bizim gibi
        30 kişilik bir firma için bunun bir anlamı var mı?&quot; diye sordu.
        Dürüst cevabım şuydu: <strong className="text-[#071A2F]">şu an
        için doğrudan değil, ama yakından takip etmeye değer.</strong>
      </p>
      <p>
        Çünkü bu tip büyük ölçekli, ulusal düzeydeki planlar genelde ilk
        etapta veri merkezi, altyapı ve kamu yatırımı gibi büyük başlıklarla
        başlıyor; KOBİ&apos;ye özel destek ve teşvikler ise bir adım sonra,
        altyapı ve strateji netleştikçe geliyor. Ama bu &quot;bir adım
        sonrası&quot; genelde sanıldığından erken geliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bu plan neden KOBİ sahiplerinin gündeminde olmalı
      </h2>
      <p>
        Benzer bir şeyi birkaç yıl önce dijital dönüşüm destekleriyle
        yaşadık: önce büyük ölçekli bir strateji belgesi yayımlandı, ardından
        kamu yatırımı ve altyapı hedefleri konuşuldu, sonra da KOSGEB ve
        TÜBİTAK üzerinden KOBİ&apos;lere yönelik somut destek kalemleri
        devreye girdi. Eylem planında geçen &quot;kamu yatırımlarının
        %2&apos;sinin yapay zekaya ayrılması&quot; ve altyapıya milyarlarca
        dolarlık kaynak seferber edilmesi hedefleri, benzer bir seyrin
        işareti olabilir. Yani plan bugün doğrudan bir KOBİ&apos;ye kredi
        veya hibe getirmiyor; ama önümüzdeki dönemde açılacak destek
        programlarının hangi yöne evrileceğini şimdiden gösteriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ama devleti beklemek doğru strateji değil
      </h2>
      <p>
        Burada dikkat etmemiz gereken bir nokta var: yapay zeka konusunda
        rekabet gücü kazanmak isteyen bir işletme, kamu tarafındaki
        gelişmeleri beklemek zorunda değil. Danışmanlık yaptığım firmaların
        büyük kısmı, henüz hiçbir teşvik veya destek programına ihtiyaç
        duymadan; muhasebe, müşteri iletişimi veya raporlama gibi tekrarlayan
        işlerinde hazır yapay zeka araçlarını kullanarak zaman kazanmaya
        başlayabiliyor. Beklemek yerine küçük, düşük maliyetli adımlarla
        başlamak, ileride bir teşvik programı çıktığında da o programdan
        daha hazırlıklı, daha net bir ihtiyaç tanımıyla faydalanmayı
        kolaylaştırıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Takip etmeye değer, ama şimdiden plan yapmaya gerek yok
      </h2>
      <p>
        Müşterime söylediğim şuydu: bu planı bugünden yatırım kararı almak
        için değil, önümüzdeki 12-18 ay içinde hangi alanlarda yeni destek
        ve teşvik fırsatları çıkabileceğini öngörmek için takip etmesini
        öneririm. Somut bir çağrı veya destek programı açıldığında bunu
        değerlendirmek elbette anlamlı olur; ama bugünden büyük bir bütçe
        ayırmak yerine, şirket içinde küçük ölçekli denemelerle
        ilerlemek çoğu KOBİ için hem daha gerçekçi hem daha az riskli bir
        yaklaşım.
      </p>
    </MakaleLayout>
  );
}
