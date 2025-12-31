'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const EXPERIENCES = [
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
    logo: "",
    tech: ["React", "Next.js", "Node.js", "Appwrite"],
  }
];

export function Experience() {
  return (
    <section className="py-12">
      <h2 className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Featured Experience</h2>
      <h3 className="text-2xl font-bold mb-8">Experience</h3>
      
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
                 <p className="text-sm font-medium mb-2 text-muted-foreground">Technologies & Tools</p>
                 <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="font-normal text-xs bg-muted text-muted-foreground hover:bg-muted hover:text-foreground">
                            {/* Optional icons could go here */}
                             {t}
                        </Badge>
                    ))}
                 </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
