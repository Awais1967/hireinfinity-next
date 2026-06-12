"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { Clock, CreditCard, Mail, ShieldCheck } from "lucide-react";
import {
  budgetOptions,
  contactInfoItems,
  seniorityOptions,
  stackOptions,
  timelineOptions,
} from "../constants/contactPageData";

const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#0052FF] focus:bg-white focus:ring-2 focus:ring-blue-100";

function FieldLabel({ children }) {
  return <span className="mb-2 block font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">{children}</span>;
}

function TextField({ label, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <FieldLabel>{label}</FieldLabel>
      <input {...props} className={inputClasses} />
    </label>
  );
}

function SelectField({ label, children, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <FieldLabel>{label}</FieldLabel>
      <select {...props} className={`${inputClasses} appearance-auto text-slate-700`}>
        {children}
      </select>
    </label>
  );
}

function InfoItem({ item, index }) {
  const Icon = index === 1 ? CreditCard : ShieldCheck;
  const toneClasses = "border-blue-100 bg-blue-50 text-[#0052FF]";

  return (
    <div
      className={`flex gap-4 ${index === 1 ? "border-t border-slate-200 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0" : "md:pr-10"}`}
    >
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${toneClasses}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="font-display text-base font-bold text-slate-950">{item.title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
      </div>
    </div>
  );
}

function ContactInfoRow({ icon, label, value }) {
  const RowIcon = icon;

  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-[#0052FF]">
        <RowIcon className="h-5 w-5" />
      </div>
      <div>
        <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</span>
        <span className={`mt-1 block text-sm font-bold leading-5 text-slate-950 ${value === "hello@hireinfinity.co" ? "font-email" : ""}`}>{value}</span>
      </div>
    </div>
  );
}

export function Contact() {
  const params = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    stackNeeded: params.get("stack") || "React & Figma (Frontend)",
    seniority: params.get("seniority") || "Senior Level (5-8 yrs)",
    budgetRange: params.get("budget") || "$3k to $6k/mo",
    timeline: "Immediate (less than 5 days)",
    message: "",
  });

  const onChange = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  return (
    <main className="min-h-screen bg-[#fbfcfe] bg-[radial-gradient(#dbe3ee_1px,transparent_1px)] [background-size:22px_22px]">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#0052FF]">
            Start Vetting Today
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Book a Free Call</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Let&apos;s clarify your technical roadmap, evaluate candidate pools, and set up your 2-week trial at 50%.
          </p>
        </section>

        <section className="mx-auto mt-14 grid max-w-6xl gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_42px_rgba(15,23,42,0.04)] md:grid-cols-2 md:p-8">
          {contactInfoItems.map((item, index) => (
            <InfoItem key={item.title} item={item} index={index} />
          ))}
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <form
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_42px_rgba(15,23,42,0.04)] sm:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="mb-7">
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Requirement Discovery</h2>
              <p className="mt-2 font-mono text-xs font-semibold text-slate-950">
                Requirement reviews average under 2 hours in US timezone hours.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="Your Name *" name="name" value={form.name} onChange={onChange} placeholder="E.g., Jane Doe" required />
              <TextField label="Company Name" name="company" value={form.company} onChange={onChange} placeholder="E.g., Fintech Inc." />
              <TextField
                label="Work Email *"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="jane@company.com"
                required
                className="sm:col-span-2"
              />
              <SelectField label="Technology Stack Specialty" name="stackNeeded" value={form.stackNeeded} onChange={onChange}>
                {stackOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </SelectField>
              <SelectField label="Seniority Range" name="seniority" value={form.seniority} onChange={onChange}>
                {seniorityOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </SelectField>
              <SelectField label="Budget Allocation" name="budgetRange" value={form.budgetRange} onChange={onChange}>
                {budgetOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </SelectField>
              <SelectField label="Project Timeline" name="timeline" value={form.timeline} onChange={onChange}>
                {timelineOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </SelectField>
            </div>

            <label className="mt-5 block">
              <FieldLabel>Role Requirements / Message (Optional)</FieldLabel>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about the features they will build or integration requirements..."
                className={`${inputClasses} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="mt-7 w-full rounded-lg bg-[#0052FF] px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(0,82,255,0.22)] transition-all hover:bg-[#1747d5]"
            >
              Submit Consultation Request
            </button>
          </form>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_42px_rgba(15,23,42,0.04)] sm:p-8">
            <div className="mb-5">
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950">Instant Scheduler</h2>
              <p className="mt-2 font-mono text-xs font-semibold text-slate-950">Reserve your 30-minute alignment call directly.</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div
                className="calendly-inline-widget min-w-[320px]"
                data-url="https://calendly.com/hireinfinity/30min?hide_event_type_details=1"
                style={{ height: 700 }}
              />
            </div>
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

            <div className="mt-8 space-y-4 border-t border-slate-950 pt-6">
              <ContactInfoRow icon={Mail} label="Direct Communications" value="hello@hireinfinity.co" />
              <ContactInfoRow icon={Clock} label="Response SLA" value="Average response under 2 hours during standard business hours." />
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}


