"use client";

import { useMemo, useState, useEffect } from "react";

const GITHUB_USERNAME = "bidhandhakal";

// Fetch real GitHub contribution data from public API
async function fetchGitHubContributions() {
  try {
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;

    // Fetch both current year and last year to get full 365 days
    const [currentYearData, lastYearData] = await Promise.all([
      fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${currentYear}`,
      ).then((r) => r.json()),
      fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${lastYear}`,
      ).then((r) => r.json()),
    ]);

    const data: { date: Date; count: number; level: number }[] = [];
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setDate(today.getDate() - 365);

    // Process both years
    [lastYearData, currentYearData].forEach((json) => {
      if (json.contributions) {
        Object.entries(json.contributions).forEach(
          ([dateStr, contribution]: [string, any]) => {
            const date = new Date(dateStr);
            if (date >= oneYearAgo && date <= today) {
              const count = contribution.count;
              let level = contribution.level;
              data.push({ date, count, level });
            }
          },
        );
      }
    });

    // Sort by date
    data.sort((a, b) => a.date.getTime() - b.date.getTime());

    return data.length > 0 ? data : generateFallbackData();
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return generateFallbackData();
  }
}

// Generate fallback data if API fails
function generateFallbackData() {
  const data: { date: Date; count: number; level: number }[] = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 365); // Start from 365 days ago

  // Start from the beginning of the week, but not before March 1
  const originalStart = new Date(startDate);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  // If we went back to February, start from March 1 instead
  if (startDate < originalStart) {
    startDate.setTime(originalStart.getTime());
  }

  // Calculate days from start to today
  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const totalDays = Math.ceil((diffDays + 7) / 7) * 7; // Round up to full weeks

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    if (date > today) break;

    // Generate realistic-looking contribution patterns
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // Base probability - lower on weekends
    let probability = isWeekend ? 0.3 : 0.65;

    // Random contribution count
    const random = Math.random();
    let count = 0;
    let level = 0;

    if (random < probability) {
      const intensityRandom = Math.random();
      if (intensityRandom < 0.4) {
        count = Math.floor(Math.random() * 3) + 1;
        level = 1;
      } else if (intensityRandom < 0.7) {
        count = Math.floor(Math.random() * 5) + 4;
        level = 2;
      } else if (intensityRandom < 0.9) {
        count = Math.floor(Math.random() * 7) + 9;
        level = 3;
      } else {
        count = Math.floor(Math.random() * 10) + 16;
        level = 4;
      }
    }

    data.push({ date, count, level });
  }

  return data;
}

// Get total contributions
function getTotalContributions(data: { count: number }[]) {
  return data.reduce((sum, day) => sum + day.count, 0);
}

// Get month labels
function getMonthLabels(data: { date: Date }[]) {
  const months: { label: string; index: number }[] = [];
  let lastMonth = -1;

  data.forEach((day, index) => {
    const month = day.date.getMonth();
    if (month !== lastMonth && index % 7 === 0) {
      const monthNames = [
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
      months.push({ label: monthNames[month], index: Math.floor(index / 7) });
      lastMonth = month;
    }
  });

  return months;
}

// Contribution cell colors matching the image
const CONTRIBUTION_COLORS = {
  0: "#191C22", // Empty - dark background
  1: "#0e4429", // Level 1 - darkest green
  2: "#006d32", // Level 2 - dark green
  3: "#26a641", // Level 3 - medium green
  4: "#39d353", // Level 4 - brightest green
};

export function GitHubActivity() {
  const [contributionData, setContributionData] = useState<
    { date: Date; count: number; level: number }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGitHubContributions().then((data) => {
      setContributionData(data);
      setIsLoading(false);
    });
  }, []);

  const totalContributions = useMemo(
    () => getTotalContributions(contributionData),
    [contributionData],
  );
  const monthLabels = useMemo(
    () => getMonthLabels(contributionData),
    [contributionData],
  );

  // Group data by weeks
  const weeks: { date: Date; count: number; level: number }[][] = [];
  for (let i = 0; i < contributionData.length; i += 7) {
    weeks.push(contributionData.slice(i, i + 7));
  }

  if (isLoading) {
    return (
      <section className="py-8">
        <p className="text-neutral-400 whitespace-pre-wrap text-sm">Featured</p>
        <h3 className="text-2xl font-bold mb-5">GitHub Activity</h3>
        <div className="flex items-center justify-center py-20">
          <p className="text-[#8b949e]">Loading contributions...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <p className="text-neutral-400 whitespace-pre-wrap text-sm">Featured</p>
      <h3 className="text-2xl font-bold mb-5">GitHub Activity</h3>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-[#8b949e] text-sm">
          Total:{" "}
          <span className="text-[#c9d1d9] font-semibold">
            {totalContributions.toLocaleString()} contributions
          </span>
        </p>
      </div>

      <div
        className="relative rounded-xl p-5 overflow-hidden"
        style={{
          background: "#0A0A0A",
          boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 2px 4px rgba(0, 0, 0, 0.6),
            inset 0 4px 8px rgba(0, 0, 0, 0.4)
          `,
        }}
      >
        {/* Contribution Graph */}
        <div className="relative z-10">
          {/* Month labels */}
          <div className="flex mb-2 relative" style={{ height: "14px" }}>
            {monthLabels.map((month) => (
              <div
                key={month.index}
                className="text-[10px] text-[#8b949e] absolute"
                style={{
                  left: `${month.index * 13}px`,
                }}
              >
                {month.label}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex" style={{ gap: "3px" }}>
            {weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="flex flex-col"
                style={{ gap: "3px" }}
              >
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="transition-all duration-200 hover:scale-125 hover:z-10"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor:
                        CONTRIBUTION_COLORS[
                          day.level as keyof typeof CONTRIBUTION_COLORS
                        ],
                      borderRadius: "2px",
                      boxShadow:
                        day.level > 0
                          ? `0 0 ${day.level * 2}px ${
                              CONTRIBUTION_COLORS[
                                day.level as keyof typeof CONTRIBUTION_COLORS
                              ]
                            }40`
                          : "none",
                    }}
                    title={`${day.date.toDateString()}: ${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end mt-3 gap-1">
            <span className="text-[10px] text-[#8b949e] mr-1">Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor:
                    CONTRIBUTION_COLORS[
                      level as keyof typeof CONTRIBUTION_COLORS
                    ],
                  borderRadius: "2px",
                }}
              />
            ))}
            <span className="text-[10px] text-[#8b949e] ml-1">More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
