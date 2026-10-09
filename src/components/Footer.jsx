import { businessData } from "../data/businessData";
import { 
  Sun, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Lock, 
  Heart,
  Navigation,
  PhoneCall
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function Footer({ onOpenAdmin }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info & Govt Code (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-md shadow-blue-600/30">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  SATYARTHI <span className="text-emerald-400">SOLAR SOLUTION</span>
                </span>
                <p className="text-[11px] text-emerald-300 font-hindi font-medium">
                  सत्यार्थी सोलर सॉल्यूशन • मोतीराम अड्डा गोरखपुर
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {businessData.tagline}. Leading UPNEDA empanelled solar installer and authorized dealer for Loom Solar, Fujiyama, and Amaze. We deliver turnkey residential, commercial, industrial and solar aata chakki projects across Uttar Pradesh.
            </p>

            {/* Govt Credentials Box */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>UPNEDA & MNRE Approved Vendor</span>
              </div>
              <p className="text-slate-300 font-mono text-[11px]">
                Vendor Code: <strong className="text-emerald-300">{businessData.vendorCode}</strong>
              </p>
              <p className="text-slate-300 font-mono text-[11px]">
                GSTIN: <strong className="text-blue-300">{businessData.gstin}</strong>
              </p>
              <p className="text-[11px] text-slate-400">
                Official Dealer: Loom Solar • Fujiyama Solar • Amaze
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation • नेविगेशन
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo("#hero")} className="hover:text-emerald-400 transition cursor-pointer">
                  Home | होम
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#subsidy")} className="hover:text-emerald-400 transition cursor-pointer text-emerald-300 font-semibold">
                  PM Surya Ghar | सब्सिडी
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#quotations")} className="hover:text-emerald-400 transition cursor-pointer text-blue-300 font-semibold">
                  Quotations | कोटेशन
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#calculator")} className="hover:text-emerald-400 transition cursor-pointer">
                  Calculator | कैलकुलेटर
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-emerald-400 transition cursor-pointer">
                  Services | सेवाएं
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#appliances")} className="hover:text-emerald-400 transition cursor-pointer">
                  Appliances | इलेक्ट्रॉनिक्स
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#products")} className="hover:text-emerald-400 transition cursor-pointer">
                  Products | उपकरण
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#gallery")} className="hover:text-emerald-400 transition cursor-pointer">
                  Gallery | गैलरी
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#certificates")} className="hover:text-emerald-400 transition cursor-pointer">
                  Certificates | प्रमाणपत्र
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#about")} className="hover:text-emerald-400 transition cursor-pointer">
                  About | परिचय
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#location")} className="hover:text-emerald-400 transition cursor-pointer">
                  Location | मैप
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#contact")} className="hover:text-emerald-400 transition cursor-pointer">
                  Contact | संपर्क
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Solar Offerings • प्रमुख सेवाएं
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Residential Rooftop Solar (1kW - 10kW) • आवासीय सोलर</li>
              <li>PM Surya Ghar Net Metering • UPPCL नेट मीटरिंग</li>
              <li>Commercial Solar Plants • स्कूल व अस्पताल प्लांट</li>
              <li>Industrial Plants (GIDA Gorakhpur) • गीडा औद्योगिक प्लांट</li>
              <li>Solar Aata Chakki (10HP - 25HP VFD) • सोलर आटा चक्की</li>
              <li>Solar Inverter AC & Appliances • सोलर इन्वर्टर एसी</li>
              <li>Solar Water Heaters (ETC/Pressurized) • वाटर हीटर</li>
              <li>Hot-Dip G.I. Heavy Mounting • आंधी-रोधी स्ट्रक्चर</li>
              <li>Chemical Earthing Kits • केमिकल अर्थिंग किट</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Contact & Store • संपर्क व पता
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200">{businessData.address}</p>
                  <a
                    href={businessData.googleMapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline mt-1 inline-flex items-center gap-1 font-semibold"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Google Maps Verified Link ↗</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-emerald-300 font-bold block">24×7 Business Helpline:</span>
                  <a href={`tel:${businessData.phone[0]}`} className="hover:text-white transition font-mono font-bold text-white">
                    +91 {businessData.phone[0]} / {businessData.phone[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${businessData.officeNumber}`} className="hover:text-blue-300 transition text-blue-300 font-medium">
                  Office Desk: {businessData.officeNumber}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/91${businessData.whatsapp[0]}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-semibold transition"
                >
                  WhatsApp: +91 {businessData.whatsapp[0]}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${businessData.email}`} className="hover:text-white transition break-all">
                  {businessData.email}
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={businessData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900 hover:bg-pink-600 rounded-xl text-slate-300 hover:text-white transition"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={businessData.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900 hover:bg-blue-600 rounded-xl text-slate-300 hover:text-white transition"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong>Satyarthi Solar Solution • सत्यार्थी सोलर सॉल्यूशन</strong>. All Rights Reserved. 
            Empanelled with UPNEDA & MNRE.
          </p>

          <div className="flex items-center gap-4">
            <span>Gorakhpur, Uttar Pradesh</span>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Login • एडमिन</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
