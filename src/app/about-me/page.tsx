"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import { skillCategories } from "@/data/skills";
import { timeline, stats } from "@/data/experience";
import { MapPin, Calendar, Target } from "lucide-react";

export default function AboutMePage() {
  return (
    <>
      {/* ──── HEADER ──── */}
      <section className="relative pt-32 pb-16 bg-radial-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">
              Get to know me
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              About Me<span className="text-cyan-400">.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ──── BIO (2 Columns) ──── */}
      <AnimatedSection className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — Avatar */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-purple-500/10 blur-2xl" />
              <div className="relative w-64 h-72 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] flex items-center justify-center overflow-hidden">
                <span className="text-7xl font-bold text-gradient opacity-40">
                  RZ
                </span>
                <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-cyan-400/50" />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-purple-400/50" />
              </div>
              {/* Info cards */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin size={14} className="text-cyan-400" />
                  Indonesia
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar size={14} className="text-cyan-400" />
                  4+ years learning & building
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Target size={14} className="text-cyan-400" />
                  Fullstack Development
                </div>
              </div>
            </div>
          </div>

          {/* Right — Bio text */}
          <div className="lg:col-span-3 space-y-5">
            <h2 className="text-2xl font-bold text-white">
              Hi, I&apos;m Rasya Zildan 👋
            </h2>
            <p className="text-gray-400 leading-relaxed">
              I&apos;m a passionate Fullstack Developer from Indonesia with a
              deep love for creating intuitive digital experiences. My journey
              started in 2021 when I first discovered HTML and CSS — since then,
              I&apos;ve been fascinated by the art of turning ideas into
              interactive, polished products.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Today, I specialize in building modern web applications using
              React, Next.js, and Node.js. I enjoy the entire process — from
              designing database schemas and REST APIs to crafting pixel-perfect
              frontends with smooth animations and dark-mode aesthetics.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new technologies,
              contributing to open-source projects, and continuously expanding my
              skill set. I believe in writing clean, maintainable code and
              building products that make a real impact.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ──── STATS ──── */}
      <AnimatedSection className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
              >
                <p className="text-3xl font-bold text-cyan-400">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ──── TECH STACK ──── */}
      <AnimatedSection className="py-24 bg-radial-section">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="Tech Stack"
            subtitle="Technologies and tools I work with on a daily basis."
          />
          <div className="space-y-8">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ──── TIMELINE ──── */}
      <AnimatedSection className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="Journey"
            subtitle="My path as a developer — milestones and experiences."
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.06]" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#111118] border-2 border-cyan-400/50" />
                  <span className="text-xs font-medium text-cyan-400">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
