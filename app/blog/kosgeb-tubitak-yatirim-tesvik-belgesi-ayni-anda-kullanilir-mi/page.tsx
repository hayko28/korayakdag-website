import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "KOSGEB, TÜBİTAK ve Yatırım Teşvik Belgesi Aynı Anda Kullanılır mı? Mükerrer Destek Rehberi | Koray Akdağ",
  description:
    "KOSGEB, TÜBİTAK ve Yatırım Teşvik Belgesi'ni aynı yatırımda birlikte kullanmak mümkün mü? Üç programın kendi mükerrer destek kuralı, resmi mevzuat maddeleri (KOSGEB Yönetmeliği m.6, TÜBİTAK Uygulama Esasları m.9, 9903 sayılı Karar m.33) ve örnek senaryolarla 2026 güncel rehber.",
  keywords: [
    "kosgeb tübitak aynı anda kullanılır mı",
    "mükerrer destek yasağı nedir",
    "yatırım teşvik belgesi kosgeb birlikte",
    "tübitak kamu kaynaklı destek düşürme",
    "9903 sayılı karar madde 33",
    "kosgeb destek programları yönetmeliği madde 6",
    "aynı yatırıma birden fazla devlet desteği",
  ],
  alternates: {
    canonical:
      "/blog/kosgeb-tubitak-yatirim-tesvik-belgesi-ayni-anda-kullanilir-mi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB, TÜBİTAK ve Yatırım Teşvik Belgesi Aynı Yatırımda Birlikte Kullanılabilir mi? Mükerrer Destek Yasağının Üç Farklı Kuralı"
      description="İşletme sahiplerinin en çok karıştırdığı konulardan biri: Tek bir mükerrer destek yasağı mı var, yoksa KOSGEB, TÜBİTAK ve Yatırım Teşvik Belgesi'nin her birinin kendi kuralı mı işliyor? Resmi mevzuat maddeleriyle, hangi kombinasyonun mümkün hangisinin yasak olduğunu netleştiren 2026 güncel rehber."
      category="DEVLET DESTEKLERİ • MÜKERRER DESTEK • 2026"
      date="Ekim 2026"
      readTime="13 Dakika"
      slug="kosgeb-tubitak-yatirim-tesvik-belgesi-ayni-anda-kullanilir-mi"
      coverImage="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Yatırımınızı Hangi Destek Kombinasyonuyla Finanse Edebileceğinizi Birlikte Çıkaralım"
      ctaText="Yatırım planınızı harcama kalemi bazında inceleyip hangi kaleminizin KOSGEB'e, hangisinin TÜBİTAK'a, hangisinin Yatırım Teşvik Belgesi'ne uygun olduğunu ve mükerrer destek riski taşımayan doğru başvuru sırasını birlikte netleştirelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Büyüme planı olan hemen her işletme sahibi er ya da geç aynı soruyla
        karşılaşıyor: Hem KOSGEB&apos;e hem TÜBİTAK&apos;a hem de Yatırım
        Teşvik Belgesi&apos;ne aynı yatırım için başvurabilir miyim? Çoğu
        yerde bu soruya tek cümlelik bir cevap veriliyor: &quot;mükerrer
        destek yasağı var, olmaz&quot;. Gerçek daha katmanlı. Üç mekanizmanın
        da kendi mevzuatında ayrı bir &quot;aynı anda destekten yararlanma&quot;
        kuralı var ve bu üç kural birbirinin aynısı değil; biri tamamen
        yasaklıyor, biri sadece tutarı düşürüyor, biri de belirli şartlarla
        serbest bırakıyor. Bu yazıda üç kuralı resmi mevzuat maddeleriyle tek
        tek açıklıyor ve hangi kombinasyonun gerçekte mümkün olduğunu
        gösteriyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Tek bir &quot;mükerrer destek yasağı&quot; yok;{" "}
            <strong>üç ayrı kural</strong> var ve her biri farklı işliyor.
          </li>
          <li>
            ✔ <strong>KOSGEB&apos;in kendi içinde:</strong> Farklı KOSGEB
            programlarından aynı destek türünden yararlanılabilir, ama aynı
            harcamayı gösteren belge yalnızca bir programa sunulabilir
            (KOSGEB Destek Programları Yönetmeliği m.6/3).
          </li>
          <li>
            ✔ <strong>TÜBİTAK tarafında:</strong> Yasak değil,{" "}
            <strong>düşürme</strong> var. Aynı dönemde başka bir kamu
            kurumundan (KOSGEB dahil) alınan geri ödemesiz destek, TÜBİTAK&apos;ın
            desteklemeye esas harcama tutarından çıkarılır (TÜBİTAK 1501
            Uygulama Esasları m.9).
          </li>
          <li>
            ✔ <strong>Yatırım Teşvik Belgesi tarafında:</strong> Genel kural{" "}
            <strong>yasak</strong>. YTB kapsamında desteklenen bir yatırım,
            diğer kamu kurum ve kuruluşlarının desteklerinden yararlanamaz
            (9903 sayılı Karar m.33/1).
          </li>
          <li>
            ✔ Bu yasağın <strong>iki istisnası</strong> var: yalnızca
            kredi/faiz-kâr payı ilişkili destekte sınırlı serbestlik ve{" "}
            <strong>Teknoloji Hamlesi Programı</strong> kapsamındaki
            yatırımlarda KOSGEB ve/veya TÜBİTAK&apos;ın doğrudan birlikte
            destek verebilmesi (9903 sayılı Karar m.33/2).
          </li>
          <li>
            ✔ Sonuç: Hangi kombinasyonun mümkün olduğu, yatırımınızın hangi
            programa hangi harcama kalemiyle girdiğine bağlı; başvuru
            öncesinde mutlaka harcama kalemi bazında planlama yapılmalı.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-karisir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Neden Tek Bir Kural Sanılıyor?
          </Link>
          <Link href="#kosgeb-kurali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. KOSGEB İçinde Mükerrer Destek Kuralı
          </Link>
          <Link href="#tubitak-kurali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. TÜBİTAK&apos;ta Yasak Değil, Düşürme Var
          </Link>
          <Link href="#ytb-kurali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Yatırım Teşvik Belgesi&apos;nde Genel Yasak ve İki İstisna
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Karıştırmayın: Yasak, Düşürme ve Serbestlik Aynı Şey Değil
          </Link>
          <Link href="#karsilastirma-tablosu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Karşılaştırma Tablosu
          </Link>
          <Link href="#ornek-senaryo" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Örnek Senaryo
          </Link>
          <Link href="#basvuru-sirasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Başvuru Öncesi Planlama Sırası
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDEN KARIŞIR */}
      <section id="neden-karisir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Tek Bir Kural Sanılıyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB, TÜBİTAK ve Yatırım Teşvik Belgesi (YTB) üçü de kamu
          kaynaklı birer destek mekanizması olduğu için, sohbet dilinde
          hepsi &quot;devlet desteği&quot; başlığı altında toplanıyor ve
          &quot;mükerrer destek alınamaz&quot; cümlesi de üçü için aynı
          anlama geliyormuş gibi tekrarlanıyor. Oysa her programın hukuki
          dayanağı farklı bir mevzuat metni: KOSGEB kendi yönetmeliğine,
          TÜBİTAK kendi uygulama esaslarına, YTB ise Cumhurbaşkanı Kararı
          ile yürürlüğe giren 9903 sayılı karara tabi. Üçü de ayrı kurumlar
          tarafından, ayrı tarihlerde ve ayrı gerekçelerle yazılmış. Bu
          yüzden &quot;aynı anda kullanılabilir mi&quot; sorusunun cevabı
          tek bir madde değil, üç farklı maddenin birlikte okunmasını
          gerektiriyor.
        </p>
      </section>

      {/* 2. KOSGEB KURALI */}
      <section id="kosgeb-kurali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. KOSGEB İçinde Mükerrer Destek Kuralı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          13 Ocak 2024 tarihli ve 32428 sayılı Resmî Gazete&apos;de
          yayımlanan KOSGEB Destek Programları Yönetmeliği&apos;nin 6&apos;ncı
          maddesinin üçüncü fıkrası şu şekilde:
        </p>
        <div className="rounded-2xl border bg-gray-50 p-8">
          <p className="leading-8 text-gray-700">
            &quot;Farklı destek programları içinde bulunması şartıyla aynı
            destek türünden faydalanılabilir. Ancak, gider gerçekleşmesini
            gösteren belgeler yalnızca bir destek için kullanılır.&quot;
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Pratikte bu, iki şey söylüyor. Birincisi: aynı işletme, örneğin
          hem Girişimci Destek Programı&apos;ndan hem de Kapasite Geliştirme
          Destek Programı&apos;ndan, hatta ikisinde de makine-teçhizat
          desteğinden yararlanabilir; bu programlar &quot;farklı destek
          programları&quot; olduğu için engel yok. İkincisi ve asıl kritik
          nokta: aynı faturayı, aynı makineyi, aynı gideri iki ayrı
          programa aynı anda dayanak gösteremezsiniz. Bir CNC tezgahının
          faturası Girişimci Destek Programı&apos;na sunulduysa, aynı
          fatura Kapasite Geliştirme Destek Programı&apos;na ikinci kez
          sunulamaz. Kısıtlama program bazında değil, harcama belgesi
          bazında işliyor.
        </p>
      </section>

      {/* 3. TÜBİTAK KURALI */}
      <section id="tubitak-kurali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. TÜBİTAK&apos;ta Yasak Değil, Düşürme Var
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TÜBİTAK tarafında işleyiş çoğu kişinin tahmin ettiğinden farklı.
          TÜBİTAK 1501 - Sanayi Araştırma Teknoloji Geliştirme ve Yenilik
          Projeleri Destekleme Programı Uygulama Esasları&apos;nın
          &quot;Kamu kaynaklı desteklerin düşürülmesi&quot; başlıklı 9&apos;uncu
          maddesi, aynı mantığı diğer TEYDEB programlarında da yansıtıyor:
        </p>
        <div className="rounded-2xl border bg-gray-50 p-8">
          <p className="mb-4 leading-8 text-gray-700">
            <strong>Madde 9/1:</strong> &quot;Kuruluşlar başvuruda
            bulundukları projeler için kamunun sağladığı diğer desteklerden
            yararlanabilirler. Proje destek başlama ve bitiş tarihleri
            arasında, diğer kamu kaynaklarından sağlanan geri ödemesiz
            destekler, öneri ve/veya destek başvurularında
            belirtilmelidir.&quot;
          </p>
          <p className="leading-8 text-gray-700">
            <strong>Madde 9/2:</strong> Proje dönemi içinde ulusal kamu
            kaynaklarından sağlanan geri ödemesiz destekler, AGY300 mali
            rapor formunda bildirilen desteğin alındığı harcamalardan
            düşülerek TÜBİTAK&apos;ın desteklemeye esas aldığı harcama
            tutarı yeniden hesaplanır.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Yani KOSGEB&apos;den aynı harcama için zaten destek almışsanız,
          TÜBİTAK başvurunuz otomatik olarak reddedilmez; ama bu durumu
          başvuruda beyan etmeniz, TÜBİTAK&apos;ın da o harcama kalemini
          KOSGEB&apos;den gelen tutar kadar düşerek, kalan kısım üzerinden
          hesaplama yapması gerekir. Ayrıca aynı Uygulama Esasları&apos;nın
          54&apos;üncü maddesinin altıncı fıkrası, TÜBİTAK&apos;ın mükerrer
          teşvik ve desteği önlemek amacıyla proje özetini ve Ar-Ge Yardımı
          İstek Formu&apos;nu destek veren diğer kamu kurum ve kuruluşlarıyla
          paylaşabileceğini düzenliyor; yani beyan etmemek risk alınabilir
          bir seçenek değil, kurumlar arası bilgi paylaşımı var.
        </p>
      </section>

      {/* 4. YTB KURALI */}
      <section id="ytb-kurali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Yatırım Teşvik Belgesi&apos;nde Genel Yasak ve İki İstisna
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Üç mekanizma içinde en sert kural Yatırım Teşvik Belgesi&apos;nde.
          30 Mayıs 2025 tarihli ve 32915 sayılı Resmî Gazete&apos;de
          yayımlanan 9903 sayılı Yatırımlarda Devlet Yardımları Hakkında
          Karar&apos;ın 33&apos;üncü maddesinin birinci fıkrası, YTB
          kapsamındaki destekten yararlanan yatırımların{" "}
          <strong>diğer kamu kurum ve kuruluşlarının desteklerinden
          yararlanamayacağını</strong> açıkça düzenliyor. Bu, KOSGEB&apos;in
          ve TÜBİTAK&apos;ın &quot;düşürerek de olsa kabul ediyorum&quot;
          mantığından farklı; burada kural genel bir yasak.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Aynı fıkranın devamında tek bir sınırlı esneklik tanınıyor:
          yatırım yalnızca sübvansiyonlu kredi veya krediyle bağlantılı
          başka bir destekten yararlanıyorsa, faiz veya kâr payı desteği ya
          da makine desteği verilmemesi şartıyla, diğer destek
          unsurlarından (örneğin KDV istisnası, gümrük muafiyeti) ayrıca
          yararlanılabiliyor. Bu imkân, tamamlama vizesi henüz yapılmamış
          eski teşvik belgelerine de uygulanıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          İkinci ve daha dikkat çekici istisna ise Madde 33&apos;ün ikinci
          fıkrasında: <strong>Teknoloji Odaklı Sanayi Hamlesi (HAMLE)
          Programı</strong> kapsamında desteklenen yatırımlar,{" "}
          <strong>KOSGEB ve/veya TÜBİTAK tarafından da doğrudan
          desteklenebilir</strong>. Bu durumda KOSGEB, TÜBİTAK veya diğer
          kamu kurumlarının sağladığı desteklerle yapılan harcamalar,
          yatırımın bütünlüğü kapsamında birlikte değerlendirilebiliyor.
          Yani genel kuralın tam tersi bir istisna: HAMLE Programı&apos;nda
          onaylanmış bir ürünü üreten yatırımlarda üç mekanizma birbirini
          dışlamak yerine, bilinçli olarak birlikte çalışacak şekilde
          kurgulanmış.
        </p>
      </section>

      {/* 5. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Karıştırmayın: Yasak, Düşürme ve Serbestlik Aynı Şey Değil
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Danışmanlık görüşmelerinde en sık karşılaşılan yanlış varsayım,
            &quot;mükerrer destek yasağı&quot;nın üç kurum için de aynı
            sonucu doğurduğu. Oysa üç farklı hukuki sonuç söz konusu:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>
              <strong>KOSGEB&apos;in kendi içinde:</strong> Yasak değil,
              yalnızca &quot;aynı belgeyi iki kez kullanma&quot; sınırı var.
              Farklı programlardan aynı anda faydalanmak mümkün.
            </li>
            <li>
              <strong>TÜBİTAK&apos;ta:</strong> Yasak değil,{" "}
              <strong>düşürme</strong> var. Başka kamu desteği almış bir
              harcama TÜBİTAK&apos;a hiç gösterilemiyor değil; gösterilir,
              beyan edilir, ama destek tutarı buna göre küçülür.
            </li>
            <li>
              <strong>Yatırım Teşvik Belgesi&apos;nde:</strong> Genel kural{" "}
              <strong>tam yasak</strong>. Sadece iki dar istisna (kredi/faiz
              kombinasyonu ve HAMLE Programı) dışında, YTB kapsamındaki
              yatırım diğer kamu desteklerinden yararlanamıyor.
            </li>
          </ul>
          <p className="mt-4 leading-8 text-gray-700">
            Bu üçünü birbirine karıştırmak, ya gereksiz yere elinizdeki
            meşru bir destek kombinasyonundan vazgeçmenize ya da tam tersi,
            YTB&apos;nin sert yasağını TÜBİTAK&apos;ın esnek düşürme
            kuralıyla karıştırıp geri tahsil riski doğuran bir başvuru
            yapmanıza yol açabilir.
          </p>
        </div>
      </section>

      {/* 6. KARŞILAŞTIRMA TABLOSU */}
      <section id="karsilastirma-tablosu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karşılaştırma Tablosu
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Program</th>
                <th className="p-4">Kuralın Hukuki Dayanağı</th>
                <th className="p-4">Kuralın Mantığı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">KOSGEB (kendi içinde)</td>
                <td className="p-4">Destek Programları Yönetmeliği m.6/3</td>
                <td className="p-4">Farklı programlardan yararlanılabilir, aynı gider belgesi tekrar kullanılamaz</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">TÜBİTAK (TEYDEB)</td>
                <td className="p-4">1501 Uygulama Esasları m.9</td>
                <td className="p-4">Beyan şartıyla serbest, başka kamu desteği alınan tutar düşülerek hesaplanır</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">Yatırım Teşvik Belgesi</td>
                <td className="p-4">9903 sayılı Karar m.33</td>
                <td className="p-4">Genel kural yasak; yalnızca kredi/faiz kombinasyonu ve HAMLE Programı istisna</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. ÖRNEK SENARYO */}
      <section id="ornek-senaryo" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Örnek Senaryo (Varsayımsal)
        </h2>
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Aşağıdaki senaryo tamamen varsayımsaldır, gerçek bir müşteri
          vakası değildir; sadece kuralların nasıl bir arada işlediğini
          somutlaştırmak içindir.
        </p>
        <div className="rounded-2xl border bg-gray-50 p-8">
          <p className="mb-4 leading-8 text-gray-700">
            Örneğin bir elektronik üreticisi KOBİ, Ar-Ge departmanında
            yürüttüğü bir yazılım/donanım projesi için TÜBİTAK 1501&apos;e
            başvursun ve aynı dönemde bu projenin bir kısmı için KOSGEB
            Ar-Ge, Ür-Ge ve İnovasyon Destek Programı&apos;ndan da
            yararlanıyor olsun. Bu durumda işletme, KOSGEB&apos;den aldığı
            desteği TÜBİTAK&apos;ın AGY300 formunda beyan etmek zorunda;
            TÜBİTAK bu tutarı düşerek kalan harcama üzerinden hibe
            hesaplar. Proje başarıyla tamamlanıp seri üretime geçildiğinde,
            işletme üretim hattı için ayrıca Yatırım Teşvik Belgesi almak
            isterse, bu belge kapsamındaki yeni yatırım harcamaları
            (makine, bina) için KOSGEB&apos;den veya TÜBİTAK&apos;tan
            ayrıca destek alamaz, çünkü bu kez 9903 sayılı Kararın genel
            yasağı devreye girer. Yatırım, Teknoloji Hamlesi Programı
            çağrı planında onaylı bir ürüne aitse, bu noktada KOSGEB
            ve/veya TÜBİTAK desteği istisnai olarak yine devreye
            girebilir.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, bir işletmenin tek bir
            yatırım planı içinde aslında birbirinden bağımsız birden fazla
            harcama kalemi olduğunu fark etmemesi. Ar-Ge aşaması, seri
            üretime geçiş aşaması ve kapasite artırım aşaması genelde farklı
            zaman dilimlerinde ve farklı harcama kalemleriyle gerçekleşir;
            bu aşamaları tek bir &quot;proje&quot; gibi değil, her biri
            kendi destek mekanizmasına uygun ayrı bir dönem olarak
            planlamak, hem mükerrer destek riskini azaltır hem de hangi
            kalemde hangi programın daha avantajlı olduğunu görmeyi
            kolaylaştırır.
          </p>
        </div>
      </section>

      {/* 8. BAŞVURU SIRASI */}
      <section id="basvuru-sirasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Başvuru Öncesi Planlama Sırası
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Üç programı aynı yatırım için değerlendiriyorsanız, başvuru
          sırasını rastgele değil, aşağıdaki mantıkla planlamak hem zaman
          kaybını hem de geri tahsil riskini azaltır:
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">1.</span> Yatırım
            planınızı harcama kalemi bazında ayırın (Ar-Ge gideri, makine
            alımı, bina/altyapı, personel gibi).
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">2.</span> Her
            kalemin Yatırım Teşvik Belgesi&apos;nin asgari tutar ve sektör
            şartını karşılayıp karşılamadığını netleştirin; karşılıyorsa
            genel kural bu kalemi diğer kamu desteklerinden ayırır.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">3.</span> YTB
            kapsamı dışında kalan kalemler için KOSGEB ve/veya TÜBİTAK
            programlarının hangisine uygun olduğunu ayrı ayrı değerlendirin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">4.</span> Birden
            fazla kamu kaynaklı destekten yararlanılan bir kalem varsa,
            bunu ilgili kurumun başvuru formunda (TÜBİTAK&apos;ta AGY300
            gibi) mutlaka beyan edin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">5.</span>{" "}
            Yatırımınız Teknoloji Hamlesi (HAMLE) Programı kapsamında
            onaylı bir ürüne aitse, KOSGEB ve/veya TÜBİTAK&apos;ın YTB ile
            birlikte doğrudan destek verme istisnasını ayrıca araştırın.
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
            ✅ &quot;Mükerrer destek yasağı var&quot; cümlesini üç program
            için de aynı anlama gelen tek bir kural sanmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yatırım Teşvik Belgesi almayı düşünüyorsanız, kararı vermeden
            önce diğer kamu desteklerinden vazgeçip vazgeçmeyeceğinizi
            değerlendirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ TÜBİTAK başvurusunda başka kamu desteklerini beyan etmeyi
            unutmayın, kurumlar arası bilgi paylaşımı yapılabiliyor
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Aynı harcama belgesini hiçbir kombinasyonda iki farklı
            programa aynı anda dayanak göstermeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ HAMLE Programı istisnasının yalnızca çağrı planında onaylı
            ürünler için geçerli olduğunu, genel bir serbestlik olmadığını
            unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Her üç kurumun da uygulama esasları zaman içinde değişebilir,
            başvuru döneminde güncel metni mutlaka yeniden teyit edin
          </div>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Destek Programları Yönetmeliği ve Destek Programları
            </a>
          </li>
          <li>
            <a
              href="https://tubitak.gov.tr/tr/destekler/sanayi/ulusal-destek-programlari/1501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜBİTAK 1501 - Uygulama Esasları
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

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOSGEB&apos;den aldığım destek, TÜBİTAK başvurumu otomatik
              olarak reddettirir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, otomatik ret söz konusu değil. Aynı dönemde aynı gider
              için KOSGEB&apos;den alınan geri ödemesiz destek, TÜBİTAK&apos;ın
              AGY300 formunda beyan edilmelidir ve bu tutar TÜBİTAK&apos;ın
              desteklemeye esas aldığı harcama tutarından düşülür; başvuru
              reddedilmez, hesaplama buna göre yeniden yapılır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yatırım Teşvik Belgesi alırsam KOSGEB&apos;e hiç başvuramaz
              mıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Aynı yatırım harcaması için genel kural budur: YTB kapsamında
              desteklenen bir yatırım, diğer kamu kurum ve kuruluşlarının
              (KOSGEB dahil) desteklerinden yararlanamaz. İstisnalar yalnızca
              kredi/faiz-kâr payı ilişkili destek kombinasyonu ve Teknoloji
              Hamlesi Programı kapsamındaki özel durumdur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Teknoloji Hamlesi Programı&apos;ndaki istisna tam olarak ne
              sağlıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              HAMLE Programı çağrı planında onaylanan bir ürünü üreten
              yatırımlar için Yatırım Teşvik Belgesi ile KOSGEB ve/veya
              TÜBİTAK desteği aynı anda ve doğrudan kullanılabiliyor;
              harcamalar yatırımın bütünlüğü kapsamında birlikte
              değerlendiriliyor. Bu, üç mekanizmanın normalde birbirini
              dışladığı genel kuralın özel bir istisnasıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Aynı makinenin faturasını hem KOSGEB&apos;e hem TÜBİTAK&apos;a
              gösterebilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Hiçbir kombinasyonda aynı harcama belgesi iki farklı
              destek başvurusunda tam karşılıksız şekilde kullanılamaz.
              KOSGEB kendi içinde bunu belge tekrarını yasaklayarak, TÜBİTAK
              ise beyan edilen tutarı düşerek, YTB ise genel yasağıyla
              engeller.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Üç destekten hangisini alacağımı başvuru öncesinde nasıl
              planlamalıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Yatırımınızı harcama kalemi bazında ayırıp hangi kaleme hangi
              programın uygun olduğunu netleştirmek, başvuruları doğru
              sırayla yapmak (örneğin önce Yatırım Teşvik Belgesi kapsamına
              giren kalemleri ayırmak, kalan kalemler için KOSGEB/TÜBİTAK
              değerlendirmek) ve her kurumun o anki uygulama esaslarını
              teyit etmek gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Mükerrer destek aldığım tespit edilirse ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Geri tahsil riski doğar; haksız yararlanılan destek tutarı
              yasal faiziyle birlikte geri istenebilir ve ilgili kurumun
              gelecekteki başvurularda ek belge/denetim talep etmesi gibi
              idari sonuçlar da gündeme gelebilir.
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
          KOSGEB, TÜBİTAK ve Yatırım Teşvik Belgesi&apos;ni aynı yatırımda
          birlikte kullanıp kullanamayacağınızın cevabı tek bir evet ya da
          hayır değil. KOSGEB kendi içinde esnek, TÜBİTAK beyan ve düşürme
          mekanizmasıyla çalışıyor, Yatırım Teşvik Belgesi ise dar istisnalar
          dışında genel bir yasak uyguluyor. Doğru karar, yatırımınızı
          harcama kalemi bazında ayırıp her kalemin hangi mevzuata tabi
          olduğunu netleştirdikten sonra verilebilir; bu ayrımı başvuru
          öncesinde yapmamak, hem potansiyel destekten mahrum kalmaya hem
          de geri tahsil riskine yol açabilir.
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
            href="/tubitak-danismanlik"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • TÜBİTAK DANIŞMANLIĞI</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK Danışmanlığı</h3>
          </Link>
          <Link
            href="/yatirim-tesvik-belgesi-danismanligi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • YATIRIM TEŞVİK BELGESİ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgesi Danışmanlığı</h3>
          </Link>
          <Link
            href="/blog/makine-ekipman-yatirimi-kosgeb-mi-yatirim-tesvik-belgesi-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • YATIRIM TEŞVİK BELGESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB mi Yatırım Teşvik Belgesi mi Avantajlı?</h3>
          </Link>
          <Link
            href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • AR-GE DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1501/1507 Ar-Ge Destekleri 2026</h3>
          </Link>
          <Link
            href="/blog/kosgeb-stratejik-urun-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • TEKNOLOJİ HAMLESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Stratejik Ürün Destek Programı</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "KOSGEB'den aldığım destek, TÜBİTAK başvurumu otomatik olarak reddettirir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır, otomatik ret söz konusu değil. Aynı dönemde aynı gider için KOSGEB'den alınan geri ödemesiz destek, TÜBİTAK'ın AGY300 formunda beyan edilmelidir ve bu tutar TÜBİTAK'ın desteklemeye esas aldığı harcama tutarından düşülür; başvuru reddedilmez, hesaplama buna göre yeniden yapılır.",
                },
              },
              {
                "@type": "Question",
                name: "Yatırım Teşvik Belgesi alırsam KOSGEB'e hiç başvuramaz mıyım?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aynı yatırım harcaması için genel kural budur: YTB kapsamında desteklenen bir yatırım, diğer kamu kurum ve kuruluşlarının (KOSGEB dahil) desteklerinden yararlanamaz. İstisnalar yalnızca kredi/faiz-kâr payı ilişkili destek kombinasyonu ve Teknoloji Hamlesi Programı kapsamındaki özel durumdur.",
                },
              },
              {
                "@type": "Question",
                name: "Teknoloji Hamlesi Programı'ndaki istisna tam olarak ne sağlıyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HAMLE Programı çağrı planında onaylanan bir ürünü üreten yatırımlar için Yatırım Teşvik Belgesi ile KOSGEB ve/veya TÜBİTAK desteği aynı anda ve doğrudan kullanılabiliyor; harcamalar yatırımın bütünlüğü kapsamında birlikte değerlendiriliyor. Bu, üç mekanizmanın normalde birbirini dışladığı genel kuralın özel bir istisnasıdır.",
                },
              },
              {
                "@type": "Question",
                name: "Aynı makinenin faturasını hem KOSGEB'e hem TÜBİTAK'a gösterebilir miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Hiçbir kombinasyonda aynı harcama belgesi iki farklı destek başvurusunda tam karşılıksız şekilde kullanılamaz. KOSGEB kendi içinde bunu belge tekrarını yasaklayarak, TÜBİTAK ise beyan edilen tutarı düşerek, YTB ise genel yasağıyla engeller.",
                },
              },
              {
                "@type": "Question",
                name: "Üç destekten hangisini alacağımı başvuru öncesinde nasıl planlamalıyım?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yatırımınızı harcama kalemi bazında ayırıp hangi kaleme hangi programın uygun olduğunu netleştirmek, başvuruları doğru sırayla yapmak (örneğin önce Yatırım Teşvik Belgesi kapsamına giren kalemleri ayırmak, kalan kalemler için KOSGEB/TÜBİTAK değerlendirmek) ve her kurumun o anki uygulama esaslarını teyit etmek gerekir.",
                },
              },
              {
                "@type": "Question",
                name: "Mükerrer destek aldığım tespit edilirse ne olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Geri tahsil riski doğar; haksız yararlanılan destek tutarı yasal faiziyle birlikte geri istenebilir ve ilgili kurumun gelecekteki başvurularda ek belge/denetim talep etmesi gibi idari sonuçlar da gündeme gelebilir.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
