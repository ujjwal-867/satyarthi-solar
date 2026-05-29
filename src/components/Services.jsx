// Service offerings data with title and description for each service type
const services = [
  {
    title: "Residential Solar",
    description: "Complete rooftop solar solutions for homes."
  },
  {
    title: "Commercial Solar",
    description: "Solar systems for offices, shops and industries."
  },
  {
    title: "Solar Maintenance",
    description: "Regular maintenance and repair services."
  }
];

// Services section component - displays all available service offerings
function Services() {
  return (
    // Services section with light background
    <section className="bg-slate-50 py-20 px-8">
      {/* Section heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      {/* Grid layout - 3 columns on medium screens and up */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Map through services array to create individual service cards */}
        {services.map((service, index) => (
          // Service card container with white background and shadow
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow"
          >
            {/* Service title */}
            <h3 className="text-2xl font-semibold mb-4">
              {service.title}
            </h3>

            {/* Service description */}
            <p className="text-slate-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;