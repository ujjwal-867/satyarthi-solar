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
  ArrowRight,
  Calculator
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function Navbar({ onOpenAdmin, onNavigate, onOpenCalculator, currentRoute = "/" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simultaneous English + Hindi Navigation Links with Sub-page Portals
  const navLinks = [
    { en: "Home", hi: "होम", route: "/" },
    { en: "On-Grid (Subsidy)", hi: "सब्सिडी दरें", route: "/on-grid" },
    { en: "Off-Grid & Rates", hi: "ऑफ-ग्रिड सूची", route: "/off-grid" },
    { en: "Electronics Store", hi: "इलेक्ट्रॉनिक्स", route: "/appliances" },
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
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-1.5">
          
          {/* Logo & Branding - Guaranteed Single Line on Mobile */}
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
            className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer min-w-0 shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm group-hover:scale-105 group-hover:rotate-2 transition duration-300 border-2 border-emerald-600 bg-white p-0.5 shrink-0">
              <img
                src={businessData.logoImage}
                alt="Satyarthi Solar Solution Logo"
                className="w-full h-full object-contain rounded-lg sm:rounded-xl"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[12.5px] min-[375px]:text-[14px] sm:text-lg lg:text-xl font-black tracking-tight text-slate-900 font-sans whitespace-nowrap leading-tight group-hover:text-emerald-700 transition-colors">
                SATYARTHI SOLAR SOLUTION
              </span>
              <p className="text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-700 uppercase flex items-center gap-1 whitespace-nowrap">
                <span>सत्यार्थी सोलर सॉल्यूशन</span>
                <span className="text-slate-300">•</span>
                <span className="text-blue-800 hidden sm:inline">UPNEDA Empanelled ({businessData.vendorCode})</span>
                <span className="text-blue-800 sm:hidden">{businessData.vendorCode}</span>
              </p>
            </div>
          </button>

          {/* Streamlined Desktop Navigation Links with Animated Hover Underline */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-semibold text-slate-700">
            {navLinks.map((link, idx) => (
              <motion.button
                key={idx}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick(link)}
                className="relative px-3 py-1.5 rounded-xl transition cursor-pointer flex flex-col items-center leading-tight hover:text-emerald-700 hover:bg-emerald-50/70 group overflow-hidden"
              >
                <span className="text-xs font-black text-slate-800 group-hover:text-emerald-700 transition">
                  {link.en}
                </span>
                <span className="text-[10px] font-bold text-slate-500 group-hover:text-emerald-800 transition">
                  {link.hi}
                </span>
                <span className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
              </motion.button>
            ))}
          </nav>

          {/* Action CTAs: Solar Calculator & Get Quote */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 px-3 py-2.5 rounded-xl transition shadow-xs cursor-pointer border border-amber-300"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-950" />
              <span>Solar Calculator • कैलकुलेटर</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                if (currentRoute !== "/" && onNavigate) {
                  onNavigate("/#contact");
                } else {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 px-3.5 py-2.5 rounded-xl transition shadow-md shadow-emerald-700/20 cursor-pointer border border-emerald-500/30"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>Get Quote | मुफ्त कोटेशन</span>
            </motion.button>
          </div>

          {/* Mobile Right Controls: Compact so Brand Name stays on 1 Line */}
          <div className="flex items-center gap-1 sm:gap-2 xl:hidden shrink-0">
            <button
              onClick={onOpenCalculator}
              aria-label="Open Solar Calculator"
              title="Solar Calculator"
              className="text-[11px] font-black text-slate-950 bg-amber-400 p-2 rounded-xl sm:hidden shadow-xs border border-amber-300 flex items-center justify-center"
            >
              <Calculator className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[11px] font-black text-white bg-emerald-600 px-2.5 py-1.5 rounded-xl sm:hidden shadow-xs whitespace-nowrap"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
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