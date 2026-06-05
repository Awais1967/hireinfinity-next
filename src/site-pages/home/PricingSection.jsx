"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, CalendarDays, Check, Clock3, Code2, Crown, ShieldCheck, Sprout, Target, Users } from "lucide-react";
import { fadeUp, staggerContainer } from "../../common/ui/animationVariants";

const tabs = [
  { id: "monthly", label: "Monthly Contracts", icon: CalendarDays },
  { id: "hourly", label: "Hourly Scale", icon: Clock3 },
  { id: "pods", label: "Dedicated Pods", icon: Users },
  { id: "fixed", label: "Fixed-Price Dev", icon: Target },
];

const pricingPlans = {
  monthly: [
    {
      name: "Mid-Level",
      price: "$3,500",
      unit: "/month",
      description: "4-6 years experience. Capable of owning features from end-to-end.",
      features: ["Full-time (40h/week)", "Timezone sync with US business", "US Project Manager oversight", "Quality guarantee replacement"],
      cta: "Get started",
    },
    {
      name: "Senior",
      price: "$4,500",
      unit: "/month",
      description: "8+ years experience. System architects and technical team leads.",
      features: ["Everything in Mid-Level", "Technical Leadership", "Architecture design review", "Scalability & infrastructure setup"],
      cta: "Get started",
    },
    {
      name: "Staff",
      price: "$6,500",
      unit: "/month",
      description: "12+ years experience. Fractional CTO level or VP Engineering talent.",
      features: ["Strategic architectural planning", "High-stakes migration leading", "Mentorship for development teams", "Direct technology governance"],
      cta: "Get started",
    },
  ],
  hourly: [
    {
      name: "Mid-Level",
      price: "$22",
      unit: "/hour",
      description: "4-6 years experience. Capable of owning features from end-to-end on flexible hourly terms.",
      features: ["On-demand hourly engagement", "Standalone API & feature development", "Standard Figma to React conversion", "Direct dev integration with daily progress"],
      cta: "Get started",
    },
    {
      name: "Senior",
      price: "$31",
      unit: "/hour",
      description: "8+ years experience. System architects, heavy logic engineers, and technical team leads.",
      features: ["Architecting highly scalable features", "Core API, security & database designs", "Technical team feedback & cloud setup", "Multi-faceted infrastructure migration"],
      cta: "Get started",
    },
    {
      name: "Staff",
      price: "$42",
      unit: "/hour",
      description: "12+ years experience. Fractional CTO, VP Engineering talent, or elite specialized architects.",
      features: ["High-stakes structural roadmap design", "Complex legacy codebase refactoring blocks", "Advanced technical audits & direct leadership", "CTO/VP direct engineering alignment"],
      cta: "Get started",
    },
  ],
  pods: [
    {
      name: "Starter Pod",
      badge: "1.5 FTE equivalent",
      price: "$5,950",
      unit: "/month",
      description: "Perfect for bootstrapping early POCs or shipping smaller features batches quickly.",
      features: ["1 Senior Full-Stack Engineer", "Dedicated Delivery PM Oversight", "10h/week QA Automation included", "Cancel-anytime rolling contract"],
      cta: "Get started",
    },
    {
      name: "Growth Pod",
      badge: "2.5 FTE equivalent",
      price: "$9,450",
      unit: "/month",
      description: "Best for rapidly executing mature roadmap updates or launching new applications.",
      features: ["1 Senior Backend & 1 Senior Frontend", "0.5 Dedicated Delivery PM", "20h/week QA & Figma Support", "Cancel-anytime rolling contract"],
      cta: "Get started",
    },
    {
      name: "Scale Pod",
      badge: "4.0 FTE equivalent",
      price: "$13,500",
      unit: "/month",
      description: "Complete product-aligned engineering cell under core architecture supervision.",
      features: ["3 Senior Engineers + 1 Staff Architect", "1 Full Time Delivery PM Leader", "Fully integrated pipeline automation", "Cancel-anytime rolling contract"],
      cta: "Get started",
    },
  ],
  fixed: [
    {
      name: "MVP & Bootstrap",
      badge: "2-4 weeks delivery",
      eyebrow: "Starting from",
      price: "$4,500",
      unit: "/flat project",
      description: "Perfect for launching an initial feature-complete MVP, prototype, or beautiful responsive landing platform in record time.",
      features: ["Dedicated frontend & basic API routing", "Figma to high-quality code matching", "CI/CD cloud setup & live tracking", "2-week post-launch warranty & fixes"],
      cta: "Scope project",
    },
    {
      name: "Core Product",
      badge: "4-6 weeks delivery",
      eyebrow: "Starting from",
      price: "$8,800",
      unit: "/flat project",
      description: "Best for complete end-to-end web & mobile applications, fully-functional dashboards, integrated workflows, and core SaaS platforms.",
      features: ["Full multi-tenant client/dashboard views", "Advanced relational or NoSQL DB flow", "Auth, Stripe payouts & files pipeline", "Figma layout drafting + 1 mo free support"],
      cta: "Scope project",
    },
    {
      name: "Enterprise & Secure",
      badge: "6-10 weeks delivery",
      eyebrow: "Starting from",
      price: "$14,500",
      unit: "/flat project",
      description: "For intensive custom AI model integrations, dynamic backend migrations, complex microservices layers, or real-time architectures.",
      features: ["Microservice cluster, WebSockets, WebRTC", "LLM fine-tuning, RAG frameworks & agents", "Secure database migration plan & DevOps", "Full fractional CTO architecture consults"],
      cta: "Scope project",
    },
  ],
};

