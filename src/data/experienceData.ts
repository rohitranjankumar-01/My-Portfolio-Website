export interface ExperienceEntry {
  id: string;
  roleTitle: string;
  company: string;
  type: string;
  timeline: string;
  description: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    id: "exp-1",
    roleTitle: "Website & Order Management Executive",
    company: "ThriftShift",
    type: "Self-Driven",
    timeline: "2024 - Present",
    description: [
      "Engineered web platforms (ThriftShift) utilizing modern web stacks.",
      "Actively developing and adding new features to the website.",
    ],
  },
];
