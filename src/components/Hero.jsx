import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  FileText,
  MapPin,
  Sparkles,
  SunMedium
} from "lucide-react";
import SolarImageSlider from "./SolarImageSlider";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { lang, t } = useLanguage();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const certificationLogos = [
    {
      name: "UPNEDA Approved",
      hindi: "यूपीनेडा अधिकृत",
      badge: "GKP2604066741",
      icon: "🏛️"
    },
    {
      name: "MNRE Govt of India",
      hindi: "भारत सरकार MNRE",
      badge: "Empanelled EPC",
      icon: "🇮🇳"
    },
    {
      name: "PM Surya Ghar",
      hindi: "पीएम सूर्य घर योजना",
      badge: "₹1,08,000 Subsidy",
      icon: "☀️"
    },
    {
      name: "Loom Solar",
      hindi: "लूम सोलर अधिकृत",
      badge: "Authorized Dealer",
      icon: "⚡"
    },
    {
      name: "Fujiyama Solar",
      hindi: "फुजियामा अधिकृत",
      badge: "Certified Partner",
      icon: "🔋"
    },
    {
      name: "ISO 9001:2015",
      hindi: "आईएसओ प्रमाणित",
      badge: "Quality Certified",
      icon: "🏆"
    }
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Solar Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="solar-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#solar-grid-pattern)" />
        </svg>
      </div>
      
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Side-by-Side Responsive Grid: Left Solar Intro, Right High-Res Continuously Rotating Solar Images */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Solar Intro & Credentials) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Government Empanelment Pill with Bilingual Subtitle */}
            <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-500/50 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-200 backdrop-blur-md shadow-inner">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Headline (Pure Solar Focus with Hindi/English Clarity) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.18] text-white">
              {t.heroTitleStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                {t.heroTitleHighlight}
              </span>
            </h1>

            {/* Clean Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {t.heroSubtitle}
            </p>

            {/* Pure Solar Trust Checklist */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.heroFeature1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.heroFeature2}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.heroFeature3}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.heroFeature4}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold text-amber-300">{t.heroFeature5}</span>
              </div>
            </div>

            {/* Core Action Buttons: Quotation, Call 24x7, Contact */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollTo("#quotations")}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
              >
                <FileText className="w-5 h-5 text-slate-950" />
                <span>{t.btnGetQuote}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${businessData.phone[0]}`}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>+91 {businessData.phone[0]}</span>
              </a>

              <a
                href={`tel:${businessData.phone[1]}`}
                className="inline-flex items-center gap-1.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-4 py-3.5 rounded-xl transition text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{businessData.phone[1]}</span>
              </a>
            </div>

            {/* Quick Location & Availability Notice */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Motiram Adda, Deoria Road, Gorakhpur (273202) • 24×7 On-Call Support</span>
            </div>

            {/* Certification Logos & Approvals Strip (Directly in Hero) */}
            <div className="pt-4 border-t border-slate-800">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.certStripTitle}</span>
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {certificationLogos.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 rounded-xl p-2.5 flex items-center gap-2.5 transition group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate">
                        {lang === "hi" ? cert.hindi : cert.name}
                      </p>
                      <p className="text-[10px] text-amber-400/90 font-mono truncate">
                        {cert.badge}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High Solar Image Slider (Changes Continuously per Second / Rotates) */}
          <div className="lg:col-span-5">
            <div className="relative">
              <SolarImageSlider />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;