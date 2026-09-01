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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://rohitranjankumar-portfolio.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: "/",
    siteName: `${personalData.fullName} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${personalData.fullName} Portfolio`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.fullName} | Portfolio`,
    description: personalData.shortBio,
    images: ["/opengraph-image"],
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
