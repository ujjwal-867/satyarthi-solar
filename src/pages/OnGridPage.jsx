import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Banknote, ArrowRight, Zap } from "lucide-react";
import { businessData } from "../data/businessData";
import PortalNavigationHub from "../components/PortalNavigationHub";
import Footer from "../components/Footer";
import {
  ExpressiveKineticText,
  KineticMarqueeStrip,
  CollaborativeCursorsOverlay,
  InteractiveZapBurstButton,
  LiveActivityStreamBadge
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
        {/* Hero Section with Expressive Kinetic Typography & Real-Time Collaborative Cursors */}
        <section className="py-16 bg-gradient-to-b from-blue-950 via-[#0a1e3b] to-slate-950 text-white relative overflow-hidden text-center">
          <CollaborativeCursorsOverlay
            cursors={[
              {
                name: "PM Surya Ghar Portal",
                badge: "₹1,08,000 DBT Active",
                color: "bg-amber-400 text-slate-950",
                pathX: ["5%", "18%", "11%", "5%"],
                pathY: ["18%", "46%", "68%", "18%"],
                duration: 15
              },
              {
                name: "UPPCL Net-Meter",
                badge: "GKP2604066741 Verified",
                color: "bg-sky-400 text-slate-950",
                pathX: ["84%", "70%", "78%", "84%"],
                pathY: ["22%", "54%", "32%", "22%"],
                duration: 18
              }
            ]}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-sky-300 border border-blue-400/30 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Official Government Subsidy Portal 2026 • 2500+ Happy Clients</span>
              </div>
              <LiveActivityStreamBadge dark />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              <ExpressiveKineticText
                text="PM Surya Ghar: On-Grid Solar Rates"
                highlightWords={["On-Grid", "Solar", "Rates"]}
                highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-amber-300"
              />
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-amber-300 font-hindi">
              पीएम सूर्य घर मुफ्त बिजली योजना • केंद्र व राज्य सरकार की ₹1,08,000 तक सब्सिडी
            </h2>

            <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
              Transparent itemized pricing for 1 kW to 10 kW residential rooftop systems. Satyarthi Solar Solution (UPNEDA Vendor Code: <strong>{businessData.vendorCode}</strong>) manages 100% of the portal approvals and bidirectional net-metering.
            </p>

            {/* Official Highlight Banner Requested by User */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="mt-6 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-black">
                  <Banknote className="w-6 h-6 text-slate-950" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-black text-sm sm:text-base text-white">
                    🇮🇳 केंद्र व राज्य सरकार की सब्सिडी के बाद नेट देय राशि की स्पष्ट जानकारी।
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-sky-200">
                    ⚡ 6% से 7% ब्याज दर पर आसान सरकारी बैंक ऋण (Bank Loan) उपलब्ध।
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent("Hello Er. Satyaprakash, please guide me on bank loan facility for solar rooftop.")}`}
                target="_blank"
                rel="noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl transition shadow-xs shrink-0 whitespace-nowrap"
              >
                लोन सहायता लें ↗
              </a>
            </motion.div>
          </div>
        </section>

        {/* Expressive Kinetic Marquee Ribbon */}
        <KineticMarqueeStrip
          items={[
            "1 KW ON-GRID ₹85,000",
            "2 KW ON-GRID ₹1,40,000",
            "3 KW ON-GRID ₹1,90,000",
            "5 KW SPECIAL RATE ₹3,00,000",
            "10 KW SPECIAL RATE ₹6,00,000",
            "UP TO ₹1,08,000 GOVT SUBSIDY"
          ]}
        />

        {/* Pricing Cards 3D Bento Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              <ExpressiveKineticText
                text="Official On-Grid Price List & Net Cost Breakdown"
                highlightWords={["On-Grid", "Price", "List"]}
                highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-amber-500"
              />
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              सभी 5 प्रमुख क्षमताएं — आधिकारिक नई विशेष दरें एवं सब्सिडी के बाद शुद्ध देय राशि
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5" style={{ perspective: "1100px" }}>
            {subsidyData.tiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className={`group relative rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 desktop-gallery-card-hover overflow-hidden ${
                  tier.bestValue
                    ? "bg-gradient-to-b from-[#0a1e3b] via-blue-950 to-slate-950 text-white shadow-xl shadow-blue-950/20 ring-2 ring-amber-400"
                    : tier.popular
                    ? "bg-white text-slate-900 border-2 border-blue-600 shadow-lg hover:shadow-2xl"
                    : "bg-white text-slate-900 border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-2xl"
                }`}
              >
                {/* Desktop-Only Gallery Shine Sweep */}
                <div className="desktop-shine-sweep" />

                {/* Badges */}
                {tier.bestValue && (
                  <div className="bg-amber-400 text-slate-950 font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap self-center mb-2">
                    ★ Best Value | सबसे लोकप्रिय
                  </div>
                )}
                {tier.popular && !tier.bestValue && (
                  <div className="bg-blue-600 text-white font-bold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap self-center mb-2">
                    Most Popular | अनुशंसित
                  </div>
                )}
                {tier.specialOffer && !tier.bestValue && (
                  <div className="bg-amber-500 text-slate-950 font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap self-center mb-2">
                    ★ Special Offer | विशेष दर
                  </div>
                )}
                {tier.commercialGrade && !tier.bestValue && (
                  <div className="bg-[#0a1e3b] text-white font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap self-center mb-2">
                    Commercial | उच्च क्षमता
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-1">
                    <div>
                      <h4 className={`text-xl font-black ${tier.bestValue ? "text-white" : "text-slate-900"}`}>
                        {tier.capacity}
                      </h4>
                      <span className={`text-[11px] font-bold block ${tier.bestValue ? "text-sky-300" : "text-blue-700"}`}>
                        {tier.capacityHi || "सोलर प्लांट"}
                      </span>
                    </div>
                    <InteractiveZapBurstButton
                      initialCount={110 + idx * 34}
                      label=""
                      dark={Boolean(tier.bestValue)}
                    />
                  </div>

                  {/* Rate Badge Chip */}
                  {tier.rateBadge && (
                    <div className={`mt-2.5 py-1 px-2.5 rounded-xl text-[11px] font-black flex items-center justify-center gap-1.5 shadow-xs ${
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

                  <div className={`mt-4 p-2.5 rounded-2xl ${tier.bestValue ? "bg-white/10" : "bg-slate-50 border border-slate-100"}`}>
                    <div className="flex justify-between items-center text-xs">
                      <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>Output | उत्पादन:</span>
                      <strong className={tier.bestValue ? "text-sky-300" : "text-blue-700"}>{tier.monthlyUnits}</strong>
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
                      <span className={tier.bestValue ? "text-sky-300" : "text-blue-600"}>Central | केंद्र सब्सिडी:</span>
                      <span className={tier.bestValue ? "text-sky-300" : "text-blue-600"}>
                        - ₹{tier.centralSubsidy.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center font-medium">
                      <span className={tier.bestValue ? "text-sky-300" : "text-blue-600"}>UP State | राज्य सब्सिडी:</span>
                      <span className={tier.bestValue ? "text-sky-300" : "text-blue-600"}>
                        - ₹{tier.upStateSubsidy.toLocaleString()}
                      </span>
                    </div>
                    <div className={`pt-2 border-t flex justify-between items-center font-bold text-xs ${
                      tier.bestValue ? "border-slate-700 text-amber-300" : "border-slate-100 text-blue-900"
                    }`}>
                      <span>Total Subsidy | कुल सब्सिडी:</span>
                      <span>₹{tier.totalSubsidy.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className={`mt-5 pt-3 border-t ${tier.bestValue ? "border-slate-700" : "border-slate-100"}`}>
                    <p className={`text-[11px] uppercase tracking-wider font-semibold ${tier.bestValue ? "text-slate-400" : "text-slate-500"}`}>
                      Net Cost | आपकी देय राशि
                    </p>
                    <p className={`text-2xl font-black mt-0.5 ${tier.bestValue ? "text-amber-400" : "text-slate-900"}`}>
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
                  <span>Apply | आवेदन करें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* 5-Step Process Banner with 3D Bento Step Cards */}
          <div className="mt-14 bg-gradient-to-r from-blue-950 via-[#0a1e3b] to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-blue-900/50">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How Er. Satyaprakash Gets Your Subsidy Credited in 5 Simple Steps
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                इंजीनियर सत्यप्रकाश द्वारा 5 आसान चरणों में सब्सिडी प्रक्रिया • No need to visit any government office.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4" style={{ perspective: "1000px" }}>
              {stepsBilingual.map((st, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, rotateX: 4, rotateY: -3, scale: 1.02 }}
                  className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 hover:border-amber-400/60 space-y-1 transition overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                  <span className="text-2xl font-black text-amber-400 block">{st.step}</span>
                  <h4 className="font-bold text-sm text-white">{st.title}</h4>
                  <p className="text-xs text-slate-200 pt-1 leading-relaxed">{st.desc}</p>
                </motion.div>
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
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-2.5 rounded-xl transition shrink-0 cursor-pointer"
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
