import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Finansman Gider Kısıtlaması Nedir? 2026 Hesaplama Rehberi | Koray Akdağ",
  description: "Özkaynağını aşan yabancı kaynakla çalışan şirketler finansman giderlerinin %10'unu vergiden düşemiyor. KVK 11/1-i kapsamı, istisnalar, örtülü sermayeden farkı ve adım adım hesaplama örneğiyle 2026 güncel rehber.",
  keywords: [
    "finansman gider kısıtlaması",
    "finansman gider kısıtlaması hesaplama",
    "finansman gider kısıtlaması 2026",
    "finansman gider kısıtlaması oranı",
    "KVK 11/1-i",
    "yabancı kaynak özkaynak karşılaştırması",
    "finansman gider kısıtlaması örtülü sermaye farkı",
    "kurumlar vergisi kanunen kabul edilmeyen gider",
    "finansman gider kısıtlaması istisnaları",
    "gelir vergisi finansman gider kısıtlaması",
  ],
  alternates: {
    canonical: "/blog/finansman-gider-kisitlamasi-hesaplama-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Finansman Gider Kısıtlaması Nedir? Borcu Özkaynağını Aşan Şirketler İçin 2026 Hesaplama Rehberi"
      description="Yabancı kaynağı özkaynağını aşan şirketlerde, aşan kısma isabet eden faiz, komisyon ve kur farkı giderlerinin %10'u vergi matrahından indirilemiyor. KVK 11/1-i kapsamı, kimlerin muaf olduğu, örtülü sermayeyle karıştırılmaması gereken noktalar ve adım adım hesaplama örneğiyle 2026 güncel rehber."
      category="VERGİ DANIŞMANLIĞI • FİNANSMAN GİDER KISITLAMASI • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="finansman-gider-kisitlamasi-hesaplama-2026"
      coverImage="https://images.unsplash.com/photo-1587740896339-96a76170508d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Finansman Gider Kısıtlaması Hesaplamanızı Birlikte Gözden Geçirelim"
      ctaText="Şirketinizin yabancı kaynak/özkaynak dengesini, hangi giderlerin kısıtlama kapsamına girdiğini ve geçici vergi dönemlerindeki hesaplamanın doğru yapılıp yapılmadığını birlikte değerlendirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Finansman Gider Kısıtlaması Nedir?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Yabancı kaynağı (borcu) özkaynağını aşan şirketlerde, <strong>aşan kısma isabet eden</strong> faiz, komisyon, vade farkı, kâr payı ve kur farkı giderlerinin <strong>%10&apos;u</strong> kurumlar/gelir vergisi matrahından indirilemiyor.</li>
          <li>✔ Yasal dayanak <strong>KVK madde 11/1-i</strong> (bilanço esasına tabi gelir vergisi mükellefleri için GVK m.41/1-9); oranı belirleyen <strong>3490 sayılı Cumhurbaşkanı Kararı</strong> (4 Şubat 2021, RG 31385), <strong>1 Ocak 2021&apos;den</strong> itibaren uygulanıyor ve 2026&apos;da hâlâ değişmeden <strong>%10</strong>.</li>
          <li>✔ Kredi kuruluşları, finansal kuruluşlar, finansal kiralama/faktoring/finansman şirketleri, sermaye piyasası faaliyetinde bulunan kurumlar ile sigorta/reasürans/emeklilik şirketleri bu kısıtlamadan <strong>muaf</strong>.</li>
          <li>✔ Yatırımın maliyetine eklenen (aktifleştirilen) finansman giderleri kapsam <strong>dışında</strong>; çünkü bu tutarlar zaten doğrudan gider yazılmıyor, amortisman yoluyla itfa ediliyor.</li>
          <li>✔ <strong>Örtülü sermaye ile karıştırılmamalı:</strong> ikisi farklı maddeler, farklı sonuçlar doğuruyor (aşağıda ayrıca ayrıştırıyoruz).</li>
          <li>✔ Hesaplama her geçici vergi döneminde, <strong>vergi ve diğer yasal yükümlülükler hesaplanmadan önceki VUK bilançosu</strong> esas alınarak kümülatif yapılıyor; bu nokta 25.09.2025 tarihli güncel bir özelgeyle netleşti.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Finansman Gider Kısıtlaması Nedir, Yasal Dayanağı Ne?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Kapsamda, Kimler Muaf?
          </Link>
          <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Hangi Giderler Kısıtlama Kapsamına Giriyor?
          </Link>
          <Link href="#hesaplama" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Adım Adım Nasıl Hesaplanır?
          </Link>
          <Link href="#ortulu-sermaye" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Karıştırmayın: Örtülü Sermaye Farklı Bir Konu
          </Link>
          <Link href="#2026-ozelge" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. 2026&apos;da Netleşen Nokta: Hangi Bilanço Esas Alınır?
          </Link>
          <Link href="#beyanname" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Beyannamede Nasıl Gösterilir?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Finansman Gider Kısıtlaması Nedir, Yasal Dayanağı Ne?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Finansman gider kısıtlaması, yıl sonunda muhasebecinizden
          &quot;bu sene finansman giderlerinizin bir kısmını kanunen kabul
          edilmeyen gider olarak matraha ekledik&quot; cümlesini duyan
          şirket sahiplerinin en çok sorduğu sorulardan birinin cevabı.
          Kısaca: borçla büyüyen, yani yabancı kaynağı özkaynağından fazla
          olan şirketlerde, bu fazlalığa denk gelen faiz ve benzeri
          giderlerin bir kısmı artık vergi matrahından indirilemiyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Düzenlemenin yasal çerçevesi 5520 sayılı Kurumlar Vergisi
          Kanunu&apos;nun 11. maddesinin birinci fıkrasının (i) bendinde
          yer alıyor; kanun maddesi 1.1.2013 tarihinden itibaren
          yürürlükte, ancak oranı belirleme yetkisi Cumhurbaşkanı&apos;na
          bırakılmıştı. Bu yetki, <strong>4 Şubat 2021 tarihli ve 31385
          sayılı Resmî Gazete&apos;de yayımlanan 3490 sayılı Cumhurbaşkanı
          Kararı</strong> ile kullanıldı ve oran, sektör ayrımı
          yapılmaksızın <strong>%10</strong> olarak belirlendi; kısıtlama
          1 Ocak 2021&apos;den itibaren başlayan vergilendirme dönemi
          kazançlarına uygulanmaya başladı. Uygulama esasları ise
          <strong> 25 Mayıs 2021 tarihli ve 31491 sayılı Resmî
          Gazete&apos;de yayımlanan 18 Seri No&apos;lu Kurumlar Vergisi
          Genel Tebliği</strong> ile detaylandırıldı. Bilanço esasına
          göre defter tutan gelir vergisi mükellefleri (şahıs işletmeleri
          ve adi ortaklıklar dahil) için aynı kısıtlama GVK madde
          41/1-9&apos;da ayrıca düzenleniyor.
        </p>
        <p className="leading-8 text-gray-700">
          2026 itibarıyla bu oranda bir değişiklik yapılmadı; aradan beş
          yıl geçmiş olmasına rağmen %10 oranı hâlâ yürürlükte. Dolayısıyla
          bu yazıda anlatılanlar, yeni çıkan bir destek veya geçici bir
          düzenleme değil, her yıl tekrarlanan ve hâlâ geçerliliğini
          koruyan kalıcı bir vergi kuralı.
        </p>
      </section>

      {/* 2. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Kapsamda, Kimler Muaf?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kısıtlama, yabancı kaynağı (kısa ve uzun vadeli yabancı
          kaynakların toplamı) özkaynağını aşan tüm kurumlar vergisi
          mükellefleri ile bilanço esasına tabi gelir vergisi mükelleflerini
          kapsıyor. Ancak kanun koyucu, iş modeli gereği zaten yüksek borçla
          çalışan belirli sektörleri kapsam dışında tutmuş:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">✅ Kapsamda Olanlar</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>Yabancı kaynağı özkaynağını aşan tüm anonim, limited ve diğer kurumlar vergisi mükellefleri</li>
              <li>Bilanço esasına göre defter tutan gelir vergisi mükellefleri (şahıs işletmeleri, adi ortaklıklar)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🚫 Muaf Olanlar</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>5411 sayılı Bankacılık Kanunu kapsamındaki kredi kuruluşları</li>
              <li>Finansal kiralama, faktoring ve finansman şirketleri</li>
              <li>6362 sayılı Sermaye Piyasası Kanunu kapsamında sermaye piyasası faaliyetinde bulunan kurumlar</li>
              <li>Sigorta, reasürans ve emeklilik şirketleri</li>
              <li>İşletme hesabı esasına göre defter tutan gelir vergisi mükellefleri (zaten bilanço tutmadıkları için kapsam dışı)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. GİDERLER */}
      <section id="giderler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Hangi Giderler Kısıtlama Kapsamına Giriyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tebliğ, kapsamı &quot;faiz, komisyon, vade farkı, kâr payı, kur
          farkı ve benzeri adlar altında yapılan gider ve maliyet
          unsurları&quot; olarak tanımlıyor. Bu tanım, sadece banka kredisi
          faiziyle sınırlı değil; pratikte en sık karşılaşılan kalemler
          şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kapsama Giren</th>
                <th className="p-5">Kapsam Dışı Kalan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Banka kredisi faizi ve komisyonu</td>
                <td className="p-5">Teminat mektubu masrafları</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Grup/ortak şirketlerden alınan borçların faizi</td>
                <td className="p-5">İpotek tesis masrafları</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Tedarikçiye geç ödemeden doğan vade farkı</td>
                <td className="p-5">Kredi sözleşmesi damga vergisi</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Döviz/dövize endeksli borçlardaki kur farkı gideri</td>
                <td className="p-5">Yatırımın maliyetine eklenen (aktifleştirilen) finansman giderleri</td>
              </tr>
              <tr>
                <td className="p-5">Kredi faizi üzerinden hesaplanan banka ve sigorta muameleleri vergisi (BSMV)</td>
                <td className="p-5">Örtülü sermaye sayılan borçlanmaya ilişkin giderler (ayrı madde kapsamında zaten tamamı KKEG)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Yatırımın maliyetine eklenen finansman giderlerinin kapsam dışı
          tutulmasının sebebi mükerrerliği önlemek: bu tutarlar zaten
          doğrudan dönem gideri yazılmıyor, aktifleştirilip amortisman
          yoluyla yıllara yayılarak itfa ediliyor. Dolayısıyla üzerine bir
          de %10&apos;luk kısıtlama uygulanması çifte bir kısıtlamaya yol
          açardı.
        </p>
      </section>

      {/* 4. HESAPLAMA */}
      <section id="hesaplama" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Nasıl Hesaplanır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hesaplama tek bir çarpımdan ibaret değil; önce şirketin ne kadar
          &quot;aşan&quot; yabancı kaynağı olduğu, sonra bu aşan kısma
          isabet eden finansman gideri tespit ediliyor. Adımlar şöyle:
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Yabancı Kaynak ve Özkaynağı Belirle</h3>
            <p className="mt-2 text-sm text-gray-600">Dönem sonu VUK bilançosundaki toplam yabancı kaynak ile toplam özkaynağı tespit et</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Aşan Kısmı Hesapla</h3>
            <p className="mt-2 text-sm text-gray-600">Yabancı kaynak özkaynaktan fazlaysa, aradaki fark &quot;aşan kısım&quot;dır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">Orana Göre Payını Bul</h3>
            <p className="mt-2 text-sm text-gray-600">Toplam finansman giderini, aşan kısmın toplam yabancı kaynağa oranıyla çarp</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">%10&apos;unu KKEG Yaz</h3>
            <p className="mt-2 text-sm text-gray-600">Bulunan tutarın %10&apos;u kanunen kabul edilmeyen gider olarak matraha eklenir</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            📊 Örnek Hesaplama
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Toplam yabancı kaynak</td>
                  <td className="p-4">40.000.000 TL</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Toplam özkaynak</td>
                  <td className="p-4">25.000.000 TL</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Aşan kısım (40.000.000 - 25.000.000)</td>
                  <td className="p-4">15.000.000 TL</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Aşan kısmın toplam yabancı kaynağa oranı (15.000.000 / 40.000.000)</td>
                  <td className="p-4">%37,5</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Yıl içindeki toplam finansman gideri (faiz, komisyon, kur farkı vb.)</td>
                  <td className="p-4">6.000.000 TL</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Aşan kısma isabet eden finansman gideri (6.000.000 x %37,5)</td>
                  <td className="p-4">2.250.000 TL</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-orange-600">KKEG olarak matraha eklenecek tutar (2.250.000 x %10)</td>
                  <td className="p-4 font-semibold text-orange-600">225.000 TL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Bu örnekte şirket, 6.000.000 TL&apos;lik finansman giderinin
            tamamını değil, yalnızca 225.000 TL&apos;sini vergi matrahına
            geri eklemek zorunda. Rakamlar büyüdükçe bu tutar da büyüyor;
            özellikle yüksek faizli dönemlerde ve yoğun kredi kullanan
            şirketlerde yıl sonunda ciddi bir matrah farkı yaratabiliyor.
          </p>
        </div>
      </section>

      {/* 5. ÖRTÜLÜ SERMAYE - KARIŞTIRMAYIN KUTUSU */}
      <section id="ortulu-sermaye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Karıştırmayın: Örtülü Sermaye Farklı Bir Konu
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Finansman Gider Kısıtlaması ≠ Örtülü Sermaye
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Her iki düzenleme de &quot;borç özkaynağı aşarsa ne olur&quot;
            sorusuna cevap veriyor gibi görünse de, yasal dayanakları,
            kapsamları ve sonuçları tamamen farklı. Bu iki kavramın
            karıştırılması, uygulamada en sık rastlanan hatalardan biri:
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Finansman Gider Kısıtlaması (KVK m.11/1-i)</th>
                  <th className="p-4">Örtülü Sermaye (KVK m.12)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Hangi borç?</td>
                  <td className="p-4">Tüm yabancı kaynaklar (banka, tedarikçi, ortak fark etmez)</td>
                  <td className="p-4">Yalnızca ortak veya ortakla ilişkili kişilerden alınan borçlar</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Eşik</td>
                  <td className="p-4">Yabancı kaynak &gt; özkaynak (1 kat)</td>
                  <td className="p-4">İlişkili kişi borcu &gt; özkaynağın 3 katı</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Sonuç</td>
                  <td className="p-4">Aşan kısma isabet eden giderin sadece <strong>%10&apos;u</strong> KKEG</td>
                  <td className="p-4">Aşan kısma ilişkin giderin <strong>tamamı</strong> KKEG</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Ek etki</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Örtülü sermaye faizi, borç vereninde dağıtılmış kâr payı sayılır; stopaj doğabilir</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Bir şirket aynı anda hem ortağından hem bankadan borçlanmışsa,
            her iki düzenleme de gündeme gelebilir. Bu durumda önce örtülü
            sermaye sayılan ilişkili taraf borcuna ait finansman gideri
            ayrıştırılır (zaten tamamı KKEG olduğu için), kalan yabancı
            kaynak üzerinden finansman gider kısıtlaması hesaplanır.
            Aksi halde aynı gidere iki kez kısıtlama uygulanmış olur.
          </p>
        </div>
      </section>

      {/* 6. 2026 ÖZELGE */}
      <section id="2026-ozelge" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. 2026&apos;da Netleşen Nokta: Hangi Bilanço Esas Alınır?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Uygulamada uzun süre tartışılan bir soru şuydu: yabancı
          kaynak/özkaynak karşılaştırması yapılırken, vergi karşılıkları
          ayrıldıktan <em>sonraki</em> bilanço mu, yoksa bu karşılıklar
          hesaplanmadan <em>önceki</em> bilanço mu esas alınmalı? Gelir
          İdaresi Başkanlığı Ankara Defterdarlığı&apos;nın <strong>25
          Eylül 2025 tarihli ve 38418978-125[6-2023/4]-542301 sayılı
          özelgesi</strong>, bu soruyu netleştirdi: karşılaştırma, Vergi
          Usul Kanunu&apos;na göre çıkarılacak, <strong>vergi ve diğer
          yasal yükümlülükler hesaplanmadan önceki</strong> bilanço esas
          alınarak yapılmalı.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Özelge ayrıca hesaplamanın zamanlamasını da teyit ediyor: takvim
          yılına tabi mükellefler için her geçici vergi döneminin son
          günü itibarıyla, yıl sonu için ise 31 Aralık itibarıyla; özel
          hesap dönemine tabi mükellefler için ise kendi hesap
          dönemlerinin son günü itibarıyla hazırlanan bilanço kullanılıyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, hesaplamanın sadece
            banka kredilerine değil, grup şirketlerinden alınan borçlara,
            tedarikçilere olan vadeli borçlanmalardan doğan vade
            farklarına ve kur farkı giderlerine de uygulanmasıdır.
            Şirketler çoğunlukla yalnızca banka kredi faizlerini hesaba
            katıp grup içi borçlanmalardaki faiz ve kur farklarını
            gözden kaçırıyor; bu da yıl sonunda beklenmedik bir KKEG
            tutarıyla ve geçici vergi beyannamesinde düzeltme
            ihtiyacıyla karşılaşılmasına yol açabiliyor. Hesaplamanın her
            geçici vergi döneminde, kümülatif olarak ve güncel bilanço
            verileriyle tekrar gözden geçirilmesi, yıl sonunda sürpriz
            yaşamamanın en pratik yolu.
          </p>
        </div>
      </section>

      {/* 7. BEYANNAME */}
      <section id="beyanname" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Beyannamede Nasıl Gösterilir?
        </h2>
        <p className="leading-8 text-gray-700">
          Hesaplanan finansman gider kısıtlaması tutarı, kurumlar vergisi
          beyannamesinin &quot;Kanunen Kabul Edilmeyen Giderler&quot;
          (KKEG) bölümünde &quot;İlaveler&quot; kısmında ayrı bir satır
          olarak gösterilir ve ticari kâra eklenerek vergi matrahına dahil
          edilir. Geçici vergi dönemlerinde de aynı mantıkla, o dönemin
          kümülatif verileri üzerinden hesaplanıp geçici vergi matrahına
          eklenmesi gerekir; sadece yıl sonunda tek seferlik bir hesaplama
          yapmak, dönem içi geçici vergi beyannamelerinin hatalı
          verilmesine yol açar.
        </p>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Hesaplama tek seferlik bir yıl sonu işlemi değil; her geçici vergi döneminde kümülatif olarak tekrarlanmalı.</li>
            <li>Karşılaştırmada esas alınacak bilanço, vergi ve diğer yasal yükümlülükler hesaplanmadan önceki VUK bilançosudur.</li>
            <li>Örtülü sermaye kapsamına giren ilişkili taraf borçlanmaları, finansman gider kısıtlaması hesaplamasının dışında ayrıca ve farklı kurallarla değerlendirilir; ikisi birbirinin yerine geçmez.</li>
            <li>Kapsam sadece banka kredisi faiziyle sınırlı değil; tedarikçi vade farkları, grup içi borçlanma faizleri ve kur farkı giderleri de dahildir.</li>
            <li>Yatırım döneminde aktifleştirilen (maliyete eklenen) finansman giderleri, çifte kısıtlamayı önlemek için kapsam dışı tutulur; bu ayrımın muhasebe kayıtlarında net yapılması gerekir.</li>
          </ul>
        </div>
      </section>

      {/* 9. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.5520.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                5520 Sayılı Kurumlar Vergisi Kanunu, Madde 11 - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2021/02/20210204-7.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                3490 Sayılı Cumhurbaşkanı Kararı (4 Şubat 2021, RG 31385) - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                18 Seri No&apos;lu Kurumlar Vergisi Genel Tebliği (25 Mayıs 2021, RG 31491) - Gelir İdaresi Başkanlığı (gib.gov.tr)
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.193.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                193 Sayılı Gelir Vergisi Kanunu, Madde 41 - mevzuat.gov.tr
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
              Finansman gider kısıtlaması oranı 2026&apos;da kaç?
            </h3>
            <p className="leading-8 text-gray-700">
              %10. Bu oran, 3490 sayılı Cumhurbaşkanı Kararı ile 1 Ocak
              2021&apos;den itibaren uygulanmaya başladı ve 2026 itibarıyla
              herhangi bir değişikliğe uğramadı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hangi şirketler finansman gider kısıtlamasından muaf?
            </h3>
            <p className="leading-8 text-gray-700">
              Kredi kuruluşları, finansal kiralama/faktoring/finansman
              şirketleri, 6362 sayılı Kanun kapsamında sermaye piyasası
              faaliyetinde bulunan kurumlar ile sigorta, reasürans ve
              emeklilik şirketleri bu kısıtlamanın dışında tutulmuştur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Finansman gider kısıtlaması ile örtülü sermaye aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Finansman gider kısıtlaması tüm yabancı kaynakları
              kapsar ve aşan kısma isabet eden giderin sadece %10&apos;unu
              KKEG sayar. Örtülü sermaye ise yalnızca ortak veya ortakla
              ilişkili kişilerden alınan, özkaynağın 3 katını aşan
              borçlanmaları kapsar ve aşan kısma ilişkin giderin tamamını
              KKEG sayar; ayrıca borç vereninde dağıtılmış kâr payı
              sayılarak stopaja yol açabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şahıs işletmeleri (gelir vergisi mükellefleri) bu kısıtlamaya tabi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Yalnızca bilanço esasına göre defter tutan gelir vergisi
              mükellefleri, GVK madde 41/1-9 uyarınca aynı kısıtlamaya
              tabidir. İşletme hesabı esasına göre defter tutanlar kapsam
              dışındadır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hesaplamada hangi bilanço esas alınır?
            </h3>
            <p className="leading-8 text-gray-700">
              25 Eylül 2025 tarihli özelgeye göre, Vergi Usul Kanunu&apos;na
              göre çıkarılacak ve vergi ile diğer yasal yükümlülükler
              hesaplanmadan önceki bilanço esas alınır. Takvim yılına
              tabi mükellefler için bu, her geçici vergi döneminin son
              günü ve 31 Aralık itibarıyla hazırlanan bilançodur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yatırım için alınan kredinin faizi de kısıtlamaya tabi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Eğer bu faiz doğrudan dönem gideri olarak yazılıyorsa evet,
              kısıtlama kapsamına girer. Ancak yatırımın maliyetine
              eklenen (aktifleştirilen ve amortisman yoluyla itfa edilen)
              finansman giderleri, çifte kısıtlamayı önlemek amacıyla
              kapsam dışı tutulur.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Finansman Gider Kısıtlaması Hesaplamanızı Birlikte Gözden Geçirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketinizin yabancı kaynak/özkaynak dengesinin kısıtlama
            kapsamına girip girmediğini, hangi giderlerin hesaplamaya
            dahil edilmesi gerektiğini ve geçici vergi dönemlerindeki
            kümülatif hesaplamanın doğru yürütülüp yürütülmediğini{" "}
            <Link href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi" className="text-orange-600 underline">
              vergi danışmanlığı hizmetimiz
            </Link>{" "}
            kapsamında birlikte değerlendirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 11. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Finansman gider kısıtlaması, 2021&apos;den beri yürürlükte olan
          ama her yıl yeniden hesaplanması gereken, borçla büyüyen
          şirketler için gözden kaçırıldığında yıl sonunda ciddi bir
          matrah farkına dönüşebilen bir kural. %10&apos;luk oran küçük
          görünse de, yüksek faizli dönemlerde ve yoğun kredi kullanan
          işletmelerde toplam etkisi hiç de küçük olmuyor. Özellikle
          grup içi borçlanmaların ve örtülü sermaye sınırının doğru
          ayrıştırılması, doğru beyan için kritik.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirketlerin
          finansman yapısını vergi mevzuatı açısından doğru
          konumlandırmasına, geçici vergi dönemlerindeki hesaplamaları
          güncel mevzuat ve özelgelere uygun şekilde yürütmesine yardımcı
          oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ulusal ve Uluslararası Vergi Danışmanlığı: KOBİ&apos;ler İçin Neden Gerekli?</h3>
          </Link>
          <Link
            href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ RİSK ANALİZİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ&apos;nin İhtiyacı?</h3>
          </Link>
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri Nasıl Uygulanır?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Finansman gider kısıtlaması oranı 2026'da kaç?","acceptedAnswer":{"@type":"Answer","text":"%10. Bu oran, 3490 sayılı Cumhurbaşkanı Kararı ile 1 Ocak 2021'den itibaren uygulanmaya başladı ve 2026 itibarıyla herhangi bir değişikliğe uğramadı."}},{"@type":"Question","name":"Hangi şirketler finansman gider kısıtlamasından muaf?","acceptedAnswer":{"@type":"Answer","text":"Kredi kuruluşları, finansal kiralama/faktoring/finansman şirketleri, 6362 sayılı Kanun kapsamında sermaye piyasası faaliyetinde bulunan kurumlar ile sigorta, reasürans ve emeklilik şirketleri bu kısıtlamanın dışında tutulmuştur."}},{"@type":"Question","name":"Finansman gider kısıtlaması ile örtülü sermaye aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Finansman gider kısıtlaması tüm yabancı kaynakları kapsar ve aşan kısma isabet eden giderin sadece %10'unu KKEG sayar. Örtülü sermaye ise yalnızca ortak veya ortakla ilişkili kişilerden alınan, özkaynağın 3 katını aşan borçlanmaları kapsar ve aşan kısma ilişkin giderin tamamını KKEG sayar; ayrıca borç vereninde dağıtılmış kâr payı sayılarak stopaja yol açabilir."}},{"@type":"Question","name":"Şahıs işletmeleri (gelir vergisi mükellefleri) bu kısıtlamaya tabi mi?","acceptedAnswer":{"@type":"Answer","text":"Yalnızca bilanço esasına göre defter tutan gelir vergisi mükellefleri, GVK madde 41/1-9 uyarınca aynı kısıtlamaya tabidir. İşletme hesabı esasına göre defter tutanlar kapsam dışındadır."}},{"@type":"Question","name":"Hesaplamada hangi bilanço esas alınır?","acceptedAnswer":{"@type":"Answer","text":"25 Eylül 2025 tarihli özelgeye göre, Vergi Usul Kanunu'na göre çıkarılacak ve vergi ile diğer yasal yükümlülükler hesaplanmadan önceki bilanço esas alınır. Takvim yılına tabi mükellefler için bu, her geçici vergi döneminin son günü ve 31 Aralık itibarıyla hazırlanan bilançodur."}},{"@type":"Question","name":"Yatırım için alınan kredinin faizi de kısıtlamaya tabi mi?","acceptedAnswer":{"@type":"Answer","text":"Eğer bu faiz doğrudan dönem gideri olarak yazılıyorsa evet, kısıtlama kapsamına girer. Ancak yatırımın maliyetine eklenen (aktifleştirilen ve amortisman yoluyla itfa edilen) finansman giderleri, çifte kısıtlamayı önlemek amacıyla kapsam dışı tutulur."}}]}) }}
      />
    </BlogLayout>
  );
}
