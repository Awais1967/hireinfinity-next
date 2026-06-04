"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, PhoneCall, X } from "lucide-react";
import { LinkButton } from "../common/ui/LinkButton";
import { scrollToSection } from "../common/utils/navigation";

export function Nav() {
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const nav = [
    ["How It Works", () => scrollToSection("how-it-works", router)],
    ["Engineers", () => router.push("/engineers")],
    ["Pricing", () => router.push("/pricing")],
    ["FAQ", () => scrollToSection("faq", router)],
    ["Case Studies", () => router.push("/case-studies")],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <LinkButton to="/" className="group flex flex-col text-center sm:text-left">
            <span className="font-display text-2xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-blue-600">
              Hire<span className="text-[#0052FF]">Infinity</span>
            </span>
            <span className="-mt-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
              A brand of Infinity Softwares
            </span>
          </LinkButton>

          <div className="hidden items-center gap-8 md:flex">
            {nav.map(([label, action]) => (
              <button
                key={label}
                type="button"
                onClick={action}
                className={`text-sm font-medium transition-colors hover:text-[#0052FF] ${
                  path.includes(label.toLowerCase().split(" ")[0]) ? "text-blue-600" : "text-slate-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <LinkButton
            to="/contact"
            className="hidden items-center gap-2 rounded-lg bg-[#0052FF] px-6 py-3 font-display text-sm font-semibold text-white shadow-md shadow-blue-100 transition-all hover:scale-[1.02] hover:bg-[#1a46cf] hover:shadow-blue-200 md:inline-flex"
          >
            <PhoneCall className="h-4 w-4" />
            Book a Free Call
          </LinkButton>

          <button
            type="button"
            className="rounded-md p-2 text-slate-600 hover:text-slate-900 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="space-y-3 border-b border-slate-200 bg-white px-4 py-4 shadow-inner md:hidden">
          {nav.map(([label, action]) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                setOpen(false);
                action();
              }}
              className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            >
              {label}
            </button>
          ))}
          <LinkButton
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0052FF] px-4 py-3 font-semibold text-white shadow"
          >
            <PhoneCall className="h-4 w-4" />
            Book a Free Call
          </LinkButton>
        </div>
      )}
    </nav>
  );
}
