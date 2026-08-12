import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "TÜBİTAK 1501 and 1507 R&D Grants 2026 | Application Guide | Koray Akdağ",
  description:
    "A comprehensive guide to the TÜBİTAK 1501 and 1507 R&D grant programs in Turkey: who can apply, support rates, 2026 changes, supported expenses, and the application process.",
  keywords: [
    "TÜBİTAK 1501",
    "TÜBİTAK 1507",
    "TEYDEB",
    "R&D grant Turkey",
    "TÜBİTAK support programs",
    "1501 application",
    "1507 application",
    "R&D incentives Turkey",
    "2026 TÜBİTAK",
  ],
};

export default function BlogPageEn() {
  return (
    <BlogLayout
      title="TÜBİTAK 1501 and 1507 R&D Grants 2026"
      description="A comprehensive guide covering application conditions, support rates, evaluation criteria, supported expenses, and all the rules changing in 2026 for Turkey's TÜBİTAK 1501 and 1507 R&D grant programs."
      category="TÜBİTAK • TEYDEB • 2026"
      date="2026"
      readTime="12 Min Read"
      slug="tubitak-1501-1507-rd-grants-2026"
      lang="en"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 What Will You Find in This Guide?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            If you run a company that carries out R&amp;D or plans to, simply
            submitting an application is not enough to get the maximum
            benefit from TÜBİTAK&apos;s 1501 and 1507 grant programs. A
            well-prepared project, a realistic budget, strong technical
            content, and a commercialization strategy substantially increase
            the odds of success.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ The scope of the 1501 and 1507 programs</li>
            <li>✔ The core differences between the two programs</li>
            <li>✔ Who can apply?</li>
            <li>✔ 2026 evaluation changes</li>
            <li>✔ Supported expenses</li>
            <li>✔ Tax advantages</li>
            <li>✔ Strategies for a successful application</li>
          </ul>
        </div>

        {/* TABLE OF CONTENTS */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 Table of Contents
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="#nedir"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              1. What Are TÜBİTAK 1501 and 1507?
            </Link>
            <Link
              href="#kimler"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              2. Who Can Apply?
            </Link>
            <Link
              href="#degisiklikler"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              3. 2026 Changes
            </Link>
            <Link
              href="#hakem"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              4. Reviewer Evaluation
            </Link>
            <Link
              href="#giderler"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              5. Supported Expenses
            </Link>
            <Link
              href="#surec"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              6. Application Process
            </Link>
            <Link
              href="#vergi"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              7. Tax Advantages
            </Link>
            <Link
              href="#basari"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              8. Common Traits of a Successful Application
            </Link>
            <Link
              href="#sss"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              9. Frequently Asked Questions
            </Link>
            <Link
              href="#sonuc"
              className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
            >
              10. Conclusion
            </Link>
          </div>
        </div>

        {/* 1. SECTION */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. What Are TÜBİTAK 1501 and 1507?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            The TÜBİTAK 1501 and TÜBİTAK 1507 programs are non-repayable
            R&amp;D grant programs run by TEYDEB. Both programs provide
            financing to businesses developing technology, but they differ
            from each other in terms of target audience and project scale.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Shared Purpose
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Supporting R&amp;D activities</li>
              <li>✔ Encouraging technology development</li>
              <li>✔ Increasing high-value-added production</li>
              <li>✔ Creating export potential</li>
              <li>✔ Raising competitiveness</li>
            </ul>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                TÜBİTAK 1501
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Industrial R&amp;D Projects Grant Program</li>
                <li>✔ No budget ceiling</li>
                <li>✔ Project duration up to 36 months</li>
                <li>✔ 75% grant for SMEs / 60% grant for large companies</li>
                <li>✔ Unlimited number of applications</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                TÜBİTAK 1507
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ SME R&amp;D Starter Grant Program</li>
                <li>✔ Budget ceiling of TL 3.5 million</li>
                <li>✔ Project duration up to 18 months</li>
                <li>✔ Fixed 75% grant support</li>
                <li>✔ Up to 5 projects per company over its lifetime</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Feature</th>
                  <th className="p-5">TÜBİTAK 1501</th>
                  <th className="p-5">TÜBİTAK 1507</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Support Budget Limit</td>
                  <td className="p-5">No Upper Limit</td>
                  <td className="p-5">TL 3.5 Million</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Project Duration</td>
                  <td className="p-5">Max. 36 Months</td>
                  <td className="p-5">Max. 18 Months</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Target Audience</td>
                  <td className="p-5">All SMEs and Large-Scale Companies</td>
                  <td className="p-5">SMEs Only (First 5 Projects)</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Support Rate</td>
                  <td className="p-5">75% for SMEs - 60% for Large Companies</td>
                  <td className="p-5">75% Fixed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Expert Commentary
            </h3>
            <p className="leading-8 text-gray-700">
              For SMEs new to R&amp;D activity, the TÜBİTAK 1507 Program is a
              faster and ideal starting opportunity in terms of procedure.
              However, if your budget need exceeds TL 3.5 million, or if you
              have used up your 5-project quota, you should move forward
              directly with the TÜBİTAK 1501 Program.
            </p>
          </div>
        </section>

        {/* 2. WHO CAN APPLY */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Who Can Apply, Who Cannot?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            To apply to the TÜBİTAK 1501 and 1507 programs, companies must
            be capital companies established in Turkey. Alongside this, the
            submitted project genuinely qualifying as R&amp;D is one of the
            most important evaluation criteria.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Structures That Can Apply
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Limited Companies</li>
                <li>✔ Joint Stock Companies</li>
                <li>✔ Technopark / TDZ Companies</li>
                <li>✔ Foreign-Partnered Companies Established in Turkey</li>
                <li>✔ Software and IT Companies</li>
                <li>✔ Manufacturing Industry Companies</li>
                <li>✔ Defense Industry Companies</li>
                <li>✔ Biotechnology and Medical Companies</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Structures That Cannot Apply
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Sole Proprietorships / Individual Businesses</li>
                <li>❌ Associations and Foundations</li>
                <li>❌ Universities (Cannot apply alone, can be a partner)</li>
                <li>❌ Foreign firms with no legal entity (branch/company) in Turkey</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🌍 Can Foreign-Partnered Companies Apply?
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              Yes. This is one of the most commonly misunderstood points. A
              company being foreign-capital is not, on its own, an obstacle
              to receiving TÜBİTAK support.
            </p>
            <p className="mb-6 leading-8 text-gray-700">
              For example, a German-partnered software company, a US-funded
              startup, or a UK-capital technology company can apply,
              provided the necessary conditions are met, as long as it has a
              legal entity established in Turkey (a Limited or Joint Stock
              Company).
            </p>
            <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6">
              <h4 className="mb-4 text-xl font-bold text-[#071A2F]">
                Determining Factors in an Application
              </h4>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Being a capital company established in Turkey</li>
                <li>The project genuinely qualifying as R&amp;D</li>
                <li>Containing elements of technical uncertainty and innovation</li>
                <li>Producing an innovative solution and a prototype</li>
                <li>Having commercialization and marketability potential</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. 2026 CHANGES */}
        <section id="degisiklikler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. How Did the Evaluation System Change in 2026?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            With the 2026 calls, some important updates were made to the
            evaluation system. Now, not just technical adequacy, but also
            the project&apos;s economic outputs, sustainability, and the
            company&apos;s past performance directly affect the score.
          </p>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📈 Commercialization and Performance Tracking
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              Whether previously supported projects actually turned into
              commercial success now critically affects the evaluation
              score.
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Did it turn into a product and generate commercial sales?</li>
              <li>Did it convert into exports or create a foreign-exchange-earning effect?</li>
              <li>Was a patent/utility model registered or licensed?</li>
              <li>Was the transition to serial production achieved?</li>
            </ul>
          </div>
          <div className="mt-12 overflow-x-auto rounded-2xl border">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Priority Areas &amp; Focus</th>
                  <th className="p-5">Evaluation Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-5">Technological Leap in Industry &amp; Deep Tech</td>
                  <td className="p-5 font-bold text-green-600">+ Priority Score / Privilege</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5">Digital Transformation and Artificial Intelligence Technologies</td>
                  <td className="p-5 font-bold text-green-600">+ Priority Score / Privilege</td>
                </tr>
                <tr>
                  <td className="p-5">Green Deal and Sustainability-Focused Projects</td>
                  <td className="p-5 font-bold text-green-600">+ Priority Score / Privilege</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ New Call and Application Limit
            </h3>
            <p className="leading-8 text-gray-700">
              Within the same call period, a company may, as a rule, submit
              a maximum of two applications in total across the TÜBİTAK 1501
              and 1507 programs. However, multi-partner and order-based
              R&amp;D projects can be held as an exception to this
              limitation.
            </p>
          </div>
        </section>

        {/* 4. HOW REVIEWERS EVALUATE YOUR PROJECT */}
        <section id="hakem" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. How Do Reviewers Evaluate Your Project?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            TÜBİTAK reviewers evaluate projects not only from a technical
            standpoint but also in terms of feasibility, economic
            contribution, and commercialization potential. For a successful
            application, all three of these areas need to be built up
            together, strongly.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl">🧪</div>
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                R&amp;D Quality
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Is there technical uncertainty?</li>
                <li>Is the level of innovation sufficient?</li>
                <li>Is there a counterpart in the literature?</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl">⚙️</div>
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Feasibility
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Is the team adequate?</li>
                <li>Are the work packages planned correctly?</li>
                <li>Is the budget realistic?</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl">📈</div>
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                Economic Benefit
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Who is the target market?</li>
                <li>Is there export potential?</li>
                <li>Is the commercialization plan strong?</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-red-700">
              🚫 The Most Common Mistakes
            </h3>
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>
                Describing the project as routine software development or
                copying a commercial product, instead of R&amp;D
              </li>
              <li>Failing to clarify the technical uncertainty and the challenges to be overcome</li>
              <li>Preparing an unrealistic budget that does not match market realities</li>
              <li>Leaving the commercialization and marketing plan superficial</li>
              <li>Designing work packages that are disconnected in terms of timing and competency</li>
            </ul>
          </div>
        </section>

        {/* 5. SUPPORTED EXPENSES */}
        <section id="giderler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Which Expenses Are Supported?
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Many expense items incurred within R&amp;D activities deemed
            eligible by TÜBİTAK are included within the scope of grant
            support.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                👨‍💻 Personnel Expenses
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Software developers and engineers</li>
                <li>Data scientists and system architects</li>
                <li>Test and quality specialists</li>
                <li>Technical personnel on the project team</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🖥️ Machinery and Equipment
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Dedicated servers to be used in the project</li>
                <li>Laboratory and measurement equipment</li>
                <li>Prototype development hardware</li>
                <li>Testing and analysis devices</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                💻 Software Licenses &amp; Services
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>CAD/CAM and simulation tools</li>
                <li>Development and analysis software</li>
                <li>Consulting and prototype production services</li>
                <li>Testing and calibration service procurement</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                ✈️ Materials, Travel, and Patents
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Raw materials consumed in prototype production</li>
                <li>Technical visits and project travel</li>
                <li>Patent registration and intellectual property expenses</li>
                <li>Certified Public Accountant (YMM) report fees</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ Expenses Not Covered by the Support
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Routine marketing, advertising, and sales activities</li>
              <li>Standard website development with no R&amp;D content</li>
              <li>Installation and customization of off-the-shelf commercial software</li>
              <li>Investment and raw material expenses at the serial production stage</li>
            </ul>
          </div>
        </section>

        {/* 6. APPLICATION PROCESS */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Application Process and Call Calendar
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Applications are carried out entirely electronically and with an
            e-signature through PRODİS (the TEYDEB Project Evaluation and
            Monitoring System).
          </p>
          <div className="grid gap-5 md:grid-cols-4">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💡</div>
              <h3 className="text-xl font-bold">1. Project Idea &amp; Design</h3>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">2. Technical &amp; Budget File</h3>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💻</div>
              <h3 className="text-xl font-bold">3. PRODİS Application</h3>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">4. Reviewer &amp; Committee Evaluation</h3>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 An Important Note on Call Periods
            </h3>
            <p className="leading-8 text-gray-700">
              The TÜBİTAK 1501 and 1507 programs generally open for calls
              twice a year. Call calendars, pre-registration deadlines, and
              project submission dates are announced through the official
              TÜBİTAK TEYDEB portal. Since the project preparation process
              takes at least 1-2 months, it is recommended to prepare the
              technical design without waiting for the call announcement.
            </p>
          </div>
        </section>

        {/* 7. TAX ADVANTAGES */}
        <section id="vergi" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Tax Advantages and Combined Use With Other Incentives
          </h2>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <ul className="ml-6 list-disc space-y-5 text-lg text-gray-700 marker:text-green-600">
              <li>
                <strong>Special Fund Account:</strong> Grants received from
                TÜBİTAK are held in a special fund account on the balance
                sheet and are not taxed as commercial income.
              </li>
              <li>
                <strong>Double Support Ban:</strong> The same expense item
                cannot be funded twice, both by a TÜBİTAK grant and by
                another public institution (such as KOSGEB).
              </li>
              <li>
                <strong>Technopark and R&amp;D Center Integration:</strong>{" "}
                Projects carried out in technoparks or R&amp;D centers can
                be combined simultaneously with income/corporate tax
                exemptions, social security premium incentives, and stamp
                duty exemptions.
              </li>
            </ul>
          </div>
        </section>

        {/* 8. SUCCESSFUL APPLICATION */}
        <section id="basari" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Common Traits of a Successful Application
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ A clearly defined technical problem and R&amp;D hypothesis
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ Measurable, realistic, and verifiable R&amp;D targets
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ A detailed budget plan prepared in line with market conditions
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ A technical team with competencies suited to the project subject
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ A concrete commercialization and market entry strategy
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ Potential to create exports and import substitution
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ Technical and administrative risks foreseen with a plan B in place
            </div>
            <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
              ✅ Work packages, timing, and outputs aligned with one another
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Can a newly established company apply?
              </h3>
              <p className="leading-8 text-gray-700">
                Yes. Being a newly established (startup) company is not on
                its own an obstacle. It is enough for the company to be a
                capital company and for the project to have strong R&amp;D
                content.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Can a company with no revenue or turnover apply?
              </h3>
              <p className="leading-8 text-gray-700">
                Yes. In TÜBİTAK&apos;s evaluation, the nature of the
                project, the competency of the team, and commercialization
                potential take precedence over the company&apos;s past
                turnover.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Is the support repayable?
              </h3>
              <p className="leading-8 text-gray-700">
                No. The TÜBİTAK 1501 and 1507 programs are{" "}
                <strong>non-repayable grant</strong> support. The specified
                rates (75% or 60%) of your approved expenses are paid into
                your account.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Is it mandatory to get consulting support?
              </h3>
              <p className="leading-8 text-gray-700">
                No, it is not mandatory. However, getting professional
                consulting support to write the project in line with
                TÜBİTAK terminology, structure the budget correctly, and
                manage the reviewer process increases the odds of success.
              </p>
            </div>
          </div>
        </section>

        {/* 10. CONCLUSION */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Conclusion
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            The TÜBİTAK 1501 and 1507 grant programs are among Turkey&apos;s
            most important sources of non-repayable R&amp;D financing for
            companies developing technology. A successful application is
            not merely a matter of filling out a technical form. The
            project&apos;s R&amp;D depth needs to be designed as a whole,
            together with the budget structure, work packages, and
            commercialization strategy.
          </p>
        </section>
    </BlogLayout>
  );
}
