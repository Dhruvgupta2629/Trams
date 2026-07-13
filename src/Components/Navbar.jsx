import React from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ menuOpen, onToggle, onNavigate, theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className={`animate-fade-in sticky top-0 z-30 border-b ${isDark ? "border-white/10 bg-[#111827]" : "border-zinc-900/10 bg-[#fbf9f4]"}`}>
      <div className={`flex w-full items-center justify-between px-5 py-6 text-lg tracking-[0.08em] sm:px-8 lg:px-12 ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>
        <a
          href="#home"
          className={`text-xl font-semibold uppercase tracking-[0.14em] ${isDark ? "text-zinc-50" : "text-zinc-950"}`}
          onClick={onNavigate}
        >
          Elementum
        </a>

        <nav className="hidden gap-8 text-xl md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition ${isDark ? "hover:text-white" : "hover:text-zinc-950"}`}
              onClick={onNavigate}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            onClick={onToggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition ${isDark ? "border-white/10 bg-white/10 text-zinc-100 hover:bg-white/20" : "border-zinc-900/10 bg-white text-zinc-900 hover:bg-zinc-100"}`}
          >
            {isDark ? "☀︎" : "☾"}
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative h-6 w-6 md:hidden"
            onClick={onToggle}
          >
            <span className={`absolute left-0 top-1.5 h-px w-6 ${isDark ? "bg-zinc-100" : "bg-zinc-800"}`} />
            <span className={`absolute left-0 top-3 h-px w-5 ${isDark ? "bg-zinc-100" : "bg-zinc-800"}`} />
            <span className={`absolute left-0 top-4.5 h-px w-6 ${isDark ? "bg-zinc-100" : "bg-zinc-800"}`} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className={`animate-fade-up border-t px-5 pb-5 md:hidden sm:px-8 ${isDark ? "border-white/10" : "border-zinc-900/10"}`}>
          <nav className={`flex w-full flex-col gap-3 text-xl uppercase tracking-[0.12em] ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-5 py-4 font-medium transition ${isDark ? "bg-white/10 hover:bg-white/20 hover:text-white" : "bg-zinc-50 hover:bg-white hover:text-zinc-950"}`}
                onClick={onNavigate}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
