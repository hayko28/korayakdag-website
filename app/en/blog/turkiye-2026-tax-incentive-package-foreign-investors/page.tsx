import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Turkey 2026 Tax Package for Foreign Investors | Koray Akdağ",
  description:
    "Turkey's 2026 investment tax package explained: 12.5% corporate tax for manufacturers, transit trade and qualified service centre deductions, and the 20-year foreign income exemption for relocating individuals.",
  keywords: [
    "Turkey corporate tax rate 2026",
    "Turkey 12.5% corporate tax manufacturing",
    "Strong Investment Hub Program Turkiye",
    "Turkey transit trade tax deduction",
    "Turkey qualified service centre",
    "Turkey 20 year tax exemption foreign income",
    "Law No. 7582 Turkey",
    "Turkey tax incentives foreign investors 2026",
  ],
  alternates: {
    canonical: "/en/blog/turkiye-2026-tax-incentive-package-foreign-investors",
    languages: {
      en: "/en/blog/turkiye-2026-tax-incentive-package-foreign-investors",
      tr: "/blog/turkiye-2026-yatirim-vergi-paketi-yabanci-yatirimci",
    },
  },
};

const faq = [
  {
    q: "What is the corporate tax rate in Turkey in 2026?",
    a: "The general corporate tax rate remains 25%. Under Law No. 7582, published in the Official Gazette on June 4, 2026, earnings from actual manufacturing and agricultural production by qualifying companies are taxed at 12.5% from the 2027 tax period. For the 2026 period, a one-point reduction for manufacturing earnings continues to apply.",
  },
  {
    q: "Who qualifies for the 12.5% rate?",
    a: "Companies that hold an industrial registration certificate and are actually engaged in manufacturing, and companies engaged in qualifying agricultural production. The rate applies only to profit from those activities, so mixed-activity companies must keep income separated by source.",
  },
  {
    q: "What is the 20-year exemption for relocating individuals?",
    a: "Individuals who become Turkish tax residents on or after January 1, 2026 and had no residence or disqualifying tax liability in Turkey during the previous three calendar years can be exempt from tax on foreign-source income and gains for 20 years. Turkish-source income remains taxable.",
  },
  {
    q: "What is a qualified service centre?",
    a: "A capital company that serves related entities in at least three different countries and earns at least 80% of its annual turnover from such foreign-related services. Eligible profits receive a 95% deduction, or 100% in the Istanbul Finance Centre or designated industrial zones, for 20 accounting periods.",
  },
  {
    q: "Are all of these measures already in force?",
    a: "Several are, but timing differs by measure (some apply from 2026 tax periods, the 12.5% rate from 2027), and details depend on secondary regulations. Confirm the current text before making an investment decision.",
  },
];

