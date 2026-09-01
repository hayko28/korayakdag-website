import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "İşletmede Vergi ve Teşvik Analizi Neden Şart? | Koray Akdağ",
  description: "KOBİ'ler vergi riskini, kaçırdığı teşvik fırsatını ve bankaların gözünden görünümünü genelde bir sorunla karşılaşınca öğreniyor.",
  keywords: [
    "vergi risk analizi",
    "teşvik fırsat analizi",
    "kredibilite analizi",
    "finansal analiz KOBİ",
    "vergi ve finansal yönetim danışmanlığı",
    "işletme sermayesi analizi",
    "nakit akışı analizi",
    "vergi denetimi riski",
    "Sistem Global danışmanlık",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="İşletmenize AYNA Tutuyoruz: Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ'nin İhtiyacı?"
      description="Çoğu işletme, taşıdığı vergi riskini bir incelemeyle, kaçırdığı teşvik fırsatını bir rakibinin haberiyle, bankanın kendisini nasıl gördüğünü ise bir kredi reddiyle öğreniyor. Bu üç paket, o haberi siz istemeden önce, siz masaya otururken almanızı sağlıyor."
      category="VERGİ & FİNANSAL YÖNETİM • DANIŞMANLIK • 2026"
      date="2026"
      readTime="7 Dakika"
      coverImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          🪞 Aynaya Bakmadan Yürümek
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          İşletme sahipleri tabloya genelde &quot;kâr var mı, yok mu&quot; diye
          bakar. Oysa aynı tablonun altında üç soru gizlidir: Ne kadar vergi
          riski taşıyorum? Hangi teşviki kaçırıyorum? Bir bankacı bu tabloya
          baksa beni kredilendirir mi? Çoğu işletme bu sorularla ancak bir
          ceza tebligatı, bir rakip haberi ya da bir kredi reddiyle
          karşılaşır. Bu üç körlüğü ortadan kaldıran üç paketi kısaca ele
          alıyoruz.
        </p>
      </div>

      {/* 1. VERGİ RİSK ANALİZİ */}
      <section id="vergi-risk-analizi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Vergi Risk Analizi: Fatura Kesmeden Önce Görmediğiniz Risk
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Vergi mevzuatı yılda onlarca kez değişiyor; muhasebe günlük işi
          yetiştirirken üç yıl önce doğru olan bir uygulamanın hâlâ doğru olup
          olmadığını kontrol edemiyor. Vergi Risk Analizi, tam bu boşluğu
          dolduruyor:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📋 Kapsam</h4>
            <ul className="space-y-2 text-sm leading-7 text-gray-700">
              <li>✔ Mevcut vergi beyanları ve uygulamalarına yönelik risk analizi</li>
              <li>✔ Vergi risk haritası ve aksiyon planının hazırlanması</li>
              <li>✔ Güncel vergi düzenlemelerine ilişkin bilgilendirme</li>
              <li>✔ Değerlendirme ve öneri raporunun sunulması</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">💡 Neden Gerekli?</h4>
            <p className="text-sm leading-7 text-gray-700">
              Vergi incelemesi rastgele değildir &mdash; belirli oranlar,
              tekrarlayan kalemler ve sektörel eşleşmeler risk skorunuzu
              yükseltir. Bu analiz, incelemeyi bekleyip cezayla öğrenmek yerine,
              riski siz kontrol ederken görmenizi sağlar.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Örnek Senaryo &mdash; Fark Edilmeyen KDV İadesi Hatası
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili bir imalat firması, üç yıl önce değişen bir KDV iade
            uygulamasını eski usulle sürdürüyor. İnceleme başladığında, üç
            yıllık birikmiş fark faiziyle birlikte ciddi bir cezaya dönüşüyor
            &mdash; oysa bir Vergi Risk Analizi bunu tek bir dönemin sonunda,
            faiz birikmeden yakalardı.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-yellow-300 bg-yellow-50 p-6">
          <p className="leading-8 text-gray-700">
            ⚠️ Vergi cezalarının asıl maliyeti çoğu zaman cezanın kendisi değil,
            gecikme faizidir &mdash; ve gecikme faizi, hata ne kadar geç fark
            edilirse o kadar büyür. Bu paketin değeri, hatayı değil, hatayı{" "}
            <strong>ne zaman</strong> fark ettiğinizi değiştirmesidir.
          </p>
        </div>
      </section>

      {/* 2. TEŞVİK VE FIRSAT ANALİZİ */}
      <section id="tesvik-firsat-analizi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Teşvik ve Fırsat Analizi: Hakkınız Olan Parayı Masada Bırakmayın
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB, TÜBİTAK, Yatırım Teşvik Belgesi, Ar-Ge Merkezi ve onlarca
          vergi istisnası/indirimi aynı anda yürürlükte. Sorun desteğin
          yokluğu değil, hangisine uygun olduğunuzu bilmemeniz. Teşvik ve
          Fırsat Analizi, bu karmaşayı sizin yerinize tarıyor:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📋 Kapsam</h4>
            <ul className="space-y-2 text-sm leading-7 text-gray-700">
              <li>✔ Vergi teşvik, indirim ve istisna fırsatlarının analizi</li>
              <li>✔ Teşvik fırsat haritası ve aksiyon planının hazırlanması</li>
              <li>✔ Güncel vergi teşviklerine ilişkin bilgilendirme</li>
              <li>✔ Değerlendirme ve öneri raporunun sunulması</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">💡 Neden Gerekli?</h4>
            <p className="text-sm leading-7 text-gray-700">
              Bir teşvikten yararlanmamak, o teşviki başka bir işletmeye
              bırakmak demektir &mdash; ve genellikle o işletme sizin doğrudan
              rakibinizdir. Kullanılmayan bir vergi istisnası, kasadan
              çıkmayan ama hiç görülmeyen bir kâr kalemidir.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Örnek Senaryo &mdash; Aynı Sektörde İki Farklı Yol
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili iki üretici, aynı sektörde, benzer cirolarla çalışıyor.
            Biri Ar-Ge faaliyetini hiçbir destek programına bağlamıyor;
            diğeri aynı faaliyeti KOSGEB Ar-Ge/İnovasyon ve Yatırım Teşvik
            Belgesi&apos;ne bağlıyor. İki firma da aynı işi yapıyor, ama
            birinin maliyet yapısı rekabet edemeyecek kadar ağırlaşıyor.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <p className="leading-8 text-gray-700">
            🔗 Şirketinizin hangi devlet destek programlarına uygun olabileceğine
            dair hızlı bir ön fikir edinmek isterseniz,{" "}
            <Link href="/destek-uygunluk-analizi" className="font-semibold text-orange-600 underline">
              ücretsiz Destek Uygunluk Analizi aracımızı
            </Link>{" "}
            kullanabilirsiniz &mdash; Teşvik ve Fırsat Analizi paketi, bu ön
            taramayı vergi mevzuatındaki istisna/indirim boyutuyla birlikte
            kapsamlı bir aksiyon planına dönüştürür.
          </p>
        </div>
      </section>

      {/* 3. KREDİBİLİTE VE FİNANSAL ANALİZ */}
      <section id="kredibilite-finansal-analiz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kredibilite ve Finansal Analiz: Bankanın Sizi Nasıl Gördüğünü Siz de Görün
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İşletme sahibi şirketini büyüme potansiyeliyle görür; banka ise
          oranlarla, teminat kapasitesiyle ve nakit akışı istikrarıyla bakar.
          Bu fark çoğu zaman kredi başvurusu masaya gelene kadar fark
          edilmez. Kredibilite ve Finansal Analiz, bu farkı önceden kapatır:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📋 Kapsam</h4>
            <ul className="space-y-2 text-sm leading-7 text-gray-700">
              <li>✔ Finansal tabloların banka bakış açısıyla analizi</li>
              <li>✔ Sektörel finansal performans karşılaştırması</li>
              <li>✔ İşletme sermayesi ve nakit akışı analizi</li>
              <li>✔ Finansal iyileştirme öneri raporunun sunulması</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">💡 Neden Gerekli?</h4>
            <p className="text-sm leading-7 text-gray-700">
              Kredi notunuzu ve teminat kapasitenizi asıl belirleyen oranlar
              (cari oran, borç/özkaynak, nakit döngüsü) günlük yönetimde
              görünmez. Bu oranları erkenden bilmek, ihtiyaç anında değil,
              ihtiyaçtan aylar önce iyileştirmenizi sağlar.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Örnek Senaryo &mdash; Büyüme Anında Gelen &quot;Hayır&quot;
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili bir ticaret şirketi, büyüyen siparişi karşılamak için
            kredi başvuruyor; stok devir hızı ve kısa vadeli borç yapısı
            nedeniyle banka reddediyor ya da yüksek teminat istiyor. Aynı
            oranlar altı ay önce görülseydi, başvuru bir formalite olurdu.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-yellow-300 bg-yellow-50 p-6">
          <p className="leading-8 text-gray-700">
            ⚠️ Bankalar işletmenizi yıllık bilançoyla değil, güncel oranlarla
            değerlendirir. Kredibiliteniz sabit bir puan değil, siz
            müdahale ettikçe değişen bir göstergedir &mdash; ve bu paket size
            tam olarak nereye müdahale edeceğinizi gösterir.
          </p>
        </div>
      </section>

      {/* NEDEN ÜÇÜ BİRLİKTE */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Neden Üçü Ayrı Ayrı Değil, Birlikte Anlam Kazanır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Vergi Risk Analizi sizi geçmişin hatalarından, Teşvik ve Fırsat
          Analizi kaçırdığınız kazançlardan, Kredibilite ve Finansal Analiz
          ise geleceğe dair yanlış varsayımlardan korur. Sadece biri bile
          fark yaratır; üçü birlikte tam bir ayna oluşturur.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Paket</th>
                <th className="p-4">Sizi Neyden Korur</th>
                <th className="p-4">En Çok Kim İçin Kritik</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Vergi Risk Analizi</td>
                <td className="p-4">Ceza, gecikme faizi, vergi incelemesi sürprizi</td>
                <td className="p-4">Son 2-3 yılda vergi mevzuatı takibini muhasebeye bırakmış işletmeler</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Teşvik ve Fırsat Analizi</td>
                <td className="p-4">Kullanılmayan destek, indirim ve istisnalardan doğan kayıp</td>
                <td className="p-4">Yatırım, Ar-Ge veya ihracat planlayan büyüme aşamasındaki işletmeler</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">Kredibilite ve Finansal Analiz</td>
                <td className="p-4">Kredi reddi, yüksek teminat şartı, zayıf pazarlık gücü</td>
                <td className="p-4">Finansmana ihtiyaç duyacak veya ortaklık/yatırımcı görüşmesi planlayan işletmeler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 İşletmenizin Aynasına Birlikte Bakalım
          </h3>
          <p className="leading-8 text-gray-700">
            Bu üç analiz, işletmenizin bugün nerede durduğunu net bir raporla
            ortaya koyuyor. İhtiyacınıza uygun paketi birlikte belirlemek
            için buradayız.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizi değerlendirmemiz için bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İşletmeler genellikle üç şekilde sürpriz yaşar: geçmişten gelen bir
          vergi riski, kaçırılmış bir teşvik fırsatı, ihtiyaç anında çıkan bir
          kredibilite sorunu. Üçü de aslında önceden görülebilir. Bu üç paket,
          o sürprizi haber vermeden gelen bir mektup olmaktan çıkarıp, siz
          kontrol elinizdeyken okuduğunuz bir rapora dönüştürüyor.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/varlik-barisi-2026-nedir-sartlari-oranlari-basvuru-sureci"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • VARLIK BARIŞI • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Varlık Barışı 2026 Nedir? Şartları, Oranları ve Süreci</h3>
        </Link>
        <Link
          href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ'ler İçin Neden Kritik?</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
