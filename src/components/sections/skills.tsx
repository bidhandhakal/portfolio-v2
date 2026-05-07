// src/components/sections/skills.tsx
import SkillPill from "@/components/shared/skill-pill";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <div className="mb-6">
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-900 mb-1">Skills</h2>

      {/* Subtitle */}
      <p className="text-[14px] text-gray-500 mb-3">
        Technologies I use to build things
      </p>

      {/* Skills list */}
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => (
          <SkillPill key={skill.label} label={skill.label} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
