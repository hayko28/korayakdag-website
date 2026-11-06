import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "e-Arşiv Fatura Zorunluluğu 2027 Ne Zaman Başlıyor? | Koray Akdağ",
  description:
    "31 Aralık 2025 tarihli 589 Sıra No'lu VUK Genel Tebliği ile e-Arşiv Fatura'da tutar sınırının kalkması, bilanço esasına göre defter tutan şirketler için 1 Ocak 2026'da başladı; basit usul ve işletme hesabı esasına göre defter tutan şahıs işletmeleri için ise 1 Ocak 2027'ye ertelendi. Kimin hangi tarihe tabi olduğunu resmî kaynaklarla anlatıyoruz.",
  keywords: [
    "e-Arşiv Fatura zorunluluğu 2027",
    "589 sıra no'lu VUK tebliği",
    "e-Arşiv Fatura tutar sınırı kalktı mı",
    "işletme hesabı esası e-Arşiv Fatura",
    "basit usul e-Arşiv Fatura",
    "e-Fatura e-Arşiv farkı",
    "şahıs işletmesi e-Arşiv Fatura 2027",
  ],
  alternates: {
    canonical: "/blog/e-arsiv-fatura-zorunlulugu-sirketler-sahis-isletmeleri-2027",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="e-Arşiv Fatura Zorunluluğu: Şirketler İçin 2026'da Başladı, Şahıs İşletmeleri İçin Neden 2027'ye Ertelendi?"
      description="31 Aralık 2025 tarihli 589 Sıra No'lu VUK Genel Tebliği, e-Arşiv Fatura'da tutar sınırını kaldıran kuralı iki farklı tarihe böldü. Bilanço esasına göre defter tutan şirketler için bu kural 1 Ocak 2026'da zaten yürürlüğe girdi; basit usul ve işletme hesabı esasına göre defter tutan şahıs işletmeleri için ise 1 Ocak 2027'ye kadar ek süre tanındı. Kimin hangi tarihe tabi olduğunu ve şimdi ne yapmanız gerektiğini resmî kaynaklarla derledik."
      category="VERGİ DANIŞMANLIĞI • E-ARŞİV FATURA • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="e-arsiv-fatura-zorunlulugu-sirketler-sahis-isletmeleri-2027"
      coverImage="https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Şirketinizin e-Fatura ve e-Arşiv Uyumunu Birlikte Netleştirelim"
      ctaText="Hangi fatura türünü, hangi tarihten itibaren ve hangi kurallarla düzenlemeniz gerektiğini birlikte netleştirelim. Şirket kuruluşundan sonraki muhasebe ve mali mevzuat uyumunu da ayrı bir mali müşavir aramanıza gerek kalmadan Koray Akdağ / Sistem Global Danışmanlık olarak biz yürütüyoruz."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Son aylarda muhasebeciler ve işletme sahipleri arasında aynı soru
        dönüp duruyor: &quot;e-Arşiv Fatura artık her tutarda mı zorunlu, yoksa
        hâlâ bir sınır mı var?&quot; Cevap, işletmenizin hangi defter
        tutma usulüne tabi olduğuna göre değişiyor. 31 Aralık 2025 tarihli
        Resmî Gazete&apos;de yayımlanan <strong>589 Sıra No&apos;lu Vergi
        Usul Kanunu Genel Tebliği</strong>, tutar sınırı olmaksızın e-Arşiv
        Fatura düzenleme zorunluluğunu iki ayrı tarihe böldü. Bu yazıda bu
        ayrımın tam olarak ne anlama geldiğini, hangi işletmenin hangi
        tarihe tabi olduğunu ve şimdiden ne yapmanız gerektiğini resmî
        kaynaklara dayanarak anlatıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ <strong>Bilanço esasına göre defter tutan mükellefler</strong>{" "}
            (limited ve anonim şirketlerin tamamı dahil) için tutar sınırı{" "}
            <strong>1 Ocak 2026&apos;dan itibaren zaten kalktı</strong>.
            Artık her tutardaki fatura, GİB&apos;in e-Belge (e-Arşiv)
            Portali üzerinden düzenlenmek zorunda.
          </li>
          <li>
            ✔ <strong>Basit usulde vergilendirilen mükellefler</strong> ile{" "}
            <strong>işletme hesabı esasına göre defter tutan</strong> şahıs
            işletmeleri için bu geçiş, 589 Sıra No&apos;lu Tebliğ ile{" "}
            <strong>1 Ocak 2027&apos;ye ertelendi</strong>.
          </li>
          <li>
            ✔ Erteleme bir muafiyet değil, yalnızca bir süre uzatımı. Bu
            grup, 31 Aralık 2026&apos;ya kadar eski tutar sınırlı sisteme
            göre fatura kesmeye devam edebiliyor.
          </li>
          <li>
            ✔ Değişikliğin hukuki dayanağı, 509 Sıra No&apos;lu VUK Genel
            Tebliği&apos;nin &quot;IV.2.4.3&quot; bölümünde yapılan tek
            cümlelik bir eklemeyle sınırlı; kapsamı dar ama etkisi geniş.
          </li>
          <li>
            ✔ Limited ve anonim şirketler VUK gereği zaten bilanço esasına
            tabi olduğu için, şirketiniz varsa bu değişiklik sizi{" "}
            <strong>şimdiden</strong> ilgilendiriyor; ertelemeden
            yararlanamazsınız.
          </li>
          <li>
            ✔ Erteleme yalnızca şahıs işletmelerini (esnaf, basit usul ve
            işletme hesabı esasına göre defter tutan gerçek kişi
            tacirleri) kapsıyor.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#e-arsiv-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. e-Arşiv Fatura Nedir, e-Fatura&apos;dan Farkı Ne?
          </Link>
          <Link href="#genel-kural" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Genel Kural: Tutar Sınırı Neden ve Ne Zaman Kalktı?
          </Link>
          <Link href="#589-erteleme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. 589 Sıra No&apos;lu Tebliğ: Kimler İçin Süre Uzadı?
          </Link>
          <Link href="#hangi-grup" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Bilanço Esası mı, İşletme Hesabı mı? Hangi Grup Hangisi?
          </Link>
          <Link href="#ne-yapmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Şimdi Ne Yapmalısınız?
          </Link>
          <Link href="#cezalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Uymazsanız Ne Olur?
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

      {/* 1. E-ARŞİV NEDİR */}
      <section id="e-arsiv-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. e-Arşiv Fatura Nedir, e-Fatura&apos;dan Farkı Ne?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İkisi de elektronik ortamda düzenlenen fatura türleri ama kapsamları
          farklı. <strong>e-Fatura</strong>, yalnızca GİB sisteminde kayıtlı
          iki mükellef arasında (B2B) düzenlenebilen, GİB üzerinden karşı
          tarafa doğrudan iletilen bir belge türü. Belirli bir ciro haddini
          aşan veya belirli sektörlerde faaliyet gösteren mükellefler için
          e-Fatura mükellefi olmak zorunlu; bu eşik GİB tarafından yıllık
          olarak güncelleniyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          <strong>e-Arşiv Fatura</strong> ise daha geniş bir kavram.
          e-Fatura mükellefi olanların nihai tüketicilere (vergi mükellefi
          olmayan kişilere) kestiği faturaları da, e-Fatura sistemine hiç
          dahil olmayan mükelleflerin düzenlediği faturaları da kapsar. Bu
          yazının konusu olan değişiklik, tam olarak bu ikinci gruba, yani
          e-Fatura mükellefi olmayıp hâlâ kâğıt fatura kesebilen
          mükelleflere yönelik. 509 Sıra No&apos;lu VUK Genel Tebliği&apos;nin
          &quot;IV.2.4.3. e-Arşiv Fatura Olarak Düzenlenme Zorunluluğu
          Getirilen Diğer Faturalar&quot; başlıklı bölümü, bugüne kadar bu
          mükelleflere belirli bir tutarı aşan faturalarını GİB&apos;in
          e-Belge Portali üzerinden e-Arşiv Fatura olarak kesme zorunluluğu
          getiriyordu; tutarın altındaki işlemlerde kâğıt fatura kesilmeye
          devam edilebiliyordu.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu yazıda anlatılan değişiklik, e-Fatura mükellefi olma
            zorunluluğuyla ilgili değil. Konu, e-Fatura sistemine dahil
            olmayan mükelleflerin kâğıt fatura kesebileceği tutar sınırının
            tamamen kaldırılmasıyla ilgili. Yani soru &quot;e-Fatura
            mükellefi miyim?&quot; değil, &quot;kâğıt fatura kesmeye hangi
            tarihe kadar devam edebilirim?&quot; sorusu.
          </p>
        </div>
      </section>

      {/* 2. GENEL KURAL */}
      <section id="genel-kural" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Genel Kural: Tutar Sınırı Neden ve Ne Zaman Kalktı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          509 Sıra No&apos;lu Tebliğ&apos;in IV.2.4.3 bölümünün ilk hâlinde,
          kâğıt fatura kesilebilecek işlemler için yıldan yıla değişen bir
          tutar sınırı vardı; GİB bu sınırı geçmiş yıllarda birkaç kez
          düşürdü ve kapsamı genişletti. Tebliğin güncel metninde, bu kademeli
          daralmanın son adımı olarak, <strong>1/1/2026 tarihinden itibaren
          tutarına bakılmaksızın tüm faturaların</strong> GİB&apos;in e-Belge
          (e-Arşiv) Portali üzerinden düzenlenmesi hükme bağlandı. Başka bir
          deyişle, sınır kademeli olarak daralan bir eşik olmaktan çıkıp
          tamamen kalktı.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bu kural, metinde özel bir istisna sayılmadığı için, VUK
          gereği <strong>bilanço esasına göre defter tutmak zorunda olan
          tüm mükellefleri</strong> kapsıyor. Limited şirketler ve anonim
          şirketler, Türk Ticaret Kanunu ve VUK uyarınca sermaye şirketi
          oldukları için otomatik olarak bilanço esasına tabidir; yani
          şirketiniz varsa, 1 Ocak 2026 itibarıyla bu kuralın muhatabı
          zaten sizsiniz.
        </p>
      </section>

      {/* 3. 589 ERTELEME */}
      <section id="589-erteleme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. 589 Sıra No&apos;lu Tebliğ: Kimler İçin Süre Uzadı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          31 Aralık 2025 tarihli ve 33124 sayılı (5. Mükerrer) Resmî
          Gazete&apos;de yayımlanan 589 Sıra No&apos;lu VUK Genel Tebliği, bu
          genel kuralı tek bir cümlelik ama etkisi geniş bir eklemeyle
          değiştirdi. Tebliğin 1. maddesine göre, 509 Sıra No&apos;lu
          Tebliğ&apos;in IV.2.4.3 bölümündeki tarihlerin hemen ardına,{" "}
          <strong>&quot;ticari kazançları basit usulde tespit edilen
          mükellefler ile işletme hesabı esasına göre defter tutan
          mükellefler açısından&quot;</strong> ibaresiyle başlayan bir
          parantez eklendi. Bu ekleme sayesinde, yalnızca bu iki mükellef
          grubu için:
        </p>
        <ul className="mb-8 ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            Kâğıt fatura kesilebilecek dönem 31 Aralık 2025 yerine{" "}
            <strong>31 Aralık 2026&apos;ya</strong> uzatıldı,
          </li>
          <li>
            Tutar sınırı olmaksızın e-Arşiv zorunluluğunun başlangıcı 1
            Ocak 2026 yerine <strong>1 Ocak 2027&apos;ye</strong> ertelendi.
          </li>
        </ul>
        <p className="mb-8 leading-8 text-gray-700">
          Tebliğ, yayımı tarihinde (31 Aralık 2025&apos;te) yürürlüğe girdi
          ve hükümlerini Hazine ve Maliye Bakanı yürütüyor. Değişikliğin
          kapsamı gerçekten bu kadar dar: başka hiçbir mükellef grubuna, hiçbir
          tutar eşiğine veya başka bir yükümlülüğe dokunmuyor.
        </p>
        <div className="mt-4 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: &quot;Şahıs Şirketi&quot; ile &quot;İşletme
            Hesabı Esası&quot; Aynı Şey Değil
          </h3>
          <p className="leading-8 text-gray-700">
            Bazı şahıs işletmeleri de, cirosu belirli bir haddi aştığı için,
            bilanço esasına geçmek zorunda kalır ve bu durumda artık
            ertelemeden yararlanamaz. Yani &quot;ben şahıs şirketiyim, bana
            2027&apos;ye kadar dokunmaz&quot; varsayımı her zaman doğru
            değil. Belirleyici olan unvanınız (şahıs işletmesi mi, Ltd. Şti.
            mi) değil, fiilen hangi usulde (bilanço esası, işletme hesabı
            esası veya basit usul) defter tuttuğunuzdur. Bu bilgiyi en kolay
            şekilde, hesaplarınızı tutan mali müşavirinize veya güncel vergi
            levhanıza bakarak teyit edebilirsiniz.
          </p>
        </div>
      </section>

      {/* 4. HANGİ GRUP HANGİSİ */}
      <section id="hangi-grup" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Bilanço Esası mı, İşletme Hesabı mı? Hangi Grup Hangisi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hangi tarihe tabi olduğunuzu anlamak için önce hangi defter tutma
          usulüne girdiğinizi bilmeniz gerekiyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Mükellef Grubu</th>
                <th className="p-5">Tipik Örnek</th>
                <th className="p-5">Tutar Sınırsız e-Arşiv Zorunluluğu</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Bilanço esasına göre defter tutanlar</td>
                <td className="p-5">Limited şirket, anonim şirket, hadleri aşan şahıs işletmesi</td>
                <td className="p-5 font-bold text-orange-600">1 Ocak 2026 (başladı)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İşletme hesabı esasına göre defter tutanlar</td>
                <td className="p-5">Küçük/orta ölçekli şahıs işletmesi, gerçek kişi tacir</td>
                <td className="p-5 font-bold text-orange-600">1 Ocak 2027 (ertelendi)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Basit usulde vergilendirilenler</td>
                <td className="p-5">Küçük esnaf (GVK m. 46-52 şartlarını taşıyanlar)</td>
                <td className="p-5 font-bold text-orange-600">1 Ocak 2027 (ertelendi)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Kaynak: 509 ve 589 Sıra No&apos;lu VUK Genel Tebliğleri. Hangi
          mükellefin hangi usule tabi olacağına ilişkin hadler (ciro
          sınırları) her yıl yeniden değerleme oranında güncelleniyor; kendi
          durumunuzu her zaman güncel vergi levhanızdan veya mali
          müşavirinizden teyit edin.
        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Bu tip ertelemelerde en sık gözden kaçan nokta, ertelemenin bir
            &quot;muafiyet&quot; değil bir &quot;ek süre&quot; olduğudur.
            İşletme hesabı esasına göre defter tutan bir mükellef, 31 Aralık
            2026&apos;ya kadar dilerse hâlâ kâğıt fatura kesebilir; ancak bu,
            zorunlu olarak kâğıt fatura kesmesi gerektiği anlamına gelmez.
            Dileyen her mükellef, zorunluluğu beklemeden isteğe bağlı olarak
            şimdiden tamamen e-Arşiv Fatura&apos;ya geçebilir. Özellikle
            büyümeyi planlayan, ileride bilanço esasına geçecek veya şirkete
            dönüşecek şahıs işletmeleri için erken geçiş, hem muhasebe
            düzenini hem de ilerideki geçiş sürecini kolaylaştırır.
          </p>
        </div>
      </section>

      {/* 5. NE YAPMALI */}
      <section id="ne-yapmali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Şimdi Ne Yapmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Durumunuza göre izlemeniz gereken adımlar şöyle sıralanabilir:
        </p>
        <ol className="space-y-6">
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">1</span>
            <p className="leading-8 text-gray-700">
              <strong>Defter tutma usulünüzü teyit edin.</strong> Şirketseniz
              (Ltd./A.Ş.) zaten bilanço esasındasınız ve kural sizin için 1
              Ocak 2026&apos;dan beri yürürlükte. Şahıs işletmesiyseniz,
              bilanço esasına mı yoksa işletme hesabı esasına mı tabi
              olduğunuzu mali müşavirinizden veya vergi levhanızdan teyit
              edin.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">2</span>
            <p className="leading-8 text-gray-700">
              <strong>Bilanço esasındaysanız ve hâlâ kâğıt fatura
              kesiyorsanız, bu bir uyumsuzluktur.</strong> Mümkün olan en
              kısa sürede e-Arşiv Fatura uygulamasına (interaktif vergi
              dairesi şifresi, mali mühür veya özel entegratör üzerinden)
              geçin.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">3</span>
            <p className="leading-8 text-gray-700">
              <strong>İşletme hesabı/basit usuldeyseniz, 2026 boyunca eski
              kurala göre devam edebilirsiniz</strong> ama 1 Ocak 2027&apos;ye
              kadar e-Arşiv altyapınızı (özel entegratör anlaşması, muhasebe
              yazılımı entegrasyonu) hazırlamaya şimdiden başlayın.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">4</span>
            <p className="leading-8 text-gray-700">
              <strong>Yurt dışı mal/hizmet ihracı faturalarınızı
              kontrol edin.</strong> İhracat faturaları, tutar sınırından
              bağımsız olarak uzun süredir e-Arşiv Fatura olarak
              düzenlenmek zorunda; bu kural bu yazıdaki değişiklikten
              etkilenmiyor ve hâlâ geçerli.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">5</span>
            <p className="leading-8 text-gray-700">
              <strong>Muhasebe sürecinizi bütünsel değerlendirin.</strong>{" "}
              e-Arşiv geçişi tek başına teknik bir konu değil; defter tutma
              usulünüz, KDV beyannameniz ve genel mali uyumunuzla birlikte
              ele alınmalı.
            </p>
          </li>
        </ol>
      </section>

      {/* 6. CEZALAR */}
      <section id="cezalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Uymazsanız Ne Olur?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          e-Arşiv Fatura zorunluluğu olduğu hâlde kâğıt fatura düzenlemek,
          Vergi Usul Kanunu&apos;na göre hiç fatura düzenlenmemiş sayılır. Bu
          durum, VUK&apos;un 353. maddesi kapsamında <strong>özel
          usulsüzlük cezası</strong> doğurur; ayrıca karşı taraf da bu
          faturayı gider veya maliyet unsuru olarak kullanmakta risk alır.
          Cezaların güncel tutarları her yıl yeniden değerleme oranında
          değiştiği için, kesilen veya kesilmeyen her fatura için güncel
          tutarı GİB&apos;in ilgili yıl genel tebliğinden teyit etmek gerekir.
        </p>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ &quot;Şahıs şirketiyim, bana dokunmaz&quot; demeyin; belirleyici
            olan unvan değil, defter tutma usulü
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Limited/anonim şirketseniz kural zaten yürürlükte, kontrolü
            geciktirmeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ İnternette dolaşan bazı içerikler hâlâ eski tutar sınırlarını
            (2024-2025 dönemine ait) güncelmiş gibi aktarıyor; tarihe dikkat
            edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İhracat faturalarında tutar sınırı zaten yoktu, bu konu bu
            değişiklikten ayrı
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Erteleme otomatik değil bir haktır; isteyen işletme beklemeden
            e-Arşiv&apos;e geçebilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Güncel durumu her zaman ebelge.gib.gov.tr ve Resmî
            Gazete&apos;deki tebliğ metninden teyit edin
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
              href="https://www.resmigazete.gov.tr/eskiler/2025/12/20251231M5-32.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Resmî Gazete, 31 Aralık 2025, Sayı 33124 (5. Mükerrer) - Vergi
              Usul Kanunu Genel Tebliği (Sıra No: 509)&apos;nde Değişiklik
              Yapılmasına Dair Tebliğ (Sıra No: 589)
            </a>
          </li>
          <li>
            <a
              href="https://www.alomaliye.com/2019/10/19/vergi-usul-kanunu-genel-tebligi-sira-no-509/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Vergi Usul Kanunu Genel Tebliği (Sıra No: 509) - 19 Ekim 2019
              tarihli, 30923 sayılı Resmî Gazete (ana düzenleme)
            </a>
          </li>
          <li>
            <a
              href="https://ebelge.gib.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              GİB e-Belge Portalı (ebelge.gib.gov.tr)
            </a>
          </li>
          <li>
            <a
              href="https://www.gib.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gelir İdaresi Başkanlığı Resmî Web Sitesi
            </a>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 e-Fatura, e-Arşiv ve Mali Uyum Sürecinizi Birlikte Yönetelim
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketinizin veya şahıs işletmenizin hangi tarihe tabi olduğunu,
            hangi altyapıya geçmeniz gerektiğini ve genel muhasebe/vergi
            uyumunuzu birlikte değerlendirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçebilirsiniz.
            </Link>{" "}
            Şirket kuruluşunun yanı sıra kuruluş sonrası muhasebe ve mali
            danışmanlık sürecini de ayrı bir mali müşavir aramanıza gerek
            kalmadan Koray Akdağ / Sistem Global Danışmanlık olarak tek
            noktadan yürütüyoruz.
          </p>
        </div>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Limited şirketim var, kâğıt fatura kesmeye devam edebilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Limited ve anonim şirketler VUK gereği bilanço esasına
              tabidir ve bu grup için tutar sınırı olmaksızın e-Arşiv Fatura
              zorunluluğu 1 Ocak 2026 itibarıyla yürürlükte. Hâlâ kâğıt
              fatura kesiyorsanız en kısa sürede e-Arşiv&apos;e geçmeniz
              gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şahıs işletmem var, 2027&apos;ye kadar bana hiç dokunmuyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Ertelemeden yararlanmak için ticari kazancınızın basit usulde
              tespit edilmesi veya işletme hesabı esasına göre defter
              tutmanız gerekiyor. Cironuz belirli bir haddi aşıp bilanço
              esasına geçtiyseniz, ertelemeden yararlanamaz ve 1 Ocak
              2026&apos;dan beri genel kurala tabi olursunuz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              e-Arşiv Fatura ile e-Fatura aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. e-Fatura, GİB sisteminde kayıtlı mükellefler arasında
              düzenlenen bir belge türüdür ve belirli bir ciro haddini
              aşanlar için zorunludur. e-Arşiv Fatura ise hem e-Fatura
              mükelleflerinin nihai tüketiciye kestiği faturaları hem de
              e-Fatura sistemine hiç dahil olmayan mükelleflerin GİB
              portali üzerinden kestiği faturaları kapsayan daha geniş bir
              uygulamadır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              589 Sıra No&apos;lu Tebliğ hangi tarihte yürürlüğe girdi?
            </h3>
            <p className="leading-8 text-gray-700">
              Tebliğ, 31 Aralık 2025 tarihli ve 33124 sayılı (5. Mükerrer)
              Resmî Gazete&apos;de yayımlandı ve yayımı tarihinde yürürlüğe
              girdi. Tebliğin getirdiği erteleme ise geriye değil ileriye
              dönük olarak, 1 Ocak 2027 tarihine kadar geçerli.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İşletme hesabı esasına göre defter tuttuğumu nasıl anlarım?
            </h3>
            <p className="leading-8 text-gray-700">
              En güvenilir yol, mali müşavirinize sormak veya vergi
              levhanızı kontrol etmektir. Genel kural olarak sermaye
              şirketleri (Ltd./A.Ş.) her zaman bilanço esasındadır; gerçek
              kişi tacirler ise cirosu belirli bir haddin altında kaldığı
              sürece işletme hesabı esasında kalabilir, haddi aşınca
              bilanço esasına geçmek zorunda kalır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İhracat faturalarımda da tutar sınırı var mıydı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, yurt dışına yapılan mal ve hizmet ihracatında e-Arşiv
              Fatura düzenleme zorunluluğu tutar sınırına tabi değildi ve bu
              yazıdaki 589 Sıra No&apos;lu Tebliğ değişikliği bu kuralı
              etkilemiyor.
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
          e-Arşiv Fatura&apos;da tutar sınırının kaldırılması, tek bir tarihle
          değil, mükellef grubuna göre değişen iki ayrı tarihle yürürlüğe
          giriyor. Şirketseniz bu kural sizi 1 Ocak 2026&apos;dan beri
          bağlıyor ve kontrolü geciktirmemeniz gerekiyor. Şahıs işletmesiyseniz
          ve işletme hesabı esasında veya basit usuldeyseniz, 1 Ocak
          2027&apos;ye kadar hazırlanmak için zamanınız var, ama bu süreyi
          son güne bırakmamak altyapı ve muhasebe açısından daha sağlıklı
          olur.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin veya şahıs işletmenizin mevcut durumunu doğru tespit
          etmekten e-Arşiv geçiş sürecine, genel muhasebe düzeninize kadar
          Koray Akdağ / Sistem Global Danışmanlık olarak yanınızdayız. Ayrı
          bir mali müşavir firması aramanıza gerek kalmadan, hem bu tespiti
          hem de sonraki süreci tek noktadan yürütebiliriz.
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
            <h3 className="text-lg font-bold text-[#071A2F]">Asgari Kurumlar Vergisi Nedir?</h3>
          </Link>
          <Link
            href="/blog/tam-tasdik-nedir-kimler-yaptirmali-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YMM • TAM TASDİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Tam Tasdik Nedir? Kimler Yaptırmalı?</h3>
          </Link>
          <Link
            href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • KOBİ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOBİ&apos;ler İçin Vergi Danışmanlığının Önemi</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Limited şirketim var, kâğıt fatura kesmeye devam edebilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Limited ve anonim şirketler VUK gereği bilanço esasına tabidir ve bu grup için tutar sınırı olmaksızın e-Arşiv Fatura zorunluluğu 1 Ocak 2026 itibarıyla yürürlükte. Hâlâ kâğıt fatura kesiyorsanız en kısa sürede e-Arşiv'e geçmeniz gerekir."}},{"@type":"Question","name":"Şahıs işletmem var, 2027'ye kadar bana hiç dokunmuyor mu?","acceptedAnswer":{"@type":"Answer","text":"Ertelemeden yararlanmak için ticari kazancınızın basit usulde tespit edilmesi veya işletme hesabı esasına göre defter tutmanız gerekiyor. Cironuz belirli bir haddi aşıp bilanço esasına geçtiyseniz, ertelemeden yararlanamaz ve 1 Ocak 2026'dan beri genel kurala tabi olursunuz."}},{"@type":"Question","name":"e-Arşiv Fatura ile e-Fatura aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. e-Fatura, GİB sisteminde kayıtlı mükellefler arasında düzenlenen bir belge türüdür ve belirli bir ciro haddini aşanlar için zorunludur. e-Arşiv Fatura ise hem e-Fatura mükelleflerinin nihai tüketiciye kestiği faturaları hem de e-Fatura sistemine hiç dahil olmayan mükelleflerin GİB portali üzerinden kestiği faturaları kapsayan daha geniş bir uygulamadır."}},{"@type":"Question","name":"589 Sıra No'lu Tebliğ hangi tarihte yürürlüğe girdi?","acceptedAnswer":{"@type":"Answer","text":"Tebliğ, 31 Aralık 2025 tarihli ve 33124 sayılı (5. Mükerrer) Resmî Gazete'de yayımlandı ve yayımı tarihinde yürürlüğe girdi. Tebliğin getirdiği erteleme ise geriye değil ileriye dönük olarak, 1 Ocak 2027 tarihine kadar geçerli."}},{"@type":"Question","name":"İşletme hesabı esasına göre defter tuttuğumu nasıl anlarım?","acceptedAnswer":{"@type":"Answer","text":"En güvenilir yol, mali müşavirinize sormak veya vergi levhanızı kontrol etmektir. Genel kural olarak sermaye şirketleri (Ltd./A.Ş.) her zaman bilanço esasındadır; gerçek kişi tacirler ise cirosu belirli bir haddin altında kaldığı sürece işletme hesabı esasında kalabilir, haddi aşınca bilanço esasına geçmek zorunda kalır."}},{"@type":"Question","name":"İhracat faturalarımda da tutar sınırı var mıydı?","acceptedAnswer":{"@type":"Answer","text":"Hayır, yurt dışına yapılan mal ve hizmet ihracatında e-Arşiv Fatura düzenleme zorunluluğu tutar sınırına tabi değildi ve bu yazıdaki 589 Sıra No'lu Tebliğ değişikliği bu kuralı etkilemiyor."}}]}) }}
      />
    </BlogLayout>
  );
}
