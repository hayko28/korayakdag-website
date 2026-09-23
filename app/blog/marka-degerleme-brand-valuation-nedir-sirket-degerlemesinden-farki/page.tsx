import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Marka Değerleme (Brand Valuation) Nedir? Şirket Değerlemesinden Farkı | Koray Akdağ",
  description: "Marka değerlemesi ile şirket değerlemesi arasındaki fark, ISO 10668 standardı, royalty relief/piyasa/maliyet bazlı yöntemler, marka değerinin TMS 38 kapsamında bilançoya yansıması ve marka değerlemesinin ne zaman yaptırılması gerektiğiyle kapsamlı rehber.",
  keywords: [
    "marka değerleme nedir",
    "brand valuation",
    "marka değerleme yöntemleri",
    "ISO 10668",
    "royalty relief yöntemi",
    "TMS 38 marka değeri",
    "marka değeri bilanço",
    "marka değerleme şirket değerlemesi farkı",
    "marka lisanslama değerleme",
    "franchise marka değeri",
  ],
  alternates: {
    canonical: "/blog/marka-degerleme-brand-valuation-nedir-sirket-degerlemesinden-farki",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Marka Değerleme (Brand Valuation) Nedir? Şirket Değerlemesinden Farkı"
      description="Bir şirketin değeri ile o şirkete ait markanın değeri aynı şey değil. Marka değerlemesinin ne olduğu, ISO 10668 standardının şart koştuğu üç analiz, güncel yöntemler, markanın bilançoya ne zaman yansıdığı ve hangi durumlarda marka değerlemesi yaptırmanız gerektiğiyle kapsamlı rehber."
      category="MARKA DEĞERLEME • FİKRİ MÜLKİYET • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="marka-degerleme-brand-valuation-nedir-sirket-degerlemesinden-farki"
      coverImage="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Marka Değerlemesi Nedir?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>Marka değerlemesi</strong>, bir işletmenin tamamını değil, yalnızca markasının (isim, logo, itibar, müşteri sadakati gibi maddi olmayan unsurların) parasal karşılığını ölçer. <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="text-orange-600 underline">Şirket değerlemesi</Link> ise şirketin tüm varlık, borç ve nakit akışını kapsayan çok daha geniş bir analizdir.</li>
          <li>✔ Uluslararası kabul gören standart <strong>ISO 10668:2010</strong>&apos;dir; bu standart bir marka değerlemesinin geçerli sayılması için <strong>finansal, hukuki ve davranışsal</strong> analizin birlikte yapılmasını şart koşar.</li>
          <li>✔ En yaygın kullanılan yöntem, markanın üçüncü bir taraftan lisanslanmış olsaydı ödenecek bedeli hesaplayan <strong>royalty relief (lisans muafiyeti)</strong> yöntemidir; piyasa ve maliyet bazlı yaklaşımlar tamamlayıcı olarak kullanılır.</li>
          <li>✔ <strong>TMS 38</strong> uyarınca işletme içinde kendi kendine yaratılan markalar bilançoya alınamaz; marka değeri bilançoda ancak <strong>satın alma veya işletme birleşmesi</strong> yoluyla edinildiğinde görünür.</li>
          <li>✔ Marka değerlemesi genellikle şirket satışı/M&A sürecinde, marka lisanslama veya franchise anlaşmalarında, kredi teminatı gösteriminde, marka devrinde transfer fiyatlandırması hesabında ve halka arz hazırlığında yaptırılır.</li>
          <li>✔ <strong>Marka tescili</strong> ile <strong>marka değerlemesi</strong> farklı şeylerdir: tescil hukuki koruma sağlar, değerleme markanın parasal değerini ölçer; biri diğerinin yerine geçmez.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Marka Değerlemesi Nedir? Şirket Değerlemesinden Farkı
          </Link>
          <Link href="#iso10668" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. ISO 10668 Standardı: Üç Analiz İlkesi
          </Link>
          <Link href="#yontemler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Marka Değerleme Yöntemleri
          </Link>
          <Link href="#bilanco" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Marka Değeri Bilançoya Nasıl Yansır? TMS 38
          </Link>
          <Link href="#ne-zaman" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Ne Zaman Marka Değerlemesi Yaptırılır?
          </Link>
          <Link href="#tescil-fark" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Marka Tescili ile Marka Değerlemesi Farkı
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Kimler İçin Uygun?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Süreç Nasıl İşler?
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
          1. Marka Değerlemesi Nedir? Şirket Değerlemesinden Farkı
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bir şirketin değeri denince akla genellikle makineleri, stoğu,
          alacakları, borçları ve gelecekte üreteceği nakit akışı gelir.{" "}
          <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="text-orange-600 underline">
            Şirket değerlemesi
          </Link>{" "}
          tam olarak bunu yapar: işletmenin tamamını, tüm varlık ve
          yükümlülükleriyle birlikte tek bir parasal değere indirger.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Marka değerlemesi ise çok daha dar ve odaklı bir sorudur: şirketin
          sahip olduğu isim, logo, itibar, müşteri sadakati ve pazardaki
          tanınırlığın kendisi ne kadar ediyor? İki şirket, aynı ciroya ve
          aynı fiziki varlıklara sahip olabilir; ama biri tanınmış bir marka
          altında satış yapıyorsa, o marka tek başına önemli bir ekonomik
          değer taşır. Marka değerlemesi işte bu farkı, yani şirketin
          toplam değerinden markaya atfedilebilen kısmı ayrıştırıp ölçmeye
          çalışır.
        </p>
        <p className="leading-8 text-gray-700">
          Pratikte marka değeri, şirket değerlemesinin bir alt bileşeni
          olarak da karşımıza çıkabilir; bir M&A işleminde toplam şirket
          değeri hesaplanırken markanın payı ayrı bir kalem olarak
          raporlanabilir. Ancak marka değerlemesi her zaman şirket
          değerlemesiyle birlikte yapılmaz: bir marka, sahibi olan şirketten
          bağımsız olarak da lisanslanabilir, satılabilir veya teminat
          gösterilebilir; bu durumda tek başına marka değerlemesine ihtiyaç
          duyulur.
        </p>
      </section>

      {/* 2. ISO 10668 */}
      <section id="iso10668" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. ISO 10668 Standardı: Üç Analiz İlkesi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Marka değerlemesi öznel bir alan olduğu için, farklı danışmanların
          aynı markaya çok farklı rakamlar biçmesi riski her zaman var.
          Bunu sınırlamak amacıyla Uluslararası Standardizasyon Örgütü
          (ISO), 2010 yılında <strong>ISO 10668:2010 - Marka Değerlemesi:
          Parasal Marka Değerlemesi İçin Gereklilikler</strong> standardını
          yayımladı. Standart, bir değerlemenin &quot;geçerli&quot;
          sayılabilmesi için üç ayrı analizin birlikte yapılmasını şart
          koşuyor:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">⚖️ Hukuki Analiz</h3>
            <p className="text-gray-700">
              Markanın tescil durumu, koruma kapsamı, sınıf bazında hangi
              ülkelerde tescilli olduğu ve üzerinde herhangi bir hukuki
              uyuşmazlık (itiraz, iptal davası, lisans kısıtı) bulunup
              bulunmadığı incelenir. Hukuken zayıf korunan bir marka,
              finansal olarak ne kadar güçlü görünürse görünsün, değerleme
              açısından risk taşır.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💰 Finansal Analiz</h3>
            <p className="text-gray-700">
              Markanın ilişkili olduğu ürün/hizmetin geçmiş ve öngörülen
              cirosu, kâr marjı, pazar payı ve büyüme potansiyeli
              incelenir. Bu analiz, markanın işletmenin toplam gelirine ne
              kadar katkı sağladığını ortaya koyar.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🧠 Davranışsal Analiz</h3>
            <p className="text-gray-700">
              Marka bilinirliği, algısı, müşteri sadakati ve satın alma
              kararında markanın oynadığı rol ölçülür. Bu genellikle
              tüketici araştırmaları, pazar verisi ve sektörel karşılaştırma
              göstergeleriyle desteklenir.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          ISO 10668, tek bir hesaplama formülü dayatmaz; bunun yerine
          değerleme amacının (satış, lisanslama, dava, finansal raporlama
          gibi) baştan net şekilde tanımlanmasını ve seçilen yöntemin bu
          amaca uygun olmasını ister. Bir değerleme raporunun ISO 10668&apos;e
          uygun olduğunu söyleyebilmek için, yukarıdaki üç analizin
          hepsinin raporda yer alması gerekir; yalnızca finansal
          hesaplamaya dayanan bir rapor, standardın aradığı bütünlüğü
          taşımaz.
        </p>
      </section>

      {/* 3. YÖNTEMLER */}
      <section id="yontemler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Marka Değerleme Yöntemleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket değerlemesindeki DCF, çarpan ve net aktif değer
          yöntemlerine benzer şekilde, marka değerlemesinde de üç temel
          yaklaşım var. Hangisinin kullanılacağı markanın yaşına,
          sektörüne ve değerlemenin amacına göre değişir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Yaklaşım</th>
                <th className="p-4">Mantığı</th>
                <th className="p-4">Ne Zaman Kullanılır</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Gelir Bazlı (Royalty Relief)</td>
                <td className="p-4">Markayı üçüncü bir taraftan lisanslamış olsaydınız ödeyeceğiniz varsayımsal royalti bedelinin bugünkü değerine indirgenmesi</td>
                <td className="p-4">En yaygın kullanılan yöntem; lisanslama, satış, transfer fiyatlandırması ve finansal raporlamada tercih edilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Piyasa Bazlı</td>
                <td className="p-4">Benzer markaların geçmişte gerçekleşen devir, lisans veya satış işlemleriyle karşılaştırma</td>
                <td className="p-4">Emsal işlem verisinin bulunabildiği, tanınırlığı yüksek markalarda; satış/devir müzakerelerinde destekleyici olarak</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Maliyet Bazlı</td>
                <td className="p-4">Markayı bugün sıfırdan yaratmanın (tasarım, tescil, pazarlama, lansman) toplam maliyeti</td>
                <td className="p-4">Genç, henüz gelir üretmeyen veya pazarda yeni markalarda; diğer yöntemler için veri yetersizken</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Uygulamada tek bir yöntemle yetinilmez; genellikle gelir bazlı
          yaklaşım ana yöntem olarak kullanılır, piyasa ve maliyet bazlı
          yaklaşımlar ise elde edilen rakamı çapraz kontrol etmek için
          referans olarak kullanılır. Royalty relief yönteminde kullanılan
          royalti oranı, markanın bilinirliği, sektördeki emsal lisans
          oranları ve rekabet koşulları dikkate alınarak belirlenir.
        </p>
      </section>

      {/* 4. BİLANÇO / TMS 38 */}
      <section id="bilanco" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Marka Değeri Bilançoya Nasıl Yansır? TMS 38
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Marka değerlemesi yaptırmak, o değerin otomatik olarak
          bilançoya girmesi anlamına gelmez. Türkiye Muhasebe Standardı{" "}
          <strong>TMS 38 - Maddi Olmayan Duran Varlıklar</strong>, bu
          konuda muhasebe uygulamasında en çok yanlış anlaşılan kuralı
          içeriyor:
        </p>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Dikkat: İşletme İçinde Yaratılan Markalar Bilançoya Alınamaz
          </h3>
          <p className="leading-8 text-gray-700">
            TMS 38 uyarınca işletmenin kendi içinde zaman içinde
            oluşturduğu markalar, ticari unvanlar, yayın hakları ve
            müşteri listeleri gibi kalemler <strong>maddi olmayan duran
            varlık olarak muhasebeleştirilemez</strong>. Gerekçe basit: bu
            markayı yaratmak için yapılan pazarlama, reklam ve tanıtım
            harcamaları, işletmenin genel faaliyet giderlerinden ayrı ve
            güvenilir şekilde izlenemiyor; dolayısıyla markanın maliyeti
            objektif olarak tespit edilemiyor.
          </p>
          <p className="mt-5 leading-8 text-gray-700">
            Marka değeri bilançoya ancak <strong>satın alma yoluyla</strong>{" "}
            veya <strong>işletme birleşmesi (M&A)</strong> yoluyla
            edinildiğinde, TFRS 3 kapsamında işlem tarihindeki gerçeğe
            uygun değeriyle kayda alınabilir. Başka bir deyişle: bir
            şirket başka bir şirketi satın aldığında, alınan işletmenin
            markası bilançoya girebilir; ama aynı şirket kendi markasını
            kendisi büyütmüşse, o markanın değeri ne kadar yüksek olursa
            olsun bilançoda görünmez.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu nüans, özellikle şirket satışı öncesinde önemli bir sonuç
          doğurur: bilançoda hiç görünmeyen, güçlü bir marka, şirketin
          defter değeri ile gerçek pazar değeri arasında ciddi bir fark
          yaratabilir. Yatırımcı veya alıcıya bu farkı somut bir rakamla
          anlatabilmenin tek yolu, ayrı bir marka değerleme raporudur.
        </p>
      </section>

      {/* 5. NE ZAMAN */}
      <section id="ne-zaman" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Ne Zaman Marka Değerlemesi Yaptırılır?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🤝 Şirket Satışı ve M&A</h3>
            <p className="text-gray-700">
              Bir şirket satılırken veya bir yatırımcı ortak olurken,
              markanın toplam değere katkısının ayrıca ortaya konması,
              müzakere masasında güçlü bir dayanak oluşturur. Bu süreç
              genellikle{" "}
              <Link href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026" className="text-orange-600 underline">
                due diligence
              </Link>{" "}
              sürecinin bir parçası olarak yürütülür.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📜 Lisanslama ve Franchise</h3>
            <p className="text-gray-700">
              Markanızı başka bir işletmeye lisanslamak veya franchise
              vermek istediğinizde, talep edeceğiniz royalti/franchise
              bedelinin makul ve savunulabilir olması gerekir. Marka
              değerlemesi bu bedelin dayanağını oluşturur.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🏦 Kredi Teminatı</h3>
            <p className="text-gray-700">
              Bazı finans kuruluşları, tescilli ve güçlü markaları teminat
              olarak değerlendirebiliyor. Bunun için markanın parasal
              değerinin bağımsız bir raporla ortaya konması gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📊 Vergi Planlaması ve Transfer Fiyatlandırması</h3>
            <p className="text-gray-700">
              Marka bir grup şirketi arasında devredildiğinde veya bir
              yurt dışı iştirak markayı kullanıp royalti ödediğinde, bu
              bedelin emsallere uygunluğu transfer fiyatlandırması
              mevzuatı açısından ayrıca belgelenmesi gereken bir konudur;
              marka değerlemesi bu belgelendirmenin temel girdisidir.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bunlara ek olarak, halka arz hazırlığı yapan şirketler de
          izahnamede markanın değerine ilişkin somut bir dayanak sunmak
          isteyebilir; bu durumda marka değerlemesi, halka arz sürecinin
          hazırlık aşamasındaki analizlerden biri olarak devreye girer.
        </p>
      </section>

      {/* 6. TESCİL FARKI */}
      <section id="tescil-fark" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Marka Tescili ile Marka Değerlemesi Farkı
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Tescil Koruma Sağlar, Değerleme Parasal Değer Ölçer
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Marka Tescili (TÜRKPATENT):</strong> Markanın belirli sınıflarda başkaları tarafından kullanılmasını engelleyen hukuki bir koruma işlemidir. Tescil, markanın kaç para ettiğini söylemez; yalnızca o ismin/logonun sahibinin siz olduğunu ve başkalarının kullanımını engelleme hakkınız olduğunu tescil eder.</li>
            <li><strong>Marka Değerlemesi:</strong> Tescilli (bazı durumlarda tescil süreci devam eden) bir markanın parasal karşılığını ISO 10668 çerçevesinde hesaplayan finansal bir analizdir. Tescil hukuki bir ön koşuldur, ancak tek başına yeterli değildir; zayıf tescil kapsamına sahip bir marka, değerleme raporunda risk unsuru olarak not düşülür.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Uygulamada sık karşılaşılan hata, markasını tescil ettirmiş bir
            işletmenin bunu otomatik olarak &quot;değerli bir marka
            varlığım var&quot; şeklinde yorumlamasıdır. Tescil, değerlemenin
            önkoşuludur ama kendisi değildir; markanın gerçek parasal
            karşılığı ancak ayrı bir değerleme çalışmasıyla ortaya çıkar.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Marka tescili sürecinin nasıl işlediğini, hangi sınıflarda
          başvuru yapılması gerektiğini ve KOBİ&apos;ler için neden kritik
          olduğunu{" "}
          <Link href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi" className="text-orange-600 underline">
            Marka Tescili ve Patent Başvurusu yazımızda
          </Link>{" "}
          ayrıntılı anlattık.
        </p>
      </section>

      {/* 7. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kimler İçin Uygun?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🏷️ Markası Güçlü Ama Değerlemesi Yapılmamış KOBİ&apos;ler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Pazarında tanınırlığı yüksek olan ama markasının parasal değerini hiç ölçmemiş işletmeler</li>
              <li>✔ Markasını başka bir işletmeye lisanslamak veya franchise vermek isteyen şirketler</li>
              <li>✔ Marka değerini kredi teminatı olarak göstermek isteyen işletmeler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              📈 Satış, Yatırım ve Büyüme Hazırlığındaki Şirketler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Şirket satışı, ortaklık girişi veya yatırımcı görüşmesi öncesinde marka kalemini ayrıca göstermek isteyen kurucular</li>
              <li>✔ Grup içi marka devri veya yurt dışı iştirak royalti ödemesi planlayan holding yapıları</li>
              <li>✔ Halka arz hazırlığında maddi olmayan duran varlıklarını somutlaştırmak isteyen şirketler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Süreç Nasıl İşler?
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Amaç Tanımı</h3>
            <p className="mt-2 text-sm text-gray-600">Değerlemenin satış, lisanslama, teminat veya vergi amaçlı olup olmadığının netleştirilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Hukuki İnceleme</h3>
            <p className="mt-2 text-sm text-gray-600">Tescil kapsamının, sınıfların ve varsa hukuki uyuşmazlıkların gözden geçirilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">Finansal Veri Toplama</h3>
            <p className="mt-2 text-sm text-gray-600">Markayla ilişkili ciro, kâr marjı ve büyüme projeksiyonlarının analiz edilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">Yöntem Seçimi ve Hesaplama</h3>
            <p className="mt-2 text-sm text-gray-600">Amaca uygun yöntemin (genellikle royalty relief) seçilip diğer yaklaşımlarla çapraz kontrol edilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">5️⃣</div>
            <h3 className="text-base font-bold">Raporlama</h3>
            <p className="mt-2 text-sm text-gray-600">ISO 10668&apos;e uygun, üç analizi de içeren nihai raporun hazırlanması</p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Marka değerlemesi taleplerinde en sık gözden kaçan nokta,
            hukuki ve finansal analizin ayrı ayrı değil bir arada
            değerlendirilmesi gerektiğidir. Ciro açısından güçlü görünen
            ama tescil kapsamı dar veya üzerinde itiraz süreci olan bir
            marka, finansal projeksiyonu ne kadar iyimser olursa olsun
            düşük bir değerleme sonucuyla karşılaşır. Bu yüzden marka
            değerlemesi öncesinde tescil durumunun netleştirilmesi,
            sürecin başında atlanmaması gereken bir adımdır.
          </p>
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
              <a
                href="https://www.iso.org/standard/46032.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                ISO 10668:2010 - Brand Valuation, Requirements for Monetary Brand Valuation - ISO.org
              </a>
            </li>
            <li>
              <a
                href="https://www.kgk.gov.tr/Portalv2Uploads/files/DynamicContentFiles/T%C3%BCrkiye%20Muhasebe%20Standartlar%C4%B1/TMSTFRS2018Seti/TMS/TMS_38_2018.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                TMS 38 - Maddi Olmayan Duran Varlıklar - Kamu Gözetimi Kurumu (KGK)
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
            <li>
              <a
                href="https://www.mevzuat.gov.tr/File/GeneratePdf?mevzuatNo=11724&mevzuatTur=Teblig&mevzuatTertip=5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Transfer Fiyatlandırması Yoluyla Örtülü Kazanç Dağıtımı Hakkında Genel Tebliğ (Seri No: 1) - Gelir İdaresi Başkanlığı
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
              Marka değerlemesi ile şirket değerlemesi aynı raporda mı yapılır?
            </h3>
            <p className="leading-8 text-gray-700">
              Bazen evet, bazen hayır. Bir M&A işleminde şirket
              değerlemesi yapılırken markanın payı ayrı bir kalem olarak
              aynı sürecin içinde raporlanabilir. Ancak marka
              lisanslaması, franchise veya kredi teminatı gibi
              durumlarda, şirketin tamamı değil yalnızca markası
              değerlendirildiği için bağımsız bir marka değerleme raporu
              yeterlidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Markam tescilli değilse yine de değerlemesi yapılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Teknik olarak yapılabilir, ancak ISO 10668&apos;in şart
              koştuğu hukuki analiz zayıf çıkacağı için değerleme sonucu
              önemli ölçüde risk indirimiyle raporlanır. Tescilsiz bir
              marka, başkası tarafından kullanılmaya veya tescillenmeye
              açık olduğu için değerleme açısından güvenilir bir zemin
              sunmaz; öncelikle tescil sürecinin tamamlanması önerilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kendi yarattığım markamı neden bilançoma yazamıyorum?
            </h3>
            <p className="leading-8 text-gray-700">
              TMS 38 gereği, işletme içinde zaman içinde yaratılan
              markalar için harcanan pazarlama ve tanıtım giderleri,
              işletmenin genel faaliyet maliyetinden güvenilir şekilde
              ayrıştırılamadığı için maddi olmayan duran varlık olarak
              muhasebeleştirilemez. Marka değeri bilançoya ancak satın
              alma veya işletme birleşmesi yoluyla edinildiğinde
              girebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Royalty relief yöntemi tam olarak nasıl çalışır?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu yöntem, markanızı kullanmasaydınız ve onu üçüncü bir
              taraftan lisanslamak zorunda kalsaydınız ödeyeceğiniz
              varsayımsal royalti bedelini hesaplar. Markayla ilişkili
              gelecekteki ciroya sektör emsallerine uygun bir royalti
              oranı uygulanır, bu tutarların bugünkü değerine indirgenmesi
              markanın parasal değerini verir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Marka değerlemesi ne kadar sürede tamamlanır?
            </h3>
            <p className="leading-8 text-gray-700">
              Süre; markanın tescil kapsamının netliğine, finansal
              verilerin hazır olup olmamasına ve değerlemenin amacına
              (basit bir raporlama mı, dava veya M&A gibi daha kapsamlı
              bir süreç mi) göre değişir. Veriler eksiksiz sağlandığında
              süreç genellikle birkaç haftalık bir çalışmayla
              tamamlanabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Küçük bir işletme için marka değerlemesi yaptırmak mantıklı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Eğer markanızı lisanslamayı, franchise vermeyi, satmayı
              veya yakın gelecekte bir yatırımcıyla görüşmeyi
              planlıyorsanız evet, mantıklıdır. Somut bir işlem
              beklenmiyorsa, önceliği önce marka tescilini
              tamamlamaya ve markanın tanınırlığını büyütmeye vermek,
              değerlemeyi de o zaman daha anlamlı bir rakamla
              sonuçlandırır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🚀 Markanızın Gerçek Değerini Birlikte Ortaya Çıkaralım
          </h3>
          <p className="leading-8 text-gray-700">
            Marka lisanslama, franchise, şirket satışı veya kredi teminatı
            gibi somut bir ihtiyacınız varsa, markanızın ISO 10668 çerçevesine
            uygun, hukuki ve finansal analizi bir arada değerlendiren bir
            değerleme çalışmasına ihtiyacınız var demektir.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirket Değerleme ve Stratejik Danışmanlık kapsamında
              markanızın değerlemesini birlikte planlamamız için bizimle
              iletişime geçin.
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
          Marka değerlemesi, şirket değerlemesinin yerini alan değil,
          onu tamamlayan ayrı bir çalışma. Şirketinizin tüm varlıklarını
          kapsayan geniş resmi şirket değerlemesi verirken, markanızın
          isim, itibar ve müşteri sadakatinden doğan parasal karşılığını
          ise ISO 10668 çerçevesinde yapılan bir marka değerlemesi
          ortaya koyar. Özellikle bilançoda hiç görünmeyen, kendi içinde
          büyüttüğünüz bir markanın gerçek değerini somutlaştırmak
          istiyorsanız, bu ayrı analiz kritik bir boşluğu dolduruyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirket
          değerlemesinden marka değerlemesine, due diligence sürecinden
          marka tescili takibine kadar maddi ve maddi olmayan
          varlıklarınızın değerini doğru ortaya koymak için tek noktadan
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
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ&apos;ler İçin Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">DUE DILIGENCE • M&A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Due Diligence Nedir? Şirket Satın Alma ve Birleşme Öncesi Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">MARKA VE PATENT • FİKRİ MÜLKİYET • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Marka Tescili ve Patent Başvurusu: KOBİ&apos;ler İçin Neden Kritik?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
