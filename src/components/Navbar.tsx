import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed z-50
        top-2 sm:top-4
        left-1/2 -translate-x-1/2
        rounded-full
        bg-secondary/90 backdrop-blur-md
        border border-white/10
        text-secondary-foreground
        transition-all duration-500
        ${isScrolled ? "shadow-2xl py-1.5" : "shadow-xl py-2"}
        
        /* RESPONSIVE WIDTH */
        w-[96vw] sm:w-[92vw] md:w-auto
        max-w-screen-md
      `}
    >
      <div
        className="
          flex items-center justify-between
          px-2 sm:px-4 md:px-6
          gap-1 sm:gap-3
        "
      >
        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="RV Visionary"
            className="
              h-4 sm:h-6 md:h-8
              w-auto object-contain
              mix-blend-screen
            "
          />
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                rounded-full
                transition-colors
                whitespace-nowrap

                px-1.5 sm:px-3 md:px-4
                py-1 sm:py-1.5

                text-[9px]
                sm:text-[11px]
                md:text-xs
                lg:text-sm

                font-medium
                text-secondary-foreground/80
                hover:text-secondary-foreground
                hover:bg-secondary-foreground/10
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <Button
          variant="neon"
          size="sm"
          className="
            h-6 sm:h-8 md:h-9
            px-2 sm:px-3 md:px-4
            text-[9px] sm:text-[11px] md:text-xs lg:text-sm
          "
        >
          Contact
        </Button>
      </div>
    </nav>
  );
};
