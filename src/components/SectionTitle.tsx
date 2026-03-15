"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
        <span className="text-cyan-400">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-400 text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
