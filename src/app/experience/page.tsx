import Navbar from "@/components/Navbar";
import ExperienceSection from "@/components/ExperienceSection";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "Work Experience | Rohit Ranjan Kumar",
  description: "Professional experience, self-driven roles, and engineering accomplishments.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0B1320] text-[#E2E8F0] pt-16">
      <Navbar />
      <ExperienceSection />
      <SimpleFooter />
    </main>
  );
}
