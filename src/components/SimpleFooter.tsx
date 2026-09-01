"use client";

import Link from "next/link";
import { Terminal, Heart } from "lucide-react";

export default function SimpleFooter() {
  return (
    <footer className="py-8 bg-[#0B1320] border-t border-[#1C2E4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7E92AB]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#38BDF8]" />
          <span>© {new Date().getFullYear()} Rohit Ranjan Kumar. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="text-[#7E92AB] hover:text-[#38BDF8] transition-colors">
            Get In Touch
          </Link>
          <div className="flex items-center gap-1">
            <span>Built with Next.js 14+</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
