import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "How to Acquire a Company in Turkey: Foreign Investor Guide 2026 | Koray Akdağ",
  description: "Buying a Turkish company as a foreign investor: share purchase vs asset deal, due diligence, share transfer formalities, 2026 Competition Authority thresholds and E-TUYS reporting.",
  keywords: ["acquire a company in Turkey", "buy a company in Turkey foreign investor", "M&A Turkey foreign investor", "Turkey share purchase agreement", "Turkey merger control thresholds 2026", "Turkey due diligence acquisition", "share transfer Turkey limited company"],
  alternates: {
    canonical: "/en/blog/how-to-acquire-a-company-in-turkey-foreign-investor-guide",
    languages: {
      en: "/en/blog/how-to-acquire-a-company-in-turkey-foreign-investor-guide",
      tr: "/blog/turkiyede-sirket-satin-alma-yabanci-yatirimci-rehberi",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "Can a foreigner buy a company in Turkey?",
    "a": "Generally yes. Foreign investors can acquire interests in Turkish companies freely, with some sector-specific licences and approvals."
  },
  {
    "q": "Is a share purchase better than an asset purchase in Turkey?",
    "a": "A share purchase is the most common structure and usually needs fewer procedural steps, but you inherit the company's liabilities, so due diligence and contract protections matter more."
  },
  {
    "q": "When is Competition Authority approval needed?",
    "a": "Since February 11, 2026, when the parties' combined Turkish turnover exceeds TRY 3 billion and at least two parties each exceed TRY 1 billion, or when one party exceeds TRY 1 billion in Turkey and another exceeds TRY 9 billion worldwide. For technology undertakings in Turkey the TRY 1 billion threshold is TRY 250 million."
  },
  {
    "q": "How is a limited company share transfer completed?",
    "a": "A written, notarised agreement, general assembly approval unless the articles say otherwise, an entry in the share ledger, then a trade registry application and publication in the Gazette."
  },
  {
    "q": "What must a foreign buyer report after acquiring shares?",
    "a": "Acquisitions that give at least 10% ownership or voting rights are reported through E-TUYS within one month."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="How to Acquire a Company in Turkey: A Foreign Investor's 2026 Guide"
      description="Share deal or asset deal, what due diligence should cover, how a share transfer is completed, when Competition Authority approval is needed after the February 2026 threshold change, and what to report afterwards."
      category="M&A • FOREIGN INVESTORS • 2026"
      date="October 2026"
      readTime="10 Min Read"
      coverImage="https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="how-to-acquire-a-company-in-turkey-foreign-investor-guide"
      lang="en"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 What to Know First</h2><p className="mb-6 text-lg leading-9 text-gray-700">Foreign entities can generally acquire Turkish companies freely, without a government permit, though some regulated sectors and larger deals add approvals. Most private deals are <strong>share purchases</strong>, which usually need fewer steps than asset sales. The key checkpoints are <strong>due diligence, the share purchase agreement, formal transfer, merger control and E-TUYS reporting</strong>.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. Share Deal or Asset Deal?</h2><p className="mb-6 text-lg leading-9 text-gray-700">In a share deal you buy the company with its history: contracts, licences, employees, but also hidden liabilities. In an asset deal you pick the assets and liabilities you want, but each contract, licence and employee usually has to be transferred separately. In Turkey the share sale is the common structure and is often simpler procedurally and tax-wise, so the real work moves into due diligence and contract protection.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. Due Diligence: What to Check</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Corporate structure, ownership and the share ledger</li><li>Contracts, leases, licences and permits</li><li>Financial records, tax position and open audits</li><li>Employment and social security compliance</li><li>Intellectual property and data protection (including <Link href="/blog/kvkk-uyum-sureci-sirketler-icin-kisisel-verilerin-korunmasi-rehberi-2026" className="font-semibold text-orange-600 underline">personal data compliance</Link>, in Turkish)</li><li>Litigation, liens and guarantees over shares or assets</li></ul><p className="mb-6 text-lg leading-9 text-gray-700">A price is only meaningful after valuation. Our <Link href="/en/blog/company-valuation-turkey-methods-guide-2026" className="font-semibold text-orange-600 underline">valuation guide</Link> explains the main methods, and the Turkish <Link href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026" className="font-semibold text-orange-600 underline">due diligence article</Link> goes deeper.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. The Share Purchase Agreement</h2><p className="mb-6 text-lg leading-9 text-gray-700">The SPA sets the price and payment mechanics, representations and warranties, indemnities and closing conditions. Findings from due diligence should turn into price adjustments, specific indemnities or conditions precedent rather than sit in a report.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Completing the Transfer (Limited Company)</h2><p className="mb-6 text-lg leading-9 text-gray-700">For a limited company, the transfer is valid only when the agreement is in writing and notarised, the general assembly approves it (unless the articles provide otherwise) and the transfer is recorded in the share ledger. The parties then apply to the trade registry with the notarised agreement, the notarised general assembly resolution and the share ledger page, and the change is published in the Trade Registry Gazette. Joint stock company shares follow different formalities, so check the articles of association and the share type.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">5. Competition Authority Approval</h2><p className="mb-6 text-lg leading-9 text-gray-700">Turkey&apos;s merger control rules changed on February 11, 2026 (Communiqué No. 2026/2, Official Gazette No. 33165). A transaction needs Competition Board approval when either of these tests is met:</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Test</th><th className="p-5">Threshold</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Combined Turkish turnover of the parties, and each of at least two parties</td><td className="p-5">Above TRY 3 billion combined, and above TRY 1 billion for each of two parties</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">One party&apos;s Turkish turnover, and another party&apos;s worldwide turnover</td><td className="p-5">Above TRY 1 billion Turkish turnover and above TRY 9 billion worldwide turnover</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Technology undertakings in Turkey (software, digital platforms, fintech, biotech, health technologies and similar)</td><td className="p-5">The TRY 1 billion Turkish turnover threshold is lowered to TRY 250 million</td></tr></tbody></table></div><p className="mb-6 text-lg leading-9 text-gray-700">Small targets are often below the thresholds, but technology targets can be caught with a much lower turnover. Closing before approval when it is required is a breach, so check this at the start.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">6. After Closing</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Report the share acquisition (at least 10% ownership or voting rights) through E-TUYS within one month (<Link href="/en/blog/foreign-owned-company-obligations-turkey-after-incorporation" className="font-semibold text-orange-600 underline">obligations checklist</Link>).</li><li>Update work permits and management appointments.</li><li>Share transfers are exempt from VAT. The income or corporate tax treatment of the seller&apos;s gain depends on the seller&apos;s status, holding period and any tax treaty, so tax planning belongs before signing.</li></ul></section>
      <section id="faq" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">7. Frequently Asked Questions</h2>
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
        <p className="mb-6 text-lg leading-9 text-gray-700">A Turkish acquisition succeeds or fails before signing: valuation, due diligence, the SPA protections and a check on merger control. The formalities afterwards are routine if the structure was planned.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık can support the valuation, due diligence coordination and post-closing compliance for your acquisition. <Link href="/#contact" className="font-semibold text-orange-600 underline">Get in touch</Link>.</p>
        <p className="mt-6 text-sm leading-7 text-gray-500">General information as of October 2026, not legal or tax advice. Confirm current rules with the relevant authority before acting.</p>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">Related Articles</h2>
        <div className="grid gap-6 md:grid-cols-2"><Link href="/en/blog/company-valuation-turkey-methods-guide-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">VALUATION</div><h3 className="text-lg font-bold text-[#071A2F]">What Is Company Valuation? Methods and Process</h3></Link><Link href="/en/blog/foreign-owned-company-obligations-turkey-after-incorporation" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">COMPLIANCE</div><h3 className="text-lg font-bold text-[#071A2F]">Foreign-Owned Company Obligations in Turkey</h3></Link></div>
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
