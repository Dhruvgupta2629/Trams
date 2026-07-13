import { useEffect, useState } from "react";

function BackgroundArt() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const offsetX = (pointer.x / window.innerWidth - 0.5) * 20;
  const offsetY = (pointer.y / window.innerHeight - 0.5) * 20;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.05),transparent_28%),linear-gradient(180deg,#242424_0%,#111_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_0_12%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.04),transparent_0_10%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.04),transparent_0_11%)] opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20" />

      <div className="absolute left-[3%] top-16 hidden md:block">
        <svg width="68" height="180" viewBox="0 0 68 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 4C20 16 18 46 48 58C78 70 70 102 18 110C-6 114 -4 142 28 176" stroke="rgba(255,255,255,0.62)" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M54 10C13 22 12 47 38 57C63 67 58 98 17 106C-5 111 -3 138 24 168" stroke="rgba(244,114,182,0.45)" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="absolute left-3 top-28 hidden h-28 w-10 rounded-[2rem] border border-white/20 md:block">
        <div className="absolute left-2 top-2 h-24 w-6 rounded-[2rem] border border-rose-300/70 border-r-transparent border-b-transparent" />
      </div>

      <div className="absolute left-[11%] top-[14rem] hidden h-16 w-16 rounded-full border border-white/20 lg:block">
        <div className="absolute inset-3 rounded-full border border-fuchsia-300/60" />
      </div>

      <div className="animate-pulse-scale absolute right-[4%] top-24 h-14 w-8 rounded-[60%_40%_60%_40%] bg-gradient-to-b from-violet-300 via-fuchsia-400 to-violet-700 opacity-85" />

      <div className="absolute right-[14%] top-[8rem] hidden h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(248,113,113,0.35)_0%,rgba(248,113,113,0.08)_45%,transparent_70%)] lg:block" />

      <div
        className="animate-[drift_9s_ease-in-out_infinite] absolute left-[5%] top-[12rem] hidden h-px w-[24rem] rotate-[-12deg] bg-gradient-to-r from-transparent via-pink-400/70 to-transparent lg:block"
        style={{ transform: `translate(${offsetX * 0.6}px, ${offsetY * 0.5}px) rotate(-12deg)` }}
      />
      <div
        className="animate-[drift_11s_ease-in-out_infinite] absolute right-[8%] top-[20rem] hidden h-px w-[18rem] rotate-[16deg] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent lg:block"
        style={{ transform: `translate(${-offsetX * 0.5}px, ${offsetY * 0.4}px) rotate(16deg)` }}
      />
      <div
        className="animate-[drift_10s_ease-in-out_infinite] absolute left-[16%] top-[33rem] hidden h-px w-[20rem] rotate-[8deg] bg-gradient-to-r from-transparent via-amber-300/70 to-transparent lg:block"
        style={{ transform: `translate(${offsetX * 0.4}px, ${-offsetY * 0.3}px) rotate(8deg)` }}
      />
      <div className="animate-[drift_8s_ease-in-out_infinite] absolute right-[12%] top-[44rem] hidden h-px w-[16rem] rotate-[-10deg] bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent lg:block" />

      <div
        className="animate-[pulse-scale_5s_ease-in-out_infinite] absolute left-[8%] top-[24rem] hidden h-24 w-24 rounded-full border border-pink-400/30 lg:block"
        style={{ transform: `translate(${offsetX * 0.35}px, ${offsetY * 0.3}px)` }}
      />
      <div
        className="animate-[pulse-scale_6s_ease-in-out_infinite] absolute right-[18%] top-[35rem] hidden h-16 w-16 rounded-full border border-cyan-400/30 lg:block"
        style={{ transform: `translate(${-offsetX * 0.25}px, ${-offsetY * 0.4}px)` }}
      />

      <svg className="animate-[float-soft_7s_ease-in-out_infinite] absolute left-[2%] top-[26rem] hidden h-40 w-40 opacity-80 lg:block" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 150C50 90 110 60 175 35" stroke="rgba(244,114,182,0.7)" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 170C72 125 122 110 180 86" stroke="rgba(56,189,248,0.55)" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <svg className="animate-[float-soft_8s_ease-in-out_infinite] absolute right-[3%] bottom-[16rem] hidden h-44 w-44 opacity-80 lg:block" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 185C75 145 118 118 192 52" stroke="rgba(251,191,36,0.6)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M56 196C92 166 136 143 188 100" stroke="rgba(168,85,247,0.6)" strokeWidth="2.4" strokeLinecap="round" />
      </svg>

      <div
        className="animate-wobble absolute right-10 top-[27rem] h-0 w-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-violet-500/80"
        style={{ transform: `translate(${offsetX * 0.8}px, ${offsetY * 0.6}px)` }}
      />

      <div
        className="animate-[wobble-slow_8s_ease-in-out_infinite] absolute right-[18%] top-[39rem] hidden h-24 w-24 rotate-45 rounded-[2rem] bg-gradient-to-br from-orange-300 via-pink-300 to-fuchsia-500 opacity-70 lg:block"
        style={{ transform: `translate(${-offsetX * 0.6}px, ${offsetY * 0.7}px) rotate(45deg)` }}
      />

      <div
        className="animate-float-soft absolute left-[6%] top-[41rem] h-0 w-0 border-l-[34px] border-l-transparent border-r-[34px] border-r-transparent border-b-[58px] border-b-rose-400/80"
        style={{ "--delay": "700ms" }}
      />

      <div className="absolute left-[18%] top-[59rem] hidden h-20 w-20 rounded-full border border-white/18 lg:block">
        <div className="absolute inset-4 rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,0.45),rgba(168,85,247,0.55),rgba(244,114,182,0.5),rgba(255,255,255,0.45))]" />
      </div>

      <div className="animate-[wobble-slow_7s_ease-in-out_infinite] absolute right-[7%] bottom-[18rem] h-14 w-14 rotate-45 bg-[conic-gradient(from_45deg,rgba(244,114,182,0.9),rgba(168,85,247,0.95),rgba(236,72,153,0.9),rgba(244,114,182,0.9))] opacity-70" />

      <div className="absolute left-[10%] bottom-[11rem] hidden h-24 w-24 rounded-[35%_65%_38%_62%] border border-white/18 lg:block">
        <div className="absolute inset-3 rounded-[35%_65%_38%_62%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_60%)]" />
      </div>

      <div className="absolute bottom-20 right-12 hidden h-16 w-16 md:block">
        <div className="absolute inset-0 rotate-45 bg-white/65 [clip-path:polygon(50%_0%,62%_38%,100%_50%,62%_62%,50%_100%,38%_62%,0%_50%,38%_38%)]" />
      </div>

      <div className="absolute left-1/2 top-[30rem] hidden h-px w-[72%] -translate-x-1/2 bg-white/6 lg:block" />
      <div className="absolute left-1/2 top-[18rem] hidden h-[1px] w-[60%] -translate-x-1/2 bg-white/8 lg:block" />
      <div className="absolute left-1/2 top-[48rem] hidden h-[1px] w-[54%] -translate-x-1/2 bg-white/8 lg:block" />
      <div className="absolute left-1/2 top-[40rem] hidden h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent lg:block" />
      <div className="absolute left-1/2 top-[56rem] hidden h-px w-[64%] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent lg:block" />
    </div>
  );
}

export default BackgroundArt;
