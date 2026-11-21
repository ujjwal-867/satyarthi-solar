import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

/**
 * 1. Refined Kinetic Typography Headline Component
 * Smooth, elegant fade-up kinetic typography with visible fluid motion on phones and laptops
 */
export function ExpressiveKineticText({ 
  text, 
  highlightWords = [], 
  highlightClass = "text-blue-600 font-extrabold",
  className = ""
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap gap-x-2 gap-y-0.5 ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9₹+-]/g, "");
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase() || hw.toLowerCase() === word.toLowerCase()
        );
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10px 0px" }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: (i % 10) * 0.05
            }}
            className={`inline-block select-none ${
              isHighlighted ? highlightClass : ""
            }`}
            style={{ willChange: "transform, opacity" }}
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
 * 3. Real-Time Collaborative Engineering Cursors Overlay (Disabled)
 */
export function CollaborativeCursorsOverlay() {
  return null;
}

/**
 * 4. Verified Trust Badge (Clean, authentic accreditation badge without fake click counters)
 */
export function InteractiveZapBurstButton({ 
  initialCount = 2500, 
  label = "Happy Clients",
  dark = false 
}) {
  return (
    <div className="relative inline-flex items-center">
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
          dark
            ? "bg-blue-900/40 text-blue-200 border-blue-400/30"
            : "bg-slate-100 text-slate-800 border-slate-200 shadow-2xs"
        }`}
      >
        <ShieldCheck className={`w-3.5 h-3.5 shrink-0 ${dark ? "text-sky-300" : "text-blue-600"}`} />
        <span>{initialCount.toLocaleString ? initialCount.toLocaleString("en-IN") : initialCount}+</span>
        {label && <span className="opacity-80 hidden sm:inline">{label}</span>}
      </div>
    </div>
  );
}

/**
 * 5. Real-Time Collaborative Activity Ticker Pill (Disabled)
 */
export function LiveActivityStreamBadge() {
  return null;
}


