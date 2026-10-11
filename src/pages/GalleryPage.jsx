import { BentoGallery } from "../components/BentoGallery";
import ARVRSolarVisualizer from "../components/ARVRSolarVisualizer";
import Footer from "../components/Footer";

export default function GalleryPage({ onNavigateHome, onNavigate, onOpenAdmin, onOpenCalculator }) {
  return (
    <div className="flex-1 bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      <div>
        {/* Gallery Content with Expressive Kinetic Typography & Real-Time Collaborative Animations */}
        <BentoGallery />

        {/* Interactive 3D AR/VR Solar Roof Visualizer */}
        <ARVRSolarVisualizer
          onNavigate={onNavigate || onNavigateHome}
          onOpenCalculator={onOpenCalculator}
        />
      </div>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
