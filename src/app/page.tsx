import { Header } from '@/components/layout/header';
import { Hero } from '@/components/home/hero';
import { Experience } from '@/components/home/experience';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-6 md:px-24 py-8">
            <Hero />
            <Experience />
        </div>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto max-w-4xl px-6 md:px-24">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by <a href="https://www.bidhandhakal.com.np/" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Bidhan</a>. The source code is available on <a href="https://github.com/bidhandhakal" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.
            </p>
          </div>
      </footer>
    </div>
  );
}
