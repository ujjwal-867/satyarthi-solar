import { ArrowLeft, Sparkles, MapPin, Phone } from "lucide-react";
import { BentoGallery } from "../components/BentoGallery";
import { businessData } from "../data/businessData";
import { InstagramIcon, FacebookIcon } from "../components/SocialIcons";
import Footer from "../components/Footer";

export default function GalleryPage({ onNavigateHome, onNavigate, onOpenAdmin }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
          <div className="bg-gradient-to-r from-blue-900 via-teal-900 to-emerald-900 text-white text-xs py-1.5 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
              <div className="flex items-center gap-2 text-[11px]">
                <span className="bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded text-[10px]">
                  VERIFIED SITES
                </span>
                <span>Real Works & Sites • Gorakhpur, Deoria & Purvanchal Hub</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <a href={businessData.instagramUrl} target="_blank" rel="noreferrer" className="text-teal-200 hover:text-pink-300">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a href={businessData.facebookUrl} target="_blank" rel="noreferrer" className="text-teal-200 hover:text-sky-300">
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <span className="text-teal-500">|</span>
                <a href={`tel:${businessData.phone[0]}`} className="text-emerald-300 font-bold hover:underline">
                  📞 +91 {businessData.phone[0]}
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3.5 py-2 rounded-xl text-xs transition cursor-pointer shadow-xs border border-slate-200"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-600" />
              <span>Back to Main Home • सोलर होम</span>
            </button>

            <div className="text-right">
              <span className="text-sm font-black text-slate-900 block">REAL WORKS & SITES GALLERY</span>
              <span className="text-[11px] font-bold text-emerald-700 font-hindi">लाइव साइट इंस्टॉलेशन फोटो गैलरी</span>
            </div>
          </div>
        </header>

        {/* Gallery Content */}
        <BentoGallery />
      </div>

      <Footer onOpenAdmin={onOpenAdmin} onNavigate={onNavigate || onNavigateHome} />
    </div>
  );
}
