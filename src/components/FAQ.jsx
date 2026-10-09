import { useState } from "react";
import { businessData } from "../data/businessData";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            Solar & Subsidy Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="text-emerald-700">Questions</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about rooftop solar, PM Surya Ghar subsidy rules, net metering, and installation in UP.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-3">
          {businessData.faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 bg-slate-50/70 hover:bg-slate-100 flex justify-between items-center gap-4 transition cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 p-6 bg-emerald-50 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm text-slate-900">Have a specific question about your roof or meter?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Talk directly with our lead solar engineer Er. Satyaprakash.</p>
          </div>
          <a
            href={`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent("Hello Er. Satyaprakash, I have a few questions regarding solar installation for my property.")}`}
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shrink-0 transition shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default FAQ;
