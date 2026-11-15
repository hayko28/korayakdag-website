import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "e-Tebligat Zorunluluğu 2026: Son Başvuru 30 Kasım | Koray Akdağ",
  description: "11 Ekim 2026 tarihli 596 sıra no'lu VUK Genel Tebliği'yle e-Tebligat sistemi yeniden düzenlendi. Kurumlar vergisi mükellefleri, gerçek usulde vergilendirilen gelir vergisi mükellefleri, kolektif ve adi komandit şirketler için son başvuru tarihi 30 Kasım 2026. Kapsam, muafiyetler ve başvuru adımlarıyla güncel rehber.",
  keywords: [
    "e-tebligat zorunluluğu 2026",
    "e-tebligat son başvuru tarihi",
    "VUK 596 sıra no'lu tebliğ",
    "e-tebligat kimler zorunlu",
    "dijital vergi dairesi e-tebligat başvurusu",
    "e-tebligat 30 kasım 2026",
    "kurumlar vergisi e-tebligat",
    "e-tebligat UETS farkı",
  ],
  alternates: {
    canonical: "/blog/e-tebligat-zorunlulugu-2026-30-kasim-son-tarih",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="e-Tebligat Zorunluluğu 2026: Şirketiniz Sisteme Kayıtlı Değilse 30 Kasım'a Kadar Ne Yapmalı?"
      description="11 Ekim 2026 tarihli ve 33397 sayılı Resmî Gazete'de yayımlanan 596 sıra no'lu Vergi Usul Kanunu Genel Tebliği, e-Tebligat sisteminin usul ve esaslarını yeniden belirledi. Kurumlar vergisi mükellefleri, ticari/zirai/mesleki kazancı nedeniyle gerçek usulde vergilendirilen gelir vergisi mükellefleri, kolektif ve adi komandit şirketler için sisteme kayıt son tarihi 30 Kasım 2026. Kapsam, muafiyetler, başvuru adımları ve dikkat edilmesi gerekenlerle güncel rehber."
      category="VERGİ DANIŞMANLIĞI • E-TEBLİGAT • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="e-tebligat-zorunlulugu-2026-30-kasim-son-tarih"
      coverImage="https://images.unsplash.com/photo-1554224155-1696413565d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Şirketinizin e-Tebligat Durumunu Birlikte Kontrol Edelim"
      ctaText="Şirketinizin e-Tebligat sistemine kayıtlı olup olmadığını, 30 Kasım 2026 öncesinde yapılması gerekenleri ve diğer vergisel yükümlülüklerinizi birlikte gözden geçirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: e-Tebligat&apos;ta Ne Değişti?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>11 Ekim 2026</strong> tarihli, <strong>33397 sayılı</strong> Resmî Gazete&apos;de yayımlanan <strong>596 sıra no&apos;lu VUK Genel Tebliği</strong>, e-Tebligat sisteminin usul ve esaslarını yeniden düzenledi.</li>
          <li>✔ Zorunlu kapsam artık doğrudan kanunda (7587 sayılı Kanun&apos;la değişen VUK 107/A): kurumlar vergisi mükellefleri, ticari/zirai/mesleki kazancı nedeniyle gerçek usulde vergilendirilen gelir vergisi mükellefleri, kolektif ve adi komandit şirketler ile ÖTV (II) sayılı listedeki araçları ilk iktisap edenler.</li>
          <li>✔ Tebliğin yayımından <strong>önce</strong> mükellefiyeti bulunup henüz sisteme girmemiş olanlar, <strong>yayımı izleyen ayın sonuna kadar</strong>, yani <strong>30 Kasım 2026&apos;ya kadar</strong> başvurmak zorunda.</li>
          <li>✔ Yeni mükellefiyet tesis edenler için süre, işe başlama tarihinden itibaren <strong>15 gün</strong>.</li>
          <li>✔ %90 ve üzeri engelli gerçek kişiler ile 18 yaşını doldurmamış kişiler zorunluluk dışında; isteğe bağlı katılım her zaman mümkün.</li>
          <li>✔ 1 Temmuz 2026 öncesinde sisteme dahil olanların yeniden başvurmasına gerek yok; mevcut kullanıcı kodu ve şifreyle devam ediyorlar.</li>
          <li>✔ Bu düzenleme, Anayasa Mahkemesi&apos;nin Ocak 2026&apos;da VUK 107/A&apos;daki sınırsız Bakanlık yetkisini iptal etmesinin ardından, kapsamın doğrudan kanunla belirlenmesiyle geldi.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. e-Tebligat Nedir, Neden Yeniden Gündemde?
          </Link>
          <Link href="#596" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 596 Sıra No&apos;lu Tebliğ Ne Getirdi?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Zorunlu Kapsamda?
          </Link>
          <Link href="#muaf" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Kimler Muaf, Kimler İsteğe Bağlı Katılabilir?
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Süreleri ve 30 Kasım 2026 Takvimi
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Karıştırmayın: GİB e-Tebligat ile UETS/KEP Farklı Sistemler
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#isleyis" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Tebligat Nasıl İşliyor, Sistemden Çıkış Nasıl Olur?
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
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. e-Tebligat Nedir, Neden Yeniden Gündemde?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          e-Tebligat, vergi dairelerinin mükelleflere göndermesi gereken
          ihbarname, ödeme emri, vergi/ceza ihbarnamesi gibi evrakın kağıt
          ortamda posta yoluyla değil, elektronik ortamda tebliğ edilmesini
          sağlayan sistemdir. 213 sayılı Vergi Usul Kanunu&apos;nun 107/A
          maddesine dayanır ve Gelir İdaresi Başkanlığı tarafından
          yürütülür. Sistem 2016&apos;dan beri yürürlükte; ancak 2026&apos;da
          hem hukuki dayanağı hem de uygulama usulü kökten değişti.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Konunun yeniden gündeme gelmesinin sebebi şu: Anayasa Mahkemesi,
          15 Ocak 2026 tarihli <strong>E.2025/94, K.2026/11</strong> sayılı
          kararıyla, VUK 107/A maddesinde Hazine ve Maliye Bakanlığı&apos;na
          e-Tebligat zorunluluğunun kapsamını sınırsız biçimde belirleme
          yetkisi veren ibareyi, kanunilik ilkesine aykırı bularak iptal
          etti. Karar 3 Nisan 2026&apos;da Resmî Gazete&apos;de yayımlandı ve
          bir uygulama boşluğu doğmaması için yayımından 9 ay sonra
          yürürlüğe girecek şekilde ertelendi. Kanun koyucu bu süre
          içinde harekete geçti: <strong>7587 sayılı Kanun</strong>, VUK
          107/A maddesini yeniden yazarak zorunlu kapsamı artık doğrudan
          kanun metnine taşıdı ve 1 Temmuz 2026&apos;da yürürlüğe girdi.
        </p>
        <p className="leading-8 text-gray-700">
          <strong>596 sıra no&apos;lu VUK Genel Tebliği</strong>, bu yeni
          kanun hükmünün uygulama usul ve esaslarını belirleyen tebliğdir
          ve 2015 tarihli, eski düzenlemenin dayanağı olan 456 sıra
          no&apos;lu tebliği yürürlükten kaldırmıştır. Bu yazıda, kimlerin
          hangi tarihe kadar sisteme kayıt olması gerektiğini, muafiyetleri
          ve başvuru sürecini resmî kaynaklara dayanarak anlatıyoruz.
        </p>
      </section>

      {/* 2. 596 TEBLİĞ */}
      <section id="596" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 596 Sıra No&apos;lu Tebliğ Ne Getirdi?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          11 Ekim 2026 tarihli ve 33397 sayılı Resmî Gazete&apos;de
          yayımlanan tebliğ, Hazine ve Maliye Bakanlığı (Gelir İdaresi
          Başkanlığı) tarafından hazırlandı. Dayanağı VUK 107/A&apos;nın
          altıncı fıkrası ile mükerrer 257. maddenin dördüncü fıkrası.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📌 Eskiden Nasıldı?</h3>
            <p className="text-gray-700">
              Zorunlu kapsam, 2015 tarihli 456 sıra no&apos;lu bir Bakanlık
              tebliğiyle belirleniyordu. Anayasa Mahkemesi, bu şekilde
              kapsamın sınırsız bir idari yetkiyle çizilmesini kanunilik
              ilkesine aykırı buldu.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📌 Şimdi Nasıl?</h3>
            <p className="text-gray-700">
              Zorunlu kapsam artık doğrudan 7587 sayılı Kanun&apos;la
              değişen VUK 107/A metninde sayılıyor. 596 sıra no&apos;lu
              tebliğ, sadece bu kanun hükmünün başvuru, onay ve tebligat
              usulünü düzenliyor.
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratikte şirketler için en somut değişiklik şu: önceki
            düzenlemede gelir vergisi mükelleflerinin kapsamı tartışmalıydı;
            yeni tebliğ, <strong>ticari, zirai veya mesleki kazancı
            nedeniyle gerçek usulde vergilendirilen gelir vergisi
            mükellefleri</strong> ile <strong>kolektif ve adi komandit
            şirketleri</strong> zorunlu kapsama açıkça dahil ediyor. Daha
            önce sadece kurumlar vergisi mükellefleri üzerinden
            yürüyen tartışma, artık şahıs işletmeleri ve şahıs
            şirketlerini de doğrudan kapsıyor.
          </p>
        </div>
      </section>

      {/* 3. KİMLER ZORUNLU */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Zorunlu Kapsamda?
        </h2>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Zorunlu Olarak e-Tebligat Sistemine Dahil Olacaklar
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>✔ <strong>Kurumlar vergisi mükellefleri</strong> (anonim, limited, sermayesi paylara bölünmüş komandit şirketler dahil sermaye şirketleri)</li>
            <li>✔ <strong>Ticari, zirai veya mesleki kazancı</strong> nedeniyle <strong>gerçek usulde</strong> vergilendirilen gelir vergisi mükellefleri</li>
            <li>✔ <strong>Kolektif şirketler</strong> ile <strong>adi komandit şirketler</strong></li>
            <li>✔ ÖTV (II) sayılı listedeki kayıt ve tescile tabi malların (örneğin motorlu taşıtların) ilk iktisabında adına tescil yapılan kişiler</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Dikkat edilmesi gereken nokta, basit usule tabi mükellefler ile
          sadece gayrimenkul sermaye iradı, menkul sermaye iradı veya diğer
          kazanç/irat elde eden gelir vergisi mükelleflerinin bu zorunlu
          listede ayrıca sayılmamış olması; bu kişiler, sistemin dışında
          kalsalar dahi isteğe bağlı olarak başvurabiliyor.
        </p>
      </section>

      {/* 4. MUAF */}
      <section id="muaf" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Kimler Muaf, Kimler İsteğe Bağlı Katılabilir?
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-red-700">
            ❌ Zorunluluk Dışında Kalanlar
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>❌ Engellilik oranı <strong>%90 veya daha fazla</strong> olan gerçek kişiler (tüzel kişilerde, temsilcinin engellilik oranına bakılıyor; sağlık kurulu raporunun vergi dairesine ibrazı gerekiyor)</li>
            <li>❌ <strong>18 yaşını doldurmamış</strong> gerçek kişiler</li>
            <li>❌ ÖTV listesindeki mallar bakımından kamu idareleri, mahalli idareler, diplomatik temsilcilikler ve belirli uluslararası kuruluşlar</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Zorunluluk dışında kalan herkes, isterse sisteme gönüllü olarak
          kayıt olabilir. Ayrıca sistemden çıkış da belirli kurallara tabi:
          tüzel kişiler sicil kaydının silindiği tarihte, gerçek kişiler
          ölüm veya gaiplik kararı halinde sistemden re&apos;sen
          çıkarılıyor; zorunlu kapsamdaki gerçek kişiler ise mükellefiyetin
          sona ermesini izleyen beşinci takvim yılı sonundan itibaren
          çıkış talep edebiliyor, 65 yaşını doldurmuş kişiler ise talep
          tarihinden itibaren çıkabiliyor.
        </p>
      </section>

      {/* 5. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Süreleri ve 30 Kasım 2026 Takvimi
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border-2 border-orange-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">11 Ekim 2026</h3>
            <p className="mt-2 text-sm text-gray-600">596 sıra no&apos;lu Tebliğ Resmî Gazete&apos;de yayımlandı, yürürlüğe girdi</p>
          </div>
          <div className="rounded-xl border-2 border-red-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">30 Kasım 2026</h3>
            <p className="mt-2 text-sm text-gray-600">Tebliğden önce mükellefiyeti bulunup sisteme girmemiş olanlar için son başvuru tarihi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">İşe Başlamadan İtibaren 15 Gün</h3>
            <p className="mt-2 text-sm text-gray-600">Tebliğden sonra yeni mükellefiyet tesis edenler için başvuru süresi</p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <p className="leading-8 text-gray-700">
            Tebliğ metninde son tarih açık bir takvim günü olarak
            yazılmıyor; bunun yerine &quot;tebliğin yayımını izleyen ayın
            sonuna kadar&quot; ifadesi kullanılıyor. Yayım tarihi 11 Ekim
            2026 olduğundan, izleyen ay Kasım 2026&apos;dır ve bu ayın
            sonu <strong>30 Kasım 2026&apos;ya</strong> denk gelir. Kesin
            tarih için şirketinizin bağlı olduğu vergi dairesinden veya
            Dijital Vergi Dairesi üzerinden teyit almanızı öneririz.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          ÖTV (II) sayılı listedeki mallar için ise ayrı bir kural var:
          bu kapsamdaki kayıt veya tescil işlemi tamamlanmadan önce
          sisteme dahil olunması gerekiyor; yani süre, işlem tarihine
          bağlı.
        </p>
      </section>

      {/* 6. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karıştırmayın: GİB e-Tebligat ile UETS/KEP Farklı Sistemler
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ &quot;Zaten KEP Adresim Var&quot; Demek Yetmez
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Şirketlerde en sık karşılaşılan yanılgılardan biri, Türk
            Ticaret Kanunu kapsamında zaten bir Kayıtlı Elektronik Posta
            (KEP) adresi edinmiş veya Ulusal Elektronik Tebligat Sistemi
            (UETS) üzerinden tebligat alıyor olmanın, vergisel e-Tebligat
            yükümlülüğünü de karşıladığını düşünmek.
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">GİB e-Tebligat (VUK 107/A)</th>
                  <th className="p-4">UETS / KEP (7201 sayılı Kanun)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Hukuki dayanak</td>
                  <td className="p-4">213 sayılı Vergi Usul Kanunu</td>
                  <td className="p-4">7201 sayılı Tebligat Kanunu</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Yürüten kurum</td>
                  <td className="p-4">Gelir İdaresi Başkanlığı</td>
                  <td className="p-4">PTT A.Ş. ve yetkili KEP sağlayıcıları</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Kapsadığı tebligat</td>
                  <td className="p-4">Vergi ve ceza ihbarnameleri, ödeme emirleri gibi vergisel evrak</td>
                  <td className="p-4">Mahkeme, icra dairesi, idari kurum tebligatları gibi genel hukuki evrak</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            İki sistem ayrı kanunlara dayanıyor ve ayrı amaçlara hizmet
            ediyor. Bir şirketin UETS üzerinden tebligat alabiliyor olması,
            596 sıra no&apos;lu tebliğ kapsamındaki GİB e-Tebligat
            başvurusunu gereksiz kılmıyor; her iki yükümlülük de ayrı ayrı
            yerine getirilmelidir.
          </p>
        </div>
      </section>

      {/* 7. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Adım Adım Başvuru Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🖥️</div>
            <h3 className="text-xl font-bold">1. Kanal Seçimi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Başvuru, dijital.gib.gov.tr üzerinden Dijital Vergi Dairesi
              ile veya vergi dairesine EK-1/EK-2 bildirimiyle yapılabilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📝</div>
            <h3 className="text-xl font-bold">2. Bildirim ve Doğrulama</h3>
            <p className="mt-3 text-sm text-gray-600">
              Dijital Vergi Dairesi üzerinden yapılan başvurularda e-posta
              ve/veya SMS doğrulaması ile kimlik ve iletişim bilgisi
              teyit edilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🔑</div>
            <h3 className="text-xl font-bold">3. Kullanıcı Kodu/Şifre</h3>
            <p className="mt-3 text-sm text-gray-600">
              Başvuru onaylandıktan sonra sisteme giriş için kullanıcı
              kodu ve şifre teslim edilir; bu bilgilerin korunması
              mükellefin sorumluluğundadır.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Vergi Dairesine Başvuran Kim Olabilir?
          </h3>
          <p className="leading-8 text-gray-700">
            Vergi dairesine yapılan başvuruyu bizzat mükellef, kanuni
            temsilcisi veya özel yetkili noter vekaletnamesine sahip bir
            vekil yapabilir. Tüzel kişiliklerde bu işlem genellikle
            şirketin mali müşaviri veya yeminli mali müşaviri tarafından
            yürütülüyor; vekaletnamenin özellikle bu işlemi kapsayacak
            şekilde düzenlenmiş olması gerekiyor.
          </p>
        </div>
      </section>

      {/* 8. İŞLEYİŞ */}
      <section id="isleyis" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Tebligat Nasıl İşliyor, Sistemden Çıkış Nasıl Olur?
        </h2>
        <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            💡 Beşinci Gün Kuralı
          </h3>
          <p className="leading-8 text-gray-700">
            Elektronik imzalı evrak, elektronik tebligat adresine
            ulaştığı tarihi izleyen <strong>beşinci günün sonunda</strong>
            muhataba tebliğ edilmiş sayılıyor. Bu, mükellefin evrakı
            fiilen açıp açmamasından bağımsız işleyen bir süre; dolayısıyla
            sisteme düzenli giriş yapmamak, tebligatın geçersiz sayılması
            anlamına gelmiyor. Bu nedenle sisteme kayıt olduktan sonra
            düzenli kontrol, başvuru kadar önem taşıyor.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Sistemden çıkış da belirli koşullara bağlı: tüzel kişiler
          ticaret sicilinden silindiği tarihte, gerçek kişiler ölüm veya
          gaiplik kararı halinde idare tarafından re&apos;sen sistemden
          çıkarılıyor. Zorunlu kapsamdaki gerçek kişiler, mükellefiyetin
          sona ermesinden sonra beşinci takvim yılının sonuna kadar
          sistemde kalmaya devam ediyor; bu süre dolmadan çıkış talep
          edilemiyor.
        </p>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Zorunlu kapsamda olup süresi içinde başvurmayan mükellefler için VUK mükerrer 355. madde kapsamında özel usulsüzlük cezası uygulanabiliyor; ayrıca idare, bilgileri sisteminde bulunan mükellefleri doğrudan sisteme dahil edebiliyor.</li>
            <li>Yeni kurulan bir şirketseniz 15 günlük süre işe başlama tarihinden itibaren işliyor; bu süre, şirket kuruluş tescilinden değil, vergi dairesindeki mükellefiyet tesis tarihinden başlıyor.</li>
            <li>Vergi dairesine yapılan başvurularda EK-1/EK-2 formlarının eksiksiz ve güncel iletişim bilgileriyle doldurulması gerekiyor; eksik bilgi, başvurunun işleme alınmasını geciktirebiliyor.</li>
            <li>1 Temmuz 2026 öncesinde sisteme kayıtlı olan mükelleflerin yeniden başvurmasına gerek yok; ancak kullanıcı kodu/şifre bilgilerinin güncel ve erişilebilir olduğundan emin olunmalı.</li>
            <li>e-Tebligat adresine gelen evrak, beşinci günün sonunda tebliğ edilmiş sayıldığından, itiraz veya dava açma süreleri bu tarihten itibaren işlemeye başlıyor; sisteme seyrek giriş yapmak, süre kaçırma riskini artırıyor.</li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, e-Tebligat ile
            e-Fatura/e-Defter gibi diğer dijital vergi yükümlülüklerinin
            birbirinden bağımsız olarak değerlendirilmesi gerektiğidir.
            Bir şirket e-Fatura ve e-Defter mükellefi olduğu için
            otomatik olarak e-Tebligat sistemine de kayıtlı olduğunu
            varsayabiliyor; oysa bu üç sistem ayrı başvuru süreçlerine
            tabidir ve birinde kayıtlı olmak diğerinde kayıtlı olunduğu
            anlamına gelmez. Bu nedenle şirketlerin yıl sonu öncesinde
            üç sistemdeki durumunu ayrı ayrı teyit etmesi, hem 30 Kasım
            2026 son tarihini kaçırmamak hem de olası özel usulsüzlük
            cezası riskini önlemek açısından önemlidir.
          </p>
        </div>
      </section>

      {/* 10. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.turmob.org.tr/arsiv/mbs/resmigazete/33397-33397.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Vergi Usul Kanunu Genel Tebliği (Sıra No: 596), 11 Ekim 2026, RG 33397
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.213.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                213 Sayılı Vergi Usul Kanunu, Madde 107/A - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://normkararlarbilgibankasi.anayasa.gov.tr/Dosyalar/Kararlar/KararWord/K.2026-11.nrm.docx" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Anayasa Mahkemesi, E.2025/94, K.2026/11 sayılı Karar, 15 Ocak 2026 - anayasa.gov.tr
              </a>
            </li>
            <li>
              <a href="https://dijital.gib.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Dijital Vergi Dairesi - dijital.gib.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Gelir İdaresi Başkanlığı - Resmî Duyurular (gib.gov.tr)
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              e-Tebligat sistemine kayıt olmak için son tarih gerçekten 30 Kasım 2026 mı?
            </h3>
            <p className="leading-8 text-gray-700">
              596 sıra no&apos;lu Tebliğ, süreyi &quot;yayımı izleyen ayın
              sonuna kadar&quot; olarak belirliyor. Tebliğ 11 Ekim 2026&apos;da
              yayımlandığından, bu süre 30 Kasım 2026&apos;ya denk geliyor.
              Bu tarih, tebliğin yayımından önce mükellefiyeti bulunan ve
              henüz sisteme kayıtlı olmayanlar için geçerli; kesin teyit
              için vergi daireniz veya Dijital Vergi Dairesi&apos;ne
              başvurmanızı öneririz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şahıs işletmem var, e-Tebligat zorunlu mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Ticari, zirai veya mesleki kazancı nedeniyle gerçek usulde
              vergilendiriliyorsanız evet, zorunlu kapsamdasınız. Basit
              usule tabi mükellefler bu zorunlu listede ayrıca
              sayılmıyor; ancak isteğe bağlı olarak sisteme kayıt
              olabilirler.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Daha önce e-Tebligat sistemine kayıt oldum, yeniden başvurmam gerekiyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 596 sıra no&apos;lu Tebliğ&apos;in geçici 1. maddesine
              göre, 1 Temmuz 2026 tarihinden önce VUK 107/A kapsamında
              sisteme dahil olanlar yeniden başvuru yapmadan mevcut
              kullanıcı kodu ve şifresiyle kullanmaya devam ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KEP adresim veya UETS kaydım var, ayrıca e-Tebligat başvurusu yapmam gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. GİB e-Tebligat (VUK 107/A) ile UETS/KEP (7201 sayılı
              Tebligat Kanunu) farklı hukuki dayanaklara sahip, ayrı
              sistemlerdir. Birinde kayıtlı olmak diğerindeki
              yükümlülüğü ortadan kaldırmaz; şirketlerin her iki
              sistemdeki durumunu ayrı ayrı kontrol etmesi gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Süresi içinde başvurmazsam ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Zorunlu kapsamda olup süresinde başvurmamak, VUK mükerrer
              355. madde kapsamında özel usulsüzlük cezası riski
              doğurabilir. Ayrıca idare, elinde bulunan bilgilerle
              mükellefi sisteme dahil edebilir; bu durumda da tebligatlar
              elektronik ortamda yapılmaya başlanır ve beşinci gün
              kuralı işlemeye devam eder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeni kurduğum şirket için süre ne kadar?
            </h3>
            <p className="leading-8 text-gray-700">
              Tebliğin yayımından sonra mükellefiyet tesis eden şirketler
              ve şahıs işletmeleri, işe başlama tarihini izleyen 15 gün
              içinde başvuru yapmak zorunda.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin e-Tebligat ve Vergi Uyumunu Birlikte Yönetelim
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketinizin e-Tebligat sistemine kayıtlı olup olmadığının
            kontrolünden 30 Kasım 2026 öncesi gerekli başvurunun
            yapılmasına, ardından gelen vergi ve ceza ihbarnamelerinin
            düzenli takibine kadar tüm süreci Koray Akdağ / Sistem
            Global Danışmanlık olarak bizzat yürütüyoruz; ayrı bir
            yerel mali müşavir aramanıza gerek kalmıyor.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 12. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          e-Tebligat, 2016&apos;dan beri yürürlükte olan ama 2026&apos;da
          hem hukuki dayanağı hem de kapsamı kökten değişen bir sistem.
          Anayasa Mahkemesi&apos;nin iptal kararı sonrası kanun koyucunun
          müdahalesiyle zorunlu kapsam artık doğrudan kanunda yazılı;
          596 sıra no&apos;lu tebliğ ise bu kapsamın nasıl işletileceğini
          belirliyor. Kurumlar vergisi mükellefleri, gerçek usulde
          vergilendirilen gelir vergisi mükellefleri ve şahıs
          şirketlerinin 30 Kasım 2026&apos;ya kadar sistemdeki durumunu
          kontrol etmesi, hem olası bir cezadan kaçınmak hem de vergi
          dairesinden gelecek bildirimleri zamanında görebilmek açısından
          önemli.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirketlerin
          e-Tebligat, e-Fatura ve e-Defter gibi dijital vergi
          yükümlülüklerini tek elden takip etmesine, eksik başvuruları
          zamanında tamamlamasına ve gelen tebligatları düzenli olarak
          değerlendirmesine yardımcı oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/vergi-borcu-aciklama-listesi-2026-kimler-kapsamda"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Vergi Borcu Listesi 2026: Şirketiniz Açıklanacak mı?</h3>
          </Link>
          <Link
            href="/blog/e-arsiv-fatura-zorunlulugu-sirketler-sahis-isletmeleri-2027"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • E-ARŞİV FATURA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">e-Arşiv Fatura Zorunluluğu: Şirketler ve Şahıs İşletmeleri İçin Tarihler</h3>
          </Link>
          <Link
            href="/blog/tam-tasdik-nedir-kimler-yaptirmali-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YEMİNLİ MALİ MÜŞAVİRLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Tam Tasdik Nedir? Kimler Yaptırmalı, Avantajları Neler?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"e-Tebligat sistemine kayıt olmak için son tarih gerçekten 30 Kasım 2026 mı?","acceptedAnswer":{"@type":"Answer","text":"596 sıra no'lu Tebliğ, süreyi 'yayımı izleyen ayın sonuna kadar' olarak belirliyor. Tebliğ 11 Ekim 2026'da yayımlandığından, bu süre 30 Kasım 2026'ya denk geliyor. Bu tarih, tebliğin yayımından önce mükellefiyeti bulunan ve henüz sisteme kayıtlı olmayanlar için geçerli; kesin teyit için vergi daireniz veya Dijital Vergi Dairesi'ne başvurmanızı öneririz."}},{"@type":"Question","name":"Şahıs işletmem var, e-Tebligat zorunlu mu?","acceptedAnswer":{"@type":"Answer","text":"Ticari, zirai veya mesleki kazancı nedeniyle gerçek usulde vergilendiriliyorsanız evet, zorunlu kapsamdasınız. Basit usule tabi mükellefler bu zorunlu listede ayrıca sayılmıyor; ancak isteğe bağlı olarak sisteme kayıt olabilirler."}},{"@type":"Question","name":"Daha önce e-Tebligat sistemine kayıt oldum, yeniden başvurmam gerekiyor mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır. 596 sıra no'lu Tebliğ'in geçici 1. maddesine göre, 1 Temmuz 2026 tarihinden önce VUK 107/A kapsamında sisteme dahil olanlar yeniden başvuru yapmadan mevcut kullanıcı kodu ve şifresiyle kullanmaya devam ediyor."}},{"@type":"Question","name":"KEP adresim veya UETS kaydım var, ayrıca e-Tebligat başvurusu yapmam gerekir mi?","acceptedAnswer":{"@type":"Answer","text":"Evet. GİB e-Tebligat (VUK 107/A) ile UETS/KEP (7201 sayılı Tebligat Kanunu) farklı hukuki dayanaklara sahip, ayrı sistemlerdir. Birinde kayıtlı olmak diğerindeki yükümlülüğü ortadan kaldırmaz; şirketlerin her iki sistemdeki durumunu ayrı ayrı kontrol etmesi gerekir."}},{"@type":"Question","name":"Süresi içinde başvurmazsam ne olur?","acceptedAnswer":{"@type":"Answer","text":"Zorunlu kapsamda olup süresinde başvurmamak, VUK mükerrer 355. madde kapsamında özel usulsüzlük cezası riski doğurabilir. Ayrıca idare, elinde bulunan bilgilerle mükellefi sisteme dahil edebilir; bu durumda da tebligatlar elektronik ortamda yapılmaya başlanır ve beşinci gün kuralı işlemeye devam eder."}},{"@type":"Question","name":"Yeni kurduğum şirket için süre ne kadar?","acceptedAnswer":{"@type":"Answer","text":"Tebliğin yayımından sonra mükellefiyet tesis eden şirketler ve şahıs işletmeleri, işe başlama tarihini izleyen 15 gün içinde başvuru yapmak zorunda."}}]}) }}
      />
    </BlogLayout>
  );
}
