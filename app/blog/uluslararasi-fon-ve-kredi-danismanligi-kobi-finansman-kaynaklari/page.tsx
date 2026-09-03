import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOBİ'ler İçin Uluslararası Fon ve Kredi Kaynakları | Koray Akdağ",
  description:
    "Eximbank, EBRD, Dünya Bankası/IFC ve AB fonlarından KOBİ'lerin yararlanabileceği uluslararası finansman kaynakları, şartlar ve başvuru süreciyle 2026 rehberi.",
  keywords: [
    "uluslararası fon ve kredi danışmanlığı",
    "KOBİ finansman kaynakları",
    "Eximbank ihracat kredisi",
    "EBRD KOBİ kredisi Türkiye",
    "Dünya Bankası IFC KOBİ finansmanı",
    "Horizon Europe KOBİ desteği",
    "yatırım finansmanı danışmanlığı",
    "uluslararası kredi başvurusu",
    "2026 KOBİ kredi kaynakları",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Uluslararası Fon ve Kredi Danışmanlığı: KOBİ'ler İçin Finansman Kaynakları"
      description="Türk Eximbank, EBRD, Dünya Bankası/IFC ve AB fonlarından (Horizon Europe, Tek Pazar Programı) KOBİ'lerin somut olarak yararlanabileceği uluslararası finansman kaynakları; kimler başvurabilir, tutar ve şart aralıkları, başvuru süreci ve profesyonel danışmanlığın neden kritik olduğuyla 2026 güncel rehber."
      category="ULUSLARARASI FON • KREDİ DANIŞMANLIĞI • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="uluslararasi-fon-ve-kredi-danismanligi-kobi-finansman-kaynaklari"
      coverImage="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;deki KOBİ&apos;lerin finansman ihtiyacı deyince akla
          ilk gelen genellikle KOSGEB veya bankaların ticari kredileri
          oluyor. Oysa Türk Eximbank&apos;tan EBRD&apos;ye, Dünya
          Bankası/IFC&apos;den AB&apos;nin Ar-Ge ve rekabetçilik
          programlarına kadar uzanan geniş bir uluslararası finansman
          ekosistemi de büyüme, ihracat ve yatırım kararlarının
          finansmanında ciddi bir alternatif sunuyor. Bu kaynakların büyük
          kısmı doğrudan değil, aracı bankalar veya ulusal koordinasyon
          kurumları üzerinden işliyor; bu da doğru kaynağı bulmayı ve doğru
          formatta başvuru yapmayı kritik hâle getiriyor.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Türk Eximbank&apos;ın KOBİ&apos;lere yönelik ihracat kredileri</li>
          <li>✔ EBRD&apos;nin Türkiye&apos;deki aracı bankalar üzerinden sağladığı KOBİ kredi hatları</li>
          <li>✔ Dünya Bankası ve IFC&apos;nin KOBİ finansmanına yaklaşımı</li>
          <li>✔ AB&apos;nin Horizon Europe ve Tek Pazar Programı (COSME) kapsamındaki fırsatları</li>
          <li>✔ Hangi kaynağın kime, hangi şartlarla uygun olduğu (karşılaştırma tablosu)</li>
          <li>✔ Fizibilite raporu ve finansal projeksiyonun başvuru sürecindeki kritik rolü</li>
          <li>✔ Adım adım başvuru ve danışmanlık süreci</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Neden Uluslararası Fon Kaynakları Önemli?
          </Link>
          <Link href="#eximbank" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Türk Eximbank İhracat Kredileri
          </Link>
          <Link href="#ebrd" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. EBRD: Aracı Bankalar Üzerinden KOBİ Kredileri
          </Link>
          <Link href="#dunyabankasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Dünya Bankası ve IFC&apos;nin Rolü
          </Link>
          <Link href="#abfonlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. AB Fonları: Horizon Europe ve Tek Pazar Programı
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Karşılaştırma Tablosu
          </Link>
          <Link href="#danismanlik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Danışmanlık Neden Kritik? Fizibilite ve Finansal Projeksiyon
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Kimler Yararlanabilir, Genel Şartlar
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Başvuru ve Danışmanlık Süreci: Adım Adım
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDEN ÖNEMLİ */}
      <section id="neden" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Uluslararası Fon Kaynakları Önemli?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yatırım teşvik belgesi, KOSGEB ve TÜBİTAK destekleri Türkiye&apos;deki
          KOBİ&apos;lerin finansman araç kutusunun önemli bir parçası; ancak
          bu araçların hiçbiri her ihtiyacı karşılamıyor. Büyük ölçekli bir
          makine yatırımı, ihracat öncesi işletme sermayesi ihtiyacı, yeşil
          dönüşüm yatırımı ya da uluslararası ölçekte bir Ar-Ge projesi söz
          konusu olduğunda, Türk Eximbank, EBRD, Dünya Bankası/IFC ve
          AB&apos;nin çeşitli fon mekanizmaları devreye giriyor.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bu kaynakların ortak özelliği, çoğunlukla doğrudan şirkete değil,
          Türkiye&apos;deki bankalar veya ulusal koordinasyon kurumları (ör.
          KOSGEB, TÜBİTAK) üzerinden işlemesi. Bu da iki sonuç doğuruyor:
          birincisi, doğru kaynağı ve doğru aracı kurumu bulmak başlı başına
          bir uzmanlık gerektiriyor; ikincisi, her kurumun kendi finansal
          analiz, fizibilite ve raporlama formatı olduğu için başvuru
          dosyasının o kuruma göre hazırlanması onay ihtimalini doğrudan
          etkiliyor.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Kimler İçin Anlamlı?
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ İhracat yapan veya ihracata yönelik üretim yapan imalatçı KOBİ&apos;ler</li>
            <li>✔ Yeni bir yatırım veya kapasite artırımı planlayan üretim şirketleri</li>
            <li>✔ Kadın girişimciler ve kadın liderliğindeki işletmeler</li>
            <li>✔ Dijital dönüşüm veya yeşil dönüşüm yatırımı yapacak KOBİ&apos;ler</li>
            <li>✔ Uluslararası ölçekte Ar-Ge/inovasyon projesi yürüten teknoloji şirketleri</li>
          </ul>
        </div>
      </section>

      {/* 2. EXIMBANK */}
      <section id="eximbank" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Türk Eximbank İhracat Kredileri
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türk Eximbank, ihracatçı ve ihracata yönelik mal üreten imalatçı
          firmalara sevk öncesi (kısa vadeli) finansman sağlayan devlet
          bankası niteliğindeki tek kredi kuruluşu. KOBİ&apos;ler için en
          çok tercih edilen ürünler İhracata Hazırlık Kredisi ve KOBİ
          İhracata Hazırlık Kredisi.
        </p>
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🏦 Öne Çıkan Şartlar
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Kimler başvurabilir: ihracatçı, imalatçı-ihracatçı ve ihracata yönelik mal üreten imalatçı firmalar ile döviz kazandırıcı hizmet sağlayan firmalar</li>
            <li>✔ Vade: kullanım tarihinden itibaren azami 24 ay içinde fiili ihracat veya döviz kazandırıcı hizmet geliriyle kapatılması esası</li>
            <li>✔ Teminat: kesin banka teminat mektubu veya İhracat Kredi Sigortası A.Ş. (İGE) güvencesi/kefaleti</li>
            <li>✔ Kredi limiti: firmanın ihracat performansına, mali yapısına ve banka tahsis sürecine göre belirleniyor; net üst sınır ve o anki faiz/kâr payı oranları için Eximbank&apos;ın güncel faiz tablosundan teyit alınmalı</li>
          </ul>
        </div>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          2026 itibarıyla Eximbank&apos;ın TL kredilerinde faiz oranları
          krediye ve vadeye göre değişkenlik gösteriyor; döviz cinsi
          kredilerde ise LIBOR/EURIBOR referans oranına belirli bir marj
          eklenerek fiyatlama yapılıyor. Sürdürülebilirlik kriterlerini
          taşıyan &quot;yeşil&quot; ihracat kredilerinde standart ürünlere
          göre daha düşük oranlar uygulanabiliyor. Oranlar sık güncellendiği
          için başvuru öncesi mutlaka Eximbank&apos;ın resmî faiz ve kâr payı
          oranları sayfasından güncel tabloyu kontrol etmek gerekiyor.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          Başvuru, doğrudan Türk Eximbank şubelerine veya Eximbank&apos;ın
          aracılık anlaşması bulunduğu ticari bankalara yapılıyor; kredi
          talep formu, teminat/kefalet belgesi ve mali analiz için gerekli
          finansal tablolar talep edilen belgeler arasında.
        </p>
      </section>

      {/* 3. EBRD */}
      <section id="ebrd" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. EBRD: Aracı Bankalar Üzerinden KOBİ Kredileri
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Avrupa İmar ve Kalkınma Bankası (EBRD), Türkiye&apos;deki
          KOBİ&apos;lere doğrudan kredi vermek yerine, ortaklık kurduğu
          ticari bankalara kredi hatları açıyor; bu bankalar da kendi
          kredilendirme kriterleriyle son kullanıcı KOBİ&apos;lere ulaştırıyor.
          Bu nedenle bir KOBİ&apos;nin EBRD kaynaklı bir krediden yararlanması
          için EBRD&apos;ye değil, ilgili aracı bankaya başvurması gerekiyor.
        </p>
        <div className="space-y-6">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
              Women in Business Programı
            </h3>
            <p className="text-gray-700">
              EBRD&apos;nin 600 milyon euroluk çerçeve programı kapsamında,
              27 Mart 2026&apos;da bir Türk bankası üzerinden 50 milyon euro
              tutarında yeni bir kredi hattı açıldı; kaynağın en az %70&apos;i
              büyük şehirler dışındaki kadın liderliğindeki mikro, küçük ve
              orta ölçekli işletmelere, %35&apos;i ise yeni müşterilere
              yönlendiriliyor.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
              Dijital Dönüşüm Finansman Kolaylığı
            </h3>
            <p className="text-gray-700">
              İmalat sektöründeki KOBİ&apos;lerin dijital olgunluk
              değerlendirmesine dayalı yatırım kredisi kullanabildiği bu
              yapı, KOSGEB&apos;in EBRD iş birliğiyle yürüttüğü KOBİ Dijital
              Dönüşüm Destek Programı ile de doğrudan bağlantılı (bu program
              hakkında detaylı bilgi için ilgili yazımıza bakabilirsiniz).
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
              Yeşil Dönüşüm ve Enerji Verimliliği Kredi Hatları
            </h3>
            <p className="text-gray-700">
              EBRD&apos;nin enerji ve kaynak verimliliğini artırmaya yönelik
              kredi hatları da yıllar içinde çok sayıda aracı banka
              üzerinden yüzlerce milyon euroluk kaynağı Türkiye&apos;deki
              özel sektöre ulaştırdı; sürdürülebilirlik yatırımı planlayan
              KOBİ&apos;ler için bu kanal her zaman gündemde tutulmalı.
            </p>
          </div>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Hangi bankanın hangi tarihte hangi EBRD kredi hattına aracılık
          ettiği zamanla değişiyor; bu nedenle güncel kredi hatlarını takip
          etmek ve doğru bankayla temasa geçmek, sürecin ilk ve en kritik
          adımı.
        </p>
      </section>

      {/* 4. DÜNYA BANKASI / IFC */}
      <section id="dunyabankasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Dünya Bankası ve IFC&apos;nin Rolü
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Dünya Bankası Grubu içinde iki farklı kurum farklı işlevler
          görüyor. Dünya Bankası, kamu politikaları, kurumsal kapasite,
          garanti mekanizmaları ve kriz sonrası müdahale gibi alanlarda
          Türkiye devletiyle çalışıyor; örneğin 2023 depremlerinin ardından
          onaylanan 450 milyon dolarlık deprem sonrası MKOBİ destek projesi,
          kamu bankaları ve garanti kuruluşları üzerinden yaklaşık 40 bin
          mikro, küçük ve orta ölçekli işletmeye finansman ulaştırdı.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Uluslararası Finans Kurumu (IFC) ise Dünya Bankası Grubu&apos;nun
          özel sektör kanadı; doğrudan yatırım yapabildiği gibi Türkiye&apos;deki
          ticari bankalarla (ör. Garanti BBVA, Akbank) ortak kredi hatları
          da kuruyor. Kadın girişimcilere yönelik finansmanın büyütülmesi bu
          iş birliklerinin öne çıkan örneklerinden biri; bir bankada bu
          kapsamda sağlanan kaynak son yıllarda 285 milyon dolar seviyesine
          ulaştı.
        </p>
        <div className="my-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Pratikte Ne Anlama Geliyor?
          </h3>
          <p className="leading-8 text-gray-700">
            Bir KOBİ&apos;nin doğrudan Dünya Bankası&apos;na veya IFC&apos;ye
            başvurarak kredi alması genelde mümkün değil. Bu kaynaklara
            erişim, büyük ölçüde çalıştığınız veya çalışmayı planladığınız
            ticari bankanın hangi uluslararası fon hatlarına aracılık
            ettiğini bilmekten ve bankanın kredi komitesine güçlü bir
            finansal projeksiyonla gitmekten geçiyor.
          </p>
        </div>
      </section>

      {/* 5. AB FONLARI */}
      <section id="abfonlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. AB Fonları: Horizon Europe ve Tek Pazar Programı
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türkiye, Avrupa Birliği&apos;nin 2021-2027 dönemi çerçeve
          programlarına tam ortak (associate) ülke statüsüyle katılıyor. Bu
          katılım KOBİ&apos;ler için iki ana kapıyı aralıyor.
        </p>
        <div className="space-y-6">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
              Horizon Europe (Ufuk Avrupa)
            </h3>
            <p className="text-gray-700">
              Ar-Ge ve inovasyon odaklı KOBİ&apos;ler, program kapsamındaki
              belirli alt çağrılara tek başına ya da konsorsiyum hâlinde
              başvurabiliyor; bazı alt programlar hibe ile öz sermaye
              yatırımını bir arada sunan &quot;karma finansman&quot; modeli
              içeriyor. Türkiye&apos;de programın ulusal koordinasyonunu ve
              ulusal irtibat noktası (National Contact Point) fonksiyonunu
              TÜBİTAK yürütüyor; hangi çağrının hangi sektöre açık olduğu ve
              güncel bütçe/oranlar için TÜBİTAK&apos;ın Horizon Europe sayfası
              birincil kaynak.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
              Tek Pazar Programı (COSME Bileşeni)
            </h3>
            <p className="text-gray-700">
              Türkiye, AB&apos;nin Tek Pazar Programı içindeki COSME
              bileşenine 2023 yılında imzalanan anlaşmayla katıldı;
              ulusal koordinasyonu KOSGEB yürütüyor. Bu program KOBİ&apos;lere
              doğrudan kredi vermekten çok, Enterprise Europe Network (EEN)
              üzerinden pazar araştırması, iş ortağı bulma, eğitim ve
              rekabetçilik desteği sağlıyor. Programın Türkiye&apos;deki
              teknik destek projesi Nisan 2026&apos;da tamamlandı; Türkiye&apos;nin
              Tek Pazar Programı çerçevesindeki katılımı ve Avrupa KOBİ
              Haftası gibi etkinlikler KOSGEB koordinasyonunda sürüyor.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
              Eurostars ve İkili/Çoklu Ar-Ge İş Birliği Programları
            </h3>
            <p className="text-gray-700">
              Yurt dışındaki bir şirketle ortak Ar-Ge projesi yürütmek
              isteyen teknoloji odaklı KOBİ&apos;ler için TÜBİTAK&apos;ın
              yürüttüğü uluslararası ikili/çoklu Ar-Ge iş birliği
              programları da değerlendirilmeli; bu programların güncel
              çağrı takvimi TÜBİTAK&apos;ın uluslararası destek programları
              sayfasından takip edilebilir.
            </p>
          </div>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Tarım sektöründeki yatırımlar için ayrıca IPARD/TKDK kapsamındaki
          AB kaynaklı hibe desteği de gündeme gelebilir; bu programın
          kendine özgü kırsal kalkınma odaklı yapısı nedeniyle ayrı bir
          rehberde ele alınmayı hak ediyor.
        </p>
      </section>

      {/* 6. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karşılaştırma Tablosu
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hangi kaynağın hangi ihtiyaca daha uygun olduğunu hızlıca
          görebilmek için özet karşılaştırma:
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kaynak</th>
                <th className="p-5">Tip</th>
                <th className="p-5">Kime Uygun</th>
                <th className="p-5">Nasıl Erişilir</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Türk Eximbank</td>
                <td className="p-5">Kısa/orta-uzun vadeli kredi</td>
                <td className="p-5">İhracatçı ve ihracata yönelik üretim yapan imalatçı KOBİ&apos;ler</td>
                <td className="p-5">Doğrudan Eximbank veya aracı ticari banka</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">EBRD</td>
                <td className="p-5">Kredi hattı (dolaylı)</td>
                <td className="p-5">Kadın girişimciler, imalat/dijital dönüşüm, yeşil yatırım yapan KOBİ&apos;ler</td>
                <td className="p-5">Aracı ticari bankalar üzerinden</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Dünya Bankası / IFC</td>
                <td className="p-5">Kredi hattı / garanti (dolaylı)</td>
                <td className="p-5">Kamu bankaları ve garanti kuruluşları aracılığıyla erişen geniş KOBİ tabanı</td>
                <td className="p-5">Kamu bankaları, KGF ve ortak ticari bankalar üzerinden</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Horizon Europe</td>
                <td className="p-5">Hibe / karma finansman (hibe + öz sermaye)</td>
                <td className="p-5">Ar-Ge ve inovasyon odaklı şirketler, teknoloji girişimleri</td>
                <td className="p-5">TÜBİTAK ulusal irtibat noktası üzerinden doğrudan başvuru</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Tek Pazar Programı (COSME)</td>
                <td className="p-5">Danışmanlık / eşleştirme desteği</td>
                <td className="p-5">Yeni pazara açılmak, iş ortağı bulmak isteyen tüm KOBİ&apos;ler</td>
                <td className="p-5">KOSGEB koordinasyonu ve Enterprise Europe Network</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. DANIŞMANLIK NEDEN KRİTİK */}
      <section id="danismanlik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Danışmanlık Neden Kritik? Fizibilite ve Finansal Projeksiyon
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yukarıdaki kaynakların ortak paydası, hiçbirinin şirketin
          &quot;iyi niyetine&quot; veya sözlü beyanına göre kredi/hibe
          vermemesi. EBRD ve IFC gibi kurumlar, kredi kararından önce
          firmanın finansal sürdürülebilirliğini, nakit akış
          projeksiyonlarını ve çoğu zaman çevresel-sosyal (E&amp;S) etki
          değerlendirmesini talep ediyor. Horizon Europe gibi AB programları
          ise teknik öneriyle birlikte ayrıntılı bir bütçe gerekçelendirmesi
          bekliyor. Eximbank ise mali analiz için güncel finansal tabloları
          ve ihracat performans verilerini istiyor.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bir şirketin ham mali verilerini bu kurumların beklediği formata
          -gerçekçi varsayımlara dayanan bir fizibilite raporu, çok yıllı
          finansal projeksiyon ve kurumun kendi başvuru şablonuna uygun bir
          dosya hâline- dönüştürmek, sürecin en çok zaman kaybettiren ve en
          çok ret/ek bilgi talebiyle sonuçlanan aşaması. Bu noktada
          profesyonel bir danışmanlık süreci, hem doğru kaynağın seçilmesini
          hem de başvurunun ilk seferde doğru ve eksiksiz hazırlanmasını
          sağlayarak onay olasılığını ve süreç hızını doğrudan etkiliyor.
        </p>
      </section>

      {/* 8. KİMLER YARARLANABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Kimler Yararlanabilir, Genel Şartlar
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Genellikle Uygun Profiller
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ En az bir yıllık faaliyet geçmişi ve düzenli mali tabloları olan şirketler</li>
              <li>✔ İhracat yapan veya ihracata yönelik üretim planlayan imalatçılar</li>
              <li>✔ Kadın girişimciler veya kadın liderliğindeki KOBİ&apos;ler</li>
              <li>✔ Dijital dönüşüm, yeşil dönüşüm veya Ar-Ge yatırımı planlayan şirketler</li>
              <li>✔ Resmî KOBİ tanımına uyan (çalışan sayısı ve ciro/bilanço ölçütleri) işletmeler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ⚠️ Dikkat Edilmesi Gereken Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>❌ Yeni kurulmuş, mali geçmişi yetersiz şirketlerde bazı kredi kanalları zorlaşabilir</li>
              <li>❌ Vergi/SGK borcu veya olumsuz kredi sicili başvuruyu doğrudan olumsuz etkiler</li>
              <li>❌ Eksik veya tutarsız fizibilite/projeksiyon, ret ya da uzun ek bilgi talebi süreciyle sonuçlanır</li>
              <li>❌ Her kaynağın kendi kriter ve dokümantasyon formatı olduğu unutulmamalı; genelleme yapılmamalı</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Başvuru ve Danışmanlık Süreci: Adım Adım
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🎯</div>
            <h3 className="text-xl font-bold">1. İhtiyaç ve Hedef Belirleme</h3>
            <p className="mt-3 text-sm text-gray-600">
              Yatırım, işletme sermayesi, Ar-Ge veya ihracat finansmanı
              ihtiyacının kapsamı ve büyüklüğü netleştirilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🔍</div>
            <h3 className="text-xl font-bold">2. Doğru Kaynağın Eşleştirilmesi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Eximbank, EBRD, IFC veya AB fonları arasından şirket profiline
              en uygun kaynak(lar) belirlenir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📊</div>
            <h3 className="text-xl font-bold">3. Fizibilite ve Projeksiyon</h3>
            <p className="mt-3 text-sm text-gray-600">
              Gerçekçi varsayımlara dayanan fizibilite raporu ve çok yıllı
              finansal projeksiyon hazırlanır.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📁</div>
            <h3 className="text-xl font-bold">4. Başvuru Dosyasının Hazırlanması</h3>
            <p className="mt-3 text-sm text-gray-600">
              Dosya, ilgili kurumun kendi şablonuna ve beklediği belge
              setine uygun biçimde derlenir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🤝</div>
            <h3 className="text-xl font-bold">5. Görüşme ve Sunum</h3>
            <p className="mt-3 text-sm text-gray-600">
              Aracı banka veya ilgili kurumla görüşmeler yürütülür, ek soru
              ve revizyon talepleri yönetilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📈</div>
            <h3 className="text-xl font-bold">6. Onay Sonrası Takip</h3>
            <p className="mt-3 text-sm text-gray-600">
              Kullanım, raporlama ve izleme yükümlülükleri (varsa E&amp;S
              şartları dâhil) süreç boyunca yönetilir.
            </p>
          </div>
        </div>
      </section>

      {/* 10. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Döviz cinsi kredilerde <strong>kur riski</strong> mutlaka nakit akış planlamasına dâhil edilmeli</li>
            <li>EBRD/IFC kaynaklı kredilerde <strong>çevresel ve sosyal (E&amp;S) uyum</strong> şartları, projeye göre ek yükümlülük getirebilir</li>
            <li>Faiz oranı, üst limit ve başvuru şartları <strong>sık güncellendiği</strong> için başvuru öncesi ilgili kurumun/bankanın güncel koşulları teyit edilmeli</li>
            <li>Aynı yatırım kalemi genelde <strong>birden fazla kaynaktan</strong> aynı anda finanse edilemez; kaynaklar arasında çakışma kontrolü yapılmalı</li>
            <li>Hibe/kredi vaadinde bulunan doğrulanmamış &quot;danışmanlık&quot; teklifleri karşısında dikkatli olunmalı; kaynak her zaman kurumun resmî sayfasından teyit edilmeli</li>
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
              KOBİ&apos;ler doğrudan EBRD veya Dünya Bankası&apos;na başvurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, genel kural olarak hayır. Bu kurumlar Türkiye&apos;deki
              ticari bankalara kredi hattı açıyor; KOBİ, bu kaynaktan
              yararlanmak için doğrudan aracı bankaya başvuruyor. Doğru
              bankayı ve doğru fon hattını bilmek başvurunun ilk adımı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Eximbank kredisi almak için ihracatçı olmak şart mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Kısa vadeli ürünlerde evet; ihracatçı, imalatçı-ihracatçı veya
              ihracata yönelik mal üreten imalatçı olmak ya da döviz
              kazandırıcı hizmet sağlamak gerekiyor. Henüz ihracata
              başlamamış ama ihracata hazırlanan üretici firmalar da bazı
              ürünlerden yararlanabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu kaynaklar hibe mi, kredi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Eximbank, EBRD ve Dünya Bankası/IFC kaynaklı ürünler ağırlıklı
              olarak kredi niteliğinde. AB&apos;nin Horizon Europe gibi
              Ar-Ge programları ise bazı alt bileşenlerde hibeyle öz sermaye
              yatırımını bir arada sunan karma finansman modelleri
              içerebiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuru için hangi belgeler gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Kuruma göre değişmekle birlikte genel olarak son dönem mali
              tablolar, faaliyet/ihracat performans verileri, fizibilite
              raporu, çok yıllı finansal projeksiyon ve varsa çevresel-sosyal
              etki bilgileri isteniyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Birden fazla kaynağa aynı anda başvurulabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, farklı ihtiyaçlar için paralel başvuru yapılabilir; ancak
              aynı yatırım/harcama kalemi genelde birden fazla kaynaktan
              aynı anda finanse edilemiyor. Bu nedenle başvuru stratejisinin
              baştan bütüncül planlanması önemli.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Fizibilite Raporundan Başvuru Dosyasına Kadar Yanınızdayız
          </h3>
          <p className="leading-8 text-gray-700">
            Doğru fon kaynağının seçilmesinden fizibilite raporu ve finansal
            projeksiyonun hazırlanmasına, başvuru dosyasının ilgili kurumun
            beklentilerine uygun derlenmesinden onay sonrası raporlama
            yükümlülüklerinin takibine kadar tüm süreç Koray Akdağ / Sistem
            Global Danışmanlık tarafından tek noktadan yürütülüyor.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin uluslararası fon ve kredi ihtiyacını
              değerlendirmemiz için bizimle iletişime geçin.
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
          Türk Eximbank, EBRD, Dünya Bankası/IFC ve AB&apos;nin Horizon
          Europe ile Tek Pazar Programı gibi mekanizmaları, Türk
          KOBİ&apos;lerinin büyüme ve ihracat hedeflerini finanse edebileceği
          önemli ama görece az bilinen kaynaklar. Bu kaynakların çoğuna
          erişim doğrudan değil aracı bankalar veya ulusal koordinasyon
          kurumları üzerinden işlediği için, doğru kaynağı bulmak kadar
          başvuru dosyasını o kurumun beklediği format ve içerikte
          hazırlamak da başarı ihtimalini belirleyen kritik unsur.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin ihtiyacına en uygun uluslararası fon veya kredi
          kaynağının belirlenmesi, fizibilite raporu ve finansal
          projeksiyonun hazırlanması, başvuru dosyasının derlenmesi ve
          onay sonrası sürecin yönetilmesi için Koray Akdağ / Sistem Global
          Danışmanlık olarak yanınızdayız; ayrı bir danışman veya aracı
          kurum aramanıza gerek kalmadan süreci uçtan uca birlikte
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
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri (2026 Rehberi)</h3>
          </Link>
          <Link
            href="/blog/kosgeb-kobi-dijital-donusum-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DİJİTAL DÖNÜŞÜM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB KOBİ Dijital Dönüşüm Destek Programı (EBRD İş Birliği)</h3>
          </Link>
          <Link
            href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ & FİNANSAL YÖNETİM • DANIŞMANLIK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Gerekli?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
