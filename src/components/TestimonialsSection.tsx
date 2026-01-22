import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "CEO, TechStart India",
    content:
      "RV Visionary transformed our brand identity completely. Their attention to detail and creative vision exceeded all our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Founder, Lifestyle Co.",
    content:
      "The video production quality was outstanding. They captured the essence of our brand perfectly. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita & Vikram",
    role: "Wedding Clients",
    content:
      "Our wedding film was absolutely magical. Every moment was captured beautifully. We couldn't have asked for better!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="reviews" className="section-dark py-20 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="tag-neon mb-6">TESTIMONIALS</span>
          <h2 className="heading-lg text-secondary-foreground">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card text-card-foreground rounded-3xl p-8 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
