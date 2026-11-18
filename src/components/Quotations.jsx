import { useState } from "react";
import { businessData } from "../data/businessData";
import { 
  FileText, 
  Download, 
  Eye, 
  X, 
  CheckCircle2, 
  BadgeCheck, 
  ArrowRight, 
  MessageCircle, 
  Coins, 
  ShieldCheck, 
  Calendar 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Quotations() {
  const { lang, t } = useLanguage();
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  const handleWhatsAppQuote = (flyerTitle) => {
    const text = lang === "hi"
      ? `नमस्ते इंजी. सत्यप्रकाश जी, मैंने "${flyerTitle}" का कोटेशन चार्ट देखा। कृपया मुझे विस्तृत एस्टीमेट भेजें व साइट विजिट तय करें।`
      : `Hello Er. Satyaprakash, I saw the official quotation chart for "${flyerTitle}". Please send me the detailed itemized estimate and book a site visit.`;
    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="quotations" className="py-10 sm:py-12 bg-white border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Split Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[#E5E0D8]">
          <div className="space-y-1.5 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#083D2A] flex items-center gap-1.5">
              <Coins className="w-3.5 h-3.5 text-[#083D2A]" />
              <span>Official Rate Cards &amp; Quotations • आधिकारिक सोलर कोटेशन</span>
            </p>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1F17] tracking-tight leading-tight">
              Official Solar <span className="text-[#B5850A]">Rate Cards</span>
            </h2>
            <p className="text-sm font-bold text-[#083D2A] font-hindi">
              सत्यार्थी सोलर सॉल्यूशन • आधिकारिक कोटेशन एवं रेट चार्ट
            </p>
          </div>

          <div className="max-w-md space-y-1.5 lg:text-right">
            <p className="text-[#4B5550] text-xs sm:text-sm leading-relaxed">
              Transparent pricing as per UPNEDA and MNRE guidelines with PM Surya Ghar subsidy matrices and 6%–7% bank EMI options.
            </p>
            <p className="text-[#083D2A] font-semibold text-xs font-hindi">
              सब्सिडी के बाद नेट देय राशि की स्पष्ट जानकारी
            </p>
          </div>
        </div>

        {/* Quotation Highlights Alert */}
        <div className="mt-6 sm:mt-8 bg-[#083D2A] text-white p-5 rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs border border-[#0F4D37]">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-[#F5C441] text-[#0D1F17] rounded-2xl font-bold shrink-0">
              <Calendar className="w-5 h-5 text-[#0D1F17]" />
            </div>
            <div className="space-y-0.5">
              <strong className="text-white text-sm block">
                Special Government Subsidy Notification • सरकारी सब्सिडी सूचना 2026:
              </strong>
              <p className="text-slate-200 mt-0.5">
                PM Surya Ghar subsidy valid till <strong>31st March 2027</strong>. 3 kW system at only <strong>₹1,800/month</strong> bank EMI.
              </p>
              <p className="text-[#C7D6CE] font-medium text-[11px]">
                3 किलोवाट सोलर प्लांट मात्र ₹1,800 प्रति माह बैंक ईएमआई पर स्थापित कराएं!
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
              "Hello Er. Satyaprakash, please send me the official Satyarthi Solar Solution quotation sheet for my home."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#F5C441] hover:bg-[#eab62e] text-[#0D1F17] font-bold px-5 py-2.5 rounded-xl transition shrink-0 whitespace-nowrap shadow-md text-xs"
          >
            Request Rate PDF
          </a>
        </div>

        {/* Quotation Cards 3D Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-6 sm:mt-8">
          {businessData.quotationFlyers.map((flyer) => (
            <div
              key={flyer.id}
              className="relative bg-white rounded-2xl border-2 border-[#E5E0D8] overflow-hidden shadow-md desktop-gallery-card-hover flex flex-col justify-between group"
            >

              <div>
                {/* Image Frame */}
                <div className="relative aspect-4/3 bg-slate-900 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={flyer.image}
                    alt={flyer.title}
                    loading="lazy"
                    className="w-full h-full object-contain rounded-xl desktop-image-zoom"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedFlyer(flyer)}
                      className="bg-white text-[#0D1F17] font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg cursor-pointer hover:bg-[#F5C441] transition"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Zoom Full Chart</span>
                    </button>
                    <a
                      href={flyer.image}
                      download={`satyarthi-solar-${flyer.id}.jpg`}
                      className="bg-[#083D2A] hover:bg-[#062E20] text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>Save Image</span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A6E04] bg-[#FDF3D0] border border-[#EFE0A8] px-2.5 py-0.5 rounded-full">
                    Official Rate Card
                  </span>
                  <h3 className="text-xl font-bold text-[#0D1F17] leading-snug">
                    {flyer.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#083D2A]">
                    {flyer.subtitle}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-100">
                    {flyer.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4B5550]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#083D2A] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedFlyer(flyer)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Full Resolution</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleWhatsAppQuote(flyer.title)}
                  className="flex-1 py-2.5 bg-[#F5C441] hover:bg-[#F5C441] text-[#0D1F17] text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Get This Rate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Brands Grid Banner */}
        <div className="mt-8 sm:mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-slate-100">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#083D2A]">
                Direct Manufacturer Associations
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D1F17]">
                Our Official Partner Brands
              </h3>
            </div>
            <p className="text-xs text-slate-500 sm:text-right max-w-sm">
              We supply only 100% genuine Tier-1 solar panels, batteries, inverters, and electronics.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 text-left">
              Solar Panels & Inverter Brands:
            </p>
            <div className="flex flex-wrap items-center justify-start gap-2.5">
              {businessData.partnerBrands.solar.map((b, idx) => (
                <div key={idx} className="bg-[#FAF8F4] border border-[#E5E0D8] px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-2xs hover:border-[#083D2A] transition group">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#0D1F17] group-hover:text-[#083D2A] transition">{b.name}</span>
                    {b.role && (
                      <span className="text-[9px] bg-[#FAF8F4] text-[#083D2A] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">
                        {b.role}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 block font-normal">{b.category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 text-left">
              Batteries, Inverters & Home Appliances Brands:
            </p>
            <div className="flex flex-wrap items-center justify-start gap-2.5">
              {businessData.partnerBrands.electronicsAndBatteries.map((b, idx) => (
                <div key={idx} className="bg-[#FAF8F4] border border-[#E5E0D8] px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-2xs hover:border-[#F5C441] transition">
                  <span className="text-[#0D1F17]">{b.name}</span>
                  <span className="text-[10px] text-slate-400 block font-normal">{b.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Full Modal Viewer */}
      {selectedFlyer && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedFlyer(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-sm sm:text-base">{selectedFlyer.title}</h3>
                <p className="text-xs text-[#F5C441]">{selectedFlyer.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedFlyer.image}
                  download={`satyarthi-solar-${selectedFlyer.id}.jpg`}
                  className="bg-[#083D2A] hover:bg-[#062E20] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setSelectedFlyer(null)}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-4 overflow-y-auto flex-1 bg-slate-950 flex items-center justify-center">
              <img
                src={selectedFlyer.image}
                alt={selectedFlyer.title}
                className="max-h-[75vh] object-contain shadow-2xl rounded-lg"
              />
            </div>

            <div className="p-4 bg-white border-t border-[#E5E0D8] text-xs text-[#4B5550] flex justify-between items-center">
              <span className="text-[#083D2A] font-semibold">Satyarthi Solar Solution • Gorakhpur (273202)</span>
              <button
                type="button"
                onClick={() => handleWhatsAppQuote(selectedFlyer.title)}
                className="bg-[#F5C441] hover:bg-[#F5C441] text-[#0D1F17] font-bold px-4 py-2 rounded-xl transition cursor-pointer"
              >
                Inquire for This Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Quotations;
