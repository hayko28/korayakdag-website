import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Pazara Giriş Belgesi Desteği: CE, Helal, ISO Sertifika Giderleriniz Devletten Karşılanıyor mu? | Koray Akdağ",
  description: "5973 sayılı İhracat Destekleri Hakkında Karar madde 3 kapsamında, ihracat için zorunlu kalite/çevre sertifikaları, ruhsatlandırma ve kayıt giderleri %50 oranında, şirket başına yıllık 4.000.000 TL'ye kadar destekleniyor. Kapsam, şartlar ve DYS üzerinden başvuru süreciyle 2026 güncel rehber.",
  keywords: [
    "pazara giriş belgesi desteği",
    "ihracat belgelendirme desteği",
    "CE belgesi devlet desteği",
    "helal sertifika devlet desteği",
    "ruhsatlandırma ve kayıt desteği",
    "ticaret bakanlığı ihracat destekleri",
    "5973 sayılı karar",
    "ihracat sertifika maliyeti devlet desteği",
  ],
  alternates: {
    canonical: "/blog/pazara-giris-belgesi-destegi-sertifika-ruhsat-giderleri-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Pazara Giriş Belgesi Desteği: CE, Helal, ISO Sertifika ve Ruhsat Giderlerinizin Yarısını Devlet Karşılıyor mu?"
      description="İhracat yapabilmek için aldığınız kalite/çevre sertifikaları, laboratuvar test raporları ve yurt dışı ruhsat/kayıt giderleri, 5973 sayılı Karar kapsamında %50 oranında ve şirket başına yıllık 4.000.000 TL'ye kadar Ticaret Bakanlığı tarafından destekleniyor. Kapsam, desteklenen/desteklenmeyen giderler ve DYS üzerinden başvuru süreciyle güncel rehber."
      category="TİCARET BAKANLIĞI • PAZARA GİRİŞ BELGESİ DESTEĞİ • 2026"
      date="Ekim 2026"
      readTime="12 Dakika"
      slug="pazara-giris-belgesi-destegi-sertifika-ruhsat-giderleri-2026"
      coverImage="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Sertifika ve Ruhsat Giderlerinizin Devlet Desteğinden Yararlanalım"
      ctaText="Hangi belgelerinizin destek kapsamında olduğundan DYS üzerinden başvurunuzun hazırlanmasına kadar süreci tek elden yürütüyoruz. Pazara giriş belgesi desteğine uygunluğunuzu birlikte değerlendirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ 5973 sayılı İhracat Destekleri Hakkında Karar&apos;ın <strong>3&apos;üncü maddesi</strong> uyarınca, pazara giriş belgeleri ile ruhsatlandırma ve kayıt işlemlerine ilişkin giderler <strong>%50 oranında ve şirket başına yıllık 4.000.000 TL&apos;ye kadar</strong> destekleniyor.</li>
          <li>✔ Kapsamdaki belgeler, Ticaret Bakanlığı&apos;nın düzenli güncellediği <strong>Ek-1/B listesinde</strong> sayılıyor; Helal Belgesi, ISO serisi belgeler, HACCP, BRC ve ATEX gibi örnekler bu listede yer alıyor.</li>
          <li>✔ İlaç, kozmetik, tıbbi cihaz, gıda takviyesi, REACH kapsamındaki kimyasallar gibi ürünlerin yurt dışı satışı için zorunlu <strong>ruhsat ve kayıt giderleri</strong> de aynı destek kapsamında.</li>
          <li>✔ Eğitim, danışmanlık, yol, konaklama ve gözetim bedelleri bu destekten <strong>yararlanamaz</strong>; yalnızca belgenin alınması/yenilenmesi için zorunlu giderler desteklenir.</li>
          <li>✔ Başvuru, belgenin düzenlenme tarihinden (ruhsatlandırmada ödeme belgesi tarihinden) itibaren <strong>6 ay içinde</strong>, Destek Yönetim Sistemi (DYS) üzerinden üyesi olunan İhracatçı Birliği&apos;ne yapılır.</li>
          <li>✔ &quot;Pazara giriş belgesi desteği&quot; ile isim benzerliği nedeniyle sık karıştırılan <strong>&quot;pazara giriş projesi hazırlama desteği&quot;</strong> tamamen farklı bir destek kalemi; aşağıda ayrı ayrı açıklıyoruz.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Pazara Giriş Belgesi Desteği Nedir?
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Hangi Belgeler ve Ruhsatlar Kapsamda?
          </Link>
          <Link href="#oran" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Oranı ve Üst Limit
          </Link>
          <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Desteklenen ve Desteklenmeyen Giderler
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Kimler Başvurabilir?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Karıştırmayın: Belge Desteği ile Proje Hazırlama Desteği
          </Link>
          <Link href="#diger-destekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Aynı Kararın Diğer Şirket Destekleri
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
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Pazara Giriş Belgesi Desteği Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Birçok ürün grubunda, bir ülkeye ihracat yapabilmenin ön şartı o
          ülkenin veya alıcının talep ettiği bir kalite, güvenlik veya çevre
          sertifikasına sahip olmaktır. Bu sertifikaların alınması, test
          edilmesi ve yenilenmesi ciddi bir maliyet kalemi oluşturur; özellikle
          gıda, kozmetik, tekstil, makine ve kimya sektörlerinde ihracatçı
          KOBİ&apos;ler için bu giderler bazen tek bir sevkiyatın kârından
          daha yüksek olabiliyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Ticaret Bakanlığı bu maliyeti azaltmak için <strong>Pazara Giriş
          Belgesi Desteği</strong>&apos;ni uyguluyor. Destek, 17 Ağustos 2022
          tarihli ve 5973 sayılı Cumhurbaşkanı Kararı (&quot;İhracat
          Destekleri Hakkında Karar&quot;, RG 18.08.2022/31927) ile yürürlüğe
          kondu ve uygulama usul ve esasları Ticaret Bakanlığı&apos;nın
          Pazara Giriş Belgesi Desteğine İlişkin Genelgesi&apos;yle belirleniyor.
          Kararın 3&apos;üncü maddesi şöyle diyor:
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            &quot;Şirketlerin pazara giriş belgeleri ile ruhsatlandırma ve
            kayıt işlemlerine ilişkin giderleri %50 oranında ve şirket başına
            yıllık 4.000.000 TL&apos;ye kadar desteklenir.&quot;
          </p>
        </div>
      </section>

      {/* 2. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Hangi Belgeler ve Ruhsatlar Kapsamda?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kararın tanımlar maddesi, &quot;pazara giriş belgeleri&quot;ni
          akredite kurum/kuruluşlardan alınan ve bir ülke pazarına girişte
          zorunlu olan veya avantaj sağlayan kalite ve çevre belgeleri/
          sertifikaları, insan can ve mal emniyetini/güvenliğini gösterir
          işaretler ile ihraç ürünlerine ilişkin laboratuvar analizleri ve/
          veya test/analiz raporları olarak tanımlıyor. Bakanlık, destek
          kapsamındaki belgelerin tam listesini <strong>Ek-1/B</strong> adlı
          bir tabloda düzenli olarak güncelleyerek yayımlıyor.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📋</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Pazara Giriş Belgeleri (Ek-1/B)
            </h3>
            <p className="mb-3 text-gray-700">
              Güncel listede yer alan belge ve sertifika örneklerinden bazıları:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700 marker:text-orange-500">
              <li>Helal Belgesi</li>
              <li>ISO serisi belgeler (ör. ISO 9001, ISO 22000)</li>
              <li>HACCP</li>
              <li>BRC (gıda/ambalaj güvenlik standardı)</li>
              <li>ATEX (patlayıcı ortam ekipman belgesi)</li>
              <li>ADR (tehlikeli madde taşımacılığı belgesi)</li>
              <li>ACS, ACRS gibi ülkeye özel uygunluk sertifikaları</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💊</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Ruhsatlandırma ve Kayıt İşlemleri
            </h3>
            <p className="mb-3 text-gray-700">
              10.09.2024 tarihinde genişletilen tanıma göre şu ürün
              gruplarının yurt dışı satışı için zorunlu veya avantaj
              sağlayan ruhsat/kayıt giderleri de kapsamda:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700 marker:text-orange-500">
              <li>İlaç ve veteriner ilaçları</li>
              <li>REACH kapsamındaki kimyasallar</li>
              <li>Gıda takviyeleri ve tarım ilaçları</li>
              <li>Kozmetik ürünler</li>
              <li>Tıbbi cihazlar</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Ek-1/B listesi, Bakanlık tarafından yılda birkaç kez güncelleniyor
          ve yeni belgeler ekleniyor. Bir sertifikanın bu destekten
          yararlanıp yararlanamayacağını kesin olarak öğrenmenin tek yolu,
          başvuru öncesinde listenin <strong>güncel sürümünü</strong>{" "}
          ticaret.gov.tr üzerinden kontrol etmektir; zira hangi belgenin
          kapsamda olduğu zaman içinde değişebiliyor.
        </p>
      </section>

      {/* 3. ORAN */}
      <section id="oran" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Oranı ve Üst Limit
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Değer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Destek oranı</td>
                <td className="p-5">%50</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Üst limit</td>
                <td className="p-5">Şirket başına yıllık 4.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Dayanak</td>
                <td className="p-5">5973 sayılı Karar, Madde 3</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Yenileme giderleri</td>
                <td className="p-5">Önceki belgenin geçerlilik süresinde ihracat yapıldığının belgelenmesi şartıyla destekleniyor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          4.000.000 TL&apos;lik üst limit, firmanın bir takvim yılı
          içinde alabileceği pazara giriş belgesi ve ruhsatlandırma/kayıt
          desteğinin toplamını kapsıyor; tek bir belge için değil, şirketin
          yıl içinde başvurduğu tüm belgeler toplamında geçerli bir sınır.
        </p>
      </section>

      {/* 4. GİDERLER */}
      <section id="giderler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Desteklenen ve Desteklenmeyen Giderler
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h4 className="mb-4 text-xl font-bold text-green-700">✅ Desteklenir</h4>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
              <li>Ek-1/B&apos;deki belgenin alınması veya yenilenmesi için zorunlu giderler</li>
              <li>Tarım ürünleri analizine ilişkin akreditasyon ücreti</li>
              <li>Pazarda zorunlu ve avantaj sağlayan test/analiz raporu giderleri</li>
              <li>Yurt dışı ruhsat başvuru giderleri ve yıllık ruhsat aidatı</li>
              <li>Elektronik dosya program lisansı, iyi üretim uygulamaları (GMP) denetim harçları</li>
              <li>Biyoeşdeğerlilik, klinik çalışma ve seri serbest bırakma analiz bedelleri</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h4 className="mb-4 text-xl font-bold text-red-700">❌ Desteklenmez</h4>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-600">
              <li>Eğitim ve danışmanlık giderleri</li>
              <li>Yol ve konaklama giderleri</li>
              <li>Gözetim bedeli</li>
              <li>Tarım ürünlerine ilişkin muayene ücretleri</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Başvurularda en sık gözden kaçan
            nokta, belgeyi düzenleyen kuruluşla fatura/ödeme belgesini
            düzenleyen kuruluşun farklı olduğu durumlar. Genelge, bu
            durumda aradaki organik bağın (ör. %51 ortaklık ilişkisi)
            belgelendirilmesini şart koşuyor; bu belge eksikse başvuru
            teknik nedenle reddedilebiliyor. Harcamayı yapan taraf ile
            desteğe konu şirketin aynı olmadığı durumlarda, ödeme her
            hâlükârda başvuru sahibi şirkete yapıldığından, aradaki ilişkiyi
            gösteren belgenin başvuru dosyasına eksiksiz eklenmesi gerekiyor.
          </p>
        </div>
      </section>

      {/* 5. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Destekten, ürününü üreten ve/veya ihraç eden şirketler
          yararlanabilir. Karar&apos;ın tanımına göre &quot;şirket&quot;,
          6102 sayılı Türk Ticaret Kanunu&apos;nun 124&apos;üncü maddesinde
          belirtilen şirketler ile 1163 sayılı Kooperatifler Kanunu ve 4572
          sayılı Tarım Satış Kooperatif ve Birlikleri Hakkında Kanun
          hükümleri çerçevesinde ticari ve/veya sınai faaliyette bulunan
          kooperatif ve birlikleri kapsıyor. Harcamayı belgeye konu şirket
          veya onunla organik bağı bulunan bir şirket yapabilir; ödeme ise
          her durumda başvuru sahibi şirkete yapılıyor.
        </p>
      </section>

      {/* 6. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Adım Adım Başvuru Süreci
        </h2>
        <div className="space-y-6">
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">1</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Belge/Ruhsat Alınır</h3>
              <p className="text-gray-700">Ek-1/B listesindeki bir belge akredite kurumdan alınır veya ruhsat/kayıt işlemi tamamlanır; ödeme bankacılık sistemi üzerinden şirket hesabından yapılır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">2</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Belgeler Hazırlanır</h3>
              <p className="text-gray-700">Harcama ve ödeme belgeleri, gerekiyorsa organik bağ belgesi, vergi/SGK borcu bulunmadığına dair belge ve varsa tercümeler bir araya getirilir.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">3</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">DYS Üzerinden Başvuru Yapılır</h3>
              <p className="text-gray-700">Başvuru, üyesi olunan İhracatçı Birliği Genel Sekreterliği (İBGS) aracılığıyla Destek Yönetim Sistemi (DYS) üzerinden sunulur.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">4</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">İBGS İnceler</h3>
              <p className="text-gray-700">İBGS, belgenin Ek-1/B kapsamında olup olmadığını, giderin uygunluğunu ve başvuru süresinin aşılıp aşılmadığını kontrol eder.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">5</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Ödeme Yapılır</h3>
              <p className="text-gray-700">Uygun bulunan başvurularda destek tutarı, varsa şirketin başka bir desteğe ilişkin borcuna mahsup edilerek şirkete ödenir.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⏱️ Pazara giriş belgesinde süre: belgenin düzenlenme tarihinden itibaren 6 ay
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⏱️ Ruhsatlandırma/kayıtta süre: ödeme belgesi tarihinden itibaren 6 ay
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          6 aylık süre, başvuru belgelerinin DYS&apos;ye iletildiği tarihe
          göre hesaplanıyor. Döviz cinsinden yapılan giderler, ödeme belgesi
          tarihindeki kurdan TL&apos;ye çevriliyor. Yurt dışında düzenlenen
          belge ve ödeme belgeleri, Bakanlığın ilgili yurt dışı
          temsilciliğinin onayına sunuluyor. Başvuru dosyasındaki belge
          asıllarının en az <strong>10 yıl</strong> saklanması zorunlu.
        </p>
      </section>

      {/* 7. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Karıştırmayın: Pazara Giriş Belgesi Desteği ile Pazara Giriş Projesi Hazırlama Desteği
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ İsimleri Benzer, Kapsamları Tamamen Farklı
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Pazara Giriş Belgesi Desteği (Madde 3)
              </p>
              <p className="text-gray-700">
                Ürününüzün yurt dışında satılabilmesi için fiilen almanız
                gereken bir <strong>sertifika, test raporu veya ruhsatın</strong>{" "}
                maliyetini karşılar. %50 oranında, şirket başına yıllık
                4.000.000 TL&apos;ye kadar.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Pazara Giriş Projesi Hazırlama Desteği (Madde 5)
              </p>
              <p className="text-gray-700">
                Hedef pazar seçimi, finansman ve fiyatlandırma stratejisi,
                pazarlama ve kanal stratejisi ile aksiyon planı içeren bir{" "}
                <strong>danışmanlık ve rapor hazırlama</strong> sürecinin
                giderlerini karşılar. %50 oranında, proje başına 200.000
                TL&apos;ye kadar; bir şirket en fazla 2 projeden yararlanabilir.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Kısacası: elinizde somut bir sertifika, test raporu veya ruhsat
            gideri varsa Madde 3&apos;e, hedef pazara nasıl gireceğinize dair
            bir strateji/danışmanlık raporu hazırlatıyorsanız Madde 5&apos;e
            bakmanız gerekiyor. İki destek aynı anda, farklı giderler için
            birlikte de kullanılabilir.
          </p>
        </div>
      </section>

      {/* 8. DİĞER DESTEKLER */}
      <section id="diger-destekler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Aynı Kararın Diğer Şirket Destekleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          5973 sayılı Karar&apos;ın &quot;Şirketlere Yönelik Destekler&quot;
          bölümü, pazara giriş belgesi desteğiyle birlikte birbirini
          tamamlayan birkaç destek kalemi daha içeriyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek</th>
                <th className="p-5">Madde</th>
                <th className="p-5">Oran / Üst Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Pazara giriş belgesi desteği</td>
                <td className="p-5">Madde 3</td>
                <td className="p-5">%50, yıllık 4.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yurt dışı marka tescil desteği</td>
                <td className="p-5">Madde 4</td>
                <td className="p-5">%50, yıllık 750.000 TL, en fazla 4 yıl</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Pazara giriş projesi hazırlama desteği</td>
                <td className="p-5">Madde 5</td>
                <td className="p-5">%50, proje başına 200.000 TL, en fazla 2 proje</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Yurt dışı pazar araştırması desteği</td>
                <td className="p-5">Madde 6</td>
                <td className="p-5">%50, faaliyet başına 100.000 TL, yılda azami 5, toplamda 20 defa</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Yurt dışı marka tescil desteğinin başvuru süreci ve şartlarını{" "}
          <Link href="/blog/madrid-protokolu-yurt-disinda-marka-tescili-nasil-yapilir" className="text-orange-600 underline">
            Madrid Protokolü ile yurt dışında marka tescili yazımızda
          </Link>{" "}
          ayrıca ele aldık.
        </p>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Belgenizin güncel Ek-1/B listesinde olup olmadığını başvuru öncesinde teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ 6 aylık başvuru süresini belgenin düzenlenme veya ödeme tarihinden itibaren takip edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ödemelerinizi mutlaka bankacılık sistemi üzerinden ve şirket hesabınızdan yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Vergi ve SGK borcu bulunmadığına dair belgeyi (veya yapılandırmaya uyum belgesini) eksiksiz hazırlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Eğitim, danışmanlık, yol ve konaklama giderlerini bu destek kapsamına dahil etmeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Belge asıllarını en az 10 yıl saklayın; denetimde istenebiliyor
          </div>
        </div>
      </section>

      {/* 10. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı aşağıdaki birincil kaynaklara dayanmaktadır. Başvuru
          öncesinde güncel oran, limit ve belge listesini doğrudan bu
          kaynaklardan teyit etmenizi öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <a href="https://www.resmigazete.gov.tr/eskiler/2022/08/20220818-5.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              5973 sayılı İhracat Destekleri Hakkında Karar (Resmî Gazete, 18.08.2022/31927)
            </a>
          </li>
          <li>
            <a href="https://ticaret.gov.tr/data/63341ce713b8769ec0647ebe/30.06.2025 PAZARA GİRİŞ BELGESİNE İLİŞKİN GENELGE.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ticaret Bakanlığı &quot;Pazara Giriş Belgesi Desteğine İlişkin Genelge&quot;
            </a>
          </li>
          <li>
            <a href="https://ticaret.gov.tr/destekler/ihracat-destekleri" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ticaret Bakanlığı İhracat Destekleri sayfası
            </a>
          </li>
          <li>
            <a href="https://ticaret.gov.tr/data/5b8d8f3013b876125c08b3a8/EK-1B Destek Kapsamındaki Pazara Giriş Belgeleri (26.06.2026).pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ek-1/B Destek Kapsamındaki Pazara Giriş Belgeleri Listesi (güncel sürüm)
            </a>
          </li>
        </ul>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              CE belgesi pazara giriş belgesi desteği kapsamında mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Kapsam, Ticaret Bakanlığı&apos;nın düzenli güncellediği Ek-1/B
              listesine göre belirleniyor ve bu liste zaman içinde
              değişebiliyor. Bir belgenin kapsamda olup olmadığını kesin
              şekilde öğrenmenin tek yolu, başvuru öncesinde listenin
              güncel sürümünü ticaret.gov.tr üzerinden kontrol etmek.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek oranı ve üst limit ne kadar?
            </h3>
            <p className="leading-8 text-gray-700">
              5973 sayılı Karar&apos;ın 3&apos;üncü maddesine göre destek
              oranı %50, üst limit ise şirket başına yıllık 4.000.000 TL.
              Bu limit, bir takvim yılında alınan tüm pazara giriş belgesi
              ve ruhsatlandırma/kayıt desteklerinin toplamını kapsıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Belge yenileme giderleri destekleniyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, ancak bir şartla: önceki belgenin geçerlilik süresi
              içinde ihracat yapıldığının belgelenmesi gerekiyor. Bu şart
              sağlanmazsa yenileme gideri destek kapsamına alınmıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuruyu ne zamana kadar yapmam gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Pazara giriş belgesi giderlerinde, belgenin düzenlenme
              tarihinden itibaren 6 ay içinde; ruhsatlandırma ve kayıt
              giderlerinde ise ödeme belgesinin tarihinden itibaren 6 ay
              içinde başvurunun DYS&apos;ye iletilmiş olması gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Pazara giriş belgesi desteği ile pazara giriş projesi hazırlama desteği aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Pazara giriş belgesi desteği (Madde 3), somut bir
              sertifika/ruhsat giderini karşılar. Pazara giriş projesi
              hazırlama desteği (Madde 5) ise hedef pazar stratejisine
              dair bir danışmanlık/rapor sürecinin giderini karşılar; proje
              başına 200.000 TL&apos;ye kadar ve en fazla 2 proje için
              kullanılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuruyu nereden yapıyorum?
            </h3>
            <p className="leading-8 text-gray-700">
              Başvuru, Destek Yönetim Sistemi (DYS) üzerinden, şirketin
              üyesi olduğu İhracatçı Birlikleri Genel Sekreterliği (İBGS)
              aracılığıyla yapılıyor.
            </p>
          </div>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İhracata hazırlanan veya mevcut ihracatını büyütmek isteyen bir
          şirket için sertifika ve ruhsat giderleri, çoğu zaman gözden
          kaçan ama ciddi tutarlara ulaşabilen bir maliyet kalemi. Pazara
          Giriş Belgesi Desteği, bu maliyetin yarısını, yıllık 4.000.000
          TL&apos;ye kadar devletten geri almanızı sağlıyor; şartı,
          belgenin Ek-1/B listesinde olması ve başvurunun 6 aylık süre
          içinde eksiksiz yapılması.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hangi belgelerinizin destek kapsamında olduğundan DYS üzerinden
          başvurunuzun hazırlanmasına kadar süreci Koray Akdağ / Sistem
          Global Danışmanlık olarak tek elden yürütüyoruz.{" "}
          <Link href="/#contact" className="text-orange-600 underline">
            Sertifika ve ruhsat giderlerinizin devlet desteğine uygunluğunu birlikte değerlendirelim.
          </Link>
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/madrid-protokolu-yurt-disinda-marka-tescili-nasil-yapilir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">MARKA VE FİKRİ MÜLKİYET • YURT DIŞI TESCİL • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Madrid Protokolü ile Yurt Dışında Marka Tescili Nasıl Yapılır?</h3>
          </Link>
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TİCARET BAKANLIĞI • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri 2026</h3>
          </Link>
          <Link
            href="/blog/gumruk-mevzuati-yetkilendirilmis-yukumlu-statusu-yys-nedir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">GÜMRÜK MEVZUATI • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Gümrük Mevzuatı ve Yetkilendirilmiş Yükümlü Statüsü (YYS) Nedir?</h3>
          </Link>
          <Link
            href="/blog/ur-ge-destegine-nasil-basvurulur-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">UR-GE • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">UR-GE Desteğine Nasıl Başvurulur?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"CE belgesi pazara giriş belgesi desteği kapsamında mı?","acceptedAnswer":{"@type":"Answer","text":"Kapsam, Ticaret Bakanlığı'nın düzenli güncellediği Ek-1/B listesine göre belirleniyor ve bu liste zaman içinde değişebiliyor. Bir belgenin kapsamda olup olmadığını kesin şekilde öğrenmenin tek yolu, başvuru öncesinde listenin güncel sürümünü ticaret.gov.tr üzerinden kontrol etmek."}},{"@type":"Question","name":"Destek oranı ve üst limit ne kadar?","acceptedAnswer":{"@type":"Answer","text":"5973 sayılı Karar'ın 3'üncü maddesine göre destek oranı %50, üst limit ise şirket başına yıllık 4.000.000 TL. Bu limit, bir takvim yılında alınan tüm pazara giriş belgesi ve ruhsatlandırma/kayıt desteklerinin toplamını kapsıyor."}},{"@type":"Question","name":"Belge yenileme giderleri destekleniyor mu?","acceptedAnswer":{"@type":"Answer","text":"Evet, ancak bir şartla: önceki belgenin geçerlilik süresi içinde ihracat yapıldığının belgelenmesi gerekiyor. Bu şart sağlanmazsa yenileme gideri destek kapsamına alınmıyor."}},{"@type":"Question","name":"Başvuruyu ne zamana kadar yapmam gerekiyor?","acceptedAnswer":{"@type":"Answer","text":"Pazara giriş belgesi giderlerinde, belgenin düzenlenme tarihinden itibaren 6 ay içinde; ruhsatlandırma ve kayıt giderlerinde ise ödeme belgesinin tarihinden itibaren 6 ay içinde başvurunun DYS'ye iletilmiş olması gerekiyor."}},{"@type":"Question","name":"Pazara giriş belgesi desteği ile pazara giriş projesi hazırlama desteği aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Pazara giriş belgesi desteği (Madde 3), somut bir sertifika/ruhsat giderini karşılar. Pazara giriş projesi hazırlama desteği (Madde 5) ise hedef pazar stratejisine dair bir danışmanlık/rapor sürecinin giderini karşılar; proje başına 200.000 TL'ye kadar ve en fazla 2 proje için kullanılabilir."}},{"@type":"Question","name":"Başvuruyu nereden yapıyorum?","acceptedAnswer":{"@type":"Answer","text":"Başvuru, Destek Yönetim Sistemi (DYS) üzerinden, şirketin üyesi olduğu İhracatçı Birlikleri Genel Sekreterliği (İBGS) aracılığıyla yapılıyor."}}]}) }}
      />
    </BlogLayout>
  );
}
