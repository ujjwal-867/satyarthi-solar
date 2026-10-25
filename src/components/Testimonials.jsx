import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { Star, Quote, CheckCircle2, MapPin, Play, Video, ExternalLink, Sparkles } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import {
  ExpressiveKineticText,
  InteractiveZapBurstButton,
  LiveActivityStreamBadge
} from "./MotionEffects";

function Testimonials() {
  const hindiComments = [
    "इंजीनियर सत्यप्रकाश जी व उनकी टीम ने हमारे घर 3 किलोवाट सोलर लगाया। 25 दिनों में यूपीपीसीएल नेट मीटर लग गया और ₹1,08,000 की सरकारी सब्सिडी सीधे बैंक खाते में आ गई। बिजली बिल ₹4,500 से घटकर मात्र ₹180 रह गया!",
    "डीजल पर आटा चक्की चलाने में हर महीने ₹30,000+ का भारी नुकसान हो रहा था। सत्यार्थी सोलर ने 15 HP सोलर VFD ड्राइव लगाई। अब पूरी चक्की दिन भर मुफ्त सोलर पर चलती है। बहुत ही ईमानदार व श्रेष्ठ सेवा!",
    "बहुत ही कुशल और जिम्मेदार इंजीनियर हैं। भारी हॉट-डिप जीआई स्ट्रक्चर और असली लूम सोलर पैनल लगाए। सरकारी पोर्टल का सारा काम खुद संभाला। उत्तर प्रदेश की सबसे विश्वसनीय सोलर कंपनी।"
  ];

  const socialReels = [
    { title: "3kW Rooftop Zero-Bill Home Interview", location: "Rail Vihar, Gorakhpur", tag: "Net-Meter Verified" },
    { title: "15HP Solar Atta Chakki Live Grinding", location: "Gauri Bazar, Deoria", tag: "0 Diesel Cost" },
    { title: "Elevated Galvanized Pergola Drone Flyover", location: "Rajendra Nagar, GKP", tag: "Heavy GI Structure" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50/60 text-slate-900 border-t border-slate-200/80 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Expressive Kinetic Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.9 / 5 Google Rating • 2500+ Happy Clients Across UP</span>
            </div>
            <LiveActivityStreamBadge />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <ExpressiveKineticText
              text="What Our 2500+ Customers Say in Uttar Pradesh"
              highlightWords={["2500+", "Customers", "Uttar", "Pradesh"]}
            />
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              2500+ संतुष्ट ग्राहकों की राय एवं अनुभव
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real stories from homeowners, doctors, and mill operators who eliminated electricity bills with Satyarthi Solar Solution.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              गोरखपुर, देवरिया, कुशीनगर व बस्ती के सम्मानित ग्राहकों का अटूट विश्वास।
            </span>
          </p>
        </motion.div>

        {/* Testimonials 3D Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12" style={{ perspective: "1100px" }}>
          {businessData.testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="relative bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Diagonal Shimmer Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-emerald-50/80 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Stars & Interactive ⚡ Burst */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1.5">5.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <InteractiveZapBurstButton initialCount={92 + idx * 19} label="Helpful" />
                    <Quote className="w-5 h-5 text-slate-200 group-hover:text-emerald-300 transition" />
                  </div>
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
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
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

        {/* Live Social Video Proof & Customer Reels Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
            {/* Left Col: Info */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                <Video className="w-3.5 h-3.5 text-rose-400" />
                <span>Real Site Reels & Video Reviews • लाइव वीडियो प्रमाण</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Watch Real Customer Stories & Drone Flights on <span className="text-rose-400">Instagram</span> & <span className="text-blue-400">Facebook</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-hindi">
                हमारे 2500+ सोलर प्लांट्स, 15HP सोलर आटा चक्की व ग्राहकों के जीरो-बिल रिव्यू के लाइव रील्स व वीडियो हमारे ऑफिशियल सोशल मीडिया पेजों पर देखें।
              </p>

              {/* Sample Reel Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {socialReels.map((reel, rIdx) => (
                  <div key={rIdx} className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-2xl flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                      <Play className="w-3.5 h-3.5 fill-rose-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-white truncate">{reel.title}</p>
                      <span className="text-[9px] text-emerald-400 block truncate">{reel.tag} • {reel.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Direct Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={businessData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-5 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 text-white font-bold text-xs flex items-center justify-center gap-2.5 shadow-lg shadow-rose-600/30 transition hover:opacity-95"
              >
                <InstagramIcon className="w-4 h-4 fill-white" />
                <span>Watch Customer Reels on Instagram (@satyarthi_solar_solution.gkp)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={businessData.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/30 transition hover:opacity-95"
              >
                <FacebookIcon className="w-4 h-4 fill-white" />
                <span>Watch Video Proofs on Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Google Reviews Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href={businessData.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 bg-white border border-slate-300 px-6 py-3 rounded-full hover:bg-slate-50 hover:border-blue-500 shadow-sm transition"
          >
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>View Verified Location & Reviews on Google Maps • गूगल मैप समीक्षाएं</span>
            <span className="text-amber-500 font-black">★ 4.9 Rating (2500+ Clients)</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;
