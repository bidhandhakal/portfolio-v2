// src/components/shared/skill-pill.tsx
import Image from "next/image";

interface SkillPillProps {
  label: string;
  icon: string;
}

export default function SkillPill({ label, icon }: SkillPillProps) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600">
      <Image
        src={icon}
        alt={label}
        width={16}
        height={16}
        className="opacity-100 grayscale"
      />
      <span>{label}</span>
    </div>
  );
}
