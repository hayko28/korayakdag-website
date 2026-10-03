import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "pazara-giris-projesi-hazirlama-destegi-983843-tl"
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
        Yeni ihracata başlayan bir mobilya üreticisinin önüne geçen hafta
        bir teşvik tablosu geldi: proje başına 983.843 TL&apos;ye kadar hibe.
        Ticaret Bakanlığı&apos;nın 26 Eylül 2026&apos;da güncellediği Pazara
        Giriş Projesi Hazırlama Desteği, ilk bakışta sadece büyük bir rakam
        olarak görünüyor. Ama rakamın arkasındaki üç ayrıntı, çoğu başvuruyu
        ilk okumada atlanıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Tavan, tek seferlik değil
      </h2>
      <p>
        Destek, danışmanlık ve rapor giderlerinin yüzde 50&apos;sini, proje
        başına 983.843 TL&apos;ye kadar karşılıyor. Ancak bu, bir şirketin
        alabileceği toplam tavan değil. Bir işletme en fazla iki ayrı pazara
        giriş projesinden yararlanabiliyor, bu da toplam desteği
        1.967.686 TL&apos;ye kadar çıkarabiliyor. Rakamı görüp ilk projeyle
        yetinen başvurular, ikinci hak haklarını genelde fark etmiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Para üretime değil, rapora gidiyor
      </h2>
      <p>
        Destek kapsamındaki giderler makine, stant veya reklam bütçesi değil.
        Kapsam hedef pazar analizi, fiyatlandırma ve pazarlama stratejisi
        ile üç yıllık ihracat yol haritası gibi danışmanlık ve rapor
        hizmetlerinden oluşuyor. Üretim veya tanıtım bütçesi arayan bir
        işletme için bu program, beklediği ihtiyacı karşılamayabilir; destek
        esasen stratejik planlama sürecine yönelik.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Önkoşul: ihracatçı birliği üyeliği
      </h2>
      <p>
        Başvurunun önkoşulu, şirketin bir ihracatçı birliğine üye olması ve
        Ticaret Bakanlığı&apos;ndan ön onay alması. Henüz ihracata
        başlamamış, birliğe üye olmayan bir firma için bu adım, destekten
        çok önce tamamlanması gereken bir ilk basamak. Programın belirli bir
        son başvuru tarihi yok, 2026 başındaki güncellemeyle sürekli açık
        statüde; bu da aceleyle değil, önkoşulları sırayla tamamlayarak
        başvurma fırsatı veriyor.
      </p>

      <p>
        Rakamı görüp hemen başvuru formunu arayan işletmelerin çoğu, bu üç
        ayrıntıyı atladığı için süreci baştan yanlış kurguluyor. Destek
        programlarında asıl zorluk genelde büyüklüğü anlamak değil,
        kapsamı ve önkoşulu doğru okumak.
      </p>
    </MakaleLayout>
  );
}
