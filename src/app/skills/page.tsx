import Navbar from "@/components/Navbar";
import SkillsHud from "@/components/SkillsHud";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "Skills & Capability Matrix | Rohit Ranjan Kumar",
  description: "Interactive HUD matrix detailing languages, frameworks, developer tools, and analytics platforms.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#0B1320] text-[#E2E8F0] pt-16">
      <Navbar />
      <SkillsHud />
      <SimpleFooter />
    </main>
  );
}
