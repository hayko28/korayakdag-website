import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Foreign-Owned Company Obligations in Turkey 2026 | Koray Akdağ",
  description: "After incorporation, a foreign-owned company in Turkey has ongoing duties: E-TUYS foreign capital reporting, tax, bookkeeping, profit transfer and the 15% dividend withholding tax. A 2026 checklist.",
  keywords: ["foreign owned company obligations Turkey", "E-TUYS foreign capital notification", "Turkey dividend withholding tax 15%", "profit transfer foreign investor Turkey", "foreign capital company reporting Turkey", "Law No. 4875 foreign direct investment"],
  alternates: {
    canonical: "/en/blog/foreign-owned-company-obligations-turkey-after-incorporation",
    languages: {
      en: "/en/blog/foreign-owned-company-obligations-turkey-after-incorporation",
      tr: "/blog/yabanci-sermayeli-sirket-kurulus-sonrasi-yukumlulukler-2026",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    "q": "Does a foreign investor need permission to set up a company in Turkey?",
    "a": "No. Law No. 4875 removed permit requirements for foreign-owned companies and share acquisitions, though notification duties apply and some regulated sectors have their own licences."
  },
  {
    "q": "What must a foreign-owned company report?",
    "a": "Annual activity and capital information through E-TUYS by the end of May, and capital changes, share transfers and related payments within one month."
  },
  {
    "q": "What is the dividend withholding tax for foreign shareholders?",
    "a": "15% for dividends paid to individuals and non-resident corporations, in force since December 22, 2024 under Presidential Decision No. 9286. A tax treaty may reduce it for residents of treaty countries."
  },
  {
    "q": "Can foreign shareholders send profits abroad freely?",
    "a": "Yes. Law No. 4875 guarantees free transfer of net profit, dividends and sale or liquidation proceeds through banks, after the applicable taxes."
  },
  {
    "q": "Is E-TUYS reporting still required if I buy shares in an existing company?",
    "a": "Yes. Share acquisitions that give at least 10% ownership or voting rights, and later share transfers, are reported through E-TUYS within one month."
  }
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Foreign-Owned Company Obligations in Turkey After Incorporation: 2026 Checklist"
      description="What a foreign-owned company must keep doing after registration: foreign capital reporting through E-TUYS, ordinary tax and accounting duties, profit repatriation and the 15% dividend withholding tax."
      category="FOREIGN INVESTORS • COMPLIANCE • 2026"
      date="October 2026"
      readTime="8 Min Read"
      coverImage="https://images.unsplash.com/photo-1763965367191-6455ef032c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="foreign-owned-company-obligations-turkey-after-incorporation"
      lang="en"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8"><h2 className="mb-6 text-3xl font-bold text-[#071A2F]">📌 The Short Version</h2><p className="mb-6 text-lg leading-9 text-gray-700">Under Law No. 4875 on Foreign Direct Investment, foreign investors need no permit to set up or buy a company, and they are treated like Turkish investors. The trade-off is that a foreign-owned company has <strong>extra reporting duties</strong> on top of the normal tax and accounting obligations, and a dividend withholding tax when profit is paid to foreign shareholders.</p></div>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">1. Same Tax Regime as Turkish Companies</h2><p className="mb-6 text-lg leading-9 text-gray-700">A foreign-owned company is a corporate taxpayer like any Turkish company. It deals with corporate tax, VAT, withholding obligations and stamp duty, keeps books through a licensed accountant and files its returns and social security notifications. Monthly bookkeeping therefore becomes a permanent cost, which our <Link href="/en/blog/company-formation-cost-in-turkey-2026-guide" className="font-semibold text-orange-600 underline">formation cost guide</Link> covers.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">2. Foreign Capital Reporting Through E-TUYS</h2><p className="mb-6 text-lg leading-9 text-gray-700">Companies and branches with foreign capital report to the Ministry of Industry and Technology (Incentive Implementation and Foreign Capital General Directorate) through the <strong>E-TUYS</strong> system:</p><div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-left"><thead className="bg-[#071A2F] text-white"><tr><th className="p-5">Event</th><th className="p-5">Deadline</th></tr></thead><tbody><tr className="border-b hover:bg-gray-50"><td className="p-5">Annual activity and capital information</td><td className="p-5">By the end of May each year</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Capital increase or decrease</td><td className="p-5">Within 1 month</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Share transfers between domestic or foreign investors</td><td className="p-5">Within 1 month of completion</td></tr><tr className="border-b hover:bg-gray-50"><td className="p-5">Payments linked to a capital increase or share transfer</td><td className="p-5">Within 1 month of payment</td></tr></tbody></table></div><p className="mb-6 text-lg leading-9 text-gray-700">The foreign capital definition includes establishing a foreign-owned company or branch, capital changes, and share acquisitions that give at least 10% ownership or voting rights (stock-exchange purchases below that level are excluded). The reporting duty replaced the old permit system; the filing is a notification, but missing it creates compliance risk.</p></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">3. Sending Profits Abroad</h2><p className="mb-6 text-lg leading-9 text-gray-700">Law No. 4875 guarantees foreign investors the free transfer through banks of net profit, dividends, sale and liquidation proceeds and licence payments. In practice the tax on the distribution matters most.</p><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Dividends paid by a Turkish company to another Turkish corporate shareholder carry <strong>0%</strong> withholding.</li><li>Dividends paid to individuals and <strong>non-resident corporations</strong> carry <strong>15%</strong> withholding. The rate was raised from 10% to 15% by Presidential Decision No. 9286, effective December 22, 2024.</li><li>Tax treaties may provide a lower rate for residents of treaty countries, so the shareholder&apos;s country and holding structure should be checked before the first distribution.</li></ul><div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8"><h3 className="mb-4 text-2xl font-bold text-[#071A2F]">⚠️ Plan the Structure Early</h3><p className="leading-8 text-gray-700">Withholding tax, treaty benefits and the 2026 <Link href="/en/blog/turkiye-2026-tax-incentive-package-foreign-investors" className="font-semibold text-orange-600 underline">tax package</Link> can change the net return of a Turkish subsidiary. It is cheaper to design the shareholding structure before profits arise.</p></div></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">4. Annual and Ongoing Routine</h2><ol className="ml-6 list-decimal space-y-4 text-lg text-gray-700 marker:font-bold marker:text-orange-500"><li>Keep monthly accounting, VAT and social security filings up to date.</li><li>File the annual corporate tax return and financial statements after year end.</li><li>Submit the E-TUYS annual information by the end of May.</li><li>Report any capital change or share transfer within one month.</li><li>Keep work permits and the Turkish employee numbers in line with the permit conditions (<Link href="/en/blog/work-permit-for-foreign-company-owners-turkey-2026" className="font-semibold text-orange-600 underline">work permit guide</Link>).</li><li>If the company was formed before 2024, check whether its capital meets the new minimum amounts before the year-end deadline.</li></ol></section>
      <section className="mt-24 scroll-mt-24"><h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">5. Common Mistakes</h2><ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500"><li>Treating the E-TUYS notification as optional because no permit is required.</li><li>Paying dividends abroad without checking the treaty rate or the withholding mechanics.</li><li>Letting a foreign manager work without a work permit.</li><li>Underestimating the recurring accounting cost when budgeting.</li></ul></section>
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
        <p className="mb-6 text-lg leading-9 text-gray-700">The compliance load is manageable when it is on a calendar: monthly accounting, annual E-TUYS information by May, one-month reporting for changes. The costly mistakes happen in profit distribution and in people (permits), so address those in the structure from day one.</p>
        <p className="mt-6 text-lg leading-9 text-gray-700">Koray Akdağ / Sistem Global Danışmanlık can set up a compliance calendar for your Turkish subsidiary and coordinate accounting, E-TUYS reporting and incentive filings. <Link href="/#contact" className="font-semibold text-orange-600 underline">Get in touch</Link>.</p>
        <p className="mt-6 text-sm leading-7 text-gray-500">General information as of October 2026, not legal or tax advice. Confirm current rules with the relevant authority before acting.</p>
      </section>
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">Related Articles</h2>
        <div className="grid gap-6 md:grid-cols-2"><Link href="/en/blog/company-formation-cost-in-turkey-2026-guide" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">COMPANY FORMATION</div><h3 className="text-lg font-bold text-[#071A2F]">Company Formation Cost in Turkey 2026</h3></Link><Link href="/en/blog/work-permit-for-foreign-company-owners-turkey-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"><div className="mb-2 text-sm font-semibold text-orange-600">WORK PERMIT</div><h3 className="text-lg font-bold text-[#071A2F]">Work Permit for Foreign Company Owners in Turkey</h3></Link></div>
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
