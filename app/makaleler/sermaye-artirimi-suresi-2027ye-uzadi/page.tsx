import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "sermaye-artirimi-suresi-2027ye-uzadi"
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
        Bir limited şirket ortağı ağustos ayında esas sermayesini 50.000
        TL&apos;ye çıkarmak için evrakları hazırlamış, muhasebeciyle genel
        kurul tarihini konuşmuş, noter randevusunu bile almıştı. Ekim
        ortasında haberi görünce randevuyu iptal etti: son tarih bir yıl
        uzamıştı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Süre neden ve ne kadar uzadı
      </h2>
      <p>
        17 Ekim 2026&apos;da Resmi Gazete&apos;de (sayı 33403) yayımlanan
        tebliğle, Türk Ticaret Kanunu&apos;nun geçici 15. maddesi kapsamındaki
        sermaye uyum yükümlülüğü için tanınan süre 31 Aralık 2026&apos;dan 31
        Aralık 2027&apos;ye uzatıldı. Kapsam değişmedi: esas sermayesi TTK
        madde 332 ve 580&apos;deki tutarların altında kalan anonim ve limited
        şirketler, yani limited şirketlerde 50.000 TL, anonim şirketlerde
        250.000 TL eşiğinin altındakiler. Kayıtlı sermaye sistemini kabul
        etmiş, halka açık olmayan anonim şirketlerde eşik 500.000 TL.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ertelemenin görünmeyen bedeli
      </h2>
      <p>
        Danışmanlık pratiğinde süre uzatmalarının tuhaf bir ortak sonucu var:
        rahatlayan şirket sahiplerinin çoğu dosyayı aynı çekmeceye koyuyor ve
        neredeyse hiçbiri bir yıl boyunca tekrar açmıyor. Oysa genel kurul
        çağrısı, tescil ve ilan adımları hâlâ aynı zamanı alıyor; değişen tek
        şey takvim. Geçen sefer 2026&apos;nın son çeyreğinde ticaret
        sicillerinde ve noterlerde yaşanan yoğunluk, bu kez 2027&apos;nin son
        çeyreğine taşınmış oldu, ortadan kalkmadı.
      </p>

      <p>
        Uzayan süre gerçek bir fırsat: evrak hazırlığını, genel kurul
        gündemini, hatta sermaye artırımını başka bir yapısal adımla (yeni
        ortak girişi, kâr dağıtımı planlaması) birleştirmeyi önceden
        düşünmeye imkân tanıyor. Ama yalnızca şimdiden kullanılırsa. Aksi
        halde 2027&apos;nin son haftasında, aynı kalabalıkla aynı kapıyı
        çalmaktan farkı kalmıyor.
      </p>
    </MakaleLayout>
  );
}
