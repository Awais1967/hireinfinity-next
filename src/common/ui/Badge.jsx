import React from "react";
export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#0052FF]">
      {children}
    </span>
  );
}


