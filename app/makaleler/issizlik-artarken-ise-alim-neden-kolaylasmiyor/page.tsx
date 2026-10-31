import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "issizlik-artarken-ise-alim-neden-kolaylasmiyor"
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
        TÜİK&apos;in 27 Ekim 2026&apos;da açıkladığı Eylül verilerine göre
        mevsim etkisinden arındırılmış işsizlik oranı bir önceki aya göre
        0,5 puan artarak yüzde 8,4&apos;e yükseldi; işsiz sayısı 198 bin kişi
        artışla 2 milyon 967 bine çıktı. Aynı ayda istihdam edilen sayısı 49
        bin kişi azaldı, istihdam oranı yüzde 48,3&apos;e geriledi. Veri
        yayımlandıktan sonra danışmanlık çevresinde beklenen yorum şu
        oldu: &quot;işveren lehine bir döneme giriyoruz, işe alım
        kolaylaşacak.&quot; Rakamların içine bakıldığında bu okumanın eksik
        olduğu görülüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamın göstermediği şey
      </h2>
      <p>
        İşsizlik oranı yükseldiğinde başvuru sayısının artması, şirketlerin
        aradığı pozisyonun daha kolay doldurulacağı anlamına gelmiyor.
        Bugün İK departmanlarının en sık dile getirdiği şikayet hâlâ aynı:
        &quot;doğru profilde aday bulamıyoruz.&quot; Bu çelişki aslında bir
        çelişki değil; genel işsizlik rakamı yükselirken, şirketlerin ihtiyaç
        duyduğu deneyimli ve niş yetkinlikteki havuz aynı hızda büyümüyor.
        İşsiz sayısındaki artış ile açık pozisyon sayısındaki azalma, iki
        ayrı eksende ilerliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Genç işsizliği ayrı bir tabloya işaret ediyor
      </h2>
      <p>
        15-24 yaş grubunda işsizlik oranı 1,6 puanlık artışla yüzde
        14,8&apos;e çıktı; bu, genel ortalamanın neredeyse iki katı.
        Dolayısıyla artan işsizliğin önemli bir kısmı iş tecrübesi sınırlı
        genç nüfusta birikiyor. Oysa şirketlerin zorlandığı pozisyonların
        çoğu orta kademe, belirli bir sektör deneyimi veya teknik yetkinlik
        gerektiren roller. Havuz büyüyor, ama büyüyen kısım çoğu zaman
        aranan profille örtüşmüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Atıl işgücü, görünmeyen bir fırsat ve risk barındırıyor
      </h2>
      <p>
        Geniş tanımlı atıl işgücü oranı yüzde 31,2&apos;ye ulaştı; yani
        işgücünün yaklaşık üçte biri ya çalışmıyor ya da aktif olarak iş
        aramıyor. Bu geniş havuzun bir kısmı, uygun koşullar sunulduğunda
        işgücüne geri dönebilecek nitelikli kişilerden oluşuyor; esnek
        çalışma, yeniden eğitim veya kısa süreli projelerle devreye
        alınabiliyor. Ancak bu havuza erişmek, klasik ilan verme
        yönteminden farklı bir işe alım stratejisi gerektiriyor. Aksi halde
        şirket, genişleyen bir işsizlik ortamında bile aynı dar havuzda
        rekabet etmeye devam ediyor.
      </p>

      <p>
        Sonuç olarak işsizlik rakamı yükseldiğinde işe alım otomatik olarak
        kolaylaşmıyor, yalnızca havuzun bileşimi değişiyor. Şirketin önündeki
        soru hâlâ aynı: aradığı yetkinlik pazarda fiilen yoksa, bunu
        içeride mi yetiştirecek, yoksa ücret ve esneklik teklifini mi
        gözden geçirecek?
      </p>
    </MakaleLayout>
  );
}
