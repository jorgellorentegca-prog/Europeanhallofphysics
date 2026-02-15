import { motion } from "framer-motion";
import metropolParasol from "@assets/metropol-parasol-1_1771178528548.jpg";
import atomiumBruselas from "@assets/atomium-bruselas_1771178528549.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6 overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-widest uppercase text-gold/60 mb-3 font-display">
            Our Foundation
          </p>
          <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-tight">
            Facilitating physics collaboration <br/> among Europe
          </h1>
          <div className="h-1 w-20 bg-gold mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Content Section with Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-display text-white">The EHOP Mission</h2>
            <p className="text-blue-100/60 leading-relaxed text-lg">
              The European Hall of Physics (EHOP) is an independent initiative that aims to explore 
              physics issues of interest to industry, businesses, and academics today.
              Regardless of the field you have studied or the educational path you have followed, I 
              believe that we have all encountered something at some point that our teachers have said, 
              “I won't explain because it's outside the syllabus,” or “it's interesting, but it's not 
              worth it/we're running out of time.” This project is not a page for disseminating physics 
              exercises for university entrance exams or physics theory without any background, but 
              rather for all those brilliant ideas that, for one reason or another, were left on the 
              drawing board.
            </p>
            <p className="text-blue-100/40 leading-relaxed">
              From seminal exercises in Oviedo to research papers in Geneva, we collect 
              materials that showcase the unique pedagogical approaches of different 
              European institutions, professors and researchers.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-[#FFCC00]/20 shadow-2xl group"
          >
            <img src={metropolParasol} alt="Metropol Parasol" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Content Section with Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-[#FFCC00]/20 shadow-2xl group order-2 lg:order-1"
          >
            <img src={atomiumBruselas} alt="Atomium Brussels" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 pointer-events-none"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-2xl font-display text-white">European Collaboration</h2>
            <p className="text-blue-100/60 leading-relaxed text-lg">
              Our network spans across borders, uniting institutions all through Europe. 
              By standardizing physics metadata, we enable a truly continental approach to 
              academic preservation and discovery.
            </p>
            <ul className="space-y-4">
              {[
                "Institutional verification of all archives",
                "Standardized European credit equivalents",
                "Multilingual metadata support",
                "Open access for verified researchers"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-blue-100/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center border-t border-white/5 pt-16"
        >
          <p className="text-2xl font-display text-gold italic max-w-2xl mx-auto leading-relaxed">
            "If you want to learn physics, you must do physics."
          </p>
          <p className="mt-6 text-blue-100/40 uppercase tracking-[0.3em] text-[10px]">
            Jorge Llorente
          </p>
        </motion.div>
      </div>
    </div>
  );
}
