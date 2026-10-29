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
      badgeColor: "bg-blue-50 text-blue-900 border-blue-200",
      info: "1 kW – 10 kW • Up to ₹1.08L Direct Subsidy",
      icon: Sun,
      iconColor: "bg-[#0a1e3b] text-amber-400",
      cardStyle: "bg-slate-50/70 hover:bg-blue-50/50 border-slate-200/90 hover:border-blue-400",
      actionText: "View Rates",
      onClick: () => onNavigate("/on-grid")
    },
    {
      id: "off-grid",
      title: "Off-Grid & Chakki",
      titleHi: "ऑफ-ग्रिड दर सूची",
      badge: "24×7 Backup",
      badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
      info: "1 kW – 5 kW Battery + 15 HP Flour Mills",
      icon: BatteryCharging,
      iconColor: "bg-amber-500 text-slate-950",
      cardStyle: "bg-slate-50/70 hover:bg-amber-50/50 border-slate-200/90 hover:border-amber-400",
      actionText: "True Rate List",
      onClick: () => onNavigate("/off-grid")
    },
    {
      id: "calculator",
      title: "Solar Calculator",
      titleHi: "सोलर कैलकुलेटर",
      badge: "Instant Tool",
      badgeColor: "bg-blue-50 text-blue-900 border-blue-200",
      info: "Estimate Bill, Subsidy & ROI in 30 Secs",
      icon: Calculator,
      iconColor: "bg-blue-600 text-white",
      cardStyle: "bg-slate-50/70 hover:bg-blue-50/50 border-slate-200/90 hover:border-blue-400",
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
      badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
      info: "Solar Inverter ACs, Fridges & Coolers",
      icon: Tv,
      iconColor: "bg-[#0a1e3b] text-amber-400",
      cardStyle: "bg-slate-50/70 hover:bg-amber-50/50 border-slate-200/90 hover:border-amber-400",
      actionText: "Visit Showroom",
      onClick: () => onNavigate("/appliances")
    },
    {
      id: "gallery",
      title: "Real Works & Sites",
      titleHi: "साइट फोटो गैलरी",
      badge: "2500+ Sites",
      badgeColor: "bg-blue-50 text-blue-900 border-blue-200",
      info: "Pergolas & High-Rise GI Structures in UP",
      icon: Camera,
      iconColor: "bg-blue-700 text-white",
      cardStyle: "bg-slate-50/70 hover:bg-blue-50/50 border-slate-200/90 hover:border-blue-400",
      actionText: "View Photos",
      onClick: () => onNavigate("/gallery")
    },
    {
      id: "contact",
      title: "Book Site Survey",
      titleHi: "निःशुल्क साइट सर्वे",
      badge: "Free Visit",
      badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
      info: "Free Roof Survey & Shadow Analysis in UP",
      icon: PhoneCall,
      iconColor: "bg-amber-500 text-slate-950",
      cardStyle: "bg-slate-50/70 hover:bg-amber-50/50 border-slate-200/90 hover:border-amber-400",
      actionText: "Book Now",
      onClick: () => onNavigate("/#contact")
    }
  ];

  return (
    <section id="portal-hub" className="py-12 sm:py-14 bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-7">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-950 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-200/90">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Quick Access Portals • मुख्य विभाग</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            <ExpressiveKineticText
              text="Explore Our Divisions & Rate Lists"
              highlightWords={["Divisions", "Rate", "Lists"]}
              highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-amber-500"
            />
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Instant access to subsidy rate charts, off-grid systems, and solar calculators.
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
                whileTap={{ scale: 0.98 }}
                onClick={btn.onClick}
                className={`group relative text-left p-4 rounded-2xl border ${btn.cardStyle} transition-all duration-300 flex flex-col justify-between cursor-pointer desktop-gallery-card-hover overflow-hidden`}
              >
                {/* Desktop-Only Gallery Shine Sweep */}
                <div className="desktop-shine-sweep" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-1.5 mb-3">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.12 }}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-xs ${btn.iconColor} transition`}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                    <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full border ${btn.badgeColor}`}>
                      {btn.badge}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-900 transition leading-snug">
                    {btn.title}
                  </h3>
                  <span className="text-[10.5px] font-semibold text-blue-900 font-hindi block mt-0.5">
                    {btn.titleHi}
                  </span>

                  <p className="text-[11px] text-slate-600 leading-snug mt-1.5 line-clamp-2">
                    {btn.info}
                  </p>
                </div>

                <div className="relative z-10 mt-3.5 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-blue-700 group-hover:text-blue-900">
                  <span>{btn.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-600" />
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
