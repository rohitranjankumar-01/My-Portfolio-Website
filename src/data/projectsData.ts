export type ProjectDomain =
  | "Web & Full-Stack"
  | "AI, Agents & NLP"
  | "Data Science & Analytics"
  | "Systems & Security";

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  isAiAssisted: boolean;
  isTeamProject: boolean;
  githubUrl: string;
  isPrivateRepo: boolean;
  liveUrl: string;
  domain: ProjectDomain;
}

export const projectsData: ProjectEntry[] = [
  {
    id: "proj-1",
    title: "ThriftShift",
    description: "ThriftShift is a modern, full-stack e-commerce web application designed for thrifting. It features a React/Vite frontend powered by a Node.js/Express backend with MongoDB.",
    techStack: ["Node.js", "MongoDB", "Web Development"],
    isAiAssisted: true,
    isTeamProject: false,
    githubUrl: "https://github.com/rohitranjankumar-01/ThriftShift",
    isPrivateRepo: true,
    liveUrl: "https://thriftshift.online",
    domain: "Web & Full-Stack",
  },
  {
    id: "proj-2",
    title: "InvoiceFlow",
    description:
      "Full-stack invoice generator — glassmorphism UI, PDF generation, email delivery, client management & dashboard. Built with React + Node.js.",
    techStack: ["HTML", "CSS", "Next.js", "Framer Motion"],
    isAiAssisted: true,
    isTeamProject: false,
    githubUrl: "https://github.com/rohitranjankumar-01/InvoiceFlow",
    isPrivateRepo: true,
    liveUrl: "https://invoiceflow-vnuk.onrender.com/",
    domain: "Web & Full-Stack",
  },
  {
    id: "proj-3",
    title: "My-Portfolio-Website",
    description:
      "A high-performance personal portfolio website built with Next.js, Framer Motion, and scroll-driven storytelling components.",
    techStack: ["HTML", "CSS", "Next.js", "Framer Motion"],
    isAiAssisted: true,
    isTeamProject: false,
    githubUrl: "https://github.com/rohitranjankumar-01/My-Portfolio-Website",
    isPrivateRepo: false,
    liveUrl: "",
    domain: "Web & Full-Stack",
  },
  {
    id: "proj-4",
    title: "DocSensei",
    description:
      "An intelligent document processing and querying platform powered by LLM agents.",
    techStack: ["Python", "LLM", "RAG", "AI Agents"],
    isAiAssisted: true,
    isTeamProject: true,
    githubUrl: "https://github.com/rohitranjankumar-01/DocSensei",
    isPrivateRepo: false,
    liveUrl: "https://docsensei.streamlit.app/",
    domain: "AI, Agents & NLP",
  },
  {
    id: "proj-5",
    title: "Gemini_API_Chatbot",
    description:
      "A conversational agent leveraging Google's Gemini API for multi-turn contextual dialogues.",
    techStack: ["Python", "Gemini API"],
    isAiAssisted: false,
    isTeamProject: false,
    githubUrl: "https://github.com/rohitranjankumar-01/GeminiAPI_Chat_Bot",
    isPrivateRepo: false,
    liveUrl: "",
    domain: "AI, Agents & NLP",
  },
  {
    id: "proj-6",
    title: "Global Health Expenditure vs. Mortality Outcome",
    description:
      "A multi-indicator descriptive analytics project analyzing the 2005–2024 longitudinal relationship between national health financing models, catastrophic expenditure, and public health mortality outcomes using World Bank and WHO datasets.",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "Tableau",
      "Pandas",
      "Data Analytics",
    ],
    isAiAssisted: false,
    isTeamProject: true,
    githubUrl:
      "https://github.com/rohitranjankumar-01/Global-Health-Expenditure-vs-Mortality-Outcome",
    isPrivateRepo: false,
    liveUrl:
      "https://colab.research.google.com/github/rohitranjankumar-01/Global-Health-Expenditure-vs-Mortality-Outcome/blob/main/Highlanders_Python.ipynb",
    domain: "Data Science & Analytics",
  },
  {
    id: "proj-7",
    title: "Bitcoin History Analysis",
    description:
      "An end-to-end data analytics project examining historical volatility and trend patterns using Python, Pandas, NumPy, and Seaborn.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    isAiAssisted: false,
    isTeamProject: true,
    githubUrl: "https://github.com/rohitranjankumar-01/Bitcoin-History-Analysis-ACap-Stone-Project",
    isPrivateRepo: false,
    liveUrl:
      "https://colab.research.google.com/github/rohitranjankumar-01/Bitcoin-History-Analysis-ACap-Stone-Project/blob/main/BitcoinDataAnalysis.ipynb",
    domain: "Data Science & Analytics",
  },
  {
    id: "proj-8",
    title: "Secure-File-Management System",
    description:
      "A robust system focused on encrypted file storage, access control, and secure data handling.",
    techStack: ["Encryption", "Access Control", "Security Protocols"],
    isAiAssisted: true,
    isTeamProject: true,
    githubUrl:
      "https://github.com/rohitranjankumar-01/Secure-File-Management-System",
    isPrivateRepo: false,
    liveUrl: "https://secure-filemanagement-system.onrender.com",
    domain: "Systems & Security",
  },
];
