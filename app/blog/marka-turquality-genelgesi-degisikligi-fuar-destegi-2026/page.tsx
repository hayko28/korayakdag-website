import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Marka ve TURQUALITY Genelgesi 2026'da Değişti: Fuar Desteği Neden %75'e Çıktı? | Koray Akdağ",
  description: "Ticaret Bakanlığı'nın Marka ve TURQUALITY® Desteğine İlişkin Genelgesi 30 Ekim 2026'da baştan yenilendi. Türk İhraç Ürünleri Fuarı katılımında destek oranının %75'e çıkması, kullanılmayan hedef pazar yıllarının eklenmesi, yabancı alıcı ağırlama desteği, teşhir alanı desteği ve yazılım danışmanlığında TÜR Belgesi şartıyla güncel rehber.",
  keywords: [
    "marka ve turquality genelgesi",
    "turquality fuar desteği",
    "türk ihraç ürünleri fuarı desteği",
    "marka destek programı 2026",
    "5973 sayılı karar",
    "turquality destek oranı",
    "tür belgesi danışmanlık desteği",
    "ticaret bakanlığı marka desteği",
  ],
  alternates: {
    canonical: "/blog/marka-turquality-genelgesi-degisikligi-fuar-destegi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Marka ve TURQUALITY Genelgesi 30 Ekim 2026'da Değişti: Fuar Desteği Neden %75'e Çıktı?"
      description="Ticaret Bakanlığı, Marka ve TURQUALITY® Desteğine İlişkin Genelge'yi 30 Ekim 2026'da baştan yenileyerek yürürlüğe koydu. Türk İhraç Ürünleri Fuarı katılımında destek oranının %75'e çıkması, kullanılmayan hedef pazar yıllarının eklenmesi, yabancı alıcı ağırlama ve teşhir alanı desteği ile danışmanlıkta yazılım alımına gelen TÜR Belgesi şartıyla programdaki şirketler için güncel rehber."
      category="TİCARET BAKANLIĞI • MARKA VE TURQUALITY DESTEĞİ • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="marka-turquality-genelgesi-degisikligi-fuar-destegi-2026"
      coverImage="https://images.unsplash.com/photo-1752155222944-675c2c3bfafd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      programDurumu="acik"
      ctaHeading="Marka/TURQUALITY Destek Programına Uygunluğunuzu Birlikte Değerlendirelim"
      ctaText="Başvuru şartlarını karşılayıp karşılamadığınızdan, yeni genelgedeki fuar ve danışmanlık desteklerinden en doğru şekilde yararlanmanıza kadar süreci sizinle birlikte yürütüyoruz."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Ticaret Bakanlığı, <strong>Marka ve TURQUALITY® Desteğine İlişkin Genelge&apos;yi 30 Ekim 2026&apos;da</strong> baştan yenileyerek yürürlüğe koydu; eski 2006/4 Sayılı Tebliğ Genelgesi tamamen yürürlükten kalktı.</li>
          <li>✔ Programdaki şirketler <strong>Türk İhraç Ürünleri Fuarı&apos;na</strong> katıldığında destek oranına <strong>25 puan</strong> ekleniyor; temel oran %50 olduğu için fiili oran <strong>%75&apos;e</strong> çıkıyor ve bu ödemeler yıllık üst limit hesabına dahil edilmiyor.</li>
          <li>✔ 5 yıllık hedef pazar süresinde hiç destek ödemesine konu olmayan yıllar, <strong>her hedef pazar için bir defaya mahsus</strong> olmak üzere sürenin sonuna eklenebiliyor.</li>
          <li>✔ Yurt dışındaki alıcıların ve kamu kurumu temsilcilerinin Türkiye&apos;de ağırlanması (en fazla 5 gün, faaliyet başına en fazla <strong>5.000.000 TL</strong>) ve bayi/distribütör noktalarında marka özel teşhir alanı oluşturulması artık destek kapsamında.</li>
          <li>✔ Danışmanlık desteği kapsamında satın alınan veya kiralanan yazılımlarda <strong>TÜR Belgesi şartı</strong> getirildi; genelge öncesi alınan yazılımların bakım/güncelleme giderleri bu şart aranmadan desteklenmeye devam ediyor.</li>
          <li>✔ Genelgenin yürürlüğe girdiği tarihten önce yapılmış/onaylanmış harcama ve başvurularda, eski ve yeni mevzuatın <strong>lehe olan hükümleri birlikte</strong> uygulanıyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#genel-bakis" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Ne Değişti? Genel Bakış
          </Link>
          <Link href="#fuar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Fuar Desteği Neden %75&apos;e Çıktı?
          </Link>
          <Link href="#hedef-pazar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kullanılmayan Hedef Pazar Yılları Kayboluyor mu?
          </Link>
          <Link href="#agirlama" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Yabancı Alıcı Ağırlama ve Teşhir Alanı Desteği
          </Link>
          <Link href="#tur-belgesi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Yazılım Danışmanlığında TÜR Belgesi Şartı
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Karıştırmayın: Oran Artışı ile Üst Limit Muafiyeti
          </Link>
          <Link href="#gecis" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Geçiş Hükümleri: Eski Başvurular Ne Olacak?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Bu Genelgeden Kimler Yararlanıyor?
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

      {/* 1. GENEL BAKIŞ */}
      <section id="genel-bakis" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Ne Değişti? Genel Bakış
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Marka ve TURQUALITY® destek programı, 17 Ağustos 2022 tarihli ve
          5973 sayılı Cumhurbaşkanı Kararı&apos;na (İhracat Destekleri
          Hakkında Karar) dayanıyor. Bu Karar&apos;ın uygulamadaki ayrıntılarını,
          yani kimin hangi belgeyle başvuracağını, hangi harcamanın hangi
          oranda destekleneceğini ve sürecin sistem üzerinde nasıl
          işleyeceğini belirleyen metin ise Ticaret Bakanlığı&apos;nın
          ayrı yayımladığı bir genelge. Bakanlık, bu genelgeyi{" "}
          <strong>30 Ekim 2026</strong> tarihinde tamamen yeniledi ve aynı
          tarihte yürürlüğe koydu. Yeni metinle birlikte, programın
          dayanağı olan eski &quot;2006/4 Sayılı Tebliğe Ait Uygulama Usul
          ve Esasları Genelgesi&quot; resmen yürürlükten kaldırıldı.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bu, kozmetik bir güncelleme değil, programda yıllardır
          başvurulan destek kalemlerine beş yeni unsur ekleyen ve bir
          danışmanlık kalemine yeni bir şart getiren köklü bir
          yenileme. Değişikliklerin ortak teması açık: Bakanlık, markalı
          ihracatı artırmak isteyen şirketleri hem fuarda hem yurt dışı
          satış noktasında daha görünür kılmaya, hem de danışmanlık
          desteğinin yerli teknoloji ürünlerine yönlendirilmesine
          öncelik veriyor. Programın genel yapısını, kabul kriterlerini
          ve puanlama sistemini zaten{" "}
          <Link href="/blog/turquality-programi-nedir-sartlari-destekleri-2026" className="text-orange-600 underline">
            Turquality Programı Nedir? yazımızda
          </Link>{" "}
          ayrıntılı ele almıştık; bu yazı doğrudan 30 Ekim 2026&apos;da
          gelen değişikliklere odaklanıyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Genelgenin dipnotu açık: &quot;30/10/2026 tarihinde yürürlüğe
            girmiştir.&quot; Yürürlük maddesi (madde 38) ise genelgenin
            onaylandığı tarihte yürürlüğe gireceğini belirtiyor; dipnot bu
            tarihi 30 Ekim 2026 olarak netleştiriyor.
          </p>
        </div>
      </section>

      {/* 2. FUAR DESTEĞİ */}
      <section id="fuar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Fuar Desteği Neden %75&apos;e Çıktı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Değişikliğin en somut etkisi, genelgenin 32&apos;nci maddesinde.
          Marka veya TURQUALITY® programı kapsamındaki bir şirket, Genel
          Müdürlük tarafından uygun görülürse <strong>Türk İhraç Ürünleri
          Fuarı</strong>&apos;na katılabiliyor. Katılım, Bakanlık tarafından
          belirlenen hedef ülke ve hedef sektörde gerçekleştirilmiş sayılıyor
          ve destek oranına doğrudan <strong>25 puan</strong> ekleniyor.
          Fuar ve tanıtım giderlerinde temel destek oranı %50 olduğundan,
          bu ilave puanla fiili oran <strong>%75&apos;e</strong> çıkıyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Değer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tanıtım/fuar desteğinde temel oran</td>
                <td className="p-5">%50</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Türk İhraç Ürünleri Fuarı katılımında ilave puan</td>
                <td className="p-5">+25 puan</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Fiili destek oranı (bu fuarlara özel)</td>
                <td className="p-5">%75</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Üst limit hesabına dahil mi?</td>
                <td className="p-5">Hayır, ayrı tutuluyor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu ödemelerin genelgenin 13&apos;üncü maddesindeki yıllık üst
          limit hesaplarına dahil edilmemesi, pratikte şirketlere önemli
          bir nefes alanı yaratıyor: normal fuar/tanıtım bütçesini
          tüketmeden, devletin belirlediği Türk İhraç Ürünleri Fuarlarına
          ayrı bir bütçeyle ve daha yüksek oranla katılabiliyorlar.
          Katılımcı seçimi tek yanlı değil; Genel Müdürlük fuarın
          niteliğini, gerçekleştirileceği ülke ve sektörü, ihracat
          potansiyelini ve şirketin geçmiş dönem katılım performansını
          değerlendirerek katılımcıları fuar tarihinden önce şirketlere
          bildiriyor.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Genelgede gözden kaçan bir
            yaptırım var. Katılımı Genel Müdürlük tarafından uygun
            görüldüğü halde kabul edilebilir bir mazereti olmadan Türk
            İhraç Ürünleri Fuarı&apos;na katılmayan şirketin, ilgili
            markası için destek başvuruları bildirimden itibaren
            <strong> bir yıl süreyle kısıtlanıyor</strong>. Bu nedenle bir
            fuara &quot;katılımcı&quot; olarak bildirim aldıktan sonra
            vazgeçme kararını hafife almamak, mazeret gerekçesini önceden
            belgelendirmek gerekiyor.
          </p>
        </div>
      </section>

      {/* 3. HEDEF PAZAR */}
      <section id="hedef-pazar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kullanılmayan Hedef Pazar Yılları Kayboluyor mu?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Programda her hedef pazar (Bakanlık tarafından onaylanan ülke)
          için 5 yıllık bir destek süresi işliyor ve bu süre, o pazarda
          desteğe konu edilen ilk ödeme belgesi tarihinden başlıyor. Eski
          uygulamada, şirketin bir yıl boyunca o pazarda hiç destek
          ödemesine konu harcaması olmazsa, o yıl basitçe kayboluyordu.
          Yeni genelgenin 18&apos;inci maddesinin üçüncü fıkrası bu
          kuralı yumuşatıyor: hedef pazar süresi sonunda, ödeme belgesi
          veya faaliyet tarihine bakılarak hiç destek ödemesine konu
          edilmediği belirlenen yıllar, <strong>her bir hedef pazar için
          bir defaya mahsus</strong> olmak üzere destek süresinin sonuna
          ekleniyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bu talebin kendiliğinden işlemediğini not etmek gerekiyor;
          şirketin, ilgili hedef pazar için kullanılmayan yılın sürenin
          sonuna eklenmesini <strong>incelemeci kuruluş</strong>{" "}
          (üyesi olunan ihracatçı birliği) aracılığıyla Bakanlığa iletmesi
          gerekiyor. Pratikte bu, özellikle pazara giriş sürecinin
          beklenenden uzun sürdüğü veya ilk yıllarda ciddi bir pazarlama
          harcaması yapılamadığı pazarlarda, şirketin destek süresini
          fiilen bir yıl daha uzatabileceği anlamına geliyor.
        </p>
      </section>

      {/* 4. AĞIRLAMA VE TEŞHİR */}
      <section id="agirlama" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Yabancı Alıcı Ağırlama ve Teşhir Alanı Desteği
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Genelgenin 4&apos;üncü maddesine eklenen iki yeni fıkra,
          şirketlerin yurt dışı pazarlama faaliyetlerine iki somut yeni
          kalem getiriyor. Birincisi, yurt dışında yerleşik alıcıların ve
          kamu kurum/kuruluş temsilcilerinin <strong>Türkiye&apos;de
          ağırlanmasına</strong> yönelik tanıtım faaliyetleri artık destek
          kapsamında. Organizasyon, ulaşım ve konaklama giderleri (yol
          hariç) en fazla 5 gün süreyle destekleniyor; yer ve ekipman
          kiralama, tercümanlık, tanıtım materyali ve yurt içi transfer
          giderleri de bu kapsamda. Her bir alıcı şirket ve kurum/kuruluş
          için en fazla 5 temsilciye yönelik giderler destekleniyor ve bu
          faaliyete yönelik ödemeler, faaliyet başına en fazla
          <strong> 5.000.000 TL</strong> ile sınırlı.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          İkinci yeni kalem, bayi, temsilci veya distribütörlerin satış
          noktalarında, destek kapsamındaki şirketin markalı ürünlerinin
          sergilenmesi için <strong>markaya özgü teşhir alanı
          oluşturulmasına</strong> yönelik giderler. Bu, özellikle
          perakende kanalında çalışan markalar için, ürünün rafta veya
          mağaza içinde ayrı ve markayı öne çıkaran bir alanda
          sergilenmesini finansal olarak teşvik eden, önceki genelgede
          yer almayan bir destek unsuru.
        </p>
      </section>

      {/* 5. TÜR BELGESİ */}
      <section id="tur-belgesi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yazılım Danışmanlığında TÜR Belgesi Şartı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Programın danışmanlık desteği (madde 6), şirketin uluslararası
          pazarlarda rekabet avantajını artırmak için aldığı çeşitli
          danışmanlıkları kapsıyor; bunun bir alt başlığı da bilişim
          danışmanlığı kapsamında satın alınan veya kiralanan yazılım
          ürün ve hizmetleri, veri tabanları, işletim sistemleri ve bunların
          yıllık bakım/güncelleme bedelleri. Yeni genelgenin 6&apos;ncı
          maddesinin üçüncü fıkrası, bu kapsamda satın alınacak veya
          kiralanacak yazılım ürünlerinin ve hizmetlerinin{" "}
          <strong>Teknolojik Ürün Belgesi&apos;ni (TÜR Belgesi) haiz
          olmasını</strong> şart koşuyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          TÜR Belgesi nedir, hangi ürünler için alınabilir ve başvuru
          süreci nasıl işler sorularını{" "}
          <Link href="/blog/tur-belgesi-teknolojik-urun-deneyim-belgesi-nedir-nasil-alinir" className="text-orange-600 underline">
            TÜR Belgesi yazımızda
          </Link>{" "}
          ayrıntılı ele aldık. Bu genelge özelinde pratik sonuç şu:
          Marka/TURQUALITY® programındaki bir şirket, bundan sonra
          danışmanlık desteği kapsamında bir yazılım satın alırken veya
          kiralarken, önce bu yazılımın TÜR Belgesi&apos;ne sahip olup
          olmadığını kontrol etmek zorunda; aksi halde harcama
          desteklenmiyor. Donanıma ilişkin harcamalar ile danışmanlık
          hizmeti kapsamındaki ulaşım/konaklama giderleri ise zaten
          destek kapsamı dışında tutuluyor.
        </p>
      </section>

      {/* 6. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karıştırmayın: Oran Artışı ile Üst Limit Muafiyeti
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ &quot;%75 Destek&quot; ile &quot;Sınırsız Destek&quot; Aynı Şey Değil
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Destek Oranındaki Artış
              </p>
              <p className="text-gray-700">
                Türk İhraç Ürünleri Fuarı&apos;na katılımda destek oranı
                %50&apos;den %75&apos;e çıkıyor. Bu, şirketin fuar
                giderlerinin dörtte üçünü geri alabileceği anlamına
                geliyor, ancak sadece <strong>fuar katılım sözleşmesinde
                yer alan ve Ek-1&apos;de sayılan</strong> gider kalemleri
                için.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Üst Limitten Muafiyet
              </p>
              <p className="text-gray-700">
                Bu fuarlara yönelik ödemelerin genelgenin 13&apos;üncü
                maddesindeki <strong>yıllık üst limit</strong> (Marka
                programında 246.634.310 TL, TURQUALITY&apos;de
                493.271.347 TL) hesabına dahil edilmemesi ayrı bir kural.
                Yani bu harcamalar, şirketin yıllık toplam destek
                tavanını <strong>doldurmuyor</strong>, ama şirketin yıllık
                toplam ihracatının yarısını aşamayacağı genel kurala
                (madde 13/3) hâlâ tabi.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Kısacası &quot;%75 destek alıyorum&quot; ile &quot;bu
            harcamalarım hiçbir sınıra tabi değil&quot; farklı iki
            iddia. Birincisi doğru, ikincisi değil: ihracatın yarısı
            kuralı, 1 Ocak 2027&apos;den itibaren yapılacak başvurularda
            hâlâ geçerli olacak genel bir tavan.
          </p>
        </div>
      </section>

      {/* 7. GEÇİŞ HÜKÜMLERİ */}
      <section id="gecis" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Geçiş Hükümleri: Eski Başvurular Ne Olacak?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Genelgenin geçici maddesi, hâlihazırda programda olan şirketleri
          mağdur etmeyecek bir geçiş kurgusu getiriyor. 30 Ekim 2026&apos;dan
          önce gerçekleştirilen, onaylanan veya ödeme belgesi tarihi bu
          tarihten önce olan faaliyetlere ilişkin destek başvurularının
          sonuçlandırılmasında, yürürlükten kaldırılan eski mevzuatın{" "}
          <strong>lehe olan hükümleri</strong> uygulanıyor; buna ek olarak
          bu başvurular, yeni genelgenin lehe olan hükümlerinden de
          yararlandırılıyor. Yani şirket için hangi metin daha avantajlıysa
          o uygulanıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Yazılımdaki TÜR Belgesi şartı için de ayrı bir yumuşatma var:
          genelgenin yürürlüğe girdiği tarihten önce satın alınmış veya
          kiralanmış yazılımların yıllık bakım/güncelleme bedelleri ile
          devreye alma, özelleştirme, iyileştirme ve idame danışmanlık
          giderleri, TÜR Belgesi&apos;ne bakılmaksızın, ilgili desteğin
          süresi sonuna kadar desteklenmeye devam ediyor. Ayrıca madde
          13&apos;ün üçüncü fıkrasındaki &quot;toplam destek, yıllık
          ihracatın yarısını aşamaz&quot; kuralı, 1 Ocak 2027 tarihinden
          itibaren yapılacak başvurulara uygulanacak; bu tarihten önceki
          başvurularda başvuru tarihinde geçerli olan hükümler esas
          alınıyor.
        </p>
      </section>

      {/* 8. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Bu Genelgeden Kimler Yararlanıyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Değişiklikler, zaten Marka veya TURQUALITY® destek programı
          kapsamına alınmış şirketleri doğrudan ilgilendiriyor. Programa
          henüz dahil olmayan ama son 3 takvim yılında ortalama en az
          5.000.000 ABD Doları ihracat yapan ve markasının yurt içi
          tescilinin yanında Madrid Protokolü&apos;ne taraf bir ülkede
          en az 1 yıldır yurt dışı tescili bulunan şirketler için de bu
          genelge, programa kabul sonrasında karşılaşacakları destek
          setini gösteriyor. Bir holding veya şirketler topluluğunun aynı
          anda en fazla 6 markası destek kapsamında olabiliyor. Programa
          nasıl kabul edileceğinizi, puanlama eşiklerini (Marka
          programı için 50-80 puan, TURQUALITY için 80-100 puan) ve genel
          başvuru sürecini{" "}
          <Link href="/blog/turquality-programi-nedir-sartlari-destekleri-2026" className="text-orange-600 underline">
            Turquality Programı Nedir? yazımızda
          </Link>{" "}
          ve Ticaret Bakanlığı&apos;nın diğer ihracat desteklerini{" "}
          <Link href="/blog/ticaret-bakanligi-ihracat-destekleri-2026" className="text-orange-600 underline">
            Ticaret Bakanlığı İhracat Destekleri rehberimizde
          </Link>{" "}
          bulabilirsiniz.
        </p>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Türk İhraç Ürünleri Fuarı&apos;na katılımcı olarak bildirim aldıktan sonra mazeretsiz vazgeçmeyin, 1 yıl başvuru kısıtlaması riski var
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kullanılmayan hedef pazar yılını sürenin sonuna eklemek otomatik değil, talebi incelemeci kuruluşunuz (ihracatçı birliğiniz) üzerinden iletmeniz gerekiyor
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Danışmanlık desteği kapsamında yazılım alacaksanız, satın alma veya kiralama öncesinde ürünün TÜR Belgesi&apos;ne sahip olduğunu teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ 30 Ekim 2026 öncesi alınmış yazılımların bakım/güncelleme giderleri için TÜR Belgesi aranmıyor; bu geçiş hükmünü danışmanınızla teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yabancı alıcı ağırlama desteğinde süre (en fazla 5 gün) ve temsilci sayısı (alıcı/kurum başına en fazla 5 kişi) sınırlarını aşmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yıllık ihracatınızın yarısı kuralı 1 Ocak 2027&apos;den itibaren tüm başvurularda geçerli olacak; bütçe planlamanızı buna göre yapın
          </div>
        </div>
      </section>

      {/* 10. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı aşağıdaki birincil kaynaklara dayanmaktadır. Başvuru ve
          harcama süreçlerinde güncel oran, limit ve şartları doğrudan bu
          kaynaklardan teyit etmenizi öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <a href="https://ticaret.gov.tr/data/63403c7213b87692b0e3b9d6/Marka%20ve%20TURQUALITY%C2%AE%20Deste%C4%9Fine%20%C4%B0li%C5%9Fkin%20Genelge.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Marka ve TURQUALITY® Desteğine İlişkin Genelge (30.10.2026 güncel sürüm)
            </a>
          </li>
          <li>
            <a href="https://ticaret.gov.tr/destekler/ihracat-destekleri/5973-sayili-ihracat-destekleri-hakkinda-karara-iliskin-genelgeler/marka-ve-turquality-destegi" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ticaret Bakanlığı &quot;Marka ve TURQUALITY® Desteği&quot; sayfası
            </a>
          </li>
          <li>
            <a href="https://ticaret.gov.tr/haberler/ticaret-bakanligi-olarak-ihracatcimizin-kuresel-marka-yolculugunu-yeni-desteklerle-guclendirmeye-devam-ediyoruz" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ticaret Bakanlığı duyurusu: &quot;İhracatçımızın küresel marka yolculuğunu yeni desteklerle güçlendirmeye devam ediyoruz&quot;
            </a>
          </li>
          <li>
            <a href="https://www.resmigazete.gov.tr/eskiler/2022/08/20220818-5.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              5973 sayılı İhracat Destekleri Hakkında Karar (Resmî Gazete, 18.08.2022/31927)
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
              Marka ve TURQUALITY Genelgesi ne zaman değişti?
            </h3>
            <p className="leading-8 text-gray-700">
              Ticaret Bakanlığı, Marka ve TURQUALITY® Desteğine İlişkin
              Genelge&apos;yi baştan yenileyerek 30 Ekim 2026&apos;da
              yürürlüğe koydu. Yeni metinle birlikte eski 2006/4 Sayılı
              Tebliğe Ait Uygulama Usul ve Esasları Genelgesi tamamen
              yürürlükten kalktı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Türk İhraç Ürünleri Fuarına katılımda destek oranı gerçekten %75 mi oldu?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, ama sadece bu fuarlara özel. Tanıtım/fuar desteğinde
              temel oran %50&apos;dir. Genel Müdürlük tarafından katılımı
              uygun görülen Türk İhraç Ürünleri Fuarı&apos;na katılım,
              destek oranına 25 puan ekleyerek fiili oranı %75&apos;e
              çıkarıyor ve bu ödemeler yıllık üst limit hesabına dahil
              edilmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Fuar için katılımcı olarak bildirim aldıktan sonra katılmazsam ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel Müdürlük tarafından kabul edilen bir mazeretiniz
              yoksa, katılımı uygun görülmüş olmasına karşın fuara
              katılmazsanız, ilgili markanız için yapacağınız destek
              başvuruları bildirim tarihinden itibaren bir yıl süreyle
              kısıtlanır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kullanılmayan hedef pazar yılını nasıl geri kazanabilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hedef pazar süresi sonunda, ödeme belgesi veya faaliyet
              tarihi esas alınarak hiçbir destek ödemesine konu
              edilmediği belirlenen yıllar, her hedef pazar için bir
              defaya mahsus olmak üzere sürenin sonuna eklenebilir. Bu
              talebi, üyesi olduğunuz ihracatçı birliği (incelemeci
              kuruluş) aracılığıyla Bakanlığa iletmeniz gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Danışmanlık desteğinde yazılım alırken TÜR Belgesi şartı herkese mi uygulanıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Şart, 30 Ekim 2026 ve sonrasında satın alınan veya kiralanan
              yazılım ürün ve hizmetleri için geçerli. Bu tarihten önce
              alınmış yazılımların yıllık bakım/güncelleme bedelleri ile
              devreye alma, özelleştirme, iyileştirme ve idame
              danışmanlık giderleri, ilgili desteğin süresi sonuna kadar
              TÜR Belgesi şartı aranmadan desteklenmeye devam eder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeni genelge, zaten programda olan şirketleri olumsuz etkiler mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, aksi öngörülmüyor. Genelgenin yürürlüğe girdiği
              tarihten önce gerçekleştirilen, onaylanan veya ödeme belgesi
              tarihi bu tarihten önce olan faaliyetlere ilişkin
              başvurularda, eski ve yeni mevzuatın şirket için lehe olan
              hükümleri birlikte uygulanıyor.
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
          30 Ekim 2026&apos;da yürürlüğe giren yeni Marka ve TURQUALITY®
          Genelgesi, programda uzun süredir eksik hissedilen birkaç
          boşluğu dolduruyor: fuar katılımını daha cazip hale getiriyor,
          kullanılmayan destek yıllarının kaybolmasını önlüyor, yurt dışı
          alıcı ilişkilerini ve perakende görünürlüğünü destekliyor.
          Buna karşılık yazılım danışmanlığında TÜR Belgesi şartı gibi
          şirketlerin hazırlıksız yakalanabileceği yeni bir yükümlülük de
          getiriyor. Programda olan veya programa başvurmayı planlayan
          şirketler için bu ayrıntıları bilmek, hem destekten en üst
          seviyede yararlanmak hem de gereksiz bir red veya kısıtlama
          riskinden kaçınmak açısından önemli.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Başvuru şartlarını karşılayıp karşılamadığınızdan, yeni
          genelgedeki fuar ve danışmanlık desteklerinden en doğru şekilde
          yararlanmanıza kadar süreci Koray Akdağ / Sistem Global
          Danışmanlık olarak sizinle birlikte yürütüyoruz.{" "}
          <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
            Şirketinizin Marka/TURQUALITY destek programına uygunluğunu
            birlikte değerlendirelim.
          </Link>
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/turquality-programi-nedir-sartlari-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TURQUALITY • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Turquality Programı Nedir? Şartları, Destekleri ve 2026 Güncel Rehberi</h3>
          </Link>
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri (2026 Rehberi)</h3>
          </Link>
          <Link
            href="/blog/tur-belgesi-teknolojik-urun-deneyim-belgesi-nedir-nasil-alinir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">AR-GE VE İNOVASYON • TÜR BELGESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜR Belgesi (Teknolojik Ürün Deneyim Belgesi) Nedir?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Marka ve TURQUALITY Genelgesi ne zaman değişti?","acceptedAnswer":{"@type":"Answer","text":"Ticaret Bakanlığı, Marka ve TURQUALITY Desteğine İlişkin Genelge'yi baştan yenileyerek 30 Ekim 2026'da yürürlüğe koydu. Yeni metinle birlikte eski 2006/4 Sayılı Tebliğe Ait Uygulama Usul ve Esasları Genelgesi tamamen yürürlükten kalktı."}},{"@type":"Question","name":"Türk İhraç Ürünleri Fuarına katılımda destek oranı gerçekten %75 mi oldu?","acceptedAnswer":{"@type":"Answer","text":"Evet, ama sadece bu fuarlara özel. Tanıtım/fuar desteğinde temel oran %50'dir. Genel Müdürlük tarafından katılımı uygun görülen Türk İhraç Ürünleri Fuarına katılım, destek oranına 25 puan ekleyerek fiili oranı %75'e çıkarıyor ve bu ödemeler yıllık üst limit hesabına dahil edilmiyor."}},{"@type":"Question","name":"Fuar için katılımcı olarak bildirim aldıktan sonra katılmazsam ne olur?","acceptedAnswer":{"@type":"Answer","text":"Genel Müdürlük tarafından kabul edilen bir mazeretiniz yoksa, katılımı uygun görülmüş olmasına karşın fuara katılmazsanız, ilgili markanız için yapacağınız destek başvuruları bildirim tarihinden itibaren bir yıl süreyle kısıtlanır."}},{"@type":"Question","name":"Kullanılmayan hedef pazar yılını nasıl geri kazanabilirim?","acceptedAnswer":{"@type":"Answer","text":"Hedef pazar süresi sonunda, ödeme belgesi veya faaliyet tarihi esas alınarak hiçbir destek ödemesine konu edilmediği belirlenen yıllar, her hedef pazar için bir defaya mahsus olmak üzere sürenin sonuna eklenebilir. Bu talebi, üyesi olduğunuz ihracatçı birliği aracılığıyla Bakanlığa iletmeniz gerekir."}},{"@type":"Question","name":"Danışmanlık desteğinde yazılım alırken TÜR Belgesi şartı herkese mi uygulanıyor?","acceptedAnswer":{"@type":"Answer","text":"Şart, 30 Ekim 2026 ve sonrasında satın alınan veya kiralanan yazılım ürün ve hizmetleri için geçerli. Bu tarihten önce alınmış yazılımların yıllık bakım-güncelleme bedelleri ile devreye alma, özelleştirme, iyileştirme ve idame danışmanlık giderleri, ilgili desteğin süresi sonuna kadar TÜR Belgesi şartı aranmadan desteklenmeye devam eder."}},{"@type":"Question","name":"Yeni genelge, zaten programda olan şirketleri olumsuz etkiler mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, aksi öngörülmüyor. Genelgenin yürürlüğe girdiği tarihten önce gerçekleştirilen, onaylanan veya ödeme belgesi tarihi bu tarihten önce olan faaliyetlere ilişkin başvurularda, eski ve yeni mevzuatın şirket için lehe olan hükümleri birlikte uygulanıyor."}}]}) }}
      />
    </BlogLayout>
  );
}
