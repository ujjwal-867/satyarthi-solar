import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, 
  Zap, 
  Compass, 
  Camera, 
  Box, 
  Sparkles, 
  RotateCw, 
  Eye, 
  ShieldCheck, 
  Users, 
  Sliders, 
  MousePointer,
  BatteryCharging,
  CheckCircle2,
  Maximize2,
  Video,
  VideoOff
} from "lucide-react";

const SYSTEM_PRESETS = [
  {
    id: "3kw",
    name: "3 kW Residential On-Grid",
    hi: "3 किलोवाट घरेलू ऑन-ग्रिड",
    panels: 6,
    peakKw: 3.0,
    dailyUnits: 15,
    monthlySavings: "₹3,600",
    subsidy: "₹1,08,000",
    netCost: "₹82,000*",
    structure: "Hot-Dip GI Elevated Frame"
  },
  {
    id: "5kw",
    name: "5 kW Gazebo Solar Pergola",
    hi: "5 किलोवाट एलिवेटेड सोलर परगोला",
    panels: 9,
    peakKw: 5.0,
    dailyUnits: 25,
    monthlySavings: "₹6,000",
    subsidy: "₹1,08,000",
    netCost: "₹1,92,000*",
    structure: "High-Clearance Walkable Pergola"
  },
  {
    id: "10kw",
    name: "10 kW Commercial / Villa",
    hi: "10 किलोवाट कमर्शियल सोलर प्लांट",
    panels: 18,
    peakKw: 10.0,
    dailyUnits: 50,
    monthlySavings: "₹12,500",
    subsidy: "₹1,08,000",
    netCost: "₹4,92,000*",
    structure: "150 km/h Storm-Proof Industrial Truss"
  }
];

