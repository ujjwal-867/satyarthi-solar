import { useState, useMemo } from "react";
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
  X 
} from "lucide-react";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    "All",
    "Inverters & PCU",
    "Panels & Kits",
    "Agro & Commercial",
    "Electrical & Safety",
    "Hardware & Structures"
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
    const text = `Hello Er. Satyaprakash, I am interested in purchasing:\n` +
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
    <section id="products" className="py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
            Verified Solar Inventory & Wholesale Prices
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Solar Equipment & <span className="text-emerald-700">Products Catalog</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Direct authorized supply of certified inverters, solar flour mill systems, water heaters, heavy GI mounting structures, and ISI electrical protection gear.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search equipment, brand, PCU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map((product) => {
            const discountPercent = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : null;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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
                      <span>Inspect Details</span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
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
                      {product.specs?.slice(0, 2).map((sp, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-medium px-2 py-0.5 rounded">
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
                    <span>WhatsApp Order</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectForQuote(product)}
                    title="Get Official Quote"
                    className="p-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl transition cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 mt-8">
            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No products found</h3>
            <p className="text-xs text-slate-500 mt-1">Try searching for other equipment or reset the filter.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4 text-xs font-bold text-emerald-700 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Wholesale & Bulk Supply Note */}
        <div className="mt-14 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-400 text-slate-950 rounded-xl font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Need Bulk Solar Panels, Heavy GI Structures or Custom Chakki VFD Drives?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                We supply directly to dealers, contractors, and mill owners across Uttar Pradesh at wholesale rates.
              </p>
            </div>
          </div>
          <a
            href={`tel:${businessData.phone[0]}`}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition shrink-0"
          >
            Call Wholesale Desk
          </a>
        </div>

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
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full transition"
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
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
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
                  Technical Specifications:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {selectedProduct.specs?.map((s, idx) => (
                    <div key={idx} className="bg-slate-50 p-2 rounded-lg text-slate-700 flex items-center gap-1.5">
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
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Order on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleSelectForQuote(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-xs transition"
                >
                  Request Official Quote
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
