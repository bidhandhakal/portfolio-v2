import Hero from "@/components/sections/hero";
import Socials from "@/components/sections/socials";
import GithubActivity from "@/components/sections/github-activity";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl pt-24 px-8 pb-20">
        <Hero />

        <Socials />

        <GithubActivity username="bidhandhakal" />
        <Skills />

        <div className="border-t border-gray-100 my-6" />

        <p className="text-sm text-gray-400">
          say hi →{" "}
          <a
            href="https://x.com/bidhaan_daju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 font-medium hover:text-black transition-colors"
          >
            @bidhaan_daju
          </a>
        </p>
      </div>
    </div>
  );
}
