import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Sanayi Sicil Belgesi Nasıl Alınır? 2026 SSBS Başvuru Rehberi | Koray Akdağ",
  description:
    "6948 sayılı Kanun kapsamında üretim yapan her işletmenin almak zorunda olduğu Sanayi Sicil Belgesi, 1 Nisan 2026 tarihli SGM 2026/4 Tebliği ile tamamen dijitalleşti: vize kaldırıldı, yerine yıllık işletme cetveli zorunluluğu geldi. SSBS üzerinden başvuru adımları, gerekli belgeler, ücretler, süresinde kayıt yaptırmamanın cezası ve belgenin 2027'de %12,5 kurumlar vergisi indirimiyle bağlantısıyla güncel rehber.",
  keywords: [
    "sanayi sicil belgesi nasıl alınır",
    "SSBS başvuru",
    "sanayi sicil belgesi gerekli belgeler",
    "sanayi sicil tebliği SGM 2026/4",
    "yıllık işletme cetveli son tarih",
    "sanayi sicil belgesi cezası",
    "sanayi sicil belgesi ücreti 2026",
    "sanayi sicil belgesi kapasite raporu farkı",
  ],
  alternates: {
    canonical: "/blog/sanayi-sicil-belgesi-nasil-alinir-ssbs-basvuru-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Sanayi Sicil Belgesi Nasıl Alınır? SSBS Üzerinden Başvuru, Ücretler ve 2026 Güncel Rehber"
      description="6948 sayılı Sanayi Sicil Kanunu kapsamında üretim yapan her işletmenin almak zorunda olduğu Sanayi Sicil Belgesi, 1 Nisan 2026 tarihli SGM 2026/4 Tebliği ile baştan aşağı dijitalleşti. Vizenin kaldırılması, yıllık işletme cetveli zorunluluğu, SSBS üzerinden başvuru adımları, gerekli belgeler, ücretler ve süresinde kayıt yaptırmamanın cezasıyla güncel rehber."
      category="SANAYİ SİCİL BELGESİ • ÜRETİM ŞİRKETLERİ • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="sanayi-sicil-belgesi-nasil-alinir-ssbs-basvuru-2026"
      coverImage="https://images.unsplash.com/photo-1758271941610-dbf5ce7d3c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Sanayi Sicil Belgenizin Güncelliğini Birlikte Kontrol Edelim"
      ctaText="Sanayi sicil belgenizin yeni SGM 2026/4 düzeniyle uyumlu olup olmadığını, yıllık işletme cetveli yükümlülüğünüzü ve 2027'deki %12,5 kurumlar vergisi indirimine hazırlığınızı birlikte değerlendirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Sanayi Sicil Belgesi Nasıl Alınır?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>6948 sayılı Sanayi Sicil Kanunu</strong> gereği, üretim faaliyetiyle uğraşan her işletme (mikro ölçekli dahil) sanayi siciline kaydolmak zorundadır.</li>
          <li>✔ <strong>1 Nisan 2026 tarihli, 33211 sayılı Resmî Gazete&apos;de</strong> yayımlanan ve <strong>15 Nisan 2026&apos;da yürürlüğe giren SGM 2026/4 Tebliği</strong> ile süreç baştan aşağı değişti.</li>
          <li>✔ Başvuru artık <strong>Sanayi Sicil Bilgi Sistemi (SSBS)</strong> üzerinden tamamen elektronik ortamda yapılıyor; her üretim yeri için ayrı başvuru gerekiyor.</li>
          <li>✔ Eski <strong>&quot;vize&quot; uygulaması kaldırıldı</strong>; belgenin geçerliliği artık her yıl verilmesi gereken <strong>yıllık işletme cetveline</strong> bağlandı.</li>
          <li>✔ Mikro işletmeler, başka bir kurum talep etmedikçe <strong>kapasite raporu almadan</strong>, beyan esasıyla başvurabiliyor.</li>
          <li>✔ Kaydı olmayan veya yıllık işletme cetvelini süresinde vermeyen işletmelere <strong>2026&apos;da 15.029 TL idari para cezası</strong> uygulanıyor (6948 sayılı Kanun m.9).</li>
          <li>✔ Belge, 2027&apos;den itibaren üretim kazancına uygulanacak <strong>%12,5 kurumlar vergisi indiriminin</strong> ön şartı; eksikse 2026 sonuna kadar tamamlanmalı.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">📑 İçindekiler</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Sanayi Sicil Belgesi Nedir, Kimler Almak Zorunda?
          </Link>
          <Link href="#2026-degisiklik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 2026&apos;da Ne Değişti? SGM 2026/4 Tebliği
          </Link>
          <Link href="#basvuru" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. SSBS Üzerinden Başvuru: Adım Adım Süreç
          </Link>
          <Link href="#belgeler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Gerekli Belgeler ve Mikro İşletme Kolaylığı
          </Link>
          <Link href="#cetvel" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Yıllık İşletme Cetveli Zorunluluğu
          </Link>
          <Link href="#ucret-ceza" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Ücretler ve Süresinde Başvurmamanın Cezası
          </Link>
          <Link href="#vergi-baglantisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Belgenin %12,5 Kurumlar Vergisi İndirimiyle Bağlantısı
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
          1. Sanayi Sicil Belgesi Nedir, Kimler Almak Zorunda?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Sanayi Sicil Belgesi, <strong>6948 sayılı Sanayi Sicili Kanunu</strong>{" "}
          kapsamında bir işletmenin fiilen üretim (imalat) faaliyetiyle
          uğraştığını resmî olarak gösteren belgedir. Hammaddeyi, yarı
          mamulü veya enerjiyi makine, cihaz ya da tesis kullanarak yeni bir
          ürüne dönüştüren her işletme, ölçeği ne olursa olsun
          (mikro, küçük, orta veya büyük) sanayi siciline kaydolmak ve bu
          belgeyi almak zorundadır.
        </p>
        <p className="leading-8 text-gray-700">
          Belge, yalnızca bir kayıt formalitesi değildir; <strong>Sanayi ve
          Teknoloji Bakanlığı&apos;na</strong> işletmenin ürettiği ürünü,
          üretim yerini ve kapasitesini bildirir. KOSGEB destekleri, Yatırım
          Teşvik Belgesi başvuruları, yerli malı belgesi, kamu ihalelerinde
          yerli katkı oranı ve 2027&apos;den itibaren uygulanacak %12,5
          kurumlar vergisi indirimi gibi birçok süreç, sanayi sicil
          belgesinin güncel ve geçerli olmasını ön şart olarak arar.
        </p>
      </section>

      {/* 2. 2026 DEĞİŞİKLİK */}
      <section id="2026-degisiklik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 2026&apos;da Ne Değişti? SGM 2026/4 Tebliği
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          <strong>1 Nisan 2026 tarihli ve 33211 sayılı Resmî Gazete&apos;de</strong>{" "}
          yayımlanan <strong>Sanayi Sicil Tebliği (SGM 2026/4)</strong>,{" "}
          <strong>15 Nisan 2026&apos;da yürürlüğe girdi</strong> ve 2014&apos;ten
          beri uygulanan eski tebliği yürürlükten kaldırdı. Değişikliğin
          getirdiği en önemli üç başlık şunlar:
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">1️⃣</div>
            <h3 className="mb-2 text-base font-bold">Tamamen Dijital Süreç</h3>
            <p className="text-sm text-gray-600">Kayıt, başvuru, değişiklik ve iptal işlemlerinin tamamı Sanayi Sicil Bilgi Sistemi (SSBS) üzerinden elektronik ortamda yapılıyor.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">2️⃣</div>
            <h3 className="mb-2 text-base font-bold">Vize Kaldırıldı</h3>
            <p className="text-sm text-gray-600">Önceki dönemlerde belirli aralıklarla yapılan &quot;vize&quot; uygulaması kaldırıldı; belgenin geçerliliği artık yıllık işletme cetveli verilmesine bağlı.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">3️⃣</div>
            <h3 className="mb-2 text-base font-bold">Adres Bazlı Ayrım Sıkılaştı</h3>
            <p className="text-sm text-gray-600">Aynı adreste birden fazla işletme faaliyet gösteriyorsa fiziki ayrım, bağımsız kapasite raporu ve ayrı SGK işyeri kaydı gibi şartlar netleşti.</p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Birden fazla üretim yeri (fabrika, şube) olan işletmeler artık{" "}
          <strong>her üretim yeri için ayrı başvuru</strong> yapmak zorunda.
          Unvan, adres veya faaliyet konusu değişikliklerinde mevcut belge
          aynı numarayla güncellenirken; devir, birleşme, bölünme veya tür
          değişikliği gibi durumlarda yeni bir belge düzenleniyor.
        </p>
      </section>

      {/* 3. BAŞVURU */}
      <section id="basvuru" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. SSBS Üzerinden Başvuru: Adım Adım Süreç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yeni tebliğe göre başvuru süreci şu sırayla ilerliyor:
        </p>
        <div className="space-y-4">
          <div className="flex gap-4 rounded-xl border p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">1</div>
            <p className="text-gray-700"><strong>Kapasite raporu temin edilir.</strong> İşletmenin bağlı bulunduğu ticaret/sanayi odasından veya ilgili meslek kuruluşundan, üretilen ürünü ve yıllık fiilî üretim kapasitesini gösteren kapasite raporu alınır (mikro işletmeler için istisna aşağıda).</p>
          </div>
          <div className="flex gap-4 rounded-xl border p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">2</div>
            <p className="text-gray-700"><strong>SSBS&apos;ye giriş yapılır.</strong> İşletme yetkilisi e-Devlet şifresi veya ilgili yetkilendirmeyle Sanayi Sicil Bilgi Sistemi&apos;ne girer ve her üretim yeri için ayrı bir beyanname açar.</p>
          </div>
          <div className="flex gap-4 rounded-xl border p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">3</div>
            <p className="text-gray-700"><strong>Beyanname doldurulur, belgeler yüklenir.</strong> Üretim konusu, üretim yeri bilgisi, üretime başlama tarihi ve istenen diğer alanlar eksiksiz doldurulur; kapasite raporu, imza sirküleri, kira sözleşmesi/tapu ve ticaret sicil kaydı gibi belgeler sisteme yüklenir.</p>
          </div>
          <div className="flex gap-4 rounded-xl border p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">4</div>
            <p className="text-gray-700"><strong>İl müdürlüğü değerlendirmesi.</strong> Sanayi ve Teknoloji İl Müdürlüğü, beyanı ve yüklenen belgeleri 6948 sayılı Kanun&apos;daki işletme tanımına ve ürün sınıflandırmasına göre inceler; gerektiğinde yerinde tespit yapabilir.</p>
          </div>
          <div className="flex gap-4 rounded-xl border p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">5</div>
            <p className="text-gray-700"><strong>Belge elektronik olarak düzenlenir.</strong> Onaylanan başvuru için sanayi sicil belgesi SSBS üzerinden elektronik ortamda oluşturulur ve işletmenin hesabına tanımlanır.</p>
          </div>
        </div>
      </section>

      {/* 4. BELGELER + KARIŞTIRMAYIN */}
      <section id="belgeler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Gerekli Belgeler ve Mikro İşletme Kolaylığı
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Odadan odaya küçük farklar olsa da, başvuruda tipik olarak şu
          belgeler istenir: eksiksiz doldurulmuş başvuru formu/beyanname,
          imza sirkülerinin aslı veya noter onaylı sureti, iş yeri kira
          sözleşmesi ya da tapu örneği, ticaret sicil gazetesi, vergi
          levhası ve kapasite raporu. Aynı adreste birden fazla işletme
          üretim yapıyorsa her biri için ayrı, bağımsız kapasite raporu
          şartı aranır.
        </p>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
          <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
            🟢 Mikro İşletmeler İçin Kolaylık
          </h3>
          <p className="leading-8 text-gray-700">
            SGM 2026/4 Tebliği, mikro işletme ölçeğindeki işyerlerinin
            üretime geçtiklerinde sanayi sicil başvurularını yine
            elektronik ortamda yapmasını, ancak başka bir kurum ayrıca
            talep etmedikçe <strong>kapasite raporu almak zorunda
            olmamasını</strong> öngörüyor. Bu durumda kapasite raporu
            yerine işletmenin kendi beyanı veya ekspertiz raporu esas
            alınıyor.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Sanayi Sicil Belgesi ile Kapasite Raporu Farklı Şeylerdir
          </h3>
          <p className="leading-8 text-gray-700">
            Birçok işletme sahibi ikisini aynı belge sanıyor, oysa ayrı
            kurumlar tarafından, ayrı amaçlarla düzenlenir. <strong>Kapasite
            raporu</strong>, işletmenin bağlı bulunduğu ticaret/sanayi odası
            veya ilgili meslek kuruluşu tarafından verilir ve işletmenin
            yıllık üretim kapasitesini, makine parkını ve üretim konusunu
            tespit eder; bir nevi teknik ekspertizdir. <strong>Sanayi Sicil
            Belgesi</strong> ise Sanayi ve Teknoloji Bakanlığı&apos;na bağlı
            il müdürlüğü tarafından, genellikle bu kapasite raporuna
            dayanılarak düzenlenen resmî kayıt belgesidir. Yani kapasite
            raporu olmadan çoğu işletme sanayi sicil belgesi alamaz, ama
            kapasite raporuna sahip olmak tek başına sanayi sicil belgesi
            anlamına gelmez; ayrıca SSBS üzerinden sicile kayıt
            yaptırılması gerekir.
          </p>
        </div>
      </section>

      {/* 5. YILLIK İŞLETME CETVELİ */}
      <section id="cetvel" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yıllık İşletme Cetveli Zorunluluğu
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Eski sistemde belgenin geçerliliği dönemsel bir &quot;vize&quot;
          işlemine bağlıydı. SGM 2026/4 Tebliği bu uygulamayı kaldırdı;
          yerine belgenin geçerliliğini doğrudan{" "}
          <strong>yıllık işletme cetveli</strong> verilmesine bağladı.
          İşletmeler, bir önceki yıla ait üretim, istihdam ve kapasite
          kullanım bilgilerini içeren bu cetveli her yıl düzenli olarak
          SSBS üzerinden sunmak zorunda; yaygın uygulamaya göre son tarih{" "}
          <strong>30 Nisan</strong>&apos;dır.
        </p>
        <p className="leading-8 text-gray-700">
          Pratik sonucu şu: artık &quot;belgem vizeliydi, sorun yok&quot;
          demek yeterli değil. Cetveli zamanında vermeyen işletmenin
          belgesi geçerliliğini kaybedebilir; bu da hem KOSGEB/teşvik
          başvurularında hem de aşağıda anlatılan %12,5 kurumlar vergisi
          indiriminde sorun yaratır.
        </p>
      </section>

      {/* 6. ÜCRET VE CEZA + UZMAN NOTU */}
      <section id="ucret-ceza" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Ücretler ve Süresinde Başvurmamanın Cezası
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Güncel haber kaynaklarına göre ilk kayıt başvurusu için düşük
          tutarlı sabit bir ücret alınırken, yıllık işletme cetveli/belge
          işlemlerinde ölçeğe göre kademeli bir ücret uygulanıyor; büyük
          ölçekli işletmeler için bu tutar 2026&apos;da yaklaşık 2.510 TL
          olarak aktarılıyor. Ücret kalemleri ve tam tutarlar zaman zaman
          güncellendiğinden, <strong>başvuru öncesinde SSBS üzerindeki
          güncel ücret tarifesini kontrol etmenizi öneririz.</strong>
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            Uygulamada gözden kaçan asıl risk ücret tutarı değil, <strong>cezadır.</strong>{" "}
            6948 sayılı Kanun&apos;un 9. maddesi uyarınca, üretime başladığı
            halde sanayi siciline kaydolmayan ya da yıllık işletme
            cetvelini süresinde vermeyen işletmelere 2026 yılı için
            yaklaşık <strong>15.029 TL idari para ceza</strong>sı
            uygulanıyor. Bu ceza tek seferlik değil; yükümlülük yerine
            getirilmediği sürece tekrarlanabiliyor. Üstelik kayıtsız
            geçen süre, geriye dönük olarak sanayi sicil belgesine bağlı
            başka avantajların (teşvik, vergi indirimi, yerli malı belgesi)
            da kullanılamamış olması anlamına gelir.
          </p>
        </div>
      </section>

      {/* 7. VERGİ BAĞLANTISI */}
      <section id="vergi-baglantisi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Belgenin %12,5 Kurumlar Vergisi İndirimiyle Bağlantısı
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          7582 sayılı Kanun&apos;un Kurumlar Vergisi Kanunu&apos;nun 32/8.
          maddesinde yaptığı değişiklikle, sanayi sicil belgesine sahip ve
          fiilen üretim yapan şirketlerin üretim kazancı,{" "}
          <strong>2027 vergilendirme döneminden itibaren %12,5 oranında</strong>{" "}
          vergilendirilecek (detaylar için{" "}
          <Link href="/blog/uretimde-kurumlar-vergisi-12-5-sanayi-sicil-belgesi-fason-imalat-2027" className="text-orange-600 underline">
            üretimde %12,5 kurumlar vergisi rehberimize
          </Link>{" "}
          bakabilirsiniz). Bu indirimden yararlanmanın ilk şartı, sanayi
          sicil belgesinin <strong>güncel ve geçerli</strong> olması; yani
          yıllık işletme cetveli yükümlülüğünün aksatılmamış olmasıdır.
        </p>
        <p className="leading-8 text-gray-700">
          Bu nedenle, 2026 hesap dönemi kapanmadan önce yapılması gereken
          ilk kontrol, şirketin sanayi sicil belgesinin SGM 2026/4
          Tebliği&apos;ne göre güncellenip güncellenmediği ve üretilen
          ürünlerin belgeye doğru işlenip işlenmediğidir. Belgesi hiç
          olmayan veya süresi içinde cetvel vermediği için geçersiz hale
          gelmiş bir üretici, 2027&apos;de bu vergi avantajından
          yararlanamaz.
        </p>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Vize uygulaması kalktı; belgenin geçerliliği artık yıllık işletme cetvelinin zamanında verilmesine bağlı.</li>
            <li>Birden fazla üretim yeriniz varsa her biri için ayrı SSBS başvurusu yapmanız gerekiyor.</li>
            <li>Aynı adreste birden fazla işletme üretim yapıyorsa fiziki ayrım ve bağımsız kapasite raporu şartı var; paylaşımlı makine/personel kabul edilmiyor.</li>
            <li>Mikro işletme istisnası yalnızca kapasite raporu şartı içindir; sicile kayıt yükümlülüğünün kendisini kaldırmaz.</li>
            <li>Ücret tutarları ve yıllık işletme cetveli son tarihi ölçeğe ve yıla göre değişebilir; başvurudan önce SSBS üzerindeki güncel duyuruyu kontrol edin.</li>
            <li>Belgenin güncel olmaması, yalnızca idari para cezası riski değil; KOSGEB, teşvik ve 2027&apos;deki %12,5 kurumlar vergisi indirimi gibi süreçlerde de doğrudan engel oluşturur.</li>
          </ul>
        </div>
      </section>

      {/* 9. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2026/04/20260401-3.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Sanayi Sicil Tebliği (SGM 2026/4) - 1 Nisan 2026, 33211 sayılı Resmî Gazete - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6948&MevzuatTur=1&MevzuatTertip=3" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                6948 Sayılı Sanayi Sicili Kanunu - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.sanayi.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Sanayi ve Teknoloji Bakanlığı - sanayi.gov.tr
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
              Sanayi sicil belgesi almak zorunlu mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. 6948 sayılı Kanun kapsamında, hammadde veya yarı
              mamulü makine/tesis kullanarak yeni bir ürüne dönüştüren her
              işletme, ölçeği ne olursa olsun sanayi siciline kaydolmak
              zorundadır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sanayi sicil belgesi başvurusu nereden yapılır?
            </h3>
            <p className="leading-8 text-gray-700">
              1 Nisan 2026 tarihli SGM 2026/4 Tebliği sonrası, başvuru
              tamamen elektronik ortamda Sanayi Sicil Bilgi Sistemi (SSBS)
              üzerinden yapılıyor. Birden fazla üretim yeriniz varsa her
              biri için ayrı başvuru gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kapasite raporu olmadan sanayi sicil belgesi alınır mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel kuralda kapasite raporu başvurunun temel dayanağıdır.
              Mikro işletmeler için istisna var: başka bir kurum ayrıca
              talep etmedikçe kapasite raporu şartı aranmıyor, bunun
              yerine işletme beyanı veya ekspertiz raporu esas alınıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Vize kalktıysa belgem hep geçerli mi kalıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Vize uygulaması kalktı ama yerine her yıl düzenli
              olarak yıllık işletme cetveli verilmesi zorunluluğu geldi.
              Cetvel zamanında verilmezse belgenin geçerliliği sorunlu
              hale gelebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sanayi sicil belgesi almazsam veya cetvel vermezsem ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              6948 sayılı Kanun&apos;un 9. maddesi uyarınca idari para
              cezası uygulanır; 2026 için bu tutar güncel kaynaklara göre
              yaklaşık 15.029 TL&apos;dir. Ayrıca belgesi geçersiz olan
              işletme, KOSGEB destekleri, teşvik başvuruları ve
              2027&apos;deki %12,5 kurumlar vergisi indirimi gibi
              süreçlerden de yararlanamaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sanayi sicil belgesi ile yatırım teşvik belgesi aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Sanayi sicil belgesi, işletmenin fiilen üretim
              yaptığını gösteren temel kayıt belgesidir; yatırım teşvik
              belgesi ise belirli bir yeni yatırım projesi için KDV,
              gümrük vergisi ve vergi avantajı sağlayan ayrı bir belgedir.
              Teşvik belgesi başvurusunda da genellikle güncel bir sanayi
              sicil kaydı aranır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Sanayi Sicil Belgenizin Güncelliğini Birlikte Kontrol Edelim
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketinizin sanayi sicil belgesinin SGM 2026/4 düzenlemesine
            uygun olup olmadığını, yıllık işletme cetveli yükümlülüğünüzü
            ve bu belgenin 2027&apos;deki %12,5 kurumlar vergisi
            indirimine hazırlığınızı{" "}
            <Link href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi" className="text-orange-600 underline">
              vergi danışmanlığı hizmetimiz
            </Link>{" "}
            kapsamında birlikte değerlendirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçin.
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
          Sanayi sicil belgesi, çoğu üretici için uzun süre &quot;bir kere
          alınır, unutulur&quot; şeklinde algılanan bir belgeydi. SGM
          2026/4 Tebliği bu algıyı değiştirdi: süreç tamamen dijitalleşti,
          vize kalktı ve belgenin geçerliliği her yıl düzenli olarak
          verilmesi gereken işletme cetveline bağlandı. Bu da belgeyi,
          bir kerelik işlemden çok, düzenli takip gerektiren bir
          yükümlülüğe dönüştürdü.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, üretim
          şirketlerinin sanayi sicil belgesi ve kapasite raporu
          süreçlerini güncel mevzuata uygun şekilde yönetmesine, yıllık
          işletme cetveli yükümlülüğünü aksatmamasına ve bu belgenin
          2027&apos;deki %12,5 kurumlar vergisi indirimine sağlam bir
          zeminde hazırlanmasına yardımcı oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/uretimde-kurumlar-vergisi-12-5-sanayi-sicil-belgesi-fason-imalat-2027"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ TEŞVİKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Üretimde Kurumlar Vergisi 2027&apos;de %12,5&apos;e İniyor</h3>
          </Link>
          <Link
            href="/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • NACE KODU • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">NACE Kodum Ürettiğim Ürünle Uyuşmuyorsa Ne Olur?</h3>
          </Link>
          <Link
            href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YATIRIM TEŞVİKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgesi Nedir? 2026 Güncel Rehberi</h3>
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
                name: "Sanayi sicil belgesi almak zorunlu mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. 6948 sayılı Kanun kapsamında, hammadde veya yarı mamulü makine/tesis kullanarak yeni bir ürüne dönüştüren her işletme, ölçeği ne olursa olsun sanayi siciline kaydolmak zorundadır.",
                },
              },
              {
                "@type": "Question",
                name: "Sanayi sicil belgesi başvurusu nereden yapılır?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1 Nisan 2026 tarihli SGM 2026/4 Tebliği sonrası, başvuru tamamen elektronik ortamda Sanayi Sicil Bilgi Sistemi (SSBS) üzerinden yapılıyor. Birden fazla üretim yeriniz varsa her biri için ayrı başvuru gerekiyor.",
                },
              },
              {
                "@type": "Question",
                name: "Kapasite raporu olmadan sanayi sicil belgesi alınır mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Genel kuralda kapasite raporu başvurunun temel dayanağıdır. Mikro işletmeler için istisna var: başka bir kurum ayrıca talep etmedikçe kapasite raporu şartı aranmıyor, bunun yerine işletme beyanı veya ekspertiz raporu esas alınıyor.",
                },
              },
              {
                "@type": "Question",
                name: "Vize kalktıysa belgem hep geçerli mi kalıyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Vize uygulaması kalktı ama yerine her yıl düzenli olarak yıllık işletme cetveli verilmesi zorunluluğu geldi. Cetvel zamanında verilmezse belgenin geçerliliği sorunlu hale gelebilir.",
                },
              },
              {
                "@type": "Question",
                name: "Sanayi sicil belgesi almazsam veya cetvel vermezsem ne olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "6948 sayılı Kanun'un 9. maddesi uyarınca idari para cezası uygulanır; 2026 için bu tutar güncel kaynaklara göre yaklaşık 15.029 TL'dir. Ayrıca belgesi geçersiz olan işletme, KOSGEB destekleri, teşvik başvuruları ve 2027'deki %12,5 kurumlar vergisi indirimi gibi süreçlerden de yararlanamaz.",
                },
              },
              {
                "@type": "Question",
                name: "Sanayi sicil belgesi ile yatırım teşvik belgesi aynı şey mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Sanayi sicil belgesi, işletmenin fiilen üretim yaptığını gösteren temel kayıt belgesidir; yatırım teşvik belgesi ise belirli bir yeni yatırım projesi için KDV, gümrük vergisi ve vergi avantajı sağlayan ayrı bir belgedir. Teşvik belgesi başvurusunda da genellikle güncel bir sanayi sicil kaydı aranır.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
