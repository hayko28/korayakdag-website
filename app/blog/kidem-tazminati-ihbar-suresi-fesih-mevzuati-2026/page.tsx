import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Kıdem Tazminatı, İhbar Süresi ve Fesih Mevzuatı: 2026 Rehberi | Koray Akdağ",
  description:
    "2026 güncel kıdem tazminatı tavanı, kıdeme göre ihbar süresi tablosu, haklı/haksız fesih ayrımı (İş Kanunu m.25), hesaplama örneği ve işe iade davası riskini önleyen fesih usulüyle işverenler için kapsamlı rehber.",
  keywords: [
    "kıdem tazminatı nasıl hesaplanır",
    "ihbar süresi ne kadar",
    "ihbar tazminatı hesaplama",
    "kıdem tazminatı tavanı 2026",
    "haklı fesih nedenleri",
    "iş kanunu 25. madde",
    "işe iade davası",
    "fesih bildirimi nasıl yapılır",
    "işçi savunma alma",
    "iş hukuku danışmanlığı",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Kıdem Tazminatı, İhbar Süresi ve Fesih Mevzuatı: İşverenler İçin 2026 Rehberi"
      description="2026 güncel kıdem tazminatı tavanı, kıdeme göre ihbar süresi tablosu, haklı fesih/haksız fesih ayrımı (İş Kanunu m.25), somut hesaplama örnekleri ve işe iade davası riskini önleyen doğru fesih usulüyle kapsamlı rehber."
      category="İŞ HUKUKU • FESİH VE KIDEM MEVZUATI • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kidem-tazminati-ihbar-suresi-fesih-mevzuati-2026"
      coverImage="https://images.unsplash.com/photo-1521791055366-0d553872125f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir çalışanla yolların ayrılması, işverenler için sadece insan
          kaynakları değil, doğrudan hukuki ve mali bir risk yönetimi
          konusudur. Usulüne uygun yapılmayan bir fesih; kıdem ve ihbar
          tazminatının yanı sıra işe iade davası, tazminat ve itibar kaybına
          da yol açabilir. Bu rehber, işverenlerin fesih sürecinde bilmesi
          gereken tüm rakam ve usul kurallarını tek yerde topluyor.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ 2026 güncel kıdem tazminatı tavanı ve hesaplama yöntemi</li>
          <li>✔ Kıdeme göre ihbar süresi tablosu (2/4/6/8 hafta)</li>
          <li>✔ Haklı fesih ile haksız fesih arasındaki fark (İş Kanunu m.25)</li>
          <li>✔ Kıdem tazminatına hak kazanma şartları</li>
          <li>✔ Somut örneklerle kıdem ve ihbar tazminatı hesaplaması</li>
          <li>✔ İşe iade davası riskini azaltan doğru fesih usulü</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-onemli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Neden İşverenler İçin Kritik Bir Konu?
          </Link>
          <Link href="#hak-kazanma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kıdem Tazminatına Hak Kazanma Şartları
          </Link>
          <Link href="#hesaplama" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kıdem Tazminatı Nasıl Hesaplanır? (2026 Tavanı)
          </Link>
          <Link href="#ihbar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. İhbar Süresi Ne Kadar? Kıdeme Göre Tablo
          </Link>
          <Link href="#hakli-haksiz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Haklı Fesih mi, Haksız Fesih mi? (m.25 – m.24)
          </Link>
          <Link href="#is-guvencesi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. İş Güvencesi Kapsamı ve İşe İade Davası Riski
          </Link>
          <Link href="#usul" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Doğru Fesih Usulü: Tutanak, Savunma, Bildirim
          </Link>
          <Link href="#hatalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sık Yapılan Hatalar ve Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDEN ÖNEMLİ */}
      <section id="neden-onemli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden İşverenler İçin Kritik Bir Konu?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          4857 sayılı İş Kanunu, işçiyi işverene göre daha zayıf taraf kabul
          eder ve fesih usulünde işverene önemli yükümlülükler yükler. Bir
          çalışanla iş ilişkisini sonlandırırken doğru hesaplamayı yapmamak
          veya doğru usulü izlememek, işverene üç ayrı finansal risk olarak
          geri döner:
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💰</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Eksik veya Hatalı Tazminat
            </h3>
            <p className="text-gray-700">
              Kıdem/ihbar tazminatının eksik hesaplanması, işçinin dava
              açması halinde faiziyle birlikte geriye dönük ödeme riski
              doğurur.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚖️</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              İşe İade Davası
            </h3>
            <p className="text-gray-700">
              Usulsüz yapılan bir fesih, iş güvencesi kapsamındaki
              çalışanlarda işe iade davasına ve boşta geçen süre ücretine
              yol açabilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📉</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              SGK ve İdari Yaptırım
            </h3>
            <p className="text-gray-700">
              Hatalı işten çıkış kodu bildirimi, hem işsizlik maaşı sürecini
              hem de sonraki teşvik başvurularını olumsuz etkileyebilir.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu üç risk de, fesih anında birkaç dakikalık ek özenle önlenebilir
            niteliktedir. Aşağıdaki bölümlerde, önce tazminat rakamlarının
            nasıl hesaplandığını, sonra da hangi fesih usulünün hangi sonucu
            doğurduğunu adım adım ele alıyoruz.
          </p>
        </div>
      </section>

      {/* 2. HAK KAZANMA ŞARTLARI */}
      <section id="hak-kazanma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kıdem Tazminatına Hak Kazanma Şartları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          1475 sayılı eski İş Kanunu&apos;nun hâlâ yürürlükte olan 14.
          maddesi uyarınca kıdem tazminatı, her fesihte değil; kanunda
          sayılan belirli hallerde ve belirli bir kıdem süresi
          tamamlandığında doğar.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Kıdem Tazminatı Doğuran Başlıca Haller
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>En az 1 yıllık kıdem şartı:</strong> Aynı işverene
              bağlı olarak (işyeri devirleri dahil) en az bir tam yıl
              çalışmış olmak, kıdem tazminatının ön koşuludur.
            </li>
            <li>
              <strong>İşveren tarafından fesih:</strong> İşverenin, işçinin
              ahlak ve iyiniyet kurallarına aykırı davranışı (m.25/II)
              dışındaki bir nedenle sözleşmeyi feshetmesi.
            </li>
            <li>
              <strong>İşçinin haklı nedenle feshi:</strong> Sağlık
              sebepleri, ahlak/iyiniyet kurallarına aykırılık veya işyerinde
              işin durması gibi nedenlerle işçinin kendisinin haklı olarak
              istifa etmesi (m.24).
            </li>
            <li>
              <strong>Askerlik:</strong> Muvazzaf askerlik hizmeti nedeniyle
              işten ayrılma.
            </li>
            <li>
              <strong>Emeklilik / yaşlılık, malullük aylığı veya toptan
              ödeme almak amacıyla ayrılma:</strong> Bağlı olduğu kurumdan bu
              amaçla ayrılan işçi kıdem tazminatına hak kazanır.
            </li>
            <li>
              <strong>Kadın işçinin evlilik nedeniyle ayrılması:</strong>{" "}
              Evlilik tarihinden itibaren 1 yıl içinde işten ayrılan kadın
              çalışan kıdem tazminatı alabilir.
            </li>
            <li>
              <strong>Ölüm:</strong> İşçinin vefatı halinde tazminat,
              yasal mirasçılarına ödenir.
            </li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Dikkat:</strong> İşçinin kendi isteğiyle, herhangi bir
            haklı neden göstermeden istifa etmesi halinde kıdem tazminatı
            doğmaz. Aynı şekilde işverenin İş Kanunu m.25/II kapsamında
            (ahlak ve iyiniyet kurallarına aykırılık) yaptığı fesihte de
            kıdem tazminatı ödenmez; ancak bu istisnanın doğru
            uygulanabilmesi, fesih gerekçesinin sağlam belge ve tutanaklarla
            desteklenmesine bağlıdır.
          </p>
        </div>
      </section>

      {/* 3. HESAPLAMA */}
      <section id="hesaplama" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kıdem Tazminatı Nasıl Hesaplanır? (2026 Tavanı)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kıdem tazminatı, işçinin son brüt ücreti üzerinden, çalıştığı her
          tam yıl için 30 günlük brüt ücret tutarında hesaplanır; bir yıldan
          artan süreler oranlanarak eklenir. Hesaplamaya brüt ücretin yanı
          sıra düzenli ödenen ikramiye, yol/yemek yardımı gibi para ile
          ölçülebilen menfaatler de dahil edilir. Ancak bu tutar, devletin
          her yıl Ocak ve Temmuz aylarında güncellediği bir{" "}
          <strong>tavan</strong> ile sınırlıdır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Dönem</th>
                <th className="p-5">Kıdem Tazminatı Tavanı (Brüt)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">1 Ocak – 30 Haziran 2026</td>
                <td className="p-5">64.948,77 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">1 Temmuz – 31 Aralık 2026</td>
                <td className="p-5">73.729,87 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu tavan, memur maaş katsayısındaki artışa bağlı olarak Hazine ve
          Maliye Bakanlığı tarafından belirlenir ve her çalışılan yıl için
          ayrı ayrı uygulanır; yani ücreti tavanın üzerinde olan bir
          çalışanın kıdem tazminatı da bu üst sınırla sınırlı kalır.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🧮 Örnek Hesaplama
          </h3>
          <p className="leading-8 text-gray-700">
            5 yıl 4 ay çalışmış, brüt aylık ücreti 45.000 TL olan bir
            çalışanın iş sözleşmesi 2026&apos;nın ikinci yarısında,
            işveren tarafından ekonomik nedenlerle (kıdem tazminatı doğuran
            bir gerekçeyle) feshedilsin:
          </p>
          <ul className="ml-6 mt-4 list-disc space-y-2 text-gray-700 marker:text-orange-600">
            <li>Ücreti tavanın (73.729,87 TL) altında olduğundan tam brüt ücret esas alınır.</li>
            <li>5 tam yıl için: 45.000 TL × 5 = 225.000 TL</li>
            <li>4 aylık kıst süre için: (45.000 TL ÷ 12) × 4 = 15.000 TL</li>
            <li><strong>Toplam brüt kıdem tazminatı: 240.000 TL</strong> (damga vergisi kesintisi hariç, gelir vergisinden istisnadır)</li>
          </ul>
          <p className="mt-4 leading-8 text-gray-700">
            Ücreti tavanın üzerinde olan bir çalışan için hesaplama, gerçek
            ücret yerine dönemin tavan tutarı üzerinden yapılır. Kıdem
            tazminatı, gelir vergisinden istisna olmakla birlikte binde 7,59
            oranında damga vergisi kesintisine tabidir.
          </p>
        </div>
      </section>

      {/* 4. İHBAR */}
      <section id="ihbar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. İhbar Süresi Ne Kadar? Kıdeme Göre Bildirim Süreleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Belirsiz süreli iş sözleşmelerinde, taraflardan biri sözleşmeyi
          haklı bir neden olmaksızın sona erdirmek istediğinde, karşı tarafa
          önceden bildirimde bulunmak (ihbar) zorundadır. İş Kanunu
          m.17&apos;de düzenlenen bu süreler işçinin kıdemine göre değişir
          ve hem işverenin hem işçinin feshinde aynı şekilde uygulanır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Çalışanın Kıdemi</th>
                <th className="p-5">Bildirim (İhbar) Süresi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">6 aydan az</td>
                <td className="p-5">2 hafta</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">6 ay – 1,5 yıl arası</td>
                <td className="p-5">4 hafta</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">1,5 yıl – 3 yıl arası</td>
                <td className="p-5">6 hafta</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">3 yıldan fazla</td>
                <td className="p-5">8 hafta</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu süreler asgari niteliktedir; iş sözleşmesi veya toplu iş
          sözleşmesiyle artırılabilir ama azaltılamaz. Bildirim süresine
          uymadan (peşin ihbar tazminatı ödemeden) yapılan derhal fesihte,
          işveren o kıdeme karşılık gelen ihbar süresi kadar brüt ücret
          tutarını <strong>ihbar tazminatı</strong> olarak öder.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🧮 İhbar Tazminatı Hesaplama Örneği
          </h3>
          <p className="leading-8 text-gray-700">
            2 yıl 2 ay kıdemi olan, brüt aylık ücreti 30.000 TL olan bir
            çalışan için ihbar süresi 6 haftadır (yaklaşık 1,5 ay). İşveren
            bu süreyi tanımadan derhal fesih yaparsa: 30.000 TL ÷ 30 gün =
            1.000 TL günlük ücret × 42 gün = <strong>42.000 TL brüt ihbar
            tazminatı</strong> ödemesi gerekir. İhbar tazminatı, kıdem
            tazminatının aksine gelir vergisi ve SGK primine tabidir.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Önemli bir istisna: İş Kanunu m.25 kapsamındaki haklı nedenle
          derhal fesihlerde (aşağıdaki bölümde ele alınmaktadır) ihbar
          süresi/tazminatı aranmaz; taraflardan biri sözleşmeyi hiçbir
          bildirim yapmadan derhal sona erdirebilir.
        </p>
      </section>

      {/* 5. HAKLI HAKSIZ FESİH */}
      <section id="hakli-haksiz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Haklı Fesih mi, Haksız Fesih mi? İş Kanunu Madde 25 ve 24
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İşverenin bir çalışanla yollarını ayırırken hangi tazminatı ödeyip
          ödemeyeceğini belirleyen en kritik ayrım, feshin haklı bir nedene
          dayanıp dayanmadığıdır. İş Kanunu m.25, işverenin{" "}
          <strong>bildirimsiz ve tazminatsız derhal fesih</strong>{" "}
          yapabileceği dört ana kategori sayar:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">m.25 Bendi</th>
                <th className="p-5">Kapsam</th>
                <th className="p-5">Kıdem Tazminatı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">I – Sağlık Sebepleri</td>
                <td className="p-5">İşçinin kendi kastı/ihmali dışındaki sağlık sorunları nedeniyle raporlu devamsızlığın belirli süreyi aşması</td>
                <td className="p-5">Ödenir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">II – Ahlak ve İyiniyet Kurallarına Aykırılık</td>
                <td className="p-5">Hırsızlık, güveni kötüye kullanma, sadakatsizlik, sarhoşluk, işyerinde hakaret/şiddet, devamsızlık gibi haller</td>
                <td className="p-5">Ödenmez</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">III – Zorlayıcı Sebepler</td>
                <td className="p-5">İşçiyi işyerinde bir haftadan fazla süreyle çalışmaktan alıkoyan zorlayıcı bir nedenin ortaya çıkması</td>
                <td className="p-5">Ödenir</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">IV – Tutukluluk/Gözaltı</td>
                <td className="p-5">İşçinin gözaltına alınması veya tutuklanmasının ihbar süresini aşması</td>
                <td className="p-5">Ödenir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kıdem tazminatının ödenmediği tek kategori II bendidir. Bu nedenle
          uygulamada &quot;haklı nedenle fesih&quot; denildiğinde çoğu zaman
          kastedilen, işçinin ahlak ve iyiniyet kurallarına aykırı davranışı
          nedeniyle yapılan ve hem kıdem hem ihbar tazminatı ödenmeyen
          fesihlerdir. Buna karşılık işçinin kendisinin haklı nedenle
          feshetmesini düzenleyen m.24 de benzer bir yapıya sahiptir: sağlık
          sebepleri, ahlak/iyiniyete aykırılık (ücretin ödenmemesi, mobbing,
          cinsel taciz gibi) veya zorlayıcı sebeplerle işçi de sözleşmeyi
          derhal feshedebilir; bu durumda işveren kıdem tazminatı ödemekle
          yükümlü olur.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Kritik süre sınırı:</strong> İşveren, m.25/II
            kapsamındaki bir haklı nedene dayanarak fesih yapmak istiyorsa,
            bu hakkını olayı öğrendiği günden itibaren{" "}
            <strong>6 iş günü</strong> içinde ve her hâlükârda olayın
            gerçekleştiği tarihten itibaren <strong>1 yıl</strong> içinde
            kullanmak zorundadır (İş Kanunu m.26). Bu süre hak düşürücüdür;
            kaçırıldığında aynı olaya dayanarak haklı nedenle fesih hakkı
            sona erer ve işveren normal (ihbarlı, kıdem tazminatlı) fesih
            yoluna gitmek zorunda kalır.
          </p>
        </div>
      </section>

      {/* 6. İŞ GÜVENCESİ */}
      <section id="is-guvencesi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. İş Güvencesi Kapsamı ve İşe İade Davası Riski
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İş Kanunu m.18-21&apos;de düzenlenen iş güvencesi hükümleri,
          belirli şartları taşıyan çalışanlar için işverenin fesihte{" "}
          <strong>geçerli bir sebep</strong> göstermesini zorunlu kılar.
          Aşağıdaki üç şart birlikte gerçekleştiğinde çalışan iş güvencesi
          kapsamına girer:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-600">
          <li>İşyerinde otuz veya daha fazla işçi çalıştırılması,</li>
          <li>Çalışanın en az altı aylık kıdeminin bulunması,</li>
          <li>
            Belirsiz süreli iş sözleşmesiyle çalışan, işletmenin bütününü
            sevk ve idare eden işveren vekili konumunda olmayan bir çalışan
            olması.
          </li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Bu kapsamdaki bir çalışan işten çıkarılırken işveren; fesih
          sebebini açık ve kesin biçimde yazılı olarak bildirmek, davranış
          veya verimle ilgili bir fesihte işçiye savunma hakkı tanımak
          zorundadır. Geçerli sebep gösterilmeden veya usule uyulmadan
          yapılan fesihte çalışan, tebliğ tarihinden itibaren{" "}
          <strong>1 ay</strong> içinde arabulucuya başvurabilir; anlaşma
          sağlanamazsa işe iade davası açabilir. Mahkeme feshi geçersiz
          bulursa işveren; çalışanı işe başlatmak veya başlatmamayı tercih
          ederse <strong>4-8 aylık ücret tutarında iş güvencesi tazminatı</strong>{" "}
          ile <strong>en fazla 4 aya kadar boşta geçen süre ücretini</strong>{" "}
          ödemekle yükümlü olur.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            İş güvencesi kapsamı dışında kalan (örneğin 30 kişiden az
            çalışanı olan işyerlerindeki veya 6 aydan az kıdemi olan)
            çalışanlar için işe iade davası açılamaz; ancak bu durumda dahi
            fesih usulsüzse kötüniyet tazminatı ve ihbar/kıdem tazminatı
            talepli davalarla karşılaşılabilir. Bu nedenle işyeri
            büyüklüğüne bakılmaksızın her fesihte usule uyulması, en güvenli
            yaklaşımdır.
          </p>
        </div>
      </section>

      {/* 7. USUL */}
      <section id="usul" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Doğru Fesih Usulü: Tutanak, Savunma, Bildirim
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Fesih gerekçesi ne kadar haklı olursa olsun, usule uyulmadığı
          takdirde işveren dava sürecinde ispat zorluğu yaşar. Uygulamada
          yerleşmiş ve Yargıtay kararlarıyla desteklenen doğru fesih süreci
          şu adımlardan oluşur:
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Olayın Tutanakla Tespiti</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Yazılı Savunma Talebi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Gerekçeli Fesih Bildirimi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Usulüne Uygun Tebligat</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">SGK İşten Çıkış Bildirimi</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.1. Olayın Tutanakla Tespit Edilmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Devamsızlık, iş kuralına aykırılık veya performans sorunu gibi
            fesih gerekçesi oluşturacak her olay, mümkünse olay gününde,
            tanık imzalı bir tutanakla kayıt altına alınmalıdır. Tutanak,
            hem 6 iş günlük hak düşürücü sürenin başlangıcını hem de dava
            sürecindeki temel delili oluşturur.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.2. Yazılı Savunma Talebi
          </h3>
          <p className="leading-8 text-gray-700">
            Özellikle davranış veya performansa dayalı fesihlerde, çalışana
            isnat edilen olay yazılı olarak bildirilmeli ve makul bir süre
            (uygulamada genellikle 3 iş günü) tanınarak yazılı savunması
            istenmelidir. Savunma alınmadan yapılan fesih, iş güvencesi
            kapsamındaki çalışanlarda geçersiz fesih riskini büyük ölçüde
            artırır.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.3. Fesih Gerekçesinin Açık ve Yazılı Bildirilmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Fesih bildirimi; hangi olaya, hangi tarihe ve hangi kanun
            maddesine dayandığını açıkça belirtmeli, muğlak ifadelerden
            kaçınmalıdır. &quot;İşe gelmemesi nedeniyle&quot; gibi genel
            ifadeler yerine tarih, tutanak numarası ve dayanılan hüküm
            (örneğin m.25/II-g) belirtilmelidir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.4. Bildirimin Usulüne Uygun Tebliğ Edilmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Fesih bildirimi; noter kanalıyla, iadeli taahhütlü posta ile
            veya çalışanın imzasını taşıyan bir tesellüm belgesiyle tebliğ
            edilmelidir. Yalnızca sözlü bildirim veya imza alınmadan yapılan
            tebligat, ispat açısından zayıf bir zemin oluşturur.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.5. SGK İşten Ayrılış Bildirgesinin Doğru Kodla Verilmesi
          </h3>
          <p className="leading-8 text-gray-700">
            İşten ayrılış on gün içinde SGK&apos;ya bildirilmelidir; işten
            çıkış kodunun (örneğin m.25/II ile normal fesih arasındaki fark)
            hatalı seçilmesi, çalışanın işsizlik ödeneği hakkını ve
            işverenin sonraki teşvik başvurularını olumsuz etkileyebilir.
          </p>
        </div>
      </section>

      {/* KURUMSAL DESTEK CTA */}
      <section className="mt-16 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Fesih Sürecinizi ve Bordro Danışmanlığınızı Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Kıdem/ihbar tazminatı hesaplamasından fesih bildiriminin doğru
            gerekçe ve usulle hazırlanmasına, SGK işten çıkış bildiriminden
            sonraki bordro sürecine kadar iş hukuku ve SGK/bordro
            danışmanlığınızı uçtan uca biz yürütüyoruz. Her fesih kendine
            özgü olgulara dayandığından, somut olayınızı birlikte
            değerlendirip riskleri önceden görmek için{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 8. HATALAR */}
      <section id="hatalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sık Yapılan Hatalar ve Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Ahlak/iyiniyet kurallarına aykırılıkta 6 iş günlük hak
            düşürücü süreyi kaçırmak
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Davranışa dayalı fesihte çalışandan yazılı savunma
            istenmemesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Fesih bildiriminde tarih, olay ve dayanılan maddenin açıkça
            belirtilmemesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Kıdem/ihbar tazminatı hesabında güncel tavan ve dönem
            değişikliklerinin gözden kaçırılması
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ İş güvencesi kapsamındaki bir çalışanı geçerli sebep
            göstermeden işten çıkarmak
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ SGK işten ayrılış bildirgesinde yanlış çıkış kodu seçilmesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Tanık ifadesi veya tutanak olmadan, sözlü iddialara dayanarak
            fesih yapılması
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Fesih bildiriminin sadece sözlü yapılıp yazılı tebligatın
            ihmal edilmesi
          </div>
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
              Kıdem tazminatı hangi durumlarda ödenmez?
            </h3>
            <p className="leading-8 text-gray-700">
              İşçinin kendi isteğiyle, haklı bir neden göstermeden istifa
              etmesi halinde ve işverenin İş Kanunu m.25/II (ahlak ve
              iyiniyet kurallarına aykırılık) kapsamında yaptığı haklı
              nedenle fesihte kıdem tazminatı ödenmez. Diğer tüm haklı fesih
              kategorilerinde (sağlık, zorlayıcı sebep, tutukluluk) ve
              işverenin geçerli/geçersiz sebeple yaptığı olağan fesihlerde
              kıdem tazminatı doğar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İhbar süresine uyulmadan yapılan fesih geçersiz mi olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, fesih geçerli olur; ancak bildirim süresine
              uyulmamışsa, o süreye karşılık gelen ücret tutarı ihbar
              tazminatı olarak ödenmek zorundadır. İstisna, İş Kanunu m.25
              kapsamındaki haklı nedenle derhal fesihlerdir; bu hallerde
              ihbar süresi/tazminatı aranmaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İşe iade davası açma süresi ne kadardır?
            </h3>
            <p className="leading-8 text-gray-700">
              İş güvencesi kapsamındaki bir çalışan, fesih bildiriminin
              tebliğinden itibaren 1 ay içinde arabulucuya başvurmak
              zorundadır. Arabuluculukta anlaşma sağlanamazsa, son tutanak
              tarihinden itibaren 2 hafta içinde işe iade davası açılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Deneme süresindeki bir çalışan için ihbar/kıdem tazminatı
              ödenir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Deneme süresi içinde (genellikle 2 ay, toplu iş sözleşmesiyle
              4 aya kadar uzatılabilir) taraflardan biri sözleşmeyi
              bildirim süresi ve tazminat ödemeksizin sona erdirebilir.
              Ancak çalışılan günlere ait ücret ve diğer haklar eksiksiz
              ödenmek zorundadır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Performans düşüklüğü nedeniyle yapılan fesihte kıdem tazminatı
              ödenir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Performans düşüklüğü, m.25/II&apos;deki ahlak/iyiniyet
              kurallarına aykırılık kategorisine girmez; işverenin geçerli
              sebeple yaptığı bu tür fesihlerde kıdem ve ihbar tazminatı
              ödenir. İş güvencesi kapsamındaki çalışanlarda ayrıca
              performans düşüklüğünün somut kriterlerle (hedef, uyarı,
              savunma) belgelenmesi, işe iade riskini azaltmak için
              önemlidir.
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
          Kıdem tazminatı, ihbar süresi ve fesih usulü, işverenler için hem
          rakamsal hem de prosedürel disiplin gerektiren bir alandır.
          Doğru hesaplama kadar, olayın tutanakla tespiti, çalışana yazılı
          savunma hakkı tanınması ve fesih bildiriminin gerekçeli/usulüne
          uygun tebliğ edilmesi de en az hesaplama kadar belirleyicidir. Bu
          adımlardan herhangi birinin atlanması, tazminat tutarının çok
          üzerinde bir maliyete (işe iade, boşta geçen süre ücreti, dava
          masrafı) yol açabilir. Fesih öncesinde her olayı somut olgularıyla
          değerlendirmek ve süreci profesyonel destekle yürütmek, hem
          çalışanın hem işverenin haklarını koruyan en güvenli yoldur.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/sgk-tesvikleri-2026-hangi-isverenler-hangi-prim-destegi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SGK TEŞVİKLERİ • BORDRO • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">SGK Teşvikleri 2026: Hangi İşverenler Hangi Prim Desteğinden Yararlanabilir?</h3>
          </Link>
          <Link
            href="/blog/istihdami-koruma-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • İSTİHDAM DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İstihdamı Koruma Destek Programı 2026: Yeni Esaslar, Destek Tutarları ve Örnek Hesaplamalar</h3>
          </Link>
          <Link
            href="/blog/6111-sayili-kanun-genc-kadin-istihdam-tesviki-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SGK TEŞVİKLERİ • İSTİHDAM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">6111 Sayılı Kanun İstihdam Teşviki: Genç, Kadın ve Mesleki Belge Sahibi Çalışanlarda 2026 Şartları ve Son Tarih</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
