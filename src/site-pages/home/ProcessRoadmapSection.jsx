"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "../../constants/mockData";
import { fadeUp, staggerContainer, cardHover } from "../../common/ui/animationVariants";

const footerTone = {
  muted: "text-slate-400 italic",
  blue: "text-[#0052FF]",
  green: "text-emerald-600",
};

function ProcessCard({ step, index }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover.whileHover}
      transition={cardHover.transition}
      className="group relative min-h-[272px] overflow-hidden rounded-xl border border-white/80 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.07)] ring-1 ring-slate-950/[0.03] backdrop-blur transition-colors hover:border-blue-200 hover:bg-white sm:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0052FF] via-sky-400 to-emerald-400 opacity-75 transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute right-5 top-4 font-display text-6xl font-black leading-none text-slate-100 transition-colors group-hover:text-blue-50 sm:text-7xl">
        {index + 1}
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#0052FF]">{step.label}</p>
        <h3 className="mt-3 font-display text-xl font-bold leading-tight text-slate-950">{step.title}</h3>
        <p className="mt-5 text-[15px] leading-7 text-slate-600">{step.body}</p>
        <p className={`mt-auto pt-7 font-mono text-[11px] font-bold tracking-wider ${footerTone[step.tone]}`}>
          {step.footer}
        </p>
      </div>
    </motion.article>
  );
}

export function ProcessRoadmapSection() {
  return (
    <motion.section
      id="how-it-works"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_46%,#f5f6f8_100%)]"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-12 -z-10 h-72 w-[min(780px,90vw)] -translate-x-1/2 rounded-full bg-blue-100/45 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">Speed Meets Quality</p>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Unblock your product roadmap in 4 steps
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.label} step={step} index={index} />
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#0052FF] px-7 py-3 font-display text-sm font-bold text-white shadow-[0_14px_28px_rgba(0,82,255,0.22)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
          >
            Start Building Your Team
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-slate-200 bg-white/80 px-7 py-3 font-display text-sm font-bold text-slate-950 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-[#0052FF] sm:w-auto"
          >
            View Case Studies
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
