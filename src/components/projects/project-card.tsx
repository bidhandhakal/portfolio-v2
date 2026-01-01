"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, ArrowRight, Cat, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
  status: "Working" | "Building";
  icons: React.FC<React.SVGProps<SVGSVGElement>>[];
  video?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  links,
  status,
  icons,
  video,
}: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <Card className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md p-0 gap-0 dark:border-[#2a2a2a] dark:bg-[#171717]">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-muted dark:bg-[#1a1a1a]">
        <Image
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={image || "/placeholder.svg"}
          alt={title}
          width={1920}
          height={1080}
        />
        {video && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 opacity-100 transition-opacity duration-300 hover:bg-black/50 group-hover:backdrop-blur-[2px]">
                <button className="group/play flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20">
                  <div className="relative ml-1">
                    <div className="absolute inset-0 animate-ping rounded-full bg-white/20 opacity-0 group-hover/play:opacity-100" />
                    <div className="border-y-10 border-l-16 border-y-transparent border-l-white" />
                  </div>
                </button>
              </div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-4xl border-border bg-background p-0 shadow-2xl dark:border-[#333] dark:bg-[#0F0F0F]">
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <video
                  className="h-full w-full object-cover"
                  src={video}
                  autoPlay
                  loop
                  controls
                />
              </div>
              <DialogTitle className="sr-only">{title} Demo</DialogTitle>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between px-5 py-5">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold tracking-tight text-foreground dark:text-white">
              {title}
            </h3>
            <div className="flex items-center gap-3">
              {links.demo !== "#" && (
                <Link
                  className="text-muted-foreground transition-colors hover:text-foreground dark:text-[#888] dark:hover:text-white"
                  href={links.demo}
                  target="_blank"
                >
                  <Globe className="size-5" />
                  <span className="sr-only">Website</span>
                </Link>
              )}
              {links.repo !== "#" && (
                <Link
                  className="text-muted-foreground transition-colors hover:text-foreground dark:text-[#888] dark:hover:text-white"
                  href={links.repo}
                  target="_blank"
                >
                  <Github className="size-5" />
                  <span className="sr-only">Repo</span>
                </Link>
              )}
            </div>
          </div>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground dark:text-[#888]">
            {description}
          </p>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground dark:text-[#666]">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {icons.map((Icon, index) => (
                <div
                  key={index}
                  className="text-foreground hover:text-primary transition-colors dark:text-white"
                >
                  <Icon className="size-5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Badge
            variant="outline"
            className={`flex items-center gap-2 border-0 bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-600 dark:bg-[#0c2b15] dark:text-[#22c55e]`}
          >
            <span className="size-2 animate-pulse rounded-full bg-green-500 dark:bg-[#22c55e]" />
            {status === "Working"
              ? "All Systems Operational"
              : "Under Development"}
          </Badge>

          <Link
            href={links.demo}
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group-hover:translate-x-1 dark:text-[#888] dark:hover:text-white"
          >
            View Details
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
