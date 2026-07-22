"use client";

import Link from "next/link";
import { Terminal, Heart } from "lucide-react";

export default function SimpleFooter() {
  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#00F0FF]" />
          <span>© {new Date().getFullYear()} Rohit Ranjan Kumar. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="text-gray-400 hover:text-[#00F0FF] transition-colors">
            Get In Touch
          </Link>
          <div className="flex items-center gap-1 text-gray-600">
            <span>Built with Next.js 14+</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
