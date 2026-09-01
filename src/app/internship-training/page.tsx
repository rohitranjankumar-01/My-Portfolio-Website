import Navbar from "@/components/Navbar";
import InternshipTrainingSection from "@/components/InternshipTrainingSection";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "Internship & Training | Rohit Ranjan Kumar",
  description:
    "Explore internship records, industry readiness, and technical training including Privacy-Focused RAG & LLM platform development.",
};

export default function InternshipTrainingPage() {
  return (
    <main className="min-h-screen bg-[#0B1320] text-[#E2E8F0] pt-16">
      <Navbar />
      <InternshipTrainingSection />
      <SimpleFooter />
    </main>
  );
}
