import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tubitak-sanayi-doktora-programinda-sirketin-payi"
)!;

export const metadata: Metadata = {
  title: `${meta.title} | Koray Akdağ`,
  description: meta.excerpt,
  alternates: { canonical: `/makaleler/${meta.slug}` },
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
        TÜBİTAK&apos;ın 4 Kasım 2026&apos;da açtığı 2244 Sanayi
        Doktora Programı 2026 yılı çağrısı duyulduğunda, Ar-Ge
        ekibini büyütmeyi düşünen bir şirket sahibinin aklına genelde
        aynı varsayım geliyor: devlet bir doktora öğrencisinin
        bursunu baştan sona karşılıyor, şirketin yapması gereken tek
        şey masasını açmak. Çağrı metni bu varsayımı ilk sayfalarda
        düzeltiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bireysel başvuru yok, üç yoldan biri açık olmalı
      </h2>
      <p>
        Program, tek bir şirketin doğrudan TÜBİTAK&apos;a başvurduğu
        bir destek değil. Model, yurt içinde doktora eğitimi veren
        bir üniversite ya da araştırma altyapısı ile bir özel sektör
        kuruluşunun birlikte kurduğu bir projeye dayanıyor. Bir
        şirketin bu ortaklığa taraf olabilmesi için çağrı metninde
        sayılan üç yoldan birinin açık olması gerekiyor: Ar-Ge ya da
        Tasarım Merkezi&apos;ne sahip olmak, bir teknoparkın
        bünyesinde yerleşik sermaye şirketi olmak, ya da daha önce
        TÜBİTAK tarafından desteklenen en az bir projeyi sonuçlandırmış
        olmak. Bu üç şart birbirinin alternatifi; üçünden birini
        sağlayan şirket başvuru masasına oturabiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Devlet payın tamamını değil, en az yüzde 75&apos;ini karşılıyor
      </h2>
      <p>
        Burs süresi, 2026 çağrısıyla 36 aya güncellendi; toplam proje
        süresi burs ve istihdam desteği dönemleri dahil en fazla 72
        ay, gerekçeli bir talep ve TÜBİTAK Yönetim Kurulu kararıyla
        108 aya kadar uzatılabiliyor. Ama çağrı metnindeki 2.3.6
        maddesi net: doktora bursiyerine ödenecek bursun en az yüzde
        25&apos;i, TÜBİTAK değil projeye dahil olan özel sektör
        kuruluşu tarafından karşılanmak zorunda.
      </p>

      <p>
        Program, öğrenci mezun olduktan sonra da devam eden bir
        yükümlülük getiriyor: bursiyer, doktorasını bitirdikten sonra
        projede yer alan şirkette en az 12 ay çalışmak zorunda, bu
        süre tarafların mutabakatıyla 36 aya kadar uzatılabiliyor. Bu
        dönemde şirkete sağlanan istihdam desteği de sınırsız değil;
        personel toplam maliyetinin yüzde 40&apos;ını, brüt asgari
        ücretin iki katını aşmayacak şekilde hesaplanıyor.
      </p>

      <p>
        Çağrı 22 Aralık 2026&apos;da kapanıyor. Programı sadece
        başlığından okuyup &quot;devlet bedava doktora öğrencisi
        veriyor&quot; diye değerlendiren bir şirket, başvuru
        formunda kendi payına düşen bütçe kalemiyle karşılaşınca
        planını yeniden kurmak zorunda kalıyor.
      </p>
    </MakaleLayout>
  );
}
