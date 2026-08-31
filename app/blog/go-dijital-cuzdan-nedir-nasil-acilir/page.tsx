import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "GO Dijital Cüzdan Nedir? KOSGEB Ödemelerinde Kullanımı ve Hesap Açma Rehberi | Koray Akdağ",
  description:
    "GO Dijital Cüzdan nedir, kim işletiyor, KOSGEB destek ödemelerinde nasıl kullanılıyor? Çerçeve Sözleşmesi, MASAK Sözleşmesi, evrak yükleme ve onay adımlarıyla hesap açma süreci, güvenlik boyutu ve dikkat edilmesi gerekenler.",
  keywords: [
    "GO Dijital Cüzdan nedir",
    "GO Dijital Cüzdan nasıl açılır",
    "GO Dijital Cüzdan hesap açma",
    "KOSGEB dijital cüzdan",
    "GO Dijital Teknoloji Hizmetleri",
    "KOSGEB elektronik cüzdan",
    "GO Dijital MASAK sözleşmesi",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="GO Dijital Cüzdan Nedir? KOSGEB Destek Ödemelerinde Nasıl Kullanılır, Hesap Nasıl Açılır?"
      description="GO Dijital Cüzdan, KOSGEB'in bazı destek ödemelerinde kullandığı elektronik cüzdan altyapısıdır. Kim işletiyor, hangi programda geçerli, hesap açmak için hangi belgeler gerekiyor ve süreç adım adım nasıl işliyor? Güncel ve doğrulanmış bilgilerle rehber."
      category="KOSGEB • DİJİTAL CÜZDAN • 2026"
      date="2026"
      readTime="11 Dakika"
      slug="go-dijital-cuzdan-nedir-nasil-acilir"
      coverImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            KOSGEB&apos;in devreye aldığı yeni finansman programlarından
            biriyle karşılaşan işletmeler, başvuru ekranlarında karşılarına
            çıkan &quot;GO Dijital Cüzdan&quot; ismini genellikle ilk kez
            görüyor. Bu yazıda GO Dijital Cüzdan&apos;ın ne olduğunu, kim
            tarafından işletildiğini, hangi KOSGEB programında somut olarak
            kullanıldığını ve hesap açma sürecinin adım adım nasıl
            işlediğini, güvenlik ve MASAK boyutuyla birlikte açıklıyoruz.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ GO Dijital Cüzdan nedir, kim işletiyor?</li>
            <li>✔ Hangi KOSGEB programında kullanılıyor?</li>
            <li>✔ Hesap açmak için gereken belgeler nelerdir?</li>
            <li>✔ Adım adım kayıt ve onay süreci</li>
            <li>✔ Güvenlik, MASAK ve aydınlatma metni boyutu</li>
            <li>✔ Cüzdanda hangi işlemler yapılabilir?</li>
            <li>✔ Dikkat edilmesi gereken noktalar</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. GO Dijital Cüzdan Nedir?
            </Link>
            <Link href="#nerede-kullaniliyor" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Hangi KOSGEB Programında Kullanılıyor?
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Kimler Hesap Açabilir, Hangi Belgeler Gerekir?
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Adım Adım Hesap Açma Süreci
            </Link>
            <Link href="#guvenlik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Güvenlik ve MASAK Boyutu
            </Link>
            <Link href="#islemler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Cüzdanda Hangi İşlemler Yapılabilir?
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. NEDİR */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. GO Dijital Cüzdan Nedir?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            GO Dijital Cüzdan, <strong>GO Dijital Teknoloji Hizmetleri
            A.Ş.</strong> tarafından işletilen bir elektronik cüzdan / dijital
            ödeme uygulamasıdır. İşletmeler mobil uygulama veya web arayüzü
            üzerinden bir hesap açar, bu hesap üzerinden gelen tutarları
            görüntüleyebilir, tanımlı kartla ödeme yapabilir ve belirli
            işlem türlerini gerçekleştirebilir.
          </p>
          <p className="mb-6 leading-8 text-gray-700">
            KOSGEB, bazı destek/kredi programlarının ödeme akışını
            yönetebilmek için GO Dijital ile bir iş birliği protokolü
            imzalamıştır. Bu protokol kapsamında, ilgili programdan
            yararlanan işletmelere ait tutarlar doğrudan banka hesabına
            değil, önce işletme adına açılan GO Dijital Cüzdan hesabına
            aktarılır; oradan sonraki kullanım, programın kendi kurallarına
            göre şekillenir.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Kısaca GO Dijital Cüzdan
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ GO Dijital Teknoloji Hizmetleri A.Ş. tarafından işletilen bir elektronik cüzdan/ödeme uygulaması</li>
              <li>✔ KOSGEB ile yapılan iş birliği protokolü kapsamında bazı programların ödeme mekanizmasında kullanılıyor</li>
              <li>✔ Hesap açılışı, KOSGEB Müdürlüğü üzerinden imzalanan sözleşmelerle başlıyor</li>
              <li>✔ Mobil uygulama veya web üzerinden kayıt, evrak yükleme ve onay adımlarıyla aktive ediliyor</li>
              <li>✔ Kurumun kendi ödeme altyapısı üzerinden çalışıyor; klasik banka hesabından bağımsız bir katman</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Bir işletmenin GO Dijital Cüzdan ile ilk teması, çoğunlukla
            KOSGEB&apos;in bir programına başvururken karşılaştığı &quot;GO
            Dijital Cüzdan hesabınız yoksa açmanız gerekir&quot; uyarısıyla
            başlar. Bu yazının konusu tam olarak bu noktadır: cüzdanın kendisi
            nedir, hesap nasıl açılır ve süreç ne kadar sürer.
          </p>
        </section>

        {/* 2. NEREDE KULLANILIYOR */}
        <section id="nerede-kullaniliyor" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Hangi KOSGEB Programında Kullanılıyor?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Bu konuda net olmak önemli: GO Dijital Cüzdan&apos;ın resmî
            kaynaklarda (kosgeb.gov.tr) somut ve doğrulanabilir şekilde
            kullanıldığı tek program, 9 Temmuz 2026&apos;da başlayan{" "}
            <strong>KOSGEB Yapay Zeka Kredi Programı</strong>&apos;dır. Bu
            programda Teknogirişim Rozeti sahibi girişimlere tanınan 500 bin
            – 5 milyon TL arasındaki faizsiz kredi limiti, işletmenin banka
            hesabına değil, GO Dijital Cüzdan hesabına blokeli olarak
            aktarılıyor.
          </p>
          <div className="rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ⚠️ Yaygın Bir Karışıklığa Dikkat
            </h3>
            <p className="leading-8 text-gray-700">
              GO Dijital Cüzdan&apos;ın &quot;artık tüm KOSGEB destek
              ödemelerinde kullanılacağı&quot; yönünde bazı ikincil
              kaynaklarda dolaşan genel iddiaları resmî kaynaklarda
              doğrulayamadık. Türkiye Cumhuriyet Merkez Bankası&apos;nın ayrı
              bir çalışması olan dijital para/ödeme altyapısı girişimleri
              bu kapsamın dışındadır ve GO Dijital Cüzdan ile karıştırılmamalıdır.
              Bu yazıda yalnızca resmî olarak doğrulanan kapsamı esas
              alıyoruz; ilerleyen dönemde başka programlara yayılıp
              yayılmayacağı ise takip edilmesi gereken ayrı bir gelişme
              olarak değerlendirilmelidir.
            </p>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Yapay Zeka Kredi Programı&apos;nın işleyişi, kredi tutarları,
            teminat şartı ve desteklenen giderler hakkında ayrıntılı bilgiyi{" "}
            <Link
              href="/blog/kosgeb-yapay-zeka-kredi-programi-2026"
              className="font-semibold text-orange-600 underline hover:text-orange-700"
            >
              KOSGEB Yapay Zeka Kredi Programı 2026 yazımızda
            </Link>{" "}
            bulabilirsiniz. Bu yazı ise GO Dijital Cüzdan&apos;ın kendisine,
            yani hesap açma ve platformun genel işleyişine odaklanıyor.
          </p>
        </section>

        {/* 3. KİMLER */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Kimler Hesap Açabilir, Hangi Belgeler Gerekir?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            GO Dijital Cüzdan hesabı, KOSGEB&apos;e kayıtlı ve ilgili
            programın diğer şartlarını sağlayan bir işletme adına açılır.
            Hesap açılışı bireysel bir tüketici uygulaması gibi değil,
            kurumsal bir sözleşme süreciyle başlar.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                📄 İmzalanması Gereken Belgeler
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Çerçeve Sözleşmesi</li>
                <li>✔ MASAK Sözleşmesi</li>
                <li>✔ Kişisel verilerin işlenmesine ilişkin aydınlatma metinleri</li>
                <li>✔ İmza sirküleri</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
                🧾 Sisteme Yüklenecek Evraklar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Vergi levhası</li>
                <li>✔ İmza sirküleri</li>
                <li>✔ Ortaklık sözleşmesi (varsa)</li>
                <li>✔ Yetkiliye ait kimlik bilgileri</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              👤 Münferit ve Müşterek Yetkili İşletmeler Arasındaki Fark
            </h3>
            <p className="leading-8 text-gray-700">
              İşletmenin temsil yapısı, hesap açma sürecini doğrudan
              etkiler. <strong>Münferit yetkili</strong> işletmelerde (tek
              başına imza yetkisine sahip bir kişi varsa) yalnızca bu
              yetkilinin sisteme tanımlanması yeterlidir.{" "}
              <strong>Müşterek yetkili</strong> işletmelerde ise (birden
              fazla kişinin birlikte imza yetkisi varsa) her bir yetkilinin
              kendi cep telefonu numarasıyla sisteme ayrı ayrı kayıt olması
              gerekir. Bu ayrım, başvuru öncesinde netleştirilmezse süreç
              gereksiz yere uzayabilir.
            </p>
          </div>
        </section>

        {/* 4. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Adım Adım Hesap Açma Süreci
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            GO Dijital Cüzdan hesabı açma süreci beş adımda tamamlanıyor.
            Sözleşme aşaması KOSGEB Müdürlüğü üzerinden, kayıt ve onay
            aşamaları ise dijital ortamda ilerliyor.
          </p>
          <ol className="ml-6 list-decimal space-y-6 text-gray-700 marker:font-bold marker:text-orange-600">
            <li>
              <strong>Sözleşme süreci:</strong> İşletme yetkilisi, bağlı
              bulunduğu KOSGEB Müdürlüğü&apos;ne başvurarak Çerçeve
              Sözleşmesi, MASAK Sözleşmesi ve aydınlatma metinlerini
              imzalar. Bu aşamada imza sirküleri de teslim edilir.
            </li>
            <li>
              <strong>GO Dijital Cüzdan kaydı:</strong> Sözleşme
              tamamlandıktan sonra mobil uygulama veya web üzerinden
              &quot;Kayıt Ol&quot; adımı tamamlanır. Münferit yetkili
              işletmelerde tek yetkilinin tanımlı olması yeterlidir;
              müşterek yetkili işletmelerde her yetkili kendi cep telefonu
              numarasıyla ayrı ayrı kayıt olmalıdır.
            </li>
            <li>
              <strong>Evrak yükleme:</strong> Vergi levhası, imza sirküleri,
              ortaklık sözleşmesi gibi istenen belgeler sisteme yüklenir ve
              başvuru onaya gönderilir. Bu adım genellikle birkaç dakika
              sürer.
            </li>
            <li>
              <strong>Değerlendirme ve onay:</strong> GO Dijital tahsis
              birimi yüklenen belgeleri inceler. Onay verildiğinde yetkili
              kullanıcıya SMS ile geçici bir şifre gönderilir; ilk girişte
              kalıcı şifre oluşturularak hesap aktif hale gelir.
            </li>
            <li>
              <strong>Tutarın cüzdana aktarılması:</strong> Hesap aktif
              olduktan ve ilgili KOSGEB programının onay süreci
              tamamlandıktan sonra, işletmeye tanınan tutar GO Dijital
              Cüzdan hesabına aktarılır. Aktarılan tutar, tanımlı kart
              üzerinden QR ödeme, ATM&apos;den para çekme veya para
              transferi gibi işlemlerde kullanılabilir hale gelir.
            </li>
          </ol>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Programa Özel Fark: Serbest Kullanım mı, Bloke Aktarım mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Cüzdana aktarılan tutarın nasıl kullanılabildiği, tamamen
              hangi KOSGEB programı üzerinden geldiğine bağlıdır. Örneğin
              Yapay Zeka Kredi Programı özelinde tutar, hesaba doğrudan
              serbest olarak değil <strong>blokeli</strong> olarak aktarılır;
              blokenin kaldırılması için banka teminat mektubu sunulması,
              ardından protokollü bir hizmet sağlayıcıdan alınan hizmetin
              faturasının onaylanması gerekir. Bu mekanizmanın ayrıntılarını{" "}
              <Link
                href="/blog/kosgeb-yapay-zeka-kredi-programi-2026"
                className="font-semibold text-orange-600 underline hover:text-orange-700"
              >
                KOSGEB Yapay Zeka Kredi Programı yazımızda
              </Link>{" "}
              bulabilirsiniz. Bu yazıda anlattığımız hesap açma süreci ise,
              cüzdanın kendisine ait ve program bağımsız genel bir işleyiştir.
            </p>
          </div>
        </section>

        {/* 5. GÜVENLİK */}
        <section id="guvenlik" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Güvenlik ve MASAK Boyutu
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            GO Dijital Cüzdan hesabı açılış sürecinde imzalanan
            belgelerden biri, adından da anlaşılacağı gibi bir{" "}
            <strong>MASAK Sözleşmesi</strong>&apos;dir. Elektronik para ve
            ödeme kuruluşları, Mali Suçları Araştırma Kurulu (MASAK)
            mevzuatı kapsamında müşterisini tanıma (KYC), kimlik doğrulama
            ve şüpheli işlem bildirimi gibi yükümlülüklere tabidir. Bu
            nedenle hesap açılışında istenen vergi levhası, imza sirküleri
            ve yetkili kimlik bilgileri gibi belgeler, tesadüfi değil bu
            mevzuat çerçevesinde standart bir uygulamadır.
          </p>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🔒 Süreçte Dikkat Çeken Güvenlik Unsurları
            </h3>
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-blue-500">
              <li>Hesap açılışı, doğrudan mobil uygulama üzerinden değil önce KOSGEB Müdürlüğü nezdinde imzalanan resmi sözleşmelerle başlıyor.</li>
              <li>Her yetkilinin kendi cep telefonu numarasıyla ayrı kayıt olması, çok yetkili yapılarda kimlik doğrulamayı güçlendiriyor.</li>
              <li>İlk giriş, SMS ile gönderilen geçici şifrenin kalıcı şifreyle değiştirilmesini zorunlu kılıyor.</li>
              <li>Kişisel verilerin işlenmesine dair aydınlatma metinleri, sözleşme aşamasında ayrıca imzalanıyor.</li>
            </ul>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Uygulamada karşılaşılan en yaygın gecikme sebebi, belgelerin
            eksik veya güncel olmayan bir vergi levhası/imza sirküleri ile
            yüklenmesidir. Belgelerin başvuru öncesinde güncel ve tam
            olduğundan emin olmak, onay sürecini ciddi şekilde hızlandırır.
          </p>
        </section>

        {/* 6. İŞLEMLER */}
        <section id="islemler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Cüzdanda Hangi İşlemler Yapılabilir?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Hesap aktif hale geldikten ve bir tutar cüzdana aktarıldıktan
            sonra, GO Dijital Cüzdan üzerinden tanımlı kart ile birtakım
            işlemler yapılabilir hale gelir. Bu işlemlerin fiilen kullanıma
            açık olup olmadığı, yine ilgili KOSGEB programının kendi
            kurallarına (örneğin bloke/serbest tutar ayrımına) bağlıdır.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">İşlem Türü</th>
                  <th className="p-5">Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">QR ile Ödeme</td>
                  <td className="p-5">Tanımlı kart üzerinden QR kod okutularak ödeme yapılabilir.</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">ATM&apos;den Para Çekme</td>
                  <td className="p-5">Tanımlı kart ile uygun ATM&apos;lerden nakit çekim yapılabilir.</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Para Transferi</td>
                  <td className="p-5">Cüzdandaki serbest bakiye, tanımlı hesaplara transfer edilebilir.</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Bakiye/İşlem Takibi</td>
                  <td className="p-5">Uygulama üzerinden hesap hareketleri ve güncel bakiye görüntülenebilir.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Yapay Zeka Kredi Programı gibi bloke mekanizmalı programlarda bu
            işlemler, blokenin kalkması ve fatura onay sürecinin
            tamamlanmasına kadar kısıtlı kalır; tutar yalnızca protokollü
            hizmet sağlayıcıya ödeme olarak serbest bırakılır. İleride farklı
            bir KOSGEB programı GO Dijital Cüzdan&apos;ı serbest bakiye
            mantığıyla kullanırsa, işlem serbestisi de o programın kurallarına
            göre değişebilir.
          </p>
        </section>

        {/* 7. DİKKAT EDİLECEKLER */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Hesap açılışı, ilgili KOSGEB Müdürlüğü nezdinde sözleşme imzalanmadan tamamlanamaz; mobil uygulamadan doğrudan bireysel kayıt yeterli değildir.</li>
              <li>Müşterek yetkili işletmelerde tüm yetkililerin ayrı ayrı kayıt olması gerektiği unutulmamalıdır; tek yetkilinin kaydı yeterli olmaz.</li>
              <li>Yüklenen belgelerin (vergi levhası, imza sirküleri) güncel tarihli olması, onay sürecinin gecikmemesi açısından önemlidir.</li>
              <li>Cüzdana aktarılan tutarın kullanım serbestisi, hangi KOSGEB programından geldiğine göre değişir; genellemeler yapmadan ilgili programın kendi yönergesine bakılmalıdır.</li>
              <li>GO Dijital Cüzdan&apos;ın kapsamının ileride başka programlara yayılıp yayılmayacağı resmî duyurulardan takip edilmelidir; bu yazı yalnızca şu anda doğrulanabilen kapsamı yansıtır.</li>
            </ul>
          </div>
        </section>

        {/* 8. SSS */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                GO Dijital Cüzdan bir banka mı?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. GO Dijital Cüzdan, GO Dijital Teknoloji Hizmetleri
                A.Ş. tarafından işletilen bir elektronik cüzdan/ödeme
                uygulamasıdır; klasik bir mevduat bankası değildir. KOSGEB
                ile yapılan iş birliği protokolü kapsamında bazı destek/kredi
                ödemelerinin akışını yönetmek için kullanılıyor.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Hesap açmak ücretli mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hesap açılış süreci, ilgili KOSGEB programına başvurunun
                doğal bir parçası olarak yürütülür. Güncel ücret/komisyon
                bilgisi için sözleşme aşamasında sunulan Çerçeve Sözleşmesi
                metninin ve KOSGEB Müdürlüğü&apos;nün güncel bilgilendirmesinin
                esas alınması gerekir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                GO Dijital Cüzdan hesabım varsa her KOSGEB desteğine mi başvurabilirim?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Cüzdan hesabına sahip olmak, tek başına bir destek
                programına başvuru hakkı vermez. Her programın kendine ait
                başvuru şartları vardır; GO Dijital Cüzdan bu şartlardan
                yalnızca biri, yani ödeme/aktarım altyapısıdır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Kayıt sırasında hangi telefon numarası kullanılmalı?
              </h3>
              <p className="leading-8 text-gray-700">
                Münferit yetkili işletmelerde tek yetkilinin kendi cep
                telefonu numarası yeterlidir. Müşterek yetkili işletmelerde
                ise her yetkilinin, kendi adına kayıtlı cep telefonu
                numarasıyla ayrı ayrı kayıt olması gerekir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Onay süreci ne kadar sürüyor?
              </h3>
              <p className="leading-8 text-gray-700">
                Evrakların sisteme yüklenmesi genellikle birkaç dakika
                sürerken, GO Dijital tahsis biriminin değerlendirme süresi
                belgelerin eksiksizliğine göre değişebilir. Belgelerin güncel
                ve tam olması, süreci ciddi şekilde hızlandırır.
              </p>
            </div>
          </div>
        </section>

        {/* 9. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            GO Dijital Cüzdan, KOSGEB&apos;in bazı destek/kredi programlarını
            hayata geçirmek için kullandığı bir elektronik ödeme
            altyapısıdır. Hesap açma süreci, KOSGEB Müdürlüğü nezdinde
            imzalanan sözleşmelerle başlayıp, mobil uygulama üzerinden kayıt
            ve evrak onayıyla tamamlanan, MASAK mevzuatına dayalı standart
            bir kurumsal süreçtir. Bugün itibarıyla resmî olarak
            doğrulanabilir tek kullanım alanı Yapay Zeka Kredi Programı
            olsa da, işletmelerin süreci baştan doğru yürütmesi, ileride
            benzer mekanizmalı yeni programlardan hızlıca yararlanabilmesi
            için de önemlidir.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin hangi KOSGEB/TÜBİTAK programlarından
            yararlanabileceğinin belirlenmesinden, GO Dijital Cüzdan dahil
            başvuru sürecinin uçtan uca yönetilmesine kadar tüm adımları
            Koray Akdağ / Sistem Global Danışmanlık olarak birlikte
            yürütüyoruz. Ayrı bir danışmanlık firması aramanıza gerek
            kalmadan, başvuru öncesi hazırlıktan sonrasındaki raporlama
            yükümlülüklerinize kadar tek noktadan destek almak için bizimle
            iletişime geçebilirsiniz.
          </p>
        </section>
    </BlogLayout>
  );
}
