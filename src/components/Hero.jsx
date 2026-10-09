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
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-slate-900 text-slate-900 pt-8 pb-12 lg:pt-14 lg:pb-16"
    >
      {/* =========================================================================
          COMPLETE HERO SECTION BACKGROUND: 100% UN-FADED VIBRANT SOLAR SUNBURST IMAGE
          (ZERO WHITE WASH / ZERO FADING OVERLAY AS REQUESTED)
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Full-bleed, un-faded, edge-to-edge Solar Sunburst Installation Image */}
        <img
          src="/images/brand/landing-hero-bg.jpg"
          alt="Satyarthi Solar Solution High Efficiency Solar Installation"
          className="w-full h-full object-cover object-right-top lg:object-center filter brightness-100 contrast-105 saturate-110"
        />

        {/* Minimal subtle ambient top edge tint for smooth navbar integration */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>

      {/* =========================================================================
          MAIN HERO CONTAINER (RESPONSIVE SIDE-BY-SIDE LAYOUT)
      ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =====================================================================
              LEFT COLUMN: FROSTED GLASS SAAS CARD FOR RAZOR-SHARP LEGIBILITY
              AGAINST THE VIBRANT UN-FADED SOLAR BACKGROUND
          ===================================================================== */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 bg-white/92 backdrop-blur-md rounded-3xl p-6 sm:p-9 border border-white/80 shadow-2xl shadow-slate-950/20"
          >
            {/* Top Govt Empanelled Badge (Bilingual) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 bg-emerald-50/95 border border-emerald-300 text-emerald-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>UPNEDA Empanelled Vendor</span>
              <span className="text-emerald-400">•</span>
              <span className="text-emerald-800">यूपीनेडा अधिकृत वेंडर</span>
              <span className="bg-emerald-600 text-white text-[10px] font-mono px-2 py-0.5 rounded-full ml-1">
                {businessData.vendorCode}
              </span>
            </motion.div>

            {/* Business Name Badge & Main Headline (Satyarthi Solar Solution) */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1 rounded-xl text-xs font-black tracking-wide">
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Satyarthi Solar Solution</span>
                <span className="text-blue-300">•</span>
                <span className="text-emerald-700">सत्यार्थी सोलर सॉल्यूशन</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] text-slate-900">
                Switch to Clean Energy with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-600 to-emerald-600">
                  Satyarthi Solar Solution
                </span>
              </h1>
              
              {/* Simultaneous Hindi Title */}
              <h2 className="text-xl sm:text-2xl lg:text-[1.65rem] font-extrabold text-emerald-700 tracking-tight leading-snug font-hindi">
                सत्यार्थी सोलर सॉल्यूशन • <span className="text-blue-700">विश्वसनीय सोलर से बिजली बिल शून्य बनाएं</span>
              </h2>
            </motion.div>

            {/* Dual Description (English + Hindi) */}
            <motion.div variants={itemVariants} className="space-y-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Powering Homes, Businesses & Industries across Gorakhpur and Uttar Pradesh. Get up to <strong className="text-emerald-700 font-bold">₹1,08,000 Govt Subsidy</strong> directly credited into your bank account under PM Surya Ghar Muft Bijli Yojna.
              </p>
              <p className="text-slate-700 font-medium text-xs sm:text-sm bg-blue-50/90 p-3 rounded-2xl border border-blue-200 font-hindi leading-relaxed">
                🇮🇳 <strong>हिन्दी विवरण:</strong> गोरखपुर व पूर्वांचल के घरों, दुकानों व उद्योगों के लिए सर्वोत्तम सोलर समाधान। 300 यूनिट तक मुफ्त बिजली व केंद्र व राज्य सरकार की ₹1,08,000 तक सीधी सब्सिडी।
              </p>
            </motion.div>

            {/* Dual Key Highlights Checklist (English & Hindi Together) */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-2.5 pt-1">
              {DUAL_POINTS.map((pt, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.01, backgroundColor: "#ffffff" }}
                  className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs space-y-1 transition"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-900 leading-tight">
                      {pt.en}
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-800 font-semibold pl-6 leading-tight font-hindi">
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
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-blue-700/20 transition cursor-pointer text-sm sm:text-base border border-blue-500/30"
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
                className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-bold px-4 py-3.5 rounded-2xl transition text-sm cursor-pointer shadow-xs"
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
                    className="bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl p-2.5 flex items-center gap-2.5 transition shadow-2xs group cursor-default"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {cert.name}
                      </p>
                      <p className="text-[10px] text-emerald-700 font-semibold truncate font-hindi">
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
              RIGHT COLUMN: FLOATING GLASS CARDS OVER THE VIBRANT UN-FADED SOLAR IMAGE
          ===================================================================== */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Floating Glassmorphic Solar Highlights Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl bg-white/92 backdrop-blur-md border border-white/80 shadow-2xl shadow-slate-950/20 p-5 space-y-3"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-amber-100 text-amber-700 rounded-xl">
                    <Sun className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900">
                      Tier-1 Mono PERC Solar Array
                    </h3>
                    <p className="text-[11px] text-emerald-700 font-bold font-hindi">
                      उच्च दक्षता सोलर पैनल्स • शून्य बिजली बिल
                    </p>
                  </div>
                </div>
                <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  25 Yrs Warranty
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-blue-50/80 p-3 rounded-2xl border border-blue-200">
                  <span className="text-[10px] font-bold text-blue-800 uppercase block">Govt Subsidy</span>
                  <span className="text-base font-black text-blue-700 block mt-0.5">₹1,08,000</span>
                  <span className="text-[10px] text-blue-600 font-hindi">सीधी बैंक डीबीटी</span>
                </div>
                <div className="bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase block">Free Power</span>
                  <span className="text-base font-black text-emerald-700 block mt-0.5">300 Units/mo</span>
                  <span className="text-[10px] text-emerald-600 font-hindi">प्रति माह मुफ्त बिजली</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-600 leading-relaxed">
                Empanelled with UPNEDA (Vendor Code: <strong>GKP2604066741</strong>) and Authorized Dealer for Loom Solar, Fujiyama & Amaze.
              </p>
            </motion.div>

            {/* Engineer Er. Satyaprakash Satyarthi Card (Clean White Glass Style) */}
            <motion.div 
              whileHover={{ y: -4, borderColor: "#0284c7" }}
              transition={{ duration: 0.3 }}
              className="bg-white/92 backdrop-blur-md border border-white/80 rounded-3xl p-5 shadow-2xl shadow-slate-950/20 space-y-4"
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

                  <p className="text-xs text-emerald-700 font-bold font-hindi">
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
        <div className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md border border-white/60">
          <span className="text-xs font-bold text-slate-800 hover:text-emerald-700 transition">
            Scroll to Explore | नीचे स्क्रॉल करें
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-emerald-600" />
          </motion.div>
        </div>

        {/* Animated Mouse Capsule Indicator */}
        <div className="w-5 h-8 rounded-full border-2 border-white/80 bg-white/40 backdrop-blur-xs flex justify-center pt-1 mt-1.5 shadow-md">
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