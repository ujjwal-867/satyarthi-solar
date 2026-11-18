import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const processSteps = [
  {
    num: "01",
    title: "Free Roof Survey & Shadow Audit",
    titleHi: "मुफ्त रूफटॉप सर्वे एवं लोड मूल्यांकन",
    desc: "Our local Gorakhpur engineering team visits your property, checks roof orientation, shadow clearance, and UPPCL sanctioned load to size the right plant for your consumption.",
    image: "/images/projects/engineer-on-solar-roof.jpg",
    alt: "Er. Satya Prakash conducting a rooftop solar site inspection"
  },
  {
    num: "02",
    title: "Choose Tier-1 Panels & Components",
    titleHi: "टियर-1 सोलर पैनल एवं इन्वर्टर चयन",
    desc: "Select from MNRE DCR-approved Mono PERC & TOPCon bifacial modules by Loom Solar, Waaree, Adani, or Tata Power — paired with smart Wi-Fi inverters and 25-year performance warranties.",
    image: "/images/projects/mono-perc-array-closeup.jpg",
    alt: "High-efficiency Mono PERC solar module array"
  },
  {
    num: "03",
    title: "Heavy-Duty Elevated GI Installation",
    titleHi: "मजबूत एलिवेटेड जीआई स्ट्रक्चर इंस्टॉलेशन",
    desc: "We fabricate rust-proof hot-dip galvanized pergola structures rated for 150 km/h winds, keeping your terrace cool, shaded, and 100% usable for family activities below.",
    image: "/images/projects/technicians-mounting-structure.jpg",
    alt: "Satyarthi Solar technicians installing galvanized elevated solar structure"
  },
  {
    num: "04",
    title: "UPPCL Net-Metering & Portal Filing",
    titleHi: "यूपीपीसीएल नेट-मीटरिंग एवं दस्तावेज़ीकरण",
    desc: "Zero government office visits required. As a UPNEDA Empanelled Vendor (GKP2604066741), we handle your PM Surya Ghar national portal registration, DISCOM feasibility, and bi-directional net-meter installation.",
    image: "/images/projects/waaree-inverter-purdilpur.jpg",
    alt: "Grid-tied solar inverter and safety ACDB/DCDB installation"
  },
  {
    num: "05",
    title: "Direct ₹1,08,000 Bank Subsidy Credit",
    titleHi: "सीधे बैंक खाते में ₹1,08,000 तक सरकारी सब्सिडी",
    desc: "Once commissioned and inspected, both Central (up to ₹78,000) and UP State (up to ₹30,000) subsidies are credited directly into your bank account via DBT within 30 days.",
    image: "/images/projects/happy-client-gauribazar.jpg",
    alt: "Satisfied solar homeowner in Eastern Uttar Pradesh"
  }
];

