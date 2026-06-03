"use client";

import { useRouter } from "next/navigation";
import { Award, Star } from "lucide-react";
import { LinkButton } from "../common/ui/LinkButton";
import { scrollToSection } from "../common/utils/navigation";

export function Footer() {
  const router = useRouter();
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50 pb-12 pt-16 text-slate-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-slate-200 pb-12 md:grid-cols-4 md:gap-8">
          <div className="space-y-4 md:col-span-2">
            <LinkButton to="/" className="inline-flex flex-col text-left">
              <span className="font-display text-2xl font-bold tracking-tight text-slate-950">
                Hire<span className="text-[#0052FF]">Infinity</span>
              </span>
              <span className="-mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">A brand of Infinity Softwares</span>
            </LinkButton>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              Hire senior, vetted engineers compatible with your hours in 5 days or less. Reduce development overhead with zero hiring barriers.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/infiniti-softwares/" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600" aria-label="LinkedIn">
                <span className="font-display text-sm font-bold">in</span>
              </a>
              <a href="https://www.instagram.com/infinitysoftwarehq?igsh=MWQ2Y2xwZmZubHFzeA==" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-pink-300 hover:text-pink-600" aria-label="Instagram">
                <span className="font-display text-sm font-bold">ig</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-900">Resources</h4>
            <div className="space-y-2 text-sm">
              <LinkButton to="/" className="block text-left text-slate-600 hover:text-blue-600">Homepage</LinkButton>
              <LinkButton to="/engineers" className="block text-left text-slate-600 hover:text-blue-600">Available Engineers</LinkButton>
              <button type="button" onClick={() => scrollToSection("how-it-works", router)} className="block text-left text-slate-600 hover:text-blue-600">How It Works</button>
              <button type="button" onClick={() => scrollToSection("pricing", router)} className="block text-left text-slate-600 hover:text-blue-600">Pricing</button>
              <LinkButton to="/case-studies" className="block text-left text-slate-600 hover:text-blue-600">Case Studies</LinkButton>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-900">Credentials</h4>
            <div className="relative flex h-32 flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-slate-800">Clutch</span>
                <Award className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-amber-500" />
                  ))}
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <span className="font-mono text-sm font-bold text-slate-900">4.9 / 5.0</span>
                  <span className="text-xs text-slate-400">Global Augmentation Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-500 md:flex-row">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 HireInfinity. All rights reserved.</span>
            <span className="text-slate-300">|</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">A brand of Infinity Softwares</span>
          </div>
          <div className="flex gap-6">
            <LinkButton to="/contact" className="hover:text-blue-600">Book a Free Call</LinkButton>
            <span className="text-slate-300">|</span>
            <span className="cursor-pointer text-slate-400 hover:text-blue-600">Privacy Policy</span>
            <span className="text-slate-300">|</span>
            <span className="cursor-pointer text-slate-400 hover:text-blue-600">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


