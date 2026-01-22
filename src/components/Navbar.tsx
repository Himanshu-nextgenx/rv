import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-secondary text-secondary-foreground rounded-full px-2 py-2 transition-all duration-500 ${
        isScrolled ? "shadow-2xl" : "shadow-xl"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 pr-4">
          <div className="relative w-12 h-10 flex items-center justify-center">
            <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
              {/* Combined RV shape - outer outline */}
              <path
                d="M5 75 L35 10 L60 55 L85 10 L115 10 L115 15 L88 15 L60 65 L32 15 L10 75 Z"
                fill="white"
              />
              {/* Inner V cutout to create the R effect */}
              <path
                d="M25 65 L45 25 L60 50 L75 25 L95 25 L60 75 Z"
                fill="white"
              />
              {/* Camera lens - outer ring */}
              <circle cx="60" cy="32" r="10" fill="#0EA5E9" />
              {/* Camera lens - inner dark */}
              <circle cx="60" cy="32" r="6" fill="#0C4A6E" />
              {/* Camera lens - highlight */}
              <circle cx="57" cy="29" r="2" fill="#7DD3FC" />
            </svg>
          </div>
          <span className="font-bold text-secondary-foreground hidden sm:inline tracking-[0.2em] text-sm">
            RV VISIONARY
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors rounded-full hover:bg-secondary-foreground/10"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center pl-4">
          <Button variant="neon" size="sm">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-secondary-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-secondary rounded-3xl p-4 shadow-premium-lg animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors rounded-xl hover:bg-secondary-foreground/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-secondary-foreground/10">
            <Button variant="neon" size="sm" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
