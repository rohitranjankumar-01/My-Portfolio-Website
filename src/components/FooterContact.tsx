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
    <footer id="contact" className="pt-24 pb-12 relative bg-[#0a0a0a] border-t border-[#222222]">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column: Direct Info & Copy-to-Clipboard */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#00F0FF]/30 text-xs font-mono uppercase text-[#00F0FF] mb-4"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight mb-6"
            >
              LET&apos;S BUILD SOMETHING <span className="text-[#00F0FF]">EXTRAORDINARY</span>
            </motion.h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
              Whether you have a question, project proposal, or just want to connect regarding AI Systems, Data Science, or Web Engineering — feel free to reach out directly.
            </p>

            {/* Quick Copy Contact Cards */}
            <div className="space-y-4 max-w-md">
              {/* Email Copy Card */}
              <div className="glass-card p-4 rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 block">EMAIL ADDRESS</span>
                    <span className="text-sm font-mono text-white font-semibold">{personalData.email}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalData.email, "email")}
                  className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 transition-all cursor-pointer"
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
                  <div className="p-2.5 rounded-lg bg-[#8A2BE2]/10 text-[#8A2BE2]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 block">PHONE / WHATSAPP</span>
                    <span className="text-sm font-mono text-white font-semibold">{personalData.phone}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalData.phone, "phone")}
                  className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-gray-300 hover:text-[#8A2BE2] hover:border-[#8A2BE2]/40 transition-all cursor-pointer"
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
                <div className="p-2.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-500 block">LOCATION</span>
                  <span className="text-sm font-mono text-white font-semibold">{personalData.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-[#222222] text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-[#222222] text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-[#222222] text-gray-400 hover:text-[#8A2BE2] hover:border-[#8A2BE2]/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={personalData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel border border-[#222222] text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Submission Form */}
          <div className="glass-card p-8 rounded-3xl relative border border-[#222222]">
            <h3 className="text-xl font-orbitron font-bold text-white mb-2 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#00F0FF]" />
              <span>Send Direct Inquiry</span>
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Drop a message below and I will get back to you as soon as possible.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/40 text-center space-y-2">
                <Check className="w-8 h-8 text-[#00F0FF] mx-auto" />
                <h4 className="font-orbitron font-bold text-white">Message Transmitted!</h4>
                <p className="text-xs text-gray-300 font-mono">
                  Thank you for reaching out. I will respond to your email promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Rohit Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#222222] text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rohit@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#222222] text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase mb-1">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Rohit, I'd like to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#222222] text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#00F0FF]" />
            <span>© {new Date().getFullYear()} Rohit Ranjan Kumar. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with Next.js 14+ & Framer Motion</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
