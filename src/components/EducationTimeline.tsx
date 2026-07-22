"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  BookOpen,
  Building,
  FileSpreadsheet,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { educationData, EducationEntry } from "@/data/educationData";

export default function EducationTimeline() {
  const [activeSemTab, setActiveSemTab] = useState<string>("Semester I");
  const [selectedMarksheet, setSelectedMarksheet] = useState<{
    title: string;
    images: string[];
    page: number;
  } | null>(null);

  const openMarksheet = (title: string, images: string[]) => {
    setSelectedMarksheet({ title, images, page: 0 });
  };

  const closeMarksheet = () => setSelectedMarksheet(null);

  const prevPage = () =>
    setSelectedMarksheet((s) => s ? { ...s, page: Math.max(0, s.page - 1) } : s);

  const nextPage = () =>
    setSelectedMarksheet((s) =>
      s ? { ...s, page: Math.min(s.images.length - 1, s.page + 1) } : s
    );

  return (
    <section id="education" className="py-24 relative bg-[#0a0a0a] bg-carbon-grid min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            ACADEMIC <span className="text-[#00F0FF]">RECORDS</span>
          </motion.h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Entries Stack */}
        <div className="space-y-12">
          {educationData.map((item: EducationEntry, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-[#222222]"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.timeline}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-orbitron font-bold text-white">
                    {item.degreeName}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-2 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-[#8A2BE2]" />
                      <span>{item.institution}</span>
                    </div>
                    {item.board && (
                      <span className="text-xs bg-[#121212] px-2.5 py-1 rounded-md border border-[#222222] text-gray-300">
                        {item.board}
                      </span>
                    )}
                    {item.rollNo && (
                      <span className="text-xs bg-[#121212] px-2.5 py-1 rounded-md border border-[#222222] text-cyan-300">
                        Roll: {item.rollNo}
                      </span>
                    )}
                  </div>
                </div>

                {/* Grade + Marksheet Button */}
                <div className="flex flex-col items-end gap-3 self-start shrink-0">
                  <div className="px-5 py-3 rounded-2xl bg-gradient-to-br from-[#00F0FF]/15 to-[#8A2BE2]/15 border border-[#00F0FF]/40 text-right">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block">
                      {item.gradeLabel}
                    </span>
                    <span className="text-2xl sm:text-3xl font-orbitron font-extrabold text-[#00F0FF]">
                      {item.gradeValue}
                    </span>
                  </div>

                  {item.marksheetImages && item.marksheetImages.length > 0 && (
                    <button
                      onClick={() => openMarksheet(item.degreeName, item.marksheetImages!)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00F0FF]/20 to-[#8A2BE2]/20 border border-[#00F0FF]/50 text-xs font-mono font-bold text-white hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                    >
                      <FileText className="w-4 h-4 text-[#00F0FF]" />
                      <span>View Official Marksheet</span>
                    </button>
                  )}
                </div>
              </div>

              {/* B.Tech Semester Breakdown */}
              {item.btechSemesters && (
                <div className="pt-6 border-t border-[#222222]">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-[#00F0FF]" />
                    <h3 className="font-orbitron font-semibold text-white text-sm">
                      Semester Performance Breakdown (TGPA Records)
                    </h3>
                  </div>

                  {/* Sem Tabs */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.btechSemesters.map((sem) => (
                      <button
                        key={sem.semester}
                        onClick={() => setActiveSemTab(sem.semester)}
                        className={`px-4 py-2 rounded-xl text-xs font-orbitron transition-all cursor-pointer ${
                          activeSemTab === sem.semester
                            ? "bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                            : "bg-[#121212] border border-[#222222] text-gray-400 hover:text-white"
                        }`}
                      >
                        {sem.semester} · {sem.tgpa}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {item.btechSemesters
                      .find((s) => s.semester === activeSemTab)
                      ?.courses.map((course) => (
                        <div
                          key={course.code}
                          className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#222222] flex items-center justify-between gap-2 hover:border-[#00F0FF]/30 transition-all"
                        >
                          <div>
                            <span className="text-[10px] font-mono text-[#00F0FF] block">
                              {course.code}
                            </span>
                            <span className="text-xs font-semibold text-gray-200 line-clamp-1">
                              {course.title}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-cyan-300 bg-[#121212] px-2 py-0.5 rounded border border-[#222222] shrink-0">
                            {course.grade}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* CBSE Subject Marksheet Table */}
              {item.subjectMarks && (
                <div className="pt-6 border-t border-[#222222]">
                  <div className="flex items-center gap-2 mb-4">
                    <FileSpreadsheet className="w-4 h-4 text-[#8A2BE2]" />
                    <h3 className="font-orbitron font-semibold text-white text-sm">
                      Subject-wise Performance
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {item.subjectMarks.map((sub) => (
                      <div
                        key={sub.subjectName}
                        className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#222222] flex items-center justify-between gap-3 hover:border-[#8A2BE2]/40 transition-all"
                      >
                        <div>
                          {sub.code && (
                            <span className="text-[10px] font-mono text-[#8A2BE2] block">
                              CODE: {sub.code}
                            </span>
                          )}
                          <span className="text-xs font-semibold text-gray-200 block">
                            {sub.subjectName}
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-sm font-orbitron font-bold text-[#00F0FF] block">
                            {sub.marksObtained}/{sub.totalMarks}
                          </span>
                          {sub.grade && (
                            <span className="text-[10px] font-mono text-gray-400 block">
                              {sub.grade}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marksheet Image Viewer Modal */}
      {selectedMarksheet && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          onClick={closeMarksheet}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-3xl w-full bg-[#0f0f0f] rounded-3xl border border-[#00F0FF]/40 overflow-hidden shadow-[0_0_60px_rgba(0,240,255,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222]">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#00F0FF]" />
                <span className="font-orbitron font-bold text-white text-sm">
                  {selectedMarksheet.title} — Official Marksheet
                </span>
                {selectedMarksheet.images.length > 1 && (
                  <span className="text-xs font-mono text-gray-400 ml-2">
                    Page {selectedMarksheet.page + 1} of {selectedMarksheet.images.length}
                  </span>
                )}
              </div>
              <button
                onClick={closeMarksheet}
                className="p-2 rounded-full bg-[#121212] border border-[#222222] text-gray-300 hover:text-white hover:border-[#00F0FF] transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Display */}
            <div className="relative w-full bg-[#121212]" style={{ minHeight: "70vh" }}>
              <Image
                src={selectedMarksheet.images[selectedMarksheet.page]}
                alt={`${selectedMarksheet.title} marksheet page ${selectedMarksheet.page + 1}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Page Navigation (only if multiple pages) */}
            {selectedMarksheet.images.length > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-[#222222] bg-[#0f0f0f]">
                <button
                  onClick={prevPage}
                  disabled={selectedMarksheet.page === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-orbitron font-bold border border-[#222222] text-gray-300 disabled:opacity-30 hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous Page
                </button>
                <div className="flex gap-2">
                  {selectedMarksheet.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedMarksheet((s) => s ? { ...s, page: i } : s)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        i === selectedMarksheet.page
                          ? "bg-[#00F0FF] shadow-[0_0_8px_rgba(0,240,255,0.6)]"
                          : "bg-[#333]"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextPage}
                  disabled={selectedMarksheet.page === selectedMarksheet.images.length - 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-orbitron font-bold border border-[#222222] text-gray-300 disabled:opacity-30 hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  Next Page
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
