import { useState } from "react";
import { Play, X } from "lucide-react";
import workWedding from "@/assets/ecommerce_project.png";
import workProduct from "@/assets/food_delivery_project.png";
import workVideo from "@/assets/app_development_mockup.png";
import workBrand from "@/assets/ui_ux_design.png";
import workWeb from "@/assets/web_dev_project.png";

const works = [
  {
    id: 1,
    title: "FoodieApp Delivery",
    category: "App Dev",
    image: workProduct,
    isVideo: false,
  },
  {
    id: 2,
    title: "ElectroStore Ecom",
    category: "Web Dev",
    image: workWeb,
    isVideo: false,
  },
  {
    id: 3,
    title: "HealthConnect App",
    category: "App Dev",
    image: workVideo,
    isVideo: false,
  },
  {
    id: 4,
    title: "Portfolio CMS",
    category: "Web Dev",
    image: workBrand,
    isVideo: false,
  },
  {
    id: 5,
    title: "EduTech Platform",
    category: "Web Dev",
    image: workWeb,
    isVideo: false,
  },
  {
    id: 6,
    title: "QuickDash Logistics",
    category: "App Dev",
    image: workProduct,
    isVideo: false,
  },
];

export const WorkSection = () => {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "App Dev", "Web Dev"];

  const filteredWorks =
    filter === "All"
      ? works
      : works.filter((work) => work.category === filter);

  return (
    <section id="work" className="section-white py-20 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium">PORTFOLIO</span>
          </span>
          <h2 className="heading-lg">
            Our <span className="text-primary">Work</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                ? "bg-secondary text-secondary-foreground"
                : "bg-muted text-muted-foreground hover:bg-secondary/10"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              className="work-card group aspect-[4/3] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedWork(work.id)}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="tag-neon text-xs mb-2">{work.category}</span>
                  <h3 className="text-xl font-bold text-secondary-foreground">
                    {work.title}
                  </h3>
                </div>
              </div>

              {/* Play Button for Videos */}
              {work.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75 shadow-neon">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-xs font-medium rounded-full">
                  {work.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedWork(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
            onClick={() => setSelectedWork(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full mx-4 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-3xl overflow-hidden shadow-premium-lg">
              <img
                src={works.find((w) => w.id === selectedWork)?.image}
                alt="Selected work"
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-2">
                {works.find((w) => w.id === selectedWork)?.title}
              </h3>
              <p className="text-primary font-medium">
                {works.find((w) => w.id === selectedWork)?.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
