import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Kripto Varlıkların Vergilendirilmesi: Türkiye'de 2026 Güncel Durum | Koray Akdağ",
  description: "Türkiye'de kripto varlıklara özel bağlayıcı bir vergi kanunu şu an itibarıyla yürürlükte değil. TBMM'ye sunulan kanun teklifinin akıbeti, mevcut GVK/KVK uygulaması, SPK ve TCMB düzenlemeleri arasındaki fark ve şirketler için 2026 güncel durum.",
  keywords: [
    "kripto varlık vergilendirmesi",
    "kripto para vergisi Türkiye",
    "kripto vergi kanunu 2026",
    "kripto varlık kanun teklifi TBMM",
    "kripto kazançları nasıl vergilenir",
    "SPK kripto varlık hizmet sağlayıcısı",
    "TCMB kripto varlık yönetmeliği",
    "kripto varlık ticari kazanç",
    "kripto değer artış kazancı",
    "MiCA Türkiye karşılaştırma",
  ],
  alternates: {
    canonical: "/blog/kripto-varliklarin-vergilendirilmesi-turkiyede-2026-guncel-durum",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Kripto Varlıkların Vergilendirilmesi: Türkiye'de 2026 Güncel Durum"
      description="Kripto varlıklara özel bağlayıcı bir vergi kanunu şu an itibarıyla Türkiye'de yürürlükte değil. TBMM'ye sunulan ve geri çekilen kanun teklifinin akıbeti, mevcut genel vergi mevzuatının fiili uygulaması, SPK/TCMB düzenlemeleriyle vergi arasındaki fark ve şirketler için 2026 güncel durum bu yazıda net şekilde ayrıştırılıyor."
      category="VERGİ DANIŞMANLIĞI • KRİPTO VARLIK • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="kripto-varliklarin-vergilendirilmesi-turkiyede-2026-guncel-durum"
      coverImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Kripto Varlık Pozisyonunuzu Mevcut Belirsizlik İçinde Doğru Kurgulayalım"
      ctaText="Kripto varlık alım satımı yapıyor veya şirketinizin bilançosunda kripto varlık bulunduruyorsanız, mevzuattaki gelişmeleri takip ederek mevcut durumda en doğru vergisel pozisyonu almanıza yardımcı oluyoruz."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Türkiye&apos;de Kripto Varlıklar Nasıl Vergileniyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Türkiye&apos;de kripto varlıklara <strong>özel, bağlayıcı bir vergi kanunu şu an itibarıyla yürürlükte değil.</strong> Kazançlar, tartışmalı biçimde genel Gelir Vergisi Kanunu (GVK) ve Kurumlar Vergisi Kanunu (KVK) hükümleri çerçevesinde değerlendiriliyor.</li>
          <li>✔ 6362 sayılı Sermaye Piyasası Kanunu&apos;na kripto varlık tanımı, <strong>2 Temmuz 2024&apos;te yürürlüğe giren 7518 sayılı Kanun</strong> ile eklendi. Bu düzenleme <strong>vergi değil, borsaların (kripto varlık hizmet sağlayıcılarının) SPK lisansına tabi olmasıyla</strong> ilgili.</li>
          <li>✔ TCMB&apos;nin kripto varlıkların ödeme aracı olarak kullanılmasını yasakladığı yönetmelik <strong>16 Nisan 2021&apos;de</strong> yürürlüğe girdi; bu da ayrı bir düzenleme, vergiyle ilgisi yok.</li>
          <li>✔ <strong>2 Mart 2026&apos;da</strong> TBMM&apos;ye kripto varlık işlem vergisi (%0,03) ve stopaj (%10) öngören bir kanun teklifi sunuldu, ancak teklifin kripto maddeleri <strong>27 Mart 2026&apos;da Genel Kurul&apos;da geri çekildi.</strong> Bu düzenleme yasalaşmadı.</li>
          <li>✔ GİB&apos;in kripto varlık kazançlarına özel, yayımlanmış bağlayıcı bir tebliği veya sirküleri <strong>şu an itibarıyla bulunmuyor.</strong> Süreklilik arz eden alım satım ticari kazanç, arızi işlemler ise değer artış kazancı tartışması kapsamında değerlendiriliyor.</li>
          <li>✔ Kripto varlık borsalarının MASAK/KYC yükümlülükleri ile SPK lisans denetimi, vergiyle karıştırılmaması gereken <strong>ayrı bir konu.</strong></li>
        </ul>
      </div>

      {/* UYARI KUTUSU */}
      <div className="mt-10 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          ⚠️ Bu Alan Hızla Değişiyor
        </h3>
        <p className="leading-8 text-gray-700">
          Kripto varlık mevzuatı Türkiye&apos;de son iki yıldır sık aralıklarla
          değişiyor ve TBMM gündeminde yeniden bir kanun teklifi çıkması
          beklenen bir alan. Bu yazı 2026 yılı itibarıyla ulaşılabilen resmî
          ve güncel bilgilere dayanılarak hazırlanmıştır; yayın tarihinden
          sonra mevzuat değişmiş olabilir. Kripto varlıkla ilgili somut bir
          işlem veya beyan kararı almadan önce güncel durumu mutlaka
          profesyonel bir danışmanlıkla teyit edin.
        </p>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-karisik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Bu Konu Neden Bu Kadar Karışık?
          </Link>
          <Link href="#spk-tcmb" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Şu An Yürürlükte Olan Tek Şey: SPK ve TCMB Düzenlemeleri
          </Link>
          <Link href="#gercek-kisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Gerçek Kişilerin Kripto Kazançları Bugün Nasıl Vergileniyor?
          </Link>
          <Link href="#kanun-teklifi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Mart 2026&apos;da Sunulan ve Geri Çekilen Kanun Teklifi
          </Link>
          <Link href="#sirketler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Şirketler İçin Durum: Bilançoda Kripto Varlık ve KVK
          </Link>
          <Link href="#mica" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Uluslararası Kıyas: AB&apos;nin MiCA Düzenlemesi
          </Link>
          <Link href="#ne-zaman" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Ne Zaman Netleşecek? Takip Edilmesi Gereken Sinyaller
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

      {/* 1. NEDEN KARIŞIK */}
      <section id="neden-karisik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Bu Konu Neden Bu Kadar Karışık?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Kripto varlık alım satımı yapan bireyler ve bu alanla ilgilenen
          şirket sahipleri için en can sıkıcı soru genelde şudur:
          &quot;kripto kazancımı beyan etmem gerekiyor mu, gerekiyorsa hangi
          oranda?&quot; Bu soruya internet ortamında birbiriyle çelişen
          onlarca cevap bulmak mümkün, çünkü Türkiye&apos;de kripto
          varlıklarla ilgili en az üç farklı düzenleme aynı anda gündemde
          ve bu üçü sıkça birbirine karıştırılıyor:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🏛️ SPK Düzenlemesi</h3>
            <p className="text-gray-700">Borsaların (kripto varlık hizmet sağlayıcılarının) lisanslanması ve denetimiyle ilgili. Vergiyle doğrudan ilgisi yok.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💳 TCMB Düzenlemesi</h3>
            <p className="text-gray-700">Kripto varlıkların ödeme aracı olarak kullanılmasının yasaklanmasıyla ilgili. Alım satımı yasaklamıyor, sadece ödeme kanalını sınırlıyor.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🧾 Vergi Mevzuatı</h3>
            <p className="text-gray-700">Kripto varlığa özel, bağlayıcı bir kanunu şu an itibarıyla yok. Genel GVK/KVK hükümleri tartışmalı biçimde uygulanıyor.</p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu yazı, bu üç ayrı konuyu birbirinden net şekilde ayırarak
          ilerliyor ve her başlıkta &quot;şu an yürürlükte olan&quot; ile
          &quot;henüz yasalaşmamış, tartışılan veya taslak aşamasında olan&quot;
          arasındaki farkı açıkça belirtiyor.
        </p>
      </section>

      {/* 2. SPK TCMB */}
      <section id="spk-tcmb" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Şu An Yürürlükte Olan Tek Şey: SPK ve TCMB Düzenlemeleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kripto varlıklar konusunda Türkiye&apos;de bugün fiilen yürürlükte
          olan iki düzenleme var ve ikisi de vergiyle ilgili değil:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Düzenleme</th>
                <th className="p-5">Yürürlük Tarihi</th>
                <th className="p-5">Konusu</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">TCMB Yönetmeliği</td>
                <td className="p-5">16 Nisan 2021 (RG 31456)</td>
                <td className="p-5">Kripto varlıkların doğrudan veya dolaylı olarak ödeme aracı olarak kullanılmasının ve bu amaçla hizmet sunulmasının yasaklanması. Alım satımı yasaklamaz, sadece ödeme kanalını sınırlar.</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">7518 Sayılı Kanun (6362 değişikliği)</td>
                <td className="p-5">2 Temmuz 2024 (RG 32590)</td>
                <td className="p-5">6362 sayılı Sermaye Piyasası Kanunu&apos;na kripto varlık, cüzdan, kripto varlık hizmet sağlayıcısı (KVHS) ve platform tanımları eklendi; KVHS&apos;ler SPK&apos;nın düzenleme ve denetim yetkisi altına alındı.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          7518 sayılı Kanun&apos;un ardından SPK, 13 Mart 2025&apos;te
          (RG 32840) kripto varlık hizmet sağlayıcılarının kuruluş, faaliyet,
          sermaye yeterliliği ve bağımsız denetim esaslarını düzenleyen iki
          ayrı tebliğ yayımladı. Bu tebliğler, borsaların lisans alması,
          rezerv/kanıt denetimine tabi olması ve müşteri varlıklarını nasıl
          saklayacağıyla ilgili; herhangi bir vergi oranı veya vergi
          yükümlülüğü içermiyor.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Lisans/Denetim Yükümlülüğü ile Vergi Yükümlülüğü
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>SPK lisansı ve MASAK/KYC yükümlülüğü:</strong> Borsanın kendisine ait; işletme olarak SPK&apos;ya karşı sermaye yeterliliği, bağımsız denetim, kimlik tespiti ve şüpheli işlem bildirimi (5549 sayılı Suç Gelirlerinin Aklanmasının Önlenmesi Hakkında Kanun kapsamında) gibi yükümlülükler taşır.</li>
            <li><strong>Vergi yükümlülüğü:</strong> Kullanıcının, yani kripto varlığı alıp satan kişi veya şirketin kendisine ait; borsanın lisanslı olması, kullanıcının kazancının otomatik olarak vergiden istisna olduğu veya belirli bir oranda vergilendirildiği anlamına gelmez.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Bir borsanın SPK lisanslı olması sadece o platformun güvenilirlik
            ve denetim standardıyla ilgilidir, kullanıcının o platformda elde
            ettiği kazancın nasıl vergilendirileceğini belirlemez.
          </p>
        </div>
      </section>

      {/* 3. GERÇEK KİŞİ */}
      <section id="gercek-kisi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Gerçek Kişilerin Kripto Kazançları Bugün Nasıl Vergileniyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kripto varlığa özel bir vergi kanunu bulunmaması, kazancın
          &quot;vergisiz&quot; olduğu anlamına gelmiyor. GİB&apos;in bu konuda
          yayımlanmış, herkesi bağlayan genel bir tebliği veya sirküleri şu
          an itibarıyla bulunmuyor; ancak genel Gelir Vergisi Kanunu (GVK)
          hükümleri, işlemin niteliğine göre tartışmalı biçimde uygulanıyor:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📈 Süreklilik Arz Eden Alım Satım</h3>
            <p className="text-gray-700">
              Bir organizasyon ve devamlılık içinde, meslek edinircesine
              yapılan yüksek hacimli/sık alım satım, GVK m.37 kapsamında
              <strong> ticari kazanç</strong> olarak değerlendirilme eğiliminde;
              bu durumda yıllık gelir vergisi beyannamesi verilmesi ve
              işletme defteri tutulması gerekebilir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💼 Arızi, Bireysel Yatırım Amaçlı İşlemler</h3>
            <p className="text-gray-700">
              Sık alım satım yapmayan bireysel bir yatırımcının kripto
              varlığını elden çıkarmasının, GVK Mükerrer m.80&apos;deki
              <strong> değer artış kazancı</strong> hükümleri kapsamına girip
              girmediği tartışması sürüyor; kripto varlık, bu maddedeki
              kazanç türleri arasında açıkça ve isim olarak sayılmıyor.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kısacası, mevcut durumda net ve herkes için aynı şekilde işleyen
          tek bir kural yok; işlemin hacmi, sıklığı ve amacı, hangi
          hükmün uygulanacağını etkileyen sübjektif kriterler olarak
          karşımıza çıkıyor. Bu da her bireysel durumun ayrı
          değerlendirilmesini gerektiriyor.
        </p>
      </section>

      {/* 4. KANUN TEKLİFİ */}
      <section id="kanun-teklifi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Mart 2026&apos;da Sunulan ve Geri Çekilen Kanun Teklifi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          &quot;Kripto vergisi geldi&quot; başlıklı haberlerin büyük kısmı,
          2 Mart 2026&apos;da TBMM Başkanlığı&apos;na sunulan &quot;Kripto
          Varlıkların Vergilendirilmesi ve Diğer Bazı Vergi ve Sosyal
          Güvenlik Konularına İlişkin Düzenlemeler İçeren Kanun
          Teklifi&quot;ne dayanıyor. Ancak bu teklifin kripto varlıklarla
          ilgili maddeleri, <strong>27 Mart 2026&apos;da TBMM Genel
          Kurulu&apos;ndaki görüşmeler sırasında geri çekildi</strong> ve
          yasalaşmadı. Teklifin öngördüğü ama şu an itibarıyla yürürlüğe
          girmemiş olan düzenlemeler şunlardı:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Önerilen Vergi</th>
                <th className="p-5">Öngörülen Oran</th>
                <th className="p-5">Kapsam (Geri Çekilen Taslak)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kripto Varlık İşlem Vergisi</td>
                <td className="p-5">Onbinde 3 (%0,03)</td>
                <td className="p-5">Satış tutarı veya transfer anındaki rayiç değer üzerinden, işlemi gerçekleştiren platform tarafından kesilip aylık dönemler halinde beyan edilmesi öngörülüyordu.</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Gelir Vergisi Stopajı</td>
                <td className="p-5">%10</td>
                <td className="p-5">SPK lisanslı platformlar üzerinden gerçekleştirilen işlemlerde, kaynağında kesinti (stopaj) yapılması öngörülüyordu.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Bu tablodaki rakamlar, yürürlükte olan bir vergi değil,
            <strong> geri çekilmiş bir taslağın</strong> içeriğidir; sadece
            gündemin ne yönde ilerleyebileceğine dair bir fikir vermesi
            amacıyla paylaşılıyor. Uygulamada en sık gözden kaçan nokta,
            bir kanun teklifinin TBMM&apos;ye sunulmuş olmasının, o teklifin
            yasalaştığı anlamına gelmediğidir. Yürürlük tarihi ancak Resmî
            Gazete&apos;de yayımlandıktan sonra başlar; sunulma, komisyonda
            görüşülme ve Genel Kurul&apos;da kabul edilme aşamalarının her
            birinde teklif değişebilir, ertelenebilir veya tamamen geri
            çekilebilir, tıpkı bu teklifte olduğu gibi.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          AK Parti yetkilileri, kripto varlıklara ilişkin maddelerin
          sektördeki hızlı değişim nedeniyle yeniden değerlendirilmek
          üzere tekliften çıkarıldığını, konunun ilerleyen dönemde ayrı
          bir kanun teklifiyle yeniden gündeme gelmesinin beklendiğini
          açıkladı. Bu nedenle kripto vergisi konusunun yakın gelecekte
          tekrar TBMM gündemine gelmesi olası, ancak hangi tarihte ve
          hangi içerikle geleceği şu an itibarıyla belirsiz.
        </p>
      </section>

      {/* 5. ŞİRKETLER */}
      <section id="sirketler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Şirketler İçin Durum: Bilançoda Kripto Varlık ve KVK
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gerçek kişilerdeki &quot;ticari kazanç mı, değer artış kazancı mı&quot;
          tartışması, kurumlar (şirketler) için aynı şekilde geçerli değil.
          Kurumlar Vergisi Kanunu&apos;nun genel ilkesi gereği, bir kurumun
          elde ettiği her türlü kazanç kaynağı ayrımı yapılmaksızın
          <strong> kurum kazancına dahil edilir ve kurumlar vergisine tabi
          olur.</strong> Yani bir şirket kripto varlık alım satımından kâr
          elde ettiğinde, bu kazanç normal ticari faaliyet gelirinden farklı
          bir muameleye tabi tutulmaz.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Muhasebeleştirme tarafında ise kripto varlıklar için Vergi
          Usul Kanunu ve Türkiye Muhasebe Standartları çerçevesinde
          özel olarak tanımlanmış tek bir hesap sınıfı bulunmuyor;
          uygulamada varlığın niteliğine ve tutulma amacına göre
          (ticari amaçla tutulan bir varlık ya da maddi olmayan duran
          varlık gibi) farklı sınıflandırma yaklaşımları tartışılıyor. Bu
          durum, özellikle bilançosunda kripto varlık taşıyan veya
          müşterilerinden kripto varlıkla ödeme kabul eden şirketler
          için, kayıt ve raporlama tarafında ayrı bir dikkat gerektiriyor.
        </p>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>TCMB yönetmeliği ödeme kanallarını sınırladığı için, bir şirketin ürün/hizmet bedelini doğrudan kripto varlıkla tahsil etmesi ayrı bir hukuki değerlendirme gerektirir.</li>
            <li>Kripto varlığın şirket bünyesinde ne amaçla (yatırım, ticaret, teminat) tutulduğu, hem muhasebe sınıflandırmasını hem de dönem sonu değerlemesini etkiler.</li>
            <li>Şirketlerin kripto varlık pozisyonları, bağımsız denetime tabi olan şirketlerde denetim raporlarında ayrıca açıklama gerektirebilir.</li>
          </ul>
        </div>
      </section>

      {/* 6. MiCA */}
      <section id="mica" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Uluslararası Kıyas: AB&apos;nin MiCA Düzenlemesi
        </h2>
        <p className="leading-8 text-gray-700">
          Avrupa Birliği, kripto varlık piyasasını Markets in
          Crypto-Assets (MiCA) düzenlemesiyle kapsamlı bir çerçeveye
          oturttu; kripto varlık hizmet sağlayıcılarının AB genelinde tek
          bir lisansla faaliyet göstermesine imkân tanıyan bu düzenleme
          kademeli olarak yürürlüğe girdi. Önemli bir ayrım şu: MiCA da
          esas olarak <strong>piyasa denetimi ve tüketici koruması</strong>
          amaçlı bir düzenleme; vergilendirme konusu MiCA&apos;nın kapsamı
          dışında kalıyor ve her AB üyesi ülkenin kendi ulusal vergi
          mevzuatına bırakılmış durumda. Yani Türkiye&apos;deki SPK
          düzenlemesi ile AB&apos;deki MiCA, amaç bakımından birbirine
          benzer bir işlev görüyor; ancak ikisi de tek başına vergi
          sorusuna cevap vermiyor. Bu kıyas, Türkiye&apos;deki
          düzenleyici yaklaşımın (önce piyasa denetimi, sonra vergi)
          uluslararası eğilimle paralel ilerlediğini gösteriyor.
        </p>
      </section>

      {/* 7. NE ZAMAN */}
      <section id="ne-zaman" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Ne Zaman Netleşecek? Takip Edilmesi Gereken Sinyaller
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kripto vergisinin ne zaman netleşeceğine dair kesin bir tarih
          vermek şu an itibarıyla mümkün değil; ancak sürecin
          hangi aşamalardan geçeceğini önceden bilmek, gelişmeleri doğru
          yerden takip etmeyi kolaylaştırır:
        </p>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📝</div>
            <h3 className="text-base font-bold">1. Yeni Kanun Teklifi</h3>
            <p className="mt-2 text-sm text-gray-600">Kripto vergisine ilişkin maddelerin ayrı bir teklif olarak TBMM&apos;ye yeniden sunulması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🏛️</div>
            <h3 className="text-base font-bold">2. Komisyon Görüşmeleri</h3>
            <p className="mt-2 text-sm text-gray-600">Plan ve Bütçe Komisyonu&apos;nda görüşülüp değişikliğe uğraması veya olduğu gibi kabul edilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🗳️</div>
            <h3 className="text-base font-bold">3. Genel Kurul Kabulü</h3>
            <p className="mt-2 text-sm text-gray-600">TBMM Genel Kurulu&apos;nda maddelerin oylanıp kabul edilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📰</div>
            <h3 className="text-base font-bold">4. Resmî Gazete Yayımı</h3>
            <p className="mt-2 text-sm text-gray-600">Kanunun Resmî Gazete&apos;de yayımlanması ve öngörülen yürürlük tarihinin başlaması</p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu dört aşamadan hiçbiri tamamlanmadan yürürlükte bağlayıcı bir
          kripto vergisi yok demektir. Gelişmeleri takip ederken haber
          sitelerindeki &quot;kripto vergisi geldi&quot; başlıklarını değil,
          doğrudan TBMM&apos;nin kanun teklifi takip sayfasını, Resmî
          Gazete&apos;yi ve GİB&apos;in resmî duyurularını esas almak en
          güvenilir yöntem.
        </p>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Özel bir kripto vergi kanunu olmaması, kazancın hiçbir şekilde beyan edilmeyeceği anlamına gelmez; mevcut GVK/KVK hükümleri işlemin niteliğine göre uygulanabiliyor.</li>
            <li>Kripto varlık hizmet sağlayıcılarının SPK lisanslı ve MASAK yükümlüsü olması ile kullanıcının vergi yükümlülüğü ayrı konulardır, birini yerine getirmek diğerini ortadan kaldırmaz.</li>
            <li>&quot;Kripto vergisi geldi&quot; başlıklı haberlerin hangi aşamadaki bir düzenlemeden bahsettiğine (taslak mı, TBMM&apos;ye sunuldu mu, kabul edildi mi, Resmî Gazete&apos;de yayımlandı mı) mutlaka dikkat edin.</li>
            <li>Yüksek hacimli ve düzenli kripto alım satımı yapan bireyler, ticari kazanç kapsamına girme riskini göz ardı etmemeli.</li>
            <li>Şirket bünyesinde kripto varlık tutan veya bu alanda faaliyet gösteren işletmeler, muhasebe sınıflandırması ve KVK beyanı konusunda mevcut belirsizlik içinde tutarlı bir yöntem izlemeli ve bu yöntemi belgelemeli.</li>
          </ul>
        </div>
      </section>

      {/* 9. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=38569&MevzuatTur=7&MevzuatTertip=5" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Ödemelerde Kripto Varlıkların Kullanılmamasına Dair Yönetmelik (16 Nisan 2021, RG 31456) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2024/07/20240702-1.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                7518 Sayılı Sermaye Piyasası Kanununda Değişiklik Yapılmasına Dair Kanun (2 Temmuz 2024, RG 32590) - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://spk.gov.tr/duyurular/basin-duyurulari/2025/kripto-varlik-hizmet-saglayicilarina-iliskin-iki-teblig-yayimlandi" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Kripto Varlık Hizmet Sağlayıcılarına İlişkin İki Tebliğ Yayımlandı - Sermaye Piyasası Kurulu (spk.gov.tr)
              </a>
            </li>
            <li>
              <a href="https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+menu/duyurular/basin/2021/duy2021-17" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Ödemeler Alanına İlişkin Basın Duyurusu (2021-17) - Türkiye Cumhuriyet Merkez Bankası (tcmb.gov.tr)
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Gelir İdaresi Başkanlığı Resmî Web Sitesi - gib.gov.tr (kripto varlıklara özel bağlayıcı bir tebliğ/sirküler şu an itibarıyla yayımlanmamıştır)
              </a>
            </li>
            <li>
              <a href="https://www.tbmm.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Türkiye Büyük Millet Meclisi - Kanun Teklifleri ve Görüşme Tutanakları (tbmm.gov.tr)
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
              Kripto para kazançları Türkiye&apos;de vergiye tabi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Kripto varlıklara özel bir vergi kanunu şu an itibarıyla yok,
              ancak bu &quot;vergisiz&quot; anlamına gelmiyor. Süreklilik arz
              eden alım satım faaliyeti GVK m.37 kapsamında ticari kazanç
              olarak değerlendirilme eğiliminde; arızi/bireysel işlemlerin
              değer artış kazancı kapsamına girip girmediği ise tartışmalı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kripto varlıklara özel bir vergi kanunu var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, şu an itibarıyla yürürlükte kripto varlıklara özel,
              bağlayıcı bir vergi kanunu bulunmuyor. Kazançlar, genel Gelir
              Vergisi Kanunu ve Kurumlar Vergisi Kanunu hükümleri
              çerçevesinde tartışmalı biçimde değerlendiriliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TBMM&apos;deki kripto vergisi teklifi ne oldu, yasalaştı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, yasalaşmadı. 2 Mart 2026&apos;da TBMM&apos;ye sunulan
              teklifteki kripto varlık işlem vergisi ve stopaj öngören
              maddeler, 27 Mart 2026&apos;da Genel Kurul görüşmeleri
              sırasında geri çekildi. Konunun ayrı bir teklifle yeniden
              gündeme gelmesi bekleniyor ancak tarih belirsiz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kripto varlık alım satım platformları hangi kuruma bağlı?
            </h3>
            <p className="leading-8 text-gray-700">
              Kripto varlık hizmet sağlayıcıları (borsalar), 7518 sayılı
              Kanun&apos;la 6362 sayılı Sermaye Piyasası Kanunu kapsamına
              alınarak Sermaye Piyasası Kurulu&apos;nun (SPK) lisans ve
              denetim yetkisine tabi kılındı. Ayrıca kara para aklamanın
              önlenmesi mevzuatı kapsamında MASAK&apos;a karşı kimlik
              tespiti ve bildirim yükümlülükleri taşıyorlar. Bu yükümlülükler
              vergiyle değil, piyasa güvenliği ve denetimiyle ilgili.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketimin bilançosunda kripto varlık tutması kurumlar vergisine tabi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Kurumlar Vergisi Kanunu&apos;nun genel ilkesi gereği,
              bir şirketin elde ettiği her türlü kazanç kaynak ayrımı
              yapılmaksızın kurum kazancına dahil edilir. Kripto varlık
              alım satımından elde edilen kâr da normal ticari faaliyet
              geliriyle aynı şekilde kurumlar vergisine tabi olur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kripto vergisi konusu ne zaman netleşecek?
            </h3>
            <p className="leading-8 text-gray-700">
              Kesin bir tarih vermek mümkün değil. Netleşme için yeni bir
              kanun teklifinin TBMM&apos;ye sunulup komisyonlarda
              görüşülmesi, Genel Kurul&apos;da kabul edilmesi ve Resmî
              Gazete&apos;de yayımlanması gerekiyor. Bu aşamalardan
              hiçbiri tamamlanmadan yürürlükte bağlayıcı bir kripto vergisi
              olmayacak.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kripto Varlık Pozisyonunuzu Mevcut Belirsizlik İçinde Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Kripto varlık alım satımı yapıyor veya şirketinizin
            bilançosunda kripto varlık bulunduruyorsanız, mevzuatın henüz
            netleşmemiş olması riski ortadan kaldırmıyor, sadece
            belirsizleştiriyor. Kesin bir vergi avantajı vaat etmiyoruz;
            gelişmeleri yakından takip ederek şirketinizin veya kişisel
            durumunuzun mevcut genel vergi mevzuatı karşısındaki en doğru
            pozisyonunu birlikte değerlendirmemiz için{" "}
            <Link href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi" className="text-orange-600 underline">
              vergi danışmanlığı hizmetimiz
            </Link>{" "}
            kapsamında{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              bizimle iletişime geçin.
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
          Türkiye&apos;de kripto varlıkların vergilendirilmesi, bugün
          itibarıyla net bir kanuna değil, birbirinden farklı üç ayrı
          düzenlemenin (SPK&apos;nın piyasa denetimi, TCMB&apos;nin ödeme
          yasağı ve genel vergi mevzuatının tartışmalı uygulaması) bir
          arada yorumlanmasına dayanıyor. Mart 2026&apos;da TBMM&apos;ye
          sunulan ve aynı ay geri çekilen kanun teklifi, konunun kısa
          vadede tekrar gündeme geleceğinin bir işareti; ancak hangi
          tarihte, hangi oranlarla yasalaşacağı şu an itibarıyla
          belirsizliğini koruyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, vergi ve
          stratejik danışmanlık hizmetlerimiz kapsamında bu alandaki
          mevzuat gelişmelerini takip ediyor ve kripto varlıkla ilgilenen
          bireylerin ve şirketlerin mevcut belirsizlik içinde en doğru ve
          savunulabilir pozisyonu almasına yardımcı oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ulusal ve Uluslararası Vergi Danışmanlığı: KOBİ&apos;ler İçin Neden Gerekli?</h3>
          </Link>
          <Link
            href="/blog/varlik-barisi-2026-nedir-sartlari-oranlari-basvuru-sureci"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ MEVZUATI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Varlık Barışı 2026 Nedir? Şartları, Oranları ve Süreci</h3>
          </Link>
          <Link
            href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ RİSK ANALİZİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ&apos;nin İhtiyacı?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Kripto para kazançları Türkiye'de vergiye tabi mi?","acceptedAnswer":{"@type":"Answer","text":"Kripto varlıklara özel bir vergi kanunu şu an itibarıyla yok, ancak bu \"vergisiz\" anlamına gelmiyor. Süreklilik arz eden alım satım faaliyeti GVK m.37 kapsamında ticari kazanç olarak değerlendirilme eğiliminde; arızi/bireysel işlemlerin değer artış kazancı kapsamına girip girmediği ise tartışmalı."}},{"@type":"Question","name":"Kripto varlıklara özel bir vergi kanunu var mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır, şu an itibarıyla yürürlükte kripto varlıklara özel, bağlayıcı bir vergi kanunu bulunmuyor. Kazançlar, genel Gelir Vergisi Kanunu ve Kurumlar Vergisi Kanunu hükümleri çerçevesinde tartışmalı biçimde değerlendiriliyor."}},{"@type":"Question","name":"TBMM'deki kripto vergisi teklifi ne oldu, yasalaştı mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır, yasalaşmadı. 2 Mart 2026'da TBMM'ye sunulan teklifteki kripto varlık işlem vergisi ve stopaj öngören maddeler, 27 Mart 2026'da Genel Kurul görüşmeleri sırasında geri çekildi. Konunun ayrı bir teklifle yeniden gündeme gelmesi bekleniyor ancak tarih belirsiz."}},{"@type":"Question","name":"Kripto varlık alım satım platformları hangi kuruma bağlı?","acceptedAnswer":{"@type":"Answer","text":"Kripto varlık hizmet sağlayıcıları (borsalar), 7518 sayılı Kanun'la 6362 sayılı Sermaye Piyasası Kanunu kapsamına alınarak Sermaye Piyasası Kurulu'nun (SPK) lisans ve denetim yetkisine tabi kılındı. Ayrıca kara para aklamanın önlenmesi mevzuatı kapsamında MASAK'a karşı kimlik tespiti ve bildirim yükümlülükleri taşıyorlar. Bu yükümlülükler vergiyle değil, piyasa güvenliği ve denetimiyle ilgili."}},{"@type":"Question","name":"Şirketimin bilançosunda kripto varlık tutması kurumlar vergisine tabi mi?","acceptedAnswer":{"@type":"Answer","text":"Evet. Kurumlar Vergisi Kanunu'nun genel ilkesi gereği, bir şirketin elde ettiği her türlü kazanç kaynak ayrımı yapılmaksızın kurum kazancına dahil edilir. Kripto varlık alım satımından elde edilen kâr da normal ticari faaliyet geliriyle aynı şekilde kurumlar vergisine tabi olur."}},{"@type":"Question","name":"Kripto vergisi konusu ne zaman netleşecek?","acceptedAnswer":{"@type":"Answer","text":"Kesin bir tarih vermek mümkün değil. Netleşme için yeni bir kanun teklifinin TBMM'ye sunulup komisyonlarda görüşülmesi, Genel Kurul'da kabul edilmesi ve Resmî Gazete'de yayımlanması gerekiyor. Bu aşamalardan hiçbiri tamamlanmadan yürürlükte bağlayıcı bir kripto vergisi olmayacak."}}]}) }}
      />
    </BlogLayout>
  );
}
