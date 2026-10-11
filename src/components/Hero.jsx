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
  Calculator
} from "lucide-react";
import { InteractiveZapBurstButton } from "./MotionEffects";

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

const DUAL_POINTS = [
  {
    en: "Up to ₹1,08,000 Direct Bank Subsidy (DBT)",
    hi: "बैंक खाते में ₹1,08,000 तक सीधी सरकारी सब्सिडी"
  },
  {
    en: "Up to 300 Units Free Electricity Monthly",
    hi: "हर महीने 300 यूनिट तक मुफ्त बिजली का लाभ"
  },
  {
    en: "TATA, Adani, Waaree & Loom Authorized",
    hi: "टाटा, अदानी, वारी व लूम के अधिकृत मुख्य डीलर"
  },
  {
    en: "UPPCL Net Metering & 25-Year Warranty",
    hi: "यूपीपीसीएल नेट मीटरिंग व 25 साल की वारंटी"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

function Hero({ onOpenCalculator }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[76vh] lg:min-h-[82vh] flex flex-col justify-center overflow-hidden bg-[#071526] text-white py-12 lg:py-16"
    >
      {/* =========================================================================
          HERO BACKGROUND: EYE-SOOTHING DEEP SLATE-NAVY BLEND OVER REAL SITE PHOTOS
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={HERO_SLIDES[currentSlide].image}
            alt={HERO_SLIDES[currentSlide].title}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />
        </AnimatePresence>

        {/* Soft, Eye-Soothing Directional Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071526] via-[#071526]/88 sm:via-[#071526]/75 lg:via-[#071526]/60 to-[#071526]/25"></div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent pointer-events-none"></div>
      </div>

      {/* =========================================================================
          MAIN HERO CONTAINER (CLEAN, SPACIOUS & FREE OF DUPLICATE BLOCKS)
      ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: CORE HEADLINE, 4 KEY HIGHLIGHTS & PRIMARY CTAS */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5"
          >
            {/* Top Govt Empanelled Badge + Interactive ⚡ Appreciation */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 backdrop-blur-md border border-emerald-400/35 text-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UPNEDA Approved Vendor</span>
                <span className="bg-emerald-400/90 text-slate-950 text-[10px] font-mono font-black px-2 py-0.5 rounded-full">
                  {businessData.vendorCode}
                </span>
              </div>
              <InteractiveZapBurstButton initialCount={2500} label="Happy Clients" dark />
            </motion.div>

            {/* Main Headline (Single Line on Mobile for Satyarthi Solar Solution) */}
            <motion.div variants={itemVariants} className="space-y-2.5">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-black tracking-tight leading-[1.15] text-white">
                <span className="block sm:inline">Switch to Clean Energy with </span>
                <span className="inline-block whitespace-nowrap text-[1.38rem] min-[375px]:text-[1.55rem] sm:text-4xl md:text-5xl lg:text-[3.1rem] text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-300 to-sky-300">
                  Satyarthi Solar Solution
                </span>
              </h1>
              
              <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-emerald-300/95 tracking-tight font-hindi">
                सत्यार्थी सोलर सॉल्यूशन • <span className="text-sky-200">पीएम सूर्य घर योजना से बिजली बिल शून्य बनाएं</span>
              </h2>
            </motion.div>

            {/* Concise Single-Paragraph Summary */}
            <motion.p variants={itemVariants} className="text-slate-200/95 text-sm sm:text-base leading-relaxed max-w-2xl">
              Turnkey residential, commercial, and diesel-free solar flour mill engineering across Gorakhpur & Purvanchal with seamless portal registration and direct bank subsidy.
            </motion.p>

            {/* 4 Key Highlights with Gentle 3D Hover */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-2.5 pt-1" style={{ perspective: "1000px" }}>
              {DUAL_POINTS.map((pt, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, rotateX: 3, rotateY: -2, scale: 1.015 }}
                  className="group relative bg-white/8 backdrop-blur-md border border-white/15 hover:border-emerald-300/50 rounded-2xl p-3 space-y-0.5 transition overflow-hidden"
                >
                  <div className="flex items-start gap-2 relative z-10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-white leading-tight">
                      {pt.en}
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-200/90 font-medium pl-6 leading-tight font-hindi relative z-10">
                    {pt.hi}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-2xl shadow-lg shadow-emerald-900/30 transition cursor-pointer text-sm border border-emerald-400/30"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Book Free Survey • मुफ्त सर्वे</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (onOpenCalculator) onOpenCalculator();
                }}
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-3 rounded-2xl shadow-lg transition cursor-pointer text-sm border border-amber-300"
              >
                <Calculator className="w-4 h-4 text-slate-950" />
                <span>Solar Calculator • कैलकुलेटर</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${businessData.phone[0]}`}
                className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-4 py-3 rounded-2xl border border-white/20 transition text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>+91 {businessData.phone[0]}</span>
              </motion.a>
            </motion.div>

            {/* Showroom Location Line */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs text-slate-300/90 pt-1">
              <MapPin className="w-4 h-4 text-teal-300 shrink-0" />
              <span>Motiram Adda, Deoria Road, Gorakhpur (273202) • मोतीराम अड्डा, देवरिया रोड गोरखपुर</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: LEAD SOLAR ENGINEER PROFILE CARD & SITE SLIDER CONTROLS */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-slate-900/80 backdrop-blur-xl border border-white/15 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 text-white"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-teal-400/80 shadow-md shrink-0">
                  <img
                    src={businessData.engineerImage}
                    alt="Er. Satyaprakash Satyarthi"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-teal-600 text-white text-[8px] text-center font-bold py-0.5 uppercase tracking-wider">
                    VERIFIED
                  </div>
                </div>

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="inline-flex items-center gap-1 bg-teal-500/20 text-teal-200 border border-teal-400/30 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                    <UserCheck className="w-3 h-3 text-teal-300" />
                    <span>Lead Solar Engineer • मुख्य सोलर इंजीनियर</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                    Er. Satyaprakash Satyarthi
                  </h3>

                  <p className="text-xs text-emerald-300 font-bold font-hindi">
                    इंजीनियर सत्यप्रकाश सत्यार्थी (UPNEDA Empanelled)
                  </p>

                  <p className="text-[11px] text-slate-300 leading-tight">
                    Direct On-Site Supervision • 3D Shadow & Structure Design
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-center text-xs">
                <div className="bg-white/8 p-2.5 rounded-2xl border border-white/10">
                  <p className="text-[10px] text-slate-300 font-medium">Installed Capacity</p>
                  <p className="text-base font-black text-sky-300">3.2 MW+ Solar</p>
                </div>
                <div className="bg-white/8 p-2.5 rounded-2xl border border-white/10">
                  <p className="text-[10px] text-slate-300 font-medium">Verified Families</p>
                  <p className="text-base font-black text-emerald-300">2500+ Clients</p>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                    "Hello Er. Satyaprakash, I want a solar quotation for my home in Gorakhpur/UP."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Engineer • सीधे बात करें</span>
                </a>

                <a
                  href={`tel:${businessData.phone[0]}`}
                  className="bg-white/15 hover:bg-white/25 text-white font-bold p-2.5 rounded-xl text-xs flex items-center justify-center transition border border-white/15"
                  title="Call Engineer Directly (24x7)"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                </a>
              </div>
            </motion.div>

            {/* Active Real Site Location Pill & Slide Dots */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 px-1">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-2 bg-slate-900/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-left"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span className="font-semibold text-white text-[11px] truncate">{HERO_SLIDES[currentSlide].location}</span>
              </motion.div>

              <div className="flex items-center gap-1.5">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx 
                        ? "w-6 bg-emerald-400" 
                        : "w-2 bg-white/35 hover:bg-white/60"
                    }`}
                    aria-label={`Switch to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;