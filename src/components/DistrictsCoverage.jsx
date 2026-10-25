import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Building2, 
  Zap, 
  Sun, 
  Sparkles, 
  Search
} from "lucide-react";
import { ExpressiveKineticText, InteractiveZapBurstButton } from "./MotionEffects";

export default function DistrictsCoverage({ onSelectDistrict }) {
  const [activeDistrictId, setActiveDistrictId] = useState("gorakhpur");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const purvanchalHubs = [
    {
      id: "gorakhpur",
      name: "Gorakhpur (गोरखपुर - Head Office)",
      hindiName: "गोरखपुर (मुख्य कार्यालय • मोतीराम अड्डा)",
      installs: "1,200+ Installations",
      capacity: "1,150+ kW Built",
      landmarks: ["Motiram Adda (Head Office)", "GIDA Industrial Area", "Medical College / AIIMS", "Mohaddipur & Rustampur", "Rail Vihar & Asuran", "Bargadwa & Sahjanwa", "Pipraich & Khorabar"],
      discom: "PuVVNL (Purvanchal Vidyut Vitaran Nigam Ltd)",
      description: "Our primary engineering headquarters. Fast 24-hour on-site rooftop surveys, UPNEDA liaison, and UPPCL net-metering execution across all residential colonies, flour mills, and GIDA factories.",
      popularServices: ["1kW - 10kW PM Surya Ghar Rooftop", "15HP - 25HP Solar Aata Chakki", "Commercial Solar Plants"]
    },
    {
      id: "deoria",
      name: "Deoria (देवरिया)",
      hindiName: "देवरिया (गौरी बाजार, रुद्रपुर, सलेमपुर)",
      installs: "420+ Installations",
      capacity: "410+ kW Built",
      landmarks: ["Gauri Bazar", "Rudrapur", "Salempur", "Bhatpar Rani", "Barhaj", "Rampur Karkhana", "Bhatni Junction"],
      discom: "PuVVNL Deoria Electricity Circle",
      description: "Extensive rural and urban solar installations across Deoria district. Daily site engineers stationed for quick site visits and prompt subsidy paperwork.",
      popularServices: ["PM Surya Ghar ₹1,08,000 Subsidy", "Solar Atta Chakki VFD Drives", "Off-Grid Tubular Systems"]
    },
    {
      id: "kushinagar",
      name: "Kushinagar (कुशीनगर)",
      hindiName: "कुशीनगर (कसिया, पडरौना, हाटा)",
      installs: "310+ Installations",
      capacity: "290+ kW Built",
      landmarks: ["Kasia (Tourist & Hotel Hub)", "Padrauna Town", "Hata", "Tamkuhi Raj", "Ramkola", "Khadda", "Fazilnagar"],
      discom: "PuVVNL Kushinagar Electricity Circle",
      description: "Specialized in residential rooftop solar, tourist hotels in Kasia, cold storages, and agricultural tube-well solar installations across Kushinagar.",
      popularServices: ["Hotel & Commercial Rooftops", "Residential 3kW Zero-Bill", "High-Wattage Mono Bifacial"]
    },
    {
      id: "maharajganj",
      name: "Maharajganj (महराजगंज)",
      hindiName: "महराजगंज (नौतनवा, निचलौल, फरेंदा)",
      installs: "280+ Installations",
      capacity: "260+ kW Built",
      landmarks: ["Nautanwa (Indo-Nepal Border)", "Nichlaul", "Pharenda (Anandnagar)", "Siswa Bazar", "Kolhui", "Brijmanganj"],
      discom: "PuVVNL Maharajganj Circle",
      description: "Empanelled vendor providing heavy-duty solar PCUs and PM Surya Ghar net-metered rooftop solutions for homes, commercial markets, and rice mills in Maharajganj.",
      popularServices: ["Hybrid Inverter Battery Systems", "PM Surya Ghar Net-Meter", "Commercial Rice & Flour Mills"]
    },
    {
      id: "basti",
      name: "Basti (बस्ती)",
      hindiName: "बस्ती (हरैया, कंपनी बाग, रुधौली)",
      installs: "210+ Installations",
      capacity: "200+ kW Built",
      landmarks: ["Harraiya", "Bansi Road", "Company Bagh", "Walterganj", "Rudhauli", "Gauri", "Vikramjot"],
      discom: "PuVVNL Basti Electricity Circle",
      description: "Active solar engineering team servicing Basti with 6-7% JanSamarth bank loan assistance and high-efficiency tier-1 panels for homes and business premises.",
      popularServices: ["6-7% Bank Loan ₹1,800/mo EMI", "Residential Rooftop Solar", "Hospital & School Solar Plants"]
    },
    {
      id: "sant_kabir_nagar",
      name: "Sant Kabir Nagar (संत कबीर नगर - खलीलाबाद)",
      hindiName: "संत कबीर नगर (खलीलाबाद हैंडलूम हब)",
      installs: "190+ Installations",
      capacity: "185+ kW Built",
      landmarks: ["Khalilabad Industrial & Handloom Hub", "Mehdawal", "Dhanghata", "Maghar", "Semariyawan"],
      discom: "PuVVNL Sant Kabir Nagar Circle",
      description: "Proven solar setups for Khalilabad textile units, commercial shops, and residential houses eliminating heavy monthly grid charges.",
      popularServices: ["Industrial Loom Solar Power", "Commercial Shops & Complexes", "PM Surya Ghar Subsidies"]
    },
    {
      id: "siddharthnagar",
      name: "Siddharthnagar (सिद्धार्थनगर - नौगढ़)",
      hindiName: "सिद्धार्थनगर (नौगढ़, बांसी, इटवा)",
      installs: "150+ Installations",
      capacity: "140+ kW Built",
      landmarks: ["Naugarh City", "Bansi", "Itwa", "Shohratgarh", "Domariyaganj", "Barhni"],
      discom: "PuVVNL Siddharthnagar Circle",
      description: "Turnkey solar EPC including elevated galvanized pergola structures for flood-safe, hailstorm-resistant rooftops in Siddharthnagar.",
      popularServices: ["Elevated Pergola Structures", "Off-Grid Heavy Inverters", "Residential Rooftop Net Metering"]
    },
    {
      id: "azamgarh_mau_ballia",
      name: "Azamgarh, Mau & Ballia (आजमगढ़, मऊ व बलिया)",
      hindiName: "आजमगढ़, मऊ एवं बलिया क्लस्टर",
      installs: "160+ Installations",
      capacity: "155+ kW Built",
      landmarks: ["Lalganj & Phoolpur (Azamgarh)", "Ghosi & Kopaganj (Mau)", "Rasra & Bairia (Ballia)", "Sikanderpur"],
      discom: "PuVVNL Azamgarh Distribution Zone",
      description: "Dedicated project delivery for eastern UP families and entrepreneurs looking for genuine Loom Solar, Tata Power, and Waaree systems.",
      popularServices: ["PM Surya Ghar Rooftops", "Solar Aata Chakki Systems", "6-7% Govt Loan Support"]
    }
  ];

  // All-UP Major Districts for SEO and State-wide coverage
  const allUPDistricts = [
    { name: "Gorakhpur", hi: "गोरखपुर", region: "east", hub: true },
    { name: "Deoria", hi: "देवरिया", region: "east", hub: true },
    { name: "Kushinagar", hi: "कुशीनगर", region: "east", hub: true },
    { name: "Maharajganj", hi: "महराजगंज", region: "east", hub: true },
    { name: "Basti", hi: "बस्ती", region: "east", hub: true },
    { name: "Sant Kabir Nagar", hi: "संत कबीर नगर", region: "east", hub: true },
    { name: "Siddharthnagar", hi: "सिद्धार्थनगर", region: "east", hub: true },
    { name: "Azamgarh", hi: "आजमगढ़", region: "east", hub: true },
    { name: "Mau", hi: "मऊ", region: "east", hub: true },
    { name: "Ballia", hi: "बलिया", region: "east", hub: true },
    { name: "Varanasi", hi: "वाराणसी (काशी)", region: "east" },
    { name: "Prayagraj", hi: "प्रयागराज (इलाहाबाद)", region: "east" },
    { name: "Ayodhya", hi: "अयोध्या धाम", region: "central" },
    { name: "Lucknow", hi: "लखनऊ (राजधानी)", region: "central" },
    { name: "Kanpur", hi: "कानपुर", region: "central" },
    { name: "Barabanki", hi: "बाराबंकी", region: "central" },
    { name: "Rae Bareli", hi: "रायबरेली", region: "central" },
    { name: "Sitapur", hi: "सीतापुर", region: "central" },
    { name: "Unnao", hi: "उन्नाव", region: "central" },
    { name: "Sultanpur", hi: "सुल्तानपुर", region: "central" },
    { name: "Amethi", hi: "अमेठी", region: "central" },
    { name: "Jaunpur", hi: "जौनपुर", region: "east" },
    { name: "Ghazipur", hi: "गाजीपुर", region: "east" },
    { name: "Mirzapur", hi: "मिर्जापुर", region: "east" },
    { name: "Sonbhadra", hi: "सोनभद्र", region: "east" },
    { name: "Chandauli", hi: "चंदौली", region: "east" },
    { name: "Pratapgarh", hi: "प्रतापगढ़", region: "east" },
    { name: "Agra", hi: "आगरा", region: "west" },
    { name: "Mathura", hi: "मथुरा", region: "west" },
    { name: "Aligarh", hi: "अलीगढ़", region: "west" },
    { name: "Meerut", hi: "मेरठ", region: "west" },
    { name: "Noida / Greater Noida", hi: "नोएडा / ग्रेटर नोएडा", region: "west" },
    { name: "Ghaziabad", hi: "गाजियाबाद", region: "west" },
    { name: "Bareilly", hi: "बरेली", region: "west" },
    { name: "Moradabad", hi: "मुरादाबाद", region: "west" },
    { name: "Saharanpur", hi: "सहारनपुर", region: "west" },
    { name: "Muzaffarnagar", hi: "मुजफ्फरनगर", region: "west" },
    { name: "Firozabad", hi: "फिरोजाबाद", region: "west" },
    { name: "Jhansi", hi: "झाँसी", region: "bundelkhand" },
    { name: "Lalitpur", hi: "लalitपुर", region: "bundelkhand" },
    { name: "Banda", hi: "बांदा", region: "bundelkhand" },
    { name: "Jalaun / Orai", hi: "जालौन / उरई", region: "bundelkhand" },
    { name: "Chitrakoot", hi: "चित्रकूट", region: "bundelkhand" },
    { name: "Hamirpur", hi: "हमीरपुर", region: "bundelkhand" }
  ];

  const handleDistrictAction = (districtName) => {
    if (onSelectDistrict) {
      onSelectDistrict(districtName);
    } else {
      const contactEl = document.querySelector("#contact");
      if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppDistrict = (districtName) => {
    const text = `Hello Er. Satyaprakash, I want a rooftop solar consultation and free site survey for my property in ${districtName}, Uttar Pradesh under UPNEDA / PM Surya Ghar scheme. Please share the details.`;
    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const filteredUPDistricts = allUPDistricts.filter((d) => {
    const matchesRegion = selectedRegion === "all" || d.region === selectedRegion;
    const matchesSearch = searchQuery === "" || 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      d.hi.includes(searchQuery);
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="districts-coverage" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      {/* Soft Ambient Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Expressive Kinetic Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>All Uttar Pradesh Coverage • सम्पूर्ण उत्तर प्रदेश में सेवाएं</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <ExpressiveKineticText
              text="Authorized Solar Installations Across All 75 Districts of Uttar Pradesh"
              highlightWords={["Solar", "75", "Districts", "Uttar", "Pradesh"]}
            />
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              गोरखपुर, पूर्वांचल एवं समस्त उत्तर प्रदेश में अधिकृत सोलर सेवाएं
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            As an empanelled vendor with UPNEDA and licensed dealer for top solar brands, Satyarthi Solar Solution delivers complete turnkey rooftop solar, net-metering, and subsidy processing across all 75 districts of Uttar Pradesh.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              गोरखपुर, देवरिया, कुशीनगर, महराजगंज, बस्ती, संतकबीरनगर सहित पूरे उत्तर प्रदेश में 24 घंटे में फ्री रूफटॉप सर्वे।
            </span>
          </p>
        </motion.div>

        {/* Primary Purvanchal Hubs: Interactive Showcase Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Primary Purvanchal Installation Hubs • प्रमुख क्षेत्रीय केंद्र
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              Click any district to explore landmarks & installations
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" style={{ perspective: "1000px" }}>
            {purvanchalHubs.map((hub, idx) => {
              const isSelected = activeDistrictId === hub.id;
              return (
                <motion.div
                  key={hub.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.22 }}
                  onClick={() => setActiveDistrictId(hub.id)}
                  className={`relative p-5 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden group desktop-gallery-card-hover ${
                    isSelected
                      ? "bg-white border-blue-600 shadow-xl shadow-blue-600/10"
                      : "bg-white/90 border-slate-200"
                  }`}
                >
                  {/* Desktop-Only Gallery Shine Sweep */}
                  <div className="desktop-shine-sweep" />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {hub.installs}
                      </span>
                      <InteractiveZapBurstButton initialCount={140 + idx * 23} label="Verified" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                        <MapPin className={`w-4 h-4 ${isSelected ? "text-blue-600" : "text-slate-400"}`} />
                        <span>{hub.name.split(" ")[0]}</span>
                      </h4>
                      <p className="text-xs text-slate-600 font-hindi mt-0.5">
                        {hub.hindiName}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {hub.description}
                    </p>

                    {/* Key Landmarks Tag Cloud */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {hub.landmarks.slice(0, 3).map((lm, lIdx) => (
                        <span key={lIdx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                          {lm}
                        </span>
                      ))}
                      {hub.landmarks.length > 3 && (
                        <span className="text-[10px] text-blue-600 font-bold px-1 py-0.5">
                          +{hub.landmarks.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDistrictAction(hub.name.split(" ")[0]);
                      }}
                      className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                    >
                      <span>Book Survey</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppDistrict(hub.name.split(" ")[0]);
                      }}
                      className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition cursor-pointer shadow-xs"
                      aria-label="WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Selected Hub Detailed Drawer */}
        {activeDistrictId && (
          <AnimatePresence mode="wait">
            {(() => {
              const currentHub = purvanchalHubs.find((h) => h.id === activeDistrictId);
              if (!currentHub) return null;
              return (
                <motion.div
                  key={currentHub.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-900/60"
                >
                  <div className="grid lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-8 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-bold">
                          ⚡ {currentHub.installs} • {currentHub.capacity}
                        </span>
                        <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/40 px-3 py-1 rounded-full font-bold">
                          🏢 Discom: {currentHub.discom}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-white">
                        {currentHub.name} • Solar EPC & PM Surya Ghar Center
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed font-hindi">
                        {currentHub.description}
                      </p>

                      {/* Landmarks */}
                      <div className="pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-2">
                          Covered Towns, Blocks & Industrial Pockets ({currentHub.name.split(" ")[0]}):
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {currentHub.landmarks.map((lm, lmIdx) => (
                            <span key={lmIdx} className="text-xs bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1 rounded-xl">
                              ✓ {lm}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Booking Card */}
                    <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 p-5 rounded-2xl space-y-3">
                      <div className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                        Prompt Rooftop Survey ({currentHub.name.split(" ")[0]})
                      </div>
                      <p className="text-xs text-slate-400">
                        Our local engineering van is available for shadow analysis, structure measurements, and instant ₹1,08,000 subsidy processing.
                      </p>

                      <div className="space-y-2 pt-1">
                        <button
                          type="button"
                          onClick={() => handleDistrictAction(currentHub.name.split(" ")[0])}
                          className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
                        >
                          <span>Schedule Free Survey in {currentHub.name.split(" ")[0]}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleWhatsAppDistrict(currentHub.name.split(" ")[0])}
                          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>WhatsApp Quote for {currentHub.name.split(" ")[0]}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        )}

        {/* State-Wide All 75 Districts Explorer Strip */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>State-Wide Network: All 75 Districts of Uttar Pradesh</span>
              </h3>
              <p className="text-xs text-slate-500 font-hindi mt-0.5">
                उत्तर प्रदेश के सभी 75 जिलों में पीएम सूर्य घर रूफटॉप सोलर, नेट मीटरिंग एवं आटा चक्की प्लांट
              </p>
            </div>

            {/* Region Filter Chips & Search Input */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search district (e.g. Lucknow, Varanasi)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 w-48 sm:w-56"
                />
              </div>

              <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-xs">
                {[
                  { id: "all", label: "All UP" },
                  { id: "east", label: "Purvanchal (East)" },
                  { id: "central", label: "Central" },
                  { id: "west", label: "West" },
                  { id: "bundelkhand", label: "Bundelkhand" }
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setSelectedRegion(r.id)}
                    className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer text-[11px] ${
                      selectedRegion === r.id
                        ? "bg-white text-blue-700 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive District Badges */}
          <div className="flex flex-wrap gap-2 pt-2 max-h-56 overflow-y-auto pr-1">
            {filteredUPDistricts.map((d, dIdx) => (
              <motion.button
                key={dIdx}
                type="button"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleDistrictAction(d.name)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1.5 cursor-pointer ${
                  d.hub
                    ? "bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900"
                }`}
              >
                <MapPin className={`w-3 h-3 ${d.hub ? "text-blue-600" : "text-emerald-600"}`} />
                <span>{d.name}</span>
                <span className="text-[10px] opacity-75 font-hindi">({d.hi})</span>
                {d.hub && (
                  <span className="text-[9px] bg-blue-600 text-white px-1.5 py-0.2 rounded font-bold">
                    Hub
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Bottom Trust Guarantee Strip */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span><strong>Government Empanelled Vendor:</strong> Vendor Code GKP2604066741 active across all UP Discoms.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500">Need immediate engineer assistance in your district?</span>
              <a
                href={`tel:${businessData.phone[0]}`}
                className="font-bold text-blue-600 hover:underline"
              >
                Call +91 {businessData.phone[0]}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
