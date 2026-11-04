import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "E-KİP (e-Kolay İhracat Platformu) Nedir, Nasıl Kullanılır? | Koray Akdağ",
  description:
    "Ticaret Bakanlığı'nın ücretsiz dijital e-ihracat rehberlik platformu E-KİP: hangi modülleri sunuyor, kimler kullanabilir, kolayihracat.gov.tr'ye nasıl kayıt olunur ve nakdi E-İhracat Destek Programı'ndan farkı nedir; 2026 güncel rehber.",
  keywords: [
    "E-KİP nedir",
    "e-Kolay İhracat Platformu",
    "kolayihracat.gov.tr",
    "Ticaret Bakanlığı e-ihracat platformu",
    "e-ihracat nasıl başlanır",
    "Akıllı E-İhracat Robotu",
    "e-ihracat destek programı",
    "e-ihracat rehberi 2026",
  ],
  alternates: {
    canonical: "/blog/e-kip-e-kolay-ihracat-platformu-nedir-nasil-kullanilir",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="E-KİP (e-Kolay İhracat Platformu) Nedir? KOBİ'ler Ücretsiz Devlet Danışmanlığıyla E-İhracata Nasıl Başlar?"
      description="Ticaret Bakanlığı'nın kolayihracat.gov.tr adresinde sunduğu E-KİP, e-ihracata başlamak veya büyütmek isteyen şirketlere ücretsiz pazar/sektör analizi, mevzuat rehberliği ve yapay zekâ destekli danışmanlık sağlıyor. Platformun modülleri, kayıt süreci ve nakdi destek programlarından farkıyla güncel rehber."
      category="TİCARET BAKANLIĞI • E-İHRACAT PLATFORMU • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="e-kip-e-kolay-ihracat-platformu-nedir-nasil-kullanilir"
      coverImage="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="E-İhracat Yol Haritanızı Birlikte Kurgulayalım"
      ctaText="E-KİP'in sunduğu ülke/sektör verilerini şirketinizin ürün ve kapasite yapısına göre yorumlamaktan, e-ihracat destek başvurunuzun hazırlanmasına kadar süreci birlikte yürütüyoruz. E-ihracata hazır olup olmadığınızı değerlendirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ E-KİP, Ticaret Bakanlığı&apos;nın <strong>ücretsiz</strong> sunduğu, e-ihracata başlamak veya mevcut e-ihracatını büyütmek isteyen şirket ve gerçek kişilere rehberlik eden dijital bir platform; bir nakdi destek veya hibe programı <strong>değildir</strong>.</li>
          <li>✔ 2020&apos;den beri hizmet veren Kolay İhracat Platformu&apos;nun (KİP) e-ihracata özel uzantısı olarak <strong>28 Şubat 2025</strong>&apos;te kamuoyuna tanıtıldı ve <strong>Ağustos 2026</strong>&apos;da &quot;Kamu-Dijital Dönüşüm&quot; kategorisinde birincilik ödülü aldı.</li>
          <li>✔ Bakanlığın açıklamasına göre platformda birbiriyle entegre çalışan <strong>12 modül</strong> bulunuyor: hedef ülke ve sektör analizleri, ihracat kokpiti, mevzuat rehberi, firma kaydı ve yapay zekâ destekli &quot;Akıllı E-İhracat Robotu&quot; bunlardan bazıları.</li>
          <li>✔ Bireyler <strong>kolayihracat.gov.tr</strong> adresine e-Devlet şifresiyle, şirketler ise <strong>MERSİS</strong> entegrasyonu üzerinden kurumsal hesap açıp personelini yetkilendirerek giriş yapabiliyor.</li>
          <li>✔ E-KİP&apos;i, Ticaret Bakanlığı&apos;nın ayrı bir genelgeyle yürüttüğü ve pazaryeri komisyonu, depolama/fulfillment, tanıtım gibi giderlerin bir kısmını nakden karşılayan <strong>E-İhracat Destek Programı</strong> ile karıştırmamak gerekiyor; ikisi farklı araçlar ve birlikte kullanılabiliyor.</li>
          <li>✔ Platformun belirli bir başvuru dönemi veya kontenjanı yok; dilediğiniz zaman kayıt olup kullanmaya başlayabilirsiniz.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. E-KİP Nedir, Kim Yönetiyor?
          </Link>
          <Link href="#moduller" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Platformun Modülleri ve Sunduğu Araçlar
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Kullanabilir?
          </Link>
          <Link href="#kayit" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Nasıl Kayıt Olunur, Nasıl Giriş Yapılır?
          </Link>
          <Link href="#ne-saglar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. E-KİP&apos;ten Somut Olarak Ne Elde Edersiniz?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Karıştırmayın: E-KİP ile E-İhracat Destek Programı
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

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. E-KİP Nedir, Kim Yönetiyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          E-ihracata başlamak isteyen pek çok KOBİ için ilk engel sermaye değil,
          bilgi eksikliği oluyor. Hangi ülkeye hangi ürün satılır, o pazarda
          hangi gümrük kuralı geçerlidir, hangi pazaryeri doğru kanaldır
          sorularının cevabını bulmak için genellikle ücretli danışmanlık
          şirketlerine başvuruluyor. Ticaret Bakanlığı, bu bilgi açığını
          kapatmak için 2020&apos;den beri <strong>Kolay İhracat Platformu
          (KİP)</strong>&apos;nu işletiyor; platformun e-ihracata özel
          uzantısı olan <strong>E-KİP (e-Kolay İhracat Platformu)</strong> ise
          28 Şubat 2025 tarihinde düzenlenen bir lansman töreniyle
          kamuoyuna tanıtıldı.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Platform, Ticaret Bakanlığı tarafından yönetiliyor ve tamamen
          <strong> ücretsiz</strong>. Ağustos 2026&apos;da, 11&apos;inci
          Verimlilik Proje Ödülleri kapsamında &quot;Kamu-Dijital
          Dönüşüm&quot; kategorisinde birincilik ödülü aldı; bu, 2025 ve
          2026 döneminde 49 ilden 451 projenin değerlendirildiği, 72
          projenin finale kaldığı bir yarışmaydı. Bakanlık, platformu
          sürekli güncellediğini ve yeni modüller eklediğini açıklıyor;
          bu nedenle aşağıdaki bilgileri okurken platformun canlı bir
          hizmet olduğunu ve zaman içinde değişebileceğini göz önünde
          bulundurmanız gerekiyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            E-KİP&apos;in amacı, bir şirketin e-ihracata hedef pazar seçiminden
            satış kanalı kurulumuna, operasyonel planlamadan küresel
            rekabete hazırlığa kadar her aşamasında ücretsiz rehberlik
            sunmak. Yani platform bir finansman kaynağı değil, bir{" "}
            <strong>bilgi ve yönlendirme aracı</strong>.
          </p>
        </div>
      </section>

      {/* 2. MODÜLLER */}
      <section id="moduller" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Platformun Modülleri ve Sunduğu Araçlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ticaret Bakanlığı&apos;nın resmî açıklamasına göre E-KİP, birbiriyle
          entegre çalışan 12 modülden oluşuyor; yapay zekâ destekli araçlar,
          hedef ülke ve sektör analizleri, eğitim içerikleri ile adım adım
          uygulama kılavuzları bunların başında geliyor. Platform sürekli
          geliştirildiği için modül isimleri zaman içinde değişebiliyor;
          aşağıdaki tabloda Bakanlığın farklı tarihli açıklamalarında öne
          çıkan ana başlıkları, güncel ve genel kategoriler hâlinde
          derledik:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Modül / Araç</th>
                <th className="p-5">İşlevi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ülke Sayfaları</td>
                <td className="p-5">Hedef ülkenin genel görünümü, mevzuatı ve geçmiş yıllara ait dış ticaret verileri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sektör Sayfaları</td>
                <td className="p-5">Küresel sektör trendleri, sektörel haberler ve gelişmeler</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İhracat Kokpiti</td>
                <td className="p-5">Kullanıcının seçtiği öncelikli ülke ve pazarlara ilişkin ihracat rejimi ve gümrük kurallarının takibi</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mevzuat Modülü</td>
                <td className="p-5">İhracat ve e-ihracata ilişkin güncel mevzuatın derlenmiş hâli</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Firma Kayıt / Kullanıcı Kokpiti</td>
                <td className="p-5">Kurumsal hesap oluşturma, personel yetkilendirme ve kullanıcı bazlı panel</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Akıllı E-İhracat Robotu</td>
                <td className="p-5">Gerçek zamanlı veri akışıyla yenilenen, soru-cevap tabanlı yapay zekâ asistanı</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bakanlık ayrıca, e-ihracatçılara lojistik süreçlerinde sohbet botu
          destekli adım adım rehberlik sunacak bir &quot;Adım Adım
          Lojistik&quot; modülünün eklenmesini planladığını duyurdu. Güncel
          modül listesini ve her birinin tam kapsamını, platforma giriş
          yaptıktan sonra ana menüden görebilirsiniz.
        </p>
      </section>

      {/* 3. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Kullanabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Platform, tüm T.C. vatandaşlarının kullanımına açık. Pratikte iki
          ana kullanıcı grubu öne çıkıyor:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">👤</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Bireysel Kullanıcılar
            </h3>
            <p className="text-gray-700">
              E-ihracata merak duyan, kendi adına küçük ölçekli satış
              (ör. Etsy, mikro ihracat) yapmayı değerlendiren veya şirket
              kurmadan önce pazar/sektör bilgisi toplamak isteyen kişiler;
              T.C. kimlik numarası ve e-Devlet şifresiyle doğrudan giriş
              yapabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏢</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Şirketler ve KOBİ&apos;ler
            </h3>
            <p className="text-gray-700">
              Mevcut ürününü yurt dışına açmak isteyen üretici/satıcı
              şirketler, e-ihracatını büyütmek isteyen mevcut ihracatçılar;
              MERSİS kaydı üzerinden kurumsal hesap açıp ilgili personelini
              platform üzerinde yetkilendirebiliyor.
            </p>
          </div>
        </div>
      </section>

      {/* 4. KAYIT */}
      <section id="kayit" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Nasıl Kayıt Olunur, Nasıl Giriş Yapılır?
        </h2>
        <div className="space-y-6">
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">1</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">kolayihracat.gov.tr Adresine Girin</h3>
              <p className="text-gray-700">Platformun ana sayfasından &quot;e-ihracat&quot; bölümüne yönlenin.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">2</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Bireysel veya Kurumsal Girişi Seçin</h3>
              <p className="text-gray-700">Kendi adınıza kullanacaksanız e-Devlet şifrenizle; şirket adına kullanacaksanız MERSİS bilgilerinizle kurumsal hesap açma adımına geçin.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">3</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Kurumsal Hesapta Yetkilendirme Yapın</h3>
              <p className="text-gray-700">Şirket yetkilisi, platformu kullanacak personeli (ihracat sorumlusu, dış ticaret uzmanı vb.) sisteme tanımlayıp yetkilendirir.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">4</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Hedef Ülke ve Sektör Sayfalarını İnceleyin</h3>
              <p className="text-gray-700">Ürün grubunuza uygun ülkeleri ve o ülkelerdeki sektörel verileri karşılaştırın.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">5</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">İhracat Kokpiti&apos;nde Takip Listesi Oluşturun</h3>
              <p className="text-gray-700">Önceliklendirdiğiniz pazarları takibe alın; ihracat rejimi ve gümrük kurallarındaki güncellemeleri buradan izleyin.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">6</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Akıllı E-İhracat Robotu&apos;nu Kullanın</h3>
              <p className="text-gray-700">Süreç ve mevzuatla ilgili sorularınızı yapay zekâ destekli asistana yönelterek hızlı ön bilgi alın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NE SAĞLAR */}
      <section id="ne-saglar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. E-KİP&apos;ten Somut Olarak Ne Elde Edersiniz?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Platformu doğru kullanan bir şirket için E-KİP, ücretli bir pazar
          araştırması raporunun yerini tam olarak tutmasa da, o sürecin
          başlangıç noktasını ücretsiz şekilde sağlıyor:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>Hedef ülke ve sektör seçiminde ön eleme yapabileceğiniz güncel dış ticaret verileri</li>
          <li>Seçtiğiniz pazarlara ilişkin ihracat rejimi ve gümrük kurallarının tek bir panelden takibi</li>
          <li>Mevzuat değişikliklerini tek tek resmî kaynaklardan taramak yerine derlenmiş bir özet</li>
          <li>Süreç ve prosedür sorularınıza 7/24 erişebileceğiniz bir yapay zekâ asistanı</li>
          <li>Kurumsal hesapta birden fazla çalışanın aynı panel üzerinden koordineli çalışabilmesi</li>
        </ul>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Uygulamada en sık gözden kaçan
            nokta, E-KİP&apos;in sunduğu ücretsiz pazar ve sektör verilerinin
            bir danışmanlık raporunun yerine tam olarak geçmediğidir.
            Platform, hedef pazar seçiminde güçlü bir başlangıç noktası
            sunar; ancak ürününüzün gümrük tarife pozisyonuna özgü vergi
            oranları, hedef ülkenin ürün bazlı teknik düzenlemeleri (CE
            dışı sertifika gereksinimleri gibi) ve gerçek lojistik maliyet
            kalemleri genellikle şirkete özel bir değerlendirme gerektirir.
            E-KİP&apos;teki genel verilerle bu şirkete özel detayları
            birlikte ele almak, başvuru ve sevkiyat aşamasında yaşanan
            gecikmeleri önemli ölçüde azaltıyor.
          </p>
        </div>
      </section>

      {/* 6. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karıştırmayın: E-KİP ile E-İhracat Destek Programı
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ İkisi de Ticaret Bakanlığı&apos;na Ait Ama Tamamen Farklı Araçlar
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                E-KİP (e-Kolay İhracat Platformu)
              </p>
              <p className="text-gray-700">
                Ücretsiz bir <strong>dijital rehberlik ve bilgilendirme
                aracı</strong>. Pazar/sektör verisi, mevzuat özeti ve
                yapay zekâ asistanı sunar. Başvuru dönemi, kontenjan veya
                nakdi ödeme içermez; herkes her zaman kullanabilir.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                E-İhracat Destek Programı
              </p>
              <p className="text-gray-700">
                Ticaret Bakanlığı&apos;nın ayrı bir genelgeyle yürüttüğü{" "}
                <strong>nakdi, geri ödemesiz bir teşvik</strong> mekanizması.
                Pazaryeri komisyonu, depolama/fulfillment ve tanıtım gibi
                giderlerinizin belirli bir oranını, ön onay ve belgeleme
                süreci sonrasında Destek Yönetim Sistemi (DYS) üzerinden
                geri öder.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Kısacası: E-KİP&apos;e kayıt olmak, size otomatik olarak nakdi
            bir destek kazandırmaz. E-İhracat Destek Programı&apos;ndan
            yararlanmak isterseniz ayrıca DYS üzerinden, programın kendi
            şartlarına göre başvuru yapmanız gerekiyor. Bu programın
            kapsamını ve güncel oranlarını{" "}
            <Link href="/blog/e-ihracat-amazon-etsy-trendyol-global-satisa-nasil-baslanir#destekler" className="text-orange-600 underline">
              E-İhracat: Amazon, Etsy ve Trendyol Global&apos;de Satışa Nasıl Başlanır yazımızda
            </Link>{" "}
            ayrıca ele aldık. İki araç birbirini dışlamıyor, aksine
            tamamlıyor: E-KİP ile pazarınızı ve sürecinizi öğrenip,
            E-İhracat Destek Programı ile operasyon giderlerinizin bir
            kısmını geri alabilirsiniz.
          </p>
        </div>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Platform tamamen ücretsizdir; &quot;E-KİP üzerinden ücretli danışmanlık&quot; diyen üçüncü taraflara karşı dikkatli olun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Modül isimleri ve kapsamı zaman içinde güncelleniyor; platformu düzenli ziyaret edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kurumsal girişte yetkilendirme MERSİS üzerinden yapıldığından şirket yetkilisinin MERSİS kaydının güncel olması gerekiyor
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Platformdaki bilgiler genel rehberlik niteliğindedir; şirketinize özel karar için ayrıca uzman değerlendirmesi alın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ E-İhracat Destek Programı&apos;ndan yararlanmak için E-KİP kaydı yetmez, ayrıca DYS üzerinden başvuru gerekir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yapay zekâ asistanının verdiği yanıtları, kritik kararlardan önce resmî mevzuat metniyle teyit edin
          </div>
        </div>
      </section>

      {/* 8. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı aşağıdaki birincil kaynaklara dayanmaktadır. Platformun
          güncel modül listesini ve kapsamını doğrudan bu kaynaklardan
          teyit etmenizi öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <a href="https://www.ticaret.gov.tr/haberler/e-kip-kamu-dijital-donusumunde-zirvede" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ticaret Bakanlığı &quot;E-KİP Kamu-Dijital Dönüşümünde Zirvede&quot; haberi
            </a>
          </li>
          <li>
            <a href="https://www.kolayihracat.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              kolayihracat.gov.tr (E-KİP platformu)
            </a>
          </li>
          <li>
            <a href="https://ticaret.gov.tr/data/6447baf113b8761694f892bb/E-İHRACAT DESTEKLERİNE İLİŞKİN GENELGE.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ticaret Bakanlığı &quot;E-İhracat Desteklerine İlişkin Genelge&quot;
            </a>
          </li>
          <li>
            <a href="https://ticaret.gov.tr/destekler/ihracat-destekleri" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ticaret Bakanlığı İhracat Destekleri sayfası
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
              E-KİP ücretli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. E-KİP, Ticaret Bakanlığı tarafından tüm T.C.
              vatandaşlarının ve şirketlerin kullanımına tamamen ücretsiz
              olarak sunuluyor. Herhangi bir üyelik ücreti, abonelik veya
              işlem bedeli yok.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              E-KİP ile KİP (Kolay İhracat Platformu) aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Birbiriyle bağlantılı ama aynı değil. KİP, 2020&apos;den beri
              hizmet veren genel ihracat bilgilendirme platformu. E-KİP ise
              bu altyapı üzerine kurulu, özellikle e-ihracata (dijital
              platformlar üzerinden yurt dışı satışa) odaklanan ve 28 Şubat
              2025&apos;te tanıtılan uzantısı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketim olmadan E-KİP&apos;i kullanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Platform tüm T.C. vatandaşlarının kullanımına açık;
              bireysel kullanıcılar e-Devlet şifresiyle giriş yapıp ülke
              ve sektör sayfalarını, mevzuat özetlerini ve yapay zekâ
              asistanını kullanabilir. Kurumsal hesap ve personel
              yetkilendirme özellikleri ise MERSİS kaydı olan şirketlere
              özel.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              E-KİP üzerinden devlet desteği başvurusu yapabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, E-KİP kaydı başlı başına bir destek başvurusu değil.
              Ticaret Bakanlığı&apos;nın nakdi E-İhracat Destek
              Programı&apos;ndan yararlanmak için ayrıca Destek Yönetim
              Sistemi (DYS) üzerinden, programın kendi şartlarına göre
              başvuru yapmanız gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              E-KİP&apos;teki Akıllı E-İhracat Robotu nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Platformun yapay zekâ destekli sohbet botu; e-ihracat süreci,
              mevzuat ve prosedürlerle ilgili sorularınıza gerçek zamanlı
              veri akışına dayanarak yanıt veriyor. Bakanlık, bu aracı 2026
              içinde daha güçlü bir altyapıyla yeniledi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              E-KİP&apos;e nasıl kurumsal (şirket adına) giriş yaparım?
            </h3>
            <p className="leading-8 text-gray-700">
              kolayihracat.gov.tr üzerinden kurumsal giriş seçeneğini
              seçip şirketinizin MERSİS bilgilerini girerek hesap
              açıyorsunuz. Hesabı açan yetkili, ardından ihracat
              operasyonunda görev alan personeli platform üzerinden
              yetkilendirebiliyor.
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
          E-KİP, e-ihracata nereden başlayacağını bilmeyen bir KOBİ için
          ücretsiz ve güvenilir bir ilk durak. Hedef ülke ve sektör
          verilerinden mevzuat rehberliğine kadar birçok bilgiyi tek bir
          panelden sunarak, ücretli bir danışmanlık sürecine girmeden önce
          önemli bir ön hazırlık imkânı veriyor. Ancak platformun bir
          finansman kaynağı olmadığını, gümrük tarife pozisyonu ve lojistik
          maliyeti gibi şirkete özel detayların ayrı bir değerlendirme
          gerektirdiğini unutmamak gerekiyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          E-KİP&apos;in sunduğu ülke/sektör verilerini şirketinizin ürün ve
          kapasite yapısına göre yorumlamaktan, uygun olduğunuz E-İhracat
          Destek Programı veya diğer ihracat destek başvurularının
          hazırlanmasına kadar süreci Koray Akdağ / Sistem Global
          Danışmanlık olarak tek elden yürütüyoruz.{" "}
          <Link href="/#contact" className="text-orange-600 underline">
            E-ihracata hazır olup olmadığınızı birlikte değerlendirelim.
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
            href="/blog/e-ihracat-amazon-etsy-trendyol-global-satisa-nasil-baslanir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">E-İHRACAT • PAZARYERİ SATIŞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">E-İhracat: Amazon, Etsy ve Trendyol Global&apos;de Satışa Nasıl Başlanır?</h3>
          </Link>
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TİCARET BAKANLIĞI • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri 2026</h3>
          </Link>
          <Link
            href="/blog/ihracatci-birligine-uye-olmak-zorunlu-mu-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • İHRACATÇI BİRLİĞİ ÜYELİĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İhracatçı Birliğine Üye Olmak Zorunlu mu?</h3>
          </Link>
          <Link
            href="/blog/turk-eximbank-ihracat-kredisi-ve-alacak-sigortasi-rehberi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT FİNANSMANI • TÜRK EXİMBANK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türk Eximbank İhracat Kredisi ve Alacak Sigortası Rehberi</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"E-KİP ücretli mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. E-KİP, Ticaret Bakanlığı tarafından tüm T.C. vatandaşlarının ve şirketlerin kullanımına tamamen ücretsiz olarak sunuluyor. Herhangi bir üyelik ücreti, abonelik veya işlem bedeli yok."}},{"@type":"Question","name":"E-KİP ile KİP (Kolay İhracat Platformu) aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Birbiriyle bağlantılı ama aynı değil. KİP, 2020'den beri hizmet veren genel ihracat bilgilendirme platformu. E-KİP ise bu altyapı üzerine kurulu, özellikle e-ihracata odaklanan ve 28 Şubat 2025'te tanıtılan uzantısı."}},{"@type":"Question","name":"Şirketim olmadan E-KİP'i kullanabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Evet. Platform tüm T.C. vatandaşlarının kullanımına açık; bireysel kullanıcılar e-Devlet şifresiyle giriş yapıp ülke ve sektör sayfalarını, mevzuat özetlerini ve yapay zekâ asistanını kullanabilir. Kurumsal hesap ve personel yetkilendirme özellikleri ise MERSİS kaydı olan şirketlere özel."}},{"@type":"Question","name":"E-KİP üzerinden devlet desteği başvurusu yapabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır, E-KİP kaydı başlı başına bir destek başvurusu değil. Ticaret Bakanlığı'nın nakdi E-İhracat Destek Programı'ndan yararlanmak için ayrıca Destek Yönetim Sistemi (DYS) üzerinden, programın kendi şartlarına göre başvuru yapmanız gerekiyor."}},{"@type":"Question","name":"E-KİP'teki Akıllı E-İhracat Robotu nedir?","acceptedAnswer":{"@type":"Answer","text":"Platformun yapay zekâ destekli sohbet botu; e-ihracat süreci, mevzuat ve prosedürlerle ilgili sorularınıza gerçek zamanlı veri akışına dayanarak yanıt veriyor. Bakanlık, bu aracı 2026 içinde daha güçlü bir altyapıyla yeniledi."}},{"@type":"Question","name":"E-KİP'e nasıl kurumsal (şirket adına) giriş yaparım?","acceptedAnswer":{"@type":"Answer","text":"kolayihracat.gov.tr üzerinden kurumsal giriş seçeneğini seçip şirketinizin MERSİS bilgilerini girerek hesap açıyorsunuz. Hesabı açan yetkili, ardından ihracat operasyonunda görev alan personeli platform üzerinden yetkilendirebiliyor."}}]}) }}
      />
    </BlogLayout>
  );
}
