"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  Cpu,
  Sparkles,
  Layers,
  Terminal,
  Info,
  ImageIcon,
} from "lucide-react";
import { internshipData, trainingData } from "@/data/internshipTrainingData";

export default function InternshipTrainingSection() {
  const [selectedTab, setSelectedTab] = useState<"all" | "internships" | "training">("all");

  const showInternships = selectedTab === "all" || selectedTab === "internships";
  const showTraining = selectedTab === "all" || selectedTab === "training";

  return (
    <section id="internship-training" className="py-24 relative bg-[#0B1320] bg-carbon-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#38BDF8]/30 text-xs font-mono uppercase text-[#38BDF8] mb-3 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
          >
            <Terminal className="w-4 h-4" />
            <span>Practical Experience &amp; Specialization</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-[#E2E8F0] tracking-tight"
          >
            INTERNSHIP &amp; <span className="text-[#38BDF8]">TRAINING</span>
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#38BDF8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Interactive Filter Sub-Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-[#111D30] border border-[#1C2E4A] gap-1 sm:gap-2">
            <button
              onClick={() => setSelectedTab("all")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-orbitron uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                selectedTab === "all"
                  ? "bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-bold shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                  : "text-[#7E92AB] hover:text-white hover:bg-[#1C2E4A]/50"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>All</span>
            </button>

            <button
              onClick={() => setSelectedTab("internships")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-orbitron uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                selectedTab === "internships"
                  ? "bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-bold shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                  : "text-[#7E92AB] hover:text-white hover:bg-[#1C2E4A]/50"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Internship</span>
            </button>

            <button
              onClick={() => setSelectedTab("training")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-orbitron uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                selectedTab === "training"
                  ? "bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-bold shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                  : "text-[#7E92AB] hover:text-white hover:bg-[#1C2E4A]/50"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Training ({trainingData.length})</span>
            </button>
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* ========================================================= */}
          {/* SUBDIVISION 1: INTERNSHIP                                 */}
          {/* ========================================================= */}
          {showInternships && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Subdivision Title */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#1C2E4A]">
                <div className="p-2.5 rounded-xl bg-[#111D30] border border-[#38BDF8]/40 text-[#38BDF8]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-[#E2E8F0] flex items-center gap-3">
                    INTERNSHIP <span className="text-[#38BDF8]">SECTION</span>
                  </h2>
                  <p className="text-xs font-mono text-[#7E92AB] mt-0.5">
                    Industry roles, corporate experience &amp; applied engineering internships
                  </p>
                </div>
              </div>

              {internshipData.length === 0 ? (
                /* Authentic Status Box */
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#1C2E4A] text-center flex flex-col items-center justify-center">
                  <div className="p-3 rounded-full bg-[#111D30] border border-[#1C2E4A] text-[#7E92AB] mb-3">
                    <Info className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-lg font-orbitron font-bold text-slate-200 mb-1">
                    Not Yet Started
                  </h3>
                  <p className="text-xs font-mono text-[#7E92AB] max-w-md">
                    No internships recorded currently.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {internshipData.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-card p-6 sm:p-8 rounded-2xl border border-[#1C2E4A] relative overflow-hidden"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <span className="px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] font-mono text-xs">
                            {item.type}
                          </span>
                          <h3 className="text-xl font-orbitron font-bold text-white mt-2">
                            {item.roleTitle}
                          </h3>
                          <div className="flex items-center gap-2 text-[#7E92AB] text-sm mt-1 font-mono">
                            <Building2 className="w-4 h-4 text-[#38BDF8]" />
                            <span>{item.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111D30] border border-[#1C2E4A] text-xs font-mono text-slate-300">
                          <Calendar className="w-4 h-4 text-[#38BDF8]" />
                          <span>{item.timeline}</span>
                        </div>
                      </div>
                      <ul className="space-y-2 pt-4 border-t border-[#1C2E4A]">
                        {item.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] mt-0.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* SUBDIVISION 2: TRAINING                                   */}
          {/* ========================================================= */}
          {showTraining && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Subdivision Title */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#1C2E4A]">
                <div className="p-2.5 rounded-xl bg-[#111D30] border border-[#0284C7]/40 text-[#0284C7]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-[#E2E8F0] flex items-center gap-3">
                    TRAINING <span className="text-[#0284C7]">SECTION</span>
                  </h2>
                  <p className="text-xs font-mono text-[#7E92AB] mt-0.5">
                    Technical programs, university specialized labs &amp; hands-on systems training
                  </p>
                </div>
              </div>

              {/* Training Items */}
              <div className="grid grid-cols-1 gap-6">
                {trainingData.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-6 sm:p-8 rounded-2xl border border-[#1C2E4A] hover:border-[#0284C7]/50 relative overflow-hidden group transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-[#0284C7]/15 border border-[#0284C7]/40 text-[#38BDF8] font-mono text-xs flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            {item.type}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] font-mono text-xs flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5" />
                            LLMs &amp; Agentic AI
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[#7E92AB] text-sm mt-1 font-mono">
                          <Building2 className="w-4 h-4 text-[#0284C7]" />
                          <span>{item.organization}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111D30] border border-[#1C2E4A] text-xs font-mono text-slate-300 self-start sm:self-auto">
                        <Calendar className="w-4 h-4 text-[#38BDF8]" />
                        <span>{item.timeline}</span>
                      </div>
                    </div>

                    {/* Achievements Description Bullets */}
                    <div className="pt-4 border-t border-[#1C2E4A] mb-6">
                      <div className="text-xs font-mono text-[#7E92AB] uppercase mb-3 tracking-wider flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#38BDF8]" />
                        <span>Key Achievements / Description</span>
                      </div>
                      <ul className="space-y-3">
                        {item.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-[#0284C7] mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="pt-4 border-t border-[#1C2E4A]/60 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono text-[#7E92AB] mr-2">MODULES &amp; STACK:</span>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-[#111D30] border border-[#1C2E4A] hover:border-[#38BDF8]/50 text-xs font-mono text-sky-200 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Completion Certificate Image */}
                    {item.imagePath && (
                      <div className="pt-4 border-t border-[#1C2E4A]/60">
                        <div className="text-xs font-mono text-[#7E92AB] uppercase mb-3 tracking-wider flex items-center gap-2">
                          <ImageIcon className="w-4 h-4 text-[#38BDF8]" />
                          <span>Proof of Completion</span>
                        </div>
                        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-[#1C2E4A] group-hover:border-[#38BDF8]/40 transition-all bg-[#0B1320]">
                          <Image
                            src={item.imagePath}
                            alt={`${item.title} - Completion Certificate`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {/* Ambient Glow */}
                    <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#0284C7]/10 rounded-full blur-2xl group-hover:bg-[#38BDF8]/15 transition-all pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
