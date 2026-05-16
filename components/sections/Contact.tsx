"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const contactMethods = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "email" },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, icon: "phone" },
    { label: "Location", value: profile.location, href: "", icon: "globe" },
  ];

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = String(formData.get("subject") ?? "Portfolio inquiry");

    setState("sending");

    if (profile.contact.formEndpoint) {
      try {
        const response = await fetch(profile.contact.formEndpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("Form submission failed");
        setState("sent");
        form.reset();
      } catch {
        setState("error");
      }
      return;
    }

    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setState("sent");
    form.reset();
  }

  return (
    <section id="contact" className="section-padding section-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title={profile.contact.headline}
              description={profile.contact.description}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-accent-mint hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:text-white"
                >
                  <Icon name={link.platform} size={17} />
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {contactMethods.map((method) => {
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                      <Icon name={method.icon} size={18} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">{method.label}</span>
                      <span className="mt-1 block break-words text-sm font-semibold text-zinc-900 dark:text-white">{method.value}</span>
                    </span>
                  </>
                );

                return method.href ? (
                  <a
                    key={method.label}
                    href={method.href}
                    className="focus-ring glass flex items-center gap-3 rounded-lg p-4 transition hover:-translate-y-0.5 hover:border-accent-mint"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={method.label} className="glass flex items-center gap-3 rounded-lg p-4">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass lift-card rounded-lg p-5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-100">
                Name
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="focus-ring rounded-lg border border-zinc-200 bg-white px-4 py-3 font-normal text-zinc-950 transition placeholder:text-zinc-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-100">
                Email
                <input
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="focus-ring rounded-lg border border-zinc-200 bg-white px-4 py-3 font-normal text-zinc-950 transition placeholder:text-zinc-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-100">
              Subject
              <input
                name="subject"
                required
                className="focus-ring rounded-lg border border-zinc-200 bg-white px-4 py-3 font-normal text-zinc-950 transition placeholder:text-zinc-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                placeholder="Backend or AI project"
              />
            </label>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-100">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="focus-ring resize-none rounded-lg border border-zinc-200 bg-white px-4 py-3 font-normal text-zinc-950 transition placeholder:text-zinc-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                placeholder="Tell me about the workflow, role, or system you are building."
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="min-h-5 text-sm text-muted" role="status">
                {state === "sent" ? "Message ready. Thank you for reaching out." : null}
                {state === "error" ? "Something went wrong. Email is still available above." : null}
              </p>
              <Button type="submit" className="w-full sm:w-auto" disabled={state === "sending"}>
                <Send size={17} />
                {state === "sending" ? "Sending" : "Send message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
