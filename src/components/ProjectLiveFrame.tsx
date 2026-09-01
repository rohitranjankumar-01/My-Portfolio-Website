"use client";

import {
  Globe,
  Github,
  ExternalLink,
  Code2,
  Terminal,
  FileCode,
} from "lucide-react";
import { ProjectEntry } from "@/data/projectsData";

interface ProjectLiveFrameProps {
  project: ProjectEntry;
}

export default function ProjectLiveFrame({ project }: ProjectLiveFrameProps) {
  const hasLiveUrl =
    project.liveUrl &&
    project.liveUrl !== "No Demo" &&
    (project.liveUrl.startsWith("http://") || project.liveUrl.startsWith("https://"));

  return (
    <div className="glass-card rounded-2xl border border-[#38BDF8]/30 overflow-hidden flex flex-col h-full min-h-[320px]">

      {/* Browser chrome bar */}
      <div className="px-4 py-3 bg-[#111D30] border-b border-[#1C2E4A] flex items-center gap-3 shrink-0">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        {/* Address bar */}
        <div className="flex-1 bg-[#0B1320] px-3 py-1.5 rounded-lg border border-[#1C2E4A] flex items-center gap-2 overflow-hidden">
          <Globe className="w-3 h-3 text-[#38BDF8] shrink-0" />
          <span className="text-[11px] font-mono text-[#7E92AB] truncate">
            {hasLiveUrl ? project.liveUrl : `github.com/${project.githubUrl.replace("https://github.com/", "")}`}
          </span>
        </div>

        {/* Open button */}
        {hasLiveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[11px] font-mono text-[#38BDF8] hover:bg-[#38BDF8]/25 transition-all flex items-center gap-1.5"
          >
            <ExternalLink className="w-3 h-3" />
            Open
          </a>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-[#0284C7]/15 border border-[#0284C7]/40 text-[11px] font-mono text-[#38BDF8] hover:bg-[#0284C7]/25 transition-all flex items-center gap-1.5"
          >
            <Github className="w-3 h-3" />
            Repo
          </a>
        )}
      </div>

      {/* Content area */}
      <div className="flex-1 bg-[#0B1320] p-5 flex flex-col justify-between gap-4">
        {hasLiveUrl ? (
          /* Live Platform Card */
          <>
            <div className="space-y-3">
              {/* Status row */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E92AB]">Deployment</span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* URL display */}
              <div className="p-3 rounded-xl bg-[#111D30] border border-[#1C2E4A]">
                <span className="text-[10px] font-mono text-[#7E92AB] block mb-1">LIVE URL</span>
                <span className="text-xs font-mono text-sky-300 break-all">{project.liveUrl}</span>
              </div>

              {/* Tech preview row */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[#111D30] border border-[#1C2E4A] text-[10px] font-mono text-[#7E92AB]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Launch CTA */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-orbitron font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              <span>Launch Live Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </>
        ) : (
          /* GitHub / Notebook Repo Card */
          <>
            <div className="space-y-3">
              {/* Repo header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#7E92AB]">
                  <Code2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>main branch</span>
                </div>
                <span className="text-[10px] font-mono text-[#38BDF8] bg-[#0284C7]/15 border border-[#0284C7]/40 px-2 py-0.5 rounded">
                  {project.liveUrl === "No Demo" ? "No Demo" : "GitHub Repo"}
                </span>
              </div>

              {/* File list */}
              <div className="space-y-1.5">
                <div className="p-2.5 rounded-lg bg-[#111D30] border border-[#1C2E4A] flex items-center gap-2">
                  <FileCode className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span className="text-[11px] font-mono text-slate-300 truncate">
                    {project.title.toLowerCase().replace(/[\s-]+/g, "_")}.py
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#111D30] border border-[#1C2E4A] flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="text-[11px] font-mono text-slate-300">requirements.txt</span>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[#111D30] border border-[#1C2E4A] text-[10px] font-mono text-[#7E92AB]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Repo CTA */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-orbitron font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub Repository</span>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
