import Highlight from "./Highlight";
import AvatarGroup from "./AvatarGroup";
import TypewriterLine from "./TypewriterLine";
import SectionBackdrop from "./SectionBackdrop";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex-1 overflow-hidden px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-12"
    >
      <SectionBackdrop variant="hero" />
      <div className="absolute right-5 top-8 h-12 w-7 rounded-[60%_40%_60%_40%] bg-gradient-to-b from-fuchsia-500 via-violet-500 to-indigo-700 opacity-95 shadow-[0_10px_25px_rgba(139,92,246,0.35)] sm:right-10 sm:top-10 sm:h-14 sm:w-8" />
      <div className="absolute left-0 top-20 hidden h-24 w-10 rounded-full border border-pink-300/80 bg-gradient-to-b from-rose-200/70 to-transparent md:block" />

      <div className="relative mx-auto max-w-6xl text-center">
        <p
          className="animate-fade-up text-base uppercase tracking-[0.2em] text-zinc-700 sm:text-lg"
          style={{ "--delay": "80ms" }}
        >
          A clean editorial landing page
        </p>
        <h1
          className="animate-fade-up mt-6 text-[clamp(3.4rem,6.5vw,7.2rem)] leading-[0.88] tracking-[-0.09em] text-zinc-900"
          style={{ "--delay": "180ms" }}
        >
          The <Highlight tone="pink">thinkers and</Highlight>
          <br className="hidden sm:block" />
          doers were <Highlight tone="pink">changing</Highlight>
          <br className="hidden sm:block" />
          the <Highlight tone="green">status</Highlight> quo with
        </h1>
        <p
          className="animate-fade-up mx-auto mt-5 max-w-3xl text-xl leading-10 text-zinc-700 sm:text-2xl"
          style={{ "--delay": "280ms" }}
        >
          We design sharp, calm digital experiences for teams that want
          clarity. The layout stays editorial, but the structure now behaves
          like a maintainable full-screen site.
        </p>
        <div className="animate-fade-up hover-lift" style={{ "--delay": "380ms" }}>
          <TypewriterLine />
        </div>

        <div
          className="animate-fade-up hover-lift"
          style={{ "--delay": "480ms" }}
        >
          <AvatarGroup />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
