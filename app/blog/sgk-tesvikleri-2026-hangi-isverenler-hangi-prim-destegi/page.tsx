import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "SGK Teşvikleri 2026: Hangi İşveren Hangi Destekten Yararlanır? | Koray Akdağ",
  description: "2026'da yürürlükteki 15 SGK prim teşvikini tek yazıda: genel indirimden genç/kadın istihdamına, engelli teşvikinden Ar-Ge desteğine kimler hangi orandan yararlanır?",
  keywords: [
    "sgk teşvikleri 2026",
    "işveren prim teşvikleri",
    "sgk teşvik kodları",
    "istihdam teşvikleri 2026",
    "sgk prim indirimi",
    "engelli istihdam teşviki",
    "genç kadın istihdam teşviki",
    "sgk teşvik listesi",
    "4447 sayılı kanun teşvikleri",
    "5510 sayılı kanun 81 madde",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="SGK Teşvikleri 2026: Hangi İşverenler Hangi Prim Desteğinden Yararlanabilir?"
      description="SGK Sigorta Primleri Genel Müdürlüğü'nün güncel sunumuna göre 2026'da yürürlükte olan 15 sigorta primi teşvik, destek ve indirimi tek yazıda: genel prim indiriminden genç/kadın istihdam teşvikine, engelli sigortalı teşvikinden Ar-Ge ve yatırım teşviklerine kadar kimler hangi destekten ne oranda yararlanabilir, karşılaştırma tablosuyla güncel rehber."
      category="SGK TEŞVİKLERİ • BORDRO • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="sgk-tesvikleri-2026-hangi-isverenler-hangi-prim-destegi"
      coverImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          &quot;Hangi SGK teşvikinden yararlanabilirim?&quot; sorusu, neredeyse
          her işverenin bordro sürecinde karşılaştığı ama çoğu zaman eksik
          cevaplanan bir sorudur. SGK Sigorta Primleri Genel Müdürlüğü&apos;nün
          2026 güncel sunumuna göre bugün itibarıyla yürürlükte{" "}
          <strong>toplam 15 farklı sigorta primi teşvik, destek ve
          indirimi</strong> bulunuyor; bunların 13&apos;ü 4/a sigortalı
          çalıştıran özel sektör işyerlerine, ikisi ise 4/b (Bağ-Kur)
          sigortalılarına yönelik. Bu yazıda bu teşviklerin tamamını, yasal
          dayanaklarını ve güncel oranlarını tek bir yerde topladık.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ 2026&apos;da yürürlükte olan 15 SGK teşvikinin tam listesi</li>
          <li>✔ Her teşvik için kimler yararlanabilir, oran/tutar nedir?</li>
          <li>✔ Tüm teşvikleri özetleyen karşılaştırma tablosu</li>
          <li>✔ Teşviklerin bordroya nasıl yansıtıldığı — adım adım süreç</li>
          <li>✔ Aynı anda birden fazla teşvik kullanılabilir mi?</li>
          <li>✔ Artık yeni girişe kapalı olan teşvikler (27103 gibi)</li>
          <li>✔ Sık sorulan sorular</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#genel-bakis" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. SGK Teşvik Sistemi Nasıl İşler?
          </Link>
          <Link href="#genel-indirim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Genel Prim İndirimi: 4-5 Puan
          </Link>
          <Link href="#yeni-istihdam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Yeni İstihdama Yönelik Teşvikler
          </Link>
          <Link href="#dezavantajli-gruplar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Dezavantajlı Grupların İstihdamına Yönelik Teşvikler
          </Link>
          <Link href="#yatirim-arge" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Yatırım, Ar-Ge ve Girişimcilik Bağlantılı Teşvikler
          </Link>
          <Link href="#isyeri-bazli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. İşyeri Bazlı Teşvikler
          </Link>
          <Link href="#karsilastirma-tablosu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Karşılaştırma Tablosu
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Teşvik Bordroya Nasıl Yansıtılır?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. GENEL BAKIŞ */}
      <section id="genel-bakis" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. SGK Teşvik Sistemi Nasıl İşler?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          SGK teşvikleri, 5510 sayılı Sosyal Sigortalar ve Genel Sağlık
          Sigortası Kanunu&apos;nun 81. maddesi ile 4447 sayılı İşsizlik
          Sigortası Kanunu&apos;na eklenen çeşitli ek/geçici maddelere
          dayanır. Ortak mantıkları şudur: normalde işverenin ödemesi gereken
          sigorta primi işveren hissesinin tamamı veya bir kısmı, duruma göre{" "}
          <strong>Hazine ve Maliye Bakanlığı, İşsizlik Sigortası Fonu</strong>{" "}
          veya ilgili bakanlığın bütçesinden karşılanır; işveren bu tutarı
          fiilen ödemez.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Devletin bu teşvikleri çıkarma amacı da nettir: kayıtlı istihdamı
          artırmak, düzenli prim ödeme kültürünü yaygınlaştırmak, kadın-genç-
          engelli gibi dezavantajlı grupların işgücüne katılımını
          desteklemek, bölgesel gelişmişlik farklarını azaltmak ve stratejik
          yatırımları özendirmek.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bazı teşvikler (genel 4/5 puanlık indirim, asgari ücret desteği
            gibi) e-Bildirge sisteminde <strong>otomatik olarak</strong>{" "}
            hesaplanır; başka bir işlem yapılmasına gerek yoktur. Bazıları
            içinse Muhtasar ve Prim Hizmet Beyannamesi&apos;nde{" "}
            <strong>doğru kanun numarasının seçilmesi</strong> ve şartların
            sağlandığının işveren tarafından takip edilmesi gerekir. Bu
            ayrımı bilmemek, en sık kaçırılan tasarruf kalemlerinden biridir.
          </p>
        </div>
      </section>

      {/* 2. GENEL PRİM İNDİRİMİ */}
      <section id="genel-indirim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Genel Prim İndirimi: 4-5 Puan
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Listenin en yaygın kullanılan kalemi, hemen hemen tüm özel sektör
          işverenlerini kapsayan <strong>genel prim indirimidir</strong>{" "}
          (5510 sayılı Kanun md. 81/1-ı). Sigortalının prime esas
          kazancı üzerinden hesaplanan malullük, yaşlılık ve ölüm sigortaları
          priminin işveren hissesine düşen kısmının bir bölümü Hazine ve
          Maliye Bakanlığı tarafından karşılanır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Sektör</th>
                <th className="p-5">İndirim Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İmalat dışı sektörler</td>
                <td className="p-5">4 puan</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  İmalat sektöründe faaliyet gösteren işyerleri
                </td>
                <td className="p-5">
                  5 puan (2026 yıl sonuna kadar geçerli)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 mb-4 leading-8 text-gray-700">
          Bu indirimden yararlanmak için işverenin özel şart aranmaz;
          herhangi bir başvuru yapmasına da gerek yoktur. Ancak aşağıdaki
          genel koşullar sağlanmalıdır:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
            <li>Aylık Prim ve Hizmet Belgesi/Muhtasar ve Prim Hizmet Beyannamesi&apos;nin yasal süresinde verilmesi,</li>
            <li>Primlerin yasal süresinde ödenmesi,</li>
            <li>
              Türkiye genelinde prim, idari para cezası ve gecikme zammı/cezası borcu
              bulunmaması (yapılandırılmış ve düzenli ödenen borçlar bu şartı bozmaz),
            </li>
            <li>Kayıt dışı sigortalı çalıştırılmaması, sahte sigortalı bildiriminde bulunulmaması,</li>
            <li>Yapılan işin ihale/kamu alım-yapım işi kapsamında olmaması.</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Sosyal güvenlik destek primine tabi çalışanlar ve yurt dışında
          çalıştırılan sigortalılar için bu indirimden yararlanılamaz. Ayrıca
          özel sektör işverenlerince yurt dışındaki işyerlerinde
          çalıştırılmak üzere götürülen/gönderilen sigortalılar için ayrı
          bir <strong>5 puanlık genel sağlık sigortası indirimi</strong>{" "}
          (md. 81/1-i) uygulanır; bu iki indirim birlikte kullanılamaz.
        </p>
      </section>

      {/* 3. YENİ İSTİHDAMA YÖNELİK TEŞVİKLER */}
      <section id="yeni-istihdam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Yeni İstihdama Yönelik Teşvikler
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Bu grup, işletmenin mevcut ortalama çalışan sayısına{" "}
          <strong>ilave</strong> olarak yeni personel alan işverenleri
          hedefler.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          3.1 Genç, Kadın ve Mesleki Belge Sahibi Olanların İstihdamı (06111)
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          4447 sayılı Kanun&apos;un Geçici 10. maddesine dayanan bu teşvikte,
          uygun profildeki sigortalı için işveren sigorta primi payının
          tamamı İşsizlik Sigortası Fonu&apos;ndan karşılanır. Son uzatmaya
          göre 31 Aralık 2026&apos;ya kadar işe alınan personel için teşvik
          hakkı doğuyor; süre tablosuna göre 6 ile 54 ay arasında değişen bir
          dönem boyunca kullanılabiliyor. Bu teşviki, şartları ve 2026 örnek
          hesaplamalarıyla ayrıntılı olarak ele aldığımız yazıya buradan
          ulaşabilirsiniz:{" "}
          <Link href="/blog/6111-sayili-kanun-genc-kadin-istihdam-tesviki-2026" className="text-orange-600 underline">
            6111 Sayılı Kanun İstihdam Teşviki: 2026 Şartları ve Son Tarih
          </Link>
          .
        </p>

        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          3.2 İşsizlik Ödeneği Alanların İstihdamı (Kod 15921)
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          İşsizlik ödeneği almakta olan bir kişi özel sektör işvereni
          tarafından işe alınırsa, işsizlik ödeneğine hak kazandığı süre
          boyunca kısa vadeli sigorta primlerinin %1&apos;i ile uzun vadeli
          sigorta primleri ve genel sağlık sigortası priminin tamamı
          İşsizlik Sigortası Fonu&apos;ndan karşılanır (4447 sayılı Kanun md.
          50/5). Sigortalının işe giriş tarihinden önceki 6 aylık ortalama
          sigortalı sayısına ilave olarak işe alınması şartı aranır; bu
          teşvik genel 4 puanlık indirimle birlikte uygulanmaz.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          3.3 2026 Asgari Ücret Desteği
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          5510 sayılı Kanun&apos;a eklenen <strong>Geçici 112. madde</strong>{" "}
          ve SGK&apos;nın 5 Mart 2026 tarihli 2026/8 sayılı Genelgesi
          uyarınca, 1 Ocak – 31 Aralık 2026 döneminde şartları sağlayan
          işyerlerine sigortalı başına <strong>günlük 42,33 TL</strong>{" "}
          (aylık yaklaşık <strong>1.270 TL</strong>) destek sağlanıyor. Destek
          herhangi bir başvuru gerektirmeden sistem tarafından otomatik
          hesaplanıyor ve işverenin sonraki dönem prim borcundan mahsup
          ediliyor. Yararlanma şartları arasında aylık bildirimlerin
          zamanında yapılması, SGK&apos;ya borç bulunmaması, 2025 yılına
          göre çalışan sayısının azaltılmamış olması ve kayıt dışı/eksik
          ücret bildirimi yapılmaması yer alıyor. Tam ve güncel eşik
          değerlerin bordronuza özel olarak kontrol edilmesi önemlidir; bu
          rakamlar her yıl yeniden belirleniyor.
        </p>
      </section>

      {/* 4. DEZAVANTAJLI GRUPLAR */}
      <section id="dezavantajli-gruplar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Dezavantajlı Grupların İstihdamına Yönelik Teşvikler
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">♿</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Engelli Sigortalı İstihdamı
            </h3>
            <p className="text-gray-700">
              4857 sayılı İş Kanunu&apos;nun 30. maddesine dayanır (kod
              14857). Özel sektörde çalıştırılan engelli sigortalılar için,
              prime esas kazanç alt sınırı üzerinden hesaplanan sigorta
              primi işveren hissesinin tamamı Hazine ve Maliye Bakanlığınca
              karşılanır. Süre sınırı yoktur, engelli sigortalı çalıştırıldığı
              sürece devam eder.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">🤝</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Sosyal Hizmetlerden Faydalananların İstihdamı
            </h3>
            <p className="text-gray-700">
              2828 sayılı Kanun&apos;un ek 1. maddesi kapsamındaki hak
              sahiplerinin istihdamında, prime esas kazanç alt sınırı
              üzerinden hesaplanan sigorta primi ve işsizlik sigortası
              priminin hem sigortalı hem işveren hissesinin tamamı Aile ve
              Sosyal Hizmetler Bakanlığınca karşılanır. Yararlanma süresi{" "}
              <strong>5 yıl</strong>dır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">🏠</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Sosyal Yardım Alanların İstihdamı
            </h3>
            <p className="text-gray-700">
              3294 sayılı Kanun&apos;un ek 5. maddesine dayanır (kod 03294).
              Nakdi düzenli sosyal yardım alan hanede yaşayan ve İŞKUR&apos;a
              kayıtlı işsiz olan kişinin istihdamında işveren hissesinin
              tamamı karşılanır. Yararlanma süresi <strong>1 yıl</strong>dır.
            </p>
          </div>
        </div>
      </section>

      {/* 5. YATIRIM/AR-GE/GİRİŞİMCİLİK */}
      <section id="yatirim-arge" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yatırım, Ar-Ge ve Girişimcilik Bağlantılı Teşvikler
        </h2>

        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          5.1 Yatırım Teşvik Belgesi Kapsamındaki Prim Desteği
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          5510 sayılı Kanun&apos;un ek 2. maddesine göre, Yatırımlarda Devlet
          Yardımları Hakkında Kararlar çerçevesinde teşvik belgesi almış ve
          bu belgeyi tamamlama vizesine bağlamış işverenler, belgede
          belirtilen süre boyunca prime esas kazanç alt sınırı üzerinden
          hesaplanan sigorta priminin işveren hissesinin tamamından (6.
          bölgede işveren+sigortalı hissesinin tamamından) yararlanabilir.
          Bu teşvikin dayanağı olan Yatırım Teşvik Belgesi sistemini
          ayrıntılı işlediğimiz yazı için:{" "}
          <Link href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026" className="text-orange-600 underline">
            Yatırım Teşvik Belgesi Nedir? 2026 Güncel Rehberi
          </Link>
          .
        </p>

        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          5.2 Ar-Ge, Tasarım ve Teknopark Personeli Teşviki
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          5746 sayılı Kanun&apos;un 3. maddesi uyarınca, Ar-Ge/Tasarım
          merkezlerinde ve 4691 sayılı Kanun kapsamında ücreti gelir
          vergisinden istisna olan personelin sigorta primi işveren
          hissesinin yarısı, <strong>31 Aralık 2028&apos;e kadar</strong>{" "}
          Hazine ve Maliye Bakanlığınca karşılanıyor. Bu destek, genel 4/5
          puanlık indirimin ardından kalan işveren payı üzerinden
          hesaplanarak katmanlı biçimde uygulanır. Ar-Ge merkezi kurma
          şartları ve tüm vergi/SGK avantajları için:{" "}
          <Link href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026" className="text-orange-600 underline">
            Ar-Ge Merkezi Nedir? 2026 Şartları ve Vergi/SGK Avantajları
          </Link>
          .
        </p>

        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          5.3 Kültür Yatırımları ve Girişimleri Teşviki
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          5225 sayılı Kanun kapsamında Kültür Yatırım Belgesi sahibi
          işyerlerinde işveren hissesinin <strong>3 yıl boyunca %50&apos;si</strong>,
          Kültür Girişim Belgesi sahibi işyerlerinde ise{" "}
          <strong>7 yıl boyunca %25&apos;i</strong> Kültür ve Turizm
          Bakanlığınca karşılanıyor.
        </p>

        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          5.4 Genç Girişimci Teşviki (4/b)
        </h3>
        <p className="leading-8 text-gray-700">
          Çalışan istihdam eden işverenler için değil, kendi işini kuran
          girişimciler için: Gelir Vergisi Kanunu&apos;nun mükerrer 20.
          maddesindeki genç girişimci kazanç istisnasından yararlanan ve
          18-29 yaş aralığında ilk kez işyeri açan gerçek kişilerin 4/b
          primleri, <strong>1 yıl süreyle</strong> prime esas kazanç alt
          sınırı üzerinden Hazine ve Maliye Bakanlığınca karşılanıyor.
        </p>
      </section>

      {/* 6. İŞYERİ BAZLI */}
      <section id="isyeri-bazli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. İşyeri Bazlı Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu iki teşvik, personel profiline değil <strong>işyerinin
          tehlike sınıfına ve iş sağlığı güvenliği performansına</strong>{" "}
          bağlı olarak uygulanır:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Çok Tehlikeli Sınıf İşsizlik Sigortası Primi Teşviki
            </h3>
            <p className="text-gray-700">
              4447 sayılı Kanun&apos;un ek 4. maddesine göre, çok tehlikeli
              sınıfta yer alıp ondan fazla çalışanı bulunan ve üç yıl içinde
              ölümlü/sürekli iş göremezlikle sonuçlanan iş kazası
              yaşanmayan işyerlerinde, işsizlik sigortası işveren hissesi
              teşviki bir sonraki takvim yılından itibaren <strong>3 yıl
              süreyle %1</strong> olarak uygulanır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              İş Sağlığı ve Güvenliği Hizmetlerinin Desteklenmesi
            </h3>
            <p className="text-gray-700">
              6331 sayılı Kanun&apos;un 7. maddesi kapsamında, 10&apos;dan
              az çalışanı bulunan tehlikeli ve çok tehlikeli sınıftaki
              işyerlerine, sigortalı başına günlük brüt asgari ücretin
              tehlikeli sınıfta %1,4&apos;ü, çok tehlikeli sınıfta %1,6&apos;sı
              SGK tarafından ödenir. Başvurular üçer aylık dönemler halinde
              yapılır.
            </p>
          </div>
        </div>
      </section>

      {/* 7. KARŞILAŞTIRMA TABLOSU */}
      <section id="karsilastirma-tablosu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Karşılaştırma Tablosu
        </h2>
        <p className="mb-8 leading-8 text-gray-700">
          2026&apos;da yürürlükte olan 15 teşvikin özet karşılaştırması:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Teşvik</th>
                <th className="p-4">Yasal Dayanak</th>
                <th className="p-4">Kimler İçin</th>
                <th className="p-4">Karşılanan Kısım / Süre</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Genel Prim İndirimi</td>
                <td className="p-4">5510 md. 81/1-ı</td>
                <td className="p-4">Tüm özel sektör işverenleri</td>
                <td className="p-4">4-5 puan, süresiz</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Yurt Dışına Götürülen Sigortalılar</td>
                <td className="p-4">5510 md. 81/1-i</td>
                <td className="p-4">Yurt dışında çalıştırılan sigortalılar</td>
                <td className="p-4">GSS priminin 5 puanı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">06111 (Genç/Kadın/Mesleki Belge)</td>
                <td className="p-4">4447 Geçici 10. md</td>
                <td className="p-4">31.12.2026&apos;ya kadar işe alınanlar</td>
                <td className="p-4">İşveren hissesinin tamamı, 6-54 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">İşsizlik Ödeneği Alanların İstihdamı</td>
                <td className="p-4">4447 md. 50/5 (kod 15921)</td>
                <td className="p-4">İşsizlik ödeneği alırken işe alınanlar</td>
                <td className="p-4">Ödenek süresi boyunca</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">2026 Asgari Ücret Desteği</td>
                <td className="p-4">5510 Geçici 112. md</td>
                <td className="p-4">Şartları sağlayan tüm işyerleri</td>
                <td className="p-4">Günlük 42,33 TL, 2026 boyunca</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Engelli Sigortalı İstihdamı</td>
                <td className="p-4">4857 md. 30 (kod 14857)</td>
                <td className="p-4">Engelli sigortalı çalıştıranlar</td>
                <td className="p-4">İşveren hissesinin tamamı, süresiz</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sosyal Hizmetlerden Faydalananların İstihdamı</td>
                <td className="p-4">2828 Ek 1. md</td>
                <td className="p-4">Kanun kapsamındaki hak sahipleri</td>
                <td className="p-4">Sigortalı+işveren hissesi, 5 yıl</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sosyal Yardım Alanların İstihdamı</td>
                <td className="p-4">3294 Ek 5. md</td>
                <td className="p-4">Nakdi sosyal yardım alan hanede yaşayanlar</td>
                <td className="p-4">İşveren hissesinin tamamı, 1 yıl</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Yatırım Teşvik Belgesi Desteği</td>
                <td className="p-4">5510 Ek 2. md</td>
                <td className="p-4">Teşvik belgesi sahibi yatırımcılar</td>
                <td className="p-4">İşveren hissesinin tamamı, belge süresince</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Ar-Ge/Tasarım Personeli Teşviki</td>
                <td className="p-4">5746 sayılı Kanun md. 3</td>
                <td className="p-4">Ar-Ge/Tasarım merkezi ve teknopark personeli</td>
                <td className="p-4">İşveren payının yarısı, 31.12.2028&apos;e kadar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Kültür Yatırımları/Girişimleri Teşviki</td>
                <td className="p-4">5225 sayılı Kanun md. 5</td>
                <td className="p-4">Kültür yatırım/girişim belgesi sahipleri</td>
                <td className="p-4">%50 (3 yıl) / %25 (7 yıl)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Genç Girişimci Teşviki</td>
                <td className="p-4">5510 md. 81/1-k</td>
                <td className="p-4">18-29 yaş, ilk kez iş yeri açan 4/b&apos;liler</td>
                <td className="p-4">PEK alt sınırı üzerinden, 1 yıl</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">4/b (Bağ-Kur) 5 Puan İndirimi</td>
                <td className="p-4">5510 md. 81/1-j</td>
                <td className="p-4">Bağımsız çalışan 4/b sigortalıları</td>
                <td className="p-4">5 puan, süresiz</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Çok Tehlikeli Sınıf İşsizlik Sigortası Teşviki</td>
                <td className="p-4">4447 Ek 4. md</td>
                <td className="p-4">10&apos;dan fazla çalışanı olan, kazasız işyerleri</td>
                <td className="p-4">%1 oranında, 3 yıl</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">İSG Hizmetlerinin Desteklenmesi</td>
                <td className="p-4">6331 sayılı Kanun md. 7</td>
                <td className="p-4">10&apos;dan az çalışanlı tehlikeli/çok tehlikeli işyerleri</td>
                <td className="p-4">Günlük asgari ücretin %1,4/%1,6&apos;sı</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Teşvik Bordroya Nasıl Yansıtılır?
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Genel prim indirimi ve asgari ücret desteği dışındaki
          teşviklerin çoğunda süreç şu şekilde işler:
        </p>
        <div className="space-y-6">
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">1</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Uygunluk Tespiti</h3>
              <p className="text-gray-700">
                Sigortalının veya işyerinin hangi teşvike uygun olduğu,
                e-SGK İşveren Sistemi üzerinden yaş, sigortalılık geçmişi,
                belge/engellilik durumu gibi kriterlere göre sorgulanır.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">2</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Belge/Sertifika Kontrolü</h3>
              <p className="text-gray-700">
                Yatırım teşvik belgesi, Ar-Ge merkezi belgesi, engelli sağlık
                kurulu raporu gibi teşvike özgü belgelerin geçerliliği
                doğrulanır.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">3</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Doğru Kanun Numarasının Seçilmesi</h3>
              <p className="text-gray-700">
                Muhtasar ve Prim Hizmet Beyannamesi&apos;nde ilgili sigortalı
                için doğru kanun numarası (06111, 14857, 15921 vb.) seçilerek
                teşvikli bildirim yapılır.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">4</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Aylık Şart Kontrolü</h3>
              <p className="text-gray-700">
                Ortalama sigortalı sayısı, prim borcu durumu ve beyanname/ödeme
                süreleri gibi şartlar her ay yeniden değerlendirilir.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">5</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Mahsuplaşma</h3>
              <p className="text-gray-700">
                Teşvik tutarı, işverenin ödeyeceği prim tutarından mahsup
                edilir veya ilgili kurum bütçesinden doğrudan karşılanır.
              </p>
            </div>
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
            ✅ Aynı sigortalı için genellikle sadece bir teşvikten yararlanılabilir; hangisinin daha avantajlı olduğu önceden hesaplanmalı
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bazı teşvikler (Ar-Ge, kültür yatırımı) genel 4/5 puanlık indirimin üzerine katmanlı uygulanırken, bazıları (06111, işsizlik ödeneği teşviki) bu indirimle birlikte uygulanmaz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ 4447 sayılı Kanun&apos;a dayanan 27103/17103 kodlu &quot;ilave istihdam teşviki&quot; 31.12.2022&apos;den sonra yeni işe alımlara kapalı; sadece o dönemde hak kazanmış mevcut yararlanıcılar için devam ediyor
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ortalama sigortalı sayısı şartı bulunan teşviklerde personel azaltımı, teşvik hakkının durmasına yol açabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kayıt dışı istihdam veya muvazaalı işlem tespiti hâlinde teşvik geriye dönük iptal edilip gecikme cezasıyla geri alınabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Teşvike konu belgelerin (Ar-Ge merkezi belgesi, teşvik belgesi, engelli raporu vb.) süresi dolduğunda teşvik de otomatik olarak sona erer
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yıl içinde çıkan yeni Cumhurbaşkanı Kararları ve SGK genelgeleriyle oranlar/süreler değişebilir; her yıl güncel duruma bakılmalı
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bordro ve teşvik hesaplamalarınızı ayrı bir yerel muhasebeci aramadan uçtan uca bize devredebilirsiniz
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinize Hangi Teşviklerin Uygulanabileceğini Birlikte Tespit Edelim
          </h3>
          <p className="leading-8 text-gray-700">
            15 farklı teşvik arasından hangilerinin işletmenize uygulanabilir
            olduğunu, hangi kombinasyonun en yüksek tasarrufu sağladığını ve
            doğru kanun kodlarının nasıl bildirileceğini tek tek tespit etmek
            zaman alıcı ve teknik bir iştir. Bordro yönetimi, SGK teşvik
            analizi ve tüm sosyal güvenlik mevzuatı danışmanlığınızı, ayrı
            bir yerel muhasebeci aramanıza gerek kalmadan baştan sona biz
            yürütüyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinize özel tasarruf potansiyelini birlikte hesaplamak için
              bizimle iletişime geçebilirsiniz.
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
              Bir işveren aynı anda birden fazla SGK teşvikinden yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              İşletme düzeyinde evet, farklı çalışanlar için farklı
              teşviklerden yararlanılabilir. Ancak aynı sigortalı için
              genellikle sadece bir teşvik seçilebilir; bazı teşvikler
              (örneğin Ar-Ge personeli teşviki) genel indirimle katmanlı
              çalışırken bazıları (06111 gibi) genel indirimle birlikte
              uygulanamaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              SGK teşvikinden yararlanmak için ayrı bir başvuru formu doldurmak gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel prim indirimi ve asgari ücret desteği gibi bazı
              teşvikler otomatik hesaplanır. Diğerlerinde ise ayrı bir
              &quot;başvuru formu&quot; yerine, Muhtasar ve Prim Hizmet
              Beyannamesi&apos;nde doğru kanun numarasının seçilmesi ve
              (varsa) ilgili belgenin sisteme tanımlanması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Teşvik şartları ihlal edilirse ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Şartın bozulduğu ay için teşvik uygulanmaz; kayıt dışı
              istihdam veya sahte bildirim tespit edilirse yararlanılan
              tutar geriye dönük olarak gecikme cezasıyla birlikte geri
              alınabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              27103/17103 sayılı ilave istihdam teşviki hâlâ geçerli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Yeni işe alımlar için hayır; bu teşvik 31 Aralık 2022&apos;den
              sonra yapılan işe alımları kapsamıyor. Ancak bu tarihten önce
              hak kazanmış ve şartları sağlamaya devam eden mevcut
              yararlanıcılar için ödemeler sürebiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Küçük bir işletme için en yüksek tasarruf sağlayan teşvik hangisi?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu, işletmenin sektörüne (imalat olup olmadığı), çalışan
              profiline (genç/kadın/engelli/mesleki belge sahibi olup
              olmadığı) ve yatırım/Ar-Ge faaliyeti olup olmadığına göre
              değişir. Genel prim indirimi neredeyse tüm işverenler için
              geçerliyken, 06111 ve engelli teşviki gibi teşvikler belirli
              profildeki çalışanlar için çok daha yüksek bir tasarruf
              sağlar. Şirketinize özel en avantajlı kombinasyonu görmek için
              bordro verileriniz üzerinden hesaplama yapılması gerekir.
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
          2026 itibarıyla yürürlükte olan 15 SGK teşviki, doğru
          kullanıldığında işverenler için önemli bir maliyet avantajına
          dönüşüyor; ancak her teşvikin kendine özgü şartları, süresi ve
          diğer teşviklerle uyumluluk kuralları var. Bu karmaşıklık, çoğu
          işletmenin hak kazandığı teşviklerin bir kısmını fark etmeden
          kaçırmasına yol açıyor. Şirketinizin çalışan profilini, sektörünü
          ve varsa yatırım/Ar-Ge faaliyetlerini bir bütün olarak
          değerlendirerek hangi teşviklerden ne ölçüde yararlanabileceğinizi
          tespit etmek, düzenli ve doğru bir bordro yönetiminin ayrılmaz bir
          parçasıdır.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/6111-sayili-kanun-genc-kadin-istihdam-tesviki-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SGK TEŞVİKLERİ • İSTİHDAM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">6111 Sayılı Kanun İstihdam Teşviki 2026</h3>
          </Link>
          <Link
            href="/blog/istihdami-koruma-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • İSTİHDAM DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İstihdamı Koruma Destek Programı 2026</h3>
          </Link>
          <Link
            href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">AR-GE MERKEZİ • 5746 SAYILI KANUN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ar-Ge Merkezi Nedir? 2026 Şartları ve Avantajları</h3>
          </Link>
          <Link
            href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YATIRIM TEŞVİKLERİ • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgesi Nedir? 2026 Rehberi</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
