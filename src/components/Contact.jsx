import { useState } from "react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import confetti from "canvas-confetti";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Building2,
  Sparkles,
  PhoneCall
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

function Contact({ prefilledData }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Gorakhpur",
    service: "Residential Rooftop Solar (PM Surya Ghar)",
    bill: prefilledData?.bill ? String(prefilledData.bill) : "",
    roofArea: prefilledData?.roofArea ? String(prefilledData.roofArea) : "",
    message: prefilledData?.recommendedKw ? `Interested in ${prefilledData.recommendedKw} kW Solar Plant calculation from website.` : "",
    website: "" // Anti-spam bot trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLead, setSubmittedLead] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Honeypot check: If bot filled the hidden trap field, silently abort
    if (formData.website) {
      setIsSubmitted(true);
      return;
    }

    // 2. Name validation & sanitization
    const cleanName = formData.name.trim().replace(/[<>]/g, "");
    if (!cleanName || cleanName.length < 2) {
      alert("Please provide a valid Full Name • कृपया सही नाम दर्ज करें।");
      return;
    }

    // 3. Strict 10-digit Indian mobile number validation
    const digitsOnly = formData.phone.replace(/\D/g, "");
    const cleanPhone = (digitsOnly.length === 12 && digitsOnly.startsWith("91")) 
      ? digitsOnly.slice(2) 
      : digitsOnly;

    if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      alert("Please enter a valid 10-digit Indian Mobile Number (e.g. 8112991941) • कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।");
      return;
    }

    setIsSubmitting(true);

    const newLead = {
      id: "LEAD-" + Date.now(),
      name: cleanName,
      phone: cleanPhone,
      email: formData.email.trim().replace(/[<>]/g, ""),
      location: formData.location,
      service: formData.service,
      bill: formData.bill.trim().replace(/[<>]/g, ""),
      roofArea: formData.roofArea.trim().replace(/[<>]/g, ""),
      message: formData.message.trim().replace(/[<>]/g, ""),
      status: "New",
      createdAt: new Date().toISOString()
    };

    // 1. Save to LocalStorage for in-browser CRM / Admin Portal
    try {
      const existing = JSON.parse(localStorage.getItem("satyarthi_leads") || "[]");
      existing.unshift(newLead);
      localStorage.setItem("satyarthi_leads", JSON.stringify(existing));
    } catch (err) {
      console.error("Local storage error:", err);
    }

    // 2. Try POSTing to PHP API endpoint (for cPanel hosting)
    try {
      await fetch("/api/lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLead)
      });
    } catch (err) {
      console.log("PHP backend endpoint pinged (optional on static):", err);
    }

    // 3. Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setSubmittedLead(newLead);
  };

  const openWhatsAppLead = () => {
    if (!submittedLead) return;
    const text = `*New Solar Inquiry from Website (Satyarthi Solar Solution)*\n` +
      `• Name: ${submittedLead.name}\n` +
      `• Phone: ${submittedLead.phone}\n` +
      `• Location: ${submittedLead.location}\n` +
      `• Service: ${submittedLead.service}\n` +
      (submittedLead.bill ? `• Monthly Bill: ₹${submittedLead.bill}\n` : "") +
      (submittedLead.roofArea ? `• Roof Area: ${submittedLead.roofArea} sq ft\n` : "") +
      (submittedLead.message ? `• Message: ${submittedLead.message}\n` : "") +
      `Please contact me with quotation and subsidy details.`;

    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Empanelled Solar Contractor • UPNEDA अधिकृत वेंडर</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Get Your Free Site Survey & <span className="text-blue-600">Customized Quote</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              निःशुल्क रूफ सर्वे एवं आधिकारिक कोटेशन प्राप्त करें
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fill the form below or contact Er. Satya Prakash Satyarthi directly. We provide complete technical shadow analysis and guaranteed subsidy approval.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              फॉर्म भरें या सीधे कॉल करें — हमारी तकनीकी टीम 24 घंटे में आपकी छत का शैडो एनालिसिस व कोटेशन उपलब्ध कराएगी।
            </span>
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details & Map (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Quick Contact Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>Company Information</span>
                <span className="text-xs text-emerald-700 font-bold font-hindi">कंपनी विवरण</span>
              </h3>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-bold block flex items-center gap-1.5">
                      <span>24×7 Business Calling Lines • संपर्क सूत्र:</span>
                      <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-black border border-emerald-200">24×7 Active</span>
                    </span>
                    <a href={`tel:${businessData.phone[0]}`} className="font-bold text-slate-900 hover:text-blue-600 transition block text-sm mt-0.5">
                      +91 {businessData.phone[0]} (Er. Satya Prakash - 24×7)
                    </a>
                    <a href={`tel:${businessData.phone[1]}`} className="font-bold text-slate-700 hover:text-blue-600 transition block text-xs mt-0.5">
                      +91 {businessData.phone[1]} (24×7 Business Desk)
                    </a>
                    <a href={`tel:${businessData.officeNumber}`} className="font-semibold text-emerald-700 hover:underline transition block text-xs mt-0.5">
                      Office Line: {businessData.officeNumber} (Motiram Adda)
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">WhatsApp Desk • व्हाट्सएप:</span>
                    <a 
                      href={`https://wa.me/91${businessData.whatsapp[0]}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-emerald-600 hover:text-emerald-700 transition"
                    >
                      +91 {businessData.whatsapp[0]} (Instant Chat • तुरंत जवाब)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Official Email • ईमेल:</span>
                    <a 
                      href={`mailto:${businessData.email}`}
                      className="font-medium text-slate-800 hover:text-blue-600 transition break-all"
                    >
                      {businessData.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Head Office Address • मुख्य पता:</span>
                    <p className="font-medium text-slate-800 leading-snug">
                      {businessData.address}
                    </p>
                    <a
                      href={businessData.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 font-bold hover:underline mt-1"
                    >
                      <span>Open in Google Maps App • गूगल मैप पर देखें</span>
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                  <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Showroom Timings • समय:</span>
                    <p className="font-medium text-slate-800 text-xs">
                      Monday – Saturday: 9:00 AM – 7:30 PM (Sunday by Appointment)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Follow Our Solar Updates:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={businessData.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-slate-100 hover:bg-pink-600 hover:text-white rounded-xl transition text-slate-700"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={businessData.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl transition text-slate-700"
                    title="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embedded Frame */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
              <div className="p-3 bg-slate-50 flex justify-between items-center text-xs text-slate-700 px-4">
                <span className="flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" /> Motiram Adda, Gorakhpur
                </span>
                <a
                  href={businessData.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-bold hover:underline"
                >
                  View Large Map ↗
                </a>
              </div>
              <div className="aspect-16/9 w-full bg-slate-100">
                <iframe
                  title="Satyarthi Solar Solution Location"
                  src="https://maps.google.com/maps?q=satyarthi%20solar%20solution%20motiram%20adda%20gorakhpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Lead Form (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200"
          >
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Thank You, {submittedLead?.name}!
                </h3>
                <p className="text-base font-bold text-emerald-700 font-hindi">
                  धन्यवाद! आपका कोटेशन अनुरोध दर्ज हो गया है।
                </p>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your solar quote request has been recorded. Er. Satya Prakash Satyarthi will review your roof and electrical parameters and call you within 24 hours.
                </p>

                {/* Instant WhatsApp Prompt */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 max-w-md mx-auto text-left space-y-3">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                    <MessageCircle className="w-4 h-4 text-emerald-700" />
                    <span>Get Instant Priority Response on WhatsApp</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Click the button below to directly send your filled parameters to Er. Satyaprakash on WhatsApp for faster quotation.
                  </p>
                  <button
                    type="button"
                    onClick={openWhatsAppLead}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send My Details via WhatsApp • व्हाट्सएप पर भेजें</span>
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        location: "Gorakhpur",
                        service: "Residential Rooftop Solar (PM Surya Ghar)",
                        bill: "",
                        roofArea: "",
                        message: "",
                        website: ""
                      });
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                  >
                    Submit another inquiry • अन्य अनुरोध दर्ज करें
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Anti-spam honeypot input */}
                <div style={{ display: "none", position: "absolute", left: "-9999px" }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website || ""}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Request Free Solar Site Survey
                  </h3>
                  <p className="text-sm font-semibold text-emerald-700 font-hindi mt-0.5">
                    निःशुल्क साइट सर्वे एवं कोटेशन के लिए विवरण भरें
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details for custom engineering calculation & subsidy assistance.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name • पूरा नाम *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rameshwar Sharma"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile / WhatsApp • मोबाइल नंबर *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 8112991941"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address • ईमेल (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@gmail.com"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      District • जिला (Uttar Pradesh) *
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 cursor-pointer"
                    >
                      <option value="Gorakhpur">Gorakhpur • गोरखपुर</option>
                      <option value="Deoria">Deoria • देवरिया</option>
                      <option value="Kushinagar">Kushinagar • कुशीनगर</option>
                      <option value="Maharajganj">Maharajganj • महराजगंज</option>
                      <option value="Basti">Basti • बस्ती</option>
                      <option value="Sant Kabir Nagar">Sant Kabir Nagar • संत कबीर नगर</option>
                      <option value="Siddharthnagar">Siddharthnagar • सिद्धार्थनगर</option>
                      <option value="Azamgarh">Azamgarh • आजमगढ़</option>
                      <option value="Mau">Mau • मऊ</option>
                      <option value="Ballia">Ballia • बलिया</option>
                      <option value="Varanasi">Varanasi • वाराणसी</option>
                      <option value="Lucknow">Lucknow • लखनऊ</option>
                      <option value="Other UP">Other District in UP • अन्य जिला</option>
                    </select>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Interested Service • सेवा का प्रकार *
                  </label>
                  <select
                    id="service-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 cursor-pointer"
                  >
                    <option value="Residential Rooftop Solar (PM Surya Ghar)">
                      Residential Rooftop Solar • घरेलू रूफटॉप सोलर (₹1,08,000 Subsidy)
                    </option>
                    <option value="Commercial Solar (School, Hospital, Office)">
                      Commercial Solar • कमर्शियल सोलर (स्कूल, अस्पताल, पेट्रोल पंप)
                    </option>
                    <option value="Solar Aata Chakki / Flour Mill Drive">
                      Solar Aata Chakki • सोलर आटा चक्की / ट्यूबवेल VFD ड्राइव
                    </option>
                    <option value="Industrial Solar Plant (20kW - 500kW+)">
                      Industrial Solar Plant • औद्योगिक सोलर प्लांट (20kW - 500kW+ HT/LT)
                    </option>
                    <option value="Solar + Inverter AC / Home Appliances Combo">
                      Solar + 5-Star Inverter AC / Fridge Combo Deal • सोलर + एसी कॉम्बो
                    </option>
                    <option value="Home Appliances Only (AC, Fridge, Cooler, Washing Machine)">
                      Home Appliances Only • इलेक्ट्रॉनिक्स (एसी, फ्रिज, कूलर, वाशिंग मशीन)
                    </option>
                    <option value="Solar Water Heater">Solar Water Heater • सोलर वाटर हीटर</option>
                    <option value="Solar Maintenance & AMC">Solar Maintenance & AMC • मेंटेनेंस व सर्विस</option>
                    <option value="Wholesale Solar Panels & Hardware Supply">
                      Wholesale Solar Panels & Structures Supply • थोक सोलर उपकरण
                    </option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Monthly Electricity Bill */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Monthly Electricity Bill • मासिक बिल (₹)
                    </label>
                    <input
                      type="number"
                      name="bill"
                      value={formData.bill}
                      onChange={handleChange}
                      placeholder="e.g. 3500"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Roof Area */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Rooftop Area • छत क्षेत्रफल (Sq. Ft.)
                    </label>
                    <input
                      type="number"
                      name="roofArea"
                      value={formData.roofArea}
                      onChange={handleChange}
                      placeholder="e.g. 400"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Requirements • अतिरिक्त विवरण (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="छत की स्थिति, इन्वर्टर या एसी की आवश्यकता के बारे में बताएं..."
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl text-sm transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting 
                      ? "Submitting Inquiry..." 
                      : "Submit Quote Request • निःशुल्क कोटेशन अनुरोध भेजें"}
                  </span>
                </button>

                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  🔒 We respect your privacy. Your information is only used by Er. Satyaprakash for the solar site survey and subsidy application.
                  <span className="block font-hindi text-[10px] text-slate-400 mt-0.5">
                    आपकी जानकारी पूर्णतः सुरक्षित है और केवल साइट सर्वे एवं सब्सिडी हेतु उपयोग की जाएगी।
                  </span>
                </p>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;