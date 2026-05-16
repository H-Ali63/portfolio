"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import ProjectModal from "@/components/ui/ProjectModal";
import { Button, ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const allCategory = "All";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | typeof allCategory>(allCategory);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(
    () => [allCategory, ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );

  const visibleProjects = useMemo(
    () =>
      activeCategory === allCategory
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="projects" className="section-padding section-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Projects"
            title="Selected builds with measurable product and platform impact."
            description="Cards, images, descriptions, links, and tech stacks are driven by the projects data file."
          />
          <div className="no-scrollbar flex w-full gap-2 overflow-x-auto rounded-full border border-zinc-200 bg-white/70 p-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 lg:w-auto lg:justify-end" role="list" aria-label="Project filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                className={cn(
                  "focus-ring whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition",
                  activeCategory === category
                    ? "bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-100 dark:hover:bg-white/10 dark:hover:text-white",
                )}
                onClick={() => setActiveCategory(category as ProjectCategory | typeof allCategory)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent-mint/50 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.04]"
            >
              <button
                type="button"
                className="focus-ring block w-full text-left"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              </button>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <Badge>{project.category}</Badge>
                  {project.featured ? (
                    <Badge className="border-accent-mint/40 text-emerald-700 dark:text-accent-mint">
                      Featured
                    </Badge>
                  ) : null}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-zinc-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="pretty mt-3 min-h-[5.25rem] leading-7 text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <Button type="button" variant="secondary" size="sm" onClick={() => setSelectedProject(project)}>
                    <Eye size={16} />
                    Preview
                  </Button>
                  {project.githubUrl ? (
                    <ButtonLink href={project.githubUrl} variant="ghost" size="sm">
                      <Github size={16} />
                      Code
                    </ButtonLink>
                  ) : null}
                  {project.demoUrl ? (
                    <ButtonLink href={project.demoUrl} variant="ghost" size="sm">
                      <ExternalLink size={16} />
                      Demo
                    </ButtonLink>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
