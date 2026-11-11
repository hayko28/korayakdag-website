import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "cop31-destegine-kobiler-dogrudan-basvuramiyor"
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
        Antalya&apos;da bu hafta dünyanın gözü COP31&apos;de. Zirvenin
        gölgesinde kalan bir destek kalemi var: KOSGEB&apos;in 6,5 milyon
        TL&apos;ye kadar geri ödemeli finansman sağladığı COP31
        Hızlandırma Çağrısı. Ama bu desteğin işleyiş şekli, çoğu
        girişimcinin devlet desteklerine baktığı kalıbı tersine çeviriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        &quot;Ben nasıl başvururum&quot; sorusunun cevabı yok
      </h2>
      <p>
        Danışmanlık sürecinde benzer bir vaka sık karşılaşılıyor: yeşil
        teknoloji alanında çalışan ve ürünü TRL 6 seviyesine gelmiş bir
        girişimci, KOSGEB&apos;in bu çağrısını duyar duymaz başvuru
        ekranını arıyor. Oysa bu çağrıda başvuru sahibi hiçbir zaman
        işletmenin kendisi olmuyor; başvuruyu yalnızca TEKMER işletici
        kuruluşları ve teknokent yönetici şirketleri yapabiliyor. Girişimci
        için doğrudan bir başvuru butonu yok, çünkü sistem onun için
        kurgulanmamış.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İşletme değil, programın kendisi destekleniyor
      </h2>
      <p>
        Destek, kurumun kuracağı bir hızlandırma programına veriliyor; bu
        programın en az 10 işletmeyi kapsaması, 1 ile 3 ay sürmesi ve
        COP31 kapsamında en az bir faaliyet içermesi gerekiyor. Katılımcı
        işletmeleri de bu programı kuran teknokent veya TEKMER kendisi
        seçiyor. Yani girişimcinin elindeki tek kontrol noktası, kendi
        bölgesindeki kurumun böyle bir program açıp açmayacağını zamanında
        öğrenmek ve o listeye girmek için önceden görünür olmak.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl kaçırılan şey bu çağrı değil, bu okuma biçimi
      </h2>
      <p>
        Bu çağrının kurumsal başvuru dönemi zaten kapandı; mesele artık o
        tarih değil. Mesele, Türkiye&apos;de giderek daha fazla destek
        programının bu iki katmanlı mantıkla kurulması. Bir girişimcinin
        &quot;bu destek benim için mi&quot; sorusuna &quot;hayır&quot;
        cevabını alıp konuyu kapatması, çoğu zaman o desteğin ulaşılabilir
        olmadığı anlamına gelmiyor; sadece doğru kapıyı aramadığı anlamına
        geliyor.
      </p>
    </MakaleLayout>
  );
}
