type ClassValue = string | number | false | null | undefined | Record<string, boolean>;

export function cn(...inputs: ClassValue[]) {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === "string" || typeof input === "number") return [String(input)];
      return Object.entries(input)
        .filter(([, value]) => value)
        .map(([key]) => key);
    })
    .join(" ");
}

export function clamp(value: number, min = 0, max = 100) {
  return Math.min(Math.max(value, min), max);
}
