import { useRef, useState, useEffect } from "react";
import { Users, Clock, Briefcase } from "lucide-react";

const stats = [
  {
    target: 50,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    target: 5,
    suffix: "+",
    label: "Years Experience",
    icon: Clock,
  },
  {
    target: 70,
    suffix: "+",
    label: "Projects Completed",
    icon: Briefcase,
  },
];

const useCounter = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(target * percentage));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return count;
};

const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const count = useCounter(stat.target);

  return (
    <div
      className="stat-card group hover:bg-white/10 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
      <p className="stat-number">
        {count}{stat.suffix}
      </p>
      <p className="text-secondary-foreground/70 text-sm font-medium">
        {stat.label}
      </p>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
