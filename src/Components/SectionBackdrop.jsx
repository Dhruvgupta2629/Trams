const variants = {
  hero: (
    <>
      <div className="absolute left-[-4rem] top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.16)_0%,rgba(244,114,182,0.05)_45%,transparent_70%)] blur-2xl" />
      <div className="absolute right-[-2rem] top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.16)_0%,rgba(168,85,247,0.05)_48%,transparent_72%)] blur-2xl" />
      <div className="absolute left-[8%] top-[14rem] hidden h-20 w-20 rounded-full border border-zinc-300/70 lg:block" />
      <div className="absolute right-[10%] top-[16rem] hidden h-10 w-10 rotate-45 rounded-[0.8rem] bg-gradient-to-br from-amber-200/70 to-rose-300/70 lg:block" />
      <div className="absolute left-1/2 top-[18rem] h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent" />
    </>
  ),
  about: (
    <>
      <div className="absolute left-[-3rem] top-16 h-40 w-40 rounded-[40%_60%_55%_45%] bg-gradient-to-br from-emerald-200/45 to-transparent blur-xl" />
      <div className="absolute right-[-1rem] top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,transparent_68%)]" />
      <div className="absolute left-[16%] top-[7rem] hidden h-16 w-16 rounded-[1.4rem] border border-zinc-300/70 lg:block" />
      <div className="absolute right-[14%] bottom-[2rem] hidden h-12 w-12 rounded-full bg-gradient-to-br from-violet-200/80 to-fuchsia-200/80 lg:block" />
      <div className="absolute left-1/2 bottom-6 h-px w-[74%] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </>
  ),
  services: (
    <>
      <div className="absolute right-[-2rem] top-10 h-52 w-52 rotate-45 rounded-[2.5rem] bg-gradient-to-br from-pink-200/50 via-violet-200/40 to-orange-200/30 blur-xl" />
      <div className="absolute left-[-3rem] bottom-[-2rem] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.12)_0%,transparent_70%)]" />
      <div className="absolute left-[12%] bottom-[2rem] hidden h-14 w-14 rounded-full border border-zinc-300/70 lg:block" />
      <div className="absolute right-[16%] top-[4rem] hidden h-8 w-8 rotate-45 rounded-sm border border-zinc-300/70 lg:block" />
      <div className="absolute left-1/2 top-8 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </>
  ),
  offers: (
    <>
      <div className="absolute right-[-2rem] top-14 h-40 w-40 rotate-45 rounded-[1.5rem] bg-gradient-to-br from-violet-100/70 via-fuchsia-100/50 to-transparent blur-xl" />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute left-[10%] top-[6rem] h-20 w-20 rounded-full border border-zinc-200/80" />
      <div className="absolute right-[12%] top-[4rem] hidden h-10 w-10 rounded-full bg-gradient-to-br from-amber-200/80 to-rose-200/80 lg:block" />
    </>
  ),
  testimonials: (
    <>
      <div className="absolute left-[-2rem] top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.12)_0%,transparent_68%)] blur-xl" />
      <div className="absolute right-[-2rem] bottom-6 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] blur-xl" />
      <div className="absolute left-[10%] top-[3rem] hidden h-16 w-16 rotate-12 rounded-[1.2rem] border border-zinc-300/70 lg:block" />
      <div className="absolute right-[18%] bottom-[2rem] hidden h-12 w-12 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.18),transparent_70%)] lg:block" />
      <div className="absolute left-1/2 top-10 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </>
  ),
  footer: (
    <>
      <div className="absolute left-[-2rem] top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.18)_0%,rgba(34,197,94,0.07)_45%,transparent_70%)] blur-2xl" />
      <div className="absolute right-[-1rem] top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] blur-2xl" />
      <div className="absolute left-[16%] top-[2.5rem] hidden h-10 w-10 rotate-45 rounded-[0.8rem] border border-zinc-900/10 lg:block" />
      <div className="absolute right-[12%] bottom-[2rem] hidden h-16 w-16 rounded-full border border-zinc-900/10 lg:block" />
      <div className="absolute left-1/2 top-0 h-px w-[76%] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-900/10 to-transparent" />
    </>
  ),
};

function SectionBackdrop({ variant = "hero", className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {variants[variant] ?? null}
    </div>
  );
}

export default SectionBackdrop;
