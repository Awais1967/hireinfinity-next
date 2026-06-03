"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

export function LinkButton({ to, className = "", children, onClick, ...props }) {
  return (
    <MotionLink
      href={to}
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      {...props}
    >
      {children}
    </MotionLink>
  );
}
