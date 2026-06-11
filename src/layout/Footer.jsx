"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Award, Star } from "lucide-react";
import { LinkButton } from "../common/ui/LinkButton";
import { scrollToSection } from "../common/utils/navigation";
function LinkedinIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M6.94 8.98H3.76v10.26h3.18V8.98ZM5.35 7.58c1.02 0 1.84-.83 1.84-1.85S6.37 3.9 5.35 3.9 3.5 4.71 3.5 5.73s.83 1.85 1.85 1.85Zm13.86 6.03c0-3.12-1.67-4.57-3.9-4.57-1.8 0-2.6.99-3.05 1.68V8.98H9.22v10.26h3.17v-5.08c0-1.34.25-2.63 1.91-2.63 1.64 0 1.66 1.53 1.66 2.72v4.99h3.18l.07-5.63Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect width="15.5" height="15.5" x="4.25" y="4.25" rx="4.25" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="3.35" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="16.85" cy="7.15" r="1.05" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const router = useRouter();
  return (
    <footer className="mt-auto border-t border-slate-200 bg-[#eef1f5] pb-12 pt-16 text-slate-700">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-slate-200 pb-12 md:grid-cols-[1.5fr_0.75fr_1fr] md:gap-14">
          <div className="space-y-4">
            <LinkButton to="/" className="inline-flex flex-col text-left">
              <span className="inline-flex items-center gap-2">
                <span className="font-display text-2xl font-bold tracking-tight text-slate-950">
                  Hire<span className="text-[#0052FF]">Infinity</span>
                </span>
              </span>
              <span className="-mt-1 font-mono text-[10px] font-extrabold uppercase tracking-widest text-slate-600">A brand of Infinity Softwares</span>
            </LinkButton>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              Hire senior, vetted engineers compatible with your hours in 5 days or less. Reduce development overhead by 60% with zero hiring barriers.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/infiniti-softwares/" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://www.instagram.com/infinitysoftwarehq?igsh=MWQ2Y2xwZmZubHFzeA==" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-pink-300 hover:text-pink-600" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-900">Resources</h4>
            <div className="space-y-2 text-sm">
              <LinkButton to="/" className="block text-left text-slate-600 hover:text-blue-600">Homepage</LinkButton>
              <LinkButton to="/engineers" className="block text-left text-slate-600 hover:text-blue-600">Available Engineers</LinkButton>
              <button type="button" onClick={() => scrollToSection("how-it-works", router)} className="block text-left text-slate-600 hover:text-blue-600">How It Works</button>
              <LinkButton to="/pricing" className="block text-left text-slate-600 hover:text-blue-600">Pricing</LinkButton>
              <LinkButton to="/case-studies" className="block text-left text-slate-600 hover:text-blue-600">Case Studies</LinkButton>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-900">Credentials</h4>
            <div className="relative flex h-32 flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <Image src="/assets/images/Clutch logo.png" alt="Clutch" width={96} height={28} className="h-7 w-auto object-contain" />
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

        <div className="pt-8 text-xs text-slate-500">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start">
              <Image src="/assets/images/infiniti.png" alt="HireInfinity logo" width={14} height={24} className="h-6 w-auto -translate-y-0.5 shrink-0 object-contain mb-3" />
              <span>&copy; 2026 HireInfinity. All rights reserved.</span>
              <span className="text-slate-300">•</span>
              <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                A brand of Infinity Softwares
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-end">
              <LinkButton to="/contact" className="hover:text-blue-600">Book a Free Call</LinkButton>
              <span className="text-slate-300">|</span>
              <LinkButton to="/privacy-policy" className="text-slate-400 hover:text-blue-600">Privacy Policy</LinkButton>
              <span className="text-slate-300">|</span>
              <LinkButton to="/terms-of-service" className="text-slate-400 hover:text-blue-600">Terms of Service</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
