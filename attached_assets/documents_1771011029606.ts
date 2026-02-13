// Document types and data for The European Hall of Physics Repository

export interface Author {
  name: string;
  affiliation: string;
  country: string;
}

export interface Document {
  id: string;
  title: string;
  authors: Author[];
  country: string;
  area: string;
  abstract: string;
  year: number;
  pdfUrl: string;
  keywords: string[];
}

export interface AreaOfKnowledge {
  id: string;
  name: string;
  description: string;
  conceptualOverview: string;
  associatedCountries: string[];
}

export const areasOfKnowledge: AreaOfKnowledge[] = [
  {
    id: "mechanics",
    name: "Classical Mechanics",
    description: "The study of motion, forces, and energy in macroscopic systems",
    conceptualOverview: "Classical mechanics encompasses the foundational principles governing the motion of objects under the influence of forces. From Newton's laws to Lagrangian and Hamiltonian formulations, this field provides the mathematical framework for understanding everything from planetary motion to engineering applications. European contributions include seminal work by Newton, Lagrange, Hamilton, and Euler.",
    associatedCountries: ["United Kingdom", "France", "Switzerland", "Germany", "Italy","Spain"]
  },
  {
    id: "quantum",
    name: "Quantum Mechanics",
    description: "The fundamental theory of nature at small scales",
    conceptualOverview: "Quantum mechanics revolutionized our understanding of the atomic and subatomic world. European physicists laid the foundations of this theory through wave-particle duality, the uncertainty principle, and quantum field theory. The Copenhagen interpretation and the mathematical formalism developed in Europe remain central to modern quantum physics.",
    associatedCountries: ["Germany", "Denmark", "Austria", "United Kingdom", "France","Spain"]
  },
  {
    id: "thermodynamics",
    name: "Thermodynamics & Statistical Mechanics",
    description: "The study of heat, energy, and the behavior of large ensembles of particles",
    conceptualOverview: "Thermodynamics emerged from European scientific inquiry into heat engines and the nature of energy. Statistical mechanics provides a microscopic foundation for thermodynamic principles. European contributions include the laws of thermodynamics, the Boltzmann distribution, and the development of entropy as a fundamental concept.",
    associatedCountries: ["Germany", "Austria", "United Kingdom", "France","Spain"]
  },
  {
    id: "electromagnetism",
    name: "Electromagnetism",
    description: "The study of electric and magnetic fields and their interactions",
    conceptualOverview: "Maxwell's equations unified electricity and magnetism into a coherent theoretical framework, revealing light as an electromagnetic wave. European researchers established the foundations of electromagnetic theory through experimental discoveries and theoretical synthesis, leading to modern technologies from radio to quantum electrodynamics.",
    associatedCountries: ["United Kingdom", "Germany", "France", "Netherlands","Spain"]
  },
  {
    id: "optics",
    name: "Optics & Photonics",
    description: "The study of light and its interactions with matter",
    conceptualOverview: "From geometric optics to wave optics and quantum optics, European scientists have shaped our understanding of light. The development of interference and diffraction theory, spectroscopy, and laser physics all have strong European foundations. Modern photonics continues this tradition with applications in telecommunications and quantum technologies.",
    associatedCountries: ["Netherlands", "United Kingdom", "France", "Germany", "Spain"]
  },
  {
    id: "particle-physics",
    name: "Particle Physics",
    description: "The study of fundamental particles and their interactions",
    conceptualOverview: "European institutions, particularly CERN, have been at the forefront of particle physics research. From the discovery of the electron to the Higgs boson, European experiments and theories have revealed the Standard Model of particle physics. Current research explores physics beyond the Standard Model through high-energy collisions.",
    associatedCountries: ["Switzerland", "United Kingdom", "France", "Germany", "Italy","Spain"]
  }
];

