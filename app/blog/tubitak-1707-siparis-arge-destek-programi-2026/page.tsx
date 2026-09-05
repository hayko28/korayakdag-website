import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TÜBİTAK 1707 Sipariş Ar-Ge Destek Programı 2026-3 Çağrısı | Koray Akdağ",
  description: "TÜBİTAK 1707 Sipariş Ar-Ge'de Müşteri Kuruluş - Tedarikçi KOBİ ortaklığı, 10 milyon TL bütçe üst sınırı, %40 hibe oranı ve 13 Kasım 2026 son başvuru tarihiyle güncel rehber.",
  keywords: [
    "TÜBİTAK 1707",
    "Sipariş Ar-Ge Destek Programı",
    "1707 çağrısı 2026",
    "Siparişe Dayalı Ar-Ge",
    "TEYDEB 1707",
    "Müşteri Kuruluş Tedarikçi Kuruluş",
    "PRODİS başvuru",
    "KOBİ Ar-Ge desteği 2026",
    "TÜBİTAK 1707 2026-3",
    "ortaklı Ar-Ge projesi",
  ],
};

export default function Tubitak1707Page() {
  return (
    <BlogLayout
      title="TÜBİTAK 1707 Sipariş Ar-Ge Destek Programı 2026-3 Çağrısı: Kimler Başvurabilir, Destek Oranı Nedir?"
      description="Büyük ölçekli veya KOBİ bir Müşteri Kuruluş ile Tedarikçi KOBİ'nin ortak başvurduğu TÜBİTAK 1707 Sipariş Ar-Ge Destek Programı'nda 10 milyon TL bütçe üst sınırı, %40 hibe oranı, desteklenen giderler ve 1 Eylül - 13 Kasım 2026 başvuru takvimiyle güncel rehber."
      category="TÜBİTAK • TEYDEB • 2026"
      date="2026"
      readTime="13 Dakika"
      coverImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="tubitak-1707-siparis-arge-destek-programi-2026"
    >
      {/* GİRİŞ / UYARI KUTUSU */}
      <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🔴 2026-3 Çağrısı 1 Eylül&apos;de Açıldı, Son Başvuru 13 Kasım 2026
        </h2>
        <p className="leading-8 text-gray-700">
          TÜBİTAK, 2026 yılı için planladığı üç dönemlik{" "}
          <strong>1707 Siparişe Dayalı Ar-Ge Projeleri için KOBİ Destekleme
          Çağrısı</strong>&apos;nın üçüncü ve bu yılki son dönemini{" "}
          <strong>1 Eylül 2026</strong> tarihinde başvuruya açtı. Proje
          önerileri, TEYDEB Proje Değerlendirme İzleme Sistemi (PRODİS)
          üzerinden <strong>13 Kasım 2026 saat 23:59&apos;a</strong> kadar
          gönderilebiliyor. Programın en ayırt edici özelliği, başvurunun tek
          bir şirket tarafından değil, bir ihtiyaç sahibi Müşteri Kuruluş ile
          bu ihtiyacı Ar-Ge yoluyla karşılayacak bir Tedarikçi KOBİ&apos;nin
          birlikte yapması.
        </p>
      </div>

      {/* BU REHBERDE NELER VAR */}
      <div className="mt-16 rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Elinde ticarileşme potansiyeli yüksek bir Ar-Ge fikri olan ancak
          henüz pazar garantisi olmayan KOBİ&apos;ler için 1707 Sipariş Ar-Ge,
          hazır bir müşterisi olan projeleri desteklediği için diğer TÜBİTAK
          programlarından farklı bir risk profiline sahip. Bu yazıda
          programın işleyişini, tarafların yükümlülüklerini ve başvuru
          sürecini uçtan uca ele alıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ 1707 Sipariş Ar-Ge tam olarak nasıl işliyor?</li>
          <li>✔ Müşteri Kuruluş ve Tedarikçi Kuruluş kimdir, hangi şartları taşımalı?</li>
          <li>✔ Destek oranı ve kim ne kadar öder?</li>
          <li>✔ Proje bütçesi ve süresi üst sınırı ne kadar?</li>
          <li>✔ Hangi giderler destekleniyor, hangileri desteklenmiyor?</li>
          <li>✔ Adım adım başvuru süreci ve 2026-3 takvimi</li>
          <li>✔ Diğer TÜBİTAK Ar-Ge destekleriyle farkı</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. TÜBİTAK 1707 Nedir, Nasıl İşler?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir? Taraf Şartları
          </Link>
          <Link href="#destek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Oranı ve Finansman Modeli
          </Link>
          <Link href="#butce" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Proje Bütçesi ve Süresi
          </Link>
          <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Desteklenen ve Desteklenmeyen Giderler
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Adım Adım Başvuru Süreci ve 2026-3 Takvimi
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Diğer TÜBİTAK Ar-Ge Destekleriyle Karşılaştırma
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
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
          1. TÜBİTAK 1707 Sipariş Ar-Ge Destek Programı Nedir, Nasıl İşler?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          TÜBİTAK 1707 Siparişe Dayalı Ar-Ge Projeleri için KOBİ Destekleme
          Programı, TEYDEB tarafından Yenilik Destek Programı Uygulama
          Esasları Yönergesi çerçevesinde yürütülen ve bir işletmenin
          ihtiyaç duyduğu yenilikçi çözümü, bu ihtiyacı Ar-Ge yoluyla
          karşılayacak bir KOBİ&apos;yle birlikte geliştirmesini destekleyen
          bir hibe programıdır. Programın mantığı klasik TÜBİTAK
          desteklerinden farklıdır: proje başvurusundan önce zaten hazır bir
          &quot;müşteri&quot; ve buna bağlı bir pazar garantisi vardır.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Çağrının konu ve sektör sınırlaması yoktur; tüm sektörlerden ve tüm
          teknoloji alanlarından, ticarileşme potansiyeli yüksek Ar-Ge
          projeleri desteklenebilir. Ancak proje önerisinde hem teknik
          yapılabilirlik incelemesinin hem de pazar araştırmasının Ekonomik
          Fizibilite Raporu üzerinden sunulması gerekir. Yeşil Mutabakata
          Uyum Kapsamındaki Öncelikli Ar-Ge ve Yenilik Konuları arasında yer
          alan projelere değerlendirmede ek puan verildiğini de belirtmek
          gerekir.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Programın Amacı
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Müşteri gereksinimlerini karşılayan çözümleri KOBİ&apos;ler eliyle Ar-Ge&apos;ye dönüştürmek</li>
            <li>✔ Büyük ölçekli şirketlerin deneyimini KOBİ&apos;lere aktaracak işbirlikleri kurmak</li>
            <li>✔ Finansman riskini Müşteri Kuruluş, Tedarikçi KOBİ ve TÜBİTAK arasında paylaştırmak</li>
            <li>✔ Hızla ürüne dönüşebilecek, yüksek ticarileşme potansiyeline sahip projeleri desteklemek</li>
          </ul>
        </div>
        <p className="leading-8 text-gray-700">
          Ar-Ge çalışmalarını yürüten taraf her zaman Tedarikçi Kuruluş
          (KOBİ) olurken, Müşteri Kuruluş projenin hedeflendiği şekilde
          ilerlediğini takip eder ve Tedarikçi&apos;nin Ar-Ge maliyetlerine
          nakdi katkı sağlar. Proje çıktısının Müşteri Kuruluş ve/veya
          Tedarikçi Kuruluş tarafından pazara sunularak ticarileştirilmesi
          beklenir.
        </p>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir? Taraf Şartları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Çağrıya bir Müşteri Kuruluş ve en az bir Tedarikçi Kuruluş ortak
          başvuru yapar; başvuru tek bir proje önerisi halinde Müşteri
          Kuruluş tarafından PRODİS üzerinden gönderilir ve Tedarikçi
          Kuruluş/Kuruluşlar ortak kuruluş olarak eklenir.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🏢 Müşteri Kuruluş
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Ar-Ge&apos;ye dayalı bir çözüme ihtiyacı olan taraf</li>
              <li>✔ Türkiye&apos;de yerleşik sermaye şirketi; sektör ve ölçek sınırlaması yok (KOBİ veya büyük ölçekli olabilir)</li>
              <li>✔ Bir projede yalnızca bir Müşteri Kuruluş yer alabilir</li>
              <li>✔ Kendi ürettiği/daha önce ürettiği bir ürünün birebir aynısı için başvuru yapamaz</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              🔬 Tedarikçi Kuruluş
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Türkiye&apos;de yerleşik, KOBİ ölçeğinde sermaye şirketi olmak zorunda</li>
              <li>✔ Ar-Ge çalışmalarını fiilen yürüten taraf</li>
              <li>✔ Her biri KOBİ olmak şartıyla birden fazla Tedarikçi Kuruluş proje ortağı olabilir</li>
              <li>✔ Projeyle teknik açıdan uyumlu, en az lisans mezunu bir proje personeli bulunmalı</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            ⚠️ Ortak Şartlar ve Sınırlamalar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
            <li>
              5520 sayılı Kurumlar Vergisi Kanunu kapsamında birbirine
              &quot;ilişkili kişi&quot; sayılan kuruluşlar aynı projede Müşteri
              ve Tedarikçi olarak yer alamaz.
            </li>
            <li>
              Hem Müşteri Kuruluşta hem de Tedarikçi Kuruluşta, projeyle
              teknik açıdan uyumlu en az lisans derecesine sahip bir proje
              personeli bulunması zorunludur.
            </li>
            <li>
              Taraflar aralarında bir <strong>İşbirliği Sözleşmesi</strong>{" "}
              imzalar; bu sözleşmede projenin kapsamı, fikri hakların
              paylaşımı ve ticarileşmeden sorumlu kuruluş netleştirilir.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. DESTEK ORANI */}
      <section id="destek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Oranı ve Finansman Modeli
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Programın finansman modeli üç taraflıdır: TÜBİTAK, Müşteri Kuruluş
          ve Tedarikçi Kuruluş, Tedarikçi&apos;nin Ar-Ge giderlerini birlikte
          karşılar. Ayrıca Müşteri Kuruluşun projeye ayırdığı bazı personel
          giderleri de ayrıca desteklenir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Gider Kalemi</th>
                <th className="p-5">TÜBİTAK Hibe Oranı</th>
                <th className="p-5">Kim Karşılar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tedarikçi Kuruluşun Ar-Ge gideri</td>
                <td className="p-5 font-bold text-green-600">%40</td>
                <td className="p-5">En az %40 Müşteri Kuruluş, en fazla %20 Tedarikçi Kuruluş</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Müşteri Kuruluşun personel/seyahat gideri</td>
                <td className="p-5 font-bold text-green-600">%40</td>
                <td className="p-5">Kalan %60 Müşteri Kuruluş</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Ödeme Nasıl Akıyor?
          </h3>
          <p className="leading-8 text-gray-700">
            Müşteri Kuruluş, her dönemde Tedarikçi&apos;nin beyan ettiği
            giderin en az %40&apos;ını doğrudan Tedarikçi Kuruluşun banka
            hesabına yatırır; ardından dönem raporu TÜBİTAK&apos;a sunulur.
            TÜBİTAK, kabul ettiği harcama tutarının %40&apos;ını Tedarikçi
            Kuruluşa hibe olarak öder. Müşteri Kuruluş bu ödemeyi zamanında
            yapmazsa ilgili dönemin değerlendirmesi durdurulur; süresinde
            düzeltilmezse proje yürürlükten kaldırılabilir. Çağrı kapsamında{" "}
            <strong>ön ödeme yapılmaz</strong>.
          </p>
        </div>
      </section>

      {/* 4. BÜTÇE VE SÜRE */}
      <section id="butce" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Proje Bütçesi ve Süresi
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">💰</div>
            <h3 className="text-xl font-bold">Bütçe Üst Sınırı</h3>
            <p className="mt-3 text-sm text-gray-600">
              Başvurulan projelerin bütçesi en fazla 10.000.000 TL olabilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">⏱️</div>
            <h3 className="text-xl font-bold">Proje Süresi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Proje süresi en fazla 24 aydır; destek uzatılsa dahi bu süre
              aşılmaz.
            </p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Destek bitiş tarihinden itibaren başlayan ve en fazla 60 ay süren
          bir <strong>ticarileşme izleme süreci</strong> de programın
          parçasıdır. Müşteri Kuruluş, proje çıktısının ticarileşme durumunu
          1., 3. ve 5. yıllarda TÜBİTAK&apos;a raporlamakla yükümlüdür.
        </p>
      </section>

      {/* 5. GİDERLER */}
      <section id="giderler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Desteklenen ve Desteklenmeyen Giderler
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ✅ Tedarikçi Kuruluşun Giderleri
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Personel giderleri</li>
              <li>Seyahat giderleri</li>
              <li>Danışmanlık ve hizmet alımı giderleri</li>
              <li>Alet, teçhizat, yazılım, yayın alım giderleri</li>
              <li>Malzeme ve sarf giderleri</li>
              <li>Mali müşavirlik ücretleri</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ✅ Müşteri Kuruluşun Giderleri
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Yönetim, kalite, test, validasyon ve sahada doğrulama yapan proje personeli (üst sınır 18 adam-ay)</li>
              <li>Bu personelin şehirlerarası seyahat giderleri</li>
              <li>Mali müşavirlik ücretleri</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🚫 Desteklenmeyen Giderler
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>Proje ortaklarının birbirinden aldığı danışmanlık/hizmet giderleri</li>
            <li>Müşteri ve Tedarikçi&apos;nin Kurumlar Vergisi Kanunu&apos;na göre &quot;ilişkili kişi&quot; sayıldığı kuruluşlardan alınan danışmanlık/hizmet giderleri</li>
            <li>Müşteri Kuruluşun, yukarıda sayılanlar dışındaki giderleri</li>
            <li>Ticarileşme aşamasına ait giderler</li>
          </ul>
        </div>
      </section>

      {/* 6. BAŞVURU SÜRECİ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Adım Adım Başvuru Süreci ve 2026-3 Takvimi
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🤝</div>
            <h3 className="text-lg font-bold">1. İşbirliği Kurma</h3>
            <p className="mt-2 text-sm text-gray-600">Müşteri Kuruluş ve Tedarikçi KOBİ bir araya gelir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📝</div>
            <h3 className="text-lg font-bold">2. Kuruluş Bazlı Ön Kayıt</h3>
            <p className="mt-2 text-sm text-gray-600">Her iki taraf da PRODİS&apos;e ön kayıt belgelerini iletir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📊</div>
            <h3 className="text-lg font-bold">3. Fizibilite Raporu</h3>
            <p className="mt-2 text-sm text-gray-600">Ekonomik Fizibilite Raporu ve İşbirliği Sözleşmesi hazırlanır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💻</div>
            <h3 className="text-lg font-bold">4. PRODİS Başvurusu</h3>
            <p className="mt-2 text-sm text-gray-600">Müşteri Kuruluş proje önerisini gönderir, Tedarikçi ortak olarak eklenir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🧑‍⚖️</div>
            <h3 className="text-lg font-bold">5. Hakem Değerlendirmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Ziyaretli hakem değerlendirmesi ve Grup Yürütme Kurulu kararı</p>
          </div>
        </div>
        <div className="mt-12 overflow-x-auto rounded-2xl border bg-white">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Aşama</th>
                <th className="p-4">Tarih</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">2026-3 Çağrı Açılışı</td>
                <td className="p-4">1 Eylül 2026</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-red-600">Son Başvuru (Çağrı Kapanışı)</td>
                <td className="p-4 font-semibold text-red-600">13 Kasım 2026, 23:59 (TSİ)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Başvuru öncesinde Müşteri Kuruluş ve tüm Tedarikçi Kuruluşların{" "}
          <strong>kuruluş bazlı ön kayıt</strong> sürecini tamamlamış olması
          şarttır; daha önce ön kayıt onayı almış kuruluşlar bu adımı tekrar
          yapmaz. Proje önerisi, ekindeki Ekonomik Fizibilite Raporu ile
          birlikte yalnızca PRODİS üzerinden çevrimiçi gönderilir; İşbirliği
          Sözleşmesi&apos;nin başvuru anında imzalanmış olması zorunlu
          değildir, ancak proje kabul edildiğinde sözleşme imzalanmadan proje
          sözleşmesi tamamlanamaz. 2026 yılında bu, programın üçüncü ve son
          çağrı dönemidir; TÜBİTAK yeni bir dönem planlarsa duyuru resmî
          internet sitesinden yapılır.
        </p>
      </section>

      {/* 7. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Diğer TÜBİTAK Ar-Ge Destekleriyle Karşılaştırma
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin elinde hazır bir müşteri veya tedarikçi ortağı yoksa,
          ya da farklı bir işbirliği yapısı arıyorsanız aşağıdaki alternatif
          TÜBİTAK programları da değerlendirilebilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Program</th>
                <th className="p-4">Ortaklık Şartı</th>
                <th className="p-4">Destek Oranı</th>
                <th className="p-4">Üst Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">TÜBİTAK 1707</td>
                <td className="p-4">Müşteri Kuruluş + Tedarikçi KOBİ zorunlu</td>
                <td className="p-4">%40 hibe + karşılıklı katkı</td>
                <td className="p-4">10.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">
                  <Link href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026" className="text-orange-600 hover:underline">
                    TÜBİTAK 1501 / 1507
                  </Link>
                </td>
                <td className="p-4">Yok, şirket tek başına başvurur</td>
                <td className="p-4">Ölçeğe göre değişken hibe</td>
                <td className="p-4">20.000.000 TL / 3.500.000 TL</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">
                  <Link href="/blog/tubitak-1711-yapay-zeka-ekosistemi-cagrisi-2026" className="text-orange-600 hover:underline">
                    TÜBİTAK 1711
                  </Link>
                </td>
                <td className="p-4">Şirket + üniversite/kamu araştırma kurumu zorunlu</td>
                <td className="p-4">%60-%70 hibe</td>
                <td className="p-4">10.000.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          1707&apos;yi diğerlerinden ayıran temel fark, projenin başında
          zaten bir pazar garantisinin (Müşteri Kuruluş) bulunması. Bu durum
          hem ticarileşme riskini azaltır hem de değerlendirmede projenin
          ekonomik yarara dönüşme olasılığını güçlü kılar.
        </p>
      </section>

      {/* 8. DİKKAT EDİLECEKLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>
              Müşteri Kuruluşun kendi bünyesinde ürettiği veya daha önce
              ürettiği bir ürünün <strong>aynısının</strong> Tedarikçi
              tarafından üretilmesine yönelik projelere başvuru yapılamaz.
            </li>
            <li>
              Tüm Ar-Ge faaliyetleri başvurudan önce tamamlanmışsa veya
              kuruluşun çözmesi gereken teknik bir problem yoksa, proje
              hakem değerlendirmesine dahi alınmadan reddedilebilir.
            </li>
            <li>
              Müşteri Kuruluş, dönemsel harcamanın en az %40&apos;ını
              zamanında Tedarikçi&apos;nin hesabına yatırmazsa proje
              değerlendirmesi durur ve yürürlükten kaldırılma riski doğar.
            </li>
            <li>
              Hem Müşteri hem Tedarikçi tarafında projeyle teknik açıdan
              uyumlu, en az lisans mezunu bir proje personeli bulunmalıdır;
              bu şart sağlanmazsa proje doğrudan reddedilebilir.
            </li>
            <li>
              Kabul edilen bütçe, çağrı üst sınırı ve destek oranları
              TÜBİTAK tarafından her çağrı döneminde güncellenebilir;
              başvuru öncesinde 2026-3 çağrı metninin birebir teyit edilmesi
              gerekir.
            </li>
          </ul>
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
              Bir KOBİ olarak Müşteri Kuruluş bulmadan tek başıma başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 1707 Sipariş Ar-Ge&apos;de başvuru mutlaka bir Müşteri
              Kuruluş ve en az bir Tedarikçi KOBİ&apos;nin ortak imzasıyla
              yapılır. Tek başınıza başvurmak istiyorsanız TÜBİTAK 1501 veya
              1507 gibi ortaklık şartı olmayan programlar
              değerlendirilebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Büyük ölçekli bir şirket Tedarikçi Kuruluş olabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Tedarikçi Kuruluş her zaman KOBİ ölçeğinde olmak
              zorundadır. Müşteri Kuruluş ise KOBİ veya büyük ölçekli
              işletme olabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek geri ödemeli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, TÜBİTAK&apos;ın verdiği %40&apos;lık pay geri ödemesiz
              hibedir. Ancak Müşteri Kuruluş ve Tedarikçi Kuruluş kendi
              katkı paylarını kendi kaynaklarından karşılar; bu kısım bir
              hibe değil, tarafların doğrudan finansmanıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Birden fazla Tedarikçi Kuruluş aynı projede yer alabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, her biri KOBİ olmak şartıyla birden fazla Tedarikçi
              Kuruluş proje ortağı olabilir. Ancak bir projede yalnızca bir
              Müşteri Kuruluş bulunabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026-3 çağrısını kaçırırsam ne zaman yeni bir dönem açılır?
            </h3>
            <p className="leading-8 text-gray-700">
              2026-3, TÜBİTAK&apos;ın 2026 yılı için planladığı üçüncü ve son
              1707 çağrı dönemidir. Yeni bir dönemin ne zaman açılacağı
              TÜBİTAK tarafından ayrıca duyurulur; güncel çağrı takvimini
              TÜBİTAK&apos;ın resmî internet sitesinden takip etmek gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 1707 Sipariş Ar-Ge Başvuru Dosyanızı Birlikte Hazırlayalım
          </h3>
          <p className="leading-8 text-gray-700">
            Müşteri Kuruluş - Tedarikçi KOBİ işbirliğini doğru kurgulamak,
            Ekonomik Fizibilite Raporu&apos;nu ve İşbirliği Sözleşmesi&apos;ni
            eksiksiz hazırlamak, 13 Kasım 2026 son başvuru tarihine kadar
            PRODİS sürecini yönetmek projenizin desteklenme olasılığını
            doğrudan etkiler.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Başvuru dosyanızı birlikte değerlendirmemiz için bizimle
              iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 10. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sonuç
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          TÜBİTAK 1707 Sipariş Ar-Ge Destek Programı, klasik Ar-Ge
          desteklerinden farklı olarak projenin başında hazır bir müşterisi
          bulunduğu için hem KOBİ&apos;lerin ticarileşme riskini azaltıyor
          hem de büyük ölçekli şirketlerle KOBİ&apos;ler arasındaki
          işbirliğini teşvik ediyor. 10 milyon TL&apos;ye varan proje bütçesi
          ve karşılıklı finansman paylaşımı modeliyle, hazır bir sipariş
          ilişkisine dayanan Ar-Ge projeleri için önemli bir fırsat sunuyor.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          13 Kasım 2026 son başvuru tarihine kadar kalan süre içinde uygun
          bir Müşteri Kuruluş veya Tedarikçi KOBİ ortağı belirleme, kuruluş
          bazlı ön kayıt işlemlerini tamamlama ve Ekonomik Fizibilite
          Raporu&apos;nu hazırlama adımlarına vakit kaybetmeden başlanması
          önerilir.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • TEYDEB • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri 2026</h3>
        </Link>
        <Link
          href="/blog/tubitak-1711-yapay-zeka-ekosistemi-cagrisi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • YAPAY ZEKA • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1711 Yapay Zeka Ekosistem Çağrısı 2026</h3>
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
    </BlogLayout>
  );
}
