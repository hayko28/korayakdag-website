import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Çalışanın Kurumsal E-Postası Denetlenebilir mi? KVKK 2026 İlke Kararı | Koray Akdağ",
  description: "KVKK Kurulu'nun 2026/2035 sayılı ilke kararına göre işveren çalışanın kurumsal e-postasını ve iş iletişim kanallarını hangi şartlarda denetleyebilir? Aydınlatma, ölçülülük ve 2026 idari para cezalarıyla rehber.",
  keywords: [
    "işveren çalışan e-postasını okuyabilir mi",
    "kurumsal e-posta denetimi kvkk",
    "kvkk 2026/2035 sayılı karar",
    "çalışan iletişim kanalları denetimi",
    "işyerinde e-posta denetimi yasal mı",
    "kvkk ilke kararı 2026",
    "işverenin denetim yetkisi sınırları",
    "kurumsal e-posta aydınlatma metni",
  ],
  alternates: {
    canonical: "/blog/isveren-calisan-e-postasini-denetleyebilir-mi-kvkk-ilke-karari-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İşveren Çalışanın Kurumsal E-Postasını Denetleyebilir mi? KVKK'nın 2026 İlke Kararı Ne Diyor?"
      description="Kişisel Verileri Koruma Kurulu'nun 16.09.2026 tarihli ve 2026/2035 sayılı ilke kararı, kurumsal e-posta ve diğer iş iletişim kanallarının denetlenmesine sınır çiziyor. İşverenin yetkisi nereye kadar, aydınlatma metni ne içermeli ve hangi hatalar idari para cezasına yol açar?"
      category="KVKK • İŞ HUKUKU • 2026"
      date="Ekim 2026"
      readTime="13 Dakika"
      slug="isveren-calisan-e-postasini-denetleyebilir-mi-kvkk-ilke-karari-2026"
      coverImage="https://images.unsplash.com/photo-1761489798133-acc5e4decb30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kişisel Verileri Koruma Kurulu&apos;nun 16 Eylül 2026 tarihli ve
          2026/2035 sayılı ilke kararı, 8 Ekim 2026 tarihli ve 33394 sayılı
          Resmî Gazete&apos;de yayımlandı. Karara göre:
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Kurumsal e-posta hesabının işverene ait olması, içeriğe sınırsız erişim hakkı vermez.</li>
          <li>✔ Trafik/log kaydı incelemesi de veri işleme sayılır ve KVKK&apos;nın genel ilkelerine tabidir.</li>
          <li>✔ Çalışan, denetimden önce amaç/kapsam/yöntem/saklama süresi belirtilerek somut biçimde aydınlatılmalıdır.</li>
          <li>✔ Açık rıza, işçi-işveren güç dengesizliği nedeniyle genellikle yeterli hukuki sebep sayılmaz.</li>
          <li>✔ Mesaj içeriğine erişim, ancak trafik incelemesi yetersiz kaldığında ve somut şüphe varsa son çare olarak kullanılabilir.</li>
          <li>✔ Karar kurumsal e-postanın yanı sıra kurum içi mesajlaşma, CRM/talep sistemleri ve toplantı platformlarındaki sohbet kayıtlarını da kapsar.</li>
          <li>✔ Ayrılan çalışanın hesabı süresiz açık bırakılamaz, yasal dayanağı kalmayan veri imha edilmelidir.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#karar-ne" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Karar Ne Zaman ve Nasıl Yayımlandı?
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Hangi İletişim Kanallarını Kapsıyor?
          </Link>
          <Link href="#sinirsiz-degil" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. &quot;Hesap Bize Ait&quot; ile &quot;Okuma Hakkımız Var&quot; Aynı Şey Değil
          </Link>
          <Link href="#aydinlatma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Aydınlatma Yükümlülüğü Ne İçermeli?
          </Link>
          <Link href="#hukuki-sebep" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Açık Rıza Neden Yeterli Hukuki Sebep Sayılmıyor?
          </Link>
          <Link href="#kademeli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Kademeli Denetim: Trafik mi, İçerik mi?
          </Link>
          <Link href="#ayrilan-calisan" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. İşten Ayrılan Çalışanın Hesabı Ne Olur?
          </Link>
          <Link href="#cezalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. İhlal Halinde Karşılaşılabilecek Yaptırımlar
          </Link>
          <Link href="#checklist" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. İşverenler İçin Uyum Checklist&apos;i
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
          <Link href="#biz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Uyum Sürecinizi Biz Yönetelim
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. KARAR NE ZAMAN */}
      <section id="karar-ne" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Karar Ne Zaman ve Nasıl Yayımlandı?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Kişisel Verileri Koruma Kurulu, 16 Eylül 2026 tarihli toplantısında
          &quot;İşverenler Tarafından Çalışanlara Tahsis Edilen Kurumsal
          E-Posta Hesapları Başta Olmak Üzere, İşin Yürütülmesi Amacıyla
          Kullanılan İletişim Kanallarının Denetlenmesinde Uyulması Gereken
          Usul ve Esaslar Hakkında&quot; 2026/2035 sayılı bir ilke kararı
          aldı. Karar, 8 Ekim 2026 tarihli ve 33394 sayılı Resmî
          Gazete&apos;de yayımlanarak yürürlüğe girdi.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          İlke kararları, Kurul&apos;un belirli bir uygulama alanında
          veri sorumlularına yol gösteren, denetim ve şikâyet
          incelemelerinde esas alınan metinlerdir. Bu kararın ortaya
          çıkmasının arkasında, iş yerlerinde e-posta ve mesajlaşma
          denetiminin son yıllarda hem Kurul&apos;a yapılan şikâyetlerde hem
          de iş mahkemelerinde giderek daha sık karşılaşılan bir konu haline
          gelmesi var. Karar, dağınık biçimde oluşmuş yargı kararlarını ve
          önceki Kurul uygulamasını tek bir çerçevede birleştiriyor.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Bu Karar Neden Her Şirketi İlgilendiriyor?
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Kurumsal e-posta hesabı olmayan şirket sayısı pratikte sıfıra yakın</li>
            <li>✔ Birçok şirkette e-posta/mesajlaşma denetimi yıllardır &quot;şirket malı, istediğimiz zaman bakarız&quot; mantığıyla yürütülüyor</li>
            <li>✔ Kural ihlali bir çalışan şikâyetiyle ortaya çıkabiliyor ve hem idari para cezası hem de işe iade/tazminat davası riski doğurabiliyor</li>
            <li>✔ Karar, sadece büyük şirketleri değil, iş e-postası kullanan her ölçekteki işvereni kapsıyor</li>
          </ul>
        </div>
      </section>

      {/* 2. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Hangi İletişim Kanallarını Kapsıyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Karar, başlığında kurumsal e-postayı özellikle anıyor ama kapsamı
          daha geniş. Somut olayın özelliklerine göre aşağıdaki kanallar da
          değerlendirmeye giriyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">İletişim Kanalı</th>
                <th className="p-5">Örnek</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumsal e-posta hesabı</td>
                <td className="p-5">Şirket alan adıyla (@sirket.com) tahsis edilen e-posta kutusu</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurum içi mesajlaşma uygulamaları</td>
                <td className="p-5">Şirketin kullandığı kurumsal anlık mesajlaşma/işbirliği araçları</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Müşteri ilişkileri ve talep yönetim sistemleri</td>
                <td className="p-5">CRM ve destek/ticket sistemlerindeki yazışma kayıtları</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Toplantı platformları</td>
                <td className="p-5">Görüntülü toplantı araçlarındaki sohbet ve kayıt alanları</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kurul&apos;un altını çizdiği önemli bir nokta da trafik ve log
          kayıtlarının (kimin kime, ne zaman, hangi büyüklükte veri
          gönderdiği gibi meta veriler) incelenmesinin de kişisel veri
          işleme sayıldığı. Yani içeriğe hiç dokunulmasa, sadece
          &quot;kim kime kaç e-posta yazmış&quot; raporu çıkarılsa bile bu
          işlem KVKK&apos;nın genel ilkelerine, aydınlatma ve veri güvenliği
          yükümlülüklerine tabi.
        </p>
      </section>

      {/* 3. SINIRSIZ DEĞİL - KARIŞTIRMAYIN KUTUSU */}
      <section id="sinirsiz-degil" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. &quot;Hesap Bize Ait&quot; ile &quot;Okuma Hakkımız Var&quot; Aynı Şey Değil
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırılmaması Gereken İki Ayrı Kavram
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Mülkiyet / tahsis yetkisi
              </p>
              <p className="text-gray-700">
                Kurumsal e-posta hesabının, bilgisayarın veya iletişim
                aracının işverene ait olması ve çalışana iş amacıyla tahsis
                edilmiş olması. Bu, işverenin olağan ve meşru bir hakkıdır.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Denetim / içeriğe erişim yetkisi
              </p>
              <p className="text-gray-700">
                Bu hesaptaki yazışmaların içeriğine serbestçe bakabilme
                yetkisi. Kurul, bunun mülkiyetten otomatik olarak
                doğmadığını, ayrı bir hukuki sebebe, önceden aydınlatmaya ve
                ölçülülük testine bağlı olduğunu belirtiyor.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Pratikte en sık görülen hata tam burada ortaya çıkıyor: işveren,
            &quot;hesap şirkete ait, istediğim zaman açıp bakarım&quot;
            varsayımıyla hareket ediyor. Kurul&apos;un kararı bu varsayımı
            açıkça reddediyor. Teknik olarak erişebilmek de ayrı bir konu;
            BT ekibinin sistem yönetimi amacıyla bir hesaba teknik erişimi
            olması, o hesabın içeriğini inceleme yetkisi anlamına gelmiyor.
          </p>
        </div>
      </section>

      {/* 4. AYDINLATMA */}
      <section id="aydinlatma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Aydınlatma Yükümlülüğü Ne İçermeli?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Karar, çalışma sözleşmesi veya personel el kitabındaki tek bir
          genel-geçer cümlenin (&quot;şirket e-postanız denetlenebilir&quot;
          gibi) aydınlatma yükümlülüğünü karşılamadığını açıkça belirtiyor.
          Çalışan, denetim başlamadan önce ve somut biçimde şu konularda
          bilgilendirilmelidir:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li><strong>Amaç:</strong> Denetimin hangi somut gerekçeyle yapıldığı (bilgi güvenliği, ticari sır koruması, performans vb.)</li>
            <li><strong>Kapsam:</strong> Hangi hesapların/kanalların denetime tabi olduğu</li>
            <li><strong>Yöntem:</strong> Trafik/log incelemesi mi yapılacağı, içerik erişiminin hangi şartlarda devreye gireceği</li>
            <li><strong>Kişisel kullanım kuralı:</strong> Kurumsal hesaplarda kişisel kullanımın yasak olup olmadığı, yasaksa bunun nasıl duyurulduğu</li>
            <li><strong>Saklama süresi:</strong> Denetim kayıtlarının ne kadar süre saklanacağı</li>
            <li><strong>İlgili kişi hakları:</strong> Çalışanın KVKK m.11 kapsamındaki başvuru hakları</li>
          </ul>
        </div>
      </section>

      {/* 5. HUKUKİ SEBEP */}
      <section id="hukuki-sebep" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Açık Rıza Neden Yeterli Hukuki Sebep Sayılmıyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Çoğu şirket, işe başlarken imzalatılan bir açık rıza formunun
          konuyu çözdüğünü düşünür. Kurul bu yaklaşıma mesafeli: işçi ile
          işveren arasındaki ekonomik ve hukuki güç dengesizliği nedeniyle,
          işe alım sırasında veya istihdam devam ederken alınan açık rızanın
          gerçekten özgür iradeyle verilip verilmediği tartışmalıdır.
          Çalışan, işini kaybetme riskiyle karşı karşıya kaldığında rızayı
          reddetme özgürlüğüne sahip sayılmayabilir.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bunun yerine Kurul, denetimin somut olaya göre şu hukuki
          sebeplerden birine dayandırılabileceğini belirtiyor: bir kanun
          hükmünün gereğinin yerine getirilmesi, bir hakkın tesisi veya
          korunması için verinin işlenmesinin zorunlu olması, ya da
          işverenin meşru menfaati. Ancak bu sebeplerin varlığı da
          işverene otomatik ve sınırsız bir denetim yetkisi vermez; her
          durumda ölçülülük testi ayrıca uygulanır.
        </p>
      </section>

      {/* 6. KADEMELİ DENETİM */}
      <section id="kademeli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Kademeli Denetim: Trafik mi, İçerik mi?
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Kararın uygulamadaki en somut katkısı, denetimi tek bir eylem
          değil, kademeli bir süreç olarak tanımlaması:
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Trafik/Log İncelemesi</h3>
            <p className="mt-3 text-sm text-gray-600">Kim kime, ne zaman, ne büyüklükte veri göndermiş; içeriğe dokunulmaz</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Somut Şüphenin Doğması</h3>
            <p className="mt-3 text-sm text-gray-600">Trafik incelemesi, bilgi sızıntısı veya kural ihlaline işaret eden belirtiler ortaya koyar</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Sınırlı İçerik Erişimi</h3>
            <p className="mt-3 text-sm text-gray-600">Ancak iddianın gerektirdiği ölçüde, yetkilendirilmiş kişilerce ve kayıt altında</p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Uygulamada en sık gözden kaçan
            nokta, işverenlerin bu kademeli yapıyı atlayıp doğrudan içerik
            incelemesine geçmesi. Kurul&apos;un yaklaşımında, filtreleme
            veya trafik analizi gibi daha az müdahaleci bir yöntemle amaca
            ulaşılabiliyorsa, içerik erişimi ölçülü kabul edilmiyor. Bu da
            şirketlerin denetim politikalarını &quot;önce trafik, gerekirse
            içerik&quot; mantığıyla iki aşamalı kurgulamasını, ikinci
            aşamaya geçiş gerekçesini de yazılı olarak belgelemesini
            gerektiriyor.
          </p>
        </div>
      </section>

      {/* 7. AYRILAN ÇALIŞAN */}
      <section id="ayrilan-calisan" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. İşten Ayrılan Çalışanın Hesabı Ne Olur?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Karar, iş ilişkisi sona erdikten sonraki duruma da ayrıca
          değiniyor. Genel kural, çalışanın hesabının aktif kullanıma ve
          yeni erişime kapatılması ve artık hukuki dayanağı kalmayan
          verilerin imha edilmesi. Hesabı süresiz açık bırakmak, gelen
          e-postaları sınırsız biçimde yöneticiye yönlendirmek veya
          otomatik yanıtı belirsiz bir süre aktif tutmak, karardaki ölçülülük
          ilkesiyle uyuşmuyor.
        </p>
        <p className="leading-8 text-gray-700">
          İş sürekliliği, hukuki savunma veya kanuni bir yükümlülüğün
          yerine getirilmesi gibi somut ve belgelenebilir bir gerekçe varsa,
          sınırlı ve süreli bir yönlendirme/arşivleme mümkün; ancak bu
          istisna, kuraldan ayrı olarak her olayda tek tek değerlendirilmesi
          gereken bir durum.
        </p>
      </section>

      {/* 8. CEZALAR */}
      <section id="cezalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. İhlal Halinde Karşılaşılabilecek Yaptırımlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2026/2035 sayılı karar, kendi içinde ayrı bir ceza maddesi
          içermiyor; ihlaller, 6698 sayılı Kanun&apos;un m.18&apos;inde
          düzenlenen genel idari para cezası rejimine göre değerlendiriliyor.
          Denetim ihlalinin niteliğine göre uygulanabilecek, 2026 yılı için
          güncellenmiş kalemler şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">İhlal Türü</th>
                <th className="p-5">Alt Sınır</th>
                <th className="p-5">Üst Sınır</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Aydınlatma yükümlülüğüne aykırılık (yetersiz/geçersiz bilgilendirme)</td>
                <td className="p-5">≈ 85.400 TL</td>
                <td className="p-5">≈ 1.709.200 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Veri güvenliği yükümlülüklerine aykırılık (yetkisiz erişim, erişim kaydı tutmama)</td>
                <td className="p-5">≈ 256.357 TL</td>
                <td className="p-5">≈ 17.092.242 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurul kararlarının yerine getirilmemesi (şikâyet sonrası düzeltilmemesi)</td>
                <td className="p-5">≈ 427.263 TL</td>
                <td className="p-5">≈ 17.092.242 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            İdari para cezasının yanı sıra, usulsüz e-posta/mesaj denetimi
            tespit edilen bir işten çıkarmanın dayanağı sayılıyorsa, bu
            durum iş mahkemesinde işe iade veya tazminat davasının da
            dayanağı olabiliyor. Yani risk, tek başına KVKK cezasıyla
            sınırlı değil; iş hukuku tarafında da ayrı bir maliyet
            doğurabiliyor.
          </p>
        </div>
      </section>

      {/* 9. CHECKLIST */}
      <section id="checklist" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. İşverenler İçin Uyum Checklist&apos;i
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">1. İletişim kanallarının envanterini çıkarın</p>
            <p className="mt-2 text-sm text-gray-600">E-posta, mesajlaşma, CRM, toplantı platformu dahil tüm kurumsal kanalları listeleyin.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">2. Kişisel kullanım kuralını yazılı hale getirin</p>
            <p className="mt-2 text-sm text-gray-600">Kurumsal hesapta kişisel kullanımın serbest mi, sınırlı mı, yasak mı olduğunu açıkça belirleyin ve duyurun.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">3. Denetimi trafik ve içerik olarak ayırın</p>
            <p className="mt-2 text-sm text-gray-600">İçerik erişimine ne zaman geçileceğine ilişkin yazılı bir prosedür belirleyin.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">4. Aydınlatma metnini güncelleyin</p>
            <p className="mt-2 text-sm text-gray-600">Amaç, kapsam, yöntem, saklama süresi ve haklar bölümlerini somutlaştırın.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">5. Erişim yetkisini sınırlayın ve kayıt tutun</p>
            <p className="mt-2 text-sm text-gray-600">Denetim verisine kimin eriştiğini loglayın, erişimi yalnızca yetkili kişilerle sınırlayın.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">6. İşten çıkış prosedürünü belgeleyin</p>
            <p className="mt-2 text-sm text-gray-600">Hesap kapatma, yönlendirme ve veri imha adımlarını standart bir sürece bağlayın.</p>
          </div>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı, aşağıdaki birincil ve resmî kaynaklara dayanmaktadır.
          Uygulamaya geçmeden önce kararın tam metnini okumanızı öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <a href="https://www.resmigazete.gov.tr/eskiler/2026/10/20261008-6.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              8 Ekim 2026 tarihli ve 33394 sayılı Resmî Gazete
            </a>{" "}
            (Kişisel Verileri Koruma Kurulu&apos;nun 2026/2035 sayılı ilke kararının yayımlandığı nüsha)
          </li>
          <li>
            <a href="https://www.kvkk.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Kişisel Verileri Koruma Kurumu resmî internet sitesi (kvkk.gov.tr)
            </a>{" "}
            (Kurul kararları ve duyurular sayfası)
          </li>
          <li>
            6698 sayılı Kişisel Verilerin Korunması Kanunu, m.10 (Aydınlatma), m.12 (Veri Güvenliği) ve m.18 (İdari Para Cezaları)
          </li>
        </ul>
      </section>

      {/* 11. BİZ */}
      <section id="biz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Uyum Sürecinizi Biz Yönetelim
        </h2>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Aydınlatma Metninden Denetim Prosedürüne Kadar Tek Elden
          </h3>
          <p className="leading-8 text-gray-700">
            Koray Akdağ / Sistem Global Danışmanlık olarak, şirketinizin
            mevcut e-posta ve iletişim kanalı denetim uygulamasını
            2026/2035 sayılı karar karşısında değerlendiriyor, aydınlatma
            metninizi güncelliyor ve kademeli denetim prosedürünüzü
            birlikte kuruyoruz. Ayrı bir hukuk bürosu veya danışmanlık
            firması aramanıza gerek kalmadan, KVKK uyum sürecinizi ve
            sonrasındaki periyodik takibi tek noktadan yürütebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin mevcut denetim uygulamasını birlikte gözden
              geçirmek için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 12. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İşveren çalışanın kurumsal e-postasını hiç denetleyemez mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, tamamen yasaklanmıyor. Karar, denetimi yasaklamıyor;
              hangi şartlarda ve nasıl yapılabileceğine sınır çiziyor.
              Önceden aydınlatma yapılmış, meşru bir hukuki sebebe
              dayandırılmış ve ölçülü biçimde (önce trafik, gerekirse
              içerik) yürütülen bir denetim mümkün.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Çalışma sözleşmesinde &quot;e-postanız denetlenebilir&quot; yazması yeterli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Kurul&apos;a göre yeterli değil. Bu tür genel-geçer bir cümle,
              somut aydınlatma yükümlülüğünü karşılamıyor. Aydınlatmanın
              amaç, kapsam, yöntem, saklama süresi ve çalışanın haklarını
              ayrı ayrı içermesi gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Çalışanın açık rızasını alırsak denetim her zaman hukuka uygun olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. İşçi-işveren ilişkisindeki güç dengesizliği nedeniyle
              Kurul, açık rızanın tek başına yeterli ve güvenilir bir
              hukuki sebep olmadığını değerlendiriyor. Denetim, kanuni
              yükümlülük, hak tesisi/koruması veya meşru menfaat gibi başka
              bir sebebe dayandırılmalı ve her halde ölçülülük testine tabi
              olmalı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yalnızca trafik/log kaydına bakmak, içerik okumaktan farklı mı sayılıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Kurul, trafik/log incelemesini de kişisel veri işleme
              saysa da, içerik erişimine kıyasla daha az müdahaleci kabul
              ediyor. İçeriğe erişim, ancak trafik incelemesi yetersiz
              kaldığında ve somut bir şüphe bulunduğunda son çare olarak
              devreye girmeli.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Karar yalnızca e-postayı mı kapsıyor, yoksa WhatsApp/kurumsal mesajlaşmayı da mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Başlıkta kurumsal e-posta özellikle anılsa da karar, somut
              olayın özelliklerine göre kurum içi mesajlaşma uygulamalarını,
              CRM/talep sistemlerini ve toplantı platformlarındaki sohbet ve
              kayıt alanlarını da kapsayabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İşten ayrılan bir çalışanın e-posta hesabını süresiz açık tutabilir miyiz?
            </h3>
            <p className="leading-8 text-gray-700">
              Önerilmiyor. Genel kural, hesabın aktif kullanıma kapatılması
              ve hukuki dayanağı kalmayan verinin imha edilmesidir. İş
              sürekliliği veya hukuki savunma gibi somut bir gerekçe varsa
              sınırlı ve süreli bir yönlendirme/arşivleme yapılabilir, ancak
              bu her olayda ayrıca değerlendirilmelidir.
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
          2026/2035 sayılı ilke kararı, iş yerlerinde yıllardır belirsiz bir
          alan olan e-posta ve iletişim kanalı denetimine somut bir çerçeve
          getiriyor. Kararın özeti şu: kurumsal hesabın işverene ait olması,
          denetim yetkisini otomatik ve sınırsız hale getirmiyor; denetim
          önceden duyurulmalı, meşru bir hukuki sebebe dayanmalı ve kademeli
          (önce trafik, gerekirse içerik) biçimde yürütülmeli. Bu kuralları
          şimdiden uygulamaya alan şirketler, hem KVKK denetim riskini hem
          de olası bir işten çıkarma uyuşmazlığında doğacak ek maliyeti
          önemli ölçüde azaltıyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin mevcut e-posta ve iletişim kanalı denetim
          uygulamasının bu karara ne kadar uyumlu olduğunu birlikte
          değerlendirmek, aydınlatma metinlerinizi güncellemek ve kademeli
          denetim prosedürünüzü kurmak için Koray Akdağ / Sistem Global
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
            href="/blog/kvkk-uyum-sureci-sirketler-icin-kisisel-verilerin-korunmasi-rehberi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HUKUK DANIŞMANLIĞI • KVKK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KVKK Uyum Süreci: Şirketler İçin Kişisel Verilerin Korunması Rehberi 2026</h3>
          </Link>
          <Link
            href="/blog/yapay-zeka-kvkk-otomatik-karar-alma-kisisel-veri-isleme-sinirlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HUKUK DANIŞMANLIĞI • KVKK • YAPAY ZEKÂ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yapay Zeka ve KVKK: Otomatik Karar Alma ile Kişisel Veri İşleme Sınırları</h3>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"İşveren çalışanın kurumsal e-postasını hiç denetleyemez mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, tamamen yasaklanmıyor. Karar, denetimi yasaklamıyor; hangi şartlarda ve nasıl yapılabileceğine sınır çiziyor. Önceden aydınlatma yapılmış, meşru bir hukuki sebebe dayandırılmış ve ölçülü biçimde (önce trafik, gerekirse içerik) yürütülen bir denetim mümkün."}},{"@type":"Question","name":"Çalışma sözleşmesinde 'e-postanız denetlenebilir' yazması yeterli mi?","acceptedAnswer":{"@type":"Answer","text":"Kurul'a göre yeterli değil. Bu tür genel-geçer bir cümle, somut aydınlatma yükümlülüğünü karşılamıyor. Aydınlatmanın amaç, kapsam, yöntem, saklama süresi ve çalışanın haklarını ayrı ayrı içermesi gerekiyor."}},{"@type":"Question","name":"Çalışanın açık rızasını alırsak denetim her zaman hukuka uygun olur mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır. İşçi-işveren ilişkisindeki güç dengesizliği nedeniyle Kurul, açık rızanın tek başına yeterli ve güvenilir bir hukuki sebep olmadığını değerlendiriyor. Denetim, kanuni yükümlülük, hak tesisi/koruması veya meşru menfaat gibi başka bir sebebe dayandırılmalı ve her halde ölçülülük testine tabi olmalı."}},{"@type":"Question","name":"Yalnızca trafik/log kaydına bakmak, içerik okumaktan farklı mı sayılıyor?","acceptedAnswer":{"@type":"Answer","text":"Evet. Kurul, trafik/log incelemesini de kişisel veri işleme saysa da, içerik erişimine kıyasla daha az müdahaleci kabul ediyor. İçeriğe erişim, ancak trafik incelemesi yetersiz kaldığında ve somut bir şüphe bulunduğunda son çare olarak devreye girmeli."}},{"@type":"Question","name":"Karar yalnızca e-postayı mı kapsıyor, yoksa kurumsal mesajlaşmayı da mı?","acceptedAnswer":{"@type":"Answer","text":"Başlıkta kurumsal e-posta özellikle anılsa da karar, somut olayın özelliklerine göre kurum içi mesajlaşma uygulamalarını, CRM/talep sistemlerini ve toplantı platformlarındaki sohbet ve kayıt alanlarını da kapsayabiliyor."}},{"@type":"Question","name":"İşten ayrılan bir çalışanın e-posta hesabını süresiz açık tutabilir miyiz?","acceptedAnswer":{"@type":"Answer","text":"Önerilmiyor. Genel kural, hesabın aktif kullanıma kapatılması ve hukuki dayanağı kalmayan verinin imha edilmesidir. İş sürekliliği veya hukuki savunma gibi somut bir gerekçe varsa sınırlı ve süreli bir yönlendirme/arşivleme yapılabilir, ancak bu her olayda ayrıca değerlendirilmelidir."}}]}) }}
      />
    </BlogLayout>
  );
}
