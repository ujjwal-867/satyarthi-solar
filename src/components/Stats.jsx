import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  Award, 
  Sun, 
  Star, 
  ShieldCheck, 
  Zap,
  Users,
  Radio
} from "lucide-react";
import {
  ExpressiveKineticText,
  InteractiveZapBurstButton
} from "./MotionEffects";

function AnimatedNumber({ targetText }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(targetText);

  useEffect(() => {
    if (!isInView) return;
    const clean = targetText.replace(/,/g, "");
    const match = clean.match(/^(\d+)(\+?%?)$/);
    if (!match) {
      setDisplay(targetText);
      return;
    }

    const endVal = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const hasComma = targetText.includes(",");
    const duration = 1400;
    const startTime = performance.now();

    let rafId;
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * endVal);
      const formatted = hasComma ? current.toLocaleString("en-IN") : String(current);
      setDisplay(`${formatted}${suffix}`);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setDisplay(targetText);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, targetText]);

  return <span ref={ref}>{display}</span>;
}

const LIVE_COLLAB_UPDATES = [
  "🟢 18 Citizens in Gorakhpur & Deoria exploring solar rates live",
  "⚡ Er. Satyaprakash EPC Team synced 5kW UPPCL Net-Meter in Railvihar",
  "🎉 2500+ Happy Clients milestone achieved across Purvanchal & UP",
  "☀️ Shri R.K. Verma (Padrauna) just calculated 3kW PM Surya Ghar Subsidy"
];

function Stats() {
  const [liveIdx, setLiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveIdx((prev) => (prev + 1) % LIVE_COLLAB_UPDATES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const bilingualStats = [
    { 
      value: "2500+", 
      suffix: "Clients", 
      en: "Happy Clients", 
      hi: "2500+ संतुष्ट परिवार", 
      desc: "Purvanchal & Gorakhpur",
      icon: Users,
      likes: 312,
      accent: "from-emerald-500/15 via-teal-500/5 to-transparent border-emerald-300 hover:border-emerald-500",
      iconStyle: "bg-emerald-600 text-white shadow-emerald-600/30",
      badge: "Verified Milestone"
    },
    { 
      value: "2,200+", 
      suffix: "kW", 
      en: "Solar Capacity", 
      hi: "सोलर क्षमता स्थापित", 
      desc: "Rooftops Across UP",
      icon: Sun,
      likes: 184,
      accent: "from-amber-500/15 via-yellow-500/5 to-transparent border-amber-200 hover:border-amber-500",
      iconStyle: "bg-amber-500 text-slate-950 shadow-amber-500/30",
      badge: "High Yield"
    },
    { 
      value: "5+", 
      suffix: "Years", 
      en: "EPC Experience", 
      hi: "5+ वर्षों का अनुभव", 
      desc: "Trusted Solar Engineering",
      icon: Award,
      likes: 146,
      accent: "from-blue-500/15 via-sky-500/5 to-transparent border-blue-200 hover:border-blue-500",
      iconStyle: "bg-blue-600 text-white shadow-blue-600/30",
      badge: "ISO 9001:2015"
    },
    { 
      value: "100%", 
      suffix: "UPNEDA", 
      en: "Govt Empanelled", 
      hi: "सरकारी स्वीकृति", 
      desc: "Code: GKP2604066741",
      icon: ShieldCheck,
      likes: 215,
      accent: "from-teal-500/15 via-emerald-500/5 to-transparent border-teal-200 hover:border-teal-500",
      iconStyle: "bg-teal-600 text-white shadow-teal-600/30",
      badge: "Official Vendor"
    },
    { 
      value: "25", 
      suffix: "Years", 
      en: "Panel Warranty", 
      hi: "पैनल वारंटी", 
      desc: "Tata, Adani, Waaree, Loom",
      icon: Star,
      likes: 198,
      accent: "from-purple-500/15 via-indigo-500/5 to-transparent border-purple-200 hover:border-purple-500",
      iconStyle: "bg-purple-600 text-white shadow-purple-600/30",
      badge: "Tier-1 TOPCon"
    },
    { 
      value: "₹1.08L", 
      suffix: "Subsidy", 
      en: "PM Surya Ghar", 
      hi: "सरकारी सब्सिडी", 
      desc: "Direct Bank DBT Disbursal",
      icon: Zap,
      likes: 276,
      accent: "from-emerald-500/15 via-blue-500/5 to-transparent border-emerald-200 hover:border-emerald-500",
      iconStyle: "bg-slate-900 text-amber-400 shadow-slate-900/30",
      badge: "Direct DBT"
    },
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/90 p-5 sm:p-8">
        
        {/* Header strip with Expressive Kinetic Typography & Real-Time Collaborative Activity Ticker */}
        <div className="flex flex-col lg:flex-row justify-between items-center pb-5 mb-6 border-b border-slate-100 gap-3 text-center lg:text-left">
          <div>
            <h3 className="text-base sm:text-xl font-black text-slate-900 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <ExpressiveKineticText
                text="Satyarthi Solar Solution • 2500+ Happy Clients"
                highlightWords={["2500+", "Happy", "Clients"]}
                className="!justify-start"
              />
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              UPNEDA Approved Vendor Code: <strong className="text-slate-800 font-mono">{businessData.vendorCode}</strong> • Primary Dealer of TATA, Adani, Waaree & Loom Solar
            </p>
          </div>

          {/* Real-Time Collaborative Live Telemetry Pill */}
          <motion.div 
            key={liveIdx}
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2.5 bg-slate-900 text-white text-[11px] sm:text-xs font-bold px-4 py-2 rounded-full border border-emerald-500/40 shadow-lg"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <Radio className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-pulse" />
            <span className="truncate max-w-[260px] sm:max-w-md">{LIVE_COLLAB_UPDATES[liveIdx]}</span>
          </motion.div>
        </div>

        {/* Interactive 3D Bento Stats Grid with ⚡ Bursts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5" style={{ perspective: "1000px" }}>
          {bilingualStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6, rotateX: 4, rotateY: -3, scale: 1.03 }}
                className={`group relative rounded-2xl p-4 bg-gradient-to-br ${stat.accent} border transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden cursor-default`}
              >
                {/* Animated Shimmer Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

                <div className="flex items-center justify-between gap-1 mb-3 relative z-10">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-md ${stat.iconStyle}`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                  <InteractiveZapBurstButton initialCount={stat.likes} label="" />
                </div>

                <div className="space-y-1 relative z-10">
                  <div className="flex items-baseline gap-1 flex-wrap">
                    <span className="text-2xl sm:text-[1.65rem] font-black text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                      <AnimatedNumber targetText={stat.value} />
                    </span>
                    <span className="text-[11px] font-extrabold text-blue-700">
                      {stat.suffix}
                    </span>
                  </div>
                  
                  {/* Simultaneous English & Hindi */}
                  <div>
                    <h4 className="text-xs font-black text-slate-900 leading-tight">
                      {stat.en}
                    </h4>
                    <p className="text-[11px] font-bold text-emerald-700 leading-tight font-hindi">
                      {stat.hi}
                    </p>
                  </div>

                  <p className="text-[10px] text-slate-500 leading-tight pt-0.5">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Stats;