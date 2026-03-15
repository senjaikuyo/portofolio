export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2024 — Present",
    title: "Freelance Fullstack Developer",
    description:
      "Building modern web and mobile applications for clients worldwide. Specializing in Next.js, React Native, and scalable backend systems.",
  },
  {
    year: "2023",
    title: "Backend Developer — Startup Project",
    description:
      "Developed API services, database architecture, and real-time features using Node.js, PostgreSQL, and Redis.",
  },
  {
    year: "2022",
    title: "Frontend Developer — Agency Work",
    description:
      "Created responsive and pixel-perfect web applications using React, Tailwind CSS, and TypeScript for various client projects.",
  },
  {
    year: "2021",
    title: "Started Learning Web Development",
    description:
      "Began the journey into web development with HTML, CSS, and JavaScript. Built first projects and discovered passion for clean code.",
  },
];

export const stats = [
  { label: "Years Learning", value: "4+" },
  { label: "Projects Built", value: "30+" },
  { label: "Main Focus", value: "Fullstack" },
];
