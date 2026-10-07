import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Turkish Citizenship by Investment 2026: Official Requirements | Koray Akdağ",
  description: "What Turkish citizenship by investment really requires in 2026: the USD 400,000 real estate route and its conditions, the USD 500,000 business and financial routes, holding periods and common misunderstandings.",
  keywords: ["Turkish citizenship by investment 2026", "Turkey citizenship USD 400,000 real estate", "Turkey citizenship fixed capital investment", "Turkey citizenship requirements", "Turkish Citizenship Law 5901 investment", "citizenship by investment Turkey business"],
  alternates: {
    canonical: "/en/blog/turkish-citizenship-by-investment-2026-official-requirements",
    languages: {
      en: "/en/blog/turkish-citizenship-by-investment-2026-official-requirements",
      tr: "/blog/yatirim-yoluyla-turk-vatandasligi-2026-resmi-sartlar",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "What is the minimum investment for Turkish citizenship in 2026?",
    "a": "USD 400,000 for the real estate route and USD 500,000 for the other investment routes (fixed capital, deposit, fund units), according to the official regulation and practitioner summaries. Confirm the current amounts before acting."
  },
  {
    "q": "How long must the property be held?",
    "a": "Three years, with a no-sale annotation recorded on the title deed."
  },
  {
    "q": "Can I use vacant land?",
    "a": "No. Since December 12, 2023, agricultural property and vacant land can no longer be used for the real estate route. The property must have a building on it."
  },
  {
    "q": "Does owning a company in Turkey give citizenship?",
    "a": "No. Company ownership alone does not. A qualifying fixed capital investment of at least USD 500,000 certified by the Ministry of Industry and Technology is a separate route."
  },
  {
    "q": "Is citizenship by investment the same as a residence permit?",
    "a": "No. Residence permits and citizenship are separate legal statuses with different requirements."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Turkish Citizenship by Investment in 2026: What the Official Rules Require"
      description="The real estate and business routes to Turkish citizenship, official amounts and holding periods, what changed for land in 2023, and what the process does not guarantee."
      category="CITIZENSHIP • INVESTORS • 2026"
      date="October 2026"
      readTime="8 Min Read"
      coverImage="https://images.unsplash.com/photo-1763965367191-6455ef032c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="turkish-citizenship-by-investment-2026-official-requirements"
      lang="en"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 Before You Read</h2><p className="mb-6 text-lg leading-9 text-gray-700">Citizenship by investment is a <strong>legal status decision</strong>, not a company-formation product. It is granted by Presidential decision under Law No. 5901 on Turkish Citizenship, and the rules are set in the implementing regulation. This article summarises the official requirements as published on the authorities&apos; portal and is not an invitation to buy property or invest for citizenship. Always confirm the current rules with a licensed lawyer.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. The Real Estate Route (Official Wording)</h2><p className="mb-6 text-lg leading-9 text-gray-700">According to the official Your Key Türkiye portal, under Article 20(2)(b) of the Regulation on the Implementation of the Turkish Citizenship Law, a foreign person can acquire citizenship by Presidential decision if they:</p><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>buy real estate worth <strong>at least USD 400,000</strong> (or the equivalent in foreign currency), with a <strong>three-year no-sale annotation</strong> on the title deed; or</li><li>have a notarised promise-to-sell contract for a condominium or construction-easement property, with at least USD 400,000 paid in advance and a three-year annotation that the property will not be transferred or cancelled.</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">The amount must be established by the Ministry of Environment, Urbanisation and Climate Change.</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Rule</th><th className="p-5">Detail</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Minimum value</td><td className="p-5">USD 400,000 (since September 19, 2018, after an earlier USD 1 million period)</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Currency</td><td className="p-5">The Turkish lira option was removed in 2022; the foreign currency amount must be sold to a bank for the Central Bank</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Land</td><td className="p-5">Since December 12, 2023, agricultural property and vacant land can no longer be used. Land must have a building on it</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Holding</td><td className="p-5">Three years, recorded on the title deed</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Lower route</td><td className="p-5">The former USD 250,000 route has ended</td></tr></tbody></table></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. The Business and Financial Routes</h2><p className="mb-6 text-lg leading-9 text-gray-700">The same regulation provides routes at <strong>USD 500,000</strong> that do not depend on real estate. According to practitioner summaries of the regulation, these include:</p><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>A <strong>fixed capital investment</strong> of at least USD 500,000 certified by the Ministry of Industry and Technology</li><li>A bank <strong>deposit</strong> of at least USD 500,000 held for three years</li><li>Purchase of <strong>real estate investment fund or venture capital fund units</strong> worth at least USD 500,000 held for three years</li><li>A route based on <strong>creating employment</strong> for at least 50 people</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">For company owners, the fixed capital investment route connects with the structures covered in our <Link href="/en/blog/company-formation-cost-in-turkey-2026-guide" className="font-semibold text-orange-600 underline">company formation cost guide</Link> and <Link href="/en/blog/investment-incentive-certificate-turkey-2026-guide" className="font-semibold text-orange-600 underline">incentive certificate guide</Link>. The qualifying investment and its certification are specific, so a normal company capital contribution does not automatically qualify.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. Common Misunderstandings</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li><strong>Owning shares in a Turkish company is not citizenship.</strong> It does not give a work permit either (<Link href="/en/blog/work-permit-for-foreign-company-owners-turkey-2026" className="font-semibold text-orange-600 underline">work permit guide</Link>).</li><li><strong>Residence permits and citizenship are different routes.</strong> A property can support residence without meeting the citizenship threshold.</li><li><strong>The 3-year holding condition is binding.</strong> Selling early can put the status at risk.</li><li><strong>Total cost is higher than the threshold.</strong> Fees, valuation and legal costs are additional.</li><li><strong>Rules change.</strong> Thresholds and conditions were changed several times (2017, 2018, 2022, 2023), so older articles are often out of date.</li></ul></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Practical Advice</h2><p className="mb-6 text-lg leading-9 text-gray-700">Citizenship decisions are personal and long-term. Check the current regulation and the Ministry&apos;s valuation requirements, use a licensed lawyer and a licensed valuer, and keep payment and currency conversion records. If the goal is a business presence in Turkey rather than a passport, the company, work permit and incentive routes in this series are usually the better starting point (<Link href="/en/blog/advantages-of-investing-in-turkey-2026" className="font-semibold text-orange-600 underline">advantages overview</Link>).</p></section>
      <section id="faq" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">5. Frequently Asked Questions</h2>
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
        <p className="mb-6 text-lg leading-9 text-gray-700">The official rules are narrower and stricter than many sales pages suggest. Treat citizenship as a legal decision, verify the current regulation, and separate it from the business case for investing in Turkey.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık can help structure the business side of an investment in Turkey. For citizenship applications themselves, please consult a licensed immigration lawyer. <Link href="/#contact" className="font-semibold text-orange-600 underline">Get in touch</Link>.</p>
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
