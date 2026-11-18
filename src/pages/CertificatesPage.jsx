import Certificates from "../components/Certificates";
import Footer from "../components/Footer";

export default function CertificatesPage({ onNavigateHome, onNavigate, onOpenAdmin, onOpenCalculator }) {
  return (
    <div className="flex-1 bg-[#FAF8F4] text-[#0D1F17] font-sans selection:bg-[#F5C441] selection:text-[#0D1F17] flex flex-col justify-between">
      <main>
        <Certificates isStandalonePage={true} onNavigate={onNavigate} onOpenCalculator={onOpenCalculator} />
      </main>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
