import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6 overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-gold/5 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-gold/60 mb-2 font-display">
            Get in Touch
          </p>
          <h1 
            className="mb-4 tracking-tight text-white font-display" 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: 700,
              letterSpacing: "-0.01em"
            }}
          >
            Contact Us
          </h1>
          <p className="text-blue-100/60 max-w-2xl leading-relaxed">
            For inquiries about collaborations, repository access, or general information about 
            the European Hall of Physics, please reach out through any of the following channels.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 border border-[#FFCC00]/10 bg-[#001a4d]/30 hover:border-[#FFCC00]/30 transition-all group rounded-xl backdrop-blur-sm"
          >
            <div className="w-12 h-12 border border-[#FFCC00]/20 bg-[#001033] flex items-center justify-center mb-6 group-hover:border-[#FFCC00]/50 transition-colors rounded-lg">
              <Phone className="w-6 h-6 text-gold/60 group-hover:text-gold transition-colors" />
            </div>
            <h3 className="mb-4 text-xs uppercase tracking-wider text-gold/60 font-display">
              Telephone
            </h3>
            <a 
              href="tel:+34695308867"
              className="text-lg text-white hover:text-gold transition-colors block mb-1"
            >
              +34 695 30 88 67
            </a>
            <p className="text-[10px] text-blue-100/40 uppercase tracking-widest">
              Mon – Fri, 9:00 – 17:00 CET
            </p>
          </motion.div>

          {/* Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 border border-[#FFCC00]/10 bg-[#001a4d]/30 hover:border-[#FFCC00]/30 transition-all group rounded-xl backdrop-blur-sm"
          >
            <div className="w-12 h-12 border border-[#FFCC00]/20 bg-[#001033] flex items-center justify-center mb-6 group-hover:border-[#FFCC00]/50 transition-colors rounded-lg">
              <Mail className="w-6 h-6 text-gold/60 group-hover:text-gold transition-colors" />
            </div>
            <h3 className="mb-4 text-xs uppercase tracking-wider text-gold/60 font-display">
              Email
            </h3>
            <a 
              href="mailto:contact@ehop.com"
              className="text-lg text-white hover:text-gold transition-colors break-all block mb-1"
            >
              contact@ehop.com
            </a>
            <p className="text-[10px] text-blue-100/40 uppercase tracking-widest">
              24-48h Response Time
            </p>
          </motion.div>

          {/* LinkedIn */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 border border-[#FFCC00]/10 bg-[#001a4d]/30 hover:border-[#FFCC00]/30 transition-all group rounded-xl backdrop-blur-sm"
          >
            <div className="w-12 h-12 border border-[#FFCC00]/20 bg-[#001033] flex items-center justify-center mb-6 group-hover:border-[#FFCC00]/50 transition-colors rounded-lg">
              <Linkedin className="w-6 h-6 text-gold/60 group-hover:text-gold transition-colors" />
            </div>
            <h3 className="mb-4 text-xs uppercase tracking-wider text-gold/60 font-display">
              LinkedIn
            </h3>
            <a 
              href="https://www.linkedin.com/company/european-hall-of-physics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:text-gold transition-colors block mb-1"
            >
              @EuropeanHall
            </a>
            <p className="text-[10px] text-blue-100/40 uppercase tracking-widest">
              Follow for updates
            </p>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#FFCC00]/10 bg-[#001a4d]/20 p-8 rounded-xl mb-8"
        >
          <h2 className="mb-8 text-xl font-display text-white border-b border-[#FFCC00]/10 pb-4">
            General Inquiries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-blue-100/60 leading-relaxed">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold/60 mb-2 font-display">
                  Repository Access
                </p>
                <p>
                  Questions about uploading or metadata? Reach out to our technical team: <br/>
                  <a href="mailto:repository@ehop.eu" className="text-gold hover:underline">repository@ehop.eu</a>
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold/60 mb-2 font-display">
                  Press & Media
                </p>
                <p>
                  For media requests or interviews: <br/>
                  <a href="mailto:press@ehop.eu" className="text-gold hover:underline">press@ehop.eu</a>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold/60 mb-2 font-display">
                  Institutional Partnerships
                </p>
                <p>
                  Interested in joining our collaborator network? <br/>
                  <a href="mailto:partnerships@ehop.eu" className="text-gold hover:underline">partnerships@ehop.eu</a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#FFCC00]/10 bg-[#001a4d]/20 p-8 rounded-xl"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 border border-[#FFCC00]/20 bg-[#001033] flex items-center justify-center shrink-0 rounded-lg">
              <MapPin className="w-6 h-6 text-gold/60" />
            </div>
            <div>
              <h2 className="mb-4 text-xl font-display text-white">Administrative Office</h2>
              <div className="text-sm text-blue-100/60 space-y-1">
                <p className="text-white font-medium">European Hall of Physics</p>
                <p>Oviedo, Asturias</p>
                <p>Spain, EU</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
