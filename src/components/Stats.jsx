import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Award, 
  Sun, 
  Star, 
  ShieldCheck, 
  Zap,
  Users
} from "lucide-react";
import { InteractiveZapBurstButton } from "./MotionEffects";

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

function Stats() {
  const bilingualStats = [
    { 
      value: "2500+", 
      suffix: "Clients", 
      en: "Happy Clients", 
      hi: "2500+ संतुष्ट परिवार", 
      desc: "Purvanchal & Gorakhpur",
      icon: Users,
      likes: 312,
      accent: "bg-blue-50/70 border-blue-200/80 hover:border-blue-400",
      iconStyle: "bg-[#0a1e3b] text-amber-400"
    },
    { 
      value: "2,200+", 
      suffix: "kW", 
      en: "Solar Capacity", 
      hi: "सोलर क्षमता स्थापित", 
      desc: "Rooftops Across UP",
      icon: Sun,
      likes: 184,
      accent: "bg-amber-50/70 border-amber-200/80 hover:border-amber-400",
      iconStyle: "bg-amber-500 text-slate-950"
    },
    { 
      value: "5+", 
      suffix: "Years", 
      en: "EPC Experience", 
      hi: "5+ वर्षों का अनुभव", 
      desc: "Trusted Solar Engineering",
      icon: Award,
      likes: 146,
      accent: "bg-sky-50/70 border-sky-200/80 hover:border-sky-400",
      iconStyle: "bg-blue-600 text-white"
    },
    { 
      value: "100%", 
      suffix: "UPNEDA", 
      en: "Govt Empanelled", 
      hi: "सरकारी स्वीकृति", 
      desc: "Code: GKP2604066741",
      icon: ShieldCheck,
      likes: 215,
      accent: "bg-blue-50/70 border-blue-200/80 hover:border-blue-400",
      iconStyle: "bg-[#0a1e3b] text-white"
    },
    { 
      value: "25", 
      suffix: "Years", 
      en: "Panel Warranty", 
      hi: "पैनल वारंटी", 
      desc: "Tier-1 Performance",
      icon: Star,
      likes: 198,
      accent: "bg-amber-50/70 border-amber-200/80 hover:border-amber-400",
      iconStyle: "bg-amber-500 text-slate-950"
    },
    { 
      value: "₹1.08L", 
      suffix: "Subsidy", 
      en: "PM Surya Ghar", 
      hi: "सरकारी सब्सिडी", 
      desc: "Direct Bank DBT",
      icon: Zap,
      likes: 276,
      accent: "bg-blue-50/70 border-blue-200/80 hover:border-blue-400",
      iconStyle: "bg-[#0a1e3b] text-amber-400"
    },
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-4 sm:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3" style={{ perspective: "1000px" }}>
          {bilingualStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, rotateX: 4, rotateY: -3, scale: 1.03 }}
                className={`group relative rounded-2xl p-3.5 ${stat.accent} border transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden cursor-default`}
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between gap-1 mb-2.5 relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.12 }}
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-xs ${stat.iconStyle}`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                  <InteractiveZapBurstButton initialCount={stat.likes} label="" />
                </div>

                <div className="space-y-1 relative z-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors">
                      <AnimatedNumber targetText={stat.value} />
                    </span>
                    <span className="text-[10px] font-extrabold text-blue-700">
                      {stat.suffix}
                    </span>
                  </div>
                  
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">
                    {stat.en}
                  </h4>

                  <p className="text-[10px] text-blue-900 font-hindi font-semibold leading-tight">
                    {stat.hi}
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