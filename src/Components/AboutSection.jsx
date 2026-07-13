import AvatarGroup from "./AvatarGroup";
import Highlight from "./Highlight";

function AboutSection({ onNavigate, theme }) {
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className="grid gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-16"
    >
      <div className="max-w-md">
        <h2
          className={`animate-fade-up text-[clamp(2.5rem,4vw,4.8rem)] leading-[0.98] tracking-[-0.08em] ${isDark ? "text-zinc-50" : "text-zinc-900"}`}
          style={{ "--delay": "80ms" }}
        >
          Tomorrow should be better than{" "}
          <Highlight tone="green">today</Highlight>
        </h2>
        <p
          className={`animate-fade-up mt-4 text-xl leading-10 sm:text-2xl ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
          style={{ "--delay": "160ms" }}
        >
          We build digital products with cleaner hierarchy, more deliberate
          rhythm, and stronger visual balance so the interface feels complete.
        </p>
        <a
          href="#services"
          className={`animate-fade-up hover-lift mt-5 inline-block border-b pb-1 text-base font-semibold uppercase tracking-[0.16em] transition ${isDark ? "border-white/20 text-zinc-100 hover:text-violet-300" : "border-zinc-900 text-zinc-900 hover:text-violet-600"}`}
          style={{ "--delay": "240ms" }}
          onClick={onNavigate}
        >
          Explore more
        </a>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div className="animate-drift absolute right-2 top-1/2 h-36 w-24 -translate-y-1/2 rounded-[40%_60%_48%_52%] bg-gradient-to-b from-fuchsia-500 via-violet-600 to-indigo-700 opacity-95 shadow-[0_12px_30px_rgba(139,92,246,0.35)] sm:h-48 sm:w-28" />
        <div className="animate-float-soft absolute -left-4 top-4 hidden h-16 w-16 rounded-full border border-pink-300/70 bg-[radial-gradient(circle,rgba(251,207,232,0.8),transparent_70%)] lg:block" />
        <div className="animate-drift absolute -right-2 bottom-4 hidden h-20 w-20 rounded-[2rem] bg-gradient-to-br from-amber-300 via-orange-300 to-fuchsia-400 shadow-[0_10px_25px_rgba(249,115,22,0.2)] lg:block" />
        <div className={`animate-pulse-scale animate-float-soft relative h-72 w-72 overflow-hidden rounded-full border shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem] ${isDark ? "border-white/10 bg-zinc-900/80" : "border-zinc-200 bg-zinc-100"}`}>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
            alt="Team collaborating at a table"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
