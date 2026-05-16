import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass lift-card min-w-0 rounded-lg p-5 hover:border-zinc-300 dark:hover:border-white/20",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("balanced break-words font-display text-lg font-semibold leading-snug text-zinc-950 dark:text-white", className)}
      {...props}
    />
  );
}
