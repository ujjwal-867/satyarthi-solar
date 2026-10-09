import { useState, useEffect, useRef } from "react";
import { 
  Sun, 
  ShieldCheck, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function SolarImageSlider() {
  const { lang, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slides = [
    {
      image: "/images/projects/site-installation-1.jpg",
      tag: t.slide1Tag,
      title: t.slide1Title,
      desc: t.slide1Desc,
      capacity: "3 kW On-Grid",
      location: "Gorakhpur, UP",
      subsidy: "₹1,08,000 Subsidy"
    },
    {
      image: "/images/projects/site-installation-2.jpg",
      tag: t.slide2Tag,
      title: t.slide2Title,
      desc: t.slide2Desc,
      capacity: "5 kW Mono PERC",
      location: "Deoria Road, GKP",
      subsidy: "25-Yr Warranty"
    },
    {
      image: "/images/projects/site-installation-3.jpg",
      tag: t.slide3Tag,
      title: t.slide3Title,
      desc: t.slide3Desc,
      capacity: "10 kW Dual Inverter",
      location: "Kushinagar Highway",
      subsidy: "Net Metering Live"
    },
    {
      image: "/images/projects/site-installation-4.jpg",
      tag: t.slide4Tag,
      title: t.slide4Title,
      desc: t.slide4Desc,
      capacity: "15 HP Solar Drive",
      location: "Basti / Sant Kabir Nagar",
      subsidy: "Zero Diesel Mill"
    },
    {
      image: "/images/projects/site-installation-5.jpg",
      tag: t.slide5Tag,
      title: t.slide5Title,
      desc: t.slide5Desc,
      capacity: "Motiram Adda Hub",
      location: "Gorakhpur - 273202",
      subsidy: "UPNEDA Authorized"
    },
    {
      image: "/images/projects/site-installation-6.jpg",
      tag: t.slide6Tag,
      title: t.slide6Title,
      desc: t.slide6Desc,
      capacity: "Turnkey EPC Plant",
      location: "Eastern Uttar Pradesh",
      subsidy: "100% Quality Assured"
    }
  ];

  // Auto-advance continuously every 2.8 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 bg-slate-900 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient Lighting Glow Behind Image */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl pointer-events-none"></div>

      {/* Main Image Slides with Cross-Fade Transition */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden bg-slate-950">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-3000 ease-out"
                loading={idx === 0 ? "eager" : "lazy"}
              />

              {/* Gradient Darkening for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent"></div>
            </div>
          );
        })}

        {/* Top Floating Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-amber-400/40 px-3 py-1 rounded-full text-xs font-bold text-amber-300 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{slides[currentSlide].capacity}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{slides[currentSlide].subsidy}</span>
          </div>
        </div>

        {/* Bottom Slide Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-md border border-amber-400/20">
              <Sun className="w-3 h-3 animate-spin [animation-duration:8s]" />
              <span>{slides[currentSlide].tag}</span>
            </div>

            <h3 className="text-base sm:text-lg font-black text-white tracking-tight line-clamp-1">
              {slides[currentSlide].title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-normal line-clamp-1">
              {slides[currentSlide].desc}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {slides[currentSlide].location}
              </span>
              <span className="font-mono text-slate-400">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>
        </div>

        {/* Previous & Next Control Arrows (visible on hover) */}
        <button
          onClick={goToPrev}
          aria-label="Previous Solar Slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-emerald-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 border border-white/20 shadow-lg cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          aria-label="Next Solar Slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-emerald-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 border border-white/20 shadow-lg cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Continuous Animation Progress Strip & Thumb Dots */}
      <div className="bg-slate-950 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 flex-1">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide 
                  ? "w-8 bg-gradient-to-r from-amber-400 to-emerald-400" 
                  : "w-2 bg-slate-700 hover:bg-slate-500"
              }`}
              title={`Slide ${idx + 1}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="text-[10px] text-slate-400 font-mono tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
          <span>LIVE ROTATION</span>
        </div>
      </div>
    </div>
  );
}

export default SolarImageSlider;
