"use client";

import { Button } from "@/components/ui/button";
import {
  FileText,
  Mail,
  Github,
  Youtube,
  YoutubeIcon,
  LucideYoutube,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  TailwindIcon,
  NodeJsIcon,
} from "@/components/technologies";
export function Hero() {
  return (
    <section className="py-12 md:py-10">
      <div className="flex flex-col gap-8">
        <div className="size-32 rounded-full dark:bg-yellow-300 bg-blue-300 flex items-center justify-center shadow-xl overflow-hidden">
          <Avatar className="h-full w-full border-none">
            <AvatarImage
              src="/avatars/avatar.png"
              alt="Avatar"
              className="object-cover"
              loading="lazy"
            />
            <AvatarFallback className="text-2xl font-bold">BD</AvatarFallback>
          </Avatar>
        </div>

        {/* // about div */}
        <div className="space-y-4">
          <h1 className="text-3xl text-[#354051] dark:text-[#E5E8EB] font-bold tracking-tight md:text-4xl">
            Hi, I'm Bidhan.{" "}
            <span className="text-[#919394] dark:text-[#9D9492]">
              A Full-stack Developer.
            </span>
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base md:text-lg text-neutral-500 whitespace-pre-wrap leading-10">
            <p className="whitespace-pre-wrap">
              Full-stack Developer building high-performance web apps with
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="inline-flex items-center text-sm font-semibold bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white mx-2"
              >
                <TypeScriptIcon className="size-4 mr-1" />
                TypeScript
              </a>
              ,
              <a
                href="https://react.dev/"
                target="_blank"
                className="inline-flex items-center text-sm font-semibold bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white mx-2"
              >
                <ReactIcon className="size-4 mr-1" />
                React
              </a>
              , and
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="inline-flex items-center text-sm font-semibold bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white mx-2"
              >
                <NextJsIcon className="size-4 mr-1" />
                Next.js
              </a>
              . Specialized in crafting scalable systems using
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="inline-flex items-center text-sm font-semibold bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white mx-2"
              >
                <TailwindIcon className="size-4 mr-1" />
                Tailwind CSS
              </a>
              and
              <a
                href="https://nodejs.org/"
                target="_blank"
                className="inline-flex items-center text-sm font-semibold bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white mx-2"
              >
                <NodeJsIcon className="size-4 mr-1" />
                Node.js
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button
            variant="outline"
            className="border border-border/50 bg-secondary/50 hover:bg-secondary/80 shadow-[inset_0_2px_0_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            asChild
          >
            <Link
              href="https://www.bidhandhakal.com.np/images/resumebidhan.pdf"
              target="_blank"
            >
              <FileText className="h-4 w-4" />
              Resume / CV
            </Link>
          </Button>
          <Button className="gap-2" asChild>
            <Link href="/contact">
              <Mail className="h-4 w-4" />
              Get in touch
            </Link>
          </Button>
        </div>

        {/* social links */}
        <div className="flex gap-3 text-muted-foreground">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://x.com/bidhanxcode"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>X</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href="https://linkedin.com/in/bidhandhakal"
                className="hover:text-foreground transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href="https://github.com/bidhandhakal"
                className="hover:text-foreground transition-colors"
              >
                <Github className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href="https://youtube.com/@bidhanxcode"
                className="hover:text-foreground transition-colors"
              >
                <LucideYoutube className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>YouTube</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href="https://instagram.com/bidhanxcode"
                className="hover:text-foreground transition-colors"
              >
                <Instagram className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href="mailto:bidhandhakal365@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                <Mail className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Mail</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}
