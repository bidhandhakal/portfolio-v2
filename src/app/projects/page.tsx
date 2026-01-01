"use client";

import { Header } from "@/components/layout/header";
import {
  ProjectCard,
  ProjectCardProps,
} from "@/components/projects/project-card";
import {
  ReactIcon,
  TailwindIcon,
  PrismaIcon,
  TypeScriptIcon,
  NodeJsIcon,
  AppwriteIcon,
  NotionIcon,
  OpenAIIcon,
} from "@/components/technologies";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";

const PROJECTS: ProjectCardProps[] = [
  {
    title: "Chatrex",
    description:
      "Real time chat app with image sending, friend request sending by email and username. Group can be created and along with verified badge.",
    image: "/projects/chatrex.png",
    tags: ["Next.js", "TypeScript", "Convex", "Tailwind", "Clerk"],
    links: {
      demo: "https://chatrex.bidhandhakal.com.np",
      repo: "https://github.com/bidhandhakal/chat-app",
    },
    status: "Working",
    icons: [ReactIcon, TypeScriptIcon, PrismaIcon, TailwindIcon, OpenAIIcon],
  },
  {
    title: "Appwrite MCP Server",
    description:
      "A specialized Model Context Protocol server designed for seamless Appwrite database operations. Provides 7 powerful tools for developers to interact with Appwrite resources via AI models.",
    image: "",
    tags: ["TypeScript", "Appwrite", "Node.js"],
    links: {
      demo: "https://github.com/bidhandhakal/appwrite-mcp",
      repo: "https://github.com/bidhandhakal/appwrite-mcp",
    },
    status: "Working",
    icons: [TypeScriptIcon, AppwriteIcon, NodeJsIcon],
  },
  {
    title: "AI Resume Builder",
    description:
      "An intelligent platform that uses OpenAI to help users build professional resumes. Features real-time suggestions, template switching, and export to PDF functionality.",
    image: "",
    tags: ["Next.js", "React", "OpenAI", "Tailwind"],
    links: {
      demo: "https://ai-resume-builder.vercel.app",
      repo: "https://github.com/bidhandhakal/ai-resume-builder",
    },
    status: "Working",
    icons: [ReactIcon, TypeScriptIcon, OpenAIIcon, TailwindIcon],
  },
  {
    title: "Notion Clone",
    description:
      "A full-featured Notion clone with real-time editing, drag-and-drop organization, and workspace management. Built with Next.js 14 and Appwrite for backend services.",
    image: "",
    tags: ["Next.js", "Appwrite", "Tailwind", "Lucide"],
    links: {
      demo: "https://notion-clone.bidhandhakal.com.np",
      repo: "#",
    },
    status: "Building",
    icons: [NotionIcon, ReactIcon, AppwriteIcon, TailwindIcon],
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | "Working" | "Building">("All");

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "All" || p.status === filter
  );

  return (
    <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-6 md:px-24 py-12">
          <div className="flex flex-col items-center text-center mb-16 space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground text-lg max-w-lg">
              My projects and work across different technologies and domains.
            </p>
          </div>

          <Separator className="my-10 opacity-0" />

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-semibold text-lg">Filter by Status</h2>
              <div className="flex gap-3">
                <Badge
                  variant={filter === "Working" ? "secondary" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm font-normal rounded-xl transition-all ${
                    filter === "Working"
                      ? "bg-secondary hover:bg-secondary/80"
                      : "hover:bg-secondary/50"
                  }`}
                  onClick={() =>
                    setFilter(filter === "Working" ? "All" : "Working")
                  }
                >
                  Working (
                  {PROJECTS.filter((p) => p.status === "Working").length})
                </Badge>
                <Badge
                  variant={filter === "Building" ? "secondary" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm font-normal rounded-xl transition-all ${
                    filter === "Building"
                      ? "bg-secondary hover:bg-secondary/80"
                      : "hover:bg-secondary/50"
                  }`}
                  onClick={() =>
                    setFilter(filter === "Building" ? "All" : "Building")
                  }
                >
                  Building (
                  {PROJECTS.filter((p) => p.status === "Building").length})
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-2xl">All Projects</h2>
                <span className="text-muted-foreground text-sm translate-y-0.5">
                  ({PROJECTS.length} projects)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
