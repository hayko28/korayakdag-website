import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "NACE Kodu Ürünle Uyuşmuyorsa KOSGEB Desteği Alınır mı? | Koray Akdağ",
  description:
    "Şirketinizin vergi dairesindeki NACE kodu ile fiilen ürettiğiniz veya sattığınız ürün farklıysa KOSGEB başvurunuz reddedilebilir mi? Ana faaliyet kodu, alt faaliyet kodu, Sanayi Sicil Belgesi ve NACE kodu güncelleme süreciyle 2026 güncel rehber.",
  keywords: [
    "nace kodu kosgeb",
    "kosgeb nace kod uyumsuzluğu",
    "ana faaliyet kodu değişikliği",
    "nace kodu güncelleme",
    "kosgeb başvuru red nedenleri",
    "sanayi sicil belgesi nace kodu",
    "kobi bilgi beyannamesi nace kodu",
    "vergi dairesi nace kodu değişikliği",
    "kosgeb destek uygunluğu",
  ],
  alternates: {
    canonical: "/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Şirketimin NACE Kodu Ürettiğim Ürünle Uyuşmuyorsa KOSGEB Desteği Alabilir miyim?"
      description="Vergi dairesindeki ana faaliyet kodunuz ile fiilen ürettiğiniz veya sattığınız ürün farklıysa ne olur? Ana faaliyet ile alt faaliyet kodu ayrımı, başvurunun reddedilme riski, Sanayi Sicil Belgesi bağlantısı ve NACE kodu güncelleme sürecine dair 2026 güncel, uygulamaya dönük rehber."
      category="KOSGEB • NACE KODU • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi"
      coverImage="https://images.unsplash.com/photo-1764185800646-f75f7e16e465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="NACE Kodunuz KOSGEB Desteğine Uygun mu, Birlikte Netleştirelim"
      ctaText="Vergi dairesindeki ana faaliyet kodunuzdan Sanayi Sicil Belgenize kadar işletmenizin gerçek uygunluk durumunu değerlendirir, gerekiyorsa NACE kodu güncelleme sürecini ve ardından destek başvurunuzu baştan sona birlikte yürütürüz."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Bu soru, KOSGEB başvurusu hazırlayan pek çok işletme sahibinin aklına
        geç kalınca geliyor: vergi dairesindeki ana faaliyet kodu ile
        atölyede, fabrikada veya mağazada fiilen yapılan iş birbirini tam
        karşılamıyor. Belki işe toptan ticaretle başlandı, sonradan üretime
        geçildi. Belki yıllar içinde ürün gamı genişledi ama kayıtlı kod hiç
        güncellenmedi. Bu durum KOSGEB başvurusunu otomatik olarak
        bitirmiyor, ama doğru adımlar atılmazsa başvurunun daha ilk aşamada
        elenmesine yol açabiliyor.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ KOSGEB, sektör uygunluğunu güncel <strong>KOBİ Bilgi
            Beyannamesi&apos;ndeki NACE Rev 2 faaliyet kodlarına</strong> bakarak
            değerlendirir, bu kod vergi dairesi kaydınızdan gelir.
          </li>
          <li>
            ✔ Kayıtlı kodunuz fiilen yaptığınız işten farklıysa ve destek
            kapsamındaki sektörler tablosuyla örtüşmüyorsa başvurunuz
            <strong> sistem üzerinde ilk kontrolde reddedilebilir.</strong>
          </li>
          <li>
            ✔ Çözüm genellikle mümkündür: NACE kodu, vergi dairesi ve
            gerekiyorsa ticaret sicili üzerinden güncellenerek fiili duruma
            uygun hale getirilebilir.
          </li>
          <li>
            ✔ Bazı programlarda yalnızca ana faaliyet kodu değil, beyannamede
            kayıtlı <strong>diğer (yardımcı) faaliyet kodları</strong> da
            değerlendirmeye girebiliyor; bu detay programdan programa değişir.
          </li>
          <li>
            ✔ Destek onaylandıktan sonra kod-fiiliyat uyumsuzluğu tespit
            edilirse, ödenen destek <strong>yasal faiziyle geri
            istenebilir.</strong>
          </li>
          <li>
            ✔ En güvenli yol, başvurudan önce NACE kodunu güncellemek ve
            KOBİ Bilgi Beyannamesi&apos;nin güncel olduğundan emin olmaktır.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-bakar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. KOSGEB Neden NACE Kodunuza Bakar?
          </Link>
          <Link href="#ana-alt-kod" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Ana Faaliyet Kodu ile Alt Faaliyet Kodu Farkı
          </Link>
          <Link href="#ne-olur" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Ürün ile NACE Kodu Farklıysa Ne Olur?
          </Link>
          <Link href="#riski-azalt" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Riski Azaltmanın Yolları
          </Link>
          <Link href="#guncelleme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. NACE Kodu Nasıl Güncellenir?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Bu Durumla Kimler Karşılaşır?
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

      {/* 1. NEDEN BAKAR */}
      <section id="neden-bakar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. KOSGEB Neden NACE Kodunuza Bakar?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in resmi açıklamasına göre destek başvurusunda
          işletmenin, güncel KOBİ Bilgi Beyannamesi&apos;ndeki NACE Rev 2
          faaliyet kodları arasında, ilgili program kapsamındaki sektörler
          tablosunda yer alan kodlardan birine sahip olması aranıyor. Yani
          uygunluk kontrolü sözlü beyana veya iş fikrinizin anlatımına göre
          değil, sistemde kayıtlı koda göre yapılıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bu kod, gökten inmiyor: vergi dairesine bildirdiğiniz ana faaliyet
          konusu esas alınarak belirleniyor ve bu bilgi otomatik olarak KOBİ
          Bilgi Beyannamesi&apos;ne yansıyor. KOSGEB Bilgi Sistemi (KBS)
          üzerinden yapılan her başvuruda ilk kontrollerden biri, işletmenin
          bu koda göre ilgili programın kapsamına girip girmediğidir. Kod
          kapsam dışındaysa sistem başvuruyu daha ileri bir değerlendirmeye
          taşımadan reddedebilir.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kısacası KOSGEB için siz ne yaptığınızı değil, sistemde ne
            yazdığını görüyor. İkisi arasındaki fark ne kadar büyükse,
            başvurunuzun yanlış anlaşılma veya reddedilme riski de o kadar
            artar.
          </p>
        </div>
      </section>

      {/* 2. ANA-ALT KOD */}
      <section id="ana-alt-kod" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Ana Faaliyet Kodu ile Alt Faaliyet Kodu Farkı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir işletmenin aslında birden fazla yerde kayıtlı faaliyet bilgisi
          bulunabilir ve bunlar birbirine karıştırılıyor. Aşağıdaki tablo bu
          farkı netleştirir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kayıt Yeri</th>
                <th className="p-5">Ne Gösterir?</th>
                <th className="p-5">KOSGEB Değerlendirmesindeki Rolü</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Vergi Dairesi (Ana Faaliyet Kodu)</td>
                <td className="p-5">İşletmenin vergi kaydında birincil olarak tescilli NACE kodu</td>
                <td className="p-5">KOBİ Bilgi Beyannamesi&apos;ne yansıyan, KOSGEB&apos;in öncelikle baktığı kod</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Vergi Dairesi (Yardımcı/Alt Faaliyet Kodu)</td>
                <td className="p-5">İşletmenin ana kod dışında yürüttüğü diğer faaliyetler</td>
                <td className="p-5">Bazı programlarda ek olarak değerlendirmeye girebilir, ancak bu kural programdan programa değişir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ticaret Sicili (Amaç ve Konu Maddesi)</td>
                <td className="p-5">Esas sözleşmede yazılı, genellikle çok geniş tutulan faaliyet listesi</td>
                <td className="p-5">Tek başına yeterli değildir; KOSGEB burayı değil vergi kaydını esas alır</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Sanayi Sicil Belgesi</td>
                <td className="p-5">İmalat esaslı programlarda fiilen üretilen ürünü ve üretim kapasitesini gösterir</td>
                <td className="p-5">İmalatçı işletmeler için NACE kodunu destekleyen ayrı bir doğrulama belgesi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="leading-8 text-gray-700">
            &quot;Esas sözleşmemde bu faaliyet yazılı, ticaret sicilinde de
            tescilli, o yüzden bir sorun olmaz&quot; demek yaygın bir
            hatadır. Ticaret sicilindeki amaç ve konu maddesi çoğu zaman
            işletmenin ileride yapabileceği her şeyi kapsayacak şekilde geniş
            tutulur ve KOSGEB uygunluk kontrolünde tek başına referans
            alınmaz. Belirleyici olan, vergi dairesi kaydınızdaki ana
            faaliyet kodu ve bunun KOBİ Bilgi Beyannamesi&apos;ne yansıyan
            hâlidir. Bir işletmenin ticaret sicilinde on farklı faaliyet
            konusu tescilli olsa bile vergi dairesindeki ana kodu yalnızca
            biridir ve KOSGEB o koda bakar.
          </p>
        </div>
      </section>

      {/* 3. NE OLUR */}
      <section id="ne-olur" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Ürün ile NACE Kodu Farklıysa Ne Olur?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Uyumsuzluğun ortaya çıktığı aşamaya göre iki farklı risk söz
          konusudur:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🚫</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Başvuru Aşamasında Ret
            </h3>
            <p className="text-gray-700">
              KBS sistemi, KOBİ Bilgi Beyannamesi&apos;ndeki NACE kodunuzu
              ilgili programın kapsam tablosuyla otomatik karşılaştırır. Kod
              tabloda yoksa başvuru formunu doldurmaya bile geçemeyebilir
              veya değerlendirmeye alınmadan reddedilir. Bu en sık ve en
              kolay fark edilen senaryodur.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⛔</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Sonradan Tespit ve Geri Tahsil
            </h3>
            <p className="text-gray-700">
              Başvuru bir şekilde kabul edilip destek ödenmiş olsa bile,
              işletmenin beyan ettiği faaliyetle fiili durumunun uyuşmadığı
              sonradan tespit edilirse KOSGEB Uygunsuzluk Yönergesi
              çerçevesinde destek durdurulabilir; ödenmiş tutarlar ödeme
              tarihinden itibaren yasal faiziyle geri istenebilir ve işletme
              KBS&apos;de pasif hale getirilebilir.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Burada önemli bir ayrım var: kaydınızın güncel olmaması ile bilerek
          yanlış beyanda bulunmak aynı şey değildir. Ancak sonuç
          değerlendirmesinde &quot;bilmiyordum&quot; savunması her zaman
          işletmeyi korumaz; bu yüzden riski en aza indirmenin en güvenli
          yolu, sorunu başvurudan önce fark edip çözmektir.
        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurularda en sık gözden kaçan nokta, işletmelerin ürün
            gamını veya iş modelini zamanla değiştirmesine rağmen NACE
            kodunu hiç güncellememesidir. Ticaretle başlayıp sonradan
            üretime geçen ya da tam tersine imalatı bırakıp
            ithalat/distribütörlüğe yönelen işletmelerde bu değişim vergi
            dairesi kaydına neredeyse hiç yansıtılmıyor. KOSGEB&apos;in
            uygunluk kontrolü o anki fiili durumu değil, sistemde kayıtlı
            kodu esas aldığı için, işletme fiilen tam uygun olsa bile
            kayıtlı kod eski kaldığı sürece başvuru elenebiliyor.
          </p>
        </div>
      </section>

      {/* 4. RİSKİ AZALT */}
      <section id="riski-azalt" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Riski Azaltmanın Yolları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Başvurudan önce yapılabilecek birkaç adım, ret veya geri tahsil
          riskini büyük ölçüde ortadan kaldırır:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Fiili durumu netleştirin:</strong> İşletmenizin cirosunun
              hangi faaliyetten geldiğini ve bunun hangi NACE kodu ile en
              doğru şekilde eşleştiğini önceden belirleyin.
            </li>
            <li>
              <strong>Vergi kaydınızı kontrol edin:</strong> Vergi levhanızdaki
              ana faaliyet kodunun bugün gerçekten yaptığınız işi yansıtıp
              yansıtmadığını teyit edin.
            </li>
            <li>
              <strong>Sanayi Sicil Belgenizi güncel tutun:</strong> İmalat
              esaslı bir programa (örneğin Kapasite Geliştirme Destek
              Programı) başvuracaksanız, belgede yazan üretim konusunun
              güncel ürün gamınızla uyumlu olduğundan emin olun.
            </li>
            <li>
              <strong>NACE kodu uyumsuzsa güncelleme başvurusu yapın:</strong>
              {" "}Başvurudan önce kodunuzu fiili duruma uygun hale getirin;
              süreç aşağıdaki bölümde adım adım anlatılıyor.
            </li>
            <li>
              <strong>KOBİ Bilgi Beyannamenizi tazeleyin:</strong> Vergi
              dairesindeki kod güncellendikten sonra KBS üzerindeki
              beyannamenin de bu değişikliği yansıttığından emin olun; bazı
              durumlarda otomatik senkronizasyon gecikebilir.
            </li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            İşletmenizin güncel NACE kodunun hangi KOSGEB programlarına
            uygun olduğunu ve kod uyumsuzluğu varsa bunun başvuru öncesinde
            nasıl giderileceğini birlikte netleştirebiliriz.{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Şirketinizin destek uygunluğunu ücretsiz ön analizle birlikte
              değerlendirelim.
            </Link>
          </p>
        </div>
      </section>

      {/* 5. GÜNCELLEME */}
      <section id="guncelleme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. NACE Kodu Nasıl Güncellenir? Adım Adım Süreç
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          NACE kodu değişikliği tek bir kurumda biten bir işlem değildir;
          şirketin yapısına göre birden fazla kayıt eş zamanlı güncellenmesi
          gerekebilir.
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Fiili Faaliyetin Tespiti</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Vergi Dairesi Başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Ticaret Sicili / Oda Bildirimi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">SGK ve Sanayi Sicil Güncellemesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">KOBİ Beyannamesi Teyidi</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.1. Vergi Dairesi Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            NACE kodu değişikliği İnteraktif Vergi Dairesi
            (ivd.gib.gov.tr) üzerinden &quot;Başvurularım &gt; Yeni Başvuru
            &gt; NACE Kodu Değişikliği&quot; adımıyla veya bağlı olunan
            vergi dairesine yazılı dilekçeyle yapılabilir. Tüzel kişiliklerde
            imza sirküleri ve yetkili imzası, gerekiyorsa ortaklar/yönetim
            kurulu kararı talep edilir. Bu adım genellikle ücretsizdir.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.2. Ticaret Sicili ve Odaya Bildirim
          </h3>
          <p className="leading-8 text-gray-700">
            Yeni faaliyet, şirketin esas sözleşmesindeki amaç ve konu
            maddesinin dışına çıkıyorsa genel kurul kararı ile esas sözleşme
            tadili yapılmalı, bu değişiklik Ticaret Sicili&apos;ne tescil
            ettirilip Türkiye Ticaret Sicili Gazetesi&apos;nde ilan
            edilmelidir. Ardından bağlı olunan Ticaret veya Sanayi Odası
            kaydı da güncellenir. Esas sözleşme tadili gerektiren durumlarda
            noter, ilan ve tescil harçları oluşur; sadece vergi dairesi kod
            güncellemesi yeterliyse bu aşamaya gerek kalmayabilir.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.3. SGK ve Sanayi Sicil Belgesi Güncellemesi
          </h3>
          <p className="leading-8 text-gray-700">
            Faaliyet değişikliği işyeri tehlike sınıfını etkileyebileceği
            için SGK işyeri kaydının da güncellenmesi gerekir. İmalat
            yapan işletmelerde ayrıca Sanayi Sicil Belgesi&apos;ndeki üretim
            konusunun güncel ürün gamıyla uyumlu olması, özellikle
            KOSGEB&apos;in imalat esaslı programlarında ayrı bir uygunluk
            kriteri olarak karşınıza çıkar.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.4. KOBİ Bilgi Beyannamesi&apos;nin Teyidi
          </h3>
          <p className="leading-8 text-gray-700">
            Vergi dairesindeki kod değiştikten sonra bu bilginin KOBİ Bilgi
            Sistemi&apos;ndeki (KBS) beyannamenize yansıdığını doğrulayın.
            Senkronizasyon gecikirse veya beyannamenizin süresi dolmuşsa,
            KOSGEB destek başvurusundan önce beyannameyi elden güncelleyip
            onaylatmanız gerekir; aksi halde güncel vergi kaydınız doğru
            olsa bile KOSGEB eski bilgiyi görmeye devam edebilir.
          </p>
        </div>
      </section>

      {/* 6. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Bu Durumla Kimler Karşılaşır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          NACE kod uyumsuzluğu, sanıldığından çok daha sık karşılaşılan bir
          durumdur ve genellikle şu profillerde ortaya çıkar:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li>
            Ticaret amacıyla kurulup zamanla kendi ürününü üretmeye başlayan
            ama vergi kaydını hâlâ &quot;toptan ticaret&quot; kodunda tutan
            işletmeler.
          </li>
          <li>
            İmalatla başlayıp sonradan ithalat, distribütörlük veya
            bayilik gibi ticari faaliyetlere ağırlık veren işletmeler.
          </li>
          <li>
            Yeni bir ürün grubu veya hizmet çeşidi ekleyip bunu tescil
            sürecine hiç taşımamış, sadece fiilen üretmeye/satmaya başlamış
            işletmeler.
          </li>
          <li>
            Kuruluş sırasında kodu geniş kapsamlı bir &quot;diğer&quot;
            kategorisinden seçmiş, işin niteliğini tam yansıtmayan bir
            kayıtla yola devam eden işletmeler.
          </li>
        </ul>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Başvurudan önce KOBİ Bilgi Beyannamenizdeki NACE kodunu
            mutlaka kontrol edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ticaret sicilindeki amaç maddesinin geniş olmasına güvenip
            vergi kaydınızı kontrol etmeyi ihmal etmeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İmalat esaslı programlara başvuracaksanız Sanayi Sicil
            Belgenizin üretim konusunu güncel tutun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Esas sözleşme tadili gerekiyorsa bunu başvuru takvimine göre
            zamanında planlayın, işlemler birkaç hafta sürebilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kod güncellemesi sonrası KBS&apos;deki beyannamenin
            yansıdığından emin olun, otomatik güncellenmeyebilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Destek kapsamındaki güncel sektör/NACE tablosunu her başvuru
            öncesinde KOSGEB&apos;in resmi sayfasından teyit edin
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
              href="https://www.kosgeb.gov.tr/site/tr/genel/detay/7580/destek-basvuru-sartlari-ve-destek-turu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Destek Başvuru Şartları ve Destek Türü
            </a>
          </li>
          <li>
            <a
              href="https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/Mevzuat/2025/KOSGEB_Uygunsuzluk_Yonergesi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB Uygunsuzluk Yönergesi
            </a>
          </li>
          <li>
            <a
              href="https://ivd.gib.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gelir İdaresi Başkanlığı - İnteraktif Vergi Dairesi
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB Resmî Web Sitesi - Güncel Sektör/NACE Kod Listeleri
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
              NACE kodum destek kapsamındaki sektörler listesinde değilse hiç başvuramaz mıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Mevcut kayıtlı kodunuzla listede yer almıyorsanız o programa
              başvuramazsınız. Ancak fiili faaliyetiniz gerçekten kapsam
              içindeki bir alana giriyorsa, kodunuzu fiili duruma uygun
              şekilde güncelleyerek uygunluk kazanmanız mümkündür.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Vergi levhamdaki ana faaliyet kodu ile ticaret sicilindeki faaliyet konusu farklı olabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, sık görülen bir durumdur. Ticaret sicilindeki amaç ve
              konu maddesi genellikle çok geniş tutulur ve onlarca faaliyeti
              kapsayabilir. KOSGEB değerlendirmesinde belirleyici olan bu
              geniş liste değil, vergi dairesindeki ana faaliyet kodudur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              NACE kodu güncelleme işlemi ücretli mi, ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Sadece vergi dairesi ve MERSİS üzerinden yapılan kod
              güncellemesi genellikle ücretsizdir ve kısa sürede
              sonuçlanır. Ancak esas sözleşme tadili gerekiyorsa noter,
              Ticaret Sicili Gazetesi ilanı ve tescil harçları doğar; bu
              durumda süreç birkaç haftaya kadar uzayabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek başvurusu onaylandıktan sonra NACE kodu uyumsuzluğu fark edilirse ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Uyumsuzluk sonradan tespit edilirse destek durdurulabilir,
              daha önce ödenen tutarlar KOSGEB Uygunsuzluk Yönergesi
              çerçevesinde yasal faiziyle birlikte geri istenebilir ve
              işletme KBS üzerinde pasif hale getirilerek yeni destekten
              yararlanması engellenebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Birden fazla NACE kodum varsa hangisi esas alınır?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel kural olarak vergi dairesindeki ana faaliyet kodu esas
              alınır. Bazı programlarda beyannamede kayıtlı yardımcı
              (ikincil) faaliyet kodları da ek olarak değerlendirmeye
              girebilir, ancak bu her program için otomatik geçerli bir
              kural değildir; başvuracağınız programın güncel uygulama
              esaslarından teyit edilmesi gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sanayi Sicil Belgesi almak NACE kodu sorununu otomatik çözer mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Sanayi Sicil Belgesi, imalat esaslı programlarda fiili
              üretim konusunu doğrulayan ayrı bir belgedir ve vergi
              dairesindeki NACE kodunun yerine geçmez. İkisinin birbiriyle
              tutarlı olması, başvurunuzun güçlü ve sorgusuz
              değerlendirilmesi açısından önemlidir.
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
          NACE kodu ile fiili faaliyetiniz arasındaki uyumsuzluk, KOSGEB
          desteğinin önünde aşılamaz bir engel değildir; ama görmezden
          gelindiğinde başvurunun daha ilk aşamada, hiçbir değerlendirmeye
          bile girmeden reddedilmesine yol açabilecek kadar da ciddi bir
          konudur. İşin özü şudur: KOSGEB sizin ne yaptığınızı değil,
          sistemde ne kayıtlı olduğunu görür. Başvurudan önce vergi
          dairesindeki ana faaliyet kodunuzu, gerekiyorsa Sanayi Sicil
          Belgenizi ve KOBİ Bilgi Beyannamenizi fiili durumunuzla
          uyumlu hale getirmek, hem ret riskini hem de destek onaylandıktan
          sonra karşılaşabileceğiniz geri tahsil riskini büyük ölçüde
          ortadan kaldırır.
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
            href="/blog/kosgeb-girisimci-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • GİRİŞİMCİLİK DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Girişimci Destek Programı Nedir?</h3>
          </Link>
          <Link
            href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
