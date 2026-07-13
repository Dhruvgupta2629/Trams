import Highlight from "./Highlight";

const offerItems = [
  { index: "01", title: "Collaborative partnerships", eyebrow: "Architecture" },
  { index: "02", title: "Interface systems that scale", eyebrow: "Design" },
  { index: "03", title: "Digital products with clarity", eyebrow: "Evolution" },
];

function OffersSection() {
  return (
    <section id="testimonials" className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="relative pb-6">
        <div className="absolute -right-2 top-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.2),transparent_70%)]" />
        <div className="absolute left-0 top-12 hidden h-12 w-12 rotate-45 rounded-[1rem] border border-zinc-300/80 md:block" />
        <h2
          className="animate-fade-up text-[clamp(2.4rem,3.8vw,4.6rem)] leading-[0.98] tracking-[-0.08em] text-zinc-900"
          style={{ "--delay": "80ms" }}
        >
          What we <Highlight tone="green">can</Highlight> offer you!
        </h2>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-zinc-200" />
      </div>

      <div className="divide-y divide-zinc-200">
        {offerItems.map((item, index) => (
          <div
            key={item.index}
            className="animate-fade-up hover-lift relative grid gap-4 py-7 pl-6 text-zinc-900 md:grid-cols-[1fr_auto] md:items-center"
            style={{ "--delay": `${120 + index * 90}ms` }}
          >
            <div className="animate-glow absolute left-0 top-7 h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-[0_0_12px_rgba(236,72,153,0.35)]" />
            <div className="text-lg uppercase tracking-[0.12em] text-zinc-700">
              {item.index} / {item.eyebrow}
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                {item.title}
              </div>
              <span className="text-zinc-500">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OffersSection;
