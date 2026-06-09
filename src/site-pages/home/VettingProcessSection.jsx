import Link from "next/link";
import React from "react";
import { ArrowRight, Check } from "lucide-react";

const vettingSteps = [
  {
    number: "1",
    title: "Resume and LinkedIn review",
    metric: "100%",
    description: "go through manual check",
  },
  {
    number: "2",
    title: "Soft skills interview, resume credibility validation, and English check",
    metric: "30%",
    description: "undergo live screening",
  },
  {
    number: "3",
    title: "Technical interview with top senior engineers from our community",
    metric: "12%",
    description: "pass rigorous technical screening",
  },
  {
    number: "4",
    title: "HireInfinity roster listing with validated skills and experience only",
    metric: "5%",
    description: "get fully vetted and onboarded",
  },
];

const checklist = [
  "Resume and LinkedIn reviewed manually",
  "English and soft skills tested in live screening",
  "Technical depth verified by senior engineers",
  "Only validated candidates join the HireInfinity roster",
];

function TimelineStep({ step, isLast }) {
  return (
    <li className="relative grid grid-cols-[34px_1fr] gap-4 pb-12 last:pb-0 sm:gap-5">
      {!isLast && <span className="absolute left-[16px] top-9 h-[calc(100%-28px)] w-px bg-slate-300" />}
      <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-[#f8fafc] font-mono text-xs font-bold text-slate-950">
        {step.number}
      </span>
      <div className="pt-1">
        <h3 className="font-display text-base font-bold leading-tight text-slate-950">{step.title}</h3>
        <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:gap-3">
          <span className="font-display text-4xl font-bold leading-none tracking-tight text-[#0052FF]">{step.metric}</span>
          <span className="pb-1 text-sm leading-6 text-slate-500">{step.description}</span>
        </div>
      </div>
    </li>
  );
}

export function VettingProcessSection() {
  return (
    <section className="border-b border-slate-200 bg-[#f8fafc]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_0.95fr] lg:gap-20 lg:px-8 lg:py-24">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.34em] text-[#0052FF]">Vetting Process</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            How we vet every engineer.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            No AI shortcuts — we vet and match candidates 100% manually with a human touch at every step.
          </p>

          <ol className="mt-12">
            {vettingSteps.map((step, index) => (
              <TimelineStep key={step.title} step={step} isLast={index === vettingSteps.length - 1} />
            ))}
          </ol>
        </div>

        <div className="flex flex-col justify-center">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-7 shadow-[0_10px_28px_rgba(15,23,42,0.04)] sm:p-8 lg:p-10">
            <h3 className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-950">Only the top 5%</h3>
            <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500">
              Of applicants become fully vetted HireInfinity talent.
            </p>

            <div className="mt-8 border-t border-slate-200 pt-7">
              <ul className="space-y-5">
                {checklist.map((item) => (
                  <li key={item} className="grid grid-cols-[18px_1fr] gap-3 text-sm leading-6 text-slate-700 sm:text-base">
                    <Check className="mt-1 h-4 w-4 text-[#0052FF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#0052FF] px-8 py-4 font-display text-base font-bold text-white shadow-[0_12px_24px_rgba(0,82,255,0.22)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Book a Free Call
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
