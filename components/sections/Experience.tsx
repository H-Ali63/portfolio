"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Timeline of systems shipped, owned, and improved."
          description="Each role highlights backend ownership, AI delivery, operational maturity, and the tools used to move from design to production."
        />

        <div className="relative mt-12">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-accent-mint/60 via-zinc-200 to-accent-cyan/40 dark:via-white/10 md:block" />
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="relative md:pl-16"
              >
                <span className="absolute left-0 top-6 hidden h-10 w-10 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm ring-8 ring-[var(--background)] dark:border-white/10 dark:bg-zinc-950 dark:text-white md:grid">
                  <Icon name="briefcase" size={18} />
                </span>
                <div className="glass lift-card rounded-lg p-6 sm:p-8">
                  <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                    <div>
                      <p className="text-sm font-semibold text-accent-cyan">{item.duration}</p>
                      <h3 className="balanced mt-2 font-display text-2xl font-semibold text-zinc-950 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-medium text-zinc-700 dark:text-zinc-100">
                        {item.company} - {item.location}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {item.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <p className="pretty mt-5 leading-8 text-muted">{item.summary}</p>
                  <ul className="mt-5 grid gap-3">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3 leading-7 text-zinc-700 dark:text-zinc-100">
                        <Icon name="check" size={18} className="mt-1 shrink-0 text-accent-mint" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
