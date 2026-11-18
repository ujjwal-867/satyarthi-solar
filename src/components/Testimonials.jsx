import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { Star, MapPin, ExternalLink } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function Testimonials() {
  const hindiComments = [
    "इंजीनियर सत्यप्रकाश जी व उनकी टीम ने हमारे घर 3 किलोवाट सोलर लगाया। 25 दिनों में यूपीपीसीएल नेट मीटर लग गया और ₹1,08,000 की सरकारी सब्सिडी सीधे बैंक खाते में आ गई। बिजली बिल ₹4,500 से घटकर मात्र ₹180 रह गया।",
    "डीजल पर आटा चक्की चलाने में हर महीने ₹30,000+ का नुकसान हो रहा था। सत्यार्थी सोलर ने 15 HP सोलर VFD ड्राइव लगाई। अब पूरी चक्की दिन भर मुफ्त सोलर पर चलती है।",
    "बहुत ही कुशल और जिम्मेदार इंजीनियर हैं। भारी हॉट-डिप जीआई स्ट्रक्चर और असली लूम सोलर पैनल लगाए। सरकारी पोर्टल का सारा काम खुद संभाला।"
  ];

  const socialReels = [
    { title: "3kW Rooftop Zero-Bill Home Interview", location: "Rail Vihar, Gorakhpur", tag: "Net-Meter Verified" },
    { title: "15HP Solar Atta Chakki Live Grinding", location: "Gauri Bazar, Deoria", tag: "Zero Diesel Cost" },
    { title: "Elevated Galvanized Pergola Walkthrough", location: "Rajendra Nagar, GKP", tag: "Heavy GI Structure" }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-[#FAF8F4] text-[#0D1F17] border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-10 border-b border-[#E5E0D8]">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#083D2A]">
              Customer Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D1F17] leading-tight">
              Trusted by 2,500+ homeowners across Uttar Pradesh
            </h2>
            <div className="w-10 h-[3px] bg-[#F5C441]" />
            <p className="text-xs sm:text-sm text-[#4B5550] font-hindi">
              2,500+ संतुष्ट परिवार · गोरखपुर, देवरिया, कुशीनगर एवं पूर्वांचल से वास्तविक अनुभव
            </p>
          </div>

          <a
            href={businessData.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0D1F17] border border-[#E5E0D8] hover:border-[#083D2A] rounded-md px-4 py-2.5 text-xs font-semibold transition-colors self-start lg:self-end shrink-0"
          >
            <Star className="w-4 h-4 fill-[#F5C441] text-[#F5C441]" />
            <span>4.9 / 5 on Google Maps ↗</span>
          </a>
        </div>

        {/* Calm Editorial Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {businessData.testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white rounded-xl p-6 sm:p-7 border border-[#E5E0D8] flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F5C441] text-[#F5C441]" />
                  ))}
                  <span className="text-xs font-semibold text-[#5C6660] ml-1.5">5.0</span>
                </div>

                <p className="text-sm text-[#0D1F17] leading-relaxed">
                  &ldquo;{t.comment}&rdquo;
                </p>

                {hindiComments[idx] && (
                  <p className="text-xs text-[#4B5550] font-hindi leading-relaxed border-l-2 border-[#F5C441] pl-3">
                    {hindiComments[idx]}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#EFECE4] flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-sm text-[#0D1F17]">{t.name}</h4>
                  <p className="text-xs text-[#5C6660] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#083D2A] shrink-0" />
                    <span>{t.location}</span>
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[#083D2A] bg-[#FAF8F4] border border-[#E5E0D8] px-2.5 py-1 rounded-md shrink-0">
                  {t.system}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Botanical Green Field Updates Strip */}
        <div className="mt-10 bg-[#083D2A] text-[#FAF8F4] rounded-xl p-6 sm:p-8 border border-[#0E4F38]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F5C441]">
                Live Field Reports
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Follow our daily site installations on Instagram &amp; Facebook
              </h3>
              <p className="text-xs sm:text-sm text-[#C7D6CE] leading-relaxed">
                Watch real elevated GI pergola assemblies, zero-diesel solar flour mills, and homeowner meter readings from across Gorakhpur.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              <a
                href={businessData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#F5C441] hover:bg-[#eab62e] text-[#0D1F17] text-xs font-semibold transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={businessData.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-semibold transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/15 grid sm:grid-cols-3 gap-4">
            {socialReels.map((reel, idx) => (
              <a
                key={idx}
                href={businessData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors block"
              >
                <span className="text-[11px] font-semibold text-[#F5C441] block">
                  {reel.tag}
                </span>
                <h4 className="text-sm font-semibold text-white mt-1">
                  {reel.title}
                </h4>
                <p className="text-xs text-[#C7D6CE] mt-1">
                  {reel.location}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
