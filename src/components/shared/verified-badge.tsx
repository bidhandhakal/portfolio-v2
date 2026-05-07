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
            aria-label="Grafana"
            role="img"
            className="inline-block w-5 h-5"
            style={{
              backgroundColor: "#2B7FFF",
              WebkitMaskImage:
                "url(https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-plain.svg)",
              maskImage:
                "url(https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-plain.svg)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={8}>
          Blue is the color I see most clearly.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
