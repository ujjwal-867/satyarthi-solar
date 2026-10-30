import { motion } from "framer-motion";
import { 
  Home, 
  Building2, 
  Wheat, 
  CheckCircle2, 
  ArrowRight, 
  Zap 
} from "lucide-react";
import {
  ExpressiveKineticText,
  CollaborativeCursorsOverlay,
  InteractiveZapBurstButton,
  LiveActivityStreamBadge
} from "./MotionEffects";

export default function Services() {
  const handleBookService = (serviceTitle) => {
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      const selectEl = document.querySelector("#service-select");
      if (selectEl) {
        selectEl.value = serviceTitle;
      }
    }
  };

  const coreServices = [
    {
      id: "residential",
      icon: Home,
      number: "01",
      likes: 184,
      title: "Residential Rooftop Solar",
      titleHi: "आवासीय रूफटॉप सोलर",
      tagline: "PM Surya Ghar • Up to ₹1,08,000 Direct Subsidy",
      bullets: [
        "1 kW to 10 kW On-Grid Rooftop Systems",
        "25-Year Warranty + UPPCL Net Metering",
        "6% Bank Loan via PM Surya Ghar Portal"
      ],
      ideal: "Homes, Villas & Apartments"
    },
    {
      id: "commercial",
      icon: Building2,
      number: "02",
      likes: 142,
      title: "Commercial & Institutional Solar",
      titleHi: "कमर्शियल सोलर प्लांट्स",
      tagline: "Cut Commercial Electricity Bills by up to 80%",
      bullets: [
        "10 kW to 100 kW+ Custom Heavy Plants",
        "40% Accelerated Tax Depreciation",
        "3 to 3.5 Years Fast Payback Period"
      ],
      ideal: "Schools, Hospitals, Petrol Pumps & Showrooms"
    },
    {
      id: "aata-chakki",
      icon: Wheat,
      number: "03",
      likes: 169,
      title: "Solar Aata Chakki & Heavy Drives",
      titleHi: "सोलर आटा चक्की ड्राइव्स",
      tagline: "Zero Diesel • Run 10 HP to 25 HP on Sun",
      bullets: [
        "Save ₹25,000 – ₹45,000/mo on Diesel",
        "High-Torque Solar VFD (No Batteries Needed)",
        "50+ Running Plants Across Purvanchal"
      ],
      ideal: "Flour Mills, Oil Expellers & Tube Wells"
    }
  ];

  return (
    <section id="services" className="pt-6 pb-6 sm:pt-8 sm:pb-8 bg-slate-50/60 text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      {/* Real-Time Collaborative Engineering Cursors */}
      <CollaborativeCursorsOverlay
        cursors={[
          {
            name: "Er. Satyaprakash",
            badge: "Turnkey EPC Design",
            color: "bg-blue-600 text-white",
            pathX: ["5%", "19%", "12%", "5%"],
            pathY: ["18%", "45%", "72%", "18%"],
            duration: 16
          },
          {
            name: "Agro VFD Team",
            badge: "15HP Chakki Live",
            color: "bg-amber-400 text-slate-950",
            pathX: ["85%", "72%", "80%", "85%"],
            pathY: ["24%", "58%", "32%", "24%"],
            duration: 19
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Expressive Kinetic Typography & Live Collaborative Ticker */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-900 border border-blue-200 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Core Solar Pillars • प्रमुख सेवाएं</span>
            </div>
            <LiveActivityStreamBadge />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            <ExpressiveKineticText
              text="Solar Service & Engineering in Gorakhpur"
              highlightWords={["Solar", "Service", "Engineering"]}
              highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-amber-500"
            />
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Turnkey EPC engineering, PM Surya Ghar subsidy processing, and doorstep installation across Purvanchal.
          </p>
        </div>

        {/* 3 Core 3D Bento Animated Cards with Interactive ⚡ Bursts */}
        <div className="grid md:grid-cols-3 gap-6 mt-6 sm:mt-8" style={{ perspective: "1100px" }}>
          {coreServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25 }}
                className="relative bg-white rounded-3xl p-6 border border-slate-200 desktop-gallery-card-hover flex flex-col justify-between group overflow-hidden"
              >
                {/* Desktop-Only Gallery Shine Sweep */}
                <div className="desktop-shine-sweep" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <motion.div 
                      whileHover={{ rotate: 12, scale: 1.14 }}
                      className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center group-hover:bg-[#0a1e3b] group-hover:text-amber-400 transition-colors shadow-xs"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>

                    <div className="flex items-center gap-2">
                      <InteractiveZapBurstButton initialCount={service.likes} label="Active" />
                      <span className="text-xl font-black text-slate-300 group-hover:text-amber-500 transition-colors font-mono">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-blue-800 font-hindi mt-0.5">
                    {service.titleHi}
                  </p>

                  <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Concise Bullet Points */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    {service.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleBookService(service.title)}
                    className="w-full py-2.5 bg-slate-100 group-hover:bg-[#0a1e3b] group-hover:text-white text-slate-800 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Inquire Now • परामर्श लें</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}