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
  HardHat 
} from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <HardHat className="w-3.5 h-3.5 text-emerald-600" />
            Engineering Leadership & Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            About <span className="text-emerald-700">Satyarthi Solar Solution</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Founded by <strong>{businessData.founder}</strong>, we are on a mission to power homes, businesses, and rural industries across Uttar Pradesh with reliable clean energy.
          </p>
        </div>

        {/* Founder & Story Section */}
        <div className="mt-14 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Founder Card & Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-gradient-to-br from-slate-900 to-emerald-950 rounded-3xl p-8 text-white shadow-2xl overflow-hidden border border-emerald-500/30">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/20 rounded-full blur-2xl"></div>

              <div className="relative space-y-4">
                <div className="w-20 h-20 bg-gradient-to-tr from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center text-slate-950 font-black text-3xl shadow-lg shadow-amber-400/20">
                  ES
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {businessData.founder}
                  </h3>
                  <p className="text-amber-400 font-semibold text-xs tracking-wider uppercase mt-0.5">
                    {businessData.founderTitle}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct Contact: +91 {businessData.phone[0]} / +91 {businessData.phone[1]} | Office: {businessData.officeNumber}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>UPNEDA Approved Vendor (Code: <strong>{businessData.vendorCode}</strong>)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Govt GST Registered: <strong className="font-mono text-amber-300">{businessData.gstin}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Authorized Dealer: <strong>Loom Solar</strong> & <strong>Fujiyama Solar</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Authorized Dealer: <strong>Amaze Energy Solutions</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Over 2,200 Solar Installations Supervised Across UP</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs italic text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                    &ldquo;Our vision is simple: no family or business owner in Purvanchal should suffer from crippling electricity bills or unreliable diesel costs. Solar power is clean, dependable, and pays for itself within 3 years.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Service Locations Badge */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs">
              <strong className="text-slate-900 block mb-1">Primary Operational Districts:</strong>
              <p className="text-slate-600 leading-relaxed">
                {businessData.serviceArea}
              </p>
            </div>
          </div>

          {/* Right: Mission, Vision, and Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">
                The Satyarthi Solar Story
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating from <strong>Motiram Adda on Deoria Road, Gorakhpur</strong>, Satyarthi Solar Solution was established with a clear mandate: to eliminate the friction, fraudulent equipment, and bureaucratic paperwork that often deterred people from adopting solar energy.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Under the visionary guidance of <strong>Er. Satya Prakash Satyarthi</strong>, our team brings genuine electrical engineering rigor to every single rooftop. Unlike third-party brokers, we maintain full accountability — from shadow-mapping and structural design to UPPCL net metering commissioning and direct bank subsidy disbursement.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                  <Target className="w-5 h-5 text-emerald-700" />
                  Our Mission
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To turn every residential rooftop and commercial building across Uttar Pradesh into a self-sustaining power generator, providing 100% genuine Tier-1 solar equipment and hassle-free subsidy claims.
                </p>
              </div>

              <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                  <Compass className="w-5 h-5 text-amber-600" />
                  Our Vision
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To be Uttar Pradesh&apos;s most trusted clean-tech partner, empowering 10,000+ homes and 500+ rural flour mills and cold chains with uninterrupted solar energy by 2028.
                </p>
              </div>
            </div>

            {/* Why Choose Us Comparison */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
                Why Satyarthi Solar vs. Local Uncertified Electricians
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Official UPNEDA Vendor:</strong> We can legally apply for PM Surya Ghar subsidy (up to ₹1,08,000). Unapproved installers cannot get your subsidy approved.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Direct Brand Warranty:</strong> Authorized dealer for Loom Solar, UTL, and Waaree with 25-year manufacturer-backed replacement guarantees.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Heavy-Duty GI Structures:</strong> We fabricate heavy hot-dip galvanized mounting structures that withstand storms and 150 km/h wind speeds.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Professional Dual Earthing & SPD:</strong> Dedicated chemical earthing rods maintaining soil resistance &lt;1 Ohm to guarantee lightning safety.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
