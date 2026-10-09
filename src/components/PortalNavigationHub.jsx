import { 
  Sun, 
  BatteryCharging, 
  Tv, 
  Camera, 
  ArrowRight, 
  ShieldCheck, 
  PhoneCall,
  Calculator,
  Sparkles
} from "lucide-react";

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
      iconColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
      actionText: "View Rates",
      onClick: () => onNavigate("/on-grid"),
      highlight: true
    },
    {
      id: "off-grid",
      title: "Off-Grid & Chakki",
      titleHi: "ऑफ-ग्रिड दर सूची",
      badge: "24×7 Battery",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
      info: "1 kW – 5 kW Battery + 15 HP Agro Flour Mills",
      icon: BatteryCharging,
      iconColor: "bg-amber-50 text-amber-600 border-amber-200",
      actionText: "True Rate List",
      onClick: () => onNavigate("/off-grid"),
      highlight: false
    },
    {
      id: "calculator",
      title: "Solar Calculator",
      titleHi: "सोलर कैलकुलेटर",
      badge: "Instant Tool",
      badgeColor: "bg-yellow-100 text-yellow-900 border-yellow-300",
      info: "Calculate Bill, Subsidy & ROI in 30 Seconds",
      icon: Calculator,
      iconColor: "bg-amber-100 text-amber-800 border-amber-300",
      actionText: "Calculate Now",
      onClick: () => {
        if (onOpenCalculator) onOpenCalculator();
      },
      highlight: true
    },
    {
      id: "appliances",
      title: "Electronics Store",
      titleHi: "इलेक्ट्रॉनिक्स शोरूम",
      badge: "5-Star Quality",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      info: "Solar Inverter ACs, Fridges & Heavy Coolers",
      icon: Tv,
      iconColor: "bg-blue-50 text-blue-600 border-blue-200",
      actionText: "Showroom",
      onClick: () => onNavigate("/appliances"),
      highlight: false
    },
    {
      id: "gallery",
      title: "Real Works & Sites",
      titleHi: "साइट फोटो गैलरी",
      badge: "20+ Live Sites",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      info: "Pergolas & High-Rise GI Structures in UP",
      icon: Camera,
      iconColor: "bg-purple-50 text-purple-600 border-purple-200",
      actionText: "View Photos",
      onClick: () => onNavigate("/gallery"),
      highlight: false
    },
    {
      id: "contact",
      title: "Book Site Survey",
      titleHi: "निःशुल्क साइट सर्वे",
      badge: "Instant Call",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      info: "Free Roof Survey & Shadow Analysis in UP",
      icon: PhoneCall,
      iconColor: "bg-teal-50 text-teal-600 border-teal-200",
      actionText: "Book Now",
      onClick: () => onNavigate("/#contact"),
      highlight: false
    }
  ];

  return (
    <section id="portal-hub" className="py-12 sm:py-16 bg-white border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Compact & Clean Tata Power Solar Style */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Solutions & Official Portals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Explore Our Divisions & <span className="text-emerald-600">Verified Rates</span>
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

        {/* COMPACT SINGLE-LINE ROW ON DESKTOP (6 Columns in 1 Row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-6">
          {portalButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <button
                key={btn.id}
                type="button"
                onClick={btn.onClick}
                className={`group text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between cursor-pointer hover:-translate-y-1 ${
                  btn.highlight
                    ? "bg-gradient-to-b from-white to-emerald-50/40 border-emerald-300 hover:border-emerald-500 hover:shadow-md"
                    : "bg-white hover:bg-slate-50/80 border-slate-200 hover:border-blue-300 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Mini Badge */}
                  <div className="flex items-center justify-between gap-1.5 mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${btn.iconColor} shadow-2xs group-hover:scale-105 transition`}>
                      <Icon className="w-4 h-4" />
                    </div>
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
                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-black text-emerald-700 group-hover:text-emerald-800">
                  <span>{btn.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition text-emerald-600" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Clean, Compact Trust Banner */}
        <div className="mt-8 bg-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white text-xs sm:text-sm block">
                Primary Dealer: Tata Power, Adani, Waaree, Loom, UTL, Exide, Vikram & Servotech
              </strong>
              <p className="text-slate-400 text-[11px] font-hindi">
                🇮🇳 केंद्र व राज्य सरकार की सब्सिडी के बाद नेट देय राशि की स्पष्ट जानकारी। 6% से 7% ब्याज दर पर आसान बैंक ऋण।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (onOpenCalculator) onOpenCalculator();
              }}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer border border-amber-300"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Solar Calculator</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate("/#contact")}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-3.5 py-2 rounded-xl text-xs transition cursor-pointer"
            >
              Book Site Survey ↗
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
