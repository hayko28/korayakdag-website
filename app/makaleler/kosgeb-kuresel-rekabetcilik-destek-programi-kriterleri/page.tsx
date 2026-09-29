import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kosgeb-kuresel-rekabetcilik-destek-programi-kriterleri"
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
        KOSGEB&apos;in duyurduğu her yeni destek programı, ilan edildiği
        hafta onlarca işletme sahibinin gözünü kamaştırıyor. Rakamlar
        genelde büyük, koşullar ise ilk okumada göz ardı ediliyor. Küresel
        Rekabetçilik Destek Programı da bu kalıbın tipik bir örneği.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamlar cazip: 75 milyon TL kredi, 20 puan destek
      </h2>
      <p>
        Program, 7-30 Eylül 2026 tarihleri arasında başvuru alıyor.
        Kapsamdaki işletmelere 30-75 milyon TL arasında kredi
        kullandırılıyor, üzerine KOSGEB&apos;in karşılıksız verdiği 20
        puanlık finansman desteği ekleniyor. Kredi vadesi 36 aya kadar
        uzayabiliyor, proje süresi ise 24 ay olarak tanımlanmış. Destek
        kapsamındaki giderler arasında makine ve teçhizat, yazılım,
        personel eğitimi, danışmanlık, belgelendirme, pazarlama, tasarım
        ve sınai mülkiyet hakları yer alıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ama kapsam, sanıldığı kadar geniş değil
      </h2>
      <p>
        Programın adı &quot;KOBİ&apos;lere destek&quot; gibi dursa da,
        başvuru şartları çok daha dar bir kitleyi hedefliyor. İşletmenin
        yüksek ya da orta-yüksek teknoloji düzeyinde faaliyet gösteriyor
        olması ya da Turcorn 100 Programı kapsamına alınmış olması
        gerekiyor. Ayrıca &quot;hızlı büyüyen&quot; tanımı işletmenin kendi
        kanaatine değil, KOSGEB&apos;in belirlediği ölçütlere göre
        değerlendiriliyor. Bu iki şart bir araya gelince, geleneksel
        üretim yapan ya da yavaş ama istikrarlı büyüyen pek çok KOBİ,
        programın kapsamı dışında kalıyor.
      </p>

      <p>
        Devlet destekleri konusunda işletmelerin en sık düştüğü hata,
        bir programın büyüklüğüne bakıp kendi şirketine uyup uymadığını
        sonradan sorgulamak oluyor. Oysa doğru sıra tam tersi: önce
        kriterlere bakmak, sonra rakamla ilgilenmek. Başvuru penceresi
        kısa olan programlarda bu sırayı tersine çevirmek, zamanında
        hazırlanabilecek bir dosyanın son güne sıkışmasına, hatta hiç
        yetişememesine yol açabiliyor.
      </p>
    </MakaleLayout>
  );
}
