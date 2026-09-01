import Navbar from "@/components/Navbar";
import CertificationsGrid from "@/components/CertificationsGrid";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "Certifications & Credentials | Rohit Ranjan Kumar",
  description: "Verified professional certifications in AI, Database Systems, Java, DSA, and Hackathon credentials.",
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#0B1320] text-[#E2E8F0] pt-16">
      <Navbar />
      <CertificationsGrid />
      <SimpleFooter />
    </main>
  );
}
