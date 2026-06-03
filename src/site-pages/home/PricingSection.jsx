"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";
import { hourlyRateCards, pricingTableRows, teamPodCards } from "../../constants/mockData";
import { fadeUp, staggerContainer, cardHover } from "../../common/ui/animationVariants";

const tabs = [
  { id: "monthly", label: "Tab 1: Monthly Rates" },
  { id: "hourly", label: "Tab 2: Hourly Rates" },
  { id: "pods", label: "Tab 3: Team Pods" },
];

const columns = [
  { key: "specialty", label: "SPECIALTY SECTOR", className: "text-slate-500" },
  { key: "junior", label: "JUNIOR (1-3 YRS)", className: "text-slate-500" },
  { key: "mid", label: "MID-LEVEL (3-5 YRS)", className: "text-[#0052FF]" },
  { key: "senior", label: "SENIOR (5-8 YRS)", className: "text-emerald-600" },
  { key: "staff", label: "STAFF / LEAD (8+ YRS)", className: "text-purple-600" },
];

function ComplianceCard() {
  return (
    <motion.div variants={fadeUp} className="mx-auto mt-9 flex max-w-4xl flex-col gap-4 rounded-xl border border-blue-100 bg-blue-50/60 p-5 text-left shadow-sm sm:flex-row sm:p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#0052FF]">
        <CreditCard className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-display text-base font-bold text-slate-950">US Vetted Registered Firm with Flexible Payments</h3>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          We are a registered firm operating in the United States under strict compliances (SOC2 Type II & HIPAA-ready framework NDAs). US clients can easily settle direct invoices via standard{" "}
          <strong>Credit Cards</strong>, <strong>ACH Transfers</strong>, or secure bank <strong>Wire Transfers</strong> with automatic W-8/W-9 processing.
        </p>
      </div>
    </motion.div>
  );
}

const hourlyLabelColors = {
  muted: "text-slate-400",
  blue: "text-[#0052FF]",
  green: "text-emerald-600",
  purple: "text-purple-600",
};

