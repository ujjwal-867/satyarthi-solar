import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  Tv, 
  Wind, 
  Droplets, 
  Flame, 
  Shirt, 
  BadgeCheck, 
  Zap, 
  MessageCircle, 
  Check, 
  Snowflake, 
  PhoneCall
} from "lucide-react";
import PortalNavigationHub from "../components/PortalNavigationHub";
import Footer from "../components/Footer";
import {
  ExpressiveKineticText
} from "../components/MotionEffects";

export default function ElectronicsPage({ onNavigateHome, onNavigate, onOpenAdmin, onOpenCalculator }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { id: "All", en: "All Products", hi: "सभी" },
    { id: "Air Conditioners (AC)", en: "Inverter ACs", hi: "एसी" },
    { id: "Refrigerators (Fridge)", en: "Refrigerators", hi: "फ्रिज" },
    { id: "Air Coolers", en: "Desert Coolers", hi: "कूलर" },
    { id: "Washing Machines", en: "Washing Machines", hi: "वॉशिंग मशीन" },
    { id: "RO Water Purifiers", en: "RO Purifiers", hi: "आरओ" },
    { id: "Geysers & Water Heaters", en: "Geysers", hi: "गीजर" },
    { id: "Smart LED TVs", en: "Smart TVs", hi: "स्मार्ट टीवी" },
    { id: "Fans & Kitchen Appliances", en: "Fans & Kitchen", hi: "पंखे व किचन" }
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
    const text = `Hello Er. Satyaprakash (Satyarthi Electronics Showroom), I am interested in purchasing Home Electronics:\n` +
      `• Category: ${item.category}\n` +
      `• Model: ${item.name}\n` +
      `• Price Range: ${item.priceRange}\n` +
      `Please share models in stock, best Navratri/Diwali festive gift & discount, and delivery in Gorakhpur.`;

    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="flex-1 bg-[#FAF8F4] text-[#0D1F17] font-sans selection:bg-[#F5C441] selection:text-[#0D1F17] flex flex-col justify-between">
      <div>
        {/* Left-Aligned Split Hero Section */}
        <section className="py-10 sm:py-12 bg-[#083D2A] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#F5C441] flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-[#F5C441]" />
                <span>Official Electronics Showroom • मोतीराम अड्डा गोरखपुर</span>
              </p>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <ExpressiveKineticText
                  text="Home Appliances & Smart Living"
                  highlightWords={["Smart", "Living"]}
                  highlightClass="text-[#F5C441]"
                />
              </h1>

              <h2 className="text-base sm:text-xl font-bold text-[#F5C441] font-hindi">
                सोलर अनुकूलित 5-स्टार इलेक्ट्रॉनिक उपकरण • शून्य बिजली बिल
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Run your 5-Star Inverter AC, Refrigerator, Washing Machine, and Heavy-Duty Coolers on 100% solar power. Genuine authorized brands with manufacturer warranties.
              </p>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-xl px-5 py-3.5 shrink-0">
              <span className="text-[#F5C441] font-bold text-[11px] uppercase tracking-wider block">
                Our Core Principle • हमारा संकल्प
              </span>
              <p className="text-lg font-bold text-white font-hindi mt-0.5">
                &ldquo;हम सस्ता नहीं, क्वालिटी लगाते हैं&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Product Catalog Section */}
        <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          
          {/* Category Filter Pills */}
          <div className="flex justify-start items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.id] || BadgeCheck;
              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-[#083D2A] text-white shadow-md shadow-[#083D2A]/15"
                      : "bg-white text-slate-700 border border-[#E5E0D8] hover:bg-[#FAF8F4] hover:border-[#D4CEC2]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.en}</span>
                  <span className="text-[10px] opacity-80 font-hindi">• {cat.hi}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Appliances 3D Bento Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {filteredAppliances.map((app, idx) => {
              const Icon = categoryIcons[app.category] || BadgeCheck;
              return (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
                  className="group relative bg-white rounded-2xl p-6 border border-[#E5E0D8] desktop-gallery-card-hover flex flex-col justify-between overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-11 h-11 rounded-xl bg-[#FAF8F4] text-[#083D2A] group-hover:bg-[#083D2A] group-hover:text-[#F5C441] transition-colors flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold bg-[#FAF8F4] text-[#083D2A] px-2.5 py-0.5 rounded-md border border-[#E5E0D8]">
                        In Stock
                      </span>
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {app.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#0D1F17] group-hover:text-[#083D2A] transition-colors mt-1 leading-snug">
                      {app.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#083D2A] font-hindi mt-0.5">
                      {app.hindiName}
                    </p>

                    <div className="mt-3 p-2.5 bg-[#FAF8F4] rounded-xl border border-slate-100 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Price Range:</span>
                        <strong className="text-[#0D1F17]">{app.priceRange}</strong>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Brands:</span>
                        <strong className="text-[#083D2A]">{app.popularBrands}</strong>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Solar Power:</span>
                        <strong className="text-[#9A6E04]">{app.solarCompatibility}</strong>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1">
                      {app.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-[#4B5550]">
                          <Check className="w-3.5 h-3.5 text-[#083D2A] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppOrder(app)}
                      className="flex-1 bg-[#F5C441] hover:bg-[#F5C441] text-[#0D1F17] font-bold py-2.5 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </button>
                    <a
                      href={`tel:${businessData.phone[0]}`}
                      className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition flex items-center justify-center shrink-0"
                      title="Call Showroom"
                    >
                      <PhoneCall className="w-4 h-4 text-[#083D2A]" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Showroom Visit CTA */}
          <motion.div
            whileHover={{ y: -4, scale: 1.005 }}
            className="mt-8 sm:mt-10 bg-[#083D2A] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 border border-[#0F4D37]"
          >
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[#F5C441] font-bold text-xs uppercase tracking-wider block">
                Showroom Location & Timing • शोरूम का पता
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Visit Our Motiram Adda Showroom in Gorakhpur
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
                {businessData.address}. Open Monday to Saturday: 9:00 AM – 7:30 PM. Complete live display of 5-Star solar-compatible inverter ACs, double-door refrigerators, and coolers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={businessData.googleMapLink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#F5C441] hover:bg-[#eab62e] text-[#0D1F17] font-bold px-6 py-3.5 rounded-xl text-xs text-center transition shadow-md"
              >
                Google Maps ↗
              </a>
              <button
                type="button"
                onClick={onNavigateHome}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-xs text-center transition cursor-pointer"
              >
                Solar Rooftop • मुख्य पृष्ठ
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
