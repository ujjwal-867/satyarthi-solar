import { motion } from "framer-motion";
import { Snowflake, Tv, Wind, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { businessData } from "../data/businessData";

export default function ElectronicsTeaser({ onNavigateElectronics }) {
  return (
    <section className="py-12 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Solar & Electronics Division • मोतीराम अड्डा गोरखपुर</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Pair Solar Rooftop with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">5-Star Home Electronics</span>
            </h3>

            <p className="text-sm font-semibold text-emerald-300 font-hindi">
              शून्य बिजली बिल के लिए 5-स्टार इनवर्टर एसी, फ्रिज एवं हैवी कूलर शोरूम
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Run your air conditioner and refrigerator 100% free of electric bills. Explore our dedicated Electronics Showroom at Motiram Adda featuring LG, Samsung, Lloyd, Voltas, Godrej & Bajaj.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onNavigateElectronics}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3.5 rounded-2xl text-xs sm:text-sm transition shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Electronics Store ↗</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-slate-400 text-center font-hindi">
              &ldquo;हम सस्ता नहीं, क्वालिटी लगाते हैं&rdquo;
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
