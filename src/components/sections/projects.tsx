import Image from "next/image";
import SkillPill from "@/components/shared/skill-pill";
import SocialButton from "@/components/shared/social-button";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section className="mb-6">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Projects</h2>

      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.title}>
            <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors hover:border-gray-300 hover:bg-gray-50/50">
              <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-start">
                <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden rounded-lg bg-gray-50 ring-1 ring-gray-200/80 sm:w-44">
                  <Image
                    src={p.image}
                    alt={`${p.title} preview`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 176px"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 space-y-1.5">
                      <h3 className="text-[15px] font-semibold text-gray-900">
                        {p.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-gray-500">
                        {p.description}
                      </p>
                    </div>

                    {(p.repo || p.demo) && (
                      <div className="flex shrink-0 flex-wrap gap-2 sm:pt-0.5">
                        {p.repo && (
                          <SocialButton
                            href={p.repo}
                            icon={FiGithub}
                            label="Repo"
                          />
                        )}
                        {p.demo && (
                          <SocialButton
                            href={p.demo}
                            icon={FiExternalLink}
                            label="Demo"
                          />
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
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
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
