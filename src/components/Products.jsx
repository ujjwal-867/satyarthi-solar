import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { 
  ShoppingBag, 
  MessageCircle, 
  Search, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Eye, 
  X,
  PhoneCall
} from "lucide-react";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: "All", en: "All Products", hi: "सभी उत्पाद" },
    { id: "Inverters & PCU", en: "Inverters & PCU", hi: "इन्वर्टर व पीसीयू" },
    { id: "Panels & Kits", en: "Panels & Kits", hi: "पैनल व किट्स" },
    { id: "Agro & Commercial", en: "Agro & Commercial", hi: "आटा चक्की व कृषि" },
    { id: "Electrical & Safety", en: "Electrical & Safety", hi: "सुरक्षा व अर्थिंग" },
    { id: "Hardware & Structures", en: "Hardware & Structures", hi: "जीआई स्ट्रक्चर" }
  ];

  const filteredProducts = useMemo(() => {
    return businessData.products.filter((p) => {
      const matchCat = selectedCategory === "All" || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppInquiry = (product) => {
    const text = `Hello Er. Satyaprakash (Satyarthi Solar Solution), I am interested in purchasing:\n` +
      `Product: ${product.name}\n` +
      `Price: ₹${product.price.toLocaleString()} (${product.unit})\n` +
      `Please let me know availability and delivery/installation details in Uttar Pradesh.`;

    window.open(`https://wa.me/91${businessData.whatsapp[0]}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleSelectForQuote = (product) => {
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      const msgEl = document.querySelector("#contact-message");
      if (msgEl) {
        msgEl.value = `I am interested in buying ${product.name} (₹${product.price.toLocaleString()}). Please contact me with quotation.`;
      }
    }
  };

  return (
    <section id="products" className="py-24 bg-white text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <ShoppingBag className="w-4 h-4 text-blue-600" />
            <span>Verified Solar Inventory & Wholesale Rates • अधिकृत सोलर उपकरण व थोक दरें</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Solar Equipment & <span className="text-emerald-600">Products Catalog</span>
            <span className="block text-xl sm:text-2xl font-bold text-slate-600 mt-2 font-hindi">
              सोलर उपकरण, इन्वर्टर, पैनल एवं स्ट्रक्चर कैटलॉग
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Direct authorized supply of certified inverters, solar flour mill systems, water heaters, heavy GI mounting structures, and ISI electrical protection gear.
            <span className="block text-slate-500 text-xs sm:text-sm mt-1 font-hindi">
              लूम सोलर, फ़ूजीयामा, अमेज, और टाटा सोलर के प्रामाणिक उपकरण सीधे शोरूम से सर्वोत्तम दरों पर।
            </span>
          </p>
        </motion.div>

        {/* Filter & Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span>{cat.en}</span>
                <span className="text-[10px] opacity-80 font-hindi ml-1">({cat.hi})</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search product / उत्पाद खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {filteredProducts.map((product, idx) => {
            const discountPercent = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : null;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image & Badge Container */}
                  <div className="relative bg-slate-900 aspect-4/3 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                    />
                    
                    {/* Badge */}
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                      {product.badge || product.category}
                    </span>

                    {/* Discount Tag */}
                    {discountPercent && discountPercent > 0 && (
                      <span className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded shadow-sm">
                        {discountPercent}% OFF
                      </span>
                    )}

                    {/* Quick View Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-xs cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Details • विवरण देखें</span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 line-clamp-2 leading-snug">
                      {product.name}
                    </h3>

                    {/* Pricing */}
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-xl font-black text-slate-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-[11px] text-slate-500">
                        / {product.unit}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specs Pills */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {product.specs?.slice(0, 2).map((sp, idx2) => (
                        <span key={idx2} className="bg-slate-100 text-slate-700 text-[10px] font-medium px-2 py-0.5 rounded-md">
                          ✓ {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-5 pt-0 flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppInquiry(product)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Order • ऑर्डर</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectForQuote(product)}
                    title="Get Official Quote"
                    className="p-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 mt-8">
            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No products found • कोई उत्पाद नहीं मिला</h3>
            <p className="text-xs text-slate-500 mt-1">Try searching for other equipment or reset the filter.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4 text-xs font-bold text-blue-600 underline cursor-pointer"
            >
              Reset Filters • फ़िल्टर रीसेट करें
            </button>
          </div>
        )}

        {/* Wholesale & Bulk Supply Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-gradient-to-r from-blue-50 via-slate-50 to-emerald-50 rounded-3xl p-6 sm:p-7 border border-blue-200 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600 text-white rounded-2xl font-bold shadow-md shadow-blue-600/20">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Need Bulk Solar Panels, Heavy GI Structures or Custom Chakki VFD Drives?
              </h4>
              <p className="text-xs text-emerald-800 font-semibold font-hindi mt-0.5">
                डीलर, ठेकेदार व चक्की मालिकों के लिए थोक आपूर्ति सीधे मोतिराम अड्डा डिपो से उपलब्ध है।
              </p>
            </div>
          </div>
          <a
            href={`tel:${businessData.phone[0]}`}
            className="bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-xs transition shrink-0 flex items-center gap-2 shadow-md"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Wholesale Desk: +91 {businessData.phone[0]}</span>
          </a>
        </motion.div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-900 p-6 flex items-center justify-center max-h-72">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-60 max-w-full object-contain"
              />
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {selectedProduct.category}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-black text-slate-900">
                    ₹{selectedProduct.price.toLocaleString()}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      ₹{selectedProduct.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs text-slate-500">/ {selectedProduct.unit}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedProduct.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Technical Specifications • तकनीकी विवरण:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {selectedProduct.specs?.map((s, idx) => (
                    <div key={idx} className="bg-slate-50 p-2 rounded-xl text-slate-700 flex items-center gap-1.5 border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    handleWhatsAppInquiry(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp • ऑर्डर</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleSelectForQuote(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs transition cursor-pointer"
                >
                  Request Official Quote • कोटेशन
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
