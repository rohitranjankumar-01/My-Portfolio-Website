"use client";

import { motion } from "framer-motion";
import { FileText, Clock, Mail, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { resumeData } from "@/data/resumeData";
import { personalData } from "@/data/personalData";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 relative bg-[#0B1320] bg-carbon-grid min-h-[75vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#38BDF8]/30 text-xs font-mono uppercase text-[#38BDF8] mb-3 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
          >
            <FileText className="w-4 h-4" />
            <span>Document &amp; Credentials</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-[#E2E8F0] tracking-tight"
          >
            CV / <span className="text-[#38BDF8]">RESUME</span>
          </motion.h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Status Container (No Placeholders) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl border border-[#38BDF8]/30 overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.06)]"
        >
          {/* Terminal Title Bar */}
          <div className="px-6 py-3 bg-[#111D30] border-b border-[#1C2E4A] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-[#7E92AB]">
                rohit@system-hud:~ /resume-check
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-amber-400">
              <Clock className="w-3.5 h-3.5" />
              <span>PENDING UPLOAD</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#111D30] border border-[#1C2E4A] flex items-center justify-center text-[#38BDF8] mb-6 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
              <FileText className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs mb-4">
              <span>{resumeData.note}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-[#E2E8F0] mb-3">
              Official Resume Document
            </h2>

            <p className="text-sm text-[#7E92AB] font-mono max-w-lg mb-8 leading-relaxed">
              The verified PDF curriculum vitae has not been uploaded yet. For direct inquiries, project breakdowns, or academic verification, please reach out directly.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${personalData.email}`}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-orbitron font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Request via Email</span>
              </a>

              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl glass-panel border border-[#1C2E4A] text-[#E2E8F0] hover:border-[#38BDF8]/60 hover:text-[#38BDF8] font-orbitron font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-[#38BDF8]" />
                <span>LinkedIn Profile</span>
              </a>

              <Link
                href="/education"
                className="px-6 py-3 rounded-xl glass-panel border border-[#1C2E4A] text-[#7E92AB] hover:text-[#38BDF8] font-orbitron text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <span>View Academics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
