import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TFRS 18 Finansal Tablo Örnekleri Yayımlandı: Esas Faaliyet Kârı Nedir? | Koray Akdağ",
  description:
    "KGK'nın 4 Kasım 2026'da Resmî Gazete'de yayımladığı yeni Finansal Tablo Örnekleri ve Kullanım Rehberi, TFRS 18 standardına uyumlu. 1 Ocak 2027'den itibaren zorunlu olan Esas Faaliyet Kârı, yeni dipnotlar ve kimleri etkilediğiyle güncel rehber.",
  keywords: [
    "TFRS 18 nedir",
    "esas faaliyet kârı nedir",
    "yeni finansal tablo örnekleri 2027",
    "KGK finansal tablo rehberi",
    "finansal tablo örnekleri ve kullanım rehberi",
    "TFRS 18 ne zaman yürürlüğe girecek",
    "yönetim tarafından tanımlanan performans ölçütleri",
  ],
  alternates: {
    canonical: "/blog/tfrs-18-finansal-tablo-ornekleri-esas-faaliyet-kari-2027",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="TFRS 18 Finansal Tablo Örnekleri Yayımlandı: Esas Faaliyet Kârı Şirketleri Nasıl Etkiliyor?"
      description="KGK'nın 4 Kasım 2026 tarihli ve 33420 sayılı Resmî Gazete'de yayımladığı yeni Finansal Tablo Örnekleri ve Kullanım Rehberi, TFRS 18 standardına uyumlu hale getirildi. 1 Ocak 2027'de veya sonrasında başlayan hesap dönemlerinde zorunlu olacak yeni gelir tablosu yapısı, Esas Faaliyet Kârı kalemi, artan dipnot sayısı ve hazırlık sürecine dair güncel rehber."
      category="BAĞIMSIZ DENETİM • TFRS 18 • 2026"
      date="Kasım 2026"
      readTime="11 Dakika"
      slug="tfrs-18-finansal-tablo-ornekleri-esas-faaliyet-kari-2027"
      coverImage="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Şirketinizin TFRS 18 Geçişine Hazır Olup Olmadığını Birlikte Değerlendirelim"
      ctaText="2026 hesap döneminiz TFRS 18'in karşılaştırma dönemine denk geliyor. Finansal tablolarınızın yeni formata uygunluğunu, gerekli dipnot ve ara toplamların hazırlığını ve bağımsız denetim sürecinizi birlikte planlayalım."
    >
      {/* KISA CEVAP */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: TFRS 18 Değişikliği Ne Getiriyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ KGK, 30 Ekim 2026 tarihli kararıyla <strong>Finansal Tablo Örnekleri ve Kullanım Rehberi&apos;ni</strong> yeniledi; karar 4 Kasım 2026 tarihli ve 33420 sayılı Resmî Gazete&apos;de yayımlandı.</li>
          <li>✔ Yeni rehber, 2019&apos;dan beri uygulanan rehberin yerine geçiyor ve <strong>TFRS 18 Finansal Tablolarda Sunum ve Açıklama</strong> standardına uyumlu hazırlandı.</li>
          <li>✔ Gelir tablosunda artık <strong>Esas Faaliyet Kârı</strong> ve <strong>Finansman ve Vergi Öncesi Kâr</strong> adında iki zorunlu ara toplam var.</li>
          <li>✔ Yürürlük tarihi: <strong>1 Ocak 2027&apos;de veya sonrasında başlayan</strong> hesap dönemleri. Erken uygulama mümkün.</li>
          <li>✔ Karşılaştırmalı sunum zorunlu olduğu için takvim yılı kullanan şirketlerde <strong>2026 yılı rakamları da</strong> 2027 raporlarında yeni formatta yer alacak.</li>
          <li>✔ Esas olarak TFRS uygulayan ve bağımsız denetime tabi şirketleri, KAP&apos;a bildirimde bulunanları ve holding şirketleri ilgilendiriyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-12 rounded-2xl border bg-gray-50 p-8">
        <h2 className="mb-6 text-2xl font-bold text-[#071A2F]">İçindekiler</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#ne-degisti" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Ne Değişti, Hangi Kararla Yayımlandı?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Yürürlük Tarihi ve Kimler Etkileniyor?
          </Link>
          <Link href="#karistirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Karıştırılan İki Kavram: Esas Faaliyet Kârı ve MPM
          </Link>
          <Link href="#yeni-yapi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Gelir Tablosunun Yeni Yapısı
          </Link>
          <Link href="#dipnotlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Dipnotlarda Neler Değişti?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Şirketler İçin Adım Adım Hazırlık Süreci
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

      {/* 1 */}
      <section id="ne-degisti" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Ne Değişti, Hangi Kararla Yayımlandı?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu (KGK), Türkiye&apos;de TFRS (Türkiye Finansal
          Raporlama Standartları) uygulayan şirketlerin finansal tablolarını hangi formatta sunacağını
          belirleyen &quot;Finansal Tablo Örnekleri ve Kullanım Rehberi&quot;ni yeniledi. 30 Ekim 2026 tarihli ve
          75935942-050.01.04-[01/47201] sayılı Kurul Kararı, 4 Kasım 2026 tarihli ve 33420 sayılı Resmî
          Gazete&apos;de yayımlanarak yürürlüğe girdi. Bu kararla, 7 Haziran 2019 tarihli Resmî Gazete&apos;de (Sayı:
          30794) yayımlanan 01/146 sayılı eski rehber yürürlükten kalktı.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Değişikliğin kaynağı, Uluslararası Muhasebe Standartları Kurulu&apos;nun (IASB) Nisan 2024&apos;te yayımladığı
          IFRS 18 standardıdır. KGK bu standardı Türkçeye uyarlayarak <strong>TFRS 18 Finansal Tablolarda Sunum
          ve Açıklama</strong> adıyla, 8 Mayıs 2025 tarihli Resmî Gazete&apos;de yayımladı. TFRS 18, halen yürürlükte
          olan TMS 1 Finansal Tabloların Sunuluşu standardının yerini alıyor. 2026 Kasım ayında yayımlanan yeni
          rehber ise bu standardın pratikte nasıl uygulanacağını örneklerle gösteren tamamlayıcı bir metin.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">📌 Önemli: Ölçüm Değil, Sunum Değişiyor</h3>
          <p className="leading-8 text-gray-700">
            TFRS 18 ve buna bağlı yeni rehber, varlık ve yükümlülüklerin nasıl değerlendirileceğini veya kârın
            nasıl hesaplanacağını değiştirmiyor. Değişen, kâr veya zararın gelir tablosunda hangi kategoriler ve
            hangi zorunlu ara toplamlarla sunulacağı, dipnotlarda ne kadar ayrıntı verileceği ve yönetimin
            kullandığı performans ölçütlerinin nasıl açıklanacağı. Yani şirketin kârlılığı değişmiyor, kârlılığın
            finansal tabloda anlatılma biçimi değişiyor.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Yürürlük Tarihi ve Kimler Etkileniyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yeni rehber, <strong>1 Ocak 2027 tarihinde veya sonrasında başlayan hesap dönemlerinde</strong> uygulanacak.
          TFRS 18&apos;i erken uygulamayı tercih eden işletmeler, dipnotlarında bunu açıklamak kaydıyla rehberi daha
          önceki dönemlerde de kullanabilir. Takvim yılını esas alan bir şirket için bu, pratikte şu anlama
          geliyor: 2027 yılına ait finansal tablolar hazırlanırken, karşılaştırma amacıyla sunulan 2026 yılı
          rakamları da TMS 8 uyarınca yeni formata göre yeniden düzenlenecek.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">📊 Doğrudan Etkilenenler</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ TTK 397/4 kapsamında bağımsız denetime tabi olup TFRS uygulayan şirketler</li>
              <li>✔ KAP&apos;a finansal tablo bildiriminde bulunan şirketler (ayrıca TFRS Taksonomisi&apos;ndeki örnekleri kullanmak zorunda)</li>
              <li>✔ Holding şirketler (özkaynak yöntemiyle değerlenen yatırımlardan sonraki kâr için ayrı alt toplam sunmaları gerekiyor)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">🧾 Dolaylı Etkilenenler</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ SPK, BDDK veya SEDDK gözetimindeki şirketler, öncelikle kendi sektörel formatlarını kullanır; bu rehber kapsam dışı kalan konularda tamamlayıcı olur</li>
              <li>✔ Bağımsız denetime tabi olmayan TFRS uygulayıcıları, rehberi isteğe bağlı kullanabilir</li>
              <li>✔ Yönetim kurulu üyeleri, denetçiler ve ortaklar; raporlama, denetim ve bilgi alma hakları yönünden dolaylı etkileniyor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3 - KARIŞTIRMAYIN */}
      <section id="karistirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Karıştırılan İki Kavram: Esas Faaliyet Kârı ve MPM
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-red-700">⚠️ Dikkat: Bu İkisi Aynı Şey Değil</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Esas Faaliyet Kârı (Zorunlu)</h4>
              <p className="leading-7 text-gray-700">
                TFRS 18&apos;in getirdiği, gelir tablosunda gösterilmesi <strong>zorunlu</strong> bir ara toplam.
                Esas faaliyetler bölümündeki tüm gelir ve giderlerden oluşuyor ve standart bir tanıma sahip;
                şirketten şirkete yorum farkı taşımıyor.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Yönetim Tanımlı Performans Ölçütleri (MPM)</h4>
              <p className="leading-7 text-gray-700">
                Şirketlerin yatırımcı sunumlarında kullandığı &quot;düzeltilmiş FAVÖK&quot;, &quot;normalleştirilmiş
                net kâr&quot; gibi <strong>isteğe bağlı</strong> ölçütler. TFRS 18 bunları yasaklamıyor, aksine
                dipnotlarda nasıl hesaplandığının ve TFRS kalemleriyle mutabakatının açıklanmasını zorunlu
                kılıyor.
              </p>
            </div>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Uygulamada en sık karıştırılan nokta burası: Esas Faaliyet Kârı, standardın zorunlu kıldığı resmî bir
            kalemken, yönetimin kendi hazırladığı ve kamuya yatırımcı sunumlarında, basın bültenlerinde veya
            faaliyet raporlarında paylaştığı performans ölçütleri ayrı bir kategoridir ve ayrı bir dipnot
            yükümlülüğüne tabidir. İkisini aynı kalem sanıp raporlamayı buna göre kurgulamak, dipnot eksikliğine
            yol açabilir.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section id="yeni-yapi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Gelir Tablosunun Yeni Yapısı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TFRS 18 ile birlikte gelir tablosu artık üç ayrı kategoriye bölünüyor ve bu kategoriler arasında iki
          zorunlu ara toplam yer alıyor:
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kategori / Ara Toplam</th>
                <th className="p-5">İçeriği</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Esas Faaliyetler Bölümü</td>
                <td className="p-5">Şirketin temel, olağan faaliyetlerinden kaynaklanan gelir ve giderler</td>
              </tr>
              <tr className="border-b bg-orange-50 hover:bg-orange-100">
                <td className="p-5 font-semibold">→ Esas Faaliyet Kârı/Zararı (yeni zorunlu ara toplam)</td>
                <td className="p-5">Esas faaliyetler bölümündeki tüm gelir ve giderlerin toplamı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yatırım Faaliyetleri Bölümü</td>
                <td className="p-5">İştirak/bağlı ortaklık gelirleri, finansal yatırımlardan kaynaklanan gelir ve giderler</td>
              </tr>
              <tr className="border-b bg-orange-50 hover:bg-orange-100">
                <td className="p-5 font-semibold">→ Finansman ve Vergi Öncesi Kâr/Zarar (yeni zorunlu ara toplam)</td>
                <td className="p-5">Esas faaliyet ve yatırım faaliyetleri bölümlerinin toplamı, finansman giderleri ve vergi hariç</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Finansman Faaliyetleri Bölümü</td>
                <td className="p-5">Finansman gelir ve giderleri ile vergi gideri ayrı gösteriliyor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-lg leading-9 text-gray-700">
          Eski rehberde başlıklar numaralandırılmamışken yeni rehber, uygulamayı netleştirmek için <strong>dokuz
          ayrı madde</strong> halinde düzenlendi. Finansman gelirinin gider kaleminden ayrı gösterilmesi ve
          nakit akış tablosunun ilk bölümünün adının değişmesi de yapısal farklardan.
        </p>
      </section>

      {/* 5 */}
      <section id="dipnotlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Dipnotlarda Neler Değişti?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Dipnot sayısı 52&apos;den 54&apos;e çıkarıldı. En dikkat çeken iki yeni dipnot şunlar:
        </p>
        <ul className="mb-6 space-y-3 text-lg text-gray-700">
          <li>✔ <strong>Esas faaliyetlerin tanımlanması:</strong> şirketin hangi faaliyetleri &quot;esas&quot; kabul ettiğinin açıklanması isteniyor; bu tanım şirketten şirkete farklılaşabildiği için gerekçelendirilmesi gerekiyor.</li>
          <li>✔ <strong>Yönetim tarafından tanımlanan performans ölçütleri (MPM):</strong> şirketin kamuya açıkladığı her bir MPM&apos;nin nasıl hesaplandığı, hangi TFRS kalemiyle mutabakat sağlandığı ve neden kullanıldığının dipnotlarda gösterilmesi zorunlu.</li>
        </ul>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, MPM dipnotunun yalnızca finans/yatırımcı ilişkileri
            departmanının değil, aynı zamanda denetimden geçecek finansal tabloların bir parçası olduğudur.
            Şirket dışarıya &quot;düzeltilmiş FAVÖK&quot; veya benzer bir ölçüt paylaşıyorsa, bu ölçütün hesaplama
            yöntemi ve TFRS kalemleriyle mutabakatı artık finansal tablo dipnotlarında da yer almak zorunda.
            Bu nedenle hazırlık sürecinde yalnızca muhasebe ekibinin değil, yatırımcı iletişiminden sorumlu
            ekibin de birlikte çalışması gerekiyor.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Şirketler İçin Adım Adım Hazırlık Süreci
        </h2>
        <ol className="mb-6 space-y-4 text-lg text-gray-700">
          <li><strong>1. Kapsam değerlendirmesi yapın.</strong> Şirketinizin TFRS uygulayıp uygulamadığını, bağımsız denetime tabi olup olmadığını ve KAP&apos;a bildirimde bulunup bulunmadığını netleştirin.</li>
          <li><strong>2. Esas faaliyetlerinizi tanımlayın.</strong> Gelir tablosunda hangi kalemlerin &quot;esas faaliyet&quot; sayılacağını, hangilerinin yatırım veya finansman faaliyeti olarak sınıflandırılacağını belirleyin.</li>
          <li><strong>3. Mevcut MPM&apos;lerinizi listeleyin.</strong> Yatırımcı sunumlarında veya faaliyet raporlarında kullandığınız performans ölçütlerini tespit edin ve her biri için TFRS mutabakatı hazırlayın.</li>
          <li><strong>4. Paralel/deneme tablosu hazırlayın.</strong> 2026 yılı verilerinizi, yeni formatla bir kez deneme amaçlı düzenleyerek olası boşlukları ve ek veri ihtiyaçlarını önceden görün.</li>
          <li><strong>5. Bağımsız denetçinizle koordine olun.</strong> Denetim firmanızın yeni formata ilişkin beklentilerini ve denetim takvimindeki olası değişiklikleri erken aşamada netleştirin.</li>
        </ol>
        <p className="text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak finansal tabloları tasdik etmiyoruz; bu, yetkili
          bağımsız denetim kuruluşunun işi. Ancak kapsam değerlendirmesi, esas faaliyet tanımının netleştirilmesi,
          MPM mutabakatlarının hazırlanması ve denetim sürecine giden yolun planlanmasında, mali müşavirlik ve
          şirket değerleme hizmetlerimiz kapsamında şirketinizin yanındayız. Ayrı bir muhasebe veya denetim
          danışmanı aramanıza gerek kalmadan, hazırlık sürecini tek noktadan yürütebiliriz.
        </p>
      </section>

      {/* 7 */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Karşılaştırmalı sunum zorunlu olduğu için <strong>2026 yılı rakamlarınızı da</strong> yeni formata göre yeniden hazırlamanız gerekecek; bu işi 2027&apos;nin sonuna bırakmak zaman baskısı yaratır.</li>
            <li>&quot;Esas faaliyet&quot; tanımınızı belirlerken tutarlılık önemlidir; bir dönemde esas faaliyet sayılan bir kalemin sonraki dönemde farklı sınıflandırılması açıklama gerektirir.</li>
            <li>MPM dipnotunu atlamak, denetim sürecinde eksiklik olarak değerlendirilebilir; kamuya açıklanan her performans ölçütünün dipnotla desteklenmesi gerekir.</li>
            <li>SPK, BDDK veya SEDDK gözetimindeyseniz önce kendi sektörel formatınızı, ardından bu rehberin tamamlayıcı hükümlerini kontrol edin.</li>
            <li>Erken uygulama bir seçenek olsa da, erken uygulamayı tercih ettiğinizi dipnotlarda açıkça belirtmeniz gerekir.</li>
            <li>Bu yazı genel bir bilgilendirmedir; şirketinizin somut durumuna uygulanacak nihai format için KGK&apos;nın güncel kararları ve bağımsız denetçinizin değerlendirmesi esas alınmalıdır.</li>
          </ul>
        </div>
      </section>

      {/* 8 */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ KGK Kurul Kararı (30/10/2026, No: 75935942-050.01.04-[01/47201]) ve Finansal Tablo Örnekleri ve Kullanım Rehberi, Resmî Gazete 4 Kasım 2026, Sayı 33420</li>
          <li>✔ TFRS 18 Finansal Tablolarda Sunum ve Açıklama Standardı, Resmî Gazete 8 Mayıs 2025</li>
          <li>✔ Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu (kgk.gov.tr): güncel duyurular ve TMS/TFRS setleri</li>
          <li>✔ Kamuyu Aydınlatma Platformu (kap.org.tr): TFRS Taksonomisi ve bildirim formatları</li>
          <li>✔ mevzuat.gov.tr: Resmî Gazete&apos;nin tam metin arşivi</li>
        </ul>
      </section>

      {/* SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">TFRS 18 ne zaman yürürlüğe giriyor?</h3>
            <p className="text-gray-700">1 Ocak 2027 tarihinde veya sonrasında başlayan hesap dönemlerinde zorunlu hale geliyor. Erken uygulamayı tercih eden şirketler, dipnotlarında bunu açıklayarak daha önce de uygulayabilir.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Esas Faaliyet Kârı nedir?</h3>
            <p className="text-gray-700">TFRS 18 ile gelir tablosunda zorunlu hale gelen bir ara toplamdır. Şirketin esas faaliyetler bölümünde sınıflandırdığı tüm gelir ve giderlerin toplamından oluşur ve standart bir tanıma sahiptir.</p>
          </div>
          <div className="mb-2 rounded-xl border p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Küçük bir KOBİ bu değişiklikten etkilenir mi?</h3>
            <p className="text-gray-700">Rehber öncelikle TFRS uygulayan ve bağımsız denetime tabi şirketleri ilgilendiriyor. Bağımsız denetime tabi olmayan ve TFRS yerine yerel finansal raporlama çerçevesini (örneğin BOBİ FRS) kullanan KOBİ&apos;ler bu rehberi isteğe bağlı olarak kullanabilir, zorunlu değildir.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">2026 yılı finansal tablolarımı da yeni formatta mı hazırlamam gerekiyor?</h3>
            <p className="text-gray-700">Hesap döneminiz 1 Ocak 2027&apos;de başlıyorsa, 2027 raporlarınızda karşılaştırma amacıyla sunulan 2026 rakamlarının da yeni formata göre yeniden düzenlenmesi gerekir. 2026 yılına ait finansal tablolarınızı ayrıca eski formatta da hazırlamaya devam edersiniz; değişen, 2027 raporundaki karşılaştırmalı sunumdur.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">MPM (yönetim tarafından tanımlanan performans ölçütü) dipnotu kime zorunlu?</h3>
            <p className="text-gray-700">Finansal tablolarını TFRS 18 kapsamında hazırlayan ve kamuya &quot;düzeltilmiş FAVÖK&quot;, &quot;normalleştirilmiş kâr&quot; gibi ek performans ölçütleri açıklayan şirketler için zorunlu. Bu tür bir ölçüt kullanmıyorsanız söz konusu dipnot sizi ilgilendirmez.</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Hazırlık sürecinde Koray Akdağ / Sistem Global Danışmanlık ne yapıyor?</h3>
            <p className="text-gray-700">Finansal tabloları tasdik etmiyoruz, bu yetkili bağımsız denetim kuruluşunun işi. Kapsam değerlendirmesi, esas faaliyet tanımının netleştirilmesi, MPM mutabakatlarının hazırlanması ve denetim sürecine giden yolun planlanmasında destek veriyoruz.</p>
          </div>
        </div>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/bagimsiz-denetim-esik-degerleri-2026-degisti"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">BAĞIMSIZ DENETİM • MALİ MÜŞAVİRLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Bağımsız Denetim Eşik Değerleri 2026&apos;da Değişti</h3>
          </Link>
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri Nasıl Yapılır?</h3>
          </Link>
          <Link
            href="/blog/tam-tasdik-nedir-kimler-yaptirmali-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YMM • TAM TASDİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Tam Tasdik Nedir? Kimler Yaptırmalı, Avantajları</h3>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "TFRS 18 ne zaman yürürlüğe giriyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1 Ocak 2027 tarihinde veya sonrasında başlayan hesap dönemlerinde zorunlu hale geliyor. Erken uygulamayı tercih eden şirketler, dipnotlarında bunu açıklayarak daha önce de uygulayabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Esas Faaliyet Kârı nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TFRS 18 ile gelir tablosunda zorunlu hale gelen bir ara toplamdır. Şirketin esas faaliyetler bölümünde sınıflandırdığı tüm gelir ve giderlerin toplamından oluşur ve standart bir tanıma sahiptir.",
                },
              },
              {
                "@type": "Question",
                name: "Küçük bir KOBİ bu değişiklikten etkilenir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rehber öncelikle TFRS uygulayan ve bağımsız denetime tabi şirketleri ilgilendiriyor. Bağımsız denetime tabi olmayan ve yerel finansal raporlama çerçevesini (örneğin BOBİ FRS) kullanan KOBİ'ler bu rehberi isteğe bağlı olarak kullanabilir, zorunlu değildir.",
                },
              },
              {
                "@type": "Question",
                name: "2026 yılı finansal tablolarımı da yeni formatta mı hazırlamam gerekiyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hesap döneminiz 1 Ocak 2027'de başlıyorsa, 2027 raporlarında karşılaştırma amacıyla sunulan 2026 rakamlarının da yeni formata göre yeniden düzenlenmesi gerekir. 2026 yılına ait finansal tablolar ayrıca eski formatta da hazırlanmaya devam eder; değişen, 2027 raporundaki karşılaştırmalı sunumdur.",
                },
              },
              {
                "@type": "Question",
                name: "MPM (yönetim tarafından tanımlanan performans ölçütü) dipnotu kime zorunlu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Finansal tablolarını TFRS 18 kapsamında hazırlayan ve kamuya düzeltilmiş FAVÖK, normalleştirilmiş kâr gibi ek performans ölçütleri açıklayan şirketler için zorunludur. Bu tür bir ölçüt kullanmayan şirketleri ilgilendirmez.",
                },
              },
              {
                "@type": "Question",
                name: "Hazırlık sürecinde Koray Akdağ / Sistem Global Danışmanlık ne yapıyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Finansal tabloları tasdik etmez, bu yetkili bağımsız denetim kuruluşunun işidir. Kapsam değerlendirmesi, esas faaliyet tanımının netleştirilmesi, MPM mutabakatlarının hazırlanması ve denetim sürecine giden yolun planlanmasında destek verir.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
