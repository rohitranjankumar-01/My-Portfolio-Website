export interface SkillCategory {
  categoryName: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Programming Languages",
    skills: ["Python", "C", "HTML", "CSS"],
  },
  {
    categoryName: "Frameworks & Libraries",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    categoryName: "Tools & Platforms",
    skills: [
      "MySQL",
      "AutoCAD",
      "Jupyter Notebook",
      "Tableau",
      "Git / GitHub",
      "skills.sh",
      "MCPs (Stitch, 21stdev/magic)",
    ],
  },
  {
    categoryName: "Soft Skills",
    skills: ["Team Player", "Time Management", "Problem Solving"],
  },
];
