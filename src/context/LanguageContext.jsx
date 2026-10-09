import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    // Top Bar & Nav
    upnedaApproved: "UPNEDA APPROVED",
    vendorCode: "Code",
    helpline24x7: "24x7 Helpline",
    admin: "Admin",
    home: "Home",
    pmSuryaGhar: "PM Surya Ghar",
    quotations: "Quotations",
    certifications: "Certificates",
    calculator: "Calculator",
    gallery: "Gallery",
    location: "Location",
    contact: "Contact",
    callNow: "Call Now",
    chatWhatsApp: "WhatsApp",
    
    // Hero Section (Strictly Solar)
    heroBadge: "UPNEDA Empanelled Vendor • Code: GKP2604066741",
    heroTitleStart: "Switch to Clean Energy with ",
    heroTitleHighlight: "Trusted Solar Solutions",
    heroSubtitle: "Powering Homes, Businesses & Industries across Gorakhpur and Uttar Pradesh. Get up to ₹1,08,000 Govt Subsidy directly credited into your bank account under PM Surya Ghar Muft Bijli Yojna.",
    
    heroFeature1: "Up to ₹1,08,000 Govt Subsidy in Bank",
    heroFeature2: "300 Units Free Electricity Every Month",
    heroFeature3: "Authorized LOOM SOLAR & FUJIYAMA Dealer",
    heroFeature4: "UPPCL Net Metering & 25-Year Panel Warranty",
    heroFeature5: "Engineered by Er. Satyaprakash Satyarthi",
    
    btnGetQuote: "Get Free Quotation",
    btnCalculate: "Calculate Savings",
    btnCall: "Call 24×7",
    
    certStripTitle: "Official Certifications & Approvals",
    certUPNEDA: "UPNEDA Approved",
    certMNRE: "MNRE Govt of India",
    certPMSurya: "PM Surya Ghar Yojana",
    certLoom: "Loom Solar Partner",
    certFujiyama: "Fujiyama Authorized",
    certISO: "ISO 9001:2015 Quality",

    // Slide captions
    slide1Tag: "3kW Residential Rooftop",
    slide1Title: "PM Surya Ghar Rooftop Solar Plant",
    slide1Desc: "100% Net Metering with UPPCL • Up to ₹1,08,000 Subsidy",

    slide2Tag: "High-Efficiency Solar Modules",
    slide2Title: "Mono PERC High-Wattage Panels",
    slide2Desc: "Maximum generation even in cloudy weather • 25 Years Warranty",

    slide3Tag: "Commercial EPC Solution",
    slide3Title: "Industrial & School Solar Plant",
    slide3Desc: "Cut commercial electricity bills by 85% with zero diesel cost",

    slide4Tag: "Smart On-Grid Inverter",
    slide4Title: "Intelligent Bi-Directional Net-Metering",
    slide4Desc: "Export extra power to grid and earn credits in your electricity bill",

    slide5Tag: "Zero Diesel Aata Chakki",
    slide5Title: "Heavy-Duty Solar Flour Mill Installation",
    slide5Desc: "Run 10HP - 25HP motors cleanly with heavy-duty solar VFD drive",

    slide6Tag: "Gorakhpur Experience Center",
    slide6Title: "Satyarthi Solar Showroom & Warehouse",
    slide6Desc: "Motiram Adda, Deoria Road, Gorakhpur • 24x7 Customer Support",

    // Quotation & Contact snippets
    instantQuote: "Official Price Quotations & Rate Charts",
    quoteSubtitle: "Pre-calculated turnkey project costs after central and state subsidies",
    contactHeading: "Contact Our Lead Solar Engineers",
    contactSubtitle: "Available 24x7 for site survey, subsidy guidance and quotation dispatch"
  },
  hi: {
    // Top Bar & Nav
    upnedaApproved: "यूपीनेडा अधिकृत",
    vendorCode: "वेंडर कोड",
    helpline24x7: "24×7 हेल्पलाइन",
    admin: "एडमिन",
    home: "होम",
    pmSuryaGhar: "पीएम सूर्य घर",
    quotations: "कोटेशन व रेट्स",
    certifications: "प्रमाणपत्र",
    calculator: "कैलकुलेटर",
    gallery: "गैलरी",
    location: "पता व नक्शा",
    contact: "संपर्क करें",
    callNow: "कॉल करें",
    chatWhatsApp: "व्हाट्सएप",

    // Hero Section (Strictly Solar)
    heroBadge: "यूपीनेडा अधिकृत वेंडर • कोड: GKP2604066741",
    heroTitleStart: "विश्वसनीय सोलर समाधान से ",
    heroTitleHighlight: "बिजली बिल शून्य बनाएं",
    heroSubtitle: "गोरखपुर व पूरे उत्तर प्रदेश में घर, दुकान व फैक्ट्री के लिए सबसे भरोसेमंद सोलर समाधान। पीएम सूर्य घर मुफ्त बिजली योजना के तहत सीधे बैंक खाते में पाएं ₹1,08,000 तक सरकारी सब्सिडी।",

    heroFeature1: "बैंक खाते में ₹1,08,000 तक सीधी सरकारी सब्सिडी",
    heroFeature2: "हर महीने 300 यूनिट तक मुफ्त बिजली",
    heroFeature3: "लूम सोलर एवं फुजियामा के अधिकृत डीलर",
    heroFeature4: "यूपीपीसीएल नेट मीटरिंग व 25 साल की पैनल वारंटी",
    heroFeature5: "इंजीनियर सत्यप्रकाश सत्यार्थी द्वारा तकनीकी संचालन",

    btnGetQuote: "मुफ्त कोटेशन प्राप्त करें",
    btnCalculate: "बचत कैलकुलेटर",
    btnCall: "24×7 कॉल करें",

    certStripTitle: "सरकारी मान्यता एवं अधिकृत प्रमाणपत्र",
    certUPNEDA: "यूपीनेडा स्वीकृत",
    certMNRE: "नवीन व नवीकरणीय ऊर्जा मंत्रालय (MNRE)",
    certPMSurya: "पीएम सूर्य घर योजना",
    certLoom: "लूम सोलर अधिकृत पार्टनर",
    certFujiyama: "फुजियामा अधिकृत डीलर",
    certISO: "आईएसओ 9001:2015 प्रमाणित",

    // Slide captions
    slide1Tag: "3kW घरेलू रूफटॉप सोलर",
    slide1Title: "पीएम सूर्य घर रूफटॉप सोलर प्लांट",
    slide1Desc: "यूपीपीसीएल नेट मीटरिंग • ₹1,08,000 सरकारी सब्सिडी के साथ",

    slide2Tag: "उच्च क्षमता मोनो पर्क पैनल",
    slide2Title: "मोनो पर्क सोलर पैनल्स",
    slide2Desc: "बादल वाले मौसम में भी बेहतरीन बिजली उत्पादन • 25 साल की वारंटी",

    slide3Tag: "कमर्शियल व इंडस्ट्रियल सोलर",
    slide3Title: "फैक्ट्री व स्कूल सोलर प्लांट",
    slide3Desc: "डीजल खर्च खत्म करें और बिजली का बिल 85% तक कम करें",

    slide4Tag: "स्मार्ट ऑन-ग्रिड इन्वर्टर",
    slide4Title: "इंटेलिजेंट नेट मीटरिंग सिस्टम",
    slide4Desc: "अतिरिक्त बिजली ग्रिड को बेचें और बिजली बिल में क्रेडिट पाएं",

    slide5Tag: "जीरो डीजल आटा चक्की",
    slide5Title: "सोलर आटा चक्की व हैवी मोटर सिस्टम",
    slide5Desc: "10HP से 25HP तक की मोटर बिना डीजल के दिनभर चलाएं",

    slide6Tag: "गोरखपुर एक्सपीरियंस सेंटर",
    slide6Title: "सत्यार्थी सोलर शोरूम व एक्सपीरियंस सेंटर",
    slide6Desc: "मोतीराम अड्डा, देवरिया रोड, गोरखपुर • 24x7 ग्राहक सेवा उपलब्ध",

    // Quotation & Contact snippets
    instantQuote: "सरकारी सब्सिडी उपरांत सोलर कोटेशन चार्ट",
    quoteSubtitle: "केंद्र व राज्य सरकार की सब्सिडी के बाद नेट देय राशि की स्पष्ट जानकारी",
    contactHeading: "हमारे सोलर एक्सपर्ट्स से सीधे बात करें",
    contactSubtitle: "साइट सर्वे, सब्सिडी आवेदन व मुफ्त कोटेशन हेतु 24 घंटे उपलब्ध"
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("satyarthi_solar_lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("satyarthi_solar_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
