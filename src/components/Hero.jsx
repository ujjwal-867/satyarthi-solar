import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Calculator, 
  Sparkles 
} from "lucide-react";

function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Solar Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="solar-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#solar-grid)" />
        </svg>
      </div>
      
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Government Empanelment Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-500/40 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-200 backdrop-blur-md shadow-inner">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>UPNEDA Empanelled Vendor</span>
              <span className="text-slate-400">•</span>
              <span className="text-amber-300 font-mono tracking-wider">Code: {businessData.vendorCode}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Switch to Clean Energy with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Trusted Solar Solutions
              </span>
            </h1>

            {/* Tagline & Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Powering Homes, Businesses & Industries across Gorakhpur and Uttar Pradesh. 
              Get up to <strong className="text-amber-400 font-semibold">₹1,08,000 Govt Subsidy</strong> directly credited into your bank account under PM Surya Ghar Muft Bijli Yojna.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Authorized <strong>LOOM SOLAR</strong> Dealer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UPPCL Net Metering Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>25-Year Performance Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Engineered by <strong>Er. Satyaprakash</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollTo("#calculator")}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
              >
                <Calculator className="w-5 h-5 text-slate-900" />
                <span>Calculate Your Savings</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition cursor-pointer text-sm sm:text-base"
              >
                <span>Get Free Site Survey</span>
              </button>

              <a
                href={`tel:${businessData.phone[0]}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-5 py-3.5 rounded-xl transition text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: {businessData.phone[0]}</span>
              </a>
            </div>

            {/* Trust Footnote */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Head Office: Motiram Adda, Deoria Road, Gorakhpur (273202)</span>
            </div>
          </div>

          {/* Right Column: Hero Interactive Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-3xl blur-xl opacity-30"></div>
              
              <div className="relative bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl space-y-6">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-amber-400/20 text-amber-400 rounded-lg">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-base">PM Surya Ghar Yojana</h3>
                      <p className="text-xs text-slate-400">Uttar Pradesh Residential Subsidy</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    Active 2026
                  </span>
                </div>

                {/* Key Numbers in Card */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700/50">
                    <p className="text-xs text-slate-400">Max Govt Subsidy</p>
                    <p className="text-2xl font-black text-amber-400 mt-1">₹1,08,000</p>
                    <p className="text-[11px] text-emerald-400 mt-0.5">Central + UP State</p>
                  </div>
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700/50">
                    <p className="text-xs text-slate-400">Free Electricity</p>
                    <p className="text-2xl font-black text-emerald-400 mt-1">300 Units</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Every Month</p>
                  </div>
                </div>

                {/* Popular 3kW System Snapshot */}
                <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-emerald-300 font-semibold">Recommended 3 kW Home System</span>
                    <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">MOST POPULAR</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-1">
                    <span className="text-slate-400 text-xs">System Cost approx:</span>
                    <span className="text-slate-300 line-through text-sm">₹1,80,000</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-emerald-400 text-xs font-medium">Govt Subsidy:</span>
                    <span className="text-emerald-400 font-bold text-sm">- ₹1,08,000</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 border-t border-emerald-800/60">
                    <span className="text-white font-bold text-sm">Net Payable Cost:</span>
                    <span className="text-2xl font-black text-amber-400">₹72,000*</span>
                  </div>
                  <p className="text-[11px] text-slate-400 text-right">Estimated monthly savings: ₹4,500/mo</p>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3.5 rounded-xl transition shadow-md text-sm cursor-pointer"
                >
                  Apply For Subsidy via Empanelled Vendor
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                  <span>✓ 100% Net Metering</span>
                  <span>•</span>
                  <span>✓ Bank Disbursal</span>
                  <span>•</span>
                  <span>✓ Zero Bureaucracy</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;