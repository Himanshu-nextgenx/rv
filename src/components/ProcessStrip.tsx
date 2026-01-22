import { Sparkles } from "lucide-react";

export const ProcessStrip = () => {
  return (
    <section className="bg-secondary py-12 overflow-hidden">
      <div className="flex items-center justify-center gap-8 animate-fade-in">
        <span className="heading-lg text-secondary-foreground">Innovate</span>
        <Sparkles className="w-10 h-10 text-primary" />
        <span className="heading-lg text-secondary-foreground">Inspire</span>
        <Sparkles className="w-10 h-10 text-primary" />
        <span className="heading-lg text-secondary-foreground">Create</span>
      </div>
    </section>
  );
};
