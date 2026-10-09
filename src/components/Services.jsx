import { businessData } from "../data/businessData";
import { 
  Home, 
  Building2, 
  Factory, 
  Wheat, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";

function Services() {
  const iconComponents = {
    Home: Home,
    Building2: Building2,
    Factory: Factory,
    Wheat: Wheat,
    Wrench: Wrench,
  };

  const handleBookService = (serviceTitle) => {
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      const selectEl = document.querySelector("#service-select");
      if (selectEl) {
        selectEl.value = serviceTitle;
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Complete Solar Engineering Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Specialized Solar <span className="text-emerald-700">Services</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From residential rooftop net metering to heavy commercial power plants and rural flour mills, we deliver turnkey engineering backed by UPNEDA empanelment.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {businessData.servicesList.map((service, idx) => {
            const Icon = iconComponents[service.icon] || Home;
            return (
              <div
                key={service.id}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon and Number */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-105 transition">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 mt-1">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-200/80">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Key Highlights:
                    </p>
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="mt-4 p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-100 text-[11px] text-emerald-900">
                    <strong>Ideal for:</strong> {service.idealFor}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => handleBookService(service.title)}
                  className="mt-6 w-full py-3 bg-white group-hover:bg-emerald-600 group-hover:text-white text-slate-800 font-bold text-xs rounded-xl border border-slate-200 group-hover:border-emerald-600 transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Why Choose Er. Satyaprakash & Team Strip */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                Engineering Excellence
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Looking for a Custom Solar Solution in Gorakhpur or UP?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need a 3kW residential rooftop system, a 15 HP solar flour mill drive, or an industrial MW plant, Er. Satya Prakash Satyarthi and our certified engineering team provide complete customized engineering drawings, DISCOM approvals, and guaranteed performance.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() => handleBookService("Custom Solar Consultation")}
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl text-center text-sm transition shadow-lg shadow-amber-400/20 cursor-pointer"
              >
                Schedule Free Site Visit
              </button>
              <a
                href={`tel:${businessData.phone[0]}`}
                className="w-full text-center border border-slate-700 hover:border-slate-500 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition"
              >
                Call: +91 {businessData.phone[0]}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;