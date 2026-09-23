import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Ticari Sözleşme Yönetimi: Tedarikçi, Bayi ve Distribütörlük Sözleşmeleri | Koray Akdağ",
  description: "Tedarikçi sözleşmelerinde cezai şart ve mücbir sebep maddeleri, bayilik sözleşmelerinde münhasırlık ve fesih tazminatı, distribütörlük sözleşmelerinde bölge kısıtlamaları ile TBK ve Rekabet Kurumu mevzuatına dayanan kapsamlı rehber.",
  keywords: [
    "ticari sözleşme yönetimi",
    "tedarikçi sözleşmesi dikkat edilecekler",
    "bayilik sözleşmesi feshi tazminat",
    "distribütörlük sözleşmesi nedir",
    "bayilik sözleşmesi münhasırlık",
    "cezai şart TBK 179",
    "denkleştirme tazminatı bayilik",
    "dikey anlaşmalar tebliği bayilik",
    "tedarikçi sözleşmesi mücbir sebep",
    "bayi distribütör sözleşme farkı",
  ],
  alternates: {
    canonical: "/blog/ticari-sozlesme-yonetimi-tedarikci-bayi-distributorluk-sozlesmeleri",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Ticari Sözleşme Yönetimi: Tedarikçi, Bayi ve Distribütörlük Sözleşmelerinde Dikkat Edilmesi Gerekenler"
      description="KOBİ'lerin standart şablonlarla veya sözleşmesiz yürüttüğü tedarikçi, bayi ve distribütör ilişkileri; teslimat gecikmesinden fesih sonrası tazminata kadar ciddi operasyonel ve finansal riskler taşıyor. Cezai şart, münhasırlık, denkleştirme tazminatı ve Rekabet Kurumu'nun dikey anlaşmalar tebliğiyle güncel çerçeve."
      category="TİCARİ SÖZLEŞMELER • İŞ GELİŞTİRME • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="ticari-sozlesme-yonetimi-tedarikci-bayi-distributorluk-sozlesmeleri"
      coverImage="https://images.unsplash.com/photo-1645736315000-6f788915923b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Ticari Sözleşme Yönetiminde Öncelik Sırası
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Tedarikçi sözleşmelerinde <strong>teslimat/performans şartları, fiyat revizyon maddesi, gecikme cezası (TBK m.179-182)</strong> ve mücbir sebep tanımının açık yazılması gerekir.</li>
          <li>✔ Bayi, tedarikçinin adına değil <strong>kendi adına ve kendi hesabına</strong> satış yapan bağımsız bir tacirdir; bu fark, bayinin sorumluluk ve vergi konumunu doğrudan belirler.</li>
          <li>✔ Yargıtay, acenteye özgü <strong>TTK m.122 denkleştirme (portföy) tazminatını</strong>, belirli şartlarda kıyasen münhasır bayilik sözleşmelerine de uygulamaktadır.</li>
          <li>✔ Distribütörlük sözleşmelerinde bölge/müşteri kısıtlamaları, Rekabet Kurumu&apos;nun <strong>2002/2 sayılı Dikey Anlaşmalara İlişkin Grup Muafiyeti Tebliği</strong> çerçevesinde değerlendirilir.</li>
          <li>✔ Sözleşme sonrası rekabet yasağı maddeleri süre, yer ve konu bakımından sınırlı olmalıdır; sınırsız veya aşırı geniş yasaklar hem TBK&apos;nın genel ilkeleri hem de rekabet mevzuatı açısından risk taşır.</li>
          <li>✔ Yabancı taraflı sözleşmelerde tahkim mi yoksa yetkili mahkeme mi seçileceği ve uygulanacak hukuk, sözleşme imzalanmadan önce netleştirilmesi gereken ayrı bir başlıktır.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-onemli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Sözleşme Yönetimi Neden Sadece Hukuki Değil?
          </Link>
          <Link href="#tedarikci-sozlesmeleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Tedarikçi Sözleşmelerinde Dikkat Edilecek Unsurlar
          </Link>
          <Link href="#bayilik-sozlesmeleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Bayilik Sözleşmeleri ve Fesih Sonrası Tazminat
          </Link>
          <Link href="#distributorluk-sozlesmeleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Distribütörlük Sözleşmeleri ve Bölge Kısıtlamaları
          </Link>
          <Link href="#fesih-rekabet-yasagi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Fesih ve Rekabet Yasağı Maddeleri
          </Link>
          <Link href="#anlasmazlik-cozumu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Anlaşmazlık Çözümü: Tahkim mi, Mahkeme mi?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Kimler İçin Öncelikli?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Adım Adım Sözleşme Yönetimi Süreci
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
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDEN ÖNEMLİ */}
      <section id="neden-onemli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Sözleşme Yönetimi Neden Sadece Hukuki Değil, Operasyonel Bir Konu?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Birçok KOBİ, tedarikçisiyle, bayisiyle veya distribütörüyle
          ilişkisini internetten indirilmiş bir şablon sözleşmeyle ya da
          hiçbir yazılı sözleşme olmadan, karşılıklı güvene dayanarak
          yürütüyor. İş hacmi küçükken bu yaklaşım sorun yaratmayabilir.
          Ancak sipariş adedi artıp tedarikçi sayısı çoğaldıkça veya bayi
          ağı büyüdükçe, sözleşmedeki her boşluk gerçek bir ticari riske
          dönüşüyor: gecikmiş bir teslimat yüzünden üretim durabilir, bir
          bayi tek taraflı olarak sözleşmeyi feshedip tazminat talep
          edebilir veya bir distribütörle yapılan bölge kısıtlaması
          Rekabet Kurumu incelemesine konu olabilir.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Ticari sözleşme yönetimi (contract management), sözleşmeyi
          sadece imzalanıp bir çekmecede saklanan bir kağıt olarak değil,
          şirketin tedarik zincirini ve satış kanalını koruyan aktif bir
          risk yönetimi aracı olarak ele almayı gerektirir. Bu bakış
          açısı, aynı zamanda{" "}
          <Link href="/blog/kobiler-icin-satis-stratejisi-ve-crm-surecleri" className="text-orange-600 underline">
            KOBİ&apos;ler için satış stratejisi ve CRM süreçleri
          </Link>{" "}
          yazımızda ele aldığımız bayi/kanal yönetiminin, sadece satış
          hedefleriyle değil hukuki çerçeveyle de birlikte kurgulanması
          gerektiği fikrinin doğal bir devamı.
        </p>
        <p className="leading-8 text-gray-700">
          Standart bir şablon sözleşmenin en büyük eksiği, genellikle
          tarafların gerçek ticari ilişkisine göre değil, genel-geçer bir
          kalıba göre yazılmış olmasıdır. Fiyat revizyon mekanizması
          olmayan bir tedarikçi sözleşmesi, döviz kurundaki bir hareketle
          birlikte kâr marjını eritebilir; fesih koşulları belirsiz bir
          bayilik sözleşmesi, ilişkinin sona ermesi gerektiğinde
          beklenmedik bir tazminat talebiyle karşılaşılmasına yol
          açabilir.
        </p>
      </section>

      {/* 2. TEDARİKÇİ SÖZLEŞMELERİ */}
      <section id="tedarikci-sozlesmeleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Tedarikçi Sözleşmelerinde Dikkat Edilecek Unsurlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tedarikçi sözleşmesi, bir şirketin hammadde, yarı mamul veya
          hizmet alımını düzenleyen ve üretim/operasyon sürekliliğini
          doğrudan etkileyen sözleşme türüdür. Aşağıdaki beş unsur, en sık
          gözden kaçan ve en yüksek riski taşıyan maddelerdir:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📦 Teslimat ve Performans Şartları</h3>
            <p className="text-gray-700">
              Teslim süresi, teslim yeri, kısmi teslimat imkânı ve kabul
              kriterleri (miktar, kalite, ambalaj) açıkça yazılmalı.
              &quot;Makul sürede teslim edilir&quot; gibi belirsiz
              ifadeler, gecikme iddiasının ispatını zorlaştırır.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💱 Fiyat Revizyon / Endeksleme</h3>
            <p className="text-gray-700">
              Uzun süreli tedarikçi ilişkilerinde fiyatın hangi periyotta,
              hangi endekse (döviz kuru, ÜFE, hammadde borsa fiyatı) bağlı
              olarak revize edileceği önceden belirlenmeli; aksi halde
              revizyon talebi her seferinde pazarlık konusu olur.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">⏱️ Gecikme Cezası (Cezai Şart)</h3>
            <p className="text-gray-700">
              TBK m.179-182 uyarınca taraflar, borcun hiç veya gereği
              gibi ya da zamanında ifa edilmemesi hâli için bir ceza
              koşulu kararlaştırabilir. Ceza miktarı serbestçe
              belirlenebilir, ancak hâkim aşırı gördüğü bir ceza
              koşulunu kendiliğinden indirebilir; bu nedenle ceza
              tutarının gerçekçi ve orantılı belirlenmesi, sözleşmenin
              uygulanabilirliği açısından önemlidir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🌪️ Mücbir Sebep Maddesi</h3>
            <p className="text-gray-700">
              Hangi olayların mücbir sebep sayılacağı (doğal afet, savaş,
              genel grev, ithalat/ihracat yasağı gibi), bildirim süresi ve
              mücbir sebebin sonucu (askıya alma mı, fesih hakkı mı)
              sözleşmede somut şekilde tanımlanmalı; genel bir cümleyle
              geçiştirilmemeli.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🔍 Kalite ve Ayıp Sorumluluğu</h3>
            <p className="text-gray-700">
              Teslim edilen malın sözleşmeye uygun olmaması (ayıp) hâlinde
              alıcının muayene ve ihbar yükümlülüğü, iade/değişim süreci
              ve ayıptan doğan sorumluluğun sınırları açıkça
              düzenlenmeli. Bu konuda TBK&apos;nın satış sözleşmesine
              ilişkin ayıba karşı tekeffül hükümleri, tedarik
              sözleşmelerinde de yol gösterici referans noktasıdır.
            </p>
          </div>
        </div>
      </section>

      {/* KARIŞTIRMAYIN */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Bayilik ile Distribütörlük Aynı Şey Değil
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Bayilik:</strong> Genellikle daha sınırlı bir bölgede, tek bir üreticinin/markanın ürünlerini kendi adına ve hesabına, nihai tüketiciye veya alt satıcılara satan bağımsız tacir ilişkisidir.</li>
            <li><strong>Distribütörlük:</strong> Genellikle daha geniş bir bölgeyi (bir ülke veya birden çok il) kapsayan, çoğu zaman ithalat/lojistik/depolama yetkisini de içeren ve kendi altında bir bayi ağı kurabilen daha üst kademeli bir dağıtım ilişkisidir.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Türk hukukunda bayilik ve distribütörlük sözleşmelerini
            ayrı ayrı düzenleyen özel bir kanun bulunmuyor; ikisi de
            Türk Borçlar Kanunu&apos;nun genel hükümlerine dayanan
            isimsiz sözleşmeler. Ancak isim farkı önemsiz değil: taraflar
            arasındaki ilişkinin fiilen bayilik mi yoksa distribütörlük
            mü olduğu, sözleşmenin başlığından değil, tarafların gerçek
            yetki ve sorumluluk dağılımından anlaşılır ve fesih sonrası
            tazminat değerlendirmesinde bu fiili nitelendirme belirleyici
            olur.
          </p>
        </div>
      </section>

      {/* 3. BAYİLİK SÖZLEŞMELERİ */}
      <section id="bayilik-sozlesmeleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Bayilik Sözleşmeleri ve Fesih Sonrası Tazminat Riski
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bayi, acenteden farklı olarak başkası adına aracılık etmez;
          malı tedarikçiden kendi adına ve kendi hesabına satın alıp
          kendi müşterilerine kendi adına satar. Bu fark, bayinin vergi
          mükellefiyeti, stok riski ve sorumluluk konumunu doğrudan
          belirler. Bayilik sözleşmesinde en çok tartışma yaratan üç
          başlık şunlardır:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li><strong>Münhasırlık (Exclusivity):</strong> Bayinin belirli bir bölgede tek yetkili satıcı olması. Münhasırlık, bayiye güvence verirken tedarikçiyi de o bölgede başka bir kanal açmaktan alıkoyar; bölge sınırlarının ve münhasırlığın karşılığında bayiden beklenen asgari performansın net tanımlanması gerekir.</li>
          <li><strong>Asgari Satış Hedefleri:</strong> Sözleşmede yıllık/dönemsel asgari satış veya sipariş hedefi öngörülebilir. Hedefe ulaşılamaması sözleşmenin feshi için gerekçe sayılabilir, ancak hedefin gerçekçi belirlenip belirlenmediği ve bayiye önceden makul bir süre/uyarı verilip verilmediği, olası bir uyuşmazlıkta değerlendirmeye alınır.</li>
          <li><strong>Fesih Sonrası Tazminat:</strong> Bayilik sözleşmesi sona erdiğinde, bayinin kendi çabasıyla oluşturduğu müşteri portföyünden tedarikçinin fayda sağlamaya devam etmesi söz konusu olabilir.</li>
        </ul>
        <div className="mt-8 rounded-2xl border-l-4 border-[#071A2F] bg-gray-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
            Denkleştirme (Portföy) Tazminatı: TTK m.122&apos;nin Kıyasen Uygulanması
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Türk Ticaret Kanunu&apos;nun 122. maddesi, sözleşme sona
            erdiğinde acentenin kazandırdığı yeni müşteri portföyünden
            müvekkilin (üreticinin/sağlayıcının) yararlanmaya devam
            etmesi hâlinde acenteye bir denkleştirme tazminatı hakkı
            tanır. Bu hüküm doğrudan bayilik ilişkileri için yazılmamış
            olsa da, Yargıtay&apos;ın yerleşik içtihadına göre, özellikle
            <strong> münhasır bayilik (tek satıcılık)</strong>{" "}
            ilişkilerinde bayinin acenteye benzer şekilde bağımsız bir
            tacir olarak müşteri portföyü oluşturması durumunda, bu
            hüküm kıyasen bayilik sözleşmelerine de uygulanabiliyor.
          </p>
          <p className="mb-4 leading-8 text-gray-700">
            Tazminatın doğması için genel olarak üç unsurun birlikte
            gerçekleşmesi aranır: bayinin tedarikçiye yeni müşteriler
            kazandırmış olması, sözleşme sona erdikten sonra
            tedarikçinin bu müşteri çevresinden önemli menfaat elde
            etmeye devam etmesi ve tazminat ödenmesinin somut olayda
            hakkaniyete uygun düşmesi. TTK m.122/2, tazminatın üst
            sınırını da açıkça belirler: tazminat, bayinin son beş
            yıllık faaliyeti boyunca elde ettiği yıllık kazancın
            ortalamasını aşamaz; sözleşme beş yıldan kısa sürmüşse
            faaliyetin fiilen sürdüğü dönemin ortalaması esas alınır.
          </p>
          <p className="leading-8 text-gray-700">
            Sözleşmeye &quot;fesih hâlinde bayi hiçbir tazminat talep
            edemez&quot; şeklinde bir hüküm konulması, tek başına bu
            hakkı ortadan kaldırmayabilir; zira denkleştirme, kanunun
            emredici nitelikte kabul edilen bir korumasıdır. Bu nedenle
            hem tedarikçi hem bayi tarafında, fesih öncesinde bu riskin
            somut olay bazında değerlendirilmesi önemlidir.
          </p>
        </div>
      </section>

      {/* 4. DİSTRİBÜTÖRLÜK SÖZLEŞMELERİ */}
      <section id="distributorluk-sozlesmeleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Distribütörlük Sözleşmeleri ve Bölge Kısıtlamaları
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Distribütörlük sözleşmeleri de, tıpkı bayilik gibi, Rekabet
          Kurumu tarafından <strong>dikey anlaşma</strong> olarak
          sınıflandırılır ve <strong>2002/2 sayılı Dikey Anlaşmalara
          İlişkin Grup Muafiyeti Tebliği</strong> kapsamında
          değerlendirilir. Bu, franchise sözleşmelerinin tabi olduğu
          çerçeveyle aynı Tebliğ; ancak distribütörlük sözleşmelerinde
          asıl hassasiyet konusu genellikle marka kullanımı değil, bölge
          ve müşteri kısıtlamalarıdır. Bu konuyu daha ayrıntılı ele alan{" "}
          <Link href="/blog/franchise-sistemi-kurmak-marka-sahibi-icin-surec-sozlesme-sartlari" className="text-orange-600 underline">
            Franchise Sistemi Kurmak
          </Link>{" "}
          yazımızda, aynı Tebliğ&apos;in marka lisansı boyutuna
          değinilmişti; burada dağıtım ağı boyutuna odaklanıyoruz.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Tebliğ&apos;in genel mantığı şu: tedarikçinin ilgili pazardaki
          payı belirli bir eşiğin altında kalıyorsa (franchise
          sözleşmelerinde olduğu gibi genellikle %30 eşiği referans
          alınır), aktif satış kısıtlamaları (distribütörün başka bir
          bölgeye yönelik reklam veya doğrudan pazarlama yapmasının
          sınırlanması) belirli şartlarla grup muafiyetinden
          yararlanabilir. Buna karşılık, pasif satışların (bölge dışından
          gelen kendiliğinden bir siparişin karşılanmaması gibi) tamamen
          yasaklanması, özellikle internet üzerinden satışı engelleyecek
          şekilde kurgulanan maddeler, rekabet hukuku açısından ciddi
          risk taşır.
        </p>
        <p className="leading-8 text-gray-700">
          Distribütöre sözleşme süresince başka markaların ürünlerini
          satmama yükümlülüğü (rekabet etmeme yükümlülüğü) getirilmesi
          de mümkündür, ancak Tebliğ bu yükümlülüğün süresiz olmasına ya
          da <strong>beş yılı aşmasına</strong> izin vermez; bu sınırın
          aşılması hâlinde ilgili madde, sözleşmenin geri kalanından
          ayrılabilir nitelikteyse yalnızca o madde grup muafiyeti
          dışında kalır.
        </p>
      </section>

      {/* UZMAN NOTU */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, sözleşmenin başlığında
            &quot;bayilik&quot; veya &quot;distribütörlük&quot; yazsa
            bile, olası bir uyuşmazlıkta mahkemenin ilişkinin fiilen
            nasıl yürüdüğüne bakmasıdır. Bayinin ne kadar bağımsız
            hareket ettiği, tedarikçinin fiyat ve pazarlama üzerindeki
            kontrol düzeyi, müşteri portföyünün kime ait sayıldığı gibi
            fiili unsurlar, sözleşme metnindeki isimlendirmeden daha
            belirleyici olabiliyor. Bu nedenle sözleşme hazırlanırken
            sadece başlık ve şablon maddeler değil, tarafların
            günlük operasyonda gerçekte nasıl çalışacağı da metne
            yansıtılmalı; aksi halde sözleşme kağıt üzerinde bir şey
            söylerken, taraflar fiiliyatta başka bir ilişki
            yürütmüş olabiliyor.
          </p>
        </div>
      </section>

      {/* 5. FESİH VE REKABET YASAĞI */}
      <section id="fesih-rekabet-yasagi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Fesih ve Rekabet Yasağı Maddeleri
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Sözleşme sona erdikten sonra bayinin veya distribütörün belirli
          bir süre rakip markalarla çalışmasını yasaklayan maddeler
          sıkça talep edilir; ancak bu tür maddelerin geçerliliği
          sınırsız değildir. Türk Borçlar Kanunu&apos;nun genel
          ilkelerine göre, kişinin ekonomik özgürlüğünü aşırı ve
          süresiz biçimde kısıtlayan taahhütler, kişilik haklarının
          korunmasına ilişkin hükümler çerçevesinde geçersiz
          sayılabilir veya hâkim tarafından kapsam ve süre bakımından
          daraltılabilir.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu nedenle sözleşme sonrası rekabet yasağı maddesi hazırlanırken
          üç sınırlamaya dikkat edilmesi öneriliyor:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li><strong>Süre bakımından sınır:</strong> Yasağın makul, belirli bir süreyle sınırlı olması; süresiz veya aşırı uzun tutulan yasakların hâkim tarafından indirilme veya geçersiz sayılma riski taşıdığı bilinmeli.</li>
          <li><strong>Yer bakımından sınır:</strong> Yasağın, bayinin/distribütörün fiilen faaliyet gösterdiği bölgeyle sınırlı tutulması; ülke çapında veya sınırsız coğrafi kapsamlı yasakların savunulması güçleşir.</li>
          <li><strong>Konu bakımından sınır:</strong> Yasağın, sözleşme konusu ürün/hizmet grubuyla sınırlı olması; bayinin/distribütörün genel olarak ticari faaliyette bulunmasını engelleyecek genişlikte kaleme alınmaması.</li>
        </ul>
        <p className="mt-6 leading-8 text-gray-700">
          Ayrıca distribütörlük ve münhasır bayilik ilişkilerinde bu
          yasaklar Rekabet Kurumu&apos;nun dikey anlaşmalar mevzuatı
          açısından da ayrıca değerlendirilir; sözleşme süresi boyunca
          uygulanacak rekabet etmeme yükümlülüğü ile sözleşme sonrasına
          sarkan yükümlülükler farklı ve daha sıkı sınırlara tabi
          tutulabilir. Bu nedenle rekabet yasağı maddesi, genel bir TBK
          değerlendirmesiyle değil, rekabet hukuku boyutu da dahil
          edilerek hazırlanmalı.
        </p>
      </section>

      {/* 6. ANLAŞMAZLIK ÇÖZÜMÜ */}
      <section id="anlasmazlik-cozumu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Anlaşmazlık Çözümü: Tahkim mi, Yetkili Mahkeme mi?
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">Yetkili Mahkeme</th>
                <th className="p-5">Tahkim</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Süreç Hızı</td>
                <td className="p-5">Genellikle daha uzun, temyiz aşamalarına tabi</td>
                <td className="p-5">Genellikle daha hızlı, tek/az sayıda incelemeli</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Maliyet</td>
                <td className="p-5">Görece düşük harç/masraf</td>
                <td className="p-5">Hakem ücretleri nedeniyle görece yüksek</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Gizlilik</td>
                <td className="p-5">Kural olarak alenidir</td>
                <td className="p-5">Kural olarak gizli yürütülebilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yabancı Taraf İçin Uygulanabilirlik</td>
                <td className="p-5">Yabancı mahkeme kararının Türkiye&apos;de tanıma/tenfizi gerekebilir</td>
                <td className="p-5">New York Sözleşmesi sayesinde çok sayıda ülkede daha kolay tenfiz</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Uzmanlık</td>
                <td className="p-5">Genel mahkeme hakimi</td>
                <td className="p-5">Ticari/sektörel uzman hakem seçilebilir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Yerli iki taraf arasındaki, göreli olarak küçük hacimli
          sözleşmelerde çoğu zaman yetkili mahkemenin belirlenmesi
          yeterli olabiliyor. Buna karşılık, yurt dışında yerleşik bir
          tedarikçi veya distribütörle çalışılıyorsa, tahkim seçeneği
          ve kararların uluslararası düzeyde daha kolay tanınabilmesi
          önem kazanıyor. Yabancı taraflı sözleşmelerde ayrıca hangi
          ülke hukukunun uygulanacağı (uygulanacak hukuk/governing law
          maddesi) da mutlaka açıkça yazılmalı; bu madde
          belirtilmezse, uyuşmazlık çıktığında hangi hukukun
          uygulanacağı ayrı bir hukuki tartışma konusu haline
          gelebilir.
        </p>
      </section>

      {/* 7. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kimler İçin Öncelikli?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🚀 Sözleşme Gözden Geçirmesi Öncelikli Olanlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Tedarikçi ağını büyüten veya yeni tedarikçilerle çalışmaya başlayan üretim/imalat şirketleri</li>
              <li>✔ Bölgesel veya ülke çapında bayi/distribütör ağı kurmayı planlayan marka sahipleri</li>
              <li>✔ Halihazırda şablon veya sözleşmesiz çalışan, hacmi büyüyen KOBİ&apos;ler</li>
              <li>✔ Bir bayilik/distribütörlük ilişkisini feshetmeyi ya da fesih tehdidiyle karşılaşan taraflar</li>
              <li>✔ Yurt dışındaki bir tedarikçi/distribütörle sözleşme kuracak ihracatçı/ithalatçı şirketler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              ⏸️ Önceliği Görece Düşük Olan Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Tek seferlik, düşük tutarlı, tekrar etmeyen alım-satım işlemleri</li>
              <li>✔ Sözleşme metinleri düzenli olarak hukuk danışmanlığıyla güncellenen, kurumsallaşmış şirketler</li>
              <li>✔ Aynı grup şirketleri arasındaki, üçüncü taraf riski taşımayan iç işlemler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Adım Adım Sözleşme Yönetimi Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="text-base font-bold">1. Envanter Çıkarma</h3>
            <p className="mt-2 text-sm text-gray-600">Şirketin aktif tedarikçi, bayi ve distribütör sözleşmelerinin tam listesinin ve sürelerinin çıkarılması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">⚖️</div>
            <h3 className="text-base font-bold">2. Risk Taraması</h3>
            <p className="mt-2 text-sm text-gray-600">Eksik cezai şart, mücbir sebep, fesih ve tazminat maddelerinin tek tek tespit edilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📄</div>
            <h3 className="text-base font-bold">3. Şablon Güncelleme</h3>
            <p className="mt-2 text-sm text-gray-600">İlişki türüne (tedarikçi/bayi/distribütör) özel, gerçek çalışma biçimini yansıtan sözleşme şablonlarının hazırlanması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">✍️</div>
            <h3 className="text-base font-bold">4. Müzakere ve İmza</h3>
            <p className="mt-2 text-sm text-gray-600">Karşı tarafla kritik maddelerin (münhasırlık, hedef, rekabet yasağı) müzakere edilip sonuçlandırılması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔄</div>
            <h3 className="text-base font-bold">5. Periyodik Gözden Geçirme</h3>
            <p className="mt-2 text-sm text-gray-600">Yenileme tarihlerinin takibi ve mevzuat/piyasa koşulu değiştiğinde sözleşmenin yeniden değerlendirilmesi</p>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Sözleşmede &quot;tazminat talep edilemez&quot; yazması, denkleştirme gibi kanunun koruma altına aldığı bir hakkı her durumda ortadan kaldırmayabilir; bu tür feragat maddelerine güvenmeden önce somut olay değerlendirilmeli.</li>
            <li>Haksız fesih iddialarında talep edilecek tutar, çoğu zaman doğrudan cezai şart tutarı değil, tarafın uğradığı fiili zararın ispatına bağlıdır; bu nedenle zarar kalemlerinin (kayıp sipariş, yatırım maliyeti gibi) belgelenmesi önemlidir.</li>
            <li>Fesih sonrası taleplerde harekete geçme süresi kısa olabilir; ilişki sona erdikten sonra vakit kaybetmeden hukuki değerlendirme yaptırılması, hak kaybını önler.</li>
            <li>Bölge/müşteri kısıtlaması içeren distribütörlük maddeleri hazırlanırken, pasif satışları tamamen engelleyen ifadelerden kaçınılmalı; bu tür maddeler rekabet hukuku denetiminde ayrıca risk taşır.</li>
            <li>Yurt dışı taraflı sözleşmelerde uygulanacak hukuk ve yetkili mahkeme/tahkim maddesi mutlaka açıkça yazılmalı; bu madde eksikse uyuşmazlık anında ek bir hukuki belirsizlik doğar.</li>
          </ul>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6098.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                6098 Sayılı Türk Borçlar Kanunu (Madde 179-182: Ceza Koşulu) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6102.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                6102 Sayılı Türk Ticaret Kanunu (Madde 102-123: Acentelik, Madde 122: Denkleştirme) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.rekabet.gov.tr/Dosya/tebligler/2002-2-sayili-teblig-(2021-4-degisiklikleri-islenmis)-20211108175938391-pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                2002/2 Sayılı Dikey Anlaşmalara İlişkin Grup Muafiyeti Tebliği - Rekabet Kurumu
              </a>
            </li>
            <li>
              <a href="https://www.rekabet.gov.tr/Dosya/kilavuzlar/dikeykilavuz2018-20180330155908926.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Dikey Anlaşmalara İlişkin Kılavuz - Rekabet Kurumu
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bayilik sözleşmesi ile distribütörlük sözleşmesi arasındaki temel fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              İkisi de kendi adına ve hesabına satış yapan bağımsız tacir
              ilişkisidir; asıl fark ölçekte ortaya çıkar. Distribütör
              genellikle daha geniş bir bölgeyi (ülke veya çoklu il)
              kapsar, çoğu zaman ithalat/depolama yetkisi taşır ve
              kendi altında bir bayi ağı kurabilir. Bayi ise daha çok
              yerel/bölgesel ölçekte, distribütörün veya üreticinin
              altında satış yapan taraftır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bayilik sözleşmesi feshedildiğinde bayi her zaman tazminat alabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Denkleştirme tazminatı otomatik doğmaz; bayinin
              tedarikçiye yeni müşteri kazandırmış olması, tedarikçinin
              sözleşme bittikten sonra da bu portföyden önemli menfaat
              elde etmeye devam etmesi ve tazminatın somut olayda
              hakkaniyete uygun düşmesi gibi şartların birlikte
              gerçekleşmesi gerekir. Ayrıca bu tazminat, TTK m.122/2
              uyarınca son beş yıllık ortalama yıllık kazançla sınırlıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Cezai şart maddesi çok yüksek yazılırsa geçerli olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Taraflar ceza tutarını serbestçe belirleyebilir, ancak TBK
              m.182 uyarınca hâkim, aşırı bulduğu bir ceza koşulunu
              kendiliğinden indirebilir. Bu nedenle cezai şart tutarının,
              tarafların gerçek zarar potansiyeliyle makul bir orantı
              içinde belirlenmesi, maddenin uygulanabilirliğini
              güçlendirir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Distribütörün belirli bir bölgeye satış yapmasını tamamen yasaklayabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Aktif satış kısıtlamaları (o bölgeye yönelik doğrudan
              pazarlama/reklam yapmama) belirli şartlarda mümkündür.
              Ancak pasif satışların, yani bölge dışından kendiliğinden
              gelen bir siparişin karşılanmasının tamamen engellenmesi,
              Rekabet Kurumu&apos;nun dikey anlaşmalar mevzuatı
              açısından risklidir ve grup muafiyetinden yararlanmayı
              tehlikeye atabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sözleşme sonrası rekabet yasağı süresiz olarak yazılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Önerilmez. Süresiz veya aşırı uzun tutulan rekabet
              yasakları, hem TBK&apos;nın genel ilkeleri hem de dikey
              anlaşmalar mevzuatı açısından geçersiz sayılma veya hâkim
              tarafından daraltılma riski taşır. Yasağın süre, yer ve
              konu bakımından makul ve sınırlı tutulması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yurt dışındaki bir tedarikçiyle yapılan sözleşmede hangi ülkenin mahkemesi yetkili olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu, taraflarca sözleşmede açıkça kararlaştırılması gereken
              bir konudur. Sözleşmede yetkili mahkeme veya tahkim
              maddesi ile uygulanacak hukuk maddesi yazılmazsa, hangi
              ülke hukukunun ve hangi merciin uygulanacağı ayrı bir
              hukuki uyuşmazlık konusu haline gelebilir; bu nedenle bu
              maddelerin sözleşme imzalanmadan önce netleştirilmesi
              önemlidir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Tedarikçi, Bayi ve Distribütör Sözleşmelerinizi Birlikte Gözden Geçirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Tedarikçi, bayi veya distribütör ağınızı büyütmeyi
            planlıyorsanız ya da mevcut sözleşmelerinizin cezai şart,
            münhasırlık, fesih ve rekabet yasağı maddeleri açısından
            gerçek riskini merak ediyorsanız, şirketinizin sözleşme
            yapısını birlikte değerlendirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Stratejik iş ortaklıkları ve iş geliştirme danışmanlığı
              hizmetimiz kapsamında sözleşme sürecinizi gözden geçirmemiz
              için bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 12. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tedarikçi, bayi ve distribütör ilişkileri, bir şirketin üretim
          sürekliliğini ve satış kanalını taşıyan temel yapı taşlarıdır.
          Bu ilişkileri standart bir şablonla veya sözleşmesiz
          yürütmek, hacim küçükken görünmez kalan bir risk biriktirir.
          Cezai şart, mücbir sebep, münhasırlık, fesih sonrası tazminat
          ve rekabet yasağı gibi maddelerin gerçek ticari ilişkiye göre
          kurgulanması, hem tedarikçi hem bayi/distribütör tarafında
          gelecekteki uyuşmazlıkların büyük kısmını daha en baştan
          önler.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, bayi/distribütör
          ağı kurmak isteyen veya mevcut ağını büyüten şirketlere hem
          stratejik iş geliştirme hem de sözleşme yapısının gözden
          geçirilmesi konusunda bir arada danışmanlık sağlıyoruz;
          sözleşmenizin şirketinizin gerçek ticari ilişkisini
          yansıtmasını ve satış stratejinizle uyumlu kalmasını birlikte
          güvence altına alıyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/kobiler-icin-satis-stratejisi-ve-crm-surecleri"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">PAZARLAMA VE SATIŞ • CRM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOBİ&apos;ler İçin Satış Stratejisi ve CRM Süreçleri</h3>
          </Link>
          <Link
            href="/blog/franchise-sistemi-kurmak-marka-sahibi-icin-surec-sozlesme-sartlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">FRANCHISE SİSTEMİ • MARKA BÜYÜTME • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Franchise Sistemi Kurmak: Marka Sahibi İçin Süreç, Sözleşme ve Danışmanlık İhtiyacı</h3>
          </Link>
          <Link
            href="/blog/stratejik-is-ortakligi-ortak-girisim-joint-venture-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">STRATEJİK İŞ ORTAKLIKLARI • ORTAK GİRİŞİM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Stratejik İş Ortaklığı ve Ortak Girişim (Joint Venture) Modelleri Nasıl Kurulur?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
