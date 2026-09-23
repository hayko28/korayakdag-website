import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "yapay-zeka-yatirimi-istihdam-plani-farki"
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
        EY&apos;nin geçtiğimiz ay yayımladığı Girişimcilik Barometresi
        2026&apos;da kolayca gözden kaçan bir rakam çifti var. Biri manşetlik,
        diğeri dipnot gibi duruyor. Oysa yan yana konulduğunda ikisi de aynı
        stratejik sorunun iki farklı yüzü.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İki eğri, tek soru
      </h2>
      <p>
        Rapora göre girişimcilerin yüzde 82&apos;si artık yapay zeka ve
        makine öğrenimini iş süreçlerine entegre etmiş durumda; otomasyona
        yatırım planlayanların oranı ise yüzde 45&apos;e çıkmış. Aynı
        araştırmada tam zamanlı istihdam planlayan girişimci oranı bir
        önceki yıl yüzde 44 iken bu yıl yüzde 34&apos;e gerilemiş. On puanlık
        bu düşüşü yalnızca ekonomik belirsizliğe bağlamak, en kolay ama en
        yüzeysel açıklama.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bütçe kalemi değil, organizasyon tasarımı sorusu
      </h2>
      <p>
        Danışmanlık masasında sık görülen hata da tam burada başlıyor:
        şirketler yapay zeka yatırımını bir teknoloji kararı, insan kaynağı
        planlamasını ise ayrı bir bütçe kalemi gibi ele alıyor. İki karar
        farklı komitelerde, farklı zaman dilimlerinde, çoğu zaman farklı yıl
        planlarında görüşülüyor. Oysa hangi rolün otomasyona, hangi rolün
        insana bırakılacağı sorusu bütçe toplantısından çok önce,
        organizasyon tasarımı aşamasında cevaplanması gereken bir soru.
        Bu soru cevapsız kaldığında ortaya çıkan tablo, planlı bir dönüşüm
        değil, departman departman ilerleyen dağınık bir küçülme oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl mesele yatırımın büyüklüğü değil
      </h2>
      <p>
        Bir şirket için önemli olan yapay zekaya ne kadar yatırım yapıldığı
        değil, o yatırımın hangi insan kararının yerini aldığının yönetim
        kurulunda açıkça konuşulup konuşulmadığı. Bu konuşma yapılmadan
        alınan her otomasyon kararı, istihdam planını ayrı bir belgeymiş
        gibi ele alan şirketleri bir süre sonra aynı yere getiriyor: rakamlar
        tutarlı görünür, ama kimse hangi kararın hangi sonucu doğurduğunu
        net biçimde açıklayamaz.
      </p>
    </MakaleLayout>
  );
}
