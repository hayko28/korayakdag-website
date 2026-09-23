import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SirketDegerlemeHesaplayici from "@/components/SirketDegerlemeHesaplayici";

export const metadata: Metadata = {
  title: "Şirket Değerleme Hesaplama | Ücretsiz Ön Değer Aralığı | Koray Akdağ",
  description:
    "Yıllık net kârınızı ve sektörünüzü girin, şirketinizin kazanç çarpanı yöntemiyle ön değer aralığını saniyeler içinde görün. Ücretsiz, kayıt gerektirmez.",
  keywords: [
    "şirket değerleme hesaplama",
    "şirket değeri hesaplama",
    "kazanç çarpanı ile değerleme",
    "net aktif değer hesaplama",
    "şirket değerleme hesaplayıcı",
    "KOBİ şirket değeri",
  ],
  alternates: {
    canonical: "/sirket-degerleme-hesaplama",
  },
};

export default function SirketDegerlemeHesaplamaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-[78px]" />

      <section className="bg-[#071A2F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[2px] text-orange-500">Ücretsiz Hesaplayıcı</p>
          <h1 className="mb-5 text-3xl font-bold sm:text-4xl">Şirket Değerleme Hesaplama</h1>
          <p className="text-white/80">
            Yıllık net kârınızı ve sektörünüzü girin; kazanç çarpanı yöntemiyle şirketinizin ön değer aralığını
            hemen görün. Bu araç bir gösterge sunar; resmi bir değerleme raporu yerine geçmez.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <SirketDegerlemeHesaplayici />

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 text-sm leading-7 text-gray-600">
          <p>
            Değerleme yöntemleri (DCF, çarpan analizi, net aktif değer) ve bunların KOBİ&apos;lerde nasıl
            uygulandığı hakkında detaylı bilgi için{" "}
            <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="font-semibold text-orange-600 underline">
              Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ&apos;ler İçin Neden Kritik?
            </Link>{" "}
            yazımızı inceleyebilirsiniz.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
