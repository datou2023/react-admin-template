/**
 * 来源: Fortune AI - https://www.cpys2026.com
 * 通用 Section 动画包装器
 */

"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  noAnimation?: boolean;
};

const easeValues = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeValues,
    },
  },
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  delay = 0,
  noAnimation = false,
}: SectionWrapperProps) {
  if (noAnimation) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
