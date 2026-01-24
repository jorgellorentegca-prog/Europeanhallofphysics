import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Globe, FileText, Atom, Microscope, Telescope, ChevronRight } from "lucide-react";
import { EuropeMap } from "@/components/EuropeMap";
import { EuStarDivider } from "@/components/EuStarDivider";

// Data
const areasOfKnowledge = [
  { id: "mechanics", name: "Classical Mechanics", description: "The study of motion of bodies under the action of forces.", icon: <Atom className="w-6 h-6" /> },
  { id: "electromagnetism", name: "Electromagnetism", description: "The study of the electromagnetic force.", icon: <Telescope className="w-6 h-6" /> },
  { id: "quantum", name: "Quantum Mechanics", description: "The study of nature at the smallest scales.", icon: <Microscope className="w-6 h-6" /> },
  { id: "thermodynamics", name: "Thermodynamics", description: "The study of heat, work, and temperature.", icon: <Atom className="w-6 h-6" /> },
  { id: "relativity", name: "Relativity", description: "The study of space and time.", icon: <Globe className="w-6 h-6" /> },
  { id: "optics", name: "Optics", description: "The study of light.", icon: <Telescope className="w-6 h-6" /> },
];

const collaborators = [
  { institution: "CERN", location: "Geneva, Switzerland", focus: "Particle Physics" },
  { institution: "Max Planck Institute", location: "Munich, Germany", focus: "Quantum Optics" },
  { institution: "CNRS", location: "Paris, France", focus: "Fundamental Research" },
  { institution: "Cambridge Cavendish", location: "Cambridge, UK", focus: "Astrophysics" },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/10 blur-[100px]" />
          <div className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-gold/30 bg-[#003399]/40 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-xs font-display text-gold tracking-widest uppercase">Official Archive</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 leading-tight drop-shadow-2xl">
              The European <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Hall of Physics</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100/80 font-light leading-relaxed mb-10">
              A digital archive documenting Europe's physics teachings beyond the standard university curriculum. 
              Preserving scientific heritage across borders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/repository">
                <button className="px-8 py-4 bg-gold text-[#003399] rounded-sm font-display font-bold uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] transition-all duration-300 flex items-center gap-2 group">
                  Enter Archive
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-sm font-display font-bold uppercase tracking-wider hover:border-gold hover:text-gold transition-all duration-300">
                  Our Mission
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      <EuStarDivider />

      {/* MAP SECTION */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#001a4d] to-[#001033] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display mb-6">European Physics <br/>Landscape</h2>
            <p className="text-blue-100/70 mb-8 leading-relaxed">
              Explore the interconnected network of research institutions, laboratories, and universities that form the backbone of European scientific advancement. From CERN in Geneva to the Niels Bohr Institute in Copenhagen.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 border border-blue-800 bg-blue-900/20 rounded-lg">
                <div className="text-3xl font-display text-gold mb-1">27+</div>
                <div className="text-xs uppercase tracking-wider text-blue-200">Countries</div>
              </div>
              <div className="p-4 border border-blue-800 bg-blue-900/20 rounded-lg">
                <div className="text-3xl font-display text-gold mb-1">150+</div>
                <div className="text-xs uppercase tracking-wider text-blue-200">Institutions</div>
              </div>
            </div>

            <button className="text-gold border-b border-gold pb-1 font-display uppercase text-sm tracking-widest hover:text-white hover:border-white transition-colors">
              View Interactive Map
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <EuropeMap />
          </motion.div>
        </div>
      </section>

      {/* AREAS OF KNOWLEDGE */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-display text-sm tracking-[0.3em] uppercase block mb-4">Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-display text-white">Areas of Knowledge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfKnowledge.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="mb-6 p-3 w-fit rounded-lg bg-[#003399] text-gold border border-gold/20 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-display text-white mb-3 group-hover:text-gold transition-colors">{area.name}</h3>
                <p className="text-sm text-blue-100/60 leading-relaxed mb-6">
                  {area.description}
                </p>
                <Link href={`/repository?filter=${area.id}`}>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 cursor-pointer">
                    Explore <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATORS */}
      <section className="py-24 px-4 bg-[#002266]/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display mb-12 text-center">Scientific Heritage & Collaboration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborators.map((collab, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 border border-transparent hover:border-gold/20 rounded-xl transition-colors">
                <div className="w-16 h-16 mb-4 rounded-full bg-blue-900 flex items-center justify-center text-gold border border-gold/30">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-display text-white mb-1">{collab.institution}</h4>
                <p className="text-xs uppercase tracking-wider text-gold mb-3">{collab.location}</p>
                <p className="text-sm text-blue-200/60">{collab.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001033] py-16 border-t border-gold/20 text-center">
        <div className="flex justify-center items-center gap-2 mb-8">
           <div className="w-8 h-8 rounded-full bg-[#003399] border border-gold flex items-center justify-center font-display font-bold text-gold">E</div>
           <span className="font-display font-bold text-xl text-white">European Hall of Physics</span>
        </div>
        <div className="flex justify-center gap-8 mb-8 text-sm font-display tracking-widest text-blue-300/60">
          <Link href="/about" className="hover:text-gold transition-colors">Mission</Link>
          <Link href="/repository" className="hover:text-gold transition-colors">Archive</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </div>
        <p className="text-xs text-blue-500 font-mono">
          © {new Date().getFullYear()} European Hall of Physics. All rights reserved. <br/>
          An initiative for scientific preservation.
        </p>
      </footer>
    </div>
  );
}
