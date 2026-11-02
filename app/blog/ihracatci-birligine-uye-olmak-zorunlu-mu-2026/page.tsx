import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "İhracatçı Birliğine Üye Olmak Zorunlu mu? 2026 Kayıt, Aidat ve Gümrük Onayı Rehberi | Koray Akdağ",
  description:
    "5910 sayılı Kanun'a göre ihracat yapan her şirket için birlik üyeliği zorunlu. Hangi birliğe üye olunur, üyelik nasıl başvurulur, giriş aidatı ve yıllık aidat ne kadar, üye olmazsanız gümrükte ne olur? 2026 güncel rehber.",
  keywords: [
    "ihracatçı birliğine üye olmak zorunlu mu",
    "ihracatçı birliği üyeliği",
    "ihracatçı birliği aidatı",
    "5910 sayılı kanun",
    "TİM üyelik",
    "ihracatçı birliği nasıl üye olunur",
    "ihracat yapmak için birliğe üye olmak",
    "ihracatçı birliği giriş aidatı",
  ],
  alternates: {
    canonical: "/blog/ihracatci-birligine-uye-olmak-zorunlu-mu-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İhracatçı Birliğine Üye Olmak Zorunlu mu? Kayıt, Aidat ve Gümrük Onayı Rehberi"
      description="İlk kez ihracata başlayan şirketlerin en çok karıştırdığı konulardan biri: ihracatçı birliği üyeliği gerçekten zorunlu mu, hangi birliğe üye olunur, ne kadar aidat ödenir ve üye olmazsanız gümrükte başınıza ne gelir? 5910 sayılı Kanun ve ilgili yönetmeliğe dayanan 2026 güncel rehber."
      category="İHRACAT DESTEKLERİ • İHRACATÇI BİRLİĞİ ÜYELİĞİ • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="ihracatci-birligine-uye-olmak-zorunlu-mu-2026"
      coverImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <p className="mb-6 text-lg leading-9 text-gray-700">
        İlk ihracat siparişini alan bir şirket sahibi genellikle gümrük
        müşavirinden veya bankasından şu cümleyi duyar: &quot;Önce birliğe üye
        olmanız lazım.&quot; Bu noktada akla hemen soru geliyor: Bu üyelik
        gerçekten zorunlu mu, yoksa bir oda veya dernek üyeliği gibi isteğe
        bağlı bir şey mi? Hangi birliğe üye olunacağı nasıl belirleniyor, ne
        kadar aidat ödeniyor ve üye olmadan ihracat yapmaya çalışırsa ne
        olur? Bu yazıda 5910 sayılı Kanun ve ilgili yönetmeliğe dayanarak bu
        soruların tamamını netleştiriyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="mb-16 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>
            ✔ Evet, zorunlu. 5910 sayılı Kanun&apos;un 4. maddesi, ihracat
            yapan her gerçek/tüzel kişinin ilgili ihracatçı birliğine üye
            olmasını açıkça şart koşar.
          </li>
          <li>
            ✔ Üye olunacak birlik, ihraç edilecek ürünün sektörü ve
            şirketin ticaret sicilindeki adresine göre otomatik olarak
            belirlenir; serbest seçim söz konusu değildir.
          </li>
          <li>
            ✔ Tek bir birliğe üye olmak yeterlidir; o birlik üzerinden
            diğer sektörlerin ürünlerini de üyelik şartı aranmaksızın ihraç
            edebilirsiniz.
          </li>
          <li>
            ✔ Üye olmadan gümrük beyannamesi onaylanmaz, dolayısıyla fiilen
            ihracat yapılamaz.
          </li>
          <li>
            ✔ Üyelik giriş aidatı + yıllık aidat (2026&apos;da kanuni tavanı
            16.515 TL) ve ihracat gerçekleştikçe tahsil edilen binde bire
            kadar &quot;nispi ödeme&quot;den oluşur.
          </li>
          <li>
            ✔ Eximbank kredisi, UR-GE, TURQUALITY ve DYS üzerinden yapılan
            Ticaret Bakanlığı destek başvuruları da birlik üyeliğini zorunlu
            kılan işlemler arasındadır.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mb-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. İhracatçı Birliği Nedir?
          </Link>
          <Link href="#zorunluluk" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Üyelik Gerçekten Zorunlu mu?
          </Link>
          <Link href="#hangi-birlik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Hangi Birliğe Üye Olunur?
          </Link>
          <Link href="#basvuru" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Üyelik Başvurusu Nasıl Yapılır?
          </Link>
          <Link href="#aidat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Aidatlar ve Ödemeler
          </Link>
          <Link href="#uye-olmazsa" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Üye Olmazsanız Ne Olur?
          </Link>
          <Link href="#nerede-gerekir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Hangi Destek ve İşlemlerde Şart Koşuluyor?
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-20 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. İhracatçı Birliği Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          İhracatçı birlikleri, 5910 sayılı Türkiye İhracatçılar Meclisi ile
          İhracatçı Birliklerinin Kuruluş ve Görevleri Hakkında Kanun ile
          kurulmuş, özel bütçeye ve kamu tüzel kişiliğine sahip meslek
          kuruluşlarıdır. Amaçları ihracatçıları örgütlendirmek, sektörel
          sorunların çözümüne destek olmak ve dış ticaretin ülke menfaatine
          uygun biçimde gelişmesine katkı sağlamaktır. Türkiye genelinde
          sektör ve bölge esasına göre kurulmuş çok sayıda birlik vardır;
          bunların tamamının çatı kuruluşu ise İstanbul merkezli Türkiye
          İhracatçılar Meclisi (TİM) &apos;dir.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bir ticaret odası veya sanayi odası üyeliğinden farklı olarak
          ihracatçı birliği üyeliği, yalnızca fiilen ihracat yapan veya
          yapmayı planlayan şirketleri ilgilendirir. İthalat yapan, yalnızca
          yurt içinde satış yapan veya hizmet veren şirketlerin birlik
          üyeliği zorunluluğu bulunmaz; zorunluluk doğrudan ihracat
          işlemiyle birlikte devreye girer.
        </p>
      </section>

      {/* 2. ZORUNLULUK */}
      <section id="zorunluluk" className="mt-20 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Üyelik Gerçekten Zorunlu mu?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Evet. Bu konuda yorum veya uygulama farkına yer bırakmayan, açık
          bir kanun hükmü vardır. 5910 sayılı Kanun&apos;un 4. maddesinin
          birinci fıkrası şöyledir:
        </p>
        <div className="my-8 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <p className="text-lg italic leading-8 text-gray-800">
            &quot;İhracatçıların ilgili birliğe üye olmaları ve kanunda
            belirtilen ödemeleri yapmaları zorunludur. Birliklerden birine
            üye olan ihracatçı, diğer birliklerin iştigal alanına giren
            maddeleri üyelik şartı aranmaksızın ihraç edebilir.&quot;
          </p>
          <p className="mt-4 text-sm text-gray-600">
            5910 sayılı Kanun, Madde 4/1
          </p>
        </div>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bu hüküm, Türkiye İhracatçılar Meclisi ile İhracatçı Birliklerinin
          Kuruluş ve Görevleri Hakkında Yönetmelik&apos;in 6. maddesinde daha
          somut hale getirilmiştir: ihracat yapacak gerçek veya tüzel
          kişilerin, ihraç edecekleri malın ait olduğu sektörde faaliyet
          gösteren ve ticaret sicilinde kayıtlı merkez veya şube adreslerinin
          bulunduğu en yakın birliğe üye olmaları zorunludur. Yani üyelik,
          isteğe bağlı bir meslek örgütü üyeliği değil, ihracat yapabilmenin
          önkoşuludur.
        </p>

        <div className="my-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🚫 Karıştırmayın: &quot;Üyelik Zorunluluğu&quot; ile &quot;Genel
            Kurula Katılma Hakkı&quot; Aynı Şey Değil
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Birçok ihracatçı, internette karşılaştığı &quot;20.000 ABD
            Doları&quot; şartını üyeliğin kendisiyle karıştırıyor. Oysa bu
            tutar, yönetmeliğin 8. maddesinde düzenlenen tamamen farklı bir
            konuyla ilgili: birliğin genel kuruluna katılma ve oy kullanma
            hakkı. Yeni kurulan birlikler hariç olmak üzere, son iki takvim
            yılı boyunca üye olan ve bu süre içinde üyesi olduğu birlik
            üzerinden 20.000 ABD Doları (dahil) üzerinde fiili ihracat
            yapan üyeler genel kurula katılabilir.
          </p>
          <p className="leading-8 text-gray-700">
            <strong>Üyelik zorunluluğunun</strong> kendisinde böyle bir alt
            sınır yoktur: 1 dolarlık ihracat yapacak bir şirket de birliğe
            üye olmak zorundadır. 20.000 dolarlık eşik yalnızca birliğin iç
            yönetimine (oy hakkı, delege seçimi) katılım için aranır.
          </p>
        </div>
      </section>

      {/* 3. HANGİ BİRLİĞE ÜYE OLUNUR */}
      <section id="hangi-birlik" className="mt-20 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Hangi Birliğe Üye Olunur?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Üye olunacak birlik, şirketin kendi tercihine bırakılmış değildir.
          Yönetmeliğin 6. maddesine göre iki kriter belirleyicidir:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              1️⃣ Ürünün Sektörü
            </h3>
            <p className="leading-8 text-gray-700">
              İhraç edilecek malın ait olduğu sektörde faaliyet gösteren
              birlik (örneğin tekstil ürünü ihraç eden bir şirket tekstil
              sektöründeki birliğe, makine ihraç eden bir şirket ise makine
              sektöründeki birliğe üye olur).
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              2️⃣ Ticaret Sicili Adresi
            </h3>
            <p className="leading-8 text-gray-700">
              Şirketin ticaret sicilinde kayıtlı merkez veya şube
              adresinin bulunduğu ile en yakın (ilgili) birlik. Bölgesel
              birlikler İstanbul, Ege, Akdeniz, Uludağ, Karadeniz, Denizli,
              Doğu Anadolu ve Güneydoğu Anadolu gibi bölgelere göre
              yapılanmıştır.
            </p>
          </div>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Pratikte bu, şirketin sektörü ve adresine göre otomatik olarak
          tek bir doğru birliğe yönlendirildiği anlamına gelir. Birden fazla
          ürün grubunda ihracat yapan şirketlerin de telaşlanmasına gerek
          yok: Kanun&apos;un 4. maddesi gereği, birliklerden birine üye olan
          ihracatçı, diğer birliklerin iştigal alanına giren ürünleri de
          ayrıca üye olmaya gerek kalmadan ihraç edebilir. Yani tek üyelik
          yeterlidir, her ürün grubu için ayrı bir birliğe kayıt
          zorunluluğu yoktur.
        </p>
      </section>

      {/* 4. BAŞVURU */}
      <section id="basvuru" className="mt-20 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Üyelik Başvurusu Nasıl Yapılır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Üyelik başvurusu, ilgili ihracatçı birliğinin genel sekreterliğine
          veya birliğin elektronik üyelik sistemine (e-Birlik) yapılır.
          Süreç genellikle aşağıdaki adımlardan oluşur:
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🏢</div>
            <h3 className="text-base font-bold">1. İlgili Birliğin Belirlenmesi</h3>
            <p className="mt-2 text-sm text-gray-600">
              Faaliyet alanı (NACE/ürün) ve ticaret sicili adresine göre
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📄</div>
            <h3 className="text-base font-bold">2. Belgelerin Hazırlanması</h3>
            <p className="mt-2 text-sm text-gray-600">
              Ticaret sicil gazetesi, imza sirküleri, vergi levhası, üyelik
              formu
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💻</div>
            <h3 className="text-base font-bold">3. Başvurunun Yapılması</h3>
            <p className="mt-2 text-sm text-gray-600">
              Birliğin genel sekreterliğine veya e-Birlik üzerinden
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">✅</div>
            <h3 className="text-base font-bold">4. Giriş Aidatının Ödenmesi</h3>
            <p className="mt-2 text-sm text-gray-600">
              Üyelik, aidat tahsilatıyla birlikte aktif hale gelir
            </p>
          </div>
        </div>
        <p className="mt-10 text-lg leading-9 text-gray-700">
          Üyelik süreci genellikle birkaç iş günü içinde tamamlanır. Önemli
          olan, ihracat beyannamesi düzenlenmeden önce üyeliğin aktif hale
          gelmesidir; aksi halde beyanname gümrükte onaylanmaz (bkz. Bölüm
          6).
        </p>
      </section>

      {/* 5. AİDATLAR */}
      <section id="aidat" className="mt-20 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Aidatlar ve Ödemeler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kanun&apos;un 18. maddesi, birliklerin gelirlerini dört kalemde
          sayar: giriş aidatı, yıllık aidat, nispi ödeme ve diğer gelirler.
          İhracatçı açısından asıl önemli olan ilk üç kalemdir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Ödeme Kalemi</th>
                <th className="p-5">Ne Zaman Alınır</th>
                <th className="p-5">Kanuni Üst Sınır (2026)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Giriş Aidatı</td>
                <td className="p-5">Üyeliğin ilk kurulduğu anda, bir kez</td>
                <td className="p-5">
                  Brüt asgari ücretin (2026&apos;da 33.030 TL) %50&apos;si,
                  yani azami 16.515 TL
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yıllık Aidat</td>
                <td className="p-5">
                  Her yıl (giriş aidatının alındığı yıl ayrıca tahsil
                  edilmez)
                </td>
                <td className="p-5">Azami 16.515 TL</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Nispi Ödeme</td>
                <td className="p-5">Her ihracat işleminde, FOB bedel üzerinden</td>
                <td className="p-5">
                  Azami binde bir (hizmet ihracatında tahsil edilmez)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Buradaki rakamlar kanuni tavanlardır; gerçekte uygulanan tutarlar
          her birliğin kendi genel kurulunca yıllık olarak belirlenir ve
          birlikten birliğe farklılık gösterebilir. Hizmet sektörlerinde
          (yazılım, mühendislik, danışmanlık gibi hizmet ihracatı yapan
          şirketler) giriş aidatı ve yıllık aidat için ayrı bir üst sınır
          uygulanır ve ciroya göre kademelendirilir; bu şirketlerden nispi
          ödeme tahsil edilmez.
        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Yeni ihracatçıların en çok gözden kaçırdığı nokta, nispi
            ödemenin tek seferlik değil, ihracat yapıldıkça tekrarlanan bir
            yük olduğudur. Büyük hacimli, düşük kâr marjlı ürünlerde (örneğin
            emtia niteliğindeki hammaddeler) binde birlik oran küçük görünse
            de toplam ihracat tutarı büyüdükçe ciddi bir kalem haline
            gelebilir. Fiyatlandırma ve kârlılık hesaplarını yaparken bu
            kalemin sadece gümrük masrafları ve navlun değil, birlik nispi
            ödemesiyle birlikte düşünülmesi gerekir.
          </p>
        </div>
      </section>

      {/* 6. ÜYE OLMAZSA */}
      <section id="uye-olmazsa" className="mt-20 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Üye Olmazsanız Ne Olur?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Kanun, üyelik zorunluluğunu salt kâğıt üzerinde bırakmamış;
          uygulamada da işletilmesini sağlayacak bir mekanizma kurmuştur.
          Kanun&apos;un 4. maddesinin üçüncü fıkrası, gümrük idarelerince
          gümrük beyannamelerinin onaylanmasında ilgili birliğin onayının
          aranmasına ilişkin usul ve esasların Ticaret Bakanlığı tarafından
          belirlenmesini öngörür. Bunun pratikteki sonucu şudur: ihracat
          beyannameniz, üyesi olduğunuz birlik tarafından onaylanmadan
          gümrükte tescil edilmez.
        </p>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-red-700">
            ❌ Üyeliği Olmayan veya Aidat Borcu Bulunan Şirket İçin Sonuç
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>Gümrük beyannamesi birlik onayı alamaz, dolayısıyla tescil edilmez</li>
            <li>Fiilen ihracat sevkiyatı gerçekleştirilemez</li>
            <li>
              Cari yıl aidat borcu olan üyeler, genel kurula katılma ve oy
              kullanma hakkını da kaybeder
            </li>
            <li>
              Aidat ve nispi ödeme zamanında ödenmezse 6183 sayılı Amme
              Alacaklarının Tahsil Usulü Hakkında Kanun&apos;da belirlenen
              oranda gecikme zammı işletilir ve icra yoluyla tahsil edilir
            </li>
          </ul>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Bu nedenle ihracat sözleşmesi imzalamadan, hatta teklif
          aşamasından önce üyelik sürecini başlatmak, sevkiyat gününde
          sürpriz bir gecikmeyle karşılaşmamak için önemlidir. Süreç birkaç
          iş günü sürse de yoğun dönemlerde gecikmeler yaşanabilir.
        </p>
      </section>

      {/* 7. HANGİ DESTEKLERDE GEREKİR */}
      <section id="nerede-gerekir" className="mt-20 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Hangi Destek ve İşlemlerde Şart Koşuluyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gümrük beyannamesi onayının ötesinde, ihracatçı birliği üyeliği
          birçok devlet desteğine ve finansman aracına erişimin de dolaylı
          ön koşuludur. Üyelik olmadan bu işlemlerin hiçbiri fiilen
          yürütülemez:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">
              🏦 Türk Eximbank Kredileri
            </h3>
            <p className="leading-7 text-gray-700">
              Sevk Öncesi İhracat Kredisi, Reeskont Kredisi gibi ürünlerde
              fiili ihracatın belgelendirilmesi, birlik onaylı gümrük
              beyannameleri üzerinden yapılır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">
              🌍 UR-GE ve TURQUALITY
            </h3>
            <p className="leading-7 text-gray-700">
              UR-GE projelerinin işbirliği kuruluşu çoğunlukla bir
              ihracatçı birliğidir; TURQUALITY başvurusunda da ihracat
              performansı birlik kayıtlarıyla doğrulanır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">
              📋 Dolaşım ve Menşe Belgeleri
            </h3>
            <p className="leading-7 text-gray-700">
              A.TR, EUR.1 dolaşım belgeleri ve menşe şahadetnameleri
              ihracatçı birlikleri tarafından düzenlenir/onaylanır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">
              💰 Ticaret Bakanlığı İhracat Destekleri
            </h3>
            <p className="leading-7 text-gray-700">
              Pazara giriş, tanıtım, yurt dışı marka tescili gibi destekler
              DYS (Destek Yönetim Sistemi) üzerinden yürütülür ve başvuru
              kaydı birlik nezdindeki ihracatçı statüsüyle ilişkilendirilir.
            </p>
          </div>
        </div>
      </section>

      {/* RESMİ KAYNAKLAR */}
      <section className="mt-20 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-3xl font-extrabold text-[#071A2F]">
          Resmî Kaynaklar
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>
            <a
              href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.5910.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              5910 Sayılı Türkiye İhracatçılar Meclisi ile İhracatçı
              Birliklerinin Kuruluş ve Görevleri Hakkında Kanun (mevzuat.gov.tr)
            </a>
          </li>
          <li>
            <a
              href="https://immib.org.tr/files/kio/Yönetmelik2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Türkiye İhracatçılar Meclisi ile İhracatçı Birliklerinin
              Kuruluş ve Görevleri Hakkında Yönetmelik (güncel konsolide
              metin)
            </a>
          </li>
          <li>
            <a
              href="https://tim.org.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Türkiye İhracatçılar Meclisi (TİM) Resmî Sitesi
            </a>
          </li>
          <li>
            <a
              href="https://ticaret.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              T.C. Ticaret Bakanlığı
            </a>
          </li>
        </ul>
      </section>

      {/* SSS */}
      <section id="sss" className="mt-20 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İhracatçı birliğine üye olmadan ihracat yapılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Gümrük beyannamesi, ihracatçının üyesi olduğu birlik
              tarafından onaylanmadan tescil edilmez. Üyelik olmadan fiilen
              sevkiyat gerçekleştirilemez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şahıs firması da ihracatçı birliğine üye olabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Kanun &quot;ihracat yapacak gerçek veya tüzel
              kişiler&quot; ifadesini kullanır; şahıs işletmeleri de tüzel
              kişilikli şirketler gibi ilgili birliğe üye olmak zorundadır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Birden fazla ürün grubunda ihracat yapıyorsam birden fazla birliğe mi üye olmalıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bir birliğe üye olduktan sonra diğer birliklerin
              iştigal alanına giren ürünleri de üyelik şartı aranmaksızın
              ihraç edebilirsiniz. Tek üyelik yeterlidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İhracatçı birliği aidatı ne kadar?
            </h3>
            <p className="leading-8 text-gray-700">
              Giriş aidatı ve yıllık aidat, kanunen brüt asgari ücretin
              yüzde ellisini (2026&apos;da azami 16.515 TL) aşamaz. Ayrıca
              her ihracat işleminde FOB bedelin azami binde biri oranında
              nispi ödeme tahsil edilir. Kesin tutarlar her birliğin kendi
              genel kurulunca yıllık olarak belirlenir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hangi birliğe üye olacağımı nasıl öğrenirim?
            </h3>
            <p className="leading-8 text-gray-700">
              İhraç edeceğiniz ürünün sektörü ve şirketinizin ticaret
              sicilindeki adresi birlikte değerlendirilerek belirlenir.
              Hangi birliğin yetki alanına girdiğinizi netleştirmek için
              ihracat danışmanınıza veya doğrudan ilgili bölgedeki birlik
              genel sekreterliğine başvurabilirsiniz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Üyelikten istediğim zaman çıkabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, birliğe üye olan gerçek ve tüzel kişiler diledikleri
              zaman yazılı müracaatla üyelikten ayrılabilir. Ancak ayrılma
              tarihine kadar olan aidat ve nispi ödeme borçları ortadan
              kalkmaz ve ayrıca ihracat devam ediyorsa yeniden üye olunması
              gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 İhracata Başlarken Birlik Üyeliğinden Desteğe Kadar Sürecinizi Birlikte Yönetelim
          </h3>
          <p className="leading-8 text-gray-700">
            Hangi ihracatçı birliğine üye olmanız gerektiğinin
            belirlenmesinden, üyelik başvurusuna, Eximbank kredisi, UR-GE
            veya TURQUALITY gibi ihracat destekleri için şirketinizin
            uygunluğunun değerlendirilmesine kadar tüm süreci birlikte
            yönetebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              İhracat sürecinizi doğru adımlarla başlatmamız için bizimle
              iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-20 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/turk-eximbank-ihracat-kredisi-ve-alacak-sigortasi-rehberi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT FİNANSMANI • TÜRK EXIMBANK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türk Eximbank İhracat Kredisi ve Alacak Sigortası Rehberi</h3>
          </Link>
          <Link
            href="/blog/ur-ge-destegine-nasil-basvurulur-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">UR-GE • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">UR-GE Desteğine Nasıl Başvurulur? 2026 Güncel Rehber</h3>
          </Link>
          <Link
            href="/blog/gumruk-mevzuati-yetkilendirilmis-yukumlu-statusu-yys-nedir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">GÜMRÜK MEVZUATI • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Gümrük Mevzuatı ve Yetkilendirilmiş Yükümlü Statüsü (YYS) Nedir?</h3>
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
                name: "İhracatçı birliğine üye olmadan ihracat yapılabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Gümrük beyannamesi, ihracatçının üyesi olduğu birlik tarafından onaylanmadan tescil edilmez. Üyelik olmadan fiilen sevkiyat gerçekleştirilemez.",
                },
              },
              {
                "@type": "Question",
                name: "Şahıs firması da ihracatçı birliğine üye olabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Kanun ihracat yapacak gerçek veya tüzel kişiler ifadesini kullanır; şahıs işletmeleri de tüzel kişilikli şirketler gibi ilgili birliğe üye olmak zorundadır.",
                },
              },
              {
                "@type": "Question",
                name: "Birden fazla ürün grubunda ihracat yapıyorsam birden fazla birliğe mi üye olmalıyım?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Bir birliğe üye olduktan sonra diğer birliklerin iştigal alanına giren ürünleri de üyelik şartı aranmaksızın ihraç edebilirsiniz. Tek üyelik yeterlidir.",
                },
              },
              {
                "@type": "Question",
                name: "İhracatçı birliği aidatı ne kadar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Giriş aidatı ve yıllık aidat, kanunen brüt asgari ücretin yüzde ellisini (2026'da azami 16.515 TL) aşamaz. Ayrıca her ihracat işleminde FOB bedelin azami binde biri oranında nispi ödeme tahsil edilir. Kesin tutarlar her birliğin kendi genel kurulunca yıllık olarak belirlenir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi birliğe üye olacağımı nasıl öğrenirim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "İhraç edeceğiniz ürünün sektörü ve şirketinizin ticaret sicilindeki adresi birlikte değerlendirilerek belirlenir. Hangi birliğin yetki alanına girdiğinizi netleştirmek için ihracat danışmanınıza veya doğrudan ilgili bölgedeki birlik genel sekreterliğine başvurabilirsiniz.",
                },
              },
              {
                "@type": "Question",
                name: "Üyelikten istediğim zaman çıkabilir miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, birliğe üye olan gerçek ve tüzel kişiler diledikleri zaman yazılı müracaatla üyelikten ayrılabilir. Ancak ayrılma tarihine kadar olan aidat ve nispi ödeme borçları ortadan kalkmaz ve ihracat devam ediyorsa yeniden üye olunması gerekir.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
