import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı 2026-2: Kimler Başvurabilir, Destek Nasıl Hibeye Dönüşür? | Koray Akdağ",
  description:
    "TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı'nın 2026-2 döneminde 28 Eylül 2026'ya kadar açık. KOBİ ve büyük ölçekli şirketler için 51,5 milyon TL'ye varan bütçe üst sınırı, Yeşil Dönüşüm Göstergeleri, hibeye dönüşme mekanizması ve başvuru sürecine dair güncel rehber.",
  keywords: [
    "TÜBİTAK 1832",
    "Sanayide Yeşil Dönüşüm Çağrısı",
    "1832 2026-2 çağrısı",
    "TÜBİTAK yeşil dönüşüm başvuru",
    "Yeşil Dönüşüm Göstergeleri",
    "TÜBİTAK geri ödemeli hibe",
    "PRODİS başvuru",
    "TEYDEB 1832",
    "sanayide yeşil dönüşüm son başvuru tarihi",
    "TÜBİTAK yeşil sanayi projesi",
  ],
  alternates: {
    canonical: "/blog/tubitak-1832-sanayide-yesil-donusum-cagrisi-2026",
  },
};

export default function Tubitak1832Page() {
  return (
    <BlogLayout
      title="TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı 2026-2: Kimler Başvurabilir, Destek Nasıl Hibeye Dönüşür?"
      description="Dünya Bankası finansmanlı Türkiye Yeşil Sanayi Projesi kapsamında yürütülen TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı'nın 2026-2 dönemi 28 Eylül 2026'ya kadar açık. Kimler başvurabilir, bütçe üst sınırları, Yeşil Dönüşüm Göstergeleri ve geri ödemeli desteğin hibeye dönüşme mekanizmasıyla güncel rehber."
      category="TÜBİTAK • YEŞİL DÖNÜŞÜM • 2026"
      date="2026"
      readTime="13 Dakika"
      coverImage="https://images.unsplash.com/photo-1786913507799-0ddbb3e7dbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="tubitak-1832-sanayide-yesil-donusum-cagrisi-2026"
      programDurumu="acik"
      sonBasvuruTarihi="28 Eylül 2026"
      ctaHeading="TÜBİTAK 1832 Başvuru Dosyanızı Birlikte Hazırlayalım"
      ctaText="Yeşil Dönüşüm Göstergelerinden hangisini hedefleyebileceğinizden proje bütçenizin ölçeğinize göre doğru kalemlere dağıtılmasına kadar, 28 Eylül 2026 son başvuru tarihine yetişecek şekilde dosyanızı birlikte hazırlayabiliriz."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Enerji, su veya atık maliyetlerini düşürecek bir Ar-Ge projesi
        planlayan sanayi kuruluşları için TÜBİTAK&apos;ın her yıl birkaç kez
        açtığı 1832 Sanayide Yeşil Dönüşüm Çağrısı, alışılmış hibe
        programlarından farklı bir mantıkla çalışıyor. Destek önce faizsiz bir
        kredi olarak kullandırılıyor, proje sonunda ölçülebilir bir çevresel
        kazanım elde edildiğinde bu tutarın önemli bir kısmı hibeye
        dönüşüyor. 2026-2 dönemi başvuruları 28 Eylül 2026&apos;da
        kapanıyor; bu yazıda programın işleyişini, şartlarını ve başvuru
        sürecini uçtan uca ele alıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ 1832 Çağrısı, Türkiye&apos;de en az 2 yıldır faaliyette olan{" "}
            <strong>KOBİ ve büyük ölçekli sermaye şirketlerine</strong> açık;
            tek başına veya en fazla 3 kuruluşluk ortaklıkla başvurulabiliyor.
          </li>
          <li>
            ✔ Destek, <strong>faizsiz geri ödemeli</strong> bir finansman
            olarak kullandırılıyor; proje bütçesinin KOBİ&apos;lerde %80&apos;i,
            büyük ölçekli şirketlerde %70&apos;i, deprem bölgesindeki
            KOBİ&apos;lerde %90&apos;ı bu kapsamda karşılanıyor.
          </li>
          <li>
            ✔ Bütçe üst sınırı ölçeğe göre değişiyor: mikro/küçük ölçekte 15
            milyon TL, orta ölçekte 24 milyon TL, büyük ölçekte{" "}
            <strong>51,5 milyon TL&apos;ye</strong> kadar.
          </li>
          <li>
            ✔ Proje, elektrik tüketimi, su tüketimi veya geri
            dönüştürülemeyen atık miktarında en az %10 azalma ya da yenilikçi
            bir yeşil teknoloji çözümü hedeflerinden en az birini
            tutturduğunda, kullanılan desteğin bir kısmı{" "}
            <strong>hibeye dönüşüyor.</strong>
          </li>
          <li>
            ✔ 2026-2 döneminde başvurular <strong>3 Ağustos - 28 Eylül
            2026</strong> arasında kabul ediliyor; kuruluş bazlı ön kayıt en
            geç <strong>24 Eylül 2026&apos;ya</strong>, nihai başvuru{" "}
            <strong>28 Eylül 2026 saat 23.59&apos;a</strong> kadar tamamlanmalı.
          </li>
          <li>
            ✔ Başvurular PRODİS (eteydeb.tubitak.gov.tr) üzerinden elektronik
            ortamda yapılıyor, proje süresi en fazla 24 ay.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. TÜBİTAK 1832 Nedir?
          </Link>
          <Link href="#mekanizma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Önce Kredi, Sonra Kısmen Hibe: Destek Mekanizması
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Başvurabilir? Şartlar
          </Link>
          <Link href="#alanlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Öncelikli Alanlar ve Teknoloji Hazırlık Seviyesi
          </Link>
          <Link href="#destek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Destek Oranları ve Bütçe Üst Sınırları
          </Link>
          <Link href="#ydg" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Yeşil Dönüşüm Göstergeleri
          </Link>
          <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Desteklenen Giderler ve Proje Süresi
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. 2026-2 Çağrı Takvimi ve Başvuru Süreci
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
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          1832 Sanayide Yeşil Dönüşüm Çağrısı, Sanayi ve Teknoloji Bakanlığı,
          TÜBİTAK ve KOSGEB&apos;in birlikte yürüttüğü, Dünya Bankası
          finansmanlı Türkiye Yeşil Sanayi Projesi&apos;nin TEYDEB ayağıdır.
          Aynı projenin KOSGEB tarafındaki karşılığı, çatı tipi güneş enerjisi
          ve döngüsel ekonomi yatırımlarını destekleyen Yeşil Sanayi Destek
          Programı&apos;dır; 1832 ise doğrudan yatırım değil, Ar-Ge ve
          yenilik projelerini hedefliyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Çağrının amacı, sanayi kuruluşlarının üretim süreçlerinde enerji,
          su ve atık verimliliğini artıracak veya yeni bir yeşil teknoloji
          ortaya koyacak Ar-Ge projelerini finanse etmek. TÜBİTAK, programı
          2024&apos;ten bu yana düzenli olarak yılda birkaç dönem halinde
          açıyor; 2026-2 dönemi bu serinin güncel halkası.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Programın Amacı
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Üretim süreçlerinde ölçülebilir enerji ve su tasarrufu sağlamak</li>
            <li>✔ Geri dönüştürülemeyen atık miktarını azaltacak çözümler geliştirmek</li>
            <li>✔ Sanayide yenilikçi yeşil teknolojilerin geliştirilmesini teşvik etmek</li>
            <li>✔ Ar-Ge desteğini bir kredi disiplini içinde, sonuca bağlı olarak vermek</li>
          </ul>
        </div>
      </section>

      {/* 2. MEKANİZMA */}
      <section id="mekanizma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Önce Kredi, Sonra Kısmen Hibe: Destek Mekanizması
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          1832&apos;yi klasik bir TÜBİTAK hibe programından ayıran asıl
          özellik, ödeme rakamı değil geri ödeme yapısı. Onaylanan proje
          bütçesi önce faizsiz, geri ödemeli bir destek olarak
          kullandırılıyor. Proje tamamlandığında Yeşil Dönüşüm
          Göstergeleri&apos;nden (aşağıda 6. bölümde) en az birinde hedefe
          ulaşıldığı doğrulanırsa, kullanılan desteğin bir kısmı hibeye
          dönüşüyor; kalan tutar ise faizsiz şekilde taksitler halinde geri
          ödeniyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu yapı, saf hibe programlarında zaman zaman görülen bir riski
            azaltıyor: işletmenin asıl motivasyonunun projeyi başarıyla
            bitirmek değil, parayı almak olması. 1832&apos;de geri ödeme
            yükümlülüğü baştan var olduğu için, hedeflenen verimlilik
            kazanımına gerçekten ulaşmak işletmenin kendi çıkarına dönüşüyor.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: TÜBİTAK 1832 ile KOSGEB Yeşil Sanayi Destek Programı Farklı Programlar
          </h3>
          <p className="leading-8 text-gray-700">
            Her ikisi de aynı Türkiye Yeşil Sanayi Projesi şemsiyesi
            altında yürüdüğü için sıkça karıştırılıyor, ama hedefledikleri iş
            farklı. TÜBİTAK 1832, üretim sürecini değiştirecek bir{" "}
            <strong>Ar-Ge/yenilik projesini</strong> PRODİS üzerinden
            destekliyor ve sonuç odaklı kısmi hibe mantığıyla çalışıyor.{" "}
            <Link
              href="/blog/kosgeb-yesil-sanayi-destek-programi-2026"
              className="text-orange-600 underline"
            >
              KOSGEB Yeşil Sanayi Destek Programı
            </Link>{" "}
            ise KOBİ Bilgi Sistemi (KBS) üzerinden yürüyen, doğrudan{" "}
            <strong>yatırım</strong> destekleyen ayrı bir programdır: çatı
            tipi güneş enerjisi sistemi kurmak veya döngüsel ekonomi/kaynak
            verimliliği yatırımı yapmak isteyen KOBİ&apos;lere yönelik. Bir
            işletme, projesinin niteliğine göre ikisinden yalnızca birine
            veya farklı projelerle her ikisine de başvurabilir; ama aynı
            yatırım kalemi için aynı anda iki programdan destek alınamaz.
          </p>
        </div>
      </section>

      {/* 3. KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Başvurabilir? Şartlar
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Uygun Kuruluşlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Türkiye&apos;de kurulu, en az 2 yıldır faaliyette olan sermaye şirketleri</li>
              <li>✔ KOBİ ölçeğindeki işletmeler</li>
              <li>✔ Büyük ölçekli sanayi kuruluşları</li>
              <li>✔ Deprem bölgesinde kayıtlı KOBİ&apos;ler (daha yüksek destek oranıyla)</li>
              <li>✔ Tek başına veya en fazla 3 kuruluşluk ortaklık halinde başvuru</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-orange-700">
              📋 Aranan Temel Şartlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Projenin sanayi/üretim sürecine somut bir yeşil kazanım sağlaması</li>
              <li>✔ Teknoloji Hazırlık Seviyesi (THS) 3-9 aralığında yer alması</li>
              <li>✔ Proje bitişinde en az THS 7 seviyesine ulaşılması</li>
              <li>✔ Kuruluş bazlı ön kaydın başvurudan önce tamamlanmış olması</li>
              <li>✔ Başvurunun PRODİS üzerinden e-imzalı yapılması</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. ALANLAR VE THS */}
      <section id="alanlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Öncelikli Alanlar ve Teknoloji Hazırlık Seviyesi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Projelerin aşağıdaki beş öncelikli alandan en az biriyle doğrudan
          ilişkili olması bekleniyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🌍</div>
            <h3 className="text-xl font-bold text-[#071A2F]">İklim Değişikliği ve Çevre</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">♻️</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Temiz ve Döngüsel Ekonomi</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">⚡</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Temiz Enerji</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🌾</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Sürdürülebilir Tarım</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🚛</div>
            <h3 className="text-xl font-bold text-[#071A2F]">Sürdürülebilir Ulaşım</h3>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Teknoloji Hazırlık Seviyesi (THS) açısından çağrı, kavram
          kanıtlanmasından (THS 3) ürünleşmeye yakın aşamaya (THS 9) kadar
          geniş bir aralığı kapsıyor; ancak projenin bitiş aşamasında en az
          THS 7&apos;ye ulaşması gerekiyor. Zaten THS 8 seviyesinden başlayan,
          yani neredeyse ticarileşmiş bir çözümün küçük iyileştirmesi
          niteliğindeki çalışmalar kapsam dışında tutuluyor.
        </p>
      </section>

      {/* 5. DESTEK ORANLARI */}
      <section id="destek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Destek Oranları ve Bütçe Üst Sınırları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Destek oranı, başvuran kuruluşun ölçeğine göre değişiyor; kalan
          kısım kuruluşun kendi öz kaynağından karşılanıyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kuruluş Ölçeği</th>
                <th className="p-5">TÜBİTAK Destek Oranı</th>
                <th className="p-5">Proje Bütçesi Üst Sınırı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mikro / Küçük Ölçekli KOBİ</td>
                <td className="p-5 font-bold text-green-600">%80</td>
                <td className="p-5">15.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Orta Ölçekli KOBİ</td>
                <td className="p-5 font-bold text-green-600">%80</td>
                <td className="p-5">24.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Deprem Bölgesindeki KOBİ</td>
                <td className="p-5 font-bold text-green-600">%90</td>
                <td className="p-5">Ölçeğine göre KOBİ üst sınırı</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Büyük Ölçekli Şirket</td>
                <td className="p-5 font-bold text-green-600">%70</td>
                <td className="p-5 font-bold">51.500.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Not: Rakamlar TÜBİTAK&apos;ın resmî 1832 çağrı sayfasındaki güncel
          esasları yansıtır; kesin tutarlar için başvuru öncesinde 2026-2
          dönemi çağrı duyurusunun birebir kontrol edilmesi önerilir.
        </p>
      </section>

      {/* 6. YDG */}
      <section id="ydg" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Yeşil Dönüşüm Göstergeleri (YDG)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Desteğin hibeye dönüşüp dönüşmeyeceği, projenin tamamlanmasının
          ardından aşağıdaki göstergelerden en az birinde hedefe ulaşılıp
          ulaşılmadığına göre belirleniyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">YDG 1 · Elektrik Tüketimi</h3>
            <p className="text-gray-700">Üretim birimi başına elektrik tüketiminde en az %10 azalma</p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">YDG 2 · Su Tüketimi</h3>
            <p className="text-gray-700">Üretim birimi başına su tüketiminde en az %10 azalma</p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">YDG 3 · Geri Dönüştürülemeyen Atık</h3>
            <p className="text-gray-700">Geri dönüştürülemeyen atık miktarında en az %10 azalma</p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">YDG 4 · Yenilikçi Yeşil Teknoloji</h3>
            <p className="text-gray-700">Daha önce sanayide uygulanmamış bir yeşil teknoloji çözümünün geliştirilmesi</p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Proje başvurusunda hangi göstergenin hedeflendiği ve başlangıç/hedef
          değerlerinin ne olduğu netleştiriliyor. İzleme süreci proje
          tamamlandıktan sonra devam ediyor; hedefe ulaşıldığı
          doğrulandığında kullanılan geri ödemeli desteğin bir kısmı, TÜBİTAK
          tarafından belirlenen kademeli esasa göre hibeye dönüştürülüyor.
          Hedefe ulaşılamazsa kullanılan tutarın tamamı, geri ödeme takvimine
          göre faizsiz şekilde iade ediliyor.
        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurularda en sık gözden kaçan nokta, YDG hedefinin soyut bir
            &quot;verimlilik artışı&quot; vaadi olarak değil, mevcut
            tüketim verisine dayalı, ölçülebilir bir başlangıç ve hedef
            değeriyle sunulmasının gerekliliğidir. TÜBİTAK değerlendirmesi
            ve sonrasındaki izleme süreci, projenin gerçekten bu ölçülebilir
            eşiği tutturup tutturmadığına bakıyor; bu yüzden fizibilite
            raporundaki mühendislik hesabının başvuru aşamasında zaten sağlam
            kurulmuş olması, hem başvurunun kabul edilme ihtimalini hem de
            proje sonunda hibeye dönüşüm oranını doğrudan etkiliyor.
          </p>
        </div>
      </section>

      {/* 7. GİDERLER */}
      <section id="giderler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Desteklenen Giderler ve Proje Süresi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Projenin azami destek süresi <strong>24 ay</strong>dır. Diğer
          TEYDEB Ar-Ge programlarında olduğu gibi, çağrı duyurusunda
          tanımlanan standart gider kategorileri kapsamında destek
          sağlanıyor:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              👨‍💻 Personel
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Proje ekibindeki teknik/mühendislik personel giderleri</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🏭 Alet, Teçhizat ve Yazılım
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Üretim sürecine entegre edilecek ekipman, sensör ve yazılım/donanım giderleri</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🔬 Hizmet Alımı ve Danışmanlık
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Test, analiz, doğrulama ve teknik danışmanlık hizmetleri</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              📦 Malzeme ve Seyahat
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Sarf malzemesi, prototip üretimi ve proje kapsamındaki teknik seyahatler</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Not: Gider kategorilerinin kesin kapsamı ve üst limitleri için
          başvuru öncesinde 2026-2 çağrı duyurusu ve başvuru kılavuzunun
          incelenmesi gerekir.
        </p>
      </section>

      {/* 8. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. 2026-2 Çağrı Takvimi ve Başvuru Süreci
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-3 text-2xl font-bold text-red-700">
            🔴 Son Başvuru 28 Eylül 2026: Süre Daralıyor
          </h3>
          <p className="leading-8 text-gray-700">
            2026-2 döneminde başvurular 3 Ağustos 2026&apos;dan bu yana kabul
            ediliyor. Kuruluş bazlı ön kaydın en geç 24 Eylül 2026&apos;ya
            kadar tamamlanmış olması, nihai başvurunun ise 28 Eylül 2026
            saat 23.59&apos;a kadar PRODİS üzerinden gönderilmiş olması
            gerekiyor. Ön kayıt evrakının çağrı kapanış tarihinden en az bir
            iş günü önce TÜBİTAK&apos;a ulaştırılması önemli.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🧾</div>
            <h3 className="text-lg font-bold">1. Fizibilite ve YDG Hedefi</h3>
            <p className="mt-2 text-sm text-gray-600">Hangi göstergenin hedefleneceği ve ölçülebilir değerler belirlenir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💻</div>
            <h3 className="text-lg font-bold">2. Kuruluş Bazlı Ön Kayıt</h3>
            <p className="mt-2 text-sm text-gray-600">En geç 24 Eylül 2026&apos;ya kadar PRODİS üzerinden tamamlanır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📝</div>
            <h3 className="text-lg font-bold">3. Proje Önerisi Hazırlığı</h3>
            <p className="mt-2 text-sm text-gray-600">Başvuru formu ve ekonomik fizibilite raporu hazırlanır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📤</div>
            <h3 className="text-lg font-bold">4. Nihai Başvuru</h3>
            <p className="mt-2 text-sm text-gray-600">28 Eylül 2026, 23.59&apos;a kadar PRODİS üzerinden e-imzayla gönderilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="text-lg font-bold">5. Değerlendirme ve İzleme</h3>
            <p className="mt-2 text-sm text-gray-600">Onay sonrası proje süresince ve tamamlandıktan sonra YDG izlenir</p>
          </div>
        </div>
        <div className="mt-12 overflow-x-auto rounded-2xl border bg-white">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Aşama</th>
                <th className="p-4">Tarih / Saat</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Çağrı Açılışı</td>
                <td className="p-4">3 Ağustos 2026</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Kuruluş Bazlı Ön Kayıt Son Tarihi</td>
                <td className="p-4">24 Eylül 2026</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-red-600">Nihai Başvuru (Çağrı Kapanışı)</td>
                <td className="p-4 font-semibold text-red-600">28 Eylül 2026, 23.59</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ön kayıt (24 Eylül) ile nihai başvuru (28 Eylül) tarihlerini birbirine karıştırmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ THS 8&apos;den başlayan, ticarileşmeye çok yakın projeler kapsam dışında kalıyor
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Destek faizsiz olsa da geri ödeme yükümlülüğü var, nakit akışınızı buna göre planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ YDG hedefinizi somut, ölçülebilir bir başlangıç/hedef değeriyle sunun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ En az 2 yıldır faaliyette olma şartını başvurudan önce teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bütçe üst sınırları ve destek oranları her çağrı döneminde güncellenebilir, güncel duyuruyu kontrol edin
          </div>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://tubitak.gov.tr/tr/destekler/sanayi/ulusal-destek-programlari/icerik-1832-sanayide-yesil-donusum-cagrisi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜBİTAK - 1832 Sanayide Yeşil Dönüşüm Çağrısı Program Sayfası
            </a>
          </li>
          <li>
            <a
              href="https://tubitak.gov.tr/sites/default/files/2026-09/1832_2026-2_Cagri_Duyurusu_revize_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              1832 2026-2 Çağrı Duyurusu (Resmî PDF)
            </a>
          </li>
          <li>
            <a
              href="http://eteydeb.tubitak.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              PRODİS - Proje Değerlendirme ve İzleme Sistemi
            </a>
          </li>
        </ul>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TÜBİTAK 1832 desteği tamamen hibe mi, yoksa geri ödemeli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              İkisinin karışımı. Destek önce faizsiz, geri ödemeli olarak
              kullandırılıyor. Proje tamamlandığında Yeşil Dönüşüm
              Göstergelerinden en az birinde hedefe ulaşıldığı
              doğrulanırsa, kullanılan tutarın bir kısmı hibeye
              dönüşüyor; kalan kısım faizsiz şekilde geri ödeniyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Büyük ölçekli şirketler de 1832&apos;ye başvurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Program hem KOBİ hem de büyük ölçekli sermaye
              şirketlerine açık; ancak destek oranı ve bütçe üst sınırı
              ölçeğe göre farklılaşıyor. Büyük ölçekli şirketlerde oran
              %70, bütçe üst sınırı 51,5 milyon TL&apos;dir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ön kayıt ile nihai başvuru tarihi aynı gün mü?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, farklı tarihler. 2026-2 döneminde kuruluş bazlı ön
              kayıt en geç 24 Eylül 2026&apos;ya kadar tamamlanmalı; asıl
              proje önerisi ise 28 Eylül 2026 saat 23.59&apos;a kadar
              PRODİS üzerinden nihai olarak gönderilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Proje sonunda Yeşil Dönüşüm Göstergesi hedefine ulaşılamazsa ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Hedefe ulaşılamazsa hibeye dönüşüm gerçekleşmez ve
              kullanılan destek tutarının tamamı, TÜBİTAK&apos;ın
              belirlediği geri ödeme takvimine göre faizsiz şekilde iade
              edilir. Bu nedenle başvuru aşamasında hedefin gerçekçi ve
              ölçülebilir belirlenmesi önem taşıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TÜBİTAK 1832 ile KOSGEB Yeşil Sanayi Destek Programı aynı program mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. İkisi de Türkiye Yeşil Sanayi Projesi kapsamında
              yürütülse de ayrı programlardır. 1832, TÜBİTAK üzerinden
              Ar-Ge/yenilik projelerini destekler; KOSGEB Yeşil Sanayi
              Destek Programı ise KOBİ&apos;lerin çatı tipi güneş enerjisi
              veya döngüsel ekonomi yatırımlarını KBS üzerinden destekler.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bir başvuruya kaç kuruluş ortak olabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Başvuru tek bir kuruluş tarafından yapılabileceği gibi, en
              fazla 3 kuruluşun bir araya geldiği bir ortaklık şeklinde de
              yapılabilir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 28 Eylül 2026&apos;ya Kadar Başvuru Dosyanızı Birlikte Hazırlayalım
          </h3>
          <p className="leading-8 text-gray-700">
            Hangi Yeşil Dönüşüm Göstergesini hedefleyebileceğinizi, proje
            bütçenizin ölçeğinize göre doğru kalemlere nasıl dağıtılacağını
            ve fizibilite raporunuzun TÜBİTAK değerlendirmesini geçecek
            sağlamlıkta kurulmasını birlikte netleştirebiliriz.{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Şirketinizin destek uygunluğunu ücretsiz ön analizle
              değerlendirelim
            </Link>{" "}
            veya{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              doğrudan bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı, enerji ve su
          maliyetlerini düşürmeyi ya da atığını azaltmayı hedefleyen sanayi
          kuruluşları için 51,5 milyon TL&apos;ye varan bütçe üst sınırıyla
          önemli bir fırsat sunuyor. Ancak buradaki asıl soru &quot;ne
          kadar destek alırım&quot; değil, &quot;Yeşil Dönüşüm
          Göstergelerinden birini gerçekten tutturabilir miyim&quot;
          olmalı; çünkü hibeye dönüşen kısım ancak bu sorunun cevabı evet
          olduğunda ortaya çıkıyor.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          2026-2 döneminde son başvuru tarihi olan 28 Eylül 2026&apos;ya
          kalan süre kısıtlı olduğundan, fizibilite raporunu ve ölçülebilir
          YDG hedefini netleştirme adımına vakit kaybetmeden başlanması
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
            href="/blog/kosgeb-yesil-sanayi-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • YEŞİL DÖNÜŞÜM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Yeşil Sanayi Destek Programı</h3>
          </Link>
          <Link
            href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • TEYDEB • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri 2026</h3>
          </Link>
          <Link
            href="/blog/karbon-ayak-izi-hesaplama-kobiler-icin-rehber-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • KARBON AYAK İZİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Karbon Ayak İzi Hesaplama: KOBİ&apos;ler İçin 2026 Rehberi</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
