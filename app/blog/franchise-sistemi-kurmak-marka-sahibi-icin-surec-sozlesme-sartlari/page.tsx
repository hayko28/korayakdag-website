import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Franchise Sistemi Nasıl Kurulur? Marka Sahibi İçin Süreç ve Sözleşme Şartları | Koray Akdağ",
  description: "Kendi işini çoğaltmak isteyen marka sahipleri için franchise sisteminin ön koşulları, franchise sözleşmesinin unsurları, Rekabet Kurumu'nun dikey anlaşma tebliği kapsamında hukuki çerçeve ve adım adım kuruluş süreciyle kapsamlı rehber.",
  keywords: [
    "franchise sistemi nasıl kurulur",
    "franchise vermek için ne gerekli",
    "franchise sözleşmesi unsurları",
    "franchise veren franchisor",
    "franchise royalty bedeli",
    "operasyon el kitabı franchise",
    "franchise rekabet kurumu tebliği",
    "franchise bayilik farkı",
    "marka franchise danışmanlığı",
    "franchise sistemine geçiş",
  ],
  alternates: {
    canonical: "/blog/franchise-sistemi-kurmak-marka-sahibi-icin-surec-sozlesme-sartlari",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Franchise Sistemi Kurmak: Marka Sahibi İçin Süreç, Sözleşme ve Danışmanlık İhtiyacı"
      description="Kendi mağazasını/şubesini tek başına çoğaltmak yerine bağımsız yatırımcılarla büyümek isteyen marka sahipleri için franchise sisteminin ön koşulları, sözleşmenin unsurları, Rekabet Kurumu'nun dikey anlaşma tebliği kapsamındaki hukuki çerçeve ve adım adım kuruluş süreciyle kapsamlı rehber."
      category="FRANCHISE SİSTEMİ • MARKA BÜYÜTME • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="franchise-sistemi-kurmak-marka-sahibi-icin-surec-sozlesme-sartlari"
      coverImage="https://images.unsplash.com/photo-1601371006911-6b69ea24127e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Franchise Sistemi Nasıl Kurulur?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Franchise, marka sahibinin (franchise veren/franchisor) kendi sermayesiyle şube açmak yerine, bağımsız yatırımcılara (franchise alan/franchisee) markasını, iş modelini ve know-how&apos;ını belirli bir bedel karşılığında kullandırarak büyüme yöntemidir.</li>
          <li>✔ Franchise verebilmek için üç ön koşul aranır: en az bir lokasyonda kârlılığı kanıtlanmış bir iş modeli, <strong>TÜRKPATENT</strong> nezdinde tescilli bir marka ve süreçleri yazıya döken bir operasyon el kitabı.</li>
          <li>✔ Türkiye&apos;de franchise sözleşmesini doğrudan düzenleyen ayrı bir kanun yok. Sözleşme, isimsiz bir sözleşme olarak <strong>Türk Borçlar Kanunu&apos;nun</strong> genel hükümlerine göre kurgulanır.</li>
          <li>✔ Franchise sözleşmeleri, Rekabet Kurumu&apos;nun <strong>2002/2 sayılı Dikey Anlaşmalara İlişkin Grup Muafiyeti Tebliği</strong> kapsamında değerlendirilir. Franchise verenin ilgili pazardaki payı <strong>%30&apos;u</strong> aşmıyorsa sözleşme otomatik grup muafiyetinden yararlanır.</li>
          <li>✔ Sözleşmenin omurgası; giriş bedeli, royalty (ciro payı), bölge münhasırlığı, süre/yenileme, eğitim-destek yükümlülükleri ve denetim/fesih maddeleridir.</li>
          <li>✔ En büyük risk, marka itibarının artık franchise verenin doğrudan kontrolünde olmayan franchise alanların performansına bağlı hale gelmesidir.</li>
          <li>✔ Franchise&apos;a geçiş, tek bir sözleşme imzalamaktan çok; iş modelinin standartlaştırılması, hukuki altyapının kurulması ve büyüme sürecinin yönetilmesini gerektiren stratejik bir danışmanlık sürecidir.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Franchise Sistemi Nedir, Nasıl İşler?
          </Link>
          <Link href="#on-kosullar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Franchise Vermenin Ön Koşulları
          </Link>
          <Link href="#sozlesme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Franchise Sözleşmesinin Unsurları
          </Link>
          <Link href="#hukuki-cerceve" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Hukuki Çerçeve: TBK ve Rekabet Kurumu
          </Link>
          <Link href="#riskler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Riskler ve Dikkat Noktaları
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Kimler İçin Uygun?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Adım Adım Franchise Sistemine Geçiş
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
          1. Franchise Sistemi Nedir, Nasıl İşler?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bir işletme belirli bir lokasyonda kârlı çalışmaya başladığında,
          sahibinin önünde iki büyüme yolu vardır. Birincisi kendi sermayesi
          ve kendi ekibiyle yeni şubeler açmaktır. Bu yöntem, sermaye ve
          operasyonel yönetim yükünün tamamen marka sahibinin üzerinde
          kalmasını gerektirir ve büyüme hızı, marka sahibinin erişebildiği
          sermayeyle sınırlı kalır. İkinci yol ise franchise sistemidir.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Franchise sisteminde marka sahibi (franchise veren/franchisor),
          kanıtlanmış iş modelini, markasını ve know-how&apos;ını bağımsız
          yatırımcılara (franchise alan/franchisee) belirli bir bedel
          karşılığında kullandırır. Yeni şubeyi açan taraf artık marka sahibi
          değil, kendi sermayesini ve emeğini koyan bağımsız bir
          girişimcidir. Marka sahibi ise karşılığında giriş bedeli ve
          düzenli bir royalty (ciro payı) alır, buna karşılık markanın
          standartlarına uyulmasını denetleme ve eğitim/destek sağlama
          yükümlülüğü üstlenir.
        </p>
        <p className="leading-8 text-gray-700">
          Bu yapının cazibesi açık: marka sahibi, kendi sermayesini
          büyütmeden, franchise alanın sermayesi ve yerel pazar bilgisiyle
          çok daha hızlı yayılabilir. Ancak karşılığında, markanın
          itibarını artık doğrudan yönetemediği bağımsız işletmecilerin
          performansına emanet eder. Bu değiş tokuşun doğru kurgulanması,
          franchise sisteminin başarısını belirleyen en kritik unsurdur.
        </p>
      </section>

      {/* 2. ÖN KOŞULLAR */}
      <section id="on-kosullar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Franchise Vermenin Ön Koşulları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Her kârlı işletme franchise verebilecek durumda değildir.
          Franchise modeli, işin bir kişiye değil bir sisteme bağlı olmasını
          gerektirir. Bir marka sahibinin franchise vermeye başlamadan önce
          karşılaması gereken dört temel koşul var:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📈 Kanıtlanmış ve Kârlı Bir İş Modeli</h3>
            <p className="text-gray-700">İşin, sahibinin kişisel varlığı olmadan da benzer sonuçları verebildiğinin en az bir lokasyonda somut mali verilerle kanıtlanmış olması gerekir. Franchise alan yatırımını yaparken bu verilere bakarak karar verir.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">®️ Tescilli Marka</h3>
            <p className="text-gray-700">Franchise sisteminin devredilecek en değerli varlığı markadır. Tescilsiz bir marka üzerinden franchise vermek, franchise alanın yatırımını hukuken korumasız bırakır.{" "}
              <Link href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi" className="text-orange-600 underline">
                TÜRKPATENT nezdinde marka tescili
              </Link>{" "}
              franchise sisteminin ön şartıdır.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📘 Operasyon El Kitabı</h3>
            <p className="text-gray-700">Tedarik, servis standardı, fiyatlandırma, personel eğitimi, görsel kimlik gibi tüm süreçlerin yazılı, standartlaştırılmış bir el kitabında toplanmış olması gerekir. El kitabı olmadan franchise, sadece bir isim kiralamaya dönüşür.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🏪 Pilot Mağaza Deneyimi</h3>
            <p className="text-gray-700">İdeal olarak sistemin, marka sahibinin doğrudan işlettiği en az bir pilot lokasyonda test edilmiş, aksayan noktaların düzeltilmiş olması beklenir. Pilot deneyim olmadan franchise alan, denenmemiş bir modelin riskini üstlenir.</p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, marka sahiplerinin
            &quot;markam biliniyor, franchise verebilirim&quot; düşüncesiyle
            operasyon el kitabını atlayarak doğrudan sözleşme aşamasına
            geçmesidir. Oysa franchise alanın satın aldığı şey markanın adı
            değil, o markanın tekrar edilebilir başarı formülüdür. El kitabı
            eksikse, her şube kendi yorumuyla iş yapmaya başlar ve marka
            standardı kısa sürede eriyerek asıl değeri, yani markanın
            güvenilirliğini zayıflatır.
          </p>
        </div>
      </section>

      {/* 3. SÖZLEŞME */}
      <section id="sozlesme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Franchise Sözleşmesinin Unsurları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Franchise sözleşmesi, taraflar arasındaki ilişkinin tamamını
          çerçeveleyen ana belgedir. Aşağıdaki unsurların hiçbiri kanunen
          zorunlu bir liste olmasa da, sağlam bir franchise sözleşmesinde
          bulunması beklenir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Unsur</th>
                <th className="p-5">İçeriği</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Franchise (Giriş) Bedeli</td>
                <td className="p-5">Franchise alanın sisteme dahil olmak, markayı ve know-how&apos;ı kullanma hakkını elde etmek için başlangıçta ödediği tek seferlik bedel.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Royalty (Ciro Payı)</td>
                <td className="p-5">Franchise alanın, şubenin aylık/periyodik cirosu üzerinden franchise verene ödediği düzenli pay. Genellikle sabit oranlı bir yüzde olarak belirlenir.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Bölge/Lokasyon Münhasırlığı</td>
                <td className="p-5">Franchise alana tanınan bölgede, franchise verenin veya başka bir franchise alanın aynı markayla rakip şube açıp açamayacağı.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Süre ve Yenileme Şartları</td>
                <td className="p-5">Sözleşmenin kaç yıl için kurulduğu, sürenin sonunda hangi şartlarda (performans kriteri, ek bedel gibi) yenilenebileceği.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Eğitim ve Destek Yükümlülükleri</td>
                <td className="p-5">Franchise verenin açılış öncesi ve sonrasında sunacağı personel eğitimi, pazarlama desteği ve operasyonel danışmanlığın kapsamı.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Marka Standartlarına Uyum Denetimi</td>
                <td className="p-5">Franchise verenin şubeyi hangi sıklıkla, hangi kriterlere göre denetleyeceği ve standart dışı uygulamalarda hangi yaptırımların devreye gireceği.</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Fesih ve Rekabet Yasağı</td>
                <td className="p-5">Sözleşmenin hangi hallerde feshedilebileceği, fesih sonrası franchise alanın markayı kullanmayı kesme süresi ve belirli bir süre/bölgede rakip iş kurma yasağı.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Franchise ile Bayilik/Distribütörlük Farkı
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Bayilik/Distribütörlük:</strong> Taraf, marka sahibinin ürününü kendi adına satar ama işletme modelini, görsel kimliği ve operasyon standartlarını devralmaz. İlişki büyük ölçüde alım-satım/tedarik ilişkisidir.</li>
            <li><strong>Franchise:</strong> Franchise alan, sadece ürünü değil; markanın adını, görsel kimliğini, operasyon el kitabını, eğitim sistemini ve iş yapış biçiminin tamamını devralır. Marka sahibi, bayilikte olmayan bir denetim ve standart uyum hakkına sahiptir.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Bu ayrım, hem sözleşmenin nasıl kurgulanacağını hem de tarafların
            birbirine karşı yükümlülüklerinin kapsamını belirlediği için
            baştan netleştirilmesi gereken bir konudur.
          </p>
        </div>
      </section>

      {/* 4. HUKUKİ ÇERÇEVE */}
      <section id="hukuki-cerceve" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Hukuki Çerçeve: TBK ve Rekabet Kurumu&apos;nun Bakışı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de franchise sözleşmesini doğrudan düzenleyen ayrı bir
          kanun bulunmuyor. Franchise, hukuken <strong>isimsiz (atipik) bir
          sözleşme</strong> olarak kabul edilir ve <strong>Türk Borçlar
          Kanunu&apos;nun (TBK)</strong> genel hükümleri, sözleşme serbestisi
          ilkesi çerçevesinde şekillenir. Taraflar tacir sıfatına sahipse,
          ilişkinin ticari niteliği gereği Türk Ticaret Kanunu&apos;ndaki
          ticari hükümler ve ticari teamüller de yorumda devreye girer.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Sözleşmeye doğrudan bir kanun uygulanmasa da, franchise
          anlaşmaları rekabet hukuku açısından denetime tabidir. Rekabet
          Kurumu, franchise sözleşmelerini <strong>dikey anlaşma</strong>{" "}
          olarak sınıflandırır ve bu anlaşmaları <strong>2002/2 sayılı
          Dikey Anlaşmalara İlişkin Grup Muafiyeti Tebliği</strong> kapsamında
          değerlendirir. Tebliğ, malların/hizmetlerin dağıtımında kullanılan
          marka, işaret gibi fikri haklara ilişkin lisanslar ile know-how
          içeren, karşılığında franchise ücreti ödenen anlaşmaları açıkça bu
          kapsamda görür.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Konu</th>
                <th className="p-5">Güncel Durum</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Pazar payı eşiği</td>
                <td className="p-5">Franchise verenin ilgili pazardaki payı <strong>%30&apos;u</strong> aşmıyorsa sözleşme otomatik grup muafiyetinden yararlanır (2021/4 sayılı Tebliğ ile %40&apos;tan %30&apos;a indirildi, RG: 05.11.2021/31650).</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Pazar payı sonradan aşılırsa</td>
                <td className="p-5">Başlangıçta %30&apos;un altındaysa ve sonradan aşarsa muafiyet 2 yıl daha devam eder; başlangıçta zaten aşkınsa muafiyet süresi 1 yıldır.</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Rekabet etmeme yükümlülüğü</td>
                <td className="p-5">Franchise alanın süresiz veya 5 yılı aşan bir rekabet etmeme yükümlülüğü altına sokulması, grup muafiyetinin dışına çıkar ve ayrı bir bireysel değerlendirme gerektirir.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Küçük ve orta ölçekli çoğu marka için pazar payı eşiği pratikte
            sorun oluşturmaz, çünkü franchise verenin ilgili ürün/hizmet
            pazarındaki payı genellikle %30&apos;un çok altında kalır. Asıl
            gözden kaçan nokta, sözleşmeye konulan bölge münhasırlığı ve
            rekabet yasağı maddelerinin süresinin doğru kurgulanmasıdır.
            Fesih sonrası rekabet yasağının makul bir süre ve coğrafi alanla
            sınırlı tutulmaması, hem grup muafiyeti açısından risk yaratır
            hem de sözleşmenin genel hükümler çerçevesinde geçersiz
            sayılması ihtimalini doğurur.
          </p>
        </div>
      </section>

      {/* 5. RİSKLER */}
      <section id="riskler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Franchise Vermenin Riskleri ve Dikkat Noktaları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Franchise sistemi hızlı büyüme sağlar, ancak marka sahibinin
          kontrolü kısmen bıraktığı bir modeldir. Uygulamada en sık
          karşılaşılan riskler şunlar:
        </p>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li><strong>Marka itibarının franchise alana bağlı hale gelmesi:</strong> Tek bir şubede yaşanan hizmet sorunu, sosyal medya çağında tüm markanın itibarını etkileyebilir. Marka sahibi, artık her şubeyi doğrudan yönetmediği için bu riski sadece denetim mekanizmalarıyla sınırlayabilir.</li>
            <li><strong>Standart kontrolünün zorluğu:</strong> Şube sayısı arttıkça, her lokasyonun operasyon el kitabına ne ölçüde uyduğunu düzenli denetlemek operasyonel bir yük haline gelir. Denetim mekanizması sözleşmede net tanımlanmamışsa standart hızla erir.</li>
            <li><strong>Sözleşmede eksik bırakılan maddeler:</strong> Bölge münhasırlığının sınırları, franchise alanın şubeyi üçüncü bir kişiye devretme hakkı, fesih sonrası ekipman/malzemenin ne olacağı gibi konular baştan yazılmazsa, ilişki bozulduğunda büyük ihtilaf kaynağı olur.</li>
            <li><strong>Franchise alanın seçim kriterlerinin belirsizliği:</strong> Sadece giriş bedelini ödeyebilen değil, markanın kültürüne ve standardına uyum sağlayabilecek franchise alanların seçilmesi, sistemin uzun vadeli sağlığı için kritiktir.</li>
          </ul>
        </div>
      </section>

      {/* 6. KİMLER İÇİN UYGUN */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Kimler İçin Uygun?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🚀 Franchise Vermeye Uygun Marka Sahipleri
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Kafe, restoran, perakende veya hizmet sektöründe en az bir lokasyonda kârlılığı kanıtlanmış markası olan işletme sahipleri</li>
              <li>✔ Kendi sermayesini büyütmeden, bağımsız yatırımcıların sermayesiyle şube sayısını artırmak isteyenler</li>
              <li>✔ Süreçlerini standartlaştırmış, marka kimliğini tescillemiş ve operasyonunu yazılı hale getirmiş işletmeler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              ⏸️ Henüz Erken Olabilecek Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Tek lokasyonun kârlılığı henüz istikrar kazanmamış, sahibinin kişisel becerisine bağlı işletmeler</li>
              <li>✔ Marka tescili tamamlanmamış veya operasyon süreçleri hâlâ sözlü/kişiye bağlı yürüyen işletmeler</li>
              <li>✔ Sadece ürün satışını genişletmek isteyip, işletme modelinin tamamını devretmeyi düşünmeyenler (bu durumda bayilik/distribütörlük daha uygun bir model olabilir)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Adım Adım Franchise Sistemine Geçiş
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📊</div>
            <h3 className="text-base font-bold">1. İş Modelinin Kanıtlanması</h3>
            <p className="mt-2 text-sm text-gray-600">Pilot lokasyonun mali verilerle kârlılığının doğrulanması, tekrarlanabilirliğinin test edilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">®️</div>
            <h3 className="text-base font-bold">2. Marka Tescili</h3>
            <p className="mt-2 text-sm text-gray-600">TÜRKPATENT nezdinde marka tescilinin tamamlanması, görsel kimliğin korunması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📘</div>
            <h3 className="text-base font-bold">3. Operasyon El Kitabının Yazılması</h3>
            <p className="mt-2 text-sm text-gray-600">Tedarik, servis, personel eğitimi ve denetim standartlarının belgelenmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">✍️</div>
            <h3 className="text-base font-bold">4. Sözleşmenin Hazırlanması</h3>
            <p className="mt-2 text-sm text-gray-600">Giriş bedeli, royalty, bölge münhasırlığı, denetim ve fesih maddelerinin kurgulanması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="text-base font-bold">5. Franchise Alan Seçimi ve Açılış</h3>
            <p className="mt-2 text-sm text-gray-600">Uygun yatırımcının seçilmesi, eğitim verilmesi ve şubenin standartlara uygun açılması</p>
          </div>
        </div>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Marka tescili tamamlanmadan franchise vermek, franchise alanın yatırımını hukuken korumasız bırakır; tescil süreci sözleşmeden önce başlatılmalı.</li>
            <li>Operasyon el kitabı olmadan imzalanan bir franchise sözleşmesi, uygulamada sadece isim kiralamaya dönüşür ve standart hızla erir.</li>
            <li>Rekabet yasağı ve bölge münhasırlığı maddelerinin süresi ve kapsamı, Rekabet Kurumu&apos;nun grup muafiyeti şartlarıyla (özellikle 5 yıllık rekabet etmeme sınırı) uyumlu kurgulanmalı.</li>
            <li>Fesih sonrası markanın kullanımının kesilmesi, tabela/ekipman değişikliği gibi pratik konular sözleşmede net süre ve yaptırımla tanımlanmalı.</li>
            <li>Franchise alan seçiminde sadece giriş bedelini ödeme gücüne değil, markanın kültürüne uyum kapasitesine de bakılmalı; yanlış seçim, marka itibarına doğrudan zarar verir.</li>
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
              <a
                href="https://www.rekabet.gov.tr/Dosya/tebligler/2002-2-sayili-teblig-(2021-4-degisiklikleri-islenmis)-20211108175938391-pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Dikey Anlaşmalara İlişkin Grup Muafiyeti Tebliği (Tebliğ No: 2002/2, güncel değişiklikler işlenmiş hâli) - Rekabet Kurumu
              </a>
            </li>
            <li>
              <a
                href="https://www.resmigazete.gov.tr/eskiler/2021/11/20211105-12.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                2021/4 Sayılı Tebliğ - Pazar Payı Eşiğinin %30&apos;a İndirilmesi (RG: 05.11.2021, Sayı: 31650)
              </a>
            </li>
            <li>
              <a
                href="https://www.rekabet.gov.tr/Dosya/dikey-anlasmalara-iliskin-kilavuz-20220623145035448.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Dikey Anlaşmalara İlişkin Kılavuz - Rekabet Kurumu
              </a>
            </li>
            <li>
              <a
                href="https://www.rekabet.gov.tr/tr/Sayfa/yayinlar/rekabet-terimleri-sozlugu/terimler-listesi?icerik=269281e8-757c-4d46-a441-218dd5288521"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Franchise Anlaşması Tanımı - Rekabet Terimleri Sözlüğü, Rekabet Kurumu
              </a>
            </li>
            <li>
              <a
                href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6098.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                6098 Sayılı Türk Borçlar Kanunu - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a
                href="https://www.turkpatent.gov.tr/marka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Marka Tescili Bilgilendirme Sayfası - TÜRKPATENT
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
              Franchise vermek için markamı tescillemem şart mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Franchise sisteminde franchise alanın satın aldığı ana
              varlık markadır. Tescilsiz bir marka üzerinden franchise
              verilirse, franchise alanın yatırımı hukuken korumasız kalır
              ve marka sahibi de kendi markasının başkaları tarafından
              kullanılmasını engelleyemeyebilir. TÜRKPATENT nezdinde tescil,
              franchise vermenin ön şartıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Franchise ile bayilik arasındaki temel fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Bayilikte taraf sadece ürünü kendi adına satar, işletme
              modelini devralmaz. Franchise&apos;da ise franchise alan;
              markanın adını, görsel kimliğini, operasyon standartlarını ve
              eğitim sistemini bir bütün olarak devralır, buna karşılık
              marka sahibinin denetimine tabi olur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Franchise sözleşmesi için ayrı bir kanun var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Türkiye&apos;de franchise&apos;ı doğrudan düzenleyen
              ayrı bir kanun bulunmuyor. Sözleşme, isimsiz bir sözleşme
              olarak Türk Borçlar Kanunu&apos;nun genel hükümlerine göre
              taraflarca serbestçe kurgulanır; rekabet hukuku açısından ise
              Rekabet Kurumu&apos;nun dikey anlaşma tebliği kapsamında
              değerlendirilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Her franchise sözleşmesi Rekabet Kurumu&apos;na bildirilmek zorunda mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Franchise verenin ilgili pazardaki payı %30&apos;u
              aşmadığı sürece sözleşme otomatik olarak grup muafiyetinden
              yararlanır ve ayrı bir bildirim/izin süreci gerekmez. Küçük ve
              orta ölçekli çoğu marka için bu eşik pratikte sorun
              oluşturmaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Royalty (ciro payı) oranı nasıl belirlenir?
            </h3>
            <p className="leading-8 text-gray-700">
              Royalty oranı için sabit bir yasal düzenleme yok; oran,
              sektöre, markanın verdiği desteğin kapsamına ve pazardaki
              rekabet koşullarına göre taraflar arasında serbestçe
              belirlenir. Önemli olan, oranın franchise alan için sürdürülebilir
              bir kâr marjı bırakacak şekilde, gerçekçi ciro projeksiyonlarına
              dayanarak kurgulanmasıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Franchise sözleşmesi feshedilirse franchise alan markayı kullanmaya devam edebilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, ancak bu, sözleşmede ne kadar net yazıldığına bağlıdır.
              İyi kurgulanmış bir franchise sözleşmesi, fesih sonrası
              markanın kullanımının hangi sürede kesileceğini, tabela ve
              görsel unsurların ne zaman kaldırılacağını ve rekabet
              yasağının kapsamını açıkça tanımlar. Bu maddeler eksikse,
              fesih sonrası süreç ihtilaflı hale gelir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Markanızın Franchise&apos;a Hazır Olup Olmadığını Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            İster kafe/restoran zincirinizi, ister perakende veya hizmet
            markanızı bağımsız yatırımcılarla büyütmeyi düşünüyor olun;
            franchise sistemine geçiş, operasyon el kitabının hazırlanmasından
            sözleşmenin kurgulanmasına kadar özenli bir planlama gerektirir.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Stratejik İş Ortaklıkları danışmanlığı kapsamında markanızın
              franchise sistemine geçiş sürecini birlikte planlamamız için
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
          Franchise sistemi, kanıtlanmış bir iş modelini kendi sermayesini
          büyütmeden çoğaltmak isteyen marka sahipleri için güçlü bir büyüme
          aracı. Ama bu gücün karşılığı, marka itibarının artık doğrudan
          kontrol edilemeyen bağımsız işletmecilerin performansına bağlı
          hale gelmesidir. Tescilli bir marka, yazılı bir operasyon el
          kitabı ve sözleşmede eksiksiz kurgulanmış bedel, denetim, fesih ve
          rekabet yasağı maddeleri, bu riski yönetilebilir hale getiren
          temel unsurlardır.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, Stratejik İş
          Ortaklıkları birimi kapsamında markanızın franchise&apos;a
          hazırlık sürecinden sözleşme kurgusuna, sistemin kurulmasından
          sonrasındaki muhasebe ve uyum yükümlülüklerine kadar tek noktadan
          yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">MARKA VE PATENT • FİKRİ MÜLKİYET • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Marka Tescili ve Patent Başvurusu: KOBİ&apos;ler İçin Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/aile-sirketinden-kurumsal-yapiya-gecis-kurumsallasma"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KURUMSAL GELİŞİM • KURUMSALLAŞMA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Kurumsallaşma: Aile Şirketinden Kurumsal Yapıya Geçiş Süreci Nasıl Yönetilir?</h3>
          </Link>
          <Link
            href="/blog/stratejik-is-ortakligi-ortak-girisim-joint-venture-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">STRATEJİK İŞ ORTAKLIKLARI • ORTAK GİRİŞİM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Stratejik İş Ortaklığı ve Ortak Girişim (Joint Venture) Modelleri Nasıl Kurulur?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
