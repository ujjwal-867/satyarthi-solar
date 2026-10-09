import { ArrowLeft, BatteryCharging, Zap, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle, Phone, Sparkles, Wheat } from "lucide-react";
import { businessData } from "../data/businessData";
import { InstagramIcon, FacebookIcon } from "../components/SocialIcons";
import Footer from "../components/Footer";

export default function OffGridPage({ onNavigateHome, onNavigate, onOpenAdmin }) {
  const offGridTiers = [
    {
      capacity: "1 kW Off-Grid System",
      capacityHi: "1 किलोवाट ऑफ-ग्रिड (सिंगल बैटरी)",
      rateBadge: "ट्रू रेट: ₹95,000 – ₹1,05,000",
      batterySetup: "1x 150Ah / 200Ah C10 Solar Battery",
      monthlyUnits: "120 - 150 Units",
      idealFor: "1-2 Room Houses, basic lights, fans, TV, Wi-Fi router",
      inverterSpec: "12V / 24V Pure Sine Wave MPPT Solar PCU",
      panelSpec: "2x 550W High-Efficiency Mono PERC Panels",
      backup: "4 - 6 Hours continuous backup during power outages"
    },
    {
      capacity: "2 kW Off-Grid System",
      capacityHi: "2 किलोवाट ऑफ-ग्रिड (डबल बैटरी)",
      rateBadge: "ट्रू रेट: ₹1,65,000 – ₹1,80,000",
      batterySetup: "2x 150Ah / 200Ah C10 Tall Tubular Batteries",
      monthlyUnits: "240 - 300 Units",
      idealFor: "2-3 BHK Home, Refrigerator, TV, Mixer, Lights & Fans",
      inverterSpec: "24V MPPT Intelligent Solar PCU",
      panelSpec: "4x 550W Tier-1 Mono PERC Panels",
      backup: "6 - 8 Hours reliable night-time battery backup",
      popular: true
    },
    {
      capacity: "3 kW Off-Grid System",
      capacityHi: "3 किलोवाट ऑफ-ग्रिड (4 बैटरी बैंक)",
      rateBadge: "ट्रू रेट: ₹2,25,000 – ₹2,50,000",
      batterySetup: "4x 150Ah / 200Ah C10 Heavy Solar Batteries",
      monthlyUnits: "360 - 450 Units",
      idealFor: "3-4 BHK Home, 1.5 Ton Inverter AC, Fridge & Water Pump",
      inverterSpec: "48V Commercial Grade Pure Sine Wave PCU",
      panelSpec: "6x 550W Monocrystalline Half-Cut Panels",
      backup: "Heavy load backup including Inverter AC & Fridge",
      bestValue: true
    },
    {
      capacity: "5 kW Hybrid Smart System",
      capacityHi: "5 किलोवाट हाइब्रिड (सोलर + बैटरी + ग्रिड)",
      rateBadge: "ट्रू रेट: ₹3,60,000 – ₹3,95,000",
      batterySetup: "48V High Capacity Tubular / Lithium LiFePO4",
      monthlyUnits: "600 - 750 Units",
      idealFor: "Villas, Nursing Homes, Diagnostics & Fuel Stations",
      inverterSpec: "Bi-directional Hybrid Solar Inverter with Grid Export",
      panelSpec: "10x 550W High-Efficiency Monocrystalline Panels",
      backup: "24x7 Uninterrupted Clean Power with Zero Cut",
      specialOffer: true
    },
    {
      capacity: "15 HP Solar Aata Chakki Drive",
      capacityHi: "15 HP सोलर आटा चक्की (डीजल-मुक्त VFD)",
      rateBadge: "टर्नकी रेट: ₹4,20,000 – ₹4,80,000",
      batterySetup: "बिना बैटरी के (डायरेक्ट सोलर VFD ड्राइव)",
      monthlyUnits: "1,500+ Units equivalent power",
      idealFor: "Commercial Flour Mills, Oil Expellers & Agro Pumps",
      inverterSpec: "Heavy Duty High-Torque Solar VFD (IP54 Enclosure)",
      panelSpec: "28x - 32x 550W High-Yield Solar Panels + Elevated Pillars",
      backup: "दिन भर 8 घंटे लगातार सूर्य से संचालन — हर माह ₹35,000+ डीजल बचत",
      aataChakki: true
    }
  ];

  const handleInquire = (title) => {
    const text = `Hello Er. Satyaprakash, I want to inquire about ${title} with true rate list. Please share itemized estimate.`;
    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
          <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white text-xs py-1.5 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
              <div className="flex items-center gap-2 text-[11px]">
                <span className="bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded text-[10px]">
                  TRUE RATE LIST
                </span>
                <span>Off-Grid & Battery Storage Systems • स्वतंत्र सौर ऊर्जा</span>
                <span className="text-slate-500">•</span>
                <span className="text-amber-300 font-hindi">हम सस्ता नहीं, क्वालिटी लगाते हैं</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <a href={businessData.instagramUrl} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-pink-400">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a href={businessData.facebookUrl} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-400">
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-600">|</span>
                <a href={`tel:${businessData.phone[0]}`} className="text-emerald-400 font-bold hover:underline">
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
              <span className="text-sm font-black text-slate-900 block">OFF-GRID & HYBRID SOLAR</span>
              <span className="text-[11px] font-bold text-blue-700 font-hindi">सत्य व पारदर्शी दर सूची • बैटरी बैकअप</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
              <BatteryCharging className="w-3.5 h-3.5 text-amber-400" />
              <span>Independent Energy • 24x7 Power Backup Rate Card</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Off-Grid & Hybrid Solar: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">Our True Rate List</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-amber-300 font-hindi">
              ऑफ-ग्रिड सोलर एवं आटा चक्की ड्राइव • वास्तविक व पारदर्शी दर सूची
            </h2>

            <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
              No grid power cuts, no diesel expenses. Complete heavy-duty systems with pure sine wave solar PCUs, C10 tall tubular batteries, and 550W mono PERC panels engineered for Gorakhpur & Uttar Pradesh.
            </p>

            <div className="mt-6 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
                ★ Genuine Quality Assurance • हमारा संकल्प
              </span>
              <p className="text-xl font-black text-white font-hindi mt-0.5">
                &ldquo;हम सस्ता नहीं, क्वालिटी लगाते हैं&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* True Rates Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Verified Off-Grid & Agro Solar Capacities
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              सत्यार्थी सोलर सॉल्यूशन — शुद्ध साइन वेव पीसीयू, सी-10 सोलर बैटरी व 25 वर्ष वारंटी पैनल
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offGridTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  tier.bestValue
                    ? "bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white border-blue-500/40 shadow-lg"
                    : tier.aataChakki
                    ? "bg-gradient-to-b from-amber-950/20 via-white to-amber-50/30 text-slate-900 border-amber-300 shadow-md"
                    : "bg-white text-slate-900 border-slate-200"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[11px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full">
                      {tier.rateBadge}
                    </span>
                    {tier.aataChakki && (
                      <span className="p-1.5 bg-amber-100 text-amber-800 rounded-xl">
                        <Wheat className="w-5 h-5" />
                      </span>
                    )}
                  </div>

                  <h4 className={`text-xl font-black mt-2 ${tier.bestValue ? "text-white" : "text-slate-900"}`}>
                    {tier.capacity}
                  </h4>
                  <p className={`text-xs font-bold font-hindi mt-0.5 ${tier.bestValue ? "text-amber-300" : "text-emerald-700"}`}>
                    {tier.capacityHi}
                  </p>

                  <div className={`mt-4 p-3 rounded-2xl space-y-1.5 text-xs ${
                    tier.bestValue ? "bg-white/10" : "bg-slate-50 border border-slate-100"
                  }`}>
                    <div className="flex justify-between">
                      <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>Battery Setup:</span>
                      <strong className={tier.bestValue ? "text-amber-300" : "text-slate-900"}>{tier.batterySetup}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>Inverter PCU:</span>
                      <strong className={tier.bestValue ? "text-white" : "text-blue-700"}>{tier.inverterSpec}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className={tier.bestValue ? "text-slate-300" : "text-slate-500"}>Solar Panels:</span>
                      <strong className={tier.bestValue ? "text-emerald-300" : "text-emerald-700"}>{tier.panelSpec}</strong>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1 text-xs">
                    <p className={`font-semibold ${tier.bestValue ? "text-slate-200" : "text-slate-700"}`}>
                      💡 <strong>Ideal For:</strong> {tier.idealFor}
                    </p>
                    <p className={`font-medium ${tier.bestValue ? "text-amber-200" : "text-emerald-800 font-hindi"}`}>
                      ⚡ <strong>Backup Benefit:</strong> {tier.backup}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100/20 flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleInquire(tier.capacity)}
                    className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-2.5 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Quote</span>
                  </button>
                  <a
                    href={`tel:${businessData.phone[0]}`}
                    className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition flex items-center justify-center shrink-0"
                    title="Call Engineer"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Agro Mill Direct Consultation Banner */}
          <div className="mt-14 bg-gradient-to-r from-amber-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
                🌾 Solar Flour Mill & Agro VFD Engineering
              </span>
              <h3 className="text-2xl font-black text-white">
                Save ₹25,000 – ₹45,000 Every Month on Diesel
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Run 10 HP to 25 HP flour mills, oil expellers, and tube wells directly on solar. Fully operational installations running in Kushinagar, Gorakhpur, and Deoria.
              </p>
            </div>
            <a
              href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent("Hello Er. Satyaprakash, I want complete details and quotation for 10HP/15HP Solar Aata Chakki plant.")}`}
              target="_blank"
              rel="noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3.5 rounded-xl text-xs text-center transition shadow-md whitespace-nowrap shrink-0"
            >
              Get Chakki Quotation ↗
            </a>
          </div>
        </section>
      </div>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
