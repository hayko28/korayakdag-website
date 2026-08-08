const STRINGS = {
  tr: { title: "Strateji ve İş Geliştirme Danışmanı", rights: "© 2026 Tüm Hakları Saklıdır." },
  en: { title: "Strategy & Business Development Consultant", rights: "© 2026 All Rights Reserved." },
};

export default function Footer({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const t = STRINGS[lang];

  return (
    <footer className="bg-[#031120] text-gray-400 py-10">

      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h3 className="text-white text-2xl font-bold">
            Koray Akdağ
          </h3>

          <p className="mt-2">
            {t.title}
          </p>
        </div>

        <p>
          {t.rights}
        </p>

      </div>

    </footer>
  );
}
