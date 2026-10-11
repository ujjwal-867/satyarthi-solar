import { businessData } from "../data/businessData";
import { Award } from "lucide-react";

export default function BrandHeadlineTicker() {
  const brands = businessData.primaryDealerBrands || [];

  return (
    <div className="relative w-full bg-emerald-50/70 text-slate-700 border-b border-emerald-100/90 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex items-center gap-3">
        <div className="inline-flex items-center gap-1.5 bg-white text-emerald-800 border border-emerald-200/80 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold shrink-0 shadow-2xs">
          <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Authorized Primary Dealer</span>
        </div>

        {/* Gentle Eye-Soothing Brand Marquee */}
        <div className="overflow-hidden relative flex-1">
          <div className="animate-marquee flex items-center gap-3">
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 bg-white/90 border border-slate-200/80 rounded-full px-3 py-1 whitespace-nowrap text-xs shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="font-bold text-slate-800">{brand.name}</span>
                <span className="text-[10px] text-emerald-700 font-hindi font-medium">
                  ({brand.hi})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

