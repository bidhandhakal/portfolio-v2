import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { Experience } from "@/components/home/experience";
import { Footer } from "@/components/layout/footer";
import { GitHubActivity } from "@/components/home/github-activity";
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-6 md:px-24 py-8">
          <Hero />
          <Experience />
          <GitHubActivity />
        </div>
      </main>
      <Footer />
    </div>
  );
}
