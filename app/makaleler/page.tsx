import Link from "next/link";
import { Metadata } from "next";
import BackButton from "@/components/BackButton";
import { MAKALELER } from "@/lib/makale-data";

export const metadata: Metadata = {
  title: "Makalelerim | Koray Akdağ",
  description:
    "Devlet destekleri, danışmanlık, teşvikler, yurt dışı büyüme ve iş geliştirme üzerine kişisel görüş ve deneyim yazılarım.",
};

export default function MakalelerPage() {
  return (
    <div className="bg-white">
      <section className="relative bg-[#071A2F] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 flex justify-end gap-2">
            <BackButton
              lang="tr"
              fallbackHref="/"
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-white hover:text-[#071A2F]"
            />
            <Link
              href="/"
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-white hover:text-[#071A2F]"
            >
              🏠 Ana Sayfa
            </Link>
          </div>

          <div className="text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[2px] text-orange-400">
              Makalelerim
            </p>
            <h1 className="text-3xl font-black text-white sm:text-4xl">
              Kişisel Görüş ve Deneyim Yazılarım
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-200">
              Bloğumdaki SEO rehberlerinden farklı — devlet destekleri,
              danışmanlık, teşvikler ve iş geliştirme üzerine kendi gözlem ve
              görüşlerimi paylaştığım kişisel yazılar.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {MAKALELER.map((makale) => (
              <Link
                key={makale.slug}
                href={`/makaleler/${makale.slug}`}
                className="block rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                  {makale.tag}
                </span>

                <h2 className="mt-5 text-2xl font-bold text-[#071A2F]">
                  {makale.title}
                </h2>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {makale.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
                  <span>{makale.date}</span>
                  <span>{makale.readTime}</span>
                </div>

                <span className="mt-4 inline-block font-semibold text-orange-500">
                  Devamını Oku →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#071A2F] p-10 text-center text-white shadow-xl">
            <h2 className="mb-4 text-3xl font-bold">
              Sorularınız veya Danışmanlık İhtiyacınız mı Var?
            </h2>
            <p className="mb-8 text-lg leading-8 text-gray-300">
              Şirketiniz için en uygun destek ve teşvik programlarını
              belirlemek için bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 shadow-lg"
              >
                İletişime Geç
              </Link>
              <Link
                href="/"
                className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
              >
                Ana Sayfa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
