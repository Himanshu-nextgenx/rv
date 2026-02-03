import aboutTeam from "@/assets/sonu_singh_about.png";


export const AboutSection = () => {
  return (
    <section id="about" className="section-dark py-20 md:py-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="tag-neon mb-6">FULL-STACK DEVELOPER</span>

            <h2 className="heading-lg text-secondary-foreground mb-6">
              Engineering Digital <span className="text-primary">Experiences</span>
            </h2>

            <p className="text-lg text-secondary-foreground/70 mb-8 leading-relaxed">
              I am Sonu Singh, a passionate developer dedicated to building
              high-quality web and mobile applications. With expertise in
              modern frameworks, I focus on creating scalable solutions that
              solve real-world problems.
            </p>

            <p className="text-lg text-secondary-foreground/70 mb-8 leading-relaxed">
              From the initial brainstorm through to the final line of code,
              I take pride in delivering robust, user-centric software that
              helps businesses thrive in the digital age.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-secondary-foreground font-medium">
                  Award-Winning Team
                </span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-secondary-foreground font-medium">
                  Premium Quality
                </span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-secondary-foreground font-medium">
                  On-Time Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right - Images */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-premium-lg">
              <img
                src={aboutTeam}
                alt="Our creative team at work"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-secondary/90 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-primary font-bold text-lg mb-1">
                    Sonu Developer
                  </p>
                  <p className="text-secondary-foreground/70 text-sm">
                    Where creativity meets excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
