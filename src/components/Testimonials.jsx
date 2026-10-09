import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { Star, Quote, CheckCircle2, MapPin, Sparkles } from "lucide-react";

function Testimonials() {
  const hindiComments = [
    "इंजीनियर सत्यप्रकाश जी व उनकी टीम ने हमारे घर 3 किलोवाट सोलर लगाया। 25 दिनों में यूपीपीसीएल नेट मीटर लग गया और ₹1,08,000 की सरकारी सब्सिडी सीधे बैंक खाते में आ गई। बिजली बिल ₹4,500 से घटकर मात्र ₹180 रह गया!",
    "डीजल पर आटा चक्की चलाने में हर महीने ₹30,000+ का भारी नुकसान हो रहा था। सत्यार्थी सोलर ने 15 HP सोलर VFD ड्राइव लगाई। अब पूरी चक्की दिन भर मुफ्त सोलर पर चलती है। बहुत ही ईमानदार व श्रेष्ठ सेवा!",
    "बहुत ही कुशल और जिम्मेदार इंजीनियर हैं। भारी हॉट-डिप जीआई स्ट्रक्चर और असली लूम सोलर पैनल लगाए। सरकारी पोर्टल का सारा काम खुद संभाला। उत्तर प्रदेश की सबसे विश्वसनीय सोलर कंपनी।"
  ];

  return (
    <section className="py-24 bg-slate-50/60 text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.9 / 5 Google Rating • 45+ Verified Client Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            What Our Customers Say in <span className="text-blue-600">Uttar Pradesh</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              संतुष्ट ग्राहकों की राय एवं अनुभव
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real stories from homeowners, doctors, and mill operators who eliminated electricity bills with Satyarthi Solar Solution.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              गोरखपुर, देवरिया, कुशीनगर व बस्ती के सम्मानित ग्राहकों का अटूट विश्वास।
            </span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {businessData.testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1.5">5.0</span>
                  </div>
                  <Quote className="w-6 h-6 text-slate-200 group-hover:text-blue-200 transition" />
                </div>

                {/* Comment (English) */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>

                {/* Comment (Hindi) */}
                {hindiComments[idx] && (
                  <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100 font-hindi leading-relaxed">
                    &ldquo;{hindiComments[idx]}&rdquo;
                  </p>
                )}
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified • सत्यापित</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href={businessData.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 bg-white border border-slate-300 px-6 py-3 rounded-full hover:bg-slate-50 hover:border-blue-500 shadow-sm transition"
          >
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>View Verified Location & Reviews on Google Maps • गूगल मैप समीक्षाएं</span>
            <span className="text-amber-500 font-black">★ 4.9 Rating</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;
