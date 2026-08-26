import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "isletmenize-disaridan-bakmak"
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
        Bir işletme sahibi kendi tablosuna kaç kere gerçekten dışarıdan
        bakıyor? Danışmanlık masasında görülen tablo genelde şöyle: çoğu
        işletme vergi riskini bir ceza tebligatıyla, kaçırdığı teşviki bir
        rakibinin haberiyle, kredibilitesini ise bir banka reddiyle
        öğreniyor. Üçü de aslında önceden görülebilir — sadece kimse
        zamanında bakmıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Üç ayrı sorun, tek bir kaynak
      </h2>
      <p>
        Bir imalat firması üç yıl önce değişen bir KDV iade uygulamasını eski
        usulle sürdürüyor; inceleme geldiğinde birikmiş faiziyle ciddi bir
        cezaya dönüşüyor. Aynı sektörde, benzer ciroda iki üretici; biri
        Ar-Ge&apos;sini hiçbir destek programına bağlamıyor, diğeri KOSGEB ve
        Yatırım Teşvik Belgesi&apos;ne bağlıyor — birkaç yıl sonra maliyet
        yapıları rekabet edemeyecek kadar ayrışıyor. Büyüyen bir siparişi
        karşılamak için kredi başvuran bir ticaret şirketi ise stok devir
        hızı ve kısa vadeli borç yapısı yüzünden ağır teminatla karşılaşıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kaynak aynı: kör nokta
      </h2>
      <p>
        Üç ayrı sorun gibi görünse de kökeni aynı — işletme kendi
        bilançosuna bankanın, denetçinin ya da rakibin gözünden bakmıyor.
        Vergi riski, teşvik/fırsat kaybı ve kredibilite zayıflığı, genelde
        aynı işletmede aynı anda birikiyor, çünkü üçü de aynı ihmalin farklı
        yüzü.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bu üç körlüğü fark etmenin en ucuz yolu bir ceza, bir kaçırılmış
        fırsat ya da bir kredi reddi değil — işletmenin kendi tablosuna
        yılda bir kez de olsa dışarıdan, bağımsız bir gözle bakması.
      </p>
    </MakaleLayout>
  );
}
