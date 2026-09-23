import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "İş Sağlığı ve Güvenliği (İSG) Yükümlülükleri: 2026 Rehberi | Koray Akdağ",
  description:
    "6331 sayılı Kanun'a göre işyeri tehlike sınıfları, iş güvenliği uzmanı/işyeri hekimi bulundurma zorunluluğu, risk değerlendirmesi, İSG kurulu ve 2026 güncel idari para cezalarıyla işverenler için kapsamlı rehber.",
  keywords: [
    "İSG yükümlülükleri 2026",
    "iş sağlığı ve güvenliği kanunu",
    "6331 sayılı kanun",
    "iş güvenliği uzmanı zorunluluğu",
    "işyeri hekimi bulundurma zorunluluğu",
    "işyeri tehlike sınıfları",
    "İSG idari para cezaları 2026",
    "risk değerlendirmesi nasıl yapılır",
    "OSGB nedir",
    "İSG kurulu kurma zorunluluğu",
  ],
  alternates: {
    canonical: "/blog/is-sagligi-guvenligi-isg-yukumlulukleri-isverenler-icin-2026-rehberi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İş Sağlığı ve Güvenliği (İSG) Yükümlülükleri: İşverenler İçin 2026 Rehberi"
      description="6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre işyeri tehlike sınıfları, iş güvenliği uzmanı ve işyeri hekimi bulundurma zorunluluğu, risk değerlendirmesi, İSG kurulu ve 2026 güncel idari para cezalarıyla imalat ve üretim işletmeleri için kapsamlı rehber."
      category="İŞ HUKUKU • İSG MEVZUATI • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="is-sagligi-guvenligi-isg-yukumlulukleri-isverenler-icin-2026-rehberi"
      coverImage="https://images.unsplash.com/photo-1705579611249-9861db5469ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: İSG Yükümlülükleri İşvereni Ne Bekliyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ 6331 sayılı Kanun, çalışan sayısına ve faaliyet konusuna bakılmaksızın kamu ve özel sektördeki hemen hemen tüm işyerlerini kapsar.</li>
          <li>✔ 1 Ocak 2025 itibarıyla tehlike sınıfı ve çalışan sayısı fark etmeksizin neredeyse tüm işyerleri, iş güvenliği uzmanı ve işyeri hekimi hizmetini sürekli almak zorunda.</li>
          <li>✔ Bu hizmet OSGB (Ortak Sağlık ve Güvenlik Birimi) üzerinden dışarıdan da alınabiliyor; her işletmenin kendi bünyesinde uzman/hekim istihdam etmesi şart değil.</li>
          <li>✔ Risk değerlendirmesi, acil durum planı, çalışan eğitimi ve sağlık gözetimi, tehlike sınıfına göre değişen sıklıkla yenilenmesi gereken zorunlu belgeler.</li>
          <li>✔ 50 ve üzeri çalışanı olan, 6 aydan uzun süren işlerde İSG Kurulu oluşturulması zorunlu.</li>
          <li>✔ 2026 yılı idari para cezaları %25,49 oranında güncellendi; genel yükümlülük ihlalinde ceza on binlerce TL'den başlıyor, uzman/hekim bulundurmama gibi ihlallerde aylık olarak tekrarlanıyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-onemli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Bu Konu İşverenler İçin Neden Kritik?
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 6331 Sayılı Kanun Kimleri Kapsıyor?
          </Link>
          <Link href="#tehlike-siniflari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. İşyeri Tehlike Sınıfları
          </Link>
          <Link href="#temel-yukumlulukler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Temel İşveren Yükümlülükleri
          </Link>
          <Link href="#uzman-hekim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Uzman ve Hekim Bulundurma Zorunluluğu
          </Link>
          <Link href="#cezalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. 2026 İdari Para Cezaları
          </Link>
          <Link href="#hukuki-sorumluluk" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. İş Kazasında İşverenin Hukuki Sorumluluğu
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Kimler Öncelikli Olarak Harekete Geçmeli?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Adım Adım Uyum Süreci
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDEN ÖNEMLİ */}
      <section id="neden-onemli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Bu Konu İşverenler İçin Neden Kritik?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Küçük ve orta ölçekli imalat işletmelerinde İSG genellikle
          &quot;büyüyünce hallederiz&quot; diye ertelenen bir konu. Oysa
          6331 sayılı İş Sağlığı ve Güvenliği Kanunu, çalışan sayısına
          bakılmaksızın hemen her işyerini kapsıyor ve son iki yılda
          yapılan düzenlemelerle özellikle iş güvenliği uzmanı ve işyeri
          hekimi bulundurma zorunluluğunun kapsamı ciddi şekilde
          genişledi. Bugün itibarıyla tehlike sınıfı düşük, çalışan
          sayısı az bir atölyenin bile bu hizmeti alması gerekebiliyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Konuyu erteleyen işletmelerin karşılaştığı risk yalnızca idari
          para cezası değil. Bir iş kazası yaşandığında risk
          değerlendirmesi yapılmamış, eğitim kayıtları eksik veya İSG
          uzmanı/hekim görevlendirmesi yapılmamış bir işyerinin, hem
          Sosyal Güvenlik Kurumu rücu davasında hem de çalışanın açacağı
          maddi/manevi tazminat davasında savunma yapması çok daha zor
          hale geliyor.
        </p>
        <p className="leading-8 text-gray-700">
          Bu rehberde, imalat ve üretim ağırlıklı KOBİ&apos;lerin en çok
          karşılaştığı sorulara; kim kapsamda, hangi yükümlülük ne zaman
          doğuyor, cezası ne kadar sorularına güncel mevzuat üzerinden
          net cevaplar veriyoruz.
        </p>
      </section>

      {/* 2. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 6331 Sayılı Kanun Kimleri Kapsıyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          6331 sayılı Kanun&apos;un 2. maddesi, kapsamı geniş tutuyor:
          kamu ve özel sektöre ait tüm işlere ve işyerlerine, bu
          işyerlerinin işverenleri ile işveren vekillerine, çırak ve
          stajyerler dahil tüm çalışanlarına, faaliyet konusuna
          bakılmaksızın uygulanır. Çalışan sayısı bir istisna
          oluşturmaz; tek kişilik bir işyeri de kapsamdadır.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Kanunun kapsamı dışında bırakılan alanlar sınırlı ve büyük
          ölçüde imalat/üretim işletmelerini ilgilendirmiyor: fabrika,
          bakım merkezi, dikimevi ve benzeri işyerleri hariç olmak üzere
          Türk Silahlı Kuvvetleri, genel kolluk kuvvetleri ve Millî
          İstihbarat Teşkilatı Müsteşarlığının faaliyetleri, ev
          hizmetleri, çalışan istihdam etmeksizin kendi nam ve hesabına
          mal ve hizmet üretimi yapanlar, hükümlü ve tutuklulara yönelik
          infaz hizmetleri sırasındaki iyileştirme kapsamındaki
          işyürütümü, işyerindeki faaliyeti sınırlı olan afet ve acil
          durum birimlerinin müdahale faaliyetleri.
        </p>
        <p className="leading-8 text-gray-700">
          Pratik sonuç şu: 2-3 çalışanlı bir üretim atölyesi de, 500
          çalışanlı bir fabrika da aynı kanunun muhatabı. Aradaki fark,
          yükümlülüklerin kapsamı ve yoğunluğunda; bu da işyerinin
          tehlike sınıfına ve çalışan sayısına göre şekilleniyor.
        </p>
      </section>

      {/* 3. TEHLİKE SINIFLARI */}
      <section id="tehlike-siniflari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. İşyeri Tehlike Sınıfları: Az Tehlikeli, Tehlikeli, Çok Tehlikeli
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Her işyeri, kayıtlı olduğu NACE (faaliyet) koduna göre
          &quot;İş Sağlığı ve Güvenliğine İlişkin İşyeri Tehlike
          Sınıfları Tebliği&quot; kapsamında üç sınıftan birine
          yerleştirilir. Bu sınıf, aşağıda anlatılan hemen tüm
          yükümlülüklerin sıklığını ve yoğunluğunu belirleyen ana
          değişkendir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Tehlike Sınıfı</th>
                <th className="p-5">Örnek Sektörler</th>
                <th className="p-5">Risk Değerlendirmesi Yenileme</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Az Tehlikeli</td>
                <td className="p-5">Büro/ofis hizmetleri, bazı toptan ticaret faaliyetleri, yazılım</td>
                <td className="p-5">En geç 6 yılda bir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tehlikeli</td>
                <td className="p-5">Gıda üretimi, mobilya imalatı, tekstil, otomotiv yan sanayi</td>
                <td className="p-5">En geç 4 yılda bir</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Çok Tehlikeli</td>
                <td className="p-5">Metal işleme/döküm, kimya, inşaat, maden</td>
                <td className="p-5">En geç 2 yılda bir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Risk değerlendirmesinin yenilenme süreleri, işyerinde koşullar
          değişmediği sürece geçerli üst sınırlardır; bir iş kazası, ramak
          kala olayı veya işyeri ortamında önemli bir değişiklik olduğunda
          bu sürelerden bağımsız olarak yeniden yapılması gerekir.
        </p>
      </section>

      {/* KARIŞTIRMAYIN */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: &quot;İSG Uzmanı Bulundurma&quot; ile &quot;OSGB ile Anlaşma&quot;
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>İSG uzmanı/işyeri hekimi bulundurma zorunluluğu:</strong> Kanunun işverene yüklediği, belirli bir aylık süre kadar iş güvenliği uzmanı ve işyeri hekimi hizmeti alma zorunluluğu. Bu zorunluluk vardır; ancak hizmetin nasıl sağlanacağı işverenin tercihine bırakılmıştır.</li>
            <li><strong>OSGB (Ortak Sağlık ve Güvenlik Birimi) ile anlaşma:</strong> Bu zorunluluğu yerine getirmenin en yaygın yolu. İşveren, kendi bünyesinde tam zamanlı uzman/hekim istihdam etmek yerine, Bakanlıkça yetkilendirilmiş bir OSGB&apos;den ihtiyacı kadar (aylık dakika/saat bazlı) hizmet satın alabilir.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Küçük ve orta ölçekli çoğu işletme için doğru yaklaşım, bünyede
            tam zamanlı personel istihdam etmek değil, tehlike sınıfı ve
            çalışan sayısına göre hesaplanan aylık hizmet süresi kadar bir
            OSGB ile sözleşme yapmaktır. Görevlendirme, Bakanlığın İSG-KATİP
            sistemi üzerinden resmi olarak işlenir; sözleşmenin varlığı tek
            başına yeterli değildir, sistem üzerindeki atamanın da güncel
            olması gerekir.
          </p>
        </div>
      </section>

      {/* 4. TEMEL YÜKÜMLÜLÜKLER */}
      <section id="temel-yukumlulukler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Temel İşveren Yükümlülükleri
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🔍 Risk Değerlendirmesi</h3>
            <p className="text-gray-700">
              Madde 10 uyarınca her işveren, işyerindeki tehlikeleri
              belirleyen, olasılık ve şiddet üzerinden risk skorlayan ve
              önleyici tedbirleri ortaya koyan bir risk değerlendirmesi
              yaptırmak zorundadır. Bu belge işyerinde bulundurulur ve
              denetimde ilk istenen evraklardan biridir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🚨 Acil Durum Planı</h3>
            <p className="text-gray-700">
              Yangın, deprem, kimyasal sızıntı gibi acil durumlara karşı
              tahliye planı, arama-kurtarma, yangınla mücadele ve ilk
              yardım ekiplerinin belirlenmesi ve tatbikatların
              yapılması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🎓 Çalışan Eğitimi</h3>
            <p className="text-gray-700">
              İşe başlamadan önce ve periyodik olarak, tehlike sınıfına
              göre değişen sürelerde (az tehlikeli, tehlikeli, çok
              tehlikeli sınıfa çıktıkça artan) temel İSG eğitimi
              verilmesi ve kayıt altına alınması zorunludur.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🩺 Sağlık Gözetimi</h3>
            <p className="text-gray-700">
              Çalışanların işe giriş ve periyodik sağlık muayenelerinin
              yaptırılması gerekir; periyodik muayene sıklığı işin
              niteliğine ve tehlike sınıfına göre işyeri hekimi
              tarafından belirlenir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🥽 Kişisel Koruyucu Donanım</h3>
            <p className="text-gray-700">
              Baret, eldiven, koruyucu gözlük, iş ayakkabısı gibi
              donanımların işveren tarafından ücretsiz sağlanması, uygun
              standartlarda olması ve fiilen kullanılmasının denetlenmesi
              gerekir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">👥 İSG Kurulu</h3>
            <p className="text-gray-700">
              Madde 22 uyarınca 50 ve üzeri çalışanı bulunan ve 6 aydan
              fazla süren sürekli işlerin yapıldığı işyerlerinde işveren
              temsilcisi, çalışan temsilcisi, uzman ve hekimden oluşan
              bir İSG Kurulu oluşturulması ve düzenli toplanması
              zorunludur.
            </p>
          </div>
        </div>
      </section>

      {/* 5. UZMAN VE HEKİM */}
      <section id="uzman-hekim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. İş Güvenliği Uzmanı ve İşyeri Hekimi Bulundurma Zorunluluğu
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bu başlık, son yıllarda en çok kapsam değişikliğine uğrayan
          alan. 31 Aralık 2024 tarihi itibarıyla, tehlikeli ve çok
          tehlikeli sınıftaki tüm işyerleri ile kamu kurumları, çalışan
          sayısına bakılmaksızın sürekli iş güvenliği uzmanı ve işyeri
          hekimi hizmeti almak zorunda hale geldi. 1 Ocak 2025&apos;ten
          itibaren ise 50&apos;den az çalışanı olan az tehlikeli sınıftaki
          işyerleri de bu kapsama dahil edildi. Pratik sonuç şu: bugün
          itibarıyla neredeyse hiçbir işyeri bu yükümlülüğün tamamen
          dışında değil.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Hizmetin süresi sabit değil; çalışan sayısı ve tehlike sınıfına
          göre aylık olarak hesaplanan bir asgari süre üzerinden
          belirlenir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Tehlike Sınıfı</th>
                <th className="p-5">İşyeri Hekimi (çalışan başına/ay)</th>
                <th className="p-5">İş Güvenliği Uzmanı (çalışan başına/ay)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Az Tehlikeli</td>
                <td className="p-5">En az 5 dakika</td>
                <td className="p-5">En az 10 dakika</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tehlikeli</td>
                <td className="p-5">En az 10 dakika</td>
                <td className="p-5">En az 20 dakika</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Çok Tehlikeli</td>
                <td className="p-5">En az 15 dakika</td>
                <td className="p-5">En az 40 dakika</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Çok tehlikeli sınıfta 10 ve üzeri çalışanı olan işyerlerinde
          işveren, isterse bu uzman ve hekimi kendi bünyesinde tam veya
          yarı zamanlı istihdam edebilir. Küçük ve orta ölçekli
          işletmelerin büyük çoğunluğu için ise en maliyet etkin çözüm,
          Bakanlıkça yetkilendirilmiş bir OSGB ile hizmet sözleşmesi
          yapmaktır; sözleşme sonrası görevlendirme İSG-KATİP sistemi
          üzerinden onaylanır.
        </p>
      </section>

      {/* UZMAN NOTU */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, işletmelerin
            NACE kodunu değil, fiilen yaptığı işi esas alması gerektiği.
            Ticaret siciline kayıtlı NACE kodu &quot;az tehlikeli&quot;
            görünse bile, işyerinde fiilen tehlikeli veya çok tehlikeli
            sınıfa giren bir üretim faaliyeti yürütülüyorsa (örneğin bir
            toptan ticaret şirketinin bünyesinde metal işleme atölyesi
            varsa), denetimde esas alınan fiilen yürütülen faaliyettir.
            Bu nedenle tehlike sınıfı tespitini sadece vergi
            dairesindeki kayda göre değil, işyerinin gerçek faaliyetine
            göre yapmak, hem eksik uzman/hekim süresi hem de eksik
            eğitim gibi ikincil ihlallerin önüne geçer.
          </p>
        </div>
      </section>

      {/* 6. CEZALAR */}
      <section id="cezalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. 2026 Güncel İdari Para Cezaları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İSG idari para cezaları her yıl Hazine ve Maliye
          Bakanlığı&apos;nın açıkladığı yeniden değerleme oranına göre
          güncellenir; 2026 için bu oran %25,49 olarak belirlendi ve
          Çalışma ve Sosyal Güvenlik Bakanlığı İş Sağlığı ve Güvenliği
          Genel Müdürlüğü (İSGGM), 6331 sayılı Kanun&apos;a göre 2026
          yılında uygulanacak güncel tutarları kendi resmi tebliğinde
          yayımladı. Aşağıdaki tutarlar bu güncel tebliğe dayanan
          yaklaşık aralıklardır; işyerinizin tehlike sınıfına göre
          kesin tutar değişebileceğinden nihai rakam için ilgili
          uygulamada güncel tebliğ tablosunun teyit edilmesi önerilir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">İhlal</th>
                <th className="p-5">Yaklaşık Ceza (2026)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Genel İSG yükümlülüklerini yerine getirmeme</td>
                <td className="p-5">44.443 - 133.329 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İş güvenliği uzmanı görevlendirmeme</td>
                <td className="p-5">111.263 - 333.789 TL / ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İşyeri hekimi görevlendirmeme</td>
                <td className="p-5">111.263 - 333.789 TL / ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Risk değerlendirmesi yaptırmama</td>
                <td className="p-5">66.664 - 199.993 TL (ilk tespit) + aylık tekrar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Acil durum planı hazırlamama</td>
                <td className="p-5">22.194 - 66.663 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Çalışan temsilcisi belirlememe</td>
                <td className="p-5">22.194 - 66.582 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sağlık gözetimi yaptırmama</td>
                <td className="p-5">~22.194 TL / çalışan</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">İSG eğitimi vermeme</td>
                <td className="p-5">~8.980 TL / çalışan</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Aylık olarak uygulanan cezalarda (uzman/hekim eksikliği, risk
          değerlendirmesinin sürdürülen eksikliği gibi) aykırılık devam
          ettiği sürece ceza her ay yeniden kesilir; ayrıca çok tehlikeli
          sınıftaki işyerlerinde bazı ihlaller için artırımlı uygulama söz
          konusu olabilir.
        </p>
      </section>

      {/* 7. HUKUKİ SORUMLULUK */}
      <section id="hukuki-sorumluluk" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. İş Kazasında İşverenin Hukuki Sorumluluğu
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          İdari para cezası, iş kazası veya meslek hastalığı yaşanması
          halinde işverenin karşılaşabileceği tek risk değil. Sosyal
          Güvenlik Kurumu, kazalı çalışana veya hak sahiplerine yaptığı
          ödemeler için işverenin kusuru oranında rücu davası açabilir.
          Ayrıca çalışan veya hak sahipleri, işverenin işçiyi gözetme
          borcunu ihlal ettiğini ileri sürerek ayrıca maddi ve manevi
          tazminat talep edebilir.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu davalarda mahkemenin ilk baktığı belgeler arasında güncel
          risk değerlendirmesi, eğitim kayıtları, İSG kurulu tutanakları
          ve OSGB sözleşmesi/İSG-KATİP kayıtları yer alır. Bu belgeler
          eksiksiz ve güncelse işverenin kusur oranı düşebilir; hiç
          yoksa, kaza öncesinde önlem alınmadığı yönünde güçlü bir karine
          oluşur.
        </p>
        <p className="leading-8 text-gray-700">
          Bir iş kazası, aynı zamanda İş Kanunu m.24 kapsamında
          çalışanın haklı nedenle derhal fesih hakkını da doğurabilir;
          bu durumda kıdem tazminatı hakkı doğar ancak ihbar tazminatı
          söz konusu olmaz. Fesih usulü ve kıdem/ihbar hesaplamaları
          hakkında detaylı bilgiyi{" "}
          <Link href="/blog/kidem-tazminati-ihbar-suresi-fesih-mevzuati-2026" className="text-orange-600 underline">
            Kıdem Tazminatı, İhbar Süresi ve Fesih Mevzuatı 2026
          </Link>{" "}
          yazımızda bulabilirsiniz. Bu bölüm genel bilgilendirme
          amaçlıdır; somut bir iş kazası sonrası hukuki sorumluluk
          değerlendirmesi olay bazında ayrıca yapılmalıdır.
        </p>
      </section>

      {/* 8. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Kimler Öncelikli Olarak Harekete Geçmeli?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🚀 Öncelikli Grup
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Tehlikeli veya çok tehlikeli sınıftaki imalat/üretim işletmeleri</li>
              <li>✔ Henüz OSGB ile sözleşmesi olmayan veya İSG-KATİP kaydı güncel olmayan işletmeler</li>
              <li>✔ Risk değerlendirmesi hiç yapılmamış veya süresi geçmiş işyerleri</li>
              <li>✔ 50 çalışan eşiğine yaklaşan, İSG Kurulu kurmamış işletmeler</li>
              <li>✔ Yeni bir üretim hattı, makine veya tesis devreye alan işletmeler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              ⏸️ Önceliği Görece Düşük Olan Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Az tehlikeli sınıfta, OSGB sözleşmesi ve İSG-KATİP kaydı güncel olan küçük ofis işyerleri</li>
              <li>✔ Risk değerlendirmesi ve eğitimleri güncel, denetimden geçmiş işletmeler</li>
              <li>✔ Tamamen uzaktan/ofis dışı çalışan, fiziksel işyeri riski taşımayan hizmet şirketleri</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Adım Adım Uyum Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🏷️</div>
            <h3 className="text-base font-bold">1. Tehlike Sınıfı Tespiti</h3>
            <p className="mt-2 text-sm text-gray-600">İşyerinin fiilen yürüttüğü faaliyete göre az/tehlikeli/çok tehlikeli sınıfının doğrulanması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🤝</div>
            <h3 className="text-base font-bold">2. OSGB Sözleşmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Çalışan sayısı ve tehlike sınıfına göre gerekli aylık uzman/hekim süresinin hesaplanıp sözleşme kurulması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📋</div>
            <h3 className="text-base font-bold">3. Risk Değerlendirmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Saha incelemesiyle tehlikelerin tespiti, risk skorlaması ve önleyici tedbirlerin belgelenmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🎓</div>
            <h3 className="text-base font-bold">4. Eğitim ve Sağlık Gözetimi</h3>
            <p className="mt-2 text-sm text-gray-600">Çalışanlara zorunlu İSG eğitiminin verilmesi, işe giriş/periyodik muayenelerin planlanması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔄</div>
            <h3 className="text-base font-bold">5. Periyodik Takip</h3>
            <p className="mt-2 text-sm text-gray-600">İSG Kurulu toplantıları, tatbikatlar ve belgelerin süresi geldiğinde yenilenmesi</p>
          </div>
        </div>
      </section>

      {/* 10. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>OSGB sözleşmesi imzalamak tek başına yeterli değildir; görevlendirmenin İSG-KATİP sisteminde onaylanmış ve güncel olması gerekir.</li>
            <li>Risk değerlendirmesi bir kez yapılıp raflara kaldırılacak bir belge değildir; işyeri koşulları, ekipman veya süreç değiştiğinde süresinden bağımsız olarak yenilenmelidir.</li>
            <li>NACE kodu ile fiilen yürütülen faaliyet farklıysa, denetimde esas alınan fiili faaliyettir; sadece ticaret sicili kaydına güvenmek eksik uzman/hekim süresi riskine yol açabilir.</li>
            <li>İSG eğitimleri sadece üretim hattı çalışanları için değil, ofis personeli dahil tüm çalışanlar için (süre ve içerik farklılaşsa da) zorunludur.</li>
            <li>Aylık olarak uygulanan cezalar (uzman/hekim eksikliği gibi) ihlal sürdüğü her ay tekrar kesilir; erken müdahale toplam maliyeti doğrudan azaltır.</li>
          </ul>
        </div>
      </section>

      {/* 11. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6331.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                6331 Sayılı İş Sağlığı ve Güvenliği Kanunu - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.csgb.gov.tr/isggm/isg-hizmetleri/idari-para-cezalari/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                2026 Yılında Uygulanacak İdari Para Cezaları - ÇSGB İSG Genel Müdürlüğü
              </a>
            </li>
            <li>
              <a href="https://www.csgb.gov.tr/sikca-sorulan-sorular/is-sagligi-ve-guvenligi-genel-mudurlugu/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Sıkça Sorulan Sorular - İş Sağlığı ve Güvenliği Genel Müdürlüğü
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/yardim-kaynaklar/yararli-bilgiler/yeniden-degerleme-oranlari" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                2026 Yılı Yeniden Değerleme Oranı (%25,49) - Gelir İdaresi Başkanlığı
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 12. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              3-5 çalışanı olan küçük bir atölye de İSG uzmanı bulundurmak zorunda mı?
            </h3>
            <p className="leading-8 text-gray-700">
              İşyeri tehlikeli veya çok tehlikeli sınıftaysa evet, 31
              Aralık 2024&apos;ten bu yana çalışan sayısına
              bakılmaksızın zorunlu. Az tehlikeli sınıftaysa da 1 Ocak
              2025&apos;ten itibaren 50&apos;den az çalışanı olan
              işyerleri de kapsama alındı; pratikte bugün neredeyse tüm
              işyerleri bu hizmeti almak zorunda.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              OSGB ile anlaşmak yerine kendi bünyemde uzman çalıştırabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, özellikle çok tehlikeli sınıfta 10 ve üzeri çalışanı
              olan işyerlerinde işveren isterse tam veya yarı zamanlı
              kendi uzman/hekim kadrosunu kurabilir. Küçük işletmeler
              için ise maliyet açısından genelde OSGB ile aylık hizmet
              sözleşmesi yapmak daha uygun oluyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Risk değerlendirmesini kendimiz mi yapmalıyız, dışarıdan mı aldırmalıyız?
            </h3>
            <p className="leading-8 text-gray-700">
              Kanun, risk değerlendirmesinin işveren tarafından
              yaptırılmasını şart koşar; ekip işyeri hekimi, iş
              güvenliği uzmanı ve gerektiğinde çalışan temsilcisinden
              oluşur. Uygulamada bu çalışma genellikle OSGB&apos;nin
              görevlendirdiği uzman ve hekim tarafından saha
              incelemesiyle yürütülür.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İSG Kurulu ne zaman zorunlu, kurul kurmazsam ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              50 ve üzeri çalışanı olan ve 6 aydan uzun süren sürekli
              işlerin yapıldığı işyerlerinde zorunludur. Kurul
              oluşturulmaması veya düzenli toplanmaması, denetimde
              tespit edilen ve idari para cezasına konu olan
              ihlallerden biridir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İSG cezaları tek seferlik mi, yoksa tekrarlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Değişir. Bazı ihlaller (örneğin acil durum planı eksikliği)
              tespit anında tek seferlik kesilirken, uzman/hekim
              bulundurmama veya risk değerlendirmesinin sürdürülen
              eksikliği gibi ihlaller, aykırılık giderilmediği sürece
              her ay yeniden uygulanabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İSG uyumsuzluğu bir iş kazası davasında işvereni nasıl etkiler?
            </h3>
            <p className="leading-8 text-gray-700">
              Güncel risk değerlendirmesi, eğitim kayıtları ve OSGB
              görevlendirmesi eksiksizse, mahkemede işverenin gerekli
              önlemleri aldığını göstermesi kolaylaşır. Bu belgeler
              eksikse, kazadan önce önlem alınmadığı yönünde güçlü bir
              karine oluşur ve hem SGK rücu davasında hem de tazminat
              davasında işverenin kusur oranı yükselebilir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 İşyerinizin İSG Uyumunu Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Tehlike sınıfınızın doğru tespit edilip edilmediği, OSGB
            görevlendirmenizin İSG-KATİP üzerinde güncel olup olmadığı,
            risk değerlendirmesi ve eğitim kayıtlarınızın süresinin
            dolup dolmadığı gibi noktaları şirketinizin mevcut yapısı
            üzerinden birlikte gözden geçirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              İSG uyum sürecinizi değerlendirmemiz için bizimle
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
          İSG yükümlülükleri, imalat ve üretim işletmeleri için artık
          &quot;büyüdükçe ilgilenilecek&quot; bir konu değil; çalışan
          sayısına bakılmaksızın bugün itibarıyla neredeyse tüm
          işyerlerini kapsayan, ihmalinde hem idari para cezası hem de
          bir iş kazası halinde ağır hukuki sorumluluk doğurabilen bir
          alan. Tehlike sınıfının doğru tespiti, OSGB üzerinden uzman ve
          hekim hizmetinin sağlanması, güncel risk değerlendirmesi ve
          eğitim kayıtlarının tutulması, hem denetim hem de olası bir
          kaza sonrası sorumluluk açısından işletmeyi koruyan temel
          adımlardır.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirketlerin
          mevzuat uyum süreçlerini stratejik danışmanlık hizmetimiz
          kapsamında değerlendiriyor, İSG yükümlülükleriniz de dahil
          olmak üzere işletmenizin mevcut durumunu gözden geçirmenize
          destek oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/kidem-tazminati-ihbar-suresi-fesih-mevzuati-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İŞ HUKUKU • FESİH VE KIDEM MEVZUATI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Kıdem Tazminatı, İhbar Süresi ve Fesih Mevzuatı: İşverenler İçin 2026 Rehberi</h3>
          </Link>
          <Link
            href="/blog/sgk-tesvikleri-2026-hangi-isverenler-hangi-prim-destegi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SGK TEŞVİKLERİ • BORDRO • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">SGK Teşvikleri 2026: Hangi İşverenler Hangi Prim Desteğinden Yararlanabilir?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
