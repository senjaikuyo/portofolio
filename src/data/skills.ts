export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML/CSS",
      "JavaScript",
      "Vue.js",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST API",
      "GraphQL",
    ],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "Flutter", "Firebase"],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "Docker",
      "VS Code",
      "Figma",
      "Vercel",
      "GitHub Actions",
      "Postman",
      "Linux",
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) => cat.skills);
