import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  FileText, 
  MapPin, 
  UserCheck, 
  MessageCircle, 
  Calculator,
  ChevronDown,
  Box,
  Sun,
  Sparkles
} from "lucide-react";
import {
  ExpressiveKineticText,
  InteractiveZapBurstButton
} from "./MotionEffects";

// Real Gorakhpur Site Slides rotating in the Hero Section
const HERO_SLIDES = [
  {
    image: "/images/brand/landing-hero-bg.jpg",
    title: "High-Efficiency Solar Array",
    location: "Gorakhpur & Purvanchal Hub",
    hindi: "उच्च दक्षता सोलर प्लांट • 25 वर्ष वारंटी"
  },
  {
    image: "/images/projects/team-saketpuri-pergola.jpg",
    title: "Elevated Rooftop Pergola Plant",
    location: "Saketpuri Colony, Rajendra Nagar",
    hindi: "साकेतपुरी कॉलोनी • एलिवेटेड रूफटॉप सोलर"
  },
  {
    image: "/images/projects/engineer-on-solar-roof.jpg",
    title: "Er. Satyaprakash On-Site Engineering",
    location: "Live Installation Site, Gorakhpur",
    hindi: "इंजीनियर सत्यप्रकाश सत्यार्थी • ऑन-साइट निरीक्षण"
  },
  {
    image: "/images/projects/elevated-solar-railvihar.jpg",
    title: "Heavy-Duty High-Rise Rooftop Solar",
    location: "Railvihar Ph-2, Shatabdipuram",
    hindi: "रेलविहार फेज-2 • आंधी-रोधी जी.आई. स्ट्रक्चर"
  },
  {
    image: "/images/projects/fertilizer-colony-completed-array.jpg",
    title: "Grouted Pillar Elevated Solar Array",
    location: "Fertilizer Colony, Gorakhpur",
    hindi: "फर्टिलाइजर कॉलोनी • कंक्रीट पिलर रूफटॉप प्लांट"
  },
  {
    image: "/images/projects/happy-client-jangl-ramgarh.jpg",
    title: "Verified Satisfied Homeowner Plant",
    location: "Jangl Ramgarh, Deoria Road (273202)",
    hindi: "जंगल रामगढ़ देवरिया रोड • खुशहाल उपभोक्ता"
  }
];

const KEY_HIGHLIGHTS = [
  {
    title: "₹1,08,000 Direct Subsidy",
    subtitle: "सीधी सरकारी सब्सिडी (DBT)"
  },
  {
    title: "300 Units Free Power",
    subtitle: "हर महीने 300 यूनिट मुफ्त बिजली"
  },
  {
    title: "Tier-1 Brands Dealer",
    subtitle: "टाटा, अदानी, वारी व लूम अधिकृत"
  },
  {
    title: "25-Year Warranty",
    subtitle: "25 साल वारंटी व नेट मीटरिंग"
  }
];

