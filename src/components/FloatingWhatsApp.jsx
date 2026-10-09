import { businessData } from "../data/businessData";
import { MessageCircle, Phone } from "lucide-react";

function FloatingWhatsApp() {
  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
        <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Online: Er. Satyaprakash</span>
        </div>
        <a
          href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
            "Hello Er. Satyaprakash, I want a solar installation quote for my property in Uttar Pradesh."
          )}`}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-900/40 hover:scale-110 transition duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-white" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Quick-Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${businessData.phone[0]}`}
          className="flex-1 bg-slate-900 text-white py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call: {businessData.phone[0]}</span>
        </a>
        <a
          href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
            "Hello Er. Satyaprakash, I want a solar quote for my home/business."
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}

export default FloatingWhatsApp;
