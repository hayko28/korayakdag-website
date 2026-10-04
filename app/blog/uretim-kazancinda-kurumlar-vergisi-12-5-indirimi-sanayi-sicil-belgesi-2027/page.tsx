import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Üretim Kazancında Kurumlar Vergisi %12,5 İndirimi | Koray Akdağ",
  description:
    "Sanayi sicil belgesine sahip ve fiilen üretim yapan kurumların üretim kazançlarına 2027'den itibaren uygulanacak %12,5 indirimli kurumlar vergisi oranı; 7582 sayılı Kanun, 26 Seri No'lu Tebliğ, şartlar, karma faaliyet hesaplaması ve 2026 geçiş dönemiyle güncel rehber.",
  keywords: [
    "kurumlar vergisi %12,5",
    "üretim kazancı indirimli kurumlar vergisi",
    "sanayi sicil belgesi kurumlar vergisi indirimi",
    "7582 sayılı kanun kurumlar vergisi",
    "26 seri no.lu kurumlar vergisi tebliği",
    "2027 kurumlar vergisi oranı",
    "üretim faaliyeti vergi indirimi",
    "indirimli kurumlar vergisi hesaplama",
  ],
  alternates: {
    canonical: "/blog/uretim-kazancinda-kurumlar-vergisi-12-5-indirimi-sanayi-sicil-belgesi-2027",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Üretim Yapan Şirketlerde Kurumlar Vergisi %12,5'e İniyor: Sanayi Sicil Belgesi Şartı ve 2027 Geçişi"
      description="7582 sayılı Kanun ile Kurumlar Vergisi Kanunu'nun 32. maddesinde yapılan değişiklik, sanayi sicil belgesine sahip ve fiilen üretim yapan kurumların üretim kazançlarına 2027'den itibaren %12,5 oranında kurumlar vergisi uygulanmasını öngörüyor. Şartlar, 2026 geçiş dönemi, karma faaliyetli şirketlerde hesaplama ve ihracat indirimiyle ilişkisiyle güncel rehber."
      category="VERGİ DANIŞMANLIĞI • KURUMLAR VERGİSİ İNDİRİMİ • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="uretim-kazancinda-kurumlar-vergisi-12-5-indirimi-sanayi-sicil-belgesi-2027"
      coverImage="https://images.unsplash.com/photo-1613970351372-9804e380bd09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Üretim Kazancınızın İndirimli Orana Uygunluğunu Birlikte Değerlendirelim"
      ctaText="Sanayi Sicil Belgenizden fiili üretim kazancınızın ayrıştırılmasına, ihracat indirimiyle çakışma riskinin önlenmesine kadar şirketinizin 2027 hazırlığını birlikte planlayalım."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Kurumlar vergisi oranı Türkiye&apos;de genel kural olarak %25. Ancak
        2026&apos;nın yaz ayında yürürlüğe giren bir kanun değişikliği,
        sanayi sicil belgesine sahip ve fiilen üretim yapan şirketler için
        bu oranı neredeyse yarıya indiriyor. Değişiklik henüz çok konuşulmadı
        çünkü hemen uygulanmıyor: etkisini 2027 hesap döneminden itibaren
        gösterecek. Ama bu, şirketlerin şimdiden hazırlık yapması gereken bir
        konu değil anlamına gelmiyor; aksine muhasebe kayıtlarının üretim
        kazancını ayrıştırabilecek şekilde düzenlenmesi zaman alan bir iş.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ <strong>7582 sayılı Kanun</strong> ile Kurumlar Vergisi
            Kanunu&apos;nun 32. maddesi değişti: sanayi sicil belgesine sahip
            ve fiilen üretim yapan kurumların münhasıran üretim
            faaliyetinden elde ettiği kazanca <strong>%12,5</strong> oranında
            kurumlar vergisi uygulanacak.
          </li>
          <li>
            ✔ Bu oran <strong>2027 yılı ve sonraki vergilendirme
            dönemlerinde elde edilen kazançlara</strong> uygulanacak; 2026
            kazançları bu yeni oranın kapsamında değil.
          </li>
          <li>
            ✔ <strong>2026 kazançları için</strong> hâlâ eski ve çok daha
            küçük bir indirim geçerli: sanayi sicil belgeli imalatçıların
            üretim kazancına sadece <strong>1 puanlık</strong> indirim
            uygulanıyor (yani %25 değil %24).
          </li>
          <li>
            ✔ İki temel şart var: <strong>Sanayi Sicil Belgesi&apos;ne sahip
            olmak</strong> ve <strong>fiilen üretim faaliyetiyle iştigal
            etmek.</strong> İkisi birlikte aranıyor, biri tek başına yetmiyor.
          </li>
          <li>
            ✔ Hem üretim hem ticaret/kira/faiz geliri olan şirketlerde
            indirimli oran, yalnızca üretim kazancına denk gelen matrah
            kısmına uygulanıyor; belirli bir oranlama formülü var.
          </li>
          <li>
            ✔ Aynı kazanç için bu indirim ile ihracat kazancı indirimi
            (ayrı bir mekanizma) birlikte kullanılamıyor; mükerrer indirim
            yasak.
          </li>
          <li>
            ✔ Uygulama esasları <strong>26 Seri No&apos;lu Kurumlar Vergisi
            Genel Tebliği</strong> ile netleştirildi (4 Temmuz 2026, RG
            33300).
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#yasal-dayanak" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Bu Değişiklik Tam Olarak Ne? Yasal Dayanak
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Hangi Şirketler Yararlanabilir? İki Temel Şart
          </Link>
          <Link href="#gecis" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Ne Zamandan İtibaren? 2026-2027 Farkı
          </Link>
          <Link href="#karma-faaliyet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Karma Faaliyetli Şirketlerde Hesaplama
          </Link>
          <Link href="#ihracat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. İhracat İndirimiyle Birlikte Kullanılır mı?
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Tarım, Yazılım ve Bilişim Üretimi Kapsamda mı?
          </Link>
          <Link href="#yararlanamaz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Kimler Yararlanamaz?
          </Link>
          <Link href="#hazirlik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Şimdiden Yapılması Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. YASAL DAYANAK */}
      <section id="yasal-dayanak" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Bu Değişiklik Tam Olarak Ne? Yasal Dayanak
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TBMM Genel Kurulu&apos;nda 21 Mayıs 2026&apos;da kabul edilen{" "}
          <strong>7582 sayılı Kanun</strong>, 4 Haziran 2026 tarihli ve{" "}
          <strong>33270 sayılı Resmî Gazete</strong>&apos;de yayımlanarak
          yürürlüğe girdi. Kanunun kurumlar vergisiyle ilgili en dikkat
          çeken maddesi, 5520 sayılı Kurumlar Vergisi Kanunu&apos;nun 32.
          maddesinde yapılan değişiklik: sanayi sicil belgesine sahip ve
          fiilen üretim faaliyetiyle iştigal eden kurumların, münhasıran
          üretim faaliyetlerinden elde ettikleri kazançlarına <strong>%12,5
          oranında</strong> kurumlar vergisi uygulanacağı hükme bağlandı.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bu değişikliğin uygulama esasları, Hazine ve Maliye Bakanlığı
          tarafından yayımlanan{" "}
          <strong>Kurumlar Vergisi Genel Tebliği (Seri No: 1)&apos;nde
          Değişiklik Yapılmasına Dair Tebliğ (Seri No: 26)</strong> ile
          netleştirildi. Bu tebliğ 4 Temmuz 2026 tarihli ve 33300 sayılı
          Resmî Gazete&apos;de yayımlandı ve karma faaliyetli şirketlerde
          hesaplama yöntemi, belgeleme şartları ve diğer indirimlerle ilişki
          gibi uygulamada karşılaşılacak detayları açıklıyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kısacası: genel kurumlar vergisi oranı %25 iken, sanayi sicil
            belgeli ve fiilen üretim yapan bir şirketin üretim kazancı için
            vergi yükü <strong>yaklaşık yarı yarıya</strong> düşüyor. Bu,
            tek seferlik bir teşvik değil; kanunun kalıcı, süresiz bir
            hükmü olarak düzenlendi.
          </p>
        </div>
      </section>

      {/* 2. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Hangi Şirketler Yararlanabilir? İki Temel Şart
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İndirimli orandan yararlanmak için iki şartın birlikte sağlanması
          gerekiyor. Biri olmadan diğeri yeterli değil:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📋</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Şart 1: Sanayi Sicil Belgesi
            </h3>
            <p className="text-gray-700">
              Şirketin Sanayi ve Teknoloji Bakanlığı&apos;ndan alınmış,
              güncel ve geçerli bir Sanayi Sicil Belgesi&apos;ne sahip
              olması gerekiyor. Belgedeki üretim konusunun fiili ürün
              gamınızla uyumlu olması da ayrıca önemli; bu konuyu{" "}
              <Link href="/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi" className="text-orange-600 underline">
                NACE kodu ve Sanayi Sicil Belgesi uyumu yazımızda
              </Link>{" "}
              ayrıntılı anlattık.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏭</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Şart 2: Fiilen Üretim Faaliyeti
            </h3>
            <p className="text-gray-700">
              Belgeye sahip olmak yetmiyor; şirketin gerçekten üretim
              yapıyor olması ve indirimden yararlanacak kazancın{" "}
              <strong>münhasıran</strong> bu üretim faaliyetinden elde
              edilmiş olması gerekiyor. Yalnızca fason üretim yaptırıp
              ticaretini yapan ya da üretim hattı fiilen çalışmayan
              şirketler bu şartı taşımaz.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="leading-8 text-gray-700">
            Bu indirimi, Yatırım Teşvik Belgesi kapsamındaki{" "}
            <strong>indirimli kurumlar vergisi uygulamasıyla</strong>{" "}
            karıştırmamak gerekir. Yatırım Teşvik Belgesi&apos;ndeki indirim
            belirli bir yatırıma bağlıdır, oranı projeye ve bölgeye göre
            değişir, yatırıma katkı tutarına ulaşılana kadar kademeli
            işler. Burada anlattığımız %12,5&apos;lik indirim ise herhangi
            bir yatırım yapmayı gerektirmez; sadece Sanayi Sicil Belgesi
            ve fiilen üretim yapmak yeterlidir, her yıl otomatik olarak
            uygulanan kalıcı bir kanun hükmüdür.{" "}
            <Link href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026" className="text-orange-600 underline">
              Yatırım Teşvik Belgesi&apos;ndeki indirimli kurumlar vergisini
              ayrı yazımızda inceledik.
            </Link>
          </p>
        </div>
      </section>

      {/* 3. GEÇİŞ */}
      <section id="gecis" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Ne Zamandan İtibaren Uygulanacak? 2026-2027 Farkı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu, en çok karıştırılan nokta: kanun 2026&apos;da yürürlüğe girdi
          ama %12,5&apos;lik oran henüz 2026 kazançlarına uygulanmıyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Dönem</th>
                <th className="p-5">Üretim Kazancına Uygulanan İndirim</th>
                <th className="p-5">Efektif Oran</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">2026 vergilendirme dönemi</td>
                <td className="p-5">Eski, daha küçük indirim: 1 puan</td>
                <td className="p-5 font-bold">%24</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">2027 ve sonraki dönemler</td>
                <td className="p-5">Yeni indirim: 12,5 puan</td>
                <td className="p-5 font-bold text-green-700">%12,5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Pratikte bu, şirketlerin 2027 hesap dönemi kazançları için
          vereceği kurumlar vergisi beyannamesinde (normal şartlarda Nisan
          2028&apos;de) yeni oranı ilk kez uygulayacağı anlamına geliyor.
          2026 yılı kazançları için ise sanayi sicil belgeli imalatçıların
          üretim kazancına 2022&apos;den beri yürürlükte olan 1 puanlık
          indirim (yani %24&apos;lük oran) uygulanmaya devam ediyor.
        </p>
      </section>

      {/* 4. KARMA FAALİYET */}
      <section id="karma-faaliyet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Karma Faaliyetli Şirketlerde Hesaplama Nasıl Yapılır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Çoğu üretici şirketin geliri sadece üretimden gelmiyor; ticari
          mal satışı, kira geliri, faiz veya kur farkı geliri gibi üretim
          dışı kazanç kalemleri de olabiliyor. 26 Seri No&apos;lu Tebliğ,
          bu durumda indirimli orana tabi matrahın nasıl bulunacağını bir
          formülle açıklıyor:
        </p>
        <div className="rounded-2xl border-2 border-[#071A2F] bg-gray-50 p-8 text-center">
          <p className="text-xl font-bold text-[#071A2F]">
            İndirimli Orana Tabi Matrah = Kurumlar Vergisi Matrahı ×
            (Üretim Faaliyeti Kazancı ÷ Ticari Bilanço Kârı)
          </p>
        </div>
        <p className="mt-8 mb-6 leading-8 text-gray-700">
          Bulunan bu tutar, hem fiili üretim kazancını hem de toplam
          matrahı aşamaz. Basit bir örnekle gösterelim:
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
                <td className="p-5">Ticari bilanço kârı</td>
                <td className="p-5">2.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Üretim faaliyetinden elde edilen kazanç</td>
                <td className="p-5">1.400.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Kurumlar vergisi matrahı</td>
                <td className="p-5">1.300.000 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">İndirimli orana tabi matrah (1.300.000 × 1.400.000/2.000.000)</td>
                <td className="p-5 font-bold text-green-700">910.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu örnekte matrahın 910.000 TL&apos;lik kısmı %12,5 oranında,
          kalan 390.000 TL&apos;lik kısmı ise genel %25 oranında
          vergilendirilecek. Bu hesaplamanın doğru yapılabilmesi için
          üretim kazancının muhasebe kayıtlarında ayrıştırılabilir olması
          gerekiyor; bu da maliyet muhasebesi düzeninin önemini artırıyor.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Üretim kazancının ayrıştırılmasında en sık gözden kaçan nokta,
            genel yönetim giderleri ve ortak maliyet kalemlerinin üretim
            ile üretim dışı faaliyetler arasında tutarlı bir dağıtım
            anahtarıyla paylaştırılması gerektiğidir. Şirketler çoğu zaman
            bu dağıtımı yalnızca beyanname dönemine yaklaşınca, geriye
            dönük ve aceleyle yapmaya çalışıyor; oysa 2027 dönemine
            girmeden önce, 2026 yılı içinde maliyet muhasebesi ve
            muhasebe kodlama düzeninin üretim/üretim dışı ayrımını net
            şekilde yapabilecek hale getirilmesi, hem indirimden tam
            yararlanmayı hem de olası bir incelemede tutarlı belge
            sunmayı kolaylaştırır.
          </p>
        </div>
      </section>

      {/* 5. İHRACAT */}
      <section id="ihracat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. İhracat İndirimiyle Birlikte Kullanılabilir mi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hayır, aynı kazanç için ikisi birlikte kullanılamıyor. Kurumlar
          Vergisi Kanunu&apos;nun 32. maddesinde ihracat yapan kurumların
          ihracattan elde ettiği kazanca ayrı bir indirim (5 puan)
          uygulanabiliyor. Ancak hem üretim hem ihracat yapan bir şirketin
          aynı kazanç kalemi için <strong>her iki indirimden birden
          yararlanması mükerrerlik yasağı</strong> nedeniyle mümkün değil.
          Üretim ve ihracatı birlikte yapan şirketlerde kazanç, hangi
          faaliyetten doğduğuna göre ayrıştırılır ve her bölüm kendi
          indirim mekanizmasına tabi olur; aynı kazanç kalemi için
          çakışma olduğunda tebliğ, ayrıca bir indirim uygulanmayacağını
          açıkça belirtiyor.
        </p>
        <p className="leading-8 text-gray-700">
          Bu nedenle ihracatçı imalatçı şirketlerin, hangi kazanç kalemini
          hangi indirim mekanizmasına göre raporlayacaklarını önceden
          planlaması, vergi yükünü en aza indirmek açısından önem taşıyor.
        </p>
      </section>

      {/* 6. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Tarım, Yazılım ve Bilişim Üretimi de Kapsamda mı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Düzenleme sadece klasik sanayi üretimiyle sınırlı değil:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li>
            <strong>Zirai üretim:</strong> Tarım ve Orman Bakanlığı&apos;nca
            verilen ilgili belgeye (çiftçi kayıt sistemi kaydı, üretici
            belgesi veya gıda işletme kayıt belgesi gibi) sahip olup
            fiilen zirai üretim yapan kurumlar, münhasıran bu
            faaliyetten elde ettikleri kazanca aynı %12,5 oranından
            yararlanabiliyor.
          </li>
          <li>
            <strong>Yazılım ve bilişim üretimi:</strong> Sanayi sicil
            belgesi kapsamında münhasıran yazılım, bilişim ve benzeri
            alanlarda üretim faaliyeti gerçekleştiren kurumların bu
            faaliyetten elde ettiği kazanç da %12,5 oranına tabi
            tutulabiliyor.
          </li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Buna karşılık emtia alım-satım kazancı, kira geliri, faiz geliri
          ve kur farkı geliri gibi kazanç kalemleri, hiçbir şekilde üretim
          faaliyeti sayılmıyor ve indirimli orana giremiyor.
        </p>
      </section>

      {/* 7. YARARLANAMAZ */}
      <section id="yararlanamaz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kimler Yararlanamaz?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Sanayi Sicil Belgesi olmayan şirketler
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Belgesi olup fiilen üretim yapmayan (örneğin yalnızca fason
            ürün alıp satan) şirketler
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Üretim faaliyetinden zarar eden, yani üretim kazancı
            negatif olan şirketler
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Kazancı münhasıran ticaret, kira, faiz veya kur farkından
            oluşan şirketler
          </div>
        </div>
      </section>

      {/* 8. HAZIRLIK */}
      <section id="hazirlik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Şimdiden Yapılması Gerekenler
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          2027 dönemine henüz zaman var ama hazırlığı 2026 içinde başlatmak,
          indirimden tam ve sorunsuz yararlanmayı kolaylaştırır:
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Sanayi Sicil Belgesi Kontrolü</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Üretim Kazancı Ayrıştırma Düzeni</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Maliyet Dağıtım Anahtarı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">İhracat Kazancı Ayrımı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">2027 Beyan Simülasyonu</h3>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Şirketinizin Sanayi Sicil Belgesi&apos;nin güncelliğinden
            üretim kazancınızın muhasebe kayıtlarında doğru ayrıştırılmasına
            kadar 2027 hazırlığını birlikte planlayabiliriz.{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Şirketinizin güncel durumunu ücretsiz ön analizle birlikte
              değerlendirelim.
            </Link>
          </p>
        </div>
      </section>

      {/* 9. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.tbmm.gov.tr/Yasama/Kanun/40D8244E-D703-48E3-A36B-019DF6DF408B"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TBMM - 7582 Sayılı Kanun
            </a>
          </li>
          <li>
            <a
              href="https://gib.gov.tr/mevzuat/kanun/435/teblig/11877"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gelir İdaresi Başkanlığı - Kurumlar Vergisi Genel Tebliği (Seri No: 26)
            </a>
          </li>
          <li>
            <a
              href="https://www.mevzuat.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Mevzuat Bilgi Sistemi - Resmî Gazete Arşivi
            </a>
          </li>
          <li>
            <a
              href="https://www.sanayi.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Sanayi ve Teknoloji Bakanlığı - Sanayi Sicil Belgesi
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
              %12,5 oranı 2026 kazançlarım için şimdiden geçerli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Yeni oran 2027 yılı ve sonraki vergilendirme
              dönemlerinde elde edilen kazançlara uygulanacak. 2026 yılı
              kazançları için sanayi sicil belgeli imalatçıların üretim
              kazancına hâlâ eski, 1 puanlık indirim (yani %24&apos;lük
              oran) geçerli.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sanayi Sicil Belgem var ama henüz üretime başlamadım, yararlanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. İndirim, sadece belgeye sahip olmayı değil, fiilen
              üretim faaliyetiyle iştigal etmeyi ve indirime konu
              kazancın münhasıran bu faaliyetten elde edilmiş olmasını
              şart koşuyor. Belge varken fiili üretim yoksa şart
              sağlanmamış olur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hem üretim hem ticaret yapan bir şirket indirimden tam olarak yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, kazancının tamamı değil sadece üretim faaliyetine
              isabet eden kısmı indirimli orana tabi olur. Bu kısım,
              tebliğdeki formülle (matrah × üretim kazancı/ticari bilanço
              kârı) hesaplanır ve kalan kısım genel %25 oranında
              vergilendirilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İhracat yapan bir imalatçı olarak hem ihracat indirimini hem bu indirimi aynı kazanca uygulayabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Aynı kazanç kalemi için iki indirim birlikte
              uygulanamaz; mükerrerlik yasağı var. Üretim kazancınız ile
              ihracat kazancınız ayrıştırılarak her biri kendi indirim
              mekanizmasına göre değerlendirilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yazılım şirketiyim, Sanayi Sicil Belgesi alırsam bu indirimden yararlanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Sanayi sicil belgesi kapsamında münhasıran yazılım veya
              bilişim alanında üretim faaliyeti yürüttüğünüz ve bunu
              belgeleyebildiğiniz ölçüde, bu faaliyetten elde ettiğiniz
              kazanç da %12,5 oranından yararlanabiliyor. Belgenin kapsamı
              ve fiili faaliyetinizin bu kapsamla uyumu burada belirleyici.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu indirim, kurumlar vergisi beyannamesinde nasıl gösteriliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              İndirim, kurumlar vergisi beyannamesinin &quot;Kazancın
              Bulunması Halinde İndirilecek İstisna ve İndirimler&quot;
              bölümünde ayrıca gösteriliyor. Üretim kazancının doğru
              hesaplanabilmesi için muhasebe kayıtlarının bu ayrımı
              destekleyecek şekilde tutulması gerekiyor.
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
          7582 sayılı Kanun ile getirilen bu düzenleme, sanayi sicil
          belgesine sahip ve fiilen üretim yapan Türkiye&apos;deki
          şirketler için gerçek bir vergi avantajı sunuyor: 2027&apos;den
          itibaren üretim kazancında kurumlar vergisi yükü neredeyse
          yarıya düşecek. Ancak bu avantajdan tam olarak yararlanmak,
          belgenizin güncel olmasından üretim kazancınızın muhasebe
          kayıtlarında doğru ayrıştırılmasına kadar birkaç hazırlık
          adımını önceden tamamlamayı gerektiriyor. 2026 yılı, bu
          hazırlığı yapmak için tam da gereken zaman penceresi.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • NACE KODU • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">NACE Kodu Ürettiğim Ürünle Uyuşmuyorsa Ne Olur?</h3>
          </Link>
          <Link
            href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YATIRIM TEŞVİK BELGESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgesi Nedir? Faydaları ve Şartları</h3>
          </Link>
          <Link
            href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ulusal ve Uluslararası Vergi Danışmanlığı: KOBİ&apos;ler İçin Neden Gerekli?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"%12,5 oranı 2026 kazançlarım için şimdiden geçerli mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Yeni oran 2027 yılı ve sonraki vergilendirme dönemlerinde elde edilen kazançlara uygulanacak. 2026 yılı kazançları için sanayi sicil belgeli imalatçıların üretim kazancına hâlâ eski, 1 puanlık indirim (yani %24'lük oran) geçerli."}},{"@type":"Question","name":"Sanayi Sicil Belgem var ama henüz üretime başlamadım, yararlanabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. İndirim, sadece belgeye sahip olmayı değil, fiilen üretim faaliyetiyle iştigal etmeyi ve indirime konu kazancın münhasıran bu faaliyetten elde edilmiş olmasını şart koşuyor. Belge varken fiili üretim yoksa şart sağlanmamış olur."}},{"@type":"Question","name":"Hem üretim hem ticaret yapan bir şirket indirimden tam olarak yararlanabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, kazancının tamamı değil sadece üretim faaliyetine isabet eden kısmı indirimli orana tabi olur. Bu kısım, tebliğdeki formülle (matrah çarpı üretim kazancı bölü ticari bilanço kârı) hesaplanır ve kalan kısım genel %25 oranında vergilendirilir."}},{"@type":"Question","name":"İhracat yapan bir imalatçı olarak hem ihracat indirimini hem bu indirimi aynı kazanca uygulayabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Aynı kazanç kalemi için iki indirim birlikte uygulanamaz; mükerrerlik yasağı var. Üretim kazancınız ile ihracat kazancınız ayrıştırılarak her biri kendi indirim mekanizmasına göre değerlendirilir."}},{"@type":"Question","name":"Yazılım şirketiyim, Sanayi Sicil Belgesi alırsam bu indirimden yararlanabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Sanayi sicil belgesi kapsamında münhasıran yazılım veya bilişim alanında üretim faaliyeti yürüttüğünüz ve bunu belgeleyebildiğiniz ölçüde, bu faaliyetten elde ettiğiniz kazanç da %12,5 oranından yararlanabiliyor. Belgenin kapsamı ve fiili faaliyetinizin bu kapsamla uyumu burada belirleyici."}},{"@type":"Question","name":"Bu indirim, kurumlar vergisi beyannamesinde nasıl gösteriliyor?","acceptedAnswer":{"@type":"Answer","text":"İndirim, kurumlar vergisi beyannamesinin 'Kazancın Bulunması Halinde İndirilecek İstisna ve İndirimler' bölümünde ayrıca gösteriliyor. Üretim kazancının doğru hesaplanabilmesi için muhasebe kayıtlarının bu ayrımı destekleyecek şekilde tutulması gerekiyor."}}]}) }}
      />
    </BlogLayout>
  );
}
