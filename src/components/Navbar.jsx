import { useState } from "react";
import { businessData } from "../data/businessData";
import { 
  Phone, 
  MessageCircle, 
  Sun, 
  Menu, 
  X, 
  ShieldCheck, 
  Award, 
  Calculator, 
  Lock 
} from "lucide-react";

function Navbar({ onOpenAdmin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "PM Surya Ghar", href: "#subsidy" },
    { name: "Quotations", href: "#quotations" },
    { name: "Services", href: "#services" },
    { name: "Appliances", href: "#appliances" },
    { name: "Calculator", href: "#calculator" },
    { name: "Bento Gallery", href: "#gallery" },
    { name: "Certificates", href: "#certificates" },
    { name: "Map & Store", href: "#location" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
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
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-900 font-bold px-2 py-0.5 rounded text-[11px] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              UPNEDA APPROVED
            </span>
            <span className="hidden md:inline text-emerald-100">|</span>
            <span className="text-emerald-100 font-medium text-[11px]">
              Code: <strong className="text-white tracking-wider">{businessData.vendorCode}</strong>
            </span>
            <span className="hidden lg:inline text-emerald-100">|</span>
            <span className="hidden lg:inline text-emerald-100 text-[11px]">
              GSTIN: <strong className="text-white tracking-wider font-mono">{businessData.gstin}</strong>
            </span>
            <span className="hidden xl:inline text-emerald-100">|</span>
            <span className="hidden xl:inline text-amber-200 text-[11px]">
              Loom & Fujiyama Authorized
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="hidden xl:inline text-amber-300 font-bold text-[10px] bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-600/80">
              ⚡ 24x7 Helpline
            </span>
            <a 
              href={`tel:${businessData.phone[0]}`}
              className="inline-flex items-center gap-1 hover:text-amber-300 transition font-medium"
              title="24x7 Business Number: Er. Satya Prakash"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>+91 {businessData.phone[0]}</span>
            </a>
            <span className="text-emerald-300">/</span>
            <a 
              href={`tel:${businessData.phone[1]}`}
              className="hidden sm:inline hover:text-amber-300 transition font-medium"
              title="24x7 Business Number"
            >
              <span>{businessData.phone[1]}</span>
            </a>
            <span className="hidden md:inline text-emerald-300">|</span>
            <a 
              href={`tel:${businessData.officeNumber}`}
              className="hidden md:inline text-amber-300 hover:underline font-medium text-[11px]"
              title="Office Landline / Direct"
            >
              Office: {businessData.officeNumber}
            </a>
            <button
              onClick={onOpenAdmin}
              title="Admin Portal"
              className="inline-flex items-center gap-1 text-emerald-200 hover:text-white transition text-[11px] ml-1"
            >
              <Lock className="w-3 h-3" />
              <span className="hidden md:inline">Admin</span>
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
              <p className="text-[10px] font-semibold tracking-wider text-emerald-700 uppercase">
                UPNEDA & MNRE Approved • GST: {businessData.gstin}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.name}
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
              onClick={() => handleScroll("#calculator")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-2.5 rounded-xl hover:bg-emerald-100 transition cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>Solar Calc</span>
            </button>

            <a
              href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
                "Hello Er. Satyaprakash, I am inquiring about solar installation for my home/business in Uttar Pradesh."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-xl transition shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 px-4 py-2.5 rounded-xl transition shadow-sm shadow-amber-400/20 cursor-pointer"
            >
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => handleScroll("#contact")}
              className="text-xs font-bold text-slate-900 bg-amber-400 px-3 py-2 rounded-lg sm:hidden"
            >
              Get Quote
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
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 transition"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/91${businessData.whatsapp[0]}`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex justify-center items-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-xl"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${businessData.phone[0]}`}
              className="w-full inline-flex justify-center items-center gap-2 border border-slate-300 text-slate-800 font-bold py-3 rounded-xl"
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              Call Er. Satyaprakash (+91 {businessData.phone[0]})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;