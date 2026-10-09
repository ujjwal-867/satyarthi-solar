import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  Home, 
  Building2, 
  Factory, 
  Wheat, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  PhoneCall,
  Zap,
  Sparkles
} from "lucide-react";

function Services() {
  const iconComponents = {
    Home: Home,
    Building2: Building2,
    Factory: Factory,
    Wheat: Wheat,
    Wrench: Wrench,
  };

  const handleBookService = (serviceTitle) => {
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      const selectEl = document.querySelector("#service-select");
      if (selectEl) {
        selectEl.value = serviceTitle;
      }
    }
  };

  const bilingualServiceMeta = {
    residential: {
      hindiTitle: "आवासीय रूफटॉप सोलर (घरेलू)",
      hindiTagline: "पीएम सूर्य घर योजना से बिजली का बिल करें ₹0",
      hindiDesc: "उत्तर प्रदेश में घरों व आवासों के लिए सम्पूर्ण रूफटॉप सोलर समाधान। शैडो-फ्री लेआउट से लेकर UPPCL नेट मीटरिंग और बैंक खाते में सीधे सब्सिडी डीबीटी।",
      hindiIdeal: "1 से 5 बीएचके घर, कोठी, विला एवं आवासीय समितियां"
    },
    commercial: {
      hindiTitle: "कमर्शियल सोलर पावर (दुकान व संस्थान)",
      hindiTagline: "बिजली खर्च घटाएं, व्यापार का मुनाफा बढ़ाएं",
      hindiDesc: "स्कूल, कॉलेज, अस्पताल, होटल, शोरूम व पेट्रोल पंप के लिए विशेष कमर्शियल सोलर प्लांट। भारी बिजली दरों से मुक्ति और 40% टैक्स डिप्रिसिएशन लाभ।",
      hindiIdeal: "दुकानें, निजी स्कूल, नर्सिंग होम, पेट्रोल पंप व शॉपिंग कॉम्प्लेक्स"
    },
    industrial: {
      hindiTitle: "औद्योगिक सोलर प्लांट्स (गीडा व फैक्ट्री)",
      hindiTagline: "भारी क्षमता मेगावाट व एचटी/एलटी रूफटॉप",
      hindiDesc: "मैन्युफैक्चरिंग इकाइयों, कोल्ड स्टोरेज, राइस मिल व औद्योगिक शेड (गीडा गोरखपुर) के लिए 20kW से 500kW+ के टर्नकी प्लांट।",
      hindiIdeal: "कोल्ड स्टोरेज, पैकेजिंग फैक्ट्री, फ़ूड प्रोसेसिंग व गीडा इंडस्ट्रीज"
    },
    "aata-chakki": {
      hindiTitle: "सोलर आटा चक्की एवं ट्यूबवेल पंप",
      hindiTagline: "महंगे डीजल से पाएं मुक्ति, सीधे सूर्य से चलाएं 15-20 HP मोटर",
      hindiDesc: "ग्रामीण आटा चक्की, तेल एक्सपेलर व कृषि सिंचाई पंपों के लिए विशेष हाई-टॉर्क सोलर VFD ड्राइव। प्रतिदिन भारी डीजल की बचत।",
      hindiIdeal: "ग्रामीण आटा चक्की, तेल कोल्हू, ट्यूबवेल व कृषि सिंचाई"
    },
    maintenance: {
      hindiTitle: "सोलर मेंटेनेंस एवं वार्षिक एएमसी (AMC)",
      hindiTagline: "अधिकतम बिजली उत्पादन और 25 वर्षों की सुरक्षा",
      hindiDesc: "रोबोटिक पैनल क्लीनिंग, स्ट्रिंग वोल्टेज जांच, इन्वर्टर रिपेयरिंग, अर्थिंग प्रतिरोध और यूपी में 24 घंटे में आपातकालीन सर्विस।",
      hindiIdeal: "मौजूदा सोलर प्लांट मालिक, आवासीय व व्यावसायिक साइट्स"
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50 text-slate-900 border-t border-slate-200/80 relative">
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
            <span>Complete Solar Engineering Solutions • सम्पूर्ण सोलर इंजीनियरिंग सेवाएं</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Specialized Solar <span className="text-emerald-600">Services</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              सत्यार्थी सोलर सॉल्यूशन की विशेषज्ञ सेवाएं
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From residential rooftop net metering to heavy commercial power plants and rural flour mills, we deliver turnkey engineering backed by UPNEDA empanelment.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              घरेलू रूफटॉप नेट मीटरिंग, स्कूल/अस्पताल के प्लांट, और आटा चक्की के लिए सरकारी मानकों पर आधारित टर्नकी सोलर सेवाएं।
            </span>
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {businessData.servicesList.map((service, idx) => {
            const Icon = iconComponents[service.icon] || Home;
            const meta = bilingualServiceMeta[service.id] || {};
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/20 rounded-3xl p-7 border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon and Number */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition">
                    {service.title}
                  </h3>
                  {meta.hindiTitle && (
                    <p className="text-sm font-semibold text-emerald-700 font-hindi mt-0.5">
                      {meta.hindiTitle}
                    </p>
                  )}
                  <p className="text-xs font-semibold text-amber-600 mt-1">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                  {meta.hindiDesc && (
                    <p className="text-xs text-slate-500 mt-1 font-hindi leading-relaxed">
                      {meta.hindiDesc}
                    </p>
                  )}

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Key Highlights • मुख्य विशेषताएं:
                    </p>
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] text-slate-700">
                    <strong className="text-blue-700">Ideal For • उपयुक्त:</strong> {service.idealFor}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => handleBookService(service.title)}
                  className="mt-6 w-full py-3.5 bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-800 font-bold text-xs rounded-xl border border-slate-200 group-hover:border-blue-600 transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Book Consultation • जानकारी व बुकिंग</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Er. Satyaprakash & Team Strip (White SaaS Card with Blue/Green Gradient border) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-2.5">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-700/50">
                <Sparkles className="w-3.5 h-3.5" />
                Engineering Leadership • तकनीकी विशेषज्ञता
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Looking for a Custom Solar Solution in Gorakhpur or UP?
              </h3>
              <p className="text-sm font-semibold text-amber-300 font-hindi">
                गोरखपुर व पूर्वी उत्तर प्रदेश में अपने घर या व्यवसाय के लिए सही सोलर प्लांट चाहते हैं?
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you need a 3kW residential rooftop system, a 15 HP solar flour mill drive, or an industrial MW plant, <strong>Er. Satya Prakash Satyarthi</strong> and our certified engineering team provide complete customized engineering drawings, DISCOM approvals, and guaranteed performance.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() => handleBookService("Custom Solar Consultation")}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-6 rounded-xl text-center text-sm transition shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                Schedule Free Site Visit • निःशुल्क साइट विजिट बुक करें
              </button>
              <a
                href={`tel:${businessData.phone[0]}`}
                className="w-full text-center border border-slate-700 hover:border-slate-500 bg-white/5 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call 24×7: +91 {businessData.phone[0]}</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;