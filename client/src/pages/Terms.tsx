import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6 overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-[10%] left-[5%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[110px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-gold/60 mb-2 font-display">
            Legal Documentation
          </p>
          <h1 
            className="mb-4 tracking-tight text-white font-display" 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: 700,
              letterSpacing: "-0.01em"
            }}
          >
            Terms of Service
          </h1>
          <p className="text-blue-100/60 max-w-2xl leading-relaxed">
            Last updated: January 15, 2026
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="bg-[#001a4d]/20 p-8 rounded-xl border border-[#FFCC00]/10 backdrop-blur-sm">
            <h2 className="mb-6 text-xl font-display text-white flex items-center gap-3">
              <span className="text-gold">01.</span> Acceptance of Terms
            </h2>
            <div className="space-y-4 text-sm text-blue-100/60 leading-relaxed">
              <p>
                Welcome to the European Hall of Physics ("EHOP", "we", "us", or "our"). By accessing 
                or using our website and repository platform (the "Service"), you agree to be bound by 
                these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use 
                the Service.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and EHOP. We reserve the 
                right to modify these Terms at any time, and your continued use of the Service constitutes 
                acceptance of any changes.
              </p>
            </div>
          </section>

          {/* Account Registration */}
          <section className="bg-[#001a4d]/20 p-8 rounded-xl border border-[#FFCC00]/10 backdrop-blur-sm">
            <h2 className="mb-6 text-xl font-display text-white flex items-center gap-3">
              <span className="text-gold">02.</span> Account Registration
            </h2>
            <div className="space-y-6 text-sm text-blue-100/60 leading-relaxed">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold/60 mb-3 font-display">
                  2.1 Eligibility
                </p>
                <p>
                  The Service is intended for researchers, academics, students, and professionals in the 
                  field of physics. You must be at least 18 years old or have reached the age of majority 
                  in your jurisdiction to use this Service.
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold/60 mb-3 font-display">
                  2.2 Account Responsibility
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and 
                  for all activities that occur under your account. You agree to notify us immediately of 
                  any unauthorized use of your account.
                </p>
              </div>
            </div>
          </section>

          {/* Repository Usage */}
          <section className="bg-[#001a4d]/20 p-8 rounded-xl border border-[#FFCC00]/10 backdrop-blur-sm">
            <h2 className="mb-6 text-xl font-display text-white flex items-center gap-3">
              <span className="text-gold">03.</span> Repository Usage
            </h2>
            <div className="space-y-6 text-sm text-blue-100/60 leading-relaxed">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold/60 mb-3 font-display">
                  3.1 Content Ownership
                </p>
                <p>
                  You retain all ownership rights to content you submit to the repository. By uploading 
                  content, you grant EHOP a worldwide, non-exclusive, royalty-free license to host, store, 
                  reproduce, and distribute your content for the purposes of operating the repository.
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold/60 mb-3 font-display">
                  3.2 Academic Integrity
                </p>
                <p>
                  All submitted content must adhere to academic integrity standards. Plagiarism, 
                  fabrication of data, or any form of academic misconduct is strictly prohibited and 
                  may result in immediate account termination.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="bg-[#001a4d]/20 p-8 rounded-xl border border-[#FFCC00]/10 backdrop-blur-sm mb-16">
            <h2 className="mb-6 text-xl font-display text-white flex items-center gap-3">
              <span className="text-gold">04.</span> Governing Law
            </h2>
            <div className="space-y-4 text-sm text-blue-100/60 leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Switzerland, 
                without regard to its conflict of law provisions. Any disputes arising from these Terms 
                shall be subject to the exclusive jurisdiction of the courts of Geneva, Switzerland.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center text-[10px] uppercase tracking-[0.2em] text-blue-500/40">
          European Hall of Physics • Legal Department
        </div>
      </div>
    </div>
  );
}
