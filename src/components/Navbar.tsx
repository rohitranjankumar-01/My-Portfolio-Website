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
  { name: "Work Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Skills HUD", href: "/skills" },
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
          ? "bg-[#0a0a0a]/85 backdrop-blur-md border-b border-[#222222] py-3 shadow-[0_4px_30px_rgba(0,240,255,0.08)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-[#121212] border border-[#00F0FF]/40 flex items-center justify-center group-hover:border-[#00F0FF] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <Terminal className="w-5 h-5 text-[#00F0FF]" />
          </div>
          <span className="font-orbitron font-bold text-sm sm:text-base tracking-wider text-white group-hover:text-[#00F0FF] transition-colors whitespace-nowrap">
            ROHIT <span className="text-[#00F0FF]">RANJAN</span> <span className="text-[#8A2BE2]">KUMAR</span>
          </span>
        </Link>

        {/* Desktop Route Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-[#222222]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-orbitron uppercase tracking-wider rounded-full transition-all relative ${
                  isActive
                    ? "text-black font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "text-gray-300 hover:text-[#00F0FF] hover:bg-[#00F0FF]/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Social Icons & Action */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-gray-400 hover:text-[#8A2BE2] hover:border-[#8A2BE2]/50 transition-all"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={personalData.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#121212] border border-[#222222] text-gray-300 hover:text-[#00F0FF]"
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
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#222222] px-6 py-6"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-xs font-orbitron uppercase tracking-wider border-b border-[#222222]/50 ${
                  pathname === link.href ? "text-[#00F0FF] font-bold" : "text-gray-300 hover:text-[#00F0FF]"
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
                className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-gray-300 hover:text-[#00F0FF]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-gray-300 hover:text-[#00F0FF]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-gray-300 hover:text-[#8A2BE2]"
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
