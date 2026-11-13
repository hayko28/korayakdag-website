import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Deprem Bölgesi Yatırım Teşviki: Başvuru Süresi 31 Aralık 2026'da Doluyor | Koray Akdağ",
  description: "9903 sayılı Karar'ın geçici 3. ve 4. maddeleri kapsamında Adıyaman, Hatay, Kahramanmaraş, Malatya ve Cazibe Merkezleri illerindeki imalat yatırımlarına 6. bölge desteği sağlanıyor. Başvuru süresi 31 Aralık 2026'da sona eriyor; kapsam, destekler ve süreç.",
  keywords: [
    "deprem bölgesi yatırım teşviki",
    "cazibe merkezleri programı 2026",
    "9903 sayılı karar geçici madde 3",
    "deprem bölgesi teşvik belgesi başvuru süresi",
    "6. bölge yatırım teşviki",
    "Adıyaman Hatay Kahramanmaraş Malatya yatırım teşviki",
    "cazibe merkezleri OSB teşvik",
    "yatırım teşvik belgesi 31 Aralık 2026",
  ],
  alternates: {
    canonical: "/blog/deprem-bolgesi-cazibe-merkezleri-yatirim-tesviki-basvuru-suresi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Deprem Bölgesi ve Cazibe Merkezlerinde Yatırım Teşviki İçin Başvuru Süresi 31 Aralık 2026'da Doluyor"
      description="9903 sayılı Karar, 2012'den beri uygulanan teşvik sistemini ve Cazibe Merkezleri Programı'nı yürürlükten kaldırdı. Ancak depremden etkilenen ilçelerde ve eski Cazibe Merkezleri illerindeki OSB'lerde, geçici 3. ve 4. maddeler kapsamında 6. bölge seviyesinde destek uygulaması sürüyor. Bu özel uygulamadan yararlanmak için yeni başvuru imkânı 31 Aralık 2026'da sona eriyor."
      category="YATIRIM TEŞVİKLERİ • DEPREM BÖLGESİ • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="deprem-bolgesi-cazibe-merkezleri-yatirim-tesviki-basvuru-suresi-2026"
      programDurumu="acik"
      sonBasvuruTarihi="31 Aralık 2026"
      coverImage="https://images.unsplash.com/photo-1527335988388-b40ee248d80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Deprem Bölgesi veya Cazibe Merkezi Yatırımınızı Birlikte Değerlendirelim"
      ctaText="Yatırımınızın geçici 3/4 madde kapsamına girip girmediğini, hangi destek unsurlarından yararlanabileceğinizi ve E-TUYS başvurunuzu süre dolmadan birlikte planlayalım."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Bu Fırsat Ne, Kimi İlgilendiriyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ 30 Mayıs 2025 tarihli <strong>9903 sayılı Karar</strong>, 2012&apos;den beri uygulanan yatırım teşvik sistemini ve <strong>Cazibe Merkezleri Programı&apos;nı</strong> yürürlükten kaldırdı.</li>
          <li>✔ Ancak kararın <strong>geçici 3. ve 4. maddeleri</strong>, depremden etkilenen bazı ilçelerde ve eski Cazibe Merkezleri illerindeki OSB&apos;lerde özel bir destek uygulamasını sürdürüyor.</li>
          <li>✔ Bu kapsamda alınan teşvik belgelerinde, ülkenin en az gelişmiş <strong>6. bölgesinde</strong> uygulanan oran, tutar, süre ve şartlarla destek sağlanıyor.</li>
          <li>✔ Destek yalnızca <strong>imalat sanayii yatırımlarına</strong> (NACE Rev.2.1 10-32 ve 38.2) açık.</li>
          <li>✔ Deprem ilçelerindeki imalat yatırımlarında, normalde aranan <strong>yatırım konusu uygunluk şartı</strong> dahi aranmıyor; bu bölgede hemen her imalat yatırımı değerlendirmeye alınabiliyor.</li>
          <li>✔ Bu özel uygulamadan yararlanmak için <strong>yeni başvuru yapma imkânı 31 Aralık 2026&apos;da sona eriyor.</strong> Bu tarihten sonra alınmış belgelerin desteği devam eder; mesele yeni başvurudur.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Bu Özel Destek Uygulaması Nedir?
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Hangi İller ve İlçeler Kapsıyor?
          </Link>
          <Link href="#destekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Hangi Destekler Sağlanıyor?
          </Link>
          <Link href="#sart" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Sektör Şartı ve Önemli Bir Ayrıcalık
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Takvimi ve Süreç
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Standart 6. Bölge ile Karşılaştırması
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Karıştırmayın: Program Kalktı Ama Destek Sürüyor
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
          1. Bu Özel Destek Uygulaması Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          30 Mayıs 2025 tarihli ve 32915 sayılı Resmî Gazete&apos;de
          yayımlanan <strong>9903 sayılı Cumhurbaşkanı Kararı</strong>
          (&quot;Yatırımlarda Devlet Yardımları Hakkında Karar&quot;),
          2012&apos;den bu yana uygulanan yatırım teşvik sistemini baştan
          değiştirdi. Bu kararla birlikte 2012/3305 sayılı eski Karar ve
          2018/11201 sayılı <strong>Cazibe Merkezleri Programı Kararı</strong>{" "}
          yürürlükten kaldırıldı. Sanayi ve Teknoloji Bakanlığı&apos;nın
          açıklamalarına göre eski &quot;genel teşvik sistemi&quot;
          sonlandırıldı; yerine Türkiye Yüzyılı Kalkınma Hamlesi, Sektörel
          Teşvik Sistemi ve bölgesel teşvik uygulamalarından oluşan yeni bir
          çerçeve geldi.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Cazibe Merkezleri Programı, 2018&apos;den itibaren Doğu ve
          Güneydoğu Anadolu&apos;daki illerde sanayi yatırımlarını
          canlandırmak için kurulmuş, standart bölgesel teşvikin üzerine
          ek avantajlar ekleyen özel bir programdı. Bu programın resmen
          kaldırılmış olması, ilk bakışta bu illerdeki yatırımcılar için
          bir kayıp gibi görünebilir. Ancak 9903 sayılı Karar&apos;ın{" "}
          <strong>geçici 3. ve geçici 4. maddeleri</strong>, hem 6 Şubat 2023
          depremlerinden etkilenen bazı ilçelerde hem de eski Cazibe
          Merkezleri Programı kapsamındaki illerin organize sanayi
          bölgelerinde (OSB), bu avantajın fiilen sürmesini sağlıyor.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Pratikte bu, ilgili bölgelerde yatırım yapan bir şirketin, kendi
          ilinin teşvik sistemindeki normal bölge sınıflandırması ne olursa
          olsun, ülkenin en yüksek destek seviyesi olan{" "}
          <strong>6. bölge şartlarıyla</strong> teşvik belgesi
          alabilmesi anlamına geliyor. 11 Kasım 2026 tarihli bir uzman
          değerlendirmesinde vurgulandığı üzere, bu imkândan yararlanmak
          için yeni başvuru yapma süresi sınırlı ve yakın bir tarihte
          sona eriyor.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Neden Önemli?
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Depremden etkilenen illerde yeni bir üretim tesisi kurmayı veya mevcut tesisi büyütmeyi planlayan her imalatçı için doğrudan ilgili</li>
            <li>✔ Standart bölgesel teşvikte düşük bölgede (örn. 3. veya 4. bölge) yer alan bir il, bu madde sayesinde 6. bölge avantajına ulaşabiliyor</li>
            <li>✔ Süre dolduğunda bu özel geçiş uygulaması sona erecek; sonrasında hangi çerçevede devam edeceği belirsiz</li>
            <li>✔ Küçük ve orta ölçekli imalatçılar için de normalde aranan yatırım konusu şartı aranmadığından başvuru eşiği daha düşük</li>
          </ul>
        </div>
      </section>

      {/* 2. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Hangi İller ve İlçeler Kapsıyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          9903 sayılı Karar, bu özel uygulamayı iki ayrı geçici madde
          üzerinden iki farklı gruba tanımlıyor. İkisinin kapsamı ve
          mantığı farklı, bu yüzden hangi maddeye göre başvuracağınızı
          doğru tespit etmek önemli:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🏗️ Geçici Madde 3: Deprem İlçeleri
            </h3>
            <p className="mb-4 text-gray-700">
              6 Şubat 2023 depremleri nedeniyle genel hayata etkili afet
              bölgesi ilan edilen ve 2018/11201 sayılı Kararın ek-2&apos;sinde
              yer alan ilçeleri kapsar. Konuyu işleyen güncel
              değerlendirmelerde bu kapsamın başlıca <strong>Adıyaman,
              Hatay, Kahramanmaraş ve Malatya</strong> ilçelerini içerdiği
              belirtiliyor.
            </p>
            <p className="text-sm text-gray-500">
              Kendi ilçenizin ek-2 listesinde yer alıp almadığını başvuru
              öncesi Yatırım Destek Ofisi veya Sanayi ve Teknoloji
              Bakanlığı üzerinden teyit etmeniz önerilir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🏭 Geçici Madde 4: Cazibe Merkezleri OSB&apos;leri
            </h3>
            <p className="mb-4 text-gray-700">
              2018/11201 sayılı Kararın ek-1&apos;inde yer alan illerdeki
              organize sanayi bölgeleri ve endüstri bölgelerini kapsar.
              Bu il grubu, teşvik sisteminin 6. bölgesini oluşturan
              illerle büyük ölçüde örtüşüyor. Ayrıca kapsam dışı bir il
              olmasına rağmen özel olarak <strong>Sivas Demirağ
              OSB</strong> de bu maddeye eklenmiş durumda.
            </p>
            <p className="text-sm text-gray-500">
              OSB dışında, serbest bölge veya münferit arazide yapılan
              yatırımlar bu madde kapsamına girmeyebilir; yatırım
              yerinin OSB/endüstri bölgesi statüsünü teyit edin.
            </p>
          </div>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Her iki madde de yalnızca <strong>imalat sanayii
          yatırımlarına</strong> açık; ticaret, hizmet veya turizm
          yatırımları bu özel uygulama kapsamına girmiyor. Yatırımınızın
          hangi ilçe veya OSB&apos;de yapılacağını netleştirmeden önce,
          bu ayrımı yapmak başvuru stratejinizi doğrudan etkiler.
        </p>
      </section>

      {/* 3. DESTEKLER */}
      <section id="destekler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Hangi Destekler Sağlanıyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Geçici 3 ve geçici 4 madde kapsamında düzenlenen teşvik
          belgelerinde, 6. bölgede uygulanan destekler <strong>aynı
          oran, miktar, süre ve şartlarla</strong> sağlanıyor. Bu, ülkenin
          teşvik sisteminde tanımlı en yüksek destek seviyesi:
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Destek Unsuru</th>
                <th className="p-4">6. Bölge Seviyesi Uygulama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">KDV İstisnası</td>
                <td className="p-4">Makine ve teçhizat alımında var</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Gümrük Vergisi Muafiyeti</td>
                <td className="p-4">İthal makine ve teçhizatta var</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Vergi İndirimi Oranı</td>
                <td className="p-4">%60</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">SGK İşveren Primi Desteği</td>
                <td className="p-4">12 yıl (OSB dışı) / 14 yıl (OSB içi)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">SGK İşçi Hissesi Desteği</td>
                <td className="p-4">10 yıl</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Faiz / Kâr Payı Desteği</td>
                <td className="p-4">Var, en yüksek üst sınırla</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Yatırım Yeri Tahsisi</td>
                <td className="p-4">Var</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-lg leading-9 text-gray-700">
          Bunlara ek olarak, ilgili düzenlemelerde enerji desteği, inşaat
          ve yapı harçlarından muafiyet, emlak vergisi ve damga vergisi
          istisnaları da destek unsurları arasında sayılıyor. Tüm bu
          unsurların her projede aynı oranda uygulanacağı anlamına
          gelmiyor; hangi destek unsurunun hangi tutarda kullanılacağı
          yatırımın niteliğine ve teşvik belgesindeki şartlara göre
          belirleniyor.
        </p>
      </section>

      {/* 4. ŞART */}
      <section id="sart" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Sektör Şartı ve Önemli Bir Ayrıcalık
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bu özel uygulama, NACE Rev.2.1 sınıflandırmasında{" "}
          <strong>10-32 ve 38.2 kodlarını</strong> kapsayan imalat
          sanayii yatırımlarıyla sınırlı. Yani ticaret, lojistik, turizm
          veya saf hizmet yatırımları bu geçici maddelerden
          yararlanamıyor; destek doğrudan üretim tesisi kuran veya
          büyüten şirketleri hedefliyor.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Burada dikkat çeken ayrı bir nokta var. 9903 sayılı Karar&apos;ın
          5. maddesinin birinci fıkrası, normal şartlarda desteklerden
          yararlanacak yatırımların, kararın Ek-3&apos;ünde tanımlı
          belirli &quot;yatırım konuları&quot; listesine uygun olmasını ve bu
          konular için belirlenmiş şartları karşılamasını şart koşuyor.
          Deprem ilçelerindeki (geçici madde 3) imalat sanayii
          yatırımlarında ise bu şart <strong>aranmıyor.</strong>
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            💡 Bunun Pratik Anlamı Ne?
          </h3>
          <p className="leading-8 text-gray-700">
            Türkiye&apos;nin diğer bölgelerinde bir imalatçının teşvik
            belgesi alabilmesi için yatırım konusunun Ek-3 listesindeki
            tanımlı kalemlerle örtüşmesi gerekiyor. Deprem ilçelerinde
            ise NACE 10-32 ve 38.2 kapsamına giren hemen her imalat
            yatırımı, Ek-3&apos;te ayrıca sayılmasa da başvuru
            kapsamına girebiliyor. Bu, deprem bölgesindeki küçük ve orta
            ölçekli imalatçılar için başvuru eşiğini belirgin biçimde
            düşüren, çoğu yatırımcının fark etmediği bir ayrıcalık.
          </p>
        </div>
      </section>

      {/* 5. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Takvimi ve Süreç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Geçici 3 ve geçici 4 madde kapsamındaki özel uygulamadan
          yararlanmak isteyen yatırımcıların, standart yatırım teşvik
          belgesi başvuru sürecini izlemesi gerekiyor; farklılık
          başvurunun hangi tarihe kadar yapılabileceğinde:
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📝</div>
            <h3 className="text-xl font-bold">1. E-TUYS Kaydı</h3>
            <p className="mt-3 text-sm text-gray-600">
              Şirket, Elektronik Teşvik Uygulama ve Yabancı Sermaye
              Bilgi Sistemi&apos;ne (E-TUYS) kayıt olur ve yetkilendirme
              işlemlerini tamamlar.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📂</div>
            <h3 className="text-xl font-bold">2. Başvuru Dosyası</h3>
            <p className="mt-3 text-sm text-gray-600">
              Yatırım bilgi formu, kapasite raporu ve ilgili belgeler
              hazırlanarak E-TUYS üzerinden sisteme yüklenir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📍</div>
            <h3 className="text-xl font-bold">3. Yatırım Yeri Teyidi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Yatırımın ilgili ilçede veya kapsamdaki OSB&apos;de
              yapılacağı, yer gösterme/tahsis belgeleriyle doğrulanır.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🔎</div>
            <h3 className="text-xl font-bold">4. Bakanlık Değerlendirmesi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Sanayi ve Teknoloji Bakanlığı, başvuruyu geçici 3/4 madde
              kapsamına uygunluk açısından inceler.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📜</div>
            <h3 className="text-xl font-bold">5. Teşvik Belgesi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Uygun bulunan başvurular için, 6. bölge destek
              seviyesinde bir yatırım teşvik belgesi düzenlenir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">⏳</div>
            <h3 className="text-xl font-bold">6. Son Tarih</h3>
            <p className="mt-3 text-sm text-gray-600">
              Bu özel kapsamda <strong>yeni başvuru</strong> yapılabilmesi
              için müracaatın <strong>31 Aralık 2026&apos;ya</strong> kadar
              yapılmış olması gerekiyor.
            </p>
          </div>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          31 Aralık 2026&apos;dan sonra, geçici 3 ve 4. maddeler kapsamında
          yeni başvuru yapma imkânı mevcut haliyle kapanıyor. Bu tarihten
          önce alınmış teşvik belgeleri kapsamındaki destekler ise, belge
          süresi boyunca normal şekilde kullanılmaya devam eder; sürenin
          dolması geçmişte alınmış belgeleri etkilemez.
        </p>
      </section>

      {/* 6. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Standart 6. Bölge ile Karşılaştırması
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türkiye&apos;nin zaten 6. bölgede yer alan illerinde (örneğin
          Diyarbakır, Şanlıurfa, Van) bir yatırımcı, ek bir geçici madde
          olmadan da standart bölgesel teşvikle 6. bölge desteğine zaten
          ulaşabiliyor. Bu özel uygulamanın asıl değeri, normalde daha
          düşük bir bölgede yer alan deprem ilçeleri ve Cazibe Merkezleri
          illeri için ortaya çıkıyor:
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Durum</th>
                <th className="p-5">Normal Uygulama</th>
                <th className="p-5">Geçici 3/4 Madde Kapsamında</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Malatya&apos;da (4. bölge il) imalat yatırımı</td>
                <td className="p-5">4. bölge destek seviyesi uygulanır</td>
                <td className="p-5">6. bölge destek seviyesi uygulanabilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hatay&apos;da (5. bölge il) imalat yatırımı</td>
                <td className="p-5">5. bölge destek seviyesi uygulanır</td>
                <td className="p-5">6. bölge destek seviyesi uygulanabilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yatırım konusu uygunluk şartı</td>
                <td className="p-5">Ek-3 listesine uygunluk aranır</td>
                <td className="p-5">Deprem ilçelerinde aranmaz (NACE 10-32, 38.2)</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Başvuru süresi</td>
                <td className="p-5">Süresiz, dönemsel kurallara bağlı</td>
                <td className="p-5">Yeni başvuru için 31 Aralık 2026 sınırı var</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Karıştırmayın: Program Kalktı Ama Destek Sürüyor
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ &quot;Cazibe Merkezleri Programı Kalktı, Artık Yok&quot; Yanılgısı
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            9903 sayılı Karar&apos;ın 2018/11201 sayılı Cazibe Merkezleri
            Programı Kararı&apos;nı yürürlükten kaldırdığı haberleri geniş
            yankı buldu. Bu, bazı yatırımcıların &quot;o zaman bölgemdeki
            ek avantaj da bitti&quot; diye düşünerek başvuru yapmaktan
            vazgeçmesine yol açabilir. Bu, hatalı bir sonuç.
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kavram</th>
                  <th className="p-4">Gerçek Durum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Cazibe Merkezleri Programı (2018/11201)</td>
                  <td className="p-4">Ayrı bir program olarak 9903 sayılı Kararla yürürlükten kaldırıldı</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">6. bölge seviyesi destek (geçici madde 3/4)</td>
                  <td className="p-4">Aynı il/ilçe grubu için 9903 sayılı Karar içinde, geçici hükümlerle hâlâ uygulanıyor</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Kısacası eski programın adı ve ayrı hukuki statüsü ortadan
            kalktı, ama aynı illerdeki yatırımcılara sağlanan destek
            seviyesi, yeni kararın içine geçici madde olarak taşındı.
            Başvuru süresi dolana kadar bu fark, sadece teknik bir
            isimlendirme meselesi; destek fiilen hâlâ mevcut.
          </p>
        </div>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Geçici 3. madde yalnızca ek-2&apos;de sayılan <strong>ilçeleri</strong> kapsıyor; bir ilin merkez ilçesi kapsamdaysa bile, aynı ildeki başka bir ilçe kapsam dışı kalabilir.</li>
            <li>Geçici 4. madde, yatırımın <strong>OSB veya endüstri bölgesi</strong> içinde yapılmasını şart koşuyor; OSB dışındaki bir arazide yapılan yatırım bu maddeden yararlanamayabilir.</li>
            <li>Destek yalnızca <strong>imalat sanayii</strong> (NACE 10-32, 38.2) yatırımlarına açık; depolama, lojistik veya ticaret amaçlı yatırımlar bu kapsama girmiyor.</li>
            <li>31 Aralık 2026 sonrasında bu geçici hükümlerin uzatılıp uzatılmayacağına dair resmî bir karar henüz yayımlanmadı; bazı uzmanlar sürenin 2030&apos;a uzatılmasını önerse de bu bir temenni, yürürlükte olan bir hak değil.</li>
            <li>Başvuru dosyasının eksiksiz hazırlanması zaman alır; son güne bırakmak, E-TUYS&apos;ta teknik gecikme veya belge tamamlama süreciyle süreyi kaçırma riski taşır.</li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, hangi geçici maddenin
            hangi şartla uygulandığının birbirine karıştırılması. Geçici 3
            yalnızca belirli deprem ilçelerine ve imalat yatırımına özel
            bir ayrıcalık (yatırım konusu şartının aranmaması) içeriyor;
            geçici 4 ise bu ayrıcalığı taşımıyor ve yatırımın OSB/endüstri
            bölgesi içinde olmasını şart koşuyor. Bir yatırımcının önce
            yatırım yerinin hangi madde kapsamına girdiğini netleştirmesi,
            sonra o maddenin kendine özgü şartlarını tek tek kontrol etmesi
            gerekiyor; aksi halde başvuru, beklenen destek seviyesinden
            daha dar bir çerçevede değerlendirilebilir.
          </p>
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
              <a href="https://www.resmigazete.gov.tr/eskiler/2025/05/20250530-2.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                9903 Sayılı Cumhurbaşkanı Kararı, &quot;Yatırımlarda Devlet Yardımları Hakkında Karar&quot;, 30 Mayıs 2025, RG 32915 - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.yatirimadestek.gov.tr/pdf/assets/upload/dosyalar/karar-yatirim_tesvik_uygulamalari.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Yatırım Teşvik Uygulamaları Kararı - Yatırım Destek Ofisleri (yatirimadestek.gov.tr)
              </a>
            </li>
            <li>
              <a href="https://www.yatirimadestek.gov.tr/pdf/assets/upload/dosyalar/karar_cazibe_merkezleri_destek_programi.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Cazibe Merkezleri Destek Programı Kararı (2018/11201) - yatirimadestek.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.alomaliye.com/2026/11/10/deprem-ve-cazibe-merkezleri-tesviklerinde-basvuru-suresi-doluyor/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Mustafa Bahadır Altaş, &quot;Deprem ve Cazibe Merkezleri Teşviklerinde Başvuru Süresi Doluyor&quot;, Alomaliye.com, 10 Kasım 2026
              </a>
            </li>
            <li>
              <a href="https://www.sanayi.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Sanayi ve Teknoloji Bakanlığı - Resmî Duyurular (sanayi.gov.tr)
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
              Cazibe Merkezleri Programı tamamen kalktı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              2018/11201 sayılı Kararla kurulan program, ayrı bir hukuki
              yapı olarak 9903 sayılı Karar ile yürürlükten kaldırıldı.
              Ancak aynı il grubundaki OSB&apos;ler için sağlanan 6. bölge
              seviyesindeki destek, 9903 sayılı Kararın geçici 4. maddesi
              üzerinden 31 Aralık 2026&apos;ya kadar yapılacak başvurularla
              fiilen sürdürülüyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hangi iller ve ilçeler bu özel destekten yararlanabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Geçici 3. madde, 6 Şubat 2023 depremlerinden etkilenen ve
              2018/11201 sayılı Kararın ek-2&apos;sinde sayılan ilçeleri
              (başlıca Adıyaman, Hatay, Kahramanmaraş ve Malatya&apos;da)
              kapsıyor. Geçici 4. madde ise aynı kararın ek-1&apos;indeki
              illerin OSB/endüstri bölgelerini ve ayrıca Sivas Demirağ
              OSB&apos;yi kapsıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuru için son tarih gerçekten 31 Aralık 2026 mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. 9903 sayılı Kararın geçici 3. ve 4. maddelerine göre,
              bu kapsamda teşvik belgesi düzenlenebilmesi için
              müracaatın 31 Aralık 2026 tarihine kadar yapılmış olması
              gerekiyor. Bu tarihten sonra yeni başvuru alınıp
              alınmayacağına dair ayrı bir düzenleme henüz yok.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Her sektör bu destekten yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Destek yalnızca NACE Rev.2.1 10-32 ve 38.2
              kodlarını kapsayan imalat sanayii yatırımlarına açık.
              Ticaret, hizmet, lojistik veya turizm yatırımları bu
              geçici madde kapsamına girmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Deprem ilçesinde yatırım konumun Ek-3 listesinde olmaması sorun olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Geçici 3. madde kapsamındaki deprem ilçelerinde yapılan
              imalat sanayii yatırımları için, kararın 5. maddesinin
              birinci fıkrasındaki Ek-3 yatırım konusu uygunluk şartı
              aranmıyor. Bu, deprem bölgesindeki yatırımcılar için önemli
              bir ayrıcalık; ancak bu istisna geçici 4. madde (Cazibe
              Merkezleri OSB&apos;leri) için ayrıca geçerli değildir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              31 Aralık 2026&apos;dan önce alınmış teşvik belgem ne olacak?
            </h3>
            <p className="leading-8 text-gray-700">
              Sürenin dolması, bu tarihten önce düzenlenmiş teşvik
              belgelerini etkilemez. Belge kapsamındaki destekler, belge
              süresi ve ilgili mevzuat şartları çerçevesinde normal
              şekilde kullanılmaya devam eder. Süre sınırı yalnızca
              yeni başvuruları ilgilendiriyor.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Süre Dolmadan Başvurunuzu Birlikte Hazırlayalım
          </h3>
          <p className="leading-8 text-gray-700">
            Adıyaman, Hatay, Kahramanmaraş, Malatya veya eski Cazibe
            Merkezleri illerindeki bir OSB&apos;de imalat yatırımı
            planlıyorsanız, yatırımınızın geçici 3 veya 4. madde
            kapsamına girip girmediğini ve hangi destek unsurlarından
            yararlanabileceğinizi birlikte değerlendirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              31 Aralık 2026 öncesinde E-TUYS başvurunuzu planlamak için
              bizimle iletişime geçin.
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
          Cazibe Merkezleri Programı&apos;nın adı resmen tarihe geçmiş
          olsa da, depremden etkilenen ilçelerdeki ve eski program
          kapsamındaki OSB&apos;lerdeki imalatçılar için en yüksek
          bölgesel destek seviyesine ulaşma imkânı, 9903 sayılı Kararın
          geçici hükümleri sayesinde hâlâ masada. Bu imkânın kapısı,
          yeni başvurular için <strong>31 Aralık 2026</strong>&apos;da
          kapanıyor; bu tarihten sonra aynı avantajın hangi çerçevede
          (varsa) süreceği şu an için belirsiz.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Dolayısıyla ilgili illerde yeni bir üretim tesisi kurmayı veya
          mevcut tesisini büyütmeyi düşünen her imalatçı için önümüzdeki
          haftalar, yatırım planını netleştirip E-TUYS başvurusunu
          tamamlamak için son fırsat penceresi niteliğinde.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, yatırımınızın
          geçici 3 veya 4. madde kapsamına uygunluğunun değerlendirilmesinden
          E-TUYS başvurunuzun hazırlanmasına, teşvik belgesi alındıktan
          sonraki muhasebe ve raporlama süreçlerinize kadar tüm süreçte
          yanınızdayız. Ayrı bir danışmanlık veya mali müşavirlik firması
          aramanıza gerek kalmadan, süre dolmadan başvurunuzu birlikte
          planlayabiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YATIRIM TEŞVİKLERİ • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgesi Nedir? Faydaları, Şartları ve 2026 Güncel Rehberi</h3>
          </Link>
          <Link
            href="/blog/proje-bazli-tesvik-sistemi-2026-degisiklikleri"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YATIRIM TEŞVİKLERİ • PROJE BAZLI TEŞVİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Proje Bazlı Teşvik Sisteminde 2026 Değişikliği: 11572 Sayılı Karar Ne Getiriyor?</h3>
          </Link>
          <Link
            href="/blog/makine-ekipman-yatirimi-kosgeb-mi-yatirim-tesvik-belgesi-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • YATIRIM TEŞVİKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Makine Ekipman Yatırımı: KOSGEB mi, Yatırım Teşvik Belgesi mi?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Cazibe Merkezleri Programı tamamen kalktı mı?","acceptedAnswer":{"@type":"Answer","text":"2018/11201 sayılı Kararla kurulan program, ayrı bir hukuki yapı olarak 9903 sayılı Karar ile yürürlükten kaldırıldı. Ancak aynı il grubundaki OSB'ler için sağlanan 6. bölge seviyesindeki destek, 9903 sayılı Kararın geçici 4. maddesi üzerinden 31 Aralık 2026'ya kadar yapılacak başvurularla fiilen sürdürülüyor."}},{"@type":"Question","name":"Hangi iller ve ilçeler bu özel destekten yararlanabilir?","acceptedAnswer":{"@type":"Answer","text":"Geçici 3. madde, 6 Şubat 2023 depremlerinden etkilenen ve 2018/11201 sayılı Kararın ek-2'sinde sayılan ilçeleri (başlıca Adıyaman, Hatay, Kahramanmaraş ve Malatya'da) kapsıyor. Geçici 4. madde ise aynı kararın ek-1'indeki illerin OSB/endüstri bölgelerini ve ayrıca Sivas Demirağ OSB'yi kapsıyor."}},{"@type":"Question","name":"Başvuru için son tarih gerçekten 31 Aralık 2026 mı?","acceptedAnswer":{"@type":"Answer","text":"Evet. 9903 sayılı Kararın geçici 3. ve 4. maddelerine göre, bu kapsamda teşvik belgesi düzenlenebilmesi için müracaatın 31 Aralık 2026 tarihine kadar yapılmış olması gerekiyor. Bu tarihten sonra yeni başvuru alınıp alınmayacağına dair ayrı bir düzenleme henüz yok."}},{"@type":"Question","name":"Her sektör bu destekten yararlanabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Destek yalnızca NACE Rev.2.1 10-32 ve 38.2 kodlarını kapsayan imalat sanayii yatırımlarına açık. Ticaret, hizmet, lojistik veya turizm yatırımları bu geçici madde kapsamına girmiyor."}},{"@type":"Question","name":"Deprem ilçesinde yatırım konumun Ek-3 listesinde olmaması sorun olur mu?","acceptedAnswer":{"@type":"Answer","text":"Geçici 3. madde kapsamındaki deprem ilçelerinde yapılan imalat sanayii yatırımları için, kararın 5. maddesinin birinci fıkrasındaki Ek-3 yatırım konusu uygunluk şartı aranmıyor. Bu, deprem bölgesindeki yatırımcılar için önemli bir ayrıcalık; ancak bu istisna geçici 4. madde (Cazibe Merkezleri OSB'leri) için ayrıca geçerli değildir."}},{"@type":"Question","name":"31 Aralık 2026'dan önce alınmış teşvik belgem ne olacak?","acceptedAnswer":{"@type":"Answer","text":"Sürenin dolması, bu tarihten önce düzenlenmiş teşvik belgelerini etkilemez. Belge kapsamındaki destekler, belge süresi ve ilgili mevzuat şartları çerçevesinde normal şekilde kullanılmaya devam eder. Süre sınırı yalnızca yeni başvuruları ilgilendiriyor."}}]}) }}
      />
    </BlogLayout>
  );
}
