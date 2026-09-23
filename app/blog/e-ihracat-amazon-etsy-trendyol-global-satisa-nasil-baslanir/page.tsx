import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "E-İhracat: Amazon, Etsy ve Trendyol Global'de Satışa Nasıl Başlanır? | Koray Akdağ",
  description: "Amazon Global Selling, Etsy ve Trendyol Global'de satıcı olma süreci, gerekli belgeler, 2026 güncel mikro ihracat/ETGB limitleri, KDV istisnası ve ödeme altyapısıyla mikro ihracatçılar için kapsamlı rehber.",
  keywords: [
    "e-ihracat nedir",
    "amazon global selling türkiye",
    "etsy türkiye satış",
    "trendyol global satıcı olma",
    "mikro ihracat 2026",
    "etgb limitleri",
    "e-ihracat nasıl yapılır",
    "amazon fba türkiye",
    "e-ihracat vergi",
    "pazaryeri ihracat danışmanlığı",
  ],
  alternates: {
    canonical: "/blog/e-ihracat-amazon-etsy-trendyol-global-satisa-nasil-baslanir",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="E-İhracat: Amazon, Etsy ve Trendyol Global'de Satışa Nasıl Başlanır?"
      description="Yurt dışına tek tek paket göndermek artık büyük bir ihracatçı olmayı gerektirmiyor. Amazon Global Selling, Etsy ve Trendyol Global üzerinden mikro ihracatçı olma süreci, gerekli belgeler, 2026 güncel gümrük/KDV avantajları ve sık yapılan hatalarla kapsamlı rehber."
      category="E-İHRACAT • PAZARYERİ SATIŞI • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="e-ihracat-amazon-etsy-trendyol-global-satisa-nasil-baslanir"
      coverImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: E-İhracata Nasıl Başlanır?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>E-ihracat</strong>, mikro ve KOBİ ölçekli işletmelerin Amazon, Etsy, Trendyol Global gibi pazaryerleri üzerinden doğrudan yurt dışındaki tüketiciye satış yapmasıdır. Toplu sevkiyat, aracı distribütör veya gümrük müşaviri zorunluluğu olan klasik ihracattan bu yönüyle ayrılır.</li>
          <li>✔ Üç platformun mantığı farklı: <strong>Amazon Global Selling</strong> ayrı bir Avrupa satıcı hesabı ve noter tasdikli belge seti ister, <strong>Etsy</strong> el yapımı/özel tasarım ürüne uygundur ve ödemeyi Payoneer üzerinden aktarır, <strong>Trendyol Global</strong> ise mevcut bir Trendyol mağazasının üzerine kurulan bir ihracat kanalıdır.</li>
          <li>✔ <strong>3 Ocak 2026&apos;da</strong> yürürlüğe giren Tebliğ (Seri No: 5) ile mikro ihracat limiti gönderi başına <strong>300 kg / 15.000 Euro&apos;dan 600 kg / 30.000 Euro&apos;ya</strong> çıkarıldı; bu tutarın altındaki gönderiler <strong>ETGB</strong> ile gümrük müşaviri olmadan yurt dışına çıkabiliyor.</li>
          <li>✔ Mikro ihracat kapsamındaki satışlar KDV Kanunu m.11/1-a uyarınca <strong>KDV&apos;den istisna</strong>; e-ihracat faturası %0 KDV ile kesilir.</li>
          <li>✔ Ticaret Bakanlığı&apos;nın bundan ayrı, gönderi bazlı değil harcama bazlı işleyen bir <strong>E-İhracat Destek Programı</strong> var (pazaryeri komisyonu, fulfillment, entegrasyon giderlerine destek); ikisini karıştırmamak gerekir.</li>
          <li>✔ Platformlarda mağaza açmadan önce <strong>marka tescilinin</strong> tamamlanmış olması, ileride hesabın askıya alınma riskini önemli ölçüde azaltır.</li>
          <li>✔ Hangi platformun işinize uygun olduğu; ürün tipine, mevcut yurt içi cironuza ve lojistik kapasitenize göre değişir, bu tercih stratejik bir karardır.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. E-İhracat Nedir? Klasik İhracattan Farkı
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Amazon, Etsy, Trendyol Global Karşılaştırması
          </Link>
          <Link href="#amazon" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Amazon Global Selling Süreci
          </Link>
          <Link href="#etsy" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Etsy&apos;de Satıcı Olma Süreci
          </Link>
          <Link href="#trendyol-global" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Trendyol Global Süreci
          </Link>
          <Link href="#mikro-ihracat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Mikro İhracat, ETGB ve KDV İstisnası
          </Link>
          <Link href="#odeme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Ödeme Altyapısı: Dövizi Türkiye&apos;ye Nasıl Getirirsiniz?
          </Link>
          <Link href="#destekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Ticaret Bakanlığı E-İhracat Desteği
          </Link>
          <Link href="#hatalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Yapılan Hatalar
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Kimler İçin Uygun?
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. E-İhracat Nedir? Klasik İhracattan Farkı
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Klasik ihracatta genellikle bir ihracatçı, yurt dışındaki bir
          distribütör veya toptancıyla anlaşır, konteyner dolusu ürünü tek
          seferde gönderir ve karşı taraf ürünü kendi pazarında dağıtır.
          E-ihracat ise bu zincirin ortasındaki aracıyı kaldırır: üretici
          veya satıcı, Amazon, Etsy ya da Trendyol Global gibi bir pazaryeri
          üzerinden doğrudan yurt dışındaki son tüketiciye (B2C) veya küçük
          işletmeye (B2B) satış yapar.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu fark, operasyonun ölçeğini de değiştirir. Klasik ihracatta tek
          bir sevkiyat onlarca ton olabilirken, e-ihracatta günlük onlarca
          küçük paket yurt dışına çıkar. Bu yüzden gümrük mevzuatı da
          e-ihracata özel, basitleştirilmiş bir rejim (mikro ihracat/ETGB)
          geliştirmiştir; aşağıda 6. bölümde bu rejimi ayrıntılı anlatıyoruz.
        </p>
        <p className="leading-8 text-gray-700">
          Bugün Türkiye&apos;de tekstil, ev tekstili, el yapımı ürünler,
          takı, oyuncak, ev aksesuarı, kozmetik ve otomotiv yedek parçası
          gibi kategorilerde binlerce mikro ihracatçı, hiç yurt dışına
          gitmeden ve büyük bir sermaye yatırmadan Amazon, Etsy veya
          Trendyol Global üzerinden satış yapıyor.
        </p>
      </section>

      {/* 2. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Amazon, Etsy, Trendyol Global Karşılaştırması
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Üç platform da &quot;pazaryeri&quot; olsa da hedef kitlesi, ürün
          profili ve operasyon modeli birbirinden oldukça farklı. Doğru
          platform seçimi, gereksiz yere üç platforma birden yatırım
          yapmanızı engelleyen ilk stratejik karardır:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Kriter</th>
                <th className="p-4">Amazon Global Selling</th>
                <th className="p-4">Etsy</th>
                <th className="p-4">Trendyol Global</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">İdeal Ürün Tipi</td>
                <td className="p-4">Markalı/seri üretim, hızlı tüketim ürünleri</td>
                <td className="p-4">El yapımı, özel tasarım, vintage ve niş ürünler</td>
                <td className="p-4">Mevcut Trendyol kataloğundaki hemen her kategori</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Kayıt Mantığı</td>
                <td className="p-4">Ayrı, yeni bir Avrupa satıcı hesabı açılır</td>
                <td className="p-4">Bağımsız Etsy mağaza hesabı açılır</td>
                <td className="p-4">Mevcut Trendyol mağazasının üzerine eklenir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Lojistik Model</td>
                <td className="p-4">FBA (Amazon deposu) veya kendi deponuzdan gönderim (FBM)</td>
                <td className="p-4">Çoğunlukla satıcının kendi deposundan doğrudan gönderim</td>
                <td className="p-4">Trendyol&apos;un yurt dışı fulfillment/kargo ağı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Ödeme Yöntemi</td>
                <td className="p-4">Amazon ödeme hesabı, ardından banka hesabına aktarım</td>
                <td className="p-4">Etsy Payments, çoğunlukla Payoneer üzerinden TL&apos;ye çevrim</td>
                <td className="p-4">Trendyol&apos;un standart satıcı ödeme akışı (TL bazlı)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Giriş Zorluğu</td>
                <td className="p-4">Orta-yüksek (belge seti geniş, aylık sabit ücret var)</td>
                <td className="p-4">Düşük (bireysel/esnaf düzeyinde de başlanabilir)</td>
                <td className="p-4">Düşük (mevcut satıcı için ek adım azdır)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. AMAZON */}
      <section id="amazon" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Amazon Global Selling Süreci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Amazon.com.tr üzerinde satıcı olmak ile Amazon&apos;un Avrupa
          pazaryerlerinde (İngiltere, Almanya, Fransa, İtalya, İspanya ve
          diğerleri) satış yapmak birbirinden ayrı hesap ve süreçlerdir.
          İkincisi &quot;Amazon Global Selling&quot; olarak adlandırılır ve
          Türkiye&apos;den doğrudan başvurulabilir.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📋 Gerekli Belgeler</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700 marker:text-orange-500">
              <li>Yasal işletme adı ve adresi, Vergi Kimlik Numarası</li>
              <li>Ticaret Sicil Gazetesi</li>
              <li>Noter tasdikli imza sirküleri</li>
              <li>Son 180 gün içinde alınmış faaliyet belgesi (oda kayıt belgesi)</li>
              <li>Ev adresini gösteren fatura (elektrik, su, doğalgaz, internet)</li>
              <li>Daha önce Amazon&apos;da kullanılmamış e-posta ve telefon numarası</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🚚 FBA (Fulfillment by Amazon)</h3>
            <p className="text-gray-700">
              Ürünler Amazon&apos;un lojistik merkezlerine toplu gönderilir;
              elleçleme, paketleme ve müşteriye teslimat Amazon tarafından
              yapılır. Karşılığında Prime etiketi ve Amazon müşteri hizmeti
              desteği kazanılır. FBM (satıcının kendi deposundan gönderimi)
              alternatifinde ise lojistik tamamen satıcıda kalır, komisyon
              oranı daha düşüktür ama operasyon yükü satıcıya aittir.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Avrupa Satıcı Hesabı Açma</h3>
            <p className="mt-2 text-sm text-gray-600">Amazon İngiltere üzerinden kayıt, 9 Avrupa pazaryerine tek hesapla erişim</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Belge Doğrulaması</h3>
            <p className="mt-2 text-sm text-gray-600">Şirket ve kimlik belgelerinin Amazon tarafından incelenmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">FBA/FBM Kararı</h3>
            <p className="mt-2 text-sm text-gray-600">Ürüne göre lojistik modelinin belirlenmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">Ürün Listeleme</h3>
            <p className="mt-2 text-sm text-gray-600">Kategori, marka onayı (varsa) ve ürün sayfasının hazırlanması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">5️⃣</div>
            <h3 className="text-base font-bold">Satış ve Ödeme Döngüsü</h3>
            <p className="mt-2 text-sm text-gray-600">Aylık sabit mağaza ücreti + kategori komisyonu düşülerek periyodik ödeme</p>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Kaynak: Amazon Satış Ortağı Merkezi, &quot;Avrupa&apos;ya Satış
          Yapmak&quot; resmî rehberi (satis.amazon.com.tr).
        </p>
      </section>

      {/* 4. ETSY */}
      <section id="etsy" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Etsy&apos;de Satıcı Olma Süreci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Etsy, seri üretim ürünlerden çok el yapımı, özel tasarım, vintage
          ve niş hobi ürünlerinin satıldığı bir pazaryeri. Türkiye&apos;den
          Etsy&apos;de mağaza açmanın önünde hukuki bir engel yok; platform
          95&apos;ten fazla ülkeden satıcı kabul ediyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💳 Maliyet Kalemleri (2026)</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700 marker:text-orange-500">
              <li>Mağaza açılışı: tek seferlik aktivasyon ücreti</li>
              <li>Ürün listeleme başına küçük bir ücret</li>
              <li>Her satışta işlem ücreti (%6,5 civarında) + ödeme işlem ücreti</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💸 Ödeme Akışı</h3>
            <p className="text-gray-700">
              Etsy, kazancınızı Etsy Payments üzerinden haftalık veya aylık
              periyotlarla çoğunlukla <strong>Payoneer</strong> hesabına
              aktarır; oradan Türk banka hesabınıza TL olarak çekim
              yapabilirsiniz. Bazı durumlarda doğrudan Türk banka hesabına
              aktarım da desteklenir.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Esnaf Muafiyeti ile Şirket Üzerinden Satış
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Esnaf Vergi Muafiyeti:</strong> Ürünü evinde kendi el emeğiyle üreten, belirli bir cironun altında kalan bireysel üreticiler, vergi dairesinden esnaf muafiyeti belgesi alarak sınırlı bir muafiyetten yararlanabilir. Bu istisna her koşulda değil, Gelir Vergisi Kanunu&apos;ndaki esnaf muaflığı şartlarını (üretim şekli, satış kanalı, ciro sınırı) taşıyan üreticiler için geçerlidir ve güncel ciro sınırı her yıl yeniden belirlenir.</li>
            <li><strong>Şirket/Şahıs İşletmesi Üzerinden Satış:</strong> Üretimi kendi elinizle yapmıyorsanız, tedarikçiden alıp satıyorsanız veya ciro muafiyet sınırını aşıyorsanız gelir/kurumlar vergisi mükellefiyeti doğar; fatura kesmek ve düzenli beyanname vermek zorunlu hâle gelir.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Hangi statüde olduğunuzun tespiti, satış hacmi büyüdükçe daha
            kritik hâle gelir; bu ayrımı işin başında netleştirmek, ileride
            geriye dönük vergi riskiyle karşılaşmamak için önemlidir.
          </p>
        </div>
      </section>

      {/* 5. TRENDYOL GLOBAL */}
      <section id="trendyol-global" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Trendyol Global Süreci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Trendyol Global, yurt içinde zaten Trendyol&apos;da satış yapan
          işletmelerin, aynı ürün kataloğunu Trendyol&apos;un yurt dışı
          operasyonlarına (özellikle Avrupa ve Orta Doğu pazarlarına)
          taşıması için sunduğu kanaldır. Bu, Amazon/Etsy&apos;den farklı
          olarak <strong>sıfırdan yeni bir platform öğrenmek yerine mevcut
          bir satıcı hesabının genişletilmesi</strong> mantığıyla çalışır.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📋 Gerekli Belgeler</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700 marker:text-orange-500">
              <li>Vergi levhası</li>
              <li>İmza sirküleri/imza beyannamesi (şirket türüne göre)</li>
              <li>Ticaret sicil gazetesi (şahıs şirketinde faaliyet belgesi)</li>
              <li>Satıcı iş ortaklığı sözleşmesinin onaylanması</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🚚 Lojistik ve Onay</h3>
            <p className="text-gray-700">
              Başvuru online partner.trendyol.com üzerinden yapılır ve
              belgeler Gelir İdaresi Başkanlığı doğrulamasından geçer.
              Onay sonrası ürünler mevcut Trendyol kataloğuna yurt dışı
              satış izniyle eklenir; kargo ve gümrük süreci büyük ölçüde
              Trendyol&apos;un kendi lojistik/fulfillment ağı üzerinden
              yürütülür, satıcının doğrudan gümrük işlemiyle uğraşması
              gerekmez.
            </p>
          </div>
        </div>
      </section>

      {/* 6. MİKRO İHRACAT */}
      <section id="mikro-ihracat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Mikro İhracat, ETGB ve KDV İstisnası
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hangi platformu kullanırsanız kullanın, yurt dışına giden paket
          gümrükten geçmek zorunda. İşte tam bu noktada devreye giren
          basitleştirilmiş rejimin adı <strong>mikro ihracat</strong>. Belirli
          bir ağırlık ve tutarın altındaki gönderiler, standart bir gümrük
          beyannamesi yerine <strong>ETGB (Elektronik Ticaret Gümrük
          Beyannamesi)</strong> ile, yetkilendirilmiş hızlı kargo
          operatörleri (PTT, DHL, UPS, FedEx, TNT gibi) üzerinden, ayrıca
          bir gümrük müşaviri tutmadan yurt dışına çıkabiliyor.
        </p>
        <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            📦 2026 Güncel Mikro İhracat Limitleri
          </h3>
          <p className="leading-8 text-gray-700">
            3 Ocak 2026 tarihli Resmî Gazete&apos;de yayımlanan{" "}
            <strong>Posta ve Hızlı Kargo Yoluyla Taşınan Eşyanın Gümrük
            İşlemlerine İlişkin Tebliğ (Seri No: 1)&apos;de Değişiklik
            Yapılmasına Dair Tebliğ (Seri No: 5)</strong> ile gönderi başına
            uygulanan mikro ihracat limitleri ikiye katlandı:
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-emerald-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Eski Limit</th>
                  <th className="p-4">Güncel Limit (2026)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Ağırlık</td>
                  <td className="p-4">300 kg</td>
                  <td className="p-4 font-bold text-green-600">600 kg</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Değer (KDV hariç)</td>
                  <td className="p-4">15.000 Euro</td>
                  <td className="p-4 font-bold text-green-600">30.000 Euro</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-gray-600">
            Bu değişiklikle mikro ihracat artık yalnızca bireysel tüketici
            siparişlerini (B2C) değil, küçük ölçekli toptan (B2B)
            gönderileri de kapsayabiliyor.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu limitlerin altındaki her gönderi için tek tek ETGB
          düzenlenir. ETGB ile yapılan satış, 4458 sayılı Gümrük Kanunu
          kapsamında ihracat sayılır ve{" "}
          <strong>3065 sayılı KDV Kanunu m.11/1-a</strong> uyarınca
          KDV&apos;den istisnadır; e-ihracat faturası %0 KDV ile kesilir.
          Ödediğiniz girdi KDV&apos;si cari dönem beyannamesinde indirim
          konusu yapılabilir, indirim yetmiyorsa ETGB, e-ihracat faturası ve
          Döviz Alım Belgesi (DAB) ile nakit/mahsup yoluyla iade talep
          edilebilir.
        </p>
      </section>

      {/* 7. ÖDEME */}
      <section id="odeme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Ödeme Altyapısı: Dövizi Türkiye&apos;ye Nasıl Getirirsiniz?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Her platformun para akışı biraz farklı işler, ama ortak nokta
          şu: satış geliri önce platformun kendi ödeme sisteminde (Amazon
          Ödeme Hesabı, Etsy Payments, Trendyol satıcı cari hesabı)
          birikir, sonra periyodik olarak sizin belirlediğiniz hesaba
          aktarılır.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">Amazon</h3>
            <p className="text-sm text-gray-700">Ödemeler genellikle doğrudan Türk banka hesabına, kategoriye/pazaryerine göre bazen aracı bir uluslararası ödeme hizmeti üzerinden yapılır.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">Etsy</h3>
            <p className="text-sm text-gray-700">Ağırlıklı olarak <strong>Payoneer</strong> üzerinden; Payoneer, yurt dışında açılmış bir sanal hesap gibi işlev görür, oradan TL olarak çekim yapılır.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">Trendyol Global</h3>
            <p className="text-sm text-gray-700">Trendyol&apos;un standart satıcı ödeme akışı üzerinden, TL bazlı olarak yurt içi mağaza hesabınıza yansır.</p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Mikro ihracatçıların en sık gözden kaçırdığı nokta, gelen
            dövizin muhasebe kayıtlarına <strong>Döviz Alım Belgesi
            (DAB)</strong> ile doğru şekilde işlenmesi gerektiğidir.
            Payoneer veya benzeri bir aracı hesaptan yapılan çekimlerde bu
            belge otomatik oluşmayabilir; KDV iadesi ve kur farkı
            hesaplamalarının sağlıklı yapılabilmesi için her tahsilatın
            ilgili ETGB/faturayla eşleştirilerek kayıt altına alınması
            gerekir. Bu eşleştirme aylık değil, işlem bazında yapılmalıdır.
          </p>
        </div>
      </section>

      {/* 8. TİCARET BAKANLIĞI DESTEKLERİ */}
      <section id="destekler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Ticaret Bakanlığı E-İhracat Desteği
        </h2>
        <p className="leading-8 text-gray-700">
          Yukarıda anlatılan mikro ihracat/ETGB rejimi bir{" "}
          <strong>gümrük kolaylığıdır</strong>, Ticaret Bakanlığı&apos;nın
          ayrı bir mevzuata (5986 sayılı E-İhracat Destekleri Hakkında
          Karar) dayanan <strong>E-İhracat Destek Programı</strong> ise
          bambaşka bir araç: pazaryeri komisyon gideri, sipariş karşılama
          (fulfillment), dijital pazaryeri tanıtımı ve platform entegrasyon
          giderlerinin belirli oranlarda (genel eğilim %50, hedef ülkelerde
          %70&apos;e kadar) geri ödemesiz desteklenmesini sağlıyor. Bu
          programın kimler için uygun olduğunu, desteklenen kalemleri ve
          ön onay sürecini{" "}
          <Link href="/blog/ticaret-bakanligi-ihracat-destekleri-2026#e-ihracat" className="text-orange-600 underline">
            Ticaret Bakanlığı İhracat Destekleri yazımızda
          </Link>{" "}
          ayrıntılı olarak anlattık; burada tekrar etmiyoruz.
        </p>
      </section>

      {/* 9. HATALAR */}
      <section id="hatalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Yapılan Hatalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li><strong>Marka tescili olmadan mağaza açmak:</strong> Amazon başta olmak üzere büyük platformlar, marka hakkı ihlali şikâyetlerinde satıcı hesabını askıya alabiliyor; tescilsiz bir isimle büyümek, bir gün başka birinin o markayı tescillemesi riskini de taşır. <Link href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi" className="text-orange-600 underline">Marka tescili sürecini ayrı yazımızda anlattık.</Link></li>
            <li><strong>Stok ve iade yönetimini hafife almak:</strong> Özellikle FBA gibi modellerde yurt dışı depoda biriken fazla stok, depolama ücretlerini hızla artırabilir; iade oranı yüksek kategorilerde lojistik maliyeti kâr marjını eritebilir.</li>
            <li><strong>Yurt dışı vergi mükellefiyetini görmezden gelmek:</strong> Ürünlerinizi birden fazla ülkedeki Amazon deposunda (Pan-Avrupa FBA gibi modellerde) depolatmak, o ülkelerde ayrıca KDV mükellefiyeti doğurabilir; bu durum önceden değerlendirilmezse geriye dönük vergi ve ceza riski oluşur.</li>
            <li><strong>Mikro ihracat limitini aşan gönderileri fark etmemek:</strong> 600 kg/30.000 Euro sınırını aşan bir gönderi ETGB ile değil, standart gümrük beyannamesiyle ve gümrük müşaviri desteğiyle işlem görmek zorunda; bu ayrımı önceden planlamamak sevkiyatı gümrükte bekletebilir.</li>
            <li><strong>Tek platforma bağımlı kalmak:</strong> Yalnızca tek bir pazaryerinde büyüyen satıcılar, o platformun politika değişikliklerinden (komisyon artışı, hesap askıya alma) doğrudan etkileniyor; çoklu platform stratejisi riski dağıtır.</li>
          </ul>
        </div>
      </section>

      {/* 10. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Kimler İçin Uygun?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🧵 Mikro İhracatçı Olmak İsteyen Üreticiler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ El yapımı, özel tasarım veya niş ürün üreten girişimciler (Etsy)</li>
              <li>✔ Markalı, seri üretim ürünü olan ve yurt dışında ölçeklenmek isteyen üreticiler (Amazon)</li>
              <li>✔ Zaten Trendyol&apos;da satış yapan ve ek yatırım yapmadan yurt dışına açılmak isteyen satıcılar (Trendyol Global)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              📈 Yurt İçi E-Ticaretini Büyütmek İsteyen KOBİ&apos;ler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Yurt içi pazarı doyma noktasına yaklaşan, ek büyüme kanalı arayan e-ticaret işletmeleri</li>
              <li>✔ Döviz bazlı gelir elde ederek kur riskine karşı doğal bir denge kurmak isteyen şirketler</li>
              <li>✔ Ürününü hangi platformda, hangi lojistik modeliyle pazarlayacağına henüz karar verememiş, veri odaklı bir değerlendirme ihtiyacı olan işletmeler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a
                href="https://www.resmigazete.gov.tr/fihrist?tarih=2026-01-03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Posta ve Hızlı Kargo Yoluyla Taşınan Eşyanın Gümrük İşlemlerine İlişkin Tebliğ (Seri No: 1)&apos;de Değişiklik Yapılmasına Dair Tebliğ (Seri No: 5) - Resmî Gazete, 3 Ocak 2026
              </a>
            </li>
            <li>
              <a
                href="https://ticaret.gov.tr/yurtdisi-birimler/e-ticaret-ve-e-ihracat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                T.C. Ticaret Bakanlığı - E-Ticaret ve E-İhracat
              </a>
            </li>
            <li>
              <a
                href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.3065.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                3065 Sayılı Katma Değer Vergisi Kanunu (m.11/1-a İhracat İstisnası) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a
                href="https://satis.amazon.com.tr/isinizi-buyutun/amazon-avrupada-satis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Amazon Satış Ortağı Merkezi - Avrupa&apos;ya Satış Yapmak
              </a>
            </li>
            <li>
              <a
                href="https://www.turkpatent.gov.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                TÜRKPATENT - Marka Tescili
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 12. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              E-ihracata başlamak için şirket kurmam şart mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Trendyol Global ve Amazon için pratikte evet, en az bir şahıs
              şirketi (şahıs işletmesi) veya sermaye şirketi gerekiyor;
              vergi levhası, imza sirküleri gibi kurumsal belgeler
              isteniyor. Etsy&apos;de ise el emeğiyle üretim yapan ve ciro
              muafiyet sınırının altında kalan bireysel üreticiler, esnaf
              vergi muafiyeti belgesiyle şirketsiz de başlayabilir; ancak
              ciro büyüdükçe şirketleşme neredeyse kaçınılmaz hâle gelir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Mikro ihracat limitini (600 kg / 30.000 Euro) aşarsam ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu sınırı aşan bir gönderi artık ETGB ile değil, standart
              gümrük beyannamesiyle ve bir gümrük müşaviri aracılığıyla
              işlem görür. Bu durumda süreç daha uzun sürer ve müşavirlik
              maliyeti doğar; düzenli olarak bu hacme yaklaşan satıcıların
              gönderilerini bölme veya konsolide taşıma stratejisini önceden
              planlaması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Amazon, Etsy ve Trendyol Global&apos;e aynı anda satış yapabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, üçü de birbirinden bağımsız hesaplar üzerinden yürüdüğü
              için teknik bir engel yok. Ancak stok, fiyat ve iade
              yönetimini birden fazla platformda eş zamanlı tutmak ek bir
              operasyonel yük getirir; çoğu satıcı önce tek bir platformda
              düzenli satış hacmine ulaşıp sonra ikinciye geçiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              E-ihracat gelirlerimde KDV ödemem gerekiyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, ETGB ile gerçekleştirilen mikro ihracat satışları 3065
              sayılı KDV Kanunu&apos;nun 11/1-a maddesi kapsamında
              KDV&apos;den istisnadır. Fatura %0 KDV ile kesilir; ürünü
              üretirken/tedarik ederken ödediğiniz KDV ise indirim veya
              iade yoluyla geri alınabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ticaret Bakanlığı&apos;nın e-ihracat desteğiyle mikro ihracat aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Mikro ihracat, gönderi bazlı işleyen bir{" "}
              <strong>gümrük kolaylığı</strong>dır; her paket için ayrı
              ETGB düzenlenir. Ticaret Bakanlığı&apos;nın E-İhracat Destek
              Programı ise harcama bazlı işleyen ayrı bir teşvik
              mekanizmasıdır; pazaryeri komisyonu, fulfillment ve tanıtım
              gibi giderlerinizin bir kısmını ön onay sonrası geri
              ödemesiz olarak karşılar. İkisi aynı anda, birbirini
              tamamlayacak şekilde kullanılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hangi platformla başlamalıyım: Amazon, Etsy yoksa Trendyol Global mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu, ürününüzün tipine bağlı. El yapımı veya özel tasarım
              ürününüz varsa Etsy genellikle en düşük giriş maliyetli
              seçenek. Markalı, seri üretim bir ürününüz ve yurt dışında
              büyük hacimle satmayı hedefliyorsanız Amazon Global Selling
              daha uygun bir altyapı sunuyor. Zaten Trendyol&apos;da aktif
              satış yapıyorsanız, en düşük ek yatırımla denenebilecek
              kanal Trendyol Global.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🚀 Şirketiniz İçin Doğru E-İhracat Kanalını Birlikte Belirleyelim
          </h3>
          <p className="leading-8 text-gray-700">
            Hangi platformun ürününüze, kâr marjınıza ve lojistik
            kapasitenize uygun olduğuna karar vermek, mikro ihracat/ETGB
            sürecinin ve Ticaret Bakanlığı E-İhracat Destek Programı&apos;nın
            doğru kurgulanması işin en kritik adımı.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              İş Geliştirme ve Stratejik Danışmanlık kapsamında
              şirketinizin e-ihracat sürecini birlikte planlamamız için
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
          E-ihracat, klasik ihracatın büyük sermaye ve toplu sevkiyat
          gerektiren yapısını, mikro ölçekli işletmelerin de erişebileceği
          bir modele dönüştürdü. Amazon, Etsy ve Trendyol Global&apos;in
          her biri farklı bir ürün profiline ve operasyon kapasitesine
          hitap ediyor; 2026&apos;da genişleyen mikro ihracat limitleri
          (600 kg / 30.000 Euro) ve KDV istisnası, bu modeli daha da
          erişilebilir kıldı.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, hangi platformun
          işinize uygun olduğunun belirlenmesinden marka tescili
          sürecine, gümrük/KDV işleyişinin doğru kurgulanmasından Ticaret
          Bakanlığı desteklerinden yararlanmaya kadar e-ihracat sürecinin
          tamamında tek noktadan yanınızdayız.
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
            href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">MARKA VE PATENT • FİKRİ MÜLKİYET • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Marka Tescili ve Patent Başvurusu: KOBİ&apos;ler İçin Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • İHRACAT • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
