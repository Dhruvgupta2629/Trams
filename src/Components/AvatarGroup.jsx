import React from "react";

const avatars = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
];

function AvatarGroup() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 sm:gap-5">
      {avatars.map((src, index) => (
        <img
          key={src}
          className={[
            "rounded-full border border-zinc-200 object-cover shadow-sm",
            index === 0 ? "h-16 w-16 sm:h-20 sm:w-20" : "",
            index === 1 ? "h-14 w-14 sm:h-16 sm:w-16" : "",
            index === 2 ? "h-12 w-12 sm:h-14 sm:w-14" : "",
            index === 3 ? "h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24" : "",
            index === 4 ? "h-[3.25rem] w-[3.25rem] sm:h-16 sm:w-16" : "",
            index === 5 ? "h-14 w-14 sm:h-16 sm:w-16" : "",
          ].join(" ")}
          src={src}
          alt=""
        />
      ))}
    </div>
  );
}

export default AvatarGroup;
