import { businessData } from "../data/businessData";
import { Star, Quote, CheckCircle2 } from "lucide-react";

function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            4.9 / 5 Rating • 45+ Verified Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What Our Customers Say in <span className="text-emerald-700">Uttar Pradesh</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Real stories from homeowners, doctors, and mill operators who eliminated electricity bills with Satyarthi Solar Solution.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {businessData.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">5.0</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Banner */}
        <div className="mt-12 text-center">
          <a
            href={businessData.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 bg-white border border-slate-300 px-5 py-2.5 rounded-full hover:bg-slate-50 shadow-xs transition"
          >
            <span>View Verified Location & Reviews on Google Maps</span>
            <span className="text-emerald-700 font-bold">★ 4.9 Rating</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
