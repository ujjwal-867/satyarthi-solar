import { useState, useMemo } from "react";
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
      categoryLabel: "Store & Office",
      location: "Motiram Adda, Deoria Road, Gorakhpur (273202)",
      image: "/images/brand/main-hoarding-banner.jpg",
      badge: "📍 Google Maps Verified",
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
      categoryLabel: "Brochures & Brands",
      location: "Gorakhpur & Purvanchal Distribution",
      image: "/images/quotations/solar-electronics-brochure.jpg",
      badge: "🌟 24+ Solar & Appliance Brands",
      badgeColor: "bg-amber-500 text-slate-950 font-black",
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
      categoryLabel: "Rate Cards & Schemes",
      location: "Uttar Pradesh State Discoms",
      image: "/images/quotations/pm-surya-ghar-chart.jpg",
      badge: "💰 ₹1,08,000 Subsidy",
      badgeColor: "bg-blue-600 text-white",
      span: "col-span-1 row-span-2",
      description: "Official consumer rate card detailing 1 kW to 10 kW system costs, state vs central subsidy splits, and monthly EMI breakdown starting at ₹1,800/month.",
      specs: ["1 kW: ₹45,000 Subsidy", "2 kW: ₹90,000 Subsidy", "3 kW: ₹1,08,000 Subsidy", "Direct DBT in Bank Account"]
    },
    {
      id: "bento-gkp-map-card",
      title: "Google Maps Location • Motiram Adda Showroom",
      hindiTitle: "गूगल मैप्स लोकेशन पिन - मोतीराम चौराहा देवरिया रोड",
      category: "store",
      categoryLabel: "Google Maps Location",
      location: "Motiram Adda Deoriya Road Gorakhpur - 273202",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80",
      badge: "🗺️ Live Google Maps Spot",
      badgeColor: "bg-rose-600 text-white",
      span: "col-span-1 md:col-span-2 row-span-1",
      description: "Located right on the main Deoria Road Highway (NH-27 / State Highway). Just 16 km from Gorakhpur Railway Junction and 22 km from Deoria Sadar.",
      specs: ["Pin Code: 273202", "16 km from Gorakhpur Jn", "Free On-Site Survey within 100 km", "Direct Landmark: Motiram Chauraha"],
      googleMapLink: businessData.googleMapLink
    },
    {
      id: "bento-project-5kw-rooftop",
      title: "5 kW On-Grid Rooftop Solar Installation",
      hindiTitle: "5 किलोवाट रूफटॉप सोलर - देवरिया रोड गोरखपुर",
      category: "installations",
      categoryLabel: "Solar Rooftop",
      location: "Deoria Road, Gorakhpur",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
      badge: "⚡ ₹6,500/mo Saved",
      badgeColor: "bg-emerald-600 text-white",
      span: "col-span-1 row-span-1",
      description: "Residential net-metered installation for Shri R.K. Tripathi. Client bill plummeted from ₹7,100/mo to fixed line charges of ₹190/mo.",
      specs: ["Loom Solar 550W Mono PERC", "Dual MPPT On-Grid Inverter", "Net Metering Synchronized", "25 Yrs Panel Warranty"]
    },
    {
      id: "bento-project-15hp-chakki",
      title: "15 HP Solar Aata Chakki (Flour Mill) VFD Plant",
      hindiTitle: "15 एचपी सोलर आटा चक्की प्लांट - कुशीनगर",
      category: "commercial",
      categoryLabel: "Aata Chakki & Agro",
      location: "Kushinagar, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=80",
      badge: "🌾 0 Diesel • ₹38K Saved",
      badgeColor: "bg-amber-600 text-white",
      span: "col-span-1 row-span-1",
      description: "Direct solar VFD drive running a 15 HP industrial motor for grinding wheat and spices. Zero diesel consumed, saving ₹38,000/month.",
      specs: ["18 kW Solar Array", "Solar VFD Soft Starter", "Runs 8 Hrs Daily in Sun", "Payback in 14 Months"]
    },
    {
      id: "bento-project-10kw-school",
      title: "10 kW Solar Power System - Green Valley School",
      hindiTitle: "10 किलोवाट कमर्शियल सोलर - देवरिया",
      category: "installations",
      categoryLabel: "Commercial Solar",
      location: "Deoria, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1000&q=80",
      badge: "🏫 School Campus",
      badgeColor: "bg-indigo-600 text-white",
      span: "col-span-1 row-span-1",
      description: "Powers computer laboratories, classroom smart boards, lights, and water coolers without any grid disruption during school hours.",
      specs: ["Three-Phase 10 kW Grid Tie", "40% Tax Depreciation", "₹14,500/mo Savings", "Online Monitoring"]
    },
    {
      id: "bento-upneda-govt-seal",
      title: "Official UPNEDA & GST Government Empanelment",
      hindiTitle: "यूपीनेडा एवं जीएसटी अधिकृत विक्रेता प्रमाण",
      category: "store",
      categoryLabel: "Govt Approvals",
      location: "Gorakhpur Sector-12 / Lucknow",
      image: "/images/certificates/gst-certificate.png",
      badge: "🏛️ Govt Empanelled",
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
      categoryLabel: "Rate Cards & Schemes",
      location: "Gorakhpur & Deoria Division",
      image: "/images/quotations/on-grid-pricing-chart.jpg",
      badge: "📊 Technical Specs",
      badgeColor: "bg-teal-600 text-white",
      span: "col-span-1 row-span-1",
      description: "Comprehensive breakdown of DC capacities, inverter brands, mounting structures, and wiring safety for on-grid systems.",
      specs: ["Tier-1 Monocrystalline Panels", "Class II Surge Protection (SPD)", "Hot-Dip Galvanized Iron", "Chemical Earthing Kit"]
    },
    {
      id: "bento-visiting-card-brochure",
      title: "Er. Satya Prakash Satyarthi Engineering Consultation Card",
      hindiTitle: "ई. सत्यप्रकाश सत्यर्थी विजिटिंग व कंसल्टेंसी कार्ड",
      category: "store",
      categoryLabel: "Engineering Heritage",
      location: "Motiram Adda, Deoria Road, Gorakhpur",
      image: "/images/brand/visiting-card-brochure.jpg",
      badge: "👨‍💼 Lead Engineer",
      badgeColor: "bg-slate-900 text-amber-300 font-bold",
      span: "col-span-1 row-span-1",
      description: "Direct contact card for Er. Satya Prakash Satyarthi. We offer free shadow-free roof layout design and complete UPPCL net metering guidance.",
      specs: ["Mobile: 8112991941 / 8112991441", "Office Line: 8112991914", "UPNEDA Certified EPC", "Loom Solar Certified"]
    },
    {
      id: "bento-3kw-residence-project",
      title: "3 kW PM Surya Ghar Residential Rooftop System",
      hindiTitle: "3 किलोवाट आवासीय रूफटॉप - मोतीराम अड्डा",
      category: "installations",
      categoryLabel: "Solar Rooftop",
      location: "Motiram Adda, Gorakhpur",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1000&q=80",
      badge: "🏡 Zero Bill Home",
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
      categoryLabel: "Industrial Solar",
      location: "GIDA Industrial Area, Gorakhpur",
      image: "https://images.unsplash.com/photo-1545209575-7036a1923058?auto=format&fit=crop&w=1000&q=80",
      badge: "🏭 25 kW Industrial",
      badgeColor: "bg-purple-600 text-white",
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
    <section id="gallery" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Solar Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Decorative Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Bento Visual Showcase • 2,200+ Installations
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Real Sites, Store & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400">Picture Gallery</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Take a visual tour through our Gorakhpur experience store, Google Maps verified location, official 2026 brochures, and real rooftop solar plants installed by <strong className="text-white">Er. Satya Prakash Satyarthi</strong> across Eastern Uttar Pradesh.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center items-center gap-2 mt-10 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "all", label: "All Photos (सभी चित्र)" },
            { id: "installations", label: "Rooftop Solar (रूफटॉप)" },
            { id: "store", label: "Store & Maps (ऑफिस व मैप)" },
            { id: "flyer", label: "Brochures & Rates (ब्रोशर)" },
            { id: "commercial", label: "Chakki & Commercial (आटा चक्की)" }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setLightboxIndex(null);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 font-black scale-105"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 auto-rows-[240px] md:auto-rows-[270px]">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-800/80 hover:border-amber-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 ${item.span}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/60 transition-colors duration-300"></div>

              {/* Top Bar Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md ${item.badgeColor}`}>
                  {item.badge}
                </span>

                <button
                  type="button"
                  aria-label="View Full Photo"
                  className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-200"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Content Card */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-300 text-xs font-medium truncate">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                  <span className="truncate">{item.location}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 hidden sm:block">
                  {item.description}
                </p>

                {/* Google Map quick action if applicable */}
                {item.googleMapLink && (
                  <div className="pt-1 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                      <Navigation className="w-3 h-3" />
                      Click to inspect location & details
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bento Stats Footer Ribbon */}
        <div className="mt-12 bg-gradient-to-r from-slate-800/90 via-slate-800 to-slate-800/90 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">2,200+</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Sites Installed in UP</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">₹4.5+ Cr</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Total Electricity Saved</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-400">100%</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Subsidy DBT Assured</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-yellow-400">25 Years</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Linear Performance Warranty</div>
          </div>
        </div>

      </div>

      {/* Lightbox Inspection Modal */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${currentLightboxItem.badgeColor}`}>
                  {currentLightboxItem.badge}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {currentLightboxItem.categoryLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              
              {/* Photo Box */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 max-h-[50vh] flex items-center justify-center">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="w-full h-auto max-h-[50vh] object-contain"
                />

                {/* Navigation Arrows */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition shadow-lg"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition shadow-lg"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Details & Specs */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {currentLightboxItem.title}
                    </h3>
                    <p className="text-sm text-amber-400 font-medium">
                      {currentLightboxItem.hindiTitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentLightboxItem.location}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentLightboxItem.description}
                </p>

                {/* Key Specifications */}
                {currentLightboxItem.specs && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {currentLightboxItem.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-800/50 p-2.5 rounded-xl border border-slate-800">
                        <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer CTAs */}
            <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span>Photo {lightboxIndex + 1} of {filteredItems.length}</span>
                <span>•</span>
                <span>Er. Satya Prakash Satyarthi</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                {currentLightboxItem.googleMapLink && (
                  <a
                    href={currentLightboxItem.googleMapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition border border-slate-700"
                  >
                    <Navigation className="w-4 h-4 text-emerald-400" />
                    <span>View on Google Maps</span>
                  </a>
                )}

                <a
                  href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                    `Hello Er. Satyaprakash, I saw "${currentLightboxItem.title}" on your website gallery and want quotation/details for my location.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-lg shadow-emerald-950 transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire on WhatsApp</span>
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
