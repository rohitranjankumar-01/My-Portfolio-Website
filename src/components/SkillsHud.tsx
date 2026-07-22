"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Layers, Wrench, HeartHandshake, CheckCircle2 } from "lucide-react";
import { skillsData } from "@/data/skillsData";

export default function SkillsHud() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [
    <Cpu key="cpu" className="w-4 h-4 text-[#00F0FF]" />,
    <Layers key="layers" className="w-4 h-4 text-[#8A2BE2]" />,
    <Wrench key="wrench" className="w-4 h-4 text-[#00F0FF]" />,
    <HeartHandshake key="heart" className="w-4 h-4 text-[#8A2BE2]" />,
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono uppercase text-[#00F0FF] mb-3"
          >
            <Terminal className="w-4 h-4" />
            <span>Developer Capability Matrix</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            SKILLS & <span className="text-[#00F0FF]">TOOLS HUD</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] mx-auto mt-4 rounded-full" />
        </div>

        {/* HUD Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl border border-[#00F0FF]/30 overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.08)]"
        >
          {/* Terminal Window Titlebar */}
          <div className="px-6 py-3 bg-[#121212] border-b border-[#222222] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-gray-400">
                rohit@system-hud:~ /skills --interactive
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#00F0FF]">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              <span>HUD ONLINE</span>
            </div>
          </div>

          {/* Interactive HUD Content */}
          <div className="p-6 sm:p-8">
            {/* Category Nav Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {skillsData.map((cat, idx) => (
                <button
                  key={cat.categoryName}
                  onClick={() => setActiveTab(idx)}
                  className={`p-3 rounded-xl border text-xs font-orbitron text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                    activeTab === idx
                      ? "bg-[#00F0FF]/10 border-[#00F0FF] text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                      : "bg-[#121212] border-[#222222] text-gray-400 hover:border-[#00F0FF]/40 hover:text-white"
                  }`}
                >
                  {icons[idx]}
                  <span className="truncate">{cat.categoryName}</span>
                </button>
              ))}
            </div>

            {/* Selected Category Skill Matrix */}
            <div className="min-h-[160px] bg-[#0a0a0a] rounded-xl border border-[#222222] p-6 relative overflow-hidden">
              <div className="text-xs font-mono text-gray-500 mb-4 flex items-center justify-between">
                <span>CATEGORY: {skillsData[activeTab].categoryName.toUpperCase()}</span>
                <span>[{skillsData[activeTab].skills.length} MODULES LOADED]</span>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillsData[activeTab].skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: sIdx * 0.05 }}
                    className="px-4 py-2 rounded-xl bg-[#121212] border border-[#222222] text-sm font-mono text-gray-200 hover:border-[#00F0FF]/60 hover:text-[#00F0FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all flex items-center gap-2 group cursor-default"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] group-hover:scale-110 transition-transform" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative HUD Grid Lines */}
              <div className="absolute bottom-2 right-4 text-[10px] font-mono text-gray-700 pointer-events-none">
                SYS_STATUS: 100% OPERATIONAL
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
