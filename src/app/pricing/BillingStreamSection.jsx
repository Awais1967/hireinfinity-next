"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CalendarDays, Clock3, Target, Users } from "lucide-react";
import { pricingTableRows } from "../../constants/mockData";

const billingTabs = [
  { id: "monthly", label: "Monthly Contracts", icon: CalendarDays },
  { id: "hourly", label: "Hourly Scale", icon: Clock3 },
  { id: "pods", label: "Dedicated Pods", icon: Users },
  { id: "fixed", label: "Fixed-Price Dev", icon: Target },
];

const pricingColumns = [
  ["specialty", "Specialty Sector", "text-slate-500"],
  ["junior", "Junior (1-3 yrs)", "text-slate-500"],
  ["mid", "Mid-Level (3-5 yrs)", "text-[#0052FF]"],
  ["senior", "Senior (5-8 yrs)", "text-emerald-600"],
  ["staff", "Staff / Lead (8+ yrs)", "text-purple-600"],
];

const hourlyRows = [
  ["Frontend Web & Figma", "$11/hr", "$22/hr", "$31/hr", "$42/hr"],
  ["Full-Stack & Backend", "$12/hr", "$24/hr", "$34/hr", "$45/hr"],
  ["Mobile Unit (Flutter/RN)", "$11/hr", "$23/hr", "$33/hr", "$44/hr"],
  ["DevOps, Cloud & SRE", "$13/hr", "$25/hr", "$35/hr", "$46/hr"],
  ["QA (Manual & Auto)", "$10/hr", "$18/hr", "$28/hr", "$38/hr"],
];

const podRows = [
  ["Monthly Investment", "$5,950/mo", "$9,450/mo", "$13,500/mo"],
  ["Core Developer Count", "1.0 Full-Time Senior (1.5 FTE Equiv)", "2.0 Full-Time Seniors (2.5 FTE Equiv)", "3.0 Seniors + 1.0 Staff (4.0 FTE Equiv)"],
  ["Management & PM Oversight", "0.25 PM Support", "0.5 Dedicated Delivery PM", "1.0 Full-Time Delivery PM"],
  ["Target Monthly Sprints", "2-4 features / month", "4-8 features + full APIs", "Multi-system enterprise flow"],
  ["Slack & Sync Channels", "Next-day response channel", "Shared Slack + 1 daily sync", "Continuous Discord, multiple syncs"],
  ["Backup Engineer SLA", "48-hour matching buffer", "24-hour instant rollover", "Immediate redundancy failover"],
];

const fixedRows = [
  // ["Starting Price", "$4,500", "$8,800", "$14,500"],
  ["Delivery Timeline", "2-4 Weeks", "4-6 Weeks", "6-8 Weeks"],
  ["Frontend UI & Components", "Full layout & static responsive components", "Bespoke customized layouts & UI theme configs", "Adaptive enterprise portal layouts & animations"],
  ["Backend & DB Groundwork", "Baseline database schemas & mock endpoints", "Full SQL database sync & server routing", "Redundant clustering & robust admin schemas"],
  ["Advanced Server Logic", "Not Offered (Basic states only)", "Background queues, Stripe checkout & webhook actions", "SSO/SAML, real-time sync systems & audit triggers"],
  ["UI/UX Graphic Deliverables", "Standard template framework configuration", "Fully dedicated Figma wireframes (1 revision cycle)", "Custom interactive high-fidelity prototypes & logo support"],
  ["Quality Assurance (QA)", "Manual developer self-audit rounds", "1 Dedicated QA cycle, thorough end-to-end path testing", "Automated E2E Cypress/Playwright suites & whitebox audit"],
  ["Deployments & Platform Uploads", "Vercel/Netlify static domain bind", "Production web cloud config (GCP Run / AWS Dockerized)", "Web uploads + App Store & Google Play native wrapper setup"],
  ["Free Monthly Maintenance", "14 Days critical patches only", "1 Month (30 Days) free maintenance inclusion", "3 Months (90 Days) dedicated SLA coverage & updates"],
];

