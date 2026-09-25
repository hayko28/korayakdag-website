import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Konkordato Finansal Tablo Standardı 2026 Değişti | Koray Akdağ",
  description:
    "13 Mayıs 2026'da yürürlüğe giren yönetmelik değişikliğiyle konkordato başvurusunda sunulacak finansal tablolar artık TMS, BOBİ FRS veya VUK standardından hangisine göre hazırlanacağı şirket tipine göre netleşti. Kimi nasıl etkiliyor, süreç ve dikkat edilmesi gerekenler.",
  keywords: [
    "konkordato finansal tablo standardı 2026",
    "konkordato talebine eklenecek belgeler yönetmelik değişikliği",
    "BOBİ FRS konkordato",
    "konkordato bağımsız denetim raporu",
    "TMS TFRS konkordato başvurusu",
    "konkordato belgeleri 2026",
    "makul güvence raporu konkordato",
    "konkordato başvurusu mali tablo hazırlama",
  ],
  alternates: {
    canonical: "/blog/konkordato-basvurusunda-finansal-tablo-standardi-degisikligi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Konkordatoya Başvuracak Şirketler İçin Yeni Kural: Finansal Tablolarınız Hangi Standarda Göre Hazırlanmalı?"
      description="13 Mayıs 2026 tarihli ve 33252 sayılı Resmî Gazete'de yayımlanan yönetmelik değişikliğiyle konkordato talebine eklenecek finansal tabloların hangi muhasebe standardına (TMS/TFRS, BOBİ FRS veya VUK) göre hazırlanacağı, şirketin bağımsız denetime tabi olup olmamasına göre netleşti. Değişikliğin kapsamı, bağımsız denetim raporu bildirim süresi ve hazırlık sürecinde dikkat edilmesi gerekenler."
      category="KONKORDATO • FİNANSAL RAPORLAMA • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="konkordato-basvurusunda-finansal-tablo-standardi-degisikligi-2026"
      coverImage="https://images.unsplash.com/photo-1741540420787-cc5c1b454413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Kısa Cevap
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Adalet Bakanlığı, 13 Mayıs 2026 tarihli ve 33252 sayılı Resmî Gazete&apos;de yayımlanan değişiklikle &quot;Konkordato Talebine Eklenecek Belgeler Hakkında Yönetmelik&quot;i güncelledi.</li>
          <li>✔ Konkordato başvurusuna eklenecek finansal tablolar artık üç kategoriden birine göre hazırlanmak zorunda: <strong>bağımsız denetime tabi şirketler için TMS/TFRS</strong>, <strong>tabi olmayan tacirler için BOBİ FRS</strong>, <strong>diğer borçlular için VUK</strong>.</li>
            <li>✔ Sunulacak bağımsız denetim raporunun &quot;makul güvence&quot; seviyesinde olması ve iki nüsha halinde ibraz edilmesi gerekiyor.</li>
            <li>✔ Bağımsız denetim kuruluşu, düzenlediği raporu imza tarihinden itibaren en geç 30 gün içinde KGK&apos;ya bildirmekle yükümlü.</li>
            <li>✔ Değişiklik, konkordato başvurusunun temel mekanizmasını (geçici/kesin mühlet) değiştirmiyor; yalnızca sunulacak finansal tabloların hangi standarda uyacağını netleştiriyor.</li>
            <li>✔ En çok etkilenen grup, bağımsız denetime tabi olmadığı için bugüne kadar VUK mantığıyla defter tutan ama artık BOBİ FRS&apos;e geçmesi gereken orta ölçekli tacirler.</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#neden-onemli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Bu Değişiklik Neden Önemli?
            </Link>
            <Link href="#degisiklik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. 13 Mayıs 2026 Değişikliğinin İçeriği
            </Link>
            <Link href="#standartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Hangi Şirket Hangi Standardı Kullanacak?
            </Link>
            <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Karıştırılan İki Kavram
            </Link>
            <Link href="#denetim-raporu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Bağımsız Denetim Raporu ve Bildirim Süresi
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Konkordato Sürecinde Bu Belgelerin Yeri
            </Link>
            <Link href="#hazirlik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Şirketiniz İçin Adım Adım Hazırlık
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

        {/* 1. NEDEN ÖNEMLİ */}
        <section id="neden-onemli" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Bu Değişiklik Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Konkordato, mali durumu bozulan ama iflastan kaçınıp borçlarını
            yeniden yapılandırarak faaliyetine devam etmek isteyen şirketler
            için İcra ve İflas Kanunu&apos;nda (İİK m.285 vd.) düzenlenmiş bir
            koruma mekanizmasıdır. Mahkeme, borçlunun sunduğu mali tablo ve
            projeksiyonlara bakarak geçici, ardından kesin mühlet kararı verir.
            Bu kararın sağlıklı verilebilmesi, mahkemeye sunulan finansal
            tabloların gerçeği doğru yansıtmasına bağlıdır.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Uygulamada sık dile getirilen bir sorun, bazı borçluların
            mahkemeye sunduğu bilanço ve gelir tablolarının, standart bir
            muhasebe çerçevesine değil, şirketin kendi iç raporlama
            alışkanlığına göre hazırlanmasıydı. Bu durum, aynı büyüklükteki
            iki şirketin mali tablolarının birbiriyle kıyaslanabilir
            olmamasına ve mahkemenin/alacaklıların gerçek borca batıklık
            durumunu net görememesine yol açabiliyordu. 2026 değişikliği,
            tam olarak bu boşluğu kapatmayı hedefliyor.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Kimler İçin Kritik?
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Mali sıkıntı yaşayan ve konkordato seçeneğini değerlendiren şirketler</li>
              <li>✔ Bağımsız denetime tabi olmayıp bugüne kadar VUK mantığıyla defter tutan orta ölçekli tacirler</li>
              <li>✔ Konkordato komiseri, bağımsız denetçi ve mali müşavirlerle çalışan şirketler</li>
              <li>✔ Konkordatoya giden bir şirkete alacaklı, tedarikçi veya ortak sıfatıyla taraf olanlar</li>
            </ul>
          </div>
        </section>

        {/* 2. DEĞİŞİKLİK */}
        <section id="degisiklik" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. 13 Mayıs 2026 Değişikliğinin İçeriği
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Adalet Bakanlığı, &quot;Konkordato Talebine Eklenecek Belgeler
            Hakkında Yönetmelik&quot;te değişiklik yapan yeni bir yönetmeliği
            13 Mayıs 2026 tarihli ve 33252 sayılı Resmî Gazete&apos;de
            yayımladı. Değişiklik yürürlüğe yayım tarihinde girdi ve üç
            maddede somut düzenleme getirdi.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Madde 4</h3>
              <p className="text-sm leading-7 text-gray-700">
                Malvarlığının durumunu gösterir belgeler arasında yer alan
                finansal tabloların hangi raporlama çerçevesine (TMS, BOBİ
                FRS veya VUK) göre hazırlanacağını, borçlunun statüsüne göre
                üçe ayırıyor.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Madde 5</h3>
              <p className="text-sm leading-7 text-gray-700">
                Başvuruya eklenecek bağımsız denetim raporunun &quot;makul
                güvence&quot; seviyesinde olmasını ve iki nüsha halinde
                sunulmasını şart koşuyor.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Madde 19</h3>
              <p className="text-sm leading-7 text-gray-700">
                Bağımsız denetim kuruluşunun raporu KGK&apos;ya en geç 30 gün
                içinde bildirmesini, mahkeme yazı işleri müdürlüğünün de dava
                açıldıktan sonra gecikmeksizin bildirim yapmasını düzenliyor.
              </p>
            </div>
          </div>
        </section>

        {/* 3. STANDARTLAR */}
        <section id="standartlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Hangi Şirket Hangi Standardı Kullanacak?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Değişikliğin pratikte en çok soru işareti yaratan kısmı, hangi
            şirketin hangi raporlama çerçevesini kullanacağı. Yeni Madde
            4(c) bu ayrımı borçlunun mevcut statüsüne bağlıyor:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Borçlunun Durumu</th>
                  <th className="p-5">Uygulanacak Standart</th>
                  <th className="p-5">Tipik Örnek</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Bağımsız denetime tabi şirket</td>
                  <td className="p-5">Türkiye Muhasebe Standartları (TMS/TFRS)</td>
                  <td className="p-5">KGK eşiklerini aşan büyük ve orta-büyük ölçekli şirketler</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Bağımsız denetime tabi olmayan tacir (defter tutmaya mecbur)</td>
                  <td className="p-5">Büyük ve Orta Boy İşletmeler İçin Finansal Raporlama Standardı (BOBİ FRS)</td>
                  <td className="p-5">Çoğu limited ve anonim şirket, KOBİ ölçeğindeki ticaret şirketleri</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Diğer borçlular</td>
                  <td className="p-5">213 sayılı Vergi Usul Kanunu (VUK) esasları</td>
                  <td className="p-5">Şahıs işletmeleri ve tacir sayılmayan borçlular</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Pratik Anlamı
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;deki şirketlerin büyük çoğunluğu bağımsız denetime
              tabi değil; dolayısıyla konkordatoya başvuracak orta ölçekli
              bir limited veya anonim şirket için asıl değişiklik, artık
              VUK&apos;a göre serbestçe tutulan defterler yerine{" "}
              <strong>BOBİ FRS&apos;e uygun bir finansal tablo seti</strong>{" "}
              hazırlanmasının şart koşulmasıdır. Bu, aktif/pasif
              sınıflandırması, karşılıklar, şüpheli alacaklar ve stok
              değerlemesi gibi kalemlerde VUK&apos;tan farklı bir muhasebe
              disiplini gerektirir.
            </p>
          </div>
        </section>

        {/* 4. KARIŞTIRMAYIN */}
        <section id="karistirmayin" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-red-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Karıştırılan İki Kavram
          </h2>
          <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-red-700">
              ⚠️ &quot;Bağımsız denetime tabi olmamak&quot; ile &quot;BOBİ FRS&apos;e tabi olmamak&quot; aynı şey değil
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Pek çok şirket sahibi, şirketi genel kanuni eşikler (aktif
              toplamı, ciro, çalışan sayısı) nedeniyle bağımsız denetime tabi
              olmadığı için finansal tablolarını dilediği gibi, yalnızca
              vergi mevzuatına uygun şekilde hazırlayabileceğini düşünür. Bu
              varsayım, günlük ticari hayatta büyük ölçüde doğru olsa da{" "}
              <strong>konkordato başvurusu özelinde artık geçerli değil.</strong>
            </p>
            <p className="leading-8 text-gray-700">
              Yeni düzenlemeyle, bağımsız denetime tabi olmayan ama tacir
              sayılan ve defter tutmakla yükümlü her borçlu, konkordato
              talebine ekleyeceği finansal tabloları{" "}
              <strong>BOBİ FRS&apos;e göre</strong> hazırlamak zorunda. Yani
              &quot;normal zamanda BOBİ FRS uygulamıyorum&quot; demek,
              konkordato başvurusu anında bu standarda geçmeyeceğiniz
              anlamına gelmiyor; başvuru anı için ayrı bir dönüşüm çalışması
              gerekebiliyor.
            </p>
          </div>
        </section>

        {/* 5. DENETİM RAPORU */}
        <section id="denetim-raporu" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Bağımsız Denetim Raporu ve Bildirim Süresi
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Değişiklik, finansal tabloların yanı sıra bu tabloları
            destekleyen bağımsız denetim raporunun niteliğini de netleştirdi.
            Yeni Madde 5(d) uyarınca başvuruya eklenecek rapor, sınırlı
            güvence değil, daha yüksek güvenilirlik düzeyi taşıyan{" "}
            <strong>makul güvence</strong> raporudur ve iki nüsha halinde
            mahkemeye sunulmalıdır.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-[#071A2F]">Denetim Kuruluşunun Yükümlülüğü</h3>
              <p className="leading-7 text-gray-700">
                Raporu düzenleyen bağımsız denetim kuruluşu, imza tarihinden
                itibaren <strong>en geç 30 gün içinde</strong> Kamu Gözetimi,
                Muhasebe ve Denetim Standartları Kurumu&apos;na (KGK)
                bildirimde bulunmak zorunda. Bu süre, önceki uygulamaya göre
                kısaltılmış durumda.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-[#071A2F]">Mahkemenin Yükümlülüğü</h3>
              <p className="leading-7 text-gray-700">
                Konkordato davası açıldıktan sonra, mahkeme yazı işleri
                müdürlüğü de durumu <strong>gecikmeksizin</strong> ilgili
                kuruma bildirmekle yükümlü tutuldu. Bu, denetim sürecinin
                kurum nezdinde şeffaf biçimde izlenebilmesini amaçlıyor.
              </p>
            </div>
          </div>
        </section>

        {/* 6. SÜREÇTEKİ YERİ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Konkordato Sürecinde Bu Belgelerin Yeri
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Finansal tablo standardı, konkordato başvurusunun sadece bir
            parçası. Sürecin genel çerçevesi 2026&apos;da değişmedi; borçlu
            önce geçici mühlet talep eder, mahkeme uygun bulursa{" "}
            <strong>azami 5 aya</strong> (3 ay + gerekirse 2 ay uzatma)
            kadar geçici mühlet, ardından şartlar oluşursa{" "}
            <strong>azami 1,5 yıla</strong> (1 yıl + gerekirse 6 ay uzatma)
            kadar kesin mühlet verebilir. Değişen finansal tablo şartı, bu
            sürecin en başında, mahkemeye ilk başvuru anında devreye giriyor.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Konkordato talebine eklenecek belgeler arasında hâlâ; borçlunun
            malvarlığının durumunu gösterir belgeler, defter tutmaya mecbur
            borçlular için son bilanço, gelir tablosu, nakit akım tablosu,
            hem işletmenin devamlılığı esasına hem de aktiflerin muhtemel
            satış fiyatına göre hazırlanmış ara bilançolar ile ticari
            defterlerin açılış/kapanış tasdikleri yer alıyor. 2026
            değişikliği bu listeyi kaldırmadı; listedeki finansal tabloların
            hangi standarda uyması gerektiğini netleştirdi.
          </p>
        </section>

        {/* 7. HAZIRLIK */}
        <section id="hazirlik" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Şirketiniz İçin Adım Adım Hazırlık
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔍</div>
              <h3 className="text-xl font-bold">1. Statünüzü Belirleyin</h3>
              <p className="mt-3 text-sm text-gray-600">
                Şirketinizin bağımsız denetime tabi olup olmadığını, güncel
                KGK eşiklerine göre netleştirin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📊</div>
              <h3 className="text-xl font-bold">2. Uygulanacak Standardı Tespit Edin</h3>
              <p className="mt-3 text-sm text-gray-600">
                Statünüze göre TMS/TFRS mi, BOBİ FRS mi yoksa VUK mu
                uygulanacağını belirleyin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧮</div>
              <h3 className="text-xl font-bold">3. Dönüşüm Çalışmasını Planlayın</h3>
              <p className="mt-3 text-sm text-gray-600">
                VUK&apos;tan BOBİ FRS&apos;e veya TMS&apos;e geçiş için
                mevcut kayıtlarınızın yeniden sınıflandırılması gerekir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📋</div>
              <h3 className="text-xl font-bold">4. Ara Bilançoları Hazırlayın</h3>
              <p className="mt-3 text-sm text-gray-600">
                Hem devamlılık esasına hem de muhtemel satış fiyatı esasına
                göre iki ayrı ara bilanço setine ihtiyacınız olacak.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🤝</div>
              <h3 className="text-xl font-bold">5. Bağımsız Denetim Sürecini Başlatın</h3>
              <p className="mt-3 text-sm text-gray-600">
                Makul güvence raporu veren yetkili bir denetim kuruluşuyla
                erken temasa geçin; süreç zaman alabilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">⚖️</div>
              <h3 className="text-xl font-bold">6. Hukuk Danışmanınızla Koordine Olun</h3>
              <p className="mt-3 text-sm text-gray-600">
                Finansal tablo hazırlığını, mahkemeye sunulacak dilekçe ve
                proje takvimiyle eş zamanlı yürütün.
              </p>
            </div>
          </div>
        </section>

        {/* UZMAN NOTU */}
        <div className="mt-16 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, VUK mantığıyla tutulan
            defterlerin BOBİ FRS&apos;e &quot;birebir aktarılabileceği&quot;
            varsayımıdır. Oysa iki çerçeve arasında karşılıklar, şüpheli
            alacaklar, kıdem tazminatı yükümlülüğü, finansal kiralama ve
            stok değerlemesi gibi kalemlerde önemli farklar bulunur; bu
            farklar konkordatoda tam olarak mahkemenin ve alacaklıların
            görmek istediği &quot;gerçek borca batıklık tablosu&quot;nu
            oluşturur. Bir şirketin mali sıkıntı içindeyken bu dönüşümü zaman
            baskısı altında ilk kez yapmaya çalışması, hem sürecin
            uzamasına hem de eksik/hatalı belge nedeniyle başvurunun
            usulden reddi riskine yol açabilir. Bu nedenle finansal tablo
            standardı sorusunun, konkordato dilekçesi hazırlanmadan önce,
            mali müşavir ve bağımsız denetim süreciyle birlikte netleştirilmesi
            gerekir.
          </p>
        </div>

        {/* 8. DİKKAT */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Dikkat Edilmesi Gerekenler
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>
                Yanlış standarda göre hazırlanmış bir finansal tablo seti,
                başvurunun eksik belge nedeniyle geri çevrilmesine ve değerli
                zaman kaybına yol açabilir; mali sıkıntı içindeki bir şirket
                için zaman kaybı kritik önemdedir.
              </li>
              <li>
                Şirketinizin bağımsız denetim kapsamında olup olmadığı yıldan
                yıla değişebilir; konkordato başvurusundan önce bu durumun
                güncel eşiklere göre teyit edilmesi gerekir.
              </li>
              <li>
                Makul güvence raporu, sınırlı güvence raporundan daha kapsamlı
                bir denetim çalışması gerektirir; bu süreç birkaç hafta
                sürebileceğinden erken planlama şarttır.
              </li>
              <li>
                Bağımsız denetim kuruluşunun KGK&apos;ya bildirim süresi kısaltıldığı
                için, denetim kuruluşu seçiminde bu yükümlülüğü bilen ve
                düzenli çalışan bir kuruluşla ilerlemek önemlidir.
              </li>
              <li>
                Bu değişiklik konkordatonun kendisini zorlaştırmak için değil,
                mahkemeye sunulan tabloların karşılaştırılabilirliğini ve
                güvenilirliğini artırmak için yapıldı; sürece erken ve
                doğru hazırlıkla girmek, konkordato talebinin ciddiyetini de
                güçlendirir.
              </li>
              <li>
                Güncel yükümlülükler için Adalet Bakanlığı ve KGK&apos;nın
                yürürlükteki metinleri esas alınmalı, ikincil kaynaklardaki
                özetlerle nihai karar verilmemelidir.
              </li>
            </ul>
          </div>
        </section>

        {/* 9. RESMİ KAYNAKLAR */}
        <section id="kaynaklar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Resmî Kaynaklar
          </h2>
          <ul className="ml-6 list-disc space-y-3 text-lg text-gray-700 marker:text-orange-500">
            <li>
              <a
                href="https://www.resmigazete.gov.tr/eskiler/2026/05/20260513-2.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                Resmî Gazete, 13.05.2026 tarih ve 33252 sayı: Konkordato Talebine Eklenecek Belgeler Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik
              </a>
            </li>
            <li>
              <a
                href="https://www.mevzuat.gov.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                Mevzuat Bilgi Sistemi, T.C. Cumhurbaşkanlığı
              </a>
            </li>
            <li>
              <a
                href="https://www.kgk.gov.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu (KGK)
              </a>
            </li>
            <li>
              <a
                href="https://www.adalet.gov.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                T.C. Adalet Bakanlığı
              </a>
            </li>
          </ul>
        </section>

        {/* 10. SSS */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Konkordato başvurusunda finansal tablolar hangi standarda göre hazırlanmalı?
              </h3>
              <p className="leading-8 text-gray-700">
                13 Mayıs 2026 değişikliğine göre bağımsız denetime tabi
                şirketler TMS/TFRS&apos;e, tabi olmayan ama defter tutmaya
                mecbur tacirler BOBİ FRS&apos;e, diğer borçlular ise Vergi
                Usul Kanunu esaslarına göre finansal tablo hazırlamak
                zorundadır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Değişiklik hangi tarihte ve hangi Resmî Gazete&apos;de yayımlandı?
              </h3>
              <p className="leading-8 text-gray-700">
                Değişiklik, 13 Mayıs 2026 tarihli ve 33252 sayılı Resmî
                Gazete&apos;de Adalet Bakanlığı tarafından yayımlanmış olup
                yayım tarihinde yürürlüğe girmiştir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Bağımsız denetime tabi olmayan bir şirket konkordatoya başvurursa hangi standardı kullanır?
              </h3>
              <p className="leading-8 text-gray-700">
                Bağımsız denetime tabi olmayan ama defter tutmaya mecbur
                tacirler, konkordato başvurusuna eklenecek finansal
                tablolarını Büyük ve Orta Boy İşletmeler İçin Finansal
                Raporlama Standardı&apos;na (BOBİ FRS) göre hazırlamak
                zorundadır. Bu, günlük vergi uygulamasında kullandığı VUK
                esaslı kayıtlardan farklı bir çalışmayı gerektirir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Bağımsız denetim raporu KGK&apos;ya kaç gün içinde bildirilmelidir?
              </h3>
              <p className="leading-8 text-gray-700">
                Raporu düzenleyen bağımsız denetim kuruluşu, raporun imza
                tarihinden itibaren en geç 30 gün içinde Kamu Gözetimi,
                Muhasebe ve Denetim Standartları Kurumu&apos;na (KGK)
                bildirimde bulunmak zorundadır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Bu değişiklik zaten bağımsız denetime tabi olan şirketleri nasıl etkiliyor?
              </h3>
              <p className="leading-8 text-gray-700">
                Bu şirketler için finansal raporlama çerçevesi zaten TMS/TFRS
                olduğundan büyük bir uygulama farkı doğmaz; ancak konkordato
                başvurusuna eklenecek denetim raporunun makul güvence
                seviyesinde ve iki nüsha halinde sunulması gerektiği, ayrıca
                netleştirilen bir husustur.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Değişiklik konkordatonun geçici ve kesin mühlet sürelerini de değiştirdi mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Geçici mühletin azami 5 ay (3 ay + 2 ay uzatma), kesin
                mühletin azami 1,5 yıl (1 yıl + 6 ay uzatma) olduğu genel
                çerçeve İİK m.287-289&apos;da düzenlenmiştir ve bu değişiklikle
                değişmemiştir. 2026 düzenlemesi yalnızca başvuruya eklenecek
                finansal tabloların hangi standarda uyacağını netleştirmiştir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Mevcut mali müşavirim şirketimin defterlerini BOBİ FRS&apos;e uygun hale getirebilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Bu, mali müşavirin BOBİ FRS ve bağımsız denetim standartları
                konusundaki tecrübesine bağlıdır. VUK esaslı kayıtların BOBİ
                FRS&apos;e dönüştürülmesi; karşılıklar, şüpheli alacaklar ve
                stok değerlemesi gibi kalemlerde teknik bir yeniden
                sınıflandırma çalışması gerektirdiğinden, bu konuda deneyimli
                bir ekiple çalışmak, konkordato başvurusunun zamanında ve
                eksiksiz hazırlanması açısından önemlidir.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Finansal Tablolarınızı Doğru Standarda Göre Hazırlayalım
            </h3>
            <p className="leading-8 text-gray-700">
              Şirketinizin bağımsız denetim kapsamındaki durumunu netleştirmek,
              konkordato başvurusuna eklenecek finansal tabloları uygun
              standarda (TMS/TFRS veya BOBİ FRS) göre hazırlamak ve gerekli
              bağımsız denetim/makul güvence raporu sürecini yürütmek için
              Koray Akdağ / Sistem Global Danışmanlık olarak yanınızdayız.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Şirketinizin durumunu birlikte değerlendirmek için bizimle
                iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* SONUÇ */}
        <section className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            13 Mayıs 2026 tarihli yönetmelik değişikliği, konkordato
            başvurusunun temel mantığını değiştirmedi ama mahkemeye sunulacak
            finansal tabloların hangi standarda uyması gerektiğini ilk kez bu
            kadar net biçimde ortaya koydu. Özellikle bağımsız denetime tabi
            olmayıp bugüne kadar VUK mantığıyla defter tutan şirketler için
            bu, konkordato yoluna gitmeden önce ciddiye alınması gereken bir
            hazırlık aşamasıdır.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin bağımsız denetim kapsamındaki durumunun
            netleştirilmesinden BOBİ FRS/TMS dönüşüm çalışmasına, makul
            güvence raporu veren bağımsız denetim sürecinden konkordato
            sonrası mali müşavirlik ve raporlama süreçlerine kadar tüm süreci
            Koray Akdağ / Sistem Global Danışmanlık olarak tek noktadan
            yürütebiliriz; ayrı bir mali müşavirlik veya denetim firması
            aramanıza gerek yoktur.
          </p>
        </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/bagimsiz-denetim-esik-degerleri-2026-degisti"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">BAĞIMSIZ DENETİM • MALİ MÜŞAVİRLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Bağımsız Denetim Eşik Değerleri 2026&apos;da Değişti</h3>
          </Link>
          <Link
            href="/blog/tam-tasdik-nedir-kimler-yaptirmali-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YEMİNLİ MALİ MÜŞAVİRLİK • TAM TASDİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Tam Tasdik Nedir? Kimler Yaptırmalı, Avantajları Neler?</h3>
          </Link>
          <Link
            href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">M&amp;A • DUE DILIGENCE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Due Diligence Nedir? Şirket Satın Alma ve Birleşme Öncesi Neden Kritik?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Konkordato başvurusunda finansal tablolar hangi standarda göre hazırlanmalı?","acceptedAnswer":{"@type":"Answer","text":"13 Mayıs 2026 değişikliğine göre bağımsız denetime tabi şirketler TMS/TFRS'e, tabi olmayan ama defter tutmaya mecbur tacirler BOBİ FRS'e, diğer borçlular ise Vergi Usul Kanunu esaslarına göre finansal tablo hazırlamak zorundadır."}},{"@type":"Question","name":"Değişiklik hangi tarihte ve hangi Resmî Gazete'de yayımlandı?","acceptedAnswer":{"@type":"Answer","text":"Değişiklik, 13 Mayıs 2026 tarihli ve 33252 sayılı Resmî Gazete'de Adalet Bakanlığı tarafından yayımlanmış olup yayım tarihinde yürürlüğe girmiştir."}},{"@type":"Question","name":"Bağımsız denetime tabi olmayan bir şirket konkordatoya başvurursa hangi standardı kullanır?","acceptedAnswer":{"@type":"Answer","text":"Bağımsız denetime tabi olmayan ama defter tutmaya mecbur tacirler, konkordato başvurusuna eklenecek finansal tablolarını Büyük ve Orta Boy İşletmeler İçin Finansal Raporlama Standardı'na (BOBİ FRS) göre hazırlamak zorundadır. Bu, günlük vergi uygulamasında kullandığı VUK esaslı kayıtlardan farklı bir çalışmayı gerektirir."}},{"@type":"Question","name":"Bağımsız denetim raporu KGK'ya kaç gün içinde bildirilmelidir?","acceptedAnswer":{"@type":"Answer","text":"Raporu düzenleyen bağımsız denetim kuruluşu, raporun imza tarihinden itibaren en geç 30 gün içinde Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu'na (KGK) bildirimde bulunmak zorundadır."}},{"@type":"Question","name":"Bu değişiklik zaten bağımsız denetime tabi olan şirketleri nasıl etkiliyor?","acceptedAnswer":{"@type":"Answer","text":"Bu şirketler için finansal raporlama çerçevesi zaten TMS/TFRS olduğundan büyük bir uygulama farkı doğmaz; ancak konkordato başvurusuna eklenecek denetim raporunun makul güvence seviyesinde ve iki nüsha halinde sunulması gerektiği, ayrıca netleştirilen bir husustur."}},{"@type":"Question","name":"Değişiklik konkordatonun geçici ve kesin mühlet sürelerini de değiştirdi mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Geçici mühletin azami 5 ay (3 ay + 2 ay uzatma), kesin mühletin azami 1,5 yıl (1 yıl + 6 ay uzatma) olduğu genel çerçeve İİK m.287-289'da düzenlenmiştir ve bu değişiklikle değişmemiştir. 2026 düzenlemesi yalnızca başvuruya eklenecek finansal tabloların hangi standarda uyacağını netleştirmiştir."}},{"@type":"Question","name":"Mevcut mali müşavirim şirketimin defterlerini BOBİ FRS'e uygun hale getirebilir mi?","acceptedAnswer":{"@type":"Answer","text":"Bu, mali müşavirin BOBİ FRS ve bağımsız denetim standartları konusundaki tecrübesine bağlıdır. VUK esaslı kayıtların BOBİ FRS'e dönüştürülmesi; karşılıklar, şüpheli alacaklar ve stok değerlemesi gibi kalemlerde teknik bir yeniden sınıflandırma çalışması gerektirdiğinden, bu konuda deneyimli bir ekiple çalışmak, konkordato başvurusunun zamanında ve eksiksiz hazırlanması açısından önemlidir."}}]}) }}
      />
    </BlogLayout>
  );
}
