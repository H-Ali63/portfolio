import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-accent-mint/70 sm:block" />
        <Badge>{eyebrow}</Badge>
        <span className="h-px w-10 bg-gradient-to-r from-accent-cyan/70 to-transparent" />
      </div>
      <h2 className="balanced mt-4 font-display text-3xl font-semibold leading-tight text-zinc-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className={cn("pretty mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg", align === "center" && "mx-auto")}>{description}</p>
    </div>
  );
}
