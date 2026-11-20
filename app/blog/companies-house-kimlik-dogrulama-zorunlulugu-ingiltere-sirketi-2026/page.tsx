import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Companies House Kimlik Doğrulaması 2026 | Koray Akdağ",
  description:
    "İngiltere'de Companies House kimlik doğrulama zorunluluğunda 18 Kasım 2025'te başlayan 12 aylık geçiş süresi 18 Kasım 2026'da sona erdi. Yönetici, PSC ve yurt dışı şirket şubeleri için takvim, doğrulama yolları ve doğrulamadan kaçınmanın sonuçlarıyla güncel rehber.",
  keywords: [
    "companies house kimlik doğrulama",
    "identity verification companies house",
    "ingiltere şirketi director doğrulama",
    "companies house confirmation statement",
    "ingiltere ltd şirketi kimlik doğrulama zorunluluğu",
    "PSC kimlik doğrulama",
    "GOV.UK One Login şirket doğrulama",
    "ACSP nedir",
    "economic crime and corporate transparency act 2023",
  ],
  alternates: {
    canonical:
      "/blog/companies-house-kimlik-dogrulama-zorunlulugu-ingiltere-sirketi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Companies House Kimlik Doğrulamasını Yaptırmadıysanız Ne Olur? İngiltere'deki Şirketiniz İçin Geçiş Süresi Sona Erdi"
      description="18 Kasım 2025'te başlayan 12 aylık geçiş süresi 18 Kasım 2026'da sona erdi; Companies House bu konudaki rehber sayfasını aynı gün resmen güncelleyerek geçiş dönemini kapattı. İngiltere'de Ltd veya LLP şirketi olan Türk girişimciler için kimlik doğrulamasının kim için, hangi tarihe bağlı olduğu, nasıl yapıldığı ve yapılmazsa ne olacağıyla güncel rehber."
      category="YURT DIŞI ŞİRKET • İNGİLTERE • 2026"
      date="Kasım 2026"
      readTime="11 Dakika"
      slug="companies-house-kimlik-dogrulama-zorunlulugu-ingiltere-sirketi-2026"
      coverImage="https://images.unsplash.com/photo-1593781492912-bb538a002c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="İngiltere Şirketinizin Kimlik Doğrulama Durumunu Birlikte Netleştirelim"
      ctaText="Yöneticinizin veya ortağınızın doğrulama yükümlülüğünün hangi tarihe bağlı olduğunu, confirmation statement üzerindeki etkisini ve ACSP yoluyla ilerleme seçeneklerini birlikte değerlendirelim. İngiltere'deki şirketinizin kuruluşunu da, kuruluş sonrası muhasebe ve uyum sürecini de ayrı bir yerel firma aramanıza gerek kalmadan biz yönetiyoruz."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Companies House Kimlik Doğrulamasında Durum Ne?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>
            ✔ İngiltere&apos;de Companies House&apos;a kayıtlı tüm{" "}
            <strong>director</strong>, <strong>LLP üyesi</strong> ve{" "}
            <strong>PSC&apos;lerin (önemli kontrol sahibi kişi)</strong>{" "}
            kimliğini doğrulaması, 18 Kasım 2025&apos;ten beri yasal bir
            zorunluluk.
          </li>
          <li>
            ✔ Bu zorunluluğa geçiş için tanınan <strong>12 aylık geçiş
            süresi 18 Kasım 2026&apos;da sona erdi</strong>; Companies
            House, konuyla ilgili resmi rehber sayfasını aynı tarihte
            güncelleyerek geçiş dönemini kapattı.
          </li>
          <li>
            ✔ Mevcut yöneticiler için doğrulama tek bir takvim gününe değil,
            şirketin <strong>bir sonraki confirmation statement&apos;ına</strong>{" "}
            bağlı; bu yüzden birçok şirket için &quot;kendi son tarihi&quot;
            zaten geçmiş, bazıları için ise hâlâ önünde.
          </li>
          <li>
            ✔ Doğrulamadan kaçınan yönetici, görevine devam ederse suç
            işlemiş olur; şirket ise doğrulama tamamlanana kadar{" "}
            <strong>confirmation statement dahil</strong> birçok resmi
            belgeyi Companies House&apos;a sunamaz.
          </li>
          <li>
            ✔ Doğrulama, GOV.UK One Login üzerinden <strong>ücretsiz</strong>{" "}
            veya ücretli bir <strong>ACSP (yetkili kurumsal hizmet
            sağlayıcı)</strong> aracılığıyla yapılabilir; Türkiye&apos;den
            yaşayan yöneticiler de pasaportlarıyla uzaktan doğrulama
            yapabilir.
          </li>
          <li>
            ✔ Yurt dışında kurulu şirketlerin İngiltere&apos;deki şubeleri
            için ayrı bir takvim var: doğrulamanın UK kaydının{" "}
            <strong>yıl dönümüne kadar</strong> tamamlanmış olması
            gerekiyor.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Companies House Kimlik Doğrulaması Nedir, Neden Getirildi?
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Zorunluluk Takvimi: 18 Kasım 2025&apos;ten Bugüne
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Karıştırmayın: Geçiş Süresinin Genel Son Tarihi mi, Sizin Şirketinizin Tarihi mi?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Kimler Doğrulama Yapmak Zorunda?
          </Link>
          <Link href="#nasil" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Doğrulama Nasıl Yapılır?
          </Link>
          <Link href="#sonuclar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Doğrulama Yapılmazsa Ne Olur?
          </Link>
          <Link href="#turkiyeden" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Türkiye&apos;den Yönetilen İngiltere Şirketleri İçin Durum
          </Link>
          <Link href="#ne-yapmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Şimdi Ne Yapmalı?
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
          1. Companies House Kimlik Doğrulaması Nedir, Neden Getirildi?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          2023 tarihli <strong>Economic Crime and Corporate Transparency
          Act</strong> ile İngiltere, şirketler sicilini yöneten Companies
          House&apos;a, kayıtlı şirketlerin arkasındaki gerçek kişilerin
          kimliğini doğrulama yetkisi ve görevi verdi. Amaç, hayali veya
          çalıntı kimliklerle kurulan paravan şirketleri, kara para aklamayı
          ve dolandırıcılık amaçlı kullanılan Ltd şirketlerini azaltmak.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu kapsamda, bir şirketi kuran, yöneten veya üzerinde önemli
          kontrol sahibi olan her gerçek kişi, artık sadece isim ve adres
          beyan etmekle kalmıyor; kimliğini resmi bir belgeyle (pasaport,
          İngiltere ehliyeti vb.) doğrulamak zorunda. Bu kural, İngiltere
          vatandaşı olmayan ve İngiltere&apos;de ikamet etmeyen yöneticiler
          için de aynen geçerli, yani Türkiye&apos;den bir İngiltere Ltd
          şirketini yöneten her Türk vatandaşını doğrudan ilgilendiriyor.
        </p>
      </section>

      {/* 2. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Zorunluluk Takvimi: 18 Kasım 2025&apos;ten Bugüne
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Companies House, kuralı tek bir günde değil, rolden role farklı
          tetikleyicilerle aşamalı olarak uygulamaya aldı:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Rol</th>
                <th className="p-5">Doğrulama Zamanı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yeni atanan director / LLP üyesi</td>
                <td className="p-5">18 Kasım 2025&apos;ten itibaren, atama Companies House&apos;a bildirilmeden önce</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mevcut director / LLP üyesi (PSC değilse)</td>
                <td className="p-5">Şirketin 18 Kasım 2025&apos;ten sonraki ilk confirmation statement&apos;ı sunulmadan önce</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yeni PSC</td>
                <td className="p-5">Companies House&apos;a bildirildikten sonraki 14 gün içinde</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mevcut PSC (yönetici değilse)</td>
                <td className="p-5">Geçiş süresi içinde, doğum ayının ilk 14 günü içinde</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Yurt dışı şirketin İngiltere şubesi (mevcut kayıt)</td>
                <td className="p-5">UK kaydının yıl dönümüne kadar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu aşamalı yapıya tanınan genel geçiş süresi <strong>18 Kasım
          2025 - 18 Kasım 2026</strong> arasındaki 12 aylık dönemdi.
          Companies House, bu sürenin bittiği 18 Kasım 2026&apos;da konuyla
          ilgili resmi rehber sayfasını güncelleyip geçiş dönemini resmen
          kapattı; yani bu satırların yazıldığı Kasım 2026 itibarıyla
          geçiş süresi artık geride kaldı.
        </p>
      </section>

      {/* 3. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Karıştırmayın: Geçiş Süresinin Genel Son Tarihi mi, Sizin Şirketinizin Tarihi mi?
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ &quot;18 Kasım 2026 Geçti, Artık Önemi Yok&quot; Demek Yanlış
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            18 Kasım 2026, geçiş sürecinin genel çerçevesinin kapandığı
            tarih; ama bu, her şirketin kendi doğrulama yükümlülüğünün o
            gün sona erdiği anlamına gelmiyor. İki ayrı tarihi birbirine
            karıştırmamak gerekiyor:
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Geçiş Sürecinin Genel Tarihi</th>
                  <th className="p-4">Sizin Şirketinizin Asıl Tarihi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Ne anlama gelir</td>
                  <td className="p-4">Companies House&apos;un kuralı tüm sicile aşamalı olarak yerleştirdiği 12 aylık dönemin sonu</td>
                  <td className="p-4">Director/LLP üyesi için şirketin confirmation statement tarihi, PSC için doğum ayı</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Herkes için aynı mı</td>
                  <td className="p-4">Evet, tek bir tarih (18 Kasım 2026)</td>
                  <td className="p-4">Hayır, her şirkete ve kişiye göre değişir</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Pratik sonucu</td>
                  <td className="p-4">Artık &quot;geçiş kolaylığı&quot; yok, kural tam kapsamıyla işliyor</td>
                  <td className="p-4">Confirmation statement tarihiniz Ocak 2026&apos;ysa yükümlülüğünüz zaten geçmişte doğdu; tarihiniz Aralık 2026&apos;ysa önünüzde</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Kısacası, &quot;geçiş süresi bitti&quot; haberi sizi rahatlatmamalı;
            tersine, kendi şirketinizin confirmation statement veya PSC
            doğum ayı tarihini netleştirmek şimdi daha kritik, çünkü artık
            geriye dönük bir tolerans dönemi yok.
          </p>
        </div>
      </section>

      {/* 4. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Kimler Doğrulama Yapmak Zorunda?
        </h2>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li>
            <strong>Director (yönetici):</strong> Şirketin yönetim kurulu
            üyesi olarak Companies House&apos;a kayıtlı her gerçek kişi.
          </li>
          <li>
            <strong>LLP üyeleri:</strong> Limited Liability Partnership
            yapısındaki ortaklar, director muadili sayılır.
          </li>
          <li>
            <strong>PSC (Person with Significant Control):</strong>{" "}
            Şirkette %25&apos;in üzerinde hisse veya oy hakkına sahip ya da
            şirket üzerinde benzer düzeyde kontrolü bulunan kişiler.
          </li>
          <li>
            <strong>Yurt dışı şirketlerin İngiltere şubesindeki yöneticileri:</strong>{" "}
            İngiltere&apos;de şube olarak kayıtlı yabancı şirketlerin
            yöneticileri de aynı kurala tabi.
          </li>
          <li>
            <strong>ACSP&apos;ler (yetkili kurumsal hizmet sağlayıcılar):</strong>{" "}
            Başkaları adına Companies House&apos;a başvuru yapan muhasebeci,
            avukat veya şirket kuruluş ajansları da kendi kimliklerini
            doğrulamak zorunda.
          </li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Pratikte Türk girişimcilerin büyük çoğunluğu, kendi kurdukları
          İngiltere Ltd şirketinde hem director hem de PSC sıfatını aynı
          anda taşıyor; bu durumda yönetici olarak bir, PSC olarak da ayrı
          bir kişisel kodu Companies House&apos;a bildirmeleri gerekiyor.
        </p>
      </section>

      {/* 5. NASIL */}
      <section id="nasil" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Doğrulama Nasıl Yapılır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Doğrulama iki ayrı yoldan tamamlanabiliyor; ikisi de aynı güvence
          seviyesini sağlamak zorunda, yalnızca maliyet ve pratiklik
          açısından farklılaşıyor.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">GOV.UK One Login (Ücretsiz)</h3>
            <p className="mt-2 text-sm text-gray-600">
              Herhangi bir ülkeden alınmış biyometrik pasaport, İngiltere
              ehliyeti, BRP veya BRC ile GOV.UK One Login hesabı üzerinden
              doğrudan yapılan çevrimiçi doğrulama. Türkiye&apos;deki bir
              yönetici, geçerli bir Türk pasaportuyla bu yolu kullanabilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">ACSP Üzerinden (Ücretli)</h3>
            <p className="mt-2 text-sm text-gray-600">
              Kara para aklamayı önleme (AML) denetimine tabi bir
              muhasebeci, avukat veya şirket kuruluş ajansı, kimliğinizi
              sizin adınıza doğrulayıp sonucu Companies House&apos;a
              bildirir. Pasaportunuzdaki isim ile resmi yazışmalardaki isim
              farklıysa veya kendi başınıza işlem yapmak istemiyorsanız bu
              yol daha pratik olabilir.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Doğrulama tamamlandığında kişiye bir kerelik, kalıcı bir{" "}
            <strong>kişisel doğrulama kodu</strong> verilir. Bu kod,
            doğrulamanın yapıldığı her rol için (örneğin aynı kişi birden
            fazla şirkette director ise her şirket için) Companies
            House&apos;a ayrıca bildirilmelidir. Doğrulama süresiz
            geçerlidir; Companies House şüpheli bir durumda yeniden
            doğrulama talep edebilir.
          </p>
        </div>
      </section>

      {/* 6. SONUÇLAR */}
      <section id="sonuclar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Doğrulama Yapılmazsa Ne Olur?
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>
              Doğrulanmamış bir kişinin director olarak görevine devam
              etmesi, kendisi ve şirket için <strong>suç teşkil ediyor</strong>{" "}
              (Companies House, geçiş döneminde kovuşturmanın istisnai
              kalacağını belirtmişti, ancak bu dönem artık sona erdi).
            </li>
            <li>
              Doğrulama tamamlanana kadar şirket, <strong>confirmation
              statement</strong> dahil birçok resmi belgeyi Companies
              House&apos;a sunamaz.
            </li>
            <li>
              Confirmation statement süresinde sunulamazsa, bu genel
              şirketler hukuku kuralları çerçevesinde gecikme cezası ve,
              sorun uzun süre çözülmezse, şirketin sicilden{" "}
              <strong>re&apos;sen silinmesi (strike off)</strong> riskini
              doğurabilir.
            </li>
            <li>
              Doğrulanmamış bir kişi, yeni bir İngiltere şirketi kurmak
              için de başvuru yapamaz.
            </li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, kişinin kendi doğrulama
            tarihinin tek bir takvim gününe değil, şirketin confirmation
            statement tarihine bağlı olduğunu bilmemesi. Bir Ltd şirketin
            confirmation statement&apos;ının yıl içinde hangi tarihe denk
            geldiğini kontrol etmeden &quot;geçiş süresi daha bitmedi, zamanım
            var&quot; düşüncesiyle hareket etmek, doğrulamanın şirketin
            kendi dönüm noktasında aniden ve bazen son anda gerekli hale
            gelmesine yol açıyor. Aynı kişi birden fazla İngiltere
            şirketinde yöneticiyse, her şirket için ayrı confirmation
            statement tarihi ve ayrı kod bildirimi takip edilmelidir.
          </p>
        </div>
      </section>

      {/* 7. TÜRKİYE'DEN YÖNETİLEN ŞİRKETLER */}
      <section id="turkiyeden" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye&apos;den Yönetilen İngiltere Şirketleri İçin Durum
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Kural, yöneticinin uyruğuna veya ikamet yerine göre bir ayrım
          yapmıyor; Türkiye&apos;de yaşayan ve İngiltere&apos;ye hiç
          gitmemiş bir director de aynı şekilde doğrulama yapmak zorunda.
          Uygulamada bu, geçerli bir Türk pasaportuyla GOV.UK One Login
          üzerinden tamamen uzaktan yapılabiliyor; pasaportun süresinin
          dolmamış olması yeterli, İngiltere&apos;de fiziksel bulunma
          şartı yok.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            İngiltere&apos;deki şirketinizin kuruluşunu belge hazırlığından
            Companies House kaydına kadar baştan sona biz yürütüyoruz.
            Kuruluş sonrasında da muhasebe, raporlama ve confirmation
            statement gibi uyum yükümlülüklerinizi, ayrı bir yerel firma
            aramanıza gerek kalmadan biz takip ediyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Yöneticinizin veya ortağınızın kimlik doğrulama durumunu
              birlikte netleştirmek için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 8. NE YAPMALI */}
      <section id="ne-yapmali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Şimdi Ne Yapmalı?
        </h2>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Rollerinizi listeleyin</h3>
            <p className="mt-2 text-sm text-gray-600">
              Şirkette director, LLP üyesi ve/veya PSC olarak hangi
              rollerde kayıtlı olduğunuzu Companies House sicilinden
              kontrol edin.
            </p>
          </div>
          <div className="rounded-xl border-2 border-orange-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Confirmation statement tarihini bulun</h3>
            <p className="mt-2 text-sm text-gray-600">
              Şirketinizin bir sonraki confirmation statement tarihini
              Companies House kaydından teyit edin; director/LLP üyesi
              doğrulamanız bu tarihe bağlı.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">Doğrulama yolunu seçin</h3>
            <p className="mt-2 text-sm text-gray-600">
              Geçerli bir pasaportunuz varsa GOV.UK One Login üzerinden
              doğrudan, yoksa veya pratiklik istiyorsanız bir ACSP
              üzerinden doğrulamayı tamamlayın.
            </p>
          </div>
          <div className="rounded-xl border-2 border-emerald-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">Kodu Companies House&apos;a bildirin</h3>
            <p className="mt-2 text-sm text-gray-600">
              Aldığınız kişisel kodu, doğrulamanın geçerli olduğu her rol
              için ayrı ayrı Companies House kaydına işletin.
            </p>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Süresi dolmuş pasaportla doğrulama yapılamaz, yenileme sürecini önceden planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Birden fazla İngiltere şirketinde yöneticiyseniz her şirket için ayrı takip gerekir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ GOV.UK One Login hesabına bağlı e-posta adresi yalnızca bir kimlik doğrulamasında kullanılabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hem director hem PSC iseniz iki ayrı kod bildirimi gerektiğini unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kimliğinizi başka bir kişinin şirket kurması için asla paylaşmayın veya devretmeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt dışı şirket şubeleri için takvim UK kaydının yıl dönümüne bağlıdır, ayrıca kontrol edin
          </div>
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
              <a href="https://www.gov.uk/guidance/verify-your-identity-for-companies-house" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                GOV.UK - Verify Your Identity for Companies House
              </a>
            </li>
            <li>
              <a href="https://www.gov.uk/guidance/when-you-need-to-verify-your-identity-for-companies-house" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                GOV.UK - When You Need to Verify Your Identity for Companies House
              </a>
            </li>
            <li>
              <a href="https://changestoukcompanylaw.campaign.gov.uk/identity-verification/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Companies House - Changes to UK Company Law: Identity Verification
              </a>
            </li>
            <li>
              <a href="https://www.gov.uk/government/news/companies-house-confirms-identity-verification-rollout-from-18-november-2025" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                GOV.UK - Companies House Confirms Identity Verification Rollout From 18 November 2025
              </a>
            </li>
            <li>
              <a href="https://companieshouse.blog.gov.uk/2025/11/06/how-companies-house-is-helping-businesses-prepare-for-identity-verification/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Companies House Blog - How Companies House Is Helping Businesses Prepare for Identity Verification
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
              Companies House kimlik doğrulaması nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              2023 tarihli Economic Crime and Corporate Transparency Act
              kapsamında getirilen, bir İngiltere şirketinin director,
              LLP üyesi veya PSC&apos;sinin kimliğini pasaport veya benzeri
              bir belgeyle resmi olarak doğrulamasını zorunlu kılan
              uygulamadır. 18 Kasım 2025&apos;ten beri yasal bir yükümlülük
              haline geldi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İngiltere&apos;deki şirketimin yöneticisi kimlik doğrulamasını yapmazsa ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Doğrulanmamış kişinin director olarak görev yapmaya devam
              etmesi suç teşkil eder. Şirket ise doğrulama tamamlanana
              kadar confirmation statement dahil birçok resmi belgeyi
              Companies House&apos;a sunamaz; bu durum uzarsa şirketin
              sicilden silinmesi riski doğabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kimlik doğrulamasını Türkiye&apos;den, İngiltere&apos;ye gitmeden yapabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Kural uyruk veya ikamet yerine göre bir ayrım yapmaz.
              Geçerli, süresi dolmamış bir pasaportla GOV.UK One Login
              üzerinden tamamen uzaktan doğrulama yapılabilir; İngiltere&apos;de
              fiziksel bulunma şartı yoktur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Confirmation statement ile kimlik doğrulamasının ilişkisi nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Mevcut director ve LLP üyeleri için doğrulamanın tamamlanma
              zamanı, şirketin bir sonraki confirmation statement
              tarihine bağlıdır. Doğrulama yapılmadan bu belge Companies
              House&apos;a sunulamaz; dolayısıyla her şirketin kendi
              takvimi farklıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              ACSP nedir, kimlik doğrulamamı neden bir ACSP üzerinden yaptırabilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              ACSP (Authorised Corporate Service Provider), kara para
              aklamayı önleme denetimine tabi muhasebeci, avukat veya
              şirket kuruluş ajansı gibi profesyonellerdir. Pasaportunuzdaki
              isim ile resmi kayıtlardaki isim farklıysa veya kendi başınıza
              GOV.UK One Login sürecini tamamlamak istemiyorsanız, bir
              ACSP ücretli olarak doğrulamayı sizin adınıza yapıp sonucu
              Companies House&apos;a bildirebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeni bir İngiltere şirketi kuracaksam kimlik doğrulamasını ne zaman yapmalıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Yeni kurulacak bir şirkette director, LLP üyesi ve PSC
              adaylarının kimlik doğrulamasını, şirket kaydı Companies
              House&apos;a sunulmadan önce tamamlamış olması gerekir.
              Doğrulanmamış bir kişi adına yeni şirket kuruluş başvurusu
              kabul edilmez.
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
          Companies House kimlik doğrulaması, İngiltere&apos;de kurulu her
          şirketin director, LLP üyesi ve PSC&apos;leri için artık geçiş
          kolaylığı olmayan, tam kapsamlı bir yasal yükümlülük. Türkiye&apos;den
          yönetilen bir İngiltere şirketinde bu süreç, pasaportla tamamen
          uzaktan tamamlanabilecek kadar pratik; ama ihmal edildiğinde
          şirketin confirmation statement sunamaması ve sicilden silinme
          riskiyle sonuçlanabilecek kadar da ciddi. Şirketinizin kendi
          confirmation statement tarihini netleştirip doğrulamayı şimdiden
          tamamlamak, ileride sürpriz bir uyum sorunuyla karşılaşmamanın en
          güvenli yolu.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/ingilterede-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • İNGİLTERE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İngiltere&apos;de Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
          </Link>
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • İHRACAT • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?</h3>
          </Link>
          <Link
            href="/blog/yabanci-sermayeli-sirket-kurulus-sonrasi-yukumlulukler-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YABANCI YATIRIMCI • UYUM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yabancı Sermayeli Şirketin Kuruluş Sonrası Yükümlülükleri: 2026 Kontrol Listesi</h3>
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
                name: "Companies House kimlik doğrulaması nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2023 tarihli Economic Crime and Corporate Transparency Act kapsamında getirilen, bir İngiltere şirketinin director, LLP üyesi veya PSC'sinin kimliğini pasaport veya benzeri bir belgeyle resmi olarak doğrulamasını zorunlu kılan uygulamadır. 18 Kasım 2025'ten beri yasal bir yükümlülük haline geldi.",
                },
              },
              {
                "@type": "Question",
                name: "İngiltere'deki şirketimin yöneticisi kimlik doğrulamasını yapmazsa ne olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doğrulanmamış kişinin director olarak görev yapmaya devam etmesi suç teşkil eder. Şirket ise doğrulama tamamlanana kadar confirmation statement dahil birçok resmi belgeyi Companies House'a sunamaz; bu durum uzarsa şirketin sicilden silinmesi riski doğabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Kimlik doğrulamasını Türkiye'den, İngiltere'ye gitmeden yapabilir miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Kural uyruk veya ikamet yerine göre bir ayrım yapmaz. Geçerli, süresi dolmamış bir pasaportla GOV.UK One Login üzerinden tamamen uzaktan doğrulama yapılabilir; İngiltere'de fiziksel bulunma şartı yoktur.",
                },
              },
              {
                "@type": "Question",
                name: "Confirmation statement ile kimlik doğrulamasının ilişkisi nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mevcut director ve LLP üyeleri için doğrulamanın tamamlanma zamanı, şirketin bir sonraki confirmation statement tarihine bağlıdır. Doğrulama yapılmadan bu belge Companies House'a sunulamaz; dolayısıyla her şirketin kendi takvimi farklıdır.",
                },
              },
              {
                "@type": "Question",
                name: "ACSP nedir, kimlik doğrulamamı neden bir ACSP üzerinden yaptırabilirim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ACSP (Authorised Corporate Service Provider), kara para aklamayı önleme denetimine tabi muhasebeci, avukat veya şirket kuruluş ajansı gibi profesyonellerdir. Pasaportunuzdaki isim ile resmi kayıtlardaki isim farklıysa veya kendi başınıza GOV.UK One Login sürecini tamamlamak istemiyorsanız, bir ACSP ücretli olarak doğrulamayı sizin adınıza yapıp sonucu Companies House'a bildirebilir.",
                },
              },
              {
                "@type": "Question",
                name: "Yeni bir İngiltere şirketi kuracaksam kimlik doğrulamasını ne zaman yapmalıyım?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yeni kurulacak bir şirkette director, LLP üyesi ve PSC adaylarının kimlik doğrulamasını, şirket kaydı Companies House'a sunulmadan önce tamamlamış olması gerekir. Doğrulanmamış bir kişi adına yeni şirket kuruluş başvurusu kabul edilmez.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
