import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCtaButton from "@/components/ContactCtaButton";

export const metadata: Metadata = {
  title: "Örnek Senaryolar: Danışmanlık Desteğinin Fark Yarattığı Durumlar | Koray Akdağ",
  description:
    "Devlet desteği kaçırma, yanlış şirket değerlemesi, yurt dışı kuruluşta hatalı ülke seçimi, KVKK/vergi uyum eksikliği, aile şirketinde kurumsallaşma ve stratejik iş ortaklığı gibi konularda sahada sık görülen durum tiplerini gösteren temsili örnek senaryolar.",
  keywords: [
    "iş geliştirme danışmanlığı örnek",
    "kosgeb destek fırsatı kaçırma",
    "şirket değerleme riski",
    "yurt dışı şirket kuruluşu hata",
    "kvkk uyum eksikliği riski",
    "aile şirketi kurumsallaşma",
    "stratejik iş ortaklığı danışmanlığı",
  ],
  alternates: {
    canonical: "/ornek-senaryolar",
  },
};

interface Senaryo {
  baslik: string;
  etiket: string;
  durum: string;
  yaklasim: string;
  onem: string;
  blogHref: string;
  blogBaslik: string;
}

const SENARYOLAR: Senaryo[] = [
  {
    baslik: "50 kişilik bir üretim firması",
    etiket: "DEVLET DESTEKLERİ",
    durum:
      "Firma yıllardır aynı üretim faaliyetini sürdürüyor, ancak vergi dairesindeki ana faaliyet kodu (NACE) fiilen ürettiği ürünle tam örtüşmüyor. Bu yüzden başvurabileceği bir KOSGEB veya TÜBİTAK destek programını hiç değerlendirmemiş, hatta böyle bir hakkı olduğunun farkında bile değil.",
    yaklasim:
      "Bu tür durumlarda önce firmanın gerçek faaliyetiyle sicil kayıtları arasındaki uyumu netleştirmek gerekir. Ardından firmanın büyüklüğüne, sektörüne ve yatırım planına uygun destek programları taranır; NACE kodu güncellemesi gerekiyorsa bu süreç de yönetilir. Amaç, kaçırılan değil önümüzdeki dönemde yakalanabilecek fırsatı ortaya çıkarmaktır.",
    onem:
      "Bir destek programının başvuru dönemi kapandıktan sonra fark edilmesi, o dönem için telafisi olmayan bir kayıptır. Firmanın uygunluk durumunu düzenli olarak gözden geçirmek, yeni bir çağrı açıldığında hazır yakalanmayı sağlar.",
    blogHref: "/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi",
    blogBaslik: "Şirketimin NACE Kodu Ürettiğim Ürünle Uyuşmuyorsa KOSGEB Desteği Alabilir miyim?",
  },
  {
    baslik: "Ortağından pay satın almak isteyen bir teknoloji şirketi",
    etiket: "ŞİRKET DEĞERLEME & M&A",
    durum:
      "İki ortaklı bir şirkette ortaklardan biri payını devretmek istiyor, ancak şirketin değeri konusunda taraflar arasında net bir yöntem yok. Duygusal beklenti ile finansal tablolara dayanan gerçek değer arasında ciddi bir fark oluşmuş durumda.",
    yaklasim:
      "Şirket değerleme sürecinde tek bir rakama değil, birden fazla yönteme (indirgenmiş nakit akışı, emsal şirket çarpanları, defter değeri gibi) bakılarak makul bir değer aralığı ortaya konur. Satın alma veya pay devri söz konusuysa due diligence ile finansal, hukuki ve operasyonel riskler de bu değerlemeye dahil edilir.",
    onem:
      "Tek taraflı veya yöntemsiz yapılan bir değerleme, ileride ortaklar arasında anlaşmazlığa ya da satın alan tarafın öngörmediği riskleri devralmasına yol açabilir. Doğru değerleme, hem satan hem alan taraf için müzakerenin sağlıklı bir zeminde ilerlemesini sağlar.",
    blogHref: "/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026",
    blogBaslik: "Due Diligence Nedir? Şirket Satın Alma ve Birleşme Öncesi Neden Kritik?",
  },
  {
    baslik: "Avrupa pazarına açılmak isteyen bir ihracatçı KOBİ",
    etiket: "YURT DIŞI ŞİRKET KURULUŞU",
    durum:
      "Firma yurt dışında şirket kurarak Avrupa'daki müşterilerine daha hızlı fatura kesmek ve yerel banka hesabı açmak istiyor. Ancak hangi ülkenin, hangi şirket türünün ve hangi vergi rejiminin kendi iş modeline uygun olduğunu değerlendirmeden, sadece bir tanıdığın önerdiği ülkeye yönelmiş durumda.",
    yaklasim:
      "Doğru yaklaşım, önce firmanın ihracat hacmini, hedef pazarını, nakit akışı ihtiyacını ve uzun vadeli büyüme planını anlamaktır. Buna göre ülke ve şirket türü (örneğin GmbH, Ltd, BV gibi) karşılaştırmalı olarak değerlendirilir; kuruluş sonrası Türkiye tarafındaki vergi ve raporlama yükümlülükleri de baştan planlanır.",
    onem:
      "Yanlış ülke veya yapı seçimi, sonradan değiştirilmesi hem maliyetli hem zaman alıcı bir süreçtir. Bazı ülkelerde şirket kapatmak, açmaktan daha karmaşık olabilir. Kuruluş öncesi doğru analiz, ileride ciddi bir geri dönüş maliyetini önler.",
    blogHref: "/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari",
    blogBaslik: "Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?",
  },
  {
    baslik: "Müşteri verisini yoğun işleyen bir e-ticaret şirketi",
    etiket: "KVKK & VERGİ UYUMU",
    durum:
      "Şirket binlerce müşterinin adını, iletişim bilgisini ve alışveriş geçmişini işliyor, ancak VERBİS kaydı, aydınlatma metni ve açık rıza süreçleri güncel değil. Aynı şekilde e-fatura/e-defter geçiş hadleri ve transfer fiyatlandırması belgelendirme yükümlülükleri de takip edilmiyor.",
    yaklasim:
      "Uyum çalışmasına önce bir tespit aşamasıyla başlanır: hangi veri işleniyor, hangi yükümlülük hangi eşikte devreye giriyor. Ardından eksik aydınlatma metinleri, veri işleme envanteri ve gerekli vergisel bildirimler tamamlanır. Bu, tek seferlik değil düzenli takip gerektiren bir süreçtir.",
    onem:
      "KVKK ve vergi mevzuatındaki yükümlülükler fark edilmeden aylarca, hatta yıllarca ihlal edilmeye devam edebilir; idari para cezaları geriye dönük de uygulanabilir. Erken tespit, hem cezai riski hem de kurumsal itibar kaybını önler.",
    blogHref: "/blog/kvkk-uyum-sureci-sirketler-icin-kisisel-verilerin-korunmasi-rehberi-2026",
    blogBaslik: "KVKK Uyum Süreci: Şirketler İçin Kişisel Verilerin Korunması Rehberi 2026",
  },
  {
    baslik: "İkinci nesle devir sürecindeki bir aile şirketi",
    etiket: "AİLE ŞİRKETİ & KURUMSALLAŞMA",
    durum:
      "Kurucu nesil yönetimi kademeli olarak çocuklarına devretmek istiyor, ancak şirkette yazılı bir görev/yetki ayrımı, yönetim kurulu ve icra kurulu ayrımı ya da aile anayasası gibi bir yapı yok. Kararlar hâlâ tamamen kişisel inisiyatife bağlı alınıyor.",
    yaklasim:
      "Kurumsallaşma süreci, önce mevcut karar alma mekanizmalarının haritalanmasıyla başlar. Ardından aile ile şirket yönetiminin ayrıştırıldığı bir yapı (yönetim kurulu, icra kurulu, aile anayasası gibi araçlarla) kademeli olarak kurulur. Bu, tek bir belgeyle değil zaman içinde oturan bir dönüşümdür.",
    onem:
      "Nesil geçişi planlanmadan yapıldığında hem şirketin operasyonel sürekliliği hem de aile içi ilişkiler risk altına girebilir. Erken planlanan bir kurumsallaşma süreci, geçişi hem şirket hem aile için daha öngörülebilir hale getirir.",
    blogHref: "/blog/aile-sirketinden-kurumsal-yapiya-gecis-kurumsallasma",
    blogBaslik: "Kurumsallaşma: Aile Şirketinden Kurumsal Yapıya Geçiş Süreci Nasıl Yönetilir?",
  },
  {
    baslik: "Yeni bir bayi ağı kurmak isteyen bir üretici firma",
    etiket: "STRATEJİK İŞ ORTAKLIĞI & BÜYÜME",
    durum:
      "Firma büyümek için farklı bölgelerde bayilikler açmak istiyor, ancak bayilik sözleşmesinin içeriği, münhasırlık şartları ve olası bir fesihte doğabilecek denkleştirme tazminatı riski gibi konularda net bir strateji yok. Kararlar tecrübeyle değil, deneme yanılmayla alınıyor.",
    yaklasim:
      "Doğru yaklaşım, büyüme kararını tek bir sözleşme maddesine değil bütüncül bir kanal stratejisine oturtmaktır: hangi bölgede hangi model (bayi, distribütör, acente), hangi sözleşme koşulları ve hangi performans göstergeleriyle ilerlenecek. Bu, satış hedefleriyle hukuki riskin birlikte değerlendirildiği bir süreçtir.",
    onem:
      "Plansız kurulan bir bayi ağı, kısa vadede satışı artırsa da orta vadede sözleşme anlaşmazlıkları ve markanın bölgesel itibar kaybı gibi maliyetli sorunlara dönüşebilir. Doğru kurgulanmış bir ortaklık yapısı, büyümeyi sürdürülebilir kılar.",
    blogHref: "/blog/ticari-sozlesme-yonetimi-tedarikci-bayi-distributorluk-sozlesmeleri",
    blogBaslik: "Ticari Sözleşme Yönetimi: Tedarikçi, Bayi ve Distribütörlük Sözleşmelerinde Dikkat Edilmesi Gerekenler",
  },
];

