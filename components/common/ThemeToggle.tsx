"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      className={cn(
        "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/75 text-zinc-700 shadow-sm transition hover:border-accent-mint hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:text-white",
        className,
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
