import Highlight from "./Highlight";

function ServicesSection({ onNavigate, theme }) {
  const isDark = theme === "dark";

  return (
    <section
      id="services"
      className="grid gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12"
    >
      <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start">
        <div className="animate-float-soft absolute -left-3 top-4 hidden h-20 w-20 rounded-full border border-emerald-300/70 bg-[radial-gradient(circle,rgba(187,247,208,0.85),transparent_70%)] lg:block" />
        <div className="animate-float-soft absolute left-6 top-8 hidden h-10 w-10 rounded-full bg-gradient-to-br from-orange-300 via-rose-300 to-pink-400 shadow-[0_8px_18px_rgba(244,114,182,0.25)] lg:block" />
        <div className="animate-drift absolute right-2 bottom-2 hidden h-12 w-12 rounded-[1rem] border border-amber-300/70 bg-gradient-to-br from-amber-200/70 to-orange-300/70 lg:block" />
        <div className={`animate-pulse-scale animate-float-soft relative h-72 w-72 overflow-hidden rounded-bl-[5rem] rounded-tr-[5rem] border shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem] ${isDark ? "border-white/10 bg-zinc-900/80" : "border-zinc-200 bg-zinc-100"}`}>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
            alt="Creative team working together"
          />
        </div>
        <div className="animate-drift absolute left-6 top-8 h-28 w-28 -rotate-45 bg-gradient-to-br from-pink-400 to-violet-600 opacity-90" />
        <div className="animate-fade-in absolute left-24 top-40 h-0 w-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[38px] border-b-orange-300" style={{ "--delay": "180ms" }} />
      </div>

      <div className="order-1 max-w-md lg:order-2 lg:ml-auto">
        <h2
          className={`animate-fade-up text-[clamp(2.5rem,4vw,4.8rem)] leading-[0.98] tracking-[-0.08em] ${isDark ? "text-zinc-50" : "text-zinc-900"}`}
          style={{ "--delay": "80ms" }}
        >
          See how we can help you <Highlight tone="yellow">progress</Highlight>
        </h2>
        <p
          className={`animate-fade-up mt-4 text-xl leading-10 sm:text-2xl ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
          style={{ "--delay": "160ms" }}
        >
          The composition stays airy, editorial, and centered. Images and
          accent shapes echo the reference while the spacing behaves like a
          real website.
        </p>
        <a
          href="#contact"
          className={`animate-fade-up hover-lift mt-5 inline-block border-b pb-1 text-base font-semibold uppercase tracking-[0.16em] transition ${isDark ? "border-white/20 text-zinc-100 hover:text-violet-300" : "border-zinc-900 text-zinc-900 hover:text-violet-600"}`}
          style={{ "--delay": "240ms" }}
          onClick={onNavigate}
        >
          Our blueprint
        </a>
      </div>
    </section>
  );
}

export default ServicesSection;
