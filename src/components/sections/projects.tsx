import SkillPill from "@/components/shared/skill-pill";
import SocialButton from "@/components/shared/social-button";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Projects</h2>

      <div className="space-y-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="border border-gray-200 rounded-lg p-4 bg-white"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{p.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => {
                    const match = skills.find(
                      (s) => s.label.toLowerCase() === t.toLowerCase()
                    );

                    return (
                      <SkillPill
                        key={t}
                        label={t}
                        icon={match?.icon ?? "https://via.placeholder.com/16"}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {p.repo && (
                  <SocialButton href={p.repo} icon={FiGithub} label="Repo" />
                )}

                {p.demo && (
                  <SocialButton
                    href={p.demo}
                    icon={FiExternalLink}
                    label="Demo"
                  />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
