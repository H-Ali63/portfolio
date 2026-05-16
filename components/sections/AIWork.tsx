"use client";

import { motion } from "framer-motion";
import { aiWork } from "@/data/aiWork";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";

export default function AIWork() {
  return (
    <section id="ai-work" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="AI / Research / LLM"
          title="Applied AI systems with evaluation and operational discipline."
          description="Generative AI, NLP, OCR, RAG, and LLM work is organized around real workflows, not isolated demos."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {aiWork.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass lift-card rounded-lg p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-accent-cyan">
                  <Icon name={index % 2 === 0 ? "brain" : "network"} size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-accent-cyan">{item.eyebrow}</p>
                  <h3 className="balanced mt-2 font-display text-xl font-semibold text-zinc-950 dark:text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="pretty mt-5 leading-8 text-muted">{item.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {item.capabilities.map((capability) => (
                  <div key={capability} className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white/55 px-4 py-3 text-sm font-medium text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100">
                    <Icon name="check" size={17} className="text-accent-mint" />
                    {capability}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
