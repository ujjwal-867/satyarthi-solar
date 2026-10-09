import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Banknote, 
  HelpCircle, 
  Zap 
} from "lucide-react";

function SubsidySection() {
  const { subsidyData } = businessData;

  const scrollToContact = (capacity) => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const selectEl = document.querySelector("#service-select");
      if (selectEl) {
        selectEl.value = `Residential Solar (${capacity})`;
      }
    }
  };

  return (
    <section id="subsidy" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Official Govt Subsidy Scheme 2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            PM Surya Ghar: <span className="text-emerald-700">Muft Bijli Yojana</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Get up to <strong className="text-slate-900 font-bold">₹1,08,000 Total Subsidy</strong> (₹78,000 Central + ₹30,000 UP State) directly in your bank account. As an official UPNEDA empanelled vendor (Code: <strong className="text-emerald-700">{businessData.vendorCode}</strong>), Satyarthi Solar Solution handles 100% of the government paperwork for you.
          </p>
        </div>

        {/* Subsidy Cards Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 mt-12">
          {subsidyData.tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                tier.bestValue
                  ? "bg-gradient-to-b from-emerald-900 to-slate-900 text-white shadow-xl shadow-emerald-950/20 ring-2 ring-amber-400"
                  : tier.popular
                  ? "bg-white text-slate-900 border-2 border-emerald-600 shadow-lg"
                  : "bg-white text-slate-900 border border-slate-200 shadow-sm"
              }`}
            >
              {/* Badges */}
              {tier.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md">
                  ★ Best Value for Homes
                </div>
              )}
              {tier.popular && !tier.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-bold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className={`text-xl font-black ${tier.bestValue ? "text-white" : "text-slate-900"}`}>
                  {tier.capacity}
                </h3>
                <p className={`text-xs mt-1 ${tier.bestValue ? "text-slate-300" : "text-slate-500"}`}>
                  {tier.idealFor}
                </p>

                {/* Units & Savings */}
                <div className={`mt-4 p-2.5 rounded-xl ${tier.bestValue ? "bg-slate-800/80" : "bg-slate-50"}`}>
                  <div className="flex justify-between items-center text-xs">
                    <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>Gen. Output:</span>
                    <strong className={tier.bestValue ? "text-emerald-300" : "text-emerald-700"}>{tier.monthlyUnits}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>Est. Savings:</span>
                    <strong className="text-amber-500 font-bold">~₹{tier.monthlySaving.toLocaleString()}/mo</strong>
                  </div>
                </div>

                {/* Subsidy Calculation Breakdown */}
                <div className="mt-5 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>System Cost:</span>
                    <span className={tier.bestValue ? "text-slate-300 line-through" : "text-slate-400 line-through"}>
                      ₹{tier.approxSystemCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center font-medium">
                    <span className={tier.bestValue ? "text-emerald-300" : "text-emerald-600"}>Central Govt:</span>
                    <span className={tier.bestValue ? "text-emerald-300" : "text-emerald-600"}>
                      - ₹{tier.centralSubsidy.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center font-medium">
                    <span className={tier.bestValue ? "text-emerald-300" : "text-emerald-600"}>UP State Subsidy:</span>
                    <span className={tier.bestValue ? "text-emerald-300" : "text-emerald-600"}>
                      - ₹{tier.upStateSubsidy.toLocaleString()}
                    </span>
                  </div>
                  <div className={`pt-2 border-t flex justify-between items-center font-bold text-xs ${
                    tier.bestValue ? "border-slate-700 text-amber-300" : "border-slate-100 text-emerald-700"
                  }`}>
                    <span>Total Subsidy:</span>
                    <span>₹{tier.totalSubsidy.toLocaleString()}</span>
                  </div>
                </div>

                {/* Final Net Payable */}
                <div className={`mt-5 pt-3 border-t ${tier.bestValue ? "border-slate-700" : "border-slate-100"}`}>
                  <p className={`text-[11px] uppercase tracking-wider font-semibold ${tier.bestValue ? "text-slate-400" : "text-slate-500"}`}>
                    Your Net Cost
                  </p>
                  <p className={`text-2xl font-black mt-0.5 ${tier.bestValue ? "text-amber-400" : "text-slate-900"}`}>
                    ₹{tier.netPayable.toLocaleString()}*
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => scrollToContact(tier.capacity)}
                className={`w-full mt-6 py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  tier.bestValue
                    ? "bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                }`}
              >
                <span>Book This System</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* 5-Step Subsidy Process Banner */}
        <div className="mt-14 bg-gradient-to-r from-emerald-900 to-teal-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <h3 className="text-2xl font-bold text-white">
              How Er. Satyaprakash Gets Your Subsidy Credited in 5 Simple Steps
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              No need to visit any government office. We handle DISCOM approvals and the National Portal end-to-end.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Free Roof Survey", desc: "Our engineers visit your site in Gorakhpur/UP and verify shadow-free area & electrical load." },
              { step: "02", title: "Portal Registration", desc: "We register your application on the PM Surya Ghar National Portal under vendor code GKP2604066741." },
              { step: "03", title: "Fast Installation", desc: "Installation of Tier-1 Loom Solar panels, heavy GI structure, and dual earthing in 2-3 days." },
              { step: "04", title: "UPPCL Net Metering", desc: "UPPCL / Purvanchal Vidyut Vitran Nigam inspects the site and installs bidirectional smart meter." },
              { step: "05", title: "Direct Bank Subsidy", desc: "Subsidy amount (up to ₹1,08,000) is directly deposited into your bank account via DBT!" },
            ].map((st, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 relative">
                <span className="text-2xl font-black text-amber-400 opacity-90">{st.step}</span>
                <h4 className="font-bold text-sm text-white mt-1">{st.title}</h4>
                <p className="text-xs text-emerald-100 mt-1 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-100 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Performance Bank Guarantee of ₹2.5 Lakhs duly submitted & verified with UPNEDA.</span>
            </div>
            <a
              href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                "Hello Er. Satyaprakash, please guide me on how to claim PM Surya Ghar subsidy for my home."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl hover:bg-amber-300 transition shrink-0"
            >
              Ask Subsidy Questions on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SubsidySection;
