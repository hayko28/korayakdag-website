import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Teknopark Nedir? Avantajları, Vergi İstisnaları ve Başvuru Rehberi | Koray Akdağ",
  description:
    "Teknopark nedir, kimler başvurabilir, hangi vergi ve SGK avantajları sağlanır, uzaktan çalışma mümkün mü, Teknopark ile Ar-Ge Merkezi arasındaki farklar nelerdir?",
  keywords: [
    "Teknopark nedir",
    "Teknopark avantajları",
    "Teknopark başvurusu",
    "Teknopark vergi avantajları",
    "Teknopark vergi istisnası",
    "Teknopark KDV istisnası",
    "Teknopark SGK teşviki",
    "Teknopark uzaktan çalışma",
    "Teknoloji Geliştirme Bölgesi",
    "Ar-Ge",
    "yazılım teşvikleri",
  ],
};

export default function BlogPage() {
  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="relative h-[520px] overflow-hidden bg-[#071A2F]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#071A2F] via-[#0B2945] to-[#071A2F]" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full border border-orange-400" />
          <div className="absolute right-[15%] top-[15%] h-64 w-64 rounded-full border border-blue-300" />
          <div className="absolute bottom-[10%] left-[35%] h-32 w-32 rounded-full border border-orange-300" />
        </div>

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative flex h-full items-center">

          <div className="mx-auto w-full max-w-6xl px-6">

            <div className="mb-6">

              <Link
                href="/#blog"
                className="text-orange-400 transition hover:text-orange-300"
              >
                Blog
              </Link>

              <span className="mx-2 text-white">/</span>

              <span className="text-white">
                Teknopark
              </span>

            </div>

            <div className="inline-flex rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
              TEKNOPARK • AR-GE • YAZILIM
            </div>

            <h1 className="mt-8 max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Teknopark Nedir?
              <br />
              Teknopark&apos;a Girmenin Avantajları Nelerdir?
            </h1>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-200 sm:text-xl">
              Vergi istisnaları, KDV avantajları, SGK teşvikleri, uzaktan
              çalışma, başvuru şartları, proje türleri ve Teknopark ile
              Ar-Ge Merkezi arasındaki farkları kapsamlı şekilde ele alan
              rehber.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <span className="rounded-full bg-white/10 px-5 py-3 text-white">
                🏢 Teknoloji Geliştirme Bölgeleri
              </span>

              <span className="rounded-full bg-white/10 px-5 py-3 text-white">
                💻 Yazılım & Ar-Ge
              </span>

              <span className="rounded-full bg-white/10 px-5 py-3 text-white">
                📚 Kapsamlı Rehber
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* CONTENT */}

      <section className="mx-auto max-w-5xl px-6 py-16">


        {/* GİRİŞ */}

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            Teknopark Neden Önemli?
          </h2>

          <p className="text-lg leading-9 text-gray-700">

            Türkiye&apos;de teknolojik üretimi teşvik etmek, üniversite-sanayi
            iş birliğini desteklemek ve yüksek katma değerli projelerin önünü
            açmak amacıyla kurulan Teknoparklar, girişimciler ve kurumsal
            teknoloji ekipleri için önemli bir çalışma ve gelişim ortamı
            sunmaktadır.

          </p>

          <p className="mt-6 text-lg leading-9 text-gray-700">

            Yazılım, Ar-Ge ve inovasyon odaklı projelerin desteklendiği bu
            bölgelerde şirketler yalnızca finansal ve vergisel avantajlardan
            değil; aynı zamanda akademik bilgiye, modern altyapıya ve teknoloji
            ekosistemine erişim imkânından da yararlanabilir.

          </p>

        </div>


        {/* İÇİNDEKİLER */}

        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <a
              href="#nedir"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              1. Teknopark Nedir?
            </a>

            <a
              href="#kimler"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              2. Kimler Teknopark&apos;a Başvurabilir?
            </a>

            <a
              href="#avantajlar"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              3. Teknopark&apos;ın Avantajları Nelerdir?
            </a>

            <a
              href="#vergiler"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              4. Vergi ve KDV Avantajları
            </a>

            <a
              href="#sgk"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              5. SGK ve Personel Teşvikleri
            </a>

            <a
              href="#uzaktan"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              6. Uzaktan Çalışma Mümkün mü?
            </a>

            <a
              href="#projeler"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              7. Teknopark Proje Çeşitleri
            </a>

            <a
              href="#arge"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              8. Teknopark ve Ar-Ge Merkezi Farkı
            </a>

            <a
              href="#kollektif"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              9. Kollektif Şirket ile Teknopark
            </a>

            <a
              href="#kimler-basvurmali"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              10. Kimler Teknopark&apos;a Başvurmalı?
            </a>

            <a
              href="#sss"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              11. Sık Sorulan Sorular
            </a>

            <a
              href="#sonuc"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              12. Sonuç
            </a>

          </div>

        </div>


        {/* 1. TEKNOPARK NEDİR */}

        <section id="nedir" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Teknopark Nedir?
          </h2>

          <p className="mb-6 text-lg leading-9 text-gray-700">

            Teknoparklar, diğer adıyla Teknoloji Geliştirme Bölgeleri,
            Ar-Ge, inovasyon ve yazılım geliştirme faaliyetlerinin
            desteklendiği özel bölgelerdir.

          </p>

          <p className="mb-8 text-lg leading-9 text-gray-700">

            Teknoparkların temel amacı üniversiteler, Ar-Ge merkezleri ve
            özel sektör arasında güçlü bir köprü oluşturmak; teknolojik
            bilgi transferini teşvik etmek ve yenilikçi projelerin
            geliştirilmesini kolaylaştırmaktır.

          </p>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              Teknoparkların Temel Amaçları
            </h3>

            <ul className="space-y-4 text-lg text-gray-700">

              <li>✔ Ar-Ge faaliyetlerini desteklemek</li>

              <li>✔ Teknolojik ürün ve hizmet geliştirilmesini teşvik etmek</li>

              <li>✔ Üniversite-sanayi iş birliğini artırmak</li>

              <li>✔ Bilgi transferini kolaylaştırmak</li>

              <li>✔ Yenilikçi girişimlerin gelişimini desteklemek</li>

              <li>✔ Yüksek katma değerli üretimi teşvik etmek</li>

              <li>✔ İhracata dayalı teknoloji şirketlerinin gelişmesine katkı sağlamak</li>

            </ul>

          </div>

        </section>


        {/* 2. KİMLER */}

        <section id="kimler" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Teknopark&apos;a Başvurabilir?
          </h2>

          <p className="mb-8 text-lg leading-9 text-gray-700">

            Teknoparklar özellikle teknoloji, yazılım, Ar-Ge ve inovasyon
            faaliyetleri gerçekleştiren işletmeler için tasarlanmıştır.
            Kaynakta belirtilen bilgiler doğrultusunda minimum personel
            şartı bulunmaması, küçük girişimler açısından da önemli bir
            avantaj oluşturmaktadır.

          </p>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">

              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Teknopark İçin Uygun Yapılar
              </h3>

              <ul className="space-y-4 text-gray-700">

                <li>✔ Start-up&apos;lar</li>

                <li>✔ Kuluçka firmaları</li>

                <li>✔ Yazılım geliştiren şirketler</li>

                <li>✔ Teknoloji tabanlı girişimler</li>

                <li>✔ Şirketlerin yazılım departmanları</li>

                <li>✔ Grup şirketlerine yazılım veya hizmet geliştiren teknoloji şirketleri</li>

                <li>✔ Ticarileşebilir ürün geliştiren girişimler</li>

                <li>✔ Ar-Ge ve inovasyon faaliyeti yürüten şirketler</li>

              </ul>

            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">

              <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
                👥 Personel Şartı
              </h3>

              <p className="leading-8 text-gray-700">

                Kaynakta belirtilen bilgiye göre Teknopark&apos;a başvurmak
                için minimum çalışan sayısı bulunmamaktadır.

              </p>

              <div className="mt-6 rounded-xl bg-white p-6">

                <p className="text-lg font-bold text-[#071A2F]">
                  1 kişiyle dahi Teknopark başvurusu yapılabilir.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* 3. AVANTAJLAR */}

        <section id="avantajlar" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Teknopark&apos;a Girmenin Avantajları Nelerdir?
          </h2>

          <p className="mb-10 text-lg leading-9 text-gray-700">

            Teknopark yapılanmasının en önemli özelliklerinden biri,
            teknoloji geliştiren işletmelere yalnızca ofis alanı değil,
            aynı zamanda vergisel, finansal, operasyonel ve ekosistem
            avantajları sağlamasıdır.

          </p>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border bg-white p-7 shadow-sm">

              <div className="mb-4 text-4xl">💰</div>

              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
                Vergi Avantajları
              </h3>

              <p className="leading-7 text-gray-700">
                Teknopark kapsamında yürütülen faaliyetlerden doğan
                kazançlar bakımından kaynakta belirtilen vergi
                istisnalarından yararlanılabilir.
              </p>

            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm">

              <div className="mb-4 text-4xl">🧾</div>

              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
                KDV Avantajı
              </h3>

              <p className="leading-7 text-gray-700">
                Teknopark projesi kapsamında geliştirilen ve yazılım
                niteliği taşıyan ürünlerin satışında KDV avantajı
                sağlanabilir.
              </p>

            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm">

              <div className="mb-4 text-4xl">👨‍💻</div>

              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
                Personel Teşvikleri
              </h3>

              <p className="leading-7 text-gray-700">
                Ar-Ge ve bilişim personelinin ücretleri bakımından
                gelir vergisi istisnası ve SGK avantajlarından
                yararlanma imkânı bulunmaktadır.
              </p>

            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm">

              <div className="mb-4 text-4xl">🏢</div>

              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
                Ofis ve Altyapı
              </h3>

              <p className="leading-7 text-gray-700">
                Bazı Teknoparklarda kuluçka firmalarına düşük maliyetli
                veya ücretsiz ofis imkânları sunulabilmektedir.
              </p>

            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm">

              <div className="mb-4 text-4xl">🎓</div>

              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
                Akademik Ekosistem
              </h3>

              <p className="leading-7 text-gray-700">
                Üniversitelere, akademik bilgiye ve teknoloji ekosistemine
                erişim kolaylaşır.
              </p>

            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm">

              <div className="mb-4 text-4xl">🤝</div>

              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
                Network
              </h3>

              <p className="leading-7 text-gray-700">
                Şirketler teknoloji odaklı girişimlerin ve kurumların
                oluşturduğu ekosisteme dahil olma fırsatı yakalayabilir.
              </p>

            </div>

          </div>

        </section>


        {/* 4. VERGİLER */}

        <section id="vergiler" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Teknopark Vergi ve KDV Avantajları
          </h2>

          <p className="mb-8 text-lg leading-9 text-gray-700">

            Teknoparkların işletmeler açısından en dikkat çekici
            özelliklerinden biri vergisel avantajlarıdır. Kaynakta
            belirtilen başlıca avantajlar aşağıdaki şekilde
            özetlenmektedir.

          </p>

          <div className="space-y-6">

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">

              <h3 className="mb-4 text-2xl font-bold text-green-700">
                ✅ Gelir Vergisi / Kurumlar Vergisi Avantajı
              </h3>

              <p className="leading-8 text-gray-700">

                Teknopark projeleri kapsamında geliştirilen ürünlerden
                elde edilen kazançlar bakımından kaynakta gelir vergisi
                ve kurumlar vergisi istisnaları belirtilmektedir.

              </p>

            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                ✅ KDV İstisnası
              </h3>

              <p className="leading-8 text-gray-700">

                Teknopark projesi kapsamında geliştirilen ve yazılım
                niteliği taşıyan ürünlerin Türkiye içindeki satışlarında
                KDV avantajı bulunmaktadır.

              </p>

              <div className="mt-6 rounded-xl bg-white p-6">

                <p className="font-semibold text-[#071A2F]">
                  Önemli uygulama notu:
                </p>

                <p className="mt-3 leading-7 text-gray-700">

                  Proje kapsamında Teknopark yönetiminden ve sonrasında
                  vergi dairesinden alınan yazı ile yazılım satışlarında
                  KDV&apos;siz fatura kesilebileceği belirtilmektedir.

                </p>

              </div>

            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                ⚠️ KDV&apos;li ve KDV&apos;siz Faturalama
              </h3>

              <p className="leading-8 text-gray-700">

                Kaynakta aynı proje için KDV&apos;li ve KDV&apos;siz faturanın
                birlikte düzenlenemeyeceği belirtilmektedir. Bu nedenle
                projenin başlangıcında faturalama ve proje yapısının
                dikkatli planlanması önemlidir.

              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Diğer Vergisel Avantajlar
              </h3>

              <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">

                <li>Damga vergisi avantajı</li>

                <li>Ar-Ge projesi kapsamında KDV ve gümrük vergisi avantajları</li>

                <li>Teknopark projesine bağlı yazılım satışlarında KDV avantajı</li>

                <li>Proje kapsamında elde edilen kazançlar için vergi istisnası imkânları</li>

              </ul>

            </div>

          </div>

        </section>


        {/* 5. SGK */}

        <section id="sgk" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. SGK ve Personel Teşvikleri
          </h2>

          <p className="mb-8 text-lg leading-9 text-gray-700">

            Teknopark yapılanmasının şirketler açısından önemli
            avantajlarından biri de Ar-Ge personeli maliyetlerinin
            azaltılmasına yönelik teşviklerdir.

          </p>

          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">

            <h3 className="mb-6 text-2xl font-bold text-green-700">
              👨‍💻 Personel Ücretlerinde Gelir Vergisi İstisnası
            </h3>

            <p className="leading-8 text-gray-700">

              Kaynakta bilişim personelinin maaşlarından alınan gelir
              vergisi bakımından %100 istisna avantajı belirtilmektedir.

              Ar-Ge personelinin ücretleri bakımından da Teknopark
              kapsamında gelir vergisi istisnası uygulanabilmektedir.

            </p>

          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-8">

            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              🧾 SGK İşveren Hissesi
            </h3>

            <p className="leading-8 text-gray-700">

              Teknopark firmalarının Ar-Ge personeli için SGK prim
              teşviklerinden yararlanabileceği ve işveren hissesi
              bakımından destek sağlanabileceği belirtilmektedir.

            </p>

          </div>

        </section>


        {/* 6. UZAKTAN ÇALIŞMA */}

        <section id="uzaktan" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Teknopark&apos;ta Uzaktan Çalışmak Mümkün mü?
          </h2>

          <p className="mb-8 text-lg leading-9 text-gray-700">

            Evet. Kaynakta belirtilen uygulamaya göre Teknopark
            çalışanları açısından uzaktan çalışma imkânı bulunmaktadır.

          </p>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

              <div className="mb-5 text-5xl">💻</div>

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Yazılım / Bilişim Personeli
              </h3>

              <p className="text-3xl font-black text-orange-500">
                %100
              </p>

              <p className="mt-3 leading-7 text-gray-700">
                Uzaktan çalışma imkânı
              </p>

            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">

              <div className="mb-5 text-5xl">🏠</div>

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Diğer Teknik ve Destek Personeli
              </h3>

              <p className="text-3xl font-black text-orange-500">
                %75
              </p>

              <p className="mt-3 leading-7 text-gray-700">
                Uzaktan çalışma imkânı
              </p>

            </div>

          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              📌 Çalışma Modeli Nasıl Değerlendirilir?
            </h3>

            <p className="mb-5 leading-8 text-gray-700">

              Kaynakta bu oranların kişi bazında değil, proje bazında
              değerlendirildiği belirtilmektedir.

            </p>

            <div className="rounded-xl bg-gray-50 p-6">

              <p className="font-semibold text-[#071A2F]">
                Örnek:
              </p>

              <p className="mt-3 leading-8 text-gray-700">

                1 bilişim personeli tam zamanlı Teknopark&apos;ta çalışırken,
                4 yazılım personelinin evden çalışma yapabileceği örneği
                verilmektedir.

              </p>

            </div>

            <p className="mt-6 leading-8 text-gray-700">

              Ayrıca proje kapsamında DGS (Dışarıda Geçirilecek Süreler)
              başvurusu ile merkez ofisten veya müşteri ofisinden çalışma
              sürelerinin bu kuraldan bağımsız işletilebileceği
              belirtilmektedir.

            </p>

          </div>

        </section>


        {/* 7. PROJELER */}

        <section id="projeler" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Teknopark Proje Çeşitleri Nelerdir?
          </h2>

          <p className="mb-8 text-lg leading-9 text-gray-700">

            Teknopark yapılanmasında şirketlerin gerçekleştirdiği
            faaliyetlerin proje mantığıyla kurgulanması önemlidir.
            Kaynakta iki temel proje yaklaşımı öne çıkmaktadır.

          </p>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border bg-white p-8 shadow-sm">

              <div className="mb-5 text-5xl">🤝</div>

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Siparişe Dayalı Projeler
              </h3>

              <p className="leading-8 text-gray-700">

                Bir müşteri adına geliştirilen teknoloji, yazılım veya
                Ar-Ge çözümünün proje olarak tanımlandığı modeldir.

              </p>

            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm">

              <div className="mb-5 text-5xl">🚀</div>

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Çatı Projeler
              </h3>

              <p className="leading-8 text-gray-700">

                Şirketin kendi ürününü veya teknolojisini geliştirdiği
                proje modelidir.

              </p>

            </div>

          </div>

          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Siparişe Dayalı Projelerin Avantajı
            </h3>

            <p className="leading-8 text-gray-700">

              Kaynakta, müşteriyle yapılan proje sözleşmesi kapsamında
              siparişe dayalı bir proje tanımlanarak ilk aydan itibaren
              fatura kesilmesi ve teşviklerden yararlanılmasının mümkün
              olabileceği belirtilmektedir.

            </p>

          </div>

        </section>


        {/* 8. AR-GE MERKEZİ */}

        <section id="arge" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Teknopark ile Ar-Ge Merkezi Arasındaki Fark Nedir?
          </h2>

          <p className="mb-10 text-lg leading-9 text-gray-700">

            Teknopark ve Ar-Ge Merkezi aynı amaca hizmet eden yapılar
            değildir. Her iki modelin personel, proje ve teşvik yapısı
            bakımından farklı özellikleri bulunmaktadır.

          </p>

          <div className="overflow-hidden rounded-2xl border border-gray-200">

            <div className="grid md:grid-cols-2">

              <div className="bg-[#071A2F] p-8 text-white">

                <h3 className="mb-6 text-2xl font-bold">
                  Ar-Ge Merkezi
                </h3>

                <ul className="space-y-4 text-gray-200">

                  <li>• En az 15 personel zorunluluğu</li>

                  <li>• Doktora / yüksek lisans mezunu istihdam beklentisi</li>

                  <li>• Üniversite-sanayi iş birliği zorunluluğu</li>

                  <li>• Nitelikli Ar-Ge faaliyeti beklentisi</li>

                  <li>• Ar-Ge giderleri üzerinden teşviklendirme</li>

                  <li>• Yerinde Ar-Ge & Tasarım Merkezi modelinde giderlerin 1,5 kat üzerinden matrahtan indirim avantajı</li>

                  <li>• Gelir vergisi teşvikinin Teknoparklara göre daha düşük olduğu belirtilmektedir</li>

                </ul>

              </div>

              <div className="bg-orange-50 p-8">

                <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
                  Teknopark
                </h3>

                <ul className="space-y-4 text-gray-700">

                  <li>• Minimum personel sınırı yok</li>

                  <li>• Satışlar üzerinden teşviklendirme</li>

                  <li>• Yazılım satışlarında KDV avantajı</li>

                  <li>• Kurumlar vergisi avantajı</li>

                  <li>• Çalışan ücretlerinde %100 gelir vergisi istisnası</li>

                  <li>• Akademiye ve bilgiye kolay erişim</li>

                  <li>• Teknoloji ekosistemine ve network&apos;e dahil olma</li>

                </ul>

              </div>

            </div>

          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border">

            <table className="w-full">

              <thead className="bg-[#071A2F] text-white">

                <tr>

                  <th className="p-5 text-left">
                    Kriter
                  </th>

                  <th className="p-5 text-left">
                    Teknopark
                  </th>

                  <th className="p-5 text-left">
                    Ar-Ge Merkezi
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="p-5 font-semibold">
                    Personel
                  </td>

                  <td className="p-5">
                    Minimum sınır yok
                  </td>

                  <td className="p-5">
                    En az 15 personel
                  </td>

                </tr>

                <tr className="border-b">

                  <td className="p-5 font-semibold">
                    Teşvik yaklaşımı
                  </td>

                  <td className="p-5">
                    Satış odaklı
                  </td>

                  <td className="p-5">
                    Ar-Ge giderleri odaklı
                  </td>

                </tr>

                <tr className="border-b">

                  <td className="p-5 font-semibold">
                    Yazılım KDV avantajı
                  </td>

                  <td className="p-5">
                    Var
                  </td>

                  <td className="p-5">
                    Kaynakta belirtilmemiştir
                  </td>

                </tr>

                <tr>

                  <td className="p-5 font-semibold">
                    Ekosistem
                  </td>

                  <td className="p-5">
                    Üniversite ve teknoloji ekosistemi
                  </td>

                  <td className="p-5">
                    Üniversite-sanayi iş birliği
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>


        {/* 9. KOLLEKTİF */}

        <section id="kollektif" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Kollektif Şirket ile Teknopark&apos;a Girmek
          </h2>

          <p className="mb-6 text-lg leading-9 text-gray-700">

            Kollektif şirketler, Türk Ticaret Kanunu kapsamında yalnızca
            gerçek kişiler tarafından kurulabilen ve ortakların şirket
            borçlarına karşı sınırsız ve müteselsil sorumlu olduğu bir
            şirket türüdür.

          </p>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              Kollektif Şirketin Temel Özellikleri
            </h3>

            <ul className="space-y-4 text-lg text-gray-700">

              <li>✔ Tüzel kişiliğe sahiptir.</li>

              <li>✔ Ortakların sorumluluğu sınırsızdır.</li>

              <li>✔ Ortaklar aynı zamanda şirketin yöneticileridir.</li>

              <li>✔ Gelir Vergisi Kanunu kapsamında vergilendirilir.</li>

            </ul>

          </div>

          <p className="mt-8 text-lg leading-9 text-gray-700">

            Kaynakta kollektif şirketlerin mevzuat bakımından Teknopark
            yapılanmasına girmesine engel bulunmadığı belirtilmektedir.
            Bununla birlikte Teknopark yönetici şirketlerinin uygulamada
            sermaye şirketlerini daha sık tercih edebildiği ve bazı
            durumlarda limited şirkete dönüşüm talep edilebildiği
            aktarılmaktadır.

          </p>

          <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ Başvuru Öncesinde Dikkat
            </h3>

            <p className="leading-8 text-gray-700">

              Kollektif şirket yapısıyla başvuru yapılacaksa, başvuru
              öncesinde ilgili Teknopark yönetici şirketiyle görüşülmesi
              ve şirket yapısının kabul edilip edilmediğinin netleştirilmesi
              önemlidir.

            </p>

          </div>


          <div className="mt-10 overflow-hidden rounded-2xl border">

            <table className="w-full">

              <thead className="bg-[#071A2F] text-white">

                <tr>

                  <th className="p-5 text-left">
                    Kriter
                  </th>

                  <th className="p-5 text-left">
                    Kollektif Şirket
                  </th>

                  <th className="p-5 text-left">
                    Limited Şirket
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="p-5 font-semibold">
                    Kuruluş Maliyeti
                  </td>

                  <td className="p-5">
                    Daha düşük
                  </td>

                  <td className="p-5">
                    Orta düzeyde
                  </td>

                </tr>

                <tr className="border-b">

                  <td className="p-5 font-semibold">
                    Ortakların Sorumluluğu
                  </td>

                  <td className="p-5">
                    Sınırsız
                  </td>

                  <td className="p-5">
                    Sermaye ile sınırlı
                  </td>

                </tr>

                <tr className="border-b">

                  <td className="p-5 font-semibold">
                    Vergi İstisnası
                  </td>

                  <td className="p-5">
                    Ortaklara doğrudan yansır
                  </td>

                  <td className="p-5">
                    Şirket kazancı üzerinden
                  </td>

                </tr>

                <tr>

                  <td className="p-5 font-semibold">
                    Teknoparkta Tercih
                  </td>

                  <td className="p-5">
                    Nadir
                  </td>

                  <td className="p-5">
                    Yaygın
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>


        {/* 10. KİMLER BAŞVURMALI */}

        <section id="kimler-basvurmali" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Kimler Teknopark&apos;a Başvurmalı?
          </h2>

          <p className="mb-8 text-lg leading-9 text-gray-700">

            Teknopark yalnızca yeni kurulmuş teknoloji girişimleri için
            düşünülmemelidir. Mevcut şirketlerin içinde gerçekleştirilen
            yazılım, ürün geliştirme ve Ar-Ge faaliyetleri de doğru
            şekilde projelendirildiğinde Teknopark kapsamında
            değerlendirilebilecek bir potansiyel taşıyabilir.

          </p>

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-xl border p-6 shadow-sm">
              🚀 Start-up&apos;lar ve kuluçka firmaları
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              💻 Yazılım geliştiren şirketler
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              🏢 Şirketlerin yazılım departmanları
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              🤝 Grup şirketlerine teknoloji geliştiren şirketler
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              🧪 Ar-Ge faaliyeti yürüten şirketler
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              📈 Ticarileşebilir ürün geliştiren girişimler
            </div>

          </div>

          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Günlük İşler Ar-Ge Olabilir mi?
            </h3>

            <p className="leading-8 text-gray-700">

              Kaynakta birçok firmanın farkında olmadan Ar-Ge ve inovasyon
              faaliyeti yürüttüğü belirtilmektedir. Ürün geliştirme, süreç
              iyileştirme ve yazılım güncellemeleri gibi faaliyetler,
              uzman danışmanlıkla projelendirildiğinde teşvik kapsamına
              alınabilecek şekilde yapılandırılabilir.

            </p>

          </div>

        </section>


        {/* 11. SSS */}

        <section id="sss" className="mt-24 scroll-mt-24">

          <h2 className="mb-10 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            11. Sık Sorulan Sorular
          </h2>

          <div className="space-y-6">


            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Teknopark nedir?
              </h3>

              <p className="leading-8 text-gray-700">

                Teknoparklar; üniversiteler, Ar-Ge merkezleri ve özel
                sektör arasında köprü oluşturan, yenilikçi projelerin
                geliştirildiği ve teknoloji şirketlerinin çeşitli
                teşviklerden yararlanabildiği özel bölgelerdir.

              </p>

            </div>


            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Teknopark&apos;a girmek için kaç kişi çalıştırmak gerekir?
              </h3>

              <p className="leading-8 text-gray-700">

                Kaynakta minimum personel şartı olmadığı ve 1 kişiyle
                dahi başvuru yapılabileceği belirtilmektedir.

              </p>

            </div>


            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Teknopark&apos;ta uzaktan çalışmak mümkün mü?
              </h3>

              <p className="leading-8 text-gray-700">

                Evet. Kaynakta yazılım ve bilişim mezunu personel için
                %100, diğer teknik ve destek personel için %75 oranında
                uzaktan çalışma imkânı belirtilmektedir.

              </p>

            </div>


            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Teknopark&apos;ta KDV avantajı var mı?
              </h3>

              <p className="leading-8 text-gray-700">

                Teknopark projesi kapsamında geliştirilen ve yazılım
                niteliği taşıyan ürünlerin satışında KDV avantajı
                bulunmaktadır. Kaynakta bu uygulamanın gerekli yazılar
                alınarak yürütüldüğü belirtilmektedir.

              </p>

            </div>


            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Teknopark&apos;ta satış yapmadan teşvik alınabilir mi?
              </h3>

              <p className="leading-8 text-gray-700">

                Kaynakta teorik olarak mümkün olabileceği, ancak personel
                giderleri kadar fatura kesilmesinin önerildiği belirtilmektedir.
                Aksi durumda muhasebe kayıtlarında giderlerin aktiflenmesi
                ve vergi avantajı yaratması sınırlı olabilir.

              </p>

            </div>


            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Siparişe dayalı projelerde ilk aydan teşvik alınabilir mi?
              </h3>

              <p className="leading-8 text-gray-700">

                Kaynakta, müşteriyle yapılan proje sözleşmesi kapsamında
                siparişe dayalı bir proje tanımlanarak ilk aydan itibaren
                fatura kesilmesi ve teşviklerden faydalanılabileceği
                belirtilmektedir.

              </p>

            </div>


            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Kollektif şirket Teknopark&apos;a girebilir mi?
              </h3>

              <p className="leading-8 text-gray-700">

                Kaynakta kollektif şirketlerin Teknopark yapılanmasına
                girmesine mevzuat açısından engel bulunmadığı belirtilmektedir.
                Ancak uygulamada Teknopark yönetici şirketlerinin sermaye
                şirketlerini tercih edebileceği ve bazı durumlarda limited
                şirkete dönüşüm talep edebileceği aktarılmaktadır.

              </p>

            </div>


            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Teknopark mı Ar-Ge Merkezi mi daha avantajlı?
              </h3>

              <p className="leading-8 text-gray-700">

                Bu sorunun cevabı şirketin yapısına, personel sayısına,
                proje modeline ve teşviklerden nasıl yararlanmak istediğine
                göre değişir. Kaynakta Teknopark için minimum personel
                sınırı bulunmadığı, Ar-Ge Merkezi için ise en az 15 personel
                şartı olduğu belirtilmektedir.

              </p>

            </div>


            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Mevcut şirketimin yaptığı yazılım geliştirmeleri Teknopark
                projesi olabilir mi?
              </h3>

              <p className="leading-8 text-gray-700">

                Kaynakta ürün geliştirme, süreç iyileştirme ve yazılım
                güncellemeleri gibi faaliyetlerin uzman danışmanlıkla
                projelendirildiğinde teşvik kapsamına alınabileceği
                belirtilmektedir.

              </p>

            </div>

          </div>

        </section>


        {/* 12. SONUÇ */}

        <section id="sonuc" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            12. Sonuç: Teknopark Şirketiniz İçin Doğru Bir Model mi?
          </h2>

          <p className="mb-8 text-lg leading-9 text-gray-700">

            Teknoparklar, Türkiye&apos;de teknoloji, yazılım, Ar-Ge ve
            inovasyon faaliyetlerinin geliştirilmesi açısından önemli
            bir ekosistem sunmaktadır.

          </p>

          <p className="mb-8 text-lg leading-9 text-gray-700">

            Teknopark yapılanmasının avantajı yalnızca vergi istisnalarından
            ibaret değildir. Vergisel avantajların yanında personel
            maliyetlerinin azaltılması, uzaktan çalışma imkânı, akademik
            bilgiye erişim, üniversite-sanayi iş birliği ve teknoloji
            ekosistemine dahil olma gibi birçok farklı fırsat bulunmaktadır.

          </p>

          <div className="rounded-3xl bg-[#071A2F] p-10 text-white">

            <h3 className="mb-6 text-3xl font-bold">
              Şirketinizin Ar-Ge Potansiyelini Birlikte Değerlendirelim
            </h3>

            <p className="mb-8 text-lg leading-8 text-gray-300">

              Şirketinizde gerçekleştirilen yazılım, ürün geliştirme,
              süreç iyileştirme veya Ar-Ge faaliyetlerinin Teknopark
              kapsamında değerlendirilip değerlendirilemeyeceğini,
              hangi proje modelinin daha uygun olduğunu ve teşvik
              potansiyelini birlikte değerlendirebiliriz.

            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/#contact"
                className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                İletişime Geç
              </Link>

              <Link
                href="/#blog"
                className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
              >
                Diğer Yazılar
              </Link>

            </div>

          </div>

        </section>

      </section>

    </main>
  );
}