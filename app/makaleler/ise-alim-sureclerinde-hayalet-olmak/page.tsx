import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "ise-alim-sureclerinde-hayalet-olmak"
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
        Bir KOBİ sahibi son işe alım sürecini şöyle özetliyor: 200 başvuru,
        üç mülakat turu, en sonunda en iyi adaya teklif — ve sessizlik.
        Aday telefonu açmıyor, mesaja dönmüyor, LinkedIn&apos;de son giriş
        tarihi güncelleniyor ama ona hiç yanıt gelmiyor. Aynı işveren bir yıl
        önce tam tersini yapmış, elemeyi kaybettiği adaylara hiç dönüş
        yapmamıştı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamlar bir suçlamadan çok bir ayna
      </h2>
      <p>
        Criteria Corp&apos;un 2026 Aday Deneyimi Raporu&apos;na göre, işe
        alınmayan adayların şirket tarafından hiç geri dönüş almama oranı
        2024&apos;te %38 iken 2026&apos;da %53&apos;e çıktı. Aynı madalyonun
        diğer yüzünde Employ&apos;un 2026 raporu var: adayların %32&apos;si
        şirket tarafından ghostlandığını söylerken, sadece %14&apos;ü
        kendisinin şirketi ghostladığını itiraf ediyor. İki taraf da
        birbirini suçluyor, ikisi de kısmen haklı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        KOBİ&apos;lerde asıl kırılma noktası
      </h2>
      <p>
        Büyük şirketlerde bu sorun bir istatistik olarak kalabilir; KOBİ
        ölçeğinde her ghostlama doğrudan itibar kaybı. Danışmanlık
        süreçlerinde sık görülen tablo şu: işe alım süreci bir sahibi ya da
        yöneticinin dolu takvimine sıkıştırılmış oluyor, ret mailleri
        &quot;zaman bulunca&quot; gönderilecek bir iş listesine düşüyor ve
        hiç gönderilmiyor. Oysa ret edilen bir aday da, kabul edilen aday
        kadar potansiyel bir müşteri, tedarikçi ya da referans kaynağı
        olabiliyor.
      </p>
      <p>
        Çözüm karmaşık bir yazılım değil. Her aşamada otomatik bir bilgi
        maili, net bir karar tarihi ve o tarihe sadık kalma disiplini,
        şirketin işe alım sürecini hem adaylar hem de dolaylı olarak piyasa
        gözünde çok daha güvenilir hale getiriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bir şirketin işe alım sürecinde nasıl davrandığı, ürününün ya da
        hizmetinin kalitesi kadar konuşuluyor artık. Sessizlik ucuz
        görünüyor ama faturası uzun vadede itibar üzerinden ödeniyor.
      </p>
    </MakaleLayout>
  );
}
