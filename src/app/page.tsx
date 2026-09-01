import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroScrollCanvas from "@/components/HeroScrollCanvas";
import SimpleFooter from "@/components/SimpleFooter";
import { GraduationCap, Briefcase, FolderGit2, Award, Terminal, ArrowRight, Cpu, FileText } from "lucide-react";

export default function Home() {
  const portalCards = [
    {
      title: "ACADEMICS & TRANSCRIPTS",
      desc: "View B.Tech semester TGPA records, 10th & 12th CBSE marksheet breakdowns & PDF view.",
      icon: <GraduationCap className="w-6 h-6 text-[#38BDF8]" />,
      href: "/education",
      badge: "8.98 CGPA",
    },
    {
      title: "WORK / ROLES",
      desc: "ThriftShift web platform engineering & self-driven operational achievements.",
      icon: <Briefcase className="w-6 h-6 text-[#0284C7]" />,
      href: "/experience",
      badge: "Self-Driven",
    },
    {
      title: "INTERNSHIP & TRAINING",
      desc: "Privacy-focused RAG platform development, LangChain LLMs & industry internship records.",
      icon: <Cpu className="w-6 h-6 text-[#38BDF8]" />,
      href: "/internship-training",
      badge: "RAG & LLMs",
    },
    {
      title: "PROJECTS SHOWCASE",
      desc: "Full showcase with live website frames, GitHub repo screens & live URLs.",
      icon: <FolderGit2 className="w-6 h-6 text-[#0284C7]" />,
      href: "/projects",
      badge: "Live Previews",
    },
    {
      title: "CERTIFICATIONS",
      desc: "Proctored Oracle AI, Java, DSA credentials, hackathon awards & image inspection.",
      icon: <Award className="w-6 h-6 text-[#38BDF8]" />,
      href: "/certifications",
      badge: "10 Credentials",
    },
    {
      title: "DEVELOPER HUD",
      desc: "Interactive capability matrix detailing languages, frameworks, soft skills & platforms.",
      icon: <Terminal className="w-6 h-6 text-[#0284C7]" />,
      href: "/skills",
      badge: "Skill Matrix",
    },
    {
      title: "CV / RESUME",
      desc: "Curriculum Vitae documentation status and direct credential inquiry options.",
      icon: <FileText className="w-6 h-6 text-[#38BDF8]" />,
      href: "/resume",
      badge: "Profile Doc",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B1320] text-[#E2E8F0] selection:bg-[#38BDF8] selection:text-[#0B1320]">
      <Navbar />
      <HeroScrollCanvas />

      {/* Navigation Portals Grid */}
      <section className="py-20 bg-carbon-grid relative border-t border-[#1C2E4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-orbitron font-extrabold text-[#E2E8F0]">
              PORTFOLIO <span className="text-[#38BDF8]">PORTALS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalCards.map((portal) => (
              <Link
                key={portal.title}
                href={portal.href}
                className="glass-card p-6 rounded-2xl border border-[#1C2E4A] hover:border-[#38BDF8]/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-[#111D30] border border-[#1C2E4A] group-hover:border-[#38BDF8]/40">
                      {portal.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[10px] font-mono text-[#38BDF8]">
                      {portal.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-orbitron font-bold text-[#E2E8F0] group-hover:text-[#38BDF8] transition-colors mb-2">
                    {portal.title}
                  </h3>
                  <p className="text-xs text-[#7E92AB] leading-relaxed font-mono mb-4">
                    {portal.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-orbitron font-semibold text-[#38BDF8] group-hover:translate-x-1 transition-transform">
                  <span>Enter Webpage</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
