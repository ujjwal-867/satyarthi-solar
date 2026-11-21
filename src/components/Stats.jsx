import { motion } from "framer-motion";
import { 
  Award, 
  Sun, 
  Star, 
  ShieldCheck, 
  Zap,
  Users
} from "lucide-react";

function Stats() {
  const bilingualStats = [
    { 
      value: "2,500+", 
      suffix: "Clients", 
      en: "Happy Clients", 
      hi: "2,500+ संतुष्ट परिवार", 
      desc: "Purvanchal & Gorakhpur",
      icon: Users,
      iconStyle: "bg-[#0a1e3b] text-sky-400"
    },
    { 
      value: "2,200+", 
      suffix: "kW", 
      en: "Solar Capacity", 
      hi: "सोलर क्षमता स्थापित", 
      desc: "Rooftops Across UP",
      icon: Sun,
      iconStyle: "bg-blue-600 text-white"
    },
    { 
      value: "5+", 
      suffix: "Years", 
      en: "EPC Experience", 
      hi: "5+ वर्षों का अनुभव", 
      desc: "Trusted Solar Engineering",
      icon: Award,
      iconStyle: "bg-blue-600 text-white"
    },
    { 
      value: "100%", 
      suffix: "UPNEDA", 
      en: "Govt Empanelled", 
      hi: "सरकारी स्वीकृति", 
      desc: "Code: GKP2604066741",
      icon: ShieldCheck,
      iconStyle: "bg-[#0a1e3b] text-white"
    },
    { 
      value: "25", 
      suffix: "Years", 
      en: "Panel Warranty", 
      hi: "पैनल वारंटी", 
      desc: "Tier-1 Performance",
      icon: Star,
      iconStyle: "bg-blue-600 text-white"
    },
    { 
      value: "₹1.08L", 
      suffix: "Subsidy", 
      en: "PM Surya Ghar", 
      hi: "सरकारी सब्सिडी", 
      desc: "Direct Bank DBT",
      icon: Zap,
      iconStyle: "bg-[#0a1e3b] text-emerald-400"
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-4 sm:p-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {bilingualStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative rounded-xl p-3.5 bg-slate-50/80 hover:bg-white border border-slate-300 hover:border-blue-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-2xs ${stat.iconStyle}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-700">
                    {stat.suffix}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {stat.en}
                  </h4>

                  <p className="text-[10px] text-slate-700 font-semibold font-hindi leading-tight">
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