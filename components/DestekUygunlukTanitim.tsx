import Link from "next/link";

export default function DestekUygunlukTanitim() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-4">
      <div className="flex flex-col items-start gap-6 rounded-3xl border border-orange-200 bg-orange-50 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[2px] text-orange-600">
            Ücretsiz Ön Analiz
          </p>
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F] sm:text-3xl">
            Şirketiniz Hangi Desteğe Uygun?
          </h3>
          <p className="text-base leading-7 text-gray-600">
            KOSGEB İş Geliştirme, KOSGEB Kapasite Geliştirme, Yatırım Teşvik Belgesi ve TÜBİTAK 1501/1507
            programlarına uygunluğunuzu 2 dakikada öğrenin. Şirket bilgilerinizi girin, hangi programlardan
            faydalanabileceğinizi hemen görün.
          </p>
        </div>

        <Link
          href="/destek-uygunluk-analizi"
          className="w-full shrink-0 rounded-xl bg-orange-500 px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-orange-600 sm:w-auto"
        >
          Ücretsiz Analiz Yap
        </Link>
      </div>
    </section>
  );
}
