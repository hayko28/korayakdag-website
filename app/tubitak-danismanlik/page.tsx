import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ContactCtaButton from "@/components/ContactCtaButton";

export const metadata: Metadata = {
  title: "TÜBİTAK Danışmanlığı | Koray Akdağ",
  description:
    "TÜBİTAK 1501, 1507, 1707 ve 1711 gibi Ar-Ge destek programları için uygunluk analizinden proje başvurusuna kadar danışmanlık. Şirketinize uygun çağrıyı birlikte belirleyelim.",
};

const STEPS = [
  {
    num: "1",
    title: "Proje ve program uygunluk analizi",
    text: "Ar-Ge/yenilik projenizin niteliğini, bütçenizi ve şirket ölçeğinizi değerlendirerek 1501, 1507, 1707, 1711 gibi hangi TÜBİTAK çağrısına uygun olduğunuzu belirliyoruz.",
  },
  {
    num: "2",
    title: "Proje önerisi ve bütçe planlaması",
    text: "Desteklenen gider kalemlerini, hibe oranını ve başvuru takvimini projenize göre modelliyoruz.",
  },
  {
    num: "3",
    title: "Başvuru dosyası hazırlığı",
    text: "PRODIS üzerinden proje öneri formunu, teknik ve mali gerekçelendirmeyi sizin adınıza hazırlıyoruz.",
  },
  {
    num: "4",
    title: "İzleme ve raporlama",
    text: "Proje onaylandıktan sonra ara/dönem raporlarını, harcama belgelerini ve izleyici görüşmelerini takip ediyoruz.",
  },
];

const FEATURES = [
  "TÜBİTAK Çağrı Uygunluk Analizi",
  "Proje Önerisi ve Bütçe Planlaması",
  "PRODIS Başvuru Dosyası Hazırlığı",
  "Desteklenen Gider Kalemi Kontrolü",
  "Dönem Raporu ve İzleme Takibi",
  "Diğer Ar-Ge Destekleriyle Kıyaslama",
];

const RELATED = [
  { name: "TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri 2026", href: "/blog/tubitak-1501-1507-ar-ge-destekleri-2026" },
  { name: "TÜBİTAK 1707 Sipariş Ar-Ge Destek Programı", href: "/blog/tubitak-1707-siparis-arge-destek-programi-2026" },
  { name: "TÜBİTAK 1711 Yapay Zeka Ekosistem Çağrısı", href: "/blog/tubitak-1711-yapay-zeka-ekosistemi-cagrisi-2026" },
];

export default function TubitakDanismanlikPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      {/* HERO */}
      <section className="bg-[#071A2F] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-400">
            ◆ TÜBİTAK Danışmanlığı
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Ar-Ge projeniz için doğru TÜBİTAK çağrısını birlikte belirleyelim
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            TÜBİTAK&apos;ın 1501&apos;den 1711&apos;e onlarca farklı destek
            programı arasında projenize uygun olanı seçmek, bütçe
            planlamasından başvuru takvimine kadar süreci doğru yönetmekten
            geçiyor. Uygunluk analizinden dönem raporuna kadar yanınızdayız.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* STEPS */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-[#071A2F]">
              Süreç nasıl işliyor?
            </h2>
            <div className="space-y-6">
              {STEPS.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#071A2F]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <h2 className="mb-5 text-xl font-bold text-[#071A2F]">
                Sık başvurulan TÜBİTAK çağrıları
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {RELATED.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                  >
                    {item.name} →
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Ar-Ge projeniz için TÜBİTAK mı, KOSGEB mi daha uygun emin
                değilseniz{" "}
                <Link href="/destek-uygunluk-analizi" className="font-semibold text-orange-600 hover:underline">
                  ücretsiz Destek Uygunluk Analizi
                </Link>{" "}
                ile başlayabilirsiniz.
              </p>
            </div>
          </div>

          {/* FEATURES / CTA */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-[#F7F5EF] p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
              Size sağladıklarımız
            </p>

            <ul className="mt-4 space-y-2.5">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="mt-0.5 text-green-600">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <ContactCtaButton className="mt-7 block w-full rounded-xl bg-orange-500 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:bg-orange-600">
              Ücretsiz Ön Görüşme Talep Et
            </ContactCtaButton>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
