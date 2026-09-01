import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Şirket Değerleme Nedir? Yöntemleri Nelerdir? | Koray Akdağ",
  description: "DCF, çarpan analizi ve net aktif değer yöntemleriyle şirket değerleme nasıl yapılır? Süreç adımları ve sık yapılan hatalarla rehber.",
  keywords: [
    "şirket değerleme nedir",
    "şirket değerleme yöntemleri",
    "DCF indirgenmiş nakit akışı",
    "çarpan analizi değerleme",
    "net aktif değer yöntemi",
    "KOBİ şirket değerleme",
    "şirket değerleme nasıl yapılır",
    "şirket değeri nasıl hesaplanır",
    "ortaklık ayrılığı değerleme",
    "yatırımcı değerleme raporu",
    "şirket satışı değerleme",
    "M&A değerleme",
    "şirket değerleme 2026",
  ],
  alternates: {
    canonical: "/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026",
    languages: {
      tr: "/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026",
      en: "/en/blog/company-valuation-turkey-methods-guide-2026",
    },
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ'ler İçin Neden Kritik?"
      description="Bir şirketin gerçek ekonomik değeri; ortaklık değişikliğinden satışa, yatırımcı görüşmesinden miras paylaşımına kadar birçok kritik kararın temelini oluşturur. DCF, çarpan analizi ve net aktif değer yöntemlerinin nasıl işlediği, KOBİ'lere özgü zorluklar, somut senaryolarla değerlemenin ne zaman gerekli olduğu ve profesyonel bir ekip tarafından yapılmasının neden önemli olduğuyla kapsamlı rehber."
      category="ŞİRKET DEĞERLEME • M&A • 2026"
      date="2026"
      readTime="14 Dakika"
      coverImage="https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            &quot;Şirketim ne kadar eder?&quot; sorusu, çoğu şirket sahibinin
            aklında yalnızca satış düşündüğünde değil; yeni bir ortak
            aldığında, bir ortağı şirketten ayrıldığında, yatırımcıyla masaya
            oturduğunda, banka kredisi görüşmesinde veya miras paylaşımında da
            karşısına çıkar. Bu yazıda şirket değerlemenin ne olduğunu, en
            çok kullanılan üç yöntemin (DCF, çarpan analizi, net aktif değer)
            nasıl işlediğini, KOBİ&apos;lerde değerlemeyi zorlaştıran
            noktaları, hangi somut durumlarda değerleme yaptırmanın gerekli
            olduğunu ve bunun neden profesyonel bir ekip tarafından
            yapılması gerektiğini anlatıyoruz.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Şirket değerleme tam olarak nedir, &quot;değer&quot; ile &quot;fiyat&quot; farkı nedir?</li>
            <li>✔ DCF, çarpan analizi ve net aktif değer yöntemleri hangi durumda kullanılır?</li>
            <li>✔ KOBİ&apos;lerde değerlemeyi zorlaştıran özel etkenler nelerdir?</li>
            <li>✔ Hangi somut durumlarda değerleme yaptırmak gerekir?</li>
            <li>✔ Değerleme yapılmadan alınan kararların riskleri nedir?</li>
            <li>✔ Değerleme neden profesyonel/bağımsız bir ekip tarafından yapılmalı?</li>
            <li>✔ Değerleme süreci adım adım nasıl işler, hangi belgeler gerekir?</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Şirket Değerleme Nedir, Temel Mantığı Nedir?
            </Link>
            <Link href="#yontemler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Başlıca Şirket Değerleme Yöntemleri
            </Link>
            <Link href="#kobi-zorluklari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. KOBİ&apos;ler İçin Değerlemenin Özel Zorlukları
            </Link>
            <Link href="#neden-yaptirmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Bir KOBİ Neden Şirket Değerleme Yaptırmalı?
            </Link>
            <Link href="#riskler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Değerleme Yapılmadan Alınan Kararların Riskleri
            </Link>
            <Link href="#neden-profesyonel" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Neden Profesyonel Bir Ekip Tarafından Yapılmalı?
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Değerleme Süreci: Adım Adım
            </Link>
            <Link href="#hatalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Sık Yapılan Hatalar
            </Link>
            <Link href="#ne-zaman" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Bir Şirket Ne Zaman Değerleme Yaptırmalı? (Özet)
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
            1. Şirket Değerleme Nedir, Temel Mantığı Nedir?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Şirket değerleme, bir işletmenin belirli bir tarih itibarıyla
            sahip olduğu ekonomik değerin; finansal performansı, varlıkları,
            borçları, büyüme potansiyeli, sektör konumu ve risk profili
            dikkate alınarak, kabul görmüş yöntemlerle sistematik biçimde
            hesaplanmasıdır. Değerleme, tek bir kesin rakam üretmekten çok
            &mdash; kullanılan yönteme, varsayımlara ve değerlemenin amacına
            göre değişebilen &mdash; <strong>makul bir değer aralığı</strong>{" "}
            ortaya koyar.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Burada kritik bir ayrımı netleştirmek gerekir: <strong>değer</strong>{" "}
            ile <strong>fiyat</strong> aynı şey değildir. Değerleme, şirketin
            finansal verilerine ve nesnel varsayımlara dayanan, metodolojik
            bir <em>değer</em> tahminidir. Fiyat ise bu değerin üzerine
            alıcı-satıcı arasındaki müzakere gücü, aciliyet, stratejik
            gerekçeler (ör. bir rakibi devralmak, belirli bir pazara giriş
            sağlamak) gibi öznel unsurların eklenmesiyle oluşan nihai işlem
            tutarıdır. Sağlam bir değerleme raporu, müzakerenin başlangıç
            noktasını nesnel bir zemine oturtur; taraflardan birinin
            duygusal veya iyimser bir rakamla masaya oturmasını engeller.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Değerleme Neyi Hesaba Katar?
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Geçmiş ve güncel finansal performans (ciro, kârlılık, nakit akışı)</li>
              <li>✔ Bilançodaki maddi ve maddi olmayan varlıklar, borç yükü</li>
              <li>✔ Gelecekteki büyüme potansiyeli ve sektörün genel görünümü</li>
              <li>✔ Şirkete özgü riskler (kurucuya bağımlılık, müşteri/tedarikçi yoğunlaşması)</li>
              <li>✔ Karşılaştırılabilir şirket ve işlem verileri (mevcutsa)</li>
            </ul>
          </div>
        </section>

        {/* 2. YÖNTEMLER */}
        <section id="yontemler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Başlıca Şirket Değerleme Yöntemleri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Uygulamada en yaygın kullanılan üç yaklaşım; gelir yaklaşımından
            <strong> İndirgenmiş Nakit Akışı (DCF)</strong>, pazar
            yaklaşımından <strong>çarpan/emsal şirket karşılaştırması</strong>{" "}
            ve maliyet yaklaşımından <strong>Net Aktif Değer (NAD)</strong>{" "}
            yöntemidir. Sağlam bir değerleme çalışması, tek bir yönteme
            değil; şirketin yapısına uygun birden fazla yöntemin bir arada
            kullanılıp sonuçların birbiriyle çapraz kontrol edilmesine
            dayanır.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💰 İndirgenmiş Nakit Akışı (DCF)
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            DCF, şirketin gelecekte üreteceği tahmini serbest nakit
            akışlarının, şirketin risk profiline uygun bir iskonto oranıyla
            (genellikle ağırlıklı ortalama sermaye maliyeti &mdash; WACC)
            bugünkü değere indirgenmesi mantığına dayanır. Bir tahmin
            dönemi (genellikle 5 yıl) için nakit akışları projekte edilir,
            buna bir de tahmin dönemi sonrası &quot;terminal değer&quot;
            eklenir. DCF, şirketin <strong>içsel değerini</strong> ve büyüme
            potansiyelini doğrudan yansıttığı için özellikle büyüyen,
            öngörülebilir nakit akışı üretebilen şirketlerde tercih edilir.
            Zayıf yanı, sonucun projeksiyon varsayımlarına (büyüme oranı,
            iskonto oranı) son derece duyarlı olmasıdır &mdash; KOBİ&apos;lerde
            geçmiş finansal verinin dalgalı olması bu varsayımları
            zorlaştırabilir.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            📊 Çarpan Analizi (Emsal Şirket Karşılaştırması)
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            Bu yöntemde şirketin değeri, aynı sektörde faaliyet gösteren
            karşılaştırılabilir şirketlerin piyasa çarpanları (FD/FAVÖK,
            FD/Satışlar, F/K gibi) esas alınarak hesaplanır. Yöntem, piyasa
            gerçekliğini doğrudan yansıttığı için hızlı ve anlaşılır bir
            referans noktası sunar. Ancak Türkiye&apos;de halka açık, gerçek
            anlamda karşılaştırılabilir (aynı ölçek, aynı iş modeli) emsal
            şirket bulmak &mdash; özellikle KOBİ ölçeğinde &mdash; genellikle
            zordur; bu nedenle çarpanlar dikkatli seçilmeli ve şirkete özgü
            farklılıklara göre düzeltilmelidir.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🏗️ Net Aktif Değer (NAD)
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            Net Aktif Değer, şirketin bilançosundaki varlıkların güncel
            (rayiç) değerinden toplam borçların düşülmesiyle hesaplanır.
            Bu yaklaşım, şirketin gelecekte üreteceği değeri değil,{" "}
            <strong>mevcut varlık tabanını</strong> esas alır. Gayrimenkul
            ağırlıklı şirketler, holdingler veya tasfiye/işi bırakma
            senaryosundaki şirketler için en uygun yöntemdir; ancak marka
            değeri, müşteri portföyü, know-how gibi maddi olmayan
            varlıkların ağırlıklı olduğu büyüme odaklı şirketlerde tek
            başına yetersiz kalır.
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-4">Yöntem</th>
                  <th className="p-4">Ne Zaman Uygun</th>
                  <th className="p-4">Avantajı</th>
                  <th className="p-4">Dezavantajı</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">DCF</td>
                  <td className="p-4">Büyüyen, öngörülebilir nakit akışlı şirketler</td>
                  <td className="p-4">İçsel değeri ve büyüme potansiyelini yansıtır</td>
                  <td className="p-4">Varsayımlara (büyüme, iskonto oranı) çok duyarlı</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Çarpan Analizi</td>
                  <td className="p-4">Karşılaştırılabilir emsal şirket/işlem verisi olan sektörler</td>
                  <td className="p-4">Piyasa gerçekliğini hızlı ve anlaşılır biçimde yansıtır</td>
                  <td className="p-4">KOBİ ölçeğinde gerçek emsal bulmak zor olabilir</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Net Aktif Değer</td>
                  <td className="p-4">Gayrimenkul/varlık ağırlıklı şirketler, tasfiye senaryosu</td>
                  <td className="p-4">Somut, denetlenebilir varlık verisine dayanır</td>
                  <td className="p-4">Büyüme potansiyelini ve gayri maddi varlıkları görmez</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Uygulamada tercih edilen yöntem veya yöntemlerin ağırlığı,
            değerlenen şirketin yapısına ve değerlemenin amacına göre
            değişir; bu nedenle deneyimli bir değerleme ekibi genellikle
            birden fazla yöntemi bir arada uygulayıp sonuçları
            karşılaştırır.
          </p>
        </section>

        {/* 3. KOBİ ZORLUKLARI */}
        <section id="kobi-zorluklari" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. KOBİ&apos;ler İçin Değerlemenin Özel Zorlukları
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Halka açık büyük şirketlerin değerlemesi görece standart bir
            işlemdir; çünkü piyasa verisi, denetlenmiş finansal tablolar ve
            çok sayıda emsal işlem mevcuttur. KOBİ&apos;lerde ise durum
            farklıdır ve değerleme sürecini teknik olarak zorlaştıran
            birkaç etken öne çıkar:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🏛️ Halka Açık Emsal Eksikliği</h4>
              <p className="text-sm leading-7 text-gray-700">
                Aynı ölçekte, aynı bölgede, aynı iş modeliyle faaliyet
                gösteren karşılaştırılabilir bir şirket bulmak
                KOBİ&apos;lerde çoğu zaman mümkün değildir; çarpanlar bu
                yüzden dikkatli seçilip düzeltilmelidir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📉 Finansal Kayıtların Düzensizliği</h4>
              <p className="text-sm leading-7 text-gray-700">
                Bağımsız denetimden geçmemiş mali tablolar, tek seferlik
                gelir/gider kalemleri veya şahıs harcamalarının şirket
                üzerinden yapılması, gerçek performansın görülmesini
                zorlaştırır.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">👤 Kurucuya/Ortağa Bağımlılık</h4>
              <p className="text-sm leading-7 text-gray-700">
                Satış ilişkilerinin, tedarikçi anlaşmalarının veya
                operasyonel bilginin tek bir kişide toplanması (&quot;key
                person risk&quot;), şirketin kurucudan bağımsız
                sürdürülebilirliğini sorgulanır hâle getirir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📝 Yazılı Süreç ve Sistem Eksikliği</h4>
              <p className="text-sm leading-7 text-gray-700">
                Kurumsallaşmamış şirketlerde bütçeleme, raporlama ve karar
                alma süreçlerinin yazılı olmaması, hem risk analizini hem
                de büyüme projeksiyonlarının güvenilirliğini zayıflatır.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <p className="leading-8 text-gray-700">
              Bu zorluklar, KOBİ değerlemesinin &quot;yapılamayacağı&quot;
              anlamına gelmez &mdash; aksine, deneyimli bir değerleme
              ekibinin finansal tabloları normalize etmesini (owner&apos;s
              add-back&apos;ler, tek seferlik kalemlerin ayıklanması), doğru
              düzeltilmiş çarpanlar seçmesini ve birden fazla yöntemi bir
              arada kullanmasını daha da kritik hâle getirir.
            </p>
          </div>
        </section>

        {/* 4. NEDEN YAPTIRMALI */}
        <section id="neden-yaptirmali" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Bir KOBİ Neden Şirket Değerleme Yaptırmalı?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirket değerleme, soyut bir finans egzersizi değil; somut,
            gündelik iş kararlarının temelini oluşturan bir araçtır.
            Aşağıdaki senaryolar (tamamı temsili örneklerdir, gerçek bir
            şirkete ait değildir) bu ihtiyacın pratikte nasıl ortaya
            çıktığını gösterir:
          </p>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">🤝 Ortaklık Girişi veya Çıkışı</h4>
              <p className="leading-8 text-gray-700">
                Temsili bir üretim şirketinde iki ortaktan biri şirketten
                ayrılmak istiyor. Kalan ortak, ayrılan ortağın payını
                &quot;kuruluş yıllarındaki değer&quot; üzerinden ödemek
                istese de, şirket o günden bu yana büyümüş; bağımsız bir
                değerleme, güncel gerçek değeri ortaya koyarak her iki
                tarafın da kabul edebileceği bir devir bedeli belirlenmesini
                sağlar.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">🏢 Şirket Satışı veya Birleşme</h4>
              <p className="leading-8 text-gray-700">
                Bir alıcıyla görüşmeye başlayan temsili bir aile şirketi,
                &quot;kaç yıllık kâr yapar&quot; gibi kabaca hesaplarla
                masaya oturursa, alıcının kendi danışmanlarının hazırladığı
                daha düşük bir teklifle karşılaşma riski yüksektir.
                Bağımsız değerleme raporu, satıcı tarafına da güçlü bir
                müzakere zemini kazandırır.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">💼 Yatırımcı veya Melek Yatırım Alma</h4>
              <p className="leading-8 text-gray-700">
                Büyüme sermayesi arayan temsili bir teknoloji şirketi,
                yatırımcıya verilecek pay oranını belirlemek için önce
                şirketin &quot;yatırım öncesi değerini&quot; (pre-money
                valuation) net biçimde ortaya koymak zorundadır; aksi hâlde
                ya aşırı pay dağıtır ya da yatırımcıyı ikna edemez.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">👨‍👩‍👧 Miras ve Veraset Paylaşımı</h4>
              <p className="leading-8 text-gray-700">
                Kurucusunu kaybeden temsili bir aile şirketinde, mirasçılar
                arasında hisse paylaşımı yapılırken şirketin değeri
                belirlenmezse, kardeşler arasındaki anlaşmazlıklar yıllarca
                sürebilir. Bağımsız bir değerleme raporu, paylaşımı
                duygusal değil nesnel bir zemine oturtur.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">🏦 Banka ve Kredi Süreçleri</h4>
              <p className="leading-8 text-gray-700">
                Kapasite artırımı için finansman arayan temsili bir imalat
                şirketi, bankaya veya finans kuruluşuna şirketin gerçek
                değerini ve borç ödeme kapasitesini gösteren bağımsız bir
                rapor sunduğunda, kredi görüşmesinde daha güçlü bir konumda
                yer alır.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">⚖️ Dava ve Anlaşmazlık Durumları</h4>
              <p className="leading-8 text-gray-700">
                Boşanma, icra veya ortaklar arası dava süreçlerinde
                mahkemeye sunulacak bağımsız bir değerleme raporu, tarafların
                sübjektif iddialarının ötesinde nesnel bir referans
                oluşturur.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">🧭 Stratejik Karar Alma</h4>
              <p className="leading-8 text-gray-700">
                Yeni bir iştirak kurmayı, bir bölümü elden çıkarmayı veya
                büyük bir yatırım yapmayı değerlendiren yönetim ekibi,
                mevcut şirket değerini bilmeden bu kararların gerçek
                etkisini ölçemez.
              </p>
            </div>
          </div>
        </section>

        {/* 5. RİSKLER */}
        <section id="riskler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Değerleme Yapılmadan Alınan Kararların Riskleri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Değerleme yapılmadan alınan kritik kararlar, kısa vadede zaman
            ve maliyetten tasarruf ediyormuş gibi görünse de, orta ve uzun
            vadede çok daha büyük bedeller doğurabilir:
          </p>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="space-y-4 text-gray-700">
              <li>❌ Ortaklık ayrılıklarında, tarafların kendi öznel rakamlarında ısrar etmesi süreci uzatır, ilişkiyi geriden yönetir ve çoğu zaman hukuki anlaşmazlığa dönüşür.</li>
              <li>❌ Şirket satışında düşük bir bedelle anlaşmak ya da tam tersi gerçekçi olmayan bir fiyat beklentisiyle uzun süre alıcı bulamamak, aynı sorunun iki farklı yüzüdür.</li>
              <li>❌ Yatırımcı görüşmelerinde dayanaksız bir değer telaffuz etmek, hem yatırımcının güvenini sarsar hem de görüşmenin daha ilk aşamada kesilmesine yol açabilir.</li>
              <li>❌ Miras veya boşanma gibi hassas süreçlerde nesnel bir referans olmadan yapılan paylaşımlar, aile içi güven ilişkisini uzun vadede zedeleyebilir.</li>
              <li>❌ Banka/kredi başvurularında sunulan yetersiz veya öznel finansal tablo, kredi maliyetini artırabilir veya başvurunun reddine yol açabilir.</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Not: Bu bölümde genel gözlemler paylaşılmıştır; her durumun
            sonucu şirkete, sektöre ve taraflara göre değişir. Kesin bir
            istatistik iddiası içermez.
          </p>
        </section>

        {/* 6. NEDEN PROFESYONEL */}
        <section id="neden-profesyonel" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Neden Profesyonel Bir Ekip Tarafından Yapılmalı?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirket sahiplerinin kendi başlarına yaptıkları &quot;kabaca&quot;
            değerlemeler &mdash; genellikle &quot;yıllık kârın X katı&quot;
            gibi basitleştirilmiş bir kural üzerinden yapılır &mdash;
            neredeyse her zaman gerçek değerden sapar. Bunun birkaç yapısal
            nedeni vardır:
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ⚠️ Kendi Başına Yapılan Değerlemenin Riskleri
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Kurucu/ortak, şirkete duygusal bağı nedeniyle değeri sistematik olarak yüksek tahmin eder.</li>
                <li>❌ Tek bir basit çarpan (&quot;kârın X katı&quot;) kullanılır; sektöre, büyüme potansiyeline ve risk profiline göre düzeltme yapılmaz.</li>
                <li>❌ Finansal tablolar normalize edilmez; tek seferlik giderler, şahsi harcamalar gerçek performansı gizler.</li>
                <li>❌ Sonuç raporu, karşı tarafın (yatırımcı, alıcı, ortak, mahkeme) gözünde bağımsızlık ve güvenilirlik taşımaz.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Bağımsız/Profesyonel Değerlemenin Sağladığı
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Objektiflik: değerleme ekibinin sonuçtan doğrudan çıkarı olmadığı için taraflar arasında güven oluşturur.</li>
                <li>✔ Metodolojik doğruluk: DCF&apos;te iskonto oranının doğru hesaplanması, çarpan analizinde doğru emsal seçimi gibi teknik derinlik gerektirir.</li>
                <li>✔ Müzakere gücü: nesnel bir rapor, ortaklık, satış veya yatırımcı görüşmesinde tarafın elini güçlendirir.</li>
                <li>✔ Sektörel analiz derinliği: sektöre özgü riskler, döngüsellik ve büyüme dinamikleri doğru şekilde modellenir.</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <p className="leading-8 text-gray-700">
              Özellikle ortaklık, satış veya yatırımcı görüşmesi gibi{" "}
              <strong>taraflar arası</strong> süreçlerde değerlemenin
              bağımsız bir ekip tarafından yapılmış olması, raporun her iki
              tarafça da &quot;taraflı değil&quot; kabul edilmesini sağlar
              &mdash; bu da müzakereyi kısaltır ve anlaşmazlık riskini
              azaltır. Koray Akdağ / Sistem Global Danışmanlık bünyesinde bu
              süreçlere; finansal analiz, sektörel değerlendirme ve
              metodolojik değerleme deneyimiyle eşlik ediyoruz.
            </p>
          </div>
        </section>

        {/* 7. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Değerleme Süreci: Adım Adım
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Bir şirket değerleme çalışması, tek bir hesaplamadan ibaret
            değildir; veri toplamadan raporlamaya kadar birden fazla
            aşamadan oluşan sistematik bir süreçtir:
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🗣️</div>
              <h3 className="text-xl font-bold">1. Ön Görüşme ve Amaç Belirleme</h3>
              <p className="mt-3 text-sm text-gray-600">
                Değerlemenin amacı (satış, ortaklık, yatırımcı, miras vb.)
                netleştirilir; bu, hangi yöntemlerin ağırlıklandırılacağını
                doğrudan etkiler.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📂</div>
              <h3 className="text-xl font-bold">2. Veri ve Belge Toplama</h3>
              <p className="mt-3 text-sm text-gray-600">
                Son 3-5 yıllık bilanço/gelir tablosu, mizanlar, sözleşmeler,
                varlık listesi, personel bilgileri ve iş planı talep edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏭</div>
              <h3 className="text-xl font-bold">3. Sektör ve Makro Analiz</h3>
              <p className="mt-3 text-sm text-gray-600">
                Sektörün büyüme dinamikleri, rekabet yapısı ve makroekonomik
                varsayımlar (enflasyon, kur, faiz) değerlendirilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧮</div>
              <h3 className="text-xl font-bold">4. Finansal Tabloların Normalize Edilmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Tek seferlik gelir/gider kalemleri, şahsi harcamalar ve
                piyasa dışı kira/ücret düzeltmeleri (owner&apos;s add-back)
                yapılır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">⚙️</div>
              <h3 className="text-xl font-bold">5. Yöntem Seçimi ve Uygulama</h3>
              <p className="mt-3 text-sm text-gray-600">
                Şirketin yapısına uygun yöntem(ler) &mdash; DCF, çarpan
                analizi, net aktif değer &mdash; seçilip uygulanır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔁</div>
              <h3 className="text-xl font-bold">6. Çapraz Kontrol ve Senaryo Analizi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Farklı yöntemlerin sonuçları karşılaştırılır; iyimser/baz/
                kötümser senaryolarla değer aralığı test edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm md:col-span-3">
              <div className="mb-4 text-5xl">📄</div>
              <h3 className="text-xl font-bold">7. Raporlama ve Sunum</h3>
              <p className="mt-3 text-sm text-gray-600">
                Kullanılan yöntemler, varsayımlar ve sonuç değer aralığı
                gerekçeleriyle birlikte yazılı bir rapora dönüştürülür;
                şirket yönetimine veya ilgili tarafa sunulur.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              📋 Genellikle Talep Edilen Belgeler
            </h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-700 marker:text-yellow-600">
              <li>Son 3-5 yıla ait bilanço, gelir tablosu ve mizanlar</li>
              <li>Güncel varlık ve borç listesi (gayrimenkul, makine-teçhizat, krediler)</li>
              <li>Ortaklık yapısı ve şirket ana sözleşmesi</li>
              <li>Önemli müşteri/tedarikçi sözleşmeleri</li>
              <li>Personel listesi ve organizasyon şeması</li>
              <li>Varsa bütçe/iş planı ve büyüme projeksiyonları</li>
            </ul>
          </div>
        </section>

        {/* 8. HATALAR */}
        <section id="hatalar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Sık Yapılan Hatalar
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Tek bir yönteme dayanarak sonuca gitmek</h4>
              <p className="leading-7 text-gray-700">
                Yalnızca DCF veya yalnızca bir kâr çarpanı kullanmak, tek bir
                varsayım setinin hatalarını doğrudan sonuca taşır. Sağlıklı
                bir değerleme, birden fazla yöntemi çapraz kontrol eder.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Finansal tabloları normalize etmemek</h4>
              <p className="leading-7 text-gray-700">
                Şahsi harcamaların şirket üzerinden geçmesi veya tek seferlik
                gelir/gider kalemlerinin ayıklanmaması, gerçek operasyonel
                kârlılığı gizler ve değeri yanlış yönde saptırır.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Duygusal fiyatlandırma</h4>
              <p className="leading-7 text-gray-700">
                Kurucunun şirkete verdiği emek ve zaman, finansal değeri
                otomatik olarak artırmaz; değerleme sürecinde bu ayrımın net
                biçimde yapılması gerekir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Yanlış veya uyumsuz emsal seçimi</h4>
              <p className="leading-7 text-gray-700">
                Farklı ölçekte, farklı coğrafyada veya farklı iş modelinde
                bir şirketin çarpanını doğrudan uygulamak, sonucu ciddi
                biçimde çarpıtabilir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Gerçekçi olmayan büyüme projeksiyonları</h4>
              <p className="leading-7 text-gray-700">
                DCF&apos;te geçmiş performansla uyumsuz, aşırı iyimser
                büyüme oranları kullanmak, değeri yapay biçimde şişirir ve
                raporun karşı taraf nezdindeki güvenilirliğini zedeler.
              </p>
            </div>
          </div>
        </section>

        {/* 9. NE ZAMAN ÖZET */}
        <section id="ne-zaman" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Bir Şirket Ne Zaman Değerleme Yaptırmalı? (Özet)
          </h2>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Bir ortak şirkete giriyor veya şirketten ayrılıyorsa</li>
              <li>✔ Şirketin tamamı veya bir kısmı satılacak ya da başka bir şirketle birleşilecekse</li>
              <li>✔ Yatırımcı, melek yatırımcı veya stratejik ortak görüşmesi yapılıyorsa</li>
              <li>✔ Miras, veraset veya boşanma sürecinde şirket hisseleri paylaşılacaksa</li>
              <li>✔ Banka/finans kuruluşuyla büyük bir kredi görüşmesi yapılacaksa</li>
              <li>✔ Ortaklar veya taraflar arasında dava/anlaşmazlık söz konusuysa</li>
              <li>✔ Şirket, kurumsallaşma sürecine gerçek bir başlangıç noktası (baseline) belirlemek istiyorsa</li>
              <li>✔ Büyük bir stratejik yatırım, bölünme veya iştirak kararı öncesinde</li>
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
                Şirket değerleme raporu kaç günde hazırlanır?
              </h3>
              <p className="leading-8 text-gray-700">
                Süre; şirketin büyüklüğüne, finansal kayıtların düzenine ve
                değerlemenin amacına göre değişir. Veri ve belgelerin eksiksiz
                sağlandığı orta ölçekli bir KOBİ için süreç genellikle
                birkaç haftayı bulur; karmaşık yapıya sahip veya birden
                fazla iştiraki olan şirketlerde bu süre uzayabilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                KOBİ&apos;ler için hangi değerleme yöntemi &quot;en doğru&quot; yöntemdir?
              </h3>
              <p className="leading-8 text-gray-700">
                Tek bir &quot;en doğru&quot; yöntem yoktur. Uygulamada,
                şirketin yapısına göre genellikle birden fazla yöntem bir
                arada kullanılır ve sonuçlar çapraz kontrol edilerek makul
                bir değer aralığına ulaşılır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Değerleme raporu hukuken bağlayıcı mıdır?
              </h3>
              <p className="leading-8 text-gray-700">
                Değerleme raporu, taraflar arasındaki müzakereye veya
                hukuki sürece nesnel bir referans sunar; ancak nihai fiyat
                veya karar, tarafların kendi aralarındaki anlaşmasına ya da
                (dava süreçlerinde) mahkemenin değerlendirmesine bağlıdır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Aynı şirket için farklı zamanlarda yapılan değerlemeler
                neden farklı sonuç verebilir?
              </h3>
              <p className="leading-8 text-gray-700">
                Değerleme; güncel finansal performansa, piyasa koşullarına,
                faiz oranlarına ve sektörün genel görünümüne dayanır. Bu
                girdiler zaman içinde değiştiği için, aynı şirketin farklı
                tarihlerdeki değeri de doğal olarak farklılaşır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Şirket sahibinin kendi hesapladığı değer neden genelde farklı çıkıyor?
              </h3>
              <p className="leading-8 text-gray-700">
                Şirket sahipleri genellikle tek bir basit çarpan kullanır ve
                şirkete duygusal bağları nedeniyle değeri yüksek tahmin
                etme eğilimindedir; ayrıca finansal tabloları normalize
                etmeden değerlendirdikleri için gerçek operasyonel
                kârlılığı net göremezler.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Değerleme sadece satış öncesinde mi gerekir?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Ortaklık değişikliği, yatırımcı görüşmesi, miras
                paylaşımı, kredi süreci, dava/anlaşmazlık ve stratejik karar
                alma gibi birçok farklı durumda da değerleme ihtiyacı
                doğar.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Şirketinizin Değerini Profesyonel Olarak Belirleyelim
            </h3>
            <p className="leading-8 text-gray-700">
              Ortaklık değişikliği, yatırımcı görüşmesi, birleşme-devralma
              veya miras ve vergi süreçleri öncesinde şirketinizin gerçek
              değerini bilmek, pazarlık gücünüzü ve karar kalitenizi
              doğrudan etkiler.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Şirketinizin değerleme sürecini birlikte değerlendirmek
                için bizimle iletişime geçin.
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
            Şirket değerleme, yalnızca satış anında değil; ortaklık
            değişikliğinden yatırımcı görüşmesine, miras paylaşımından
            kredi sürecine kadar birçok kritik kararın temelini oluşturan
            bir araçtır. DCF, çarpan analizi ve net aktif değer
            yöntemlerinin doğru seçilmesi ve uygulanması, özellikle halka
            açık emsal eksikliği ve düzensiz finansal kayıtlar gibi
            zorluklarla karşılaşan KOBİ&apos;lerde uzmanlık gerektiren bir
            iştir. Kendi başına yapılan &quot;kabaca&quot; bir hesaplama,
            çoğu zaman gerçek değerden sapar ve taraflar arasındaki
            müzakerede güven sorunu yaratır.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin değerini; ortaklık, satış, yatırımcı görüşmesi,
            miras paylaşımı ya da stratejik karar süreçlerinizde nesnel ve
            savunulabilir bir zemine oturtmak için Koray Akdağ / Sistem
            Global Danışmanlık olarak yanınızdayız. Finansal analizden
            yöntem seçimine, raporlamadan sürecin taraflar nezdinde
            savunulmasına kadar değerleme çalışmanızı uçtan uca birlikte
            yürütebiliriz.
          </p>
        </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/anonim-limited-sirket-asgari-sermaye-artirimi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKETLER HUKUKU • ASGARİ SERMAYE • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Anonim ve Limited Şirketlerde Asgari Sermaye Artırımı: 31 Aralık 2026 Son Tarih</h3>
        </Link>
        <Link
          href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ & FİNANSAL YÖNETİM • DANIŞMANLIK • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ'nin İhtiyacı?</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
