import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection Notice | Koray Akdağ",
  description:
    "Privacy policy and personal data protection notice (KVKK) for the Koray Akdağ website.",
  alternates: { canonical: "/en/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-[2px] text-orange-500">
          Legal
        </p>
        <h1 className="mb-4 text-3xl font-bold text-[#071A2F] lg:text-4xl">
          Privacy Policy &amp; Data Protection Notice
        </h1>
        <p className="mb-12 text-sm text-gray-500">Last updated: August 2026</p>

        <div className="space-y-10 text-[15px] leading-7 text-gray-700">
          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">1. Data Controller</h2>
            <p>
              Under Turkey&apos;s Law on the Protection of Personal Data No. 6698
              (&quot;KVKK&quot;), personal data obtained through this website
              (korayakdag.com) is processed by <strong>Koray Akdağ</strong>, acting as the
              data controller, within the scope described below.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">2. Personal Data Processed</h2>
            <p className="mb-3">
              If you fill out the contact/quote form on the site, the following personal
              data is processed:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Full name</li>
              <li>Email address</li>
              <li>Information shared in the subject and message fields</li>
              <li>Service areas you indicate interest in</li>
            </ul>
            <p className="mt-3">
              If you do not submit the form, no identifying data such as your name or email
              is collected simply by browsing the site.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">
              3. Purposes of Processing
            </h2>
            <p>The personal data you share is processed solely to;</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Review your request/message and get in touch with you,</li>
              <li>Provide information about the consulting services you requested,</li>
              <li>Keep records of correspondence and follow up where necessary</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">
              4. Collection Method and Legal Basis
            </h2>
            <p>
              Your personal data is obtained electronically, entirely on your own
              initiative, by filling out and submitting the form on the website. It is
              processed on the legal grounds set out in Article 5 of the KVKK, namely your
              explicit consent and, where applicable, the data controller&apos;s legitimate
              interest, provided this does not harm your fundamental rights and freedoms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">5. Data Transfers</h2>
            <p>
              Data you submit through the form is shared, only to the extent necessary, with
              the technical service providers used for site infrastructure, hosting, and
              email delivery, so that your request can reach me and be recorded. Some of
              these service providers may be located outside Turkey. Your data is not shared
              with third parties, sold, or used for marketing purposes beyond the purposes
              described above.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">6. Retention Period</h2>
            <p>
              Your personal data is retained for as long as necessary to resolve your
              request and to comply with applicable legal obligations; at the end of this
              period it is deleted, destroyed, or anonymized upon request or ex officio.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">7. Cookies</h2>
            <p>
              This site does not use advertising or marketing cookies to personalize or
              track visitor behavior. Anonymous visit statistics are measured using a
              cookie-free analytics infrastructure. A technically necessary session cookie
              is used solely to allow the site owner to access the admin panel; it does not
              affect regular visitor traffic.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">
              8. Your Rights Under the KVKK
            </h2>
            <p className="mb-3">
              Under Article 11 of the KVKK, everyone has the right to apply to the data
              controller to;
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Learn whether their personal data is being processed,</li>
              <li>Request information if it has been processed,</li>
              <li>Learn the purpose of processing and whether it is used accordingly,</li>
              <li>Know the third parties to whom it is transferred domestically or abroad,</li>
              <li>Request correction if processed incompletely or incorrectly,</li>
              <li>
                Request deletion or destruction within the framework of the conditions in
                Article 7 of the KVKK,
              </li>
              <li>Request notification of the above to third parties to whom data was transferred,</li>
              <li>
                Object to a result that is to their detriment arising from analysis
                exclusively through automated systems,
              </li>
              <li>Request compensation for damages arising from unlawful processing</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">9. How to Apply</h2>
            <p>
              You can submit requests regarding the rights listed above by emailing{" "}
              <a
                href="mailto:koray.akdag@sistemglobal.com.tr"
                className="font-semibold text-orange-500 hover:underline"
              >
                koray.akdag@sistemglobal.com.tr
              </a>
              . Your requests will be concluded free of charge as soon as possible and
              within 30 days at the latest, depending on their nature.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-[#071A2F]">10. Changes</h2>
            <p>
              This notice may be revised from time to time in line with changes in
              legislation or updates to the services offered on the site. The current
              version is always published on this page.
            </p>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
