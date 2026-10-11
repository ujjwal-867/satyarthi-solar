import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BrandHeadlineTicker from "./components/BrandHeadlineTicker";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import PortalNavigationHub from "./components/PortalNavigationHub";
import ARVRSolarVisualizer from "./components/ARVRSolarVisualizer";
import Services from "./components/Services";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AIChatbot from "./components/AIChatbot";
import Footer from "./components/Footer";
import AdminModal from "./components/AdminModal";
import CalculatorModal from "./components/CalculatorModal";
import FestiveOfferPopup from "./components/FestiveOfferPopup";
import { LanguageProvider } from "./context/LanguageContext";

// Dedicated Independent Portal Pages
import OnGridPage from "./pages/OnGridPage";
import OffGridPage from "./pages/OffGridPage";
import ElectronicsPage from "./pages/ElectronicsPage";
import GalleryPage from "./pages/GalleryPage";

function AppContent() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isFestiveOfferOpen, setIsFestiveOfferOpen] = useState(false);

  // Parse path or hash for clean SPA routing with full browser Back/Forward support
  const getInitialRoute = () => {
    if (typeof window === "undefined") return "/";
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (path.includes("on-grid") || hash === "#on-grid") return "/on-grid";
    if (path.includes("off-grid") || hash === "#off-grid") return "/off-grid";
    if (path.includes("appliance") || path.includes("electronic") || hash === "#appliances" || hash === "#electronics") return "/appliances";
    if (path.includes("gallery") || hash === "#gallery") return "/gallery";
    return "/";
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  // Sync route on browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  const navigateTo = (route) => {
    if (route.startsWith("/#") || route.startsWith("#")) {
      const targetHash = route.replace("/", "");
      if (currentRoute !== "/") {
        setCurrentRoute("/");
        window.history.pushState({}, "", "/" + targetHash);
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      } else {
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    setCurrentRoute(route);
    window.history.pushState({}, "", route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      {/* Persistent Global Navigation Panel across Every Window (Desktop + 1-Tap Mobile Strip) */}
      <Navbar 
        onOpenAdmin={() => setIsAdminOpen(true)} 
        onNavigate={navigateTo}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenFestiveOffer={() => setIsFestiveOfferOpen(true)}
        currentRoute={currentRoute}
      />

      {/* Route-Based Dynamic View Rendering */}
      {currentRoute === "/on-grid" ? (
        <OnGridPage 
          onNavigateHome={() => navigateTo("/")}
          onNavigate={navigateTo}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
      ) : currentRoute === "/off-grid" ? (
        <OffGridPage 
          onNavigateHome={() => navigateTo("/")}
          onNavigate={navigateTo}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
      ) : currentRoute === "/appliances" || currentRoute === "/electronics" ? (
        <ElectronicsPage 
          onNavigateHome={() => navigateTo("/")}
          onNavigate={navigateTo}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
      ) : currentRoute === "/gallery" ? (
        <GalleryPage 
          onNavigateHome={() => navigateTo("/")}
          onNavigate={navigateTo}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
      ) : (
        /* Main Spacious Homepage: Only Highlighted Points, 6 Navigation Portals, 3D AR/VR & Contact */
        <div className="flex-1 flex flex-col justify-between">
          {/* Website Master Headline Bar: Primary Dealer of All Leading Solar Brands */}
          <BrandHeadlineTicker />

          {/* Main Content Sections - Strictly Highlighted Points & Contact */}
          <main>
            {/* Strictly Solar Hero with 6-Button Portal Dock & Real Site Slider */}
            <Hero 
              onNavigate={navigateTo} 
              onOpenCalculator={() => setIsCalculatorOpen(true)}
            />

            {/* Concise Verified Statistics (2500+ Happy Clients & Live Collab Ticker) */}
            <Stats />

            {/* 6-Portal Compact Bento Action Cards (Single-Line on Desktop) */}
            <PortalNavigationHub 
              onNavigate={navigateTo} 
              onOpenCalculator={() => setIsCalculatorOpen(true)}
            />

            {/* Interactive 3D AR / VR Solar Roof & Sun-Path Motion Graphics Visualizer */}
            <ARVRSolarVisualizer 
              onNavigate={navigateTo}
              onOpenCalculator={() => setIsCalculatorOpen(true)}
            />

            {/* Condensed Core Solar EPC Pillars (Residential, Commercial, Solar Aata Chakki) */}
            <Services onNavigate={navigateTo} />

            {/* Verified Government Empanelment & Brand Dealership Certificates */}
            <Certificates />

            {/* Google Reviews & Real Purvanchal Client Ratings */}
            <Testimonials />

            {/* High-Converting Lead Generation & Free Site Survey Booking */}
            <Contact />
          </main>

          {/* Comprehensive Clean Footer with Direct Portal Links & Socials */}
          <Footer 
            onOpenAdmin={() => setIsAdminOpen(true)} 
            onNavigate={navigateTo}
          />
        </div>
      )}

      {/* Navratri & Diwali Maha-Utsav Animated Popup & Floating Gift Trigger */}
      <FestiveOfferPopup 
        isOpenExternal={isFestiveOfferOpen}
        onCloseExternal={() => setIsFestiveOfferOpen(false)}
      />

      {/* Persistent Global Floating Assistants across All Pages */}
      <AIChatbot />
      <FloatingWhatsApp />

      {/* Interactive Solar Subsidy & Savings Calculator Modal */}
      <CalculatorModal 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />

      {/* Secure In-Browser & Server Admin CRM Modal */}
      <AdminModal 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
      />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;