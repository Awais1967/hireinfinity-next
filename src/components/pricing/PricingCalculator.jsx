"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  CloudCog,
  Cpu,
  Gauge,
  Minus,
  Monitor,
  Plus,
  Server,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { engineers } from "../../constants/mockData";

const roleIcons = {
  frontend: Monitor,
  backend: Server,
  mobile: Smartphone,
  devops: CloudCog,
  qa: ShieldCheck,
  pm: ClipboardList,
  cto: BriefcaseBusiness,
};

function toRoleId(role) {
  return role.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const roles = engineers.map((engineer) => ({
  id: toRoleId(engineer.role),
  icon: roleIcons[engineer.category] || Cpu,
  name: engineer.role,
  level: engineer.experience,
  price: engineer.monthlyValue,
}));

const presets = [
  { id: "bootstrap", label: "Bootstrap (2)", icon: Zap, counts: { [toRoleId("Mid Frontend & Next.js Engineer")]: 1, [toRoleId("Senior Python & AI Engineer")]: 1 } },
  {
    id: "scale",
    label: "Scale (5)",
    icon: Gauge,
    counts: {
      [toRoleId("Mid Frontend & Next.js Engineer")]: 1,
      [toRoleId("Senior UI/UX Designer & Figma Specialist")]: 1,
      [toRoleId("Senior Python & AI Engineer")]: 1,
      [toRoleId("Senior Platform Engineer (GCP & SRE)")]: 1,
      [toRoleId("Mid QA Engineer")]: 1,
    },
  },
  {
    id: "enterprise",
    label: "Enterprise (6)",
    icon: Building2,
    counts: {
      [toRoleId("Lead Frontend & Next.js Engineer")]: 1,
      [toRoleId("Staff Backend & Distributed Systems Architect")]: 1,
      [toRoleId("Senior React Native Developer")]: 1,
      [toRoleId("Lead Cloud Infrastructure & SRE")]: 1,
      [toRoleId("Lead Software Development Engineer in Test (SDET)")]: 1,
      [toRoleId("Fractional CTO")]: 1,
    },
  },
];

const termOptions = [1, 3, 6, 9, 12];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getPresetCounts(presetId) {
  const preset = presets.find((item) => item.id === presetId) || presets[0];
  return Object.fromEntries(roles.map((role) => [role.id, preset.counts[role.id] || 0]));
}

export function PricingCalculator() {
  const [activePreset, setActivePreset] = useState("bootstrap");
  const [counts, setCounts] = useState(() => getPresetCounts("bootstrap"));
  const [term, setTerm] = useState(3);
  const [includeOnshoreBurden, setIncludeOnshoreBurden] = useState(true);

  const activeCount = useMemo(() => roles.reduce((sum, role) => sum + (counts[role.id] || 0), 0), [counts]);
  const monthlyTotal = useMemo(() => roles.reduce((sum, role) => sum + role.price * (counts[role.id] || 0), 0), [counts]);
  const agencyMonthly = Math.round(monthlyTotal * 1.885);
  const onshoreMonthly = Math.round(monthlyTotal * 3.846 * (includeOnshoreBurden ? 1.25 : 1));
  const termCommitment = monthlyTotal * term;
  const savings = Math.max(onshoreMonthly * term - termCommitment, 0);

  function choosePreset(presetId) {
    setActivePreset(presetId);
    setCounts(getPresetCounts(presetId));
  }

  function updateCount(roleId, direction) {
    setActivePreset("custom");
    setCounts((current) => ({
      ...current,
      [roleId]: Math.max(0, (current[roleId] || 0) + direction),
    }));
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f1f4f7] shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-5 border-b border-slate-200 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0052FF]">
                <Zap className="h-3.5 w-3.5" />
                Custom Squad Generator
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                <Building2 className="h-3.5 w-3.5" />
                {activeCount} Specialists Active
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-950">Interactive Cost & Custom Savings Calculator</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Modify counts or choose a preset to construct your ideal squad and compare live rates instantly.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">Presets:</span>
            <div className="flex flex-wrap gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1">
              {presets.map((preset) => {
                const Icon = preset.icon;
                const isActive = activePreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => choosePreset(preset.id)}
                    className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors ${
                      isActive ? "bg-[#0052FF] text-white shadow-sm" : "text-slate-700 hover:bg-white"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_1fr]">
          <div className="border-b border-slate-200 p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="mb-4 grid grid-cols-[1fr_170px] gap-3 border-b border-slate-200 pb-4">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400">
                Augmentation Profile Role <span className="rounded-full bg-blue-100 px-2 py-1 text-[9px] text-[#0052FF]">{activeCount} configured</span>
              </p>
              <p className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400 sm:block">Headcount Control</p>
            </div>

            <div className="max-h-[560px] divide-y divide-slate-200 overflow-y-auto pr-2">
              {roles.map((role) => {
                const Icon = role.icon;
                const count = counts[role.id] || 0;
                return (
                  <div key={role.id} className="grid gap-4 py-4 sm:grid-cols-[1fr_170px] sm:items-center">
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-950">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-bold text-slate-950">{role.name}</h3>
                        <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Exp: {role.level} <span className="px-1 text-slate-300">&bull;</span> Starts <span className="text-[#0052FF]">{formatCurrency(role.price)}/mo</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                      <button
                        type="button"
                        onClick={() => updateCount(role.id, -1)}
                        disabled={count === 0}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-blue-200 hover:text-[#0052FF] disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label={`Decrease ${role.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-4 text-center font-mono text-sm font-bold text-[#0052FF]">{count}</span>
                      <button
                        type="button"
                        onClick={() => updateCount(role.id, 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-blue-200 hover:text-[#0052FF]"
                        aria-label={`Increase ${role.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">Engagement Runtime Term</p>
                  <span className="rounded-full bg-slate-950 px-3 py-1 font-mono text-[10px] font-bold text-white">{term} Months</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={termOptions.length - 1}
                  step="1"
                  value={termOptions.indexOf(term)}
                  onChange={(event) => setTerm(termOptions[Number(event.target.value)])}
                  className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#0052FF]"
                  aria-label="Engagement runtime term"
                />
                <div className="mt-2 flex justify-between font-mono text-[9px] font-bold text-slate-400">
                  {termOptions.map((option) => (
                    <span key={option}>{option}m</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white/70 p-5">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">On-Shore Tax Heavy Load</p>
                  <p className="mt-2 font-display text-sm font-bold text-slate-950">Add US Burden (+25%)</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={includeOnshoreBurden}
                  onClick={() => setIncludeOnshoreBurden((current) => !current)}
                  className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${includeOnshoreBurden ? "bg-[#0052FF]" : "bg-slate-300"}`}
                >
                  <span
                    className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                      includeOnshoreBurden ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                  <span className="sr-only">Toggle US onshore burden</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-5 sm:p-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400">Squad Ratio & Live Cost Matrix</p>
            <div className="mt-5 space-y-4">
              <MatrixCard tone="blue" label="HireInfinity Subscription" value={`${formatCurrency(monthlyTotal)}/mo`} detail={`Total Term Commitment (${term}m):`} amount={formatCurrency(termCommitment)} />
              <MatrixCard tone="amber" label="Competitor Dev Agencies" value={`${formatCurrency(agencyMonthly)}/mo`} detail="Traditional Agency Term Cost:" amount={formatCurrency(agencyMonthly * term)} />
              <MatrixCard tone="red" label="US Onshore US Equivalent" value={`${formatCurrency(onshoreMonthly)}/mo`} detail="US Contractor Term Cost:" amount={formatCurrency(onshoreMonthly * term)} />
              <MatrixCard tone="emerald" label="Projected Capital Savings" value={`+${formatCurrency(savings)}`} detail="Runway Extension Ratio:" amount="~83% saved" />
            </div>

            <Link
              href="/contact"
              className="mt-auto inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#0052FF] px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white shadow-[0_12px_24px_rgba(0,82,255,0.22)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Lock In Custom Setup
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="mt-3 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Includes full 2-week risk protection trial & PM support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MatrixCard({ tone, label, value, detail, amount }) {
  const styles = {
    blue: "border-blue-200 bg-blue-50/60 text-[#0052FF]",
    amber: "border-amber-200 bg-amber-50/70 text-amber-700",
    red: "border-red-200 bg-red-50/70 text-red-700",
    emerald: "border-emerald-200 bg-emerald-50/70 text-emerald-700",
  };

  return (
    <div className={`rounded-xl border p-5 ${styles[tone]}`}>
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[11px] font-bold uppercase tracking-wider">{label}</p>
        <p className="font-mono text-lg font-bold sm:text-xl">{value}</p>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4 font-mono text-[11px] text-slate-600">
        <span>{detail}</span>
        <span className="font-bold text-slate-950">{amount}</span>
      </div>
    </div>
  );
}
