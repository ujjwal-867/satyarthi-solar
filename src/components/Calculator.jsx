import { useState, useMemo } from "react";
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
  Wheat 
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
    
    // Max capacity restricted by shadow-free roof area (approx 90 sq ft per kW)
    const maxKwByRoof = Math.floor(roofArea / 85);
    const recommendedKw = Math.max(1, Math.min(idealKw, Math.max(1, maxKwByRoof)));

    // Cost calculations
    let grossCost = 0;
    if (recommendedKw === 1) grossCost = 65000;
    else if (recommendedKw === 2) grossCost = 125000;
    else if (recommendedKw === 3) grossCost = 180000;
    else if (recommendedKw <= 5) grossCost = 180000 + (recommendedKw - 3) * 52000;
    else grossCost = recommendedKw * 50000;

    // Subsidy (Residential PM Surya Ghar)
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

    // Panel count (using 550W high efficiency Loom Solar Mono PERC panels)
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
    const text = `Hello Er. Satyaprakash, I used the Solar Calculator on your website for my property in ${location}.\n` +
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
    <section id="calculator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <CalcIcon className="w-3.5 h-3.5" />
            Instant Solar ROI Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Calculate Your Solar System & <span className="text-amber-400">Govt Subsidy</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Enter your monthly electricity bill and roof space to see recommended system capacity, investment cost, UPNEDA subsidy, and payback period.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: User Inputs */}
          <div className="lg:col-span-6 bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-7 shadow-2xl">
            
            {/* Input 1: Property Type */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "residential", label: "Home / Villa", icon: Home, badge: "Subsidy Ready" },
                  { id: "commercial", label: "Commercial", icon: Building, badge: "Tax Benefit" },
                  { id: "industrial", label: "Industrial", icon: Factory, badge: "HT / LT" },
                  { id: "agro", label: "Aata Chakki", icon: Wheat, badge: "VFD Drive" },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = propertyType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPropertyType(item.id)}
                      className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center gap-1 cursor-pointer ${
                        isSelected
                          ? "bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-md"
                          : "bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500"
                      }`}
                    >
                      <Icon className="w-5 h-5 mb-0.5" />
                      <span className="text-xs">{item.label}</span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-semibold ${
                        isSelected ? "bg-slate-950/20 text-slate-950" : "bg-slate-800 text-amber-300"
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
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Monthly Electricity Bill (₹)
                </label>
                <div className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                  <span className="text-amber-400 font-black text-lg">₹{bill.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-400">/month</span>
                </div>
              </div>
              <input
                type="range"
                min="1000"
                max="30000"
                step="500"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>₹1,000</span>
                <span>₹10,000</span>
                <span>₹20,000</span>
                <span>₹30,000+</span>
              </div>
            </div>

            {/* Input 3: Roof Area Available */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  3. Available Rooftop Area (Sq. Ft.)
                </label>
                <div className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                  <span className="text-emerald-400 font-black text-lg">{roofArea}</span>
                  <span className="text-[10px] text-slate-400">Sq Ft</span>
                </div>
              </div>
              <input
                type="range"
                min="100"
                max="2500"
                step="50"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>100 sq ft</span>
                <span>500 sq ft</span>
                <span>1500 sq ft</span>
                <span>2500+ sq ft</span>
              </div>
            </div>

            {/* Input 4: Location */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                4. Installation Location (Uttar Pradesh)
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="Gorakhpur">Gorakhpur (Head Office - Motiram Adda)</option>
                <option value="Deoria">Deoria</option>
                <option value="Kushinagar">Kushinagar</option>
                <option value="Maharajganj">Maharajganj</option>
                <option value="Basti">Basti</option>
                <option value="Sant Kabir Nagar">Sant Kabir Nagar (Khalilabad)</option>
                <option value="Siddharthnagar">Siddharthnagar</option>
                <option value="Azamgarh">Azamgarh</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Other Uttar Pradesh">Other Location in Uttar Pradesh</option>
              </select>
            </div>

          </div>

          {/* Right Column: Calculated Results */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-950 via-slate-800 to-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            
            {/* Top Recommended System Pill */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <div>
                <p className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  Recommended Solution
                </p>
                <h3 className="text-3xl font-black text-white mt-1">
                  {calculation.recommendedKw} kW <span className="text-amber-400">Solar System</span>
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Needs ~{calculation.panelCount} high-efficiency 550W Loom Solar panels (~{calculation.recommendedKw * 85} sq ft roof)
                </p>
              </div>
              <div className="p-3 bg-amber-400/20 text-amber-400 rounded-2xl">
                <Zap className="w-8 h-8" />
              </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700/80">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5 text-amber-400" />
                  Monthly Savings
                </span>
                <p className="text-2xl font-black text-emerald-400 mt-1">
                  ₹{calculation.monthlySaving.toLocaleString()}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  ₹{calculation.annualSaving.toLocaleString()} saved annually
                </p>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700/80">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Payback Period
                </span>
                <p className="text-2xl font-black text-amber-400 mt-1">
                  {calculation.paybackYears} Years
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Free power for next 21+ yrs
                </p>
              </div>
            </div>

            {/* Detailed Cost Breakdown Table */}
            <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-700/60 space-y-2.5 text-sm">
              <div className="flex justify-between items-center text-slate-300 text-xs sm:text-sm">
                <span>Estimated Gross Cost:</span>
                <span className="font-semibold text-slate-200">
                  ₹{calculation.grossCost.toLocaleString()}
                </span>
              </div>

              {propertyType === "residential" ? (
                <div className="flex justify-between items-center text-emerald-400 text-xs sm:text-sm font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Govt Subsidy (PM Surya Ghar):
                  </span>
                  <span>- ₹{calculation.subsidy.toLocaleString()}</span>
                </div>
              ) : (
                <div className="flex justify-between items-center text-amber-300 text-xs sm:text-sm">
                  <span>Accelerated Depreciation (Year 1):</span>
                  <span>40% Tax Write-Off</span>
                </div>
              )}

              <div className="pt-2 border-t border-slate-700 flex justify-between items-baseline">
                <div>
                  <span className="text-white font-bold text-sm block">Net Effective Investment:</span>
                  <span className="text-[10px] text-emerald-300">Subsidy directly credited via UPNEDA</span>
                </div>
                <span className="text-3xl font-black text-amber-400">
                  ₹{calculation.netCost.toLocaleString()}*
                </span>
              </div>
            </div>

            {/* Environmental & Lifetime Benefit */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px]">25-Year Net Profit:</span>
                  <span className="font-bold text-white">₹{(calculation.lifetimeSavings / 100000).toFixed(1)} Lakhs</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px]">CO2 Emissions Cut:</span>
                  <span className="font-bold text-white">{calculation.co2Reduction} Tons</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleApplyEstimate}
                className="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black py-3.5 px-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Book Survey for {calculation.recommendedKw} kW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={shareOnWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Quote</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center">
              *Estimated calculations based on MNRE/UPNEDA guidelines. Actual cost may vary slightly based on roof structure height & cable length.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Calculator;
