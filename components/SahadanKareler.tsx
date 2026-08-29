import Image from "next/image";

const KARELER = [
  {
    src: "/sahadan-kareler/legal-tech-turkiye-1.jpg",
    title: "Legal Tech Türkiye Şehir Buluşmaları",
  },
  {
    src: "/sahadan-kareler/legal-tech-turkiye-panel.jpg",
    title: "Legal Tech Türkiye — Panel Oturumu",
  },
  {
    src: "/sahadan-kareler/sanliurfa-tso-sunum.jpg",
    title: "Şanlıurfa TSO — Ulusal Fonlar Sunumu",
  },
  {
    src: "/sahadan-kareler/legal-tech-turkiye-2.jpg",
    title: "Legal Tech Türkiye — Ekip Buluşması",
  },
  {
    src: "/sahadan-kareler/sistem-global-ofis.jpg",
    title: "Sistem Global Ofisi",
  },
  {
    src: "/sahadan-kareler/sistem-global-anatolia-gece.jpg",
    title: "Sistem Global & Anatolia İş Ortaklığı",
  },
  {
    src: "/sahadan-kareler/sistem-global-anatolia-imza.png",
    title: "Sistem Global & Anatolia — İmza Töreni",
  },
];

export default function SahadanKareler() {
  const kareler = [...KARELER, ...KARELER];

  return (
    <section className="relative overflow-hidden bg-[#0A1B30] py-16 lg:py-20">
      <div className="mx-auto mb-11 flex max-w-7xl flex-wrap items-end justify-between gap-4 px-6 lg:px-8">
        <div>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-orange-300">
            <span className="inline-block h-px w-5 bg-orange-500" />
            Sahadan Kareler
          </span>
          <h2 className="max-w-md text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Etkinlikler, görüşmeler ve iş ortaklıklarından anlar
          </h2>
        </div>
        <p className="max-w-[34ch] text-sm text-[#8FA0B5]">
          Fare üzerine gelince kayma durur.
        </p>
      </div>

      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0A1B30] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0A1B30] to-transparent sm:w-40" />

        <div className="flex w-max animate-[sahadan-kareler-scroll_42s_linear_infinite] gap-5 px-5 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {kareler.map((kare, i) => (
            <div
              key={i}
              className="relative h-[340px] w-[280px] flex-none overflow-hidden rounded border border-white/10 bg-[#0F2A47]"
            >
              <Image
                src={kare.src}
                alt={kare.title}
                fill
                sizes="280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-transparent to-transparent" />
              <p className="absolute inset-x-0 bottom-0 px-4 pb-4 text-sm font-bold leading-snug text-white">
                {kare.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
