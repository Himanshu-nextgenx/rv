import { Button } from "@/components/ui/button";
import { Star, Sparkles, Code, Smartphone } from "lucide-react";
import heroPerson from "@/assets/hero_coding_developer.png";

export const HeroSection = () => {
  return (
    <section className="section-white min-h-screen pt-32 pb-16 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Expert Full-Stack Developer</span>
            </div>

            <h1 className="heading-xl mb-6">
              Building Scalable <span className="text-primary">Software</span> Solutions
            </h1>

            <p className="body-lg mb-8 max-w-lg">
              I help businesses build powerful web and mobile applications, from
              concept to deployment, with a focus on UI/UX and performance.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg">
                Start Your Project
              </Button>
              <Button variant="heroOutline" size="lg">
                View Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-primary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by 50+ clients
                </p>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative animate-fade-in-right">
            {/* Main Image Container */}
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden bg-muted aspect-[4/5] max-w-md mx-auto shadow-premium-lg">
                <img
                  src={heroPerson}
                  alt="Creative Director"
                  className="w-full h-full object-cover object-top"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              </div>

              {/* Floating Badge - Experience */}
              <div className="absolute -right-4 top-1/4 bg-secondary text-secondary-foreground px-4 py-3 rounded-2xl shadow-premium-lg animate-float">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <div>
                    <p className="text-xl font-bold">5+</p>
                    <p className="text-xs text-secondary-foreground/70">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Icon - Code */}
              <div className="absolute -left-6 top-1/3 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-neon animate-float" style={{ animationDelay: "0.5s" }}>
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Floating Icon - Smartphone */}
              <div className="absolute -left-2 bottom-1/4 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-premium animate-float" style={{ animationDelay: "1s" }}>
                <Smartphone className="w-6 h-6 text-primary" />
              </div>

              {/* Decorative Scribbles */}
              <svg
                className="absolute -right-12 bottom-12 w-24 h-24 text-primary opacity-60"
                viewBox="0 0 100 100"
              >
                <path
                  d="M10 50 Q 30 30, 50 50 T 90 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Dots Pattern */}
              <div className="absolute -right-8 -top-8 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary/30"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
