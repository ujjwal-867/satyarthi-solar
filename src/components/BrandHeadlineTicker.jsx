import { businessData } from "../data/businessData";
import { Award } from "lucide-react";

export default function BrandHeadlineTicker() {
  const brands = businessData.primaryDealerBrands || [];

  return (
    <div className="relative w-full bg-white text-slate-700 border-b border-slate-200 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-4 overflow-x-auto scrollbar-none">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0a1e3b] shrink-0 pr-3 border-r border-slate-200 whitespace-nowrap">
          <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Authorized Dealer</span>
        </div>

        {/* Clean Static Partner Brand Strip */}
        <div className="flex items-center gap-x-4 gap-y-1 flex-nowrap sm:flex-wrap text-xs font-semibold text-slate-600">
          {brands.map((brand, idx) => (
            <span
              key={idx}
              className="whitespace-nowrap hover:text-[#0a1e3b] transition-colors flex items-center gap-2"
            >
              {idx > 0 && <span className="text-slate-300 select-none">/</span>}
              <span>{brand.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

