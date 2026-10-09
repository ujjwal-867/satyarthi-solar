import { businessData } from "../data/businessData";
import { MessageCircle, Phone } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact links" className="fixed bottom-6 left-5 z-40 flex flex-col items-center gap-2.5">
      {/* 1. Floating Direct Call Button */}
      <a
        href={`tel:${businessData.phone[0]}`}
        className="group relative flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
        aria-label="Call 24x7 Helpline"
        title={`Call 24×7: +91 ${businessData.phone[0]}`}
      >
        <Phone className="w-5 h-5 text-white" />
        <span className="absolute left-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none hidden sm:inline-block">
          Call: +91 {businessData.phone[0]}
        </span>
      </a>

      {/* 2. Floating WhatsApp 24x7 Button */}
      <a
        href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
          "Hello Er. Satyaprakash, I want a solar installation quotation and subsidy guidance for my property in Uttar Pradesh."
        )}`}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp 24×7"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute left-15 bg-emerald-950 text-emerald-200 text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none hidden sm:inline-block">
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
        <span className="absolute left-13 bg-slate-900 text-pink-300 text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none hidden sm:inline-block">
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
        <span className="absolute left-13 bg-slate-900 text-sky-300 text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none hidden sm:inline-block">
          Facebook: Satyarthi Solar Solutions
        </span>
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
