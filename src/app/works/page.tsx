"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, type Project } from "@/data/projects";

const categories = ["All", "Web", "Mobile", "Backend"] as const;
type Category = (typeof categories)[number];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (p) => p.category === activeCategory.toLowerCase()
        );

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
              Portfolio
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Selected Works<span className="text-cyan-400">.</span>
            </h1>
            <p className="mt-4 text-base text-gray-500 max-w-lg">
              A curated collection of projects I&apos;ve built — from fullstack web
              apps to mobile solutions and backend services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──── FILTER + GRID ──── */}
      <AnimatedSection className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-cyan-400 text-black"
                    : "bg-white/[0.04] text-gray-400 border border-white/[0.06] hover:text-white hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* ──── Modal ──── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
