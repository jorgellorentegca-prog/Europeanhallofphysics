import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { documents, areasOfKnowledge } from "../data/documents";
import { Search, Filter, FileText, Download, ChevronLeft, ChevronRight } from "lucide-react";

export function Repository() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const countries = useMemo(() => {
    const countrySet = new Set<string>();
    documents.forEach(doc => {
      countrySet.add(doc.country);
      doc.authors.forEach(author => countrySet.add(author.country));
    });
    return Array.from(countrySet).sort();
  }, []);

  const years = useMemo(() => {
    const yearSet = new Set<number>();
    documents.forEach(doc => yearSet.add(doc.year));
    return Array.from(yearSet).sort((a, b) => b - a);
  }, []);

  const filteredDocuments = useMemo(() => {
    return documents.filter(doc => {
      const matchesSearch = searchTerm === "" || 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.authors.some(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesArea = selectedArea === "all" || doc.area === selectedArea;
      const matchesCountry = selectedCountry === "all" || 
        doc.country === selectedCountry ||
        doc.authors.some(a => a.country === selectedCountry);
      const matchesYear = selectedYear === "all" || doc.year.toString() === selectedYear;

      return matchesSearch && matchesArea && matchesCountry && matchesYear;
    });
  }, [searchTerm, selectedArea, selectedCountry, selectedYear]);

  const currentDocuments = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredDocuments.slice(startIndex, endIndex);
  }, [filteredDocuments, currentPage]);

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedArea, selectedCountry, selectedYear]);

  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
            Academic Repository
          </p>
          <h1 
            className="mb-4 tracking-tight" 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: 300,
              letterSpacing: "-0.01em"
            }}
          >
            Document Repository
          </h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            A curated collection of academic exercises, research papers, and educational materials 
            contributed by physicists and researchers across European institutions.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-10 space-y-5">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by title, abstract, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-card border border-border text-sm focus:outline-none focus:border-[#4A90E2] transition-colors placeholder:text-muted-foreground/60"
            />
          </div>

          {/* Filters */}
          <div className="bg-card/30 border border-border/50 p-5">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Filters:</span>
              </div>

              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-2 bg-background border border-border text-sm focus:outline-none focus:border-[#4A90E2] cursor-pointer transition-colors"
              >
                <option value="all">All Areas</option>
                {areasOfKnowledge.map(area => (
                  <option key={area.id} value={area.id}>{area.name}</option>
                ))}
              </select>

              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-2 bg-background border border-border text-sm focus:outline-none focus:border-[#4A90E2] cursor-pointer transition-colors"
              >
                <option value="all">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 bg-background border border-border text-sm focus:outline-none focus:border-[#4A90E2] cursor-pointer transition-colors"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              {(searchTerm || selectedArea !== "all" || selectedCountry !== "all" || selectedYear !== "all") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedArea("all");
                    setSelectedCountry("all");
                    setSelectedYear("all");
                  }}
                  className="ml-auto text-xs px-3 py-1.5 border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Results summary */}
          <div className="flex items-center justify-between px-1">
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground">{filteredDocuments.length}</span> {filteredDocuments.length === 1 ? 'result' : 'results'} found
              {filteredDocuments.length > 0 && totalPages > 1 && (
                <span> • Page {currentPage} of {totalPages}</span>
              )}
            </p>
            {filteredDocuments.length > 0 && (
              <p className="text-xs text-muted-foreground">
                Showing {((currentPage - 1) * itemsPerPage) + 1}–{Math.min(currentPage * itemsPerPage, filteredDocuments.length)} of {filteredDocuments.length}
              </p>
            )}
          </div>
        </div>

        {/* Document List */}
        <div className="space-y-3">
          {currentDocuments.length === 0 ? (
            <div className="text-center py-20 border border-border/50">
              <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-30" />
              <p className="text-muted-foreground">No documents found matching your criteria</p>
            </div>
          ) : (
            currentDocuments.map(doc => {
              const area = areasOfKnowledge.find(a => a.id === doc.area);
              return (
                <article
                  key={doc.id}
                  className="bg-card border border-border hover:border-[#4A90E2] transition-all duration-200 group"
                >
                  <div className="p-6">
                    <div className="flex gap-5">
                      {/* File Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-18 border border-border bg-background flex flex-col items-center justify-center group-hover:border-[#4A90E2] transition-colors">
                          <FileText className="w-7 h-7 text-muted-foreground group-hover:text-[#4A90E2] transition-colors mb-1" />
                          <span className="text-[9px] uppercase tracking-wider text-muted-foreground">PDF</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow min-w-0">
                        {/* Title and Metadata */}
                        <div className="mb-3">
                          <Link 
                            to={`/document/${doc.id}`}
                            className="group/title"
                          >
                            <h3 className="text-base mb-2 leading-snug group-hover/title:text-[#4A90E2] transition-colors">
                              {doc.title}
                            </h3>
                          </Link>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                            <span className="text-foreground/80">{doc.authors.map(a => a.name).join(", ")}</span>
                            <span className="text-muted-foreground/40">•</span>
                            <span>{doc.year}</span>
                          </div>
                        </div>

                        {/* Abstract */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                          {doc.abstract}
                        </p>

                        {/* Tags and Actions Row */}
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          {/* Tags */}
                          <div className="flex items-center gap-2 flex-wrap">
                            {/* Country Badge */}
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-background border border-border/70 text-xs">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                              </svg>
                              {doc.country}
                            </span>

                            {/* Area Badge */}
                            <Link
                              to={`/area/${doc.area}`}
                              className="inline-flex items-center px-2.5 py-1 border border-border/50 text-xs hover:border-[#4A90E2]/50 hover:text-[#4A90E2] transition-colors"
                              style={{ color: "#4A90E2", borderColor: "rgba(74, 144, 226, 0.2)" }}
                            >
                              {area?.name}
                            </Link>

                            {/* Keywords */}
                            {doc.keywords.slice(0, 2).map((keyword, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2.5 py-1 bg-muted/30 border border-border/40 text-xs text-muted-foreground"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            <Link
                              to={`/document/${doc.id}`}
                              className="text-xs px-4 py-2 border border-border hover:border-[#4A90E2] hover:text-[#4A90E2] transition-colors whitespace-nowrap"
                            >
                              View
                            </Link>
                            <a
                              href={doc.pdfUrl}
                              className="text-xs px-4 py-2 border transition-colors flex items-center gap-1.5 whitespace-nowrap"
                              style={{ 
                                color: "#4A90E2",
                                borderColor: "rgba(74, 144, 226, 0.3)",
                                backgroundColor: "rgba(74, 144, 226, 0.05)"
                              }}
                            >
                              <Download className="w-3.5 h-3.5" />
                              Download
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 border-t border-border/50 pt-8">
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2.5 border text-sm transition-colors ${
                  currentPage === 1
                    ? 'border-border/30 text-muted-foreground/40 cursor-not-allowed'
                    : 'border-border hover:border-[#4A90E2] hover:text-[#4A90E2]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                  // Show first, last, current, and pages around current
                  const showPage = page === 1 || 
                                   page === totalPages || 
                                   Math.abs(page - currentPage) <= 1;
                  
                  const showEllipsis = (page === currentPage - 2 && currentPage > 3) ||
                                      (page === currentPage + 2 && currentPage < totalPages - 2);

                  if (showEllipsis) {
                    return (
                      <span key={page} className="px-2 text-muted-foreground">
                        …
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`min-w-[36px] h-9 px-3 text-sm border transition-colors ${
                        page === currentPage
                          ? 'border-[#4A90E2] bg-[#4A90E2]/10 text-[#4A90E2]'
                          : 'border-border hover:border-[#4A90E2]/50 hover:text-[#4A90E2]'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2.5 border text-sm transition-colors ${
                  currentPage === totalPages
                    ? 'border-border/30 text-muted-foreground/40 cursor-not-allowed'
                    : 'border-border hover:border-[#4A90E2] hover:text-[#4A90E2]'
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Page info */}
            <div className="text-center mt-4">
              <p className="text-xs text-muted-foreground">
                Page {currentPage} of {totalPages} • {filteredDocuments.length} total {filteredDocuments.length === 1 ? 'document' : 'documents'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}