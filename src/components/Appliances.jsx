import { useState, useMemo } from "react";
import { motion } from "framer-motion";
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
  PhoneCall 
} from "lucide-react";

function Appliances() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { id: "All", en: "All", hi: "सभी उत्पाद" },
    { id: "Air Conditioners (AC)", en: "Air Conditioners (AC)", hi: "इन्वर्टर एसी (AC)" },
    { id: "Refrigerators (Fridge)", en: "Refrigerators (Fridge)", hi: "फ्रिज (Fridge)" },
    { id: "Air Coolers", en: "Air Coolers", hi: "कूलर (Cooler)" },
    { id: "Washing Machines", en: "Washing Machines", hi: "वॉशिंग मशीन" },
    { id: "RO Water Purifiers", en: "RO Water Purifiers", hi: "आरओ वाटर प्यूरीफायर" },
    { id: "Geysers & Water Heaters", en: "Geysers & Water Heaters", hi: "गीजर व वाटर हीटर" },
    { id: "Smart LED TVs", en: "Smart LED TVs", hi: "स्मार्ट एलईडी टीवी" },
    { id: "Fans & Kitchen Appliances", en: "Fans & Kitchen", hi: "पंखे व किचन अप्लायंसेज" }
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
    const text = `Hello Er. Satyaprakash (Satyarthi Solar Solution), I am interested in purchasing Home Appliances:\n` +
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
    <section id="appliances" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Solar & Electronics Division • मोतीराम अड्डा गोरखपुर</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Home Appliances & <span className="text-blue-600">Smart Living</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              सोलर अनुकूलित 5-स्टार इलेक्ट्रॉनिक उपकरण
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Run your 5-Star Inverter AC, Refrigerator, Washing Machine, and Coolers on <strong>100% Free Solar Power</strong>. Top brands with official warranties available at our showroom.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              सोलर पावर से चलाएं इनवर्टर एसी, फ्रिज और वाशिंग मशीन। शून्य बिजली बिल और सम्पूर्ण वारंटी।
            </span>
          </p>
        </motion.div>

        {/* Brand Slogan Ribbon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 max-w-4xl mx-auto bg-gradient-to-r from-blue-900 via-slate-900 to-emerald-950 text-white p-6 sm:p-7 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block">
              ★ Our Core Quality Principle • हमारा संकल्प
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-hindi">
              &ldquo;हम सस्ता नहीं, क्वालिटी लगाते हैं&rdquo;
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Solar + Electronics = Better Tomorrow. Every appliance is engineered for low power consumption and seamless solar inverter compatibility.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${businessData.phone[0]}`}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs text-center transition shadow-md flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>24×7 Call: {businessData.phone[0]}</span>
            </a>
            <a
              href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                "Hello Er. Satyaprakash, please share the appliances catalog & price list."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-5 py-2.5 rounded-xl text-xs text-center transition flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-start sm:justify-center items-center gap-2 mt-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.en}</span>
                <span className="text-[10px] opacity-80 font-hindi">({cat.hi})</span>
              </button>
            );
          })}
        </div>

        {/* Appliances Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {filteredAppliances.map((app, idx) => {
            const Icon = categoryIcons[app.category] || Sparkles;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-3xl border border-slate-200 p-6 hover:border-blue-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      ✓ In Stock • उपलब्ध
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {app.category}
                  </span>
                  <h3 className="text-base font-black text-slate-900 mt-1 leading-snug">
                    {app.name}
                  </h3>

                  {/* Price Range */}
                  <div className="mt-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">
                      Price Range • सर्वोत्तम कीमत:
                    </span>
                    <strong className="text-lg font-black text-slate-900 block mt-0.5">
                      {app.priceRange}
                    </strong>
                  </div>

                  {/* Solar Compatibility Box */}
                  <div className="mt-3 p-3 bg-emerald-50/80 rounded-2xl border border-emerald-200/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-xs">
                      <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{app.solarCompatibility}</span>
                    </div>
                    <p className="text-[11px] text-emerald-800">
                      Power Load • विद्युत भार: <strong>{app.powerConsumption}</strong>
                    </p>
                  </div>

                  {/* Brands List */}
                  <div className="mt-3">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Available Brands • प्रमुख ब्रांड्स:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {app.brands.map((b, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
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
                    <span>WhatsApp Order • व्हाट्सएप ऑर्डर</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleBookCombo(app)}
                    className="w-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Bundle with Solar • सोलर के साथ बंडल</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Combo Offer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-700 via-teal-700 to-emerald-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl"
        >
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="bg-white/20 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                Combo Mega Savings Deal • विशेष सोलर + एसी कॉम्बो ऑफर
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Install 3kW / 5kW Solar Rooftop & Get Special Discounts on Inverter ACs & Fridges!
              </h3>
              <p className="text-sm font-semibold text-emerald-200 font-hindi">
                3kW या 5kW सोलर प्लांट लगवाने पर 5-स्टार इनवर्टर एसी व फ्रिज पर पाएं विशेष छूट!
              </p>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                Why pay high electricity bills for heavy summer cooling? Pair your PM Surya Ghar ₹1,08,000 subsidy rooftop plant with 5-Star Dual Inverter ACs. Zero electric bills, 100% comfort.
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
                Claim Solar + AC Combo Quote • कॉम्बो ऑफर पाएं
              </button>
              <a
                href={`tel:${businessData.phone[0]}`}
                className="w-full text-center bg-white/20 hover:bg-white/30 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition border border-white/30"
              >
                Call 24×7: +91 {businessData.phone[0]} / {businessData.phone[1]}
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Appliances;
