"use client";

import { motion } from "framer-motion";
import { githubProfile } from "@/data/github";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const intensityClasses = [
  "bg-zinc-100 dark:bg-white/10",
  "bg-emerald-100 dark:bg-emerald-500/20",
  "bg-emerald-200 dark:bg-emerald-500/35",
  "bg-emerald-300 dark:bg-emerald-500/55",
  "bg-emerald-400 dark:bg-emerald-400/75",
  "bg-emerald-500 dark:bg-accent-mint",
];

export default function GitHubActivity() {
  return (
    <section id="github" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-10">
          <div className="min-w-0">
            <SectionHeader
              eyebrow="GitHub"
              title="Contribution rhythm across platform, AI, and tooling work."
              description="A static contribution snapshot lives in data and can be swapped for a GitHub API-backed version later."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5 }}
            className="glass lift-card min-w-0 rounded-lg p-4 sm:p-6"
          >
            <div className="flex min-w-0 flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#111827] via-[#123b37] to-[#9b6b24] text-white shadow-glow dark:from-white dark:via-[#dff8f1] dark:to-[#f1ce82] dark:text-zinc-950">
                  <Icon name="github" size={21} />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-xl font-semibold text-zinc-950 dark:text-white">
                    @{githubProfile.username}
                  </h3>
                  <a
                    href={githubProfile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-full text-sm font-medium text-muted hover:text-zinc-950 dark:hover:text-white"
                  >
                    github.com
                  </a>
                </div>
              </div>
              <Badge className="w-fit shrink-0">Open-source active</Badge>
            </div>

            <div className="mt-8 grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-4">
              {githubProfile.highlights.map((highlight) => (
                <div key={highlight.label} className="min-w-0 rounded-lg border border-accent-amber/20 bg-white/55 p-3 dark:border-white/10 dark:bg-white/5 sm:p-4">
                  <div className="break-words font-display text-xl font-semibold text-zinc-950 dark:text-white sm:text-2xl">{highlight.value}</div>
                  <div className="mt-1 text-xs font-medium text-muted">{highlight.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 min-w-0 rounded-lg border border-accent-amber/20 bg-white/45 p-3 dark:border-white/10 dark:bg-white/[0.03] sm:p-4">
              <div
                className="grid min-w-0 grid-flow-col auto-cols-fr gap-1 sm:gap-1.5"
                aria-label="GitHub contribution grid"
              >
                {githubProfile.contributionWeeks.map((week) => (
                  <div key={week.week} className="grid min-w-0 grid-rows-7 gap-1 sm:gap-1.5">
                    {week.days.map((count, dayIndex) => (
                      <span
                        key={`${week.week}-${dayIndex}`}
                        title={`${count} contributions`}
                        className={cn(
                          "block aspect-square min-h-2 w-full rounded-[3px] sm:rounded",
                          intensityClasses[Math.min(count, intensityClasses.length - 1)],
                        )}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-muted">
                <span>12 week activity snapshot</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  {intensityClasses.map((className, index) => (
                    <span key={className} className={cn("h-3 w-3 rounded-[3px]", intensityClasses[index])} />
                  ))}
                  <span>More</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