export default function ARVRSolarVisualizer({ onOpenCalculator, onNavigate }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const [selectedPreset, setSelectedPreset] = useState(SYSTEM_PRESETS[0]);
  const [sunHour, setSunHour] = useState(12.5); // 6 AM (6) to 6 PM (18)
  const [autoSun, setAutoSun] = useState(!isMobile);
  const [viewMode, setViewMode] = useState("vr3d"); // "vr3d" | "ar_hud"
  const [tilt, setTilt] = useState({ rotateX: 22, rotateY: -18 });
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Viewport Observer: Pause all intervals when user is not viewing the visualizer
  useEffect(() => {
    if (!sectionRef.current || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-animate sun path across the sky ONLY when in viewport (conserves phone battery & CPU)
  useEffect(() => {
    if (!autoSun || !isInView) return;
    const interval = setInterval(() => {
      setSunHour((prev) => {
        const next = prev + 0.15;
        return next > 17.5 ? 6.5 : next;
      });
    }, isMobile ? 350 : 180);
    return () => clearInterval(interval);
  }, [autoSun, isInView, isMobile]);

  // Clean up WebRTC camera stream on unmount or mode switch
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  const toggleLiveCamera = async () => {
    if (cameraActive) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
      setCameraActive(false);
      return;
    }

    try {
      setCameraError("");
      setViewMode("ar_hud");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false
      });
      streamRef.current = stream;
      setCameraActive(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch {
      setCameraError("Simulated AR Terrace Mode Active (Camera permission optional)");
      setCameraActive(false);
    }
  };

  // Calculate solar position & instantaneous output from sunHour (6 to 18)
  const normalizedProgress = Math.max(0, Math.min(1, (sunHour - 6) / 12)); // 0 at 6am, 0.5 at 12pm, 1 at 6pm
  const irradianceFactor = Math.max(0.08, Math.sin(normalizedProgress * Math.PI));
  const liveKw = (selectedPreset.peakKw * irradianceFactor).toFixed(2);
  const efficiencyPct = Math.round(irradianceFactor * 100);

  // Sun X & Y coordinates along the upper sky arc (stays cleanly above the 3D solar card on mobile & desktop)
  const sunX = 14 + normalizedProgress * 72; // 14% to 86%
  const sunY = 42 - Math.sin(normalizedProgress * Math.PI) * 24; // 18% at peak noon, 42% at horizon

  const formatTime = (decimalHour) => {
    const hrs = Math.floor(decimalHour);
    const mins = Math.round((decimalHour - hrs) * 60);
    const period = hrs >= 12 ? "PM" : "AM";
    const displayHr = hrs > 12 ? hrs - 12 : hrs === 0 ? 12 : hrs;
    return `${displayHr}:${mins < 10 ? "0" + mins : mins} ${period}`;
  };

  const handlePointerMove = (e) => {
    // Skip tilt calculation on touch screen devices to prevent scroll jank
    if (isMobile || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: Math.max(8, Math.min(35, 22 - y * 24)),
      rotateY: Math.max(-32, Math.min(32, -14 + x * 44))
    });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 22, rotateY: -18 });
  };

  return (
    <section ref={sectionRef} id="ar-vr-solar" className="py-12 sm:py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Ambient Motion Graphics Background Glows */}
      <div className="gpu-layer absolute -top-32 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="gpu-layer absolute -bottom-32 right-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-800/90">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/15 border border-blue-400/40 text-sky-300 px-3 py-1 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin shrink-0" style={{ animationDuration: "6s" }} />
              <span className="truncate">Interactive 3D AR / VR • लाइव 3D विजुअलाइज़र</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Experience Your Rooftop in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-amber-300">3D VR & Augmented Reality</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-hindi">
              अपनी छत पर सूरज की दिशा (6 AM – 6 PM), 3D एलिवेटेड परगोला स्ट्रक्चर और लाइव बिजली उत्पादन का इंटरैक्टिव अनुभव करें
            </p>
          </div>

          {/* Mode Switcher: Equal 2-Col Grid on Mobile, Inline on Desktop */}
          <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setViewMode("vr3d")}
              className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-black transition cursor-pointer border ${
                viewMode === "vr3d"
                  ? "bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/25"
                  : "bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500"
              }`}
            >
              <Box className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">3D VR Digital Twin</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("ar_hud")}
              className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-black transition cursor-pointer border ${
                viewMode === "ar_hud"
                  ? "bg-sky-400 text-slate-950 border-sky-300 shadow-lg shadow-sky-400/25"
                  : "bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500"
              }`}
            >
              <Camera className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">AR Roof HUD Mode</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Bento Grid: Left 3D/AR Viewport (8 cols) + Right Telemetry & Controls (4 cols) */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 mt-6 sm:mt-8 items-stretch">
          
          {/* =================================================================
              LEFT: INTERACTIVE 3D VR / AR MOTION GRAPHICS STAGE
          ================================================================= */}
          <div 
            onMouseMove={handlePointerMove}
            onMouseLeave={resetTilt}
            className="lg:col-span-8 relative min-h-[430px] sm:min-h-[490px] rounded-3xl border border-slate-800 bg-gradient-to-b from-[#06152d] via-[#09203f] to-[#040d1a] overflow-hidden shadow-2xl flex flex-col justify-between p-3.5 sm:p-6 select-none"
          >
            {/* Optional WebRTC Live AR Camera Feed Background */}
            {viewMode === "ar_hud" && cameraActive && (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover opacity-65 z-0"
              />
            )}

            {/* Simulated Real Gorakhpur Terrace Background when in AR HUD mode without camera */}
            {viewMode === "ar_hud" && !cameraActive && (
              <img
                src="/images/projects/team-saketpuri-pergola.jpg"
                alt="AR Rooftop Simulation"
                className="absolute inset-0 w-full h-full object-cover opacity-35 filter contrast-125 z-0"
              />
            )}

            {/* Futuristic AR Lidar Scanning Grid Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-25 z-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(16, 185, 129, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.25) 1px, transparent 1px)",
                backgroundSize: "36px 36px"
              }}
            />

            {/* Animated Sun Orbit Arc & Glowing Sun Sphere */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sunArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.18" />
                  <stop offset="50%" stopColor="#fde047" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.18" />
                </linearGradient>
                <linearGradient id="photonBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fde047" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Dashed Solar Trajectory Path in Upper Sky Zone */}
              <path
                d="M 14 42 Q 50 -6 86 42"
                fill="none"
                stroke="url(#sunArcGrad)"
                strokeWidth="0.6"
                strokeDasharray="2 1.5"
              />

              {/* Dynamic Photon Energy Cone from Sun to Solar Array */}
              <polygon
                points={`${sunX},${sunY} 28,60 72,60`}
                fill="url(#photonBeam)"
                opacity={irradianceFactor * 0.6}
              />
            </svg>

            {/* Glowing Animated Sun Orb (Time Pill placed above orb so it never touches the 3D frame) */}
            <motion.div
              animate={{ left: `${sunX}%`, top: `${sunY}%` }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute -top-6 bg-slate-950/90 text-amber-300 border border-amber-400/50 px-2 py-0.5 rounded-md text-[9.5px] sm:text-[10px] font-mono font-bold whitespace-nowrap shadow-md">
                  {formatTime(sunHour)}
                </span>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amber-400/30 blur-xl animate-pulse" />
                <div className="absolute w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-yellow-200 via-amber-400 to-orange-500 shadow-[0_0_30px_#fbbf24] flex items-center justify-center border border-white/80">
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 animate-spin" style={{ animationDuration: "10s" }} />
                </div>
              </div>
            </motion.div>

            {/* Top HUD Bar: Always Single-Line on Mobile & Desktop */}
            <div className="relative z-30 flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md border border-white/15 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[10px] sm:text-xs min-w-0">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse shrink-0" />
                <span className="font-mono text-[10px] sm:text-[11px] text-slate-200 truncate">
                  <span className="sm:hidden">
                    <strong className="text-sky-300">26.76°N (GKP)</strong> • <strong className="text-amber-300">26°S TILT</strong>
                  </span>
                  <span className="hidden sm:inline">
                    LAT: <strong className="text-sky-300">26.76°N (GKP)</strong> • TILT: <strong className="text-amber-300">26° SOUTH</strong>
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {viewMode === "ar_hud" && (
                  <button
                    type="button"
                    onClick={toggleLiveCamera}
                    className="inline-flex items-center gap-1 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[10px] sm:text-[11px] transition cursor-pointer shadow-md"
                  >
                    {cameraActive ? <VideoOff className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                    <span>{cameraActive ? "Stop AR" : "Live AR"}</span>
                  </button>
                )}

                <span className="bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] sm:text-[11px] font-black px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl font-mono whitespace-nowrap">
                  ⚡ {liveKw} kW LIVE
                </span>
              </div>
            </div>

            {/* ===============================================================
                CENTER 3D ISOMETRIC SOLAR ROOF & PERGOLA DIGITAL TWIN
            =============================================================== */}
            <div className="relative z-20 mt-14 sm:mt-12 mb-4 flex items-center justify-center py-2 sm:py-4" style={{ perspective: "1100px" }}>
              <motion.div
                animate={{
                  rotateX: tilt.rotateX,
                  rotateY: tilt.rotateY
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full max-w-[305px] sm:max-w-[390px] h-48 sm:h-60 rounded-2xl border-2 border-blue-500/50 bg-gradient-to-br from-[#0a1e3b]/90 via-slate-900/95 to-[#0a1e3b]/90 shadow-[0_25px_60px_rgba(0,0,0,0.75)] p-3 sm:p-4 flex flex-col justify-between"
              >
                {/* Elevated Hot-Dip GI Pergola Pillars */}
                <div className="absolute -bottom-5 left-4 w-2.5 h-6 sm:h-8 bg-gradient-to-b from-slate-300 to-slate-500 rounded-b border border-white/30" />
                <div className="absolute -bottom-5 right-4 w-2.5 h-6 sm:h-8 bg-gradient-to-b from-slate-300 to-slate-500 rounded-b border border-white/30" />

                {/* Top Structure Label (Single-line on Mobile & Desktop) */}
                <div className="flex items-center justify-between gap-2 text-[9.5px] sm:text-[10px] font-mono text-sky-300 border-b border-white/10 pb-1.5 whitespace-nowrap">
                  <span className="truncate">{selectedPreset.structure}</span>
                  <span className="text-amber-400 font-bold shrink-0">{selectedPreset.panels}× TOPCon Bifacial</span>
                </div>

                {/* 3D Solar PV Cell Matrix Grid */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 my-1.5 sm:my-2 flex-1">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        boxShadow:
                          irradianceFactor > 0.5
                            ? "0 0 18px rgba(16, 185, 129, 0.45)"
                            : "0 0 6px rgba(56, 189, 248, 0.2)"
                      }}
                      className="relative rounded-lg border border-sky-400/60 bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 overflow-hidden flex items-center justify-center"
                    >
                      {/* Solar Cell Grid Lines */}
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
                          backgroundSize: "12px 12px"
                        }}
                      />
                      {/* Desktop-Only Photon Shimmer (Omitted on mobile to conserve GPU frames) */}
                      {!isMobile && isInView && (
                        <motion.div
                          animate={{ x: ["-120%", "220%"] }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            delay: idx * 0.25,
                            ease: "linear"
                          }}
                          className="w-1/2 h-full bg-gradient-to-r from-transparent via-amber-300/35 to-transparent -skew-x-12"
                        />
                      )}
                      <span className="relative z-10 text-[9px] font-mono font-bold text-sky-200">
                        580W
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Energy Flow Stream Bar (Solar -> Inverter -> Home & Grid) */}
                <div className="bg-slate-950/90 rounded-xl p-2 border border-white/10 flex items-center justify-between text-[9.5px] sm:text-[10px] font-mono">
                  <span className="text-amber-300 flex items-center gap-1 shrink-0">
                    <Sun className="w-3 h-3" /> PV Array
                  </span>
                  <div className="flex-1 mx-2 h-1.5 rounded-full bg-slate-800 overflow-hidden relative">
                    {isInView ? (
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                        className="w-1/2 h-full bg-gradient-to-r from-amber-400 via-sky-400 to-blue-500 rounded-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-500 rounded-full" />
                    )}
                  </div>
                  <span className="text-amber-400 flex items-center gap-1 shrink-0">
                    <Zap className="w-3 h-3" /> Net-Meter
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Bottom Interactive Sun-Path Scrubber Controls (Compact 2-Row on Mobile, 1-Row on Desktop) */}
            <div className="relative z-20 bg-slate-950/90 backdrop-blur-md border border-white/15 rounded-2xl p-2.5 sm:p-3.5 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <div className="flex items-center justify-between w-full sm:w-auto gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setAutoSun((prev) => !prev)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-black flex items-center gap-1.5 transition cursor-pointer ${
                    autoSun
                      ? "bg-amber-400 text-slate-950"
                      : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                  }`}
                >
                  <RotateCw className={`w-3.5 h-3.5 ${autoSun ? "animate-spin" : ""}`} />
                  <span>{autoSun ? "Auto Sun Orbit" : "Manual Sun"}</span>
                </button>

                <span className="sm:hidden text-[11px] text-amber-300 font-mono font-bold bg-amber-500/15 border border-amber-400/30 px-2.5 py-1 rounded-lg">
                  Irradiance: {efficiencyPct}%
                </span>
              </div>

              <div className="flex-1 w-full flex items-center gap-2.5">
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-300 shrink-0">6 AM</span>
                <input
                  type="range"
                  min="6"
                  max="18"
                  step="0.1"
                  value={sunHour}
                  onChange={(e) => {
                    setAutoSun(false);
                    setSunHour(parseFloat(e.target.value));
                  }}
                  aria-label="Sun Path Hour Slider"
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-300 shrink-0">6 PM</span>
              </div>

              <span className="hidden sm:inline-block text-[11px] text-amber-300 font-mono font-bold shrink-0">
                Irradiance: {efficiencyPct}%
              </span>
            </div>

            {cameraError && (
              <p className="relative z-20 text-[11px] text-amber-300 text-center mt-1">
                {cameraError}
              </p>
            )}
          </div>

          {/* =================================================================
              RIGHT: SYSTEM PRESETS & REAL-TIME TELEMETRY BENTO PANEL
          ================================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            {/* System Capacity Selector */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  1. Select 3D Plant Size • क्षमता चुनें
                </span>
                <Sliders className="w-4 h-4 text-slate-400" />
              </div>

              <div className="space-y-2">
                {SYSTEM_PRESETS.map((preset) => (
                  <motion.button
                    key={preset.id}
                    type="button"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPreset(preset)}
                    className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                      selectedPreset.id === preset.id
                        ? "bg-gradient-to-r from-blue-600/30 to-[#0a1e3b]/80 border-blue-400 text-white shadow-lg"
                        : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-black">{preset.name}</div>
                      <div className="text-[11px] text-sky-300 font-hindi">{preset.hi}</div>
                    </div>
                    <span className="text-xs font-mono font-black bg-white/10 px-2.5 py-1 rounded-lg text-amber-300">
                      {preset.panels} Panels
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Live Telemetry Output Bento Card */}
            <div className="bg-gradient-to-br from-[#0a1e3b] via-blue-950/90 to-slate-900 border border-blue-500/30 rounded-3xl p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-sky-300">
                    2. Live Simulation Telemetry
                  </span>
                  <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-full">
                    2500+ Clients Verified
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-slate-950/70 p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] text-slate-400 block">Live Output ({formatTime(sunHour)})</span>
                    <strong className="text-lg sm:text-xl font-black text-amber-400 font-mono">
                      {liveKw} kW
                    </strong>
                  </div>
                  <div className="bg-slate-950/70 p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] text-slate-400 block">Daily Generation</span>
                    <strong className="text-lg sm:text-xl font-black text-amber-400 font-mono">
                      ~{selectedPreset.dailyUnits} Units
                    </strong>
                  </div>
                  <div className="bg-slate-950/70 p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] text-slate-400 block">PM Surya Ghar Subsidy</span>
                    <strong className="text-base sm:text-lg font-black text-sky-300 font-mono">
                      {selectedPreset.subsidy}
                    </strong>
                  </div>
                  <div className="bg-slate-950/70 p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] text-slate-400 block">Monthly Bill Saved</span>
                    <strong className="text-base sm:text-lg font-black text-sky-300 font-mono">
                      {selectedPreset.monthlySavings}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (onOpenCalculator) onOpenCalculator();
                  }}
                  className="w-full py-3 px-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Open Full Solar Calculator • कैलकुलेटर</span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (onNavigate) onNavigate("/#contact");
                  }}
                  className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm transition cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Book Free 3D Roof Survey • सर्वे बुक करें</span>
                </motion.button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
