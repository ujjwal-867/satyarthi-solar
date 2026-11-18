import { businessData } from "../data/businessData";

function Stats({ onOpenCalculator }) {
  const keyMetrics = [
    { value: "2,500+", label: "Installed Sites", hi: "संतुष्ट परिवार व प्रतिष्ठान" },
    { value: "2,200+ kW", label: "Commissioned Capacity", hi: "पूर्वांचल में कुल क्षमता" },
    { value: "₹1,08,000", label: "Max Govt. Subsidy", hi: "सीधे बैंक खाते में DBT" },
    { value: "25 Years", label: "Panel Warranty", hi: "टियर-1 मोनो पर्क गारंटी" }
  ];

  const partnerBrands = (businessData.primaryDealerBrands || []).slice(0, 8);

  return (
    <section aria-label="Subsidy analysis and trust metrics">
      {/* SolarHub-Inspired Warm Sunlight Mid-Page Break Band */}
      <div className="bg-[#FDF3D0] border-y border-[#EFE0A8] py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0D1F17]">
            Estimate your solar subsidy &amp; monthly bill savings
          </h2>
          <p className="text-sm sm:text-[15px] text-[#4B5550] leading-relaxed max-w-xl mx-auto">
            Check exact central + UP state PM Surya Ghar subsidy tiers, 6% bank loan EMI (from ₹1,800/mo), and 25-year payback for your rooftop.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenCalculator}
              className="px-6 py-2.5 rounded-md bg-white hover:bg-[#FAF8F4] text-[#0D1F17] text-sm font-semibold border border-[#E5D79F] transition-colors cursor-pointer"
            >
              Open Solar Calculator
            </button>
            <a
              href={`tel:${businessData.phone[0]}`}
              className="px-5 py-2.5 rounded-md text-sm font-semibold text-[#083D2A] hover:underline"
            >
              Call +91 {businessData.phone[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Quiet Hairline Metrics & Authorized Brand Strip */}
      <div className="bg-[#FAF8F4] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {keyMetrics.map((m, idx) => (
              <div
                key={idx}
                className="border-l-2 border-[#F5C441] pl-4 space-y-0.5"
              >
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0D1F17]">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#083D2A]">
                  {m.label}
                </div>
                <div className="text-[11px] text-[#5C6660] font-hindi">
                  {m.hi}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E5E0D8] flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5C6660] shrink-0">
              Authorized Primary Dealer
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-[#4B5550]">
              {partnerBrands.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-3">
                  {i > 0 && <span className="text-[#D4CEC2]">/</span>}
                  <span>{b.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
