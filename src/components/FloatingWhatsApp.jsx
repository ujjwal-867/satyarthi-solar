import { businessData } from "../data/businessData";
import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function FloatingWhatsApp() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Floating WhatsApp Button on BOTTOM-LEFT with clear separation from Chatbot */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
        <div className="bg-emerald-950/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-emerald-500/50 text-[11px] font-bold text-white flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{lang === "hi" ? "व्हाट्सएप: 24×7 लाइव" : "WhatsApp: 24×7 Live"}</span>
        </div>
        
        <a
          href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(
            lang === "hi" 
              ? "नमस्ते इंजी. सत्यप्रकाश जी, मुझे अपने घर/प्रतिष्ठान के लिए सोलर पैनल कोटेशन व सब्सिडी की जानकारी चाहिए।"
              : "Hello Er. Satyaprakash, I want a solar installation quotation and subsidy guidance for my property in Uttar Pradesh."
          )}`}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/80"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-white" />
          <span className="sr-only">WhatsApp</span>
        </a>
      </div>
    </>
  );
}

export default FloatingWhatsApp;
