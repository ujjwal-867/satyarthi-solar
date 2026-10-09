import { useState } from "react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { HelpCircle, ChevronDown, MessageCircle, PhoneCall, Sparkles } from "lucide-react";

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  const bilingualFaqs = [
    {
      qEn: "What is PM Surya Ghar Muft Bijli Yojna and how much subsidy will I get in UP?",
      qHi: "पीएम सूर्य घर योजना क्या है और उत्तर प्रदेश में कितनी सरकारी सब्सिडी मिलेगी?",
      aEn: "Under PM Surya Ghar Muft Bijli Yojna in Uttar Pradesh, residential consumers get up to ₹78,000 Central Govt Subsidy (MNRE) plus ₹30,000 State Govt Subsidy (UPNEDA), totaling up to ₹1,08,000 for a 3kW system. Satyarthi Solar Solution is an empanelled vendor (Code: GKP2604066741), which means your subsidy is directly approved and credited to your bank account via DBT.",
      aHi: "उत्तर प्रदेश में पीएम सूर्य घर योजना के तहत 3 किलोवाट तक के घरेलू रूफटॉप पर कुल ₹1,08,000 (केंद्र से ₹78,000 + उप्र सरकार से ₹30,000) तक की सब्सिडी मिलती है। सत्यार्थी सोलर सॉल्यूशन (वेंडर कोड: GKP2604066741) यूपीनेडा अधिकृत वेंडर है, जिससे सब्सिडी सीधे आपके बैंक खाते में सुरक्षित आती है।"
    },
    {
      qEn: "What is the bank loan EMI facility available for 3kW rooftop solar?",
      qHi: "3 किलोवाट सोलर रूफटॉप के लिए बैंक लोन एवं मासिक ईएमआई (EMI) की क्या सुविधा है?",
      aEn: "Government nationalized banks provide rooftop solar loans at low interest rates (6% to 7%). A 3 kW solar plant can be installed with an easy EMI starting at just ₹1,800 per month, which is lower than typical electricity bills!",
      aHi: "सरकारी राष्ट्रीयकृत बैंक मात्र 6% से 7% ब्याज दर पर सोलर रूफटॉप लोन प्रदान करते हैं। 3 किलोवाट का प्लांट मात्र ₹1,800/- प्रति माह की आसान ईएमआई (EMI) पर लगाया जा सकता है।"
    },
    {
      qEn: "Is there a deadline to claim the PM Surya Ghar subsidy?",
      qHi: "क्या पीएम सूर्य घर योजना की सब्सिडी का लाभ लेने की कोई अंतिम तिथि (Deadline) है?",
      aEn: "Yes! As per official notification, this special Uttar Pradesh subsidy scheme is valid till 31st March 2027. After 31 March 2027, the subsidy benefit will not be available. We strongly recommend booking your site survey today.",
      aHi: "हाँ! सरकारी अधिसूचना के अनुसार यह विशेष सब्सिडी योजना 31 मार्च 2027 तक ही मान्य है। इसके उपरांत सब्सिडी का लाभ समाप्त हो जाएगा। इसलिए समय रहते अपनी निःशुल्क रूफ विजिट बुक करें।"
    },
    {
      qEn: "What is Net Metering with UPPCL and how does it reduce electricity bills to zero?",
      qHi: "UPPCL नेट मीटरिंग क्या है और यह बिजली बिल को शून्य कैसे करती है?",
      aEn: "A bidirectional (net) meter replaces your existing meter. When your solar system generates more power than you use during the daytime, excess units are exported to the government grid. At night, you draw power from the grid. You only pay for the net difference. Er. Satyaprakash handles the complete liaison and meter installation with UPPCL.",
      aHi: "नेट मीटर आपके वर्तमान मीटर की जगह लगता है। दिन में जब सोलर ज्यादा बिजली बनाता है, तो वह सरकारी ग्रिड में भेज दी जाती है। रात में आप ग्रिड से बिजली लेते हैं। केवल दोनों के अंतर का बिल आता है। UPPCL नेट मीटरिंग की पूरी प्रक्रिया हम खुद पूर्ण कराते हैं।"
    },
    {
      qEn: "What warranty and service does Satyarthi Solar Solution provide?",
      qHi: "सत्यार्थी सोलर सॉल्यूशन क्या वारंटी और सर्विस प्रदान करता है?",
      aEn: "We provide a 25-Year Performance Warranty on Solar Panels and 5 Years of Free After-Sales Service and Maintenance directly from our Gorakhpur Motiram Adda service desk.",
      aHi: "हम सोलर पैनल्स पर 25 साल की लीनियर परफॉर्मेंस वारंटी तथा अपने मोतिराम अड्डा गोरखपुर सर्विस सेंटर से 5 साल की पूर्ण निःशुल्क आफ्टर-सेल्स मेंटेनेंस सर्विस प्रदान करते हैं।"
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Solar & Subsidy Guide • सवाल व उत्तर</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="text-emerald-600">Questions</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              सोलर प्लांट एवं सरकारी सब्सिडी संबंधी अक्सर पूछे जाने वाले प्रश्न
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about rooftop solar, PM Surya Ghar subsidy rules, net metering, and installation in UP.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              रूफटॉप सोलर, सब्सिडी, लोन ईएमआई और नेट मीटरिंग के बारे में पूरी स्पष्ट जानकारी।
            </span>
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="mt-14 space-y-4">
          {bilingualFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-slate-200 rounded-2xl overflow-hidden transition shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className={`w-full text-left p-5 flex justify-between items-center gap-4 transition cursor-pointer ${
                    isOpen ? "bg-blue-50/50" : "bg-slate-50/70 hover:bg-slate-100"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="font-bold text-sm sm:text-base text-slate-900 block">
                      {item.qEn}
                    </span>
                    <span className="font-semibold text-xs sm:text-sm text-emerald-700 font-hindi block">
                      {item.qHi}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 space-y-2.5">
                    <p>{item.aEn}</p>
                    <p className="font-hindi text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {item.aHi}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-7 bg-gradient-to-r from-blue-50 via-slate-50 to-emerald-50 rounded-3xl border border-blue-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left shadow-sm"
        >
          <div>
            <h4 className="font-bold text-base text-slate-900">
              Have a specific question about your roof or meter?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 font-semibold font-hindi mt-0.5">
              अपनी छत, बिजली बिल या सब्सिडी के बारे में इंजीनियर सत्यप्रकाश से सीधे बात करें।
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <a
              href={`tel:${businessData.phone[0]}`}
              className="bg-slate-900 hover:bg-blue-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call 24×7: +91 {businessData.phone[0]}</span>
            </a>
            <a
              href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent("Hello Er. Satyaprakash, I have a few questions regarding solar installation for my property in UP.")}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default FAQ;
