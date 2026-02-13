import { useParams, Link, useNavigate } from "react-router-dom";
import { documents, areasOfKnowledge } from "../data/documents";
import { ArrowLeft, Download, ExternalLink, User, MapPin, Calendar, Tag } from "lucide-react";

export function DocumentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const document = documents.find(doc => doc.id === id);
  const area = document ? areasOfKnowledge.find(a => a.id === document.area) : null;

  if (!document) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Document Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested document could not be found.</p>
          <Link 
            to="/repository"
            className="inline-flex items-center gap-2 text-sm px-6 py-3 border border-border hover:border-[#4A90E2] hover:text-[#4A90E2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Repository
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          <div className="flex items-start justify-between gap-8">
            <div className="flex-grow max-w-3xl">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                Academic Document
              </p>
              <h1 
                className="mb-4 tracking-tight leading-tight" 
                style={{ 
                  fontSize: "2rem", 
                  fontWeight: 300,
                  letterSpacing: "-0.01em"
                }}
              >
                {document.title}
              </h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap">
                <span>{document.year}</span>
                <span>•</span>
                <Link 
                  to={`/area/${document.area}`}
                  className="hover:text-foreground transition-colors"
                  style={{ color: "#4A90E2" }}
                >
                  {area?.name}
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={document.pdfUrl}
                download
                className="flex items-center gap-2 text-sm px-6 py-3 bg-[#4A90E2]/10 border border-[#4A90E2]/30 hover:bg-[#4A90E2]/20 transition-colors"
                style={{ color: "#4A90E2" }}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Metadata Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Authors */}
              <div>
                <h3 className="flex items-center gap-2 mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  <User className="w-4 h-4" />
                  Authors
                </h3>
                <div className="space-y-4">
                  {document.authors.map((author, idx) => (
                    <div key={idx} className="pb-4 border-b border-border/50 last:border-0">
                      <p className="mb-1">{author.name}</p>
                      <p className="text-sm text-muted-foreground">{author.affiliation}</p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {author.country}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publication Info */}
              <div>
                <h3 className="flex items-center gap-2 mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Publication Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Year</p>
                    <p className="text-sm">{document.year}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Primary Country</p>
                    <p className="text-sm">{document.country}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Field of Study</p>
                    <Link 
                      to={`/area/${document.area}`}
                      className="text-sm hover:text-[#4A90E2] transition-colors"
                    >
                      {area?.name}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Keywords */}
              <div>
                <h3 className="flex items-center gap-2 mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  <Tag className="w-4 h-4" />
                  Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {document.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs border border-border/50 bg-card/30"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Area */}
              {area && (
                <div>
                  <h3 className="flex items-center gap-2 mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                    <ExternalLink className="w-4 h-4" />
                    Related Area
                  </h3>
                  <Link
                    to={`/area/${document.area}`}
                    className="block p-4 border border-border/50 hover:border-[#4A90E2] transition-colors group"
                  >
                    <p className="text-sm mb-2 group-hover:text-[#4A90E2] transition-colors">{area.name}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">{area.description}</p>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Abstract */}
            <div className="mb-12">
              <h2 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                Abstract
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {document.abstract}
              </p>
            </div>

            {/* PDF Viewer Placeholder */}
            <div>
              <h2 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                Document Preview
              </h2>
              <div 
                className="w-full border border-border/50 bg-card/20 flex items-center justify-center"
                style={{ height: "800px" }}
              >
                <div className="text-center p-8">
                  <div className="w-24 h-32 mx-auto mb-6 border-2 border-border flex items-center justify-center">
                    <div className="text-6xl text-muted-foreground/20">📄</div>
                  </div>
                  <p className="text-muted-foreground mb-4">PDF Viewer</p>
                  <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                    In a production environment, this area would display an embedded PDF viewer 
                    showing the full document content.
                  </p>
                  <a
                    href={document.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 text-sm px-6 py-3 border border-border hover:border-[#4A90E2] hover:text-[#4A90E2] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Full Document
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
