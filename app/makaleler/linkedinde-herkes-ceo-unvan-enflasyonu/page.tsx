import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "linkedinde-herkes-ceo-unvan-enflasyonu"
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
        Geçen hafta bir toplantı öncesi katılımcı listesine baktım: üç kişi,
        üçü de LinkedIn&apos;de aynı unvanla yazıyordu profiline: &quot;Founder
        &amp; CEO&quot;. Muhtemelen biri şirketi gerçekten kuran, biri erken
        katılan bir ortak, biri de belki daha yeni gelen biriydi — ama
        unvanlarda hiçbir fark yoktu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bu neden oluyor?
      </h2>
      <p>
        LinkedIn&apos;de unvan yazmak ücretsiz ve kimse denetlemiyor.
        Girişimcilik kültüründe &quot;founder&quot; olmak bir statü sembolüne
        dönüştü, ve platformun kendisi de özgüvenli, iddialı unvanları daha
        çok öne çıkarıyor. Sonuç: üç kişilik bir ekipte üç &quot;CEO&quot;,
        on kişilik bir ekipte beş &quot;Direktör&quot; görmek artık normal.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Peki sorun ne?
      </h2>
      <p>
        Bunda kötü niyet yok, herkes kendi hikayesini istediği gibi
        anlatabilir. Ama iş dünyasında unvan, kiminle gerçekten görüştüğünüzü
        ve kararı kimin verdiğini anlamak için kullandığımız bir referans
        noktasıydı. O referans noktası eridiğinde, özellikle bir ortaklık ya
        da tedarik kararı öncesinde &quot;bu kişi gerçekten yetkili mi&quot;
        sorusunu unvana bakarak cevaplayamıyorsunuz.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Benim yaklaşımım
      </h2>
      <p>
        Bir danışman ya da iş ortağıyla çalışmadan önce unvana değil, ne
        ürettiğine ve hangi somut sonuçları gösterdiğine bakıyorum.
        Paylaştığı içerik, bahsettiği gerçek proje ve rakamlar, unvandan çok
        daha fazlasını söylüyor. KOBİ sahiplerine de aynısını öneririm:
        kiminle iş yaptığınıza karar verirken profildeki unvana değil,
        geçmişte ne yaptığına bakın.
      </p>

      <p>
        Ben de profilime &quot;Danışman&quot; yazıyorum, çünkü yaptığım iş tam
        olarak bu — ama itiraf edeyim, bazen daha havalı bir şey yazmak hiç
        aklımdan geçmiyor değil.
      </p>
    </MakaleLayout>
  );
}
