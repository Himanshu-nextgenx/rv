import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import contactPerson from "@/assets/contact-person.jpg";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const services = [
    "App Development",
    "Website Development",
    "Ecommerce Solutions",
    "Food Delivery Systems",
    "UI/UX Design",
    "Custom Software",
  ];

  return (
    <section id="contact" className="section-white py-20 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium">GET IN TOUCH</span>
          </span>
          <h2 className="heading-lg">
            Let's <span className="text-primary">Work</span> Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Contact Form */}
          <div className="bg-muted rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-2xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-2xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Required
                </label>
                <select
                  className="w-full px-5 py-4 rounded-2xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none cursor-pointer"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button variant="neon" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Right Side - Image & Contact Info */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-premium-lg mb-8">
              <img
                src={contactPerson}
                alt="Our friendly team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4 max-w-md mx-auto">
              <div className="flex items-center gap-4 p-4 bg-secondary rounded-2xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/70">Email</p>
                  <p className="font-semibold text-secondary-foreground">
                    sonudeveloper4141@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-2xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/70">Phone</p>
                  <p className="font-semibold text-secondary-foreground">
                    +91 7597 607 080
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-2xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/70">
                    Location
                  </p>
                  <p className="font-semibold text-secondary-foreground">
                    Hanuman circle Alwar Rajasthan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
