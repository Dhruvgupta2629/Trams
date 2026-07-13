const Footer = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className={`animate-fade-up relative mt-4 overflow-hidden px-5 pb-12 pt-16 sm:px-8 lg:px-12 ${isDark ? "bg-[#111827]" : "bg-[#dfeedd]"}`}
      style={{ "--delay": "80ms" }}
    >
      <div className={`absolute inset-0 ${isDark ? "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_24%)]" : "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.5),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_24%)]"}`} />
      <div className="animate-drift absolute right-6 top-8 h-28 w-12 rounded-[999px] bg-gradient-to-b from-fuchsia-500 via-violet-600 to-indigo-700 shadow-[0_12px_30px_rgba(99,102,241,0.25)]" />
      <div className={`absolute left-8 top-10 hidden h-14 w-14 rotate-12 rounded-[1.3rem] border lg:block ${isDark ? "border-emerald-300/50 bg-gradient-to-br from-emerald-300/30 to-lime-300/20" : "border-emerald-300/70 bg-gradient-to-br from-emerald-200/70 to-lime-200/70"}`} />
      <div className={`absolute bottom-10 right-12 hidden h-16 w-16 rounded-full border lg:block ${isDark ? "border-pink-300/50 bg-gradient-to-br from-pink-300/30 to-rose-300/20" : "border-pink-300/70 bg-gradient-to-br from-pink-200/70 to-rose-200/70"}`} />
      <div className="mx-auto max-w-4xl text-center">
        <h2 className={`animate-fade-up text-[clamp(2.5rem,4vw,4.8rem)] leading-[0.98] tracking-[-0.08em] ${isDark ? "text-zinc-50" : "text-zinc-900"}`} style={{ "--delay": "120ms" }}>
          Subscribe to <br /> our newsletter
        </h2>
        <p className={`animate-fade-up mx-auto mt-4 max-w-2xl text-xl leading-10 ${isDark ? "text-zinc-300" : "text-zinc-700"}`} style={{ "--delay": "200ms" }}>
          Get product updates, design ideas, and project notes in a short
          monthly email.
        </p>
        <button
          type="button"
          className="animate-fade-up mt-6 rounded-full bg-zinc-900 px-9 py-4 text-lg font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-700"
          style={{ "--delay": "280ms" }}
        >
          Subscribe
        </button>
      </div>

      <footer className={`mx-auto mt-14 grid max-w-7xl gap-10 border-t pt-8 text-lg sm:grid-cols-2 lg:grid-cols-4 ${isDark ? "border-white/10 text-zinc-300" : "border-zinc-900/10 text-zinc-700"}`}>
        <div>
          <h3 className={`mb-4 font-semibold uppercase tracking-[0.18em] ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
            Company
          </h3>
          <ul className="space-y-2">
            <li>Team</li>
            <li>Studio</li>
            <li>Work</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className={`mb-4 font-semibold uppercase tracking-[0.18em] ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
            Terms & Policies
          </h3>
          <ul className="space-y-2">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookies</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3 className={`mb-4 font-semibold uppercase tracking-[0.18em] ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
            Follow Us
          </h3>
          <ul className="space-y-2">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Dribbble</li>
          </ul>
        </div>
        <div>
          <h3 className={`mb-4 font-semibold uppercase tracking-[0.18em] ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
            Office
          </h3>
          <p className="leading-8">
            1296 Madison Ave
            <br />
            New York, NY 10028
            <br />
            contact@elementum.com
          </p>
        </div>
      </footer>

      <div className={`mx-auto mt-8 max-w-7xl border-t pt-4 text-center text-lg tracking-[0.12em] ${isDark ? "border-white/10 text-zinc-400" : "border-zinc-900/5 text-zinc-600"}`}>
        &copy; 2026 Elementum International
      </div>
    </section>
  );
};

export default Footer;
