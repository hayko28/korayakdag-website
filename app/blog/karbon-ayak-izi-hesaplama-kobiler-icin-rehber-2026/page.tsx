import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Karbon Ayak İzi Nasıl Hesaplanır? 2026 Rehberi | Koray Akdağ",
  description: "Kapsam 1/2/3 emisyon hesaplama adımları, CBAM sertifika maliyeti (~75€/tCO₂e), raporlama takvimi ve TSRS bağlantısıyla KOBİ'ler için pratik rehber.",
  keywords: [
    "karbon ayak izi nasıl hesaplanır",
    "CBAM raporlaması nasıl yapılır",
    "KOBİ karbon nötr olmalı mı",
    "karbon ayak izi hesaplama KOBİ",
    "CBAM sertifika fiyatı 2026",
    "kapsam 1 2 3 emisyon hesaplama",
    "SKDM gömülü emisyon hesaplama",
    "ISO 14064 karbon ayak izi",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Karbon Ayak İzi Hesaplama ve Raporlama: KOBİ'ler İçin 2026 Rehberi"
      description="AB'nin Sınırda Karbon Düzenlemesi Mekanizması (CBAM/SKDM) Ocak 2026'da kesin uygulama dönemine girdi. Çelik, alüminyum, çimento, gübre, elektrik ve hidrojen ihraç eden Türk KOBİ'lerin karbon ayak izini nasıl hesaplaması, hangi verileri toplaması ve nasıl raporlaması gerektiğini adım adım anlatan; Kapsam 1/2/3 emisyonlar, hesaplama metodolojisi, CBAM sertifika maliyeti ve TSRS bağlantısıyla pratik rehber."
      category="SÜRDÜRÜLEBİLİRLİK • KARBON AYAK İZİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="karbon-ayak-izi-hesaplama-kobiler-icin-rehber-2026"
      coverImage="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            1 Ocak 2026 itibarıyla Avrupa Birliği&apos;nin Sınırda Karbon
            Düzenlemesi Mekanizması (SKDM/CBAM) geçiş döneminden{" "}
            <strong>kesin uygulama dönemine</strong> geçti. Bu tarihten
            itibaren demir-çelik, alüminyum, çimento, gübre, elektrik ve
            hidrojen sektörlerinde AB&apos;ye ihracat yapan Türk üreticiler
            için &quot;karbon ayak izimi nasıl ölçerim&quot; sorusu, artık
            teorik bir sürdürülebilirlik başlığı değil; doğrudan maliyeti ve
            müşteri ilişkisini etkileyen operasyonel bir zorunluluk. Bu yazı,
            genel CBAM/TSRS yükümlülüklerini değil,{" "}
            <strong>karbon ayak izinin somut olarak nasıl hesaplandığını</strong>{" "}
            anlatıyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Karbon ayak izi nedir, Kapsam 1/2/3 emisyonlar ne demek?</li>
            <li>✔ Hesaplama adım adım nasıl yapılır (GHG Protokolü/ISO 14064)?</li>
            <li>✔ CBAM kapsamında gömülü emisyon hesabı nasıl işler?</li>
            <li>✔ CBAM sertifikası maliyeti ve raporlama takvimi</li>
            <li>✔ TSRS ile karbon ayak izi hesabı arasındaki bağlantı</li>
            <li>✔ KOBİ&apos;lerin karbon nötr olması gerekli mi?</li>
            <li>✔ Sık sorulan sorular</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Karbon Ayak İzi Nedir? Kapsam 1/2/3 Emisyonlar
            </Link>
            <Link href="#neden" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Neden 2026&apos;da Kritik? CBAM ve TSRS Kesişimi
            </Link>
            <Link href="#metodoloji" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Hesaplama Metodolojisi: Adım Adım
            </Link>
            <Link href="#cbam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. CBAM Özelinde Gömülü Emisyon Hesabı
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. CBAM Raporlama Takvimi ve Sertifika Maliyeti
            </Link>
            <Link href="#tsrs" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. TSRS ile Bağlantı: Aynı Veri, İki Farklı Amaç
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Hangi Şirketler İçin Öncelikli?
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. KOBİ İçin Adım Adım Uygulama Süreci
            </Link>
            <Link href="#karbonnotr" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. KOBİ Karbon Nötr Olmalı mı?
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              10. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              11. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              12. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. NEDİR */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Karbon Ayak İzi Nedir? Kapsam 1/2/3 Emisyonlar
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Karbon ayak izi, bir şirketin faaliyetleri sonucunda atmosfere
            salınan sera gazlarının toplam miktarıdır ve karşılaştırılabilir
            olması için tüm gazlar &quot;ton karbondioksit eşdeğeri&quot;
            (tCO₂e) birimine çevrilerek ifade edilir. Uluslararası kabul gören{" "}
            <strong>GHG Protokolü (Greenhouse Gas Protocol)</strong>{" "}
            çerçevesi, bir şirketin emisyonlarını üç kapsama ayırır. Bu
            ayrım, hem TSRS raporlamasının hem de CBAM beyanlarının ortak
            dili olduğu için doğru anlaşılması kritik önemdedir.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kapsam</th>
                  <th className="p-5">Tanım</th>
                  <th className="p-5">Örnek Kaynaklar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kapsam 1<br />(Doğrudan)</td>
                  <td className="p-5">Şirketin doğrudan sahip olduğu veya kontrol ettiği kaynaklardan salınan emisyonlar</td>
                  <td className="p-5">Fabrika kazanları, doğal gaz yakma, şirket araçları, kaçak soğutucu gaz salımı, proses emisyonları (ör. çimento/klinker üretimi)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kapsam 2<br />(Dolaylı-Enerji)</td>
                  <td className="p-5">Satın alınan elektrik, ısı veya buhar üretiminden kaynaklanan emisyonlar</td>
                  <td className="p-5">Şebekeden çekilen elektrik, satın alınan buhar/soğutma</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Kapsam 3<br />(Değer Zinciri)</td>
                  <td className="p-5">Şirketin değer zincirinde, doğrudan kontrolü dışında oluşan tüm diğer emisyonlar</td>
                  <td className="p-5">Satın alınan hammadde ve girdilerin gömülü emisyonu, lojistik/nakliye, çalışan ulaşımı, ürünün kullanım/bertaraf aşaması</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-10 rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              🔄 Hesaplamanın Genel Akışı
            </h3>
            <svg viewBox="0 0 760 150" className="w-full" role="img" aria-label="Karbon ayak izi hesaplama akış şeması">
              <defs>
                <marker id="cfArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#f97316" />
                </marker>
              </defs>
              <rect x="4" y="35" width="170" height="70" rx="12" fill="#071A2F" />
              <text x="89" y="63" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Sınır Belirleme</text>
              <text x="89" y="83" textAnchor="middle" fill="#cbd5e1" fontSize="11">Kapsam 1/2/(3)</text>

              <line x1="180" y1="70" x2="216" y2="70" stroke="#f97316" strokeWidth="3" markerEnd="url(#cfArrow)" />

              <rect x="222" y="35" width="150" height="70" rx="12" fill="#0f2f4f" />
              <text x="297" y="63" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Faaliyet Verisi</text>
              <text x="297" y="83" textAnchor="middle" fill="#cbd5e1" fontSize="11">Fatura, sayaç, üretim kaydı</text>

              <line x1="378" y1="70" x2="414" y2="70" stroke="#f97316" strokeWidth="3" markerEnd="url(#cfArrow)" />

              <rect x="420" y="35" width="150" height="70" rx="12" fill="#0f2f4f" />
              <text x="495" y="63" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Emisyon Faktörü</text>
              <text x="495" y="83" textAnchor="middle" fill="#cbd5e1" fontSize="11">IPCC / ulusal / şebeke</text>

              <line x1="576" y1="70" x2="612" y2="70" stroke="#f97316" strokeWidth="3" markerEnd="url(#cfArrow)" />

              <rect x="618" y="35" width="140" height="70" rx="12" fill="#f97316" />
              <text x="688" y="63" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">tCO₂e</text>
              <text x="688" y="83" textAnchor="middle" fill="#fff7ed" fontSize="11">Doğrulama + Rapor</text>

              <text x="380" y="135" textAnchor="middle" fill="#475569" fontSize="12">
                Emisyon (tCO₂e) = Faaliyet Verisi × Emisyon Faktörü × Küresel Isınma Potansiyeli
              </text>
            </svg>
          </div>
        </section>

        {/* 2. NEDEN */}
        <section id="neden" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Neden 2026&apos;da Kritik? CBAM ve TSRS Kesişimi
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Karbon ayak izi hesaplaması yıllardır var olan bir kavram; ancak
            2026, iki ayrı düzenlemenin aynı anda devreye girmesiyle Türk
            KOBİ&apos;ler için gerçek bir dönüm noktasına dönüştü:
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🌍 CBAM (SKDM) — Kesin Dönem
              </h3>
              <p className="leading-8 text-gray-700">
                AB&apos;nin Sınırda Karbon Düzenlemesi Mekanizması, 2023-2025
                geçiş döneminde yalnızca raporlama gerektiriyordu.{" "}
                <strong>1 Ocak 2026&apos;dan itibaren kesin (definitive)
                döneme geçildi</strong>: demir-çelik, alüminyum, çimento,
                gübre, elektrik ve hidrojen ürünlerinin AB&apos;ye ithalatı
                için gömülü karbon emisyonuna dayalı mali yükümlülük
                doğuyor. Türk üreticinin görevi, bu hesaba temel oluşturan
                doğru ve doğrulanabilir emisyon verisini sağlamak.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                📊 TSRS — Güvence Denetimi Dönemi
              </h3>
              <p className="leading-8 text-gray-700">
                Belirli eşik değerlerini aşan şirketler için{" "}
                <Link href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026" className="font-semibold text-orange-600 hover:underline">
                  TSRS sürdürülebilirlik raporlaması
                </Link>{" "}
                artık bağımsız güvence denetimine tabi. Bu raporun iklim
                bölümü de aynı Kapsam 1/2/3 emisyon envanterine dayanıyor.
                Yani bir şirketin doğru kurduğu tek bir emisyon veri
                altyapısı, hem TSRS raporunu hem CBAM beyanını besleyebilir.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              💡 Kapsam Dışındaki Şirketler İçin de Geçerli Bir Gerçek
            </h3>
            <p className="leading-8 text-gray-700">
              CBAM veya TSRS eşiklerinin altında kalan bir KOBİ dahi, AB&apos;ye
              ihracat yapan bir ana sanayinin tedarikçisiyse ürün bazında
              emisyon verisi talebiyle karşılaşabilir. Karbon ayak izini
              önceden ölçen şirket, bu talebe hazırlıklı yakalanır; ölçmeyen
              şirket ise ihracat sözleşmesi aşamasında zaman baskısı altında
              kalır.
            </p>
          </div>
        </section>

        {/* 3. METODOLOJİ */}
        <section id="metodoloji" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Hesaplama Metodolojisi: Adım Adım
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Karbon ayak izi hesaplaması, uluslararası kabul görmüş{" "}
            <strong>GHG Protokolü Kurumsal Standardı</strong> ve{" "}
            <strong>ISO 14064-1</strong> (organizasyonel sera gazı envanteri)
            standardına dayanır. Ürün bazında hesaplama yapılacaksa (örneğin
            CBAM beyanı için) <strong>ISO 14067</strong> ürün karbon ayak izi
            metodolojisi referans alınır. Süreç aşağıdaki adımları izler:
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📐</div>
              <h3 className="text-xl font-bold">1. Organizasyonel Sınır</h3>
              <p className="mt-3 text-sm text-gray-600">
                Operasyonel kontrol, finansal kontrol veya öz sermaye payı
                yaklaşımlarından biri seçilerek hangi tesis/faaliyetlerin
                envantere dahil edileceği belirlenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧭</div>
              <h3 className="text-xl font-bold">2. Faaliyet Sınırı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Kapsam 1 ve 2 zorunlu; Kapsam 3, TSRS ve CBAM gibi dış
                talepler varsa devreye girer. Hangi emisyon kaynaklarının
                (yakıt, elektrik, filo, girdi malzemesi) dahil olacağı
                netleştirilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🗂️</div>
              <h3 className="text-xl font-bold">3. Faaliyet Verisi Toplama</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yakıt tüketimi (fatura/sayaç), elektrik tüketimi, üretim
                miktarı, hammadde girdisi ve lojistik verileri kayıt altına
                alınır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧮</div>
              <h3 className="text-xl font-bold">4. Emisyon Faktörü Uygulama</h3>
              <p className="mt-3 text-sm text-gray-600">
                Her faaliyet verisi, IPCC/ulusal envanter veya elektrik
                şebekesi ortalama emisyon faktörüyle çarpılarak tCO₂e&apos;ye
                çevrilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔎</div>
              <h3 className="text-xl font-bold">5. Doğrulama</h3>
              <p className="mt-3 text-sm text-gray-600">
                Hesaplanan envanter, ISO 14064-3 esaslı çalışan akredite
                bağımsız bir doğrulayıcı kuruluş tarafından teyit edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📤</div>
              <h3 className="text-xl font-bold">6. Raporlama</h3>
              <p className="mt-3 text-sm text-gray-600">
                Envanter; CBAM beyan şablonu, TSRS raporu veya CDP gibi
                talep eden tarafın formatına uyarlanarak sunulur.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🔢 Basit Bir Örnek
            </h3>
            <p className="leading-8 text-gray-700">
              Bir üretim tesisi yılda 500.000 kWh şebeke elektriği tüketiyorsa,
              bu tüketim Türkiye elektrik şebekesinin o yıl için yayımlanan{" "}
              <strong>ortalama emisyon faktörü</strong> (Enerji ve Tabii
              Kaynaklar Bakanlığı/TEİAŞ tarafından her yıl güncellenir) ile
              çarpılarak Kapsam 2 emisyonu bulunur. Doğal gaz yakan bir
              kazanın emisyonu ise, tüketilen gaz miktarının (m³ veya kWh)
              ilgili yakıt emisyon faktörüyle çarpılmasıyla hesaplanır.
              Somut faktör değerleri yıldan yıla güncellendiği için, her
              hesaplamada ilgili raporlama yılına ait <strong>güncel resmî
              faktörün</strong> kullanılması gerekir.
            </p>
          </div>
        </section>

        {/* 4. CBAM */}
        <section id="cbam" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. CBAM Özelinde Gömülü Emisyon Hesabı
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            CBAM, genel kurumsal karbon ayak izinden farklı olarak,{" "}
            <strong>ürün bazında &quot;gömülü emisyon&quot;</strong>{" "}
            (embedded emissions) hesabı ister. Gömülü emisyon, bir ürünün
            üretim sürecindeki doğrudan emisyonlar ile üretimde kullanılan
            elektriğin (Kapsam 2) ve gömülü emisyona sahip girdi
            malzemelerinin (örneğin nihai üründe kullanılan yarı mamul
            çelik veya alüminyum) emisyonlarını kapsar.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Sektör</th>
                  <th className="p-5">CBAM Kapsamındaki Ürün Grubu</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Demir-Çelik</td>
                  <td className="p-5">Ham demir, çelik ürünleri, belirli demir-çelik mamulleri</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Alüminyum</td>
                  <td className="p-5">Ham alüminyum ve belirli alüminyum ürünleri</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Çimento</td>
                  <td className="p-5">Çimento, klinker</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Gübre</td>
                  <td className="p-5">Azotlu gübreler ve bazı kimyasal girdiler</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Elektrik</td>
                  <td className="p-5">AB&apos;ye ihraç edilen elektrik enerjisi</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Hidrojen</td>
                  <td className="p-5">Hidrojen ve bazı türevleri</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ⚠️ 2026&apos;dan İtibaren Değişen Kural
              </h3>
              <p className="leading-8 text-gray-700">
                Geçiş döneminde (2023-2025) üreticiler, kendi gerçek verileri
                yerine AB&apos;nin yayımladığı yüksek <strong>varsayılan
                (default) değerleri</strong> nispeten serbestçe
                kullanabiliyordu. Kesin dönemde (2026 ve sonrası) kural
                sıkılaştı: beyan artık öncelikle tesise özgü{" "}
                <strong>gerçek ve doğrulanmış veriye</strong> dayanmalı;
                varsayılan değerlerin kullanımı yalnızca sınırlı ve
                istisnai durumlarla kısıtlandı. Kendi gerçek verisini
                sunamayan bir üretici için, AB ithalatçısı yüksek
                varsayılan değerler üzerinden maliyetlendirilme riskiyle
                karşı karşıya kalır.
              </p>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Türk Üreticinin Somut Görevi
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Ürün bazında Kapsam 1 ve elektrik kaynaklı Kapsam 2 emisyonunu hesaplamak</li>
                <li>✔ Kullanılan girdi malzemelerinin (ör. yarı mamul metal) gömülü emisyonunu tedarikçiden temin etmek</li>
                <li>✔ Veriyi CBAM iletişim şablonuna (communication template) uygun formatta AB&apos;deki alıcıya/ithalatçıya iletmek</li>
                <li>✔ Talep halinde veriyi bağımsız doğrulamaya hazır tutmak</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. TAKVİM */}
        <section id="takvim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. CBAM Raporlama Takvimi ve Sertifika Maliyeti
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            CBAM&apos;in mali yükü doğrudan AB&apos;deki ithalatçı üzerinde
            oluşur; ancak maliyetin büyüklüğü, tamamen Türk üreticinin
            sağladığı emisyon verisinin kalitesine bağlıdır. Takvim üç
            aşamada ilerliyor:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Dönem</th>
                  <th className="p-5">Tarih</th>
                  <th className="p-5">Yükümlülük</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Geçiş Dönemi</td>
                  <td className="p-5">Ekim 2023 – Aralık 2025</td>
                  <td className="p-5">Yalnızca üç aylık raporlama; mali yükümlülük yok</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kesin Dönem Başlangıcı</td>
                  <td className="p-5">1 Ocak 2026</td>
                  <td className="p-5">Gerçek veri esaslı gömülü emisyon hesabı zorunlu; yetkili CBAM beyan sahibi statüsü gerekli</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Sertifika Alım Başlangıcı</td>
                  <td className="p-5">Şubat 2027</td>
                  <td className="p-5">2026 yılı ithalatına karşılık gelen CBAM sertifikaları geriye dönük olarak satın alınmaya başlanır</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">İlk Yıllık Beyan</td>
                  <td className="p-5">30 Eylül 2027&apos;ye kadar</td>
                  <td className="p-5">2026 yılına ait gömülü emisyon ve teslim edilen sertifika miktarının resmî beyanı</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              💶 Sertifika Fiyatı Ne Kadar?
            </h3>
            <p className="leading-8 text-gray-700">
              CBAM sertifikasının fiyatı sabit değildir; AB Emisyon Ticaret
              Sistemi&apos;ndeki (AB ETS) haftalık ortalama açık artırma
              fiyatlarına endekslenerek <strong>üç ayda bir</strong> Avrupa
              Komisyonu tarafından güncellenir. 2026&apos;nın ilk çeyreğinde
              sertifika fiyatı yaklaşık <strong>75,36 €/tCO₂e</strong>,
              ikinci çeyreğinde ise yaklaşık <strong>75,28 €/tCO₂e</strong>{" "}
              olarak açıklandı. Bu, ürün başına gömülü emisyonun her bir
              tonunun AB pazarında bu bedelle fiyatlandığı anlamına gelir —
              rakam ihracat fiyatlandırmasında dikkate alınması gereken
              somut bir maliyet kalemidir. Güncel çeyreklik fiyat, Avrupa
              Komisyonu&apos;nun resmî CBAM sayfasından takip edilmelidir.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🧾 Türkiye&apos;de Ödenen Karbon Bedeli Mahsup Edilebilir
            </h3>
            <p className="leading-8 text-gray-700">
              CBAM&apos;in kritik özelliği: menşe ülkede fiilen ödenmiş bir
              karbon fiyatı varsa, bu tutar AB&apos;de ödenecek CBAM
              bedelinden mahsup edilir. Türkiye&apos;de yürürlüğe giren{" "}
              <Link href="/blog/turkiye-emisyon-ticaret-sistemi-ets-yonetmeligi-2026" className="font-semibold text-orange-600 hover:underline">
                Emisyon Ticaret Sistemi (ETS)
              </Link>{" "}
              kapsamında bir tesis karbon bedeli öderse, bu tutar AB&apos;ye
              gidecek bedelden düşülebilir. Bu nedenle iki sistemin veri
              altyapısını ayrı ayrı değil, tek bir emisyon envanteri üzerinden
              kurgulamak hem maliyeti hem operasyonel yükü azaltır.
            </p>
          </div>
        </section>

        {/* 6. TSRS BAĞLANTISI */}
        <section id="tsrs" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. TSRS ile Bağlantı: Aynı Veri, İki Farklı Amaç
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Karbon ayak izi hesaplaması tek başına bir amaca hizmet etmez;
            aynı emisyon envanteri farklı raporlama çerçevelerini besler.
            CBAM, ürün bazında ihracat maliyetini belirlerken;{" "}
            <Link href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026" className="font-semibold text-orange-600 hover:underline">
              TSRS (Türkiye Sürdürülebilirlik Raporlama Standartları)
            </Link>{" "}
            kurumsal düzeyde iklim riski ve etkisini şeffaf biçimde
            açıklamayı zorunlu kılar. İkisi arasındaki temel farklar şöyle
            özetlenebilir:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kriter</th>
                  <th className="p-5">CBAM</th>
                  <th className="p-5">TSRS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Hesap Birimi</td>
                  <td className="p-5">Ürün bazında gömülü emisyon</td>
                  <td className="p-5">Kurumsal düzeyde toplam Kapsam 1/2/3 envanteri</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Muhatap</td>
                  <td className="p-5">AB&apos;deki ithalatçı ve gümrük otoritesi</td>
                  <td className="p-5">Yatırımcılar, denetçiler, kamuoyu (KAP)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Sonucu</td>
                  <td className="p-5">Doğrudan mali yükümlülük (sertifika bedeli)</td>
                  <td className="p-5">Şeffaflık yükümlülüğü ve bağımsız güvence denetimi</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Ortak Nokta</td>
                  <td className="p-5" colSpan={2}>
                    İkisi de aynı GHG Protokolü/ISO 14064 esaslı emisyon
                    envanterine ve doğrulanabilir faaliyet verisine dayanır
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Pratik sonuç: bir şirket karbon ayak izini bir kez, doğru
            metodolojiyle ve doğrulanabilir şekilde hesapladığında, bu veri
            hem CBAM beyanına hem TSRS raporuna hem de{" "}
            <Link href="/blog/turkiye-emisyon-ticaret-sistemi-ets-yonetmeligi-2026" className="font-semibold text-orange-600 hover:underline">
              ETS yükümlülüğüne
            </Link>{" "}
            uyarlanabilir. Üç ayrı süreç için üç ayrı veri toplama çalışması
            yapmak, hem maliyeti hem tutarsızlık riskini gereksiz yere
            artırır.
          </p>
        </section>

        {/* 7. KİMLER */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Hangi Şirketler İçin Öncelikli?
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                🎯 Şimdi Hesaplamalı
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Demir-çelik, alüminyum, çimento, gübre üreten ve AB&apos;ye ihraç eden şirketler</li>
                <li>✔ CBAM kapsamındaki bir ürünü nihai üründe girdi olarak kullanıp AB&apos;ye satan üreticiler</li>
                <li>✔ ETS veya TSRS eşiklerine yaklaşan orta-büyük ölçekli sanayi tesisleri</li>
                <li>✔ AB&apos;ye ihracat yapan bir ana sanayinin tedarik zincirinde yer alan KOBİ&apos;ler</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                💡 Stratejik Avantaj İçin Değerlendirmeli
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Yeşil kredi/sürdürülebilirlik bağlantılı finansman arayan şirketler</li>
                <li>✔ İhale şartnamelerinde karbon verisi istenen kamu/özel sektör tedarikçileri</li>
                <li>✔ Marka değerini ve tedarik zinciri güvenilirliğini önceden güçlendirmek isteyen ihracatçılar</li>
                <li>✔ Şirket değerleme veya M&amp;A sürecine hazırlanan işletmeler</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. KOBİ İçin Adım Adım Uygulama Süreci
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Karbon ayak izi hesaplamasına hiç başlamamış bir KOBİ için makul
            ve gerçekçi bir yol haritası şu şekilde kurulabilir:
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">1️⃣</div>
              <h3 className="text-xl font-bold">Ön Değerlendirme</h3>
              <p className="mt-3 text-sm text-gray-600">
                CBAM/TSRS/ETS kapsamında olup olmadığınızı, hangi ürün ve
                pazarların ilgili olduğunu netleştirin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">2️⃣</div>
              <h3 className="text-xl font-bold">Veri Envanteri</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yakıt, elektrik, üretim ve girdi malzemesi verilerinizi en
                az son 12 aylık dönem için toplayın.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">3️⃣</div>
              <h3 className="text-xl font-bold">Hesaplama</h3>
              <p className="mt-3 text-sm text-gray-600">
                GHG Protokolü/ISO 14064 esaslı metodolojiyle Kapsam 1 ve 2
                emisyonlarınızı, gerekiyorsa Kapsam 3&apos;ü hesaplayın.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">4️⃣</div>
              <h3 className="text-xl font-bold">Tedarikçi Verisi</h3>
              <p className="mt-3 text-sm text-gray-600">
                CBAM kapsamındaki girdi malzemeleri için tedarikçilerinizden
                gömülü emisyon verisi talep edin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">5️⃣</div>
              <h3 className="text-xl font-bold">Doğrulama</h3>
              <p className="mt-3 text-sm text-gray-600">
                Envanterinizi akredite bir doğrulayıcı kuruluşa
                inceletebilecek şekilde belgelendirin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">6️⃣</div>
              <h3 className="text-xl font-bold">Raporlama ve Paylaşım</h3>
              <p className="mt-3 text-sm text-gray-600">
                Veriyi CBAM iletişim şablonu, TSRS raporu veya
                müşteri/tedarik zinciri talebine uygun formatta iletin.
              </p>
            </div>
          </div>
        </section>

        {/* 9. KARBON NÖTR */}
        <section id="karbonnotr" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. KOBİ Karbon Nötr Olmalı mı?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Bu, karbon ayak izi hesaplamasına yeni başlayan şirketlerin en
            sık karıştırdığı iki kavramdan biridir: <strong>karbon ayak
            izini ölçmek</strong> ile <strong>karbon nötr olmak</strong> aynı
            şey değildir.
          </p>
          <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">
            <li>
              <strong>Karbon ayak izi ölçümü</strong>, CBAM ve TSRS gibi
              düzenlemelerin gerektirdiği; şirketin mevcut durumunu ortaya
              koyan, çoğu KOBİ için giderek daha fazla fiilen zorunlu hâle
              gelen bir adımdır.
            </li>
            <li>
              <strong>Karbon nötr olmak</strong> (sıfır net emisyon iddiası),
              genellikle kalan emisyonların karbon kredisi/offset ile
              dengelenmesini içerir ve mevcut mevzuatta çoğu KOBİ için yasal
              bir zorunluluk değildir.
            </li>
          </ul>
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🎯 Gerçekçi Öncelik Sırası
            </h3>
            <p className="leading-8 text-gray-700">
              Bir KOBİ için doğru sıralama genellikle şudur: önce doğru ve
              doğrulanabilir bir emisyon envanteri kurmak; ardından enerji
              verimliliği ve proses iyileştirmesiyle emisyonu azaltmak;
              karbon nötr/net sıfır hedefini ise ancak azaltım potansiyeli
              tükendikten sonra, ölçülebilir ve iddiasını destekleyecek
              veriyle birlikte gündeme almak. Ölçmeden önce &quot;karbon
              nötrüz&quot; iddiasında bulunmak, hem itibar riski hem de
              yanıltıcı reklam/greenwashing riski taşır.
            </p>
          </div>
        </section>

        {/* 10. DİKKAT */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>
                Emisyon faktörleri (elektrik şebekesi, yakıt türleri) her yıl
                güncellenir; önceki yılın faktörünü kullanmak hesaplamayı
                geçersiz kılabilir.
              </li>
              <li>
                CBAM&apos;de <strong>varsayılan değerlerle</strong>{" "}
                &quot;idare etmek&quot; kısa vadede kolay görünse de, kesin
                dönemde bu yaklaşım genellikle daha yüksek maliyete yol
                açar; gerçek veriye erken geçmek rekabet avantajı sağlar.
              </li>
              <li>
                Tedarikçiden gömülü emisyon verisi talep etmek zaman alır;
                bu süreç ihracat sözleşmesi imzalanmadan çok önce
                başlatılmalıdır.
              </li>
              <li>
                Karbon ayak izi hesaplaması ile karbon nötr/net sıfır iddiası
                birbirine karıştırılmamalı; doğrulanamayan iddialar
                yanıltıcı reklam riski taşır.
              </li>
              <li>
                CBAM, ETS ve TSRS&apos;in güncel yükümlülük ve tarihleri
                sıkça değişebiliyor; şirketinizi doğrudan bağlayan bir karar
                almadan önce Avrupa Komisyonu&apos;nun resmî CBAM sayfası,
                T.C. Ticaret Bakanlığı ve KGK&apos;nın güncel duyuruları esas
                alınmalıdır.
              </li>
            </ul>
          </div>
        </section>

        {/* 11. SSS */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            11. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Karbon ayak izi nasıl hesaplanır, en basit anlatımla?
              </h3>
              <p className="leading-8 text-gray-700">
                Kullanılan enerji/yakıt miktarı (faaliyet verisi), ilgili
                emisyon faktörüyle çarpılır ve sonuç ton karbondioksit
                eşdeğerine (tCO₂e) çevrilir. Kapsam 1 (doğrudan), Kapsam 2
                (satın alınan enerji) ve gerekiyorsa Kapsam 3 (değer zinciri)
                için ayrı ayrı hesaplanan bu değerler toplanarak toplam
                karbon ayak izi elde edilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                CBAM raporlaması nasıl yapılır?
              </h3>
              <p className="leading-8 text-gray-700">
                Türk üretici, ürün bazında Kapsam 1 ve elektrik kaynaklı
                Kapsam 2 emisyonunu ve varsa girdi malzemelerinin gömülü
                emisyonunu hesaplayıp AB&apos;deki CBAM beyan sahibi
                ithalatçıya CBAM iletişim şablonu formatında iletir.
                İthalatçı bu veriyle yıllık beyanını hazırlar ve karşılık
                gelen sertifikayı teslim eder. Türk üreticinin kendisi
                doğrudan AB&apos;ye beyan vermez; ancak beyanın doğruluğu
                tamamen kendi sağladığı veriye bağlıdır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                KOBİ karbon nötr olmalı mı?
              </h3>
              <p className="leading-8 text-gray-700">
                Çoğu KOBİ için karbon nötr olmak yasal bir zorunluluk değil.
                Öncelik, doğru ve doğrulanabilir bir emisyon ölçümü
                yapmaktır; karbon nötr/net sıfır hedefi ise stratejik bir
                tercih olarak, ölçülmüş veri ve gerçekçi bir azaltım
                planına dayanarak değerlendirilmelidir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Karbon ayak izi hesaplaması ile TSRS raporu aynı şey mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Karbon ayak izi hesaplaması bir veri üretim
                sürecidir; TSRS ise bu verinin (iklim etkisi, risk ve
                fırsatlarla birlikte) kurumsal düzeyde ve bağımsız güvence
                denetimine tabi şekilde açıklanmasını gerektiren bir
                raporlama çerçevesidir. TSRS raporunun iklim bölümü,
                karbon ayak izi hesaplamasının çıktısını kullanır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Hesaplamayı kendi içimizde mi yapmalıyız, dışarıdan destek mi almalıyız?
              </h3>
              <p className="leading-8 text-gray-700">
                Basit bir ön envanter kurum içinde başlatılabilir; ancak
                CBAM beyanına veya TSRS güvence denetimine esas teşkil
                edecek hesaplamanın metodolojik olarak doğru kurulması ve
                doğrulamaya hazır belgelendirilmesi, uygulamalı deneyim
                gerektirir. Yanlış kurulan bir metodoloji, ilerleyen
                dönemde yeniden çalışma maliyetine yol açar.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Karbon Ayak İzi Hesaplama ve Raporlama Sürecinde Destek
            </h3>
            <p className="leading-8 text-gray-700">
              Şirketinizin ürün bazında gömülü emisyon hesabını CBAM
              beyanına, kurumsal emisyon envanterini TSRS raporuna hazır
              hâle getirmek, doğru metodolojiyle kurulmuş ve doğrulamaya
              dayanıklı bir süreç gerektirir.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Şirketinizin karbon ayak izi hesaplama ihtiyacını
                değerlendirmemiz için bizimle iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* 12. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            12. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            2026, CBAM&apos;in kesin uygulama dönemine girmesiyle Türk
            ihracatçılar için karbon ayak izini &quot;bir gün ölçeriz&quot;
            denilen bir başlıktan, doğrudan ihracat maliyetini ve müşteri
            ilişkisini etkileyen somut bir sürece dönüştürdü. Doğru kurulan
            tek bir emisyon veri altyapısı; CBAM beyanını, TSRS raporunu ve{" "}
            <Link href="/blog/turkiye-emisyon-ticaret-sistemi-ets-yonetmeligi-2026" className="font-semibold text-orange-600 hover:underline">
              ETS yükümlülüğünü
            </Link>{" "}
            aynı anda besleyebilir; bu da hem maliyeti hem operasyonel yükü
            azaltır.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin karbon ve su ayak izi hesaplaması, CBAM&apos;e
            uygun gömülü emisyon veri altyapısının kurulması, TSRS
            raporlaması ve güvence denetimi süreçlerinde Koray Akdağ /
            Sistem Global Danışmanlık olarak yanınızdayız. Ayrı ayrı
            danışmanlık veya raporlama firmalarıyla çalışmanıza gerek
            kalmadan; kapsam analizinden veri toplama sürecine, hesaplama
            metodolojisinden CBAM/TSRS raporlama ve sonrasındaki muhasebe
            süreçlerine kadar tüm süreci tek noktadan yürütebiliriz.
            Şirketinizin karbon yol haritasını birlikte değerlendirmek için
            bizimle iletişime geçebilirsiniz.
          </p>
        </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • TSRS • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">TSRS Sürdürülebilirlik Raporlama Zorunluluğu 2026</h3>
        </Link>
        <Link
          href="/blog/turkiye-emisyon-ticaret-sistemi-ets-yonetmeligi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • KARBON & ETS • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Türkiye Emisyon Ticaret Sistemi (ETS) Yönetmeliği</h3>
        </Link>
        <Link
          href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri (2026 Rehberi)</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
