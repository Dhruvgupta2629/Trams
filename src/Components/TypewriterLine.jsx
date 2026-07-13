import { useEffect, useState } from "react";

const typingWords = [
  "thinkers and doers",
  "creative teams",
  "modern brands",
  "digital products",
];

function TypewriterLine() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    const typingSpeed = deleting ? 45 : 85;

    const timer = window.setTimeout(() => {
      if (!deleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex((value) => value + 1);
        return;
      }

      if (!deleting && charIndex === currentWord.length) {
        window.setTimeout(() => setDeleting(true), 900);
        return;
      }

      if (deleting && charIndex > 0) {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex((value) => value - 1);
        return;
      }

      if (deleting && charIndex === 0) {
        setDeleting(false);
        setWordIndex((value) => (value + 1) % typingWords.length);
      }
    }, typingSpeed);

    return () => window.clearTimeout(timer);
  }, [charIndex, deleting, wordIndex]);

  return (
    <div className="relative mx-auto mt-5 inline-flex items-center justify-center gap-1 rounded-full border border-violet-200/80 bg-gradient-to-r from-white via-fuchsia-50 to-violet-50 px-4 py-3 text-base uppercase tracking-[0.2em] text-zinc-700 shadow-[0_10px_25px_rgba(139,92,246,0.12)] backdrop-blur sm:px-6 sm:text-lg">
      <div className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-500 to-violet-500" />
      <div className="absolute -right-2 bottom-1 h-4 w-4 rotate-45 rounded-sm border border-amber-300 bg-gradient-to-br from-amber-200 to-orange-300" />
      <span className="whitespace-nowrap">We are</span>
      <span className="relative inline-flex min-w-[11ch] justify-center font-medium text-zinc-950">
        {displayText}
        <span className="ml-1 inline-block h-[1.1em] w-[1px] bg-zinc-950 animate-pulse" />
      </span>
    </div>
  );
}

export default TypewriterLine;
