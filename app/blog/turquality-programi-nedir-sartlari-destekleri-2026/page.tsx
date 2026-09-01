import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Turquality Programı Nedir? Başvuru Şartları ve Destekleri (2026) | Koray Akdağ",
  description:
    "Turquality Programı nedir, Marka Destek Programı'ndan farkı ne, kimler başvurabilir? Kabul kriterleri, ön inceleme puanlaması, %50-%75 arası destek oranları, somut örneklerle destek kalemleri ve 2026 güncel başvuru süreciyle kapsamlı Turquality rehberi.",
  keywords: [
    "Turquality nedir",
    "Turquality programı",
    "Turquality başvuru şartları",
    "Turquality kabul kriterleri",
    "Marka Destek Programı",
    "Turquality Marka Destek Programı farkı",
    "Turquality destek oranları",
    "hedef ülke hedef sektör puanı",
    "e-Turquality",
    "5973 sayılı karar",
    "Turquality 2026",
    "markalaşma desteği",
    "Ticaret Bakanlığı Turquality",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Turquality Programı Nedir? Şartları, Destekleri ve 2026 Güncel Rehberi"
      description="Ticaret Bakanlığı'nın Türk markalarının uluslararası pazarda güçlenmesi için yürüttüğü devlet destekli tek markalaşma programı Turquality'nin kapsamı, Marka Destek Programı ile farkı, kabul kriterleri, başvuru puanlama sistemi, somut örneklerle destek kalemleri ve oranları, süre/üst limitler ile 2026 itibarıyla geçerli güncel bilgiler."
      category="TURQUALITY • İHRACAT DESTEKLERİ • 2026"
      date="2026"
      readTime="17 Dakika"
      coverImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="turquality-programi-nedir-sartlari-destekleri-2026"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Turquality, Ticaret Bakanlığı&apos;nın Türk markalarının
            uluslararası pazarda kendi adlarıyla güçlü bir oyuncu hâline
            gelmesi için yürüttüğü, üretimden pazarlamaya, satıştan satış
            sonrası hizmete kadar tüm süreçleri destekleyen devlet destekli
            markalaşma programıdır. Aynı başvuru sürecinden geçen ama
            farklı kapsamda desteklenen iki program &mdash; Marka Destek
            Programı ve Turquality Destek Programı &mdash; sık karıştırılır.
            Bu yazıda ikisi arasındaki farkı, kabul kriterlerini, başvuru
            puanlama sisteminin nasıl işlediğini, hangi destek kalemlerinden
            ne oranda yararlanılabildiğini somut örneklerle ve Turquality&apos;yi
            diğer devlet desteklerinden ayıran özellikleriyle birlikte 2026
            itibarıyla güncel bilgilerle anlatıyoruz.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Turquality tam olarak nedir, kim yönetir?</li>
            <li>✔ Turquality&apos;yi KOSGEB, TÜBİTAK gibi diğer desteklerden ayıran nedir?</li>
            <li>✔ Marka Destek Programı ile Turquality arasındaki fark nedir?</li>
            <li>✔ Kabul kriterleri nedir, hangi ihracat ve marka tescili şartları aranır?</li>
            <li>✔ Hangi giderler, hangi oranda destekleniyor? Somut örneklerle ne kazanılıyor?</li>
            <li>✔ Destek süresi ve üst limitler ne kadar?</li>
            <li>✔ Bir şirket Turquality&apos;ye neden başvurmalı?</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Turquality Nedir, Amacı ve Kapsamı Nedir?
            </Link>
            <Link href="#neden-onemli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Turquality&apos;yi Diğer Devlet Desteklerinden Ayıran Nedir?
            </Link>
            <Link href="#fark" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Marka Destek Programı ile Turquality Arasındaki Fark
            </Link>
            <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Kabul Kriterleri: Kimler Başvurabilir, Hangi Şartlar Aranır?
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Başvuru Süreci: Adım Adım
            </Link>
            <Link href="#destekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Destek Kalemleri ve Oranları
            </Link>
            <Link href="#ornekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Somut Örneklerle Turquality&apos;nin Sağladığı Fayda
            </Link>
            <Link href="#sure-limit" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Destek Süresi ve Üst Limitler
            </Link>
            <Link href="#firma-sayisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Kapsamdaki Firma Sayısı ve Statü
            </Link>
            <Link href="#hatalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              10. Sık Yapılan Hatalar ve Pratik Tavsiyeler
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              11. Dikkat Edilmesi Gereken Noktalar
            </Link>
            <Link href="#neden-basvurmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              12. Bir Şirket Turquality Programına Neden Başvurmalı?
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              13. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              14. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. NEDİR */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Turquality Nedir, Amacı ve Kapsamı Nedir?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Turquality, dünya çapında markalaşma potansiyeli taşıyan Türk
            şirketlerinin; ürün geliştirmeden pazarlamaya, satıştan satış
            sonrası hizmete kadar bütün süreçlerini destekleyerek kendi
            markalarıyla uluslararası pazarlarda güçlü bir konum edinmelerini
            hedefleyen, <strong>devlet destekli ilk ve tek markalaşma
            programıdır</strong>. Program, <strong>5973 sayılı İhracat
            Destekleri Hakkında Karar&apos;ın 17&apos;nci maddesi</strong> ve
            buna ilişkin Genelge çerçevesinde <strong>Ticaret
            Bakanlığı</strong> tarafından yürütülür.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Programın nihai amacı yalnızca ihracat hacmini artırmak değil;
            Türk ürünlerinin dünya pazarlarında &quot;ucuz fason üretici&quot;
            algısından çıkıp katma değeri yüksek, tanınırlığı olan markalar
            hâline gelmesini sağlamak, böylece &quot;Türk malı&quot;
            imajını uluslararası pazarlarda olumlu biçimde
            konumlandırmaktır.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Programın Kapsadığı İki Ana Kanal
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>
                ✔ <strong>Mal İhracatı (5973 sayılı Karar):</strong> tekstil,
                hazır giyim, gıda, mobilya, elektronik, otomotiv, kişisel
                bakım gibi üretim ağırlıklı sektörler
              </li>
              <li>
                ✔ <strong>Hizmet İhracatı (10962 sayılı Karar &mdash;
                e-Turquality/Bilişimin Yıldızları ve diğer hizmet
                programları):</strong> bilişim, gastronomi, lojistik, sağlık
                turizmi, eğitim gibi döviz kazandırıcı hizmet sektörleri
              </li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Önemli bir not: Turquality bir kredi ya da doğrudan nakit hibe
            değildir; şirketin markalaşma yolculuğunda zaten yapacağı
            reklam, tanıtım, danışmanlık, tescil, istihdam ve mağaza/showroom
            gibi harcamalarının önemli bir kısmının Bakanlık tarafından geri
            ödemesiz olarak karşılandığı bir <strong>destek
            mekanizmasıdır</strong>.
          </p>
        </section>

        {/* 2. NEDEN ÖNEMLİ */}
        <section id="neden-onemli" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Turquality&apos;yi Diğer Devlet Desteklerinden Ayıran Nedir?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Türkiye&apos;de KOSGEB destekleri, TÜBİTAK Ar-Ge destekleri veya
            Yatırım Teşvik Belgesi gibi onlarca devlet destek programı
            bulunuyor. Turquality bu programların hiçbirinin yerini tutmuyor
            &mdash; aksine, çoğu şirket bu desteklerden birkaçını aynı anda
            kullanıyor. Ancak Turquality, odağı, süresi ve prestij değeri
            açısından yapısal olarak farklı bir yerde duruyor:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-4">Program</th>
                  <th className="p-4">Odak</th>
                  <th className="p-4">Tipik Süre</th>
                  <th className="p-4">Kapsam</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">KOSGEB Destekleri</td>
                  <td className="p-4">Üretim, kapasite, Ar-Ge/inovasyon, dijitalleşme</td>
                  <td className="p-4">Genellikle 1-2 yıl</td>
                  <td className="p-4">Belirli proje/gider kalemleri</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">TÜBİTAK 1501/1507</td>
                  <td className="p-4">Ar-Ge ve inovasyon projeleri</td>
                  <td className="p-4">Proje süresi (1-3 yıl)</td>
                  <td className="p-4">Ar-Ge gideri</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Yatırım Teşvik Belgesi</td>
                  <td className="p-4">Sabit yatırım, tesis, kapasite artırımı</td>
                  <td className="p-4">Yatırım süresi + tamamlama vizesi</td>
                  <td className="p-4">Vergi, gümrük, SGK, faiz desteği</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-orange-600">Turquality</td>
                  <td className="p-4">Markanın kendisi ve kurumsal marka yönetim yeteneği</td>
                  <td className="p-4">Hedef pazar başına 5 yıl, uzatılabilir</td>
                  <td className="p-4">Tanıtım, tescil, istihdam, mağaza/showroom, danışmanlık &mdash; markalaşmanın tüm süreci</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🏅 &quot;Turquality Onaylı Marka&quot; Statüsünün İtibar Değeri
            </h3>
            <p className="leading-8 text-gray-700">
              Diğer birçok destek programı belirli bir gideri veya projeyi
              hedeflerken, Turquality doğrudan şirketin en soyut ve en zor
              kopyalanan varlığını &mdash; markasını &mdash; hedef alır. Kabul
              edilen firma sayısının sınırlı olması (bkz. bölüm 9), ciddi bir
              ön inceleme ve süreç boyunca devam eden denetimden geçilmesi,
              &quot;Turquality onaylı marka&quot; statüsünü hem yurt içi hem
              yurt dışı iş ortakları, distribütörler ve alıcılar nezdinde
              başlı başına bir güven sinyaline dönüştürür. Ayrıca hedef
              pazar başına 5 yıllık destek ufku, KOSGEB veya TÜBİTAK&apos;ın
              1-3 yıllık proje bazlı yapısına kıyasla çok daha uzun soluklu
              bir büyüme planlaması imkânı sunar.
            </p>
          </div>
        </section>

        {/* 3. FARK */}
        <section id="fark" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Marka Destek Programı ile Turquality Arasındaki Fark
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            &quot;Turquality&quot; ve &quot;Marka Destek Programı&quot; iki
            ayrı başvuru kanalı değildir; aynı başvuru ve ön inceleme
            sürecinden geçen firmalar, aldıkları <strong>ön inceleme
            puanına</strong> göre bu iki programdan birine yönlendirilir.
            Bu yüzden bir şirketin doğrudan &quot;Turquality&apos;ye
            başvuracağım&quot; demesi teknik olarak mümkün değildir &mdash;
            başvuru tek bir kapıdan yapılır, hangi programa dahil
            olunacağı denetim sonucunda belirlenir.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Ön İnceleme Puanı</th>
                  <th className="p-5">Sonuç</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold text-red-600">50 puan altı</td>
                  <td className="p-5">Kapsama alınmaz; 6 ay sonra yeniden başvuru yapılabilir</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">50&ndash;80 puan</td>
                  <td className="p-5"><strong>Marka Destek Programı</strong> kapsamına alınır</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-green-700">80&ndash;100 puan</td>
                  <td className="p-5"><strong>Turquality Destek Programı</strong> kapsamına alınır</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Kaynak: Marka ve Turquality Desteklerine İlişkin Genelge
            hükümlerini esas alan güncel danışmanlık kaynaklarının ortak
            aktardığı puanlama eşikleri; kesin puanlama kriterleri Genelge
            metninde detaylandırılmıştır.
          </p>

          <h3 className="mb-6 mt-14 text-2xl font-bold text-[#071A2F]">
            📊 İki Program Arasındaki Temel Farklar
          </h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Marka Destek Programı</th>
                  <th className="p-4">Turquality Destek Programı</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Destek süresi</td>
                  <td className="p-4">4 yıl (sabit)</td>
                  <td className="p-4">Her hedef pazar (ülke) için 5 yıl; kurumsal altyapı ve istihdam giderleri ilk 5 yıl</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Destek oranı</td>
                  <td className="p-4">%50 (hedef ülke/sektör bonusu uygulanabilir)</td>
                  <td className="p-4">%50 (hedef ülke/sektör bonusuyla %75&apos;e kadar)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Yıllık üst limit</td>
                  <td className="p-4">Kişi/şirket başına daha düşük tavan</td>
                  <td className="p-4">Kişi/şirket başına daha yüksek tavan</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Statü algısı</td>
                  <td className="p-4">Markalaşma yolculuğunun ilk aşaması</td>
                  <td className="p-4">Bakanlıkça &quot;küresel marka adayı&quot; olarak nitelendirilen üst kademe</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🔄 Marka Programı&apos;ndan Turquality&apos;ye Geçiş
            </h3>
            <p className="leading-8 text-gray-700">
              Marka Destek Programı kapsamında desteklenen bir şirket, destek
              süresi içinde veya bitiminde yapılan yeniden değerlendirmede
              Turquality kapsamına alınabilir. Bu durumda şirket, Turquality
              desteklerinden yararlanırken <strong>Marka Programı
              kapsamında desteklendiği toplam süre mahsup edilerek</strong>{" "}
              faydalanır. Örneğin Marka Programı&apos;nda 3 yıl desteklenmiş
              bir şirket, Turquality&apos;nin kurumsal altyapı desteğinden
              5 yıl değil kalan 2 yıl için yararlanır; ancak her yeni hedef
              pazar için tanınan 5 yıllık süre bu mahsuptan etkilenmez.
            </p>
          </div>
        </section>

        {/* 4. KABUL KRİTERLERİ / ŞARTLAR */}
        <section id="sartlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Kabul Kriterleri: Kimler Başvurabilir, Hangi Şartlar Aranır?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Marka/Turquality destek programı kapsamına alınmak, üç ana
            eksende değerlendirilen bir kabul sürecidir. Aşağıdaki üç
            kriterin tamamı sağlanmadan başvuru olumlu sonuçlanmaz:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <div className="mb-3 text-4xl">🏆</div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">1. Ön İnceleme Puanı</h3>
              <p className="text-sm leading-7 text-gray-700">
                Görevlendirilen danışmanlık firmasının hazırladığı ön
                inceleme raporunda en az <strong>50 puan</strong> alınması
                gerekir (50 altı ret, 50-80 Marka, 80-100 Turquality).
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <div className="mb-3 text-4xl">📈</div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">2. İhracat Performansı</h3>
              <p className="text-sm leading-7 text-gray-700">
                Son 3 yıllık ortalama ihracatın en az <strong>3.000.000
                ABD Doları</strong> olması (ya da son 1 yılda en az
                10.000.000 ABD Doları ihracat istisnası).
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <div className="mb-3 text-4xl">™️</div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">3. Marka Tescili</h3>
              <p className="text-sm leading-7 text-gray-700">
                Yurt içi tescilin yurt dışından <strong>önce</strong> alınmış
                olması ve Madrid Protokolü&apos;ne taraf en az bir ülkede
                yurt dışı tescil bulunması.
              </p>
            </div>
          </div>

          <h3 className="mb-6 mt-14 text-2xl font-bold text-[#071A2F]">
            📋 Detaylı Şart Listesi
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ İhracat ve Tescil Şartları
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ İhraç kayıtlı satışlarla organik bağı bulunan şirketler dahil, son 3 takvim yılında ihracat yapmış olması</li>
                <li>✔ Başvuru tarihi itibarıyla son 3 yıllık ortalama ihracatının en az <strong>3.000.000 ABD Doları</strong> tutarında olması</li>
                <li>✔ Başvurulan markanın, başvuru tarihinden en az 1 yıl önce alınmış yurt içi tescilinin bulunması</li>
                <li>✔ Aynı markanın, Madrid Uluslararası Marka Tescil Protokolü&apos;ne taraf ülkelerden en az birinde yurt dışı tescilinin bulunması</li>
                <li>✔ Yurt içi tescilin, yurt dışı tescilden <strong>önce</strong> yapılmış olması</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Diskalifiye Eden veya Kapsam Dışı Bırakan Durumlar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Yurt dışı tescilin yurt içi tescilden önce yapılmış olması</li>
                <li>❌ Yurt içi/yurt dışı tescillerin farklı, organik bağı olmayan şirketler adına olması</li>
                <li>❌ Markada Türk malı/markası imajına aykırı ifade, sembol, şekil, işaret veya ülke/şehir/bölge isimlerinin kullanılması</li>
                <li>❌ Satın alınan yabancı markalar (bu destek kapsamına girmez)</li>
                <li>❌ Ön inceleme raporunda 50 puanın altında kalınması</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              💡 Yüksek İhracatlı Şirketler İçin İstisna
            </h3>
            <p className="leading-8 text-gray-700">
              Başvuru tarihi itibarıyla son 1 yıl içinde en az{" "}
              <strong>10.000.000 ABD Doları</strong> ihracat yapmış olan
              şirketlerde, yukarıdaki 3 yıllık ortalama ihracat (3 milyon
              USD) ve tescil süresi şartları aranmaz. Ancak bu şirketlerin
              de başvurulan markaya ilişkin hem yurt içi hem de Madrid
              Protokolü&apos;ne taraf en az bir ülkede yurt dışı tescili
              bulunmalıdır.
            </p>
          </div>
        </section>

        {/* 5. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Başvuru Süreci: Adım Adım
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Turquality/Marka Destek Programı başvurusu, ön değerlendirmeden
            Bakanlık onayına kadar birden fazla aşamadan oluşan, denetim
            ağırlıklı bir süreçtir:
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">1. Ön Değerlendirme</h3>
              <p className="mt-3 text-sm text-gray-600">
                Şirket, ön değerlendirme anketi/başvurusuyla mevcut durumunu
                ve marka/ihracat verilerini paylaşır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📥</div>
              <h3 className="text-xl font-bold">2. Resmî Başvuru</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yeterli ön puan alınırsa gerekli belgelerle hem otomasyon
                üzerinden hem de evrak asıllarıyla resmî başvuru yapılır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💳</div>
              <h3 className="text-xl font-bold">3. Ön İnceleme Ücreti</h3>
              <p className="mt-3 text-sm text-gray-600">
                Görevlendirilen yönetim danışmanlığı firmasına 1 ay içinde
                ön inceleme ücreti ödenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔎</div>
              <h3 className="text-xl font-bold">4. Ön İnceleme Çalışması</h3>
              <p className="mt-3 text-sm text-gray-600">
                Ödemeyi takip eden 1 ay içinde başlanır; şirketten belge
                talep edilir ve tesiste yerinde inceleme yapılır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📄</div>
              <h3 className="text-xl font-bold">5. Ön İnceleme Raporu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Danışmanlık firması, ödeme tarihinden en geç 2 ay içinde
                raporu KEP üzerinden Genel Müdürlüğe iletir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏆</div>
              <h3 className="text-xl font-bold">6. Puanlama ve Kapsama Alma</h3>
              <p className="mt-3 text-sm text-gray-600">
                Rapor puanına göre Marka (50-80) veya Turquality (80-100)
                programına dahil edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🗺️</div>
              <h3 className="text-xl font-bold">7. Stratejik İş Planı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Kapsama alınan firma için markalaşma yol haritası ve
                stratejik iş planı hazırlanır, Bakanlıkça onaylanır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💶</div>
              <h3 className="text-xl font-bold">8. Destek Ödemeleri</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onay sonrası harcamalar, şirketin üyesi olduğu ihracatçı
                birlikleri genel sekreterliği (incelemeci kuruluş) üzerinden
                ödemeye bağlanır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔁</div>
              <h3 className="text-xl font-bold">9. Ret Halinde Yeniden Başvuru</h3>
              <p className="mt-3 text-sm text-gray-600">
                50 puanın altında kalan başvurular reddedilir; 6 ay sonra
                yeniden başvuru yapılabilir.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ Başvuru Sürekli Açık, Süreç Uzun
            </h3>
            <p className="leading-8 text-gray-700">
              Turquality/Marka Destek Programı&apos;na başvuru dönemi belirli
              bir takvime bağlı değildir, yıl boyunca &quot;sürekli
              aktif&quot; statüdedir. Ancak ön inceleme, yerinde denetim,
              rapor hazırlığı ve stratejik iş planı onayı aşamaları birkaç
              ayı bulabilen bir süreçtir; bu nedenle başvuruyu, hedeflenen
              yatırım veya pazar giriş takviminden bağımsız, erkenden
              planlamak gerekir.
            </p>
          </div>
        </section>

        {/* 6. DESTEKLER */}
        <section id="destekler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Destek Kalemleri ve Oranları
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Marka Destek Programı ve Turquality Destek Programı kapsamına
            alınan şirketlerin desteklenen faaliyetleri büyük ölçüde
            aynıdır; asıl fark süre, üst limit ve hedef pazar sayısında
            ortaya çıkar. Desteklenen başlıca gider kalemleri:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📜 Tescil ve Belgelendirme</h4>
              <p className="text-sm leading-7 text-gray-700">
                Patent, faydalı model, endüstriyel tasarım tescili, pazara
                giriş belgesi, ruhsatlandırma ve yurt dışı marka
                tescil/yenileme/koruma giderleri.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">👥 İstihdam ve Danışmanlık</h4>
              <p className="text-sm leading-7 text-gray-700">
                Tasarımcı, mühendis gibi nitelikli personel istihdamı ile
                markalaşma sürecine yönelik danışmanlık giderleri.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📊 Pazar Araştırması ve Yol Haritası</h4>
              <p className="text-sm leading-7 text-gray-700">
                Destek kapsamındaki markalı ürünlere ilişkin gelişim yol
                haritası çalışmaları, pazar araştırması çalışması ve
                raporları, klinik test işlemleri.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📣 Tanıtım ve Fuar</h4>
              <p className="text-sm leading-7 text-gray-700">
                Yurt dışı tanıtım faaliyetleri, fuar katılımları ve
                depolama hizmeti giderleri.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🏬 Mağaza/Showroom ve Franchise</h4>
              <p className="text-sm leading-7 text-gray-700">
                Birim kira, temel kurulum ve konsept mimari çalışma
                giderleri ile franchise (monobrand mağaza) giderleri.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🎯 Hedef Ülke/Sektör Bonusu</h4>
              <p className="text-sm leading-7 text-gray-700">
                Bakanlığın belirlediği Hedef Ülkeler ve Hedef Sektörler
                Listesi&apos;ne giren harcamalarda destek oranına ek puan
                eklenir (aşağıda detaylandırılmıştır).
              </p>
            </div>
          </div>

          <h3 className="mb-6 mt-14 text-2xl font-bold text-[#071A2F]">
            💰 Destek Oranı Nasıl Hesaplanır?
          </h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Bileşen</th>
                  <th className="p-5">Etkisi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Temel destek oranı</td>
                  <td className="p-5">%50</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">+ Hedef Ülke bonusu</td>
                  <td className="p-5">+20 puan (harcama Hedef Ülkeler Listesi&apos;ndeki bir ülkeye yönelikse → %70)</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">+ Hedef Sektör bonusu</td>
                  <td className="p-5">+5 puan (aynı zamanda Hedef Sektörler Listesi&apos;nde de yer alan bir sektörse → en fazla %75)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Kaynak: 5973 sayılı İhracat Destekleri Hakkında Karar ve Marka
            ve Turquality Desteklerine İlişkin Genelge hükümlerini esas
            alan, birden fazla bağımsız güncel (2026) danışmanlık kaynağının
            (ODS Consulting, Ofisus Danışmanlık, FIX Danışmanlık) çapraz
            olarak aynı şekilde aktardığı oran yapısı. Hedef Ülkeler ve
            Hedef Sektörler Listesi Bakanlıkça periyodik olarak güncellenir;
            başvuru öncesi güncel liste Ticaret Bakanlığı/Turquality resmî
            kaynaklarından teyit edilmelidir.
          </p>
        </section>

        {/* 7. SOMUT ÖRNEKLER */}
        <section id="ornekler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Somut Örneklerle Turquality&apos;nin Sağladığı Fayda
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Destek oranları soyut kaldığında etkisini kavramak zorlaşır.
            Aşağıdaki dört senaryo, <strong>temsili/varsayımsal
            örneklerdir</strong> (gerçek bir markaya ait değildir) ve
            yukarıdaki oran yapısının pratikte ne anlama geldiğini somut
            rakamlarla gösterir:
          </p>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
                Örnek 1 &mdash; Yurt Dışı Showroom Açılışı
              </h4>
              <p className="leading-8 text-gray-700">
                Temsili bir hazır giyim markası, Hedef Ülkeler Listesi&apos;nde
                yer alan bir ülkede yeni bir showroom açmak için kira,
                temel kurulum ve konsept mimari çalışması için toplam{" "}
                <strong>4.000.000 TL</strong> harcama planlıyor. Harcama hem
                hedef ülkeye hem de markanın faaliyet gösterdiği hedef
                sektöre yönelik olduğundan %75 oranında desteklenir:{" "}
                <strong>4.000.000 TL × %75 = 3.000.000 TL&apos;ye kadar</strong>{" "}
                geri ödemesiz destek; firma yalnızca 1.000.000 TL&apos;lik
                kısmı kendi kaynağından karşılar.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
                Örnek 2 &mdash; Yıllık Tanıtım ve Fuar Bütçesi
              </h4>
              <p className="leading-8 text-gray-700">
                Temsili bir mobilya markası, üç farklı hedef pazarda dijital
                reklam ve fuar katılımı için yıllık{" "}
                <strong>6.000.000 TL</strong> bütçe ayırıyor. Sadece hedef
                ülke bonusuyla (%70) hesaplandığında{" "}
                <strong>4.200.000 TL&apos;ye kadarı</strong> desteklenir;
                harcamanın hedef sektörle de örtüştüğü kalemlerde oran
                %75&apos;e çıkarak <strong>4.500.000 TL&apos;ye kadar</strong>{" "}
                yükselebilir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
                Örnek 3 &mdash; Yurt Dışı Marka Tescili ve Patent
              </h4>
              <p className="leading-8 text-gray-700">
                Temsili bir gıda markası, 8 farklı ülkede marka tescili ve
                2 patent başvurusu için toplam <strong>500.000 TL</strong>{" "}
                harcama yapıyor. Bu kalem hedef ülke/sektör bonusuna girmese
                bile temel %50 oranla{" "}
                <strong>250.000 TL&apos;ye kadarı</strong> Bakanlık
                tarafından karşılanır.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
                Örnek 4 &mdash; Nitelikli İstihdam
              </h4>
              <p className="leading-8 text-gray-700">
                Turquality kapsamına alınan temsili bir şirket, marka
                yönetiminden sorumlu bir tasarımcı ile bir ihracat
                pazarlama uzmanını istihdam ediyor; bu iki pozisyonun
                toplam yıllık brüt maliyeti <strong>1.400.000 TL</strong>.
                Temel %50 oranla yıllık{" "}
                <strong>700.000 TL&apos;ye kadar</strong> istihdam desteği
                alınabilir &mdash; bu destek, Turquality&apos;de ilk 5 yıl
                boyunca her yıl tekrarlanabilir niteliktedir.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Not: Yukarıdaki dört senaryo, bu yazıda anlatılan oran yapısını
            somutlaştırmak amacıyla hazırlanmış <strong>örnek/varsayımsal
            hesaplamalardır</strong>, gerçek bir markaya veya şirkete ait
            değildir. Gerçek başvurunuzda uygulanacak kesin oran ve tutar,
            harcamanın hedef ülke/sektör eşleşmesine, başvuru anındaki
            güncel Hedef Ülkeler/Hedef Sektörler Listesi&apos;ne ve şirket
            başına yıllık üst limite göre değişir.
          </p>
        </section>

        {/* 8. SÜRE VE ÜST LİMİTLER */}
        <section id="sure-limit" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Destek Süresi ve Üst Limitler
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Destek süresi, kapsama alınan programa göre değişir:
          </p>
          <ul className="mb-8 ml-6 list-disc space-y-3 text-lg text-gray-700 marker:text-orange-500">
            <li><strong>Marka Destek Programı:</strong> 4 yıl, sabit süreli</li>
            <li><strong>Turquality Destek Programı:</strong> her hedef pazar (ülke) için ayrı ayrı 5 yıl; kurumsal altyapı oluşturmaya yönelik faaliyet ve istihdam giderleri ise ilk 5 yıllık dönem için desteklenir</li>
          </ul>
          <div className="my-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              💶 Şirket Başına Yıllık Üst Limit
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Resmî düzenlemeye göre bir şirkete, bir takvim yılında,
              destek kapsamındaki tüm markaları Marka Destek Programı
              kapsamındaysa belirlenen bir üst limite kadar; en az bir
              markası Turquality kapsamındaysa daha yüksek bir üst limite
              kadar destek ödemesi yapılır. Bu üst limitler{" "}
              <strong>her takvim yılı başında (TÜFE + Yİ-ÜFE)/2
              oranına göre güncellenir.</strong> 2026 yılı için geçerli
              üst limit rakamlarını, birden fazla bağımsız kaynaktan çapraz
              kontrol ederek derledik: aynı tutarlar hem güncel danışmanlık
              raporlarında hem de halka açık bir şirketin Kamuyu Aydınlatma
              Platformu&apos;na (KAP) yaptığı &quot;Turquality/Marka Destek
              Programı kapsamına alındık&quot; özel durum açıklamasında yer
              alıyor:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700 marker:text-blue-600">
              <li>Marka Destek Programı: <strong>246.634.310 TL</strong> (2026 yılı)</li>
              <li>Turquality Destek Programı (mal ihracatı): <strong>493.271.347 TL</strong> (2026 yılı)</li>
              <li>Hizmet ihracatçıları (e-Turquality vb.): yaklaşık <strong>500.000.000 TL</strong> (2026 yılı, ayrı sektör kaynağında raporlanmıştır)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              ⚠️ <strong>Not:</strong> Güncel rakamlar TÜFE + Yİ-ÜFE
              endekslemesiyle yıllık olarak güncellenmektedir; kesinleşmiş
              son rakam için başvuru döneminde Ticaret Bakanlığı/Turquality
              resmî kaynaklarını teyit ediniz.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🔒 Satın Alınan Yabancı Markalar Desteklenmez
            </h3>
            <p className="leading-8 text-gray-700">
              Program, organik olarak Türkiye&apos;de geliştirilmiş
              markaları desteklemeyi amaçladığından, sonradan satın alınan
              yabancı markalar destek kapsamı dışındadır.
            </p>
          </div>
        </section>

        {/* 9. FİRMA SAYISI */}
        <section id="firma-sayisi" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Kapsamdaki Firma Sayısı ve Statü
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Turquality ve Marka Destek Programı, sınırsız kontenjanlı bir
            program değildir; her yıl belirli sayıda marka/firma kapsama
            alınır ve düzenli denetimlerle statüleri gözden geçirilir.
            Güncel danışmanlık kaynaklarının aktardığı verilere göre:
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm text-center">
              <div className="mb-3 text-4xl">📦</div>
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Mal İhracatı (5973 sayılı Karar)</h3>
              <p className="text-gray-700">
                Yaklaşık <strong>450 marka</strong>, <strong>429
                firma</strong> Turquality/Marka Destek Programı kapsamında
                yer alıyor.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm text-center">
              <div className="mb-3 text-4xl">💻</div>
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Hizmet İhracatı (e-Turquality vb.)</h3>
              <p className="text-gray-700">
                Yaklaşık <strong>124 marka</strong>, <strong>122
                firma</strong> hizmet ihracatı destek programları
                kapsamında destekleniyor.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Kaynak: Güncel (2026) sektör/danışmanlık kaynaklarının
            derlediği veriler. Bu sayılar Bakanlığın yeni kabul ve çıkış
            kararlarına göre sürekli değiştiğinden, güncel firma/marka
            listesi resmî Turquality kaynaklarından teyit edilmelidir.
          </p>
        </section>

        {/* 10. HATALAR */}
        <section id="hatalar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Sık Yapılan Hatalar ve Pratik Tavsiyeler
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Turquality/Marka Destek Programı süreçlerinde firmalara eşlik
            ederken karşılaşılan hatalar, genellikle başvurudan önce
            alınabilecek basit önlemlerle önlenebilir niteliktedir. Sistem
            Global Danışmanlık bünyesinde bu süreçleri yönetirken en sık
            karşılaşılan noktalar şunlardır:
          </p>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Tescil sırasının yanlış planlanması</h4>
              <p className="leading-7 text-gray-700">
                Yurt dışı marka tescilinin, yurt içi tescilden önce
                alınmış olması başvuruyu doğrudan geçersiz kılar. Yurt
                dışına açılmayı planlayan şirketlerin, tescil stratejisini
                Turquality şartlarına göre baştan kurgulaması gerekir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">İhracat rakamlarının eksik konsolide edilmesi</h4>
              <p className="leading-7 text-gray-700">
                Organik bağlı şirketlerin ihracat rakamları doğru
                birleştirilmezse, 3 yıllık ortalama 3 milyon USD şartı
                gerçekte karşılanıyor olsa bile başvuruda eksik
                gösterilebilir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Gerçekçi olmayan stratejik iş planı</h4>
              <p className="leading-7 text-gray-700">
                Ön inceleme puanını doğrudan etkileyen stratejik iş planı,
                iddialı ama dayanaksız büyüme senaryolarıyla değil; şirketin
                gerçek kurumsal kapasitesine, bütçesine ve pazar verilerine
                dayalı olarak hazırlanmalıdır.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Hedef ülke/sektör bonusunun göz ardı edilmesi</h4>
              <p className="leading-7 text-gray-700">
                Aynı harcama, Hedef Ülkeler/Hedef Sektörler Listesi&apos;ne
                giren bir pazara veya sektöre yönlendirildiğinde %75&apos;e
                varan destekten yararlanabilirken; bu eşleştirme yapılmadan
                planlanan harcamalar yalnızca %50 temel oranla sınırlı
                kalabilir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Kurumsal altyapı eksikliği</h4>
              <p className="leading-7 text-gray-700">
                Yazılı organizasyon şeması, görev tanımları ve düzenli bütçe
                raporlaması gibi kurumsallaşma unsurları eksikse, ön
                inceleme puanı düşer. Bu unsurlar başvurudan aylar önce
                hazırlanmalıdır.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <p className="leading-8 text-gray-700">
              Koray Akdağ / Sistem Global Danışmanlık olarak, firmaların
              Turquality/Marka Destek Programı başvuru dosyalarının
              hazırlanmasından tescil sıralamasının doğru kurgulanmasına,
              stratejik iş planının ön inceleme puanını yükseltecek şekilde
              yazılmasından süreç boyunca gereken raporlamaların takibine
              kadar uçtan uca eşlik ediyoruz; yukarıdaki hataların büyük
              çoğunluğu, sürecin en başında doğru planlanmasıyla önlenebilir.
            </p>
          </div>
        </section>

        {/* 11. DİKKAT EDİLECEKLER */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            11. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Turquality kapsamına girmek, kesin bir hak değil dinamik bir statüdür; performans kriterleri sağlanmazsa denetimlerde kapsam daraltılabilir veya program dışına çıkarılabilir.</li>
              <li>Satın alınan yabancı markalar bu destek kapsamına hiçbir şekilde girmez.</li>
              <li>Marka Destek Programı&apos;ndan Turquality&apos;ye geçişte, kurumsal altyapı desteği süresi önceki dönemden mahsup edilir.</li>
              <li>Destek oranları ve üst limitler; Hedef Ülkeler/Hedef Sektörler Listesi ve TÜFE+Yİ-ÜFE endekslemesine göre her yıl değişebildiğinden, genel tahminlerle değil güncel resmî kaynaklarla hareket edilmelidir.</li>
              <li>Başvuru süreci (ön inceleme, yerinde denetim, rapor, stratejik iş planı onayı) birkaç ayı bulabilir; yurt dışı açılım takvimi buna göre planlanmalıdır.</li>
              <li>Ön inceleme raporunda 50 puanın altında kalan başvurular reddedilir ve yalnızca 6 ay sonra yeniden başvurulabilir; bu nedenle ilk başvuruyu eksiksiz ve güçlü bir dosyayla yapmak kritik önem taşır.</li>
            </ul>
          </div>
        </section>

        {/* 12. NEDEN BAŞVURMALI */}
        <section id="neden-basvurmali" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            12. Bir Şirket Turquality Programına Neden Başvurmalı?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Yukarıda anlatılan tüm süreç ve şartlar bir araya geldiğinde,
            ihracat yapan ve markalaşma potansiyeli olan bir şirket için
            Turquality/Marka Destek Programı&apos;na başvurmanın gerekçesi
            netleşir:
          </p>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Reklam/tanıtımdan mağaza kirasına, istihdamdan tescile kadar geniş bir harcama yelpazesi <strong>%50&apos;den %75&apos;e kadar</strong> oranda geri ödemesiz desteklenir.</li>
              <li>✔ &quot;Turquality onaylı marka&quot; statüsü, yurt dışı distribütör, alıcı ve perakendeci nezdinde başlı başına bir güven ve itibar sinyali oluşturur.</li>
              <li>✔ Hedef pazar başına 5 yıl süren, öngörülebilir ve uzun soluklu bir destek çerçevesi sunar &mdash; kısa vadeli proje desteklerinin aksine çok yıllı bir büyüme planlaması yapılabilir.</li>
              <li>✔ Süreç, şirketi yazılı organizasyon şeması, stratejik planlama ve düzenli bütçe raporlaması gibi kurumsallaşma unsurlarına zorlar; bu da destek dışında da şirketin yönetim kalitesini artırır.</li>
              <li>✔ Marka Destek Programı&apos;ndan başlayıp zamanla Turquality&apos;ye yükselme imkânı, büyüme sürecine kademeli ve gerçekçi bir yol haritası sunar.</li>
            </ul>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Kısacası Turquality, yalnızca bir maliyet desteği değil; şirketi
            kurumsallaşmaya, planlı büyümeye ve uluslararası pazarlarda
            tanınırlığa zorlayan bütünsel bir dönüşüm programıdır. Bu
            nedenle ihracat rakamı ve marka tescili şartlarını
            karşılayabilen her şirketin, başvuruyu ciddiye alması
            gerekir.
          </p>
        </section>

        {/* 13. SSS */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            13. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Turquality bir hibe midir?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Turquality, şirketin markalaşma sürecinde yapacağı
                tescil, danışmanlık, istihdam, tanıtım, fuar ve mağaza/
                showroom gibi harcamaların belirli bir oranının (%50&apos;den
                başlayıp hedef ülke/sektör bonusuyla %75&apos;e kadar
                çıkan) geri ödemesiz olarak karşılandığı bir destek
                mekanizmasıdır; doğrudan nakit hibe değildir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Marka Destek Programı ile Turquality arasındaki en önemli fark nedir?
              </h3>
              <p className="leading-8 text-gray-700">
                Aynı başvuru sürecinden geçen firmalar, ön inceleme
                puanına göre ayrışır: 50-80 puan alan firmalar Marka
                Destek Programı&apos;na (4 yıl sabit süreli), 80-100 puan
                alan firmalar ise Turquality Destek Programı&apos;na (her
                hedef pazar için 5 yıl, daha yüksek üst limit) dahil edilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Başvuru için minimum ihracat tutarı ne kadar?
              </h3>
              <p className="leading-8 text-gray-700">
                Kural olarak son 3 yıllık ortalama ihracatın en az 3.000.000
                ABD Doları olması gerekir. Ancak son 1 yılda en az
                10.000.000 ABD Doları ihracat yapan şirketlerde bu şart ve
                bazı tescil süresi şartları aranmaz.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Başvuru ücretli midir?
              </h3>
              <p className="leading-8 text-gray-700">
                Başvurunun kendisi resmî bir harca tabi değildir, ancak
                görevlendirilen yönetim danışmanlığı firmasının yapacağı
                ön inceleme çalışması için başvuru sahibi şirket, belirlenen
                bir ön inceleme ücretini 1 ay içinde ödemekle yükümlüdür.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Başvurum reddedilirse ne olur?
              </h3>
              <p className="leading-8 text-gray-700">
                Ön inceleme raporunda 50 puanın altında kalan başvurular
                reddedilir. Reddedilen şirketler, 6 ay sonra yeniden
                başvuru yapabilir; bu süre genellikle eksik kalan
                kurumsallaşma, tescil veya stratejik planlama unsurlarını
                tamamlamak için kullanılmalıdır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Sadece üreticiler mi başvurabilir?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Mal ihracatı yapan üretici firmaların yanı sıra
                gastronomi, yazılım/bilişim (e-Turquality), lojistik,
                sağlık turizmi ve eğitim gibi döviz kazandırıcı hizmet
                sektörlerindeki firmalar da ayrı bir hizmet ihracatı
                programı çerçevesinde Turquality&apos;den yararlanabilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Satın alınan bir marka Turquality desteğinden yararlanabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Program, organik olarak geliştirilmiş markaları
                desteklemeyi amaçladığından, başka bir şirketten satın
                alınan yabancı markalar destek kapsamı dışında tutulur.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Turquality başvurusunu danışmanlık almadan tek başıma yürütebilir miyim?
              </h3>
              <p className="leading-8 text-gray-700">
                Teknik olarak mümkündür; ancak marka tescil stratejisinin
                doğru sıralanması, ihracat verilerinin doğru konsolide
                edilmesi, kurumsal altyapı belgelerinin hazırlanması ve
                stratejik iş planının ön inceleme puanını yükseltecek
                şekilde kurgulanması, sürecin en başından itibaren doğru
                yönetilmesini gerektirir. Küçük bir eksiklik, hem puanı
                düşürüp Marka Programı&apos;nda kalmanıza hem de başvurunun
                doğrudan reddedilmesine yol açabilir.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Turquality Başvuru Sürecinde Yanınızdayız
            </h3>
            <p className="leading-8 text-gray-700">
              Turquality Programı&apos;na kabul kriterlerini karşılamak,
              ön inceleme puanlamasında güçlü bir dosya sunmak ve destek
              kalemlerinden azami ölçüde yararlanmak, markanızın
              uluslararası büyüme sürecini hızlandırır.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Turquality başvurunuzu değerlendirmemiz için bizimle
                iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* 14. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            14. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Turquality, doğru kurgulandığında bir markanın yurt dışı
            tanıtımından mağaza kirasına, istihdamdan danışmanlığa kadar
            birçok kritik gideri %50&apos;den %75&apos;e varan oranlarda
            karşılayabilen, Türkiye&apos;deki en kapsamlı markalaşma destek
            mekanizmasıdır. Ancak başvuru sürecinin puanlama esaslı olması,
            marka tescil sırasının kesin kurallara bağlı olması ve
            stratejik iş planının ön inceleme sonucunu doğrudan etkilemesi,
            sürecin baştan sağlam kurgulanmasını zorunlu kılıyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Markanızın Turquality/Marka Destek Programı&apos;na uygunluğunu
            değerlendirmek, tescil stratejinizi doğru sıraya oturtmak,
            ihracat verilerinizi ve kurumsal altyapı belgelerinizi
            hazırlamak, hedef ülke/sektör bonuslarından tam kapasiteyle
            yararlanacak bir stratejik iş planı oluşturmak ve süreç boyunca
            gereken tüm raporlama yükümlülüklerini yönetmek için Koray
            Akdağ / Sistem Global Danışmanlık olarak yanınızdayız. Ayrı bir
            danışmanlık firması aramanıza gerek kalmadan, başvuru
            sürecinizi de sonrasındaki uyum ve raporlama yükümlülüklerinizi
            de tek noktadan yürütebiliriz.
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
          href="/blog/doviz-donusum-destegi-2026-yeni-donem"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • KAMBİYO MEVZUATI • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Döviz Dönüşüm Desteği 2026: Yeni Dönem</h3>
        </Link>
        <Link
          href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YATIRIM TEŞVİKLERİ • DEVLET DESTEKLERİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgesi Nedir? Faydaları, Şartları ve 2026 Güncel Rehberi</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
