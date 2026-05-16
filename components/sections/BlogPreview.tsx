"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

export default function BlogPreview() {
  if (!blogPosts.length) return null;

  return (
    <section id="writing" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Writing"
          title="Notes on backend architecture and applied AI."
          description="A lightweight blog-ready section that can point to MDX, a CMS, or external articles as the portfolio grows."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.href}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="focus-ring glass lift-card rounded-lg p-6"
            >
              <div className="text-sm font-semibold text-accent-cyan">
                {new Date(post.date).toLocaleDateString("en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-zinc-950 dark:text-white">{post.title}</h3>
              <p className="pretty mt-3 leading-7 text-muted">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
