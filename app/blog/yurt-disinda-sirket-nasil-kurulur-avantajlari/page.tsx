import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir? (2026) | Koray Akdağ",
  description:
    "Yurt dışında şirket kurma süreci, kimlerin başvurabileceği, avantajları, ideal ülkeler, Ticaret Bakanlığı teşvikleri ve dikkat edilmesi gereken noktalar. 2026 güncel rehber.",
  keywords: [
    "yurt dışında şirket kurma",
    "yurtdışı şirket kuruluşu",
    "yurt dışında şirket kurmanın avantajları",
    "yurtdışı birim kira desteği",
    "hangi ülkede şirket kurulur",
    "yurtdışı yatırım bildirimi",
    "uluslararası şirket kuruluşu",
    "2026 yurtdışı şirket kurma",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?"
      description="Kimler yurt dışında şirket kurabilir, hangi ülkeler ideal, hangi teşviklerden yararlanılabilir ve kuruluş süreci nasıl işler? Güncel, uygulamaya dönük rehber."
      category="YURT DIŞI ŞİRKET • İHRACAT • 2026"
      date="2026"
      readTime="9 Dakika"
      slug="yurt-disinda-sirket-nasil-kurulur-avantajlari"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yeni pazarlara açılmak, dövizle gelir elde etmek veya yurt dışındaki
          bir yatırımcı ile ortak olabilmek isteyen girişimciler ve
          şirketler için yurt dışında şirket kurmak stratejik bir adımdır.
          Ancak doğru ülke seçimi, yasal yükümlülükler ve vergi planlaması
          yapılmadan atılan bu adım maliyetli hatalara da yol açabilir.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Kimler yurt dışında şirket kurabilir?</li>
          <li>✔ Somut avantajlar ve olası dezavantajlar</li>
          <li>✔ Şirket kurmak için ideal ülkeler ve karşılaştırma</li>
          <li>✔ Türkiye tarafındaki devlet destek ve teşvikleri</li>
          <li>✔ Adım adım kuruluş süreci</li>
          <li>✔ Bildirim yükümlülükleri ve dikkat edilmesi gerekenler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#kimler"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Kimler Yurt Dışında Şirket Kurabilir?
          </Link>
          <Link
            href="#avantajlar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. Avantajları Nelerdir?
          </Link>
          <Link
            href="#ulkeler"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Hangi Ülkeler İdealdir?
          </Link>
          <Link
            href="#tesvikler"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            4. Teşvikler Var mı?
          </Link>
          <Link
            href="#nasil-kurulur"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            5. Yurt Dışında Şirket Nasıl Kurulur?
          </Link>
          <Link
            href="#dikkat"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Dikkat Edilmesi Gerekenler
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. Sık Sorulan Sorular
          </Link>
          <Link
            href="#sonuc"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            8. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. KİMLER KURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Kimler Yurt Dışında Şirket Kurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yurt dışında şirket kurmak yalnızca büyük ölçekli ihracatçı
          firmalara özgü bir imkân değildir. Türkiye&apos;de yerleşik gerçek
          kişiler ve tüzel kişiler, hedef ülkenin yabancı yatırımcılara
          yönelik kuralları çerçevesinde şirket kurabilir.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Kurabilecek Kişi ve Yapılar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ 18 yaşını doldurmuş, tam ehliyetli gerçek kişiler</li>
              <li>✔ Türkiye&apos;de kurulu Limited ve Anonim Şirketler (şube veya iştirak olarak)</li>
              <li>✔ İhracatını artırmak isteyen üretici ve ticaret firmaları</li>
              <li>✔ Yazılımcı, e-ticaret ve dijital hizmet girişimcileri</li>
              <li>✔ Yabancı yatırımcı/fon arayan startuplar</li>
              <li>✔ Yurt dışına uzaktan hizmet veren freelancer&apos;lar</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ⚠️ Dikkat Gerektiren Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>❌ Bazı ülkelerde yabancıların şahıs şirketi kurması mümkün değildir; yerel şirket türü (LLC, Ltd. vb.) şartı aranır</li>
              <li>❌ Finans, sigorta, savunma gibi sektörlerde ek lisans/izin gerekebilir</li>
              <li>❌ Bazı ülkelerde belirli sektörlerde yabancı ortaklık oranı sınırlandırılmıştır</li>
              <li>❌ Vergi mükellefiyeti eski ülkede sorunlu olan kişiler için ek inceleme riski oluşabilir</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. AVANTAJLAR */}
      <section id="avantajlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Yurt Dışında Şirket Kurmanın Avantajları Nelerdir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Doğru ülke ve yapı seçimi ile yurt dışında şirketleşme, sadece
          vergi avantajı sağlayan bir işlem değil; pazara yakınlık,
          finansmana erişim ve marka güvenilirliği açısından da uzun vadeli
          bir büyüme aracıdır.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Pazara Doğrudan Erişim
            </h3>
            <p className="text-gray-700">
              Müşteriye, tedarikçiye ve dağıtım kanalına yakın konumlanarak
              satış ve teslimat süreçlerini hızlandırma imkânı.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💱</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Döviz Bazlı Gelir
            </h3>
            <p className="text-gray-700">
              Kur dalgalanmalarına karşı daha dengeli bir gelir yapısı ve
              uluslararası ödeme altyapılarına doğrudan erişim.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏦</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Vergi Planlaması
            </h3>
            <p className="text-gray-700">
              Kurumlar vergisi oranı düşük ülkelerde, mevzuata uygun yapılar
              kurularak toplam vergi yükünün optimize edilmesi.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🤝</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Yatırımcı ve Fon Erişimi
            </h3>
            <p className="text-gray-700">
              Özellikle ABD, İngiltere ve Estonya gibi ülkelerde kurulan
              startuplar için melek yatırımcı ve girişim sermayesi fonlarına
              erişim kolaylaşır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🛂</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Vize ve Oturum İzni
            </h3>
            <p className="text-gray-700">
              Bazı ülkeler, belirli tutarın üzerinde yatırım yapan şirket
              sahiplerine yatırımcı vizesi veya oturma izni sunar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏷️</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Marka Güvenilirliği
            </h3>
            <p className="text-gray-700">
              Uluslararası bir tüzel kişilik, hem yurt dışı müşteriler hem de
              iş ortakları nezdinde kurumsal güven algısını artırır.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            ⚠️ Göz Ardı Edilmemesi Gereken Dezavantajlar
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>Çifte vergilendirme riski (Çifte Vergilendirmeyi Önleme Anlaşması kontrol edilmelidir)</li>
            <li>Yerel muhasebe, denetim ve uyum maliyetleri</li>
            <li>Türkiye&apos;ye karşı bildirim ve raporlama yükümlülükleri</li>
            <li>Kültürel, hukuki ve dil farklılıklarından kaynaklanan operasyonel zorluklar</li>
            <li>Banka hesabı açma sürecinin bazı ülkelerde uzun sürebilmesi</li>
          </ul>
        </div>
      </section>

      {/* 3. HANGİ ÜLKELER */}
      <section id="ulkeler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Hangi Ülkeler Yurt Dışında Şirket Kurmak için İdealdir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          &quot;En ideal ülke&quot; tek bir cevabı olan bir soru değildir;
          faaliyet alanınıza, hedef pazarınıza ve büyüme planınıza göre
          değişir. Yine de aşağıdaki ülkeler, düşük kurumlar vergisi
          oranları, hızlı kuruluş süreçleri ve yatırımcı dostu mevzuatları
          nedeniyle Türk girişimcilerin en çok tercih ettiği ülkeler arasında
          yer alır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Ülke</th>
                <th className="p-5">Kuruluş Süresi</th>
                <th className="p-5">Öne Çıkan Avantaj</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İngiltere</td>
                <td className="p-5">3-5 gün</td>
                <td className="p-5">Hızlı ve düşük maliyetli kuruluş, güçlü finans ekosistemi</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">ABD (Delaware / Wyoming)</td>
                <td className="p-5">1-2 hafta</td>
                <td className="p-5">Yatırımcı erişimi, güçlü marka algısı, esnek şirket yapıları</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Estonya</td>
                <td className="p-5">Birkaç gün (e-Residency)</td>
                <td className="p-5">Tamamen dijital kuruluş, AB pazarına erişim</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hollanda</td>
                <td className="p-5">1-2 hafta</td>
                <td className="p-5">Lojistik merkez konumu, AB içi ticaret kolaylığı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İrlanda</td>
                <td className="p-5">1-2 hafta</td>
                <td className="p-5">Görece düşük kurumlar vergisi oranı, AB üyeliği</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Bulgaristan</td>
                <td className="p-5">1-2 hafta</td>
                <td className="p-5">AB içinde en düşük kurumlar vergisi oranlarından biri</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">BAE (Dubai)</td>
                <td className="p-5">1-2 hafta</td>
                <td className="p-5">Serbest bölge avantajları, bölgesel ticaret merkezi konumu</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Vergi oranları ve mevzuat ülkelerde sık değişebilir; karar
            öncesinde güncel oranları ilgili ülkenin resmi kurumlarından veya
            profesyonel danışmanlık aracılığıyla teyit etmek gerekir. Vergi
            oranı tek başına belirleyici olmamalı; pazar büyüklüğü, hedef
            müşteri profili ve operasyonel maliyetler birlikte
            değerlendirilmelidir.
          </p>
        </div>
      </section>

      {/* 4. TEŞVİKLER */}
      <section id="tesvikler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Yurt Dışında Şirket Kurmak için Teşvikler Var mı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de yerleşik ihracatçı firmalar için Ticaret
          Bakanlığı&apos;nın <strong>Yurt Dışı Birim, Marka ve Tanıtım
          Faaliyetlerinin Desteklenmesi Hakkında Karar</strong> kapsamında,
          yurt dışında açılan ofis, depo, showroom ve mağaza gibi birimlerin
          giderlerine yönelik destekler bulunmaktadır.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ 2026 Yılı Destek Kalemleri (Ticaret Bakanlığı)
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Kira Desteği:</strong> Yurt dışında açılan birimlerin kira giderlerinde temel destek oranı %50; Bakanlıkça belirlenen hedef ülkelerde bu oran %20 ilave edilerek uygulanır.
            </li>
            <li>
              <strong>Yıllık Üst Limit:</strong> Mağazalar için 100.000 ABD Doları, diğer birimler (ofis, depo, showroom) için 75.000 ABD Doları civarındadır.
            </li>
            <li>
              <strong>Destek Süresi:</strong> Ülke bazında en fazla 4 yıl boyunca, bir firma için en fazla 25 birim ile sınırlıdır.
            </li>
            <li>
              <strong>Marka Tescil Desteği:</strong> Yurt dışında marka tescili ve korunmasına ilişkin giderler.
            </li>
            <li>
              <strong>Tanıtım Desteği:</strong> Hedef pazarlarda yürütülen tanıtım faaliyetlerine yönelik gider desteği.
            </li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            📋 Kimler Başvurabilir?
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>Türk Ticaret Kanunu hükümlerine göre kurulmuş Limited ve Anonim Şirketler (şahıs şirketleri kapsam dışıdır)</li>
            <li>Desteğe konu ürünlerin Türk menşeli olması şartı aranır</li>
            <li>Başvurular ilgili İhracatçı Birlikleri Genel Sekreterliği üzerinden yapılır</li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu destek bir hibe ödemesi değil, gerçekleştirilen giderin
            belirlenen oranının sonradan geri ödenmesi (mahsup) esasına
            dayanır. Güncel destek oranları, üst limitler ve hedef ülke
            listesi her yıl güncellenebildiğinden, başvuru öncesinde{" "}
            <a
              href="https://ticaret.gov.tr/destekler/ihracat-destekleri/yurtdisi-birim-marka-ve-tanitim-destegi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Ticaret Bakanlığı&apos;nın resmi sayfasından
            </a>{" "}
            teyit edilmesi önerilir. Ar-Ge yönü ağır basan projeler için
            Türkiye içinde kalarak{" "}
            <Link href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026" className="text-orange-600 underline">
              TÜBİTAK 1501/1507 destekleri
            </Link>{" "}
            veya{" "}
            <Link href="/blog/teknopark-nedir-avantajlari" className="text-orange-600 underline">
              teknopark avantajları
            </Link>{" "}
            gibi alternatiflerin de yurt dışı yapılanma öncesinde
            değerlendirilmesi faydalı olabilir.
          </p>
        </div>
      </section>

      {/* 5. NASIL KURULUR */}
      <section id="nasil-kurulur" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yurt Dışında Şirket Nasıl Kurulur?
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Süreç ülkeden ülkeye farklılık gösterse de genel akış dört ana
          aşamadan oluşur.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Ülke & Şirket Türü</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Yasal Düzenlemeler</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Kayıt & Vergi Mükellefiyeti</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Banka Hesabı & Finans</h3>
          </div>
        </div>

        {/* 5.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.1. Ülke ve Şirket Türünün Belirlenmesi
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Öncelikle hedef pazar, rekabet durumu ve müşteri profili
            araştırılmalı; ardından vergi oranları, ekonomik istikrar ve
            kuruluş maliyetleri karşılaştırılarak ülke kararı verilmelidir.
            Şirket türü seçimi de en az ülke seçimi kadar önemlidir:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li><strong>Şube (Branch):</strong> Türkiye&apos;deki ana şirkete bağlı, ayrı tüzel kişiliği olmayan yapı</li>
            <li><strong>Bağlı Ortaklık / İştirak (Subsidiary):</strong> Hedef ülkede ayrı tüzel kişiliğe sahip, sorumluluğu sınırlı yapı</li>
            <li><strong>Yerel LLC / Ltd:</strong> Sıfırdan, doğrudan hedef ülke mevzuatına göre kurulan bağımsız şirket</li>
          </ul>
        </div>

        {/* 5.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.2. Yasal ve Ticari Düzenlemelerin İncelenmesi
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Hedef ülkenin yabancı yatırımcı kısıtlamaları, sektörel izin
            gereklilikleri ve şirket kuruluş belgeleri (kurucu sözleşme,
            hissedar bilgileri, yasal adres beyanı vb.) detaylı biçimde
            incelenmelidir. Bu aşamada hukuk ve mevzuat uyumunu bilen bir
            danışmanla çalışmak, ileride ortaya çıkabilecek uyum sorunlarını
            önemli ölçüde azaltır — bu süreci sizin adınıza biz yürütüyoruz.
          </p>
        </div>

        {/* 5.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.3. Şirket Kaydı ve Vergi Mükellefi Olma
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Şirket unvanı ticaret siciline tescil edilir, vergi numarası
            alınır (ör. ABD&apos;de EIN) ve gerekli hallerde yerel bir
            temsilci/kayıtlı adres (registered agent) atanır.
          </p>
          <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
            <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
              🇹🇷 Türkiye Tarafındaki Bildirim Yükümlülüğü
            </h4>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişiler; yurt dışında
              şirket kurmak, mevcut bir şirkete ortak olmak veya şube açmak
              amacıyla yaptıkları ilk sermaye ihracını takip eden{" "}
              <strong>3 ay içinde</strong>, Ticaret Bakanlığı&apos;nın{" "}
              <a
                href="https://ticaret.gov.tr/hizmet-ticareti/yurtdisi-yatirimlar/yurtdisi-yatirim-bildirimi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                Yurt Dışı Yatırım Bildirimi
              </a>{" "}
              formunu doldurarak Hazine ve Maliye Bakanlığı ile Ticaret
              Bakanlığı&apos;na göndermekle yükümlüdür. Bu bildirim her yıl
              güncellenmeli; ihmal edilmesi cezai yaptırımlara yol
              açabilmektedir.
            </p>
          </div>
        </div>

        {/* 5.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.4. Banka Hesabı Oluşturma ve Finansal Yönetim
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Şirket adına yerel bir ticari banka hesabı açılması, çoğu ülkede
            sürecin en uzun aşamalarından biridir; bazı ülkeler fiziksel
            başvuru talep ederken bazıları uzaktan kimlik doğrulama (KYC)
            ile hesap açılışına izin verir. Erken aşama girişimler için
            Wise, Payoneer gibi çok para birimli fintech çözümleri, banka
            süreci tamamlanana kadar geçici bir alternatif olarak
            kullanılabilir.
          </p>
          <p className="leading-8 text-gray-700">
            Hesap açıldıktan sonra düzenli bir muhasebe ve raporlama sistemi
            kurulmalı; Türkiye ile hedef ülke arasında Çifte
            Vergilendirmeyi Önleme Anlaşması (ÇVÖA) olup olmadığı kontrol
            edilerek, yurt dışında ödenen verginin Türkiye&apos;de
            hesaplanan kurumlar vergisinden mahsup imkânı
            değerlendirilmelidir.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Yurt dışındaki şirket kuruluş sürecinizi belge hazırlığından
            tescile, vergi numarası alımından banka hesabı sürecine kadar
            baştan sona biz yürütüyoruz. Kuruluş sonrasında da muhasebe ve
            raporlama hizmetinizi, ayrı bir yerel firma aramanıza gerek
            kalmadan biz sağlıyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Sürecin tamamı için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 6. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Yurt Dışında Şirket Kurarken Dikkat Edilmesi Gerekenler Nelerdir?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Sermaye ihracı sonrası bildirim yükümlülüğünü süresinde yerine getirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Çifte Vergilendirmeyi Önleme Anlaşması olup olmadığını kontrol edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yalnızca vergi avantajına dayalı, gerçek faaliyeti olmayan yapılardan kaçının
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yerel muhasebe, denetim ve uyum maliyetlerini bütçenize dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hukuk, vergi ve muhasebe danışmanlığını tek elden bizden alabilirsiniz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılış sürecinin uzayabileceğini öngörün
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kur riskini yönetecek bir finansal planlama yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hedef ülkedeki sektörel izin ve lisans gerekliliklerini önceden araştırın
          </div>
        </div>
      </section>

      {/* 7. SIK SORULAN SORULAR */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Türk vatandaşı tek başına yurt dışında şirket kurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Hedef ülkenin yabancı yatırımcılara yönelik şartlarını
              sağlamak kaydıyla, gerçek kişiler de tek başına yurt dışında
              şirket kurabilir. Bazı ülkelerde yerel bir ortak veya temsilci
              bulundurma zorunluluğu olabileceği unutulmamalıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yurt dışında kurulan şirketin Türkiye&apos;de de vergisi olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek ve tüzel kişilerin yurt dışından
              elde ettiği kazançlar da Türkiye&apos;de beyan yükümlülüğüne
              tabi olabilir. Çifte vergilendirmeyi önlemek için ilgili
              ülkede ödenen verginin Türkiye&apos;de hesaplanan vergiden
              mahsup edilmesi genel uygulamadır; detaylar ÇVÖA hükümlerine ve
              somut duruma göre değişir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              En hızlı ve kolay şirket kurulan ülke hangisidir?
            </h3>
            <p className="leading-8 text-gray-700">
              Estonya, e-Residency sistemi sayesinde tamamen dijital ortamda
              birkaç gün içinde şirket kurulmasına imkân tanır. İngiltere de
              düşük maliyet ve hızlı süreçle öne çıkan ülkeler arasındadır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yurt dışında şirket kurmak için danışmanlık almak zorunlu mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Zorunlu değildir ancak yasal düzenlemeler, bildirim
              yükümlülükleri ve vergi planlaması karmaşık olabildiğinden,
              hukuk ve vergi konularında profesyonel destek almak hata
              riskini ve zaman kaybını azaltır.
            </p>
          </div>
        </div>
      </section>

      {/* 8. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yurt dışında şirket kurmak, doğru planlanmadığında maliyetli bir
          hataya dönüşebilir; ancak doğru ülke, doğru şirket yapısı ve
          eksiksiz bir bildirim/vergi planlamasıyla yürütüldüğünde şirketiniz
          için gerçek bir büyüme ve rekabet avantajına dönüşür. Ülke seçimi,
          yasal düzenlemeler ve teşviklerin doğru değerlendirilmesi, sürecin
          en kritik adımlarını oluşturur.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/hollandada-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • HOLLANDA • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Hollanda'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        <Link
          href="/blog/dubaide-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • BAE (DUBAİ) • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Dubai'de (BAE) Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        <Link
          href="/blog/kazakistanda-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • KAZAKİSTAN • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Kazakistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
