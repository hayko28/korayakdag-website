import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "satin-almada-kodun-fikri-mulkiyeti-kimde"
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
        Bir teknoloji şirketinin değeri, çoğu zaman bilançosunda değil
        koduna sinmiş yıllar içindeki birikimde saklıdır. Tam da bu yüzden
        satın alma görüşmelerinde sorulması gereken ilk soru, &quot;ciro ne
        kadar&quot; değil, &quot;bu kod hukuken kime ait&quot; olmalıdır.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Satış masasında ortaya çıkan boşluk
      </h2>
      <p>
        Orta ölçekli bir yazılım şirketi düşünülsün. Ürünün çekirdek
        algoritmasını, üç yıl önce şirketten ayrılan kurucu ortaklardan
        biri yazmıştır. Alıcı taraf, durum tespiti sürecinde standart bir
        belge ister: bu koda ilişkin fikri mülkiyet devir sözleşmesi.
        Böyle bir belge yoktur. Kurucu ortak ayrılırken hisse devri
        yapılmış, ama yazılım üzerindeki telif hakları şirkete resmi
        olarak hiç devredilmemiştir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kullanmak, sahibi olmak anlamına gelmiyor
      </h2>
      <p>
        Fikir ve Sanat Eserleri Kanunu&apos;na göre bir eser üzerindeki
        mali haklar, aksi yazılı olarak kararlaştırılmadıkça otomatik
        olarak işverene ya da şirkete geçmez; yaratıcısında kalır. Şirket
        yıllarca o kodu kullanmış, üzerine geliştirme yapmış, satmış
        olabilir; bu, hukuki sahipliği değiştirmez. Kurucu ortak ayrılırken
        imzalanan tek belge hisse devir sözleşmesiyse, en değerli varlık
        hâlâ ortada asılı kalmış demektir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bilanço okumak yetmiyor, sözleşme dosyası da okunmalı
      </h2>
      <p>
        Böyle bir işlemde süreç genelde aynı şekilde tıkanır: satış üç ay
        ertelenir, satıcı tarafı yıllar önce ayrılmış ortağı bulup geriye
        dönük bir devir sözleşmesi imzalatmak zorunda kalır, fiyat da bu
        belirsizlik nedeniyle yeniden görüşülür.{" "}
        <Link
          href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
          className="text-orange-600 underline"
        >
          Durum tespiti (due diligence)
        </Link>{" "}
        sürecinin hukuki ayağı, tam olarak bu tür boşlukları işlem
        kapanmadan gün yüzüne çıkarmak için vardır; mali tablo ne kadar
        temiz görünürse görünsün, fikri mülkiyet devri eksikse şirketin
        en değerli varlığı satılabilir bir varlık değildir.
      </p>

      <p>
        Büyüyen her teknoloji ve yazılım şirketinin kendine sorması
        gereken soru basit: bugün ürününüzün temelini oluşturan kodun,
        tasarımın ya da algoritmanın mülkiyeti gerçekten şirkette mi,
        yoksa sadece kimsenin sorgulamadığı bir varsayım mı?
      </p>
    </MakaleLayout>
  );
}
