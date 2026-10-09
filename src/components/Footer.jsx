import { businessData } from "../data/businessData";
import { 
  Sun, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Lock, 
  Heart 
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
          
          {/* Col 1: Brand Info & Govt Code */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center text-slate-950 font-bold shadow-md">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">
                  SATYARTHI <span className="text-amber-400">SOLAR</span>
                </span>
                <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                  Solution • Gorakhpur
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {businessData.tagline}. Leading UPNEDA empanelled solar installer and authorized Loom Solar dealer, specializing in residential, commercial, industrial and solar aata chakki projects.
            </p>

            {/* Govt Credentials Box */}
            <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>UPNEDA & MNRE Approved Vendor</span>
              </div>
              <p className="text-slate-300 font-mono text-[11px]">
                Vendor Code: <strong className="text-amber-400">{businessData.vendorCode}</strong>
              </p>
              <p className="text-slate-300 font-mono text-[11px]">
                GSTIN: <strong className="text-amber-400">{businessData.gstin}</strong>
              </p>
              <p className="text-[11px] text-slate-400">
                Dealer: Loom Solar • Fujiyama Solar • Amaze
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo("#hero")} className="hover:text-amber-400 transition cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#subsidy")} className="hover:text-amber-400 transition cursor-pointer">
                  PM Surya Ghar Subsidy
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#quotations")} className="hover:text-amber-400 transition cursor-pointer text-amber-300 font-semibold">
                  Official Quotations & Rates
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-amber-400 transition cursor-pointer">
                  Solar Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#products")} className="hover:text-amber-400 transition cursor-pointer">
                  Products Catalog
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#calculator")} className="hover:text-amber-400 transition cursor-pointer">
                  Solar Calculator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#gallery")} className="hover:text-amber-400 transition cursor-pointer text-amber-300 font-semibold">
                  Bento Picture Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#location")} className="hover:text-amber-400 transition cursor-pointer text-emerald-400 font-semibold">
                  Live Map & Store Location
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#certificates")} className="hover:text-amber-400 transition cursor-pointer">
                  Govt Certificates
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#about")} className="hover:text-amber-400 transition cursor-pointer">
                  About Er. Satyaprakash
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#contact")} className="hover:text-amber-400 transition cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Solar Offerings
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Residential Rooftop Solar (1kW - 10kW)</li>
              <li>PM Surya Ghar Yojna Net Metering</li>
              <li>Commercial Solar (Schools & Hospitals)</li>
              <li>Industrial Plants (GIDA Gorakhpur)</li>
              <li>Solar Aata Chakki (10HP - 25HP VFD)</li>
              <li>Solar Water Heaters (ETC/Pressurized)</li>
              <li>UTL Solar PCU & Inverters</li>
              <li>Hot-Dip G.I. Heavy Mounting Structures</li>
              <li>Chemical Earthing & Safety Distribution</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Office & Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200">{businessData.address}</p>
                  <a
                    href={businessData.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:underline mt-0.5 inline-block"
                  >
                    Google Maps Pin ↗
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${businessData.phone[0]}`} className="hover:text-white transition">
                  +91 {businessData.phone[0]} / {businessData.phone[1]}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${businessData.officeNumber}`} className="hover:text-amber-300 transition text-amber-300 font-medium">
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
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
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
                className="p-2 bg-slate-900 hover:bg-pink-600 rounded-lg text-slate-300 hover:text-white transition"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={businessData.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900 hover:bg-blue-600 rounded-lg text-slate-300 hover:text-white transition"
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
            © {new Date().getFullYear()} <strong>Satyarthi Solar Solution</strong>. All Rights Reserved. 
            Empanelled with UPNEDA & MNRE.
          </p>

          <div className="flex items-center gap-4">
            <span>Gorakhpur, Uttar Pradesh</span>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Login</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
