import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Bağımsız Denetim Eşik Değerleri 2026 Değişti | Koray Akdağ",
  description: "KGK'nın yükselttiği bağımsız denetim eşikleri (500 milyon TL aktif, 1 milyar TL ciro) hangi şirketleri kapsıyor? 2026 rehberi.",
  keywords: [
    "bağımsız denetim eşik değerleri 2026",
    "bağımsız denetime tabi olma kriterleri",
    "11066 sayılı cumhurbaşkanı kararı",
    "bağımsız denetim kimler tabi 2026",
    "KGK bağımsız denetim ölçütleri",
    "bağımsız denetimden çıkma şartları",
    "aktif toplamı net satış hasılatı çalışan sayısı",
    "şirketler ne zaman bağımsız denetime tabi olur",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Bağımsız Denetim Eşik Değerleri 2026'da Değişti: Yeni Kriterler Şirketinizi Nasıl Etkiliyor?"
      description="KGK'nın 17 Mart 2026 tarihli 11066 sayılı Cumhurbaşkanı Kararı ile bağımsız denetime tabi olma eşik değerleri yeniden belirlendi. Yeni ve eski rakamlar, kapsama giriş/çıkış kuralları, 7 Mayıs 2026 usul güncellemesi ve şirketinizin durumunu netleştirmek için izlemeniz gereken adımlar."
      category="BAĞIMSIZ DENETİM • MALİ MÜŞAVİRLİK • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="bagimsiz-denetim-esik-degerleri-2026-degisti"
      coverImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu&apos;nun
            (KGK) önerisi üzerine 17 Mart 2026 tarihli ve 33199 sayılı Resmî
            Gazete&apos;de yayımlanan 11066 sayılı Cumhurbaşkanı Kararı,
            şirketlerin bağımsız denetime tabi olma eşik değerlerini önemli
            ölçüde yükseltti. Ardından 7 Mayıs 2026&apos;da yayımlanan usul ve
            esas düzenlemesiyle kapsam belirleme mantığında da netleştirmeler
            yapıldı. Bu iki gelişme bir araya gelince, geçen yıl bağımsız
            denetime tabi olan ya da olmayan pek çok şirketin durumunun
            2026 hesap dönemi için yeniden değerlendirilmesi gerekiyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Eski ve yeni eşik değerleri tam olarak nedir?</li>
            <li>✔ Hangi şirketler ölçek şartı aranmaksızın denetime tabi?</li>
            <li>✔ Kapsama giriş ve çıkış nasıl belirlenir?</li>
            <li>✔ 7 Mayıs 2026 usul değişikliği ne getirdi?</li>
            <li>✔ Şirketiniz için adım adım değerlendirme süreci</li>
            <li>✔ Dikkat edilmesi gereken kritik noktalar</li>
            <li>✔ Sık sorulan sorular</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Bağımsız Denetim Nedir, Neden Önemli?
            </Link>
            <Link href="#karar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. 2026 Değişikliğinin Kapsamı
            </Link>
            <Link href="#esikler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Eski ve Yeni Eşik Değerleri
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Kimler Tabi? Ölçütsüz ve Ölçüte Bağlı Kapsam
            </Link>
            <Link href="#giris-cikis" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Kapsama Giriş ve Çıkış Kuralları
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Şirketiniz İçin Adım Adım Değerlendirme
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#avantaj" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Kapsam Dışı Kalsanız Bile Bağımsız Denetimin Değeri
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
            1. Bağımsız Denetim Nedir, Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Bağımsız denetim, bir şirketin finansal tablolarının gerçeği
            dürüst bir biçimde yansıtıp yansıtmadığının, yetkilendirilmiş
            bağımsız denetim kuruluşları veya denetçiler tarafından
            uluslararası denetim standartlarına uygun şekilde incelenmesidir.
            Belirli büyüklüğü aşan şirketler için bu bir tercih değil, kanuni
            bir yükümlülüktür; kapsam dışında kalan şirketler için ise
            genellikle gönüllü tercih edilen ama kurumsal güvenilirliği
            artıran bir araçtır.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Hangi şirketlerin bağımsız denetime tabi olacağı, Cumhurbaşkanı
            Kararları ile belirlenen aktif toplamı, yıllık net satış
            hasılatı ve çalışan sayısı ölçütlerine göre belirlenir. Bu
            ölçütler zaman zaman güncellenir; 2026 yılı, bu güncellemenin
            hem eşik değerler hem de uygulama usulü açısından iki ayrı
            adımda yapıldığı bir yıl oldu.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Neden Bu Kadar Önemli?
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Kapsama girmek, yıllık bağımsız denetim maliyeti ve süreç yükümlülüğü doğurur</li>
              <li>✔ Kapsam dışına çıkmak, bu yükümlülükten muafiyet sağlayabilir</li>
              <li>✔ Banka/finansman süreçlerinde ve yatırımcı görüşmelerinde denetlenmiş tablo talep edilebilir</li>
              <li>✔ Yanlış değerlendirme, şirketi kanuni yaptırım riskiyle karşı karşıya bırakabilir</li>
            </ul>
          </div>
        </section>

        {/* 2. KARAR */}
        <section id="karar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. 2026 Değişikliğinin Kapsamı
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            2026 yılında bağımsız denetim yükümlülüğüne ilişkin iki ayrı
            düzenleme yürürlüğe girdi. Bu iki düzenleme birbirini tamamlıyor;
            ilki rakamları, ikincisi ise bu rakamların nasıl uygulanacağına
            dair usulü değiştirdi.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🗓️ 17 Mart 2026 – Karar No: 11066
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Resmî Gazete: 17.03.2026, Sayı 33199</li>
                <li>✔ Konu: Aktif toplamı, net satış hasılatı ve çalışan sayısı eşik değerlerinin yükseltilmesi</li>
                <li>✔ Yürürlük: 1 Ocak 2026 ve sonrasında başlayan hesap dönemleri</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🗓️ 7 Mayıs 2026 – Usul ve Esas Güncellemesi
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Konu: Kapsam belirlemede ardışık dönemlerde farklı ölçütlerin aşılabilmesine izin verilmesi</li>
                <li>✔ Geçmiş dönemler eski eşiklere göre değerlendirilmeye devam eder</li>
                <li>✔ Enflasyon muhasebesine göre düzenlenmiş mali tabloların esas alınmasına ilişkin açıklık</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. EŞİKLER */}
        <section id="esikler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Eski ve Yeni Eşik Değerleri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Genel ölçüte tabi şirketler için kural aynı kaldı: aşağıdaki üç
            kriterden <strong>en az ikisinin</strong> eşik değerini{" "}
            <strong>art arda iki hesap döneminde</strong> aşan şirketler
            bağımsız denetim kapsamına girer. Değişen, bu eşiklerin kendisi
            oldu.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Ölçüt</th>
                  <th className="p-5">Eski Eşik (11066 Öncesi)</th>
                  <th className="p-5">Yeni Eşik (11066 Sayılı Karar)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Aktif Toplamı</td>
                  <td className="p-5">300.000.000 TL</td>
                  <td className="p-5">500.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Yıllık Net Satış Hasılatı</td>
                  <td className="p-5">600.000.000 TL</td>
                  <td className="p-5">1.000.000.000 TL</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Çalışan Sayısı</td>
                  <td className="p-5">150 kişi</td>
                  <td className="p-5">150 kişi (değişmedi)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Bu Değişikliğin Pratik Anlamı
            </h3>
            <p className="leading-8 text-gray-700">
              Aktif toplamı ve net satış hasılatı eşiklerinin belirgin
              biçimde yükseltilmesi, kapsamı daraltan bir etki yapıyor.
              Eski eşiklere göre bağımsız denetime tabi olan orta ölçekli
              birçok şirket, yeni ve daha yüksek eşikler karşısında 2026
              hesap dönemi itibarıyla kapsam dışına çıkabilir. Ancak bu
              otomatik bir sonuç değildir; şirketin son iki hesap dönemine
              ait verilerinin yeni eşiklerle resmî olarak karşılaştırılması
              gerekir.
            </p>
          </div>
        </section>

        {/* 4. KİMLER */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Kimler Tabi? Ölçütsüz ve Ölçüte Bağlı Kapsam
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Bağımsız denetim kapsamı iki farklı mekanizmayla belirlenir: bir
            grup kuruluş, büyüklüğüne bakılmaksızın doğrudan kapsamdadır;
            diğer şirketler ise yukarıdaki eşik değerlerine göre
            değerlendirilir.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                🏛️ Ölçek Şartı Aranmaksızın Kapsamda
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ BDDK&apos;ye tabi bankalar</li>
                <li>✔ Sermaye piyasası araçları Borsa İstanbul&apos;da işlem gören halka açık şirketler/ihraççılar</li>
                <li>✔ Sigorta, reasürans ve emeklilik şirketleri</li>
                <li>✔ Finansal kiralama, faktoring, finansman ve varlık yönetim şirketleri</li>
                <li>✔ Belirli kamu iktisadi teşebbüsleri ve düzenleyici mevzuatla ayrıca tabi kılınan kuruluşlar</li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                Bu grup için bazı alt kategorilerde (küçük çaplı, halka
                kapalı finansal kuruluşlar gibi) daha düşük tutarlı özel
                eşikler ve kademeli uygulamalar tanınabilir. Şirketinizin
                bu gruba girip girmediğini ve varsa geçerli özel eşiği
                netleştirmek için ilgili düzenleyici otoritenin (BDDK, SPK
                vb.) güncel mevzuatına bakılması gerekir.
              </p>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                📊 Eşik Değerine Göre Değerlendirilen Şirketler
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Yukarıdaki 3 kriterden en az 2&apos;sini</li>
                <li>✔ Art arda iki hesap döneminde aşan</li>
                <li>✔ Anonim, limited ve diğer sermaye şirketleri, şirket toplulukları</li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                Konsolide finansal tablo hazırlayan şirket topluluklarında
                değerlendirme, tek bir şirketin değil grup büyüklüğünün
                esas alınmasıyla yapılabilir. Bu nedenle bağlı ortaklığı
                veya iştiraki olan şirketlerin kapsam analizini grup
                düzeyinde yapması önemlidir.
              </p>
            </div>
          </div>
        </section>

        {/* 5. GİRİŞ ÇIKIŞ */}
        <section id="giris-cikis" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Kapsama Giriş ve Çıkış Kuralları
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Bağımsız denetim kapsamına giriş ve çıkış, tek bir yılın
            sonucuna göre değil, <strong>iki ardışık hesap dönemi</strong>{" "}
            esas alınarak belirlenir:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-[#071A2F]">Kapsama Giriş</h3>
              <p className="leading-7 text-gray-700">
                Üç ölçütten en az ikisinin eşik değeri, art arda iki hesap
                döneminde aşılırsa, şirket takip eden hesap döneminden
                itibaren bağımsız denetime tabi olur.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-[#071A2F]">Kapsamdan Çıkış</h3>
              <p className="leading-7 text-gray-700">
                Halihazırda denetime tabi bir şirket, üç ölçütten en az
                ikisine ait eşik değerlerin altında art arda iki hesap
                dönemi kalırsa, takip eden hesap döneminden itibaren
                denetim kapsamından çıkar.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🔄 7 Mayıs 2026 Usul Güncellemesi Ne Değiştirdi?
            </h3>
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-blue-500">
              <li>
                Ardışık iki dönemde <strong>aşılan ölçütlerin aynı
                olması artık şart değil</strong>. Örneğin bir yıl aktif
                toplamı ve çalışan sayısı, sonraki yıl aktif toplamı ve
                net satış hasılatı eşiği aşılsa dahi kapsama giriş şartı
                gerçekleşmiş sayılabilir.
              </li>
              <li>
                Eşik değerlerde yapılan değişiklikten (17 Mart 2026
                Kararı) <strong>önceki hesap dönemlerine</strong> ilişkin
                kapsam değerlendirmeleri, o dönemde geçerli olan eski
                eşiklere göre yapılmaya devam eder; yeni eşikler geriye
                dönük uygulanmaz.
              </li>
              <li>
                Enflasyon düzeltmesine tabi finansal tablolarda hangi
                dönemin (düzeltilmiş/düzeltilmemiş, genel kurulda onaylı)
                esas alınacağına ilişkin açıklık getirildi; bu, özellikle
                2022 ve 2025 dönemlerini karşılaştıran şirketler için
                önemlidir.
              </li>
            </ul>
          </div>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Şirketiniz İçin Adım Adım Değerlendirme
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Bağımsız denetim kapsamında olup olmadığınızı netleştirmek için
            aşağıdaki adımları izlemeniz, hem uyum riskini hem de yıl sonuna
            doğru yaşanabilecek zaman baskısını azaltır.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📂</div>
              <h3 className="text-xl font-bold">1. Verileri Toplayın</h3>
              <p className="mt-3 text-sm text-gray-600">
                Son iki hesap dönemine ait aktif toplamı, net satış hasılatı
                ve ortalama çalışan sayısı verilerini bir araya getirin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📐</div>
              <h3 className="text-xl font-bold">2. Yeni Eşiklerle Karşılaştırın</h3>
              <p className="mt-3 text-sm text-gray-600">
                Her iki dönem için de verileri 500 milyon TL / 1 milyar TL /
                150 çalışan eşikleriyle karşılaştırın.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏢</div>
              <h3 className="text-xl font-bold">3. Grup Büyüklüğünü Kontrol Edin</h3>
              <p className="mt-3 text-sm text-gray-600">
                Bağlı ortaklık/iştirakiniz varsa değerlendirmeyi konsolide
                büyüklük üzerinden de yapın.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧾</div>
              <h3 className="text-xl font-bold">4. Ölçütsüz Kapsamı Kontrol Edin</h3>
              <p className="mt-3 text-sm text-gray-600">
                Faaliyet alanınız (finans, sigorta, halka açıklık vb.)
                nedeniyle ölçek şartından bağımsız kapsamda olup
                olmadığınızı doğrulayın.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📋</div>
              <h3 className="text-xl font-bold">5. Sonucu Belgeleyin</h3>
              <p className="mt-3 text-sm text-gray-600">
                Kapsam değerlendirmenizi, dayanak mali tablo ve
                hesaplamalarla birlikte yazılı olarak kayıt altına alın.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🤝</div>
              <h3 className="text-xl font-bold">6. Denetim Sürecini Planlayın</h3>
              <p className="mt-3 text-sm text-gray-600">
                Kapsamdaysanız yetkili bir bağımsız denetim kuruluşuyla
                erken temasa geçip denetim takvimini planlayın.
              </p>
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
              <li>
                Eşiklerin yükselmesi <strong>otomatik olarak kapsam
                dışı kaldığınız</strong> anlamına gelmez; iki ardışık
                dönem şartının gerçekleşip gerçekleşmediği resmî
                verilerle teyit edilmelidir.
              </li>
              <li>
                Kapsamdan çıkış da giriş de{" "}
                <strong>tek bir yılın sonucuna göre değil</strong>{" "}
                art arda iki hesap dönemine göre belirlenir; sadece son
                yılın rakamlarına bakarak karar vermek hatalı sonuçlara
                yol açabilir.
              </li>
              <li>
                Konsolide finansal tablo hazırlayan gruplarda, tek bir
                bağlı şirketin küçük görünmesi, grup büyüklüğü nedeniyle
                yanıltıcı olabilir.
              </li>
              <li>
                Kapsamda olduğu hâlde bağımsız denetim yaptırmayan
                şirketler için kanuni ve idari yaptırımlar söz konusu
                olabilir; bu nedenle şüpheli durumlarda &quot;kapsam
                dışıyım&quot; varsayımıyla hareket etmek risklidir.
              </li>
              <li>
                7 Mayıs 2026 usul güncellemesiyle farklı yıllarda farklı
                ölçütlerin aşılabilmesine izin verilmesi, önceden
                &quot;kapsam dışı&quot; kabul edilen bazı şirketlerin
                yeniden gözden geçirilmesini gerektirebilir.
              </li>
              <li>
                Güncel yükümlülükler için KGK&apos;nın yürürlükteki
                kararları ve resmî duyuruları esas alınmalı, ikincil
                kaynaklardaki özet bilgilerle nihai karar verilmemelidir.
              </li>
            </ul>
          </div>
        </section>

        {/* 8. AVANTAJLAR */}
        <section id="avantaj" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Kapsam Dışı Kalsanız Bile Bağımsız Denetimin Değeri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Eşiklerin yükseltilmesiyle kanuni yükümlülük kapsamı dışına
            çıkan şirketler için bile bağımsız denetim, stratejik açıdan
            değerli bir araç olmaya devam ediyor. Özellikle aşağıdaki
            durumlarda gönüllü bağımsız denetim veya en azından bağımsız
            denetim standardında bir mali inceleme, şirketin elini
            güçlendirir:
          </p>
          <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">
            <li>
              <strong>Banka ve finansman süreçlerinde</strong>: Denetlenmiş
              finansal tablolar, kredi ve limit değerlendirmelerinde
              güven artırıcı bir belge olarak kullanılabilir.
            </li>
            <li>
              <strong>Şirket birleşme, devralma ve ortaklık
              görüşmelerinde</strong>: Şirket değerleme ve due diligence
              süreçlerinde bağımsız denetimden geçmiş tablolar, tarafların
              güvenini ve müzakere gücünü artırır.
            </li>
            <li>
              <strong>Yurt dışı yatırımcı veya ihracat pazarlarında</strong>:
              Uluslararası muhataplar, denetlenmemiş tablolara temkinli
              yaklaşabilir; bağımsız denetim raporu bu tereddüdü azaltır.
            </li>
            <li>
              <strong>Kurumsallaşma sürecinde</strong>: Aile şirketlerinin
              profesyonel yönetime geçişinde, bağımsız denetim iç
              kontrol ve raporlama disiplinini güçlendirir.
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
                Yeni eşik değerler ne zaman yürürlüğe girdi?
              </h3>
              <p className="leading-8 text-gray-700">
                17 Mart 2026 tarihli ve 33199 sayılı Resmî Gazete&apos;de
                yayımlanan 11066 sayılı Cumhurbaşkanı Kararı, 1 Ocak 2026
                ve sonrasında başlayan hesap dönemlerinde uygulanmak üzere
                yürürlüğe girdi.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Şirketim geçen yıl kapsamdaydı, bu yıl da otomatik olarak kapsamda mı sayılır?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Kapsam, her yıl güncel eşik değerlere göre, art arda
                iki hesap dönemi esas alınarak yeniden değerlendirilir.
                Eski eşiklere göre kapsamda olan bir şirket, yeni ve daha
                yüksek eşikler karşısında kapsam dışına çıkabilir; ancak
                bunun için resmî bir değerlendirme yapılması gerekir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Üç ölçütten sadece birini aşan bir şirket denetime tabi olur mu?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Kapsama girmek için üç ölçütten (aktif toplamı, net
                satış hasılatı, çalışan sayısı) en az ikisinin eşik
                değerinin, art arda iki hesap döneminde aşılması gerekir.
                Tek bir ölçütün aşılması yeterli değildir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Kapsam dışında kalan bir şirket yine de bağımsız denetim yaptırabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet. Kanuni yükümlülük kapsamı dışında kalan şirketler
                de gönüllü olarak bağımsız denetim yaptırabilir. Banka,
                yatırımcı veya iş ortağı ilişkilerinde denetlenmiş
                finansal tablo sunmak isteyen şirketler için bu, ticari
                bir avantaja dönüşebilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Halka açık olmayan bir sigorta veya finansman şirketi eşik değerine bakılmaksızın tabi midir?
              </h3>
              <p className="leading-8 text-gray-700">
                Bankalar, sigorta/reasürans/emeklilik şirketleri ile
                finansal kiralama, faktoring ve finansman şirketleri gibi
                belirli faaliyet konusuna sahip kuruluşlar, genel kural
                olarak ölçek şartı aranmaksızın bağımsız denetime tabidir.
                Bu kategorideki bazı küçük ölçekli kuruluşlar için özel
                ve daha düşük eşikler uygulanabileceğinden, ilgili
                düzenleyici otoritenin (BDDK, SPK vb.) güncel mevzuatının
                kontrol edilmesi önerilir.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Bağımsız Denetim Kapsam Durumunuzu Netleştirelim
            </h3>
            <p className="leading-8 text-gray-700">
              Yeni eşik değerlere göre şirketinizin bağımsız denetim
              kapsamına girip girmediğini ve kapsama giriş/çıkış
              kurallarının şirketinizi nasıl etkilediğini netleştirmek,
              hazırlık sürecini zamanında başlatmanızı sağlar.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Denetim kapsam durumunuzu değerlendirmemiz için bizimle
                iletişime geçin.
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
            2026, bağımsız denetim yükümlülüğü açısından iki katmanlı bir yıl
            oldu: 17 Mart 2026&apos;da eşik değerler belirgin biçimde
            yükseltilerek kapsam daraltıldı, 7 Mayıs 2026&apos;da ise kapsam
            belirleme usulünde önemli netleştirmeler yapıldı. Bu tablo,
            şirketlerin &quot;bağımsız denetime tabi miyim&quot; sorusunu
            güncel verilerle ve güncel usulle yeniden sormasını gerektiriyor
            — özellikle 2026 hesap dönemi kapanışına yaklaşırken bu
            değerlendirmeyi erken yapmak, hem uyum riskini hem de olası
            zaman baskısını önemli ölçüde azaltır.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin güncel eşik değerlere göre bağımsız denetim
            kapsamında olup olmadığının netleştirilmesi, denetim sürecinin
            planlanması ve sonrasındaki mali müşavirlik, tam tasdik ve
            raporlama süreçlerinin yürütülmesi konusunda Koray Akdağ /
            Sistem Global Danışmanlık olarak yanınızdayız. Ayrı bir mali
            müşavirlik veya denetim firması aramanıza gerek kalmadan; kapsam
            analizinden bağımsız denetim sürecine, tam tasdik ve KDV iade
            süreçlerinden şirket değerleme çalışmalarına kadar tüm süreci
            tek noktadan yürütebiliriz. Şirketinizin bağımsız denetim
            yükümlülüğünü birlikte değerlendirmek için bizimle iletişime
            geçebilirsiniz.
          </p>
        </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • TSRS • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">TSRS Sürdürülebilirlik Raporlama Zorunluluğu 2026</h3>
        </Link>
        <Link
          href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ & FİNANSAL YÖNETİM • DANIŞMANLIK • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ'nin İhtiyacı?</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
