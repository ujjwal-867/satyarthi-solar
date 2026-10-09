import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  Calculator as CalcIcon, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  TrendingUp, 
  Leaf, 
  Clock, 
  Coins, 
  Building, 
  Home, 
  Factory, 
  Wheat,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

function Calculator({ onSelectQuote }) {
  const [bill, setBill] = useState(3500);
  const [roofArea, setRoofArea] = useState(400);
  const [propertyType, setPropertyType] = useState("residential");
  const [location, setLocation] = useState("Gorakhpur");

  // Dynamic calculations based on real UP tariff & solar insolation data
  const calculation = useMemo(() => {
    // Approx electricity tariff in UP: ₹7.5 / unit for residential, ₹9.5 for commercial/industrial
    const tariffPerUnit = propertyType === "residential" ? 7.5 : 9.5;
    const monthlyUnits = bill / tariffPerUnit;
    
    // In UP, 1 kW solar generates ~120 to 130 units per month
    let idealKw = Math.ceil(monthlyUnits / 125);
    if (idealKw < 1) idealKw = 1;
    
    // Max capacity restricted by shadow-free roof area (approx 85 sq ft per kW)
    const maxKwByRoof = Math.floor(roofArea / 85);
    const recommendedKw = Math.max(1, Math.min(idealKw, Math.max(1, maxKwByRoof)));

    // Cost calculations (Updated with official price card: 1kW=85k, 2kW=140k, 3kW=190k, 5kW=300k, 10kW=600k)
    let grossCost = 0;
    if (recommendedKw === 1) grossCost = 85000;
    else if (recommendedKw === 2) grossCost = 140000;
    else if (recommendedKw === 3) grossCost = 190000;
    else if (recommendedKw <= 5) grossCost = 190000 + (recommendedKw - 3) * 55000;
    else if (recommendedKw <= 10) grossCost = 300000 + (recommendedKw - 5) * 60000;
    else grossCost = recommendedKw * 60000;

    // Subsidy (Residential PM Surya Ghar in Uttar Pradesh)
    let subsidy = 0;
    if (propertyType === "residential") {
      if (recommendedKw === 1) subsidy = 45000; // 30k central + 15k state
      else if (recommendedKw === 2) subsidy = 90000; // 60k central + 30k state
      else subsidy = 108000; // max cap ₹1,08,000 for 3kW and above in UP
    } else {
      // Commercial has 40% accelerated tax depreciation benefit
      subsidy = 0;
    }

    const netCost = Math.max(0, grossCost - subsidy);
    
    // Monthly savings
    const generationMonthlyUnits = recommendedKw * 125;
    const monthlySaving = Math.round(Math.min(bill, generationMonthlyUnits * tariffPerUnit));
    const annualSaving = monthlySaving * 12;

    // Payback period in years
    const paybackYears = (netCost / (annualSaving || 1)).toFixed(1);

    // 25 Years lifetime savings
    const lifetimeSavings = (annualSaving * 25) - netCost;

    // Carbon offset: ~1.2 tons CO2 per kW per year
    const co2Reduction = (recommendedKw * 1.2 * 25).toFixed(0);

    // Panel count (using 550W high efficiency Mono PERC panels)
    const panelCount = Math.ceil((recommendedKw * 1000) / 550);

    return {
      recommendedKw,
      grossCost,
      subsidy,
      netCost,
      monthlySaving,
      annualSaving,
      paybackYears: paybackYears < 0.5 ? "0.8" : paybackYears,
      lifetimeSavings: lifetimeSavings > 0 ? lifetimeSavings : annualSaving * 20,
      co2Reduction,
      panelCount,
      generationMonthlyUnits
    };
  }, [bill, roofArea, propertyType]);

  const handleApplyEstimate = () => {
    if (onSelectQuote) {
      onSelectQuote({
        bill,
        roofArea,
        location,
        propertyType,
        recommendedKw: calculation.recommendedKw,
        netCost: calculation.netCost,
      });
    }
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const shareOnWhatsApp = () => {
    const text = `Hello Er. Satyaprakash, I used the Solar Calculator on Satyarthi Solar Solution website for my property in ${location}.\n` +
      `• Monthly Bill: ₹${bill}\n` +
      `• Roof Area: ${roofArea} sq ft\n` +
      `• Property Type: ${propertyType}\n` +
      `• Recommended System: ${calculation.recommendedKw} kW Solar\n` +
      `• Estimated Net Cost: ₹${calculation.netCost.toLocaleString()} (after subsidy)\n` +
      `• Expected Monthly Saving: ₹${calculation.monthlySaving.toLocaleString()}/mo\n` +
      `Please provide me a customized quote and arrange a free roof survey.`;

    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="calculator" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Blue & Green Ambient Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bilingual Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <CalcIcon className="w-4 h-4 text-blue-600" />
            <span>Instant Solar ROI Calculator • तुरंत सोलर बचत कैलकुलेटर</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Calculate Solar Capacity & <span className="text-emerald-600">Govt Subsidy</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              सोलर क्षमता एवं सरकारी सब्सिडी की तुरंत गणना करें
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Enter your monthly electricity bill and roof space to see recommended system capacity, investment cost, UPNEDA subsidy, and payback period.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              अपने मासिक बिजली बिल और छत के क्षेत्रफल से जानें सही सोलर प्लांट, सब्सिडी और 25 वर्षों की शुद्ध बचत।
            </span>
          </p>
        </motion.div>

        {/* Main Calculator Grid */}
        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: User Inputs (White SaaS Card) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-7 shadow-xl shadow-slate-100"
          >
            
            {/* Input 1: Property Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                1. Select Property Type • प्रॉपर्टी का प्रकार चुनें
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "residential", label: "Home / Villa", hindi: "घरेलू आवास", icon: Home, badge: "Subsidy Ready • मान्य" },
                  { id: "commercial", label: "Commercial", hindi: "दुकान / कॉम्प्लेक्स", icon: Building, badge: "Tax Benefit • छूट" },
                  { id: "industrial", label: "Industrial", hindi: "उद्योग / फैक्ट्री", icon: Factory, badge: "HT / LT" },
                  { id: "agro", label: "Aata Chakki", hindi: "आटा चक्की", icon: Wheat, badge: "VFD Drive" },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = propertyType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPropertyType(item.id)}
                      className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1 cursor-pointer ${
                        isSelected
                          ? "bg-blue-600 text-white border-blue-600 font-bold shadow-lg shadow-blue-500/20"
                          : "bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50/40"
                      }`}
                    >
                      <Icon className="w-5 h-5 mb-0.5" />
                      <span className="text-xs font-bold">{item.label}</span>
                      <span className="text-[10px] opacity-90">{item.hindi}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-semibold mt-0.5 ${
                        isSelected ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}>
                        {item.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input 2: Monthly Electricity Bill */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    2. Monthly Electricity Bill • मासिक बिजली बिल (₹)
                  </label>
                  <span className="text-[11px] text-slate-500">औसत बिजली का मासिक खर्च</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-blue-600 font-black text-lg">₹{bill.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-400">/month • माह</span>
                </div>
              </div>
              <input
                type="range"
                min="1000"
                max="30000"
                step="500"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>₹1,000</span>
                <span>₹10,000</span>
                <span>₹20,000</span>
                <span>₹30,000+</span>
              </div>
            </div>

            {/* Input 3: Roof Area Available */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    3. Rooftop Area • उपलब्ध छत का क्षेत्रफल
                  </label>
                  <span className="text-[11px] text-slate-500">छाया-मुक्त (Shadow-Free) पक्की छत</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-emerald-600 font-black text-lg">{roofArea}</span>
                  <span className="text-[10px] text-slate-400">Sq Ft • वर्ग फुट</span>
                </div>
              </div>
              <input
                type="range"
                min="100"
                max="2500"
                step="50"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>100 sq ft</span>
                <span>500 sq ft</span>
                <span>1500 sq ft</span>
                <span>2500+ sq ft</span>
              </div>
            </div>

            {/* Input 4: Location */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                4. Installation Location • स्थापना का जिला (उत्तर प्रदेश)
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer shadow-xs"
              >
                <option value="Gorakhpur">Gorakhpur • गोरखपुर (Head Office - Motiram Adda)</option>
                <option value="Deoria">Deoria • देवरिया</option>
                <option value="Kushinagar">Kushinagar • कुशीनगर</option>
                <option value="Maharajganj">Maharajganj • महराजगंज</option>
                <option value="Basti">Basti • बस्ती</option>
                <option value="Sant Kabir Nagar">Sant Kabir Nagar • संत कबीर नगर (खलीलाबाद)</option>
                <option value="Siddharthnagar">Siddharthnagar • सिद्धार्थनगर</option>
                <option value="Azamgarh">Azamgarh • आजमगढ़</option>
                <option value="Mau">Mau • मऊ</option>
                <option value="Ballia">Ballia • बलिया</option>
                <option value="Varanasi">Varanasi • वाराणसी</option>
                <option value="Lucknow">Lucknow • लखनऊ</option>
                <option value="Other Uttar Pradesh">Other Location in Uttar Pradesh • अन्य जिला (उत्तर प्रदेश)</option>
              </select>
            </div>

            {/* Helpline Note */}
            <div className="p-3 bg-blue-50/80 rounded-2xl border border-blue-200/80 flex items-center gap-3 text-xs text-blue-900">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <strong>24×7 Engineer Support:</strong> Call <strong>+91 8112991941</strong> or <strong>+91 8112991441</strong> for site survey assistance.
              </div>
            </div>

          </motion.div>

          {/* Right Column: Calculated Results (White SaaS Container with Green/Blue Highlights) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-emerald-900/5 space-y-6"
          >
            
            {/* Top Recommended System Pill */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <p className="text-xs uppercase font-bold text-emerald-700 tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Recommended Solution • अनुशंसित सोलर प्लांट</span>
                </p>
                <h3 className="text-3xl font-black text-slate-900 mt-1">
                  {calculation.recommendedKw} kW <span className="text-blue-600">Solar System</span>
                </h3>
                <p className="text-sm font-semibold text-slate-700 font-hindi mt-0.5">
                  {calculation.recommendedKw} किलोवाट सोलर रूफटॉप प्लांट
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Requires ~{calculation.panelCount} high-efficiency 550W Loom Solar / Tata panels (~{calculation.recommendedKw * 85} sq ft roof)
                </p>
              </div>
              <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 shadow-xs">
                <Zap className="w-8 h-8" />
              </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Monthly Savings • मासिक बचत</span>
                </span>
                <p className="text-2xl font-black text-emerald-600 mt-1">
                  ₹{calculation.monthlySaving.toLocaleString()}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  ₹{calculation.annualSaving.toLocaleString()} / year saved • प्रति वर्ष बचत
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Payback Period • लागत वापसी</span>
                </span>
                <p className="text-2xl font-black text-blue-600 mt-1">
                  {calculation.paybackYears} Years • वर्ष
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Free power for next 21+ yrs • आगे मुफ्त बिजली
                </p>
              </div>
            </div>

            {/* Detailed Cost Breakdown Table */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3 text-sm shadow-xs">
              <div className="flex justify-between items-center text-slate-700 text-xs sm:text-sm">
                <span>Estimated Gross Cost • अनुमानित कुल लागत:</span>
                <span className="font-bold text-slate-900">
                  ₹{calculation.grossCost.toLocaleString()}
                </span>
              </div>

              {propertyType === "residential" ? (
                <div className="flex justify-between items-center text-emerald-700 text-xs sm:text-sm font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Govt Subsidy (PM Surya Ghar) • सरकारी सब्सिडी:</span>
                  </span>
                  <span className="font-black text-emerald-600">- ₹{calculation.subsidy.toLocaleString()}</span>
                </div>
              ) : (
                <div className="flex justify-between items-center text-blue-700 text-xs sm:text-sm">
                  <span>Accelerated Depreciation • 40% टैक्स छूट:</span>
                  <span className="font-bold">40% Tax Write-Off</span>
                </div>
              )}

              <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                <div>
                  <span className="text-slate-900 font-bold text-sm block">
                    Net Effective Investment • आपकी शुद्ध लागत:
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold block">
                    Subsidy directly credited in bank via DBT • सीधे बैंक खाते में सब्सिडी
                  </span>
                </div>
                <span className="text-3xl font-black text-emerald-600">
                  ₹{calculation.netCost.toLocaleString()}*
                </span>
              </div>
            </div>

            {/* Environmental & Lifetime Benefit */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-200">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-700 shrink-0" />
                <div>
                  <span className="text-slate-600 block text-[10px]">25-Year Net Profit • कुल लाभ:</span>
                  <span className="font-black text-slate-900">₹{(calculation.lifetimeSavings / 100000).toFixed(1)} Lakhs • लाख</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-700 shrink-0" />
                <div>
                  <span className="text-slate-600 block text-[10px]">CO2 Emissions Cut • प्रदूषण कमी:</span>
                  <span className="font-black text-slate-900">{calculation.co2Reduction} Tons • टन</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleApplyEstimate}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-600/20 transition flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Book Survey for {calculation.recommendedKw} kW • सर्वे बुक करें</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={shareOnWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer text-sm shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Quote • कोटेशन</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-500 text-center leading-relaxed">
              *Estimated calculations based on MNRE/UPNEDA guidelines. Actual cost may vary slightly based on roof structure height & cable length.
              <span className="block font-hindi text-[10px] text-slate-400 mt-0.5">
                *गणना यूपीनेडा दिशानिर्देशों पर आधारित है। वास्तविक लागत छत की ऊंचाई व केबल दूरी पर निर्भर करती है।
              </span>
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Calculator;
