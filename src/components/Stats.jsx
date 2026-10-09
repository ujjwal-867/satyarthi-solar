import { businessData } from "../data/businessData";
import { 
  Award, 
  Sun, 
  TrendingUp, 
  Star, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Stats() {
  const { lang } = useLanguage();

  const iconMap = [
    <Award className="w-6 h-6 text-amber-500" />,
    <Sun className="w-6 h-6 text-amber-500" />,
    <TrendingUp className="w-6 h-6 text-emerald-600" />,
    <Star className="w-6 h-6 text-amber-500 fill-amber-400" />,
    <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    <Zap className="w-6 h-6 text-amber-500" />,
  ];

  const statsHi = [
    { value: "5+", suffix: "Years", label: "अनुभव", desc: "सोलर इंजीनियरिंग में 5+ वर्षों का विश्वास" },
    { value: "2,200+", suffix: "kW", label: "सोलर क्षमता", desc: "उत्तर प्रदेश में रूफटॉप सोलर प्लांट्स" },
    { value: "450+", suffix: "Homes", label: "संतुष्ट ग्राहक", desc: "गोरखपुर व पूर्वांचल में खुशहाल परिवार" },
    { value: "100%", suffix: "UPNEDA", label: "सरकारी स्वीकृति", desc: "यूपीनेडा व यूपीपीसीएल नेट मीटरिंग" },
    { value: "25", suffix: "Years", label: "पैनल वारंटी", desc: "लूम सोलर 25 साल परफॉर्मेंस गारंटी" },
    { value: "₹1.08L", suffix: "Subsidy", label: "सरकारी सब्सिडी", desc: "पीएम सूर्य घर योजना के तहत सीधी सब्सिडी" },
  ];

  const activeStats = lang === "hi" ? statsHi : businessData.stats;

  return (
    <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-6 sm:p-8">
        
        {/* Header strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-6 mb-6 border-b border-slate-100 gap-3 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {lang === "hi" 
                ? "उत्तर प्रदेश में प्रमाणित सोलर इंजीनियरिंग व स्थापना" 
                : "Trusted Solar Engineering Across Uttar Pradesh"}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === "hi" 
                ? `यूपीनेडा अधिकृत वेंडर • वेंडर कोड: ${businessData.vendorCode} • जीएसटी पंजीकृत` 
                : `Empanelled with UPNEDA & Authorized by Loom Solar • Vendor Code: ${businessData.vendorCode}`}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{lang === "hi" ? "सरकारी स्वीकृत वेंडर • डायरेक्ट सब्सिडी" : "Govt Approved Vendor • Zero Bureaucracy"}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {activeStats.map((stat, idx) => (
            <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? "sm:pl-4" : ""} flex flex-col justify-between`}>
              <div className="mb-2 p-2 w-fit bg-slate-50 rounded-xl">
                {iconMap[idx]}
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-amber-600">
                    {stat.suffix}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-800 mt-1">
                  {stat.label}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;