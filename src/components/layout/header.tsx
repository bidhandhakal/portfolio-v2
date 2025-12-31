'use client';

import Link from 'next/link';
import { ThemeToggleButton, useThemeTransition } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CommandMenu } from './command-menu';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { startTransition } = useThemeTransition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
             <div className="container flex h-14 items-center justify-between mx-auto md:px-12 px-4 max-w-4xl">
                 {/* Skeleton or empty header to avoid flash */}
             </div>
        </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto md:px-24 px-6 max-w-4xl">
        <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
                <Avatar className="h-13 w-13 rounded-md border border-border/50">
                    <AvatarImage src="https://github.com/bidhandhakal.png" alt="@bidhandhakal" className="rounded-md" />
                    <AvatarFallback className="rounded-md">BD</AvatarFallback>
                </Avatar>
            </Link>
            <nav className="flex items-center space-x-4 text-base font-medium">
                <Link href="/work" className="transition-colors hover:text-foreground/80 text-black dark:text-white">Work</Link>
                <Link href="/blogs" className="transition-colors hover:text-foreground/80 text-black dark:text-white">Blogs</Link>
                <Link href="/projects" className="transition-colors hover:text-foreground/80 text-black dark:text-white">Projects</Link>
            </nav>
        </div>

        <div className="flex items-center gap-2">
            <Button 
                variant="outline" 
                size="sm" 
                className="hidden md:flex h-10 w-auto justify-start text-muted-foreground bg-secondary/50 hover:bg-secondary/80 px-3 border-border/50"
                onClick={() => {
                    const event = new KeyboardEvent('keydown', {
                        key: 'k',
                        metaKey: true,
                        ctrlKey: true,
                    });
                    document.dispatchEvent(event);
                }}
            >
                <span className="text-xs mr-4 lg:mr-8">Search</span>
                <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">Ctrl + K</span>
                </kbd>
            </Button>
            <ThemeToggleButton 
                theme={resolvedTheme === 'dark' ? 'dark' : 'light'} 
                variant="circle-blur"
                start="top-right"
                onClick={() => {
                  startTransition(() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'));
                }}
            />
            <CommandMenu />
        </div>
      </div>
    </header>
  );
}
