"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Building2 } from "lucide-react";
import { experienceData } from "@/data/experienceData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-[#0a0a0a] bg-carbon-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            WORK <span className="text-[#8A2BE2]">EXPERIENCE</span>
          </motion.h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8A2BE2] to-[#00F0FF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
            >
              {/* Top Row: Role + Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8A2BE2]/10 border border-[#8A2BE2]/40 text-[#8A2BE2] font-mono text-xs mb-3">
                    <span>{item.type}</span>
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    {item.roleTitle}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 font-medium text-sm mt-1">
                    <Building2 className="w-4 h-4 text-[#00F0FF]" />
                    <span>{item.company}</span>
                  </div>
                </div>

                {/* Timeline Tag */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121212] border border-[#222222] text-xs font-mono text-gray-300 self-start sm:self-auto">
                  <Calendar className="w-4 h-4 text-[#00F0FF]" />
                  <span>{item.timeline}</span>
                </div>
              </div>

              {/* Description Bullet List */}
              <ul className="space-y-3 pt-4 border-t border-[#222222]">
                {item.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Ambient Glow */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#8A2BE2]/10 rounded-full blur-2xl group-hover:bg-[#00F0FF]/15 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
