"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

export default function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/10"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-400/20 to-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10" />
        <div className="w-full h-full flex items-center justify-center text-4xl text-white/20 font-bold tracking-wider group-hover:scale-110 transition-transform duration-700">
          {project.title.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Stack badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/5 text-gray-400 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/5 text-gray-500">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 transition-colors"
          >
            <ExternalLink size={13} />
            Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Github size={13} />
            Source
          </a>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-cyan-400/5 to-transparent" />
    </motion.div>
  );
}
