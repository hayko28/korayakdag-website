import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Üretimde Kurumlar Vergisi %12,5'e İniyor: 2027 Hazırlık Rehberi | Koray Akdağ",
  description:
    "7582 sayılı Kanun ile Kurumlar Vergisi Kanunu 32/8 maddesi değişti: sanayi sicil belgeli ve fiilen üretim yapan şirketlerde kazanç, 2027'den itibaren %12,5 oranında vergilendirilecek. Sanayi sicil belgesi şartı, fason imalatta aranan 6 koşul, karma faaliyette matrah hesaplama ve 2026 sonuna kadar yapılması gerekenlerle güncel rehber.",
  keywords: [
    "üretimde kurumlar vergisi %12,5",
    "7582 sayılı kanun kurumlar vergisi",
    "sanayi sicil belgesi kurumlar vergisi indirimi",
    "fason imalat kurumlar vergisi indirimi şartları",
    "26 seri no'lu kurumlar vergisi tebliği",
    "üretim kazancı matrah hesaplama",
    "KVK 32/8",
    "2027 kurumlar vergisi oranı",
  ],
  alternates: {
    canonical: "/blog/uretimde-kurumlar-vergisi-12-5-sanayi-sicil-belgesi-fason-imalat-2027",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Üretim Şirketlerinde Kurumlar Vergisi 2027'de %12,5'e İniyor: Sanayi Sicil Belgeniz ve Fason İmalat Sözleşmeniz Hazır mı?"
      description="7582 sayılı Kanun'un Kurumlar Vergisi Kanunu'nun 32. maddesinin 8. fıkrasında yaptığı değişiklikle, sanayi sicil belgesine sahip ve fiilen üretim yapan şirketlerin üretim kazancı 2027 vergilendirme döneminden itibaren %12,5 oranında vergilendirilecek. Sanayi sicil belgesi ve fiilî üretim şartı, fason imalatta aranan koşullar, karma faaliyette matrah hesaplama ve şirketlerin 2026 sonuna kadar yapması gerekenlerle güncel rehber."
      category="VERGİ TEŞVİKLERİ • ÜRETİM KAZANCI İNDİRİMİ • 2026"
      date="Kasım 2026"
      readTime="11 Dakika"
      slug="uretimde-kurumlar-vergisi-12-5-sanayi-sicil-belgesi-fason-imalat-2027"
      coverImage="https://images.unsplash.com/photo-1581092335397-9583eb92d232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Üretim Kazancınızın Vergi Ayrımını Birlikte Netleştirelim"
      ctaText="Şirketinizin sanayi sicil belgesi kapsamı, fason imalat sözleşmeleri ve karma faaliyet gelirlerinin 2027'deki %12,5 oranlı indirime uygun şekilde ayrıştırılıp ayrıştırılmadığını birlikte değerlendirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Üretimde %12,5 Kurumlar Vergisi Ne Anlama Geliyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>7582 sayılı Kanun</strong>&apos;un (4 Haziran 2026 tarihli, 33270 sayılı Resmî Gazete) 8. maddesiyle Kurumlar Vergisi Kanunu&apos;nun <strong>32/8. fıkrası</strong> değişti; sanayi sicil belgeli imalat ve nitelikli zirai üretim kazancındaki indirim <strong>2027 vergilendirme döneminden itibaren 12,5 puana</strong> çıkıyor (genel oran %25&apos;te sabit kalıyor).</li>
          <li>✔ 2026 hesap döneminde indirim hâlâ <strong>1 puan</strong> (efektif oran %24); <strong>12,5 puanlık indirim (efektif %12,5 oran) ilk kez 2027 kazançlarına</strong> uygulanacak.</li>
          <li>✔ Uygulama esasları <strong>26 Seri No&apos;lu Kurumlar Vergisi Genel Tebliği</strong> ile açıklandı (4 Temmuz 2026 tarihli, 33300 sayılı Resmî Gazete).</li>
          <li>✔ İndirimden yararlanmak için <strong>sanayi sicil belgesine sahip olmak yetmiyor</strong>; şirketin bu belge kapsamında <strong>fiilen üretim faaliyetiyle uğraşması</strong> gerekiyor.</li>
          <li>✔ <strong>Fason imalatta</strong> kendi üretim payının fasondan fazla olması, ham madde/risk/organizasyonun işletmede kalması gibi birden fazla şart kümülatif olarak aranıyor.</li>
          <li>✔ Üretimle birlikte ticaret veya hizmet geliri de olan şirketlerde indirime esas matrah, <strong>üretim kazancının ticari bilanço kârına oranlanmasıyla</strong> hesaplanıyor.</li>
          <li>✔ Yalnızca <strong>kurumlar vergisi mükellefleri</strong> kapsamda; gelir vergisi mükellefi şahıs işletmeleri bu indirimden yararlanamıyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">📑 İçindekiler</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. 7582 Sayılı Kanun ve %12,5 Oranı Nedir?
          </Link>
          <Link href="#oranlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Oran Değişimi: 2026 ve 2027 Karşılaştırması
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Yararlanabilir? Sanayi Sicil Belgesi ve Fiilî Üretim Şartı
          </Link>
          <Link href="#fason" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Fason İmalatta Aranan Şartlar
          </Link>
          <Link href="#hesaplama" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Karma Faaliyette Matrah Nasıl Hesaplanır?
          </Link>
          <Link href="#etkilesim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. İhracat İndirimi ve Asgari Kurumlar Vergisiyle Etkileşim
          </Link>
          <Link href="#hazirlik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. 2026 Sonuna Kadar Yapılması Gerekenler
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
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. 7582 Sayılı Kanun ve %12,5 Oranı Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türkiye&apos;de genel kurumlar vergisi oranı %25&apos;tir. Ancak kanun koyucu,
          2022&apos;den beri sanayi sicil belgesine sahip ve fiilen imalat
          yapan şirketlerin üretim kazancına ayrı, indirimli bir oran
          uyguluyor. Bu indirim 2022-2026 döneminde <strong>1 puan</strong>
          olarak uygulandı; yani üretim kazancı fiilen %24 oranında
          vergilendirildi.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          <strong>21 Mayıs 2026&apos;da kabul edilen ve 4 Haziran 2026 tarihli,
          33270 sayılı Resmî Gazete&apos;de yayımlanan 7582 sayılı Bazı
          Kanunlarda Değişiklik Yapılmasına Dair Kanun&apos;un 8.
          maddesi</strong>, 5520 sayılı Kurumlar Vergisi Kanunu&apos;nun 32.
          maddesinin 8. fıkrasını değiştirdi. Değişiklikle, sanayi sicil
          belgeli üretim ve nitelikli zirai üretim kazancındaki indirim,
          <strong> 2027 vergilendirme dönemi ve izleyen dönemler için 12,5
          puana</strong> çıkarıldı. Yani genel oran %25&apos;te sabit
          kalırken, bu kazanç kalemi fiilen %12,5 oranında
          vergilendirilecek.
        </p>
        <p className="leading-8 text-gray-700">
          Uygulamanın usul ve esasları, Gelir İdaresi Başkanlığı&apos;nın
          <strong> 4 Temmuz 2026 tarihli, 33300 sayılı Resmî Gazete&apos;de</strong>
          yayımladığı, Kurumlar Vergisi Genel Tebliği (Seri No: 1)&apos;de
          değişiklik yapan <strong>26 Seri No&apos;lu Tebliğ</strong> ile
          açıklandı. Bu yazıda anlatılan sanayi sicil belgesi, fason imalat
          ve matrah hesaplama kuralları doğrudan bu tebliğe dayanıyor.
        </p>
      </section>

      {/* 2. ORANLAR */}
      <section id="oranlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Oran Değişimi: 2026 ve 2027 Karşılaştırması
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Aradaki farkı net görmek için en pratik yol, aynı üretim kazancının
          2026 ve 2027 dönemlerinde ne kadar vergilendirileceğini yan yana
          koymak:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[600px] text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Dönem</th>
                <th className="p-5">Üretim Kazancına İndirim</th>
                <th className="p-5">Efektif Oran</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-5">2022 - 2026 hesap dönemleri</td>
                <td className="p-5">1 puan</td>
                <td className="p-5">%24</td>
              </tr>
              <tr className="bg-white">
                <td className="p-5">2027 ve izleyen hesap dönemleri</td>
                <td className="p-5">12,5 puan</td>
                <td className="p-5">%12,5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Özel hesap dönemine tabi kurumlarda 12,5 puanlık indirim, <strong>2027
          takvim yılında başlayan özel hesap döneminden</strong> itibaren
          uygulanıyor. Dikkat edilmesi gereken nokta, genel kurumlar vergisi
          oranının bu düzenlemeyle değişmediği; yalnızca sanayi sicil
          belgeli üretim ve nitelikli zirai üretim kazancına uygulanan
          indirimin büyüdüğüdür. Şirketin ticaret veya hizmet gelirleri bu
          indirimden etkilenmez ve %25 üzerinden vergilendirilmeye devam
          eder.
        </p>
      </section>

      {/* 3. ŞARTLAR + KARIŞTIRMAYIN */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Yararlanabilir? Sanayi Sicil Belgesi ve Fiilî Üretim Şartı
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">✅ Sanayi/İmalat Üretimi</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>Sanayi sicil belgesine sahip olmalı</li>
              <li>Belge kapsamındaki ürünü fiilen üretmeli</li>
              <li>Üretilen tüm ürünler belgeye işlenmiş olmalı</li>
              <li>Yalnızca kurumlar vergisi mükellefi olmalı</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">✅ Nitelikli Zirai Üretim</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>Çiftçi kayıt belgesi, gıda işletmesi kayıt belgesi, işletme onay belgesi veya üretici belgesinden birine sahip olmalı</li>
              <li>Sanayi sicil belgesi şartı aranmaz, ancak fiilen üretim yapılmalı</li>
              <li>Kurumlar vergisi mükellefi tüzel kişi olmalı</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Belgeye Sahip Olmak ile Fiilen Üretim Yapmak Aynı Şey Değil
          </h3>
          <p className="leading-8 text-gray-700">
            Birçok şirket sahibi &quot;sanayi sicil belgem var, demek ki
            %12,5&apos;ten yararlanırım&quot; diye düşünüyor. Ancak tebliğ,
            belgeyi tek başına yeterli görmüyor; şirketin o belge kapsamında
            <strong> fiilen üretim faaliyetiyle uğraşması</strong> ayrı bir
            şart. Örneğin üretimi büyük ölçüde durdurmuş, belgesi hâlâ
            geçerli ama esasen ticaret veya ithalat yapan bir şirket, belge
            kendisinde olsa bile bu indirimden yararlanamaz. Bunun yanında bu
            indirim, tamamen ayrı bir kural olan <Link href="/blog/asgari-kurumlar-vergisi-nedir-2026-hesaplama-rehberi" className="text-orange-600 underline">asgari kurumlar
            vergisi</Link> ile de karıştırılmamalı: üretim indirimi
            nedeniyle alınmayan vergi, asgari kurumlar vergisinden ayrıca
            düşülebilir ama bu indirim şirketi asgari vergi hesaplamasından
            tamamen muaf tutmaz.
          </p>
        </div>
      </section>

      {/* 4. FASON */}
      <section id="fason" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Fason İmalatta Aranan Şartlar
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Üretiminin bir kısmını fason olarak dışarıya yaptıran şirketler de
          bu kazanç için indirimden yararlanabilir, ancak tebliğ bunu
          kümülatif şartlara bağlıyor. Aşağıdaki koşulların <strong>hepsinin
          birlikte</strong> sağlanması gerekiyor:
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">1️⃣</div>
            <p className="text-gray-700">Fason işlem, yalnızca şirketin sanayi sicil belgesinde veya faaliyet ruhsatında yazılı üretim konusu kapsamında yaptırılmalı.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">2️⃣</div>
            <p className="text-gray-700">Üretimin büyük kısmı fasona değil, şirketin kendi üretimine dayanmalı; üretimin tamamına yakını dışarıda yaptırılıyorsa indirim uygulanmaz.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">3️⃣</div>
            <p className="text-gray-700">Fasona verilen üretim miktarı, kapasite raporundaki fiilî yıllık kapasiteyle sınırlı kalmalı.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">4️⃣</div>
            <p className="text-gray-700">Üretim riski ve organizasyonu (planlama, kalite kontrol, üretim süreci) şirkette kalmalı; fasoncu yalnızca imalatı gerçekleştirmeli.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">5️⃣</div>
            <p className="text-gray-700">Ham madde ve yardımcı maddeleri şirket temin etmeli; bu malzemeleri fasoncu tedarik ediyorsa işlem bu kapsamda fason sayılmaz.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">6️⃣</div>
            <p className="text-gray-700">Muhasebe kayıtları, fason üretimden doğan kazancın ayrı ve net olarak gösterilmesine, matrahın belgelerle ispat edilmesine imkân vermeli.</p>
          </div>
        </div>
      </section>

      {/* 5. HESAPLAMA + UZMAN NOTU */}
      <section id="hesaplama" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Karma Faaliyette Matrah Nasıl Hesaplanır?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Üretimin yanında ticaret veya hizmet faaliyeti de yürüten
          şirketlerde, kazancın tamamına değil yalnızca üretimden gelen
          kısmına indirimli oran uygulanır. Tebliğdeki formül şöyle:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="mb-4 text-center text-xl font-bold text-[#071A2F]">
            İndirime Esas Matrah = Kurumlar Vergisi Matrahı × (Üretim Kazancı ÷ Ticari Bilanço Kârı)
          </p>
          <p className="text-center text-gray-600">
            Bulunan tutar, hem üretim kazancını hem de safi kurum kazancını aşamaz.
          </p>
        </div>
        <p className="mt-6 mb-8 leading-8 text-gray-700">
          Birden fazla üretim faaliyeti varsa bunların kâr ve zararları
          birlikte değerlendirilir. Üretim faaliyetlerinin toplamı zararla
          sonuçlanıyorsa, şirketin ticaret veya hizmet faaliyetinden elde
          ettiği kâr bu zararı telafi etmek için kullanılmaz; o hesap döneminde
          üretim kazancına ait indirim uygulanacak bir tutar kalmaz.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, bu formülün yıl sonunda
            değil, <strong>hesap döneminin başından itibaren</strong> tutarlı
            muhasebe kayıtları gerektirmesidir. Üretim kazancını ticari
            bilanço kârından ayrıştırmak için gelir ve gider kalemlerinin
            baştan itibaren ayrı alt hesaplarda izlenmesi, ortak giderlerin
            (genel yönetim, finansman gibi) üretim ve diğer faaliyetler
            arasında makul ve tutarlı bir anahtarla paylaştırılması gerekir.
            Yıl sonuna gelindiğinde bu ayrımı geriye dönük yeniden kurmaya
            çalışmak, hem zaman kaybettirir hem de vergi incelemesinde
            matrahın ispatını zayıflatır.
          </p>
        </div>
      </section>

      {/* 6. ETKİLEŞİM */}
      <section id="etkilesim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. İhracat İndirimi ve Asgari Kurumlar Vergisiyle Etkileşim
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Kendi ürettiği malı ihraç eden üretici şirketler için ayrıca bir
          çakışma kuralı var: normalde ihracat kazancına Kurumlar Vergisi
          Kanunu&apos;nun 32. maddesi kapsamında <strong>5 puanlık ayrı bir
          indirim</strong> uygulanabiliyor. Ancak kendi ürettiğini ihraç eden
          bir şirkette, bu ihracat kazancı zaten üretim kazancının bir
          parçası sayıldığından, <strong>12,5 puanlık üretim indirimi ile 5
          puanlık ihracat indirimi aynı kazanca birlikte uygulanmaz</strong>;
          üretim kazancının tamamı tek bir bütün olarak 12,5 puanlık
          indirime tabi tutulur.
        </p>
        <p className="leading-8 text-gray-700">
          Bu indirim ayrıca <Link href="/blog/asgari-kurumlar-vergisi-nedir-2026-hesaplama-rehberi" className="text-orange-600 underline">yurt içi asgari kurumlar vergisi</Link>
          hesabını da etkiler: sanayi sicil belgeli üretim indirimi nedeniyle
          alınmayan vergi tutarı, asgari kurumlar vergisinden mahsup
          edilebiliyor. Ancak bu, üretim indiriminden yararlanan şirketlerin
          asgari vergiden otomatik olarak muaf olduğu anlamına gelmiyor; iki
          hesaplamanın her geçici vergi döneminde yan yana yapılması
          gerekiyor.
        </p>
      </section>

      {/* 7. HAZIRLIK */}
      <section id="hazirlik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. 2026 Sonuna Kadar Yapılması Gerekenler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          %12,5&apos;lik oran 2027 kazançlarından itibaren uygulanacağı için,
          hazırlığın 2026 hesap dönemi kapanmadan tamamlanması gerekiyor.
          Önceliklendirilmesi gereken adımlar:
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Belge Güncelliği</h3>
            <p className="mt-2 text-sm text-gray-600">Sanayi sicil belgesinin geçerliliği ve üretilen ürünlerin belgeye işlenmiş olması kontrol edilmeli</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Kapasite Raporu</h3>
            <p className="mt-2 text-sm text-gray-600">Raporun süresi ve fiilî kapasiteyle uyumu gözden geçirilmeli, gerekirse yenilenmeli</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">Hesap Planı Ayrımı</h3>
            <p className="mt-2 text-sm text-gray-600">Üretim ve diğer faaliyetleri ayıran alt hesaplar muhasebe sisteminde açılmalı</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">Ortak Gider Anahtarı</h3>
            <p className="mt-2 text-sm text-gray-600">Genel yönetim ve finansman gibi ortak giderlerin dağıtım yöntemi standart hale getirilmeli</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">5️⃣</div>
            <h3 className="text-base font-bold">NACE Kodu Kontrolü</h3>
            <p className="mt-2 text-sm text-gray-600">Şirketin NACE kodlarının fiilen yapılan üretim konusuyla uyumlu olduğu teyit edilmeli</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">6️⃣</div>
            <h3 className="text-base font-bold">Fason Sözleşmeleri</h3>
            <p className="mt-2 text-sm text-gray-600">Mevcut fason sözleşmeleri, ham madde temini ve risk devri açısından gözden geçirilmeli</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">7️⃣</div>
            <h3 className="text-base font-bold">Makine Parkı Tutarlılığı</h3>
            <p className="mt-2 text-sm text-gray-600">Mevcut makine parkının üretim konusu ve kapasite raporuyla tutarlı olduğu kontrol edilmeli</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">8️⃣</div>
            <h3 className="text-base font-bold">Danışmanlık Desteği</h3>
            <p className="mt-2 text-sm text-gray-600">Matrah ayrımı ve YMM raporlaması için vergi danışmanlığı sürecine şimdiden başlanmalı</p>
          </div>
        </div>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Sanayi sicil belgesine sahip olmak tek başına yeterli değildir; fiilen üretim faaliyeti şarttır.</li>
            <li>Gelir vergisi mükellefi şahıs işletmeleri bu indirimden yararlanamaz; yalnızca kurumlar vergisi mükellefleri kapsamdadır.</li>
            <li>Fason imalatta altı şartın tamamı birlikte aranır; tek bir şartın eksik olması indirimi kullanılamaz hale getirebilir.</li>
            <li>Kendi ürettiğini ihraç eden şirketlerde 12,5 puanlık üretim indirimi ile 5 puanlık ihracat indirimi aynı kazanca birlikte uygulanmaz.</li>
            <li>Yazılım ve bilişim üretiminin sanayi sicil belgesi kapsamında bu indirimden ne ölçüde yararlanacağı konusunda piyasada farklı yorumlar bulunuyor; bu alanda faaliyet gösteren şirketlerin güncel GİB açıklamalarını ve kendi durumlarını vergi danışmanıyla birlikte teyit etmesi gerekir.</li>
            <li>Üretim indiriminden yararlanmak, asgari kurumlar vergisi hesaplamasından muafiyet sağlamaz; ikisi ayrı ayrı hesaplanmalıdır.</li>
          </ul>
        </div>
      </section>

      {/* 9. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                7582 Sayılı Bazı Kanunlarda Değişiklik Yapılmasına Dair Kanun (4 Haziran 2026, 33270 sayılı Resmî Gazete) - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2026/07/20260704-1.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Kurumlar Vergisi Genel Tebliği (Seri No: 1)&apos;de Değişiklik Yapılmasına Dair Tebliğ (Seri No: 26) (4 Temmuz 2026, 33300 sayılı Resmî Gazete) - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.5520.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                5520 Sayılı Kurumlar Vergisi Kanunu (madde 32 dahil) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Gelir İdaresi Başkanlığı - gib.gov.tr
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
              %12,5&apos;lik kurumlar vergisi oranı ne zaman yürürlüğe giriyor?
            </h3>
            <p className="leading-8 text-gray-700">
              2027 vergilendirme dönemi ve izleyen dönemlerde elde edilen
              üretim kazançlarına uygulanacak. 2026 hesap döneminde indirim
              hâlâ 1 puan (efektif %24 oran) seviyesinde devam ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sanayi sicil belgesi olan her şirket otomatik olarak %12,5&apos;ten mi yararlanır?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Belgeye sahip olmanın yanında, belge kapsamındaki
              üretimin fiilen yapılıyor olması gerekir. Üretimi fiilen
              durmuş veya esas faaliyeti ticaret/hizmete kaymış bir şirket,
              belgesi geçerli olsa bile indirimden yararlanamaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Fason imalat yaptıran şirketler bu indirimden yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, ancak fason işlemin sanayi sicil belgesindeki üretim
              konusu kapsamında olması, kendi üretim payının fasondan fazla
              olması, ham madde temini ile üretim riskinin şirkette kalması
              ve fason bedelinin fiilî kapasiteyle sınırlı olması gibi
              birden fazla şartın birlikte sağlanması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yazılım ve bilişim şirketleri bu indirimden yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Sanayi sicil belgesi kapsamında münhasıran yazılım/bilişim
              üretimi yapan kurumların da indirimden yararlanabileceği
              yönünde açıklamalar bulunuyor, ancak oranın uygulanma
              yöntemine ilişkin yorum farklılıkları sürüyor. Bu alandaki
              şirketlerin güncel resmî açıklamaları takip etmesi ve kendi
              durumunu vergi danışmanıyla teyit etmesi önerilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şahıs işletmeleri (gelir vergisi mükellefleri) bu indirimden yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Düzenleme yalnızca Kurumlar Vergisi Kanunu&apos;nun 32.
              maddesine dayandığı için sadece kurumlar vergisi mükelleflerini
              kapsar; gelir vergisi mükellefi şahıs işletmeleri bu
              indirimden faydalanamaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Üretim ve ticaret faaliyetini birlikte yürüten bir şirkette indirim nasıl hesaplanır?
            </h3>
            <p className="leading-8 text-gray-700">
              İndirime esas matrah, kurumlar vergisi matrahının, üretim
              kazancının ticari bilanço kârına oranlanmasıyla bulunan
              kısmına uygulanır. Bulunan tutar hem üretim kazancını hem de
              safi kurum kazancını aşamaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu indirim ile asgari kurumlar vergisi birbirini nasıl etkiler?
            </h3>
            <p className="leading-8 text-gray-700">
              Üretim indirimi nedeniyle alınmayan vergi tutarı, yurt içi
              asgari kurumlar vergisinden mahsup edilebilir. Ancak bu,
              şirketin asgari vergi hesaplamasından tamamen muaf olduğu
              anlamına gelmez; iki hesaplama her geçici vergi döneminde ayrı
              ayrı yapılmalıdır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Üretim Kazancınızın Vergi Ayrımını Birlikte Netleştirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Sanayi sicil belgenizin kapsamı, fason imalat sözleşmeleriniz ve
            üretim dışı gelirlerinizin 2027&apos;deki %12,5 oranlı indirime
            uygun şekilde ayrıştırılıp ayrıştırılmadığını{" "}
            <Link href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi" className="text-orange-600 underline">
              vergi danışmanlığı hizmetimiz
            </Link>{" "}
            kapsamında birlikte değerlendirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçin.
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
          2027&apos;de yürürlüğe girecek %12,5&apos;lik oran, üretim yapan
          şirketler için ciddi bir vergi avantajı sunuyor; ancak bu avantaj
          kendiliğinden gelmiyor. Sanayi sicil belgesinin güncelliği, fiilî
          üretim faaliyetinin ispatı, fason imalatta aranan kümülatif
          şartlar ve karma faaliyette matrahın doğru ayrıştırılması, 2026
          hesap dönemi kapanmadan önce düzenlenmesi gereken konular.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, üretim şirketlerinin
          sanayi sicil belgesi ve fason imalat süreçlerini 2027&apos;deki
          indirimli orana uygun şekilde yapılandırmasına, muhasebe kayıtlarının
          matrah ayrımını güvenli biçimde yansıtmasına ve bu sürecin asgari
          kurumlar vergisi hesabıyla birlikte doğru yürütülmesine yardımcı
          oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/asgari-kurumlar-vergisi-nedir-2026-hesaplama-rehberi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Asgari Kurumlar Vergisi Nedir? 2026 Hesaplama Rehberi</h3>
          </Link>
          <Link
            href="/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ TEŞVİKLERİ • YABANCI YATIRIM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;nin 2026 Yatırım Vergi Paketi</h3>
          </Link>
          <Link
            href="/blog/tam-tasdik-nedir-kimler-yaptirmali-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Tam Tasdik Nedir? Kimler Yaptırmalı, Avantajları</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"%12,5'lik kurumlar vergisi oranı ne zaman yürürlüğe giriyor?","acceptedAnswer":{"@type":"Answer","text":"2027 vergilendirme dönemi ve izleyen dönemlerde elde edilen üretim kazançlarına uygulanacak. 2026 hesap döneminde indirim hâlâ 1 puan (efektif %24 oran) seviyesinde devam ediyor."}},{"@type":"Question","name":"Sanayi sicil belgesi olan her şirket otomatik olarak %12,5'ten mi yararlanır?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Belgeye sahip olmanın yanında, belge kapsamındaki üretimin fiilen yapılıyor olması gerekir. Üretimi fiilen durmuş veya esas faaliyeti ticaret/hizmete kaymış bir şirket, belgesi geçerli olsa bile indirimden yararlanamaz."}},{"@type":"Question","name":"Fason imalat yaptıran şirketler bu indirimden yararlanabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Evet, ancak fason işlemin sanayi sicil belgesindeki üretim konusu kapsamında olması, kendi üretim payının fasondan fazla olması, ham madde temini ile üretim riskinin şirkette kalması ve fason bedelinin fiilî kapasiteyle sınırlı olması gibi birden fazla şartın birlikte sağlanması gerekir."}},{"@type":"Question","name":"Yazılım ve bilişim şirketleri bu indirimden yararlanabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Sanayi sicil belgesi kapsamında münhasıran yazılım/bilişim üretimi yapan kurumların da indirimden yararlanabileceği yönünde açıklamalar bulunuyor, ancak oranın uygulanma yöntemine ilişkin yorum farklılıkları sürüyor. Bu alandaki şirketlerin güncel resmî açıklamaları takip etmesi ve kendi durumunu vergi danışmanıyla teyit etmesi önerilir."}},{"@type":"Question","name":"Şahıs işletmeleri (gelir vergisi mükellefleri) bu indirimden yararlanabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Düzenleme yalnızca Kurumlar Vergisi Kanunu'nun 32. maddesine dayandığı için sadece kurumlar vergisi mükelleflerini kapsar; gelir vergisi mükellefi şahıs işletmeleri bu indirimden faydalanamaz."}},{"@type":"Question","name":"Üretim ve ticaret faaliyetini birlikte yürüten bir şirkette indirim nasıl hesaplanır?","acceptedAnswer":{"@type":"Answer","text":"İndirime esas matrah, kurumlar vergisi matrahının, üretim kazancının ticari bilanço kârına oranlanmasıyla bulunan kısmına uygulanır. Bulunan tutar hem üretim kazancını hem de safi kurum kazancını aşamaz."}},{"@type":"Question","name":"Bu indirim ile asgari kurumlar vergisi birbirini nasıl etkiler?","acceptedAnswer":{"@type":"Answer","text":"Üretim indirimi nedeniyle alınmayan vergi tutarı, yurt içi asgari kurumlar vergisinden mahsup edilebilir. Ancak bu, şirketin asgari vergi hesaplamasından tamamen muaf olduğu anlamına gelmez; iki hesaplama her geçici vergi döneminde ayrı ayrı yapılmalıdır."}}]}) }}
      />
    </BlogLayout>
  );
}
