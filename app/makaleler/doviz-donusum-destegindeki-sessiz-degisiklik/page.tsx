import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "doviz-donusum-destegindeki-sessiz-degisiklik"
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
        İhracatçı bir firmanın hazine sorumlusu için yıllardır tanıdık bir
        rutin vardı: dövizini bozdurunca bankaya bir taahhüt formu
        imzalanır, belirli bir süre boyunca döviz alınmayacağı beyan
        edilirdi. Bu formu doldurmak neredeyse otomatikleşmişti. Ama bu ay
        aynı form artık tarihe karışıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamlar önemli ama asıl haber başka yerde
      </h2>
      <p>
        Ağustos ayında Türkiye&apos;nin ihracatı yüzde 8,1 artarak 23,5
        milyar dolara çıktı. Aynı ay ithalat yüzde 10,5 büyüyünce dış
        ticaret açığı bir ayda yüzde 22,3 genişledi. Bu tablo tek başına
        bile ihracatçı firmalar için döviz akışını doğru yönetmenin neden
        her zamankinden daha kritik olduğunu gösteriyor. Ama asıl dikkat
        çekmesi gereken gelişme, bu makro tabloda değil; 1 Ağustos&apos;ta
        Resmî Gazete&apos;de sessizce yayımlanan 2026/11 sayılı Tebliğ&apos;de.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Taahhütten pozisyona geçiş
      </h2>
      <p>
        Tebliğ, döviz dönüşüm desteğinin yıllardır dayandığı{" "}
        <strong>&quot;belirli süre döviz almama taahhüdü&quot;</strong>{" "}
        esasını kaldırıp yerine <strong>&quot;döviz pozisyonu&quot;</strong>{" "}
        esasını getiriyor. Kulağa teknik bir muhasebe detayı gibi gelse de
        bu değişiklik firmaların hazine sürecini doğrudan etkiliyor:
        firma artık bir söz vermek yerine, döviz varlık ve yükümlülük
        dengesi üzerinden değerlendiriliyor. Buna karşılık yaptırımlar da
        ağırlaştırıldı: uyumsuzluk tespit edilirse artık yalnızca destek
        iadesi değil, kur farkı, kanuni faiz ve TCMB kaynaklı kredi
        kısıtlaması da devreye giriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Geçiş penceresi sadece iki ay
      </h2>
      <p>
        Yeni sistem fiilen 1 Ekim 2026&apos;da başlıyor; ihracat bedelinin
        yüzde 35&apos;inin satış yükümlülüğü ile yüzde 3&apos;lük geçici
        destek oranı ise 31 Ocak 2027&apos;ye kadar sürdürülüyor. 1
        Ağustos ile 1 Ekim arasındaki iki aylık pencere, firmaların döviz
        pozisyonunu gözden geçirmesi ve bankasıyla teyitleşmesi için
        tanınmış bir hazırlık süresi. Bu süreyi &quot;nasılsa eskisi gibi
        devam eder&quot; diyerek atlayan firmalar, sistemin fiilen
        başladığı günde eski alışkanlıkla hareket edip beklemedikleri bir
        yaptırımla karşılaşabiliyor.
      </p>
    </MakaleLayout>
  );
}
