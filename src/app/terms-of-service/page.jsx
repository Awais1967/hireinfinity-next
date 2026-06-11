import { CircleCheck, Mail, Scale } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for HireInfinity, a brand of Infinity Softwares LLC.",
};

const paymentTerms = [
  "Monthly plans billed in advance",
  "2-week trial billed at 50% of monthly rate",
  "Full rate from month 2 onwards",
  "Payment due within 15 days of invoice",
  "Late payments may incur 1.5% monthly interest",
  "All prices are in USD",
];

const sections = [
  {
    title: "Acceptance",
    body: (
      <p>
        By using{" "}
        <a href="https://hireinfinity.com" className="font-semibold text-[#0052FF]">
          hireinfinity.com
        </a>{" "}
        or our services, you agree to these terms. If you disagree, please do not use the site. HireInfinity is a brand
        of Infinity Softwares LLC, a US-registered company.
      </p>
    ),
  },
  {
    title: "What We Do",
    body: (
      <p>
        HireInfinity matches clients with pre-vetted remote software engineers for dedicated monthly or hourly
        engagements. Engineers remain contractors of Infinity Softwares LLC during the engagement. We are not a
        recruitment agency and do not place permanent employees.
      </p>
    ),
  },
  {
    title: "Eligibility",
    body: <p>You must be 18 or older and authorized to enter contracts on behalf of your organization.</p>,
  },
  {
    title: "Enquiries and Contracts",
    body: (
      <div className="space-y-4">
        <p>
          Submitting a contact form or booking a call does not create a contract. A binding agreement is only formed
          when both parties sign a Statement of Work (SOW) and Master Services Agreement (MSA).
        </p>
        <p>Prices shown on this site are indicative. Final rates are confirmed in your signed SOW.</p>
      </div>
    ),
  },
  {
    title: "Payment Terms",
    body: (
      <ul className="space-y-3">
        {paymentTerms.map((term) => (
          <li key={term} className="flex items-center gap-3">
            <CircleCheck className="h-4 w-4 shrink-0 text-[#0052FF]" />
            <span>{term}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Cancellation",
    body: (
      <ul className="space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
          <span>
            <strong>Monthly plans:</strong> 30 days written notice to cancel
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
          <span>
            <strong>Trial period:</strong> Cancel anytime, no penalty
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
          <span>We may terminate for non-payment or material breach</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Replacement Guarantee",
    body: (
      <p>
        If an engineer is not the right fit, notify us in writing. We will provide a replacement within 72 business hours
        at no additional cost within the first 30 days of engagement.
      </p>
    ),
  },
  {
    title: "Intellectual Property",
    body: (
      <p>
        All work product created during an engagement belongs to the client upon full payment. Full IP assignment is
        included in the signed MSA.
      </p>
    ),
  },
  {
    title: "Confidentiality",
    body: (
      <p>
        Engineers sign NDAs before any engagement begins. Both parties agree to keep confidential information private
        during and after the engagement.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    body: (
      <p>
        Our total liability for any claim shall not exceed fees paid in the 3 months before the claim. We are not liable
        for indirect or consequential damages.
      </p>
    ),
  },
  {
    title: "Governing Law",
    body: (
      <p>
        These terms are governed by the laws of Wyoming, USA. Disputes resolved through binding arbitration in Wyoming.
      </p>
    ),
  },
  {
    title: "Changes",
    body: <p>We may update these terms at any time. Continued use of the site means acceptance of updated terms.</p>,
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#fafbfc]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#0052FF]">
            <Scale className="h-3.5 w-3.5" />
            Standard Terms
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-4 font-mono text-xs font-bold text-slate-500">Last updated: June 2026</p>
        </div>

        <article className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={section.title}>
                <h2 className="border-b border-slate-100 pb-3 font-display text-xl font-bold uppercase tracking-tight text-slate-950">
                  <span className="mr-3 font-mono text-sm text-[#0052FF]">{index + 1}.</span>
                  {section.title}
                </h2>
                <div className="mt-4 text-base leading-7 text-slate-700">{section.body}</div>
              </section>
            ))}

            <section>
              <h2 className="border-b border-slate-100 pb-3 font-display text-xl font-bold uppercase tracking-tight text-slate-950">
                <span className="mr-3 font-mono text-sm text-[#0052FF]">13.</span>
                Contact
              </h2>
              <div className="mt-5 grid gap-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Company Details
                  </p>
                  <p className="mt-3 font-semibold text-slate-950">Infinity Softwares LLC</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    16192 Coastal Highway
                    <br />
                    Lewes, DE 19958
                    <br />
                    United States
                  </p>
                </div>
                <div className="sm:self-center">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Enquiries Email
                  </p>
                  <a
                    href="mailto:hello@hireinfinity.com"
                    className="mt-3 inline-flex items-center gap-2 font-email text-sm font-semibold text-[#0052FF]"
                  >
                    <Mail className="h-4 w-4" />
                    hello@hireinfinity.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
