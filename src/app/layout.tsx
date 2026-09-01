import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import { personalData } from "@/data/personalData";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalData.fullName} | Portfolio`,
  description: personalData.shortBio,
  keywords: [
    "Rohit Ranjan Kumar",
    "Data Science",
    "Data Engineering",
    "AI Systems",
    "Web Developer",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: personalData.fullName }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: `${personalData.fullName} | Portfolio`,
    description: personalData.shortBio,
    type: "website",
    url: personalData.githubUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} antialiased bg-[#0B1320] text-[#E2E8F0] selection:bg-[#38BDF8] selection:text-[#0B1320]`}
      >
        {children}
      </body>
    </html>
  );
}
