import { Link } from "react-router-dom";
import { EuropeMap } from "../components/europe-map";
import { areasOfKnowledge } from "../data/documents";
import { FileText, BookOpen, Users, Globe } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              className="mb-6 tracking-tight" 
              style={{ 
                fontSize: "4rem", 
                fontWeight: 300, 
                lineHeight: 1.1,
                letterSpacing: "-0.02em"
              }}
            >
              The European Hall of Physics
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4" style={{ lineHeight: 1.7 }}>
              A digital archive dedicated to those who seek to learn physics outside of the class curriculum
            </p>
            <div className="h-px w-24 mx-auto" style={{ backgroundColor: "#4A90E2", opacity: 0.3 }} />
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
              Interactive Overview
            </p>
            <h2 className="text-2xl tracking-tight" style={{ fontWeight: 300 }}>
              European Physics Landscape
            </h2>
          </div>
          <EuropeMap />
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
              Quick Access
            </p>
            <h2 className="text-2xl tracking-tight" style={{ fontWeight: 300 }}>
              Explore Our Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/repository"
              className="p-8 border border-border/50 hover:border-[#4A90E2] transition-colors group"
            >
              <FileText className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-[#4A90E2] transition-colors" />
              <h3 className="mb-2 group-hover:text-[#4A90E2] transition-colors">
                Document Repository
              </h3>
              <p className="text-sm text-muted-foreground">
                Browse academic exercises and research papers from European institutions and students
              </p>
            </Link>

            <Link
              to="#countries"
              className="p-8 border border-border/50 hover:border-[#4A90E2] transition-colors group"
            >
              <Globe className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-[#4A90E2] transition-colors" />
              <h3 className="mb-2 group-hover:text-[#4A90E2] transition-colors">
                Countries
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore physics developments and interactive exercises across European nations
              </p>
            </Link>

            <Link
              to="#heritage"
              className="p-8 border border-border/50 hover:border-[#4A90E2] transition-colors group"
            >
              <BookOpen className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-[#4A90E2] transition-colors" />
              <h3 className="mb-2 group-hover:text-[#4A90E2] transition-colors">
                Collaborators
              </h3>
              <p className="text-sm text-muted-foreground">
                Leading European institutions and research centers
              </p>
            </Link>

            <Link
              to="#research"
              className="p-8 border border-border/50 hover:border-[#4A90E2] transition-colors group"
            >
              <Users className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-[#4A90E2] transition-colors" />
              <h3 className="mb-2 group-hover:text-[#4A90E2] transition-colors">
                Modern Research
              </h3>
              <p className="text-sm text-muted-foreground">
                Current research frontiers and areas of interest for our collaborators
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Areas of Knowledge */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
              Fields of Study
            </p>
            <h2 className="text-3xl tracking-tight mb-4" style={{ fontWeight: 300 }}>
              Areas of Knowledge
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore different fields of physics and their European contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfKnowledge.map(area => (
              <Link
                key={area.id}
                to={`/area/${area.id}`}
                className="p-6 border border-border/50 hover:border-[#4A90E2] transition-colors group"
              >
                <h3 className="mb-3 group-hover:text-[#4A90E2] transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {area.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Globe className="w-3 h-3" />
                  {area.associatedCountries.length} countries
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
              01 / Countries
            </p>
            <h2 className="text-3xl tracking-tight mb-4" style={{ fontWeight: 300 }}>
              National Contributions
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore the physics achievements and institutions across European nations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { country: "Germany", institutions: "Max Planck Society, DESY", discoveries: "Quantum Mechanics, Relativity" },
              { country: "United Kingdom", institutions: "Cavendish Laboratory, Royal Society", discoveries: "Electromagnetic Theory, Particle Physics" },
              { country: "France", institutions: "CNRS, École Polytechnique", discoveries: "Radioactivity, Nuclear Physics" },
              { country: "Switzerland", institutions: "CERN, ETH Zurich", discoveries: "Higgs Boson, Particle Accelerators" },
              { country: "Netherlands", institutions: "Leiden University, NIKHEF", discoveries: "Superconductivity, Low-Temperature Physics" },
              { country: "Italy", institutions: "INFN, Gran Sasso Laboratory", discoveries: "Nuclear Physics, Neutrino Research" },
            ].map((item) => (
              <div
                key={item.country}
                className="p-6 border border-border/50 hover:border-border transition-colors group cursor-pointer"
              >
                <h3 className="mb-3 group-hover:text-foreground transition-colors" style={{ color: "#4A90E2" }}>
                  {item.country}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Key Institutions
                    </p>
                    <p className="text-sm">{item.institutions}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Major Discoveries
                    </p>
                    <p className="text-sm text-muted-foreground">{item.discoveries}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Heritage Section */}
      <section id="heritage" className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
              02 / Collaborators
            </p>
            <h2 className="text-3xl tracking-tight mb-4" style={{ fontWeight: 300 }}>
              Our Main Collaborators
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Leading European institutions contributing to the advancement of physics research and education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              // Germany
              { institution: "Max Planck Institute for Physics", location: "Munich", country: "Germany", focus: "Particle Physics, Cosmology" },
              { institution: "DESY", location: "Hamburg", country: "Germany", focus: "Accelerator Physics, Photon Science" },
              { institution: "Ludwig Maximilian University", location: "Munich", country: "Germany", focus: "Quantum Optics, Theoretical Physics" },
              
              // United Kingdom
              { institution: "University of Cambridge", location: "Cambridge", country: "United Kingdom", focus: "Astrophysics, Condensed Matter" },
              { institution: "University of Oxford", location: "Oxford", country: "United Kingdom", focus: "Particle Physics, Quantum Computing" },
              { institution: "Imperial College London", location: "London", country: "United Kingdom", focus: "Theoretical Physics, Plasma Physics" },
              
              // France
              { institution: "École Polytechnique", location: "Palaiseau", country: "France", focus: "Applied Physics, Optics" },
              { institution: "CNRS", location: "Paris", country: "France", focus: "Multidisciplinary Research" },
              { institution: "Sorbonne University", location: "Paris", country: "France", focus: "Theoretical Physics, Materials Science" },
              
              // Switzerland
              { institution: "CERN", location: "Geneva", country: "Switzerland", focus: "Particle Physics, High Energy Physics" },
              { institution: "ETH Zurich", location: "Zurich", country: "Switzerland", focus: "Quantum Physics, Astrophysics" },
              { institution: "EPFL", location: "Lausanne", country: "Switzerland", focus: "Plasma Physics, Photonics" },
              
              // Netherlands
              { institution: "Leiden University", location: "Leiden", country: "Netherlands", focus: "Low-Temperature Physics, Astronomy" },
              { institution: "University of Amsterdam", location: "Amsterdam", country: "Netherlands", focus: "Theoretical Physics, Cosmology" },
              { institution: "Delft University of Technology", location: "Delft", country: "Netherlands", focus: "Quantum Technology, Nanophysics" },
              
              // Italy
              { institution: "INFN", location: "Rome", country: "Italy", focus: "Nuclear Physics, Particle Physics" },
              { institution: "University of Rome La Sapienza", location: "Rome", country: "Italy", focus: "Theoretical Physics, Astrophysics" },
              { institution: "Scuola Normale Superiore", location: "Pisa", country: "Italy", focus: "Mathematical Physics, Quantum Field Theory" },
              
              // Spain
              { institution: "IFIC Valencia", location: "Valencia", country: "Spain", focus: "Particle Physics, Neutrino Physics" },
              { institution: "ICFO", location: "Barcelona", country: "Spain", focus: "Photonics, Quantum Optics" },
              
              // Austria
              { institution: "University of Vienna", location: "Vienna", country: "Austria", focus: "Quantum Physics, Foundations of Physics" },
              { institution: "Institute for Quantum Optics", location: "Innsbruck", country: "Austria", focus: "Quantum Information, Atomic Physics" },
              
              // Sweden
              { institution: "Stockholm University", location: "Stockholm", country: "Sweden", focus: "Theoretical Physics, Astrophysics" },
              { institution: "Lund University", location: "Lund", country: "Sweden", focus: "Nuclear Physics, Synchrotron Radiation" },
              
              // Denmark
              { institution: "Niels Bohr Institute", location: "Copenhagen", country: "Denmark", focus: "Quantum Physics, Cosmology" },
              
              // Belgium
              { institution: "KU Leuven", location: "Leuven", country: "Belgium", focus: "Condensed Matter, High Energy Physics" },
              
              // Poland
              { institution: "University of Warsaw", location: "Warsaw", country: "Poland", focus: "Quantum Information, Optics" },
            ].map((collab, idx) => (
              <div
                key={idx}
                className="p-6 border border-border/50 hover:border-[#4A90E2] transition-all duration-200 group"
              >
                <div className="mb-4">
                  <h3 className="mb-2 text-base leading-tight group-hover:text-[#4A90E2] transition-colors">
                    {collab.institution}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {collab.location}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-background border border-border/70 text-xs">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    {collab.country}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Research Focus
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {collab.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Research Section */}
      <section id="research" className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
              03 / Modern Research
            </p>
            <h2 className="text-3xl tracking-tight mb-4" style={{ fontWeight: 300 }}>
              Contemporary Physics
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Current research frontiers and active collaborations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                field: "Particle Physics",
                institutions: "CERN, DESY",
                focus: "Standard Model verification, Dark Matter searches, High-energy collisions",
              },
              {
                field: "Quantum Computing",
                institutions: "QuTech, IQM, Oxford Quantum",
                focus: "Quantum algorithms, Error correction, Superconducting qubits",
              },
              {
                field: "Astrophysics",
                institutions: "ESO, ESA, Max Planck Institutes",
                focus: "Gravitational waves, Exoplanet detection, Cosmological surveys",
              },
              {
                field: "Condensed Matter",
                institutions: "Multiple European universities",
                focus: "2D materials, Topological insulators, Quantum materials",
              },
            ].map((research) => (
              <div
                key={research.field}
                className="p-8 border border-border/50 hover:border-border transition-colors"
              >
                <h3 className="mb-4" style={{ color: "#4A90E2" }}>
                  {research.field}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Leading Institutions
                    </p>
                    <p className="text-sm">{research.institutions}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Research Focus
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {research.focus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                04 / About Us
              </p>
              <h2 className="text-3xl tracking-tight mb-4" style={{ fontWeight: 300 }}>
                Mission & Vision
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The European Hall of Physics serves as a comprehensive digital archive documenting 
                Europe's physics teachings outside your average university curriculum. If you are seeking
                textbook evaluations, certifications and classical exercises, I'm afraid you are in the
                wrong place.
              </p>
              <p>
                This platform aims to celebrate the scientific heritage the environments in which physics
                are built, directed to find those exercises and lenses you might not be able to see 
                inside a classroom, not to substitute but to complement your formation in physics.
              </p>
              <p className="text-sm border-l-2 pl-6 py-2" style={{ borderColor: "rgba(74, 144, 226, 0.3)" }}>
                An initiative to promote scientific collaboration and knowledge sharing across 
                European research institutions and the global scientific community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}