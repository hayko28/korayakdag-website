import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Company Valuation in Turkey: Methods & Process | Koray Akdağ",
  description:
    "How is company valuation done in Turkey using DCF, multiples analysis, and net asset value? A guide to the process steps and common mistakes for SMEs.",
  keywords: [
    "company valuation Turkey",
    "business valuation methods",
    "DCF discounted cash flow",
    "valuation multiples analysis",
    "net asset value method",
    "SME business valuation Turkey",
    "how is a company valued",
    "how to calculate company value",
    "shareholder exit valuation",
    "investor valuation report",
    "business sale valuation",
    "M&A valuation Turkey",
    "company valuation 2026",
  ],
  alternates: {
    canonical: "/en/blog/company-valuation-turkey-methods-guide-2026",
    languages: {
      en: "/en/blog/company-valuation-turkey-methods-guide-2026",
      tr: "/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026",
    },
  },
};

export default function BlogPageEn() {
  return (
    <BlogLayout
      title="What Is Company Valuation? Methods, Process, and Why It's Critical for SMEs"
      description="A company's true economic value underlies decisions ranging from a change of ownership to a sale, from an investor meeting to an inheritance split. A complete guide to how DCF, multiples analysis, and net asset value work, the specific challenges facing SMEs, concrete scenarios where valuation becomes necessary, and why it should be handled by a professional team."
      category="COMPANY VALUATION • M&A • 2026"
      date="2026"
      readTime="14 Min Read"
      coverImage="https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="company-valuation-turkey-methods-guide-2026"
      lang="en"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 What Will You Find in This Guide?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            &quot;What is my company worth?&quot; is a question that comes up
            not only when an owner is thinking about a sale, but also when
            bringing in a new partner, when a partner exits the business, when
            sitting down with an investor, during a bank loan negotiation, or
            when dividing an inheritance. This article explains what company
            valuation is, how the three most widely used methods (DCF,
            multiples analysis, net asset value) work, what makes valuation
            harder for SMEs, in which concrete situations a valuation becomes
            necessary, and why it should be carried out by a professional
            team.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ What exactly is company valuation, and what is the difference between &quot;value&quot; and &quot;price&quot;?</li>
            <li>✔ When should DCF, multiples analysis, and net asset value be used?</li>
            <li>✔ What specific factors make valuation harder for SMEs?</li>
            <li>✔ In which concrete situations is a valuation actually needed?</li>
            <li>✔ What are the risks of decisions made without a valuation?</li>
            <li>✔ Why should valuation be carried out by a professional, independent team?</li>
            <li>✔ How does the valuation process work step by step, and what documents are required?</li>
          </ul>
        </div>

        {/* TABLE OF CONTENTS */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 Table of Contents
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. What Is Company Valuation, and What Is Its Basic Logic?
            </Link>
            <Link href="#yontemler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Main Company Valuation Methods
            </Link>
            <Link href="#kobi-zorluklari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Special Challenges of Valuation for SMEs
            </Link>
            <Link href="#neden-yaptirmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Why Should an SME Get a Company Valuation?
            </Link>
            <Link href="#riskler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. The Risks of Decisions Made Without a Valuation
            </Link>
            <Link href="#neden-profesyonel" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Why Should It Be Done by a Professional Team?
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. The Valuation Process: Step by Step
            </Link>
            <Link href="#hatalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Common Mistakes
            </Link>
            <Link href="#ne-zaman" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. When Should a Company Get a Valuation? (Summary)
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              10. Frequently Asked Questions
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              11. Conclusion
            </Link>
          </div>
        </div>

        {/* 1. WHAT IS IT */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. What Is Company Valuation, and What Is Its Basic Logic?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Company valuation is the systematic calculation, using recognized
            methods, of a business&apos;s economic value as of a specific
            date &mdash; taking into account its financial performance,
            assets, liabilities, growth potential, industry position, and
            risk profile. Rather than producing a single definitive figure, a
            valuation sets out a{" "}
            <strong>reasonable value range</strong> that can shift depending
            on the method used, the assumptions made, and the purpose of the
            valuation.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            A critical distinction needs to be made here: <strong>value</strong>{" "}
            and <strong>price</strong> are not the same thing. Valuation is a
            methodological estimate of <em>value</em> based on the
            company&apos;s financial data and objective assumptions. Price,
            on the other hand, is the final transaction amount that emerges
            once subjective factors &mdash; negotiating power between
            buyer and seller, urgency, strategic motives (e.g. acquiring a
            competitor, entering a specific market) &mdash; are layered on
            top of that value. A solid valuation report grounds the starting
            point of a negotiation in objective terms, preventing either side
            from sitting down at the table with an emotional or overly
            optimistic figure.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 What Does a Valuation Take Into Account?
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Past and current financial performance (revenue, profitability, cash flow)</li>
              <li>✔ Tangible and intangible assets on the balance sheet, and debt load</li>
              <li>✔ Future growth potential and the overall industry outlook</li>
              <li>✔ Company-specific risks (founder dependency, customer/supplier concentration)</li>
              <li>✔ Comparable company and transaction data (where available)</li>
            </ul>
          </div>
        </section>

        {/* 2. METHODS */}
        <section id="yontemler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Main Company Valuation Methods
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            The three approaches most commonly used in practice are{" "}
            <strong>Discounted Cash Flow (DCF)</strong> from the income
            approach, <strong>multiples/comparable company analysis</strong>{" "}
            from the market approach, and the{" "}
            <strong>Net Asset Value (NAV)</strong> method from the cost
            approach. A robust valuation does not rely on a single method; it
            applies several methods suited to the company&apos;s structure in
            parallel and cross-checks the results against one another.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💰 Discounted Cash Flow (DCF)
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            DCF is based on discounting the company&apos;s projected future
            free cash flows to present value using a discount rate suited to
            the company&apos;s risk profile (typically the weighted average
            cost of capital, or WACC). Cash flows are projected for a
            forecast period (usually five years), plus a &quot;terminal
            value&quot; beyond that period. Because DCF directly reflects a
            company&apos;s <strong>intrinsic value</strong> and growth
            potential, it is favored particularly for growing companies with
            predictable cash flow generation. Its weak point is that the
            result is extremely sensitive to the projection assumptions
            (growth rate, discount rate) &mdash; volatile historical
            financials at SMEs can make these assumptions harder to pin down.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            📊 Multiples Analysis (Comparable Company Analysis)
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            In this method, the company&apos;s value is calculated based on
            the market multiples (such as EV/EBITDA, EV/Sales, or P/E) of
            comparable companies operating in the same sector. Because it
            directly reflects market reality, the method offers a fast and
            easily understandable reference point. However, finding truly
            comparable public companies in Turkey &mdash; same scale, same
            business model &mdash; is often difficult, especially at SME
            scale; multiples must therefore be chosen carefully and adjusted
            for company-specific differences.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🏗️ Net Asset Value (NAV)
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            Net Asset Value is calculated by subtracting total liabilities
            from the current (fair) value of the assets on the company&apos;s
            balance sheet. This approach is based on the company&apos;s{" "}
            <strong>existing asset base</strong> rather than the value it
            will generate in the future. It is best suited to real-estate-
            heavy companies, holding companies, or companies facing
            liquidation or wind-down scenarios; on its own, it falls short
            for growth-oriented companies where intangible assets such as
            brand value, customer portfolio, or know-how carry significant
            weight.
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-4">Method</th>
                  <th className="p-4">When It Fits</th>
                  <th className="p-4">Advantage</th>
                  <th className="p-4">Disadvantage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">DCF</td>
                  <td className="p-4">Growing companies with predictable cash flow</td>
                  <td className="p-4">Reflects intrinsic value and growth potential</td>
                  <td className="p-4">Highly sensitive to assumptions (growth, discount rate)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Multiples Analysis</td>
                  <td className="p-4">Sectors with comparable company/transaction data</td>
                  <td className="p-4">Reflects market reality quickly and clearly</td>
                  <td className="p-4">True comparables can be hard to find at SME scale</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Net Asset Value</td>
                  <td className="p-4">Real-estate/asset-heavy companies, wind-down scenarios</td>
                  <td className="p-4">Based on concrete, auditable asset data</td>
                  <td className="p-4">Misses growth potential and intangible assets</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            In practice, the preferred method (or the weight given to each)
            depends on the structure of the company being valued and the
            purpose of the valuation; an experienced valuation team will
            typically apply several methods together and compare the
            results.
          </p>
        </section>

        {/* 3. SME CHALLENGES */}
        <section id="kobi-zorluklari" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Special Challenges of Valuation for SMEs
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Valuing large public companies is a relatively standard exercise,
            because market data, audited financial statements, and numerous
            comparable transactions are available. The picture is different
            for SMEs, where several factors make the valuation process
            technically harder:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🏛️ Lack of Public Comparables</h4>
              <p className="text-sm leading-7 text-gray-700">
                Finding a comparable company of the same scale, same region,
                and same business model is often simply not possible for
                SMEs; multiples must therefore be chosen and adjusted with
                care.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📉 Irregular Financial Records</h4>
              <p className="text-sm leading-7 text-gray-700">
                Financial statements that have not been independently
                audited, one-off income/expense items, or personal expenses
                run through the company all make it harder to see the true
                underlying performance.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">👤 Founder/Owner Dependency</h4>
              <p className="text-sm leading-7 text-gray-700">
                When sales relationships, supplier agreements, or operational
                knowledge sit concentrated in a single person (&quot;key
                person risk&quot;), it raises real questions about the
                company&apos;s sustainability independent of its founder.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📝 Lack of Documented Processes and Systems</h4>
              <p className="text-sm leading-7 text-gray-700">
                In companies that have not yet institutionalized, the absence
                of documented budgeting, reporting, and decision-making
                processes weakens both risk analysis and the reliability of
                growth projections.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <p className="leading-8 text-gray-700">
              None of this means SME valuation &quot;can&apos;t be done&quot;
              &mdash; on the contrary, it makes it even more critical for an
              experienced valuation team to normalize the financial
              statements (owner&apos;s add-backs, stripping out one-off
              items), select properly adjusted multiples, and apply several
              methods together.
            </p>
          </div>
        </section>

        {/* 4. WHY GET A VALUATION */}
        <section id="neden-yaptirmali" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Why Should an SME Get a Company Valuation?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Company valuation is not an abstract finance exercise; it is a
            tool that underlies concrete, everyday business decisions. The
            scenarios below (all illustrative examples, not tied to any real
            company) show how this need shows up in practice:
          </p>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">🤝 A Partner Joining or Exiting</h4>
              <p className="leading-8 text-gray-700">
                At an illustrative manufacturing company, one of two partners
                wants to exit. The remaining partner may want to pay out the
                departing partner&apos;s stake based on &quot;the value in
                the founding years,&quot; even though the company has grown
                significantly since then; an independent valuation
                establishes the current true value so both sides can agree on
                a fair buyout amount.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">🏢 A Company Sale or Merger</h4>
              <p className="leading-8 text-gray-700">
                An illustrative family business entering talks with a buyer
                runs a real risk of ending up with a lower offer &mdash;
                prepared by the buyer&apos;s own advisors &mdash; if it sits
                down at the table with a rough estimate like &quot;X years of
                profit.&quot; An independent valuation report gives the
                seller a strong negotiating footing of their own.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">💼 Raising Investment or Angel Funding</h4>
              <p className="leading-8 text-gray-700">
                An illustrative technology company seeking growth capital
                must first clearly establish its &quot;pre-money
                valuation&quot; in order to determine the equity stake to
                offer an investor; otherwise it either gives away too much
                equity or fails to convince the investor.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">👨‍👩‍👧 Inheritance and Estate Division</h4>
              <p className="leading-8 text-gray-700">
                At an illustrative family business that has lost its founder,
                if the company&apos;s value is not established before shares
                are divided among the heirs, disputes between siblings can
                drag on for years. An independent valuation report grounds
                the division in objective terms rather than emotion.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">🏦 Bank and Loan Processes</h4>
              <p className="leading-8 text-gray-700">
                An illustrative manufacturing company seeking financing for
                capacity expansion is in a much stronger position in loan
                negotiations when it can present the bank or lender with an
                independent report showing its true value and debt-repayment
                capacity.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">⚖️ Litigation and Dispute Situations</h4>
              <p className="leading-8 text-gray-700">
                In divorce proceedings, enforcement actions, or disputes
                between partners, an independent valuation report submitted
                to the court provides an objective reference point beyond
                either side&apos;s subjective claims.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">🧭 Strategic Decision-Making</h4>
              <p className="leading-8 text-gray-700">
                A management team weighing whether to set up a new
                subsidiary, divest a division, or make a major investment
                cannot properly measure the real impact of that decision
                without knowing the company&apos;s current value.
              </p>
            </div>
          </div>
        </section>

        {/* 5. RISKS */}
        <section id="riskler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. The Risks of Decisions Made Without a Valuation
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Critical decisions made without a valuation may look like they
            save time and cost in the short run, but they can carry far
            heavier costs over the medium and long term:
          </p>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="space-y-4 text-gray-700">
              <li>❌ In partner exits, each side insisting on its own subjective figure drags the process out, damages the relationship, and often ends up as a legal dispute.</li>
              <li>❌ Settling for a low price in a company sale, or the opposite &mdash; holding an unrealistic price expectation and failing to find a buyer for a long time &mdash; are two sides of the same problem.</li>
              <li>❌ Quoting an unsupported valuation in investor meetings undermines the investor&apos;s confidence and can end the conversation at an early stage.</li>
              <li>❌ Divisions made without an objective reference in sensitive processes such as inheritance or divorce can damage family trust over the long term.</li>
              <li>❌ An inadequate or subjective financial statement submitted in a bank/loan application can raise the cost of credit or lead to rejection.</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Note: this section shares general observations; the outcome of
            any specific situation varies by company, sector, and the parties
            involved. It does not make a precise statistical claim.
          </p>
        </section>

        {/* 6. WHY PROFESSIONAL */}
        <section id="neden-profesyonel" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Why Should It Be Done by a Professional Team?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            &quot;Rough&quot; valuations that owners do themselves &mdash;
            usually based on a simplified rule like &quot;X times annual
            profit&quot; &mdash; almost always deviate from the true value.
            There are several structural reasons for this:
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ⚠️ Risks of a Do-It-Yourself Valuation
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Because of their emotional attachment to the company, founders/owners systematically overestimate its value.</li>
                <li>❌ A single simple multiple (&quot;X times profit&quot;) is used, with no adjustment for sector, growth potential, or risk profile.</li>
                <li>❌ Financial statements are not normalized; one-off expenses and personal spending mask the company&apos;s true performance.</li>
                <li>❌ The resulting report carries no independence or credibility in the eyes of the other party (investor, buyer, partner, court).</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ What an Independent/Professional Valuation Provides
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Objectivity: because the valuation team has no direct stake in the outcome, it builds trust between the parties.</li>
                <li>✔ Methodological accuracy: technical depth such as correctly calculating the discount rate in DCF or correctly selecting comparables for multiples analysis.</li>
                <li>✔ Negotiating power: an objective report strengthens a party&apos;s position in a partnership, sale, or investor negotiation.</li>
                <li>✔ Depth of sector analysis: sector-specific risks, cyclicality, and growth dynamics are modeled properly.</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <p className="leading-8 text-gray-700">
              Especially in <strong>multi-party</strong> processes such as a
              partnership change, a sale, or an investor negotiation, having
              the valuation carried out by an independent team means both
              sides can accept the report as &quot;unbiased&quot; &mdash;
              which shortens the negotiation and reduces the risk of dispute.
              At Koray Akdağ / Sistem Global Danışmanlık, we accompany
              clients through these processes with financial analysis,
              sector assessment, and hands-on valuation methodology
              experience.
            </p>
          </div>
        </section>

        {/* 7. PROCESS */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. The Valuation Process: Step by Step
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            A company valuation study is not a single calculation; it is a
            systematic process made up of several stages, from data
            collection through to the final report:
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🗣️</div>
              <h3 className="text-xl font-bold">1. Initial Meeting and Defining the Purpose</h3>
              <p className="mt-3 text-sm text-gray-600">
                The purpose of the valuation (sale, partnership, investor,
                inheritance, etc.) is clarified; this directly affects which
                methods will be weighted most heavily.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📂</div>
              <h3 className="text-xl font-bold">2. Data and Document Collection</h3>
              <p className="mt-3 text-sm text-gray-600">
                The last 3-5 years of balance sheets/income statements, trial
                balances, contracts, asset lists, staffing data, and the
                business plan are requested.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏭</div>
              <h3 className="text-xl font-bold">3. Sector and Macro Analysis</h3>
              <p className="mt-3 text-sm text-gray-600">
                The sector&apos;s growth dynamics, competitive structure, and
                macroeconomic assumptions (inflation, exchange rate,
                interest rate) are assessed.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧮</div>
              <h3 className="text-xl font-bold">4. Normalizing the Financial Statements</h3>
              <p className="mt-3 text-sm text-gray-600">
                One-off income/expense items, personal spending, and
                off-market rent/salary adjustments (owner&apos;s add-backs)
                are corrected for.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">⚙️</div>
              <h3 className="text-xl font-bold">5. Method Selection and Application</h3>
              <p className="mt-3 text-sm text-gray-600">
                The method(s) suited to the company&apos;s structure &mdash;
                DCF, multiples analysis, net asset value &mdash; are selected
                and applied.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔁</div>
              <h3 className="text-xl font-bold">6. Cross-Checking and Scenario Analysis</h3>
              <p className="mt-3 text-sm text-gray-600">
                Results from the different methods are compared; the value
                range is tested against optimistic/base/pessimistic
                scenarios.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm md:col-span-3">
              <div className="mb-4 text-5xl">📄</div>
              <h3 className="text-xl font-bold">7. Reporting and Presentation</h3>
              <p className="mt-3 text-sm text-gray-600">
                The methods used, the assumptions made, and the resulting
                value range are set out, with supporting rationale, in a
                written report presented to management or the relevant
                party.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              📋 Documents Typically Requested
            </h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-700 marker:text-yellow-600">
              <li>Balance sheets, income statements, and trial balances for the last 3-5 years</li>
              <li>Current asset and liability list (real estate, machinery/equipment, loans)</li>
              <li>Ownership structure and articles of association</li>
              <li>Key customer/supplier contracts</li>
              <li>Staff list and organizational chart</li>
              <li>Budget/business plan and growth projections, if available</li>
            </ul>
          </div>
        </section>

        {/* 8. MISTAKES */}
        <section id="hatalar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Common Mistakes
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Relying on a single method</h4>
              <p className="leading-7 text-gray-700">
                Using only DCF, or only a single profit multiple, carries the
                errors of one set of assumptions straight into the result.
                A sound valuation cross-checks several methods against each
                other.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Not normalizing the financial statements</h4>
              <p className="leading-7 text-gray-700">
                Personal expenses run through the company, or one-off
                income/expense items left unadjusted, mask the true
                operating profitability and skew the value in the wrong
                direction.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Emotional pricing</h4>
              <p className="leading-7 text-gray-700">
                The effort and time a founder has put into a company does not
                automatically raise its financial value; the valuation
                process needs to draw this distinction clearly.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Choosing the wrong or mismatched comparables</h4>
              <p className="leading-7 text-gray-700">
                Directly applying the multiple of a company that differs in
                scale, geography, or business model can seriously distort the
                result.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Unrealistic growth projections</h4>
              <p className="leading-7 text-gray-700">
                Using overly optimistic growth rates in DCF that are
                inconsistent with past performance artificially inflates the
                value and undermines the report&apos;s credibility with the
                other party.
              </p>
            </div>
          </div>
        </section>

        {/* 9. WHEN SUMMARY */}
        <section id="ne-zaman" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. When Should a Company Get a Valuation? (Summary)
          </h2>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ When a partner is joining or exiting the company</li>
              <li>✔ When all or part of the company will be sold, or it will merge with another company</li>
              <li>✔ When talks are underway with an investor, angel investor, or strategic partner</li>
              <li>✔ When company shares will be divided during inheritance, estate settlement, or divorce</li>
              <li>✔ Before a major loan negotiation with a bank/financial institution</li>
              <li>✔ When there is litigation or a dispute between partners or other parties</li>
              <li>✔ When the company wants to set a real baseline for its institutionalization process</li>
              <li>✔ Before a major strategic investment, spin-off, or subsidiary decision</li>
            </ul>
          </div>
        </section>

        {/* 10. FAQ */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                How many days does a company valuation report take?
              </h3>
              <p className="leading-8 text-gray-700">
                It depends on the company&apos;s size, how well-organized its
                financial records are, and the purpose of the valuation. For
                a mid-sized SME with complete data and documentation, the
                process usually takes a few weeks; it can take longer for
                companies with a complex structure or multiple subsidiaries.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Which valuation method is the &quot;most correct&quot; one for SMEs?
              </h3>
              <p className="leading-8 text-gray-700">
                There is no single &quot;most correct&quot; method. In
                practice, several methods are typically used together
                depending on the company&apos;s structure, and the results
                are cross-checked to arrive at a reasonable value range.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Is a valuation report legally binding?
              </h3>
              <p className="leading-8 text-gray-700">
                A valuation report provides an objective reference for a
                negotiation or a legal process between parties; but the
                final price or decision depends on the parties&apos; own
                agreement, or, in litigation, on the court&apos;s
                assessment.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Why can valuations of the same company at different times give different results?
              </h3>
              <p className="leading-8 text-gray-700">
                Valuation is based on current financial performance, market
                conditions, interest rates, and the general outlook of the
                sector. Because these inputs change over time, the value of
                the same company will naturally differ at different dates.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Why does the value an owner calculates themselves usually come out different?
              </h3>
              <p className="leading-8 text-gray-700">
                Owners typically use a single simple multiple and tend to
                overestimate the value due to their emotional attachment to
                the company; because they also assess it without normalizing
                the financial statements, they don&apos;t get a clear view of
                the true operating profitability.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Is a valuation only needed before a sale?
              </h3>
              <p className="leading-8 text-gray-700">
                No. The need for a valuation also arises in many other
                situations, such as a change in ownership, an investor
                negotiation, an inheritance division, a loan process,
                litigation/disputes, or a strategic decision.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Let's Establish Your Company's Value Professionally
            </h3>
            <p className="leading-8 text-gray-700">
              Knowing your company&apos;s true value ahead of a change in
              ownership, an investor negotiation, a merger or acquisition, or
              an inheritance and tax process directly affects your
              negotiating power and the quality of your decisions.{" "}
              <Link href="/en#contact" className="text-orange-600 underline">
                Get in touch to discuss your company&apos;s valuation
                process with us.
              </Link>
            </p>
          </div>
        </section>

        {/* 11. CONCLUSION */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            11. Conclusion
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Company valuation is a tool that underlies many critical
            decisions, not just a sale &mdash; from a change of ownership to
            an investor negotiation, from an inheritance division to a loan
            process. Correctly selecting and applying DCF, multiples
            analysis, and net asset value requires real expertise,
            particularly for SMEs facing challenges such as a lack of public
            comparables and irregular financial records. A &quot;rough&quot;
            calculation done alone almost always deviates from the true
            value and creates a trust problem in negotiations between
            parties.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            To put your company&apos;s value on an objective, defensible
            footing for a partnership, sale, investor negotiation,
            inheritance division, or strategic decision, Koray Akdağ /
            Sistem Global Danışmanlık is here to help. From financial
            analysis to method selection, from reporting to defending the
            process in front of the other party, we can carry out your
            valuation study together, end to end.
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
          <div className="mb-2 text-sm font-semibold text-orange-600">COMPANY FORMATION • TURKEY • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">How to Set Up a Company in Turkey, A to Z</h3>
        </Link>
        <Link
          href="/en/blog/investment-incentive-certificate-turkey-2026-guide"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">INCENTIVES • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Investment Incentive Certificate in Turkey</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
