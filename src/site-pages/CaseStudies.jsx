"use client";

import React from "react";
import { useMemo, useState } from "react";
import { ChevronRight, SlidersVertical, Zap } from "lucide-react";
import { Badge } from "../common/ui/Badge";
import { LinkButton } from "../common/ui/LinkButton";
import { Metric } from "../common/ui/Metric";
import { caseStudies, caseStudyScaleOptions } from "../constants/mockData";

export function CaseStudies() {
  const [level, setLevel] = useState(2);
  const active = useMemo(() => caseStudyScaleOptions[level], [level]);

  return (
    <div className="min-h-screen bg-[#fafbfc] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 text-slate-800 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>Proven Engineering Velocity</Badge>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950">Case Studies</h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Read how senior augmented resources help companies optimize databases, accelerate deployment schedules, and bypass agency commission fees.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.industry} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-xs transition-all hover:border-blue-200 hover:shadow-lg">
              <div className="space-y-6">
                <div>
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">{study.client}</span>
                  <span className="mt-2 block font-mono text-sm font-bold uppercase tracking-wide text-[#0052FF]">{study.industry}</span>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-400">Key metric achieved</span>
                  <p className="mt-1 font-display text-lg font-black text-emerald-600">{study.metric}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">Engagement Summary</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{study.summary}</p>
                </div>
                <div className="rounded border-t border-slate-100 bg-slate-50/50 p-3 text-sm italic leading-relaxed text-slate-500">"{study.quote}"</div>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400">Duration:</span>
                  <span className="font-bold text-slate-900">{study.duration}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {study.stack.map((item) => (
                    <span key={item} className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] tracking-wide text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center">
            <div>
              <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600">
                <SlidersVertical className="h-3 w-3" />
                Interactive Impact Tool
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-slate-900">Sprint Delivery & Velocity Simulator</h3>
              <p className="mt-1 font-mono text-xs font-semibold text-slate-500">Simulate sprint outcomes and technical hours saved by scaling your augmented team.</p>
            </div>
            <div className="flex max-w-fit items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-xs">
              <span className="text-slate-500">Active Scale Selected:</span>
              <span className="font-black text-[#0052FF]">{active[1]}</span>
            </div>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs font-bold uppercase text-slate-500">
                  <span>Select Target Team Scale</span>
                  <span className="text-[#0052FF]">Level: {level} of 4</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={level}
                  onChange={(event) => setLevel(Number(event.target.value))}
                  className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-[#0052FF]"
                />
                <div className="grid grid-cols-4 text-center font-mono text-[10px] font-semibold text-slate-400">
                  {["Senior Dev", "Senior Devs", "Growth Pod", "Scale Pod"].map((label, index) => (
                    <button key={label} type="button" onClick={() => setLevel(index + 1)} className={level === index + 1 ? "font-bold text-blue-600" : "hover:text-slate-700"}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 shadow-xs">
                <h4 className="font-display font-bold text-[#0052FF]">{active[0]}</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Matched senior delivery capacity with full SLA coverage, direct Slack overlap, and pilot-friendly cost controls.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              <Metric label="Estimated Sprint Points" value={active[2]} suffix="points/sprint" />
              <Metric label="Weekly Code Deploys" value={active[3]} blue />
              <Metric label="CTO/PM Sprint Hours Saved" value={active[4]} green />
              <div className="flex flex-col justify-between rounded-xl border border-blue-100 bg-blue-50/40 p-5">
                <div>
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#0052FF]">Special pilot offer cost</span>
                  <p className="mt-2 font-display text-2xl font-black text-[#0052FF]">
                    {active[5]} <span className="text-xs font-normal text-slate-500">for 2-week trial</span>
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">Saves over 50% compared to typical local agencies.</p>
                </div>
                <LinkButton to="/contact" className="mt-4 inline-flex w-full items-center justify-center gap-1 rounded-lg bg-[#0052FF] py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                  Hire Active Setup
                  <Zap className="h-3.5 w-3.5" />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center text-white shadow-lg sm:p-12">
          <h3 className="font-display text-2xl font-semibold">Ready to scale your product velocity?</h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            We staff exact-match profiles for your stack under clear SLA structures. Start a risk-free 2-week pilot with zero obligation.
          </p>
          <LinkButton to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0052FF] px-8 py-3.5 font-display text-sm font-semibold text-white shadow-md shadow-blue-950/20 hover:bg-[#1a46cf]">
            Book a Free Call
            <ChevronRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </div>
  );
}


