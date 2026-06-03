import React from "react";
export function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs font-bold uppercase text-slate-500">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-100"
      />
    </label>
  );
}

export function Select({ label, children, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs font-bold uppercase text-slate-500">{label}</span>
      <select
        {...props}
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-100"
      >
        {children}
      </select>
    </label>
  );
}


