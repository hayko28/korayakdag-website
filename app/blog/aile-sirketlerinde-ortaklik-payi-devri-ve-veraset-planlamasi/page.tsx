import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Aile Şirketinde Hisse Miras Kalırsa Ne Olur? Ortaklık Payı Devri ve Veraset Planlaması | Koray Akdağ",
  description: "Aile şirketi sahibinin vefatı halinde ortaklık payının mirasçılara nasıl intikal ettiği, Türk Medeni Kanunu'ndaki saklı pay kuralları, 2026 Veraset ve İntikal Vergisi oranları ve hayattayken pay devri, aile anayasası, holding yapısı gibi planlama araçlarıyla kapsamlı rehber.",
  keywords: [
    "aile şirketi veraset planlaması",
    "şirket hissesi miras kalırsa",
    "ortaklık payı devri veraset",
    "saklı pay mahfuz hisse",
    "veraset ve intikal vergisi 2026",
    "aile şirketi nesil geçişi",
    "hisse devri veraset vergisi",
    "aile anayasası pay devri",
    "vasiyetname şirket hissesi",
    "limited şirket payın miras yoluyla iktisabı",
  ],
  alternates: {
    canonical: "/blog/aile-sirketlerinde-ortaklik-payi-devri-ve-veraset-planlamasi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Aile Şirketlerinde Ortaklık Payı Devri ve Veraset Planlaması: Hisseler Miras Kalırsa Ne Olur?"
      description="Bir aile şirketinin sahibi vefat ettiğinde ortaklık payı otomatik olarak mirasçılara geçer. Bu geçişin Türk Medeni Kanunu'ndaki saklı pay kurallarıyla, Veraset ve İntikal Vergisi'yle ve şirketin kendi esas sözleşmesiyle nasıl şekillendiği; hayattayken pay devri, aile anayasası, holding yapısı ve vasiyetname gibi planlama araçlarıyla kapsamlı rehber."
      category="AİLE ŞİRKETLERİ • VERASET PLANLAMASI • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="aile-sirketlerinde-ortaklik-payi-devri-ve-veraset-planlamasi"
      coverImage="https://images.unsplash.com/photo-1753164726479-867fa7a7e341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Şirket Hissesi Miras Kalırsa Ne Olur?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Şirket ortağı vefat ettiğinde payı, ayrı bir işleme gerek kalmadan <strong>halefiyet ilkesi</strong> gereği doğrudan yasal mirasçılarına geçer; mirasçılar otomatik olarak ortak sıfatını kazanır.</li>
          <li>✔ Türk Medeni Kanunu, altsoy (çocuklar), ana-baba ve sağ kalan eş için <strong>saklı pay (mahfuz hisse)</strong> güvencesi tanır; vasiyetnameyle bile bu pay tamamen elden alınamaz.</li>
          <li>✔ Şirket hissesinin miras yoluyla intikali, <strong>Veraset ve İntikal Vergisi</strong>'ne tabidir; 2026 için füruğ ve eşe isabet eden hissede 2.907.136 TL istisna uygulanır, aşan kısım %1 ile %10 arasında artan oranlı vergilendirilir.</li>
          <li>✔ Limited ve anonim şirketlerde şirketin, mirasçıyı payın <strong>gerçek değeri üzerinden</strong> satın almayı önererek 3 ay içinde ortaklığa kabulden kaçınma hakkı vardır (TTK m.596 ve m.494).</li>
          <li>✔ Hayattayken pay devri (bağış), nesil geçişini kontrollü hale getirir; ancak ivazsız intikalde vergi oranı (%10-%30) veraset oranından (%1-%10) daha yüksektir ve bağış, ölüm sonrası <strong>tenkis davasına</strong> konu olabilir.</li>
          <li>✔ Aile anayasası, önalım/veto hakları ve holding yapısına geçiş, birden fazla mirasçının şirket yönetiminde çatışmasını önlemenin başlıca hukuki araçlarıdır.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-kritik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Nesil Geçişi Neden Kritik Bir Risk?
          </Link>
          <Link href="#miras-intikal" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Ortaklık Payının Miras Yoluyla İntikali ve Saklı Pay
          </Link>
          <Link href="#sirket-turu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Şirket Türüne Göre Mirasçının Ortak Olma Süreci
          </Link>
          <Link href="#viv" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Veraset ve İntikal Vergisi: 2026 Oranları
          </Link>
          <Link href="#planlama" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Planlama Araçları
          </Link>
          <Link href="#esas-sozlesme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Esas Sözleşmede Koruyucu Maddeler
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Kimler İçin Önemli?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Adım Adım Planlama Süreci
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

      {/* 1. NEDEN KRİTİK */}
      <section id="neden-kritik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Nesil Geçişi Neden Kritik Bir Risk?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türkiye&apos;de faaliyet gösteren şirketlerin büyük çoğunluğu aile
          şirketi niteliğinde. Ancak bu şirketlerin kurucu nesilden ikinci
          nesle sağlıklı bir şekilde devredilmesi, sanıldığından çok daha
          zor bir süreç. PwC&apos;nin küresel aile şirketleri
          araştırmalarına göre Türkiye&apos;deki aile şirketlerinin yaklaşık
          üçte biri ikinci kuşağa geçebiliyor, üçüncü kuşağa ulaşan oran ise
          tek haneli rakamlara düşüyor. Bu düşüşün en büyük nedeni ürün
          veya pazar kaybı değil, çoğunlukla ortaklık yapısının ve yönetim
          yetkisinin nesiller arasında net kurallarla devredilememesi.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Şirket sahibinin vefatıyla birlikte ortaklık payı, ayrı bir
          işleme veya beyana gerek kalmadan doğrudan yasal mirasçılarına
          geçer. Eğer şirketin birden fazla çocuğu, eşi ve bazen kardeşleri
          arasında paylaşılması gerekiyorsa, bir gecede tek karar
          merciinden çok ortaklı, çoğu zaman birbiriyle görüş ayrılığı
          içinde olan bir yapıya dönüşme riski doğar. Bu durum sadece bir
          hukuki formalite değil; şirketin günlük yönetimini, banka
          ilişkilerini, tedarikçi güvenini ve çalışan motivasyonunu
          doğrudan etkileyen ticari bir risktir.
        </p>
        <p className="leading-8 text-gray-700">
          Bu nedenle nesil geçişi, şirket sahibinin sağlığında ele alınması
          gereken bir konudur. Ölüm sonrasında yapılabilecek tek şey,
          zaten belirlenmiş kurallara göre süreci yönetmektir; kuralları
          belirleme fırsatı yalnızca hayattayken vardır.
        </p>
      </section>

      {/* 2. MİRAS İNTİKAL */}
      <section id="miras-intikal" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Ortaklık Payının Miras Yoluyla İntikali ve Saklı Pay
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türk Medeni Kanunu&apos;na göre bir kişi vefat ettiğinde
          mirasçıları, terekenin tamamına (dolayısıyla şirket hisseleri
          dahil tüm mal varlığına) kendiliğinden ve bir bütün olarak sahip
          olur. Yasal mirasçılık sırası zümre sistemine dayanır: önce
          altsoy (çocuklar, torunlar), altsoy yoksa ana-baba ve onların
          altsoyu, o da yoksa büyükanne-büyükbaba zümresi mirasçı olur.
          Sağ kalan eş, hangi zümreyle birlikte mirasçı olduğuna göre
          değişen bir oranla her durumda mirasçıdır.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Şirket sahibi, vasiyetname yoluyla mirasını dilediği gibi
          paylaştırabilir gibi görünse de, kanun belirli yakın
          mirasçılara <strong>saklı pay (mahfuz hisse)</strong> adı
          verilen bir asgari güvence tanır. Bu güvence, vasiyetnameyle
          dahi tamamen ortadan kaldırılamaz:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Saklı Paylı Mirasçı</th>
                <th className="p-5">Saklı Pay Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Altsoy (çocuklar, torunlar)</td>
                <td className="p-5">Yasal miras payının yarısı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ana ve baba</td>
                <td className="p-5">Yasal miras payının dörtte biri</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Sağ kalan eş</td>
                <td className="p-5">Altsoy veya ana-baba zümresiyle birlikte mirasçıysa yasal payının tamamı, tek başına mirasçıysa yasal payının dörtte üçü</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          2007 yılındaki değişiklikle kardeşlerin saklı pay hakkı
          kaldırıldı; bugün yalnızca altsoy, ana-baba ve eş saklı paylı
          mirasçı. Pratikte bunun anlamı şudur: bir aile şirketi sahibi,
          şirketi tek başına yönetmeye en yatkın gördüğü bir çocuğuna
          hisselerin tamamını vasiyet etse bile, diğer çocukları ve eşi
          saklı paylarını talep edebilir. Bu talep, şirket hisselerinin
          parçalanması ya da diğer mirasçılara nakit/başka varlıkla denkleştirme
          yapılması ihtiyacını doğurur; planlanmamışsa bu denkleştirme
          şirketin kendi nakit akışından karşılanmak zorunda kalabilir.
        </p>
      </section>

      {/* 3. ŞİRKET TÜRÜNE GÖRE */}
      <section id="sirket-turu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Şirket Türüne Göre Mirasçının Ortak Olma Süreci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Mirasçılar payı otomatik olarak devralsa da, Türk Ticaret
          Kanunu şirkete belirli bir süre içinde bu mirasçıyı ortaklıktan
          çıkarma (reddetme) imkânı tanır. Bu hak, hem şirketin istenmeyen
          bir ortakla çalışmak zorunda kalmasını önlemek hem de
          mirasçının payının ekonomik değerini garanti altına almak için
          düzenlenmiştir:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🏢 Limited Şirket (TTK m.596)</h3>
            <p className="text-gray-700">Şirket, mirasçının payı iktisap etmesinden itibaren 3 ay içinde yazılı olarak reddedebilir. Red için şirketin, payı gerçek değeri üzerinden satın almayı ve bir alıcı (kendisi, ortaklarından biri veya üçüncü bir kişi) önermesi şarttır. 3 ay içinde red yapılmazsa mirasçı ortaklığa kabul edilmiş sayılır.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📈 Anonim Şirket (TTK m.494)</h3>
            <p className="text-gray-700">Nama yazılı pay senetlerinin esas sözleşmeyle devri sınırlandırılmış (bağlam/vinkülasyon) olması halinde, benzer bir mekanizma uygulanır: şirket, mirasçının onay talebinden itibaren 3 ay içinde payı gerçek değeri üzerinden devralmayı önererek onayı reddedebilir.</p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, bu red mekanizmasının
            şirketi mirasçıdan tamamen ve bedelsiz kurtaran bir araç
            olmadığıdır. Şirket, mirasçıyı reddetmek istiyorsa payın{" "}
            <strong>gerçek değeri</strong> üzerinden bir bedel ödemeyi
            veya ödettirmeyi taahhüt etmek zorunda; bu da güncel ve
            savunulabilir bir{" "}
            <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="text-orange-600 underline">
              şirket değerleme
            </Link>{" "}
            çalışmasını gerektirir. Değerleme yapılmadan verilen bir red
            kararı, mirasçı tarafından dava konusu edilebilir ve süreci
            planlanandan çok daha uzun, çok daha maliyetli hale getirir.
          </p>
        </div>
      </section>

      {/* 4. VİV */}
      <section id="viv" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Veraset ve İntikal Vergisi: 2026 Oranları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket hissesinin miras yoluyla intikali, 7338 sayılı Veraset ve
          İntikal Vergisi Kanunu kapsamında vergiye tabidir. Vergi matrahı,
          intikal eden hissenin <strong>gerçek (rayiç) değeri</strong>
          üzerinden belirlenir; bu noktada hisse değerinin doğru tespiti,
          hem şirketler hukuku hem vergi hukuku açısından{" "}
          <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="text-orange-600 underline">
            şirket değerleme
          </Link>{" "}
          çalışmasıyla doğrudan ilişkilidir. Gelir İdaresi Başkanlığı&apos;nın
          57 Seri No&apos;lu Veraset ve İntikal Vergisi Kanunu Genel
          Tebliği&apos;yle 1 Ocak 2026 itibarıyla geçerli istisna tutarları
          ve tarife dilimleri şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Matrah Dilimi</th>
                <th className="p-5">Veraset Yoluyla İntikalde Oran</th>
                <th className="p-5">İvazsız (Bağış) İntikalde Oran</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">İlk 3.000.000 TL</td>
                <td className="p-5 font-semibold">%1</td>
                <td className="p-5 font-semibold">%10</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Sonraki 7.000.000 TL</td>
                <td className="p-5 font-semibold">%3</td>
                <td className="p-5 font-semibold">%15</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Sonraki 15.000.000 TL</td>
                <td className="p-5 font-semibold">%5</td>
                <td className="p-5 font-semibold">%20</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Sonraki 30.000.000 TL</td>
                <td className="p-5 font-semibold">%7</td>
                <td className="p-5 font-semibold">%25</td>
              </tr>
              <tr>
                <td className="p-5">55.000.000 TL üzeri</td>
                <td className="p-5 font-semibold">%10</td>
                <td className="p-5 font-semibold">%30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          İstisna tutarları da her yıl yeniden değerleme oranında
          güncelleniyor. 2026 için evlatlıklar dahil füruğ (altsoy) ve
          eşten her birine isabet eden miras hissesinde{" "}
          <strong>2.907.136 TL</strong>, füruğ bulunmaması halinde eşe
          isabet eden hissede <strong>5.817.845 TL</strong> istisna
          uygulanıyor. İvazsız (hayattayken bağış yoluyla) intikallerde
          istisna tutarı ise <strong>66.935 TL</strong> ile sınırlı.
          Verginin beyanı ve ödeme takvimi de kanunda ayrıca düzenlenmiş;
          ölüm tarihine ve mirasçının yurt içinde/yurt dışında
          bulunmasına göre beyan süresi değişir.
        </p>
      </section>

      {/* KARIŞTIRMAYIN */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Vasiyetname Özgürlüğü ile Saklı Pay Sınırı
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Vasiyetname:</strong> Şirket sahibinin, tasarruf edebileceği kısım üzerinde mirasını dilediği gibi paylaştırmasına imkân tanır. Örneğin şirketi yönetmeye en yatkın gördüğü çocuğuna daha büyük bir pay bırakabilir.</li>
            <li><strong>Saklı Pay:</strong> Altsoy, ana-baba ve eşin kanunla güvence altına alınmış asgari mirasçılık payıdır. Vasiyetname bu payı ihlal edecek şekilde düzenlenmişse, hak sahibi mirasçı <strong>tenkis davası</strong> açarak kendisine ait saklı payı geri isteyebilir.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Bir vasiyetnamenin &quot;yazılı olması&quot; onu otomatik
            olarak geçerli ve dava edilemez kılmaz. Saklı payı ihlal eden
            bir vasiyetname, ilgili mirasçı dava açtığı takdirde kısmen
            geçersiz kılınabilir. Bu nedenle şirket hisselerinin
            dağılımını planlarken, tasarruf edilebilir kısmın sınırları
            baştan hesaplanmalı.
          </p>
        </div>
      </section>

      {/* 5. PLANLAMA ARAÇLARI */}
      <section id="planlama" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Planlama Araçları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Nesil geçişini şansa bırakmamak isteyen şirket sahiplerinin
          başvurabileceği birbirini tamamlayan birkaç araç var:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🎁 Hayattayken Pay Devri (Bağış)</h3>
            <p className="text-gray-700">
              Şirket sahibi, hisselerini hayattayken kademeli olarak
              devrederek kontrolü koruyan bir yapı kurabilir; devir hızı ve
              yönetim yetkisinin ne zaman gerçek anlamda geçeceği kendi
              kontrolünde kalır. Ancak ivazsız intikal vergisi oranı
              (%10-%30) veraset oranından (%1-%10) belirgin şekilde
              yüksektir ve bu bağış, bağışlayanın ölümünden sonra diğer
              mirasçılar tarafından saklı payı ihlal ettiği gerekçesiyle
              tenkis davasına konu edilebilir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📜 Aile Anayasası / Sözleşmesi</h3>
            <p className="text-gray-700">
              Ortaklar arasında bağlayıcı bir mutabakat metni olarak;
              hisse devrinde diğer aile ortaklarına önalım hakkı, kritik
              kararlarda veto hakkı, yönetimde görev alma kriterleri ve
              anlaşmazlık çözüm mekanizmalarını önceden tanımlar.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🏛️ Holding Yapısına Geçiş</h3>
            <p className="text-gray-700">
              Operasyonel şirketlerin hisseleri tek bir holding çatısı
              altında toplanır, mirasçılar operasyonel şirkette değil
              holdingde pay sahibi olur. Bu yapı, hem yönetim
              karmaşıklığını azaltır hem de miras planlamasının tek bir
              merkezden yürütülmesini sağlar. Bu konuyu, kurumsallaşma
              sürecinin bütününü ele alan{" "}
              <Link href="/blog/aile-sirketinden-kurumsal-yapiya-gecis-kurumsallasma" className="text-orange-600 underline">
                Aile Şirketinden Kurumsal Yapıya Geçiş
              </Link>{" "}
              yazımızda ayrıntılı işledik; bu yazı ise özellikle miras ve
              veraset boyutuna odaklanıyor.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📝 Vasiyetname ile Yönlendirme</h3>
            <p className="text-gray-700">
              Tasarruf edilebilir kısım sınırları içinde kalmak kaydıyla,
              şirket hisselerinin hangi mirasçıya, hangi oranda
              bırakılacağını netleştirir. Saklı payı ihlal etmeyecek
              şekilde kurgulandığında, ölüm sonrası belirsizliği önemli
              ölçüde azaltır.
            </p>
          </div>
        </div>
      </section>

      {/* 6. ESAS SÖZLEŞME */}
      <section id="esas-sozlesme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Esas Sözleşmede Koruyucu Maddeler
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yukarıdaki planlama araçları kişisel (aile içi) düzeyde
          kalırken, şirketin kendi esas sözleşmesine (limited şirkette
          şirket sözleşmesi, anonim şirkette esas sözleşme) eklenecek
          hükümler, mirasçının ortaklığa girişini doğrudan
          şekillendirebilir:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li><strong>Devir kısıtlaması (bağlam/vinkülasyon):</strong> Pay devrinin genel kurul veya ortaklar kurulu onayına bağlanması; onay, esaslı bir sebep gösterilmeden dahi reddedilebilir hale getirilebilir.</li>
          <li><strong>Mirasçıya karşı önalım/red hakkı:</strong> TTK m.596 (limited) ve m.494 (anonim) hükümlerinin esas sözleşmede açıkça düzenlenmesi, şirketin mirasçıyı gerçek değer üzerinden bedel ödeyerek ortaklıktan çıkarma sürecini daha öngörülebilir hale getirir.</li>
          <li><strong>Ortaklara önalım hakkı:</strong> Bir ortağın (veya mirasçısının) payını üçüncü bir kişiye devretmek istemesi halinde, diğer aile ortaklarına önce satın alma önceliği tanınması.</li>
          <li><strong>Nitelikli çoğunluk/veto hükümleri:</strong> Şirketin devri, birleşmesi veya esaslı sözleşme değişiklikleri gibi kritik kararların, tüm mirasçı-ortakların onayı olmadan alınamaması.</li>
        </ul>
      </section>

      {/* 7. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kimler İçin Önemli?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🚀 Bu Planlamayı Öncelikli Ele Alması Gerekenler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ İkinci nesle geçiş sürecindeki, kurucusu hâlâ aktif olan aile şirketleri</li>
              <li>✔ Birden fazla çocuğu olan ve şirketin tek elde mi yoksa paylaşılarak mı yönetileceğine henüz karar vermemiş şirket sahipleri</li>
              <li>✔ Ortaklık yapısında yalnızca aile üyelerinin değil, aile dışı yatırımcının da bulunduğu şirketler</li>
              <li>✔ Şirketi büyütmek amacıyla banka veya yatırımcı görüşmelerine hazırlanan, ortaklık yapısının net olması gereken şirketler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              ⏸️ Önceliği Görece Düşük Olan Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Tek ortaklı ve şirketin devrinin zaten net bir alıcıya (satış yoluyla) planlandığı yapılar</li>
              <li>✔ Kısa vadede tasfiye veya kapanma kararı alınmış şirketler</li>
              <li>✔ Aile üyesi olmayan profesyonel bir CEO&apos;ya devredilmiş, ortaklığın zaten dağınık ve kurumsal olduğu şirketler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Adım Adım Planlama Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="text-base font-bold">1. Mevcut Yapının Tespiti</h3>
            <p className="mt-2 text-sm text-gray-600">Ortaklık yapısı, esas sözleşme hükümleri ve mirasçıların kimler olacağının netleştirilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💰</div>
            <h3 className="text-base font-bold">2. Şirket Değerleme</h3>
            <p className="mt-2 text-sm text-gray-600">Hisselerin gerçek değerinin belirlenmesi; hem saklı pay hesabı hem VİV matrahı için gerekli</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📐</div>
            <h3 className="text-base font-bold">3. Yapı Seçimi</h3>
            <p className="mt-2 text-sm text-gray-600">Hayattayken devir, holding yapısı, vasiyetname veya bunların kombinasyonunun belirlenmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📋</div>
            <h3 className="text-base font-bold">4. Sözleşme ve Belgelerin Hazırlanması</h3>
            <p className="mt-2 text-sm text-gray-600">Esas sözleşme değişiklikleri, aile anayasası ve gerekiyorsa vasiyetnamenin hukuka uygun düzenlenmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔄</div>
            <h3 className="text-base font-bold">5. Periyodik Gözden Geçirme</h3>
            <p className="mt-2 text-sm text-gray-600">Şirket değeri, mevzuat ve aile yapısındaki değişikliklere göre planın güncellenmesi</p>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Saklı payı ihlal eden bir vasiyetname veya bağış, ölümden yıllar sonra dahi tenkis davasıyla geri alınabilir; planlama yapılırken tasarruf edilebilir kısmın sınırları mutlaka hesaplanmalı.</li>
            <li>Hisse değerinin belirlenmemiş olması hem şirketin mirasçıyı reddetme sürecini hem de VİV beyanını riske atar; güncel bir değerleme çalışması olmadan bu planlamalardan hiçbiri sağlam bir zemine oturmaz.</li>
            <li>Esas sözleşmedeki devir kısıtlaması ve önalım hükümleri, şirket kuruluşunda değil sonradan eklenmişse, mevcut ortakların ve gerekiyorsa noterin/ticaret sicilinin onayından geçecek şekilde usulüne uygun tescil edilmeli.</li>
            <li>İvazsız intikal (bağış) yoluyla yapılan devirlerde vergi oranının veraset oranından yüksek olduğu unutulmamalı; devir zamanlaması yalnızca kontrol değil vergi yükü açısından da planlanmalı.</li>
            <li>Aile anayasası hukuken bağlayıcı bir şirketler hukuku belgesi değildir; bağlayıcılığını artırmak için hükümlerinin, mümkün olduğunca esas sözleşmeye veya ortaklar arası pay devir sözleşmelerine de yansıtılması gerekir.</li>
          </ul>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.4721.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                4721 Sayılı Türk Medeni Kanunu (Miras Hukuku, Saklı Pay m.506) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6102.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                6102 Sayılı Türk Ticaret Kanunu (m.494, m.596: Payın Miras Yoluyla İktisabı) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.7338.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                7338 Sayılı Veraset ve İntikal Vergisi Kanunu - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/mevzuat/kanun/519" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Veraset ve İntikal Vergisi Kanunu ve Genel Tebliğleri (57 Seri No, 2026 Oran ve İstisnaları) - Gelir İdaresi Başkanlığı
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
              Şirket ortağı vefat ederse hisseleri otomatik olarak kime geçer?
            </h3>
            <p className="leading-8 text-gray-700">
              Yasal mirasçılara, ayrı bir işlem veya beyana gerek kalmadan
              halefiyet ilkesi gereği doğrudan geçer. Mirasçılar birden
              fazlaysa, hisse kendi aralarındaki miras oranına göre
              bölünür ve her biri otomatik olarak ortak sıfatını kazanır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Vasiyetname ile bütün hisseleri tek bir çocuğa bırakabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Ancak tasarruf edilebilir kısım sınırları içinde kalırsanız.
              Diğer çocuklarınızın ve eşinizin saklı payı kanunla
              korunduğu için, bu payı ihlal eden bir vasiyetname, ilgili
              mirasçı dava açarsa tenkis yoluyla kısmen geçersiz
              kılınabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirket, istemediği bir mirasçıyı ortaklığa almak zorunda mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, ancak koşullu olarak. Limited şirkette TTK m.596,
              anonim şirkette (esas sözleşmede devir kısıtlaması varsa)
              TTK m.494 uyarınca şirket, mirasçının payı iktisap
              etmesinden itibaren 3 ay içinde, payı gerçek değeri
              üzerinden satın almayı önererek ortaklığa kabulü
              reddedebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hisseleri hayattayken çocuklarıma devretmek, veraset vergisinden daha mı avantajlı?
            </h3>
            <p className="leading-8 text-gray-700">
              Vergi oranı açısından değil. İvazsız (bağış) intikallerde
              uygulanan oran %10 ile %30 arasında, veraset yoluyla
              intikaldeki %1 ile %10 aralığından belirgin şekilde
              yüksektir. Hayattayken devrin asıl avantajı, yönetim
              geçişini kontrollü ve planlı hale getirmesidir; vergi
              yükünü azaltmak için tek başına yeterli bir araç değildir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Veraset ve İntikal Vergisi'nin matrahı nasıl belirleniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Mirasçıya intikal eden hissenin gerçek (rayiç) değeri
              üzerinden belirlenir. Halka açık olmayan bir aile
              şirketinde bu değerin objektif ve savunulabilir şekilde
              tespiti, bağımsız bir şirket değerleme çalışmasını
              gerektirir; aksi halde hem vergi idaresiyle hem diğer
              mirasçılarla anlaşmazlık riski doğar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Aile anayasası hukuken bağlayıcı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Aile anayasasının kendisi, tek başına şirketler hukuku
              anlamında icra edilebilir bir belge değildir; ailenin
              ortak değerlerini ve niyetlerini yazıya döken bir mutabakat
              metnidir. Bağlayıcılığını güçlendirmek için önalım hakkı,
              devir kısıtlaması ve veto gibi kritik hükümlerinin, esas
              sözleşmeye veya noter onaylı ortaklar arası sözleşmelere de
              ayrıca işlenmesi gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Aile Şirketinizin Nesil Geçişini Birlikte Planlayalım
          </h3>
          <p className="leading-8 text-gray-700">
            Ortaklık payının miras yoluyla parçalanma riskini önlemek,
            şirketin bugünkü değerinin doğru tespitiyle, esas sözleşme
            hükümlerinin gözden geçirilmesiyle ve ailenizin ihtiyacına
            uygun bir yapının (hayattayken devir, holding, aile anayasası)
            birlikte kurgulanmasıyla mümkün.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirket değerleme ve kurumsal danışmanlık hizmetimiz
              kapsamında ortaklık yapınızın veraset riskine karşı
              uygunluğunu birlikte değerlendirmemiz için bizimle
              iletişime geçin.
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
          Bir aile şirketinin ikinci ve üçüncü nesle sağlıklı geçişi,
          şansa değil planlamaya bağlıdır. Ortaklık payının miras yoluyla
          otomatik intikali, saklı pay kuralları, Veraset ve İntikal
          Vergisi yükümlülüğü ve şirketin kendi esas sözleşmesindeki
          hükümler, birbirinden bağımsız değil birlikte ele alınması
          gereken parçalardır. Bu parçalardan biri eksik kalırsa, kurucu
          neslin yıllarca inşa ettiği şirket, tek bir vefat sonrasında
          anlaşmazlıklı ve yönetilemez bir ortaklık yapısına dönüşebilir.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirket değerleme
          ve kurumsal gelişim danışmanlığı hizmetlerimiz kapsamında aile
          şirketlerinin ortaklık yapısını veraset riskine karşı
          değerlendiriyor, esas sözleşme ve aile anayasası çalışmalarında
          süreç boyunca yanınızda oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/aile-sirketinden-kurumsal-yapiya-gecis-kurumsallasma"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KURUMSAL GELİŞİM • KURUMSALLAŞMA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Kurumsallaşma: Aile Şirketinden Kurumsal Yapıya Geçiş Süreci Nasıl Yönetilir?</h3>
          </Link>
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ&apos;ler İçin Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/sirket-birlesme-bolunme-vergi-ertelemesi-devir-bolunme-rejimi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">M&A • VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Birleşme ve Bölünmelerinde Vergi Ertelemesi: Devir/Bölünme Rejimi Nasıl İşler?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
