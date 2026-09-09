import { Check, Shield, Award, Users, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Effective Treatments",
    description: "Every treatment is carefully curated to be safe and effective, using proven techniques that deliver visible results.",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    description: "Our aestheticians hold specialized certifications and stay updated with the latest industry techniques and innovations.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We use only the finest products from trusted brands, ensuring optimal results without irritation.",
  },
  {
    icon: Users,
    title: "Welcoming Environment",
    description: "A warm and inviting space where every client feels understood, celebrated, and pampered from the moment they walk in.",
  },
  {
    icon: Check,
    title: "Proven Results",
    description: "Our clients consistently see visible improvements in their skin health, tone, and texture with our targeted treatments.",
  },
  {
    icon: Clock,
    title: "Personalized Approach",
    description: "Every treatment plan is customized to your unique concerns, goals, and lifestyle for lasting results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-spa-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-spa-gold rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="subheading text-spa-gold mb-4">Why Choose Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary-foreground mb-6">
            The ZealAesthetics Difference
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
            We don't just offer spa treatments — we provide a transformative experience 
            designed to help you look and feel your absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-sm border border-spa-gold/20 bg-secondary-foreground/5 backdrop-blur-sm hover:border-spa-gold/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-spa-gold/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-spa-gold" />
              </div>
              <h3 className="font-serif text-xl text-secondary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
