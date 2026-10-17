import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Taşıt, Kuyum, Elektronikte Taksit Süresi Sınırı Kalktı mı? 2026 | Koray Akdağ",
  description: "15 Ekim 2026 tarihli ve 33401 sayılı Resmî Gazete'de yayımlanan değişiklikle Perakende Ticaret Yönetmeliği'nin 12/B maddesindeki taşıt (48-36-24-12 ay), kuyum (3 ay) ve elektronik/mobilya/seyahat gibi ürün bazlı taksit sınırları kaldırıldı. Yetki Ticaret Bakanlığı'na geçti. Eski sınırlar, geçiş dönemi ve şirketler için anlamıyla güncel rehber.",
  keywords: [
    "taksitli satışlarda süre sınırı kalktı mı",
    "taşıt taksit süresi 2026",
    "kuyum taksit sınırı kalktı mı",
    "perakende ticaret yönetmeliği 12/B değişikliği",
    "elektronik eşya taksit süresi sınırı",
    "15 ekim 2026 resmi gazete taksit",
    "ticaret bakanlığı taksit yetkisi",
    "araç taksit ayı sınırı 2026",
  ],
  alternates: {
    canonical: "/blog/taksitli-satislarda-sure-sinirlamasi-kalkti-mi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Taşıt, Kuyum ve Elektronikte Taksit Süresi Sınırı Kalktı mı? 15 Ekim 2026 Yönetmelik Değişikliği"
      description="Ticaret Bakanlığı'nın Perakende Ticarette Uygulanacak İlke ve Kurallar Hakkında Yönetmelik'te yaptığı değişiklikle, taşıt, kuyum, cep telefonu, elektronik eşya, mobilya ve seyahat hizmetlerindeki sabit taksit süresi sınırları yönetmelik metninden çıkarıldı. Yetki artık Ticaret Bakanlığı'nda. Eski sınırlar neydi, şimdi ne oluyor ve şirketler ne yapmalı?"
      category="TİCARET HUKUKU • PERAKENDE MEVZUATI • 2026"
      date="Ekim 2026"
      readTime="12 Dakika"
      slug="taksitli-satislarda-sure-sinirlamasi-kalkti-mi-2026"
      coverImage="https://images.unsplash.com/photo-1783408355139-7c9390d3f26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          15 Ekim 2026 tarihli ve 33401 sayılı Resmî Gazete&apos;de
          yayımlanan yönetmelik değişikliğine göre:
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Perakende Ticaret Yönetmeliği&apos;nin 12/B maddesindeki sabit taksit süresi sınırları yürürlükten kaldırıldı.</li>
          <li>✔ Eski düzenlemede taşıtta 48-36-24-12 aylık kademeli süreler ve belirli bir tutarın üzerinde taksit yasağı vardı.</li>
          <li>✔ Kuyumda işlenmiş ürünlerde 3 ay, külçe/basılı kuyumda ise taksit yasağı uygulanıyordu.</li>
          <li>✔ Cep telefonu, elektronik eşya, tablet, televizyon, beyaz eşya, mobilya ve seyahat/konaklama hizmetlerindeki ürün bazlı süreler de madde metninden çıkarıldı.</li>
          <li>✔ Konut satışı hariç taksitli mal ve hizmet satışlarında süre belirleme ve ek sınırlama yetkisi artık Ticaret Bakanlığı&apos;nda.</li>
          <li>✔ Bakanlık yeni bir karar alırsa bunu kendi internet sitesinde ilan edecek ve üst meslek kuruluşlarına bildirecek; şu an için yürürlükte yazılı bir sabit sınır yok.</li>
          <li>✔ Kredi kartıyla yapılan taksitli alışverişlerdeki sınırlar bu değişiklikten ayrı; o alan BDDK düzenlemelerine tabi.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#ne-degisti" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. 15 Ekim 2026&apos;da Ne Değişti?
          </Link>
          <Link href="#eski-sinirlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Yürürlükten Kalkmadan Önceki Sınırlar Neydi?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. &quot;Sınır Kalktı&quot; ile &quot;Taksit Artık Serbest&quot; Aynı Şey Değil
          </Link>
          <Link href="#yeni-yetki" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Bakanlığa Verilen Yeni Yetki Tam Olarak Ne?
          </Link>
          <Link href="#hangi-sektorler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Hangi Sektörler En Çok Etkileniyor?
          </Link>
          <Link href="#pratik-sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Şirketler İçin Pratik Sonuç
          </Link>
          <Link href="#checklist" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Şimdi Ne Yapmalı? Checklist
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Resmî Kaynaklar
          </Link>
          <Link href="#biz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Satış Sözleşmelerinizi Birlikte Gözden Geçirelim
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NE DEĞİŞTİ */}
      <section id="ne-degisti" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. 15 Ekim 2026&apos;da Ne Değişti?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Ticaret Bakanlığı, 6 Ağustos 2016 tarihli ve 29793 sayılı Resmî
          Gazete&apos;de yayımlanan Perakende Ticarette Uygulanacak İlke ve
          Kurallar Hakkında Yönetmelik&apos;in 12/B maddesini değiştirdi.
          Değişiklik, 15 Ekim 2026 tarihli ve 33401 sayılı Resmî
          Gazete&apos;de yayımlanarak aynı gün yürürlüğe girdi.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          12/B maddesi, &quot;Perakende işletmelerin tüketicilere yönelik
          taksitli satışları&quot; başlığını taşıyor ve yönetmelik, 14/1/2015
          tarihli ve 6585 sayılı Perakende Ticaretin Düzenlenmesi Hakkında
          Kanun&apos;a dayanıyor. Madde ilk olarak 2 Temmuz 2021 tarihli ve
          31529 sayılı Resmî Gazete&apos;yle bugünkü kapsamlı haline
          kavuşmuştu: konut hariç taksitli mal ve hizmet satışlarında genel
          olarak 12 aylık bir üst sınır, bunun yanında taşıt, kuyum, cep
          telefonu, elektronik eşya, mobilya ve seyahat hizmetleri gibi
          belirli ürün gruplarında daha kısa ve ayrı süreler öngörüyordu.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          15 Ekim 2026&apos;daki değişiklik, maddenin bu yapısını kökten
          değiştirdi. Birinci ve ikinci fıkralar yeniden yazıldı, tutar ve
          süre sınırlarını içeren üçüncü, dördüncü ve beşinci fıkralar ise
          tamamen yürürlükten kaldırıldı. Yeni metin artık somut bir ay
          sayısı vermiyor; bunun yerine konut satışı dışındaki taksitli mal
          ve hizmet satışlarında taksit süresini belirleme ve ek sınırlama
          getirme yetkisini doğrudan Ticaret Bakanlığı&apos;na bırakıyor.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Bu Değişiklik Neden Önemli?
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Taksitli mal veya hizmet satan hemen hemen her işletmeyi ilgilendiriyor: oto galerisi, kuyumcu, elektronik mağazası, mobilyacı, seyahat acentesi, e-ticaret sitesi</li>
            <li>✔ Yıllardır yönetmelikte yazılı ve bilinen sabit tablo artık metinde yok</li>
            <li>✔ Bakanlığın bu yetkiyle ne zaman ve ne yönde bir karar alacağı henüz belli değil</li>
            <li>✔ Satış sözleşmeleri, ön bilgilendirme formları ve taksit tabloları eski maddeye atıf yapan işletmelerin bu metinleri gözden geçirmesi gerekiyor</li>
          </ul>
        </div>
      </section>

      {/* 2. ESKİ SINIRLAR */}
      <section id="eski-sinirlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Yürürlükten Kalkmadan Önceki Sınırlar Neydi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Aşağıdaki sınırlar artık yürürlükte değil; yalnızca neyin
          değiştiğini somut olarak görebilmeniz için, kaldırılmadan önceki
          son haliyle özetlenmiştir. Genel kural, ödemenin ertelendiği
          dönemler dahil taksit süresinin 12 ayı geçemeyeceğiydi. Bunun
          yanında aşağıdaki ürün ve hizmet gruplarında daha kısa, ayrı
          süreler uygulanıyordu:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Ürün / Hizmet Grubu</th>
                <th className="p-5">Eski Azami Taksit Süresi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Genel kural (diğer taksitli satışlar)</td>
                <td className="p-5">12 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Belirli fiyat eşiği üzeri cep telefonu</td>
                <td className="p-5">3 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Görüntü, kamera ve ses sistemleri</td>
                <td className="p-5">4 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tablet</td>
                <td className="p-5">6 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Televizyon</td>
                <td className="p-5">Fiyata göre 4 veya 9 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Beyaz eşya ve küçük ev aletleri</td>
                <td className="p-5">9 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mobilya</td>
                <td className="p-5">9 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yurt içi uçak bileti, seyahat acentesi ve konaklama</td>
                <td className="p-5">18 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Taşıt (motorlu kara taşıtı, fatura değerine göre kademeli)</td>
                <td className="p-5">Değer arttıkça 48 aydan 12 aya düşen kademeler, en üst dilimde taksit yasağı</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kuyum (işlenmiş ürün / külçe-basılı ürün)</td>
                <td className="p-5">İşlenmişte 3 ay, külçe/basılı üründe taksit yasağı</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Taşıt tarafında süre kademeleri ilk kez 2 Temmuz 2021&apos;de
          belirlendiğinde en üst fiyat diliminin eşiği 1.500.000 TL idi;
          sonraki yıllarda bu tutarın Bakanlıkça güncellendiğine dair
          haberler bulunuyor. Maddenin tamamen yürürlükten kaldırılmasıyla
          birlikte artık bu tutarların ve kademelerin güncel değeri de
          tartışmasız hale geldi: madde metninde böyle bir tablo yok.
        </p>
      </section>

      {/* 3. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. &quot;Sınır Kalktı&quot; ile &quot;Taksit Artık Serbest&quot; Aynı Şey Değil
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırılmaması Gereken İki Ayrı Konu
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Yönetmelikteki taksit süresi sınırı
              </p>
              <p className="text-gray-700">
                15 Ekim 2026&apos;dan itibaren satıcı ile tüketici arasındaki
                taksitli satış sözleşmelerinde (vadeli mal/hizmet satışı)
                kaç ay taksit yapılabileceğine dair madde metninde yazılı
                sabit bir süre kalmadı; yetki Ticaret Bakanlığı&apos;na
                geçti.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Kredi kartıyla taksit sınırlaması
              </p>
              <p className="text-gray-700">
                Kredi kartıyla yapılan alışverişlerde hangi ürün ve hizmet
                gruplarında kaç ay taksit uygulanabileceği ayrı bir konu
                olup Bankacılık Düzenleme ve Denetleme Kurumu&apos;nun (BDDK)
                kendi düzenlemelerine tabidir. Bu yönetmelik değişikliği,
                BDDK&apos;nın kredi kartı taksit kurallarını doğrudan
                değiştirmiyor.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Ayrıca sınırların madde metninden çıkmış olması, taksitin
            fiilen sınırsız ve denetimsiz hale geldiği anlamına da gelmiyor.
            Bakanlık, tanınan yetkiyi istediği an kullanarak yeni bir süre
            veya ek sınırlama getirebilir; bu karar yayımlandığı andan
            itibaren bağlayıcı olacak. Yani şu an bir boşluk değil, bir
            geçiş ve belirsizlik dönemi söz konusu.
          </p>
        </div>
      </section>

      {/* 4. YENİ YETKİ */}
      <section id="yeni-yetki" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Bakanlığa Verilen Yeni Yetki Tam Olarak Ne?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yeniden düzenlenen 12/B maddesinin birinci fıkrasına göre Ticaret
          Bakanlığı, mal veya hizmet satışı sonrasında borcun
          taksitlendirildiği veya ödemenin ertelendiği dönemler de dahil
          olmak üzere, konut satışı dışındaki taksitli mal ve hizmet
          satışlarında taksit sürelerini belirlemeye veya bu konuda ilave
          sınırlamalar getirmeye karar alabilir. Bu yetki, satışta senet,
          çek gibi bir kıymetli evrak düzenlenip düzenlenmediğine
          bakılmaksızın geçerli.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          İkinci fıkra ise usul kuralını koyuyor: Bakanlık bu kapsamda bir
          karar alırsa, kararı kendi internet sitesinde ilan edecek ve
          ilgili üst meslek kuruluşlarına (örneğin ticaret ve sanayi
          odalarının üst birliklerine) gönderecek. Yani yeni bir sınır
          gelirse bunu öğrenmenin yolu, Resmî Gazete beklemek değil,
          Bakanlığın kendi duyurularını takip etmek olacak.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Uygulamada en sık gözden kaçan
            nokta, bu tür bir yetki devrinin mevzuatı daha esnek değil, daha
            öngörülemez hale getirdiğidir. Eskiden bir ürün grubunun taksit
            süresini öğrenmek için tek bir yönetmelik maddesine bakmak
            yeterliydi; şimdi aynı bilgi, Bakanlığın ne zaman çıkacağı belli
            olmayan ayrı kararlarına dağılabilir. Taksitli satış hacmi
            yüksek olan işletmelerin, satış sözleşmesi ve ön bilgilendirme
            formu şablonlarını sabit bir süreye değil, &quot;yürürlükteki
            Bakanlık kararına göre belirlenir&quot; gibi güncellenebilir bir
            ifadeye bağlaması, ileride metinleri tekrar tekrar değiştirmek
            zorunda kalmamak için pratik bir çözüm.
          </p>
        </div>
      </section>

      {/* 5. HANGİ SEKTÖRLER */}
      <section id="hangi-sektorler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Hangi Sektörler En Çok Etkileniyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Madde, konut satışı dışındaki tüm taksitli mal ve hizmet satışlarını
          kapsadığı için etkisi geniş. Eski tablodaki ayrı süreler dikkate
          alındığında, değişiklikten en belirgin şekilde etkilenecek
          sektörler şunlar:
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">🚗</div>
            <h3 className="text-lg font-bold">Otomotiv galerileri ve bayileri</h3>
            <p className="mt-3 text-sm text-gray-600">Taşıt satışında kademeli süre ve üst tutarda taksit yasağı kalktı</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">💍</div>
            <h3 className="text-lg font-bold">Kuyumcular</h3>
            <p className="mt-3 text-sm text-gray-600">İşlenmiş ve külçe/basılı ürün ayrımına dayalı sabit sınır artık metinde yok</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">📱</div>
            <h3 className="text-lg font-bold">Elektronik ve beyaz eşya mağazaları</h3>
            <p className="mt-3 text-sm text-gray-600">Cep telefonu, tablet, TV, beyaz eşya için ayrı ay sınırları kalktı</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">🛋️</div>
            <h3 className="text-lg font-bold">Mobilya mağazaları</h3>
            <p className="mt-3 text-sm text-gray-600">9 aylık sabit süre sınırı yönetmelik metninden çıkarıldı</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">✈️</div>
            <h3 className="text-lg font-bold">Seyahat acenteleri ve konaklama işletmeleri</h3>
            <p className="mt-3 text-sm text-gray-600">Uçak bileti, tur ve konaklama hizmetlerindeki 18 aylık sınır kaldırıldı</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">🛒</div>
            <h3 className="text-lg font-bold">E-ticaret ve genel perakende</h3>
            <p className="mt-3 text-sm text-gray-600">Genel 12 aylık üst sınır da dahil olmak üzere tüm taksitli satışlar Bakanlık yetkisine bağlandı</p>
          </div>
        </div>
      </section>

      {/* 6. PRATİK SONUÇ */}
      <section id="pratik-sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Şirketler İçin Pratik Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Değişikliğin yayımlandığı tarih itibarıyla yönetmelik metninde
          yazılı bir sabit taksit süresi bulunmuyor. Bu, kısa vadede
          işletmelere ürün grubuna göre ayrı ayrı süre hesaplama
          zorunluluğunu ortadan kaldırıyor gibi görünse de, aslında belirsiz
          bir ara dönem yaratıyor. Bakanlık yeni bir karar yayımlayana kadar
          işletmeler, kendi ticari politikalarına göre taksit süresi
          belirleyebilir; ancak bu kararın geriye değil ileriye etkili
          olacağını, yani Bakanlık bir sınır koyduğunda o tarihten sonraki
          satışların bu sınıra uyması gerekeceğini unutmamak gerekir.
        </p>
        <p className="leading-8 text-gray-700">
          Taşıt ve kuyum gibi geçmişte en sık tartışılan ve denetime konu
          olan kalemlerde sınırın kalkması, bu sektörlerdeki işletmelere
          kısa vadede ticari esneklik sağlıyor. Ancak aynı esneklik, Tüketicinin
          Korunması Hakkında Kanun kapsamındaki genel ilkeler (haksız şart
          yasağı, önceden bilgilendirme yükümlülüğü) ile birlikte
          değerlendirilmeli; taksit süresi sözleşmede ne kadar uzun veya
          kısa belirlenirse belirlensin, tüketicinin önceden ve açıkça
          bilgilendirilmesi yükümlülüğü devam ediyor.
        </p>
      </section>

      {/* 7. CHECKLIST */}
      <section id="checklist" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Şimdi Ne Yapmalı? Checklist
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">1. Satış sözleşmelerinizi tarayın</p>
            <p className="mt-2 text-sm text-gray-600">Eski 12/B maddesine veya eski ay sınırlarına doğrudan atıf yapan satış sözleşmesi ve ön bilgilendirme formu metinlerini tespit edin.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">2. Sabit süre yerine güncellenebilir ifade kullanın</p>
            <p className="mt-2 text-sm text-gray-600">Taksit süresini &quot;yürürlükteki mevzuata göre belirlenir&quot; şeklinde esnek bir ifadeyle güncelleyin.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">3. Ticaret Bakanlığı duyurularını takip edin</p>
            <p className="mt-2 text-sm text-gray-600">Bakanlık yeni bir karar yayımlarsa bunu kendi internet sitesinde ilan edeceği için periyodik kontrol şart.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">4. Tüketicinin Korunması Hakkında Kanun&apos;u unutmayın</p>
            <p className="mt-2 text-sm text-gray-600">Taksit süresi serbestleşse de aydınlatma ve haksız şart yasağı gibi genel tüketici hukuku ilkeleri geçerliliğini koruyor.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">5. Bayi/distribütör ağınızı bilgilendirin</p>
            <p className="mt-2 text-sm text-gray-600">Taşıt ve elektronik gibi bayilik ağıyla satılan ürünlerde, merkezi bir taksit politikası belirleyip bayilere iletmek karışıklığı önler.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">6. Muhasebe ve finansman süreçlerinizi gözden geçirin</p>
            <p className="mt-2 text-sm text-gray-600">Taksit süresindeki değişiklikler nakit akışı ve tahsilat planlamanızı doğrudan etkileyebilir.</p>
          </div>
        </div>
      </section>

      {/* 8. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı, aşağıdaki birincil ve resmî kaynaklara dayanmaktadır.
          Satış sözleşmelerinizi güncellemeden önce güncel metni ticaret.gov.tr
          üzerinden teyit etmenizi öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            15 Ekim 2026 tarihli ve 33401 sayılı Resmî Gazete (Perakende
            Ticarette Uygulanacak İlke ve Kurallar Hakkında Yönetmelikte
            Değişiklik Yapılmasına Dair Yönetmelik, 12/B maddesinin
            değişikliği)
          </li>
          <li>
            2 Temmuz 2021 tarihli ve 31529 sayılı Resmî Gazete (12/B
            maddesinin, kaldırılmadan önceki kapsamlı ilk halinin
            yayımlandığı nüsha)
          </li>
          <li>
            <a href="https://ticaret.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              T.C. Ticaret Bakanlığı resmî internet sitesi (ticaret.gov.tr)
            </a>{" "}
            (İç Ticaret Genel Müdürlüğü duyuruları ve perakende ticaret
            mevzuatı sayfası)
          </li>
          <li>
            14/1/2015 tarihli ve 6585 sayılı Perakende Ticaretin
            Düzenlenmesi Hakkında Kanun, m.6, 8, 9, 10, 12, 16 ve 17
            (yönetmeliğin dayanağı)
          </li>
        </ul>
      </section>

      {/* 9. BİZ */}
      <section id="biz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Satış Sözleşmelerinizi Birlikte Gözden Geçirelim
        </h2>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Taksit Politikanızı Mevzuata Uyumlu Şekilde Yeniden Kurgulayalım
          </h3>
          <p className="leading-8 text-gray-700">
            Koray Akdağ / Sistem Global Danışmanlık olarak, şirketinizin
            satış sözleşmesi ve ön bilgilendirme formu şablonlarını bu
            değişiklik karşısında değerlendiriyor, taksit politikanızı
            Bakanlığın gelecekte alacağı kararlara kolayca uyarlanabilecek
            şekilde güncelliyor ve bayi/distribütör ağınızla olan
            sözleşmelerinizi aynı çerçevede gözden geçiriyoruz. Ayrı bir
            hukuk bürosu aramanıza gerek kalmadan, mevzuat takibini ve
            sözleşme güncellemesini tek noktadan yürütebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin taksit ve satış sözleşmesi politikasını birlikte
              gözden geçirmek için bizimle iletişime geçebilirsiniz.
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
              Taksitli satışlarda artık hiç süre sınırı yok mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Yönetmelik metninde artık yazılı, sabit bir ay sınırı yok.
              Ancak Ticaret Bakanlığı, kendisine verilen yetkiyle istediği
              an yeni bir süre veya ek sınırlama getirebilir. Bu kararlar
              yayımlandığı andan itibaren bağlayıcı olacağı için, tamamen
              sınırsız ve kalıcı bir serbestlik olarak değerlendirmemek
              gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Araç satışında 2 milyon TL üzeri taksit yasağı hâlâ geçerli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Taşıt satışlarındaki fatura değerine göre kademeli
              süre sınırları ve üst tutardaki taksit yasağını içeren fıkra,
              15 Ekim 2026 değişikliğiyle tamamen yürürlükten kaldırıldı.
              Bakanlık yeni bir sınır getirene kadar madde metninde bu
              yönde bir hüküm bulunmuyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuyumcular külçe altını taksitle satabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Eski düzenlemede külçe ve basılı kuyum ürünlerinde taksitli
              satış tamamen yasaktı, işlenmiş ürünlerde ise süre 3 ayla
              sınırlıydı. Bu sınırları içeren fıkra da kaldırıldığı için,
              madde metninde şu an bu yönde bir yasak bulunmuyor. Bakanlığın
              bu konuda ayrı bir karar alıp almayacağı takip edilmeli.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kredi kartıyla taksitli alışverişteki sınırlar da mı değişti?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bu yönetmelik değişikliği, satıcı ile tüketici
              arasındaki vadeli (taksitli) satış sözleşmelerini düzenliyor.
              Kredi kartıyla taksit uygulaması ayrı bir alan olup BDDK&apos;nın
              düzenlemelerine tabi; bu değişiklikle doğrudan değişmedi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ticaret Bakanlığı&apos;nın yeni bir taksit kararı alıp almadığını nereden takip edebilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              Değişiklik, Bakanlığın bu kapsamda alacağı kararları kendi
              internet sitesinde ilan edeceğini ve üst meslek kuruluşlarına
              göndereceğini öngörüyor. Dolayısıyla ticaret.gov.tr üzerindeki
              duyuruları ve bağlı olduğunuz oda/birlik bildirimlerini
              düzenli takip etmek gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Mevcut satış sözleşmelerimdeki eski taksit süresi hükümleri geçersiz mi oldu?
            </h3>
            <p className="leading-8 text-gray-700">
              Değişiklik kendiliğinden tüm sözleşmeleri iptal etmiyor,
              ancak sözleşme ve ön bilgilendirme formu metinlerinizde eski
              yönetmelik maddesine veya artık yürürlükte olmayan ay
              sınırlarına doğrudan atıf varsa, bu metinleri güncel duruma
              uyarlamanız ve ileride Bakanlık yeni bir sınır getirdiğinde
              tekrar değiştirmek zorunda kalmamak için esnek bir ifadeye
              geçmeniz önerilir.
            </p>
          </div>
        </div>
      </section>

      {/* SONUÇ */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          15 Ekim 2026&apos;daki değişiklik, yıllardır taşıt, kuyum,
          elektronik, mobilya ve seyahat sektörlerinde bilinen sabit taksit
          süresi tablosunu yönetmelik metninden çıkararak, bu alandaki
          düzenleme yetkisini tamamen Ticaret Bakanlığı&apos;na bıraktı. Kısa
          vadede işletmelere esneklik sağlayan bu değişiklik, aynı zamanda
          Bakanlığın ne zaman ve ne yönde yeni bir karar alacağı belli
          olmayan bir takip yükümlülüğü de getiriyor. Taksitli satış hacmi
          yüksek olan işletmelerin, satış sözleşmelerini şimdiden güncel ve
          esnek bir dille yeniden kurgulaması, ileride tekrar tekrar metin
          değiştirmek zorunda kalmamak için en pratik yol.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin satış sözleşmesi, ön bilgilendirme formu ve
          bayi/distribütör anlaşmalarının bu değişiklik karşısındaki
          durumunu birlikte değerlendirmek için Koray Akdağ / Sistem Global
          Danışmanlık olarak yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/ticari-sozlesme-yonetimi-tedarikci-bayi-distributorluk-sozlesmeleri"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TİCARİ SÖZLEŞMELER • İŞ GELİŞTİRME • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticari Sözleşme Yönetimi: Tedarikçi, Bayi ve Distribütörlük Sözleşmelerinde Dikkat Edilmesi Gerekenler</h3>
          </Link>
          <Link
            href="/blog/isveren-calisan-e-postasini-denetleyebilir-mi-kvkk-ilke-karari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KVKK • İŞ HUKUKU • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İşveren Çalışanın Kurumsal E-Postasını Denetleyebilir mi? KVKK&apos;nın 2026 İlke Kararı Ne Diyor?</h3>
          </Link>
          <Link
            href="/blog/kidem-tazminati-ihbar-suresi-fesih-mevzuati-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İŞ HUKUKU • FESİH VE KIDEM MEVZUATI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Kıdem Tazminatı, İhbar Süresi ve Fesih Mevzuatı: İşverenler İçin 2026 Rehberi</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Taksitli satışlarda artık hiç süre sınırı yok mu?","acceptedAnswer":{"@type":"Answer","text":"Yönetmelik metninde artık yazılı, sabit bir ay sınırı yok. Ancak Ticaret Bakanlığı, kendisine verilen yetkiyle istediği an yeni bir süre veya ek sınırlama getirebilir. Bu kararlar yayımlandığı andan itibaren bağlayıcı olacağı için, tamamen sınırsız ve kalıcı bir serbestlik olarak değerlendirmemek gerekir."}},{"@type":"Question","name":"Araç satışında 2 milyon TL üzeri taksit yasağı hâlâ geçerli mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Taşıt satışlarındaki fatura değerine göre kademeli süre sınırları ve üst tutardaki taksit yasağını içeren fıkra, 15 Ekim 2026 değişikliğiyle tamamen yürürlükten kaldırıldı. Bakanlık yeni bir sınır getirene kadar madde metninde bu yönde bir hüküm bulunmuyor."}},{"@type":"Question","name":"Kuyumcular külçe altını taksitle satabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Eski düzenlemede külçe ve basılı kuyum ürünlerinde taksitli satış tamamen yasaktı, işlenmiş ürünlerde ise süre 3 ayla sınırlıydı. Bu sınırları içeren fıkra da kaldırıldığı için, madde metninde şu an bu yönde bir yasak bulunmuyor. Bakanlığın bu konuda ayrı bir karar alıp almayacağı takip edilmeli."}},{"@type":"Question","name":"Kredi kartıyla taksitli alışverişteki sınırlar da mı değişti?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Bu yönetmelik değişikliği, satıcı ile tüketici arasındaki vadeli (taksitli) satış sözleşmelerini düzenliyor. Kredi kartıyla taksit uygulaması ayrı bir alan olup BDDK'nın düzenlemelerine tabi; bu değişiklikle doğrudan değişmedi."}},{"@type":"Question","name":"Ticaret Bakanlığı'nın yeni bir taksit kararı alıp almadığını nereden takip edebilirim?","acceptedAnswer":{"@type":"Answer","text":"Değişiklik, Bakanlığın bu kapsamda alacağı kararları kendi internet sitesinde ilan edeceğini ve üst meslek kuruluşlarına göndereceğini öngörüyor. Dolayısıyla ticaret.gov.tr üzerindeki duyuruları ve bağlı olduğunuz oda/birlik bildirimlerini düzenli takip etmek gerekiyor."}},{"@type":"Question","name":"Mevcut satış sözleşmelerimdeki eski taksit süresi hükümleri geçersiz mi oldu?","acceptedAnswer":{"@type":"Answer","text":"Değişiklik kendiliğinden tüm sözleşmeleri iptal etmiyor, ancak sözleşme ve ön bilgilendirme formu metinlerinizde eski yönetmelik maddesine veya artık yürürlükte olmayan ay sınırlarına doğrudan atıf varsa, bu metinleri güncel duruma uyarlamanız ve ileride Bakanlık yeni bir sınır getirdiğinde tekrar değiştirmek zorunda kalmamak için esnek bir ifadeye geçmeniz önerilir."}}]}) }}
      />
    </BlogLayout>
  );
}
