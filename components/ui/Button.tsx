import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-zinc-950 text-white shadow-soft hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100",
  secondary:
    "border border-zinc-200 bg-white/80 text-zinc-900 hover:border-accent-mint dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
  ghost:
    "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-100 dark:hover:bg-white/10 dark:hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition disabled:pointer-events-none disabled:opacity-55",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={buttonClasses({ variant, size, className })} {...props} />;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
}) {
  const classes = buttonClasses({ variant, size, className });

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : props.target}
        rel={href.startsWith("http") ? "noreferrer" : props.rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
