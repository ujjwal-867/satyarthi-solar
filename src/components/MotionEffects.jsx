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
  highlightClass = "text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-amber-500",
  className = ""
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap justify-center gap-x-2.5 gap-y-1 ${className}`} style={{ perspective: "800px" }}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9₹+-]/g, "");
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase() || hw.toLowerCase() === word.toLowerCase()
        );
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 24, rotateX: -60, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 15,
              delay: (i % 8) * 0.04
            }}
            whileHover={{ y: -4, scale: 1.08, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            className={`inline-block select-none ${
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
 * 2. Expressive Kinetic Typography Marquee Ribbon (Disabled to avoid duplicate marquee strips)
 */
export function KineticMarqueeStrip() {
  return null;
}

/**
 * 3. Real-Time Collaborative Engineering Cursors Overlay (Disabled per user request)
 */
export function CollaborativeCursorsOverlay() {
  return null;
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
 * 5. Real-Time Collaborative Activity Ticker Pill (Disabled per user request)
 */
export function LiveActivityStreamBadge() {
  return null;
}

