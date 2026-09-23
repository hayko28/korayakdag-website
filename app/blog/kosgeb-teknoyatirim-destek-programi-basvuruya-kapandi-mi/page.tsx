import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB TEKNOYATIRIM Destek Programı Hâlâ Açık mı? | Koray Akdağ",
  description:
    "KOSGEB Teknolojik Ürün Yatırım (TEKNOYATIRIM) Destek Programı 30.06.2025 itibarıyla başvuruya kapatıldı ve yürürlükten kaldırılan destekler listesine alındı. Programın eski kapsamı, destek tutarları ve Ar-Ge/Ür-Ge sonucu ürününü seri üretime geçirmek isteyen KOBİ'lerin şimdi bakması gereken güncel seçenekler.",
  keywords: [
    "KOSGEB TEKNOYATIRIM",
    "Teknolojik Ürün Yatırım Destek Programı",
    "KOBİ Teknolojik Ürün Yatırım Destek Programı kapandı mı",
    "TEKNOYATIRIM başvuru şartları",
    "Ar-Ge sonucu ürün yatırım desteği",
    "KOSGEB yürürlükten kaldırılan destekler",
    "teknolojik ürün ticarileştirme desteği 2026",
  ],
  alternates: {
    canonical: "/blog/kosgeb-teknoyatirim-destek-programi-basvuruya-kapandi-mi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Teknolojik Ürün Yatırım (TEKNOYATIRIM) Destek Programı Hâlâ Başvuruya Açık mı? Kapanma Tarihi ve Ar-Ge Sonrası Ürününüz İçin Alternatifler"
      description="Ar-Ge, Ür-Ge veya inovasyon faaliyeti sonucu ortaya çıkan bir ürünü seri üretime geçirmek isteyen KOBİ'lerin başvurduğu KOSGEB TEKNOYATIRIM Destek Programı, 30 Haziran 2025'te başvuruya kapatıldı. Programın eski kapsamını, destek tutarlarını ve kapanışın ardından benzer bir yatırım ihtiyacı olan KOBİ'lerin nereye bakması gerektiğini güncel kaynaklarla derledik."
      category="KOSGEB • TEKNOYATIRIM DESTEK PROGRAMI • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="kosgeb-teknoyatirim-destek-programi-basvuruya-kapandi-mi"
      programDurumu="kapali"
      coverImage="https://images.unsplash.com/photo-1532186773960-85649e5cb70b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Ar-Ge Sonrası Ürününüzün Yatırımı İçin Doğru Programı Birlikte Belirleyelim"
      ctaText="TEKNOYATIRIM kapansa da Ar-Ge/Ür-Ge sürecinizin sonunda ortaya çıkan ürünü seri üretime geçirme ihtiyacınız bitmedi. Şirketinizin bugün hangi güncel KOSGEB programına veya Yatırım Teşvik Belgesi'ne uygun olduğunu birlikte değerlendirelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Ar-Ge veya Ür-Ge sürecinizin sonunda elinizde satılabilir bir ürün
        varsa ve bu ürünü seri üretime geçirmek için yatırım desteği
        arıyorsanız, muhtemelen &quot;KOSGEB TEKNOYATIRIM&quot; ismini
        duymuşsunuzdur. Ancak internette dolaşan çoğu içerik, bu programın
        hâlâ eskisi gibi açık olduğunu varsayıyor. Gerçek durum farklı.
        KOSGEB, Teknolojik Ürün Yatırım (TEKNOYATIRIM) Destek
        Programı&apos;nı <strong>30 Haziran 2025</strong> itibarıyla
        başvuruya kapattı ve kendi resmî sitesinde &quot;yürürlükten
        kaldırılan destekler&quot; listesine aldı. Bu yazıda programın eski
        kapsamını, kimlerin yararlanabildiğini, destek tutarlarını ve daha
        önemlisi, Ar-Ge/Ür-Ge sonucu bir ürünü olup şimdi yatırım desteği
        arayan bir KOBİ&apos;nin hangi güncel seçeneklere bakması
        gerektiğini KOSGEB&apos;in resmî kaynaklarına dayanarak ele
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
            &quot;Yürürlükten Kaldırılan Destekler&quot; listesine göre
            TEKNOYATIRIM <strong>30.06.2025 tarihinde başvuruya
            kapatılmıştır</strong>.
          </li>
          <li>
            ✔ Program, Ar-Ge/Ür-Ge/inovasyon faaliyeti sonucu ortaya çıkan
            ürünlerin veya orta-yüksek/yüksek teknoloji alanında yer alan ve
            cari işlemler hesabına katkı sağlayacak ürünlerin{" "}
            <strong>üretimini ve ticarileştirilmesini</strong> destekliyordu.
          </li>
          <li>
            ✔ Son yürürlükteki tutarlara göre düşük/orta-düşük teknolojide
            toplam 2.000.000 TL, orta-yüksek/yüksek teknolojide toplam
            10.000.000 TL&apos;ye kadar geri ödemeli + geri ödemesiz destek
            veriliyordu.
          </li>
          <li>
            ✔ Makine-teçhizat ve yazılım giderlerinde destek oranı %60
            (%30&apos;u geri ödemesiz, %70&apos;i geri ödemeli), personel
            giderinde ise %100 geri ödemesizdi.
          </li>
          <li>
            ✔ Kapanış öncesinde başvurusu onaylanmış ve yatırım süreci devam
            eden projeler etkilenmiyor; bu işletmeler taahhütlerini
            tamamlayana kadar destek almaya devam ediyor. Kapanan yalnızca{" "}
            <strong>yeni başvuru alımı</strong>.
          </li>
          <li>
            ✔ KOSGEB şu an TEKNOYATIRIM&apos;ın birebir yerine geçen yeni bir
            program ilan etmedi. Benzer bir yatırım ihtiyacı olan KOBİ&apos;
            ler, ihtiyacın niteliğine göre Kapasite Geliştirme Destek
            Programı&apos;na, Stratejik Ürün Destek Programı&apos;na veya
            Yatırım Teşvik Belgesi&apos;ne yönelebilir.
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
            3. Destek Tutarları ve Oranları
          </Link>
          <Link href="#neden-kapandi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Program Neden ve Ne Zaman Kapandı?
          </Link>
          <Link href="#yerine-ne-var" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Yerine Ne Var? Ar-Ge Sonrası Ürününüz İçin Ne Yapmalısınız?
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
          KOSGEB&apos;in resmî tanımına göre KOBİ Teknolojik Ürün Yatırım
          (TEKNOYATIRIM) Destek Programı&apos;nın amacı, &quot;Ar-Ge/Ür-Ge/
          inovasyon faaliyetleri sonucu ortaya çıkan ürünler ile orta-yüksek/
          yüksek teknoloji alanında yer alan ve cari işlemler hesabına katkı
          sağlayacak ürünlerin üretimini ve ticarileştirilmesini
          sağlamaktı&quot;. Sadeleştirirsek: elinizde artık bir prototip veya
          Ar-Ge çalışmasından öte, seri üretime geçirilebilir bir ürün
          olduğunda, bu ürünü fiilen üretecek makine-teçhizat ve yazılım
          yatırımının önemli bir kısmını KOSGEB karşılıyordu.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Program, KOSGEB&apos;in destek portföyünde uzun yıllar yer aldı ve
          zaman içinde birkaç kez güncellendi; ilk uygulamalardaki 2019
          revizyonunda üst limitler 1.000.000 TL ile 5.000.000 TL arasında
          seyrederken, program kapanmadan önceki son halinde bu tutarlar
          2.000.000 TL ile 10.000.000 TL&apos;ye yükseltilmişti. Yani
          internette hâlâ dolaşan bazı içerikler, farklı yıllara ait farklı
          rakamlarla yazılmış olabilir.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            TEKNOYATIRIM, klasik bir Ar-Ge desteği değildi. Ar-Ge/Ür-Ge
            çalışmasının kendisini değil, bu çalışmanın{" "}
            <strong>sonucunda ortaya çıkan ürünün</strong> fabrikada seri
            üretime geçirilmesi için gereken yatırımı destekliyordu. Bu
            nedenle başvuru için önce elinizde somut bir ürün ve bu ürünün
            teknik kökenini kanıtlayan bir belge olması gerekiyordu.
          </p>
        </div>
      </section>

      {/* 2. KİMLER BAŞVURUYORDU */}
      <section id="kimler-basvuruyordu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabiliyordu?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program, KOBİ ölçeğindeki işletmelerin iki farklı yoldan birini
          kullanarak başvurmasına izin veriyordu:
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🔬 Ar-Ge/Ür-Ge/İnovasyon Sonucu Ürün Yolu
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Ürünün, KOSGEB destekli bir Ar-Ge/inovasyon projesinden çıkmış olması</li>
              <li>✔ Veya başka bir kamu kurum/kuruluşunca desteklenen bir Ar-Ge projesinden çıkmış olması</li>
              <li>✔ Veya bir patent belgesine, doktora tez çalışmasına ya da teknolojik ürün deneyim belgesine dayanması</li>
              <li>✔ Veya kamu Ar-Ge enstitüleri/merkezlerinde ya da teknoparklarda tamamlanmış bir Ar-Ge projesi sonucu ortaya çıkmış olması</li>
              <li>✔ Destekleyici belgenin, başvuru tarihinden geriye doğru en fazla 5 yıl içinde alınmış olması şartı</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              📈 Orta-Yüksek/Yüksek Teknoloji Ürünü Yolu
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Ayrı bir Ar-Ge/patent belgesi aranmadan, ürünün OECD teknoloji sınıflandırmasına göre orta-yüksek veya yüksek teknoloji sektöründe yer alması</li>
              <li>✔ Ürünün, Türkiye&apos;nin cari işlemler hesabına (ithalat ikamesi veya ihracat yoluyla) katkı sağlayacak nitelikte olması</li>
              <li>✔ Bu yol, doğrudan Ar-Ge çıktısı olmasa da teknolojik ağırlığı yüksek ürün üreten işletmeleri kapsamayı amaçlıyordu</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 mb-8 leading-8 text-gray-700">
          Her iki yolda da başvuran işletmenin KOBİ tanımına uyması ve
          yatırım projesinin belirlenen üst limitler ve süre içinde
          tamamlanabilir olması gerekiyordu. Yatırım projesi süresi azami 36
          ay olarak belirlenmişti.
        </p>

        <div className="mt-4 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: TEKNOYATIRIM ile Ar-Ge, Ür-Ge ve İnovasyon
            Destek Programı Aynı Şey Değil
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            KOSGEB&apos;in hâlâ aktif olan{" "}
            <Link href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026" className="text-orange-600 underline">
              Ar-Ge, Ür-Ge ve İnovasyon Destek Programı
            </Link>{" "}
            ile artık kapalı olan TEKNOYATIRIM sık sık birbirine karıştırılır,
            çünkü ikisi de &quot;teknolojik ürün&quot; kavramı etrafında
            şekillenir. Aralarındaki fark aşamadadır: Ar-Ge/Ür-Ge/İnovasyon
            Destek Programı, henüz ürün ortaya çıkmadan{" "}
            <strong>geliştirme faaliyetinin kendisini</strong> (personel,
            malzeme, yazılım, danışmanlık gibi Ar-Ge giderlerini) destekler.
            TEKNOYATIRIM ise bu geliştirme sürecinin{" "}
            <strong>sonucunda ortaya çıkan ürünü</strong> fabrikada seri
            üretime geçirecek makine-teçhizat yatırımını destekliyordu. Bir
            işletme önce Ar-Ge/Ür-Ge desteğinden yararlanıp ürünü
            geliştiriyor, ardından TEKNOYATIRIM&apos;a başvurup bu ürünü
            üretime geçiriyordu; ikisi art arda gelen iki farklı aşamaydı.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Bu tip &quot;ürünün kökenini belgeleme&quot; şartı taşıyan
            programlarda en sık gözden kaçan nokta, destekleyici belgenin
            tarihidir. Beş yıllık geriye dönük süre sınırı, elinde eski bir
            patent veya eski bir Ar-Ge proje sonuç raporu bulunan ama
            yatırım kararını geciktiren işletmeleri başvuru aşamasında
            zorluyordu. Ar-Ge/Ür-Ge sonucu bir ürünü olan işletmelerin,
            ürünün üretime geçiş kararını Ar-Ge sürecinin bitişinden çok
            uzatmadan alması, hem belge geçerliliği hem de rekabet açısından
            önemlidir.
          </p>
        </div>
      </section>

      {/* 3. DESTEK UNSURLARI */}
      <section id="destek-unsurlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Tutarları ve Oranları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in resmî kaynaklarına göre program, kapanmadan önceki
          son halinde şu yapıyla işliyordu:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Teknoloji Seviyesi</th>
                <th className="p-5">Geri Ödemeli</th>
                <th className="p-5">Geri Ödemesiz</th>
                <th className="p-5">Toplam Üst Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Düşük / Orta-Düşük Teknoloji</td>
                <td className="p-5">1.400.000 TL</td>
                <td className="p-5">600.000 TL</td>
                <td className="p-5 font-bold">2.000.000 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Orta-Yüksek / Yüksek Teknoloji</td>
                <td className="p-5">7.000.000 TL</td>
                <td className="p-5">3.000.000 TL</td>
                <td className="p-5 font-bold">10.000.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Kaynak: KOSGEB resmî TEKNOYATIRIM destek programı sayfası. Bu
          tutarlar programın yıllar içindeki son güncellemesine ait; ilk
          uygulama yıllarında (2019 öncesi) üst limitler daha düşüktü.
        </p>
        <p className="mt-8 mb-6 leading-8 text-gray-700">
          Gider kalemlerine göre destek oranları şöyleydi:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Makine-Teçhizat</h3>
            <p className="text-gray-700">%60 destek (%30 geri ödemesiz + %70 geri ödemeli)</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Yazılım Giderleri</h3>
            <p className="text-gray-700">%60 destek, aynı geri ödemeli/geri ödemesiz yapı</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Personel Gideri</h3>
            <p className="text-gray-700">%100 geri ödemesiz destek</p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Yerli malı belgeli makine/teçhizat alımında geri ödemesiz destek
          oranına ek %15 ilave uygulanıyordu. Yatırım projesi süresi azami 36
          ay, ödemeler ise projenin tamamlanmasını beklemeden dönemsel
          hakediş esasıyla yapılıyordu. Başvurular çağrı dönemi olmadan yıl
          boyunca e-Devlet üzerinden alınıyordu.
        </p>
      </section>

      {/* 4. NEDEN KAPANDI */}
      <section id="neden-kapandi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Program Neden ve Ne Zaman Kapandı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB, 2024 ve 2025 yılları boyunca destek portföyünü kapsamlı
          şekilde yeniledi. Bu süreçte KOBİGEL, İşletme Geliştirme Destek
          Programı, İş Birliği Destek Programı gibi uzun yıllardır uygulanan
          birçok program kapatıldı ve yerlerine Girişimci Destek Programı,
          Kapasite Geliştirme Destek Programı gibi daha az sayıda ama daha
          geniş kapsamlı programlar getirildi. TEKNOYATIRIM da bu yenileme
          dalgasının bir parçası olarak, KOSGEB&apos;in resmî &quot;Yürürlükten
          Kaldırılan Destekler&quot; sayfasında belirtildiği üzere{" "}
          <strong>30.06.2025 tarihinde başvuruya kapatıldı</strong>.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            KOSGEB, kapanış gerekçesini programa özel ayrı bir duyuruyla
            detaylandırmadı. Genel eğilim, birbiriyle kısmen örtüşen dar
            kapsamlı programları azaltıp, KOBİ&apos;lerin tek bir başvuruyla
            makine-teçhizat, yazılım ve personel giderlerini kapsayan daha
            geniş &quot;şemsiye&quot; programlara yönlendirilmesi. Kapasite
            Geliştirme Destek Programı&apos;nın makine-teçhizat ve yazılım
            giderlerini içeren yapısı, bu eğilimin en net örneği.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kapanış yalnızca <strong>yeni başvuru alımını</strong> durdurdu. 30
          Haziran 2025&apos;ten önce başvurusu onaylanmış ve yatırım süreci
          devam eden işletmeler, taahhütlerini tamamlayana kadar
          projelerine ait ödemeleri almaya devam ediyor. Hâlihazırda bu
          programdan yararlanıyorsanız, kapanış kararı sizi doğrudan
          etkilemiyor.
        </p>
      </section>

      {/* 5. YERİNE NE VAR */}
      <section id="yerine-ne-var" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yerine Ne Var? Ar-Ge Sonrası Ürününüz İçin Ne Yapmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB, TEKNOYATIRIM&apos;ın birebir yerine geçen, aynı isim ve
          aynı kapsamda yeni bir program duyurmadı. Ancak yatırım ihtiyacının
          niteliğine göre bakılabilecek birkaç güncel seçenek var:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Genel üretim kapasitesi yatırımı
            </h3>
            <p className="leading-7 text-gray-700">
              Hâlihazırda aktif olan{" "}
              <Link href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026" className="text-orange-600 underline">
                Kapasite Geliştirme Destek Programı
              </Link>
              , yeni teknoloji yatırımıyla üretim kapasitesini artıran
              işletmelere makine-teçhizat, yazılım, personel ve hizmet alımı
              desteği sunuyor. TEKNOYATIRIM&apos;dan farklı olarak destek,
              hibe değil, bankadan kullanılan kredinin faiz/kâr payı
              giderinin karşılanması esasına dayanıyor; 20-30 milyon TL
              arasında kredi limiti ve 20 puanlık geri ödemesiz destek
              sağlıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              HAMLE onaylı stratejik ürün üretenler
            </h3>
            <p className="leading-7 text-gray-700">
              Ürününüz Teknoloji Odaklı Sanayi Hamlesi (HAMLE) Programı çağrı
              planında onaylanmışsa,{" "}
              <Link href="/blog/kosgeb-stratejik-urun-destek-programi-2026" className="text-orange-600 underline">
                Stratejik Ürün Destek Programı
              </Link>{" "}
              size özel bağımsız değerlendirme ve personel gideri desteği
              sunuyor. Ancak bu program yalnızca HAMLE onaylı ürünlere özel;
              TEKNOYATIRIM&apos;ın kapsadığı tüm Ar-Ge/Ür-Ge sonucu ürünleri
              kapsamıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Ürün henüz geliştirme aşamasındaysa
            </h3>
            <p className="leading-7 text-gray-700">
              Ürününüz henüz seri üretime hazır değil, hâlâ Ar-Ge/Ür-Ge
              aşamasındaysa, önce{" "}
              <Link href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026" className="text-orange-600 underline">
                Ar-Ge, Ür-Ge ve İnovasyon Destek Programı
              </Link>
              &apos;na başvurmanız gerekir. Bu program geliştirme
              faaliyetinin kendisini destekliyor; ürün olgunlaştıktan sonra
              üretim yatırımı için diğer seçeneklere bakmanız gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Büyük ölçekli yatırımlar için
            </h3>
            <p className="leading-7 text-gray-700">
              Yatırım tutarınız KOSGEB&apos;in üst limitlerinin çok
              üzerindeyse, Sanayi ve Teknoloji Bakanlığı&apos;nın{" "}
              <Link href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026" className="text-orange-600 underline">
                Yatırım Teşvik Belgesi
              </Link>{" "}
              sistemine bakmanız daha uygun olabilir. KDV istisnası, gümrük
              vergisi muafiyeti ve bölgesel vergi/SGK destekleri, büyük
              ölçekli teknolojik ürün yatırımlarında KOSGEB desteklerinden
              çok daha yüksek bir toplam katkı sağlayabiliyor.
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
            ⚠️ Farklı yıllara (2019, 2020, kapanış öncesi son hali) ait
            rakamlar birbirinden farklı, hangi döneme ait olduğuna dikkat
            edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yatırım ihtiyacınızın niteliğine göre Kapasite Geliştirme,
            Stratejik Ürün veya Yatırım Teşvik Belgesi&apos;ne bakın
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
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/6443/kobi-teknolojik-urun-yatirim-teknoyatirim-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - KOBİ Teknolojik Ürün Yatırım (TEKNOYATIRIM) Destek
              Programı (resmî destek sayfası)
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekler/6530/yururlukten-kaldirilan-destekler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Yürürlükten Kaldırılan Destekler Listesi (kapanış
              tarihi: 30.06.2025)
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
              href="https://www.yatirimadestek.gov.tr/pdf/assets/upload/dosyalar/detay_kosgeb_kobi_teknoyatirim_destek_programi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Cumhurbaşkanlığı Yatırım Ofisi - KOBİ TEKNOYATIRIM Destek
              Programı Bilgi Formu
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
              KOSGEB TEKNOYATIRIM Destek Programı&apos;na şu an başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. KOSGEB&apos;in resmî sitesine göre program 30.06.2025
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
              &quot;yürürlükten kaldırılan&quot; kategorisine aldı. Bu,
              dönemsel çağrı kapanışı değil, programın uygulamadan tamamen
              kaldırıldığı anlamına geliyor. KOSGEB yeniden açılacağına dair
              resmî bir takvim paylaşmadı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Daha önce onaylanan bir TEKNOYATIRIM projem var, desteğim kesildi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Kapanış yalnızca yeni başvuru kabulünü durduruyor. 30
              Haziran 2025&apos;ten önce onaylanmış ve yatırım süreci devam
              eden projeler, taahhüt ve ödeme süreçlerini kendi programı
              kapsamında tamamlıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TEKNOYATIRIM ile Ar-Ge, Ür-Ge ve İnovasyon Destek Programı aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Ar-Ge, Ür-Ge ve İnovasyon Destek Programı, ürün henüz
              ortaya çıkmadan geliştirme faaliyetinin kendisini destekliyor
              ve hâlâ yürürlükte. TEKNOYATIRIM ise bu geliştirme sürecinin
              sonucunda ortaya çıkan ürünün seri üretime geçirilmesi için
              yapılan yatırımı destekliyordu ve artık kapalı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ar-Ge sonucu ürettiğim ürünün seri üretim yatırımı için başka
              hangi destek programına bakabilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              İhtiyacınızın büyüklüğüne ve niteliğine göre değişir: genel
              üretim kapasitesi yatırımları için Kapasite Geliştirme Destek
              Programı&apos;na, HAMLE onaylı ürünler için Stratejik Ürün
              Destek Programı&apos;na, büyük ölçekli yatırımlar için Yatırım
              Teşvik Belgesi&apos;ne bakabilirsiniz. Hiçbiri
              TEKNOYATIRIM&apos;ın birebir muadili değil, her birinin kendi
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
              listesi. Bu yazıyı hazırlarken de birçok üçüncü taraf
              danışmanlık sitesinde ve hatta KOSGEB&apos;in kendi eski
              destek sayfasının arşivlenmiş halinde programın hâlâ aktif
              gösterildiğini, ancak resmî kapanış listesinin bunu
              doğrulamadığını gördük.
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
          KOSGEB TEKNOYATIRIM Destek Programı, Ar-Ge/Ür-Ge sonucu ortaya
          çıkan ürünleri seri üretime geçiren KOBİ&apos;ler için önemli bir
          kaynaktı, ama 30 Haziran 2025 itibarıyla başvuruya kapandı ve
          KOSGEB&apos;in birebir bir yenisini duyurmadığı bir boşluk
          bıraktı. Bu, elinde hazır bir ürün olan bir KOBİ&apos;nin elinin
          boş kaldığı anlamına gelmiyor; yatırımın büyüklüğüne ve ürünün
          niteliğine göre Kapasite Geliştirme, Stratejik Ürün veya Yatırım
          Teşvik Belgesi gibi hâlâ yürürlükte olan programlardan biri uygun
          olabilir. Önemli olan, artık var olmayan bir programın eski
          şartlarına göre plan yapmak yerine, güncel destek haritasında
          nerede durduğunuzu doğru tespit etmek.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin Ar-Ge sonrası yatırım ihtiyacına en uygun destek
          programını belirlemekten başvuru sürecinin yürütülmesine kadar
          Koray Akdağ / Sistem Global Danışmanlık olarak yanınızdayız. Ayrı
          bir danışmanlık firması aramanıza gerek kalmadan, doğru programın
          tespitini de başvuru sonrasındaki süreci de tek noktadan
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
            href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
          </Link>
          <Link
            href="/blog/kosgeb-stratejik-urun-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • TEKNOLOJİ HAMLESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Stratejik Ürün Destek Programı</h3>
          </Link>
          <Link
            href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
