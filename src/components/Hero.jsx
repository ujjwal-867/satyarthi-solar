import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  FileText,
  MapPin,
  Sparkles,
  Sun,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  Zap,
  MessageCircle
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const HERO_IMAGES = [
  {
    url: "/images/projects/hero-solar-sunburst.jpg",
    title: "Mono PERC High-Wattage Solar Modules",
    titleHi: "उच्च दक्षता मोनो पर्क सोलर पैनल्स",
    subtitle: "Clean sunlight energy generating maximum units daily",
    subtitleHi: "कड़क धूप में अधिकतम बिजली उत्पादन व 25 साल वारंटी",
    badge: "25-Year Warranty",
    badgeHi: "25 साल वारंटी"
  },
  {
    url: "/images/projects/hero-solar-farm.jpg",
    title: "Utility-Scale & Industrial Solar Power Plants",
    titleHi: "कमर्शियल व इंडस्ट्रियल सोलर पावर प्लांट",
    subtitle: "Heavy duty power systems eliminating diesel expenses",
    subtitleHi: "डीजल खर्च खत्म करें और बिजली बिल 85% घटाएं",
    badge: "Zero Diesel Mill",
    badgeHi: "जीरो डीजल समाधान"
  },
  {
    url: "/images/projects/hero-rooftop-aerial.jpg",
    title: "Institutional & Rooftop Net-Metering Systems",
    titleHi: "रूफटॉप ऑन-ग्रिड नेट मीटरिंग सिस्टम",
    subtitle: "Export surplus electricity to UPPCL grid effortlessly",
    subtitleHi: "अतिरिक्त बिजली ग्रिड को बेचें व शून्य बिल का लाभ पाएं",
    badge: "100% Net Metering",
    badgeHi: "यूपीपीसीएल नेट मीटरिंग"
  },
  {
    url: "/images/projects/hero-technician-install.png",
    title: "Precision Engineering & Professional Installation",
    titleHi: "कुशल इंजीनियर्स द्वारा सोलर स्थापना",
    subtitle: "Galvanized mounting structures tested for extreme weather",
    subtitleHi: "जीआई स्ट्रक्चर पर मजबूत और सुरक्षित सोलर इंस्टॉलेशन",
    badge: "UPNEDA Certified EPC",
    badgeHi: "यूपीनेडा प्रमाणित स्थापना"
  },
  {
    url: "/images/projects/site-installation-1.jpg",
    title: "PM Surya Ghar 3kW Residential Installations",
    titleHi: "पीएम सूर्य घर 3kW घरेलू रूफटॉप सोलर",
    subtitle: "Gorakhpur rooftop project with direct ₹1,08,000 subsidy",
    subtitleHi: "गोरखपुर में स्थापित रूफटॉप सोलर • ₹1,08,000 सीधी सब्सिडी",
    badge: "₹1,08,000 Subsidy",
    badgeHi: "सीधी बैंक सब्सिडी"
  }
];

const CERT_LOGOS = [
  { name: "UPNEDA Approved", hi: "यूपीनेडा अधिकृत", code: "GKP2604066741", icon: "🏛️" },
  { name: "MNRE Govt of India", hi: "भारत सरकार MNRE", code: "Empanelled EPC", icon: "🇮🇳" },
  { name: "PM Surya Ghar", hi: "पीएम सूर्य घर योजना", code: "₹1,08,000 Subsidy", icon: "☀️" },
  { name: "Loom Solar", hi: "लूम सोलर पार्टनर", code: "Authorized Dealer", icon: "⚡" },
  { name: "Fujiyama Solar", hi: "फुजियामा अधिकृत", code: "Certified Partner", icon: "🔋" },
  { name: "ISO 9001:2015", hi: "आईएसओ प्रमाणित", code: "Quality Assured", icon: "🏆" }
];

