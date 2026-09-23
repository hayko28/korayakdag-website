import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB İş Birliği Destek Programı Hâlâ Açık mı? | Koray Akdağ",
  description:
    "KOSGEB İş Birliği Destek Programı 28.02.2025 itibarıyla başvuruya kapatıldı ve yürürlükten kaldırılan destekler listesine alındı. Programın eski kapsamı, işletici kuruluş/proje ortaklığı modelleri, destek oranları ve KOBİ'lerin ortak üretim projeleri için şimdi hangi seçeneklere bakması gerektiği.",
  keywords: [
    "KOSGEB İş Birliği Destek Programı",
    "KOSGEB İşbirliği Güçbirliği Destek Programı",
    "KOSGEB işbirliği destek programı kapandı mı",
    "KOSGEB ortak üretim desteği",
    "işletici kuruluş modeli KOSGEB",
    "KOSGEB yürürlükten kaldırılan destekler",
    "KOBİ ortak yatırım desteği 2026",
  ],
  alternates: {
    canonical: "/blog/kosgeb-is-birligi-destek-programi-basvuruya-kapandi-mi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB İş Birliği Destek Programı Hâlâ Başvuruya Açık mı? Kapanma Tarihi ve Şimdi Bakılması Gereken Seçenekler"
      description="KOBİ'lerin ortak üretim, ortak tasarım ve ortak pazarlama projeleri için birbirleriyle veya büyük işletmelerle iş birliği kurmasını destekleyen KOSGEB programı, 28 Şubat 2025'te başvuruya kapatıldı. Programın eski kapsamını, destek oranlarını ve kapanışın ardından ortak proje arayan KOBİ'lerin nereye bakması gerektiğini güncel kaynaklarla derledik."
      category="KOSGEB • İŞ BİRLİĞİ DESTEK PROGRAMI • 2026"
      date="2026"
      readTime="11 Dakika"
      slug="kosgeb-is-birligi-destek-programi-basvuruya-kapandi-mi"
      programDurumu="kapali"
      coverImage="https://images.unsplash.com/photo-1652211955967-99c892925469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Ortak Proje Yerine Hangi Destek Size Uygun, Birlikte Bakalım"
      ctaText="İş Birliği Destek Programı kapansa da KOBİ'lerin ortak üretim, tedarikçi geliştirme veya ihracat odaklı iş birliği ihtiyacı bitmedi. Şirketinizin bugün hangi güncel KOSGEB veya Ticaret Bakanlığı destek programına uygun olduğunu birlikte değerlendirelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Google&apos;da &quot;KOSGEB işbirliği güçbirliği destek programı&quot;
        aratan çoğu KOBİ sahibi, aslında yıllar önce duyduğu ve hâlâ uygulamada
        olduğunu varsaydığı bir desteği arıyor. Oysa durum değişti. KOSGEB,
        işletmeler arası ortak üretim, ortak tasarım ve ortak pazarlama
        projelerini desteklemek için uzun süre uyguladığı İş Birliği Destek
        Programı&apos;nı 28 Şubat 2025 itibarıyla başvuruya kapattı ve programı
        kendi resmî sitesinde &quot;yürürlükten kaldırılan destekler&quot;
        listesine aldı. Bu yazıda programın eski kapsamını, kimlerin
        yararlanabildiğini, destek oranlarını ve daha önemlisi, şu an benzer
        bir ortak proje arayan bir KOBİ&apos;nin hangi güncel seçeneklere
        bakması gerektiğini KOSGEB&apos;in resmî kaynaklarına dayanarak ele
        alıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Hayır, program artık başvuruya açık değil. KOSGEB&apos;in resmî
            sitesine göre İş Birliği Destek Programı{" "}
            <strong>28.02.2025 tarihinde başvuruya kapatılmış</strong> ve
            &quot;Yürürlükten Kaldırılan Destekler&quot; sayfasına alınmıştır.
          </li>
          <li>
            ✔ Program, KOBİ&apos;lerin birbirleriyle veya büyük işletmelerle
            <strong> işletici kuruluş modeli</strong> ya da{" "}
            <strong>proje ortaklığı modeli</strong> üzerinden ortak üretim,
            ortak tasarım, ortak laboratuvar ve ortak pazarlama projeleri
            yürütmesini destekliyordu.
          </li>
          <li>
            ✔ Destek oranı, personel gideri hariç kalemlerde %60&apos;tı; bu
            desteğin %70&apos;i geri ödemeli (kredi), %30&apos;u geri ödemesiz
            (hibe) olarak veriliyordu. Yerli malı belgeli makine/teçhizat
            alımında geri ödemesiz oran %15 daha artıyordu.
          </li>
          <li>
            ✔ Üst limitler modele ve teknoloji seviyesine göre değişiyordu:
            işletici kuruluş modelinde toplam 5.000.000 TL, proje ortaklığı
            modelinde teknoloji seviyesine göre 5.000.000-10.000.000 TL
            arasındaydı.
          </li>
          <li>
            ✔ Kapanış öncesinde başvurusu onaylanmış ve destek süreci devam
            eden projeler etkilenmiyor; bu işletmeler taahhütlerini tamamlayana
            kadar destek almaya devam ediyor. Kapanan yalnızca{" "}
            <strong>yeni başvuru alımı</strong>.
          </li>
          <li>
            ✔ KOSGEB şu an programın birebir yerine geçen yeni bir &quot;iş
            birliği&quot; destek programı ilan etmedi. Ortak proje arayan
            KOBİ&apos;ler, ihtiyacın niteliğine göre Kapasite Geliştirme
            Destek Programı&apos;na veya Ticaret Bakanlığı&apos;nın UR-GE
            projelerine yönelebilir.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#program-neydi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Program Neydi, Amacı Neydi?
          </Link>
          <Link href="#kimler-basvuruyordu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabiliyordu?
          </Link>
          <Link href="#destek-unsurlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Oranları ve Üst Limitler
          </Link>
          <Link href="#neden-kapandi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Program Neden ve Ne Zaman Kapandı?
          </Link>
          <Link href="#yerine-ne-var" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Yerine Ne Var? Ortak Proje Arayan KOBİ&apos;ler Ne Yapmalı?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. PROGRAM NEYDİ */}
      <section id="program-neydi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Program Neydi, Amacı Neydi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in resmî tanımına göre İş Birliği Destek
          Programı&apos;nın amacı, &quot;küçük ve orta ölçekli işletmelerin
          birbirleriyle veya büyük işletmelerle ortak çalışma kültürü
          geliştirmelerine ve karşılıklı fayda sağlayan, rekabet avantajı
          oluşturan iş birlikleri kurmalarına katkı sağlamaktı&quot;.
          Sadeleştirirsek: tek başına altından kalkamayacağı bir yatırımı,
          birkaç işletme bir araya gelip ortak bir yapı üzerinden
          gerçekleştirdiğinde KOSGEB bu ortak projenin maliyetinin önemli bir
          kısmını karşılıyordu.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Programın kökeni aslında çok daha eskiye, 2011 yılında yürürlüğe
          giren &quot;İşbirliği-Güçbirliği Destek Programı&quot;na
          dayanıyordu. KOSGEB, 3 Haziran 2022&apos;de yürürlüğe giren yeni
          uygulama esaslarıyla programı &quot;İş Birliği Destek
          Programı&quot; adı altında güncelledi; destek tutarları, oranları
          ve bazı şartlar bu tarihten sonra değişti. Yani internette hâlâ
          dolaşan bazı içerikler, 2022 öncesi eski rakamlarla yazılmış
          olabilir.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Program, klasik bir &quot;tek işletmeye kredi/hibe&quot; desteği
            değildi. Destekten yararlanmak için en az iki, çoğu durumda daha
            fazla işletmenin bir araya gelip ortak bir proje veya ortak bir
            şirket (işletici kuruluş) kurması gerekiyordu. Bu yapısı
            KOSGEB&apos;in diğer birçok desteğinden onu ayırıyordu.
          </p>
        </div>
      </section>

      {/* 2. KİMLER BAŞVURUYORDU */}
      <section id="kimler-basvuruyordu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabiliyordu?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program iki farklı ortaklık modeli üzerinden yürütülüyordu ve her
          ikisinde de tek bir KOBİ değil, birden fazla işletmenin ortak
          hareket etmesi gerekiyordu:
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🏢 İşletici Kuruluş Modeli
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Proje ortağı işletmeler, proje onaylandıktan sonra ortak bir şirket (işletici kuruluş) kuruyor</li>
              <li>✔ İşletici kuruluş, iş birliğinin ve projenin tüm sürecini yönetiyor</li>
              <li>✔ Ortaklar mevcut işletmelerini koruyarak yeni kuruluşa ortak olabiliyor, kısmen/tamamen birleşebiliyor veya bazı işletmeler kapanıp diğer bünyede bütünleşebiliyordu</li>
              <li>✔ KOSGEB&apos;in genel kuralına göre standart sektörlerde en az 5, ileri teknoloji alanlarında daha az sayıda işletmenin bir araya gelmesi aranıyordu</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              🤝 Proje Ortaklığı Modeli
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Yeni bir şirket kurulmuyor; her ortak işletme, proje başvuru formundaki iş-zaman planında kendine düşen faaliyeti kendi bünyesinde yürütüyordu</li>
              <li>✔ Ortaklardan biri &quot;proje ortağı koordinatör&quot; olarak başvuruyu yönetiyordu</li>
              <li>✔ Büyük işletmeyle kurulan ortaklıklarda veya İŞGEM/TEKMER bünyesindeki işletmelerde asgari işletme sayısı ve bazı süre şartları aranmıyordu</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 mb-8 leading-8 text-gray-700">
          Genel başvuru şartları ise şunlardı: ön başvuru tarihinden en az 1
          yıl önce kurulmuş olmak ve son mali yılda bilanço esasına göre defter
          tutmuş olmak. Büyük işletmeyle ortaklık kuran veya İŞGEM/TEKMER
          bünyesinde faaliyet gösteren işletmeler bu iki şarttan muaftı.
        </p>

        <div className="mt-4 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: &quot;İşbirliği-Güçbirliği&quot; ile &quot;İş
            Birliği Destek Programı&quot; Aynı Şey Değil
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            KOSGEB&apos;in sitesinde hâlâ erişilebilen eski &quot;İşbirliği-
            Güçbirliği Destek Programı&quot; sayfası (2016 güncellemesi) ile
            2022&apos;de yenilenen &quot;İş Birliği Destek Programı&quot;
            sayfasındaki rakamlar birbirinden farklı. Aynı isim ve aynı
            mantıkla iki farklı dönemin kuralları internette yan yana
            dolaşıyor. Eğer geçmişte onaylanmış bir projeniz varsa,
            başvurunuzun hangi uygulama esasları versiyonuna göre
            değerlendirildiğini KOSGEB il müdürlüğünüzle teyit etmeniz gerekir;
            aşağıda anlatılan güncel (2022 sonrası) rakamlara göre
            yönlendirilmiş olma riski var.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Bu tür çok ortaklı destek programlarında en sık gözden kaçan
            nokta, projenin teknik başarısından çok, ortaklar arasındaki
            hukuki ve mali paylaşım yapısının netliğidir. İşletici kuruluş
            modelinde kim ne kadar hisseye sahip olacak, proje ortaklığı
            modelinde hangi ortak hangi gideri üstlenecek gibi sorular
            başvuru öncesinde netleşmediğinde, KOSGEB kurul değerlendirmesi
            aşamasında veya proje uygulama sürecinde ciddi gecikmelere yol
            açabiliyordu. Ortak bir yatırım planlıyorsanız, bu tip bir
            destek programına başvurmadan önce ortaklar arası protokolün
            ayrıntılı hazırlanması, tek başına teknik projeden daha az
            önemli değildir.
          </p>
        </div>
      </section>

      {/* 3. DESTEK UNSURLARI */}
      <section id="destek-unsurlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Oranları ve Üst Limitler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in resmî kaynaklarına göre program, 3 Haziran 2022 sonrası
          başvurularda şu yapıyla işliyordu:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Oran / Yapı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Genel destek oranı (personel hariç)</td>
                <td className="p-5">%60</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Desteğin geri ödemeli (kredi) kısmı</td>
                <td className="p-5">%70</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Desteğin geri ödemesiz (hibe) kısmı</td>
                <td className="p-5">%30</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yerli malı belgeli makine/teçhizat bonusu</td>
                <td className="p-5">Geri ödemesiz oran +%15 (geri ödemeliden düşülerek)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Personel gideri</td>
                <td className="p-5">Net asgari ücret esaslı ayrı hesap, geri ödemesiz</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Proje süresi</td>
                <td className="p-5">En az 12, en fazla 36 ay</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Kaynak: KOSGEB resmî İş Birliği Destek Programı sayfası ve
          uygulama esasları belgesi. Toplam üst limitler işletici kuruluş
          modelinde 5.000.000 TL, proje ortaklığı modelinde teknoloji
          seviyesine göre 5.000.000-10.000.000 TL arasında değişiyordu.
        </p>
        <p className="mt-8 leading-8 text-gray-700">
          Desteklenen giderler arasında personel, makine-teçhizat, kalıp,
          hammadde/malzeme, yazılım, danışmanlık ve fizibilite çalışması gibi
          kalemler vardı; gayrimenkul alımı, inşaat, taşıt kiralama, enerji
          giderleri ile vergi ve sosyal güvenlik primleri ise kapsam
          dışındaydı. Hangi giderin ne oranda destekleneceğine, başvurulan
          projeye özel olarak KOSGEB kurulu karar veriyordu.
        </p>
      </section>

      {/* 4. NEDEN KAPANDI */}
      <section id="neden-kapandi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Program Neden ve Ne Zaman Kapandı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB, 2024 ve 2025 yılları boyunca destek portföyünü kapsamlı
          şekilde yeniledi. Bu süreçte İşletme Geliştirme Destek Programı,
          KOBİGEL - KOBİ Gelişim Destek Programı, Geleneksel/İleri Girişimci
          Destek Programı gibi uzun yıllardır uygulanan birçok program
          kapatıldı ve yerlerine Girişimci Destek Programı, Kapasite
          Geliştirme Destek Programı gibi yeni, daha az sayıda ama daha geniş
          kapsamlı programlar getirildi. İş Birliği Destek Programı da bu
          yenileme dalgasının bir parçası olarak, KOSGEB&apos;in resmî
          &quot;Yürürlükten Kaldırılan Destekler&quot; sayfasında belirtildiği
          üzere <strong>28.02.2025 tarihinde başvuruya kapatıldı</strong>.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            KOSGEB, kapanış gerekçesini programa özel ayrı bir duyuruyla
            detaylandırmadı; genel eğilim, birbiriyle örtüşen çok sayıda dar
            kapsamlı programı azaltıp KOBİ&apos;lerin tek bir başvuruyla daha
            geniş bir ihtiyaç setini karşılayabileceği &quot;şemsiye&quot;
            programlara geçiş yönünde. Kapasite Geliştirme Destek
            Programı&apos;nın 2024&apos;te devreye girip birçok eski
            programın (İşletme Geliştirme, KOBİGEL dahil) işlevini
            devralması bu eğilimin en net örneği.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kapanış yalnızca <strong>yeni başvuru alımını</strong> durdurdu.
          28 Şubat 2025&apos;ten önce başvurusu onaylanmış ve destek süreci
          devam eden işletmeler, taahhütlerini tamamlayana kadar
          projelerine ait ödemeleri almaya devam ediyor. Yani hâlihazırda bu
          programdan yararlanıyorsanız, kapanış kararı sizi doğrudan
          etkilemiyor.
        </p>
      </section>

      {/* 5. YERİNE NE VAR */}
      <section id="yerine-ne-var" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yerine Ne Var? Ortak Proje Arayan KOBİ&apos;ler Ne Yapmalı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB, İş Birliği Destek Programı&apos;nın birebir yerine geçen,
          aynı isim ve aynı kapsamda yeni bir program duyurmadı. Ancak ortak
          proje ihtiyacının niteliğine göre bakılabilecek birkaç güncel
          seçenek var:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Tedarikçi geliştirme amaçlı iş birlikleri
            </h3>
            <p className="leading-7 text-gray-700">
              Halihazırda aktif olan{" "}
              <Link href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026" className="text-orange-600 underline">
                Kapasite Geliştirme Destek Programı
              </Link>
              , tedarikçi geliştirme amaçlı paydaş kuruluşlarla protokol
              imzalanmış sektörlerde iş birliği yapan işletmeleri, diğer
              başvuranlardan farklı olarak &quot;hızlı büyüyen işletme&quot;
              şartından muaf tutuyor. Ortak bir tedarik zinciri geliştirme
              projeniz varsa, önce bu programın kapsamındaki protokollü
              sektörler listesinde yer alıp almadığınızı kontrol etmeniz
              gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              İhracat odaklı grup/kümelenme projeleri
            </h3>
            <p className="leading-7 text-gray-700">
              Amacınız ortak üretimden çok, birlikte pazara açılmak ve
              ihracat kapasitesi geliştirmekse, Ticaret Bakanlığı&apos;nın
              UR-GE (Uluslararası Rekabetçiliğin Geliştirilmesi) projeleri
              hâlâ aktif ve doğrudan işletme gruplarının bir araya gelerek
              başvurduğu bir destek modeli. İş Birliği Destek
              Programı&apos;ndaki &quot;birden fazla işletme, ortak proje&quot;
              mantığına en yakın, hâlâ yürürlükte olan yapı bu.
            </p>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Sektörel eğitim/danışmanlık merkezi kurmak isteyenler
            </h3>
            <p className="leading-7 text-gray-700">
              Amacınız birden fazla işletmenin ortak kullanacağı bir eğitim
              veya danışmanlık merkezi kurmaksa, KOSGEB&apos;in{" "}
              <Link href="/blog/kosgeb-segem-destek-programi-kobi-basvurabilir-mi" className="text-orange-600 underline">
                SEGEM - Sektörel Gelişim Merkezi Destek Programı
              </Link>
              , benzer bir &quot;işletici kuruluş&quot; mantığıyla hâlâ
              başvuruya açık. Ancak dikkat: SEGEM&apos;de destekten doğrudan
              yararlanan taraf tek başına bir KOBİ değil, işletici kuruluşu
              kuran anonim şirket; İş Birliği Destek Programı&apos;ndan farklı
              bir yararlanıcı modeli var.
            </p>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Ortak makine/yatırım maliyetini tek başına karşılamak
            </h3>
            <p className="leading-7 text-gray-700">
              İş Birliği Destek Programı kapandığı için, birden fazla
              işletmenin ortaklığı olmadan tek başınıza büyük bir makine/
              teçhizat yatırımı yapmayı planlıyorsanız, Kapasite Geliştirme
              Destek Programı&apos;nın 20-30 milyon TL&apos;lik kredi
              limitine veya yatırım büyüklüğünüze göre Yatırım Teşvik
              Belgesi&apos;ne bakmanız daha uygun olabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 6. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Program yeni başvuruya kapalı; internette &quot;başvuru
            formu&quot; veya &quot;şartlar&quot; başlıklı eski içeriklere
            güvenmeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kapanış öncesi onaylanmış projeler etkilenmiyor, ödemeler
            devam ediyor
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ 2022 öncesi ve sonrası rakamlar (destek oranı, üst limit,
            işletme sayısı şartı) birbirinden farklı, hangi döneme ait
            olduğunuza dikkat edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ortak proje ihtiyacınızın niteliğine göre Kapasite Geliştirme,
            SEGEM veya UR-GE gibi hâlâ açık alternatiflere bakın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ KOSGEB programın yeniden açılacağına dair resmî bir takvim
            paylaşmadı; &quot;yakında geri gelecek&quot; iddialarına
            temkinli yaklaşın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Güncel durumu her zaman kosgeb.gov.tr üzerinden teyit edin,
            üçüncü taraf sitelerin güncelleme tarihine güvenmeyin
          </div>
        </div>
      </section>

      {/* 7. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/6850/is-birligi-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - İş Birliği Destek Programı (resmî destek sayfası)
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekler/6530/yururlukten-kaldirilan-destekler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Yürürlükten Kaldırılan Destekler Listesi
            </a>
          </li>
          <li>
            <a
              href="https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/%C4%B0s%20Birligi/%C4%B0%C5%9Fbirli%C4%9Fi_Destek_Program%C4%B1_Uygulama_Esaslar%C4%B1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - İş Birliği Destek Programı Uygulama Esasları (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/detay/6537/isbirligi-gucbirligi-ortaklik-modelleri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - İşbirliği-Güçbirliği Ortaklık Modelleri
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekler/3/destekler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Güncel Destek Programları Listesi
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB Resmî Web Sitesi
            </a>
          </li>
        </ul>
      </section>

      {/* 8. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOSGEB İş Birliği Destek Programı&apos;na şu an başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. KOSGEB&apos;in resmî sitesine göre program 28.02.2025
              tarihinde başvuruya kapatıldı ve &quot;Yürürlükten Kaldırılan
              Destekler&quot; listesine alındı. Yeni başvuru kabul edilmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Program tamamen mi bitti, yoksa geçici bir süre için mi kapalı?
            </h3>
            <p className="leading-8 text-gray-700">
              KOSGEB bu programı, birçok başka destekle birlikte
              &quot;yürürlükten kaldırılan&quot; kategorisine aldı. Bu, dönemsel
              çağrı kapanışı (ör. yılda birkaç kez açılıp kapanan bir program)
              değil, programın uygulamadan tamamen kaldırıldığı anlamına
              geliyor. KOSGEB yeniden açılacağına dair resmî bir takvim
              paylaşmadı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Daha önce onaylanan bir İş Birliği projem var, desteğim kesildi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Kapanış yalnızca yeni başvuru kabulünü durduruyor.
              28 Şubat 2025&apos;ten önce onaylanmış ve destek süreci devam
              eden projeler, taahhüt ve ödeme süreçlerini kendi programı
              kapsamında tamamlıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İş Birliği Destek Programı ile İşbirliği-Güçbirliği Destek
              Programı aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Aynı temel mantığa (birden fazla işletmenin ortak proje
              yürütmesi) dayanıyor ama farklı dönemlerin farklı kurallarına
              sahip. İşbirliği-Güçbirliği ismi, 3 Haziran 2022&apos;deki
              güncellemeden önceki döneme ait; sonrasında program &quot;İş
              Birliği Destek Programı&quot; adıyla ve güncellenmiş oran/
              limitlerle devam etti.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ortak üretim/ortak yatırım için başka hangi destek programına
              bakabilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              İhtiyacınızın niteliğine göre değişir: tedarikçi geliştirme
              amaçlı iş birlikleri için Kapasite Geliştirme Destek
              Programı&apos;nın ilgili istisnasına, ihracat odaklı grup
              projeleri için Ticaret Bakanlığı&apos;nın UR-GE projelerine,
              ortak bir eğitim/danışmanlık merkezi kurmak için SEGEM Destek
              Programı&apos;na bakabilirsiniz. Hiçbiri İş Birliği Destek
              Programı&apos;nın birebir muadili değil, her birinin kendi
              şartları var.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Programın güncel durumunu nereden teyit edebilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              En güvenilir kaynak her zaman kosgeb.gov.tr&apos;nin kendi
              destek sayfaları ve &quot;Yürürlükten Kaldırılan Destekler&quot;
              listesi. Üçüncü taraf danışmanlık sitelerindeki güncelleme
              tarihleri yanıltıcı olabilir; bu yazıyı hazırlarken de resmî
              olmayan bazı kaynaklarda programın hâlâ aktif gösterildiğini,
              ancak KOSGEB&apos;in kendi sitesinin bunu doğrulamadığını
              gördük.
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
          KOSGEB İş Birliği Destek Programı, uzun yıllar KOBİ&apos;lerin ortak
          üretim ve ortak yatırım projelerinde başvurduğu önemli bir
          kaynaktı, ama 28 Şubat 2025 itibarıyla başvuruya kapandı ve
          KOSGEB&apos;in birebir bir yenisini duyurmadığı bir boşluk bıraktı.
          Bu, ortak proje fikri olan bir KOBİ&apos;nin elinin boş kaldığı
          anlamına gelmiyor; ihtiyacın niteliğine göre Kapasite Geliştirme,
          SEGEM veya UR-GE gibi hâlâ yürürlükte olan programlardan biri
          uygun olabilir. Önemli olan, artık var olmayan bir programın eski
          şartlarına göre plan yapmak yerine, güncel destek haritasında
          nerede durduğunuzu doğru tespit etmek.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin ortak proje ihtiyacına en uygun destek programını
          belirlemekten başvuru sürecinin yürütülmesine kadar Koray Akdağ /
          Sistem Global Danışmanlık olarak yanınızdayız. Ayrı bir danışmanlık
          firması aramanıza gerek kalmadan, doğru programın tespitini de
          başvuru sonrasındaki süreci de tek noktadan yürütebiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı</h3>
          </Link>
          <Link
            href="/blog/kosgeb-segem-destek-programi-kobi-basvurabilir-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • SEGEM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB SEGEM Destek Programı Nedir?</h3>
          </Link>
          <Link
            href="/blog/makine-ekipman-yatirimi-kosgeb-mi-yatirim-tesvik-belgesi-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • YATIRIM TEŞVİK BELGESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Makine/Ekipman Yatırımı: KOSGEB mi YTB mi?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
