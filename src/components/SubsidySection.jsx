import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Banknote, 
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

  const stepsBilingual = [
    { 
      step: "01", 
      title: "Free Roof Survey", 
      titleHi: "निःशुल्क छत का निरीक्षण", 
      desc: "Our engineers visit your site in Gorakhpur/UP and verify shadow-free area.",
      descHi: "हमारे इंजीनियर्स आपकी छत का छाया-मुक्त क्षेत्र व लोड जांचते हैं।" 
    },
    { 
      step: "02", 
      title: "Portal Registration", 
      titleHi: "राष्ट्रीय पोर्टल पंजीकरण", 
      desc: "We register your application on the PM Surya Ghar National Portal under code GKP2604066741.",
      descHi: "वेंडर कोड GKP2604066741 के तहत नेशनल पोर्टल पर ऑनलाइन आवेदन।" 
    },
    { 
      step: "03", 
      title: "Fast EPC Installation", 
      titleHi: "3-5 दिनों में सोलर स्थापना", 
      desc: "Installation of Tier-1 Loom Solar panels, heavy GI structure & dual earthing.",
      descHi: "लूम सोलर पैनल्स, हैवी जीआई स्ट्रक्चर व केमिकल अर्थिंग के साथ त्वरित स्थापना।" 
    },
    { 
      step: "04", 
      title: "UPPCL Net Metering", 
      titleHi: "स्मार्ट नेट मीटरिंग", 
      desc: "UPPCL Purvanchal Vidyut inspects the plant and installs bidirectional meter.",
      descHi: "पूर्वांचल विद्युत वितरण निगम द्वारा निरीक्षण व स्मार्ट नेट मीटर स्थापना।" 
    },
    { 
      step: "05", 
      title: "Direct Bank Subsidy", 
      titleHi: "सीधे बैंक खाते में सब्सिडी", 
      desc: "Subsidy amount (up to ₹1,08,000) deposited directly into your bank via DBT!",
      descHi: "₹1,08,000 तक की सब्सिडी सीधे आपके बैंक खाते में डीबीटी द्वारा प्राप्त!" 
    },
  ];

  return (
    <section id="subsidy" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Simultaneous English + Hindi) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Official Govt Subsidy Scheme 2026 • आधिकारिक सरकारी सब्सिडी योजना</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            PM Surya Ghar: <span className="text-emerald-700">Muft Bijli Yojana</span>
          </h2>

          <h3 className="text-xl sm:text-2xl font-extrabold text-blue-800 tracking-tight">
            पीएम सूर्य घर: मुफ्त बिजली योजना • सत्यार्थी सोलर सॉल्यूशन
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Get up to <strong className="text-slate-900 font-bold">₹1,08,000 Total Subsidy</strong> (₹78,000 Central + ₹30,000 UP State) directly in your bank account. As an official UPNEDA empanelled vendor (Code: <strong className="text-emerald-700">{businessData.vendorCode}</strong>), <strong>Satyarthi Solar Solution</strong> handles 100% of the government paperwork for you.
          </p>
          <p className="text-emerald-800 font-semibold text-xs sm:text-sm bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
            🇮🇳 केंद्र व उत्तर प्रदेश सरकार द्वारा प्रमाणित वेंडर कोड <strong>{businessData.vendorCode}</strong> द्वारा सम्पूर्ण फाइल प्रोसेसिंग व गारंटीड बैंक सब्सिडी।
          </p>
        </div>

        {/* Subsidy Cards Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 mt-12">
          {subsidyData.tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                tier.bestValue
                  ? "bg-gradient-to-b from-blue-900 via-slate-900 to-emerald-950 text-white shadow-xl shadow-blue-950/20 ring-2 ring-emerald-400"
                  : tier.popular
                  ? "bg-white text-slate-900 border-2 border-emerald-600 shadow-lg"
                  : "bg-white text-slate-900 border border-slate-200 shadow-xs"
              }`}
            >
              {/* Badges */}
              {tier.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  ★ Best Value | सबसे लोकप्रिय
                </div>
              )}
              {tier.popular && !tier.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  Most Popular | अनुशंसित
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className={`text-xl font-black ${tier.bestValue ? "text-white" : "text-slate-900"}`}>
                    {tier.capacity}
                  </h3>
                  <span className={`text-[11px] font-bold ${tier.bestValue ? "text-emerald-300" : "text-emerald-700"}`}>
                    सोलर प्लांट
                  </span>
                </div>

                <p className={`text-xs mt-1 ${tier.bestValue ? "text-slate-300" : "text-slate-500"}`}>
                  {tier.idealFor}
                </p>

                {/* Units & Savings (Bilingual) */}
                <div className={`mt-4 p-2.5 rounded-2xl ${tier.bestValue ? "bg-white/10" : "bg-slate-50 border border-slate-100"}`}>
                  <div className="flex justify-between items-center text-xs">
                    <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>Output | उत्पादन:</span>
                    <strong className={tier.bestValue ? "text-emerald-300" : "text-emerald-700"}>{tier.monthlyUnits}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>Savings | बचत:</span>
                    <strong className="text-amber-400 font-bold">~₹{tier.monthlySaving.toLocaleString()}/mo</strong>
                  </div>
                </div>

                {/* Subsidy Calculation Breakdown (Bilingual) */}
                <div className="mt-5 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>System Cost | कुल लागत:</span>
                    <span className={tier.bestValue ? "text-slate-300 line-through" : "text-slate-400 line-through"}>
                      ₹{tier.approxSystemCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center font-medium">
                    <span className={tier.bestValue ? "text-emerald-300" : "text-emerald-600"}>Central | केंद्र सब्सिडी:</span>
                    <span className={tier.bestValue ? "text-emerald-300" : "text-emerald-600"}>
                      - ₹{tier.centralSubsidy.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center font-medium">
                    <span className={tier.bestValue ? "text-emerald-300" : "text-emerald-600"}>UP State | राज्य सब्सिडी:</span>
                    <span className={tier.bestValue ? "text-emerald-300" : "text-emerald-600"}>
                      - ₹{tier.upStateSubsidy.toLocaleString()}
                    </span>
                  </div>
                  <div className={`pt-2 border-t flex justify-between items-center font-bold text-xs ${
                    tier.bestValue ? "border-slate-700 text-emerald-300" : "border-slate-100 text-emerald-700"
                  }`}>
                    <span>Total Subsidy | कुल सब्सिडी:</span>
                    <span>₹{tier.totalSubsidy.toLocaleString()}</span>
                  </div>
                </div>

                {/* Final Net Payable */}
                <div className={`mt-5 pt-3 border-t ${tier.bestValue ? "border-slate-700" : "border-slate-100"}`}>
                  <p className={`text-[11px] uppercase tracking-wider font-semibold ${tier.bestValue ? "text-slate-400" : "text-slate-500"}`}>
                    Net Cost | आपकी देय राशि
                  </p>
                  <p className={`text-2xl font-black mt-0.5 ${tier.bestValue ? "text-emerald-400" : "text-slate-900"}`}>
                    ₹{tier.netPayable.toLocaleString()}*
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => scrollToContact(tier.capacity)}
                className={`w-full mt-6 py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  tier.bestValue
                    ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-md"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                }`}
              >
                <span>Apply | आवेदन करें</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* 5-Step Subsidy Process Banner (Simultaneous English + Hindi) */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-teal-900 to-emerald-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              How Er. Satyaprakash Gets Your Subsidy Credited in 5 Simple Steps
            </h3>
            <h4 className="text-base sm:text-lg font-bold text-emerald-300">
              इंजीनियर सत्यप्रकाश द्वारा 5 आसान चरणों में सब्सिडी प्रक्रिया
            </h4>
            <p className="text-xs sm:text-sm text-slate-200">
              No need to visit any government office. Satyarthi Solar Solution handles DISCOM approvals & national portal end-to-end.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stepsBilingual.map((st, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 relative space-y-1">
                <span className="text-2xl font-black text-amber-400 opacity-90">{st.step}</span>
                <h4 className="font-bold text-sm text-white">{st.title}</h4>
                <p className="text-xs text-emerald-300 font-bold">{st.titleHi}</p>
                <p className="text-xs text-slate-200 leading-snug pt-1">{st.desc}</p>
                <p className="text-[11px] text-emerald-100 font-medium leading-snug">{st.descHi}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-100 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Satyarthi Solar Solution • Performance Bank Guarantee verified with UPNEDA (₹2.5 Lakhs).</span>
            </div>
            <a
              href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                "Hello Er. Satyaprakash, please guide me on how to claim PM Surya Ghar subsidy with Satyarthi Solar Solution."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black px-5 py-2.5 rounded-xl transition shrink-0 shadow-md"
            >
              Ask on WhatsApp | व्हाट्सएप पर पूछें
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SubsidySection;
