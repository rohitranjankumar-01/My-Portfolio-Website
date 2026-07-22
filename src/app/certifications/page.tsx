import Navbar from "@/components/Navbar";
import CertificationsGrid from "@/components/CertificationsGrid";
import SimpleFooter from "@/components/SimpleFooter";

export const metadata = {
  title: "Certifications | Rohit Ranjan Kumar",
  description: "Verified certifications, proctored examinations, hackathon honors, and credentials.",
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <Navbar />
      <CertificationsGrid />
      <SimpleFooter />
    </main>
  );
}
