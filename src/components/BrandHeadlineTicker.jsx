import { businessData } from "../data/businessData";
import { Award } from "lucide-react";

export default function BrandHeadlineTicker() {
  const brands = businessData.primaryDealerBrands || [];

  return (
    <div className="relative w-full bg-blue-50/80 text-slate-800 border-b border-blue-200/90 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex items-center gap-3">
        <div className="inline-flex items-center gap-1.5 bg-[#0a1e3b] text-amber-400 border border-amber-400/30 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold shrink-0 shadow-2xs">
          <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Authorized Primary Dealer</span>
        </div>

        {/* Gentle Eye-Soothing Brand Marquee */}
        <div className="overflow-hidden relative flex-1">
          <div className="animate-marquee flex items-center gap-3">
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 bg-white/95 border border-blue-200/80 rounded-full px-3 py-1 whitespace-nowrap text-xs shadow-2xs font-bold text-slate-800 hover:text-blue-900 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

