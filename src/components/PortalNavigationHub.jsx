import { motion } from "framer-motion";
import { 
  Sun, 
  BatteryCharging, 
  Tv, 
  Camera, 
  ArrowRight, 
  PhoneCall,
  Calculator,
  Sparkles
} from "lucide-react";
import { ExpressiveKineticText } from "./MotionEffects";

export default function PortalNavigationHub({ onNavigate, onOpenCalculator }) {
  const portalButtons = [
    {
      id: "on-grid",
      title: "On-Grid Solar",
      titleHi: "ऑन-ग्रिड सोलर",
      badge: "Subsidy 2026",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      info: "1 kW – 10 kW • Up to ₹1.08L Direct Subsidy",
      icon: Sun,
      iconColor: "bg-emerald-600 text-white",
      cardStyle: "bg-slate-50/70 hover:bg-emerald-50/40 border-slate-200/90 hover:border-emerald-400",
      actionText: "View Rates",
      onClick: () => onNavigate("/on-grid")
    },
    {
      id: "off-grid",
      title: "Off-Grid & Chakki",
      titleHi: "ऑफ-ग्रिड दर सूची",
      badge: "24×7 Backup",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      info: "1 kW – 5 kW Battery + 15 HP Flour Mills",
      icon: BatteryCharging,
      iconColor: "bg-amber-500 text-slate-950",
      cardStyle: "bg-slate-50/70 hover:bg-amber-50/40 border-slate-200/90 hover:border-amber-400",
      actionText: "True Rate List",
      onClick: () => onNavigate("/off-grid")
    },
    {
      id: "calculator",
      title: "Solar Calculator",
      titleHi: "सोलर कैलकुलेटर",
      badge: "Instant Tool",
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
      info: "Estimate Bill, Subsidy & ROI in 30 Secs",
      icon: Calculator,
      iconColor: "bg-teal-600 text-white",
      cardStyle: "bg-slate-50/70 hover:bg-teal-50/40 border-slate-200/90 hover:border-teal-400",
      actionText: "Calculate Now",
      onClick: () => {
        if (onOpenCalculator) onOpenCalculator();
      }
    },
    {
      id: "appliances",
      title: "Electronics Store",
      titleHi: "इलेक्ट्रॉनिक्स शोरूम",
      badge: "5-Star Store",
      badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
      info: "Solar Inverter ACs, Fridges & Coolers",
      icon: Tv,
      iconColor: "bg-sky-600 text-white",
      cardStyle: "bg-slate-50/70 hover:bg-sky-50/40 border-slate-200/90 hover:border-sky-400",
      actionText: "Visit Showroom",
      onClick: () => onNavigate("/appliances")
    },
    {
      id: "gallery",
      title: "Real Works & Sites",
      titleHi: "साइट फोटो गैलरी",
      badge: "2500+ Sites",
      badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
      info: "Pergolas & High-Rise GI Structures in UP",
      icon: Camera,
      iconColor: "bg-indigo-600 text-white",
      cardStyle: "bg-slate-50/70 hover:bg-indigo-50/40 border-slate-200/90 hover:border-indigo-400",
      actionText: "View Photos",
      onClick: () => onNavigate("/gallery")
    },
    {
      id: "contact",
      title: "Book Site Survey",
      titleHi: "निःशुल्क साइट सर्वे",
      badge: "Free Visit",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      info: "Free Roof Survey & Shadow Analysis in UP",
      icon: PhoneCall,
      iconColor: "bg-slate-800 text-white",
      cardStyle: "bg-slate-50/70 hover:bg-emerald-50/40 border-slate-200/90 hover:border-emerald-400",
      actionText: "Book Now",
      onClick: () => onNavigate("/#contact")
    }
  ];

  return (
    <section id="portal-hub" className="py-12 sm:py-14 bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-7">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50/80 px-3 py-1 rounded-full border border-teal-200/80">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Quick Access Portals • मुख्य विभाग</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            <ExpressiveKineticText
              text="Explore Our Divisions & Rate Lists"
              highlightWords={["Divisions", "Rate", "Lists"]}
            />
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-hindi">
            अपनी आवश्यकता के अनुसार सब्सिडी दरें, ऑफ-ग्रिड सूची, कैलकुलेटर या शोरूम चुनें
          </p>
        </div>

        {/* COMPACT SINGLE-LINE ANIMATED 3D BENTO ROW ON DESKTOP (6 Columns in 1 Row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5" style={{ perspective: "1000px" }}>
          {portalButtons.map((btn, idx) => {
            const Icon = btn.icon;
            return (
              <motion.button
                key={btn.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5, rotateX: 3, rotateY: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={btn.onClick}
                className={`group relative text-left p-4 rounded-2xl border ${btn.cardStyle} transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-lg overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-1.5 mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-xs ${btn.iconColor} transition`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full border ${btn.badgeColor}`}>
                      {btn.badge}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-teal-700 transition leading-snug">
                    {btn.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-500 font-hindi mt-0.5">
                    {btn.titleHi}
                  </p>

                  <p className="text-[11px] text-slate-600 leading-snug mt-2 line-clamp-2">
                    {btn.info}
                  </p>
                </div>

                <div className="relative z-10 mt-3.5 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-teal-700 group-hover:text-teal-800">
                  <span>{btn.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-teal-600" />
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
