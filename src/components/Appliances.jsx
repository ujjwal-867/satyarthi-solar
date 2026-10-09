import { useState, useMemo } from "react";
import { businessData } from "../data/businessData";
import { 
  Tv, 
  Wind, 
  Droplets, 
  Flame, 
  Shirt, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight, 
  Check, 
  Snowflake, 
  CheckCircle2, 
  Building2 
} from "lucide-react";

function Appliances() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Air Conditioners (AC)",
    "Refrigerators (Fridge)",
    "Air Coolers",
    "Washing Machines",
    "RO Water Purifiers",
    "Geysers & Water Heaters",
    "Smart LED TVs",
    "Fans & Kitchen Appliances"
  ];

  const categoryIcons = {
    "Air Conditioners (AC)": Snowflake,
    "Refrigerators (Fridge)": Wind,
    "Air Coolers": Wind,
    "Washing Machines": Shirt,
    "RO Water Purifiers": Droplets,
    "Geysers & Water Heaters": Flame,
    "Smart LED TVs": Tv,
    "Fans & Kitchen Appliances": Zap,
  };

  const filteredAppliances = useMemo(() => {
    if (selectedCategory === "All") return businessData.appliances;
    return businessData.appliances.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  const handleWhatsAppOrder = (item) => {
    const text = `Hello Er. Satyaprakash, I am interested in purchasing Home Appliances:\n` +
      `• Category: ${item.category}\n` +
      `• Item: ${item.name}\n` +
      `• Price Range: ${item.priceRange}\n` +
      `Please share available models, discounts, and delivery details for Gorakhpur/UP.`;

    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleBookCombo = (item) => {
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      const selectEl = document.querySelector("#service-select");
      if (selectEl) {
        selectEl.value = `Solar + Appliance Combo (${item.name})`;
      }
      const msgEl = document.querySelector("#contact-message");
      if (msgEl) {
        msgEl.value = `I want to bundle ${item.name} with my Rooftop Solar Installation. Please advise on recommended solar capacity and combo pricing.`;
      }
    }
  };

  return (
    <section id="appliances" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 border border-blue-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Solar & Electronics Division • Gorakhpur
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Home Appliances & <span className="text-blue-600">Smart Living</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Run your 5-Star Inverter AC, Refrigerator, Washing Machine, and Coolers on <strong>100% Free Solar Power</strong>. Top brands with official manufacturer warranties available at our Motiram Adda showroom.
          </p>
        </div>

        {/* Brand Slogan Ribbon */}
        <div className="mt-10 max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
              ★ Our Business Principle
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              &ldquo;हम सस्ता नहीं, क्वालिटी लगाते हैं&rdquo;
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Solar + Electronics = Better Tomorrow. Every appliance is carefully selected for ultra-low power consumption and seamless compatibility with on-grid and hybrid solar inverters.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${businessData.officeNumber}`}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs text-center transition shadow-md"
            >
              Office: {businessData.officeNumber}
            </a>
            <a
              href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                "Hello Er. Satyaprakash, please share the appliances catalog & price list."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs text-center transition flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-start sm:justify-center items-center gap-2 mt-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat] || Sparkles;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Appliances Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {filteredAppliances.map((app) => {
            const Icon = categoryIcons[app.category] || Sparkles;
            return (
              <div
                key={app.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 hover:border-blue-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      ✓ In Stock
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {app.category}
                  </span>
                  <h3 className="text-base font-black text-slate-900 mt-1 leading-snug">
                    {app.name}
                  </h3>

                  {/* Price Range */}
                  <div className="mt-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
                      Price Range (Best Deal):
                    </span>
                    <strong className="text-lg font-black text-slate-900 block mt-0.5">
                      {app.priceRange}
                    </strong>
                  </div>

                  {/* Solar Compatibility Box */}
                  <div className="mt-3 p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-xs">
                      <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{app.solarCompatibility}</span>
                    </div>
                    <p className="text-[11px] text-emerald-800">
                      Power Load: <strong>{app.powerConsumption}</strong>
                    </p>
                  </div>

                  {/* Brands List */}
                  <div className="mt-3">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Available Brands:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {app.brands.map((b, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                    {app.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                        <Check className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 mt-3 italic leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppOrder(app)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleBookCombo(app)}
                    className="w-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Bundle with Solar Rooftop</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Combo Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-3xl p-8 sm:p-10 text-slate-950 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="bg-slate-950 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                Combo Mega Savings Deal
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                Install 3kW / 5kW Solar Rooftop & Get Special Discounts on Inverter ACs & Fridges!
              </h3>
              <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
                Why pay high electricity bills for heavy summer cooling? Pair your PM Surya Ghar ₹1,08,000 subsidy rooftop plant with 5-Star Dual Inverter ACs and refrigerators. Zero electric bills, 100% comfort.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  const contactEl = document.querySelector("#contact");
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: "smooth" });
                    const msgEl = document.querySelector("#contact-message");
                    if (msgEl) msgEl.value = "I am interested in the Solar + 1.5 Ton AC combo package. Please provide quote.";
                  }
                }}
                className="w-full bg-slate-950 hover:bg-slate-900 text-white font-black py-3.5 px-6 rounded-xl text-xs text-center transition shadow-lg cursor-pointer"
              >
                Claim Solar + AC Combo Quote
              </button>
              <a
                href={`tel:${businessData.phone[0]}`}
                className="w-full text-center bg-white/70 hover:bg-white text-slate-950 font-bold py-2.5 px-6 rounded-xl text-xs transition"
              >
                Call Er. Satyaprakash: +91 {businessData.phone[0]}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Appliances;
