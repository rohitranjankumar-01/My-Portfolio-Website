import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroScrollCanvas from "@/components/HeroScrollCanvas";
import SimpleFooter from "@/components/SimpleFooter";
import { GraduationCap, Briefcase, FolderGit2, Award, Terminal, ArrowRight } from "lucide-react";

export default function Home() {
  const portalCards = [
    {
      title: "ACADEMICS & TRANSCRIPTS",
      desc: "View B.Tech semester TGPA records, 10th & 12th CBSE marksheet breakdowns & PDF view.",
      icon: <GraduationCap className="w-6 h-6 text-[#00F0FF]" />,
      href: "/education",
      badge: "8.98 CGPA",
    },
    {
      title: "WORK EXPERIENCE",
      desc: "ThriftShift web platform engineering & self-driven operational achievements.",
      icon: <Briefcase className="w-6 h-6 text-[#8A2BE2]" />,
      href: "/experience",
      badge: "Self-Driven",
    },
    {
      title: "PROJECTS SHOWCASE",
      desc: "Full showcase with live website frames, GitHub repo screens & live URLs.",
      icon: <FolderGit2 className="w-6 h-6 text-[#00F0FF]" />,
      href: "/projects",
      badge: "Live Previews",
    },
    {
      title: "CERTIFICATIONS",
      desc: "Proctored Oracle AI, Java, DSA credentials, hackathon awards & image inspection.",
      icon: <Award className="w-6 h-6 text-[#8A2BE2]" />,
      href: "/certifications",
      badge: "10 Credentials",
    },
    {
      title: "DEVELOPER HUD",
      desc: "Interactive capability matrix detailing languages, frameworks & platforms.",
      icon: <Terminal className="w-6 h-6 text-[#00F0FF]" />,
      href: "/skills",
      badge: "Skill Matrix",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00F0FF] selection:text-black">
      <Navbar />
      <HeroScrollCanvas />

      {/* Navigation Portals Grid */}
      <section className="py-20 bg-carbon-grid relative border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-orbitron font-extrabold text-white">
              PORTFOLIO <span className="text-[#00F0FF]">PORTALS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalCards.map((portal) => (
              <Link
                key={portal.title}
                href={portal.href}
                className="glass-card p-6 rounded-2xl border border-[#222222] hover:border-[#00F0FF]/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-[#121212] border border-[#222222] group-hover:border-[#00F0FF]/40">
                      {portal.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[10px] font-mono text-[#00F0FF]">
                      {portal.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-[#00F0FF] transition-colors mb-2">
                    {portal.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-mono mb-4">
                    {portal.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-orbitron font-semibold text-[#00F0FF] group-hover:translate-x-1 transition-transform">
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