export const documents: Document[] = [
  {
    id: "doc-001",
    title: "Dynamics and Description of the route followed by a multiphase rocket",
    authors: [
      { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "mechanics",
    abstract: "This comprehensive treatment explores advanced formulations of classical mechanics, and the thrust-weight ratio of such a machine. We present the initial calculations a company as NASA would have faced initially when developping the first rocket models.",
    year: 2025,
    pdfUrl: "#",
    keywords: ["Energetic conservation", "variational principles", "classical mechanics"]
  },
  {
    id: "doc-002",
    title: "The Big Bang. Synthetical Explanation of the origin of our universe",
    authors: [
     { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "Relativity and quantum mechanics",
    abstract: "The Big Bang theory defined by simply established models, regarding the start of our universe, the Planck era, and energetical mechanics",
    year: 2026,
    pdfUrl: "#",
    keywords: ["Planck Era", "Universal dynamics", "Energetic conservation"]
  },
  {
    id: "doc-003",
    title: "The Sneaky Salesman. System analysis as to determine an engine's validity",
    authors: [
      { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "thermodynamics",
    abstract: "The analysis of a proposed Internal Combustion Engine (ICE) in a product in which we have limited data, so as to showcase some of the due diligence attained to engineering process.",
    year: 2026,
    pdfUrl: "#",
    keywords: ["thermodynamics", "chemical analysis", "non-equilibrium systems"]
  },
  {
    id: "doc-004",
    title: "Measurement theory. The development of physics units and measures.",
    authors: [
      { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "classical physics",
    abstract: "This monograph provides a complete treatment of the development of fundamental measurements and magnitudes, as well as the different takes taken by scientists.",
    year: 2024,
    pdfUrl: "#",
    keywords: ["classical physics", "Measurements", "magnitudes"]
  },
  {
    id: "doc-005",
    title: "Measuring a planet's gravity. A discourse on the 1998 College Entrance Exam",
    authors: [
      { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "classical mechanics",
    abstract: "A comprehensive exploration on the topic of our planet's gravity, its measurement, the relative motion phenomena and its effects on our perception and further considerations.",
    year: 2026,
    pdfUrl: "#",
    keywords: ["classical mechanics", "gravity", "mechanical explorations"]
  },
  {
    id: "doc-006",
    title: "Electromagnetic induction. Sustaining electrical architecture at city scale",
    authors: [
      { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "electrical fields",
    abstract: "A detailed examination of the dynamics within developing an electrical grid based on electromagnetic induction in order to charge small stations.",
    year: 2026,
    pdfUrl: "#",
    keywords: ["electricity", "mechanical physics", "Mechanical optimizations"]
  },
  {
    id: "doc-007",
    title: "VTOL dynamic charging systems. Photoelectric effect applied tO sustaining flight for small Unmanned Aerial Vehicles (UAV)",
    authors: [
     { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "mechanics",
    abstract: "Photoelectric effect applied tO sustaining flight for small Unmanned Aerial Vehicles (UAV).",
    year: 2026,
    pdfUrl: "#",
    keywords: ["Mechanical optimizations", "mechanical physics", "electricity"]
  },
  {
    id: "doc-008",
    title: "Energetical limitations for Electromagnetic Induced Shielding",
    authors: [
      { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "electromagnetism",
    abstract: "The theoretical limits, thermal constraints, interaction with the atmosphere and small proyectiles.",
    year: 2027,
    pdfUrl: "#",
    keywords: ["electromagnetic", "mechanical optimizations", "electricity"]
  },
  {
    id: "doc-009",
    title: "The death of the universe. Studying the colapse of modern-day physics and its possible outcomes",
    authors: [
      { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "thermodynamics",
    abstract: "Thermal and heat death, Schwarzschild radius, Hawking radiation, and iteration theorems condensed in small explanatory publication.",
    year: 2023,
    pdfUrl: "#",
    keywords: ["phase transitions", "critical phenomena", "statistical mechanics"]
  },
  {
    id: "doc-010",
    title: "Einstein vs Planck vs Newton. Contraposition of theoretical physics models",
    authors: [
      { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "classical mechanics",
    abstract: "Exploration of the limit scenarios of physics, simultaneity of results, and validity of non-experimental data taken from calculus.",
    year: 2026,
    pdfUrl: "#",
    keywords: ["Einstein", "Planck", "classical mechanics"]
  },
  {
    id: "doc-011",
    title: "Quantum computing. Calculus behind the deployment of rudimentary quantum computing",
    authors: [
      { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "quantum",
    abstract: "A detailed exploration of the physical and theoretical limitations in the development of quantum cells, as well as pending structures.",
    year: 2027,
    pdfUrl: "#",
    keywords: ["quantum mechanics", "ultrafast physics", "computing"]
  },
  {
    id: "doc-012",
    title: "Weather predictions",
    authors: [
      { name: "Jorge Llorente", affiliation: "EHOP", country: "Spain" }
    ],
    country: "Spain",
    area: "thermal mechanics",
    abstract: "Operating climate change as a theoretical heat engine, while checking for perturbances and the posibility of predictive algorithms.",
    year: 2026,
    pdfUrl: "#",
    keywords: ["thermal physics", "thermodynamics", "computing"]
  }
];
