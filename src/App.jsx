import { useState } from "react";
import Navbar from "./components/Navbar";
import BrandHeadlineTicker from "./components/BrandHeadlineTicker";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import SubsidySection from "./components/SubsidySection";
import Services from "./components/Services";
import Appliances from "./components/Appliances";
import BentoGallery from "./components/BentoGallery";
import Certificates from "./components/Certificates";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AIChatbot from "./components/AIChatbot";
import Footer from "./components/Footer";
import AdminModal from "./components/AdminModal";
import { LanguageProvider } from "./context/LanguageContext";

function AppContent() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Sticky Header with UPNEDA Verification, Streamlined Nav & Language Switcher */}
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Website Master Headline Bar: Primary Dealer of All Leading Solar Brands */}
      <BrandHeadlineTicker />

      {/* Main Content Sections - Spacious & Clean Modern Layout */}
      <main>
        {/* Strictly Solar Hero with Side-by-Side Responsive Layout & High-Res Image Slider */}
        <Hero />
        <Stats />
        {/* Official PM Surya Ghar Subsidy Scheme & Official Price List */}
        <SubsidySection />
        {/* Solar Solutions & Aata Chakki EPC Services */}
        <Services />
        {/* Solar + Electronics Home Appliances Store & Zero-Bill Summer Combo */}
        <Appliances />
        {/* Bento Grid Picture Gallery featuring real site installations */}
        <BentoGallery />
        {/* Verified Government Empanelment & Dealership Certificates */}
        <Certificates />
        {/* About Satyarthi Solar & Er. Satyaprakash */}
        <About />
        {/* Verified Customer Reviews & Google Ratings */}
        <Testimonials />
        {/* High-Converting Lead Generation & Survey Booking */}
        <Contact />
      </main>

      {/* Intelligent AI Solar Assistant (Surya Mitra AI) on Bottom-Right */}
      <AIChatbot />

      {/* Floating WhatsApp on Bottom-Left (clean separation & wide gap from Chatbot) */}
      <FloatingWhatsApp />

      {/* Comprehensive Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

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