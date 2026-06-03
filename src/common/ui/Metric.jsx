import React from "react";
export function Metric({ label, value, suffix, blue: isBlue, green }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 shadow-xs transition-all hover:border-blue-200">
      <span className="block font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
      <p className={`mt-2 flex items-baseline gap-1 font-display text-3xl font-black ${green ? "text-emerald-600" : isBlue ? "text-[#0052FF]" : "text-slate-900"}`}>
        {value}
        {suffix && <span className="text-xs font-normal text-slate-500">{suffix}</span>}
      </p>
      <p className="mt-2 text-[11px] leading-relaxed text-slate-500">Typical velocity delivered consistently with less administrative friction.</p>
    </div>
  );
}


