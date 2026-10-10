import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "franchise-vermeden-once-atlanan-sart"
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
        Üçüncü şubesini açan bir kahve zinciri sahibinin telefonu o günden
        sonra farklı bir sebeple çalmaya başlıyor: &quot;Bu modeli bize de
        verir misiniz?&quot; Franchise fikri cazip görünüyor, çünkü sermaye
        başka birinden geliyor ve markanın büyümesi hızlanıyor. Ama
        danışmanlık masasına gelen çoğu marka sahibi, işin bu kadar basit
        olmadığını ilk toplantıda öğreniyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Üç şart, genelde bir eksik
      </h2>
      <p>
        Franchise verebilmek için üç temel şart aranıyor. Birincisi, işin
        kârlılığının sahibinin kişisel becerisine değil, tekrarlanabilir bir
        sisteme bağlı olduğunun en az bir lokasyonda kanıtlanmış olması.
        İkincisi, o markanın TÜRKPATENT nezdinde tescilli olması; tescilsiz
        bir isim üzerinden franchise vermek, yatırımını yapan tarafı hukuken
        korumasız bırakıyor. Üçüncüsü ise en çok atlanan şart: işin tüm
        süreçlerinin yazılı bir operasyon el kitabında toplanmış olması.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Operasyon el kitabı neden en sona kalıyor
      </h2>
      <p>
        Marka sahipleri genelde ilk iki şartı kendiliğinden tamamlıyor;
        kârlılığı zaten biliyorlar, tescili de erken aşamada yaptırmışlar.
        Üçüncüsü ise &quot;markam zaten biliniyor, anlatırım&quot;
        düşüncesiyle hep ertelenen bir iş haline geliyor. Oysa franchise alan
        kişinin satın aldığı şey markanın adı değil, o markanın tekrar
        edilebilir başarı formülü. El kitabı yoksa her şube kendi yorumuyla
        iş yapmaya başlıyor.
      </p>

      <p>
        Bunun sonucu birkaç ay içinde ortaya çıkıyor: aynı tabela altında
        birbirinden farklı servis standardına, farklı tedarikçiye, farklı
        fiyatlandırmaya sahip şubeler. Franchise vermeden önce sorulması
        gereken soru belki de &quot;kaç şubemiz var&quot; değil, bu üç
        şarttan hangisinin hâlâ sadece kurucunun kafasında yazılı olduğu.
      </p>
    </MakaleLayout>
  );
}
