import { Mail, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for HireInfinity, a brand of Infinity Softwares LLC.",
};

const sections = [
  {
    title: "Introduction",
    body: (
      <p>
        HireInfinity is a brand of Infinity Softwares LLC, a US-registered company providing remote engineering staff
        augmentation services. This policy explains how we handle your information when you visit{" "}
        <a href="https://hireinfinity.com" className="font-semibold text-[#0052FF]">
          hireinfinity.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "What We Do Not Collect",
    body: (
      <div className="space-y-4">
        <p className="font-semibold text-slate-900">We want to be upfront:</p>
        <ul className="grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
          {[
            "We have no user accounts or login system",
            "We do not use cookies on this website",
            "We do not use tracking or analytics tools",
            "We do not collect any data through the website itself",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Calendly Call Booking",
    body: (
      <div className="space-y-4">
        <p>
          When you book a call, you are redirected to Calendly, a third-party scheduling tool. Any information you
          provide during booking, such as name, email, and notes, is collected and stored by Calendly directly, not by
          us.
        </p>
        <p>
          We recommend reviewing Calendly&apos;s privacy policy at{" "}
          <a href="https://calendly.com/privacy" className="font-semibold text-[#0052FF]">
            calendly.com/privacy
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: "Direct Communication",
    body: (
      <p>
        If you email us directly at{" "}
        <a href="mailto:hello@hireinfinity.com" className="font-email font-semibold text-[#0052FF]">
          hello@hireinfinity.com
        </a>
        , we receive and store that correspondence to respond to your enquiry. We do not share this with third parties
        and do not add you to mailing lists without your consent.
      </p>
    ),
  },
  {
    title: "Hosting",
    body: (
      <p>
        This website is hosted on Vercel. Vercel may process standard server logs, such as IP address, browser type, and
        page requested, as part of normal hosting operations. See{" "}
        <a href="https://vercel.com/legal/privacy-policy" className="font-semibold text-[#0052FF]">
          vercel.com/legal/privacy-policy
        </a>{" "}
        for details.
      </p>
    ),
  },
  {
    title: "Your Rights",
    body: (
      <p>
        If you are in the EU or UK, you have the right to access, correct, or delete any personal data we hold. To
        request this, email{" "}
        <a href="mailto:hello@hireinfinity.com" className="font-email font-semibold text-[#0052FF]">
          hello@hireinfinity.com
        </a>
        . We will respond within 30 days.
      </p>
    ),
  },
  {
    title: "Children",
    body: <p>Our services are intended for business professionals only. We do not knowingly collect data from anyone under 18.</p>,
  },
  {
    title: "Changes",
    body: (
      <p>
        We may update this policy occasionally. The &quot;Last updated&quot; date at the top will reflect any changes.
        Continued use of the site means you accept the updated policy.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fafbfc]">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#0052FF]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trust &amp; Transparency
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-xs font-bold text-slate-400">Last updated: June 2026</p>
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
                <span className="mr-3 font-mono text-sm text-[#0052FF]">9.</span>
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
