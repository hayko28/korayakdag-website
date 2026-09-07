import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "bagimsiz-denetim-esiginde-gozden-kacan-iki-kural"
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
        Bir mali müşavirlik bürosuna bu ay en sık gelen soru şu oldu:
        &quot;eşikler yükseldi, biz artık bağımsız denetime tabi değil
        miyiz?&quot; Cevap sanıldığı kadar basit değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamlar gerçekten yükseldi
      </h2>
      <p>
        17 Mart 2026&apos;da yürürlüğe giren 11066 sayılı Cumhurbaşkanı
        Kararı ile bağımsız denetime tabi olma eşikleri belirgin biçimde
        yükseltildi: aktif toplamı eşiği 300 milyon TL&apos;den 500 milyon
        TL&apos;ye, yıllık net satış hasılatı eşiği 600 milyon TL&apos;den 1
        milyar TL&apos;ye çıktı. Çalışan sayısı eşiği ise aynı kaldı: 150
        kişi. Kural değişmedi — üç ölçütten en az ikisini aşan şirketler
        kapsama giriyor — ama bu ölçütlerin barı yükseldi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ama tek yılın rakamı yetmiyor
      </h2>
      <p>
        Danışmanlık pratiğinde sık görülen hata, geçen yılın bilançosuna
        bakıp anında bir sonuca varmak. Oysa kapsamdan çıkış, tek bir hesap
        döneminin sonucuna göre değil, <strong>art arda iki hesap dönemine</strong>{" "}
        göre belirleniyor. Geçen yıl eşiğin üzerinde olan bir şirket bu yıl
        altına düşse bile, resmi olarak kapsam dışı sayılabilmesi için
        ikinci dönemi de beklemesi gerekiyor. 7 Mayıs 2026&apos;da yayımlanan
        usul güncellemesiyle ayrıca iki dönemde aşılan ölçütlerin aynı olması
        şartı da kaldırıldı — bir yıl aktif toplamı ve çalışan sayısı,
        ertesi yıl aktif toplamı ve ciro eşiği aşılsa dahi kapsama giriş
        gerçekleşmiş sayılabiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Grup şirketlerinde yanıltıcı bir rahatlık
      </h2>
      <p>
        Bir holding yapısındaki grubun bağlı şirketlerinden biri, tek başına
        bakıldığında küçük ve kapsam dışı görünebilir. Ama{" "}
        <Link
          href="/blog/bagimsiz-denetim-esik-degerleri-2026-degisti"
          className="text-orange-600 underline"
        >
          konsolide finansal tablo hazırlayan gruplarda
        </Link>{" "}
        değerlendirme, tek bir şirketin değil grup büyüklüğünün üzerinden
        yapılıyor. &quot;Bizim şirket küçük, eşiği aşmıyoruz&quot; diyerek
        rahatlayan bir bağlı ortaklık, grup düzeyinde yapılan bir
        değerlendirmede aslında kapsamda çıkabiliyor. Eşiklerin yükselmesi
        sevindirici bir haber, ama otomatik bir muafiyet değil — kapsam
        durumunu güncel verilerle ve güncel usulle yeniden hesaplamak,
        yıl sonuna doğru sürpriz bir yükümlülükle karşılaşmamanın tek yolu.
      </p>
    </MakaleLayout>
  );
}
