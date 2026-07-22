import Navbar from "@/components/Navbar";
import SkillsHud from "@/components/SkillsHud";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "Skills HUD | Rohit Ranjan Kumar",
  description: "Interactive capability matrix detailing languages, frameworks, developer tools, and platforms.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <Navbar />
      <SkillsHud />
      <SimpleFooter />
    </main>
  );
}
