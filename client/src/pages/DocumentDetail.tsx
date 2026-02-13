import { useParams, Link, useLocation } from "wouter";
import { documents, areasOfKnowledge } from "../data/documents";
import { ArrowLeft, Download, ExternalLink, User, MapPin, Calendar, Tag, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function DocumentDetail() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  
  const document = documents.find(doc => doc.id === id);
  const area = document ? areasOfKnowledge.find(a => a.id === document.area) : null;

  if (!document) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-display text-white mb-4">Document Not Found</h1>
          <p className="text-blue-100/60 mb-6">The requested document could not be found.</p>
          <Link 
            href="/repository"
            className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest px-6 py-3 border border-[#FFCC00]/20 text-gold hover:border-[#FFCC00]/50 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Repository
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Header */}
      <div className="border-b border-white/5 bg-[#001a4d]/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button
            onClick={() => setLocation("/repository")}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold/60 hover:text-gold transition-colors mb-8 font-display"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Repository
          </button>
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex-grow max-w-4xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-gold/30 bg-[#003399]/40 text-[10px] font-display text-gold uppercase tracking-widest mb-4">
                Academic Document
              </div>
              <h1 
                className="text-3xl md:text-5xl font-display text-white mb-6 leading-tight" 
                style={{ letterSpacing: "-0.01em" }}
              >
                {document.title}
              </h1>
              <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-blue-100/40 font-display">
                <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {document.year}</span>
                <span className="text-gold/20">•</span>
                <Link 
                  href={`/repository?filter=${document.area}`}
                  className="text-gold hover:text-white transition-colors"
                >
                  {area?.name || document.area}
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
              <a
                href={document.pdfUrl}
                className="flex items-center justify-center gap-2 text-xs font-display uppercase tracking-widest px-8 py-4 bg-gold text-[#003399] hover:bg-white transition-all w-full md:w-auto rounded-sm font-bold"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Metadata Sidebar */}
          <div className="lg:col-span-1 space-y-12">
            {/* Authors */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-gold/60 font-display">
                <User className="w-4 h-4" />
                Authors & Affiliation
              </h3>
              <div className="space-y-6">
                {document.authors.map((author, idx) => (
                  <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-white font-display mb-1">{author.name}</p>
                    <p className="text-xs text-blue-100/60 mb-3">{author.affiliation}</p>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-gold/40">
                      <MapPin className="w-3 h-3" />
                      {author.country}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Keywords */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-gold/60 font-display">
                <Tag className="w-4 h-4" />
                Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {document.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-[10px] uppercase tracking-widest border border-white/10 bg-white/5 text-blue-100/60 rounded-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Related Area */}
            {area && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-gold/60 font-display">
                  <ExternalLink className="w-4 h-4" />
                  Contextual Field
                </h3>
                <Link
                  href={`/repository?filter=${document.area}`}
                  className="block p-6 border border-gold/20 bg-[#003399]/20 hover:border-gold/50 transition-all group rounded-lg"
                >
                  <p className="text-white font-display mb-2 group-hover:text-gold transition-colors">{area.name}</p>
                  <p className="text-xs text-blue-100/40 leading-relaxed line-clamp-3">{area.description}</p>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-gold/60 font-display border-b border-white/5 pb-4">
                Abstract
              </h2>
              <p className="text-lg text-blue-100/70 leading-relaxed font-light italic border-l-2 border-gold/20 pl-8 py-2">
                {document.abstract}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-16"
            >
              <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-gold/60 font-display border-b border-white/5 pb-4">
                Document Preview
              </h2>
              <div 
                className="w-full border border-white/10 bg-[#001033]/50 rounded-xl flex items-center justify-center relative group overflow-hidden"
                style={{ height: "600px" }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
                <div className="text-center p-12 relative z-10">
                  <div className="w-32 h-40 mx-auto mb-8 border border-white/20 bg-white/5 flex items-center justify-center rounded-sm shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <FileText className="w-16 h-16 text-gold/20" />
                  </div>
                  <h4 className="text-white font-display text-xl mb-4">Digital Archive Preview</h4>
                  <p className="text-sm text-blue-100/40 mb-8 max-w-md mx-auto leading-relaxed">
                    This document is preserved in the EHOP central servers. 
                    Institutional members can access the interactive reader.
                  </p>
                  <a
                    href={document.pdfUrl}
                    className="inline-flex items-center gap-3 text-xs font-display uppercase tracking-widest px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-[#003399] transition-all rounded-sm font-bold"
                  >
                    <Download className="w-4 h-4" />
                    Secure Download
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
