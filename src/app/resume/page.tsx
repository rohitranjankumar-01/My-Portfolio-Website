import Navbar from "@/components/Navbar";
import ResumeSection from "@/components/ResumeSection";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "CV / Resume | Rohit Ranjan Kumar",
  description: "Curriculum Vitae and professional resume status for Rohit Ranjan Kumar.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0B1320] text-[#E2E8F0] pt-16">
      <Navbar />
      <ResumeSection />
      <SimpleFooter />
    </main>
  );
}
