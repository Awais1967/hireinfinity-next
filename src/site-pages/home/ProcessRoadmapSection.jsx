"use client";

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
      className="relative min-h-[252px] overflow-hidden rounded-xl border border-slate-200 bg-white p-7 shadow-[0_8px_22px_rgba(15,23,42,0.04)] sm:p-8"
    >
      <div className="pointer-events-none absolute right-5 top-1 font-display text-6xl font-black leading-none text-slate-100 sm:text-7xl">
        {index + 1}
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#0052FF]">{step.label}</p>
        <h3 className="mt-3 font-display text-xl font-bold leading-tight text-slate-950">{step.title}</h3>
        <p className="mt-5 text-[15px] leading-7 text-slate-600">{step.body}</p>
        <p className={`mt-auto pt-8 font-mono text-[11px] font-bold tracking-wider ${footerTone[step.tone]}`}>
          {step.footer}
        </p>
      </div>
    </motion.article>
  );
}

export function ProcessRoadmapSection() {
  return (
    <motion.section id="how-it-works" className="scroll-mt-24 bg-[#f5f6f8]" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">Speed Meets Quality</p>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Unblock your product roadmap in 4 steps
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.label} step={step} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}


