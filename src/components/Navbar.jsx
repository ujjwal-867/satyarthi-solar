import { useState } from "react";
import { businessData } from "../data/businessData";
import { Menu, X, Phone } from "lucide-react";

function Navbar({
  onNavigate,
  onOpenCalculator,
  currentRoute = "/"
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", route: "/" },
    { label: "On-Grid Subsidy", route: "/on-grid" },
    { label: "Off-Grid & Chakki", route: "/off-grid" },
    { label: "Appliances", route: "/appliances" },
    { label: "Gallery", route: "/gallery" },
    { label: "Certificates", route: "/certificates" }
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
      if (link.route === "/certificates") {
        window.dispatchEvent(new CustomEvent("load-section-images", { detail: { section: "certificates" } }));
      }
      if (link.route === "/gallery") {
        window.dispatchEvent(new CustomEvent("load-section-images", { detail: { section: "gallery" } }));
      }
    }
    if (link.route && onNavigate) {
      onNavigate(link.route);
    }
  };

  const handleContactJump = () => {
    setMobileMenuOpen(false);
    if (currentRoute !== "/" && onNavigate) {
      onNavigate("/#contact");
    } else {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between gap-4">
          {/* Left: Brand Identity */}
          <button
            type="button"
            onClick={() => handleNavClick({ route: "/" })}
            className="flex items-center gap-3 text-left cursor-pointer shrink-0 group"
          >
            <img
              src={businessData.logoImage}
              alt="Satyarthi Solar Solution"
              className="w-9 h-9 rounded-lg object-cover border border-[#E5E0D8]"
            />
            <div className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight text-[#0D1F17] group-hover:text-[#083D2A] transition-colors">
                Satyarthi Solar
              </span>
              <span className="block text-[11px] text-[#5C6660] font-medium">
                UPNEDA · {businessData.vendorCode}
              </span>
            </div>
          </button>

          {/* Center: Clean Single-Row Text Links */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isRouteActive(link.route);
              return (
                <button
                  key={link.route}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`relative py-6 text-sm transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? "text-[#0D1F17] font-semibold"
                      : "text-[#4B5550] hover:text-[#0D1F17] font-medium"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 inset-x-0 h-[2.5px] bg-[#F5C441] transition-opacity duration-200 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right: 2 Crisp SolarHub-Style Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenCalculator}
              className="px-4 py-2 rounded-md text-xs font-semibold text-[#0D1F17] bg-white hover:bg-[#FDF3D0] border border-[#F5C441] transition-colors cursor-pointer whitespace-nowrap"
            >
              Calculator
            </button>
            <button
              type="button"
              onClick={handleContactJump}
              className="px-4 py-2 rounded-md text-xs font-semibold text-white bg-[#083D2A] hover:bg-[#062E20] transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Survey
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenCalculator}
              className="sm:hidden px-3 py-1.5 rounded-md text-xs font-semibold text-[#0D1F17] border border-[#F5C441] bg-[#FDF3D0]/50 cursor-pointer"
            >
              Calculator
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-md text-[#0D1F17] hover:bg-[#FAF8F4] border border-[#E5E0D8] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E0D8] px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col divide-y divide-[#EFECE4]">
            {navLinks.map((link) => {
              const active = isRouteActive(link.route);
              return (
                <button
                  key={link.route}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`py-3 text-left text-sm flex items-center justify-between cursor-pointer ${
                    active ? "text-[#083D2A] font-bold" : "text-[#4B5550] font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#F5C441]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E5E0D8] grid grid-cols-2 gap-2.5">
            <a
              href={`tel:${businessData.phone[0]}`}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md border border-[#E5E0D8] text-xs font-semibold text-[#0D1F17] bg-[#FAF8F4]"
            >
              <Phone className="w-3.5 h-3.5 text-[#083D2A]" />
              <span>Call Helpline</span>
            </a>
            <button
              type="button"
              onClick={handleContactJump}
              className="py-2.5 px-3 rounded-md bg-[#083D2A] text-white text-xs font-semibold cursor-pointer"
            >
              Book Free Survey
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
