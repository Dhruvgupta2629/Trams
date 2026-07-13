import Highlight from "./Highlight";

function TestimonialsSection({ theme }) {
  const isDark = theme === "dark";

  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <h2
          className={`animate-fade-up text-[clamp(2.4rem,3.8vw,4.6rem)] leading-[0.98] tracking-[-0.08em] ${isDark ? "text-zinc-50" : "text-zinc-900"}`}
          style={{ "--delay": "80ms" }}
        >
          What our customer says{" "}
          <Highlight tone="neutral">About Us</Highlight>
        </h2>

        <div className="relative mt-10 min-h-[280px]">
          <div className={`absolute left-4 top-6 hidden h-16 w-16 rotate-12 rounded-[2rem] border lg:block ${isDark ? "border-white/10" : "border-zinc-300/70"}`} />
          <div className="absolute right-6 bottom-0 hidden h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.18),transparent_70%)] lg:block" />
          <div className={`absolute left-1/2 top-3 hidden h-6 w-24 -translate-x-1/2 rounded-full lg:block ${isDark ? "bg-white/10" : "bg-zinc-100/80"}`} />
          <img
            className={`animate-pulse-scale absolute left-6 top-0 h-12 w-12 rounded-full border object-cover ${isDark ? "border-white/10" : "border-zinc-200"}`}
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
            alt=""
          />
          <img
            className={`animate-pulse-scale absolute -left-1 bottom-4 h-14 w-14 rounded-full border object-cover ${isDark ? "border-white/10" : "border-zinc-200"}`}
            style={{ "--delay": "800ms" }}
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80"
            alt=""
          />
          <img
            className={`animate-pulse-scale absolute right-14 top-[-0.75rem] h-11 w-11 rounded-full border object-cover ${isDark ? "border-white/10" : "border-zinc-200"}`}
            style={{ "--delay": "1.2s" }}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
            alt=""
          />
          <img
            className="animate-pulse-scale absolute right-3 bottom-3 h-16 w-16 rounded-full border-2 border-violet-500 object-cover shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            style={{ "--delay": "400ms" }}
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=160&q=80"
            alt=""
          />

          <div className={`animate-fade-up hover-lift mx-auto flex max-w-lg items-center justify-center rounded-3xl border px-8 py-6 text-left shadow-[0_20px_40px_rgba(139,92,246,0.12)] ${isDark ? "border-violet-400/30 bg-gradient-to-br from-zinc-900 via-violet-950/80 to-zinc-900" : "border-violet-200 bg-gradient-to-br from-white via-fuchsia-50 to-violet-50"}`} style={{ "--delay": "240ms" }}>
            <p className={`text-xl leading-10 ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
              Elementum delivered a cleaner design system and a more polished
              interface. The result felt calm, premium, and easy to use from
              the first screen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
