import Navbar from "@/components/Navbar";
import EducationTimeline from "@/components/EducationTimeline";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "Education & Transcripts | Rohit Ranjan Kumar",
  description: "Academic history, semester TGPA records, and CBSE Class X & XII marks breakdown.",
};

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <Navbar />
      <EducationTimeline />
      <SimpleFooter />
    </main>
  );
}
