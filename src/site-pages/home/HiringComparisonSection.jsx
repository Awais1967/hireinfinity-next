"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LinkButton } from "../../common/ui/LinkButton";
import { sourcingComparisonRows, successStories } from "../../constants/mockData";
import { fadeUp, staggerContainer, cardHover } from "../../common/ui/animationVariants";

const columns = [
  { key: "parameter", label: "EVALUATION PARAMETER" },
  { key: "hireInfinity", label: "HireInfinity" },
  { key: "toptal", label: "Toptal" },
  { key: "lemon", label: "Lemon.io" },
  { key: "arc", label: "Arc.dev" },
  { key: "local", label: "Local US Hire" },
];

function ComparisonTable() {
  return (
    <motion.div variants={fadeUp} className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1080px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-6 font-mono text-[11px] font-bold tracking-wider text-slate-500 ${
                    column.key === "hireInfinity" ? "bg-blue-50/70 text-slate-950" : ""
                  }`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sourcingComparisonRows.map((row) => (
              <tr key={row.parameter} className="border-b border-slate-900/70 last:border-b-0">
                <td className="w-[190px] px-6 py-7 font-display text-base font-bold leading-6 text-slate-950">{row.parameter}</td>
                <td className="w-[250px] bg-blue-50/70 px-6 py-7 font-mono text-sm font-bold leading-6 text-[#0052FF]">
                  <span className="inline-flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    {row.hireInfinity}
                  </span>
                </td>
                <td className="px-6 py-7 font-mono text-sm leading-6 text-slate-500">{row.toptal}</td>
                <td className="px-6 py-7 font-mono text-sm leading-6 text-slate-500">{row.lemon}</td>
                <td className="px-6 py-7 font-mono text-sm leading-6 text-slate-500">{row.arc}</td>
                <td className="px-6 py-7 font-mono text-sm leading-6 text-slate-400">{row.local}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function SuccessStoryCard({ story }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover.whileHover}
      transition={cardHover.transition}
      className="relative flex min-h-[276px] flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
    >
      <div className="absolute -top-4 left-0 px-6 font-serif text-7xl font-black leading-none text-blue-100">{"\u201c"}</div>
      <p className="relative z-10 mt-4 text-[15px] italic leading-7 text-slate-700">"{story.quote}"</p>

      <div className="relative z-10 mt-auto flex items-center gap-4 pt-10">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 font-mono text-xs font-bold text-[#0052FF]">
          {story.initial}
        </div>
        <div>
          <h3 className="font-display text-sm font-bold text-slate-950">{story.name}</h3>
          <p className="mt-1 text-xs text-slate-600">{story.role}</p>
        </div>
      </div>
    </motion.article>
  );
}

function SuccessStoriesSection() {
  return (
    <motion.section className="border-y border-slate-200 bg-[#f5f6f8]" variants={staggerContainer} initial="hidden" animate="visible">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">SUCCESS STORIES</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
            Trusted by tech founders globally
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {successStories.map((story) => (
            <SuccessStoryCard key={story.name} story={story} />
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 flex justify-center">
          <LinkButton
            to="/contact"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#0052FF] px-8 py-4 font-display text-sm font-bold text-white shadow-[0_12px_24px_rgba(0,82,255,0.22)] transition-colors hover:bg-blue-700"
          >
            Book a Free Call
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function HiringComparisonSection() {
  return (
    <motion.section className="bg-[#f5f6f8]" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="border-y border-slate-300/80 bg-[#edf1f5]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <motion.div variants={fadeUp} className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">RIGOROUS SOURCING COMPARE</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
              How we compare on cost, speed & flexibility
            </h2>
          </motion.div>

          <ComparisonTable />
        </div>
      </div>
      <SuccessStoriesSection />
    </motion.section>
  );
}


