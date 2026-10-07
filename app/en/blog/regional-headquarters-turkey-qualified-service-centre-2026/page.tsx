import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Regional Headquarters in Turkey: Qualified Service Centre 2026 | Koray Akdağ",
  description: "How multinational groups can run regional or global functions from Turkey under the 2026 Qualified Service Centre regime: conditions, the 95% to 100% deduction, personnel tax relief and the Istanbul Finance Centre.",
  keywords: ["regional headquarters Turkey", "qualified service centre Turkey", "Istanbul Finance Centre tax incentives", "Law No. 7582 service centre", "Turkey regional management centre tax", "shared service centre Turkey incentives"],
  alternates: {
    canonical: "/en/blog/regional-headquarters-turkey-qualified-service-centre-2026",
    languages: {
      en: "/en/blog/regional-headquarters-turkey-qualified-service-centre-2026",
      tr: "/blog/turkiyede-bolgesel-yonetim-merkezi-nitelikli-hizmet-merkezi-2026",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "What is a Qualified Service Centre in Turkey?",
    "a": "A capital company established to provide services to related companies or a group operating in at least three countries, earning at least 80% of its revenue from affiliated entities abroad. It receives corporate tax deductions on that foreign income."
  },
  {
    "q": "How large is the tax deduction?",
    "a": "95% of eligible foreign income, rising to 100% in the Istanbul Finance Centre or designated industrial zones, for up to 20 accounting periods."
  },
  {
    "q": "Do employees of a QSC get tax relief?",
    "a": "Yes. Qualified personnel receive an income tax exemption on salary up to three times the gross minimum wage, and up to five times in the Istanbul Finance Centre."
  },
  {
    "q": "When did the regime start?",
    "a": "Law No. 7582 was published in the Official Gazette on June 4, 2026. Application timing for returns and details depend on the law's implementation provisions."
  },
  {
    "q": "Can a company serving only Turkish customers use it?",
    "a": "No. At least 80% of annual revenue must come from affiliated entities abroad."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Regional Headquarters in Turkey: The 2026 Qualified Service Centre Regime Explained"
      description="Conditions for a Qualified Service Centre, the 95% and 100% corporate tax deductions on foreign income, personnel income tax relief, and what the Istanbul Finance Centre adds for multinational groups."
      category="REGIONAL HQ • TAX INCENTIVES • 2026"
      date="October 2026"
      readTime="8 Min Read"
      coverImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="regional-headquarters-turkey-qualified-service-centre-2026"
      lang="en"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 In Brief</h2><p className="mb-6 text-lg leading-9 text-gray-700">Law No. 7582 (Official Gazette No. 33270, June 4, 2026) created the <strong>Qualified Service Centre (QSC)</strong> model so that multinational groups can run management, finance, technology, HR and coordination functions for several countries from Turkey. Eligible income from abroad receives a <strong>95% corporate tax deduction, or 100% in the Istanbul Finance Centre or designated industrial zones</strong>, for up to 20 accounting periods.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. Who Qualifies as a QSC?</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>A <strong>capital company</strong> (limited or joint stock) established to serve related companies or a corporate group.</li><li>The group must operate actively in <strong>at least three different countries</strong>.</li><li>At least <strong>80% of annual revenue</strong> must come from affiliated entities abroad.</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">Eligible activities fall into two groups: intragroup support (finance, management, HR, technology, legal) and coordination services (sales, R&amp;D, procurement).</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. The Benefits</h2><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Benefit</th><th className="p-5">General</th><th className="p-5">Istanbul Finance Centre or designated industrial zones</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Corporate tax deduction on eligible foreign income</td><td className="p-5">95%</td><td className="p-5">100%</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Duration</td><td className="p-5">Up to 20 accounting periods</td><td className="p-5">Up to 20 accounting periods</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Salary exemption for qualified personnel</td><td className="p-5">Up to 3 times the gross minimum wage</td><td className="p-5">Up to 5 times the gross minimum wage</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Domestic minimum corporate tax</td><td className="p-5">The deducted income is excluded from the calculation</td><td className="p-5">The deducted income is excluded from the calculation</td></tr></tbody></table></div><p className="mb-6 text-lg leading-9 text-gray-700">The foreign income must be transferred to Turkey by the tax return deadline to qualify.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. What the Istanbul Finance Centre Adds</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>The 100% deduction on qualifying financial service export income is extended to <strong>December 31, 2047</strong>.</li><li>The exemption from financial activity fees was extended from 5 to <strong>20 years</strong>.</li><li>Transit trade profits receive a 100% deduction instead of 95%.</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">Location choice therefore matters: the same regime gives better rates in the Istanbul Finance Centre or designated zones.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Is It Right for Your Group?</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li><strong>Good fit:</strong> groups with subsidiaries in three or more countries that want a hub for treasury, shared services, technology or regional management, and that can build real substance (people, premises, decisions) in Turkey.</li><li><strong>Poor fit:</strong> groups whose Turkish company mainly serves the Turkish market, since the 80% foreign affiliate revenue test will not be met.</li><li><strong>Check:</strong> transfer pricing, permanent establishment risk for the group, and the work permit position of expatriate staff (<Link href="/en/blog/work-permit-for-foreign-company-owners-turkey-2026" className="font-semibold text-orange-600 underline">work permit guide</Link>).</li></ul><div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8"><h3 className="mb-4 text-2xl font-bold text-[#071A2F]">⚠️ Secondary Rules</h3><p className="leading-8 text-gray-700">Details such as the list of eligible services, application steps and employee conditions may be refined by secondary regulations. Confirm the current implementing text before committing to a structure.</p></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">5. How It Fits With the Rest of the Package</h2><p className="mb-6 text-lg leading-9 text-gray-700">The QSC regime sits beside the manufacturing rate and the transit trade and service export measures described in our <Link href="/en/blog/turkiye-2026-tax-incentive-package-foreign-investors" className="font-semibold text-orange-600 underline">2026 tax package guide</Link>. Dividends paid from a Turkish company to foreign shareholders still follow the withholding rules in the <Link href="/en/blog/foreign-owned-company-obligations-turkey-after-incorporation" className="font-semibold text-orange-600 underline">obligations guide</Link>.</p></section>
      <section id="faq" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">6. Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">{item.q}</h3>
              <p className="leading-8 text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">Conclusion</h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">The QSC regime is aimed at groups that want a real regional hub. The tax rate is attractive, but the benefit depends on genuine substance, the revenue mix and correct structuring across the group.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık can test whether your group meets the QSC conditions and plan the Turkish entity, staffing and tax structure. <Link href="/#contact" className="font-semibold text-orange-600 underline">Get in touch</Link>.</p>
        <p className="mt-6 text-sm leading-7 text-gray-500">General information as of October 2026, not legal or tax advice. Confirm current rules with the relevant authority before acting.</p>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">Related Articles</h2>
        <div className="grid gap-6 md:grid-cols-2"><Link href="/en/blog/advantages-of-investing-in-turkey-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">OVERVIEW</div><h3 className="text-lg font-bold text-[#071A2F]">Advantages of Investing in Turkey in 2026</h3></Link><Link href="/en/blog/turkiye-2026-tax-incentive-package-foreign-investors" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">TAX INCENTIVES</div><h3 className="text-lg font-bold text-[#071A2F]">Turkey&apos;s 2026 Tax Package for Foreign Investors</h3></Link></div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </BlogLayout>
  );
}
