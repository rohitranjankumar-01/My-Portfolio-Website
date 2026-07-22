"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Play, CheckCircle2, Cpu, Network, Copy, Check } from "lucide-react";
import { ProjectEntry } from "@/data/projectsData";

interface ProjectSandboxProps {
  project: ProjectEntry;
}

export default function ProjectSandboxTerminal({ project }: ProjectSandboxProps) {
  const [activeMode, setActiveMode] = useState<"terminal" | "architecture">("terminal");
  const [customInput, setCustomInput] = useState("");
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
    "Gemini_API_Chatbot": {
      method: "POST",
      endpoint: "https://api.gemini.bot/v1/chat/completions",
      reqPayload: '{\n  "message": "Explain quantum superposition in 2 sentences"\n}',
      resPayload: {
        status: 200,
        model: "gemini-1.5-pro",
        tokensUsed: 42,
        reply: "Quantum superposition is a fundamental principle of quantum mechanics where a system can exist in multiple states simultaneously until it is measured.",
      },
    },
    "Global Health Expenditure vs. Mortality Outcome": {
      method: "GET",
      endpoint: "https://analytics.colab.research/health-expenditure/v1/correlation",
      resPayload: {
        status: 200,
        yearsAnalyzed: "2005-2024",
        nationsCount: 142,
        rSquared: 0.842,
        keyInsight: "Higher health expenditure per capita strongly correlates with lower infant mortality across G20 nations.",
      },
    },
    "Bitcoin History Analysis": {
      method: "GET",
      endpoint: "https://colab.research.google/btc-analysis/v1/volatility",
      resPayload: {
        status: 200,
        asset: "BTC-USD",
        timeframe: "2015-2026",
        sharpeRatio: 1.84,
        maxDrawdown: "-42.1%",
        volatilityModel: "Seaborn/Pandas Longitudinal Fit",
      },
    },
    "Secure-File-Management System": {
      method: "POST",
      endpoint: "https://secure-filemanagement-system.onrender.com/api/v1/files/encrypt",
      reqPayload: '{\n  "fileName": "classified-report.pdf",\n  "algorithm": "AES-256-GCM"\n}',
      resPayload: {
        status: 200,
        encryptedKey: "0x98A1F...C71",
        accessControl: "Role-Based ACL (Admin Only)",
        sha256Checksum: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      },
    },
  };

  const endpointConfig = mockEndpoints[project.title] || {
    method: "POST",
    endpoint: `https://api.system.internal/v1/${project.id}/exec`,
    resPayload: { status: 200, message: "System response payload executed cleanly." },
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
    <div className="glass-card rounded-2xl border border-[#00F0FF]/40 overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col h-full">
      {/* Sandbox Header */}
      <div className="px-4 py-3 bg-[#121212] border-b border-[#222222] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#00F0FF]" />
          <span className="font-mono text-xs text-[#00F0FF] font-bold uppercase">
            Interactive Project Sandbox
          </span>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-[#0a0a0a] p-1 rounded-lg border border-[#222222]">
          <button
            onClick={() => setActiveMode("terminal")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
              activeMode === "terminal"
                ? "bg-[#00F0FF]/20 text-[#00F0FF] font-bold border border-[#00F0FF]/40"
                : "text-gray-400 hover:text-white"
            }`}
          >
            API Tester
          </button>
          <button
            onClick={() => setActiveMode("architecture")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
              activeMode === "architecture"
                ? "bg-[#8A2BE2]/20 text-[#8A2BE2] font-bold border border-[#8A2BE2]/40"
                : "text-gray-400 hover:text-white"
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
          <div className="flex items-center gap-2 bg-[#0a0a0a] p-2.5 rounded-xl border border-[#222222]">
            <span className="px-2 py-0.5 rounded bg-[#00F0FF]/20 text-[#00F0FF] font-bold text-[10px]">
              {endpointConfig.method}
            </span>
            <span className="text-gray-300 truncate flex-1">{endpointConfig.endpoint}</span>
            <button
              onClick={handleExecute}
              disabled={isExecuting}
              className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-black font-bold flex items-center gap-1 hover:opacity-90 transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3 h-3 fill-black" />
              <span>{isExecuting ? "Executing..." : "Run"}</span>
            </button>
          </div>

          {/* Response Payload Box */}
          <div className="bg-[#0a0a0a] rounded-xl border border-[#222222] p-4 relative flex-1 min-h-[180px] flex flex-col">
            <div className="flex items-center justify-between text-[10px] text-gray-500 mb-2 border-b border-[#222222]/60 pb-2">
              <span className="flex items-center gap-1 text-green-400 font-bold">
                <CheckCircle2 className="w-3 h-3" /> 200 OK
              </span>
              <button
                onClick={handleCopy}
                className="text-gray-400 hover:text-white flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy JSON"}</span>
              </button>
            </div>
            <pre className="text-cyan-300 font-mono text-[11px] overflow-x-auto whitespace-pre-wrap flex-1">
              {JSON.stringify(resOutput, null, 2)}
            </pre>
          </div>
        </div>
      ) : (
        /* Architecture Diagram View */
        <div className="p-6 flex flex-col items-center justify-center flex-1 bg-[#0a0a0a] space-y-4 text-center">
          <Network className="w-10 h-10 text-[#8A2BE2] animate-pulse" />
          <h4 className="font-orbitron font-bold text-white text-sm">
            {project.title} Architecture Flow
          </h4>
          <div className="w-full space-y-2 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-[#121212] border border-[#00F0FF]/30 text-[#00F0FF]">
              Client App (React / Next.js)
            </div>
            <div className="text-gray-500">↓ TLS 1.3 / REST API</div>
            <div className="p-2.5 rounded-lg bg-[#121212] border border-[#8A2BE2]/30 text-[#8A2BE2]">
              Backend Engine & AI Pipeline
            </div>
            <div className="text-gray-500">↓ Query / Indexing</div>
            <div className="p-2.5 rounded-lg bg-[#121212] border border-[#222222] text-gray-300">
              Database / LLM RAG Vector Store
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
