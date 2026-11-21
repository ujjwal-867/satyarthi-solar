import { BentoGallery } from "../components/BentoGallery";
import Footer from "../components/Footer";

export default function GalleryPage({ onNavigateHome, onNavigate, onOpenAdmin }) {
  return (
    <div className="flex-1 bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <div>
        <BentoGallery />
      </div>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
