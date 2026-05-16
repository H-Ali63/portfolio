"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import ThemeToggle from "@/components/common/ThemeToggle";
import { cn } from "@/lib/utils";

const navLabels: Record<string, string> = {
  about: "About",
  skills: "Skills",
  experience: "Experience",
  projects: "Projects",
  "ai-work": "AI Work",
  achievements: "Proof",
  github: "GitHub",
  testimonials: "Words",
  writing: "Writing",
  contact: "Contact",
};

const navItems = profile.sectionOrder
  .filter((id) => id !== "hero")
  .map((id) => ({ id, label: navLabels[id] ?? id }));

const activeSectionOffset = 112;
const scrollTargetOffset = 84;

const initials = profile.name
  .split(" ")
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join("");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...navItems.map((item) => item.id)];
    let frame: number | null = null;

    const updateActiveSection = () => {
      frame = null;
      const nextActiveId = sectionIds.reduce((currentId, sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return currentId;
        return section.getBoundingClientRect().top <= activeSectionOffset ? sectionId : currentId;
      }, "hero");

      setActiveId(nextActiveId);
    };

    const queueUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    window.addEventListener("hashchange", queueUpdate);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      window.removeEventListener("hashchange", queueUpdate);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToSectionContent = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const target = id === "hero" ? section : section.firstElementChild;
    const scrollTarget = target instanceof HTMLElement ? target : section;
    const top = scrollTarget.getBoundingClientRect().top + window.scrollY - scrollTargetOffset;

    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  const handleNavClick = (id: string, event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveId(id);
    setOpen(false);
    window.requestAnimationFrame(() => scrollToSectionContent(id));
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled
          ? "border-b border-zinc-200/70 bg-white/78 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/72"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="focus-ring flex items-center gap-3 rounded-full" onClick={(event) => handleNavClick("hero", event)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-zinc-950 text-sm font-semibold text-white shadow-glow dark:bg-white dark:text-zinc-950">
            {initials}
          </span>
          <span className="hidden font-display text-sm font-semibold text-zinc-950 dark:text-white sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-zinc-200/70 bg-white/70 p-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "page" : undefined}
              className={cn(
                "focus-ring rounded-full px-3 py-2 text-sm font-medium transition",
                activeId === item.id
                  ? "bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white",
              )}
              onClick={(event) => handleNavClick(item.id, event)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="focus-ring hidden items-center gap-2 rounded-full border border-zinc-200/70 bg-white/75 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-accent-mint hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:text-white sm:inline-flex"
          >
            <Download size={16} />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open navigation menu"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/70 bg-white/75 text-zinc-800 shadow-sm transition dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 bg-zinc-950/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-white p-5 shadow-soft dark:bg-zinc-950"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold">{profile.name}</span>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="mt-10 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={activeId === item.id ? "page" : undefined}
                    className={cn(
                      "focus-ring rounded-lg px-4 py-3 text-base font-semibold transition",
                      activeId === item.id
                        ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-white/10",
                    )}
                    onClick={(event) => handleNavClick(item.id, event)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href={profile.resume}
                download
                className="focus-ring mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950"
              >
                <Download size={16} />
                Download resume
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
