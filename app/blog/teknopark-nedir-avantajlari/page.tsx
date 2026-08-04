import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Teknopark Nedir? Avantajları, Vergi İstisnaları ve Başvuru Rehberi | Koray Akdağ",
  description:
    "Teknopark nedir, kimler başvurabilir, hangi vergi ve SGK avantajları sağlanır, mevcut şirket ve çalışanlar teknoparka aktarılabilir mi, uzaktan çalışma ve KDV istisnası nasıl uygulanır?",
  keywords: [
    "Teknopark nedir",
    "Teknopark avantajları",
    "Teknopark vergi istisnası",
    "Teknopark KDV istisnası",
    "Teknopark SGK teşviki",
    "Teknopark başvurusu",
    "Teknopark şirket kuruluşu",
    "Teknopark uzaktan çalışma",
    "Teknopark yazılım",
    "Teknopark Ar-Ge",
    "Kollektif şirket Teknopark",
    "Teknopark 4691",
  ],
};

export default function TeknoparkPage() {
  return (
    <main className="bg-white text-gray-700">

      {/* HERO */}

      <section className="relative h-[520px] overflow-hidden">

        <Image
          src="/teknopark-kapak.png"
          alt="Teknopark ve Ar-Ge"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">

          <div className="mx-auto w-full max-w-6xl px-6">

            <div className="mb-6">

              <Link
                href="/blog"
                className="text-orange-400 hover:text-orange-300"
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

            <h1 className="mt-8 max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Teknopark Nedir? Avantajları, Vergi İstisnaları ve Başvuru Rehberi
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-200">
              Teknoparka kimler girebilir, mevcut şirket ve çalışanlar
              teknoparka nasıl aktarılabilir, hangi vergi ve SGK avantajları
              sağlanır, uzaktan çalışma mümkün müdür ve KDV istisnası nasıl
              uygulanır? Tüm önemli detayları tek bir rehberde inceleyelim.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-5xl px-6 py-16">

        {/* GİRİŞ */}

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            Teknopark Nedir?
          </h2>

          <p className="text-lg leading-9">
            Türkiye’de teknolojik üretimi teşvik etmek, üniversite-sanayi
            iş birliğini desteklemek ve yüksek katma değerli projelerin önünü
            açmak amacıyla kurulan teknoparklar, özellikle yazılım, Ar-Ge ve
            inovasyon odaklı şirketler açısından önemli fırsatlar sunmaktadır.
          </p>

          <p className="mt-6 text-lg leading-9">
            Teknoparklar yalnızca bir ofis alanı değildir. Şirketlerin Ar-Ge
            ve yazılım faaliyetlerini belirli bir proje yapısı içerisinde
            yürütmesine, nitelikli insan kaynağına ulaşmasına, üniversitelerle
            iş birliği geliştirmesine ve mevzuatın öngördüğü teşviklerden
            yararlanmasına imkân sağlayan özel bir ekosistemdir.
          </p>

        </div>

        {/* İÇİNDEKİLER */}

        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <a href="#nedir" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              1. Teknopark Nedir?
            </a>

            <a href="#kimler" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              2. Kimler Teknoparka Başvurabilir?
            </a>

            <a href="#avantajlar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              3. Teknoparkın Avantajları Nelerdir?
            </a>

            <a href="#mevcut-sirket" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              4. Mevcut Şirket Teknoparka Girebilir mi?
            </a>

            <a href="#ofis" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              5. Teknoparkta Özel Ofis Kiralanabilir mi?
            </a>

            <a href="#uzaktan" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              6. Teknoparkta Uzaktan Çalışma
            </a>

            <a href="#kdv" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              7. KDV İstisnası Nasıl Uygulanır?
            </a>

            <a href="#projeler" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              8. Teknopark Proje Çeşitleri
            </a>

            <a href="#kollektif" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              9. Kollektif Şirket ile Teknoparka Girmek
            </a>

            <a href="#arge-merkezi" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              10. Teknopark mı Ar-Ge Merkezi mi?
            </a>

            <a href="#sss" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              11. Sık Sorulan Sorular
            </a>

            <a href="#sonuc" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
              12. Sonuç
            </a>

          </div>

        </div>

        {/* 1 */}

        <section id="nedir" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Teknopark Nedir?
          </h2>

          <p className="mb-6 text-lg leading-9">
            Teknoparklar, 4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu
            kapsamında oluşturulan ve Ar-Ge, inovasyon, teknoloji geliştirme
            ve yazılım faaliyetlerinin desteklendiği özel bölgelerdir.
          </p>

          <p className="mb-6 text-lg leading-9">
            Temel amaç; üniversiteler, araştırma kurumları ve özel sektör
            arasında bilgi ve teknoloji transferini kolaylaştırmak, yenilikçi
            projelerin geliştirilmesini sağlamak ve yüksek katma değerli
            ürünlerin ticarileşmesini desteklemektir.
          </p>

          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Teknoparkların Temel Amaçları
            </h3>

            <ul className="ml-6 list-disc space-y-3 marker:text-orange-500">

              <li>Ar-Ge faaliyetlerini desteklemek</li>

              <li>Yazılım ve teknoloji geliştirilmesini teşvik etmek</li>

              <li>Üniversite-sanayi iş birliğini geliştirmek</li>

              <li>Bilgi ve teknoloji transferini hızlandırmak</li>

              <li>Girişimcilerin gelişmesini desteklemek</li>

              <li>Teknolojik ürünlerin ticarileşmesini kolaylaştırmak</li>

              <li>İhracata ve yüksek katma değerli üretime katkı sağlamak</li>

            </ul>

          </div>

        </section>

        {/* 2 */}

        <section id="kimler" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Teknoparka Başvurabilir?
          </h2>

          <p className="mb-8 text-lg leading-9">
            Teknoparklar yalnızca büyük teknoloji şirketleri için değildir.
            Özellikle teknoloji geliştiren küçük şirketler, start-up’lar ve
            Ar-Ge faaliyetleri bulunan işletmeler için de önemli fırsatlar
            sunmaktadır.
          </p>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">

              <h3 className="mb-5 text-2xl font-bold text-green-700">
                Kimler Başvurmalı?
              </h3>

              <ul className="ml-6 list-disc space-y-3">

                <li>Start-up ve kuluçka firmaları</li>

                <li>Yazılım geliştiren şirketler</li>

                <li>Teknoloji şirketleri</li>

                <li>Şirketlerin yazılım departmanları</li>

                <li>Grup şirketlerine yazılım veya teknoloji geliştiren firmalar</li>

                <li>Ticarileşebilir ürün geliştiren işletmeler</li>

                <li>Ar-Ge ve inovasyon projesi bulunan girişimciler</li>

              </ul>

            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                Minimum Personel Şartı Var mı?
              </h3>

              <p className="leading-8">
                Teknoparka başvurmak için genel olarak belirli bir minimum
                çalışan sayısının bulunması şart değildir. Bir kişiyle dahi
                teknopark başvurusu yapılabilmesi, küçük girişimler açısından
                önemli bir avantaj oluşturmaktadır.
              </p>

            </div>

          </div>

        </section>

        {/* 3 */}

        <section id="avantajlar" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Teknoparka Girmenin Avantajları Nelerdir?
          </h2>

          <p className="mb-10 text-lg leading-9">
            Teknoparkların en önemli avantajı yalnızca ofis veya çalışma
            ortamı sağlamak değildir. Ar-Ge ve yazılım faaliyetlerinin
            mevzuata uygun şekilde yürütülmesi halinde önemli vergi, SGK ve
            operasyonel avantajlar ortaya çıkabilmektedir.
          </p>

          <div className="space-y-8">

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                ✅ Gelir Vergisi İstisnası
              </h3>

              <p className="leading-8">
                Teknopark kapsamında yürütülen uygun yazılım, Ar-Ge ve
                inovasyon faaliyetlerinden elde edilen kazançlar için mevzuatta
                öngörülen gelir vergisi ve kurumlar vergisi istisnaları
                uygulanabilmektedir.
              </p>

            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                ✅ Çalışan Ücretlerinde Gelir Vergisi İstisnası
              </h3>

              <p className="leading-8">
                Teknopark bünyesinde çalışan uygun Ar-Ge, yazılım ve destek
                personelinin ücretleri bakımından gelir vergisi istisnası
                uygulanabilmektedir. Bu durum özellikle yüksek nitelikli
                teknik personel çalıştıran şirketlerin personel maliyetlerini
                önemli ölçüde etkileyebilir.
              </p>

            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                ✅ %100 KDV İstisnası
              </h3>

              <p className="leading-8">
                Teknopark kapsamında geliştirilen ve mevzuatta belirtilen
                şartları sağlayan uygun yazılım teslim ve hizmetlerinde
                <strong> %100 KDV istisnası </strong>
                uygulanabilir.
              </p>

              <p className="mt-5 leading-8">
                Ancak burada önemli bir ayrım vardır: KDV istisnası şirketin
                bütün cirosuna otomatik olarak uygulanmaz. İstisna, şartları
                sağlayan uygun faaliyetlerden elde edilen gelirlere
                uygulanır.
              </p>

              <ul className="mt-5 ml-6 list-disc space-y-3 marker:text-orange-500">

                <li>Yazılım lisans satışları</li>

                <li>Uygun yazılım geliştirme faaliyetleri</li>

                <li>Mevzuatta belirtilen teslim ve hizmetler</li>

              </ul>

            </div>

            <div className="rounded-2xl border border-purple-200 bg-purple-50 p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                ✅ SGK İşveren Hissesi Desteği
              </h3>

              <p className="leading-8">
                Uygun personel için SGK işveren hissesi bakımından destek ve
                teşviklerden yararlanılması mümkündür. Bu destek, Ar-Ge ve
                yazılım personelinin toplam işveren maliyetinin azaltılmasına
                katkı sağlayabilir.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                ✅ Ofis ve Ekosistem Avantajları
              </h3>

              <ul className="ml-6 list-disc space-y-3 marker:text-orange-500">

                <li>Daha uygun maliyetli ofis seçenekleri</li>

                <li>Kuluçka imkanları</li>

                <li>Üniversitelere ve akademik bilgiye erişim</li>

                <li>Teknoloji şirketleriyle network oluşturma</li>

                <li>Yatırımcı ve girişimcilik ekosistemine erişim</li>

                <li>Ortak proje geliştirme fırsatları</li>

              </ul>

            </div>

          </div>

        </section>

        {/* 4 */}

        <section id="mevcut-sirket" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Mevcut Teknoloji Şirketi Teknoparka Girebilir mi?
          </h2>

          <p className="mb-6 text-lg leading-9">
            Teknoparka girmek isteyen bir şirketin mutlaka sıfırdan yeni bir
            şirket kurması gerektiği düşüncesi doğru değildir.
          </p>

          <p className="mb-6 text-lg leading-9">
            Mevcut teknoloji şirketleri, faaliyetlerinin teknopark kapsamındaki
            Ar-Ge, yazılım veya inovasyon faaliyetlerine uygun olması halinde
            teknopark yapılanmasına dahil olabilir.
          </p>

          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-green-700">
              Mevcut Personeller de Aktarılabilir mi?
            </h3>

            <p className="leading-8">
              Evet. Şirketin mevcut personellerinin teknopark faaliyetlerinde
              görev alması mümkündür. Bunun için her personelin görev ve
              çalışma şeklinin ilgili proje ve teknopark kurallarıyla uyumlu
              şekilde planlanması gerekir.
            </p>

            <p className="mt-5 leading-8">
              Şirket yeni bir tüzel kişilik kurmak yerine mevcut şirketi
              üzerinden teknopark yapılanmasına girebilir ve yeni bir şube
              açarak mevcut personellerini de bu yapıya dahil edebilir.
            </p>

          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">

            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Önemli Nokta
            </h3>

            <p className="leading-8">
              Burada belirleyici olan yalnızca şirketin teknoloji şirketi
              olması değildir. Teknoparka taşınacak faaliyetlerin Ar-Ge,
              yazılım veya inovasyon niteliği taşıması ve ilgili projenin
              teknopark yönetici şirketi tarafından kabul edilmesi gerekir.
            </p>

          </div>

        </section>

        {/* 5 */}

        <section id="ofis" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Teknoparkta Firmaya Özel Bağımsız Ofis Kiralanabilir mi?
          </h2>

          <p className="mb-6 text-lg leading-9">
            Teknopark denildiğinde yalnızca ortak çalışma alanları veya
            kuluçka ofisleri düşünülmemelidir.
          </p>

          <p className="mb-8 text-lg leading-9">
            Teknoparklarda firmalara özel, bağımsız giriş kapısı bulunan ve
            şirketin kendi çalışanlarının kullanımına ayrılan ofis alanları
            da bulunabilir.
          </p>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Ar-Ge Ofisi Kiralanabilir
            </h3>

            <p className="leading-8">
              Şirketin ihtiyacına uygun olarak Ar-Ge ofisi kiralanması halinde
              bu alan firma için özel olarak tahsis edilebilir. Dolayısıyla
              teknoparka giren her şirketin mutlaka toplu çalışma alanında
              masa kiralaması gerektiği düşüncesi doğru değildir.
            </p>

          </div>

          <p className="mt-8 text-lg leading-9">
            Ofis seçimi yapılırken şirketin çalışan sayısı, proje yapısı,
            laboratuvar veya ekipman ihtiyacı, müşteri toplantıları ve
            teknoparkın sunduğu fiziksel imkanlar birlikte değerlendirilmelidir.
          </p>

        </section>

        {/* 6 */}

        <section id="uzaktan" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Teknoparkta Ofise Girme Mecburiyeti Var mı?
          </h2>

          <p className="mb-8 text-lg leading-9">
            Teknopark şirketlerinde çalışma modelinin tamamen ofis merkezli
            olması gerekmeyebilir. Özellikle yazılım ve bilişim faaliyetlerinin
            niteliği nedeniyle uzaktan çalışma imkanları önemli bir esneklik
            sağlamaktadır.
          </p>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">

              <h3 className="mb-5 text-2xl font-bold text-green-700">
                💻 Bilişim Mezunları
              </h3>

              <p className="leading-8">
                Bilişim alanında uygun mezuniyete sahip personeller için
                <strong> %100 uzaktan çalışma </strong>
                imkanı bulunabilir.
              </p>

            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">

              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🏢 Diğer Personeller
              </h3>

              <p className="leading-8">
                İlgili bilişim mezuniyet şartlarını taşımayan personeller
                bakımından aylık toplam çalışma süresinin
                <strong> %25'inin teknopark içerisinde </strong>
                geçirilmesi gerektiği belirtilmektedir.
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Dışarıda Geçirilecek Süreler
            </h3>

            <p className="leading-8">
              Proje kapsamında gerekli olması halinde DGS (Dışarıda
              Geçirilecek Süreler) başvuruları ile merkez ofisten veya müşteri
              ofisinden gerçekleştirilen çalışma süreleri de ayrıca
              değerlendirilebilir.
            </p>

          </div>

        </section>

        {/* 7 */}

        <section id="kdv" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Teknoparkta KDV İstisnası Nasıl Uygulanır?
          </h2>

          <p className="mb-6 text-lg leading-9">
            Teknoparkların en çok merak edilen avantajlarından biri KDV
            istisnasıdır. Ancak bu konuda en sık yapılan hata, şirketin
            teknoparka girdiği anda bütün satışlarının otomatik olarak
            KDV'den muaf olduğunu düşünmektir.
          </p>

          <div className="rounded-2xl border border-orange-300 bg-orange-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              %100 KDV İstisnası Ne Anlama Geliyor?
            </h3>

            <p className="leading-8">
              KDV istisnası, şartları sağlayan uygun faaliyetlerden elde
              edilen gelirler bakımından uygulanır. Yani şirketin bütün
              cirosu otomatik olarak KDV istisnasına girmez.
            </p>

          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Örnek: 100.000 Dolar Ciro Yapan Şirket
            </h3>

            <p className="leading-8">
              Bir şirketin teknoparka girdikten sonra 100.000 dolar ciro
              yaptığını düşünelim. Bu cironun tamamı otomatik olarak KDV'den
              istisna değildir.
            </p>

            <p className="mt-5 leading-8">
              KDV istisnası; yazılım lisans satışı, uygun yazılım geliştirme
              faaliyetleri ve mevzuatta belirtilen teslim ve hizmetlerden
              elde edilen gelirler için, ilgili şartların sağlanması halinde
              uygulanabilir.
            </p>

          </div>

          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-red-700">
              ⚠️ Ciro Sınırı Var mı?
            </h3>

            <p className="leading-8">
              Burada temel konu yalnızca cironun büyüklüğü değildir. KDV
              istisnasının uygulanıp uygulanmayacağı, gelirin hangi faaliyetten
              elde edildiği ve ilgili istisna şartlarının sağlanıp
              sağlanmadığına göre değerlendirilir.
            </p>

            <p className="mt-5 leading-8">
              Bu nedenle yüksek ciro yapan bir şirketin tüm faturalarını
              otomatik olarak KDV'siz düzenleyebileceği düşünülmemelidir.
            </p>

          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              KDV'siz Fatura Süreci
            </h3>

            <p className="leading-8">
              Uygun projenin teknopark yönetimi tarafından kabul edilmesi ve
              gerekli yazışmaların tamamlanmasının ardından, ilgili
              faaliyetlere ilişkin KDV istisnasının uygulanması mümkün
              olabilir.
            </p>

            <p className="mt-5 leading-8">
              Bu nedenle şirketin daha proje başlangıcında hangi gelirlerin
              KDV istisnası kapsamında değerlendirileceğini netleştirmesi
              önemlidir.
            </p>

          </div>

        </section>

        {/* 8 */}

        <section id="projeler" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Teknopark Proje Çeşitleri Nelerdir?
          </h2>

          <p className="mb-8 text-lg leading-9">
            Teknoparkta yürütülecek çalışmaların proje yapısının doğru
            kurgulanması önemlidir. Özellikle yazılım şirketlerinde iki temel
            proje modeli öne çıkmaktadır.
          </p>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border bg-white p-8 shadow-sm">

              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                1. Siparişe Dayalı Projeler
              </h3>

              <p className="leading-8">
                Bir müşteri için özel olarak geliştirilen yazılım veya
                teknoloji çözümünün Ar-Ge niteliği taşıması halinde proje
                yapısı bu model üzerinden kurgulanabilir.
              </p>

              <p className="mt-5 leading-8">
                Bu modelde müşteriyle yapılan proje sözleşmesi, teknik
                kapsam ve geliştirilecek çözüm önem taşır.
              </p>

            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm">

              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                2. Kendi Ürününü Geliştirme Projesi
              </h3>

              <p className="leading-8">
                Şirketin kendi ürününü, yazılımını veya teknoloji çözümünü
                geliştirdiği çatı projeler de teknopark yapılanmasının önemli
                bir parçasıdır.
              </p>

              <p className="mt-5 leading-8">
                Özellikle SaaS, yapay zekâ, yazılım platformları ve
                teknoloji tabanlı ürünler geliştiren girişimler için bu model
                stratejik önem taşır.
              </p>

            </div>

          </div>

        </section>

        {/* 9 */}

        <section id="kollektif" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Kollektif Şirket ile Teknoparka Girmek
          </h2>

          <p className="mb-6 text-lg leading-9">
            Teknoparklar denildiğinde genellikle anonim ve limited şirketler
            akla gelmektedir. Ancak kollektif şirket yapısı da bazı girişimler
            açısından değerlendirilebilecek alternatiflerden biridir.
          </p>

          <h3 className="mb-5 mt-10 text-2xl font-bold text-[#071A2F]">
            Kollektif Şirket Nedir?
          </h3>

          <p className="mb-8 text-lg leading-9">
            Kollektif şirketler, yalnızca gerçek kişiler tarafından
            kurulabilen ve ortakların şirket borçlarına karşı sınırsız ve
            müteselsil sorumluluğunun bulunduğu şirket türüdür.
          </p>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border bg-gray-50 p-8">

              <h3 className="mb-5 text-xl font-bold">
                Temel Özellikleri
              </h3>

              <ul className="ml-6 list-disc space-y-3">

                <li>Tüzel kişiliğe sahiptir.</li>

                <li>Ortakların sorumluluğu sınırsızdır.</li>

                <li>Ortaklar aynı zamanda şirketin yöneticileridir.</li>

                <li>Gelir Vergisi Kanunu kapsamında vergilendirilir.</li>

              </ul>

            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">

              <h3 className="mb-5 text-xl font-bold text-green-700">
                Neden Değerlendirilebilir?
              </h3>

              <ul className="ml-6 list-disc space-y-3">

                <li>Daha düşük kuruluş maliyeti</li>

                <li>Ortaklara doğrudan yansıyan gelir vergisi yapısı</li>

                <li>Uygun faaliyetlerde teknopark teşviklerinden yararlanma imkanı</li>

                <li>Küçük ortaklı girişimler için alternatif yapı</li>

              </ul>

            </div>

          </div>

          <div className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Kollektif Şirket mi, Limited Şirket mi?
            </h3>

            <div className="overflow-x-auto">

              <table className="w-full min-w-[650px]">

                <thead className="bg-[#071A2F] text-white">

                  <tr>

                    <th className="p-4 text-left">Kriter</th>

                    <th className="p-4 text-left">Kollektif Şirket</th>

                    <th className="p-4 text-left">Limited Şirket</th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-b bg-white">

                    <td className="p-4 font-semibold">Kuruluş Maliyeti</td>

                    <td className="p-4">Daha düşük</td>

                    <td className="p-4">Orta düzeyde</td>

                  </tr>

                  <tr className="border-b bg-white">

                    <td className="p-4 font-semibold">Ortak Sorumluluğu</td>

                    <td className="p-4">Sınırsız</td>

                    <td className="p-4">Sermaye ile sınırlı</td>

                  </tr>

                  <tr className="border-b bg-white">

                    <td className="p-4 font-semibold">Teknopark Tercihi</td>

                    <td className="p-4">Daha nadir</td>

                    <td className="p-4">Daha yaygın</td>

                  </tr>

                  <tr className="bg-white">

                    <td className="p-4 font-semibold">Yatırım Alma</td>

                    <td className="p-4">Daha sınırlı</td>

                    <td className="p-4">Daha uygun</td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          <p className="mt-8 text-lg leading-9">
            Özellikle birkaç ortakla çalışan, başlangıç maliyetlerini düşük
            tutmak isteyen ve yatırımcıya açılma planı bulunmayan girişimler
            açısından kollektif yapı değerlendirilebilir. Buna karşılık hızlı
            büyüme, yatırım alma veya ortaklık yapısının genişletilmesi
            planlanıyorsa limited şirket daha stratejik olabilir.
          </p>

        </section>

        {/* 10 */}

        <section id="arge-merkezi" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Teknopark mı, Ar-Ge Merkezi mi?
          </h2>

          <p className="mb-8 text-lg leading-9">
            Teknoloji geliştiren şirketlerin önünde yalnızca teknopark
            seçeneği bulunmamaktadır. Belirli büyüklüğe ulaşan şirketler
            açısından Ar-Ge Merkezi modeli de değerlendirilebilir. Ancak iki
            yapının şartları ve teşvik mekanizmaları birbirinden farklıdır.
          </p>

          <div className="overflow-x-auto rounded-2xl border">

            <table className="w-full min-w-[750px]">

              <thead className="bg-[#071A2F] text-white">

                <tr>

                  <th className="p-5 text-left">Kriter</th>

                  <th className="p-5 text-left">Teknopark</th>

                  <th className="p-5 text-left">Ar-Ge Merkezi</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="p-5 font-semibold">Personel</td>

                  <td className="p-5">Genel minimum personel şartı yok</td>

                  <td className="p-5">En az 15 personel şartı</td>

                </tr>

                <tr className="border-b">

                  <td className="p-5 font-semibold">Satış Teşviki</td>

                  <td className="p-5">Uygun satışlarda KDV ve kurumlar vergisi avantajları</td>

                  <td className="p-5">Ar-Ge giderleri üzerinden teşvik</td>

                </tr>

                <tr className="border-b">

                  <td className="p-5 font-semibold">Üniversite Ekosistemi</td>

                  <td className="p-5">Güçlü erişim imkanı</td>

                  <td className="p-5">Üniversite-sanayi iş birliği beklentisi</td>

                </tr>

                <tr>

                  <td className="p-5 font-semibold">Uzaktan Çalışma</td>

                  <td className="p-5">Belirli şartlarla esnek</td>

                  <td className="p-5">Mevzuat ve merkez yapısına göre</td>

                </tr>

              </tbody>

            </table>

          </div>

          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">

            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              Hangi Şirket İçin Hangisi?
            </h3>

            <p className="leading-8">
              Küçük ve orta ölçekli teknoloji şirketleri, yazılım firmaları
              ve start-up'lar için teknopark modeli genellikle daha erişilebilir
              bir başlangıç noktasıdır. Personel sayısı, Ar-Ge bütçesi ve
              kurumsal yapısı büyüyen şirketler için ise Ar-Ge Merkezi modeli
              ayrıca analiz edilmelidir.
            </p>

          </div>

        </section>

        {/* 11 SSS */}

        <section id="sss" className="mt-24 scroll-mt-24">

          <h2 className="mb-10 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            11. Sık Sorulan Sorular
          </h2>

          <div className="space-y-6">

            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                1. Firma, mevcut teknoloji şirketiyle teknoparka girebilir mi?
              </h3>

              <p className="leading-8">
                Evet. Teknoparka girmek için her durumda yeni bir şirket
                kurulması gerekmez. Mevcut teknoloji şirketi, faaliyetlerinin
                uygun olması halinde yeni bir şube açarak teknopark yapılanmasına
                dahil olabilir ve mevcut personellerini de bu yapıya
                aktarabilir.
              </p>

            </div>

            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                2. Teknoparkta firmaya özel bağımsız ofis kiralanabilir mi?
              </h3>

              <p className="leading-8">
                Evet. Teknoparklarda yalnızca ortak çalışma alanları bulunmaz.
                Firmaya özel, bağımsız kapısı olan ve şirketin kendi
                çalışanlarına tahsis edilen Ar-Ge ofisleri de bulunabilir.
              </p>

            </div>

            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                3. Teknoparkta yeni şirket kurulduğunda ofise girme mecburiyeti var mı?
              </h3>

              <p className="leading-8">
                Çalışanların niteliğine ve ilgili çalışma kurallarına göre
                uzaktan çalışma mümkündür. Bilişim mezuniyetine sahip uygun
                personeller %100 uzaktan çalışabilirken, bu kapsamda olmayan
                personellerin aylık toplam çalışma süresinin %25'ini teknopark
                içerisinde geçirmesi gerekir.
              </p>

            </div>

            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                4. Teknoparkta 100.000 dolar ciro yapan şirket bütün satışlarını KDV'siz mi keser?
              </h3>

              <p className="leading-8">
                Hayır. KDV istisnası şirketin tüm cirosuna otomatik olarak
                uygulanmaz. Şartları sağlayan uygun faaliyetlerden elde edilen
                gelirlere uygulanır. Yazılım lisans satışı, uygun yazılım
                geliştirme faaliyetleri ve mevzuatta belirtilen teslim ve
                hizmetler bu kapsamda değerlendirilebilir.
              </p>

            </div>

            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                5. KDV istisnasında ciro sınırı var mı?
              </h3>

              <p className="leading-8">
                Değerlendirme yalnızca ciro büyüklüğü üzerinden yapılmaz.
                Esas olarak gelirin hangi faaliyetten elde edildiği ve ilgili
                KDV istisnası şartlarının sağlanıp sağlanmadığı önemlidir.
              </p>

            </div>

            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                6. Teknoparka girmek için minimum kaç çalışan gerekir?
              </h3>

              <p className="leading-8">
                Teknoparka başvuru açısından genel bir minimum personel
                zorunluluğu bulunmadığı belirtilmektedir. Bir kişiyle dahi
                başvuru yapılabilmesi küçük girişimler için önemli bir avantajdır.
              </p>

            </div>

            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                7. Yazılım şirketleri teknoparka girebilir mi?
              </h3>

              <p className="leading-8">
                Evet. Yazılım şirketleri teknopark ekosisteminin en önemli
                kullanıcı gruplarından biridir. Ancak geliştirilen faaliyet
                veya projenin teknopark mevzuatı kapsamında uygun nitelikte
                olması gerekir.
              </p>

            </div>

            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                8. Kollektif şirket teknoparka girebilir mi?
              </h3>

              <p className="leading-8">
                Kollektif şirket yapısı da teknopark açısından
                değerlendirilebilecek alternatiflerden biridir. Ancak yönetici
                şirketin kabul kriterleri ve şirketin proje/faaliyet yapısı
                ayrıca değerlendirilmelidir.
              </p>

            </div>

            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                9. Teknoparkta sadece ortak çalışma alanı mı kiralanabilir?
              </h3>

              <p className="leading-8">
                Hayır. Teknoparklarda firmaya özel bağımsız Ar-Ge ofisleri
                de bulunabilir. Şirket ihtiyacına göre özel ofis tercih
                edilebilir.
              </p>

            </div>

            <div className="rounded-2xl border p-8">

              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                10. Teknopark ile Ar-Ge Merkezi arasındaki temel fark nedir?
              </h3>

              <p className="leading-8">
                Teknoparklarda genel minimum personel şartı bulunmaz ve
                özellikle yazılım şirketleri açısından satış, KDV ve diğer
                teşvik mekanizmaları önem taşır. Ar-Ge Merkezlerinde ise
                personel sayısı, Ar-Ge yapılanması ve kurumsal kriterler daha
                farklıdır.
              </p>

            </div>

          </div>

        </section>

        {/* 12 SONUÇ */}

        <section id="sonuc" className="mt-24 scroll-mt-24">

          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            12. Sonuç: Teknopark Şirketiniz İçin Doğru Bir Yapı mı?
          </h2>

          <p className="mb-6 text-lg leading-9">
            Teknoparklar, yalnızca yeni kurulmuş teknoloji girişimleri için
            değil; mevcut teknoloji şirketleri, yazılım ekipleri, start-up'lar
            ve Ar-Ge faaliyetlerini geliştirmek isteyen işletmeler için de
            önemli fırsatlar sunmaktadır.
          </p>

          <p className="mb-6 text-lg leading-9">
            Mevcut şirketin yeni bir tüzel kişilik kurmadan şube açarak
            teknopark yapılanmasına dahil olması, mevcut personellerin
            projelere aktarılması, firmaya özel bağımsız Ar-Ge ofisi
            kiralanabilmesi ve belirli şartlarda uzaktan çalışma imkanları
            teknopark modelinin operasyonel açıdan da esnek olduğunu
            göstermektedir.
          </p>

          <p className="mb-10 text-lg leading-9">
            Bunun yanında gelir vergisi, kurumlar vergisi, KDV, SGK ve diğer
            teşvikler şirketin maliyet yapısında önemli farklılıklar
            oluşturabilir. Ancak bu avantajların tamamının otomatik olarak
            uygulanmadığını özellikle vurgulamak gerekir. Projenin niteliği,
            gelir kalemleri, çalışanların görevleri ve ilgili mevzuat
            şartları birlikte değerlendirilmelidir.
          </p>

          <div className="rounded-3xl bg-[#071A2F] p-10 text-white">

            <h3 className="mb-5 text-3xl font-bold">
              Şirketiniz İçin Teknopark Fırsatlarını Birlikte Değerlendirelim
            </h3>

            <p className="mb-8 text-lg leading-8 text-gray-300">
              Mevcut şirketinizle teknoparka girip giremeyeceğinizi,
              faaliyetlerinizin Ar-Ge ve yazılım projesine nasıl
              dönüştürülebileceğini, ofis ve personel yapınızı ve
              yararlanabileceğiniz teşvikleri birlikte değerlendirebiliriz.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/iletisim"
                className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                İletişime Geç
              </Link>

              <Link
                href="/blog"
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