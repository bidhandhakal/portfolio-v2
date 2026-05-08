// src/components/sections/skills.tsx
import SkillPill from "@/components/shared/skill-pill";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillPill key={skill.label} label={skill.label} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}
