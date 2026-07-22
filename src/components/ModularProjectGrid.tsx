"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Lock,
  Sparkles,
  Users,
  User,
} from "lucide-react";
import { projectsData, ProjectDomain, ProjectEntry } from "@/data/projectsData";
import ProjectLiveFrame from "./ProjectLiveFrame";

const domains: Array<"All" | ProjectDomain> = [
  "All",
  "Web & Full-Stack",
  "AI, Agents & NLP",
  "Data Science & Analytics",
  "Systems & Security",
];

export default function ModularProjectGrid() {
  const [activeDomain, setActiveDomain] = useState<"All" | ProjectDomain>("All");

  const filteredProjects =
    activeDomain === "All"
      ? projectsData
      : projectsData.filter((p) => p.domain === activeDomain);

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            PROJECTS
          </motion.h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] mx-auto mt-4 rounded-full" />
        </div>

        {/* Domain Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setActiveDomain(dom)}
              className={`px-4 py-2 rounded-xl text-xs font-orbitron uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeDomain === dom
                  ? "bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                  : "glass-panel border border-[#222222] text-gray-400 hover:text-white hover:border-[#00F0FF]/40"
              }`}
            >
              {dom}
            </button>
          ))}
        </div>

        {/* Dynamic Project Showcase Stack */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectEntry, idx: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-6 lg:p-8 border border-[#222222] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left Column: Project Meta & Details */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Domain & Badges Row */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#121212] border border-[#222222] text-xs font-mono uppercase text-[#00F0FF]">
                        {project.domain}
                      </span>

                      {project.isAiAssisted && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] text-xs font-mono shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>AI-Assisted</span>
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#8A2BE2]/15 border border-[#8A2BE2]/40 text-[#8A2BE2] text-xs font-mono">
                        {project.isTeamProject ? (
                          <>
                            <Users className="w-3.5 h-3.5" />
                            <span>Team Project</span>
                          </>
                        ) : (
                          <>
                            <User className="w-3.5 h-3.5" />
                            <span>Solo Project</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-3">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-300 font-normal leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="mb-6">
                      <span className="text-[11px] font-mono uppercase text-gray-500 block mb-2">
                        TECHNOLOGY STACK
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-[#121212] border border-[#222222] text-xs font-mono text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#222222]">
                    {project.isPrivateRepo ? (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121212] border border-[#222222] text-xs font-mono text-gray-500 cursor-not-allowed">
                        <Lock className="w-4 h-4" />
                        <span>Private Repository</span>
                      </div>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121212] border border-[#222222] text-xs font-mono text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.liveUrl === "No Demo" ? (
                      <span className="text-xs font-mono text-gray-500 bg-[#121212] px-3 py-2 rounded-xl border border-[#222222]">
                        [No Demo]
                      </span>
                    ) : project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#00F0FF]/20 to-[#8A2BE2]/20 border border-[#00F0FF]/60 text-xs font-orbitron font-semibold text-white hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                      >
                        <span>Launch Live Platform</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-gray-500 italic">
                        Pending Deployment
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column: Live Website / Repo Frame Screen */}
                <div className="lg:col-span-6 min-h-[300px]">
                  <ProjectLiveFrame project={project} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
