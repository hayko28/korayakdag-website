import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "yapay-zeka-is-mesajlarinizi-yazarken-sorulmayan-soru"
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
        Yapay zekanın iş mesajlarını sizin yerinize yazması, artık bir
        gelecek senaryosu değil, bir eklenti kurma meselesi. OpenAI, Mac
        için ChatGPT Work ve Codex kullanıcılarına yönelik yeni bir eklenti
        yayımladı: eklenti, Apple Mesajlar geçmişinde arama yapabiliyor,
        yanıt taslağı hazırlayabiliyor ve kullanıcı izniyle mesaj
        gönderebiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kullanışlı, ama asıl soru bu değil
      </h2>
      <p>
        Özelliğin kendisi gerçekten pratik. Ama bir işletme için önemli olan
        soru şu: müşteri veya tedarikçiyle olan yazışmalara bu tür bir
        aracın erişmesine izin verirken hangi kural konuldu? Hangi veri
        paylaşılabilir, hangi mesaj otomatik gönderilebilir, ve bu izinleri
        kim geri alabilir?
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlıkta sık görülen tablo
      </h2>
      <p>
        Firmaların çoğu bu tür entegrasyonları IT ya da yönetim onayından
        geçirmeden, tek bir çalışanın &quot;bu işimi kolaylaştırıyor&quot;
        demesiyle devreye alıyor. Kolaylık başlarda fark edilmiyor ama
        müşteri gizliliği, sözleşme detayları veya fiyat teklifleri gibi
        hassas bilgiler söz konusu olduğunda, aynı kolaylık hızla bir risk
        kaynağına dönüşüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Yapay zekayı iş süreçlerine katmak doğru bir yön. Ama her yeni
        eklentiyi onaylamadan önce tek bir cümlelik kural yeterli: bu araç
        hangi veriye erişiyor, ve kim bunu denetliyor? Bu soruyu sormadan
        devreye alınan her entegrasyon, aslında görünmeyen bir borç
        biriktiriyor.
      </p>
    </MakaleLayout>
  );
}
