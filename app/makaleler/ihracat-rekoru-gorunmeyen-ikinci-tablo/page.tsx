import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "ihracat-rekoru-gorunmeyen-ikinci-tablo"
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
        Ege&apos;de bir makine parçası ihracatçısının eylül ayı rakamları,
        şirket tarihinin en güçlü ikinci ayı oldu: dolar bazlı ciro bir
        önceki yılın aynı ayına göre yüzde 15&apos;in üzerinde arttı. Aynı
        hafta finans müdürü, üç ay vadeli bir TL kredi için bankadan aldığı
        teklifteki faiz oranını görünce rakamı bir kez daha kontrol ettirdi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Aynı ayda iki farklı gerçek
      </h2>
      <p>
        Ticaret Bakanlığı&apos;nın açıkladığı verilere göre eylül
        ihracatı yıllık bazda yüzde 15,4 artışla 25,98 milyar dolara
        ulaştı; bu, Cumhuriyet tarihinin en yüksek ikinci aylık ihracat
        rakamı. İthalat yüzde 5,9 artışla 31,21 milyar dolarda kaldı, dış
        ticaret açığı ise geçen yılın aynı ayına göre yüzde 24,8 azalarak
        5,2 milyar dolara geriledi. Tabloya sadece bu satırlardan bakan
        biri için manzara net: dış talep güçlü, denge iyileşiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rekor, finansman tablosunu değiştirmiyor
      </h2>
      <p>
        Ama aynı haftalarda ihracatçılarla yapılan görüşmelerde gündem bu
        rakam değildi. Bir ay önce fon piyasasında yaşanan 400 milyar
        TL&apos;yi aşan çıkış ve yedi portföy yönetim şirketinden beşinin
        fonunun hâlâ kapalı olması, şirketlerin &quot;hazır nakit&quot;
        saydığı kısmın bile günlerce kilitlenebildiğini gösterdi. Kısa
        vadeli TL finansmanın maliyeti de aynı dönemde yüksek seyretmeye
        devam ediyor. İhracat performansı iyileşirken finansman koşulları
        aynı hızda gevşemiyor; iki eğri birbirinden bağımsız hareket
        ediyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İki ayrı karne, tek bütçe
      </h2>
      <p>
        Güçlü bir ihracat büyümesi, zayıf bir nakit yönetimini telafi
        etmiyor; tersi de geçerli değil. Yıl sonu bütçesini yalnızca
        dış ticaret verilerindeki olumlu ivmeye bakarak kuran bir şirket,
        kendi finansman maliyetindeki baskıyı gözden kaçırabilir. Masada
        aslında iki ayrı karne var: biri cironun, diğeri paranın ne kadar
        hızlı nakde dönüştüğünün karnesi.
      </p>

      <p>
        Eylül raporunu okuyan bir finans ekibi için asıl soru belki de
        şu: bu ay hangi rakam şirketin gerçek gündemini belirliyor, ciro
        mu, yoksa o ciroyu finanse etmenin maliyeti mi?
      </p>
    </MakaleLayout>
  );
}
