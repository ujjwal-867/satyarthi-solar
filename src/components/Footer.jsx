import { businessData } from "../data/businessData";
import { 
  Sun, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Lock, 
  Heart,
  Navigation,
  PhoneCall
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function Footer({ onOpenAdmin, onNavigate }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1e3b] text-white pt-16 pb-24 sm:pb-12 border-t border-[#16325c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#16325c]">
          
          {/* Col 1: Brand Info & Govt Code (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-sky-500 to-amber-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-md shadow-blue-950/40">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <span className="text-base sm:text-xl font-black tracking-tight text-white block whitespace-nowrap">
                  SATYARTHI <span className="text-amber-400">SOLAR SOLUTION</span>
                </span>
                <p className="text-[11px] text-sky-300 font-hindi font-medium whitespace-nowrap">
                  सत्यार्थी सोलर सॉल्यूशन • 2500+ संतुष्ट परिवार
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300/90 leading-relaxed">
              {businessData.tagline}. Leading UPNEDA empanelled solar installer and Primary Authorized Dealer for Tier-1 solar systems, inverters, and heavy-duty batteries. We deliver turnkey residential, commercial, industrial and solar aata chakki projects across every corner of Gorakhpur and Uttar Pradesh.
            </p>

            {/* Govt Credentials Box */}
            <div className="bg-[#0d284f] border border-blue-500/30 p-4 rounded-2xl space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0 text-amber-400" />
                <span>UPNEDA & MNRE Approved Vendor • Saur Samman Awardee</span>
              </div>
              <p className="text-slate-200 font-mono text-[11px]">
                Vendor Code: <strong className="text-amber-300">{businessData.vendorCode}</strong>
              </p>
              <p className="text-slate-200 font-mono text-[11px]">
                GSTIN: <strong className="text-sky-300">{businessData.gstin}</strong>
              </p>
              <p className="text-slate-200 font-mono text-[11px]">
                MSME Udyam: <strong className="text-amber-300">{businessData.udyamNo}</strong>
              </p>
              <p className="text-[11px] text-amber-300 font-semibold">
                Authorized Primary Dealer & Channel Partner of Leading Solar Brands
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation • नेविगेशन
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/") : scrollTo("#hero")} 
                  className="hover:text-emerald-400 transition cursor-pointer"
                >
                  Home | होम
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/on-grid") : scrollTo("#portal-hub")} 
                  className="hover:text-emerald-400 transition cursor-pointer text-emerald-300 font-semibold"
                >
                  On-Grid (PM Surya Ghar) | सब्सिडी दरें
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/off-grid") : scrollTo("#portal-hub")} 
                  className="hover:text-emerald-400 transition cursor-pointer text-amber-300 font-semibold"
                >
                  Off-Grid True Rate List | वास्तविक दर सूची
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/appliances") : scrollTo("#portal-hub")} 
                  className="hover:text-emerald-400 transition cursor-pointer text-blue-300"
                >
                  Electronics Store | होम उपकरण
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate ? onNavigate("/gallery") : scrollTo("#portal-hub")} 
                  className="hover:text-emerald-400 transition cursor-pointer text-purple-300"
                >
                  Site Gallery | रियल प्रोजेक्ट्स
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigate) onNavigate("/certificates");
                    else scrollTo("#certificates");
                  }} 
                  className="hover:text-emerald-400 transition cursor-pointer"
                >
                  Certificates | सरकारी मान्यता
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigate) onNavigate("/#contact");
                    else scrollTo("#contact");
                  }} 
                  className="hover:text-emerald-400 transition cursor-pointer text-emerald-300 font-bold"
                >
                  Book Site Survey | संपर्क
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Solar Offerings • प्रमुख सेवाएं
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Residential Rooftop Solar (1kW - 10kW) • आवासीय सोलर</li>
              <li>PM Surya Ghar Net Metering • UPPCL नेट मीटरिंग</li>
              <li>Commercial Solar Plants • स्कूल व अस्पताल प्लांट</li>
              <li>Industrial Plants (GIDA Gorakhpur) • गीडा औद्योगिक प्लांट</li>
              <li>Solar Aata Chakki (10HP - 25HP VFD) • सोलर आटा चक्की</li>
              <li>Solar Inverter AC & Appliances • सोलर इन्वर्टर एसी</li>
              <li>Solar Water Heaters (ETC/Pressurized) • वाटर हीटर</li>
              <li>Hot-Dip G.I. Heavy Mounting • आंधी-रोधी स्ट्रक्चर</li>
              <li>Chemical Earthing Kits • केमिकल अर्थिंग किट</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Contact & Store • संपर्क व पता
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200">{businessData.address}</p>
                  <a
                    href={businessData.googleMapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline mt-1 inline-flex items-center gap-1 font-semibold"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Google Maps Verified Link ↗</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-emerald-300 font-bold block">24×7 Business Helpline:</span>
                  <a href={`tel:${businessData.phone[0]}`} className="hover:text-white transition font-mono font-bold text-white">
                    +91 {businessData.phone[0]} / {businessData.phone[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${businessData.officeNumber}`} className="hover:text-blue-300 transition text-blue-300 font-medium">
                  Office Desk: {businessData.officeNumber}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/91${businessData.whatsapp[0]}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-semibold transition"
                >
                  WhatsApp: +91 {businessData.whatsapp[0]}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${businessData.email}`} className="hover:text-white transition break-all">
                  {businessData.email}
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={businessData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900 hover:bg-pink-600 rounded-xl text-slate-300 hover:text-white transition"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={businessData.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900 hover:bg-blue-600 rounded-xl text-slate-300 hover:text-white transition"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Local Gorakhpur Doorstep Coverage & Neighborhood Matrix for #1 Local Rank & AI Overview */}
        <div className="py-8 border-b border-[#16325c] space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/35 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Local Service Coverage • प्रत्येक कोने में ऑन-साइट सोलर सेवा</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white">
                Doorstep Solar Service Across Every Corner of Gorakhpur & Eastern UP
              </h3>
              <p className="text-xs text-slate-300 font-hindi">
                मोतीराम अड्डा स्थित मुख्य कार्यालय से गोरखपुर शहर, ग्रामीण अंचल व आसपास के सभी क्षेत्रों में 24 घंटे में मुफ्त ऑन-साइट विजिट व सर्वे।
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#0d284f] border border-blue-500/30 text-sky-300 text-[11px] font-bold px-3 py-1 rounded-xl">
                ⚡ 2500+ Real Gorakhpur Sites
              </span>
              <span className="bg-[#0d284f] border border-amber-500/30 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-xl">
                🏛️ UPNEDA Code: {businessData.vendorCode}
              </span>
            </div>
          </div>

          {/* Gorakhpur Local Area Tags */}
          <div className="bg-[#071933] border border-blue-900/60 rounded-2xl p-4 space-y-2.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Gorakhpur Neighborhoods & Purvanchal Corridors (त्वरित सोलर इंस्टॉलेशन एवं नेट मीटरिंग):
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {[
                { name: "Motiram Adda (Head Office)", hi: "मोतीराम अड्डा (मुख्यालय व शोरूम)" },
                { name: "Khorabar", hi: "खोराबार" },
                { name: "Jungle Ramgarh", hi: "जंगल रामगढ़ देवरिया रोड" },
                { name: "Taramandal & Budh Vihar", hi: "तारामंडल व बुद्ध विहार" },
                { name: "Rajendra Nagar & Saketpuri", hi: "राजेन्द्र नगर व साकेतपुरी" },
                { name: "Shatabdipuram & Rail Vihar", hi: "शताब्दीपुरम व रेलविहार" },
                { name: "Golghar & Civil Lines", hi: "गोलघर व सिविल लाइन्स" },
                { name: "Purdilpur & Bank Road", hi: "पुरदिलपुर व बैंक रोड" },
                { name: "Gorakhnath & Bargadwa", hi: "गोरखनाथ व बरगदवा" },
                { name: "Asuran & Rustampur", hi: "असुरन व रुस्तमपुर" },
                { name: "Mohaddipur & AIIMS", hi: "मोहदीपुर व एम्स गोरखपुर" },
                { name: "Medical College Road", hi: "मेडिकल कॉलेज रोड" },
                { name: "GIDA & Sahjanwa", hi: "गीडा औद्योगिक क्षेत्र व सहजनवा" },
                { name: "Pipraich & Chauri Chaura", hi: "पिपराइच व चौरी चौरा" },
                { name: "Barhalganj & Gola Bazar", hi: "बड़हलगंज व गोला बाजार" },
                { name: "Bansgaon & Khajni", hi: "बांसगांव व खजनी" },
                { name: "Deoria Highway Belt", hi: "देवरिया रोड कॉरिडोर" },
                { name: "Kushinagar Corridor", hi: "कुशीनगर मार्ग" },
                { name: "Maharajganj Route", hi: "महराजगंज मार्ग" },
                { name: "Basti & Khalilabad NH-27", hi: "बस्ती व खलीलाबाद हाईवे" }
              ].map((loc, lIdx) => (
                <button
                  key={lIdx}
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="inline-flex items-center gap-1.5 bg-[#0d284f] hover:bg-blue-600/40 text-slate-200 hover:text-white px-2.5 py-1 rounded-lg border border-blue-500/25 hover:border-amber-400 transition cursor-pointer text-[11px]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span className="font-medium">{loc.name}</span>
                  <span className="text-[10px] text-amber-300 font-hindi">({loc.hi})</span>
                </button>
              ))}
            </div>
            <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 border-t border-blue-900/60">
              <span>📍 <strong>Physical Landmark:</strong> Motiram Adda Chauraha, Near State Bank of India (SBI) & Police Chowki, Gorakhpur (273202)</span>
              <a href={`tel:${businessData.phone[0]}`} className="text-amber-300 font-bold hover:underline">
                Direct Engineer Helpline: +91 {businessData.phone[0]}
              </a>
            </div>
          </div>
        </div>

        {/* District SEO Link Cloud Across Uttar Pradesh */}
        <div className="py-6 border-b border-[#16325c] text-[11px] text-slate-400 space-y-2">
          <div className="flex flex-wrap items-center gap-1.5 font-medium">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] mr-1">
              Districts Served Across Uttar Pradesh (सभी 75 जिले):
            </span>
            {[
              "Gorakhpur (गोरखपुर)", "Deoria (देवरिया)", "Kushinagar (कुशीनगर)", "Maharajganj (महराजगंज)",
              "Basti (बस्ती)", "Sant Kabir Nagar (संत कबीर नगर)", "Siddharthnagar (सिद्धार्थनगर)",
              "Azamgarh (आजमगढ़)", "Mau (मऊ)", "Ballia (बलिया)", "Varanasi (वाराणसी)", "Prayagraj (प्रयागराज)",
              "Ayodhya (अयोध्या धाम)", "Lucknow (लखनऊ)", "Kanpur (कानपुर)", "Agra (आगरा)", "Meerut (मेरठ)",
              "Bareilly (बरेली)", "Jhansi (झाँसी)", "Noida (नोएडा)", "Ghaziabad (गाजियाबाद)"
            ].map((district, dIdx) => (
              <span key={dIdx} className="inline-flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="hover:text-emerald-400 transition cursor-pointer"
                >
                  {district}
                </button>
                {dIdx < 20 && <span className="text-slate-700">•</span>}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-slate-600">
            UPNEDA Empanelled Vendor Code: GKP2604066741 • PM Surya Ghar Muft Bijli Yojana Phase-II • UPPCL PuVVNL / MVVNL / DVVNL / PVVNL Net Metering
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong>Satyarthi Solar Solution • सत्यार्थी सोलर सॉल्यूशन</strong>. All Rights Reserved. 
            Empanelled with UPNEDA & MNRE.
          </p>

          <div className="flex items-center gap-4">
            <span>Gorakhpur, Uttar Pradesh</span>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Login • एडमिन</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
