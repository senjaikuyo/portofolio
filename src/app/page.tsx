"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Server, Smartphone, Palette } from "lucide-react";
import Button from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((p) => p.featured);
const highlightSkills = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
];

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, performant, and visually stunning web interfaces with React, Next.js, and modern CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing scalable APIs, database architectures, and server-side logic with Node.js, Express, and PostgreSQL.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications using React Native and Expo with native-like performance.",
  },
  {
    icon: Palette,
    title: "UI Implementation",
    description:
      "Translating design mockups into pixel-perfect, accessible, and animated user interfaces.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ──── HERO ──── */}
      <section className="relative min-h-screen flex items-center bg-radial-hero overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Available for Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Rasya
              <br />
              Zildan<span className="text-cyan-400">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl font-medium text-gray-400"
            >
              Fullstack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-base text-gray-500 max-w-md leading-relaxed"
            >
              I craft modern, high-quality digital products — from clean user
              interfaces to robust backend systems. Based in Indonesia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="/works">
                View Works <ArrowRight size={16} />
              </Button>
              <Button href="/about-me" variant="outline">
                About Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <SocialLinks />
            </motion.div>
          </div>

          {/* Right — Illustration/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-3xl" />
              {/* Avatar circle */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-cyan-400/10 via-white/[0.02] to-purple-500/10 border border-white/[0.08] flex items-center justify-center overflow-hidden">
                <div className="text-8xl font-bold text-gradient opacity-50">
                  RZ
                </div>
                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-cyan-400/60" />
                <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-purple-400/60" />
                <div className="absolute top-1/3 left-4 w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      </section>

      {/* ──── SHORT INTRO ──── */}
      <AnimatedSection className="py-24 bg-radial-section">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="About"
            subtitle="A brief introduction to who I am and what I do."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m a passionate Fullstack Developer based in Indonesia
                with 4+ years of experience creating digital products. I focus
                on writing clean, maintainable code and building interfaces that
                users love to interact with.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                From concept to deployment, I handle all aspects of product
                development — from designing database schemas to crafting
                pixel-perfect frontends with smooth animations.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {highlightSkills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ──── WHAT I DO ──── */}
      <AnimatedSection className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="What I Do"
            subtitle="Specialized services across the full development stack."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-400/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-400/20 transition-colors">
                  <service.icon size={20} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ──── FEATURED PROJECTS ──── */}
      <AnimatedSection className="py-24 bg-radial-section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-12">
            <SectionTitle
              title="Featured Works"
              subtitle="A selection of my recent projects."
            />
            <Button href="/works" variant="outline" className="hidden sm:inline-flex">
              View All <ArrowRight size={14} />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button href="/works" variant="outline">
              View All Works <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
