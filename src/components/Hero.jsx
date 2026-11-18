import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { businessData } from "../data/businessData";

function Hero({ onNavigate, onOpenCalculator }) {
  return (
    <section id="home" className="bg-white pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-xs font-semibold tracking-wider uppercase text-[#083D2A]">
              UPNEDA Empanelled Vendor · {businessData.vendorCode} · Gorakhpur
            </p>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight leading-[1.08] text-[#0D1F17]">
                Clean Rooftop Solar in 5 Simple Steps
              </h1>
              <div className="w-10 h-[3px] bg-[#F5C441]" />
              <p className="text-sm sm:text-base font-medium text-[#083D2A] font-hindi">
                सत्यार्थी सोलर सॉल्यूशन — पीएम सूर्य घर योजना के अंतर्गत ₹1,08,000 तक सीधी सरकारी सब्सिडी
              </p>
            </div>

            <p className="text-[15px] sm:text-base text-[#4B5550] leading-relaxed max-w-lg">
              Turnkey rooftop solar for homes, commercial buildings, and zero-diesel aata chakkis across Gorakhpur and Purvanchal. Complete UPPCL net-metering and 6% bank loan assistance under one roof.
            </p>

            {/* Primary Dual CTAs (SolarHub 6px Crisp Radius) */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate("/on-grid")}
                className="px-6 py-3 rounded-md bg-[#F5C441] hover:bg-[#eab62e] text-[#0D1F17] text-sm font-semibold transition-colors cursor-pointer"
              >
                Residential Subsidy
              </button>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate("/off-grid")}
                className="px-6 py-3 rounded-md bg-[#083D2A] hover:bg-[#062E20] text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Commercial &amp; Chakki
              </button>
            </div>

            {/* Secondary Quiet Links */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
              <button
                type="button"
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-1.5 font-semibold text-[#083D2A] hover:text-[#0D1F17] transition-colors cursor-pointer group"
              >
                <span>Calculate 25-year savings</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={businessData.googleMapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#4B5550] hover:text-[#083D2A] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#083D2A]" />
                <span>Motiram Adda, Deoria Road, Gorakhpur</span>
              </a>
            </div>
          </motion.div>

          {/* Right Real Installation Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="bg-[#FAF8F4] border border-[#E5E0D8] rounded-xl p-3 sm:p-4">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#083D2A]">
                <img
                  src="/images/projects/elevated-pergola-rajendranagar.jpg"
                  alt="Elevated Rooftop Solar Pergola Installation in Gorakhpur by Satyarthi Solar Solution"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Clean Architectural Engineer Caption Bar */}
              <div className="mt-3 pt-3 border-t border-[#E5E0D8] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={businessData.engineerImage}
                    alt="Er. Satya Prakash Satyarthi"
                    className="w-10 h-10 rounded-full object-cover object-top border border-[#E5E0D8] shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-[#0D1F17] truncate">
                      {businessData.founder}
                    </p>
                    <p className="text-[11px] text-[#5C6660] truncate">
                      Lead Solar EPC Engineer · 2,500+ Verified Sites
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("/gallery")}
                  className="text-xs font-semibold text-[#083D2A] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  View Gallery →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
