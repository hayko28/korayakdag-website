import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tubitak-1507-on-kayit-takvimi-kaciran-kobi"
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
        Orta ölçekli bir otomasyon firmasının Ar-Ge sorumlusu,
        TÜBİTAK&apos;ın 9 Kasım&apos;da yayımladığı &quot;1507 ve 1707
        çağrılarının süresi uzatıldı&quot; duyurusunu görünce rahatladı.
        İki haftadır üzerinde çalıştığı proje dosyasına birkaç gün daha
        kazandığını düşündü. Duyurunun ikinci paragrafını okuyana kadar.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Uzayan şey başvuru değil, ön kayıt
      </h2>
      <p>
        Duyuru, 1507 KOBİ Ar-Ge Başlangıç Destek Programı ile 1707
        Siparişe Dayalı Ar-Ge Projeleri Destekleme Programı&apos;nın
        2026 yılı çağrılarını kapsıyor; ama uzatılan, projenin PRODİS
        sistemine yüklendiği asıl başvuru değil, kuruluş bazlı ön kayıt
        onayı. 1507&apos;de ön kayıt 23 Kasım&apos;da kapanıyor, başvuru
        kapanışı ise 25 Kasım. 1707&apos;de ön kayıt 25 Kasım&apos;da,
        başvuru kapanışı 27 Kasım&apos;da bitiyor. Firma sorumlusu,
        dosyayı tamamlayıp sisteme girmek için 25 Kasım&apos;ı
        hedeflemişti; ön kaydın iki gün önce kapandığını fark ettiğinde
        proje bitmiş, kapı kapanmak üzereydi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ön kayıt, başvurudan önceki görünmez eşik
      </h2>
      <p>
        Ön kayıt onayı olmadan hiçbir proje PRODİS üzerinden sisteme
        girilemiyor; kuruluşun kendisi önce TÜBİTAK tarafından
        tanımlanıp onaylanmak zorunda. Bu adım dakikalar süren teknik
        bir formalite gibi görünüyor, ama onay süreci TÜBİTAK
        tarafında birkaç gün alabiliyor. Son güne bırakılan bir ön
        kayıt başvurusu, onaylanamadan asıl başvuru takvimini
        kaçırabiliyor.{" "}
        <Link
          href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026"
          className="text-orange-600 underline"
        >
          1507 programının destek kapsamı ve bütçe üst sınırları
        </Link>{" "}
        bir yana, Ar-Ge&apos;ye ilk kez adım atan küçük bir işletme
        için bu program devletin en erişilebilir, geri ödemesiz
        desteklerinden biri; ama her çağrı döneminde kaybedilen
        genelde proje kalitesi değil, bu iki aşamalı takvimin kendisi
        oluyor.
      </p>
    </MakaleLayout>
  );
}
