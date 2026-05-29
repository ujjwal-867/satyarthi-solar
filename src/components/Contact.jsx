import { businessData } from "../data/businessData";

function Contact() {
  return (
    <section
  id="contact"
  className="py-20 px-8 bg-slate-100"
>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <div className="bg-white p-8 rounded-2xl shadow">
          <p className="mb-4">
  <strong>Phone:</strong>{" "}
  <a
    href="tel:8112991941"
    className="text-green-600 hover:underline"
  >
    8112991941
  </a>
  {" | "}
  <a
    href="tel:8112991441"
    className="text-green-600 hover:underline"
  >
    8112991441
  </a>
</p>

          <a
  href="https://wa.me/918112991941"
  target="_blank"
  rel="noreferrer"
  className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-xl"
>
  Chat on WhatsApp
</a>
          <p className="mb-4">
  <strong>Email:</strong>{" "}
  <a
    href="mailto:satyarthisolarsolution@gmail.com"
    className="text-green-600 hover:underline"
  >
    satyarthisolarsolution@gmail.com
  </a>
</p>

          <p>
            <strong>Address:</strong> {businessData.address}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;