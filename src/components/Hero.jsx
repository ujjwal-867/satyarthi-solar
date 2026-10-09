import { useState } from "react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  FileText, 
  MapPin, 
  Sparkles, 
  UserCheck, 
  MessageCircle, 
  ChevronDown,
  Sun,
  Zap,
  Award,
  PhoneCall,
  Clock
} from "lucide-react";

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
    hi: "बैंक खाते में ₹1,08,000 तक सीधी सरकारी सब्सिडी (DBT)"
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
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#040d1a] text-white pt-8 pb-12 lg:pt-14 lg:pb-16"
    >
      {/* =========================================================================
          HERO BACKGROUND: SEAMLESS MERGE WITH SPECIFIC SOLAR MIDNIGHT NAVY COLOR
          (IMAGE SHINES ON RIGHT, MERGED DIRECTIONAL SCRIM ON LEFT, NO TEXT BOX)
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Full-bleed, edge-to-edge Solar Sunburst Installation Image */}
        <img
          src="/images/brand/landing-hero-bg.jpg"
          alt="Satyarthi Solar Solution High Efficiency Solar Installation"
          className="w-full h-full object-cover object-right-top lg:object-center filter brightness-105 contrast-110 saturate-110"
        />

        {/* SPECIFIC COLOR MERGE: Deep Solar Midnight Navy (#040d1a) Directional Gradient */}
        {/* Seamlessly merges the left text canvas while letting the solar panels & sunburst shine vividly on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d1a] via-[#040d1a]/85 sm:via-[#040d1a]/70 lg:via-[#040d1a]/50 to-[#040d1a]/20 lg:to-transparent"></div>

        {/* Top subtle navbar integration overlay */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#040d1a]/70 to-transparent"></div>

        {/* Bottom smooth ambient blend into the white / slate-50 section below */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 via-slate-50/70 to-transparent pointer-events-none"></div>

        {/* Ambient brand color glows (Emerald & Solar Sky) */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* =========================================================================
          MAIN HERO CONTAINER (RESPONSIVE SIDE-BY-SIDE LAYOUT)
      ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =====================================================================
              LEFT COLUMN: CLEAN TYPOGRAPHY MERGED DIRECTLY OVER IMAGE CANVAS
              (NO RECTANGULAR CARD/BOX BACKGROUND - 100% PROFESSIONAL INTEGRATION)
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
              className="inline-flex items-center gap-2.5 bg-emerald-500/15 backdrop-blur-md border border-emerald-400/40 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>UPNEDA Empanelled Vendor</span>
              <span className="text-emerald-400/60">•</span>
              <span className="text-emerald-200">यूपीनेडा अधिकृत वेंडर</span>
              <span className="bg-emerald-500 text-slate-950 text-[10px] font-mono font-black px-2 py-0.5 rounded-full ml-1">
                {businessData.vendorCode}
              </span>
            </motion.div>

            {/* Business Name Badge & Main Headline (Satyarthi Solar Solution) */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3.5 py-1 rounded-xl text-xs font-black tracking-wide shadow-xs">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Satyarthi Solar Solution</span>
                <span className="text-white/40">•</span>
                <span className="text-emerald-400 font-hindi">सत्यार्थी सोलर सॉल्यूशन</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] text-white drop-shadow-md">
                Switch to Clean Energy with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                  Satyarthi Solar Solution
                </span>
              </h1>
              
              {/* Simultaneous Hindi Title */}
              <h2 className="text-xl sm:text-2xl lg:text-[1.65rem] font-extrabold text-emerald-400 tracking-tight leading-snug font-hindi drop-shadow-sm">
                सत्यार्थी सोलर सॉल्यूशन • <span className="text-sky-300">विश्वसनीय सोलर से बिजली बिल शून्य बनाएं</span>
              </h2>
            </motion.div>

            {/* Dual Description (English + Hindi) */}
            <motion.div variants={itemVariants} className="space-y-2.5 text-slate-200 text-sm sm:text-base leading-relaxed drop-shadow-xs">
              <p>
                Powering Homes, Businesses & Industries across Gorakhpur and Uttar Pradesh. Get up to <strong className="text-emerald-400 font-bold">₹1,08,000 Govt Subsidy</strong> directly credited into your bank account under PM Surya Ghar Muft Bijli Yojna.
              </p>
              <p className="text-emerald-200 font-medium text-xs sm:text-sm bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 font-hindi leading-relaxed">
                🇮🇳 <strong>हिन्दी विवरण:</strong> गोरखपुर व पूर्वांचल के घरों, दुकानों व उद्योगों के लिए सर्वोत्तम सोलर समाधान। 300 यूनिट तक मुफ्त बिजली व केंद्र व राज्य सरकार की ₹1,08,000 तक सीधी सब्सिडी।
              </p>
            </motion.div>

            {/* Dual Key Highlights Checklist (English & Hindi Together) */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-2.5 pt-1">
              {DUAL_POINTS.map((pt, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.14)" }}
                  className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-3 shadow-md space-y-1 transition"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-white leading-tight">
                      {pt.en}
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-300 font-semibold pl-6 leading-tight font-hindi">
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
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-600 hover:from-emerald-600 hover:to-sky-700 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-xl shadow-emerald-600/30 transition cursor-pointer text-sm sm:text-base border border-emerald-400/40"
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
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold px-5 py-3.5 rounded-2xl shadow-lg border border-white/25 transition text-sm sm:text-base cursor-pointer"
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
                className="inline-flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 backdrop-blur-md border border-emerald-400/40 text-emerald-300 font-bold px-4 py-3.5 rounded-2xl transition text-sm cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {businessData.whatsapp[0]}</span>
              </motion.a>
            </motion.div>

            {/* Office Landmark Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Motiram Adda, Deoria Road, Gorakhpur (273202) • मोतीराम अड्डा, देवरिया रोड गोरखपुर</span>
            </motion.div>

            {/* Certification Logos Strip in Merged Dark Glass Style */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-white/15">
              <div className="flex items-center gap-2 mb-2.5 text-[11px] font-black uppercase tracking-wider text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Government Approvals & Brand Certifications | सरकारी मान्यता व प्रमाणपत्र</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CERT_LOGOS.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.02, borderColor: "#34d399" }}
                    className="bg-white/8 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-xl p-2.5 flex items-center gap-2.5 transition shadow-sm group cursor-default"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate">
                        {cert.name}
                      </p>
                      <p className="text-[10px] text-emerald-300 font-semibold truncate font-hindi">
                        {cert.hi}
                      </p>
                      <p className="text-[9px] text-sky-300 font-mono truncate">
                        {cert.code}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* =====================================================================
              RIGHT COLUMN: SLEEK GLASS CARDS OVER THE VIBRANT SOLAR SUNBURST IMAGE
          ===================================================================== */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Solar Array Highlights Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-white/20 shadow-2xl p-5 space-y-3 text-white"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-amber-500/20 border border-amber-400/30 text-amber-400 rounded-xl">
                    <Sun className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white">
                      Tier-1 Mono PERC Solar Array
                    </h3>
                    <p className="text-[11px] text-emerald-400 font-bold font-hindi">
                      उच्च दक्षता सोलर पैनल्स • शून्य बिजली बिल
                    </p>
                  </div>
                </div>
                <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full shadow-md">
                  25 Yrs Warranty
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white/8 p-3 rounded-2xl border border-white/15">
                  <span className="text-[10px] font-bold text-sky-300 uppercase block">Govt Subsidy</span>
                  <span className="text-base font-black text-white block mt-0.5">₹1,08,000</span>
                  <span className="text-[10px] text-sky-200 font-hindi">सीधी बैंक डीबीटी</span>
                </div>
                <div className="bg-white/8 p-3 rounded-2xl border border-white/15">
                  <span className="text-[10px] font-bold text-emerald-300 uppercase block">Free Power</span>
                  <span className="text-base font-black text-white block mt-0.5">300 Units/mo</span>
                  <span className="text-[10px] text-emerald-200 font-hindi">प्रति माह मुफ्त बिजली</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 leading-relaxed">
                Empanelled with UPNEDA (Vendor Code: <strong className="text-emerald-400">GKP2604066741</strong>) and Authorized Dealer for Loom Solar, Fujiyama & Amaze.
              </p>
            </motion.div>

            {/* Engineer Er. Satyaprakash Satyarthi Card (Clean Dark Glass Style) */}
            <motion.div 
              whileHover={{ y: -4, borderColor: "#38bdf8" }}
              transition={{ duration: 0.3 }}
              className="bg-slate-950/80 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl space-y-4 text-white"
            >
              <div className="flex items-center gap-4">
                {/* Real Photo of Er. Satyaprakash at TOI UP Dialogues */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-sky-400 shadow-lg shrink-0">
                  <img
                    src={businessData.engineerImage}
                    alt="Er. Satyaprakash Satyarthi"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-sky-600 text-white text-[8px] text-center font-bold py-0.5 uppercase tracking-wider">
                    VERIFIED
                  </div>
                </div>

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="inline-flex items-center gap-1 bg-sky-500/20 text-sky-300 border border-sky-400/30 px-2 py-0.5 rounded text-[10px] font-bold">
                    <UserCheck className="w-3 h-3 text-sky-400" />
                    <span>Lead Solar Engineer • मुख्य सोलर इंजीनियर</span>
                  </div>

                  <h3 className="text-base font-black text-white leading-tight">
                    Er. Satyaprakash Satyarthi
                  </h3>

                  <p className="text-xs text-emerald-400 font-bold font-hindi">
                    इंजीनियर सत्यप्रकाश सत्यार्थी (UPNEDA Approved)
                  </p>

                  <p className="text-[11px] text-slate-300 leading-tight">
                    Keynote Speaker: <strong className="text-white">TOI UP Transformation Dialogues</strong> (Gorakhpur)
                  </p>
                </div>
              </div>

              {/* Direct Metrics & Action */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-white/8 p-2.5 rounded-xl border border-white/15">
                  <p className="text-[10px] text-slate-400 font-medium">Solar Capacity | क्षमता</p>
                  <p className="text-base font-black text-sky-400">2,200+ kW</p>
                </div>
                <div className="bg-white/8 p-2.5 rounded-xl border border-white/15">
                  <p className="text-[10px] text-slate-400 font-medium">Happy Homes | परिवार</p>
                  <p className="text-base font-black text-emerald-400">450+ Sites</p>
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
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-lg transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consult Engineer | सीधे बात करें</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${businessData.phone[0]}`}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold p-2.5 rounded-xl text-xs flex items-center justify-center transition shadow-lg"
                  title="Call Engineer Directly (24x7)"
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
        <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-white/20">
          <span className="text-xs font-bold text-slate-200 hover:text-emerald-400 transition">
            Scroll to Explore | नीचे स्क्रॉल करें
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-emerald-400" />
          </motion.div>
        </div>

        {/* Animated Mouse Capsule Indicator */}
        <div className="w-5 h-8 rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-xs flex justify-center pt-1 mt-1.5 shadow-md">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          />
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;