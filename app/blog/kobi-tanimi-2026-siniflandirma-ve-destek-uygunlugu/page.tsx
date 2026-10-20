import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOBİ Tanımı 2026: Mikro, Küçük, Orta Ölçekli İşletme Sınırları | Koray Akdağ",
  description:
    "Yıllık çalışan sayısı 250'den az ve ciro veya bilançosu 1 milyar TL'yi aşmayan işletmeler KOBİ sayılıyor. Mikro, küçük ve orta ölçekli işletme sınırları, bağlı/ortak işletme hesabı, KOBİ niteliğinin kaybı ve KOSGEB/TÜBİTAK destek uygunluğuna etkisiyle 2026 güncel rehber.",
  keywords: [
    "kobi tanımı 2026",
    "kobi sınırları",
    "mikro küçük orta ölçekli işletme",
    "kobi sınıflandırması",
    "kobi niteliği kaybı",
    "kosgeb kobi tanımı",
    "kobi bilgi beyannamesi",
    "küçük ve orta büyüklükteki işletmeler yönetmeliği",
    "bağlı işletme ortak işletme kobi",
  ],
  alternates: {
    canonical: "/blog/kobi-tanimi-2026-siniflandirma-ve-destek-uygunlugu",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İşletmeniz Hâlâ KOBİ Sayılıyor mu? 2026 Güncel KOBİ Tanımı, Sınıflandırma ve Destek Bağlantısı"
      description="Yıllık çalışan sayısı 250'den az ve yıllık net satış hasılatı veya mali bilançosundan herhangi biri 1 milyar TL'yi aşmayan işletmeler KOBİ sayılıyor. Mikro, küçük ve orta ölçekli işletme sınırları, bağlı/ortak işletme hesabının gözden kaçan etkisi, KOBİ niteliğinin ne zaman kaybedildiği ve sınıfınızın KOSGEB/TÜBİTAK destek başvurularını nasıl etkilediğiyle güncel, uygulamaya dönük rehber."
      category="KOBİ TANIMI • DEVLET DESTEKLERİ • 2026"
      date="Ekim 2026"
      readTime="12 Dakika"
      slug="kobi-tanimi-2026-siniflandirma-ve-destek-uygunlugu"
      coverImage="https://images.unsplash.com/photo-1767739791243-af1facf4b87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="İşletmenizin Güncel KOBİ Sınıfını ve Destek Uygunluğunu Birlikte Netleştirelim"
      ctaText="Çalışan sayınızdan ciro ve bilançonuza, varsa bağlı/ortak işletme ilişkinize kadar işletmenizin gerçek KOBİ sınıfını belirler, bu sınıfa göre hangi KOSGEB ve TÜBİTAK programlarına uygun olduğunuzu ve başvuru sürecini baştan sona birlikte yürütürüz."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Kaç çalışanınız olursa artık KOBİ sayılmazsınız? Cironuz hangi
        sınırı geçerse KOSGEB ve TÜBİTAK destekleri kapanır? Bu soru,
        özellikle son birkaç yıldır hızlı büyüyen işletmelerin önüne
        giderek daha sık çıkıyor. Çünkü KOBİ tanımı sabit bir çizgi
        değil; 2023&apos;te ve 2025&apos;te iki kez değişen, resmi bir
        yönetmelikle belirlenen, çalışan sayısı ile ciro/bilanço
        kriterini birlikte kullanan teknik bir hesaplama. Bu yazıda
        güncel sınırları, mikro/küçük/orta ayrımını, en çok gözden kaçan
        bağlı işletme kuralını ve sınıfınızın hangi destekleri
        etkilediğini netleştiriyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Güncel KOBİ tanımı: yıllık çalışan sayısı <strong>250&apos;den
            az</strong> ve yıllık net satış hasılatı veya mali
            bilançosundan herhangi biri <strong>1 milyar TL&apos;yi
            aşmayan</strong> işletmeler.
          </li>
          <li>
            ✔ Bu üst sınır 7 Ağustos 2025&apos;te yürürlüğe giren 10182
            sayılı Cumhurbaşkanı Kararı ile 500 milyon TL&apos;den 1 milyar
            TL&apos;ye yükseltildi ve 2026&apos;da hâlâ geçerli.
          </li>
          <li>
            ✔ KOBİ içinde üç alt sınıf var: mikro (10 kişiden az, 10
            milyon TL), küçük (50 kişiden az, 100 milyon TL) ve orta
            büyüklükte işletme (250 kişiden az, 1 milyar TL).
          </li>
          <li>
            ✔ Sadece kendi verileriniz değil; <strong>ortak veya bağlı
            olduğunuz işletmelerin verileri</strong> de belirli oranlarda
            hesaba katılabilir.
          </li>
          <li>
            ✔ KOBİ niteliğini kaybetmek için bir kriterin
            <strong> üst üste iki hesap dönemi</strong> aşılmış olması
            gerekir; tek yıllık bir sıçrama otomatik olarak sizi KOBİ
            olmaktan çıkarmaz.
          </li>
          <li>
            ✔ KOSGEB ve TÜBİTAK başta olmak üzere hemen hemen tüm devlet
            desteklerinin ilk uygunluk filtresi bu sınıflandırmaya
            dayanır.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#tanim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Güncel KOBİ Tanımı Nedir?
          </Link>
          <Link href="#siniflandirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Mikro, Küçük ve Orta Ölçekli İşletme Sınırları
          </Link>
          <Link href="#calisan-sayisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Çalışan Sayısı Nasıl Hesaplanır?
          </Link>
          <Link href="#baglantili-isletmeler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Bağımsız, Ortak ve Bağlı İşletme Ayrımı
          </Link>
          <Link href="#nitelik-kaybi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. KOBİ Niteliğini Kazanma ve Kaybetme
          </Link>
          <Link href="#desteklere-etkisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Sınıfınız Hangi Destekleri Etkiler?
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
        </div>
      </div>

      {/* 1. TANIM */}
      <section id="tanim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Güncel KOBİ Tanımı Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de KOBİ tanımı tek bir kanun maddesinde değil,
          doğrudan bu amaçla hazırlanmış <strong>Küçük ve Orta
          Büyüklükteki İşletmeler Yönetmeliği</strong>&apos;nde (24/5/2023
          tarihli ve 7297 sayılı Cumhurbaşkanı Kararı, 25 Mayıs 2023
          tarihli ve 32201 sayılı Resmî Gazete) düzenleniyor. Yönetmeliğin
          4. maddesine göre KOBİ, yıllık çalışan sayısı 250&apos;den az
          olan ve yıllık net satış hasılatı veya mali bilançosundan
          herhangi biri belirlenen üst sınırı aşmayan işletme olarak
          tanımlanıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bu üst sınır sabit değil. Yönetmeliğin ilk halinde 500 milyon
          TL olan sınır, 7 Ağustos 2025 tarihli ve 32979 sayılı Resmî
          Gazete&apos;de yayımlanan 10182 sayılı Cumhurbaşkanı Kararı ile
          <strong> 1 milyar TL&apos;ye</strong> yükseltildi. Değişiklik
          yayımı tarihinde yürürlüğe girdi ve bugün itibarıyla hâlâ
          geçerli olan güncel sınır budur. Çalışan sayısı kriteri
          (250&apos;den az) bu değişiklikten etkilenmedi, aynı kaldı.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratikte anlamı şu: 2025 Ağustos öncesinde cirosu 600 milyon
            TL olduğu için &quot;büyük işletme&quot; sayılan ve bu yüzden
            bazı KOBİ&apos;ye özel desteklerden yararlanamayan bir şirket,
            yeni sınırla birlikte tekrar KOBİ kapsamına girmiş olabilir.
            Son iki yıl içinde sınır bölgesinde kalan işletmelerin
            durumunu yeniden değerlendirmesi bu yüzden önemli.
          </p>
        </div>
      </section>

      {/* 2. SINIFLANDIRMA */}
      <section id="siniflandirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Mikro, Küçük ve Orta Ölçekli İşletme Sınırları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOBİ tek bir kategori değil; yönetmeliğin 5. maddesi KOBİ&apos;yi
          üç alt sınıfa ayırıyor. Çalışan sayısı ve ciro/bilanço
          kriterlerinden ikisinin birlikte değerlendirildiği tablo şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Sınıf</th>
                <th className="p-5">Yıllık Çalışan Sayısı</th>
                <th className="p-5">Net Satış Hasılatı veya Mali Bilanço</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mikro İşletme</td>
                <td className="p-5">10 kişiden az</td>
                <td className="p-5">Herhangi biri 10 milyon TL&apos;yi aşmıyor</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Küçük İşletme</td>
                <td className="p-5">50 kişiden az</td>
                <td className="p-5">Herhangi biri 100 milyon TL&apos;yi aşmıyor</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Orta Büyüklükteki İşletme</td>
                <td className="p-5">250 kişiden az</td>
                <td className="p-5">Herhangi biri 1 milyar TL&apos;yi aşmıyor (eski sınır: 500 milyon TL)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Buradaki &quot;net satış hasılatı veya mali bilançosundan
          herhangi biri&quot; ifadesi sık yanlış okunuyor. Yönetmelik,
          cironuz ile bilançonuzdan yalnızca birinin sınırın altında
          kalmasını yeterli görüyor; ikisinin birden sınır altında olması
          şart değil. Buna karşılık çalışan sayısı kriteri ayrı ve
          bağımsız bir şarttır; sınıfa girmek için hem çalışan sayısı
          sınırının hem de ciro/bilanço sınırlarından en az birinin
          birlikte sağlanması gerekir.
        </p>
      </section>

      {/* 3. ÇALIŞAN SAYISI */}
      <section id="calisan-sayisi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Çalışan Sayısı Nasıl Hesaplanır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Burada da sık karşılaşılan bir yanlış anlama var: &quot;çalışan
          sayısı&quot; bordroda o an kayıtlı kişi sayısı değil, yönetmeliğin
          tanımladığı <strong>Yıllık İş Birimi (YİB)</strong> kavramıdır.
          YİB, işletmede bir takvim yılı içinde hizmet akdiyle
          çalıştırılanların prim gün sayıları toplamının 360&apos;a
          bölünmesiyle bulunuyor. Yani yıl içinde kısmi süreli, mevsimlik
          veya dönemsel olarak çalışan kişiler tam zamanlı eşdeğerine
          oranlı şekilde hesaba katılıyor; basit bir &quot;şu an kaç
          kişimiz var&quot; sayımı yanıltıcı sonuç verebilir.
        </p>
        <p className="leading-8 text-gray-700">
          Yönetmeliğin 11. maddesine göre sadece hizmet akdiyle
          çalıştırılanlar bu hesaba dahil ediliyor; çıraklar ve staj
          yapan öğrenciler çalışan sayısına dahil edilmiyor. Bilanço
          esasına göre defter tutmayan işletmelerde ise sınıflandırma
          sadece çalışan sayısına bakılarak yapılıyor.
        </p>
      </section>

      {/* 4. BAĞLANTILI İŞLETMELER */}
      <section id="baglantili-isletmeler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Bağımsız, Ortak ve Bağlı İşletme Ayrımı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yönetmeliğin en çok gözden kaçan kısmı burasıdır. KOBİ
          sınıfınız her zaman sadece kendi şirketinizin verileriyle
          belirlenmez; başka işletmelerle olan sermaye ilişkiniz de
          devreye girer. Yönetmelik işletmeleri üçe ayırıyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Tür</th>
                <th className="p-5">Tanım</th>
                <th className="p-5">Hesaplamaya Etkisi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Bağımsız İşletme</td>
                <td className="p-5">Başka bir işletmenin sermayesinin %25&apos;inden azına sahip veya başka bir işletme tarafından %25&apos;inden az oranda sahip olunan işletme</td>
                <td className="p-5">Sadece kendi verileri dikkate alınır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ortak İşletme</td>
                <td className="p-5">Karşılıklı sermaye payı %25 ile %50 arasında (her iki uçtaki oran dahil, %50&apos;yi aşmayan)</td>
                <td className="p-5">Ortak işletmenin verileri ortaklık oranında eklenir</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Bağlı İşletme</td>
                <td className="p-5">Sermayenin çoğunluğuna (%50&apos;den fazla) sahip olunan veya olunulan işletme</td>
                <td className="p-5">Bağlı işletmenin verilerinin tamamı eklenir</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="leading-8 text-gray-700">
            &quot;Benim şirketimin cirosu 50 milyon TL, demek ki küçük
            işletmeyim&quot; demek, grup yapısı olan işletmeler için
            yanıltıcı olabilir. Eğer bu şirketin sermayesinin
            çoğunluğuna başka bir şirket sahipse ya da bu şirket başka
            bir şirketin sermayesinin çoğunluğuna sahipse, bağlı işletme
            kuralı devreye girer ve o diğer şirketin cirosu, bilançosu
            ve çalışan sayısının tamamı sizin verilerinize eklenir.
            Sonuç olarak görünürde küçük işletme olan bir şirket, grup
            verileriyle birlikte hesaplandığında aslında orta ölçekli
            işletme sınırının da üzerinde çıkabilir.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurularda en sık gözden kaçan nokta, İŞLETME BEYANI
            formunun bağlı/ortak işletme bölümünün eksik veya hatalı
            doldurulmasıdır. Holding çatısı altındaki, aynı ortaklar
            tarafından kurulmuş birden fazla şirketi olan veya bir
            yatırım şirketinden pay almış işletmelerin başvuru
            öncesinde sermaye ilişkilerini tek tek gözden geçirip
            konsolide hesaplamayı netleştirmesi gerekir. Aksi halde hem
            yanlış beyan riski doğar hem de destek onaylandıktan sonra
            KOBİ niteliğinin sonradan sorgulanması söz konusu olabilir.
          </p>
        </div>
      </section>

      {/* 5. NİTELİK KAYBI */}
      <section id="nitelik-kaybi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. KOBİ Niteliğini Kazanma ve Kaybetme
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yönetmeliğin 6. maddesi, sınır çizgisinde dalgalanan
          işletmeler için asimetrik ama mantıklı bir kural getiriyor.
          KOBİ niteliği belirlenirken dikkate alınan kriterlerden
          herhangi birini <strong>son iki hesap dönemine ait
          verileriyle aşan</strong> işletmeler KOBİ niteliğini
          kaybediyor. Buna karşılık, son hesap dönemine ait verileriyle
          kriterlerin altına düşen işletmeler KOBİ niteliğini hemen,
          tek yıllık veriyle kazanıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Yani bir yıl olağanüstü bir ciro sıçraması yaşamak tek başına
          sizi KOBİ olmaktan çıkarmaz; sınırın üst üste iki hesap dönemi
          boyunca aşılmış olması gerekir. Ancak düşüş yönünde kural
          tam tersi işler: bir yıl sınırın altına inmeniz, KOBİ
          niteliğini yeniden kazanmanız için yeterlidir.
        </p>
        <p className="leading-8 text-gray-700">
          Sınıflandırmada hangi tarihli verilerin esas alınacağı da
          yönetmelikle netleştirilmiş: kurumlar vergisi mükellefleri
          için ilgili yılın beyanname verme süresinin içinde bulunduğu
          ayın sonu, gelir vergisi mükellefleri için ise kendi beyanname
          verme süresinin içinde bulunduğu ayın sonu esas alınıyor.
        </p>
      </section>

      {/* 6. DESTEKLERE ETKİSİ */}
      <section id="desteklere-etkisi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Sınıfınız Hangi Destekleri Etkiler?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu yönetmelik soyut bir tanım değil; neredeyse her devlet
          desteğinin ilk eşiğidir. KOSGEB&apos;in neredeyse tüm destek
          programlarında (
          <Link href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026" className="text-orange-600 underline">Kapasite Geliştirme Destek Programı</Link>,{" "}
          <Link href="/blog/kosgeb-girisimci-destek-programi-2026" className="text-orange-600 underline">Girişimci Destek Programı</Link>{" "}
          gibi) başvuru sahibinin KOBİ Bilgi Sistemi&apos;nde (KBS) KOBİ
          niteliğini taşıması ön şarttır. TÜBİTAK&apos;ın bazı
          çağrılarında da (örneğin{" "}
          <Link href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026" className="text-orange-600 underline">1501 ve 1507 Ar-Ge Destekleri</Link>{" "}
          dönemsel olarak yalnızca KOBİ&apos;lere açılabiliyor) sınıfınız
          doğrudan başvuru hakkınızı belirliyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Mikro, küçük ve orta ölçek ayrımı da tutarı etkileyebiliyor:
          bazı programlarda destek oranı veya üst limit işletme
          sınıfına göre kademeleniyor, bazılarında ise öncelik puanlaması
          küçük ölçekli işletmeler lehine işliyor. Öte yandan KOBİ
          sınırını aşmak, her destek kapısının kapandığı anlamına da
          gelmiyor; örneğin{" "}
          <Link href="/blog/istihdami-koruma-destek-programi-2026" className="text-orange-600 underline">İstihdamı Koruma Destek Programı</Link>{" "}
          2026&apos;dan itibaren büyük işletmeleri de kapsama aldı, ancak
          kredi limiti ve oranlar KOBİ&apos;ler ile büyük işletmeler için
          ayrı formüllerle hesaplanıyor.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Başvuru öncesi kontrol:</strong> Her başvurudan önce
              KBS&apos;deki KOBİ Bilgi Beyannamenizin son hesap dönemi
              verileriyle güncel olduğundan emin olun.
            </li>
            <li>
              <strong>Sınır bölgesindeyseniz izleyin:</strong> Son iki
              yıldır ciro veya bilançonuz sınıra yakınsa, iki hesap
              dönemi üst üste aşım olup olmadığını önceden hesaplayın.
            </li>
            <li>
              <strong>Grup yapınızı netleştirin:</strong> Ortak veya
              bağlı işletmeniz varsa konsolide verileri başvuru
              öncesinde çıkarın.
            </li>
            <li>
              <strong>Programın özel şartına bakın:</strong> Bazı
              programlar KOBİ içinde sadece belirli bir alt sınıfı
              (örneğin yalnızca mikro ve küçük işletmeleri) hedefler.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Çalışan sayısını bordro kişi sayısı değil, Yıllık İş Birimi
            (YİB) esasıyla hesaplayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ortak veya bağlı işletmeniz varsa verileri mutlaka
            konsolide edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ KOBİ niteliğinin kaybı için iki hesap dönemi üst üste
            aşım gerektiğini unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ KBS&apos;deki İŞLETME BEYANI&apos;nı her yıl güncel
            tutun, otomatik senkronize olmayabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kamu kurum/kuruluş kontrolü %25&apos;i aşan işletmelerin
            KOBİ sayılmadığını bilin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Başvuracağınız programın hangi alt sınıfı (mikro/küçük/orta)
            hedeflediğini güncel çağrı metninden teyit edin
          </div>
        </div>
      </section>

      {/* 8. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.resmigazete.gov.tr/eskiler/2023/05/20230525.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Resmî Gazete (25 Mayıs 2023, Sayı 32201) - Küçük ve Orta Büyüklükteki İşletmeler Yönetmeliği (Karar Sayısı: 7297)
            </a>
          </li>
          <li>
            <a
              href="https://www.resmigazete.gov.tr/eskiler/2025/08/20250807.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Resmî Gazete (7 Ağustos 2025, Sayı 32979) - Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik (Karar Sayısı: 10182)
            </a>
          </li>
          <li>
            <a
              href="https://www.tubitak.gov.tr/sites/default/files/21566/kucuk_ve_orta_buyuklukteki_isletmeler_yonetmeligi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜBİTAK - Küçük ve Orta Büyüklükteki İşletmeler Yönetmeliği (Tam Metin)
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB Resmî Web Sitesi
            </a>
          </li>
        </ul>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOBİ tanımı ne zaman değişti, 2026&apos;da hâlâ geçerli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Son değişiklik 7 Ağustos 2025 tarihli ve 10182 sayılı
              Cumhurbaşkanı Kararı ile yürürlüğe girdi ve ciro/bilanço
              üst sınırını 500 milyon TL&apos;den 1 milyar TL&apos;ye
              yükseltti. Bu sınır, bu yazının yayımlandığı tarih
              itibarıyla hâlâ geçerli güncel sınırdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Cironuz 1 milyar TL&apos;yi aşarsa hemen KOBİ niteliğini mi
              kaybedersiniz?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Yönetmeliğe göre KOBİ niteliğinin kaybı için
              kriterin üst üste iki hesap dönemi boyunca aşılmış olması
              gerekir. Tek yıllık bir sıçrama, o işletmeyi tek başına
              KOBİ kapsamından çıkarmaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Mikro, küçük ve orta işletme ayrımı destek tutarını etkiler mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Birçok programda evet. Bazı destek programlarında üst
              limit veya destek oranı işletmenin alt sınıfına göre
              değişebilir, bazı programlar ise öncelikli olarak mikro
              ve küçük ölçekli işletmelere yönelik tasarlanmıştır. Güncel
              oranlar için başvuracağınız programın yürürlükteki
              uygulama esaslarına bakmanız gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Holding bünyesindeki bir şirket KOBİ sayılır mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Sermaye ilişkisine bağlı. Eğer şirketinizin sermayesinin
              çoğunluğuna başka bir işletme sahipse (bağlı işletme) ya da
              %25-%50 arasında bir ortaklık varsa (ortak işletme), o
              işletmenin verileri sizin verilerinize eklenir ve
              konsolide rakamlar KOBİ sınırını aşabilir. Yalnızca
              sermaye ilişkisi %25&apos;in altındaki bağımsız
              işletmelerde sadece kendi verileriniz dikkate alınır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Çırak ve stajyerler çalışan sayısına dahil edilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Yönetmelik yalnızca hizmet akdiyle çalıştırılan
              kişileri çalışan sayar; çıraklar ve staj yapan öğrenciler
              çalışan sayısı hesabına dahil edilmez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOBİ olmayan bir işletme hiçbir devlet desteğinden
              yararlanamaz mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, bu doğru değil. KOSGEB programlarının büyük
              çoğunluğu KOBİ niteliği şartı arasa da, bazı destekler
              (örneğin güncellenen İstihdamı Koruma Destek Programı)
              büyük işletmeleri de kapsama alabiliyor; sadece kredi
              limiti ve destek oranı işletme ölçeğine göre farklılaşıyor.
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
          KOBİ tanımı kağıt üzerinde teknik bir sınıflandırma gibi
          görünse de, pratikte hangi devlet desteğine başvurabileceğinizi,
          hangi destek oranından yararlanacağınızı ve başvurunuzun KBS
          üzerinde ilk kontrolden geçip geçmeyeceğini belirleyen temel
          filtredir. Güncel 1 milyar TL&apos;lik üst sınırı, mikro/küçük/orta
          ayrımını ve özellikle ortak/bağlı işletme hesaplamasını
          doğru bilmek, hem gereksiz yere elenen başvuruları hem de
          sonradan ortaya çıkabilecek uygunsuzluk risklerini önler.
          Sınırın yakınında olduğunuzu düşünüyorsanız, başvurudan önce
          bu hesaplamayı netleştirmek en güvenli yoldur.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı 2026</h3>
          </Link>
          <Link
            href="/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • NACE KODU • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirketimin NACE Kodu Ürettiğim Ürünle Uyuşmuyorsa KOSGEB Desteği Alabilir miyim?</h3>
          </Link>
          <Link
            href="/blog/istihdami-koruma-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • İSTİHDAM DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İstihdamı Koruma Destek Programı 2026</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"KOBİ tanımı ne zaman değişti, 2026'da hâlâ geçerli mi?","acceptedAnswer":{"@type":"Answer","text":"Son değişiklik 7 Ağustos 2025 tarihli ve 10182 sayılı Cumhurbaşkanı Kararı ile yürürlüğe girdi ve ciro/bilanço üst sınırını 500 milyon TL'den 1 milyar TL'ye yükseltti. Bu sınır, bu yazının yayımlandığı tarih itibarıyla hâlâ geçerli güncel sınırdır."}},{"@type":"Question","name":"Cironuz 1 milyar TL'yi aşarsa hemen KOBİ niteliğini mi kaybedersiniz?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Yönetmeliğe göre KOBİ niteliğinin kaybı için kriterin üst üste iki hesap dönemi boyunca aşılmış olması gerekir. Tek yıllık bir sıçrama, o işletmeyi tek başına KOBİ kapsamından çıkarmaz."}},{"@type":"Question","name":"Mikro, küçük ve orta işletme ayrımı destek tutarını etkiler mi?","acceptedAnswer":{"@type":"Answer","text":"Birçok programda evet. Bazı destek programlarında üst limit veya destek oranı işletmenin alt sınıfına göre değişebilir, bazı programlar ise öncelikli olarak mikro ve küçük ölçekli işletmelere yönelik tasarlanmıştır. Güncel oranlar için başvuracağınız programın yürürlükteki uygulama esaslarına bakmanız gerekir."}},{"@type":"Question","name":"Holding bünyesindeki bir şirket KOBİ sayılır mı?","acceptedAnswer":{"@type":"Answer","text":"Sermaye ilişkisine bağlı. Eğer şirketinizin sermayesinin çoğunluğuna başka bir işletme sahipse (bağlı işletme) ya da yüzde 25-50 arasında bir ortaklık varsa (ortak işletme), o işletmenin verileri sizin verilerinize eklenir ve konsolide rakamlar KOBİ sınırını aşabilir. Yalnızca sermaye ilişkisi yüzde 25'in altındaki bağımsız işletmelerde sadece kendi verileriniz dikkate alınır."}},{"@type":"Question","name":"Çırak ve stajyerler çalışan sayısına dahil edilir mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Yönetmelik yalnızca hizmet akdiyle çalıştırılan kişileri çalışan sayar; çıraklar ve staj yapan öğrenciler çalışan sayısı hesabına dahil edilmez."}},{"@type":"Question","name":"KOBİ olmayan bir işletme hiçbir devlet desteğinden yararlanamaz mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır, bu doğru değil. KOSGEB programlarının büyük çoğunluğu KOBİ niteliği şartı arasa da, bazı destekler (örneğin güncellenen İstihdamı Koruma Destek Programı) büyük işletmeleri de kapsama alabiliyor; sadece kredi limiti ve destek oranı işletme ölçeğine göre farklılaşıyor."}}]}) }}
      />
    </BlogLayout>
  );
}
