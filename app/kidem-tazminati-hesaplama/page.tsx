import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KidemTazminatiHesaplayici from "@/components/KidemTazminatiHesaplayici";

export const metadata: Metadata = {
  title: "Kıdem Tazminatı Hesaplama 2026 | Ücretsiz Hesaplayıcı | Koray Akdağ",
  description:
    "Brüt aylık ücretinizi ve kıdem sürenizi girin, 2026 güncel tavan tutarına göre brüt ve damga vergisi sonrası net kıdem tazminatınızı saniyeler içinde görün. Ücretsiz, kayıt gerektirmez.",
  keywords: [
    "kıdem tazminatı hesaplama",
    "kıdem tazminatı hesaplama 2026",
    "kıdem tazminatı tavanı 2026",
    "kıdem tazminatı hesaplayıcı",
    "net kıdem tazminatı hesaplama",
    "kıdem tazminatı damga vergisi",
  ],
  alternates: {
    canonical: "/kidem-tazminati-hesaplama",
  },
};

export default function KidemTazminatiHesaplamaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-[78px]" />

      <section className="bg-[#071A2F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[2px] text-orange-500">Ücretsiz Hesaplayıcı</p>
          <h1 className="mb-5 text-3xl font-bold sm:text-4xl">Kıdem Tazminatı Hesaplama</h1>
          <p className="text-white/80">
            Brüt aylık ücretinizi ve kıdem sürenizi girin; 2026 güncel tavan tutarına göre brüt ve damga vergisi
            sonrası net kıdem tazminatınızı hemen görün. Bu araç bir gösterge sunar; resmi bir hesaplama veya hukuki
            görüş yerine geçmez.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <KidemTazminatiHesaplayici />

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 text-sm leading-7 text-gray-600">
          <p>
            Kıdem tazminatına hak kazandıran haklı/haksız fesih ayrımı, ihbar süreleri ve işe iade davası riskini
            önleyen doğru fesih usulü hakkında detaylı bilgi için{" "}
            <Link href="/blog/kidem-tazminati-ihbar-suresi-fesih-mevzuati-2026" className="font-semibold text-orange-600 underline">
              Kıdem Tazminatı, İhbar Süresi ve Fesih Mevzuatı 2026
            </Link>{" "}
            yazımızı inceleyebilirsiniz.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
