import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Which Sectors to Invest in Turkey 2026 | Koray Akdağ",
  description: "Where foreign direct investment actually goes in Turkey, which sectors the government prioritises, and how export strength points to opportunities. A data-based 2026 view for investors.",
  keywords: ["best sectors to invest in Turkey", "Turkey FDI by sector 2025", "Turkey priority investment sectors", "investment opportunities Turkey 2026", "Turkey FDI manufacturing information technology", "Turkey FDI source countries"],
  alternates: {
    canonical: "/en/blog/which-sectors-to-invest-in-turkey-2026",
    languages: {
      en: "/en/blog/which-sectors-to-invest-in-turkey-2026",
      tr: "/blog/turkiyede-hangi-sektorlere-yatirim-yapilmali-2026",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "Which sectors attract the most FDI in Turkey?",
    "a": "In the third quarter of 2025 manufacturing (29.9%) and information-communication (26.1%) together accounted for about 56% of FDI. Shares vary by period and measure."
  },
  {
    "q": "Which sectors does the government prioritise?",
    "a": "The FDI Strategy 2024-2028 prioritises green and sustainable investments, digital transformation and advanced technologies, supply-chain relocation and high-employment, high-value-added projects."
  },
  {
    "q": "Which countries invest most in Turkey?",
    "a": "In the third quarter of 2025 the Netherlands and Luxembourg led, followed by Kazakhstan, Germany and the UAE. Holding structures can mean the ultimate investor is elsewhere."
  },
  {
    "q": "Are there tax incentives for service and software exporters?",
    "a": "Yes. Presidential Decision No. 11257 raised the deduction on qualifying service exports, including software, engineering, design and data services, to 100% for tax periods starting January 1, 2026."
  },
  {
    "q": "Is the best sector the one with the most FDI?",
    "a": "Not necessarily. Use FDI data, policy priorities and export strength as filters, then test the numbers for your own customers and cost base."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Which Sectors to Invest in Turkey in 2026? What the Data and Policy Say"
      description="FDI flows by sector and source country, the government's priority areas, and export strengths, with the caveats that matter when choosing a sector."
      category="INVESTING IN TURKEY • SECTORS • 2026"
      date="October 2026"
      readTime="8 Min Read"
      coverImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="which-sectors-to-invest-in-turkey-2026"
      lang="en"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 The Honest Answer</h2><p className="mb-6 text-lg leading-9 text-gray-700">No single sector is right for everyone, but three sources of evidence point the same way: where foreign money is actually going (<strong>manufacturing and information-communication</strong>), where the state wants it (<strong>green, digital, supply-chain relocation, high value added</strong>), and where Turkey already exports strongly (<strong>automotive, chemicals, electrical-electronics</strong>). Use them as a filter, then test your own business case.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. Where FDI Went: A Recent Snapshot</h2><p className="mb-6 text-lg leading-9 text-gray-700">According to a TEPAV bulletin on the third quarter of 2025, gross FDI inflows were about USD 5.0 billion (USD 2.4 billion net, USD 1.6 billion excluding real estate). The sector split of that quarter:</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Indicator (Q3 2025)</th><th className="p-5">Figure</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Manufacturing share of FDI</td><td className="p-5">29.9%</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Information-communication share</td><td className="p-5">26.1%</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Combined share of the two</td><td className="p-5">About 56%</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Largest source countries</td><td className="p-5">Netherlands 28.6%, Luxembourg 26.7%, then Kazakhstan, Germany and the UAE (each above 5%)</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">New foreign-capital companies</td><td className="p-5">2,334 (up 16.9%), of which 89.4% were limited companies</td></tr></tbody></table></div><div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8"><h3 className="mb-4 text-2xl font-bold text-[#071A2F]">⚠️ Read With Care</h3><p className="leading-8 text-gray-700">One quarter is a snapshot, and sector shares move from quarter to quarter. Source-country figures often reflect holding structures, so the country of the immediate investor may differ from the ultimate owner.</p></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. Where Government Policy Points</h2><p className="mb-6 text-lg leading-9 text-gray-700">Turkey&apos;s FDI Strategy 2024-2028 names these priorities:</p><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Green and sustainable investments</li><li>Digital transformation and advanced technologies</li><li>Supply-chain relocation projects</li><li>Investments with high employment and high added value</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">The 2026 tax measures follow the same logic: a 12.5% rate for manufacturers from 2027, 100% deductions for qualifying service exports (software, engineering, design, data services and others), and the Qualified Service Centre regime for regional hubs (<Link href="/en/blog/turkiye-2026-tax-incentive-package-foreign-investors" className="font-semibold text-orange-600 underline">tax package</Link>, <Link href="/en/blog/regional-headquarters-turkey-qualified-service-centre-2026" className="font-semibold text-orange-600 underline">regional headquarters</Link>).</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. Where Turkey Already Exports</h2><p className="mb-6 text-lg leading-9 text-gray-700">In 2025 Turkey&apos;s goods exports reached a record USD 273.4 billion. Automotive led with USD 41.5 billion, followed by chemicals (USD 31.9 billion) and electrical-electronics (USD 17.7 billion). Existing strength means supplier networks, skilled labour and logistics are already in place for newcomers in these chains.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. A Simple Way to Choose</h2><ol className="ml-6 list-decimal space-y-4 text-lg text-gray-700 marker:font-bold marker:text-orange-500"><li><strong>Start with customers:</strong> are you selling to Turkey, to Europe, to the Middle East or Africa, or to your own group?</li><li><strong>Match the structure:</strong> exporting manufacturing fits free zones or the 12.5% rate; software and engineering services fit the service export deduction; group functions fit a Qualified Service Centre (<Link href="/en/blog/free-zones-in-turkey-2026-guide-foreign-investors" className="font-semibold text-orange-600 underline">free zones</Link>).</li><li><strong>Check incentives early:</strong> an incentive certificate must be applied for before the investment starts (<Link href="/en/blog/investment-incentive-certificate-turkey-2026-guide" className="font-semibold text-orange-600 underline">incentive certificate guide</Link>).</li><li><strong>Plan people and permits</strong> for foreign managers (<Link href="/en/blog/work-permit-for-foreign-company-owners-turkey-2026" className="font-semibold text-orange-600 underline">work permits</Link>).</li></ol></section>
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
        <p className="mb-6 text-lg leading-9 text-gray-700">Manufacturing, technology and export-linked services have the strongest combination of evidence and policy support today. The right sector for you still comes from your customers, your cost structure and the incentive route you can actually qualify for.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık can help shortlist sectors for your project and match each with the right structure and incentives. <Link href="/#contact" className="font-semibold text-orange-600 underline">Get in touch</Link>.</p>
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
