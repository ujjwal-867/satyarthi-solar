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
  MessageCircle, 
  Check, 
  Snowflake, 
  PhoneCall
} from "lucide-react";
import PortalNavigationHub from "../components/PortalNavigationHub";
import ARVRSolarVisualizer from "../components/ARVRSolarVisualizer";
import Footer from "../components/Footer";
import {
  ExpressiveKineticText,
  KineticMarqueeStrip,
  CollaborativeCursorsOverlay,
  InteractiveZapBurstButton,
  LiveActivityStreamBadge
} from "../components/MotionEffects";

export default function ElectronicsPage({ onNavigateHome, onNavigate, onOpenAdmin, onOpenCalculator }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { id: "All", en: "All Products", hi: "सभी उपकरण" },
    { id: "Air Conditioners (AC)", en: "Inverter ACs", hi: "इन्वर्टर एसी (AC)" },
    { id: "Refrigerators (Fridge)", en: "Refrigerators", hi: "फ्रिज (Fridge)" },
    { id: "Air Coolers", en: "Desert Coolers", hi: "कूलर (Cooler)" },
    { id: "Washing Machines", en: "Washing Machines", hi: "वॉशिंग मशीन" },
    { id: "RO Water Purifiers", en: "RO Purifiers", hi: "आरओ वाटर प्यूरीफायर" },
    { id: "Geysers & Water Heaters", en: "Geysers", hi: "गीजर व हीटर" },
    { id: "Smart LED TVs", en: "Smart TVs", hi: "स्मार्ट एलईडी टीवी" },
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
    <div className="flex-1 bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      <div>
        {/* Hero Section of Electronics Page with Expressive Kinetic Typography & Collaborative Cursors */}
        <section className="py-16 bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
          <CollaborativeCursorsOverlay
            cursors={[
              {
                name: "Motiram Adda Showroom",
                badge: "5-Star Solar Appliances",
                color: "bg-emerald-500 text-slate-950",
                pathX: ["5%", "19%", "11%", "5%"],
                pathY: ["18%", "45%", "68%", "18%"],
                duration: 16
              },
              {
                name: "Diwali Utsav Desk",
                badge: "Assured Gift Active 🎁",
                color: "bg-amber-400 text-slate-950",
                pathX: ["84%", "70%", "78%", "84%"],
                pathY: ["22%", "54%", "32%", "22%"],
                duration: 18
              }
            ]}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Official Electronics Showroom • मोतीराम अड्डा गोरखपुर</span>
              </div>
              <LiveActivityStreamBadge dark />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              <ExpressiveKineticText
                text="Home Appliances & Smart Living"
                highlightWords={["Smart", "Living"]}
                highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400"
              />
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-amber-300 font-hindi">
              सोलर अनुकूलित 5-स्टार इलेक्ट्रॉनिक उपकरण • शून्य बिजली बिल
            </h2>

            <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
              Run your 5-Star Inverter AC, Refrigerator, Washing Machine, and Heavy-Duty Coolers on 100% solar power. Genuine authorized brands with manufacturer warranties.
            </p>

            {/* Quality Slogan Ribbon */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="mt-6 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3"
            >
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block">
                ★ Our Core Principle • हमारा संकल्प
              </span>
              <p className="text-xl font-black text-white font-hindi mt-0.5">
                &ldquo;हम सस्ता नहीं, क्वालिटी लगाते हैं&rdquo;
              </p>
            </motion.div>
          </div>
        </section>

        {/* Expressive Kinetic Marquee Ribbon */}
        <KineticMarqueeStrip
          items={[
            "5-STAR SOLAR INVERTER AC",
            "FROST-FREE DOUBLE DOOR FRIDGE",
            "BLDC SOLAR CEILING FANS",
            "SMART 4K LED TV & RO PURIFIER",
            "NAVRATRI & DIWALI ASSURED GIFTS"
          ]}
        />

        {/* Product Catalog Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          
          {/* Category Filter Pills */}
          <div className="flex justify-start sm:justify-center items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Sparkles;
              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.en}</span>
                  <span className="text-[10px] opacity-80 font-hindi">({cat.hi})</span>
                </motion.button>
              );
            })}
          </div>

          {/* Appliances 3D Bento Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8" style={{ perspective: "1100px" }}>
            {filteredAppliances.map((app, idx) => {
              const Icon = categoryIcons[app.category] || Sparkles;
              return (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
                  whileHover={{ y: -8, rotateX: 4, rotateY: -3, scale: 1.02 }}
                  className="group relative bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Animated Diagonal Shimmer Sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-50/80 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.12 }}
                        className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shadow-2xs"
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          In Stock • उपलब्ध
                        </span>
                        <InteractiveZapBurstButton initialCount={64 + idx * 11} label="" />
                      </div>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {app.category}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors mt-1 leading-snug">
                      {app.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 font-hindi mt-0.5">
                      {app.hindiName}
                    </p>

                    <div className="mt-3 p-2.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Price Range:</span>
                        <strong className="text-slate-900">{app.priceRange}</strong>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Brands:</span>
                        <strong className="text-blue-700">{app.popularBrands}</strong>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Solar Power:</span>
                        <strong className="text-emerald-700">{app.solarCompatibility}</strong>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1">
                      {app.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppOrder(app)}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </button>
                    <a
                      href={`tel:${businessData.phone[0]}`}
                      className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition flex items-center justify-center shrink-0"
                      title="Call Showroom"
                    >
                      <PhoneCall className="w-4 h-4 text-emerald-600" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Showroom Visit CTA */}
          <motion.div
            whileHover={{ y: -4, scale: 1.005 }}
            className="mt-14 bg-gradient-to-r from-blue-900 via-teal-900 to-emerald-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="space-y-2 text-center md:text-left">
              <span className="text-emerald-300 font-bold text-xs uppercase tracking-wider block">
                📍 Showroom Location & Timing • शोरूम का पता
              </span>
              <h3 className="text-2xl font-black text-white">
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
                className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black px-6 py-3.5 rounded-xl text-xs text-center transition shadow-md"
              >
                Open Google Maps Location ↗
              </a>
              <button
                type="button"
                onClick={onNavigateHome}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-xs text-center transition cursor-pointer"
              >
                Back to Solar Rooftop
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
