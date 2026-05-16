"use client";

import { useEffect, useMemo, useState } from "react";

type TypingEffectProps = {
  words: string[];
  className?: string;
};

export default function TypingEffect({ words, className }: TypingEffectProps) {
  const safeWords = useMemo(() => (words.length ? words : ["Backend + AI Engineer"]), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = safeWords[wordIndex];
    const pause = !deleting && visibleChars === currentWord.length
      ? 1200
      : deleting && visibleChars === 0
        ? 250
        : 42;

    const timeout = window.setTimeout(() => {
      if (!deleting && visibleChars < currentWord.length) {
        setVisibleChars((value) => value + 1);
      } else if (!deleting && visibleChars === currentWord.length) {
        setDeleting(true);
      } else if (deleting && visibleChars > 0) {
        setVisibleChars((value) => value - 1);
      } else {
        setDeleting(false);
        setWordIndex((value) => (value + 1) % safeWords.length);
      }
    }, pause);

    return () => window.clearTimeout(timeout);
  }, [deleting, safeWords, visibleChars, wordIndex]);

  const current = safeWords[wordIndex].slice(0, visibleChars);

  return (
    <span className={className} aria-live="polite">
      {current}
      <span className="ml-1 inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-accent-mint" aria-hidden="true" />
    </span>
  );
}
