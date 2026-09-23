import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Melek Yatırımcı (Bireysel Katılım Yatırımcısı) Nedir? Vergi Avantajları 2026 | Koray Akdağ",
  description: "Bireysel Katılım Yatırımcısı (melek yatırımcı) lisansı nasıl alınır, girişime yatırım karşılığında %75-100 gelir vergisi indirimi nasıl işler? 2026 güncel tutarlar, 2 yıl elde tutma şartı ve girişimcinin yatırım alma süreciyle kapsamlı rehber.",
  keywords: [
    "melek yatırımcı nedir",
    "bireysel katılım yatırımcısı",
    "BKY lisansı",
    "melek yatırımcı vergi avantajı",
    "bireysel katılım sermayesi yönetmeliği",
    "GVK geçici madde 82",
    "melek yatırımcıdan nasıl yatırım alınır",
    "melek yatırımcı 2026",
    "Hazine ve Maliye Bakanlığı melek yatırımcı lisansı",
    "girişim şirketine yatırım vergi indirimi",
  ],
  alternates: {
    canonical: "/blog/melek-yatirimci-bireysel-katilim-yatirimcisi-vergi-avantajlari-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Melek Yatırımcı (Bireysel Katılım Yatırımcısı) Nedir? Vergi Avantajları ve Girişime Yatırım Süreci"
      description="Hazine ve Maliye Bakanlığı'ndan lisans alan gerçek kişiler, erken aşama girişimlere yaptıkları yatırımın %75-100'ünü yıllık gelir vergisi matrahından indirebiliyor. Melek yatırımcı lisansı nasıl alınır, girişimci nasıl yatırım bulur, 2026 güncel tutarlar ve 2 yıl elde tutma şartı neler getiriyor; kapsamlı rehber."
      category="MELEK YATIRIMCI • VERGİ TEŞVİKİ • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="melek-yatirimci-bireysel-katilim-yatirimcisi-vergi-avantajlari-2026"
      programDurumu="acik"
      coverImage="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Melek Yatırımcı Sistemi Nasıl İşliyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Melek yatırımcı (resmî adıyla <strong>Bireysel Katılım Yatırımcısı / BKY</strong>), kişisel varlığını erken aşama bir girişime hisse karşılığında aktaran, Hazine ve Maliye Bakanlığı&apos;ndan <strong>lisans almış</strong> gerçek kişidir.</li>
          <li>✔ Lisanslı yatırımcı, aldığı hisselerin bedelinin <strong>%75&apos;ini</strong> (Ar-Ge/yenilikçilik destekli girişimlerde <strong>%100&apos;ünü</strong>) yıllık gelir vergisi beyanından indirebilir.</li>
          <li>✔ 2026 için yıllık azami indirim tutarı <strong>2.500.000 TL</strong>, hisselerin en az <strong>2 tam yıl (730 gün)</strong> elde tutulması şart.</li>
          <li>✔ Lisans almak için 2026&apos;da geçerli gelir ölçütü <strong>2.509.800 TL</strong>, servet ölçütü <strong>12.549.000 TL</strong>&apos;dir (ikisinden biri yeterli, deneyim kriteri de bir alternatif).</li>
          <li>✔ Sistem, 31.12.2024 tarihli yeni Bireysel Katılım Sermayesi Hakkında Yönetmelik ile 1 Ocak 2025&apos;ten itibaren güncellenmiş şekilde yürütülüyor.</li>
          <li>✔ Vergi desteği, GVK geçici 82. madde kapsamında <strong>31 Aralık 2027&apos;ye kadar</strong> yapılacak yatırımlar için geçerli.</li>
          <li>✔ İki taraflı bir sistem: sermaye sahibi vergi avantajı elde ederken, büyüme sermayesi arayan girişimci de kamu destekli, teşvikli bir yatırımcı bulma imkânı kazanıyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Melek Yatırımcı (BKY) Nedir?
          </Link>
          <Link href="#lisans" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. BKY Lisansı Nasıl Alınır? 2026 Şartları
          </Link>
          <Link href="#vergi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Vergi Avantajı: Oranlar ve 2026 Tutarları
          </Link>
          <Link href="#elde-tutma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. 2 Yıl Elde Tutma Şartı ve İhlal Durumu
          </Link>
          <Link href="#girisimci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Girişimci Tarafında Süreç: Yatırım Nasıl Alınır?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Kimler Yararlanabilir?
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
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Melek Yatırımcı (BKY) Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bireysel Katılım Yatırımcısı (BKY), günlük dilde &quot;melek
          yatırımcı&quot; olarak bilinir. Kişisel varlığını ve/veya
          tecrübe/birikimini başlangıç veya büyüme aşamasındaki bir
          girişime hisse karşılığında aktaran gerçek kişi yatırımcıdır.
          Klasik bir kredi veya borç ilişkisinden farkı, yatırımcının
          girişim şirketinin ortağı olması ve riski girişimciyle birlikte
          taşımasıdır.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Sistem, 6327 sayılı Kanun ile Gelir Vergisi Kanunu&apos;na
          eklenen geçici 82. madde ve bu maddeyi uygulamaya koyan
          Bireysel Katılım Sermayesi Hakkında Yönetmelik üzerine kurulu.
          2013&apos;ten beri yürürlükte olan bu sistem, <strong>31 Aralık
          2024 tarihli ve 32769 (5. Mükerrer) sayılı Resmî Gazete&apos;de
          yayımlanan yeni yönetmelikle</strong> 1 Ocak 2025&apos;ten
          itibaren güncellendi. Yeni yönetmelik; dijital başvuru süreci,
          BKY ağlarının (iş melekleri ağı/BAN) akreditasyonu ve
          yatırımcı-girişimci eşleşmesinin daha kurumsal bir yapıya
          taşınmasını hedefliyor.
        </p>
        <p className="leading-8 text-gray-700">
          Devletin bu sisteme sağladığı temel teşvik, doğrudan bir hibe
          veya kredi değil; <strong>yatırımcının yatırdığı tutarın büyük
          bir kısmını yıllık gelir vergisi matrahından indirebilmesi</strong>{" "}
          şeklinde işleyen bir vergi desteğidir. Böylece devlet, riski
          doğrudan üstlenmeden erken aşama girişimlere sermaye akışını
          teşvik etmiş oluyor.
        </p>
      </section>

      {/* 2. LİSANS */}
      <section id="lisans" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. BKY Lisansı Nasıl Alınır? 2026 Şartları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Vergi indiriminden yararlanabilmek için, hisseleri satın almadan{" "}
          <strong>önce</strong> Hazine ve Maliye Bakanlığı&apos;ndan (Finansal
          Piyasalar ve Kambiyo Genel Müdürlüğü) Bireysel Katılım Yatırımcısı
          lisansı alınmış olması şart. Lisans, tam mükellef gerçek kişilere
          veriliyor ve aşağıdaki ölçütlerden en az birinin sağlanması
          gerekiyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Lisanslama Ölçütü</th>
                <th className="p-5">2026 Güncel Tutar / Koşul</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Gelir Ölçütü</td>
                <td className="p-5 font-bold text-green-600">Yıllık brüt geliri en az 2.509.800 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Servet Ölçütü</td>
                <td className="p-5 font-bold text-green-600">Toplam varlığı (gayrimenkul, banka mevduatı, menkul kıymet) en az 12.549.000 TL</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Deneyim Ölçütü</td>
                <td className="p-5">Üst düzey bankacılık/finans veya girişim sermayesi alanında en az 2 yıl tecrübe ya da nitelikli yönetim tecrübesi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Kaynak: Hazine ve Maliye Bakanlığı, Bireysel Katılım Sermayesi
          (BKS) Sistemi 2026 Yılı Güncel Tutarlar duyurusu. Baz tutarlar
          (2.000.000 TL / 10.000.000 TL), 585 Sıra No&apos;lu Vergi Usul
          Kanunu Genel Tebliği ile belirlenen %25,49&apos;luk yeniden
          değerleme oranıyla 2026 için güncellendi.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Lisans Sonrası Bilinmesi Gerekenler
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li><strong>Lisans süresi 5 yıl</strong> geçerli olup süre sonunda yenilenebilir.</li>
            <li>2026&apos;da lisans kapsamında tek bir girişime yapılacak asgari yatırım tutarı <strong>250.980 TL</strong>&apos;dir.</li>
            <li>Yatırımın yapılacağı şirket, halka açık olmayan, tam mükellef bir anonim şirket olmalı ve yönetmelikte tanımlanan büyüklük ölçütlerinin (çalışan sayısı, ciro) altında kalmalıdır.</li>
            <li>Dar mükellef gerçek kişiler ile dar mükellef kurumlara iştirak eden tam mükellef gerçek kişiler bu indirimden yararlanamaz.</li>
          </ul>
        </div>
      </section>

      {/* 3. VERGİ AVANTAJI */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Vergi Avantajı: Oranlar ve 2026 Tutarları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Lisanslı bir BKY&apos;nin satın aldığı iştirak hisselerinin alış
          bedeli, Gelir Vergisi Kanunu geçici 82. madde kapsamında yıllık
          beyanname ile bildirilen kazanç ve iratlardan indirilebiliyor.
          İndirim oranı, yatırım yapılan girişimin niteliğine göre
          değişiyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Yatırım Türü</th>
                <th className="p-5">İndirim Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Standart anonim şirket yatırımı</td>
                <td className="p-5 font-bold text-green-600">%75</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">
                  Son 5 yıl içinde Sanayi ve Teknoloji Bakanlığı, TÜBİTAK
                  veya KOSGEB&apos;in Ar-Ge/yenilikçilik programlarınca
                  desteklenmiş şirket
                </td>
                <td className="p-5 font-bold text-green-600">%100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Güncel Tutarlar (2026)
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Yıllık azami indirim tutarı: <strong>2.500.000 TL</strong></li>
              <li>✔ Bu tutar, 7420 sayılı Kanun ile 1 Ocak 2023&apos;ten itibaren 1.000.000 TL&apos;den yükseltildi</li>
              <li>✔ Yetersiz kazanç nedeniyle o yıl indirilemeyen tutar, izleyen yıllarda yeniden değerleme oranında artırılarak kullanılabilir</li>
              <li>✔ İndirim, hisselerin iktisap edildiği vergilendirme dönemine ait beyannamede uygulanır</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-orange-700">
              📅 Uygulama Süresi
            </h3>
            <p className="leading-8 text-gray-700">
              GVK geçici 82. madde, başlangıçta 31 Aralık 2017&apos;ye
              kadar geçerliydi. 7420 sayılı Kanun ile bu tarih önce 31
              Aralık 2022&apos;ye, sonra <strong>31 Aralık 2027&apos;ye</strong>{" "}
              kadar uzatıldı. Yani bugün itibarıyla yapılacak melek
              yatırımcı yatırımları bu tarihe kadar vergi desteğinden
              yararlanabiliyor; süre daha önce de kanunla uzatılmış bir
              geçmişe sahip.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Sermaye sahiplerinin en sık gözden kaçırdığı nokta, vergi
            indiriminin otomatik işlemediğidir. İndirimden yararlanmak
            için hem yatırımdan önce lisans alınmış olması hem de
            yatırımın Hazine tarafından mevzuata uygun bulunup Gelir
            İdaresi Başkanlığı&apos;na ve ilgili vergi dairesine
            bildirilmiş olması gerekir. Lisanssız veya bildirimsiz
            yapılan bir hisse alımı, ekonomik olarak melek yatırımcılık
            olsa da vergi indirimi açısından hiçbir avantaj sağlamaz.
          </p>
        </div>
      </section>

      {/* 4. ELDE TUTMA */}
      <section id="elde-tutma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. 2 Yıl Elde Tutma Şartı ve İhlal Durumu
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Vergi indirimi, hisselerin <strong>en az 2 tam yıl (730 gün)</strong>{" "}
          elde tutulması şartına bağlı. Bu süre, sermayenin girişim
          şirketi adına açılan ortaklık banka hesabına yatırıldığı
          tarihte başlıyor; hisse senedinin düzenlendiği veya sözleşmenin
          imzalandığı tarih değil.
        </p>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Şart İhlal Edilirse Ne Olur?
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>Hisseler 2 tam yıl dolmadan elden çıkarılırsa</li>
            <li>Yatırım, Hazine tarafından vergi desteğinden yararlanılması uygun görülmeyen bir sektörde/faaliyette yapılmışsa</li>
            <li>Yatırımcının girişim şirketinin doğrudan/dolaylı hâkim ortağı olduğu tespit edilirse</li>
            <li>Yatırımcının eşi, altsoyu/üstsoyu veya üçüncü dereceye kadar yansoy/kayın hısımlarının idare/denetim/sermaye bakımından bağlı olduğu bir şirkete iştirak edilmişse</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            bu hallerde zamanında tahakkuk ettirilmemiş vergiler yönünden
            <strong> vergi ziyaı doğmuş sayılır</strong> ve vergi aslı
            gecikme faiziyle birlikte tahsil edilir. Tek istisna, girişim
            şirketinin yatırımcının kastı olmaksızın iflas etmesi gibi{" "}
            <strong>mücbir sebep</strong> hâlleridir; bu durumda otuz iş
            günü içinde Gelir İdaresi Başkanlığı&apos;na bildirimde
            bulunulması ve mücbir sebebin kabul edilmesi hâlinde vergi
            ziyaı cezası ve gecikme faizi uygulanmaz.
          </p>
        </div>
      </section>

      {/* 5. GİRİŞİMCİ TARAFI */}
      <section id="girisimci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Girişimci Tarafında Süreç: Yatırım Nasıl Alınır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Büyüme sermayesi arayan bir girişimci için melek yatırımcı
          sistemi, klasik bir yatırımcı görüşmesinden farklı olarak
          devletin akredite ettiği bir yapı üzerinden işliyor. Süreç
          genel hatlarıyla şöyle ilerliyor:
        </p>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="text-base font-bold">1. Girişim Hazırlığı</h3>
            <p className="mt-2 text-sm text-gray-600">İş planı, finansal projeksiyon ve ortaklık yapısının netleştirilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🤝</div>
            <h3 className="text-base font-bold">2. Yatırımcı/Ağ Eşleşmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Akredite bir BKY ağı (iş melekleri ağı) veya doğrudan lisanslı bir yatırımcıyla temas</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="text-base font-bold">3. Değerlendirme</h3>
            <p className="mt-2 text-sm text-gray-600">Yatırımcının iş modelini, ekibi ve büyüme potansiyelini incelemesi (ön inceleme)</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📝</div>
            <h3 className="text-base font-bold">4. Yatırım Bildirimi</h3>
            <p className="mt-2 text-sm text-gray-600">Lisanslı yatırımcı, yatırım başvurusunu Hazine ve Maliye Bakanlığı&apos;na iletir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💰</div>
            <h3 className="text-base font-bold">5. Sermaye Girişi</h3>
            <p className="mt-2 text-sm text-gray-600">Uygun bulunan yatırım, girişim şirketinin ortaklık banka hesabına aktarılır</p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Türkiye&apos;de bu süreci yürüten başlıca yapılar, Hazine ve
          Maliye Bakanlığı tarafından akredite edilen iş melekleri ağları
          (BAN&apos;lar) ve bağımsız lisanslı bireysel yatırımcılardır.
          Girişimcinin bu ağlarla görüşmeye başlamadan önce hazır bulunması
          gereken en kritik belgeler; güncel bir iş planı, finansal
          projeksiyon ve şirketin (henüz kurulmadıysa kurulacak şirketin)
          ortaklık yapısıdır. Yatırımcı tarafında lisans süreci ne kadar
          netse, girişimci tarafında da şirketin hukuki ve mali hazırlığı
          o kadar belirleyici oluyor.
        </p>
      </section>

      {/* 6. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Kimler Yararlanabilir?
        </h2>
        <div className="mb-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ❓ Melek Yatırımcı mı, Girişim Sermayesi Yatırım Fonu (GSYF) mu? Karıştırmayın
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            İkisi de girişimlere sermaye aktarır ama yapıları tamamen
            farklıdır:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Melek Yatırımcı (BKY):</strong> Gerçek kişidir, Hazine ve Maliye Bakanlığı&apos;ndan bireysel lisans alır, yatırımı kendi adına ve genellikle daha küçük tutarlarda yapar, karşılığında kişisel gelir vergisi indirimi elde eder.</li>
            <li><strong>Girişim Sermayesi Yatırım Fonu (GSYF):</strong> Kurumsal bir yapıdır, SPK mevzuatına tabidir, fon yönetim şirketi üzerinden çok sayıda yatırımcının parasını toplayıp genellikle daha büyük ve daha ileri aşama girişimlere yatırır; GVK geçici 82&apos;deki bireysel indirim mekanizmasına tabi değildir.</li>
          </ul>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              💼 Sermaye Sahibi İçin
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Yatırım getirisinin yanında yıllık gelir vergisi yükünü düşürmek isteyen yüksek gelirli/varlıklı gerçek kişiler</li>
              <li>✔ Finans/bankacılık veya girişim sermayesi tecrübesini sermayeye dönüştürmek isteyen profesyoneller</li>
              <li>✔ Portföyünü tek bir girişime değil, birden fazla erken aşama şirkete yayarak riski dağıtmak isteyenler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              🚀 Girişimci/KOBİ Sahibi İçin
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Banka kredisine alternatif, öz kaynak bazlı büyüme sermayesi arayan erken aşama şirketler</li>
              <li>✔ Ar-Ge/yenilikçilik projesi TÜBİTAK, KOSGEB veya Sanayi ve Teknoloji Bakanlığı tarafından desteklenmiş, bu sayede yatırımcısına %100 indirim sunabilen şirketler</li>
              <li>✔ Sadece sermaye değil, yatırımcının tecrübe ve ağından da (mentorluk) faydalanmak isteyen girişimciler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li><strong>Lisans, yatırımdan önce alınmalı.</strong> Hisseler satın alındıktan sonra lisans başvurusu yapılması indirim hakkını geçersiz kılar.</li>
            <li>Yatırımcının, iştirak ettiği girişim şirketinin doğrudan veya dolaylı hâkim ortağı olması indirim hakkını ortadan kaldırır.</li>
            <li>Yatırımcının eşi, altsoy/üstsoyu veya üçüncü dereceye kadar hısımlarına ait/bağlı girişimlere yapılan yatırımlar indirim kapsamı dışında kalır.</li>
            <li>Girişim şirketinin, Hazine tarafından vergi desteğine uygun görülmeyen bir sektörde faaliyet göstermemesi gerekir.</li>
            <li>2 yıllık elde tutma süresi dolmadan hisse devri, yeniden yapılandırma veya şirket tasfiyesi gibi durumlar indirim hakkını riske atabilir; bu tür adımlar öncesinde durumun değerlendirilmesi gerekir.</li>
            <li>Rakamsal tutarlar (lisanslama ölçütleri, asgari yatırım, azami indirim) her yıl yeniden değerleme oranıyla güncellendiğinden, başvuru öncesinde ilgili yılın güncel tutarlarının teyit edilmesi önemlidir.</li>
          </ul>
        </div>
      </section>

      {/* 8. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a
                href="https://www.hmb.gov.tr/duyuru/bireysel-katilim-sermayesi-bks-sistemi-tanitim-ve-egitim-dokumanlari-hakkinda-duyuru-2026-fpk-02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                T.C. Hazine ve Maliye Bakanlığı - BKS Sistemi Tanıtım ve Eğitim Dokümanları Duyurusu (2026/FPK-02)
              </a>
            </li>
            <li>
              <a
                href="https://ms.hmb.gov.tr/uploads/2026/01/Ek-4-BKS_2026_YDO_GUNCEL.TUTARLAR-5d367d135f56b5e2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Hazine ve Maliye Bakanlığı - BKS 2026 Yılı Güncel Tutarlar (Yeniden Değerleme Oranı ile Artırılan Tutarlar)
              </a>
            </li>
            <li>
              <a
                href="https://www.hmb.gov.tr/bireysel-katilim-sermayesi-hakkinda-yonetmelik-kapsaminda-sikca-sorulan-sorular"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Hazine ve Maliye Bakanlığı - Bireysel Katılım Sermayesi Hakkında Yönetmelik Kapsamında Sıkça Sorulan Sorular
              </a>
            </li>
            <li>
              <a
                href="https://www.mevzuat.gov.tr/File/GeneratePdf?mevzuatNo=18753&mevzuatTur=Teblig&mevzuatTertip=5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Bireysel Katılım Yatırımcısı İndirimi Hakkında Tebliğ (Seri No: 1) - mevzuat.gov.tr
              </a>
            </li>
          </ul>
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
              Melek yatırımcı olmak için mutlaka çok yüksek gelirli veya varlıklı olmak mı gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Gelir (2026&apos;da 2.509.800 TL) ve servet (12.549.000 TL)
              ölçütlerinden biri yeterli, ama tek yol bu değil. Üst düzey
              bankacılık/finans veya girişim sermayesi alanında en az 2 yıl
              tecrübesi olan kişiler de deneyim ölçütü üzerinden lisans
              başvurusunda bulunabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Girişimimin yatırımcı bulması için mutlaka bir BKY ağına (iş melekleri ağı) üye olması mı gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Zorunlu değil, ama pratikte en yaygın yol budur. Akredite
              ağlar, girişimciyi çok sayıda lisanslı yatırımcıyla aynı
              anda buluşturduğu için süreç hızlanır. Girişimci, doğrudan
              tanıdığı lisanslı bir yatırımcıyla da anlaşabilir; kritik
              olan yatırımın yönetmeliğe uygun şekilde bildirilmesidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Vergi indirimini hangi yılın beyannamesinde kullanırım?
            </h3>
            <p className="leading-8 text-gray-700">
              İndirim, iştirak hisselerinin iktisap edildiği
              vergilendirme dönemine ait yıllık gelir vergisi
              beyannamesinde uygulanır. O yılki kazanç yetersizse,
              indirilemeyen kısım izleyen yıllarda yeniden değerleme
              oranında artırılarak kullanılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İki yıl dolmadan hisselerimi satarsam ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              O güne kadar yararlanılan vergi indirimi yönünden vergi
              ziyaı doğmuş sayılır; zamanında tahakkuk ettirilmemiş
              vergiler gecikme faiziyle birlikte tahsil edilir. Girişim
              şirketinin iflası gibi mücbir sebep hâlleri, otuz iş günü
              içinde bildirilip kabul edilmesi şartıyla bu sonucu
              doğurmayabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Melek yatırımcı (BKY) ile TÜBİTAK BiGG Yatırım (1812) aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. BKY sisteminde yatırımı bir gerçek kişi yapar ve
              karşılığında kişisel gelir vergisi indirimi kazanır.{" "}
              <Link href="/blog/tubitak-bigg-yatirim-1812-programi-2026-2-cagrisi" className="text-orange-600 hover:underline">
                TÜBİTAK BiGG Yatırım (1812)
              </Link>{" "}
              programında ise yatırımı doğrudan TÜBİTAK BiGG Fonu yapar
              ve girişimciye vergi indirimi değil, kamu kaynaklı hisse
              karşılığı sermaye sağlanır. İki sistem aynı şirkette bir
              arada da kullanılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yatırım yaptığım girişim iflas ederse vergi indirimini geri öder miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Yatırımcının herhangi bir kastı olmaksızın girişim
              şirketinin iflas etmesi, GVK geçici 82. madde kapsamında
              mücbir sebep sayılır. Bu durum otuz iş günü içinde Gelir
              İdaresi Başkanlığı&apos;na bildirilip kabul edilirse, iki
              yıllık elde tutma şartı yerine getirilememiş olsa da vergi
              ziyaı cezası ve gecikme faizi uygulanmaz.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin Melek Yatırımcı Sürecine Hazırlığını Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            İster büyüme sermayesi arayan bir girişimci, ister vergi
            avantajlı bir yatırım yapmak isteyen bir sermaye sahibi olun;
            iş planının, ortaklık yapısının ve şirketin yatırıma hazır
            hâle getirilmesi ayrı bir uzmanlık gerektirir.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Stratejik İş Ortaklıkları danışmanlığı kapsamında
              şirketinizin yatırımcı bulma/hazırlanma sürecini birlikte
              planlamamız için bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 10. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Melek yatırımcı sistemi, Türkiye&apos;de erken aşama
          girişimlere sermaye akışını teşvik eden, devletin doğrudan
          hibe vermeden vergi indirimiyle destek sağladığı nadir
          mekanizmalardan biri. Sermaye sahibi için %75-100 gelir vergisi
          indirimi ciddi bir avantaj sunarken, girişimci için de banka
          kredisine alternatif, öz kaynak bazlı bir büyüme kanalı
          oluşturuyor. 2025&apos;te güncellenen yönetmelik ve 2026&apos;da
          yeniden değerlenen tutarlarla sistem, hem yatırımcı hem
          girişimci için daha şeffaf bir çerçeveye kavuştu.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu sürecin en kritik noktası, lisans başvurusunun ve yatırım
          bildiriminin doğru zamanda ve doğru şekilde yapılmasıdır;
          aksi hâlde ekonomik olarak gerçekleşen bir yatırım, vergi
          indirimi açısından hiçbir karşılık üretmez. Girişimci
          tarafında da şirketin ortaklık yapısının ve mali tablolarının
          yatırıma hazır hâle getirilmesi gerekir. Koray Akdağ / Sistem
          Global Danışmanlık olarak, Stratejik İş Ortaklıkları
          danışmanlığı kapsamında hem girişimcilerin yatırımcıya hazırlık
          sürecinde hem de şirket kuruluşu ve sonrasındaki muhasebe/uyum
          yükümlülüklerinde tek noktadan yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/tubitak-bigg-yatirim-1812-programi-2026-2-cagrisi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • BiGG YATIRIM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK BiGG Yatırım (1812) Programı 2026-2 Çağrısı</h3>
          </Link>
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci</h3>
          </Link>
          <Link
            href="/blog/kosgeb-girisimci-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • GİRİŞİMCİLİK DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Girişimci Destek Programı Nedir?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Melek yatırımcı olmak için mutlaka çok yüksek gelirli veya varlıklı olmak mı gerekiyor?","acceptedAnswer":{"@type":"Answer","text":"Gelir (2026'da 2.509.800 TL) ve servet (12.549.000 TL) ölçütlerinden biri yeterli, ama tek yol bu değil. Üst düzey bankacılık/finans veya girişim sermayesi alanında en az 2 yıl tecrübesi olan kişiler de deneyim ölçütü üzerinden lisans başvurusunda bulunabiliyor."}},{"@type":"Question","name":"Girişimimin yatırımcı bulması için mutlaka bir BKY ağına (iş melekleri ağı) üye olması mı gerekiyor?","acceptedAnswer":{"@type":"Answer","text":"Zorunlu değil, ama pratikte en yaygın yol budur. Akredite ağlar, girişimciyi çok sayıda lisanslı yatırımcıyla aynı anda buluşturduğu için süreç hızlanır. Girişimci, doğrudan tanıdığı lisanslı bir yatırımcıyla da anlaşabilir; kritik olan yatırımın yönetmeliğe uygun şekilde bildirilmesidir."}},{"@type":"Question","name":"Vergi indirimini hangi yılın beyannamesinde kullanırım?","acceptedAnswer":{"@type":"Answer","text":"İndirim, iştirak hisselerinin iktisap edildiği vergilendirme dönemine ait yıllık gelir vergisi beyannamesinde uygulanır. O yılki kazanç yetersizse, indirilemeyen kısım izleyen yıllarda yeniden değerleme oranında artırılarak kullanılabilir."}},{"@type":"Question","name":"İki yıl dolmadan hisselerimi satarsam ne olur?","acceptedAnswer":{"@type":"Answer","text":"O güne kadar yararlanılan vergi indirimi yönünden vergi ziyaı doğmuş sayılır; zamanında tahakkuk ettirilmemiş vergiler gecikme faiziyle birlikte tahsil edilir. Girişim şirketinin iflası gibi mücbir sebep hâlleri, otuz iş günü içinde bildirilip kabul edilmesi şartıyla bu sonucu doğurmayabilir."}},{"@type":"Question","name":"Melek yatırımcı (BKY) ile TÜBİTAK BiGG Yatırım (1812) aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. BKY sisteminde yatırımı bir gerçek kişi yapar ve karşılığında kişisel gelir vergisi indirimi kazanır. TÜBİTAK BiGG Yatırım (1812) programında ise yatırımı doğrudan TÜBİTAK BiGG Fonu yapar ve girişimciye vergi indirimi değil, kamu kaynaklı hisse karşılığı sermaye sağlanır. İki sistem aynı şirkette bir arada da kullanılabilir."}},{"@type":"Question","name":"Yatırım yaptığım girişim iflas ederse vergi indirimini geri öder miyim?","acceptedAnswer":{"@type":"Answer","text":"Yatırımcının herhangi bir kastı olmaksızın girişim şirketinin iflas etmesi, GVK geçici 82. madde kapsamında mücbir sebep sayılır. Bu durum otuz iş günü içinde Gelir İdaresi Başkanlığı'na bildirilip kabul edilirse, iki yıllık elde tutma şartı yerine getirilememiş olsa da vergi ziyaı cezası ve gecikme faizi uygulanmaz."}}]}) }}
      />
    </BlogLayout>
  );
}
