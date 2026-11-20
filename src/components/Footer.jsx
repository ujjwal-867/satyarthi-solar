import { businessData } from "../data/businessData";
import { 
  Sun, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Lock, 
  Navigation 
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function Footer({ onOpenAdmin, onNavigate }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1e3b] text-white pt-8 pb-16 sm:pb-8 border-t border-[#16325c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#16325c]">
          
          {/* Col 1: Brand Info & Govt Code (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-sky-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <span className="text-base sm:text-lg font-black tracking-tight text-white block">
                  SATYARTHI <span className="text-amber-400">SOLAR SOLUTION</span>
                </span>
                <p className="text-[11px] text-sky-300 font-hindi">
                  सत्यार्थी सोलर सॉल्यूशन • 2500+ संतुष्ट परिवार
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300/90 leading-relaxed max-w-sm">
              UPNEDA empanelled rooftop solar EPC contractor. Authorized dealer for Tata Power Solar, Adani Solar, Waaree, and Loom Solar.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-300 pt-1">
              <span className="bg-[#0d284f] border border-blue-500/30 px-2.5 py-1 rounded-lg">
                Vendor Code: <strong className="text-amber-300 font-mono">{businessData.vendorCode}</strong>
              </span>
              <span className="bg-[#0d284f] border border-blue-500/30 px-2.5 py-1 rounded-lg">
                GST: <strong className="text-sky-300 font-mono">{businessData.gstin}</strong>
              </span>
              <span className="bg-[#0d284f] border border-blue-500/30 px-2.5 py-1 rounded-lg text-amber-300 font-semibold">
                PM Surya Ghar Empanelled
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Links • नेविगेशन
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/") : scrollTo("#hero")} 
                  className="hover:text-amber-400 transition cursor-pointer"
                >
                  Home • मुख्य पृष्ठ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/on-grid") : scrollTo("#portal-hub")} 
                  className="hover:text-amber-400 transition cursor-pointer text-sky-300 font-semibold"
                >
                  On-Grid Solar • सब्सिडी दरें
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/off-grid") : scrollTo("#portal-hub")} 
                  className="hover:text-amber-400 transition cursor-pointer text-amber-300 font-semibold"
                >
                  Off-Grid & Chakki • रेट लिस्ट
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/appliances") : scrollTo("#portal-hub")} 
                  className="hover:text-amber-400 transition cursor-pointer"
                >
                  Electronics Store • शोरूम
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/gallery") : scrollTo("#portal-hub")} 
                  className="hover:text-amber-400 transition cursor-pointer"
                >
                  Site Gallery • प्रोजेक्ट्स
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/certificates") : scrollTo("#certificates")} 
                  className="hover:text-amber-400 transition cursor-pointer"
                >
                  Certificates • प्रमाण-पत्र
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Store (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Contact & Store • संपर्क
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium leading-snug">
                    {businessData.address}
                  </p>
                  <a
                    href={businessData.googleMapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-amber-300 hover:text-amber-200 font-semibold inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>View on Google Maps ↗</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${businessData.phone[0]}`} className="hover:text-white transition font-mono font-bold text-white">
                  +91 {businessData.phone[0]} / {businessData.phone[1]}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <a 
                  href={`https://wa.me/91${businessData.whatsapp[0]}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold transition"
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

            {/* Social channels & Map Link */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={businessData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#0d284f] hover:bg-pink-600 rounded-lg text-slate-300 hover:text-white transition"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={businessData.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#0d284f] hover:bg-blue-600 rounded-lg text-slate-300 hover:text-white transition"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={businessData.googleMapLink}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-amber-300 hover:underline inline-flex items-center gap-1 font-semibold ml-1"
              >
                <Navigation className="w-3 h-3" />
                <span>Google Maps ↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Clean, Compact Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong>Satyarthi Solar Solution</strong> • UPNEDA & MNRE Approved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-hindi">गोरखपुर एवं पूर्वांचल</span>
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
