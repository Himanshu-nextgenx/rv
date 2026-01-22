import { Users, Clock, Briefcase, Eye } from "lucide-react";

const stats = [
  {
    number: "2000+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: "10+",
    label: "Years Experience",
    icon: Clock,
  },
  {
    number: "800+",
    label: "Projects Completed",
    icon: Briefcase,
  },
  {
    number: "150M+",
    label: "Social Reach",
    icon: Eye,
  },
];

export const StatsSection = () => {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card group hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <p className="stat-number">{stat.number}</p>
              <p className="text-secondary-foreground/70 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
