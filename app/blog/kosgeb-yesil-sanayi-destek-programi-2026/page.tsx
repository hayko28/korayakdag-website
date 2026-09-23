import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB Yeşil Sanayi Destek Programı 2026 | Koray Akdağ",
  description:
    "Dünya Bankası destekli Türkiye Yeşil Sanayi Projesi kapsamında KOSGEB'in imalatçı KOBİ'lere sunduğu güneş enerjisi (14 milyon TL) ve döngüsel ekonomi (4 milyon TL) desteğinin şartları, oranları, geri ödeme yapısı ve başvuru süreci.",
  keywords: [
    "KOSGEB Yeşil Sanayi Destek Programı",
    "KOSGEB güneş enerjisi desteği",
    "KOSGEB döngüsel ekonomi desteği",
    "Türkiye Yeşil Sanayi Projesi",
    "KOSGEB GES desteği 2026",
    "sanayide yeşil dönüşüm desteği",
    "KOSGEB yeşil dönüşüm",
    "çatı tipi GES KOSGEB desteği",
  ],
  alternates: {
    canonical: "/blog/kosgeb-yesil-sanayi-destek-programi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Yeşil Sanayi Destek Programı: Güneş Enerjisi ve Döngüsel Ekonomi Yatırımınıza Ne Kadar Destek Alırsınız?"
      description="Dünya Bankası finansmanlı Türkiye Yeşil Sanayi Projesi'nin KOSGEB ayağı olan Yeşil Sanayi Destek Programı, imalatçı KOBİ'lere çatı tipi güneş enerjisi yatırımlarında 14 milyon TL'ye, döngüsel ekonomi ve kaynak verimliliği projelerinde 4 milyon TL'ye kadar geri ödemeli destek sunuyor. Şartları, destek oranlarını, geri ödeme yapısını ve başvuru sürecini güncel kaynaklarla derledik."
      category="KOSGEB • YEŞİL DÖNÜŞÜM • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kosgeb-yesil-sanayi-destek-programi-2026"
      programDurumu="acik"
      coverImage="https://images.unsplash.com/photo-1775317628391-a0429fe3be1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="İşletmenizin Yeşil Sanayi Destek Programı'na Uygunluğunu Birlikte Değerlendirelim"
      ctaText="NACE kodunuzdan Findeks kredi notunuza, proje bütçenizden gerekli form ve raporlara kadar başvuru öncesi tüm uygunluk kriterlerini birlikte gözden geçirir, KBS üzerindeki başvuru sürecinizi baştan sona yürütürüz."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Enerji maliyetleri yükseldikçe ve ihracat yapılan pazarlarda karbon
        temelli sınır düzenlemeleri konuşulmaya başladıkça, sanayi
        KOBİ&apos;lerinin gündemine hızla bir soru oturdu: çatıma güneş
        paneli kursam veya üretim sürecimi döngüsel ekonomiye uygun hale
        getirsem, devletten ne kadar destek alabilirim? KOSGEB&apos;in bu
        soruya somut bir cevabı var, ama bu destek çoğu zaman ya hiç
        bilinmiyor ya da kurumun dijital dönüşüme yönelik ayrı programıyla
        karıştırılıyor. Bu yazıda, Dünya Bankası finansmanlı Türkiye Yeşil
        Sanayi Projesi kapsamında KOSGEB&apos;in yürüttüğü Yeşil Sanayi
        Destek Programı&apos;nı, kapsamından geri ödeme yapısına kadar
        güncel kaynaklarla ele alıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Program, Dünya Bankası finansmanlı <strong>Türkiye Yeşil
            Sanayi Projesi&apos;nin</strong> KOSGEB ayağı; Sanayi ve
            Teknoloji Bakanlığı koordinasyonunda yürütülüyor.
          </li>
          <li>
            ✔ İki ayrı bileşeni var: <strong>Güneş Enerjisi Yatırımları</strong>
            {" "}(üst limit 14 milyon TL, %60 destek oranı) ve <strong>Temiz
            ve Döngüsel Ekonomi</strong> (üst limit 4 milyon TL, %70 destek
            oranı).
          </li>
          <li>
            ✔ Deprem bölgesi illerinde (Adıyaman, Hatay, Kahramanmaraş gibi)
            destek oranı <strong>%80-90&apos;a</strong> kadar çıkabiliyor.
          </li>
          <li>
            ✔ Destek bir hibe değil, <strong>geri ödemeli finansman</strong>;
            proje bitiminden sonra 12 ay ödemesiz, ardından taksitlerle geri
            ödeniyor.
          </li>
          <li>
            ✔ Başvuru şartları arasında en az 2 yıl önce kuruluş, belirli bir
            Findeks kredi notu ve <strong>en az 1.000.000 TL</strong> proje
            bütçesi bulunuyor.
          </li>
          <li>
            ✔ KOSGEB verilerine göre 2026&apos;nın ilk 6 ayında (Ocak-Haziran)
            program kapsamında <strong>466 işletmeye 480,7 milyon TL</strong>
            {" "}destek kullandırıldı, program fiilen aktif işliyor.
          </li>
          <li>
            ✔ Başvuru, KOBİ Bilgi Sistemi (KBS) üzerinden yapılıyor; kesin
            dönem tarihlerinin başvuru öncesi KOSGEB&apos;in resmi
            duyurularından teyit edilmesi gerekiyor.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#program-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Program Nedir? Kim Yürütüyor?
          </Link>
          <Link href="#destek-bilesenleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. İki Destek Bileşeni: GES ve Döngüsel Ekonomi
          </Link>
          <Link href="#kimler-basvurabilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Başvurabilir?
          </Link>
          <Link href="#geri-odeme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Destek Nasıl Geri Ödenir?
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Süreci: Adım Adım
          </Link>
          <Link href="#guncel-durum" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Program Şu An Açık mı?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. PROGRAM NEDİR */}
      <section id="program-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Program Nedir? Kim Yürütüyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yeşil Sanayi Destek Programı, Dünya Bankası finansmanlı Türkiye
          Yeşil Sanayi Projesi&apos;nin KOSGEB tarafından işletmelere
          aktarılan ayağıdır. Toplam proje bütçesi 450 milyon dolar; bu
          bütçenin 250 milyon dolarlık kısmı KOSGEB&apos;e ayrılmış
          durumda. Proje, Sanayi ve Teknoloji Bakanlığı koordinasyonunda
          KOSGEB ve TÜBİTAK aracılığıyla yürütülüyor. TÜBİTAK ayağı,
          firmaların yeşil Ar-Ge ve yenilik projelerine odaklanan ayrı bir
          destek mekanizması; bu yazı yalnızca KOSGEB&apos;in işlettiği
          bölümü konu alıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Programın amacı, sanayi sektöründeki KOBİ&apos;lerin enerji, su ve
          hammadde verimliliğini artırmasını, atık yönetimini
          iyileştirmesini, endüstriyel simbiyoz ve döngüsel ekonomi
          projelerine yönelmesini ve yenilenebilir enerjiye geçişini
          finansal olarak desteklemektir. Kısacası, üretim maliyetlerini
          düşürürken çevresel ayak izini küçültmek isteyen imalatçı
          işletmeler için tasarlanmış bir mekanizma.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Programın adı zaman zaman &quot;Yeşil Dönüşüm Destek
            Programı&quot; olarak da anılıyor ve bu da farklı bir KOSGEB
            programıyla karışmasına yol açıyor. Aşağıdaki 3. bölümdeki
            &quot;Karıştırmayın&quot; kutusunda bu farkı netleştiriyoruz.
          </p>
        </div>
      </section>

      {/* 2. DESTEK BİLEŞENLERİ */}
      <section id="destek-bilesenleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. İki Destek Bileşeni: Güneş Enerjisi ve Döngüsel Ekonomi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program, birbirinden bağımsız değerlendirilen iki ayrı proje
          teklif çağrısı üzerinden işliyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Bileşen</th>
                <th className="p-5">Kapsam</th>
                <th className="p-5">Üst Limit</th>
                <th className="p-5">Destek Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Güneş Enerjisi Yatırımları</td>
                <td className="p-5">Çatı tipi GES ve tesis içi kombine GES için makine-teçhizat giderleri</td>
                <td className="p-5">14.000.000 TL</td>
                <td className="p-5">%60 (afet bölgesi illerinde %80-90)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Temiz ve Döngüsel Ekonomi</td>
                <td className="p-5">Enerji/su/hammadde verimliliği, atık geri dönüşümü, endüstriyel simbiyoz; personel, makine-teçhizat, yazılım ve hizmet alım giderleri</td>
                <td className="p-5">4.000.000 TL</td>
                <td className="p-5">%70 (afet bölgesi illerinde %80-90)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Her iki bileşende de proje süresi en az 8, en fazla 12 ay olarak
          belirleniyor. Güneş enerjisi bileşeni doğrudan makine-teçhizat
          yatırımına odaklanırken, döngüsel ekonomi bileşeni personel
          giderinden yazılıma kadar daha geniş bir gider kalemi yelpazesini
          kapsıyor.

        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: KOSGEB&apos;in Üç Farklı &quot;Yeşil/Dönüşüm&quot; Desteği
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            KOSGEB&apos;in adında &quot;yeşil&quot; veya &quot;dönüşüm&quot;
            geçen birden fazla desteği var ve bunlar sık sık birbirine
            karıştırılıyor:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-600">
            <li>
              <strong>Yeşil Sanayi Destek Programı</strong> (bu yazının
              konusu): Dünya Bankası finansmanlı, 14 milyon TL / 4 milyon TL
              limitli, büyük ölçekli GES ve döngüsel ekonomi yatırımları
              için.
            </li>
            <li>
              <strong>KOSGEB&apos;in daha önceki enerji verimliliği
              desteği:</strong> yıllık enerji tüketimi 10-500 TEP aralığındaki
              işletmelere yönelik, motor etüdü ve enerji etüdü hizmetleriyle
              işleyen, üst limitleri en fazla 900.000 TL uygulama gideri
              seviyesinde kalan çok daha dar kapsamlı, farklı bir destek.
            </li>
            <li>
              <strong>
                <Link href="/blog/kosgeb-kobi-dijital-donusum-destek-programi-2026" className="text-red-700 underline">
                  KOBİ Dijital Dönüşüm Destek Programı
                </Link>
              </strong>: yeşil değil dijital dönüşüme (ERP, robotik, yapay
              zekâ gibi) yönelik, ayrı bir yönergeyle işleyen, tamamen farklı
              bir program.
            </li>
          </ul>
          <p className="mt-4 leading-8 text-gray-700">
            Başvuru yapmadan önce hangi programı kastettiğinizi netleştirmek,
            yanlış çağrı dokümanını inceleyip zaman kaybetmenizi önler.
          </p>
        </div>
      </section>

      {/* 3. KİMLER BAŞVURABİLİR */}
      <section id="kimler-basvurabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program, sanayi sektöründe faaliyet gösteren imalatçı
          KOBİ&apos;leri hedefliyor. Başvuru için aranan temel şartlar şöyle:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li>
            Sanayi sektöründe, imalat esaslı faaliyet gösteren küçük ve orta
            ölçekli işletme olmak (mikro ölçekli işletmeler bu programın
            kapsamı dışında tutuluyor).
          </li>
          <li>
            İlgili proje teklif çağrısının ilan tarihi itibarıyla{" "}
            <strong>en az 2 yıl önce</strong> kurulmuş olmak.
          </li>
          <li>
            Findeks kredi notu endeksine göre &quot;orta riskli&quot;,
            &quot;az riskli&quot;, &quot;iyi&quot; veya &quot;çok iyi&quot;
            gruplandırmalarından birinde yer almak.
          </li>
          <li>
            Toplam proje bütçesinin <strong>en az 1.000.000 TL</strong>{" "}
            olması.
          </li>
          <li>
            İşletmenin KOBİ Bilgi Sistemi&apos;nde (KBS) kayıtlı, onaylı bir
            İşletme Beyanı&apos;na sahip olması.
          </li>
          <li>
            Vergi dairesindeki NACE kodunun, ilgili proje teklif çağrısının
            kapsamındaki sektörler tablosunda yer alması. Bu konuda kayıtlı
            kodunuz ile fiili faaliyetiniz arasında bir fark varsa,{" "}
            <Link href="/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi" className="text-orange-600 underline">
              NACE kodu uyumsuzluğu durumunda ne yapılması gerektiğini
              anlattığımız yazımıza
            </Link>{" "}
            göz atmanızı öneririz.
          </li>
        </ul>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurularda en sık gözden kaçan nokta, &quot;en az 2 yıl önce
            kurulmuş olma&quot; şartının yalnızca ticaret sicili tescil
            tarihine bakılarak değerlendirilmesidir. Oysa Findeks kredi notu
            ve NACE kod uygunluğu bu şartla birlikte, eş zamanlı sağlanmak
            zorunda. Kuruluş yaşı kriterini rahatlıkla karşılayan bir işletme
            bile, kredi notu veya kayıtlı faaliyet kodu uyumsuzsa başvuru
            aşamasında elenebiliyor. Üç şartın birlikte ve başvurudan önce
            kontrol edilmesi, gereksiz bir ret riskini baştan ortadan
            kaldırır.
          </p>
        </div>
      </section>

      {/* 4. GERİ ÖDEME */}
      <section id="geri-odeme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Destek Nasıl Geri Ödenir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Burada dikkat edilmesi gereken önemli bir nokta var: Yeşil Sanayi
          Destek Programı bir hibe değil, <strong>geri ödemeli
          finansman</strong> şeklinde işliyor. Güneş enerjisi bileşiminde
          geri ödeme, proje bitiş tarihinden sonra başlıyor: ilk 12 ay
          ödemesiz dönem, ardından 4&apos;er aylık dönemler halinde 6 eşit
          taksitte tamamlanıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Uygulama süreci de &quot;harca-belgele-ödeme al&quot; mantığıyla
          ilerliyor: projeler 4&apos;er aylık dönemler halinde izleniyor,
          işletme her dönem sonunda fiilen gerçekleştirdiği faaliyet ve
          giderleri belgeliyor, KOSGEB bu belgeleri inceleyip uygun bulduğu
          tutar için ödeme açıyor. Yani destek, proje başında toplu halde
          değil, harcama gerçekleştikçe kademeli olarak kullandırılıyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu yapı, nakit akışı planlaması açısından önemli: işletmenin
            önce kendi kaynağıyla veya bir yatırım kredisiyle harcamayı
            yapması, belgelemesi ve ancak sonrasında KOSGEB desteğini alması
            gerekiyor. Bu nedenle başvuru öncesi finansman planınızı buna
            göre kurgulamanız gerekiyor.
          </p>
        </div>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Süreci: Adım Adım
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Başvuru tamamen elektronik ortamda, KOBİ Bilgi Sistemi (KBS)
          üzerinden yürütülüyor:
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">KBS Kaydı ve İşletme Beyanı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Güncel Çağrı Dokümanının İncelenmesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Proje Başvuru Formu ve Eklerinin Hazırlanması</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">KBS Üzerinden Online Başvuru</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Değerlendirme, Sözleşme ve Kaynak Kullandırımı</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.1. Gerekli Belgeler
          </h3>
          <p className="leading-8 text-gray-700">
            KOSGEB, başvuru için proje başvuru formu, taahhütname, kontrol
            tablosu, çevresel durum tespit formları ve yeminli mali müşavir
            (YMM) bildirim formu gibi çok sayıda belge ve form talep ediyor.
            Bu belgelerin güncel şablonları, ilgili proje teklif çağrısı
            dokümanının ekinde yayımlanıyor; başvuru öncesi mutlaka en
            güncel sürümlerin kullanılması gerekiyor.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.2. Değerlendirme Süreci
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurular önce şekil ve uygunluk kontrolünden geçiyor, ardından
            ilgili değerlendirme kurulunca proje bazında inceleniyor. Kabul
            edilen projeler için işletme ile KOSGEB arasında bir sözleşme
            imzalanıyor; kaynak kullandırımı ise 4. bölümde anlatılan
            &quot;harca-belgele-ödeme al&quot; döngüsü içinde başlıyor.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Başvuru formundan gerekli çevresel durum tespit belgelerine kadar
            sürecin tamamını birlikte yürütebiliriz.{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Şirketinizin bu programa uygunluğunu ücretsiz ön analizle
              birlikte değerlendirelim.
            </Link>
          </p>
        </div>
      </section>

      {/* 6. GÜNCEL DURUM */}
      <section id="guncel-durum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Program Şu An Açık mı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in resmi internet sitesinde, &quot;2023-01 Sanayi
          KOBİ&apos;lerinin Güneş Enerjisi Yatırımlarının Desteklenmesi
          Proje Teklif Çağrısı&quot; ve &quot;2023-02 Sanayide Temiz ve
          Döngüsel Ekonomi Proje Teklif Çağrısı&quot; hâlâ &quot;Yürürlükte
          Olan Çağrılar&quot; başlığı altında listeleniyor. Daha da
          önemlisi, KOSGEB&apos;in açıkladığı verilere göre 2026 yılının
          ilk altı ayında (Ocak-Haziran döneminde) Yeşil Sanayi Destek
          Programı kapsamında <strong>466 işletmeye 480 milyon 752 bin 684
          TL</strong> destek kullandırıldı. Bu rakam, programın kâğıt
          üzerinde değil fiilen aktif şekilde işlediğini gösteriyor.
        </p>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            Yine de dikkatli olun: proje teklif çağrılarının başvuru
            dönemleri zaman zaman güncelleniyor veya yeni dönemlerle
            yenileniyor. Başvurudan önce kesin dönem tarihlerini
            kosgeb.gov.tr üzerindeki güncel çağrı duyurusundan veya KBS
            üzerinden, ya da 444 1 567 numaralı KOSGEB Çağrı Merkezi&apos;nden
            mutlaka teyit edin.
          </p>
        </div>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Başvuru öncesi güncel çağrı tarihlerini kosgeb.gov.tr üzerinden
            teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Destek hibe değil geri ödemeli finansmandır, nakit akışı
            planlamanıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Minimum proje bütçesi 1.000.000 TL&apos;nin altında kalan
            projeler başvuramaz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ NACE kodunuzun destek kapsamındaki sektörler listesinde
            olduğundan emin olun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Findeks kredi notunuzu başvurudan önce kontrol edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Çevresel durum tespit formu ve YMM bildirimi gibi belgeleri
            güncel şablonlarla eksiksiz hazırlayın
          </div>
        </div>
      </section>

      {/* 8. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/9022/yesil-sanayi-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Yeşil Sanayi Destek Programı
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/detay/9029/turkiye-yesil-sanayi-projesi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Türkiye Yeşil Sanayi Projesi
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/detay/9030/sanayide-yesil-donusume-450-milyon-dolar-destek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Sanayide Yeşil Dönüşüme 450 Milyon Dolar Destek
            </a>
          </li>
          <li>
            <a
              href="https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/YE%C5%9E%C4%B0L%20SANAY%C4%B0%20DP/2024/YE%C5%9E%C4%B0L_SANAY%C4%B0_DESTEK_PROGRAMI_UYGULAMA_ESASLARI-02.01.2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Yeşil Sanayi Destek Programı Uygulama Esasları (PDF)
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

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOSGEB Yeşil Sanayi Destek Programı hibe mi, kredi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Ne tam hibe ne de klasik banka kredisi: geri ödemeli bir
              KOSGEB finansmanı. Proje bitiminden sonra 12 ay ödemesiz
              dönemin ardından 4&apos;er aylık dönemler halinde 6 eşit
              taksitte geri ödeniyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Mikro işletmeler bu programdan yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Program yalnızca küçük ve orta ölçekli sanayi
              KOBİ&apos;lerini kapsıyor; mikro ölçekli işletmeler kapsam
              dışında tutuluyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Güneş enerjisi ve döngüsel ekonomi bileşenlerine aynı anda başvurulabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              İki bileşen ayrı proje teklif çağrıları olarak yürütülüyor ve
              ayrı ayrı değerlendiriliyor. Uygun görülen işletmeler her iki
              çağrıya da başvurabilir, ancak her başvurunun kendi kapsamına
              ve gider kalemlerine uygun ayrı bir proje olarak hazırlanması
              gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek başvurusu için asgari proje bütçesi ne kadar?
            </h3>
            <p className="leading-8 text-gray-700">
              Toplam proje bütçesinin en az 1.000.000 TL olması gerekiyor.
              Bu tutarın altında kalan projeler başvuru şartını sağlamıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Program, KOSGEB&apos;in dijital dönüşüm destek programıyla aynı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, ikisi tamamen ayrı programlar. Yeşil Sanayi Destek
              Programı güneş enerjisi ve döngüsel ekonomi yatırımlarına,{" "}
              <Link href="/blog/kosgeb-kobi-dijital-donusum-destek-programi-2026" className="text-orange-600 underline">
                KOBİ Dijital Dönüşüm Destek Programı
              </Link>{" "}
              ise ERP, robotik, yapay zekâ gibi dijital yatırımlara yönelik
              ayrı bir yönergeyle işliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Deprem bölgesindeki işletmeler için özel bir avantaj var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Adıyaman, Hatay, Kahramanmaraş gibi afet bölgesi
              illerinde faaliyet gösteren işletmeler için destek oranı,
              standart %60-%70 seviyesinden %80-90&apos;a kadar
              yükseltiliyor.
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
          Yeşil Sanayi Destek Programı, sanayide &quot;yeşil dönüşüm&quot;
          başlığı altında konuşulan pek çok gündemin aksine, somut rakamları,
          net başvuru şartları ve fiilen işleyen bir bütçesi olan bir KOSGEB
          desteği. Çatı tipi güneş enerjisi yatırımı planlayan veya üretim
          sürecinde kaynak verimliliğine yönelmek isteyen imalatçı
          KOBİ&apos;ler için 14 milyon TL&apos;ye ve 4 milyon TL&apos;ye
          kadar geri ödemeli finansman anlamına geliyor. Ancak destek hibe
          değil, geri ödeme yükümlülüğü olan bir finansman modeli olduğu
          için başvurudan önce hem uygunluk kriterlerinin hem de nakit akışı
          planının dikkatle değerlendirilmesi gerekiyor.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-kobi-dijital-donusum-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DİJİTAL DÖNÜŞÜM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB KOBİ Dijital Dönüşüm Destek Programı 2026</h3>
          </Link>
          <Link
            href="/blog/karbon-ayak-izi-hesaplama-kobiler-icin-rehber-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Karbon Ayak İzi Hesaplama ve Raporlama</h3>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"KOSGEB Yeşil Sanayi Destek Programı hibe mi, kredi mi?","acceptedAnswer":{"@type":"Answer","text":"Ne tam hibe ne de klasik banka kredisi: geri ödemeli bir KOSGEB finansmanı. Proje bitiminden sonra 12 ay ödemesiz dönemin ardından 4'er aylık dönemler halinde 6 eşit taksitte geri ödeniyor."}},{"@type":"Question","name":"Mikro işletmeler bu programdan yararlanabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Program yalnızca küçük ve orta ölçekli sanayi KOBİ'lerini kapsıyor; mikro ölçekli işletmeler kapsam dışında tutuluyor."}},{"@type":"Question","name":"Güneş enerjisi ve döngüsel ekonomi bileşenlerine aynı anda başvurulabilir mi?","acceptedAnswer":{"@type":"Answer","text":"İki bileşen ayrı proje teklif çağrıları olarak yürütülüyor ve ayrı ayrı değerlendiriliyor. Uygun görülen işletmeler her iki çağrıya da başvurabilir, ancak her başvurunun kendi kapsamına ve gider kalemlerine uygun ayrı bir proje olarak hazırlanması gerekiyor."}},{"@type":"Question","name":"Destek başvurusu için asgari proje bütçesi ne kadar?","acceptedAnswer":{"@type":"Answer","text":"Toplam proje bütçesinin en az 1.000.000 TL olması gerekiyor. Bu tutarın altında kalan projeler başvuru şartını sağlamıyor."}},{"@type":"Question","name":"Program, KOSGEB'in dijital dönüşüm destek programıyla aynı mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır, ikisi tamamen ayrı programlar. Yeşil Sanayi Destek Programı güneş enerjisi ve döngüsel ekonomi yatırımlarına, KOBİ Dijital Dönüşüm Destek Programı ise ERP, robotik, yapay zekâ gibi dijital yatırımlara yönelik ayrı bir yönergeyle işliyor."}},{"@type":"Question","name":"Deprem bölgesindeki işletmeler için özel bir avantaj var mı?","acceptedAnswer":{"@type":"Answer","text":"Evet. Adıyaman, Hatay, Kahramanmaraş gibi afet bölgesi illerinde faaliyet gösteren işletmeler için destek oranı, standart %60-%70 seviyesinden %80-90'a kadar yükseltiliyor."}}]}) }}
      />
    </BlogLayout>
  );
}
