import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import BrandHeadlineTicker from "./components/BrandHeadlineTicker";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import PortalNavigationHub from "./components/PortalNavigationHub";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import LazySection from "./components/LazySection";
import ErrorBoundary from "./components/ErrorBoundary";
import { LanguageProvider } from "./context/LanguageContext";

// Lazy-loaded Below-the-Fold Sections (Dramatically accelerates initial phone page load)
const ARVRSolarVisualizer = lazy(() => import("./components/ARVRSolarVisualizer"));
const Services = lazy(() => import("./components/Services"));
const DistrictsCoverage = lazy(() => import("./components/DistrictsCoverage"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Deferred Floating Assistants & Popups (Zero overhead during initial paint)
const AIChatbot = lazy(() => import("./components/AIChatbot"));
const FestiveOfferPopup = lazy(() => import("./components/FestiveOfferPopup"));

// Lazy-loaded Modals & Independent Portal Pages for Fast Initial Mobile Load
const AdminModal = lazy(() => import("./components/AdminModal"));
const CalculatorModal = lazy(() => import("./components/CalculatorModal"));
const OnGridPage = lazy(() => import("./pages/OnGridPage"));
const OffGridPage = lazy(() => import("./pages/OffGridPage"));
const ElectronicsPage = lazy(() => import("./pages/ElectronicsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const CertificatesPage = lazy(() => import("./pages/CertificatesPage"));

function AppContent() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isFestiveOfferOpen, setIsFestiveOfferOpen] = useState(false);
  const [prefilledQuote, setPrefilledQuote] = useState(null);
  const [loadChatbot, setLoadChatbot] = useState(false);

  // Defer AIChatbot mounting until 2.8s or first scroll/touch to prevent initial thread blocking
  useEffect(() => {
    const onUserActive = () => {
      setLoadChatbot(true);
      window.removeEventListener("scroll", onUserActive);
      window.removeEventListener("touchstart", onUserActive);
    };

    const timer = setTimeout(() => {
      setLoadChatbot(true);
    }, 2800);

    window.addEventListener("scroll", onUserActive, { passive: true });
    window.addEventListener("touchstart", onUserActive, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onUserActive);
      window.removeEventListener("touchstart", onUserActive);
    };
  }, []);

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
    // Notify all lazy sections to mount immediately if navigation occurred
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("mount-all-sections"));
      if (route.includes("certificates")) {
        window.dispatchEvent(new CustomEvent("load-section-images", { detail: { section: "certificates" } }));
      }
      if (route.includes("gallery")) {
        window.dispatchEvent(new CustomEvent("load-section-images", { detail: { section: "gallery" } }));
      }
    }

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
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between pb-14 sm:pb-0">
      {/* Persistent Global Navigation Panel across Every Window (Desktop + 1-Tap Mobile Strip) */}
      <Navbar 
        onOpenAdmin={() => setIsAdminOpen(true)} 
        onNavigate={navigateTo}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        currentRoute={currentRoute}
      />

      {/* Route-Based Dynamic View Rendering */}
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 text-slate-600 text-sm font-bold">
            Loading Satyarthi Solar Portal...
          </div>
        }
      >
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
        ) : currentRoute === "/certificates" ? (
          <CertificatesPage 
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

              {/* Concise Verified Statistics (2500+ Happy Clients) */}
              <Stats />

              {/* 6-Portal Compact Bento Action Cards (Single-Line on Desktop) */}
              <PortalNavigationHub 
                onNavigate={navigateTo} 
                onOpenCalculator={() => setIsCalculatorOpen(true)}
              />

              {/* Interactive 3D AR / VR Solar Roof & Sun-Path Motion Graphics Visualizer (Lazy Loaded) */}
              <LazySection anchorId="ar-vr-solar" minHeight="520px">
                <Suspense fallback={<div className="min-h-[420px]" />}>
                  <ARVRSolarVisualizer 
                    onNavigate={navigateTo}
                    onOpenCalculator={() => setIsCalculatorOpen(true)}
                  />
                </Suspense>
              </LazySection>

              {/* Condensed Core Solar EPC Pillars (Residential, Commercial, Solar Aata Chakki) */}
              <LazySection anchorId="services" minHeight="420px">
                <Suspense fallback={<div className="min-h-[380px]" />}>
                  <Services onNavigate={navigateTo} />
                </Suspense>
              </LazySection>

              {/* District-Specific SEO Anchors & All 75 Districts of UP Coverage */}
              <LazySection anchorId="districts-coverage" minHeight="460px">
                <Suspense fallback={<div className="min-h-[420px]" />}>
                  <DistrictsCoverage 
                    onSelectDistrict={(district) => {
                      if (typeof window !== "undefined") {
                        window.dispatchEvent(new CustomEvent("mount-all-sections"));
                      }
                      setPrefilledQuote({
                        location: district,
                        customMessage: `I am interested in a free rooftop solar survey and PM Surya Ghar subsidy consultation in ${district}, Uttar Pradesh.`
                      });
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                </Suspense>
              </LazySection>

              {/* Google Reviews & Real Purvanchal Client Ratings */}
              <LazySection anchorId="testimonials" minHeight="420px">
                <Suspense fallback={<div className="min-h-[380px]" />}>
                  <Testimonials />
                </Suspense>
              </LazySection>

              {/* High-Converting Lead Generation & Free Site Survey Booking */}
              <LazySection anchorId="contact" minHeight="550px">
                <Suspense fallback={<div className="min-h-[500px]" />}>
                  <Contact prefilledData={prefilledQuote} />
                </Suspense>
              </LazySection>
            </main>

            {/* Comprehensive Clean Footer with Direct Portal Links & Socials */}
            <LazySection minHeight="240px">
              <Suspense fallback={<div className="min-h-[200px]" />}>
                <Footer 
                  onOpenAdmin={() => setIsAdminOpen(true)} 
                  onNavigate={navigateTo}
                />
              </Suspense>
            </LazySection>
          </div>
        )}
      </Suspense>

      {/* Navratri & Diwali Maha-Utsav Animated Popup & Floating Gift Trigger (Lazy) */}
      <Suspense fallback={null}>
        <FestiveOfferPopup 
          isOpenExternal={isFestiveOfferOpen}
          onCloseExternal={() => setIsFestiveOfferOpen(false)}
        />
      </Suspense>

      {/* Persistent Global Floating Assistants across All Pages (Chatbot deferred for instant mobile paint) */}
      {loadChatbot && (
        <Suspense fallback={null}>
          <AIChatbot />
        </Suspense>
      )}
      <FloatingWhatsApp />

      {/* Lazy-Loaded Modals */}
      <Suspense fallback={null}>
        <ErrorBoundary>
          {isCalculatorOpen && (
            <CalculatorModal 
              isOpen={isCalculatorOpen} 
              onClose={() => setIsCalculatorOpen(false)}
              onApplyQuote={(quoteData) => {
                setPrefilledQuote(quoteData);
                setIsCalculatorOpen(false);
                navigateTo("/#contact");
              }}
            />
          )}

          {isAdminOpen && (
            <AdminModal 
              isOpen={isAdminOpen} 
              onClose={() => setIsAdminOpen(false)} 
            />
          )}
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;