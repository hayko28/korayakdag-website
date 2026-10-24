import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Madrid Protokolü ile Yurt Dışında Marka Tescili Nasıl Yapılır? | Koray Akdağ",
  description: "TÜRKPATENT üzerinden WIPO'ya yapılan Madrid Protokolü başvurusuyla tek seferde 132 ülkede marka koruması almanın süreci, maliyet kalemleri ve Ticaret Bakanlığı'nın %50 oranında, yıllık 750.000 TL'ye kadar yurt dışı marka tescil desteğiyle güncel rehber.",
  keywords: [
    "madrid protokolü marka tescili",
    "yurt dışında marka tescili nasıl yapılır",
    "uluslararası marka tescili maliyeti",
    "yurt dışı marka tescil desteği",
    "türkpatent madrid sistemi",
    "madrid protokolü nedir",
    "marka tescili yurt dışı ülkeler",
    "wipo marka başvurusu",
  ],
  alternates: {
    canonical: "/blog/madrid-protokolu-yurt-disinda-marka-tescili-nasil-yapilir",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Madrid Protokolü ile Yurt Dışında Marka Tescili Nasıl Yapılır? Süreç, Maliyet ve Devlet Desteği"
      description="TÜRKPATENT'teki mevcut marka başvurunuzu veya tescilinizi esas alarak, tek bir uluslararası başvuruyla Madrid Sistemi'ne üye 132 ülkede marka koruması talep edebilirsiniz. Başvuru adımları, WIPO ücret kalemleri, merkezi saldırı riski ve Ticaret Bakanlığı'nın yurt dışı marka tescil desteğiyle kapsamlı rehber."
      category="MARKA VE FİKRİ MÜLKİYET • YURT DIŞI TESCİL • 2026"
      date="Ekim 2026"
      readTime="12 Dakika"
      slug="madrid-protokolu-yurt-disinda-marka-tescili-nasil-yapilir"
      coverImage="https://images.unsplash.com/photo-1728985381714-8660eebcf9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Markanızı Yurt Dışında Tescil Ettirelim, Devlet Desteğinden Birlikte Yararlanalım"
      ctaText="Hangi ülkelerde koruma almanız gerektiğinden Madrid Protokolü başvurunuzun hazırlanmasına, Ticaret Bakanlığı'nın yurt dışı marka tescil desteği başvurusuna kadar süreci tek elden yürütüyoruz. Markanızın yurt dışı tescil stratejisini birlikte planlayalım."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Yurt dışında marka tescili için en pratik yol, WIPO (Dünya Fikri Mülkiyet Teşkilatı) tarafından yönetilen <strong>Madrid Protokolü</strong>&apos;dür; tek bir başvuruyla Madrid Sistemi&apos;ne üye <strong>132 ülkeden</strong> seçtiklerinizde koruma talep edebilirsiniz.</li>
          <li>✔ Başvuru doğrudan WIPO&apos;ya değil, Türkiye&apos;deki menşe ofis olan <strong>TÜRKPATENT üzerinden</strong> yapılır ve TÜRKPATENT&apos;te geçerli bir &quot;esas&quot; marka başvurusu veya tescilinizin bulunması şarttır.</li>
          <li>✔ Maliyet; WIPO&apos;ya ödenen <strong>653 İsviçre Frangı</strong> temel ücret (renkli markalarda 903 CHF) ile seçilen her ülke ve sınıf için ayrıca hesaplanan ek ücretlerden oluşur.</li>
          <li>✔ Seçtiğiniz ülkelerin ofisleri başvurunuzu kendi mevzuatına göre inceler; ret bildirimi için standart süre <strong>12 ay</strong>, bazı ülkelerde <strong>18 aya</strong> kadar uzayabilir.</li>
          <li>✔ İlk 5 yıl, uluslararası tesciliniz Türkiye&apos;deki esas başvurunuza bağımlıdır: esas başvuru reddedilir veya iptal edilirse uluslararası tescil de aynı ölçüde etkilenir (&quot;merkezi saldırı&quot;).</li>
          <li>✔ Ticaret Bakanlığı&apos;nın <strong>Yurt Dışı Marka Tescil Desteği</strong>, yurt dışı tescil giderlerinizin <strong>%50&apos;sini, yıllık en fazla 750.000 TL&apos;ye kadar</strong>, toplamda 4 yıl boyunca karşılıyor; Bakanlığın hedef ülke listesindeyseniz bu oran +20 puan daha artabiliyor.</li>
          <li>✔ Marka yenileme giderleri bu destek kapsamında <strong>değil</strong>; yalnızca ilk tescil ve koruma giderleri destekleniyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Madrid Protokolü Nedir, Neden Tercih Edilir?
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir? Temel Şart
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#maliyet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Maliyet Kalemleri Nelerdir?
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Madrid Protokolü mü, Ülke Ülke Ayrı Başvuru mu?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Karıştırmayın: Madrid Protokolü ile AB Marka Tescili
          </Link>
          <Link href="#merkezi-saldiri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Merkezi Saldırı Riski Nedir?
          </Link>
          <Link href="#destek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Ticaret Bakanlığı Yurt Dışı Marka Tescil Desteği
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
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Madrid Protokolü Nedir, Neden Tercih Edilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İhracata başlayan veya yurt dışı pazarlara açılan bir şirketin
          markası, yalnızca Türkiye&apos;de tescilliyse yurt dışında hukuki
          korumadan yoksun kalır. Her ülkede ayrı ayrı yerel vekil tutup
          ayrı başvuru yapmak hem maliyetli hem de yönetimi zor bir süreçtir.
          Dünya Fikri Mülkiyet Teşkilatı (WIPO) tarafından yönetilen
          <strong> Madrid Sistemi</strong> (Madrid Protokolü), bu sorunu
          çözmek için tasarlanmış uluslararası bir mekanizmadır: tek bir
          başvuru, tek bir dil (İngilizce, Fransızca veya İspanyolca), tek
          bir ücret ödemesiyle, seçtiğiniz ülkelerin tamamında marka
          koruması talep edebilirsiniz.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          WIPO&apos;nun en güncel Madrid Yıllık İncelemesi&apos;ne göre,
          31 Aralık 2025 itibarıyla Madrid Sistemi&apos;ne <strong>116
          taraf ülke/bölge</strong> üye ve bu üyelik <strong>132
          ülkeyi</strong> kapsıyor; yani markanızı tek başvuruyla
          dünyanın büyük bölümünde koruma altına alma imkânınız var.
          Türkiye, Madrid Protokolü&apos;ne 1999&apos;dan bu yana taraf.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Madrid Sistemi, markanızı &quot;tek bir dünya markası&quot;
            haline getirmez. Her seçtiğiniz ülkenin fikri mülkiyet ofisi,
            başvurunuzu kendi ulusal mevzuatına göre ayrı ayrı inceler ve
            reddetme hakkını saklı tutar. Sistemin sağladığı kolaylık,
            başvuru ve yönetim sürecinin merkezileşmesidir; nihai karar
            hâlâ her ülkenin kendi ofisine aittir.
          </p>
        </div>
      </section>

      {/* 2. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir? Temel Şart
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Madrid Protokolü üzerinden uluslararası başvuru yapabilmek için
          iki temel şart var:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🇹🇷</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Türkiye ile Bağlantı
            </h3>
            <p className="text-gray-700">
              Başvuru sahibinin Türkiye&apos;de yerleşik olması, Türkiye
              uyruklu olması veya Türkiye&apos;de gerçek ve etkin bir
              sınai/ticari işletmesinin bulunması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📋</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Esas Başvuru veya Tescil
            </h3>
            <p className="text-gray-700">
              TÜRKPATENT nezdinde markanız için ya bir başvurunuz ya da
              tescil belgeniz bulunmalı. Uluslararası başvurunuzun kapsamı
              (marka örneği, mal/hizmet sınıfları), bu esas başvuru veya
              tescille birebir aynı veya onun bir alt kümesi olmak zorunda.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Adım Adım Başvuru Süreci
        </h2>
        <div className="space-y-6">
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">1</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Esas Marka Netleştirilir</h3>
              <p className="text-gray-700">TÜRKPATENT&apos;teki marka başvurunuz veya tescil belgeniz, uluslararası başvuruya esas teşkil edecek şekilde kontrol edilir.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">2</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Hedef Ülkeler ve Sınıflar Belirlenir</h3>
              <p className="text-gray-700">Markanızı hangi ülkelerde ve Nice Sınıflandırması&apos;na göre hangi mal/hizmet sınıflarında korumak istediğinize karar verilir.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">3</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">MM2 Formu Hazırlanıp TÜRKPATENT&apos;e Sunulur</h3>
              <p className="text-gray-700">Başvuru, TÜRKPATENT&apos;in EPATS sistemi üzerinden MM2 formu yüklenerek ya da WIPO&apos;nun Madrid e-filing ekranı üzerinden hazırlanır; aynı başvuru iki kanaldan birden sunulamaz.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">4</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">TÜRKPATENT Şekli İnceleme Yapar</h3>
              <p className="text-gray-700">TÜRKPATENT, uluslararası başvurunun esas başvuru/tescille uyumunu kontrol eder ve başvuruyu WIPO&apos;ya iletir.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">5</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">WIPO Uluslararası Sicile Kaydeder</h3>
              <p className="text-gray-700">WIPO şekli inceleme sonrası markayı Uluslararası Sicile kaydeder ve seçtiğiniz ülkelerin fikri mülkiyet ofislerine bildirir.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">6</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Ulusal Ofisler Esastan İnceler</h3>
              <p className="text-gray-700">Her ülkenin ofisi, kendi mevzuatına göre esastan inceleme yapar; süresi içinde ret bildirmezse marka o ülkede de korunmuş sayılır.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Başvuru aşamasında gözden kaçan
            en kritik nokta, seçilen ülke/sınıf kapsamının esas başvuruyla
            birebir örtüşmesi gerekliliği. Esas başvurudaki mal/hizmet
            listesinden daha geniş bir kapsamla uluslararası başvuru
            yapılamaz; bu yüzden hangi ülkelerde hangi ürün/hizmet
            gruplarında koruma isteneceğinin, esas başvuru hazırlanırken
            baştan düşünülmesi, sonradan kapsam genişletme ihtiyacından
            doğacak ek başvuru maliyetini önlüyor.
          </p>
        </div>
      </section>

      {/* 4. MALİYET */}
      <section id="maliyet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Maliyet Kalemleri Nelerdir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Madrid Protokolü başvurusunun maliyeti, tek bir sabit rakam
          değil; seçtiğiniz ülke sayısına, sınıf sayısına ve markanızın
          renkli olup olmadığına göre değişen bir toplamdır:
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
                <td className="p-5 font-semibold">WIPO temel ücreti (siyah-beyaz marka)</td>
                <td className="p-5">653 İsviçre Frangı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">WIPO temel ücreti (renkli marka)</td>
                <td className="p-5">903 İsviçre Frangı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ek sınıf ücreti</td>
                <td className="p-5">Sınıf sayısına göre değişir</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Ülke bazlı ücret (standart veya bireysel)</td>
                <td className="p-5">Seçilen her ülkeye göre ayrı hesaplanır</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu tabloya ek olarak, seçtiğiniz bazı ülkeler (örneğin ABD,
          İngiltere, Avustralya gibi) WIPO&apos;nun standart ücretleri
          yerine kendi belirledikleri &quot;bireysel ücret&quot;i talep
          eder; bu ücretler ülkeden ülkeye önemli ölçüde farklılaşabilir.
          Kesin toplam maliyeti öğrenmenin tek güvenilir yolu, başvuru
          öncesinde WIPO&apos;nun resmi ücret hesaplayıcısını
          kullanmaktır; zira bu ücretler yıl içinde güncellenebiliyor.
        </p>
      </section>

      {/* 5. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Madrid Protokolü mü, Ülke Ülke Ayrı Başvuru mu?
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">Madrid Protokolü</th>
                <th className="p-5">Ülke Ülke Ayrı Başvuru</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Başvuru sayısı</td>
                <td className="p-5">Tek başvuru, tek dil</td>
                <td className="p-5">Her ülke için ayrı başvuru, ayrı dil</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yerel vekil ihtiyacı</td>
                <td className="p-5">Başvuru aşamasında gerekmez</td>
                <td className="p-5">Genellikle her ülkede ayrı vekil gerekir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yönetim (yenileme, devir, adres değişikliği)</td>
                <td className="p-5">WIPO üzerinden tek işlemle merkezi</td>
                <td className="p-5">Her ülkede ayrı ayrı yürütülür</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Esas markaya bağımlılık</td>
                <td className="p-5">İlk 5 yıl merkezi saldırı riski var</td>
                <td className="p-5">Her tescil birbirinden bağımsız</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karıştırmayın: Madrid Protokolü ile AB Marka Tescili
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ İki Farklı Sistem, İki Farklı Mantık
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Madrid Protokolü (WIPO)
              </p>
              <p className="text-gray-700">
                Seçtiğiniz her ülke için ayrı ayrı koruma talep ettiğiniz,
                her ülkenin kendi ofisinin incelemesinden geçtiği ve
                ülkelerin birbirinden bağımsız sonuçlanabildiği bir
                &quot;şemsiye&quot; sistemdir. İsterseniz 3 ülke, isterseniz
                40 ülke seçebilirsiniz; Avrupa Birliği de Madrid
                Sistemi&apos;nde tek bir &quot;üye bölge&quot; olarak
                seçilebilir.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                AB Marka Tescili (EUTM/EUIPO)
              </p>
              <p className="text-gray-700">
                EUIPO üzerinden yapılan, Avrupa Birliği&apos;ne üye
                ülkelerin <strong>tamamını tek ve bölünmez bir pazar</strong>{" "}
                olarak kapsayan bağımsız bir bölgesel sistemdir. Madrid
                Protokolü&apos;nden ayrı işler; AB markası tek başına
                reddedilirse tüm AB&apos;de etkisini kaybeder, parça parça
                bazı ülkelerde geçerli kalamaz.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Pratikte sık yapılan hata, sadece birkaç AB ülkesinde faaliyet
            planlayan bir şirketin doğrudan AB markası başvurusuna
            yönelmesi. Hedef pazar sınırlı sayıda ülkeyse, Madrid Protokolü
            üzerinden o ülkeleri tek tek seçmek genellikle hem daha ucuz
            hem de daha esnek bir stratejidir; AB&apos;nin tamamında veya
            büyük çoğunluğunda faaliyet planlanıyorsa AB markası daha
            mantıklı olabilir.
          </p>
        </div>
      </section>

      {/* 7. MERKEZİ SALDIRI */}
      <section id="merkezi-saldiri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Merkezi Saldırı Riski Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Madrid Sistemi&apos;nin en önemli, ancak çoğu zaman gözden kaçan
          özelliği şudur: uluslararası tesciliniz, tescil tarihinden
          itibaren <strong>ilk 5 yıl boyunca</strong> Türkiye&apos;deki
          esas başvuru veya tescile bağımlıdır. Bu süre içinde esas
          başvurunuz TÜRKPATENT tarafından reddedilir, bir itiraz
          sonucunda hükümsüz kılınır veya tamamen geri çekilirse,
          uluslararası tesciliniz de aynı kapsamda etkisini kaybeder.
          Fikri mülkiyet literatüründe bu duruma &quot;merkezi saldırı&quot;
          (central attack) deniyor.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu riske karşı bir çıkış yolu var: esas başvurunuz 5 yıl
            içinde iptal olursa, uluslararası tescilinizin kapsadığı
            ülkelerdeki korumayı, iptal tarihinden itibaren 3 ay içinde
            başvurarak doğrudan o ülkelerde ulusal başvurulara
            &quot;dönüştürebilirsiniz&quot;. Bu dönüşüm işlemi, ilk
            başvuru tarihinizi korumanızı sağlar, ancak ek işlem ve ücret
            gerektirir; bu yüzden esas markanızın Türkiye&apos;de sağlam
            bir zeminde olması, uluslararası başvurudan önce netleştirilmesi
            gereken bir öncelik.
          </p>
        </div>
      </section>

      {/* 8. DEVLET DESTEĞİ */}
      <section id="destek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Ticaret Bakanlığı Yurt Dışı Marka Tescil Desteği
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          5973 sayılı İhracat Destekleri Hakkında Karar&apos;ın marka
          tescili giderlerine ilişkin maddesi kapsamında, Ticaret
          Bakanlığı yurt içi marka tescil belgesine sahip şirketlerin
          markalarını yurt dışında tescil ettirme ve koruma giderlerini
          destekliyor. Uygulamaya ilişkin usul ve esaslar, 30 Haziran 2025
          tarihinde güncellenen Yurt Dışı Marka Tescil Desteğine İlişkin
          Genelge ile belirleniyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Değer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Destek oranı</td>
                <td className="p-5">%50</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yıllık üst limit</td>
                <td className="p-5">750.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Destek süresi</td>
                <td className="p-5">En fazla 4 yıl</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hedef ülkelerde ilave oran</td>
                <td className="p-5">+20 puan</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Hedef ülke + hedef sektörde ilave oran</td>
                <td className="p-5">+5 puan</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          8.1. Desteklenen ve Desteklenmeyen Giderler
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h4 className="mb-4 text-xl font-bold text-green-700">✅ Desteklenir</h4>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
              <li>Yurt dışında tescile ilişkin marka/patent bürosu hizmet ve danışmanlık giderleri</li>
              <li>Markanın o ülkede başka bir şirket adına tescilli olup olmadığına dair araştırma, inceleme giderleri</li>
              <li>Zorunlu avukatlık giderleri</li>
              <li>Yurt dışında tescilli markanın korunmasına ilişkin avukatlık giderleri</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h4 className="mb-4 text-xl font-bold text-red-700">❌ Desteklenmez</h4>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-600">
              <li>Marka yenileme giderleri</li>
              <li>Türk Malı imajına zarar verecek şekilde yanlış menşe göstergesi (ülke/şehir ismi) içeren marka başvurularının giderleri</li>
              <li>Yurt içi tescil ile yurt dışı başvurunun farklı şirket adına olduğu durumlar</li>
              <li>Harcamayı yapan şirketle faturayı düzenleyen tarafın &quot;ilişkili kişi&quot; olduğu durumlar</li>
            </ul>
          </div>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          8.2. Başvuru Süreci
        </h3>
        <p className="leading-8 text-gray-700">
          Destek başvurusu, ödeme belgesi tarihinden itibaren <strong>6
          ay içinde</strong>, şirketin üyesi olduğu İhracatçı Birlikleri
          Genel Sekreterliği&apos;ne (incelemeci kuruluş) Destek Yönetim
          Sistemi (DYS) üzerinden yapılır. Yurt dışı tescil başvurusunun
          yapılmış olması desteklenebilmek için yeterli; ödemenin banka
          kanalıyla ve şirket hesabından yapılmış olması gerekiyor.
          Yurt içi tescil henüz tamamlanmamışsa, 6 aylık başvuru süresi
          içinde tamamlanması şartıyla yine destekten yararlanılabiliyor.
        </p>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Esas marka başvurunuzun Türkiye&apos;de sağlam bir zeminde olduğundan emin olun; merkezi saldırı riski ilk 5 yıl geçerli
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Uluslararası başvuru kapsamını (ülke, sınıf) esas başvurunun kapsamını aşmayacak şekilde planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt içi tescilin yurt dışı başvurudan önce gelmiş olması, devlet desteği için zorunlu bir şart
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Marka yenileme giderlerini devlet desteği kapsamına almayın; bu kalem genelgeyle açıkça hariç tutuldu
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Destek başvurusunu ödeme belgesi tarihinden itibaren 6 aylık süreyi kaçırmadan yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Güncel ücretleri her başvuru öncesinde WIPO&apos;nun resmi ücret hesaplayıcısından teyit edin
          </div>
        </div>
      </section>

      {/* 10. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı aşağıdaki birincil kaynaklara dayanmaktadır. Başvuru
          öncesinde güncel ücret, oran ve şartları doğrudan bu kaynaklardan
          teyit etmenizi öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <a href="https://www.wipo.int/madrid/en/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              WIPO Madrid Sistemi resmî sayfası
            </a>
          </li>
          <li>
            <a href="https://www.turkpatent.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              TÜRKPATENT resmî internet sitesi
            </a>{" "}
            (EPATS üzerinden Madrid Sistemi başvuru rehberi)
          </li>
          <li>
            <a href="https://ticaret.gov.tr/data/63341fab13b8769ec0647ed5/30.06.2025 Yurtdışı Marka Tescil Desteğine İlişkin Genelge.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ticaret Bakanlığı &quot;Yurt Dışı Marka Tescil Desteğine İlişkin Genelge&quot; (30.06.2025 güncel sürüm)
            </a>
          </li>
          <li>
            <a href="https://ticaret.gov.tr/destekler/ihracat-destekleri" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ticaret Bakanlığı İhracat Destekleri sayfası (5973 sayılı Karar)
            </a>
          </li>
        </ul>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Madrid Protokolü ile marka tescili kaç ülkeyi kapsıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              WIPO&apos;nun güncel verilerine göre 31 Aralık 2025 itibarıyla
              116 taraf ülke/bölgenin üyeliği 132 ülkeyi kapsıyor. Tek bir
              uluslararası başvuruyla bu ülkelerden seçtiklerinizde koruma
              talep edebilirsiniz; ancak her ülkenin ofisi başvurunuzu kendi
              mevzuatına göre ayrı ayrı inceler.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Önceden marka tescilim yoksa Madrid Protokolü&apos;nden yararlanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Madrid Sistemi&apos;ne başvurabilmek için TÜRKPATENT
              nezdinde geçerli bir esas marka başvurunuzun veya tescil
              belgenizin bulunması zorunlu; uluslararası başvuru bu esas
              başvuruyu referans alır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Merkezi saldırı nedir, markam risk altında mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Uluslararası tesciliniz, ilk 5 yıl boyunca Türkiye&apos;deki
              esas başvuru veya tescile bağımlıdır. Bu süre içinde esas
              başvuru reddedilir veya iptal edilirse uluslararası tescil de
              aynı kapsamda etkisini kaybeder. Bu riske karşı, iptal
              tarihinden itibaren 3 ay içinde ulusal başvurulara dönüşüm
              hakkınız bulunuyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yurt dışı marka tescil desteğinden kimler yararlanabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Yurt içinde marka tescil belgesine sahip olan ve bu markayı
              kendi adına yurt dışında tescil ettiren veya korumasını
              sürdüren tüm şirketler, giderlerinin %50&apos;sini, yıllık en
              fazla 750.000 TL&apos;ye kadar ve toplamda 4 yıl boyunca
              destek olarak alabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Marka yenileme giderleri devlet desteği kapsamında mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Yurt Dışı Marka Tescil Desteğine İlişkin Genelge, marka
              yenileme giderlerini açıkça destek kapsamı dışında tutuyor;
              yalnızca ilk tescil ve koruma (avukatlık, araştırma, inceleme)
              giderleri destekleniyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Madrid Protokolü ile AB marka tescili aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Madrid Protokolü, seçtiğiniz her ülkede ayrı ayrı
              inceleme ve sonuçla işleyen bir şemsiye sistemdir. AB marka
              tescili (EUTM) ise AB&apos;ye üye tüm ülkeleri tek ve bölünmez
              bir pazar olarak kapsayan bağımsız bir bölgesel sistem; AB
              markası reddedilirse koruma tüm AB&apos;de birden etkisini
              kaybeder.
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
          Madrid Protokolü, yurt dışı pazarlara açılan bir şirketin
          markasını hızlı, merkezi ve görece düşük maliyetli şekilde
          koruma altına almasını sağlıyor. Ancak sistemin kolaylığı, esas
          markanın Türkiye&apos;de sağlam bir zeminde olması ve ülke/sınıf
          kapsamının doğru planlanmasıyla birlikte anlam kazanıyor. Üstelik
          bu sürecin maliyetinin yarısını, yıllık 750.000 TL&apos;ye kadar
          Ticaret Bakanlığı&apos;ndan geri alabiliyorsunuz; hedef ülke
          listesindeyseniz bu oran daha da yükseliyor. Markanızı yurt
          dışında tescil ettirmeyi planlıyorsanız, hem başvuru stratejisini
          hem de destek başvurusunu baştan birlikte kurgulamak, hem zaman
          hem maliyet açısından fark yaratıyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Markanızın hangi ülkelerde tescillenmesi gerektiğinden Madrid
          Protokolü başvurunuzun hazırlanmasına, Ticaret Bakanlığı&apos;nın
          yurt dışı marka tescil desteği başvurusuna kadar tüm süreci
          Koray Akdağ / Sistem Global Danışmanlık olarak tek elden
          yürütüyoruz.{" "}
          <Link href="/#contact" className="text-orange-600 underline">
            Markanızın yurt dışı tescil stratejisini birlikte planlayalım.
          </Link>
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
            <div className="mb-2 text-sm font-semibold text-orange-600">MARKA VE PATENT • KOBİ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Marka Tescili ve Patent Başvurusunun KOBİ&apos;ler İçin Önemi</h3>
          </Link>
          <Link
            href="/blog/yurt-disinda-marka-sirket-alim-destegi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TİCARET BAKANLIĞI • DEVLET DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yurt Dışında Marka Satın Alırsam Devlet Desteği Alabilir miyim?</h3>
          </Link>
          <Link
            href="/blog/turquality-programi-nedir-sartlari-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TURQUALITY • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TURQUALITY Programı Nedir? Şartları ve Destekleri</h3>
          </Link>
          <Link
            href="/blog/e-ihracat-amazon-etsy-trendyol-global-satisa-nasil-baslanir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">E-İHRACAT • YURT DIŞI SATIŞ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">E-İhracat: Amazon, Etsy, Trendyol Global Satışa Nasıl Başlanır?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Madrid Protokolü ile marka tescili kaç ülkeyi kapsıyor?","acceptedAnswer":{"@type":"Answer","text":"WIPO'nun güncel verilerine göre 31 Aralık 2025 itibarıyla 116 taraf ülke/bölgenin üyeliği 132 ülkeyi kapsıyor. Tek bir uluslararası başvuruyla bu ülkelerden seçtiklerinizde koruma talep edebilirsiniz; ancak her ülkenin ofisi başvurunuzu kendi mevzuatına göre ayrı ayrı inceler."}},{"@type":"Question","name":"Önceden marka tescilim yoksa Madrid Protokolü'nden yararlanabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Madrid Sistemi'ne başvurabilmek için TÜRKPATENT nezdinde geçerli bir esas marka başvurunuzun veya tescil belgenizin bulunması zorunlu; uluslararası başvuru bu esas başvuruyu referans alır."}},{"@type":"Question","name":"Merkezi saldırı nedir, markam risk altında mı?","acceptedAnswer":{"@type":"Answer","text":"Uluslararası tesciliniz, ilk 5 yıl boyunca Türkiye'deki esas başvuru veya tescile bağımlıdır. Bu süre içinde esas başvuru reddedilir veya iptal edilirse uluslararası tescil de aynı kapsamda etkisini kaybeder. Bu riske karşı, iptal tarihinden itibaren 3 ay içinde ulusal başvurulara dönüşüm hakkınız bulunuyor."}},{"@type":"Question","name":"Yurt dışı marka tescil desteğinden kimler yararlanabilir?","acceptedAnswer":{"@type":"Answer","text":"Yurt içinde marka tescil belgesine sahip olan ve bu markayı kendi adına yurt dışında tescil ettiren veya korumasını sürdüren tüm şirketler, giderlerinin %50'sini, yıllık en fazla 750.000 TL'ye kadar ve toplamda 4 yıl boyunca destek olarak alabiliyor."}},{"@type":"Question","name":"Marka yenileme giderleri devlet desteği kapsamında mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Yurt Dışı Marka Tescil Desteğine İlişkin Genelge, marka yenileme giderlerini açıkça destek kapsamı dışında tutuyor; yalnızca ilk tescil ve koruma (avukatlık, araştırma, inceleme) giderleri destekleniyor."}},{"@type":"Question","name":"Madrid Protokolü ile AB marka tescili aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Madrid Protokolü, seçtiğiniz her ülkede ayrı ayrı inceleme ve sonuçla işleyen bir şemsiye sistemdir. AB marka tescili (EUTM) ise AB'ye üye tüm ülkeleri tek ve bölünmez bir pazar olarak kapsayan bağımsız bir bölgesel sistem; AB markası reddedilirse koruma tüm AB'de birden etkisini kaybeder."}}]}) }}
      />
    </BlogLayout>
  );
}