function PricingTabs({ activeTab, onTabChange }) {
  return (
    <div className="mx-auto mt-10 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          aria-pressed={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`rounded-lg px-4 py-3 font-mono text-xs font-bold transition-colors ${
            activeTab === tab.id ? "bg-[#0052FF] text-white shadow-sm" : "text-slate-700 hover:bg-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function PricingTable() {
  return (
    <motion.div variants={fadeUp} className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
      <div className="px-6 py-8 sm:px-8">
        <h3 className="font-display text-2xl font-bold tracking-tight text-slate-950">Staff Augmentation Monthly Flat Rates</h3>
        <p className="mt-2 font-mono text-xs font-medium text-slate-500">Full-time dedicated engineers (160h/month). Billed transparently semi-monthly.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[920px] w-full border-collapse text-left">
          <thead>
            <tr className="border-y border-slate-200 bg-slate-50">
              {columns.map((column) => (
                <th key={column.key} className={`px-6 py-5 font-mono text-[11px] font-bold uppercase tracking-wider ${column.className} sm:px-8`}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingTableRows.map((row) => (
              <tr key={row.specialty} className="border-b border-slate-200 last:border-b-0">
                <td className="px-6 py-7 font-display text-base font-bold text-slate-950 sm:px-8">{row.specialty}</td>
                <td className="px-6 py-7 font-mono text-lg font-medium text-slate-500 sm:px-8">{row.junior}</td>
                <td className="px-6 py-7 font-mono text-lg font-bold text-[#0052FF] sm:px-8">{row.mid}</td>
                <td className="px-6 py-7 font-mono text-lg font-bold text-emerald-600 sm:px-8">{row.senior}</td>
                <td className="px-6 py-7 font-mono text-lg font-bold text-purple-600 sm:px-8">{row.staff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function HourlyRatesContent() {
  return (
    <motion.div variants={staggerContainer} className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {hourlyRateCards.map((card) => (
        <motion.article
          key={card.role}
          variants={fadeUp}
          whileHover={cardHover.whileHover}
          transition={cardHover.transition}
          className={`relative flex min-h-[324px] flex-col rounded-xl border bg-white p-7 text-center shadow-[0_8px_24px_rgba(15,23,42,0.05)] ${
            card.featured ? "border-blue-400 ring-1 ring-blue-300" : "border-slate-200"
          }`}
        >
          {card.badge && (
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF] px-5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
              {card.badge}
            </span>
          )}
          <p className={`font-mono text-[11px] font-bold uppercase tracking-[0.3em] ${hourlyLabelColors[card.tone]}`}>{card.label}</p>
          <div className="mt-5 font-display text-5xl font-black tracking-tight text-slate-950">
            {card.price}
            <span className="align-baseline text-base font-semibold text-slate-950">/hr</span>
          </div>
          <h3 className={`mt-5 font-display text-lg font-bold ${card.featured ? "text-[#0052FF]" : "text-slate-800"}`}>{card.role}</h3>
          <p className="mx-auto mt-6 max-w-[260px] text-sm leading-6 text-slate-700">{card.description}</p>
          <button
            type="button"
            className={`mt-auto min-h-11 rounded-lg px-4 py-3 font-mono text-xs font-bold transition-colors ${
              card.featured
                ? "bg-[#0052FF] text-white shadow-sm hover:bg-blue-700"
                : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-[#0052FF]"
            }`}
          >
            {card.button}
          </button>
        </motion.article>
      ))}
    </motion.div>
  );
}

function TeamPodsContent() {
  return (
    <motion.div variants={staggerContainer} className="mt-10 grid gap-8 lg:grid-cols-3">
      {teamPodCards.map((card) => (
        <motion.article
          key={card.title}
          variants={fadeUp}
          whileHover={cardHover.whileHover}
          transition={cardHover.transition}
          className={`relative flex min-h-[440px] flex-col rounded-xl border bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)] ${
            card.featured ? "border-blue-400 ring-1 ring-blue-300" : "border-slate-200"
          }`}
        >
          {card.badge && (
            <span className="absolute left-9 top-0 -translate-y-1/2 rounded-full bg-[#0052FF] px-5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
              {card.badge}
            </span>
          )}
          <div className="flex items-start justify-between gap-4">
            <p className={`font-mono text-[11px] font-bold uppercase tracking-[0.3em] ${card.featured ? "text-[#0052FF]" : card.buttonTone === "dark" ? "text-purple-600" : "text-slate-400"}`}>
              {card.label}
            </p>
            <span className="whitespace-nowrap rounded border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[10px] font-semibold text-slate-500">
              {card.fte}
            </span>
          </div>
          <h3 className="mt-8 font-display text-3xl font-black tracking-tight text-slate-950">{card.title}</h3>
          <div className={`mt-5 font-display text-5xl font-black tracking-tight ${card.featured ? "text-[#0052FF]" : "text-slate-950"}`}>
            {card.price}
            <span className="text-base font-semibold text-slate-500">/mo</span>
          </div>
          <p className="mt-6 text-base leading-7 text-slate-700">{card.description}</p>
          <div className="mt-7 space-y-3">
            {card.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 font-mono text-xs text-slate-600">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0052FF]" />
                {feature}
              </div>
            ))}
          </div>
          <button
            type="button"
            className={`mt-auto min-h-12 rounded-lg px-4 py-3 font-display text-sm font-bold text-white transition-colors ${
              card.buttonTone === "dark" ? "bg-slate-950 hover:bg-slate-800" : "bg-[#0052FF] hover:bg-blue-700"
            }`}
          >
            {card.button}
          </button>
        </motion.article>
      ))}
    </motion.div>
  );
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState("monthly");

  const activeContent = {
    monthly: <PricingTable />,
    hourly: <HourlyRatesContent />,
    pods: <TeamPodsContent />,
  };

  return (
    <motion.section id="pricing" className="scroll-mt-24 bg-[#f5f6f8]" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <motion.div variants={fadeUp} className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">Simple, All-Inclusive Plans</p>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Pricing that scales with your growth
          </h2>
          <ComplianceCard />
          <PricingTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </motion.div>

        <motion.div variants={fadeUp}>{activeContent[activeTab]}</motion.div>

        <motion.div variants={fadeUp} className="mx-auto mt-6 flex max-w-3xl items-start justify-center gap-3 rounded-xl border border-slate-200 bg-white/70 px-5 py-4 text-center text-sm leading-6 text-slate-700 shadow-sm sm:items-center">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 sm:mt-0" />
          <p>
            <span className="font-bold text-slate-950">All plans include:</span> Professional Delivery PM oversight, full US hours match, worry-free 2-week trial at 50%, and cancel-anytime monthly rollouts.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}


