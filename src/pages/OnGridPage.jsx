import { ArrowLeft, Sparkles, ShieldCheck, Banknote, ArrowRight, Zap, CheckCircle2, Phone } from "lucide-react";
import { businessData } from "../data/businessData";
import { InstagramIcon, FacebookIcon } from "../components/SocialIcons";
import Footer from "../components/Footer";

export default function OnGridPage({ onNavigateHome, onNavigate, onOpenAdmin }) {
  const { subsidyData } = businessData;

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

  const handleApply = (capacity) => {
    const text = `Hello Er. Satyaprakash, I want to apply for PM Surya Ghar On-Grid Solar System (${capacity}). Please share quotation and arrange a free roof survey.`;
    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
          <div className="bg-gradient-to-r from-blue-900 via-teal-900 to-emerald-900 text-white text-xs py-1.5 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
              <div className="flex items-center gap-2 text-[11px]">
                <span className="bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded text-[10px]">
                  UPNEDA APPROVED
                </span>
                <span>Vendor Code: <strong>{businessData.vendorCode}</strong></span>
                <span className="text-teal-300">•</span>
                <span>PM Surya Ghar: Muft Bijli Yojana (UP)</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <a href={businessData.instagramUrl} target="_blank" rel="noreferrer" className="text-teal-200 hover:text-pink-300">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a href={businessData.facebookUrl} target="_blank" rel="noreferrer" className="text-teal-200 hover:text-sky-300">
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <span className="text-teal-500">|</span>
                <a href={`tel:${businessData.phone[0]}`} className="text-emerald-300 font-bold hover:underline">
                  📞 +91 {businessData.phone[0]}
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3.5 py-2 rounded-xl text-xs transition cursor-pointer shadow-xs border border-slate-200"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-600" />
              <span>Back to Main Home • सोलर होम</span>
            </button>

            <div className="text-right">
              <span className="text-sm font-black text-slate-900 block">ON-GRID SOLAR WITH SUBSIDY</span>
              <span className="text-[11px] font-bold text-emerald-700 font-hindi">पीएम सूर्य घर योजना • आधिकारिक दरें</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Government Subsidy Portal 2026 • आधिकारिक दर सूची</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              PM Surya Ghar: <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">On-Grid Solar Rates</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 font-hindi">
              पीएम सूर्य घर मुफ्त बिजली योजना • केंद्र व राज्य सरकार की ₹1,08,000 तक सब्सिडी
            </h2>

            <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
              Transparent itemized pricing for 1 kW to 10 kW residential rooftop systems. Satyarthi Solar Solution (UPNEDA Vendor Code: <strong>{businessData.vendorCode}</strong>) manages 100% of the portal approvals and bidirectional net-metering.
            </p>

            {/* Official Highlight Banner Requested by User */}
            <div className="mt-6 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 font-black">
                  <Banknote className="w-6 h-6 text-slate-950" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-black text-sm sm:text-base text-white">
                    🇮🇳 केंद्र व राज्य सरकार की सब्सिडी के बाद नेट देय राशि की स्पष्ट जानकारी।
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-emerald-300">
                    ⚡ 6% से 7% ब्याज दर पर आसान सरकारी बैंक ऋण (Bank Loan) उपलब्ध।
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent("Hello Er. Satyaprakash, please guide me on bank loan facility for solar rooftop.")}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl transition shadow-xs shrink-0 whitespace-nowrap"
              >
                लोन सहायता लें ↗
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Official On-Grid Price List & Net Cost Breakdown
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              सभी 5 प्रमुख क्षमताएं — आधिकारिक नई विशेष दरें एवं सब्सिडी के बाद शुद्ध देय राशि
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
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
                {tier.specialOffer && !tier.bestValue && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    ★ Special Offer | विशेष दर
                  </div>
                )}
                {tier.commercialGrade && !tier.bestValue && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    Commercial | उच्च क्षमता
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between">
                    <h4 className={`text-xl font-black ${tier.bestValue ? "text-white" : "text-slate-900"}`}>
                      {tier.capacity}
                    </h4>
                    <span className={`text-[11px] font-bold ${tier.bestValue ? "text-emerald-300" : "text-emerald-700"}`}>
                      {tier.capacityHi || "सोलर प्लांट"}
                    </span>
                  </div>

                  {/* Rate Badge Chip */}
                  {tier.rateBadge && (
                    <div className={`mt-2 py-1 px-2.5 rounded-xl text-[11px] font-black flex items-center justify-center gap-1.5 shadow-xs ${
                      tier.bestValue
                        ? "bg-amber-400 text-slate-950 ring-1 ring-amber-300"
                        : tier.specialOffer || tier.commercialGrade
                        ? "bg-amber-50 text-amber-900 border border-amber-300"
                        : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    }`}>
                      <Zap className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                      <span>{tier.rateBadge}</span>
                    </div>
                  )}

                  <p className={`text-xs mt-2 ${tier.bestValue ? "text-slate-300" : "text-slate-500"}`}>
                    {tier.idealFor}
                  </p>

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

                  <div className={`mt-5 pt-3 border-t ${tier.bestValue ? "border-slate-700" : "border-slate-100"}`}>
                    <p className={`text-[11px] uppercase tracking-wider font-semibold ${tier.bestValue ? "text-slate-400" : "text-slate-500"}`}>
                      Net Cost | आपकी देय राशि
                    </p>
                    <p className={`text-2xl font-black mt-0.5 ${tier.bestValue ? "text-emerald-400" : "text-slate-900"}`}>
                      ₹{tier.netPayable.toLocaleString()}*
                    </p>
                    {tier.emi && (
                      <p className={`text-[11px] font-semibold mt-1 ${tier.bestValue ? "text-amber-300" : "text-blue-700"}`}>
                        बैंक EMI: {tier.emi}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleApply(tier.capacity)}
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

          {/* 5-Step Process Banner */}
          <div className="mt-14 bg-gradient-to-r from-blue-900 via-teal-900 to-emerald-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How Er. Satyaprakash Gets Your Subsidy Credited in 5 Simple Steps
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                इंजीनियर सत्यप्रकाश द्वारा 5 आसान चरणों में सब्सिडी प्रक्रिया • No need to visit any government office.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {stepsBilingual.map((st, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-1">
                  <span className="text-2xl font-black text-amber-400">{st.step}</span>
                  <h4 className="font-bold text-sm text-white">{st.title}</h4>
                  <p className="text-xs text-emerald-300 font-bold">{st.titleHi}</p>
                  <p className="text-xs text-slate-200 pt-1">{st.desc}</p>
                  <p className="text-[11px] text-emerald-100 font-medium">{st.descHi}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>UPNEDA Verified Empanelled EPC • Performance Bank Guarantee Active.</span>
              </div>
              <button
                type="button"
                onClick={onNavigateHome}
                className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black px-5 py-2.5 rounded-xl transition shrink-0"
              >
                Back to Main Home • सोलर होम
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
