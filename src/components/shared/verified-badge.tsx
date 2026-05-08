"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function VerifiedBadge() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            aria-label="Meow"
            role="img"
            className="inline-block w-5 h-5 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url(/meow.png)",
            }}
          />
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={0}>
          Meow. Not finished yet, and I’m color blind, so it’s black and white
          for now.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
