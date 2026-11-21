import { motion } from "framer-motion";
import { 
  Sun, 
  BatteryCharging, 
  Tv, 
  Camera, 
  ArrowRight, 
  PhoneCall,
  Calculator,
  Zap
} from "lucide-react";
import { ExpressiveKineticText } from "./MotionEffects";

export default function PortalNavigationHub({ onNavigate, onOpenCalculator }) {
  const portalButtons = [
    {
      id: "on-grid",
      title: "On-Grid Solar",
      titleHi: "ऑन-ग्रिड सोलर",
      badge: "Subsidy 2026",
      badgeColor: "bg-blue-100 text-blue-950 border-blue-300",
      info: "1 kW – 10 kW • Up to ₹1.08L Direct Subsidy",
      icon: Sun,
      iconColor: "bg-[#0a1e3b] text-sky-400",
      cardStyle: "bg-white hover:bg-slate-50 border-slate-300 hover:border-[#0a1e3b]",
      actionText: "View Rates",
      onClick: () => onNavigate("/on-grid")
    },
    {
      id: "off-grid",
      title: "Off-Grid & Chakki",
      titleHi: "ऑफ-ग्रिड दर सूची",
      badge: "24×7 Backup",
      badgeColor: "bg-slate-100 text-slate-900 border-slate-300",
      info: "1 kW – 5 kW Battery + 15 HP Flour Mills",
      icon: BatteryCharging,
      iconColor: "bg-[#0a1e3b] text-sky-400",
      cardStyle: "bg-white hover:bg-slate-50 border-slate-300 hover:border-[#0a1e3b]",
      actionText: "True Rate List",
      onClick: () => onNavigate("/off-grid")
    },
    {
      id: "calculator",
      title: "Solar Calculator",
      titleHi: "सोलर कैलकुलेटर",
      badge: "Instant Tool",
      badgeColor: "bg-blue-100 text-blue-950 border-blue-300",
      info: "Estimate Bill, Subsidy & ROI in 30 Secs",
      icon: Calculator,
      iconColor: "bg-[#0a1e3b] text-white",
      cardStyle: "bg-white hover:bg-slate-50 border-slate-300 hover:border-[#0a1e3b]",
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
      badgeColor: "bg-slate-100 text-slate-900 border-slate-300",
      info: "Solar Inverter ACs, Fridges & Coolers",
      icon: Tv,
      iconColor: "bg-[#0a1e3b] text-sky-400",
      cardStyle: "bg-white hover:bg-slate-50 border-slate-300 hover:border-[#0a1e3b]",
      actionText: "Visit Showroom",
      onClick: () => onNavigate("/appliances")
    },
    {
      id: "gallery",
      title: "Real Works & Sites",
      titleHi: "साइट फोटो गैलरी",
      badge: "2,500+ Sites",
      badgeColor: "bg-emerald-100 text-emerald-950 border-emerald-300",
      info: "Pergolas & High-Rise GI Structures in UP",
      icon: Camera,
      iconColor: "bg-[#0a1e3b] text-white",
      cardStyle: "bg-white hover:bg-slate-50 border-slate-300 hover:border-[#0a1e3b]",
      actionText: "View Photos",
      onClick: () => onNavigate("/gallery")
    },
    {
      id: "contact",
      title: "Book Site Survey",
      titleHi: "निःशुल्क साइट सर्वे",
      badge: "Free Visit",
      badgeColor: "bg-emerald-100 text-emerald-950 border-emerald-300",
      info: "Free Roof Survey & Shadow Analysis in UP",
      icon: PhoneCall,
      iconColor: "bg-emerald-700 text-white",
      cardStyle: "bg-white hover:bg-slate-50 border-slate-300 hover:border-emerald-700",
      actionText: "Book Now",
      onClick: () => onNavigate("/#contact")
    }
  ];

  return (
    <section id="portal-hub" className="pt-8 pb-8 bg-white border-b border-slate-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Editorial Header Breaking Monotony */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0a1e3b] bg-slate-100 px-3 py-1 rounded-full border border-slate-300">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>Quick Access Portals • मुख्य विभाग</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              <ExpressiveKineticText
                text="Explore Our Divisions & Rate Lists"
                highlightWords={["Divisions", "Rate", "Lists"]}
                highlightClass="text-blue-600 font-extrabold"
              />
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-700 sm:text-right max-w-xs">
            Instant access to subsidy rate charts, off-grid systems, and solar calculators.
          </p>
        </div>

        {/* COMPACT SINGLE-LINE ROW ON DESKTOP (6 Columns in 1 Row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {portalButtons.map((btn, idx) => {
            const Icon = btn.icon;
            return (
              <motion.button
                key={btn.id}
                type="button"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={btn.onClick}
                className={`group relative text-left p-4 rounded-xl border ${btn.cardStyle} transition-all duration-200 flex flex-col justify-between cursor-pointer desktop-gallery-card-hover overflow-hidden shadow-2xs`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-1.5 mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shadow-xs ${btn.iconColor}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border ${btn.badgeColor}`}>
                      {btn.badge}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-900 transition leading-snug">
                    {btn.title}
                  </h3>
                  <span className="text-[11px] font-bold text-blue-900 font-hindi block mt-0.5">
                    {btn.titleHi}
                  </span>

                  <p className="text-[11px] font-medium text-slate-700 leading-snug mt-1.5 line-clamp-2">
                    {btn.info}
                  </p>
                </div>

                <div className="relative z-10 mt-3.5 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] font-extrabold text-[#0a1e3b] group-hover:text-blue-700">
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
