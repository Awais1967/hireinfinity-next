"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { LinkButton } from "../../common/ui/LinkButton";
import { landingFaqs, technologyChips } from "../../constants/mockData";
import { fadeUp, staggerContainer } from "../../common/ui/animationVariants";

function TechnologyChips() {
  return (
    <motion.section className="bg-[#f5f6f8]" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="mx-auto max-w-5xl px-4 pb-14 pt-8 text-center sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
        <motion.div variants={fadeUp}>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">EXPERIENCED TECHNOLOGIES</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            We staff 15+ complex modern frameworks & design files
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {technologyChips.map((chip) => (
            <motion.span
              key={chip}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 font-mono text-xs font-bold text-slate-700 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#0052FF]" />
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section id="faq" className="scroll-mt-24 bg-[#f5f6f8]" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <motion.div variants={fadeUp} className="text-center">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">COMMON INQUIRIES</p>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="mx-auto mt-16 max-w-4xl">
          {landingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div key={faq.question} variants={fadeUp} className="border-b border-slate-200 py-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-display text-base font-bold text-slate-950 sm:text-lg">{faq.question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500">
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>

                <div className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pt-5 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

function FinalCta() {
  return (
    <motion.section className="border-b border-slate-200 bg-[#f5f6f8]" initial="hidden" animate="visible" variants={fadeUp}>
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8">
        <motion.div className="mx-auto max-w-6xl rounded-3xl bg-slate-950 px-6 py-16 text-center shadow-[0_18px_40px_rgba(15,23,42,0.18)] sm:px-10 sm:py-20" variants={fadeUp}>
          <h2 className="font-display text-4xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start shipping in 5 days.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base font-semibold leading-7 text-slate-400 sm:text-lg">
            We have developers vetted and ready to interview. Let's map your roadmap and match you with 2-3 matching senior engineers under a worry-free trial.
          </p>
          <LinkButton
            to="/contact"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0052FF] px-8 py-4 font-display text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Book a Free Call
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <p className="mt-8 font-mono text-xs font-bold text-slate-500">Zero commitments. No setup fees. 2-week risk-free trial.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function BottomLandingSections() {
  return (
    <>
      <TechnologyChips />
      <FaqAccordion />
      <FinalCta />
    </>
  );
}


