"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Calendar,
  Building,
  Maximize2,
  X,
  CheckCircle2,
} from "lucide-react";
import {
  certificationsData,
  CertCategory,
  CertificationEntry,
} from "@/data/certificationsData";

const categories: Array<"All" | CertCategory> = [
  "All",
  "Certification",
  "Certificates",
  "Hackathon",
  "Soft Skills",
];

export default function CertificationsGrid() {
  const [activeCategory, setActiveCategory] = useState<"All" | CertCategory>("All");
  const [selectedCert, setSelectedCert] = useState<CertificationEntry | null>(null);

  const filteredCerts =
    activeCategory === "All"
      ? certificationsData
      : certificationsData.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative bg-[#0a0a0a] bg-carbon-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            CERTIFICATIONS
          </motion.h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8A2BE2] to-[#00F0FF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-orbitron uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#8A2BE2] to-[#00F0FF] text-black font-bold shadow-[0_0_20px_rgba(138,43,226,0.4)]"
                  : "glass-panel border border-[#222222] text-gray-400 hover:text-white hover:border-[#8A2BE2]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Showcase Stack */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert: CertificationEntry, idx: number) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-[#222222] grid grid-cols-1 md:grid-cols-12 gap-8 items-center group"
              >
                {/* Left Side: Metadata & Information */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Category & Proctored Badges */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#8A2BE2]/15 border border-[#8A2BE2]/40 text-xs font-mono text-[#8A2BE2]">
                        {cert.category}
                      </span>
                      {cert.isProctored && (
                        <span className="px-3 py-1 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-xs font-mono text-[#00F0FF] flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
                          <span>Proctored Exam Passed</span>
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-orbitron font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                      {cert.title}
                    </h2>

                    {/* Issuer & Date */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mt-2">
                      <div className="flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-[#8A2BE2]" />
                        <span>Issuer: {cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#00F0FF]" />
                        <span>Issued: {cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Verification Description */}
                  <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-[#222222] text-xs font-mono text-gray-300 space-y-1">
                    <div className="flex items-center gap-2 text-[#00F0FF] font-semibold mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verified Academic & Industry Credential</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Official certification awarded upon successful completion of examination criteria and domain evaluations.
                    </p>
                  </div>

                  {/* Action Button */}
                  <div>
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8A2BE2] to-[#00F0FF] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(138,43,226,0.3)] cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Inspect Credential Image</span>
                    </button>
                  </div>
                </div>

                {/* Right Side: Credential Preview Frame */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="md:col-span-5 relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#121212] border border-[#222222] group-hover:border-[#00F0FF]/50 transition-all cursor-pointer shadow-lg"
                >
                  <Image
                    src={cert.imagePath}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-50" />
                  
                  {/* Hover Prompt */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-orbitron text-xs font-semibold">
                    <Maximize2 className="w-5 h-5 text-[#00F0FF]" />
                    <span>Expand Credential</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Credential Image Lightbox Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full glass-panel rounded-3xl p-6 border border-[#00F0FF]/40 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#121212] border border-[#222222] text-gray-300 hover:text-white hover:border-[#00F0FF]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF]">
                  {selectedCert.category}
                </span>
                <h2 className="text-2xl font-orbitron font-bold text-white mt-2">
                  {selectedCert.title}
                </h2>
                <p className="text-sm font-mono text-gray-400">
                  Issued by {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>

              {/* Full Image Container */}
              <div className="relative w-full h-[50vh] sm:h-[60vh] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#222222]">
                <Image
                  src={selectedCert.imagePath}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
