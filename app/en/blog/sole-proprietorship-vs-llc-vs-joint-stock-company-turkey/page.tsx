import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Sole Proprietorship vs LLC vs Joint Stock Co. | Koray Akdağ",
  description:
    "Comparing formation cost, liability, tax, minimum capital, and management for a sole proprietorship, limited company, and joint stock company in Turkey (2026).",
  keywords: [
    "sole proprietorship vs limited company Turkey",
    "limited company vs joint stock company Turkey",
    "choosing a company type in Turkey",
    "converting a sole proprietorship to a limited company",
    "joint stock company advantages Turkey",
    "limited company formation cost Turkey 2026",
    "corporate tax rate Turkey 2026",
    "minimum capital limited joint stock Turkey",
    "type conversion Turkey company",
    "which company type should an entrepreneur set up",
  ],
  alternates: {
    canonical: "/en/blog/sole-proprietorship-vs-llc-vs-joint-stock-company-turkey",
    languages: {
      en: "/en/blog/sole-proprietorship-vs-llc-vs-joint-stock-company-turkey",
      tr: "/blog/sahis-limited-anonim-sirket-karsilastirma",
    },
  },
};

export default function BlogPageEn() {
  return (
    <BlogLayout
      title="Sole Proprietorship, Limited Company or Joint Stock Company? How Should Entrepreneurs Solve This Equation?"
      description="Comparing the sole proprietorship, the limited company, and the joint stock company in Turkey in terms of formation cost, liability, tax burden, minimum capital, and growth potential, with current 2026 figures, to help you choose the type that fits your entrepreneur profile."
      category="COMPANY FORMATION • ENTREPRENEURSHIP • 2026"
      date="2026"
      readTime="12 Min Read"
      slug="sole-proprietorship-vs-llc-vs-joint-stock-company-turkey"
      coverImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      lang="en"
    >
      {/* INTRO */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 What Will You Find in This Guide?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          When starting a new business, the first question asked is usually
          not &quot;what product will I sell&quot; or &quot;which market
          will I enter,&quot; but &quot;which company type should I start
          with.&quot; The difference between a sole proprietorship, a
          limited company, and a joint stock company is not merely a change
          of name on paper; it directly determines your formation cost, tax
          burden, personal liability, and whether your company will be able
          to raise investment down the line.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ The legal framework and core differences of the three company types</li>
          <li>✔ A comparison of 2026 current formation cost and time</li>
          <li>✔ The critical difference between unlimited and limited liability</li>
          <li>✔ A comparison of income tax and corporate tax</li>
          <li>✔ 2026 minimum capital requirements and the compliance obligation</li>
          <li>✔ A decision table based on entrepreneur profile</li>
          <li>✔ Can the company type be changed later?</li>
        </ul>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 Table of Contents
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a href="#tanimlar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            1. What Are a Sole Proprietorship, Limited Company, and Joint Stock Company?
          </a>
          <a href="#maliyet-sure" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            2. Formation Cost and Time
          </a>
          <a href="#sorumluluk" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            3. The Liability Difference: Why Is It Critical?
          </a>
          <a href="#vergi" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            4. Tax Differences
          </a>
          <a href="#sermaye" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            5. Minimum Capital Requirements (2026)
          </a>
          <a href="#ortaklik" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            6. Number of Partners, Management, and Share Transfer
          </a>
          <a href="#itibar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            7. Corporate Reputation and Growth Potential
          </a>
          <a href="#karar" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            8. Which Type Fits Which Entrepreneur?
          </a>
          <a href="#nevi-degisikligi" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            9. Changing Company Type Later
          </a>
          <a href="#sss" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            10. Frequently Asked Questions
          </a>
          <a href="#sonuc" className="rounded-lg border p-4 hover:border-orange-500 hover:bg-orange-50">
            11. Conclusion
          </a>
        </div>
      </div>

      {/* 1 */}
      <section id="tanimlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. What Are a Sole Proprietorship, Limited Company, and Joint Stock Company?
        </h2>
        <p className="mb-6 text-lg leading-9">
          Under Turkish law, commercial activity is carried out through
          three main structures. A sole proprietorship is a business set up
          in the name of a single individual under the Turkish Commercial
          Code (TCC) and the Income Tax Law; it has no legal personality and
          is legally merged with the business owner. A limited company and
          a joint stock company, on the other hand, are structures regulated
          under the capital companies heading of the TCC, each with its own
          legal personality.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Sole Proprietorship
            </h3>
            <p className="leading-7 text-gray-700">
              Set up by a single individual, with no legal personality. The
              business owner and the business are legally the same person;
              debts and receivables belong directly to the individual.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Limited Company
            </h3>
            <p className="leading-7 text-gray-700">
              A capital company that can be set up with 1-50 partners. The
              partners&apos; liability is limited to the capital share they
              have committed.
            </p>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Joint Stock Company
            </h3>
            <p className="leading-7 text-gray-700">
              A capital company whose capital is divided into shares, which
              can be set up with at least 1 partner and has no legal cap on
              the number of partners.
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg leading-9">
          In practice, the most commonly set up type of capital company is
          the limited company; ventures with plans to grow, raise
          investment, or go public generally either prefer the joint stock
          company structure or transition to it over time.
        </p>
      </section>

      {/* 2 */}
      <section id="maliyet-sure" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Comparison of Formation Cost and Time
        </h2>
        <p className="mb-8 text-lg leading-9">
          Formation cost is usually the first deciding criterion for
          entrepreneurs. As of 2026, the cost difference between the three
          company types is fairly noticeable.
        </p>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Criterion</th>
                <th className="p-4 text-left">Sole Proprietorship</th>
                <th className="p-4 text-left">Limited Company</th>
                <th className="p-4 text-left">Joint Stock Company</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Formation Cost</td>
                <td className="p-4">~TL 8,000 - 13,500</td>
                <td className="p-4">~TL 24,000 - 32,000</td>
                <td className="p-4">~TL 33,000 - 42,000</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Capital Blockage</td>
                <td className="p-4">None</td>
                <td className="p-4">None</td>
                <td className="p-4">1/4 of capital blocked at the bank</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Formation Time</td>
                <td className="p-4">1-3 business days</td>
                <td className="p-4">3-7 business days</td>
                <td className="p-4">5-10 business days</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold">Bookkeeping/Filing Burden</td>
                <td className="p-4">Relatively low</td>
                <td className="p-4">Medium - high</td>
                <td className="p-4">High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Figures are average amounts that vary by province, chamber of
          commerce, and the accounting firm you choose; contact us for the
          exact cost.
        </p>

        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            What Does Capital Blockage Mean in a Joint Stock Company?
          </h3>
          <p className="leading-8 text-gray-700">
            When setting up a joint stock company, at least a quarter of the
            committed cash capital must be deposited and blocked at a bank
            before registration. There is no such upfront payment
            requirement in a limited company; the capital commitment can
            generally be transferred to the company within 24 months of
            formation.
          </p>
        </div>
      </section>

      {/* 3 */}
      <section id="sorumluluk" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. The Liability Difference: Why Is It a Critical Decision Criterion?
        </h2>
        <p className="mb-8 text-lg leading-9">
          The issue most often overlooked when choosing a company type — yet
          carrying the highest risk — is the liability regime. As your
          business grows, or as you operate in a sector with increasing debt
          exposure, this difference becomes progressively more important.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-red-700">
              Sole Proprietorship: Unlimited Liability
            </h3>
            <p className="leading-8 text-gray-700">
              In a sole proprietorship, the business and the business owner
              are legally the same person. All of the entrepreneur&apos;s
              personal assets (including their home, car, and bank
              accounts) fall within the scope of liability for the
              business&apos;s debts. If the business risk is low, this is
              manageable; but in businesses with high supplier, credit, or
              contract risk, it can turn into a significant disadvantage.
            </p>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-green-700">
              Limited/Joint Stock: Limited Liability
            </h3>
            <p className="leading-8 text-gray-700">
              In a limited company and a joint stock company, the
              partners&apos; liability is, in principle, limited to the
              capital share they have committed to the company. As a general
              rule, a partner&apos;s personal assets cannot be pursued for
              the company&apos;s commercial debts. (Exception: partners of a
              limited company can still be held liable, in proportion to
              their capital share, for public debts — such as tax or social
              security premiums — that cannot be collected from the
              company.)
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Tax Differences: Income Tax or Corporate Tax?
        </h2>
        <p className="mb-8 text-lg leading-9">
          Tax burden differs significantly between company types depending
          on your profit margin and growth speed. The core rates in force
          as of 2026 are as follows:
        </p>

        <div className="space-y-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Sole Proprietorship: Progressive Income Tax
            </h3>
            <p className="leading-8 text-gray-700">
              A sole proprietorship&apos;s profit is taxed, as the business
              owner&apos;s commercial income, under the Income Tax Law on a
              bracketed tariff ranging from 15% to 40%. For 2026, the first
              bracket threshold for non-wage (commercial) income is TL
              190,000, and the top bracket threshold is TL 5,300,000. Tax is
              collected in a single stage; there is also no dividend
              withholding.
            </p>
            <p className="mt-5 leading-8 text-gray-700">
              For young entrepreneurs between the ages of 18-29 who
              establish tax liability for the first time, TL 400,000 of
              earnings is exempt from income tax for 3 taxation periods in
              2026. This exemption covers only income tax; it does not
              affect VAT or other obligations.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Limited/Joint Stock: Two-Stage Taxation
            </h3>
            <p className="leading-8 text-gray-700">
              In limited and joint stock companies, profit is first subject
              to a 25% corporate tax at the company level (30% for banking
              and financial institutions, or 20% with a 5-point reduction on
              export earnings). When the profit is distributed to partners,
              a second-stage dividend withholding — raised from 10% to 15%
              under the Presidential Decision dated December 22, 2024 — then
              comes into play.
            </p>
            <p className="mt-5 leading-8 text-gray-700">
              For companies that keep their profit within the company and
              redirect it into new investment rather than distributing it,
              this second stage does not come into play; this is why the
              flat 25% rate can be advantageous compared to the bracketed
              income tax tariff at high profit levels for growth-focused
              ventures.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Is There a Difference in Terms of VAT?
            </h3>
            <p className="leading-8 text-gray-700">
              VAT liability is independent of company type; all three
              structures are subject to VAT at the general rate of 20% (1%
              or 10% on some goods and services). Company type does not
              determine the VAT rate, only which tax regime the earnings
              will be subject to.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Tax Item</th>
                <th className="p-4 text-left">Sole Proprietorship</th>
                <th className="p-4 text-left">Limited / Joint Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">On Earnings</td>
                <td className="p-4">Income Tax (15% - 40%)</td>
                <td className="p-4">Corporate Tax (25%)</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Profit Distribution</td>
                <td className="p-4">No additional withholding</td>
                <td className="p-4">15% dividend withholding</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold">VAT</td>
                <td className="p-4">20% (general rate)</td>
                <td className="p-4">20% (general rate)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5 */}
      <section id="sermaye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Minimum Capital Requirements (2026 Current)
        </h2>
        <p className="mb-8 text-lg leading-9">
          There is no legal minimum capital requirement for a sole
          proprietorship. For capital companies, the amounts set by the TCC
          and the Presidential Decision apply.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-gray-50 p-6 text-center">
            <p className="text-sm font-semibold text-gray-500">
              Sole Proprietorship
            </p>
            <p className="mt-2 text-3xl font-extrabold text-[#071A2F]">
              No Minimum Capital
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
            <p className="text-sm font-semibold text-blue-700">
              Limited Company
            </p>
            <p className="mt-2 text-3xl font-extrabold text-[#071A2F]">
              TL 50,000
            </p>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 text-center">
            <p className="text-sm font-semibold text-orange-700">
              Joint Stock Company
            </p>
            <p className="mt-2 text-3xl font-extrabold text-[#071A2F]">
              TL 250,000
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          For non-public joint stock companies that have adopted the
          registered capital system, the starting capital is TL 500,000.
        </p>

        <div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ The December 31, 2026 Compliance Deadline
          </h3>
          <p className="leading-8 text-gray-700">
            These amounts already apply to companies established after
            January 1, 2024. Existing limited and joint stock companies
            established before that date whose capital falls below these
            amounts must raise their capital to the legal minimum by{" "}
            <strong>December 31, 2026</strong>; otherwise, the company is
            deemed dissolved by law. While this issue is clear for new
            company formations, entrepreneurs who will take over an
            existing company or work with a company established before that
            date must keep this deadline firmly on their agenda.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section id="ortaklik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Number of Partners, Management Structure, and Share Transfer
        </h2>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4 text-left">Criterion</th>
                <th className="p-4 text-left">Sole Proprietorship</th>
                <th className="p-4 text-left">Limited Company</th>
                <th className="p-4 text-left">Joint Stock Company</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Number of Partners</td>
                <td className="p-4">A single individual</td>
                <td className="p-4">1 - 50 partners</td>
                <td className="p-4">1 - unlimited partners</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-4 font-semibold">Management</td>
                <td className="p-4">Business owner</td>
                <td className="p-4">Manager(s)</td>
                <td className="p-4">Board of directors</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold">Share Transfer</td>
                <td className="p-4">Cannot be transferred, business closes</td>
                <td className="p-4">Requires notarization + registration + announcement</td>
                <td className="p-4">Via share ledger entry, generally simpler</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-lg leading-9">
          In a limited company, a partner transferring their share requires
          a notarized transfer agreement, general assembly approval,
          registration, and announcement steps; this means cost and time.
          In a joint stock company — especially if bearer share
          certificates have been issued — a share transfer can take place
          much faster and at a lower cost. This difference is an important
          distinguishing point for ventures planning to take on investors or
          transfer shares frequently.
        </p>
      </section>

      {/* 7 */}
      <section id="itibar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Corporate Reputation and Growth Potential
        </h2>
        <p className="mb-8 text-lg leading-9">
          The choice of company type affects not just today&apos;s cost but
          also the company&apos;s future growth trajectory. Corporate
          customers, banks, and investors approach different company types
          with a different level of trust.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-gray-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Sole Proprietorship
            </h3>
            <p className="leading-7 text-gray-700">
              Provides a fast start with low bureaucracy; but may sometimes
              inspire less confidence than a capital company in corporate
              customer and tender processes. Raising outside investment is
              almost impossible.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Limited Company
            </h3>
            <p className="leading-7 text-gray-700">
              Strikes a balance between corporate visibility and reasonable
              cost. Suitable for angel investors and structures with a small
              number of partners; not ideal for large rounds with many
              investors.
            </p>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Joint Stock Company
            </h3>
            <p className="leading-7 text-gray-700">
              The most suitable structure for institutional investors,
              venture capital funds, and IPO processes. The relative ease of
              share transfer also allows for share-based incentive (option)
              plans.
            </p>
          </div>
        </div>
      </section>

      {/* 8 - DECISION TABLE */}
      <section id="karar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Which Type Fits Which Entrepreneur Profile?
        </h2>
        <p className="mb-8 text-lg leading-9">
          The right decision depends on the scale of your business model,
          your risk structure, your profit expectations, and your growth
          plan. The decision framework below offers a general guide; the
          specific decision requires an analysis of the details of your
          business.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex w-fit rounded-full bg-gray-200 px-3 py-1 text-sm font-bold text-gray-700">
              SOLE PROPRIETORSHIP
            </div>
            <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-gray-700 marker:text-orange-500">
              <li>One-person, small-scale businesses</li>
              <li>Low starting budget</li>
              <li>Freelance / consulting activity</li>
              <li>Businesses with no outside investment/partnership plan</li>
              <li>Sectors with limited risk and low debt exposure</li>
            </ul>
          </div>
          <div className="flex flex-col rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
            <div className="mb-4 inline-flex w-fit rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
              LIMITED COMPANY
            </div>
            <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-gray-700 marker:text-blue-600">
              <li>Medium-scale businesses with 2-10 partners</li>
              <li>Entrepreneurs wanting limited liability</li>
              <li>Those working with corporate customers/tenders</li>
              <li>Plans to take on a small number of angel investors</li>
              <li>Technopark, e-commerce, and service companies</li>
            </ul>
          </div>
          <div className="flex flex-col rounded-2xl border border-orange-200 bg-orange-50 p-6 shadow-sm">
            <div className="mb-4 inline-flex w-fit rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
              JOINT STOCK COMPANY
            </div>
            <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-gray-700 marker:text-orange-500">
              <li>Those seeking institutional/venture capital funding</li>
              <li>Those with IPO potential</li>
              <li>Multi-partner, complex share structures</li>
              <li>Those planning to grow using employee stock options</li>
              <li>Companies with high revenue/profit expectations</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            Simple Decision Flow
          </h3>
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            <div className="flex-1 rounded-xl border bg-gray-50 p-4 text-center text-sm font-semibold">
              Do you have an investment/IPO goal?
            </div>
            <div className="text-center text-2xl text-orange-500 md:rotate-0">→</div>
            <div className="flex-1 rounded-xl border border-orange-200 bg-orange-50 p-4 text-center text-sm font-semibold">
              Yes: Joint Stock Company
            </div>
          </div>
          <div className="mt-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            <div className="flex-1 rounded-xl border bg-gray-50 p-4 text-center text-sm font-semibold">
              Limited liability + medium scale?
            </div>
            <div className="text-center text-2xl text-blue-500 md:rotate-0">→</div>
            <div className="flex-1 rounded-xl border border-blue-200 bg-blue-50 p-4 text-center text-sm font-semibold">
              Yes: Limited Company
            </div>
          </div>
          <div className="mt-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            <div className="flex-1 rounded-xl border bg-gray-50 p-4 text-center text-sm font-semibold">
              A single person, low risk, quick start?
            </div>
            <div className="text-center text-2xl text-gray-500 md:rotate-0">→</div>
            <div className="flex-1 rounded-xl border bg-gray-100 p-4 text-center text-sm font-semibold">
              Yes: Sole Proprietorship
            </div>
          </div>
        </div>
      </section>

      {/* 9 */}
      <section id="nevi-degisikligi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Is It Possible to Change Company Type Later?
        </h2>
        <p className="mb-6 text-lg leading-9">
          Most entrepreneurs prefer to start with a low-cost structure in
          the first years and switch to a capital company as their business
          grows. This transition is possible under Turkish law and is
          referred to as a &quot;type conversion.&quot;
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-green-700">
              Converting From a Sole Proprietorship to a Capital Company
            </h3>
            <p className="leading-8 text-gray-700">
              Under the Trade Registry Regulation and Articles 182-193 of
              the TCC, individual commercial enterprises can change type
              and convert into a limited or joint stock company. In this
              process, a type conversion plan is prepared, an application is
              made through MERSIS, the new articles of association are
              registered and announced, and the necessary notifications are
              made to social security, the tax office, and the Revenue
              Administration.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Converting From a Limited Company to a Joint Stock Company
            </h3>
            <p className="leading-8 text-gray-700">
              A limited company can also be converted into a joint stock
              company under the same type conversion provisions. This is
              generally the step chosen when a company is preparing to take
              on investors, its number of partners increases, or an IPO plan
              comes onto the agenda.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            When Is It Necessary?
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>When revenue and profit start entering the higher bracket of the income tax tariff</li>
            <li>When corporate customer/tender conditions require a capital company</li>
            <li>When an angel investor, venture capital fund, or corporate partner will be brought on</li>
            <li>When limiting liability to capital becomes a priority</li>
            <li>When an IPO or institutionalization plan becomes concrete (generally a conversion to joint stock)</li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 We Handle Choosing the Right Type, the Formation, and Everything After
          </h3>
          <p className="leading-8 text-gray-700">
            Deciding which company type fits your business model is, for
            many entrepreneurs, a more complex process than expected. We run
            this assessment, the entire formation process, and your
            post-formation accounting, filing, and reporting services from
            start to finish, without you needing to look for a separate
            local firm.{" "}
            <Link href="/en#contact" className="text-orange-600 underline">
              You can contact us for the entire process, starting with
              choosing the company type.
            </Link>
          </p>
        </div>
      </section>

      {/* 10 FAQ */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-10 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              1. Which company type makes more sense for a first-time
              entrepreneur?
            </h3>
            <p className="leading-8">
              For a one-person, low-risk business with limited capital
              needs, a sole proprietorship offers a fast, low-cost start. If
              there are multiple partners, a need for limited liability, or
              an expectation of corporate customers, a limited company is
              generally a more balanced choice.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              2. Are limited company partners not liable for any debt at
              all?
            </h3>
            <p className="leading-8">
              Liability for commercial debts is, in principle, limited to
              the capital share. However, for tax and social security
              premium debts that cannot be collected from the company,
              legal representatives and partners can be held liable, under
              certain conditions, in proportion to their capital shares.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              3. Why is TL 250,000 in capital required to set up a joint
              stock company?
            </h3>
            <p className="leading-8">
              This amount is the minimum capital requirement set under the
              TCC framework by the Presidential Decision, effective from
              January 1, 2024. It is not necessary for the entire capital to
              be held in cash and ready; however, at least a quarter must be
              deposited and blocked at a bank before registration.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              4. When does it make sense to convert my sole proprietorship
              into a limited company?
            </h3>
            <p className="leading-8">
              We recommend considering a type conversion when your earnings
              approach the higher brackets of the income tax tariff, when
              corporate customer/tender processes require a capital company,
              or when limiting your liability becomes a priority.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5. Which type should I set up if I&apos;m planning to take on
              investors?
            </h3>
            <p className="leading-8">
              For ventures planning to work with institutional investors,
              an angel investor network, or venture capital funds, a joint
              stock company structure is generally more suitable because
              share transfer is relatively easier. Starting with a limited
              company in the early stage and converting to a joint stock
              company before investment is also a commonly used path.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              6. In which company types does dividend withholding apply?
            </h3>
            <p className="leading-8">
              Dividend withholding applies only in capital companies subject
              to corporate tax, such as limited and joint stock companies,
              when profit is distributed to partners. As of 2026, this rate
              is 15%. There is no separate dividend distribution withholding
              in a sole proprietorship.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              7. In which company type does the young entrepreneur
              exemption apply?
            </h3>
            <p className="leading-8">
              The young entrepreneur earnings exemption applies to sole
              proprietorships that establish income tax liability under the
              real regime; partnership in a limited or joint stock company
              does not fall within the scope of this exemption.
            </p>
          </div>
        </div>
      </section>

      {/* 11 CONCLUSION */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Conclusion: How Should the Right Equation Be Solved?
        </h2>
        <p className="mb-6 text-lg leading-9">
          There is no single &quot;best&quot; option among a sole
          proprietorship, a limited company, and a joint stock company;
          there is a right option. This choice is shaped by the scale of
          your business model, your risk tolerance, your profit
          expectations, and your investment/growth plans.
        </p>
        <p className="mb-6 text-lg leading-9">
          Low-risk, one-person businesses requiring a fast start fit well
          with a sole proprietorship; medium-scale ventures wanting limited
          liability fit well with a limited company; and companies aiming
          to attract investors and grow at scale fit well with a joint stock
          company.
        </p>
        <p className="mb-10 text-lg leading-9">
          Making this decision requires evaluating formation cost, tax
          burden, the liability regime, and your future growth plan
          together. From determining the company type suited to your needs,
          through the formation process, to your post-formation accounting
          and reporting obligations, we are by your side throughout the
          entire process.
        </p>
      </section>

      {/* RELATED ARTICLES */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Related Articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/en/blog/how-to-set-up-a-company-in-turkey-a-to-z"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">COMPANY FORMATION</div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              How to Set Up a Company in Turkey (2026)
            </h3>
          </Link>
          <Link
            href="/en/blog/investment-incentive-certificate-turkey-2026-guide"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">INCENTIVES</div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Investment Incentive Certificate in Turkey
            </h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
