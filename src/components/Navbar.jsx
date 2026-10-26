import { useState } from "react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  Phone, 
  Menu, 
  X, 
  ShieldCheck, 
  FileText,
  Lock,
  Calculator,
  Gift,
  Home,
  Sun,
  BatteryCharging,
  Tv,
  Camera,
  Award
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function Navbar({ 
  onOpenAdmin, 
  onNavigate, 
  onOpenCalculator, 
  onOpenFestiveOffer,
  currentRoute = "/" 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simultaneous English + Hindi Navigation Links across all windows (Compact to fit 1280px screens cleanly)
  const navLinks = [
    { en: "Home", hi: "होम", route: "/", icon: Home },
    { en: "On-Grid", hi: "सब्सिडी दरें", route: "/on-grid", icon: Sun },
    { en: "Off-Grid", hi: "ऑफ-ग्रिड सूची", route: "/off-grid", icon: BatteryCharging },
    { en: "Electronics", hi: "इलेक्ट्रॉनिक्स", route: "/appliances", icon: Tv },
    { en: "Gallery", hi: "गैलरी", route: "/gallery", icon: Camera },
    { en: "Certificates", hi: "प्रमाणपत्र", route: "/certificates", icon: Award },
    { en: "Contact", hi: "संपर्क", href: "#contact" },
  ];

  // Mobile 1-Tap Quick-Switch Portal Tabs (Visible in every window for Mobile Users)
  const mobileQuickPortals = [
    { label: "Home", hi: "होम", route: "/", icon: Home },
    { label: "On-Grid", hi: "सब्सिडी", route: "/on-grid", icon: Sun },
    { label: "Off-Grid", hi: "रेट लिस्ट", route: "/off-grid", icon: BatteryCharging },
    { label: "Electronics", hi: "अप्लायंस", route: "/appliances", icon: Tv },
    { label: "Gallery", hi: "गैलरी", route: "/gallery", icon: Camera },
    { label: "Certs", hi: "प्रमाणपत्र", route: "/certificates", icon: Award },
  ];

  const isRouteActive = (route) => {
    if (!route) return false;
    if (route === "/" && currentRoute === "/") return true;
    if (route === "/appliances" && (currentRoute === "/appliances" || currentRoute === "/electronics")) return true;
    return currentRoute === route;
  };

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      if (link.route === "/certificates" || link.href === "#certificates") {
        window.dispatchEvent(new CustomEvent("load-section-images", { detail: { section: "certificates" } }));
      }
      if (link.route === "/gallery") {
        window.dispatchEvent(new CustomEvent("load-section-images", { detail: { section: "gallery" } }));
      }
    }
    if (link.route) {
      if (onNavigate) {
        onNavigate(link.route);
      }
      return;
    }
    if (link.href) {
      if (currentRoute !== "/" && onNavigate) {
        onNavigate("/" + link.href);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-x-clip bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Top Govt & Contact Strip with Direct Social Links & Festive Offer Trigger */}
      <div className="bg-[#061617] text-slate-100 text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-[#0c2a27]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          
          {/* Left: Govt Approvals & Vendor Code */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1 bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded text-[10px] sm:text-[11px]">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-950" />
              UPNEDA APPROVED
            </span>
            <span className="text-emerald-900">|</span>
            <span className="text-slate-200 font-medium text-[10px] sm:text-[11px]">
              Code: <strong className="text-emerald-300 font-mono">{businessData.vendorCode}</strong>
            </span>
            <span className="hidden md:inline text-emerald-900">|</span>
            <span className="hidden md:inline text-slate-300 text-[11px]">
              GST: <strong className="text-white font-mono">{businessData.gstin}</strong>
            </span>
          </div>

          {/* Right: Festive Offer Badge, Social Media, Helplines & Admin */}
          <div className="flex items-center gap-2.5 text-xs flex-wrap justify-center">
            {onOpenFestiveOffer && (
              <button
                type="button"
                onClick={onOpenFestiveOffer}
                className="inline-flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-2.5 py-0.5 rounded-full text-[10px] transition cursor-pointer shadow-xs"
              >
                <Gift className="w-3 h-3 text-rose-800" />
                <span>🪔 Navratri & Diwali Offer</span>
              </button>
            )}

            {/* Direct Instagram & Facebook Icons */}
            <div className="flex items-center gap-2 pr-2 sm:border-r border-emerald-800/50">
              <a 
                href={businessData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-200 hover:text-emerald-100 transition flex items-center gap-1"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span className="hidden xl:inline text-[10px]">Instagram</span>
              </a>
              <span className="text-emerald-700">|</span>
              <a 
                href={businessData.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-200 hover:text-emerald-100 transition flex items-center gap-1"
                title="Connect on Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                <span className="hidden xl:inline text-[10px]">Facebook</span>
              </a>
            </div>

            <a 
              href={`tel:${businessData.phone[0]}`}
              className="inline-flex items-center gap-1 hover:text-emerald-300 transition font-bold text-[11px] sm:text-xs"
              title="24x7 Helpline"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+91 {businessData.phone[0]}</span>
            </a>

            <span className="text-slate-600 hidden sm:inline">|</span>

            <a 
              href={`tel:${businessData.officeNumber}`}
              className="hidden sm:inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 transition font-bold text-[11px] sm:text-xs"
              title="Official Office Number"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Office: +91 {businessData.officeNumber}</span>
            </a>

            {/* Admin CRM Shortcut */}
            <button
              onClick={onOpenAdmin}
              title="Admin CRM Login"
              className="inline-flex items-center gap-1 text-teal-200 hover:text-white transition text-[11px] ml-0.5 cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span className="hidden lg:inline">Admin</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar Row */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-15 sm:h-17 gap-2">
          
          {/* Logo & Branding - Guaranteed Single Line on Mobile & Desktop */}
          <button
            type="button"
            onClick={() => {
              if (onNavigate) {
                onNavigate("/");
              } else {
                const el = document.querySelector("#hero");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 group text-left cursor-pointer min-w-0 shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-xs group-hover:scale-105 transition duration-300 border-2 border-emerald-600 bg-white p-0.5 shrink-0">
              <img
                src={businessData.logoImage}
                alt="Satyarthi Solar Solution Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[12.5px] min-[375px]:text-[14px] sm:text-[15px] lg:text-base font-black tracking-tight text-slate-900 font-sans whitespace-nowrap leading-tight group-hover:text-emerald-700 transition-colors">
                SATYARTHI SOLAR SOLUTION
              </span>
              <p className="text-[9px] sm:text-[9.5px] font-bold tracking-wider text-emerald-700 uppercase flex items-center gap-1 whitespace-nowrap">
                <span>सत्यार्थी सोलर सॉल्यूशन</span>
                <span className="text-slate-300">•</span>
                <span className="text-blue-800">{businessData.vendorCode}</span>
              </p>
            </div>
          </button>

          {/* Streamlined Desktop Navigation Links (Compact padding so 1280px screens never overflow) */}
          <nav className="hidden xl:flex items-center gap-0.5 text-sm font-semibold text-slate-700 min-w-0">
            {navLinks.map((link, idx) => {
              const active = isRouteActive(link.route);
              return (
                <motion.button
                  key={idx}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-2 2xl:px-2.5 py-1.5 rounded-xl transition cursor-pointer flex flex-col items-center leading-tight group overflow-hidden whitespace-nowrap ${
                    active
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs"
                      : "hover:text-emerald-700 hover:bg-emerald-50/70"
                  }`}
                >
                  <span className={`text-[11px] 2xl:text-xs font-black transition ${
                    active ? "text-emerald-700" : "text-slate-800 group-hover:text-emerald-700"
                  }`}>
                    {link.en}
                  </span>
                  <span className={`text-[9px] font-bold transition ${
                    active ? "text-emerald-800" : "text-slate-500 group-hover:text-emerald-800"
                  }`}>
                    {link.hi}
                  </span>
                  <span className={`absolute bottom-0 inset-x-2 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-600 transition-transform duration-300 origin-center rounded-full ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </motion.button>
              );
            })}
          </nav>

          {/* Action CTAs: Solar Calculator & Get Quote (Responsive labels so they never clip on the right) */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 text-[11px] font-black text-slate-900 bg-amber-400 hover:bg-amber-300 px-2.5 py-2 rounded-xl transition shadow-xs cursor-pointer border border-amber-300 whitespace-nowrap"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span>Calculator</span>
              <span className="hidden 2xl:inline">• कैलकुलेटर</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (currentRoute !== "/" && onNavigate) {
                  onNavigate("/#contact");
                } else {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 px-2.5 py-2 rounded-xl transition shadow-md shadow-emerald-700/20 cursor-pointer border border-emerald-500/30 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Get Quote</span>
              <span className="hidden 2xl:inline">| कोटेशन</span>
            </motion.button>
          </div>

          {/* Mobile Right Controls: Compact so Brand Name stays on 1 Line */}
          <div className="flex items-center gap-1 sm:gap-2 xl:hidden shrink-0">
            {onOpenFestiveOffer && (
              <button
                type="button"
                onClick={onOpenFestiveOffer}
                aria-label="Open Festive Offer"
                title="Navratri & Diwali Offer"
                className="text-[11px] font-black text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-xl sm:hidden shadow-xs border border-amber-300 flex items-center justify-center"
              >
                <Gift className="w-4 h-4 text-rose-900" />
              </button>
            )}

            <button
              onClick={onOpenCalculator}
              aria-label="Open Solar Calculator"
              title="Solar Calculator"
              className="text-[11px] font-black text-slate-950 bg-amber-400 p-2 rounded-xl sm:hidden shadow-xs border border-amber-300 flex items-center justify-center"
            >
              <Calculator className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition border border-slate-200/80"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET 1-TAP NAVIGATION PANEL (VISIBLE IN EVERY WINDOW!)
          Allows mobile customers to switch between all windows in 1 thumb tap
      ========================================================================= */}
      <div className="xl:hidden bg-slate-900/95 border-t border-slate-800 px-2 py-1.5 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-1.5 min-w-max">
          {mobileQuickPortals.map((item) => {
            const Icon = item.icon;
            const active = isRouteActive(item.route);
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleNavClick({ route: item.route })}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-black transition cursor-pointer whitespace-nowrap ${
                  active
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-sm"
                    : "bg-slate-800/90 text-slate-200 hover:bg-slate-700 border border-slate-700/80"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${active ? "text-slate-950" : "text-emerald-400"}`} />
                <span>{item.label}</span>
                <span className={`text-[9.5px] font-hindi ${active ? "text-slate-900 font-extrabold" : "text-amber-300"}`}>
                  • {item.hi}
                </span>
              </button>
            );
          })}

          {/* Calculator Quick Pill on Mobile Strip */}
          <button
            type="button"
            onClick={onOpenCalculator}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-black bg-amber-400/20 text-amber-300 border border-amber-400/40 hover:bg-amber-400/30 transition cursor-pointer whitespace-nowrap"
          >
            <Calculator className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Calculator</span>
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => {
              const active = isRouteActive(link.route);
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(link)}
                  className={`text-left px-3 py-2.5 rounded-xl text-sm font-bold transition flex items-center justify-between ${
                    active
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  <span>{link.en}</span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {link.hi}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            {onOpenFestiveOffer && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFestiveOffer();
                }}
                className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-slate-950 font-black py-3 rounded-xl shadow-xs border border-amber-300"
              >
                <Gift className="w-5 h-5 text-slate-950" />
                <span>🪔 Navratri & Diwali Special Gift Offer</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCalculator) onOpenCalculator();
              }}
              className="w-full inline-flex justify-center items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 rounded-xl shadow-xs border border-amber-300"
            >
              <Calculator className="w-5 h-5 text-slate-950" />
              <span>Solar Calculator | सोलर कैलकुलेटर</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentRoute !== "/" && onNavigate) {
                  onNavigate("/#contact");
                } else {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-700 text-white font-black py-3 rounded-xl shadow-xs"
            >
              <FileText className="w-5 h-5" />
              <span>Get Quote | मुफ्त कोटेशन प्राप्त करें</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${businessData.phone[0]}`}
                className="w-full inline-flex justify-center items-center gap-1.5 border border-slate-300 text-slate-800 font-bold py-2.5 px-2 rounded-xl text-xs"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24×7: {businessData.phone[0]}</span>
              </a>

              <a
                href={`tel:${businessData.officeNumber}`}
                className="w-full inline-flex justify-center items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold py-2.5 px-2 rounded-xl text-xs"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Office: {businessData.officeNumber}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;