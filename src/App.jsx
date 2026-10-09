import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import SubsidySection from "./components/SubsidySection";
import Quotations from "./components/Quotations";
import Calculator from "./components/Calculator";
import Services from "./components/Services";
import Appliances from "./components/Appliances";
import Products from "./components/Products";
import BentoGallery from "./components/BentoGallery";
import Certificates from "./components/Certificates";
import About from "./components/About";
import LocationMap from "./components/LocationMap";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AIChatbot from "./components/AIChatbot";
import Footer from "./components/Footer";
import AdminModal from "./components/AdminModal";

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Sticky Header with UPNEDA Verification & Official Logo */}
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Stats />
        <SubsidySection />
        <Quotations />
        <Calculator onSelectQuote={(data) => setSelectedQuote(data)} />
        <Services />
        <Appliances />
        <Products />
        {/* Bento Grid Picture Gallery featuring real site installations, showroom hoarding, flyers & Google Maps photos */}
        <BentoGallery />
        <Certificates />
        <About />
        {/* Interactive Google Map Location at Motiram Adda Gorakhpur */}
        <LocationMap />
        <Testimonials />
        <FAQ />
        {/* High-Converting Lead Generation & Contact */}
        <Contact prefilledData={selectedQuote} />
      </main>

      {/* Intelligent AI Solar Assistant (Surya Mitra AI) with Basic FAQs */}
      <AIChatbot />

      {/* Floating Sticky Actions for Indian Mobile Users */}
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

export default App;