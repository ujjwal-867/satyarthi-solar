import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gift, 
  Sparkles, 
  X, 
  MessageCircle, 
  PhoneCall, 
  CheckCircle2, 
  Flame, 
  Zap,
  Tag,
  PartyPopper
} from "lucide-react";
import { businessData } from "../data/businessData";

const FESTIVE_TIERS = [
  {
    amount: "₹25,000+ Purchase",
    amountHi: "₹25,000+ की खरीद पर",
    category: "Inverter, Battery & Home Electronics",
    reward: "Assured Festive Gift + Instant Cash Discount",
    rewardHi: "निश्चित त्योहारी उपहार + विशेष नकद छूट",
    badge: "100% Assured Gift",
    accent: "from-amber-500/20 to-orange-500/10 border-amber-400/50 text-amber-300"
  },
  {
    amount: "₹85,000 – ₹1,40,000",
    amountHi: "1kW – 2kW सोलर प्लांट पर",
    category: "1 kW to 2 kW Rooftop Solar System",
    reward: "Special Appliance Gift + Free Earthing Kit + Govt Subsidy",
    rewardHi: "होम अप्लायंस गिफ्ट + मुफ्त अर्थिंग किट + सरकारी सब्सिडी",
    badge: "Popular Family Slab",
    accent: "from-emerald-500/20 to-teal-500/10 border-emerald-400/50 text-emerald-300"
  },
  {
    amount: "₹1,90,000+ Purchase",
    amountHi: "3kW – 10kW सोलर / आटा चक्की पर",
    category: "3 kW to 10 kW Solar & Commercial Plants",
    reward: "Mega Diwali Cash Discount + Premium Smart Gift + ₹1.08L Subsidy",
    rewardHi: "मेगा दिवाली छूट + प्रीमियम स्मार्ट उपहार + ₹1,08,000 सब्सिडी",
    badge: "Bumper Utsav Dhamaka",
    accent: "from-yellow-400/25 via-amber-500/20 to-rose-500/15 border-yellow-300/60 text-yellow-200"
  }
];

