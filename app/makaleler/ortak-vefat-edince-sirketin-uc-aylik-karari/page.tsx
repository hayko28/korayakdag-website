import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "ortak-vefat-edince-sirketin-uc-aylik-karari"
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
        Bir inşaat malzemeleri firmasının kurucu ortağı 61 yaşında ani
        bir kalp kriziyle vefat etti. Şirketin diğer ortağı, cenazenin
        ardından bir hafta içinde bambaşka bir haberle karşılaştı:
        kurucunun hissesi hiçbir işlem veya onay gerekmeden, kanunun
        halefiyet ilkesi gereği otomatik olarak eşine ve iki çocuğuna
        geçmişti. Üçü de artık hukuken ortaktı; üçü de şirketi daha önce
        hiç yönetmemişti.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kalan ortağın elinde üç yol vardı
      </h2>
      <p>
        Hiçbir şey yapmayıp üç yeni ortağı olduğu gibi kabullenmek. Onlarla
        birlikte yönetmeyi öğrenmek ve genel kurulda dört farklı görüşü
        uzlaştırmak. Ya da Türk Ticaret Kanunu&apos;nun limited şirketlere
        tanıdığı hakla mirasçıyı ortaklığa kabulden kaçınmak.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Üçüncü yolun tek şartı, gerçek değerdi
      </h2>
      <p>
        TTK m.596, şirkete mirasçıyı reddetme hakkını tanırken bunu
        bedelsiz bırakmıyor: red için payın gerçek değeri üzerinden satın
        alınması önerilmek zorunda, ve bu öneri payın iktisabından
        itibaren üç ay içinde yapılmalı. Şirketin elinde güncel bir{" "}
        <Link
          href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
          className="text-orange-600 underline"
        >
          şirket değerleme
        </Link>{" "}
        çalışması olmadığı için üç ay, bir rakam bulmaktan çok o rakamın
        mahkeme önünde savunulabilir olup olmadığını tartışmaya gitti.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Süre dolduğunda karar kendiliğinden verilmiş olur
      </h2>
      <p>
        Üç ay içinde red bildirilmezse mirasçı otomatik olarak ortaklığa
        kabul edilmiş sayılıyor; yani hareketsizlik de bir karardır, sadece
        geri dönüşü daha zor bir karar. Dört ay sonra o şirkette mirasçılar
        hâlâ, kağıt üzerinde, kurucu ortakla aynı oy hakkına sahipti; çünkü
        güncel bir değerleme hiçbir zaman hazır olmadı.
      </p>
    </MakaleLayout>
  );
}
