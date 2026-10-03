import { useState } from "react";

const Home = ({ setCurrentPage, isLoggedIn }) => {
  // 3D tilt effect state for hero card
  const [tilt, setTilt] = useState({ rotateX: -6, rotateY: 10 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: -6, rotateY: 10 });
  };

  const features = [
    {
      icon: "⚡",
      title: "Instant Cloud Sync",
      desc: "Real-time note synchronization backed by responsive APIs. Your ideas stay fresh and updated instantly."
    },
    {
      icon: "🔒",
      title: "Bank-Grade Security",
      desc: "Protected by cryptographically signed JWT cookies and bcrypt password hashing for complete privacy."
    },
    {
      icon: "✍️",
      title: "Effortless Control",
      desc: "Create and delete notes in milliseconds with clean, focused micro-interactions and zero clutter."
    },
    {
      icon: "🌌",
      title: "Obsidian & Gold Theme",
      desc: "Carefully calibrated deep blacks and warm metallic gold hues designed to inspire focus and luxury."
    },
    {
      icon: "♾️",
      title: "Forever Storage",
      desc: "Reliable database persistence so your journal, inspirations, and daily checklists remain safe forever."
    },
    {
      icon: "📱",
      title: "Fluid Across Screens",
      desc: "Engineered to deliver a fast, responsive, and gorgeous experience across mobile, tablet, and desktop."
    }
  ];

  return (
    <div className="pt-6 pb-24 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col gap-20">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-6 sm:pt-12">
        {/* Left Column: Headline and CTA */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl">
          {/* Luxury Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium tracking-wider uppercase shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            The Obsidian & Gold Experience
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Capture Thoughts in{" "}
            <span className="font-luxury gold-gradient-text block mt-1">
              Pure Elegance
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg">
            Smart Notes Manager engineered for speed, privacy, and distinction. 
            Archive your inspirations, plans, and daily logs in a personal golden vault.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <button
              type="button"
              onClick={() => setCurrentPage(isLoggedIn ? "notes" : "login")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{isLoggedIn ? "Go to My Notes" : "Try Now — Free"}</span>
              <span className="text-lg">→</span>
            </button>

            {!isLoggedIn && (
              <button
                type="button"
                onClick={() => setCurrentPage("login")}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-amber-200/90 border border-amber-500/30 hover:border-amber-400/60 hover:bg-amber-400/10 transition-all duration-200 cursor-pointer"
              >
                Sign In to Vault
              </button>
            )}
          </div>

          {/* Social Proof Counters */}
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-zinc-800/80 w-full max-w-md">
            <div>
              <div className="font-luxury text-xl sm:text-2xl font-bold gold-gradient-text">100%</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">Free & Secure</div>
            </div>
            <div>
              <div className="font-luxury text-xl sm:text-2xl font-bold gold-gradient-text">&lt; 30ms</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">Sync Latency</div>
            </div>
            <div>
              <div className="font-luxury text-xl sm:text-2xl font-bold gold-gradient-text">Forever</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">Cloud Storage</div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Hero Card / Notebook Mockup */}
        <div className="flex-1 w-full flex justify-center items-center perspective-1000 py-6">
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovered ? 1.04 : 1}, ${isHovered ? 1.04 : 1}, 1)`,
              transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"
            }}
            className="relative transform-style-3d cursor-grab active:cursor-grabbing w-full max-w-[380px] sm:max-w-[430px]"
          >
            {/* Ambient Gold Glow Behind Card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-600/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            {/* 3D Notebook Main Slab */}
            <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-6 border-2 border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.15)] flex flex-col gap-5 overflow-hidden">
              {/* Metallic Spine & Gold Accent Lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500" />
              <div className="absolute top-0 left-0 bottom-0 w-2.5 bg-gradient-to-b from-amber-600 via-yellow-500 to-amber-700 opacity-60" />

              {/* Notebook Header Bar */}
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3 pl-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="font-luxury text-xs text-amber-300/80 tracking-widest uppercase">
                  OBSIDIAN VAULT
                </div>
              </div>

              {/* Embossed Gold Card Title */}
              <div className="pl-2">
                <div className="text-xs text-amber-500 uppercase tracking-widest font-semibold">Pinned Entry</div>
                <h3 className="font-luxury text-2xl font-bold gold-gradient-text mt-0.5">
                  The Golden Blueprint
                </h3>
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  "Excellence is not an accident; it is the culmination of organized thoughts, distilled into action."
                </p>
              </div>


              <div className="pl-2 flex flex-col gap-2 pt-1">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>End-to-End Session Guard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Zero-lag Note Creation & Deletion</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Obsidian Dark Mode Optimized</span>
                </div>
              </div>

              {/* 3D Floating Pill in Front (TranslateZ) */}
              <div 
                style={{ transform: "translateZ(35px)" }}
                className="mt-2 self-end inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-400/50 text-amber-300 text-xs font-semibold shadow-[0_5px_15px_rgba(0,0,0,0.6)]"
              >
                <span>✦ Move mouse to tilt 3D</span>
              </div>
            </div>

            {/* Floating 3D Badge 1 (Top Right) */}
            <div
              style={{ transform: "translateZ(50px)" }}
              className="absolute -top-4 -right-4 bg-zinc-950/95 border border-amber-500/50 text-amber-300 px-3 py-1.5 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.8)] text-xs font-semibold flex items-center gap-1.5 pointer-events-none animate-float"
            >
              <span>⚡</span>
              <span>Cloud Synchronized</span>
            </div>

            {/* Floating 3D Badge 2 (Bottom Left) */}
            <div
              style={{ transform: "translateZ(45px)" }}
              className="absolute -bottom-4 -left-4 bg-zinc-950/95 border border-amber-500/50 text-amber-300 px-3 py-1.5 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.8)] text-xs font-semibold flex items-center gap-1.5 pointer-events-none animate-float-delayed"
            >
              <span>🔒</span>
              <span>Encrypted Vault</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col items-center gap-12 pt-12 border-t border-zinc-900">
        <div className="text-center max-w-2xl flex flex-col gap-3">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            UNCOMPROMISED ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Designed for <span className="font-luxury gold-gradient-text">Clarity & Power</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Every feature is fine-tuned to deliver an unmatched, frictionless note-taking sanctuary.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-zinc-950/70 p-6 border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(245,158,11,0.12)] hover:-translate-y-1 flex flex-col gap-4 overflow-hidden"
            >

              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                {item.icon}
              </div>

              <div>
                <h3 className="font-luxury text-lg font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-amber-500/30 p-8 sm:p-12 text-center flex flex-col items-center gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/15 blur-3xl pointer-events-none rounded-full" />
        
        <h3 className="font-luxury text-3xl sm:text-4xl font-bold gold-gradient-text relative z-10">
          Elevate Your Thoughts Today
        </h3>
        <p className="text-zinc-400 max-w-lg text-sm sm:text-base relative z-10">
          Join notebooks crafted in gold and obsidian. Everything is organized, secure, and ready whenever inspiration strikes.
        </p>
        <button
          type="button"
          onClick={() => setCurrentPage(isLoggedIn ? "notes" : "login")}
          className="px-8 py-3.5 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer relative z-10"
        >
          {isLoggedIn ? "Open Notebook" : "Create Free Account"}
        </button>
      </section>
    </div>
  );
};

export default Home;
