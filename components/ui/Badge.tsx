import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full border border-zinc-200 bg-white/75 px-3 py-1 text-xs font-semibold leading-none text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-100",
        className,
      )}
      {...props}
    />
  );
}
