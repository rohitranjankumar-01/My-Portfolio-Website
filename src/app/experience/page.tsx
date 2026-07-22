import Navbar from "@/components/Navbar";
import ExperienceSection from "@/components/ExperienceSection";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "Work Experience | Rohit Ranjan Kumar",
  description: "Professional experience, self-driven roles, and engineering accomplishments.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <Navbar />
      <ExperienceSection />
      <SimpleFooter />
    </main>
  );
}
