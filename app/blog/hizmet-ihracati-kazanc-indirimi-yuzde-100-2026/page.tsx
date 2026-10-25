import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Hizmet İhracatında Vergi İndirimi %100'e Çıktı (2026) | Koray Akdağ",
  description:
    "30 Nisan 2026'da yürürlüğe giren 11257 sayılı Karar ile yazılım, mühendislik, mimarlık ve danışmanlık gibi hizmet ihracatında kazanç indirimi %80'den %100'e çıktı. Kapsam, şartlar, asgari kurumlar vergisi riski ve Ticaret Bakanlığı'nın yeni destek paketiyle 2026 güncel rehber.",
  keywords: [
    "hizmet ihracatı kazanç indirimi",
    "hizmet ihracatında vergi indirimi yüzde 100",
    "yazılım ihracatı vergi avantajı",
    "KVK 10/1-ğ hizmet ihracatı",
    "11257 sayılı karar",
    "10962 sayılı karar hizmet ihracatı destekleri",
    "mühendislik hizmet ihracatı vergi indirimi",
    "hizmet ihracatı KDV istisnası",
  ],
  alternates: {
    canonical: "/blog/hizmet-ihracati-kazanc-indirimi-yuzde-100-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Hizmet İhracatında Kazanç İndirimi %100 Oldu: Yazılım, Mühendislik ve Danışmanlık Şirketleri İçin 2026 Rehberi"
      description="30 Nisan 2026 tarihli Resmî Gazete'de yayımlanan 11257 sayılı Cumhurbaşkanı Kararı ile yurt dışına verilen yazılım, mühendislik, mimarlık, tasarım, eğitim ve sağlık hizmetlerinde kazanç indirimi %80'den %100'e çıktı. Üstelik Ticaret Bakanlığı da aynı dönemde hizmet ihracatçılarına yönelik destek mevzuatını tek bir Karar'da topladı. Kapsam, şartlar, gözden kaçan asgari vergi riski ve yeni destek paketiyle güncel rehber."
      category="VERGİ TEŞVİKLERİ • HİZMET İHRACATI • 2026"
      date="Ekim 2026"
      readTime="13 Dakika"
      slug="hizmet-ihracati-kazanc-indirimi-yuzde-100-2026"
      coverImage="https://images.unsplash.com/photo-1634176866089-b633f4aec882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Hizmet İhracatınızda Vergi İndirimi ve Destek Uygunluğunuzu Birlikte Değerlendirelim"
      ctaText="Yazılım, mühendislik veya danışmanlık hizmetinizi yurt dışına veriyorsanız, hem %100 kazanç indiriminden doğru şekilde yararlanmak hem de Ticaret Bakanlığı'nın yeni destek paketinden uygunluğunuzu netleştirmek için şirketinizin durumunu birlikte değerlendirelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Türkiye&apos;den yurt dışına yazılım, mühendislik, mimarlık, tasarım
        veya danışmanlık hizmeti veren şirketler için 2026 yılı iki önemli
        değişikliği birlikte getirdi. Önce 27 Şubat 2026&apos;da Ticaret
        Bakanlığı, hizmet ihracatçılarına yönelik beş ayrı kararda dağınık
        duran destek mevzuatını <strong>10962 sayılı Karar</strong> ile tek
        bir çatı altında topladı. Ardından 30 Nisan 2026&apos;da yürürlüğe
        giren <strong>11257 sayılı Cumhurbaşkanı Kararı</strong> ile yurt
        dışına verilen nitelikli hizmetlerden elde edilen kazançtaki vergi
        indirimi %80&apos;den %100&apos;e çıkarıldı. Bu yazıda her iki
        düzenlemeyi de, hangi şirketlerin gerçekte ne kadar avantaj elde
        ettiğini ve gözden kaçan asgari vergi riskini resmî kaynaklara
        dayanarak anlatıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ 11257 sayılı Karar ile yurt dışına verilen yazılım, mühendislik,
            mimarlık, tasarım, eğitim, sağlık ve benzeri hizmetlerden elde
            edilen kazançtaki vergi indirimi <strong>%80&apos;den %100&apos;e</strong> çıktı; 1 Ocak 2026&apos;dan itibaren başlayan
            vergilendirme dönemlerine uygulanıyor.
          </li>
          <li>
            ✔ İndirimden yararlanmanın şartı, hizmet bedelinin tamamının
            beyanname verme süresine kadar <strong>Türkiye&apos;ye getirilmesi</strong>.
          </li>
          <li>
            ✔ Genel danışmanlık, asistanlık veya aracılık faaliyetleri, sadece
            müşteri yurt dışında olduğu için bu kapsama girmiyor; kanunda
            sayılan hizmet türlerinden biri olması gerekiyor.
          </li>
          <li>
            ✔ İndirim tutarı 500.000 TL&apos;yi aşarsa YMM tasdik raporu
            zorunlu hale geliyor.
          </li>
          <li>
            ✔ <strong>Asgari kurumlar vergisi</strong> (KVK m.32/C) bu
            istisnayı etkilemiyor; %100 indirim alan bir kurum yine de
            kazancının belli bir yüzdesi kadar asgari vergi ödeyebilir, bu
            nedenle avantaj göründüğü kadar büyük olmayabilir.
          </li>
          <li>
            ✔ Aynı dönemde Ticaret Bakanlığı da 10962 sayılı Karar&apos;la
            hizmet ihracatçılarına Atılım, Markalaşma, Sürdürülebilirlik ve
            Yurt Dışı Lojistik olmak üzere dört ayrı destek programı sunuyor;
            bu, vergi indiriminden tamamen ayrı bir mekanizma.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#hizmet-ihracati-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Hizmet İhracatı Nedir, Kim Kapsamda?
          </Link>
          <Link href="#yuzde-100-degisikligi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. %100 Kazanç İndirimi: 11257 Sayılı Karar Ne Değiştirdi?
          </Link>
          <Link href="#hangi-sektorler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Hangi Hizmetler Kapsamda, Hangileri Değil?
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Şartlar: Para Transferi ve YMM Raporu
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Karıştırmayın: Kazanç İndirimi ile KDV İstisnası Farklı Şeyler
          </Link>
          <Link href="#destek-paketi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Ticaret Bakanlığı&apos;nın Yeni Destek Paketi (10962 Sayılı Karar)
          </Link>
          <Link href="#nasil-yararlanilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Nasıl Yararlanılır? Adım Adım Süreç
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

      {/* 1. HİZMET İHRACATI NEDİR */}
      <section id="hizmet-ihracati-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Hizmet İhracatı Nedir, Kim Kapsamda?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hizmet ihracatı, Türkiye&apos;de yerleşik bir şirketin veya gerçek
          kişinin, Türkiye&apos;de yerleşik olmayan bir kişiye veya kurumun
          merkezi/iş yeri yurt dışında olan birimine hizmet sunması ve bu
          hizmetten yalnızca yurt dışında yararlanılmasıdır. Mal ihracatından
          farklı olarak gümrük beyannamesi değil, fatura ve banka kaydı esas
          alınır. Türkiye&apos;nin özellikle 2023 sonrasında büyük önem
          verdiği bu alanda yazılım, mühendislik, mimarlık, çağrı merkezi,
          veri işleme, sağlık ve eğitim gibi sektörler ön planda.
        </p>
        <p className="leading-8 text-gray-700">
          Bu kapsamda iki ayrı ve birbirinden bağımsız avantaj söz konusu:
          biri Gelir İdaresi Başkanlığı&apos;nın yürüttüğü{" "}
          <strong>gelir/kurumlar vergisi kazanç indirimi</strong>, diğeri
          Ticaret Bakanlığı&apos;nın DFİF (Destekleme ve Fiyat İstikrar Fonu)
          üzerinden sağladığı <strong>nakdi destek programları</strong>. İkisi
          de hizmet ihracatını teşvik etmeyi amaçlasa da farklı kanunlara,
          farklı başvuru mercilerine ve farklı şartlara dayanıyor. Bu yazıda
          önce vergi tarafındaki büyük değişikliği, ardından destek paketini
          ayrı ayrı ele alıyoruz.
        </p>
      </section>

      {/* 2. YÜZDE 100 DEĞİŞİKLİĞİ */}
      <section id="yuzde-100-degisikligi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. %100 Kazanç İndirimi: 11257 Sayılı Karar Ne Değiştirdi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gelir Vergisi Kanunu&apos;nun 89/13. maddesi ile Kurumlar Vergisi
          Kanunu&apos;nun 10/1-ğ maddesi, yurt dışına verilen belirli
          hizmetlerden elde edilen kazancın matrahtan indirilmesine izin
          veriyor. Bu indirim oranı daha önce %80 iken, 29 Nisan 2026
          tarihli ve 11257 sayılı Cumhurbaşkanı Kararı ile{" "}
          <strong>%100&apos;e</strong> yükseltildi. Karar 30 Nisan 2026
          tarihli ve 33239 sayılı Resmî Gazete&apos;de yayımlandı ve 1 Ocak
          2026&apos;da başlayan vergilendirme dönemlerine ilişkin gelir ve
          kazançlara uygulanmak üzere yürürlüğe girdi.
        </p>
        <div className="rounded-2xl border bg-gray-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratikte bu şu anlama geliyor: şartları sağlayan bir şirket, yurt
            dışına verdiği hizmetten elde ettiği kazancın tamamını kurumlar
            vergisi matrahından düşebiliyor. Eskiden bu kazancın %20&apos;si
            matrahta kalırken, yeni düzenlemeyle teorik olarak bu kazanç
            üzerinden kurumlar vergisi matrahı sıfırlanabiliyor. Ancak
            ilerleyen bölümde göreceğiniz gibi, asgari kurumlar vergisi bu
            tabloyu önemli ölçüde değiştiriyor.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Aynı Kararla, kurumlar vergisi mükelleflerinin yurt dışı iştirak
          kazançları istisnasında da değişiklik yapıldı: asgari iştirak oranı
          %50&apos;den %20&apos;ye düşürülürken istisna oranı %80&apos;e
          yükseltildi. Bu, doğrudan hizmet ihracatı yapmayıp yurt dışında
          iştiraki bulunan şirketleri ilgilendiren ayrı bir konu olduğu için
          bu yazıda ayrıntıya girmiyoruz; ancak yurt dışı yapılanması olan
          şirket sahiplerinin bu değişiklikten de haberdar olması faydalı.
        </p>
      </section>

      {/* 3. HANGİ SEKTÖRLER */}
      <section id="hangi-sektorler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Hangi Hizmetler Kapsamda, Hangileri Değil?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kanun, indirimden yararlanabilecek hizmetleri tek tek sayıyor.
          Kapsam genel bir &quot;yurt dışına her türlü hizmet&quot; ifadesi
          değil, belirli bir listeye dayanıyor:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-emerald-700">
              ✅ Kapsama Giren Hizmetler
            </h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700 marker:text-emerald-500">
              <li>Mimarlık, mühendislik ve tasarım</li>
              <li>Yazılım geliştirme</li>
              <li>Tıbbi raporlama ve muhasebe kaydı tutma</li>
              <li>Çağrı merkezi hizmetleri</li>
              <li>Ürün testi ve sertifikasyon</li>
              <li>Veri saklama, veri işleme ve veri analizi</li>
              <li>
                Eğitim ve sağlık hizmetleri (ilgili bakanlığın izni ve
                denetimine tabi olarak)
              </li>
            </ul>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-red-700">
              ❌ Kapsam Dışında Kalanlar
            </h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700 marker:text-red-500">
              <li>
                Genel danışmanlık faaliyetleri (listedeki bir hizmet
                türüne girmiyorsa)
              </li>
              <li>Asistanlık ve aracılık hizmetleri</li>
              <li>
                Yurt içinde yabancı uyruklulara verilen hizmetler (örneğin
                Türkiye&apos;de yerleşik olmayan kişiye Türkiye&apos;de
                verilen sağlık hizmeti, hizmet ihracatı sayılmıyor)
              </li>
              <li>
                Sadece müşterisi yurt dışında diye otomatik kapsama giren
                hizmetler (listeye girmesi gerekiyor)
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Burada kritik nokta, hizmetin hem kanunda sayılan türlerden biri
          olması hem de münhasıran yurt dışında yararlanılan bir hizmet
          olması. Bir yazılım şirketi yurt dışındaki bir müşteriye özel
          yazılım geliştirip teslim ediyorsa bu açık biçimde kapsamda. Ama
          aynı şirket Türkiye&apos;deki bir müşterisine, o müşterinin yurt
          dışı ofisi için hizmet veriyormuş gibi görünen ama fiilen
          Türkiye&apos;de kullanılan bir iş yapıyorsa, bu durum kapsam dışı
          kalabilir.
        </p>
      </section>

      {/* 4. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Şartlar: Para Transferi ve YMM Raporu
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          %100 indirimden yararlanmak isteyen bir şirketin sağlaması gereken
          üç temel şart var:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <strong>Faturalandırma:</strong> Fatura, yurt dışında yerleşik
            müşteri adına düzenlenmeli.
          </li>
          <li>
            <strong>Para transferi:</strong> Hizmet bedelinin tamamı, ilgili
            kazancın elde edildiği yılın gelir/kurumlar vergisi beyannamesi
            verme süresine kadar Türkiye&apos;ye getirilmeli. Bu şart
            indirim oranı %80 iken de vardı, %100&apos;e geçişte değişmedi.
          </li>
          <li>
            <strong>YMM tasdik raporu:</strong> 30 Aralık 2025 tarihli 49
            Sıra No&apos;lu Tebliğ uyarınca, bir mükellefin tek bir hizmet
            kazancı indiriminin tutarı 500.000 TL&apos;yi aşarsa ya da
            birden fazla indirim/istisna kaleminin toplamı 1.000.000
            TL&apos;yi geçerse, Yeminli Mali Müşavir tasdik raporu
            düzenlenmesi zorunlu. Rapor, beyanname süresinin bitiminden
            itibaren iki ay içinde dijital vergi dairesi üzerinden elektronik
            olarak gönderilmeli; süresinde ibraz edilmezse istisna hakkı
            reddediliyor ve vergi cezası kesiliyor.
          </li>
        </ul>
      </section>

      {/* 5. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Karıştırmayın: Kazanç İndirimi ile KDV İstisnası Farklı Şeyler
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Çok sık yapılan bir hata, hizmet ihracatındaki KDV istisnasını
            (KDV Kanunu madde 11/1-a) gelir/kurumlar vergisi kazanç
            indirimiyle (GVK 89/13, KVK 10/1-ğ) aynı mekanizma sanmak.
            İkisinin kapsamı birbirinden farklı:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>
              <strong>KDV istisnası:</strong> Hizmetin şirketin ana sözleşmesindeki
              esas faaliyet konuları arasında olması, Türkiye&apos;de
              yerleşik olmayan kişiye sunulması, faturanın yurt dışı
              mukimi adına kesilmesi ve hizmetten münhasıran yurt dışında
              yararlanılması şartlarını arıyor. Bu şartlar sağlanırsa o
              işlem KDV&apos;den istisna.
            </li>
            <li>
              <strong>Kazanç indirimi:</strong> Ayrıca, hizmetin GVK 89/13 ve
              KVK 10/1-ğ&apos;de tek tek sayılan hizmet türlerinden biri
              olmasını ve kazancın Türkiye&apos;ye getirilmesini şart koşuyor.
            </li>
          </ul>
          <p className="mt-4 leading-8 text-gray-700">
            Bir hizmetin KDV&apos;den istisna olması, aynı faaliyetten elde
            edilen kazanca otomatik olarak %100 vergi indirimi
            uygulanabileceği anlamına gelmiyor. İki mekanizma ayrı ayrı
            değerlendirilmeli; bir şirket sadece birinden, ikisinden birlikte
            ya da hiçbirinden yararlanamayabilir.
          </p>
        </div>
      </section>

      {/* 6. DESTEK PAKETİ */}
      <section id="destek-paketi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Ticaret Bakanlığı&apos;nın Yeni Destek Paketi (10962 Sayılı Karar)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Vergi indiriminden bağımsız olarak, 27 Şubat 2026 tarihli ve 33181
          sayılı Resmî Gazete&apos;de yayımlanan 10962 sayılı Karar, daha
          önce beş ayrı kararda (Markalaşma, E-Turquality, Hizmet İhracatı ve
          Yurt Dışı Lojistik kararları dahil) dağınık duran hizmet ihracatı
          destek mevzuatını tek bir metinde topladı. Karar, 1/1/2026
          tarihinden itibaren geçerli ve dört ana programdan oluşuyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Program</th>
                <th className="p-4">Kimler İçin</th>
                <th className="p-4">Örnek Destek ve Üst Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Hizmet Sektörleri Atılım Programı</td>
                <td className="p-4">
                  Bilişim, danışmanlık, teknik müşavirlik, eğitim, sağlık
                  turizmi, fuarcılık gibi geniş sektör yelpazesi
                </td>
                <td className="p-4">
                  %50 oranında birim (yurt dışı ofis) desteği yıllık 6 milyon
                  TL; bilişimde dijital ürün tanıtımı yıllık 50 milyon TL;
                  teknik müşavirlik proje desteği sözleşme bedelinin %10&apos;u,
                  proje başına 25 milyon TL
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Markalaşma Programı</td>
                <td className="p-4">
                  TURQUALITY® ve E-TURQUALITY® kapsamındaki marka sahibi
                  şirketler
                </td>
                <td className="p-4">
                  Giderlerin %50&apos;si; yararlanıcı başına yıllık 250-500
                  milyon TL, marka başına en fazla 4 yıl
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sürdürülebilirlik Programı</td>
                <td className="p-4">
                  Sürdürülebilirlik projesi yürüten hizmet ihracatçıları
                </td>
                <td className="p-4">
                  Belge, danışmanlık ve rapor giderlerinin %50&apos;si,
                  yararlanıcı başına en fazla 20 milyon TL, 5 yıl
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">Yurt Dışı Lojistik Dağıtım Ağları Programı</td>
                <td className="p-4">
                  Yurt dışında depoculuk/taşımacılık hizmeti veren lojistik
                  işletmeleri
                </td>
                <td className="p-4">
                  Kurulum için ağ başına 300 milyon TL, cep depo kirası
                  yıllık 120 milyon TL (en fazla 8 ağ)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu rakamlar büyük ölçekli ve kurumsallaşmış ihracatçıları
          hedefliyor; küçük ve orta ölçekli bir yazılım veya mühendislik
          firması için pratikte en çok işe yarayan kalemler Atılım
          Programı&apos;ndaki birim (ofis), reklam/tanıtım, yurt dışı
          etkinlik katılımı ve platform komisyonu destekleri oluyor. Aynı
          harcama için yalnızca bir destek programından yararlanılabileceğini
          ve destek oranının hedef ülkelerde 20 puana kadar artırılabildiğini
          de not edelim.
        </p>
      </section>

      {/* 7. NASIL YARARLANILIR */}
      <section id="nasil-yararlanilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Nasıl Yararlanılır? Adım Adım Süreç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Vergi indirimi ve Ticaret Bakanlığı desteği, iki ayrı başvuru
          mekanizmasına sahip. Birbirine karıştırmadan ayrı ayrı yürütülmesi
          gerekiyor:
        </p>
        <h3 className="mb-4 mt-8 text-xl font-bold text-[#071A2F]">
          A. %100 Kazanç İndirimi İçin
        </h3>
        <div className="space-y-4">
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">1.</span> Hizmetin
            GVK 89/13 veya KVK 10/1-ğ&apos;de sayılan türlerden biri olduğunu
            ve yalnızca yurt dışında yararlanıldığını belgeleyin (sözleşme,
            iş tanımı, teslim kayıtları).
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">2.</span> Faturayı
            yurt dışı mukimi müşteri adına düzenleyin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">3.</span> Hizmet
            bedelini, beyanname verme süresine kadar bankacılık kanalıyla
            Türkiye&apos;ye getirin ve dekontu saklayın.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">4.</span>{" "}
            Kurumlar/gelir vergisi beyannamesinde ilgili indirim satırını
            doldurun; indirim tutarı eşiği aşıyorsa YMM tasdik raporunu
            süresinde dijital vergi dairesi üzerinden gönderin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">5.</span> Asgari
            kurumlar vergisi hesabını normal kurumlar vergisi hesabıyla
            birlikte, paralel olarak yapın (bir sonraki bölüme bakın).
          </div>
        </div>
        <h3 className="mb-4 mt-10 text-xl font-bold text-[#071A2F]">
          B. Ticaret Bakanlığı Destek Paketi İçin
        </h3>
        <div className="space-y-4">
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">1.</span> Destek
            Yönetim Sistemi&apos;nde (DYS) yararlanıcı kaydınızı oluşturun.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">2.</span> Başvuru
            yapacağınız programı (Atılım, Markalaşma, Sürdürülebilirlik veya
            Lojistik) ve ilgili gider kalemini belirleyin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">3.</span>
            Harcama belgelerinizi (fatura, sözleşme, ödeme dekontu) süresi
            içinde sisteme yükleyin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">4.</span>{" "}
            Bakanlık/ihracatçı birliği değerlendirmesinin ardından destek
            ödemesi DFİF üzerinden hesabınıza yapılır.
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başlıklara bakıldığında &quot;%100 vergi indirimi&quot; çok
            cazip görünüyor, ama uygulamada gözden en sık kaçan nokta
            2025&apos;te yürürlüğe giren asgari kurumlar vergisi (KVK
            m.32/C) ile bu istisnanın birlikte nasıl işlediği. Asgari
            kurumlar vergisi, indirim ve istisnalar düşülmeden önceki kurum
            kazancının en az %10&apos;u kadar vergi ödenmesini öngörüyor ve
            hizmet ihracatı kazanç indirimi bu asgari vergi matrahından
            düşülmüyor. Yani %100 indirimden yararlanan bir şirket, normal
            kurumlar vergisi hesabında matrahı sıfırlasa bile asgari vergi
            hesabında yine de bir miktar vergi ödeyebiliyor. Bu nedenle
            indirim oranının %80&apos;den %100&apos;e çıkması önemli bir
            gelişme olsa da, nihai vergi yükünü belirleyen asıl hesap, normal
            kurumlar vergisi ile asgari kurumlar vergisinin yan yana
            karşılaştırılmasıdır. Bu karşılaştırmayı yapmadan sadece
            &quot;%100 indirim var&quot; diyerek nakit akışı planlaması
            yapmak yanıltıcı sonuçlar doğurabilir.
          </p>
        </div>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hizmetinizin kanunda sayılan türlerden biri olduğunu önceden
            netleştirin, sadece müşterinin yurt dışında olması yeterli değil
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hizmet bedelinin tamamını beyanname süresine kadar
            Türkiye&apos;ye getirmeyi unutmayın, şart budur
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İndirim tutarı 500.000 TL&apos;yi aşıyorsa YMM tasdik raporunu
            zamanında hazırlatın, aksi halde istisna hakkı reddedilebilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Asgari kurumlar vergisi hesabını mutlaka ayrıca yapın, %100
            indirim her zaman sıfır vergi anlamına gelmez
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ KDV istisnası ile gelir/kurumlar vergisi indirimini ayrı ayrı
            değerlendirin, biri diğerini otomatik getirmez
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ticaret Bakanlığı&apos;nın destek paketinden yararlanmak
            istiyorsanız DYS kaydınızı ve harcama belgelerinizi düzenli tutun
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
              href="https://www.resmigazete.gov.tr/eskiler/2026/04/20260430.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              11257 Sayılı Cumhurbaşkanı Kararı - Resmî Gazete (30.04.2026,
              Sayı 33239)
            </a>
          </li>
          <li>
            <a
              href="https://www.resmigazete.gov.tr/eskiler/2026/02/20260227.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              10962 Sayılı Karar (Hizmet İhracatının Tanımlanması,
              Sınıflandırılması ve Hizmet Sektörlerinin Desteklenmesi
              Hakkında Karar) - Resmî Gazete (27.02.2026, Sayı 33181)
            </a>
          </li>
          <li>
            <a
              href="https://www.gib.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gelir İdaresi Başkanlığı - Kurumlar ve Gelir Vergisi Kanunu
              Güncel Tebliğ ve Sirkülerleri
            </a>
          </li>
          <li>
            <a
              href="https://www.ticaret.gov.tr/destekler/hizmet-sektoru-destekleri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Ticaret Bakanlığı - Hizmet Sektörü Destekleri
            </a>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Hizmet İhracatınızda Vergi Avantajını Doğru Kurgulayalım
          </h3>
          <p className="leading-8 text-gray-700">
            Hem %100 kazanç indiriminin şirketinizin gerçek vergi yüküne ne
            kadar yansıyacağını (asgari kurumlar vergisi dahil) hem de
            Ticaret Bakanlığı&apos;nın yeni destek paketinden hangi programa
            uygun olduğunuzu birlikte değerlendirebiliriz. Vergi
            danışmanlığından ihracat destek başvurusuna kadar süreci
            kendimiz yürütüyoruz, ayrı bir yerel firma aramanıza gerek yok.{" "}
            <Link href="/ihracat-destekleri-danismanligi" className="text-orange-600 underline">
              İhracat destekleri danışmanlığı hizmetimizi inceleyebilir
            </Link>{" "}
            veya{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              destek uygunluk analizimizle
            </Link>{" "}
            şirketinizin durumunu netleştirebilirsiniz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçebilirsiniz.
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
              Hizmet ihracatında kazanç indirimi %100 oldu, bu ne anlama
              geliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Yurt dışına verilen ve kanunda sayılan (yazılım, mühendislik,
              mimarlık, tasarım, eğitim, sağlık gibi) hizmetlerden elde
              edilen kazancın, şartlar sağlandığında tamamının gelir/kurumlar
              vergisi matrahından indirilebileceği anlamına geliyor. Daha
              önce bu oran %80&apos;di, 11257 sayılı Karar ile %100&apos;e
              çıkarıldı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu değişiklik ne zaman yürürlüğe girdi?
            </h3>
            <p className="leading-8 text-gray-700">
              Karar 30 Nisan 2026 tarihli Resmî Gazete&apos;de yayımlandı ve
              1 Ocak 2026&apos;da başlayan vergilendirme dönemlerine ilişkin
              gelir ve kazançlara uygulanmak üzere yürürlüğe girdi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Genel danışmanlık hizmeti veren bir şirket bu indirimden
              yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Kural olarak hayır. Kanun, indirimden yararlanabilecek
              hizmetleri tek tek sayıyor (mimarlık, mühendislik, tasarım,
              yazılım, tıbbi raporlama, muhasebe kaydı tutma, çağrı merkezi,
              ürün testi, sertifikasyon, veri saklama/işleme/analiz, eğitim
              ve sağlık). Genel danışmanlık, asistanlık veya aracılık
              faaliyetleri, sadece müşteri yurt dışında olduğu için otomatik
              olarak bu kapsama girmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              %100 indirim alan bir şirket hiç kurumlar vergisi ödemez mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Mutlaka değil. 2025&apos;ten itibaren uygulanan asgari
              kurumlar vergisi (KVK m.32/C), indirim ve istisnalar
              düşülmeden önceki kurum kazancının en az %10&apos;u kadar
              vergi ödenmesini öngörüyor ve hizmet ihracatı istisnası bu
              asgari vergi matrahından düşülmüyor. Dolayısıyla %100
              indirimden yararlanan bir şirket, normal kurumlar vergisi
              hesabında matrahı sıfırlasa bile asgari vergi nedeniyle yine
              bir miktar vergi ödeyebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Vergi indirimi ile KDV istisnası aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. KDV istisnası (KDV Kanunu m.11/1-a), hizmetin esas
              faaliyet konuları arasında olması ve yurt dışında yerleşik
              kişiye sunulması gibi kendi şartlarına tabi, ayrı bir
              mekanizma. Gelir/kurumlar vergisi kazanç indirimi ise ayrı bir
              kanun hükmüne (GVK 89/13, KVK 10/1-ğ) dayanıyor ve farklı
              şartlar arıyor. Bir işlemin KDV&apos;den istisna olması, aynı
              kazanca otomatik olarak %100 vergi indirimi uygulanacağı
              anlamına gelmez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              YMM tasdik raporu her zaman zorunlu mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, yalnızca indirim tutarı belirli bir eşiği aştığında.
              30 Aralık 2025 tarihli 49 Sıra No&apos;lu Tebliğ&apos;e göre
              tek bir hizmet kazancı indiriminin tutarı 500.000 TL&apos;yi
              aşarsa ya da birden fazla indirim/istisna kaleminin toplamı
              1.000.000 TL&apos;yi geçerse YMM tasdik raporu zorunlu hale
              geliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              10962 sayılı Karar vergi indiriminden farklı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, tamamen ayrı bir mekanizma. 10962 sayılı Karar, Ticaret
              Bakanlığı&apos;nın hizmet ihracatçılarına Atılım, Markalaşma,
              Sürdürülebilirlik ve Yurt Dışı Lojistik programları üzerinden
              DFİF&apos;ten sağladığı nakdi destekleri düzenliyor. 11257
              sayılı Karar ise Gelir İdaresi Başkanlığı&apos;nın yürüttüğü
              gelir/kurumlar vergisi kazanç indirimini düzenliyor. Bir şirket
              her iki mekanizmadan da ayrı ayrı, kendi şartlarını sağladığı
              ölçüde yararlanabilir.
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
          2026 yılı, yurt dışına yazılım, mühendislik, mimarlık ve benzeri
          hizmet veren Türk şirketleri için hem vergi hem de destek tarafında
          önemli değişikliklerin yaşandığı bir yıl oldu. Kazanç indiriminin
          %100&apos;e çıkması gerçek bir avantaj, ama bu avantajın nihai
          vergi yüküne ne kadar yansıyacağı, asgari kurumlar vergisiyle
          birlikte hesaplanmadan netleşmiyor. Bunun yanında Ticaret
          Bakanlığı&apos;nın tek bir Karar&apos;da topladığı yeni destek
          paketi, hizmet ihracatçılarına ayrı bir nakdi destek kapısı daha
          açıyor. İki mekanizmayı da doğru ve birbirinden ayrı şekilde
          değerlendiren şirketler, hem vergi planlamasında hem de nakit
          akışında gerçek bir fark yaratabilir.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar ve Hizmetler
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/ihracat-destekleri-danismanligi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • İHRACAT DESTEKLERİ DANIŞMANLIĞI</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İhracat Destekleri ve Turquality Danışmanlığı</h3>
          </Link>
          <Link
            href="/destek-uygunluk-analizi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • DESTEK UYGUNLUK ANALİZİ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Destek Uygunluk Analizi</h3>
          </Link>
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri</h3>
          </Link>
          <Link
            href="/blog/turquality-programi-nedir-sartlari-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TURQUALITY • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Turquality Programı Nedir?</h3>
          </Link>
          <Link
            href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ VE FİNANSAL YÖNETİM • VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ulusal ve Uluslararası Vergi Danışmanlığı</h3>
          </Link>
          <Link
            href="/blog/e-ihracat-amazon-etsy-trendyol-global-satisa-nasil-baslanir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">E-İHRACAT • PAZARYERİ SATIŞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">E-İhracat: Amazon, Etsy ve Trendyol Global</h3>
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
                name: "Hizmet ihracatında kazanç indirimi %100 oldu, bu ne anlama geliyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yurt dışına verilen ve kanunda sayılan (yazılım, mühendislik, mimarlık, tasarım, eğitim, sağlık gibi) hizmetlerden elde edilen kazancın, şartlar sağlandığında tamamının gelir/kurumlar vergisi matrahından indirilebileceği anlamına geliyor. Daha önce bu oran %80'di, 11257 sayılı Karar ile %100'e çıkarıldı.",
                },
              },
              {
                "@type": "Question",
                name: "Bu değişiklik ne zaman yürürlüğe girdi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Karar 30 Nisan 2026 tarihli Resmî Gazete'de yayımlandı ve 1 Ocak 2026'da başlayan vergilendirme dönemlerine ilişkin gelir ve kazançlara uygulanmak üzere yürürlüğe girdi.",
                },
              },
              {
                "@type": "Question",
                name: "Genel danışmanlık hizmeti veren bir şirket bu indirimden yararlanabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kural olarak hayır. Kanun, indirimden yararlanabilecek hizmetleri tek tek sayıyor (mimarlık, mühendislik, tasarım, yazılım, tıbbi raporlama, muhasebe kaydı tutma, çağrı merkezi, ürün testi, sertifikasyon, veri saklama/işleme/analiz, eğitim ve sağlık). Genel danışmanlık, asistanlık veya aracılık faaliyetleri, sadece müşteri yurt dışında olduğu için otomatik olarak bu kapsama girmiyor.",
                },
              },
              {
                "@type": "Question",
                name: "%100 indirim alan bir şirket hiç kurumlar vergisi ödemez mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mutlaka değil. 2025'ten itibaren uygulanan asgari kurumlar vergisi (KVK m.32/C), indirim ve istisnalar düşülmeden önceki kurum kazancının en az %10'u kadar vergi ödenmesini öngörüyor ve hizmet ihracatı istisnası bu asgari vergi matrahından düşülmüyor. Dolayısıyla %100 indirimden yararlanan bir şirket, normal kurumlar vergisi hesabında matrahı sıfırlasa bile asgari vergi nedeniyle yine bir miktar vergi ödeyebilir.",
                },
              },
              {
                "@type": "Question",
                name: "Vergi indirimi ile KDV istisnası aynı şey mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. KDV istisnası (KDV Kanunu m.11/1-a), hizmetin esas faaliyet konuları arasında olması ve yurt dışında yerleşik kişiye sunulması gibi kendi şartlarına tabi, ayrı bir mekanizma. Gelir/kurumlar vergisi kazanç indirimi ise ayrı bir kanun hükmüne (GVK 89/13, KVK 10/1-ğ) dayanıyor ve farklı şartlar arıyor. Bir işlemin KDV'den istisna olması, aynı kazanca otomatik olarak %100 vergi indirimi uygulanacağı anlamına gelmez.",
                },
              },
              {
                "@type": "Question",
                name: "YMM tasdik raporu her zaman zorunlu mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır, yalnızca indirim tutarı belirli bir eşiği aştığında. 30 Aralık 2025 tarihli 49 Sıra No'lu Tebliğ'e göre tek bir hizmet kazancı indiriminin tutarı 500.000 TL'yi aşarsa ya da birden fazla indirim/istisna kaleminin toplamı 1.000.000 TL'yi geçerse YMM tasdik raporu zorunlu hale geliyor.",
                },
              },
              {
                "@type": "Question",
                name: "10962 sayılı Karar vergi indiriminden farklı mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, tamamen ayrı bir mekanizma. 10962 sayılı Karar, Ticaret Bakanlığı'nın hizmet ihracatçılarına Atılım, Markalaşma, Sürdürülebilirlik ve Yurt Dışı Lojistik programları üzerinden DFİF'ten sağladığı nakdi destekleri düzenliyor. 11257 sayılı Karar ise Gelir İdaresi Başkanlığı'nın yürüttüğü gelir/kurumlar vergisi kazanç indirimini düzenliyor. Bir şirket her iki mekanizmadan da ayrı ayrı, kendi şartlarını sağladığı ölçüde yararlanabilir.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
