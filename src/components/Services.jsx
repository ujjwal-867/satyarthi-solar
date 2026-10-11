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
      titleHi: "आवासीय रूफटॉप सोलर प्लांट",
      tagline: "PM Surya Ghar • Get up to ₹1,08,000 Direct Bank Subsidy",
      taglineHi: "पीएम सूर्य घर योजना — 300 यूनिट तक हर महीने मुफ्त बिजली",
      bullets: [
        "1 kW से 10 kW पूर्ण ऑन-ग्रिड रूफटॉप इंस्टॉलेशन",
        "25 वर्ष परफॉर्मेंस वारंटी + UPPCL नेट मीटरिंग",
        "6% से 7% ब्याज दर पर आसान सरकारी बैंक ऋण (Loan)"
      ],
      ideal: "Homes, Villas & Residential Apartments"
    },
    {
      id: "commercial",
      icon: Building2,
      number: "02",
      likes: 142,
      title: "Commercial & Institutional Solar",
      titleHi: "कमर्शियल सोलर पावर प्लांट्स",
      tagline: "Cut Commercial Electricity Bills by up to 80%",
      taglineHi: "दुकान, स्कूल, अस्पताल व शोरूम के लिए भारी बचत",
      bullets: [
        "40% त्वरित टैक्स डिप्रिसिएशन (Accelerated Depreciation)",
        "10 kW से 100 kW+ कस्टमाइज्ड हेवी सोलर प्लांट्स",
        "मात्र 3 से 3.5 वर्षों में निवेश की पूर्ण वापसी (Payback)"
      ],
      ideal: "Schools, Hospitals, Petrol Pumps & Showrooms"
    },
    {
      id: "aata-chakki",
      icon: Wheat,
      number: "03",
      likes: 169,
      title: "Solar Aata Chakki & Heavy Drives",
      titleHi: "सोलर आटा चक्की एवं कृषि ड्राइव्स",
      tagline: "Zero Diesel • Run 10 HP to 25 HP Motor Directly on Sun",
      taglineHi: "महंगे डीजल से पाएं मुक्ति — हर महीने भारी बचत",
      bullets: [
        "₹25,000 से ₹45,000 प्रति माह डीजल खर्च की सीधी बचत",
        "हाई-टॉर्क सोलर VFD ड्राइव (बिना महंगी बैटरी के)",
        "कुशीनगर, देवरिया व गोरखपुर में 50+ सफल प्लांट संचालित"
      ],
      ideal: "Flour Mills, Oil Expellers & Tube Well Pumps"
    }
  ];

  return (
    <section id="services" className="py-16 bg-slate-50/60 text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      {/* Real-Time Collaborative Engineering Cursors */}
      <CollaborativeCursorsOverlay
        cursors={[
          {
            name: "Er. Satyaprakash",
            badge: "Turnkey EPC Design",
            color: "bg-emerald-500 text-slate-950",
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
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Core Solar Pillars • प्रमुख सेवाएं</span>
            </div>
            <LiveActivityStreamBadge />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            <ExpressiveKineticText
              text="Specialized Solar Engineering"
              highlightWords={["Solar", "Engineering"]}
            />
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
            Direct turnkey EPC engineering for homes, commercial establishments, and diesel-free flour mills across Purvanchal.
          </p>
        </div>

        {/* 3 Core 3D Bento Animated Cards with Interactive ⚡ Bursts */}
        <div className="grid md:grid-cols-3 gap-6 mt-10" style={{ perspective: "1100px" }}>
          {coreServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -3, scale: 1.02 }}
                className="relative bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-600/15 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Animated Diagonal Shimmer Sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-emerald-50/90 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <motion.div 
                      whileHover={{ rotate: 12, scale: 1.14 }}
                      className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>

                    <div className="flex items-center gap-2">
                      <InteractiveZapBurstButton initialCount={service.likes} label="Active" />
                      <span className="text-xl font-black text-slate-300 group-hover:text-emerald-500 transition-colors font-mono">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-emerald-700 font-hindi mt-0.5">
                    {service.titleHi}
                  </p>

                  <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Concise Bullet Points */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    {service.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleBookService(service.title)}
                    className="w-full py-2.5 bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white text-slate-800 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
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