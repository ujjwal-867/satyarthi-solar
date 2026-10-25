import { businessData } from "../data/businessData";
import { MessageCircle, Phone, Gift } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function FloatingWhatsApp({ onOpenFestiveOffer }) {
  const whatsappHref = `https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
    "Hello Er. Satyaprakash, I want a solar installation quotation and subsidy guidance for my property in Uttar Pradesh."
  )}`;

  return (
    <>
      {/* =====================================================================
          DESKTOP & TABLET (sm+): Left-Side Floating Vertical Stack
      ===================================================================== */}
      <aside aria-label="Quick contact links" className="hidden sm:flex fixed bottom-6 left-5 z-40 flex-col items-center gap-2.5">
        {/* 1. Floating Direct Call Button */}
        <a
          href={`tel:${businessData.phone[0]}`}
          className="group relative flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
          aria-label="Call 24x7 Helpline"
          title={`Call 24×7: +91 ${businessData.phone[0]}`}
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="absolute left-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none">
            Call: +91 {businessData.phone[0]}
          </span>
        </a>

        {/* 2. Floating WhatsApp 24x7 Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-13 h-13 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp 24×7"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          <span className="absolute left-15 bg-emerald-950 text-emerald-200 text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none">
            WhatsApp 24×7 Live
          </span>
        </a>

        {/* 3. Floating Instagram Button */}
        <a
          href={businessData.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-11 h-11 bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 hover:opacity-90 text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
          aria-label="Follow on Instagram"
          title="Instagram Profile"
        >
          <InstagramIcon className="w-5 h-5 text-white" />
          <span className="absolute left-13 bg-slate-900 text-pink-300 text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none">
            Instagram: @satyarthi_solar_solution.gkp
          </span>
        </a>

        {/* 4. Floating Facebook Button */}
        <a
          href={businessData.facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-11 h-11 bg-blue-700 hover:bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
          aria-label="Connect on Facebook"
          title="Facebook Page"
        >
          <FacebookIcon className="w-5 h-5 text-white" />
          <span className="absolute left-13 bg-slate-900 text-sky-300 text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none">
            Facebook: Satyarthi Solar Solutions
          </span>
        </a>
      </aside>

      {/* =====================================================================
          MOBILE (< 640px): Sleek App-Style Bottom Quick-Action Dock
          (Zero floating clutter blocking the left/right edges of the phone screen)
      ===================================================================== */}
      <nav
        aria-label="Mobile quick actions"
        className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 border-t border-slate-800 px-2 py-1.5 flex items-center justify-around shadow-[0_-8px_25px_rgba(0,0,0,0.65)]"
        style={{ transform: "translateZ(0)" }}
      >
        <a
          href={`tel:${businessData.phone[0]}`}
          className="flex flex-col items-center justify-center gap-0.5 px-2 py-0.5 text-slate-200 active:scale-95 transition"
          aria-label="Call 24x7 Helpline"
        >
          <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xs">
            <Phone className="w-3.5 h-3.5" />
          </span>
          <span className="text-[9.5px] font-bold tracking-tight">Call</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 px-2 py-0.5 text-emerald-300 active:scale-95 transition"
          aria-label="WhatsApp 24x7"
        >
          <span className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-xs">
            <MessageCircle className="w-4 h-4 fill-white" />
          </span>
          <span className="text-[9.5px] font-black tracking-tight">WhatsApp</span>
        </a>

        {onOpenFestiveOffer && (
          <button
            type="button"
            onClick={onOpenFestiveOffer}
            className="flex flex-col items-center justify-center gap-0.5 px-2 py-0.5 text-amber-300 active:scale-95 transition cursor-pointer"
            aria-label="Open Festive Offer"
          >
            <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center text-white shadow-xs border border-amber-200/70">
              <Gift className="w-3.5 h-3.5" />
            </span>
            <span className="text-[9.5px] font-black tracking-tight">Offer 🎁</span>
          </button>
        )}

        <a
          href={businessData.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 px-2 py-0.5 text-pink-300 active:scale-95 transition"
          aria-label="Instagram"
        >
          <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center text-white shadow-xs">
            <InstagramIcon className="w-3.5 h-3.5" />
          </span>
          <span className="text-[9.5px] font-bold tracking-tight">Insta</span>
        </a>

        <a
          href={businessData.facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 px-2 py-0.5 text-sky-300 active:scale-95 transition"
          aria-label="Facebook"
        >
          <span className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center text-white shadow-xs">
            <FacebookIcon className="w-3.5 h-3.5" />
          </span>
          <span className="text-[9.5px] font-bold tracking-tight">Facebook</span>
        </a>
      </nav>
    </>
  );
}

export default FloatingWhatsApp;
