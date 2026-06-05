"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function AppSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => setVisible(false), 1800);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f1f3f5]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          role="status"
          aria-label="Loading HireInfinity"
        >
          <motion.div
            className="flex -translate-y-3 flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="font-display text-[34px] font-bold tracking-[-0.06em] text-slate-950">
              Hire<span className="text-[#0052FF]">Infinity</span>
            </div>

            <div className="mt-4 h-1 w-24 overflow-hidden rounded-full bg-blue-100">
              <motion.div
                className="h-full rounded-full bg-[#0052FF]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.45, ease: "easeInOut" }}
              />
            </div>

            <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Matching experts in 5 days
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
