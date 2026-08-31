import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "faiz-indirimi-basladi-buyume-plani-hazir-mi"
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
        Ağustos ayının son haftasında iki gelişme art arda geldi. Merkez
        Bankası, piyasayı yeniden bir hafta vadeli repo ihaleleriyle yüzde
        37&apos;den fonlamaya başladı — bu, fiili fonlama maliyetinde yaklaşık
        3 puanlık örtülü bir indirim anlamına geliyor. Ardından VakıfBank
        Genel Müdürü Osman Arslan, kamu bankalarının pazartesiden itibaren
        ticari kredi faizlerini 2-3 puan aşağı çekeceğini açıkladı. Kredi
        Garanti Fonu&apos;nun kapsamının genişletilmesi ve KOBİ&apos;lere
        yönelik kredi büyüme sınırlarının esnetilmesi de aynı pakete dahil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İki yıllık bekleyişin sonu mu?
      </h2>
      <p>
        2023&apos;ten bu yana süren sıkı para politikası döneminde birçok
        KOBİ genişleme kararını rafa kaldırdı: yeni şube, ek kapasite, ikinci
        vardiya, ihracat yatırımı gibi planlar &quot;faiz düşünce
        bakarız&quot; cümlesiyle ertelendi. Şimdi o cümlenin karşılığı
        gelmeye başladı. Ama burada gözden kaçan bir ayrım var — faizin
        düşmesi ile işletmenin büyümeye hazır olması aynı şey değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Refleksle hareket eden, planla hareket eden
      </h2>
      <p>
        Danışmanlık sürecinde sık görülen bir tablo var: faiz indirimi
        haberi çıktığında bir kısım işletme hemen bankaya koşup uygun
        gördüğü ilk krediyi çeker, parayı nereye koyacağına sonra karar
        verir. Diğer kısım ise elinde zaten hazır bekleyen bir büyüme
        planıyla masaya oturur — hangi makineye, hangi pazara, hangi
        personele öncelik vereceği net, kredi sadece o planı hızlandıran
        bir araçtır. İki yıl boyunca yüksek faizle boğuşan işletmelerin
        çoğu ilk soruyu değil, ikinci soruyu hazırlamış olmalıydı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Şimdi sorulması gereken soru
      </h2>
      <p>
        Faiz penceresi açıldığında rekabet avantajı, krediye ilk ulaşanda
        değil, krediyi en hızlı ve en isabetli şekilde bir büyüme planına
        dönüştürende oluşuyor. Bu yüzden önümüzdeki haftalarda asıl mesele
        &quot;faiz kaça indi&quot; değil: işletmenin masasında, faiz
        düştüğü an devreye sokulacak somut, rakamlandırılmış bir büyüme
        planı var mı?
      </p>
    </MakaleLayout>
  );
}
