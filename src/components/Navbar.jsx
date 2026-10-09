import { useState } from "react";
import { businessData } from "../data/businessData";
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ShieldCheck, 
  FileText,
  Lock,
  Languages,
  MapPin
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Navbar({ onOpenAdmin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.home, href: "#hero" },
    { name: t.pmSuryaGhar, href: "#subsidy" },
    { name: t.quotations, href: "#quotations" },
    { name: t.certifications, href: "#certificates" },
    { name: t.gallery, href: "#gallery" },
    { name: t.calculator, href: "#calculator" },
    { name: t.location, href: "#location" },
    { name: t.contact, href: "#contact" },
  ];

  const handleScroll = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Govt & Contact Strip */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
          
          {/* Left: Govt Approvals & Vendor Code */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded text-[11px] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t.upnedaApproved}
            </span>
            <span className="text-emerald-200">|</span>
            <span className="text-emerald-100 font-medium text-[11px]">
              {t.vendorCode}: <strong className="text-white tracking-wider font-mono">{businessData.vendorCode}</strong>
            </span>
            <span className="hidden md:inline text-emerald-200">|</span>
            <span className="hidden md:inline text-emerald-100 text-[11px]">
              GST: <strong className="text-white tracking-wider font-mono">{businessData.gstin}</strong>
            </span>
            <span className="hidden lg:inline text-emerald-200">|</span>
            <span className="hidden lg:inline text-amber-200 font-semibold text-[11px]">
              Loom Solar & Fujiyama Authorized
            </span>
          </div>

          {/* Right: 24x7 Helplines & Language Switcher */}
          <div className="flex items-center gap-3 text-xs flex-wrap justify-center">
            <span className="hidden sm:inline text-amber-300 font-bold text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-600/70">
              ⚡ {t.helpline24x7}
            </span>

            <a 
              href={`tel:${businessData.phone[0]}`}
              className="inline-flex items-center gap-1 hover:text-amber-300 transition font-bold"
              title="24x7 Helpline: Er. Satyaprakash"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>+91 {businessData.phone[0]}</span>
            </a>

            <span className="text-emerald-400">/</span>

            <a 
              href={`tel:${businessData.phone[1]}`}
              className="hover:text-amber-300 transition font-bold"
              title="24x7 Helpline"
            >
              <span>{businessData.phone[1]}</span>
            </a>

            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-2.5 py-0.5 rounded-full shadow-xs transition cursor-pointer text-[11px]"
              title="Switch Language / भाषा बदलें"
            >
              <Languages className="w-3 h-3" />
              <span>{lang === "en" ? "हिन्दी" : "English"}</span>
            </button>

            {/* Admin CRM Shortcut */}
            <button
              onClick={onOpenAdmin}
              title="Admin CRM Login"
              className="inline-flex items-center gap-1 text-emerald-200 hover:text-white transition text-[11px] ml-0.5"
            >
              <Lock className="w-3 h-3" />
              <span className="hidden lg:inline">{t.admin}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Branding */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition duration-300 border-2 border-emerald-600 bg-white p-0.5">
              <img
                src={businessData.logoImage}
                alt="Satyarthi Solar Solution Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-sans">
                  SATYARTHI
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-500">
                  SOLAR
                </span>
              </div>
              <p className="text-[10px] font-bold tracking-wider text-emerald-700 uppercase">
                {lang === "hi" 
                  ? "यूपीनेडा अधिकृत सोलर वेंडर • गोरखपुर" 
                  : `UPNEDA & MNRE Approved • GST: ${businessData.gstin}`}
              </p>
            </div>
          </a>

          {/* Streamlined Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-bold text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => handleScroll("#quotations")}
              className="inline-flex items-center gap-1.5 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-500 px-4 py-2.5 rounded-xl transition shadow-sm shadow-amber-400/20 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>{t.btnGetQuote}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Language Switcher + Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="text-xs font-black bg-amber-400 text-slate-950 px-2.5 py-1.5 rounded-lg flex items-center gap-1"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "हिन्दी" : "EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-left px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 transition"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => handleScroll("#quotations")}
              className="w-full inline-flex justify-center items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-3 rounded-xl shadow-xs"
            >
              <FileText className="w-5 h-5" />
              <span>{t.btnGetQuote}</span>
            </button>

            <a
              href={`tel:${businessData.phone[0]}`}
              className="w-full inline-flex justify-center items-center gap-2 border border-slate-300 text-slate-800 font-bold py-3 rounded-xl"
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>{t.callNow}: +91 {businessData.phone[0]}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;