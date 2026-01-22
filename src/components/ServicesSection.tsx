import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import workVideo from "@/assets/work-video.jpg";

const services = [
  {
    number: "01",
    title: "Cinematic Video Production",
    description: "High-end video production with storytelling that captivates",
  },
  {
    number: "02",
    title: "Professional Photography",
    description: "Stunning imagery that brings your brand to life",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description: "Strategic campaigns that drive growth and engagement",
  },
  {
    number: "04",
    title: "Brand Identity Design",
    description: "Complete visual identity systems for memorable brands",
  },
  {
    number: "05",
    title: "Social Media Handling",
    description: "Content creation and management that builds communities",
  },
  {
    number: "06",
    title: "Wedding Photography & Videography",
    description: "Capturing your special moments with cinematic elegance",
  },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="section-dark py-20 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="tag-neon mb-6">WHAT WE DO</span>
          <h2 className="heading-lg text-secondary-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Services List */}
          <div>
            {services.map((service, index) => (
              <div
                key={service.number}
                className={`service-item group ${
                  activeIndex === index ? "border-primary/50" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span
                  className={`service-number text-2xl font-bold transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-primary"
                      : "text-secondary-foreground/30"
                  }`}
                >
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3
                    className={`text-xl font-semibold mb-1 transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-secondary-foreground"
                        : "text-secondary-foreground/70"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-secondary-foreground/50 text-sm">
                    {service.description}
                  </p>
                </div>
                <ArrowRight
                  className={`w-5 h-5 transition-all duration-300 ${
                    activeIndex === index
                      ? "text-primary translate-x-2"
                      : "text-secondary-foreground/30"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Featured Image & CTAs */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] mb-8 shadow-premium-lg">
                <img
                  src={workVideo}
                  alt="Our production work"
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-neon hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-primary-foreground ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="neon" size="lg" className="flex-1">
                  See How We Work
                </Button>
                <Button
                  variant="neonOutline"
                  size="lg"
                  className="flex-1"
                >
                  Meet Our Experts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
