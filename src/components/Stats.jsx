import { businessData } from "../data/businessData";

function Stats() {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-3 text-center">
        <div>
          <h2 className="text-4xl font-bold">
            {businessData.installations}
          </h2>
          <p>Installations</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            {businessData.yearsExperience}
          </h2>
          <p>Years Experience</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            {businessData.reviews}
          </h2>
          <p>Customer Reviews</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;