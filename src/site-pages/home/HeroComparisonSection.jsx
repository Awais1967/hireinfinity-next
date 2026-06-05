"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Check, CheckCircle2, MessagesSquare, UserSearch, X } from "lucide-react";
import Link from "next/link";
import { comparisonCards, heroComparisonStats } from "../../constants/mockData";
import { fadeUp, staggerContainer, cardHover } from "../../common/ui/animationVariants";

const stylesByTone = {
  negative: {
    card: "border-red-200/80 bg-red-50/25 shadow-red-950/[0.03]",
    iconBox: "border-red-200 bg-red-100 text-red-600",
    bulletIcon: "text-red-500",
    subtitle: "text-red-600",
    divider: "border-red-200/70",
    result: "text-red-600",
    HeaderIcon: X,
    BulletIcon: X,
  },
  positive: {
    card: "border-emerald-200/90 bg-emerald-50/25 shadow-emerald-950/[0.04]",
    iconBox: "border-emerald-200 bg-emerald-100 text-emerald-600",
    bulletIcon: "text-emerald-600",
    subtitle: "text-[#0052FF]",
    divider: "border-emerald-200/80",
    result: "text-emerald-600",
    HeaderIcon: Check,
    BulletIcon: CheckCircle2,
  },
};

const negativeHighlights = [
  "45 to 90 development days",
  "Up to $25k recruiter commissions",
  "Overhead liabilities",
  "Out-of-sync timezones",
];

const processSteps = [
  {
    step: "STEP 1 — AVAILABLE NOW",
    number: "1",
    title: "Check out profiles",
    description: "Fill out a short interactive form and browse our deep roster of pre-vetted, ready-to-interview developers instantly.",
    icon: UserSearch,
    tone: "blue",
  },
  {
    step: "STEP 2 — RAPID SPEED",
    number: "2",
    title: "Interview Developers",
    description: "Share your technical needs, receive 2-3 expert-matched developers within 48 hours, and connect directly.",
    icon: MessagesSquare,
    tone: "blue",
  },
  {
    step: "STEP 3 — FINAL STEP",
    number: "3",
    title: "Seamless Onboarding",
    description: "Your premium developer integrates directly into your team while we handle legal contracts, payroll, and continuous support.",
    icon: BadgeCheck,
    tone: "green",
  },
];

const processToneStyles = {
  blue: {
    label: "border-blue-200 bg-blue-50 text-[#0052FF]",
    icon: "border-blue-100 bg-blue-50 text-[#0052FF] shadow-blue-950/[0.04]",
    glow: "bg-blue-500/10",
  },
  green: {
    label: "border-emerald-200 bg-emerald-50 text-emerald-600",
    icon: "border-emerald-100 bg-emerald-50 text-emerald-600 shadow-emerald-950/[0.04]",
    glow: "bg-emerald-500/10",
  },
};

function StatStrip() {
  return (
    <div className="bg-[#03071a] shadow-[0_8px_18px_rgba(15,23,42,0.16)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 px-4 py-4 sm:px-6 md:grid-cols-4 md:divide-y-0 md:py-5 lg:px-8">
        {heroComparisonStats.map(([value, label, color]) => (
          <div key={label} className="px-3 py-2 text-center md:py-0">
            <div className={`font-display text-4xl font-bold leading-none tracking-tight sm:text-5xl ${color}`}>{value}</div>
            <div className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-[11px]">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessStepCard({ step }) {
  const Icon = step.icon;
  const toneStyles = processToneStyles[step.tone];

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-7 text-center shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8"
    >
      <div className="pointer-events-none absolute right-5 top-2 font-display text-8xl font-bold leading-none tracking-tight text-slate-950/[0.035] transition-colors duration-300 group-hover:text-[#0052FF]/[0.06]">
        {step.number}
      </div>
      <div className={`pointer-events-none absolute left-1/2 top-9 h-20 w-20 -translate-x-1/2 rounded-full blur-2xl ${toneStyles.glow}`} />

      <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
        <div className={`flex h-full w-full items-center justify-center rounded-2xl border ${toneStyles.icon}`}>
          <Icon className="h-7 w-7" />
        </div>
      </div>

      <div className={`relative mx-auto mt-7 inline-flex rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${toneStyles.label}`}>
        {step.step}
      </div>

      <h3 className="relative mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-slate-950">{step.title}</h3>
      <p className="relative mt-4 text-sm leading-6 text-slate-600 sm:text-[15px]">{step.description}</p>
    </motion.article>
  );
}

function StreamlinedFlowSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6f8]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,82,255,0.08)_1px,transparent_0)] [background-size:26px_26px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-2 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <motion.div variants={fadeUp} className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-[#0052FF] shadow-sm">
            STREAMLINED FLOW
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            From job description to shipping code in one week.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Our optimized screening and integration process eliminates long hiring pipelines so you can scale your codebase at speed.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3 lg:gap-7">
          {processSteps.map((step) => (
            <ProcessStepCard key={step.step} step={step} />
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0052FF] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_35px_rgba(0,82,255,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0047dd] hover:shadow-[0_22px_42px_rgba(0,82,255,0.34)] focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:ring-offset-2"
          >
            Hire with confidence
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function BulletText({ text, tone }) {
  const colonIndex = text.indexOf(":");
  const highlight = colonIndex > 0 ? text.slice(0, colonIndex + 1) : negativeHighlights.find((phrase) => text.startsWith(phrase));

  if (!highlight) return text;

  return (
    <>
      <span className={tone === "negative" ? "font-bold text-slate-800" : "font-bold text-slate-700"}>{highlight}</span>
      {text.slice(highlight.length)}
    </>
  );
}

function ComparisonCard({ card }) {
  const styles = stylesByTone[card.tone];
  const HeaderIcon = styles.HeaderIcon;
  const BulletIcon = styles.BulletIcon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover.whileHover}
      transition={cardHover.transition}
      className={`flex min-h-[440px] flex-col rounded-2xl border p-7 shadow-sm sm:p-8 lg:p-10 ${styles.card}`}
    >
      <div className="flex items-center gap-4 mb-0">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${styles.iconBox}`}>
          <HeaderIcon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold leading-tight text-slate-950 sm:text-2xl">{card.title}</h3>
          <p className={`mt-1 font-mono text-[11px] font-semibold ${styles.subtitle}`}>{card.subtitle}</p>
        </div>
      </div>

      <div className="mt-10 space-y-5">
        {card.bullets.map((bullet) => (
          <div key={bullet} className="grid grid-cols-[22px_1fr] gap-3 text-sm leading-6 text-slate-700 sm:text-base">
            <BulletIcon className={`mt-1 h-4 w-4 ${styles.bulletIcon}`} />
            <p>
              <BulletText text={bullet} tone={card.tone} />
            </p>
          </div>
        ))}
      </div>

      <div className={`mt-8 border-t pt-6 ${styles.divider}`}>
        <p className={`font-mono text-[11px] font-bold uppercase tracking-wider ${styles.result}`}>{card.result}</p>
      </div>
    </motion.article>
  );
}

export function HeroComparisonSection() {
  return (
    <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="bg-[#f5f6f8]">
      <StatStrip />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 mb-0">
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">HIRING REIMAGINED</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Hiring engineers shouldn't take 3 months.

          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="mx-auto mt-16 grid max-w-6xl gap-7 lg:grid-cols-2 lg:gap-8 mb-0">
          {comparisonCards.map((card) => (
            <ComparisonCard key={card.title} card={card} />
          ))}
        </motion.div>
      </div>

      <StreamlinedFlowSection />
    </motion.section>
  );
}
