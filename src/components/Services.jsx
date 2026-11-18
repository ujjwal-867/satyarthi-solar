import { motion } from "framer-motion";
import { Home, Building2, Wheat, Check, ArrowRight } from "lucide-react";

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
      title: "Residential Rooftop Solar",
      titleHi: "आवासीय रूफटॉप सोलर",
      tagline: "PM Surya Ghar · Up to ₹1,08,000 Direct Subsidy",
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
      title: "Solar Aata Chakki & Heavy Drives",
      titleHi: "सोलर आटा चक्की ड्राइव्स",
      tagline: "Zero Diesel · Run 10 HP to 25 HP on Sun",
      bullets: [
        "Save ₹25,000 – ₹45,000/mo on Diesel",
        "High-Torque Solar VFD (No Batteries Needed)",
        "50+ Running Plants Across Purvanchal"
      ],
      ideal: "Flour Mills, Oil Expellers & Tube Wells"
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white text-[#0D1F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[#E5E0D8]">
          <div className="space-y-2 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#083D2A]">
              Why Satyarthi Solar
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D1F17] leading-tight">
              Core Solar EPC Solutions
            </h2>
            <div className="w-10 h-[3px] bg-[#F5C441]" />
          </div>
          <p className="text-sm text-[#4B5550] max-w-sm md:text-right font-hindi">
            घरेलू, कमर्शियल एवं सोलर आटा चक्की — उच्च गुणवत्ता व 25 वर्ष वारंटी
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-[#FAF8F4] border border-[#E5E0D8] hover:border-[#083D2A] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#083D2A] text-[#F5C441] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-mono font-semibold text-[#8A928D]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0D1F17] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#083D2A] font-hindi mt-1">
                    {service.titleHi}
                  </p>
                  <p className="text-xs font-semibold text-[#6F5306] bg-[#FDF3D0] border border-[#EFE0A8] rounded-md px-3 py-1.5 mt-4 inline-block">
                    {service.tagline}
                  </p>

                  <ul className="mt-5 pt-5 border-t border-[#E5E0D8] space-y-2.5 text-sm text-[#4B5550]">
                    {service.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#083D2A] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-5 border-t border-[#E5E0D8] flex items-center justify-between gap-3">
                  <span className="text-xs text-[#5C6660] truncate">
                    {service.ideal}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleBookService(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#083D2A] hover:bg-[#062E20] text-white text-xs font-semibold transition-colors shrink-0 cursor-pointer"
                  >
                    <span>Book Survey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
