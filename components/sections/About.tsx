"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/ui/SectionHeader";
import { Card, CardTitle } from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="About" title={profile.about.headline} description={profile.bio} />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55 }}
            className="glass lift-card rounded-lg p-6 sm:p-8"
          >
            <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
              {profile.about.paragraphs.map((paragraph) => (
                <p className="pretty" key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-zinc-200 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase text-zinc-500 dark:text-zinc-300">
                <Icon name="briefcase" size={18} />
                Experience overview
              </div>
              <p className="mt-3 leading-8 text-zinc-700 dark:text-zinc-100">
                {profile.about.experienceOverview}
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {profile.about.careerGoals.map((goal, index) => (
              <motion.div
                key={goal}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full">
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-accent-mint">
                      <Icon name="rocket" size={20} />
                    </span>
                    <div>
                      <CardTitle>Goal {index + 1}</CardTitle>
                      <p className="pretty mt-2 leading-7 text-muted">{goal}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
