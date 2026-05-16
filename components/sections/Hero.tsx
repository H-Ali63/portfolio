"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import TypingEffect from "@/components/TypingEffect";
import { ButtonLink } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center pt-24 sm:pt-28">
      <div className="mx-auto grid min-w-0 w-full max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-200 bg-white/75 px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-100">
            <span className="h-2 w-2 rounded-full bg-accent-mint" />
            <span className="truncate">{profile.availability}</span>
          </div>
          <h1 className="premium-heading balanced mt-7 max-w-4xl break-words font-display text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="premium-text mt-4 text-xl font-semibold sm:text-2xl">
            <TypingEffect words={profile.roles} />
          </p>
          <p className="pretty mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {profile.intro}
          </p>

          <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
            <div className="glass premium-text flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold">
              <Icon name="sparkles" size={18} className="text-accent-mint" />
              Backend, ML, and LLM systems
            </div>
            <div className="glass premium-text flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold">
              <Icon name="globe" size={18} className="text-accent-cyan" />
              {profile.location}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={profile.resume} size="lg" className="w-full sm:w-auto" download>
              <Download size={18} />
              Download resume
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} variant="secondary" size="lg" className="w-full sm:w-auto">
              <Mail size={18} />
              Start a conversation
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.ariaLabel}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-700 shadow-sm transition hover:border-accent-mint hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:text-white"
              >
                <Icon name={link.platform} size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto grid w-full max-w-[19rem] gap-4 sm:max-w-sm lg:max-w-[22rem] xl:max-w-sm"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <div className="glass relative overflow-hidden rounded-lg p-3 shadow-soft">
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={profile.avatar}
                alt={`${profile.name} profile artwork`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 304px, (max-width: 1024px) 384px, 384px"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-lg border border-zinc-200 bg-white/85 p-3 shadow-soft backdrop-blur dark:border-white/10 dark:bg-zinc-950/85 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {profile.metrics.map((metric) => (
              <div key={metric.label} className="rounded-md border border-zinc-200/80 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
                <div className="font-display text-xl font-semibold leading-none text-zinc-950 dark:text-white">{metric.value}</div>
                <div className="mt-1 text-xs font-medium text-muted">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-zinc-200 bg-white/70 p-3 text-zinc-700 shadow-sm transition hover:border-accent-mint dark:border-white/10 dark:bg-white/5 dark:text-white md:inline-flex"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
