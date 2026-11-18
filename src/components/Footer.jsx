import { businessData } from "../data/businessData";
import { Phone, Mail, MapPin, Lock, Navigation } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function Footer({ onOpenAdmin, onNavigate }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#083D2A] text-[#FAF8F4] pt-14 pb-20 sm:pb-10 border-t border-[#0F4D37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Col 1: Brand Identity & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={businessData.logoImage}
                alt="Satyarthi Solar Solution"
                className="w-10 h-10 rounded-lg object-cover border border-white/20"
              />
              <div>
                <span className="text-base font-bold tracking-tight text-white block">
                  Satyarthi Solar Solution
                </span>
                <p className="text-xs text-[#C7D6CE] font-hindi">
                  सत्यार्थी सोलर सॉल्यूशन · गोरखपुर, उत्तर प्रदेश
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C7D6CE] leading-relaxed max-w-sm">
              UPNEDA empanelled rooftop solar EPC contractor serving 2,500+ homes, commercial facilities, and solar flour mills across Eastern Uttar Pradesh.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] text-[#E6EFEA] pt-1">
              <span className="bg-white/10 border border-white/15 px-2.5 py-1 rounded-md">
                UPNEDA: <strong className="text-[#F5C441] font-mono">{businessData.vendorCode}</strong>
              </span>
              <span className="bg-white/10 border border-white/15 px-2.5 py-1 rounded-md">
                GSTIN: <strong className="text-white font-mono">{businessData.gstin}</strong>
              </span>
              <span className="bg-white/10 border border-white/15 px-2.5 py-1 rounded-md">
                MSME: <strong className="text-white font-mono">{businessData.udyamNo}</strong>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5C441]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#C7D6CE]">
              <li>
                <button
                  type="button"
                  onClick={() => (onNavigate ? onNavigate("/") : scrollTo("#home"))}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("/on-grid")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  PM Surya Ghar On-Grid
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("/off-grid")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Off-Grid &amp; Aata Chakki
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("/appliances")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  5-Star Solar Appliances
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("/gallery")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  2,500+ Site Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("/certificates")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  UPNEDA Certificates
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Showroom & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5C441]">
              Showroom &amp; Contact
            </h4>

            <div className="space-y-2.5 text-sm text-[#C7D6CE]">
              <a
                href={`tel:${businessData.phone[0]}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F5C441] shrink-0" />
                <span>+91 {businessData.phone[0]} / {businessData.phone[1]}</span>
              </a>

              <a
                href={`tel:${businessData.officeNumber}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#C7D6CE] shrink-0" />
                <span>Office Desk: +91 {businessData.officeNumber}</span>
              </a>

              <a
                href={`mailto:${businessData.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors text-xs break-all"
              >
                <Mail className="w-4 h-4 text-[#F5C441] shrink-0" />
                <span>{businessData.email}</span>
              </a>

              <p className="flex items-start gap-2.5 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-[#F5C441] shrink-0 mt-0.5" />
                <span>{businessData.address}</span>
              </p>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={businessData.googleMapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#F5C441] hover:bg-[#eab62e] text-[#0D1F17] text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={businessData.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={businessData.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#A4B8AE]">
          <p>
            © {new Date().getFullYear()} {businessData.companyName}. Led by {businessData.founder}.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-hindi">गोरखपुर एवं पूर्वांचल</span>
            {onOpenAdmin && (
              <button
                type="button"
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1 text-[#A4B8AE] hover:text-[#F5C441] transition-colors cursor-pointer"
              >
                <Lock className="w-3 h-3" />
                <span>Admin</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
