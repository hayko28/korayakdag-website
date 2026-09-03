import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Aile Şirketinden Kurumsal Yapıya Geçiş: Kurumsallaşma Rehberi | Koray Akdağ",
  description: "Aile şirketlerinde kurumsallaşmanın aşamaları, yönetim kurulu-icra ayrımı, aile anayasası ve KOBİ'ler için pratik adımlarla kapsamlı rehber.",
  keywords: [
    "aile şirketi kurumsallaşma",
    "kurumsallaşma aşamaları",
    "aile anayasası nedir",
    "yönetim kurulu icra kurulu ayrımı",
    "KOBİ kurumsallaşma",
    "aile şirketinden kurumsal yapıya geçiş",
    "kurumsal yönetişim",
    "aile şirketi ikinci kuşağa devir",
    "aile şirketlerinde sık yaşanan sorunlar",
    "organizasyon ve süreç tasarımı",
    "kurumsallaşma nedir",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Kurumsallaşma: Aile Şirketinden Kurumsal Yapıya Geçiş Süreci Nasıl Yönetilir?"
      description="Aile şirketlerinin büyük çoğunluğu belirli bir ölçeğe ulaştıktan sonra aynı duvara çarpar: kurucunun her şeye yetişemediği, kararların kişilere bağlı kaldığı, ikinci kuşağa devrin belirsiz olduğu bir dönem. Kurumsallaşmanın ne olduğu, aile şirketlerinde sık yaşanan sorunlar, yönetim kurulu-icra ayrımı, aile anayasası kavramı ve KOBİ'ler için adım adım pratik bir yol haritasıyla kapsamlı rehber."
      category="KURUMSAL GELİŞİM • KURUMSALLAŞMA • 2026"
      date="2026"
      readTime="13 Dakika"
      coverImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="aile-sirketinden-kurumsal-yapiya-gecis-kurumsallasma"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;deki şirketlerin büyük çoğunluğu aile şirketi olarak
          kurulur ve büyür. Ancak aynı kurucu enerjisiyle onlarca yıl
          büyümeye devam etmek başka, bu büyümeyi kişilere değil sisteme
          bağlı hâle getirmek başka bir şeydir. Bu yazıda kurumsallaşmanın ne
          anlama geldiğini, aile şirketlerinde en sık karşılaşılan
          sorunları, yönetim kurulu ile icra kurulunun neden ayrılması
          gerektiğini, aile anayasası kavramını ve KOBİ ölçeğindeki bir
          şirketin bu sürece nereden başlayabileceğini anlatıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Kurumsallaşma tam olarak nedir, aile şirketi ile kurumsal şirket arasındaki fark nedir?</li>
          <li>✔ Aile şirketlerinde en sık yaşanan yapısal sorunlar nelerdir?</li>
          <li>✔ Kurumsallaşma süreci adım adım nasıl işler?</li>
          <li>✔ Yönetim kurulu ve icra kurulu ayrımı neden bu kadar kritik?</li>
          <li>✔ Aile anayasası nedir, hangi ihtiyacı karşılar?</li>
          <li>✔ Bir KOBİ bu sürece pratikte nereden başlamalı?</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Kurumsallaşma Nedir, Aile Şirketiyle Farkı Ne?
          </Link>
          <Link href="#sorunlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Aile Şirketlerinde Sık Yaşanan Sorunlar
          </Link>
          <Link href="#asamalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kurumsallaşmanın Aşamaları: Adım Adım Süreç
          </Link>
          <Link href="#yk-icra" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Yönetim Kurulu ve İcra Kurulu Ayrımı
          </Link>
          <Link href="#organizasyon" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Organizasyon ve Süreç Tasarımı
          </Link>
          <Link href="#aile-anayasasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Aile Anayasası Nedir, Ne İşe Yarar?
          </Link>
          <Link href="#pratik-adimlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. KOBİ&apos;ler İçin Pratik Adımlar
          </Link>
          <Link href="#faydalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Kurumsallaşmanın Sağladığı Faydalar
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
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
          1. Kurumsallaşma Nedir, Aile Şirketiyle Farkı Ne?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Kurumsallaşma, bir şirketin varlığını; kurucusunun veya belirli bir
          kişinin bilgisine, ilişkilerine ve gündelik kararlarına bağlı
          olmaktan çıkarıp; yazılı kurallar, tanımlı roller, şeffaf karar
          mekanizmaları ve sürdürülebilir sistemler üzerine oturtma
          sürecidir. Amaç, aileyi veya kurucuyu şirketten uzaklaştırmak değil
          &mdash; tam tersine, ailenin/kurucunun rolünü netleştirip şirketin
          kişilere değil sisteme bağlı olarak büyümesini sağlamaktır.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Aile şirketi ile kurumsal yapı arasındaki temel fark, genellikle
          yönetim danışmanlığı literatüründe kullanılan{" "}
          <strong>&quot;üç daire modeli&quot;</strong> ile açıklanır: her
          aile şirketinde <strong>aile</strong>, <strong>mülkiyet</strong>{" "}
          (ortaklık) ve <strong>yönetim</strong> daireleri iç içe geçmiş
          durumdadır. Kurumsallaşmamış bir şirkette bu üç daire neredeyse
          tamamen üst üste biner &mdash; aile üyesi olmak, ortak olmak ve
          yönetici olmak aynı kişide birleşir, roller birbirine karışır.
          Kurumsallaşma süreci, bu üç dairenin sınırlarını netleştirip her
          birinin kendi mantığıyla (aile ilişkileri sevgi ve aidiyet
          üzerine, ortaklık hak ve getiri üzerine, yönetim ise yetkinlik ve
          performans üzerine) işlemesini sağlar.
        </p>

        <div className="my-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-center text-2xl font-bold text-[#071A2F]">
            Üç Daire Modeli: Aile, Mülkiyet, Yönetim
          </h3>
          <svg viewBox="0 0 400 300" className="mx-auto w-full max-w-md">
            <circle cx="160" cy="130" r="105" fill="#f97316" fillOpacity="0.22" stroke="#f97316" strokeWidth="2" />
            <circle cx="240" cy="130" r="105" fill="#071A2F" fillOpacity="0.14" stroke="#071A2F" strokeWidth="2" />
            <circle cx="200" cy="215" r="105" fill="#16a34a" fillOpacity="0.18" stroke="#16a34a" strokeWidth="2" />
            <text x="95" y="90" fontSize="18" fontWeight="700" fill="#9a3412">Aile</text>
            <text x="255" y="90" fontSize="18" fontWeight="700" fill="#071A2F">Mülkiyet</text>
            <text x="160" y="278" fontSize="18" fontWeight="700" fill="#15803d">Yönetim</text>
          </svg>
          <p className="mt-6 text-center text-sm text-gray-500">
            Kurumsallaşmamış şirketlerde üç daire neredeyse çakışır;
            kurumsallaşma bu dairelerin sınırlarını ve kesişim alanlarındaki
            kuralları netleştirir.
          </p>
        </div>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kurumsallaşma tek seferlik bir proje değil, süreklilik gerektiren
            bir dönüşümdür. Bir şirket &quot;kurumsallaştı&quot; deyip
            konuyu kapatamaz; roller, süreçler ve yönetişim yapısı şirket
            büyüdükçe, kuşak değiştikçe yeniden gözden geçirilmelidir.
          </p>
        </div>
      </section>

      {/* 2. SORUNLAR */}
      <section id="sorunlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Aile Şirketlerinde Sık Yaşanan Sorunlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Belirli bir cirosal veya çalışan sayısına ulaşan hemen her aile
          şirketi, aşağıdaki sorunların bir kısmıyla &mdash; farklı
          yoğunluklarda &mdash; karşılaşır. Bu sorunlar kurucunun
          &quot;yetersizliğinden&quot; değil, şirketin büyüdüğü hâlde
          yönetim modelinin aynı kalmasından kaynaklanır.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">👤 Tek Kişiye Aşırı Bağımlılık</h4>
            <p className="text-sm leading-7 text-gray-700">
              Satış ilişkileri, tedarikçi anlaşmaları, banka görüşmeleri ve
              kritik operasyonel bilgi tek bir kişide (genellikle kurucuda)
              toplanır; o kişi olmadan hiçbir önemli karar alınamaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">👨‍👩‍👧‍👦 Aile Rolleri ile İş Rollerinin Karışması</h4>
            <p className="text-sm leading-7 text-gray-700">
              Aile içindeki hiyerarşi (baba-oğul, ağabey-kardeş) doğrudan
              şirket içi yetki hiyerarşisine taşınır; yetkinlik yerine
              akrabalık derecesi belirleyici olur (nepotizm).
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">💸 Kişisel ve Kurumsal Finansmanın İç İçe Geçmesi</h4>
            <p className="text-sm leading-7 text-gray-700">
              Aile bireylerinin kişisel harcamaları şirket kasasından
              karşılanır; şirketin gerçek kârlılığı ve nakit akışı bu nedenle
              net biçimde görülemez.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📝 Yazılı Süreç ve Yetki Tanımı Eksikliği</h4>
            <p className="text-sm leading-7 text-gray-700">
              &quot;Kim, hangi konuda, ne kadar tutara kadar karar verebilir&quot;
              sorusunun yazılı bir cevabı yoktur; her karar sözlü onaya veya
              kurucunun o günkü inisiyatifine bağlıdır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">⚖️ Belirsiz veya Konuşulmayan Devir Planı</h4>
            <p className="text-sm leading-7 text-gray-700">
              İkinci kuşağa devir kimin nasıl olacağı açıkça konuşulmaz;
              kurucunun ani bir sağlık sorunu ya da beklenmedik ayrılışı
              durumunda şirket ciddi bir belirsizlik dönemine girer.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🗣️ Toplantı ve Raporlama Disiplini Eksikliği</h4>
            <p className="text-sm leading-7 text-gray-700">
              Düzenli, gündemi ve tutanağı olan yönetim toplantıları
              yapılmaz; kararlar koridor sohbetlerinde alınır, takip
              edilmez ve hesap sorulabilirliği kalmaz.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu sorunların ortak paydası şudur: şirket, kişilerin kapasitesini
            aşacak kadar büyümüştür ama yönetim modeli hâlâ &quot;küçük
            işletme&quot; refleksleriyle işlemektedir. Kurumsallaşma tam da
            bu uyumsuzluğu gidermeyi hedefler.
          </p>
        </div>
      </section>

      {/* 3. AŞAMALAR */}
      <section id="asamalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kurumsallaşmanın Aşamaları: Adım Adım Süreç
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Kurumsallaşma tek bir adımda tamamlanan bir işlem değildir;
          ihtiyacın netleştirilmesinden yapının sürekli hâle getirilmesine
          kadar birbirini besleyen aşamalardan oluşur.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🔍</div>
            <h3 className="text-lg font-bold">1. İhtiyaç ve Mevcut Durum Analizi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Mevcut karar mekanizmaları, roller, süreçler ve şirketin
              hangi noktada tıkandığı tespit edilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🏗️</div>
            <h3 className="text-lg font-bold">2. Organizasyon Yapısının Tasarlanması</h3>
            <p className="mt-3 text-sm text-gray-600">
              Departmanlar, raporlama hatları ve unvan/yetki seviyeleri
              yeniden ve yazılı biçimde tanımlanır.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">⚖️</div>
            <h3 className="text-lg font-bold">3. Yönetim Kurulu / İcra Ayrımının Kurulması</h3>
            <p className="mt-3 text-sm text-gray-600">
              Stratejik/gözetim kararları ile operasyonel/yürütme kararları
              ayrı organlara ve toplantı düzenlerine bağlanır.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📜</div>
            <h3 className="text-lg font-bold">4. Yazılı Süreç ve Yetki Tablolarının Oluşturulması</h3>
            <p className="mt-3 text-sm text-gray-600">
              Satın alma, ödeme, işe alım gibi kritik süreçlerde kim neyi
              onaylar sorusu yazılı hâle getirilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📊</div>
            <h3 className="text-lg font-bold">5. Performans Yönetimi Sisteminin Kurulması</h3>
            <p className="mt-3 text-sm text-gray-600">
              Aile üyesi olsun olmasın, tüm yöneticiler için ölçülebilir
              hedef ve performans kriterleri tanımlanır.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">👨‍👩‍👧</div>
            <h3 className="text-lg font-bold">6. Aile-İş İlişkilerinin Düzenlenmesi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Aile üyelerinin şirkete girişi, ücretlendirme ve kâr
              paylaşımı konularında ortak kurallar (aile anayasası)
              oluşturulur.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm md:col-span-3">
            <div className="mb-4 text-5xl">🔁</div>
            <h3 className="text-xl font-bold">7. Uygulama, İzleme ve Sürekli Gözden Geçirme</h3>
            <p className="mt-3 text-sm text-gray-600">
              Yeni yapı belirli bir dönem uygulanır, düzenli yönetim
              kurulu/icra toplantılarıyla izlenir ve şirket büyüdükçe ya da
              kuşak değiştikçe yeniden gözden geçirilir. Kurumsallaşma
              &quot;bitmiş bir proje&quot; değil, sürekli bir disiplindir.
            </p>
          </div>
        </div>
      </section>

      {/* 4. YK - İCRA AYRIMI */}
      <section id="yk-icra" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Yönetim Kurulu ve İcra Kurulu Ayrımı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kurumsallaşmanın belki de en belirleyici adımı, &quot;gözeten&quot;
          ile &quot;yapan&quot; fonksiyonlarının birbirinden ayrılmasıdır.
          Yönetim kurulu şirkete yön verir, sınır çizer ve performansı
          denetler; icra kurulu ise bu yönü günlük operasyona dönüştürür.
          Bu ayrım yazılı hale getirilmeden, sağlıklı bir yönetişim yapısı
          kurmak mümkün değildir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Konu</th>
                <th className="p-5">Yönetim Kurulu (Gözetim)</th>
                <th className="p-5">İcra Kurulu (Yürütme)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Odak</td>
                <td className="p-5">Strateji, uzun vadeli yön, risk ve performans denetimi</td>
                <td className="p-5">Günlük operasyon, uygulama, kısa vadeli hedeflere ulaşma</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Toplantı Sıklığı</td>
                <td className="p-5">Genellikle üç ayda bir veya aylık</td>
                <td className="p-5">Genellikle haftalık veya en az ayda bir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Katılımcılar</td>
                <td className="p-5">Ortaklar, mümkünse bağımsız/dışarıdan üye(ler)</td>
                <td className="p-5">Genel müdür ve üst düzey fonksiyon yöneticileri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Örnek Karar</td>
                <td className="p-5">Yeni yatırım, ortaklık yapısı, üst düzey atama, bütçe onayı</td>
                <td className="p-5">Tedarikçi seçimi, kampanya kararı, günlük personel yönetimi</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Hesap Verme Yönü</td>
                <td className="p-5">Ortaklara ve şirketin uzun vadeli sürdürülebilirliğine karşı</td>
                <td className="p-5">Yönetim kuruluna karşı, belirlenen hedef ve bütçeye göre</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <p className="leading-8 text-gray-700">
            KOBİ ölçeğinde tam anlamıyla bağımsız bir yönetim kurulu kurmak
            her zaman mümkün olmayabilir; ancak en azından ortakların düzenli
            bir gündemle bir araya geldiği, kararların tutanağa bağlandığı
            bir &quot;yönetim kurulu benzeri&quot; yapı kurmak, mümkün
            olduğunda dışarıdan bağımsız bir üyenin bu sürece dahil
            edilmesi, kurumsallaşmanın ilk somut adımlarından biridir.
          </p>
        </div>
      </section>

      {/* 5. ORGANİZASYON VE SÜREÇ TASARIMI */}
      <section id="organizasyon" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Organizasyon ve Süreç Tasarımı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yönetişim yapısı kurulduktan sonra, bunun altını dolduracak bir
          organizasyon şeması ve süreç haritası gerekir. Aksi hâlde
          kurumsallaşma yalnızca bir toplantı takvimi değişikliğinden
          ibaret kalır.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Organizasyon Tasarımının Temel Bileşenleri
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Net organizasyon şeması:</strong> Kim kime raporluyor,
              hangi departman hangi fonksiyondan sorumlu, yazılı ve güncel
              biçimde tanımlanır.
            </li>
            <li>
              <strong>Görev tanımları:</strong> Her pozisyon için sorumluluk,
              yetki ve performans beklentisi netleştirilir &mdash; özellikle
              aile üyesi olan pozisyonlarda bu netlik kritik önem taşır.
            </li>
            <li>
              <strong>Yetki ve onay tabloları:</strong> Satın alma, ödeme,
              işe alım/işten çıkarma gibi kritik konularda tutar ve konu
              bazında kimin onay vereceği yazılı hâle getirilir.
            </li>
            <li>
              <strong>Standart süreçler (SOP):</strong> Tekrarlanan iş
              akışları (sipariş, üretim, tahsilat vb.) belgelenir; böylece
              süreç bilgisi tek bir kişinin kafasında kalmaz.
            </li>
            <li>
              <strong>Raporlama düzeni:</strong> Finansal ve operasyonel
              göstergelerin hangi sıklıkla, hangi formatta ve kime
              raporlanacağı standardize edilir.
            </li>
          </ul>
        </div>
      </section>

      {/* 6. AİLE ANAYASASI */}
      <section id="aile-anayasasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Aile Anayasası Nedir, Ne İşe Yarar?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Aile anayasası, aile üyeleri ile şirket arasındaki ilişkiyi
          düzenleyen; rolleri, hakları, sorumlulukları ve karar alma
          mekanizmalarını yazılı hâle getiren bir belgedir. Türk hukukunda
          doğrudan yasal bir bağlayıcılığı bulunmasa da, aile bireylerinin
          gönüllü olarak bağlı kaldığı atipik bir sözleşme niteliği taşır ve
          uygulamada aile içi anlaşmazlıkların büyük bölümünü önleyici bir
          işlev görür.
        </p>
        <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            📋 Aile Anayasasında Genellikle Yer Alan Konular
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-yellow-600">
            <li>Aile üyelerinin şirkette işe başlama şartları (eğitim, dışarıda çalışma deneyimi, pozisyon başvurusu)</li>
            <li>Ücretlendirme ilkeleri (aile üyesi olsun olmasın piyasa koşullarına uygun ücret)</li>
            <li>Kâr dağıtımı ve temettü politikası</li>
            <li>Hisse devri, satışı ve yeni ortak alımına ilişkin kurallar</li>
            <li>Devir/veraset planlaması ve liderlik geçişi süreci</li>
            <li>Aile üyeleri arası anlaşmazlıkların çözüm mekanizması</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Aile şirketlerinin sürdürülebilirliği üzerine yapılan çalışmalar,
          bu şirketlerin önemli bir bölümünün ikinci kuşağa, çok daha az
          bir kısmının ise üçüncü kuşağa sorunsuz devredilebildiğini
          gösteriyor. Aile anayasası, tek başına bu riski ortadan
          kaldırmaz; ancak devir ve paylaşım gibi hassas konuları
          &quot;duygusal anda&quot; değil, sakin bir dönemde önceden
          konuşulmuş kurallara bağlar.
        </p>
      </section>

      {/* 7. PRATİK ADIMLAR */}
      <section id="pratik-adimlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. KOBİ&apos;ler İçin Pratik Adımlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kurumsallaşmayı büyük holdinglere özgü bir lüks olarak görmek
          yaygın bir hatadır. Orta ölçekli bir KOBİ, aşağıdaki adımlarla
          süreci sınırlı bir bütçe ve makul bir sürede başlatabilir:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Şirket yöneticilerinin (aile üyesi olsun olmasın) ayda en az bir kez gündemli ve tutanaklı bir toplantıda bir araya gelmesini kurallaştırın.</li>
            <li>✔ Kritik onay/yetki konularını (belirli tutarın üzeri ödemeler, işe alım, yeni yatırım) yazılı bir tabloya dökün.</li>
            <li>✔ Organizasyon şemasını güncelleyin; kimin kime raporladığını net biçimde belirleyin.</li>
            <li>✔ Şirket ve şahıs harcamalarını fiilen ve muhasebe kayıtlarında birbirinden ayırın.</li>
            <li>✔ En az bir tane kritik süreci (ör. satın alma veya tahsilat) yazılı hâle getirerek başlayın; zamanla diğer süreçleri ekleyin.</li>
            <li>✔ Aile üyelerinin şirkete girişi ve ücretlendirilmesi konusunda temel ilkeleri (yazılı olmasa bile) aile içinde konuşun.</li>
            <li>✔ Mümkünse sürece dışarıdan, tarafsız bir danışman veya bağımsız bir üye dahil edin; iç dinamikler genellikle nesnelliği zorlaştırır.</li>
          </ul>
        </div>
      </section>

      {/* 8. FAYDALAR */}
      <section id="faydalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Kurumsallaşmanın Sağladığı Faydalar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Kişiye Değil Sisteme Bağlı Süreklilik</h4>
            <p className="leading-7 text-gray-700">
              Kurucunun veya herhangi bir kilit kişinin uzun süreli
              yokluğunda dahi şirket operasyonel olarak işlemeye devam
              edebilir.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Daha Hızlı ve Tutarlı Karar Alma</h4>
            <p className="leading-7 text-gray-700">
              Yetki ve onay tabloları net olduğunda, kararlar tek bir
              kişinin müsaitliğine bağlı kalmadan ilerler.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Yatırımcı, Banka ve Ortak Nezdinde Güven</h4>
            <p className="leading-7 text-gray-700">
              Şeffaf bir yönetişim yapısı, dış paydaşların (banka, yatırımcı,
              potansiyel alıcı) şirkete duyduğu güveni doğrudan artırır.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Kuşak Geçişinin Daha Sağlıklı Yönetilmesi</h4>
            <p className="leading-7 text-gray-700">
              Roller ve kurallar önceden netleştiği için, liderlik devri
              duygusal bir kriz yerine planlı bir süreç olarak ilerler.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Yetenekli Profesyonelleri Çekebilme</h4>
            <p className="leading-7 text-gray-700">
              Net kariyer yolu ve performans kriterleri sunan bir yapı,
              aile dışından nitelikli yöneticileri şirkete çekmeyi ve elde
              tutmayı kolaylaştırır.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Şirket Değerinde ve Devredilebilirlikte Artış</h4>
            <p className="leading-7 text-gray-700">
              Kurumsallaşmamış, tamamen kişiye bağlı bir şirket; potansiyel
              bir satış, ortaklık ya da değerleme sürecinde yapısal bir risk
              unsuru olarak görülür.
            </p>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kurumsallaşmayı tek seferlik bir proje değil, sürekli bir disiplin olarak planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yapıyı bir gecede değil, kademeli ve şirketin sindirebileceği bir hızda uygulayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Aile içi hassasiyetleri göz ardı etmeyin; devir ve ücretlendirme gibi konuları sakin dönemde konuşun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yazılı hâle getirilen kuralların fiilen uygulandığından emin olun, kağıt üzerinde kalmasına izin vermeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Mümkünse sürece dışarıdan, tarafsız bir danışman veya bağımsız üye dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Finansal disiplin ve şeffaf raporlamayı kurumsallaşmanın ayrılmaz bir parçası olarak ele alın
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kurumsallaşma Sürecinizi Birlikte Tasarlayabiliriz
          </h3>
          <p className="leading-8 text-gray-700">
            Organizasyon ve süreç tasarımı, yönetim kurulu/icra ayrımının
            kurulması, performans yönetimi ve aile-iş ilişkilerinin
            düzenlenmesi gibi konularda Koray Akdağ / Sistem Global
            Danışmanlık olarak şirketinizin ölçeğine uygun, kademeli bir
            kurumsallaşma yol haritası hazırlıyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin mevcut durumunu birlikte değerlendirmek için
              bizimle iletişime geçin.
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
              Kurumsallaşma yalnızca büyük şirketler için mi gereklidir?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Kurumsallaşma ihtiyacı genellikle şirket belirli bir
              ölçeğe (çalışan sayısı, ciro, şube/lokasyon sayısı) ulaşıp
              kurucunun her karara tek başına yetişemediği noktada ortaya
              çıkar. Orta ölçekli bir KOBİ, süreci küçük ve yönetilebilir
              adımlarla başlatabilir; büyük bir bütçe veya karmaşık bir
              danışmanlık projesi şart değildir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kurumsallaşma, kurucunun şirket üzerindeki söz hakkını azaltır mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Doğru kurgulandığında hayır; kurucunun rolü azalmaz, netleşir.
              Kurucu genellikle yönetim kurulu düzeyinde stratejik yönü
              belirlemeye devam eder; günlük operasyonel yükü ise icra
              kuruluna/profesyonel yöneticilere devrederek asıl katma
              değerini stratejik konulara ayırabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Aile anayasası hukuken bağlayıcı mıdır?
            </h3>
            <p className="leading-8 text-gray-700">
              Türk hukukunda aile anayasasının doğrudan bir yasal
              bağlayıcılığı bulunmaz; ancak atipik bir sözleşme niteliği
              taşır ve aile üyelerinin gönüllü uyumuna dayanır. Bağlayıcılık
              güçlendirilmek isteniyorsa, ortaklık sözleşmesi veya şirket
              ana sözleşmesi gibi hukuken bağlayıcı belgelerle desteklenmesi
              önerilir; bu konuda somut hukuki yapı için uzman görüşü
              alınmalıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kurumsallaşma süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Şirketin ölçeğine, mevcut yapının olgunluğuna ve organizasyonun
              değişime açıklığına göre değişir. Temel yönetişim ve süreç
              unsurlarının kurulması genellikle aylar süren bir çalışmadır;
              yapının şirket kültürüne tam olarak yerleşmesi ise yıllara
              yayılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yönetim kurulu ile icra kurulu aynı kişilerden oluşabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Küçük ölçekli şirketlerde başlangıçta bazı kişiler her iki
              organda da yer alabilir; önemli olan kişilerin çakışması değil,
              hangi konunun hangi &quot;şapka&quot; ile, hangi gündem ve
              toplantı disipliniyle görüşüldüğünün net olmasıdır. Şirket
              büyüdükçe bu iki organın giderek ayrışması hedeflenmelidir.
            </p>
          </div>
        </div>
      </section>

      {/* 11. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Aile şirketinden kurumsal yapıya geçiş, kurucunun veya ailenin
          şirketten çekilmesi değil; şirketin sürekliliğini kişilerden
          bağımsız hâle getiren bir olgunlaşma sürecidir. Yönetim kurulu ve
          icra kurulunun ayrılması, yazılı süreç ve yetki tanımları, aile
          anayasası gibi araçlar; şirketin bugünkü işleyişini
          düzenlemekle kalmaz, ikinci ve üçüncü kuşağa sağlıklı bir devir
          için de zemin hazırlar.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kurumsallaşma, şirketin büyüklüğüne göre şekillenen kademeli bir
          yolculuktur; küçük ve doğru adımlarla başlamak, hiç başlamamaktan
          çok daha değerlidir. Şirketinizin mevcut yapısını değerlendirmek
          ve size özgü bir kurumsallaşma yol haritası oluşturmak için Koray
          Akdağ / Sistem Global Danışmanlık olarak yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&amp;A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ&apos;ler İçin Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ &amp; FİNANSAL YÖNETİM • DANIŞMANLIK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ&apos;nin İhtiyacı?</h3>
          </Link>
          <Link
            href="/blog/bagimsiz-denetim-esik-degerleri-2026-degisti"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">BAĞIMSIZ DENETİM • MALİ MÜŞAVİRLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Bağımsız Denetim Eşik Değerleri 2026&apos;da Değişti: Yeni Kriterler Şirketinizi Nasıl Etkiliyor?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
