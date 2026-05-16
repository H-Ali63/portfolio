"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import { Card, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import { clamp } from "@/lib/utils";

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="A practical stack for production backends and AI systems."
          description="Skills are grouped in editable data categories, with each card designed to scale as your stack changes."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                    <Icon name={category.icon} size={22} />
                  </span>
                  <div>
                    <CardTitle>{category.title}</CardTitle>
                    <p className="pretty mt-2 text-sm leading-6 text-muted">{category.summary}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{skill.name}</span>
                        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-300">{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-zinc-200/80 dark:bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent-mint via-accent-cyan to-accent-amber"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${clamp(skill.level)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {skill.keywords.map((keyword) => (
                          <Badge key={keyword}>{keyword}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
