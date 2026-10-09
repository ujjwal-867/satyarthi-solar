import { businessData } from "../data/businessData";
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Compass, 
  Car, 
  Train, 
  Plane, 
  CheckCircle2, 
  MessageCircle,
  Building2
} from "lucide-react";

export function LocationMap() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=satyarthi%20solar%20solution%20motiram%20adda%20gorakhpur&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const keyDistances = [
    { hub: "Gorakhpur Railway Junction", distance: "16 km", time: "25-30 min via Deoria Rd", icon: Train },
    { hub: "Gorakhpur Airport (Mahayogi Gorakhnath)", distance: "18 km", time: "30-35 min", icon: Plane },
    { hub: "Deoria Sadar Railway Station", distance: "22 km", time: "30 min via Highway", icon: Car },
    { hub: "Kushinagar International Stupa", distance: "45 km", time: "50 min via NH-27", icon: Compass }
  ];

  const serviceDistricts = [
    "Gorakhpur (गोरखपुर)",
    "Deoria (देवरिया)",
    "Kushinagar (कुशीनगर)",
    "Maharajganj (महराजगंज)",
    "Basti (बस्ती)",
    "Sant Kabir Nagar (खलीलाबाद)",
    "Mau (मऊ)",
    "Azamgarh (आजमगढ़)",
    "Ballia (बलिया)"
  ];

  return (
    <section id="location" className="py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Official Experience Center & Showroom
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Visit Our Store & <span className="text-emerald-700">Live Map Location</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Located right on the main Gorakhpur - Deoria Road Highway at Motiram Adda. Walk in to explore live rooftop solar panels, on-grid inverters, lithium batteries, and 5-star inverter appliances.
          </p>
        </div>

        {/* Main Grid: Interactive Map + Location Information Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Google Map Frame (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col min-h-[450px]">
            {/* Map Top Status Bar */}
            <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <strong className="text-amber-300 font-bold">Store Open Today:</strong>
                <span className="text-slate-200">9:00 AM – 7:30 PM</span>
              </div>
              <a
                href={businessData.googleMapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white transition font-bold"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Iframe */}
            <div className="relative flex-1 w-full min-h-[380px] bg-slate-100">
              <iframe
                title="Satyarthi Solar Solution Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px]"
              ></iframe>

              {/* Floating Overlay Card on Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200 text-xs space-y-1.5 pointer-events-auto">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span>Satyarthi Solar Solution</span>
                </div>
                <p className="text-slate-600 line-clamp-2">
                  Motiram Adda, Deoria Road, Gorakhpur (UP) - 273202
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    UPNEDA Approved
                  </span>
                  <a
                    href={businessData.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <Navigation className="w-3 h-3" />
                    Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Map Action Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>Landmark: Near Motiram Chauraha & Rampur Market</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={businessData.googleMapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-3.5 rounded-xl transition inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Details, Contacts & Timings Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Address & Verification Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Verified Headquarters
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  PIN: 273202
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Satyarthi Solar Solution
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  (सौर ऊर्जा एवं आधुनिक इलेक्ट्रॉनिक्स)
                </p>
                <p className="text-sm text-slate-700 font-medium mt-2 leading-relaxed">
                  <strong>Adds:</strong> MOTIRAM ADDA DEORIYA ROAD GORAKHPUR UTTAR PRADESH 273202
                </p>
              </div>

              {/* Legal Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                  <div className="text-[10px] text-slate-500 font-bold uppercase">UPNEDA Vendor Code</div>
                  <div className="font-bold text-slate-900 font-mono text-xs">{businessData.vendorCode}</div>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                  <div className="text-[10px] text-slate-500 font-bold uppercase">GSTIN</div>
                  <div className="font-bold text-slate-900 font-mono text-xs">{businessData.gstin}</div>
                </div>
              </div>

              {/* Direct Calling Buttons */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/80 flex items-center justify-between">
                  <span>📞 Dedicated Business Lines:</span>
                  <span className="font-black text-emerald-900 bg-emerald-200/60 px-2 py-0.5 rounded">24x7 Available</span>
                </div>

                <a
                  href={`tel:${businessData.phone[0]}`}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-between transition shadow-md"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call Er. Satya Prakash (24x7):</span>
                  </span>
                  <span className="font-mono text-amber-300">+91 {businessData.phone[0]}</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${businessData.phone[1]}`}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold p-2.5 rounded-xl text-center transition border border-slate-200 flex items-center justify-center gap-1.5"
                    title="24x7 Business Number"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-600" />
                    <span>+91 {businessData.phone[1]} (24x7)</span>
                  </a>

                  <a
                    href={`tel:${businessData.phone[2]}`}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold p-2.5 rounded-xl text-center transition border border-slate-200 flex items-center justify-center gap-1.5"
                  >
                    <Building2 className="w-3.5 h-3.5 text-slate-600" />
                    <span>Office: {businessData.phone[2]}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Distances */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-600" />
                Distance from Key Transit Hubs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {keyDistances.map((d, idx) => {
                  const Icon = d.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-800">
                        <span className="truncate pr-1">{d.hub}</span>
                        <span className="text-emerald-700 shrink-0 font-mono">{d.distance}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{d.time}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* District Service Coverage */}
            <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-6 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Free Site Survey Coverage Area
                </h4>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                  100 km Radius
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Our engineers travel directly to your home, school, hospital, or mill to take precise roof measurements and shadow analysis:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {serviceDistricts.map((dist, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-white/10 hover:bg-white/20 text-slate-200 px-2.5 py-1 rounded-lg border border-white/10 font-medium transition"
                  >
                    {dist}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between gap-2 border-t border-emerald-800/60">
                <span className="text-xs text-slate-300">Need an engineer visit?</span>
                <a
                  href="#contact"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black py-2 px-3.5 rounded-xl transition inline-flex items-center gap-1 shadow-sm"
                >
                  <span>Book Free Survey</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LocationMap;
