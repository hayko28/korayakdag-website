import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB KOBİGEL Destek Programı Hâlâ Açık mı? | Koray Akdağ",
  description:
    "KOBİGEL - KOBİ Gelişim Destek Programı 15.04.2024 itibarıyla başvuruya kapatıldı ve yürürlükten kaldırılan destekler listesine alındı. Programın eski kapsamı, proje teklif çağrısı mantığı, destek oranları ve KOBİ'lerin şimdi hangi güncel seçeneklere bakması gerektiği.",
  keywords: [
    "KOBİGEL KOBİ Gelişim Destek Programı",
    "KOSGEB gelişim destek programı",
    "KOBİGEL kapandı mı",
    "KOSGEB proje teklif çağrısı",
    "KOSGEB yürürlükten kaldırılan destekler",
    "KOBİGEL yerine hangi destek",
    "KOSGEB Kapasite Geliştirme Destek Programı",
  ],
  alternates: {
    canonical: "/blog/kosgeb-kobigel-kobi-gelisim-destek-programi-basvuruya-kapandi-mi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB KOBİGEL - KOBİ Gelişim Destek Programı Hâlâ Başvuruya Açık mı? Kapanma Tarihi ve Şimdi Bakılması Gereken Seçenekler"
      description="KOBİ'lerin proje teklif çağrıları üzerinden rekabet gücünü ve katma değerini artırmasını hedefleyen KOBİGEL - KOBİ Gelişim Destek Programı, 15 Nisan 2024'te başvuruya kapatıldı. Programın eski kapsamını, destek oranlarını ve kapanışın ardından benzer bir yatırım/gelişim projesi olan KOBİ'lerin nereye bakması gerektiğini güncel kaynaklarla derledik."
      category="KOSGEB • KOBİGEL DESTEK PROGRAMI • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="kosgeb-kobigel-kobi-gelisim-destek-programi-basvuruya-kapandi-mi"
      programDurumu="kapali"
      coverImage="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Gelişim Projeniz İçin Hangi Destek Uygun, Birlikte Bakalım"
      ctaText="KOBİGEL kapansa da KOBİ'lerin ölçek büyütme, dijitalleşme ve rekabet gücünü artırma ihtiyacı bitmedi. Şirketinizin bugün hangi güncel KOSGEB destek programına uygun olduğunu birlikte değerlendirelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Google&apos;da &quot;KOSGEB gelişim destek programı&quot; veya
        &quot;KOBİGEL&quot; aratan bir KOBİ sahibinin karşısına genellikle
        eski tarihli, hâlâ &quot;aktif&quot; gösterilen içerikler çıkıyor.
        Oysa KOSGEB, uzun yıllar KOBİ&apos;lerin proje bazlı büyüme
        yatırımlarında başvurduğu KOBİGEL - KOBİ Gelişim Destek
        Programı&apos;nı 15 Nisan 2024 itibarıyla başvuruya kapattı ve
        programı kendi resmî sitesinde &quot;yürürlükten kaldırılan
        destekler&quot; listesine aldı. Bu yazıda programın eski kapsamını,
        kimlerin yararlanabildiğini, destek oranlarını ve daha önemlisi, şu
        an benzer bir gelişim/büyüme projesi planlayan bir KOBİ&apos;nin
        hangi güncel seçeneklere bakması gerektiğini KOSGEB&apos;in resmî
        kaynaklarına dayanarak ele alıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Hayır, program artık başvuruya açık değil. KOSGEB&apos;in
            resmî &quot;Yürürlükten Kaldırılan Destekler&quot; listesine göre
            KOBİGEL - KOBİ Gelişim Destek Programı{" "}
            <strong>15.04.2024 tarihinde başvuruya kapatılmıştır</strong>.
          </li>
          <li>
            ✔ Program, tek başvuru penceresi değil, dönemsel olarak açılan{" "}
            <strong>Proje Teklif Çağrıları</strong> üzerinden yürütülüyordu;
            KOBİ&apos;ler bu çağrılar kapsamında hazırladıkları projelerle
            başvuruyor, en yüksek puanı alan projeler bütçe imkânı
            dahilinde destekleniyordu.
          </li>
          <li>
            ✔ Genel esaslara göre destek üst limiti{" "}
            <strong>2.000.000 TL</strong>, personel dışı giderlerde minimum
            destek oranı <strong>%60</strong> (bazı çağrılarda daha
            yüksekti), personel giderleri ise sabit tutar üzerinden{" "}
            <strong>%100 geri ödemesiz</strong> destekleniyordu.
          </li>
          <li>
            ✔ Kapanış öncesinde başvurusu onaylanmış ve destek süreci devam
            eden projeler etkilenmiyor; bu işletmeler taahhütlerini
            tamamlayana kadar destek almaya devam ediyor. Kapanan yalnızca{" "}
            <strong>yeni başvuru alımı</strong>.
          </li>
          <li>
            ✔ KOSGEB, KOBİGEL ile aynı isimde bir programı yeniden açmadı;
            işlevini büyük ölçüde 2024&apos;te devreye giren{" "}
            <strong>Kapasite Geliştirme Destek Programı</strong> devraldı.
            Yeni kurulan işletmeler için ise{" "}
            <strong>Girişimci Destek Programı</strong> içindeki İş
            Geliştirme Desteği ayrı bir alternatif.
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
            5. Yerine Ne Var? Gelişim Projesi Olan KOBİ&apos;ler Ne Yapmalı?
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
          KOSGEB&apos;in resmî uygulama esaslarına göre KOBİGEL - KOBİ
          Gelişim Destek Programı&apos;nın amacı, &quot;küçük ve orta
          ölçekli işletmelerin proje teklif çağrıları kapsamında
          hazırlayacakları projeleri destekleyerek ekonomideki paylarını ve
          etkinliklerini artırmak, rekabet güçlerini ve sağladıkları katma
          değeri yükseltmekti&quot;. Sadeleştirirsek: KOBİGEL, tek bir sabit
          gider listesine değil, KOSGEB&apos;in dönem dönem açtığı ve
          önceliklerini belirlediği bir &quot;proje teklif çağrısı&quot;
          mantığına dayanıyordu.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bu yapı, programı KOSGEB&apos;in diğer birçok desteğinden
          ayırıyordu. Klasik destekler bir işletmenin başvurduğu anda
          değerlendirilirken, KOBİGEL&apos;de başvurular belirli bir çağrı
          dönemi boyunca toplanıyor, ardından her proje önceden ilan edilen
          değerlendirme kriterlerine göre puanlanıyor ve çağrı bütçesi
          elverdiği ölçüde, en yüksek puanı alan projeler sırasıyla
          destekleniyordu. Yani başvuru şartlarını karşılamak tek başına
          destek almaya yetmiyordu; rakip projelerle kıyaslamalı bir
          değerlendirmeden geçmek gerekiyordu.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Programın son dönemdeki çağrıları (2022-01, 2022-02, 2022-03
            gibi) genellikle hızlı büyüyen veya büyüme potansiyeli taşıyan,
            istihdam yaratan, ürün/hizmet/iş modelinde yenilik yapan, ihracata
            katkı sağlayan işletmeleri öncelikliyordu. Bazı çağrılar özellikle
            KOSGEB&apos;in Ar-Ge, Ür-Ge ve İnovasyon Destek Programı ya da
            Girişimcilik Destek Programı&apos;ndan yararlanarak büyümüş
            işletmelerin bir sonraki adımını (ürünü seri üretime/pazara
            taşımak) desteklemeyi hedefliyordu.
          </p>
        </div>
      </section>

      {/* 2. KİMLER BAŞVURUYORDU */}
      <section id="kimler-basvuruyordu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabiliyordu?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Genel şart, başvuru yapılacak işletmenin KOSGEB Veri Tabanı&apos;na
          kayıtlı ve aktif olması, ilgili mali yılda bilanço esasına göre
          defter tutmuş olmasıydı. Bunun ötesinde, her proje teklif çağrısı
          kendi özel şartlarını ve öncelikli konularını belirliyordu; bu
          yüzden &quot;KOBİGEL&apos;e kimler başvurabilir&quot; sorusunun tek
          bir cevabı yoktu, cevap hangi çağrı döneminden bahsettiğinize göre
          değişiyordu.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✔ Genel Şartlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ KOSGEB Veri Tabanı&apos;na kayıtlı ve aktif KOBİ olmak</li>
              <li>✔ İlgili mali yılda bilanço esasına göre defter tutmuş olmak</li>
              <li>✔ Çağrıda belirtilen sektör/NACE kodu kapsamında faaliyet göstermek</li>
              <li>✔ Proje teklif çağrısı ilan edilen dönem içinde KBS üzerinden başvuru yapmak</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              🎯 Öncelikli Değerlendirilen Profiller
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Hızlı büyüyen veya büyüme potansiyeli yüksek işletmeler</li>
              <li>✔ İstihdam yaratan, ihracata katkı sağlayan projeler</li>
              <li>✔ Ürün/hizmet/iş modelinde somut yenilik (inovasyon) içeren projeler</li>
              <li>✔ Daha önce Ar-Ge, Ür-Ge ve İnovasyon veya Girişimcilik Destek Programı&apos;ndan yararlanmış işletmeler</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            KOBİGEL gibi puanlama esaslı, çağrı bazlı programlarda en sık
            gözden kaçan nokta, başvuru şartlarını karşılamanın destek
            almaya yetmediğidir. Proje, KOSGEB&apos;in o çağrı için ilan
            ettiği değerlendirme kriterlerinde (istihdam etkisi, ihracat
            katkısı, yenilik düzeyi, sürdürülebilirlik gibi) somut ve
            ölçülebilir hedefler taşımadıkça, bütçe kısıtlı bir çağrıda
            rakip projelerin gerisinde kalıp desteklenmeme riski taşır. Bu
            yüzden bu tür programlarda proje metninin genel bir yatırım
            planından çok, ilan edilen puanlama kriterlerine doğrudan cevap
            veren bir belge olarak hazırlanması kritik önem taşıyordu.
          </p>
        </div>
      </section>

      {/* 3. DESTEK UNSURLARI */}
      <section id="destek-unsurlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Oranları ve Üst Limitler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in resmî destek unsurları sayfasına göre program, genel
          hatlarıyla şu yapıyla işliyordu:
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
                <td className="p-5 font-semibold">Toplam destek üst limiti</td>
                <td className="p-5">2.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Genel destek oranı (personel hariç)</td>
                <td className="p-5">Minimum %60</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Makine-teçhizat/yazılım giderlerinin geri ödemeli kısmı</td>
                <td className="p-5">%70</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Personel giderleri</td>
                <td className="p-5">Öğrenim durumu katsayısına göre sabit tutar, %100 geri ödemesiz</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Proje süresi</td>
                <td className="p-5">En az 8, en fazla 36 ay (4 ay uzatılabilir)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Kaynak: KOSGEB resmî KOBİGEL destek unsurları sayfası. Bazı çağrı
          dönemlerinde bu genel oranlar çağrıya özel olarak farklılaştı;
          örneğin 2022-01 çağrısında personel dışı giderlerde %85 destek
          oranı uygulanmış, işletme başına 900.000 TL geri ödemesiz ve
          1.100.000 TL geri ödemeli (toplam 2.000.000 TL) destek verilmişti.
        </p>
        <p className="mt-8 leading-8 text-gray-700">
          Desteklenen gider kalemleri arasında makine-teçhizat, yazılım,
          personel, hizmet alımı ve danışmanlık gibi kalemler yer alıyordu.
          Buna karşılık gayrimenkul alımı, bina inşaatı, taşıt kiralama ile
          vergi, resim ve harçlar kapsam dışıydı; hangi giderin ne oranda
          destekleneceğine, başvurulan projeye özel olarak KOSGEB kurulu
          karar veriyordu.
        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: &quot;KOBİGEL&quot; ile &quot;Kapasite
            Geliştirme&quot; ve &quot;İş Geliştirme Desteği&quot; Aynı Şey
            Değil
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            İsimlerindeki &quot;gelişim/geliştirme&quot; benzerliği yüzünden
            üç farklı program sık karıştırılıyor. KOBİGEL - KOBİ Gelişim
            Destek Programı artık kapalı ve tüm KOBİ&apos;lere açık, proje
            teklif çağrısı esaslı bir programdı. Kapasite Geliştirme Destek
            Programı ise hâlâ aktif, kredi faiz/kâr payı desteğine dayanan,
            dönemsel başvuru pencereleri olan ayrı bir program. Girişimci
            Destek Programı içindeki İş Geliştirme Desteği ise yalnızca yeni
            kurulan girişimcilere yönelik, KOBİGEL&apos;in muhatap kitlesinden
            (yerleşik KOBİ&apos;ler) tamamen farklı bir grup için tasarlandı.
            Üçünü birbirinin yerine kullanmayın.
          </p>
        </div>
      </section>

      {/* 4. NEDEN KAPANDI */}
      <section id="neden-kapandi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Program Neden ve Ne Zaman Kapandı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB, 2024 yılında destek portföyünü kapsamlı şekilde yeniledi.
          Bu süreçte yalnızca KOBİGEL değil, aynı gün içinde İşletme
          Geliştirme Destek Programı, Sebze ve Meyve Soğuk Zincir Finansal
          Kiralama Destek Programı ve Yurt Dışı Pazar Destek Programı da
          KOSGEB&apos;in resmî &quot;Yürürlükten Kaldırılan Destekler&quot;
          sayfasında belirtildiği üzere{" "}
          <strong>15.04.2024 tarihinde başvuruya kapatıldı</strong>. Kısa bir
          süre sonra Geleneksel ve İleri Girişimci Destek Programları da
          10.05.2024&apos;te aynı listeye eklendi.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu, tek bir programın münferit kapanışı değil, KOSGEB&apos;in
            birbiriyle örtüşen çok sayıda dar kapsamlı desteği azaltıp,
            KOBİ&apos;lerin tek bir başvuruyla daha geniş bir ihtiyaç setini
            karşılayabileceği &quot;şemsiye&quot; programlara geçiş
            kararının bir parçasıydı. Bu geçişin en somut sonucu, aynı
            dönemde devreye giren Kapasite Geliştirme Destek
            Programı&apos;nın, KOBİGEL dahil kapatılan birçok eski programın
            işlevini büyük ölçüde devralması oldu.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kapanış yalnızca <strong>yeni başvuru alımını</strong> durdurdu.
          15 Nisan 2024&apos;ten önce başvurusu onaylanmış ve destek süreci
          devam eden işletmeler, taahhütlerini tamamlayana kadar
          projelerine ait ödemeleri almaya devam ediyor. Yani hâlihazırda bu
          programdan yararlanıyorsanız, kapanış kararı sizi doğrudan
          etkilemiyor.
        </p>
      </section>

      {/* 5. YERİNE NE VAR */}
      <section id="yerine-ne-var" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yerine Ne Var? Gelişim Projesi Olan KOBİ&apos;ler Ne Yapmalı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB, KOBİGEL ile birebir aynı isimde ve aynı kapsamda yeni bir
          program duyurmadı. Ancak proje ihtiyacınızın niteliğine göre
          bakılabilecek birkaç güncel seçenek var:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Ölçek büyütme ve dijital dönüşüm yatırımları
            </h3>
            <p className="leading-7 text-gray-700">
              Halihazırda aktif olan{" "}
              <Link href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026" className="text-orange-600 underline">
                Kapasite Geliştirme Destek Programı
              </Link>
              , KOBİGEL&apos;in ardından KOSGEB&apos;in en kapsamlı gelişim
              destekli programı hâline geldi. Makine-teçhizat, yazılım,
              personel ve danışmanlık giderlerine 20-30 milyon TL kredi
              limitine kadar faiz/kâr payı desteği sağlıyor; ölçek büyütme
              veya tedarik zincirinde büyük işletmeye tedarikçilik yapan
              KOBİ&apos;ler için en yakın muadil bu program.
            </p>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Yeni kurulmuş işletmeler
            </h3>
            <p className="leading-7 text-gray-700">
              KOBİGEL&apos;in aksine belirli bir kuruluş yaşı aranmayan{" "}
              <Link href="/blog/kosgeb-girisimci-destek-programi-2026" className="text-orange-600 underline">
                Girişimci Destek Programı
              </Link>
              , içerdiği İş Geliştirme Desteği ile yeni kurulan işletmelerin
              işlerini büyütmesini destekliyor. Şirketiniz henüz genç yaşta
              ve büyüme aşamasındaysa, Kapasite Geliştirme&apos;den önce bu
              programın şartlarını kontrol etmeniz daha uygun olabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Ar-Ge/inovasyon ağırlıklı projeler
            </h3>
            <p className="leading-7 text-gray-700">
              KOBİGEL&apos;in önceliklendirdiği profillerden biri, Ar-Ge/
              Ür-Ge çıktısı bir ürünü büyütmek isteyen işletmelerdi. Bu
              ihtiyaç için hâlâ açık olan{" "}
              <Link href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026" className="text-orange-600 underline">
                Ar-Ge, Ür-Ge ve İnovasyon Destek Programı
              </Link>
              &apos;na herhangi bir tarihte başvurulabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Büyük ölçekli makine/teçhizat yatırımı
            </h3>
            <p className="leading-7 text-gray-700">
              Yatırım büyüklüğünüz KOSGEB&apos;in kredi limitlerini aşıyorsa,{" "}
              <Link href="/blog/makine-ekipman-yatirimi-kosgeb-mi-yatirim-tesvik-belgesi-mi" className="text-orange-600 underline">
                Yatırım Teşvik Belgesi
              </Link>
              &apos;nin KDV/gümrük/vergi avantajlarına bakmak, KOBİGEL&apos;in
              boşluğunu doldurmak için daha uygun bir yol olabilir.
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
            ❌ Program yeni başvuruya kapalı; internette &quot;2022-0X
            çağrısı&quot; başlıklı eski içeriklere güvenmeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kapanış öncesi onaylanmış projeler etkilenmiyor, ödemeler
            devam ediyor
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Genel destek unsurları ile çağrıya özel rakamlar (2022-01
            örneğindeki %85 oranı gibi) birbirinden farklı olabiliyordu,
            hangi döneme ait olduğuna dikkat edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İhtiyacınızın niteliğine göre Kapasite Geliştirme, Girişimci
            Destek Programı veya Ar-Ge/Ür-Ge ve İnovasyon Destek
            Programı&apos;na bakın
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
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/3288/kobigel-kobi-gelisim-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - KOBİGEL: KOBİ Gelişim Destek Programı (resmî destek sayfası)
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
              href="https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/KOB%C4%B0GEL/2023/KOB%C4%B0GEL-KOB%C4%B0_Geli%C5%9Fim_Destek_Program%C4%B1_Uygulama_Esaslar%C4%B1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - KOBİGEL Uygulama Esasları (PDF)
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
              KOBİGEL - KOBİ Gelişim Destek Programı&apos;na şu an
              başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. KOSGEB&apos;in resmî sitesine göre program 15.04.2024
              tarihinde başvuruya kapatıldı ve &quot;Yürürlükten Kaldırılan
              Destekler&quot; listesine alındı. Yeni başvuru kabul edilmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Program tamamen mi bitti, yoksa dönemsel bir kapanış mı?
            </h3>
            <p className="leading-8 text-gray-700">
              KOSGEB bu programı, aynı tarihte kapatılan başka desteklerle
              birlikte &quot;yürürlükten kaldırılan&quot; kategorisine aldı.
              Bu, çağrı dönemleri arasındaki geçici bir bekleme değil,
              programın uygulamadan tamamen kaldırıldığı anlamına geliyor.
              KOSGEB yeniden açılacağına dair resmî bir takvim paylaşmadı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Daha önce onaylanan bir KOBİGEL projem var, desteğim kesildi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Kapanış yalnızca yeni başvuru kabulünü durduruyor.
              15 Nisan 2024&apos;ten önce onaylanmış ve destek süreci devam
              eden projeler, taahhüt ve ödeme süreçlerini kendi programı
              kapsamında tamamlıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOBİGEL ile Kapasite Geliştirme Destek Programı aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, ikisi ayrı programlar. KOBİGEL proje teklif çağrısı ve
              puanlama esasına dayanan, artık kapalı bir programdı. Kapasite
              Geliştirme Destek Programı ise kredi faiz/kâr payı desteğine
              dayanan, dönemsel başvuru pencereleri olan, hâlâ aktif ayrı bir
              program. Kapasite Geliştirme, kapanan birçok eski programın
              (KOBİGEL dahil) işlevini büyük ölçüde devraldı ama birebir
              aynı kurallarla çalışmıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Gelişim/büyüme projesi için başka hangi destek programına
              bakabilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              İhtiyacınızın niteliğine göre değişir: ölçek büyütme ve
              dijitalleşme yatırımları için Kapasite Geliştirme Destek
              Programı&apos;na, yeni kurulmuş bir işletmeyseniz Girişimci
              Destek Programı&apos;na, Ar-Ge/Ür-Ge çıktısı bir ürünü
              büyütmek istiyorsanız Ar-Ge, Ür-Ge ve İnovasyon Destek
              Programı&apos;na, büyük ölçekli bir yatırımınız varsa Yatırım
              Teşvik Belgesi&apos;ne bakabilirsiniz. Hiçbiri KOBİGEL&apos;in
              birebir muadili değil, her birinin kendi şartları var.
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
              ancak KOSGEB&apos;in yürürlükten kaldırılan destekler
              listesinin bunun tam tersini doğruladığını gördük.
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
          KOBİGEL - KOBİ Gelişim Destek Programı, uzun yıllar KOBİ&apos;lerin
          proje bazlı büyüme ve rekabet gücü yatırımlarında başvurduğu önemli
          bir kaynaktı, ama 15 Nisan 2024 itibarıyla başvuruya kapandı ve
          KOSGEB&apos;in birebir bir yenisini duyurmadığı bir boşluk bıraktı.
          Bu, gelişim projesi olan bir KOBİ&apos;nin elinin boş kaldığı
          anlamına gelmiyor; ihtiyacın niteliğine göre Kapasite Geliştirme,
          Girişimci Destek Programı veya Ar-Ge/Ür-Ge ve İnovasyon Destek
          Programı gibi hâlâ yürürlükte olan programlardan biri uygun
          olabilir. Önemli olan, artık var olmayan bir programın eski
          şartlarına göre plan yapmak yerine, güncel destek haritasında
          nerede durduğunuzu doğru tespit etmek.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin gelişim/büyüme projesine en uygun destek programını
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
            href="/blog/kosgeb-girisimci-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • GİRİŞİMCİLİK DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Girişimci Destek Programı Nedir?</h3>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"KOBİGEL - KOBİ Gelişim Destek Programı'na şu an başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. KOSGEB'in resmî sitesine göre program 15.04.2024 tarihinde başvuruya kapatıldı ve \"Yürürlükten Kaldırılan Destekler\" listesine alındı. Yeni başvuru kabul edilmiyor."}},{"@type":"Question","name":"Program tamamen mi bitti, yoksa dönemsel bir kapanış mı?","acceptedAnswer":{"@type":"Answer","text":"KOSGEB bu programı, aynı tarihte kapatılan başka desteklerle birlikte \"yürürlükten kaldırılan\" kategorisine aldı. Bu, çağrı dönemleri arasındaki geçici bir bekleme değil, programın uygulamadan tamamen kaldırıldığı anlamına geliyor. KOSGEB yeniden açılacağına dair resmî bir takvim paylaşmadı."}},{"@type":"Question","name":"Daha önce onaylanan bir KOBİGEL projem var, desteğim kesildi mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Kapanış yalnızca yeni başvuru kabulünü durduruyor. 15 Nisan 2024'ten önce onaylanmış ve destek süreci devam eden projeler, taahhüt ve ödeme süreçlerini kendi programı kapsamında tamamlıyor."}},{"@type":"Question","name":"KOBİGEL ile Kapasite Geliştirme Destek Programı aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, ikisi ayrı programlar. KOBİGEL proje teklif çağrısı ve puanlama esasına dayanan, artık kapalı bir programdı. Kapasite Geliştirme Destek Programı ise kredi faiz/kâr payı desteğine dayanan, dönemsel başvuru pencereleri olan, hâlâ aktif ayrı bir program. Kapasite Geliştirme, kapanan birçok eski programın (KOBİGEL dahil) işlevini büyük ölçüde devraldı ama birebir aynı kurallarla çalışmıyor."}},{"@type":"Question","name":"Gelişim/büyüme projesi için başka hangi destek programına bakabilirim?","acceptedAnswer":{"@type":"Answer","text":"İhtiyacınızın niteliğine göre değişir: ölçek büyütme ve dijitalleşme yatırımları için Kapasite Geliştirme Destek Programı'na, yeni kurulmuş bir işletmeyseniz Girişimci Destek Programı'na, Ar-Ge/Ür-Ge çıktısı bir ürünü büyütmek istiyorsanız Ar-Ge, Ür-Ge ve İnovasyon Destek Programı'na, büyük ölçekli bir yatırımınız varsa Yatırım Teşvik Belgesi'ne bakabilirsiniz. Hiçbiri KOBİGEL'in birebir muadili değil, her birinin kendi şartları var."}},{"@type":"Question","name":"Programın güncel durumunu nereden teyit edebilirim?","acceptedAnswer":{"@type":"Answer","text":"En güvenilir kaynak her zaman kosgeb.gov.tr'nin kendi destek sayfaları ve \"Yürürlükten Kaldırılan Destekler\" listesi. Üçüncü taraf danışmanlık sitelerindeki güncelleme tarihleri yanıltıcı olabilir; bu yazıyı hazırlarken de resmî olmayan bazı kaynaklarda programın hâlâ aktif gösterildiğini, ancak KOSGEB'in yürürlükten kaldırılan destekler listesinin bunun tam tersini doğruladığını gördük."}}]}) }}
      />
    </BlogLayout>
  );
}
