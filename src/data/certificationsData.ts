export type CertCategory =
  | "Certification"
  | "Certificates"
  | "Hackathon"
  | "Soft Skills";

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: CertCategory;
  imagePath: string; // e.g. /Image/OCI-Foundation.jpeg
  isProctored?: boolean;
}

export const certificationsData: CertificationEntry[] = [
  {
    id: "cert-1",
    title: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate",
    issuer: "Oracle",
    date: "August 2025",
    category: "Certification",
    imagePath: "/Image/OCI-Foundation.jpeg",
    isProctored: true,
  },
  {
    id: "cert-2",
    title: "Programming in Java",
    issuer: "Lovely Professional University / iamneo",
    date: "May 2025",
    category: "Certificates",
    imagePath: "/Image/ProgrammingInJava.jpg",
    isProctored: true,
  },
  {
    id: "cert-3",
    title: "Data Structure and Algorithms",
    issuer: "Lovely Professional University / iamneo",
    date: "January 2026",
    category: "Certificates",
    imagePath: "/Image/DSA.jpg",
    isProctored: true,
  },
  {
    id: "cert-4",
    title: "Object Oriented Programming",
    issuer: "Lovely Professional University / iamneo",
    date: "May 2026",
    category: "Certificates",
    imagePath: "/Image/ObjectOrientedProgramming.png",
    isProctored: true,
  },
  {
    id: "cert-5",
    title: "Data Management (Excel and Tableau)",
    issuer: "Tech Veda",
    date: "March 2025",
    category: "Certificates",
    imagePath: "/Image/DataManagement.png",
    isProctored: true,
  },
  {
    id: "cert-6",
    title: "Basic to Beyond Python",
    issuer: "CSE Pathsala",
    date: "January 2025",
    category: "Certificates",
    imagePath: "/Image/Python_CSEPathsala.png",
    isProctored: true,
  },
  {
    id: "cert-7",
    title: "TRINETRA - 20 Hours HACKATHON",
    issuer: "Lovely Professional University / Trinetra",
    date: "February 2025",
    category: "Hackathon",
    imagePath: "/Image/Trinetra_Hackathon.jpg",
    isProctored: false,
  },
  {
    id: "cert-8",
    title: "CODE STORM 36 Hour Hackathon",
    issuer:
      "Lovely Professional University / Microsoft Learn Student Ambassador",
    date: "November 2024",
    category: "Hackathon",
    imagePath: "/Image/36HourHackathon.jpg",
    isProctored: false,
  },
  {
    id: "cert-9",
    title: "Building a Positive Attitude",
    issuer: "Master Union",
    date: "October 2024",
    category: "Soft Skills",
    imagePath: "/Image/PositiveAttitude_MasterUnion.png",
    isProctored: true,
  },
  {
    id: "cert-10",
    title: "The Authentic Confidence and Self-Esteem Masterclass",
    issuer: "Udemy",
    date: "September 2024",
    category: "Soft Skills",
    imagePath: "/Image/Udemy-TheAuthenticConfidence.jpg",
    isProctored: false,
  },
];
