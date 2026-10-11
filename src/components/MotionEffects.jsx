import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Users } from "lucide-react";

/**
 * 1. Expressive Kinetic Typography Headline Component
 * Animates each word in 3D perspective on scroll + interactive wave on hover
 */
export function ExpressiveKineticText({ 
  text, 
  highlightWords = [], 
  highlightClass = "text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600",
  className = ""
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap justify-center gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9₹+-]/g, "");
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase() || hw.toLowerCase() === word.toLowerCase()
        );
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 24, rotateX: -65, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: i * 0.055,
              type: "spring",
              stiffness: 190,
              damping: 16
            }}
            whileHover={{
              y: -4,
              scale: 1.07,
              rotateZ: i % 2 === 0 ? -1.5 : 1.5,
              transition: { duration: 0.18 }
            }}
            className={`inline-block cursor-default select-none ${
              isHighlighted ? highlightClass : ""
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}

/**
 * 2. Expressive Kinetic Typography Marquee Ribbon
 * Infinite horizontal kinetic ticker with alternating filled & outlined display typography
 */
export function KineticMarqueeStrip({ 
  items = [
    "SATYARTHI SOLAR SOLUTION",
    "2500+ HAPPY FAMILIES",
    "UPNEDA VENDOR GKP2604066741",
    "₹1,08,000 DIRECT DBT SUBSIDY",
    "3D AR/VR SOLAR ENGINEERING",
    "25-YEAR PERFORMANCE WARRANTY"
  ],
  dark = false
}) {
  const repeated = [...items, ...items];
  return (
    <div
      className={`overflow-hidden py-2.5 border-y select-none ${
        dark
          ? "bg-slate-950/90 border-slate-800/80 text-white"
          : "bg-slate-900 border-slate-800 text-white"
      }`}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-8 whitespace-nowrap w-max"
      >
        {repeated.map((phrase, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span
              className={`text-xs sm:text-sm font-black tracking-widest uppercase ${
                idx % 2 === 0
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400"
                  : "text-slate-300"
              }`}
            >
              {phrase}
            </span>
            <span className="text-amber-400 text-xs">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * 3. Real-Time Collaborative Engineering Cursors Overlay
 * Floating multi-user style cursors gliding across sections
 */
export function CollaborativeCursorsOverlay({ 
  cursors = [
    {
      name: "Er. Satyaprakash",
      badge: "Verified EPC Lead",
      color: "bg-emerald-500 text-slate-950",
      pathX: ["6%", "22%", "14%", "6%"],
      pathY: ["16%", "38%", "62%", "16%"],
      duration: 15
    },
    {
      name: "UPNEDA Audit • GKP",
      badge: "Subsidy Approved ✓",
      color: "bg-sky-500 text-slate-950",
      pathX: ["84%", "68%", "78%", "84%"],
      pathY: ["22%", "52%", "28%", "22%"],
      duration: 18
    }
  ]
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden hidden lg:block">
      {cursors.map((c, idx) => (
        <motion.div
          key={idx}
          animate={{ left: c.pathX, top: c.pathY }}
          transition={{ duration: c.duration, repeat: Infinity, ease: "easeInOut" }}
          className="absolute flex items-start gap-1 opacity-85"
        >
          <svg className="w-4 h-4 text-emerald-400 -rotate-12 drop-shadow-md shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2l16 10-7 2-3 7L4 2z" />
          </svg>
          <div className={`px-2 py-0.5 rounded-full text-[9.5px] font-black shadow-lg ${c.color} whitespace-nowrap flex items-center gap-1`}>
            <span>{c.name}</span>
            <span className="opacity-75">• {c.badge}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/**
 * 4. Interactive ⚡ Appreciation / Verification Particle Burst Button
 * Allows visitors to click ⚡ on any card across the site to trigger floating particle bursts
 */
export function InteractiveZapBurstButton({ 
  initialCount = 48, 
  label = "Verified",
  dark = false 
}) {
  const [count, setCount] = useState(initialCount);
  const [bursts, setBursts] = useState([]);

  const handleTrigger = (e) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
    const burstId = Date.now() + Math.random();
    setBursts((prev) => [...prev.slice(-4), burstId]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b !== burstId));
    }, 900);
  };

  return (
    <div className="relative inline-flex items-center">
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.88 }}
        onClick={handleTrigger}
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-black transition cursor-pointer border ${
          dark
            ? "bg-amber-400/20 hover:bg-amber-400/35 text-amber-300 border-amber-400/40"
            : "bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300/80 shadow-2xs"
        }`}
        title="Click to send live ⚡ appreciation"
      >
        <Zap className={`w-3 h-3 ${dark ? "fill-amber-300 text-amber-300" : "fill-amber-500 text-amber-600"}`} />
        <span>{count}</span>
        {label && <span className="opacity-80 hidden sm:inline">• {label}</span>}
      </motion.button>

      {/* Floating Particle Burst */}
      <AnimatePresence>
        {bursts.map((bId) => (
          <motion.span
            key={bId}
            initial={{ opacity: 1, y: 0, scale: 0.7 }}
            animate={{ opacity: 0, y: -34, scale: 1.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black text-amber-500 whitespace-nowrap z-30 drop-shadow-xs"
          >
            ⚡ +1
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

/**
 * 5. Real-Time Collaborative Activity Ticker Pill
 * Can be placed in headers/banners of any section or subpage
 */
const LIVE_COLLAB_FEED = [
  "🟢 Er. Satyaprakash inspecting 5kW On-Grid Plant in Taramandal, Gorakhpur",
  "⚡ ₹1,08,000 PM Surya Ghar Subsidy credited to Rajesh V. (Padrauna)",
  "🔋 3kW Hybrid Solar PCU commissioned in Rajendra Nagar, Gorakhpur",
  "❄️ 5-Star Solar Inverter AC + 5kW Solar Combo booked at Motiram Adda Showroom",
  "🌾 15 HP Solar Aata Chakki VFD commissioned in Kasia, Kushinagar"
];

export function LiveActivityStreamBadge({ dark = false }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % LIVE_COLLAB_FEED.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold border max-w-full overflow-hidden ${
        dark
          ? "bg-slate-900/85 border-emerald-500/30 text-slate-200"
          : "bg-white border-emerald-200 text-slate-700 shadow-2xs"
      }`}
    >
      <span className="flex items-center gap-1 text-emerald-500 font-black uppercase tracking-wider shrink-0">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <Users className="w-3 h-3" />
        <span className="hidden sm:inline">Live Hub:</span>
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="truncate font-semibold"
        >
          {LIVE_COLLAB_FEED[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
