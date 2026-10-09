import { useState, useMemo } from "react";
import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  Download, 
  Eye, 
  X, 
  CheckCircle2, 
  Filter 
} from "lucide-react";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCertificates = useMemo(() => {
    if (activeFilter === "All") return businessData.certificates;
    return businessData.certificates.filter((c) => c.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="certificates" className="py-24 bg-gradient-to-b from-slate-50 via-slate-100/60 to-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            100% Legally Verified & Certified
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Government Approvals & <span className="text-emerald-700">Brand Authorizations</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Verify our official credentials. Satyarthi Solar Solution is an empanelled vendor with UPNEDA (Govt of UP), GST Registered (09JCNPS2666N1ZE), and Authorized Dealer for LOOM SOLAR, FUJIYAMA SOLAR, and AMAZE.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {["All", "Government Approval", "Tax & Legal Registration", "Dealer Authorization"].map((flt) => (
            <button
              key={flt}
              type="button"
              onClick={() => setActiveFilter(flt)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                activeFilter === flt
                  ? "bg-slate-900 text-amber-400 shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {flt}
            </button>
          ))}
        </div>

        {/* Certificates Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl border-2 border-slate-200 hover:border-emerald-500 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="p-4 bg-gradient-to-r from-emerald-900 to-teal-900 text-white flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {cert.badge}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-200 bg-emerald-950/60 px-2 py-0.5 rounded truncate max-w-[140px]">
                    {cert.code}
                  </span>
                </div>

                {/* Certificate Image Frame */}
                <div className="relative aspect-4/3 max-h-[300px] bg-slate-900/5 p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-sm group-hover:scale-102 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2.5 backdrop-blur-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="bg-white text-slate-950 font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg cursor-pointer hover:bg-amber-400 transition"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect</span>
                    </button>
                    <a
                      href={cert.pdf || cert.image}
                      download
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {cert.type}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700">
                    Authority: {cert.authority}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-500 border-t border-slate-100">
                    {cert.validTill && (
                      <span className="bg-slate-100 px-2 py-0.5 rounded-md">
                        <strong>Valid:</strong> {cert.validTill}
                      </span>
                    )}
                    {cert.date && (
                      <span className="bg-slate-100 px-2 py-0.5 rounded-md">
                        <strong>Issued:</strong> {cert.date}
                      </span>
                    )}
                    <span className="bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Active & Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Full Letter</span>
                </button>
                <a
                  href={cert.pdf || cert.image}
                  download
                  className="py-2.5 px-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>File</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GSTIN & UPNEDA Trust Callout */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-3 shadow-xs">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900">Official Government Verified Entity:</strong> Satyarthi Solar Solution is legally registered under GST with GSTIN <strong>09JCNPS2666N1ZE</strong> (Commercial Tax Department, Govt of Uttar Pradesh) and empanelled with UPNEDA (Vendor Code: <strong>GKP2604066741</strong>). Only certified empanelled vendors can sanction your net metering and disburse the PM Surya Ghar national subsidy.
          </div>
        </div>

      </div>

      {/* Full Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-sm sm:text-base">{selectedCert.title}</h3>
                <p className="text-xs text-emerald-300">{selectedCert.code}</p>
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
                  className="text-slate-400 hover:text-white p-1"
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
                className="text-slate-800 font-bold hover:underline"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
