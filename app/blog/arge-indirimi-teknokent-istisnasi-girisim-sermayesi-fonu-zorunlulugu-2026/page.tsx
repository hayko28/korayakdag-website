import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Ar-Ge İndirimi ve Teknokent İstisnasında Girişim Sermayesi Fonu Zorunluluğu 2026 | Koray Akdağ",
  description:
    "5746 sayılı Kanun ve 4691 sayılı Kanun kapsamında Ar-Ge indirimi, tasarım indirimi veya teknokent kazanç istisnasından yararlanan şirketler için girişim sermayesi fonu ayırma zorunluluğu. 2026'da eşik 5 milyon TL'ye yükseldi, yatırım son tarihi 31 Aralık 2026.",
  keywords: [
    "girişim sermayesi fonu ayırma zorunluluğu 2026",
    "ar-ge indirimi girişim sermayesi fonu",
    "teknokent istisnası girişim sermayesi fonu",
    "5746 sayılı kanun madde 3 fıkra 14",
    "4691 sayılı kanun ek madde 3",
    "10803 sayılı cumhurbaşkanı kararı",
    "ar-ge merkezi girişim sermayesi yatırım fonu",
    "teknopark kazanç istisnası fon ayırma",
    "girişim sermayesi yatırım fonu payı satın alma zorunluluğu",
  ],
  alternates: {
    canonical: "/blog/arge-indirimi-teknokent-istisnasi-girisim-sermayesi-fonu-zorunlulugu-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Ar-Ge İndirimi ve Teknokent İstisnasında Girişim Sermayesi Fonu Zorunluluğu: 2026'da Eşik 5 Milyon TL'ye Yükseldi"
      description="5746 sayılı Kanun'un 3. maddesinin 14. fıkrası ve 4691 sayılı Kanun'un Ek 3. maddesi uyarınca, Ar-Ge indirimi, tasarım indirimi veya teknokent kazanç istisnasından belirli bir tutarın üzerinde yararlanan şirketlerin bu tutarın bir kısmını girişim sermayesi fonuna yatırması zorunlu. 2026'da eşik, oran, yatırım kanalları, son tarih ve yatırım yapılmazsa uygulanan sonuçlarla güncel rehber."
      category="AR-GE VE İNOVASYON • VERGİ TEŞVİKLERİ • 2026"
      date="Ekim 2026"
      readTime="13 Dakika"
      slug="arge-indirimi-teknokent-istisnasi-girisim-sermayesi-fonu-zorunlulugu-2026"
      coverImage="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Ar-Ge İndiriminiz veya Teknokent İstisnanız Bu Eşiği Aşıyor mu?"
      ctaText="Şirketinizin 2025 dönemi beyannamesinde yararlandığı Ar-Ge indirimi, tasarım indirimi veya teknokent kazanç istisnası tutarını birlikte değerlendirip, girişim sermayesi fonu ayırma yükümlülüğünüz olup olmadığını ve 31 Aralık 2026'ya kadar hangi yatırım kanalının size en uygun olduğunu netleştirebiliriz."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Ar-Ge/tasarım indirimi veya teknokent kazanç istisnası nedeniyle yıllık beyannamede yararlanılan tutar <strong>5.000.000 TL&apos;yi</strong> aşan kurumlar vergisi mükellefleri, bu tutarın <strong>%3&apos;ünü</strong> girişim sermayesi fonuna ayırmak zorunda.</li>
          <li>✔ Bu eşik, 31 Aralık 2025 tarihli ve <strong>10803 sayılı Cumhurbaşkanı Kararı</strong> ile 1 Ocak 2026&apos;dan itibaren 2.000.000 TL&apos;den 5.000.000 TL&apos;ye yükseltildi.</li>
          <li>✔ Yıllık tavan hâlâ <strong>100.000.000 TL</strong>.</li>
          <li>✔ Ayrılan tutar, GSYF (girişim sermayesi yatırım fonu) payı, GSYO (girişim sermayesi yatırım ortaklığı) payı veya teknokent kuluçka merkezindeki girişimciye sermaye olarak <strong>yılın sonuna kadar</strong> fiilen yatırılmalı; 2025 dönemi için son tarih <strong>31 Aralık 2026</strong>.</li>
          <li>✔ Yatırım yapılmazsa, yararlanılan indirim/istisna tutarının <strong>%20&apos;si</strong> o yıl için geçersiz sayılır ve ek kurumlar vergisi doğar (vergi ziyaı cezası kesilmez, ancak gecikme faizi işleyebilir).</li>
          <li>✔ Bu zorunluluk, aynı kanunlardaki <strong>gönüllü</strong> girişim sermayesi desteği indiriminden ve KOSGEB&apos;in GSYF&apos;lere yatırımcı olmasından tamamen farklı bir mekanizma.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Bu Yükümlülük Nedir, Nereden Geliyor?
          </Link>
          <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 2026&apos;da Eşik, Oran ve Tavan Ne Kadar?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Bu Yükümlülük Kapsamında?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Karıştırılmaması Gereken İki Konu
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Fon Nasıl Ayrılır, Yatırım Nereye Yapılır?
          </Link>
          <Link href="#son-tarih" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Son Tarih ve Zamanlama
          </Link>
          <Link href="#uyulmazsa" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Yükümlülüğe Uyulmazsa Ne Olur?
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

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Bu Yükümlülük Nedir, Nereden Geliyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          28/1/2021 tarihli ve 7263 sayılı Kanun, iki ayrı temel düzenlemeye
          paralel bir hüküm ekledi: 5746 sayılı Araştırma, Geliştirme ve
          Tasarım Faaliyetlerinin Desteklenmesi Hakkında Kanun&apos;un 3.
          maddesinin 14. fıkrası ve 4691 sayılı Teknoloji Geliştirme
          Bölgeleri Kanunu&apos;nun Ek 3. maddesi. Her iki hüküm de aynı
          mantıkla çalışıyor: Ar-Ge indirimi, tasarım indirimi veya teknokent
          (teknoloji geliştirme bölgesi) kazanç istisnasından belirli bir
          tutarın üzerinde yararlanan kurumlar vergisi mükellefleri, bu
          tutarın bir kısmını Türkiye&apos;deki girişimcilik ekosistemine
          geri aktarmak zorunda bırakılıyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Amaç açık: devletin Ar-Ge indirimi ve teknokent istisnası yoluyla
          şirketlere bıraktığı verginin bir kısmının, girişim sermayesi
          fonları (GSYF) ve teknokent kuluçka merkezlerindeki erken aşama
          girişimciler üzerinden ekosisteme geri dönmesini sağlamak. Kanun
          metninde Cumhurbaşkanına, bu fıkrada yer alan tutar ve oranları
          ayrı ayrı veya birlikte sıfıra kadar indirme, beş katına kadar
          artırma yetkisi tanınmış; bu nedenle eşik ve oran, kanunun ilk
          yürürlüğe girdiği 2022&apos;den bu yana birkaç kez Cumhurbaşkanı
          Kararı ile güncellendi. Son güncelleme, 31 Aralık 2025 tarihli ve
          33124 sayılı (5. mükerrer) Resmî Gazete&apos;de yayımlanan{" "}
          <strong>10803 sayılı Cumhurbaşkanı Kararı</strong> ile yapıldı ve 1
          Ocak 2026&apos;dan itibaren uygulanıyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu yükümlülük, bilanço esasına göre defter tutan ve Ar-Ge/tasarım
            indirimi ya da teknokent kazanç istisnasından yararlanan kurumlar
            vergisi mükellefleri için 2025 hesap dönemine ait, 2026 yılında
            verilecek yıllık beyannamelerden itibaren güncel eşikle
            uygulanıyor.
          </p>
        </div>
      </section>

      {/* 2. TUTARLAR */}
      <section id="tutarlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 2026&apos;da Eşik, Oran ve Tavan Ne Kadar?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kanunun 2022&apos;deki ilk hâlinde eşik 1.000.000 TL, oran %2 ve
          yıllık tavan 20.000.000 TL olarak belirlenmişti. Takip eden
          Cumhurbaşkanı Kararlarıyla bu rakamlar kademeli olarak yükseltildi.
          10803 sayılı Kararla birlikte 2026&apos;da uygulanan güncel
          tablo şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Unsur</th>
                <th className="p-5">2025&apos;e Kadar Uygulanan</th>
                <th className="p-5">2026&apos;dan İtibaren (10803 sayılı CBK)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Fon ayırma eşiği</td>
                <td className="p-5">2.000.000 TL</td>
                <td className="p-5"><strong>5.000.000 TL</strong></td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ayrılacak oran</td>
                <td className="p-5">%3</td>
                <td className="p-5">%3 (değişmedi)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Yıllık tavan</td>
                <td className="p-5">100.000.000 TL</td>
                <td className="p-5">100.000.000 TL (değişmedi)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-10 mb-8 text-lg leading-9 text-gray-700">
          Yani uygulama basit: yıllık beyannamede Ar-Ge/tasarım indirimi
          veya teknokent kazanç istisnası kapsamında yararlanılan tutar 5
          milyon TL&apos;nin altındaysa, bu madde kapsamında herhangi bir fon
          ayırma yükümlülüğü doğmuyor. Tutar 5 milyon TL&apos;yi aşıyorsa,
          aşan kısım değil, <strong>yararlanılan tutarın tamamının %3&apos;ü</strong>{" "}
          pasifte geçici bir hesaba aktarılıyor.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-2 text-2xl font-black text-orange-500">Örnek</div>
            <p className="text-sm text-gray-600">Yararlanılan Ar-Ge indirimi</p>
            <p className="text-2xl font-bold text-[#071A2F]">8.000.000 TL</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-2 text-2xl font-black text-orange-500">%3</div>
            <p className="text-sm text-gray-600">Ayrılması gereken tutar</p>
            <p className="text-2xl font-bold text-[#071A2F]">240.000 TL</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-2 text-2xl font-black text-orange-500">Son Tarih</div>
            <p className="text-sm text-gray-600">Yatırımın tamamlanması</p>
            <p className="text-2xl font-bold text-[#071A2F]">31.12.2026</p>
          </div>
        </div>
      </section>

      {/* 3. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Bu Yükümlülük Kapsamında?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-green-700">
              ✅ Kapsamda Olanlar
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
              <li>Ar-Ge merkezi statüsündeki şirketler (5746 sayılı Kanun kapsamında Ar-Ge indirimi kullananlar)</li>
              <li>Tasarım merkezi statüsündeki şirketler (tasarım indirimi kullananlar)</li>
              <li>Teknokent/teknoloji geliştirme bölgesinde faaliyet gösterip kazanç istisnasından yararlanan şirketler (4691 sayılı Kanun Ek 3. madde)</li>
              <li>Sözleşme çerçevesinde sipariş Ar-Ge/tasarım projesi yürüten ve indirimden pay alan mükellefler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-700">
              ➖ Kapsamda Olmayanlar
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-gray-500">
              <li>Sadece KOSGEB hibe/kredi desteği alan, Ar-Ge merkezi veya teknokent statüsü olmayan KOBİ&apos;ler</li>
              <li>TÜBİTAK proje hibesi alan ama Ar-Ge indirimi beyan etmeyen (hibe geliri ayrı bir vergi istisnasına tabidir) mükellefler</li>
              <li>Yatırım Teşvik Belgesi kapsamında yalnızca indirimli kurumlar vergisinden yararlananlar (farklı bir indirim türü)</li>
              <li>Ar-Ge/tasarım indirimi veya teknokent istisnası tutarı yıllık beyannamede 5.000.000 TL eşiğinin altında kalan şirketler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-red-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Karıştırılmaması Gereken İki Konu
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="mb-5 leading-8 text-gray-700">
            <strong>🔴 Birincisi:</strong> Aynı 5746 sayılı Kanun&apos;un 3.
            maddesinin 13. fıkrasında, bu zorunluluktan tamamen farklı,{" "}
            <strong>gönüllü</strong> bir &quot;girişim sermayesi
            desteği&quot; indirimi de var: herhangi bir gelir veya kurumlar
            vergisi mükellefi, isterse GSYF&apos;ye yatırım yapıp, beyan
            edilen gelirin ya da kurum kazancının %10&apos;unu, öz sermayenin
            %20&apos;sini aşmayan kısmı üzerinden matrahından indirebilir. Bu
            tamamen isteğe bağlı bir teşviktir ve herkese açıktır. Bu yazının
            konusu olan 14. fıkradaki yükümlülük ise tam tersi yönde işler:
            zaten Ar-Ge indirimi veya teknokent istisnasından belirli bir
            tutarın üzerinde yararlanmış olan şirkete, bu yararlanmanın bir
            parçası olarak fon ayırma mecburiyeti getirir. Aynı yatırım
            araçları (GSYF, GSYO) kullanılsa da hukuki dayanakları ve sonuçları
            farklıdır.
          </p>
          <p className="leading-8 text-gray-700">
            <strong>🔴 İkincisi:</strong> KOSGEB&apos;in kendisinin de
            girişim sermayesi yatırım fonlarına yatırımcı (LP) olarak
            katılması, bambaşka bir konudur; bu, KOSGEB&apos;in kendi
            kaynaklarıyla fonlara ortak olmasıdır ve şirketlere bir
            yükümlülük getirmez. Detayını{" "}
            <Link
              href="/blog/kosgeb-girisim-sermayesi-yatirim-fonu-gsyf-girisimcilere-etkisi"
              className="text-orange-600 underline"
            >
              KOSGEB Girişim Sermayesi Yatırım Fonlarına (GSYF) Ortak Oluyor
            </Link>{" "}
            yazımızda bulabilirsiniz.
          </p>
        </div>
      </section>

      {/* 5. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Fon Nasıl Ayrılır, Yatırım Nereye Yapılır?
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Kanun metninde iki ayrı aşama birbirinden açıkça ayrılıyor:
          tutarın pasifte geçici bir hesaba <strong>aktarılması</strong> ve
          bu tutarın fiilen <strong>yatırıma dönüştürülmesi</strong>. Sadece
          ilk aşamayı yapıp ikincisini atlamak, yükümlülüğü yerine getirmiş
          saymaz.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Yıllık Beyannamenin Hazırlanması</h3>
            <p className="mt-2 text-sm text-gray-600">Ar-Ge/tasarım indirimi veya teknokent istisnası tutarı hesaplanır, eşik kontrolü yapılır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">%3&apos;ün Pasife Aktarılması</h3>
            <p className="mt-2 text-sm text-gray-600">Tutar, bilançoda geçici bir hesapta ayrıca izlenir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Yatırım Aracının Seçilmesi</h3>
            <p className="mt-2 text-sm text-gray-600">GSYF payı, GSYO payı veya kuluçka girişimcisine sermaye arasında tercih yapılır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Due Diligence ve Başvuru</h3>
            <p className="mt-2 text-sm text-gray-600">Fon yöneticisi veya kuluçka merkeziyle süreç yürütülür; bu aşama zaman alabilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Ödemenin Yılın Sonuna Kadar Tamamlanması</h3>
            <p className="mt-2 text-sm text-gray-600">Para fiilen aktarılır, yatırım belgelendirilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">6</div>
            <h3 className="text-lg font-bold">Dört Yıl Elde Tutma</h3>
            <p className="mt-2 text-sm text-gray-600">Yapılan yatırımın belirli bir süre elde tutulması gerekir, erken çıkışın vergisel sonuçları olabilir</p>
          </div>
        </div>
        <p className="mt-10 mb-6 text-lg leading-9 text-gray-700">
          Ayrılan tutar, kanunda sayılan üç kanaldan birine yönlendirilebilir:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-lg text-gray-700 marker:text-orange-500">
          <li><strong>Girişim Sermayesi Yatırım Fonu (GSYF) payı satın alınması:</strong> Türkiye&apos;de yerleşik girişimcilere yatırım yapmak üzere kurulmuş fonların katılma payları</li>
          <li><strong>Girişim Sermayesi Yatırım Ortaklığı (GSYO) payı satın alınması:</strong> Borsada işlem gören veya halka kapalı girişim sermayesi yatırım ortaklıklarının payları</li>
          <li><strong>Kuluçka merkezindeki girişimciye doğrudan sermaye konulması:</strong> 4691 sayılı Kanun kapsamındaki teknokent kuluçka merkezlerinde faaliyette bulunan girişimcilere sermaye desteği</li>
        </ul>
      </section>

      {/* 6. SON TARİH */}
      <section id="son-tarih" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Son Tarih ve Zamanlama
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kanun, yatırımın tamamlanması için &quot;geçici hesabın oluştuğu
          yılın sonu&quot;nu referans alıyor. 2025 hesap dönemine ait
          beyanname 2026&apos;da verildiğinden, bu dönem için fiilen yatırım
          yapma son tarihi <strong>31 Aralık 2026</strong>. Pratikte bu,
          beyannamenin verildiği Mart-Nisan 2026&apos;dan yıl sonuna kadar
          geniş görünen ama fon seçimi, due diligence ve ödeme süreçleri
          hesaba katıldığında aslında dar olan bir pencere anlamına geliyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Takvim yılından farklı özel hesap dönemine tabi mükelleflerde
            son tarih, kendi hesap döneminin bitişine göre kayar; bu
            durumdaki şirketlerin süreyi kendi mali müşaviriyle veya vergi
            danışmanıyla ayrıca teyit etmesi gerekir.
          </p>
        </div>
      </section>

      {/* 7. UYULMAZSA */}
      <section id="uyulmazsa" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Yükümlülüğe Uyulmazsa Ne Olur?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tutar, ilgili yıl sonuna kadar yatırıma dönüştürülmezse, yıllık
          beyanname üzerinden indirim konusu yapılan Ar-Ge/tasarım
          indiriminin veya teknokent istisnasının{" "}
          <strong>%20&apos;si</strong>, o yıl için geçerli sayılmaz; yani bu
          kısım kazançtan indirilemez hâle gelir. Bu nedenle zamanında
          alınmayan vergiler <strong>vergi ziyaı cezası uygulanmaksızın</strong>{" "}
          tarh edilir; ancak süresinde ödenmeyen bu ek vergi için genel
          esaslara göre gecikme faizi işleyebilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Tutar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yararlanılan Ar-Ge indirimi</td>
                <td className="p-5">8.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yatırım yapılmadığı için indirimden çıkarılan kısım (%20)</td>
                <td className="p-5">1.600.000 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Genel kurumlar vergisi oranı (%25) üzerinden doğan ek vergi</td>
                <td className="p-5">400.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Buna karşılık sadece <strong>240.000 TL&apos;lik</strong> (yukarıdaki
          örnekte %3&apos;lük tutar) bir yatırım yapılması hâlinde bu ek
          vergi hiç doğmaz; dolayısıyla fonu zamanında yatırıma dönüştürmek,
          çoğu şirket için aritmetik olarak da daha avantajlı.
        </p>
      </section>

      {/* UZMAN NOTU */}
      <div className="mt-16 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          💡 Uzman Notu
        </h3>
        <p className="mb-4 leading-8 text-gray-700">
          Uygulamada en sık gözden kaçan nokta, tutarın pasif geçici hesaba
          aktarılmasıyla yükümlülüğün tamamlandığının sanılması. Kanun,
          asıl şartı gerçek bir yatırımın (GSYF payı alımı, GSYO payı veya
          kuluçka girişimcisine sermaye konulması) yıl sonuna kadar fiilen
          gerçekleştirilmiş olmasına bağlıyor; muhasebe kaydı tek başına
          yeterli değil. Ayrıca mevcut özelge yorumlarına göre, teknokent
          istisnası tutarı eşiği aşan ama ilgili dönemde zarar beyan eden
          şirketler için de bu yükümlülük devam ediyor; &quot;kârım yok, bu
          beni ilgilendirmez&quot; varsayımı risklidir. Aynı şirket hem
          Ar-Ge indirimi hem teknokent istisnası kullanıyorsa, iki ayrı
          kanun maddesine dayandıklarından her bir eşik testinin ayrı ayrı
          yapılması esastır; kesin uygulama şirketin somut verileri üzerinden
          değerlendirilmelidir.
        </p>
      </div>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Fonun pasife aktarılmasıyla yatırımın yapılmış sayılması (ikisi ayrı şart)
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Eşiğin aşılıp aşılmadığının yıl içinde değil, ancak beyanname hazırlığında fark edilmesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ GSYF seçimi ve due diligence sürecinin yıl sonuna bırakılıp zamana sıkışılması
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Zarar beyan edilen dönemlerde teknokent istisnası eşiği aşılsa bile yükümlülüğün göz ardı edilmesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Gönüllü girişim sermayesi desteği indirimi (13. fıkra) ile zorunlu fon ayırma (14. fıkra) kalemlerinin karıştırılması
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Yapılan yatırımın dört yıllık elde tutma süresinden önce elden çıkarılması
          </div>
        </div>
      </section>

      {/* 9. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-lg text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.5746.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              5746 Sayılı Araştırma, Geliştirme ve Tasarım Faaliyetlerinin Desteklenmesi Hakkında Kanun
            </a>{" "}
            (madde 3, fıkra 14), mevzuat.gov.tr
          </li>
          <li>
            <a
              href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.4691.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              4691 Sayılı Teknoloji Geliştirme Bölgeleri Kanunu
            </a>{" "}
            (Ek madde 3), mevzuat.gov.tr
          </li>
          <li>
            10803 Sayılı Cumhurbaşkanı Kararı, 31 Aralık 2025 tarihli ve 33124 sayılı (5. Mükerrer) Resmî Gazete: eşik, oran ve tavanın 2026 güncellemesi
          </li>
          <li>
            <a
              href="https://www.gib.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gelir İdaresi Başkanlığı
            </a>{" "}
            : güncel kurumlar vergisi beyanname rehberleri ve uygulama tebliğleri
          </li>
        </ul>
        <div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu yazıdaki tutar ve oranlar, 10803 sayılı Cumhurbaşkanı
            Kararı&apos;nı yorumlayan birden fazla bağımsız mali müşavirlik
            kaynağı üzerinden derlendi. Şirketinizin somut yükümlülüğünü
            hesaplamadan önce güncel beyanname rehberlerinin ve ilgili
            Cumhurbaşkanı Kararı&apos;nın tam metninin mali müşavirinizle
            birlikte teyit edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* KURUMSAL DESTEK CTA */}
      <section className="mt-16 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Eşik Hesabından Yatırım Sürecine Kadar Yanınızdayız
          </h3>
          <p className="leading-8 text-gray-700">
            Ar-Ge merkezi, tasarım merkezi veya teknokent statünüz varsa,
            şirketinizin 2025 dönemi beyannamesinde yararlandığı indirim ve
            istisna tutarlarını birlikte gözden geçirip girişim sermayesi
            fonu ayırma yükümlülüğünüz olup olmadığını netleştiriyoruz.
            Yükümlülük doğuyorsa, hem muhasebe kaydının doğru yapılmasını
            hem de 31 Aralık 2026&apos;ya kadar uygun yatırım kanalının
            seçilip belgelendirilmesini ayrı bir danışman aramanıza gerek
            kalmadan tek elden yürütüyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin bu yükümlülük kapsamında olup olmadığını
              değerlendirmek üzere bizimle iletişime geçebilirsiniz.
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
              Ar-Ge indirimi kullanan her şirket girişim sermayesi fonu ayırmak zorunda mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Yalnızca yıllık beyannamede Ar-Ge indirimi, tasarım
              indirimi veya teknokent kazanç istisnası kapsamında
              yararlanılan tutar, 2026 itibarıyla geçerli olan 5.000.000 TL
              eşiğini aşan kurumlar vergisi mükellefleri bu yükümlülük
              kapsamına giriyor. Tutar eşiğin altında kalıyorsa herhangi bir
              fon ayırma zorunluluğu doğmuyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026&apos;da girişim sermayesi fonu ayırma eşiği ne kadar yükseldi?
            </h3>
            <p className="leading-8 text-gray-700">
              31 Aralık 2025 tarihli ve 10803 sayılı Cumhurbaşkanı Kararı
              ile eşik, 2.000.000 TL&apos;den 5.000.000 TL&apos;ye
              yükseltildi ve 1 Ocak 2026&apos;dan itibaren uygulanmaya
              başladı. Ayrılacak oran (%3) ve yıllık tavan (100.000.000 TL)
              değişmedi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Fon ayırma zorunluluğunu yerine getirmezsem ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Tutar, ilgili yıl sonuna kadar GSYF payı, GSYO payı veya
              kuluçka merkezi girişimcisine sermaye olarak yatırıma
              dönüştürülmezse, yararlanılan Ar-Ge indirimi veya teknokent
              istisnasının %20&apos;si o yıl için geçersiz sayılır ve bu
              tutar üzerinden ek kurumlar vergisi doğar. Vergi ziyaı cezası
              kesilmez, ancak zamanında ödenmeyen bu vergi için gecikme
              faizi işleyebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ayrılan tutarı nereye yatırabilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              Üç kanaldan biri kullanılabilir: Türkiye&apos;de yerleşik
              girişimcilere yatırım yapmak üzere kurulmuş bir girişim
              sermayesi yatırım fonunun (GSYF) katılma paylarının satın
              alınması, bir girişim sermayesi yatırım ortaklığının (GSYO)
              paylarının satın alınması veya 4691 sayılı Kanun kapsamındaki
              teknokent kuluçka merkezlerinde faaliyette bulunan bir
              girişimciye doğrudan sermaye konulması.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hem Ar-Ge indirimi hem teknokent istisnası kullanıyorum; eşik ayrı mı değerlendiriliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Ar-Ge/tasarım indirimi yükümlülüğü 5746 sayılı
              Kanun&apos;un 3. maddesinin 14. fıkrasına, teknokent kazanç
              istisnası yükümlülüğü ise 4691 sayılı Kanun&apos;un Ek 3.
              maddesine dayanıyor. İki ayrı kanun maddesine dayandıkları
              için eşik testi her biri için ayrı ayrı yapılır; somut
              hesaplama şirketin beyanname verileri üzerinden netleştirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Zarar beyan ettim ama teknokent istisnası tutarım eşiği aşıyor; yine de fon ayırmam gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Mevcut özelge yorumlarına göre evet; zarar beyan edilmiş olsa
              bile, yıllık beyannamede istisnaya konu edilen tutar eşiği
              aşıyorsa fon ayırma yükümlülüğü devam ediyor. Bu konuda somut
              durumunuzu güncel GİB özelgeleri ve mali müşavirinizle teyit
              etmeniz önerilir.
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
          Girişim sermayesi fonu ayırma zorunluluğu, Ar-Ge merkezi, tasarım
          merkezi veya teknokent statüsündeki şirketlerin beyanname
          hazırlığında kolayca gözden kaçırılan ama maliyeti somut olan bir
          yükümlülük. 2026&apos;da eşiğin 5 milyon TL&apos;ye yükselmesi,
          orta ölçekli birçok Ar-Ge merkezini bu yükümlülüğün dışına
          çıkarmış olsa da, yüksek Ar-Ge indirimi veya teknokent istisnası
          beyan eden şirketler için konu hâlâ güncelliğini koruyor. Önemli
          olan, tutarın sadece muhasebe kaydıyla ayrılmasının yeterli
          olmadığını, gerçek bir yatırımın 31 Aralık 2026&apos;ya kadar
          tamamlanması gerektiğini baştan planlamak.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">AR-GE MERKEZİ • VERGİ AVANTAJLARI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ar-Ge Merkezi Nedir, Nasıl Kurulur? Şartları ve Vergi Avantajları</h3>
          </Link>
          <Link
            href="/blog/teknopark-nedir-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKNOPARK • TEKNOLOJİ GELİŞTİRME BÖLGESİ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Teknopark Nedir? Avantajları Nelerdir?</h3>
          </Link>
          <Link
            href="/blog/kosgeb-girisim-sermayesi-yatirim-fonu-gsyf-girisimcilere-etkisi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • GİRİŞİM SERMAYESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Girişim Sermayesi Yatırım Fonlarına (GSYF) Ortak Oluyor</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Ar-Ge indirimi kullanan her şirket girişim sermayesi fonu ayırmak zorunda mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Yalnızca yıllık beyannamede Ar-Ge indirimi, tasarım indirimi veya teknokent kazanç istisnası kapsamında yararlanılan tutar, 2026 itibarıyla geçerli olan 5.000.000 TL eşiğini aşan kurumlar vergisi mükellefleri bu yükümlülük kapsamına giriyor. Tutar eşiğin altında kalıyorsa herhangi bir fon ayırma zorunluluğu doğmuyor."}},{"@type":"Question","name":"2026'da girişim sermayesi fonu ayırma eşiği ne kadar yükseldi?","acceptedAnswer":{"@type":"Answer","text":"31 Aralık 2025 tarihli ve 10803 sayılı Cumhurbaşkanı Kararı ile eşik, 2.000.000 TL'den 5.000.000 TL'ye yükseltildi ve 1 Ocak 2026'dan itibaren uygulanmaya başladı. Ayrılacak oran (%3) ve yıllık tavan (100.000.000 TL) değişmedi."}},{"@type":"Question","name":"Fon ayırma zorunluluğunu yerine getirmezsem ne olur?","acceptedAnswer":{"@type":"Answer","text":"Tutar, ilgili yıl sonuna kadar GSYF payı, GSYO payı veya kuluçka merkezi girişimcisine sermaye olarak yatırıma dönüştürülmezse, yararlanılan Ar-Ge indirimi veya teknokent istisnasının %20'si o yıl için geçersiz sayılır ve bu tutar üzerinden ek kurumlar vergisi doğar. Vergi ziyaı cezası kesilmez, ancak zamanında ödenmeyen bu vergi için gecikme faizi işleyebilir."}},{"@type":"Question","name":"Ayrılan tutarı nereye yatırabilirim?","acceptedAnswer":{"@type":"Answer","text":"Üç kanaldan biri kullanılabilir: Türkiye'de yerleşik girişimcilere yatırım yapmak üzere kurulmuş bir girişim sermayesi yatırım fonunun (GSYF) katılma paylarının satın alınması, bir girişim sermayesi yatırım ortaklığının (GSYO) paylarının satın alınması veya 4691 sayılı Kanun kapsamındaki teknokent kuluçka merkezlerinde faaliyette bulunan bir girişimciye doğrudan sermaye konulması."}},{"@type":"Question","name":"Hem Ar-Ge indirimi hem teknokent istisnası kullanıyorum; eşik ayrı mı değerlendiriliyor?","acceptedAnswer":{"@type":"Answer","text":"Evet. Ar-Ge/tasarım indirimi yükümlülüğü 5746 sayılı Kanun'un 3. maddesinin 14. fıkrasına, teknokent kazanç istisnası yükümlülüğü ise 4691 sayılı Kanun'un Ek 3. maddesine dayanıyor. İki ayrı kanun maddesine dayandıkları için eşik testi her biri için ayrı ayrı yapılır; somut hesaplama şirketin beyanname verileri üzerinden netleştirilmelidir."}},{"@type":"Question","name":"Zarar beyan ettim ama teknokent istisnası tutarım eşiği aşıyor; yine de fon ayırmam gerekir mi?","acceptedAnswer":{"@type":"Answer","text":"Mevcut özelge yorumlarına göre evet; zarar beyan edilmiş olsa bile, yıllık beyannamede istisnaya konu edilen tutar eşiği aşıyorsa fon ayırma yükümlülüğü devam ediyor. Bu konuda somut durumunuzu güncel GİB özelgeleri ve mali müşavirinizle teyit etmeniz önerilir."}}]}) }}
      />
    </BlogLayout>
  );
}
