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
  ArrowRight
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function Navbar({ onOpenAdmin, onNavigate, currentRoute = "/" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simultaneous English + Hindi Navigation Links with Sub-page Portals
  const navLinks = [
    { en: "Home", hi: "होम", route: "/" },
    { en: "On-Grid (Subsidy)", hi: "सब्सिडी दरें", route: "/on-grid" },
    { en: "Off-Grid & Rates", hi: "ऑफ-ग्रिड सूची", route: "/off-grid" },
    { en: "Electronics Store", hi: "इलेक्ट्रॉनिक्स", route: "/appliances", isElectronics: true },
    { en: "Site Gallery", hi: "गैलरी", route: "/gallery" },
    { en: "Certificates", hi: "प्रमाणपत्र", href: "#certificates" },
    { en: "Contact", hi: "संपर्क", href: "#contact" },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      {/* Top Govt & Contact Strip with Direct Social Links */}
      <div className="bg-gradient-to-r from-blue-900 via-teal-900 to-emerald-900 text-white text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
          
          {/* Left: Govt Approvals & Vendor Code */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1 bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded text-[11px] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
              UPNEDA APPROVED • यूपीनेडा अधिकृत
            </span>
            <span className="text-teal-300">|</span>
            <span className="text-slate-100 font-medium text-[11px]">
              Vendor Code: <strong className="text-emerald-300 font-mono">{businessData.vendorCode}</strong>
            </span>
            <span className="hidden md:inline text-teal-300">|</span>
            <span className="hidden md:inline text-slate-200 text-[11px]">
              GST: <strong className="text-white font-mono">{businessData.gstin}</strong>
            </span>
          </div>

          {/* Right: Social Media, Helplines & Admin */}
          <div className="flex items-center gap-3 text-xs flex-wrap justify-center">
            {/* Direct Instagram & Facebook Icons */}
            <div className="flex items-center gap-2 pr-2 sm:border-r border-teal-700/60">
              <a 
                href={businessData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-teal-200 hover:text-pink-300 transition flex items-center gap-1"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[10px]">Instagram</span>
              </a>
              <span className="text-teal-500">|</span>
              <a 
                href={businessData.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="text-teal-200 hover:text-sky-300 transition flex items-center gap-1"
                title="Connect on Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[10px]">Facebook</span>
              </a>
            </div>

            <a 
              href={`tel:${businessData.phone[0]}`}
              className="inline-flex items-center gap-1 hover:text-emerald-300 transition font-bold"
              title="24x7 Helpline"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+91 {businessData.phone[0]}</span>
            </a>

            {/* Admin CRM Shortcut */}
            <button
              onClick={onOpenAdmin}
              title="Admin CRM Login"
              className="inline-flex items-center gap-1 text-teal-200 hover:text-white transition text-[11px] ml-1"
            >
              <Lock className="w-3 h-3" />
              <span className="hidden lg:inline">Admin</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Branding */}
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
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-sm group-hover:scale-105 transition duration-300 border-2 border-emerald-600 bg-white p-0.5">
              <img
                src={businessData.logoImage}
                alt="Satyarthi Solar Solution Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 font-sans">
                SATYARTHI SOLAR SOLUTION
              </span>
              <p className="text-[10px] font-bold tracking-wider text-emerald-700 uppercase flex items-center gap-1.5">
                <span>सत्यार्थी सोलर सॉल्यूशन</span>
                <span className="text-slate-300">•</span>
                <span className="text-blue-800">UPNEDA Empanelled ({businessData.vendorCode})</span>
              </p>
            </div>
          </button>

          {/* Streamlined Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-semibold text-slate-700">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(link)}
                className={`px-3 py-2 rounded-xl transition cursor-pointer flex flex-col items-center leading-tight group ${
                  link.isElectronics 
                    ? "bg-blue-50/80 hover:bg-blue-100 text-blue-900 border border-blue-200" 
                    : "hover:text-blue-700 hover:bg-blue-50/70"
                }`}
              >
                <span className="text-xs font-black text-slate-900 group-hover:text-blue-700 transition flex items-center gap-1">
                  {link.en}
                  {link.isElectronics && <span className="text-[9px] bg-blue-600 text-white px-1.5 py-0.2 rounded font-mono">Store</span>}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 group-hover:text-emerald-800 transition">
                  {link.hi}
                </span>
              </button>
            ))}
          </nav>

          {/* Action CTA: Get Quote */}
          <div className="hidden sm:flex items-center gap-2.5">
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (currentRoute !== "/" && onNavigate) {
                  onNavigate("/#contact");
                } else {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 text-xs font-black text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 px-4 py-2.5 rounded-xl transition shadow-md shadow-emerald-700/20 cursor-pointer border border-emerald-500/30"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Get Quote | मुफ्त कोटेशन</span>
            </motion.button>
          </div>

          {/* Mobile Right Controls: Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs font-black text-white bg-emerald-600 px-3 py-2 rounded-xl sm:hidden shadow-xs"
            >
              Quote | कोटेशन
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(link)}
                className="text-left px-3 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 transition flex items-center justify-between"
              >
                <span>{link.en}</span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {link.hi}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
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

            <a
              href={`tel:${businessData.phone[0]}`}
              className="w-full inline-flex justify-center items-center gap-2 border border-slate-300 text-slate-800 font-bold py-3 rounded-xl"
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>Call 24×7: +91 {businessData.phone[0]}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;