import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Döviz Dönüşüm Desteği 2026: 2026/11 Sayılı Tebliğ ile Neler Değişti? | Koray Akdağ",
  description:
    "1 Ağustos 2026'da yürürlüğe giren 2026/11 sayılı Tebliğ ile döviz dönüşüm desteğinde döviz pozisyonu esaslı yeni sistem, %2-%3 destek oranları, ihracat bedelinin %35'inin satış yükümlülüğü ve 1 Ekim 2026 geçiş takvimiyle ihracatçılar için kapsamlı 2026 rehberi.",
  keywords: [
    "döviz dönüşüm desteği 2026",
    "2026/11 sayılı tebliğ",
    "ihracat bedeli satış yükümlülüğü",
    "TCMB döviz pozisyonu esası",
    "kambiyo mevzuatı 2026",
    "ihracat bedellerinin yurda getirilmesi",
    "döviz kazandırıcı işlemler desteği",
    "ihracatçı destekleri 2026",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Döviz Dönüşüm Desteği 2026: 2026/11 Sayılı Tebliğ ile İhracatçılar İçin Neler Değişiyor?"
      description="1 Ağustos 2026'da yürürlüğe giren 2026/11 sayılı Tebliğ, döviz dönüşüm desteğinde 'döviz alma taahhüdü' esasını kaldırıp 'döviz pozisyonu' esasına geçti. %2-%3 destek oranları, ihracat bedelinin %35'inin satış yükümlülüğü, 1 Ekim 2026'da başlayacak yeni sistem ve ağırlaştırılan yaptırımlarla ihracatçılar için güncel rehber."
      category="İHRACAT DESTEKLERİ • KAMBİYO MEVZUATI • 2026"
      date="2026"
      readTime="10 Dakika"
      slug="doviz-donusum-destegi-2026-yeni-donem"
      coverImage="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            1 Ağustos 2026 tarihli Resmî Gazete&apos;de yayımlanan 2026/11
            sayılı Tebliğ, 2023/5 sayılı &quot;Firmaların Yurt Dışı Kaynaklı
            Dövizlerinin Türk Lirasına Dönüşümünün Desteklenmesi Hakkında
            Tebliğ&quot;de köklü bir sistem değişikliğine gitti. İhracatçıları,
            döviz kazandırıcı hizmet sağlayıcılarını ve tedarikçi firmaları
            yakından ilgilendiren bu değişiklik, hem destek mekanizmasının
            işleyişini hem de uyumsuzluk hâlinde karşılaşılacak yaptırımları
            yeniden tanımlıyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Döviz dönüşüm desteği nedir, kimler yararlanır?</li>
            <li>✔ 2026/11 sayılı Tebliğ ile tam olarak ne değişti?</li>
            <li>✔ Güncel destek oranları (%2 / %3) ve ihracat bedeli satış yükümlülüğü (%35)</li>
            <li>✔ &quot;Döviz alma taahhüdü&quot;nden &quot;döviz pozisyonu esası&quot;na geçiş ne anlama geliyor?</li>
            <li>✔ 1 Ağustos – 1 Ekim 2026 – 31 Ocak 2027 geçiş takvimi</li>
            <li>✔ Ağırlaştırılan yaptırımlar ve aracı bankaların yeni sorumlulukları</li>
            <li>✔ Şirketinizin bugünden itibaren yapması gerekenler</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Döviz Dönüşüm Desteği Nedir?
            </Link>
            <Link href="#teblig" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. 2026/11 Sayılı Tebliğ Ne Getirdi?
            </Link>
            <Link href="#oranlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Destek Oranları ve İhracat Bedeli Satış Yükümlülüğü
            </Link>
            <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Eski ve Yeni Sistem Karşılaştırması
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Geçiş Takvimi
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Kimler Kapsamda?
            </Link>
            <Link href="#yaptirim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Yaptırımlar ve Banka Sorumlulukları
            </Link>
            <Link href="#yapilmasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Şirketiniz Ne Yapmalı? Adım Adım
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
            1. Döviz Dönüşüm Desteği Nedir?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Döviz dönüşüm desteği, yurt dışından döviz geliri elde eden
            firmaların bu dövizlerini Türkiye Cumhuriyet Merkez Bankası
            (TCMB) nezdinde aracı bir banka üzerinden Türk lirasına
            çevirmesini teşvik etmek amacıyla uygulanan bir destek
            mekanizmasıdır. Sistemin dayanağı, TCMB&apos;nin &quot;Firmaların
            Yurt Dışı Kaynaklı Dövizlerinin Türk Lirasına Dönüşümünün
            Desteklenmesi Hakkında Tebliğ&quot;idir (Sayı: 2023/5). Firma,
            döviz gelirini bankası aracılığıyla TCMB alım kuru üzerinden
            Türk lirasına çevirdiğinde, dönüştürdüğü tutarın belirli bir
            yüzdesi kadar geri ödemesiz destek alır.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            1 Ağustos 2026 tarihli Resmî Gazete&apos;de yayımlanan
            2026/11 sayılı Tebliğ ile bu uygulamada; destek mekanizmasının
            işleyiş mantığını, kapsamındaki firma tanımlarını ve
            uyumsuzluk hâlinde uygulanacak yaptırımları değiştiren önemli bir
            revizyon yapıldı. Değişikliğin en dikkat çekici yönü, firmaların
            &quot;döviz almama taahhüdü&quot; verdiği eski modelden,
            &quot;döviz pozisyonu&quot; esasına dayanan yeni bir modele
            geçilmesi.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Neden Önemli?
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ İhracat geliri, hizmet ihracatı veya diğer döviz kazandırıcı faaliyetlerle döviz geliri elde eden hemen her firmayı ilgilendiriyor</li>
              <li>✔ Destek oranları ve ihracat bedeli satış yükümlülüğü için geçerlilik süresi 31 Ocak 2027&apos;ye uzatıldı</li>
              <li>✔ Aracı bankaların denetim/bildirim yükümlülükleri arttı, yaptırımlar ağırlaştırıldı</li>
              <li>✔ 1 Ekim 2026&apos;dan itibaren firmaların finans/hazine süreçlerini yeni sisteme göre yeniden kurgulaması gerekiyor</li>
            </ul>
          </div>
        </section>

        {/* 2. TEBLİĞ */}
        <section id="teblig" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. 2026/11 Sayılı Tebliğ Ne Getirdi?
          </h2>
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🗓️ Tebliğ Bilgileri
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Resmî Gazete: 1 Ağustos 2026</li>
              <li>✔ Tebliğ No: 2026/11</li>
              <li>✔ Konu: 2023/5 sayılı Tebliğ&apos;de değişiklik</li>
              <li>✔ Yürürlük: 1 Ağustos 2026 (yeni döviz pozisyonu sistemi fiilen 1 Ekim 2026&apos;dan itibaren uygulanıyor)</li>
            </ul>
          </div>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Değişikliğin özünde, destek mekanizmasının denetim ve
            uygulama biçiminin sadeleştirilmesi yer alıyor. Öne çıkan
            başlıklar şunlar:
          </p>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
                &quot;Döviz almama taahhüdü&quot; kaldırıldı, &quot;döviz pozisyonu esası&quot; geldi
              </h3>
              <p className="text-gray-700">
                Eski sistemde destekten yararlanan firma, belirli bir süre
                boyunca döviz almayacağına dair taahhüt veriyordu. Yeni
                sistemde bu taahhüt kaldırıldı; bunun yerine firmanın döviz
                pozisyonu (döviz varlık ve yükümlülük dengesi) esas
                alınıyor. Bu, firmalara ticari faaliyetleri kapsamında döviz
                işlemlerinde daha fazla operasyonel esneklik tanıyor.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
                Destek artık katma değer esasına göre şekillenecek
              </h3>
              <p className="text-gray-700">
                Yeni düzenlemeyle destek tutarının belirlenmesinde firmanın
                yarattığı katma değer de dikkate alınan unsurlar arasına
                girdi. Kesin limit ve hesaplama parametreleri için aracı
                bankanızdan ve TCMB&apos;nin yayımladığı uygulama
                talimatlarından güncel teyit alınması önerilir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
                Tedarikçi firmalar da kapsama dâhil edildi
              </h3>
              <p className="text-gray-700">
                Önceki uygulamada esas olarak doğrudan döviz geliri elde
                eden ihracatçı/hizmet ihracatçısı firmalar öne çıkarken,
                yeni sistemde ihracatçıya girdi sağlayan tedarikçi
                firmaların da belirli şartlarla destekten faydalanabilmesinin
                önü açıldı.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
                &quot;Firma kontrolü&quot; ve &quot;aracı banka&quot; tanımları netleştirildi
              </h3>
              <p className="text-gray-700">
                Tebliğ, bir firmanın başka bir firma üzerinde &quot;kontrol
                sahibi&quot; sayılması için doğrudan veya dolaylı olarak
                sermaye payının, oy hakkının veya yönetim kurulunda temsil
                yetkisinin %50 veya üzerinde olması ölçütünü getirdi. Aracı
                banka tanımı ise 5411 sayılı Bankacılık Kanunu kapsamında
                faaliyet gösteren bankalarla sınırlandırıldı.
              </p>
            </div>
          </div>
        </section>

        {/* 3. ORANLAR */}
        <section id="oranlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Destek Oranları ve İhracat Bedeli Satış Yükümlülüğü
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            2026/11 sayılı Tebliğ, destek oranlarının ve ihracat bedelinin
            belirli bir yüzdesinin TCMB&apos;ye satılması yükümlülüğünün
            geçerlilik süresini uzattı. Güncel tablo şu şekilde:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kalem</th>
                  <th className="p-5">Oran / Süre</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Temel döviz dönüşüm destek oranı</td>
                  <td className="p-5">%2</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Geçici yüksek destek oranı</td>
                  <td className="p-5">%3 (31 Ocak 2027&apos;ye kadar uygulanmaya devam ediyor)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">İhracat bedelinin satış yükümlülüğü</td>
                  <td className="p-5">%35 (geçerlilik süresi 31 Ocak 2027&apos;ye uzatıldı)</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Dönüşüm kuru</td>
                  <td className="p-5">TCMB&apos;nin satış tarihinde ilan ettiği döviz alış kuru</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Pratikte Ne Anlama Geliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              İhracat bedelinin yurda getirilmesi ve bunun bir kısmının
              (%35) bankalar aracılığıyla TCMB&apos;ye satılması
              yükümlülüğü, geçici bir uygulama olarak 31 Ocak 2027&apos;ye
              kadar sürdürülecek. Firmalar bu süre boyunca hem %2 baz
              oranından hem de -şartları sağladıkları sürece- %3&apos;e
              varan geçici yüksek destekten yararlanabilir. Kesin oran ve
              yükümlülük hesaplaması, firmanın faaliyet alanına ve ihracat
              türüne göre değişebileceğinden, işlemden önce aracı bankanızla
              teyitleşmeniz önerilir.
            </p>
          </div>
        </section>

        {/* 4. KARŞILAŞTIRMA */}
        <section id="karsilastirma" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Eski ve Yeni Sistem Karşılaştırması
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Konu</th>
                  <th className="p-5">2026/11 Öncesi (2023/5)</th>
                  <th className="p-5">2026/11 Sonrası</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Temel yükümlülük</td>
                  <td className="p-5">Belirli süre döviz almama taahhüdü</td>
                  <td className="p-5">Döviz pozisyonu limitleri esası</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Destek belirleme kriteri</td>
                  <td className="p-5">Dönüştürülen döviz tutarı</td>
                  <td className="p-5">Dönüştürülen tutar + katma değer unsuru</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kapsam</td>
                  <td className="p-5">Ağırlıklı olarak doğrudan döviz geliri elde eden firmalar</td>
                  <td className="p-5">Tedarikçi firmalar da belirli şartlarla dâhil</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Aracı banka rolü</td>
                  <td className="p-5">İşlem aracılığı</td>
                  <td className="p-5">Genişletilmiş denetim ve bildirim sorumluluğu</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Uyumsuzluk yaptırımı</td>
                  <td className="p-5">Destek iadesi ağırlıklı</td>
                  <td className="p-5">Destek iadesi + kur farkı + kanuni faiz + kredi kısıtı + olası suç duyurusu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. TAKVİM */}
        <section id="takvim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Geçiş Takvimi
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Tebliğ, yürürlük tarihi ile yeni sistemin fiilen uygulanmaya
            başlayacağı tarih arasında bilinçli olarak bir geçiş süresi
            bırakıyor. Bu süre, firmaların finans ve hazine süreçlerini yeni
            döviz pozisyonu esasına göre uyarlaması için tanınmış bir hazırlık
            dönemi olarak değerlendirilmeli.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📜</div>
              <h3 className="text-xl font-bold">1 Ağustos 2026</h3>
              <p className="mt-3 text-sm text-gray-600">
                2026/11 sayılı Tebliğ Resmî Gazete&apos;de yayımlanarak
                yürürlüğe girdi; geçiş dönemi başladı.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔄</div>
              <h3 className="text-xl font-bold">1 Ekim 2026</h3>
              <p className="mt-3 text-sm text-gray-600">
                Döviz pozisyonu esaslı yeni sistem fiilen uygulanmaya
                başlıyor.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">⏳</div>
              <h3 className="text-xl font-bold">31 Ocak 2027</h3>
              <p className="mt-3 text-sm text-gray-600">
                %3 geçici destek oranı ve %35 ihracat bedeli satış
                yükümlülüğü için geçerlilik süresinin sonu.
              </p>
            </div>
          </div>
          <p className="mt-8 text-lg leading-9 text-gray-700">
            Bu üç tarih arasındaki iki aylık pencere (1 Ağustos – 1 Ekim
            2026), firmaların mevcut döviz pozisyonlarını gözden geçirmesi,
            aracı bankalarıyla yeni sistem kapsamındaki yükümlülükleri
            netleştirmesi ve gerekirse iç raporlama süreçlerini
            güncellemesi için değerlendirilmesi gereken kritik bir süre.
          </p>
        </section>

        {/* 6. KİMLER */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Kimler Kapsamda?
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Destekten Yararlanabilecekler
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Mal ihracatı yoluyla döviz geliri elde eden firmalar</li>
                <li>✔ Hizmet ihracatı (yazılım, mühendislik, danışmanlık vb.) yapan firmalar</li>
                <li>✔ Diğer döviz kazandırıcı faaliyetlerde bulunan firmalar</li>
                <li>✔ Yeni düzenlemeyle belirli şartları sağlayan tedarikçi firmalar</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ⚠️ Dikkat Edilmesi Gereken Durumlar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Aracı banka tanımına uymayan finans kuruluşları üzerinden yapılan işlemler kapsam dışı kalabilir</li>
                <li>❌ %50 ve üzeri kontrol ilişkisi bulunan grup şirketleri arasındaki işlemler &quot;firma kontrolü&quot; tanımına tabi</li>
                <li>❌ Yanlış/eksik beyan, destek iadesi ve ek yaptırımlarla sonuçlanabilir</li>
                <li>❌ Destek hesaplaması firmaya, sektöre ve işlem türüne göre değişebileceğinden genellemeyle hareket edilmemeli</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. YAPTIRIM */}
        <section id="yaptirim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Yaptırımlar ve Aracı Bankaların Yeni Sorumlulukları
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            2026/11 sayılı Tebliğ, destek mekanizmasının kötüye
            kullanılmasını önlemeye yönelik yaptırım hükümlerini de
            belirgin biçimde ağırlaştırdı. Yanlış beyan veya usulsüz
            işlem tespit edilmesi hâlinde uygulanabilecek yaptırımlar şu
            şekilde sıralanabilir:
          </p>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Ödenmiş desteğin <strong>iadesi</strong></li>
              <li>Ödeme tarihinden tespit tarihine kadar işleyen <strong>kur farkı</strong></li>
              <li>Kur farkına ilaveten <strong>kanuni faiz</strong></li>
              <li>Firmanın belirli bir süre <strong>TCMB kaynaklı kredi olanaklarından</strong> yararlanmasının kısıtlanması</li>
              <li>Ağır ihlallerde <strong>suç duyurusunda</strong> bulunulması</li>
            </ul>
          </div>
          <p className="mt-8 text-lg leading-9 text-gray-700">
            Buna paralel olarak aracı bankaların sorumlulukları da
            genişletildi: bankalar artık şüpheli işlemleri bildirmek,
            döviz kaynağının niteliğini doğrulamak ve TCMB&apos;den gelen
            bildirim üzerine ilgili tutarları belirli bir süre içinde
            (bir ay) tahsil etmekle yükümlü. TCMB&apos;ye de doğrudan
            inceleme yetkisi tanındı. Bu değişiklik, firmaların döviz
            dönüşüm işlemlerini yürütürken çalıştıkları bankanın iç
            uyum (compliance) süreçleriyle daha yakın temas hâlinde
            olmasını gerektiriyor.
          </p>
        </section>

        {/* 8. YAPILMASI */}
        <section id="yapilmasi" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Şirketiniz Ne Yapmalı? Adım Adım
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📊</div>
              <h3 className="text-xl font-bold">1. Döviz Pozisyonunu Analiz Edin</h3>
              <p className="mt-3 text-sm text-gray-600">
                Mevcut döviz varlık/yükümlülük dengenizi yeni sistem
                perspektifiyle gözden geçirin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏦</div>
              <h3 className="text-xl font-bold">2. Bankanızla Teyitleşin</h3>
              <p className="mt-3 text-sm text-gray-600">
                Aracı bankanızdan güncel destek hesaplama parametrelerini
                ve raporlama beklentilerini netleştirin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧾</div>
              <h3 className="text-xl font-bold">3. Beyan Süreçlerini Gözden Geçirin</h3>
              <p className="mt-3 text-sm text-gray-600">
                İhracat bedeli yurda getirme ve %35 satış yükümlülüğü
                takibini muhasebe/finans süreçlerinize entegre edin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔗</div>
              <h3 className="text-xl font-bold">4. Tedarik Zincirinizi Değerlendirin</h3>
              <p className="mt-3 text-sm text-gray-600">
                Tedarikçi firmaların kapsama alınmasının grup şirketleriniz
                için doğurduğu fırsatları inceleyin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🗓️</div>
              <h3 className="text-xl font-bold">5. 1 Ekim Geçişini Takvimlendirin</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yeni döviz pozisyonu sisteminin fiilen başlayacağı tarihe
                kadar iç süreçlerinizi hazır hâle getirin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧮</div>
              <h3 className="text-xl font-bold">6. Grup İçi İşlemleri Kontrol Edin</h3>
              <p className="mt-3 text-sm text-gray-600">
                %50 ve üzeri kontrol ilişkisi bulunan şirketler arasındaki
                işlemlerin &quot;firma kontrolü&quot; tanımına uygunluğunu
                değerlendirin.
              </p>
            </div>
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
                2026/11 sayılı Tebliğ ne zaman yürürlüğe girdi?
              </h3>
              <p className="leading-8 text-gray-700">
                1 Ağustos 2026 tarihli Resmî Gazete&apos;de yayımlanarak
                yürürlüğe girdi. Ancak döviz pozisyonu esaslı yeni sistem,
                1 Ekim 2026&apos;dan itibaren fiilen uygulanmaya
                başlayacak; iki tarih arasındaki dönem bir geçiş süresi
                olarak öngörülüyor.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Destek oranı hâlâ %3 mü?
              </h3>
              <p className="leading-8 text-gray-700">
                Temel oran %2&apos;dir; geçici olarak uygulanan %3&apos;lük
                yüksek destek oranı, ilgili şartları sağlayan firmalar için
                31 Ocak 2027&apos;ye kadar uzatılmıştır. Bu tarihten sonra
                oranların yeniden değerlendirilip değerlendirilmeyeceği
                TCMB&apos;nin ileride yayımlayacağı düzenlemelere bağlı.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                &quot;Döviz almama taahhüdü&quot; tamamen kalktı mı?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet, eski sistemdeki süreye bağlı döviz almama taahhüdü
                kaldırıldı. Bunun yerine firmanın döviz pozisyonu esas
                alınan bir yapıya geçildi; bu da firmalara ticari döviz
                işlemlerinde daha fazla esneklik sağlıyor.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Tedarikçi firmalar destekten nasıl yararlanacak?
              </h3>
              <p className="leading-8 text-gray-700">
                İhracatçıya girdi sağlayan tedarikçi firmaların belirli
                şartlarla kapsama alınması öngörülüyor. Bu şartların somut
                uygulaması, aracı bankaların ve TCMB&apos;nin yayımlayacağı
                uygulama talimatlarıyla netleşecek; bu nedenle tedarikçi
                konumundaki firmaların bankalarıyla güncel durumu teyit
                etmesi önerilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Uyumsuzluk tespit edilirse ne olur?
              </h3>
              <p className="leading-8 text-gray-700">
                Ödenen destek geri istenir; ayrıca kur farkı, kanuni faiz,
                TCMB kaynaklı kredi kısıtlaması ve ağır ihlallerde suç
                duyurusu gibi yaptırımlarla karşılaşılabilir. Bu nedenle
                beyan ve raporlama süreçlerinin titizlikle yürütülmesi
                büyük önem taşıyor.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Döviz Dönüşüm Desteği Uyum Sürecinde Yanınızdayız
            </h3>
            <p className="leading-8 text-gray-700">
              Yeni döviz pozisyonu esaslı sistemde ihracat bedelinin
              %35&apos;lik satış yükümlülüğünü doğru yönetmek ve 1 Ekim
              2026 geçiş takvimine uyum sağlamak, destek oranınızı ve
              nakit akışınızı doğrudan etkiler.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Şirketinizin döviz dönüşüm desteği sürecini
                değerlendirmemiz için bizimle iletişime geçin.
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
            2026/11 sayılı Tebliğ, döviz dönüşüm desteğini firmalar için
            daha esnek ama aynı zamanda daha sıkı denetlenen bir yapıya
            taşıdı. &quot;Döviz almama taahhüdü&quot;nün kaldırılması ve
            tedarikçi firmaların kapsama alınması ihracatçılar için olumlu
            bir gelişme olsa da; ağırlaştırılan yaptırımlar ve aracı
            bankaların artan denetim sorumluluğu, beyan ve raporlama
            disiplinini daha önemli hâle getiriyor. 1 Ekim 2026&apos;da
            fiilen başlayacak yeni sistem öncesinde şirketlerin döviz
            pozisyonlarını, ihracat bedeli takibini ve grup içi işlemlerini
            gözden geçirmesi, olası uyumsuzluk risklerinin önüne geçmenin
            en etkili yolu.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin döviz dönüşüm desteğinden en doğru şekilde
            yararlanması, kambiyo mevzuatına uyumun sürdürülmesi ve bu
            süreçlerin vergi/finansal raporlamanızla tutarlı biçimde
            yönetilmesi için Koray Akdağ / Sistem Global Danışmanlık olarak
            yanınızdayız. İhracat destekleri, mali danışmanlık ve
            uluslararasılaşma stratejinizin tamamını tek noktadan
            yürütmek için bizimle iletişime geçebilirsiniz.
          </p>
        </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri (2026 Rehberi)</h3>
        </Link>
        <Link
          href="/blog/turquality-programi-nedir-sartlari-destekleri-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">TURQUALITY • İHRACAT DESTEKLERİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Turquality Programı Nedir? Şartları, Destekleri ve 2026 Güncel Rehberi</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
