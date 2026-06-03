import React from "react";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "../../common/ui/LinkButton";
import { representativeProfiles } from "../../constants/mockData";

function ProfileCard({ profile }) {
  return (
    <article className="flex min-h-[402px] flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-[0_8px_22px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0052FF]">
          {profile.category}
        </span>
        <span className="whitespace-nowrap font-mono text-xs font-semibold text-slate-400">{profile.experience}</span>
      </div>

      <h3 className="mt-6 font-display text-xl font-bold leading-snug text-slate-950">{profile.title}</h3>
      <p className="mt-2 font-mono text-xs font-medium text-slate-500">{profile.rate}</p>
      <p className="mt-5 text-[15px] leading-7 text-slate-600">{profile.description}</p>

      <div className="mt-8 flex flex-wrap gap-2 pb-4">
        {profile.skills.map((skill) => (
          <span key={skill} className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500">
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-auto border-t border-slate-200 pt-5">
        <LinkButton
          to={`/contact?stack=${encodeURIComponent(profile.category)}`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-blue-200 bg-white px-4 py-3 font-display text-sm font-bold text-[#0052FF] transition-all hover:border-blue-500 hover:bg-blue-50"
        >
          Request This Profile Range
        </LinkButton>
      </div>
    </article>
  );
}

export function RepresentativeProfilesSection() {
  return (
    <section className="bg-[#f5f6f8]">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-[#0052FF]">Available Roster Preview</p>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-slate-950 sm:text-3xl">Representative Engineer Profiles</h2>
          </div>
          <LinkButton
            to="/engineers"
            className="inline-flex w-fit items-center gap-2 font-display text-sm font-bold text-[#0052FF] transition-colors hover:text-blue-700"
          >
            Browse all 12 specialties
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {representativeProfiles.map((profile) => (
            <ProfileCard key={profile.title} profile={profile} />
          ))}
        </div>

        <div className="mt-9 rounded-xl border border-slate-200 bg-white/80 px-5 py-4 text-center text-sm text-slate-700 shadow-sm">
          <span className="font-bold text-slate-950">Note:</span> Representative profiles. We match engineering assets based on your exact product requirements.
        </div>
      </div>
    </section>
  );
}