function PortalNavigationHub({ onNavigate, onOpenCalculator }) {
  const portals = [
    {
      code: "01",
      title: "PM Surya Ghar On-Grid",
      titleHi: "सब्सिडी दरें (1 kW – 10 kW)",
      desc: "Complete subsidy rate chart with central + UP state DBT breakdown and 6% bank EMI.",
      action: () => onNavigate && onNavigate("/on-grid")
    },
    {
      code: "02",
      title: "Off-Grid & Solar Aata Chakki",
      titleHi: "बैटरी बैकअप एवं आटा चक्की",
      desc: "24×7 inverter backup packages and zero-diesel 10 HP – 25 HP VFD flour mill drives.",
      action: () => onNavigate && onNavigate("/off-grid")
    },
    {
      code: "03",
      title: "5-Star Solar Appliances",
      titleHi: "मोतीराम अड्डा शोरूम",
      desc: "Solar-compatible 5-Star Inverter ACs, frost-free refrigerators, BLDC fans, and coolers.",
      action: () => onNavigate && onNavigate("/appliances")
    },
    {
      code: "04",
      title: "2,500+ Verified Site Gallery",
      titleHi: "वास्तविक साइट फोटो गैलरी",
      desc: "GPS-tagged rooftop pergolas, commercial arrays, and happy clients across Gorakhpur & UP.",
      action: () => onNavigate && onNavigate("/gallery")
    },
    {
      code: "05",
      title: "UPNEDA & Brand Certificates",
      titleHi: "आधिकारिक प्रमाणपत्र व अवार्ड्स",
      desc: "Inspect our UPNEDA vendor empanelment, GSTIN, MSME Udyam, and Saur Samman Award.",
      action: () => onNavigate && onNavigate("/certificates")
    },
    {
      code: "06",
      title: "Solar Savings Calculator",
      titleHi: "सब्सिडी व बचत कैलकुलेटर",
      desc: "Enter your monthly electricity bill to see exact kW size, net cost, and payback period.",
      action: () => onOpenCalculator && onOpenCalculator()
    }
  ];

  return (
    <>
      {/* PART A: SolarHub-Inspired Alternating 5-Step Editorial Process */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-16 sm:mb-20">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#083D2A]">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D1F17] leading-tight">
              From roof survey to bank subsidy in 5 clear steps
            </h2>
            <div className="w-10 h-[3px] bg-[#F5C441]" />
            <p className="text-sm text-[#4B5550] font-hindi">
              सर्वे से लेकर नेट-मीटरिंग और सरकारी सब्सिडी तक की पूरी पारदर्शी प्रक्रिया
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {processSteps.map((step, idx) => {
              const reversed = idx % 2 === 1;
              return (
                <div key={step.num} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                  >
                    {/* Editorial Copy */}
                    <div
                      className={`lg:col-span-6 relative space-y-4 ${
                        reversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="block text-6xl sm:text-7xl font-bold text-[#EFECE4] leading-none select-none -mb-6"
                      >
                        {step.num}
                      </span>
                      <div className="relative z-10 space-y-3">
                        <h3 className="text-2xl sm:text-[1.7rem] font-bold tracking-tight text-[#0D1F17] leading-snug">
                          {step.title}
                        </h3>
                        <div className="w-8 h-[2.5px] bg-[#F5C441]" />
                        <p className="text-xs sm:text-sm font-medium text-[#083D2A] font-hindi">
                          {step.titleHi}
                        </p>
                        <p className="text-[15px] text-[#4B5550] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Authentic Project Photo */}
                    <div
                      className={`lg:col-span-6 ${
                        reversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="bg-[#FAF8F4] border border-[#E5E0D8] rounded-xl p-2.5">
                        <img
                          src={step.image}
                          alt={step.alt}
                          loading="lazy"
                          className="w-full aspect-[4/3] object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Delicate Dotted Editorial Connector (Desktop) */}
                  {idx < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex justify-center pt-12"
                    >
                      <div className="h-12 border-l-2 border-dotted border-[#D8D2C6]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PART B: Hairline Portal Directory on Warm Alabaster */}
      <section className="py-16 sm:py-24 bg-[#FAF8F4] border-y border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[#E5E0D8]">
            <div className="space-y-2 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#083D2A]">
                Explore Portals
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0D1F17]">
                Everything you need to go solar
              </h2>
              <div className="w-10 h-[3px] bg-[#F5C441]" />
            </div>
            <p className="text-sm text-[#4B5550] max-w-sm md:text-right">
              Direct rate cards, verified installations, UPNEDA paperwork, and our Motiram Adda showroom catalog.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portals.map((p) => (
              <button
                key={p.code}
                type="button"
                onClick={p.action}
                className="group text-left bg-white border border-[#E5E0D8] hover:border-[#083D2A] rounded-xl p-6 transition-colors flex flex-col justify-between gap-5 cursor-pointer"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-[#8A928D]">
                      {p.code}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8A928D] group-hover:text-[#083D2A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1F17] group-hover:text-[#083D2A] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-medium text-[#083D2A] font-hindi">
                    {p.titleHi}
                  </p>
                  <p className="text-sm text-[#4B5550] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <span className="text-xs font-semibold text-[#083D2A] group-hover:underline">
                  Open portal →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PortalNavigationHub;
