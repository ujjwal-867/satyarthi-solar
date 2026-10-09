import { useState, useMemo } from "react";
import { businessData } from "../data/businessData";
import { 
  CheckCircle2, 
  MapPin, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Eye, 
  X, 
  ArrowRight 
} from "lucide-react";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Residential", "Commercial", "Agro & Mill", "Industrial"];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return businessData.projects;
    return businessData.projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            2,200+ Successful Installations Across UP
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Completed Projects & <span className="text-emerald-700">Real Site Gallery</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Take a look at actual solar rooftop installations, commercial setups, and solar flour mills engineered by Er. Satya Prakash Satyarthi across Gorakhpur, Deoria, Kushinagar, and Uttar Pradesh.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center items-center gap-2 mt-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-slate-900 text-amber-400 shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Capacity Pill */}
                  <div className="absolute top-4 left-4 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full shadow-md">
                    {project.capacity}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                    {project.category}
                  </div>

                  {/* Location Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      {project.location}
                    </span>
                    <span className="text-[11px] text-emerald-300 font-semibold">
                      {project.client}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Savings & Specs Pill */}
                  <div className="mt-5 p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-100 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-600 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                        Monthly Savings:
                      </span>
                      <strong className="text-emerald-700 font-bold">{project.monthlySavings}</strong>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-1 border-t border-emerald-100">
                      <span className="text-slate-600">Annual Return:</span>
                      <strong className="text-slate-900 font-semibold">{project.annualSavings}</strong>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5 text-xs text-slate-500">
                    <p><strong>Panels:</strong> {project.panels}</p>
                    <p><strong>Inverter:</strong> {project.inverter}</p>
                    <p><strong>Subsidy:</strong> <span className="text-emerald-700 font-semibold">{project.subsidyReceived}</span></p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Project Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/9 bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full">
                {selectedProject.capacity}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {selectedProject.category} • {selectedProject.location}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Client: <strong>{selectedProject.client}</strong>
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div>
                  <span className="text-slate-400 block text-[10px]">Monthly Electricity Saved:</span>
                  <strong className="text-emerald-700 text-sm">{selectedProject.monthlySavings}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Annual Financial Benefit:</span>
                  <strong className="text-slate-900 text-sm">{selectedProject.annualSavings}</strong>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Solar Equipment Used:</span>
                  <span className="text-slate-800 font-medium">{selectedProject.panels} with {selectedProject.inverter}</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const contactEl = document.querySelector("#contact");
                    if (contactEl) {
                      contactEl.scrollIntoView({ behavior: "smooth" });
                      const msg = document.querySelector("#contact-message");
                      if (msg) msg.value = `I want a solar installation similar to ${selectedProject.title} in ${selectedProject.location}.`;
                    }
                    setSelectedProject(null);
                  }}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5"
                >
                  <span>Request Similar Installation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
