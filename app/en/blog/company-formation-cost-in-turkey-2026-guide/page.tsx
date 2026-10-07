import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Company Formation Cost in Turkey 2026 | Koray Akdağ",
  description:
    "How much does it cost to set up a company in Turkey in 2026? Minimum capital, notary, chamber, gazette, accountant and other line items for an LLC (Ltd.) and a joint stock company (A.Ş.).",
  keywords: [
    "company formation cost in Turkey",
    "cost of setting up a company in Turkey 2026",
    "how much does it cost to open a company in Turkey",
    "Turkey LLC minimum capital",
    "Turkey joint stock company minimum capital",
    "Turkish company registration fees",
    "foreigner company setup Turkey cost",
  ],
  alternates: {
    canonical: "/en/blog/company-formation-cost-in-turkey-2026-guide",
    languages: {
      en: "/en/blog/company-formation-cost-in-turkey-2026-guide",
      tr: "/blog/turkiyede-sirket-kurma-maliyeti-2026",
    },
  },
};

const faq = [
  {
    q: "What is the minimum capital to set up a company in Turkey in 2026?",
    a: "For a limited liability company (Ltd.) the minimum capital is TRY 50,000, and for a joint stock company (A.Ş.) it is TRY 250,000 (TRY 500,000 for non-listed companies that adopt the registered capital system).",
  },
  {
    q: "Can a foreigner own 100% of a company in Turkey?",
    a: "In most sectors, yes. Foreign natural persons and legal entities can incorporate under the same rules as Turkish citizens. Some regulated sectors have their own licensing or ownership rules.",
  },
  {
    q: "Do I have to pay the full capital when registering the company?",
    a: "Not all at once. In a joint stock company at least one quarter of the capital is paid in before registration and the rest within 24 months after registration. An LLC is not subject to the same bank-blocking requirement at formation, and its capital can also be paid within 24 months. Confirm the rules for your exact structure.",
  },
  {
    q: "Is the capital part of the formation cost?",
    a: "No. Capital stays in the company's account and is used in its business. Formation costs are the one-off fees on top of it, such as notary, trade registry, chamber, gazette announcement and accountant fees.",
  },
  {
    q: "Does owning shares allow me to work in Turkey?",
    a: "No. Being a shareholder does not by itself give the right to work or manage the company in Turkey. A foreign manager or employee needs a work permit.",
  },
];

