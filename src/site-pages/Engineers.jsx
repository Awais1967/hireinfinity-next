"use client";

import React from "react";
import { useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  ClipboardList,
  CloudCog,
  Cpu,
  Monitor,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
} from "lucide-react";
import { LinkButton } from "../common/ui/LinkButton";
import { engineers } from "../constants/mockData";

const specialtyFilters = [
  ["all", "ALL SPECIALTIES"],
  ["frontend", "FRONTEND & FIGMA"],
  ["backend", "BACKEND & DATABASES"],
  ["mobile", "MOBILE APPS"],
  ["devops", "DEVOPS & SRE"],
  ["qa", "QA AUTOMATION"],
  ["pm", "PROJECT MANAGER"],
  ["cto", "FRACTIONAL CTO"],
];

const sectorIcons = {
  frontend: Monitor,
  backend: Server,
  mobile: Smartphone,
  devops: CloudCog,
  qa: ShieldCheck,
  pm: ClipboardList,
  cto: BriefcaseBusiness,
};

function EngineerCard({ engineer }) {
  const SectorIcon = sectorIcons[engineer.category] || Cpu;

  return (
    <article className="flex min-h-[430px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_22px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-[#0052FF]" title={engineer.sector}>
          <SectorIcon className="h-4.5 w-4.5" />
          <span className="sr-only">{engineer.sector}</span>
        </span>
        <span className="whitespace-nowrap font-mono text-xs text-slate-800">Exp: {engineer.experience}</span>
      </div>

      <h3 className="mt-7 font-display text-xl font-bold leading-snug tracking-tight text-slate-950">{engineer.role}</h3>
      <p className="mt-2 font-mono text-xs font-medium text-slate-500">
        Starts at {engineer.monthly} <span>{"\u2022"}</span> {engineer.hourly}
      </p>

      <div className="mt-6 border-l-2 border-slate-200 pl-4">
        <p className="text-[15px] leading-7 text-slate-600">{engineer.background}</p>
      </div>

      <div className="mt-8">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Core Technical Tags</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {engineer.stack.map((item) => (
            <span key={item} className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[10px] font-medium text-slate-600">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-slate-200 pt-5">
        <LinkButton
          to={`/contact?stack=${encodeURIComponent(engineer.sector)}&budget=${encodeURIComponent(engineer.monthly)}`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[#0052FF] bg-white px-4 py-3 font-display text-sm font-bold text-[#0052FF] transition-colors hover:bg-blue-50"
        >
          Request this profile range -&gt;
        </LinkButton>
      </div>
    </article>
  );
}

export function Engineers() {
  const [filter, setFilter] = useState("all");
  const [rateLimit, setRateLimit] = useState(6000);

  const filtered = useMemo(
    () =>
      engineers.filter((engineer) => {
        const specialtyMatch = filter === "all" || engineer.category === filter;
        return specialtyMatch && engineer.monthlyValue <= rateLimit;
      }),
    [filter, rateLimit],
  );

  return (
    <div className="min-h-screen bg-[#fafbfc] bg-[radial-gradient(#dbe3ee_1px,transparent_1px)] [background-size:22px_22px]">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 text-center sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0052FF]">
          <CalendarDays className="h-3.5 w-3.5" />
          Real-Time Pipeline Engagements
        </span>
        <h1 className="mt-6 font-display text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">What we staff.</h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
          Choose from over 15+ modern software specialties. Every candidate profile type is thoroughly vetted by technical panels and carries a full US daylight working schedule.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-[0_8px_22px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="mb-7 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#0052FF]">
            <SlidersHorizontal className="h-4 w-4" />
            Real-Time Roster Filter
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-slate-800">1. Select Specialty Sector</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {specialtyFilters.map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFilter(value)}
                    className={`rounded-lg border px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
                      filter === value
                        ? "border-[#0052FF] bg-[#0052FF] text-white shadow-sm"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-200 hover:text-[#0052FF]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-slate-800">2. Max Monthly Rate Limit</p>
                <span className="rounded border border-blue-100 bg-blue-50 px-3 py-1.5 font-mono text-xs font-bold text-slate-800">
                  ${rateLimit.toLocaleString()}/mo
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="6000"
                step="100"
                value={rateLimit}
                onChange={(event) => setRateLimit(Number(event.target.value))}
                className="mt-6 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#0052FF]"
              />
              <div className="mt-3 flex justify-between font-mono text-[10px] font-bold text-slate-400">
                <span>Min: $1,500</span>
                <span>Max: $6,000</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-slate-500">Filter results matching your criteria.</p>
            <span className="w-fit rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 font-mono text-xs font-bold text-slate-800">
              {filtered.length} of {engineers.length} Candidates Available
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((engineer) => (
            <EngineerCard key={engineer.role} engineer={engineer} />
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#0052FF]">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-slate-950">Representative Vetted Roster</h2>
              <p className="mt-1 text-sm text-slate-500">Availability of specific developer blocks is rapidly confirmed on discovery calls.</p>
            </div>
          </div>
          <LinkButton
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-7 py-3 font-mono text-xs font-bold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-[#0052FF]"
          >
            Check Active Bench (Free)
          </LinkButton>
        </div>
      </section>
    </div>
  );
}


