import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Header() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/repository", label: "Repository" },
    { href: "/collaborators", label: "Collaborators" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#001f5c]/90 backdrop-blur-md border-b border-gold/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-gold bg-[#003399] group-hover:scale-105 transition-transform">
              <span className="font-display font-bold text-gold text-xl">E</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-white leading-none">European Hall</span>
              <span className="font-body text-xs text-gold tracking-widest uppercase">of Physics</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "font-display text-sm font-semibold tracking-wide transition-colors duration-200 uppercase relative py-2",
                  location === link.href 
                    ? "text-gold" 
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
                {location === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold shadow-[0_0_10px_rgba(255,204,0,0.5)]" />
                )}
              </Link>
            ))}
          </nav>

  
        </div>
      </div>
    </header>
  );
}
