"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

const GITHUB_USERNAME = "bidhandhakal";

export function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContributions() {
      try {
        // Using GitHub's GraphQL API via a proxy or public endpoint
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );
        const result = await response.json();

        if (result.total && result.contributions) {
          const weeks: ContributionWeek[] = [];
          let currentWeek: ContributionDay[] = [];

          result.contributions.forEach(
            (day: { date: string; count: number; level: number }) => {
              currentWeek.push({
                date: day.date,
                count: day.count,
                level: day.level,
              });

              if (currentWeek.length === 7) {
                weeks.push({ contributionDays: currentWeek });
                currentWeek = [];
              }
            }
          );

          if (currentWeek.length > 0) {
            weeks.push({ contributionDays: currentWeek });
          }

          setData({
            totalContributions: result.total?.lastYear || result.total,
            weeks: weeks,
          });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  const getLevelColor = (level: number) => {
    const colors = [
      "bg-neutral-100 dark:bg-neutral-800",
      "bg-green-200 dark:bg-green-900",
      "bg-green-300 dark:bg-green-700",
      "bg-green-500 dark:bg-green-500",
      "bg-green-700 dark:bg-green-400",
    ];
    return colors[level] || colors[0];
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (loading) {
    return (
      <div className="rounded-xl border border-border/50 bg-card p-6">
        <div className="animate-pulse">
          <div className="h-4 w-32 bg-muted rounded mb-4"></div>
          <div className="h-24 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="rounded-xl border border-border/50 bg-card p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <p className="text-xs text-muted-foreground">Featured</p>
          <h3 className="text-lg font-semibold text-foreground">
            GitHub Activity
          </h3>
          <p className="text-sm text-green-600 dark:text-green-400">
            Total: {data.totalContributions.toLocaleString()} contributions
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-fit">
          {/* Month labels */}
          <div className="flex text-xs text-muted-foreground mb-2 ml-0">
            {months.map((month, i) => (
              <span key={i} className="flex-1 text-center">
                {month}
              </span>
            ))}
          </div>

          {/* Contribution grid */}
          <div className="flex gap-0.75">
            {data.weeks.slice(-52).map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-0.75">
                {week.contributionDays.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`size-2.5 sm:size-3 rounded-sm ${getLevelColor(
                      day.level
                    )} transition-colors hover:ring-1 hover:ring-foreground/20`}
                    title={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-3 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-0.75">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`size-2.5 sm:size-3 rounded-sm ${getLevelColor(
                    level
                  )}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
