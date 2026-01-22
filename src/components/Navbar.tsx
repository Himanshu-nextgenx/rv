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
        <a href="#" className="flex items-center gap-2 pr-4">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 100 80" className="w-full h-full">
              {/* R shape */}
              <path
                d="M10 70 L10 10 L30 10 L45 25 L30 40 L50 70 L38 70 L22 45 L22 70 Z"
                fill="currentColor"
                className="text-secondary-foreground"
              />
              {/* V shape with camera lens */}
              <path
                d="M45 10 L60 50 L75 10 L88 10 L65 70 L55 70 L32 10 Z"
                fill="currentColor"
                className="text-secondary-foreground"
              />
              {/* Camera lens circle */}
              <circle cx="60" cy="28" r="8" fill="hsl(200 80% 50%)" />
              <circle cx="60" cy="28" r="4" fill="hsl(200 90% 30%)" />
              <circle cx="58" cy="26" r="1.5" fill="hsl(200 80% 70%)" />
            </svg>
          </div>
          <span className="font-bold text-secondary-foreground hidden sm:inline tracking-wider">
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
