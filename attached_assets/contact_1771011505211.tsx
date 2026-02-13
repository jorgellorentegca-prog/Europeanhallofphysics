import { Mail, Phone, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
            Get in Touch
          </p>
          <h1 
            className="mb-4 tracking-tight" 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: 300,
              letterSpacing: "-0.01em"
            }}
          >
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            For inquiries about collaborations, repository access, or general information about 
            the European Hall of Physics, please reach out through any of the following channels.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <div className="p-8 border border-border/50 hover:border-[#4A90E2] transition-colors group">
            <div className="w-12 h-12 border border-border bg-background flex items-center justify-center mb-6 group-hover:border-[#4A90E2] transition-colors">
              <Phone className="w-6 h-6 text-muted-foreground group-hover:text-[#4A90E2] transition-colors" />
            </div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Telephone
            </h3>
            <a 
              href="tel:+41227678484"
              className="text-lg hover:text-[#4A90E2] transition-colors"
            >
              +34 695 30 88 67
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Monday – Friday, 9:00 – 17:00 CET
            </p>
          </div>

          {/* Email */}
          <div className="p-8 border border-border/50 hover:border-[#4A90E2] transition-colors group">
            <div className="w-12 h-12 border border-border bg-background flex items-center justify-center mb-6 group-hover:border-[#4A90E2] transition-colors">
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-[#4A90E2] transition-colors" />
            </div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Email
            </h3>
            <a 
              href="mailto:jorge.llorentegca@gmail.com"
              className="text-lg hover:text-[#4A90E2] transition-colors break-all"
            >
              contact@ehop.com
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              We respond within 24-48 hours
            </p>
          </div>

          {/* LinkedIn */}
          <div className="p-8 border border-border/50 hover:border-[#4A90E2] transition-colors group">
            <div className="w-12 h-12 border border-border bg-background flex items-center justify-center mb-6 group-hover:border-[#4A90E2] transition-colors">
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-[#4A90E2] transition-colors" />
            </div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              LinkedIn
            </h3>
            <a 
              href="https://www.linkedin.com/company/european-hall-of-physics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#4A90E2] transition-colors"
            >
              @EuropeanHallOfPhysics
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Follow us for updates
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="border border-border/50 p-8">
          <h2 className="mb-6 text-xl tracking-tight" style={{ fontWeight: 300 }}>
            General Inquiries
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Repository Access
              </p>
              <p>
                For questions about uploading documents or accessing repository features, 
                please contact our technical team at <a href="mailto:jorge.llorentegca@gmail.com" className="text-[#4A90E2] hover:underline">repository@ehop.eu</a>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Institutional Partnerships
              </p>
              <p>
                If your institution is interested in joining our network of collaborators, 
                reach out to <a href="mailto:jorge.llorentegca@gmail.com" className="text-[#4A90E2] hover:underline">partnerships@ehop.eu</a>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Press & Media
              </p>
              <p>
                For press inquiries and media requests, please contact 
                <a href="mailto:jorge.llorentegca@gmail.com" className="text-[#4A90E2] hover:underline ml-1">press@ehop.eu</a>
              </p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 border border-border/50 p-8">
          <h2 className="mb-6 text-xl tracking-tight" style={{ fontWeight: 300 }}>
            Administrative Office
          </h2>
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p className="mb-2">European Hall of Physics</p>
            <p className="mb-2">Oviedo</p>
            <p className="mb-2">Asturias, Spain</p>
            <p>Spain</p>
          </div>
        </div>
      </div>
    </div>
  );
}
