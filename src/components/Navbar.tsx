"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook, Menu, X, Terminal } from "lucide-react";
import { personalData } from "@/data/personalData";

const navLinks = [
  { name: "About", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Work", href: "/experience" },
  { name: "Internship & Training", href: "/internship-training" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Skills HUD", href: "/skills" },
  { name: "CV / Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1320]/90 backdrop-blur-md border-b border-[#1C2E4A] py-2.5 shadow-[0_4px_30px_rgba(56,189,248,0.08)]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-[#111D30] border border-[#38BDF8]/40 flex items-center justify-center group-hover:border-[#38BDF8] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] transition-all">
            <Terminal className="w-5 h-5 text-[#38BDF8]" />
          </div>
          <span className="font-orbitron font-bold text-xs sm:text-sm tracking-wider text-white group-hover:text-[#38BDF8] transition-colors whitespace-nowrap">
            ROHIT <span className="text-[#38BDF8]">RANJAN</span> <span className="text-[#0284C7]">KUMAR</span>
          </span>
        </Link>

        {/* Desktop Route Navigation */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-3 py-1 rounded-full border border-[#1C2E4A]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-2.5 py-1 text-[11px] font-orbitron uppercase tracking-wider rounded-full transition-all relative ${
                  isActive
                    ? "text-[#0B1320] font-bold bg-gradient-to-r from-[#38BDF8] to-[#0284C7] shadow-[0_0_15px_rgba(56,189,248,0.35)]"
                    : "text-slate-300 hover:text-[#38BDF8] hover:bg-[#38BDF8]/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Social Icons & Action */}
        <div className="hidden xl:flex items-center gap-2.5">
          <a
            href={personalData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-slate-400 hover:text-[#0284C7] hover:border-[#0284C7]/50 transition-all"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={personalData.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-slate-300 hover:text-[#38BDF8]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#0B1320]/95 backdrop-blur-xl border-b border-[#1C2E4A] px-6 py-6"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-xs font-orbitron uppercase tracking-wider border-b border-[#1C2E4A]/50 ${
                  pathname === link.href ? "text-[#38BDF8] font-bold" : "text-slate-300 hover:text-[#38BDF8]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-slate-300 hover:text-[#38BDF8]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-slate-300 hover:text-[#38BDF8]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111D30] border border-[#1C2E4A] text-slate-300 hover:text-[#0284C7]"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
