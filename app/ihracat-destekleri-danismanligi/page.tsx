import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ContactCtaButton from "@/components/ContactCtaButton";

export const metadata: Metadata = {
  title: "İhracat Destekleri ve Turquality Danışmanlığı | Koray Akdağ",
  description:
    "Ticaret Bakanlığı'nın Turquality, Pazara Giriş, Fuar Katılımı, Yurt Dışı Marka Tescili ve E-İhracat gibi ihracat destek programları için uygunluk analizinden DYS başvurusuna kadar danışmanlık.",
};

const STEPS = [
  {
    num: "1",
    title: "İhracat destek uygunluk analizi",
    text: "İhracat hacminiz, markalaşma düzeyiniz ve hedef pazarlarınıza göre Turquality/Marka Destek Programı'na mı, yoksa Pazara Giriş, Fuar, E-İhracat gibi diğer Ticaret Bakanlığı programlarına mı uygun olduğunuzu belirliyoruz.",
  },
  {
    num: "2",
    title: "Program ve destek oranı planlaması",
    text: "Turquality'de %50-%75 arası değişen destek oranlarını, diğer programlarda geçerli üst limit ve harcama kalemlerini işletmenize göre modelliyoruz.",
  },
  {
    num: "3",
    title: "DYS başvuru dosyası",
    text: "Destek Yönetim Sistemi (DYS) üzerinden başvuru dosyasını, harcama belgelerini ve fatura sırasını sizin adınıza hazırlıyoruz.",
  },
  {
    num: "4",
    title: "Ödeme takibi ve raporlama",
    text: "Başvuru sonrası ödeme takvimini, geçersiz sayılabilecek harcama risklerini ve raporlama yükümlülüklerini takip ediyoruz.",
  },
];

const FEATURES = [
  "İhracat Destek Uygunluk Analizi",
  "Turquality / Marka Destek Programı Değerlendirmesi",
  "Program Karşılaştırması (Pazara Giriş, Fuar, E-İhracat vb.)",
  "DYS Başvuru Dosyası Hazırlığı",
  "Harcama ve Fatura Uygunluk Kontrolü",
  "Ödeme ve Raporlama Takibi",
];

const RELATED = [
  { name: "Turquality Programı Nedir? Şartları, Destekleri ve 2026 Rehberi", href: "/blog/turquality-programi-nedir-sartlari-destekleri-2026" },
  { name: "Ticaret Bakanlığı İhracat Destekleri (Pazara Giriş, Fuar, E-İhracat)", href: "/blog/ticaret-bakanligi-ihracat-destekleri-2026" },
  { name: "Döviz Dönüşüm Desteği 2026: Yeni Sistem Ne Değiştiriyor?", href: "/blog/doviz-donusum-destegi-2026-yeni-donem" },
];

export default function IhracatDestekleriDanismanligiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      {/* HERO */}
      <section className="bg-[#071A2F] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-400">
            ◆ İhracat Destekleri ve Turquality Danışmanlığı
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            İhracatınız için hangi Ticaret Bakanlığı desteği uygun, birlikte
            belirleyelim
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            Turquality&apos;den Pazara Giriş Belgesi&apos;ne, fuar
            katılımından e-ihracata kadar onlarca farklı program arasında
            doğru olanı seçmek, ihracat hacminiz ve markalaşma düzeyinizle
            doğru eşleştirmekten geçiyor. Uygunluk analizinden DYS
            başvurusuna kadar süreci baştan sona yönetiyoruz.
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
                İlgili rehberler
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
                Şirketiniz için hangi ihracat desteğinin uygun olduğu net
                değilse{" "}
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
