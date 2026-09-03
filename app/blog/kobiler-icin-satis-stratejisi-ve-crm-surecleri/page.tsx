import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOBİ'ler İçin Satış Stratejisi ve CRM Süreçleri | Koray Akdağ",
  description:
    "KOBİ'lerde satış hunisi/pipeline yönetimi, CRM seçim kriterleri, müşteri kazanım maliyeti (CAC) ve bayi yönetiminde sık yapılan hatalarla müşteri kazanımını sistematik hale getirme rehberi.",
  keywords: [
    "KOBİ satış stratejisi",
    "satış stratejisi nasıl oluşturulur",
    "KOBİ için CRM nasıl seçilir",
    "CRM seçim kriterleri",
    "satış hunisi pipeline yönetimi",
    "bayi yönetimi nasıl yapılır",
    "kanal yönetimi",
    "müşteri kazanım maliyeti CAC",
    "satış ekibi performans yönetimi",
    "müşteri kazanımı",
    "B2B satış",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOBİ'ler İçin Satış Stratejisi ve CRM Süreçleri: Müşteri Kazanımını Sistematik Hale Getirmek"
      description="Birçok KOBİ'de satış, belirli bir çalışanın kişisel yeteneğine ve hafızasına bağlı kalır; kim hangi müşteriyle nerede kaldığını Excel'de veya kafasında tutar. Satış stratejisi kurmanın adımları, satış hunisi/pipeline yönetimi, KOBİ için CRM seçim kriterleri, müşteri kazanım maliyeti (CAC) kavramı ve bayi/kanal yönetiminde sık yapılan hatalarla müşteri kazanımını sisteme bağlayan kapsamlı rehber."
      category="PAZARLAMA VE SATIŞ • CRM • 2026"
      date="2026"
      readTime="12 Dakika"
      coverImage="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="kobiler-icin-satis-stratejisi-ve-crm-surecleri"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;deki KOBİ&apos;lerin büyük bölümünde satış, yazılı bir
          stratejiden değil; birkaç deneyimli çalışanın kişisel becerisinden
          ve hafızasından beslenir. O çalışan izne çıktığında ya da
          şirketten ayrıldığında, hangi müşteriyle nerede kalındığı bilgisi
          de onunla birlikte gider. Bu yazıda satış stratejisinin nasıl
          kurulacağını, satış hunisi/pipeline yönetimini, CRM seçiminde
          dikkat edilmesi gereken kriterleri, müşteri kazanım maliyeti (CAC)
          kavramını ve bayi/kanal yönetiminde sık yapılan hataları
          anlatıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Satış stratejisi nasıl oluşturulur, hangi unsurları içermelidir?</li>
          <li>✔ Satış hunisi (pipeline) nedir, aşamaları nasıl tasarlanır?</li>
          <li>✔ KOBİ için doğru CRM nasıl seçilir?</li>
          <li>✔ Müşteri kazanım maliyeti (CAC) nedir, nasıl hesaplanır?</li>
          <li>✔ Bayi ve kanal yönetiminde en sık yapılan hatalar nelerdir?</li>
          <li>✔ Satış ekibinin performansı hangi göstergelerle ölçülür?</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#sorun" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Neden Çoğu KOBİ&apos;de Satış Kişiye Bağlı Kalır?
          </Link>
          <Link href="#strateji" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Satış Stratejisi Nasıl Kurulur?
          </Link>
          <Link href="#huni" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Satış Hunisi (Pipeline) Yönetimi
          </Link>
          <Link href="#crm" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. CRM Nedir, KOBİ İçin Nasıl Seçilir?
          </Link>
          <Link href="#cac" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Müşteri Kazanım Maliyeti (CAC) Nedir?
          </Link>
          <Link href="#kanal" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Bayi ve Kanal Yönetiminde Sık Yapılan Hatalar
          </Link>
          <Link href="#performans" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Satış Ekibi Performans Yönetimi
          </Link>
          <Link href="#yol-haritasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Adım Adım Uygulama Yol Haritası
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. SORUN */}
      <section id="sorun" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Çoğu KOBİ&apos;de Satış Kişiye Bağlı Kalır?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bir KOBİ belirli bir ciroya ulaşana kadar satış genellikle
          kurucunun veya birkaç &quot;usta&quot; satışçının kişisel ağına ve
          sezgisine dayanır. Bu dönemde işler yürür; çünkü müşteri sayısı
          azdır ve herkes birbirini tanır. Ancak şirket büyüdükçe, müşteri
          sayısı arttıkça ve yeni satış elemanları işe alındıkça bu model
          çatlamaya başlar: hangi müşteriyle en son ne konuşulduğu
          hatırlanmaz, teklif gönderilip takibi unutulan fırsatlar kaybolur,
          yeni işe başlayan bir satışçının &quot;ne yapması gerektiği&quot;
          yazılı değil sözlü aktarılır.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bu durumun en somut belirtisi, satış verisinin farklı
          çalışanların not defterlerinde, WhatsApp mesajlarında ve
          dağınık Excel dosyalarında dağılmış olmasıdır. Yönetim,
          &quot;bu ay kaç teklif gönderildi, hangi aşamada kaç fırsat var,
          hangi müşteri neden kaybedildi&quot; sorularına net bir cevap
          veremez &mdash; çünkü bu bilgi hiçbir yerde sistematik olarak
          tutulmamaktadır. Satış stratejisi ve CRM süreçlerini kurmanın
          amacı tam olarak budur: satışı bireysel yetenekten, izlenebilir
          ve tekrarlanabilir bir sisteme taşımak.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Satış sistemi kurmak, satışçının becerisini önemsizleştirmek
            değildir. Tam tersine, doğru kurulmuş bir sistem; satışçının
            zamanını hatırlama ve idari takip yerine, gerçek katma değer
            ürettiği ikna ve ilişki yönetimine ayırmasını sağlar.
          </p>
        </div>
      </section>

      {/* 2. STRATEJİ */}
      <section id="strateji" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Satış Stratejisi Nasıl Kurulur?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Satış stratejisi, &quot;daha çok satalım&quot; gibi genel bir
          niyet değil; kime, ne şekilde ve hangi kanaldan satış
          yapılacağını netleştiren yazılı bir çerçevedir. Sağlam bir satış
          stratejisi aşağıdaki dört unsuru içermelidir:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🎯 İdeal Müşteri Profili (ICP)</h4>
            <p className="text-sm leading-7 text-gray-700">
              Hangi sektör, hangi ölçek (ciro/çalışan sayısı), hangi
              coğrafya ve hangi ihtiyaç profilindeki müşterilerin şirkete
              en yüksek değeri, en düşük satış maliyetiyle getirdiği
              tanımlanır. Her müşteriyi kovalamak yerine, en uygun profile
              odaklanmak dönüşüm oranını doğrudan yükseltir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📍 Konumlandırma ve Değer Önerisi</h4>
            <p className="text-sm leading-7 text-gray-700">
              Şirketin rakiplerinden farkının net cümlelerle ifade
              edilmesi gerekir: neden bu müşteri, sizin ürününüzü/
              hizmetinizi alternatif yerine tercih etmeli? Bu cevap yoksa,
              satışçı her görüşmede fiyat üzerinden savunmaya girer.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🛤️ Satış Kanalları ve Model</h4>
            <p className="text-sm leading-7 text-gray-700">
              Doğrudan satış, bayi/distribütör ağı, dijital kanal veya bu
              üçünün karması mı kullanılacak? Her kanal farklı bir maliyet
              yapısı, farklı bir kontrol düzeyi ve farklı bir hız getirir;
              seçim ürün/hizmetin karmaşıklığına ve hedef pazara göre
              yapılmalıdır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📊 Ölçülebilir Hedefler</h4>
            <p className="text-sm leading-7 text-gray-700">
              &quot;Bu yıl satışı artıracağız&quot; bir hedef değildir.
              Hedef; belirli bir dönemde, belirli bir müşteri segmentinden,
              belirli bir ciro veya yeni müşteri sayısına ulaşmak şeklinde
              sayısal ve zaman sınırlı olmalıdır.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HUNİ */}
      <section id="huni" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Satış Hunisi (Pipeline) Yönetimi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Satış hunisi (pipeline), bir potansiyel müşterinin ilk temastan
          satışın kapanmasına kadar geçtiği aşamaların görsel haritasıdır.
          Her aşamanın net bir tanımı ve &quot;bir sonraki aşamaya geçiş
          şartı&quot; olmalıdır; aksi hâlde huni yalnızca isim listesine
          dönüşür.
        </p>
        <div className="my-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-center text-2xl font-bold text-[#071A2F]">
            Tipik Bir B2B Satış Hunisi
          </h3>
          <svg viewBox="0 0 600 220" className="mx-auto w-full max-w-2xl">
            <polygon points="10,20 590,20 490,80 110,80" fill="#f97316" fillOpacity="0.85" />
            <polygon points="110,85 490,85 430,130 170,130" fill="#fb923c" fillOpacity="0.85" />
            <polygon points="170,135 430,135 385,175 215,175" fill="#fdba74" fillOpacity="0.9" />
            <polygon points="215,180 385,180 355,210 245,210" fill="#071A2F" fillOpacity="0.9" />
            <text x="300" y="55" fontSize="16" fontWeight="700" fill="#fff" textAnchor="middle">Lead (İlk Temas)</text>
            <text x="300" y="112" fontSize="15" fontWeight="700" fill="#071A2F" textAnchor="middle">Nitelikli Fırsat (Qualified)</text>
            <text x="300" y="160" fontSize="14" fontWeight="700" fill="#7c2d12" textAnchor="middle">Teklif / Görüşme</text>
            <text x="300" y="200" fontSize="13" fontWeight="700" fill="#fff" textAnchor="middle">Kazanıldı</text>
          </svg>
          <p className="mt-6 text-center text-sm text-gray-500">
            Her aşama daralır; huninin amacı bu daralmanın hangi aşamada,
            neden yaşandığını ölçülebilir kılmaktır.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Aşama</th>
                <th className="p-5">Tanım</th>
                <th className="p-5">Bir Sonraki Aşamaya Geçiş Şartı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Lead</td>
                <td className="p-5">İlk temas kurulan, henüz ihtiyacı doğrulanmamış aday</td>
                <td className="p-5">İhtiyaç ve bütçe/yetki sahipliği doğrulanmış olmalı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Nitelikli Fırsat</td>
                <td className="p-5">İhtiyacı, bütçesi ve zamanlaması netleşmiş aday</td>
                <td className="p-5">Teklif/görüşme talep etmiş olmalı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Teklif / Görüşme</td>
                <td className="p-5">Fiyat/teklif sunulmuş, müzakere süreci başlamış</td>
                <td className="p-5">Karar tarihi ve karar vericinin onayı netleşmiş olmalı</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kazanıldı / Kaybedildi</td>
                <td className="p-5">Süreç sonuçlanmış</td>
                <td className="p-5">Kaybedilirse neden kaydedilir, ileride analiz edilir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <p className="leading-8 text-gray-700">
            Pipeline yönetiminin en pratik disiplini, haftalık ve gündemi
            sabit bir satış toplantısıdır: bu hafta kapanması beklenen
            fırsatlar, uzun süredir takılan aşamalar, teklif bekleyen
            dosyalar ve kaybedilen fırsatların nedenleri gözden geçirilir.
            Bu toplantı düzenli yapılmadığında, en gelişmiş CRM bile
            işlevsiz kalır.
          </p>
        </div>
      </section>

      {/* 4. CRM */}
      <section id="crm" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. CRM Nedir, KOBİ İçin Nasıl Seçilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          CRM (Müşteri İlişkileri Yönetimi), müşteri ve fırsat bilgisinin
          tek bir merkezde, kişilerin hafızasından bağımsız olarak
          tutulduğu yazılım sistemidir. KOBİ&apos;lerde CRM seçimindeki en
          büyük hata, önce yazılımın özellik listesine bakıp sonra
          şirketin gerçek sürecini o yazılıma zorla uydurmaya çalışmaktır
          &mdash; doğrusu tam tersidir: önce satış süreci ve huni aşamaları
          tanımlanır, sonra bu sürece en iyi uyan yazılım seçilir.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ KOBİ İçin CRM Seçim Kriterleri
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Kullanım kolaylığı:</strong> Teknik bilgisi olmayan
              bir satış elemanının günlük olarak kolayca kullanabileceği,
              sade bir arayüz. Karmaşık bir CRM, ekip tarafından
              benimsenmez ve kısa sürede terk edilir.
            </li>
            <li>
              <strong>Temel özellik seti:</strong> Kişi/şirket kartları,
              pipeline yönetimi, görev/hatırlatma otomasyonu, e-posta
              entegrasyonu ve temel raporlama &mdash; fazlası genellikle
              KOBİ ölçeğinde gereksiz karmaşıklık yaratır.
            </li>
            <li>
              <strong>Mobil erişim:</strong> Özellikle saha satışı yapan
              ekiplerde, masaüstünde güçlü ama mobilde zayıf kalan bir CRM
              benimsenmez; saha ekibinin telefonundan veri girip
              görebilmesi kritik önem taşır.
            </li>
            <li>
              <strong>Entegrasyon:</strong> Muhasebe/fatura, e-ticaret
              veya iletişim (WhatsApp Business, e-posta) araçlarıyla veri
              alışverişi yapabilmesi, çifte veri girişini önler.
            </li>
            <li>
              <strong>Ölçeklenebilirlik ve maliyet:</strong> Başlangıç
              paketinden kurumsal pakete sorunsuz geçiş yapılabilmesi,
              kullanıcı başına fiyatlandırmanın şirketin büyüme planıyla
              uyumlu olması.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Uygulamada en sık yapılan hata, dağınık ve kirli Excel verisinin
          olduğu gibi yeni CRM&apos;e aktarılmasıdır. Veri temizliği
          (tekrar eden kayıtların birleştirilmesi, güncel olmayan
          bilgilerin ayıklanması) yapılmadan yapılan bir geçiş, CRM&apos;i
          daha ilk günden güvenilmez hâle getirir. Doğru sıralama önce
          müşteri kartları ve pipeline&apos;ın kurulması, ardından
          otomasyon ve raporlama modüllerinin devreye alınmasıdır.
        </p>
      </section>

      {/* 5. CAC */}
      <section id="cac" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Müşteri Kazanım Maliyeti (CAC) Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Müşteri Kazanım Maliyeti (Customer Acquisition Cost &mdash; CAC),
          belirli bir dönemde yeni bir müşteri kazanmak için harcanan
          ortalama tutardır. KOBİ&apos;lerin çoğu bu rakamı hiç hesaplamaz;
          oysa CAC bilinmeden hangi pazarlama/satış kanalının gerçekten
          kârlı olduğunu bilmek mümkün değildir.
        </p>
        <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🧮 CAC Nasıl Hesaplanır?
          </h3>
          <p className="mb-4 text-lg font-semibold text-gray-800">
            CAC = Toplam Satış ve Pazarlama Gideri ÷ Kazanılan Yeni Müşteri Sayısı
          </p>
          <p className="leading-7 text-gray-700">
            Toplam gidere; reklam harcamaları, satış ve pazarlama
            ekibinin maaşları, kullanılan yazılımların (CRM dahil)
            maliyeti ve varsa fuar/etkinlik giderleri dahil edilir. Örneğin
            bir çeyrekte satış ve pazarlamaya 300.000 TL harcanmış ve bu
            dönemde 30 yeni müşteri kazanılmışsa, CAC 10.000 TL&apos;dir.
          </p>
        </div>
        <p className="mt-8 mb-4 leading-8 text-gray-700">
          CAC tek başına değil, müşterinin şirkete kazandırdığı toplam
          değerle (Customer Lifetime Value &mdash; LTV) birlikte
          değerlendirilmelidir. B2B satışta genel kabul gören yaklaşım,
          LTV&apos;nin CAC&apos;ın en az 3 katı olmasıdır; bu oranın altına
          düşülmesi, büyümenin kârlılığı eritmeye başladığının işaretidir.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            CAC&apos;ı kanal bazında (örneğin bayi kanalı vs. doğrudan
            satış vs. dijital kanal) ayrı ayrı hesaplamak, bütçenin en
            verimli kanala kaydırılmasını sağlar. Tek bir toplam CAC
            rakamı, hangi kanalın gerçekten işe yaradığını gizler.
          </p>
        </div>
      </section>

      {/* 6. KANAL/BAYİ */}
      <section id="kanal" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Bayi ve Kanal Yönetiminde Sık Yapılan Hatalar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bayi/distribütör ağı üzerinden büyüyen KOBİ&apos;lerde, satışın
          bir kısmı üreticinin doğrudan kontrolünün dışına çıkar. Bu model
          doğru yönetilmezse hem gelir görünürlüğü hem de marka kontrolü
          zayıflar. En sık karşılaşılan hatalar şunlardır:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📋 Yazılı Bayilik Kriteri Olmadan Anlaşma Yapmak</h4>
            <p className="text-sm leading-7 text-gray-700">
              Bölge, hedef ciro, stok/hizmet standardı ve fiyatlandırma
              kuralları yazılı olmadan yapılan bayilik anlaşmaları,
              zamanla anlaşmazlık ve bölge çakışmasına dönüşür.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📉 Bayi Performansını Takip Etmemek</h4>
            <p className="text-sm leading-7 text-gray-700">
              Düzenli satış raporu almadan çalışan bayilerin gerçek
              performansı ancak yıl sonunda, geç ve genellikle yanlış
              anlaşılarak fark edilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🎓 Eğitim ve Destek Eksikliği</h4>
            <p className="text-sm leading-7 text-gray-700">
              Ürün/hizmet bilgisi ve satış argümanları düzenli
              aktarılmayan bayiler, kendi yorumlarıyla satış yapar; bu da
              marka mesajının pazarda tutarsızlaşmasına yol açar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">⚖️ Kanal Çakışması (Channel Conflict)</h4>
            <p className="text-sm leading-7 text-gray-700">
              Aynı bölgede hem doğrudan satış hem bayi kanalının
              rekabet etmesi, fiyat kırılmasına ve bayi güveninin
              zedelenmesine neden olur; bölge/segment ayrımı net
              çizilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">💬 Tek Yönlü İletişim</h4>
            <p className="text-sm leading-7 text-gray-700">
              Bayilerle iletişim yalnızca sipariş/tahsilat üzerinden
              kurulursa, saha bilgisi (rakip hareketleri, müşteri
              şikayeti) üreticiye hiç ulaşmaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🔄 Zayıf Bayilerle Yolun Uzatılması</h4>
            <p className="text-sm leading-7 text-gray-700">
              Belirlenen hedeflerin sürekli altında kalan bir bayiyle
              ilişkinin, net ve önceden tanımlı bir gözden geçirme
              takvimi olmadan yıllarca sürdürülmesi, o bölgedeki büyüme
              potansiyelini boşa harcar.
            </p>
          </div>
        </div>
      </section>

      {/* 7. PERFORMANS */}
      <section id="performans" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Satış Ekibi Performans Yönetimi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Satış performansını yalnızca &quot;kapanan ciro&quot; ile ölçmek,
          sorunun kaynağını gizler. Sonuç göstergesinin yanına, sürecin
          hangi aşamasında tıkanma yaşandığını gösteren öncü göstergeler
          eklenmelidir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Gösterge</th>
                <th className="p-5">Ne Ölçer</th>
                <th className="p-5">Neden Önemli</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Aylık yeni fırsat sayısı</td>
                <td className="p-5">Huninin en üst aşamaya giriş hızı</td>
                <td className="p-5">Düşükse, gelecekteki ciro da düşecektir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Aşamalar arası dönüşüm oranı</td>
                <td className="p-5">Hangi aşamada fırsat kaybediliyor</td>
                <td className="p-5">Eğitim/argüman zayıflığını gösterir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ortalama satış döngüsü süresi</td>
                <td className="p-5">İlk temastan kapanışa geçen süre</td>
                <td className="p-5">Uzaması nakit akışını doğrudan etkiler</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kazanma oranı (win rate)</td>
                <td className="p-5">Teklif verilen fırsatların kaçının kapandığı</td>
                <td className="p-5">Fiyatlandırma ve değer önerisinin gücünü gösterir</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Mevcut müşteriden ek satış</td>
                <td className="p-5">Çapraz/ek satış (cross-sell/up-sell) oranı</td>
                <td className="p-5">Yeni müşteri kazanmaktan genellikle daha düşük maliyetlidir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu göstergelerin sağlıklı ölçülebilmesi, ancak veri tek bir
          sistemde (CRM&apos;de) ve tutarlı biçimde girildiğinde mümkündür.
          Aksi hâlde her yönetici kendi Excel&apos;inde farklı bir sayıyla
          çalışır ve toplantılarda &quot;doğru rakam hangisi&quot;
          tartışmasıyla vakit kaybedilir.
        </p>
      </section>

      {/* 8. YOL HARİTASI */}
      <section id="yol-haritasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Adım Adım Uygulama Yol Haritası
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Satış stratejisi ve CRM sürecini bir günde kurmak mümkün
          değildir; ancak aşağıdaki sıralamayla birkaç hafta içinde somut
          bir sistem oturtulabilir:
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🎯</div>
            <h3 className="text-lg font-bold">1. İdeal Müşteri Profilini Tanımlayın</h3>
            <p className="mt-3 text-sm text-gray-600">
              En kârlı, en az sürtünmeyle kazanılan müşteri profilinizi
              geçmiş verilerinizden çıkarın.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🪜</div>
            <h3 className="text-lg font-bold">2. Satış Hunisi Aşamalarını Yazın</h3>
            <p className="mt-3 text-sm text-gray-600">
              Kaç aşama olacağına ve her aşamanın geçiş şartına karar
              verin; bunu tüm ekiple netleştirin.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🧹</div>
            <h3 className="text-lg font-bold">3. Mevcut Müşteri Verisini Temizleyin</h3>
            <p className="mt-3 text-sm text-gray-600">
              Excel/kişisel kayıtlardaki tekrarları ve güncel olmayan
              bilgileri ayıklayın.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">💻</div>
            <h3 className="text-lg font-bold">4. Sürece Uygun CRM&apos;i Seçip Kurun</h3>
            <p className="mt-3 text-sm text-gray-600">
              Önce müşteri kartları ve pipeline&apos;ı kurun; otomasyon ve
              raporlamayı sonraya bırakın.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📅</div>
            <h3 className="text-lg font-bold">5. Haftalık Pipeline Toplantısını Başlatın</h3>
            <p className="mt-3 text-sm text-gray-600">
              Sabit gündemli, kısa ve düzenli bir toplantı disiplini
              kurun; tek seferlik olmasın.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📐</div>
            <h3 className="text-lg font-bold">6. CAC ve Temel Göstergeleri Ölçmeye Başlayın</h3>
            <p className="mt-3 text-sm text-gray-600">
              Kanal bazında CAC&apos;ı hesaplayın; bütçeyi en verimli
              kanala kaydırın.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm md:col-span-3">
            <div className="mb-4 text-5xl">🔁</div>
            <h3 className="text-xl font-bold">7. Bayi/Kanal Kurallarını Yazılı Hale Getirip Gözden Geçirin</h3>
            <p className="mt-3 text-sm text-gray-600">
              Bölge, hedef ve destek kurallarını yazılı bir bayilik
              çerçevesine bağlayın; performansı düzenli aralıklarla
              (örneğin üç ayda bir) gözden geçirin.
            </p>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ CRM&apos;i satın almadan önce süreci tanımlayın; süreç
            yazılıma değil, yazılım sürece uymalı
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Veri temizliğini atlamayın; kirli veri CRM&apos;i daha ilk
            günden güvenilmez hâle getirir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ CAC&apos;ı yalnızca toplamda değil, kanal bazında hesaplayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bayilik anlaşmalarını mutlaka yazılı hâle getirin; bölge ve
            hedef netliği anlaşmazlıkları önler
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Haftalık pipeline toplantısını tek seferlik değil, kalıcı
            bir disiplin olarak sürdürün
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Performans göstergelerini yalnızca ciro üzerinden değil,
            sürecin her aşamasından okuyun
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Satış Sisteminizi Birlikte Kurabiliriz
          </h3>
          <p className="leading-8 text-gray-700">
            Satış stratejisinin oluşturulması, huni/pipeline tasarımı,
            CRM sürecinin kurgulanması ve bayi/kanal yönetiminin
            yapılandırılması gibi konularda Koray Akdağ / Sistem Global
            Danışmanlık olarak şirketinizin ölçeğine uygun, uygulanabilir
            bir satış sistemi kuruyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Mevcut satış sürecinizi birlikte değerlendirmek için bizimle
              iletişime geçin.
            </Link>
          </p>
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
              Küçük bir KOBİ&apos;nin gerçekten CRM&apos;e ihtiyacı var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Müşteri sayısı birkaç düzineyi geçen ve birden fazla kişinin
              satışla ilgilendiği hemen her şirkette CRM ihtiyacı ortaya
              çıkar. Bir kişinin hafızasına veya kişisel dosyalarına
              bağlı kalan müşteri bilgisi, o kişi ayrıldığında ya da izne
              çıktığında şirket için ciddi bir risk taşır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              CRM kurmak için önce ne yapılmalı?
            </h3>
            <p className="leading-8 text-gray-700">
              Önce yazılım seçilmemeli; önce satış hunisinin aşamaları ve
              her aşamanın geçiş şartı tanımlanmalıdır. Süreç netleşmeden
              seçilen bir CRM, şirketin gerçek ihtiyacına uymayan
              modüllerle dolar ve kısa sürede terk edilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              CAC hangi sıklıkla hesaplanmalı?
            </h3>
            <p className="leading-8 text-gray-700">
              Aylık veya en geç üç ayda bir hesaplanması, kanal
              performansındaki değişimleri zamanında görebilmek için
              yeterlidir. Yıllık tek bir hesaplama, hangi ayda hangi
              kanalın verimsizleştiğini gizler.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bayi ağı ile doğrudan satışı aynı anda yürütmek riskli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Doğru yönetilirse riskli değildir; ancak bölge ve segment
              ayrımı net çizilmeli ve bu kurallar bayilerle önceden
              paylaşılmalıdır. Aksi hâlde kanal çakışması fiyat
              kırılmasına ve bayi güveninin zedelenmesine yol açar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Satış stratejisi ile CRM süreci ne kadar sürede oturur?
            </h3>
            <p className="leading-8 text-gray-700">
              Strateji ve huni tasarımı birkaç hafta içinde tamamlanabilir;
              ekibin yeni sisteme tam alışması ve verinin güvenilir hâle
              gelmesi ise genellikle birkaç ayı bulur. Önemli olan süreci
              kademeli uygulamak ve disiplini bırakmamaktır.
            </p>
          </div>
        </div>
      </section>

      {/* 11. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Satış stratejisi ve CRM süreçlerini kurmak, satışçının
          yeteneğini yok saymak değil; şirketin büyümesini birkaç kişinin
          hafızasından bağımsız, izlenebilir ve tekrarlanabilir bir
          sisteme oturtmaktır. İdeal müşteri profilinin tanımlanması,
          satış hunisinin netleştirilmesi, doğru CRM seçimi, CAC&apos;ın
          düzenli takip edilmesi ve bayi/kanal ilişkilerinin yazılı
          kurallara bağlanması, KOBİ ölçeğinde bile kısa sürede ölçülebilir
          fark yaratan adımlardır.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu adımların hangi sırayla, şirketinizin gerçek satış sürecine
          uygun biçimde hayata geçirileceğini birlikte tasarlamak için
          Koray Akdağ / Sistem Global Danışmanlık olarak yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kobiler-icin-yapay-zeka-danismanligi-surec-otomasyonu-nereden-baslamali"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YAZILIM VE YAPAY ZEKÂ • SÜREÇ OTOMASYONU • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOBİ&apos;ler İçin Yapay Zeka Danışmanlığı ve Süreç Otomasyonu: Nereden Başlamalı?</h3>
          </Link>
          <Link
            href="/blog/aile-sirketinden-kurumsal-yapiya-gecis-kurumsallasma"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KURUMSAL GELİŞİM • KURUMSALLAŞMA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Kurumsallaşma: Aile Şirketinden Kurumsal Yapıya Geçiş Süreci Nasıl Yönetilir?</h3>
          </Link>
          <Link
            href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ &amp; FİNANSAL YÖNETİM • DANIŞMANLIK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ&apos;nin İhtiyacı?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
