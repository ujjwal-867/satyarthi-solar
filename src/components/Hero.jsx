// Import business data for dynamic content
import { businessData } from "../data/businessData";

// Hero section component - main landing banner with call-to-action buttons
function Hero() {
  return (
    // Hero container with max width and padding
    <section className="max-w-7xl mx-auto px-8 py-24">
      {/* Main content wrapper */}
      <div className="max-w-3xl">
        {/* Large headline using company tagline */}
        <h1 className="text-5xl font-bold text-slate-900 leading-tight">
          {businessData.tagline}
        </h1>

        {/* Descriptive paragraph about services */}
        <p className="mt-6 text-lg text-slate-600">
          {businessData.companyName} provides residential, commercial and
          industrial solar solutions across Uttar Pradesh with expert
          installation and after-sales support.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex gap-4 mt-8">
  <a
    href={`https://wa.me/91${businessData.whatsapp[0]}`}
    target="_blank"
    rel="noreferrer"
    className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
  >
    Get Free Quote
  </a>

  <a
    href={`tel:${businessData.phone[0]}`}
    className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50 transition"
  >
    Call Now
  </a>
</div>
      </div>
    </section>
  );
}

export default Hero;