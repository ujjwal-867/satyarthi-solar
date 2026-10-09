import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Compass, 
  CheckCircle2, 
  Users, 
  Zap, 
  Clock, 
  HardHat,
  PhoneCall,
  Sparkles
} from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <HardHat className="w-4 h-4 text-blue-600" />
            <span>Engineering Leadership & Heritage • तकनीकी नेतृत्व व अनुभव</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            About <span className="text-emerald-600">Satyarthi Solar Solution</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              सत्यार्थी सोलर सॉल्यूशन — परिचय एवं प्रतिबद्धता
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded by <strong>{businessData.founder}</strong>, we are on a mission to power homes, businesses, and rural industries across Uttar Pradesh with reliable clean energy.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              इंजीनियर सत्यप्रकाश सत्यार्थी के नेतृत्व में 2,200+ से अधिक सफल सोलर प्रोजेक्ट्स का अनुभव।
            </span>
          </p>
        </motion.div>

        {/* Founder & Story Section */}
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Founder Card & Verified Photo (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-7 sm:p-8 text-white shadow-2xl overflow-hidden border border-slate-700 relative">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-2xl"></div>

              <div className="relative space-y-5">
                {/* Real Verified Photo Frame */}
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-xl shrink-0">
                    <img 
                      src={businessData.engineerImage} 
                      alt={businessData.founder}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full mb-1">
                      <Sparkles className="w-3 h-3" />
                      Lead Engineer & Founder
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {businessData.founder}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400 font-hindi mt-0.5">
                      ई. सत्यप्रकाश सत्यार्थी (मुख्य अभियंता)
                    </p>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Primary Dealer: TATA Power • Adani • Waaree • Loom • UTL • Luminous & Top Brands
                    </p>
                  </div>
                </div>

                {/* Direct 24x7 Numbers */}
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-xs space-y-1">
                  <div className="text-emerald-300 font-bold flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>24×7 Active Business Lines • संपर्क सूत्र:</span>
                  </div>
                  <p className="font-mono text-white text-[11px]">
                    Mobile: +91 {businessData.phone[0]} / +91 {businessData.phone[1]}
                  </p>
                  <p className="text-slate-300 text-[10px]">
                    Office Helpline: {businessData.officeNumber} (Motiram Adda)
                  </p>
                </div>

                {/* Credentials List */}
                <div className="pt-3 border-t border-slate-700/80 space-y-2.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>UPNEDA Approved Vendor (Code: <strong className="text-white">{businessData.vendorCode}</strong>)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Govt GST Registered: <strong className="font-mono text-blue-300">{businessData.gstin}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Primary Dealer: <strong>TATA Power</strong>, <strong>Adani</strong>, <strong>Waaree</strong> & <strong>Loom Solar</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dealer of: <strong>UTL</strong>, <strong>Luminous</strong>, <strong>Exide</strong>, <strong>Pahal</strong>, <strong>Vikram</strong>, <strong>Servotech</strong>, <strong>Prime</strong> & <strong>Amaze</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Over 2,200 Solar Installations Supervised Across UP</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs italic text-slate-200 bg-slate-900/80 p-3.5 rounded-2xl border border-slate-700 leading-relaxed font-hindi">
                    &ldquo;हमारा ध्येय स्पष्ट है: पूर्वी उत्तर प्रदेश के किसी भी परिवार या व्यवसायी को महंगे बिजली बिल या डीजल के बोझ से परेशान न होना पड़े। सोलर पावर विश्वसनीय है और 3 वर्ष में अपनी लागत वसूल कर देती है।&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Service Locations Badge */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs shadow-xs">
              <strong className="text-slate-900 block mb-1">
                Primary Operational Districts • मुख्य कार्यक्षेत्र:
              </strong>
              <p className="text-slate-600 leading-relaxed">
                {businessData.serviceArea}
              </p>
            </div>
          </motion.div>

          {/* Right: Mission, Vision, and Values (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Story */}
            <div className="bg-slate-50/70 p-6 sm:p-7 rounded-3xl border border-slate-200 space-y-3">
              <h3 className="text-2xl font-black text-slate-900">
                The Satyarthi Solar Story • हमारी यात्रा
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating from <strong>Motiram Adda on Deoria Road, Gorakhpur</strong>, Satyarthi Solar Solution was established with a clear mandate: to eliminate the friction, fraudulent equipment, and bureaucratic paperwork that often deterred people from adopting solar energy.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-hindi">
                मोतीराम अड्डा (देवरिया रोड, गोरखपुर) स्थित मुख्य कार्यालय से हम संपूर्ण पूर्वांचल में गुणवत्तापूर्ण और टिकाऊ सोलर प्लांट स्थापित करते हैं। शैडो-फ्री स्ट्रक्चर से लेकर नेट मीटरिंग और बैंक खाते में सीधे सब्सिडी आने तक हम हर कदम पर आपके साथ हैं।
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-200/80">
                <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span>Our Mission • हमारा लक्ष्य</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To turn every residential rooftop and commercial building across Uttar Pradesh into a self-sustaining power generator, providing 100% genuine Tier-1 solar equipment and hassle-free subsidy claims.
                </p>
              </div>

              <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200/80">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                  <Compass className="w-5 h-5 text-emerald-600" />
                  <span>Our Vision • हमारी दृष्टि</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To be Uttar Pradesh&apos;s most trusted clean-tech partner, empowering 10,000+ homes and 500+ rural flour mills and cold chains with uninterrupted solar energy by 2028.
                </p>
              </div>
            </div>

            {/* Why Choose Us Comparison */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
                Why Satyarthi Solar vs. Local Uncertified Electricians • हमारे साथ काम करने के फायदे
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Official UPNEDA Vendor (यूपीनेडा अधिकृत):</strong> We can legally apply for PM Surya Ghar subsidy (up to ₹1,08,000). Unapproved installers cannot get your subsidy approved.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Direct Brand Warranty (25 वर्ष वारंटी):</strong> Authorized dealer for Loom Solar, Fujiyama, and Amaze with 25-year manufacturer-backed replacement guarantees.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Heavy-Duty GI Structures (आंधी-रोधी स्ट्रक्चर):</strong> We fabricate heavy hot-dip galvanized mounting structures that withstand storms and 150 km/h wind speeds.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Professional Dual Earthing & SPD (सुरक्षित अर्थिंग):</strong> Dedicated chemical earthing rods maintaining soil resistance &lt;1 Ohm to guarantee lightning safety.
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
