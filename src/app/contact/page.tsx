import Navbar from "@/components/Navbar";
import FooterContact from "@/components/FooterContact";

export const metadata = {
  title: "Contact | Rohit Ranjan Kumar",
  description: "Get in touch with Rohit Ranjan Kumar for engineering roles, collaborations, and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B1320] text-[#E2E8F0] pt-16">
      <Navbar />
      <FooterContact />
    </main>
  );
}
