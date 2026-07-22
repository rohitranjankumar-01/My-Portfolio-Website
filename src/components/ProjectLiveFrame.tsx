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
    <div className="glass-card rounded-2xl border border-[#00F0FF]/30 overflow-hidden flex flex-col h-full min-h-[320px]">

      {/* Browser chrome bar */}
      <div className="px-4 py-3 bg-[#0d0d0d] border-b border-[#222222] flex items-center gap-3 shrink-0">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        {/* Address bar */}
        <div className="flex-1 bg-[#0a0a0a] px-3 py-1.5 rounded-lg border border-[#1a1a1a] flex items-center gap-2 overflow-hidden">
          <Globe className="w-3 h-3 text-[#00F0FF] shrink-0" />
          <span className="text-[11px] font-mono text-gray-400 truncate">
            {hasLiveUrl ? project.liveUrl : `github.com/${project.githubUrl.replace("https://github.com/", "")}`}
          </span>
        </div>

        {/* Open button */}
        {hasLiveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[11px] font-mono text-[#00F0FF] hover:bg-[#00F0FF]/25 transition-all flex items-center gap-1.5"
          >
            <ExternalLink className="w-3 h-3" />
            Open
          </a>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-[#8A2BE2]/15 border border-[#8A2BE2]/40 text-[11px] font-mono text-[#8A2BE2] hover:bg-[#8A2BE2]/25 transition-all flex items-center gap-1.5"
          >
            <Github className="w-3 h-3" />
            Repo
          </a>
        )}
      </div>

      {/* Content area */}
      <div className="flex-1 bg-[#080808] p-5 flex flex-col justify-between gap-4">
        {hasLiveUrl ? (
          /* Live Platform Card */
          <>
            <div className="space-y-3">
              {/* Status row */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Deployment</span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* URL display */}
              <div className="p-3 rounded-xl bg-[#111111] border border-[#1e1e1e]">
                <span className="text-[10px] font-mono text-gray-500 block mb-1">LIVE URL</span>
                <span className="text-xs font-mono text-cyan-300 break-all">{project.liveUrl}</span>
              </div>

              {/* Tech preview row */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[#111] border border-[#1e1e1e] text-[10px] font-mono text-gray-400">
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
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-black font-orbitron font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.25)]"
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
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
                  <Code2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>main branch</span>
                </div>
                <span className="text-[10px] font-mono text-[#8A2BE2] bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 px-2 py-0.5 rounded">
                  {project.liveUrl === "No Demo" ? "No Demo" : "GitHub Repo"}
                </span>
              </div>

              {/* File list */}
              <div className="space-y-1.5">
                <div className="p-2.5 rounded-lg bg-[#111111] border border-[#1e1e1e] flex items-center gap-2">
                  <FileCode className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-[11px] font-mono text-gray-300 truncate">
                    {project.title.toLowerCase().replace(/[\s-]+/g, "_")}.py
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#111111] border border-[#1e1e1e] flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="text-[11px] font-mono text-gray-300">requirements.txt</span>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[#111] border border-[#1e1e1e] text-[10px] font-mono text-gray-400">
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
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-black font-orbitron font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
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
