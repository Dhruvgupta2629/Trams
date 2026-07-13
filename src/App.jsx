import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import OffersSection from "./Components/OffersSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import Footer from "./Components/Footer";
import BackgroundArt from "./Components/BackgroundArt";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  const closeMenu = () => setMenuOpen(false);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", theme);
  }, [isDark, theme]);

  return (
    <main className={`relative isolate min-h-screen w-full overflow-x-hidden antialiased ${isDark ? "bg-[#06070b]" : "bg-[#f3efe8]"}`}>
      <BackgroundArt theme={theme} />
      <div className={`relative z-10 flex min-h-screen w-full flex-col overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.35)] ${isDark ? "bg-[#0f172a] text-zinc-100" : "bg-[#fbf9f4] text-zinc-900"}`}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className={`absolute inset-0 ${isDark ? "bg-[radial-gradient(circle_at_20%_10%,rgba(244,114,182,0.12),transparent_14%),radial-gradient(circle_at_80%_16%,rgba(168,85,247,0.12),transparent_14%),radial-gradient(circle_at_50%_55%,rgba(34,197,94,0.08),transparent_18%)]" : "bg-[radial-gradient(circle_at_20%_10%,rgba(244,114,182,0.08),transparent_14%),radial-gradient(circle_at_80%_16%,rgba(168,85,247,0.08),transparent_14%),radial-gradient(circle_at_50%_55%,rgba(34,197,94,0.06),transparent_18%)]"}`} />
          <div className={`absolute left-[4%] top-[7rem] hidden h-28 w-28 rounded-full border md:block ${isDark ? "border-white/10" : "border-zinc-900/10"}`} />
          <div className={`absolute left-[8%] top-[20rem] hidden h-0 w-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-b-[46px] md:block ${isDark ? "border-b-rose-300/80" : "border-b-rose-300/60"}`} />
          <div className="absolute right-[6%] top-[23rem] hidden h-24 w-24 rotate-45 bg-gradient-to-br from-violet-400 via-fuchsia-500 to-orange-300 opacity-75 lg:block" />
          <div className={`absolute right-[10%] top-[52rem] hidden h-16 w-16 rounded-[32%_68%_34%_66%] border lg:block ${isDark ? "border-white/10" : "border-zinc-900/10"}`} />
          <div className={`absolute left-[10%] bottom-[18rem] hidden h-20 w-20 rounded-full border lg:block ${isDark ? "border-white/10" : "border-zinc-900/10"}`} />
          <div className={`absolute right-[18%] bottom-[14rem] hidden h-[1px] w-[18rem] lg:block ${isDark ? "bg-white/10" : "bg-zinc-900/10"}`} />
          <div className={`absolute left-1/2 top-[32rem] hidden h-28 w-28 -translate-x-1/2 rounded-full border bg-[radial-gradient(circle,rgba(244,114,182,0.2),transparent_70%)] lg:block ${isDark ? "border-white/10" : "border-zinc-900/10"}`} />
          <div className={`absolute left-[18%] top-[38rem] hidden h-0 w-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[42px] lg:block ${isDark ? "border-b-amber-200/80" : "border-b-amber-200/70"}`} />
          <div className={`absolute right-[16%] top-[42rem] hidden h-20 w-20 rotate-12 rounded-[2rem] border lg:block ${isDark ? "border-white/10" : "border-zinc-900/10"}`} />
        </div>
        <Navbar
          menuOpen={menuOpen}
          onToggle={() => setMenuOpen((value) => !value)}
          onNavigate={closeMenu}
          theme={theme}
          onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
        />

        <HeroSection theme={theme} />
        <AboutSection theme={theme} onNavigate={closeMenu} />
        <ServicesSection theme={theme} onNavigate={closeMenu} />
        <OffersSection theme={theme} />
        <TestimonialsSection theme={theme} />
        <Footer theme={theme} />
      </div>
    </main>
  );
}

export default App;
