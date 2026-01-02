"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  NextJsIcon,
  TypeScriptIcon,
  TailwindIcon,
  PrismaIcon,
  ReactIcon,
  NodeJsIcon,
  AppwriteIcon,
} from "@/components/technologies";

const TECH_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "Next.js": NextJsIcon,
  TypeScript: TypeScriptIcon,
  "Tailwind CSS": TailwindIcon,
  Prisma: PrismaIcon,
  React: ReactIcon,
  "Node.js": NodeJsIcon,
  Appwrite: AppwriteIcon,
};

const EXPERIENCES = [
  // ... (rest of the file until the map loop)
  // I'll use multi_replace to handle imports and the loop separately to be safer/cleaner

  {
    company: "gooddday",
    role: "Full Stack Developer",
    period: "2024 - Present",
    location: "Nepal",
    status: "Working",
    logo: "/experiences/image.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Jan 2023 - Present",
    location: "Remote",
    status: "Freelance",
    logo: "/experiences/image.png",
    tech: ["React", "Next.js", "Node.js", "Appwrite"],
  },
];

export function Experience() {
  return (
    <section className="py-8">
      <h2 className="text-sm font-medium text-muted-foreground mb-1 tracking-wider">
        Featured
      </h2>
      <h3 className="text-2xl font-bold mb-5">Experience</h3>

      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="group relative">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <Avatar className="size-12 rounded-md border border-border/50">
                  <AvatarImage src={exp.logo} alt={exp.company} />
                  <AvatarFallback>{exp.company[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    {exp.company}
                    {exp.status === "Working" && (
                      <div className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                        <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                        Working
                      </div>
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
              </div>

              <div className="text-muted-foreground flex flex-col md:text-right">
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            <div>
              <p className="text-md font-medium mb-2">Technologies & Tools</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => {
                  const Icon = TECH_ICONS[t];
                  return (
                    <a
                      key={t}
                      className="inline-flex items-center text-sm font-semibold  bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
                    >
                      {Icon && <Icon className="size-4.5 mr-1" />}
                      {t}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
