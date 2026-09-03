import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOBİ'ler İçin Yapay Zeka Danışmanlığı: Nereden Başlamalı? | Koray Akdağ",
  description: "KOBİ'lerde AI agent, CRM entegrasyonu ve süreç otomasyonuna nereden başlanır? 2026 verileri, maliyet/ROI ve adım adım checklist ile rehber.",
  keywords: [
    "KOBİ yapay zeka danışmanlığı",
    "KOBİ AI agent nedir",
    "yapay zeka ile süreç otomasyonu nasıl yapılır",
    "CRM yapay zeka entegrasyonu",
    "işletmeler için yapay zeka danışmanlığı",
    "süreç otomasyonu danışmanlığı",
    "KOBİ dijital dönüşüm yapay zeka",
    "yapay zeka nereden başlanır",
    "AI agent iş süreçleri",
    "müşteri hizmetleri otomasyonu yapay zeka",
    "yapay zeka danışmanlığı 2026",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOBİ'ler İçin Yapay Zeka Danışmanlığı ve Süreç Otomasyonu: Nereden Başlamalı?"
      description="Yapay zeka artık büyük şirketlere özgü bir yatırım değil; ama çoğu KOBİ için asıl soru 'yapay zeka kullanalım mı' değil, 'hangi süreçten, nasıl, ne bütçeyle başlamalıyız'. Türkiye'de KOBİ'lerin AI benimseme durumu, AI agent ile klasik otomasyon farkı, önce otomatikleştirilmesi gereken süreçler, somut kullanım senaryoları, maliyet/ROI beklentisi ve adım adım başlangıç checklist'iyle kapsamlı rehber."
      category="YAZILIM VE YAPAY ZEKÂ • SÜREÇ OTOMASYONU • 2026"
      date="2026"
      readTime="12 Dakika"
      coverImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="kobiler-icin-yapay-zeka-danismanligi-surec-otomasyonu-nereden-baslamali"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          &quot;Yapay zekayı işimize nasıl entegre ederiz?&quot; sorusu artık
          yalnızca teknoloji şirketlerinin değil, imalattan hizmete, ihracattan
          perakendeye kadar hemen her sektördeki KOBİ&apos;lerin gündeminde.
          Ancak sorunun büyük kısmı teknoloji değil, doğru başlangıç noktasını
          bulmak. Bu yazıda AI agent ile klasik süreç otomasyonu arasındaki
          farkı, Türkiye&apos;de KOBİ&apos;lerin yapay zeka benimseme
          durumunu, hangi süreçlerin önce otomatikleştirilmesi gerektiğini,
          somut kullanım senaryolarını, gerçekçi maliyet/ROI beklentisini ve
          adım adım bir başlangıç yol haritasını anlatıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Türkiye&apos;de KOBİ&apos;lerde yapay zeka kullanımı 2026&apos;da hangi noktada?</li>
          <li>✔ AI agent tam olarak nedir, klasik süreç otomasyonundan farkı ne?</li>
          <li>✔ Hangi süreçler önce otomatikleştirilmeli?</li>
          <li>✔ Müşteri hizmetleri, CRM, doküman ve rapor süreçlerinde somut örnekler nelerdir?</li>
          <li>✔ Gerçekçi bir maliyet ve ROI beklentisi nasıl kurulur?</li>
          <li>✔ Bir KOBİ bu sürece pratikte hangi adımlarla başlamalı?</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#durum" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Türkiye&apos;de KOBİ&apos;lerde Yapay Zeka Kullanımı: 2026 Durumu
          </Link>
          <Link href="#ai-agent-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. AI Agent Nedir, Süreç Otomasyonundan Farkı Ne?
          </Link>
          <Link href="#oncelik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Hangi Süreçler Önce Otomatikleştirilmeli?
          </Link>
          <Link href="#senaryolar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Somut Kullanım Senaryoları
          </Link>
          <Link href="#maliyet-roi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Maliyet ve ROI Beklentisi
          </Link>
          <Link href="#checklist" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Adım Adım Başlangıç Checklist&apos;i
          </Link>
          <Link href="#hatalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Sık Yapılan Hatalar
          </Link>
          <Link href="#kimler-icin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Kimler İçin Uygun, Hangi Şartlar Aranır?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. DURUM */}
      <section id="durum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Türkiye&apos;de KOBİ&apos;lerde Yapay Zeka Kullanımı: 2026 Durumu
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Microsoft ve AI Economy Institute iş birliğiyle hazırlanan{" "}
          <strong>2026 Global AI Diffusion Report</strong>&apos;a göre Türkiye,
          2026&apos;nın ilk çeyreğinde yapay zeka kullanımını yaklaşık{" "}
          <strong>%30 oranında artırarak</strong> küresel ölçekte AI
          kullanımını en hızlı artıran ülkeler arasına girdi. Genç ve dijital
          yetkinliği yüksek nüfus, büyüyen bir geliştirici ekosistemi ve artan
          kurumsal farkındalık bu ivmenin arkasındaki temel etkenler olarak
          gösteriliyor.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Ancak bu ivme sektörler ve ölçekler arasında eşit dağılmıyor.
          Digitopia&apos;nın <strong>Türkiye Dijital ve Yapay Zeka Olgunluk
          Raporu 2026</strong> (DAIMI) &mdash; 44 sektörde, on binlerce veri
          noktasına dayanan kapsamlı bir ölçüm çalışması &mdash; Türkiye&apos;nin
          yapay zeka olgunluk skorunun 5 üzerinden 2,10&apos;dan 2,30&apos;a
          yükseldiğini ortaya koyuyor. Bankacılık (3,26), otomotiv (3,16) ve
          havalimanı işletmeciliği (3,05) gibi sermaye yoğun sektörler açık
          ara önde giderken; turizm (2,43) ve inşaat (2,56) gibi KOBİ
          ağırlıklı sektörler hâlâ geride kalıyor. Raporun vurguladığı temel
          nokta şu: artık mesele teknolojiye erişim değil, teknolojiyi somut
          iş sonuçlarına dönüştürebilmek.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bu tabloyu değiştirmek için TOBB da <strong>&quot;Akıllı
          KOBİ&quot;</strong> programı kapsamında oda ve borsalar bünyesinde
          dijital dönüşüm ve yapay zeka uzmanları yetiştiriyor; e-ihracat ve
          yapay zeka olgunluğunu artırmaya yönelik çalıştaylar düzenliyor.
          Kısacası kurumsal zemin hazırlanıyor; asıl fark, bu zeminden ilk
          somut adımı atan işletmeler ile beklemeye devam eden işletmeler
          arasında oluşacak.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratik sonuç: büyük ölçekli şirketler AI&apos;ı operasyonlarına
            hızla entegre ederken, KOBİ&apos;lerin büyük bölümü henüz
            &quot;pilot proje&quot; aşamasında takılı kalıyor. Bu rehberin
            amacı, o pilot aşamayı hızlandırıp gerçek bir sürece dönüştürmek.
          </p>
        </div>
      </section>

      {/* 2. AI AGENT NEDİR */}
      <section id="ai-agent-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. AI Agent Nedir, Süreç Otomasyonundan Farkı Ne?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          KOBİ&apos;lerin en sık karıştırdığı kavram çifti &quot;klasik süreç
          otomasyonu&quot; ile &quot;AI agent&quot;tir. İkisi de zaman
          kazandırır ama çalışma mantıkları farklıdır:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Konu</th>
                <th className="p-5">Klasik Süreç Otomasyonu</th>
                <th className="p-5">AI Agent</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Çalışma Mantığı</td>
                <td className="p-5">Önceden tanımlanmış kurallara göre sabit bir akışı tekrarlar</td>
                <td className="p-5">Bir hedefe ulaşmak için veriyi yorumlar, karar verir, gerektiğinde adımı değiştirir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Girdi Türü</td>
                <td className="p-5">Yapılandırılmış veri (form, tablo, sabit alan)</td>
                <td className="p-5">Yapılandırılmamış veri de dahil (e-posta, ses, doğal dil talebi)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Esneklik</td>
                <td className="p-5">Kural dışı durumda insana devreder veya durur</td>
                <td className="p-5">Belirli bir yetki sınırı içinde istisnaları da değerlendirebilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tipik Örnek</td>
                <td className="p-5">Fatura verisini otomatik muhasebe sistemine aktarma</td>
                <td className="p-5">Gelen müşteri talebini okuyup sınıflandırma, cevap taslağı hazırlama, CRM&apos;e işleme</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurulum Karmaşıklığı</td>
                <td className="p-5">Görece düşük, hızlı devreye alınır</td>
                <td className="p-5">Orta-yüksek; veri kalitesi ve denetim mekanizması gerektirir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Pratikte en iyi sonuç, iki yaklaşımın birlikte kullanılmasından
          çıkar: tekrarlayan, kuralları net işler klasik otomasyonla
          hızlandırılır; yargı ve doğal dil gerektiren adımlar (müşteri
          talebini anlama, rapor özetleme, öncelik belirleme) AI agent&apos;a
          bırakılır.
        </p>
      </section>

      {/* 3. ÖNCELİK */}
      <section id="oncelik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Hangi Süreçler Önce Otomatikleştirilmeli?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Doğru geçiş stratejisi, yapay zekayı büyük ve riskli tek bir
          projeyle değil, modüler ve ölçeklenebilir adımlarla ele almaktır.
          Önceliklendirmede iki soruya bakılır: bu süreç ne kadar çok zaman
          yiyor ve ne kadar tekrarlayan/kural bazlı işliyor?
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-4xl">🎧</div>
            <h3 className="text-lg font-bold">Müşteri Hizmetleri</h3>
            <p className="mt-3 text-sm text-gray-600">
              Sık sorulan soruların büyük kısmı (sipariş durumu, iade koşulu,
              fiyat bilgisi) yüksek hacimli ve tekrarlayandır &mdash; otomasyon
              potansiyeli çok yüksek.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-4xl">📈</div>
            <h3 className="text-lg font-bold">Satış / CRM Süreçleri</h3>
            <p className="mt-3 text-sm text-gray-600">
              Potansiyel müşteri kaydı, takip hatırlatması, teklif hazırlama
              gibi adımlar yüksek hacimli; nitelikli fırsat belirleme ise AI
              desteğiyle hızlanır.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-4xl">📄</div>
            <h3 className="text-lg font-bold">Doküman ve Rapor Otomasyonu</h3>
            <p className="mt-3 text-sm text-gray-600">
              Fatura/fiş okuma, sözleşme özetleme, aylık performans raporu
              hazırlama gibi işler yüksek hacimli ve orta-yüksek kural
              bazlıdır.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-4xl">📦</div>
            <h3 className="text-lg font-bold">Stok ve Tedarik Takibi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Stok seviyesi izleme ve sipariş tetikleme orta hacimli, yüksek
              kural bazlı bir süreçtir; hızlı ve düşük riskli bir başlangıç
              noktasıdır.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <p className="leading-8 text-gray-700">
            Genel kural: <strong>yüksek hacim + yüksek tekrarlanabilirlik</strong>{" "}
            kesişimindeki süreç, ilk pilot proje için en doğru adaydır.
            Stratejik karar gerektiren (fiyatlandırma politikası, işe alım
            kararı, kritik müşteri anlaşmazlığı) süreçler ilk aşamada
            otomasyon kapsamı dışında tutulmalıdır.
          </p>
        </div>
      </section>

      {/* 4. SENARYOLAR */}
      <section id="senaryolar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Somut Kullanım Senaryoları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kavramdan pratiğe geçmek için KOBİ ölçeğinde sık karşılaşılan dört
          senaryoyu somutlaştıralım:
        </p>
        <div className="space-y-6">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">💬 Müşteri Hizmetlerinde AI Agent</h4>
            <p className="text-sm leading-7 text-gray-700">
              Web sitesi ve WhatsApp üzerinden gelen talepleri okuyan bir AI
              agent; sipariş durumu, kargo takibi ve genel bilgi taleplerinin
              büyük kısmını insana ihtiyaç duymadan yanıtlar, yalnızca
              karmaşık veya duygusal yoğunluğu yüksek talepleri ilgili
              temsilciye yönlendirir. Sonuç: temsilcilerin zamanı, gerçekten
              insan yargısı gerektiren vakalara ayrılır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📊 CRM Yapay Zeka Entegrasyonu</h4>
            <p className="text-sm leading-7 text-gray-700">
              Mevcut CRM&apos;e entegre edilen bir AI katmanı; gelen e-posta
              ve görüşme notlarını otomatik olarak fırsat kaydına işler,
              soğuyan fırsatları tespit edip satış ekibine hatırlatma
              gönderir, potansiyel müşterileri satın alma olasılığına göre
              puanlar. Ekip, hangi fırsata öncelik vereceğini tahmine değil
              veriye dayanarak belirler.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📁 Doküman ve Rapor Otomasyonu</h4>
            <p className="text-sm leading-7 text-gray-700">
              Gelen fatura ve fişler otomatik olarak okunup muhasebe
              sistemine işlenir; aylık satış, stok ve nakit akışı verileri
              tek bir özet rapora dönüştürülür. Yönetici, saatlerce veri
              derlemek yerine hazır bir özet üzerinden karar alır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">⚙️ Günlük Operasyonlarda AI Agent Kullanımı</h4>
            <p className="text-sm leading-7 text-gray-700">
              Stok seviyesi kritik eşiğin altına indiğinde tedarikçiye otomatik
              sipariş taslağı hazırlanır; İK sürecinde ilk aday eleme ve
              mülakat planlaması otomatikleştirilir; saha ekiplerinin günlük
              raporları otomatik olarak özetlenip yöneticiye iletilir.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MALİYET ROI */}
      <section id="maliyet-roi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Maliyet ve ROI Beklentisi
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          KOBİ ölçeğinde en doğru yaklaşım, büyük sunucu yatırımları veya
          özel model eğitimi yerine <strong>kullandıkça öde</strong> modeline
          sahip bulut tabanlı yapay zeka servislerini ve hazır dil
          modeli/otomasyon altyapılarını kullanmaktır. Bu sayede ilk yatırım
          maliyeti düşük tutulur, riskler sınırlandırılır.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-4xl">🧪</div>
            <h3 className="font-bold">Pilot Aşama</h3>
            <p className="mt-2 text-sm text-gray-600">
              Tek bir süreç, sınırlı kapsam, kullandıkça öde modeliyle düşük
              başlangıç maliyeti. Amaç: kanıt toplamak.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-4xl">🔗</div>
            <h3 className="font-bold">Entegrasyon Aşaması</h3>
            <p className="mt-2 text-sm text-gray-600">
              Mevcut CRM/ERP&apos;ye bağlanma, veri temizliği ve ekip eğitimi
              maliyeti devreye girer; genellikle yazılım maliyetinden daha
              belirleyicidir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-4xl">📐</div>
            <h3 className="font-bold">Ölçekleme Aşaması</h3>
            <p className="mt-2 text-sm text-gray-600">
              Kanıtlanmış pilot, ek süreçlere yayılır; maliyet artışı genellikle
              kazanılan zamandan/azalan hatadan karşılanabilir hâle gelir.
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            ROI hesaplamasında en gerçekçi yöntem, &quot;ne kadar gelir
            artışı&quot; yerine <strong>&quot;ne kadar zaman ve hata
            azaldı&quot;</strong> sorusuyla başlamaktır: bir sürecin
            otomasyon öncesi harcadığı ortalama süre/hata oranı ile
            otomasyon sonrası rakamlar karşılaştırılır. Bu karşılaştırma,
            bir sonraki sürece yatırım kararını da somut veriyle destekler.
            KOSGEB&apos;in{" "}
            <Link href="/blog/kosgeb-kobi-dijital-donusum-destek-programi-2026" className="text-orange-600 underline">
              KOBİ Dijital Dönüşüm Destek Programı
            </Link>{" "}
            gibi finansman araçları da bu yatırımın ilk maliyetini
            hafifletebilir.
          </p>
        </div>
      </section>

      {/* 6. CHECKLIST */}
      <section id="checklist" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Adım Adım Başlangıç Checklist&apos;i
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Aşağıdaki akış, KOBİ ölçeğinde bir işletmenin yapay zeka/otomasyon
          yolculuğuna sağlıklı biçimde başlamasını sağlayan sıralı adımları
          gösterir:
        </p>
        <div className="my-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-center text-2xl font-bold text-[#071A2F]">
            Başlangıç Akışı: Analizden Ölçeklemeye
          </h3>
          <svg viewBox="0 0 760 140" className="mx-auto w-full max-w-3xl">
            <g fontFamily="sans-serif">
              <rect x="10" y="40" width="150" height="60" rx="12" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="2" />
              <text x="85" y="65" fontSize="13" fontWeight="700" fill="#9a3412" textAnchor="middle">Süreç</text>
              <text x="85" y="83" fontSize="13" fontWeight="700" fill="#9a3412" textAnchor="middle">Analizi</text>

              <rect x="200" y="40" width="150" height="60" rx="12" fill="#071A2F" fillOpacity="0.10" stroke="#071A2F" strokeWidth="2" />
              <text x="275" y="65" fontSize="13" fontWeight="700" fill="#071A2F" textAnchor="middle">Pilot</text>
              <text x="275" y="83" fontSize="13" fontWeight="700" fill="#071A2F" textAnchor="middle">Proje</text>

              <rect x="390" y="40" width="150" height="60" rx="12" fill="#16a34a" fillOpacity="0.15" stroke="#16a34a" strokeWidth="2" />
              <text x="465" y="65" fontSize="13" fontWeight="700" fill="#15803d" textAnchor="middle">Entegrasyon</text>
              <text x="465" y="83" fontSize="13" fontWeight="700" fill="#15803d" textAnchor="middle">ve Eğitim</text>

              <rect x="580" y="40" width="170" height="60" rx="12" fill="#2563eb" fillOpacity="0.12" stroke="#2563eb" strokeWidth="2" />
              <text x="665" y="65" fontSize="13" fontWeight="700" fill="#1d4ed8" textAnchor="middle">Ölçekleme ve</text>
              <text x="665" y="83" fontSize="13" fontWeight="700" fill="#1d4ed8" textAnchor="middle">Sürekli İzleme</text>

              <path d="M160 70 L200 70" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrow)" />
              <path d="M350 70 L390 70" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrow)" />
              <path d="M540 70 L580 70" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrow)" />

              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#9ca3af" />
                </marker>
              </defs>
            </g>
          </svg>
        </div>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ol className="ml-6 list-decimal space-y-4 text-gray-700 marker:font-bold marker:text-green-700">
            <li><strong>Süreçlerinizi zaman ve hacme göre haritalayın:</strong> hangi süreç en çok zaman/insan kaynağı tüketiyor, hangisi en tekrarlayan?</li>
            <li><strong>Veri düzeninizi kontrol edin:</strong> müşteri, satış ve stok verileriniz dağınık Excel dosyalarında mı, tek bir sistemde mi tutuluyor?</li>
            <li><strong>Tek bir pilot süreç seçin:</strong> büyük bir dönüşüm projesi yerine, en yüksek hacimli tek bir süreçle (ör. müşteri hizmetleri) başlayın.</li>
            <li><strong>Ölçülebilir bir hedef belirleyin:</strong> &quot;yanıt süresini %X azaltmak&quot; gibi somut, ölçülebilir bir başarı kriteri tanımlayın.</li>
            <li><strong>Kullandıkça öde bir altyapı ile test edin:</strong> büyük bir lisans/altyapı yatırımına girmeden önce sınırlı kapsamda deneyin.</li>
            <li><strong>Ekibinizi sürece dahil edin:</strong> süreci fiilen yürüten çalışanların geri bildirimini alın; benimseme oranı teknik başarıdan daha belirleyicidir.</li>
            <li><strong>Sonuçları ölçün ve raporlayın:</strong> pilot öncesi/sonrası veriyi karşılaştırarak sonraki yatırım kararını somut veriyle destekleyin.</li>
            <li><strong>Kanıtlanan pilotu kademeli olarak yayın:</strong> başarılı bir pilotu, önceliklendirdiğiniz diğer süreçlere adım adım genişletin.</li>
          </ol>
        </div>
      </section>

      {/* 7. HATALAR */}
      <section id="hatalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Sık Yapılan Hatalar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🚀 &quot;Big Bang&quot; Projeyle Başlamak</h4>
            <p className="text-sm leading-7 text-gray-700">
              Tüm süreçleri aynı anda dönüştürmeye çalışmak, hem bütçeyi hem
              ekibin değişime uyum kapasitesini aşar; genellikle yarım kalan
              bir projeyle sonuçlanır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🗂️ Veri Kalitesini Görmezden Gelmek</h4>
            <p className="text-sm leading-7 text-gray-700">
              Dağınık, güncel olmayan veya çelişkili veri üzerine kurulan bir
              AI çözümü, kararları hızlandırmak yerine yanlış yönlendirir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">👥 Ekip Eğitimini Atlamak</h4>
            <p className="text-sm leading-7 text-gray-700">
              Teknik kurulum tamamlansa da çalışanlar yeni araca güvenmez veya
              kullanmazsa, yatırım fiilen atıl kalır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📉 Ölçülebilir Hedef Belirlememek</h4>
            <p className="text-sm leading-7 text-gray-700">
              &quot;Yapay zeka kullanalım&quot; demek bir hedef değildir;
              somut bir metrik (süre, hata oranı, maliyet) olmadan başarı da
              ölçülemez.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🔓 İnsan Denetimini Tamamen Kaldırmak</h4>
            <p className="text-sm leading-7 text-gray-700">
              Özellikle müşteriyle doğrudan temas eden veya finansal etkisi
              olan süreçlerde, kritik kararlarda insan onayı/denetimi
              korunmalıdır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🔍 Danışmansız, Rastgele Araç Denemek</h4>
            <p className="text-sm leading-7 text-gray-700">
              Piyasadaki onlarca hazır araçtan birini deneyip sonuç
              alamayınca &quot;yapay zeka işimize uymuyor&quot; sonucuna
              varmak; oysa sorun genellikle yanlış aracın yanlış sürece
              uygulanmasıdır.
            </p>
          </div>
        </div>
      </section>

      {/* 8. KİMLER İÇİN UYGUN */}
      <section id="kimler-icin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Kimler İçin Uygun, Hangi Şartlar Aranır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yapay zeka destekli süreç otomasyonu artık belirli bir sektöre veya
          büyük ölçekli şirketlere özgü değil; ancak fayda görme hızı
          işletmenin hazırlık düzeyine göre değişir.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Bu Süreçten En Hızlı Fayda Görecek İşletmelerin Ortak Özellikleri
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>Yüksek hacimli, tekrarlayan müşteri talebi veya işlem akışı olan işletmeler (e-ticaret, hizmet, üretim/sipariş yoğun işletmeler)</li>
            <li>Müşteri, satış veya stok verisini dijital ortamda (en azından Excel/bulut tabanlı) tutan işletmeler</li>
            <li>Değişime açık, en az bir kişinin süreç sahibi olarak projeye zaman ayırabildiği ekipler</li>
            <li>Zaten bir CRM, ERP veya muhasebe yazılımı kullanan ve bu sistemlere entegrasyon açık olan işletmeler</li>
            <li>Küçük ölçekte başlayıp kanıtlanan sonucu kademeli olarak büyütmeye istekli yönetimler</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Tamamen kağıt üzerinden yürüyen, dijital kaydı olmayan süreçler için
          ilk adım yapay zeka değil; verinin dijital ve düzenli hâle
          getirilmesidir. Bu durumda da danışmanlık süreci, otomasyon
          öncesinde bu temel dijitalleşme adımını da kapsayacak şekilde
          kurgulanmalıdır.
        </p>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Küçük, ölçülebilir bir pilotla başlayın; büyük bütçeli tek bir projeye bel bağlamayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Veri kalitesi ve düzeni, teknoloji seçiminden daha belirleyicidir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Müşteri verisi ve kişisel veri işleme süreçlerinde KVKK yükümlülüklerinizi gözden geçirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kritik/finansal kararlarda insan onayını tamamen kaldırmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ekibinizi sürece dahil edin; benimseme, teknik kurulumdan daha kritik bir başarı faktörüdür
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Sonuçları düzenli olarak ölçün; &quot;kuruldu ve unutuldu&quot; bir sistem zamanla değerini kaybeder
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Yapay Zeka ve Otomasyon Yol Haritanızı Birlikte Tasarlayabiliriz
          </h3>
          <p className="leading-8 text-gray-700">
            AI Danışmanlığı, AI Agent Çözümleri, Süreç Otomasyonu ve CRM/Satış
            Teknolojileri alanlarında Koray Akdağ / Sistem Global Danışmanlık
            olarak işletmenizin mevcut süreçlerini analiz edip, en yüksek
            getiriyi sağlayacak pilot süreci birlikte belirliyor, uygulamaya
            ve ekip eğitimine kadar süreci uçtan uca yönetiyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              İşletmenizin süreçlerini birlikte değerlendirmek için bizimle
              iletişime geçin.
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
              Küçük bir KOBİ olarak yapay zeka yatırımına gerçekten hazır mıyız?
            </h3>
            <p className="leading-8 text-gray-700">
              Kullandıkça öde modelli bulut tabanlı araçlar sayesinde büyük
              bir başlangıç yatırımı gerekmiyor. Asıl belirleyici, büyüklüğünüz
              değil; müşteri/satış/stok verinizin en azından temel düzeyde
              dijital ve düzenli olması ve süreci sahiplenecek bir ekip
              üyesinin bulunmasıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              AI agent mevcut CRM veya muhasebe yazılımımızın yerine mi geçer?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. AI agent çözümleri genellikle mevcut sistemlerin yerine
              geçmez, onlara entegre bir katman olarak eklenir; mevcut
              CRM/ERP&apos;nizdeki veriyi okuyup işleyerek ek bir katma değer
              sağlar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bir pilot proje ne kadar sürede sonuç verir?
            </h3>
            <p className="leading-8 text-gray-700">
              Kapsam ve sürecin karmaşıklığına göre değişse de, iyi
              tanımlanmış tek bir süreçte pilot genellikle birkaç hafta
              içinde ilk ölçülebilir sonucu verir. Kapsamlı entegrasyon ve
              ölçekleme ise aylara yayılan bir süreçtir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Müşteri verilerimizi bir AI sistemine aktarmak KVKK açısından risk taşır mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Kişisel veri içeren süreçlerde kullanılacak altyapının veri
              işleme, saklama ve aktarım koşulları KVKK mevzuatına uygun
              olmalıdır. Bu nedenle otomasyon kurgulanmadan önce hangi verinin
              hangi amaçla işleneceğinin netleştirilmesi ve gerekiyorsa hukuki
              danışmanlık alınması önerilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Süreç otomasyonu için devlet desteği veya kredi imkânı var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              KOSGEB&apos;in{" "}
              <Link href="/blog/kosgeb-kobi-dijital-donusum-destek-programi-2026" className="text-orange-600 underline">
                KOBİ Dijital Dönüşüm Destek Programı
              </Link>{" "}
              ve{" "}
              <Link href="/blog/kosgeb-yapay-zeka-kredi-programi-2026" className="text-orange-600 underline">
                Yapay Zeka Kredi Programı
              </Link>{" "}
              gibi araçlar, belirli şartları sağlayan işletmeler için dijital
              dönüşüm ve yapay zeka altyapı yatırımlarına finansman desteği
              sağlayabiliyor; başvuru şartları program bazında değişiklik
              gösterir.
            </p>
          </div>
        </div>
      </section>

      {/* 11. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de KOBİ&apos;lerin yapay zeka benimsemesi hızlanıyor
          ama bu ivmeyi gerçek bir rekabet avantajına çeviren işletmeler,
          büyük ve karmaşık projelere değil; doğru süreci seçip küçük,
          ölçülebilir adımlarla başlayan işletmeler oluyor. AI agent ile
          klasik otomasyon arasındaki farkı anlamak, en yüksek hacimli süreci
          doğru önceliklendirmek ve ekibi sürecin bir parçası hâline getirmek,
          teknoloji seçiminden çok daha belirleyici.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İşletmenizin hangi süreçten başlaması gerektiğini, hangi maliyet ve
          zaman planıyla ilerleyebileceğinizi netleştirmek için Koray Akdağ /
          Sistem Global Danışmanlık olarak AI Danışmanlığı, AI Agent
          Çözümleri, Süreç Otomasyonu ve CRM/Satış Teknolojileri alanlarında
          yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-yapay-zeka-kredi-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • YAPAY ZEKA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Yapay Zeka Kredi Programı 2026: 5 Milyon TL&apos;ye Kadar Faizsiz Krediye Kimler Başvurabilir?</h3>
          </Link>
          <Link
            href="/blog/tubitak-1711-yapay-zeka-ekosistemi-cagrisi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • YAPAY ZEKA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1711 Yapay Zeka Ekosistem Çağrısı 2026: Kimler Başvurabilir, Destek Oranları Nedir?</h3>
          </Link>
          <Link
            href="/blog/kobiler-icin-satis-stratejisi-ve-crm-surecleri"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">PAZARLAMA VE SATIŞ • CRM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOBİ&apos;ler İçin Satış Stratejisi ve CRM Süreçleri: Müşteri Kazanımını Sistematik Hale Getirmek</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
