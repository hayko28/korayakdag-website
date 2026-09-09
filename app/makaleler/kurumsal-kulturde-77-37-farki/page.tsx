import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kurumsal-kulturde-77-37-farki"
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
        DHR Global&apos;in bu yıl yayımladığı ikinci Workforce Trends
        Raporu&apos;nda iki rakam yan yana duruyor: yöneticilerin
        yüzde 77&apos;si şirket kültürünü &quot;çok önemli&quot; olarak
        tanımlıyor, giriş seviyesindeki çalışanların ise sadece yüzde
        37&apos;si aynı fikirde. Üst düzey yöneticiler, kültürün
        &quot;net ve iyi tanımlanmış&quot; olduğunu, alt kademedeki
        çalışanlara göre 2,5 kat daha fazla oranda düşünüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Aynı şirket, iki farklı kültür algısı
      </h2>
      <p>
        Bu fark tesadüf değil, yapısal bir sonuç. Kurumsal değerler
        genelde üst yönetim toplantısında yazılıp bir sunumda,
        bir duvarda ya da işe giriş dokümanında sabitleniyor. Şirket
        büyüdükçe bu değerlerin günlük işe (bir yöneticinin bir
        çalışanı nasıl uyardığına, bir terfi kararının nasıl
        açıklandığına, bir hatanın nasıl karşılandığına) çevrilmesi
        kimsenin görevi olmuyor. Üst yönetim değerlerin var olduğunu
        bilir; saha o değerlerin günlük pratiğe dönüşüp dönüşmediğini
        yaşar.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Şirket büyüdükçe bu fark neden büyüyor?
      </h2>
      <p>
        On, yirmi kişilik bir ekipte kültür kurucunun davranışından
        okunur; ayrıca bir belgeye gerek yoktur. Elli, yüz kişiyi
        geçtiğinde arada katman oluşur: bölge müdürü, departman
        yöneticisi, ekip lideri. Her katman değerleri kendi üslubuyla
        yorumlar; bazıları sıkı, bazıları gevşek uygular. Sonuçta aynı
        şirkette çalışan iki kişi, tamamen farklı bir kültür
        deneyimler: biri &quot;burada dürüstçe itiraz edilebiliyor&quot;
        derken diğeri &quot;burada itiraz eden cezalandırılıyor&quot;
        diyebilir.
      </p>
      <p>
        Rapordaki ikinci bulgu da bunu doğruluyor: çalışanların sadece
        yüzde 36&apos;sı kültürün &quot;net tanımlı olduğunu ve
        performansı yönlendirdiğini&quot; düşünüyor; geri kalanı
        kültürü &quot;ekipten ekibe tutarsız&quot; ya da &quot;belirsiz
        ve gerçekten yönetilmiyor&quot; olarak tarif ediyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Kurumsal kültür bir slogan değil, ölçülebilir bir yönetim
        alanı. Üst yönetimin kültürü &quot;iyi&quot; sanması ile sahanın
        kültürü gerçekten yaşaması arasındaki mesafe, çalışan
        bağlılığı anketinden çok daha önce, sıradan bir Salı günü
        toplantısında ortaya çıkıyor. Asıl soru şirketin bir kültür
        cümlesi olup olmadığı değil, o cümlenin en alt katmana kadar
        aynı anlama gelip gelmediği.
      </p>
    </MakaleLayout>
  );
}
