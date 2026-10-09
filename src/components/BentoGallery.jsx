import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  MapPin, 
  ExternalLink, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  Maximize2,
  Navigation
} from "lucide-react";

export function BentoGallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Curated Bento Items combining real images, site installations, hoardings, flyers, and Google Map links
  const bentoItems = useMemo(() => [
    {
      id: "bento-store-hoarding",
      title: "Satyarthi Solar Solution Experience Store & Hoarding",
      hindiTitle: "मुख्य कार्यालय व शोरूम - मोतीराम अड्डा देवरिया रोड",
      category: "store",
      categoryLabel: "Store & Office • शोरूम व डिपो",
      location: "Motiram Adda, Deoria Road, Gorakhpur (273202)",
      image: "/images/brand/main-hoarding-banner.jpg",
      badge: "📍 Google Maps Verified • मैप प्रमाणित",
      badgeColor: "bg-emerald-600 text-white",
      span: "col-span-1 md:col-span-2 row-span-2",
      description: "Official showroom & technical center on Deoria Road Highway displaying high-efficiency solar modules, hybrid PCUs, and energy-efficient home appliances.",
      specs: ["UPNEDA Approved Vendor GKP2604066741", "Loom Solar & Fujiyama Display Hub", "Free Parking & Demo Rooftop", "Deoria Road Highway Access"],
      googleMapLink: businessData.googleMapLink,
      isFeatured: true
    },
    {
      id: "bento-solar-electronics-brochure",
      title: "Solar + 5-Star Home Appliances Official 2026 Flyer",
      hindiTitle: "सोलर लगायें बिजली बिल घटायें - 24+ प्रमुख ब्रांड्स",
      category: "flyer",
      categoryLabel: "Brochures & Brands • ब्रोशर व ब्रांड्स",
      location: "Gorakhpur & Purvanchal Distribution",
      image: "/images/quotations/solar-electronics-brochure.jpg",
      badge: "🌟 24+ Solar & Appliance Brands",
      badgeColor: "bg-blue-600 text-white",
      span: "col-span-1 md:col-span-2 row-span-2",
      description: "Complete mega brochure showcasing 12+ Solar Brands (Tata Power, Adani, Waaree, Loom Solar, Havells, Vikram, UTL) and 12+ Appliance Brands (LG, Samsung, Voltas, Lloyd, Haier, Godrej, Whirlpool).",
      specs: ["₹1,08,000 तक सरकारी सब्सिडी", "0 बिजली बिल - 300 यूनिट तक फ्री बिजली", "सरकारी बैंक लोन 7% ब्याज दर पर", "25 वर्ष परफॉर्मेंस वारंटी"],
      isFeatured: true
    },
    {
      id: "bento-pm-surya-ghar-chart",
      title: "PM Surya Ghar 2026 Official Subsidy Rate Card",
      hindiTitle: "पीएम सूर्य घर योजना आधिकारिक सब्सिडी चार्ट",
      category: "flyer",
      categoryLabel: "Rate Cards & Schemes • सब्सिडी दरें",
      location: "Uttar Pradesh State Discoms",
      image: "/images/quotations/pm-surya-ghar-chart.jpg",
      badge: "💰 ₹1,08,000 Subsidy • सरकारी अनुदान",
      badgeColor: "bg-emerald-700 text-white",
      span: "col-span-1 row-span-2",
      description: "Official consumer rate card detailing 1 kW to 10 kW system costs, state vs central subsidy splits, and monthly EMI breakdown starting at ₹1,800/month.",
      specs: ["1 kW: ₹45,000 Subsidy", "2 kW: ₹90,000 Subsidy", "3 kW: ₹1,08,000 Subsidy", "Direct DBT in Bank Account"]
    },
    {
      id: "bento-engineer-spotlight",
      title: "Er. Satyaprakash Satyarthi • Lead Solar EPC Engineer",
      hindiTitle: "इंजीनियर सत्यप्रकाश सत्यार्थी - मुख्य सोलर विशेषज्ञ",
      category: "store",
      categoryLabel: "Engineering Leadership • इंजीनियरिंग नेतृत्व",
      location: "Times of India UP Transformation Dialogues (Gorakhpur)",
      image: "/images/brand/engineer-satyaprakash.jpg",
      badge: "🎤 TOI Keynote Speaker • टाइम्स ऑफ इंडिया संवाद",
      badgeColor: "bg-blue-700 text-white font-bold",
      span: "col-span-1 md:col-span-2 row-span-1",
      description: "Er. Satyaprakash Satyarthi speaking as featured delegate at the Times of India UP Transformation Dialogues (Gorakhpur Edition) promoting renewable solar EPC power across Eastern UP.",
      specs: ["UPNEDA Approved Vendor GKP2604066741", "24x7 Direct Consultation: 8112991941", "2,200+ kW Installed", "Turnkey EPC Project Lead"],
      googleMapLink: businessData.googleMapLink
    },
    {
      id: "bento-project-5kw-rooftop",
      title: "High-Efficiency Solar Modules & Rooftop Arrays",
      hindiTitle: "उच्च दक्षता रूफटॉप सोलर पैनल्स - गोरखपुर",
      category: "installations",
      categoryLabel: "Solar Rooftop • आवासीय रूफटॉप",
      location: "Deoria Road, Gorakhpur",
      image: "/images/projects/hero-solar-sunburst.jpg",
      badge: "⚡ 25-Year Warranty • 25 वर्ष वारंटी",
      badgeColor: "bg-emerald-600 text-white",
      span: "col-span-1 row-span-1",
      description: "Residential net-metered installation utilizing high-efficiency monocrystalline panels for maximum units generation even in overcast conditions.",
      specs: ["Loom Solar Mono PERC", "Dual MPPT On-Grid Inverter", "Net Metering Synchronized", "25 Yrs Panel Warranty"]
    },
    {
      id: "bento-project-15hp-chakki",
      title: "Utility & Heavy-Duty Industrial Solar Power Plants",
      hindiTitle: "कमर्शियल व इंडस्ट्रियल सोलर प्लांट - जीरो डीजल",
      category: "commercial",
      categoryLabel: "Industrial & Agro • आटा चक्की व उद्योग",
      location: "Gorakhpur & Purvanchal Industrial Belt",
      image: "/images/projects/hero-solar-farm.jpg",
      badge: "🌾 Zero Diesel • भारी डीजल बचत",
      badgeColor: "bg-blue-800 text-white",
      span: "col-span-1 row-span-1",
      description: "Utility scale and heavy motor drive setups running flour mills, schools, and cold storages cleanly with zero diesel reliance.",
      specs: ["High-Wattage Mono Arrays", "Solar VFD Soft Starters", "Cut Bills by 85%", "Payback in 14-18 Months"]
    },
    {
      id: "bento-project-10kw-school",
      title: "Institutional Campus Rooftop Solar Array (Aerial View)",
      hindiTitle: "रूफटॉप कमर्शियल सोलर प्लांट - एरियल व्यू",
      category: "installations",
      categoryLabel: "Commercial Rooftop • स्कूल व संस्थान",
      location: "Eastern Uttar Pradesh",
      image: "/images/projects/hero-rooftop-aerial.jpg",
      badge: "🏫 Institutional Campus • शैक्षणिक संस्थान",
      badgeColor: "bg-indigo-600 text-white",
      span: "col-span-1 row-span-1",
      description: "Terrace-mounted multiple solar arrays engineered with high-strength galvanized mounting structure and lightning surge protection.",
      specs: ["Three-Phase Grid Tie", "Galvanized GI Mounting", "Surge Protection Devices", "Online Net-Meter Tracking"]
    },
    {
      id: "bento-project-technician-install",
      title: "Precision Mounting & On-Site Certified Installation",
      hindiTitle: "कुशल तकनीशियनों द्वारा सटीक स्ट्रक्चर व पैनल स्थापना",
      category: "installations",
      categoryLabel: "Precision Installation • सटीक स्थापना",
      location: "Customer Sites Across Purvanchal",
      image: "/images/projects/hero-technician-install.png",
      badge: "🔧 Certified Installation • प्रमाणित कार्य",
      badgeColor: "bg-emerald-600 text-white",
      span: "col-span-1 row-span-1",
      description: "Trained installation technicians mounting panels at precise azimuth angles with heavy-duty fasteners for wind resistance up to 150 km/h.",
      specs: ["Wind Load Tested Structure", "Chemical Earthing Included", "DC/AC Isolation Switchgear", "100% Quality Inspection"]
    },
    {
      id: "bento-upneda-govt-seal",
      title: "Official UPNEDA & GST Government Empanelment",
      hindiTitle: "यूपीनेडा एवं जीएसटी अधिकृत विक्रेता प्रमाण",
      category: "store",
      categoryLabel: "Govt Approvals • सरकारी मान्यता",
      location: "Gorakhpur Sector-12 / Lucknow",
      image: "/images/certificates/gst-certificate.png",
      badge: "🏛️ Govt Empanelled • सरकारी सूचीबद्ध",
      badgeColor: "bg-emerald-700 text-white",
      span: "col-span-1 row-span-1",
      description: "Formally registered with the Government of Uttar Pradesh (UPNEDA Vendor Code: GKP2604066741) and GST Department (09JCNPS2666N1ZE).",
      specs: ["Proprietor: Er. Satya Prakash", "Direct DBT Subsidy Processing", "Full Legal Compliance", "100% Transparency"]
    },
    {
      id: "bento-on-grid-pricing-chart",
      title: "On-Grid System Technical Rate & Specification Chart",
      hindiTitle: "ऑन-ग्रिड सोलर सिस्टम तकनीकी विनिर्देश चार्ट",
      category: "flyer",
      categoryLabel: "Rate Cards & Schemes • तकनीकी चार्ट",
      location: "Gorakhpur & Deoria Division",
      image: "/images/quotations/on-grid-pricing-chart.jpg",
      badge: "📊 Technical Specs • तकनीकी विवरण",
      badgeColor: "bg-teal-700 text-white",
      span: "col-span-1 row-span-1",
      description: "Comprehensive breakdown of DC capacities, inverter brands, mounting structures, and wiring safety for on-grid systems.",
      specs: ["Tier-1 Monocrystalline Panels", "Class II Surge Protection (SPD)", "Hot-Dip Galvanized Iron", "Chemical Earthing Kit"]
    },
    {
      id: "bento-visiting-card-brochure",
      title: "Er. Satya Prakash Satyarthi Engineering Consultation Card",
      hindiTitle: "ई. सत्यप्रकाश सत्यार्थी विजिटिंग व कंसल्टेंसी कार्ड",
      category: "store",
      categoryLabel: "Engineering Heritage • संपर्क कार्ड",
      location: "Motiram Adda, Deoria Road, Gorakhpur",
      image: "/images/brand/visiting-card-brochure.jpg",
      badge: "👨‍💼 Lead Engineer • मुख्य अभियंता",
      badgeColor: "bg-slate-900 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Direct contact card for Er. Satya Prakash Satyarthi. We offer free shadow-free roof layout design and complete UPPCL net metering guidance.",
      specs: ["Mobile: 8112991941 / 8112991441", "Office Line: 8112991914", "UPNEDA Certified EPC", "Loom Solar Certified"]
    },
    {
      id: "bento-3kw-residence-project",
      title: "3 kW PM Surya Ghar Residential Rooftop System",
      hindiTitle: "3 किलोवाट आवासीय रूफटॉप - मोतीराम अड्डा",
      category: "installations",
      categoryLabel: "Solar Rooftop • आवासीय रूफटॉप",
      location: "Motiram Adda, Gorakhpur",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1000&q=80",
      badge: "🏡 Zero Bill Home • शून्य बिल घर",
      badgeColor: "bg-emerald-600 text-white",
      span: "col-span-1 row-span-1",
      description: "Flagship residential showcase featuring elevated G.I. structure, chemical earthing pits, and live generation tracking over mobile app.",
      specs: ["₹1,08,000 Govt Subsidy Disbursed", "300+ Units Free Every Month", "Loom Solar High-Tech Panels", "Zero Shading Layout"]
    },
    {
      id: "bento-gida-industrial-project",
      title: "25 kW Industrial Plant at GIDA Gorakhpur",
      hindiTitle: "25 किलोवाट औद्योगिक प्लांट - गीडा गोरखपुर",
      category: "commercial",
      categoryLabel: "Industrial Solar • औद्योगिक प्लांट",
      location: "GIDA Industrial Area, Gorakhpur",
      image: "https://images.unsplash.com/photo-1545209575-7036a1923058?auto=format&fit=crop&w=1000&q=80",
      badge: "🏭 25 kW Industrial • गीडा गोरखपुर",
      badgeColor: "bg-blue-700 text-white",
      span: "col-span-1 md:col-span-2 row-span-1",
      description: "Engineered for GIDA manufacturing facility to slash industrial tariffs during daytime operational shifts. Provides immediate 40% depreciation tax write-off.",
      specs: ["High-Tension Synchronized", "Saves ₹36,000 Every Month", "Rapid Payback in 2.8 Years", "Heavy Duty GI Elevated Framework"]
    }
  ], []);

  // Filter items
  const filteredItems = useMemo(() => {
    if (activeTab === "all") return bentoItems;
    return bentoItems.filter((item) => item.category === activeTab);
  }, [activeTab, bentoItems]);

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Ambient Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            <span>Bento Visual Showcase • 2,200+ Installations Across UP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Real Sites, Store & <span className="text-blue-600">Picture Gallery</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              वास्तविक सोलर साइट्स, मोतीराम अड्डा शोरूम व फोटो गैलरी
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a visual tour through our Gorakhpur experience store, Google Maps verified location, official 2026 brochures, and real rooftop solar plants installed by <strong className="text-slate-900">Er. Satya Prakash Satyarthi</strong> across Eastern Uttar Pradesh.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              सत्यार्थी सोलर सॉल्यूशन द्वारा स्थापित वास्तविक सोलर प्लांट, सरकारी ब्रोशर और गूगल मैप्स प्रमाणित डिपो की तस्वीरें।
            </span>
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center items-center gap-2 mt-10 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "all", label: "All Photos", hindi: "सभी चित्र" },
            { id: "installations", label: "Rooftop Solar", hindi: "आवासीय रूफटॉप" },
            { id: "store", label: "Store & Maps", hindi: "ऑफिस व गूगल मैप" },
            { id: "flyer", label: "Brochures & Rates", hindi: "ब्रोशर व रेट कार्ड" },
            { id: "commercial", label: "Chakki & Commercial", hindi: "आटा चक्की व उद्योग" }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setLightboxIndex(null);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 font-black scale-102"
                  : "bg-white text-slate-700 hover:bg-blue-50/60 hover:text-blue-700 border border-slate-200 shadow-xs"
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[11px] opacity-80 font-hindi">({tab.hindi})</span>
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 auto-rows-[250px] md:auto-rows-[280px]">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-200 hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-blue-500/10 ${item.span}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Scrim for Pristine Typography Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent group-hover:via-slate-950/65 transition-colors duration-300"></div>

              {/* Top Bar Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md ${item.badgeColor}`}>
                  {item.badge}
                </span>

                <button
                  type="button"
                  aria-label="View Full Photo"
                  className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Content Card */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-semibold truncate">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                  <span className="truncate">{item.location}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-amber-300 font-semibold font-hindi line-clamp-1">
                  {item.hindiTitle}
                </p>

                <p className="text-xs text-slate-300 line-clamp-2 hidden sm:block">
                  {item.description}
                </p>

                {/* Google Map quick action if applicable */}
                {item.googleMapLink && (
                  <div className="pt-1 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                      <Navigation className="w-3 h-3" />
                      Google Maps Verified • क्लिक कर देखें
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bento Stats Footer Ribbon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-600">2,200+</div>
            <div className="text-xs text-slate-700 font-bold mt-1">Sites Installed in UP • साइट्स स्थापित</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">₹4.5+ Cr</div>
            <div className="text-xs text-slate-700 font-bold mt-1">Electricity Saved • बिजली बिल बचत</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-700">100%</div>
            <div className="text-xs text-slate-700 font-bold mt-1">Subsidy DBT Assured • सब्सिडी गारंटी</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-700">25 Years</div>
            <div className="text-xs text-slate-700 font-bold mt-1">Performance Warranty • वारंटी</div>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Inspection Modal */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${currentLightboxItem.badgeColor}`}>
                  {currentLightboxItem.badge}
                </span>
                <span className="text-xs text-slate-600 font-semibold hidden sm:inline">
                  {currentLightboxItem.categoryLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-300 flex items-center justify-center transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              
              {/* Photo Box */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 max-h-[50vh] flex items-center justify-center">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="w-full h-auto max-h-[50vh] object-contain"
                />

                {/* Navigation Arrows */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center transition shadow-lg cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center transition shadow-lg cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Details & Specs */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {currentLightboxItem.title}
                    </h3>
                    <p className="text-sm text-emerald-700 font-bold font-hindi mt-0.5">
                      {currentLightboxItem.hindiTitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>{currentLightboxItem.location}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentLightboxItem.description}
                </p>

                {/* Key Specifications */}
                {currentLightboxItem.specs && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {currentLightboxItem.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer CTAs */}
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-600 font-medium flex items-center gap-2">
                <span>Photo {lightboxIndex + 1} of {filteredItems.length}</span>
                <span>•</span>
                <span>Er. Satya Prakash Satyarthi • सत्यार्थी सोलर सॉल्यूशन</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                {currentLightboxItem.googleMapLink && (
                  <a
                    href={currentLightboxItem.googleMapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs py-2.5 px-4 rounded-xl transition border border-slate-300 shadow-xs"
                  >
                    <Navigation className="w-4 h-4 text-emerald-600" />
                    <span>Google Maps Location</span>
                  </a>
                )}

                <a
                  href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                    `Hello Er. Satyaprakash (Satyarthi Solar Solution), I saw "${currentLightboxItem.title}" on your website gallery and want quotation/details for my location.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-lg shadow-emerald-600/20 transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire on WhatsApp • पूछताछ करें</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default BentoGallery;
