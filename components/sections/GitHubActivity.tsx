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
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="GitHub"
            title="Contribution rhythm across platform, AI, and tooling work."
            description="A static contribution snapshot lives in data and can be swapped for a GitHub API-backed version later."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5 }}
            className="glass lift-card rounded-lg p-5 sm:p-6"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                  <Icon name="github" size={21} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-zinc-950 dark:text-white">
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
              <Badge>Open-source active</Badge>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {githubProfile.highlights.map((highlight) => (
                <div key={highlight.label} className="rounded-lg border border-zinc-200 bg-white/55 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="font-display text-2xl font-semibold text-zinc-950 dark:text-white">{highlight.value}</div>
                  <div className="mt-1 text-xs font-medium text-muted">{highlight.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-x-auto">
              <div className="flex min-w-[620px] gap-1.5" aria-label="GitHub contribution grid">
                {githubProfile.contributionWeeks.map((week) => (
                  <div key={week.week} className="grid gap-1.5">
                    {week.days.map((count, dayIndex) => (
                      <span
                        key={`${week.week}-${dayIndex}`}
                        title={`${count} contributions`}
                        className={cn("h-4 w-4 rounded", intensityClasses[Math.min(count, intensityClasses.length - 1)])}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
