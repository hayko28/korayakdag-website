import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Türk Eximbank İhracat Kredisi ve Alacak Sigortası Rehberi | Koray Akdağ",
  description: "Türk Eximbank'ın kısa ve orta-uzun vadeli ihracat kredileri, alacak sigortası (ihracat kredi sigortası) türleri, kimlerin başvurabileceği, faiz oranları ve başvuru süreciyle KOBİ ihracatçılar için 2026 güncel rehber.",
  keywords: [
    "türk eximbank ihracat kredisi",
    "eximbank alacak sigortası",
    "ihracat kredi sigortası nedir",
    "sevk öncesi ihracat kredisi",
    "eximbank faiz oranları 2026",
    "eximbank nasıl başvurulur",
    "ihracatçı kredi sigortası",
    "kısa vadeli alacak sigortası",
    "eximbank kobi kredisi",
    "ihracat finansmanı danışmanlığı",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türk Eximbank İhracat Kredisi ve Alacak Sigortası Rehberi"
      description="İhracat yapan veya yapmayı planlayan şirketler için iki temel araç: nakit ihtiyacını karşılayan ihracat kredileri ve yurt dışı alıcıdan tahsilat riskini karşılayan alacak sigortası. Türk Eximbank'ın ürün gamı, faiz oranları, kimlerin başvurabileceği ve başvuru süreciyle 2026 güncel rehber."
      category="İHRACAT FİNANSMANI • TÜRK EXIMBANK • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="turk-eximbank-ihracat-kredisi-ve-alacak-sigortasi-rehberi"
      coverImage="https://images.unsplash.com/photo-1605745341112-85968b19335b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Türk Eximbank Ne Sunuyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>Türk Eximbank</strong>, Türkiye&apos;nin resmî ihracat kredi kuruluşudur; hibe değil, <strong>geri ödemeli kredi</strong> ve <strong>sigorta</strong> ürünleri sunar. Ticaret Bakanlığı&apos;nın geri ödemesiz destek programlarından bu yönüyle ayrılır.</li>
          <li>✔ İki ana ürün grubu var: <strong>ihracat kredileri</strong> (sevk öncesi/sonrası finansman, ihracata hazırlık kredisi, yatırım kredisi) ve <strong>alacak sigortası</strong> (ihracatçının yurt dışı alıcıdan tahsilat riskine karşı korunması).</li>
          <li>✔ Kısa vadeli kredilerde vade genellikle <strong>120-720 gün</strong> arasında değişiyor, alt limit yok, firma bazlı limit bankaca belirleniyor.</li>
          <li>✔ Kısa Vadeli Alacak Sigortası&apos;nda <strong>brüt fatura tutarının %90&apos;ı</strong> ticari ve politik risklere karşı tazmin ediliyor; poliçe tanzim ücreti 1.500 TL.</li>
          <li>✔ Krediler, ürüne göre <strong>aracı ticari bankalar</strong> veya <strong>doğrudan Eximbank</strong> üzerinden kullandırılıyor; ihracat yapabilmek için TİM&apos;e bağlı bir ihracatçı birliğine üyelik ayrıca gerekiyor.</li>
          <li>✔ Faiz oranları haftalık güncellendiği için, başvuru öncesi güncel oranı mutlaka Eximbank&apos;ın resmî &quot;Faiz ve Kâr Payı Oranları&quot; sayfasından teyit etmek gerekir.</li>
          <li>✔ Hangi kredi/sigorta ürününün işinize uygun olduğuna karar vermek, ihracat hacminize, alıcı profilinize ve nakit akışı ihtiyacınıza bağlı stratejik bir tercihtir.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Türk Eximbank Nedir? Ticaret Bakanlığı Desteklerinden Farkı
          </Link>
          <Link href="#kisa-vadeli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kısa Vadeli İhracat Kredileri
          </Link>
          <Link href="#orta-uzun-vadeli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Orta-Uzun Vadeli Krediler
          </Link>
          <Link href="#alacak-sigortasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Alacak Sigortası (İhracat Kredi Sigortası)
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Kredi mi, Sigorta mı? Karıştırmayın
          </Link>
          <Link href="#kimler-basvurabilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Kimler Başvurabilir, Başvuru Nasıl Yapılır?
          </Link>
          <Link href="#faiz-oranlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Faiz Oranları ve Güncel Veriler
          </Link>
          <Link href="#kimler-icin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Kimler İçin Uygun?
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Türk Eximbank Nedir? Ticaret Bakanlığı Desteklerinden Farkı
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türk Eximbank (Türkiye İhracat Kredi Bankası A.Ş.), Türkiye&apos;nin
          resmî ihracat kredi kuruluşudur ve Hazine ve Maliye Bakanlığı&apos;na
          bağlı bir kamu bankası olarak faaliyet gösterir. Görevi, ihracatçıların
          ve döviz kazandırıcı hizmet sağlayan firmaların dünya pazarlarında
          rekabet gücünü artırmak için finansman ve risk yönetimi araçları
          sunmaktır.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu noktada sık karışan bir ayrım var.{" "}
          <Link href="/blog/ticaret-bakanligi-ihracat-destekleri-2026" className="text-orange-600 underline">
            Ticaret Bakanlığı&apos;nın ihracat destekleri yazımızda
          </Link>{" "}
          ayrıntılı anlattığımız Pazara Giriş, Fuar, E-İhracat gibi programlar{" "}
          <strong>geri ödemesiz destek/hibe</strong> niteliğindedir; belirli bir
          harcamanın belirli bir oranı, belge karşılığında geri ödemesiz olarak
          karşılanır. Türk Eximbank ise bir <strong>bankadır</strong>: sunduğu
          krediler geri ödemelidir ve faiz taşır, alacak sigortası ise bir
          <strong> prim karşılığında</strong> satın alınan bir risk teminatıdır.
          Bir firma aynı anda hem Ticaret Bakanlığı&apos;nın hibe desteklerinden
          hem de Eximbank&apos;ın kredi/sigorta ürünlerinden yararlanabilir; ikisi
          birbirinin alternatifi değil, tamamlayıcısıdır.
        </p>
        <p className="leading-8 text-gray-700">
          Türk Eximbank&apos;ın ürün gamı iki ana başlıkta toplanır: ihracatın
          finansmanını sağlayan <strong>krediler</strong> ve ihracatçının
          alacağını güvence altına alan <strong>alacak sigortası</strong>.
          Aşağıdaki bölümlerde ikisini de ayrı ayrı inceliyoruz.
        </p>
      </section>

      {/* 2. KISA VADELİ KREDİLER */}
      <section id="kisa-vadeli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kısa Vadeli İhracat Kredileri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kısa vadeli krediler, ihracat öncesi (sevk öncesi) veya ihracat
          sonrası (sevk sonrası) dönemdeki nakit ihtiyacını karşılamak için
          tasarlanmıştır. Türk Eximbank&apos;ın güncel ürün setinde öne çıkan
          beş kredi programı şöyledir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Kredi</th>
                <th className="p-4">Ne İşe Yarar</th>
                <th className="p-4">Kimler İçin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sevk Öncesi İhracat Kredisi (SÖİK)</td>
                <td className="p-4">Üretim/sipariş aşamasında işletme sermayesi finansmanı</td>
                <td className="p-4">Yerleşik ihracatçı, imalatçı-ihracatçı, serbest bölge kullanıcısı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Reeskont Kredisi</td>
                <td className="p-4">İhracat senedinin/poliçenin iskonto edilerek erken nakde çevrilmesi</td>
                <td className="p-4">İmalatçılar, hizmet ihracatçıları, ihracatçılar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sevk Sonrası Reeskont Kredisi</td>
                <td className="p-4">Mal sevkinden sonra doğan ihracat alacağının iskontosu</td>
                <td className="p-4">Vadeli satış yapan ihracatçılar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">İhracata Hazırlık Kredisi</td>
                <td className="p-4">Uluslararası rekabet gücünü artıracak hazırlık dönemi finansmanı</td>
                <td className="p-4">Yerleşik imalatçı ve ihracatçı firmalar</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">E-İhracat Destek Kredisi</td>
                <td className="p-4">Dijital kanallarla (pazaryeri, kendi e-ticaret sitesi) yapılan ihracatın finansmanı</td>
                <td className="p-4">E-ihracat yapan/yapmayı planlayan firmalar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">⏱️ Vade ve Limit</h3>
            <p className="text-gray-700">
              SÖİK ve İhracata Hazırlık Kredisi&apos;nde vade seçenekleri
              genellikle <strong>120 günden 720 güne</strong> kadar, 1 ila 8
              taksit hâlinde yapılandırılır. Kredide bir alt limit yoktur;
              firma bazlı üst limit, bankanın yaptığı likidite/tahsis
              çalışmasına göre belirlenir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📝 Teminat</h3>
            <p className="text-gray-700">
              İhracata Hazırlık Kredisi&apos;nde teminat olarak Kesin Teminat
              Mektubu veya İhracatı Geliştirme A.Ş. (İGE) kefaleti kabul
              edilir. İGE kefaleti, özellikle teminat mektubu temininde
              zorlanan KOBİ&apos;ler için pratikte önemli bir kolaylıktır.
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Kaynak: Türk Eximbank, &quot;Krediler&quot; ve ilgili ürün sayfaları
          (eximbank.gov.tr).
        </p>
      </section>

      {/* 3. ORTA-UZUN VADELİ */}
      <section id="orta-uzun-vadeli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Orta-Uzun Vadeli Krediler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Sevk öncesi/sonrası finansmanın ötesinde, yatırım ve büyüme
          ihtiyacına yönelik krediler de Türk Eximbank&apos;ın ürün gamında
          yer alır:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">İhracata Yönelik Yatırım Kredisi</h3>
            <p className="text-sm text-gray-700">
              Makine, teçhizat ve aksam harcamalarını finanse eder; ihracat
              kapasitesini büyütecek yatırımlar için kullanılır.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">İhracata Yönelik İşletme Sermayesi Kredisi</h3>
            <p className="text-sm text-gray-700">
              Harcama belgelerine dayalı olarak kullandırılır, büyüyen
              ihracatçının artan işletme sermayesi ihtiyacını karşılar.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">Marka Kredisi</h3>
            <p className="text-sm text-gray-700">
              Yurt dışında marka geliştirme ve tanıtım faaliyetlerini
              finanse eder; markalaşma stratejisi olan ihracatçılar için
              uygundur.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">Finansal Kiralama Kredisi</h3>
            <p className="text-sm text-gray-700">
              Yatırımın finansal kiralama (leasing) yoluyla finanse edildiği
              durumlarda kullanılır.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">IBRD Yeşil İhracat Destek Kredisi</h3>
            <p className="text-sm text-gray-700">
              Dünya Bankası kaynaklı, yeşil dönüşüm yatırımlarını
              destekleyen bir kredi programı.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">AIIB Yeşil Altyapı Destek Kredisi</h3>
            <p className="text-sm text-gray-700">
              Asya Altyapı Yatırım Bankası (AIIB) kaynaklı, yeşil altyapı
              yatırımlarını finanse eden kredi programı.
            </p>
          </div>
        </div>
      </section>

      {/* 4. ALACAK SİGORTASI */}
      <section id="alacak-sigortasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Alacak Sigortası (İhracat Kredi Sigortası)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir ihracatçı için en büyük risklerden biri, malı gönderdikten
          sonra yurt dışındaki alıcının ödeme yapmamasıdır. Alacak sigortası
          (ihracat kredi sigortası) tam olarak bu riski karşılar: alıcının
          iflası, ödeme güçlüğü, malı kabul etmemesi gibi ticari risklerle,
          savaş, ithal yasağı, transfer güçlüğü gibi politik risklere karşı
          ihracatçıyı korur.
        </p>
        <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🛡️ Kısa Vadeli Alacak Sigortası: Temel Rakamlar
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-emerald-600">
            <li><strong>Teminat oranı:</strong> Brüt fatura tutarının %90&apos;ı tazmin edilir.</li>
            <li><strong>Kapsanan vade:</strong> 360 güne kadar vadeli satışlar.</li>
            <li><strong>Poliçe tanzim ücreti:</strong> 1.500 TL (tek seferlik).</li>
            <li><strong>Alıcı limiti analiz ücreti:</strong> Her alıcı limit başvurusunda 2.500 TL.</li>
            <li><strong>Prim oranı:</strong> Sabit değildir; alıcının ülke risk sınıfı, ödeme vadesi, ödeme şekli ve alıcının kamu/özel niteliği gibi kriterlere göre işlem bazında hesaplanır.</li>
          </ul>
        </div>
        <p className="mt-8 mb-6 leading-8 text-gray-700">
          Kısa Vadeli Alacak Sigortası dışında iki ürün daha dikkat çekiyor.{" "}
          <strong>Spesifik İhracat Kredi Sigortası</strong>, ihracatçının
          tüm ihracatını değil, tek bir satış sözleşmesinden doğacak
          alacağını sigortalatmasına imkân tanır ve orta-uzun vadeli
          işlemlerde tercih edilir. <strong>Sevk Öncesi İhracat Kredi
          Sigortası</strong> ise malın henüz sevk edilmediği, üretim/sipariş
          aşamasındaki riski (alıcının siparişi iptal etmesi gibi) kapsar.
          Katılım bankacılığı esasına göre çalışmak isteyen firmalar için de{" "}
          <strong>Katılım Esaslı Alacak Sigortası (KEAS)</strong> ayrı bir
          seçenek olarak sunuluyor.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Başvuru Formu ve Belgeler</h3>
            <p className="mt-2 text-sm text-gray-600">İmza sirküleri, kimlik bilgileri, poliçe tanzim ücreti dekontu</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Poliçe İmzalama</h3>
            <p className="mt-2 text-sm text-gray-600">Poliçenin taraflarca imzalanıp aktive edilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">Alıcı Limiti Talebi</h3>
            <p className="mt-2 text-sm text-gray-600">E-şube üzerinden her alıcı için ayrı limit talebi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">Aylık Sevkiyat Bildirimi</h3>
            <p className="mt-2 text-sm text-gray-600">Poliçe kapsamındaki her sevkiyatın düzenli bildirilmesi</p>
          </div>
        </div>
      </section>

      {/* 5. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Kredi mi, Sigorta mı? Karıştırmayın
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ İkisi Farklı İhtiyaçlara Cevap Verir
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>İhracat kredisi:</strong> Nakit ihtiyacınızı karşılar. Üretim yapabilmeniz, siparişi zamanında sevk edebilmeniz veya vadeli sattığınız malın bedelini beklerken işletmenizin nakit akışının kesilmemesi için kullanılır. Geri ödemeli bir borçlanmadır, faiz taşır.</li>
            <li><strong>Alacak sigortası:</strong> Nakit vermez, risk transfer eder. Malı gönderdiniz, faturayı kestiniz, ödeme vadesi geldi ama alıcı ödemedi; işte bu durumda devreye girer ve fatura tutarının büyük bölümünü (kısa vadeli sigortada %90&apos;ını) tazmin eder.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Pratikte bu iki araç birbirini dışlamaz, tamamlar. Vadeli
            satış yapan bir ihracatçı, hem sevk sonrası kredi ile alacağını
            erken nakde çevirebilir hem de aynı alacağı sigorta kapsamına
            alarak tahsil edilememe riskine karşı korunabilir. Bazı bankalar,
            sevk sonrası kredi veya faktoring başvurularında alacak sigortası
            poliçesini ek bir teminat unsuru olarak da değerlendirir.
          </p>
        </div>
      </section>

      {/* 6. KİMLER BAŞVURABİLİR */}
      <section id="kimler-basvurabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Kimler Başvurabilir, Başvuru Nasıl Yapılır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türk Eximbank ürünlerinin başvuru kriterleri geniş bir yelpazeye
          yayılır ve tek bir çatı altında toplanabilir:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">✅ Kimler Uygun?</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700 marker:text-orange-500">
              <li>Türkiye&apos;de yerleşik ihracatçı ve imalatçı-ihracatçı firmalar</li>
              <li>KKTC&apos;de mukim ihracatçılar</li>
              <li>Serbest bölge kullanıcıları</li>
              <li>Turizm, ulaştırma, müteahhitlik gibi döviz kazandırıcı hizmet sağlayan firmalar</li>
              <li>Hem büyük ölçekli ihracatçılar hem de KOBİ&apos;ler (birçok kredide ayrı bir KOBİ hesaplama esası uygulanır)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🏦 Başvuru Nasıl Yapılır?</h3>
            <p className="text-gray-700">
              Ürüne göre değişir. Reeskont Kredisi ve SÖİK gibi bazı kısa
              vadeli krediler <strong>aracı ticari bankalar</strong>{" "}
              üzerinden kullandırılırken, İhracata Hazırlık Kredisi gibi
              bazı ürünlerde başvuru evrak seti doğrudan{" "}
              <strong>Eximbank</strong>&apos;a iletilir. Alacak sigortasında
              ise poliçe başvurusu doğrudan Eximbank&apos;a yapılır.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Eximbank ürünlerine başvurmadan önce bilinmesi gereken bir ön
          şart var: Türkiye&apos;de ihracat yapabilmek için firmanın{" "}
          <strong>Türkiye İhracatçılar Meclisi (TİM)</strong>&apos;e bağlı
          61 ihracatçı birliğinden en az birine üye olması gerekir. Bu,
          Eximbank&apos;a özgü bir üyelik değil, ihracat yapmanın genel bir
          ön koşuludur; ihracatçı birliği üyeliği tamamlandıktan sonra
          Eximbank&apos;ın ilgili ürün sayfasında yer alan başvuru formu ve
          evrak setiyle süreç başlatılır.
        </p>
      </section>

      {/* 7. FAİZ ORANLARI */}
      <section id="faiz-oranlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Faiz Oranları ve Güncel Veriler
        </h2>
        <p className="mb-8 leading-8 text-gray-700">
          Türk Eximbank faiz oranları, kredi vadesi, tutarı ve para
          birimine göre değişir ve piyasa koşullarına bağlı olarak sık
          aralıklarla güncellenir. Yazının hazırlandığı tarihte Eximbank&apos;ın
          resmî oranlar sayfasında görülen aralıklar şöyleydi:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Kredi Türü</th>
                <th className="p-4">TL Faiz Aralığı</th>
                <th className="p-4">USD/EUR Faiz Aralığı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sevk Öncesi Reeskont</td>
                <td className="p-4">%13,50 - %17,00</td>
                <td className="p-4">%6,00 - %8,25</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sevk Sonrası Reeskont</td>
                <td className="p-4">%13,25 - %15,75</td>
                <td className="p-4">%5,25 - %7,50</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Sürdürülebilir/Yeşil Kredi</td>
                <td className="p-4 text-gray-500">-</td>
                <td className="p-4">%5,00 - %7,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Önemli:</strong> Bu oranlar haftalık olarak değişebilir
            ve nihai oran; firmanın kredi notuna, vadeye, para birimine ve
            piyasa koşullarına göre farklılaşır. Başvuru yapmadan hemen
            önce güncel oranı mutlaka Türk Eximbank&apos;ın resmî
            &quot;Faiz ve Kâr Payı Oranları&quot; sayfasından veya başvuru
            yaptığınız aracı bankadan teyit edin.
          </p>
        </div>
      </section>

      {/* 8. KİMLER İÇİN UYGUN */}
      <section id="kimler-icin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Kimler İçin Uygun?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              💰 İhracat Kredisi Kimler İçin Öncelikli?
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Vadeli satış yapan ve sevkiyat ile tahsilat arasındaki dönemde nakit sıkışıklığı yaşayan ihracatçılar</li>
              <li>✔ Büyük bir siparişi karşılamak için üretim öncesi ek işletme sermayesine ihtiyaç duyan imalatçı-ihracatçılar</li>
              <li>✔ Yeni bir pazara yatırım kapasitesi (makine/teçhizat) artırmak isteyen şirketler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              🛡️ Alacak Sigortası Kimler İçin Öncelikli?
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Yeni bir ülkede/yeni bir alıcıyla ilk kez vadeli satışa başlayan firmalar</li>
              <li>✔ Tek bir büyük alıcıya bağımlılığı yüksek olan, tahsilat riskini tek elde toplamak istemeyen ihracatçılar</li>
              <li>✔ E-ihracat ölçeğinden çıkıp klasik B2B vadeli satışa geçen büyüme aşamasındaki{" "}
                <Link href="/blog/e-ihracat-amazon-etsy-trendyol-global-satisa-nasil-baslanir" className="text-orange-600 underline">
                  mikro ihracatçılar
                </Link>
                {" "}(pazaryerinden çıkıp doğrudan yurt dışı alıcıyla vadeli çalışmaya başladıklarında tahsilat riski ilk kez gündeme gelir)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.eximbank.gov.tr/tr/urun-ve-hizmetlerimiz/krediler" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Türk Eximbank - Krediler
              </a>
            </li>
            <li>
              <a href="https://www.eximbank.gov.tr/tr/urun-ve-hizmetlerimiz/alacak-sigortasi" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Türk Eximbank - Alacak Sigortası
              </a>
            </li>
            <li>
              <a href="https://www.eximbank.gov.tr/tr/urun-ve-hizmetlerimiz/alacak-sigortasi/kisa-vadeli-alacak-sigortasi" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Türk Eximbank - Kısa Vadeli Alacak Sigortası
              </a>
            </li>
            <li>
              <a href="https://www.eximbank.gov.tr/tr/urun-ve-hizmetlerimiz/krediler/kisa-vadeli-ihracat-kredileri/sevk-oncesi-ihracat-kredisi" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Türk Eximbank - Sevk Öncesi İhracat Kredisi
              </a>
            </li>
            <li>
              <a href="https://www.eximbank.gov.tr/tr/faiz-ve-kar-payi-oranlari" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Türk Eximbank - Faiz ve Kâr Payı Oranları
              </a>
            </li>
            <li>
              <a href="https://tim.org.tr/tr/ihracatci-birliklerine-nasil-uye-olabilirim" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Türkiye İhracatçılar Meclisi (TİM) - İhracatçı Birliklerine Üyelik
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 10. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Türk Eximbank kredisi almak için ihracatçı birliğine üye olmak şart mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Eximbank ürününe özgü bir üyelik şartı yok, ancak Türkiye&apos;de
              yasal olarak ihracat yapabilmek için TİM&apos;e bağlı 61
              ihracatçı birliğinden en az birine üye olmak gerekiyor. Bu
              üyelik tamamlandıktan sonra Eximbank ürünlerine başvuru
              yapılabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOBİ&apos;ler Eximbank kredilerinden yararlanabiliyor mu, büyük ihracatçılardan farkı var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, Sevk Öncesi İhracat Kredisi ve İhracata Hazırlık Kredisi
              gibi başlıca kısa vadeli ürünlerde ayrı bir KOBİ hesaplama
              esası uygulanıyor. Kredi limiti her koşulda firma bazlı
              belirlense de KOBİ statüsündeki firmalar başvuru sürecine
              dahil ediliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Alacak sigortası olmadan ihracat yapabilir miyim, sigorta zorunlu mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Alacak sigortası yasal bir zorunluluk değil, isteğe bağlı bir
              risk yönetim aracıdır. Özellikle yeni bir pazarda, yeni bir
              alıcıyla ve vadeli satış koşullarında çalışırken tahsilat
              riskini azaltmak isteyen ihracatçılar tercih ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Eximbank kredisi ile Ticaret Bakanlığı ihracat desteği aynı anda kullanılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, ikisi farklı mekanizmalardır ve birbirini dışlamaz.
              Ticaret Bakanlığı&apos;nın geri ödemesiz destekleri belirli
              harcama kalemlerini (fuar, pazara giriş, e-ihracat gibi)
              karşılarken, Eximbank&apos;ın kredileri nakit ihtiyacını,
              alacak sigortası ise tahsilat riskini kapsar. Bir firma her
              üç araçtan aynı anda, farklı ihtiyaçlar için yararlanabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeni kurulan bir ihracatçı firma daha ilk yılında Eximbank kredisi kullanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Prensip olarak mümkün, ancak kredi limiti bankanın yapacağı
              firma analizine (mali tablolar, ihracat performansı,
              teminat kapasitesi) göre belirlendiği için yeni kurulan bir
              firmanın limiti düşük çıkabilir veya teminat mektubu/İGE
              kefaleti şartı daha belirleyici hâle gelebilir. Somut durum
              başvuru anında bankanın değerlendirmesine bağlıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Alacak sigortasının primi ne kadar, sabit bir oran var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, sabit bir prim oranı yok. Prim; ihracatın vadesine,
              ödeme şekline, alıcının bulunduğu ülkenin risk sınıfına ve
              alıcının kamu/özel niteliğine göre işlem bazında hesaplanıyor.
              Poliçe tanzim ücreti (1.500 TL) ve alıcı limiti analiz ücreti
              (2.500 TL) ise sabit kalemler.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🚀 Şirketiniz İçin Doğru Kredi ve Sigorta Kombinasyonunu Birlikte Belirleyelim
          </h3>
          <p className="leading-8 text-gray-700">
            Hangi Eximbank kredisinin nakit akışınıza uygun olduğuna, alacak
            sigortasına ihtiyacınız olup olmadığına ve başvuru sürecinin
            nasıl yönetileceğine karar vermek; ihracat hacminize, alıcı
            profilinize ve mevcut finansman yapınıza bağlı stratejik bir
            karardır.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              İş Geliştirme ve Stratejik Danışmanlık kapsamında şirketinizin
              ihracat finansmanı ihtiyacını birlikte değerlendirmemiz için
              bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* SONUÇ */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türk Eximbank, ihracatçıların önündeki iki temel engeli hedef
          alan bir kurum: nakit akışı sıkıntısı ve tahsilat riski. Kredi
          ürünleri birincisini, alacak sigortası ise ikincisini çözüyor.
          Ticaret Bakanlığı&apos;nın geri ödemesiz destekleriyle birlikte
          kullanıldığında, ihracatçı firmaların büyüme sürecinde
          faydalanabileceği üç ayrı finansman ve risk yönetimi katmanı
          ortaya çıkıyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, hangi kredi
          veya sigorta ürününün işinize uygun olduğunun belirlenmesinden
          başvuru sürecinin doğru kurgulanmasına, Ticaret Bakanlığı
          destekleriyle Eximbank araçlarının birlikte planlanmasına kadar
          ihracat finansmanı sürecinin tamamında yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri 2026</h3>
          </Link>
          <Link
            href="/blog/doviz-donusum-destegi-2026-yeni-donem"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • KAMBİYO MEVZUATI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Döviz Dönüşüm Desteği 2026</h3>
          </Link>
          <Link
            href="/blog/e-ihracat-amazon-etsy-trendyol-global-satisa-nasil-baslanir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">E-İHRACAT • PAZARYERİ SATIŞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">E-İhracat: Amazon, Etsy ve Trendyol Global&apos;de Satışa Nasıl Başlanır?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
