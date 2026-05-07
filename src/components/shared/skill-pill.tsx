// src/components/shared/skill-pill.tsx
import Image from "next/image";

interface SkillPillProps {
  label: string;
  icon: string;
}

export default function SkillPill({ label, icon }: SkillPillProps) {
  return (
    <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors">
      <Image
        src={icon}
        alt={label}
        width={13}
        height={13}
        className="opacity-100"
      />
      {label}
    </div>
  );
}