export default function OrnekSenaryolarPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-[78px]" />

      <section className="bg-[#071A2F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[2px] text-orange-500">Örnek Senaryolar</p>
          <h1 className="mb-5 text-3xl font-bold sm:text-4xl">
            Danışmanlık Desteğinin Fark Yarattığı Durumlar
          </h1>
          <p className="text-white/80">
            Devlet desteği, şirket değerleme, yurt dışı kuruluş, mevzuat uyumu, aile şirketi ve stratejik
            büyüme alanlarında sahada sık karşılaşılan durum tiplerini gösteren altı örnek senaryo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-12 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6 sm:p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[1px] text-amber-700">Önemli Not</p>
          <p className="text-[15px] leading-7 text-amber-900">
            Aşağıdaki senaryolar, sahada sık karşılaşılan durum tiplerini göstermek için hazırlanmış temsili
            örneklerdir; belirli bir gerçek müşteriye veya olaya atıfta bulunmaz. Şirket adı, rakam ve tarih
            gibi hiçbir detay gerçek bir vakaya ait değildir. Amaç, benzer bir durumla karşılaşabilecek
            ziyaretçilere konunun neden önemli olduğunu somut bir şekilde göstermektir.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {SENARYOLAR.map((s) => (
            <article
              key={s.baslik}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-orange-300 hover:shadow-md"
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-orange-500">{s.etiket}</p>
              <h2 className="mb-4 text-xl font-bold text-[#071A2F]">{s.baslik}</h2>

              <div className="mb-4">
                <p className="mb-1 text-sm font-semibold text-[#071A2F]">Durum</p>
                <p className="text-[14.5px] leading-6 text-gray-600">{s.durum}</p>
              </div>

              <div className="mb-4">
                <p className="mb-1 text-sm font-semibold text-[#071A2F]">Tipik Yaklaşım</p>
                <p className="text-[14.5px] leading-6 text-gray-600">{s.yaklasim}</p>
              </div>

              <div className="mb-5">
                <p className="mb-1 text-sm font-semibold text-[#071A2F]">Neden Önemli</p>
                <p className="text-[14.5px] leading-6 text-gray-600">{s.onem}</p>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-4">
                <Link href={s.blogHref} className="text-sm font-semibold text-orange-600 underline">
                  {s.blogBaslik} →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <h2 className="mb-3 text-2xl font-bold text-[#071A2F]">Sizin şirketinizde durum nedir?</h2>
          <p className="mx-auto mb-7 max-w-2xl text-[15px] leading-7 text-gray-600">
            Yukarıdaki senaryolardan biri size tanıdık geldiyse, şirketinizin güncel durumunu birlikte
            değerlendirelim. Devlet desteği uygunluğunuzu{" "}
            <Link href="/destek-uygunluk-analizi" className="font-semibold text-orange-600 underline">
              Destek Uygunluk Analizi
            </Link>{" "}
            aracıyla ücretsiz kontrol edebilir, diğer konularda doğrudan iletişime geçebilirsiniz.
          </p>
          <ContactCtaButton className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            İletişime Geçin
          </ContactCtaButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
