export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Personal portfolio",
    description: "A minimal, fast portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    repo: "https://github.com/bidhandhakal/gu-portfolio",
    demo: "/",
  },
  {
    title: "Todo API",
    description: "A small REST API for todos using Bun, Prisma and PostgreSQL.",
    tech: ["TypeScript", "Node.js", "Prisma"],
    repo: "https://github.com/bidhandhakal/todo-api",
  },
];
