import { useState, useMemo } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Search, Filter, FileText, Download } from "lucide-react";

interface DocumentItem {
  id: number;
  title: string;
  description: string;
  type: string;
  institution: string | null;
  country: string | null;
  fileUrl: string | null;
  createdAt: string | null;
}

export default function Repository() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");

  const { data: documents = [], isLoading } = useQuery<DocumentItem[]>({
    queryKey: ["/api/documents"],
  });

  const countries = useMemo(() => {
    const countrySet = new Set<string>();
    documents.forEach(doc => {
      if (doc.country) countrySet.add(doc.country);
    });
    return Array.from(countrySet).sort();
  }, [documents]);

  const types = useMemo(() => {
    const typeSet = new Set<string>();
    documents.forEach(doc => typeSet.add(doc.type));
    return Array.from(typeSet).sort();
  }, [documents]);

  const filteredDocuments = useMemo(() => {
    return documents.filter(doc => {
      const matchesSearch = searchTerm === "" ||
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "all" || doc.type === selectedType;
      const matchesCountry = selectedCountry === "all" || doc.country === selectedCountry;
      return matchesSearch && matchesType && matchesCountry;
    });
  }, [documents, searchTerm, selectedType, selectedCountry]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6" data-testid="page-repository">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-widest uppercase text-[#FFCC00]/60 mb-2 font-display">
            Academic Repository
          </p>
          <h1
            className="mb-4 tracking-tight text-white font-display"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              letterSpacing: "-0.01em"
            }}
          >
            Document Repository
          </h1>
          <p className="text-blue-100/60 max-w-3xl leading-relaxed">
            A curated collection of academic exercises, research papers, and educational materials
            contributed by physicists and researchers across European institutions.
          </p>
        </div>

        <div className="mb-10 space-y-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300/40" />
            <input
              type="text"
              placeholder="Search by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              data-testid="input-search"
              className="w-full pl-12 pr-4 py-3.5 bg-[#001a4d]/50 border border-[#FFCC00]/20 text-sm text-white focus:outline-none focus:border-[#FFCC00]/50 transition-colors placeholder:text-blue-300/30 rounded-md"
            />
          </div>

          <div className="bg-[#001a4d]/30 border border-[#FFCC00]/10 p-5 rounded-md">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#FFCC00]/60" />
                <span className="text-xs uppercase tracking-wider text-[#FFCC00]/60 font-display">Filters:</span>
              </div>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                data-testid="select-type"
                className="px-4 py-2 bg-[#001033] border border-[#FFCC00]/20 text-sm text-white focus:outline-none focus:border-[#FFCC00]/50 cursor-pointer transition-colors rounded-md"
              >
                <option value="all">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                ))}
              </select>

              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                data-testid="select-country"
                className="px-4 py-2 bg-[#001033] border border-[#FFCC00]/20 text-sm text-white focus:outline-none focus:border-[#FFCC00]/50 cursor-pointer transition-colors rounded-md"
              >
                <option value="all">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>

              {(searchTerm || selectedType !== "all" || selectedCountry !== "all") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedType("all");
                    setSelectedCountry("all");
                  }}
                  data-testid="button-clear-filters"
                  className="ml-auto text-xs px-3 py-1.5 border border-[#FFCC00]/20 text-[#FFCC00]/60 hover:text-[#FFCC00] hover:border-[#FFCC00]/40 transition-colors rounded-md"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <p className="text-sm text-blue-100/50">
              <span className="text-white">{filteredDocuments.length}</span> {filteredDocuments.length === 1 ? 'result' : 'results'} found
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-20 border border-[#FFCC00]/10 rounded-md">
            <div className="w-8 h-8 border-2 border-[#FFCC00]/30 border-t-[#FFCC00] rounded-full animate-spin mx-auto mb-4" />
            <p className="text-blue-100/40">Loading documents...</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredDocuments.length === 0 ? (
              <div className="text-center py-20 border border-[#FFCC00]/10 rounded-md">
                <FileText className="w-12 h-12 mx-auto mb-4 text-blue-300/20" />
                <p className="text-blue-100/40">No documents found matching your criteria</p>
              </div>
            ) : (
              filteredDocuments.map(doc => (
                <article
                  key={doc.id}
                  data-testid={`card-document-${doc.id}`}
                  className="bg-[#001a4d]/30 border border-[#FFCC00]/10 hover:border-[#FFCC00]/30 transition-all duration-200 group rounded-md"
                >
                  <div className="p-6">
                    <div className="flex gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-[4.5rem] border border-[#FFCC00]/20 bg-[#001033] flex flex-col items-center justify-center group-hover:border-[#FFCC00]/40 transition-colors rounded-md">
                          <FileText className="w-7 h-7 text-[#FFCC00]/40 group-hover:text-[#FFCC00]/70 transition-colors mb-1" />
                          <span className="text-[9px] uppercase tracking-wider text-blue-300/40">{doc.type}</span>
                        </div>
                      </div>

                      <div className="flex-grow min-w-0">
                        <div className="mb-3">
                          <h3 className="text-base mb-2 leading-snug text-white group-hover:text-[#FFCC00] transition-colors font-display">
                            {doc.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-blue-100/40 flex-wrap">
                            {doc.institution && <span className="text-white/70">{doc.institution}</span>}
                            {doc.country && (
                              <>
                                <span className="text-blue-300/20">|</span>
                                <span>{doc.country}</span>
                              </>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-blue-100/50 leading-relaxed mb-4 line-clamp-2">
                          {doc.description}
                        </p>

                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-2 flex-wrap">
                            {doc.country && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#001033] border border-[#FFCC00]/15 text-xs text-blue-100/60 rounded-md">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                </svg>
                                {doc.country}
                              </span>
                            )}
                            <span className="inline-flex items-center px-2.5 py-1 border border-[#FFCC00]/15 text-xs text-[#FFCC00]/70 rounded-md">
                              {doc.type}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {doc.fileUrl && (
                              <a
                                href={doc.fileUrl}
                                data-testid={`link-download-${doc.id}`}
                                className="text-xs px-4 py-2 border border-[#FFCC00]/20 text-[#FFCC00]/70 hover:text-[#FFCC00] hover:border-[#FFCC00]/40 transition-colors flex items-center gap-1.5 whitespace-nowrap rounded-md"
                              >
                                <Download className="w-3.5 h-3.5" />
                                Download
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
