import React from "react";

function Highlight({ children, tone = "pink" }) {
  const tones = {
    pink: "bg-pink-200/90",
    green: "bg-emerald-100/90",
    yellow: "bg-yellow-100/90",
    neutral: "bg-zinc-200/90",
  };

  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute inset-x-0 bottom-1 h-3 rounded-full sm:h-4 ${tones[tone]}`}
      />
    </span>
  );
}

export default Highlight;
