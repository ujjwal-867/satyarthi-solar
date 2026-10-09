import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { Zap, ShieldCheck, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function BrandHeadlineTicker() {
  const brands = businessData.primaryDealerBrands || [];

  return (
    <div className="relative w-full bg-slate-950 text-white border-y border-amber-500/30 overflow-hidden shadow-lg z-20">
      {/* Top Banner Tagline Strip */}
      <div className="bg-gradient-to-r from-amber-600 via-emerald-600 to-sky-700 px-4 py-1.5 flex items-center justify-between text-xs font-bold flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-slate-950 text-amber-300 text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            HEADLINE • मुख्य समाचार
          </span>
          <span className="text-white text-[11px] sm:text-xs font-black tracking-wide">
            PRIMARY DEALER & AUTHORISED DISTRIBUTOR OF ALL LEADING SOLAR BRANDS
          </span>
          <span className="text-amber-200/60 hidden md:inline">•</span>
          <span className="text-amber-100 text-[11px] sm:text-xs font-hindi hidden md:inline">
            सभी प्रमुख सोलर ब्रांड्स के अधिकृत व मुख्य डीलर
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-white/90">
          <span className="hidden sm:inline-flex items-center gap-1 bg-white/15 px-2 py-0.5 rounded font-mono">
            <ShieldCheck className="w-3 h-3 text-emerald-300" />
            UPNEDA Code: {businessData.vendorCode}
          </span>
          <span className="bg-emerald-500 text-slate-950 px-2 py-0.5 rounded font-black">
            100% Genuine Warranty
          </span>
        </div>
      </div>

      {/* Smooth Marquee Container */}
      <div className="py-2.5 bg-gradient-to-r from-slate-950 via-[#031326] to-slate-950 overflow-hidden relative">
        {/* Subtle Fade Edges */}
        <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Ticker Track (repeated twice for seamless loop) */}
        <div className="animate-marquee flex items-center gap-3">
          {[...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-400/60 rounded-xl px-3.5 py-1.5 transition whitespace-nowrap shadow-xs group"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform animate-pulse"></div>
              
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-black text-white group-hover:text-amber-300 transition tracking-wide">
                  {brand.name}
                </span>
                <span className="text-[10px] text-emerald-400 font-bold font-hindi">
                  ({brand.hi})
                </span>
              </div>

              <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded">
                {brand.role}
              </span>

              <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                • {brand.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
