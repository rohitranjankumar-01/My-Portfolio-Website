import Navbar from "@/components/Navbar";
import FooterContact from "@/components/FooterContact";

export const metadata = {
  title: "Contact | Rohit Ranjan Kumar",
  description: "Get in touch with Rohit Ranjan Kumar for engineering roles, collaborations, and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <Navbar />
      <FooterContact />
    </main>
  );
}
