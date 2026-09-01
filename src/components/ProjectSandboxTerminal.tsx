"use client";

import { useState } from "react";
import { Terminal, Play, CheckCircle2, Network, Copy, Check } from "lucide-react";
import { ProjectEntry } from "@/data/projectsData";

interface ProjectSandboxProps {
  project: ProjectEntry;
}

export default function ProjectSandboxTerminal({ project }: ProjectSandboxProps) {
  const [activeMode, setActiveMode] = useState<"terminal" | "architecture">("terminal");
  const [isExecuting, setIsExecuting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Pre-configured mock endpoints for each project
  const mockEndpoints: Record<
    string,
    { method: string; endpoint: string; reqPayload?: string; resPayload: object }
  > = {
    "ThriftShift": {
      method: "GET",
      endpoint: "https://thriftshift.online/api/v1/catalog/featured",
      resPayload: {
        status: 200,
        message: "Catalog items retrieved successfully",
        environment: "production",
        totalItems: 42,
        aiOptimization: "enabled",
        data: [
          { id: "item-101", title: "Vintage Leather Jacket", price: 49.99, stock: 3 },
          { id: "item-102", title: "Retro Graphic Tee", price: 19.99, stock: 12 },
        ],
      },
    },
    "InvoiceFlow": {
      method: "POST",
      endpoint: "https://invoiceflow-vnuk.onrender.com/api/v1/invoices/generate",
      reqPayload: '{\n  "client": "Acme Corp",\n  "amount": 2450.00,\n  "currency": "USD"\n}',
      resPayload: {
        status: 201,
        invoiceId: "INV-2026-8891",
        pdfUrl: "https://invoiceflow.render.com/pdf/INV-2026-8891.pdf",
        emailDelivered: true,
        renderEngine: "Next.js + Node",
      },
    },
    "DocSensei": {
      method: "POST",
      endpoint: "https://docsensei.streamlit.app/api/v1/query",
      reqPayload: '{\n  "documentId": "doc-8819",\n  "query": "Summarize financial risk factors"\n}',
      resPayload: {
        status: 200,
        agent: "DocSensei-LLM-RAG",
        confidenceScore: 0.96,
        summary: "Primary risks identified: Market volatility (32%), Regulatory updates (14%).",
        sources: ["Page 4, Section 2.1", "Page 12, Table 3"],
      },
    },
    "Global Health Expenditure vs. Mortality Outcome": {
      method: "GET",
      endpoint: "https://analytics.worldbank.org/api/v2/health-expenditure",
      resPayload: {
        status: 200,
        dataset: "WHO & World Bank Longitudinal (2005-2024)",
        indicatorsTracked: 18,
        correlationMetric: "Catastrophic Exp vs Public Mortality (r = -0.74)",
        notebookStatus: "Executed & Verified",
      },
    },
    "BitcoinHistoryAnalysis": {
      method: "GET",
      endpoint: "https://api.coindesk.com/v1/bpi/historical/volatility",
      resPayload: {
        status: 200,
        model: "Seaborn Trend & Rolling Volatility Kernel",
        maxDrawdownRecorded: "84.2%",
        historicalWindow: "2013-2024",
      },
    },
    "Secure-File-Management System": {
      method: "POST",
      endpoint: "https://secure-filemanagement-system.onrender.com/api/v1/vault/encrypt",
      reqPayload: '{\n  "fileName": "confidential_audit.pdf",\n  "cipher": "AES-256-GCM"\n}',
      resPayload: {
        status: 200,
        cipher: "AES-256-GCM",
        keyRotation: "enabled",
        checksumSha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        accessLevel: "Role-Based Protected",
      },
    },
    "Gemini_API_Chatbot": {
      method: "POST",
      endpoint: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
      reqPayload: '{\n  "contents": [{"role": "user", "parts": [{"text": "Explain RAG architecture"}]}]\n}',
      resPayload: {
        status: 200,
        model: "gemini-pro",
        tokensGenerated: 142,
        finishReason: "STOP",
      },
    },
    "My-Portfolio-Website": {
      method: "GET",
      endpoint: "https://portfolio.local/api/health",
      resPayload: {
        status: 200,
        framework: "Next.js 15 (App Router)",
        styling: "Tailwind CSS + Nordic Frost Slate",
        performanceScore: 100,
      },
    },
  };

  const endpointConfig = mockEndpoints[project.title] || {
    method: "GET",
    endpoint: `https://api.local/v1/${project.title.toLowerCase().replace(/[\s-]+/g, "_")}`,
    resPayload: {
      status: 200,
      projectName: project.title,
      techStack: project.techStack,
      domain: project.domain,
    },
  };

  const [resOutput, setResOutput] = useState<object>(endpointConfig.resPayload);

  const handleExecute = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setResOutput({
        ...endpointConfig.resPayload,
        timestamp: new Date().toISOString(),
        latencyMs: Math.floor(Math.random() * 45 + 12),
      });
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(resOutput, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card rounded-2xl border border-[#38BDF8]/40 overflow-hidden shadow-[0_0_30px_rgba(56,189,248,0.08)] flex flex-col h-full">
      {/* Sandbox Header */}
      <div className="px-4 py-3 bg-[#111D30] border-b border-[#1C2E4A] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#38BDF8]" />
          <span className="font-mono text-xs text-[#38BDF8] font-bold uppercase">
            Interactive Project Sandbox
          </span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-[#0B1320] p-1 rounded-lg border border-[#1C2E4A]">
          <button
            onClick={() => setActiveMode("terminal")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
              activeMode === "terminal"
                ? "bg-[#38BDF8]/20 text-[#38BDF8] font-bold border border-[#38BDF8]/40"
                : "text-[#7E92AB] hover:text-white"
            }`}
          >
            API Tester
          </button>
          <button
            onClick={() => setActiveMode("architecture")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
              activeMode === "architecture"
                ? "bg-[#0284C7]/20 text-[#38BDF8] font-bold border border-[#0284C7]/40"
                : "text-[#7E92AB] hover:text-white"
            }`}
          >
            Architecture
          </button>
        </div>
      </div>

      {/* Terminal View */}
      {activeMode === "terminal" ? (
        <div className="p-4 flex flex-col justify-between flex-1 space-y-4 font-mono text-xs">
          {/* Endpoint Bar */}
          <div className="flex items-center gap-2 bg-[#0B1320] p-2.5 rounded-xl border border-[#1C2E4A]">
            <span className="px-2 py-0.5 rounded bg-[#38BDF8]/20 text-[#38BDF8] font-bold text-[10px]">
              {endpointConfig.method}
            </span>
            <span className="text-slate-300 truncate flex-1">{endpointConfig.endpoint}</span>
            <button
              onClick={handleExecute}
              disabled={isExecuting}
              className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-bold flex items-center gap-1 hover:opacity-90 transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3 h-3 fill-[#0B1320]" />
              <span>{isExecuting ? "Executing..." : "Run"}</span>
            </button>
          </div>

          {/* Response Payload Box */}
          <div className="bg-[#0B1320] rounded-xl border border-[#1C2E4A] p-4 relative flex-1 min-h-[180px] flex flex-col">
            <div className="flex items-center justify-between text-[10px] text-[#7E92AB] mb-2 border-b border-[#1C2E4A]/60 pb-2">
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <CheckCircle2 className="w-3 h-3" /> 200 OK
              </span>
              <button
                onClick={handleCopy}
                className="text-[#7E92AB] hover:text-white flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy JSON"}</span>
              </button>
            </div>
            <pre className="text-sky-300 font-mono text-[11px] overflow-x-auto whitespace-pre-wrap flex-1">
              {JSON.stringify(resOutput, null, 2)}
            </pre>
          </div>
        </div>
      ) : (
        /* Architecture Diagram View */
        <div className="p-6 flex flex-col items-center justify-center flex-1 bg-[#0B1320] space-y-4 text-center">
          <Network className="w-10 h-10 text-[#0284C7] animate-pulse" />
          <h4 className="font-orbitron font-bold text-white text-sm">
            {project.title} Architecture Flow
          </h4>
          <div className="w-full space-y-2 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-[#111D30] border border-[#38BDF8]/30 text-[#38BDF8]">
              Client App (React / Next.js)
            </div>
            <div className="text-[#7E92AB]">↓ TLS 1.3 / REST API</div>
            <div className="p-2.5 rounded-lg bg-[#111D30] border border-[#0284C7]/30 text-[#38BDF8]">
              Backend Engine &amp; AI Pipeline
            </div>
            <div className="text-[#7E92AB]">↓ Query / Indexing</div>
            <div className="p-2.5 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-slate-300">
              Database / LLM RAG Vector Store
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