// Floating ambient solar photon particles for eye-soothing motion graphics
const SOLAR_PARTICLES = [
  { left: "12%", top: "22%", size: 6, delay: 0, duration: 7 },
  { left: "28%", top: "68%", size: 8, delay: 1.2, duration: 9 },
  { left: "64%", top: "18%", size: 5, delay: 0.6, duration: 8 },
  { left: "82%", top: "54%", size: 7, delay: 1.8, duration: 10 },
  { left: "46%", top: "36%", size: 6, delay: 2.4, duration: 8.5 }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

function Hero({ onOpenCalculator }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4800);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[84vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#0a1e3b] text-white pt-10 pb-8 lg:pt-14 lg:pb-10"
    >
      {/* =========================================================================
          HERO BACKGROUND: SMOOTH KEN-BURNS CROSSFADE + ROYAL SOLAR BLUE & SUN GOLD
          AURORA & FLOATING SOLAR PHOTON PARTICLES
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={HERO_SLIDES[currentSlide].image}
            alt={HERO_SLIDES[currentSlide].title}
            fetchPriority={currentSlide === 0 ? "high" : "auto"}
            loading={currentSlide === 0 ? "eager" : "lazy"}
            decoding="async"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transform: "translate3d(0,0,0)", willChange: "transform, opacity", backfaceVisibility: "hidden" }}
            className="gpu-layer absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />
        </AnimatePresence>

        {/* Royal Navy Blue Directional Blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3b] via-[#0d284f]/90 sm:via-[#0d284f]/80 lg:via-[#0d284f]/65 to-[#0a1e3b]/30"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 via-slate-50/45 to-transparent pointer-events-none"></div>

        {/* Desktop-Only Animated Breathing Solar Aurora Orbs (Conserves Mobile GPU/Battery) */}
        <div className="hidden sm:block">
          <motion.div
            animate={{ scale: [1, 1.18, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: "translate3d(0,0,0)", willChange: "transform, opacity", backfaceVisibility: "hidden" }}
            className="gpu-layer absolute top-1/4 -left-24 w-96 h-96 bg-blue-500/22 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.22, 1], opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            style={{ transform: "translate3d(0,0,0)", willChange: "transform, opacity", backfaceVisibility: "hidden" }}
            className="gpu-layer absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-400/18 rounded-full blur-3xl"
          />
        </div>

        {/* Mobile-Optimized Static Ambient Glow */}
        <div className="gpu-layer sm:hidden absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="gpu-layer sm:hidden absolute bottom-1/4 right-0 w-64 h-64 bg-amber-400/12 rounded-full blur-2xl pointer-events-none" />

        {/* Subtle 3D Perspective Grid Overlay */}
        <div
          className="absolute inset-0 opacity-14"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(56, 189, 248, 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(245, 158, 11, 0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px"
          }}
        />

        {/* Desktop-Only Floating Solar Photon Particles */}
        <div className="hidden sm:block">
          {SOLAR_PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              style={{ left: p.left, top: p.top, width: p.size, height: p.size, willChange: "transform, opacity" }}
              animate={{
                y: [0, -28, 0],
                x: [0, 12, 0],
                opacity: [0.25, 0.75, 0.25],
                scale: [0.9, 1.25, 0.9]
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="gpu-layer absolute rounded-full bg-gradient-to-tr from-sky-300 to-amber-300 blur-[0.5px] shadow-sm shadow-sky-300/50"
            />
          ))}
        </div>
      </div>

      {/* =========================================================================
          MAIN HERO CONTAINER (3D BENTO HOVER & EXPRESSIVE KINETIC TYPOGRAPHY)
      ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-14 lg:px-16 xl:px-12 my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: KINETIC HEADLINE, 3D BENTO HIGHLIGHTS & SHIMMER CTAS */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5"
          >
            {/* Top Badges: Govt Empanelled + Local Gorakhpur & Motiram Adda Hub */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="inline-flex items-center gap-1.5 bg-blue-600/30 backdrop-blur-md border border-blue-400/40 text-blue-100 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-blue-300 shrink-0" />
                <span>UPNEDA Approved Vendor</span>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-mono font-black px-2 py-0.5 rounded-full">
                  {businessData.vendorCode}
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="inline-flex items-center gap-1.5 bg-amber-400/20 backdrop-blur-md border border-amber-400/40 text-amber-200 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Motiram Adda, Gorakhpur Hub</span>
              </motion.div>

              <InteractiveZapBurstButton initialCount={2500} label="Happy Families" dark />
            </motion.div>

            {/* Expressive Kinetic Headline with Targeted Local Keywords */}
            <motion.div variants={itemVariants} className="space-y-2.5">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-black tracking-tight leading-[1.15] text-white">
                <span className="block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-400 mb-1">
                  #1 Solar EPC in Gorakhpur & Purvanchal
                </span>
                <span className="block">
                  <ExpressiveKineticText
                    text="Top Rated Rooftop Solar in"
                    highlightWords={["Rooftop", "Solar"]}
                    highlightClass="text-sky-300"
                    className="!justify-start"
                  />
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="inline-block whitespace-nowrap text-[1.38rem] min-[375px]:text-[1.55rem] sm:text-4xl md:text-5xl lg:text-[3.1rem] text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-amber-300 cursor-default"
                >
                  Satyarthi Solar Solution
                </motion.span>
              </h1>
              
              <p className="text-slate-200/90 text-sm sm:text-base leading-relaxed max-w-xl">
                UPNEDA-empanelled rooftop solar installations across Gorakhpur & Purvanchal. Claim up to ₹1,08,000 PM Surya Ghar subsidy with 25-year panel warranty and 6% bank loan.
              </p>
              <p className="text-amber-300 font-hindi text-xs sm:text-sm font-semibold">
                सत्यार्थी सोलर सॉल्यूशन • 2500+ खुशहाल परिवार
              </p>
            </motion.div>

            {/* 4 Crisp Key Highlights with 3D Bento Hover */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-2.5 pt-1" style={{ perspective: "1000px" }}>
              {KEY_HIGHLIGHTS.map((pt, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.12)"
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group relative bg-white/8 backdrop-blur-md border border-white/15 hover:border-amber-400/60 rounded-2xl p-3 space-y-0.5 transition overflow-hidden shadow-md"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  
                  <div className="flex items-center gap-1.5 relative z-10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="text-xs font-bold text-white leading-tight truncate">
                      {pt.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-sky-200/90 font-hindi pl-5 leading-tight truncate relative z-10">
                    {pt.subtitle}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-5 py-3 rounded-2xl shadow-lg shadow-blue-950/40 transition cursor-pointer text-sm border border-blue-400/40"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                <FileText className="w-4 h-4 text-white relative z-10 shrink-0" />
                <span className="relative z-10">Book Free Survey • मुफ्त सर्वे</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10 shrink-0" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (onOpenCalculator) onOpenCalculator();
                }}
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-3 rounded-2xl shadow-lg transition cursor-pointer text-sm border border-amber-300"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                <Calculator className="w-4 h-4 text-slate-950 relative z-10 shrink-0" />
                <span className="relative z-10">Solar Calculator</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${businessData.phone[0]}`}
                className="inline-flex items-center justify-center gap-1.5 bg-white/12 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-4 py-3 rounded-2xl border border-white/20 transition text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>+91 {businessData.phone[0]}</span>
              </motion.a>
            </motion.div>

            {/* Showroom Location Line */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs text-slate-300/90 pt-1">
              <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Motiram Adda, Deoria Road, Gorakhpur (273202)</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: ENGINEER PROFILE CARD & LIVE SOLAR TELEMETRY */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative bg-[#0d284f]/95 sm:bg-[#0d284f]/85 sm:backdrop-blur-md border border-blue-400/30 hover:border-amber-400/60 rounded-3xl p-4 sm:p-6 shadow-xl space-y-4 text-white overflow-hidden transition-colors"
            >
              {/* Diagonal Glassmorphic Shimmer Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center gap-3.5 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-md shrink-0"
                >
                  <img
                    src={businessData.engineerImage}
                    alt="Er. Satyaprakash Satyarthi - Lead Solar Engineer Gorakhpur"
                    loading="eager"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-blue-600 text-white text-[8px] text-center font-bold py-0.5 uppercase tracking-wider">
                    VERIFIED
                  </div>
                </motion.div>

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-2 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-bold max-w-full">
                    <UserCheck className="w-3 h-3 text-amber-300 shrink-0" />
                    <span className="truncate">Chief Solar EPC Engineer</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                    Er. Satyaprakash Satyarthi
                  </h3>

                  <p className="text-xs text-amber-300 font-bold">
                    UPNEDA Empanelled (Code: {businessData.vendorCode})
                  </p>

                  <p className="text-[11px] text-slate-300 leading-tight">
                    2500+ Sites • Direct Engineering Supervision
                  </p>
                </div>
              </div>

              {/* Live Solar Telemetry Strip inside Engineer Card */}
              <div className="relative z-10 bg-[#071933]/90 rounded-2xl p-3 border border-blue-500/20 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Gorakhpur Solar Yield Performance</span>
                  </span>
                  <span className="font-mono font-black text-sky-300">98.4% Efficiency</span>
                </div>
                <div className="w-full h-1.5 bg-blue-950/80 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-gradient-to-r from-blue-500 via-sky-400 to-amber-400 rounded-full" />
                </div>
              </div>

              {/* Direct Metrics with Hover Lift */}
              <div className="relative z-10 grid grid-cols-2 gap-2.5 text-center text-xs">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white/6 hover:bg-blue-500/10 transition p-2.5 rounded-2xl border border-white/10"
                >
                  <p className="text-[10px] text-slate-300 font-medium">Installed Capacity</p>
                  <p className="text-base font-black text-amber-300">2,200+ kW</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white/6 hover:bg-blue-500/10 transition p-2.5 rounded-2xl border border-white/10"
                >
                  <p className="text-[10px] text-slate-300 font-medium">Verified Families</p>
                  <p className="text-base font-black text-sky-300">2500+ Clients</p>
                </motion.div>
              </div>

              <div className="relative z-10 flex gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                    "Hello Er. Satyaprakash, I want a solar quotation for my home in Gorakhpur/UP."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>WhatsApp • सीधे बात करें</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`tel:${businessData.phone[0]}`}
                  className="bg-white/15 hover:bg-white/25 text-white font-bold p-2.5 rounded-xl text-xs flex items-center justify-center transition border border-white/15"
                  title="Call Engineer Directly (24x7)"
                >
                  <Phone className="w-4 h-4 text-sky-300" />
                </motion.a>
              </div>

              {/* Active Real Site Location & Slide Dots Integrated Inside Card */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="inline-flex items-center gap-1.5 text-left min-w-0"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-semibold text-slate-200 text-[11px] truncate">{HERO_SLIDES[currentSlide].location}</span>
                </motion.div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx 
                          ? "w-5 bg-amber-400" 
                          : "w-1.5 bg-white/35 hover:bg-white/60"
                      }`}
                      aria-label={`Switch to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;