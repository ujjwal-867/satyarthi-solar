// Import all page sections/components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
// Main App component - root component that combines all sections
function App() {
  return (
    // Main container with full height and white background
    <div className="min-h-screen bg-white">
      {/* Navigation bar at top */}
      <Navbar />
      {/* Hero banner with tagline and CTA buttons */}
      <Hero />
      {/* Statistics/credentials section */}
      <Stats />
      {/* Services grid section */}
      <Services />
      <Contact />
    </div>
  );
}

export default App;