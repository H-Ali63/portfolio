"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/types";
import Badge from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-zinc-950/72 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-white shadow-soft dark:bg-zinc-950"
            initial={{ y: 28, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 250 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              <Image src={project.image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
              <button
                type="button"
                aria-label="Close project preview"
                className="focus-ring absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-950 shadow-sm transition hover:bg-white dark:bg-zinc-950/85 dark:text-white"
                onClick={onClose}
              >
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[52vh] overflow-y-auto p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{project.category}</Badge>
                {project.featured ? (
                  <Badge className="border-accent-mint/40 text-emerald-700 dark:text-accent-mint">
                    Featured
                  </Badge>
                ) : null}
              </div>
              <h3 id="project-modal-title" className="balanced mt-4 font-display text-2xl font-semibold text-zinc-950 dark:text-white sm:text-3xl">
                {project.title}
              </h3>
              <p className="pretty mt-4 leading-8 text-muted">{project.longDescription}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {project.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm font-medium text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100">
                    {outcome}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <ButtonLink href={project.githubUrl} variant="secondary">
                    <Github size={16} />
                    Source
                  </ButtonLink>
                ) : null}
                {project.demoUrl ? (
                  <ButtonLink href={project.demoUrl}>
                    <ExternalLink size={16} />
                    Live demo
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
