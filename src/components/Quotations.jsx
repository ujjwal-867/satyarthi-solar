import { useState } from "react";
import { businessData } from "../data/businessData";
import { 
  FileText, 
  Download, 
  Eye, 
  X, 
  CheckCircle2, 
  Sparkles, 
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
    <section id="quotations" className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <Coins className="w-3.5 h-3.5 text-amber-600" />
            {lang === "hi" ? "सरकारी सब्सिडी उपरांत सोलर रेट्स" : "Official Rate Cards & Quotation Flyers"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {lang === "hi" ? (
              <>सोलर <span className="text-amber-500">कोटेशन एवं रेट</span> चार्ट्स</>
            ) : (
              <>Official Solar <span className="text-amber-500">Quotations & Pricing</span> Charts</>
            )}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {lang === "hi"
              ? "यूपीनेडा और एमएनआरई दिशा-निर्देशों के अनुसार पारदर्शी मूल्य निर्धारण। आधिकारिक दर पत्रक, पीएम सूर्य घर सब्सिडी विवरण और बैंक लोन ईएमआई ऑफर देखें।"
              : "Transparent pricing as per UPNEDA and MNRE guidelines. Inspect our officially published rate flyers, PM Surya Ghar subsidy matrices, and bank loan EMI offers."}
          </p>
        </div>

        {/* Quotation Highlights Alert */}
        <div className="mt-10 max-w-4xl mx-auto bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-5 rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-400 text-slate-950 rounded-xl font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-amber-300 text-sm block">Special Government Subsidy Notification:</strong>
              <p className="text-emerald-100 mt-0.5">
                PM Surya Ghar subsidy is valid up to <strong>31st March 2027</strong>. 3 kW plant installed at only <strong>₹1,800/month</strong> bank EMI at 6-7% interest!
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
              "Hello Er. Satyaprakash, please send me the official PM Surya Ghar quotation sheet for my home."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-2.5 rounded-xl transition shrink-0 whitespace-nowrap"
          >
            Request Rate PDF on WhatsApp
          </a>
        </div>

        {/* Quotation Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {businessData.quotationFlyers.map((flyer) => (
            <div
              key={flyer.id}
              className="bg-white rounded-3xl border-2 border-slate-200 hover:border-amber-400 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-4/3 bg-slate-900 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={flyer.image}
                    alt={flyer.title}
                    loading="lazy"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-102 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedFlyer(flyer)}
                      className="bg-white text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg cursor-pointer hover:bg-amber-400 transition"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Zoom Full Chart</span>
                    </button>
                    <a
                      href={flyer.image}
                      download={`satyarthi-solar-${flyer.id}.jpg`}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>Save Image</span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    Official Rate Card
                  </span>
                  <h3 className="text-xl font-black text-slate-900 leading-snug">
                    {flyer.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700">
                    {flyer.subtitle}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-100">
                    {flyer.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Get This Rate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Brands Grid Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Direct Manufacturer Associations
            </span>
            <h3 className="text-2xl font-black text-slate-900">
              Our Official Partner Brands
            </h3>
            <p className="text-xs text-slate-500">
              We supply only 100% genuine Tier-1 solar panels, batteries, inverters, and electronics.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 text-center sm:text-left">
              Solar Panels & Inverter Brands:
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              {businessData.partnerBrands.solar.map((b, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-2xs hover:border-emerald-500 transition">
                  <span className="text-slate-900">{b.name}</span>
                  <span className="text-[10px] text-slate-400 block font-normal">{b.category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 text-center sm:text-left">
              Batteries, Inverters & Home Appliances Brands:
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              {businessData.partnerBrands.electronicsAndBatteries.map((b, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-2xs hover:border-amber-400 transition">
                  <span className="text-slate-900">{b.name}</span>
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
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-sm sm:text-base">{selectedFlyer.title}</h3>
                <p className="text-xs text-amber-400">{selectedFlyer.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedFlyer.image}
                  download={`satyarthi-solar-${selectedFlyer.id}.jpg`}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setSelectedFlyer(null)}
                  className="text-slate-400 hover:text-white p-1"
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

            <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex justify-between items-center">
              <span className="text-emerald-700 font-semibold">Satyarthi Solar Solution • Gorakhpur (273202)</span>
              <button
                type="button"
                onClick={() => handleWhatsAppQuote(selectedFlyer.title)}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl transition"
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
