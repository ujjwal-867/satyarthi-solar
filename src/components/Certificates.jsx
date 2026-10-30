import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  Award, 
  Download, 
  Eye, 
  X, 
  CheckCircle2, 
  Zap,
  MapPin
} from "lucide-react";
import {
  ExpressiveKineticText,
  KineticMarqueeStrip,
  InteractiveZapBurstButton
} from "./MotionEffects";

function Certificates({ isStandalonePage = false }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loadedCerts, setLoadedCerts] = useState({});
  const [loadAllCerts, setLoadAllCerts] = useState(() => Boolean(isStandalonePage));

  // Automatically load all certificates when the user navigates into or clicks this section
  useEffect(() => {
    const handler = (e) => {
      if (e.detail?.section === "certificates" || e.detail?.section === "all") {
        setLoadAllCerts(true);
      }
    };
    window.addEventListener("load-section-images", handler);
    return () => window.removeEventListener("load-section-images", handler);
  }, []);

  const handleLoadSingle = (certId) => {
    setLoadedCerts((prev) => ({ ...prev, [certId]: true }));
  };

  const filterTabs = [
    { id: "All", en: "All", hi: "सभी" },
    { id: "Government Approval", en: "Govt & Awards", hi: "सरकारी" },
    { id: "Tax & Legal Registration", en: "GST & MSME", hi: "पंजीकरण" },
    { id: "Dealer Authorization", en: "Brand Dealers", hi: "डीलरशिप" }
  ];

  const filteredCertificates = useMemo(() => {
    if (activeFilter === "All") return businessData.certificates;
    return businessData.certificates.filter((c) => c.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="certificates" className="pt-10 pb-12 sm:pt-12 sm:pb-14 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      {/* Expressive Kinetic Typography Marquee Ribbon */}
      <KineticMarqueeStrip
        items={[
          "UPNEDA EMPANELLED VENDOR GKP2604066741",
          "SAUR SAMMAN AWARD HONOREE",
          "GSTIN 09JCNPS2666N1ZE",
          "MSME UDYAM-UP-32-0049022",
          "LOOM SOLAR AUTHORIZED DEALER",
          "FUJIYAMA SOLAR PARTNER",
          "AMAZE AUTHORIZED CHANNEL",
          "2500+ VERIFIED INSTALLATIONS"
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Expressive Kinetic Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>100% Legally Verified & Empanelled • सरकारी व कंपनी प्रमाणित</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <ExpressiveKineticText
              text="Government Approvals & Brand Authorizations"
              highlightWords={["Government", "Brand", "Authorizations"]}
              highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-amber-500"
            />
            <span className="block text-lg sm:text-xl font-bold text-blue-900 mt-2 font-hindi">
              यूपीनेडा सूचीबद्धता, सौर सम्मान एवं अधिकृत डीलरशिप प्रमाणपत्र
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Official government empanelment (UPNEDA: <strong>GKP2604066741</strong>), state awards, GST/MSME registrations, and tier-1 brand dealerships backing every solar installation.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((flt) => (
            <button
              key={flt.id}
              type="button"
              onClick={() => setActiveFilter(flt.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 desktop-button-hover ${
                activeFilter === flt.id
                  ? "bg-[#0a1e3b] text-white shadow-lg shadow-blue-950/20"
                  : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span>{flt.en}</span>
              <span className="text-[10px] opacity-85 font-hindi">• {flt.hi}</span>
            </button>
          ))}
        </div>

        {/* Certificates 3D Bento Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 max-w-7xl mx-auto" style={{ perspective: "1100px" }}>
          {filteredCertificates.map((cert, idx) => {
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25 }}
                className="relative bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-md desktop-gallery-card-hover flex flex-col justify-between group"
              >
                {/* Desktop-Only Gallery Shine Sweep */}
                <div className="desktop-shine-sweep" />

                <div>
                  {/* Header Tag */}
                  <div className="p-4 bg-[#0a1e3b] text-white flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-400" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        {cert.badge}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-300 bg-black/40 px-2 py-0.5 rounded truncate max-w-[140px]">
                      {cert.code}
                    </span>
                  </div>

                  {/* Certificate Image Frame - Visible Smoothly while Scrolling */}
                  <div className="relative aspect-4/3 max-h-[280px] bg-slate-900/5 p-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain rounded-lg shadow-xs desktop-image-zoom"
                    />
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2.5 backdrop-blur-xs z-30">
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="bg-white text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg cursor-pointer hover:bg-amber-400 transition"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Inspect • देखें</span>
                      </button>
                      <a
                        href={cert.pdf || cert.image}
                        download
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg transition"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download • डाउनलोड</span>
                      </a>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6 space-y-3 relative z-10">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                        {cert.type}
                      </span>
                      <InteractiveZapBurstButton initialCount={128 + idx * 17} label="Verified" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-700">
                      Authority • प्राधिकारी: {cert.authority}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-500 border-t border-slate-100">
                      {cert.validTill && (
                        <span className="bg-slate-100 px-2 py-0.5 rounded-md">
                          <strong>Valid • वैधता:</strong> {cert.validTill}
                        </span>
                      )}
                      {cert.date && (
                        <span className="bg-slate-100 px-2 py-0.5 rounded-md">
                          <strong>Issued • जारी:</strong> {cert.date}
                        </span>
                      )}
                      <span className="bg-blue-50 text-blue-900 font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-blue-700" /> Active & Verified • सत्यापित
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex gap-2.5 relative z-10">
                  <button
                    type="button"
                    onClick={() => {
                      handleLoadSingle(cert.id);
                      setSelectedCert(cert);
                    }}
                    className="flex-1 py-2.5 bg-[#0a1e3b] hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Full Letter • पूरा पत्र देखें</span>
                  </button>
                  <a
                    href={cert.pdf || cert.image}
                    download
                    className="py-2.5 px-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>File</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Official Registered Legal Details & Address Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-blue-900 font-bold text-xs uppercase tracking-wider block">
              🏛️ Registered Physical Office & Showroom • पंजीकृत पता
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Satyarthi Solar Solution (Prop. Er. Satya Prakash Satyarthi)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              📍 <strong>Address:</strong> {businessData.address} • GSTIN: <strong>{businessData.gstin}</strong> • Udyam: <strong>{businessData.udyamNo}</strong> • UPNEDA Vendor Code: <strong>{businessData.vendorCode}</strong>
            </p>
          </div>
          <a
            href={businessData.googleMapLink}
            target="_blank"
            rel="noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-3 rounded-xl text-xs text-center transition shadow-md whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4 text-slate-950" />
            <span>Google Maps • लोकेशन ↗</span>
          </a>
        </div>

      </div>

      {/* Full Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-sm sm:text-base">{selectedCert.title}</h3>
                <p className="text-xs text-amber-300 font-mono">{selectedCert.code}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.pdf || selectedCert.image}
                  download
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-4 overflow-y-auto flex-1 bg-slate-100 flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-md bg-white"
              />
            </div>

            <div className="p-4 bg-white border-t border-slate-200 flex justify-between items-center text-xs text-slate-600">
              <span>Authority: <strong>{selectedCert.authority}</strong></span>
              <button
                onClick={() => setSelectedCert(null)}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-4 py-1.5 rounded-lg cursor-pointer"
              >
                Close • बंद करें
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
