import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Makine Yatırımında KOSGEB mi Yatırım Teşvik Belgesi mi Avantajlı? | Koray Akdağ",
  description:
    "Makine/ekipman yatırımı planlayan bir işletme için KOSGEB Kapasite Geliştirme, KOSGEB Girişimci Destek ve Yatırım Teşvik Belgesi arasındaki fark. Yatırım tutarına göre karar matrisi, destek mekanizması karşılaştırması ve 2026 güncel rehber.",
  keywords: [
    "kosgeb mi yatırım teşvik belgesi mi",
    "makine ekipman yatırımı devlet desteği",
    "kosgeb kapasite geliştirme yatırım teşvik belgesi farkı",
    "hangi destek daha avantajlı makine yatırımı",
    "yatırım teşvik belgesi kosgeb karşılaştırma",
    "kosgeb kredi limiti asgari yatırım tutarı",
    "9903 sayılı karar kosgeb farkı",
  ],
  alternates: {
    canonical: "/blog/makine-ekipman-yatirimi-kosgeb-mi-yatirim-tesvik-belgesi-mi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Makine/Ekipman Yatırımı Yapacağım: KOSGEB mi Yatırım Teşvik Belgesi mi Daha Avantajlı?"
      description="Yeni bir üretim hattı, CNC tezgahı veya ekipman yatırımı planlayan işletme sahiplerinin en çok sorduğu karar sorusu. KOSGEB'in kredi + faiz desteği modeli ile Yatırım Teşvik Belgesi'nin KDV/gümrük/vergi avantajı arasındaki fark, yatırım tutarına göre karar matrisi ve 2026 güncel rehber."
      category="KOSGEB • YATIRIM TEŞVİK BELGESİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="makine-ekipman-yatirimi-kosgeb-mi-yatirim-tesvik-belgesi-mi"
      coverImage="https://images.unsplash.com/photo-1585201731775-0597e1be4bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Yatırımınız İçin Hangi Destek Mekanizması Uygun, Birlikte Netleştirelim"
      ctaText="Yatırım tutarınızı, sektörünüzü ve yatırım yerinizi değerlendirerek KOSGEB mi Yatırım Teşvik Belgesi mi (ya da ikisinin ayrı harcama kalemlerinde birlikte kullanımı mı) sizin için daha avantajlı, birlikte netleştirelim ve başvuru sürecini baştan sona yönetelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Yeni bir CNC tezgahı, üretim hattı veya ithal bir ekipman almayı
        planlayan hemen her işletme sahibi aynı noktada duraksıyor: KOSGEB mi
        başvurmalı, yoksa Yatırım Teşvik Belgesi mi almalı? İkisi de devlet
        destekli birer yol ama farklı mantıkla çalışıyor, farklı yatırım
        ölçeklerine hitap ediyor ve farklı avantajlar sunuyor. Yanlış seçim
        sadece zaman kaybettirmez, bazı durumlarda işletmenin daha uygun bir
        destekten yararlanma şansını da kapatır. Bu yazıda iki sistemi
        yatırım tutarınıza göre nasıl karşılaştıracağınızı adım adım
        anlatıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Asıl belirleyici <strong>yatırım tutarınızdır.</strong> Yatırım
            Teşvik Belgesi&apos;nin Hedef Yatırımlar Teşvik Sistemi&apos;nde
            bölgeye göre <strong>7.500.000-15.100.000 TL</strong> arası
            asgari sabit yatırım tutarı şartı var (2026); bu tutarın altındaki
            yatırımlar için KOSGEB genelde çok daha erişilebilir.
          </li>
          <li>
            ✔ KOSGEB Kapasite Geliştirme Destek Programı{" "}
            <strong>geri ödemeli kredi + faiz/kâr payı desteğidir</strong>{" "}
            (20-30 milyon TL kredi limiti, 20 puana varan geri ödemesiz faiz
            desteği); hibe değildir, anapara işletme tarafından geri ödenir.
          </li>
          <li>
            ✔ KOSGEB Girişimci Destek Programı&apos;ndaki makine-teçhizat
            desteği (100.000-300.000 TL, %75 oran) gerçek anlamda{" "}
            <strong>geri ödemesizdir</strong> ama yeni kurulan işletmelere
            özeldir ve tutar küçüktür.
          </li>
          <li>
            ✔ Yatırım Teşvik Belgesi nakit ödeme yapmaz;{" "}
            <strong>KDV istisnası, gümrük vergisi muafiyeti, kurumlar
            vergisi indirimi ve bölgeye göre SGK/faiz desteği</strong> sağlar.
            İthal makine ağırlıklı yatırımlarda bu avantajın parasal
            karşılığı hızla büyür.
          </li>
          <li>
            ✔ <strong>Aynı harcama kalemi</strong> (örneğin aynı CNC tezgahı)
            hem KOSGEB&apos;e hem Yatırım Teşvik Belgesi kapsamına
            sunulamaz, mükerrer destek yasağı var.
          </li>
          <li>
            ✔ Kesin karar; yatırım tutarınız, ithal/yerli makine oranınız,
            sektörünüz ve yatırım yeriniz netleşmeden verilemez, mutlaka
            başvuru öncesi karşılaştırmalı değerlendirme yapılmalıdır.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#ne-saglar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. KOSGEB ve Yatırım Teşvik Belgesi Kısaca Ne Sağlar?
          </Link>
          <Link href="#temel-fark" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Temel Fark: Destek Mekanizması ve Ölçek
          </Link>
          <Link href="#karar-matrisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Karar Matrisi: Yatırım Tutarınıza Göre Hangisi?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Karıştırmayın: KOSGEB = Hibe Değildir
          </Link>
          <Link href="#birlikte-kullanim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. İkisini Aynı Yatırımda Birlikte Kullanabilir miyim?
          </Link>
          <Link href="#ornek-senaryo" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Örnek Senaryo
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Başvuru Süreci ve Süre Karşılaştırması
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
        </div>
      </div>

      {/* 1. NE SAĞLAR */}
      <section id="ne-saglar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. KOSGEB ve Yatırım Teşvik Belgesi Kısaca Ne Sağlar?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İki sistem de makine ve ekipman yatırımını desteklemek için var
          ama araçları tamamen farklı. Karşılaştırmaya geçmeden önce
          ikisinin ne olduğunu netleştirmek gerekiyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          <strong>KOSGEB</strong> tarafında makine/ekipman yatırımıyla en
          doğrudan bağlantılı iki program öne çıkıyor:{" "}
          <strong>Kapasite Geliştirme Destek Programı</strong>, büyümekte
          olan KOBİ&apos;lerin ölçek büyütme, dijital dönüşüm ve tedarikçi
          geliştirme yatırımlarını 20-30 milyon TL&apos;ye kadar kredi ve
          buna bağlı faiz/kâr payı desteğiyle finanse ediyor.{" "}
          <strong>Girişimci Destek Programı</strong> ise henüz kurulmuş veya
          yeni kurulacak işletmelere, kuruluşundan itibaren belirli bir süre
          içinde alınan makine-teçhizat-yazılım için 100.000-300.000 TL
          aralığında ve %75 oranında geri ödemesiz destek sağlıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          <strong>Yatırım Teşvik Belgesi</strong> ise 2025&apos;te
          yürürlüğe giren 9903 sayılı Cumhurbaşkanı Kararı ile şekillenen
          yeni teşvik sisteminin belgesidir. Hiçbir aşamada nakit ödeme
          yapmaz; bunun yerine yatırım kapsamındaki makine ve teçhizat için{" "}
          <strong>KDV istisnası, ithal makinelerde gümrük vergisi
          muafiyeti, kurumlar vergisinde indirim ve yatırımın bulunduğu
          bölgeye göre SGK işveren primi desteği/faiz desteği</strong>{" "}
          gibi unsurlar sunar. KOBİ&apos;lerin en çok başvurduğu bölüm,
          yatırımın yapıldığı ilin teşvik bölgesine göre şekillenen{" "}
          <strong>Hedef Yatırımlar Teşvik Sistemi</strong>&apos;dir.
        </p>
      </section>

      {/* 2. TEMEL FARK */}
      <section id="temel-fark" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Temel Fark: Destek Mekanizması ve Ölçek
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Aşağıdaki tablo, makine/ekipman yatırımı açısından en sık
          karşılaştırılan iki mekanizmayı yan yana koyuyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Kriter</th>
                <th className="p-4">KOSGEB Kapasite Geliştirme</th>
                <th className="p-4">Yatırım Teşvik Belgesi (Hedef Yatırımlar)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Destek türü</td>
                <td className="p-4">Geri ödemeli kredi + faiz/kâr payı desteği</td>
                <td className="p-4">Nakit ödeme yok; vergi/gümrük/SGK avantajı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Üst limit / eşik</td>
                <td className="p-4">20-30 milyon TL kredi limiti (2026)</td>
                <td className="p-4">Asgari 7,5-15,1 milyon TL yatırım şartı (2026)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Kimler başvurabilir</td>
                <td className="p-4">KOBİ ölçeğinde, programın ilgili şartlarını taşıyan işletmeler</td>
                <td className="p-4">KOBİ ve büyük ölçekli işletmeler, sektöre göre değişir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Coğrafi etki</td>
                <td className="p-4">Program şartlarına göre genelde sabit</td>
                <td className="p-4">Yatırım yerinin teşvik bölgesine (1-6) göre değişir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Başvuru mercii</td>
                <td className="p-4">KOSGEB Bilgi Sistemi (KBS)</td>
                <td className="p-4">E-TUYS (Sanayi ve Teknoloji Bakanlığı)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">İthal makine avantajı</td>
                <td className="p-4">Yok</td>
                <td className="p-4">Gümrük vergisi muafiyeti doğrudan uygulanır</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Not: Yeni kurulan işletmeler için KOSGEB Girişimci Destek
          Programı&apos;nın makine-teçhizat desteği (100.000-300.000 TL,
          geri ödemesiz) ayrı bir kategoridir ve genelde çok daha küçük
          ölçekli ilk yatırımlar için uygundur.
        </p>
      </section>

      {/* 3. KARAR MATRİSİ */}
      <section id="karar-matrisi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Karar Matrisi: Yatırım Tutarınıza Göre Hangisi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tek bir doğru cevap yok ama yatırım tutarınız, sektörünüz ve
          ithal/yerli makine oranınız netse aşağıdaki matris size güçlü bir
          ilk yön verir:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl">🔧</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              0 - 2 Milyon TL: Girişimci Destek
            </h3>
            <p className="text-gray-700">
              Yeni kurulmuş veya kurulacak bir işletmeyseniz, bu ölçekte
              KOSGEB Girişimci Destek Programı&apos;nın geri ödemesiz
              makine-teçhizat desteği genelde en avantajlı seçenektir.
              Yatırım Teşvik Belgesi bu tutarda asgari şartı karşılamaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl">📈</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              2 - 7,5 Milyon TL: KOSGEB Kapasite Geliştirme
            </h3>
            <p className="text-gray-700">
              Yatırım Teşvik Belgesi&apos;nin en düşük bölge asgarisinin
              (7,5 milyon TL) altında kalan bu aralıkta, KOSGEB&apos;in
              kredi + faiz desteği modeli genelde tek gerçekçi devlet
              destekli seçenektir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl">⚖️</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              7,5 - 20 Milyon TL: İkisi de Değerlendirilmeli
            </h3>
            <p className="text-gray-700">
              Yatırım yerinize göre asgari şart karşılanıyorsa hem KOSGEB
              hem Yatırım Teşvik Belgesi teorik olarak mümkün olabilir.
              Karar, ithal makine oranınıza ve KOSGEB kredi limitinin
              yatırımınızı ne kadar karşıladığına bağlıdır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl">🌍</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              20 Milyon TL Üzeri veya Ağırlıklı İthal Makine: YTB
            </h3>
            <p className="text-gray-700">
              Bu ölçekte KOSGEB&apos;in kredi limiti yatırımın küçük bir
              kısmını karşılar. İthal makine oranı yüksekse gümrük vergisi
              muafiyetinin ve KDV istisnasının parasal etkisi genelde
              KOSGEB&apos;in faiz avantajından daha büyük olur.
            </p>
          </div>
        </div>
      </section>

      {/* 4. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Karıştırmayın: &quot;KOSGEB Desteği = Hibe&quot; Yaygın Bir Yanılgıdır
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            İşletme sahipleri sıklıkla &quot;KOSGEB&apos;e başvurayım,
            devlet parayı hibe olarak verir&quot; diye düşünüyor. Oysa bu
            doğru değil ve iki KOSGEB programı arasında da ciddi bir fark
            var:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>
              <strong>KOSGEB Kapasite Geliştirme Destek Programı</strong>{" "}
              geri ödemeli bir <strong>kredi</strong>dir. KOSGEB yalnızca
              kredinin faiz veya kâr payı giderinin belirli bir puanlık
              (2026&apos;da 20 puana varan) kısmını karşılar; kredinin
              anaparası işletme tarafından bankaya geri ödenir.
            </li>
            <li>
              <strong>KOSGEB Girişimci Destek Programı</strong>&apos;ndaki
              makine-teçhizat-yazılım desteği ise gerçekten{" "}
              <strong>geri ödemesizdir</strong> (hibedir), ama yalnızca yeni
              kurulan işletmelere özeldir ve tutarı sınırlıdır.
            </li>
            <li>
              <strong>Yatırım Teşvik Belgesi</strong> ise hiçbir zaman nakit
              ödeme yapmaz; sağladığı fayda vergi, gümrük ve prim
              yükünüzdeki azalmadır, banka hesabınıza para yatmaz.
            </li>
          </ul>
          <p className="mt-4 leading-8 text-gray-700">
            Bu üç mekanizmayı birbirine karıştırmak, yanlış bütçe
            planlamasına ve yatırım kararınızı yanlış varsayımlar üzerine
            kurmanıza yol açabilir.
          </p>
        </div>
      </section>

      {/* 5. BİRLİKTE KULLANIM */}
      <section id="birlikte-kullanim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. İkisini Aynı Yatırımda Birlikte Kullanabilir miyim?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu, en çok karıştırılan konulardan biri. Kısa cevap: hayır, ama
          nüans önemli.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Güncel KOSGEB düzenlemesi, yatırım teşvik kararları (2012/3305
          veya 2025/9903) kapsamında desteklenen bir{" "}
          <strong>harcama kaleminin</strong> KOSGEB&apos;e sunulamayacağını,
          KOSGEB&apos;den desteklenen bir harcamanın da yatırım teşvik
          kapsamına sunulamayacağını açıkça düzenliyor. Yani aynı CNC
          tezgahının faturası hem KOSGEB&apos;e hem Yatırım Teşvik
          Belgesi&apos;ne aynı anda dayanak gösterilemez, bu mükerrer
          destek sayılır.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Ayrıca KOSGEB desteğine uygun olmanız, otomatik olarak Yatırım
          Teşvik Belgesi alabileceğiniz anlamına gelmez, tersi de geçerlidir;
          ikisinin uygunluk kriterleri birbirinden bağımsızdır ve ayrı ayrı
          değerlendirilir.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, &quot;mükerrer destek
            yasağı&quot;nın harcama kalemi bazında işlediğidir, tüm yatırım
            projesi bazında değil. Yani bir yatırım planının bir bölümü
            (örneğin bina/altyapı kısmı) Yatırım Teşvik Belgesi kapsamında
            değerlendirilirken, aynı projedeki tamamen ayrı ve örtüşmeyen
            başka bir harcama kalemi teorik olarak farklı bir destek
            mekanizmasına konu olabilir. Ancak bunun mümkün olup olmadığı
            her zaman yatırımın somut kurgusuna, her iki programın o anki
            uygulama esaslarına ve harcama kalemlerinin gerçekten
            örtüşmediğinin ispatlanabilir olmasına bağlıdır; bu ayrımı
            başvuru öncesinde netleştirmemek, sonradan geri tahsil riski
            doğurabilir.
          </p>
        </div>
      </section>

      {/* 6. ÖRNEK SENARYO */}
      <section id="ornek-senaryo" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Örnek Senaryo (Varsayımsal)
        </h2>
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Aşağıdaki senaryo tamamen varsayımsaldır, gerçek bir müşteri
          vakası değildir; sadece karar mantığını somutlaştırmak içindir.
        </p>
        <div className="rounded-2xl border bg-gray-50 p-8">
          <p className="mb-4 leading-8 text-gray-700">
            Örneğin Bursa&apos;da (1. bölge) faaliyet gösteren, plastik
            enjeksiyon parça üreten bir KOBİ, üretim kapasitesini artırmak
            için 9.000.000 TL&apos;lik bir yatırım planlasın. Bu tutarın
            5.500.000 TL&apos;si ithal bir enjeksiyon makinesine,
            3.500.000 TL&apos;si ise yerli tedarikten alınacak kalıp ve
            yardımcı ekipmana ayrılmış olsun.
          </p>
          <p className="mb-4 leading-8 text-gray-700">
            1. bölgede Hedef Yatırımlar Teşvik Sistemi&apos;nin asgari
            tutarı (15.100.000 TL) karşılanmadığı için bu işletme Yatırım
            Teşvik Belgesi&apos;ne bu yatırımla başvuramaz. Buna karşılık
            9.000.000 TL, KOSGEB Kapasite Geliştirme Destek Programı&apos;nın
            20-30 milyon TL&apos;lik kredi limitinin içinde kalıyor;
            işletme program şartlarını (Sanayi Sicil Belgesi, hızlı büyüyen
            işletme kriteri gibi) taşıyorsa kredi + faiz desteği modeliyle
            bu yatırımı finanse edebilir.
          </p>
          <p className="leading-8 text-gray-700">
            Aynı işletme birkaç yıl sonra 20.000.000 TL&apos;lik yeni bir
            hat yatırımına karar verirse, tutar 1. bölge asgarisini
            aştığından bu kez Yatırım Teşvik Belgesi de değerlendirmeye
            girer; ithal makine oranı yüksekse gümrük vergisi muafiyeti ve
            KDV istisnasının sağlayacağı tasarruf, KOSGEB kredisinin faiz
            avantajıyla karşılaştırılarak karar verilmelidir.
          </p>
        </div>
      </section>

      {/* 7. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Başvuru Süreci ve Süre Karşılaştırması
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          İki sistemin başvuru mantığı da farklı ilerliyor, bu da toplam
          süreyi ve gereken belge yükünü doğrudan etkiliyor.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              KOSGEB Kapasite Geliştirme
            </h3>
            <div className="space-y-4">
              <div className="rounded-xl border p-5">
                <span className="font-black text-orange-500">1.</span>{" "}
                KBS üzerinden ön kayıt ve KOBİ Bilgi Beyannamesi teyidi
              </div>
              <div className="rounded-xl border p-5">
                <span className="font-black text-orange-500">2.</span>{" "}
                Sanayi Sicil Belgesi ve gerekli belgelerin yüklenmesi
              </div>
              <div className="rounded-xl border p-5">
                <span className="font-black text-orange-500">3.</span>{" "}
                Kurul değerlendirmesi ve kredi teklifi onayı
              </div>
              <div className="rounded-xl border p-5">
                <span className="font-black text-orange-500">4.</span>{" "}
                Banka kredi kullandırımı, faiz desteği taksitlerle işler
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              Yatırım Teşvik Belgesi
            </h3>
            <div className="space-y-4">
              <div className="rounded-xl border p-5">
                <span className="font-black text-orange-500">1.</span>{" "}
                E-TUYS üzerinde firma ve yatırım bilgi formu oluşturma
              </div>
              <div className="rounded-xl border p-5">
                <span className="font-black text-orange-500">2.</span>{" "}
                Yatırımın bölge/sektör/asgari tutar uygunluğunun teyidi
              </div>
              <div className="rounded-xl border p-5">
                <span className="font-black text-orange-500">3.</span>{" "}
                Sanayi ve Teknoloji Bakanlığı değerlendirmesi ve belge onayı
              </div>
              <div className="rounded-xl border p-5">
                <span className="font-black text-orange-500">4.</span>{" "}
                Belge kapsamında makine ithalatı/alımı ve yıllık izleme
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Genel eğilim şu şekildedir: KOSGEB tarafında süreç görece daha
          standart bir belge setiyle ilerlerken, Yatırım Teşvik Belgesi
          başvurusu yatırımın kapsamına, makine listesine ve bölge/sektör
          uygunluğuna göre daha kapsamlı bir hazırlık gerektirir. Her iki
          süreçte de güncel süre ve belge listesi, başvuru döneminde
          kurumun kendi kılavuzundan teyit edilmelidir.
        </p>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yatırım tutarınızı ve ithal/yerli makine oranınızı
            netleştirmeden karar vermeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yatırım yerinizin hangi teşvik bölgesinde olduğunu ve o
            bölgenin asgari tutarını başvuru öncesi teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ KOSGEB desteğini hibe zannedip bütçenizi buna göre kurmayın,
            Kapasite Geliştirme&apos;de anapara geri ödenir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yatırıma fiilen başlamadan (harcama yapmadan) önce başvurunuzu
            tamamlayın, her iki sistemde de bu şart aranır
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Aynı harcama kalemini iki sisteme birden sunmayın, mükerrer
            destek riski geri tahsille sonuçlanabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Güncel kredi limiti, asgari tutar ve destek oranlarını her
            başvuru döneminde ilgili kurumun resmi kaynağından yeniden
            doğrulayın
          </div>
        </div>
      </section>

      {/* 9. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/9200/kapasite-gelistirme-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Kapasite Geliştirme Destek Programı
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Tüm Destek Programları
            </a>
          </li>
          <li>
            <a
              href="https://www.resmigazete.gov.tr/eskiler/2025/05/20250530-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              9903 Sayılı Cumhurbaşkanı Kararı - Resmî Gazete (30.05.2025)
            </a>
          </li>
          <li>
            <a
              href="https://etuys.sanayi.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              E-TUYS - Elektronik Teşvik Uygulama ve Yabancı Sermaye Bilgi Sistemi
            </a>
          </li>
          <li>
            <a
              href="https://www.sanayi.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Sanayi ve Teknoloji Bakanlığı
            </a>
          </li>
        </ul>
      </section>

      {/* 10. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yatırım tutarım Yatırım Teşvik Belgesi&apos;nin asgari şartını karşılamıyorsa hiç şansım yok mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Belgeyi bu yatırımla alamazsınız ama bu, devlet desteğinden
              tamamen mahrum kalacağınız anlamına gelmez. Bu tutar
              aralığında KOSGEB Kapasite Geliştirme veya (yeni kurulan bir
              işletmeyseniz) Girişimci Destek Programı genelde daha
              gerçekçi bir seçenektir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOSGEB kredisi ile bankadan alacağım normal krediden farkı nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Kredinin kendisi banka üzerinden kullandırılır ve anapara
              normal şekilde geri ödenir. KOSGEB&apos;in sağladığı fark,
              kredinin faiz veya kâr payı giderinin belirli bir puanlık
              kısmını sizin yerinize karşılamasıdır; bu da toplam finansman
              maliyetinizi düşürür.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yatırım Teşvik Belgesi almak için mutlaka büyük ölçekli bir şirket mi olmam gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, KOBİ&apos;ler de belge alabilir. Belirleyici olan
              şirket ölçeğinden çok, yatırımınızın bölgeye göre değişen
              asgari sabit yatırım tutarını karşılaması ve faaliyetinizin
              desteklenen sektörler listesinde yer almasıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Aynı makineyi hem KOSGEB&apos;e hem Yatırım Teşvik Belgesi&apos;ne başvururken gösterebilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Güncel düzenleme, yatırım teşvik kararları kapsamında
              desteklenen bir harcamanın KOSGEB&apos;e, KOSGEB&apos;den
              desteklenen bir harcamanın da yatırım teşvik kapsamına
              sunulamayacağını açıkça belirtiyor. Bu bir mükerrer destek
              sayılır ve tespit edilirse geri tahsil riski doğurur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Önce KOSGEB&apos;e başvurup sonra aynı işletme için Yatırım Teşvik Belgesi alabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Aynı işletme, farklı zamanlarda ve farklı yatırım
              projelerinde her iki destekten de yararlanabilir; kısıtlama
              işletme bazında değil, aynı harcama kaleminin tekrar
              desteklenmesi bazındadır. Ancak her başvurunun kendi uygunluk
              kriterlerini ayrı ayrı karşılaması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOSGEB Girişimci Destek Programı ile Kapasite Geliştirme Destek Programı&apos;nı aynı anda kullanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              İki program farklı işletme profillerine (yeni kuruluş ile
              büyümekte olan işletme) hitap eder ve şartları birbirinden
              bağımsız değerlendirilir. Hangi programa hangi aşamada uygun
              olduğunuzu, güncel uygulama esaslarına göre netleştirmek
              gerekir.
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
          KOSGEB ile Yatırım Teşvik Belgesi arasında &quot;hangisi daha
          iyi&quot; diye tek bir cevap yok, çünkü ikisi farklı sorulara
          cevap veriyor. KOSGEB, küçük ve orta ölçekli yatırımlarda finansman
          maliyetini düşüren bir kredi mekanizması; Yatırım Teşvik Belgesi
          ise belirli bir büyüklüğün üzerindeki yatırımlarda vergi, gümrük
          ve prim yükünü azaltan bir avantajlar paketi. Doğru karar, yatırım
          tutarınızı, ithal/yerli makine dağılımınızı ve yatırım yerinizin
          teşvik bölgesini netleştirdikten sonra ikisini yan yana koyarak
          verilebilir.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar ve Hizmetler
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/kosgeb-danismanlik"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • KOSGEB DANIŞMANLIĞI</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Danışmanlığı</h3>
          </Link>
          <Link
            href="/yatirim-tesvik-belgesi-danismanligi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • YATIRIM TEŞVİK BELGESİ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgesi Danışmanlığı</h3>
          </Link>
          <Link
            href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı 2026</h3>
          </Link>
          <Link
            href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YATIRIM TEŞVİKLERİ • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgesi Nedir? 2026 Rehberi</h3>
          </Link>
          <Link
            href="/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • NACE KODU • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">NACE Kodu Ürünle Uyuşmuyorsa KOSGEB Desteği Alınır mı?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
