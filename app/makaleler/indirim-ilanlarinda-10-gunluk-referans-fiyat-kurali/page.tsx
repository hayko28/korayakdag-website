import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "indirim-ilanlarinda-10-gunluk-referans-fiyat-kurali"
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
        Ticaret Bakanlığı&apos;nın 1 Temmuz 2026 tarihli, 33297 sayılı
        Resmî Gazete&apos;de yayımlanan Ticari Reklam ve Haksız Ticari
        Uygulamalar Yönetmeliği değişikliği 1 Ağustos 2026&apos;dan
        itibaren yürürlükte. Değişikliğin en somut sonucu şu: bir ürüne
        &quot;indirim&quot; etiketi konabilmesi için referans fiyatın,
        kampanya başlamadan önceki son 10 günün en düşük satış fiyatı
        olması zorunlu. Eylül ile birlikte sonbahar kampanyalarını
        hazırlayan işletmeler için bu, gözden kaçırılması pahalıya
        patlayabilecek bir detay.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Birinci hata: kampanyadan hemen önce fiyatı yükseltmek
      </h2>
      <p>
        Uzun süredir yaygın bir alışkanlık şuydu: kampanyadan birkaç gün
        önce fiyatı bilinçli olarak artırıp, sonra büyük bir
        &quot;indirim&quot; oranıyla duyurmak. Yeni kural bu pratiği
        doğrudan hedef alıyor — referans fiyat artık son 10 günün en
        düşük fiyatı olmak zorunda, satıcının kampanya öncesi son gün
        belirlediği fiyat değil. Bu geçmişi olan bir e-ticaret
        işletmesi, aynı yöntemi Eylül kampanyasında da uygularsa hem
        idari para cezasıyla hem de tüketici şikayetiyle karşılaşabilir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İkinci hata: fiyat geçmişini kayıt altında tutmamak
      </h2>
      <p>
        Denetimde ispat yükü satıcıya ait. Son 10 günün fiyat
        hareketini gösteremeyen bir işletme, iddiasını
        kanıtlayamayacağı bir konuma düşer. Basit bir fiyat geçmişi
        tablosu ya da e-ticaret altyapısının fiyat log kaydı, bugün
        birçok KOBİ&apos;nin muhasebe kayıtları kadar önemli bir belge
        haline geldi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Üçüncü hata: pazarlama ekibini bilgilendirmemek
      </h2>
      <p>
        Yönetmelik değişikliği hukuk departmanı ya da danışmanla
        sınırlı kalırsa işe yaramıyor — kampanya metnini yazan,
        görseli hazırlayan, reklamı yayınlayan ekip kuralı bilmiyorsa
        ihlal yine oluşuyor. Sahte veya doğrulanamayan
        &quot;müşteri yorumu&quot; kullanımına ve çocuklara yönelik
        hedefli reklama getirilen yasaklar da aynı yönetmeliğin
        parçası; pazarlama ekibinin kampanya öncesi kısa bir
        kontrol listesinden geçmesi artık ihtiyari değil.
      </p>

      <p>
        Sonbahar kampanya sezonu başlarken asıl soru indirim oranının
        ne kadar büyük göründüğü değil: o oranın arkasındaki referans
        fiyatın denetimde ayakta kalıp kalmayacağı.
      </p>
    </MakaleLayout>
  );
}
