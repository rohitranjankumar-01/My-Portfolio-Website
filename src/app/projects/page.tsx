import Navbar from "@/components/Navbar";
import ModularProjectGrid from "@/components/ModularProjectGrid";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "Projects Showcase | Rohit Ranjan Kumar",
  description: "Explore portfolio projects with live website frame previews and GitHub repository screens.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <Navbar />
      <ModularProjectGrid />
      <SimpleFooter />
    </main>
  );
}
