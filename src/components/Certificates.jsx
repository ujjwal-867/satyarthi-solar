import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  Download, 
  Eye, 
  X, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = [
    { id: "All", en: "All Certificates", hi: "सभी प्रमाणपत्र" },
    { id: "Government Approval", en: "Govt Approvals", hi: "सरकारी मान्यता (UPNEDA)" },
    { id: "Tax & Legal Registration", en: "Tax & GST", hi: "जीएसटी एवं कर पंजीकरण" },
    { id: "Dealer Authorization", en: "Dealer Authorizations", hi: "कंपनी डीलरशिप प्रमाण" }
  ];

  const filteredCertificates = useMemo(() => {
    if (activeFilter === "All") return businessData.certificates;
    return businessData.certificates.filter((c) => c.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="certificates" className="py-24 bg-white text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Legally Verified & Empanelled • सरकारी व कंपनी प्रमाणित</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Government Approvals & <span className="text-emerald-600">Brand Authorizations</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              यूपीनेडा सूचीबद्धता एवं अधिकृत डीलर प्रमाणपत्र
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Verify our official credentials. Satyarthi Solar Solution is an empanelled vendor with UPNEDA (Govt of UP), GST Registered (09JCNPS2666N1ZE), and Authorized Dealer for LOOM SOLAR, FUJIYAMA SOLAR, and AMAZE.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              सत्यार्थी सोलर सॉल्यूशन उत्तर प्रदेश सरकार (UPNEDA) से अधिकृत वेंडर एवं प्रमुख सोलर ब्रांड्स का मान्यता प्राप्त डीलर है।
            </span>
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-2 mt-10 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((flt) => (
            <button
              key={flt.id}
              type="button"
              onClick={() => setActiveFilter(flt.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFilter === flt.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span>{flt.en}</span>
              <span className="text-[10px] opacity-85 font-hindi">({flt.hi})</span>
            </button>
          ))}
        </div>

        {/* Certificates Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
          {filteredCertificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border-2 border-slate-200 hover:border-emerald-500 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="p-4 bg-gradient-to-r from-blue-900 to-emerald-900 text-white flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-300" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {cert.badge}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-200 bg-black/30 px-2 py-0.5 rounded truncate max-w-[140px]">
                    {cert.code}
                  </span>
                </div>

                {/* Certificate Image Frame */}
                <div className="relative aspect-4/3 max-h-[300px] bg-slate-900/5 p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-xs group-hover:scale-102 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2.5 backdrop-blur-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="bg-white text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg cursor-pointer hover:bg-emerald-400 transition"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect • देखें</span>
                    </button>
                    <a
                      href={cert.pdf || cert.image}
                      download
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download • डाउनलोड</span>
                    </a>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {cert.type}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
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
                    <span className="bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Active & Verified • सत्यापित
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
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
          ))}
        </div>

        {/* GSTIN & UPNEDA Trust Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-4 shadow-sm"
        >
          <ShieldCheck className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-slate-900 block text-sm font-bold">
              Official Government Verified Entity • सरकारी व जीएसटी पंजीकृत संस्था:
            </strong>
            <p>
              <strong>Satyarthi Solar Solution (सत्यार्थी सोलर सॉल्यूशन)</strong> is legally registered under GST with GSTIN <strong className="font-mono text-blue-700">09JCNPS2666N1ZE</strong> (Commercial Tax Department, Govt of Uttar Pradesh) and empanelled with UPNEDA (Vendor Code: <strong className="font-mono text-emerald-700">GKP2604066741</strong>).
            </p>
            <p className="text-slate-500 font-hindi">
              केवल यूपीनेडा सूचीबद्ध वेंडर ही आपके नेट मीटर की स्वीकृति करा सकते हैं और पीएम सूर्य घर योजना के तहत ₹1,08,000 की सब्सिडी आपके बैंक खाते में अंतरित करा सकते हैं।
            </p>
          </div>
        </motion.div>

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
                <p className="text-xs text-emerald-300 font-mono">{selectedCert.code}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.pdf || selectedCert.image}
                  download
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
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
                className="max-h-[75vh] object-contain shadow-xl rounded-lg"
              />
            </div>

            <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex justify-between items-center">
              <span>{selectedCert.authority}</span>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="text-blue-600 font-bold hover:underline cursor-pointer"
              >
                Close Window • बंद करें
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
