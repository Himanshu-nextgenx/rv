import { Button } from "@/components/ui/button";
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import footerLogo from "@/assets/logo.png";

/* ================= FOOTER LINKS ================= */
const footerLinks = {
  services: [
    "Cinematic Video Production",
    "Professional Photography",
    "Digital Marketing",
    "Brand Identity Design",
    "Social Media Handling",
    "Wedding & Prewedding Shoots",
  ],
  company: ["About Us", "Our Work", "Careers", "Contact Us"],
};

/* ================= SOCIAL LINKS ================= */
const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

/* ================= FOOTER COMPONENT ================= */
export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      {/* Main Footer */}
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img
                src={footerLogo}
                alt="RV Visionary"
                className="h-12 w-auto object-contain mix-blend-screen scale-125"
              />
              <span className="font-black text-2xl tracking-tighter">
                RV <span className="text-primary">VISIONARY</span>
              </span>
            </div>

            <p className="text-secondary-foreground/60 mb-8 text-lg leading-relaxed max-w-sm">
              Empowering brands through creative visual storytelling and digital
              excellence. We turn visions into cinematic reality.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-xl mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-secondary-foreground/60 hover:text-primary flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all duration-300 text-primary" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-xl mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-secondary-foreground/60 hover:text-primary flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all duration-300 text-primary" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Get In Touch
            </h4>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/40 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm text-secondary-foreground/80">
                    Film City Road, Goregaon East, Mumbai – 400063
                  </p>
                </div>
              </div>
              {/* WhatsApp */}
              <div className="flex gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/40 transition">
                <div className="w-10 h-10 rounded-2xl bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/40 uppercase tracking-wider">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20RV%20Visionary%2C%20I%20want%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-secondary-foreground/80 hover:text-green-500"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-secondary-foreground/40 text-sm">
            © 2026 RV Visionary. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-secondary-foreground/40 hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/40 hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
