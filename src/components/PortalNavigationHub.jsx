import { motion } from "framer-motion";
import { 
  Sun, 
  BatteryCharging, 
  Tv, 
  Camera, 
  ArrowRight, 
  ShieldCheck, 
  PhoneCall,
  Calculator,
  Sparkles,
  Box
} from "lucide-react";
import {
  ExpressiveKineticText,
  CollaborativeCursorsOverlay,
  LiveActivityStreamBadge
} from "./MotionEffects";

export default function PortalNavigationHub({ onNavigate, onOpenCalculator }) {
  const portalButtons = [
    {
      id: "on-grid",
      title: "On-Grid Solar",
      titleHi: "ऑन-ग्रिड सोलर",
      badge: "Subsidy 2026",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      info: "1 kW – 10 kW • Up to ₹1.08L Direct Subsidy",
      icon: Sun,
      iconColor: "bg-emerald-500 text-white shadow-emerald-500/30",
      glowColor: "from-emerald-500/15 via-teal-500/5 to-transparent border-emerald-300 hover:border-emerald-500",
      actionText: "View Rates",
      onClick: () => onNavigate("/on-grid")
    },
    {
      id: "off-grid",
      title: "Off-Grid & Chakki",
      titleHi: "ऑफ-ग्रिड दर सूची",
      badge: "24×7 Battery",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
      info: "1 kW – 5 kW Battery + 15 HP Agro Flour Mills",
      icon: BatteryCharging,
      iconColor: "bg-amber-500 text-slate-950 shadow-amber-500/30",
      glowColor: "from-amber-500/15 via-yellow-500/5 to-transparent border-amber-200 hover:border-amber-500",
      actionText: "True Rate List",
      onClick: () => onNavigate("/off-grid")
    },
    {
      id: "calculator",
      title: "Solar Calculator",
      titleHi: "सोलर कैलकुलेटर",
      badge: "Instant Tool",
      badgeColor: "bg-yellow-100 text-yellow-900 border-yellow-300",
      info: "Calculate Bill, Subsidy & ROI in 30 Seconds",
      icon: Calculator,
      iconColor: "bg-slate-900 text-amber-400 shadow-slate-900/30",
      glowColor: "from-yellow-400/20 via-amber-500/5 to-transparent border-amber-300 hover:border-amber-500",
      actionText: "Calculate Now",
      onClick: () => {
        if (onOpenCalculator) onOpenCalculator();
      }
    },
    {
      id: "appliances",
      title: "Electronics Store",
      titleHi: "इलेक्ट्रॉनिक्स शोरूम",
      badge: "5-Star Quality",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      info: "Solar Inverter ACs, Fridges & Heavy Coolers",
      icon: Tv,
      iconColor: "bg-blue-600 text-white shadow-blue-600/30",
      glowColor: "from-blue-500/15 via-sky-500/5 to-transparent border-blue-200 hover:border-blue-500",
      actionText: "Showroom",
      onClick: () => onNavigate("/appliances")
    },
    {
      id: "gallery",
      title: "Real Works & Sites",
      titleHi: "साइट फोटो गैलरी",
      badge: "2500+ Clients",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      info: "Pergolas & High-Rise GI Structures in UP",
      icon: Camera,
      iconColor: "bg-purple-600 text-white shadow-purple-600/30",
      glowColor: "from-purple-500/15 via-pink-500/5 to-transparent border-purple-200 hover:border-purple-500",
      actionText: "View Photos",
      onClick: () => onNavigate("/gallery")
    },
    {
      id: "contact",
      title: "Book Site Survey",
      titleHi: "निःशुल्क साइट सर्वे",
      badge: "Instant Call",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      info: "Free Roof Survey & Shadow Analysis in UP",
      icon: PhoneCall,
      iconColor: "bg-teal-600 text-white shadow-teal-600/30",
      glowColor: "from-teal-500/15 via-emerald-500/5 to-transparent border-teal-200 hover:border-teal-500",
      actionText: "Book Now",
      onClick: () => onNavigate("/#contact")
    }
  ];

  return (
    <section id="portal-hub" className="py-12 sm:py-16 bg-white border-t border-b border-slate-200/80 relative overflow-hidden">
      {/* Real-Time Collaborative Engineering Cursors */}
      <CollaborativeCursorsOverlay
        cursors={[
          {
            name: "PM Surya Ghar Portal",
            badge: "₹1,08,000 Subsidy Live",
            color: "bg-emerald-500 text-slate-950",
            pathX: ["8%", "24%", "14%", "8%"],
            pathY: ["15%", "45%", "68%", "15%"],
            duration: 15
          },
          {
            name: "Showroom Desk • GKP",
            badge: "True Rate List 2026",
            color: "bg-amber-400 text-slate-950",
            pathX: ["82%", "68%", "76%", "82%"],
            pathY: ["22%", "52%", "30%", "22%"],
            duration: 17
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Compact & Clean Tata Power Solar Style with Expressive Kinetic Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Interactive Bento Portals • 2500+ Happy Clients</span>
              </div>
              <LiveActivityStreamBadge />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              <ExpressiveKineticText
                text="Explore Our Divisions & Verified Rates"
                highlightWords={["Divisions", "Verified", "Rates"]}
                className="!justify-start"
              />
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-hindi font-medium mt-0.5">
              अपनी आवश्यकता के अनुसार दरें, सब्सिडी, सोलर कैलकुलेटर व गैलरी देखें
            </p>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-[11px] font-bold text-slate-600 block">
              UPNEDA Approved Vendor Code: <strong className="text-emerald-700 font-mono">GKP2604066741</strong>
            </span>
            <span className="text-[10px] text-slate-500 font-hindi">
              केंद्र व राज्य सरकार की अधिकतम ₹1,08,000 सब्सिडी
            </span>
          </div>
        </div>

        {/* COMPACT SINGLE-LINE ANIMATED 3D BENTO ROW ON DESKTOP (6 Columns in 1 Row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-6" style={{ perspective: "1000px" }}>
          {portalButtons.map((btn, idx) => {
            const Icon = btn.icon;
            return (
              <motion.button
                key={btn.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6, rotateX: 4, rotateY: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={btn.onClick}
                className={`group relative text-left p-4 rounded-2xl border bg-gradient-to-br ${btn.glowColor} transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-xl overflow-hidden`}
              >
                {/* Animated Shimmer Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Bar with Icon & Mini Badge */}
                  <div className="flex items-center justify-between gap-1.5 mb-3">
                    <motion.div 
                      whileHover={{ rotate: 12, scale: 1.12 }}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-md ${btn.iconColor} transition`}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${btn.badgeColor}`}>
                      {btn.badge}
                    </span>
                  </div>

                  {/* Title & Hindi Subtitle */}
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-emerald-700 transition leading-snug">
                    {btn.title}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-500 font-hindi mt-0.5">
                    {btn.titleHi}
                  </p>

                  {/* Basic 1-line Info */}
                  <p className="text-[11px] text-slate-600 leading-snug mt-2 line-clamp-2">
                    {btn.info}
                  </p>
                </div>

                {/* Bottom Compact Action Arrow */}
                <div className="relative z-10 mt-4 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-black text-emerald-700 group-hover:text-emerald-800">
                  <span>{btn.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-emerald-600" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Clean, Compact Trust Banner with 3D AR/VR Shortcut */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs border border-slate-800 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white text-xs sm:text-sm block">
                Primary Dealer: Tata Power, Adani, Waaree, Loom, UTL, Exide, Vikram & Servotech
              </strong>
              <p className="text-slate-300 text-[11px] font-hindi">
                🇮🇳 केंद्र व राज्य सरकार की सब्सिडी के बाद नेट देय राशि की स्पष्ट जानकारी। 6% से 7% ब्याज दर पर आसान बैंक ऋण।
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                const el = document.querySelector("#ar-vr-solar");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-black px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer border border-sky-400/40"
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D AR/VR View</span>
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                if (onOpenCalculator) onOpenCalculator();
              }}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer border border-amber-300"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Solar Calculator</span>
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate("/#contact")}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-3.5 py-2 rounded-xl text-xs transition cursor-pointer"
            >
              Book Site Survey ↗
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
