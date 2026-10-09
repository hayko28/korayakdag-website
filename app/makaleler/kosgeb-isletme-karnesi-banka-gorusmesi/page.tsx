import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kosgeb-isletme-karnesi-banka-gorusmesi"
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
        Bir imalatçı KOBİ sahibi, yatırım kredisi için gittiği banka
        görüşmesine kendi hazırladığı sunumla girer: ciro artışı, yeni
        makine planı, ihracat hedefleri. Masanın diğer tarafı genelde
        farklı bir belgeye bakar ve iki taraf çoğu zaman aynı şirketi
        anlatmıyormuş gibi hissedilen bir noktada buluşur.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Resmi kayıtlardan çıkan karne
      </h2>
      <p>
        KOSGEB&apos;in İşletme Değerlendirme Raporu (İDR), tam olarak bu
        boşluğu dolduruyor. Rapor; Gelir İdaresi Başkanlığı, SGK, Ticaret
        Bakanlığı ve Türk Patent ve Marka Kurumu kayıtlarını kullanarak bir
        şirketin satış, istihdam, Ar-Ge/marka, verimlilik, ihracat ve
        finansal yapı başlıklarında sektör ve bölge ortalamasına göre
        nerede durduğunu gösteriyor. KOSGEB bu raporu geçtiğimiz hafta
        2021-2025 dönemi verileriyle güncelledi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        120 TL&apos;lik görmek, 240 TL&apos;lik görülmek
      </h2>
      <p>
        Rapora Findeks üzerinden erişiliyor. İşletme kendi karnesini 120
        TL&apos;ye çıkarabiliyor; bir banka veya yatırımcı, işletmenin
        onayıyla aynı raporu 240 TL&apos;ye talep edebiliyor. Yani karşı
        taraf bu belgeye zaten ulaşabiliyor; fark, şirketin kendi
        zayıflarını önceden görüp görmediğinde.
      </p>

      <p>
        Danışmanlık sürecinde sık görülen durum şu: şirket sahibi kendi
        anlattığı büyüme hikayesiyle masaya oturuyor, karşı taraf idari
        kayıtlardan çıkan hikayeyle karşılaşıyor. İkisi örtüşmediğinde
        kredi veya yatırım görüşmesi, beklenenden çok daha zor bir noktaya
        dönüşüyor. Bu raporu banka masasına oturmadan önce kendiniz görmek,
        hangi başlıkta sürpriz çıkacağını önceden bilmek demek.
      </p>
    </MakaleLayout>
  );
}
