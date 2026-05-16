"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="section-padding section-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What collaborators say about the work."
          description="Short, credible proof points from people who have worked across engineering and product delivery."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={`${testimonial.name}-${testimonial.company}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass lift-card rounded-lg p-6 sm:p-8"
            >
              <blockquote className="text-lg leading-8 text-zinc-800 dark:text-zinc-100">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-zinc-200 pt-5 dark:border-white/10">
                <div className="font-semibold text-zinc-950 dark:text-white">{testimonial.name}</div>
                <div className="mt-1 text-sm text-muted">
                  {testimonial.role}, {testimonial.company}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
