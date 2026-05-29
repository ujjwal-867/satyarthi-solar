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

function Services() {
  return (
    <section className="bg-slate-50 py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {service.title}
            </h3>

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