import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Handshake,
  Users,
  Zap,
} from "lucide-react";
import { PricingCalculator } from "../../components/pricing/PricingCalculator";
import { pricingTableRows } from "../../constants/mockData";

export const metadata = {
  title: "Pricing | HireInfinity",
  description: "Clear, flat pricing for hiring vetted remote engineers with transparent monthly rates and no onboarding fees.",
};

const platformBadges = [
  ["Salesforce", "https://cdn.simpleicons.org/salesforce/00A1E0", "border-sky-200 bg-sky-50 text-sky-700"],
  ["AWS Cloud", "https://cdn.simpleicons.org/amazonwebservices/FF9900", "border-amber-200 bg-amber-50 text-amber-700"],
  ["MS Azure", "https://cdn.simpleicons.org/microsoftazure/0078D4", "border-blue-200 bg-blue-50 text-blue-700"],
  ["Google Cloud", "https://cdn.simpleicons.org/googlecloud/4285F4", "border-red-200 bg-red-50 text-red-700"],
  ["ServiceNow", "https://cdn.simpleicons.org/servicenow/81B5A1", "border-slate-200 bg-slate-100 text-slate-700"],
];

const trustCards = [
  ["Risk Protection", "2-Week Trial @ 50% Off", Zap],
  ["Squad Adaptability", "Month-to-Month Rollout", Handshake],
  ["Zero Hidden Marks", "Direct Contractor Rates", CheckCircle2],
];

const billingTabs = ["Monthly Contracts", "Hourly Scale", "Dedicated Pods", "Fixed-Price Dev"];

const pricingColumns = [
  ["specialty", "Specialty Sector", "text-slate-500"],
  ["junior", "Junior (1-3 yrs)", "text-slate-500"],
  ["mid", "Mid-Level (3-5 yrs)", "text-[#0052FF]"],
  ["senior", "Senior (5-8 yrs)", "text-emerald-600"],
  ["staff", "Staff / Lead (8+ yrs)", "text-purple-600"],
];

const protectionFeatures = [
  {
    title: "Exact-Overlap US Business Times",
    body: "No early morning standup friction. All HireInfinity resources align schedules to provide full daylight hours with your core branch.",
    icon: Clock3,
    tone: "text-sky-400",
  },
  {
    title: "Transparent Contractor Buyout",
    body: "Want to hire your augmented engineer full-time? Transition them easily for a flat $4,500 buyout. No predatory salary fees.",
    icon: BriefcaseBusiness,
    tone: "text-emerald-400",
  },
  {
    title: "2-Week Confidence Guarantee",
    body: "Evaluate skills on real engineering sprints. If the engineer is not a fit, terminate the contract instantly and pay nothing of the budget.",
    icon: Zap,
    tone: "text-purple-400",
  },
  {
    title: "Quality Assurance Included",
    body: "Every engineer is assigned a dedicated Customer Success Lead and delivery oversight PM at no extra cost to manage sprint goals.",
    icon: Users,
    tone: "text-amber-400",
  },
];

const comparisonColumns = ["Evaluation Parameter", "HireInfinity", "Toptal", "Lemon.io", "Arc.dev", "Local US Hire"];

const comparisonRows = [
  ["Monthly Senior Dev Cost", "$1,500 - $6,000", "$14,000 - $22,000+", "$7,200 - $11,000+", "$8,500 - $14,000+", "$15,000 - $20,000+"],
  ["Time to Onboard / Match", "5 Days Max", "14 - 21 Days", "7 - 10 Days", "14 - 30 Days", "45 - 90 Days"],
  ["Full US Business Hours Scope", "Yes (100% Core Overlap)", "Mixed (Optional charge)", "Mixed (Usually 2-4 hrs)", "Mixed (Varies heavily)", "Yes (Local onsite/remote)"],
  ["Worry-Free Guarded Trial", "2 Weeks at 50% Off", "None (First week billed)", "No structural test", "No structured trial", "None (Billed day 1)"],
  ["Administrative & Platform Fees", "0% (Transparent Rates)", "Embedded markup", "Included markup", "10% to 15%", "Recruiter fees (20-25%)"],
  ["Contract Flexibility", "Month-to-Month (Cancel anytime)", "Weekly/Monthly minimums", "Project minimum restrictions", "Varies", "Long-term commitment or severe severance"],
];

