import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Stratejik İş Ortaklığı ve Ortak Girişim (JV) Nasıl Kurulur? | Koray Akdağ",
  description: "Stratejik iş ortaklığı ile ortak girişim (joint venture) arasındaki fark, TTK/TBK çerçevesinde ortaklık sözleşmesi unsurları, 2026 güncel Rekabet Kurulu ciro eşikleri ve adım adım kuruluş süreciyle kapsamlı rehber.",
  keywords: [
    "stratejik iş ortaklığı nedir",
    "ortak girişim nedir",
    "joint venture nasıl kurulur",
    "ortak girişim sözleşmesi",
    "JV sözleşmesi unsurları",
    "rekabet kurulu izni ortak girişim",
    "ortak girişim ciro eşikleri 2026",
    "konsorsiyum ortak girişim farkı",
    "yabancı ortaklı şirket kurma",
    "stratejik ortaklık danışmanlığı",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Stratejik İş Ortaklığı ve Ortak Girişim (Joint Venture) Modelleri Nasıl Kurulur?"
      description="İki şirketin güçlerini birleştirmesi her zaman yeni bir şirket kurmayı gerektirmez. Stratejik iş ortaklığı ile ortak girişim (joint venture) arasındaki fark, doğru sözleşme unsurları, 2026 güncel Rekabet Kurulu izin eşikleri ve ortaklıkların neden dağıldığına dair kapsamlı rehber."
      category="STRATEJİK İŞ ORTAKLIKLARI • ORTAK GİRİŞİM • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="stratejik-is-ortakligi-ortak-girisim-joint-venture-nasil-kurulur"
      coverImage="https://images.unsplash.com/photo-1752737050681-a2756917304b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Stratejik Ortaklık ve Ortak Girişim Nasıl Kurulur?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>Stratejik iş ortaklığı</strong>, ayrı bir şirket kurmadan iki firmanın belirli bir amaç için sözleşmeyle iş birliği yapmasıdır. <strong>Ortak girişim (joint venture/JV)</strong> ise genellikle yeni bir anonim/limited şirket kurularak veya adi ortaklık/konsorsiyum şeklinde sözleşmeyle oluşturulan, daha kalıcı bir ortaklık yapısıdır.</li>
          <li>✔ Türk hukukunda JV&apos;yi doğrudan düzenleyen ayrı bir kanun yok. Sözleşmesel ortak girişimler <strong>Türk Borçlar Kanunu (TBK) m.620 vd.</strong> kapsamındaki adi ortaklık hükümlerine, şirketli ortak girişimler ise <strong>Türk Ticaret Kanunu&apos;na</strong> tabidir.</li>
          <li>✔ 11 Şubat 2026&apos;da yürürlüğe giren <strong>2026/2 sayılı Tebliğ</strong> ile Rekabet Kurulu bildirim eşikleri yükseltildi: taraflardan en az ikisinin Türkiye cirosu ayrı ayrı <strong>1 milyar TL&apos;yi</strong>, toplam Türkiye cirosu ise <strong>3 milyar TL&apos;yi</strong> aşarsa &quot;tam işlevsel&quot; ortak girişimler Kurul iznine tabi olur.</li>
          <li>✔ Hedef şirket bir <strong>teknoloji teşebbüsü</strong> ise bu eşik <strong>250 milyon TL&apos;ye</strong> düşer.</li>
          <li>✔ Yabancı ortaklı ortak girişimlerde <strong>4875 sayılı Doğrudan Yabancı Yatırımlar Kanunu</strong> gereği yabancı yatırımcı Türk yatırımcıyla eşit muamele görür; genel kural olarak ayrı bir &quot;yabancı sermaye izni&quot; aranmaz.</li>
          <li>✔ Ortaklıkların en sık dağılma nedeni; sözleşmede <strong>çıkış (exit) senaryosu</strong>, <strong>anlaşmazlık çözümü/tahkim maddesi</strong> ve <strong>fikri mülkiyet paylaşımının</strong> eksik bırakılmasıdır.</li>
          <li>✔ Doğru kurgulanmış bir stratejik ortaklık; yeni pazara girişte, ortak Ar-Ge projelerinde ve sermaye/teknoloji birleştirmede büyümeyi hızlandıran, göreli olarak düşük riskli bir yöntemdir.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#fark" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Stratejik İş Ortaklığı mı, Ortak Girişim mi?
          </Link>
          <Link href="#yollar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Ortak Girişim Kurmanın İki Yolu
          </Link>
          <Link href="#sozlesme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Ortaklık Sözleşmesinde Olması Gereken Unsurlar
          </Link>
          <Link href="#rekabet-kurulu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Rekabet Kurulu İzni: 2026 Güncel Eşikler
          </Link>
          <Link href="#yabanci-ortakli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Yabancı Ortaklı Ortak Girişimlerde Dikkat Noktaları
          </Link>
          <Link href="#basarisiz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Ortaklıklar Neden Başarısız Oluyor?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Kimler İçin Uygun?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Adım Adım Kuruluş Süreci
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. FARK */}
      <section id="fark" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Stratejik İş Ortaklığı mı, Ortak Girişim mi?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Büyümek isteyen bir şirket için &quot;ortaklık kurmak&quot; genellikle
          tek bir kalıba sokulur, ama aslında birbirinden oldukça farklı iki
          yapıdan söz ediyoruz. Stratejik iş ortaklığı, iki şirketin ayrı
          tüzel kişiliklerini koruyarak, belirli bir amaç için (ortak
          pazarlama, ortak distribütörlük, teknoloji paylaşımı, çapraz satış
          gibi) sözleşmeyle iş birliği yapmasıdır. Yeni bir şirket kurulmaz;
          ilişki, tarafların imzaladığı bir iş birliği sözleşmesiyle
          yürütülür.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Ortak girişim (joint venture, kısaca JV) ise daha kalıcı ve daha
          bağlayıcı bir yapıdır. Taraflar, ortak bir ekonomik amaç için
          sermayelerini, emeklerini veya varlıklarını fiilen birleştirir.
          Bu birleşme, ya yeni bir tüzel kişilik (anonim veya limited
          şirket) kurularak ya da tüzel kişilik kurmadan sadece sözleşmeyle
          (adi ortaklık/konsorsiyum) gerçekleştirilir. Aradaki temel fark
          şu: stratejik ortaklıkta taraflar birbirinin müşterisi/tedarikçisi
          gibi davranmaya devam ederken, ortak girişimde taraflar ortak bir
          kâr/zarar havuzunda buluşur.
        </p>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Stratejik Ortaklık ile Ortak Girişim (JV)
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Stratejik İş Ortaklığı:</strong> Ayrı tüzel kişilik kurulmaz. İlişki bir sözleşmeyle (distribütörlük, lisans, ortak pazarlama, teknoloji paylaşım sözleşmesi gibi) yürütülür. Taraflar kendi bilançolarını, kendi vergi mükellefiyetlerini korur. Çıkış görece kolaydır; sözleşme feshedilir.</li>
            <li><strong>Ortak Girişim (Joint Venture):</strong> Taraflar sermaye, emek veya varlık birleştirir. Genellikle yeni bir şirket kurulur veya adi ortaklık/konsorsiyum kurulur. Kâr/zarar ortaklaşa paylaşılır, yönetim ortak yürütülür. Çıkış, hisse devri veya tasfiye gerektirdiğinden daha karmaşıktır.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Pratikte iki yapı da birbirine dönüşebilir: bir stratejik
            ortaklık zamanla olgunlaşıp ortak girişime evrilebilir, ya da bir
            ortak girişim başarısız olup taraflar tekrar bağımsız birer
            stratejik ortağa dönebilir. Hangi yapının seçileceği, işin
            süresine, taraflar arasındaki güven düzeyine ve ne kadar sermaye/
            risk paylaşılacağına bağlıdır.
          </p>
        </div>
      </section>

      {/* 2. İKİ YOL */}
      <section id="yollar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Ortak Girişim Kurmanın İki Yolu
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de ortak girişimi hukuken tek başına düzenleyen bağımsız
          bir kanun yok. Bunun yerine, seçilen modele göre farklı kanun
          hükümleri devreye giriyor. Uygulamada iki temel model var:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Model</th>
                <th className="p-5">Nasıl Kurulur?</th>
                <th className="p-5">Uygulanan Hukuk</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Şirketli Ortak Girişim</td>
                <td className="p-5">Taraflar, ortaklığın faaliyet göstereceği yeni bir anonim veya limited şirket kurar. Ortaklar pay sahibi olur, yönetim şirket organları (yönetim kurulu/müdürler kurulu) üzerinden yürütülür.</td>
                <td className="p-5">Türk Ticaret Kanunu (TTK) + ortaklar arası pay sahipleri sözleşmesi (shareholders&apos; agreement)</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Sözleşmesel Ortak Girişim / Konsorsiyum</td>
                <td className="p-5">Ayrı bir tüzel kişilik kurulmaz. Taraflar, belirli bir işi (proje, ihale, üretim) birlikte yürütmeyi bir ortaklık sözleşmesiyle taahhüt eder.</td>
                <td className="p-5">Türk Borçlar Kanunu (TBK) m.620 vd. - Adi Ortaklık hükümleri</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Sözleşmesel modelin kendi içinde de bir ayrım var: <strong>klasik
          iş ortaklığında (JV)</strong> taraflar işin tamamından müştereken
          sorumludur ve kâr/zarar birlikte paylaşılır; <strong>
          konsorsiyumda</strong> ise her ortak, üstlendiği işin belirli bir
          bölümünden ayrı ayrı sorumlu olur, müteselsil sorumluluk sözleşmeyle
          büyük ölçüde bertaraf edilir. Kamu ihalelerinde ve büyük
          altyapı/inşaat projelerinde konsorsiyum modeli, taraflar arasında
          işi net biçimde bölmek istendiğinde tercih edilir.
        </p>
        <p className="mt-6 leading-8 text-gray-700">
          Hangi modelin seçileceği ticari gerçeklere bağlıdır. Kısa süreli,
          tek bir projeye özgü iş birlikleri genellikle sözleşmesel modelle
          yürütülür; sermaye yoğun, uzun soluklu ve üçüncü taraflarla (banka,
          tedarikçi, müşteri) ayrı bir tüzel kişilik olarak sözleşme
          yapılması gereken ortaklıklarda ise şirketli model tercih edilir.
        </p>
      </section>

      {/* 3. SÖZLEŞME UNSURLARI */}
      <section id="sozlesme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Ortaklık Sözleşmesinde Olması Gereken Unsurlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hangi model seçilirse seçilsin, ortaklığın omurgası sözleşmedir.
          Şirketli bir ortak girişimde bu, TTK kapsamındaki esas
          sözleşmenin yanında ayrı bir pay sahipleri sözleşmesi (shareholders&apos;
          agreement) şeklinde de düzenlenebilir. Aşağıdaki unsurların hiçbiri
          kanunen zorunlu bir liste değildir, ama uygulamada sağlam bir
          ortaklık sözleşmesinde mutlaka bulunması beklenir:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💰 Kâr/Zarar Paylaşımı</h3>
            <p className="text-gray-700">Payların sermaye katkısına mı, iş gücü katkısına mı yoksa ikisinin bileşimine mi göre belirleneceği; zarar durumunda sorumluluğun sınırının nasıl çizileceği.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🗳️ Yönetim ve Oy Hakkı</h3>
            <p className="text-gray-700">Hangi kararların oy birliği, hangilerinin oy çokluğu ile alınacağı; kilit kararlarda (yeni yatırım, borçlanma, üçüncü kişiye devir) veto hakkının kimde olacağı.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🚪 Çıkış (Exit) Hükümleri</h3>
            <p className="text-gray-700">Bir ortağın hangi şartlarda ayrılabileceği, payını kime ve nasıl devredebileceği; önalım hakkı (right of first refusal), sürükleme/birlikte satış hakları (drag-along/tag-along).</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🚫 Rekabet Yasağı</h3>
            <p className="text-gray-700">Ortakların, ortaklık süresince ve sona erdikten sonra belirli bir süre boyunca aynı alanda rakip bir faaliyette bulunup bulunamayacağı.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">⚖️ Anlaşmazlık Çözümü</h3>
            <p className="text-gray-700">Uyuşmazlık hâlinde önce arabuluculuk mu denenecek, sonra tahkime mi gidilecek yoksa doğrudan mahkemeye mi başvurulacak; yetkili tahkim kurumu ve uygulanacak hukuk.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💡 Fikri Mülkiyet</h3>
            <p className="text-gray-700">Ortaklık öncesinde her tarafın kendi getirdiği know-how/marka/patentin mülkiyeti; ortaklık sırasında birlikte geliştirilen fikri mülkiyetin kime ait olacağı.</p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Sözleşmesel ortak girişimlerde en sık gözden kaçan nokta, TBK
            m.620 vd. hükümlerinin devreye girdiğinin fark edilmemesidir.
            Taraflar arasında yazılı bir ortaklık sözleşmesi olmasa dahi,
            &quot;ortak bir amaca ulaşmak için emek ve mal birleştirme&quot;
            unsurları fiilen gerçekleşmişse, hukuken adi ortaklık kurulmuş
            sayılabilir. Bu da tarafları, sözleşmede hiç konuşulmamış
            konularda (örneğin müteselsil sorumluluk) kanunun tamamlayıcı
            hükümleriyle karşı karşıya bırakır. Bu yüzden &quot;birlikte iş
            yapalım&quot; anlaşması sözlü kalmamalı, ortaklığın unsurları
            yazılı sözleşmeyle net biçimde çerçevelenmelidir.
          </p>
        </div>
      </section>

      {/* 4. REKABET KURULU */}
      <section id="rekabet-kurulu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Rekabet Kurulu İzni: 2026 Güncel Eşikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Belirli büyüklüğün üzerindeki ortak girişimler, 4054 sayılı
          Rekabetin Korunması Hakkında Kanun&apos;un 7. maddesi ve bu maddeyi
          uygulamaya koyan <strong>Tebliğ No: 2010/4</strong> kapsamında
          Rekabet Kurulu&apos;na bildirilip izin alınmasını gerektirebilir.
          Bildirim yükümlülüğü, ortak girişimin <strong>&quot;tam işlevsel&quot;</strong>{" "}
          olması, yani bağımsız bir iktisadi varlığın tüm işlevlerini kalıcı
          şekilde yerine getirecek bir yapıda kurulmasıyla ve ana
          teşebbüslerin faaliyetleri arasında rekabeti sınırlayıcı bir
          koordinasyon etkisi doğurup doğurmadığıyla ilgilidir.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          11 Şubat 2026 tarihli ve 33165 sayılı Resmî Gazete&apos;de
          yayımlanan <strong>2026/2 sayılı Tebliğ</strong>, 2010/4 sayılı
          Tebliğ&apos;deki ciro eşiklerini önemli ölçüde yükseltti. Güncel
          eşikler şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">2026/2 Öncesi Eşik</th>
                <th className="p-5">2026/2 Sonrası Güncel Eşik</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Toplam Türkiye cirosu</td>
                <td className="p-5">750 milyon TL</td>
                <td className="p-5 font-bold text-green-600">3 milyar TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">En az iki tarafın ayrı ayrı Türkiye cirosu</td>
                <td className="p-5">250 milyon TL</td>
                <td className="p-5 font-bold text-green-600">1 milyar TL</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Türkiye merkezli teknoloji teşebbüsü (alt eşik)</td>
                <td className="p-5">Ayrı bir alt eşik yoktu</td>
                <td className="p-5 font-bold text-green-600">250 milyon TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Kaynak: Rekabet Kurumu, Rekabet Kurulundan İzin Alınması Gereken
          Birleşme ve Devralmalar Hakkında Tebliğ (Tebliğ No: 2010/4), 2026/2
          sayılı değişiklik Tebliği (RG: 11.02.2026, Sayı: 33165). Tebliğ,
          toplam/ikili eşiklerin yanında; bir tarafın Türkiye cirosunun 1
          milyar TL&apos;yi, diğer tarafın küresel cirosunun 9 milyar TL&apos;yi
          aştığı asimetrik durumlar için de ayrı bir bildirim eşiği
          öngörüyor.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Bildirim Eşiği Aşılırsa Ne Olur?
          </h3>
          <p className="leading-8 text-gray-700">
            Bildirim yükümlülüğü doğan bir ortak girişim, Rekabet
            Kurulu&apos;ndan izin alınmadan hukuken geçerlilik kazanamaz.
            İzinsiz gerçekleştirilen işlemler için idari para cezası riski
            doğar. Eşiklerin aşılıp aşılmadığının doğru hesaplanması
            (taraf tanımı, ilişkili teşebbüs cirolarının konsolidasyonu gibi
            teknik detaylar dahil), ortaklık kurulmadan önce mutlaka
            değerlendirilmesi gereken bir adımdır.
          </p>
        </div>
      </section>

      {/* 5. YABANCI ORTAKLI */}
      <section id="yabanci-ortakli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yabancı Ortaklı Ortak Girişimlerde Dikkat Noktaları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;ye yeni giren bir yabancı yatırımcının yerel bir
          ortakla ortak girişim kurması, pazar bilgisi ve dağıtım ağı
          eksikliğini hızlıca kapatmanın en yaygın yollarından biri. Bu
          senaryoda hukuki çerçeveyi belirleyen temel düzenleme <strong>
          4875 sayılı Doğrudan Yabancı Yatırımlar Kanunu</strong>. Kanun,
          yabancı yatırımcılara Türk yatırımcılarla eşit muamele
          ilkesini getiriyor; genel kural olarak şirket kuruluşu için ayrı
          bir &quot;yabancı sermaye izni&quot; aranmıyor. Buna karşılık
          bankacılık, sigortacılık, enerji, savunma sanayii gibi özel
          düzenlemeye tabi sektörlerde ilgili düzenleyici kurumdan (BDDK,
          SEDDK, EPDK gibi) ayrıca izin alınması gerekebiliyor.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              🌍 Özel Sektör Ortaklıklarında
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Yabancı ortağın sermaye payı, ortaklık sözleşmesi ve şirket esas sözleşmesinde net biçimde tanımlanmalı.</li>
              <li>✔ Kâr transferi, temettü stopajı ve varsa çifte vergilendirmeyi önleme anlaşması hükümleri önceden değerlendirilmeli.</li>
              <li>✔ Yönetim kontrolü genelde sermaye payına orantılı verilse de, know-how/teknoloji getiren tarafa ayrıca veto hakkı tanınması yaygın bir uygulama.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              🏗️ Kamu-Özel Ortaklığında (Kısa Not)
            </h3>
            <p className="leading-8 text-gray-700">
              Yap-İşlet-Devret (YİD) gibi kamu-özel iş birliği modelleri de
              geniş anlamda bir ortak girişim türüdür, ancak bunlar özel
              kanunlarla (3996 sayılı Kanun ve ilgili sektörel mevzuat)
              düzenlenen, kamu idaresinin taraf olduğu ayrı bir rejime
              tabidir. Bu yazının odağı, iki özel şirket/KOBİ arasındaki
              ortak girişimlerdir; kamu-özel iş birliği projeleri ayrı bir
              uzmanlık alanı gerektirir.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BAŞARISIZLIK */}
      <section id="basarisiz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Ortaklıklar Neden Başarısız Oluyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ortak girişimlerin önemli bir kısmı finansal başarısızlıktan değil,
          kuruluş aşamasında sözleşmeye yazılmamış konulardan dolayı
          dağılıyor. Uygulamada en sık karşılaşılan eksikler şunlar:
        </p>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li><strong>Çıkış senaryosu tanımlanmamış:</strong> Ortaklardan biri ayrılmak istediğinde payının nasıl değerleneceği, kime devredileceği ve hangi sürede tamamlanacağı belirsizse, ayrılık süreci fiilen kilitlenir.</li>
            <li><strong>Kilitlenme (deadlock) mekanizması yok:</strong> İki ortağın eşit oy hakkına sahip olduğu (%50-%50) yapılarda, kritik bir kararda anlaşamama durumunda ne yapılacağı önceden çözülmemişse şirket fiilen yönetilemez hâle gelir.</li>
            <li><strong>Fikri mülkiyet payı belirsiz:</strong> Ortaklık sırasında geliştirilen ürün, yazılım veya markanın kime ait olacağı netleşmemişse, ayrılık anında en büyük ihtilaf konusu bu olur.</li>
            <li><strong>Anlaşmazlık çözümü ve tahkim maddesi eksik:</strong> Uyuşmazlık doğduğunda hangi mercinin, hangi hukuka göre karar vereceği belirsizse, süreç uzun ve maliyetli bir yargılamaya dönüşür.</li>
            <li><strong>Yönetim kontrolü ile sermaye payı örtüşmüyor:</strong> Sermayeyi getiren taraf ile know-how/pazar bilgisini getiren tarafın yönetimdeki söz hakkı dengesizse, güven ilişkisi zamanla aşınır.</li>
          </ul>
        </div>
      </section>

      {/* 7. KİMLER İÇİN UYGUN */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kimler İçin Uygun?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🚀 Büyümek/Ölçeklenmek İsteyen Şirketler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Yeni bir pazara, tek başına dağıtım ağı kurmadan hızlı girmek isteyen şirketler</li>
              <li>✔ Sermayesi olmayan ama teknoloji/know-how&apos;a sahip; ya da sermayesi olup pazar bilgisine ihtiyaç duyan şirketler</li>
              <li>✔ Ortak bir Ar-Ge veya ürün geliştirme projesinde risk ve maliyeti paylaşmak isteyen firmalar</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              🌍 Yerel Ortak Arayan Yabancı Yatırımcılar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Türkiye pazarına ilk kez girecek, yerel mevzuata ve müşteri ağına hâkim bir ortak arayan yabancı şirketler</li>
              <li>✔ Kamu ihalelerine veya büyük ölçekli projelere, konsorsiyum ortağı üzerinden katılmak isteyen yabancı yükleniciler</li>
              <li>✔ Sermayesini bir ortakla paylaşarak Türkiye&apos;deki riskini sınırlamak isteyen yatırımcılar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Adım Adım Kuruluş Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🎯</div>
            <h3 className="text-base font-bold">1. Ortaklık Amacının Netleştirilmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Ortak hedefin, katkı türlerinin ve süresinin (proje bazlı mı, süresiz mi) belirlenmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">⚖️</div>
            <h3 className="text-base font-bold">2. Model Seçimi</h3>
            <p className="mt-2 text-sm text-gray-600">Şirketli mi (AŞ/Limited) yoksa sözleşmesel mi (adi ortaklık/konsorsiyum) kurulacağının kararlaştırılması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📋</div>
            <h3 className="text-base font-bold">3. Rekabet Hukuku Değerlendirmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Taraf cirolarının 2026 güncel eşiklerle karşılaştırılması, bildirim gerekip gerekmediğinin tespiti</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">✍️</div>
            <h3 className="text-base font-bold">4. Sözleşmenin Hazırlanması</h3>
            <p className="mt-2 text-sm text-gray-600">Kâr paylaşımı, yönetim, çıkış, rekabet yasağı ve tahkim maddeleri dahil ortaklık/esas sözleşmesinin yazılması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="text-base font-bold">5. Tescil ve Operasyona Geçiş</h3>
            <p className="mt-2 text-sm text-gray-600">Şirketli modelde ticaret siciline tescil; sözleşmesel modelde imza ve gerekli bildirimlerin tamamlanması</p>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Sözlü veya e-posta üzerinden yürüyen bir &quot;birlikte iş yapalım&quot; anlaşması, unsurları fiilen oluştuğunda hukuken adi ortaklık sayılabilir; yazılı sözleşme şart.</li>
            <li>Ciro eşiklerinin hesaplanmasında yalnızca tarafların kendi cirosu değil, ilişkili/bağlı teşebbüslerin ciroları da konsolide edilir; bu hesap kabaca değil doğru yapılmalı.</li>
            <li>Rekabet Kurulu izni gerekiyorsa, işlem izin alınmadan hukuken geçerlilik kazanmaz; tescil/imza öncesi bu adım atlanmamalı.</li>
            <li>Yabancı ortaklı yapılarda düzenlenmiş sektörler (bankacılık, sigorta, enerji, savunma) için ilgili kurumdan ayrı izin gerekip gerekmediği ayrıca kontrol edilmeli.</li>
            <li>Kilitlenme (deadlock) ihtimaline karşı bağımsız hakem/üçüncü oy mekanizması gibi bir çözüm, sözleşmeye kuruluş aşamasında eklenmeli; ihtilaf çıktıktan sonra eklemek çok daha zor.</li>
            <li>Şirketli modelde esas sözleşme ile pay sahipleri sözleşmesi (varsa) arasında çelişki olmamasına dikkat edilmeli; çelişki hâlinde hangisinin öncelikli olacağı sözleşmede açıkça yazılmalı.</li>
          </ul>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a
                href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.4054.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                4054 Sayılı Rekabetin Korunması Hakkında Kanun - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a
                href="https://www.rekabet.gov.tr/Dosya/tebligler/2010-4-20200210100639796-pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Rekabet Kurulundan İzin Alınması Gereken Birleşme ve Devralmalar Hakkında Tebliğ (Tebliğ No: 2010/4) - Rekabet Kurumu
              </a>
            </li>
            <li>
              <a
                href="https://www.rekabet.gov.tr/tr/Guncel/rekabet-kurulundan-izin-alinmasi-gereken-82269c8a8f9bec11a21c00505685ee05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Rekabet Kurumu - Birleşme/Devralma Tebliği ve Değerlendirme Kılavuzlarına İlişkin 2026 Güncel Duyuru
              </a>
            </li>
            <li>
              <a
                href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6098.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                6098 Sayılı Türk Borçlar Kanunu (Adi Ortaklık: m.620 vd.) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a
                href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6102.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                6102 Sayılı Türk Ticaret Kanunu - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a
                href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.4875.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                4875 Sayılı Doğrudan Yabancı Yatırımlar Kanunu - mevzuat.gov.tr
              </a>
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
              Ortak girişim (JV) kurmak için mutlaka yeni bir şirket mi kurmam gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Şirket kurmak yaygın bir yöntem olsa da, tek işlem
              zorunlu değil. Kısa/orta vadeli veya tek bir projeye özgü
              ortaklıklar, Türk Borçlar Kanunu&apos;nun adi ortaklık
              hükümlerine (m.620 vd.) dayanan sözleşmesel bir yapıyla, hiç
              yeni şirket kurmadan da yürütülebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Her ortak girişim Rekabet Kurulu&apos;na bildirilmek zorunda mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bildirim yükümlülüğü, ortak girişimin &quot;tam
              işlevsel&quot; olması ve tarafların cirolarının 2026/2 sayılı
              Tebliğ&apos;deki eşikleri (toplamda 3 milyar TL, en az iki
              tarafta ayrı ayrı 1 milyar TL Türkiye cirosu, teknoloji
              teşebbüslerinde 250 milyon TL) aşmasına bağlı. Küçük ve orta
              ölçekli çoğu ortaklık bu eşiklerin altında kalır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Stratejik iş ortaklığından ortak girişime nasıl geçilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Genellikle taraflar önce daha esnek bir sözleşmesel iş
              birliğiyle (örneğin ortak pazarlama veya distribütörlük
              anlaşmasıyla) başlar; işbirliği olgunlaştıkça ve karşılıklı
              güven arttıkça sermaye birleştirerek ortak bir şirket kurma
              kararı alınabilir. Bu geçiş, başlangıçtaki sözleşmede bir
              &quot;ortaklığa dönüştürme&quot; opsiyonu olarak da baştan
              planlanabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yabancı bir şirketle ortak girişim kurarken ayrı bir yabancı sermaye izni almam gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel kural olarak hayır. 4875 sayılı Doğrudan Yabancı
              Yatırımlar Kanunu, yabancı yatırımcıya Türk yatırımcıyla eşit
              muamele ilkesini getirir ve şirket kuruluşu için ayrı bir izin
              şartı aramaz. Ancak bankacılık, sigortacılık, enerji gibi
              düzenlenmiş sektörlerde faaliyet gösterilecekse, ilgili
              düzenleyici kurumdan sektörel izin alınması ayrı bir
              zorunluluktur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ortak girişim ile konsorsiyum arasındaki fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Klasik ortak girişimde taraflar işin tamamından müştereken
              sorumludur ve kâr/zarar birlikte paylaşılır. Konsorsiyumda ise
              her ortak, üstlendiği işin belirli bir bölümünden ayrı ayrı
              sorumludur; müteselsil sorumluluk sözleşmeyle sınırlandırılır.
              Kamu ihaleleri ve büyük altyapı projelerinde iş net biçimde
              bölünmek istendiğinde konsorsiyum modeli tercih edilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ortaklık sözleşmesinde &quot;çıkış hükmü&quot; olmazsa ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Çıkış senaryosu tanımlanmamışsa, bir ortağın ayrılmak
              istediği durumda payının nasıl değerleneceği ve devrin nasıl
              gerçekleşeceği belirsiz kalır. Bu genellikle taraflar
              arasında uzun süren ihtilaflara, hatta şirketin fiilen
              yönetilemez hâle gelmesine yol açar. Bu yüzden çıkış hükümleri
              (değerleme yöntemi, önalım hakkı, sürükleme/birlikte satış
              hakları) sözleşmenin kuruluş aşamasında mutlaka yazılmalıdır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin Doğru Ortaklık Modelini Birlikte Belirleyelim
          </h3>
          <p className="leading-8 text-gray-700">
            İster yeni bir pazara ortak girerek açılmak, ister Türkiye&apos;de
            yerel bir ortak arayan yabancı bir yatırımcıyla çalışmak, ister
            mevcut bir tedarikçi/müşteri ilişkinizi stratejik bir ortaklığa
            dönüştürmek isteyin; doğru modelin seçimi, sözleşmenin
            kurgulanması ve gerekiyorsa Rekabet Kurulu süreci ayrı bir
            uzmanlık gerektirir.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Stratejik İş Ortaklıkları danışmanlığı kapsamında
              şirketinizin ortaklık sürecini birlikte planlamamız için
              bizimle iletişime geçin.
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
          Stratejik iş ortaklığı ve ortak girişim, şirketlerin tek başına
          alamayacağı riskleri paylaşarak büyümesini sağlayan güçlü
          araçlar. Ama bu araçların gücü, kuruluş aşamasında ne kadar
          özenli davranıldığına bağlı. Doğru model seçimi (şirketli mi,
          sözleşmesel mi), sözleşmenin çıkış/anlaşmazlık/fikri mülkiyet
          maddelerini eksiksiz kapsaması ve gerekiyorsa Rekabet Kurulu
          sürecinin baştan yönetilmesi, ortaklığın uzun vadede ayakta
          kalıp kalmayacağını belirliyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, Stratejik İş
          Ortaklıkları birimi kapsamında doğru ortağın belirlenmesinden
          sözleşme müzakeresine, şirketli bir ortak girişimin kuruluşundan
          sonrasındaki muhasebe ve uyum yükümlülüklerine kadar tek noktadan
          yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">M&A • DUE DILIGENCE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Due Diligence Nedir? Şirket Satın Alma ve Birleşme Öncesi Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci</h3>
          </Link>
          <Link
            href="/blog/turkiyede-adan-zye-sirket-kurmak-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU • TÜRKİYE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;de A&apos;dan Z&apos;ye Şirket Kurmak: Avantajları Nelerdir?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
