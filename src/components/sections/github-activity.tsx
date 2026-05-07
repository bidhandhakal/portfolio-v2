"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";

interface GithubActivityProps {
  username: string;
}

export default function GithubActivity({ username }: GithubActivityProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mb-6 font-light pb-2 overflow-x-auto">
      <GitHubCalendar
        username={username}
        blockSize={11}
        blockMargin={3}
        blockRadius={4}
        fontSize={12}
        colorScheme="light"
        theme={{
          light: ["#e8e8e8", "#b0b0b0", "#787878", "#484848", "#1a1a1a"],
          dark: ["#e8e8e8", "#b0b0b0", "#787878", "#484848", "#1a1a1a"],
        }}
      />
    </div>
  );
}