const levelIcons = {
  Junior: { icon: Sprout, classes: "border-slate-200 bg-slate-50 text-slate-600" },
  "Mid-Level": { icon: Code2, classes: "border-blue-100 bg-blue-50 text-[#0052FF]" },
  Senior: { icon: Award, classes: "border-emerald-100 bg-emerald-50 text-emerald-600" },
  Staff: { icon: Crown, classes: "border-purple-100 bg-purple-50 text-purple-600" },
};

function CalculatorBanner() {
  return (
    <motion.div
      variants={fadeUp}
      className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-3xl border border-blue-400/20 bg-[linear-gradient(135deg,#070d1d_0%,#0b1531_58%,#101f48_100%)] p-5 text-left text-white shadow-[0_20px_45px_rgba(15,23,42,0.18)] sm:p-6 lg:mt-9 lg:p-7"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
            <Code2 className="h-3.5 w-3.5" />
            New tool
          </span>
          <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">Interactive Cost & Custom Savings Calculator</h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            Want to see exactly how much capital you can save versus recruiting onshore engineers? Click to calculate your custom engineering budgets, hiring speed, and runway projection interactively.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0052FF] px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_14px_28px_rgba(0,82,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Launch Calculator
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

function PricingTabs({ activeTab, onTabChange }) {
  return (
    <motion.div variants={fadeUp} className="mx-auto mt-9 max-w-full overflow-x-auto px-1 pb-1">
      <div className="mx-auto flex w-max min-w-full justify-start gap-1 rounded-2xl border border-slate-200 bg-slate-100/90 p-1 shadow-sm sm:min-w-0 sm:justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onTabChange(tab.id)}
              className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-mono text-[11px] font-bold transition-all ${
                isActive ? "bg-[#0052FF] text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-950"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

function PricingCard({ plan }) {
  const levelIcon = levelIcons[plan.name];
  const LevelIcon = levelIcon?.icon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group flex h-full min-h-[500px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_14px_35px_rgba(15,23,42,0.055)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_22px_48px_rgba(15,23,42,0.09)] sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {LevelIcon && (
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl border ${levelIcon.classes}`}>
              <LevelIcon className="h-5 w-5" />
            </span>
          )}
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-950">{plan.name}</p>
        </div>
        {plan.badge && (
          <span className="rounded-md border border-blue-100 bg-blue-50 px-3 py-1 font-mono text-[10px] font-semibold text-[#0052FF]">
            {plan.badge}
          </span>
        )}
      </div>

      {plan.eyebrow && <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0052FF]">{plan.eyebrow}</p>}

      <div className={plan.eyebrow ? "mt-1 flex items-end gap-2" : "mt-7 flex items-end gap-2"}>
        <span className="font-display text-5xl font-bold leading-none tracking-tight text-slate-950 sm:text-6xl">{plan.price}</span>
        <span className="pb-1 text-sm font-medium text-slate-500">{plan.unit}</span>
      </div>

      <p className="mt-6 min-h-[78px] text-base leading-7 text-slate-600">{plan.description}</p>

      <div className="my-7 h-px bg-slate-200" />

      <div className="space-y-4">
        {plan.features.map((feature) => (
          <div key={feature} className="grid grid-cols-[18px_1fr] gap-3 text-sm leading-6 text-slate-700">
            <Check className="mt-1 h-4 w-4 text-[#0052FF]" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <Link
          href="/contact"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0052FF] px-5 py-3 font-display text-sm font-bold text-white shadow-[0_12px_24px_rgba(0,82,255,0.2)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
        >
          {plan.cta}
        </Link>
      </div>
    </motion.article>
  );
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState("monthly");
  const activePlans = pricingPlans[activeTab];

  return (
    <motion.section id="pricing" className="scroll-mt-24 bg-[#f5f6f8]" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div variants={fadeUp} className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">Simple, All-Inclusive Plans</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Pricing that scales with your growth
          </h2>
        </motion.div>

        <CalculatorBanner />
        <PricingTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <motion.div variants={staggerContainer} className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {activePlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mx-auto mt-10 flex max-w-4xl items-start justify-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/45 px-5 py-5 text-center text-sm leading-6 text-slate-600 shadow-sm sm:items-center sm:px-7">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 sm:mt-0" />
          <p>
            <span className="font-bold text-slate-950">All plans include:</span> Professional Delivery PM oversight, full US hours match, worry-free 2-week trial at 50%, and cancel-anytime monthly rollouts.
          </p>
        </motion.div>

        {/* <motion.div variants={fadeUp} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3 text-center">
          {[
            ["Direct contracts", BriefcaseBusiness],
            ["Layered support", Layers3],
            ["Protected trial", ShieldCheck],
          ].map(([label, Icon]) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
              <Icon className="h-3.5 w-3.5 text-[#0052FF]" />
              {label}
            </span>
          ))}
        </motion.div> */}
      </div>
    </motion.section>
  );
}
