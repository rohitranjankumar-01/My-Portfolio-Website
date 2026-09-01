export interface InternshipEntry {
  id: string;
  roleTitle: string;
  company: string;
  type: string;
  timeline: string;
  description: string[];
}

export interface TrainingEntry {
  id: string;
  title: string;
  organization: string;
  type: string;
  timeline: string;
  description: string[];
  imagePath?: string;
  tags?: string[];
}

// No internships started yet (as per portfolio_details.txt: No:Not yet started) - No dummy data
export const internshipData: InternshipEntry[] = [];

export const trainingData: TrainingEntry[] = [
  {
    id: "train-1",
    title: "AI Engineer Launchpad: Mastering LLMs and Agentic AI",
    organization: "Lovely Professional University, Punjab",
    type: "University",
    timeline: "June 2026 - July 2026",
    imagePath: "/Image/AI_Engineer_Training.jpg",
    description: [
      "Developed a privacy-focused RAG platform for context-aware document Q&A using cloud and local LLMs.",
      "Integrated LLMs, embedding models, system prompts and guardrails using LangChain; optimized GPU usage and document processing for faster responses.",
      "Implemented hallucination control, source citations, model failover, response-time tracking, and offline inference.",
    ],
    tags: [
      "LangChain",
      "LLMs & Agentic AI",
      "RAG Architecture",
      "Guardrails",
      "GPU Optimization",
      "Offline Inference",
    ],
  },
];