export default function PricingPage() {
  return (
    <main className="bg-[#fafbfc] bg-[radial-gradient(#dbe3ee_1px,transparent_1px)] [background-size:22px_22px]">
      <HeroSection />
      <PricingCalculator />
      <BillingStreamSection />
      <ProtectionSection />
      <ComparisonSection />
      <FinalCtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0052FF]">
        <Award className="h-3.5 w-3.5" />
        Fully Audited Financial Equivalents
      </span>
      <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">
        Clear, Flat pricing.
        <span className="block text-[#0052FF]">No onboarding fees.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
        Scale your developer headcount with complete transparency. Standard month-to-month terms, zero sign-up retainers, and an absolute 2-week risk-free trial.
      </p>

      <p className="mt-12 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
        Engineers fully experienced & certified across leading cloud environments & SaaS platforms
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {platformBadges.map(([label, logo, classes]) => (
          <span key={label} className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 font-display text-sm font-bold ${classes}`}>
            <img src={logo} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
            {label}
          </span>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
        {trustCards.map(([label, title, Icon]) => (
          <div key={title} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white/80 p-5 text-left shadow-sm">
            <Icon className="h-7 w-7 text-[#0052FF]" />
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
              <p className="mt-1 font-display text-base font-bold text-slate-950">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BillingStreamSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="text-center">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">Rate Model Density</p>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950">Select Your Billing Stream</h2>
        <p className="mt-4 text-base leading-7 text-slate-600">Convert complex technical layouts into scalable budgets with three custom pricing formats.</p>

        <div className="mx-auto mt-9 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 shadow-sm">
          {billingTabs.map((tab, index) => (
            <span key={tab} className={`rounded-lg px-4 py-3 font-mono text-xs font-bold ${index === 0 ? "bg-[#0052FF] text-white shadow-sm" : "text-slate-700"}`}>
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-slate-950 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <div className="px-6 py-8 sm:px-8">
          <h3 className="font-display text-2xl font-bold tracking-tight text-slate-950">Staff Augmentation Monthly Flat Rates</h3>
          <p className="mt-2 font-mono text-xs font-medium text-slate-600">Full-time dedicated engineers (160h/month). Billed transparently semi-monthly.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] border-collapse text-left">
            <thead>
              <tr className="border-y border-slate-200 bg-[#f1f4f7]">
                {pricingColumns.map(([key, label, color]) => (
                  <th key={key} className={`px-6 py-5 font-mono text-[11px] font-bold uppercase tracking-wider ${color} sm:px-8`}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingTableRows.map((row) => (
                <tr key={row.specialty} className="border-b border-slate-200 last:border-b-0">
                  <td className="px-6 py-7 font-display text-base font-bold text-slate-950 sm:px-8">{row.specialty}</td>
                  <td className="px-6 py-7 font-mono text-lg font-medium text-slate-500 sm:px-8">{row.junior}</td>
                  <td className="px-6 py-7 font-mono text-lg font-bold text-slate-700 sm:px-8">{row.mid}</td>
                  <td className="px-6 py-7 font-mono text-lg font-bold text-emerald-600 sm:px-8">{row.senior}</td>
                  <td className="px-6 py-7 font-mono text-lg font-bold text-purple-600 sm:px-8">{row.staff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link href="/contact" className="block bg-[#f1f4f7] px-6 py-6 text-center font-display text-sm font-bold text-[#0052FF] transition-colors hover:bg-blue-50">
          Unlock 2-Week Trial across monthly ranges <ArrowRight className="ml-1 inline h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function ProtectionSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 rounded-3xl bg-[#101827] p-8 text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] lg:grid-cols-[0.9fr_1.5fr] lg:p-12">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#5b8cff]">W-2 vs C-to-C Compliance</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight">Full USA Registered Protection</h2>
          <p className="mt-6 text-base leading-7 text-slate-200">
            HireInfinity is a registered LLC entity based in the United States. We manage full local compliance setups, standard NDAs, IP warranty transfers, and provide secure billing formats.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["C-to-C Billing", "W-9 Processing"].map((tag) => (
              <span key={tag} className="rounded-md bg-slate-950 px-3 py-1.5 font-mono text-[10px] font-bold text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {protectionFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-xl border border-white/10 bg-slate-950/70 p-6">
                <Icon className={`h-5 w-5 ${feature.tone}`} />
                <h3 className="mt-5 font-display text-base font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{feature.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="text-center">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">Financial Benchmark Compare</p>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950">How we compare on cost & rigidity</h2>
        <p className="mt-4 font-mono text-sm text-slate-500">Comprehensive analysis vs traditional platforms</p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1040px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-[#f1f4f7]">
                {comparisonColumns.map((column, index) => (
                  <th key={column} className={`px-6 py-6 font-mono text-[11px] font-bold ${index === 1 ? "bg-blue-50 text-slate-950" : "text-slate-950"}`}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row[0]} className="border-b border-slate-200 last:border-b-0">
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className={`px-6 py-6 text-sm leading-6 ${index === 0 ? "font-display font-bold text-slate-950" : "font-mono text-slate-600"} ${index === 1 ? "bg-blue-50/70 font-bold text-[#0052FF]" : ""}`}>
                      {index === 1 && <CheckCircle2 className="mr-1 inline h-4 w-4" />}
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="rounded-3xl bg-[#070d1d] px-6 py-14 text-center text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] sm:px-10 lg:px-16">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight">Ready to unblock your product roadmap?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200">
          Our vetting panel holds immediate contractor availability lists across Next.js, FastAPI, Node, React Native and QA SDET specialties. Book a call to meet matching profiles.
        </p>
        <Link
          href="/contact"
          className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#0052FF] px-8 py-4 font-display text-sm font-bold text-white shadow-[0_12px_24px_rgba(0,82,255,0.22)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Inquire Vetted Team Match
          <ArrowRight className="h-5 w-5" />
        </Link>
        <p className="mt-8 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
          Zero commitment &bull; 2-week tryout &bull; 5-day guaranteed matches
        </p>
      </div>
    </section>
  );
}
