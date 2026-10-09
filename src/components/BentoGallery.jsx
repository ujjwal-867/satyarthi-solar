import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Navigation,
  CheckCircle2,
  Award
} from "lucide-react";

export function BentoGallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Complete Catalog of 20 Real Work Photos (GPS Verified Sites, Gazebo Pergolas, Inverters & Industrial Systems)
  const bentoItems = useMemo(() => [
    {
      id: "bento-saketpuri-pergola",
      title: "Saketpuri Colony High-Clearance Rooftop Pergola Plant",
      hindiTitle: "साकेतपुरी कॉलोनी राजेंद्र नगर - एलिवेटेड सोलर परगोला प्लांट",
      category: "elevated",
      categoryLabel: "Elevated Pergola • एलिवेटेड स्ट्रक्चर",
      location: "Saketpuri Colony, Rajendra Nagar, Gorakhpur (273015)",
      image: "/images/projects/team-saketpuri-pergola.jpg",
      badge: "📍 GPS Verified • 10/09/2025",
      badgeColor: "bg-emerald-600 text-white font-bold",
      span: "col-span-1 md:col-span-2 row-span-2",
      description: "Complete elevated rooftop gazebo pergola plant engineered by Satyarthi Solar Solution. Allows full terrace walking and recreational usage below the solar array.",
      specs: ["GPS: 26.787222° N, 83.349473° E", "Er. Satyaprakash with Engineering Team", "Heavy-Duty Galvanized Columns", "Full Usable Roof Clearance"],
      googleMapLink: "https://maps.google.com/?q=26.787222,83.349473",
      isFeatured: true
    },
    {
      id: "bento-railvihar-colony",
      title: "Railvihar Phase-2 Heavy-Duty Elevated Rooftop Solar",
      hindiTitle: "रेलविहार फेज-2 शताब्दीपुरम - एलिवेटेड सोलर प्लांट",
      category: "elevated",
      categoryLabel: "Elevated Rooftop • आंधी-रोधी स्ट्रक्चर",
      location: "303b, Railvihar Ph-2, Shatabdipuram, Gorakhpur (273013)",
      image: "/images/projects/elevated-solar-railvihar.jpg",
      badge: "📍 GPS Verified • 03/06/2026",
      badgeColor: "bg-blue-600 text-white font-bold",
      span: "col-span-1 md:col-span-2 row-span-2",
      description: "Terrace rooftop solar installation elevated over water tank superstructure, engineered with hot-dip galvanized cross-braced framing tested against 150 km/h storm winds.",
      specs: ["GPS: 26.805253° N, 83.386116° E", "Hot-Dip G.I. Heavy Structure", "High-Wattage Mono PERC Panels", "Wind Load Tested at 150 km/h"],
      googleMapLink: "https://maps.google.com/?q=26.805253,83.386116",
      isFeatured: true
    },
    {
      id: "bento-fertilizer-colony-completed",
      title: "Fertilizer Colony Concrete Pillar Grouted Rooftop Plant",
      hindiTitle: "फर्टिलाइजर कॉलोनी - कंक्रीट पिलर एलिवेटेड सोलर रूफटॉप",
      category: "elevated",
      categoryLabel: "Grouted Pillars • कंक्रीट बेस",
      location: "Fertilizer Rd, Fertilizer Colony, Gorakhpur (273013)",
      image: "/images/projects/fertilizer-colony-completed-array.jpg",
      badge: "📍 GPS Verified • 03/06/2026",
      badgeColor: "bg-teal-700 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "High-durability elevated residential plant with reinforced concrete pedestal footings anchored for zero-vibration storm resistance in Gorakhpur.",
      specs: ["GPS: 26.822992° N, 83.38256° E", "Concrete Grouting Ballast Base", "Heavy Rain & Storm Proof", "Direct UPPCL Net Metering"],
      googleMapLink: "https://maps.google.com/?q=26.822992,83.38256"
    },
    {
      id: "bento-waaree-inverter-purdilpur",
      title: "Waaree On-Grid Inverter + Solar ACDB & DCDB Junctions",
      hindiTitle: "वारी ऑन-ग्रिड इन्वर्टर व एसीडीबी/डीसीडीबी - बैंक रोड पुरदिलपुर",
      category: "inverters",
      categoryLabel: "Inverter & Switchgear • इन्वर्टर व डीसीडीबी",
      location: "Bank Rd, Purdilpur, Gorakhpur (273001)",
      image: "/images/projects/waaree-inverter-purdilpur.jpg",
      badge: "⚡ Waaree Solar • 10/04/2026",
      badgeColor: "bg-amber-600 text-white font-bold",
      span: "col-span-1 md:col-span-2 row-span-1",
      description: "Clean interior electrical installation featuring Waaree high-efficiency grid-tied solar inverter with dual ACDB & DCDB surge protection switchgear and fire-retardant conduits.",
      specs: ["GPS: 26.756338° N, 83.362768° E", "Waaree Single Phase Grid Inverter", "Solar ACDB with Indicator Lamp", "Solar DCDB with Fast-Acting Fuses"],
      googleMapLink: "https://maps.google.com/?q=26.756338,83.362768"
    },
    {
      id: "bento-solar-water-pump",
      title: "Agricultural Solar Water Tubewell Pumping System",
      hindiTitle: "सोलर वाटर पंप व सबमर्सिबल ट्यूबवेल - जीरो बिजली/डीजल खर्च",
      category: "industrial",
      categoryLabel: "Solar Irrigation • कृषि सोलर पंप",
      location: "Agricultural Farms, Purvanchal (Eastern UP)",
      image: "/images/projects/solar-water-pump-agriculture.jpg",
      badge: "🌾 PM Kusum Scheme • जीरो डीजल",
      badgeColor: "bg-emerald-700 text-white font-bold",
      span: "col-span-1 md:col-span-2 row-span-2",
      description: "High-discharge solar submersible pumping station pumping continuous clean irrigation water for agricultural farms with zero electric or diesel bills.",
      specs: ["Dual Outflow High-Discharge Delivery", "Direct Solar Drive (No Grid Required)", "PM Kusum Subsidy Compatible", "Payback in 1 Crop Season"],
      isFeatured: true
    },
    {
      id: "bento-okaya-pcu-khorabar",
      title: "Okaya 5.4 kVA MPPT Solar PCU + Heavy Battery Bank",
      hindiTitle: "ओकाया 5.4 kVA सोलर पीसीयू व बैटरी बैंक - राप्ती नगर खोराबार",
      category: "inverters",
      categoryLabel: "Solar PCU • 5.4 kVA 48V",
      location: "Rapti Nagar Phase-4, Khorabar, Gorakhpur (273010)",
      image: "/images/projects/okaya-pcu-khorabar.jpg",
      badge: "🔋 Okaya MPPT • 08/06/2026",
      badgeColor: "bg-emerald-600 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "High-capacity Okaya MPPT Solar PCU with digital telemetry display and UTL solar backup battery bank powering heavy domestic and commercial loads.",
      specs: ["GPS: 26.710498° N, 83.45127° E", "5.4 kVA / 48V MPPT Solar PCU", "Full Digital Diagnostics Screen", "Seamless Heavy Load Running"],
      googleMapLink: "https://maps.google.com/?q=26.710498,83.45127"
    },
    {
      id: "bento-rajendranagar-netaji-colony",
      title: "Netaji Subhas Chandra Bose Nagar High Pergola Array",
      hindiTitle: "नेताजी सुभाष नगर कॉलोनी राजेंद्र नगर - एलिवेटेड परगोला रूफटॉप",
      category: "elevated",
      categoryLabel: "High-Clearance Pergola • परगोला रूफटॉप",
      location: "78, Netaji Rd, Rajendra Nagar, Gorakhpur (273015)",
      image: "/images/projects/elevated-pergola-rajendranagar.jpg",
      badge: "📍 GPS Verified • 03/09/2025",
      badgeColor: "bg-indigo-600 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Architectural high-clearance solar gazebo framing elevating panels above the terrace parapet for maximum solar irradiance.",
      specs: ["GPS: 26.772317° N, 83.343731° E", "Dual-Row Mono PERC Array", "Cross-Braced Structural Stability", "Zero Terrace Shadowing"],
      googleMapLink: "https://maps.google.com/?q=26.772317,83.343731"
    },
    {
      id: "bento-siddharth-nagar-colony",
      title: "Siddharth Nagar Colony Rooftop Solar Plant",
      hindiTitle: "सिद्धार्थ नगर कॉलोनी राजेंद्र नगर - 5kW रूफटॉप प्लांट",
      category: "elevated",
      categoryLabel: "Residential Rooftop • आवासीय सोलर",
      location: "Siddharth Nagar Colony, Rajendra Nagar, Gorakhpur (273015)",
      image: "/images/projects/siddharth-nagar-rajendranagar.jpg",
      badge: "📍 GPS Verified • 05/01/2026",
      badgeColor: "bg-blue-700 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Residential rooftop solar installation providing 100% electricity bill offset with net-meter grid export under PM Surya Ghar.",
      specs: ["GPS: 26.779544° N, 83.353684° E", "Zero Electricity Bill Output", "High-Efficiency Monocrystalline", "UPNEDA Subsidy Processed"],
      googleMapLink: "https://maps.google.com/?q=26.779544,83.353684"
    },
    {
      id: "bento-happy-client-jangl-ramgarh",
      title: "Satisfied Customer Solar Plant at Jangl Ramgarh (Deoria Rd)",
      hindiTitle: "जंगल रामगढ़ देवरिया रोड - खुशहाल उपभोक्ता व सोलर प्लांट",
      category: "elevated",
      categoryLabel: "Customer Showcase • खुशहाल परिवार",
      location: "Deoria Rd, Jangl Ramgarh Urf Chawri, Gorakhpur (273202)",
      image: "/images/projects/happy-client-jangl-ramgarh.jpg",
      badge: "😊 Happy Client • 28/07/2026",
      badgeColor: "bg-emerald-600 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Homeowner standing with his newly energized elevated rooftop solar plant equipped with copper lightning arrester protection on Deoria Road.",
      specs: ["GPS: 26.69477° N, 83.480671° E", "Lightning Arrester Installed", "Zero Power Cut Household", "₹1,08,000 DBT Subsidy Credited"],
      googleMapLink: "https://maps.google.com/?q=26.69477,83.480671"
    },
    {
      id: "bento-happy-client-gauribazar",
      title: "Customer Solar Terrace Plant at Gauri Bazar, UP",
      hindiTitle: "गौरी बाजार - संतुष्ट ग्राहक व एलिवेटेड रूफटॉप सोलर",
      category: "elevated",
      categoryLabel: "Customer Showcase • गौरी बाजार",
      location: "Gauri Bazar, Uttar Pradesh (274202)",
      image: "/images/projects/happy-client-gauribazar.jpg",
      badge: "😊 Happy Client • 01/08/2026",
      badgeColor: "bg-teal-600 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Client proudly standing beside his newly installed high-performance rooftop solar array overlooking the neighborhood in Gauri Bazar.",
      specs: ["GPS: 26.599325° N, 83.669379° E", "Elevated Galvanized Iron Frame", "High Energy Yield Mono PERC", "Net Metering Synchronized"],
      googleMapLink: "https://maps.google.com/?q=26.599325,83.669379"
    },
    {
      id: "bento-purdilpur-pillar-array",
      title: "Purdilpur Miyan Baza Residential Solar Rooftop Array",
      hindiTitle: "पुरदिलपुर मियां बाजा - कंक्रीट पिलर रूफटॉप सोलर सिस्टम",
      category: "elevated",
      categoryLabel: "Elevated Concrete Base • पुरदिलपुर",
      location: "267, Purdilpur, Miyan Baza, Gorakhpur (273001)",
      image: "/images/projects/purdilpur-pillar-array.jpg",
      badge: "📍 GPS Verified • 10/04/2026",
      badgeColor: "bg-blue-600 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Sturdy elevated rooftop installation with reinforced concrete pedestal anchoring for storm resistance in central Gorakhpur.",
      specs: ["GPS: 26.75638° N, 83.362895° E", "100% Shadow-Free Solar Access", "Concrete Cylinder Grouted Pillars", "25 Years Performance Warranty"],
      googleMapLink: "https://maps.google.com/?q=26.75638,83.362895"
    },
    {
      id: "bento-vfd-drive-panel",
      title: "Industrial INVT VFD Drive Panel for Solar Atta Chakki & Heavy Motors",
      hindiTitle: "सोलर आटा चक्की व हैवी मोटर हेतु INVT वीएफडी ड्राइव पैनल",
      category: "industrial",
      categoryLabel: "Atta Chakki & VFD • आटा चक्की",
      location: "Purvanchal Industrial & Flour Mill Installations",
      image: "/images/projects/vfd-solar-drive-panel.png",
      badge: "⚡ Solar Atta Chakki • वीएफडी पैनल",
      badgeColor: "bg-purple-700 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Weatherproof industrial control cabinet featuring INVT Variable Frequency Drive with heavy-duty MCBs for running 10HP to 25HP flour mills directly on solar.",
      specs: ["INVT High-Efficiency Solar Drive", "Soft Start Technology for Heavy Motors", "Multi-Stage Overload Protection", "Cut Milling Diesel Costs to Zero"]
    },
    {
      id: "bento-utl-sigma-gauribazar",
      title: "UTL Sigma Grid Export Solar PCU with Wi-Fi Monitoring",
      hindiTitle: "यूटीएल सिग्मा ग्रिड एक्सपोर्ट सोलर पीसीयू - वाई-फाई मॉनिटरिंग",
      category: "inverters",
      categoryLabel: "Hybrid Solar PCU • वाई-फाई मॉनिटरिंग",
      location: "Gauri Bazar, Uttar Pradesh (274202)",
      image: "/images/projects/utl-sigma-pcu-gauribazar.jpg",
      badge: "📡 Wi-Fi PCU • 01/08/2026",
      badgeColor: "bg-blue-600 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "State-of-the-art UTL Sigma hybrid grid export inverter equipped with remote Wi-Fi mobile tracking and intelligent battery charging.",
      specs: ["GPS: 26.599347° N, 83.66938° E", "Real-Time Mobile App Generation Data", "Grid Export Net Meter Compatible", "Smart Priority Energy Selector"],
      googleMapLink: "https://maps.google.com/?q=26.599347,83.66938"
    },
    {
      id: "bento-engineer-on-roof",
      title: "Er. Satyaprakash Satyarthi Inspecting Live Solar Array",
      hindiTitle: "इंजीनियर सत्यप्रकाश सत्यार्थी - लाइव सोलर साइट इंस्पेक्शन",
      category: "store",
      categoryLabel: "Lead Engineer • मुख्य विशेषज्ञ",
      location: "Live Installation Site, Gorakhpur",
      image: "/images/projects/engineer-on-solar-roof.jpg",
      badge: "👨‍💼 Lead Engineer • UPNEDA Approved",
      badgeColor: "bg-slate-900 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Er. Satyaprakash Satyarthi conducting final commissioning quality audit on a newly installed high-efficiency rooftop solar plant.",
      specs: ["UPNEDA Approved Vendor GKP2604066741", "Quality Tested Solar Arrays", "2,200+ kW Capacity Built", "24x7 Direct Helpline: 8112991941"]
    },
    {
      id: "bento-gautam-solar-expo",
      title: "Er. Satyaprakash with Gautam Solar at Renewable Energy Expo",
      hindiTitle: "इंजीनियर सत्यप्रकाश - गौतम सोलर 630W TOPCon एक्सपो",
      category: "store",
      categoryLabel: "Industry Leadership • एक्सपो व तकनीक",
      location: "Renewable Energy India Expo",
      image: "/images/brand/gautam-solar-expo.png",
      badge: "🏆 630 Wp TOPCon • गौतम सोलर",
      badgeColor: "bg-red-700 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Er. Satyaprakash Satyarthi consulting with Gautam Solar leaders on ultra-high-efficiency 630 Wp TOPCon Bifacial solar technology for Purvanchal projects.",
      specs: ["630 Wp N-Type TOPCon Bifacial Panels", "Tier-1 Cell Manufacturing", "23.32% Industry-Leading Efficiency", "Authorized EPC Partner"]
    },
    {
      id: "bento-technicians-installing",
      title: "Certified Technicians Assembling Heavy-Duty Elevated Structure",
      hindiTitle: "कुशल तकनीशियनों द्वारा एलिवेटेड स्ट्रक्चर व पैनल फिटिंग",
      category: "elevated",
      categoryLabel: "Precision EPC • कुशल कारीगरी",
      location: "Gorakhpur Installation Site",
      image: "/images/projects/technicians-mounting-structure.png",
      badge: "🔧 Certified Installation • कुशल टीम",
      badgeColor: "bg-emerald-600 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Specialized solar technicians carefully securing high-efficiency modules onto heavy-gauge galvanized framing.",
      specs: ["High-Tensile Fasteners", "Precision Azimuth Angle Alignment", "Safety Harness Compliant", "Zero Roof Leakage Mounting"]
    },
    {
      id: "bento-heavy-duty-solar-pcu",
      title: "Commercial Solar Power Control & Inverter Battery Room",
      hindiTitle: "कमर्शियल सोलर कंट्रोल रूम - हाई-कैपेसिटी पीसीयू सेटअप",
      category: "inverters",
      categoryLabel: "Commercial PCU • कंट्रोल रूम",
      location: "Gorakhpur Commercial Facility",
      image: "/images/projects/heavy-duty-solar-pcu.png",
      badge: "🏢 Commercial Scale • 24/7 Power",
      badgeColor: "bg-blue-800 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Dedicated climate-controlled inverter room engineered for uninterrupted power supply to schools, hospitals, and commercial complexes.",
      specs: ["Central Power Conditioning Unit", "High-Amp Battery Protection", "Conduit-Encased Wiring", "Automatic Grid-Battery Synchronization"]
    },
    {
      id: "bento-mono-perc-closeup",
      title: "Close-Up High-Efficiency Monocrystalline Module Arrays",
      hindiTitle: "मोनो पर्क सोलर पैनल्स क्लोज-अप - सटीक रेल क्लैम्पिंग",
      category: "elevated",
      categoryLabel: "Mono PERC Tech • उच्च दक्षता पैनल्स",
      location: "Rooftop Terrace, Gorakhpur",
      image: "/images/projects/mono-perc-array-closeup.png",
      badge: "☀️ Mono PERC • 550W+ Modules",
      badgeColor: "bg-amber-600 text-white font-bold",
      span: "col-span-1 row-span-1",
      description: "Detailed engineering inspection of anti-reflective tempered glass and corrosion-resistant mid and end clamps on high-wattage Mono PERC modules.",
      specs: ["Class-A Anti-Reflective Glass", "Heavy Aluminum Extrusion Clamps", "IP68 Multi-Busbar Junction Boxes", "Hailstorm & Impact Tested"]
    },
    {
      id: "bento-main-hoarding-store",
      title: "Satyarthi Solar Solution Main Highway Showroom & Store",
      hindiTitle: "सत्यार्थी सोलर सॉल्यूशन मुख्य शोरूम - मोतीराम अड्डा देवरिया रोड",
      category: "store",
      categoryLabel: "Main Store • मुख्य शोरूम",
      location: "Motiram Adda, Deoria Road, Gorakhpur (273202)",
      image: "/images/brand/main-hoarding-banner.jpg",
      badge: "📍 Main Showroom • मोतीराम अड्डा",
      badgeColor: "bg-emerald-600 text-white font-bold",
      span: "col-span-1 md:col-span-2 row-span-1",
      description: "Official technical center and showroom displaying high-efficiency solar modules, hybrid PCUs, and energy-efficient home appliances on Deoria Road highway.",
      specs: ["UPNEDA Approved Vendor GKP2604066741", "Loom Solar & Fujiyama Display Hub", "Deoria Road Highway Access", "Free Technical Consultation"],
      googleMapLink: businessData.googleMapLink
    },
    {
      id: "bento-solar-electronics-brochure",
      title: "Solar + 5-Star Home Appliances Official Mega Brochure",
      hindiTitle: "सोलर लगायें बिजली बिल शून्य करें - 24+ ब्रांड्स ब्रोशर",
      category: "store",
      categoryLabel: "Official Brochure • ब्रोशर व ब्रांड्स",
      location: "Gorakhpur & Purvanchal Distribution",
      image: "/images/quotations/solar-electronics-brochure.jpg",
      badge: "🌟 24+ Brands • ब्रोशर 2026",
      badgeColor: "bg-blue-600 text-white font-bold",
      span: "col-span-1 md:col-span-2 row-span-1",
      description: "Complete mega brochure showcasing 12+ Solar Brands (Tata Power, Adani, Waaree, Loom Solar, Havells, Vikram, UTL) and 12+ Appliance Brands.",
      specs: ["₹1,08,000 Govt Subsidy Guidance", "300 Units Free Power per Month", "Bank Loan at 7% Interest", "25 Yrs Performance Warranty"]
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

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Ambient Lights */}
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
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Real Site Proof • GPS Verified Installations in Gorakhpur & UP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Real Works, Sites & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-600 to-emerald-600">Photo Gallery</span>
            <span className="block text-xl sm:text-2xl font-extrabold text-emerald-700 mt-2 font-hindi">
              वास्तविक कार्य, जीपीएस प्रमाणित साइट्स व फोटो गैलरी
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore authentic installation photos from customer rooftops across Gorakhpur (Rajendra Nagar, Purdilpur, Railvihar, Fertilizer Colony, Jangl Ramgarh, Gauri Bazar). Every system is engineered under the direct supervision of <strong className="text-slate-900">Er. Satya Prakash Satyarthi</strong>.
            <span className="block text-slate-700 font-medium text-xs sm:text-sm mt-1.5 font-hindi bg-white/80 p-2.5 rounded-xl border border-slate-200 shadow-2xs">
              📸 <strong>असली काम का प्रमाण:</strong> सभी तस्वीरें हमारे द्वारा स्थापित वास्तविक साइट्स की हैं, जो जीपीएस मैप कैमरा द्वारा प्रमाणित हैं।
            </span>
          </p>
        </motion.div>

        {/* Filter Navigation Tabs with Animation */}
        <div className="flex justify-center items-center gap-2 mt-10 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "all", label: "All Works", hindi: "सभी कार्य (20)" },
            { id: "elevated", label: "Elevated Rooftops", hindi: "एलिवेटेड स्ट्रक्चर" },
            { id: "inverters", label: "Inverters & PCUs", hindi: "इन्वर्टर व बैटरी" },
            { id: "industrial", label: "Agro & Chakki", hindi: "कृषि पंप व आटा चक्की" },
            { id: "store", label: "Store & Expo", hindi: "शोरूम व एक्सपो" }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setLightboxIndex(null);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-700 via-teal-600 to-emerald-600 text-white shadow-lg shadow-emerald-700/20 font-black"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-700 border border-slate-200 shadow-xs"
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[11px] opacity-90 font-hindi">({tab.hindi})</span>
            </motion.button>
          ))}
        </div>

        {/* Bento Grid with Framer Motion Layout Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 auto-rows-[260px] md:auto-rows-[290px]"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                whileHover={{ y: -6 }}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-200 hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-emerald-600/15 ${item.span}`}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />

                {/* Gradient Scrim for Perfect Typography Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent group-hover:via-slate-950/70 transition-colors duration-300"></div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md ${item.badgeColor}`}>
                    {item.badge}
                  </span>

                  <button
                    type="button"
                    aria-label="View Full Photo"
                    className="w-8 h-8 rounded-full bg-slate-900/85 backdrop-blur-md text-white flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 shadow-md"
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

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold font-hindi line-clamp-1">
                    {item.hindiTitle}
                  </p>

                  <p className="text-xs text-slate-300 line-clamp-2 hidden sm:block leading-relaxed">
                    {item.description}
                  </p>

                  {/* Google Map quick action indicator */}
                  {item.googleMapLink && (
                    <div className="pt-1 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                        <Navigation className="w-3 h-3" />
                        GPS Coordinates Verified • क्लिक कर देखें
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bento Trust Metrics Ribbon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
        >
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-blue-700">2,200+ kW</div>
            <div className="text-xs text-slate-800 font-bold">Installed Capacity • क्षमता</div>
            <p className="text-[11px] text-slate-500">Across Gorakhpur & Eastern UP</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-700">450+ Sites</div>
            <div className="text-xs text-slate-800 font-bold">Happy Families • संतुष्ट परिवार</div>
            <p className="text-[11px] text-slate-500">Residential & Commercial Plants</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-blue-700">₹1,08,000</div>
            <div className="text-xs text-slate-800 font-bold">Max Govt Subsidy • सरकारी सब्सिडी</div>
            <p className="text-[11px] text-slate-500">Direct Bank DBT Credit</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-700">25 Years</div>
            <div className="text-xs text-slate-800 font-bold">Panel Warranty • वारंटी</div>
            <p className="text-[11px] text-slate-500">Tier-1 Mono PERC Reliability</p>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Inspection Modal with Keyboard Navigation & High Clarity */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          >
            
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
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 max-h-[52vh] flex items-center justify-center">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="w-full h-auto max-h-[52vh] object-contain"
                />

                {/* Navigation Arrows */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white flex items-center justify-center transition shadow-lg cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white flex items-center justify-center transition shadow-lg cursor-pointer"
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
                    <span>View Map Location</span>
                  </a>
                )}

                <a
                  href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                    `Hello Er. Satyaprakash (Satyarthi Solar Solution), I saw "${currentLightboxItem.title}" at ${currentLightboxItem.location} on your website gallery. Please share quote and installation details for my location.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-lg shadow-emerald-600/20 transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire on WhatsApp • पूछताछ करें</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}

    </section>
  );
}

export default BentoGallery;