function Hero() {
  const { lang, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance hero background every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentImage = HERO_IMAGES[currentSlide];

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-950 text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          FULL-SCREEN CONTINUOUS BACKGROUND SOLAR IMAGE SLIDESHOW
      ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105 saturate-115"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* 
          BRIGHT & VIVID CINEMATIC GRADIENT OVERLAY
          Provides gentle fading on the far-left for text legibility while keeping 
          the solar imagery bright, sunny, and vibrant across the viewport.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 z-10 pointer-events-none"></div>

        {/* Radiant Sunny Ambient Glows */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl z-10 pointer-events-none"></div>
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl z-10 pointer-events-none"></div>
      </div>

      {/* =========================================================================
          HERO CONTENT CONTAINER (FAR-LEFT DETAILS + RIGHT ENGINEER SPOTLIGHT)
      ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* =====================================================================
              FAR-LEFT DETAILS (HEADLINE, SUBSIDY, UPNEDA, ACTION BUTTONS)
          ===================================================================== */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl"
          >
            {/* UPNEDA Empanelled Badge */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 bg-emerald-950/85 border border-emerald-500/60 rounded-full px-4 py-1.5 text-xs font-bold text-emerald-300 backdrop-blur-md shadow-lg shadow-emerald-950/50"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.heroBadge}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1"></span>
            </motion.div>

            {/* Bilingual Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white"
            >
              {t.heroTitleStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 block sm:inline">
                {t.heroTitleHighlight}
              </span>
            </motion.h1>

            {/* Clean Value Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow-sm"
            >
              {t.heroSubtitle}
            </motion.p>

            {/* Pure Solar Checklist Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200"
            >
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs p-2 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.heroFeature1}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs p-2 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.heroFeature2}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs p-2 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.heroFeature3}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-xs p-2 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.heroFeature4}</span>
              </div>
            </motion.div>

            {/* Action Buttons (Framer Motion Hover Effects) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {/* Primary Quotation Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#quotations")}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-xl shadow-amber-500/25 transition cursor-pointer text-sm sm:text-base border border-amber-300/40"
              >
                <FileText className="w-5 h-5 text-slate-950" />
                <span>{t.btnGetQuote}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* 24x7 Call Button */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${businessData.phone[0]}`}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 transition text-sm sm:text-base cursor-pointer border border-emerald-400/40"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>+91 {businessData.phone[0]}</span>
              </motion.a>

              {/* Secondary Call Number */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${businessData.phone[1]}`}
                className="inline-flex items-center gap-1.5 border border-slate-700 hover:border-slate-500 bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-3.5 rounded-xl backdrop-blur-md transition text-sm cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{businessData.phone[1]}</span>
              </motion.a>
            </motion.div>

            {/* Office Location & Working Status */}
            <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Motiram Adda, Deoria Road, Gorakhpur (273202) • 24×7 Available</span>
            </div>

            {/* Certification Logos Strip */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-4 border-t border-slate-800/80"
            >
              <div className="flex items-center gap-2 mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.certStripTitle}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CERT_LOGOS.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-400/50 rounded-xl p-2 flex items-center gap-2 backdrop-blur-md transition shadow-xs group cursor-default"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate">
                        {lang === "hi" ? cert.hi : cert.name}
                      </p>
                      <p className="text-[10px] text-amber-400/90 font-mono truncate">
                        {cert.code}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* =====================================================================
              RIGHT SIDE: LEAD ENGINEER SPOTLIGHT CARD + LIVE SLIDE CONTROLS
          ===================================================================== */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Engineer Profile Spotlight Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative bg-slate-900/85 backdrop-blur-xl border-2 border-emerald-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-slate-950/80 overflow-hidden"
            >
              {/* Decorative Subtle Ambient Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                {/* Real Photo of Er. Satyaprakash Satyarthi at TOI UP Dialogues */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl shrink-0 group">
                  <img
                    src={businessData.engineerImage}
                    alt="Er. Satyaprakash Satyarthi - Lead Solar Engineer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 text-[9px] text-center font-bold text-amber-300 py-0.5">
                    VERIFIED
                  </div>
                </div>

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">
                    <UserCheck className="w-3 h-3 text-amber-400" />
                    <span>Lead Solar EPC Engineer</span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                    Er. Satyaprakash Satyarthi
                  </h3>

                  <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>UPNEDA & MNRE Approved</span>
                  </p>

                  <p className="text-[11px] text-slate-300 leading-tight">
                    Speaker: <strong className="text-white">TOI UP Transformation Dialogues</strong> (Gorakhpur)
                  </p>
                </div>
              </div>

              {/* Direct Engineer Actions */}
              <div className="pt-4 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-[10px] text-slate-400">Total Installations</p>
                    <p className="text-lg font-black text-amber-400">2,200+ kW</p>
                  </div>
                  <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-[10px] text-slate-400">Happy Customers</p>
                    <p className="text-lg font-black text-emerald-400">450+ Homes</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                      "Hello Er. Satyaprakash Satyarthi, I want to discuss a rooftop solar installation for my home in Gorakhpur/UP."
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Consult on WhatsApp</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`tel:${businessData.phone[0]}`}
                    className="bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold p-2.5 rounded-xl text-xs flex items-center justify-center border border-slate-700 transition"
                    title="Call Engineer Directly"
                  >
                    <Phone className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Current Solar Slide Caption & Live Rotation Controls */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-3 text-xs">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider">
                    {lang === "hi" ? currentImage.badgeHi : currentImage.badge}
                  </span>
                </div>
                <p className="font-bold text-white text-xs sm:text-sm truncate">
                  {lang === "hi" ? currentImage.titleHi : currentImage.title}
                </p>
                <p className="text-[11px] text-slate-300 truncate">
                  {lang === "hi" ? currentImage.subtitleHi : currentImage.subtitle}
                </p>
              </div>

              {/* Slider Dots & Next/Prev */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
                  className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)}
                  className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slide Progress Ticker */}
            <div className="flex items-center gap-1.5 px-2">
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide 
                      ? "w-8 bg-gradient-to-r from-amber-400 to-emerald-400" 
                      : "w-2 bg-slate-800 hover:bg-slate-600"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;