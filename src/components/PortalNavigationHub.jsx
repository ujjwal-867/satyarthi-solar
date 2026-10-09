import { motion } from "framer-motion";
import { 
  Sun, 
  BatteryCharging, 
  Tv, 
  Camera, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Banknote, 
  Zap, 
  Wheat, 
  CheckCircle2, 
  MapPin,
  PhoneCall,
  CalendarCheck
} from "lucide-react";

export default function PortalNavigationHub({ onNavigate }) {
  const quickLinks = [
    { label: "☀️ On-Grid (with Subsidy)", route: "/on-grid", badge: "Up to ₹1.08L Subsidy" },
    { label: "🔋 Off-Grid (True Rate List)", route: "/off-grid", badge: "24×7 Battery Backup" },
    { label: "🏠 Home Appliances & Smart Living", route: "/appliances", badge: "5-Star AC & Store" },
    { label: "📸 Real Works, Sites & Gallery", route: "/gallery", badge: "20+ Live Projects" },
    { label: "📞 Contact & Survey Booking", route: "/#contact", badge: "Instant Response" },
  ];

  const portals = [
    {
      id: "on-grid",
      route: "/on-grid",
      badge: "Govt Subsidy Scheme 2026",
      badgeColor: "bg-emerald-500 text-slate-950 font-black",
      icon: Sun,
      iconBg: "bg-emerald-600 text-white shadow-emerald-600/30",
      title: "On-Grid Solar (with Subsidy)",
      titleHi: "ऑन-ग्रिड सोलर • पीएम सूर्य घर योजना",
      rateHeadline: "1 kW ₹85k | 2 kW ₹1.4L | 3 kW ₹1.9L | 5 kW ₹3L | 10 kW ₹6L",
      description: "Get up to ₹1,08,000 government subsidy directly in your bank. Transparent net cost starting at just ₹40,000* with 6% - 7% easy bank loan.",
      bullet: "₹1,08,000 Max Direct Subsidy (DBT) + Net Metering",
      buttonText: "View Rates & Subsidy Breakdown",
      buttonTextHi: "सब्सिडी व दरें देखें ↗",
      featured: true
    },
    {
      id: "off-grid",
      route: "/off-grid",
      badge: "24×7 Battery Backup",
      badgeColor: "bg-amber-500 text-slate-950 font-black",
      icon: BatteryCharging,
      iconBg: "bg-amber-600 text-white shadow-amber-600/30",
      title: "Off-Grid Solar (True Rate List)",
      titleHi: "ऑफ-ग्रिड सोलर • वास्तविक दर सूची",
      rateHeadline: "1 kW to 5 kW Battery Setups + 15 HP Solar Aata Chakki",
      description: "Zero power cuts and zero diesel costs. Verified itemized rate list for pure sine wave PCUs, C10 tall tubular batteries, and agro flour mill drives.",
      bullet: "Saves ₹35,000+/mo on Diesel for Flour Mills & Agro",
      buttonText: "View Off-Grid True Rate List",
      buttonTextHi: "ऑफ-ग्रिड दर सूची देखें ↗",
      featured: false
    },
    {
      id: "appliances",
      route: "/appliances",
      badge: "हम सस्ता नहीं, क्वालिटी लगाते हैं",
      badgeColor: "bg-blue-600 text-white font-bold",
      icon: Tv,
      iconBg: "bg-blue-600 text-white shadow-blue-600/30",
      title: "Home Appliances & Smart Living",
      titleHi: "सोलर अनुकूलित 5-स्टार इलेक्ट्रॉनिक्स शोरूम",
      rateHeadline: "Inverter ACs, Fridges, Heavy Coolers, Washing Machines",
      description: "Run your 5-Star air conditioners and refrigerators 100% free on solar power. Official brand warranties at our Motiram Adda Gorakhpur showroom.",
      bullet: "Zero-Bill Summer Cooling Combo Available",
      buttonText: "Explore Electronics Showroom",
      buttonTextHi: "इलेक्ट्रॉनिक्स स्टोर देखें ↗",
      featured: false
    },
    {
      id: "gallery",
      route: "/gallery",
      badge: "GPS-Verified Live Sites",
      badgeColor: "bg-purple-600 text-white font-bold",
      icon: Camera,
      iconBg: "bg-purple-600 text-white shadow-purple-600/30",
      title: "Real Works, Sites & Photo Gallery",
      titleHi: "वास्तविक साइट इंस्टॉलेशन फोटो गैलरी",
      rateHeadline: "Saketpuri Pergola, Railvihar Elevated, 20+ Live Projects",
      description: "Inspect high-resolution photos of actual rooftop gazebo pergolas, heavy hot-dip GI structures, and industrial solar installations in Gorakhpur & UP.",
      bullet: "Verified Engineering Proof & Client Reviews",
      buttonText: "View Real Works & Sites",
      buttonTextHi: "फोटो गैलरी देखें ↗",
      featured: false
    },
    {
      id: "contact",
      route: "/#contact",
      badge: "Book in 60 Seconds",
      badgeColor: "bg-teal-500 text-slate-950 font-black",
      icon: PhoneCall,
      iconBg: "bg-teal-600 text-white shadow-teal-600/30",
      title: "Contact & Free Site Survey",
      titleHi: "निःशुल्क साइट सर्वे व संपर्क करें",
      rateHeadline: "Direct Er. Satyaprakash: +91 9918454508 | Motiram Adda",
      description: "Schedule a certified engineer site inspection for your roof in Gorakhpur & UP. Get genuine subsidy calculation, shadow analysis, and official quote.",
      bullet: "24×7 Rapid Response & Official UPNEDA Support",
      buttonText: "Book Survey / Contact Now",
      buttonTextHi: "संपर्क व सर्वे बुक करें ↗",
      featured: true
    }
  ];

  return (
    <section id="portal-hub" className="py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Dedicated Divisions & Rate Cards • मुख्य विभाग व दर सूचियां</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Choose a Division to <span className="text-emerald-600">Explore Rates & Details</span>
          </h2>

          <h3 className="text-xl sm:text-2xl font-extrabold text-blue-800 font-hindi">
            अपनी आवश्यकता के अनुसार दरें, सब्सिडी व गैलरी देखें
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Every section is organized into its own fast, dedicated portal so you get highlighted points, verified true rates, and direct booking without clutter.
          </p>
        </div>

        {/* 5-Button Quick Portal Navigation Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
          {quickLinks.map((link, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onNavigate(link.route)}
              className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black shadow-xs transition hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{link.label}</span>
              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">
                {link.badge}
              </span>
            </button>
          ))}
        </div>

        {/* 5 Clean Action Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <div
                key={portal.id}
                className={`rounded-3xl p-7 sm:p-8 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  portal.featured
                    ? "bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/40 border-2 border-emerald-500 shadow-xl shadow-emerald-950/10"
                    : "bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl shadow-sm"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-2xs ${portal.badgeColor}`}>
                      {portal.badge}
                    </span>
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center shadow-md ${portal.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                    {portal.title}
                  </h4>
                  <p className="text-sm font-bold text-emerald-700 font-hindi mt-0.5">
                    {portal.titleHi}
                  </p>

                  <div className="mt-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Rates & Scope:
                    </span>
                    <strong className="text-sm font-black text-slate-900 block mt-0.5">
                      {portal.rateHeadline}
                    </strong>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {portal.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{portal.bullet}</span>
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onNavigate(portal.route)}
                    className={`w-full py-3.5 px-5 rounded-2xl font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      portal.featured
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25"
                        : "bg-slate-900 hover:bg-blue-600 text-white"
                    }`}
                  >
                    <span>{portal.buttonText} • {portal.buttonTextHi}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Trust Points Bar */}
        <div className="mt-14 bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300">
              Verified Highlights • प्रमुख विश्वसनीयता बिंदु
            </h4>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-white/10 rounded-2xl border border-white/10 space-y-1">
              <strong className="text-white block font-sans">UPNEDA Empanelled Vendor Code</strong>
              <p className="text-emerald-300 font-mono font-bold">GKP2604066741 (Govt of UP)</p>
            </div>
            <div className="p-3 bg-white/10 rounded-2xl border border-white/10 space-y-1">
              <strong className="text-white block font-sans">PM Surya Ghar DBT Subsidy</strong>
              <p className="text-amber-300 font-bold">Up to ₹1,08,000 Direct in Bank</p>
            </div>
            <div className="p-3 bg-white/10 rounded-2xl border border-white/10 space-y-1">
              <strong className="text-white block font-sans">Govt Bank Loan at 6% – 7%</strong>
              <p className="text-emerald-300 font-bold">Easy ~₹1,800/mo EMI Option</p>
            </div>
            <div className="p-3 bg-white/10 rounded-2xl border border-white/10 space-y-1">
              <strong className="text-white block font-sans">Primary Dealer Authorizations</strong>
              <p className="text-slate-200">Tata, Adani, Waaree, Loom, UTL & Exide</p>
            </div>
            <div className="p-3 bg-white/10 rounded-2xl border border-white/10 space-y-1">
              <strong className="text-white block font-sans">25-Year Performance Warranty</strong>
              <p className="text-emerald-300 font-bold">Tier-1 Monocrystalline Bifacial Panels</p>
            </div>
            <div className="p-3 bg-white/10 rounded-2xl border border-white/10 space-y-1">
              <strong className="text-white block font-sans">Engineering Quality Slogan</strong>
              <p className="text-amber-300 font-hindi font-bold">&ldquo;हम सस्ता नहीं, क्वालिटी लगाते हैं&rdquo;</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
