import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB YÖNDE Destek Programı Nedir? | Koray Akdağ",
  description:
    "KOSGEB'in imalat sektöründeki KOBİ'lere sunduğu YÖNDE - Yönderlik ve Değerlendirme Destek Programı: Dijital Dönüşüm, Sürdürülebilirlik Raporlaması, Yalın Olgunluk Değerlendirme (YODA) ve Bağımsız Değerlendirme hizmetlerinde %100 geri ödemesiz destek tutarları, şartları ve başvuru süreci.",
  keywords: [
    "KOSGEB YÖNDE destek programı",
    "Yönderlik ve Değerlendirme Destek Programı",
    "KOSGEB sürdürülebilirlik raporlaması desteği",
    "YODA yalın olgunluk değerlendirme desteği",
    "KOSGEB dijital dönüşüm desteği",
    "bağımsız değerlendirme hizmeti desteği KOSGEB",
    "YÖNDE 2026",
  ],
  alternates: {
    canonical: "/blog/kosgeb-yonde-yonderlik-degerlendirme-destek-programi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB YÖNDE Destek Programı Nedir? Dijital Dönüşüm, Sürdürülebilirlik Raporu ve Yalın Üretim Analizinize Ne Kadar Destek Alırsınız?"
      description="İmalat sektöründeki küçük ve orta ölçekli işletmelere özel YÖNDE - Yönderlik ve Değerlendirme Destek Programı'nda dört ayrı hizmet kalemi, %100 geri ödemesiz destek oranı ve toplamda yüksek bir üst limit var. Kimler başvurabilir, hangi hizmet ne kadar destekleniyor ve süreç nasıl işliyor; güncel kaynaklarla derledik."
      category="KOSGEB • YÖNDE DESTEK PROGRAMI • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="kosgeb-yonde-yonderlik-degerlendirme-destek-programi-2026"
      programDurumu="acik"
      coverImage="/blog-gorselleri/kosgeb-yonde-yonderlik-degerlendirme-destek-programi-2026.png"
      ctaHeading="YÖNDE Başvurunuzu Birlikte Hazırlayalım"
      ctaText="Hangi hizmetten ne kadar destek alabileceğinizden hizmet sağlayıcı seçimine, başvuru formunun hazırlanmasından ödeme talep sürecine kadar YÖNDE - Yönderlik ve Değerlendirme Destek Programı'nda yanınızdayız."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        KOSGEB&apos;in destek listesinde nispeten yeni ve ismi biraz
        kafa karıştırıcı olan bir program var: YÖNDE - Yönderlik ve
        Değerlendirme Destek Programı. İsminden ne işe yaradığını tahmin
        etmek zor; çoğu işletme sahibi bunu bir &quot;mentorluk&quot;
        programı sanıyor. Oysa YÖNDE, imalat sektöründeki KOBİ&apos;lerin
        dijital dönüşüm, sürdürülebilirlik raporlaması, yalın üretim ve
        HAMLE sürecindeki bağımsız değerlendirme gibi dört farklı alanda
        aldığı danışmanlık/analiz hizmetinin maliyetini %100&apos;e kadar
        karşılayan, oldukça somut bir finansman aracı. Üstelik toplam üst
        limiti diğer birçok KOSGEB desteğiyle kıyaslandığında dikkat çekici
        derecede yüksek. Bu yazıda programın kim için olduğunu, hangi
        hizmetin ne kadar desteklendiğini ve başvuru sürecini KOSGEB&apos;in
        resmî kaynaklarına dayanarak ele alıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ YÖNDE, yalnızca <strong>NACE Rev. 2 Kısım C - İmalat
            sektöründe</strong> faaliyet gösteren küçük ve orta ölçekli
            işletmelere (KOBİ) açık; mikro ölçekli işletmeler ve imalat
            dışındaki sektörler yararlanamıyor.
          </li>
          <li>
            ✔ Program dört hizmeti destekliyor: Dijital Dönüşüm
            Değerlendirme Analizi (40.000 TL), Sürdürülebilirlik
            Raporlaması (200.000 TL), Yalın Olgunluk Değerlendirme -
            YODA (40.000 TL) ve Bağımsız Değerlendirme Hizmeti
            (450.000 TL).
          </li>
          <li>
            ✔ Destek oranı <strong>%100 geri ödemesiz</strong>; işletme
            hizmet bedelinin tamamını KOSGEB&apos;den geri alıyor,
            hiçbir kısmı kredi olarak geri ödenmiyor.
          </li>
          <li>
            ✔ Program süresi 36 ay ve işletme bu programdan (bir bütün
            olarak) <strong>ömür boyu yalnızca 1 defa</strong>
            yararlanabiliyor; ama program içindeki bazı hizmetler kendi
            içinde birden fazla kez kullanılabiliyor.
          </li>
          <li>
            ✔ Başvuru için özel bir çağrı takvimi yok; KOSGEB sistemi
            üzerinden herhangi bir tarihte başvurulabiliyor ve
            başvurular en geç 15 gün içinde değerlendiriliyor.
          </li>
          <li>
            ✔ Destekten yararlanacak KOBİ, doğrudan başvuru sahibi;
            aradaki hizmeti ise Bakanlık/KOSGEB tarafından yetkilendirilmiş
            danışmanlardan (dijital dönüşüm danışmanı, yalın dönüşüm
            danışmanı, bağımsız denetim kuruluşu) alıyor.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#program-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Program Nedir, Amacı Ne?
          </Link>
          <Link href="#kimler-basvurabilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir?
          </Link>
          <Link href="#destek-unsurlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Unsurları ve Tutarları
          </Link>
          <Link href="#hizmet-detaylari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Her Hizmetin Kendi Şartları
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Süreci
          </Link>
          <Link href="#guncel-durum" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Program Şu An Açık mı?
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

      {/* 1. PROGRAM NEDİR */}
      <section id="program-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Program Nedir, Amacı Ne?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in resmî tanımına göre YÖNDE - Yönderlik ve
          Değerlendirme Destek Programı&apos;nın amacı, &quot;KOBİ&apos;lerin
          öncelikli konularda mevcut durumlarının tespit edilerek sorun ve
          ihtiyaçlarının belirlenmesine, gerekli stratejilerinin
          oluşturulmasına, bu stratejiler doğrultusunda kapasitelerinin
          geliştirilmesine ve ihtiyaçlarının karşılanmasına katkı
          sağlamaktır&quot;. Sadeleştirirsek: işletmenizin dijitalleşme,
          sürdürülebilirlik raporlama veya yalın üretim konusunda nerede
          durduğunu bağımsız bir uzmana analiz ettirmek isterseniz, bu
          analizin/danışmanlığın maliyetini KOSGEB büyük ölçüde
          karşılıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Program, 13 Ocak 2024 tarihli ve 32428 sayılı Resmî Gazete&apos;de
          yayımlanan KOSGEB Destek Programları Yönetmeliği ile 31 Ocak
          2024 tarihli ve 2024-03 sayılı KOSGEB İcra Komitesi Kararı
          kapsamında yürürlüğe girdi. İlk uygulama esaslarında (30 Temmuz
          2024 tarihli, UE-36/00) yalnızca üç hizmet ve 280.000 TL üst
          limit vardı; KOSGEB&apos;in güncel resmî destek sayfasında ise
          programa dördüncü bir hizmet daha eklenmiş ve destek oranı
          %100&apos;e yükseltilmiş durumda. Yani program hâlâ görece yeni
          ve güncelleniyor; başvuru öncesi güncel rakamları mutlaka
          KOSGEB&apos;in kendi sayfasından teyit etmek gerekiyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            YÖNDE, klasik bir yatırım veya makine-teçhizat desteği değil;
            &quot;danışmanlık/analiz hizmeti&quot; destekliyor. Yani
            işletmenize doğrudan nakit veya kredi verilmiyor, TÜSSİDE
            belgeli bir dijital dönüşüm danışmanından, Bakanlık tarafından
            bildirilen bir yalın dönüşüm danışmanından veya yetkili bir
            bağımsız denetim kuruluşundan aldığınız hizmetin faturası
            KOSGEB tarafından geri ödeniyor.
          </p>
        </div>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler-basvurabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu programda dolaylı bir yararlanıcı yapısı yok; KOBİ, KOSGEB
          sistemine doğrudan kendisi başvuruyor. Ama başvuru şartları
          KOSGEB&apos;in birçok diğer programına göre daha dar:
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Başvuru Şartları
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Türk Ticaret Kanunu&apos;nda tanımlı gerçek veya tüzel kişi statüsünde olmak</li>
              <li>✔ NACE Rev. 2&apos;ye göre <strong>Kısım C - İmalat</strong> sektöründe faaliyet göstermek</li>
              <li>✔ Küçük veya orta ölçekli işletme (KOBİ) olmak</li>
              <li>✔ KOSGEB Veri Tabanında kayıtlı, aktif durumda olmak</li>
              <li>✔ İşletme Beyanının güncel olması</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ❌ Başvuramayacak Yapılar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>❌ Mikro ölçekli işletmeler (program özel olarak hariç tutuyor)</li>
              <li>❌ İmalat (Kısım C) dışındaki sektörlerde faaliyet gösteren işletmeler</li>
              <li>❌ Büyük ölçekli işletmeler</li>
              <li>❌ İşletme Beyanı güncel olmayan veya KOSGEB sisteminde pasif görünen işletmeler</li>
              <li>❌ Programdan daha önce 1 kez yararlanmış işletmeler (tekrar başvuramıyor)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: &quot;Bağımsız Değerlendirme&quot; İki Farklı
            KOSGEB Sayfasında Farklı Rakamla Geçiyor
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Araştırma sırasında dikkat çekici bir tutarsızlık var: KOSGEB&apos;in{" "}
            <Link href="/blog/kosgeb-stratejik-urun-destek-programi-2026" className="text-red-700 underline">
              Stratejik Ürün Destek Programı
            </Link>{" "}
            sayfasında, Teknoloji Odaklı Sanayi Hamlesi (HAMLE) sürecindeki
            bağımsız değerlendirme raporu için <strong>50.000 TL</strong>{" "}
            (%100, 24 ay) üst limitli ayrı bir destek unsuru var. YÖNDE
            sayfasında ise aynı HAMLE sürecindeki bağımsız değerlendirme
            raporuna atıfla, hizmet başına <strong>150.000 TL</strong>,
            program boyunca toplam <strong>450.000 TL</strong> üst limitli
            bambaşka bir &quot;Bağımsız Değerlendirme Hizmeti Desteği&quot;
            listeleniyor. İkisi de aynı raporu tarif ediyor ama rakamlar
            örtüşmüyor. HAMLE sürecindeyseniz, hangi desteğin sizin başvuru
            tarihiniz için geçerli olduğunu ve iki destekten aynı anda
            yararlanıp yararlanamayacağınızı başvurudan önce mutlaka KOSGEB
            ile veya danışmanınızla teyit ettirin.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru sürecinde en sık gözden kaçan nokta, programın kendisinin
            işletme başına ömür boyu yalnızca 1 kez kullanılabilmesine
            rağmen, içindeki üç ana hizmetin (dijital dönüşüm, sürdürülebilirlik
            raporlaması, YODA) her birinin ayrı ayrı en fazla 2 defa
            kullanılabilmesidir. Bu ayrımı gözden kaçıran işletmeler bütçe
            planlamasını genellikle tek seferlik bir hizmet bedeline göre
            yapıyor ve 36 aylık program süresi içinde elindeki toplam
            kapasitenin önemli bir kısmını kullanmadan bırakıyor. İki kez
            kullanım için tek şart, aynı hizmetin ikinci kullanımının
            birincinin bitiş tarihinden en az 1 yıl sonra olması.
          </p>
        </div>
      </section>

      {/* 3. DESTEK UNSURLARI */}
      <section id="destek-unsurlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Unsurları ve Tutarları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in güncel resmî destek sayfasına göre program dört
          hizmeti kapsıyor, hepsi %100 oranında ve geri ödemesiz:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek Unsuru</th>
                <th className="p-5">Üst Limit</th>
                <th className="p-5">Oran</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Dijital Dönüşüm Değerlendirme Analizi ve Yol Haritası</td>
                <td className="p-5">40.000 TL</td>
                <td className="p-5">%100 (geri ödemesiz)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sürdürülebilirlik Raporlaması Hizmeti</td>
                <td className="p-5">200.000 TL</td>
                <td className="p-5">%100 (geri ödemesiz)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yalın Olgunluk Değerlendirme Analizi (YODA)</td>
                <td className="p-5">40.000 TL</td>
                <td className="p-5">%100 (geri ödemesiz)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Bağımsız Değerlendirme Hizmeti (HAMLE bağlantılı)</td>
                <td className="p-5">450.000 TL</td>
                <td className="p-5">%100 (geri ödemesiz)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Kaynak: KOSGEB resmî YÖNDE destek sayfası. Programın toplam üst
          limiti KOSGEB tarafından ayrıca &quot;700.000 TL&quot; olarak da
          belirtiliyor; başvuru öncesi güncel toplamı ve hizmet başına
          limitleri kosgeb.gov.tr üzerinden teyit edin.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6">
          <p className="leading-8 text-gray-700">
            ⚠️ <strong>Dikkat:</strong> Program 30 Temmuz 2024&apos;te
            yürürlüğe girdiğinde yalnızca üç hizmet (dijital dönüşüm,
            sürdürülebilirlik, YODA) vardı, toplam üst limit 280.000 TL,
            destek oranı ise %80&apos;di. KOSGEB daha sonra bağımsız
            değerlendirme hizmetini programa ekledi ve oranı %100&apos;e
            yükseltti. İnternette hâlâ eski oran/limitle yazılmış içerikler
            dolaşabilir; başvuru öncesi mutlaka güncel sayfayı kontrol edin.
          </p>
        </div>
      </section>

      {/* 4. HİZMET DETAYLARI */}
      <section id="hizmet-detaylari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Her Hizmetin Kendi Şartları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Dört hizmetin de kendine özgü kuralları var; birini seçerken
          bunları bilmek başvuru sürecinde sürpriz yaşamamanız için önemli.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Dijital Dönüşüm Değerlendirme Analizi</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Yalnızca TÜSSİDE (TÜBİTAK Türkiye Sanayi Sevk ve İdare Enstitüsü) tarafından belgelendirilmiş dijital dönüşüm danışmanlarından alınan hizmet destekleniyor</li>
              <li>• Hizmet başına üst limit 20.000 TL, toplamda en fazla 2 kez kullanılabiliyor</li>
              <li>• İaşe, ulaşım, konaklama gibi giderler kapsam dışı; sadece danışmanlık bedeli destekleniyor</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Sürdürülebilirlik Raporlaması</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Rapor, Türkiye Sürdürülebilirlik Raporlama Standartları&apos;na (TSRS) uygun hazırlanmalı</li>
              <li>• Raporun güvence denetimi, KGK yetkili bir bağımsız denetim kuruluşu tarafından yapılmış olmalı</li>
              <li>• Hizmet başına üst limit 100.000 TL, en fazla 2 rapor için destek alınabiliyor</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Yalın Olgunluk Değerlendirme (YODA)</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Bakanlık tarafından bildirilen yalın dönüşüm danışmanlarından alınıyor</li>
              <li>• Hizmet başına üst limit 20.000 TL, en fazla 2 kez kullanılabiliyor</li>
              <li>• İkinci kullanım için ilk YODA raporunda önerilen model fabrika hizmetlerinin tamamlanmış olması şart</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Bağımsız Değerlendirme Hizmeti</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Yalnızca Teknoloji Odaklı Sanayi Hamlesi (HAMLE) Programı çağrı planında yer alan bir ürünü üretmek üzere proje başvurusu yapan işletmeler için geçerli</li>
              <li>• Rapor, Bakanlık tarafından ilan edilen bağımsız danışmanlık firmaları tarafından hazırlanıyor</li>
              <li>• Hizmet başına üst limit 150.000 TL, toplam üst limit 450.000 TL</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Sürdürülebilirlik raporlaması özellikle önemli bir bağlantı
          taşıyor: TSRS kapsamına giren şirket sayısı KGK&apos;nın
          yükselttiği eşiklerle her geçen yıl artıyor. Bu konuda daha
          detaylı bilgi için{" "}
          <Link href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026" className="text-orange-600 underline">
            TSRS Sürdürülebilirlik Raporlama Zorunluluğu 2026
          </Link>{" "}
          yazımıza bakabilirsiniz; TSRS kapsamına giren veya gönüllü rapor
          hazırlamak isteyen imalatçı bir KOBİ&apos;yseniz, bu raporun
          maliyetinin 100.000 TL&apos;ye kadarki kısmını YÖNDE üzerinden
          karşılayabilirsiniz.
        </p>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">İşletme Beyanını Güncelleyin</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Hizmet Sağlayıcıyı Belirleyin</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Başvuru Formu ve Taahhütnameyi Onaylayın</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Hizmeti Alın, Raporu Teslim Alın</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Ödeme Talep Formunu Sisteme Yükleyin</h3>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Başvuru, &quot;YÖNDE - Yönderlik ve Değerlendirme Destek Programı
          Başvuru Formu&quot; ile kosgeb.gov.tr üzerinden sisteme giriş
          yapılarak yapılıyor. Başvuru ile birlikte idari, mali ve hukuki
          taahhütleri içeren taahhütname de elektronik ortamda onaylanıyor.
          KOSGEB başvuruları mevzuata uygunluk ve şekil yönünden en geç 15
          gün içinde kontrol ediyor; eksiklik varsa işletmeye sistem
          üzerinden bildirim yapılıyor ve düzeltme için 30 gün süre
          tanınıyor. Programın başlangıç tarihi, başvurunun uygulama
          birimi tarafından onaylandığı tarih olarak kabul ediliyor.
        </p>
        <p className="mt-6 leading-8 text-gray-700">
          Hizmeti aldıktan sonra işletme, raporu teslim aldığını sistem
          üzerinden onaylıyor ve &quot;YÖNDE Ödeme Talep Formu&quot;nu
          doldurup ödeme belgelerini (fatura, banka/PTTBank ödeme dekontu
          vb.) yüklüyor. Ödeme talebi en geç programın tamamlanma
          tarihinden 4 ay sonrasına kadar yapılmalı; geçerli bir mazeretle
          bu süre 2 ay daha uzatılabiliyor.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Hangi hizmetin işletmenize en yüksek faydayı sağlayacağından
            hizmet sağlayıcı seçimine, başvuru formunun eksiksiz
            hazırlanmasından ödeme talep sürecine kadar tüm adımları
            birlikte yürütebiliriz.{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Şirketinizin YÖNDE Destek Programı&apos;na uygunluğunu
              ücretsiz ön analizle birlikte değerlendirelim.
            </Link>
          </p>
        </div>
      </section>

      {/* 6. GÜNCEL DURUM */}
      <section id="guncel-durum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Program Şu An Açık mı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Evet. YÖNDE, belirli bir çağrı dönemi veya son başvuru tarihi
          olan bir program değil; KOSGEB&apos;in Ar-Ge, Ür-Ge ve İnovasyon
          Destek Programı gibi &quot;evergreen&quot; (sürekli açık) destek
          programlarından biri. Şartları sağlayan bir imalatçı KOBİ, yılın
          herhangi bir gününde başvurabiliyor; özel bir çağrı takvimini
          beklemesi gerekmiyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Tek istisna, Bağımsız Değerlendirme Hizmeti kalemi: bu hizmet
            yalnızca Teknoloji Odaklı Sanayi Hamlesi (HAMLE) Programı çağrı
            planında yer alan bir ürünü üretmek üzere proje başvurusu yapan
            işletmeler için geçerli. Dolayısıyla bu tek kalemden
            yararlanmak isteyenlerin, HAMLE&apos;nin kendi çağrı takvimini
            (hamle.sanayi.gov.tr üzerinden) ayrıca takip etmesi gerekiyor.
            Diğer üç hizmet (dijital dönüşüm, sürdürülebilirlik, YODA) için
            böyle bir bağımlılık yok.
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
            ✅ Program yalnızca imalat (NACE Kısım C) sektöründeki
            küçük/orta ölçekli işletmelere açık, mikro ölçek hariç
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hizmet sağlayıcı serbestçe seçilemiyor; TÜSSİDE veya
            Bakanlık tarafından yetkilendirilmiş danışmanlar/kuruluşlar
            şart
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Programın kendisi ömür boyu 1 kez, ama içindeki üç ana
            hizmet ayrı ayrı en fazla 2&apos;şer kez kullanılabiliyor
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İaşe, ulaşım, konaklama gibi yan giderler destek kapsamı
            dışında
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ödeme talebi, program tamamlanma tarihinden en geç 4 ay
            içinde yapılmalı
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bağımsız değerlendirme kalemini Stratejik Ürün Destek
            Programı&apos;ndaki benzer destekle karıştırmayın, tutarları
            farklı
          </div>
        </div>
      </section>

      {/* 8. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/9165/yonde-yonderlik-ve-degerlendirme-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - YÖNDE Yönderlik ve Değerlendirme Destek Programı
            </a>
          </li>
          <li>
            <a
              href="https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/YONDE/Y%C3%96NDE_Destek_Program%C4%B1_Uygulama_Esaslar%C4%B1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - YÖNDE Destek Programı Uygulama Esasları (UE-36/00)
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/6492/stratejik-urun-destek-programi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB - Stratejik Ürün Destek Programı
            </a>
          </li>
          <li>
            <a
              href="https://ddx.tubitak.gov.tr/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜBİTAK TÜSSİDE - Dijital Dönüşüm Danışmanları Portalı (DDX)
            </a>
          </li>
          <li>
            <a
              href="https://www.kosgeb.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              KOSGEB Resmî Web Sitesi
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
              YÖNDE destek programına hizmet sektöründeki bir KOBİ olarak başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Program yalnızca NACE Rev. 2&apos;ye göre Kısım C -
              İmalat sektöründe faaliyet gösteren küçük ve orta ölçekli
              işletmelere açık. Hizmet, ticaret veya diğer sektörlerdeki
              işletmeler bu destekten yararlanamıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Mikro ölçekli bir imalatçıyım, YÖNDE&apos;den yararlanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. KOSGEB&apos;in resmî uygulama esasları, mikro ölçekli
              işletmeleri bu destek programından açıkça hariç tutuyor.
              Program yalnızca küçük ve orta ölçekli işletmelere açık.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Dört hizmetin tamamından aynı anda yararlanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, dört hizmet birbirinden bağımsız ayrı destek unsurları;
              şartlarını sağlıyorsanız hepsinden aynı program süresi (36 ay)
              içinde yararlanabilirsiniz. Ancak Bağımsız Değerlendirme
              Hizmeti yalnızca HAMLE çağrı planında yer alan bir ürünü
              üretmek üzere başvuru yapan işletmeler için geçerli.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sürdürülebilirlik raporumu istediğim danışmanlık firmasına hazırlatabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Rapor hazırlığını istediğiniz kuruluşa yaptırabilirsiniz, ama
              destekten yararlanmak için raporun TSRS&apos;ye uygun olması
              ve güvence denetiminin Kamu Gözetimi, Muhasebe ve Denetim
              Standartları Kurumu (KGK) tarafından yetkilendirilmiş bir
              bağımsız denetim kuruluşu tarafından yapılmış olması
              gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Programdan bir kez yararlandıktan sonra tekrar başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, işletmeler YÖNDE Destek Programı&apos;nın kendisinden
              yalnızca 1 defa yararlanabiliyor. Ancak bu, programa dahil
              olduğunuz 36 aylık süre içinde dijital dönüşüm, sürdürülebilirlik
              ve YODA hizmetlerinin her birini ayrı ayrı 2&apos;şer kez
              kullanmanıza engel değil.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuru için belirli bir son tarih var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, dijital dönüşüm, sürdürülebilirlik raporlaması ve
              YODA hizmetleri için özel bir çağrı dönemi yok; başvurular
              yıl boyunca KOSGEB sistemi üzerinden yapılabiliyor. Yalnızca
              Bağımsız Değerlendirme Hizmeti, HAMLE Programı&apos;nın kendi
              çağrı takvimine bağlı.
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
          YÖNDE - Yönderlik ve Değerlendirme Destek Programı, ismi
          nedeniyle çoğu işletme sahibinin gözünden kaçan ama içeriği
          itibarıyla oldukça cömert bir KOSGEB desteği. İmalat sektöründeki
          bir KOBİ&apos;yseniz ve dijital dönüşüm yol haritanızı çizdirmek,
          TSRS uyumlu bir sürdürülebilirlik raporu hazırlatmak veya yalın
          üretim olgunluğunuzu bağımsız bir uzmana analiz ettirmek
          istiyorsanız, bu maliyetlerin tamamına yakınını KOSGEB
          karşılıyor. Tek şart, doğru hizmet sağlayıcıyı seçmek ve
          başvuru/ödeme sürecindeki belge ve süre kurallarına dikkat
          etmek.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hangi hizmetin işletmeniz için önceliği olduğundan başvuru
          formunun hazırlanmasına, hizmet sağlayıcı seçiminden ödeme
          talep sürecine kadar Koray Akdağ / Sistem Global Danışmanlık
          olarak tüm süreçte yanınızdayız. Ayrı bir danışmanlık firması
          aramanıza gerek kalmadan, başvurunuzu da sonrasındaki takibi de
          tek noktadan yürütebiliriz.
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
            href="/blog/kosgeb-stratejik-urun-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • TEKNOLOJİ HAMLESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Stratejik Ürün Destek Programı</h3>
          </Link>
          <Link
            href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"YÖNDE destek programına hizmet sektöründeki bir KOBİ olarak başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Program yalnızca NACE Rev. 2'ye göre Kısım C - İmalat sektöründe faaliyet gösteren küçük ve orta ölçekli işletmelere açık. Hizmet, ticaret veya diğer sektörlerdeki işletmeler bu destekten yararlanamıyor."}},{"@type":"Question","name":"Mikro ölçekli bir imalatçıyım, YÖNDE'den yararlanabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. KOSGEB'in resmî uygulama esasları, mikro ölçekli işletmeleri bu destek programından açıkça hariç tutuyor. Program yalnızca küçük ve orta ölçekli işletmelere açık."}},{"@type":"Question","name":"Dört hizmetin tamamından aynı anda yararlanabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Evet, dört hizmet birbirinden bağımsız ayrı destek unsurları; şartlarını sağlıyorsanız hepsinden aynı program süresi (36 ay) içinde yararlanabilirsiniz. Ancak Bağımsız Değerlendirme Hizmeti yalnızca HAMLE çağrı planında yer alan bir ürünü üretmek üzere başvuru yapan işletmeler için geçerli."}},{"@type":"Question","name":"Sürdürülebilirlik raporumu istediğim danışmanlık firmasına hazırlatabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Rapor hazırlığını istediğiniz kuruluşa yaptırabilirsiniz, ama destekten yararlanmak için raporun TSRS'ye uygun olması ve güvence denetiminin Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu (KGK) tarafından yetkilendirilmiş bir bağımsız denetim kuruluşu tarafından yapılmış olması gerekiyor."}},{"@type":"Question","name":"Programdan bir kez yararlandıktan sonra tekrar başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır, işletmeler YÖNDE Destek Programı'nın kendisinden yalnızca 1 defa yararlanabiliyor. Ancak bu, programa dahil olduğunuz 36 aylık süre içinde dijital dönüşüm, sürdürülebilirlik ve YODA hizmetlerinin her birini ayrı ayrı 2'şer kez kullanmanıza engel değil."}},{"@type":"Question","name":"Başvuru için belirli bir son tarih var mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır, dijital dönüşüm, sürdürülebilirlik raporlaması ve YODA hizmetleri için özel bir çağrı dönemi yok; başvurular yıl boyunca KOSGEB sistemi üzerinden yapılabiliyor. Yalnızca Bağımsız Değerlendirme Hizmeti, HAMLE Programı'nın kendi çağrı takvimine bağlı."}}]}) }}
      />
    </BlogLayout>
  );
}
