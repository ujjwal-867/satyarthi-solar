import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BrandHeadlineTicker from "./components/BrandHeadlineTicker";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import PortalNavigationHub from "./components/PortalNavigationHub";
import Services from "./components/Services";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AIChatbot from "./components/AIChatbot";
import Footer from "./components/Footer";
import AdminModal from "./components/AdminModal";
import { LanguageProvider } from "./context/LanguageContext";

// Dedicated Independent Portal Pages
import OnGridPage from "./pages/OnGridPage";
import OffGridPage from "./pages/OffGridPage";
import ElectronicsPage from "./pages/ElectronicsPage";
import GalleryPage from "./pages/GalleryPage";

function AppContent() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      {/* Route-Based Dynamic View Rendering */}
      {currentRoute === "/on-grid" ? (
        <OnGridPage 
          onNavigateHome={() => navigateTo("/")}
          onNavigate={navigateTo}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />
      ) : currentRoute === "/off-grid" ? (
        <OffGridPage 
          onNavigateHome={() => navigateTo("/")}
          onNavigate={navigateTo}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />
      ) : currentRoute === "/appliances" || currentRoute === "/electronics" ? (
        <ElectronicsPage 
          onNavigateHome={() => navigateTo("/")}
          onNavigate={navigateTo}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />
      ) : currentRoute === "/gallery" ? (
        <GalleryPage 
          onNavigateHome={() => navigateTo("/")}
          onNavigate={navigateTo}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />
      ) : (
        /* Main Spacious Homepage: Only Highlighted Points, 5 Navigation Portals & Contact */
        <div>
          {/* Sticky Header with UPNEDA Verification & Route Navigation */}
          <Navbar 
            onOpenAdmin={() => setIsAdminOpen(true)} 
            onNavigate={navigateTo}
            currentRoute="/"
          />

          {/* Website Master Headline Bar: Primary Dealer of All Leading Solar Brands */}
          <BrandHeadlineTicker />

          {/* Main Content Sections - Strictly Highlighted Points & Contact */}
          <main>
            {/* Strictly Solar Hero with 5-Button Portal Dock & Real Site Slider */}
            <Hero onNavigate={navigateTo} />

            {/* Concise Verified Statistics */}
            <Stats />

            {/* 5-Portal Action Cards: On-Grid, Off-Grid, Appliances, Gallery, Contact */}
            <PortalNavigationHub onNavigate={navigateTo} />

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

      {/* Persistent Global Floating Assistants across All Pages */}
      <AIChatbot />
      <FloatingWhatsApp />

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