export default function BlogPageEn() {
  return (
    <BlogLayout
      title="Turkey's 2026 Tax Package for Foreign Investors: 12.5% Corporate Tax, Transit Trade and the 20-Year Exemption"
      description="What changed for foreign investors in 2026: the reduced corporate tax rate for manufacturers, deductions for transit trade and qualified service centres, and the special regime for individuals relocating to Turkey."
      category="TAX INCENTIVES • FOREIGN INVESTMENT • 2026"
      date="October 2026"
      readTime="10 Min Read"
      coverImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="turkiye-2026-tax-incentive-package-foreign-investors"
      lang="en"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 What Changed in 2026
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          On April 24, 2026 Turkey announced the &quot;Strong Investment Hub
          Program&quot;, a package aimed at making the country an investment,
          export and regional management hub. Its tax measures were
          legislated through <strong>Law No. 7582</strong> (adopted May 21,
          2026 and published in the Official Gazette on June 4, 2026) and
          Presidential Decision No. 11257 (April 30, 2026).
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ 12.5% corporate tax on manufacturing and agricultural earnings from 2027</li>
          <li>✔ 95% to 100% deduction for transit trade profits</li>
          <li>✔ New qualified service centre regime for regional hubs</li>
          <li>✔ 100% deduction for qualifying service exports</li>
          <li>✔ 20-year foreign income exemption for individuals who relocate</li>
        </ul>
      </div>

      <section className="mt-16 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. The Measures at a Glance
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Measure</th>
                <th className="p-5">Benefit</th>
                <th className="p-5">Applies from</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Manufacturing and agricultural production</td>
                <td className="p-5">12.5% corporate tax on that profit (general rate is 25%)</td>
                <td className="p-5">2027 tax period</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Transit trade</td>
                <td className="p-5">95% deduction, 100% in the Istanbul Finance Centre or designated zones</td>
                <td className="p-5">Tax periods starting Jan 1, 2026</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Qualified service centres</td>
                <td className="p-5">95% / 100% deduction on eligible foreign income, for 20 accounting periods</td>
                <td className="p-5">Per Law No. 7582 implementation provisions</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Service exports (software, engineering, design and others)</td>
                <td className="p-5">100% deduction on qualifying profit</td>
                <td className="p-5">Tax periods starting Jan 1, 2026</td>
              </tr>
              <tr>
                <td className="p-5">Relocating individuals</td>
                <td className="p-5">20-year exemption on foreign-source income and gains, 1% inheritance tax</td>
                <td className="p-5">Residents from Jan 1, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 12.5% Corporate Tax for Manufacturers
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Companies with an industrial registration certificate that are
          actually engaged in manufacturing, and companies in qualifying
          agricultural production, are taxed at 12.5% on that income from the
          2027 tax period. For the 2026 period a one-point reduction continues
          to apply.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            💡 Practical Point
          </h3>
          <p className="leading-8 text-gray-700">
            The reduced rate covers only manufacturing profit. If your company
            also trades or provides services, the income streams must be
            tracked separately. A manufacturing licence and the real
            production activity both matter.
          </p>
        </div>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Transit Trade and Qualified Service Centres
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          <strong>Transit trade</strong> means buying goods abroad and selling
          them abroad without importing them into Turkey. Profit from such
          activity receives a 95% deduction, rising to 100% inside the
          Istanbul Finance Centre or designated industrial zones. The goods
          must stay outside Turkey, both buyer and seller must be foreign, and
          profit must be transferred to Turkey by the tax return deadline.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          A <strong>qualified service centre</strong> must be a capital
          company serving related entities in at least three countries, with
          at least 80% of annual turnover from those foreign-related
          services. Eligible functions include financial advisory, treasury,
          HR, data analytics, compliance, technical support and R&amp;D
          coordination.
        </p>
        <p className="leading-8 text-gray-700">
          For holding groups that want a regional headquarters near Europe, the
          Middle East and Central Asia, this is the most relevant part of the
          package.
        </p>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. The 20-Year Exemption for Relocating Individuals
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Individuals who become Turkish tax residents on or after January 1,
          2026, and had no residence or disqualifying tax liability in Turkey
          in the previous three calendar years, can receive a 20-year
          exemption on foreign-source income and gains. Turkish-source income
          is still taxed. Assets passing by inheritance during the exemption
          period face a flat 1% inheritance tax.
        </p>
        <p className="leading-8 text-gray-700">
          One limitation to note: foreign taxes paid cannot be credited
          against Turkish income tax. Residence and work permit rules continue
          to apply separately. See our{" "}
          <Link
            href="/en/blog/company-formation-cost-in-turkey-2026-guide"
            className="font-semibold text-orange-600 underline"
          >
            company formation cost guide
          </Link>{" "}
          for the costs around setting up a company at the same time.
        </p>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. How This Fits With Other Incentives
        </h2>
        <p className="leading-8 text-gray-700">
          The tax package works alongside the{" "}
          <Link
            href="/en/blog/investment-incentive-certificate-turkey-2026-guide"
            className="font-semibold text-orange-600 underline"
          >
            Investment Incentive Certificate
          </Link>
          , technopark advantages and sector-specific support. Combining them
          is not automatic, and some measures cannot be stacked, so the
          structure should be planned before the investment starts.
        </p>
      </section>

      <section id="faq" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Frequently Asked Questions
        </h2>
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
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Conclusion
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          The 2026 package makes Turkey more attractive for manufacturers,
          regional hubs, exporters of services and relocating individuals.
          Because rates, conditions and start dates differ by measure, the
          right structure depends on your activity and where profit is booked.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık can help you test which
          measures fit your project and set up the company and incentive
          structure accordingly.{" "}
          <Link href="/#contact" className="font-semibold text-orange-600 underline">
            Get in touch
          </Link>
          .
        </p>
        <p className="mt-6 text-sm leading-7 text-gray-500">
          General information as of October 2026, not legal or tax advice.
          Sources include Law No. 7582, Presidential Decision No. 11257 and
          published analyses by KPMG, EY and Köksal Law Firm. Confirm the
          current legislative text before acting.
        </p>
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
