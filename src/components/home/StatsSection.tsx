import { Calendar, Award, Users, GraduationCap } from "lucide-react";

const stats = [
  { icon: Calendar, value: "5+", label: "Years Experience" },
  { icon: Award, value: "30+", label: "Treatments" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: GraduationCap, value: "500+", label: "Trained Professionals" },
];

const StatsSection = () => {
  return (
    <section className="py-20 glossy-dark text-secondary-foreground relative overflow-hidden">
      {/* Decorative African Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="africanPattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#africanPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="glossy-icon w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-spa-gold" />
              </div>
              <div className="font-serif text-4xl md:text-5xl mb-2 text-secondary-foreground">
                {stat.value}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-secondary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
