import React from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ menuOpen, onToggle, onNavigate }) {
  return (
    <header className="animate-fade-in sticky top-0 z-30 border-b border-zinc-900/10 bg-[#fbf9f4]">
      <div className="flex w-full items-center justify-between px-5 py-6 text-lg tracking-[0.08em] text-zinc-800 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="text-xl font-semibold uppercase tracking-[0.14em] text-zinc-950"
          onClick={onNavigate}
        >
          Elementum
        </a>

        <nav className="hidden gap-8 text-xl md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium transition hover:text-zinc-950"
              onClick={onNavigate}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative h-6 w-6 md:hidden"
          onClick={onToggle}
        >
          <span className="absolute left-0 top-1.5 h-px w-6 bg-zinc-800" />
          <span className="absolute left-0 top-3 h-px w-5 bg-zinc-800" />
          <span className="absolute left-0 top-4.5 h-px w-6 bg-zinc-800" />
        </button>
      </div>

      {menuOpen ? (
        <div className="animate-fade-up border-t border-zinc-900/10 px-5 pb-5 md:hidden sm:px-8">
          <nav className="flex w-full flex-col gap-3 text-xl uppercase tracking-[0.12em] text-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl bg-zinc-50 px-5 py-4 font-medium transition hover:bg-white hover:text-zinc-950"
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
