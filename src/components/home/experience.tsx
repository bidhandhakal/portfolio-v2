'use client';

import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  NextJsIcon,
  TypeScriptIcon,
  TailwindIcon,
  PrismaIcon,
  ReactIcon,
  NodeJsIcon,
  AppwriteIcon,
} from "@/components/technologies";

const TECH_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Next.js": NextJsIcon,
  "TypeScript": TypeScriptIcon,
  "Tailwind CSS": TailwindIcon,
  "Prisma": PrismaIcon,
  "React": ReactIcon,
  "Node.js": NodeJsIcon,
  "Appwrite": AppwriteIcon,
};

const EXPERIENCES = [
// ... (rest of the file until the map loop)
// I'll use multi_replace to handle imports and the loop separately to be safer/cleaner

  {
    company: "Luxera",
    role: "Full Stack Developer",
    period: "2024 - Present",
    location: "Nepal",
    status: "Working",
    logo: "", 
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Jan 2023 - Present",
    location: "Remote",
    status: "Freelance",
    logo: " ",
    tech: ["React", "Next.js", "Node.js", "Appwrite"],
  }
];

export function Experience() {
  return (
    <section className="py-8">
      <h2 className="text-sm font-medium text-muted-foreground mb-1 tracking-wider">Featured</h2>
      <h3 className="text-2xl font-bold mb-5">Experience</h3>
      
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="group relative">
             <div className="flex flex-col sm:flex-row gap-4 sm:items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border bg-muted">
                        <AvatarImage src={exp.logo} alt={exp.company} />
                        <AvatarFallback>{exp.company[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-semibold text-base flex items-center gap-2">
                            {exp.company}
                            {exp.status === 'Working' && (
                                <Badge variant="secondary" className="text-[10px] h-5 px-1.5 font-normal bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 hover:bg-green-500/10 dark:hover:bg-green-500/20 border-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                                    Working
                                </Badge>
                            )}
                        </h4>
                        <p className="text-sm text-foreground/80">{exp.role}</p>
                    </div>
                </div>
                
                <div className="text-left sm:text-right pl-[3.5rem] sm:pl-0">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
             </div>

             <div className="pl-[3.5rem]">
                 <p className="text-md font-medium mb-2">Technologies & Tools</p>
                 <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => {
                        const Icon = TECH_ICONS[t];
                        return (
                          <a key={t} className="inline-flex items-center text-sm font-semibold  bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white">
                              {Icon && <Icon className="size-4.5 mr-1" />}
                              {t}
                          </a>
                        )
                    })}
                 </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