export default function BlogPageEn() {
  return (
    <BlogLayout
      title="Company Formation Cost in Turkey 2026: Line-by-Line Guide for Foreign Investors"
      description="A practical 2026 guide to what it really costs to set up an LLC (Ltd.) or a joint stock company (A.Ş.) in Turkey: minimum capital, official fees, professional fees, and the extra costs most guides leave out."
      category="COMPANY FORMATION • TURKEY • 2026"
      date="October 2026"
      readTime="9 Min Read"
      coverImage="https://images.unsplash.com/photo-1763965367191-6455ef032c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="company-formation-cost-in-turkey-2026-guide"
      lang="en"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Short Answer
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Setting up a company in Turkey has two separate cost layers:{" "}
          <strong>capital</strong>, which stays in the company, and{" "}
          <strong>formation expenses</strong>, which are one-off fees. In 2026
          the minimum capital is <strong>TRY 50,000 for an LLC (Ltd.)</strong>{" "}
          and <strong>TRY 250,000 for a joint stock company (A.Ş.)</strong>.
          Formation expenses are one-off fees on top of that. Published
          2026 estimates put them at roughly <strong>TRY 15,000 to 40,000
          for an LLC</strong> and <strong>TRY 20,000 to 90,000 for a joint
          stock company</strong>, before office rent. The wide range mostly
          reflects whether accountant and e-signature services are included.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          These are market estimates, not an official tariff. The final figure
          depends on the city, the capital amount, the sector and the service
          provider.
        </p>
      </div>

      <section className="mt-16 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Minimum Capital by Company Type
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Company type</th>
                <th className="p-5">Minimum capital (2026)</th>
                <th className="p-5">Shareholders</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Limited liability company (Ltd.)</td>
                <td className="p-5">TRY 50,000</td>
                <td className="p-5">1 to 50</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Joint stock company (A.Ş.)</td>
                <td className="p-5">TRY 250,000</td>
                <td className="p-5">At least 1</td>
              </tr>
              <tr>
                <td className="p-5">A.Ş. under the registered capital system (non-listed)</td>
                <td className="p-5">TRY 500,000</td>
                <td className="p-5">At least 1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Some sources still quote a TRY 10,000 minimum for a single-member
          LLC. That figure is outdated; our{" "}
          <Link
            href="/blog/anonim-limited-sirket-asgari-sermaye-artirimi-2026"
            className="font-semibold text-orange-600 underline"
          >
            minimum capital guide
          </Link>{" "}
          (in Turkish) explains the current thresholds and the deadline for
          older companies.
        </p>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Formation Expenses: Line by Line
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Turkish law firms and accounting firms publish quite different
          figures for 2026, so the table shows ranges compiled from several of
          them. They are not an official tariff and vary by city and provider.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Cost item</th>
                <th className="p-5">LLC (Ltd.), TRY</th>
                <th className="p-5">Joint stock (A.Ş.), TRY</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Notary</td>
                <td className="p-5">4,000 – 6,500</td>
                <td className="p-5">7,500 – 13,500</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Chamber of commerce, trade registry and gazette announcement</td>
                <td className="p-5">8,000 – 13,000</td>
                <td className="p-5">12,000 – 32,000</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Competition Authority share</td>
                <td className="p-5" colSpan={2}>0.04% of the capital (about TRY 20 on 50,000 and TRY 100 on 250,000)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">E-signature and financial seal</td>
                <td className="p-5" colSpan={2}>About 4,500 – 5,500 in total</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">Accountant formation service</td>
                <td className="p-5">11,000 – 15,000</td>
                <td className="p-5">22,000 – 30,000</td>
              </tr>
              <tr className="bg-orange-50 font-semibold">
                <td className="p-5">Typical total range (excluding capital and office)</td>
                <td className="p-5">About 15,000 – 40,000</td>
                <td className="p-5">About 20,000 – 90,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ How to Read These Numbers
          </h3>
          <p className="leading-8 text-gray-700">
            The low end of each range covers mostly the official items
            (notary, chamber, registry, gazette). The high end adds accountant
            and digital certificate services, which vary a lot between
            providers. Always ask what a quote includes before comparing, and
            confirm current fees with the notary, chamber and your accountant.
          </p>
        </div>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Costs Many Guides Leave Out
        </h2>
        <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">
          <li>
            <strong>Registered office:</strong> A real address is required. A
            virtual or shared office is cheaper than a leased unit, but must
            be accepted by the trade registry and tax office.
          </li>
          <li>
            <strong>Work permit and residence:</strong> Shareholding does not
            allow you to work or manage in Turkey. A foreign manager needs a
            work permit, which has its own fees and conditions.
          </li>
          <li>
            <strong>Monthly accounting:</strong> After registration, monthly
            bookkeeping, VAT and social security filings become a recurring
            cost.
          </li>
          <li>
            <strong>Bank account and capital transfer:</strong> Capital
            brought from abroad is transferred through a Turkish bank, and
            bank fees apply.
          </li>
          <li>
            <strong>Sector licenses:</strong> Regulated activities such as
            finance, energy, food or health require additional permits.
          </li>
        </ul>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. How the Process Works
        </h2>
        <ol className="ml-6 list-decimal space-y-4 text-lg text-gray-700 marker:font-bold marker:text-orange-500">
          <li>Choose the company type and prepare the articles of association.</li>
          <li>Register through MERSİS, the Ministry of Trade&apos;s central registry. Foreigners can log in with a passport or foreigner ID number.</li>
          <li>Sign at a notary (powers of attorney can be used if you are abroad).</li>
          <li>Pay the capital share required at registration into a bank account.</li>
          <li>Register with the trade registry and chamber.</li>
          <li>Complete tax office and social security registration, ledger certification and bank account opening.</li>
        </ol>
        <p className="mt-6 leading-8 text-gray-700">
          For a full step-by-step explanation, see our{" "}
          <Link
            href="/en/blog/how-to-set-up-a-company-in-turkey-a-to-z"
            className="font-semibold text-orange-600 underline"
          >
            A to Z company setup guide
          </Link>{" "}
          and the{" "}
          <Link
            href="/en/blog/sole-proprietorship-vs-llc-vs-joint-stock-company-turkey"
            className="font-semibold text-orange-600 underline"
          >
            comparison of company types
          </Link>
          .
        </p>
      </section>

      <section id="faq" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Frequently Asked Questions
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
          Budget for capital and formation expenses separately, and ask every
          provider exactly what their quote includes. The cheapest quote is
          rarely the cheapest outcome if work permit, accounting or licensing
          steps are missing.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık can prepare a company-specific
          cost estimate and handle formation, incentives and ongoing compliance
          from one point.{" "}
          <Link href="/#contact" className="font-semibold text-orange-600 underline">
            Get in touch
          </Link>{" "}
          to discuss your project.
        </p>
        <p className="mt-6 text-sm leading-7 text-gray-500">
          This article is for general information and is not legal or tax
          advice. Figures are indicative market estimates as of October 2026
          and should be confirmed before you proceed.
        </p>
      </section>

      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Related Articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/en/blog/investment-incentive-certificate-turkey-2026-guide"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">INCENTIVES</div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Investment Incentive Certificate in Turkey: 2026 Guide
            </h3>
          </Link>
          <Link
            href="/en/blog/technopark-in-turkey-tax-incentives-guide"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TECHNOPARK</div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Technopark in Turkey: Tax Incentives Guide
            </h3>
          </Link>
        </div>
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
