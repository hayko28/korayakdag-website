import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Ar-Ge Merkezi, Tasarım Merkezi, Teknopark Teşvik Hesaplama Örnekleri | Koray Akdağ",
  description: "15 personelli Ar-Ge Merkezi, 10 personelli Tasarım Merkezi ve Teknopark için gelir vergisi stopajı, SGK primi desteği ve Ar-Ge indiriminin personel tablosu üzerinden 2026 güncel oranlarla adım adım hesaplandığı rehber.",
  keywords: [
    "Ar-Ge Merkezi teşvik hesaplama",
    "Tasarım Merkezi teşvik hesaplama",
    "Teknopark teşvik hesaplama",
    "gelir vergisi stopajı teşviki hesaplama",
    "SGK işveren primi desteği hesaplama",
    "Ar-Ge indirimi hesaplama örneği",
    "5746 sayılı Kanun personel hesaplama",
    "tam zaman eşdeğer personel hesaplama",
    "destek personeli yüzde 10 sınırı",
    "kıst gün hesaplama Ar-Ge personeli",
  ],
  alternates: {
    canonical: "/blog/arge-merkezi-tasarim-merkezi-teknopark-tesvik-hesaplama-personel-ornekleri",
  },
};

export default function ArgeTesvikHesaplamaPage() {
  return (
    <BlogLayout
      title="Ar-Ge Merkezi, Tasarım Merkezi ve Teknopark Teşvik Hesaplaması: Personel Bazlı Örneklerle"
      description="15 kişilik bir Ar-Ge Merkezi, 10 kişilik bir Tasarım Merkezi ve bir Teknopark şirketi için gelir vergisi stopajı, SGK işveren primi desteği, damga vergisi istisnası ve Ar-Ge indiriminin somut personel tabloları üzerinden nasıl hesaplandığını adım adım inceliyoruz."
      category="AR-GE MERKEZİ • TASARIM MERKEZİ • TEKNOPARK • 2026"
      date="2026"
      readTime="14 Dakika"
      coverImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="arge-merkezi-tasarim-merkezi-teknopark-tesvik-hesaplama-personel-ornekleri"
    >
      {/* GİRİŞ */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          Personel Bazlı Teşvik Hesaplaması Neden Önemli?
        </h2>

        <p className="text-lg leading-9">
          Ar-Ge Merkezi, Tasarım Merkezi ve Teknopark yapılarının hangi vergi
          ve SGK avantajlarını sağladığını bilmek bir şey, bu avantajların
          şirketinizin gerçek personel yapısında ay sonunda kaç lira fark
          yarattığını görmek başka bir şeydir. Bu yazıda soyut oranların
          yerine somut personel tabloları koyuyoruz: 22 kişilik bir Ar-Ge
          Merkezi, 11 kişilik bir Tasarım Merkezi ve karma gelirli bir
          Teknopark şirketi üzerinden gelir vergisi stopajı, SGK işveren primi
          desteği ve Ar-Ge indiriminin nasıl hesaplandığını gösteriyoruz.
        </p>
      </div>

      {/* KISA CEVAP KUTUSU */}
      <div className="mt-8 rounded-2xl border-l-4 border-green-500 bg-green-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          Kısa Cevap
        </h3>
        <ul className="ml-6 list-disc space-y-2 marker:text-green-600">
          <li>Ar-Ge Merkezi'nde asgari 15 (bazı sektörlerde 30) tam zaman eşdeğer (TZE) Ar-Ge personeli şartı vardır; destek personeli bu sayının en fazla %10'u kadar olabilir.</li>
          <li>Tasarım Merkezi'nde asgari eşik 10 TZE tasarım personelidir, destek personeli sınırı aynı şekilde %10'dur.</li>
          <li>Teknopark'ta genel bir minimum personel şartı yoktur; destek personeli sınırı da farklıdır, Ar-Ge/yazılım personeli sayısını aşamaz.</li>
          <li>Gelir vergisi stopajı, Ar-Ge Merkezi ve Tasarım Merkezi'nde personelin eğitim durumuna göre %80, %90 veya %95 kademeli uygulanır.</li>
          <li>Teknopark'ta ise uygun personelin ücretinden hesaplanan gelir vergisinin tamamı (asgari geçim indirimi sonrası kalan kısım) terkin edilir; eğitim durumuna göre kademe yoktur.</li>
          <li>SGK işveren primi desteği her üç yapıda da aynı mekanizmayla işler: uygun personelin prime esas kazancı üzerinden hesaplanan işveren payının yarısı Hazine tarafından karşılanır.</li>
          <li>Personel ay ortasında işe başlar veya ayrılırsa teşvik, fiilen çalışılan gün sayısına göre kıst olarak hesaplanır.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a href="#genel-karsilastirma" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">1. Üç Yapı, Üç Farklı Teşvik Mekanizması</a>
          <a href="#arge-merkezi" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">2. Ar-Ge Merkezi: 22 Kişilik Örnek Hesaplama</a>
          <a href="#tasarim-merkezi" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">3. Tasarım Merkezi: 11 Kişilik Örnek Hesaplama</a>
          <a href="#teknopark" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">4. Teknopark: Gelir Ayrımı ve Personel Hesaplaması</a>
          <a href="#kist-hesaplama" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">5. Ay Ortasında İşe Başlama: Kıst Hesaplama</a>
          <a href="#karistirmayin" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">6. Karıştırılmaması Gereken Üç Nokta</a>
          <a href="#dikkat" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">7. Hesaplamada Dikkat Edilmesi Gerekenler</a>
          <a href="#kimler" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">8. Kimler İçin Uygun?</a>
          <a href="#kaynaklar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">9. Resmî Kaynaklar</a>
          <a href="#sss" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">10. Sık Sorulan Sorular</a>
          <a href="#sonuc" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">11. Sonuç</a>
        </div>
      </div>

      {/* 1 */}
      <section id="genel-karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Üç Yapı, Üç Farklı Teşvik Mekanizması
        </h2>

        <p className="mb-8 text-lg leading-9">
          Ar-Ge Merkezi ve Tasarım Merkezi 5746 sayılı Kanun'a, Teknopark ise
          4691 sayılı Kanun'a dayanır. Teşvik unsurlarının isimleri (gelir
          vergisi stopajı, SGK primi desteği, damga vergisi istisnası)
          büyük ölçüde ortak olsa da, oranlar ve uygulama şekli farklıdır.
          Hesaplamaya geçmeden önce bu farkları tek tabloda görmek, ilerideki
          örneklerin mantığını takip etmeyi kolaylaştırır.
        </p>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[800px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Kriter</th>
                <th className="p-4 text-left">Ar-Ge Merkezi</th>
                <th className="p-4 text-left">Tasarım Merkezi</th>
                <th className="p-4 text-left">Teknopark</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Asgari Personel</td>
                <td className="p-4">15 TZE (bazı sektörlerde 30)</td>
                <td className="p-4">10 TZE</td>
                <td className="p-4">Genel bir asgari şart yok</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Destek Personeli Sınırı</td>
                <td className="p-4">Ar-Ge personeli sayısının %10'u</td>
                <td className="p-4">Tasarım personeli sayısının %10'u</td>
                <td className="p-4">Ar-Ge/yazılım personeli sayısını aşamaz</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Gelir Vergisi Stopajı</td>
                <td className="p-4">Eğitime göre kademeli: %80 / %90 / %95</td>
                <td className="p-4">Eğitime göre kademeli: %80 / %90 / %95</td>
                <td className="p-4">Kademesiz, verginin tamamı terkin (asgari geçim indirimi sonrası)</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">SGK İşveren Primi Desteği</td>
                <td className="p-4">İşveren payının yarısı</td>
                <td className="p-4">İşveren payının yarısı</td>
                <td className="p-4">İşveren payının yarısı</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Temel Bilimler Ek Desteği</td>
                <td className="p-4">Var (2 yıl, asgari ücret tutarında)</td>
                <td className="p-4">Yok</td>
                <td className="p-4">Yok</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold">Kurumlar/Gelir Vergisi İstisnası Kapsamı</td>
                <td className="p-4">Sadece Ar-Ge indirimi (gider bazlı), kazanç istisnası değil</td>
                <td className="p-4">Sadece Ar-Ge/tasarım indirimi (gider bazlı)</td>
                <td className="p-4">Sadece uygun yazılım/Ar-Ge faaliyetinden elde edilen kazanç istisna</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <p className="leading-8">
            Üçünde de ortak nokta şu: bu teşvikler şirketin toplam kazancına
            değil, yalnızca Ar-Ge, tasarım veya yazılım faaliyetiyle ilgili
            personele ve kazanca uygulanır. Şirketin ticaret, danışmanlık
            veya diğer faaliyetlerinden elde ettiği kazanç bu istisnaların
            hiçbirine dahil değildir.
          </p>
        </div>
      </section>

      {/* 2 - AR-GE MERKEZİ */}
      <section id="arge-merkezi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Ar-Ge Merkezi: 22 Kişilik Örnek Hesaplama
        </h2>

        <p className="mb-6 text-lg leading-9">
          Aşağıdaki örnekte, 20 TZE Ar-Ge personeli ile 15 personel şartını
          rahatlıkla aşan ve 2 destek personeli (20'nin %10'u) bulunduran,
          böylece{" "}
          <Link href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026" className="text-orange-600 underline hover:text-orange-700">
            destek personeli sınırını
          </Link>{" "}
          tam kapasitede ama aşmadan kullanan bir Ar-Ge Merkezi kurgulanmıştır.
        </p>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[800px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Personel Grubu</th>
                <th className="p-4 text-left">Kişi Sayısı</th>
                <th className="p-4 text-left">Eğitim Durumu</th>
                <th className="p-4 text-left">Ort. Brüt Aylık Ücret</th>
                <th className="p-4 text-left">Stopaj Teşvik Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4">Ar-Ge Direktörü/Uzmanı</td>
                <td className="p-4">2</td>
                <td className="p-4">Doktora (Makine Müh.)</td>
                <td className="p-4">140.000 TL</td>
                <td className="p-4 font-semibold text-green-700">%95</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4">Kıdemli Ar-Ge Personeli</td>
                <td className="p-4">1</td>
                <td className="p-4">Yüksek Lisans, Fizik (temel bilim)</td>
                <td className="p-4">100.000 TL</td>
                <td className="p-4 font-semibold text-green-700">%95</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4">Ar-Ge Mühendisi</td>
                <td className="p-4">6</td>
                <td className="p-4">Yüksek Lisans (Elektrik-Elektronik/Bilgisayar Müh.)</td>
                <td className="p-4">90.000 TL</td>
                <td className="p-4 font-semibold text-[#071A2F]">%90</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4">Ar-Ge Personeli</td>
                <td className="p-4">2</td>
                <td className="p-4">Lisans, Fizik (temel bilim)</td>
                <td className="p-4">70.000 TL</td>
                <td className="p-4 font-semibold text-[#071A2F]">%90</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4">Ar-Ge Personeli</td>
                <td className="p-4">9</td>
                <td className="p-4">Lisans/Önlisans (Mühendislik/Teknik)</td>
                <td className="p-4">65.000 TL</td>
                <td className="p-4 font-semibold text-orange-600">%80</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4">Destek Personeli</td>
                <td className="p-4">2</td>
                <td className="p-4">Lisans (İK, Muhasebe)</td>
                <td className="p-4">50.000 TL</td>
                <td className="p-4 font-semibold text-orange-600">%80</td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="p-4">TOPLAM</td>
                <td className="p-4">22 kişi (20 Ar-Ge + 2 destek)</td>
                <td className="p-4" colSpan={3}>Destek oranı: 2 / 20 = %10 (sınırda, aşmıyor)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-5 mt-12 text-2xl font-bold text-[#071A2F]">
          Gelir Vergisi Stopajı: Bir Ar-Ge Mühendisi Üzerinden Hesaplama
        </h3>

        <p className="mb-6 leading-8">
          %90 dilimindeki bir Ar-Ge Mühendisi'nin (brüt 90.000 TL) bir aylık
          hesaplaması, dilim geçişleri basitleştirilerek şöyle işler:
        </p>

        <div className="space-y-4">
          {[
            { n: "1", t: "Çalışan SGK ve işsizlik sigortası kesintisi", d: "90.000 TL x %15 (SGK işçi payı + işsizlik sigortası işçi payı) = 13.500 TL" },
            { n: "2", t: "Gelir vergisi matrahı", d: "90.000 TL - 13.500 TL = 76.500 TL (asgari geçim indirimi ve varsa diğer indirimler ayrıca düşülür)" },
            { n: "3", t: "Hesaplanan gelir vergisi (örnek dilim oranı)", d: "76.500 TL x %20 = 15.300 TL (gerçek tutar, ücretin kümülatif gelir vergisi tarifesindeki dilimine göre değişir)" },
            { n: "4", t: "5746 kapsamında %90 stopaj teşviki", d: "15.300 TL x %90 = 13.770 TL, bu tutar muhtasar beyanname üzerinden terkin edilir, Hazine tarafından karşılanır" },
            { n: "5", t: "İşverenin fiilen beyan ettiği gelir vergisi", d: "15.300 TL - 13.770 TL = 1.530 TL" },
          ].map((s) => (
            <div key={s.n} className="flex gap-5 rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                {s.n}
              </div>
              <div>
                <h4 className="mb-1 text-lg font-bold text-[#071A2F]">{s.t}</h4>
                <p className="leading-7">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mb-5 mt-12 text-2xl font-bold text-[#071A2F]">
          SGK İşveren Primi Desteği Hesaplaması
        </h3>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <p className="leading-8">
            Aynı Ar-Ge Mühendisi için işveren payı, prime esas kazanç
            üzerinden (malullük-yaşlılık-ölüm, genel sağlık sigortası,
            işsizlik sigortası ve iş kazası/meslek hastalığı prim kalemlerinin
            toplamı, düşük riskli bir Ar-Ge ofisinde yaklaşık %22,75) şöyle
            hesaplanır:
          </p>
          <ul className="mt-5 ml-6 list-disc space-y-2 marker:text-orange-500">
            <li>İşveren SGK primi: 90.000 TL x %22,75 = 20.475 TL</li>
            <li>5746 kapsamında Hazine tarafından karşılanan yarı: 20.475 TL / 2 = 10.237,50 TL</li>
            <li>İşverenin fiilen ödediği SGK primi: 10.237,50 TL</li>
          </ul>
          <p className="mt-5 text-sm text-gray-600">
            İş kazası ve meslek hastalığı prim oranı işkoluna göre %1,5 ile
            %7,5 arasında değişir; yukarıdaki %22,75 düşük riskli bir Ar-Ge
            ofisi için kullanılan örnek bir orandır, gerçek oran işyerinizin
            tehlike sınıfına göre belirlenir.
          </p>
        </div>

        <h3 className="mb-5 mt-12 text-2xl font-bold text-[#071A2F]">
          Temel Bilimler Mezunu Ek Desteği
        </h3>

        <p className="leading-8">
          Örnekteki temel bilim (Fizik) mezunu 3 personel (1 yüksek lisanslı,
          2 lisanslı), işe alımdan itibaren 2 yıl boyunca kişi başı aylık
          asgari ücret (2026'da brüt 33.030 TL) tutarında ayrıca Bakanlık
          desteğinden yararlanabilir. Üç kişi için bu, 24 aylık dönemde
          toplam 3 x 33.030 TL x 24 ay = 2.378.160 TL'lik ek bir destek
          potansiyeli anlamına gelir. Bu destek Tasarım Merkezleri için
          geçerli değildir.
        </p>
      </section>

      {/* 3 - TASARIM MERKEZİ */}
      <section id="tasarim-merkezi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Tasarım Merkezi: 11 Kişilik Örnek Hesaplama
        </h2>

        <p className="mb-6 text-lg leading-9">
          Tasarım Merkezi'nde asgari eşik 10 TZE tasarım personelidir.
          Aşağıdaki örnekte 10 tasarım personeli ve destek personeli sınırını
          (10'un %10'u = 1 kişi) tam dolduran 1 destek personeli bulunuyor.
        </p>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[800px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Personel Grubu</th>
                <th className="p-4 text-left">Kişi Sayısı</th>
                <th className="p-4 text-left">Eğitim Durumu</th>
                <th className="p-4 text-left">Ort. Brüt Aylık Ücret</th>
                <th className="p-4 text-left">Stopaj Teşvik Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4">Tasarım Direktörü</td>
                <td className="p-4">1</td>
                <td className="p-4">Doktora (Endüstriyel Tasarım)</td>
                <td className="p-4">130.000 TL</td>
                <td className="p-4 font-semibold text-green-700">%95</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4">Kıdemli Tasarımcı</td>
                <td className="p-4">2</td>
                <td className="p-4">Yüksek Lisans (Endüstriyel Tasarım)</td>
                <td className="p-4">85.000 TL</td>
                <td className="p-4 font-semibold text-[#071A2F]">%90</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4">Tasarımcı</td>
                <td className="p-4">4</td>
                <td className="p-4">Lisans (Endüstri Ürünleri Tasarımı)</td>
                <td className="p-4">60.000 TL</td>
                <td className="p-4 font-semibold text-orange-600">%80</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4">Junior Tasarımcı</td>
                <td className="p-4">3</td>
                <td className="p-4">Önlisans</td>
                <td className="p-4">45.000 TL</td>
                <td className="p-4 font-semibold text-orange-600">%80</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4">Destek Personeli</td>
                <td className="p-4">1</td>
                <td className="p-4">Lisans (İdari İşler)</td>
                <td className="p-4">40.000 TL</td>
                <td className="p-4 font-semibold text-orange-600">%80</td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="p-4">TOPLAM</td>
                <td className="p-4">11 kişi (10 tasarım + 1 destek)</td>
                <td className="p-4" colSpan={3}>Destek oranı: 1 / 10 = %10 (sınırda, aşmıyor)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Kıdemli Tasarımcı Üzerinden Özet Hesaplama
          </h3>
          <p className="leading-8">
            %90 dilimindeki Kıdemli Tasarımcı (brüt 85.000 TL) için aynı
            yöntem uygulanır: çalışan kesintisi sonrası matrah 72.250 TL,
            örnek dilim oranıyla hesaplanan gelir vergisi 14.450 TL, bunun
            %90'ı yani 13.005 TL Hazine tarafından karşılanır ve işverenin
            fiilen ödediği tutar 1.445 TL'ye iner. SGK tarafında ise işveren
            primi (85.000 TL x %22,75 =) 19.337,50 TL'nin yarısı, yani
            9.668,75 TL, Hazine tarafından karşılanır.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <p className="leading-8">
            Tasarım Merkezi'nde temel bilimler mezunu ek desteği
            bulunmadığından, personel eğitim dağılımı planlanırken bu
            desteğin yalnızca Ar-Ge Merkezi'nde aranabileceği unutulmamalıdır.
          </p>
        </div>
      </section>

      {/* 4 - TEKNOPARK */}
      <section id="teknopark" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Teknopark: Gelir Ayrımı ve Personel Bazlı Hesaplama
        </h2>

        <p className="mb-6 text-lg leading-9">
          {" "}
          <Link href="/blog/teknopark-nedir-avantajlari" className="text-orange-600 underline hover:text-orange-700">
            Teknopark
          </Link>{" "}
          örneğinde asgari personel şartı yoktur, ancak istisna yalnızca
          uygun yazılım/Ar-Ge faaliyetinden elde edilen kazanca uygulanır.
          Bu yüzden örneği hem personel hem gelir tablosu üzerinden kuruyoruz.
        </p>

        <h3 className="mb-5 mt-10 text-2xl font-bold text-[#071A2F]">
          Gelir Tablosu: 12.000.000 TL Yıllık Ciro
        </h3>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Gelir Kalemi</th>
                <th className="p-4 text-left">Tutar</th>
                <th className="p-4 text-left">Kurumlar Vergisi</th>
                <th className="p-4 text-left">KDV</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4">Yazılım geliştirme/lisans satışı (istisna kapsamı)</td>
                <td className="p-4">8.500.000 TL</td>
                <td className="p-4 font-semibold text-green-700">İstisna</td>
                <td className="p-4 font-semibold text-green-700">İstisna (%100)</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4">Teknik destek/danışmanlık hizmeti</td>
                <td className="p-4">2.500.000 TL</td>
                <td className="p-4">Normal oran (%25)</td>
                <td className="p-4">Normal oran (%20)</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4">Donanım/lisans bayiliği satışı</td>
                <td className="p-4">1.000.000 TL</td>
                <td className="p-4">Normal oran (%25)</td>
                <td className="p-4">Normal oran (%20)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <p className="leading-8">
            Kurumlar vergisi matrahından yalnızca 8.500.000 TL istisna
            edilir; kalan 3.500.000 TL üzerinden normal oranda kurumlar
            vergisi hesaplanır. KDV tarafında da yazılım satışının 1.700.000
            TL'lik teorik KDV'si hiç hesaplanmazken, diğer 3.500.000 TL'lik
            gelir üzerinden 700.000 TL KDV normal şekilde tahsil edilir ve
            beyan edilir. Bu ayrımın doğru yapılabilmesi için istisna
            kapsamındaki ve kapsam dışındaki faaliyetlerin ayrı hesap ve
            kayıtlarda izlenmesi zorunludur.
          </p>
        </div>

        <h3 className="mb-5 mt-12 text-2xl font-bold text-[#071A2F]">
          Personel Tablosu: 8 Kişi
        </h3>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Personel Grubu</th>
                <th className="p-4 text-left">Kişi Sayısı</th>
                <th className="p-4 text-left">Gelir Vergisi Durumu</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4">Yazılım/Ar-Ge Personeli (bilişim mezunu)</td>
                <td className="p-4">6</td>
                <td className="p-4 font-semibold text-green-700">Hesaplanan verginin tamamı terkin edilir</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4">Destek Personeli (idari, muhasebe)</td>
                <td className="p-4">2</td>
                <td className="p-4 font-semibold text-green-700">Aynı istisnadan yararlanır (sınırın altında)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 leading-8">
          Destek personeli sayısı (2), Ar-Ge/yazılım personeli sayısını (6)
          aşmadığından her iki destek personeli de istisnadan
          yararlanabiliyor. Ar-Ge Merkezi'ndeki gibi katı bir %10 sınırı
          burada geçerli değildir; sınır doğrudan Ar-Ge/yazılım personeli
          sayısıdır. SGK işveren primi desteği ise Ar-Ge Merkezi ile aynı
          mekanizmayla, işveren payının yarısı Hazine tarafından
          karşılanarak uygulanır.
        </p>
      </section>

      {/* 5 - KIST HESAPLAMA */}
      <section id="kist-hesaplama" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Ay Ortasında İşe Başlama: Kıst Hesaplama
        </h2>

        <p className="mb-6 text-lg leading-9">
          Personel ay içinde işe başlar veya ayrılırsa teşvik, o ay için
          fiilen çalışılan gün sayısı üzerinden kıst olarak uygulanır. Bu,
          hem gelir vergisi stopajı teşviki hem SGK işveren primi desteği
          için geçerlidir.
        </p>

        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Örnek: 16 Haziran'da İşe Başlayan Ar-Ge Personeli
          </h3>
          <p className="leading-8">
            Ar-Ge Merkezi örneğindeki 65.000 TL brüt maaşlı, %80 dilimindeki
            bir Ar-Ge personeli 16 Haziran 2026'da işe başlamış olsun.
            Haziran ayı 30 gün çeker, personel 16-30 Haziran arasında,
            yani 15 gün fiilen çalışmıştır.
          </p>
          <ul className="mt-5 ml-6 list-disc space-y-2 marker:text-orange-500">
            <li>Kıst brüt ücret: 65.000 TL / 30 gün x 15 gün = 32.500 TL</li>
            <li>Gelir vergisi stopajı teşviki ve SGK işveren primi desteği, tam aylık 65.000 TL değil, bu 32.500 TL'lik kıst tutar üzerinden hesaplanır.</li>
            <li>Bir sonraki aydan itibaren personel tam ay çalıştığı için hesaplama tam brüt ücret üzerinden yapılmaya devam eder.</li>
          </ul>
        </div>

        <p className="mt-6 leading-8">
          Aynı mantık işten ayrılma, ücretsiz izin veya raporlu geçirilen
          günler için de geçerlidir: teşvik, personelin merkezde/bölgede
          fiilen Ar-Ge, tasarım veya yazılım faaliyetine ayırdığı süre ile
          sınırlıdır.
        </p>
      </section>

      {/* 6 - KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-red-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karıştırılmaması Gereken Üç Nokta
        </h2>

        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Dikkat: Bu Üç Konu Sık Karıştırılıyor
          </h3>
          <ul className="ml-6 list-disc space-y-4 marker:text-red-500">
            <li>
              <strong>Ar-Ge indirimi ile gelir vergisi stopajı teşviki farklı şeylerdir.</strong>{" "}
              Ar-Ge indirimi, kurumlar vergisi matrahından düşülen bir gider
              kalemidir ve şirketin kurumlar vergisi yükünü azaltır. Gelir
              vergisi stopajı teşviki ise personelin ücretinden kesilen
              vergiyle ilgilidir ve işverenin muhtasar beyanname üzerinden
              devlete ödediği tutarı düşürür. İkisi aynı anda, ama farklı
              vergi türleri üzerinden işler.
            </li>
            <li>
              <strong>Ar-Ge Merkezi'nin kademeli stopajı ile Teknopark'ın tam istisnası aynı mekanizma değildir.</strong>{" "}
              Ar-Ge Merkezi ve Tasarım Merkezi'nde oran personelin eğitim
              durumuna göre %80, %90 veya %95 olarak değişir. Teknopark'ta
              ise eğitim ayrımı yapılmaz, uygun personelin ücretinden
              hesaplanan verginin tamamı (asgari geçim indirimi sonrası
              kalan kısım) terkin edilir.
            </li>
            <li>
              <strong>Destek personeli sınırı her yapıda aynı formülle hesaplanmaz.</strong>{" "}
              Ar-Ge Merkezi ve Tasarım Merkezi'nde destek personeli, ilgili
              Ar-Ge/tasarım personeli sayısının %10'unu geçemez. Teknopark'ta
              ise sınır doğrudan Ar-Ge/yazılım personeli sayısıdır, yüzde 10
              gibi sabit bir oran uygulanmaz.
            </li>
          </ul>
        </div>
      </section>

      {/* 7 - DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Hesaplamada Dikkat Edilmesi Gerekenler
        </h2>

        <div className="space-y-6">
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ⚠️ 45 Saati Aşan Mesai Kapsam Dışı
            </h3>
            <p className="leading-8">
              Haftalık 45 saati aşan mesai ve ek çalışma ücretleri, hem
              gelir vergisi stopajı teşviki hem SGK primi desteği
              hesaplamasına dahil edilmez. Personel tablosu kurgulanırken bu
              tutarların ayrıca izlenmesi gerekir.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ⚠️ Merkez/Bölge Dışında Geçirilen Süreler
            </h3>
            <p className="leading-8">
              Personelin merkez veya bölge dışında geçirdiği süreler, toplam
              çalışma süresinin belirli bir oranını aşmamak kaydıyla teşvik
              kapsamında değerlendirilebilir; bu oranın ve istisnaların
              güncel sınırları her yıl kontrol edilmelidir.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              💡 Uzman Notu
            </h3>
            <p className="leading-8">
              Uygulamada en sık gözden kaçan nokta, destek personeli
              sınırının yalnızca başvuru anında değil her üçer aylık dönemde
              yeniden kontrol edilmesi gerektiğidir. Ar-Ge personeli sayısı
              bir dönem düşerse (örneğin bir mühendis istifa edip yerine
              hemen personel alınmazsa), destek personeli oranı fiilen %10'u
              aşabilir ve o dönem için destek personelinin teşviki, tutarı
              en düşük olan destek personelinden başlanarak kısıtlanır.
              Personel planlaması yapılırken destek personeli sayısının
              sınırın tam üzerinde değil, biraz altında tutulması, olası
              ayrılma/işe alım gecikmelerinde teşvik kaybını önler.
            </p>
          </div>
        </div>
      </section>

      {/* 8 - KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Kimler İçin Uygun?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-green-700">
              Bu Hesaplama Kimlere Faydalı?
            </h3>
            <ul className="ml-6 list-disc space-y-3">
              <li>15+ Ar-Ge personeli olan veya olmayı planlayan şirketler</li>
              <li>10+ tasarım personeliyle Tasarım Merkezi'ni değerlendiren işletmeler</li>
              <li>Hem yazılım satışı hem danışmanlık geliri olan Teknopark şirketleri</li>
              <li>Personel maliyetini bütçelerken teşvik etkisini net görmek isteyen finans ekipleri</li>
              <li>Yeni Ar-Ge/tasarım personeli alımı planlayan İK ve bordro sorumluları</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Önce Uygunluk Değerlendirmesi Gerekenler
            </h3>
            <ul className="ml-6 list-disc space-y-3">
              <li>Henüz 15 personel eşiğine ulaşmamış küçük Ar-Ge ekipleri (Teknopark daha uygun olabilir)</li>
              <li>Ar-Ge/tasarım faaliyeti belgelenebilir proje yapısına henüz sahip olmayan şirketler</li>
              <li>Faaliyetlerini istisna kapsamındaki ve kapsam dışı olarak ayrı hesaplarda izlemeyen Teknopark şirketleri</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9 - RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8">
          Bu yazıdaki oran ve tutarlar aşağıdaki resmî kaynaklardan
          doğrulanmıştır:
        </p>
        <ul className="ml-6 list-disc space-y-3 marker:text-orange-500">
          <li>
            <a href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5746&MevzuatTur=1&MevzuatTertip=5" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-700">
              5746 sayılı Araştırma, Geliştirme ve Tasarım Faaliyetlerinin Desteklenmesi Hakkında Kanun (mevzuat.gov.tr)
            </a>
          </li>
          <li>
            <a href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=4691&MevzuatTur=1&MevzuatTertip=5" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-700">
              4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu (mevzuat.gov.tr)
            </a>
          </li>
          <li>
            <a href="https://www.yatirimadestek.gov.tr/pdf/assets/upload/dosyalar/detay_arge_ve_tasarim_merkezlerine_yonelik_tesvikler.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-700">
              Ar-Ge ve Tasarım Merkezlerine Yönelik Teşvikler (Cumhurbaşkanlığı Yatırım Ofisi, yatirimadestek.gov.tr)
            </a>
          </li>
          <li>
            <a href="https://www.yatirimadestek.gov.tr/pdf/assets/upload/dosyalar/detay_teknoloji_gelistirme_bolgeleri_destegi.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-700">
              Teknoloji Geliştirme Bölgeleri Desteği (Cumhurbaşkanlığı Yatırım Ofisi, yatirimadestek.gov.tr)
            </a>
          </li>
          <li>
            <a href="https://www.gib.gov.tr/yardim-ve-kaynaklar/yatirimlarda-vergisel-tesvikler/l-kanunlarina-gore-vergisel-tesvikler/d-4691" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-700">
              4691 Sayılı Kanun Kapsamında Vergisel Teşvikler (Gelir İdaresi Başkanlığı)
            </a>
          </li>
          <li>
            <a href="https://www.sgk.gov.tr/Content/Post/c52f99f0-da6c-4029-9b9a-a0d6f96a6a42/Guncel-Sigorta-Primi-Tesvik-Destek-ve-Indirimleri-2026-01-12-03-04-11" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-700">
              Güncel Sigorta Primi Teşvik, Destek ve İndirimleri (Sosyal Güvenlik Kurumu)
            </a>
          </li>
          <li>
            <a href="https://agtm.sanayi.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-700">
              Ar-Ge ve Tasarım Merkezleri Portalı (Sanayi ve Teknoloji Bakanlığı, AGTM)
            </a>
          </li>
        </ul>
      </section>

      {/* 10 SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-10 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>

        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              1. Ar-Ge Merkezi'nde destek personeli sayısı %10'u aşarsa ne olur?
            </h3>
            <p className="leading-8">
              Destek personeli sayısı, Ar-Ge/tasarım personeli sayısının
              %10'unu aşarsa, teşvik brüt ücreti en düşük olan destek
              personelinden başlanarak sınır dahilindeki kişilere uygulanır;
              sınırı aşan kısım o dönem için teşvikten yararlanamaz.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              2. Ay ortasında işe başlayan bir Ar-Ge personeli için teşvik nasıl hesaplanır?
            </h3>
            <p className="leading-8">
              Teşvik, o ay için fiilen çalışılan gün sayısı üzerinden kıst
              olarak hesaplanır. Örneğin 30 günlük bir ayda 15 gün çalışan
              personelin brüt ücreti ikiye bölünerek kıst tutar bulunur ve
              gelir vergisi stopajı teşviki ile SGK işveren primi desteği bu
              kıst tutar üzerinden uygulanır.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              3. Teknopark'ta şirketin tüm cirosu KDV'den istisna mıdır?
            </h3>
            <p className="leading-8">
              Hayır. KDV istisnası yalnızca uygun yazılım/Ar-Ge geliştirme
              faaliyetinden elde edilen gelirlere uygulanır. Danışmanlık,
              donanım satışı veya bölge dışı faaliyetlerden elde edilen gelir
              normal KDV oranına tabidir ve istisna kapsamındaki gelirle
              ayrı hesaplarda izlenmesi gerekir.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              4. Tasarım Merkezi'nde temel bilimler mezunu personel desteği var mı?
            </h3>
            <p className="leading-8">
              Hayır. 2 yıl süreyle asgari ücret tutarında sağlanan temel
              bilimler mezunu ek desteği yalnızca Ar-Ge Merkezleri için
              öngörülmüştür, Tasarım Merkezleri bu destekten yararlanamaz.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5. Ar-Ge indirimi ile gelir vergisi stopajı teşviki aynı şey midir?
            </h3>
            <p className="leading-8">
              Hayır. Ar-Ge indirimi, ilgili giderlerin kurumlar vergisi
              matrahından düşülmesini sağlayan bir kurumlar vergisi
              avantajıdır. Gelir vergisi stopajı teşviki ise personel
              ücretinden hesaplanan gelir vergisinin belirli bir oranının
              işveren tarafından Hazine'ye ödenmemesini sağlayan ayrı bir
              teşviktir; ikisi birlikte, ama farklı vergi türleri üzerinden
              uygulanır.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              6. Ar-Ge Merkezi'nin kademeli stopaj oranı ile Teknopark'ın tam istisnası neden farklı?
            </h3>
            <p className="leading-8">
              Bu iki teşvik farklı kanunlara (5746 ve 4691) dayanır. Ar-Ge
              Merkezi ve Tasarım Merkezi'nde stopaj oranı personelin eğitim
              durumuna göre %80, %90 veya %95 olarak kademelidir. Teknopark
              mevzuatında ise eğitim ayrımı yapılmaz, uygun personelin
              ücretinden hesaplanan verginin tamamı, asgari geçim indirimi
              sonrası kalan kısım üzerinden terkin edilir.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              7. SGK işveren primi desteği hangi kazanç üzerinden hesaplanır?
            </h3>
            <p className="leading-8">
              Destek, uygun Ar-Ge, tasarım, yazılım veya destek personelinin
              gerçek prime esas kazancı üzerinden hesaplanan sigorta primi
              işveren hissesinin yarısının Hazine ve Maliye Bakanlığı
              tarafından karşılanması şeklinde işler; her üç yapıda da
              (Ar-Ge Merkezi, Tasarım Merkezi, Teknopark) aynı mekanizma
              uygulanır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin Personel Yapısına Göre Teşvik Hesaplaması
          </h3>
          <p className="leading-8 text-gray-700">
            Yukarıdaki örnekler gerçek oranlarla kurgulanmış olsa da, her
            şirketin personel dağılımı, ücret yapısı ve mevcut vergi/SGK
            durumu farklıdır. Ar-Ge Merkezi, Tasarım Merkezi veya Teknopark
            başvurusu öncesinde şirketinizin gerçek personel tablosu
            üzerinden ne kadar teşvik alabileceğinizi birlikte
            değerlendirebilir, başvuru dosyanızı ve sonrasındaki bordro/vergi
            uygulamasını uçtan uca yürütebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin teşvik hesaplamasını birlikte çıkarmak için
              bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 11 SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç
        </h2>

        <p className="mb-6 text-lg leading-9">
          Ar-Ge Merkezi, Tasarım Merkezi ve Teknopark'ın sağladığı teşvikler
          kâğıt üzerinde benzer görünse de personel bazında hesaplandığında
          üç yapının da kendine özgü kuralları ortaya çıkıyor: destek
          personeli sınırının nasıl hesaplandığı, stopaj oranının kademeli mi
          yoksa tam mı olduğu ve hangi gelirin istisna kapsamına girdiği,
          şirketin fiilen ne kadar avantaj elde edeceğini doğrudan
          belirliyor.
        </p>

        <p className="mb-10 text-lg leading-9">
          Doğru yapının seçilmesi kadar, seçilen yapının personel
          planlamasına ve bordroya doğru şekilde yansıtılması da önemlidir.
          Başvuru öncesi uygunluk analizinden, personel bazlı teşvik
          hesaplamasına ve sonraki dönemlerdeki bordro/vergi uygulamasına
          kadar tüm süreç, ayrıca bir yerel danışmanlık firması aramanıza
          gerek kalmadan bizzat Koray Akdağ / Sistem Global Danışmanlık
          tarafından uçtan uca yürütülmektedir.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">AR-GE MERKEZİ • 5746 SAYILI KANUN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ar-Ge Merkezi Nedir? Nasıl Kurulur? 2026 Şartları, Vergi ve SGK Avantajları</h3>
          </Link>
          <Link
            href="/blog/teknopark-nedir-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKNOPARK • AR-GE • YAZILIM</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Teknopark Nedir? Avantajları, Vergi İstisnaları ve Başvuru Rehberi</h3>
          </Link>
          <Link
            href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"1. Ar-Ge Merkezi'nde destek personeli sayısı %10'u aşarsa ne olur?","acceptedAnswer":{"@type":"Answer","text":"Destek personeli sayısı, Ar-Ge/tasarım personeli sayısının %10'unu aşarsa, teşvik brüt ücreti en düşük olan destek personelinden başlanarak sınır dahilindeki kişilere uygulanır; sınırı aşan kısım o dönem için teşvikten yararlanamaz."}},{"@type":"Question","name":"2. Ay ortasında işe başlayan bir Ar-Ge personeli için teşvik nasıl hesaplanır?","acceptedAnswer":{"@type":"Answer","text":"Teşvik, o ay için fiilen çalışılan gün sayısı üzerinden kıst olarak hesaplanır. Örneğin 30 günlük bir ayda 15 gün çalışan personelin brüt ücreti ikiye bölünerek kıst tutar bulunur ve gelir vergisi stopajı teşviki ile SGK işveren primi desteği bu kıst tutar üzerinden uygulanır."}},{"@type":"Question","name":"3. Teknopark'ta şirketin tüm cirosu KDV'den istisna mıdır?","acceptedAnswer":{"@type":"Answer","text":"Hayır. KDV istisnası yalnızca uygun yazılım/Ar-Ge geliştirme faaliyetinden elde edilen gelirlere uygulanır. Danışmanlık, donanım satışı veya bölge dışı faaliyetlerden elde edilen gelir normal KDV oranına tabidir ve istisna kapsamındaki gelirle ayrı hesaplarda izlenmesi gerekir."}},{"@type":"Question","name":"4. Tasarım Merkezi'nde temel bilimler mezunu personel desteği var mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır. 2 yıl süreyle asgari ücret tutarında sağlanan temel bilimler mezunu ek desteği yalnızca Ar-Ge Merkezleri için öngörülmüştür, Tasarım Merkezleri bu destekten yararlanamaz."}},{"@type":"Question","name":"5. Ar-Ge indirimi ile gelir vergisi stopajı teşviki aynı şey midir?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Ar-Ge indirimi, ilgili giderlerin kurumlar vergisi matrahından düşülmesini sağlayan bir kurumlar vergisi avantajıdır. Gelir vergisi stopajı teşviki ise personel ücretinden hesaplanan gelir vergisinin belirli bir oranının işveren tarafından Hazine'ye ödenmemesini sağlayan ayrı bir teşviktir; ikisi birlikte, ama farklı vergi türleri üzerinden uygulanır."}},{"@type":"Question","name":"6. Ar-Ge Merkezi'nin kademeli stopaj oranı ile Teknopark'ın tam istisnası neden farklı?","acceptedAnswer":{"@type":"Answer","text":"Bu iki teşvik farklı kanunlara (5746 ve 4691) dayanır. Ar-Ge Merkezi ve Tasarım Merkezi'nde stopaj oranı personelin eğitim durumuna göre %80, %90 veya %95 olarak kademelidir. Teknopark mevzuatında ise eğitim ayrımı yapılmaz, uygun personelin ücretinden hesaplanan verginin tamamı, asgari geçim indirimi sonrası kalan kısım üzerinden terkin edilir."}},{"@type":"Question","name":"7. SGK işveren primi desteği hangi kazanç üzerinden hesaplanır?","acceptedAnswer":{"@type":"Answer","text":"Destek, uygun Ar-Ge, tasarım, yazılım veya destek personelinin gerçek prime esas kazancı üzerinden hesaplanan sigorta primi işveren hissesinin yarısının Hazine ve Maliye Bakanlığı tarafından karşılanması şeklinde işler; her üç yapıda da (Ar-Ge Merkezi, Tasarım Merkezi, Teknopark) aynı mekanizma uygulanır."}}]}) }}
      />
    </BlogLayout>
  );
}
