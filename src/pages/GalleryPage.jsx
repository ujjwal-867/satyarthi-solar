import { BentoGallery } from "../components/BentoGallery";
import Footer from "../components/Footer";

export default function GalleryPage({ onNavigateHome, onNavigate, onOpenAdmin }) {
  return (
    <div className="flex-1 bg-[#FAF8F4] text-[#0D1F17] font-sans selection:bg-[#F5C441] selection:text-[#0D1F17] flex flex-col justify-between">
      <div>
        <BentoGallery />
      </div>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
