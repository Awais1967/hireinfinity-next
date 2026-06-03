"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, CheckCircle2, X } from "lucide-react";
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

function StatStrip() {
  return (
    <div className="border-y border-slate-200 bg-white shadow-[0_1px_8px_rgba(15,23,42,0.05)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 px-4 py-5 sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
        {heroComparisonStats.map(([value, label, color]) => (
          <div key={label} className="px-3 py-4 text-center md:py-1">
            <div className={`font-display text-4xl font-black leading-none tracking-tight sm:text-5xl ${color}`}>{value}</div>
            <div className="mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 sm:text-[11px]">{label}</div>
          </div>
        ))}
      </div>
    </div>
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
          <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Why companies are shifting away from traditional pipelines
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="mx-auto mt-16 grid max-w-6xl gap-7 lg:grid-cols-2 lg:gap-8 mb-0">
          {comparisonCards.map((card) => (
            <ComparisonCard key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}


