export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  category: "web" | "mobile" | "backend";
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics",
    description:
      "A comprehensive real-time analytics dashboard for monitoring business KPIs with interactive charts, dynamic filtering, and responsive data visualization.",
    image: "/projects/dashboard.jpg",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "PostgreSQL"],
    category: "web",
    demoUrl: "https://demo.example.com/dashboard",
    githubUrl: "https://github.com/rasyazildan/dashboard-analytics",
    featured: true,
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    description:
      "Personal finance management app with expense tracking, budget planning, visual reports, and smart categorization powered by AI.",
    image: "/projects/finance.jpg",
    stack: ["React Native", "TypeScript", "Firebase", "Redux", "Expo"],
    category: "mobile",
    demoUrl: "https://demo.example.com/finance",
    githubUrl: "https://github.com/rasyazildan/finance-tracker",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with product management, cart system, payment gateway integration, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    stack: ["Next.js", "Prisma", "Stripe", "Tailwind CSS", "PostgreSQL"],
    category: "web",
    demoUrl: "https://demo.example.com/ecommerce",
    githubUrl: "https://github.com/rasyazildan/ecommerce-platform",
    featured: true,
  },
  {
    id: "portfolio-v2",
    title: "Portfolio Website V2",
    description:
      "A modern personal portfolio website built with cutting-edge technologies featuring smooth animations and premium dark design.",
    image: "/projects/portfolio.jpg",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "web",
    demoUrl: "https://rasyazildan.dev",
    githubUrl: "https://github.com/rasyazildan/portfolio-v2",
  },
  {
    id: "task-management",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, kanban boards, and progress tracking.",
    image: "/projects/taskmanager.jpg",
    stack: ["React Native", "Node.js", "Socket.io", "MongoDB", "Express"],
    category: "mobile",
    demoUrl: "https://demo.example.com/taskmanager",
    githubUrl: "https://github.com/rasyazildan/task-management",
  },
  {
    id: "api-gateway",
    title: "API Gateway Service",
    description:
      "Scalable API gateway with rate limiting, authentication, logging, caching layer, and microservice orchestration.",
    image: "/projects/api.jpg",
    stack: ["Node.js", "Express", "Redis", "Docker", "PostgreSQL"],
    category: "backend",
    demoUrl: "https://api-docs.example.com",
    githubUrl: "https://github.com/rasyazildan/api-gateway",
  },
];
