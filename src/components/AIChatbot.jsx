import { useState, useRef, useEffect } from "react";
import { businessData } from "../data/businessData";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  HelpCircle, 
  MapPin, 
  Zap, 
  RotateCcw, 
  CheckCircle2, 
  Sun,
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function AIChatbot() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef(null);

  // Quick Basic FAQs
  const basicFaqs = [
    {
      label: "💰 3kW PM Surya Ghar Subsidy?",
      query: "What is the subsidy and cost for a 3kW solar system under PM Surya Ghar?"
    },
    {
      label: "⚡ 5kW Cost & Savings?",
      query: "How much does a 5kW On-Grid solar system cost and how much will I save each month?"
    },
    {
      label: "❄️ Home Appliances (AC/Fridge)?",
      query: "Which electronics and home appliances (Inverter AC, Fridge, Cooler) do you sell?"
    },
    {
      label: "🌾 Solar Aata Chakki (0 Diesel)?",
      query: "Can solar run my Aata Chakki (Flour Mill) without diesel and how much will I save?"
    },
    {
      label: "📜 UPNEDA & MNRE Approval?",
      query: "Are you an official government approved vendor under UPNEDA and Loom Solar?"
    },
    {
      label: "📍 Store Location & Google Map?",
      query: "Where is your store located and what is your Google Maps address in Gorakhpur?"
    },
    {
      label: "📞 Contact Er. Satya Prakash?",
      query: "How can I contact Er. Satya Prakash Satyarthi directly?"
    },
    {
      label: "📋 Book Free Site Survey?",
      query: "How do I book a free roof survey for my home or business?"
    }
  ];

  // Initial Welcome Messages
  const [messages, setMessages] = useState([
    {
      id: "msg-1",
      sender: "bot",
      time: "Just now",
      text: "नमस्ते! I am **Surya Mitra AI (सूर्य साथी)**, the official AI assistant of **Satyarthi Solar Solution & Electronics**, Gorakhpur.\n\nI can help you calculate solar subsidies, system costs, home appliances, or book a **100% Free Site Survey**.",
      quickReplies: [
        "💰 3kW Subsidy?",
        "❄️ Home Appliances",
        "🌾 Solar Aata Chakki",
        "📍 Google Maps Location"
      ]
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [isOpen, messages, isTyping]);

  // AI Response Generator
  const generateResponse = (query) => {
    const q = query.toLowerCase();

    // 1. Subsidy / PM Surya Ghar / 3kW / 2kW / 1kW
    if (q.includes("subsidy") || q.includes("subcidy") || q.includes("अनुदान") || q.includes("surya ghar") || q.includes("3kw") || q.includes("3 kw") || q.includes("1kw") || q.includes("2kw")) {
      return {
        text: `☀️ **PM Surya Ghar: Muft Bijli Yojana (आधिकारिक नई दरें व सब्सिडी):**\n\n• **1 kW On-Grid:** ₹85,000 से शुरू | कुल सब्सिडी ₹45,000 ➔ **नेट लागत मात्र ₹40,000***\n• **2 kW On-Grid:** ₹1,40,000 से शुरू | कुल सब्सिडी ₹90,000 ➔ **नेट लागत मात्र ₹50,000***\n• **3 kW On-Grid:** ₹1,90,000 से शुरू | कुल सब्सिडी ₹1,08,000 (अधिकतम) ➔ **नेट लागत मात्र ₹82,000***\n\n✅ **आसान बैंक लोन:** 7% न्यूनतम ब्याज दर पर आसान EMI (₹650 - ₹1,800/माह)।\n✅ **मासिक बचत:** हर महीने ₹1,200 से ₹4,500 की सीधी बिजली बिल बचत!`,
        action: {
          label: "Open Solar ROI Calculator",
          url: "#calculator"
        }
      };
    }

    // 2. 5kW / 10kW / Commercial Cost & Savings
    if (q.includes("5kw") || q.includes("5 kw") || q.includes("10kw") || q.includes("commercial") || q.includes("cost") || q.includes("saving") || q.includes("खर्च") || q.includes("बचत") || q.includes("price") || q.includes("रेट")) {
      return {
        text: `⚡ **5 kW एवं 10 kW On-Grid Solar (आधिकारिक नई विशेष दर):**\n\n• **5 kW System:** नई विशेष दर **₹3,00,000** (सब्सिडी के बाद नेट लागत ₹1,92,000*) — बड़े घरों एवं 1.5 टन एसी के लिए आदर्श। मासिक बचत ~₹7,500!\n• **10 kW System:** नई विशेष दर **₹6,00,000** (सब्सिडी के बाद नेट लागत ₹4,92,000*) — स्कूल, अस्पताल, शोरूम एवं व्यावसायिक प्रतिष्ठानों हेतु। मासिक बचत ~₹15,000+!\n• **Tax Benefit:** व्यावसायिक प्रतिष्ठानों हेतु 40% टैक्स डिप्रिसिएशन लाभ उपलब्ध।\n• **वारंटी:** 25 साल की पैनल परफॉर्मेंस वारंटी + 5 साल की फ्री ऑन-साइट सर्विस।`,
        action: {
          label: "Inquire on WhatsApp",
          url: `https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent("Hello Er. Satyaprakash, please share customized quotation for 5kW/10kW solar system.")}`
        }
      };
    }

    // 3. Home Appliances / Electronics / AC / Fridge / Cooler
    if (q.includes("appliance") || q.includes("ac") || q.includes("fridge") || q.includes("cooler") || q.includes("electronic") || q.includes("washing machine") || q.includes("geyser") || q.includes("tv")) {
      return {
        text: `❄️ **Satyarthi Solar & Home Electronics Showroom:**\n\nAlong with solar, we are an authorized dealer for **24+ leading electronics brands**:\n\n• **Air Conditioners:** 5-Star Dual-Inverter Split ACs (LG, Lloyd, Voltas, Samsung, Haier)\n• **Refrigerators:** Double-door frost-free inverter fridges (Godrej, Whirlpool, LG)\n• **Desert Coolers:** Heavy-duty 85L honey-comb pad coolers (Bajaj, Crompton, Symphony)\n• **Washing Machines & Geysers:** Fully automatic front/top loads & 25L 5-star geysers\n\n💡 **Zero-Bill Solar Combo:** We design specialized solar systems that run your AC & Fridge entirely free of electricity bills!`,
        action: {
          label: "Explore Appliances Store",
          url: "#appliances"
        }
      };
    }

    // 4. Solar Aata Chakki / Flour Mill / Agro
    if (q.includes("chakki") || q.includes("aata") || q.includes("flour") || q.includes("mill") || q.includes("diesel") || q.includes("vfd") || q.includes("agro")) {
      return {
        text: `🌾 **Solar Aata Chakki (Flour Mill) & Agro Systems:**\n\n• **Zero Diesel:** Runs 10 HP to 25 HP heavy motors directly on solar VFD drive without expensive batteries!\n• **Daily Operation:** Runs 8 hours continuously under the sun (8:30 AM to 5:00 PM).\n• **Massive Monthly Savings:** Saves **₹25,000 - ₹45,000 every month** on diesel!\n• **Payback Period:** Pays for itself in just 12 to 16 months.\n• **Successful Sites:** Operational across Kushinagar, Gorakhpur, and Deoria.`,
        action: {
          label: "View Flour Mill Details",
          url: "#services"
        }
      };
    }

    // 5. UPNEDA / Government Empanelment / Certifications
    if (q.includes("upneda") || q.includes("mnre") || q.includes("approval") || q.includes("approve") || q.includes("vendor") || q.includes("gst") || q.includes("loom solar") || q.includes("fujiyama") || q.includes("amaze")) {
      return {
        text: `🏛️ **Official Government & Brand Credentials:**\n\n• **UPNEDA Empanelled Vendor:** Govt of Uttar Pradesh Vendor Code **${businessData.vendorCode}**\n• **GST Registered:** **${businessData.gstin}** (Proprietorship: Er. Satya Prakash Satyarthi)\n• **LOOM SOLAR Authorized Dealer:** Certificate No. **${businessData.loomCertificateNo}** (Valid till 2028)\n• **FUJIYAMA SOLAR:** Authorized Dealer for Gorakhpur & UP East-2\n• **AMAZE:** Authorized Channel Partner\n\nAll installations receive official UPPCL net metering and government DBT subsidy assurance!`,
        action: {
          label: "View Official Certificates",
          url: "#certificates"
        }
      };
    }

    // 6. Location / Address / Google Maps
    if (q.includes("location") || q.includes("address") || q.includes("map") || q.includes("kaha") || q.includes("where") || q.includes("pata") || q.includes("dukan") || q.includes("office") || q.includes("gorakhpur")) {
      return {
        text: `📍 **Head Office & Showroom Location:**\n\n**Satyarthi Solar Solution**\nMOTIRAM ADDA DEORIYA ROAD GORAKHPUR UTTAR PRADESH 273202\n*(Near Motiram Chauraha / Rampur, Gorakhpur-Deoria State Highway)*\n\n• **Distances:** 16 km from Gorakhpur Junction | 22 km from Deoria Sadar\n• **Store Hours:** Mon - Sat: 9:00 AM – 7:30 PM | Sun: 10:00 AM – 4:00 PM\n• **Free Survey Coverage:** Gorakhpur, Deoria, Kushinagar, Maharajganj, Basti, Sant Kabir Nagar.`,
        action: {
          label: "Open in Google Maps",
          url: businessData.googleMapLink
        }
      };
    }

    // 7. Contact / Phone Number / Call Er. Satya Prakash
    if (q.includes("contact") || q.includes("phone") || q.includes("call") || q.includes("number") || q.includes("mobile") || q.includes("satyaprakash") || q.includes("whatsapp")) {
      return {
        text: `📞 **Contact Er. Satya Prakash Satyarthi:**\n\n• **Primary Business Line:** +91 ${businessData.phone[0]} (⚡ 24x7 Active)\n• **Secondary Business Line:** +91 ${businessData.phone[1]} (⚡ 24x7 Active)\n• **Office Direct Line:** +91 ${businessData.phone[2]}\n• **WhatsApp Support:** +91 ${businessData.whatsapp[0]}\n• **Email:** ${businessData.email}\n\nBoth numbers are dedicated for business purposes and available **24x7** for urgent calls, rooftop inquiries, and solar consultations!`,
        action: {
          label: "Chat with Er. Satyaprakash on WhatsApp",
          url: `https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent("Hello Er. Satyaprakash, I have an inquiry regarding solar installation.")}`
        }
      };
    }

    // 8. Survey / Booking
    if (q.includes("survey") || q.includes("book") || q.includes("site visit") || q.includes("quote") || q.includes("survey book")) {
      return {
        text: `📋 **Book a 100% Free Site Survey:**\n\nOur certified solar engineers will visit your roof, perform precision 3D shadow analysis, check your electricity meter connection, and calculate your exact subsidy.\n\n👉 Simply scroll to the **Contact Form** or message us directly with your Address & Phone Number!`,
        action: {
          label: "Go to Contact Form",
          url: "#contact"
        }
      };
    }

    // Default Fallback
    return {
      text: `Thank you for your question! **Satyarthi Solar Solution** is Gorakhpur's premier UPNEDA-approved solar EPC contractor and home appliances showroom.\n\nWe provide:\n• Up to **₹1,08,000 Govt Subsidy** under PM Surya Ghar\n• 5-Star Inverter ACs, Fridges, and Coolers\n• Diesel-free Solar Aata Chakkis\n• Complete Net Metering with UPPCL\n\nWould you like to speak directly with **Er. Satya Prakash Satyarthi** on WhatsApp?`,
      action: {
        label: "Chat on WhatsApp (+91 8112991941)",
        url: `https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(`Hello Er. Satyaprakash, I was inquiring on your website AI assistant: "${query}"`)}`
      }
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMessage = {
      id: "msg-" + Date.now(),
      sender: "user",
      time: "Just now",
      text: text.trim()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateResponse(text);
      const newBotMsg = {
        id: "msg-" + (Date.now() + 1),
        sender: "bot",
        time: "Just now",
        text: botResponse.text,
        action: botResponse.action
      };
      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "msg-1",
        sender: "bot",
        time: "Just now",
        text: "Conversation reset! How can I assist you with your solar or appliances inquiry today?",
        quickReplies: [
          "💰 3kW Subsidy?",
          "❄️ Home Appliances",
          "🌾 Solar Aata Chakki",
          "📍 Google Maps Location"
        ]
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button (Positioned cleanly at BOTTOM-RIGHT, separated from WhatsApp on bottom-left) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {hasUnread && !isOpen && (
          <div className="bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-2xl shadow-xl border border-amber-400/50 flex items-center gap-1.5 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>{lang === "hi" ? "सूर्य साथी AI • सब्सिडी व रेट्स" : "Surya AI • Subsidies & Rates"}</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI Solar Assistant"
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-slate-950 rounded-full shadow-2xl shadow-amber-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-slate-950" />
          ) : (
            <>
              <Bot className="w-7 h-7 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Expanded AI Chatbot Window (docks neatly above trigger at bottom-24 right-4 sm:right-6) */}
      {isOpen && (
        <div className="fixed bottom-24 right-3 sm:right-6 z-50 w-[95vw] sm:w-[410px] max-h-[80vh] h-[580px] bg-white rounded-3xl shadow-2xl border border-slate-300/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center shadow-md">
                <Sun className="w-6 h-6 text-slate-950 animate-[spin_12s_linear_infinite]" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-black text-white tracking-wide">
                    Surya Mitra AI
                  </h3>
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] px-1.5 py-0.2 rounded font-bold border border-amber-400/30">
                    सूर्य साथी
                  </span>
                </div>
                <p className="text-[11px] text-emerald-300 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  UPNEDA Approved EPC Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                title="Reset Conversation"
                className="w-8 h-8 rounded-full hover:bg-white/10 text-slate-300 flex items-center justify-center transition"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="w-8 h-8 rounded-full hover:bg-white/10 text-slate-300 flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick FAQ Strip Header */}
          <div className="bg-slate-100 border-b border-slate-200 p-2 overflow-x-auto scrollbar-none flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1 shrink-0 flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-amber-500" />
              FAQs:
            </span>
            {basicFaqs.slice(0, 4).map((faq, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(faq.query)}
                className="text-[11px] font-semibold bg-white hover:bg-amber-50 text-slate-800 hover:text-amber-900 px-2.5 py-1 rounded-full border border-slate-300 transition shrink-0 shadow-2xs"
              >
                {faq.label}
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/70 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 space-y-2 leading-relaxed shadow-xs ${
                    msg.sender === "user"
                      ? "bg-slate-900 text-white rounded-br-none"
                      : "bg-white text-slate-800 border border-slate-200/80 rounded-bl-none"
                  }`}
                >
                  {/* Message formatted text */}
                  <div className="whitespace-pre-line text-[12px]">
                    {msg.text}
                  </div>

                  {/* Attached Action CTA */}
                  {msg.action && (
                    <div className="pt-2">
                      <a
                        href={msg.action.url}
                        target={msg.action.url.startsWith("http") ? "_blank" : "_self"}
                        rel="noreferrer"
                        onClick={() => {
                          if (!msg.action.url.startsWith("http")) setIsOpen(false);
                        }}
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-[11px] py-1.5 px-3 rounded-xl shadow-xs transition"
                      >
                        <span>{msg.action.label}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Quick replies below first message */}
                {msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.quickReplies.map((qr, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          const targetFaq = basicFaqs.find(f => f.label.includes(qr.replace(/[^\w\s]/gi, '')) || f.label.includes(qr));
                          handleSendMessage(targetFaq ? targetFaq.query : qr);
                        }}
                        className="text-[11px] font-bold bg-amber-100 hover:bg-amber-200 text-amber-950 px-2.5 py-1 rounded-xl border border-amber-300 transition"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white p-3 rounded-2xl border border-slate-200 w-20 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Drawer / Suggestions Accordion */}
          <div className="bg-white border-t border-slate-200 px-3 py-2">
            <div className="text-[10px] text-slate-400 font-semibold mb-1 flex items-center justify-between">
              <span>Quick Topics (Tap to ask):</span>
              <a
                href={`https://wa.me/91${businessData.whatsapp[0]}`}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-600 hover:underline inline-flex items-center gap-1 font-bold"
              >
                <MessageCircle className="w-3 h-3" />
                Live WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-1">
              {basicFaqs.slice(4).map((faq, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(faq.query)}
                  className="text-[10px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded-lg border border-slate-200 whitespace-nowrap transition"
                >
                  {faq.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything (e.g. 3kW subsidy, AC price)..."
              className="flex-1 bg-slate-100 text-slate-800 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-amber-400 flex items-center justify-center transition shadow-md shrink-0 cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}

export default AIChatbot;
