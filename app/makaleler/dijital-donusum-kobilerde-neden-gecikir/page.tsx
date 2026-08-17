import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "dijital-donusum-kobilerde-neden-gecikir"
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
        Geçen ay görüştüğüm bir KOBİ sahibi, sipariş takibini bir{" "}
        <strong className="text-[#071A2F]">WhatsApp grubundan</strong>,
        stok durumunu da elle tutulan bir defterden yönetiyordu.
        &quot;Sistem kurmayı düşündünüz mü?&quot; diye sorduğumda cevap
        hazırdı: &quot;İşimiz küçük, öyle şeylere gerek yok.&quot;
      </p>
      <p>
        Üç hafta sonra aynı firma, yurt dışından gelen bir siparişi zamanında
        yetiştiremediği için kaybetti. Üretim kapasitesi yeterliydi, işçilik
        de sorun değildi. Sorun şuydu: hangi siparişin hangi aşamada olduğunu,
        hangi malzemenin stokta kalmadığını tam olarak kimse bilmiyordu. Bilgi
        vardı ama dağınıktı — birinin telefonunda, birinin kafasında,
        birinin masasındaki kağıtta.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        &quot;Dijital dönüşüm&quot; kelimesi yanıltıyor
      </h2>
      <p>
        Bu iki kelimeyi duyunca akla hemen büyük bütçeli yazılım projeleri,
        aylar süren entegrasyonlar, danışmanlık raporlarıyla dolu klasörler
        geliyor. KOBİ sahipleri de haklı olarak &quot;bu bize göre değil&quot;
        diyor. Oysa gördüğüm vakaların çoğunda ilk adım bundan çok daha
        küçük: stok, sipariş ve müşteri bilgisini herkesin görebileceği{" "}
        <strong className="text-[#071A2F]">tek bir yerde</strong> tutmak.
        Büyük bir yatırım değil, bir alışkanlık değişikliği.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Fark bir yıl sonra ciroda değil, kaçırılan fırsatlarda görünür
      </h2>
      <p>
        Bu tarz firmalarla çalışırken en çok karşılaştığım yanılgı, dijital
        dönüşümün faydasını yıl sonu bilançosunda arama alışkanlığı. Ama gerçek
        fark orada görünmüyor. Zamanında cevap verilemediği için kaçan bir
        ihracat siparişinde, stok yanlış sayıldığı için iki kez sipariş
        edilen bir hammaddede, hangi müşterinin ne zaman arandığını kimsenin
        hatırlamadığı bir satış sürecinde görünüyor. Bunların hiçbiri tek
        başına dramatik değil — ama toplamda bir firmanın büyüme hızını
        belirliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Nereden başlamalı?
      </h2>
      <p>
        Danışmanlık sürecinde ilk sorduğum soru genelde şu oluyor: &quot;Şu an
        şirketinizde hangi bilgi sadece bir kişinin kafasında ya da bir
        WhatsApp grubunda yaşıyor?&quot; Cevap genelde uzun bir liste
        oluyor — ve o liste, aslında dijital dönüşümün nereden başlaması
        gerektiğini kendisi gösteriyor. Büyük bir sistemle değil, en çok
        kaybı yaratan tek bir süreçle başlamak, çoğu KOBİ için hem daha
        gerçekçi hem de sonucu çok daha hızlı görülen bir yaklaşım.
      </p>
    </MakaleLayout>
  );
}
