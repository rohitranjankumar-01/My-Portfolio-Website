"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Copy,
  Check,
  Send,
  Terminal,
  Heart,
} from "lucide-react";
import { personalData } from "@/data/personalData";

export default function FooterContact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <footer id="contact" className="pt-24 pb-12 relative bg-[#0B1320] border-t border-[#1C2E4A]">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column: Direct Info & Copy-to-Clipboard */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#38BDF8]/30 text-xs font-mono uppercase text-[#38BDF8] mb-4"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-orbitron font-extrabold text-[#E2E8F0] tracking-tight mb-6"
            >
              LET&apos;S BUILD SOMETHING <span className="text-[#38BDF8]">EXTRAORDINARY</span>
            </motion.h2>

            <p className="text-[#7E92AB] text-sm leading-relaxed mb-8 max-w-lg">
              Whether you have a question, project proposal, or just want to connect regarding AI Systems, Data Science, or Web Engineering — feel free to reach out directly.
            </p>

            {/* Quick Copy Contact Cards */}
            <div className="space-y-4 max-w-md">
              {/* Email Copy Card */}
              <div className="glass-card p-4 rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#7E92AB] block">EMAIL ADDRESS</span>
                    <span className="text-sm font-mono text-[#E2E8F0] font-semibold">{personalData.email}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalData.email, "email")}
                  className="p-2 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-[#7E92AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 transition-all cursor-pointer"
                  title="Copy Email"
                >
                  {copiedField === "email" ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Copy Card */}
              <div className="glass-card p-4 rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0284C7]/10 text-[#0284C7]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#7E92AB] block">PHONE / WHATSAPP</span>
                    <span className="text-sm font-mono text-[#E2E8F0] font-semibold">{personalData.phone}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalData.phone, "phone")}
                  className="p-2 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-[#7E92AB] hover:text-[#0284C7] hover:border-[#0284C7]/40 transition-all cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#7E92AB] block">LOCATION</span>
                  <span className="text-sm font-mono text-[#E2E8F0] font-semibold">{personalData.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-[#1C2E4A] text-[#7E92AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-[#1C2E4A] text-[#7E92AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-[#1C2E4A] text-[#7E92AB] hover:text-[#0284C7] hover:border-[#0284C7]/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={personalData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-[#1C2E4A] text-[#7E92AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Submission Form */}
          <div className="glass-card p-8 rounded-3xl relative border border-[#1C2E4A]">
            <h3 className="text-xl font-orbitron font-bold text-[#E2E8F0] mb-2 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#38BDF8]" />
              <span>Send Direct Inquiry</span>
            </h3>
            <p className="text-xs text-[#7E92AB] mb-6">
              Drop a message below and I will get back to you as soon as possible.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/40 text-center space-y-2">
                <Check className="w-8 h-8 text-[#38BDF8] mx-auto" />
                <h4 className="font-orbitron font-bold text-[#E2E8F0]">Message Transmitted!</h4>
                <p className="text-xs text-[#7E92AB] font-mono">
                  Thank you for reaching out. I will respond to your email promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#7E92AB] uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Rohit Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1320] border border-[#1C2E4A] text-sm text-[#E2E8F0] focus:outline-none focus:border-[#38BDF8] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#7E92AB] uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rohit@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1320] border border-[#1C2E4A] text-sm text-[#E2E8F0] focus:outline-none focus:border-[#38BDF8] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#7E92AB] uppercase mb-1">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Rohit, I'd like to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1320] border border-[#1C2E4A] text-sm text-[#E2E8F0] focus:outline-none focus:border-[#38BDF8] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#0B1320] font-orbitron font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#1C2E4A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7E92AB]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#38BDF8]" />
            <span>© {new Date().getFullYear()} Rohit Ranjan Kumar. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with Next.js 14+ &amp; Framer Motion</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