export default function FestiveOfferPopup({ isOpenExternal, onCloseExternal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [bonusRevealed, setBonusRevealed] = useState(false);

  // Auto-trigger once per session after 9s (gives user time to smoothly browse hero without interruption)
  useEffect(() => {
    const hasSeenOffer = sessionStorage.getItem("satyarthi_festive_popup_seen_v1");
    if (!hasSeenOffer) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("satyarthi_festive_popup_seen_v1", "true");
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Sync when triggered externally from Navbar or Floating Pill
  useEffect(() => {
    if (isOpenExternal) {
      setIsOpen(true);
    }
  }, [isOpenExternal]);

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseExternal) onCloseExternal();
  };

  const handleClaimWhatsApp = () => {
    const msg = encodeURIComponent(
      "🪔 नमस्ते इंजीनियर सत्यप्रकाश जी! मुझे नवरात्रि एवं दीपावली महा-ऑफर (Coupon: UTSAV2026) के तहत सोलर / इलेक्ट्रॉनिक्स खरीद पर विशेष उपहार और नकद छूट की जानकारी चाहिए।"
    );
    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${msg}`, "_blank");
    handleClose();
  };

  return (
    <>
      {/* Persistent Floating Festive Gift Pill (Shown on Tablet/Desktop) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex fixed bottom-26 right-6 z-30 items-center gap-2 bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 text-white font-black px-3.5 py-2.5 rounded-2xl shadow-xl shadow-orange-600/30 border-2 border-amber-300/80 cursor-pointer group overflow-hidden"
            aria-label="Open Navratri and Diwali Special Offer"
          >
            <span className="w-6 h-6 rounded-lg bg-amber-300 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
              <Gift className="w-4 h-4 text-rose-700" />
            </span>

            <div className="text-left leading-tight">
              <span className="block text-[10px] font-extrabold text-amber-200 uppercase tracking-wider">
                🪔 Navratri & Diwali
              </span>
              <span className="block text-xs font-black text-white whitespace-nowrap">
                Special Gift Offer 🎁
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Lightweight Mobile-Optimized Festive Offer Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-2.5 sm:p-4">
            {/* Backdrop: Solid on mobile to prevent GPU blur stutter; subtle blur on desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={handleClose}
              className="fixed inset-0 bg-slate-950/85 sm:bg-slate-950/80 sm:backdrop-blur-sm"
            />

            {/* Hardware-Accelerated 2D Card (zero 3D perspective to keep 60 FPS on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-md bg-gradient-to-b from-[#1c0c07] via-[#120d1c] to-[#071318] text-white rounded-3xl border-2 border-amber-400/60 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
              style={{ transform: "translateZ(0)" }}
            >
              {/* Top Festive Garland Ribbon */}
              <div className="h-2 w-full bg-gradient-to-r from-amber-300 via-orange-500 via-rose-500 to-emerald-400 shrink-0" />

              {/* Subtle Ambient Glow Header */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close Festive Offer"
                className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 flex items-center justify-center text-amber-200 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* High-Performance Smooth Touch Scrollable Container */}
              <div 
                className="p-4 sm:p-6 overflow-y-auto space-y-4 relative z-10"
                style={{
                  WebkitOverflowScrolling: "touch",
                  overscrollBehavior: "contain"
                }}
              >
                
                {/* Header Badge */}
                <div className="text-center space-y-1.5 pt-1">
                  <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-rose-500/30 border border-amber-300/50 text-amber-200 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider">
                    <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>Navratri & Diwali Maha-Utsav Offer</span>
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-300 pt-1">
                    🎁 हर खरीद पर निश्चित उपहार व विशेष छूट!
                  </h3>

                  <p className="text-xs sm:text-sm font-bold text-slate-200 leading-snug">
                    Special Assured Gift + Instant Cash Discount on Every Solar & Electronics Purchase!
                  </p>
                </div>

                {/* Tiered Purchase Slabs (Opaque backgrounds = zero scroll lag) */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-amber-300/90 px-1">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3 text-amber-400" />
                      <span>Purchase Amount Slabs • खरीद राशि स्लैब</span>
                    </span>
                    <span className="text-emerald-300">100% Guaranteed</span>
                  </div>

                  {FESTIVE_TIERS.map((tier, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl bg-gradient-to-r ${tier.accent} bg-slate-900/90 border space-y-1 transition`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs sm:text-sm font-black text-white">
                            {tier.amount}
                          </span>
                          <span className="text-[10px] font-bold text-amber-200 font-hindi">
                            ({tier.amountHi})
                          </span>
                        </div>
                        <span className="text-[9.5px] font-black uppercase tracking-wider bg-white/15 text-white px-2 py-0.5 rounded-full whitespace-nowrap">
                          {tier.badge}
                        </span>
                      </div>

                      <p className="text-xs font-extrabold text-white flex items-start gap-1.5 leading-snug">
                        <Gift className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                        <span>{tier.reward}</span>
                      </p>
                      <p className="text-[11px] font-bold text-emerald-200 pl-5 font-hindi leading-tight">
                        ✨ {tier.rewardHi}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Snappy Tap-to-Reveal Coupon Box */}
                <div
                  onClick={() => setBonusRevealed(true)}
                  className="rounded-2xl bg-white/10 active:bg-white/20 border border-dashed border-amber-300/60 p-3 text-center cursor-pointer transition select-none"
                >
                  {!bonusRevealed ? (
                    <div className="flex items-center justify-center gap-2 text-xs font-black text-amber-300">
                      <PartyPopper className="w-4 h-4 text-yellow-300" />
                      <span>Tap Here to Unlock Extra Festive Coupon! • यहाँ टैप करें</span>
                    </div>
                  ) : (
                    <div className="space-y-0.5">
                      <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>FESTIVE CODE UNLOCKED:</span>
                        <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-mono font-black">
                          UTSAV2026
                        </span>
                      </div>
                      <p className="text-[11px] text-amber-200 font-hindi">
                        शोरूम विजिट या बुकिंग पर कोड दिखाएं और अतिरिक्त विशेष उपहार पाएं!
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={handleClaimWhatsApp}
                    className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 active:scale-[0.98] text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer border border-yellow-200 transition"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950 shrink-0" />
                    <span>Claim Festive Gift on WhatsApp • ऑफर बुक करें</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${businessData.phone[0]}`}
                      className="py-2.5 px-3 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 active:scale-[0.98] border border-emerald-400/40 text-emerald-200 font-bold text-xs flex items-center justify-center gap-1.5 transition text-center"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">Call: {businessData.phone[0]}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleClose}
                      className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 active:scale-[0.98] border border-white/15 text-slate-200 font-bold text-xs flex items-center justify-center gap-1 transition cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Continue Browsing</span>
                    </button>
                  </div>
                </div>

                <p className="text-[10px] text-center text-slate-400 leading-tight">
                  📍 Satyarthi Solar & Electronics Showroom • Motiram Adda, Deoria Road, Gorakhpur
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
