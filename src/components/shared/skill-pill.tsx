// src/components/shared/skill-pill.tsx
import Image from "next/image";

interface SkillPillProps {
  label: string;
  icon: string;
  size?: "default" | "sm";
}

export default function SkillPill({
  label,
  icon,
  size = "default",
}: SkillPillProps) {
  const isSmall = size === "sm";

  return (
    <div
      className={`inline-flex items-center border border-gray-200 bg-white text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 grayscale ${
        isSmall
          ? "gap-1 rounded-md px-2 py-0.5 text-[11px] leading-none"
          : "gap-1.5 rounded-lg px-3 py-1.5 text-xs"
      }`}
    >
      <Image
        src={icon}
        alt={label}
        width={isSmall ? 12 : 16}
        height={isSmall ? 12 : 16}
        className="opacity-100"
      />
      <span>{label}</span>
    </div>
  );
}