const streamConfig = {
  monthly: {
    title: "Staff Augmentation Monthly Flat Rates",
    description: "Full-time dedicated engineers (160h/month). Billed transparently semi-monthly.",
    cta: "Unlock 2-Week Trial across monthly ranges",
    columns: pricingColumns,
    rows: pricingTableRows.map((row) => [row.specialty, row.junior, row.mid, row.senior, row.staff]),
  },
  hourly: {
    title: "Hourly Rate Specialty Breakdown Matrix",
    description: "Pay-as-you-go flexible sprint reserves. Sourced precisely, with no retention retainers.",
    cta: "Unlock flexible pay-as-you-go developer profile",
    columns: pricingColumns,
    rows: hourlyRows,
  },
  pods: {
    title: "Dedicated Pod Characteristics & Service SLAs",
    description: "Operational standards, response pipelines, and support levels for our managed squads.",
    cta: "Schedule a call with a Product Architect to configure your Pod",
    columns: [
      ["attribute", "Pod Attribute", "text-slate-500"],
      ["starter", "Starter Pod\n$5,950/mo", "text-slate-500"],
      ["growth", "Growth Pod\n$9,450/mo", "text-[#0052FF]"],
      ["scale", "Scale Pod\n$13,500/mo", "text-emerald-600"],
    ],
    rows: podRows,
  },
  fixed: {
    title: "Fixed-Price Project Delivery Matrix",
    description: "Inspired by high-transparency tier deliverables. Pure flat-rate scoped execution.",
    cta: "Unlock custom fixed-scope pricing for your next system blueprint",
    columns: [
      ["deliverable", "Deliverable & Offering", "text-slate-500"],
      ["mvp", "MVP & Bootstrap\nFrom $4,500", "text-slate-500"],
      ["core", "Core Product\nFrom $8,800", "text-[#0052FF]"],
      ["enterprise", "Enterprise Secure\nFrom $14,500", "text-emerald-600"],
    ],
    rows: fixedRows,
  },
};

function getCellClass(activeTab, index, rowLength) {
  if (index === 0) return "font-display font-bold text-slate-950";
  if ((activeTab === "monthly" || activeTab === "hourly") && index === 4) return "font-mono font-bold text-purple-600";
  if (index === rowLength - 1) return "font-mono font-bold text-emerald-600";
  if (index === 2) return "font-mono font-bold text-slate-700";
  return "font-mono font-medium text-slate-500";
}

function CellText({ value }) {
  const prefix = value.startsWith("Not Offered") ? "Not included: " : value.match(/^(Background|Fully|1 Dedicated|Production|1 Month|SSO|Custom|Automated|Web uploads|3 Months)/) ? "Included: " : "";
  return <>{prefix}{value}</>;
}

export function BillingStreamSection() {
  const [activeTab, setActiveTab] = useState("monthly");
  const activeStream = useMemo(() => streamConfig[activeTab], [activeTab]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="text-center">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">Rate Model Density</p>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950">Select Your Billing Stream</h2>
        <p className="mt-4 text-base leading-7 text-slate-600">Convert complex technical layouts into scalable budgets with four custom pricing formats.</p>

        <div className="mx-auto mt-9 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 shadow-sm">
          {billingTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-3 font-mono text-xs font-bold transition-all ${
                  isActive ? "bg-[#0052FF] text-white shadow-sm" : "text-slate-700 hover:bg-white hover:text-slate-950"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-slate-950 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <div className="px-6 py-8 text-center sm:px-8">
          <div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <BriefcaseBusiness className="h-5 w-5 text-[#0052FF]" />
              <h3 className="font-display text-2xl font-bold tracking-tight text-slate-950">{activeStream.title}</h3>
            </div>
            <p className="mt-2 font-mono text-xs font-medium text-slate-600">{activeStream.description}</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] border-collapse text-left">
            <thead>
              <tr className="border-y border-slate-200 bg-[#f1f4f7]">
                {activeStream.columns.map(([key, label, color]) => (
                  <th key={key} className={`whitespace-pre-line px-6 py-5 font-mono text-[11px] font-bold uppercase tracking-wider ${color} sm:px-8`}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activeStream.rows.map((row) => (
                <tr key={row[0]} className="border-b border-slate-200 last:border-b-0">
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className={`px-6 py-7 text-sm leading-6 sm:px-8 ${getCellClass(activeTab, index, row.length)}`}>
                      <CellText value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link href="/contact" className="block bg-[#f1f4f7] px-6 py-6 text-center font-display text-sm font-bold text-[#0052FF] transition-colors hover:bg-blue-50">
          {activeStream.cta} <ArrowRight className="ml-1 inline h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
