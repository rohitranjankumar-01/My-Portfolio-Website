import Navbar from "@/components/Navbar";
import ModularProjectGrid from "@/components/ModularProjectGrid";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "Projects Showcase | Rohit Ranjan Kumar",
  description: "Explore modular AI, Full-Stack, Data Science, and Security projects with live interactive previews and GitHub source code.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B1320] text-[#E2E8F0] pt-16">
      <Navbar />
      <ModularProjectGrid />
      <SimpleFooter />
    </main>
  );
}
