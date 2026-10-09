import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  Award, 
  Sun, 
  TrendingUp, 
  Star, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

function Stats() {
  const iconMap = [
    <Award className="w-6 h-6 text-blue-600" />,
    <Sun className="w-6 h-6 text-emerald-600" />,
    <TrendingUp className="w-6 h-6 text-teal-600" />,
    <Star className="w-6 h-6 text-blue-600 fill-blue-500" />,
    <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    <Zap className="w-6 h-6 text-teal-600" />,
  ];

  const bilingualStats = [
    { value: "5+", suffix: "Years", en: "Experience", hi: "5+ वर्षों का अनुभव", desc: "Trusted Solar Engineering" },
    { value: "2,200+", suffix: "kW", en: "Solar Capacity", hi: "सोलर क्षमता स्थापित", desc: "Rooftops Across UP" },
    { value: "450+", suffix: "Homes", en: "Happy Clients", hi: "संतुष्ट परिवार", desc: "Purvanchal & Gorakhpur" },
    { value: "100%", suffix: "UPNEDA", en: "Govt Empanelled", hi: "सरकारी स्वीकृति", desc: "Code: GKP2604066741" },
    { value: "25", suffix: "Years", en: "Panel Warranty", hi: "पैनल वारंटी", desc: "Loom & Fujiyama Tier-1" },
    { value: "₹1.08L", suffix: "Subsidy", en: "PM Surya Ghar", hi: "सरकारी सब्सिडी", desc: "Direct Bank DBT Disbursal" },
  ];

  return (
    <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 p-6 sm:p-8">
        
        {/* Header strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-6 mb-6 border-b border-slate-100 gap-3 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-black text-slate-900 flex flex-wrap items-center gap-2">
              <span>Trusted Solar Engineering Across Uttar Pradesh</span>
              <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                उत्तर प्रदेश का प्रमाणित सोलर संस्थान
              </span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Empanelled with UPNEDA & Authorized by Loom Solar • Vendor Code: {businessData.vendorCode} • GST Registered
            </p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Govt Approved Vendor • 0 Bureaucracy | सीधी सब्सिडी</span>
          </div>
        </div>

        {/* Stats Grid with Framer Motion hover & simultaneous English + Hindi */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {bilingualStats.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`pt-4 sm:pt-0 ${idx > 0 ? "sm:pl-4" : ""} flex flex-col justify-between`}
            >
              <div className="mb-2 p-2 w-fit bg-slate-50 border border-slate-200/60 rounded-xl">
                {iconMap[idx]}
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-blue-700">
                    {stat.suffix}
                  </span>
                </div>
                
                {/* Simultaneous English & Hindi */}
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-tight">
                    {stat.en}
                  </h4>
                  <p className="text-[11px] font-bold text-emerald-700 leading-tight">
                    {stat.hi}
                  </p>
                </div>

                <p className="text-[10px] text-slate-500 leading-tight pt-0.5">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;