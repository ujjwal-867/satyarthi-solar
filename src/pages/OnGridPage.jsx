import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Banknote, ArrowRight, Zap, MapPin, Phone } from "lucide-react";
import { businessData } from "../data/businessData";
import PortalNavigationHub from "../components/PortalNavigationHub";
import Footer from "../components/Footer";
import {
  ExpressiveKineticText
} from "../components/MotionEffects";

export default function OnGridPage({ onNavigateHome, onNavigate, onOpenAdmin, onOpenCalculator }) {
  const { subsidyData } = businessData;

  const stepsBilingual = [
    { 
      step: "01", 
      title: "Free Roof Survey", 
      desc: "Our engineers inspect your rooftop and verify shadow-free area & structural load." 
    },
    { 
      step: "02", 
      title: "Portal Registration", 
      desc: "We register your application on PM Surya Ghar portal under code GKP2604066741." 
    },
    { 
      step: "03", 
      title: "Fast Installation", 
      desc: "Turnkey installation of Tier-1 solar panels, heavy GI structure & chemical earthing." 
    },
    { 
      step: "04", 
      title: "UPPCL Net Metering", 
      desc: "UPPCL Purvanchal Vidyut inspects the plant and installs the bi-directional meter." 
    },
    { 
      step: "05", 
      title: "Direct Bank Subsidy", 
      desc: "Subsidy of up to ₹1,08,000 deposited directly into your bank account via DBT." 
    },
  ];

  const handleApply = (capacity) => {
    const text = `Hello Er. Satyaprakash, I want to apply for PM Surya Ghar On-Grid Solar System (${capacity}). Please share quotation and arrange a free roof survey.`;
    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="flex-1 bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      <div>
        {/* Left-Aligned Hero Band */}
        <section className="py-10 sm:py-12 bg-[#0a1e3b] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Official Government Subsidy Portal 2026 • 2500+ Happy Clients</span>
              </p>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <ExpressiveKineticText
                  text="PM Surya Ghar: On-Grid Solar Rates"
                  highlightWords={["On-Grid", "Solar", "Rates"]}
                  highlightClass="text-amber-400"
                />
              </h1>

              <h2 className="text-base sm:text-xl font-bold text-amber-300 font-hindi">
                पीएम सूर्य घर मुफ्त बिजली योजना • केंद्र व राज्य सरकार की ₹1,08,000 तक सब्सिडी
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Transparent itemized pricing for 1 kW to 10 kW residential rooftop systems. Satyarthi Solar Solution (UPNEDA Vendor Code: <strong>{businessData.vendorCode}</strong>) handles 100% of portal approvals and UPPCL net-metering.
              </p>
            </div>

            {/* Right-Aligned Highlight Card */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-white/10 border border-white/15 text-white space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                  <Banknote className="w-5 h-5 text-slate-950" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-sm text-white">
                    केंद्र व राज्य सरकार की सब्सिडी के बाद नेट देय राशि की स्पष्ट जानकारी।
                  </p>
                  <p className="text-xs font-medium text-sky-200">
                    6% से 7% ब्याज दर पर आसान सरकारी बैंक ऋण (Bank Loan) उपलब्ध।
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent("Hello Er. Satyaprakash, please guide me on bank loan facility for solar rooftop.")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex justify-center bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-xs"
              >
                लोन सहायता लें ↗
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-5 mb-7 border-b border-slate-200">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                <ExpressiveKineticText
                  text="Official On-Grid Price List & Net Cost Breakdown"
                  highlightWords={["On-Grid", "Price", "List"]}
                  highlightClass="text-blue-700"
                />
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
                सभी 5 प्रमुख क्षमताएं — आधिकारिक नई विशेष दरें एवं सब्सिडी के बाद शुद्ध देय राशि
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {subsidyData.tiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className={`group relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 desktop-gallery-card-hover overflow-hidden ${
                  tier.bestValue
                    ? "bg-[#0a1e3b] text-white shadow-sm shadow-blue-950/20 ring-2 ring-amber-400"
                    : tier.popular
                    ? "bg-white text-slate-900 border-2 border-blue-600 shadow-lg hover:shadow-md"
                    : "bg-white text-slate-900 border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md"
                }`}
              >

                {/* Badges */}
                {tier.bestValue && (
                  <div className="bg-amber-400 text-slate-950 font-bold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap self-center mb-2">
                    ★ Best Value • सबसे लोकप्रिय
                  </div>
                )}
                {tier.popular && !tier.bestValue && (
                  <div className="bg-blue-600 text-white font-bold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap self-center mb-2">
                    Most Popular • अनुशंसित
                  </div>
                )}
                {tier.specialOffer && !tier.bestValue && (
                  <div className="bg-amber-500 text-slate-950 font-bold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap self-center mb-2">
                    ★ Special Offer • विशेष दर
                  </div>
                )}
                {tier.commercialGrade && !tier.bestValue && (
                  <div className="bg-[#0a1e3b] text-white font-bold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap self-center mb-2">
                    Commercial • उच्च क्षमता
                  </div>
                )}

                <div className="relative z-10">
                  <div>
                    <h4 className={`text-xl font-extrabold ${tier.bestValue ? "text-white" : "text-slate-900"}`}>
                      {tier.capacity}
                    </h4>
                    <span className={`text-[11px] font-semibold font-hindi block ${tier.bestValue ? "text-sky-300" : "text-blue-700"}`}>
                      {tier.capacityHi || "सोलर प्लांट"}
                    </span>
                  </div>

                  {/* Rate Badge Chip */}
                  {tier.rateBadge && (
                    <div className={`mt-2.5 py-1 px-2.5 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-xs ${
                      tier.bestValue
                        ? "bg-amber-400 text-slate-950 ring-1 ring-amber-300"
                        : tier.specialOffer || tier.commercialGrade
                        ? "bg-amber-50 text-amber-900 border border-amber-300"
                        : "bg-blue-50 text-blue-900 border border-blue-200"
                    }`}>
                      <Zap className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                      <span>{tier.rateBadge}</span>
                    </div>
                  )}

                  <p className={`text-xs mt-2 ${tier.bestValue ? "text-slate-300" : "text-slate-500"}`}>
                    {tier.idealFor}
                  </p>

                  <div className={`mt-4 p-2.5 rounded-xl ${tier.bestValue ? "bg-white/10" : "bg-slate-50 border border-slate-100"}`}>
                    <div className="flex justify-between items-center text-xs">
                      <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>Monthly Output:</span>
                      <strong className={tier.bestValue ? "text-sky-300" : "text-blue-700"}>{tier.monthlyUnits}</strong>
                    </div>
                    <div className="flex justify-between items-center text-xs mt-1">
                      <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>Est. Savings:</span>
                      <strong className="text-amber-400 font-bold">~₹{tier.monthlySaving.toLocaleString()}/mo</strong>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>System Cost:</span>
                      <span className={tier.bestValue ? "text-slate-300 line-through" : "text-slate-400 line-through"}>
                        ₹{tier.approxSystemCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center font-medium">
                      <span className={tier.bestValue ? "text-sky-300" : "text-blue-600"}>Central Subsidy:</span>
                      <span className={tier.bestValue ? "text-sky-300" : "text-blue-600"}>
                        - ₹{tier.centralSubsidy.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center font-medium">
                      <span className={tier.bestValue ? "text-sky-300" : "text-blue-600"}>UP State Subsidy:</span>
                      <span className={tier.bestValue ? "text-sky-300" : "text-blue-600"}>
                        - ₹{tier.upStateSubsidy.toLocaleString()}
                      </span>
                    </div>
                    <div className={`pt-2 border-t flex justify-between items-center font-bold text-xs ${
                      tier.bestValue ? "border-slate-700 text-amber-300" : "border-slate-100 text-blue-900"
                    }`}>
                      <span>Total Subsidy:</span>
                      <span>₹{tier.totalSubsidy.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className={`mt-5 pt-3 border-t ${tier.bestValue ? "border-slate-700" : "border-slate-100"}`}>
                    <p className={`text-[11px] uppercase tracking-wider font-semibold ${tier.bestValue ? "text-slate-400" : "text-slate-500"}`}>
                      Net Payable Cost
                    </p>
                    <p className={`text-2xl font-extrabold mt-0.5 ${tier.bestValue ? "text-amber-400" : "text-slate-900"}`}>
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
                  className={`relative z-10 w-full mt-6 py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    tier.bestValue
                      ? "bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md"
                      : "bg-[#0a1e3b] text-white hover:bg-blue-900"
                  }`}
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* 5-Step Process Banner */}
          <div className="mt-8 sm:mt-10 bg-[#0a1e3b] rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-blue-900/50">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-6 mb-6 border-b border-white/10">
              <div className="space-y-1 max-w-2xl">
                <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  End-to-End Subsidy Processing
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  How Er. Satyaprakash Gets Your Subsidy Credited in 5 Simple Steps
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-hindi md:text-right">
                5 आसान चरणों में सब्सिडी प्रक्रिया • No government office visits required.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {stepsBilingual.map((st, i) => (
                <div
                  key={i}
                  className="group relative bg-white/10 rounded-xl p-4 border border-white/15 hover:border-amber-400/50 space-y-1 transition-colors overflow-hidden"
                >
                  <span className="text-xl font-extrabold text-amber-400 block">{st.step}</span>
                  <h4 className="font-bold text-sm text-white">{st.title}</h4>
                  <p className="text-xs text-slate-200 pt-1 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-sky-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>UPNEDA Verified Empanelled EPC • 2500+ Happy Clients Across UP.</span>
              </div>
              <button
                type="button"
                onClick={onNavigateHome}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition shrink-0 cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>

          {/* Showroom & Engineering Office Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.005 }}
            className="mt-6 sm:mt-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="space-y-1 text-center md:text-left">
              <span className="text-blue-900 font-bold text-xs uppercase tracking-wider block">
                Showroom & Engineering Office • मुख्य पता
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Visit Our Motiram Adda Showroom in Gorakhpur
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                {businessData.address}. Complete live display of PM Surya Ghar on-grid inverters, bidirectional net-meters, and Tier-1 solar panels.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={businessData.googleMapLink}
                target="_blank"
                rel="noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs text-center transition shadow-md"
              >
                Google Maps ↗
              </a>
              <a
                href={`tel:${businessData.phone[0]}`}
                className="bg-[#0a1e3b] hover:bg-blue-900 text-white font-bold px-5 py-3 rounded-xl text-xs text-center transition flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 {businessData.phone[0]}</span>
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
