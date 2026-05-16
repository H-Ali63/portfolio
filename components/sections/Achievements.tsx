"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";

export default function Achievements() {
  const certificationCount = achievements.filter((achievement) => achievement.type === "Certification").length;
  const educationCount = achievements.filter((achievement) => achievement.type === "Education").length;

  return (
    <section id="achievements" className="section-padding section-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Credentials"
          title="Education and certifications from the resume."
          description="A focused proof layer for Md Haidar Ali's computer science education, Python, analytics, and AI credentials."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Proof points", value: achievements.length },
            { label: "Certifications", value: certificationCount },
            { label: "Education", value: educationCount },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="font-display text-2xl font-semibold text-zinc-950 dark:text-white">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={`${achievement.title}-${achievement.date}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass lift-card flex h-full flex-col rounded-lg p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <Badge>{achievement.type}</Badge>
                <span className="text-sm font-semibold text-muted">{achievement.date}</span>
              </div>
              <div className="mt-6 flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-accent-amber">
                  <Icon name={achievement.type === "Open Source" ? "github" : achievement.type === "Education" ? "code" : "award"} size={21} />
                </span>
                <div>
                  <h3 className="balanced font-display text-lg font-semibold leading-snug text-zinc-950 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-200">{achievement.issuer}</p>
                </div>
              </div>
              <p className="pretty mt-5 leading-7 text-muted">{achievement.description}</p>
              {achievement.link ? (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-auto inline-flex items-center gap-2 rounded-full pt-5 text-sm font-semibold text-zinc-950 transition hover:text-accent-cyan dark:text-white"
                >
                  View credential
                  <Icon name="external" size={15} />
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
