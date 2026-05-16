import Link from "next/link";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="border-t border-accent-amber/20 bg-white/55 py-10 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <Link href="#hero" className="premium-heading focus-ring rounded-full font-display text-lg font-semibold">
              {profile.name}
            </Link>
            <p className="mt-2 max-w-xl text-sm text-muted">{profile.bio}</p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.ariaLabel}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent-amber/25 bg-white/75 text-[#253247] transition hover:border-accent-mint hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:text-white"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon name={link.platform} size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-accent-amber/20 pt-6 text-sm text-muted dark:border-white/10 md:flex-row md:items-center">
          <p>Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {profile.sectionOrder.filter((id) => id !== "hero").slice(0, 8).map((id) => (
              <Link key={id} href={`#${id}`} className="focus-ring rounded-full capitalize transition hover:text-zinc-950 dark:hover:text-white">
                {id.replace("-", " ")}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
