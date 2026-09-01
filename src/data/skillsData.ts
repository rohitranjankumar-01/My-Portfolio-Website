export interface SkillCategory {
  categoryName: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "HTML", "CSS"],
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
      "MS Excel",
      "Jupyter Notebook",
      "Tableau",
      "Git / GitHub",
      "RStudio",
      "AutoCAD",
      "MCPs (stitch, 21stdev/magic)",
    ],
  },
  {
    categoryName: "Soft Skills",
    skills: [
      "Analytical Thinking",
      "Team Player",
      "Time Management",
      "Problem Solving",
    ],
  },
];
