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
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  UserCheck, 
  MessageCircle, 
  ChevronDown,
  Sun,
  Zap,
  Award
} from "lucide-react";

const HERO_IMAGES = [
  {
    url: "/images/projects/hero-solar-sunburst.jpg",
    title: "Mono PERC High-Wattage Solar Modules",
    titleHi: "उच्च दक्षता मोनो पर्क सोलर पैनल्स",
    subtitle: "High power generation even in cloudy weather • 25 Years Warranty",
    subtitleHi: "कड़क धूप में अधिकतम बिजली उत्पादन • 25 साल की वारंटी",
    badge: "25-Yr Warranty",
    badgeHi: "25 साल वारंटी"
  },
  {
    url: "/images/projects/hero-solar-farm.jpg",
    title: "Commercial & Industrial Solar Power Plants",
    titleHi: "कमर्शियल व इंडस्ट्रियल सोलर पावर प्लांट",
    subtitle: "Heavy duty power systems eliminating diesel expenses completely",
    subtitleHi: "डीजल खर्च खत्म करें और बिजली बिल 85% तक घटाएं",
    badge: "Zero Diesel Mill",
    badgeHi: "जीरो डीजल समाधान"
  },
  {
    url: "/images/projects/hero-rooftop-aerial.jpg",
    title: "Institutional & Rooftop Net-Metering Systems",
    titleHi: "रूफटॉप ऑन-ग्रिड नेट मीटरिंग सिस्टम",
    subtitle: "Export surplus electricity to UPPCL grid effortlessly",
    subtitleHi: "अतिरिक्त बिजली ग्रिड को बेचें व शून्य बिजली बिल का लाभ पाएं",
    badge: "100% Net Metering",
    badgeHi: "यूपीपीसीएल नेट मीटरिंग"
  },
  {
    url: "/images/projects/hero-technician-install.png",
    title: "Precision Engineering & Professional Installation",
    titleHi: "कुशल इंजीनियर्स द्वारा सोलर स्थापना",
    subtitle: "Galvanized mounting structures tested for extreme weather",
    subtitleHi: "जीआई स्ट्रक्चर पर मजबूत और सुरक्षित सोलर इंस्टॉलेशन",
    badge: "Certified EPC",
    badgeHi: "प्रमाणित स्थापना"
  },
  {
    url: "/images/projects/site-installation-1.jpg",
    title: "PM Surya Ghar 3kW Residential Installations",
    titleHi: "पीएम सूर्य घर 3kW घरेलू रूफटॉप सोलर",
    subtitle: "Gorakhpur rooftop project with direct ₹1,08,000 DBT subsidy",
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

const DUAL_POINTS = [
  {
    en: "Up to ₹1,08,000 Govt Subsidy in Bank",
    hi: "बैंक खाते में ₹1,08,000 तक सीधी सरकारी सब्सिडी"
  },
  {
    en: "300 Units Free Electricity Every Month",
    hi: "हर महीने 300 यूनिट तक मुफ्त बिजली का लाभ"
  },
  {
    en: "Authorized LOOM SOLAR & FUJIYAMA Dealer",
    hi: "लूम सोलर एवं फुजियामा के अधिकृत डीलर"
  },
  {
    en: "UPPCL Net Metering & 25-Year Panel Warranty",
    hi: "यूपीपीसीएल नेट मीटरिंग व 25 साल की पैनल वारंटी"
  }
];

// Animation Variants for staggered text reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance hero background every 3.2 seconds
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
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-white text-slate-900 pt-8 pb-12 lg:pt-14 lg:pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          CLEAN WHITE SAAS / AI-ATS BACKGROUND GRID & GLOWS (BLUE & GREEN PALETTE)
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Engineering Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

        {/* Ambient Clean Tech Mesh Glows */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl"></div>
      </div>

      {/* =========================================================================
          MAIN HERO CONTAINER
      ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =====================================================================
              LEFT COLUMN: WHITE CARD WITH BILINGUAL DETAILS (ENGLISH + HINDI)
          ===================================================================== */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Govt Empanelled Badge (Bilingual) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>UPNEDA Empanelled Vendor</span>
              <span className="text-emerald-400">•</span>
              <span className="text-emerald-800">यूपीनेडा अधिकृत वेंडर</span>
              <span className="bg-emerald-600 text-white text-[10px] font-mono px-2 py-0.5 rounded-full ml-1">
                {businessData.vendorCode}
              </span>
            </motion.div>

            {/* Main Headline (Simultaneous English + Hindi) */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] text-slate-900">
                Switch to Clean Energy with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-600 to-emerald-600">
                  Trusted Solar Solutions
                </span>
              </h1>
              
              {/* Simultaneous Hindi Title */}
              <h2 className="text-xl sm:text-2xl lg:text-[1.65rem] font-extrabold text-emerald-700 tracking-tight leading-snug">
                विश्वसनीय सोलर समाधान से अपनाएं स्वच्छ ऊर्जा • <span className="text-blue-700">बिजली बिल शून्य बनाएं</span>
              </h2>
            </motion.div>

            {/* Dual Description (English + Hindi side-by-side or stacked) */}
            <motion.div variants={itemVariants} className="space-y-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Powering Homes, Businesses & Industries across Gorakhpur and Uttar Pradesh. Get up to <strong className="text-emerald-700 font-bold">₹1,08,000 Govt Subsidy</strong> directly credited into your bank account under PM Surya Ghar Muft Bijli Yojna.
              </p>
              <p className="text-slate-700 font-medium text-xs sm:text-sm bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                🇮🇳 <strong>हिन्दी विवरण:</strong> गोरखपुर व पूर्वांचल के घरों, दुकानों व उद्योगों के लिए सर्वोत्तम सोलर समाधान। 300 यूनिट तक मुफ्त बिजली व केंद्र व राज्य सरकार की ₹1,08,000 तक सीधी सब्सिडी।
              </p>
            </motion.div>

            {/* Dual Key Highlights Checklist (English & Hindi Together) */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-2.5 pt-1">
              {DUAL_POINTS.map((pt, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.01, backgroundColor: "#f8fafc" }}
                  className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs space-y-1 transition"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-900 leading-tight">
                      {pt.en}
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-800 font-semibold pl-6 leading-tight">
                    {pt.hi}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons (English + Hindi) */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Primary Quotation Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#quotations")}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-700/20 transition cursor-pointer text-sm sm:text-base border border-emerald-500/30"
              >
                <FileText className="w-5 h-5 text-white" />
                <span>Get Free Quote | मुफ्त कोटेशन</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* 24x7 Call Button */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${businessData.phone[0]}`}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-3.5 rounded-2xl shadow-md transition text-sm sm:text-base cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call 24×7: {businessData.phone[0]}</span>
              </motion.a>

              {/* Direct WhatsApp Button */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                  "Hello Er. Satyaprakash, I want a rooftop solar installation quote for my property in Gorakhpur/UP."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-bold px-4 py-3.5 rounded-2xl transition text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: {businessData.whatsapp[0]}</span>
              </motion.a>
            </motion.div>

            {/* Office Landmark Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Motiram Adda, Deoria Road, Gorakhpur (273202) • मोतीराम अड्डा, देवरिया रोड गोरखपुर</span>
            </motion.div>

            {/* Certification Logos Strip in Clean White/Blue/Green Theme */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-2.5 text-[11px] font-black uppercase tracking-wider text-slate-500">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Government Approvals & Brand Certifications | सरकारी मान्यता व प्रमाणपत्र</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CERT_LOGOS.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.02, borderColor: "#059669" }}
                    className="bg-slate-50 hover:bg-white border border-slate-200/90 rounded-xl p-2.5 flex items-center gap-2.5 transition shadow-2xs group cursor-default"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {cert.name}
                      </p>
                      <p className="text-[10px] text-emerald-700 font-semibold truncate">
                        {cert.hi}
                      </p>
                      <p className="text-[9px] text-blue-600 font-mono truncate">
                        {cert.code}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* =====================================================================
              RIGHT COLUMN: HIGH-TECH SOLAR IMAGE SHOWCASE + ENGINEER SPOTLIGHT
          ===================================================================== */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Real Solar Photo Showcase Container (White / Clean Tech Border) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden bg-white border-2 border-slate-200 shadow-2xl shadow-blue-900/10 group"
            >
              {/* Dynamic Slideshow with Framer Motion AnimatePresence */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-900">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={currentImage.url}
                    alt={currentImage.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-cover object-center filter brightness-100"
                  />
                </AnimatePresence>

                {/* Subtle Gradient for Bottom Captions */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>

                {/* Top Badges on Image */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{currentImage.badge}</span>
                  </div>
                  <div className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    <span>{currentImage.badgeHi}</span>
                  </div>
                </div>

                {/* Bottom Bilingual Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white z-10 space-y-1">
                  <p className="text-sm sm:text-base font-black line-clamp-1 drop-shadow-md">
                    {currentImage.title}
                  </p>
                  <p className="text-xs text-emerald-300 font-bold line-clamp-1 drop-shadow-md">
                    {currentImage.titleHi}
                  </p>
                  <p className="text-[11px] text-slate-300 line-clamp-1">
                    {currentImage.subtitle} • {currentImage.subtitleHi}
                  </p>
                </div>

                {/* Previous & Next Control Arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/70 hover:bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition border border-white/20 cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/70 hover:bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition border border-white/20 cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Indicator Dots */}
              <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {HERO_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide 
                          ? "w-8 bg-gradient-to-r from-blue-600 to-emerald-600" 
                          : "w-2 bg-slate-200 hover:bg-slate-400"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Live Site Projects • वास्तविक प्रोजेक्ट्स
                </span>
              </div>
            </motion.div>

            {/* Engineer Er. Satyaprakash Satyarthi Card (Clean White & Blue/Green Style) */}
            <motion.div 
              whileHover={{ y: -4, borderColor: "#0284c7" }}
              transition={{ duration: 0.3 }}
              className="bg-white border-2 border-slate-200 rounded-3xl p-5 shadow-xl shadow-slate-200/50 space-y-4"
            >
              <div className="flex items-center gap-4">
                {/* Real Photo of Er. Satyaprakash at TOI UP Dialogues */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-blue-600 shadow-md shrink-0">
                  <img
                    src={businessData.engineerImage}
                    alt="Er. Satyaprakash Satyarthi"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-blue-700 text-white text-[8px] text-center font-bold py-0.5 uppercase tracking-wider">
                    VERIFIED
                  </div>
                </div>

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded text-[10px] font-bold">
                    <UserCheck className="w-3 h-3 text-blue-600" />
                    <span>Lead Solar Engineer • मुख्य सोलर इंजीनियर</span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 leading-tight">
                    Er. Satyaprakash Satyarthi
                  </h3>

                  <p className="text-xs text-emerald-700 font-bold">
                    इंजीनियर सत्यप्रकाश सत्यार्थी (UPNEDA Approved)
                  </p>

                  <p className="text-[11px] text-slate-600 leading-tight">
                    Keynote Speaker: <strong className="text-slate-900">TOI UP Transformation Dialogues</strong> (Gorakhpur)
                  </p>
                </div>
              </div>

              {/* Direct Metrics & Action */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <p className="text-[10px] text-slate-500 font-medium">Solar Capacity | क्षमता</p>
                  <p className="text-base font-black text-blue-700">2,200+ kW</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <p className="text-[10px] text-slate-500 font-medium">Happy Homes | परिवार</p>
                  <p className="text-base font-black text-emerald-700">450+ Sites</p>
                </div>
              </div>

              <div className="flex gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                    "Hello Er. Satyaprakash, I want a solar quotation for my home in Gorakhpur/UP."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consult Engineer | सीधे बात करें</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${businessData.phone[0]}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2.5 rounded-xl text-xs flex items-center justify-center transition shadow-md"
                  title="Call Engineer Directly"
                >
                  <Phone className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* =========================================================================
          SCROLL DOWN ANIMATION (MOUSE INDICATOR & BOUNCING CHEVRON)
      ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center pt-8 text-center cursor-pointer"
        onClick={() => scrollTo("#subsidy")}
      >
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 transition">
          <span>Scroll to Explore | नीचे स्क्रॉल करें</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-emerald-600" />
          </motion.div>
        </div>

        {/* Animated Mouse Capsule Indicator */}
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex justify-center pt-1 mt-1.5 shadow-2xs">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-600"
          />
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;