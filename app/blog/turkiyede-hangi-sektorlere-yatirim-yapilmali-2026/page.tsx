import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Türkiye'de Hangi Sektörlere Yatırım Yapılmalı 2026 | Koray Akdağ",
  description: "Türkiye'de doğrudan yabancı yatırım gerçekte nereye gidiyor, hükümet hangi sektörleri önceliklendiriyor ve ihracat gücü nerede fırsat işaret ediyor. Yatırımcılar için veriye dayalı 2026 bakışı.",
  keywords: ["türkiye'de hangi sektöre yatırım yapılmalı", "UDY sektörel dağılım 2025", "öncelikli yatırım sektörleri türkiye", "türkiye yatırım fırsatları 2026", "yabancı yatırım imalat bilgi iletişim"],
  alternates: {
    canonical: "/blog/turkiyede-hangi-sektorlere-yatirim-yapilmali-2026",
    languages: {
      tr: "/blog/turkiyede-hangi-sektorlere-yatirim-yapilmali-2026",
      en: "/en/blog/which-sectors-to-invest-in-turkey-2026",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "Türkiye'de en çok yabancı yatırım çeken sektörler hangileri?",
    "a": "2025'in üçüncü çeyreğinde imalat (%29,9) ve bilgi-iletişim (%26,1) birlikte yatırımın yaklaşık %56'sını oluşturdu. Paylar döneme ve ölçüye göre değişir."
  },
  {
    "q": "Hükümet hangi sektörleri önceliklendiriyor?",
    "a": "2024-2028 UDY Stratejisi yeşil ve sürdürülebilir yatırımları, dijital dönüşüm ve ileri teknolojileri, tedarik zinciri kaydırmayı ve yüksek istihdam ile katma değer sağlayan projeleri önceliklendiriyor."
  },
  {
    "q": "Türkiye'ye en çok hangi ülkeler yatırım yapıyor?",
    "a": "2025'in üçüncü çeyreğinde Hollanda ve Lüksemburg başı çekti; Kazakistan, Almanya ve BAE izledi. Holding yapıları nihai yatırımcının başka bir ülkede olması anlamına gelebilir."
  },
  {
    "q": "Hizmet ve yazılım ihracatçıları için vergi teşviki var mı?",
    "a": "Evet. 11257 sayılı Cumhurbaşkanı Kararı, yazılım, mühendislik, tasarım ve veri hizmetleri dahil nitelikli hizmet ihracatındaki indirimi 1 Ocak 2026'da başlayan dönemler için %100'e çıkardı."
  },
  {
    "q": "En iyi sektör en çok yatırım çeken sektör müdür?",
    "a": "Zorunlu değil. UDY verisini, politika önceliklerini ve ihracat gücünü filtre olarak kullanın, ardından kendi müşterileriniz ve maliyet yapınız için rakamları test edin."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türkiye'de 2026'da Hangi Sektörlere Yatırım Yapılmalı? Veriler ve Politika Ne Diyor?"
      description="Sektör ve ülke bazında doğrudan yabancı yatırım akımları, hükümetin öncelikli alanları ve ihracat güçleri; sektör seçerken önemli olan çekincelerle birlikte."
      category="TÜRKİYE'DE YATIRIM • SEKTÖRLER • 2026"
      date="Ekim 2026"
      readTime="8 Dakika"
      coverImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="turkiyede-hangi-sektorlere-yatirim-yapilmali-2026"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 Dürüst Cevap</h2><p className="mb-6 text-lg leading-9 text-gray-700">Herkes için doğru tek bir sektör yok, ancak üç kanıt kaynağı aynı yönü gösteriyor: yabancı paranın gerçekte gittiği yer (<strong>imalat ve bilgi-iletişim</strong>), devletin gelmesini istediği yer (<strong>yeşil, dijital, tedarik zinciri kaydırma, yüksek katma değer</strong>) ve Türkiye&apos;nin zaten güçlü ihracat yaptığı yer (<strong>otomotiv, kimya, elektrik-elektronik</strong>). Bunları filtre olarak kullanın, ardından kendi iş planınızı test edin.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. UDY Nereye Gitti: Güncel Bir Kesit</h2><p className="mb-6 text-lg leading-9 text-gray-700">TEPAV&apos;ın 2025&apos;in üçüncü çeyreğine ilişkin bülteninde brüt doğrudan yatırım girişi yaklaşık 5,0 milyar dolardı (net 2,4 milyar dolar, gayrimenkul hariç 1,6 milyar dolar). O çeyreğin sektör dağılımı:</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Gösterge (2025 3. çeyrek)</th><th className="p-5">Değer</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">İmalatın UDY içindeki payı</td><td className="p-5">%29,9</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Bilgi-iletişimin payı</td><td className="p-5">%26,1</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">İkisinin toplam payı</td><td className="p-5">Yaklaşık %56</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">En büyük kaynak ülkeler</td><td className="p-5">Hollanda %28,6, Lüksemburg %26,7; ardından Kazakistan, Almanya ve BAE (her biri %5&apos;in üzerinde)</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Yeni yabancı sermayeli şirket</td><td className="p-5">2.334 (%16,9 artış), bunların %89,4&apos;ü limited şirket</td></tr></tbody></table></div><div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8"><h3 className="mb-4 text-2xl font-bold text-[#071A2F]">⚠️ Dikkatle Okuyun</h3><p className="leading-8 text-gray-700">Tek bir çeyrek bir kesittir ve sektör payları çeyrekten çeyreğe değişir. Kaynak ülke rakamları çoğu zaman holding yapılarını yansıtır; yani doğrudan yatırımcının ülkesi nihai sahibinkinden farklı olabilir.</p></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. Hükümet Politikası Nereyi İşaret Ediyor?</h2><p className="mb-6 text-lg leading-9 text-gray-700">Türkiye&apos;nin 2024-2028 UDY Stratejisi şu öncelikleri sayıyor:</p><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Yeşil ve sürdürülebilir yatırımlar</li><li>Dijital dönüşüm ve ileri teknolojiler</li><li>Tedarik zinciri kaydırma projeleri</li><li>Yüksek istihdam ve yüksek katma değer sağlayan yatırımlar</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">2026 vergi düzenlemeleri aynı mantığı izliyor: 2027&apos;den itibaren imalatçılara %12,5 oran, nitelikli hizmet ihracatında (yazılım, mühendislik, tasarım, veri hizmetleri ve diğerleri) %100 indirim ve bölgesel merkezler için Nitelikli Hizmet Merkezi rejimi (<Link href="/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci" className="font-semibold text-orange-600 underline">vergi paketi</Link>, <Link href="/blog/turkiyede-bolgesel-yonetim-merkezi-nitelikli-hizmet-merkezi-2026" className="font-semibold text-orange-600 underline">bölgesel yönetim merkezi</Link>).</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. Türkiye Zaten Nerede İhracat Yapıyor?</h2><p className="mb-6 text-lg leading-9 text-gray-700">2025&apos;te Türkiye&apos;nin mal ihracatı rekor 273,4 milyar dolara ulaştı. Otomotiv 41,5 milyar dolarla başı çekti; kimya (31,9 milyar dolar) ve elektrik-elektronik (17,7 milyar dolar) izledi. Mevcut güç, bu zincirlere yeni girenler için tedarikçi ağlarının, nitelikli iş gücünün ve lojistiğin hazır olması demek.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Seçim İçin Basit Bir Yol</h2><ol className="ml-6 list-decimal space-y-4 text-lg text-gray-700 marker:font-bold marker:text-orange-500"><li><strong>Müşterilerden başlayın:</strong> Türkiye&apos;ye mi, Avrupa&apos;ya mı, Orta Doğu veya Afrika&apos;ya mı, yoksa kendi grubunuza mı satıyorsunuz?</li><li><strong>Yapıyı eşleştirin:</strong> ihracatçı imalat serbest bölgeye veya %12,5 orana; yazılım ve mühendislik hizmetleri hizmet ihracatı indirimine; grup işlevleri Nitelikli Hizmet Merkezi&apos;ne uyar (<Link href="/blog/turkiyede-serbest-bolgeler-2026-yabanci-yatirimci" className="font-semibold text-orange-600 underline">serbest bölgeler</Link>).</li><li><strong>Teşvikleri erken kontrol edin:</strong> teşvik belgesi başvurusu yatırım başlamadan önce yapılmalıdır (<Link href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026" className="font-semibold text-orange-600 underline">teşvik belgesi rehberi</Link>).</li><li><strong>Yabancı yöneticiler için insan ve izin planı yapın</strong> (<Link href="/blog/yabanci-ortak-calisma-izni-sartlari-2026" className="font-semibold text-orange-600 underline">çalışma izinleri</Link>).</li></ol></section>
      <section id="faq" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">5. Sık Sorulan Sorular</h2>
        <div className="space-y-6">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">{item.q}</h3>
              <p className="leading-8 text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">Sonuç</h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">İmalat, teknoloji ve ihracata bağlı hizmetler bugün kanıt ve politika desteğinin en güçlü birleştiği alanlar. Size uygun sektör yine müşterilerinizden, maliyet yapınızdan ve gerçekten hak kazanabileceğiniz teşvik yolundan çıkar.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık, projeniz için sektör kısa listesi çıkarmanıza ve her biri için doğru yapı ile teşvikleri eşleştirmenize yardımcı olabilir. <Link href="/#contact" className="font-semibold text-orange-600 underline">İletişime geçin</Link>.</p>
        <p className="mt-6 text-sm leading-7 text-gray-500">Ekim 2026 itibarıyla genel bilgilendirmedir; hukuki veya mali tavsiye değildir. İşlem yapmadan önce güncel kuralları ilgili kurumdan teyit edin.</p>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">İlgili Yazılar</h2>
        <div className="grid gap-6 md:grid-cols-2"><Link href="/blog/turkiyede-yatirim-yapmanin-avantajlari-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">GENEL BAKIŞ</div><h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;de Yatırım Yapmanın Avantajları 2026</h3></Link><Link href="/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">VERGİ TEŞVİKLERİ</div><h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;nin 2026 Yatırım Vergi Paketi</h3></Link></div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </BlogLayout>
  );
}
