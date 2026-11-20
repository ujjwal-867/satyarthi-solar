import Certificates from "../components/Certificates";
import Footer from "../components/Footer";

export default function CertificatesPage({ onNavigateHome, onNavigate, onOpenAdmin, onOpenCalculator }) {
  return (
    <div className="flex-1 bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      <main>
        <Certificates isStandalonePage={true} onNavigate={onNavigate} onOpenCalculator={onOpenCalculator} />
      </main>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
