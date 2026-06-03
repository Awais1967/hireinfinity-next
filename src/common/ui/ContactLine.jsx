import React from "react";
export function ContactLine({ icon, label, value }) {
  const Icon = icon;

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#0052FF] shadow-xs">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
        <span className="text-sm font-bold text-slate-900">{value}</span>
      </div>
    </div>
  );
}


