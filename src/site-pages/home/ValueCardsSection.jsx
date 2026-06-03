"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock3, DollarSign, Shield } from "lucide-react";
import { valueCards } from "../../constants/mockData";
import { fadeUp, staggerContainer, cardHover } from "../../common/ui/animationVariants";

const icons = {
  clock: Clock3,
  dollar: DollarSign,
  shield: Shield,
};

const toneStyles = {
  blue: "border-blue-100 bg-blue-50 text-[#0052FF]",
  green: "border-emerald-100 bg-emerald-50 text-emerald-600",
  purple: "border-purple-100 bg-purple-50 text-purple-600",
};

function ValueCard({ card }) {
  const Icon = icons[card.icon];

  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover.whileHover}
      transition={cardHover.transition}
      className="flex min-h-[310px] flex-col rounded-xl border border-slate-950/80 bg-white p-8 shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:p-9"
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${toneStyles[card.tone]}`}>
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-slate-950">{card.title}</h3>
      <p className="mt-5 text-[15px] leading-7 text-slate-700">{card.description}</p>
    </motion.article>
  );
}

export function ValueCardsSection() {
  return (
    <motion.section className="border-b border-slate-200 bg-[#f5f6f8]" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div variants={staggerContainer} className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {valueCards.map((card) => (
            <ValueCard key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}


