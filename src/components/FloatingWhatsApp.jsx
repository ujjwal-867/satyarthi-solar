import { businessData } from "../data/businessData";
import { MessageCircle, Phone } from "lucide-react";

function FloatingWhatsApp() {
  const whatsappHref = `https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
    "Hello Er. Satyaprakash, I want a solar installation quotation and subsidy guidance for my property in Uttar Pradesh."
  )}`;

  return (
    <>
      {/* Desktop & Tablet: Minimal 2-Action Contact Stack (Call + WhatsApp) */}
      <aside aria-label="Quick contact links" className="hidden sm:flex fixed bottom-6 left-5 z-40 flex-col items-center gap-2.5">
        <a
          href={`tel:${businessData.phone[0]}`}
          className="group relative flex items-center justify-center w-11 h-11 bg-[#0a1e3b] hover:bg-blue-800 text-white rounded-full shadow-md transition-colors border border-white/20 cursor-pointer"
          aria-label="Call 24x7 Helpline"
          title={`Call 24×7: +91 ${businessData.phone[0]}`}
        >
          <Phone className="w-4 h-4 text-white" />
          <span className="absolute left-13 bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none">
            Call: +91 {businessData.phone[0]}
          </span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full shadow-lg transition-colors border-2 border-white cursor-pointer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp 24×7"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute left-14 bg-[#0a1e3b] text-amber-300 border border-amber-400/30 text-[11px] font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none">
            WhatsApp Quote
          </span>
        </a>
      </aside>

      {/* Mobile (< 640px): Clean 2-Action Bottom Bar */}
      <nav
        aria-label="Mobile quick actions"
        className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0a1e3b] border-t border-slate-800 px-3 py-2 flex items-center gap-2.5 shadow-lg"
      >
        <a
          href={`tel:${businessData.phone[0]}`}
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition"
          aria-label="Call 24x7 Helpline"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call Engineer</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold transition"
          aria-label="WhatsApp 24x7"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp Quote</span>
        </a>
      </nav>
    </>
  );
}

export default FloatingWhatsApp;
